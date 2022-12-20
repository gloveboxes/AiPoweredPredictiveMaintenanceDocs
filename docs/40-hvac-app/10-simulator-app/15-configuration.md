# Configuration

## Update the HVAC configuration file

1. With your favorite text editor, open the **DotnetClient/hvac.env** file.
1. Update the **ID_SCOPE** key with the **Azure DPS ID Scope** value from the deployment output.
1. Leave the configuration file open, you will need to update it again in the next step.

## Create a Azure DPS enrolment group

1. From your browser, navigate to the [Azure Portal](https://portal.azure.com).
1. Select the Azure DPS resource created for the Predictive Maintenance solution.
1. Select **Manage enrollments**.
1. Select **Add enrollment group**.
1. Name the group `HVAC_Simulator`.
1. Select **Symmetric key** for the **Authentication type**.
1. Select **Save**.
1. Don't close the browser window, you will need the enrollment group **Primary key** in the next step.

## Create an Azure DPS derived device key

1. Select the newly created **HVAC_Simulator** enrollment group.
1. Copy the **Primary key** to the clipboard.
1. Select the Cloud Shell button in the Azure Portal to open a command-line window in the browser.
    ![The image shows the location of the Azure Cloud shell start button](img/cloud-shell.png)
1. Run the following command in the cloud shell to create a derived device key:

    ```bash
    az iot dps enrollment-group compute-device-key --rid hvac_simulator --key <your-primary-key> 
    ```

1. Update the **DotnetClient/hvac.env** file with the derived device key.

## Create an Open Weather Map API key

Open Weather Map is a weather data provider. The HVAC simulator app uses Open Weather Map to get the current weather conditions. You must create a **free** Open Weather Map API key to use the app.

Follow these steps to create a free Open Weather Map API key:

1. From your web browser navigate to [https://openweathermap.org/api](https://openweathermap.org/api)
1. Sign in to Open Weather Map
1. Select **API** from the Open Weather Map main menu.
1. Subscribe to the Current Weather Data. Select the **Free** option, and select **Get API key**.
1. Repeat and subscribe to the Air Pollution API. Select the **Free** option, and select **Get API key**.
1. Select **API Keys** from the Open Weather Map site.
1. Update the **DotnetClient/hvac.env** file with the **API key** value.
1. Save the **DotnetClient/hvac.env** file.
