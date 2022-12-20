# Initialize Azure SQL

![The image shows sql set up](../img/sql-setup.png)

For now a manual process. This may be automated in the future.

1. Open the Azure Portal
1. Navigate to the Azure SQL Database named `predictive-maintenance`
1. Open the Query Editor
1. Authenticate with the Azure SQL Database using the SQL Admin user and password you used when you deployed the solution.
1. Create the **_telemetry_** table

    ```sql
    SET ANSI_NULLS ON
    GO

    SET QUOTED_IDENTIFIER ON
    GO

    CREATE TABLE [dbo].[telemetry](
        [id] [int] IDENTITY(1,1) NOT NULL,
        [deviceId] [nvarchar](50) NOT NULL,
        [timestamp] [datetime] NOT NULL,
        [co2ppm] [int] NOT NULL,
        [humidity] [int] NOT NULL,
        [temperature] [int] NOT NULL,
        [prediction] [int] NOT NULL,
        [peakUserMemoryKiB] [int] NULL,
        [totalMemoryKiB] [int] NULL,
     CONSTRAINT [PK_telemetry] PRIMARY KEY CLUSTERED
    (
        [deviceId] ASC,
        [timestamp] ASC
    )WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
    ) ON [PRIMARY]
    GO
    ```

1. Create **_GetInferenceData_** stored procedure

    ```sql
    SET ANSI_NULLS ON
    GO

    SET QUOTED_IDENTIFIER ON
    GO

    CREATE PROCEDURE [dbo].[GetInferenceData]
        @deviceId NVARCHAR(128),
        @numberOfDays INT
    AS

    DECLARE @period INT = 10

    SELECT
        CONVERT(VARCHAR(20), CONVERT(DATETIMEOFFSET, DATE_BUCKET(minute, @period, timestamp)), 127) AS timestamp,
        MAX([temperature]) as temperature,
        MAX([humidity]) as humidity,
        MAX([prediction]) as prediction
    FROM telemetry
    WHERE
        deviceId = @deviceId AND timestamp > DATEADD(day, -@numberOfDays, GETDATE())
    GROUP BY
        deviceId, DATE_BUCKET(minute, @period, timestamp);

    GO
    ```
