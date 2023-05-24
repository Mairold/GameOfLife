(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function E(){}const ue=e=>e;function nt(e,t){for(const n in t)e[n]=t[n];return e}function ze(e){return e()}function ke(){return Object.create(null)}function G(e){e.forEach(ze)}function le(e){return typeof e=="function"}function j(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let se;function X(e,t){return se||(se=document.createElement("a")),se.href=t,e===se.href}function lt(e){return Object.keys(e).length===0}function rt(e,...t){if(e==null)return E;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Ge(e,t,n){e.$$.on_destroy.push(rt(t,n))}function ve(e,t,n,l){if(e){const r=Oe(e,t,n,l);return e[0](r)}}function Oe(e,t,n,l){return e[1]&&l?nt(n.ctx.slice(),e[1](l(t))):n.ctx}function we(e,t,n,l){if(e[2]&&l){const r=e[2](l(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const o=[],i=Math.max(t.dirty.length,r.length);for(let c=0;c<i;c+=1)o[c]=t.dirty[c]|r[c];return o}return t.dirty|r}return t.dirty}function Ee(e,t,n,l,r,o){if(r){const i=Oe(t,n,l,o);e.p(i,r)}}function Ie(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let l=0;l<n;l++)t[l]=-1;return t}return-1}function _e(e,t,n){return e.set(n),t}const De=typeof window<"u";let je=De?()=>window.performance.now():()=>Date.now(),he=De?e=>requestAnimationFrame(e):E;const V=new Set;function qe(e){V.forEach(t=>{t.c(e)||(V.delete(t),t.f())}),V.size!==0&&he(qe)}function Ne(e){let t;return V.size===0&&he(qe),{promise:new Promise(n=>{V.add(t={c:e,f:n})}),abort(){V.delete(t)}}}function $(e,t){e.appendChild(t)}function He(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function st(e){const t=k("style");return ot(He(e),t),t.sheet}function ot(e,t){return $(e.head||e,t),t.sheet}function C(e,t,n){e.insertBefore(t,n||null)}function I(e){e.parentNode&&e.parentNode.removeChild(e)}function it(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function k(e){return document.createElement(e)}function ye(e){return document.createTextNode(e)}function M(){return ye(" ")}function at(){return ye("")}function P(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function ct(e){return function(t){return t.stopPropagation(),e.call(this,t)}}function ut(e){return function(t){t.target===this&&e.call(this,t)}}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ft(e){return e===""?null:+e}function _t(e){return Array.from(e.childNodes)}function dt(e,t){t=""+t,e.data!==t&&(e.data=t)}function Pe(e,t){e.value=t??""}function Re(e,t,n,l){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,l?"important":"")}function Te(e,t,{bubbles:n=!1,cancelable:l=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,l,t),r}const ie=new Map;let ae=0;function gt(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function mt(e,t){const n={stylesheet:st(t),rules:{}};return ie.set(e,n),n}function We(e,t,n,l,r,o,i,c=0){const s=16.666/l;let a=`{
`;for(let b=0;b<=1;b+=s){const y=t+(n-t)*o(b);a+=b*100+`%{${i(y,1-y)}}
`}const f=a+`100% {${i(n,1-n)}}
}`,m=`__svelte_${gt(f)}_${c}`,u=He(e),{stylesheet:_,rules:g}=ie.get(u)||mt(u,e);g[m]||(g[m]=!0,_.insertRule(`@keyframes ${m} ${f}`,_.cssRules.length));const d=e.style.animation||"";return e.style.animation=`${d?`${d}, `:""}${m} ${l}ms linear ${r}ms 1 both`,ae+=1,m}function ge(e,t){const n=(e.style.animation||"").split(", "),l=n.filter(t?o=>o.indexOf(t)<0:o=>o.indexOf("__svelte")===-1),r=n.length-l.length;r&&(e.style.animation=l.join(", "),ae-=r,ae||pt())}function pt(){he(()=>{ae||(ie.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&I(t)}),ie.clear())})}let ne;function te(e){ne=e}function Ke(){if(!ne)throw new Error("Function called outside component initialization");return ne}function ht(e){Ke().$$.on_mount.push(e)}function Ue(){const e=Ke();return(t,n,{cancelable:l=!1}={})=>{const r=e.$$.callbacks[t];if(r){const o=Te(t,n,{cancelable:l});return r.slice().forEach(i=>{i.call(e,o)}),!o.defaultPrevented}return!0}}function yt(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(l=>l.call(this,t))}const U=[],S=[];let J=[];const me=[],bt=Promise.resolve();let pe=!1;function $t(){pe||(pe=!0,bt.then(Ve))}function Y(e){J.push(e)}function be(e){me.push(e)}const de=new Set;let W=0;function Ve(){if(W!==0)return;const e=ne;do{try{for(;W<U.length;){const t=U[W];W++,te(t),kt(t.$$)}}catch(t){throw U.length=0,W=0,t}for(te(null),U.length=0,W=0;S.length;)S.pop()();for(let t=0;t<J.length;t+=1){const n=J[t];de.has(n)||(de.add(n),n())}J.length=0}while(U.length);for(;me.length;)me.pop()();pe=!1,de.clear(),te(e)}function kt(e){if(e.fragment!==null){e.update(),G(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Y)}}function vt(e){const t=[],n=[];J.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),J=t}let x;function Je(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function ce(e,t,n){e.dispatchEvent(Te(`${t?"intro":"outro"}${n}`))}const oe=new Set;let O;function Qe(){O={r:0,c:[],p:O}}function Xe(){O.r||G(O.c),O=O.p}function B(e,t){e&&e.i&&(oe.delete(e),e.i(t))}function F(e,t,n,l){if(e&&e.o){if(oe.has(e))return;oe.add(e),O.c.push(()=>{oe.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}const Ye={duration:0};function wt(e,t,n){const l={direction:"in"};let r=t(e,n,l),o=!1,i,c,s=0;function a(){i&&ge(e,i)}function f(){const{delay:u=0,duration:_=300,easing:g=ue,tick:d=E,css:b}=r||Ye;b&&(i=We(e,0,1,_,u,g,b,s++)),d(0,1);const y=je()+u,p=y+_;c&&c.abort(),o=!0,Y(()=>ce(e,!0,"start")),c=Ne(v=>{if(o){if(v>=p)return d(1,0),ce(e,!0,"end"),a(),o=!1;if(v>=y){const q=g((v-y)/_);d(q,1-q)}}return o})}let m=!1;return{start(){m||(m=!0,ge(e),le(r)?(r=r(l),Je().then(f)):f())},invalidate(){m=!1},end(){o&&(a(),o=!1)}}}function Et(e,t,n){const l={direction:"out"};let r=t(e,n,l),o=!0,i;const c=O;c.r+=1;function s(){const{delay:a=0,duration:f=300,easing:m=ue,tick:u=E,css:_}=r||Ye;_&&(i=We(e,1,0,f,a,m,_));const g=je()+a,d=g+f;Y(()=>ce(e,!1,"start")),Ne(b=>{if(o){if(b>=d)return u(0,1),ce(e,!1,"end"),--c.r||G(c.c),!1;if(b>=g){const y=m((b-g)/f);u(1-y,y)}}return o})}return le(r)?Je().then(()=>{r=r(l),s()}):s(),{end(a){a&&r.tick&&r.tick(1,0),o&&(i&&ge(e,i),o=!1)}}}function Ze(e,t){e.d(1),t.delete(e.key)}function xe(e,t,n,l,r,o,i,c,s,a,f,m){let u=e.length,_=o.length,g=u;const d={};for(;g--;)d[e[g].key]=g;const b=[],y=new Map,p=new Map,v=[];for(g=_;g--;){const w=m(r,o,g),A=n(w);let L=i.get(A);L?l&&v.push(()=>L.p(w,t)):(L=a(A,w),L.c()),y.set(A,b[g]=L),A in d&&p.set(A,Math.abs(g-d[A]))}const q=new Set,Z=new Set;function fe(w){B(w,1),w.m(c,f),i.set(w.key,w),f=w.first,_--}for(;u&&_;){const w=b[_-1],A=e[u-1],L=w.key,re=A.key;w===A?(f=w.first,u--,_--):y.has(re)?!i.has(L)||q.has(L)?fe(w):Z.has(re)?u--:p.get(L)>p.get(re)?(Z.add(L),fe(w)):(q.add(re),u--):(s(A,i),u--)}for(;u--;){const w=e[u];y.has(w.key)||s(w,i)}for(;_;)fe(b[_-1]);return G(v),b}const It=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...It];function $e(e,t,n){const l=e.$$.props[t];l!==void 0&&(e.$$.bound[l]=n,n(e.$$.ctx[l]))}function Q(e){e&&e.c()}function N(e,t,n,l){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),l||Y(()=>{const i=e.$$.on_mount.map(ze).filter(le);e.$$.on_destroy?e.$$.on_destroy.push(...i):G(i),e.$$.on_mount=[]}),o.forEach(Y)}function H(e,t){const n=e.$$;n.fragment!==null&&(vt(n.after_update),G(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Pt(e,t){e.$$.dirty[0]===-1&&(U.push(e),$t(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function R(e,t,n,l,r,o,i,c=[-1]){const s=ne;te(e);const a=e.$$={fragment:null,ctx:[],props:o,update:E,not_equal:r,bound:ke(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:ke(),dirty:c,skip_bound:!1,root:t.target||s.$$.root};i&&i(a.root);let f=!1;if(a.ctx=n?n(e,t.props||{},(m,u,..._)=>{const g=_.length?_[0]:u;return a.ctx&&r(a.ctx[m],a.ctx[m]=g)&&(!a.skip_bound&&a.bound[m]&&a.bound[m](g),f&&Pt(e,m)),u}):[],a.update(),f=!0,G(a.before_update),a.fragment=l?l(a.ctx):!1,t.target){if(t.hydrate){const m=_t(t.target);a.fragment&&a.fragment.l(m),m.forEach(I)}else a.fragment&&a.fragment.c();t.intro&&B(e.$$.fragment),N(e,t.target,t.anchor,t.customElement),Ve()}te(s)}class T{$destroy(){H(this,1),this.$destroy=E}$on(t,n){if(!le(n))return E;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(t){this.$$set&&!lt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Bt(e){let t;return{c(){t=k("div"),t.innerHTML=`<h1>Game of Life</h1> 
    <img class="titleImage svelte-1m9cvmy" src="src/assets/MMH3_Logo_RoE.jpg"/>`,h(t,"class","header svelte-1m9cvmy")},m(n,l){C(n,t,l)},p:E,i:E,o:E,d(n){n&&I(t)}}}class Ct extends T{constructor(t){super(),R(this,t,null,Bt,j,{})}}function Mt(e){let t,n,l,r,o,i,c,s,a,f,m,u,_,g,d,b,y;return{c(){t=k("div"),n=k("button"),n.textContent="Iterate",l=M(),r=k("button"),r.textContent="play",o=M(),i=k("button"),i.textContent="stop",c=M(),s=k("button"),s.textContent="clear",a=M(),f=k("button"),f.textContent="Pattern",m=M(),u=k("div"),_=k("label"),_.textContent="Cycle Duration",g=M(),d=k("input"),h(_,"for","cycleDuration"),h(d,"id","cycleDuration"),h(d,"type","range"),h(d,"min","1"),h(d,"max","100"),h(u,"class","cycleDurationSelector svelte-1dcd9b"),h(t,"class","controls svelte-1dcd9b")},m(p,v){C(p,t,v),$(t,n),$(t,l),$(t,r),$(t,o),$(t,i),$(t,c),$(t,s),$(t,a),$(t,f),$(t,m),$(t,u),$(u,_),$(u,g),$(u,d),Pe(d,e[0]),b||(y=[P(n,"click",e[2]),P(r,"click",e[3]),P(i,"click",e[4]),P(s,"click",e[1]),P(f,"click",e[5]),P(d,"change",e[7]),P(d,"input",e[7]),P(d,"change",e[3])],b=!0)},p(p,[v]){v&1&&Pe(d,p[0])},i:E,o:E,d(p){p&&I(t),b=!1,G(y)}}}function Ft(e,t,n){Ue();let{game:l}=t,r=50;function o(){l.clearGameState()}function i(){l.runOneIteration()}function c(){l.playIterations(r)}function s(){l.stopIterations()}function a(){l.placePattern()}function f(){r=ft(this.value),n(0,r)}return e.$$set=m=>{"game"in m&&n(6,l=m.game)},[r,o,i,c,s,a,l,f]}class St extends T{constructor(t){super(),R(this,t,Ft,Mt,j,{game:6})}}const K=[];function At(e,t=E){let n;const l=new Set;function r(c){if(j(e,c)&&(e=c,n)){const s=!K.length;for(const a of l)a[1](),K.push(a,e);if(s){for(let a=0;a<K.length;a+=2)K[a][0](K[a+1]);K.length=0}}}function o(c){r(c(e))}function i(c,s=E){const a=[c,s];return l.add(a),l.size===1&&(n=t(r)||E),c(e),()=>{l.delete(a),l.size===0&&n&&(n(),n=null)}}return{set:r,update:o,subscribe:i}}let ee=At([]),D={keepAliveCells:[],toggleCells:[]};function Lt(e,t,n){D.keepAliveCells=[],D.toggleCells=[];let l,r,o=[];for(let i of e){r=parseInt(i.split("_")[0]),l=parseInt(i.split("_")[1]);let c=0;for(let s=-1;s<=1;s++)for(let a=-1;a<=1;a++)if(!(s===0&&a===0)){let f=(r+s+t)%t+"_"+(l+a+n)%n;e.includes(f)?c++:o.push(f)}zt(c,i)}return Gt(o),D}function zt(e,t){(e===2||e===3)&&!D.keepAliveCells.includes(t)?D.keepAliveCells.push(t):D.toggleCells.push(t)}function Gt(e){let t=[...new Set(e)];for(let n of t)e.filter(r=>r===n).length===3&&(D.keepAliveCells.push(n),D.toggleCells.push(n))}let Ot=["+1_-2","+1_-1","+1_+1","+1_+2","+2_-1","+2_+1","+3_0"],Dt=["-2_-1","-2_+1","-1_-2","-1_+2","0_-2","0_+2","+1_-1","+1_0","+1_+1","+2_0"],jt=["-2_-2","-2_0","-2_+2","-1_-2","-1_0","-1_+2","0_-2","0_-1","0_+1","0_+2","+1_-1","+1_0","+1_+1"],qt=["-2_0","-2_+2","-1_+1","-1_+2","0_-2","0_-1","0_+1","0_+2","+1_-2","+1_0","+1_+2"],Nt=["-3_-2","-3_+1","-3_+2","-2_-2","-2_+1","-2_+2","-1_-1","-1_+1","0_-2","0_-1","0_+1","+1_-2","+1_+2"],Ht=["-2_0","-2_+1","-1_0","-1_+1","0_-1","0_+1","0_+2","+1_-2","+1_-1","0_+1","+2_-1"],Rt=["-3_+1","-2_-2","-2_+2","-1_-1","-1_+2","0_-1","0_+1","+1_-2","+1_+2"],Tt=["-2_+1","-2_+2","-1_-2","-1_+1","-1_+2","0_-1","0_+1","0_+2","+1_-1","+1_+2"],Wt=["-1_+1","0_+2","+1_-1","+1_+2","+2_-2","+2_+1","+2_+2","+3_-1","+3_0","+3_+1"],Kt=["-2_-2","-2_+2","-1_-2","-1_+2","-1_0","0_-1","0_+1","+1_0","+2_0"];function Ut(e,t){switch(t){case"Angel":return z(e,Ot);case"Power_Lich":return z(e,Dt);case"Hydra":return z(e,jt);case"Basilisk":return z(e,qt);case"Black_Dragon":return z(e,Nt);case"Centaur":return z(e,Ht);case"Fairy_Dragon":return z(e,Rt);case"Gryffin":return z(e,Tt);case"Medusa":return z(e,Wt);case"Phoenix":return z(e,Kt)}}function z(e,t){let n=[];for(let l of e){n.push(l);for(let r of t){let o=et(l,r);if(!e.includes(o))break;if(n.push(o),t[t.length-1]===r)return n}n=[]}return[]}function et(e,t){let n=parseInt(e.split("_")[0])+parseInt(t.split("_")[0]),l=parseInt(e.split("_")[1])+parseInt(t.split("_")[1]);return n+"_"+l}function Be(e,t,n){const l=e.slice();return l[15]=t[n],l}function Ce(e,t,n){const l=e.slice();return l[18]=t[n],l}function Me(e,t){let n,l,r,o;return{key:e,first:null,c(){n=k("td"),h(n,"id",l=t[15]+"_"+t[18]),h(n,"class","cell dead alive svelte-o3828m"),this.first=n},m(i,c){C(i,n,c),r||(o=P(n,"click",t[3]),r=!0)},p(i,c){t=i,c&6&&l!==(l=t[15]+"_"+t[18])&&h(n,"id",l)},d(i){i&&I(n),r=!1,o()}}}function Fe(e,t){let n,l=[],r=new Map,o,i=t[2];const c=s=>s[18];for(let s=0;s<i.length;s+=1){let a=Ce(t,i,s),f=c(a);r.set(f,l[s]=Me(f,a))}return{key:e,first:null,c(){n=k("tr");for(let s=0;s<l.length;s+=1)l[s].c();o=M(),this.first=n},m(s,a){C(s,n,a);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(n,null);$(n,o)},p(s,a){t=s,a&14&&(i=t[2],l=xe(l,a,c,1,t,i,r,n,Ze,Me,o,Ce))},d(s){s&&I(n);for(let a=0;a<l.length;a+=1)l[a].d()}}}function Vt(e){let t,n,l=[],r=new Map,o=e[1];const i=c=>c[15];for(let c=0;c<o.length;c+=1){let s=Be(e,o,c),a=i(s);r.set(a,l[c]=Fe(a,s))}return{c(){t=k("div"),n=k("table");for(let c=0;c<l.length;c+=1)l[c].c();h(n,"class","gameBoard svelte-o3828m"),h(t,"class","gameSection svelte-o3828m")},m(c,s){C(c,t,s),$(t,n);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(n,null);e[8](n)},p(c,[s]){s&14&&(o=c[1],l=xe(l,s,i,1,c,o,r,n,Ze,Fe,null,Be))},i:E,o:E,d(c){c&&I(t);for(let s=0;s<l.length;s+=1)l[s].d();e[8](null)}}}function Jt(e,t,n){let l;Ge(e,ee,p=>n(11,l=p));let r,o=[],i=[],c=[],s,{simpleElement:a}=t;function f(){n(2,i=Array.from({length:Math.floor(r.offsetWidth/20)},(p,v)=>v)),n(1,o=Array.from({length:Math.floor(r.offsetHeight/20)},(p,v)=>v))}function m(p){let v=p.target.id;if(a.placeElement)for(let q of a.elementPattern){let Z=et(v,q);document.getElementById(Z).classList.toggle("dead"),u(Z)}else document.getElementById(v).classList.toggle("dead"),u(v);n(4,a.placeElement=!1,a)}function u(p){l.includes(p)?_e(ee,l=l.filter(v=>v!==p),l):l.push(p)}function _(){g(),d();for(let p of s)document.getElementById(p).classList.toggle("dead");s=[],c=[]}function g(p){if(p&&(c=p.detail),c.length>0)for(let v of c)document.getElementById(v).classList.toggle("highlight")}function d(){let p=Lt(l,o.length,i.length);_e(ee,l=p.keepAliveCells,l),s=p.toggleCells}function b(){for(let p of l)document.getElementById(p).classList.toggle("dead");_e(ee,l=[],l),s=[];for(let p of c)document.getElementById(p).classList.toggle("highlight");c=[]}onresize=f,ht(()=>f());function y(p){S[p?"unshift":"push"](()=>{r=p,n(0,r)})}return e.$$set=p=>{"simpleElement"in p&&n(4,a=p.simpleElement)},[r,o,i,m,a,_,g,b,y]}class Qt extends T{constructor(t){super(),R(this,t,Jt,Vt,j,{simpleElement:4,oneIteration:5,toggleBadgePattern:6,clearGameBoard:7})}get oneIteration(){return this.$$.ctx[5]}get toggleBadgePattern(){return this.$$.ctx[6]}get clearGameBoard(){return this.$$.ctx[7]}}const Xt=e=>({}),Se=e=>({});function Yt(e){let t,n,l,r,o,i,c,s;const a=e[3].header,f=ve(a,e,e[2],Se),m=e[3].default,u=ve(m,e,e[2],null);return{c(){t=k("dialog"),n=k("div"),f&&f.c(),l=M(),u&&u.c(),r=M(),o=k("button"),o.textContent="close",h(o,"class","svelte-1cy7qe2"),h(n,"class","svelte-1cy7qe2"),h(t,"class","svelte-1cy7qe2")},m(_,g){C(_,t,g),$(t,n),f&&f.m(n,null),$(n,l),u&&u.m(n,null),$(n,r),$(n,o),e[6](t),i=!0,c||(s=[P(o,"click",e[5]),P(n,"click",ct(e[4])),P(t,"close",e[7]),P(t,"click",ut(e[8]))],c=!0)},p(_,[g]){f&&f.p&&(!i||g&4)&&Ee(f,a,_,_[2],i?we(a,_[2],g,Xt):Ie(_[2]),Se),u&&u.p&&(!i||g&4)&&Ee(u,m,_,_[2],i?we(m,_[2],g,null):Ie(_[2]),null)},i(_){i||(B(f,_),B(u,_),i=!0)},o(_){F(f,_),F(u,_),i=!1},d(_){_&&I(t),f&&f.d(_),u&&u.d(_),e[6](null),c=!1,G(s)}}}function Zt(e,t,n){let{$$slots:l={},$$scope:r}=t,{showModal:o}=t,i;function c(u){yt.call(this,e,u)}const s=()=>i.close();function a(u){S[u?"unshift":"push"](()=>{i=u,n(1,i)})}const f=()=>n(0,o=!1),m=()=>i.close();return e.$$set=u=>{"showModal"in u&&n(0,o=u.showModal),"$$scope"in u&&n(2,r=u.$$scope)},e.$$.update=()=>{e.$$.dirty&3&&i&&o&&i.showModal()},[o,i,r,l,c,s,a,f,m]}class xt extends T{constructor(t){super(),R(this,t,Zt,Yt,j,{showModal:0})}}function en(e){const t=e-1;return t*t*t+1}function tt(e,{delay:t=0,duration:n=400,easing:l=en,axis:r="y"}={}){const o=getComputedStyle(e),i=+o.opacity,c=r==="y"?"height":"width",s=parseFloat(o[c]),a=r==="y"?["top","bottom"]:["left","right"],f=a.map(y=>`${y[0].toUpperCase()}${y.slice(1)}`),m=parseFloat(o[`padding${f[0]}`]),u=parseFloat(o[`padding${f[1]}`]),_=parseFloat(o[`margin${f[0]}`]),g=parseFloat(o[`margin${f[1]}`]),d=parseFloat(o[`border${f[0]}Width`]),b=parseFloat(o[`border${f[1]}Width`]);return{delay:t,duration:n,easing:l,css:y=>`overflow: hidden;opacity: ${Math.min(y*20,1)*i};${c}: ${y*s}px;padding-${a[0]}: ${y*m}px;padding-${a[1]}: ${y*u}px;margin-${a[0]}: ${y*_}px;margin-${a[1]}: ${y*g}px;border-${a[0]}-width: ${y*d}px;border-${a[1]}-width: ${y*b}px;`}}function Ae(e,t,n){const l=e.slice();return l[11]=t[n],l[13]=n,l}function tn(e){let t,n,l,r,o,i;function c(){return e[6](e[11])}return{c(){t=k("img"),h(t,"class","badgeImage svelte-cy6zdk"),Re(t,"grid-area",e[13]%5+1+" / "+(e[13]%2+1)),X(t.src,n="src/assets/"+e[11].name+".png")||h(t,"src",n)},m(s,a){C(s,t,a),r=!0,o||(i=P(t,"click",c),o=!0)},p(s,a){e=s,(!r||a&8&&!X(t.src,n="src/assets/"+e[11].name+".png"))&&h(t,"src",n)},i(s){r||(l&&l.end(1),r=!0)},o(s){l=Et(t,tt,{duration:500,easing:ue}),r=!1},d(s){s&&I(t),s&&l&&l.end(),o=!1,i()}}}function nn(e){let t,n,l,r,o,i;return{c(){t=k("img"),h(t,"class","badgeImage svelte-cy6zdk"),Re(t,"grid-area",e[13]%5+1+" / "+(e[13]%2+1)),h(t,"id",n=e[11].name),X(t.src,l="src/assets/"+e[11].name+"_homm3.jpg")||h(t,"src",l)},m(c,s){C(c,t,s),o||(i=P(t,"click",e[4]),o=!0)},p(c,s){e=c,s&8&&n!==(n=e[11].name)&&h(t,"id",n),s&8&&!X(t.src,l="src/assets/"+e[11].name+"_homm3.jpg")&&h(t,"src",l)},i(c){r||Y(()=>{r=wt(t,tt,{duration:500,easing:ue}),r.start()})},o:E,d(c){c&&I(t),o=!1,i()}}}function Le(e){let t,n,l,r;const o=[nn,tn],i=[];function c(s,a){return s[11].isFound?0:1}return t=c(e),n=i[t]=o[t](e),{c(){n.c(),l=at()},m(s,a){i[t].m(s,a),C(s,l,a),r=!0},p(s,a){let f=t;t=c(s),t===f?i[t].p(s,a):(Qe(),F(i[f],1,1,()=>{i[f]=null}),Xe(),n=i[t],n?n.p(s,a):(n=i[t]=o[t](s),n.c()),B(n,1),n.m(l.parentNode,l))},i(s){r||(B(n),r=!0)},o(s){F(n),r=!1},d(s){i[t].d(s),s&&I(l)}}}function ln(e){let t,n;return{c(){t=k("img"),h(t,"class","modalImage svelte-cy6zdk"),X(t.src,n=e[2])||h(t,"src",n)},m(l,r){C(l,t,r)},p(l,r){r&4&&!X(t.src,n=l[2])&&h(t,"src",n)},d(l){l&&I(t)}}}function rn(e){let t,n;return{c(){t=k("h2"),n=ye(e[1]),h(t,"slot","header")},m(l,r){C(l,t,r),$(t,n)},p(l,r){r&2&&dt(n,l[1])},d(l){l&&I(t)}}}function sn(e){let t,n,l,r,o,i,c=e[3],s=[];for(let u=0;u<c.length;u+=1)s[u]=Le(Ae(e,c,u));const a=u=>F(s[u],1,1,()=>{s[u]=null});function f(u){e[7](u)}let m={$$slots:{header:[rn],default:[ln]},$$scope:{ctx:e}};return e[0]!==void 0&&(m.showModal=e[0]),r=new xt({props:m}),S.push(()=>$e(r,"showModal",f)),{c(){t=k("div"),n=k("div");for(let u=0;u<s.length;u+=1)s[u].c();l=M(),Q(r.$$.fragment),h(n,"class","badgesSection svelte-cy6zdk"),h(t,"class","badges svelte-cy6zdk")},m(u,_){C(u,t,_),$(t,n);for(let g=0;g<s.length;g+=1)s[g]&&s[g].m(n,null);C(u,l,_),N(r,u,_),i=!0},p(u,[_]){if(_&24){c=u[3];let d;for(d=0;d<c.length;d+=1){const b=Ae(u,c,d);s[d]?(s[d].p(b,_),B(s[d],1)):(s[d]=Le(b),s[d].c(),B(s[d],1),s[d].m(n,null))}for(Qe(),d=c.length;d<s.length;d+=1)a(d);Xe()}const g={};_&16390&&(g.$$scope={dirty:_,ctx:u}),!o&&_&1&&(o=!0,g.showModal=u[0],be(()=>o=!1)),r.$set(g)},i(u){if(!i){for(let _=0;_<c.length;_+=1)B(s[_]);B(r.$$.fragment,u),i=!0}},o(u){s=s.filter(Boolean);for(let _=0;_<s.length;_+=1)F(s[_]);F(r.$$.fragment,u),i=!1},d(u){u&&I(t),it(s,u),u&&I(l),H(r,u)}}}function on(e,t,n){let l;Ge(e,ee,g=>n(8,l=g));let r=Ue(),o=!1,i,c,s=[{isFound:!1,name:"Angel"},{isFound:!1,name:"Power_Lich"},{isFound:!1,name:"Hydra"},{isFound:!1,name:"Basilisk"},{isFound:!1,name:"Centaur"},{isFound:!1,name:"Fairy_Dragon"},{isFound:!1,name:"Black_Dragon"},{isFound:!1,name:"Gryffin"},{isFound:!1,name:"Medusa"},{isFound:!1,name:"Phoenix"}];function a(){for(let g of s)if(!g.isFound&&(g.isFound=f(g.name),g.isFound))return;n(3,s)}function f(g){let d=Ut(l,g);return d.length>0?(r("pattern",d),r("stopIteration"),!0):!1}function m(g){n(0,o=!0),n(1,i=g.target.id),n(2,c="src/assets/"+i+"_homm3.jpg")}const u=g=>console.log(g.isFound);function _(g){o=g,n(0,o)}return[o,i,c,s,m,a,u,_]}class an extends T{constructor(t){super(),R(this,t,on,sn,j,{checkPatterns:5})}get checkPatterns(){return this.$$.ctx[5]}}function cn(e){let t,n,l,r,o,i;function c(f){e[9](f)}let s={};e[3]!==void 0&&(s.simpleElement=e[3]),n=new Qt({props:s}),e[8](n),S.push(()=>$e(n,"simpleElement",c));let a={};return o=new an({props:a}),e[10](o),o.$on("pattern",function(){le(e[1].toggleBadgePattern)&&e[1].toggleBadgePattern.apply(this,arguments)}),o.$on("stopIteration",e[0]),{c(){t=k("div"),Q(n.$$.fragment),r=M(),Q(o.$$.fragment),h(t,"class","game svelte-1tujjks")},m(f,m){C(f,t,m),N(n,t,null),$(t,r),N(o,t,null),i=!0},p(f,[m]){e=f;const u={};!l&&m&8&&(l=!0,u.simpleElement=e[3],be(()=>l=!1)),n.$set(u);const _={};o.$set(_)},i(f){i||(B(n.$$.fragment,f),B(o.$$.fragment,f),i=!0)},o(f){F(n.$$.fragment,f),F(o.$$.fragment,f),i=!1},d(f){f&&I(t),e[8](null),H(n),e[10](null),H(o)}}}function un(e,t,n){let l,r,o={placeElement:!1,elementPattern:["-2_0","-1_-1","-1_+1","0_-1","0_+1","+1_-1","+1_+1","+2_0"]},i;function c(){l.oneIteration(),r.checkPatterns()}function s(){l.clearGameBoard()}function a(d){f(),i=setInterval(c,d*10)}function f(){console.log("before "+i),clearInterval(i),console.log("after "+i)}function m(){n(3,o.placeElement=!0,o),console.log(o)}function u(d){S[d?"unshift":"push"](()=>{l=d,n(1,l)})}function _(d){o=d,n(3,o)}function g(d){S[d?"unshift":"push"](()=>{r=d,n(2,r)})}return[f,l,r,o,c,s,a,m,u,_,g]}class fn extends T{constructor(t){super(),R(this,t,un,cn,j,{runOneIteration:4,clearGameState:5,playIterations:6,stopIterations:0,placePattern:7})}get runOneIteration(){return this.$$.ctx[4]}get clearGameState(){return this.$$.ctx[5]}get playIterations(){return this.$$.ctx[6]}get stopIterations(){return this.$$.ctx[0]}get placePattern(){return this.$$.ctx[7]}}function _n(e){let t,n,l,r,o,i,c,s,a,f,m;l=new Ct({});let u={};i=new fn({props:u}),e[2](i);function _(d){e[4](d)}let g={};return e[0]!==void 0&&(g.game=e[0]),a=new St({props:g}),e[3](a),S.push(()=>$e(a,"game",_)),{c(){t=k("main"),n=k("div"),Q(l.$$.fragment),r=M(),o=k("div"),Q(i.$$.fragment),c=M(),s=k("div"),Q(a.$$.fragment),h(n,"class","header svelte-hyz9r4"),h(o,"class","gameSection svelte-hyz9r4"),h(s,"class","footer svelte-hyz9r4")},m(d,b){C(d,t,b),$(t,n),N(l,n,null),$(t,r),$(t,o),N(i,o,null),$(t,c),$(t,s),N(a,s,null),m=!0},p(d,[b]){const y={};i.$set(y);const p={};!f&&b&1&&(f=!0,p.game=d[0],be(()=>f=!1)),a.$set(p)},i(d){m||(B(l.$$.fragment,d),B(i.$$.fragment,d),B(a.$$.fragment,d),m=!0)},o(d){F(l.$$.fragment,d),F(i.$$.fragment,d),F(a.$$.fragment,d),m=!1},d(d){d&&I(t),H(l),e[2](null),H(i),e[3](null),H(a)}}}function dn(e,t,n){let l,r;function o(s){S[s?"unshift":"push"](()=>{l=s,n(0,l)})}function i(s){S[s?"unshift":"push"](()=>{r=s,n(1,r)})}function c(s){l=s,n(0,l)}return[l,r,o,i,c]}class gn extends T{constructor(t){super(),R(this,t,dn,_n,j,{})}}new gn({target:document.getElementById("app")});
