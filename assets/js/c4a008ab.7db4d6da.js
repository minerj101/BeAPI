"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[612],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3509:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={sidebar_position:1,title:"Getting Started"},p=void 0,c={unversionedId:"starting",id:"starting",title:"Getting Started",description:"Overview",source:"@site/docs/starting.md",sourceDirName:".",slug:"/starting",permalink:"/BeAPI/docs/starting",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Getting Started"},sidebar:"gettingStarted"},u=[{value:"Overview",id:"overview",children:[],level:3},{value:"Support",id:"support",children:[],level:3},{value:"Scaffolding Your First Project",id:"scaffolding-your-first-project",children:[],level:3},{value:"Building",id:"building",children:[],level:3},{value:"Bundling",id:"bundling",children:[],level:3}],s={toc:u};function d(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,'BeAPI (an abbreviation for "Bedrock edition API") is a tool that aims for a faster and more reliable development expierence when working with Minecraft Bedrock edition gametests. It currently consists of two major parts:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"beapi-core"),": a core module that provides a handlful of features gametest does not offer at this time. It is also bundled with some cli commands to make development easier.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"create-beapi"),": a module for easily abstracting frameworks to work with when utiling BeAPI."))),(0,o.kt)("h3",{id:"support"},"Support"),(0,o.kt)("p",null,"With gametest support being ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},"Javascript")," supported only we are only really left with two options when it comes to language support."),(0,o.kt)("p",null,"The supported template presets are:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Javascript"),(0,o.kt)("th",{parentName:"tr",align:null},"Typescript"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"vanilla"),(0,o.kt)("td",{parentName:"tr",align:null},"vanilla")))),(0,o.kt)("h3",{id:"scaffolding-your-first-project"},"Scaffolding Your First Project"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"BeAPI requires ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js")," version >= 12.0.0")),(0,o.kt)("p",null,"To scaffold your first project you will need to navigate to your Minecraft ",(0,o.kt)("inlineCode",{parentName:"p"},"development_behavior_packs")," folder which is usually located at ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Users\\{USER}\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_behavior_packs")),(0,o.kt)("p",null,"Once in the folder you will need to open a terminal and ensure the working directory is set to your ",(0,o.kt)("inlineCode",{parentName:"p"},"development_behavior_packs"),"."),(0,o.kt)("p",null,"Then depending on your package manager you will need to run one of the following commands."),(0,o.kt)("p",null,"NPM:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm init beapi@latest\n")),(0,o.kt)("p",null,"Yarn:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ yarn create beapi@latest\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"createProject",src:n(1480).Z})),(0,o.kt)("h3",{id:"building"},"Building"),(0,o.kt)("p",null,"Whenever you make a change to your project files, you need to build them so BeAPIs transpiler can make the gametest compatible."),(0,o.kt)("p",null,"NPM:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm run build\n")),(0,o.kt)("p",null,"Yarn:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ yarn build\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"buildProject",src:n(5282).Z})),(0,o.kt)("h3",{id:"bundling"},"Bundling"),(0,o.kt)("p",null,"Once you feel you are ready to publish you pack to the public you may want to bundle it into a ",(0,o.kt)("inlineCode",{parentName:"p"},".mcpack")," first."),(0,o.kt)("p",null,"NPM:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm run bundle\n")),(0,o.kt)("p",null,"Yarn:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ yarn bundle\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"bundleProject",src:n(5236).Z})),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," in your project scaffold will contain a ",(0,o.kt)("inlineCode",{parentName:"p"},"includes")," array. This tells the bundler what it should bundle into the ",(0,o.kt)("inlineCode",{parentName:"p"},".mcpack"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "include": [\n    "scripts",\n    "manifest.json",\n    "animation_controllers",\n    "entities",\n    "pack_icon.png"\n  ]\n}\n')))}d.isMDXComponent=!0},5282:function(e,t,n){t.Z=n.p+"assets/images/buildProject-b7087ade6bc5f6007c7d2af1293e5c0e.gif"},5236:function(e,t,n){t.Z=n.p+"assets/images/bundleProject-d27ddf0cc25ba77aee778c41b71b3b5a.gif"},1480:function(e,t,n){t.Z=n.p+"assets/images/createProject-69d5466adeec9d3a3a2dd1f5dc8d509f.gif"}}]);