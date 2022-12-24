# Deploy to Azure Sphere

## Set up an Azure IoT Hub for Azure Sphere

Follow the instruction to [set up an Azure IoT Hub for Azure Sphere](https://learn.microsoft.com/azure-sphere/app-development/setup-iot-hub). Skip setting up the IoT Hub as it was created in the previous step.

## Open the high-level predictive maintenance app in Visual Studio Code

1. Start Visual Studio Code
1. From the Visual Studio Code main menu, select **File**, then select **Open folder**.
1. Navigate to the **AzureSphere** folder you cloned to your computer, then select **classifyHL**, and open.

## Select your Avnet starter kit revision

The default board is the Avnet Starter Kit Rev 1. If this is the board and sensor you're using, then skip to the next step.

If you have an Avnet Starter Kit Rev 2 board then follow these instructions.

1. Open the **CMakeLists.txt** file.
1. Comment out the Avnet Rev 1 board with a **#**.
1. Uncomment the Avnet Rev 2 board by removing the leading **#** character.
1. **Save** the changes.

---

## Configure network and security settings

1. Open the **app_manifest.json** file.
1. Update the **CmdArgs** property with your IoT Central **ID Scope**.
1. Get your Azure Sphere Tenant ID. From a **command prompt**, run the following command.

    ```powershell
    azsphere tenant show-selected -o yaml
    ```

    The output of this command will be similar to the following. The **id** property value is your Azure Sphere Tenant ID.

    ```yaml
    id: 9abc79eb-9999-43ce-9999-fa8888888894
    name: myAzureSphereTenant
    roles:
    - Administrator
    ```

1. Update the **DeviceAuthentication** property with your **Azure Sphere Tenant ID**.
1. update the **CmdArgs** property with your Azure DPS **ID Scope**.
1. Update the **AllowedConnections** property with your Azure IoT Hub **Hostname**.
1. **Review** your updated manifest_app.json file. It should be similar to the following.

    ```json
   {
        "SchemaVersion": 1,
        "Name": "classify_solution",
        "ComponentId": "25025d2c-66da-4448-bae1-ac26fcdd3627",
        "EntryPoint": "/bin/app",
        "CmdArgs": [
            "--ScopeID",
            "<REPLACE_WITH_YOUR_AZURE_DPS_ID_SCOPE>"
        ],
        "Capabilities": {
            "I2cMaster": [
                "$ISU2_I2C"
            ],
            "Pwm": [
                "$PWM_RGB_CONTROLLER"
            ],
            "Adc": [
                "$Adc0"
            ],
            "Gpio": [
                "$NETWORK_CONNECTED_LED",
                "$APP_STATUS_LED",
                "$EN",
                "$NSL",
                "$PH",
                "$BUTTON_A",
                "$BUTTON_B",
                "$RELAY_2",
                "$RELAY_EXT"
            ],
            "AllowedConnections": [
                "global.azure-devices-provisioning.net",
                "<REPLACE_WITH_YOUR_IOT_HUB_HOSTNAME>",
    
            ],
            "DeviceAuthentication": "<REPLACE_WITH_YOUR_AZURE_SPHERE_TENANT_ID>",
            "AllowedApplicationConnections": [
                "AF8B26DB-355E-405C-BBDE-3B851668EE23"
            ]
        },
        "ApplicationType": "Default"
    }

    ```

---

## Deploying the predictive maintenance app to Azure Sphere

Start the app build deploy process.

1. Press <kbd>Ctrl+Shift+P</kbd> to open the Visual Studio Code command palette.
1. Type and select **CMake: Select Variant**, then select **Debug**.
1. Press <kbd>F5</kbd> to build, deploy, and attach the debugger to the application now running the Azure Sphere device.

### View debugger output

1. Open the Visual Studio Code **Output** tab to view the output from the **Log_Debug** statements in the code.

    > Pro Tip. You can open the output window by using the Visual Studio Code <kbd>Ctrl+K Ctrl+H</kbd> shortcut or selecting the **Output** tab.

1. You will see the device negotiating security with Azure IoT Central.

---

## Deploy the real-time movement classification app

The easiest way to deploy the real-time movement classification app is to deploy the prebuilt image package.

1. From a command prompt, navigate to the *AzureSphereClassify* folder, then to the *image_packages* folder.
1. Run the following command to sideload the real-time app.

    ```bash
    azsphere device sideload -p FreeRTOS_RTcore_I2C_Accelerometer.imagepackage
    ```

You can also deploy the real-time movement classification app to the Azure Sphere using Visual Studio Code.

1. Copy the *AzureSphereRTCoreToolchainEdgeImpulse.cmake* found in the root of the *AzureSphereClassify* folder to the Azure Sphere SDK CMakeFiles folder.

    - On Windows the Azure Sphere SDK CMakeFiles folder is located at *C:\Program Files (x86)\Microsoft Azure Sphere SDK\CMakeFiles*.
    - On Ubuntu the Azure Sphere SDK CMakeFiles folder is located at */opt/azurespheresdk/CMakeFiles*.

1. Open the **classifyRT** folder with Visual Studio Code.
1. Type and select **CMake: Select Variant**, then select **Release**.
1. Press <kbd>Ctrl+F5</kbd> to build and deploy the app to your Azure Sphere device.

## Generate fault prediction data

The predictive maintenance model was trained with the following gestures.

1. Keeping the device horizontal, move the device side to side, this will generate an HVAC *rattle* prediction.
1. Generate an HVAC motor *bearings* prediction by moving the device with a *wave* gesture.
1. The model has also been trained with an HVAC *up and down*.

<!-- --- -->

<!-- ## View your device on the IoT Central Dashboard

1. Switch back to the **Azure IoT Central** web portal.
1. Select **Devices** from the IoT Central sidebar menu.
1. Select the **predictive Maintenance** template.
1. When your device enrolls into IoT Central, you may be prompted to **Refresh** the device list.
1. Select your device, the device details page will open to display the device properties.

![This image shows the About, Overview and Raw Data tabs](media/iot_central_view_device.png) -->
