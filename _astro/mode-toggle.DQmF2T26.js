import{j as c}from"./jsx-runtime.D_zvdyIk.js";import{r as o}from"./index.6otl1p8d.js";import{Button as f}from"./button.CZkbTAQZ.js";/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),w=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,a)=>a?a.toUpperCase():r.toLowerCase()),d=e=>{const t=w(e);return t.charAt(0).toUpperCase()+t.slice(1)},m=(...e)=>e.filter((t,r,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===r).join(" ").trim(),y=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var C={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=o.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:s,iconNode:l,...i},h)=>o.createElement("svg",{ref:h,...C,width:t,height:t,stroke:e,strokeWidth:a?Number(r)*24/Number(t):r,className:m("lucide",n),...!s&&!y(i)&&{"aria-hidden":"true"},...i},[...l.map(([k,p])=>o.createElement(k,p)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(e,t)=>{const r=o.forwardRef(({className:a,...n},s)=>o.createElement(x,{ref:s,iconNode:t,className:m(`lucide-${g(d(e))}`,`lucide-${e}`,a),...n}));return r.displayName=d(e),r};/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],j=u("moon",M);/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],E=u("sun",v);function N(){const[e,t]=o.useState("dark"),[r,a]=o.useState(!1);o.useEffect(()=>{a(!0);const s=window.matchMedia("(prefers-color-scheme: dark)").matches,l=document.documentElement.classList.contains("dark");t(l||s?"dark":"light")},[]),o.useEffect(()=>{const s=e==="dark"||e==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList[s?"add":"remove"]("dark")},[e]);const n=o.useCallback(()=>{t(e==="dark"?"light":"dark")},[e,t]);return r?c.jsxs(f,{variant:"secondary",size:"icon",className:"group/toggle size-8 cursor-pointer",onClick:n,children:[e==="dark"?c.jsx(j,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}):c.jsx(E,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),c.jsx("span",{className:"sr-only",children:"Toggle theme"})]}):null}export{N as M,u as c};
