"use strict";(self.webpackChunkgit_hub_metrics_docs=self.webpackChunkgit_hub_metrics_docs||[]).push([[387],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(r),m=a,b=s["".concat(p,".").concat(m)]||s[m]||d[m]||l;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4904:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={},i="Build the app",o={unversionedId:"hvac-app/simulator-app/build",id:"hvac-app/simulator-app/build",title:"Build the app",description:"Build for all platforms",source:"@site/docs/40-hvac-app/10-simulator-app/30-build.md",sourceDirName:"40-hvac-app/10-simulator-app",slug:"/hvac-app/simulator-app/build",permalink:"/AiPoweredPredictiveMaintenanceDocs/hvac-app/simulator-app/build",draft:!1,editUrl:"https://github.com/gloveboxes/AiPoweredPredictiveMaintenanceDocs/tree/docs/docs/40-hvac-app/10-simulator-app/30-build.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Run the app",permalink:"/AiPoweredPredictiveMaintenanceDocs/hvac-app/simulator-app/run-the-app"},next:{title:"Azure Sphere",permalink:"/AiPoweredPredictiveMaintenanceDocs/category/azure-sphere"}},p={},u=[{value:"Build for all platforms",id:"build-for-all-platforms",level:2},{value:"Platform specific build",id:"platform-specific-build",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"build-the-app"},"Build the app"),(0,a.kt)("h2",{id:"build-for-all-platforms"},"Build for all platforms"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ps"},"./build-all.ps1\n")),(0,a.kt)("h2",{id:"platform-specific-build"},"Platform specific build"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Platform"),(0,a.kt)("th",{parentName:"tr",align:null},"Command"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Windows x64"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"dotnet publish -r win-x64 -p:PublishSingleFile=true --self-contained true -c Release -o Publish/win-x64"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Windows arm64"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"dotnet publish -r win-arm64 -p:PublishSingleFile=true --self-contained true -c Release -o Publish/win-arm64"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Linux x64"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"dotnet publish -r linux-x64 -p:PublishSingleFile=true --self-contained true -c Release -o Publish/linux-x64"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Linux arm64"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"dotnet publish -r linux-arm64 -p:PublishSingleFile=true --self-contained true -c Release -o Publish/linux-arm64"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"macOS 13 Ventura arm64"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"dotnet publish -r osx.13-arm64 -p:PublishSingleFile=true --self-contained true -c Release -o Publish/osx.13-arm64"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"macOS 13 Ventura x64"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"dotnet publish -r osx.13-x64 -p:PublishSingleFile=true --self-contained true -c Release -o Publish/osx.13-x64"))))))}d.isMDXComponent=!0}}]);