(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function oo(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function lo(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ie(s)?qh(s):lo(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Ie(t))return t;if(pe(t))return t}}const zh=/;(?![^(]*\))/g,Kh=/:([^]+)/,Gh=/\/\*.*?\*\//gs;function qh(t){const e={};return t.replace(Gh,"").split(zh).forEach(n=>{if(n){const s=n.split(Kh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ke(t){let e="";if(Ie(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=ke(t[n]);s&&(e+=s+" ")}else if(pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Yh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qh=oo(Yh);function Xa(t){return!!t||t===""}const be=t=>Ie(t)?t:t==null?"":H(t)||pe(t)&&(t.toString===tc||!W(t.toString))?JSON.stringify(t,Ja,2):String(t),Ja=(t,e)=>e&&e.__v_isRef?Ja(t,e.value):Rn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Za(e)?{[`Set(${e.size})`]:[...e.values()]}:pe(e)&&!H(e)&&!nc(e)?String(e):e,de={},xn=[],ut=()=>{},Xh=()=>!1,Jh=/^on[^a-z]/,Ni=t=>Jh.test(t),ao=t=>t.startsWith("onUpdate:"),Be=Object.assign,co=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Zh=Object.prototype.hasOwnProperty,X=(t,e)=>Zh.call(t,e),H=Array.isArray,Rn=t=>ki(t)==="[object Map]",Za=t=>ki(t)==="[object Set]",W=t=>typeof t=="function",Ie=t=>typeof t=="string",uo=t=>typeof t=="symbol",pe=t=>t!==null&&typeof t=="object",ec=t=>pe(t)&&W(t.then)&&W(t.catch),tc=Object.prototype.toString,ki=t=>tc.call(t),ed=t=>ki(t).slice(8,-1),nc=t=>ki(t)==="[object Object]",ho=t=>Ie(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Js=oo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ai=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},td=/-(\w)/g,Mn=Ai(t=>t.replace(td,(e,n)=>n?n.toUpperCase():"")),nd=/\B([A-Z])/g,mn=Ai(t=>t.replace(nd,"-$1").toLowerCase()),sc=Ai(t=>t.charAt(0).toUpperCase()+t.slice(1)),nr=Ai(t=>t?`on${sc(t)}`:""),ys=(t,e)=>!Object.is(t,e),Zs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ri=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},oi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ml;const sd=()=>ml||(ml=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Qe;class ic{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Qe,!e&&Qe&&(this.index=(Qe.scopes||(Qe.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Qe;try{return Qe=this,e()}finally{Qe=n}}}on(){Qe=this}off(){Qe=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function rc(t){return new ic(t)}function id(t,e=Qe){e&&e.active&&e.effects.push(t)}function rd(){return Qe}function od(t){Qe&&Qe.cleanups.push(t)}const fo=t=>{const e=new Set(t);return e.w=0,e.n=0,e},oc=t=>(t.w&jt)>0,lc=t=>(t.n&jt)>0,ld=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=jt},ad=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];oc(i)&&!lc(i)?i.delete(t):e[n++]=i,i.w&=~jt,i.n&=~jt}e.length=n}},Er=new WeakMap;let us=0,jt=1;const wr=30;let rt;const cn=Symbol(""),Ir=Symbol("");class po{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,id(this,s)}run(){if(!this.active)return this.fn();let e=rt,n=Ft;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=rt,rt=this,Ft=!0,jt=1<<++us,us<=wr?ld(this):gl(this),this.fn()}finally{us<=wr&&ad(this),jt=1<<--us,rt=this.parent,Ft=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){rt===this?this.deferStop=!0:this.active&&(gl(this),this.onStop&&this.onStop(),this.active=!1)}}function gl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ft=!0;const ac=[];function Gn(){ac.push(Ft),Ft=!1}function qn(){const t=ac.pop();Ft=t===void 0?!0:t}function Je(t,e,n){if(Ft&&rt){let s=Er.get(t);s||Er.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=fo()),cc(i)}}function cc(t,e){let n=!1;us<=wr?lc(t)||(t.n|=jt,n=!oc(t)):n=!t.has(rt),n&&(t.add(rt),rt.deps.push(t))}function xt(t,e,n,s,i,r){const o=Er.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&H(t)){const a=oi(s);o.forEach((c,u)=>{(u==="length"||u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":H(t)?ho(n)&&l.push(o.get("length")):(l.push(o.get(cn)),Rn(t)&&l.push(o.get(Ir)));break;case"delete":H(t)||(l.push(o.get(cn)),Rn(t)&&l.push(o.get(Ir)));break;case"set":Rn(t)&&l.push(o.get(cn));break}if(l.length===1)l[0]&&Sr(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Sr(fo(a))}}function Sr(t,e){const n=H(t)?t:[...t];for(const s of n)s.computed&&vl(s);for(const s of n)s.computed||vl(s)}function vl(t,e){(t!==rt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const cd=oo("__proto__,__v_isRef,__isVue"),uc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(uo)),ud=_o(),hd=_o(!1,!0),dd=_o(!0),yl=fd();function fd(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ee(this);for(let r=0,o=this.length;r<o;r++)Je(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ee)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Gn();const s=ee(this)[e].apply(this,n);return qn(),s}}),t}function _o(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Pd:_c:e?pc:fc).get(s))return s;const o=H(s);if(!t&&o&&X(yl,i))return Reflect.get(yl,i,r);const l=Reflect.get(s,i,r);return(uo(i)?uc.has(i):cd(i))||(t||Je(s,"get",i),e)?l:ge(l)?o&&ho(i)?l:l.value:pe(l)?t?mc(l):Yn(l):l}}const pd=hc(),_d=hc(!0);function hc(t=!1){return function(n,s,i,r){let o=n[s];if(Ln(o)&&ge(o)&&!ge(i))return!1;if(!t&&(!li(i)&&!Ln(i)&&(o=ee(o),i=ee(i)),!H(n)&&ge(o)&&!ge(i)))return o.value=i,!0;const l=H(n)&&ho(s)?Number(s)<n.length:X(n,s),a=Reflect.set(n,s,i,r);return n===ee(r)&&(l?ys(i,o)&&xt(n,"set",s,i):xt(n,"add",s,i)),a}}function md(t,e){const n=X(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&xt(t,"delete",e,void 0),s}function gd(t,e){const n=Reflect.has(t,e);return(!uo(e)||!uc.has(e))&&Je(t,"has",e),n}function vd(t){return Je(t,"iterate",H(t)?"length":cn),Reflect.ownKeys(t)}const dc={get:ud,set:pd,deleteProperty:md,has:gd,ownKeys:vd},yd={get:dd,set(t,e){return!0},deleteProperty(t,e){return!0}},bd=Be({},dc,{get:hd,set:_d}),mo=t=>t,Oi=t=>Reflect.getPrototypeOf(t);function js(t,e,n=!1,s=!1){t=t.__v_raw;const i=ee(t),r=ee(e);n||(e!==r&&Je(i,"get",e),Je(i,"get",r));const{has:o}=Oi(i),l=s?mo:n?yo:bs;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function zs(t,e=!1){const n=this.__v_raw,s=ee(n),i=ee(t);return e||(t!==i&&Je(s,"has",t),Je(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ks(t,e=!1){return t=t.__v_raw,!e&&Je(ee(t),"iterate",cn),Reflect.get(t,"size",t)}function bl(t){t=ee(t);const e=ee(this);return Oi(e).has.call(e,t)||(e.add(t),xt(e,"add",t,t)),this}function Cl(t,e){e=ee(e);const n=ee(this),{has:s,get:i}=Oi(n);let r=s.call(n,t);r||(t=ee(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?ys(e,o)&&xt(n,"set",t,e):xt(n,"add",t,e),this}function El(t){const e=ee(this),{has:n,get:s}=Oi(e);let i=n.call(e,t);i||(t=ee(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&xt(e,"delete",t,void 0),r}function wl(){const t=ee(this),e=t.size!==0,n=t.clear();return e&&xt(t,"clear",void 0,void 0),n}function Gs(t,e){return function(s,i){const r=this,o=r.__v_raw,l=ee(o),a=e?mo:t?yo:bs;return!t&&Je(l,"iterate",cn),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function qs(t,e,n){return function(...s){const i=this.__v_raw,r=ee(i),o=Rn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?mo:e?yo:bs;return!e&&Je(r,"iterate",a?Ir:cn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function At(t){return function(...e){return t==="delete"?!1:this}}function Cd(){const t={get(r){return js(this,r)},get size(){return Ks(this)},has:zs,add:bl,set:Cl,delete:El,clear:wl,forEach:Gs(!1,!1)},e={get(r){return js(this,r,!1,!0)},get size(){return Ks(this)},has:zs,add:bl,set:Cl,delete:El,clear:wl,forEach:Gs(!1,!0)},n={get(r){return js(this,r,!0)},get size(){return Ks(this,!0)},has(r){return zs.call(this,r,!0)},add:At("add"),set:At("set"),delete:At("delete"),clear:At("clear"),forEach:Gs(!0,!1)},s={get(r){return js(this,r,!0,!0)},get size(){return Ks(this,!0)},has(r){return zs.call(this,r,!0)},add:At("add"),set:At("set"),delete:At("delete"),clear:At("clear"),forEach:Gs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=qs(r,!1,!1),n[r]=qs(r,!0,!1),e[r]=qs(r,!1,!0),s[r]=qs(r,!0,!0)}),[t,n,e,s]}const[Ed,wd,Id,Sd]=Cd();function go(t,e){const n=e?t?Sd:Id:t?wd:Ed;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(X(n,i)&&i in s?n:s,i,r)}const Td={get:go(!1,!1)},xd={get:go(!1,!0)},Rd={get:go(!0,!1)},fc=new WeakMap,pc=new WeakMap,_c=new WeakMap,Pd=new WeakMap;function Nd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kd(t){return t.__v_skip||!Object.isExtensible(t)?0:Nd(ed(t))}function Yn(t){return Ln(t)?t:vo(t,!1,dc,Td,fc)}function Ad(t){return vo(t,!1,bd,xd,pc)}function mc(t){return vo(t,!0,yd,Rd,_c)}function vo(t,e,n,s,i){if(!pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=kd(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function $t(t){return Ln(t)?$t(t.__v_raw):!!(t&&t.__v_isReactive)}function Ln(t){return!!(t&&t.__v_isReadonly)}function li(t){return!!(t&&t.__v_isShallow)}function gc(t){return $t(t)||Ln(t)}function ee(t){const e=t&&t.__v_raw;return e?ee(e):t}function Fn(t){return ri(t,"__v_skip",!0),t}const bs=t=>pe(t)?Yn(t):t,yo=t=>pe(t)?mc(t):t;function vc(t){Ft&&rt&&(t=ee(t),cc(t.dep||(t.dep=fo())))}function yc(t,e){t=ee(t),t.dep&&Sr(t.dep)}function ge(t){return!!(t&&t.__v_isRef===!0)}function Ne(t){return bc(t,!1)}function Od(t){return bc(t,!0)}function bc(t,e){return ge(t)?t:new Dd(t,e)}class Dd{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ee(e),this._value=n?e:bs(e)}get value(){return vc(this),this._value}set value(e){const n=this.__v_isShallow||li(e)||Ln(e);e=n?e:ee(e),ys(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:bs(e),yc(this))}}function te(t){return ge(t)?t.value:t}const Md={get:(t,e,n)=>te(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return ge(i)&&!ge(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Cc(t){return $t(t)?t:new Proxy(t,Md)}function Ld(t){const e=H(t)?new Array(t.length):{};for(const n in t)e[n]=$d(t,n);return e}class Fd{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function $d(t,e,n){const s=t[e];return ge(s)?s:new Fd(t,e,n)}var Ec;class Bd{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ec]=!1,this._dirty=!0,this.effect=new po(e,()=>{this._dirty||(this._dirty=!0,yc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ee(this);return vc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Ec="__v_isReadonly";function Ud(t,e,n=!1){let s,i;const r=W(t);return r?(s=t,i=ut):(s=t.get,i=t.set),new Bd(s,i,r||!i,n)}function Bt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Di(r,e,n)}return i}function ht(t,e,n,s){if(W(t)){const r=Bt(t,e,n,s);return r&&ec(r)&&r.catch(o=>{Di(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(ht(t[r],e,n,s));return i}function Di(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){Bt(a,null,10,[t,o,l]);return}}Hd(t,n,i,s)}function Hd(t,e,n,s=!0){console.error(t)}let Cs=!1,Tr=!1;const Me=[];let yt=0;const Pn=[];let wt=null,sn=0;const wc=Promise.resolve();let bo=null;function Co(t){const e=bo||wc;return t?e.then(this?t.bind(this):t):e}function Wd(t){let e=yt+1,n=Me.length;for(;e<n;){const s=e+n>>>1;Es(Me[s])<t?e=s+1:n=s}return e}function Eo(t){(!Me.length||!Me.includes(t,Cs&&t.allowRecurse?yt+1:yt))&&(t.id==null?Me.push(t):Me.splice(Wd(t.id),0,t),Ic())}function Ic(){!Cs&&!Tr&&(Tr=!0,bo=wc.then(Tc))}function Vd(t){const e=Me.indexOf(t);e>yt&&Me.splice(e,1)}function jd(t){H(t)?Pn.push(...t):(!wt||!wt.includes(t,t.allowRecurse?sn+1:sn))&&Pn.push(t),Ic()}function Il(t,e=Cs?yt+1:0){for(;e<Me.length;e++){const n=Me[e];n&&n.pre&&(Me.splice(e,1),e--,n())}}function Sc(t){if(Pn.length){const e=[...new Set(Pn)];if(Pn.length=0,wt){wt.push(...e);return}for(wt=e,wt.sort((n,s)=>Es(n)-Es(s)),sn=0;sn<wt.length;sn++)wt[sn]();wt=null,sn=0}}const Es=t=>t.id==null?1/0:t.id,zd=(t,e)=>{const n=Es(t)-Es(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Tc(t){Tr=!1,Cs=!0,Me.sort(zd);const e=ut;try{for(yt=0;yt<Me.length;yt++){const n=Me[yt];n&&n.active!==!1&&Bt(n,null,14)}}finally{yt=0,Me.length=0,Sc(),Cs=!1,bo=null,(Me.length||Pn.length)&&Tc()}}function Kd(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||de;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||de;d&&(i=n.map(_=>Ie(_)?_.trim():_)),h&&(i=n.map(oi))}let l,a=s[l=nr(e)]||s[l=nr(Mn(e))];!a&&r&&(a=s[l=nr(mn(e))]),a&&ht(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,ht(c,t,6,i)}}function xc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!W(t)){const a=c=>{const u=xc(c,e,!0);u&&(l=!0,Be(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(pe(t)&&s.set(t,null),null):(H(r)?r.forEach(a=>o[a]=null):Be(o,r),pe(t)&&s.set(t,o),o)}function Mi(t,e){return!t||!Ni(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,mn(e))||X(t,e))}let tt=null,Li=null;function ai(t){const e=tt;return tt=t,Li=t&&t.type.__scopeId||null,e}function wo(t){Li=t}function Io(){Li=null}function Jt(t,e=tt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Al(-1);const r=ai(e);let o;try{o=t(...i)}finally{ai(r),s._d&&Al(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function sr(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:d,setupState:_,ctx:m,inheritAttrs:y}=t;let N,A;const B=ai(t);try{if(n.shapeFlag&4){const q=i||s;N=vt(u.call(q,q,h,r,_,d,m)),A=a}else{const q=e;N=vt(q.length>1?q(r,{attrs:a,slots:l,emit:c}):q(r,null)),A=e.props?a:Gd(a)}}catch(q){ds.length=0,Di(q,t,1),N=ie(ws)}let D=N;if(A&&y!==!1){const q=Object.keys(A),{shapeFlag:re}=D;q.length&&re&7&&(o&&q.some(ao)&&(A=qd(A,o)),D=$n(D,A))}return n.dirs&&(D=$n(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),N=D,ai(B),N}const Gd=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ni(n))&&((e||(e={}))[n]=t[n]);return e},qd=(t,e)=>{const n={};for(const s in t)(!ao(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Yd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Sl(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Mi(c,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Sl(s,o,c):!0:!!o;return!1}function Sl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Mi(n,r))return!0}return!1}function Qd({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Xd=t=>t.__isSuspense;function Jd(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):jd(t)}function ei(t,e){if(Ae){let n=Ae.provides;const s=Ae.parent&&Ae.parent.provides;s===n&&(n=Ae.provides=Object.create(s)),n[t]=e}}function dt(t,e,n=!1){const s=Ae||tt;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&W(e)?e.call(s.proxy):e}}const Ys={};function Nn(t,e,n){return Rc(t,e,n)}function Rc(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=de){const l=Ae;let a,c=!1,u=!1;if(ge(t)?(a=()=>t.value,c=li(t)):$t(t)?(a=()=>t,s=!0):H(t)?(u=!0,c=t.some(D=>$t(D)||li(D)),a=()=>t.map(D=>{if(ge(D))return D.value;if($t(D))return on(D);if(W(D))return Bt(D,l,2)})):W(t)?e?a=()=>Bt(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return h&&h(),ht(t,l,3,[d])}:a=ut,e&&s){const D=a;a=()=>on(D())}let h,d=D=>{h=A.onStop=()=>{Bt(D,l,4)}},_;if(Ss)if(d=ut,e?n&&ht(e,l,3,[a(),u?[]:void 0,d]):a(),i==="sync"){const D=qf();_=D.__watcherHandles||(D.__watcherHandles=[])}else return ut;let m=u?new Array(t.length).fill(Ys):Ys;const y=()=>{if(!!A.active)if(e){const D=A.run();(s||c||(u?D.some((q,re)=>ys(q,m[re])):ys(D,m)))&&(h&&h(),ht(e,l,3,[D,m===Ys?void 0:u&&m[0]===Ys?[]:m,d]),m=D)}else A.run()};y.allowRecurse=!!e;let N;i==="sync"?N=y:i==="post"?N=()=>We(y,l&&l.suspense):(y.pre=!0,l&&(y.id=l.uid),N=()=>Eo(y));const A=new po(a,N);e?n?y():m=A.run():i==="post"?We(A.run.bind(A),l&&l.suspense):A.run();const B=()=>{A.stop(),l&&l.scope&&co(l.scope.effects,A)};return _&&_.push(B),B}function Zd(t,e,n){const s=this.proxy,i=Ie(t)?t.includes(".")?Pc(s,t):()=>s[t]:t.bind(s,s);let r;W(e)?r=e:(r=e.handler,n=e);const o=Ae;Bn(this);const l=Rc(i,r.bind(s),n);return o?Bn(o):un(),l}function Pc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function on(t,e){if(!pe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ge(t))on(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)on(t[n],e);else if(Za(t)||Rn(t))t.forEach(n=>{on(n,e)});else if(nc(t))for(const n in t)on(t[n],e);return t}function Nc(t){return W(t)?{setup:t,name:t.name}:t}const ti=t=>!!t.type.__asyncLoader,kc=t=>t.type.__isKeepAlive;function ef(t,e){Ac(t,"a",e)}function tf(t,e){Ac(t,"da",e)}function Ac(t,e,n=Ae){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Fi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)kc(i.parent.vnode)&&nf(s,e,n,i),i=i.parent}}function nf(t,e,n,s){const i=Fi(e,t,s,!0);Oc(()=>{co(s[e],i)},n)}function Fi(t,e,n=Ae,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Gn(),Bn(n);const l=ht(e,n,t,o);return un(),qn(),l});return s?i.unshift(r):i.push(r),r}}const Pt=t=>(e,n=Ae)=>(!Ss||t==="sp")&&Fi(t,(...s)=>e(...s),n),sf=Pt("bm"),rf=Pt("m"),of=Pt("bu"),lf=Pt("u"),af=Pt("bum"),Oc=Pt("um"),cf=Pt("sp"),uf=Pt("rtg"),hf=Pt("rtc");function df(t,e=Ae){Fi("ec",t,e)}function xr(t,e){const n=tt;if(n===null)return t;const s=Ui(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,a,c=de]=e[r];o&&(W(o)&&(o={mounted:o,updated:o}),o.deep&&on(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c}))}return t}function Qt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Gn(),ht(a,n,8,[t.el,l,t,e]),qn())}}const ff=Symbol();function pf(t,e,n,s){let i;const r=n&&n[s];if(H(t)||Ie(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(pe(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const Rr=t=>t?Vc(t)?Ui(t)||t.proxy:Rr(t.parent):null,hs=Be(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Rr(t.parent),$root:t=>Rr(t.root),$emit:t=>t.emit,$options:t=>So(t),$forceUpdate:t=>t.f||(t.f=()=>Eo(t.update)),$nextTick:t=>t.n||(t.n=Co.bind(t.proxy)),$watch:t=>Zd.bind(t)}),ir=(t,e)=>t!==de&&!t.__isScriptSetup&&X(t,e),_f={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(ir(s,e))return o[e]=1,s[e];if(i!==de&&X(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&X(c,e))return o[e]=3,r[e];if(n!==de&&X(n,e))return o[e]=4,n[e];Pr&&(o[e]=0)}}const u=hs[e];let h,d;if(u)return e==="$attrs"&&Je(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==de&&X(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,X(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return ir(i,e)?(i[e]=n,!0):s!==de&&X(s,e)?(s[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==de&&X(t,o)||ir(e,o)||(l=r[0])&&X(l,o)||X(s,o)||X(hs,o)||X(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Pr=!0;function mf(t){const e=So(t),n=t.proxy,s=t.ctx;Pr=!1,e.beforeCreate&&Tl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:m,activated:y,deactivated:N,beforeDestroy:A,beforeUnmount:B,destroyed:D,unmounted:q,render:re,renderTracked:Ce,renderTriggered:J,errorCaptured:Y,serverPrefetch:Le,expose:Oe,inheritAttrs:Ue,components:Ze,directives:kt,filters:qe}=e;if(c&&gf(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const le in o){const ne=o[le];W(ne)&&(s[le]=ne.bind(n))}if(i){const le=i.call(n,n);pe(le)&&(t.data=Yn(le))}if(Pr=!0,r)for(const le in r){const ne=r[le],nt=W(ne)?ne.bind(n,n):W(ne.get)?ne.get.bind(n,n):ut,Yt=!W(ne)&&W(ne.set)?ne.set.bind(n):ut,st=Xe({get:nt,set:Yt});Object.defineProperty(s,le,{enumerable:!0,configurable:!0,get:()=>st.value,set:He=>st.value=He})}if(l)for(const le in l)Dc(l[le],s,n,le);if(a){const le=W(a)?a.call(n):a;Reflect.ownKeys(le).forEach(ne=>{ei(ne,le[ne])})}u&&Tl(u,t,"c");function ve(le,ne){H(ne)?ne.forEach(nt=>le(nt.bind(n))):ne&&le(ne.bind(n))}if(ve(sf,h),ve(rf,d),ve(of,_),ve(lf,m),ve(ef,y),ve(tf,N),ve(df,Y),ve(hf,Ce),ve(uf,J),ve(af,B),ve(Oc,q),ve(cf,Le),H(Oe))if(Oe.length){const le=t.exposed||(t.exposed={});Oe.forEach(ne=>{Object.defineProperty(le,ne,{get:()=>n[ne],set:nt=>n[ne]=nt})})}else t.exposed||(t.exposed={});re&&t.render===ut&&(t.render=re),Ue!=null&&(t.inheritAttrs=Ue),Ze&&(t.components=Ze),kt&&(t.directives=kt)}function gf(t,e,n=ut,s=!1){H(t)&&(t=Nr(t));for(const i in t){const r=t[i];let o;pe(r)?"default"in r?o=dt(r.from||i,r.default,!0):o=dt(r.from||i):o=dt(r),ge(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Tl(t,e,n){ht(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Dc(t,e,n,s){const i=s.includes(".")?Pc(n,s):()=>n[s];if(Ie(t)){const r=e[t];W(r)&&Nn(i,r)}else if(W(t))Nn(i,t.bind(n));else if(pe(t))if(H(t))t.forEach(r=>Dc(r,e,n,s));else{const r=W(t.handler)?t.handler.bind(n):e[t.handler];W(r)&&Nn(i,r,t)}}function So(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>ci(a,c,o,!0)),ci(a,e,o)),pe(e)&&r.set(e,a),a}function ci(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ci(t,r,n,!0),i&&i.forEach(o=>ci(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=vf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const vf={data:xl,props:Zt,emits:Zt,methods:Zt,computed:Zt,beforeCreate:Fe,created:Fe,beforeMount:Fe,mounted:Fe,beforeUpdate:Fe,updated:Fe,beforeDestroy:Fe,beforeUnmount:Fe,destroyed:Fe,unmounted:Fe,activated:Fe,deactivated:Fe,errorCaptured:Fe,serverPrefetch:Fe,components:Zt,directives:Zt,watch:bf,provide:xl,inject:yf};function xl(t,e){return e?t?function(){return Be(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function yf(t,e){return Zt(Nr(t),Nr(e))}function Nr(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Fe(t,e){return t?[...new Set([].concat(t,e))]:e}function Zt(t,e){return t?Be(Be(Object.create(null),t),e):e}function bf(t,e){if(!t)return e;if(!e)return t;const n=Be(Object.create(null),t);for(const s in e)n[s]=Fe(t[s],e[s]);return n}function Cf(t,e,n,s=!1){const i={},r={};ri(r,Bi,1),t.propsDefaults=Object.create(null),Mc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Ad(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Ef(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=ee(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Mi(t.emitsOptions,d))continue;const _=e[d];if(a)if(X(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const m=Mn(d);i[m]=kr(a,l,m,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{Mc(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!X(e,h)&&((u=mn(h))===h||!X(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=kr(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!X(e,h)&&!0)&&(delete r[h],c=!0)}c&&xt(t,"set","$attrs")}function Mc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Js(a))continue;const c=e[a];let u;i&&X(i,u=Mn(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:Mi(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=ee(n),c=l||de;for(let u=0;u<r.length;u++){const h=r[u];n[h]=kr(i,a,h,c[h],t,!X(c,h))}}return o}function kr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=X(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&W(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(Bn(i),s=c[n]=a.call(null,e),un())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===mn(n))&&(s=!0))}return s}function Lc(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!W(t)){const u=h=>{a=!0;const[d,_]=Lc(h,e,!0);Be(o,d),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return pe(t)&&s.set(t,xn),xn;if(H(r))for(let u=0;u<r.length;u++){const h=Mn(r[u]);Rl(h)&&(o[h]=de)}else if(r)for(const u in r){const h=Mn(u);if(Rl(h)){const d=r[u],_=o[h]=H(d)||W(d)?{type:d}:Object.assign({},d);if(_){const m=kl(Boolean,_.type),y=kl(String,_.type);_[0]=m>-1,_[1]=y<0||m<y,(m>-1||X(_,"default"))&&l.push(h)}}}const c=[o,l];return pe(t)&&s.set(t,c),c}function Rl(t){return t[0]!=="$"}function Pl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Nl(t,e){return Pl(t)===Pl(e)}function kl(t,e){return H(e)?e.findIndex(n=>Nl(n,t)):W(e)&&Nl(e,t)?0:-1}const Fc=t=>t[0]==="_"||t==="$stable",To=t=>H(t)?t.map(vt):[vt(t)],wf=(t,e,n)=>{if(e._n)return e;const s=Jt((...i)=>To(e(...i)),n);return s._c=!1,s},$c=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Fc(i))continue;const r=t[i];if(W(r))e[i]=wf(i,r,s);else if(r!=null){const o=To(r);e[i]=()=>o}}},Bc=(t,e)=>{const n=To(e);t.slots.default=()=>n},If=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ee(e),ri(e,"_",n)):$c(e,t.slots={})}else t.slots={},e&&Bc(t,e);ri(t.slots,Bi,1)},Sf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=de;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(Be(i,e),!n&&l===1&&delete i._):(r=!e.$stable,$c(e,i)),o=e}else e&&(Bc(t,e),o={default:1});if(r)for(const l in i)!Fc(l)&&!(l in o)&&delete i[l]};function Uc(){return{app:null,config:{isNativeTag:Xh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tf=0;function xf(t,e){return function(s,i=null){W(s)||(s=Object.assign({},s)),i!=null&&!pe(i)&&(i=null);const r=Uc(),o=new Set;let l=!1;const a=r.app={_uid:Tf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Yf,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&W(c.install)?(o.add(c),c.install(a,...u)):W(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const d=ie(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),l=!0,a._container=c,c.__vue_app__=a,Ui(d.component)||d.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a}};return a}}function Ar(t,e,n,s,i=!1){if(H(t)){t.forEach((d,_)=>Ar(d,e&&(H(e)?e[_]:e),n,s,i));return}if(ti(s)&&!i)return;const r=s.shapeFlag&4?Ui(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===de?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(Ie(c)?(u[c]=null,X(h,c)&&(h[c]=null)):ge(c)&&(c.value=null)),W(a))Bt(a,l,12,[o,u]);else{const d=Ie(a),_=ge(a);if(d||_){const m=()=>{if(t.f){const y=d?X(h,a)?h[a]:u[a]:a.value;i?H(y)&&co(y,r):H(y)?y.includes(r)||y.push(r):d?(u[a]=[r],X(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else d?(u[a]=o,X(h,a)&&(h[a]=o)):_&&(a.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,We(m,n)):m()}}}const We=Jd;function Rf(t){return Pf(t)}function Pf(t,e){const n=sd();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=ut,insertStaticContent:m}=t,y=(f,p,g,v=null,C=null,T=null,P=!1,S=null,x=!!p.dynamicChildren)=>{if(f===p)return;f&&!ss(f,p)&&(v=R(f),He(f,C,T,!0),f=null),p.patchFlag===-2&&(x=!1,p.dynamicChildren=null);const{type:w,ref:L,shapeFlag:O}=p;switch(w){case $i:N(f,p,g,v);break;case ws:A(f,p,g,v);break;case ni:f==null&&B(p,g,v,P);break;case et:Ze(f,p,g,v,C,T,P,S,x);break;default:O&1?re(f,p,g,v,C,T,P,S,x):O&6?kt(f,p,g,v,C,T,P,S,x):(O&64||O&128)&&w.process(f,p,g,v,C,T,P,S,x,Q)}L!=null&&C&&Ar(L,f&&f.ref,T,p||f,!p)},N=(f,p,g,v)=>{if(f==null)s(p.el=l(p.children),g,v);else{const C=p.el=f.el;p.children!==f.children&&c(C,p.children)}},A=(f,p,g,v)=>{f==null?s(p.el=a(p.children||""),g,v):p.el=f.el},B=(f,p,g,v)=>{[f.el,f.anchor]=m(f.children,p,g,v,f.el,f.anchor)},D=({el:f,anchor:p},g,v)=>{let C;for(;f&&f!==p;)C=d(f),s(f,g,v),f=C;s(p,g,v)},q=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},re=(f,p,g,v,C,T,P,S,x)=>{P=P||p.type==="svg",f==null?Ce(p,g,v,C,T,P,S,x):Le(f,p,C,T,P,S,x)},Ce=(f,p,g,v,C,T,P,S)=>{let x,w;const{type:L,props:O,shapeFlag:F,transition:U,dirs:G}=f;if(x=f.el=o(f.type,T,O&&O.is,O),F&8?u(x,f.children):F&16&&Y(f.children,x,null,v,C,T&&L!=="foreignObject",P,S),G&&Qt(f,null,v,"created"),O){for(const se in O)se!=="value"&&!Js(se)&&r(x,se,null,O[se],T,f.children,v,C,k);"value"in O&&r(x,"value",null,O.value),(w=O.onVnodeBeforeMount)&&mt(w,v,f)}J(x,f,f.scopeId,P,v),G&&Qt(f,null,v,"beforeMount");const ae=(!C||C&&!C.pendingBranch)&&U&&!U.persisted;ae&&U.beforeEnter(x),s(x,p,g),((w=O&&O.onVnodeMounted)||ae||G)&&We(()=>{w&&mt(w,v,f),ae&&U.enter(x),G&&Qt(f,null,v,"mounted")},C)},J=(f,p,g,v,C)=>{if(g&&_(f,g),v)for(let T=0;T<v.length;T++)_(f,v[T]);if(C){let T=C.subTree;if(p===T){const P=C.vnode;J(f,P,P.scopeId,P.slotScopeIds,C.parent)}}},Y=(f,p,g,v,C,T,P,S,x=0)=>{for(let w=x;w<f.length;w++){const L=f[w]=S?Dt(f[w]):vt(f[w]);y(null,L,p,g,v,C,T,P,S)}},Le=(f,p,g,v,C,T,P)=>{const S=p.el=f.el;let{patchFlag:x,dynamicChildren:w,dirs:L}=p;x|=f.patchFlag&16;const O=f.props||de,F=p.props||de;let U;g&&Xt(g,!1),(U=F.onVnodeBeforeUpdate)&&mt(U,g,p,f),L&&Qt(p,f,g,"beforeUpdate"),g&&Xt(g,!0);const G=C&&p.type!=="foreignObject";if(w?Oe(f.dynamicChildren,w,S,g,v,G,T):P||ne(f,p,S,null,g,v,G,T,!1),x>0){if(x&16)Ue(S,p,O,F,g,v,C);else if(x&2&&O.class!==F.class&&r(S,"class",null,F.class,C),x&4&&r(S,"style",O.style,F.style,C),x&8){const ae=p.dynamicProps;for(let se=0;se<ae.length;se++){const ye=ae[se],it=O[ye],Cn=F[ye];(Cn!==it||ye==="value")&&r(S,ye,it,Cn,C,f.children,g,v,k)}}x&1&&f.children!==p.children&&u(S,p.children)}else!P&&w==null&&Ue(S,p,O,F,g,v,C);((U=F.onVnodeUpdated)||L)&&We(()=>{U&&mt(U,g,p,f),L&&Qt(p,f,g,"updated")},v)},Oe=(f,p,g,v,C,T,P)=>{for(let S=0;S<p.length;S++){const x=f[S],w=p[S],L=x.el&&(x.type===et||!ss(x,w)||x.shapeFlag&70)?h(x.el):g;y(x,w,L,null,v,C,T,P,!0)}},Ue=(f,p,g,v,C,T,P)=>{if(g!==v){if(g!==de)for(const S in g)!Js(S)&&!(S in v)&&r(f,S,g[S],null,P,p.children,C,T,k);for(const S in v){if(Js(S))continue;const x=v[S],w=g[S];x!==w&&S!=="value"&&r(f,S,w,x,P,p.children,C,T,k)}"value"in v&&r(f,"value",g.value,v.value)}},Ze=(f,p,g,v,C,T,P,S,x)=>{const w=p.el=f?f.el:l(""),L=p.anchor=f?f.anchor:l("");let{patchFlag:O,dynamicChildren:F,slotScopeIds:U}=p;U&&(S=S?S.concat(U):U),f==null?(s(w,g,v),s(L,g,v),Y(p.children,g,L,C,T,P,S,x)):O>0&&O&64&&F&&f.dynamicChildren?(Oe(f.dynamicChildren,F,g,C,T,P,S),(p.key!=null||C&&p===C.subTree)&&Hc(f,p,!0)):ne(f,p,g,L,C,T,P,S,x)},kt=(f,p,g,v,C,T,P,S,x)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?C.ctx.activate(p,g,v,P,x):qe(p,g,v,C,T,P,x):Se(f,p,x)},qe=(f,p,g,v,C,T,P)=>{const S=f.component=Uf(f,v,C);if(kc(f)&&(S.ctx.renderer=Q),Wf(S),S.asyncDep){if(C&&C.registerDep(S,ve),!f.el){const x=S.subTree=ie(ws);A(null,x,p,g)}return}ve(S,f,p,g,C,T,P)},Se=(f,p,g)=>{const v=p.component=f.component;if(Yd(f,p,g))if(v.asyncDep&&!v.asyncResolved){le(v,p,g);return}else v.next=p,Vd(v.update),v.update();else p.el=f.el,v.vnode=p},ve=(f,p,g,v,C,T,P)=>{const S=()=>{if(f.isMounted){let{next:L,bu:O,u:F,parent:U,vnode:G}=f,ae=L,se;Xt(f,!1),L?(L.el=G.el,le(f,L,P)):L=G,O&&Zs(O),(se=L.props&&L.props.onVnodeBeforeUpdate)&&mt(se,U,L,G),Xt(f,!0);const ye=sr(f),it=f.subTree;f.subTree=ye,y(it,ye,h(it.el),R(it),f,C,T),L.el=ye.el,ae===null&&Qd(f,ye.el),F&&We(F,C),(se=L.props&&L.props.onVnodeUpdated)&&We(()=>mt(se,U,L,G),C)}else{let L;const{el:O,props:F}=p,{bm:U,m:G,parent:ae}=f,se=ti(p);if(Xt(f,!1),U&&Zs(U),!se&&(L=F&&F.onVnodeBeforeMount)&&mt(L,ae,p),Xt(f,!0),O&&V){const ye=()=>{f.subTree=sr(f),V(O,f.subTree,f,C,null)};se?p.type.__asyncLoader().then(()=>!f.isUnmounted&&ye()):ye()}else{const ye=f.subTree=sr(f);y(null,ye,g,v,f,C,T),p.el=ye.el}if(G&&We(G,C),!se&&(L=F&&F.onVnodeMounted)){const ye=p;We(()=>mt(L,ae,ye),C)}(p.shapeFlag&256||ae&&ti(ae.vnode)&&ae.vnode.shapeFlag&256)&&f.a&&We(f.a,C),f.isMounted=!0,p=g=v=null}},x=f.effect=new po(S,()=>Eo(w),f.scope),w=f.update=()=>x.run();w.id=f.uid,Xt(f,!0),w()},le=(f,p,g)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,Ef(f,p.props,v,g),Sf(f,p.children,g),Gn(),Il(),qn()},ne=(f,p,g,v,C,T,P,S,x=!1)=>{const w=f&&f.children,L=f?f.shapeFlag:0,O=p.children,{patchFlag:F,shapeFlag:U}=p;if(F>0){if(F&128){Yt(w,O,g,v,C,T,P,S,x);return}else if(F&256){nt(w,O,g,v,C,T,P,S,x);return}}U&8?(L&16&&k(w,C,T),O!==w&&u(g,O)):L&16?U&16?Yt(w,O,g,v,C,T,P,S,x):k(w,C,T,!0):(L&8&&u(g,""),U&16&&Y(O,g,v,C,T,P,S,x))},nt=(f,p,g,v,C,T,P,S,x)=>{f=f||xn,p=p||xn;const w=f.length,L=p.length,O=Math.min(w,L);let F;for(F=0;F<O;F++){const U=p[F]=x?Dt(p[F]):vt(p[F]);y(f[F],U,g,null,C,T,P,S,x)}w>L?k(f,C,T,!0,!1,O):Y(p,g,v,C,T,P,S,x,O)},Yt=(f,p,g,v,C,T,P,S,x)=>{let w=0;const L=p.length;let O=f.length-1,F=L-1;for(;w<=O&&w<=F;){const U=f[w],G=p[w]=x?Dt(p[w]):vt(p[w]);if(ss(U,G))y(U,G,g,null,C,T,P,S,x);else break;w++}for(;w<=O&&w<=F;){const U=f[O],G=p[F]=x?Dt(p[F]):vt(p[F]);if(ss(U,G))y(U,G,g,null,C,T,P,S,x);else break;O--,F--}if(w>O){if(w<=F){const U=F+1,G=U<L?p[U].el:v;for(;w<=F;)y(null,p[w]=x?Dt(p[w]):vt(p[w]),g,G,C,T,P,S,x),w++}}else if(w>F)for(;w<=O;)He(f[w],C,T,!0),w++;else{const U=w,G=w,ae=new Map;for(w=G;w<=F;w++){const Ye=p[w]=x?Dt(p[w]):vt(p[w]);Ye.key!=null&&ae.set(Ye.key,w)}let se,ye=0;const it=F-G+1;let Cn=!1,fl=0;const ns=new Array(it);for(w=0;w<it;w++)ns[w]=0;for(w=U;w<=O;w++){const Ye=f[w];if(ye>=it){He(Ye,C,T,!0);continue}let _t;if(Ye.key!=null)_t=ae.get(Ye.key);else for(se=G;se<=F;se++)if(ns[se-G]===0&&ss(Ye,p[se])){_t=se;break}_t===void 0?He(Ye,C,T,!0):(ns[_t-G]=w+1,_t>=fl?fl=_t:Cn=!0,y(Ye,p[_t],g,null,C,T,P,S,x),ye++)}const pl=Cn?Nf(ns):xn;for(se=pl.length-1,w=it-1;w>=0;w--){const Ye=G+w,_t=p[Ye],_l=Ye+1<L?p[Ye+1].el:v;ns[w]===0?y(null,_t,g,_l,C,T,P,S,x):Cn&&(se<0||w!==pl[se]?st(_t,g,_l,2):se--)}}},st=(f,p,g,v,C=null)=>{const{el:T,type:P,transition:S,children:x,shapeFlag:w}=f;if(w&6){st(f.component.subTree,p,g,v);return}if(w&128){f.suspense.move(p,g,v);return}if(w&64){P.move(f,p,g,Q);return}if(P===et){s(T,p,g);for(let O=0;O<x.length;O++)st(x[O],p,g,v);s(f.anchor,p,g);return}if(P===ni){D(f,p,g);return}if(v!==2&&w&1&&S)if(v===0)S.beforeEnter(T),s(T,p,g),We(()=>S.enter(T),C);else{const{leave:O,delayLeave:F,afterLeave:U}=S,G=()=>s(T,p,g),ae=()=>{O(T,()=>{G(),U&&U()})};F?F(T,G,ae):ae()}else s(T,p,g)},He=(f,p,g,v=!1,C=!1)=>{const{type:T,props:P,ref:S,children:x,dynamicChildren:w,shapeFlag:L,patchFlag:O,dirs:F}=f;if(S!=null&&Ar(S,null,g,f,!0),L&256){p.ctx.deactivate(f);return}const U=L&1&&F,G=!ti(f);let ae;if(G&&(ae=P&&P.onVnodeBeforeUnmount)&&mt(ae,p,f),L&6)b(f.component,g,v);else{if(L&128){f.suspense.unmount(g,v);return}U&&Qt(f,null,p,"beforeUnmount"),L&64?f.type.remove(f,p,g,C,Q,v):w&&(T!==et||O>0&&O&64)?k(w,p,g,!1,!0):(T===et&&O&384||!C&&L&16)&&k(x,p,g),v&&bn(f)}(G&&(ae=P&&P.onVnodeUnmounted)||U)&&We(()=>{ae&&mt(ae,p,f),U&&Qt(f,null,p,"unmounted")},g)},bn=f=>{const{type:p,el:g,anchor:v,transition:C}=f;if(p===et){Vs(g,v);return}if(p===ni){q(f);return}const T=()=>{i(g),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(f.shapeFlag&1&&C&&!C.persisted){const{leave:P,delayLeave:S}=C,x=()=>P(g,T);S?S(f.el,T,x):x()}else T()},Vs=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},b=(f,p,g)=>{const{bum:v,scope:C,update:T,subTree:P,um:S}=f;v&&Zs(v),C.stop(),T&&(T.active=!1,He(P,f,p,g)),S&&We(S,p),We(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},k=(f,p,g,v=!1,C=!1,T=0)=>{for(let P=T;P<f.length;P++)He(f[P],p,g,v,C)},R=f=>f.shapeFlag&6?R(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),M=(f,p,g)=>{f==null?p._vnode&&He(p._vnode,null,null,!0):y(p._vnode||null,f,p,null,null,null,g),Il(),Sc(),p._vnode=f},Q={p:y,um:He,m:st,r:bn,mt:qe,mc:Y,pc:ne,pbc:Oe,n:R,o:t};let _e,V;return e&&([_e,V]=e(Q)),{render:M,hydrate:_e,createApp:xf(M,_e)}}function Xt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Hc(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Dt(i[r]),l.el=o.el),n||Hc(o,l)),l.type===$i&&(l.el=o.el)}}function Nf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const kf=t=>t.__isTeleport,et=Symbol(void 0),$i=Symbol(void 0),ws=Symbol(void 0),ni=Symbol(void 0),ds=[];let lt=null;function je(t=!1){ds.push(lt=t?null:[])}function Af(){ds.pop(),lt=ds[ds.length-1]||null}let Is=1;function Al(t){Is+=t}function Of(t){return t.dynamicChildren=Is>0?lt||xn:null,Af(),Is>0&&lt&&lt.push(t),t}function ze(t,e,n,s,i,r){return Of(E(t,e,n,s,i,r,!0))}function Or(t){return t?t.__v_isVNode===!0:!1}function ss(t,e){return t.type===e.type&&t.key===e.key}const Bi="__vInternal",Wc=({key:t})=>t!=null?t:null,si=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ie(t)||ge(t)||W(t)?{i:tt,r:t,k:e,f:!!n}:t:null;function E(t,e=null,n=null,s=0,i=null,r=t===et?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wc(e),ref:e&&si(e),scopeId:Li,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:tt};return l?(xo(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=Ie(n)?8:16),Is>0&&!o&&lt&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&lt.push(a),a}const ie=Df;function Df(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===ff)&&(t=ws),Or(t)){const l=$n(t,e,!0);return n&&xo(l,n),Is>0&&!r&&lt&&(l.shapeFlag&6?lt[lt.indexOf(t)]=l:lt.push(l)),l.patchFlag|=-2,l}if(Kf(t)&&(t=t.__vccOpts),e){e=Mf(e);let{class:l,style:a}=e;l&&!Ie(l)&&(e.class=ke(l)),pe(a)&&(gc(a)&&!H(a)&&(a=Be({},a)),e.style=lo(a))}const o=Ie(t)?1:Xd(t)?128:kf(t)?64:pe(t)?4:W(t)?2:0;return E(t,e,n,s,i,o,r,!0)}function Mf(t){return t?gc(t)||Bi in t?Be({},t):t:null}function $n(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?Ff(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Wc(l),ref:e&&e.ref?n&&i?H(i)?i.concat(si(e)):[i,si(e)]:si(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==et?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&$n(t.ssContent),ssFallback:t.ssFallback&&$n(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function gt(t=" ",e=0){return ie($i,null,t,e)}function Lf(t,e){const n=ie(ni,null,t);return n.staticCount=e,n}function vt(t){return t==null||typeof t=="boolean"?ie(ws):H(t)?ie(et,null,t.slice()):typeof t=="object"?Dt(t):ie($i,null,String(t))}function Dt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:$n(t)}function xo(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),xo(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Bi in e)?e._ctx=tt:i===3&&tt&&(tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:tt},n=32):(e=String(e),s&64?(n=16,e=[gt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ff(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=ke([e.class,s.class]));else if(i==="style")e.style=lo([e.style,s.style]);else if(Ni(i)){const r=e[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function mt(t,e,n,s=null){ht(t,e,7,[n,s])}const $f=Uc();let Bf=0;function Uf(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||$f,r={uid:Bf++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new ic(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lc(s,i),emitsOptions:xc(s,i),emit:null,emitted:null,propsDefaults:de,inheritAttrs:s.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Kd.bind(null,r),t.ce&&t.ce(r),r}let Ae=null;const Hf=()=>Ae||tt,Bn=t=>{Ae=t,t.scope.on()},un=()=>{Ae&&Ae.scope.off(),Ae=null};function Vc(t){return t.vnode.shapeFlag&4}let Ss=!1;function Wf(t,e=!1){Ss=e;const{props:n,children:s}=t.vnode,i=Vc(t);Cf(t,n,i,e),If(t,s);const r=i?Vf(t,e):void 0;return Ss=!1,r}function Vf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Fn(new Proxy(t.ctx,_f));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?zf(t):null;Bn(t),Gn();const r=Bt(s,t,0,[t.props,i]);if(qn(),un(),ec(r)){if(r.then(un,un),e)return r.then(o=>{Ol(t,o,e)}).catch(o=>{Di(o,t,0)});t.asyncDep=r}else Ol(t,r,e)}else jc(t,e)}function Ol(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pe(e)&&(t.setupState=Cc(e)),jc(t,n)}let Dl;function jc(t,e,n){const s=t.type;if(!t.render){if(!e&&Dl&&!s.render){const i=s.template||So(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=Be(Be({isCustomElement:r,delimiters:l},o),a);s.render=Dl(i,c)}}t.render=s.render||ut}Bn(t),Gn(),mf(t),qn(),un()}function jf(t){return new Proxy(t.attrs,{get(e,n){return Je(t,"get","$attrs"),e[n]}})}function zf(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=jf(t))},slots:t.slots,emit:t.emit,expose:e}}function Ui(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Cc(Fn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in hs)return hs[n](t)},has(e,n){return n in e||n in hs}}))}function Kf(t){return W(t)&&"__vccOpts"in t}const Xe=(t,e)=>Ud(t,e,Ss);function zc(t,e,n){const s=arguments.length;return s===2?pe(e)&&!H(e)?Or(e)?ie(t,null,[e]):ie(t,e):ie(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Or(n)&&(n=[n]),ie(t,e,n))}const Gf=Symbol(""),qf=()=>dt(Gf),Yf="3.2.45",Qf="http://www.w3.org/2000/svg",rn=typeof document<"u"?document:null,Ml=rn&&rn.createElement("template"),Xf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?rn.createElementNS(Qf,t):rn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>rn.createTextNode(t),createComment:t=>rn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>rn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Ml.innerHTML=s?`<svg>${t}</svg>`:t;const l=Ml.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Jf(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Zf(t,e,n){const s=t.style,i=Ie(n);if(n&&!i){for(const r in n)Dr(s,r,n[r]);if(e&&!Ie(e))for(const r in e)n[r]==null&&Dr(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Ll=/\s*!important$/;function Dr(t,e,n){if(H(n))n.forEach(s=>Dr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ep(t,e);Ll.test(n)?t.setProperty(mn(s),n.replace(Ll,""),"important"):t[s]=n}}const Fl=["Webkit","Moz","ms"],rr={};function ep(t,e){const n=rr[e];if(n)return n;let s=Mn(e);if(s!=="filter"&&s in t)return rr[e]=s;s=sc(s);for(let i=0;i<Fl.length;i++){const r=Fl[i]+s;if(r in t)return rr[e]=r}return e}const $l="http://www.w3.org/1999/xlink";function tp(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS($l,e.slice(6,e.length)):t.setAttributeNS($l,e,n);else{const r=Qh(e);n==null||r&&!Xa(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function np(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Xa(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Sn(t,e,n,s){t.addEventListener(e,n,s)}function sp(t,e,n,s){t.removeEventListener(e,n,s)}function ip(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=rp(e);if(s){const c=r[e]=ap(s,i);Sn(t,l,c,a)}else o&&(sp(t,l,o,a),r[e]=void 0)}}const Bl=/(?:Once|Passive|Capture)$/;function rp(t){let e;if(Bl.test(t)){e={};let s;for(;s=t.match(Bl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):mn(t.slice(2)),e]}let or=0;const op=Promise.resolve(),lp=()=>or||(op.then(()=>or=0),or=Date.now());function ap(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ht(cp(s,n.value),e,5,[s])};return n.value=t,n.attached=lp(),n}function cp(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Ul=/^on[a-z]/,up=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?Jf(t,s,i):e==="style"?Zf(t,n,s):Ni(e)?ao(e)||ip(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hp(t,e,s,i))?np(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),tp(t,e,s,i))};function hp(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Ul.test(e)&&W(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ul.test(e)&&Ie(n)?!1:e in t}const Hl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>Zs(e,n):e};function dp(t){t.target.composing=!0}function Wl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Mr={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Hl(i);const r=s||i.props&&i.props.type==="number";Sn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=oi(l)),t._assign(l)}),n&&Sn(t,"change",()=>{t.value=t.value.trim()}),e||(Sn(t,"compositionstart",dp),Sn(t,"compositionend",Wl),Sn(t,"change",Wl))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Hl(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&oi(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},fp={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Kc=(t,e)=>n=>{if(!("key"in n))return;const s=mn(n.key);if(e.some(i=>i===s||fp[i]===s))return t(n)},pp=Be({patchProp:up},Xf);let Vl;function _p(){return Vl||(Vl=Rf(pp))}const mp=(...t)=>{const e=_p().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=gp(s);if(!i)return;const r=e._component;!W(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function gp(t){return Ie(t)?document.querySelector(t):t}var vp=!1;/*!
  * pinia v2.0.27
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Gc;const Hi=t=>Gc=t,qc=Symbol();function Lr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var fs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(fs||(fs={}));function yp(){const t=rc(!0),e=t.run(()=>Ne({}));let n=[],s=[];const i=Fn({install(r){Hi(i),i._a=r,r.provide(qc,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!vp?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Yc=()=>{};function jl(t,e,n,s=Yc){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&rd()&&od(i),i}function En(t,...e){t.slice().forEach(n=>{n(...e)})}function Fr(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Lr(i)&&Lr(s)&&t.hasOwnProperty(n)&&!ge(s)&&!$t(s)?t[n]=Fr(i,s):t[n]=s}return t}const bp=Symbol();function Cp(t){return!Lr(t)||!t.hasOwnProperty(bp)}const{assign:Mt}=Object;function Ep(t){return!!(ge(t)&&t.effect)}function wp(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let a;function c(){l||(n.state.value[t]=i?i():{});const u=Ld(n.state.value[t]);return Mt(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=Fn(Xe(()=>{Hi(n);const _=n._s.get(t);return o[d].call(_,_)})),h),{}))}return a=Qc(t,c,e,n,s,!0),a.$reset=function(){const h=i?i():{};this.$patch(d=>{Mt(d,h)})},a}function Qc(t,e,n={},s,i,r){let o;const l=Mt({actions:{}},n),a={deep:!0};let c,u,h=Fn([]),d=Fn([]),_;const m=s.state.value[t];!r&&!m&&(s.state.value[t]={}),Ne({});let y;function N(J){let Y;c=u=!1,typeof J=="function"?(J(s.state.value[t]),Y={type:fs.patchFunction,storeId:t,events:_}):(Fr(s.state.value[t],J),Y={type:fs.patchObject,payload:J,storeId:t,events:_});const Le=y=Symbol();Co().then(()=>{y===Le&&(c=!0)}),u=!0,En(h,Y,s.state.value[t])}const A=Yc;function B(){o.stop(),h=[],d=[],s._s.delete(t)}function D(J,Y){return function(){Hi(s);const Le=Array.from(arguments),Oe=[],Ue=[];function Ze(Se){Oe.push(Se)}function kt(Se){Ue.push(Se)}En(d,{args:Le,name:J,store:re,after:Ze,onError:kt});let qe;try{qe=Y.apply(this&&this.$id===t?this:re,Le)}catch(Se){throw En(Ue,Se),Se}return qe instanceof Promise?qe.then(Se=>(En(Oe,Se),Se)).catch(Se=>(En(Ue,Se),Promise.reject(Se))):(En(Oe,qe),qe)}}const q={_p:s,$id:t,$onAction:jl.bind(null,d),$patch:N,$reset:A,$subscribe(J,Y={}){const Le=jl(h,J,Y.detached,()=>Oe()),Oe=o.run(()=>Nn(()=>s.state.value[t],Ue=>{(Y.flush==="sync"?u:c)&&J({storeId:t,type:fs.direct,events:_},Ue)},Mt({},a,Y)));return Le},$dispose:B},re=Yn(q);s._s.set(t,re);const Ce=s._e.run(()=>(o=rc(),o.run(()=>e())));for(const J in Ce){const Y=Ce[J];if(ge(Y)&&!Ep(Y)||$t(Y))r||(m&&Cp(Y)&&(ge(Y)?Y.value=m[J]:Fr(Y,m[J])),s.state.value[t][J]=Y);else if(typeof Y=="function"){const Le=D(J,Y);Ce[J]=Le,l.actions[J]=Y}}return Mt(re,Ce),Mt(ee(re),Ce),Object.defineProperty(re,"$state",{get:()=>s.state.value[t],set:J=>{N(Y=>{Mt(Y,J)})}}),s._p.forEach(J=>{Mt(re,o.run(()=>J({store:re,app:s._a,pinia:s,options:l})))}),m&&r&&n.hydrate&&n.hydrate(re.$state,m),c=!0,u=!0,re}function Ip(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(l,a){const c=Hf();return l=l||c&&dt(qc),l&&Hi(l),l=Gc,l._s.has(s)||(r?Qc(s,e,i,l):wp(s,i,l)),l._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const is=typeof window<"u";function Sp(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const fe=Object.assign;function lr(t,e){const n={};for(const s in e){const i=e[s];n[s]=pt(i)?i.map(t):t(i)}return n}const ps=()=>{},pt=Array.isArray;function ar(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let a=e.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(s=e.slice(0,a),r=e.slice(a+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=Pp(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function Tp(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function xp(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Un(e.matched[s],n.matched[i])&&Xc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Un(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Xc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Rp(t[n],e[n]))return!1;return!0}function Rp(t,e){return pt(t)?zl(t,e):pt(e)?zl(e,t):t===e}function zl(t,e){return pt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Pp(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var ui;(function(t){t.pop="pop",t.push="push"})(ui||(ui={}));var Kl;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Kl||(Kl={}));function Np(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const kp=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ap(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Np(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Gl(t,e){return(history.state?history.state.position-e:-1)+t}const $r=new Map;function Op(t,e){$r.set(t,e)}function Dp(t){const e=$r.get(t);return $r.delete(t),e}function Mp(t){return typeof t=="string"||t&&typeof t=="object"}function Jc(t){return typeof t=="string"||typeof t=="symbol"}const Ot={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Zc=Symbol("");var ql;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ql||(ql={}));function Hn(t,e){return fe(new Error,{type:t,[Zc]:!0},e)}function Et(t,e){return t instanceof Error&&Zc in t&&(e==null||!!(t.type&e))}const Yl="[^/]+?",Lp={sensitive:!1,strict:!1,start:!0,end:!0},Fp=/[.+*?^${}()[\]/\\]/g;function $p(t,e){const n=fe({},Lp,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let _=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(Fp,"\\$&"),_+=40;else if(d.type===1){const{value:m,repeatable:y,optional:N,regexp:A}=d;r.push({name:m,repeatable:y,optional:N});const B=A||Yl;if(B!==Yl){_+=10;try{new RegExp(`(${B})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${m}" (${B}): `+q.message)}}let D=y?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;h||(D=N&&c.length<2?`(?:/${D})`:"/"+D),N&&(D+="?"),i+=D,_+=20,N&&(_+=-8),y&&(_+=-20),B===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const _=u[d]||"",m=r[d-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function a(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of d)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:y,optional:N}=_,A=m in c?c[m]:"";if(pt(A)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const B=pt(A)?A.join("/"):A;if(!B)if(N)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=B}}return u||"/"}return{re:o,score:s,keys:r,parse:l,stringify:a}}function Bp(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Up(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=Bp(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Ql(s))return 1;if(Ql(i))return-1}return i.length-s.length}function Ql(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Hp={type:0,value:""},Wp=/[a-zA-Z0-9_]/;function Vp(t){if(!t)return[[]];if(t==="/")return[[Hp]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,a,c="",u="";function h(){!c||(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(c&&h(),o()):a===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:a==="("?n=2:Wp.test(a)?d():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function jp(t,e,n){const s=$p(Vp(t.path),n),i=fe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function zp(t,e){const n=[],s=new Map;e=Zl({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const _=!d,m=Kp(u);m.aliasOf=d&&d.record;const y=Zl(e,u),N=[m];if("alias"in u){const D=typeof u.alias=="string"?[u.alias]:u.alias;for(const q of D)N.push(fe({},m,{components:d?d.record.components:m.components,path:q,aliasOf:d?d.record:m}))}let A,B;for(const D of N){const{path:q}=D;if(h&&q[0]!=="/"){const re=h.record.path,Ce=re[re.length-1]==="/"?"":"/";D.path=h.record.path+(q&&Ce+q)}if(A=jp(D,h,y),d?d.alias.push(A):(B=B||A,B!==A&&B.alias.push(A),_&&u.name&&!Jl(A)&&o(u.name)),m.children){const re=m.children;for(let Ce=0;Ce<re.length;Ce++)r(re[Ce],A,d&&d.children[Ce])}d=d||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&a(A)}return B?()=>{o(B)}:ps}function o(u){if(Jc(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function a(u){let h=0;for(;h<n.length&&Up(u,n[h])>=0&&(u.record.path!==n[h].record.path||!eu(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Jl(u)&&s.set(u.record.name,u)}function c(u,h){let d,_={},m,y;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Hn(1,{location:u});y=d.record.name,_=fe(Xl(h.params,d.keys.filter(B=>!B.optional).map(B=>B.name)),u.params&&Xl(u.params,d.keys.map(B=>B.name))),m=d.stringify(_)}else if("path"in u)m=u.path,d=n.find(B=>B.re.test(m)),d&&(_=d.parse(m),y=d.record.name);else{if(d=h.name?s.get(h.name):n.find(B=>B.re.test(h.path)),!d)throw Hn(1,{location:u,currentLocation:h});y=d.record.name,_=fe({},h.params,u.params),m=d.stringify(_)}const N=[];let A=d;for(;A;)N.unshift(A.record),A=A.parent;return{name:y,path:m,params:_,matched:N,meta:qp(N)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function Xl(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Kp(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Gp(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Gp(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Jl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function qp(t){return t.reduce((e,n)=>fe(e,n.meta),{})}function Zl(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function eu(t,e){return e.children.some(n=>n===t||eu(t,n))}const tu=/#/g,Yp=/&/g,Qp=/\//g,Xp=/=/g,Jp=/\?/g,nu=/\+/g,Zp=/%5B/g,e_=/%5D/g,su=/%5E/g,t_=/%60/g,iu=/%7B/g,n_=/%7C/g,ru=/%7D/g,s_=/%20/g;function Ro(t){return encodeURI(""+t).replace(n_,"|").replace(Zp,"[").replace(e_,"]")}function i_(t){return Ro(t).replace(iu,"{").replace(ru,"}").replace(su,"^")}function Br(t){return Ro(t).replace(nu,"%2B").replace(s_,"+").replace(tu,"%23").replace(Yp,"%26").replace(t_,"`").replace(iu,"{").replace(ru,"}").replace(su,"^")}function r_(t){return Br(t).replace(Xp,"%3D")}function o_(t){return Ro(t).replace(tu,"%23").replace(Jp,"%3F")}function l_(t){return t==null?"":o_(t).replace(Qp,"%2F")}function hi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function a_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(nu," "),o=r.indexOf("="),l=hi(o<0?r:r.slice(0,o)),a=o<0?null:hi(r.slice(o+1));if(l in e){let c=e[l];pt(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function ea(t){let e="";for(let n in t){const s=t[n];if(n=r_(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(pt(s)?s.map(r=>r&&Br(r)):[s&&Br(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function c_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=pt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const u_=Symbol(""),ta=Symbol(""),Wi=Symbol(""),ou=Symbol(""),Ur=Symbol("");function rs(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Lt(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const a=h=>{h===!1?l(Hn(4,{from:n,to:e})):h instanceof Error?l(h):Mp(h)?l(Hn(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,a);let u=Promise.resolve(c);t.length<3&&(u=u.then(a)),u.catch(h=>l(h))})}function cr(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let l=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(h_(l)){const c=(l.__vccOpts||l)[e];c&&i.push(Lt(c,n,s,r,o))}else{let a=l();i.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Sp(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Lt(d,n,s,r,o)()}))}}return i}function h_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function na(t){const e=dt(Wi),n=dt(ou),s=Xe(()=>e.resolve(te(t.to))),i=Xe(()=>{const{matched:a}=s.value,{length:c}=a,u=a[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Un.bind(null,u));if(d>-1)return d;const _=sa(a[c-2]);return c>1&&sa(u)===_&&h[h.length-1].path!==_?h.findIndex(Un.bind(null,a[c-2])):d}),r=Xe(()=>i.value>-1&&p_(n.params,s.value.params)),o=Xe(()=>i.value>-1&&i.value===n.matched.length-1&&Xc(n.params,s.value.params));function l(a={}){return f_(a)?e[te(t.replace)?"replace":"push"](te(t.to)).catch(ps):Promise.resolve()}return{route:s,href:Xe(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const d_=Nc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:na,setup(t,{slots:e}){const n=Yn(na(t)),{options:s}=dt(Wi),i=Xe(()=>({[ia(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[ia(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:zc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),en=d_;function f_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function p_(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!pt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function sa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ia=(t,e,n)=>t!=null?t:e!=null?e:n,__=Nc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=dt(Ur),i=Xe(()=>t.route||s.value),r=dt(ta,0),o=Xe(()=>{let c=te(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),l=Xe(()=>i.value.matched[o.value]);ei(ta,Xe(()=>o.value+1)),ei(u_,l),ei(Ur,i);const a=Ne();return Nn(()=>[a.value,l.value,t.name],([c,u,h],[d,_,m])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!Un(u,_)||!d)&&(u.enterCallbacks[h]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=l.value,d=h&&h.components[u];if(!d)return ra(n.default,{Component:d,route:c});const _=h.props[u],m=_?_===!0?c.params:typeof _=="function"?_(c):_:null,N=zc(d,fe({},m,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return ra(n.default,{Component:N,route:c})||N}}});function ra(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const lu=__;function m_(t){const e=zp(t.routes,t),n=t.parseQuery||a_,s=t.stringifyQuery||ea,i=t.history,r=rs(),o=rs(),l=rs(),a=Od(Ot);let c=Ot;is&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=lr.bind(null,b=>""+b),h=lr.bind(null,l_),d=lr.bind(null,hi);function _(b,k){let R,M;return Jc(b)?(R=e.getRecordMatcher(b),M=k):M=b,e.addRoute(M,R)}function m(b){const k=e.getRecordMatcher(b);k&&e.removeRoute(k)}function y(){return e.getRoutes().map(b=>b.record)}function N(b){return!!e.getRecordMatcher(b)}function A(b,k){if(k=fe({},k||a.value),typeof b=="string"){const f=ar(n,b,k.path),p=e.resolve({path:f.path},k),g=i.createHref(f.fullPath);return fe(f,p,{params:d(p.params),hash:hi(f.hash),redirectedFrom:void 0,href:g})}let R;if("path"in b)R=fe({},b,{path:ar(n,b.path,k.path).path});else{const f=fe({},b.params);for(const p in f)f[p]==null&&delete f[p];R=fe({},b,{params:h(b.params)}),k.params=h(k.params)}const M=e.resolve(R,k),Q=b.hash||"";M.params=u(d(M.params));const _e=Tp(s,fe({},b,{hash:i_(Q),path:M.path})),V=i.createHref(_e);return fe({fullPath:_e,hash:Q,query:s===ea?c_(b.query):b.query||{}},M,{redirectedFrom:void 0,href:V})}function B(b){return typeof b=="string"?ar(n,b,a.value.path):fe({},b)}function D(b,k){if(c!==b)return Hn(8,{from:k,to:b})}function q(b){return J(b)}function re(b){return q(fe(B(b),{replace:!0}))}function Ce(b){const k=b.matched[b.matched.length-1];if(k&&k.redirect){const{redirect:R}=k;let M=typeof R=="function"?R(b):R;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=B(M):{path:M},M.params={}),fe({query:b.query,hash:b.hash,params:"path"in M?{}:b.params},M)}}function J(b,k){const R=c=A(b),M=a.value,Q=b.state,_e=b.force,V=b.replace===!0,f=Ce(R);if(f)return J(fe(B(f),{state:typeof f=="object"?fe({},Q,f.state):Q,force:_e,replace:V}),k||R);const p=R;p.redirectedFrom=k;let g;return!_e&&xp(s,M,R)&&(g=Hn(16,{to:p,from:M}),Yt(M,M,!0,!1)),(g?Promise.resolve(g):Le(p,M)).catch(v=>Et(v)?Et(v,2)?v:nt(v):le(v,p,M)).then(v=>{if(v){if(Et(v,2))return J(fe({replace:V},B(v.to),{state:typeof v.to=="object"?fe({},Q,v.to.state):Q,force:_e}),k||p)}else v=Ue(p,M,!0,V,Q);return Oe(p,M,v),v})}function Y(b,k){const R=D(b,k);return R?Promise.reject(R):Promise.resolve()}function Le(b,k){let R;const[M,Q,_e]=g_(b,k);R=cr(M.reverse(),"beforeRouteLeave",b,k);for(const f of M)f.leaveGuards.forEach(p=>{R.push(Lt(p,b,k))});const V=Y.bind(null,b,k);return R.push(V),wn(R).then(()=>{R=[];for(const f of r.list())R.push(Lt(f,b,k));return R.push(V),wn(R)}).then(()=>{R=cr(Q,"beforeRouteUpdate",b,k);for(const f of Q)f.updateGuards.forEach(p=>{R.push(Lt(p,b,k))});return R.push(V),wn(R)}).then(()=>{R=[];for(const f of b.matched)if(f.beforeEnter&&!k.matched.includes(f))if(pt(f.beforeEnter))for(const p of f.beforeEnter)R.push(Lt(p,b,k));else R.push(Lt(f.beforeEnter,b,k));return R.push(V),wn(R)}).then(()=>(b.matched.forEach(f=>f.enterCallbacks={}),R=cr(_e,"beforeRouteEnter",b,k),R.push(V),wn(R))).then(()=>{R=[];for(const f of o.list())R.push(Lt(f,b,k));return R.push(V),wn(R)}).catch(f=>Et(f,8)?f:Promise.reject(f))}function Oe(b,k,R){for(const M of l.list())M(b,k,R)}function Ue(b,k,R,M,Q){const _e=D(b,k);if(_e)return _e;const V=k===Ot,f=is?history.state:{};R&&(M||V?i.replace(b.fullPath,fe({scroll:V&&f&&f.scroll},Q)):i.push(b.fullPath,Q)),a.value=b,Yt(b,k,R,V),nt()}let Ze;function kt(){Ze||(Ze=i.listen((b,k,R)=>{if(!Vs.listening)return;const M=A(b),Q=Ce(M);if(Q){J(fe(Q,{replace:!0}),M).catch(ps);return}c=M;const _e=a.value;is&&Op(Gl(_e.fullPath,R.delta),kp()),Le(M,_e).catch(V=>Et(V,12)?V:Et(V,2)?(J(V.to,M).then(f=>{Et(f,20)&&!R.delta&&R.type===ui.pop&&i.go(-1,!1)}).catch(ps),Promise.reject()):(R.delta&&i.go(-R.delta,!1),le(V,M,_e))).then(V=>{V=V||Ue(M,_e,!1),V&&(R.delta&&!Et(V,8)?i.go(-R.delta,!1):R.type===ui.pop&&Et(V,20)&&i.go(-1,!1)),Oe(M,_e,V)}).catch(ps)}))}let qe=rs(),Se=rs(),ve;function le(b,k,R){nt(b);const M=Se.list();return M.length?M.forEach(Q=>Q(b,k,R)):console.error(b),Promise.reject(b)}function ne(){return ve&&a.value!==Ot?Promise.resolve():new Promise((b,k)=>{qe.add([b,k])})}function nt(b){return ve||(ve=!b,kt(),qe.list().forEach(([k,R])=>b?R(b):k()),qe.reset()),b}function Yt(b,k,R,M){const{scrollBehavior:Q}=t;if(!is||!Q)return Promise.resolve();const _e=!R&&Dp(Gl(b.fullPath,0))||(M||!R)&&history.state&&history.state.scroll||null;return Co().then(()=>Q(b,k,_e)).then(V=>V&&Ap(V)).catch(V=>le(V,b,k))}const st=b=>i.go(b);let He;const bn=new Set,Vs={currentRoute:a,listening:!0,addRoute:_,removeRoute:m,hasRoute:N,getRoutes:y,resolve:A,options:t,push:q,replace:re,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:Se.add,isReady:ne,install(b){const k=this;b.component("RouterLink",en),b.component("RouterView",lu),b.config.globalProperties.$router=k,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>te(a)}),is&&!He&&a.value===Ot&&(He=!0,q(i.location).catch(Q=>{}));const R={};for(const Q in Ot)R[Q]=Xe(()=>a.value[Q]);b.provide(Wi,k),b.provide(ou,Yn(R)),b.provide(Ur,a);const M=b.unmount;bn.add(b),b.unmount=function(){bn.delete(b),bn.size<1&&(c=Ot,Ze&&Ze(),Ze=null,a.value=Ot,He=!1,ve=!1),M()}}};return Vs}function wn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function g_(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(c=>Un(c,l))?s.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>Un(c,a))||i.push(a))}return[n,s,i]}function Vi(){return dt(Wi)}const qt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},v_={},y_={id:"footer",class:"flex_center"},b_=E("h6",null,"\u672C\u7DB2\u9801\u9069\u61C9\u5927\u90E8\u5206\u8996\u7A97\uFF0C\u5EFA\u8B70\u7E2E\u653E\u70BA\u6B63\u8CA050%\u5167",-1),C_=E("hr",{style:{width:"100%","margin-top":"5px"}},null,-1),E_=E("h4",null,"\u6B64\u7DB2\u9801\u5716\u7247\u7D20\u6750\u53D6\u81EA\uFF1A",-1),w_=[b_,C_,E_];function I_(t,e){return je(),ze("div",y_,w_)}const S_=qt(v_,[["render",I_]]);const au=t=>(wo("data-v-e9941dcc"),t=t(),Io(),t),T_=au(()=>E("h1",{style:{margin:"0px"}},"\u7121\u76E1\u4ED9\u9014\uFF1A\u88FD\u4F5C\u4E2D",-1)),x_=au(()=>E("div",{id:"box999"},[E("p",null,"\u4F7F\u7528\u8005001")],-1)),R_={__name:"App",setup(t){return window.onbeforeunload=function(){if(!confirm(""))return""},document.onmousemove=function(e){const n=document.getElementById("box999");e=e||window.event;const s=document.body.scrollTop||document.documentElement.scrollTop,i=document.body.scrollLeft||document.documentElement.scrollLeft,r=e.clientX,o=e.clientY;n.style.left=-1+r+i+"px",n.style.top=4+o+s+"px"},(e,n)=>(je(),ze(et,null,[T_,ie(te(lu)),ie(S_),x_],64))}},P_=qt(R_,[["__scopeId","data-v-e9941dcc"]]),N_="modulepreload",k_=function(t){return"/Vue3-Game-Xian/"+t},oa={},A_=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=k_(r),r in oa)return;oa[r]=!0;const o=r.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":N_,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},gn=Ip("counter",()=>({Player:Ne({name:"\u93AE\u5929\u5211\u9577",lv:"\u7DF4\u9AD4",props:"\u795E\u5143\u4E38",fragments:4214,interfere:122,power:0,probability:20,money:1929,img:"../../public/gg0021.png",meditate:!1,meditateStatrt:0,meditateStatrtTime:""})}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw Qn(e)},Qn=function(t){return new Error("Firebase Database ("+cu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},O_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Po={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):O_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw Error();const d=r<<2|l>>4;if(s.push(d),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},hu=function(t){const e=uu(t);return Po.encodeByteArray(e,!0)},di=function(t){return hu(t).replace(/\./g,"")},Hr=function(t){try{return Po.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(t){return du(void 0,t)}function du(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!M_(n)||(t[n]=du(t[n],e[n]));return t}function M_(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(L_())}function F_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pu(){return cu.NODE_ADMIN===!0}function $_(){try{return typeof indexedDB=="object"}catch{return!1}}function B_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function U_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=()=>U_().__FIREBASE_DEFAULTS__,W_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},V_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hr(t[1]);return e&&JSON.parse(e)},_u=()=>{try{return H_()||W_()||V_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},j_=t=>{var e,n;return(n=(e=_u())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},z_=t=>{const e=j_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},K_=()=>{var t;return(t=_u())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[di(JSON.stringify(n)),di(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_="FirebaseError";class Ls extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=q_,Object.setPrototypeOf(this,Ls.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mu.prototype.create)}}class mu{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Y_(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Ls(i,l,s)}}function Y_(t,e){return t.replace(Q_,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Q_=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(t){return JSON.parse(t)}function Ee(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Ts(Hr(r[0])||""),n=Ts(Hr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},X_=function(t){const e=gu(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},J_=function(t){const e=gu(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Wn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function la(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fi(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Wr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(aa(r)&&aa(o)){if(!Wr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function aa(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function No(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,I(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t){return t&&t._delegate?t._delegate:t}class xs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ji;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(im(e))try{this.getOrInitializeService({instanceIdentifier:tn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tn){return this.instances.has(e)}getOptions(e=tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:sm(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=tn){return this.component?this.component.multipleInstances?e:tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sm(t){return t===tn?void 0:t}function im(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const om={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},lm=ce.INFO,am={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},cm=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=am[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vu{constructor(e){this.name=e,this._logLevel=lm,this._logHandler=cm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?om[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const um=(t,e)=>e.some(n=>t instanceof n);let ca,ua;function hm(){return ca||(ca=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dm(){return ua||(ua=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yu=new WeakMap,Vr=new WeakMap,bu=new WeakMap,ur=new WeakMap,ko=new WeakMap;function fm(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ut(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yu.set(n,t)}).catch(()=>{}),ko.set(e,t),e}function pm(t){if(Vr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Vr.set(t,e)}let jr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||bu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ut(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _m(t){jr=t(jr)}function mm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(hr(this),e,...n);return bu.set(s,e.sort?e.sort():[e]),Ut(s)}:dm().includes(t)?function(...e){return t.apply(hr(this),e),Ut(yu.get(this))}:function(...e){return Ut(t.apply(hr(this),e))}}function gm(t){return typeof t=="function"?mm(t):(t instanceof IDBTransaction&&pm(t),um(t,hm())?new Proxy(t,jr):t)}function Ut(t){if(t instanceof IDBRequest)return fm(t);if(ur.has(t))return ur.get(t);const e=gm(t);return e!==t&&(ur.set(t,e),ko.set(e,t)),e}const hr=t=>ko.get(t);function vm(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Ut(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Ut(o.result),a.oldVersion,a.newVersion,Ut(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const ym=["get","getKey","getAll","getAllKeys","count"],bm=["put","add","delete","clear"],dr=new Map;function ha(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dr.get(e))return dr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=bm.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ym.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return dr.set(e,r),r}_m(t=>({...t,get:(e,n,s)=>ha(e,n)||t.get(e,n,s),has:(e,n)=>!!ha(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Em(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Em(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zr="@firebase/app",da="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=new vu("@firebase/app"),wm="@firebase/app-compat",Im="@firebase/analytics-compat",Sm="@firebase/analytics",Tm="@firebase/app-check-compat",xm="@firebase/app-check",Rm="@firebase/auth",Pm="@firebase/auth-compat",Nm="@firebase/database",km="@firebase/database-compat",Am="@firebase/functions",Om="@firebase/functions-compat",Dm="@firebase/installations",Mm="@firebase/installations-compat",Lm="@firebase/messaging",Fm="@firebase/messaging-compat",$m="@firebase/performance",Bm="@firebase/performance-compat",Um="@firebase/remote-config",Hm="@firebase/remote-config-compat",Wm="@firebase/storage",Vm="@firebase/storage-compat",jm="@firebase/firestore",zm="@firebase/firestore-compat",Km="firebase",Gm="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="[DEFAULT]",qm={[zr]:"fire-core",[wm]:"fire-core-compat",[Sm]:"fire-analytics",[Im]:"fire-analytics-compat",[xm]:"fire-app-check",[Tm]:"fire-app-check-compat",[Rm]:"fire-auth",[Pm]:"fire-auth-compat",[Nm]:"fire-rtdb",[km]:"fire-rtdb-compat",[Am]:"fire-fn",[Om]:"fire-fn-compat",[Dm]:"fire-iid",[Mm]:"fire-iid-compat",[Lm]:"fire-fcm",[Fm]:"fire-fcm-compat",[$m]:"fire-perf",[Bm]:"fire-perf-compat",[Um]:"fire-rc",[Hm]:"fire-rc-compat",[Wm]:"fire-gcs",[Vm]:"fire-gcs-compat",[jm]:"fire-fst",[zm]:"fire-fst-compat","fire-js":"fire-js",[Km]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new Map,Gr=new Map;function Ym(t,e){try{t.container.addComponent(e)}catch(n){dn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _i(t){const e=t.name;if(Gr.has(e))return dn.debug(`There were multiple attempts to register component ${e}.`),!1;Gr.set(e,t);for(const n of pi.values())Ym(n,t);return!0}function Qm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ht=new mu("app","Firebase",Xm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new xs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=Gm;function Ao(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Kr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ht.create("bad-app-name",{appName:String(i)});if(n||(n=K_()),!n)throw Ht.create("no-options");const r=pi.get(i);if(r){if(Wr(n,r.options)&&Wr(s,r.config))return r;throw Ht.create("duplicate-app",{appName:i})}const o=new rm(i);for(const a of Gr.values())o.addComponent(a);const l=new Jm(n,s,o);return pi.set(i,l),l}function eg(t=Kr){const e=pi.get(t);if(!e&&t===Kr)return Ao();if(!e)throw Ht.create("no-app",{appName:t});return e}function kn(t,e,n){var s;let i=(s=qm[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dn.warn(l.join(" "));return}_i(new xs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg="firebase-heartbeat-database",ng=1,Rs="firebase-heartbeat-store";let fr=null;function Cu(){return fr||(fr=vm(tg,ng,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Rs)}}}).catch(t=>{throw Ht.create("idb-open",{originalErrorMessage:t.message})})),fr}async function sg(t){try{return(await Cu()).transaction(Rs).objectStore(Rs).get(Eu(t))}catch(e){if(e instanceof Ls)dn.warn(e.message);else{const n=Ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dn.warn(n.message)}}}async function fa(t,e){try{const s=(await Cu()).transaction(Rs,"readwrite");return await s.objectStore(Rs).put(e,Eu(t)),s.done}catch(n){if(n instanceof Ls)dn.warn(n.message);else{const s=Ht.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dn.warn(s.message)}}}function Eu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=1024,rg=30*24*60*60*1e3;class og{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ag(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=pa();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=rg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=pa(),{heartbeatsToSend:n,unsentEntries:s}=lg(this._heartbeatsCache.heartbeats),i=di(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function pa(){return new Date().toISOString().substring(0,10)}function lg(t,e=ig){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),_a(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_a(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ag{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $_()?B_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await sg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function _a(t){return di(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(t){_i(new xs("platform-logger",e=>new Cm(e),"PRIVATE")),_i(new xs("heartbeat",e=>new og(e),"PRIVATE")),kn(zr,da,t),kn(zr,da,"esm2017"),kn("fire-js","")}cg("");var ug="firebase",hg="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kn(ug,hg,"app");const ma="@firebase/database",ga="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wu="";function dg(t){wu=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ee(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ts(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Nt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new fg(e)}}catch{}return new pg},ln=Iu("localStorage"),qr=Iu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new vu("@firebase/database"),_g=function(){let t=1;return function(){return t++}}(),Su=function(t){const e=tm(t),n=new em;n.update(e);const s=n.digest();return Po.encodeByteArray(s)},Fs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Fs.apply(null,s):typeof s=="object"?e+=Ee(s):e+=s,e+=" "}return e};let hn=null,va=!0;const mg=function(t,e){I(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(An.logLevel=ce.VERBOSE,hn=An.log.bind(An),e&&qr.set("logging_enabled",!0)):typeof t=="function"?hn=t:(hn=null,qr.remove("logging_enabled"))},De=function(...t){if(va===!0&&(va=!1,hn===null&&qr.get("logging_enabled")===!0&&mg(!0)),hn){const e=Fs.apply(null,t);hn(e)}},$s=function(t){return function(...e){De(t,...e)}},Yr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Fs(...t);An.error(e)},Rt=function(...t){const e=`FIREBASE FATAL ERROR: ${Fs(...t)}`;throw An.error(e),new Error(e)},Ke=function(...t){const e="FIREBASE WARNING: "+Fs(...t);An.warn(e)},gg=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Tu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},vg=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Vn="[MIN_NAME]",fn="[MAX_NAME]",Xn=function(t,e){if(t===e)return 0;if(t===Vn||e===fn)return-1;if(e===Vn||t===fn)return 1;{const n=ya(t),s=ya(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},yg=function(t,e){return t===e?0:t<e?-1:1},os=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ee(e))},Oo=function(t){if(typeof t!="object"||t===null)return Ee(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ee(e[s]),n+=":",n+=Oo(t[e[s]]);return n+="}",n},xu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ge(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ru=function(t){I(!Tu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},bg=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Cg=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Eg(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const wg=new RegExp("^-?(0*)\\d{1,10}$"),Ig=-2147483648,Sg=2147483647,ya=function(t){if(wg.test(t)){const e=Number(t);if(e>=Ig&&e<=Sg)return e}return null},Jn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},Tg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},_s=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(De("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ke(e)}}class On{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}On.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do="5",Pu="v",Nu="s",ku="r",Au="f",Ou=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Du="ls",Mu="p",Qr="ac",Lu="websocket",Fu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ln.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ln.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Pg(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Bu(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let s;if(e===Lu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Fu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Pg(t)&&(n.ns=t.namespace);const i=[];return Ge(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(){this.counters_={}}incrementCounter(e,n=1){Nt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return D_(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr={},_r={};function Mo(t){const e=t.toString();return pr[e]||(pr[e]=new Ng),pr[e]}function kg(t,e){const n=t.toString();return _r[n]||(_r[n]=e()),_r[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Jn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba="start",Og="close",Dg="pLPCommand",Mg="pRTLPCB",Uu="id",Hu="pw",Wu="ser",Lg="cb",Fg="seg",$g="ts",Bg="d",Ug="dframe",Vu=1870,ju=30,Hg=Vu-ju,Wg=25e3,Vg=3e4;class Tn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=$s(e),this.stats_=Mo(n),this.urlFn=a=>(this.appCheckToken&&(a[Qr]=this.appCheckToken),Bu(n,Fu,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Ag(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Vg)),vg(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Lo((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ba)this.id=l,this.password=a;else if(o===Og)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[ba]="t",s[Wu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Lg]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Pu]=Do,this.transportSessionId&&(s[Nu]=this.transportSessionId),this.lastSessionId&&(s[Du]=this.lastSessionId),this.applicationId&&(s[Mu]=this.applicationId),this.appCheckToken&&(s[Qr]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ou.test(location.hostname)&&(s[ku]=Au);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Tn.forceAllow_=!0}static forceDisallow(){Tn.forceDisallow_=!0}static isAvailable(){return Tn.forceAllow_?!0:!Tn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!bg()&&!Cg()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=hu(n),i=xu(s,Hg);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Ug]="t",s[Uu]=e,s[Hu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ee(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Lo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=_g(),window[Dg+this.uniqueCallbackIdentifier]=e,window[Mg+this.uniqueCallbackIdentifier]=n,this.myIFrame=Lo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){De("frame writing exception"),l.stack&&De(l.stack),De(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||De("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Uu]=this.myID,e[Hu]=this.myPW,e[Wu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ju+s.length<=Vu;){const o=this.pendingSegs.shift();s=s+"&"+Fg+i+"="+o.seg+"&"+$g+i+"="+o.ts+"&"+Bg+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Wg)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{De("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=16384,zg=45e3;let mi=null;typeof MozWebSocket<"u"?mi=MozWebSocket:typeof WebSocket<"u"&&(mi=WebSocket);class ot{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=$s(this.connId),this.stats_=Mo(n),this.connURL=ot.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Pu]=Do,typeof location<"u"&&location.hostname&&Ou.test(location.hostname)&&(o[ku]=Au),n&&(o[Nu]=n),s&&(o[Du]=s),i&&(o[Qr]=i),r&&(o[Mu]=r),Bu(e,Lu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ln.set("previous_websocket_failure",!0);try{let s;pu(),this.mySock=new mi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ot.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&mi!==null&&!ot.forceDisallow_}static previouslyFailed(){return ln.isInMemoryStorage||ln.get("previous_websocket_failure")===!0}markConnectionHealthy(){ln.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ts(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=xu(n,jg);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(zg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ot.responsesRequiredToBeHealthy=2;ot.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Tn,ot]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ot&&ot.isAvailable();let s=n&&!ot.previouslyFailed();if(e.webSocketOnly&&(n||Ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ot];else{const i=this.transports_=[];for(const r of Ps.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ps.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ps.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=6e4,Gg=5e3,qg=10*1024,Yg=100*1024,mr="t",Ca="d",Qg="s",Ea="r",Xg="e",wa="o",Ia="a",Sa="n",Ta="p",Jg="h";class Zg{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=$s("c:"+this.id+":"),this.transportManager_=new Ps(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=_s(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Yg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>qg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(mr in e){const n=e[mr];n===Ia?this.upgradeIfSecondaryHealthy_():n===Ea?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===wa&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=os("t",e),s=os("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ta,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ia,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Sa,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=os("t",e),s=os("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=os(mr,e);if(Ca in e){const s=e[Ca];if(n===Jg)this.onHandshake_(s);else if(n===Sa){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Qg?this.onConnectionShutdown_(s):n===Ea?this.onReset_(s):n===Xg?Yr("Server Error: "+s):n===wa?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Yr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Do!==s&&Ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),_s(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Kg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):_s(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Gg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ta,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ln.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends Ku{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!fu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new gi}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=32,Ra=768;class oe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new oe("")}function j(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function zt(t){return t.pieces_.length-t.pieceNum_}function ue(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new oe(t.pieces_,e)}function Gu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ev(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function qu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Yu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new oe(e,0)}function we(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof oe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new oe(n,0)}function K(t){return t.pieceNum_>=t.pieces_.length}function $e(t,e){const n=j(t),s=j(e);if(n===null)return e;if(n===s)return $e(ue(t),ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Fo(t,e){if(zt(t)!==zt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function at(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(zt(t)>zt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class tv{constructor(e,n){this.errorPrefix_=n,this.parts_=qu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=zi(this.parts_[s]);Qu(this)}}function nv(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=zi(e),Qu(t)}function sv(t){const e=t.parts_.pop();t.byteLength_-=zi(e),t.parts_.length>0&&(t.byteLength_-=1)}function Qu(t){if(t.byteLength_>Ra)throw new Error(t.errorPrefix_+"has a key path longer than "+Ra+" bytes ("+t.byteLength_+").");if(t.parts_.length>xa)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+xa+") or object contains a cycle "+nn(t))}function nn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o extends Ku{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new $o}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=1e3,iv=60*5*1e3,Pa=30*1e3,rv=1.3,ov=3e4,lv="server_kill",Na=3;class St extends zu{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=St.nextPersistentConnectionId_++,this.log_=$s("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ls,this.maxReconnectDelay_=iv,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!pu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");$o.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&gi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ee(r)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ji,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;St.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Nt(e,"w")){const s=Wn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||J_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Pa)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=X_(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ee(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Yr("Unrecognized action received from server: "+Ee(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ls,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ls,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ov&&(this.reconnectDelay_=ls),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*rv)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+St.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){I(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?De("getToken() completed but was canceled"):(De("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new Zg(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Ke(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(lv)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ke(h),a())}}}interrupt(e){De("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){De("Resuming connection for reason: "+e),delete this.interruptReasons_[e],la(this.interruptReasons_)&&(this.reconnectDelay_=ls,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Oo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new oe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){De("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Na&&(this.reconnectDelay_=Pa,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){De("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Na&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+wu.replace(/\./g,"-")]=1,fu()?e["framework.cordova"]=1:F_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=gi.getInstance().currentlyOnline();return la(this.interruptReasons_)&&e}}St.nextPersistentConnectionId_=0;St.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new z(Vn,e),i=new z(Vn,n);return this.compare(s,i)!==0}minPost(){return z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qs;class Xu extends Ki{static get __EMPTY_NODE(){return Qs}static set __EMPTY_NODE(e){Qs=e}compare(e,n){return Xn(e.name,n.name)}isDefinedOn(e){throw Qn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(fn,Qs)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,Qs)}toString(){return".key"}}const Dn=new Xu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class xe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:xe.RED,this.left=i!=null?i:Ve.EMPTY_NODE,this.right=r!=null?r:Ve.EMPTY_NODE}copy(e,n,s,i,r){return new xe(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ve.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ve.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}xe.RED=!0;xe.BLACK=!1;class av{copy(e,n,s,i,r){return this}insert(e,n,s){return new xe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ve{constructor(e,n=Ve.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ve(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,xe.BLACK,null,null))}remove(e){return new Ve(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,xe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Xs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Xs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Xs(this.root_,null,this.comparator_,!0,e)}}Ve.EMPTY_NODE=new av;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(t,e){return Xn(t.name,e.name)}function Bo(t,e){return Xn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xr;function uv(t){Xr=t}const Ju=function(t){return typeof t=="number"?"number:"+Ru(t):"string:"+t},Zu=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Nt(e,".sv"),"Priority must be a string or number.")}else I(t===Xr||t.isEmpty(),"priority of unexpected type.");I(t===Xr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ka;class Te{constructor(e,n=Te.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Zu(this.priorityNode_)}static set __childrenNodeConstructor(e){ka=e}static get __childrenNodeConstructor(){return ka}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Te(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:j(e)===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Te.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=j(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(I(s!==".priority"||zt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Te.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ju(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ru(this.value_):e+=this.value_,this.lazyHash_=Su(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Te.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Te.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Te.VALUE_TYPE_ORDER.indexOf(n),r=Te.VALUE_TYPE_ORDER.indexOf(s);return I(i>=0,"Unknown leaf type: "+n),I(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Te.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eh,th;function hv(t){eh=t}function dv(t){th=t}class fv extends Ki{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Xn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(fn,new Te("[PRIORITY-POST]",th))}makePost(e,n){const s=eh(e);return new z(n,new Te("[PRIORITY-POST]",s))}toString(){return".priority"}}const me=new fv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv=Math.log(2);class _v{constructor(e){const n=r=>parseInt(Math.log(r)/pv,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const vi=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new xe(d,h.node,xe.BLACK,null,null);{const _=parseInt(u/2,10)+a,m=i(a,_),y=i(_+1,c);return h=t[_],d=n?n(h):h,new xe(d,h.node,xe.BLACK,m,y)}},r=function(a){let c=null,u=null,h=t.length;const d=function(m,y){const N=h-m,A=h;h-=m;const B=i(N+1,A),D=t[N],q=n?n(D):D;_(new xe(q,D.node,y,null,B))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<a.count;++m){const y=a.nextBitIsOne(),N=Math.pow(2,a.count-(m+1));y?d(N,xe.BLACK):(d(N,xe.BLACK),d(N,xe.RED))}return u},o=new _v(t.length),l=r(o);return new Ve(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gr;const In={};class It{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(In&&me,"ChildrenNode.ts has not been loaded"),gr=gr||new It({".priority":In},{".priority":me}),gr}get(e){const n=Wn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ve?n:null}hasIndex(e){return Nt(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Dn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(z.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=vi(s,e.getCompare()):l=In;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new It(u,c)}addToIndexes(e,n){const s=fi(this.indexes_,(i,r)=>{const o=Wn(this.indexSet_,r);if(I(o,"Missing index implementation for "+r),i===In)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(z.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),vi(l,o.getCompare())}else return In;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new z(e.name,l))),a.insert(e,e.node)}});return new It(s,this.indexSet_)}removeFromIndexes(e,n){const s=fi(this.indexes_,i=>{if(i===In)return i;{const r=n.get(e.name);return r?i.remove(new z(e.name,r)):i}});return new It(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let as;class ${constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Zu(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return as||(as=new $(new Ve(Bo),null,It.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||as}updatePriority(e){return this.children_.isEmpty()?this:new $(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?as:n}}getChild(e){const n=j(e);return n===null?this:this.getImmediateChild(n).getChild(ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new z(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?as:this.priorityNode_;return new $(i,o,r)}}updateChild(e,n){const s=j(e);if(s===null)return n;{I(j(e)!==".priority"||zt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ue(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(me,(o,l)=>{n[o]=l.val(e),s++,r&&$.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ju(this.getPriority().val())+":"),this.forEachChild(me,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Su(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new z(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,z.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bs?-1:0}withIndex(e){if(e===Dn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new $(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Dn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(me),i=n.getIterator(me);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Dn?null:this.indexMap_.get(e.toString())}}$.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mv extends ${constructor(){super(new Ve(Bo),$.EMPTY_NODE,It.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return $.EMPTY_NODE}isEmpty(){return!1}}const Bs=new mv;Object.defineProperties(z,{MIN:{value:new z(Vn,$.EMPTY_NODE)},MAX:{value:new z(fn,Bs)}});Xu.__EMPTY_NODE=$.EMPTY_NODE;Te.__childrenNodeConstructor=$;uv(Bs);dv(Bs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=!0;function Re(t,e=null){if(t===null)return $.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Te(n,Re(e))}if(!(t instanceof Array)&&gv){const n=[];let s=!1;if(Ge(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Re(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new z(o,a)))}}),n.length===0)return $.EMPTY_NODE;const r=vi(n,cv,o=>o.name,Bo);if(s){const o=vi(n,me.getCompare());return new $(r,Re(e),new It({".priority":o},{".priority":me}))}else return new $(r,Re(e),It.Default)}else{let n=$.EMPTY_NODE;return Ge(t,(s,i)=>{if(Nt(t,s)&&s.substring(0,1)!=="."){const r=Re(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Re(e))}}hv(Re);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv extends Ki{constructor(e){super(),this.indexPath_=e,I(!K(e)&&j(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Xn(e.name,n.name):r}makePost(e,n){const s=Re(e),i=$.EMPTY_NODE.updateChild(this.indexPath_,s);return new z(n,i)}maxPost(){const e=$.EMPTY_NODE.updateChild(this.indexPath_,Bs);return new z(fn,e)}toString(){return qu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv extends Ki{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Xn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const s=Re(e);return new z(n,s)}toString(){return".value"}}const bv=new yv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(t){return{type:"value",snapshotNode:t}}function jn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ns(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ks(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Cv(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Ns(n,l)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(jn(n,s)):o.trackChildChange(ks(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(me,(i,r)=>{n.hasChild(i)||s.trackChildChange(Ns(i,r))}),n.isLeafNode()||n.forEachChild(me,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ks(i,r,o))}else s.trackChildChange(jn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?$.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.indexedFilter_=new Uo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=As.getStartPost_(e),this.endPost_=As.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new z(n,s))||(s=$.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=$.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority($.EMPTY_NODE);const r=this;return n.forEachChild(me,(o,l)=>{r.matches(new z(o,l))||(i=i.updateImmediateChild(o,$.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new As(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new z(n,s))||(s=$.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=$.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=$.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority($.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,$.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const l=e;I(l.numChildren()===this.limit_,"");const a=new z(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(ks(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Ns(n,h));const y=l.updateImmediateChild(n,$.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(jn(d.name,d.node)),y.updateImmediateChild(d.name,d.node)):y}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Ns(c.name,c.node)),r.trackChildChange(jn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,$.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Vn}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===me}copy(){const e=new Ho;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function wv(t){return t.loadsAllData()?new Uo(t.getIndex()):t.hasLimit()?new Ev(t):new As(t)}function Aa(t){const e={};if(t.isDefault())return e;let n;if(t.index_===me?n="$priority":t.index_===bv?n="$value":t.index_===Dn?n="$key":(I(t.index_ instanceof vv,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ee(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ee(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ee(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ee(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ee(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Oa(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==me&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends zu{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=$s("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=yi.getListenId_(e,s),l={};this.listens_[o]=l;const a=Aa(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Wn(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=yi.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Aa(e._queryParams),s=e._path.toString(),i=new ji;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Z_(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Ts(l.responseText)}catch{Ke("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Ke("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(){this.rootNode_=$.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(){return{value:null,children:new Map}}function sh(t,e,n){if(K(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=j(e);t.children.has(s)||t.children.set(s,bi());const i=t.children.get(s);e=ue(e),sh(i,e,n)}}function Jr(t,e,n){t.value!==null?n(e,t.value):Sv(t,(s,i)=>{const r=new oe(e.toString()+"/"+s);Jr(i,r,n)})}function Sv(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ge(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=10*1e3,xv=30*1e3,Rv=5*60*1e3;class Pv{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Tv(e);const s=Da+(xv-Da)*Math.random();_s(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ge(e,(i,r)=>{r>0&&Nt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),_s(this.reportStats_.bind(this),Math.floor(Math.random()*2*Rv))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ct||(ct={}));function ih(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Wo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=ct.ACK_USER_WRITE,this.source=ih()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new oe(e));return new Ci(Z(),n,this.revert)}}else return I(j(this.path)===e,"operationForChild called for unrelated child."),new Ci(ue(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n){this.source=e,this.path=n,this.type=ct.LISTEN_COMPLETE}operationForChild(e){return K(this.path)?new Os(this.source,Z()):new Os(this.source,ue(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=ct.OVERWRITE}operationForChild(e){return K(this.path)?new pn(this.source,Z(),this.snap.getImmediateChild(e)):new pn(this.source,ue(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=ct.MERGE}operationForChild(e){if(K(this.path)){const n=this.children.subtree(new oe(e));return n.isEmpty()?null:n.value?new pn(this.source,Z(),n.value):new Ds(this.source,Z(),n)}else return I(j(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ds(this.source,ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const n=j(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function kv(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Cv(o.childName,o.snapshotNode))}),cs(t,i,"child_removed",e,s,n),cs(t,i,"child_added",e,s,n),cs(t,i,"child_moved",r,s,n),cs(t,i,"child_changed",e,s,n),cs(t,i,"value",e,s,n),i}function cs(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>Ov(t,l,a)),o.forEach(l=>{const a=Av(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Av(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Ov(t,e,n){if(e.childName==null||n.childName==null)throw Qn("Should only compare child_ events.");const s=new z(e.childName,e.snapshotNode),i=new z(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(t,e){return{eventCache:t,serverCache:e}}function ms(t,e,n,s){return Gi(new Kt(e,n,s),t.serverCache)}function rh(t,e,n,s){return Gi(t.eventCache,new Kt(e,n,s))}function Ei(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function _n(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vr;const Dv=()=>(vr||(vr=new Ve(yg)),vr);class he{constructor(e,n=Dv()){this.value=e,this.children=n}static fromObject(e){let n=new he(null);return Ge(e,(s,i)=>{n=n.set(new oe(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(K(e))return null;{const s=j(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ue(e),n);return r!=null?{path:we(new oe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const n=j(e),s=this.children.get(n);return s!==null?s.subtree(ue(e)):new he(null)}}set(e,n){if(K(e))return new he(n,this.children);{const s=j(e),r=(this.children.get(s)||new he(null)).set(ue(e),n),o=this.children.insert(s,r);return new he(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new he(null):new he(null,this.children);{const n=j(e),s=this.children.get(n);if(s){const i=s.remove(ue(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new he(null):new he(this.value,r)}else return this}}get(e){if(K(e))return this.value;{const n=j(e),s=this.children.get(n);return s?s.get(ue(e)):null}}setTree(e,n){if(K(e))return n;{const s=j(e),r=(this.children.get(s)||new he(null)).setTree(ue(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new he(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(we(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(K(e))return null;{const r=j(e),o=this.children.get(r);return o?o.findOnPath_(ue(e),we(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,s){if(K(e))return this;{this.value&&s(n,this.value);const i=j(e),r=this.children.get(i);return r?r.foreachOnPath_(ue(e),we(n,i),s):new he(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(we(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.writeTree_=e}static empty(){return new ft(new he(null))}}function gs(t,e,n){if(K(e))return new ft(new he(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=$e(i,e);return r=r.updateChild(o,n),new ft(t.writeTree_.set(i,r))}else{const i=new he(n),r=t.writeTree_.setTree(e,i);return new ft(r)}}}function Ma(t,e,n){let s=t;return Ge(n,(i,r)=>{s=gs(s,we(e,i),r)}),s}function La(t,e){if(K(e))return ft.empty();{const n=t.writeTree_.setTree(e,new he(null));return new ft(n)}}function Zr(t,e){return yn(t,e)!=null}function yn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild($e(n.path,e)):null}function Fa(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(me,(s,i)=>{e.push(new z(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new z(s,i.value))}),e}function Wt(t,e){if(K(e))return t;{const n=yn(t,e);return n!=null?new ft(new he(n)):new ft(t.writeTree_.subtree(e))}}function eo(t){return t.writeTree_.isEmpty()}function zn(t,e){return oh(Z(),t.writeTree_,e)}function oh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(I(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=oh(we(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(we(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t,e){return uh(e,t)}function Mv(t,e,n,s,i){I(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=gs(t.visibleWrites,e,n)),t.lastWriteId=s}function Lv(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Fv(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&$v(l,s.path)?i=!1:at(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Bv(t),!0;if(s.snap)t.visibleWrites=La(t.visibleWrites,s.path);else{const l=s.children;Ge(l,a=>{t.visibleWrites=La(t.visibleWrites,we(s.path,a))})}return!0}else return!1}function $v(t,e){if(t.snap)return at(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&at(we(t.path,n),e))return!0;return!1}function Bv(t){t.visibleWrites=lh(t.allWrites,Uv,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Uv(t){return t.visible}function lh(t,e,n){let s=ft.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)at(n,o)?(l=$e(n,o),s=gs(s,l,r.snap)):at(o,n)&&(l=$e(o,n),s=gs(s,Z(),r.snap.getChild(l)));else if(r.children){if(at(n,o))l=$e(n,o),s=Ma(s,l,r.children);else if(at(o,n))if(l=$e(o,n),K(l))s=Ma(s,Z(),r.children);else{const a=Wn(r.children,j(l));if(a){const c=a.getChild(ue(l));s=gs(s,Z(),c)}}}else throw Qn("WriteRecord should have .snap or .children")}}return s}function ah(t,e,n,s,i){if(!s&&!i){const r=yn(t.visibleWrites,e);if(r!=null)return r;{const o=Wt(t.visibleWrites,e);if(eo(o))return n;if(n==null&&!Zr(o,Z()))return null;{const l=n||$.EMPTY_NODE;return zn(o,l)}}}else{const r=Wt(t.visibleWrites,e);if(!i&&eo(r))return n;if(!i&&n==null&&!Zr(r,Z()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(at(c.path,e)||at(e,c.path))},l=lh(t.allWrites,o,e),a=n||$.EMPTY_NODE;return zn(l,a)}}}function Hv(t,e,n){let s=$.EMPTY_NODE;const i=yn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(me,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Wt(t.visibleWrites,e);return n.forEachChild(me,(o,l)=>{const a=zn(Wt(r,new oe(o)),l);s=s.updateImmediateChild(o,a)}),Fa(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Wt(t.visibleWrites,e);return Fa(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Wv(t,e,n,s,i){I(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=we(e,n);if(Zr(t.visibleWrites,r))return null;{const o=Wt(t.visibleWrites,r);return eo(o)?i.getChild(n):zn(o,i.getChild(n))}}function Vv(t,e,n,s){const i=we(e,n),r=yn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Wt(t.visibleWrites,i);return zn(o,s.getNode().getImmediateChild(n))}else return null}function jv(t,e){return yn(t.visibleWrites,e)}function zv(t,e,n,s,i,r,o){let l;const a=Wt(t.visibleWrites,e),c=yn(a,Z());if(c!=null)l=c;else if(n!=null)l=zn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function Kv(){return{visibleWrites:ft.empty(),allWrites:[],lastWriteId:-1}}function wi(t,e,n,s){return ah(t.writeTree,t.treePath,e,n,s)}function jo(t,e){return Hv(t.writeTree,t.treePath,e)}function $a(t,e,n,s){return Wv(t.writeTree,t.treePath,e,n,s)}function Ii(t,e){return jv(t.writeTree,we(t.treePath,e))}function Gv(t,e,n,s,i,r){return zv(t.writeTree,t.treePath,e,n,s,i,r)}function zo(t,e,n){return Vv(t.writeTree,t.treePath,e,n)}function ch(t,e){return uh(we(t.treePath,e),t.writeTree)}function uh(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ks(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ns(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,jn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ks(s,e.snapshotNode,i.oldSnap));else throw Qn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const hh=new Yv;class Ko{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Kt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:_n(this.viewCache_),r=Gv(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(t){return{filter:t}}function Xv(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Jv(t,e,n,s,i){const r=new qv;let o,l;if(n.type===ct.OVERWRITE){const c=n;c.source.fromUser?o=to(t,e,c.path,c.snap,s,i,r):(I(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!K(c.path),o=Si(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===ct.MERGE){const c=n;c.source.fromUser?o=ey(t,e,c.path,c.children,s,i,r):(I(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=no(t,e,c.path,c.children,s,i,l,r))}else if(n.type===ct.ACK_USER_WRITE){const c=n;c.revert?o=sy(t,e,c.path,s,i,r):o=ty(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===ct.LISTEN_COMPLETE)o=ny(t,e,n.path,s,r);else throw Qn("Unknown operation type: "+n.type);const a=r.getChanges();return Zv(e,o,a),{viewCache:o,changes:a}}function Zv(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ei(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(nh(Ei(e)))}}function dh(t,e,n,s,i,r){const o=e.eventCache;if(Ii(s,n)!=null)return e;{let l,a;if(K(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=_n(e),u=c instanceof $?c:$.EMPTY_NODE,h=jo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=wi(s,_n(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=j(n);if(c===".priority"){I(zt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=$a(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ue(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=$a(s,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=zo(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return ms(e,l,o.isFullyInitialized()||K(n),t.filter.filtersNodes())}}function Si(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(K(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=j(n);if(!a.isCompleteForPath(n)&&zt(n)>1)return e;const m=ue(n),N=a.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=u.updatePriority(a.getNode(),N):c=u.updateChild(a.getNode(),_,N,m,hh,null)}const h=rh(e,c,a.isFullyInitialized()||K(n),u.filtersNodes()),d=new Ko(i,h,r);return dh(t,h,n,i,d,l)}function to(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new Ko(i,e,r);if(K(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=ms(e,c,!0,t.filter.filtersNodes());else{const h=j(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=ms(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=ue(n),_=l.getNode().getImmediateChild(h);let m;if(K(d))m=s;else{const y=u.getCompleteChild(h);y!=null?Gu(d)===".priority"&&y.getChild(Yu(d)).isEmpty()?m=y:m=y.updateChild(d,s):m=$.EMPTY_NODE}if(_.equals(m))a=e;else{const y=t.filter.updateChild(l.getNode(),h,m,d,u,o);a=ms(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Ba(t,e){return t.eventCache.isCompleteForChild(e)}function ey(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=we(n,a);Ba(e,j(u))&&(l=to(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=we(n,a);Ba(e,j(u))||(l=to(t,l,u,c,i,r,o))}),l}function Ua(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function no(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;K(n)?c=s:c=new he(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=Ua(t,_,d);a=Si(t,a,new oe(h),m,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),y=Ua(t,m,d);a=Si(t,a,new oe(h),y,i,r,o,l)}}),a}function ty(t,e,n,s,i,r,o){if(Ii(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(K(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Si(t,e,n,a.getNode().getChild(n),i,r,l,o);if(K(n)){let c=new he(null);return a.getNode().forEachChild(Dn,(u,h)=>{c=c.set(new oe(u),h)}),no(t,e,n,c,i,r,l,o)}else return e}else{let c=new he(null);return s.foreach((u,h)=>{const d=we(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),no(t,e,n,c,i,r,l,o)}}function ny(t,e,n,s,i){const r=e.serverCache,o=rh(e,r.getNode(),r.isFullyInitialized()||K(n),r.isFiltered());return dh(t,o,n,s,hh,i)}function sy(t,e,n,s,i,r){let o;if(Ii(s,n)!=null)return e;{const l=new Ko(s,e,i),a=e.eventCache.getNode();let c;if(K(n)||j(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=wi(s,_n(e));else{const h=e.serverCache.getNode();I(h instanceof $,"serverChildren would be complete if leaf node"),u=jo(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=j(n);let h=zo(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,ue(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,$.EMPTY_NODE,ue(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=wi(s,_n(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ii(s,Z())!=null,ms(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Uo(s.getIndex()),r=wv(s);this.processor_=Qv(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode($.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode($.EMPTY_NODE,l.getNode(),null),u=new Kt(a,o.isFullyInitialized(),i.filtersNodes()),h=new Kt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Gi(h,u),this.eventGenerator_=new Nv(this.query_)}get query(){return this.query_}}function ry(t){return t.viewCache_.serverCache.getNode()}function oy(t){return Ei(t.viewCache_)}function ly(t,e){const n=_n(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!K(e)&&!n.getImmediateChild(j(e)).isEmpty())?n.getChild(e):null}function Ha(t){return t.eventRegistrations_.length===0}function ay(t,e){t.eventRegistrations_.push(e)}function Wa(t,e,n){const s=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Va(t,e,n,s){e.type===ct.MERGE&&e.source.queryId!==null&&(I(_n(t.viewCache_),"We should always have a full cache before handling merges"),I(Ei(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Jv(t.processor_,i,e,n,s);return Xv(t.processor_,r.viewCache),I(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,fh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function cy(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(me,(r,o)=>{s.push(jn(r,o))}),n.isFullyInitialized()&&s.push(nh(n.getNode())),fh(t,s,n.getNode(),e)}function fh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return kv(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ti;class ph{constructor(){this.views=new Map}}function uy(t){I(!Ti,"__referenceConstructor has already been defined"),Ti=t}function hy(){return I(Ti,"Reference.ts has not been loaded"),Ti}function dy(t){return t.views.size===0}function Go(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return I(r!=null,"SyncTree gave us an op for an invalid query."),Va(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Va(o,e,n,s));return r}}function _h(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=wi(n,i?s:null),a=!1;l?a=!0:s instanceof $?(l=jo(n,s),a=!1):(l=$.EMPTY_NODE,a=!1);const c=Gi(new Kt(l,a,!1),new Kt(s,i,!1));return new iy(e,c)}return o}function fy(t,e,n,s,i,r){const o=_h(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),ay(o,n),cy(o,n)}function py(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Gt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Wa(c,n,s)),Ha(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Wa(a,n,s)),Ha(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Gt(t)&&r.push(new(hy())(e._repo,e._path)),{removed:r,events:o}}function mh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Vt(t,e){let n=null;for(const s of t.views.values())n=n||ly(s,e);return n}function gh(t,e){if(e._queryParams.loadsAllData())return Yi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function vh(t,e){return gh(t,e)!=null}function Gt(t){return Yi(t)!=null}function Yi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xi;function _y(t){I(!xi,"__referenceConstructor has already been defined"),xi=t}function my(){return I(xi,"Reference.ts has not been loaded"),xi}let gy=1;class ja{constructor(e){this.listenProvider_=e,this.syncPointTree_=new he(null),this.pendingWriteTree_=Kv(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function yh(t,e,n,s,i){return Mv(t.pendingWriteTree_,e,n,s,i),i?Hs(t,new pn(ih(),e,n)):[]}function an(t,e,n=!1){const s=Lv(t.pendingWriteTree_,e);if(Fv(t.pendingWriteTree_,e)){let r=new he(null);return s.snap!=null?r=r.set(Z(),!0):Ge(s.children,o=>{r=r.set(new oe(o),!0)}),Hs(t,new Ci(s.path,r,n))}else return[]}function Us(t,e,n){return Hs(t,new pn(Wo(),e,n))}function vy(t,e,n){const s=he.fromObject(n);return Hs(t,new Ds(Wo(),e,s))}function yy(t,e){return Hs(t,new Os(Wo(),e))}function by(t,e,n){const s=Yo(t,n);if(s){const i=Qo(s),r=i.path,o=i.queryId,l=$e(r,e),a=new Os(Vo(o),l);return Xo(t,r,a)}else return[]}function Ri(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||vh(o,e))){const a=py(o,e,n,s);dy(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>Gt(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=wy(d);for(let m=0;m<_.length;++m){const y=_[m],N=y.query,A=wh(t,y);t.listenProvider_.startListening(vs(N),Ms(t,N),A.hashFn,A.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(vs(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(Qi(d));t.listenProvider_.stopListening(vs(d),_)}))}Iy(t,c)}return l}function bh(t,e,n,s){const i=Yo(t,s);if(i!=null){const r=Qo(i),o=r.path,l=r.queryId,a=$e(o,e),c=new pn(Vo(l),a,n);return Xo(t,o,c)}else return[]}function Cy(t,e,n,s){const i=Yo(t,s);if(i){const r=Qo(i),o=r.path,l=r.queryId,a=$e(o,e),c=he.fromObject(n),u=new Ds(Vo(l),a,c);return Xo(t,o,u)}else return[]}function so(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const m=$e(d,i);r=r||Vt(_,m),o=o||Gt(_)});let l=t.syncPointTree_.get(i);l?(o=o||Gt(l),r=r||Vt(l,Z())):(l=new ph,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=$.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const y=Vt(m,Z());y&&(r=r.updateImmediateChild(_,y))}));const c=vh(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=Qi(e);I(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=Sy();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=qi(t.pendingWriteTree_,i);let h=fy(l,e,n,u,r,a);if(!c&&!o&&!s){const d=gh(l,e);h=h.concat(Ty(t,e,d))}return h}function qo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=$e(o,e),c=Vt(l,a);if(c)return c});return ah(i,e,r,n,!0)}function Ey(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=$e(c,n);s=s||Vt(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Vt(i,Z()):(i=new ph,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Kt(s,!0,!1):null,l=qi(t.pendingWriteTree_,e._path),a=_h(i,e,l,r?o.getNode():$.EMPTY_NODE,r);return oy(a)}function Hs(t,e){return Ch(e,t.syncPointTree_,null,qi(t.pendingWriteTree_,Z()))}function Ch(t,e,n,s){if(K(t.path))return Eh(t,e,n,s);{const i=e.get(Z());n==null&&i!=null&&(n=Vt(i,Z()));let r=[];const o=j(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=ch(s,o);r=r.concat(Ch(l,a,c,u))}return i&&(r=r.concat(Go(i,t,s,n))),r}}function Eh(t,e,n,s){const i=e.get(Z());n==null&&i!=null&&(n=Vt(i,Z()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=ch(s,o),u=t.operationForChild(o);u&&(r=r.concat(Eh(u,l,a,c)))}),i&&(r=r.concat(Go(i,t,s,n))),r}function wh(t,e){const n=e.query,s=Ms(t,n);return{hashFn:()=>(ry(e)||$.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?by(t,n._path,s):yy(t,n._path);{const r=Eg(i,n);return Ri(t,n,null,r)}}}}function Ms(t,e){const n=Qi(e);return t.queryToTagMap.get(n)}function Qi(t){return t._path.toString()+"$"+t._queryIdentifier}function Yo(t,e){return t.tagToQueryMap.get(e)}function Qo(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new oe(t.substr(0,e))}}function Xo(t,e,n){const s=t.syncPointTree_.get(e);I(s,"Missing sync point for query tag that we're tracking");const i=qi(t.pendingWriteTree_,e);return Go(s,n,i,null)}function wy(t){return t.fold((e,n,s)=>{if(n&&Gt(n))return[Yi(n)];{let i=[];return n&&(i=mh(n)),Ge(s,(r,o)=>{i=i.concat(o)}),i}})}function vs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(my())(t._repo,t._path):t}function Iy(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Qi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Sy(){return gy++}function Ty(t,e,n){const s=e._path,i=Ms(t,e),r=wh(t,n),o=t.listenProvider_.startListening(vs(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)I(!Gt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!K(c)&&u&&Gt(u))return[Yi(u).query];{let d=[];return u&&(d=d.concat(mh(u).map(_=>_.query))),Ge(h,(_,m)=>{d=d.concat(m)}),d}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(vs(u),Ms(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Jo(n)}node(){return this.node_}}class Zo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=we(this.path_,e);return new Zo(this.syncTree_,n)}node(){return qo(this.syncTree_,this.path_)}}const xy=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},za=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Ry(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Py(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Ry=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},Py=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&I(!1,"Unexpected increment value: "+s);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Ny=function(t,e,n,s){return el(e,new Zo(n,t),s)},Ih=function(t,e,n){return el(t,new Jo(e),n)};function el(t,e,n){const s=t.getPriority().val(),i=za(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=za(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Te(l,Re(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Te(i))),o.forEachChild(me,(l,a)=>{const c=el(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function nl(t,e){let n=e instanceof oe?e:new oe(e),s=t,i=j(n);for(;i!==null;){const r=Wn(s.node.children,i)||{children:{},childCount:0};s=new tl(i,s,r),n=ue(n),i=j(n)}return s}function Zn(t){return t.node.value}function Sh(t,e){t.node.value=e,io(t)}function Th(t){return t.node.childCount>0}function ky(t){return Zn(t)===void 0&&!Th(t)}function Xi(t,e){Ge(t.node.children,(n,s)=>{e(new tl(n,t,s))})}function xh(t,e,n,s){n&&!s&&e(t),Xi(t,i=>{xh(i,e,!0,s)}),n&&s&&e(t)}function Ay(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ws(t){return new oe(t.parent===null?t.name:Ws(t.parent)+"/"+t.name)}function io(t){t.parent!==null&&Oy(t.parent,t.name,t)}function Oy(t,e,n){const s=ky(n),i=Nt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,io(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,io(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=/[\[\].#$\/\u0000-\u001F\u007F]/,My=/[\[\].#$\u0000-\u001F\u007F]/,yr=10*1024*1024,Rh=function(t){return typeof t=="string"&&t.length!==0&&!Dy.test(t)},Ph=function(t){return typeof t=="string"&&t.length!==0&&!My.test(t)},Ly=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ph(t)},Nh=function(t,e,n,s){s&&e===void 0||sl(No(t,"value"),e,n)},sl=function(t,e,n){const s=n instanceof oe?new tv(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+nn(s));if(typeof e=="function")throw new Error(t+"contains a function "+nn(s)+" with contents = "+e.toString());if(Tu(e))throw new Error(t+"contains "+e.toString()+" "+nn(s));if(typeof e=="string"&&e.length>yr/3&&zi(e)>yr)throw new Error(t+"contains a string greater than "+yr+" utf8 bytes "+nn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ge(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Rh(o)))throw new Error(t+" contains an invalid key ("+o+") "+nn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);nv(s,o),sl(t,l,s),sv(s)}),i&&r)throw new Error(t+' contains ".value" child '+nn(s)+" in addition to actual children.")}},kh=function(t,e,n,s){if(!(s&&n===void 0)&&!Ph(n))throw new Error(No(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Fy=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),kh(t,e,n,s)},Ah=function(t,e){if(j(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},$y=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Rh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Ly(n))throw new Error(No(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function il(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Fo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Oh(t,e,n){il(t,n),Dh(t,s=>Fo(s,e))}function bt(t,e,n){il(t,n),Dh(t,s=>at(s,e)||at(e,s))}function Dh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Uy(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Uy(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();hn&&De("event: "+n.toString()),Jn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy="repo_interrupt",Wy=25;class Vy{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new By,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=bi(),this.transactionQueueTree_=new tl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function jy(t,e,n){if(t.stats_=Mo(t.repoInfo_),t.forceRestClient_||Tg())t.server_=new yi(t.repoInfo_,(s,i,r,o)=>{Ka(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ga(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ee(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new St(t.repoInfo_,e,(s,i,r,o)=>{Ka(t,s,i,r,o)},s=>{Ga(t,s)},s=>{zy(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=kg(t.repoInfo_,()=>new Pv(t.stats_,t.server_)),t.infoData_=new Iv,t.infoSyncTree_=new ja({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=Us(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ol(t,"connected",!1),t.serverSyncTree_=new ja({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);bt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Mh(t){const n=t.infoData_.getNode(new oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function rl(t){return xy({timestamp:Mh(t)})}function Ka(t,e,n,s,i){t.dataUpdateCount++;const r=new oe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=fi(n,c=>Re(c));o=Cy(t.serverSyncTree_,r,a,i)}else{const a=Re(n);o=bh(t.serverSyncTree_,r,a,i)}else if(s){const a=fi(n,c=>Re(c));o=vy(t.serverSyncTree_,r,a)}else{const a=Re(n);o=Us(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Zi(t,r)),bt(t.eventQueue_,l,o)}function Ga(t,e){ol(t,"connected",e),e===!1&&qy(t)}function zy(t,e){Ge(e,(n,s)=>{ol(t,n,s)})}function ol(t,e,n){const s=new oe("/.info/"+e),i=Re(n);t.infoData_.updateSnapshot(s,i);const r=Us(t.infoSyncTree_,s,i);bt(t.eventQueue_,s,r)}function Lh(t){return t.nextWriteId_++}function Ky(t,e,n){const s=Ey(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Re(i).withIndex(e._queryParams.getIndex());so(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Us(t.serverSyncTree_,e._path,r);else{const l=Ms(t.serverSyncTree_,e);o=bh(t.serverSyncTree_,e._path,r,l)}return bt(t.eventQueue_,e._path,o),Ri(t.serverSyncTree_,e,n,null,!0),r},i=>(Ji(t,"get for query "+Ee(e)+" failed: "+i),Promise.reject(new Error(i))))}function Gy(t,e,n,s,i){Ji(t,"set",{path:e.toString(),value:n,priority:s});const r=rl(t),o=Re(n,s),l=qo(t.serverSyncTree_,e),a=Ih(o,l,r),c=Lh(t),u=yh(t.serverSyncTree_,e,a,c,!0);il(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const m=d==="ok";m||Ke("set at "+e+" failed: "+d);const y=an(t.serverSyncTree_,c,!m);bt(t.eventQueue_,e,y),Xy(t,i,d,_)});const h=Hh(t,e);Zi(t,h),bt(t.eventQueue_,h,[])}function qy(t){Ji(t,"onDisconnectEvents");const e=rl(t),n=bi();Jr(t.onDisconnect_,Z(),(i,r)=>{const o=Ny(i,r,t.serverSyncTree_,e);sh(n,i,o)});let s=[];Jr(n,Z(),(i,r)=>{s=s.concat(Us(t.serverSyncTree_,i,r));const o=Hh(t,i);Zi(t,o)}),t.onDisconnect_=bi(),bt(t.eventQueue_,Z(),s)}function Yy(t,e,n){let s;j(e._path)===".info"?s=so(t.infoSyncTree_,e,n):s=so(t.serverSyncTree_,e,n),Oh(t.eventQueue_,e._path,s)}function qa(t,e,n){let s;j(e._path)===".info"?s=Ri(t.infoSyncTree_,e,n):s=Ri(t.serverSyncTree_,e,n),Oh(t.eventQueue_,e._path,s)}function Qy(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Hy)}function Ji(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),De(n,...e)}function Xy(t,e,n,s){e&&Jn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Fh(t,e,n){return qo(t.serverSyncTree_,e,n)||$.EMPTY_NODE}function ll(t,e=t.transactionQueueTree_){if(e||er(t,e),Zn(e)){const n=Bh(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Jy(t,Ws(e),n)}else Th(e)&&Xi(e,n=>{ll(t,n)})}function Jy(t,e,n){const s=n.map(c=>c.currentWriteId),i=Fh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];I(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=$e(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Ji(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(an(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();er(t,nl(t.transactionQueueTree_,e)),ll(t,t.transactionQueueTree_),bt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Jn(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ke("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Zi(t,e)}},o)}function Zi(t,e){const n=$h(t,e),s=Ws(n),i=Bh(t,n);return Zy(t,i,s),s}function Zy(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=$e(n,a.path);let u=!1,h;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(an(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Wy)u=!0,h="maxretry",i=i.concat(an(t.serverSyncTree_,a.currentWriteId,!0));else{const d=Fh(t,a.path,o);a.currentInputSnapshot=d;const _=e[l].update(d.val());if(_!==void 0){sl("transaction failed: Data returned ",_,a.path);let m=Re(_);typeof _=="object"&&_!=null&&Nt(_,".priority")||(m=m.updatePriority(d.getPriority()));const N=a.currentWriteId,A=rl(t),B=Ih(m,d,A);a.currentOutputSnapshotRaw=m,a.currentOutputSnapshotResolved=B,a.currentWriteId=Lh(t),o.splice(o.indexOf(N),1),i=i.concat(yh(t.serverSyncTree_,a.path,B,a.currentWriteId,a.applyLocally)),i=i.concat(an(t.serverSyncTree_,N,!0))}else u=!0,h="nodata",i=i.concat(an(t.serverSyncTree_,a.currentWriteId,!0))}bt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}er(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Jn(s[l]);ll(t,t.transactionQueueTree_)}function $h(t,e){let n,s=t.transactionQueueTree_;for(n=j(e);n!==null&&Zn(s)===void 0;)s=nl(s,n),e=ue(e),n=j(e);return s}function Bh(t,e){const n=[];return Uh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Uh(t,e,n){const s=Zn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Xi(e,i=>{Uh(t,i,n)})}function er(t,e){const n=Zn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Sh(e,n.length>0?n:void 0)}Xi(e,s=>{er(t,s)})}function Hh(t,e){const n=Ws($h(t,e)),s=nl(t.transactionQueueTree_,e);return Ay(s,i=>{br(t,i)}),br(t,s),xh(s,i=>{br(t,i)}),n}function br(t,e){const n=Zn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(an(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Sh(e,void 0):n.length=r+1,bt(t.eventQueue_,Ws(e),i);for(let o=0;o<s.length;o++)Jn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function tb(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ya=function(t,e){const n=nb(t),s=n.namespace;n.domain==="firebase.com"&&Rt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Rt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||gg();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new $u(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new oe(n.pathString)}},nb=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=eb(t.substring(u,h)));const d=tb(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",sb=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Qa.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Qa.charAt(e[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ee(this.snapshot.exportVal())}}class Vh{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return K(this._path)?null:Gu(this._path)}get ref(){return new Ct(this._repo,this._path)}get _queryIdentifier(){const e=Oa(this._queryParams),n=Oo(e);return n==="{}"?"default":n}get _queryObject(){return Oa(this._queryParams)}isEqual(e){if(e=vn(e),!(e instanceof al))return!1;const n=this._repo===e._repo,s=Fo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ev(this._path)}}class Ct extends al{constructor(e,n){super(e,n,new Ho,!1)}get parent(){const e=Yu(this._path);return e===null?null:new Ct(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Kn{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new oe(e),s=Tt(this.ref,e);return new Kn(this._node.getChild(n),s,me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Kn(i,Tt(this.ref,s),me)))}hasChild(e){const n=new oe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Pi(t,e){return t=vn(t),t._checkNotDeleted("ref"),e!==void 0?Tt(t._root,e):t._root}function Tt(t,e){return t=vn(t),j(t._path)===null?Fy("child","path",e,!1):kh("child","path",e,!1),new Ct(t._repo,we(t._path,e))}function ib(t,e){t=vn(t),Ah("push",t._path),Nh("push",e,t._path,!0);const n=Mh(t._repo),s=sb(n),i=Tt(t,s),r=Tt(t,s);let o;return e!=null?o=cl(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function cl(t,e){t=vn(t),Ah("set",t._path),Nh("set",e,t._path,!1);const n=new ji;return Gy(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Cr(t){t=vn(t);const e=new jh(()=>{}),n=new tr(e);return Ky(t._repo,t,n).then(s=>new Kn(s,new Ct(t._repo,t._path),t._queryParams.getIndex()))}class tr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Wh("value",this,new Kn(e.snapshotNode,new Ct(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Vh(this,e,n):null}matches(e){return e instanceof tr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class ul{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Vh(this,e,n):null}createEvent(e,n){I(e.childName!=null,"Child events should have a childName.");const s=Tt(new Ct(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Wh(e.type,this,new Kn(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ul?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function rb(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(u,h)=>{qa(t._repo,t,l),a(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new jh(n,r||void 0),l=e==="value"?new tr(o):new ul(e,o);return Yy(t._repo,t,l),()=>qa(t._repo,t,l)}function ob(t,e,n,s){return rb(t,"value",e,n,s)}uy(Ct);_y(Ct);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb="FIREBASE_DATABASE_EMULATOR_HOST",ro={};let ab=!1;function cb(t,e,n,s){t.repoInfo_=new $u(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),s&&(t.authTokenProvider_=s)}function ub(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Rt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),De("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ya(r,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[lb]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Ya(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new On(On.OWNER):new Rg(t.name,t.options,e);$y("Invalid Firebase Database URL",o),K(o.path)||Rt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=db(l,t,u,new xg(t.name,n));return new fb(h,t)}function hb(t,e){const n=ro[e];(!n||n[t.key]!==t)&&Rt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Qy(t),delete n[t.key]}function db(t,e,n,s){let i=ro[e.name];i||(i={},ro[e.name]=i);let r=i[t.toURLString()];return r&&Rt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Vy(t,ab,n,s),i[t.toURLString()]=r,r}class fb{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(jy(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ct(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(hb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Rt("Cannot call "+e+" on a deleted database.")}}function ii(t=eg(),e){const n=Qm(t,"database").getImmediate({identifier:e}),s=z_("database");return s&&pb(n,...s),n}function pb(t,e,n,s={}){t=vn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Rt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Rt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new On(On.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:G_(s.mockUserToken,t.app.options.projectId);r=new On(o)}cb(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(t){dg(Zm),_i(new xs("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return ub(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),kn(ma,ga,t),kn(ma,ga,"esm2017")}St.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};St.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};_b();const mb={class:"chat-box"},gb={class:"chat-img"},vb=["src"],yb={class:"chat-font"},bb={class:"chat-time"},Cb={class:"chat-text"},Eb=["onKeyup"],wb={__name:"Chat",setup(t){const e=gn(),s=Ao({apiKey:"AIzaSyBZbHSiAQrJktVbyRoJ8i6EwCLns-TMmfk",authDomain:"mygame-xian.firebaseapp.com",projectId:"mygame-xian",storageBucket:"mygame-xian.appspot.com",messagingSenderId:"496921879585",appId:"1:496921879585:web:34ead29c0601e5c592af60"}),i=ii(s),r=Pi(i,"Chat/"),o=Ne("");function l(){const h=ib(r).key;if(!o.value.trim())return;let d=new Date;cl(Pi(i,`Chat/${h}`),{name:e.Player.name,message:o.value,icon:e.Player.img,time:d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate()+" -"+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+"-"}),o.value=""}function a(){let h=document.getElementById("chat-home"),d;clearTimeout(d),d=setTimeout(()=>{h.scrollTop=h.scrollHeight},100)}const c=Ne([]);ob(r,h=>{c.value=h.val(),a()}),Nn(e,()=>{a()});const u=Ne(!1);return(h,d)=>(je(),ze(et,null,[E("button",{class:"chat-open",onClick:d[0]||(d[0]=_=>u.value=!u.value)},"\u8DE8\u754C\u50B3\u8A0A"),E("div",{id:"chat-home",class:ke({chat_open_anm:u.value,chat_close_anm:!u.value})},[(je(!0),ze(et,null,pf(c.value,(_,m)=>(je(),ze("div",mb,[E("div",gb,[E("img",{src:_.icon,alt:""},null,8,vb)]),E("div",yb,[E("span",null,be(_.name)+"\uFF1A",1),E("p",bb,be(_.time),1),E("p",Cb,be(_.message),1)])]))),256))],2),E("div",{class:ke(["chat-input",{display_none:!u.value}])},[xr(E("input",{type:"text","onUpdate:modelValue":d[1]||(d[1]=_=>o.value=_),onKeyup:Kc(l,["enter"])},null,40,Eb),[[Mr,o.value]]),E("button",{onClick:l},"\u9001\u51FA")],2)],64))}},Ib=qt(wb,[["__scopeId","data-v-ad5a7362"]]);const Sb={__name:"Nav",setup(t){return(e,n)=>(je(),ze("nav",null,[ie(te(en),{to:"/home"},{default:Jt(()=>[gt("\u6D1E\u5E9C")]),_:1}),ie(te(en),{to:"/make"},{default:Jt(()=>[gt("\u935B\u9020")]),_:1}),ie(te(en),{to:"/alchemy"},{default:Jt(()=>[gt("\u7149\u4E39")]),_:1}),ie(te(en),{to:"/sublimation"},{default:Jt(()=>[gt("\u4FEE\u7149")]),_:1}),ie(te(en),{to:"/pack"},{default:Jt(()=>[gt("\u884C\u56CA")]),_:1}),ie(te(en),{to:"/start"},{default:Jt(()=>[gt("\u65C5\u9014")]),_:1})]))}},es=qt(Sb,[["__scopeId","data-v-6baad6d0"]]);const Tb={class:"player-home"},xb={class:"player-img"},Rb=["src"],Pb={class:"profile-box"},Nb={class:"profile-lv"},kb={class:"profile-data"},Ab={class:"profile-data"},Ob={class:"profile-data"},Db={__name:"Info",setup(t){const e=gn();return(n,s)=>(je(),ze("div",Tb,[E("div",xb,[E("img",{src:te(e).Player.img,alt:""},null,8,Rb)]),E("div",Pb,[E("div",Nb,[E("span",null,be(te(e).Player.name),1),E("p",null,"\u4F4D\u9762\u788E\u7247\uFF1A"+be(te(e).Player.fragments),1),E("p",null,"\u5F71\u97FF\u5EA6\uFF1A"+be(te(e).Player.interfere),1)]),E("div",kb,"\u9748\u529B\uFF1A"+be(te(e).Player.power),1),E("div",Ab,"\u52AB\u904B\uFF1A"+be(te(e).Player.probability)+"%",1),E("div",Ob,"\u9748\u77F3\uFF1A"+be(te(e).Player.money),1)])]))}},Mb=qt(Db,[["__scopeId","data-v-e4424a11"]]),Lb={id:"center_wrapper",class:"flex_center"},Fb={id:"wrapper"},$b={class:"home_top"},Bb={id:"Info"},Ub={id:"Chat"},Hb={__name:"HomeView",setup(t){return(e,n)=>(je(),ze("div",Lb,[E("div",Fb,[E("div",$b,[E("div",Bb,[ie(Mb)]),E("div",Ub,[ie(Ib)])]),ie(es)])]))}},Wb={id:"center_wrapper",class:"flex_center"},Vb={id:"wrapper"},jb=E("div",{class:"home_top"},null,-1),zb={__name:"AlchemyView",setup(t){const e=gn(),n=Vi();function s(){e.Player.meditate&&(alert("\u6253\u5750\u4E2D\uFF0C\u4E0D\u53EF\u96A8\u610F\u52D5\u4F5C"),n.replace({path:"/sublimation"}))}return s(),(i,r)=>(je(),ze("div",Wb,[E("div",Vb,[jb,ie(es)])]))}},Kb={id:"center_wrapper",class:"flex_center"},Gb={id:"wrapper"},qb=E("div",{class:"home_top"},null,-1),Yb={__name:"MakeView",setup(t){const e=gn(),n=Vi();function s(){e.Player.meditate&&(alert("\u6253\u5750\u4E2D\uFF0C\u4E0D\u53EF\u96A8\u610F\u52D5\u4F5C"),n.replace({path:"/sublimation"}))}return s(),(i,r)=>(je(),ze("div",Kb,[E("div",Gb,[qb,ie(es)])]))}},Pe="/Vue3-Game-Xian/assets/nzwu2vpc3gc.9d50232c.jpeg";const Qb={id:"center_wrapper",class:"flex_center"},Xb={id:"wrapper"},Jb={class:"home_top"},Zb={class:"type"},eC=Lf('<div class="pack-boxhome" data-v-3c908b93><div class="pack-boxtop" data-v-3c908b93><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>1</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>7</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>99</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>99</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>99</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>99</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>99</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>75</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>55</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>15</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>9</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>22</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>3</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>65</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>9</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>1</p></div></div></div></div></div><div class="pack-infohme" data-v-3c908b93><div class="pack-info" data-v-3c908b93><div class="pack-info-img" data-v-3c908b93><div class="info-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93><div class="info-num" data-v-3c908b93><p data-v-3c908b93>2</p></div></div></div><div class="pack-info-text" data-v-3c908b93><div class="pack-info-name" data-v-3c908b93> \u7834\u5883\u4ED9\u4E39 </div><div class="pack-info-illustrate" data-v-3c908b93> \u4E0A\u53E4\u4ED9\u754C\u79D8\u4E39\uFF0C\u5403\u4E00\u9846\u5C31\u5347\u4ED9 </div><div class="pack-info-note" data-v-3c908b93> \u751F\u6B7B\u7531\u5929\uFF0C\u751F\u9084\u73870.001% </div></div><div class="pack-info-use" data-v-3c908b93><button data-v-3c908b93>\u4F7F\u7528</button></div></div></div>',2),tC={__name:"PackView",setup(t){const e=Ne("all");return(n,s)=>(je(),ze("div",Qb,[E("div",Xb,[E("div",Jb,[E("div",Zb,[E("button",{onClick:s[0]||(s[0]=i=>e.value="all"),class:ke({now_botton:e.value=="all"})},"\u5168\u90E8",2),E("button",{onClick:s[1]||(s[1]=i=>e.value="\u6D88\u8017"),class:ke({now_botton:e.value=="\u6D88\u8017"})},"\u6D88\u8017",2),E("button",{onClick:s[2]||(s[2]=i=>e.value="\u6CD5\u5177"),class:ke({now_botton:e.value=="\u6CD5\u5177"})},"\u6CD5\u5177",2),E("button",{onClick:s[3]||(s[3]=i=>e.value="\u6750\u6599"),class:ke({now_botton:e.value=="\u6750\u6599"})},"\u6750\u6599",2),E("button",{onClick:s[4]||(s[4]=i=>e.value="\u4F4D\u9762"),class:ke({now_botton:e.value=="\u4F4D\u9762"})},"\u4F4D\u9762",2)]),eC]),ie(es)])]))}},nC=qt(tC,[["__scopeId","data-v-3c908b93"]]),sC="/Vue3-Game-Xian/assets/5BIRzwqCxR.af57560a.png";const ts=t=>(wo("data-v-230fe933"),t=t(),Io(),t),iC={id:"center_wrapper",class:"flex_center"},rC={id:"wrapper"},oC={class:"home_top"},lC={class:"info"},aC={class:"sub-absolute"},cC=ts(()=>E("p",null,null,-1)),uC=ts(()=>E("span",null,"\u6B63\u5728\u6253\u5750",-1)),hC={class:"sub-button"},dC=ts(()=>E("div",{class:"character-img"},[E("img",{src:sC,alt:""})],-1)),fC=ts(()=>E("p",null,"\u7D50\u7B97\uFF1A",-1)),pC=ts(()=>E("p",null,"\u9EDE\u64CA\u95DC\u9589",-1)),_C=ts(()=>E("p",null,"\u60A8\u78BA\u5B9A\u8981\u958B\u59CB\u6E21\u52AB\u55CE\uFF1F",-1)),mC={__name:"SublimationView",setup(t){const e=gn();function n(){e.Player.meditate&&(window.setTime=setInterval(()=>{u()},1e3))}n();function s(){if(e.Player.meditate){clearInterval(setTime),e.Player.meditate=!e.Player.meditate;let m=0;switch(e.Player.lv){case"\u7DF4\u9AD4":m+=c.value,r.value=c.value;break;case"\u7149\u6C23":m+=c.value*2,r.value=c.value*2;break;case"\u7BC9\u57FA":m+=c.value*4,r.value=c.value*4;break;case"\u7D50\u4E39":m+=c.value*6,r.value=c.value*6;break;case"\u91D1\u4E39":m+=c.value*8,r.value=c.value*8;break;case"\u5143\u5B30":m+=c.value*10,r.value=c.value*10;break;case"\u5316\u795E":m+=c.value*15,r.value=c.value*15;break;case"\u771F\u4ED9":m+=c.value*25,r.value=c.value*25;break;default:console.log("\u5075\u6E2C\u5931\u6557");break}switch(e.Player.props){case"\u795E\u5143\u4E38":m+=c.value*10,o.value=c.value*10;break;default:console.log("\u5075\u6E2C\u5931\u6557");break}l.value=r.value+o.value,i.value=!0,e.Player.power+=m,c.value=0}else{c.value=0;let m=new Date;e.Player.meditateStatrt=m.getTime(),e.Player.meditateStatrtTime=m.getFullYear()+"/"+(m.getMonth()+1)+"/"+m.getDate()+" "+m.getHours()+":"+m.getMinutes()+":"+m.getSeconds(),e.Player.meditate=!e.Player.meditate,window.setTime=setInterval(()=>{u()},1e3)}}const i=Ne(!1),r=Ne(0),o=Ne(0),l=Ne(0);function a(){switch(e.Player.lv){case"\u7DF4\u9AD4":e.Player.power+=2;break;case"\u7149\u6C23":e.Player.power+=4;break;case"\u7BC9\u57FA":e.Player.power+=6;break;case"\u7D50\u4E39":e.Player.power+=10;break;case"\u91D1\u4E39":e.Player.power+=16;break;case"\u5143\u5B30":e.Player.power+=24;break;case"\u5316\u795E":e.Player.power+=34;break;case"\u771F\u4ED9":e.Player.power+=50;break;default:console.log("\u5075\u6E2C\u5931\u6557");break}switch(e.Player.props){case"\u795E\u5143\u4E38":e.Player.power+=1;break;default:console.log("\u5075\u6E2C\u5931\u6557");break}}const c=Ne(0);function u(){let y=new Date().getTime()-e.Player.meditateStatrt;c.value=Math.floor(y/1e3)}const h=Ne(!1);function d(){if(e.Player.meditate){alert("\u6B63\u5728\u6253\u5750\uFF0C\u7121\u6CD5\u9032\u884C\u6E21\u52AB");return}else i.value=!1,h.value=!0}function _(){if(e.Player.meditate){alert("\u6B63\u5728\u6253\u5750\uFF0C\u7121\u6CD5\u9032\u884C\u6E21\u52AB");return}else alert("\uFF27\uFF2F\uFF27\uFF2F");i.value=!1,h.value=!1}return(m,y)=>(je(),ze("div",iC,[E("div",rC,[E("div",oC,[E("div",lC,[E("span",null,be(te(e).Player.name)+" - "+be(te(e).Player.lv)+"\u5883",1),gt(" -"),E("p",null,"\u9748\u529B\uFF1A"+be(te(e).Player.power),1),gt("- "),E("p",null,"\u52AB\u904B\uFF1A"+be(te(e).Player.probability)+"%",1),gt("- ")]),E("div",aC,[E("div",{class:ke(["sub-meditate",{display_none:!te(e).Player.meditate}])},[cC,uC,E("p",null,"\u958B\u59CB\u65E5\uFF1A"+be(te(e).Player.meditateStatrtTime),1),E("p",null,"\u7D2F\u7A4D\u6642\u9593\uFF1A"+be(c.value)+" \u79D2",1)],2),E("div",hC,[E("button",{class:ke({display_none:te(e).Player.meditate}),onClick:y[0]||(y[0]=N=>s())},"\u6253\u5750",2),E("button",{class:ke({display_none:!te(e).Player.meditate}),onClick:y[1]||(y[1]=N=>s())},"\u6253\u5750\u7D50\u675F",2),E("button",{onClick:y[2]||(y[2]=N=>a()),class:"sub-power"},"\u935B\u7DF4"),E("button",{onClick:y[3]||(y[3]=N=>d())},"\u6E21\u52AB")])]),dC,E("div",{class:ke([{display_none:!i.value},"meditate"]),onClick:y[4]||(y[4]=N=>i.value=!1)},[fC,E("p",null,"\u5883\u754C\u9748\u529B\uFF1A"+be(r.value),1),E("p",null,"\u8F14\u5177\u9748\u529B\uFF1A"+be(o.value),1),E("p",null,"\u7E3D\u8A08\uFF1A"+be(l.value),1),pC],2),E("div",{class:ke(["meditate",{display_none:!h.value}])},[_C,E("p",null,"\u7576\u524D\u52AB\u904B\u70BA\uFF1A"+be(te(e).Player.probability)+"%",1),E("div",null,[E("button",{onClick:y[5]||(y[5]=N=>_())},"\u78BA\u5B9A"),E("button",{onClick:y[6]||(y[6]=N=>h.value=!1)},"\u53D6\u6D88")])],2)]),ie(es)])]))}},gC=qt(mC,[["__scopeId","data-v-230fe933"]]),vC={id:"center_wrapper",class:"flex_center"},yC={id:"wrapper"},bC=E("div",{class:"home_top"},null,-1),CC={__name:"StartView",setup(t){const e=gn(),n=Vi();function s(){e.Player.meditate&&(alert("\u6253\u5750\u4E2D\uFF0C\u4E0D\u53EF\u96A8\u610F\u52D5\u4F5C"),n.replace({path:"/sublimation"}))}return s(),(i,r)=>(je(),ze("div",vC,[E("div",yC,[bC,ie(es)])]))}};const hl=t=>(wo("data-v-99202399"),t=t(),Io(),t),EC={id:"center_wrapper",class:"flex_center"},wC={id:"wrapper"},IC={class:"login-home"},SC={class:"login-home"},TC=hl(()=>E("h3",null,"*\u5E33\u865F\u8ACB\u52FF\u53C3\u96DC\u7B26\u865F*",-1)),xC={class:"login-box"},RC=hl(()=>E("p",null,"\u5E33\u865F\uFF1A",-1)),PC={class:"login-box"},NC=hl(()=>E("p",null,"\u5BC6\u78BC\uFF1A",-1)),kC={class:"login-button"},AC={__name:"LoginView",setup(t){const e=Vi(),s=Ao({apiKey:"AIzaSyBZbHSiAQrJktVbyRoJ8i6EwCLns-TMmfk",authDomain:"mygame-xian.firebaseapp.com",projectId:"mygame-xian",storageBucket:"mygame-xian.appspot.com",messagingSenderId:"496921879585",appId:"1:496921879585:web:34ead29c0601e5c592af60"});ii(s);const i=Pi(ii()),r=ii(),o=gn();function l(_){Cr(Tt(i,`Users/${_}`)).then(m=>{m.exists()?(o.user.account=_,o.user.havecard=m.val().havercard,o.user.remainCard=m.val().remainCard,o.user.team=m.val().team,o.Profile.img=m.val().Profile.img,o.ProfileCover.img=m.val().ProfileCover.img,o.SummonPoints=m.val().SummonPoints,o.AwakePoints=m.val().AwakePoints,o.drama=m.val().drama,o.pvp=m.val().pvp,o.win=m.val().win,o.lose=m.val().lose):console.log("\u6C92\u6709\u8CC7\u6599")}).catch(m=>{console.error(m)})}const a=Ne(""),c=Ne("");function u(){a.value===""||c.value===""?alert("\u8ACB\u8F38\u5165\u5B8C\u6574\u5E33\u865F\u5BC6\u78BC"):Cr(Tt(i,"Users/"+a.value)).then(_=>{_.val()===null?alert("\u67E5\u7121\u6B64\u5E33\u6236"):_.val().password===c.value?(l(a.value),alert("\u767B\u5165\u6210\u529F"),e.replace({path:"/home"})):alert("\u5BC6\u78BC\u932F\u8AA4")}).catch(_=>{alert("\u8CC7\u6599\u5B58\u53D6\u932F\u8AA4")})}function h(){const _=/^[\u4e00-\u9fff]{2,6}$/,m=/^[_a-zA-Z0-9]{6,12}$/;if(a.value===""||c.value===""){alert("\u8ACB\u8F38\u5165\u5B8C\u6574\u5E33\u865F\u5BC6\u78BC");return}else if(_.test(a.value)||m.test(a.value))Cr(Tt(i,"Users/"+a.value)).then(y=>{if(y.val()===null){let N=new Date;cl(Pi(r,`Users/${a.value}`),{password:c.value,time:N.getFullYear()+"/"+(N.getMonth()+1)+"/"+N.getDate()+"/"+N.getHours()+":"+N.getMinutes()+":"+N.getSeconds()}),alert("\u8A3B\u518A\u5B8C\u6210"),u()}else alert("\u5DF2\u6709\u6B64\u5E33\u865F")}).catch(y=>{alert("\u8CC7\u6599\u5B58\u53D6\u932F\u8AA4")});else{alert("\u8A3B\u518A\u540D\u7A31\u4E0D\u7B26\u5408\u547D\u540D\u898F\u7BC4\uFF0C\u8ACB\u91CD\u65B0\u8F38\u5165");return}}const d=Ne("");return(_,m)=>(je(),ze("div",EC,[E("div",wC,[E("div",{class:ke(["login",{display_none:d.value==""}])},[E("div",IC,[E("h3",null,"\u4F60\u5DF2\u767B\u5165\uFF0C\u73A9\u5BB6\u540D\u7A31\uFF1A"+be(d.value),1),E("button",{onClick:m[0]||(m[0]=y=>te(e).replace({path:"/Home"}))},"\u8FD4\u56DE\u6D1E\u5E9C")])],2),E("div",{class:ke(["login",{display_none:d.value!==""}])},[E("div",SC,[TC,E("div",xC,[RC,xr(E("input",{type:"text",placeholder:"\u5E33\u865F","onUpdate:modelValue":m[1]||(m[1]=y=>a.value=y)},null,512),[[Mr,a.value,void 0,{lazy:!0}]])]),E("div",PC,[NC,xr(E("input",{type:"password",placeholder:"\u5BC6\u78BC","onUpdate:modelValue":m[2]||(m[2]=y=>c.value=y),onKeyup:m[3]||(m[3]=Kc(y=>u(),["enter"]))},null,544),[[Mr,c.value,void 0,{lazy:!0}]])]),E("div",kC,[E("button",{onClick:m[4]||(m[4]=y=>h())},"\u8A3B\u518A"),E("button",{onClick:m[5]||(m[5]=y=>u())},"\u767B\u5165")])])],2)])]))}},OC=qt(AC,[["__scopeId","data-v-99202399"]]),DC=m_({history:createWebHashHistory("/Vue3-Game-Xian/"),routes:[{path:"/",name:"login",component:OC},{path:"/home",name:"home",component:Hb},{path:"/alchemy",name:"alchemy",component:zb},{path:"/make",name:"make",component:Yb},{path:"/pack",name:"pack",component:nC},{path:"/sublimation",name:"sublimation",component:gC},{path:"/start",name:"start",component:CC},{path:"/:404(.*)*",name:"404",component:()=>A_(()=>import("./404.758b10cc.js"),[])}]});const dl=mp(P_);dl.use(yp());dl.use(DC);dl.mount("#app");document.oncontextmenu=function(){window.event.returnValue=!1};export{qt as _,E as a,ze as c,je as o};
