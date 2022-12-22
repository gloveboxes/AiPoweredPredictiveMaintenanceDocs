# Build the app

This is optional, if you'd prefer to build the hvac simulator app yourself, you can do so using the following instructions.

<!-- https://learn.microsoft.com/en-us/dotnet/core/deploying/single-file/overview?tabs=cli -->
<!-- https://learn.microsoft.com/en-us/dotnet/core/rid-catalog#using-rids -->

## Build for all platforms

1. Open a command prompt and navigate to ***AiPoweredPredictiveMaintenance\DotnetClient** folder.
2. Run the following command to build the hvac app for all platforms and output the binaries to the `prebuilt` folder.

```ps
./build-all.ps1
```

## Platform specific build

1. Open a command prompt and navigate to ***AiPoweredPredictiveMaintenance\DotnetClient** folder.
1. Choose the platform you want to build for and run the corrosponding command.


This will build the app for a specific platform and output the binaries to the `prebuilt` folder.

| Platform  | Command   |
|---|---|
| Windows x64  | `dotnet publish -r win-x64 /p:PublishSingleFile=true,assemblyname=hvac-win-x64 --self-contained true  -c Release -o prebuilt`  |
| Windows arm64  | `dotnet publish -r win-arm64 /p:PublishSingleFile=true,assemblyname=hvac-win-arm64 --self-contained true  -c Release -o prebuilt`  |
| Linux x64  | `dotnet publish -r linux-x64 /p:PublishSingleFile=true,assemblyname=hvac-linux-x64 --self-contained true  -c Release -o prebuilt`  |
| Linux arm64  | `dotnet publish -r linux-arm64 /p:PublishSingleFile=true,assemblyname=hvac-linux-arm64 --self-contained true  -c Release -o prebuilt`  |
| macOS 13 Ventura arm64  | `dotnet publish -r osx.13-arm64 /p:PublishSingleFile=true,assemblyname=hvac-osx.13-arm64 --self-contained true  -c Release -o prebuilt`  |
| macOS 13 Ventura x64  | `dotnet publish -r osx.13-x64 /p:PublishSingleFile=true,assemblyname=hvac-osx.13-x64 --self-contained true  -c Release -o prebuilt`  |
