const e="stencil-web-components";let t,n,l,o=!1,s=!1,c=!1,r=0,i=!1;const a="undefined"!=typeof window?window:{},f=a.CSS,u=a.document||{head:{}},$={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l)},d=(()=>(u.head.attachShadow+"").indexOf("[native")>-1)(),p=e=>Promise.resolve(e),m=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),h=new WeakMap,y=(e,t,n)=>{let l=he.get(e);m&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,he.set(e,l)},w=(e,t)=>{let n=b(t.o),l=he.get(n);if(e=11===e.nodeType?e:u,l)if("string"==typeof l){let t,o=h.get(e=e.head||e);o||h.set(e,o=new Set),o.has(n)||(e.host&&(t=e.querySelector(`[sty-id="${n}"]`))?t.innerHTML=l:(t=u.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link"))),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n},b=e=>"sc-"+e,_=e=>e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{"),v={},g=e=>"object"==(e=typeof e)||"function"===e,j=(e,t,...n)=>{let l=null,o=null,s=!1,c=!1,r=[];const i=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!g(l))&&(l+=""),s&&c?r[r.length-1].s+=l:r.push(s?k(null,l):l),c=s)};if(i(n),t){t.name&&(o=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,r,R);const a=k(e,null);return a.u=t,r.length>0&&(a.$=r),a.p=o,a},k=(e,t)=>({t:0,h:e,s:t,_:null,$:null,u:null,p:null}),M={},R={forEach:(e,t)=>e.map(U).forEach(t),map:(e,t)=>e.map(U).map(t).map(x)},U=e=>({vattrs:e.u,vchildren:e.$,vkey:e.v,vname:e.p,vtag:e.h,vtext:e.s}),x=e=>{const t=k(e.vtag,e.vtext);return t.u=e.vattrs,t.$=e.vchildren,t.v=e.vkey,t.p=e.vname,t},S=(e,t,n,l,o,s)=>{if(n!==l){let r=$e(e,t),i=t.toLowerCase();if("class"===t){const t=e.classList,o=O(n),s=O(l);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else if(r||"o"!==t[0]||"n"!==t[1]){const i=g(l);if((r||i&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?r=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(c){}null==l||!1===l?e.removeAttribute(t):(!r||4&s||o)&&!i&&e.setAttribute(t,l=!0===l?"":l)}else t="-"===t[2]?t.slice(3):$e(a,i)?i.slice(2):i[2]+t.slice(3),n&&$.rel(e,t,n,!1),l&&$.ael(e,t,l,!1)}},L=/\s/,O=e=>e?e.split(L):[],C=(e,t,n,l)=>{const o=11===t._.nodeType&&t._.host?t._.host:t._,s=e&&e.u||v,c=t.u||v;for(l in s)l in c||S(o,l,s[l],void 0,n,t.t);for(l in c)S(o,l,s[l],c[l],n,t.t)},E=(e,s,r,i)=>{let a,f,$,d=s.$[r],p=0;if(o||(c=!0,"slot"===d.h&&(t&&i.classList.add(t+"-s"),d.t|=d.$?2:1)),null!==d.s)a=d._=u.createTextNode(d.s);else if(1&d.t)a=d._=u.createTextNode("");else if(a=d._=u.createElement(2&d.t?"slot-fb":d.h),C(null,d,!1),null!=t&&a["s-si"]!==t&&a.classList.add(a["s-si"]=t),d.$)for(p=0;p<d.$.length;++p)f=E(e,d,p,a),f&&a.appendChild(f);return a["s-hn"]=l,3&d.t&&(a["s-sr"]=!0,a["s-cr"]=n,a["s-sn"]=d.p||"",$=e&&e.$&&e.$[r],$&&$.h===d.h&&e._&&P(e._,!1)),a},P=(e,t)=>{$.t|=1;const n=e.childNodes;for(let o=n.length-1;o>=0;o--){const e=n[o];e["s-hn"]!==l&&e["s-ol"]&&(D(e).insertBefore(e,A(e)),e["s-ol"].remove(),e["s-ol"]=void 0,c=!0),t&&P(e,t)}$.t&=-2},T=(e,t,n,o,s,c)=>{let r,i=e["s-cr"]&&e["s-cr"].parentNode||e;for(i.shadowRoot&&i.tagName===l&&(i=i.shadowRoot);s<=c;++s)o[s]&&(r=E(null,n,s,e),r&&(o[s]._=r,i.insertBefore(r,A(t))))},I=(e,t,n,l,o)=>{for(;t<=n;++t)(l=e[t])&&(s=!0,(o=l._)["s-ol"]?o["s-ol"].remove():P(o,!0),o.remove())},W=(e,t)=>e.h===t.h&&("slot"!==e.h||e.p===t.p),A=e=>e&&e["s-ol"]||e,D=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,F=(e,t)=>{const n=t._=e._,l=e.$,o=t.$,s=t.s;let c;null===s?("slot"===t.h||C(e,t,!1),null!==l&&null!==o?((e,t,n,l)=>{let o,s=0,c=0,r=t.length-1,i=t[0],a=t[r],f=l.length-1,u=l[0],$=l[f];for(;s<=r&&c<=f;)null==i?i=t[++s]:null==a?a=t[--r]:null==u?u=l[++c]:null==$?$=l[--f]:W(i,u)?(F(i,u),i=t[++s],u=l[++c]):W(a,$)?(F(a,$),a=t[--r],$=l[--f]):W(i,$)?("slot"!==i.h&&"slot"!==$.h||P(i._.parentNode,!1),F(i,$),e.insertBefore(i._,a._.nextSibling),i=t[++s],$=l[--f]):W(a,u)?("slot"!==i.h&&"slot"!==$.h||P(a._.parentNode,!1),F(a,u),e.insertBefore(a._,i._),a=t[--r],u=l[++c]):(o=E(t&&t[c],n,c,e),u=l[++c],o&&D(i._).insertBefore(o,A(i._)));s>r?T(e,null==l[f+1]?null:l[f+1]._,n,l,c,f):c>f&&I(t,s,r)})(n,l,t,o):null!==o?(null!==e.s&&(n.textContent=""),T(n,null,t,o,0,o.length-1)):null!==l&&I(l,0,l.length-1)):(c=n["s-cr"])?c.parentNode.textContent=s:e.s!==s&&(n.data=s)},H=e=>{let t,n,l,o,s,c,r=e.childNodes;for(n=0,l=r.length;n<l;n++)if(t=r[n],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(r[o]["s-hn"]!==t["s-hn"])if(c=r[o].nodeType,""!==s){if(1===c&&s===r[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===c||3===c&&""!==r[o].textContent.trim()){t.hidden=!0;break}H(t)}},N=[],q=e=>{let t,n,l,o,c,r,i=0,a=e.childNodes,f=a.length;for(;i<f;i++){if(t=a[i],t["s-sr"]&&(n=t["s-cr"]))for(l=n.parentNode.childNodes,o=t["s-sn"],r=l.length-1;r>=0;r--)n=l[r],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(B(n,o)?(c=N.find(e=>e.g===n),s=!0,n["s-sn"]=n["s-sn"]||o,c?c.j=t:N.push({j:t,g:n}),n["s-sr"]&&N.map(e=>{B(e.g,n["s-sn"])&&(c=N.find(e=>e.g===n),c&&!e.j&&(e.j=c.j))})):N.some(e=>e.g===n)||N.push({g:n}));1===t.nodeType&&q(t)}},B=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,V=(e,t,n)=>{const l=(e=>ae(e).k)(e);return{emit:e=>z(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},z=(e,t,n)=>{const l=new CustomEvent(t,n);return e.dispatchEvent(l),l},G=(e,t)=>{t&&!e.M&&t["s-p"].push(new Promise(t=>e.M=t))},J=(e,t)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const n=e.R,l=()=>K(e,n,t);let o;return G(e,e.U),o=Z(n,t?"componentWillLoad":"componentWillUpdate"),ee(o,()=>ke(l))},K=(e,r,i)=>{const a=e.k,f=a["s-rc"];i&&(e=>{const t=e.S,n=e.k,l=t.t,o=w(d&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"),2&l&&n.classList.add(o+"-s"))})(e),((e,r)=>{const i=e.k,a=e.S,f=e.L||k(null,null),p=(e=>e&&e.h===M)(r)?r:j(null,null,r);if(l=i.tagName,p.h=null,p.t|=4,e.L=p,p._=f._=i.shadowRoot||i,t=i["s-sc"],n=i["s-cr"],o=d&&0!=(1&a.t),s=!1,F(f,p),$.t|=1,c){let e,t,n,l,o,s;q(p._);let c=0;for(;c<N.length;c++)e=N[c],t=e.g,t["s-ol"]||(n=u.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(c=0;c<N.length;c++)if(e=N[c],t=e.g,e.j){for(l=e.j.parentNode,o=e.j.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}s&&H(p._),$.t&=-2,N.length=0})(e,Q(r)),e.t&=-17,e.t|=2,f&&(f.map(e=>e()),a["s-rc"]=void 0);{const t=a["s-p"],n=()=>X(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},Q=e=>{try{e=e.render()}catch(t){de(t)}return e},X=e=>{const t=e.k,n=e.R,l=e.U;64&e.t?Z(n,"componentDidUpdate"):(e.t|=64,te(t),Z(n,"componentDidLoad"),e.O(t),l||Y()),e.M&&(e.M(),e.M=void 0),512&e.t&&je(()=>J(e,!1)),e.t&=-517},Y=()=>{te(u.documentElement),$.t|=2,je(()=>z(a,"appload",{detail:{namespace:e}}))},Z=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){de(l)}},ee=(e,t)=>e&&e.then?e.then(t):t(),te=e=>e.classList.add("hydrated"),ne=(e,t,n,l,o,s,c)=>{let r,i,a,f;if(1===s.nodeType){for(r=s.getAttribute("c-id"),r&&(i=r.split("."),i[0]!==c&&"0"!==i[0]||(a={t:0,C:i[0],P:i[1],T:i[2],I:i[3],h:s.tagName.toLowerCase(),_:s,u:null,$:null,v:null,p:null,s:null},t.push(a),s.removeAttribute("c-id"),e.$||(e.$=[]),e.$[a.I]=a,e=a,l&&"0"===a.T&&(l[a.I]=a._))),f=s.childNodes.length-1;f>=0;f--)ne(e,t,n,l,o,s.childNodes[f],c);if(s.shadowRoot)for(f=s.shadowRoot.childNodes.length-1;f>=0;f--)ne(e,t,n,l,o,s.shadowRoot.childNodes[f],c)}else if(8===s.nodeType)i=s.nodeValue.split("."),i[1]!==c&&"0"!==i[1]||(r=i[0],a={t:0,C:i[1],P:i[2],T:i[3],I:i[4],_:s,u:null,$:null,v:null,p:null,h:null,s:null},"t"===r?(a._=s.nextSibling,a._&&3===a._.nodeType&&(a.s=a._.textContent,t.push(a),s.remove(),e.$||(e.$=[]),e.$[a.I]=a,l&&"0"===a.T&&(l[a.I]=a._))):a.C===c&&("s"===r?(a.h="slot",s["s-sn"]=i[5]?a.p=i[5]:"",s["s-sr"]=!0,l&&(a._=u.createElement(a.h),a.p&&a._.setAttribute("name",a.p),s.parentNode.insertBefore(a._,s),s.remove(),"0"===a.T&&(l[a.I]=a._)),n.push(a),e.$||(e.$=[]),e.$[a.I]=a):"r"===r&&(l?s.remove():(o["s-cr"]=s,s["s-cn"]=!0))));else if(e&&"style"===e.h){const t=k(null,s.textContent);t._=s,t.I="0",e.$=[t]}},le=(e,t)=>{if(1===e.nodeType){let n=0;for(;n<e.childNodes.length;n++)le(e.childNodes[n],t);if(e.shadowRoot)for(n=0;n<e.shadowRoot.childNodes.length;n++)le(e.shadowRoot.childNodes[n],t)}else if(8===e.nodeType){const n=e.nodeValue.split(".");"o"===n[0]&&(t.set(n[1]+"."+n[2],e),e.nodeValue="",e["s-en"]=n[3])}},oe=(e,t,n)=>{if(t.W){const l=Object.entries(t.W),o=e.prototype;if(l.map(([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,e,{get(){return((e,t)=>ae(this).A.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=ae(this),s=o.A.get(t),c=o.t,r=o.R;n=((e,t)=>null==e||g(e)?e:2&t?parseFloat(e):1&t?e+"":e)(n,l.W[t][0]),8&c&&void 0!==s||n===s||(o.A.set(t,n),r&&2==(18&c)&&J(o,!1))})(0,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const t=new Map;o.attributeChangedCallback=function(e,n,l){$.jmp(()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,n])=>{const l=n[1]||e;return t.set(l,e),l})}}return e},se=e=>{if(0==(1&$.t)){const t=ae(e),n=t.S,l=()=>{};if(!(1&t.t)){let l;if(t.t|=1,l=e.getAttribute("s-id"),l){if(d&&1&n.t){const t=w(e.shadowRoot,n);e.classList.remove(t+"-h",t+"-s")}((e,t,n,l)=>{const o=e.shadowRoot,s=[],c=o?[]:null,r=l.L=k(t,null);$.D||le(u.body,$.D=new Map),e["s-id"]=n,e.removeAttribute("s-id"),ne(r,s,[],c,e,e,n),s.map(e=>{const n=e.C+"."+e.P,l=$.D.get(n),s=e._;l&&d&&""===l["s-en"]&&l.parentNode.insertBefore(s,l.nextSibling),o||(s["s-hn"]=t,l&&(s["s-ol"]=l,s["s-ol"]["s-nr"]=s)),$.D.delete(n)}),o&&c.map(e=>{e&&o.appendChild(e)})})(e,n.o,l,t)}l||12&n.t&&ce(e);{let n=e;for(;n=n.parentNode||n.host;)if(1===n.nodeType&&n.hasAttribute("s-id")||n["s-p"]){G(t,t.U=n);break}}n.W&&Object.entries(n.W).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),je(()=>(async(e,t,n,l,o)=>{if(0==(32&t.t)){t.t|=32;{if((o=me(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(oe(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(r){de(r)}t.t&=-9,e()}const e=b(n.o);if(!he.has(e)&&o.style){const t=()=>{};let l=o.style;8&n.t&&(l=await __sc_import_stencil_web_components("./p-5be35157.js").then(t=>t.scopeCss(l,e,!1))),y(e,l,!!(1&n.t)),t()}}const s=t.U,c=()=>J(t,!0);s&&s["s-rc"]?s["s-rc"].push(c):c()})(0,t,n))}l()}},ce=e=>{const t=e["s-cr"]=u.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},re=(e,t={})=>{const n=[],l=t.exclude||[],o=a.customElements,s=u.head,c=s.querySelector("meta[charset]"),r=u.createElement("style"),i=[],f=u.querySelectorAll("[sty-id]");let p,m=!0,h=0;for(Object.assign($,t),$.l=new URL(t.resourcesUrl||"./",u.baseURI).href,t.syncQueue&&($.t|=4),$.t|=2;h<f.length;h++)y(f[h].getAttribute("sty-id"),_(f[h].innerHTML),!0);e.map(e=>e[1].map(t=>{const s={t:t[0],o:t[1],W:t[2],F:t[3]};s.W=t[2],!d&&1&s.t&&(s.t|=8);const c=s.o,r=class extends HTMLElement{constructor(e){super(e),ue(e=this,s),1&s.t&&(d?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){p&&(clearTimeout(p),p=null),m?i.push(this):$.jmp(()=>se(this))}disconnectedCallback(){$.jmp(()=>(()=>{0==(1&$.t)&&Z(ae(this).R,"componentDidUnload")})())}forceUpdate(){(()=>{{const e=ae(this);e.k.isConnected&&2==(18&e.t)&&J(e,!1)}})()}componentOnReady(){return ae(this).H}};s.N=e[0],l.includes(c)||o.get(c)||(n.push(c),o.define(c,oe(r,s,1)))})),r.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),s.insertBefore(r,c?c.nextSibling:s.firstChild),m=!1,i.length?i.map(e=>e.connectedCallback()):$.jmp(()=>p=setTimeout(Y,30))},ie=new WeakMap,ae=e=>ie.get(e),fe=(e,t)=>ie.set(t.R=e,t),ue=(e,t)=>{const n={t:0,k:e,S:t,A:new Map};return n.H=new Promise(e=>n.O=e),e["s-p"]=[],e["s-rc"]=[],ie.set(e,n)},$e=(e,t)=>t in e,de=e=>console.error(e),pe=new Map,me=e=>{const t=e.o.replace(/-/g,"_"),n=e.N,l=pe.get(n);return l?l[t]:__sc_import_stencil_web_components(`./${n}.entry.js`).then(e=>(pe.set(n,e),e[t]),de)},he=new Map,ye=[],we=[],be=[],_e=(e,t)=>n=>{e.push(n),i||(i=!0,t&&4&$.t?je(ge):$.raf(ge))},ve=(e,t)=>{let n=0,l=0;for(;n<e.length&&(l=performance.now())<t;)try{e[n++](l)}catch(o){de(o)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},ge=()=>{r++,(e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){de(t)}e.length=0})(ye);{const e=2==(6&$.t)?performance.now()+14*Math.ceil(.1*r):1/0;ve(we,e),ve(be,e),we.length>0&&(be.push(...we),we.length=0),(i=ye.length+we.length+be.length>0)?$.raf(ge):r=0}},je=e=>p().then(e),ke=_e(we,!0),Me=()=>f&&f.supports&&f.supports("color","var(--c)")?p():__sc_import_stencil_web_components("./p-a412aefa.js").then(()=>($.q=a.__cssshim)?(!1).i():0),Re=()=>{$.q=a.__cssshim;const t=Array.from(u.querySelectorAll("script")).find(t=>RegExp(`/${e}(\\.esm)?\\.js($|\\?|#)`).test(t.src)||t.getAttribute("data-stencil-namespace")===e),n=t["data-opts"]||{};return"onbeforeload"in t&&!history.scrollRestoration?{then(){}}:(n.resourcesUrl=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,a.location.href)).href,Ue(n.resourcesUrl,t),a.customElements?p(n):__sc_import_stencil_web_components("./p-b28562ec.js").then(()=>n))},Ue=(e,t)=>{const n="__sc_import_stencil_web_components";try{a[n]=Function("w","return import(w);//"+Math.random())}catch(l){const o=new Map;a[n]=l=>{const s=new URL(l,e).href;let c=o.get(s);if(!c){const e=u.createElement("script");e.type="module",e.crossOrigin=t.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${s}'; window.${n}.m = m;`],{type:"application/javascript"})),c=new Promise(t=>{e.onload=()=>{t(a[n].m),e.remove()}}),o.set(s,c),u.head.appendChild(e)}return c}}};export{M as H,Me as a,re as b,V as c,j as h,Re as p,fe as r}