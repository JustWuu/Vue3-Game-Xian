(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function ao(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function co(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ie(s)?Jh(s):co(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Ie(t))return t;if(pe(t))return t}}const Yh=/;(?![^(]*\))/g,Qh=/:([^]+)/,Xh=/\/\*.*?\*\//gs;function Jh(t){const e={};return t.replace(Xh,"").split(Yh).forEach(n=>{if(n){const s=n.split(Qh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ke(t){let e="";if(Ie(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=ke(t[n]);s&&(e+=s+" ")}else if(pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Zh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ed=ao(Zh);function ec(t){return!!t||t===""}const be=t=>Ie(t)?t:t==null?"":H(t)||pe(t)&&(t.toString===ic||!W(t.toString))?JSON.stringify(t,tc,2):String(t),tc=(t,e)=>e&&e.__v_isRef?tc(t,e.value):Pn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:nc(e)?{[`Set(${e.size})`]:[...e.values()]}:pe(e)&&!H(e)&&!rc(e)?String(e):e,fe={},Rn=[],ut=()=>{},td=()=>!1,nd=/^on[^a-z]/,ki=t=>nd.test(t),uo=t=>t.startsWith("onUpdate:"),Be=Object.assign,ho=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},sd=Object.prototype.hasOwnProperty,X=(t,e)=>sd.call(t,e),H=Array.isArray,Pn=t=>Ai(t)==="[object Map]",nc=t=>Ai(t)==="[object Set]",W=t=>typeof t=="function",Ie=t=>typeof t=="string",fo=t=>typeof t=="symbol",pe=t=>t!==null&&typeof t=="object",sc=t=>pe(t)&&W(t.then)&&W(t.catch),ic=Object.prototype.toString,Ai=t=>ic.call(t),id=t=>Ai(t).slice(8,-1),rc=t=>Ai(t)==="[object Object]",po=t=>Ie(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ei=ao(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Oi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},rd=/-(\w)/g,Ln=Oi(t=>t.replace(rd,(e,n)=>n?n.toUpperCase():"")),od=/\B([A-Z])/g,mn=Oi(t=>t.replace(od,"-$1").toLowerCase()),oc=Oi(t=>t.charAt(0).toUpperCase()+t.slice(1)),ir=Oi(t=>t?`on${oc(t)}`:""),bs=(t,e)=>!Object.is(t,e),ti=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},li=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ai=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let vl;const ld=()=>vl||(vl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Qe;class lc{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Qe,!e&&Qe&&(this.index=(Qe.scopes||(Qe.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Qe;try{return Qe=this,e()}finally{Qe=n}}}on(){Qe=this}off(){Qe=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function ac(t){return new lc(t)}function ad(t,e=Qe){e&&e.active&&e.effects.push(t)}function cd(){return Qe}function ud(t){Qe&&Qe.cleanups.push(t)}const _o=t=>{const e=new Set(t);return e.w=0,e.n=0,e},cc=t=>(t.w&jt)>0,uc=t=>(t.n&jt)>0,hd=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=jt},dd=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];cc(i)&&!uc(i)?i.delete(t):e[n++]=i,i.w&=~jt,i.n&=~jt}e.length=n}},Ir=new WeakMap;let us=0,jt=1;const Sr=30;let rt;const cn=Symbol(""),Tr=Symbol("");class mo{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ad(this,s)}run(){if(!this.active)return this.fn();let e=rt,n=Ft;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=rt,rt=this,Ft=!0,jt=1<<++us,us<=Sr?hd(this):yl(this),this.fn()}finally{us<=Sr&&dd(this),jt=1<<--us,rt=this.parent,Ft=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){rt===this?this.deferStop=!0:this.active&&(yl(this),this.onStop&&this.onStop(),this.active=!1)}}function yl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ft=!0;const hc=[];function Gn(){hc.push(Ft),Ft=!1}function Yn(){const t=hc.pop();Ft=t===void 0?!0:t}function Je(t,e,n){if(Ft&&rt){let s=Ir.get(t);s||Ir.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=_o()),dc(i)}}function dc(t,e){let n=!1;us<=Sr?uc(t)||(t.n|=jt,n=!cc(t)):n=!t.has(rt),n&&(t.add(rt),rt.deps.push(t))}function xt(t,e,n,s,i,r){const o=Ir.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&H(t)){const a=ai(s);o.forEach((c,u)=>{(u==="length"||u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":H(t)?po(n)&&l.push(o.get("length")):(l.push(o.get(cn)),Pn(t)&&l.push(o.get(Tr)));break;case"delete":H(t)||(l.push(o.get(cn)),Pn(t)&&l.push(o.get(Tr)));break;case"set":Pn(t)&&l.push(o.get(cn));break}if(l.length===1)l[0]&&xr(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);xr(_o(a))}}function xr(t,e){const n=H(t)?t:[...t];for(const s of n)s.computed&&bl(s);for(const s of n)s.computed||bl(s)}function bl(t,e){(t!==rt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const fd=ao("__proto__,__v_isRef,__isVue"),fc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fo)),pd=go(),_d=go(!1,!0),md=go(!0),El=gd();function gd(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ee(this);for(let r=0,o=this.length;r<o;r++)Je(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ee)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Gn();const s=ee(this)[e].apply(this,n);return Yn(),s}}),t}function go(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Od:vc:e?gc:mc).get(s))return s;const o=H(s);if(!t&&o&&X(El,i))return Reflect.get(El,i,r);const l=Reflect.get(s,i,r);return(fo(i)?fc.has(i):fd(i))||(t||Je(s,"get",i),e)?l:ge(l)?o&&po(i)?l:l.value:pe(l)?t?yc(l):Qn(l):l}}const vd=pc(),yd=pc(!0);function pc(t=!1){return function(n,s,i,r){let o=n[s];if(Fn(o)&&ge(o)&&!ge(i))return!1;if(!t&&(!ci(i)&&!Fn(i)&&(o=ee(o),i=ee(i)),!H(n)&&ge(o)&&!ge(i)))return o.value=i,!0;const l=H(n)&&po(s)?Number(s)<n.length:X(n,s),a=Reflect.set(n,s,i,r);return n===ee(r)&&(l?bs(i,o)&&xt(n,"set",s,i):xt(n,"add",s,i)),a}}function bd(t,e){const n=X(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&xt(t,"delete",e,void 0),s}function Ed(t,e){const n=Reflect.has(t,e);return(!fo(e)||!fc.has(e))&&Je(t,"has",e),n}function Cd(t){return Je(t,"iterate",H(t)?"length":cn),Reflect.ownKeys(t)}const _c={get:pd,set:vd,deleteProperty:bd,has:Ed,ownKeys:Cd},wd={get:md,set(t,e){return!0},deleteProperty(t,e){return!0}},Id=Be({},_c,{get:_d,set:yd}),vo=t=>t,Di=t=>Reflect.getPrototypeOf(t);function Ks(t,e,n=!1,s=!1){t=t.__v_raw;const i=ee(t),r=ee(e);n||(e!==r&&Je(i,"get",e),Je(i,"get",r));const{has:o}=Di(i),l=s?vo:n?Eo:Es;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function qs(t,e=!1){const n=this.__v_raw,s=ee(n),i=ee(t);return e||(t!==i&&Je(s,"has",t),Je(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Gs(t,e=!1){return t=t.__v_raw,!e&&Je(ee(t),"iterate",cn),Reflect.get(t,"size",t)}function Cl(t){t=ee(t);const e=ee(this);return Di(e).has.call(e,t)||(e.add(t),xt(e,"add",t,t)),this}function wl(t,e){e=ee(e);const n=ee(this),{has:s,get:i}=Di(n);let r=s.call(n,t);r||(t=ee(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?bs(e,o)&&xt(n,"set",t,e):xt(n,"add",t,e),this}function Il(t){const e=ee(this),{has:n,get:s}=Di(e);let i=n.call(e,t);i||(t=ee(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&xt(e,"delete",t,void 0),r}function Sl(){const t=ee(this),e=t.size!==0,n=t.clear();return e&&xt(t,"clear",void 0,void 0),n}function Ys(t,e){return function(s,i){const r=this,o=r.__v_raw,l=ee(o),a=e?vo:t?Eo:Es;return!t&&Je(l,"iterate",cn),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function Qs(t,e,n){return function(...s){const i=this.__v_raw,r=ee(i),o=Pn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?vo:e?Eo:Es;return!e&&Je(r,"iterate",a?Tr:cn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function At(t){return function(...e){return t==="delete"?!1:this}}function Sd(){const t={get(r){return Ks(this,r)},get size(){return Gs(this)},has:qs,add:Cl,set:wl,delete:Il,clear:Sl,forEach:Ys(!1,!1)},e={get(r){return Ks(this,r,!1,!0)},get size(){return Gs(this)},has:qs,add:Cl,set:wl,delete:Il,clear:Sl,forEach:Ys(!1,!0)},n={get(r){return Ks(this,r,!0)},get size(){return Gs(this,!0)},has(r){return qs.call(this,r,!0)},add:At("add"),set:At("set"),delete:At("delete"),clear:At("clear"),forEach:Ys(!0,!1)},s={get(r){return Ks(this,r,!0,!0)},get size(){return Gs(this,!0)},has(r){return qs.call(this,r,!0)},add:At("add"),set:At("set"),delete:At("delete"),clear:At("clear"),forEach:Ys(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Qs(r,!1,!1),n[r]=Qs(r,!0,!1),e[r]=Qs(r,!1,!0),s[r]=Qs(r,!0,!0)}),[t,n,e,s]}const[Td,xd,Rd,Pd]=Sd();function yo(t,e){const n=e?t?Pd:Rd:t?xd:Td;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(X(n,i)&&i in s?n:s,i,r)}const Nd={get:yo(!1,!1)},kd={get:yo(!1,!0)},Ad={get:yo(!0,!1)},mc=new WeakMap,gc=new WeakMap,vc=new WeakMap,Od=new WeakMap;function Dd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Md(t){return t.__v_skip||!Object.isExtensible(t)?0:Dd(id(t))}function Qn(t){return Fn(t)?t:bo(t,!1,_c,Nd,mc)}function Ld(t){return bo(t,!1,Id,kd,gc)}function yc(t){return bo(t,!0,wd,Ad,vc)}function bo(t,e,n,s,i){if(!pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Md(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function $t(t){return Fn(t)?$t(t.__v_raw):!!(t&&t.__v_isReactive)}function Fn(t){return!!(t&&t.__v_isReadonly)}function ci(t){return!!(t&&t.__v_isShallow)}function bc(t){return $t(t)||Fn(t)}function ee(t){const e=t&&t.__v_raw;return e?ee(e):t}function $n(t){return li(t,"__v_skip",!0),t}const Es=t=>pe(t)?Qn(t):t,Eo=t=>pe(t)?yc(t):t;function Ec(t){Ft&&rt&&(t=ee(t),dc(t.dep||(t.dep=_o())))}function Cc(t,e){t=ee(t),t.dep&&xr(t.dep)}function ge(t){return!!(t&&t.__v_isRef===!0)}function Ne(t){return wc(t,!1)}function Fd(t){return wc(t,!0)}function wc(t,e){return ge(t)?t:new $d(t,e)}class $d{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ee(e),this._value=n?e:Es(e)}get value(){return Ec(this),this._value}set value(e){const n=this.__v_isShallow||ci(e)||Fn(e);e=n?e:ee(e),bs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Es(e),Cc(this))}}function te(t){return ge(t)?t.value:t}const Bd={get:(t,e,n)=>te(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return ge(i)&&!ge(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Ic(t){return $t(t)?t:new Proxy(t,Bd)}function Ud(t){const e=H(t)?new Array(t.length):{};for(const n in t)e[n]=Wd(t,n);return e}class Hd{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Wd(t,e,n){const s=t[e];return ge(s)?s:new Hd(t,e,n)}var Sc;class Vd{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Sc]=!1,this._dirty=!0,this.effect=new mo(e,()=>{this._dirty||(this._dirty=!0,Cc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ee(this);return Ec(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Sc="__v_isReadonly";function jd(t,e,n=!1){let s,i;const r=W(t);return r?(s=t,i=ut):(s=t.get,i=t.set),new Vd(s,i,r||!i,n)}function Bt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Mi(r,e,n)}return i}function ht(t,e,n,s){if(W(t)){const r=Bt(t,e,n,s);return r&&sc(r)&&r.catch(o=>{Mi(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(ht(t[r],e,n,s));return i}function Mi(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){Bt(a,null,10,[t,o,l]);return}}zd(t,n,i,s)}function zd(t,e,n,s=!0){console.error(t)}let Cs=!1,Rr=!1;const Me=[];let yt=0;const Nn=[];let wt=null,sn=0;const Tc=Promise.resolve();let Co=null;function wo(t){const e=Co||Tc;return t?e.then(this?t.bind(this):t):e}function Kd(t){let e=yt+1,n=Me.length;for(;e<n;){const s=e+n>>>1;ws(Me[s])<t?e=s+1:n=s}return e}function Io(t){(!Me.length||!Me.includes(t,Cs&&t.allowRecurse?yt+1:yt))&&(t.id==null?Me.push(t):Me.splice(Kd(t.id),0,t),xc())}function xc(){!Cs&&!Rr&&(Rr=!0,Co=Tc.then(Pc))}function qd(t){const e=Me.indexOf(t);e>yt&&Me.splice(e,1)}function Gd(t){H(t)?Nn.push(...t):(!wt||!wt.includes(t,t.allowRecurse?sn+1:sn))&&Nn.push(t),xc()}function Tl(t,e=Cs?yt+1:0){for(;e<Me.length;e++){const n=Me[e];n&&n.pre&&(Me.splice(e,1),e--,n())}}function Rc(t){if(Nn.length){const e=[...new Set(Nn)];if(Nn.length=0,wt){wt.push(...e);return}for(wt=e,wt.sort((n,s)=>ws(n)-ws(s)),sn=0;sn<wt.length;sn++)wt[sn]();wt=null,sn=0}}const ws=t=>t.id==null?1/0:t.id,Yd=(t,e)=>{const n=ws(t)-ws(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Pc(t){Rr=!1,Cs=!0,Me.sort(Yd);const e=ut;try{for(yt=0;yt<Me.length;yt++){const n=Me[yt];n&&n.active!==!1&&Bt(n,null,14)}}finally{yt=0,Me.length=0,Rc(),Cs=!1,Co=null,(Me.length||Nn.length)&&Pc()}}function Qd(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||fe;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||fe;d&&(i=n.map(_=>Ie(_)?_.trim():_)),h&&(i=n.map(ai))}let l,a=s[l=ir(e)]||s[l=ir(Ln(e))];!a&&r&&(a=s[l=ir(mn(e))]),a&&ht(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,ht(c,t,6,i)}}function Nc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!W(t)){const a=c=>{const u=Nc(c,e,!0);u&&(l=!0,Be(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(pe(t)&&s.set(t,null),null):(H(r)?r.forEach(a=>o[a]=null):Be(o,r),pe(t)&&s.set(t,o),o)}function Li(t,e){return!t||!ki(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,mn(e))||X(t,e))}let tt=null,Fi=null;function ui(t){const e=tt;return tt=t,Fi=t&&t.type.__scopeId||null,e}function So(t){Fi=t}function To(){Fi=null}function Jt(t,e=tt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Dl(-1);const r=ui(e);let o;try{o=t(...i)}finally{ui(r),s._d&&Dl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function rr(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:d,setupState:_,ctx:m,inheritAttrs:y}=t;let R,A;const B=ui(t);try{if(n.shapeFlag&4){const G=i||s;R=vt(u.call(G,G,h,r,_,d,m)),A=a}else{const G=e;R=vt(G.length>1?G(r,{attrs:a,slots:l,emit:c}):G(r,null)),A=e.props?a:Xd(a)}}catch(G){ds.length=0,Mi(G,t,1),R=re(Is)}let D=R;if(A&&y!==!1){const G=Object.keys(A),{shapeFlag:oe}=D;G.length&&oe&7&&(o&&G.some(uo)&&(A=Jd(A,o)),D=Bn(D,A))}return n.dirs&&(D=Bn(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),R=D,ui(B),R}const Xd=t=>{let e;for(const n in t)(n==="class"||n==="style"||ki(n))&&((e||(e={}))[n]=t[n]);return e},Jd=(t,e)=>{const n={};for(const s in t)(!uo(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Zd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?xl(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Li(c,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?xl(s,o,c):!0:!!o;return!1}function xl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Li(n,r))return!0}return!1}function ef({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const tf=t=>t.__isSuspense;function nf(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Gd(t)}function ni(t,e){if(Ae){let n=Ae.provides;const s=Ae.parent&&Ae.parent.provides;s===n&&(n=Ae.provides=Object.create(s)),n[t]=e}}function dt(t,e,n=!1){const s=Ae||tt;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&W(e)?e.call(s.proxy):e}}const Xs={};function kn(t,e,n){return kc(t,e,n)}function kc(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=fe){const l=Ae;let a,c=!1,u=!1;if(ge(t)?(a=()=>t.value,c=ci(t)):$t(t)?(a=()=>t,s=!0):H(t)?(u=!0,c=t.some(D=>$t(D)||ci(D)),a=()=>t.map(D=>{if(ge(D))return D.value;if($t(D))return on(D);if(W(D))return Bt(D,l,2)})):W(t)?e?a=()=>Bt(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return h&&h(),ht(t,l,3,[d])}:a=ut,e&&s){const D=a;a=()=>on(D())}let h,d=D=>{h=A.onStop=()=>{Bt(D,l,4)}},_;if(Ts)if(d=ut,e?n&&ht(e,l,3,[a(),u?[]:void 0,d]):a(),i==="sync"){const D=Jf();_=D.__watcherHandles||(D.__watcherHandles=[])}else return ut;let m=u?new Array(t.length).fill(Xs):Xs;const y=()=>{if(!!A.active)if(e){const D=A.run();(s||c||(u?D.some((G,oe)=>bs(G,m[oe])):bs(D,m)))&&(h&&h(),ht(e,l,3,[D,m===Xs?void 0:u&&m[0]===Xs?[]:m,d]),m=D)}else A.run()};y.allowRecurse=!!e;let R;i==="sync"?R=y:i==="post"?R=()=>We(y,l&&l.suspense):(y.pre=!0,l&&(y.id=l.uid),R=()=>Io(y));const A=new mo(a,R);e?n?y():m=A.run():i==="post"?We(A.run.bind(A),l&&l.suspense):A.run();const B=()=>{A.stop(),l&&l.scope&&ho(l.scope.effects,A)};return _&&_.push(B),B}function sf(t,e,n){const s=this.proxy,i=Ie(t)?t.includes(".")?Ac(s,t):()=>s[t]:t.bind(s,s);let r;W(e)?r=e:(r=e.handler,n=e);const o=Ae;Un(this);const l=kc(i,r.bind(s),n);return o?Un(o):un(),l}function Ac(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function on(t,e){if(!pe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ge(t))on(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)on(t[n],e);else if(nc(t)||Pn(t))t.forEach(n=>{on(n,e)});else if(rc(t))for(const n in t)on(t[n],e);return t}function Oc(t){return W(t)?{setup:t,name:t.name}:t}const si=t=>!!t.type.__asyncLoader,Dc=t=>t.type.__isKeepAlive;function rf(t,e){Mc(t,"a",e)}function of(t,e){Mc(t,"da",e)}function Mc(t,e,n=Ae){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if($i(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Dc(i.parent.vnode)&&lf(s,e,n,i),i=i.parent}}function lf(t,e,n,s){const i=$i(e,t,s,!0);Lc(()=>{ho(s[e],i)},n)}function $i(t,e,n=Ae,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Gn(),Un(n);const l=ht(e,n,t,o);return un(),Yn(),l});return s?i.unshift(r):i.push(r),r}}const Pt=t=>(e,n=Ae)=>(!Ts||t==="sp")&&$i(t,(...s)=>e(...s),n),af=Pt("bm"),cf=Pt("m"),uf=Pt("bu"),hf=Pt("u"),df=Pt("bum"),Lc=Pt("um"),ff=Pt("sp"),pf=Pt("rtg"),_f=Pt("rtc");function mf(t,e=Ae){$i("ec",t,e)}function Pr(t,e){const n=tt;if(n===null)return t;const s=Hi(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,a,c=fe]=e[r];o&&(W(o)&&(o={mounted:o,updated:o}),o.deep&&on(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c}))}return t}function Qt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Gn(),ht(a,n,8,[t.el,l,t,e]),Yn())}}const gf=Symbol();function vf(t,e,n,s){let i;const r=n&&n[s];if(H(t)||Ie(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(pe(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const Nr=t=>t?Kc(t)?Hi(t)||t.proxy:Nr(t.parent):null,hs=Be(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Nr(t.parent),$root:t=>Nr(t.root),$emit:t=>t.emit,$options:t=>xo(t),$forceUpdate:t=>t.f||(t.f=()=>Io(t.update)),$nextTick:t=>t.n||(t.n=wo.bind(t.proxy)),$watch:t=>sf.bind(t)}),or=(t,e)=>t!==fe&&!t.__isScriptSetup&&X(t,e),yf={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(or(s,e))return o[e]=1,s[e];if(i!==fe&&X(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&X(c,e))return o[e]=3,r[e];if(n!==fe&&X(n,e))return o[e]=4,n[e];kr&&(o[e]=0)}}const u=hs[e];let h,d;if(u)return e==="$attrs"&&Je(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==fe&&X(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,X(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return or(i,e)?(i[e]=n,!0):s!==fe&&X(s,e)?(s[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==fe&&X(t,o)||or(e,o)||(l=r[0])&&X(l,o)||X(s,o)||X(hs,o)||X(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let kr=!0;function bf(t){const e=xo(t),n=t.proxy,s=t.ctx;kr=!1,e.beforeCreate&&Rl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:m,activated:y,deactivated:R,beforeDestroy:A,beforeUnmount:B,destroyed:D,unmounted:G,render:oe,renderTracked:Ee,renderTriggered:J,errorCaptured:Y,serverPrefetch:Le,expose:Oe,inheritAttrs:Ue,components:Ze,directives:kt,filters:Ge}=e;if(c&&Ef(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ae in o){const se=o[ae];W(se)&&(s[ae]=se.bind(n))}if(i){const ae=i.call(n,n);pe(ae)&&(t.data=Qn(ae))}if(kr=!0,r)for(const ae in r){const se=r[ae],nt=W(se)?se.bind(n,n):W(se.get)?se.get.bind(n,n):ut,Yt=!W(se)&&W(se.set)?se.set.bind(n):ut,st=Xe({get:nt,set:Yt});Object.defineProperty(s,ae,{enumerable:!0,configurable:!0,get:()=>st.value,set:He=>st.value=He})}if(l)for(const ae in l)Fc(l[ae],s,n,ae);if(a){const ae=W(a)?a.call(n):a;Reflect.ownKeys(ae).forEach(se=>{ni(se,ae[se])})}u&&Rl(u,t,"c");function ve(ae,se){H(se)?se.forEach(nt=>ae(nt.bind(n))):se&&ae(se.bind(n))}if(ve(af,h),ve(cf,d),ve(uf,_),ve(hf,m),ve(rf,y),ve(of,R),ve(mf,Y),ve(_f,Ee),ve(pf,J),ve(df,B),ve(Lc,G),ve(ff,Le),H(Oe))if(Oe.length){const ae=t.exposed||(t.exposed={});Oe.forEach(se=>{Object.defineProperty(ae,se,{get:()=>n[se],set:nt=>n[se]=nt})})}else t.exposed||(t.exposed={});oe&&t.render===ut&&(t.render=oe),Ue!=null&&(t.inheritAttrs=Ue),Ze&&(t.components=Ze),kt&&(t.directives=kt)}function Ef(t,e,n=ut,s=!1){H(t)&&(t=Ar(t));for(const i in t){const r=t[i];let o;pe(r)?"default"in r?o=dt(r.from||i,r.default,!0):o=dt(r.from||i):o=dt(r),ge(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Rl(t,e,n){ht(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Fc(t,e,n,s){const i=s.includes(".")?Ac(n,s):()=>n[s];if(Ie(t)){const r=e[t];W(r)&&kn(i,r)}else if(W(t))kn(i,t.bind(n));else if(pe(t))if(H(t))t.forEach(r=>Fc(r,e,n,s));else{const r=W(t.handler)?t.handler.bind(n):e[t.handler];W(r)&&kn(i,r,t)}}function xo(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>hi(a,c,o,!0)),hi(a,e,o)),pe(e)&&r.set(e,a),a}function hi(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&hi(t,r,n,!0),i&&i.forEach(o=>hi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Cf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Cf={data:Pl,props:Zt,emits:Zt,methods:Zt,computed:Zt,beforeCreate:Fe,created:Fe,beforeMount:Fe,mounted:Fe,beforeUpdate:Fe,updated:Fe,beforeDestroy:Fe,beforeUnmount:Fe,destroyed:Fe,unmounted:Fe,activated:Fe,deactivated:Fe,errorCaptured:Fe,serverPrefetch:Fe,components:Zt,directives:Zt,watch:If,provide:Pl,inject:wf};function Pl(t,e){return e?t?function(){return Be(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function wf(t,e){return Zt(Ar(t),Ar(e))}function Ar(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Fe(t,e){return t?[...new Set([].concat(t,e))]:e}function Zt(t,e){return t?Be(Be(Object.create(null),t),e):e}function If(t,e){if(!t)return e;if(!e)return t;const n=Be(Object.create(null),t);for(const s in e)n[s]=Fe(t[s],e[s]);return n}function Sf(t,e,n,s=!1){const i={},r={};li(r,Ui,1),t.propsDefaults=Object.create(null),$c(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Ld(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Tf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=ee(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Li(t.emitsOptions,d))continue;const _=e[d];if(a)if(X(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const m=Ln(d);i[m]=Or(a,l,m,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{$c(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!X(e,h)&&((u=mn(h))===h||!X(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Or(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!X(e,h)&&!0)&&(delete r[h],c=!0)}c&&xt(t,"set","$attrs")}function $c(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(ei(a))continue;const c=e[a];let u;i&&X(i,u=Ln(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:Li(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=ee(n),c=l||fe;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Or(i,a,h,c[h],t,!X(c,h))}}return o}function Or(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=X(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&W(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(Un(i),s=c[n]=a.call(null,e),un())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===mn(n))&&(s=!0))}return s}function Bc(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!W(t)){const u=h=>{a=!0;const[d,_]=Bc(h,e,!0);Be(o,d),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return pe(t)&&s.set(t,Rn),Rn;if(H(r))for(let u=0;u<r.length;u++){const h=Ln(r[u]);Nl(h)&&(o[h]=fe)}else if(r)for(const u in r){const h=Ln(u);if(Nl(h)){const d=r[u],_=o[h]=H(d)||W(d)?{type:d}:Object.assign({},d);if(_){const m=Ol(Boolean,_.type),y=Ol(String,_.type);_[0]=m>-1,_[1]=y<0||m<y,(m>-1||X(_,"default"))&&l.push(h)}}}const c=[o,l];return pe(t)&&s.set(t,c),c}function Nl(t){return t[0]!=="$"}function kl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Al(t,e){return kl(t)===kl(e)}function Ol(t,e){return H(e)?e.findIndex(n=>Al(n,t)):W(e)&&Al(e,t)?0:-1}const Uc=t=>t[0]==="_"||t==="$stable",Ro=t=>H(t)?t.map(vt):[vt(t)],xf=(t,e,n)=>{if(e._n)return e;const s=Jt((...i)=>Ro(e(...i)),n);return s._c=!1,s},Hc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Uc(i))continue;const r=t[i];if(W(r))e[i]=xf(i,r,s);else if(r!=null){const o=Ro(r);e[i]=()=>o}}},Wc=(t,e)=>{const n=Ro(e);t.slots.default=()=>n},Rf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ee(e),li(e,"_",n)):Hc(e,t.slots={})}else t.slots={},e&&Wc(t,e);li(t.slots,Ui,1)},Pf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=fe;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(Be(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Hc(e,i)),o=e}else e&&(Wc(t,e),o={default:1});if(r)for(const l in i)!Uc(l)&&!(l in o)&&delete i[l]};function Vc(){return{app:null,config:{isNativeTag:td,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nf=0;function kf(t,e){return function(s,i=null){W(s)||(s=Object.assign({},s)),i!=null&&!pe(i)&&(i=null);const r=Vc(),o=new Set;let l=!1;const a=r.app={_uid:Nf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Zf,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&W(c.install)?(o.add(c),c.install(a,...u)):W(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const d=re(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),l=!0,a._container=c,c.__vue_app__=a,Hi(d.component)||d.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a}};return a}}function Dr(t,e,n,s,i=!1){if(H(t)){t.forEach((d,_)=>Dr(d,e&&(H(e)?e[_]:e),n,s,i));return}if(si(s)&&!i)return;const r=s.shapeFlag&4?Hi(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===fe?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(Ie(c)?(u[c]=null,X(h,c)&&(h[c]=null)):ge(c)&&(c.value=null)),W(a))Bt(a,l,12,[o,u]);else{const d=Ie(a),_=ge(a);if(d||_){const m=()=>{if(t.f){const y=d?X(h,a)?h[a]:u[a]:a.value;i?H(y)&&ho(y,r):H(y)?y.includes(r)||y.push(r):d?(u[a]=[r],X(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else d?(u[a]=o,X(h,a)&&(h[a]=o)):_&&(a.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,We(m,n)):m()}}}const We=nf;function Af(t){return Of(t)}function Of(t,e){const n=ld();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=ut,insertStaticContent:m}=t,y=(f,p,g,v=null,E=null,T=null,N=!1,S=null,x=!!p.dynamicChildren)=>{if(f===p)return;f&&!is(f,p)&&(v=P(f),He(f,E,T,!0),f=null),p.patchFlag===-2&&(x=!1,p.dynamicChildren=null);const{type:w,ref:L,shapeFlag:O}=p;switch(w){case Bi:R(f,p,g,v);break;case Is:A(f,p,g,v);break;case ii:f==null&&B(p,g,v,N);break;case et:Ze(f,p,g,v,E,T,N,S,x);break;default:O&1?oe(f,p,g,v,E,T,N,S,x):O&6?kt(f,p,g,v,E,T,N,S,x):(O&64||O&128)&&w.process(f,p,g,v,E,T,N,S,x,Q)}L!=null&&E&&Dr(L,f&&f.ref,T,p||f,!p)},R=(f,p,g,v)=>{if(f==null)s(p.el=l(p.children),g,v);else{const E=p.el=f.el;p.children!==f.children&&c(E,p.children)}},A=(f,p,g,v)=>{f==null?s(p.el=a(p.children||""),g,v):p.el=f.el},B=(f,p,g,v)=>{[f.el,f.anchor]=m(f.children,p,g,v,f.el,f.anchor)},D=({el:f,anchor:p},g,v)=>{let E;for(;f&&f!==p;)E=d(f),s(f,g,v),f=E;s(p,g,v)},G=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},oe=(f,p,g,v,E,T,N,S,x)=>{N=N||p.type==="svg",f==null?Ee(p,g,v,E,T,N,S,x):Le(f,p,E,T,N,S,x)},Ee=(f,p,g,v,E,T,N,S)=>{let x,w;const{type:L,props:O,shapeFlag:F,transition:U,dirs:q}=f;if(x=f.el=o(f.type,T,O&&O.is,O),F&8?u(x,f.children):F&16&&Y(f.children,x,null,v,E,T&&L!=="foreignObject",N,S),q&&Qt(f,null,v,"created"),O){for(const ie in O)ie!=="value"&&!ei(ie)&&r(x,ie,null,O[ie],T,f.children,v,E,k);"value"in O&&r(x,"value",null,O.value),(w=O.onVnodeBeforeMount)&&mt(w,v,f)}J(x,f,f.scopeId,N,v),q&&Qt(f,null,v,"beforeMount");const ce=(!E||E&&!E.pendingBranch)&&U&&!U.persisted;ce&&U.beforeEnter(x),s(x,p,g),((w=O&&O.onVnodeMounted)||ce||q)&&We(()=>{w&&mt(w,v,f),ce&&U.enter(x),q&&Qt(f,null,v,"mounted")},E)},J=(f,p,g,v,E)=>{if(g&&_(f,g),v)for(let T=0;T<v.length;T++)_(f,v[T]);if(E){let T=E.subTree;if(p===T){const N=E.vnode;J(f,N,N.scopeId,N.slotScopeIds,E.parent)}}},Y=(f,p,g,v,E,T,N,S,x=0)=>{for(let w=x;w<f.length;w++){const L=f[w]=S?Dt(f[w]):vt(f[w]);y(null,L,p,g,v,E,T,N,S)}},Le=(f,p,g,v,E,T,N)=>{const S=p.el=f.el;let{patchFlag:x,dynamicChildren:w,dirs:L}=p;x|=f.patchFlag&16;const O=f.props||fe,F=p.props||fe;let U;g&&Xt(g,!1),(U=F.onVnodeBeforeUpdate)&&mt(U,g,p,f),L&&Qt(p,f,g,"beforeUpdate"),g&&Xt(g,!0);const q=E&&p.type!=="foreignObject";if(w?Oe(f.dynamicChildren,w,S,g,v,q,T):N||se(f,p,S,null,g,v,q,T,!1),x>0){if(x&16)Ue(S,p,O,F,g,v,E);else if(x&2&&O.class!==F.class&&r(S,"class",null,F.class,E),x&4&&r(S,"style",O.style,F.style,E),x&8){const ce=p.dynamicProps;for(let ie=0;ie<ce.length;ie++){const ye=ce[ie],it=O[ye],En=F[ye];(En!==it||ye==="value")&&r(S,ye,it,En,E,f.children,g,v,k)}}x&1&&f.children!==p.children&&u(S,p.children)}else!N&&w==null&&Ue(S,p,O,F,g,v,E);((U=F.onVnodeUpdated)||L)&&We(()=>{U&&mt(U,g,p,f),L&&Qt(p,f,g,"updated")},v)},Oe=(f,p,g,v,E,T,N)=>{for(let S=0;S<p.length;S++){const x=f[S],w=p[S],L=x.el&&(x.type===et||!is(x,w)||x.shapeFlag&70)?h(x.el):g;y(x,w,L,null,v,E,T,N,!0)}},Ue=(f,p,g,v,E,T,N)=>{if(g!==v){if(g!==fe)for(const S in g)!ei(S)&&!(S in v)&&r(f,S,g[S],null,N,p.children,E,T,k);for(const S in v){if(ei(S))continue;const x=v[S],w=g[S];x!==w&&S!=="value"&&r(f,S,w,x,N,p.children,E,T,k)}"value"in v&&r(f,"value",g.value,v.value)}},Ze=(f,p,g,v,E,T,N,S,x)=>{const w=p.el=f?f.el:l(""),L=p.anchor=f?f.anchor:l("");let{patchFlag:O,dynamicChildren:F,slotScopeIds:U}=p;U&&(S=S?S.concat(U):U),f==null?(s(w,g,v),s(L,g,v),Y(p.children,g,L,E,T,N,S,x)):O>0&&O&64&&F&&f.dynamicChildren?(Oe(f.dynamicChildren,F,g,E,T,N,S),(p.key!=null||E&&p===E.subTree)&&jc(f,p,!0)):se(f,p,g,L,E,T,N,S,x)},kt=(f,p,g,v,E,T,N,S,x)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?E.ctx.activate(p,g,v,N,x):Ge(p,g,v,E,T,N,x):Se(f,p,x)},Ge=(f,p,g,v,E,T,N)=>{const S=f.component=jf(f,v,E);if(Dc(f)&&(S.ctx.renderer=Q),Kf(S),S.asyncDep){if(E&&E.registerDep(S,ve),!f.el){const x=S.subTree=re(Is);A(null,x,p,g)}return}ve(S,f,p,g,E,T,N)},Se=(f,p,g)=>{const v=p.component=f.component;if(Zd(f,p,g))if(v.asyncDep&&!v.asyncResolved){ae(v,p,g);return}else v.next=p,qd(v.update),v.update();else p.el=f.el,v.vnode=p},ve=(f,p,g,v,E,T,N)=>{const S=()=>{if(f.isMounted){let{next:L,bu:O,u:F,parent:U,vnode:q}=f,ce=L,ie;Xt(f,!1),L?(L.el=q.el,ae(f,L,N)):L=q,O&&ti(O),(ie=L.props&&L.props.onVnodeBeforeUpdate)&&mt(ie,U,L,q),Xt(f,!0);const ye=rr(f),it=f.subTree;f.subTree=ye,y(it,ye,h(it.el),P(it),f,E,T),L.el=ye.el,ce===null&&ef(f,ye.el),F&&We(F,E),(ie=L.props&&L.props.onVnodeUpdated)&&We(()=>mt(ie,U,L,q),E)}else{let L;const{el:O,props:F}=p,{bm:U,m:q,parent:ce}=f,ie=si(p);if(Xt(f,!1),U&&ti(U),!ie&&(L=F&&F.onVnodeBeforeMount)&&mt(L,ce,p),Xt(f,!0),O&&V){const ye=()=>{f.subTree=rr(f),V(O,f.subTree,f,E,null)};ie?p.type.__asyncLoader().then(()=>!f.isUnmounted&&ye()):ye()}else{const ye=f.subTree=rr(f);y(null,ye,g,v,f,E,T),p.el=ye.el}if(q&&We(q,E),!ie&&(L=F&&F.onVnodeMounted)){const ye=p;We(()=>mt(L,ce,ye),E)}(p.shapeFlag&256||ce&&si(ce.vnode)&&ce.vnode.shapeFlag&256)&&f.a&&We(f.a,E),f.isMounted=!0,p=g=v=null}},x=f.effect=new mo(S,()=>Io(w),f.scope),w=f.update=()=>x.run();w.id=f.uid,Xt(f,!0),w()},ae=(f,p,g)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,Tf(f,p.props,v,g),Pf(f,p.children,g),Gn(),Tl(),Yn()},se=(f,p,g,v,E,T,N,S,x=!1)=>{const w=f&&f.children,L=f?f.shapeFlag:0,O=p.children,{patchFlag:F,shapeFlag:U}=p;if(F>0){if(F&128){Yt(w,O,g,v,E,T,N,S,x);return}else if(F&256){nt(w,O,g,v,E,T,N,S,x);return}}U&8?(L&16&&k(w,E,T),O!==w&&u(g,O)):L&16?U&16?Yt(w,O,g,v,E,T,N,S,x):k(w,E,T,!0):(L&8&&u(g,""),U&16&&Y(O,g,v,E,T,N,S,x))},nt=(f,p,g,v,E,T,N,S,x)=>{f=f||Rn,p=p||Rn;const w=f.length,L=p.length,O=Math.min(w,L);let F;for(F=0;F<O;F++){const U=p[F]=x?Dt(p[F]):vt(p[F]);y(f[F],U,g,null,E,T,N,S,x)}w>L?k(f,E,T,!0,!1,O):Y(p,g,v,E,T,N,S,x,O)},Yt=(f,p,g,v,E,T,N,S,x)=>{let w=0;const L=p.length;let O=f.length-1,F=L-1;for(;w<=O&&w<=F;){const U=f[w],q=p[w]=x?Dt(p[w]):vt(p[w]);if(is(U,q))y(U,q,g,null,E,T,N,S,x);else break;w++}for(;w<=O&&w<=F;){const U=f[O],q=p[F]=x?Dt(p[F]):vt(p[F]);if(is(U,q))y(U,q,g,null,E,T,N,S,x);else break;O--,F--}if(w>O){if(w<=F){const U=F+1,q=U<L?p[U].el:v;for(;w<=F;)y(null,p[w]=x?Dt(p[w]):vt(p[w]),g,q,E,T,N,S,x),w++}}else if(w>F)for(;w<=O;)He(f[w],E,T,!0),w++;else{const U=w,q=w,ce=new Map;for(w=q;w<=F;w++){const Ye=p[w]=x?Dt(p[w]):vt(p[w]);Ye.key!=null&&ce.set(Ye.key,w)}let ie,ye=0;const it=F-q+1;let En=!1,_l=0;const ss=new Array(it);for(w=0;w<it;w++)ss[w]=0;for(w=U;w<=O;w++){const Ye=f[w];if(ye>=it){He(Ye,E,T,!0);continue}let _t;if(Ye.key!=null)_t=ce.get(Ye.key);else for(ie=q;ie<=F;ie++)if(ss[ie-q]===0&&is(Ye,p[ie])){_t=ie;break}_t===void 0?He(Ye,E,T,!0):(ss[_t-q]=w+1,_t>=_l?_l=_t:En=!0,y(Ye,p[_t],g,null,E,T,N,S,x),ye++)}const ml=En?Df(ss):Rn;for(ie=ml.length-1,w=it-1;w>=0;w--){const Ye=q+w,_t=p[Ye],gl=Ye+1<L?p[Ye+1].el:v;ss[w]===0?y(null,_t,g,gl,E,T,N,S,x):En&&(ie<0||w!==ml[ie]?st(_t,g,gl,2):ie--)}}},st=(f,p,g,v,E=null)=>{const{el:T,type:N,transition:S,children:x,shapeFlag:w}=f;if(w&6){st(f.component.subTree,p,g,v);return}if(w&128){f.suspense.move(p,g,v);return}if(w&64){N.move(f,p,g,Q);return}if(N===et){s(T,p,g);for(let O=0;O<x.length;O++)st(x[O],p,g,v);s(f.anchor,p,g);return}if(N===ii){D(f,p,g);return}if(v!==2&&w&1&&S)if(v===0)S.beforeEnter(T),s(T,p,g),We(()=>S.enter(T),E);else{const{leave:O,delayLeave:F,afterLeave:U}=S,q=()=>s(T,p,g),ce=()=>{O(T,()=>{q(),U&&U()})};F?F(T,q,ce):ce()}else s(T,p,g)},He=(f,p,g,v=!1,E=!1)=>{const{type:T,props:N,ref:S,children:x,dynamicChildren:w,shapeFlag:L,patchFlag:O,dirs:F}=f;if(S!=null&&Dr(S,null,g,f,!0),L&256){p.ctx.deactivate(f);return}const U=L&1&&F,q=!si(f);let ce;if(q&&(ce=N&&N.onVnodeBeforeUnmount)&&mt(ce,p,f),L&6)b(f.component,g,v);else{if(L&128){f.suspense.unmount(g,v);return}U&&Qt(f,null,p,"beforeUnmount"),L&64?f.type.remove(f,p,g,E,Q,v):w&&(T!==et||O>0&&O&64)?k(w,p,g,!1,!0):(T===et&&O&384||!E&&L&16)&&k(x,p,g),v&&bn(f)}(q&&(ce=N&&N.onVnodeUnmounted)||U)&&We(()=>{ce&&mt(ce,p,f),U&&Qt(f,null,p,"unmounted")},g)},bn=f=>{const{type:p,el:g,anchor:v,transition:E}=f;if(p===et){zs(g,v);return}if(p===ii){G(f);return}const T=()=>{i(g),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:N,delayLeave:S}=E,x=()=>N(g,T);S?S(f.el,T,x):x()}else T()},zs=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},b=(f,p,g)=>{const{bum:v,scope:E,update:T,subTree:N,um:S}=f;v&&ti(v),E.stop(),T&&(T.active=!1,He(N,f,p,g)),S&&We(S,p),We(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},k=(f,p,g,v=!1,E=!1,T=0)=>{for(let N=T;N<f.length;N++)He(f[N],p,g,v,E)},P=f=>f.shapeFlag&6?P(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),M=(f,p,g)=>{f==null?p._vnode&&He(p._vnode,null,null,!0):y(p._vnode||null,f,p,null,null,null,g),Tl(),Rc(),p._vnode=f},Q={p:y,um:He,m:st,r:bn,mt:Ge,mc:Y,pc:se,pbc:Oe,n:P,o:t};let _e,V;return e&&([_e,V]=e(Q)),{render:M,hydrate:_e,createApp:kf(M,_e)}}function Xt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function jc(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Dt(i[r]),l.el=o.el),n||jc(o,l)),l.type===Bi&&(l.el=o.el)}}function Df(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Mf=t=>t.__isTeleport,et=Symbol(void 0),Bi=Symbol(void 0),Is=Symbol(void 0),ii=Symbol(void 0),ds=[];let lt=null;function je(t=!1){ds.push(lt=t?null:[])}function Lf(){ds.pop(),lt=ds[ds.length-1]||null}let Ss=1;function Dl(t){Ss+=t}function Ff(t){return t.dynamicChildren=Ss>0?lt||Rn:null,Lf(),Ss>0&&lt&&lt.push(t),t}function ze(t,e,n,s,i,r){return Ff(C(t,e,n,s,i,r,!0))}function Mr(t){return t?t.__v_isVNode===!0:!1}function is(t,e){return t.type===e.type&&t.key===e.key}const Ui="__vInternal",zc=({key:t})=>t!=null?t:null,ri=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ie(t)||ge(t)||W(t)?{i:tt,r:t,k:e,f:!!n}:t:null;function C(t,e=null,n=null,s=0,i=null,r=t===et?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zc(e),ref:e&&ri(e),scopeId:Fi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:tt};return l?(Po(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=Ie(n)?8:16),Ss>0&&!o&&lt&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&lt.push(a),a}const re=$f;function $f(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===gf)&&(t=Is),Mr(t)){const l=Bn(t,e,!0);return n&&Po(l,n),Ss>0&&!r&&lt&&(l.shapeFlag&6?lt[lt.indexOf(t)]=l:lt.push(l)),l.patchFlag|=-2,l}if(Qf(t)&&(t=t.__vccOpts),e){e=Bf(e);let{class:l,style:a}=e;l&&!Ie(l)&&(e.class=ke(l)),pe(a)&&(bc(a)&&!H(a)&&(a=Be({},a)),e.style=co(a))}const o=Ie(t)?1:tf(t)?128:Mf(t)?64:pe(t)?4:W(t)?2:0;return C(t,e,n,s,i,o,r,!0)}function Bf(t){return t?bc(t)||Ui in t?Be({},t):t:null}function Bn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?Hf(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&zc(l),ref:e&&e.ref?n&&i?H(i)?i.concat(ri(e)):[i,ri(e)]:ri(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==et?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Bn(t.ssContent),ssFallback:t.ssFallback&&Bn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function gt(t=" ",e=0){return re(Bi,null,t,e)}function Uf(t,e){const n=re(ii,null,t);return n.staticCount=e,n}function vt(t){return t==null||typeof t=="boolean"?re(Is):H(t)?re(et,null,t.slice()):typeof t=="object"?Dt(t):re(Bi,null,String(t))}function Dt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Bn(t)}function Po(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Po(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ui in e)?e._ctx=tt:i===3&&tt&&(tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:tt},n=32):(e=String(e),s&64?(n=16,e=[gt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Hf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=ke([e.class,s.class]));else if(i==="style")e.style=co([e.style,s.style]);else if(ki(i)){const r=e[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function mt(t,e,n,s=null){ht(t,e,7,[n,s])}const Wf=Vc();let Vf=0;function jf(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Wf,r={uid:Vf++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new lc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bc(s,i),emitsOptions:Nc(s,i),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:s.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Qd.bind(null,r),t.ce&&t.ce(r),r}let Ae=null;const zf=()=>Ae||tt,Un=t=>{Ae=t,t.scope.on()},un=()=>{Ae&&Ae.scope.off(),Ae=null};function Kc(t){return t.vnode.shapeFlag&4}let Ts=!1;function Kf(t,e=!1){Ts=e;const{props:n,children:s}=t.vnode,i=Kc(t);Sf(t,n,i,e),Rf(t,s);const r=i?qf(t,e):void 0;return Ts=!1,r}function qf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=$n(new Proxy(t.ctx,yf));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Yf(t):null;Un(t),Gn();const r=Bt(s,t,0,[t.props,i]);if(Yn(),un(),sc(r)){if(r.then(un,un),e)return r.then(o=>{Ml(t,o,e)}).catch(o=>{Mi(o,t,0)});t.asyncDep=r}else Ml(t,r,e)}else qc(t,e)}function Ml(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pe(e)&&(t.setupState=Ic(e)),qc(t,n)}let Ll;function qc(t,e,n){const s=t.type;if(!t.render){if(!e&&Ll&&!s.render){const i=s.template||xo(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=Be(Be({isCustomElement:r,delimiters:l},o),a);s.render=Ll(i,c)}}t.render=s.render||ut}Un(t),Gn(),bf(t),Yn(),un()}function Gf(t){return new Proxy(t.attrs,{get(e,n){return Je(t,"get","$attrs"),e[n]}})}function Yf(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Gf(t))},slots:t.slots,emit:t.emit,expose:e}}function Hi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ic($n(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in hs)return hs[n](t)},has(e,n){return n in e||n in hs}}))}function Qf(t){return W(t)&&"__vccOpts"in t}const Xe=(t,e)=>jd(t,e,Ts);function Gc(t,e,n){const s=arguments.length;return s===2?pe(e)&&!H(e)?Mr(e)?re(t,null,[e]):re(t,e):re(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Mr(n)&&(n=[n]),re(t,e,n))}const Xf=Symbol(""),Jf=()=>dt(Xf),Zf="3.2.45",ep="http://www.w3.org/2000/svg",rn=typeof document<"u"?document:null,Fl=rn&&rn.createElement("template"),tp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?rn.createElementNS(ep,t):rn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>rn.createTextNode(t),createComment:t=>rn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>rn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Fl.innerHTML=s?`<svg>${t}</svg>`:t;const l=Fl.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function np(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function sp(t,e,n){const s=t.style,i=Ie(n);if(n&&!i){for(const r in n)Lr(s,r,n[r]);if(e&&!Ie(e))for(const r in e)n[r]==null&&Lr(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const $l=/\s*!important$/;function Lr(t,e,n){if(H(n))n.forEach(s=>Lr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ip(t,e);$l.test(n)?t.setProperty(mn(s),n.replace($l,""),"important"):t[s]=n}}const Bl=["Webkit","Moz","ms"],lr={};function ip(t,e){const n=lr[e];if(n)return n;let s=Ln(e);if(s!=="filter"&&s in t)return lr[e]=s;s=oc(s);for(let i=0;i<Bl.length;i++){const r=Bl[i]+s;if(r in t)return lr[e]=r}return e}const Ul="http://www.w3.org/1999/xlink";function rp(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ul,e.slice(6,e.length)):t.setAttributeNS(Ul,e,n);else{const r=ed(e);n==null||r&&!ec(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function op(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=ec(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Sn(t,e,n,s){t.addEventListener(e,n,s)}function lp(t,e,n,s){t.removeEventListener(e,n,s)}function ap(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=cp(e);if(s){const c=r[e]=dp(s,i);Sn(t,l,c,a)}else o&&(lp(t,l,o,a),r[e]=void 0)}}const Hl=/(?:Once|Passive|Capture)$/;function cp(t){let e;if(Hl.test(t)){e={};let s;for(;s=t.match(Hl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):mn(t.slice(2)),e]}let ar=0;const up=Promise.resolve(),hp=()=>ar||(up.then(()=>ar=0),ar=Date.now());function dp(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ht(fp(s,n.value),e,5,[s])};return n.value=t,n.attached=hp(),n}function fp(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Wl=/^on[a-z]/,pp=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?np(t,s,i):e==="style"?sp(t,n,s):ki(e)?uo(e)||ap(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_p(t,e,s,i))?op(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),rp(t,e,s,i))};function _p(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Wl.test(e)&&W(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Wl.test(e)&&Ie(n)?!1:e in t}const Vl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>ti(e,n):e};function mp(t){t.target.composing=!0}function jl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Fr={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Vl(i);const r=s||i.props&&i.props.type==="number";Sn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=ai(l)),t._assign(l)}),n&&Sn(t,"change",()=>{t.value=t.value.trim()}),e||(Sn(t,"compositionstart",mp),Sn(t,"compositionend",jl),Sn(t,"change",jl))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Vl(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&ai(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},gp={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Yc=(t,e)=>n=>{if(!("key"in n))return;const s=mn(n.key);if(e.some(i=>i===s||gp[i]===s))return t(n)},vp=Be({patchProp:pp},tp);let zl;function yp(){return zl||(zl=Af(vp))}const bp=(...t)=>{const e=yp().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Ep(s);if(!i)return;const r=e._component;!W(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Ep(t){return Ie(t)?document.querySelector(t):t}var Cp=!1;/*!
  * pinia v2.0.27
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Qc;const Wi=t=>Qc=t,Xc=Symbol();function $r(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var fs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(fs||(fs={}));function wp(){const t=ac(!0),e=t.run(()=>Ne({}));let n=[],s=[];const i=$n({install(r){Wi(i),i._a=r,r.provide(Xc,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!Cp?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Jc=()=>{};function Kl(t,e,n,s=Jc){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&cd()&&ud(i),i}function Cn(t,...e){t.slice().forEach(n=>{n(...e)})}function Br(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];$r(i)&&$r(s)&&t.hasOwnProperty(n)&&!ge(s)&&!$t(s)?t[n]=Br(i,s):t[n]=s}return t}const Ip=Symbol();function Sp(t){return!$r(t)||!t.hasOwnProperty(Ip)}const{assign:Mt}=Object;function Tp(t){return!!(ge(t)&&t.effect)}function xp(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let a;function c(){l||(n.state.value[t]=i?i():{});const u=Ud(n.state.value[t]);return Mt(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=$n(Xe(()=>{Wi(n);const _=n._s.get(t);return o[d].call(_,_)})),h),{}))}return a=Zc(t,c,e,n,s,!0),a.$reset=function(){const h=i?i():{};this.$patch(d=>{Mt(d,h)})},a}function Zc(t,e,n={},s,i,r){let o;const l=Mt({actions:{}},n),a={deep:!0};let c,u,h=$n([]),d=$n([]),_;const m=s.state.value[t];!r&&!m&&(s.state.value[t]={}),Ne({});let y;function R(J){let Y;c=u=!1,typeof J=="function"?(J(s.state.value[t]),Y={type:fs.patchFunction,storeId:t,events:_}):(Br(s.state.value[t],J),Y={type:fs.patchObject,payload:J,storeId:t,events:_});const Le=y=Symbol();wo().then(()=>{y===Le&&(c=!0)}),u=!0,Cn(h,Y,s.state.value[t])}const A=Jc;function B(){o.stop(),h=[],d=[],s._s.delete(t)}function D(J,Y){return function(){Wi(s);const Le=Array.from(arguments),Oe=[],Ue=[];function Ze(Se){Oe.push(Se)}function kt(Se){Ue.push(Se)}Cn(d,{args:Le,name:J,store:oe,after:Ze,onError:kt});let Ge;try{Ge=Y.apply(this&&this.$id===t?this:oe,Le)}catch(Se){throw Cn(Ue,Se),Se}return Ge instanceof Promise?Ge.then(Se=>(Cn(Oe,Se),Se)).catch(Se=>(Cn(Ue,Se),Promise.reject(Se))):(Cn(Oe,Ge),Ge)}}const G={_p:s,$id:t,$onAction:Kl.bind(null,d),$patch:R,$reset:A,$subscribe(J,Y={}){const Le=Kl(h,J,Y.detached,()=>Oe()),Oe=o.run(()=>kn(()=>s.state.value[t],Ue=>{(Y.flush==="sync"?u:c)&&J({storeId:t,type:fs.direct,events:_},Ue)},Mt({},a,Y)));return Le},$dispose:B},oe=Qn(G);s._s.set(t,oe);const Ee=s._e.run(()=>(o=ac(),o.run(()=>e())));for(const J in Ee){const Y=Ee[J];if(ge(Y)&&!Tp(Y)||$t(Y))r||(m&&Sp(Y)&&(ge(Y)?Y.value=m[J]:Br(Y,m[J])),s.state.value[t][J]=Y);else if(typeof Y=="function"){const Le=D(J,Y);Ee[J]=Le,l.actions[J]=Y}}return Mt(oe,Ee),Mt(ee(oe),Ee),Object.defineProperty(oe,"$state",{get:()=>s.state.value[t],set:J=>{R(Y=>{Mt(Y,J)})}}),s._p.forEach(J=>{Mt(oe,o.run(()=>J({store:oe,app:s._a,pinia:s,options:l})))}),m&&r&&n.hydrate&&n.hydrate(oe.$state,m),c=!0,u=!0,oe}function Rp(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(l,a){const c=zf();return l=l||c&&dt(Xc),l&&Wi(l),l=Qc,l._s.has(s)||(r?Zc(s,e,i,l):xp(s,i,l)),l._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Tn=typeof window<"u";function Pp(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ne=Object.assign;function cr(t,e){const n={};for(const s in e){const i=e[s];n[s]=pt(i)?i.map(t):t(i)}return n}const ps=()=>{},pt=Array.isArray,Np=/\/$/,kp=t=>t.replace(Np,"");function ur(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let a=e.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(s=e.slice(0,a),r=e.slice(a+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=Mp(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function Ap(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ql(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Op(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Hn(e.matched[s],n.matched[i])&&eu(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Hn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function eu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Dp(t[n],e[n]))return!1;return!0}function Dp(t,e){return pt(t)?Gl(t,e):pt(e)?Gl(e,t):t===e}function Gl(t,e){return pt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Mp(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var xs;(function(t){t.pop="pop",t.push="push"})(xs||(xs={}));var _s;(function(t){t.back="back",t.forward="forward",t.unknown=""})(_s||(_s={}));function Lp(t){if(!t)if(Tn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),kp(t)}const Fp=/^[^#]+#/;function $p(t,e){return t.replace(Fp,"#")+e}function Bp(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Vi=()=>({left:window.pageXOffset,top:window.pageYOffset});function Up(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Bp(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Yl(t,e){return(history.state?history.state.position-e:-1)+t}const Ur=new Map;function Hp(t,e){Ur.set(t,e)}function Wp(t){const e=Ur.get(t);return Ur.delete(t),e}let Vp=()=>location.protocol+"//"+location.host;function tu(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,a=i.slice(l);return a[0]!=="/"&&(a="/"+a),ql(a,"")}return ql(n,t)+s+i}function jp(t,e,n,s){let i=[],r=[],o=null;const l=({state:d})=>{const _=tu(t,location),m=n.value,y=e.value;let R=0;if(d){if(n.value=_,e.value=d,o&&o===m){o=null;return}R=y?d.position-y.position:0}else s(_);i.forEach(A=>{A(n.value,m,{delta:R,type:xs.pop,direction:R?R>0?_s.forward:_s.back:_s.unknown})})};function a(){o=n.value}function c(d){i.push(d);const _=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:d}=window;!d.state||d.replaceState(ne({},d.state,{scroll:Vi()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u),{pauseListeners:a,listen:c,destroy:h}}function Ql(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Vi():null}}function zp(t){const{history:e,location:n}=window,s={value:tu(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(a,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:Vp()+t+a;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](d)}}function o(a,c){const u=ne({},e.state,Ql(i.value.back,a,i.value.forward,!0),c,{position:i.value.position});r(a,u,!0),s.value=a}function l(a,c){const u=ne({},i.value,e.state,{forward:a,scroll:Vi()});r(u.current,u,!0);const h=ne({},Ql(s.value,a,null),{position:u.position+1},c);r(a,h,!1),s.value=a}return{location:s,state:i,push:l,replace:o}}function Kp(t){t=Lp(t);const e=zp(t),n=jp(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ne({location:"",base:t,go:s,createHref:$p.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function qp(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Kp(t)}function Gp(t){return typeof t=="string"||t&&typeof t=="object"}function nu(t){return typeof t=="string"||typeof t=="symbol"}const Ot={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},su=Symbol("");var Xl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Xl||(Xl={}));function Wn(t,e){return ne(new Error,{type:t,[su]:!0},e)}function Ct(t,e){return t instanceof Error&&su in t&&(e==null||!!(t.type&e))}const Jl="[^/]+?",Yp={sensitive:!1,strict:!1,start:!0,end:!0},Qp=/[.+*?^${}()[\]/\\]/g;function Xp(t,e){const n=ne({},Yp,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let _=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(Qp,"\\$&"),_+=40;else if(d.type===1){const{value:m,repeatable:y,optional:R,regexp:A}=d;r.push({name:m,repeatable:y,optional:R});const B=A||Jl;if(B!==Jl){_+=10;try{new RegExp(`(${B})`)}catch(G){throw new Error(`Invalid custom RegExp for param "${m}" (${B}): `+G.message)}}let D=y?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;h||(D=R&&c.length<2?`(?:/${D})`:"/"+D),R&&(D+="?"),i+=D,_+=20,R&&(_+=-8),y&&(_+=-20),B===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const _=u[d]||"",m=r[d-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function a(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of d)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:y,optional:R}=_,A=m in c?c[m]:"";if(pt(A)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const B=pt(A)?A.join("/"):A;if(!B)if(R)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=B}}return u||"/"}return{re:o,score:s,keys:r,parse:l,stringify:a}}function Jp(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Zp(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=Jp(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Zl(s))return 1;if(Zl(i))return-1}return i.length-s.length}function Zl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const e_={type:0,value:""},t_=/[a-zA-Z0-9_]/;function n_(t){if(!t)return[[]];if(t==="/")return[[e_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,a,c="",u="";function h(){!c||(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(c&&h(),o()):a===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:a==="("?n=2:t_.test(a)?d():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function s_(t,e,n){const s=Xp(n_(t.path),n),i=ne(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function i_(t,e){const n=[],s=new Map;e=na({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const _=!d,m=r_(u);m.aliasOf=d&&d.record;const y=na(e,u),R=[m];if("alias"in u){const D=typeof u.alias=="string"?[u.alias]:u.alias;for(const G of D)R.push(ne({},m,{components:d?d.record.components:m.components,path:G,aliasOf:d?d.record:m}))}let A,B;for(const D of R){const{path:G}=D;if(h&&G[0]!=="/"){const oe=h.record.path,Ee=oe[oe.length-1]==="/"?"":"/";D.path=h.record.path+(G&&Ee+G)}if(A=s_(D,h,y),d?d.alias.push(A):(B=B||A,B!==A&&B.alias.push(A),_&&u.name&&!ta(A)&&o(u.name)),m.children){const oe=m.children;for(let Ee=0;Ee<oe.length;Ee++)r(oe[Ee],A,d&&d.children[Ee])}d=d||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&a(A)}return B?()=>{o(B)}:ps}function o(u){if(nu(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function a(u){let h=0;for(;h<n.length&&Zp(u,n[h])>=0&&(u.record.path!==n[h].record.path||!iu(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!ta(u)&&s.set(u.record.name,u)}function c(u,h){let d,_={},m,y;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Wn(1,{location:u});y=d.record.name,_=ne(ea(h.params,d.keys.filter(B=>!B.optional).map(B=>B.name)),u.params&&ea(u.params,d.keys.map(B=>B.name))),m=d.stringify(_)}else if("path"in u)m=u.path,d=n.find(B=>B.re.test(m)),d&&(_=d.parse(m),y=d.record.name);else{if(d=h.name?s.get(h.name):n.find(B=>B.re.test(h.path)),!d)throw Wn(1,{location:u,currentLocation:h});y=d.record.name,_=ne({},h.params,u.params),m=d.stringify(_)}const R=[];let A=d;for(;A;)R.unshift(A.record),A=A.parent;return{name:y,path:m,params:_,matched:R,meta:l_(R)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function ea(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function r_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:o_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function o_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function ta(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function l_(t){return t.reduce((e,n)=>ne(e,n.meta),{})}function na(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function iu(t,e){return e.children.some(n=>n===t||iu(t,n))}const ru=/#/g,a_=/&/g,c_=/\//g,u_=/=/g,h_=/\?/g,ou=/\+/g,d_=/%5B/g,f_=/%5D/g,lu=/%5E/g,p_=/%60/g,au=/%7B/g,__=/%7C/g,cu=/%7D/g,m_=/%20/g;function No(t){return encodeURI(""+t).replace(__,"|").replace(d_,"[").replace(f_,"]")}function g_(t){return No(t).replace(au,"{").replace(cu,"}").replace(lu,"^")}function Hr(t){return No(t).replace(ou,"%2B").replace(m_,"+").replace(ru,"%23").replace(a_,"%26").replace(p_,"`").replace(au,"{").replace(cu,"}").replace(lu,"^")}function v_(t){return Hr(t).replace(u_,"%3D")}function y_(t){return No(t).replace(ru,"%23").replace(h_,"%3F")}function b_(t){return t==null?"":y_(t).replace(c_,"%2F")}function di(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function E_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(ou," "),o=r.indexOf("="),l=di(o<0?r:r.slice(0,o)),a=o<0?null:di(r.slice(o+1));if(l in e){let c=e[l];pt(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function sa(t){let e="";for(let n in t){const s=t[n];if(n=v_(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(pt(s)?s.map(r=>r&&Hr(r)):[s&&Hr(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function C_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=pt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const w_=Symbol(""),ia=Symbol(""),ji=Symbol(""),uu=Symbol(""),Wr=Symbol("");function rs(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Lt(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const a=h=>{h===!1?l(Wn(4,{from:n,to:e})):h instanceof Error?l(h):Gp(h)?l(Wn(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,a);let u=Promise.resolve(c);t.length<3&&(u=u.then(a)),u.catch(h=>l(h))})}function hr(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let l=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(I_(l)){const c=(l.__vccOpts||l)[e];c&&i.push(Lt(c,n,s,r,o))}else{let a=l();i.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Pp(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Lt(d,n,s,r,o)()}))}}return i}function I_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ra(t){const e=dt(ji),n=dt(uu),s=Xe(()=>e.resolve(te(t.to))),i=Xe(()=>{const{matched:a}=s.value,{length:c}=a,u=a[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Hn.bind(null,u));if(d>-1)return d;const _=oa(a[c-2]);return c>1&&oa(u)===_&&h[h.length-1].path!==_?h.findIndex(Hn.bind(null,a[c-2])):d}),r=Xe(()=>i.value>-1&&x_(n.params,s.value.params)),o=Xe(()=>i.value>-1&&i.value===n.matched.length-1&&eu(n.params,s.value.params));function l(a={}){return T_(a)?e[te(t.replace)?"replace":"push"](te(t.to)).catch(ps):Promise.resolve()}return{route:s,href:Xe(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const S_=Oc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ra,setup(t,{slots:e}){const n=Qn(ra(t)),{options:s}=dt(ji),i=Xe(()=>({[la(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[la(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Gc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),en=S_;function T_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function x_(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!pt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function oa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const la=(t,e,n)=>t!=null?t:e!=null?e:n,R_=Oc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=dt(Wr),i=Xe(()=>t.route||s.value),r=dt(ia,0),o=Xe(()=>{let c=te(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),l=Xe(()=>i.value.matched[o.value]);ni(ia,Xe(()=>o.value+1)),ni(w_,l),ni(Wr,i);const a=Ne();return kn(()=>[a.value,l.value,t.name],([c,u,h],[d,_,m])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!Hn(u,_)||!d)&&(u.enterCallbacks[h]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=l.value,d=h&&h.components[u];if(!d)return aa(n.default,{Component:d,route:c});const _=h.props[u],m=_?_===!0?c.params:typeof _=="function"?_(c):_:null,R=Gc(d,ne({},m,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return aa(n.default,{Component:R,route:c})||R}}});function aa(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const hu=R_;function P_(t){const e=i_(t.routes,t),n=t.parseQuery||E_,s=t.stringifyQuery||sa,i=t.history,r=rs(),o=rs(),l=rs(),a=Fd(Ot);let c=Ot;Tn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=cr.bind(null,b=>""+b),h=cr.bind(null,b_),d=cr.bind(null,di);function _(b,k){let P,M;return nu(b)?(P=e.getRecordMatcher(b),M=k):M=b,e.addRoute(M,P)}function m(b){const k=e.getRecordMatcher(b);k&&e.removeRoute(k)}function y(){return e.getRoutes().map(b=>b.record)}function R(b){return!!e.getRecordMatcher(b)}function A(b,k){if(k=ne({},k||a.value),typeof b=="string"){const f=ur(n,b,k.path),p=e.resolve({path:f.path},k),g=i.createHref(f.fullPath);return ne(f,p,{params:d(p.params),hash:di(f.hash),redirectedFrom:void 0,href:g})}let P;if("path"in b)P=ne({},b,{path:ur(n,b.path,k.path).path});else{const f=ne({},b.params);for(const p in f)f[p]==null&&delete f[p];P=ne({},b,{params:h(b.params)}),k.params=h(k.params)}const M=e.resolve(P,k),Q=b.hash||"";M.params=u(d(M.params));const _e=Ap(s,ne({},b,{hash:g_(Q),path:M.path})),V=i.createHref(_e);return ne({fullPath:_e,hash:Q,query:s===sa?C_(b.query):b.query||{}},M,{redirectedFrom:void 0,href:V})}function B(b){return typeof b=="string"?ur(n,b,a.value.path):ne({},b)}function D(b,k){if(c!==b)return Wn(8,{from:k,to:b})}function G(b){return J(b)}function oe(b){return G(ne(B(b),{replace:!0}))}function Ee(b){const k=b.matched[b.matched.length-1];if(k&&k.redirect){const{redirect:P}=k;let M=typeof P=="function"?P(b):P;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=B(M):{path:M},M.params={}),ne({query:b.query,hash:b.hash,params:"path"in M?{}:b.params},M)}}function J(b,k){const P=c=A(b),M=a.value,Q=b.state,_e=b.force,V=b.replace===!0,f=Ee(P);if(f)return J(ne(B(f),{state:typeof f=="object"?ne({},Q,f.state):Q,force:_e,replace:V}),k||P);const p=P;p.redirectedFrom=k;let g;return!_e&&Op(s,M,P)&&(g=Wn(16,{to:p,from:M}),Yt(M,M,!0,!1)),(g?Promise.resolve(g):Le(p,M)).catch(v=>Ct(v)?Ct(v,2)?v:nt(v):ae(v,p,M)).then(v=>{if(v){if(Ct(v,2))return J(ne({replace:V},B(v.to),{state:typeof v.to=="object"?ne({},Q,v.to.state):Q,force:_e}),k||p)}else v=Ue(p,M,!0,V,Q);return Oe(p,M,v),v})}function Y(b,k){const P=D(b,k);return P?Promise.reject(P):Promise.resolve()}function Le(b,k){let P;const[M,Q,_e]=N_(b,k);P=hr(M.reverse(),"beforeRouteLeave",b,k);for(const f of M)f.leaveGuards.forEach(p=>{P.push(Lt(p,b,k))});const V=Y.bind(null,b,k);return P.push(V),wn(P).then(()=>{P=[];for(const f of r.list())P.push(Lt(f,b,k));return P.push(V),wn(P)}).then(()=>{P=hr(Q,"beforeRouteUpdate",b,k);for(const f of Q)f.updateGuards.forEach(p=>{P.push(Lt(p,b,k))});return P.push(V),wn(P)}).then(()=>{P=[];for(const f of b.matched)if(f.beforeEnter&&!k.matched.includes(f))if(pt(f.beforeEnter))for(const p of f.beforeEnter)P.push(Lt(p,b,k));else P.push(Lt(f.beforeEnter,b,k));return P.push(V),wn(P)}).then(()=>(b.matched.forEach(f=>f.enterCallbacks={}),P=hr(_e,"beforeRouteEnter",b,k),P.push(V),wn(P))).then(()=>{P=[];for(const f of o.list())P.push(Lt(f,b,k));return P.push(V),wn(P)}).catch(f=>Ct(f,8)?f:Promise.reject(f))}function Oe(b,k,P){for(const M of l.list())M(b,k,P)}function Ue(b,k,P,M,Q){const _e=D(b,k);if(_e)return _e;const V=k===Ot,f=Tn?history.state:{};P&&(M||V?i.replace(b.fullPath,ne({scroll:V&&f&&f.scroll},Q)):i.push(b.fullPath,Q)),a.value=b,Yt(b,k,P,V),nt()}let Ze;function kt(){Ze||(Ze=i.listen((b,k,P)=>{if(!zs.listening)return;const M=A(b),Q=Ee(M);if(Q){J(ne(Q,{replace:!0}),M).catch(ps);return}c=M;const _e=a.value;Tn&&Hp(Yl(_e.fullPath,P.delta),Vi()),Le(M,_e).catch(V=>Ct(V,12)?V:Ct(V,2)?(J(V.to,M).then(f=>{Ct(f,20)&&!P.delta&&P.type===xs.pop&&i.go(-1,!1)}).catch(ps),Promise.reject()):(P.delta&&i.go(-P.delta,!1),ae(V,M,_e))).then(V=>{V=V||Ue(M,_e,!1),V&&(P.delta&&!Ct(V,8)?i.go(-P.delta,!1):P.type===xs.pop&&Ct(V,20)&&i.go(-1,!1)),Oe(M,_e,V)}).catch(ps)}))}let Ge=rs(),Se=rs(),ve;function ae(b,k,P){nt(b);const M=Se.list();return M.length?M.forEach(Q=>Q(b,k,P)):console.error(b),Promise.reject(b)}function se(){return ve&&a.value!==Ot?Promise.resolve():new Promise((b,k)=>{Ge.add([b,k])})}function nt(b){return ve||(ve=!b,kt(),Ge.list().forEach(([k,P])=>b?P(b):k()),Ge.reset()),b}function Yt(b,k,P,M){const{scrollBehavior:Q}=t;if(!Tn||!Q)return Promise.resolve();const _e=!P&&Wp(Yl(b.fullPath,0))||(M||!P)&&history.state&&history.state.scroll||null;return wo().then(()=>Q(b,k,_e)).then(V=>V&&Up(V)).catch(V=>ae(V,b,k))}const st=b=>i.go(b);let He;const bn=new Set,zs={currentRoute:a,listening:!0,addRoute:_,removeRoute:m,hasRoute:R,getRoutes:y,resolve:A,options:t,push:G,replace:oe,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:Se.add,isReady:se,install(b){const k=this;b.component("RouterLink",en),b.component("RouterView",hu),b.config.globalProperties.$router=k,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>te(a)}),Tn&&!He&&a.value===Ot&&(He=!0,G(i.location).catch(Q=>{}));const P={};for(const Q in Ot)P[Q]=Xe(()=>a.value[Q]);b.provide(ji,k),b.provide(uu,Qn(P)),b.provide(Wr,a);const M=b.unmount;bn.add(b),b.unmount=function(){bn.delete(b),bn.size<1&&(c=Ot,Ze&&Ze(),Ze=null,a.value=Ot,He=!1,ve=!1),M()}}};return zs}function wn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function N_(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(c=>Hn(c,l))?s.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>Hn(c,a))||i.push(a))}return[n,s,i]}function zi(){return dt(ji)}const Gt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},k_={},A_={id:"footer",class:"flex_center"},O_=C("h6",null,"\u672C\u7DB2\u9801\u9069\u61C9\u5927\u90E8\u5206\u8996\u7A97\uFF0C\u5EFA\u8B70\u7E2E\u653E\u70BA\u6B63\u8CA050%\u5167",-1),D_=C("hr",{style:{width:"100%","margin-top":"5px"}},null,-1),M_=C("h4",null,"\u6B64\u7DB2\u9801\u5716\u7247\u7D20\u6750\u53D6\u81EA\uFF1A",-1),L_=[O_,D_,M_];function F_(t,e){return je(),ze("div",A_,L_)}const $_=Gt(k_,[["render",F_]]);const du=t=>(So("data-v-e9941dcc"),t=t(),To(),t),B_=du(()=>C("h1",{style:{margin:"0px"}},"\u7121\u76E1\u4ED9\u9014\uFF1A\u88FD\u4F5C\u4E2D",-1)),U_=du(()=>C("div",{id:"box999"},[C("p",null,"\u4F7F\u7528\u8005001")],-1)),H_={__name:"App",setup(t){return window.onbeforeunload=function(){if(!confirm(""))return""},document.onmousemove=function(e){const n=document.getElementById("box999");e=e||window.event;const s=document.body.scrollTop||document.documentElement.scrollTop,i=document.body.scrollLeft||document.documentElement.scrollLeft,r=e.clientX,o=e.clientY;n.style.left=-1+r+i+"px",n.style.top=4+o+s+"px"},(e,n)=>(je(),ze(et,null,[B_,re(te(hu)),re($_),U_],64))}},W_=Gt(H_,[["__scopeId","data-v-e9941dcc"]]),V_="modulepreload",j_=function(t){return"/Vue3-Game-Xian/"+t},ca={},z_=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=j_(r),r in ca)return;ca[r]=!0;const o=r.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":V_,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},gn=Rp("counter",()=>({Player:Ne({name:"\u93AE\u5929\u5211\u9577",lv:"\u7DF4\u9AD4",props:"\u795E\u5143\u4E38",fragments:4214,interfere:122,power:0,probability:20,money:1929,img:"../../public/gg0021.png",meditate:!1,meditateStatrt:0,meditateStatrtTime:""})}));/**
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
 */const fu={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const I=function(t,e){if(!t)throw Xn(e)},Xn=function(t){return new Error("Firebase Database ("+fu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const pu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},K_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ko={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):K_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw Error();const d=r<<2|l>>4;if(s.push(d),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},_u=function(t){const e=pu(t);return ko.encodeByteArray(e,!0)},fi=function(t){return _u(t).replace(/\./g,"")},Vr=function(t){try{return ko.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function q_(t){return mu(void 0,t)}function mu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!G_(n)||(t[n]=mu(t[n],e[n]));return t}function G_(t){return t!=="__proto__"}/**
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
 */function Y_(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Y_())}function Q_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vu(){return fu.NODE_ADMIN===!0}function X_(){try{return typeof indexedDB=="object"}catch{return!1}}function J_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Z_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const em=()=>Z_().__FIREBASE_DEFAULTS__,tm=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},nm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vr(t[1]);return e&&JSON.parse(e)},yu=()=>{try{return em()||tm()||nm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sm=t=>{var e,n;return(n=(e=yu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},im=t=>{const e=sm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},rm=()=>{var t;return(t=yu())===null||t===void 0?void 0:t.config};/**
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
 */class Ki{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function om(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[fi(JSON.stringify(n)),fi(JSON.stringify(o)),l].join(".")}/**
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
 */const lm="FirebaseError";class $s extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=lm,Object.setPrototypeOf(this,$s.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bu.prototype.create)}}class bu{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?am(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new $s(i,l,s)}}function am(t,e){return t.replace(cm,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const cm=/\{\$([^}]+)}/g;/**
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
 */function Rs(t){return JSON.parse(t)}function Ce(t){return JSON.stringify(t)}/**
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
 */const Eu=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Rs(Vr(r[0])||""),n=Rs(Vr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},um=function(t){const e=Eu(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},hm=function(t){const e=Eu(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Nt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Vn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ua(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pi(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function jr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(ha(r)&&ha(o)){if(!jr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ha(t){return t!==null&&typeof t=="object"}/**
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
 */function dm(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class fm{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Ao(t,e){return`${t} failed: ${e} argument `}/**
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
 */const pm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,I(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function vn(t){return t&&t._delegate?t._delegate:t}class Ps{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class _m{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ki;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gm(e))try{this.getOrInitializeService({instanceIdentifier:tn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tn){return this.instances.has(e)}getOptions(e=tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:mm(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=tn){return this.component?this.component.multipleInstances?e:tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mm(t){return t===tn?void 0:t}function gm(t){return t.instantiationMode==="EAGER"}/**
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
 */class vm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _m(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const ym={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},bm=ue.INFO,Em={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},Cm=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Em[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cu{constructor(e){this.name=e,this._logLevel=bm,this._logHandler=Cm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ym[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const wm=(t,e)=>e.some(n=>t instanceof n);let da,fa;function Im(){return da||(da=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sm(){return fa||(fa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wu=new WeakMap,zr=new WeakMap,Iu=new WeakMap,dr=new WeakMap,Oo=new WeakMap;function Tm(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ut(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wu.set(n,t)}).catch(()=>{}),Oo.set(e,t),e}function xm(t){if(zr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});zr.set(t,e)}let Kr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Iu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ut(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rm(t){Kr=t(Kr)}function Pm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(fr(this),e,...n);return Iu.set(s,e.sort?e.sort():[e]),Ut(s)}:Sm().includes(t)?function(...e){return t.apply(fr(this),e),Ut(wu.get(this))}:function(...e){return Ut(t.apply(fr(this),e))}}function Nm(t){return typeof t=="function"?Pm(t):(t instanceof IDBTransaction&&xm(t),wm(t,Im())?new Proxy(t,Kr):t)}function Ut(t){if(t instanceof IDBRequest)return Tm(t);if(dr.has(t))return dr.get(t);const e=Nm(t);return e!==t&&(dr.set(t,e),Oo.set(e,t)),e}const fr=t=>Oo.get(t);function km(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Ut(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Ut(o.result),a.oldVersion,a.newVersion,Ut(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const Am=["get","getKey","getAll","getAllKeys","count"],Om=["put","add","delete","clear"],pr=new Map;function pa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pr.get(e))return pr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Om.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Am.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return pr.set(e,r),r}Rm(t=>({...t,get:(e,n,s)=>pa(e,n)||t.get(e,n,s),has:(e,n)=>!!pa(e,n)||t.has(e,n)}));/**
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
 */class Dm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Mm(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Mm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qr="@firebase/app",_a="0.9.0";/**
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
 */const dn=new Cu("@firebase/app"),Lm="@firebase/app-compat",Fm="@firebase/analytics-compat",$m="@firebase/analytics",Bm="@firebase/app-check-compat",Um="@firebase/app-check",Hm="@firebase/auth",Wm="@firebase/auth-compat",Vm="@firebase/database",jm="@firebase/database-compat",zm="@firebase/functions",Km="@firebase/functions-compat",qm="@firebase/installations",Gm="@firebase/installations-compat",Ym="@firebase/messaging",Qm="@firebase/messaging-compat",Xm="@firebase/performance",Jm="@firebase/performance-compat",Zm="@firebase/remote-config",eg="@firebase/remote-config-compat",tg="@firebase/storage",ng="@firebase/storage-compat",sg="@firebase/firestore",ig="@firebase/firestore-compat",rg="firebase",og="9.15.0";/**
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
 */const Gr="[DEFAULT]",lg={[qr]:"fire-core",[Lm]:"fire-core-compat",[$m]:"fire-analytics",[Fm]:"fire-analytics-compat",[Um]:"fire-app-check",[Bm]:"fire-app-check-compat",[Hm]:"fire-auth",[Wm]:"fire-auth-compat",[Vm]:"fire-rtdb",[jm]:"fire-rtdb-compat",[zm]:"fire-fn",[Km]:"fire-fn-compat",[qm]:"fire-iid",[Gm]:"fire-iid-compat",[Ym]:"fire-fcm",[Qm]:"fire-fcm-compat",[Xm]:"fire-perf",[Jm]:"fire-perf-compat",[Zm]:"fire-rc",[eg]:"fire-rc-compat",[tg]:"fire-gcs",[ng]:"fire-gcs-compat",[sg]:"fire-fst",[ig]:"fire-fst-compat","fire-js":"fire-js",[rg]:"fire-js-all"};/**
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
 */const _i=new Map,Yr=new Map;function ag(t,e){try{t.container.addComponent(e)}catch(n){dn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mi(t){const e=t.name;if(Yr.has(e))return dn.debug(`There were multiple attempts to register component ${e}.`),!1;Yr.set(e,t);for(const n of _i.values())ag(n,t);return!0}function cg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ug={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ht=new bu("app","Firebase",ug);/**
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
 */class hg{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ps("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
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
 */const dg=og;function Do(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Gr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ht.create("bad-app-name",{appName:String(i)});if(n||(n=rm()),!n)throw Ht.create("no-options");const r=_i.get(i);if(r){if(jr(n,r.options)&&jr(s,r.config))return r;throw Ht.create("duplicate-app",{appName:i})}const o=new vm(i);for(const a of Yr.values())o.addComponent(a);const l=new hg(n,s,o);return _i.set(i,l),l}function fg(t=Gr){const e=_i.get(t);if(!e&&t===Gr)return Do();if(!e)throw Ht.create("no-app",{appName:t});return e}function An(t,e,n){var s;let i=(s=lg[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dn.warn(l.join(" "));return}mi(new Ps(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const pg="firebase-heartbeat-database",_g=1,Ns="firebase-heartbeat-store";let _r=null;function Su(){return _r||(_r=km(pg,_g,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ns)}}}).catch(t=>{throw Ht.create("idb-open",{originalErrorMessage:t.message})})),_r}async function mg(t){try{return(await Su()).transaction(Ns).objectStore(Ns).get(Tu(t))}catch(e){if(e instanceof $s)dn.warn(e.message);else{const n=Ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dn.warn(n.message)}}}async function ma(t,e){try{const s=(await Su()).transaction(Ns,"readwrite");return await s.objectStore(Ns).put(e,Tu(t)),s.done}catch(n){if(n instanceof $s)dn.warn(n.message);else{const s=Ht.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dn.warn(s.message)}}}function Tu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const gg=1024,vg=30*24*60*60*1e3;class yg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Eg(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ga();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=vg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ga(),{heartbeatsToSend:n,unsentEntries:s}=bg(this._heartbeatsCache.heartbeats),i=fi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ga(){return new Date().toISOString().substring(0,10)}function bg(t,e=gg){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),va(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),va(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Eg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return X_()?J_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await mg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ma(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ma(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function va(t){return fi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Cg(t){mi(new Ps("platform-logger",e=>new Dm(e),"PRIVATE")),mi(new Ps("heartbeat",e=>new yg(e),"PRIVATE")),An(qr,_a,t),An(qr,_a,"esm2017"),An("fire-js","")}Cg("");var wg="firebase",Ig="9.15.0";/**
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
 */An(wg,Ig,"app");const ya="@firebase/database",ba="0.14.0";/**
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
 */let xu="";function Sg(t){xu=t}/**
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
 */class Tg{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ce(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Rs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class xg{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Nt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ru=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Tg(e)}}catch{}return new xg},ln=Ru("localStorage"),Qr=Ru("sessionStorage");/**
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
 */const On=new Cu("@firebase/database"),Rg=function(){let t=1;return function(){return t++}}(),Pu=function(t){const e=pm(t),n=new fm;n.update(e);const s=n.digest();return ko.encodeByteArray(s)},Bs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Bs.apply(null,s):typeof s=="object"?e+=Ce(s):e+=s,e+=" "}return e};let hn=null,Ea=!0;const Pg=function(t,e){I(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(On.logLevel=ue.VERBOSE,hn=On.log.bind(On),e&&Qr.set("logging_enabled",!0)):typeof t=="function"?hn=t:(hn=null,Qr.remove("logging_enabled"))},De=function(...t){if(Ea===!0&&(Ea=!1,hn===null&&Qr.get("logging_enabled")===!0&&Pg(!0)),hn){const e=Bs.apply(null,t);hn(e)}},Us=function(t){return function(...e){De(t,...e)}},Xr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Bs(...t);On.error(e)},Rt=function(...t){const e=`FIREBASE FATAL ERROR: ${Bs(...t)}`;throw On.error(e),new Error(e)},Ke=function(...t){const e="FIREBASE WARNING: "+Bs(...t);On.warn(e)},Ng=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Nu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},kg=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},jn="[MIN_NAME]",fn="[MAX_NAME]",Jn=function(t,e){if(t===e)return 0;if(t===jn||e===fn)return-1;if(e===jn||t===fn)return 1;{const n=Ca(t),s=Ca(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Ag=function(t,e){return t===e?0:t<e?-1:1},os=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ce(e))},Mo=function(t){if(typeof t!="object"||t===null)return Ce(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ce(e[s]),n+=":",n+=Mo(t[e[s]]);return n+="}",n},ku=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function qe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Au=function(t){I(!Nu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Og=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Dg=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Mg(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Lg=new RegExp("^-?(0*)\\d{1,10}$"),Fg=-2147483648,$g=2147483647,Ca=function(t){if(Lg.test(t)){const e=Number(t);if(e>=Fg&&e<=$g)return e}return null},Zn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},Bg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ms=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Ug{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Hg{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(De("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ke(e)}}class Dn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Dn.OWNER="owner";/**
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
 */const Lo="5",Ou="v",Du="s",Mu="r",Lu="f",Fu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,$u="ls",Bu="p",Jr="ac",Uu="websocket",Hu="long_polling";/**
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
 */class Wu{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ln.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ln.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Wg(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Vu(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let s;if(e===Uu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Hu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Wg(t)&&(n.ns=t.namespace);const i=[];return qe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Vg{constructor(){this.counters_={}}incrementCounter(e,n=1){Nt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return q_(this.counters_)}}/**
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
 */const mr={},gr={};function Fo(t){const e=t.toString();return mr[e]||(mr[e]=new Vg),mr[e]}function jg(t,e){const n=t.toString();return gr[n]||(gr[n]=e()),gr[n]}/**
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
 */class zg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Zn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const wa="start",Kg="close",qg="pLPCommand",Gg="pRTLPCB",ju="id",zu="pw",Ku="ser",Yg="cb",Qg="seg",Xg="ts",Jg="d",Zg="dframe",qu=1870,Gu=30,ev=qu-Gu,tv=25e3,nv=3e4;class xn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Us(e),this.stats_=Fo(n),this.urlFn=a=>(this.appCheckToken&&(a[Jr]=this.appCheckToken),Vu(n,Hu,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new zg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(nv)),kg(()=>{if(this.isClosed_)return;this.scriptTagHolder=new $o((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===wa)this.id=l,this.password=a;else if(o===Kg)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[wa]="t",s[Ku]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Yg]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ou]=Lo,this.transportSessionId&&(s[Du]=this.transportSessionId),this.lastSessionId&&(s[$u]=this.lastSessionId),this.applicationId&&(s[Bu]=this.applicationId),this.appCheckToken&&(s[Jr]=this.appCheckToken),typeof location<"u"&&location.hostname&&Fu.test(location.hostname)&&(s[Mu]=Lu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){xn.forceAllow_=!0}static forceDisallow(){xn.forceDisallow_=!0}static isAvailable(){return xn.forceAllow_?!0:!xn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Og()&&!Dg()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=_u(n),i=ku(s,ev);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Zg]="t",s[ju]=e,s[zu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ce(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class $o{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Rg(),window[qg+this.uniqueCallbackIdentifier]=e,window[Gg+this.uniqueCallbackIdentifier]=n,this.myIFrame=$o.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){De("frame writing exception"),l.stack&&De(l.stack),De(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||De("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ju]=this.myID,e[zu]=this.myPW,e[Ku]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Gu+s.length<=qu;){const o=this.pendingSegs.shift();s=s+"&"+Qg+i+"="+o.seg+"&"+Xg+i+"="+o.ts+"&"+Jg+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(tv)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{De("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const sv=16384,iv=45e3;let gi=null;typeof MozWebSocket<"u"?gi=MozWebSocket:typeof WebSocket<"u"&&(gi=WebSocket);class ot{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Us(this.connId),this.stats_=Fo(n),this.connURL=ot.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Ou]=Lo,typeof location<"u"&&location.hostname&&Fu.test(location.hostname)&&(o[Mu]=Lu),n&&(o[Du]=n),s&&(o[$u]=s),i&&(o[Jr]=i),r&&(o[Bu]=r),Vu(e,Uu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ln.set("previous_websocket_failure",!0);try{let s;vu(),this.mySock=new gi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ot.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&gi!==null&&!ot.forceDisallow_}static previouslyFailed(){return ln.isInMemoryStorage||ln.get("previous_websocket_failure")===!0}markConnectionHealthy(){ln.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Rs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ku(n,sv);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(iv))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ot.responsesRequiredToBeHealthy=2;ot.healthyTimeout=3e4;/**
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
 */class ks{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[xn,ot]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ot&&ot.isAvailable();let s=n&&!ot.previouslyFailed();if(e.webSocketOnly&&(n||Ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ot];else{const i=this.transports_=[];for(const r of ks.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ks.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ks.globalTransportInitialized_=!1;/**
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
 */const rv=6e4,ov=5e3,lv=10*1024,av=100*1024,vr="t",Ia="d",cv="s",Sa="r",uv="e",Ta="o",xa="a",Ra="n",Pa="p",hv="h";class dv{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Us("c:"+this.id+":"),this.transportManager_=new ks(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ms(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>av?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>lv?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(vr in e){const n=e[vr];n===xa?this.upgradeIfSecondaryHealthy_():n===Sa?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ta&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=os("t",e),s=os("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Pa,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:xa,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ra,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=os("t",e),s=os("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=os(vr,e);if(Ia in e){const s=e[Ia];if(n===hv)this.onHandshake_(s);else if(n===Ra){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===cv?this.onConnectionShutdown_(s):n===Sa?this.onReset_(s):n===uv?Xr("Server Error: "+s):n===Ta?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Lo!==s&&Ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ms(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(rv))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ms(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ov))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Pa,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ln.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Yu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Qu{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class vi extends Qu{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!gu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new vi}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Na=32,ka=768;class le{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new le("")}function j(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function zt(t){return t.pieces_.length-t.pieceNum_}function he(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new le(t.pieces_,e)}function Xu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function fv(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ju(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Zu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new le(e,0)}function we(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof le)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new le(n,0)}function K(t){return t.pieceNum_>=t.pieces_.length}function $e(t,e){const n=j(t),s=j(e);if(n===null)return e;if(n===s)return $e(he(t),he(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Bo(t,e){if(zt(t)!==zt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function at(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(zt(t)>zt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class pv{constructor(e,n){this.errorPrefix_=n,this.parts_=Ju(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=qi(this.parts_[s]);eh(this)}}function _v(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=qi(e),eh(t)}function mv(t){const e=t.parts_.pop();t.byteLength_-=qi(e),t.parts_.length>0&&(t.byteLength_-=1)}function eh(t){if(t.byteLength_>ka)throw new Error(t.errorPrefix_+"has a key path longer than "+ka+" bytes ("+t.byteLength_+").");if(t.parts_.length>Na)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Na+") or object contains a cycle "+nn(t))}function nn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Uo extends Qu{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Uo}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ls=1e3,gv=60*5*1e3,Aa=30*1e3,vv=1.3,yv=3e4,bv="server_kill",Oa=3;class St extends Yu{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=St.nextPersistentConnectionId_++,this.log_=Us("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ls,this.maxReconnectDelay_=gv,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!vu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Uo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&vi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ce(r)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Ki,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;St.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Nt(e,"w")){const s=Vn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||hm(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Aa)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=um(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ce(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Xr("Unrecognized action received from server: "+Ce(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ls,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ls,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>yv&&(this.reconnectDelay_=ls),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*vv)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+St.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){I(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?De("getToken() completed but was canceled"):(De("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new dv(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Ke(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(bv)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ke(h),a())}}}interrupt(e){De("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){De("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ua(this.interruptReasons_)&&(this.reconnectDelay_=ls,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Mo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new le(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){De("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Oa&&(this.reconnectDelay_=Aa,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){De("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Oa&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+xu.replace(/\./g,"-")]=1,gu()?e["framework.cordova"]=1:Q_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=vi.getInstance().currentlyOnline();return ua(this.interruptReasons_)&&e}}St.nextPersistentConnectionId_=0;St.nextConnectionId_=0;/**
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
 */class Gi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new z(jn,e),i=new z(jn,n);return this.compare(s,i)!==0}minPost(){return z.MIN}}/**
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
 */let Js;class th extends Gi{static get __EMPTY_NODE(){return Js}static set __EMPTY_NODE(e){Js=e}compare(e,n){return Jn(e.name,n.name)}isDefinedOn(e){throw Xn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(fn,Js)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,Js)}toString(){return".key"}}const Mn=new th;/**
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
 */class Zs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class xe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:xe.RED,this.left=i!=null?i:Ve.EMPTY_NODE,this.right=r!=null?r:Ve.EMPTY_NODE}copy(e,n,s,i,r){return new xe(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ve.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ve.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}xe.RED=!0;xe.BLACK=!1;class Ev{copy(e,n,s,i,r){return this}insert(e,n,s){return new xe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ve{constructor(e,n=Ve.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ve(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,xe.BLACK,null,null))}remove(e){return new Ve(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,xe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Zs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Zs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Zs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Zs(this.root_,null,this.comparator_,!0,e)}}Ve.EMPTY_NODE=new Ev;/**
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
 */function Cv(t,e){return Jn(t.name,e.name)}function Ho(t,e){return Jn(t,e)}/**
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
 */let Zr;function wv(t){Zr=t}const nh=function(t){return typeof t=="number"?"number:"+Au(t):"string:"+t},sh=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Nt(e,".sv"),"Priority must be a string or number.")}else I(t===Zr||t.isEmpty(),"priority of unexpected type.");I(t===Zr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Da;class Te{constructor(e,n=Te.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),sh(this.priorityNode_)}static set __childrenNodeConstructor(e){Da=e}static get __childrenNodeConstructor(){return Da}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Te(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:j(e)===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Te.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=j(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(I(s!==".priority"||zt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Te.__childrenNodeConstructor.EMPTY_NODE.updateChild(he(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+nh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Au(this.value_):e+=this.value_,this.lazyHash_=Pu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Te.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Te.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Te.VALUE_TYPE_ORDER.indexOf(n),r=Te.VALUE_TYPE_ORDER.indexOf(s);return I(i>=0,"Unknown leaf type: "+n),I(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Te.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let ih,rh;function Iv(t){ih=t}function Sv(t){rh=t}class Tv extends Gi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Jn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(fn,new Te("[PRIORITY-POST]",rh))}makePost(e,n){const s=ih(e);return new z(n,new Te("[PRIORITY-POST]",s))}toString(){return".priority"}}const me=new Tv;/**
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
 */const xv=Math.log(2);class Rv{constructor(e){const n=r=>parseInt(Math.log(r)/xv,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const yi=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new xe(d,h.node,xe.BLACK,null,null);{const _=parseInt(u/2,10)+a,m=i(a,_),y=i(_+1,c);return h=t[_],d=n?n(h):h,new xe(d,h.node,xe.BLACK,m,y)}},r=function(a){let c=null,u=null,h=t.length;const d=function(m,y){const R=h-m,A=h;h-=m;const B=i(R+1,A),D=t[R],G=n?n(D):D;_(new xe(G,D.node,y,null,B))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<a.count;++m){const y=a.nextBitIsOne(),R=Math.pow(2,a.count-(m+1));y?d(R,xe.BLACK):(d(R,xe.BLACK),d(R,xe.RED))}return u},o=new Rv(t.length),l=r(o);return new Ve(s||e,l)};/**
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
 */let yr;const In={};class It{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(In&&me,"ChildrenNode.ts has not been loaded"),yr=yr||new It({".priority":In},{".priority":me}),yr}get(e){const n=Vn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ve?n:null}hasIndex(e){return Nt(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Mn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(z.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=yi(s,e.getCompare()):l=In;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new It(u,c)}addToIndexes(e,n){const s=pi(this.indexes_,(i,r)=>{const o=Vn(this.indexSet_,r);if(I(o,"Missing index implementation for "+r),i===In)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(z.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),yi(l,o.getCompare())}else return In;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new z(e.name,l))),a.insert(e,e.node)}});return new It(s,this.indexSet_)}removeFromIndexes(e,n){const s=pi(this.indexes_,i=>{if(i===In)return i;{const r=n.get(e.name);return r?i.remove(new z(e.name,r)):i}});return new It(s,this.indexSet_)}}/**
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
 */let as;class ${constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&sh(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return as||(as=new $(new Ve(Ho),null,It.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||as}updatePriority(e){return this.children_.isEmpty()?this:new $(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?as:n}}getChild(e){const n=j(e);return n===null?this:this.getImmediateChild(n).getChild(he(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new z(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?as:this.priorityNode_;return new $(i,o,r)}}updateChild(e,n){const s=j(e);if(s===null)return n;{I(j(e)!==".priority"||zt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(he(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(me,(o,l)=>{n[o]=l.val(e),s++,r&&$.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+nh(this.getPriority().val())+":"),this.forEachChild(me,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Pu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new z(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,z.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Hs?-1:0}withIndex(e){if(e===Mn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new $(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Mn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(me),i=n.getIterator(me);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Mn?null:this.indexMap_.get(e.toString())}}$.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Pv extends ${constructor(){super(new Ve(Ho),$.EMPTY_NODE,It.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return $.EMPTY_NODE}isEmpty(){return!1}}const Hs=new Pv;Object.defineProperties(z,{MIN:{value:new z(jn,$.EMPTY_NODE)},MAX:{value:new z(fn,Hs)}});th.__EMPTY_NODE=$.EMPTY_NODE;Te.__childrenNodeConstructor=$;wv(Hs);Sv(Hs);/**
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
 */const Nv=!0;function Re(t,e=null){if(t===null)return $.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Te(n,Re(e))}if(!(t instanceof Array)&&Nv){const n=[];let s=!1;if(qe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Re(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new z(o,a)))}}),n.length===0)return $.EMPTY_NODE;const r=yi(n,Cv,o=>o.name,Ho);if(s){const o=yi(n,me.getCompare());return new $(r,Re(e),new It({".priority":o},{".priority":me}))}else return new $(r,Re(e),It.Default)}else{let n=$.EMPTY_NODE;return qe(t,(s,i)=>{if(Nt(t,s)&&s.substring(0,1)!=="."){const r=Re(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Re(e))}}Iv(Re);/**
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
 */class kv extends Gi{constructor(e){super(),this.indexPath_=e,I(!K(e)&&j(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Jn(e.name,n.name):r}makePost(e,n){const s=Re(e),i=$.EMPTY_NODE.updateChild(this.indexPath_,s);return new z(n,i)}maxPost(){const e=$.EMPTY_NODE.updateChild(this.indexPath_,Hs);return new z(fn,e)}toString(){return Ju(this.indexPath_,0).join("/")}}/**
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
 */class Av extends Gi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Jn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const s=Re(e);return new z(n,s)}toString(){return".value"}}const Ov=new Av;/**
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
 */function oh(t){return{type:"value",snapshotNode:t}}function zn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function As(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Os(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Dv(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Wo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(As(n,l)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(zn(n,s)):o.trackChildChange(Os(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(me,(i,r)=>{n.hasChild(i)||s.trackChildChange(As(i,r))}),n.isLeafNode()||n.forEachChild(me,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Os(i,r,o))}else s.trackChildChange(zn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?$.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ds{constructor(e){this.indexedFilter_=new Wo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ds.getStartPost_(e),this.endPost_=Ds.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new z(n,s))||(s=$.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=$.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority($.EMPTY_NODE);const r=this;return n.forEachChild(me,(o,l)=>{r.matches(new z(o,l))||(i=i.updateImmediateChild(o,$.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Mv{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ds(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new z(n,s))||(s=$.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=$.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=$.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority($.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,$.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const l=e;I(l.numChildren()===this.limit_,"");const a=new z(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Os(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(As(n,h));const y=l.updateImmediateChild(n,$.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(zn(d.name,d.node)),y.updateImmediateChild(d.name,d.node)):y}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(As(c.name,c.node)),r.trackChildChange(zn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,$.EMPTY_NODE)):e}}/**
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
 */class Vo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:jn}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===me}copy(){const e=new Vo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Lv(t){return t.loadsAllData()?new Wo(t.getIndex()):t.hasLimit()?new Mv(t):new Ds(t)}function Ma(t){const e={};if(t.isDefault())return e;let n;if(t.index_===me?n="$priority":t.index_===Ov?n="$value":t.index_===Mn?n="$key":(I(t.index_ instanceof kv,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ce(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ce(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ce(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ce(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ce(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function La(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==me&&(e.i=t.index_.toString()),e}/**
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
 */class bi extends Yu{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Us("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=bi.getListenId_(e,s),l={};this.listens_[o]=l;const a=Ma(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Vn(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=bi.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Ma(e._queryParams),s=e._path.toString(),i=new Ki;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+dm(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Rs(l.responseText)}catch{Ke("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Ke("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class Fv{constructor(){this.rootNode_=$.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ei(){return{value:null,children:new Map}}function lh(t,e,n){if(K(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=j(e);t.children.has(s)||t.children.set(s,Ei());const i=t.children.get(s);e=he(e),lh(i,e,n)}}function eo(t,e,n){t.value!==null?n(e,t.value):$v(t,(s,i)=>{const r=new le(e.toString()+"/"+s);eo(i,r,n)})}function $v(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Bv{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&qe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Fa=10*1e3,Uv=30*1e3,Hv=5*60*1e3;class Wv{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Bv(e);const s=Fa+(Uv-Fa)*Math.random();ms(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;qe(e,(i,r)=>{r>0&&Nt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ms(this.reportStats_.bind(this),Math.floor(Math.random()*2*Hv))}}/**
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
 */var ct;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ct||(ct={}));function ah(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function jo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function zo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ci{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=ct.ACK_USER_WRITE,this.source=ah()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new le(e));return new Ci(Z(),n,this.revert)}}else return I(j(this.path)===e,"operationForChild called for unrelated child."),new Ci(he(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ms{constructor(e,n){this.source=e,this.path=n,this.type=ct.LISTEN_COMPLETE}operationForChild(e){return K(this.path)?new Ms(this.source,Z()):new Ms(this.source,he(this.path))}}/**
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
 */class pn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=ct.OVERWRITE}operationForChild(e){return K(this.path)?new pn(this.source,Z(),this.snap.getImmediateChild(e)):new pn(this.source,he(this.path),this.snap)}}/**
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
 */class Ls{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=ct.MERGE}operationForChild(e){if(K(this.path)){const n=this.children.subtree(new le(e));return n.isEmpty()?null:n.value?new pn(this.source,Z(),n.value):new Ls(this.source,Z(),n)}else return I(j(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ls(this.source,he(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Vv{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function jv(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Dv(o.childName,o.snapshotNode))}),cs(t,i,"child_removed",e,s,n),cs(t,i,"child_added",e,s,n),cs(t,i,"child_moved",r,s,n),cs(t,i,"child_changed",e,s,n),cs(t,i,"value",e,s,n),i}function cs(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>Kv(t,l,a)),o.forEach(l=>{const a=zv(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function zv(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Kv(t,e,n){if(e.childName==null||n.childName==null)throw Xn("Should only compare child_ events.");const s=new z(e.childName,e.snapshotNode),i=new z(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Yi(t,e){return{eventCache:t,serverCache:e}}function gs(t,e,n,s){return Yi(new Kt(e,n,s),t.serverCache)}function ch(t,e,n,s){return Yi(t.eventCache,new Kt(e,n,s))}function wi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function _n(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let br;const qv=()=>(br||(br=new Ve(Ag)),br);class de{constructor(e,n=qv()){this.value=e,this.children=n}static fromObject(e){let n=new de(null);return qe(e,(s,i)=>{n=n.set(new le(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(K(e))return null;{const s=j(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(he(e),n);return r!=null?{path:we(new le(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const n=j(e),s=this.children.get(n);return s!==null?s.subtree(he(e)):new de(null)}}set(e,n){if(K(e))return new de(n,this.children);{const s=j(e),r=(this.children.get(s)||new de(null)).set(he(e),n),o=this.children.insert(s,r);return new de(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new de(null):new de(null,this.children);{const n=j(e),s=this.children.get(n);if(s){const i=s.remove(he(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new de(null):new de(this.value,r)}else return this}}get(e){if(K(e))return this.value;{const n=j(e),s=this.children.get(n);return s?s.get(he(e)):null}}setTree(e,n){if(K(e))return n;{const s=j(e),r=(this.children.get(s)||new de(null)).setTree(he(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new de(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(we(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(K(e))return null;{const r=j(e),o=this.children.get(r);return o?o.findOnPath_(he(e),we(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,s){if(K(e))return this;{this.value&&s(n,this.value);const i=j(e),r=this.children.get(i);return r?r.foreachOnPath_(he(e),we(n,i),s):new de(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(we(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class ft{constructor(e){this.writeTree_=e}static empty(){return new ft(new de(null))}}function vs(t,e,n){if(K(e))return new ft(new de(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=$e(i,e);return r=r.updateChild(o,n),new ft(t.writeTree_.set(i,r))}else{const i=new de(n),r=t.writeTree_.setTree(e,i);return new ft(r)}}}function $a(t,e,n){let s=t;return qe(n,(i,r)=>{s=vs(s,we(e,i),r)}),s}function Ba(t,e){if(K(e))return ft.empty();{const n=t.writeTree_.setTree(e,new de(null));return new ft(n)}}function to(t,e){return yn(t,e)!=null}function yn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild($e(n.path,e)):null}function Ua(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(me,(s,i)=>{e.push(new z(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new z(s,i.value))}),e}function Wt(t,e){if(K(e))return t;{const n=yn(t,e);return n!=null?new ft(new de(n)):new ft(t.writeTree_.subtree(e))}}function no(t){return t.writeTree_.isEmpty()}function Kn(t,e){return uh(Z(),t.writeTree_,e)}function uh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(I(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=uh(we(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(we(t,".priority"),s)),n}}/**
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
 */function Qi(t,e){return ph(e,t)}function Gv(t,e,n,s,i){I(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=vs(t.visibleWrites,e,n)),t.lastWriteId=s}function Yv(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Qv(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Xv(l,s.path)?i=!1:at(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Jv(t),!0;if(s.snap)t.visibleWrites=Ba(t.visibleWrites,s.path);else{const l=s.children;qe(l,a=>{t.visibleWrites=Ba(t.visibleWrites,we(s.path,a))})}return!0}else return!1}function Xv(t,e){if(t.snap)return at(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&at(we(t.path,n),e))return!0;return!1}function Jv(t){t.visibleWrites=hh(t.allWrites,Zv,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Zv(t){return t.visible}function hh(t,e,n){let s=ft.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)at(n,o)?(l=$e(n,o),s=vs(s,l,r.snap)):at(o,n)&&(l=$e(o,n),s=vs(s,Z(),r.snap.getChild(l)));else if(r.children){if(at(n,o))l=$e(n,o),s=$a(s,l,r.children);else if(at(o,n))if(l=$e(o,n),K(l))s=$a(s,Z(),r.children);else{const a=Vn(r.children,j(l));if(a){const c=a.getChild(he(l));s=vs(s,Z(),c)}}}else throw Xn("WriteRecord should have .snap or .children")}}return s}function dh(t,e,n,s,i){if(!s&&!i){const r=yn(t.visibleWrites,e);if(r!=null)return r;{const o=Wt(t.visibleWrites,e);if(no(o))return n;if(n==null&&!to(o,Z()))return null;{const l=n||$.EMPTY_NODE;return Kn(o,l)}}}else{const r=Wt(t.visibleWrites,e);if(!i&&no(r))return n;if(!i&&n==null&&!to(r,Z()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(at(c.path,e)||at(e,c.path))},l=hh(t.allWrites,o,e),a=n||$.EMPTY_NODE;return Kn(l,a)}}}function ey(t,e,n){let s=$.EMPTY_NODE;const i=yn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(me,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Wt(t.visibleWrites,e);return n.forEachChild(me,(o,l)=>{const a=Kn(Wt(r,new le(o)),l);s=s.updateImmediateChild(o,a)}),Ua(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Wt(t.visibleWrites,e);return Ua(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function ty(t,e,n,s,i){I(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=we(e,n);if(to(t.visibleWrites,r))return null;{const o=Wt(t.visibleWrites,r);return no(o)?i.getChild(n):Kn(o,i.getChild(n))}}function ny(t,e,n,s){const i=we(e,n),r=yn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Wt(t.visibleWrites,i);return Kn(o,s.getNode().getImmediateChild(n))}else return null}function sy(t,e){return yn(t.visibleWrites,e)}function iy(t,e,n,s,i,r,o){let l;const a=Wt(t.visibleWrites,e),c=yn(a,Z());if(c!=null)l=c;else if(n!=null)l=Kn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function ry(){return{visibleWrites:ft.empty(),allWrites:[],lastWriteId:-1}}function Ii(t,e,n,s){return dh(t.writeTree,t.treePath,e,n,s)}function Ko(t,e){return ey(t.writeTree,t.treePath,e)}function Ha(t,e,n,s){return ty(t.writeTree,t.treePath,e,n,s)}function Si(t,e){return sy(t.writeTree,we(t.treePath,e))}function oy(t,e,n,s,i,r){return iy(t.writeTree,t.treePath,e,n,s,i,r)}function qo(t,e,n){return ny(t.writeTree,t.treePath,e,n)}function fh(t,e){return ph(we(t.treePath,e),t.writeTree)}function ph(t,e){return{treePath:t,writeTree:e}}/**
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
 */class ly{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Os(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,As(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,zn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Os(s,e.snapshotNode,i.oldSnap));else throw Xn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class ay{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const _h=new ay;class Go{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Kt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return qo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:_n(this.viewCache_),r=oy(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function cy(t){return{filter:t}}function uy(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function hy(t,e,n,s,i){const r=new ly;let o,l;if(n.type===ct.OVERWRITE){const c=n;c.source.fromUser?o=so(t,e,c.path,c.snap,s,i,r):(I(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!K(c.path),o=Ti(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===ct.MERGE){const c=n;c.source.fromUser?o=fy(t,e,c.path,c.children,s,i,r):(I(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=io(t,e,c.path,c.children,s,i,l,r))}else if(n.type===ct.ACK_USER_WRITE){const c=n;c.revert?o=my(t,e,c.path,s,i,r):o=py(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===ct.LISTEN_COMPLETE)o=_y(t,e,n.path,s,r);else throw Xn("Unknown operation type: "+n.type);const a=r.getChanges();return dy(e,o,a),{viewCache:o,changes:a}}function dy(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=wi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(oh(wi(e)))}}function mh(t,e,n,s,i,r){const o=e.eventCache;if(Si(s,n)!=null)return e;{let l,a;if(K(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=_n(e),u=c instanceof $?c:$.EMPTY_NODE,h=Ko(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Ii(s,_n(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=j(n);if(c===".priority"){I(zt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Ha(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=he(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Ha(s,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=qo(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return gs(e,l,o.isFullyInitialized()||K(n),t.filter.filtersNodes())}}function Ti(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(K(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=j(n);if(!a.isCompleteForPath(n)&&zt(n)>1)return e;const m=he(n),R=a.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=u.updatePriority(a.getNode(),R):c=u.updateChild(a.getNode(),_,R,m,_h,null)}const h=ch(e,c,a.isFullyInitialized()||K(n),u.filtersNodes()),d=new Go(i,h,r);return mh(t,h,n,i,d,l)}function so(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new Go(i,e,r);if(K(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=gs(e,c,!0,t.filter.filtersNodes());else{const h=j(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=gs(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=he(n),_=l.getNode().getImmediateChild(h);let m;if(K(d))m=s;else{const y=u.getCompleteChild(h);y!=null?Xu(d)===".priority"&&y.getChild(Zu(d)).isEmpty()?m=y:m=y.updateChild(d,s):m=$.EMPTY_NODE}if(_.equals(m))a=e;else{const y=t.filter.updateChild(l.getNode(),h,m,d,u,o);a=gs(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Wa(t,e){return t.eventCache.isCompleteForChild(e)}function fy(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=we(n,a);Wa(e,j(u))&&(l=so(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=we(n,a);Wa(e,j(u))||(l=so(t,l,u,c,i,r,o))}),l}function Va(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function io(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;K(n)?c=s:c=new de(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=Va(t,_,d);a=Ti(t,a,new le(h),m,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),y=Va(t,m,d);a=Ti(t,a,new le(h),y,i,r,o,l)}}),a}function py(t,e,n,s,i,r,o){if(Si(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(K(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ti(t,e,n,a.getNode().getChild(n),i,r,l,o);if(K(n)){let c=new de(null);return a.getNode().forEachChild(Mn,(u,h)=>{c=c.set(new le(u),h)}),io(t,e,n,c,i,r,l,o)}else return e}else{let c=new de(null);return s.foreach((u,h)=>{const d=we(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),io(t,e,n,c,i,r,l,o)}}function _y(t,e,n,s,i){const r=e.serverCache,o=ch(e,r.getNode(),r.isFullyInitialized()||K(n),r.isFiltered());return mh(t,o,n,s,_h,i)}function my(t,e,n,s,i,r){let o;if(Si(s,n)!=null)return e;{const l=new Go(s,e,i),a=e.eventCache.getNode();let c;if(K(n)||j(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ii(s,_n(e));else{const h=e.serverCache.getNode();I(h instanceof $,"serverChildren would be complete if leaf node"),u=Ko(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=j(n);let h=qo(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,he(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,$.EMPTY_NODE,he(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ii(s,_n(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Si(s,Z())!=null,gs(e,c,o,t.filter.filtersNodes())}}/**
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
 */class gy{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Wo(s.getIndex()),r=Lv(s);this.processor_=cy(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode($.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode($.EMPTY_NODE,l.getNode(),null),u=new Kt(a,o.isFullyInitialized(),i.filtersNodes()),h=new Kt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Yi(h,u),this.eventGenerator_=new Vv(this.query_)}get query(){return this.query_}}function vy(t){return t.viewCache_.serverCache.getNode()}function yy(t){return wi(t.viewCache_)}function by(t,e){const n=_n(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!K(e)&&!n.getImmediateChild(j(e)).isEmpty())?n.getChild(e):null}function ja(t){return t.eventRegistrations_.length===0}function Ey(t,e){t.eventRegistrations_.push(e)}function za(t,e,n){const s=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Ka(t,e,n,s){e.type===ct.MERGE&&e.source.queryId!==null&&(I(_n(t.viewCache_),"We should always have a full cache before handling merges"),I(wi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=hy(t.processor_,i,e,n,s);return uy(t.processor_,r.viewCache),I(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,gh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Cy(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(me,(r,o)=>{s.push(zn(r,o))}),n.isFullyInitialized()&&s.push(oh(n.getNode())),gh(t,s,n.getNode(),e)}function gh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return jv(t.eventGenerator_,e,n,i)}/**
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
 */let xi;class vh{constructor(){this.views=new Map}}function wy(t){I(!xi,"__referenceConstructor has already been defined"),xi=t}function Iy(){return I(xi,"Reference.ts has not been loaded"),xi}function Sy(t){return t.views.size===0}function Yo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return I(r!=null,"SyncTree gave us an op for an invalid query."),Ka(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Ka(o,e,n,s));return r}}function yh(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Ii(n,i?s:null),a=!1;l?a=!0:s instanceof $?(l=Ko(n,s),a=!1):(l=$.EMPTY_NODE,a=!1);const c=Yi(new Kt(l,a,!1),new Kt(s,i,!1));return new gy(e,c)}return o}function Ty(t,e,n,s,i,r){const o=yh(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Ey(o,n),Cy(o,n)}function xy(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=qt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(za(c,n,s)),ja(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(za(a,n,s)),ja(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!qt(t)&&r.push(new(Iy())(e._repo,e._path)),{removed:r,events:o}}function bh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Vt(t,e){let n=null;for(const s of t.views.values())n=n||by(s,e);return n}function Eh(t,e){if(e._queryParams.loadsAllData())return Xi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Ch(t,e){return Eh(t,e)!=null}function qt(t){return Xi(t)!=null}function Xi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ri;function Ry(t){I(!Ri,"__referenceConstructor has already been defined"),Ri=t}function Py(){return I(Ri,"Reference.ts has not been loaded"),Ri}let Ny=1;class qa{constructor(e){this.listenProvider_=e,this.syncPointTree_=new de(null),this.pendingWriteTree_=ry(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function wh(t,e,n,s,i){return Gv(t.pendingWriteTree_,e,n,s,i),i?Vs(t,new pn(ah(),e,n)):[]}function an(t,e,n=!1){const s=Yv(t.pendingWriteTree_,e);if(Qv(t.pendingWriteTree_,e)){let r=new de(null);return s.snap!=null?r=r.set(Z(),!0):qe(s.children,o=>{r=r.set(new le(o),!0)}),Vs(t,new Ci(s.path,r,n))}else return[]}function Ws(t,e,n){return Vs(t,new pn(jo(),e,n))}function ky(t,e,n){const s=de.fromObject(n);return Vs(t,new Ls(jo(),e,s))}function Ay(t,e){return Vs(t,new Ms(jo(),e))}function Oy(t,e,n){const s=Xo(t,n);if(s){const i=Jo(s),r=i.path,o=i.queryId,l=$e(r,e),a=new Ms(zo(o),l);return Zo(t,r,a)}else return[]}function Pi(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Ch(o,e))){const a=xy(o,e,n,s);Sy(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>qt(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=Ly(d);for(let m=0;m<_.length;++m){const y=_[m],R=y.query,A=xh(t,y);t.listenProvider_.startListening(ys(R),Fs(t,R),A.hashFn,A.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(ys(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(Ji(d));t.listenProvider_.stopListening(ys(d),_)}))}Fy(t,c)}return l}function Ih(t,e,n,s){const i=Xo(t,s);if(i!=null){const r=Jo(i),o=r.path,l=r.queryId,a=$e(o,e),c=new pn(zo(l),a,n);return Zo(t,o,c)}else return[]}function Dy(t,e,n,s){const i=Xo(t,s);if(i){const r=Jo(i),o=r.path,l=r.queryId,a=$e(o,e),c=de.fromObject(n),u=new Ls(zo(l),a,c);return Zo(t,o,u)}else return[]}function ro(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const m=$e(d,i);r=r||Vt(_,m),o=o||qt(_)});let l=t.syncPointTree_.get(i);l?(o=o||qt(l),r=r||Vt(l,Z())):(l=new vh,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=$.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const y=Vt(m,Z());y&&(r=r.updateImmediateChild(_,y))}));const c=Ch(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=Ji(e);I(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=$y();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=Qi(t.pendingWriteTree_,i);let h=Ty(l,e,n,u,r,a);if(!c&&!o&&!s){const d=Eh(l,e);h=h.concat(By(t,e,d))}return h}function Qo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=$e(o,e),c=Vt(l,a);if(c)return c});return dh(i,e,r,n,!0)}function My(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=$e(c,n);s=s||Vt(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Vt(i,Z()):(i=new vh,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Kt(s,!0,!1):null,l=Qi(t.pendingWriteTree_,e._path),a=yh(i,e,l,r?o.getNode():$.EMPTY_NODE,r);return yy(a)}function Vs(t,e){return Sh(e,t.syncPointTree_,null,Qi(t.pendingWriteTree_,Z()))}function Sh(t,e,n,s){if(K(t.path))return Th(t,e,n,s);{const i=e.get(Z());n==null&&i!=null&&(n=Vt(i,Z()));let r=[];const o=j(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=fh(s,o);r=r.concat(Sh(l,a,c,u))}return i&&(r=r.concat(Yo(i,t,s,n))),r}}function Th(t,e,n,s){const i=e.get(Z());n==null&&i!=null&&(n=Vt(i,Z()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=fh(s,o),u=t.operationForChild(o);u&&(r=r.concat(Th(u,l,a,c)))}),i&&(r=r.concat(Yo(i,t,s,n))),r}function xh(t,e){const n=e.query,s=Fs(t,n);return{hashFn:()=>(vy(e)||$.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Oy(t,n._path,s):Ay(t,n._path);{const r=Mg(i,n);return Pi(t,n,null,r)}}}}function Fs(t,e){const n=Ji(e);return t.queryToTagMap.get(n)}function Ji(t){return t._path.toString()+"$"+t._queryIdentifier}function Xo(t,e){return t.tagToQueryMap.get(e)}function Jo(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new le(t.substr(0,e))}}function Zo(t,e,n){const s=t.syncPointTree_.get(e);I(s,"Missing sync point for query tag that we're tracking");const i=Qi(t.pendingWriteTree_,e);return Yo(s,n,i,null)}function Ly(t){return t.fold((e,n,s)=>{if(n&&qt(n))return[Xi(n)];{let i=[];return n&&(i=bh(n)),qe(s,(r,o)=>{i=i.concat(o)}),i}})}function ys(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Py())(t._repo,t._path):t}function Fy(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ji(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function $y(){return Ny++}function By(t,e,n){const s=e._path,i=Fs(t,e),r=xh(t,n),o=t.listenProvider_.startListening(ys(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)I(!qt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!K(c)&&u&&qt(u))return[Xi(u).query];{let d=[];return u&&(d=d.concat(bh(u).map(_=>_.query))),qe(h,(_,m)=>{d=d.concat(m)}),d}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(ys(u),Fs(t,u))}}return o}/**
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
 */class el{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new el(n)}node(){return this.node_}}class tl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=we(this.path_,e);return new tl(this.syncTree_,n)}node(){return Qo(this.syncTree_,this.path_)}}const Uy=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ga=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Hy(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Wy(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Hy=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},Wy=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&I(!1,"Unexpected increment value: "+s);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Vy=function(t,e,n,s){return nl(e,new tl(n,t),s)},Rh=function(t,e,n){return nl(t,new el(e),n)};function nl(t,e,n){const s=t.getPriority().val(),i=Ga(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Ga(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Te(l,Re(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Te(i))),o.forEachChild(me,(l,a)=>{const c=nl(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class sl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function il(t,e){let n=e instanceof le?e:new le(e),s=t,i=j(n);for(;i!==null;){const r=Vn(s.node.children,i)||{children:{},childCount:0};s=new sl(i,s,r),n=he(n),i=j(n)}return s}function es(t){return t.node.value}function Ph(t,e){t.node.value=e,oo(t)}function Nh(t){return t.node.childCount>0}function jy(t){return es(t)===void 0&&!Nh(t)}function Zi(t,e){qe(t.node.children,(n,s)=>{e(new sl(n,t,s))})}function kh(t,e,n,s){n&&!s&&e(t),Zi(t,i=>{kh(i,e,!0,s)}),n&&s&&e(t)}function zy(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function js(t){return new le(t.parent===null?t.name:js(t.parent)+"/"+t.name)}function oo(t){t.parent!==null&&Ky(t.parent,t.name,t)}function Ky(t,e,n){const s=jy(n),i=Nt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,oo(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,oo(t))}/**
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
 */const qy=/[\[\].#$\/\u0000-\u001F\u007F]/,Gy=/[\[\].#$\u0000-\u001F\u007F]/,Er=10*1024*1024,Ah=function(t){return typeof t=="string"&&t.length!==0&&!qy.test(t)},Oh=function(t){return typeof t=="string"&&t.length!==0&&!Gy.test(t)},Yy=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Oh(t)},Dh=function(t,e,n,s){s&&e===void 0||rl(Ao(t,"value"),e,n)},rl=function(t,e,n){const s=n instanceof le?new pv(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+nn(s));if(typeof e=="function")throw new Error(t+"contains a function "+nn(s)+" with contents = "+e.toString());if(Nu(e))throw new Error(t+"contains "+e.toString()+" "+nn(s));if(typeof e=="string"&&e.length>Er/3&&qi(e)>Er)throw new Error(t+"contains a string greater than "+Er+" utf8 bytes "+nn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(qe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ah(o)))throw new Error(t+" contains an invalid key ("+o+") "+nn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);_v(s,o),rl(t,l,s),mv(s)}),i&&r)throw new Error(t+' contains ".value" child '+nn(s)+" in addition to actual children.")}},Mh=function(t,e,n,s){if(!(s&&n===void 0)&&!Oh(n))throw new Error(Ao(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Qy=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Mh(t,e,n,s)},Lh=function(t,e){if(j(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Xy=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ah(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Yy(n))throw new Error(Ao(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Jy{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ol(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Bo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Fh(t,e,n){ol(t,n),$h(t,s=>Bo(s,e))}function bt(t,e,n){ol(t,n),$h(t,s=>at(s,e)||at(e,s))}function $h(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Zy(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Zy(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();hn&&De("event: "+n.toString()),Zn(s)}}}/**
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
 */const eb="repo_interrupt",tb=25;class nb{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Jy,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ei(),this.transactionQueueTree_=new sl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function sb(t,e,n){if(t.stats_=Fo(t.repoInfo_),t.forceRestClient_||Bg())t.server_=new bi(t.repoInfo_,(s,i,r,o)=>{Ya(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Qa(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ce(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new St(t.repoInfo_,e,(s,i,r,o)=>{Ya(t,s,i,r,o)},s=>{Qa(t,s)},s=>{ib(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=jg(t.repoInfo_,()=>new Wv(t.stats_,t.server_)),t.infoData_=new Fv,t.infoSyncTree_=new qa({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=Ws(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),al(t,"connected",!1),t.serverSyncTree_=new qa({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);bt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Bh(t){const n=t.infoData_.getNode(new le(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ll(t){return Uy({timestamp:Bh(t)})}function Ya(t,e,n,s,i){t.dataUpdateCount++;const r=new le(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=pi(n,c=>Re(c));o=Dy(t.serverSyncTree_,r,a,i)}else{const a=Re(n);o=Ih(t.serverSyncTree_,r,a,i)}else if(s){const a=pi(n,c=>Re(c));o=ky(t.serverSyncTree_,r,a)}else{const a=Re(n);o=Ws(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=tr(t,r)),bt(t.eventQueue_,l,o)}function Qa(t,e){al(t,"connected",e),e===!1&&lb(t)}function ib(t,e){qe(e,(n,s)=>{al(t,n,s)})}function al(t,e,n){const s=new le("/.info/"+e),i=Re(n);t.infoData_.updateSnapshot(s,i);const r=Ws(t.infoSyncTree_,s,i);bt(t.eventQueue_,s,r)}function Uh(t){return t.nextWriteId_++}function rb(t,e,n){const s=My(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Re(i).withIndex(e._queryParams.getIndex());ro(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ws(t.serverSyncTree_,e._path,r);else{const l=Fs(t.serverSyncTree_,e);o=Ih(t.serverSyncTree_,e._path,r,l)}return bt(t.eventQueue_,e._path,o),Pi(t.serverSyncTree_,e,n,null,!0),r},i=>(er(t,"get for query "+Ce(e)+" failed: "+i),Promise.reject(new Error(i))))}function ob(t,e,n,s,i){er(t,"set",{path:e.toString(),value:n,priority:s});const r=ll(t),o=Re(n,s),l=Qo(t.serverSyncTree_,e),a=Rh(o,l,r),c=Uh(t),u=wh(t.serverSyncTree_,e,a,c,!0);ol(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const m=d==="ok";m||Ke("set at "+e+" failed: "+d);const y=an(t.serverSyncTree_,c,!m);bt(t.eventQueue_,e,y),ub(t,i,d,_)});const h=zh(t,e);tr(t,h),bt(t.eventQueue_,h,[])}function lb(t){er(t,"onDisconnectEvents");const e=ll(t),n=Ei();eo(t.onDisconnect_,Z(),(i,r)=>{const o=Vy(i,r,t.serverSyncTree_,e);lh(n,i,o)});let s=[];eo(n,Z(),(i,r)=>{s=s.concat(Ws(t.serverSyncTree_,i,r));const o=zh(t,i);tr(t,o)}),t.onDisconnect_=Ei(),bt(t.eventQueue_,Z(),s)}function ab(t,e,n){let s;j(e._path)===".info"?s=ro(t.infoSyncTree_,e,n):s=ro(t.serverSyncTree_,e,n),Fh(t.eventQueue_,e._path,s)}function Xa(t,e,n){let s;j(e._path)===".info"?s=Pi(t.infoSyncTree_,e,n):s=Pi(t.serverSyncTree_,e,n),Fh(t.eventQueue_,e._path,s)}function cb(t){t.persistentConnection_&&t.persistentConnection_.interrupt(eb)}function er(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),De(n,...e)}function ub(t,e,n,s){e&&Zn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Hh(t,e,n){return Qo(t.serverSyncTree_,e,n)||$.EMPTY_NODE}function cl(t,e=t.transactionQueueTree_){if(e||nr(t,e),es(e)){const n=Vh(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&hb(t,js(e),n)}else Nh(e)&&Zi(e,n=>{cl(t,n)})}function hb(t,e,n){const s=n.map(c=>c.currentWriteId),i=Hh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];I(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=$e(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{er(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(an(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();nr(t,il(t.transactionQueueTree_,e)),cl(t,t.transactionQueueTree_),bt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Zn(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ke("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}tr(t,e)}},o)}function tr(t,e){const n=Wh(t,e),s=js(n),i=Vh(t,n);return db(t,i,s),s}function db(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=$e(n,a.path);let u=!1,h;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(an(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=tb)u=!0,h="maxretry",i=i.concat(an(t.serverSyncTree_,a.currentWriteId,!0));else{const d=Hh(t,a.path,o);a.currentInputSnapshot=d;const _=e[l].update(d.val());if(_!==void 0){rl("transaction failed: Data returned ",_,a.path);let m=Re(_);typeof _=="object"&&_!=null&&Nt(_,".priority")||(m=m.updatePriority(d.getPriority()));const R=a.currentWriteId,A=ll(t),B=Rh(m,d,A);a.currentOutputSnapshotRaw=m,a.currentOutputSnapshotResolved=B,a.currentWriteId=Uh(t),o.splice(o.indexOf(R),1),i=i.concat(wh(t.serverSyncTree_,a.path,B,a.currentWriteId,a.applyLocally)),i=i.concat(an(t.serverSyncTree_,R,!0))}else u=!0,h="nodata",i=i.concat(an(t.serverSyncTree_,a.currentWriteId,!0))}bt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}nr(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Zn(s[l]);cl(t,t.transactionQueueTree_)}function Wh(t,e){let n,s=t.transactionQueueTree_;for(n=j(e);n!==null&&es(s)===void 0;)s=il(s,n),e=he(e),n=j(e);return s}function Vh(t,e){const n=[];return jh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function jh(t,e,n){const s=es(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Zi(e,i=>{jh(t,i,n)})}function nr(t,e){const n=es(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Ph(e,n.length>0?n:void 0)}Zi(e,s=>{nr(t,s)})}function zh(t,e){const n=js(Wh(t,e)),s=il(t.transactionQueueTree_,e);return zy(s,i=>{Cr(t,i)}),Cr(t,s),kh(s,i=>{Cr(t,i)}),n}function Cr(t,e){const n=es(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(an(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ph(e,void 0):n.length=r+1,bt(t.eventQueue_,js(e),i);for(let o=0;o<s.length;o++)Zn(s[o])}}/**
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
 */function fb(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function pb(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ja=function(t,e){const n=_b(t),s=n.namespace;n.domain==="firebase.com"&&Rt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Rt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Ng();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Wu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new le(n.pathString)}},_b=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=fb(t.substring(u,h)));const d=pb(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */const Za="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",mb=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Za.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Za.charAt(e[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class Kh{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ce(this.snapshot.exportVal())}}class qh{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Gh{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ul{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return K(this._path)?null:Xu(this._path)}get ref(){return new Et(this._repo,this._path)}get _queryIdentifier(){const e=La(this._queryParams),n=Mo(e);return n==="{}"?"default":n}get _queryObject(){return La(this._queryParams)}isEqual(e){if(e=vn(e),!(e instanceof ul))return!1;const n=this._repo===e._repo,s=Bo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+fv(this._path)}}class Et extends ul{constructor(e,n){super(e,n,new Vo,!1)}get parent(){const e=Zu(this._path);return e===null?null:new Et(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class qn{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new le(e),s=Tt(this.ref,e);return new qn(this._node.getChild(n),s,me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new qn(i,Tt(this.ref,s),me)))}hasChild(e){const n=new le(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ni(t,e){return t=vn(t),t._checkNotDeleted("ref"),e!==void 0?Tt(t._root,e):t._root}function Tt(t,e){return t=vn(t),j(t._path)===null?Qy("child","path",e,!1):Mh("child","path",e,!1),new Et(t._repo,we(t._path,e))}function gb(t,e){t=vn(t),Lh("push",t._path),Dh("push",e,t._path,!0);const n=Bh(t._repo),s=mb(n),i=Tt(t,s),r=Tt(t,s);let o;return e!=null?o=hl(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function hl(t,e){t=vn(t),Lh("set",t._path),Dh("set",e,t._path,!1);const n=new Ki;return ob(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function wr(t){t=vn(t);const e=new Gh(()=>{}),n=new sr(e);return rb(t._repo,t,n).then(s=>new qn(s,new Et(t._repo,t._path),t._queryParams.getIndex()))}class sr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Kh("value",this,new qn(e.snapshotNode,new Et(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new qh(this,e,n):null}matches(e){return e instanceof sr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class dl{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new qh(this,e,n):null}createEvent(e,n){I(e.childName!=null,"Child events should have a childName.");const s=Tt(new Et(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Kh(e.type,this,new qn(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof dl?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function vb(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(u,h)=>{Xa(t._repo,t,l),a(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Gh(n,r||void 0),l=e==="value"?new sr(o):new dl(e,o);return ab(t._repo,t,l),()=>Xa(t._repo,t,l)}function yb(t,e,n,s){return vb(t,"value",e,n,s)}wy(Et);Ry(Et);/**
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
 */const bb="FIREBASE_DATABASE_EMULATOR_HOST",lo={};let Eb=!1;function Cb(t,e,n,s){t.repoInfo_=new Wu(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),s&&(t.authTokenProvider_=s)}function wb(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Rt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),De("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ja(r,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[bb]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Ja(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new Dn(Dn.OWNER):new Hg(t.name,t.options,e);Xy("Invalid Firebase Database URL",o),K(o.path)||Rt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Sb(l,t,u,new Ug(t.name,n));return new Tb(h,t)}function Ib(t,e){const n=lo[e];(!n||n[t.key]!==t)&&Rt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),cb(t),delete n[t.key]}function Sb(t,e,n,s){let i=lo[e.name];i||(i={},lo[e.name]=i);let r=i[t.toURLString()];return r&&Rt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new nb(t,Eb,n,s),i[t.toURLString()]=r,r}class Tb{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(sb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Et(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Ib(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Rt("Cannot call "+e+" on a deleted database.")}}function oi(t=fg(),e){const n=cg(t,"database").getImmediate({identifier:e}),s=im("database");return s&&xb(n,...s),n}function xb(t,e,n,s={}){t=vn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Rt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Rt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Dn(Dn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:om(s.mockUserToken,t.app.options.projectId);r=new Dn(o)}Cb(i,e,n,r)}/**
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
 */function Rb(t){Sg(dg),mi(new Ps("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return wb(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),An(ya,ba,t),An(ya,ba,"esm2017")}St.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};St.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Rb();const Pb={class:"chat-box"},Nb={class:"chat-img"},kb=["src"],Ab={class:"chat-font"},Ob={class:"chat-time"},Db={class:"chat-text"},Mb=["onKeyup"],Lb={__name:"Chat",setup(t){const e=gn(),s=Do({apiKey:"AIzaSyBZbHSiAQrJktVbyRoJ8i6EwCLns-TMmfk",authDomain:"mygame-xian.firebaseapp.com",projectId:"mygame-xian",storageBucket:"mygame-xian.appspot.com",messagingSenderId:"496921879585",appId:"1:496921879585:web:34ead29c0601e5c592af60"}),i=oi(s),r=Ni(i,"Chat/"),o=Ne("");function l(){const h=gb(r).key;if(!o.value.trim())return;let d=new Date;hl(Ni(i,`Chat/${h}`),{name:e.Player.name,message:o.value,icon:e.Player.img,time:d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate()+" -"+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+"-"}),o.value=""}function a(){let h=document.getElementById("chat-home"),d;clearTimeout(d),d=setTimeout(()=>{h.scrollTop=h.scrollHeight},100)}const c=Ne([]);yb(r,h=>{c.value=h.val(),a()}),kn(e,()=>{a()});const u=Ne(!1);return(h,d)=>(je(),ze(et,null,[C("button",{class:"chat-open",onClick:d[0]||(d[0]=_=>u.value=!u.value)},"\u8DE8\u754C\u50B3\u8A0A"),C("div",{id:"chat-home",class:ke({chat_open_anm:u.value,chat_close_anm:!u.value})},[(je(!0),ze(et,null,vf(c.value,(_,m)=>(je(),ze("div",Pb,[C("div",Nb,[C("img",{src:_.icon,alt:""},null,8,kb)]),C("div",Ab,[C("span",null,be(_.name)+"\uFF1A",1),C("p",Ob,be(_.time),1),C("p",Db,be(_.message),1)])]))),256))],2),C("div",{class:ke(["chat-input",{display_none:!u.value}])},[Pr(C("input",{type:"text","onUpdate:modelValue":d[1]||(d[1]=_=>o.value=_),onKeyup:Yc(l,["enter"])},null,40,Mb),[[Fr,o.value]]),C("button",{onClick:l},"\u9001\u51FA")],2)],64))}},Fb=Gt(Lb,[["__scopeId","data-v-ad5a7362"]]);const $b={__name:"Nav",setup(t){return(e,n)=>(je(),ze("nav",null,[re(te(en),{to:"/home"},{default:Jt(()=>[gt("\u6D1E\u5E9C")]),_:1}),re(te(en),{to:"/make"},{default:Jt(()=>[gt("\u935B\u9020")]),_:1}),re(te(en),{to:"/alchemy"},{default:Jt(()=>[gt("\u7149\u4E39")]),_:1}),re(te(en),{to:"/sublimation"},{default:Jt(()=>[gt("\u4FEE\u7149")]),_:1}),re(te(en),{to:"/pack"},{default:Jt(()=>[gt("\u884C\u56CA")]),_:1}),re(te(en),{to:"/start"},{default:Jt(()=>[gt("\u65C5\u9014")]),_:1})]))}},ts=Gt($b,[["__scopeId","data-v-6baad6d0"]]);const Bb={class:"player-home"},Ub={class:"player-img"},Hb=["src"],Wb={class:"profile-box"},Vb={class:"profile-lv"},jb={class:"profile-data"},zb={class:"profile-data"},Kb={class:"profile-data"},qb={__name:"Info",setup(t){const e=gn();return(n,s)=>(je(),ze("div",Bb,[C("div",Ub,[C("img",{src:te(e).Player.img,alt:""},null,8,Hb)]),C("div",Wb,[C("div",Vb,[C("span",null,be(te(e).Player.name),1),C("p",null,"\u4F4D\u9762\u788E\u7247\uFF1A"+be(te(e).Player.fragments),1),C("p",null,"\u5F71\u97FF\u5EA6\uFF1A"+be(te(e).Player.interfere),1)]),C("div",jb,"\u9748\u529B\uFF1A"+be(te(e).Player.power),1),C("div",zb,"\u52AB\u904B\uFF1A"+be(te(e).Player.probability)+"%",1),C("div",Kb,"\u9748\u77F3\uFF1A"+be(te(e).Player.money),1)])]))}},Gb=Gt(qb,[["__scopeId","data-v-e4424a11"]]),Yb={id:"center_wrapper",class:"flex_center"},Qb={id:"wrapper"},Xb={class:"home_top"},Jb={id:"Info"},Zb={id:"Chat"},eE={__name:"HomeView",setup(t){return(e,n)=>(je(),ze("div",Yb,[C("div",Qb,[C("div",Xb,[C("div",Jb,[re(Gb)]),C("div",Zb,[re(Fb)])]),re(ts)])]))}},tE={id:"center_wrapper",class:"flex_center"},nE={id:"wrapper"},sE=C("div",{class:"home_top"},null,-1),iE={__name:"AlchemyView",setup(t){const e=gn(),n=zi();function s(){e.Player.meditate&&(alert("\u6253\u5750\u4E2D\uFF0C\u4E0D\u53EF\u96A8\u610F\u52D5\u4F5C"),n.replace({path:"/sublimation"}))}return s(),(i,r)=>(je(),ze("div",tE,[C("div",nE,[sE,re(ts)])]))}},rE={id:"center_wrapper",class:"flex_center"},oE={id:"wrapper"},lE=C("div",{class:"home_top"},null,-1),aE={__name:"MakeView",setup(t){const e=gn(),n=zi();function s(){e.Player.meditate&&(alert("\u6253\u5750\u4E2D\uFF0C\u4E0D\u53EF\u96A8\u610F\u52D5\u4F5C"),n.replace({path:"/sublimation"}))}return s(),(i,r)=>(je(),ze("div",rE,[C("div",oE,[lE,re(ts)])]))}},Pe="/Vue3-Game-Xian/assets/nzwu2vpc3gc.9d50232c.jpeg";const cE={id:"center_wrapper",class:"flex_center"},uE={id:"wrapper"},hE={class:"home_top"},dE={class:"type"},fE=Uf('<div class="pack-boxhome" data-v-3c908b93><div class="pack-boxtop" data-v-3c908b93><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>1</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>7</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>99</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>99</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>99</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>99</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>99</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>75</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>55</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>15</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>9</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>22</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>3</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>65</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>9</p></div></div></div><div class="pack-box" data-v-3c908b93><div class="pack-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93></div><div class="pack-hidden" data-v-3c908b93><div class="pack-data" data-v-3c908b93><p data-v-3c908b93>1</p></div></div></div></div></div><div class="pack-infohme" data-v-3c908b93><div class="pack-info" data-v-3c908b93><div class="pack-info-img" data-v-3c908b93><div class="info-img" data-v-3c908b93><img src="'+Pe+'" alt="" data-v-3c908b93><div class="info-num" data-v-3c908b93><p data-v-3c908b93>2</p></div></div></div><div class="pack-info-text" data-v-3c908b93><div class="pack-info-name" data-v-3c908b93> \u7834\u5883\u4ED9\u4E39 </div><div class="pack-info-illustrate" data-v-3c908b93> \u4E0A\u53E4\u4ED9\u754C\u79D8\u4E39\uFF0C\u5403\u4E00\u9846\u5C31\u5347\u4ED9 </div><div class="pack-info-note" data-v-3c908b93> \u751F\u6B7B\u7531\u5929\uFF0C\u751F\u9084\u73870.001% </div></div><div class="pack-info-use" data-v-3c908b93><button data-v-3c908b93>\u4F7F\u7528</button></div></div></div>',2),pE={__name:"PackView",setup(t){const e=Ne("all");return(n,s)=>(je(),ze("div",cE,[C("div",uE,[C("div",hE,[C("div",dE,[C("button",{onClick:s[0]||(s[0]=i=>e.value="all"),class:ke({now_botton:e.value=="all"})},"\u5168\u90E8",2),C("button",{onClick:s[1]||(s[1]=i=>e.value="\u6D88\u8017"),class:ke({now_botton:e.value=="\u6D88\u8017"})},"\u6D88\u8017",2),C("button",{onClick:s[2]||(s[2]=i=>e.value="\u6CD5\u5177"),class:ke({now_botton:e.value=="\u6CD5\u5177"})},"\u6CD5\u5177",2),C("button",{onClick:s[3]||(s[3]=i=>e.value="\u6750\u6599"),class:ke({now_botton:e.value=="\u6750\u6599"})},"\u6750\u6599",2),C("button",{onClick:s[4]||(s[4]=i=>e.value="\u4F4D\u9762"),class:ke({now_botton:e.value=="\u4F4D\u9762"})},"\u4F4D\u9762",2)]),fE]),re(ts)])]))}},_E=Gt(pE,[["__scopeId","data-v-3c908b93"]]),mE="/Vue3-Game-Xian/assets/5BIRzwqCxR.af57560a.png";const ns=t=>(So("data-v-230fe933"),t=t(),To(),t),gE={id:"center_wrapper",class:"flex_center"},vE={id:"wrapper"},yE={class:"home_top"},bE={class:"info"},EE={class:"sub-absolute"},CE=ns(()=>C("p",null,null,-1)),wE=ns(()=>C("span",null,"\u6B63\u5728\u6253\u5750",-1)),IE={class:"sub-button"},SE=ns(()=>C("div",{class:"character-img"},[C("img",{src:mE,alt:""})],-1)),TE=ns(()=>C("p",null,"\u7D50\u7B97\uFF1A",-1)),xE=ns(()=>C("p",null,"\u9EDE\u64CA\u95DC\u9589",-1)),RE=ns(()=>C("p",null,"\u60A8\u78BA\u5B9A\u8981\u958B\u59CB\u6E21\u52AB\u55CE\uFF1F",-1)),PE={__name:"SublimationView",setup(t){const e=gn();function n(){e.Player.meditate&&(window.setTime=setInterval(()=>{u()},1e3))}n();function s(){if(e.Player.meditate){clearInterval(setTime),e.Player.meditate=!e.Player.meditate;let m=0;switch(e.Player.lv){case"\u7DF4\u9AD4":m+=c.value,r.value=c.value;break;case"\u7149\u6C23":m+=c.value*2,r.value=c.value*2;break;case"\u7BC9\u57FA":m+=c.value*4,r.value=c.value*4;break;case"\u7D50\u4E39":m+=c.value*6,r.value=c.value*6;break;case"\u91D1\u4E39":m+=c.value*8,r.value=c.value*8;break;case"\u5143\u5B30":m+=c.value*10,r.value=c.value*10;break;case"\u5316\u795E":m+=c.value*15,r.value=c.value*15;break;case"\u771F\u4ED9":m+=c.value*25,r.value=c.value*25;break;default:console.log("\u5075\u6E2C\u5931\u6557");break}switch(e.Player.props){case"\u795E\u5143\u4E38":m+=c.value*10,o.value=c.value*10;break;default:console.log("\u5075\u6E2C\u5931\u6557");break}l.value=r.value+o.value,i.value=!0,e.Player.power+=m,c.value=0}else{c.value=0;let m=new Date;e.Player.meditateStatrt=m.getTime(),e.Player.meditateStatrtTime=m.getFullYear()+"/"+(m.getMonth()+1)+"/"+m.getDate()+" "+m.getHours()+":"+m.getMinutes()+":"+m.getSeconds(),e.Player.meditate=!e.Player.meditate,window.setTime=setInterval(()=>{u()},1e3)}}const i=Ne(!1),r=Ne(0),o=Ne(0),l=Ne(0);function a(){switch(e.Player.lv){case"\u7DF4\u9AD4":e.Player.power+=2;break;case"\u7149\u6C23":e.Player.power+=4;break;case"\u7BC9\u57FA":e.Player.power+=6;break;case"\u7D50\u4E39":e.Player.power+=10;break;case"\u91D1\u4E39":e.Player.power+=16;break;case"\u5143\u5B30":e.Player.power+=24;break;case"\u5316\u795E":e.Player.power+=34;break;case"\u771F\u4ED9":e.Player.power+=50;break;default:console.log("\u5075\u6E2C\u5931\u6557");break}switch(e.Player.props){case"\u795E\u5143\u4E38":e.Player.power+=1;break;default:console.log("\u5075\u6E2C\u5931\u6557");break}}const c=Ne(0);function u(){let y=new Date().getTime()-e.Player.meditateStatrt;c.value=Math.floor(y/1e3)}const h=Ne(!1);function d(){if(e.Player.meditate){alert("\u6B63\u5728\u6253\u5750\uFF0C\u7121\u6CD5\u9032\u884C\u6E21\u52AB");return}else i.value=!1,h.value=!0}function _(){if(e.Player.meditate){alert("\u6B63\u5728\u6253\u5750\uFF0C\u7121\u6CD5\u9032\u884C\u6E21\u52AB");return}else alert("\uFF27\uFF2F\uFF27\uFF2F");i.value=!1,h.value=!1}return(m,y)=>(je(),ze("div",gE,[C("div",vE,[C("div",yE,[C("div",bE,[C("span",null,be(te(e).Player.name)+" - "+be(te(e).Player.lv)+"\u5883",1),gt(" -"),C("p",null,"\u9748\u529B\uFF1A"+be(te(e).Player.power),1),gt("- "),C("p",null,"\u52AB\u904B\uFF1A"+be(te(e).Player.probability)+"%",1),gt("- ")]),C("div",EE,[C("div",{class:ke(["sub-meditate",{display_none:!te(e).Player.meditate}])},[CE,wE,C("p",null,"\u958B\u59CB\u65E5\uFF1A"+be(te(e).Player.meditateStatrtTime),1),C("p",null,"\u7D2F\u7A4D\u6642\u9593\uFF1A"+be(c.value)+" \u79D2",1)],2),C("div",IE,[C("button",{class:ke({display_none:te(e).Player.meditate}),onClick:y[0]||(y[0]=R=>s())},"\u6253\u5750",2),C("button",{class:ke({display_none:!te(e).Player.meditate}),onClick:y[1]||(y[1]=R=>s())},"\u6253\u5750\u7D50\u675F",2),C("button",{onClick:y[2]||(y[2]=R=>a()),class:"sub-power"},"\u935B\u7DF4"),C("button",{onClick:y[3]||(y[3]=R=>d())},"\u6E21\u52AB")])]),SE,C("div",{class:ke([{display_none:!i.value},"meditate"]),onClick:y[4]||(y[4]=R=>i.value=!1)},[TE,C("p",null,"\u5883\u754C\u9748\u529B\uFF1A"+be(r.value),1),C("p",null,"\u8F14\u5177\u9748\u529B\uFF1A"+be(o.value),1),C("p",null,"\u7E3D\u8A08\uFF1A"+be(l.value),1),xE],2),C("div",{class:ke(["meditate",{display_none:!h.value}])},[RE,C("p",null,"\u7576\u524D\u52AB\u904B\u70BA\uFF1A"+be(te(e).Player.probability)+"%",1),C("div",null,[C("button",{onClick:y[5]||(y[5]=R=>_())},"\u78BA\u5B9A"),C("button",{onClick:y[6]||(y[6]=R=>h.value=!1)},"\u53D6\u6D88")])],2)]),re(ts)])]))}},NE=Gt(PE,[["__scopeId","data-v-230fe933"]]),kE={id:"center_wrapper",class:"flex_center"},AE={id:"wrapper"},OE=C("div",{class:"home_top"},null,-1),DE={__name:"StartView",setup(t){const e=gn(),n=zi();function s(){e.Player.meditate&&(alert("\u6253\u5750\u4E2D\uFF0C\u4E0D\u53EF\u96A8\u610F\u52D5\u4F5C"),n.replace({path:"/sublimation"}))}return s(),(i,r)=>(je(),ze("div",kE,[C("div",AE,[OE,re(ts)])]))}};const fl=t=>(So("data-v-99202399"),t=t(),To(),t),ME={id:"center_wrapper",class:"flex_center"},LE={id:"wrapper"},FE={class:"login-home"},$E={class:"login-home"},BE=fl(()=>C("h3",null,"*\u5E33\u865F\u8ACB\u52FF\u53C3\u96DC\u7B26\u865F*",-1)),UE={class:"login-box"},HE=fl(()=>C("p",null,"\u5E33\u865F\uFF1A",-1)),WE={class:"login-box"},VE=fl(()=>C("p",null,"\u5BC6\u78BC\uFF1A",-1)),jE={class:"login-button"},zE={__name:"LoginView",setup(t){const e=zi(),s=Do({apiKey:"AIzaSyBZbHSiAQrJktVbyRoJ8i6EwCLns-TMmfk",authDomain:"mygame-xian.firebaseapp.com",projectId:"mygame-xian",storageBucket:"mygame-xian.appspot.com",messagingSenderId:"496921879585",appId:"1:496921879585:web:34ead29c0601e5c592af60"});oi(s);const i=Ni(oi()),r=oi(),o=gn();function l(_){wr(Tt(i,`Users/${_}`)).then(m=>{m.exists()?(o.user.account=_,o.user.havecard=m.val().havercard,o.user.remainCard=m.val().remainCard,o.user.team=m.val().team,o.Profile.img=m.val().Profile.img,o.ProfileCover.img=m.val().ProfileCover.img,o.SummonPoints=m.val().SummonPoints,o.AwakePoints=m.val().AwakePoints,o.drama=m.val().drama,o.pvp=m.val().pvp,o.win=m.val().win,o.lose=m.val().lose):console.log("\u6C92\u6709\u8CC7\u6599")}).catch(m=>{console.error(m)})}const a=Ne(""),c=Ne("");function u(){a.value===""||c.value===""?alert("\u8ACB\u8F38\u5165\u5B8C\u6574\u5E33\u865F\u5BC6\u78BC"):wr(Tt(i,"Users/"+a.value)).then(_=>{_.val()===null?alert("\u67E5\u7121\u6B64\u5E33\u6236"):_.val().password===c.value?(l(a.value),alert("\u767B\u5165\u6210\u529F"),e.replace({path:"/home"})):alert("\u5BC6\u78BC\u932F\u8AA4")}).catch(_=>{alert("\u8CC7\u6599\u5B58\u53D6\u932F\u8AA4")})}function h(){const _=/^[\u4e00-\u9fff]{2,6}$/,m=/^[_a-zA-Z0-9]{6,12}$/;if(a.value===""||c.value===""){alert("\u8ACB\u8F38\u5165\u5B8C\u6574\u5E33\u865F\u5BC6\u78BC");return}else if(_.test(a.value)||m.test(a.value))wr(Tt(i,"Users/"+a.value)).then(y=>{if(y.val()===null){let R=new Date;hl(Ni(r,`Users/${a.value}`),{password:c.value,time:R.getFullYear()+"/"+(R.getMonth()+1)+"/"+R.getDate()+"/"+R.getHours()+":"+R.getMinutes()+":"+R.getSeconds()}),alert("\u8A3B\u518A\u5B8C\u6210"),u()}else alert("\u5DF2\u6709\u6B64\u5E33\u865F")}).catch(y=>{alert("\u8CC7\u6599\u5B58\u53D6\u932F\u8AA4")});else{alert("\u8A3B\u518A\u540D\u7A31\u4E0D\u7B26\u5408\u547D\u540D\u898F\u7BC4\uFF0C\u8ACB\u91CD\u65B0\u8F38\u5165");return}}const d=Ne("");return(_,m)=>(je(),ze("div",ME,[C("div",LE,[C("div",{class:ke(["login",{display_none:d.value==""}])},[C("div",FE,[C("h3",null,"\u4F60\u5DF2\u767B\u5165\uFF0C\u73A9\u5BB6\u540D\u7A31\uFF1A"+be(d.value),1),C("button",{onClick:m[0]||(m[0]=y=>te(e).replace({path:"/Home"}))},"\u8FD4\u56DE\u6D1E\u5E9C")])],2),C("div",{class:ke(["login",{display_none:d.value!==""}])},[C("div",$E,[BE,C("div",UE,[HE,Pr(C("input",{type:"text",placeholder:"\u5E33\u865F","onUpdate:modelValue":m[1]||(m[1]=y=>a.value=y)},null,512),[[Fr,a.value,void 0,{lazy:!0}]])]),C("div",WE,[VE,Pr(C("input",{type:"password",placeholder:"\u5BC6\u78BC","onUpdate:modelValue":m[2]||(m[2]=y=>c.value=y),onKeyup:m[3]||(m[3]=Yc(y=>u(),["enter"]))},null,544),[[Fr,c.value,void 0,{lazy:!0}]])]),C("div",jE,[C("button",{onClick:m[4]||(m[4]=y=>h())},"\u8A3B\u518A"),C("button",{onClick:m[5]||(m[5]=y=>u())},"\u767B\u5165")])])],2)])]))}},KE=Gt(zE,[["__scopeId","data-v-99202399"]]),qE=P_({history:qp("/Vue3-Game-Xian/"),routes:[{path:"/",name:"login",component:KE},{path:"/home",name:"home",component:eE},{path:"/alchemy",name:"alchemy",component:iE},{path:"/make",name:"make",component:aE},{path:"/pack",name:"pack",component:_E},{path:"/sublimation",name:"sublimation",component:NE},{path:"/start",name:"start",component:DE},{path:"/:404(.*)*",name:"404",component:()=>z_(()=>import("./404.f598d77a.js"),[])}]});const pl=bp(W_);pl.use(wp());pl.use(qE);pl.mount("#app");document.oncontextmenu=function(){window.event.returnValue=!1};export{Gt as _,C as a,ze as c,je as o};
