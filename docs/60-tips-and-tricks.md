# Tips and Tricks

## Data preparation

The data submitted to Azure Anomaly Detector is expected to be time series data. It must be an exact time series. There are a couple of techniques to prepare your data for Anomaly Detector.

## Database data bucketing

Most database support some sort of data bucketing, the following is an example of data bucketing with Azure SQL. The following query will bucket the data into 10 minute buckets.

```sql
DECLARE @period INT = 10

SELECT
// highlight-start
    CONVERT(VARCHAR(20), CONVERT(DATETIMEOFFSET, DATE_BUCKET(minute, @period, timestamp)), 127) AS timestamp,
// highlight-end
    MAX([temperature]) as temperature,
    MAX([humidity]) as humidity,
    MAX([prediction]) as prediction
FROM telemetry
WHERE
    deviceId = @deviceId AND timestamp > DATEADD(day, -@numberOfDays, GETDATE())
GROUP BY
    deviceId, DATE_BUCKET(minute, @period, timestamp);

```

## Pandas data resampling

Pandas is a popular Python library for data manipulation and analysis. Refer to the [Pandas documentation](https://pandas.pydata.org/pandas-docs/stable/user_guide/timeseries.html#resampling) for more information on resampling.

```python
import pandas as pd
import numpy as np

rng = pd.date_range("1/1/2012", periods=100, freq="S")
ts = pd.Series(np.random.randint(0, 500, len(rng)), index=rng)
rs = ts.resample("5Min").max()
```
