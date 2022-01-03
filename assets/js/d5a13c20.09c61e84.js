"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8388],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,b=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return n?r.createElement(b,i(i({ref:t},d),{},{components:n})):r.createElement(b,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8913:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(9960),l=["components"],c={sidebar_position:1,title:"mountById"},p=void 0,d={unversionedId:"api/db/mountbyid",id:"api/db/mountbyid",title:"mountById",description:"function",source:"@site/docs/api/db/mountbyid.mdx",sourceDirName:"api/db",slug:"/api/db/mountbyid",permalink:"/BeAPI/docs/api/db/mountbyid",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"mountById"},sidebar:"gettingStarted",previous:{title:"getAllDatabases",permalink:"/BeAPI/docs/api/db/getalldatabases"},next:{title:"mountByName",permalink:"/BeAPI/docs/api/db/mountbyname"}},u=[{value:"Method",id:"method",children:[],level:2},{value:"Returns",id:"returns",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2}],s={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)(i.Z,{to:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",mdxType:"Link"},"function")))),(0,o.kt)("p",null,"Exported method to get persistent database by its id, otherwise create it."),(0,o.kt)("h2",{id:"method"},"Method"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"mountById(id);\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,o.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,o.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,o.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,o.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"id"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)(i.Z,{to:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",mdxType:"Link"},"number")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"null")),(0,o.kt)("td",{parentName:"tr",align:"center"},"Database id.")))),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)(i.Z,{to:"/docs/api/db/Database",mdxType:"Link"},"Database"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { db } from 'beapi-core';\n\n// Create new database\nconst database = db.mountById(69)\n// Add entry\ndatabase.addEntry({\n  name: 'foo',\n  value: 'bar',\n})\n")))}m.isMDXComponent=!0}}]);