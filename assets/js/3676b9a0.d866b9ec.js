"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[223],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7898:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=r(9960),c=["components"],l={sidebar_position:3,title:"getPrefix"},p=void 0,s={unversionedId:"api/commands/getPrefix",id:"api/commands/getPrefix",title:"getPrefix",description:"function",source:"@site/docs/api/commands/getPrefix.mdx",sourceDirName:"api/commands",slug:"/api/commands/getPrefix",permalink:"/BeAPI/docs/api/commands/getPrefix",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"getPrefix"},sidebar:"gettingStarted",previous:{title:"getCommands",permalink:"/BeAPI/docs/api/commands/getCommands"},next:{title:"registerCommand",permalink:"/BeAPI/docs/api/commands/registerCommand"}},u=[{value:"Method",id:"method",children:[],level:2},{value:"Returns",id:"returns",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2}],m={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(i.Z,{to:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",mdxType:"Link"},"function")))),(0,a.kt)("p",null,"Exported method that gets BeAPIs default command handlers prefix."),(0,a.kt)("h2",{id:"method"},"Method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"getPrefix();\n")),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)(i.Z,{to:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",mdxType:"Link"},"string"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { commands } from 'beapi-core';\n\nconst prefix = commands.getPrefix();\n\nconsole.warn('BeAPIs current prefix:', prefix);\n")))}d.isMDXComponent=!0}}]);