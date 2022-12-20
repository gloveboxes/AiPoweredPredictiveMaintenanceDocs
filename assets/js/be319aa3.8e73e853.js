"use strict";(self.webpackChunkpredictive_maintenance_docs=self.webpackChunkpredictive_maintenance_docs||[]).push([[275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={},a="Prerequisites",l={unversionedId:"detection-anomalies.md/Prerequisites",id:"detection-anomalies.md/Prerequisites",title:"Prerequisites",description:"The following prerequisites are required to complete this lab:",source:"@site/docs/50-detection-anomalies.md/15-Prerequisites.md",sourceDirName:"50-detection-anomalies.md",slug:"/detection-anomalies.md/Prerequisites",permalink:"/AiPoweredPredictiveMaintenanceDocs/detection-anomalies.md/Prerequisites",draft:!1,editUrl:"https://github.com/gloveboxes/AiPoweredPredictiveMaintenanceDocs/blob/main/docs/50-detection-anomalies.md/15-Prerequisites.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/AiPoweredPredictiveMaintenanceDocs/detection-anomalies.md/introduction"},next:{title:"Univariate anomaly detection",permalink:"/AiPoweredPredictiveMaintenanceDocs/detection-anomalies.md/univariate"}},s={},c=[{value:"Install Python3",id:"install-python3",level:2},{value:"Install supporting python libraries",id:"install-supporting-python-libraries",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"The following prerequisites are required to complete this lab:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Python3"),(0,i.kt)("li",{parentName:"ol"},"Supporting python libraries")),(0,i.kt)("h2",{id:"install-python3"},"Install Python3"),(0,i.kt)("p",null,"Python3 is required to run the Jupyter Notebooks. It is pre-installed on most Linux distributions and latest version of macOS. If you are using Windows, you can download and install Python3 from the ",(0,i.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"Python website"),"."),(0,i.kt)("p",null,"You will likely need to install pip3 as well. Pip3 is a package manager for Python3. You can install pip3 by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install python3-pip\n")),(0,i.kt)("h2",{id:"install-supporting-python-libraries"},"Install supporting python libraries"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install notebook azure-ai-anomalydetector azure-core azure-storage-blob python-dotenv pandas plotly bokeh\n")))}u.isMDXComponent=!0}}]);