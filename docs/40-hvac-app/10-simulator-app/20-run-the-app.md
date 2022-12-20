# Run the app

1. Open a command-line window and navigate to the `DotnetClient/Publish` folder.
1. Navigate to the folder that matches your computers architecture. For example, if you are running a 64-bit version of Windows, navigate to the `win-x64` folder, if you are running the macOS on an M1 chip, navigate to the `osx.13-arm64` folder etc...
1. Run the following command to start the HVAC simulator app:

    ```text
    DotnetClient ../hvac.env
    ```

The simulator app will start and connect to Azure IoT Hub. The app will send telemetry data to IoT hub every 20 seconds.

Leave the app running in the command-line window for at least a 2 hours, and ideally a day or two. The app will automatically generate random anomaly predictions at random intervals. The app will send the predictions to IoT Hub as a telemetry message.

## Stop the app

To stop the app, press the **ctrl+c**.
