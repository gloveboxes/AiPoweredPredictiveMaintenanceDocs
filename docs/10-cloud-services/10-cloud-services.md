# Deploy cloud services

<!-- [![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fgloveboxes%2FAiPoweredPredictiveMaintenance%2Fmain%2Finfra%2Fmain.json) -->

1. Change to the `infra` folder in the cloned repository.

    ```bash
    cd AzureSphereMLPredictiveMaintenanceHybrid/infra
    ```

1. You need to set the Azure location where you want to deploy the solution. The following command lists the available locations.

    ```bash
    az account list-locations --query "[].{Name:name, DisplayName:displayName}" -o table
    ```

1. Run the following command to deploy the predictive maintenance solution.

    You will be prompted for the following information:

    - The application name. This is an arbitrary name and is used as part of the hash to create unique names for the Azure resources.
    - The Sql Server user name. This is the user name for the Sql Server database.
    - The Sql Server password. This is the password for the Sql Server database.
    - The IoT Hub SKU. You can choose between F1 (Free) and S1 (Standard). You can have only one free IoT Hub per subscription. If you already have a free IoT Hub in your subscription, you must choose S1.

    For Windows users, you can run the following PowerShell commands. For macOS and Linux users, you can run the following Bash commands.

    **PowerShell**

    ```powershell
    $env:RESOURCE_GROUP_NAME="<Your_Preferred_Resource_Group_Name>"
    $env:LOCATION_NAME="<Your_Preferred_Location_Name>"
    az group create --name $env:RESOURCE_GROUP_NAME --location $env:LOCATION_NAME
    az deployment group create --resource-group $env:RESOURCE_GROUP_NAME --template-file main.bicep --query properties.outputs --output yamlc
    ```

    **Bash**

    ```bash
    RESOURCE_GROUP_NAME="<Your_Preferred_Resource_Group_Name>"
    LOCATION_NAME="<Your_Preferred_Location_Name>"
    az group create --name $RESOURCE_GROUP_NAME --location $LOCATION_NAME
    az deployment group create --resource-group $RESOURCE_GROUP_NAME --template-file main.bicep --query properties.outputs --output yamlc
    ```

## Azure Function App Endpoint URL

When the deployment completes, the output will display the _telemetry_function_app_endpoint_ and the _telemetry_function_app_key_. The output will look similar to the following:

```yaml
function_app_name:
  type: String
  value: 'Azure Function Name: func-pm-5x4q2733jv3oi'
idScope:
  type: String
  value: 'Azure DPS ID Scope: 0ne008BFF1A'
telemetry_function_app_endpoint:
  type: String
  value: 'Azure Function App URL: https://func-pm-5x4q2733jv3oi.azurewebsites.net'
telemetry_function_app_key:
  type: String
  value: 'Azure Function Host Key: OuFbupjlv-jhmvBhbSwTzvOm0i370wlBjzFa9mUMeUc0AzFu1Mszxw=='
```

1. Save the output to a file. You will need the values for the following parameters later in the lab.
