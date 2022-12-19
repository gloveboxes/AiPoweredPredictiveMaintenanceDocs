"use strict";(self.webpackChunkpredictive_maintenance_docs=self.webpackChunkpredictive_maintenance_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/AiPoweredPredictiveMaintenanceDocs/","docId":"intro"},{"type":"category","label":"Cloud services","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/AiPoweredPredictiveMaintenanceDocs/cloud-services/introduction","docId":"cloud-services/introduction"},{"type":"link","label":"Install prerequisites","href":"/AiPoweredPredictiveMaintenanceDocs/cloud-services/install-prerequisites","docId":"cloud-services/install-prerequisites"},{"type":"link","label":"Deploy cloud services","href":"/AiPoweredPredictiveMaintenanceDocs/cloud-services/","docId":"cloud-services/cloud-services"},{"type":"link","label":"Initialize Azure SQL","href":"/AiPoweredPredictiveMaintenanceDocs/cloud-services/inititialize-sql","docId":"cloud-services/inititialize-sql"}],"href":"/AiPoweredPredictiveMaintenanceDocs/category/cloud-services"},{"type":"category","label":"HVAC app","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Desktop App","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/AiPoweredPredictiveMaintenanceDocs/hvac-app/simulator-app/introduction","docId":"hvac-app/simulator-app/introduction"},{"type":"link","label":"Configuration","href":"/AiPoweredPredictiveMaintenanceDocs/hvac-app/simulator-app/configuration","docId":"hvac-app/simulator-app/configuration"},{"type":"link","label":"Run the app","href":"/AiPoweredPredictiveMaintenanceDocs/hvac-app/simulator-app/run-the-app","docId":"hvac-app/simulator-app/run-the-app"},{"type":"link","label":"Build the app","href":"/AiPoweredPredictiveMaintenanceDocs/hvac-app/simulator-app/build","docId":"hvac-app/simulator-app/build"}],"href":"/AiPoweredPredictiveMaintenanceDocs/category/desktop-app"},{"type":"category","label":"Azure Sphere","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/AiPoweredPredictiveMaintenanceDocs/hvac-app/azure-sphere/introduction","docId":"hvac-app/azure-sphere/introduction"},{"type":"link","label":"Install developer tools","href":"/AiPoweredPredictiveMaintenanceDocs/hvac-app/azure-sphere/install-azure-sphere-developer-tools","docId":"hvac-app/azure-sphere/install-azure-sphere-developer-tools"},{"type":"link","label":"Deploy to Azure Sphere","href":"/AiPoweredPredictiveMaintenanceDocs/hvac-app/azure-sphere/deploy-to-azure-sphere","docId":"hvac-app/azure-sphere/deploy-to-azure-sphere"}],"href":"/AiPoweredPredictiveMaintenanceDocs/category/azure-sphere"}],"href":"/AiPoweredPredictiveMaintenanceDocs/category/hvac-app"},{"type":"category","label":"Detecting anomalies","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/AiPoweredPredictiveMaintenanceDocs/detection-anomalies.md/introduction","docId":"detection-anomalies.md/introduction"},{"type":"link","label":"Univariate anomaly detection","href":"/AiPoweredPredictiveMaintenanceDocs/detection-anomalies.md/univariate","docId":"detection-anomalies.md/univariate"},{"type":"link","label":"Multivariate anomaly detection","href":"/AiPoweredPredictiveMaintenanceDocs/detection-anomalies.md/multivariate","docId":"detection-anomalies.md/multivariate"}],"href":"/AiPoweredPredictiveMaintenanceDocs/category/detecting-anomalies"},{"type":"link","label":"Tips and Tricks","href":"/AiPoweredPredictiveMaintenanceDocs/tips-and-tricks","docId":"tips-and-tricks"}]},"docs":{"cloud-services/cloud-services":{"id":"cloud-services/cloud-services","title":"Deploy cloud services","description":"1. Change to the infra folder in the cloned repository.","sidebar":"tutorialSidebar"},"cloud-services/inititialize-sql":{"id":"cloud-services/inititialize-sql","title":"Initialize Azure SQL","description":"The image shows sql set up","sidebar":"tutorialSidebar"},"cloud-services/install-prerequisites":{"id":"cloud-services/install-prerequisites","title":"Install prerequisites","description":"Install the following tools:","sidebar":"tutorialSidebar"},"cloud-services/introduction":{"id":"cloud-services/introduction","title":"Introduction","description":"The image shows cloud deployment","sidebar":"tutorialSidebar"},"detection-anomalies.md/introduction":{"id":"detection-anomalies.md/introduction","title":"Introduction","description":"","sidebar":"tutorialSidebar"},"detection-anomalies.md/multivariate":{"id":"detection-anomalies.md/multivariate","title":"Multivariate anomaly detection","description":"","sidebar":"tutorialSidebar"},"detection-anomalies.md/univariate":{"id":"detection-anomalies.md/univariate","title":"Univariate anomaly detection","description":"","sidebar":"tutorialSidebar"},"hvac-app/azure-sphere/deploy-to-azure-sphere":{"id":"hvac-app/azure-sphere/deploy-to-azure-sphere","title":"Deploy to Azure Sphere","description":"Clone the predictive maintenance project","sidebar":"tutorialSidebar"},"hvac-app/azure-sphere/install-azure-sphere-developer-tools":{"id":"hvac-app/azure-sphere/install-azure-sphere-developer-tools","title":"Install developer tools","description":"Troubleshooting","sidebar":"tutorialSidebar"},"hvac-app/azure-sphere/introduction":{"id":"hvac-app/azure-sphere/introduction","title":"Introduction","description":"ML on embedded hardware","sidebar":"tutorialSidebar"},"hvac-app/simulator-app/build":{"id":"hvac-app/simulator-app/build","title":"Build the app","description":"Build for all platforms","sidebar":"tutorialSidebar"},"hvac-app/simulator-app/configuration":{"id":"hvac-app/simulator-app/configuration","title":"Configuration","description":"Create a Azure DPS enrolment group","sidebar":"tutorialSidebar"},"hvac-app/simulator-app/introduction":{"id":"hvac-app/simulator-app/introduction","title":"Introduction","description":"The HVAC simulator app runs on Windows, macOS, and Linux. The app is a console application that simulates the HVAC device. The app is written in C# and .NET 6.0. The repo contains both the source code and pre-built binaries for the HVAC simulator app. The pre-built binaries are located in the Publish folder. The binaries are built for the following platforms:","sidebar":"tutorialSidebar"},"hvac-app/simulator-app/run-the-app":{"id":"hvac-app/simulator-app/run-the-app","title":"Run the app","description":"1. Open a command-line window and navigate to the DotnetClient/Publish folder.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"Predictive maintenance is a technique that uses data analytics to predict when a machine is likely to fail. This allows maintenance to be scheduled before the failure occurs, reducing downtime and increasing productivity.","sidebar":"tutorialSidebar"},"tips-and-tricks":{"id":"tips-and-tricks","title":"Tips and Tricks","description":"Data preparation","sidebar":"tutorialSidebar"}}}')}}]);