# Deploy Functions Apps

The predictive maintenance solution uses two Azure Functions Apps to process the data. The first function app is responsible for processing the data from the IoT Hub and storing it in the Azure SQL Database. The second function app is responsible for training the model and making predictions.

## To deploy the function apps

You will need the **telemetry_function_app_endpoint** from the deployment output. You can find this in the Azure Portal, or from the command line using the following command:

```bash
az functionapp list --query "[].{hostName: defaultHostName, state: state} | [? contains(hostName, 'func-pm')]" --output table
```

1. Install the [.NET 6.0 SDK](https://dotnet.microsoft.com/download)
1. Install the [Azure Functions Core Tools](https://learn.microsoft.com/azure/azure-functions/functions-run-local)
1. Open a command prompt and navigate to the `predictive-maintenance/AzureFunctions/fa_predictive_maintenance_csharp` folder.
1. Run the following command to publish the Azure Function App:

    ```bash
    func azure functionapp publish <FUNCTION_APP_NAME>
    ```
