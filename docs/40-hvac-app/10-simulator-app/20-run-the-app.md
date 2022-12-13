# Run the app

1. Open a command-line window and navigate to the `DotnetClient/Publish` folder.
1. Navigate to the folder that matches your computers architecture. For example, if you are running a 64-bit version of Windows, navigate to the `win-x64` folder, if you are running the macOS on an M1 chip, navigate to the `osx.13-arm64` folder etc...
1. Run the following command to start the HVAC simulator app:

    ```text
    DotnetClient -d hvac_simulator, -o your-open-weather-map-api-key -s your-dps-id_scope -k your-dps-device-key
    ```

The simulator app will start and connect to Azure IoT Hub. The app will send telemetry data to IoT hub every 20 seconds.

## Generate anomaly predictions

With the HVAC simulator in focus, press the **r** key to generate a **rattle** anomaly prediction. The **rattle** anomaly prediction will remain in effect for 2 minutes, whichever comes first.

## Stop the app

To stop the app, press the **ctrl+c**.
