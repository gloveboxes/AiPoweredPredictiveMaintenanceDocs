# Build the app

<!-- https://learn.microsoft.com/en-us/dotnet/core/deploying/single-file/overview?tabs=cli -->
<!-- https://learn.microsoft.com/en-us/dotnet/core/rid-catalog#using-rids -->


## Build for all platforms

```ps
./build-all.ps1
```

## Platform specific build

| Platform  | Command   |
|---|---|
| Windows x64  | `dotnet publish -r win-x64 -p:PublishSingleFile=true --self-contained true -c Release -o Publish/win-x64`  |
| Windows arm64  | `dotnet publish -r win-arm64 -p:PublishSingleFile=true --self-contained true -c Release -o Publish/win-arm64`  |
| Linux x64  | `dotnet publish -r linux-x64 -p:PublishSingleFile=true --self-contained true -c Release -o Publish/linux-x64`  |
| Linux arm64  | `dotnet publish -r linux-arm64 -p:PublishSingleFile=true --self-contained true -c Release -o Publish/linux-arm64`  |
| macOS 13 Ventura arm64  | `dotnet publish -r osx.13-arm64 -p:PublishSingleFile=true --self-contained true -c Release -o Publish/osx.13-arm64`  |
| macOS 13 Ventura x64  | `dotnet publish -r osx.13-x64 -p:PublishSingleFile=true --self-contained true -c Release -o Publish/osx.13-x64`  |
