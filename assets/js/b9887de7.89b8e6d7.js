"use strict";(self.webpackChunkpredictive_maintenance_docs=self.webpackChunkpredictive_maintenance_docs||[]).push([[506],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),h=i,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2730:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const a={},o="Introduction",c={unversionedId:"hvac-app/azure-sphere/introduction",id:"hvac-app/azure-sphere/introduction",title:"Introduction",description:"ML on embedded hardware",source:"@site/docs/40-hvac-app/20-azure-sphere/10-introduction.md",sourceDirName:"40-hvac-app/20-azure-sphere",slug:"/hvac-app/azure-sphere/introduction",permalink:"/AiPoweredPredictiveMaintenanceDocs/hvac-app/azure-sphere/introduction",draft:!1,editUrl:"https://github.com/gloveboxes/AiPoweredPredictiveMaintenanceDocs/blob/main/docs/40-hvac-app/20-azure-sphere/10-introduction.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Azure Sphere",permalink:"/AiPoweredPredictiveMaintenanceDocs/category/azure-sphere"},next:{title:"Install developer tools",permalink:"/AiPoweredPredictiveMaintenanceDocs/hvac-app/azure-sphere/install-azure-sphere-developer-tools"}},s={},l=[{value:"ML on embedded hardware",id:"ml-on-embedded-hardware",level:2},{value:"Predictive maintenance on Azure Sphere",id:"predictive-maintenance-on-azure-sphere",level:2},{value:"Azure Sphere",id:"azure-sphere",level:2},{value:"Azure Sphere MediaTek MT3620 MCU architecture",id:"azure-sphere-mediatek-mt3620-mcu-architecture",level:2},{value:"Predictive maintenance solution architecture",id:"predictive-maintenance-solution-architecture",level:2},{value:"Solution architecture in detail",id:"solution-architecture-in-detail",level:3}],u={toc:l};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("h2",{id:"ml-on-embedded-hardware"},"ML on embedded hardware"),(0,i.kt)("p",null,"AI-powered predictive maintenance can help identify a faulty machine before a real problem occurs, reducing maintenance costs, improving availability and customer satisfaction. The advantages of predictive maintenance include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reduced carbon footprint. Keeping equipment running well has straightforward benefits for operating efficiency, but we should also ensure our processes are efficient. Fault monitoring can generate high volumes of low-value data. Sending this data to cloud systems consumes power and network resources. Running an ML model on embedded hardware consumes less electricity and network resources. Only predicted maintenance events get sent to the backend systems. Disabling network interfaces (for example, Wi-Fi) can further reduce power consumption until a high-value predictive maintenance event occurs."),(0,i.kt)("li",{parentName:"ul"},"Access to better data for faster fault resolution."),(0,i.kt)("li",{parentName:"ul"},"Low latency response to system faults. There are fault monitoring use cases that require immediate action to shut down a system. Sending fault monitoring data to cloud systems for processing might be too slow, further damaging the machine.")),(0,i.kt)("h2",{id:"predictive-maintenance-on-azure-sphere"},"Predictive maintenance on Azure Sphere"),(0,i.kt)("p",null,"Azure Sphere is a secure embedded platform that is ideal for quickly developing an IoT system. By providing a platform meeting all 7 properties of highly secured devices, Azure Sphere eliminates the need to be a hardware, OS, and security expert. These seven properties make Azure Sphere ideal for running and updating ML models. You don\u2019t want to solve one problem (equipment operation) and introduce a larger one (security)."),(0,i.kt)("p",null,"You can deploy up to 3 custom apps on Azure Sphere, including two ML workloads on the low-power real-time cores. The predictive maintenance solution runs a continuous movement classification TinyML model on one of the Azure Sphere real-time cores. When the TinyML model detects movement, for example, a rattle, or a faulty motor bearing, an event is sent to the predictive maintenance app running on the high-level core. The predictive maintenance app then powers up the network connection and sends the event to Azure IoT Central. Azure IoT Central exports the predictive maintenance event to a Logic App, which generates a message destined for Microsoft Teams."),(0,i.kt)("p",null,"The beauty of this solution is that you are combining building blocks. You don\u2019t need to be a security expert, Azure Sphere has got you covered, Edge Impulse simplifies model development, and IoT Central, Logic Apps, Microsoft Teams are low code offerings making it easier to pull everything together."),(0,i.kt)("h2",{id:"azure-sphere"},"Azure Sphere"),(0,i.kt)("p",null,"The traditional approach to IoT microcontroller development is that you are responsible for integrating and maintaining all the bits of a solution. This includes the communications stack, security, authentication, certificates, identity, encryption libraries, update processes, your solution and more. Not only are you a solution domain expert, but you are now responsible for tracking new and emerging security threats, mitigating, and updating to protect IoT devices."),(0,i.kt)("p",null,"Azure Sphere is a unique highly secure IoT platform. You focus on your solution, Azure Sphere deals with security, identity, certificates, reporting, tracking emerging attack vectors, mitigating, updating the platform, and application distribution to protect your solutions, customers, and reputations."),(0,i.kt)("p",null,"Azure Sphere consists of the following components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Azure Sphere\u2013certified chips")," from hardware partners include built-in Microsoft security technology to provide connectivity and a dependable hardware root of trust."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Azure Sphere OS")," adds layers of protection and ongoing security updates to create a trustworthy platform for new IoT experiences."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Azure Sphere Security Service")," brokers trust for device-to-cloud communication, detects threats, and renews device security.\nTogether these components implement The Seven Properties of Highly Secure Devices .")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The image shows the three pillars of Azure Sphere",src:r(7324).Z,width:"400",height:"223"})),(0,i.kt)("h2",{id:"azure-sphere-mediatek-mt3620-mcu-architecture"},"Azure Sphere MediaTek MT3620 MCU architecture"),(0,i.kt)("p",null,"The first Azure Sphere certified MCU is the MediaTek MT3620 microcontroller unit (MCU). This MCU which has three developer-accessible cores, a Cortex-A7 that runs a hardened Linux kernel, and two Cortex-M4 cores."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Cortex-A7 core runs less timing-sensitive tasks such as setting up network connections, negotiating security, refreshing certificates, updating the device OS and applications. You can run a custom application on this core and send and receive messages to predefined network endpoints including cloud gateways such as Azure IoT Hub."),(0,i.kt)("li",{parentName:"ul"},"On the Cortex M4 cores you can run bare-metal code, or applications running on a real-time operating system such as Azure RTOS or FreeRTOS.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Azure Sphere MediaTek MT3620 MCU architecture",src:r(7782).Z,width:"399",height:"268"})),(0,i.kt)("h2",{id:"predictive-maintenance-solution-architecture"},"Predictive maintenance solution architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"This image shows the predictive maintenance solution architecture",src:r(4254).Z,width:"946",height:"801"})),(0,i.kt)("h3",{id:"solution-architecture-in-detail"},"Solution architecture in detail"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The TinyML ",(0,i.kt)("em",{parentName:"li"},"movement classification")," model runs on one of the Azure Sphere's real-time cores.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Movement is classified using a TinyML (Tensorflow Lite) model. If a fault is detected, a message is sent to the predictive maintenance app running on the Azure Sphere high-level core."),(0,i.kt)("li",{parentName:"ul"},"The TinyML model was ",(0,i.kt)("a",{parentName:"li",href:"https://www.edgeimpulse.com/"},"trained using Edge Impulse"),". The TinyML model was exported from Edge Impulse and included in the Azure Sphere real-time app for local machine learning inference."))),(0,i.kt)("li",{parentName:"ol"},"The HVAC ",(0,i.kt)("em",{parentName:"li"},"predictive maintenance")," app runs on the high-level A7 core.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The predictive maintenance app updates IoT Central when a fault is detected.")))))}p.isMDXComponent=!0},7324:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/azure_sphere-3c7458c9f72942923e627fda0932dd07.png"},7782:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/azure_sphere_architecture-e4305c1cbea93da6cd8f293917792768.png"},4254:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/predictive_maintenance_solution_architecture-e1ff1a1ae6f9c131e74d9815d0b00aba.png"}}]);