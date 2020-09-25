"use strict";function t(){}function e(t){return t()}function n(t){t.forEach(e)}function o(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function r(t){let e;return o(t,t=>e=t)(),e}let s;function i(t){s=t}function a(){if(!s)throw new Error("Function called outside component initialization");return s}function u(t){a().$$.on_mount.push(t)}function c(){const t=a();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach(e=>{e.call(t,r)})}}}function l(t,e){a().$$.context.set(t,e)}function p(t){return a().$$.context.get(t)}const f=new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),d=/[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;const F={'"':"&quot;","'":"&#39;","&":"&amp;","<":"&lt;",">":"&gt;"};function A(t){return String(t).replace(/["'&<>]/g,t=>F[t])}const h={$$render:()=>""};function g(t,e){if(!t||!t.$$render)throw"svelte:component"===e&&(e+=" this={...}"),new Error(`<${e}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);return t}let m;function C(t){function e(e,n,o,r){const a=s;i({$$:{on_destroy:m,context:new Map(a?a.$$.context:[]),on_mount:[],before_update:[],after_update:[],callbacks:Object.create(null)}});const u=t(e,n,o,r);return i(a),u}return{render:(t={},o={})=>{m=[];const r={title:"",head:"",css:new Set},s=e(r,t,{},o);return n(m),{html:s,css:{code:Array.from(r.css).map(t=>t.code).join("\n"),map:null},head:r.title+r.head}},$$render:e}}const v=[];function b(e,n=t){let o;const r=[];function s(t){if(s=t,((n=e)!=n?s==s:n!==s||n&&"object"==typeof n||"function"==typeof n)&&(e=t,o)){const t=!v.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),v.push(n,e)}if(t){for(let t=0;t<v.length;t+=2)v[t][0](v[t+1]);v.length=0}}var n,s}return{set:s,update:function(t){s(t(e))},subscribe:function(i,a=t){const u=[i,a];return r.push(u),1===r.length&&(o=n(s)||t),i(e),()=>{const t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function $(e,r,s){const i=!Array.isArray(e),a=i?[e]:e,u=r.length<2;return{subscribe:b(s,e=>{let s=!1;const c=[];let l=0,p=t;const f=()=>{if(l)return;p();const n=r(i?c[0]:c,e);u?e(n):p="function"==typeof n?n:t},d=a.map((t,e)=>o(t,t=>{c[e]=t,l&=~(1<<e),s&&f()},()=>{l|=1<<e}));return s=!0,f(),function(){n(d),p()}}).subscribe}}const E={},y={};function x(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}const w=function(t,e){const n=[];let o=x(t);return{get location(){return o},listen(e){n.push(e);const r=()=>{o=x(t),e({location:o,action:"POP"})};return t.addEventListener("popstate",r),()=>{t.removeEventListener("popstate",r);const o=n.indexOf(e);n.splice(o,1)}},navigate(e,{state:r,replace:s=!1}={}){r={...r,key:Date.now()+""};try{s?t.history.replaceState(r,null,e):t.history.pushState(r,null,e)}catch(n){t.location[s?"replace":"assign"](e)}o=x(t),n.forEach(t=>t({location:o,action:"PUSH"}))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(t="/"){let e=0;const n=[{pathname:t,search:""}],o=[];return{get location(){return n[e]},addEventListener(t,e){},removeEventListener(t,e){},history:{get entries(){return n},get index(){return e},get state(){return o[e]},pushState(t,r,s){const[i,a=""]=s.split("?");e++,n.push({pathname:i,search:a}),o.push(t)},replaceState(t,r,s){const[i,a=""]=s.split("?");n[e]={pathname:i,search:a},o[e]=t}}}}()),k=/^:(.+)/;function P(t,e){return t.substr(0,e.length)===e}function B(t){return"*"===t[0]}function S(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function O(t){return t.replace(/(^\/+|\/+$)/g,"")}function j(t,e){return{route:t,score:t.default?0:S(t.path).reduce((t,e)=>(t+=4,!function(t){return""===t}(e)?!function(t){return k.test(t)}(e)?B(e)?t-=5:t+=3:t+=2:t+=1,t),0),index:e}}function I(t,e){let n,o;const[r]=e.split("?"),s=S(r),i=""===s[0],a=function(t){return t.map(j).sort((t,e)=>t.score<e.score?1:t.score>e.score?-1:t.index-e.index)}(t);for(let t=0,r=a.length;t<r;t++){const r=a[t].route;let u=!1;if(r.default){o={route:r,params:{},uri:e};continue}const c=S(r.path),l={},p=Math.max(s.length,c.length);let f=0;for(;f<p;f++){const t=c[f],e=s[f];if(void 0!==t&&B(t)){l["*"===t?"*":t.slice(1)]=s.slice(f).map(decodeURIComponent).join("/");break}if(void 0===e){u=!0;break}let n=k.exec(t);if(n&&!i){const t=decodeURIComponent(e);l[n[1]]=t}else if(t!==e){u=!0;break}}if(!u){n={route:r,params:l,uri:"/"+s.slice(0,f).join("/")};break}}return n||o||null}function R(t,e){return t+(e?"?"+e:"")}function M(t,e){return O("/"===e?t:`${O(t)}/${O(e)}`)+"/"}const L=C((t,e,n,o)=>{let s,i,a,{basepath:c="/"}=e,{url:f=null}=e;const d=p(E),F=p(y),A=b([]);a=r(A);const h=b(null);let g=!1;const m=d||b(f?{pathname:f}:w.location);i=r(m);const C=F?F.routerBase:b({path:c,uri:c});s=r(C);const v=$([C,h],([t,e])=>{if(null===e)return t;const{path:n}=t,{route:o,uri:r}=e;return{path:o.default?n:o.path.replace(/\*.*$/,""),uri:r}});d||(u(()=>w.listen(t=>{m.set(t.location)})),l(E,m)),l(y,{activeRoute:h,base:C,routerBase:v,registerRoute:function(t){const{path:e}=s;let{path:n}=t;if(t._path=n,t.path=M(e,n),"undefined"==typeof window){if(g)return;const e=function(t,e){return I([t],e)}(t,i.pathname);e&&(h.set(e),g=!0)}else A.update(e=>(e.push(t),e))},unregisterRoute:function(t){A.update(e=>{const n=e.indexOf(t);return e.splice(n,1),e})}}),void 0===e.basepath&&n.basepath&&void 0!==c&&n.basepath(c),void 0===e.url&&n.url&&void 0!==f&&n.url(f),s=r(C),i=r(m),a=r(A);{const{path:t}=s;A.update(e=>(e.forEach(e=>e.path=M(t,e._path)),e))}{const t=I(a,i.pathname);h.set(t)}return""+(o.default?o.default({}):"")}),_=C((t,e,n,o)=>{let s,i,{path:u=""}=e,{component:c=null}=e;const{registerRoute:l,unregisterRoute:f,activeRoute:d}=p(y);s=r(d);const F=p(E);i=r(F);const A={path:u,default:""===u};let m={},C={};var v;l(A),"undefined"!=typeof window&&(v=()=>{f(A)},a().$$.on_destroy.push(v)),void 0===e.path&&n.path&&void 0!==u&&n.path(u),void 0===e.component&&n.component&&void 0!==c&&n.component(c),s=r(d),i=r(F),s&&s.route===A&&(m=s.params);{const{path:t,component:n,...o}=e;C=o}return""+(null!==s&&s.route===A?""+(null!==c?""+g(c||h,"svelte:component").$$render(t,Object.assign({location:i},m,C),{},{}):""+(o.default?o.default({params:m,location:i}):"")):"")}),T=C((t,e,n,o)=>{let s,i,{to:a="#"}=e,{replace:u=!1}=e,{state:l={}}=e,{getProps:F=(()=>({}))}=e;const{base:h}=p(y);s=r(h);const g=p(E);i=r(g);c();let m,C,v,b,$;return void 0===e.to&&n.to&&void 0!==a&&n.to(a),void 0===e.replace&&n.replace&&void 0!==u&&n.replace(u),void 0===e.state&&n.state&&void 0!==l&&n.state(l),void 0===e.getProps&&n.getProps&&void 0!==F&&n.getProps(F),s=r(h),i=r(g),m="/"===a?s.uri:function(t,e){if(P(t,"/"))return t;const[n,o]=t.split("?"),[r]=e.split("?"),s=S(n),i=S(r);if(""===s[0])return R(r,o);if(!P(s[0],"."))return R(("/"===r?"":"/")+i.concat(s).join("/"),o);const a=i.concat(s),u=[];return a.forEach(t=>{".."===t?u.pop():"."!==t&&u.push(t)}),R("/"+u.join("/"),o)}(a,s.uri),C=P(i.pathname,m),v=m===i.pathname,$=v?"page":void 0,b=F({location:i,href:m,isPartiallyCurrent:C,isCurrent:v}),`<a${function(t,e){const n=Object.assign({},...t);e&&(null==n.class?n.class=e:n.class+=" "+e);let o="";return Object.keys(n).forEach(t=>{if(d.test(t))return;const e=n[t];!0===e?o+=" "+t:f.has(t.toLowerCase())?e&&(o+=" "+t):null!=e&&(o+=` ${t}="${String(e).replace(/"/g,"&#34;").replace(/'/g,"&#39;")}"`)}),o}([{href:A(m)},{"aria-current":A($)},b])}>${o.default?o.default({}):""}</a>`}),D={code:"nav.svelte-4bfyvb{position:fixed;left:0;top:0;width:100%;height:50px;display:flex;justify-content:center;align-items:center;background-color:#6abf73}",map:'{"version":3,"file":"Navigation.svelte","sources":["Navigation.svelte"],"sourcesContent":["<script>\\n  import { Link } from \'svelte-routing\'\\n\\n  let links = [\\n    { label: \'Home\', to: \'/\' },\\n    { label: \'Bugs\', to: \'/bugs\' },\\n    { label: \'Fish\', to: \'/fish\' }\\n  ]\\n\\n  const getProps = () => ({ location, href, isPartiallyCurrent, isCurrent }) => {\\n    const isActive = href === \'/\' ? isCurrent : isPartiallyCurrent || isCurrent\\n    return isActive ? { class: \'active\' } : {}\\n  }\\n<\/script>\\n\\n<nav>\\n  {#each links as { label, to }}\\n    <Link to=\\"{ to }\\" getProps=\\"{ getProps }\\">\\n      { label }\\n    </Link>\\n  {/each}\\n</nav>\\n\\n<style>\\n  nav {\\n    position: fixed;\\n    left: 0;\\n    top: 0;\\n    width: 100%;\\n    height: 50px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    background-color: #6abf73;\\n  }\\n  nav a {\\n    display: inline-block;\\n    color: #fff;\\n    margin: 0 20px;\\n    padding: 5px 0 2px 0;\\n    border-bottom: 3px solid transparent;\\n    cursor: pointer;\\n  }\\n  nav a.active {\\n    border-color: #fff;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAwBE,GAAG,cAAC,CAAC,AACH,QAAQ,CAAE,KAAK,CACf,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,gBAAgB,CAAE,OAAO,AAC3B,CAAC"}'},N=C((t,e,n,o)=>{const r=()=>({location:t,href:e,isPartiallyCurrent:n,isCurrent:o})=>("/"===e?o:n||o)?{class:"active"}:{};return t.css.add(D),`<nav class="svelte-4bfyvb">${function(t,e){let n="";for(let o=0;o<t.length;o+=1)n+=e(t[o],o);return n}([{label:"Home",to:"/"},{label:"Bugs",to:"/bugs"},{label:"Fish",to:"/fish"}],({label:e,to:n})=>""+g(T,"Link").$$render(t,{to:n,getProps:r},{},{default:()=>A(e)+"\n    "}))}\n</nav>`}),q={code:"h1.svelte-1gwqmzv{font-size:40px;margin:30px 0;text-align:center}",map:'{"version":3,"file":"Title.svelte","sources":["Title.svelte"],"sourcesContent":["<h1>\\n  <slot></slot>\\n</h1>\\n\\n<style>\\n  h1 {\\n    font-size: 40px;\\n    margin: 30px 0;\\n    text-align: center;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAKE,EAAE,eAAC,CAAC,AACF,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,IAAI,CAAC,CAAC,CACd,UAAU,CAAE,MAAM,AACpB,CAAC"}'},z=C((t,e,n,o)=>(t.css.add(q),`<h1 class="svelte-1gwqmzv">${o.default?o.default({}):""}\n</h1>`)),H=C((t,e,n,o)=>""+g(z,"Title").$$render(t,{},{},{default:()=>"Home"})),K=C((t,e,n,o)=>{let r;const s={ids:["5f65110a91ba911fe0b3cc4a","5f65052e964a307f201ca372"]};return u(()=>((t,e,n)=>{const o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch(t,o).then(t=>t.json()).then(t=>n(t)).catch(t=>console.log("get err",t))})("http://localhost:5555/getBugsCollection",s,t=>r=t)),`${g(z,"Title").$$render(t,{},{},{default:()=>"Bugs Collection"})}\n\n${r?`<pre>${A(JSON.stringify(r,null,2))}</pre>`:"<p>Loading...</p>"}`}),U=C((t,e,n,o)=>""+g(z,"Title").$$render(t,{},{},{default:()=>"Fish Collection"})),G=C((t,e,n,o)=>{let{url:r=""}=e;return void 0===e.url&&n.url&&void 0!==r&&n.url(r),""+g(L,"Router").$$render(t,{url:r},{},{default:()=>`${g(N,"Navigation").$$render(t,{},{},{})}\n  ${g(_,"Route").$$render(t,{path:"/",component:H},{},{})}\n  ${g(_,"Route").$$render(t,{path:"/bugs",component:K},{},{})}\n  ${g(_,"Route").$$render(t,{path:"/fish",component:U},{},{})}`})});module.exports=G;