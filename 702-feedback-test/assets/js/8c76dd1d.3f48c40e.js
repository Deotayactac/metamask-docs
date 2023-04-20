"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[1529],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||s;return n?a.createElement(m,o(o({ref:t},l),{},{components:n})):a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const s={title:"Introduction"},o="Extend the functionality of MetaMask using Snaps",i={unversionedId:"index",id:"index",title:"Introduction",description:"Snaps is an open source system that allows anyone to safely extend the functionality of MetaMask,",source:"@site/snaps/index.md",sourceDirName:".",slug:"/",permalink:"/702-feedback-test/snaps/",draft:!1,tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"snapsSidebar",next:{title:"Get started",permalink:"/702-feedback-test/snaps/category/get-started"}},p={},c=[{value:"What is a snap?",id:"what-is-a-snap",level:2},{value:"What can you do with a snap?",id:"what-can-you-do-with-a-snap",level:2},{value:"Questions?",id:"questions",level:2}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"extend-the-functionality-of-metamask-using-snaps"},"Extend the functionality of MetaMask using Snaps"),(0,r.kt)("p",null,"Snaps is an open source system that allows anyone to safely extend the functionality of MetaMask,\ncreating new web3 end user experiences."),(0,r.kt)("p",null,"Get started by ",(0,r.kt)("a",{parentName:"p",href:"/702-feedback-test/snaps/get-started/install-snaps"},"installing Snaps"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Snaps is pre-release software."),(0,r.kt)("li",{parentName:"ul"},"To learn how to integrate your dapp with MetaMask, visit the\n",(0,r.kt)("a",{parentName:"li",href:"../wallet"},"MetaMask wallet developer documentation"),"."))),(0,r.kt)("h2",{id:"what-is-a-snap"},"What is a snap?"),(0,r.kt)("p",null,"A snap is a JavaScript program run in an isolated environment that customizes the wallet experience.\nSnaps have access to a limited set of capabilities, determined by the\n",(0,r.kt)("a",{parentName:"p",href:"/702-feedback-test/snaps/how-to/request-permissions"},"permissions")," the user granted them during installation."),(0,r.kt)("h2",{id:"what-can-you-do-with-a-snap"},"What can you do with a snap?"),(0,r.kt)("p",null,"A snap can add new API methods to MetaMask, add support for different blockchain protocols, or\nmodify existing functionalities using the ",(0,r.kt)("a",{parentName:"p",href:"/702-feedback-test/snaps/reference/rpc-api"},"Snaps JSON-RPC API"),"."),(0,r.kt)("p",null,"For example, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/702-feedback-test/snaps/reference/rpc-api#snap_dialog"},"Display a custom confirmation screen")," in MetaMask."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/702-feedback-test/snaps/reference/rpc-api#snapnotify"},"Notify users")," in MetaMask."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/702-feedback-test/snaps/reference/rpc-api#snap_managestate"},"Securely store and manage data")," on your device."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/702-feedback-test/snaps/reference/rpc-api#snap_getbip44entropy"},"Control non-EVM accounts and assets")," in MetaMask."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/702-feedback-test/snaps/reference/exports#ontransaction"},"Provide transaction insights")," in MetaMask's pre-transaction window."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/702-feedback-test/snaps/reference/exports#oncronjob"},"Schedule periodic actions")," for your users."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/702-feedback-test/snaps/how-to/use-custom-ui"},"Display custom UI")," in MetaMask using a set of pre-defined components,\nincluding inline Markdown.")),(0,r.kt)("h2",{id:"questions"},"Questions?"),(0,r.kt)("p",null,"If you have questions about using Snaps or want to propose a new feature, you can interact with the\nSnaps team and community on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps-monorepo/discussions"},"GitHub discussions"),"\nand the Snaps channel on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/consensys"},"ConsenSys Discord"),"."))}u.isMDXComponent=!0}}]);