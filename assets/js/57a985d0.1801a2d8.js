"use strict";(self.webpackChunkpredictive_maintenance_docs=self.webpackChunkpredictive_maintenance_docs||[]).push([[880],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3675:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i="Deploy cloud services",l={unversionedId:"cloud-services/cloud-services",id:"cloud-services/cloud-services",title:"Deploy cloud services",description:"1. Change to the infra folder in the cloned repository.",source:"@site/docs/10-cloud-services/10-cloud-services.md",sourceDirName:"10-cloud-services",slug:"/cloud-services/",permalink:"/AiPoweredPredictiveMaintenanceDocs/cloud-services/",draft:!1,editUrl:"https://github.com/gloveboxes/AiPoweredPredictiveMaintenanceDocs/blob/main/docs/10-cloud-services/10-cloud-services.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Install prerequisites",permalink:"/AiPoweredPredictiveMaintenanceDocs/cloud-services/install-prerequisites"},next:{title:"Initialize Azure SQL",permalink:"/AiPoweredPredictiveMaintenanceDocs/cloud-services/inititialize-sql"}},p={},c=[{value:"Azure Function App Endpoint URL",id:"azure-function-app-endpoint-url",level:2}],u={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-cloud-services"},"Deploy cloud services"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Change to the ",(0,a.kt)("inlineCode",{parentName:"p"},"infra")," folder in the cloned repository."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd AiPoweredPredictiveMaintenance/infra\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You need to set the Azure location where you want to deploy the solution. The following command lists the available locations."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'az account list-locations --query "[].{Name:name, DisplayName:displayName}" -o table\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the following command to deploy the predictive maintenance solution."),(0,a.kt)("p",{parentName:"li"},"You will be prompted for the following information:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The application name. This is an arbitrary name and is used as part of the hash to create unique names for the Azure resources."),(0,a.kt)("li",{parentName:"ul"},"The Sql Server user name. This is the user name for the Sql Server database."),(0,a.kt)("li",{parentName:"ul"},"The Sql Server password. This is the password for the Sql Server database."),(0,a.kt)("li",{parentName:"ul"},"The IoT Hub SKU. You can choose between F1 (Free) and S1 (Standard). You can have only one free IoT Hub per subscription. If you already have a free IoT Hub in your subscription, you must choose S1.")),(0,a.kt)("p",{parentName:"li"},"For Windows users, you can run the following PowerShell commands. For macOS and Linux users, you can run the following Bash commands."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"PowerShell")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:RESOURCE_GROUP_NAME="<Your_Preferred_Resource_Group_Name>"\n$env:LOCATION_NAME="<Your_Preferred_Location_Name>"\naz group create --name $env:RESOURCE_GROUP_NAME --location $env:LOCATION_NAME\naz deployment group create --resource-group $env:RESOURCE_GROUP_NAME --template-file main.bicep --query properties.outputs --output yamlc\n')),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Bash")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'RESOURCE_GROUP_NAME="<Your_Preferred_Resource_Group_Name>"\nLOCATION_NAME="<Your_Preferred_Location_Name>"\naz group create --name $RESOURCE_GROUP_NAME --location $LOCATION_NAME\naz deployment group create --resource-group $RESOURCE_GROUP_NAME --template-file main.bicep --query properties.outputs --output yamlc\n')))),(0,a.kt)("h2",{id:"azure-function-app-endpoint-url"},"Azure Function App Endpoint URL"),(0,a.kt)("p",null,"When the deployment completes, the output will display the ",(0,a.kt)("em",{parentName:"p"},"telemetry_function_app_endpoint")," and the ",(0,a.kt)("em",{parentName:"p"},"telemetry_function_app_key"),". The output will look similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"function_app_name:\n  type: String\n  value: 'Azure Function Name: func-pm-5x4q2733jv3oi'\nidScope:\n  type: String\n  value: 'Azure DPS ID Scope: 0ne008BFF1A'\ntelemetry_function_app_endpoint:\n  type: String\n  value: 'Azure Function App URL: https://func-pm-5x4q2733jv3oi.azurewebsites.net'\ntelemetry_function_app_key:\n  type: String\n  value: 'Azure Function Host Key: OuFbupjlv-jhmvBhbSwTzvOm0i370wlBjzFa9mUMeUc0AzFu1Mszxw=='\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Save the output to a file. You will need the values for the following parameters later in the lab.")))}s.isMDXComponent=!0}}]);