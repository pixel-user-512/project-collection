(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rp(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Vt={},la=[],Mr=()=>{},Sg=()=>!1,Yu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),qu=n=>n.startsWith("onUpdate:"),Mn=Object.assign,sp=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Hv=Object.prototype.hasOwnProperty,Pt=(n,e)=>Hv.call(n,e),tt=Array.isArray,ca=n=>tc(n)==="[object Map]",Ku=n=>tc(n)==="[object Set]",s0=n=>tc(n)==="[object Date]",ct=n=>typeof n=="function",Kt=n=>typeof n=="string",Cr=n=>typeof n=="symbol",Dt=n=>n!==null&&typeof n=="object",Mg=n=>(Dt(n)||ct(n))&&ct(n.then)&&ct(n.catch),wg=Object.prototype.toString,tc=n=>wg.call(n),Gv=n=>tc(n).slice(8,-1),Eg=n=>tc(n)==="[object Object]",op=n=>Kt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,hl=rp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zu=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Wv=/-\w/g,nr=Zu(n=>n.replace(Wv,e=>e.slice(1).toUpperCase())),Xv=/\B([A-Z])/g,Vs=Zu(n=>n.replace(Xv,"-$1").toLowerCase()),Tg=Zu(n=>n.charAt(0).toUpperCase()+n.slice(1)),xd=Zu(n=>n?`on${Tg(n)}`:""),gr=(n,e)=>!Object.is(n,e),tu=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ag=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Ju=n=>{const e=parseFloat(n);return isNaN(e)?n:e},$v=n=>{const e=Kt(n)?Number(n):NaN;return isNaN(e)?n:e};let o0;const Qu=()=>o0||(o0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Sn(n){if(tt(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Kt(i)?Kv(i):Sn(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Kt(n)||Dt(n))return n}const jv=/;(?![^(]*\))/g,Yv=/:([^]+)/,qv=/\/\*[^]*?\*\//g;function Kv(n){const e={};return n.replace(qv,"").split(jv).forEach(t=>{if(t){const i=t.split(Yv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function st(n){let e="";if(Kt(n))e=n;else if(tt(n))for(let t=0;t<n.length;t++){const i=st(n[t]);i&&(e+=i+" ")}else if(Dt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Zv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jv=rp(Zv);function Cg(n){return!!n||n===""}function Qv(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=nc(n[i],e[i]);return t}function nc(n,e){if(n===e)return!0;let t=s0(n),i=s0(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Cr(n),i=Cr(e),t||i)return n===e;if(t=tt(n),i=tt(e),t||i)return t&&i?Qv(n,e):!1;if(t=Dt(n),i=Dt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!nc(n[o],e[o]))return!1}}return String(n)===String(e)}function ey(n,e){return n.findIndex(t=>nc(t,e))}const Rg=n=>!!(n&&n.__v_isRef===!0),ye=n=>Kt(n)?n:n==null?"":tt(n)||Dt(n)&&(n.toString===wg||!ct(n.toString))?Rg(n)?ye(n.value):JSON.stringify(n,Pg,2):String(n),Pg=(n,e)=>Rg(e)?Pg(n,e.value):ca(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[vd(i,s)+" =>"]=r,t),{})}:Ku(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>vd(t))}:Cr(e)?vd(e):Dt(e)&&!tt(e)&&!Eg(e)?String(e):e,vd=(n,e="")=>{var t;return Cr(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tn;class ty{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Tn&&(Tn.active?(this.parent=Tn,this.index=(Tn.scopes||(Tn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Tn;try{return Tn=this,e()}finally{Tn=t}}}on(){++this._on===1&&(this.prevScope=Tn,Tn=this)}off(){if(this._on>0&&--this._on===0){if(Tn===this)Tn=this.prevScope;else{let e=Tn;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ny(){return Tn}let Gt;const yd=new WeakSet;class Dg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Tn&&(Tn.active?Tn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,yd.has(this)&&(yd.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ig(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,a0(this),Ug(this);const e=Gt,t=ir;Gt=this,ir=!0;try{return this.fn()}finally{Fg(this),Gt=e,ir=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)cp(e);this.deps=this.depsTail=void 0,a0(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?yd.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Rf(this)&&this.run()}get dirty(){return Rf(this)}}let Lg=0,pl,ml;function Ig(n,e=!1){if(n.flags|=8,e){n.next=ml,ml=n;return}n.next=pl,pl=n}function ap(){Lg++}function lp(){if(--Lg>0)return;if(ml){let e=ml;for(ml=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;pl;){let e=pl;for(pl=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Ug(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Fg(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),cp(i),iy(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Rf(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ng(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Ng(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ll)||(n.globalVersion=Ll,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Rf(n))))return;n.flags|=2;const e=n.dep,t=Gt,i=ir;Gt=n,ir=!0;try{Ug(n);const r=n.fn(n._value);(e.version===0||gr(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Gt=t,ir=i,Fg(n),n.flags&=-3}}function cp(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)cp(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function iy(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let ir=!0;const Og=[];function is(){Og.push(ir),ir=!1}function rs(){const n=Og.pop();ir=n===void 0?!0:n}function a0(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Gt;Gt=void 0;try{e()}finally{Gt=t}}}let Ll=0;class ry{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class up{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Gt||!ir||Gt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Gt)t=this.activeLink=new ry(Gt,this),Gt.deps?(t.prevDep=Gt.depsTail,Gt.depsTail.nextDep=t,Gt.depsTail=t):Gt.deps=Gt.depsTail=t,kg(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Gt.depsTail,t.nextDep=void 0,Gt.depsTail.nextDep=t,Gt.depsTail=t,Gt.deps===t&&(Gt.deps=i)}return t}trigger(e){this.version++,Ll++,this.notify(e)}notify(e){ap();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{lp()}}}function kg(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)kg(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Pf=new WeakMap,vo=Symbol(""),Df=Symbol(""),Il=Symbol("");function kn(n,e,t){if(ir&&Gt){let i=Pf.get(n);i||Pf.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new up),r.map=i,r.key=t),r.track()}}function Xr(n,e,t,i,r,s){const o=Pf.get(n);if(!o){Ll++;return}const a=l=>{l&&l.trigger()};if(ap(),e==="clear")o.forEach(a);else{const l=tt(n),c=l&&op(t);if(l&&t==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===Il||!Cr(f)&&f>=u)&&a(d)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Il)),e){case"add":l?c&&a(o.get("length")):(a(o.get(vo)),ca(n)&&a(o.get(Df)));break;case"delete":l||(a(o.get(vo)),ca(n)&&a(o.get(Df)));break;case"set":ca(n)&&a(o.get(vo));break}}lp()}function Oo(n){const e=Tt(n);return e===n?e:(kn(e,"iterate",Il),Xi(n)?e:e.map(rr))}function ed(n){return kn(n=Tt(n),"iterate",Il),n}function hr(n,e){return ss(n)?Ea(yo(n)?rr(e):e):rr(e)}const sy={__proto__:null,[Symbol.iterator](){return bd(this,Symbol.iterator,n=>hr(this,n))},concat(...n){return Oo(this).concat(...n.map(e=>tt(e)?Oo(e):e))},entries(){return bd(this,"entries",n=>(n[1]=hr(this,n[1]),n))},every(n,e){return Ur(this,"every",n,e,void 0,arguments)},filter(n,e){return Ur(this,"filter",n,e,t=>t.map(i=>hr(this,i)),arguments)},find(n,e){return Ur(this,"find",n,e,t=>hr(this,t),arguments)},findIndex(n,e){return Ur(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Ur(this,"findLast",n,e,t=>hr(this,t),arguments)},findLastIndex(n,e){return Ur(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Ur(this,"forEach",n,e,void 0,arguments)},includes(...n){return Sd(this,"includes",n)},indexOf(...n){return Sd(this,"indexOf",n)},join(n){return Oo(this).join(n)},lastIndexOf(...n){return Sd(this,"lastIndexOf",n)},map(n,e){return Ur(this,"map",n,e,void 0,arguments)},pop(){return Va(this,"pop")},push(...n){return Va(this,"push",n)},reduce(n,...e){return l0(this,"reduce",n,e)},reduceRight(n,...e){return l0(this,"reduceRight",n,e)},shift(){return Va(this,"shift")},some(n,e){return Ur(this,"some",n,e,void 0,arguments)},splice(...n){return Va(this,"splice",n)},toReversed(){return Oo(this).toReversed()},toSorted(n){return Oo(this).toSorted(n)},toSpliced(...n){return Oo(this).toSpliced(...n)},unshift(...n){return Va(this,"unshift",n)},values(){return bd(this,"values",n=>hr(this,n))}};function bd(n,e,t){const i=ed(n),r=i[e]();return i!==n&&!Xi(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const oy=Array.prototype;function Ur(n,e,t,i,r,s){const o=ed(n),a=o!==n&&!Xi(n),l=o[e];if(l!==oy[e]){const d=l.apply(n,s);return a?rr(d):d}let c=t;o!==n&&(a?c=function(d,f){return t.call(this,hr(n,d),f,n)}:t.length>2&&(c=function(d,f){return t.call(this,d,f,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function l0(n,e,t,i){const r=ed(n),s=r!==n&&!Xi(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=hr(n,c)),t.call(this,c,hr(n,u),d,n)}):t.length>3&&(o=function(c,u,d){return t.call(this,c,u,d,n)}));const l=r[e](o,...i);return a?hr(n,l):l}function Sd(n,e,t){const i=Tt(n);kn(i,"iterate",Il);const r=i[e](...t);return(r===-1||r===!1)&&hp(t[0])?(t[0]=Tt(t[0]),i[e](...t)):r}function Va(n,e,t=[]){is(),ap();const i=Tt(n)[e].apply(n,t);return lp(),rs(),i}const ay=rp("__proto__,__v_isRef,__isVue"),Bg=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Cr));function ly(n){Cr(n)||(n=String(n));const e=Tt(this);return kn(e,"has",n),e.hasOwnProperty(n)}class zg{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?xy:Wg:s?Gg:Hg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=tt(e);if(!r){let l;if(o&&(l=sy[t]))return l;if(t==="hasOwnProperty")return ly}const a=Reflect.get(e,t,Wn(e)?e:i);if((Cr(t)?Bg.has(t):ay(t))||(r||kn(e,"get",t),s))return a;if(Wn(a)){const l=o&&op(t)?a:a.value;return r&&Dt(l)?If(l):l}return Dt(a)?r?If(a):ua(a):a}}class Vg extends zg{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=tt(e)&&op(t);if(!this._isShallow){const c=ss(s);if(!Xi(i)&&!ss(i)&&(s=Tt(s),i=Tt(i)),!o&&Wn(s)&&!Wn(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:Pt(e,t),l=Reflect.set(e,t,i,Wn(e)?e:r);return e===Tt(r)&&l&&(a?gr(i,s)&&Xr(e,"set",t,i):Xr(e,"add",t,i)),l}deleteProperty(e,t){const i=Pt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Xr(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Cr(t)||!Bg.has(t))&&kn(e,"has",t),i}ownKeys(e){return kn(e,"iterate",tt(e)?"length":vo),Reflect.ownKeys(e)}}class cy extends zg{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const uy=new Vg,dy=new cy,fy=new Vg(!0);const Lf=n=>n,dc=n=>Reflect.getPrototypeOf(n);function hy(n,e,t){return function(...i){const r=this.__v_raw,s=Tt(r),o=ca(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Lf:e?Ea:rr;return!e&&kn(s,"iterate",l?Df:vo),Mn(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function fc(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function py(n,e){const t={get(r){const s=this.__v_raw,o=Tt(s),a=Tt(r);n||(gr(r,a)&&kn(o,"get",r),kn(o,"get",a));const{has:l}=dc(o),c=e?Lf:n?Ea:rr;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&kn(Tt(r),"iterate",vo),r.size},has(r){const s=this.__v_raw,o=Tt(s),a=Tt(r);return n||(gr(r,a)&&kn(o,"has",r),kn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Tt(a),c=e?Lf:n?Ea:rr;return!n&&kn(l,"iterate",vo),a.forEach((u,d)=>r.call(s,c(u),c(d),o))}};return Mn(t,n?{add:fc("add"),set:fc("set"),delete:fc("delete"),clear:fc("clear")}:{add(r){const s=Tt(this),o=dc(s),a=Tt(r),l=!e&&!Xi(r)&&!ss(r)?a:r;return o.has.call(s,l)||gr(r,l)&&o.has.call(s,r)||gr(a,l)&&o.has.call(s,a)||(s.add(l),Xr(s,"add",l,l)),this},set(r,s){!e&&!Xi(s)&&!ss(s)&&(s=Tt(s));const o=Tt(this),{has:a,get:l}=dc(o);let c=a.call(o,r);c||(r=Tt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?gr(s,u)&&Xr(o,"set",r,s):Xr(o,"add",r,s),this},delete(r){const s=Tt(this),{has:o,get:a}=dc(s);let l=o.call(s,r);l||(r=Tt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Xr(s,"delete",r,void 0),c},clear(){const r=Tt(this),s=r.size!==0,o=r.clear();return s&&Xr(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=hy(r,n,e)}),t}function dp(n,e){const t=py(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Pt(t,r)&&r in i?t:i,r,s)}const my={get:dp(!1,!1)},gy={get:dp(!1,!0)},_y={get:dp(!0,!1)};const Hg=new WeakMap,Gg=new WeakMap,Wg=new WeakMap,xy=new WeakMap;function vy(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ua(n){return ss(n)?n:fp(n,!1,uy,my,Hg)}function yy(n){return fp(n,!1,fy,gy,Gg)}function If(n){return fp(n,!0,dy,_y,Wg)}function fp(n,e,t,i,r){if(!Dt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const o=vy(Gv(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function yo(n){return ss(n)?yo(n.__v_raw):!!(n&&n.__v_isReactive)}function ss(n){return!!(n&&n.__v_isReadonly)}function Xi(n){return!!(n&&n.__v_isShallow)}function hp(n){return n?!!n.__v_raw:!1}function Tt(n){const e=n&&n.__v_raw;return e?Tt(e):n}function by(n){return!Pt(n,"__v_skip")&&Object.isExtensible(n)&&Ag(n,"__v_skip",!0),n}const rr=n=>Dt(n)?ua(n):n,Ea=n=>Dt(n)?If(n):n;function Wn(n){return n?n.__v_isRef===!0:!1}function De(n){return Sy(n,!1)}function Sy(n,e){return Wn(n)?n:new My(n,e)}class My{constructor(e,t){this.dep=new up,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Tt(e),this._value=t?e:rr(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Xi(e)||ss(e);e=i?e:Tt(e),gr(e,t)&&(this._rawValue=e,this._value=i?e:rr(e),this.dep.trigger())}}function xt(n){return Wn(n)?n.value:n}const wy={get:(n,e,t)=>e==="__v_raw"?n:xt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Wn(r)&&!Wn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Xg(n){return yo(n)?n:new Proxy(n,wy)}class Ey{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new up(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ll-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Gt!==this)return Ig(this,!0),!0}get value(){const e=this.dep.track();return Ng(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ty(n,e,t=!1){let i,r;return ct(n)?i=n:(i=n.get,r=n.set),new Ey(i,r,t)}const hc={},yu=new WeakMap;let no;function Ay(n,e=!1,t=no){if(t){let i=yu.get(t);i||yu.set(t,i=[]),i.push(n)}}function Cy(n,e,t=Vt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=x=>r?x:Xi(x)||r===!1||r===0?$r(x,1):$r(x);let u,d,f,h,g=!1,_=!1;if(Wn(n)?(d=()=>n.value,g=Xi(n)):yo(n)?(d=()=>c(n),g=!0):tt(n)?(_=!0,g=n.some(x=>yo(x)||Xi(x)),d=()=>n.map(x=>{if(Wn(x))return x.value;if(yo(x))return c(x);if(ct(x))return l?l(x,2):x()})):ct(n)?e?d=l?()=>l(n,2):n:d=()=>{if(f){is();try{f()}finally{rs()}}const x=no;no=u;try{return l?l(n,3,[h]):n(h)}finally{no=x}}:d=Mr,e&&r){const x=d,R=r===!0?1/0:r;d=()=>$r(x(),R)}const p=ny(),m=()=>{u.stop(),p&&p.active&&sp(p.effects,u)};if(s&&e){const x=e;e=(...R)=>{const A=x(...R);return m(),A}}let v=_?new Array(n.length).fill(hc):hc;const M=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const R=u.run();if(x||r||g||(_?R.some((A,C)=>gr(A,v[C])):gr(R,v))){f&&f();const A=no;no=u;try{const C=[R,v===hc?void 0:_&&v[0]===hc?[]:v,h];v=R,l?l(e,3,C):e(...C)}finally{no=A}}}else u.run()};return a&&a(M),u=new Dg(d),u.scheduler=o?()=>o(M,!1):M,h=x=>Ay(x,!1,u),f=u.onStop=()=>{const x=yu.get(u);if(x){if(l)l(x,4);else for(const R of x)R();yu.delete(u)}},e?i?M(!0):v=u.run():o?o(M.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function $r(n,e=1/0,t){if(e<=0||!Dt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Wn(n))$r(n.value,e,t);else if(tt(n))for(let i=0;i<n.length;i++)$r(n[i],e,t);else if(Ku(n)||ca(n))n.forEach(i=>{$r(i,e,t)});else if(Eg(n)){for(const i in n)$r(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&$r(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ic(n,e,t,i){try{return i?n(...i):n()}catch(r){td(r,e,t)}}function ji(n,e,t,i){if(ct(n)){const r=ic(n,e,t,i);return r&&Mg(r)&&r.catch(s=>{td(s,e,t)}),r}if(tt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(ji(n[s],e,t,i));return r}}function td(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Vt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(s){is(),ic(s,null,10,[n,l,c]),rs();return}}Ry(n,t,r,i,o)}function Ry(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const ei=[];let ur=-1;const da=[];let Ms=null,na=0;const $g=Promise.resolve();let bu=null;function Rr(n){const e=bu||$g;return n?e.then(this?n.bind(this):n):e}function Py(n){let e=ur+1,t=ei.length;for(;e<t;){const i=e+t>>>1,r=ei[i],s=Ul(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function pp(n){if(!(n.flags&1)){const e=Ul(n),t=ei[ei.length-1];!t||!(n.flags&2)&&e>=Ul(t)?ei.push(n):ei.splice(Py(e),0,n),n.flags|=1,jg()}}function jg(){bu||(bu=$g.then(qg))}function Dy(n){if(!tt(n))Ms&&n.id===-1?Ms.splice(na+1,0,n):n.flags&1||(da.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)da.push(n[e]);jg()}function c0(n,e,t=ur+1){for(;t<ei.length;t++){const i=ei[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;ei.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Yg(n){if(da.length){const e=[...new Set(da)].sort((t,i)=>Ul(t)-Ul(i));if(da.length=0,Ms){for(let t=0;t<e.length;t++)Ms.push(e[t]);return}for(Ms=e,na=0;na<Ms.length;na++){const t=Ms[na];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ms=null,na=0}}const Ul=n=>n.id==null?n.flags&2?-1:1/0:n.id;function qg(n){try{for(ur=0;ur<ei.length;ur++){const e=ei[ur];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ic(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ur<ei.length;ur++){const e=ei[ur];e&&(e.flags&=-2)}ur=-1,ei.length=0,Yg(),bu=null,(ei.length||da.length)&&qg()}}let Vi=null,Kg=null;function Su(n){const e=Vi;return Vi=n,Kg=n&&n.type.__scopeId||null,e}function Mu(n,e=Vi,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Au(-1);const s=Su(e),o=bo.length;let a;try{a=n(...r)}finally{for(let l=bo.length;l>o;l--)w_();Su(s),i._d&&Au(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function pc(n,e){if(Vi===null)return n;const t=ad(Vi),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=Vt]=e[r];s&&(ct(s)&&(s={mounted:s,updated:s}),s.deep&&$r(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ws(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(is(),ji(l,t,8,[n.el,a,n,e]),rs())}}function Ly(n,e){if(ni){let t=ni.provides;const i=ni.parent&&ni.parent.provides;i===t&&(t=ni.provides=Object.create(i)),t[n]=e}}function nu(n,e,t=!1){const i=A_();if(i||fa){let r=fa?fa._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ct(e)?e.call(i&&i.proxy):e}}const Iy=Symbol.for("v-scx"),Uy=()=>nu(Iy);function Ai(n,e,t){return Zg(n,e,t)}function Zg(n,e,t=Vt){const{immediate:i,deep:r,flush:s,once:o}=t,a=Mn({},t),l=e&&i||!e&&s!=="post";let c;if(kl){if(s==="sync"){const h=Uy();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Mr,h.resume=Mr,h.pause=Mr,h}}const u=ni;a.call=(h,g,_)=>ji(h,u,g,_);let d=!1;s==="post"?a.scheduler=h=>{oi(h,u&&u.suspense)}:s!=="sync"&&(d=!0,a.scheduler=(h,g)=>{g?h():pp(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=Cy(n,e,a);return kl&&(c?c.push(f):l&&f()),f}function Fy(n,e,t){const i=this.proxy,r=Kt(n)?n.includes(".")?Jg(i,n):()=>i[n]:n.bind(i,i);let s;ct(e)?s=e:(s=e.handler,t=e);const o=rc(this),a=Zg(r,s.bind(i),t);return o(),a}function Jg(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Ny=Symbol("_vte"),nd=n=>n.__isTeleport,Ni=Symbol("_leaveCb"),Ha=Symbol("_enterCb");function Oy(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Pn(()=>{n.isMounted=!0}),o_(()=>{n.isUnmounting=!0}),n}const Ii=[Function,Array],Qg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ii,onEnter:Ii,onAfterEnter:Ii,onEnterCancelled:Ii,onBeforeLeave:Ii,onLeave:Ii,onAfterLeave:Ii,onLeaveCancelled:Ii,onBeforeAppear:Ii,onAppear:Ii,onAfterAppear:Ii,onAppearCancelled:Ii},e_=n=>{const e=n.subTree;return e.component?e_(e.component):e},ky={name:"BaseTransition",props:Qg,setup(n,{slots:e}){const t=A_(),i=Oy();return()=>{const r=e.default&&i_(e.default(),!0),s=r&&r.length?t_(r):t.subTree?Bn():void 0;if(!s)return;const o=Tt(n),{mode:a}=o;if(i.isLeaving)return Md(s);const l=wu(s);if(!l)return Md(s);let c=Uf(l,o,i,t,d=>c=d);l.type!==ti&&Fl(l,c);let u=t.subTree&&wu(t.subTree);if(u&&u.type!==ti&&!ao(u,l)&&e_(t).type!==ti){let d=Uf(u,o,i,t);if(Fl(u,d),a==="out-in"&&l.type!==ti)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,u=void 0},Md(s);a==="in-out"&&l.type!==ti?d.delayLeave=(f,h,g)=>{const _=n_(i,u);_[String(u.key)]=u,f[Ni]=()=>{h(),f[Ni]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function t_(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==ti){e=t;break}}return e}const By=ky;function n_(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Uf(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:p,onAppear:m,onAfterAppear:v,onAppearCancelled:M}=e,x=String(n.key),R=n_(t,n),A=(E,F)=>{E&&ji(E,i,9,F)},C=(E,F)=>{const U=F[1];A(E,F),tt(E)?E.every(L=>L.length<=1)&&U():E.length<=1&&U()},b={mode:o,persisted:a,beforeEnter(E){let F=l;if(!t.isMounted)if(s)F=p||l;else return;E[Ni]&&E[Ni](!0);const U=R[x];U&&ao(n,U)&&U.el[Ni]&&U.el[Ni](),A(F,[E])},enter(E){if(R[x]===n)return;let F=c,U=u,L=d;if(!t.isMounted)if(s)F=m||c,U=v||u,L=M||d;else return;let V=!1;E[Ha]=G=>{V||(V=!0,G?A(L,[E]):A(U,[E]),b.delayedLeave&&b.delayedLeave(),E[Ha]=void 0)};const k=E[Ha].bind(null,!1);F?C(F,[E,k]):k()},leave(E,F){const U=String(n.key);if(E[Ha]&&E[Ha](!0),t.isUnmounting)return F();A(f,[E]);let L=!1;E[Ni]=k=>{L||(L=!0,F(),k?A(_,[E]):A(g,[E]),E[Ni]=void 0,R[U]===n&&delete R[U])};const V=E[Ni].bind(null,!1);R[U]=n,h?C(h,[E,V]):V()},clone(E){const F=Uf(E,e,t,i,r);return r&&r(F),F}};return b}function Md(n){if(id(n))return n=Fs(n),n.children=null,n}function wu(n){if(!id(n))return nd(n.type)&&n.children?t_(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&ct(t.default))return t.default()}}function Fl(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Fl(nd(t.type)&&wu(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function i_(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===je?(o.patchFlag&128&&r++,i=i.concat(i_(o.children,e,a))):(e||o.type!==ti)&&i.push(a!=null?Fs(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function r_(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function u0(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Eu=new WeakMap;function gl(n,e,t,i,r=!1){if(tt(n)){n.forEach((_,p)=>gl(_,e&&(tt(e)?e[p]:e),t,i,r));return}if(_l(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&gl(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?ad(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Vt?a.refs={}:a.refs,d=a.setupState,f=Tt(d),h=d===Vt?Sg:_=>u0(u,_)?!1:Pt(f,_),g=(_,p)=>!(p&&u0(u,p));if(c!=null&&c!==l){if(d0(e),Kt(c))u[c]=null,h(c)&&(d[c]=null);else if(Wn(c)){const _=e;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(ct(l))ic(l,a,12,[o,u]);else{const _=Kt(l),p=Wn(l);if(_||p){const m=()=>{if(n.f){const v=_?h(l)?d[l]:u[l]:g()||!n.k?l.value:u[n.k];if(r)tt(v)&&sp(v,s);else if(tt(v))v.includes(s)||v.push(s);else if(_)u[l]=[s],h(l)&&(d[l]=u[l]);else{const M=[s];g(l,n.k)&&(l.value=M),n.k&&(u[n.k]=M)}}else _?(u[l]=o,h(l)&&(d[l]=o)):p&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const v=()=>{m(),Eu.delete(n)};v.id=-1,Eu.set(n,v),oi(v,t)}else d0(n),m()}}}function d0(n){const e=Eu.get(n);e&&(e.flags|=8,Eu.delete(n))}Qu().requestIdleCallback;Qu().cancelIdleCallback;const _l=n=>!!n.type.__asyncLoader,id=n=>n.type.__isKeepAlive;function zy(n,e){s_(n,"a",e)}function Vy(n,e){s_(n,"da",e)}function s_(n,e,t=ni){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(rd(e,i,t),t){let r=t.parent;for(;r&&r.parent;)id(r.parent.vnode)&&Hy(i,e,t,r),r=r.parent}}function Hy(n,e,t,i){const r=rd(e,n,i,!0);$n(()=>{sp(i[e],r)},t)}function rd(n,e,t=ni,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{is();const a=rc(t),l=ji(e,t,n,o);return a(),rs(),l});return i?r.unshift(s):r.push(s),s}}const ds=n=>(e,t=ni)=>{(!kl||n==="sp")&&rd(n,(...i)=>e(...i),t)},Gy=ds("bm"),Pn=ds("m"),Wy=ds("bu"),Xy=ds("u"),o_=ds("bum"),$n=ds("um"),$y=ds("sp"),jy=ds("rtg"),Yy=ds("rtc");function qy(n,e=ni){rd("ec",n,e)}const Ky=Symbol.for("v-ndc");function rt(n,e,t,i){let r;const s=t,o=tt(n);if(o||Kt(n)){const a=o&&yo(n);let l=!1,c=!1;a&&(l=!Xi(n),c=ss(n),n=ed(n)),r=new Array(n.length);for(let u=0,d=n.length;u<d;u++)r[u]=e(l?c?Ea(rr(n[u])):rr(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(Dt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const Ff=n=>n?C_(n)?ad(n):Ff(n.parent):null,xl=Mn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ff(n.parent),$root:n=>Ff(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>l_(n),$forceUpdate:n=>n.f||(n.f=()=>{pp(n.update)}),$nextTick:n=>n.n||(n.n=Rr.bind(n.proxy)),$watch:n=>Fy.bind(n)}),wd=(n,e)=>n!==Vt&&!n.__isScriptSetup&&Pt(n,e),Zy={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(wd(i,e))return o[e]=1,i[e];if(r!==Vt&&Pt(r,e))return o[e]=2,r[e];if(Pt(s,e))return o[e]=3,s[e];if(t!==Vt&&Pt(t,e))return o[e]=4,t[e];Nf&&(o[e]=0)}}const c=xl[e];let u,d;if(c)return e==="$attrs"&&kn(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Vt&&Pt(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,Pt(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return wd(r,e)?(r[e]=t,!0):i!==Vt&&Pt(i,e)?(i[e]=t,!0):Pt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==Vt&&a[0]!=="$"&&Pt(n,a)||wd(e,a)||Pt(s,a)||Pt(i,a)||Pt(xl,a)||Pt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Pt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function f0(n){return tt(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Nf=!0;function Jy(n){const e=l_(n),t=n.proxy,i=n.ctx;Nf=!1,e.beforeCreate&&h0(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:g,activated:_,deactivated:p,beforeDestroy:m,beforeUnmount:v,destroyed:M,unmounted:x,render:R,renderTracked:A,renderTriggered:C,errorCaptured:b,serverPrefetch:E,expose:F,inheritAttrs:U,components:L,directives:V,filters:k}=e;if(c&&Qy(c,i,null),o)for(const B in o){const q=o[B];ct(q)&&(i[B]=q.bind(t))}if(r){const B=r.call(t,t);Dt(B)&&(n.data=ua(B))}if(Nf=!0,s)for(const B in s){const q=s[B],j=ct(q)?q.bind(t,t):ct(q.get)?q.get.bind(t,t):Mr,N=!ct(q)&&ct(q.set)?q.set.bind(t):Mr,le=an({get:j,set:N});Object.defineProperty(i,B,{enumerable:!0,configurable:!0,get:()=>le.value,set:me=>le.value=me})}if(a)for(const B in a)a_(a[B],i,t,B);if(l){const B=ct(l)?l.call(t):l;Reflect.ownKeys(B).forEach(q=>{Ly(q,B[q])})}u&&h0(u,n,"c");function X(B,q){tt(q)?q.forEach(j=>B(j.bind(t))):q&&B(q.bind(t))}if(X(Gy,d),X(Pn,f),X(Wy,h),X(Xy,g),X(zy,_),X(Vy,p),X(qy,b),X(Yy,A),X(jy,C),X(o_,v),X($n,x),X($y,E),tt(F))if(F.length){const B=n.exposed||(n.exposed={});F.forEach(q=>{Object.defineProperty(B,q,{get:()=>t[q],set:j=>t[q]=j,enumerable:!0})})}else n.exposed||(n.exposed={});R&&n.render===Mr&&(n.render=R),U!=null&&(n.inheritAttrs=U),L&&(n.components=L),V&&(n.directives=V),E&&r_(n)}function Qy(n,e,t=Mr){tt(n)&&(n=Of(n));for(const i in n){const r=n[i];let s;Dt(r)?"default"in r?s=nu(r.from||i,r.default,!0):s=nu(r.from||i):s=nu(r),Wn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function h0(n,e,t){ji(tt(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function a_(n,e,t,i){let r=i.includes(".")?Jg(t,i):()=>t[i];if(Kt(n)){const s=e[n];ct(s)&&Ai(r,s)}else if(ct(n))Ai(r,n.bind(t));else if(Dt(n))if(tt(n))n.forEach(s=>a_(s,e,t,i));else{const s=ct(n.handler)?n.handler.bind(t):e[n.handler];ct(s)&&Ai(r,s,n)}}function l_(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Tu(l,c,o,!0)),Tu(l,e,o)),Dt(e)&&s.set(e,l),l}function Tu(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Tu(n,s,t,!0),r&&r.forEach(o=>Tu(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=e1[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const e1={data:p0,props:m0,emits:m0,methods:nl,computed:nl,beforeCreate:Yn,created:Yn,beforeMount:Yn,mounted:Yn,beforeUpdate:Yn,updated:Yn,beforeDestroy:Yn,beforeUnmount:Yn,destroyed:Yn,unmounted:Yn,activated:Yn,deactivated:Yn,errorCaptured:Yn,serverPrefetch:Yn,components:nl,directives:nl,watch:n1,provide:p0,inject:t1};function p0(n,e){return e?n?function(){return Mn(ct(n)?n.call(this,this):n,ct(e)?e.call(this,this):e)}:e:n}function t1(n,e){return nl(Of(n),Of(e))}function Of(n){if(tt(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Yn(n,e){return n?[...new Set([].concat(n,e))]:e}function nl(n,e){return n?Mn(Object.create(null),n,e):e}function m0(n,e){return n?tt(n)&&tt(e)?[...new Set([...n,...e])]:Mn(Object.create(null),f0(n),f0(e??{})):e}function n1(n,e){if(!n)return e;if(!e)return n;const t=Mn(Object.create(null),n);for(const i in e)t[i]=Yn(n[i],e[i]);return t}function c_(){return{app:null,config:{isNativeTag:Sg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let i1=0;function r1(n,e){return function(i,r=null){ct(i)||(i=Mn({},i)),r!=null&&!Dt(r)&&(r=null);const s=c_(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:i1++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:F1,get config(){return s.config},set config(u){},use(u,...d){return o.has(u)||(u&&ct(u.install)?(o.add(u),u.install(c,...d)):ct(u)&&(o.add(u),u(c,...d))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,d){return d?(s.components[u]=d,c):s.components[u]},directive(u,d){return d?(s.directives[u]=d,c):s.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||At(i,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),n(h,u,f),l=!0,c._container=u,u.__vue_app__=c,ad(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ji(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return s.provides[u]=d,c},runWithContext(u){const d=fa;fa=c;try{return u()}finally{fa=d}}};return c}}let fa=null;const s1=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${nr(e)}Modifiers`]||n[`${Vs(e)}Modifiers`];function o1(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Vt;let r=t;const s=e.startsWith("update:"),o=s&&s1(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Kt(u)?u.trim():u)),o.number&&(r=t.map(Ju)));let a,l=i[a=xd(e)]||i[a=xd(nr(e))];!l&&s&&(l=i[a=xd(Vs(e))]),l&&ji(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ji(c,n,6,r)}}const a1=new WeakMap;function u_(n,e,t=!1){const i=t?a1:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!ct(n)){const l=c=>{const u=u_(c,e,!0);u&&(a=!0,Mn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(Dt(n)&&i.set(n,null),null):(tt(s)?s.forEach(l=>o[l]=null):Mn(o,s),Dt(n)&&i.set(n,o),o)}function sd(n,e){return!n||!Yu(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Pt(n,e[0].toLowerCase()+e.slice(1))||Pt(n,Vs(e))||Pt(n,e))}function g0(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:g,inheritAttrs:_}=n,p=Su(n);let m,v;try{if(t.shapeFlag&4){const x=r||i,R=x;m=pr(c.call(R,x,u,d,h,f,g)),v=a}else{const x=e;m=pr(x.length>1?x(d,{attrs:a,slots:o,emit:l}):x(d,null)),v=e.props?a:l1(a)}}catch(x){bo.length=0,td(x,n,1),m=At(ti)}let M=m;if(v&&_!==!1){const x=Object.keys(v),{shapeFlag:R}=M;x.length&&R&7&&(s&&x.some(qu)&&(v=c1(v,s)),M=Fs(M,v,!1,!0))}if(t.dirs&&(M=Fs(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition){const x=nd(M.type)&&wu(M)||M;Fl(x,t.transition)}return m=M,Su(p),m}const l1=n=>{let e;for(const t in n)(t==="class"||t==="style"||Yu(t))&&((e||(e={}))[t]=n[t]);return e},c1=(n,e)=>{const t={};for(const i in n)(!qu(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function u1(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?_0(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(d_(o,i,f)&&!sd(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?_0(i,o,c):!0:!!o;return!1}function _0(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(d_(e,n,s)&&!sd(t,s))return!0}return!1}function d_(n,e,t){const i=n[t],r=e[t];return t==="style"&&Dt(i)&&Dt(r)?!nc(i,r):i!==r}function d1({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const f_={},h_=()=>Object.create(f_),p_=n=>Object.getPrototypeOf(n)===f_;function f1(n,e,t,i=!1){const r={},s=h_();n.propsDefaults=Object.create(null),m_(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:yy(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function h1(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Tt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(sd(n.emitsOptions,f))continue;const h=e[f];if(l)if(Pt(s,f))h!==s[f]&&(s[f]=h,c=!0);else{const g=nr(f);r[g]=kf(l,a,g,h,n,!1)}else h!==s[f]&&(s[f]=h,c=!0)}}}else{m_(n,e,r,s)&&(c=!0);let u;for(const d in a)(!e||!Pt(e,d)&&((u=Vs(d))===d||!Pt(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(r[d]=kf(l,a,d,void 0,n,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!Pt(e,d))&&(delete s[d],c=!0)}c&&Xr(n.attrs,"set","")}function m_(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(hl(l))continue;const c=e[l];let u;r&&Pt(r,u=nr(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:sd(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Tt(t),c=a||Vt;for(let u=0;u<s.length;u++){const d=s[u];t[d]=kf(r,l,d,c[d],n,!Pt(c,d))}}return o}function kf(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Pt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ct(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=rc(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Vs(t))&&(i=!0))}return i}const p1=new WeakMap;function g_(n,e,t=!1){const i=t?p1:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!ct(n)){const u=d=>{l=!0;const[f,h]=g_(d,e,!0);Mn(o,f),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Dt(n)&&i.set(n,la),la;if(tt(s))for(let u=0;u<s.length;u++){const d=nr(s[u]);x0(d)&&(o[d]=Vt)}else if(s)for(const u in s){const d=nr(u);if(x0(d)){const f=s[u],h=o[d]=tt(f)||ct(f)?{type:f}:Mn({},f),g=h.type;let _=!1,p=!0;if(tt(g))for(let m=0;m<g.length;++m){const v=g[m],M=ct(v)&&v.name;if(M==="Boolean"){_=!0;break}else M==="String"&&(p=!1)}else _=ct(g)&&g.name==="Boolean";h[0]=_,h[1]=p,(_||Pt(h,"default"))&&a.push(d)}}const c=[o,a];return Dt(n)&&i.set(n,c),c}function x0(n){return n[0]!=="$"&&!hl(n)}const mp=n=>n==="_"||n==="_ctx"||n==="$stable",gp=n=>tt(n)?n.map(pr):[pr(n)],m1=(n,e,t)=>{if(e._n)return e;const i=Mu((...r)=>gp(e(...r)),t);return i._c=!1,i},__=(n,e,t)=>{const i=n._ctx;for(const r in n){if(mp(r))continue;const s=n[r];if(ct(s))e[r]=m1(r,s,i);else if(s!=null){const o=gp(s);e[r]=()=>o}}},x_=(n,e)=>{const t=gp(e);n.slots.default=()=>t},v_=(n,e,t)=>{for(const i in e)(t||!mp(i))&&(n[i]=e[i])},g1=(n,e,t)=>{const i=n.slots=h_();if(n.vnode.shapeFlag&32){const r=e._;r?(v_(i,e,t),t&&Ag(i,"_",r,!0)):__(e,i)}else e&&x_(n,e)},_1=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Vt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:v_(r,e,t):(s=!e.$stable,__(e,r)),o=e}else e&&(x_(n,e),o={default:1});if(s)for(const a in r)!mp(a)&&o[a]==null&&delete r[a]},oi=S1;function x1(n){return v1(n)}function v1(n,e){const t=Qu();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Mr,insertStaticContent:g}=n,_=(w,T,H,ee=null,Y=null,O=null,I=void 0,_e=null,fe=!!T.dynamicChildren)=>{if(w===T)return;w&&!ao(w,T)&&(ee=ue(w),me(w,Y,O,!0),w=null),T.patchFlag===-2&&(fe=!1,T.dynamicChildren=null);const{type:ne,ref:pe,shapeFlag:P}=T;switch(ne){case od:p(w,T,H,ee);break;case ti:m(w,T,H,ee);break;case iu:w==null&&v(T,H,ee,I);break;case je:L(w,T,H,ee,Y,O,I,_e,fe);break;default:P&1?R(w,T,H,ee,Y,O,I,_e,fe):P&6?V(w,T,H,ee,Y,O,I,_e,fe):(P&64||P&128)&&ne.process(w,T,H,ee,Y,O,I,_e,fe,Ae)}pe!=null&&Y?gl(pe,w&&w.ref,O,T||w,!T):pe==null&&w&&w.ref!=null&&gl(w.ref,null,O,w,!0)},p=(w,T,H,ee)=>{if(w==null)i(T.el=a(T.children),H,ee);else{const Y=T.el=w.el;T.children!==w.children&&c(Y,T.children)}},m=(w,T,H,ee)=>{w==null?i(T.el=l(T.children||""),H,ee):T.el=w.el},v=(w,T,H,ee)=>{[w.el,w.anchor]=g(w.children,T,H,ee,w.el,w.anchor)},M=({el:w,anchor:T},H,ee)=>{let Y;for(;w&&w!==T;)Y=f(w),i(w,H,ee),w=Y;i(T,H,ee)},x=({el:w,anchor:T})=>{let H;for(;w&&w!==T;)H=f(w),r(w),w=H;r(T)},R=(w,T,H,ee,Y,O,I,_e,fe)=>{if(T.type==="svg"?I="svg":T.type==="math"&&(I="mathml"),w==null)A(T,H,ee,Y,O,I,_e,fe);else{const ne=w.el&&w.el._isVueCE?w.el:null;try{ne&&ne._beginPatch(),E(w,T,Y,O,I,_e,fe)}finally{ne&&ne._endPatch()}}},A=(w,T,H,ee,Y,O,I,_e)=>{let fe,ne;const{props:pe,shapeFlag:P,transition:S,dirs:z}=w;if(fe=w.el=o(w.type,O,pe&&pe.is,pe),P&8?u(fe,w.children):P&16&&b(w.children,fe,null,ee,Y,Ed(w,O),I,_e),z&&Ws(w,null,ee,"created"),C(fe,w,w.scopeId,I,ee),pe){for(const Q in pe)Q!=="value"&&!hl(Q)&&s(fe,Q,null,pe[Q],O,ee);"value"in pe&&s(fe,"value",null,pe.value,O),(ne=pe.onVnodeBeforeMount)&&ar(ne,ee,w)}z&&Ws(w,null,ee,"beforeMount");const Z=y1(Y,S);Z&&S.beforeEnter(fe),i(fe,T,H),((ne=pe&&pe.onVnodeMounted)||Z||z)&&oi(()=>{try{ne&&ar(ne,ee,w),Z&&S.enter(fe),z&&Ws(w,null,ee,"mounted")}finally{}},Y)},C=(w,T,H,ee,Y)=>{if(H&&h(w,H),ee)for(let O=0;O<ee.length;O++)h(w,ee[O]);if(Y){let O=Y.subTree;if(T===O||M_(O.type)&&(O.ssContent===T||O.ssFallback===T)){const I=Y.vnode;C(w,I,I.scopeId,I.slotScopeIds,Y.parent)}}},b=(w,T,H,ee,Y,O,I,_e,fe=0)=>{for(let ne=fe;ne<w.length;ne++){const pe=w[ne]=_e?Gr(w[ne]):pr(w[ne]);_(null,pe,T,H,ee,Y,O,I,_e)}},E=(w,T,H,ee,Y,O,I)=>{const _e=T.el=w.el;let{patchFlag:fe,dynamicChildren:ne,dirs:pe}=T;fe|=w.patchFlag&16;const P=w.props||Vt,S=T.props||Vt;let z;if(H&&Xs(H,!1),(z=S.onVnodeBeforeUpdate)&&ar(z,H,T,w),pe&&Ws(T,w,H,"beforeUpdate"),H&&Xs(H,!0),ne&&(!w.dynamicChildren||w.dynamicChildren.length!==ne.length)&&(fe=0,I=!1,ne=null),(P.innerHTML&&S.innerHTML==null||P.textContent&&S.textContent==null)&&u(_e,""),ne?F(w.dynamicChildren,ne,_e,H,ee,Ed(T,Y),O):I||q(w,T,_e,null,H,ee,Ed(T,Y),O,!1),fe>0){if(fe&16)U(_e,P,S,H,Y);else if(fe&2&&P.class!==S.class&&s(_e,"class",null,S.class,Y),fe&4&&s(_e,"style",P.style,S.style,Y),fe&8){const Z=T.dynamicProps;for(let Q=0;Q<Z.length;Q++){const K=Z[Q],Me=P[K],xe=S[K];(xe!==Me||K==="value")&&s(_e,K,Me,xe,Y,H)}}fe&1&&w.children!==T.children&&u(_e,T.children)}else!I&&ne==null&&U(_e,P,S,H,Y);((z=S.onVnodeUpdated)||pe)&&oi(()=>{z&&ar(z,H,T,w),pe&&Ws(T,w,H,"updated")},ee)},F=(w,T,H,ee,Y,O,I)=>{for(let _e=0;_e<T.length;_e++){const fe=w[_e],ne=T[_e],pe=fe.el&&(fe.type===je||!ao(fe,ne)||fe.shapeFlag&198)?d(fe.el):H;_(fe,ne,pe,null,ee,Y,O,I,!0)}},U=(w,T,H,ee,Y)=>{if(T!==H){if(T!==Vt)for(const O in T)!hl(O)&&!(O in H)&&s(w,O,T[O],null,Y,ee);for(const O in H){if(hl(O))continue;const I=H[O],_e=T[O];I!==_e&&O!=="value"&&s(w,O,_e,I,Y,ee)}"value"in H&&s(w,"value",T.value,H.value,Y)}},L=(w,T,H,ee,Y,O,I,_e,fe)=>{const ne=T.el=w?w.el:a(""),pe=T.anchor=w?w.anchor:a("");let{patchFlag:P,dynamicChildren:S,slotScopeIds:z}=T;z&&(_e=_e?_e.concat(z):z),w==null?(i(ne,H,ee),i(pe,H,ee),b(T.children||[],H,pe,Y,O,I,_e,fe)):P>0&&P&64&&S&&w.dynamicChildren&&w.dynamicChildren.length===S.length?(F(w.dynamicChildren,S,H,Y,O,I,_e),(T.key!=null||Y&&T===Y.subTree)&&y_(w,T,!0)):q(w,T,H,pe,Y,O,I,_e,fe)},V=(w,T,H,ee,Y,O,I,_e,fe)=>{T.slotScopeIds=_e,w==null?T.shapeFlag&512?Y.ctx.activate(T,H,ee,I,fe):k(T,H,ee,Y,O,I,fe):G(w,T,fe)},k=(w,T,H,ee,Y,O,I)=>{const _e=w.component=C1(w,ee,Y);if(id(w)&&(_e.ctx.renderer=Ae),R1(_e,!1,I),_e.asyncDep){if(Y&&Y.registerDep(_e,X,I),!w.el){const fe=_e.subTree=At(ti);m(null,fe,T,H),w.placeholder=fe.el}}else X(_e,w,T,H,Y,O,I)},G=(w,T,H)=>{const ee=T.component=w.component;if(u1(w,T,H))if(ee.asyncDep&&!ee.asyncResolved){B(ee,T,H);return}else ee.next=T,ee.update();else T.el=w.el,ee.vnode=T},X=(w,T,H,ee,Y,O,I)=>{const _e=()=>{if(w.isMounted){let{next:P,bu:S,u:z,parent:Z,vnode:Q}=w;{const Le=b_(w);if(Le){P&&(P.el=Q.el,B(w,P,I)),Le.asyncDep.then(()=>{oi(()=>{w.isUnmounted||ne()},Y)});return}}let K=P,Me;Xs(w,!1),P?(P.el=Q.el,B(w,P,I)):P=Q,S&&tu(S),(Me=P.props&&P.props.onVnodeBeforeUpdate)&&ar(Me,Z,P,Q),Xs(w,!0);const xe=g0(w),He=w.subTree;w.subTree=xe,_(He,xe,d(He.el),ue(He),w,Y,O),P.el=xe.el,K===null&&d1(w,xe.el),z&&oi(z,Y),(Me=P.props&&P.props.onVnodeUpdated)&&oi(()=>ar(Me,Z,P,Q),Y)}else{let P;const{el:S,props:z}=T,{bm:Z,m:Q,parent:K,root:Me,type:xe}=w,He=_l(T);Xs(w,!1),Z&&tu(Z),!He&&(P=z&&z.onVnodeBeforeMount)&&ar(P,K,T),Xs(w,!0);{Me.ce&&Me.ce._hasShadowRoot()&&Me.ce._injectChildStyle(xe,w.parent?w.parent.type:void 0);const Le=w.subTree=g0(w);_(null,Le,H,ee,w,Y,O),T.el=Le.el}if(Q&&oi(Q,Y),!He&&(P=z&&z.onVnodeMounted)){const Le=T;oi(()=>ar(P,K,Le),Y)}(T.shapeFlag&256||K&&_l(K.vnode)&&K.vnode.shapeFlag&256)&&w.a&&oi(w.a,Y),w.isMounted=!0,T=H=ee=null}};w.scope.on();const fe=w.effect=new Dg(_e);w.scope.off();const ne=w.update=fe.run.bind(fe),pe=w.job=fe.runIfDirty.bind(fe);pe.i=w,pe.id=w.uid,fe.scheduler=()=>pp(pe),Xs(w,!0),ne()},B=(w,T,H)=>{T.component=w;const ee=w.vnode.props;w.vnode=T,w.next=null,h1(w,T.props,ee,H),_1(w,T.children,H),is(),c0(w),rs()},q=(w,T,H,ee,Y,O,I,_e,fe=!1)=>{const ne=w&&w.children,pe=w?w.shapeFlag:0,P=T.children,{patchFlag:S,shapeFlag:z}=T;if(S>0){if(S&128){N(ne,P,H,ee,Y,O,I,_e,fe);return}else if(S&256){j(ne,P,H,ee,Y,O,I,_e,fe);return}}z&8?(pe&16&&J(ne,Y,O),P!==ne&&u(H,P)):pe&16?z&16?N(ne,P,H,ee,Y,O,I,_e,fe):J(ne,Y,O,!0):(pe&8&&u(H,""),z&16&&b(P,H,ee,Y,O,I,_e,fe))},j=(w,T,H,ee,Y,O,I,_e,fe)=>{w=w||la,T=T||la;const ne=w.length,pe=T.length,P=Math.min(ne,pe);let S;for(S=0;S<P;S++){const z=T[S]=fe?Gr(T[S]):pr(T[S]);_(w[S],z,H,null,Y,O,I,_e,fe)}ne>pe?J(w,Y,O,!0,!1,P):b(T,H,ee,Y,O,I,_e,fe,P)},N=(w,T,H,ee,Y,O,I,_e,fe)=>{let ne=0;const pe=T.length;let P=w.length-1,S=pe-1;for(;ne<=P&&ne<=S;){const z=w[ne],Z=T[ne]=fe?Gr(T[ne]):pr(T[ne]);if(ao(z,Z))_(z,Z,H,null,Y,O,I,_e,fe);else break;ne++}for(;ne<=P&&ne<=S;){const z=w[P],Z=T[S]=fe?Gr(T[S]):pr(T[S]);if(ao(z,Z))_(z,Z,H,null,Y,O,I,_e,fe);else break;P--,S--}if(ne>P){if(ne<=S){const z=S+1,Z=z<pe?T[z].el:ee;for(;ne<=S;)_(null,T[ne]=fe?Gr(T[ne]):pr(T[ne]),H,Z,Y,O,I,_e,fe),ne++}}else if(ne>S)for(;ne<=P;)me(w[ne],Y,O,!0),ne++;else{const z=ne,Z=ne,Q=new Map;for(ne=Z;ne<=S;ne++){const Pe=T[ne]=fe?Gr(T[ne]):pr(T[ne]);Pe.key!=null&&Q.set(Pe.key,ne)}let K,Me=0;const xe=S-Z+1;let He=!1,Le=0;const be=new Array(xe);for(ne=0;ne<xe;ne++)be[ne]=0;for(ne=z;ne<=P;ne++){const Pe=w[ne];if(Me>=xe){me(Pe,Y,O,!0);continue}let Ne;if(Pe.key!=null)Ne=Q.get(Pe.key);else for(K=Z;K<=S;K++)if(be[K-Z]===0&&ao(Pe,T[K])){Ne=K;break}Ne===void 0?me(Pe,Y,O,!0):(be[Ne-Z]=ne+1,Ne>=Le?Le=Ne:He=!0,_(Pe,T[Ne],H,null,Y,O,I,_e,fe),Me++)}const we=He?b1(be):la;for(K=we.length-1,ne=xe-1;ne>=0;ne--){const Pe=Z+ne,Ne=T[Pe],Ie=T[Pe+1],et=Pe+1<pe?Ie.el||S_(Ie):ee;be[ne]===0?_(null,Ne,H,et,Y,O,I,_e,fe):He&&(K<0||ne!==we[K]?le(Ne,H,et,2):K--)}}},le=(w,T,H,ee,Y=null)=>{const{el:O,type:I,transition:_e,children:fe,shapeFlag:ne}=w;if(ne&6){le(w.component.subTree,T,H,ee);return}if(ne&128){w.suspense.move(T,H,ee);return}if(ne&64){I.move(w,T,H,Ae);return}if(I===je){i(O,T,H);for(let P=0;P<fe.length;P++)le(fe[P],T,H,ee);i(w.anchor,T,H);return}if(I===iu){M(w,T,H);return}if(ee!==2&&ne&1&&_e)if(ee===0)_e.persisted&&!O[Ni]?i(O,T,H):(_e.beforeEnter(O),i(O,T,H),oi(()=>_e.enter(O),Y));else{const{leave:P,delayLeave:S,afterLeave:z}=_e,Z=()=>{w.ctx.isUnmounted?r(O):i(O,T,H)},Q=()=>{const K=O._isLeaving||!!O[Ni];O._isLeaving&&O[Ni](!0),_e.persisted&&!K?Z():P(O,()=>{Z(),z&&z()})};S?S(O,Z,Q):Q()}else i(O,T,H)},me=(w,T,H,ee=!1,Y=!1)=>{const{type:O,props:I,ref:_e,children:fe,dynamicChildren:ne,shapeFlag:pe,patchFlag:P,dirs:S,cacheIndex:z,memo:Z}=w;if(P===-2&&(Y=!1),_e!=null&&(is(),gl(_e,null,H,w,!0),rs()),z!=null&&(T.renderCache[z]=void 0),pe&256){T.ctx.deactivate(w);return}const Q=pe&1&&S,K=!_l(w);let Me;if(K&&(Me=I&&I.onVnodeBeforeUnmount)&&ar(Me,T,w),pe&6)Te(w.component,H,ee);else{if(pe&128){w.suspense.unmount(H,ee);return}Q&&Ws(w,null,T,"beforeUnmount"),pe&64?w.type.remove(w,T,H,Ae,ee):ne&&!ne.hasOnce&&(O!==je||P>0&&P&64)?J(ne,T,H,!1,!0):(O===je&&P&384||!Y&&pe&16)&&J(fe,T,H),ee&&ge(w)}const xe=Z!=null&&z==null;(K&&(Me=I&&I.onVnodeUnmounted)||Q||xe)&&oi(()=>{Me&&ar(Me,T,w),Q&&Ws(w,null,T,"unmounted"),xe&&(w.el=null)},H)},ge=w=>{const{type:T,el:H,anchor:ee,transition:Y}=w;if(T===je){ve(H,ee);return}if(T===iu){x(w);return}const O=()=>{r(H),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(w.shapeFlag&1&&Y&&!Y.persisted){const{leave:I,delayLeave:_e}=Y,fe=()=>I(H,O);_e?_e(w.el,O,fe):fe()}else O()},ve=(w,T)=>{let H;for(;w!==T;)H=f(w),r(w),w=H;r(T)},Te=(w,T,H)=>{const{bum:ee,scope:Y,job:O,subTree:I,um:_e,m:fe,a:ne}=w;v0(fe),v0(ne),ee&&tu(ee),Y.stop(),O&&(O.flags|=8,me(I,w,T,H)),_e&&oi(_e,T),oi(()=>{w.isUnmounted=!0},T)},J=(w,T,H,ee=!1,Y=!1,O=0)=>{for(let I=O;I<w.length;I++)me(w[I],T,H,ee,Y)},ue=w=>{if(w.shapeFlag&6)return ue(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const T=f(w.anchor||w.el),H=T&&T[Ny];return H?f(H):T};let oe=!1;const Re=(w,T,H)=>{let ee;w==null?T._vnode&&(me(T._vnode,null,null,!0),ee=T._vnode.component):_(T._vnode||null,w,T,null,null,null,H),T._vnode=w,oe||(oe=!0,c0(ee),Yg(),oe=!1)},Ae={p:_,um:me,m:le,r:ge,mt:k,mc:b,pc:q,pbc:F,n:ue,o:n};return{render:Re,hydrate:void 0,createApp:r1(Re)}}function Ed({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Xs({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function y1(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function y_(n,e,t=!1){const i=n.children,r=e.children;if(tt(i)&&tt(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Gr(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&y_(o,a)),a.type===od&&(a.patchFlag===-1&&(a=r[s]=Gr(a)),a.el=o.el),a.type===ti&&!a.el&&(a.el=o.el)}}function b1(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function b_(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:b_(e)}function v0(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function S_(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?S_(e.subTree):null}const M_=n=>n.__isSuspense;function S1(n,e){e&&e.pendingBranch?tt(n)?e.effects.push(...n):e.effects.push(n):Dy(n)}const je=Symbol.for("v-fgt"),od=Symbol.for("v-txt"),ti=Symbol.for("v-cmt"),iu=Symbol.for("v-stc"),bo=[];let wi=null;function de(n=!1){bo.push(wi=n?null:[])}function w_(){bo.pop(),wi=bo[bo.length-1]||null}let Nl=1;function Au(n,e=!1){Nl+=n,n<0&&wi&&e&&(wi.hasOnce=!0)}function E_(n){return n.dynamicChildren=Nl>0?wi||la:null,w_(),Nl>0&&wi&&wi.push(n),n}function he(n,e,t,i,r,s){return E_(y(n,e,t,i,r,s,!0))}function vl(n,e,t,i,r){return E_(At(n,e,t,i,r,!0))}function Cu(n){return n?n.__v_isVNode===!0:!1}function ao(n,e){return n.type===e.type&&n.key===e.key}const T_=({key:n})=>n??null,ru=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Kt(n)||Wn(n)||ct(n)?{i:Vi,r:n,k:e,f:!!t}:n:null);function y(n,e=null,t=null,i=0,r=null,s=n===je?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&T_(e),ref:e&&ru(e),scopeId:Kg,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Vi};return a?(Ru(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Kt(t)?8:16),Nl>0&&!o&&wi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&wi.push(l),l}const At=M1;function M1(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Ky)&&(n=ti),Cu(n)){const a=Fs(n,e,!0);return t&&Ru(a,t),Nl>0&&!s&&wi&&(a.shapeFlag&6?wi[wi.indexOf(n)]=a:wi.push(a)),a.patchFlag=-2,a}if(I1(n)&&(n=n.__vccOpts),e){e=w1(e);let{class:a,style:l}=e;a&&!Kt(a)&&(e.class=st(a)),Dt(l)&&(hp(l)&&!tt(l)&&(l=Mn({},l)),e.style=Sn(l))}const o=Kt(n)?1:M_(n)?128:nd(n)?64:Dt(n)?4:ct(n)?2:0;return y(n,e,t,i,r,o,s,!0)}function w1(n){return n?hp(n)||p_(n)?Mn({},n):n:null}function Fs(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?E1(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&T_(c),ref:e&&e.ref?t&&s?tt(s)?s.concat(ru(e)):[s,ru(e)]:ru(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==je?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Fs(n.ssContent),ssFallback:n.ssFallback&&Fs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Fl(u,l.clone(u)),u}function Hi(n=" ",e=0){return At(od,null,n,e)}function lo(n,e){const t=At(iu,null,n);return t.staticCount=e,t}function Bn(n="",e=!1){return e?(de(),vl(ti,null,n)):At(ti,null,n)}function pr(n){return n==null||typeof n=="boolean"?At(ti):tt(n)?At(je,null,n.slice()):Cu(n)?Gr(n):At(od,null,String(n))}function Gr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Fs(n)}function Ru(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(tt(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ru(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!p_(e)?e._ctx=Vi:r===3&&Vi&&(Vi.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(ct(e)){if(i&65){Ru(n,{default:e});return}e={default:e,_ctx:Vi},t=32}else e=String(e),i&64?(t=16,e=[Hi(e)]):t=8;n.children=e,n.shapeFlag|=t}function E1(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=st([e.class,i.class]));else if(r==="style")e.style=Sn([e.style,i.style]);else if(Yu(r)){const s=e[r],o=i[r];o&&s!==o&&!(tt(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!qu(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function ar(n,e,t,i=null){ji(n,e,7,[t,i])}const T1=c_();let A1=0;function C1(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||T1,s={uid:A1++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ty(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:g_(i,r),emitsOptions:u_(i,r),emit:null,emitted:null,propsDefaults:Vt,inheritAttrs:i.inheritAttrs,ctx:Vt,data:Vt,props:Vt,attrs:Vt,slots:Vt,refs:Vt,setupState:Vt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=o1.bind(null,s),n.ce&&n.ce(s),s}let ni=null;const A_=()=>ni||Vi;let Pu,Ol;{const n=Qu(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Pu=e("__VUE_INSTANCE_SETTERS__",t=>ni=t),Ol=e("__VUE_SSR_SETTERS__",t=>kl=t)}const rc=n=>{const e=ni;return Pu(n),n.scope.on(),()=>{n.scope.off(),Pu(e)}},y0=()=>{ni&&ni.scope.off(),Pu(null)};function C_(n){return n.vnode.shapeFlag&4}let kl=!1;function R1(n,e=!1,t=!1){e&&Ol(e);const{props:i,children:r}=n.vnode,s=C_(n);f1(n,i,s,e),g1(n,r,t||e);const o=s?P1(n,e):void 0;return e&&Ol(!1),o}function P1(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Zy);const{setup:i}=t;if(i){is();const r=n.setupContext=i.length>1?L1(n):null,s=rc(n),o=ic(i,n,0,[n.props,r]),a=Mg(o);if(rs(),s(),(a||n.sp)&&!_l(n)&&r_(n),a){if(o.then(y0,y0),e)return o.then(l=>{Ol(!0);try{b0(n,l,e)}finally{Ol(!1)}}).catch(l=>{td(l,n,0)});n.asyncDep=o}else b0(n,o)}else R_(n)}function b0(n,e,t){ct(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Dt(e)&&(n.setupState=Xg(e)),R_(n)}function R_(n,e,t){const i=n.type;n.render||(n.render=i.render||Mr);{const r=rc(n);is();try{Jy(n)}finally{rs(),r()}}}const D1={get(n,e){return kn(n,"get",""),n[e]}};function L1(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,D1),slots:n.slots,emit:n.emit,expose:e}}function ad(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Xg(by(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in xl)return xl[t](n)},has(e,t){return t in e||t in xl}})):n.proxy}function I1(n){return ct(n)&&"__vccOpts"in n}const an=(n,e)=>Ty(n,e,kl);function U1(n,e,t){try{Au(-1);const i=arguments.length;return i===2?Dt(e)&&!tt(e)?Cu(e)?At(n,null,[e]):At(n,e):At(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Cu(t)&&(t=[t]),At(n,e,t))}finally{Au(1)}}const F1="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bf;const S0=typeof window<"u"&&window.trustedTypes;if(S0)try{Bf=S0.createPolicy("vue",{createHTML:n=>n})}catch{}const P_=Bf?n=>Bf.createHTML(n):n=>n,N1="http://www.w3.org/2000/svg",O1="http://www.w3.org/1998/Math/MathML",Vr=typeof document<"u"?document:null,M0=Vr&&Vr.createElement("template"),k1={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Vr.createElementNS(N1,n):e==="mathml"?Vr.createElementNS(O1,n):t?Vr.createElement(n,{is:t}):Vr.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Vr.createTextNode(n),createComment:n=>Vr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Vr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{M0.innerHTML=P_(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=M0.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ms="transition",Ga="animation",Bl=Symbol("_vtc"),D_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},B1=Mn({},Qg,D_),z1=n=>(n.displayName="Transition",n.props=B1,n),zf=z1((n,{slots:e})=>U1(By,V1(n),e)),$s=(n,e=[])=>{tt(n)?n.forEach(t=>t(...e)):n&&n(...e)},w0=n=>n?tt(n)?n.some(e=>e.length>1):n.length>1:!1;function V1(n){const e={};for(const L in n)L in D_||(e[L]=n[L]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=n,g=H1(r),_=g&&g[0],p=g&&g[1],{onBeforeEnter:m,onEnter:v,onEnterCancelled:M,onLeave:x,onLeaveCancelled:R,onBeforeAppear:A=m,onAppear:C=v,onAppearCancelled:b=M}=e,E=(L,V,k,G)=>{L._enterCancelled=G,js(L,V?u:a),js(L,V?c:o),k&&k()},F=(L,V)=>{L._isLeaving=!1,js(L,d),js(L,h),js(L,f),V&&V()},U=L=>(V,k)=>{const G=L?C:v,X=()=>E(V,L,k);$s(G,[V,X]),E0(()=>{js(V,L?l:s),Fr(V,L?u:a),w0(G)||T0(V,i,_,X)})};return Mn(e,{onBeforeEnter(L){$s(m,[L]),Fr(L,s),Fr(L,o)},onBeforeAppear(L){$s(A,[L]),Fr(L,l),Fr(L,c)},onEnter:U(!1),onAppear:U(!0),onLeave(L,V){L._isLeaving=!0;const k=()=>F(L,V);Fr(L,d),L._enterCancelled?(Fr(L,f),R0(L)):(R0(L),Fr(L,f)),E0(()=>{L._isLeaving&&(js(L,d),Fr(L,h),w0(x)||T0(L,i,p,k))}),$s(x,[L,k])},onEnterCancelled(L){E(L,!1,void 0,!0),$s(M,[L])},onAppearCancelled(L){E(L,!0,void 0,!0),$s(b,[L])},onLeaveCancelled(L){F(L),$s(R,[L])}})}function H1(n){if(n==null)return null;if(Dt(n))return[Td(n.enter),Td(n.leave)];{const e=Td(n);return[e,e]}}function Td(n){return $v(n)}function Fr(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Bl]||(n[Bl]=new Set)).add(e)}function js(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Bl];t&&(t.delete(e),t.size||(n[Bl]=void 0))}function E0(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let G1=0;function T0(n,e,t,i){const r=n._endId=++G1,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=W1(n,e);if(!o)return i();const c=o+"end";let u=0;const d=()=>{n.removeEventListener(c,f),s()},f=h=>{h.target===n&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),n.addEventListener(c,f)}function W1(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(`${ms}Delay`),s=i(`${ms}Duration`),o=A0(r,s),a=i(`${Ga}Delay`),l=i(`${Ga}Duration`),c=A0(a,l);let u=null,d=0,f=0;e===ms?o>0&&(u=ms,d=o,f=s.length):e===Ga?c>0&&(u=Ga,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?ms:Ga:null,f=u?u===ms?s.length:l.length:0);const h=u===ms&&/\b(?:transform|all)(?:,|$)/.test(i(`${ms}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function A0(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>C0(t)+C0(n[i])))}function C0(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function R0(n){return(n?n.ownerDocument:document).body.offsetHeight}function X1(n,e,t){const i=n[Bl];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const P0=Symbol("_vod"),$1=Symbol("_vsh"),j1=Symbol(""),Y1=/(?:^|;)\s*display\s*:/;function q1(n,e,t){const i=n.style,r=Kt(t);let s=!1;if(t&&!r){if(e)if(Kt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&il(i,a,"")}else for(const o in e)t[o]==null&&il(i,o,"");for(const o in t){o==="display"&&(s=!0);const a=t[o];a!=null?Z1(n,o,!Kt(e)&&e?e[o]:void 0,a)||il(i,o,a):il(i,o,"")}}else if(r){if(e!==t){const o=i[j1];o&&(t+=";"+o),i.cssText=t,s=Y1.test(t)}}else e&&n.removeAttribute("style");P0 in n&&(n[P0]=s?i.display:"",n[$1]&&(i.display="none"))}const D0=/\s*!important$/;function il(n,e,t){if(tt(t))t.forEach(i=>il(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=K1(n,e);D0.test(t)?n.setProperty(Vs(i),t.replace(D0,""),"important"):n[i]=t}}const L0=["Webkit","Moz","ms"],Ad={};function K1(n,e){const t=Ad[e];if(t)return t;let i=nr(e);if(i!=="filter"&&i in n)return Ad[e]=i;i=Tg(i);for(let r=0;r<L0.length;r++){const s=L0[r]+i;if(s in n)return Ad[e]=s}return e}function Z1(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Kt(i)&&t===i}const I0="http://www.w3.org/1999/xlink";function U0(n,e,t,i,r,s=Jv(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(I0,e.slice(6,e.length)):n.setAttributeNS(I0,e,t):t==null||s&&!Cg(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Cr(t)?String(t):t)}function F0(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?P_(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Cg(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function co(n,e,t,i){n.addEventListener(e,t,i)}function J1(n,e,t,i){n.removeEventListener(e,t,i)}const N0=Symbol("_vei");function Q1(n,e,t,i,r=null){const s=n[N0]||(n[N0]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=nb(e);if(i){const c=s[e]=sb(i,r);co(n,a,c,l)}else o&&(J1(n,a,o,l),s[e]=void 0)}}const eb=/(Once|Passive|Capture)$/,tb=/^on:?(?:Once|Passive|Capture)$/;function nb(n){let e,t;for(;(t=n.match(eb))&&!tb.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Vs(n.slice(2)),e]}let Cd=0;const ib=Promise.resolve(),rb=()=>Cd||(ib.then(()=>Cd=0),Cd=Date.now());function sb(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(tt(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&ji(c,e,5,a)}}else ji(r,e,5,[i])};return t.value=n,t.attached=rb(),t}const O0=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,ob=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?X1(n,i,o):e==="style"?q1(n,t,i):Yu(e)?qu(e)||Q1(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ab(n,e,i,o))?(F0(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&U0(n,e,i,o,s,e!=="value")):n._isVueCE&&(lb(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Kt(i)))?F0(n,nr(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),U0(n,e,i,o))};function ab(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&O0(e)&&ct(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return O0(e)&&Kt(t)?!1:e in n}function lb(n,e){const t=n._def.props;if(!t)return!1;const i=nr(e);return Array.isArray(t)?t.some(r=>nr(r)===i):Object.keys(t).some(r=>nr(r)===i)}const Du=n=>{const e=n.props["onUpdate:modelValue"]||!1;return tt(e)?t=>tu(e,t):e};function cb(n){n.target.composing=!0}function k0(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ho=Symbol("_assign"),mc=Symbol("_initialValue");function Rd(n,e,t){return e&&(n=n.trim()),t&&(n=Ju(n)),n}const Pd={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n.parentNode&&(n.type==="text"?n[mc]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[mc]=n.defaultValue.replace(/\r\n?/g,`
`))),n[ho]=Du(r);const s=i||r.props&&r.props.type==="number";co(n,e?"change":"input",o=>{o.target.composing||n[ho](Rd(n.value,t,s))}),(t||s)&&co(n,"change",()=>{n.value=Rd(n.value,t,s)}),e||(co(n,"compositionstart",cb),co(n,"compositionend",k0),co(n,"change",k0))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const r=e??"",s=n[mc];delete n[mc],s!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==s?n[ho](Rd(n.value,t,i)):n.value=r},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[ho]=Du(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Ju(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},ub={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,co(n,"change",()=>{const r=Array.prototype.filter.call(n.options,s=>s.selected).map(s=>t?Ju(Lu(s)):Lu(s));n[ho](n.multiple?Ku(n._modelValue)?new Set(r):r:r[0]),n._assigning=!0,Rr(()=>{n._assigning=!1})}),n[ho]=Du(i)},mounted(n,{value:e}){B0(n,e)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[ho]=Du(t)},updated(n,{value:e}){n._assigning||B0(n,e)}};function B0(n,e){const t=n.multiple,i=tt(e);if(!(t&&!i&&!Ku(e))){for(let r=0,s=n.options.length;r<s;r++){const o=n.options[r],a=Lu(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=ey(e,a)>-1}else o.selected=e.has(a);else if(nc(Lu(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Lu(n){return"_value"in n?n._value:n.value}const db=["ctrl","shift","alt","meta"],fb={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>db.some(t=>n[`${t}Key`]&&!e.includes(t))},po=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=fb[e[o]];if(a&&a(r,e))return}return n(r,...s)}))},hb={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},pb=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(r=>{if(!("key"in r))return;const s=Vs(r.key);if(e.some(o=>o===s||hb[o]===s))return n(r)}))},mb=Mn({patchProp:ob},k1);let z0;function gb(){return z0||(z0=x1(mb))}const _b=((...n)=>{const e=gb().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=vb(i);if(!r)return;const s=e._component;!ct(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,xb(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function xb(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function vb(n){return Kt(n)?document.querySelector(n):n}const ld={goldenHour:{name:"Lime",primary:{50:"#fafff0",100:"#f2ffd6",200:"#e6ffad",300:"#daff7a",400:"#d2ff02",500:"#bde602",600:"#9ebf02",700:"#7e9901",800:"#5f7301",900:"#3f4d01"},accent:{50:"#fafff0",100:"#f2ffd6",200:"#e6ffad",300:"#daff7a",400:"#d2ff02",500:"#bde602",600:"#9ebf02",700:"#7e9901",800:"#5f7301",900:"#3f4d01"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#44403c",800:"#292524",900:"#1c1917"}},emerald:{name:"Emerald",primary:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},accent:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#44403c",800:"#292524",900:"#1c1917"}},ocean:{name:"Ocean",primary:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},accent:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},secondary:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},dark:{700:"#334155",800:"#1e293b",900:"#0f172a"}},sunset:{name:"Sunset",primary:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},accent:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#44403c",800:"#292524",900:"#1c1917"}},royal:{name:"Royal",primary:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},accent:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},secondary:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},dark:{700:"#334155",800:"#1e293b",900:"#0f172a"}},ruby:{name:"Ruby",primary:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},accent:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#44403c",800:"#292524",900:"#1c1917"}},rose:{name:"Rose",primary:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},accent:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#44403c",800:"#292524",900:"#1c1917"}},moonlit:{name:"Silver",primary:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},accent:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#334155",800:"#1e293b",900:"#0f172a"}},sepia:{name:"Sepia",primary:{50:"#faf6f0",100:"#f0e6d8",200:"#e0ccb0",300:"#d0b28a",400:"#c09a66",500:"#a97f4d",600:"#8a6540",700:"#6d4f33",800:"#543c28",900:"#3d2c1e"},accent:{50:"#fdf6ec",100:"#f9e8d0",200:"#f0d0a0",300:"#e5b878",400:"#d9a055",500:"#c0853d",600:"#9c6830",700:"#7a5026",800:"#5c3c1e",900:"#422b16"},secondary:{50:"#faf6f0",100:"#f0e6d8",200:"#e0ccb0",300:"#d0b28a",400:"#c09a66",500:"#a97f4d",600:"#8a6540",700:"#6d4f33",800:"#543c28",900:"#3d2c1e"},dark:{700:"#6d4f33",800:"#543c28",900:"#3d2c1e"}}},gc=n=>{const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return e?`${parseInt(e[1],16)} ${parseInt(e[2],16)} ${parseInt(e[3],16)}`:"0 0 0"},ha=De("goldenHour"),L_=n=>{const e=ld[n];if(!e)return;const t=document.documentElement;Object.entries(e.primary).forEach(([i,r])=>{t.style.setProperty(`--color-primary-${i}`,gc(r))}),Object.entries(e.accent).forEach(([i,r])=>{t.style.setProperty(`--color-accent-${i}`,gc(r))}),Object.entries(e.secondary).forEach(([i,r])=>{t.style.setProperty(`--color-secondary-${i}`,gc(r))}),Object.entries(e.dark).forEach(([i,r])=>{t.style.setProperty(`--color-dark-${i}`,gc(r))})},yb=()=>{const n=localStorage.getItem("colorPalette");n&&ld[n]?ha.value=n:ha.value="goldenHour",L_(ha.value)};Ai(ha,n=>{L_(n),window.dispatchEvent(new CustomEvent("colorpalettechange"))});const bb=n=>{ld[n]&&(ha.value=n,localStorage.setItem("colorPalette",n))};yb();function Sb(){return{colorPalettes:ld,selectedPalette:ha,setPalette:bb}}function Hr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function I_(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ci={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},zl={duration:.5,overwrite:!1,delay:0},_p,Rn,$t,Gi=1e8,zt=1/Gi,Vf=Math.PI*2,Mb=Vf/4,wb=0,U_=Math.sqrt,Eb=Math.cos,Tb=Math.sin,wn=function(e){return typeof e=="string"},Jt=function(e){return typeof e=="function"},os=function(e){return typeof e=="number"},xp=function(e){return typeof e>"u"},Pr=function(e){return typeof e=="object"},ci=function(e){return e!==!1},vp=function(){return typeof window<"u"},_c=function(e){return Jt(e)||wn(e)},F_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Xn=Array.isArray,Ab=/random\([^)]+\)/g,Cb=/,\s*/g,V0=/(?:-?\.?\d|\.)+/gi,N_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,sa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Dd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,O_=/[+-]=-?[.\d]+/,Rb=/[^,'"\[\]\s]+/gi,Pb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Yt,dr,Hf,yp,Pi={},Iu={},k_,B_=function(e){return(Iu=Ta(e,Pi))&&pi},bp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Vl=function(e,t){return!t&&console.warn(e)},z_=function(e,t){return e&&(Pi[e]=t)&&Iu&&(Iu[e]=t)||Pi},Hl=function(){return 0},Db={suppressEvents:!0,isStart:!0,kill:!1},su={suppressEvents:!0,kill:!1},Lb={suppressEvents:!0},Sp={},Ds=[],Gf={},V_,yi={},Ld={},H0=30,ou=[],Mp="",wp=function(e){var t=e[0],i,r;if(Pr(t)||Jt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=ou.length;r--&&!ou[r].targetTest(t););i=ou[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new cx(e[r],i)))||e.splice(r,1);return e},So=function(e){return e._gsap||wp(Wi(e))[0]._gsap},H_=function(e,t,i){return(i=e[t])&&Jt(i)?e[t]():xp(i)&&e.getAttribute&&e.getAttribute(t)||i},ui=function(e,t){return(e=e.split(",")).forEach(t)||e},tn=function(e){return Math.round(e*1e5)/1e5||0},jt=function(e){return Math.round(e*1e7)/1e7||0},pa=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},Ib=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Uu=function(){var e=Ds.length,t=Ds.slice(0),i,r;for(Gf={},Ds.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ep=function(e){return!!(e._initted||e._startAt||e.add)},G_=function(e,t,i,r){Ds.length&&!Rn&&Uu(),e.render(t,i,!!(Rn&&t<0&&Ep(e))),Ds.length&&!Rn&&Uu()},W_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Rb).length<2?t:wn(e)?e.trim():e},X_=function(e){return e},Di=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Ub=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ta=function(e,t){for(var i in t)e[i]=t[i];return e},G0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Pr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Fu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},yl=function(e){var t=e.parent||Yt,i=e.keyframes?Ub(Xn(e.keyframes)):Di;if(ci(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Fb=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},$_=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},cd=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ns=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Mo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Nb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Wf=function(e,t,i,r){return e._startAt&&(Rn?e._startAt.revert(su):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Ob=function n(e){return!e||e._ts&&n(e.parent)},W0=function(e){return e._repeat?Aa(e._tTime,e=e.duration()+e._rDelay)*e:0},Aa=function(e,t){var i=Math.floor(e=jt(e/t));return e&&i===e?i-1:i},Nu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ud=function(e){return e._end=jt(e._start+(e._tDur/Math.abs(e._ts||e._rts||zt)||0))},dd=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=jt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ud(e),i._dirty||Mo(i,e)),e},j_=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Nu(e.rawTime(),t),(!t._dur||sc(0,t.totalDuration(),i)-t._tTime>zt)&&t.render(i,!0)),Mo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-zt}},_r=function(e,t,i,r){return t.parent&&Ns(t),t._start=jt((os(i)?i:i||e!==Yt?Fi(e,i,t):e._time)+t._delay),t._end=jt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),$_(e,t,"_first","_last",e._sort?"_start":0),Xf(t)||(e._recent=t),r||j_(e,t),e._ts<0&&dd(e,e._tTime),e},Y_=function(e,t){return(Pi.ScrollTrigger||bp("scrollTrigger",t))&&Pi.ScrollTrigger.create(t,e)},q_=function(e,t,i,r,s){if(Ap(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Rn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&V_!==Si.frame)return Ds.push(e),e._lazy=[s,r],1},kb=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Xf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Bb=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&kb(e)&&!(!e._initted&&Xf(e))||(e._ts<0||e._dp._ts<0)&&!Xf(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=sc(0,e._tDur,t),u=Aa(l,a),e._yoyo&&u&1&&(o=1-o),u!==Aa(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Rn||r||e._zTime===zt||!t&&e._zTime){if(!e._initted&&q_(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?zt:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Wf(e,t,i,!0),e._onUpdate&&!i&&Ei(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ei(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ns(e,1),!i&&!Rn&&(Ei(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},zb=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ca=function(e,t,i,r){var s=e._repeat,o=jt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:jt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&dd(e,e._tTime=e._tDur*a),e.parent&&ud(e),i||Mo(e.parent,e),e},X0=function(e){return e instanceof li?Mo(e):Ca(e,e._dur)},Vb={_start:0,endTime:Hl,totalDuration:Hl},Fi=function n(e,t,i){var r=e.labels,s=e._recent||Vb,o=e.duration()>=Gi?s.endTime(!1):e._dur,a,l,c;return wn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(Xn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},bl=function(e,t,i){var r=os(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ci(l.vars.inherit)&&l.parent;o.immediateRender=ci(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new ln(t[0],o,t[s+1])},Hs=function(e,t){return e||e===0?t(e):t},sc=function(e,t,i){return i<e?e:i>t?t:i},zn=function(e,t){return!wn(e)||!(t=Pb.exec(e))?"":t[1]},Hb=function(e,t,i){return Hs(i,function(r){return sc(e,t,r)})},$f=[].slice,K_=function(e,t){return e&&Pr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Pr(e[0]))&&!e.nodeType&&e!==dr},Gb=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return wn(r)&&!t||K_(r,1)?(s=i).push.apply(s,Wi(r)):i.push(r)})||i},Wi=function(e,t,i){return $t&&!t&&$t.selector?$t.selector(e):wn(e)&&!i&&(Hf||!Ra())?$f.call((t||yp).querySelectorAll(e),0):Xn(e)?Gb(e,i):K_(e)?$f.call(e,0):e?[e]:[]},jf=function(e){return e=Wi(e)[0]||Vl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Wi(t,i.querySelectorAll?i:i===e?Vl("Invalid scope")||yp.createElement("div"):e)}},Z_=function(e){return e.sort(function(){return .5-Math.random()})},J_=function(e){if(Jt(e))return e;var t=Pr(e)?e:{each:e},i=wo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,d=r;return wn(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],d=r[1]),function(f,h,g){var _=(g||t).length,p=o[_],m,v,M,x,R,A,C,b,E;if(!p){if(E=t.grid==="auto"?0:(t.grid||[1,Gi])[1],!E){for(C=-Gi;C<(C=g[E++].getBoundingClientRect().left)&&E<_;);E<_&&E--}for(p=o[_]=[],m=l?Math.min(E,_)*u-.5:r%E,v=E===Gi?0:l?_*d/E-.5:r/E|0,C=0,b=Gi,A=0;A<_;A++)M=A%E-m,x=v-(A/E|0),p[A]=R=c?Math.abs(c==="y"?x:M):U_(M*M+x*x),R>C&&(C=R),R<b&&(b=R);r==="random"&&Z_(p),p.max=C-b,p.min=b,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(E>_?_-1:c?c==="y"?_/E:E:Math.max(E,_/E))||0)*(r==="edges"?-1:1),p.b=_<0?s-_:s,p.u=zn(t.amount||t.each)||0,i=i&&_<0?nS(i):i}return _=(p[f]-p.min)/p.max||0,jt(p.b+(i?i(_):_)*p.v)+p.u}},Yf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=jt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(os(i)?0:zn(i))}},Q_=function(e,t){var i=Xn(e),r,s;return!i&&Pr(e)&&(r=i=e.radius||Gi,e.values?(e=Wi(e.values),(s=!os(e[0]))&&(r*=r)):e=Yf(e.increment)),Hs(t,i?Jt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Gi,u=0,d=e.length,f,h;d--;)s?(f=e[d].x-a,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-a),f<c&&(c=f,u=d);return u=!r||c<=r?e[u]:o,s||u===o||os(o)?u:u+zn(o)}:Yf(e))},ex=function(e,t,i,r){return Hs(Xn(e)?!t:i===!0?!!(i=0):!r,function(){return Xn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},Wb=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},Xb=function(e,t){return function(i){return e(parseFloat(i))+(t||zn(i))}},$b=function(e,t,i){return nx(e,t,0,1,i)},tx=function(e,t,i){return Hs(i,function(r){return e[~~t(r)]})},jb=function n(e,t,i){var r=t-e;return Xn(e)?tx(e,n(0,e.length),t):Hs(i,function(s){return(r+(s-e)%r)%r+e})},Yb=function n(e,t,i){var r=t-e,s=r*2;return Xn(e)?tx(e,n(0,e.length-1),t):Hs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Gl=function(e){return e.replace(Ab,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(Cb);return ex(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},nx=function(e,t,i,r,s){var o=t-e,a=r-i;return Hs(s,function(l){return i+((l-e)/o*a||0)})},qb=function n(e,t,i,r){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var o=wn(e),a={},l,c,u,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Xn(e)&&!Xn(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(n(e[c-1],e[c]));d--,s=function(g){g*=d;var _=Math.min(f,~~g);return u[_](g-_)},i=t}else r||(e=Ta(Xn(e)?[]:{},e));if(!u){for(l in t)Tp.call(a,e,l,"get",t[l]);s=function(g){return Pp(g,a)||(o?e.p:e)}}}return Hs(i,s)},$0=function(e,t,i){var r=e.labels,s=Gi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ei=function(e,t,i){var r=e.vars,s=r[t],o=$t,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&Ds.length&&Uu(),a&&($t=a),u=l?s.apply(c,l):s.call(c),$t=o,u},rl=function(e){return Ns(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Rn),e.progress()<1&&Ei(e,"onInterrupt"),e},oa,ix=[],rx=function(e){if(e)if(e=!e.name&&e.default||e,vp()||e.headless){var t=e.name,i=Jt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Hl,render:Pp,add:Tp,kill:fS,modifier:dS,rawVars:0},o={targetTest:0,get:0,getSetter:Rp,aliases:{},register:0};if(Ra(),e!==r){if(yi[t])return;Di(r,Di(Fu(e,s),o)),Ta(r.prototype,Ta(s,Fu(e,o))),yi[r.prop=t]=r,e.targetTest&&(ou.push(r),Sp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}z_(t,r),e.register&&e.register(pi,r,di)}else ix.push(e)},Bt=255,sl={aqua:[0,Bt,Bt],lime:[0,Bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Bt],navy:[0,0,128],white:[Bt,Bt,Bt],olive:[128,128,0],yellow:[Bt,Bt,0],orange:[Bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Bt,0,0],pink:[Bt,192,203],cyan:[0,Bt,Bt],transparent:[Bt,Bt,Bt,0]},Id=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Bt+.5|0},sx=function(e,t,i){var r=e?os(e)?[e>>16,e>>8&Bt,e&Bt]:0:sl.black,s,o,a,l,c,u,d,f,h,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),sl[e])r=sl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Bt,r&Bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Bt,e&Bt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(V0),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Id(l+1/3,s,o),r[1]=Id(l,s,o),r[2]=Id(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(N_),i&&r.length<4&&(r[3]=1),r}else r=e.match(V0)||sl.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Bt,o=r[1]/Bt,a=r[2]/Bt,d=Math.max(s,o,a),f=Math.min(s,o,a),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===s?(o-a)/h+(o<a?6:0):d===o?(a-s)/h+2:(s-o)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},ox=function(e){var t=[],i=[],r=-1;return e.split(Ls).forEach(function(s){var o=s.match(sa)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},j0=function(e,t,i){var r="",s=(e+r).match(Ls),o=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!s)return e;if(s=s.map(function(f){return(f=sx(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=ox(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Ls,"1").split(sa),d=c.length-1;a<d;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Ls),d=c.length-1;a<d;a++)r+=c[a]+s[a];return r+c[d]},Ls=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in sl)n+="|"+e+"\\b";return new RegExp(n+")","gi")})(),Kb=/hsl[a]?\(/,ax=function(e){var t=e.join(" "),i;if(Ls.lastIndex=0,Ls.test(t))return i=Kb.test(t),e[1]=j0(e[1],i),e[0]=j0(e[0],i,ox(e[1])),!0},Wl,Si=(function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,d,f,h,g=function _(p){var m=n()-r,v=p===!0,M,x,R,A;if((m>e||m<0)&&(i+=m-t),r+=m,R=r-i,M=R-o,(M>0||v)&&(A=++d.frame,f=R-d.time*1e3,d.time=R=R/1e3,o+=M+(M>=s?4:s-M),x=1),v||(l=c(_)),x)for(h=0;h<a.length;h++)a[h](R,f,A,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){k_&&(!Hf&&vp()&&(dr=Hf=window,yp=dr.document||{},Pi.gsap=pi,(dr.gsapVersions||(dr.gsapVersions=[])).push(pi.version),B_(Iu||dr.GreenSockGlobals||!dr.gsap&&dr||{}),ix.forEach(rx)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,o-d.time*1e3+1|0)},Wl=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Wl=0,c=Hl},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=d.time*1e3+s},add:function(p,m,v){var M=m?function(x,R,A,C){p(x,R,A,C),d.remove(M)}:p;return d.remove(p),a[v?"unshift":"push"](M),Ra(),M},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&h>=m&&h--},_listeners:a},d})(),Ra=function(){return!Wl&&Si.wake()},yt={},Zb=/^[\d.\-M][\d.\-,\s]/,Jb=/["']/g,Qb=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(Jb,"").trim():+c,r=l.substr(a+1).trim();return t},eS=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},tS=function(e){var t=(e+"").split("("),i=yt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Qb(t[1])]:eS(e).split(",").map(W_)):yt._CE&&Zb.test(e)?yt._CE("",e):i},nS=function(e){return function(t){return 1-e(1-t)}},wo=function(e,t){return e&&(Jt(e)?e:yt[e]||tS(e))||t},Io=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ui(e,function(a){yt[a]=Pi[a]=s,yt[o=a.toLowerCase()]=i;for(var l in s)yt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=yt[a+"."+l]=s[l]}),s},lx=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ud=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Vf*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*Tb((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:lx(a);return s=Vf/s,l.config=function(c,u){return n(e,c,u)},l},Fd=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:lx(i);return r.config=function(s){return n(e,s)},r};ui("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Io(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});yt.Linear.easeNone=yt.none=yt.Linear.easeIn;Io("Elastic",Ud("in"),Ud("out"),Ud());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Io("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Io("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Io("Circ",function(n){return-(U_(1-n*n)-1)});Io("Sine",function(n){return n===1?1:-Eb(n*Mb)+1});Io("Back",Fd("in"),Fd("out"),Fd());yt.SteppedEase=yt.steps=Pi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-zt;return function(a){return((r*sc(0,o,a)|0)+s)*i}}};zl.ease=yt["quad.out"];ui("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Mp+=n+","+n+"Params,"});var cx=function(e,t){this.id=wb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:H_,this.set=t?t.getSetter:Rp},Xl=(function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ca(this,+t.duration,1,1),this.data=t.data,$t&&(this._ctx=$t,$t.data.push(this)),Wl||Si.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ca(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Ra(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(dd(this,i),!s._dp||s.parent||j_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&_r(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===zt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),G_(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+W0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+W0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Aa(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-zt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Nu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-zt?0:this._rts,this.totalTime(sc(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),ud(this),Nb(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ra(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==zt&&(this._tTime-=zt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=jt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&_r(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ci(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Nu(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Lb);var r=Rn;return Rn=i,Ep(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Rn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,X0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,X0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Fi(this,i),ci(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ci(r)),this._dur||(this._zTime=-zt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-zt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-zt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-zt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Jt(i)?i:X_,l=function(){var u=r.then;r.then=null,s&&s(),Jt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){rl(this)},n})();Di(Xl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-zt,_prom:0,_ps:!1,_rts:1});var li=(function(n){I_(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ci(i.sortChildren),Yt&&_r(i.parent||Yt,Hr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Y_(Hr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return bl(0,arguments,this),this},t.from=function(r,s,o){return bl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return bl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,yl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ln(r,s,Fi(this,o),1),this},t.call=function(r,s,o){return _r(this,ln.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new ln(r,o,Fi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,yl(o).immediateRender=ci(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,d){return a.startAt=o,yl(a).immediateRender=ci(a.immediateRender),this.staggerTo(r,s,a,l,c,u,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:jt(r),d=this._zTime<0!=r<0&&(this._initted||!c),f,h,g,_,p,m,v,M,x,R,A,C;if(this!==Yt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||d){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,x=this._start,M=this._ts,m=!M,d&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(f=jt(u%p),u===l?(_=this._repeat,f=c):(R=jt(u/p),_=~~R,_&&_===R&&(f=c,_--),f>c&&(f=c)),R=Aa(this._tTime,p),!a&&this._tTime&&R!==_&&this._tTime-R*p-this._dur<=0&&(R=_),A&&_&1&&(f=c-f,C=1),_!==R&&!this._lock){var b=A&&R&1,E=b===(A&&_&1);if(_<R&&(b=!b),a=b?0:u%c?c:u,this._lock=1,this.render(a||(C?0:jt(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Ei(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1,R=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,a=b?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=zb(this,jt(a),jt(f)),v&&(u-=f-(f=v._start))),this._tTime=u,this._time=f,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!R&&(Ei(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(h=this._first;h;){if(g=h._next,(h._act||f>=h._start)&&h._ts&&v!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,s,o),f!==this._time||!this._ts&&!m){v=0,g&&(u+=this._zTime=-zt);break}}h=g}else{h=this._last;for(var F=r<0?r:f;h;){if(g=h._prev,(h._act||F<=h._end)&&h._ts&&v!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(F-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(F-h._start)*h._ts,s,o||Rn&&Ep(h)),f!==this._time||!this._ts&&!m){v=0,g&&(u+=this._zTime=F?-zt:zt);break}}h=g}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-zt)._zTime=f>=a?1:-1,this._ts))return this._start=x,ud(this),this.render(r,s,o);this._onUpdate&&!s&&Ei(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ns(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Ei(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(os(s)||(s=Fi(this,s,r)),!(r instanceof Xl)){if(Xn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(wn(r))return this.addLabel(r,s);if(Jt(r))r=ln.delayedCall(0,r);else return this}return this!==r?_r(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Gi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ln?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return wn(r)?this.removeLabel(r):Jt(r)?this.killTweensOf(r):(r.parent===this&&cd(this,r),r===this._recent&&(this._recent=this._last),Mo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=jt(Si.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Fi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=ln.delayedCall(0,s||Hl,o);return a.data="isPause",this._hasPause=1,_r(this,a,Fi(this,r))},t.removePause=function(r){var s=this._first;for(r=Fi(this,r);s;)s._start===r&&s.data==="isPause"&&Ns(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Es!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Wi(r),l=this._first,c=os(s),u;l;)l instanceof ln?Ib(l._targets,a)&&(c?(!Es||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Fi(o,r),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,g=ln.to(o,Di({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||zt,onStart:function(){if(o.pause(),!h){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Ca(g,p,0,1).render(g._time,!0,!0),h=1}u&&u.apply(g,d||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Di({startAt:{time:Fi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),$0(this,Fi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),$0(this,Fi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+zt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=jt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Mo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Mo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Gi,c,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,_r(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=jt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ca(o,o===Yt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Yt._ts&&(G_(Yt,Nu(r,Yt)),V_=Si.frame),Si.frame>=H0){H0+=Ci.autoSleep||120;var s=Yt._first;if((!s||!s._ts)&&Ci.autoSleep&&Si._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Si.sleep()}}},e})(Xl);Di(li.prototype,{_lock:0,_hasPause:0,_forcing:0});var iS=function(e,t,i,r,s,o,a){var l=new di(this._pt,e,t,0,1,mx,null,s),c=0,u=0,d,f,h,g,_,p,m,v;for(l.b=i,l.e=r,i+="",r+="",(m=~r.indexOf("random("))&&(r=Gl(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),f=i.match(Dd)||[];d=Dd.exec(r);)g=d[0],_=r.substring(c,d.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?pa(p,g)-p:parseFloat(g)-p,m:h&&h<4?Math.round:0},c=Dd.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(O_.test(r)||m)&&(l.e=0),this._pt=l,l},Tp=function(e,t,i,r,s,o,a,l,c,u){Jt(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:Jt(d)?c?e[t.indexOf("set")||!Jt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,h=Jt(d)?c?lS:hx:Cp,g;if(wn(r)&&(~r.indexOf("random(")&&(r=Gl(r)),r.charAt(1)==="="&&(g=pa(f,r)+(zn(f)||0),(g||g===0)&&(r=g))),!u||f!==r||qf)return!isNaN(f*r)&&r!==""?(g=new di(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?uS:px,0,h),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!d&&!(t in e)&&bp(t,r),iS.call(this,e,t,f,r,h,l||Ci.stringFilter,c))},rS=function(e,t,i,r,s){if(Jt(e)&&(e=Sl(e,s,t,i,r)),!Pr(e)||e.style&&e.nodeType||Xn(e)||F_(e))return wn(e)?Sl(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Sl(e[a],s,t,i,r);return o},ux=function(e,t,i,r,s,o){var a,l,c,u;if(yi[e]&&(a=new yi[e]).init(s,a.rawVars?t[e]:rS(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new di(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==oa))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Es,qf,Ap=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,f=r.keyframes,h=r.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,v=m&&m.data==="nested"?m.vars.targets:p,M=e._overwrite==="auto"&&!_p,x=e.timeline,R=r.easeReverse||d,A,C,b,E,F,U,L,V,k,G,X,B,q;if(x&&(!f||!s)&&(s="none"),e._ease=wo(s,zl.ease),e._rEase=R&&(wo(R)||e._ease),e._from=!x&&!!r.runBackwards,e._from&&(e.ratio=1),!x||f&&!r.stagger){if(V=p[0]?So(p[0]).harness:0,B=V&&r[V.prop],A=Fu(r,Sp),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!h?_.render(-1,!0):_.revert(u&&g?su:Db),_._lazy=0),o){if(Ns(e._startAt=ln.set(p,Di({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&ci(l),startAt:null,delay:0,onUpdate:c&&function(){return Ei(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Rn||!a&&!h)&&e._startAt.revert(su),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),b=Di({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ci(l),immediateRender:a,stagger:0,parent:m},A),B&&(b[V.prop]=B),Ns(e._startAt=ln.set(p,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Rn?e._startAt.revert(su):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,zt,zt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ci(l)||l&&!g,C=0;C<p.length;C++){if(F=p[C],L=F._gsap||wp(p)[C]._gsap,e._ptLookup[C]=G={},Gf[L.id]&&Ds.length&&Uu(),X=v===p?C:v.indexOf(F),V&&(k=new V).init(F,B||A,e,X,v)!==!1&&(e._pt=E=new di(e._pt,F,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(j){G[j]=E}),k.priority&&(U=1)),!V||B)for(b in A)yi[b]&&(k=ux(b,A,e,X,F,v))?k.priority&&(U=1):G[b]=E=Tp.call(e,F,b,"get",A[b],X,v,0,r.stringFilter);e._op&&e._op[C]&&e.kill(F,e._op[C]),M&&e._pt&&(Es=e,Yt.killTweensOf(F,G,e.globalTime(t)),q=!e.parent,Es=0),e._pt&&l&&(Gf[L.id]=1)}U&&gx(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!q,f&&t<=0&&x.render(Gi,!0,!0)},sS=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,h;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(u=f[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return qf=1,e.vars[t]="+=0",Ap(e,a),qf=0,l?Vl(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,d.e&&(d.e=tn(i)+zn(d.e)),d.b&&(d.b=u.s+zn(d.b))},oS=function(e,t){var i=e[0]?So(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Ta({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},aS=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Xn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Sl=function(e,t,i,r,s){return Jt(e)?e.call(t,i,r,s):wn(e)&&~e.indexOf("random(")?Gl(e):e},dx=Mp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",fx={};ui(dx+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return fx[n]=1});var ln=(function(n){I_(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:yl(r))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=r.parent||Yt,v=(Xn(i)||F_(i)?os(i[0]):"length"in r)?[i]:Wi(i),M,x,R,A,C,b,E,F;if(a._targets=v.length?wp(v):Vl("GSAP target "+i+" not found. https://gsap.com",!Ci.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,g||f||_c(c)||_c(u)){r=a.vars;var U=r.easeReverse||r.yoyoEase;if(M=a.timeline=new li({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:v}),M.kill(),M.parent=M._dp=Hr(a),M._start=0,f||_c(c)||_c(u)){if(A=v.length,E=f&&J_(f),Pr(f))for(C in f)~dx.indexOf(C)&&(F||(F={}),F[C]=f[C]);for(x=0;x<A;x++)R=Fu(r,fx),R.stagger=0,U&&(R.easeReverse=U),F&&Ta(R,F),b=v[x],R.duration=+Sl(c,Hr(a),x,b,v),R.delay=(+Sl(u,Hr(a),x,b,v)||0)-a._delay,!f&&A===1&&R.delay&&(a._delay=u=R.delay,a._start+=u,R.delay=0),M.to(b,R,E?E(x,b,v):0),M._ease=yt.none;M.duration()?c=u=0:a.timeline=0}else if(g){yl(Di(M.vars.defaults,{ease:"none"})),M._ease=wo(g.ease||r.ease||"none");var L=0,V,k,G;if(Xn(g))g.forEach(function(X){return M.to(v,X,">")}),M.duration();else{R={};for(C in g)C==="ease"||C==="easeEach"||aS(C,g[C],R,g.easeEach);for(C in R)for(V=R[C].sort(function(X,B){return X.t-B.t}),L=0,x=0;x<V.length;x++)k=V[x],G={ease:k.e,duration:(k.t-(x?V[x-1].t:0))/100*c},G[C]=k.v,M.to(v,G,L),L+=G.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return h===!0&&!_p&&(Es=Hr(a),Yt.killTweensOf(v),Es=0),_r(m,Hr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!c&&!g&&a._start===jt(m._time)&&ci(d)&&Ob(Hr(a))&&m.data!=="nested")&&(a._tTime=-zt,a.render(Math.max(0,-u)||0)),p&&Y_(Hr(a),p),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-zt&&!u?l:r<zt?0:r,f,h,g,_,p,m,v,M;if(!c)Bb(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(f=jt(d%_),d===l?(g=this._repeat,f=c):(p=jt(d/_),g=~~p,g&&g===p?(f=c,g--):f>c&&(f=c)),m=this._yoyo&&g&1,m&&(f=c-f),p=Aa(this._tTime,_),f===a&&!o&&this._initted&&g===p)return this._tTime=d,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(jt(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(q_(this,u?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var x=f<a;if(x!==this._inv){var R=x?a:c-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=R?(x?-1:1)/R:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!p&&(Ei(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(v,h.d),h=h._next;M&&M.render(r<0?r:M._dur*M._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Wf(this,r,s,o),Ei(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Ei(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Wf(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ns(this,1),!s&&!(u&&!a)&&(d||a||m)&&(Ei(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Wl||Si.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ap(this,c),u=this._ease(c/this._dur),sS(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(dd(this,0),this.parent||$_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?rl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Rn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Es&&Es.vars.overwrite!==!0)._first||rl(this),this.parent&&o!==this.timeline.totalDuration()&&Ca(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Wi(r):a,c=this._ptLookup,u=this._pt,d,f,h,g,_,p,m;if((!s||s==="all")&&Fb(a,l))return s==="all"&&(this._pt=0),rl(this);for(d=this._op=this._op||[],s!=="all"&&(wn(s)&&(_={},ui(s,function(v){return _[v]=1}),s=_),s=oS(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(d[m]=s,g=f,h={}):(h=d[m]=d[m]||{},g=s);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&cd(this,p,"_pt"),delete f[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&u&&rl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return bl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return bl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Yt.killTweensOf(r,s,o)},e})(Xl);Di(ln.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ui("staggerTo,staggerFrom,staggerFromTo",function(n){ln[n]=function(){var e=new li,t=$f.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Cp=function(e,t,i){return e[t]=i},hx=function(e,t,i){return e[t](i)},lS=function(e,t,i,r){return e[t](r.fp,i)},cS=function(e,t,i){return e.setAttribute(t,i)},Rp=function(e,t){return Jt(e[t])?hx:xp(e[t])&&e.setAttribute?cS:Cp},px=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},uS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},mx=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Pp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},dS=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},fS=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?cd(this,t,"_pt"):t.dep||(i=1),t=r;return!i},hS=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},gx=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},di=(function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||px,this.d=l||this,this.set=c||Cp,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=hS,this.m=i,this.mt=s,this.tween=r},n})();ui(Mp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return Sp[n]=1});Pi.TweenMax=Pi.TweenLite=ln;Pi.TimelineLite=Pi.TimelineMax=li;Yt=new li({sortChildren:!1,defaults:zl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ci.stringFilter=ax;var Eo=[],au={},pS=[],Y0=0,mS=0,Nd=function(e){return(au[e]||pS).map(function(t){return t()})},Kf=function(){var e=Date.now(),t=[];e-Y0>2&&(Nd("matchMediaInit"),Eo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=dr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),Nd("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Y0=e,Nd("matchMedia"))},_x=(function(){function n(t,i){this.selector=i&&jf(i),this.data=[],this._r=[],this.isReverted=!1,this.id=mS++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Jt(i)&&(s=r,r=i,i=Jt);var o=this,a=function(){var c=$t,u=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=jf(s)),$t=o,d=r.apply(o,arguments),Jt(d)&&o._r.push(d),$t=c,o.selector=u,o.isReverted=!1,d};return o.last=a,i===Jt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=$t;$t=null,i(this),$t=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof ln&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof li?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ln)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Eo.length;o--;)Eo[o].id===this.id&&Eo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n})(),gS=(function(){function n(t){this.contexts=[],this.scope=t,$t&&$t.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Pr(i)||(i={matches:i});var o=new _x(0,s||this.scope),a=o.conditions={},l,c,u;$t&&!o.selector&&(o.selector=$t.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=dr.matchMedia(i[c]),l&&(Eo.indexOf(o)<0&&Eo.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Kf):l.addEventListener("change",Kf)));return u&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n})(),Ou={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return rx(r)})},timeline:function(e){return new li(e)},getTweensOf:function(e,t){return Yt.getTweensOf(e,t)},getProperty:function(e,t,i,r){wn(e)&&(e=Wi(e)[0]);var s=So(e||{}).get,o=i?X_:W_;return i==="native"&&(i=""),e&&(t?o((yi[t]&&yi[t].get||s)(e,t,i,r)):function(a,l,c){return o((yi[a]&&yi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Wi(e),e.length>1){var r=e.map(function(u){return pi.quickSetter(u,t,i)}),s=r.length;return function(u){for(var d=s;d--;)r[d](u)}}e=e[0]||{};var o=yi[t],a=So(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var d=new o;oa._pt=0,d.init(e,i?u+i:u,oa,0,[e]),d.render(1,d),oa._pt&&Pp(1,oa)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=pi.to(e,Di((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=wo(e.ease,zl.ease)),G0(zl,e||{})},config:function(e){return G0(Ci,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!yi[a]&&!Pi[a]&&Vl(t+" effect requires "+a+" plugin.")}),Ld[t]=function(a,l,c){return i(Wi(a),Di(l||{},s),c)},o&&(li.prototype[t]=function(a,l,c){return this.add(Ld[t](a,Pr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){yt[e]=wo(t)},parseEase:function(e,t){return arguments.length?wo(e,t):yt},getById:function(e){return Yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new li(e),r,s;for(i.smoothChildTiming=ci(e.smoothChildTiming),Yt.remove(i),i._dp=0,i._time=i._tTime=Yt._time,r=Yt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof ln&&r.vars.onComplete===r._targets[0]))&&_r(i,r,r._start-r._delay),r=s;return _r(Yt,i,0),i},context:function(e,t){return e?new _x(e,t):$t},matchMedia:function(e){return new gS(e)},matchMediaRefresh:function(){return Eo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Kf()},addEventListener:function(e,t){var i=au[e]||(au[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=au[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:jb,wrapYoyo:Yb,distribute:J_,random:ex,snap:Q_,normalize:$b,getUnit:zn,clamp:Hb,splitColor:sx,toArray:Wi,selector:jf,mapRange:nx,pipe:Wb,unitize:Xb,interpolate:qb,shuffle:Z_},install:B_,effects:Ld,ticker:Si,updateRoot:li.updateRoot,plugins:yi,globalTimeline:Yt,core:{PropTween:di,globals:z_,Tween:ln,Timeline:li,Animation:Xl,getCache:So,_removeLinkedListItem:cd,reverting:function(){return Rn},context:function(e){return e&&$t&&($t.data.push(e),e._ctx=$t),$t},suppressOverwrites:function(e){return _p=e}}};ui("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Ou[n]=ln[n]});Si.add(li.updateRoot);oa=Ou.to({},{duration:0});var _S=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},xS=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=_S(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Od=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(wn(s)&&(l={},ui(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}xS(a,s)}}}},pi=Ou.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Rn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Od("roundProps",Yf),Od("modifiers"),Od("snap",Q_))||Ou;ln.version=li.version=pi.version="3.15.0";k_=1;vp()&&Ra();yt.Power0;yt.Power1;yt.Power2;yt.Power3;yt.Power4;yt.Linear;yt.Quad;yt.Cubic;yt.Quart;yt.Quint;yt.Strong;yt.Elastic;yt.Back;yt.SteppedEase;yt.Bounce;yt.Sine;yt.Expo;yt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var q0,Ts,ma,Dp,mo,K0,Lp,vS=function(){return typeof window<"u"},as={},io=180/Math.PI,ga=Math.PI/180,ko=Math.atan2,Z0=1e8,Ip=/([A-Z])/g,yS=/(left|right|width|margin|padding|x)/i,bS=/[\s,\(]\S/,xr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Zf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},SS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},MS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},wS=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ES=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},xx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},vx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},TS=function(e,t,i){return e.style[t]=i},AS=function(e,t,i){return e.style.setProperty(t,i)},CS=function(e,t,i){return e._gsap[t]=i},RS=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},PS=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},DS=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},qt="transform",fi=qt+"Origin",LS=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in as&&s){if(this.tfm=this.tfm||{},e!=="transform")e=xr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Wr(r,a)}):this.tfm[e]=o.x?o[e]:Wr(r,e),e===fi&&(this.tfm.zOrigin=o.zOrigin);else return xr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(qt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(fi,t,"")),e=qt}(s||t)&&this.props.push(e,t,s[e])},yx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},IS=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ip,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Lp(),(!s||!s.isStart)&&!i[qt]&&(yx(i),r.zOrigin&&i[fi]&&(i[fi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},bx=function(e,t){var i={target:e,props:[],revert:IS,save:LS};return e._gsap||pi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Sx,Jf=function(e,t){var i=Ts.createElementNS?Ts.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ts.createElement(e);return i&&i.style?i:Ts.createElement(e)},Ti=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Ip,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Pa(t)||t,1)||""},J0="O,Moz,ms,Ms,Webkit".split(","),Pa=function(e,t,i){var r=t||mo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(J0[o]+e in s););return o<0?null:(o===3?"ms":o>=0?J0[o]:"")+e},Qf=function(){vS()&&window.document&&(q0=window,Ts=q0.document,ma=Ts.documentElement,mo=Jf("div")||{style:{}},Jf("div"),qt=Pa(qt),fi=qt+"Origin",mo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Sx=!!Pa("perspective"),Lp=pi.core.reverting,Dp=1)},Q0=function(e){var t=e.ownerSVGElement,i=Jf("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),ma.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),ma.removeChild(i),s},em=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Mx=function(e){var t,i;try{t=e.getBBox()}catch{t=Q0(e),i=1}return t&&(t.width||t.height)||i||(t=Q0(e)),t&&!t.width&&!t.x&&!t.y?{x:+em(e,["x","cx","x1"])||0,y:+em(e,["y","cy","y1"])||0,width:0,height:0}:t},wx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Mx(e))},Os=function(e,t){if(t){var i=e.style,r;t in as&&t!==fi&&(t=qt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Ip,"-$1").toLowerCase())):i.removeAttribute(t)}},As=function(e,t,i,r,s,o){var a=new di(e._pt,t,i,0,1,o?vx:xx);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},tm={deg:1,rad:1,turn:1},US={grid:1,flex:1},ks=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=mo.style,l=yS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",h=r==="%",g,_,p,m;if(r===o||!s||tm[r]||tm[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),m=e.getCTM&&wx(e),(h||o==="%")&&(as[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],tn(h?s/g*d:s/100*g);if(a[l?"width":"height"]=d+(f?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ts||!_.appendChild)&&(_=Ts.body),p=_._gsap,p&&h&&p.width&&l&&p.time===Si.time&&!p.uncache)return tn(s/p.width*d);if(h&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+r,g=e[u],v?e.style[t]=v:Os(e,t)}else(h||o==="%")&&!US[Ti(_,"display")]&&(a.position=Ti(e,"position")),_===e&&(a.position="static"),_.appendChild(mo),g=mo[u],_.removeChild(mo),a.position="absolute";return l&&h&&(p=So(_),p.time=Si.time,p.width=_[u]),tn(f?g*s/d:g&&s?d/g*s:0)},Wr=function(e,t,i,r){var s;return Dp||Qf(),t in xr&&t!=="transform"&&(t=xr[t],~t.indexOf(",")&&(t=t.split(",")[0])),as[t]&&t!=="transform"?(s=jl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Bu(Ti(e,fi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ku[t]&&ku[t](e,t,i)||Ti(e,t)||H_(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?ks(e,t,s,i)+i:s},FS=function(e,t,i,r){if(!i||i==="none"){var s=Pa(t,e,1),o=s&&Ti(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Ti(e,"borderTopColor"))}var a=new di(this._pt,e.style,t,0,1,mx),l=0,c=0,u,d,f,h,g,_,p,m,v,M,x,R;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Ti(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=Ti(e,t)||r,_?e.style[t]=_:Os(e,t)),u=[i,r],ax(u),i=u[0],r=u[1],f=i.match(sa)||[],R=r.match(sa)||[],R.length){for(;d=sa.exec(r);)p=d[0],v=r.substring(l,d.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(h=parseFloat(_)||0,x=_.substr((h+"").length),p.charAt(1)==="="&&(p=pa(h,p)+x),m=parseFloat(p),M=p.substr((m+"").length),l=sa.lastIndex-M.length,M||(M=M||Ci.units[t]||x,l===r.length&&(r+=M,a.e+=M)),x!==M&&(h=ks(e,t,_,M)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:h,c:m-h,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?vx:xx;return O_.test(r)&&(a.e=0),this._pt=a,a},nm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},NS=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=nm[i]||i,t[1]=nm[r]||r,t.join(" ")},OS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],as[a]&&(l=1,a=a==="transformOrigin"?fi:qt),Os(i,a);l&&(Os(i,qt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",jl(i,1),o.uncache=1,yx(r)))}},ku={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new di(e._pt,t,i,0,0,OS);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},$l=[1,0,0,1,0,0],Ex={},Tx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},im=function(e){var t=Ti(e,qt);return Tx(t)?$l:t.substr(7).match(N_).map(tn)},Up=function(e,t){var i=e._gsap||So(e),r=e.style,s=im(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?$l:s):(s===$l&&!e.offsetParent&&e!==ma&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ma.appendChild(e)),s=im(e),l?r.display=l:Os(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ma.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},eh=function(e,t,i,r,s,o){var a=e._gsap,l=s||Up(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,h=l[0],g=l[1],_=l[2],p=l[3],m=l[4],v=l[5],M=t.split(" "),x=parseFloat(M[0])||0,R=parseFloat(M[1])||0,A,C,b,E;i?l!==$l&&(C=h*p-g*_)&&(b=x*(p/C)+R*(-_/C)+(_*v-p*m)/C,E=x*(-g/C)+R*(h/C)-(h*v-g*m)/C,x=b,R=E):(A=Mx(e),x=A.x+(~M[0].indexOf("%")?x/100*A.width:x),R=A.y+(~(M[1]||M[0]).indexOf("%")?R/100*A.height:R)),r||r!==!1&&a.smooth?(m=x-c,v=R-u,a.xOffset=d+(m*h+v*_)-m,a.yOffset=f+(m*g+v*p)-v):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=R,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[fi]="0px 0px",o&&(As(o,a,"xOrigin",c,x),As(o,a,"yOrigin",u,R),As(o,a,"xOffset",d,a.xOffset),As(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+R)},jl=function(e,t){var i=e._gsap||new cx(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ti(e,fi)||"0",u,d,f,h,g,_,p,m,v,M,x,R,A,C,b,E,F,U,L,V,k,G,X,B,q,j,N,le,me,ge,ve,Te;return u=d=f=_=p=m=v=M=x=0,h=g=1,i.svg=!!(e.getCTM&&wx(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[qt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[qt]!=="none"?l[qt]:"")),r.scale=r.rotate=r.translate="none"),C=Up(e,i.svg),i.svg&&(i.uncache?(q=e.getBBox(),c=i.xOrigin-q.x+"px "+(i.yOrigin-q.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),eh(e,B||c,!!B||i.originIsAbsolute,i.smooth!==!1,C)),R=i.xOrigin||0,A=i.yOrigin||0,C!==$l&&(U=C[0],L=C[1],V=C[2],k=C[3],u=G=C[4],d=X=C[5],C.length===6?(h=Math.sqrt(U*U+L*L),g=Math.sqrt(k*k+V*V),_=U||L?ko(L,U)*io:0,v=V||k?ko(V,k)*io+_:0,v&&(g*=Math.abs(Math.cos(v*ga))),i.svg&&(u-=R-(R*U+A*V),d-=A-(R*L+A*k))):(Te=C[6],ge=C[7],N=C[8],le=C[9],me=C[10],ve=C[11],u=C[12],d=C[13],f=C[14],b=ko(Te,me),p=b*io,b&&(E=Math.cos(-b),F=Math.sin(-b),B=G*E+N*F,q=X*E+le*F,j=Te*E+me*F,N=G*-F+N*E,le=X*-F+le*E,me=Te*-F+me*E,ve=ge*-F+ve*E,G=B,X=q,Te=j),b=ko(-V,me),m=b*io,b&&(E=Math.cos(-b),F=Math.sin(-b),B=U*E-N*F,q=L*E-le*F,j=V*E-me*F,ve=k*F+ve*E,U=B,L=q,V=j),b=ko(L,U),_=b*io,b&&(E=Math.cos(b),F=Math.sin(b),B=U*E+L*F,q=G*E+X*F,L=L*E-U*F,X=X*E-G*F,U=B,G=q),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),h=tn(Math.sqrt(U*U+L*L+V*V)),g=tn(Math.sqrt(X*X+Te*Te)),b=ko(G,X),v=Math.abs(b)>2e-4?b*io:0,x=ve?1/(ve<0?-ve:ve):0),i.svg&&(B=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Tx(Ti(e,qt)),B&&e.setAttribute("transform",B))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(h*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=tn(h),i.scaleY=tn(g),i.rotation=tn(_)+a,i.rotationX=tn(p)+a,i.rotationY=tn(m)+a,i.skewX=v+a,i.skewY=M+a,i.transformPerspective=x+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[fi]=Bu(c)),i.xOffset=i.yOffset=0,i.force3D=Ci.force3D,i.renderTransform=i.svg?BS:Sx?Ax:kS,i.uncache=0,i},Bu=function(e){return(e=e.split(" "))[0]+" "+e[1]},kd=function(e,t,i){var r=zn(t);return tn(parseFloat(t)+parseFloat(ks(e,"x",i+"px",r)))+r},kS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ax(e,t)},Ys="0deg",Wa="0px",qs=") ",Ax=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,d=i.rotationX,f=i.skewX,h=i.skewY,g=i.scaleX,_=i.scaleY,p=i.transformPerspective,m=i.force3D,v=i.target,M=i.zOrigin,x="",R=m==="auto"&&e&&e!==1||m===!0;if(M&&(d!==Ys||u!==Ys)){var A=parseFloat(u)*ga,C=Math.sin(A),b=Math.cos(A),E;A=parseFloat(d)*ga,E=Math.cos(A),o=kd(v,o,C*E*-M),a=kd(v,a,-Math.sin(A)*-M),l=kd(v,l,b*E*-M+M)}p!==Wa&&(x+="perspective("+p+qs),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(R||o!==Wa||a!==Wa||l!==Wa)&&(x+=l!==Wa||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+qs),c!==Ys&&(x+="rotate("+c+qs),u!==Ys&&(x+="rotateY("+u+qs),d!==Ys&&(x+="rotateX("+d+qs),(f!==Ys||h!==Ys)&&(x+="skew("+f+", "+h+qs),(g!==1||_!==1)&&(x+="scale("+g+", "+_+qs),v.style[qt]=x||"translate(0, 0)"},BS=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,d=i.scaleX,f=i.scaleY,h=i.target,g=i.xOrigin,_=i.yOrigin,p=i.xOffset,m=i.yOffset,v=i.forceCSS,M=parseFloat(o),x=parseFloat(a),R,A,C,b,E;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ga,c*=ga,R=Math.cos(l)*d,A=Math.sin(l)*d,C=Math.sin(l-c)*-f,b=Math.cos(l-c)*f,c&&(u*=ga,E=Math.tan(c-u),E=Math.sqrt(1+E*E),C*=E,b*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),R*=E,A*=E)),R=tn(R),A=tn(A),C=tn(C),b=tn(b)):(R=d,b=f,A=C=0),(M&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(M=ks(h,"x",o,"px"),x=ks(h,"y",a,"px")),(g||_||p||m)&&(M=tn(M+g-(g*R+_*C)+p),x=tn(x+_-(g*A+_*b)+m)),(r||s)&&(E=h.getBBox(),M=tn(M+r/100*E.width),x=tn(x+s/100*E.height)),E="matrix("+R+","+A+","+C+","+b+","+M+","+x+")",h.setAttribute("transform",E),v&&(h.style[qt]=E)},zS=function(e,t,i,r,s){var o=360,a=wn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?io:1),c=l-r,u=r+c+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*Z0)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*Z0)%o-~~(c/o)*o)),e._pt=f=new di(e._pt,t,i,r,c,SS),f.e=u,f.u="deg",e._props.push(i),f},rm=function(e,t){for(var i in t)e[i]=t[i];return e},VS=function(e,t,i){var r=rm({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,d,f,h,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[qt]=t,a=jl(i,1),Os(i,qt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[qt],o[qt]=t,a=jl(i,1),o[qt]=c);for(l in as)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(h=zn(c),g=zn(u),d=h!==g?ks(i,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new di(e._pt,a,l,d,f-d,Zf),e._pt.u=g||0,e._props.push(l));rm(a,r)};ui("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});ku[e>1?"border"+n:n]=function(a,l,c,u,d){var f,h;if(arguments.length<4)return f=o.map(function(g){return Wr(a,g,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},o.forEach(function(g,_){return h[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,h,d)}});var Cx={name:"css",register:Qf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,d,f,h,g,_,p,m,v,M,x,R,A,C,b,E;Dp||Qf(),this.styles=this.styles||bx(e),b=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(yi[_]&&ux(_,t,i,r,e,s)))){if(h=typeof u,g=ku[_],h==="function"&&(u=u.call(i,r,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Gl(u)),g)g(this,e,_,u,i)&&(C=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Ls.lastIndex=0,Ls.test(c)||(p=zn(c),m=zn(u),m?p!==m&&(c=ks(e,_,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),b.push(_,0,a[_]);else if(h!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],wn(c)&&~c.indexOf("random(")&&(c=Gl(c)),zn(c+"")||c==="auto"||(c+=Ci.units[_]||zn(Wr(e,_))||""),(c+"").charAt(1)==="="&&(c=Wr(e,_))):c=Wr(e,_),f=parseFloat(c),v=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),d=parseFloat(u),_ in xr&&(_==="autoAlpha"&&(f===1&&Wr(e,"visibility")==="hidden"&&d&&(f=0),b.push("visibility",0,a.visibility),As(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=xr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in as,M){if(this.styles.save(_),E=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=Ti(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var F=e.style.perspective;e.style.perspective=u,u=Ti(e,"perspective"),F?e.style.perspective=F:Os(e,"perspective")}d=parseFloat(u)}if(x||(R=e._gsap,R.renderTransform&&!t.parseTransform||jl(e,t.parseTransform),A=t.smoothOrigin!==!1&&R.smooth,x=this._pt=new di(this._pt,a,qt,0,1,R.renderTransform,R,0,-1),x.dep=1),_==="scale")this._pt=new di(this._pt,R,"scaleY",R.scaleY,(v?pa(R.scaleY,v+d):d)-R.scaleY||0,Zf),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){b.push(fi,0,a[fi]),u=NS(u),R.svg?eh(e,u,0,A,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==R.zOrigin&&As(this,R,"zOrigin",R.zOrigin,m),As(this,a,_,Bu(c),Bu(u)));continue}else if(_==="svgOrigin"){eh(e,u,1,A,0,this);continue}else if(_ in Ex){zS(this,R,_,f,v?pa(f,v+u):u);continue}else if(_==="smoothOrigin"){As(this,R,"smooth",R.smooth,u);continue}else if(_==="force3D"){R[_]=u;continue}else if(_==="transform"){VS(this,u,e);continue}}else _ in a||(_=Pa(_)||_);if(M||(d||d===0)&&(f||f===0)&&!bS.test(u)&&_ in a)p=(c+"").substr((f+"").length),d||(d=0),m=zn(u)||(_ in Ci.units?Ci.units[_]:p),p!==m&&(f=ks(e,_,c,m)),this._pt=new di(this._pt,M?R:a,_,f,(v?pa(f,v+d):d)-f,!M&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?ES:Zf),this._pt.u=m||0,M&&E!==u?(this._pt.b=c,this._pt.e=E,this._pt.r=wS):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=MS);else if(_ in a)FS.call(this,e,_,c,v?v+u:u);else if(_ in e)this.add(e,_,c||e[_],v?v+u:u,r,s);else if(_!=="parseTransform"){bp(_,u);continue}M||(_ in a?b.push(_,0,a[_]):typeof e[_]=="function"?b.push(_,2,e[_]()):b.push(_,1,c||e[_])),o.push(_)}}C&&gx(this)},render:function(e,t){if(t.tween._time||!Lp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Wr,aliases:xr,getSetter:function(e,t,i){var r=xr[t];return r&&r.indexOf(",")<0&&(t=r),t in as&&t!==fi&&(e._gsap.x||Wr(e,"x"))?i&&K0===i?t==="scale"?RS:CS:(K0=i||{})&&(t==="scale"?PS:DS):e.style&&!xp(e.style[t])?TS:~t.indexOf("-")?AS:Rp(e,t)},core:{_removeProperty:Os,_getMatrix:Up}};pi.utils.checkPrefix=Pa;pi.core.getStyleSaver=bx;(function(n,e,t,i){var r=ui(n+","+e+","+t,function(s){as[s]=1});ui(e,function(s){Ci.units[s]="deg",Ex[s]=1}),xr[r[13]]=n+","+e,ui(i,function(s){var o=s.split(":");xr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ui("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ci.units[n]="px"});pi.registerPlugin(Cx);var Ke=pi.registerPlugin(Cx)||pi;Ke.core.Tween;const Zr=De(!0),Rx=()=>{Zr.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},HS=()=>{const n=localStorage.getItem("theme");n==="light"?Zr.value=!1:Zr.value=!0,Rx()};Ai(Zr,()=>{Rx()});const GS=()=>{Zr.value=!Zr.value,localStorage.setItem("theme",Zr.value?"dark":"light")};HS();function Fp(){return{isDark:Zr,toggleTheme:GS}}const _a=De(!1),WS=()=>{localStorage.getItem("mouseTrail")==="enabled"?_a.value=!0:_a.value=!1},XS=()=>{_a.value=!_a.value,localStorage.setItem("mouseTrail",_a.value?"enabled":"disabled")};WS();function Px(){return{isMouseTrailEnabled:_a,toggleMouseTrail:XS}}function $S({elements:n,interval:e=150}){const{isDark:t}=Fp(),i=De({});n.forEach(({key:l})=>{i.value[l]=!1});let r=null;const s=({r:l,g:c,b:u})=>(.299*l+.587*c+.114*u)/255,o=l=>{var h;if(!l||!((h=window.__blobSampler)!=null&&h.sampleScreenPixel))return null;const c=l.getBoundingClientRect();if(c.width===0||c.height===0)return null;const u=[{x:c.left+c.width*.5,y:c.top+c.height*.5},{x:c.left+c.width*.3,y:c.top+c.height*.3},{x:c.left+c.width*.7,y:c.top+c.height*.3},{x:c.left+c.width*.3,y:c.top+c.height*.7},{x:c.left+c.width*.7,y:c.top+c.height*.7}];let d=0,f=0;for(const g of u){const _=window.__blobSampler.sampleScreenPixel(g.x,g.y);_&&_.a>0&&(d+=s(_),f++)}return f===0?null:d/f},a=()=>{if(t.value)return;const l={};let c=!1;for(const{key:u,el:d}of n){const f=o(d.value);if(f===null)continue;const h=f<.5;i.value[u]!==h&&(l[u]=h,c=!0)}c&&(i.value={...i.value,...l})};return Pn(()=>{setTimeout(a,300),r=setInterval(a,e)}),$n(()=>{r&&clearInterval(r)}),Ai(t,()=>{setTimeout(a,100)}),{isDarkBackground:i}}const jS={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},YS={class:"flex items-center justify-between h-16"},qS=["href","onClick"],KS=["aria-expanded"],ZS={key:0,class:"settings-dropdown absolute right-0 mt-2 w-64 rounded-xl bg-dark-800 border border-dark-700 shadow-2xl light:bg-white light:border-secondary-200 light:shadow-secondary-200/50 overflow-hidden"},JS={class:"px-4 py-3 flex items-center justify-between hover:bg-dark-700/50 light:hover:bg-secondary-50 transition-colors duration-200"},QS={class:"flex items-center space-x-3"},eM={key:0,class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},tM={key:1,class:"w-4 h-4 text-primary-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},nM=["aria-label"],iM={class:"px-4 py-3 flex items-center justify-between hover:bg-dark-700/50 light:hover:bg-secondary-50 transition-colors duration-200"},rM={class:"flex items-center space-x-3"},sM={class:"text-sm text-secondary-300 light:text-secondary-600"},oM=["aria-label"],aM={class:"px-4 py-3 border-t border-dark-700 light:border-secondary-200"},lM={class:"grid grid-cols-3 gap-2"},cM=["onClick","aria-label","aria-pressed"],uM={class:"flex space-x-0.5"},dM={key:0,class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},fM={key:1,class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},hM={class:"px-4 py-3 space-y-2"},pM=["href","onClick"],mM={class:"pt-2 border-t border-dark-700 light:border-secondary-200"},gM={class:"flex items-center justify-between py-2"},_M={class:"flex items-center space-x-3"},xM={key:0,class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},vM={key:1,class:"w-4 h-4 text-primary-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},yM=["aria-label"],bM={class:"flex items-center justify-between py-2"},SM={class:"flex items-center space-x-3"},MM={class:"text-sm text-secondary-300 light:text-secondary-600"},wM=["aria-label"],EM={class:"py-2"},TM={class:"grid grid-cols-3 gap-2"},AM=["onClick","aria-label","aria-pressed"],CM={class:"flex space-x-0.5"},RM={__name:"NavBar",setup(n){const e=De(!1),t=De(!1),i=De(!1),r=De(null),s=De(null),o=De(null),a=De(null),l=De(!1);typeof window<"u"&&(l.value=window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window);const{isDark:c,toggleTheme:u}=Fp(),{isMouseTrailEnabled:d,toggleMouseTrail:f}=Px(),{colorPalettes:h,selectedPalette:g,setPalette:_}=Sb(),{isDarkBackground:p}=$S({elements:[{key:"nav",el:a}]}),m=[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Tech Stack",href:"#tech-stack"},{label:"Projects",href:"#projects"}],v=()=>{e.value=window.scrollY>50},M=R=>{R.preventDefault(),t.value=!1,window.scrollTo({top:0,behavior:"smooth"})},x=R=>{o.value&&!o.value.contains(R.target)&&(i.value=!1)};return Pn(()=>{window.addEventListener("scroll",v),document.addEventListener("click",x),Ke.fromTo(r.value,{y:-80,opacity:0},{y:0,opacity:1,duration:.8,ease:"power3.out",delay:.2,clearProps:"all"})}),$n(()=>{window.removeEventListener("scroll",v),document.removeEventListener("click",x)}),Ai(t,async R=>{await Rr(),s.value&&(R?(Ke.fromTo(s.value,{height:0,opacity:0},{height:"auto",opacity:1,duration:.4,ease:"power2.out"}),Ke.from(s.value.querySelectorAll("a"),{x:-20,opacity:0,stagger:.08,duration:.3,ease:"power2.out"})):Ke.to(s.value,{height:0,opacity:0,duration:.3,ease:"power2.in"}))}),Ai(i,async R=>{var C;await Rr();const A=(C=o.value)==null?void 0:C.querySelector(".settings-dropdown");A&&(R?Ke.fromTo(A,{opacity:0,y:-10,scale:.95},{opacity:1,y:0,scale:1,duration:.25,ease:"power2.out"}):Ke.to(A,{opacity:0,y:-10,scale:.95,duration:.2,ease:"power2.in"}))}),(R,A)=>(de(),he("nav",{ref_key:"navRef",ref:r,class:st(["fixed top-0 left-0 right-0 z-50 transition-colors duration-300",e.value?"bg-dark-900/95 backdrop-blur-md shadow-lg light:bg-white/95 light:shadow-secondary-200":"bg-transparent"])},[y("div",jS,[y("div",YS,[y("a",{href:"#home",onClick:M,class:"text-xl font-bold text-white light:text-secondary-900 group transition-colors duration-300"},[...A[7]||(A[7]=[y("span",{class:"text-primary-500"},"<",-1),Hi("KPC",-1),y("span",{class:"text-primary-500"},"/>",-1)])]),y("div",{ref_key:"navLinksRef",ref:a,class:"hidden md:flex items-center space-x-8"},[(de(),he(je,null,rt(m,C=>y("a",{key:C.href,href:C.href,onClick:b=>C.href==="#home"?M(b):null,class:"text-secondary-300 whitespace-nowrap hover:text-primary-400 light:text-black transition-colors duration-200 text-sm font-medium relative group"},[Hi(ye(C.label)+" ",1),A[8]||(A[8]=y("span",{class:"absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"},null,-1))],8,qS)),64)),A[16]||(A[16]=y("a",{href:"#contact",class:"bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"}," Hire Me ",-1)),y("div",{ref_key:"settingsRef",ref:o,class:"relative"},[y("button",{onClick:A[0]||(A[0]=po(C=>i.value=!i.value,["stop"])),class:"p-2 rounded-lg light:text-black text-secondary-300 hover:text-primary-400 hover:bg-secondary-800/50 light:hover:text-primary-600 light:hover:bg-secondary-100 transition-all duration-300 focus:outline-none","aria-label":"Settings","aria-expanded":i.value},[(de(),he("svg",{class:st(["w-5 h-5",{"rotate-90 transition-transform duration-300":i.value}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...A[9]||(A[9]=[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"},null,-1),y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"},null,-1)])],2))],8,KS),i.value?(de(),he("div",ZS,[A[15]||(A[15]=y("div",{class:"px-4 py-3 border-b border-dark-700 light:border-secondary-200"},[y("p",{class:"text-sm font-semibold text-white light:text-secondary-900"},"Settings")],-1)),y("div",JS,[y("div",QS,[xt(c)?(de(),he("svg",eM,[...A[10]||(A[10]=[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1)])])):(de(),he("svg",tM,[...A[11]||(A[11]=[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)])])),A[12]||(A[12]=y("span",{class:"text-sm text-secondary-300 light:text-secondary-600"},"Night Mode",-1))]),y("button",{onClick:A[1]||(A[1]=(...C)=>xt(u)&&xt(u)(...C)),class:st(["relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none",xt(c)?"bg-primary-500":"bg-secondary-300 light:bg-secondary-300"]),"aria-label":xt(c)?"Disable night mode":"Enable night mode"},[y("span",{class:st(["absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300",xt(c)?"left-5":"left-0.5"])},null,2)],10,nM)]),y("div",iM,[y("div",rM,[A[13]||(A[13]=y("svg",{class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"})],-1)),y("span",sM,ye(l.value?"Swipe Animation":"Mouse Animation"),1)]),y("button",{onClick:A[2]||(A[2]=(...C)=>xt(f)&&xt(f)(...C)),class:st(["relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none",xt(d)?"bg-primary-500":"bg-secondary-300 light:bg-secondary-300"]),"aria-label":xt(d)?"Disable mouse animation":"Enable mouse animation"},[y("span",{class:st(["absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300",xt(d)?"left-5":"left-0.5"])},null,2)],10,oM)]),y("div",aM,[A[14]||(A[14]=y("div",{class:"flex items-center space-x-3 mb-2"},[y("svg",{class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"})]),y("span",{class:"text-sm text-secondary-300 light:text-secondary-600"},"Color Palette")],-1)),y("div",lM,[(de(!0),he(je,null,rt(xt(h),(C,b)=>(de(),he("button",{key:b,onClick:E=>xt(_)(b),class:st(["flex flex-col items-center gap-1 p-2 rounded-lg border transition-all duration-200 focus:outline-none",xt(g)===b?"border-primary-500 bg-primary-500/10 light:bg-primary-50":"border-dark-700 hover:border-primary-400 light:border-secondary-200 light:hover:border-primary-400"]),"aria-label":`Use ${C.name} color palette`,"aria-pressed":xt(g)===b},[y("span",uM,[y("span",{class:"w-3 h-3 rounded-full",style:Sn({backgroundColor:C.primary[500]})},null,4),y("span",{class:"w-3 h-3 rounded-full",style:Sn({backgroundColor:C.accent[500]})},null,4),y("span",{class:"w-3 h-3 rounded-full",style:Sn({backgroundColor:C.secondary[500]})},null,4)]),y("span",{class:st(["text-[10px] font-medium",xt(g)===b?"text-primary-400 light:text-primary-600":"text-secondary-400 light:text-secondary-500"])},ye(C.name),3)],10,cM))),128))])])])):Bn("",!0)],512)],512),y("button",{onClick:A[3]||(A[3]=C=>t.value=!t.value),class:st(["md:hidden text-secondary-300 hover:text-white light:text-secondary-600 light:hover:text-secondary-900 focus:outline-none transition-colors duration-300",!e.value&&xt(p).nav?"light:text-white light:hover:text-secondary-900":"light:text-secondary-600 light:hover:text-secondary-900"]),"aria-label":"Toggle menu"},[t.value?(de(),he("svg",fM,[...A[18]||(A[18]=[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)])])):(de(),he("svg",dM,[...A[17]||(A[17]=[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)])]))],2)])]),t.value?(de(),he("div",{key:0,ref_key:"mobileMenuRef",ref:s,class:"md:hidden bg-dark-800 border-t border-dark-700 light:bg-white light:border-secondary-200 overflow-hidden"},[y("div",hM,[(de(),he(je,null,rt(m,C=>y("a",{key:C.href,href:C.href,onClick:b=>C.href==="#home"?M(b):t.value=!1,class:"block text-secondary-300 hover:text-primary-400 light:text-secondary-600 light:hover:text-primary-600 transition-colors duration-200 py-2 text-sm font-medium"},ye(C.label),9,pM)),64)),y("a",{href:"#contact",onClick:A[4]||(A[4]=C=>t.value=!1),class:"block text-secondary-300 hover:text-primary-400 light:text-secondary-600 light:hover:text-primary-600 transition-colors duration-200 py-2 text-sm font-medium"}," Hire Me "),y("div",mM,[A[24]||(A[24]=y("p",{class:"text-xs font-semibold text-secondary-500 light:text-secondary-400 uppercase tracking-wider mb-2"},"Settings",-1)),y("div",gM,[y("div",_M,[xt(c)?(de(),he("svg",xM,[...A[19]||(A[19]=[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1)])])):(de(),he("svg",vM,[...A[20]||(A[20]=[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)])])),A[21]||(A[21]=y("span",{class:"text-sm text-secondary-300 light:text-secondary-600"},"Night Mode",-1))]),y("button",{onClick:A[5]||(A[5]=(...C)=>xt(u)&&xt(u)(...C)),class:st(["relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none",xt(c)?"bg-primary-500":"bg-secondary-300 light:bg-secondary-300"]),"aria-label":xt(c)?"Disable night mode":"Enable night mode"},[y("span",{class:st(["absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300",xt(c)?"left-5":"left-0.5"])},null,2)],10,yM)]),y("div",bM,[y("div",SM,[A[22]||(A[22]=y("svg",{class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"})],-1)),y("span",MM,ye(l.value?"Swipe Animation":"Mouse Animation"),1)]),y("button",{onClick:A[6]||(A[6]=(...C)=>xt(f)&&xt(f)(...C)),class:st(["relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none",xt(d)?"bg-primary-500":"bg-secondary-300 light:bg-secondary-300"]),"aria-label":xt(d)?"Disable mouse animation":"Enable mouse animation"},[y("span",{class:st(["absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300",xt(d)?"left-5":"left-0.5"])},null,2)],10,wM)]),y("div",EM,[A[23]||(A[23]=y("div",{class:"flex items-center space-x-3 mb-2"},[y("svg",{class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"})]),y("span",{class:"text-sm text-secondary-300 light:text-secondary-600"},"Color Palette")],-1)),y("div",TM,[(de(!0),he(je,null,rt(xt(h),(C,b)=>(de(),he("button",{key:b,onClick:E=>xt(_)(b),class:st(["flex flex-col items-center gap-1 p-2 rounded-lg border transition-all duration-200 focus:outline-none",xt(g)===b?"border-primary-500 bg-primary-500/10 light:bg-primary-50":"border-dark-700 hover:border-primary-400 light:border-secondary-200 light:hover:border-primary-400"]),"aria-label":`Use ${C.name} color palette`,"aria-pressed":xt(g)===b},[y("span",CM,[y("span",{class:"w-3 h-3 rounded-full",style:Sn({backgroundColor:C.primary[500]})},null,4),y("span",{class:"w-3 h-3 rounded-full",style:Sn({backgroundColor:C.accent[500]})},null,4),y("span",{class:"w-3 h-3 rounded-full",style:Sn({backgroundColor:C.secondary[500]})},null,4)]),y("span",{class:st(["text-[10px] font-medium",xt(g)===b?"text-primary-400 light:text-primary-600":"text-secondary-400 light:text-secondary-500"])},ye(C.name),3)],10,AM))),128))])])])])],512)):Bn("",!0)],2))}};function PM(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function DM(n,e,t){return e&&PM(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var An,lu,Mi,Cs,Rs,xa,Dx,ro,va,Lx,qr,Ji,Ix,Ux=function(){return An||typeof window<"u"&&(An=window.gsap)&&An.registerPlugin&&An},Fx=1,aa=[],_t=[],wr=[],Ml=Date.now,th=function(e,t){return t},LM=function(){var e=va.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,_t),r.push.apply(r,wr),_t=i,wr=r,th=function(o,a){return t[o](a)}},Is=function(e,t){return~wr.indexOf(e)&&wr[wr.indexOf(e)+1][t]},wl=function(e){return!!~Lx.indexOf(e)},qn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},jn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},xc="scrollLeft",vc="scrollTop",nh=function(){return qr&&qr.isPressed||_t.cache++},zu=function(e,t){var i=function r(s){if(s||s===0){Fx&&(Mi.history.scrollRestoration="manual");var o=qr&&qr.isPressed;s=r.v=Math.round(s)||(qr&&qr.iOS?1:0),e(s),r.cacheID=_t.cache,o&&th("ss",s)}else(t||_t.cache!==r.cacheID||th("ref"))&&(r.cacheID=_t.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},ii={s:xc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:zu(function(n){return arguments.length?Mi.scrollTo(n,pn.sc()):Mi.pageXOffset||Cs[xc]||Rs[xc]||xa[xc]||0})},pn={s:vc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ii,sc:zu(function(n){return arguments.length?Mi.scrollTo(ii.sc(),n):Mi.pageYOffset||Cs[vc]||Rs[vc]||xa[vc]||0})},ai=function(e,t){return(t&&t._ctx&&t._ctx.selector||An.utils.toArray)(e)[0]||(typeof e=="string"&&An.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},IM=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Bs=function(e,t){var i=t.s,r=t.sc;wl(e)&&(e=Cs.scrollingElement||Rs);var s=_t.indexOf(e),o=r===pn.sc?1:2;!~s&&(s=_t.push(e)-1),_t[s+o]||qn(e,"scroll",nh);var a=_t[s+o],l=a||(_t[s+o]=zu(Is(e,i),!0)||(wl(e)?r:zu(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=An.getProperty(e,"scrollBehavior")==="smooth"),l},ih=function(e,t,i){var r=e,s=e,o=Ml(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var p=Ml();_||p-o>l?(s=r,r=g,a=o,o=p):i?r+=g:r=s+(g-s)/(p-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},f=function(g){var _=a,p=s,m=Ml();return(g||g===0)&&g!==r&&u(g),o===a||m-a>c?0:(r+(i?p:-p))/((i?m:o)-_)*1e3};return{update:u,reset:d,getVelocity:f}},Xa=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},sm=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},Nx=function(){va=An.core.globals().ScrollTrigger,va&&va.core&&LM()},Ox=function(e){return An=e||Ux(),!lu&&An&&typeof document<"u"&&document.body&&(Mi=window,Cs=document,Rs=Cs.documentElement,xa=Cs.body,Lx=[Mi,Cs,Rs,xa],An.utils.clamp,Ix=An.core.context||function(){},ro="onpointerenter"in xa?"pointer":"mouse",Dx=rn.isTouch=Mi.matchMedia&&Mi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Mi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ji=rn.eventTypes=("ontouchstart"in Rs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Rs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Fx=0},500),lu=1),va||Nx(),lu};ii.op=pn;_t.cache=0;var rn=(function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){lu||Ox(An)||console.warn("Please gsap.registerPlugin(Observer)"),va||Nx();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,d=i.onStop,f=i.onStopDelay,h=i.ignore,g=i.wheelSpeed,_=i.event,p=i.onDragStart,m=i.onDragEnd,v=i.onDrag,M=i.onPress,x=i.onRelease,R=i.onRight,A=i.onLeft,C=i.onUp,b=i.onDown,E=i.onChangeX,F=i.onChangeY,U=i.onChange,L=i.onToggleX,V=i.onToggleY,k=i.onHover,G=i.onHoverEnd,X=i.onMove,B=i.ignoreCheck,q=i.isNormalizer,j=i.onGestureStart,N=i.onGestureEnd,le=i.onWheel,me=i.onEnable,ge=i.onDisable,ve=i.onClick,Te=i.scrollSpeed,J=i.capture,ue=i.allowClicks,oe=i.lockAxis,Re=i.onLockAxis;this.target=a=ai(a)||Rs,this.vars=i,h&&(h=An.utils.toArray(h)),r=r||1e-9,s=s||0,g=g||1,Te=Te||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Mi.getComputedStyle(xa).lineHeight)||22);var Ae,ae,w,T,H,ee,Y,O=this,I=0,_e=0,fe=i.passive||!u&&i.passive!==!1,ne=Bs(a,ii),pe=Bs(a,pn),P=ne(),S=pe(),z=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ji[0]==="pointerdown",Z=wl(a),Q=a.ownerDocument||Cs,K=[0,0,0],Me=[0,0,0],xe=0,He=function(){return xe=Ml()},Le=function(Ye,ut){return(O.event=Ye)&&h&&IM(Ye.target,h)||ut&&z&&Ye.pointerType!=="touch"||B&&B(Ye,ut)},be=function(){O._vx.reset(),O._vy.reset(),ae.pause(),d&&d(O)},we=function(){var Ye=O.deltaX=sm(K),ut=O.deltaY=sm(Me),Be=Math.abs(Ye)>=r,nt=Math.abs(ut)>=r;U&&(Be||nt)&&U(O,Ye,ut,K,Me),Be&&(R&&O.deltaX>0&&R(O),A&&O.deltaX<0&&A(O),E&&E(O),L&&O.deltaX<0!=I<0&&L(O),I=O.deltaX,K[0]=K[1]=K[2]=0),nt&&(b&&O.deltaY>0&&b(O),C&&O.deltaY<0&&C(O),F&&F(O),V&&O.deltaY<0!=_e<0&&V(O),_e=O.deltaY,Me[0]=Me[1]=Me[2]=0),(T||w)&&(X&&X(O),w&&(p&&w===1&&p(O),v&&v(O),w=0),T=!1),ee&&!(ee=!1)&&Re&&Re(O),H&&(le(O),H=!1),Ae=0},Pe=function(Ye,ut,Be){K[Be]+=Ye,Me[Be]+=ut,O._vx.update(Ye),O._vy.update(ut),c?Ae||(Ae=requestAnimationFrame(we)):we()},Ne=function(Ye,ut){oe&&!Y&&(O.axis=Y=Math.abs(Ye)>Math.abs(ut)?"x":"y",ee=!0),Y!=="y"&&(K[2]+=Ye,O._vx.update(Ye,!0)),Y!=="x"&&(Me[2]+=ut,O._vy.update(ut,!0)),c?Ae||(Ae=requestAnimationFrame(we)):we()},Ie=function(Ye){if(!Le(Ye,1)){Ye=Xa(Ye,u);var ut=Ye.clientX,Be=Ye.clientY,nt=ut-O.x,Qe=Be-O.y,it=O.isDragging;O.x=ut,O.y=Be,(it||(nt||Qe)&&(Math.abs(O.startX-ut)>=s||Math.abs(O.startY-Be)>=s))&&(w||(w=it?2:1),it||(O.isDragging=!0),Ne(nt,Qe))}},et=O.onPress=function(Ve){Le(Ve,1)||Ve&&Ve.button||(O.axis=Y=null,ae.pause(),O.isPressed=!0,Ve=Xa(Ve),I=_e=0,O.startX=O.x=Ve.clientX,O.startY=O.y=Ve.clientY,O._vx.reset(),O._vy.reset(),qn(q?a:Q,Ji[1],Ie,fe,!0),O.deltaX=O.deltaY=0,M&&M(O))},W=O.onRelease=function(Ve){if(!Le(Ve,1)){jn(q?a:Q,Ji[1],Ie,!0);var Ye=!isNaN(O.y-O.startY),ut=O.isDragging,Be=ut&&(Math.abs(O.x-O.startX)>3||Math.abs(O.y-O.startY)>3),nt=Xa(Ve);!Be&&Ye&&(O._vx.reset(),O._vy.reset(),u&&ue&&An.delayedCall(.08,function(){if(Ml()-xe>300&&!Ve.defaultPrevented){if(Ve.target.click)Ve.target.click();else if(Q.createEvent){var Qe=Q.createEvent("MouseEvents");Qe.initMouseEvent("click",!0,!0,Mi,1,nt.screenX,nt.screenY,nt.clientX,nt.clientY,!1,!1,!1,!1,0,null),Ve.target.dispatchEvent(Qe)}}})),O.isDragging=O.isGesturing=O.isPressed=!1,d&&ut&&!q&&ae.restart(!0),w&&we(),m&&ut&&m(O),x&&x(O,Be)}},Ce=function(Ye){return Ye.touches&&Ye.touches.length>1&&(O.isGesturing=!0)&&j(Ye,O.isDragging)},Ee=function(){return(O.isGesturing=!1)||N(O)},Oe=function(Ye){if(!Le(Ye)){var ut=ne(),Be=pe();Pe((ut-P)*Te,(Be-S)*Te,1),P=ut,S=Be,d&&ae.restart(!0)}},Se=function(Ye){if(!Le(Ye)){Ye=Xa(Ye,u),le&&(H=!0);var ut=(Ye.deltaMode===1?l:Ye.deltaMode===2?Mi.innerHeight:1)*g;Pe(Ye.deltaX*ut,Ye.deltaY*ut,0),d&&!q&&ae.restart(!0)}},ce=function(Ye){if(!Le(Ye)){var ut=Ye.clientX,Be=Ye.clientY,nt=ut-O.x,Qe=Be-O.y;O.x=ut,O.y=Be,T=!0,d&&ae.restart(!0),(nt||Qe)&&Ne(nt,Qe)}},Ge=function(Ye){O.event=Ye,k(O)},Je=function(Ye){O.event=Ye,G(O)},Mt=function(Ye){return Le(Ye)||Xa(Ye,u)&&ve(O)};ae=O._dc=An.delayedCall(f||.25,be).pause(),O.deltaX=O.deltaY=0,O._vx=ih(0,50,!0),O._vy=ih(0,50,!0),O.scrollX=ne,O.scrollY=pe,O.isDragging=O.isGesturing=O.isPressed=!1,Ix(this),O.enable=function(Ve){return O.isEnabled||(qn(Z?Q:a,"scroll",nh),o.indexOf("scroll")>=0&&qn(Z?Q:a,"scroll",Oe,fe,J),o.indexOf("wheel")>=0&&qn(a,"wheel",Se,fe,J),(o.indexOf("touch")>=0&&Dx||o.indexOf("pointer")>=0)&&(qn(a,Ji[0],et,fe,J),qn(Q,Ji[2],W),qn(Q,Ji[3],W),ue&&qn(a,"click",He,!0,!0),ve&&qn(a,"click",Mt),j&&qn(Q,"gesturestart",Ce),N&&qn(Q,"gestureend",Ee),k&&qn(a,ro+"enter",Ge),G&&qn(a,ro+"leave",Je),X&&qn(a,ro+"move",ce)),O.isEnabled=!0,O.isDragging=O.isGesturing=O.isPressed=T=w=!1,O._vx.reset(),O._vy.reset(),P=ne(),S=pe(),Ve&&Ve.type&&et(Ve),me&&me(O)),O},O.disable=function(){O.isEnabled&&(aa.filter(function(Ve){return Ve!==O&&wl(Ve.target)}).length||jn(Z?Q:a,"scroll",nh),O.isPressed&&(O._vx.reset(),O._vy.reset(),jn(q?a:Q,Ji[1],Ie,!0)),jn(Z?Q:a,"scroll",Oe,J),jn(a,"wheel",Se,J),jn(a,Ji[0],et,J),jn(Q,Ji[2],W),jn(Q,Ji[3],W),jn(a,"click",He,!0),jn(a,"click",Mt),jn(Q,"gesturestart",Ce),jn(Q,"gestureend",Ee),jn(a,ro+"enter",Ge),jn(a,ro+"leave",Je),jn(a,ro+"move",ce),O.isEnabled=O.isPressed=O.isDragging=!1,ge&&ge(O))},O.kill=O.revert=function(){O.disable();var Ve=aa.indexOf(O);Ve>=0&&aa.splice(Ve,1),qr===O&&(qr=0)},aa.push(O),q&&wl(a)&&(qr=O),O.enable(_)},DM(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n})();rn.version="3.15.0";rn.create=function(n){return new rn(n)};rn.register=Ox;rn.getAll=function(){return aa.slice()};rn.getById=function(n){return aa.filter(function(e){return e.vars.id===n})[0]};Ux()&&An.registerPlugin(rn);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var $e,ia,gt,It,bi,Rt,Np,Vu,Yl,El,ol,yc,Nn,fd,rh,Jn,om,am,ra,kx,Bd,Bx,Zn,sh,zx,Vx,Ss,oh,Op,ya,kp,Tl,ah,zd,bc=1,On=Date.now,Vd=On(),$i=0,al=0,lm=function(e,t,i){var r=vi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},cm=function(e,t){return t&&(!vi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},UM=function n(){return al&&requestAnimationFrame(n)},um=function(){return fd=1},dm=function(){return fd=0},fr=function(e){return e},ll=function(e){return Math.round(e*1e5)/1e5||0},Hx=function(){return typeof window<"u"},Gx=function(){return $e||Hx()&&($e=window.gsap)&&$e.registerPlugin&&$e},Ro=function(e){return!!~Np.indexOf(e)},Wx=function(e){return(e==="Height"?kp:gt["inner"+e])||bi["client"+e]||Rt["client"+e]},Xx=function(e){return Is(e,"getBoundingClientRect")||(Ro(e)?function(){return hu.width=gt.innerWidth,hu.height=kp,hu}:function(){return jr(e)})},FM=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Is(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?Wx(s):e["client"+s])||0}},NM=function(e,t){return!t||~wr.indexOf(e)?Xx(e):function(){return hu}},vr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Is(e,i))?o()-Xx(e)()[s]:Ro(e)?(bi[i]||Rt[i])-Wx(r):e[i]-e["offset"+r])},Sc=function(e,t){for(var i=0;i<ra.length;i+=3)(!t||~t.indexOf(ra[i+1]))&&e(ra[i],ra[i+1],ra[i+2])},vi=function(e){return typeof e=="string"},Vn=function(e){return typeof e=="function"},cl=function(e){return typeof e=="number"},so=function(e){return typeof e=="object"},$a=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Bo=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},zo=Math.abs,$x="left",jx="top",Bp="right",zp="bottom",To="width",Ao="height",Al="Right",Cl="Left",Rl="Top",Pl="Bottom",on="padding",ki="margin",Da="Width",Vp="Height",hn="px",Bi=function(e){return gt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},OM=function(e){var t=Bi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},fm=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},jr=function(e,t){var i=t&&Bi(e)[rh]!=="matrix(1, 0, 0, 1, 0, 0)"&&$e.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},Hu=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},Yx=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},kM=function(e){return function(t){return $e.utils.snap(Yx(e),t)}},Hp=function(e){var t=$e.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},BM=function(e){return function(t,i){return Hp(Yx(e))(t,i.direction)}},Mc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},bn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},yn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},wc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},hm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ec={toggleActions:"play",anticipatePin:0},Gu={top:0,left:0,center:.5,bottom:1,right:1},cu=function(e,t){if(vi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in Gu?Gu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Tc=function(e,t,i,r,s,o,a,l){var c=s.startColor,u=s.endColor,d=s.fontSize,f=s.indent,h=s.fontWeight,g=It.createElement("div"),_=Ro(i)||Is(i,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?Rt:i.tagName==="IFRAME"?i.contentDocument.body:i,v=e.indexOf("start")!==-1,M=v?c:u,x="border-color:"+M+";font-size:"+d+";color:"+M+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(x+=(r===pn?Bp:zp)+":"+(o+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=x,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+r.op.d2],uu(g,0,r,v),g},uu=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+Da]=1,s["border"+a+Da]=0,s[i.p]=t+"px",$e.set(e,s)},mt=[],lh={},ql,pm=function(){return On()-$i>34&&(ql||(ql=requestAnimationFrame(Jr)))},Vo=function(){(!Zn||!Zn.isPressed||Zn.startX>Rt.clientWidth)&&(_t.cache++,Zn?ql||(ql=requestAnimationFrame(Jr)):Jr(),$i||Do("scrollStart"),$i=On())},Hd=function(){Vx=gt.innerWidth,zx=gt.innerHeight},ul=function(e){_t.cache++,(e===!0||!Nn&&!Bx&&!It.fullscreenElement&&!It.webkitFullscreenElement&&(!sh||Vx!==gt.innerWidth||Math.abs(gt.innerHeight-zx)>gt.innerHeight*.25))&&Vu.restart(!0)},Po={},zM=[],qx=function n(){return yn(ft,"scrollEnd",n)||go(!0)},Do=function(e){return Po[e]&&Po[e].map(function(t){return t()})||zM},xi=[],Kx=function(e){for(var t=0;t<xi.length;t+=5)(!e||xi[t+4]&&xi[t+4].query===e)&&(xi[t].style.cssText=xi[t+1],xi[t].getBBox&&xi[t].setAttribute("transform",xi[t+2]||""),xi[t+3].uncache=1)},Zx=function(){return _t.forEach(function(e){return Vn(e)&&++e.cacheID&&(e.rec=e())})},Gp=function(e,t){var i;for(Jn=0;Jn<mt.length;Jn++)i=mt[Jn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Tl=!0,t&&Kx(t),t||Do("revert")},Jx=function(e,t){_t.cache++,(t||!Qn)&&_t.forEach(function(i){return Vn(i)&&i.cacheID++&&(i.rec=0)}),vi(e)&&(gt.history.scrollRestoration=Op=e)},Qn,Co=0,mm,VM=function(){if(mm!==Co){var e=mm=Co;requestAnimationFrame(function(){return e===Co&&go(!0)})}},Qx=function(){Rt.appendChild(ya),kp=!Zn&&ya.offsetHeight||gt.innerHeight,Rt.removeChild(ya)},gm=function(e){return Yl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},go=function(e,t){if(bi=It.documentElement,Rt=It.body,Np=[gt,It,bi,Rt],$i&&!e&&!Tl){bn(ft,"scrollEnd",qx);return}Qx(),Qn=ft.isRefreshing=!0,Tl||Zx();var i=Do("refreshInit");kx&&ft.sort(),t||Gp(),_t.forEach(function(r){Vn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),mt.slice(0).forEach(function(r){return r.refresh()}),Tl=!1,mt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),ah=1,gm(!0),mt.forEach(function(r){var s=vr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),gm(!1),ah=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),_t.forEach(function(r){Vn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Jx(Op,1),Vu.pause(),Co++,Qn=2,Jr(2),mt.forEach(function(r){return Vn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Qn=ft.isRefreshing=!1,Do("refresh")},ch=0,du=1,Dl,Jr=function(e){if(e===2||!Qn&&!Tl){ft.isUpdating=!0,Dl&&Dl.update(0);var t=mt.length,i=On(),r=i-Vd>=50,s=t&&mt[0].scroll();if(du=ch>s?-1:1,Qn||(ch=s),r&&($i&&!fd&&i-$i>200&&($i=0,Do("scrollEnd")),ol=Vd,Vd=i),du<0){for(Jn=t;Jn-- >0;)mt[Jn]&&mt[Jn].update(0,r);du=1}else for(Jn=0;Jn<t;Jn++)mt[Jn]&&mt[Jn].update(0,r);ft.isUpdating=!1}ql=0},uh=[$x,jx,zp,Bp,ki+Pl,ki+Al,ki+Rl,ki+Cl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],fu=uh.concat([To,Ao,"boxSizing","max"+Da,"max"+Vp,"position",ki,on,on+Rl,on+Al,on+Pl,on+Cl]),HM=function(e,t,i){ba(i);var r=e._gsap;if(r.spacerIsNative)ba(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Gd=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=uh.length,o=t.style,a=e.style,l;s--;)l=uh[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[zp]=a[Bp]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[To]=Hu(e,ii)+hn,o[Ao]=Hu(e,pn)+hn,o[on]=a[ki]=a[jx]=a[$x]="0",ba(r),a[To]=a["max"+Da]=i[To],a[Ao]=a["max"+Vp]=i[Ao],a[on]=i[on],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},GM=/([A-Z])/g,ba=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||$e.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(GM,"-$1").toLowerCase())}},Ac=function(e){for(var t=fu.length,i=e.style,r=[],s=0;s<t;s++)r.push(fu[s],i[fu[s]]);return r.t=e,r},WM=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},hu={left:0,top:0},_m=function(e,t,i,r,s,o,a,l,c,u,d,f,h,g){Vn(e)&&(e=e(l)),vi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?cu("0"+e.substr(3),i):0));var _=h?h.time():0,p,m,v;if(h&&h.seek(0),isNaN(e)||(e=+e),cl(e))h&&(e=$e.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),a&&uu(a,i,r,!0);else{Vn(t)&&(t=t(l));var M=(e||"0").split(" "),x,R,A,C;v=ai(t,l)||Rt,x=jr(v)||{},(!x||!x.left&&!x.top)&&Bi(v).display==="none"&&(C=v.style.display,v.style.display="block",x=jr(v),C?v.style.display=C:v.style.removeProperty("display")),R=cu(M[0],x[r.d]),A=cu(M[1]||"0",i),e=x[r.p]-c[r.p]-u+R+s-A,a&&uu(a,A,r,i-A<20||a._isStart&&A>20),i-=i-A}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var b=e+i,E=o._isStart;p="scroll"+r.d2,uu(o,b,r,E&&b>20||!E&&(d?Math.max(Rt[p],bi[p]):o.parentNode[p])<=b+1),d&&(c=jr(a),d&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+hn))}return h&&v&&(p=jr(v),h.seek(f),m=jr(v),h._caScrollDist=p[r.p]-m[r.p],e=e/h._caScrollDist*f),h&&h.seek(_),h?e:Math.round(e)},XM=/(webkit|moz|length|cssText|inset)/i,xm=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===Rt){e._stOrig=s.cssText,a=Bi(e);for(o in a)!+o&&!XM.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;$e.core.getCache(e).uncache=1,t.appendChild(e)}},ev=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Cc=function(e,t,i){var r={};r[t.p]="+="+i,$e.set(e,r)},vm=function(e,t){var i=Bs(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,d){var f=o.tween,h=l.onComplete,g={};c=c||i();var _=ev(i,c,function(){f.kill(),o.tween=0});return d=u&&d||0,u=u||a-c,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(c+u*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){_t.cache++,o.tween&&Jr()},l.onComplete=function(){o.tween=0,h&&h.call(f)},f=o.tween=$e.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},bn(e,"wheel",i.wheelHandler),ft.isTouch&&bn(e,"touchmove",i.wheelHandler),s},ft=(function(){function n(t,i){ia||n.register($e)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),oh(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!al){this.update=this.refresh=this.kill=fr;return}i=fm(vi(i)||cl(i)||i.nodeType?{trigger:i}:i,Ec);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,f=s.trigger,h=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,v=s.onSnapComplete,M=s.once,x=s.snap,R=s.pinReparent,A=s.pinSpacer,C=s.containerAnimation,b=s.fastScrollEnd,E=s.preventOverlaps,F=i.horizontal||i.containerAnimation&&i.horizontal!==!1?ii:pn,U=!d&&d!==0,L=ai(i.scroller||gt),V=$e.core.getCache(L),k=Ro(L),G=("pinType"in i?i.pinType:Is(L,"pinType")||k&&"fixed")==="fixed",X=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],B=U&&i.toggleActions.split(" "),q="markers"in i?i.markers:Ec.markers,j=k?0:parseFloat(Bi(L)["border"+F.p2+Da])||0,N=this,le=i.onRefreshInit&&function(){return i.onRefreshInit(N)},me=FM(L,k,F),ge=NM(L,k),ve=0,Te=0,J=0,ue=Bs(L,F),oe,Re,Ae,ae,w,T,H,ee,Y,O,I,_e,fe,ne,pe,P,S,z,Z,Q,K,Me,xe,He,Le,be,we,Pe,Ne,Ie,et,W,Ce,Ee,Oe,Se,ce,Ge,Je;if(N._startClamp=N._endClamp=!1,N._dir=F,p*=45,N.scroller=L,N.scroll=C?C.time.bind(C):ue,ae=ue(),N.vars=i,r=r||i.animation,"refreshPriority"in i&&(kx=1,i.refreshPriority===-9999&&(Dl=N)),V.tweenScroll=V.tweenScroll||{top:vm(L,pn),left:vm(L,ii)},N.tweenTo=oe=V.tweenScroll[F.p],N.scrubDuration=function(Be){Ce=cl(Be)&&Be,Ce?W?W.duration(Be):W=$e.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ce,paused:!0,onComplete:function(){return m&&m(N)}}):(W&&W.progress(1).kill(),W=0)},r&&(r.vars.lazy=!1,r._initted&&!N.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),N.animation=r.pause(),r.scrollTrigger=N,N.scrubDuration(d),Ie=0,l||(l=r.vars.id)),x&&((!so(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in Rt.style&&$e.set(k?[Rt,bi]:L,{scrollBehavior:"auto"}),_t.forEach(function(Be){return Vn(Be)&&Be.target===(k?It.scrollingElement||bi:L)&&(Be.smooth=!1)}),Ae=Vn(x.snapTo)?x.snapTo:x.snapTo==="labels"?kM(r):x.snapTo==="labelsDirectional"?BM(r):x.directional!==!1?function(Be,nt){return Hp(x.snapTo)(Be,On()-Te<500?0:nt.direction)}:$e.utils.snap(x.snapTo),Ee=x.duration||{min:.1,max:2},Ee=so(Ee)?El(Ee.min,Ee.max):El(Ee,Ee),Oe=$e.delayedCall(x.delay||Ce/2||.1,function(){var Be=ue(),nt=On()-Te<500,Qe=oe.tween;if((nt||Math.abs(N.getVelocity())<10)&&!Qe&&!fd&&ve!==Be){var it=(Be-T)/ne,Qt=r&&!U?r.totalProgress():it,at=nt?0:(Qt-et)/(On()-ol)*1e3||0,Wt=$e.utils.clamp(-it,1-it,zo(at/2)*at/.185),un=it+(x.inertia===!1?0:Wt),Xt,Lt,Ct=x,Dn=Ct.onStart,Ht=Ct.onInterrupt,Ln=Ct.onComplete;if(Xt=Ae(un,N),cl(Xt)||(Xt=un),Lt=Math.max(0,Math.round(T+Xt*ne)),Be<=H&&Be>=T&&Lt!==Be){if(Qe&&!Qe._initted&&Qe.data<=zo(Lt-Be))return;x.inertia===!1&&(Wt=Xt-it),oe(Lt,{duration:Ee(zo(Math.max(zo(un-Qt),zo(Xt-Qt))*.185/at/.05||0)),ease:x.ease||"power3",data:zo(Lt-Be),onInterrupt:function(){return Oe.restart(!0)&&Ht&&Bo(N,Ht)},onComplete:function(){N.update(),ve=ue(),r&&!U&&(W?W.resetTo("totalProgress",Xt,r._tTime/r._tDur):r.progress(Xt)),Ie=et=r&&!U?r.totalProgress():N.progress,v&&v(N),Ln&&Bo(N,Ln)}},Be,Wt*ne,Lt-Be-Wt*ne),Dn&&Bo(N,Dn,oe.tween)}}else N.isActive&&ve!==Be&&Oe.restart(!0)}).pause()),l&&(lh[l]=N),f=N.trigger=ai(f||h!==!0&&h),Je=f&&f._gsap&&f._gsap.stRevert,Je&&(Je=Je(N)),h=h===!0?f:ai(h),vi(a)&&(a={targets:f,className:a}),h&&(g===!1||g===ki||(g=!g&&h.parentNode&&h.parentNode.style&&Bi(h.parentNode).display==="flex"?!1:on),N.pin=h,Re=$e.core.getCache(h),Re.spacer?pe=Re.pinState:(A&&(A=ai(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Re.spacerIsNative=!!A,A&&(Re.spacerState=Ac(A))),Re.spacer=z=A||It.createElement("div"),z.classList.add("pin-spacer"),l&&z.classList.add("pin-spacer-"+l),Re.pinState=pe=Ac(h)),i.force3D!==!1&&$e.set(h,{force3D:!0}),N.spacer=z=Re.spacer,Ne=Bi(h),He=Ne[g+F.os2],Q=$e.getProperty(h),K=$e.quickSetter(h,F.a,hn),Gd(h,z,Ne),S=Ac(h)),q){_e=so(q)?fm(q,hm):hm,O=Tc("scroller-start",l,L,F,_e,0),I=Tc("scroller-end",l,L,F,_e,0,O),Z=O["offset"+F.op.d2];var Mt=ai(Is(L,"content")||L);ee=this.markerStart=Tc("start",l,Mt,F,_e,Z,0,C),Y=this.markerEnd=Tc("end",l,Mt,F,_e,Z,0,C),C&&(Ge=$e.quickSetter([ee,Y],F.a,hn)),!G&&!(wr.length&&Is(L,"fixedMarkers")===!0)&&(OM(k?Rt:L),$e.set([O,I],{force3D:!0}),be=$e.quickSetter(O,F.a,hn),Pe=$e.quickSetter(I,F.a,hn))}if(C){var Ve=C.vars.onUpdate,Ye=C.vars.onUpdateParams;C.eventCallback("onUpdate",function(){N.update(0,0,1),Ve&&Ve.apply(C,Ye||[])})}if(N.previous=function(){return mt[mt.indexOf(N)-1]},N.next=function(){return mt[mt.indexOf(N)+1]},N.revert=function(Be,nt){if(!nt)return N.kill(!0);var Qe=Be!==!1||!N.enabled,it=Nn;Qe!==N.isReverted&&(Qe&&(Se=Math.max(ue(),N.scroll.rec||0),J=N.progress,ce=r&&r.progress()),ee&&[ee,Y,O,I].forEach(function(Qt){return Qt.style.display=Qe?"none":"block"}),Qe&&(Nn=N,N.update(Qe)),h&&(!R||!N.isActive)&&(Qe?HM(h,z,pe):Gd(h,z,Bi(h),Le)),Qe||N.update(Qe),Nn=it,N.isReverted=Qe)},N.refresh=function(Be,nt,Qe,it){if(!((Nn||!N.enabled)&&!nt)){if(h&&Be&&$i){bn(n,"scrollEnd",qx);return}!Qn&&le&&le(N),Nn=N,oe.tween&&!Qe&&(oe.tween.kill(),oe.tween=0),W&&W.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(We){return We.vars.immediateRender&&We.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var Qt=me(),at=ge(),Wt=C?C.duration():vr(L,F),un=ne<=.01||!ne,Xt=0,Lt=it||0,Ct=so(Qe)?Qe.end:i.end,Dn=i.endTrigger||f,Ht=so(Qe)?Qe.start:i.start||(i.start===0||!f?0:h?"0 0":"0 100%"),Ln=N.pinnedContainer=i.pinnedContainer&&ai(i.pinnedContainer,N),Li=f&&Math.max(0,mt.indexOf(N))||0,dn=Li,fn,_n,Ir,Uo,D,$,re,ie,te,Ue,ke,Fe,Xe;for(q&&so(Qe)&&(Fe=$e.getProperty(O,F.p),Xe=$e.getProperty(I,F.p));dn-- >0;)$=mt[dn],$.end||$.refresh(0,1)||(Nn=N),re=$.pin,re&&(re===f||re===h||re===Ln)&&!$.isReverted&&(Ue||(Ue=[]),Ue.unshift($),$.revert(!0,!0)),$!==mt[dn]&&(Li--,dn--);for(Vn(Ht)&&(Ht=Ht(N)),Ht=lm(Ht,"start",N),T=_m(Ht,f,Qt,F,ue(),ee,O,N,at,j,G,Wt,C,N._startClamp&&"_startClamp")||(h?-.001:0),Vn(Ct)&&(Ct=Ct(N)),vi(Ct)&&!Ct.indexOf("+=")&&(~Ct.indexOf(" ")?Ct=(vi(Ht)?Ht.split(" ")[0]:"")+Ct:(Xt=cu(Ct.substr(2),Qt),Ct=vi(Ht)?Ht:(C?$e.utils.mapRange(0,C.duration(),C.scrollTrigger.start,C.scrollTrigger.end,T):T)+Xt,Dn=f)),Ct=lm(Ct,"end",N),H=Math.max(T,_m(Ct||(Dn?"100% 0":Wt),Dn,Qt,F,ue()+Xt,Y,I,N,at,j,G,Wt,C,N._endClamp&&"_endClamp"))||-.001,Xt=0,dn=Li;dn--;)$=mt[dn]||{},re=$.pin,re&&$.start-$._pinPush<=T&&!C&&$.end>0&&(fn=$.end-(N._startClamp?Math.max(0,$.start):$.start),(re===f&&$.start-$._pinPush<T||re===Ln)&&isNaN(Ht)&&(Xt+=fn*(1-$.progress)),re===h&&(Lt+=fn));if(T+=Xt,H+=Xt,N._startClamp&&(N._startClamp+=Xt),N._endClamp&&!Qn&&(N._endClamp=H||-.001,H=Math.min(H,vr(L,F))),ne=H-T||(T-=.01)&&.001,un&&(J=$e.utils.clamp(0,1,$e.utils.normalize(T,H,Se))),N._pinPush=Lt,ee&&Xt&&(fn={},fn[F.a]="+="+Xt,Ln&&(fn[F.p]="-="+ue()),$e.set([ee,Y],fn)),h&&!(ah&&N.end>=vr(L,F)))fn=Bi(h),Uo=F===pn,Ir=ue(),Me=parseFloat(Q(F.a))+Lt,!Wt&&H>1&&(ke=(k?It.scrollingElement||bi:L).style,ke={style:ke,value:ke["overflow"+F.a.toUpperCase()]},k&&Bi(Rt)["overflow"+F.a.toUpperCase()]!=="scroll"&&(ke.style["overflow"+F.a.toUpperCase()]="scroll")),Gd(h,z,fn),S=Ac(h),_n=jr(h,!0),ie=G&&Bs(L,Uo?ii:pn)(),g?(Le=[g+F.os2,ne+Lt+hn],Le.t=z,dn=g===on?Hu(h,F)+ne+Lt:0,dn&&(Le.push(F.d,dn+hn),z.style.flexBasis!=="auto"&&(z.style.flexBasis=dn+hn)),ba(Le),Ln&&mt.forEach(function(We){We.pin===Ln&&We.vars.pinSpacing!==!1&&(We._subPinOffset=!0)}),G&&ue(Se)):(dn=Hu(h,F),dn&&z.style.flexBasis!=="auto"&&(z.style.flexBasis=dn+hn)),G&&(D={top:_n.top+(Uo?Ir-T:ie)+hn,left:_n.left+(Uo?ie:Ir-T)+hn,boxSizing:"border-box",position:"fixed"},D[To]=D["max"+Da]=Math.ceil(_n.width)+hn,D[Ao]=D["max"+Vp]=Math.ceil(_n.height)+hn,D[ki]=D[ki+Rl]=D[ki+Al]=D[ki+Pl]=D[ki+Cl]="0",D[on]=fn[on],D[on+Rl]=fn[on+Rl],D[on+Al]=fn[on+Al],D[on+Pl]=fn[on+Pl],D[on+Cl]=fn[on+Cl],P=WM(pe,D,R),Qn&&ue(0)),r?(te=r._initted,Bd(1),r.render(r.duration(),!0,!0),xe=Q(F.a)-Me+ne+Lt,we=Math.abs(ne-xe)>1,G&&we&&P.splice(P.length-2,2),r.render(0,!0,!0),te||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Bd(0)):xe=ne,ke&&(ke.value?ke.style["overflow"+F.a.toUpperCase()]=ke.value:ke.style.removeProperty("overflow-"+F.a));else if(f&&ue()&&!C)for(_n=f.parentNode;_n&&_n!==Rt;)_n._pinOffset&&(T-=_n._pinOffset,H-=_n._pinOffset),_n=_n.parentNode;Ue&&Ue.forEach(function(We){return We.revert(!1,!0)}),N.start=T,N.end=H,ae=w=Qn?Se:ue(),!C&&!Qn&&(ae<Se&&ue(Se),N.scroll.rec=0),N.revert(!1,!0),Te=On(),Oe&&(ve=-1,Oe.restart(!0)),Nn=0,r&&U&&(r._initted||ce)&&r.progress()!==ce&&r.progress(ce||0,!0).render(r.time(),!0,!0),(un||J!==N.progress||C||_||r&&!r._initted)&&(r&&!U&&(r._initted||J||r.vars.immediateRender!==!1)&&r.totalProgress(C&&T<-.001&&!J?$e.utils.normalize(T,H,0):J,!0),N.progress=un||(ae-T)/ne===J?0:J),h&&g&&(z._pinOffset=Math.round(N.progress*xe)),W&&W.invalidate(),isNaN(Fe)||(Fe-=$e.getProperty(O,F.p),Xe-=$e.getProperty(I,F.p),Cc(O,F,Fe),Cc(ee,F,Fe-(it||0)),Cc(I,F,Xe),Cc(Y,F,Xe-(it||0))),un&&!Qn&&N.update(),u&&!Qn&&!fe&&(fe=!0,u(N),fe=!1)}},N.getVelocity=function(){return(ue()-w)/(On()-ol)*1e3||0},N.endAnimation=function(){$a(N.callbackAnimation),r&&(W?W.progress(1):r.paused()?U||$a(r,N.direction<0,1):$a(r,r.reversed()))},N.labelToScroll=function(Be){return r&&r.labels&&(T||N.refresh()||T)+r.labels[Be]/r.duration()*ne||0},N.getTrailing=function(Be){var nt=mt.indexOf(N),Qe=N.direction>0?mt.slice(0,nt).reverse():mt.slice(nt+1);return(vi(Be)?Qe.filter(function(it){return it.vars.preventOverlaps===Be}):Qe).filter(function(it){return N.direction>0?it.end<=T:it.start>=H})},N.update=function(Be,nt,Qe){if(!(C&&!Qe&&!Be)){var it=Qn===!0?Se:N.scroll(),Qt=Be?0:(it-T)/ne,at=Qt<0?0:Qt>1?1:Qt||0,Wt=N.progress,un,Xt,Lt,Ct,Dn,Ht,Ln,Li;if(nt&&(w=ae,ae=C?ue():it,x&&(et=Ie,Ie=r&&!U?r.totalProgress():at)),p&&h&&!Nn&&!bc&&$i&&(!at&&T<it+(it-w)/(On()-ol)*p?at=1e-4:at===1&&H>it+(it-w)/(On()-ol)*p&&(at=.9999)),at!==Wt&&N.enabled){if(un=N.isActive=!!at&&at<1,Xt=!!Wt&&Wt<1,Ht=un!==Xt,Dn=Ht||!!at!=!!Wt,N.direction=at>Wt?1:-1,N.progress=at,Dn&&!Nn&&(Lt=at&&!Wt?0:at===1?1:Wt===1?2:3,U&&(Ct=!Ht&&B[Lt+1]!=="none"&&B[Lt+1]||B[Lt],Li=r&&(Ct==="complete"||Ct==="reset"||Ct in r))),E&&(Ht||Li)&&(Li||d||!r)&&(Vn(E)?E(N):N.getTrailing(E).forEach(function(Ir){return Ir.endAnimation()})),U||(W&&!Nn&&!bc?(W._dp._time-W._start!==W._time&&W.render(W._dp._time-W._start),W.resetTo?W.resetTo("totalProgress",at,r._tTime/r._tDur):(W.vars.totalProgress=at,W.invalidate().restart())):r&&r.totalProgress(at,!!(Nn&&(Te||Be)))),h){if(Be&&g&&(z.style[g+F.os2]=He),!G)K(ll(Me+xe*at));else if(Dn){if(Ln=!Be&&at>Wt&&H+1>it&&it+1>=vr(L,F),R)if(!Be&&(un||Ln)){var dn=jr(h,!0),fn=it-T;xm(h,Rt,dn.top+(F===pn?fn:0)+hn,dn.left+(F===pn?0:fn)+hn)}else xm(h,z);ba(un||Ln?P:S),we&&at<1&&un||K(Me+(at===1&&!Ln?xe:0))}}x&&!oe.tween&&!Nn&&!bc&&Oe.restart(!0),a&&(Ht||M&&at&&(at<1||!zd))&&Yl(a.targets).forEach(function(Ir){return Ir.classList[un||M?"add":"remove"](a.className)}),o&&!U&&!Be&&o(N),Dn&&!Nn?(U&&(Li&&(Ct==="complete"?r.pause().totalProgress(1):Ct==="reset"?r.restart(!0).pause():Ct==="restart"?r.restart(!0):r[Ct]()),o&&o(N)),(Ht||!zd)&&(c&&Ht&&Bo(N,c),X[Lt]&&Bo(N,X[Lt]),M&&(at===1?N.kill(!1,1):X[Lt]=0),Ht||(Lt=at===1?1:3,X[Lt]&&Bo(N,X[Lt]))),b&&!un&&Math.abs(N.getVelocity())>(cl(b)?b:2500)&&($a(N.callbackAnimation),W?W.progress(1):$a(r,Ct==="reverse"?1:!at,1))):U&&o&&!Nn&&o(N)}if(Pe){var _n=C?it/C.duration()*(C._caScrollDist||0):it;be(_n+(O._isFlipped?1:0)),Pe(_n)}Ge&&Ge(-it/C.duration()*(C._caScrollDist||0))}},N.enable=function(Be,nt){N.enabled||(N.enabled=!0,bn(L,"resize",ul),k||bn(L,"scroll",Vo),le&&bn(n,"refreshInit",le),Be!==!1&&(N.progress=J=0,ae=w=ve=ue()),nt!==!1&&N.refresh())},N.getTween=function(Be){return Be&&oe?oe.tween:W},N.setPositions=function(Be,nt,Qe,it){if(C){var Qt=C.scrollTrigger,at=C.duration(),Wt=Qt.end-Qt.start;Be=Qt.start+Wt*Be/at,nt=Qt.start+Wt*nt/at}N.refresh(!1,!1,{start:cm(Be,Qe&&!!N._startClamp),end:cm(nt,Qe&&!!N._endClamp)},it),N.update()},N.adjustPinSpacing=function(Be){if(Le&&Be){var nt=Le.indexOf(F.d)+1;Le[nt]=parseFloat(Le[nt])+Be+hn,Le[1]=parseFloat(Le[1])+Be+hn,ba(Le)}},N.disable=function(Be,nt){if(Be!==!1&&N.revert(!0,!0),N.enabled&&(N.enabled=N.isActive=!1,nt||W&&W.pause(),Se=0,Re&&(Re.uncache=1),le&&yn(n,"refreshInit",le),Oe&&(Oe.pause(),oe.tween&&oe.tween.kill()&&(oe.tween=0)),!k)){for(var Qe=mt.length;Qe--;)if(mt[Qe].scroller===L&&mt[Qe]!==N)return;yn(L,"resize",ul),k||yn(L,"scroll",Vo)}},N.kill=function(Be,nt){N.disable(Be,nt),W&&!nt&&W.kill(),l&&delete lh[l];var Qe=mt.indexOf(N);Qe>=0&&mt.splice(Qe,1),Qe===Jn&&du>0&&Jn--,Qe=0,mt.forEach(function(it){return it.scroller===N.scroller&&(Qe=1)}),Qe||Qn||(N.scroll.rec=0),r&&(r.scrollTrigger=null,Be&&r.revert({kill:!1}),nt||r.kill()),ee&&[ee,Y,O,I].forEach(function(it){return it.parentNode&&it.parentNode.removeChild(it)}),Dl===N&&(Dl=0),h&&(Re&&(Re.uncache=1),Qe=0,mt.forEach(function(it){return it.pin===h&&Qe++}),Qe||(Re.spacer=0)),i.onKill&&i.onKill(N)},mt.push(N),N.enable(!1,!1),Je&&Je(N),r&&r.add&&!ne){var ut=N.update;N.update=function(){N.update=ut,_t.cache++,T||H||N.refresh()},$e.delayedCall(.01,N.update),ne=.01,T=H=0}else N.refresh();h&&VM()},n.register=function(i){return ia||($e=i||Gx(),Hx()&&window.document&&n.enable(),ia=al),ia},n.defaults=function(i){if(i)for(var r in i)Ec[r]=i[r];return Ec},n.disable=function(i,r){al=0,mt.forEach(function(o){return o[r?"kill":"disable"](i)}),yn(gt,"wheel",Vo),yn(It,"scroll",Vo),clearInterval(yc),yn(It,"touchcancel",fr),yn(Rt,"touchstart",fr),Mc(yn,It,"pointerdown,touchstart,mousedown",um),Mc(yn,It,"pointerup,touchend,mouseup",dm),Vu.kill(),Sc(yn);for(var s=0;s<_t.length;s+=3)wc(yn,_t[s],_t[s+1]),wc(yn,_t[s],_t[s+2])},n.enable=function(){if(gt=window,It=document,bi=It.documentElement,Rt=It.body,$e){if(Yl=$e.utils.toArray,El=$e.utils.clamp,oh=$e.core.context||fr,Bd=$e.core.suppressOverwrites||fr,Op=gt.history.scrollRestoration||"auto",ch=gt.pageYOffset||0,$e.core.globals("ScrollTrigger",n),Rt){al=1,ya=document.createElement("div"),ya.style.height="100vh",ya.style.position="absolute",Qx(),UM(),rn.register($e),n.isTouch=rn.isTouch,Ss=rn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),sh=rn.isTouch===1,bn(gt,"wheel",Vo),Np=[gt,It,bi,Rt],$e.matchMedia?(n.matchMedia=function(u){var d=$e.matchMedia(),f;for(f in u)d.add(f,u[f]);return d},$e.addEventListener("matchMediaInit",function(){Zx(),Gp()}),$e.addEventListener("matchMediaRevert",function(){return Kx()}),$e.addEventListener("matchMedia",function(){go(0,1),Do("matchMedia")}),$e.matchMedia().add("(orientation: portrait)",function(){return Hd(),Hd})):console.warn("Requires GSAP 3.11.0 or later"),Hd(),bn(It,"scroll",Vo);var i=Rt.hasAttribute("style"),r=Rt.style,s=r.borderTopStyle,o=$e.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=jr(Rt),pn.m=Math.round(a.top+pn.sc())||0,ii.m=Math.round(a.left+ii.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(Rt.setAttribute("style",""),Rt.removeAttribute("style")),yc=setInterval(pm,250),$e.delayedCall(.5,function(){return bc=0}),bn(It,"touchcancel",fr),bn(Rt,"touchstart",fr),Mc(bn,It,"pointerdown,touchstart,mousedown",um),Mc(bn,It,"pointerup,touchend,mouseup",dm),rh=$e.utils.checkPrefix("transform"),fu.push(rh),ia=On(),Vu=$e.delayedCall(.2,go).pause(),ra=[It,"visibilitychange",function(){var u=gt.innerWidth,d=gt.innerHeight;It.hidden?(om=u,am=d):(om!==u||am!==d)&&ul()},It,"DOMContentLoaded",go,gt,"load",go,gt,"resize",ul],Sc(bn),mt.forEach(function(u){return u.enable(0,1)}),l=0;l<_t.length;l+=3)wc(yn,_t[l],_t[l+1]),wc(yn,_t[l],_t[l+2])}else if(It){var c=function u(){n.enable(),It.removeEventListener("DOMContentLoaded",u)};It.addEventListener("DOMContentLoaded",c)}}},n.config=function(i){"limitCallbacks"in i&&(zd=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(yc)||(yc=r)&&setInterval(pm,r),"ignoreMobileResize"in i&&(sh=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Sc(yn)||Sc(bn,i.autoRefreshEvents||"none"),Bx=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=ai(i),o=_t.indexOf(s),a=Ro(s);~o&&_t.splice(o,a?6:2),r&&(a?wr.unshift(gt,r,Rt,r,bi,r):wr.unshift(s,r))},n.clearMatchMedia=function(i){mt.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(vi(i)?ai(i):i).getBoundingClientRect(),a=o[s?To:Ao]*r||0;return s?o.right-a>0&&o.left+a<gt.innerWidth:o.bottom-a>0&&o.top+a<gt.innerHeight},n.positionInViewport=function(i,r,s){vi(i)&&(i=ai(i));var o=i.getBoundingClientRect(),a=o[s?To:Ao],l=r==null?a/2:r in Gu?Gu[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/gt.innerWidth:(o.top+l)/gt.innerHeight},n.killAll=function(i){if(mt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Po.killAll||[];Po={},r.forEach(function(s){return s()})}},n})();ft.version="3.15.0";ft.saveStyles=function(n){return n?Yl(n).forEach(function(e){if(e&&e.style){var t=xi.indexOf(e);t>=0&&xi.splice(t,5),xi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),$e.core.getCache(e),oh())}}):xi};ft.revert=function(n,e){return Gp(!n,e)};ft.create=function(n,e){return new ft(n,e)};ft.refresh=function(n){return n?ul(!0):(ia||ft.register())&&go(!0)};ft.update=function(n){return++_t.cache&&Jr(n===!0?2:0)};ft.clearScrollMemory=Jx;ft.maxScroll=function(n,e){return vr(n,e?ii:pn)};ft.getScrollFunc=function(n,e){return Bs(ai(n),e?ii:pn)};ft.getById=function(n){return lh[n]};ft.getAll=function(){return mt.filter(function(n){return n.vars.id!=="ScrollSmoother"})};ft.isScrolling=function(){return!!$i};ft.snapDirectional=Hp;ft.addEventListener=function(n,e){var t=Po[n]||(Po[n]=[]);~t.indexOf(e)||t.push(e)};ft.removeEventListener=function(n,e){var t=Po[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};ft.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var d=[],f=[],h=$e.delayedCall(r,function(){u(d,f),d=[],f=[]}).pause();return function(g){d.length||h.restart(!0),d.push(g.trigger),f.push(g),s<=d.length&&h.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Vn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Vn(s)&&(s=s(),bn(ft,"refresh",function(){return s=e.batchMax()})),Yl(n).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(ft.create(c))}),t};var ym=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Wd=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(rn.isTouch?" pinch-zoom":""):"none",e===bi&&n(Rt,t)},Rc={auto:1,scroll:1},$M=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||$e.core.getCache(s),a=On(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Rt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Rc[(l=Bi(s)).overflowY]||Rc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Ro(s)&&(Rc[(l=Bi(s)).overflowY]||Rc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},tv=function(e,t,i,r){return rn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&$M,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&bn(It,rn.eventTypes[0],Sm,!1,!0)},onDisable:function(){return yn(It,rn.eventTypes[0],Sm,!0)}})},jM=/(input|label|select|textarea)/i,bm,Sm=function(e){var t=jM.test(e.target.tagName);(t||bm)&&(e._gsapAllow=!0,bm=t)},YM=function(e){so(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=ai(e.target)||bi,u=$e.core.globals().ScrollSmoother,d=u&&u.get(),f=Ss&&(e.content&&ai(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=Bs(c,pn),g=Bs(c,ii),_=1,p=(rn.isTouch&&gt.visualViewport?gt.visualViewport.scale*gt.visualViewport.width:gt.outerWidth)/gt.innerWidth,m=0,v=Vn(r)?function(){return r(a)}:function(){return r||2.8},M,x,R=tv(c,e.type,!0,s),A=function(){return x=!1},C=fr,b=fr,E=function(){l=vr(c,pn),b=El(Ss?1:0,l),i&&(C=El(0,vr(c,ii))),M=Co},F=function(){f._gsap.y=ll(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},U=function(){if(x){requestAnimationFrame(A);var q=ll(a.deltaY/2),j=b(h.v-q);if(f&&j!==h.v+h.offset){h.offset=j-h.v;var N=ll((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",f._gsap.y=N+"px",h.cacheID=_t.cache,Jr()}return!0}h.offset&&F(),x=!0},L,V,k,G,X=function(){E(),L.isActive()&&L.vars.scrollY>l&&(h()>l?L.progress(1)&&h(l):L.resetTo("scrollY",l))};return f&&$e.set(f,{y:"+=0"}),e.ignoreCheck=function(B){return Ss&&B.type==="touchmove"&&U()||_>1.05&&B.type!=="touchstart"||a.isGesturing||B.touches&&B.touches.length>1},e.onPress=function(){x=!1;var B=_;_=ll((gt.visualViewport&&gt.visualViewport.scale||1)/p),L.pause(),B!==_&&Wd(c,_>1.01?!0:i?!1:"x"),V=g(),k=h(),E(),M=Co},e.onRelease=e.onGestureStart=function(B,q){if(h.offset&&F(),!q)G.restart(!0);else{_t.cache++;var j=v(),N,le;i&&(N=g(),le=N+j*.05*-B.velocityX/.227,j*=ym(g,N,le,vr(c,ii)),L.vars.scrollX=C(le)),N=h(),le=N+j*.05*-B.velocityY/.227,j*=ym(h,N,le,vr(c,pn)),L.vars.scrollY=b(le),L.invalidate().duration(j).play(.01),(Ss&&L.vars.scrollY>=l||N>=l-1)&&$e.to({},{onUpdate:X,duration:j})}o&&o(B)},e.onWheel=function(){L._ts&&L.pause(),On()-m>1e3&&(M=0,m=On())},e.onChange=function(B,q,j,N,le){if(Co!==M&&E(),q&&i&&g(C(N[2]===q?V+(B.startX-B.x):g()+q-N[1])),j){h.offset&&F();var me=le[2]===j,ge=me?k+B.startY-B.y:h()+j-le[1],ve=b(ge);me&&ge!==ve&&(k+=ve-ge),h(ve)}(j||q)&&Jr()},e.onEnable=function(){Wd(c,i?!1:"x"),ft.addEventListener("refresh",X),bn(gt,"resize",X),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),R.enable()},e.onDisable=function(){Wd(c,!0),yn(gt,"resize",X),ft.removeEventListener("refresh",X),R.kill()},e.lockAxis=e.lockAxis!==!1,a=new rn(e),a.iOS=Ss,Ss&&!h()&&h(1),Ss&&$e.ticker.add(fr),G=a._dc,L=$e.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:ev(h,h(),function(){return L.pause()})},onUpdate:Jr,onComplete:G.vars.onComplete}),a};ft.sort=function(n){if(Vn(n))return mt.sort(n);var e=gt.pageYOffset||0;return ft.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+gt.innerHeight}),mt.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};ft.observe=function(n){return new rn(n)};ft.normalizeScroll=function(n){if(typeof n>"u")return Zn;if(n===!0&&Zn)return Zn.enable();if(n===!1){Zn&&Zn.kill(),Zn=n;return}var e=n instanceof rn?n:YM(n);return Zn&&Zn.target===e.target&&Zn.kill(),Ro(e.target)&&(Zn=e),e};ft.core={_getVelocityProp:ih,_inputObserver:tv,_scrollers:_t,_proxies:wr,bridge:{ss:function(){$i||Do("scrollStart"),$i=On()},ref:function(){return Nn}}};Gx()&&$e.registerPlugin(ft);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wp="183",qM=0,Mm=1,KM=2,pu=1,ZM=2,dl=3,zs=0,hi=1,Yr=2,Qr=0,Sa=1,wm=2,Em=3,Tm=4,JM=5,uo=100,QM=101,ew=102,tw=103,nw=104,iw=200,rw=201,sw=202,ow=203,dh=204,fh=205,aw=206,lw=207,cw=208,uw=209,dw=210,fw=211,hw=212,pw=213,mw=214,hh=0,ph=1,mh=2,La=3,gh=4,_h=5,xh=6,vh=7,nv=0,gw=1,_w=2,Er=0,iv=1,rv=2,sv=3,ov=4,av=5,lv=6,cv=7,uv=300,Lo=301,Ia=302,Xd=303,$d=304,hd=306,yh=1e3,Kr=1001,bh=1002,Cn=1003,xw=1004,Pc=1005,Gn=1006,jd=1007,_o=1008,zi=1009,dv=1010,fv=1011,Kl=1012,Xp=1013,Dr=1014,yr=1015,ls=1016,$p=1017,jp=1018,Zl=1020,hv=35902,pv=35899,mv=1021,gv=1022,tr=1023,cs=1026,xo=1027,_v=1028,Yp=1029,Ua=1030,qp=1031,Kp=1033,mu=33776,gu=33777,_u=33778,xu=33779,Sh=35840,Mh=35841,wh=35842,Eh=35843,Th=36196,Ah=37492,Ch=37496,Rh=37488,Ph=37489,Dh=37490,Lh=37491,Ih=37808,Uh=37809,Fh=37810,Nh=37811,Oh=37812,kh=37813,Bh=37814,zh=37815,Vh=37816,Hh=37817,Gh=37818,Wh=37819,Xh=37820,$h=37821,jh=36492,Yh=36494,qh=36495,Kh=36283,Zh=36284,Jh=36285,Qh=36286,vw=3200,yw=0,bw=1,ws="",Oi="srgb",Fa="srgb-linear",Wu="linear",Ut="srgb",Ho=7680,Am=519,Sw=512,Mw=513,ww=514,Zp=515,Ew=516,Tw=517,Jp=518,Aw=519,Cm=35044,Rm="300 es",br=2e3,Xu=2001;function Cw(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function $u(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Rw(){const n=$u("canvas");return n.style.display="block",n}const Pm={};function Dm(...n){const e="THREE."+n.shift();console.log(e,...n)}function xv(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ot(...n){n=xv(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Et(...n){n=xv(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ju(...n){const e=n.join(" ");e in Pm||(Pm[e]=!0,ot(...n))}function Pw(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Dw={[hh]:ph,[mh]:xh,[gh]:vh,[La]:_h,[ph]:hh,[xh]:mh,[vh]:gh,[_h]:La};class Oa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yd=Math.PI/180,ep=180/Math.PI;function oc(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[i&255]+Un[i>>8&255]+Un[i>>16&255]+Un[i>>24&255]).toLowerCase()}function vt(n,e,t){return Math.max(e,Math.min(t,n))}function Lw(n,e){return(n%e+e)%e}function qd(n,e,t){return(1-t)*n+t*e}function ja(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function si(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class bt{constructor(e=0,t=0){bt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ka{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],g=s[o+2],_=s[o+3];if(d!==_||l!==f||c!==h||u!==g){let p=l*f+c*h+u*g+d*_;p<0&&(f=-f,h=-h,g=-g,_=-_,p=-p);let m=1-a;if(p<.9995){const v=Math.acos(p),M=Math.sin(v);m=Math.sin(m*v)/M,a=Math.sin(a*v)/M,l=l*m+f*a,c=c*m+h*a,u=u*m+g*a,d=d*m+_*a}else{l=l*m+f*a,c=c*m+h*a,u=u*m+g*a,d=d*m+_*a;const v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*d+l*h-c*f,e[t+1]=l*g+u*f+c*d-a*h,e[t+2]=c*g+u*h+a*f-l*d,e[t+3]=u*g-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"YZX":this._x=f*u*d+c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d-f*h*g;break;case"XZY":this._x=f*u*d-c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d+f*h*g;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,t=0,i=0){se.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kd.copy(this).projectOnVector(e),this.sub(Kd)}reflect(e){return this.sub(Kd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kd=new se,Lm=new ka;class dt{constructor(e,t,i,r,s,o,a,l,c){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],_=r[0],p=r[3],m=r[6],v=r[1],M=r[4],x=r[7],R=r[2],A=r[5],C=r[8];return s[0]=o*_+a*v+l*R,s[3]=o*p+a*M+l*A,s[6]=o*m+a*x+l*C,s[1]=c*_+u*v+d*R,s[4]=c*p+u*M+d*A,s[7]=c*m+u*x+d*C,s[2]=f*_+h*v+g*R,s[5]=f*p+h*M+g*A,s[8]=f*m+h*x+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,h=c*s-o*l,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=h*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Zd.makeScale(e,t)),this}rotate(e){return this.premultiply(Zd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zd=new dt,Im=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Um=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Iw(){const n={enabled:!0,workingColorSpace:Fa,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ut&&(r.r=es(r.r),r.g=es(r.g),r.b=es(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ut&&(r.r=Ma(r.r),r.g=Ma(r.g),r.b=Ma(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ws?Wu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ju("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ju("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Fa]:{primaries:e,whitePoint:i,transfer:Wu,toXYZ:Im,fromXYZ:Um,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Oi},outputColorSpaceConfig:{drawingBufferColorSpace:Oi}},[Oi]:{primaries:e,whitePoint:i,transfer:Ut,toXYZ:Im,fromXYZ:Um,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Oi}}}),n}const St=Iw();function es(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ma(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Go;class Uw{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Go===void 0&&(Go=$u("canvas")),Go.width=e.width,Go.height=e.height;const r=Go.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Go}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$u("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=es(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(es(t[i]/255)*255):t[i]=es(t[i]);return{data:t,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fw=0;class Qp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fw++}),this.uuid=oc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Jd(r[o].image)):s.push(Jd(r[o]))}else s=Jd(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Jd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Uw.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let Nw=0;const Qd=new se;class ri extends Oa{constructor(e=ri.DEFAULT_IMAGE,t=ri.DEFAULT_MAPPING,i=Kr,r=Kr,s=Gn,o=_o,a=tr,l=zi,c=ri.DEFAULT_ANISOTROPY,u=ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nw++}),this.uuid=oc(),this.name="",this.source=new Qp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qd).x}get height(){return this.source.getSize(Qd).y}get depth(){return this.source.getSize(Qd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ot(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ot(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yh:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case bh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yh:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case bh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=uv;ri.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,t=0,i=0,r=1){nn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,x=(h+1)/2,R=(m+1)/2,A=(u+f)/4,C=(d+_)/4,b=(g+p)/4;return M>x&&M>R?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=A/i,s=C/i):x>R?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=b/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=C/s,r=b/s),this.set(i,r,s,t),this}let v=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-_)/v,this.z=(f-u)/v,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ow extends Oa{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new ri(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Qp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tr extends Ow{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vv extends ri{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kw extends ri{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cn{constructor(e,t,i,r,s,o,a,l,c,u,d,f,h,g,_,p){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,h,g,_,p)}set(e,t,i,r,s,o,a,l,c,u,d,f,h,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Wo.setFromMatrixColumn(e,0).length(),s=1/Wo.setFromMatrixColumn(e,1).length(),o=1/Wo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,h=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+h*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,g=c*u,_=c*d;t[0]=f+_*a,t[4]=g*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,g=c*u,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=g*c-h,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=h*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+_,t[5]=o*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bw,e,zw)}lookAt(e,t,i){const r=this.elements;return gi.subVectors(e,t),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),gs.crossVectors(i,gi),gs.lengthSq()===0&&(Math.abs(i.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),gs.crossVectors(i,gi)),gs.normalize(),Dc.crossVectors(gi,gs),r[0]=gs.x,r[4]=Dc.x,r[8]=gi.x,r[1]=gs.y,r[5]=Dc.y,r[9]=gi.y,r[2]=gs.z,r[6]=Dc.z,r[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],_=i[6],p=i[10],m=i[14],v=i[3],M=i[7],x=i[11],R=i[15],A=r[0],C=r[4],b=r[8],E=r[12],F=r[1],U=r[5],L=r[9],V=r[13],k=r[2],G=r[6],X=r[10],B=r[14],q=r[3],j=r[7],N=r[11],le=r[15];return s[0]=o*A+a*F+l*k+c*q,s[4]=o*C+a*U+l*G+c*j,s[8]=o*b+a*L+l*X+c*N,s[12]=o*E+a*V+l*B+c*le,s[1]=u*A+d*F+f*k+h*q,s[5]=u*C+d*U+f*G+h*j,s[9]=u*b+d*L+f*X+h*N,s[13]=u*E+d*V+f*B+h*le,s[2]=g*A+_*F+p*k+m*q,s[6]=g*C+_*U+p*G+m*j,s[10]=g*b+_*L+p*X+m*N,s[14]=g*E+_*V+p*B+m*le,s[3]=v*A+M*F+x*k+R*q,s[7]=v*C+M*U+x*G+R*j,s[11]=v*b+M*L+x*X+R*N,s[15]=v*E+M*V+x*B+R*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],_=e[7],p=e[11],m=e[15],v=l*h-c*f,M=a*h-c*d,x=a*f-l*d,R=o*h-c*u,A=o*f-l*u,C=o*d-a*u;return t*(_*v-p*M+m*x)-i*(g*v-p*R+m*A)+r*(g*M-_*R+m*C)-s*(g*x-_*A+p*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],_=e[13],p=e[14],m=e[15],v=t*a-i*o,M=t*l-r*o,x=t*c-s*o,R=i*l-r*a,A=i*c-s*a,C=r*c-s*l,b=u*_-d*g,E=u*p-f*g,F=u*m-h*g,U=d*p-f*_,L=d*m-h*_,V=f*m-h*p,k=v*V-M*L+x*U+R*F-A*E+C*b;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/k;return e[0]=(a*V-l*L+c*U)*G,e[1]=(r*L-i*V-s*U)*G,e[2]=(_*C-p*A+m*R)*G,e[3]=(f*A-d*C-h*R)*G,e[4]=(l*F-o*V-c*E)*G,e[5]=(t*V-r*F+s*E)*G,e[6]=(p*x-g*C-m*M)*G,e[7]=(u*C-f*x+h*M)*G,e[8]=(o*L-a*F+c*b)*G,e[9]=(i*F-t*L-s*b)*G,e[10]=(g*A-_*x+m*v)*G,e[11]=(d*x-u*A-h*v)*G,e[12]=(a*E-o*U-l*b)*G,e[13]=(t*U-i*E+r*b)*G,e[14]=(_*M-g*R-p*v)*G,e[15]=(u*R-d*M+f*v)*G,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,h=s*u,g=s*d,_=o*u,p=o*d,m=a*d,v=l*c,M=l*u,x=l*d,R=i.x,A=i.y,C=i.z;return r[0]=(1-(_+m))*R,r[1]=(h+x)*R,r[2]=(g-M)*R,r[3]=0,r[4]=(h-x)*A,r[5]=(1-(f+m))*A,r[6]=(p+v)*A,r[7]=0,r[8]=(g+M)*C,r[9]=(p-v)*C,r[10]=(1-(f+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let o=Wo.set(r[0],r[1],r[2]).length();const a=Wo.set(r[4],r[5],r[6]).length(),l=Wo.set(r[8],r[9],r[10]).length();s<0&&(o=-o),qi.copy(this);const c=1/o,u=1/a,d=1/l;return qi.elements[0]*=c,qi.elements[1]*=c,qi.elements[2]*=c,qi.elements[4]*=u,qi.elements[5]*=u,qi.elements[6]*=u,qi.elements[8]*=d,qi.elements[9]*=d,qi.elements[10]*=d,t.setFromRotationMatrix(qi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=br,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===br)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Xu)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=br,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===br)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Xu)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Wo=new se,qi=new cn,Bw=new se(0,0,0),zw=new se(1,1,1),gs=new se,Dc=new se,gi=new se,Fm=new cn,Nm=new ka;class us{constructor(e=0,t=0,i=0,r=us.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nm.setFromEuler(this),this.setFromQuaternion(Nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}us.DEFAULT_ORDER="XYZ";class yv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vw=0;const Om=new se,Xo=new ka,Nr=new cn,Lc=new se,Ya=new se,Hw=new se,Gw=new ka,km=new se(1,0,0),Bm=new se(0,1,0),zm=new se(0,0,1),Vm={type:"added"},Ww={type:"removed"},$o={type:"childadded",child:null},ef={type:"childremoved",child:null};class Ri extends Oa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vw++}),this.uuid=oc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ri.DEFAULT_UP.clone();const e=new se,t=new us,i=new ka,r=new se(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new cn},normalMatrix:{value:new dt}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=Ri.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xo.setFromAxisAngle(e,t),this.quaternion.multiply(Xo),this}rotateOnWorldAxis(e,t){return Xo.setFromAxisAngle(e,t),this.quaternion.premultiply(Xo),this}rotateX(e){return this.rotateOnAxis(km,e)}rotateY(e){return this.rotateOnAxis(Bm,e)}rotateZ(e){return this.rotateOnAxis(zm,e)}translateOnAxis(e,t){return Om.copy(e).applyQuaternion(this.quaternion),this.position.add(Om.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(km,e)}translateY(e){return this.translateOnAxis(Bm,e)}translateZ(e){return this.translateOnAxis(zm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Lc.copy(e):Lc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nr.lookAt(Ya,Lc,this.up):Nr.lookAt(Lc,Ya,this.up),this.quaternion.setFromRotationMatrix(Nr),r&&(Nr.extractRotation(r.matrixWorld),Xo.setFromRotationMatrix(Nr),this.quaternion.premultiply(Xo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vm),$o.child=e,this.dispatchEvent($o),$o.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ww),ef.child=e,this.dispatchEvent(ef),ef.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vm),$o.child=e,this.dispatchEvent($o),$o.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ya,e,Hw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ya,Gw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ri.DEFAULT_UP=new se(0,1,0);Ri.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ic extends Ri{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xw={type:"move"};class tf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ic,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ic,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ic,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ic;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const bv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_s={h:0,s:0,l:0},Uc={h:0,s:0,l:0};function nf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=St.workingColorSpace){return this.r=e,this.g=t,this.b=i,St.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=St.workingColorSpace){if(e=Lw(e,1),t=vt(t,0,1),i=vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=nf(o,s,e+1/3),this.g=nf(o,s,e),this.b=nf(o,s,e-1/3)}return St.colorSpaceToWorking(this,r),this}setStyle(e,t=Oi){function i(s){s!==void 0&&parseFloat(s)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ot("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Oi){const i=bv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}copyLinearToSRGB(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Oi){return St.workingToColorSpace(Fn.copy(this),e),Math.round(vt(Fn.r*255,0,255))*65536+Math.round(vt(Fn.g*255,0,255))*256+Math.round(vt(Fn.b*255,0,255))}getHexString(e=Oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.workingToColorSpace(Fn.copy(this),t);const i=Fn.r,r=Fn.g,s=Fn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=St.workingColorSpace){return St.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=Oi){St.workingToColorSpace(Fn.copy(this),e);const t=Fn.r,i=Fn.g,r=Fn.b;return e!==Oi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(_s),this.setHSL(_s.h+e,_s.s+t,_s.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_s),e.getHSL(Uc);const i=qd(_s.h,Uc.h,t),r=qd(_s.s,Uc.s,t),s=qd(_s.l,Uc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Ot;Ot.NAMES=bv;class $w extends Ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new us,this.environmentIntensity=1,this.environmentRotation=new us,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ki=new se,Or=new se,rf=new se,kr=new se,jo=new se,Yo=new se,Hm=new se,sf=new se,of=new se,af=new se,lf=new nn,cf=new nn,uf=new nn;class er{constructor(e=new se,t=new se,i=new se){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ki.subVectors(e,t),r.cross(Ki);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ki.subVectors(r,t),Or.subVectors(i,t),rf.subVectors(e,t);const o=Ki.dot(Ki),a=Ki.dot(Or),l=Ki.dot(rf),c=Or.dot(Or),u=Or.dot(rf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,kr)===null?!1:kr.x>=0&&kr.y>=0&&kr.x+kr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,kr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,kr.x),l.addScaledVector(o,kr.y),l.addScaledVector(a,kr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return lf.setScalar(0),cf.setScalar(0),uf.setScalar(0),lf.fromBufferAttribute(e,t),cf.fromBufferAttribute(e,i),uf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(lf,s.x),o.addScaledVector(cf,s.y),o.addScaledVector(uf,s.z),o}static isFrontFacing(e,t,i,r){return Ki.subVectors(i,t),Or.subVectors(e,t),Ki.cross(Or).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ki.subVectors(this.c,this.b),Or.subVectors(this.a,this.b),Ki.cross(Or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return er.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return er.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return er.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return er.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return er.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;jo.subVectors(r,i),Yo.subVectors(s,i),sf.subVectors(e,i);const l=jo.dot(sf),c=Yo.dot(sf);if(l<=0&&c<=0)return t.copy(i);of.subVectors(e,r);const u=jo.dot(of),d=Yo.dot(of);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(jo,o);af.subVectors(e,s);const h=jo.dot(af),g=Yo.dot(af);if(g>=0&&h<=g)return t.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Yo,a);const p=u*g-h*d;if(p<=0&&d-u>=0&&h-g>=0)return Hm.subVectors(s,r),a=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(Hm,a);const m=1/(p+_+f);return o=_*m,a=f*m,t.copy(i).addScaledVector(jo,o).addScaledVector(Yo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ac{constructor(e=new se(1/0,1/0,1/0),t=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zi):Zi.fromBufferAttribute(s,o),Zi.applyMatrix4(e.matrixWorld),this.expandByPoint(Zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fc.copy(i.boundingBox)),Fc.applyMatrix4(e.matrixWorld),this.union(Fc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qa),Nc.subVectors(this.max,qa),qo.subVectors(e.a,qa),Ko.subVectors(e.b,qa),Zo.subVectors(e.c,qa),xs.subVectors(Ko,qo),vs.subVectors(Zo,Ko),Ks.subVectors(qo,Zo);let t=[0,-xs.z,xs.y,0,-vs.z,vs.y,0,-Ks.z,Ks.y,xs.z,0,-xs.x,vs.z,0,-vs.x,Ks.z,0,-Ks.x,-xs.y,xs.x,0,-vs.y,vs.x,0,-Ks.y,Ks.x,0];return!df(t,qo,Ko,Zo,Nc)||(t=[1,0,0,0,1,0,0,0,1],!df(t,qo,Ko,Zo,Nc))?!1:(Oc.crossVectors(xs,vs),t=[Oc.x,Oc.y,Oc.z],df(t,qo,Ko,Zo,Nc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Br[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Br[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Br[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Br[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Br[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Br[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Br[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Br[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Br),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Br=[new se,new se,new se,new se,new se,new se,new se,new se],Zi=new se,Fc=new ac,qo=new se,Ko=new se,Zo=new se,xs=new se,vs=new se,Ks=new se,qa=new se,Nc=new se,Oc=new se,Zs=new se;function df(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Zs.fromArray(n,s);const a=r.x*Math.abs(Zs.x)+r.y*Math.abs(Zs.y)+r.z*Math.abs(Zs.z),l=e.dot(Zs),c=t.dot(Zs),u=i.dot(Zs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const sn=new se,kc=new bt;let jw=0;class Ar{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jw++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Cm,this.updateRanges=[],this.gpuType=yr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)kc.fromBufferAttribute(this,t),kc.applyMatrix3(e),this.setXY(t,kc.x,kc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ja(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=si(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ja(t,this.array)),t}setX(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ja(t,this.array)),t}setY(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ja(t,this.array)),t}setZ(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ja(t,this.array)),t}setW(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),i=si(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),i=si(i,this.array),r=si(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),i=si(i,this.array),r=si(r,this.array),s=si(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cm&&(e.usage=this.usage),e}}class Sv extends Ar{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Mv extends Ar{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ts extends Ar{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Yw=new ac,Ka=new se,ff=new se;class e0{constructor(e=new se,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Yw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ka.subVectors(e,this.center);const t=Ka.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ka,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ff.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ka.copy(e.center).add(ff)),this.expandByPoint(Ka.copy(e.center).sub(ff))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let qw=0;const Ui=new cn,hf=new Ri,Jo=new se,_i=new ac,Za=new ac,vn=new se;class fs extends Oa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qw++}),this.uuid=oc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cw(e)?Mv:Sv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new dt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ui.makeRotationFromQuaternion(e),this.applyMatrix4(Ui),this}rotateX(e){return Ui.makeRotationX(e),this.applyMatrix4(Ui),this}rotateY(e){return Ui.makeRotationY(e),this.applyMatrix4(Ui),this}rotateZ(e){return Ui.makeRotationZ(e),this.applyMatrix4(Ui),this}translate(e,t,i){return Ui.makeTranslation(e,t,i),this.applyMatrix4(Ui),this}scale(e,t,i){return Ui.makeScale(e,t,i),this.applyMatrix4(Ui),this}lookAt(e){return hf.lookAt(e),hf.updateMatrix(),this.applyMatrix4(hf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jo).negate(),this.translate(Jo.x,Jo.y,Jo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ts(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ac);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];_i.setFromBufferAttribute(s),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new e0);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const i=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Za.setFromBufferAttribute(a),this.morphTargetsRelative?(vn.addVectors(_i.min,Za.min),_i.expandByPoint(vn),vn.addVectors(_i.max,Za.max),_i.expandByPoint(vn)):(_i.expandByPoint(Za.min),_i.expandByPoint(Za.max))}_i.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)vn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(vn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)vn.fromBufferAttribute(a,c),l&&(Jo.fromBufferAttribute(e,c),vn.add(Jo)),r=Math.max(r,i.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ar(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new se,l[b]=new se;const c=new se,u=new se,d=new se,f=new bt,h=new bt,g=new bt,_=new se,p=new se;function m(b,E,F){c.fromBufferAttribute(i,b),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,F),f.fromBufferAttribute(s,b),h.fromBufferAttribute(s,E),g.fromBufferAttribute(s,F),u.sub(c),d.sub(c),h.sub(f),g.sub(f);const U=1/(h.x*g.y-g.x*h.y);isFinite(U)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(U),p.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(U),a[b].add(_),a[E].add(_),a[F].add(_),l[b].add(p),l[E].add(p),l[F].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let b=0,E=v.length;b<E;++b){const F=v[b],U=F.start,L=F.count;for(let V=U,k=U+L;V<k;V+=3)m(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const M=new se,x=new se,R=new se,A=new se;function C(b){R.fromBufferAttribute(r,b),A.copy(R);const E=a[b];M.copy(E),M.sub(R.multiplyScalar(R.dot(E))).normalize(),x.crossVectors(A,E);const U=x.dot(l[b])<0?-1:1;o.setXYZW(b,M.x,M.y,M.z,U)}for(let b=0,E=v.length;b<E;++b){const F=v[b],U=F.start,L=F.count;for(let V=U,k=U+L;V<k;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ar(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new se,s=new se,o=new se,a=new se,l=new se,c=new se,u=new se,d=new se;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let m=0;m<u;m++)f[g++]=c[h++]}return new Ar(f,u,d)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fs,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Kw=0;class pd extends Oa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kw++}),this.uuid=oc(),this.name="",this.type="Material",this.blending=Sa,this.side=zs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dh,this.blendDst=fh,this.blendEquation=uo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=La,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ho,this.stencilZFail=Ho,this.stencilZPass=Ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ot(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ot(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Sa&&(i.blending=this.blending),this.side!==zs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dh&&(i.blendSrc=this.blendSrc),this.blendDst!==fh&&(i.blendDst=this.blendDst),this.blendEquation!==uo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==La&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Am&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ho&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ho&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ho&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const zr=new se,pf=new se,Bc=new se,ys=new se,mf=new se,zc=new se,gf=new se;class Zw{constructor(e=new se,t=new se(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zr.copy(this.origin).addScaledVector(this.direction,t),zr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){pf.copy(e).add(t).multiplyScalar(.5),Bc.copy(t).sub(e).normalize(),ys.copy(this.origin).sub(pf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Bc),a=ys.dot(this.direction),l=-ys.dot(Bc),c=ys.lengthSq(),u=Math.abs(1-o*o);let d,f,h,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(pf).addScaledVector(Bc,f),h}intersectSphere(e,t){zr.subVectors(e.center,this.origin);const i=zr.dot(this.direction),r=zr.dot(zr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,zr)!==null}intersectTriangle(e,t,i,r,s){mf.subVectors(t,e),zc.subVectors(i,e),gf.crossVectors(mf,zc);let o=this.direction.dot(gf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ys.subVectors(this.origin,e);const l=a*this.direction.dot(zc.crossVectors(ys,zc));if(l<0)return null;const c=a*this.direction.dot(mf.cross(ys));if(c<0||l+c>o)return null;const u=-a*ys.dot(gf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wv extends pd{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new us,this.combine=nv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gm=new cn,Js=new Zw,Vc=new e0,Wm=new se,Hc=new se,Gc=new se,Wc=new se,_f=new se,Xc=new se,Xm=new se,$c=new se;class Lr extends Ri{constructor(e=new fs,t=new wv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Xc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(_f.fromBufferAttribute(d,e),o?Xc.addScaledVector(_f,u):Xc.addScaledVector(_f.sub(t),u))}t.add(Xc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vc.copy(i.boundingSphere),Vc.applyMatrix4(s),Js.copy(e.ray).recast(e.near),!(Vc.containsPoint(Js.origin)===!1&&(Js.intersectSphere(Vc,Wm)===null||Js.origin.distanceToSquared(Wm)>(e.far-e.near)**2))&&(Gm.copy(s).invert(),Js.copy(e.ray).applyMatrix4(Gm),!(i.boundingBox!==null&&Js.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Js)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],v=Math.max(p.start,h.start),M=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let x=v,R=M;x<R;x+=3){const A=a.getX(x),C=a.getX(x+1),b=a.getX(x+2);r=jc(this,m,e,i,c,u,d,A,C,b),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const v=a.getX(p),M=a.getX(p+1),x=a.getX(p+2);r=jc(this,o,e,i,c,u,d,v,M,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],v=Math.max(p.start,h.start),M=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let x=v,R=M;x<R;x+=3){const A=x,C=x+1,b=x+2;r=jc(this,m,e,i,c,u,d,A,C,b),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const v=p,M=p+1,x=p+2;r=jc(this,o,e,i,c,u,d,v,M,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Jw(n,e,t,i,r,s,o,a){let l;if(e.side===hi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===zs,a),l===null)return null;$c.copy(a),$c.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo($c);return c<t.near||c>t.far?null:{distance:c,point:$c.clone(),object:n}}function jc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Hc),n.getVertexPosition(l,Gc),n.getVertexPosition(c,Wc);const u=Jw(n,e,t,i,Hc,Gc,Wc,Xm);if(u){const d=new se;er.getBarycoord(Xm,Hc,Gc,Wc,d),r&&(u.uv=er.getInterpolatedAttribute(r,a,l,c,d,new bt)),s&&(u.uv1=er.getInterpolatedAttribute(s,a,l,c,d,new bt)),o&&(u.normal=er.getInterpolatedAttribute(o,a,l,c,d,new se),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new se,materialIndex:0};er.getNormal(Hc,Gc,Wc,f.normal),u.face=f,u.barycoord=d}return u}class Qw extends ri{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Cn,u=Cn,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xf=new se,e2=new se,t2=new dt;class oo{constructor(e=new se(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=xf.subVectors(i,t).cross(e2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(xf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||t2.getNormalMatrix(e),r=this.coplanarPoint(xf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qs=new e0,n2=new bt(.5,.5),Yc=new se;class Ev{constructor(e=new oo,t=new oo,i=new oo,r=new oo,s=new oo,o=new oo){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=br,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],g=s[8],_=s[9],p=s[10],m=s[11],v=s[12],M=s[13],x=s[14],R=s[15];if(r[0].setComponents(c-o,h-u,m-g,R-v).normalize(),r[1].setComponents(c+o,h+u,m+g,R+v).normalize(),r[2].setComponents(c+a,h+d,m+_,R+M).normalize(),r[3].setComponents(c-a,h-d,m-_,R-M).normalize(),i)r[4].setComponents(l,f,p,x).normalize(),r[5].setComponents(c-l,h-f,m-p,R-x).normalize();else if(r[4].setComponents(c-l,h-f,m-p,R-x).normalize(),t===br)r[5].setComponents(c+l,h+f,m+p,R+x).normalize();else if(t===Xu)r[5].setComponents(l,f,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(e){Qs.center.set(0,0,0);const t=n2.distanceTo(e.center);return Qs.radius=.7071067811865476+t,Qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Yc.x=r.normal.x>0?e.max.x:e.min.x,Yc.y=r.normal.y>0?e.max.y:e.min.y,Yc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Yc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tv extends ri{constructor(e=[],t=Lo,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jl extends ri{constructor(e,t,i=Dr,r,s,o,a=Cn,l=Cn,c,u=cs,d=1){if(u!==cs&&u!==xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class i2 extends Jl{constructor(e,t=Dr,i=Lo,r,s,o=Cn,a=Cn,l,c=cs){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Av extends ri{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class lc extends fs{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ts(c,3)),this.setAttribute("normal",new ts(u,3)),this.setAttribute("uv",new ts(d,2));function g(_,p,m,v,M,x,R,A,C,b,E){const F=x/C,U=R/b,L=x/2,V=R/2,k=A/2,G=C+1,X=b+1;let B=0,q=0;const j=new se;for(let N=0;N<X;N++){const le=N*U-V;for(let me=0;me<G;me++){const ge=me*F-L;j[_]=ge*v,j[p]=le*M,j[m]=k,c.push(j.x,j.y,j.z),j[_]=0,j[p]=0,j[m]=A>0?1:-1,u.push(j.x,j.y,j.z),d.push(me/C),d.push(1-N/b),B+=1}}for(let N=0;N<b;N++)for(let le=0;le<C;le++){const me=f+le+G*N,ge=f+le+G*(N+1),ve=f+(le+1)+G*(N+1),Te=f+(le+1)+G*N;l.push(me,ge,Te),l.push(ge,ve,Te),q+=6}a.addGroup(h,q,E),h+=q,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class cc extends fs{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,h=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const v=m*f-o;for(let M=0;M<c;M++){const x=M*d-s;g.push(x,-v,0),_.push(0,0,1),p.push(M/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const M=v+c*m,x=v+c*(m+1),R=v+1+c*(m+1),A=v+1+c*m;h.push(M,x,A),h.push(x,R,A)}this.setIndex(h),this.setAttribute("position",new ts(g,3)),this.setAttribute("normal",new ts(_,3)),this.setAttribute("uv",new ts(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.width,e.height,e.widthSegments,e.heightSegments)}}function Na(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Kn(n){const e={};for(let t=0;t<n.length;t++){const i=Na(n[t]);for(const r in i)e[r]=i[r]}return e}function r2(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Cv(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const s2={clone:Na,merge:Kn};var o2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sr extends pd{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o2,this.fragmentShader=a2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Na(e.uniforms),this.uniformsGroups=r2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class l2 extends sr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class c2 extends pd{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class u2 extends pd{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qc=new se,Kc=new ka,lr=new se;class Rv extends Ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=br,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qc,Kc,lr),lr.x===1&&lr.y===1&&lr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qc,Kc,lr.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(qc,Kc,lr),lr.x===1&&lr.y===1&&lr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qc,Kc,lr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const bs=new se,$m=new bt,jm=new bt;class Qi extends Rv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ep*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ep*2*Math.atan(Math.tan(Yd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bs.x,bs.y).multiplyScalar(-e/bs.z),bs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bs.x,bs.y).multiplyScalar(-e/bs.z)}getViewSize(e,t){return this.getViewBounds(e,$m,jm),t.subVectors(jm,$m)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yd*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class t0 extends Rv{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qo=-90,ea=1;class d2 extends Ri{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qi(Qo,ea,e,t);r.layers=this.layers,this.add(r);const s=new Qi(Qo,ea,e,t);s.layers=this.layers,this.add(s);const o=new Qi(Qo,ea,e,t);o.layers=this.layers,this.add(o);const a=new Qi(Qo,ea,e,t);a.layers=this.layers,this.add(a);const l=new Qi(Qo,ea,e,t);l.layers=this.layers,this.add(l);const c=new Qi(Qo,ea,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===br)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class f2 extends Qi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Ym(n,e,t,i){const r=h2(i);switch(t){case mv:return n*e;case _v:return n*e/r.components*r.byteLength;case Yp:return n*e/r.components*r.byteLength;case Ua:return n*e*2/r.components*r.byteLength;case qp:return n*e*2/r.components*r.byteLength;case gv:return n*e*3/r.components*r.byteLength;case tr:return n*e*4/r.components*r.byteLength;case Kp:return n*e*4/r.components*r.byteLength;case mu:case gu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _u:case xu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mh:case Eh:return Math.max(n,16)*Math.max(e,8)/4;case Sh:case wh:return Math.max(n,8)*Math.max(e,8)/2;case Th:case Ah:case Rh:case Ph:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ch:case Dh:case Lh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case kh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case zh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Xh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case $h:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case jh:case Yh:case qh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Kh:case Zh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Jh:case Qh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function h2(n){switch(n){case zi:case dv:return{byteLength:1,components:1};case Kl:case fv:case ls:return{byteLength:2,components:1};case $p:case jp:return{byteLength:2,components:4};case Dr:case Xp:case yr:return{byteLength:4,components:1};case hv:case pv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wp}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Pv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function p2(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],_=d[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const _=d[h];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var m2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,S2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,w2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,E2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,T2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,C2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,R2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,P2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,D2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,F2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,N2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,O2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,k2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,B2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,z2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,V2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X2="gl_FragColor = linearToOutputTexel( gl_FragColor );",$2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,j2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Y2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,q2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,K2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,J2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,iE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,aE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_E=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ME=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,DE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,IE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,UE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,OE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,VE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,WE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$E=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ZE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,JE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,QE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_T=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ST=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,MT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,wT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ET=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,RT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,IT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,FT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,NT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,BT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,GT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$T=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:m2,alphahash_pars_fragment:g2,alphamap_fragment:_2,alphamap_pars_fragment:x2,alphatest_fragment:v2,alphatest_pars_fragment:y2,aomap_fragment:b2,aomap_pars_fragment:S2,batching_pars_vertex:M2,batching_vertex:w2,begin_vertex:E2,beginnormal_vertex:T2,bsdfs:A2,iridescence_fragment:C2,bumpmap_pars_fragment:R2,clipping_planes_fragment:P2,clipping_planes_pars_fragment:D2,clipping_planes_pars_vertex:L2,clipping_planes_vertex:I2,color_fragment:U2,color_pars_fragment:F2,color_pars_vertex:N2,color_vertex:O2,common:k2,cube_uv_reflection_fragment:B2,defaultnormal_vertex:z2,displacementmap_pars_vertex:V2,displacementmap_vertex:H2,emissivemap_fragment:G2,emissivemap_pars_fragment:W2,colorspace_fragment:X2,colorspace_pars_fragment:$2,envmap_fragment:j2,envmap_common_pars_fragment:Y2,envmap_pars_fragment:q2,envmap_pars_vertex:K2,envmap_physical_pars_fragment:aE,envmap_vertex:Z2,fog_vertex:J2,fog_pars_vertex:Q2,fog_fragment:eE,fog_pars_fragment:tE,gradientmap_pars_fragment:nE,lightmap_pars_fragment:iE,lights_lambert_fragment:rE,lights_lambert_pars_fragment:sE,lights_pars_begin:oE,lights_toon_fragment:lE,lights_toon_pars_fragment:cE,lights_phong_fragment:uE,lights_phong_pars_fragment:dE,lights_physical_fragment:fE,lights_physical_pars_fragment:hE,lights_fragment_begin:pE,lights_fragment_maps:mE,lights_fragment_end:gE,logdepthbuf_fragment:_E,logdepthbuf_pars_fragment:xE,logdepthbuf_pars_vertex:vE,logdepthbuf_vertex:yE,map_fragment:bE,map_pars_fragment:SE,map_particle_fragment:ME,map_particle_pars_fragment:wE,metalnessmap_fragment:EE,metalnessmap_pars_fragment:TE,morphinstance_vertex:AE,morphcolor_vertex:CE,morphnormal_vertex:RE,morphtarget_pars_vertex:PE,morphtarget_vertex:DE,normal_fragment_begin:LE,normal_fragment_maps:IE,normal_pars_fragment:UE,normal_pars_vertex:FE,normal_vertex:NE,normalmap_pars_fragment:OE,clearcoat_normal_fragment_begin:kE,clearcoat_normal_fragment_maps:BE,clearcoat_pars_fragment:zE,iridescence_pars_fragment:VE,opaque_fragment:HE,packing:GE,premultiplied_alpha_fragment:WE,project_vertex:XE,dithering_fragment:$E,dithering_pars_fragment:jE,roughnessmap_fragment:YE,roughnessmap_pars_fragment:qE,shadowmap_pars_fragment:KE,shadowmap_pars_vertex:ZE,shadowmap_vertex:JE,shadowmask_pars_fragment:QE,skinbase_vertex:eT,skinning_pars_vertex:tT,skinning_vertex:nT,skinnormal_vertex:iT,specularmap_fragment:rT,specularmap_pars_fragment:sT,tonemapping_fragment:oT,tonemapping_pars_fragment:aT,transmission_fragment:lT,transmission_pars_fragment:cT,uv_pars_fragment:uT,uv_pars_vertex:dT,uv_vertex:fT,worldpos_vertex:hT,background_vert:pT,background_frag:mT,backgroundCube_vert:gT,backgroundCube_frag:_T,cube_vert:xT,cube_frag:vT,depth_vert:yT,depth_frag:bT,distance_vert:ST,distance_frag:MT,equirect_vert:wT,equirect_frag:ET,linedashed_vert:TT,linedashed_frag:AT,meshbasic_vert:CT,meshbasic_frag:RT,meshlambert_vert:PT,meshlambert_frag:DT,meshmatcap_vert:LT,meshmatcap_frag:IT,meshnormal_vert:UT,meshnormal_frag:FT,meshphong_vert:NT,meshphong_frag:OT,meshphysical_vert:kT,meshphysical_frag:BT,meshtoon_vert:zT,meshtoon_frag:VT,points_vert:HT,points_frag:GT,shadow_vert:WT,shadow_frag:XT,sprite_vert:$T,sprite_frag:jT},ze={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},mr={basic:{uniforms:Kn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Kn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Kn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Kn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Kn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Ot(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Kn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Kn([ze.points,ze.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Kn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Kn([ze.common,ze.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Kn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Kn([ze.sprite,ze.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Kn([ze.common,ze.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Kn([ze.lights,ze.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};mr.physical={uniforms:Kn([mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Zc={r:0,b:0,g:0},eo=new us,YT=new cn;function qT(n,e,t,i,r,s){const o=new Ot(0);let a=r===!0?0:1,l,c,u=null,d=0,f=null;function h(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){const x=v.backgroundBlurriness>0;M=e.get(M,x)}return M}function g(v){let M=!1;const x=h(v);x===null?p(o,a):x&&x.isColor&&(p(x,1),M=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,M){const x=h(M);x&&(x.isCubeTexture||x.mapping===hd)?(c===void 0&&(c=new Lr(new lc(1,1,1),new sr({name:"BackgroundCubeMaterial",uniforms:Na(mr.backgroundCube.uniforms),vertexShader:mr.backgroundCube.vertexShader,fragmentShader:mr.backgroundCube.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),eo.copy(M.backgroundRotation),eo.x*=-1,eo.y*=-1,eo.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(eo.y*=-1,eo.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(YT.makeRotationFromEuler(eo)),c.material.toneMapped=St.getTransfer(x.colorSpace)!==Ut,(u!==x||d!==x.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Lr(new cc(2,2),new sr({name:"BackgroundMaterial",uniforms:Na(mr.background.uniforms),vertexShader:mr.background.vertexShader,fragmentShader:mr.background.fragmentShader,side:zs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=St.getTransfer(x.colorSpace)!==Ut,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,M){v.getRGB(Zc,Cv(n)),t.buffers.color.setClear(Zc.r,Zc.g,Zc.b,M,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,M=1){o.set(v),a=M,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:g,addToRenderList:_,dispose:m}}function KT(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(U,L,V,k,G){let X=!1;const B=d(U,k,V,L);s!==B&&(s=B,c(s.object)),X=h(U,k,V,G),X&&g(U,k,V,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(U,L,V,k),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function u(U){return n.deleteVertexArray(U)}function d(U,L,V,k){const G=k.wireframe===!0;let X=i[L.id];X===void 0&&(X={},i[L.id]=X);const B=U.isInstancedMesh===!0?U.id:0;let q=X[B];q===void 0&&(q={},X[B]=q);let j=q[V.id];j===void 0&&(j={},q[V.id]=j);let N=j[G];return N===void 0&&(N=f(l()),j[G]=N),N}function f(U){const L=[],V=[],k=[];for(let G=0;G<t;G++)L[G]=0,V[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:k,object:U,attributes:{},index:null}}function h(U,L,V,k){const G=s.attributes,X=L.attributes;let B=0;const q=V.getAttributes();for(const j in q)if(q[j].location>=0){const le=G[j];let me=X[j];if(me===void 0&&(j==="instanceMatrix"&&U.instanceMatrix&&(me=U.instanceMatrix),j==="instanceColor"&&U.instanceColor&&(me=U.instanceColor)),le===void 0||le.attribute!==me||me&&le.data!==me.data)return!0;B++}return s.attributesNum!==B||s.index!==k}function g(U,L,V,k){const G={},X=L.attributes;let B=0;const q=V.getAttributes();for(const j in q)if(q[j].location>=0){let le=X[j];le===void 0&&(j==="instanceMatrix"&&U.instanceMatrix&&(le=U.instanceMatrix),j==="instanceColor"&&U.instanceColor&&(le=U.instanceColor));const me={};me.attribute=le,le&&le.data&&(me.data=le.data),G[j]=me,B++}s.attributes=G,s.attributesNum=B,s.index=k}function _(){const U=s.newAttributes;for(let L=0,V=U.length;L<V;L++)U[L]=0}function p(U){m(U,0)}function m(U,L){const V=s.newAttributes,k=s.enabledAttributes,G=s.attributeDivisors;V[U]=1,k[U]===0&&(n.enableVertexAttribArray(U),k[U]=1),G[U]!==L&&(n.vertexAttribDivisor(U,L),G[U]=L)}function v(){const U=s.newAttributes,L=s.enabledAttributes;for(let V=0,k=L.length;V<k;V++)L[V]!==U[V]&&(n.disableVertexAttribArray(V),L[V]=0)}function M(U,L,V,k,G,X,B){B===!0?n.vertexAttribIPointer(U,L,V,G,X):n.vertexAttribPointer(U,L,V,k,G,X)}function x(U,L,V,k){_();const G=k.attributes,X=V.getAttributes(),B=L.defaultAttributeValues;for(const q in X){const j=X[q];if(j.location>=0){let N=G[q];if(N===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(N=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(N=U.instanceColor)),N!==void 0){const le=N.normalized,me=N.itemSize,ge=e.get(N);if(ge===void 0)continue;const ve=ge.buffer,Te=ge.type,J=ge.bytesPerElement,ue=Te===n.INT||Te===n.UNSIGNED_INT||N.gpuType===Xp;if(N.isInterleavedBufferAttribute){const oe=N.data,Re=oe.stride,Ae=N.offset;if(oe.isInstancedInterleavedBuffer){for(let ae=0;ae<j.locationSize;ae++)m(j.location+ae,oe.meshPerAttribute);U.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ae=0;ae<j.locationSize;ae++)p(j.location+ae);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let ae=0;ae<j.locationSize;ae++)M(j.location+ae,me/j.locationSize,Te,le,Re*J,(Ae+me/j.locationSize*ae)*J,ue)}else{if(N.isInstancedBufferAttribute){for(let oe=0;oe<j.locationSize;oe++)m(j.location+oe,N.meshPerAttribute);U.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let oe=0;oe<j.locationSize;oe++)p(j.location+oe);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let oe=0;oe<j.locationSize;oe++)M(j.location+oe,me/j.locationSize,Te,le,me*J,me/j.locationSize*oe*J,ue)}}else if(B!==void 0){const le=B[q];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(j.location,le);break;case 3:n.vertexAttrib3fv(j.location,le);break;case 4:n.vertexAttrib4fv(j.location,le);break;default:n.vertexAttrib1fv(j.location,le)}}}}v()}function R(){E();for(const U in i){const L=i[U];for(const V in L){const k=L[V];for(const G in k){const X=k[G];for(const B in X)u(X[B].object),delete X[B];delete k[G]}}delete i[U]}}function A(U){if(i[U.id]===void 0)return;const L=i[U.id];for(const V in L){const k=L[V];for(const G in k){const X=k[G];for(const B in X)u(X[B].object),delete X[B];delete k[G]}}delete i[U.id]}function C(U){for(const L in i){const V=i[L];for(const k in V){const G=V[k];if(G[U.id]===void 0)continue;const X=G[U.id];for(const B in X)u(X[B].object),delete X[B];delete G[U.id]}}}function b(U){for(const L in i){const V=i[L],k=U.isInstancedMesh===!0?U.id:0,G=V[k];if(G!==void 0){for(const X in G){const B=G[X];for(const q in B)u(B[q].object),delete B[q];delete G[X]}delete V[k],Object.keys(V).length===0&&delete i[L]}}}function E(){F(),o=!0,s!==r&&(s=r,c(s.object))}function F(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:E,resetDefaultState:F,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfObject:b,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function ZT(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,i,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function JT(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==tr&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const b=C===ls&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==zi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==yr&&!b)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(ot("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,maxSamples:R,samples:A}}function QT(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new oo,a=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const v=s?0:i,M=v*4;let x=m.clippingState||null;l.value=x,x=u(g,f,M,h);for(let R=0;R!==M;++R)x[R]=t[R];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=h+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,x=h;M!==_;++M,x+=4)o.copy(d[M]).applyMatrix4(v,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const Ps=4,qm=[.125,.215,.35,.446,.526,.582],fo=20,eA=256,Ja=new t0,Km=new Ot;let vf=null,yf=0,bf=0,Sf=!1;const tA=new se;class Zm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=tA}=s;vf=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),bf=this._renderer.getActiveMipmapLevel(),Sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vf,yf,bf),this._renderer.xr.enabled=Sf,e.scissorTest=!1,ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lo||e.mapping===Ia?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vf=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),bf=this._renderer.getActiveMipmapLevel(),Sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:ls,format:tr,colorSpace:Fa,depthBuffer:!1},r=Jm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jm(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=nA(s)),this._blurMaterial=rA(s,e,t),this._ggxMaterial=iA(s,e,t)}return r}_compileMaterial(e){const t=new Lr(new fs,e);this._renderer.compile(t,Ja)}_sceneToCubeUV(e,t,i,r,s){const l=new Qi(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Km),d.toneMapping=Er,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Lr(new lc,new wv({name:"PMREM.Background",side:hi,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let m=!1;const v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,m=!0):(p.color.copy(Km),m=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const R=this._cubeSize;ta(r,x*R,M>2?R:0,R,R),d.setRenderTarget(r),m&&d.render(_,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Lo||e.mapping===Ia;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=eg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ta(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ja)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,h=d*f,{_lodMax:g}=this,_=this._sizeLods[i],p=3*_*(i>g-Ps?i-g+Ps:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=g-t,ta(s,p,m,3*_,2*_),r.setRenderTarget(s),r.render(a,Ja),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,ta(e,p,m,3*_,2*_),r.setRenderTarget(e),r.render(a,Ja)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*fo-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):fo;p>fo&&ot(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fo}`);const m=[];let v=0;for(let C=0;C<fo;++C){const b=C/_,E=Math.exp(-b*b/2);m.push(E),C===0?v+=E:C<p&&(v+=2*E)}for(let C=0;C<m.length;C++)m[C]=m[C]/v;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;const x=this._sizeLods[r],R=3*x*(r>M-Ps?r-M+Ps:0),A=4*(this._cubeSize-x);ta(t,R,A,3*x,2*x),l.setRenderTarget(t),l.render(d,Ja)}}function nA(n){const e=[],t=[],i=[];let r=n;const s=n-Ps+1+qm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Ps?l=qm[o-n+Ps-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,_=3,p=2,m=1,v=new Float32Array(_*g*h),M=new Float32Array(p*g*h),x=new Float32Array(m*g*h);for(let A=0;A<h;A++){const C=A%3*2/3-1,b=A>2?0:-1,E=[C,b,0,C+2/3,b,0,C+2/3,b+1,0,C,b,0,C+2/3,b+1,0,C,b+1,0];v.set(E,_*g*A),M.set(f,p*g*A);const F=[A,A,A,A,A,A];x.set(F,m*g*A)}const R=new fs;R.setAttribute("position",new Ar(v,_)),R.setAttribute("uv",new Ar(M,p)),R.setAttribute("faceIndex",new Ar(x,m)),i.push(new Lr(R,null)),r>Ps&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Jm(n,e,t){const i=new Tr(n,e,t);return i.texture.mapping=hd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ta(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function iA(n,e,t){return new sr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:eA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:md(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function rA(n,e,t){const i=new Float32Array(fo),r=new se(0,1,0);return new sr({name:"SphericalGaussianBlur",defines:{n:fo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function Qm(){return new sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function eg(){return new sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function md(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Dv extends Tr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Tv(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new lc(5,5,5),s=new sr({name:"CubemapFromEquirect",uniforms:Na(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hi,blending:Qr});s.uniforms.tEquirect.value=t;const o=new Lr(r,s),a=t.minFilter;return t.minFilter===_o&&(t.minFilter=Gn),new d2(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function sA(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?o(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Xd||h===$d)if(e.has(f)){const g=e.get(f).texture;return a(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const _=new Dv(g.height);return _.fromEquirectangularTexture(n,f),e.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const h=f.mapping,g=h===Xd||h===$d,_=h===Lo||h===Ia;if(g||_){let p=t.get(f);const m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new Zm(n)),p=g?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const v=f.image;return g&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new Zm(n)),p=g?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,h){return h===Xd?f.mapping=Lo:h===$d&&(f.mapping=Ia),f}function l(f){let h=0;const g=6;for(let _=0;_<g;_++)f[_]!==void 0&&h++;return h===g}function c(f){const h=f.target;h.removeEventListener("dispose",c);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function oA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ju("WebGLRenderer: "+i+" extension not supported."),r}}}function aA(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(h!==null){const v=h.array;_=h.version;for(let M=0,x=v.length;M<x;M+=3){const R=v[M+0],A=v[M+1],C=v[M+2];f.push(R,A,A,C,C,R)}}else{const v=g.array;_=g.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const R=M+0,A=M+1,C=M+2;f.push(R,A,A,C,C,R)}}const p=new(g.count>=65535?Mv:Sv)(f,1);p.version=_;const m=s.get(d);m&&e.remove(m),s.set(d,p)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function lA(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function c(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,f*o,g),t.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,g);let p=0;for(let m=0;m<g;m++)p+=h[m];t.update(p,i,1)}function d(f,h,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,h[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,_,0,g);let m=0;for(let v=0;v<g;v++)m+=h[v]*_[v];t.update(m,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function cA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Et("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function uA(n,e,t){const i=new WeakMap,r=new nn;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let F=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",F)};var h=F;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),p===!0&&(x=3);let R=a.attributes.position.count*x,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const C=new Float32Array(R*A*4*d),b=new vv(C,R,A,d);b.type=yr,b.needsUpdate=!0;const E=x*4;for(let U=0;U<d;U++){const L=m[U],V=v[U],k=M[U],G=R*A*4*U;for(let X=0;X<L.count;X++){const B=X*E;g===!0&&(r.fromBufferAttribute(L,X),C[G+B+0]=r.x,C[G+B+1]=r.y,C[G+B+2]=r.z,C[G+B+3]=0),_===!0&&(r.fromBufferAttribute(V,X),C[G+B+4]=r.x,C[G+B+5]=r.y,C[G+B+6]=r.z,C[G+B+7]=0),p===!0&&(r.fromBufferAttribute(k,X),C[G+B+8]=r.x,C[G+B+9]=r.y,C[G+B+10]=r.z,C[G+B+11]=k.itemSize===4?r.w:1)}}f={count:d,texture:b,size:new bt(R,A)},i.set(a,f),a.addEventListener("dispose",F)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function dA(n,e,t,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const fA={[iv]:"LINEAR_TONE_MAPPING",[rv]:"REINHARD_TONE_MAPPING",[sv]:"CINEON_TONE_MAPPING",[ov]:"ACES_FILMIC_TONE_MAPPING",[lv]:"AGX_TONE_MAPPING",[cv]:"NEUTRAL_TONE_MAPPING",[av]:"CUSTOM_TONE_MAPPING"};function hA(n,e,t,i,r){const s=new Tr(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),o=new Tr(e,t,{type:ls,depthBuffer:!1,stencilBuffer:!1}),a=new fs;a.setAttribute("position",new ts([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ts([0,2,0,0,2,0],2));const l=new l2({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Lr(a,l),u=new t0(-1,1,1,-1,0,1);let d=null,f=null,h=!1,g,_=null,p=[],m=!1;this.setSize=function(v,M){s.setSize(v,M),o.setSize(v,M);for(let x=0;x<p.length;x++){const R=p[x];R.setSize&&R.setSize(v,M)}},this.setEffects=function(v){p=v,m=p.length>0&&p[0].isRenderPass===!0;const M=s.width,x=s.height;for(let R=0;R<p.length;R++){const A=p[R];A.setSize&&A.setSize(M,x)}},this.begin=function(v,M){if(h||v.toneMapping===Er&&p.length===0)return!1;if(_=M,M!==null){const x=M.width,R=M.height;(s.width!==x||s.height!==R)&&this.setSize(x,R)}return m===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=Er,!0},this.hasRenderPass=function(){return m},this.end=function(v,M){v.toneMapping=g,h=!0;let x=s,R=o;for(let A=0;A<p.length;A++){const C=p[A];if(C.enabled!==!1&&(C.render(v,R,x,M),C.needsSwap!==!1)){const b=x;x=R,R=b}}if(d!==v.outputColorSpace||f!==v.toneMapping){d=v.outputColorSpace,f=v.toneMapping,l.defines={},St.getTransfer(d)===Ut&&(l.defines.SRGB_TRANSFER="");const A=fA[f];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,v.setRenderTarget(_),v.render(c,u),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Lv=new ri,tp=new Jl(1,1),Iv=new vv,Uv=new kw,Fv=new Tv,tg=[],ng=[],ig=new Float32Array(16),rg=new Float32Array(9),sg=new Float32Array(4);function Ba(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=tg[r];if(s===void 0&&(s=new Float32Array(r),tg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function mn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function gd(n,e){let t=ng[e];t===void 0&&(t=new Int32Array(e),ng[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function pA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function mA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2fv(this.addr,e),gn(t,e)}}function gA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;n.uniform3fv(this.addr,e),gn(t,e)}}function _A(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4fv(this.addr,e),gn(t,e)}}function xA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;sg.set(i),n.uniformMatrix2fv(this.addr,!1,sg),gn(t,i)}}function vA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;rg.set(i),n.uniformMatrix3fv(this.addr,!1,rg),gn(t,i)}}function yA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;ig.set(i),n.uniformMatrix4fv(this.addr,!1,ig),gn(t,i)}}function bA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function SA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2iv(this.addr,e),gn(t,e)}}function MA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;n.uniform3iv(this.addr,e),gn(t,e)}}function wA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4iv(this.addr,e),gn(t,e)}}function EA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function TA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2uiv(this.addr,e),gn(t,e)}}function AA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;n.uniform3uiv(this.addr,e),gn(t,e)}}function CA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4uiv(this.addr,e),gn(t,e)}}function RA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(tp.compareFunction=t.isReversedDepthBuffer()?Jp:Zp,s=tp):s=Lv,t.setTexture2D(e||s,r)}function PA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Uv,r)}function DA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Fv,r)}function LA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Iv,r)}function IA(n){switch(n){case 5126:return pA;case 35664:return mA;case 35665:return gA;case 35666:return _A;case 35674:return xA;case 35675:return vA;case 35676:return yA;case 5124:case 35670:return bA;case 35667:case 35671:return SA;case 35668:case 35672:return MA;case 35669:case 35673:return wA;case 5125:return EA;case 36294:return TA;case 36295:return AA;case 36296:return CA;case 35678:case 36198:case 36298:case 36306:case 35682:return RA;case 35679:case 36299:case 36307:return PA;case 35680:case 36300:case 36308:case 36293:return DA;case 36289:case 36303:case 36311:case 36292:return LA}}function UA(n,e){n.uniform1fv(this.addr,e)}function FA(n,e){const t=Ba(e,this.size,2);n.uniform2fv(this.addr,t)}function NA(n,e){const t=Ba(e,this.size,3);n.uniform3fv(this.addr,t)}function OA(n,e){const t=Ba(e,this.size,4);n.uniform4fv(this.addr,t)}function kA(n,e){const t=Ba(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function BA(n,e){const t=Ba(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zA(n,e){const t=Ba(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function VA(n,e){n.uniform1iv(this.addr,e)}function HA(n,e){n.uniform2iv(this.addr,e)}function GA(n,e){n.uniform3iv(this.addr,e)}function WA(n,e){n.uniform4iv(this.addr,e)}function XA(n,e){n.uniform1uiv(this.addr,e)}function $A(n,e){n.uniform2uiv(this.addr,e)}function jA(n,e){n.uniform3uiv(this.addr,e)}function YA(n,e){n.uniform4uiv(this.addr,e)}function qA(n,e,t){const i=this.cache,r=e.length,s=gd(t,r);mn(i,s)||(n.uniform1iv(this.addr,s),gn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=tp:o=Lv;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function KA(n,e,t){const i=this.cache,r=e.length,s=gd(t,r);mn(i,s)||(n.uniform1iv(this.addr,s),gn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Uv,s[o])}function ZA(n,e,t){const i=this.cache,r=e.length,s=gd(t,r);mn(i,s)||(n.uniform1iv(this.addr,s),gn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Fv,s[o])}function JA(n,e,t){const i=this.cache,r=e.length,s=gd(t,r);mn(i,s)||(n.uniform1iv(this.addr,s),gn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Iv,s[o])}function QA(n){switch(n){case 5126:return UA;case 35664:return FA;case 35665:return NA;case 35666:return OA;case 35674:return kA;case 35675:return BA;case 35676:return zA;case 5124:case 35670:return VA;case 35667:case 35671:return HA;case 35668:case 35672:return GA;case 35669:case 35673:return WA;case 5125:return XA;case 36294:return $A;case 36295:return jA;case 36296:return YA;case 35678:case 36198:case 36298:case 36306:case 35682:return qA;case 35679:case 36299:case 36307:return KA;case 35680:case 36300:case 36308:case 36293:return ZA;case 36289:case 36303:case 36311:case 36292:return JA}}class e3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=IA(t.type)}}class t3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=QA(t.type)}}class n3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Mf=/(\w+)(\])?(\[|\.)?/g;function og(n,e){n.seq.push(e),n.map[e.id]=e}function i3(n,e,t){const i=n.name,r=i.length;for(Mf.lastIndex=0;;){const s=Mf.exec(i),o=Mf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){og(t,c===void 0?new e3(a,n,e):new t3(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new n3(a),og(t,d)),t=d}}}class vu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);i3(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ag(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const r3=37297;let s3=0;function o3(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const lg=new dt;function a3(n){St._getMatrix(lg,St.workingColorSpace,n);const e=`mat3( ${lg.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(n)){case Wu:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function cg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+o3(n.getShaderSource(e),a)}else return s}function l3(n,e){const t=a3(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const c3={[iv]:"Linear",[rv]:"Reinhard",[sv]:"Cineon",[ov]:"ACESFilmic",[lv]:"AgX",[cv]:"Neutral",[av]:"Custom"};function u3(n,e){const t=c3[e];return t===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Jc=new se;function d3(){St.getLuminanceCoefficients(Jc);const n=Jc.x.toFixed(4),e=Jc.y.toFixed(4),t=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f3(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fl).join(`
`)}function h3(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function p3(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function fl(n){return n!==""}function ug(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const m3=/^[ \t]*#include +<([\w\d./]+)>/gm;function np(n){return n.replace(m3,_3)}const g3=new Map;function _3(n,e){let t=ht[e];if(t===void 0){const i=g3.get(e);if(i!==void 0)t=ht[i],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return np(t)}const x3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fg(n){return n.replace(x3,v3)}function v3(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const y3={[pu]:"SHADOWMAP_TYPE_PCF",[dl]:"SHADOWMAP_TYPE_VSM"};function b3(n){return y3[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const S3={[Lo]:"ENVMAP_TYPE_CUBE",[Ia]:"ENVMAP_TYPE_CUBE",[hd]:"ENVMAP_TYPE_CUBE_UV"};function M3(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":S3[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const w3={[Ia]:"ENVMAP_MODE_REFRACTION"};function E3(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":w3[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const T3={[nv]:"ENVMAP_BLENDING_MULTIPLY",[gw]:"ENVMAP_BLENDING_MIX",[_w]:"ENVMAP_BLENDING_ADD"};function A3(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":T3[n.combine]||"ENVMAP_BLENDING_NONE"}function C3(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function R3(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=b3(t),c=M3(t),u=E3(t),d=A3(t),f=C3(t),h=f3(t),g=h3(s),_=r.createProgram();let p,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fl).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fl).join(`
`),m.length>0&&(m+=`
`)):(p=[hg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fl).join(`
`),m=[hg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Er?"#define TONE_MAPPING":"",t.toneMapping!==Er?ht.tonemapping_pars_fragment:"",t.toneMapping!==Er?u3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,l3("linearToOutputTexel",t.outputColorSpace),d3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fl).join(`
`)),o=np(o),o=ug(o,t),o=dg(o,t),a=np(a),a=ug(a,t),a=dg(a,t),o=fg(o),a=fg(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Rm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=v+p+o,x=v+m+a,R=ag(r,r.VERTEX_SHADER,M),A=ag(r,r.FRAGMENT_SHADER,x);r.attachShader(_,R),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(U){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(_)||"",V=r.getShaderInfoLog(R)||"",k=r.getShaderInfoLog(A)||"",G=L.trim(),X=V.trim(),B=k.trim();let q=!0,j=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,R,A);else{const N=cg(r,R,"vertex"),le=cg(r,A,"fragment");Et("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+G+`
`+N+`
`+le)}else G!==""?ot("WebGLProgram: Program Info Log:",G):(X===""||B==="")&&(j=!1);j&&(U.diagnostics={runnable:q,programLog:G,vertexShader:{log:X,prefix:p},fragmentShader:{log:B,prefix:m}})}r.deleteShader(R),r.deleteShader(A),b=new vu(r,_),E=p3(r,_)}let b;this.getUniforms=function(){return b===void 0&&C(this),b};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(_,r3)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=s3++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}let P3=0;class D3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new L3(e),t.set(e,i)),i}}class L3{constructor(e){this.id=P3++,this.code=e,this.usedTimes=0}}function I3(n,e,t,i,r,s){const o=new yv,a=new D3,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return l.add(b),b===0?"uv":`uv${b}`}function _(b,E,F,U,L){const V=U.fog,k=L.geometry,G=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,X=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,B=e.get(b.envMap||G,X),q=B&&B.mapping===hd?B.image.height:null,j=h[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&ot("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const N=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,le=N!==void 0?N.length:0;let me=0;k.morphAttributes.position!==void 0&&(me=1),k.morphAttributes.normal!==void 0&&(me=2),k.morphAttributes.color!==void 0&&(me=3);let ge,ve,Te,J;if(j){const Ve=mr[j];ge=Ve.vertexShader,ve=Ve.fragmentShader}else ge=b.vertexShader,ve=b.fragmentShader,a.update(b),Te=a.getVertexShaderID(b),J=a.getFragmentShaderID(b);const ue=n.getRenderTarget(),oe=n.state.buffers.depth.getReversed(),Re=L.isInstancedMesh===!0,Ae=L.isBatchedMesh===!0,ae=!!b.map,w=!!b.matcap,T=!!B,H=!!b.aoMap,ee=!!b.lightMap,Y=!!b.bumpMap,O=!!b.normalMap,I=!!b.displacementMap,_e=!!b.emissiveMap,fe=!!b.metalnessMap,ne=!!b.roughnessMap,pe=b.anisotropy>0,P=b.clearcoat>0,S=b.dispersion>0,z=b.iridescence>0,Z=b.sheen>0,Q=b.transmission>0,K=pe&&!!b.anisotropyMap,Me=P&&!!b.clearcoatMap,xe=P&&!!b.clearcoatNormalMap,He=P&&!!b.clearcoatRoughnessMap,Le=z&&!!b.iridescenceMap,be=z&&!!b.iridescenceThicknessMap,we=Z&&!!b.sheenColorMap,Pe=Z&&!!b.sheenRoughnessMap,Ne=!!b.specularMap,Ie=!!b.specularColorMap,et=!!b.specularIntensityMap,W=Q&&!!b.transmissionMap,Ce=Q&&!!b.thicknessMap,Ee=!!b.gradientMap,Oe=!!b.alphaMap,Se=b.alphaTest>0,ce=!!b.alphaHash,Ge=!!b.extensions;let Je=Er;b.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Je=n.toneMapping);const Mt={shaderID:j,shaderType:b.type,shaderName:b.name,vertexShader:ge,fragmentShader:ve,defines:b.defines,customVertexShaderID:Te,customFragmentShaderID:J,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Ae,batchingColor:Ae&&L._colorsTexture!==null,instancing:Re,instancingColor:Re&&L.instanceColor!==null,instancingMorph:Re&&L.morphTexture!==null,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Fa,alphaToCoverage:!!b.alphaToCoverage,map:ae,matcap:w,envMap:T,envMapMode:T&&B.mapping,envMapCubeUVHeight:q,aoMap:H,lightMap:ee,bumpMap:Y,normalMap:O,displacementMap:I,emissiveMap:_e,normalMapObjectSpace:O&&b.normalMapType===bw,normalMapTangentSpace:O&&b.normalMapType===yw,metalnessMap:fe,roughnessMap:ne,anisotropy:pe,anisotropyMap:K,clearcoat:P,clearcoatMap:Me,clearcoatNormalMap:xe,clearcoatRoughnessMap:He,dispersion:S,iridescence:z,iridescenceMap:Le,iridescenceThicknessMap:be,sheen:Z,sheenColorMap:we,sheenRoughnessMap:Pe,specularMap:Ne,specularColorMap:Ie,specularIntensityMap:et,transmission:Q,transmissionMap:W,thicknessMap:Ce,gradientMap:Ee,opaque:b.transparent===!1&&b.blending===Sa&&b.alphaToCoverage===!1,alphaMap:Oe,alphaTest:Se,alphaHash:ce,combine:b.combine,mapUv:ae&&g(b.map.channel),aoMapUv:H&&g(b.aoMap.channel),lightMapUv:ee&&g(b.lightMap.channel),bumpMapUv:Y&&g(b.bumpMap.channel),normalMapUv:O&&g(b.normalMap.channel),displacementMapUv:I&&g(b.displacementMap.channel),emissiveMapUv:_e&&g(b.emissiveMap.channel),metalnessMapUv:fe&&g(b.metalnessMap.channel),roughnessMapUv:ne&&g(b.roughnessMap.channel),anisotropyMapUv:K&&g(b.anisotropyMap.channel),clearcoatMapUv:Me&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:xe&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:be&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:we&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&g(b.sheenRoughnessMap.channel),specularMapUv:Ne&&g(b.specularMap.channel),specularColorMapUv:Ie&&g(b.specularColorMap.channel),specularIntensityMapUv:et&&g(b.specularIntensityMap.channel),transmissionMapUv:W&&g(b.transmissionMap.channel),thicknessMapUv:Ce&&g(b.thicknessMap.channel),alphaMapUv:Oe&&g(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(O||pe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(ae||Oe),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||k.attributes.normal===void 0&&O===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:oe,skinning:L.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:me,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:Je,decodeVideoTexture:ae&&b.map.isVideoTexture===!0&&St.getTransfer(b.map.colorSpace)===Ut,decodeVideoTextureEmissive:_e&&b.emissiveMap.isVideoTexture===!0&&St.getTransfer(b.emissiveMap.colorSpace)===Ut,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Yr,flipSided:b.side===hi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ge&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&b.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function p(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)E.push(F),E.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(m(E,b),v(E,b),E.push(n.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function m(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function v(b,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),b.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),b.push(o.mask)}function M(b){const E=h[b.type];let F;if(E){const U=mr[E];F=s2.clone(U.uniforms)}else F=b.uniforms;return F}function x(b,E){let F=u.get(E);return F!==void 0?++F.usedTimes:(F=new R3(n,E,b,r),c.push(F),u.set(E,F)),F}function R(b){if(--b.usedTimes===0){const E=c.indexOf(b);c[E]=c[c.length-1],c.pop(),u.delete(b.cacheKey),b.destroy()}}function A(b){a.remove(b)}function C(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:M,acquireProgram:x,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:C}}function U3(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function F3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function pg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,g,_,p,m){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:h,material:g,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:m},n[e]=v):(v.id=f.id,v.object=f,v.geometry=h,v.material=g,v.materialVariant=o(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=p,v.group=m),e++,v}function l(f,h,g,_,p,m){const v=a(f,h,g,_,p,m);g.transmission>0?i.push(v):g.transparent===!0?r.push(v):t.push(v)}function c(f,h,g,_,p,m){const v=a(f,h,g,_,p,m);g.transmission>0?i.unshift(v):g.transparent===!0?r.unshift(v):t.unshift(v)}function u(f,h){t.length>1&&t.sort(f||F3),i.length>1&&i.sort(h||pg),r.length>1&&r.sort(h||pg)}function d(){for(let f=e,h=n.length;f<h;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function N3(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new mg,n.set(i,[o])):r>=s.length?(o=new mg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function O3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new se,color:new Ot};break;case"SpotLight":t={position:new se,direction:new se,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new se,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new se,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":t={color:new Ot,position:new se,halfWidth:new se,halfHeight:new se};break}return n[e.id]=t,t}}}function k3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let B3=0;function z3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function V3(n){const e=new O3,t=k3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new se);const r=new se,s=new cn,o=new cn;function a(c){let u=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let h=0,g=0,_=0,p=0,m=0,v=0,M=0,x=0,R=0,A=0,C=0;c.sort(z3);for(let E=0,F=c.length;E<F;E++){const U=c[E],L=U.color,V=U.intensity,k=U.distance;let G=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Ua?G=U.shadow.map.texture:G=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=L.r*V,d+=L.g*V,f+=L.b*V;else if(U.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(U.sh.coefficients[X],V);C++}else if(U.isDirectionalLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const B=U.shadow,q=t.get(U);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,i.directionalShadow[h]=q,i.directionalShadowMap[h]=G,i.directionalShadowMatrix[h]=U.shadow.matrix,v++}i.directional[h]=X,h++}else if(U.isSpotLight){const X=e.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(L).multiplyScalar(V),X.distance=k,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,i.spot[_]=X;const B=U.shadow;if(U.map&&(i.spotLightMap[R]=U.map,R++,B.updateMatrices(U),U.castShadow&&A++),i.spotLightMatrix[_]=B.matrix,U.castShadow){const q=t.get(U);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=G,x++}_++}else if(U.isRectAreaLight){const X=e.get(U);X.color.copy(L).multiplyScalar(V),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),i.rectArea[p]=X,p++}else if(U.isPointLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),X.distance=U.distance,X.decay=U.decay,U.castShadow){const B=U.shadow,q=t.get(U);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,q.shadowCameraNear=B.camera.near,q.shadowCameraFar=B.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=U.shadow.matrix,M++}i.point[g]=X,g++}else if(U.isHemisphereLight){const X=e.get(U);X.skyColor.copy(U.color).multiplyScalar(V),X.groundColor.copy(U.groundColor).multiplyScalar(V),i.hemi[m]=X,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ze.LTC_FLOAT_1,i.rectAreaLTC2=ze.LTC_FLOAT_2):(i.rectAreaLTC1=ze.LTC_HALF_1,i.rectAreaLTC2=ze.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const b=i.hash;(b.directionalLength!==h||b.pointLength!==g||b.spotLength!==_||b.rectAreaLength!==p||b.hemiLength!==m||b.numDirectionalShadows!==v||b.numPointShadows!==M||b.numSpotShadows!==x||b.numSpotMaps!==R||b.numLightProbes!==C)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,b.directionalLength=h,b.pointLength=g,b.spotLength=_,b.rectAreaLength=p,b.hemiLength=m,b.numDirectionalShadows=v,b.numPointShadows=M,b.numSpotShadows=x,b.numSpotMaps=R,b.numLightProbes=C,i.version=B3++)}function l(c,u){let d=0,f=0,h=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){const M=c[m];if(M.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),d++}else if(M.isSpotLight){const x=i.spot[h];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),h++}else if(M.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),o.identity(),s.copy(M.matrixWorld),s.premultiply(p),o.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function gg(n){const e=new V3(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function H3(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new gg(n),e.set(r,[a])):s>=o.length?(a=new gg(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const G3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,X3=[new se(1,0,0),new se(-1,0,0),new se(0,1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1)],$3=[new se(0,-1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1),new se(0,-1,0),new se(0,-1,0)],_g=new cn,Qa=new se,wf=new se;function j3(n,e,t){let i=new Ev;const r=new bt,s=new bt,o=new nn,a=new c2,l=new u2,c={},u=t.maxTextureSize,d={[zs]:hi,[hi]:zs,[Yr]:Yr},f=new sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:G3,fragmentShader:W3}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new fs;g.setAttribute("position",new Ar(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Lr(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pu;let m=this.type;this.render=function(A,C,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===ZM&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=pu);const E=n.getRenderTarget(),F=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Qr),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const V=m!==this.type;V&&C.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(G=>G.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,G=A.length;k<G;k++){const X=A[k],B=X.shadow;if(B===void 0){ot("WebGLShadowMap:",X,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const q=B.getFrameExtents();r.multiply(q),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,B.mapSize.y=s.y));const j=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=j,B.map===null||V===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===dl){if(X.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Tr(r.x,r.y,{format:Ua,type:ls,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),B.map.texture.name=X.name+".shadowMap",B.map.depthTexture=new Jl(r.x,r.y,yr),B.map.depthTexture.name=X.name+".shadowMapDepth",B.map.depthTexture.format=cs,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Cn,B.map.depthTexture.magFilter=Cn}else X.isPointLight?(B.map=new Dv(r.x),B.map.depthTexture=new i2(r.x,Dr)):(B.map=new Tr(r.x,r.y),B.map.depthTexture=new Jl(r.x,r.y,Dr)),B.map.depthTexture.name=X.name+".shadowMap",B.map.depthTexture.format=cs,this.type===pu?(B.map.depthTexture.compareFunction=j?Jp:Zp,B.map.depthTexture.minFilter=Gn,B.map.depthTexture.magFilter=Gn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Cn,B.map.depthTexture.magFilter=Cn);B.camera.updateProjectionMatrix()}const N=B.map.isWebGLCubeRenderTarget?6:1;for(let le=0;le<N;le++){if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,le),n.clear();else{le===0&&(n.setRenderTarget(B.map),n.clear());const me=B.getViewport(le);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),L.viewport(o)}if(X.isPointLight){const me=B.camera,ge=B.matrix,ve=X.distance||me.far;ve!==me.far&&(me.far=ve,me.updateProjectionMatrix()),Qa.setFromMatrixPosition(X.matrixWorld),me.position.copy(Qa),wf.copy(me.position),wf.add(X3[le]),me.up.copy($3[le]),me.lookAt(wf),me.updateMatrixWorld(),ge.makeTranslation(-Qa.x,-Qa.y,-Qa.z),_g.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),B._frustum.setFromProjectionMatrix(_g,me.coordinateSystem,me.reversedDepth)}else B.updateMatrices(X);i=B.getFrustum(),x(C,b,B.camera,X,this.type)}B.isPointLightShadow!==!0&&this.type===dl&&v(B,b),B.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(E,F,U)};function v(A,C){const b=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Tr(r.x,r.y,{format:Ua,type:ls})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,b,f,_,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,b,h,_,null)}function M(A,C,b,E){let F=null;const U=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)F=U;else if(F=b.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const L=F.uuid,V=C.uuid;let k=c[L];k===void 0&&(k={},c[L]=k);let G=k[V];G===void 0&&(G=F.clone(),k[V]=G,C.addEventListener("dispose",R)),F=G}if(F.visible=C.visible,F.wireframe=C.wireframe,E===dl?F.side=C.shadowSide!==null?C.shadowSide:C.side:F.side=C.shadowSide!==null?C.shadowSide:d[C.side],F.alphaMap=C.alphaMap,F.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,F.map=C.map,F.clipShadows=C.clipShadows,F.clippingPlanes=C.clippingPlanes,F.clipIntersection=C.clipIntersection,F.displacementMap=C.displacementMap,F.displacementScale=C.displacementScale,F.displacementBias=C.displacementBias,F.wireframeLinewidth=C.wireframeLinewidth,F.linewidth=C.linewidth,b.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const L=n.properties.get(F);L.light=b}return F}function x(A,C,b,E,F){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&F===dl)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const V=e.update(A),k=A.material;if(Array.isArray(k)){const G=V.groups;for(let X=0,B=G.length;X<B;X++){const q=G[X],j=k[q.materialIndex];if(j&&j.visible){const N=M(A,j,E,F);A.onBeforeShadow(n,A,C,b,V,N,q),n.renderBufferDirect(b,null,V,N,A,q),A.onAfterShadow(n,A,C,b,V,N,q)}}}else if(k.visible){const G=M(A,k,E,F);A.onBeforeShadow(n,A,C,b,V,G,null),n.renderBufferDirect(b,null,V,G,A,null),A.onAfterShadow(n,A,C,b,V,G,null)}}const L=A.children;for(let V=0,k=L.length;V<k;V++)x(L[V],C,b,E,F)}function R(A){A.target.removeEventListener("dispose",R);for(const b in c){const E=c[b],F=A.target.uuid;F in E&&(E[F].dispose(),delete E[F])}}}function Y3(n,e){function t(){let W=!1;const Ce=new nn;let Ee=null;const Oe=new nn(0,0,0,0);return{setMask:function(Se){Ee!==Se&&!W&&(n.colorMask(Se,Se,Se,Se),Ee=Se)},setLocked:function(Se){W=Se},setClear:function(Se,ce,Ge,Je,Mt){Mt===!0&&(Se*=Je,ce*=Je,Ge*=Je),Ce.set(Se,ce,Ge,Je),Oe.equals(Ce)===!1&&(n.clearColor(Se,ce,Ge,Je),Oe.copy(Ce))},reset:function(){W=!1,Ee=null,Oe.set(-1,0,0,0)}}}function i(){let W=!1,Ce=!1,Ee=null,Oe=null,Se=null;return{setReversed:function(ce){if(Ce!==ce){const Ge=e.get("EXT_clip_control");ce?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Ce=ce;const Je=Se;Se=null,this.setClear(Je)}},getReversed:function(){return Ce},setTest:function(ce){ce?ue(n.DEPTH_TEST):oe(n.DEPTH_TEST)},setMask:function(ce){Ee!==ce&&!W&&(n.depthMask(ce),Ee=ce)},setFunc:function(ce){if(Ce&&(ce=Dw[ce]),Oe!==ce){switch(ce){case hh:n.depthFunc(n.NEVER);break;case ph:n.depthFunc(n.ALWAYS);break;case mh:n.depthFunc(n.LESS);break;case La:n.depthFunc(n.LEQUAL);break;case gh:n.depthFunc(n.EQUAL);break;case _h:n.depthFunc(n.GEQUAL);break;case xh:n.depthFunc(n.GREATER);break;case vh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Oe=ce}},setLocked:function(ce){W=ce},setClear:function(ce){Se!==ce&&(Se=ce,Ce&&(ce=1-ce),n.clearDepth(ce))},reset:function(){W=!1,Ee=null,Oe=null,Se=null,Ce=!1}}}function r(){let W=!1,Ce=null,Ee=null,Oe=null,Se=null,ce=null,Ge=null,Je=null,Mt=null;return{setTest:function(Ve){W||(Ve?ue(n.STENCIL_TEST):oe(n.STENCIL_TEST))},setMask:function(Ve){Ce!==Ve&&!W&&(n.stencilMask(Ve),Ce=Ve)},setFunc:function(Ve,Ye,ut){(Ee!==Ve||Oe!==Ye||Se!==ut)&&(n.stencilFunc(Ve,Ye,ut),Ee=Ve,Oe=Ye,Se=ut)},setOp:function(Ve,Ye,ut){(ce!==Ve||Ge!==Ye||Je!==ut)&&(n.stencilOp(Ve,Ye,ut),ce=Ve,Ge=Ye,Je=ut)},setLocked:function(Ve){W=Ve},setClear:function(Ve){Mt!==Ve&&(n.clearStencil(Ve),Mt=Ve)},reset:function(){W=!1,Ce=null,Ee=null,Oe=null,Se=null,ce=null,Ge=null,Je=null,Mt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],g=null,_=!1,p=null,m=null,v=null,M=null,x=null,R=null,A=null,C=new Ot(0,0,0),b=0,E=!1,F=null,U=null,L=null,V=null,k=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,B=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=B>=1):q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=B>=2);let j=null,N={};const le=n.getParameter(n.SCISSOR_BOX),me=n.getParameter(n.VIEWPORT),ge=new nn().fromArray(le),ve=new nn().fromArray(me);function Te(W,Ce,Ee,Oe){const Se=new Uint8Array(4),ce=n.createTexture();n.bindTexture(W,ce),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<Ee;Ge++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,Oe,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(Ce+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return ce}const J={};J[n.TEXTURE_2D]=Te(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=Te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=Te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=Te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(n.DEPTH_TEST),o.setFunc(La),Y(!1),O(Mm),ue(n.CULL_FACE),H(Qr);function ue(W){u[W]!==!0&&(n.enable(W),u[W]=!0)}function oe(W){u[W]!==!1&&(n.disable(W),u[W]=!1)}function Re(W,Ce){return d[W]!==Ce?(n.bindFramebuffer(W,Ce),d[W]=Ce,W===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ce),W===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ae(W,Ce){let Ee=h,Oe=!1;if(W){Ee=f.get(Ce),Ee===void 0&&(Ee=[],f.set(Ce,Ee));const Se=W.textures;if(Ee.length!==Se.length||Ee[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Ge=Se.length;ce<Ge;ce++)Ee[ce]=n.COLOR_ATTACHMENT0+ce;Ee.length=Se.length,Oe=!0}}else Ee[0]!==n.BACK&&(Ee[0]=n.BACK,Oe=!0);Oe&&n.drawBuffers(Ee)}function ae(W){return g!==W?(n.useProgram(W),g=W,!0):!1}const w={[uo]:n.FUNC_ADD,[QM]:n.FUNC_SUBTRACT,[ew]:n.FUNC_REVERSE_SUBTRACT};w[tw]=n.MIN,w[nw]=n.MAX;const T={[iw]:n.ZERO,[rw]:n.ONE,[sw]:n.SRC_COLOR,[dh]:n.SRC_ALPHA,[dw]:n.SRC_ALPHA_SATURATE,[cw]:n.DST_COLOR,[aw]:n.DST_ALPHA,[ow]:n.ONE_MINUS_SRC_COLOR,[fh]:n.ONE_MINUS_SRC_ALPHA,[uw]:n.ONE_MINUS_DST_COLOR,[lw]:n.ONE_MINUS_DST_ALPHA,[fw]:n.CONSTANT_COLOR,[hw]:n.ONE_MINUS_CONSTANT_COLOR,[pw]:n.CONSTANT_ALPHA,[mw]:n.ONE_MINUS_CONSTANT_ALPHA};function H(W,Ce,Ee,Oe,Se,ce,Ge,Je,Mt,Ve){if(W===Qr){_===!0&&(oe(n.BLEND),_=!1);return}if(_===!1&&(ue(n.BLEND),_=!0),W!==JM){if(W!==p||Ve!==E){if((m!==uo||x!==uo)&&(n.blendEquation(n.FUNC_ADD),m=uo,x=uo),Ve)switch(W){case Sa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wm:n.blendFunc(n.ONE,n.ONE);break;case Em:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Tm:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Et("WebGLState: Invalid blending: ",W);break}else switch(W){case Sa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wm:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Em:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tm:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",W);break}v=null,M=null,R=null,A=null,C.set(0,0,0),b=0,p=W,E=Ve}return}Se=Se||Ce,ce=ce||Ee,Ge=Ge||Oe,(Ce!==m||Se!==x)&&(n.blendEquationSeparate(w[Ce],w[Se]),m=Ce,x=Se),(Ee!==v||Oe!==M||ce!==R||Ge!==A)&&(n.blendFuncSeparate(T[Ee],T[Oe],T[ce],T[Ge]),v=Ee,M=Oe,R=ce,A=Ge),(Je.equals(C)===!1||Mt!==b)&&(n.blendColor(Je.r,Je.g,Je.b,Mt),C.copy(Je),b=Mt),p=W,E=!1}function ee(W,Ce){W.side===Yr?oe(n.CULL_FACE):ue(n.CULL_FACE);let Ee=W.side===hi;Ce&&(Ee=!Ee),Y(Ee),W.blending===Sa&&W.transparent===!1?H(Qr):H(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),s.setMask(W.colorWrite);const Oe=W.stencilWrite;a.setTest(Oe),Oe&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),_e(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Y(W){F!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),F=W)}function O(W){W!==qM?(ue(n.CULL_FACE),W!==U&&(W===Mm?n.cullFace(n.BACK):W===KM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):oe(n.CULL_FACE),U=W}function I(W){W!==L&&(X&&n.lineWidth(W),L=W)}function _e(W,Ce,Ee){W?(ue(n.POLYGON_OFFSET_FILL),(V!==Ce||k!==Ee)&&(V=Ce,k=Ee,o.getReversed()&&(Ce=-Ce),n.polygonOffset(Ce,Ee))):oe(n.POLYGON_OFFSET_FILL)}function fe(W){W?ue(n.SCISSOR_TEST):oe(n.SCISSOR_TEST)}function ne(W){W===void 0&&(W=n.TEXTURE0+G-1),j!==W&&(n.activeTexture(W),j=W)}function pe(W,Ce,Ee){Ee===void 0&&(j===null?Ee=n.TEXTURE0+G-1:Ee=j);let Oe=N[Ee];Oe===void 0&&(Oe={type:void 0,texture:void 0},N[Ee]=Oe),(Oe.type!==W||Oe.texture!==Ce)&&(j!==Ee&&(n.activeTexture(Ee),j=Ee),n.bindTexture(W,Ce||J[W]),Oe.type=W,Oe.texture=Ce)}function P(){const W=N[j];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(W){Et("WebGLState:",W)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(W){Et("WebGLState:",W)}}function Z(){try{n.texSubImage2D(...arguments)}catch(W){Et("WebGLState:",W)}}function Q(){try{n.texSubImage3D(...arguments)}catch(W){Et("WebGLState:",W)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(W){Et("WebGLState:",W)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(W){Et("WebGLState:",W)}}function xe(){try{n.texStorage2D(...arguments)}catch(W){Et("WebGLState:",W)}}function He(){try{n.texStorage3D(...arguments)}catch(W){Et("WebGLState:",W)}}function Le(){try{n.texImage2D(...arguments)}catch(W){Et("WebGLState:",W)}}function be(){try{n.texImage3D(...arguments)}catch(W){Et("WebGLState:",W)}}function we(W){ge.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),ge.copy(W))}function Pe(W){ve.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),ve.copy(W))}function Ne(W,Ce){let Ee=c.get(Ce);Ee===void 0&&(Ee=new WeakMap,c.set(Ce,Ee));let Oe=Ee.get(W);Oe===void 0&&(Oe=n.getUniformBlockIndex(Ce,W.name),Ee.set(W,Oe))}function Ie(W,Ce){const Oe=c.get(Ce).get(W);l.get(Ce)!==Oe&&(n.uniformBlockBinding(Ce,Oe,W.__bindingPointIndex),l.set(Ce,Oe))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},j=null,N={},d={},f=new WeakMap,h=[],g=null,_=!1,p=null,m=null,v=null,M=null,x=null,R=null,A=null,C=new Ot(0,0,0),b=0,E=!1,F=null,U=null,L=null,V=null,k=null,ge.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ue,disable:oe,bindFramebuffer:Re,drawBuffers:Ae,useProgram:ae,setBlending:H,setMaterial:ee,setFlipSided:Y,setCullFace:O,setLineWidth:I,setPolygonOffset:_e,setScissorTest:fe,activeTexture:ne,bindTexture:pe,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:z,texImage2D:Le,texImage3D:be,updateUBOMapping:Ne,uniformBlockBinding:Ie,texStorage2D:xe,texStorage3D:He,texSubImage2D:Z,texSubImage3D:Q,compressedTexSubImage2D:K,compressedTexSubImage3D:Me,scissor:we,viewport:Pe,reset:et}}function q3(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return h?new OffscreenCanvas(P,S):$u("canvas")}function _(P,S,z){let Z=1;const Q=pe(P);if((Q.width>z||Q.height>z)&&(Z=z/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const K=Math.floor(Z*Q.width),Me=Math.floor(Z*Q.height);d===void 0&&(d=g(K,Me));const xe=S?g(K,Me):d;return xe.width=K,xe.height=Me,xe.getContext("2d").drawImage(P,0,0,K,Me),ot("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+Me+")."),xe}else return"data"in P&&ot("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function p(P){return P.generateMipmaps}function m(P){n.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(P,S,z,Z,Q=!1){if(P!==null){if(n[P]!==void 0)return n[P];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let K=S;if(S===n.RED&&(z===n.FLOAT&&(K=n.R32F),z===n.HALF_FLOAT&&(K=n.R16F),z===n.UNSIGNED_BYTE&&(K=n.R8)),S===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.R8UI),z===n.UNSIGNED_SHORT&&(K=n.R16UI),z===n.UNSIGNED_INT&&(K=n.R32UI),z===n.BYTE&&(K=n.R8I),z===n.SHORT&&(K=n.R16I),z===n.INT&&(K=n.R32I)),S===n.RG&&(z===n.FLOAT&&(K=n.RG32F),z===n.HALF_FLOAT&&(K=n.RG16F),z===n.UNSIGNED_BYTE&&(K=n.RG8)),S===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RG8UI),z===n.UNSIGNED_SHORT&&(K=n.RG16UI),z===n.UNSIGNED_INT&&(K=n.RG32UI),z===n.BYTE&&(K=n.RG8I),z===n.SHORT&&(K=n.RG16I),z===n.INT&&(K=n.RG32I)),S===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RGB8UI),z===n.UNSIGNED_SHORT&&(K=n.RGB16UI),z===n.UNSIGNED_INT&&(K=n.RGB32UI),z===n.BYTE&&(K=n.RGB8I),z===n.SHORT&&(K=n.RGB16I),z===n.INT&&(K=n.RGB32I)),S===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),z===n.UNSIGNED_INT&&(K=n.RGBA32UI),z===n.BYTE&&(K=n.RGBA8I),z===n.SHORT&&(K=n.RGBA16I),z===n.INT&&(K=n.RGBA32I)),S===n.RGB&&(z===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),S===n.RGBA){const Me=Q?Wu:St.getTransfer(Z);z===n.FLOAT&&(K=n.RGBA32F),z===n.HALF_FLOAT&&(K=n.RGBA16F),z===n.UNSIGNED_BYTE&&(K=Me===Ut?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(P,S){let z;return P?S===null||S===Dr||S===Zl?z=n.DEPTH24_STENCIL8:S===yr?z=n.DEPTH32F_STENCIL8:S===Kl&&(z=n.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Dr||S===Zl?z=n.DEPTH_COMPONENT24:S===yr?z=n.DEPTH_COMPONENT32F:S===Kl&&(z=n.DEPTH_COMPONENT16),z}function R(P,S){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Cn&&P.minFilter!==Gn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function A(P){const S=P.target;S.removeEventListener("dispose",A),b(S),S.isVideoTexture&&u.delete(S)}function C(P){const S=P.target;S.removeEventListener("dispose",C),F(S)}function b(P){const S=i.get(P);if(S.__webglInit===void 0)return;const z=P.source,Z=f.get(z);if(Z){const Q=Z[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(P),Object.keys(Z).length===0&&f.delete(z)}i.remove(P)}function E(P){const S=i.get(P);n.deleteTexture(S.__webglTexture);const z=P.source,Z=f.get(z);delete Z[S.__cacheKey],o.memory.textures--}function F(P){const S=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let Q=0;Q<S.__webglFramebuffer[Z].length;Q++)n.deleteFramebuffer(S.__webglFramebuffer[Z][Q]);else n.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)n.deleteFramebuffer(S.__webglFramebuffer[Z]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=P.textures;for(let Z=0,Q=z.length;Z<Q;Z++){const K=i.get(z[Z]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(z[Z])}i.remove(P)}let U=0;function L(){U=0}function V(){const P=U;return P>=r.maxTextures&&ot("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),U+=1,P}function k(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function G(P,S){const z=i.get(P);if(P.isVideoTexture&&fe(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&z.__version!==P.version){const Z=P.image;if(Z===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{J(z,P,S);return}}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+S)}function X(P,S){const z=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){J(z,P,S);return}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+S)}function B(P,S){const z=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){J(z,P,S);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+S)}function q(P,S){const z=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&z.__version!==P.version){ue(z,P,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+S)}const j={[yh]:n.REPEAT,[Kr]:n.CLAMP_TO_EDGE,[bh]:n.MIRRORED_REPEAT},N={[Cn]:n.NEAREST,[xw]:n.NEAREST_MIPMAP_NEAREST,[Pc]:n.NEAREST_MIPMAP_LINEAR,[Gn]:n.LINEAR,[jd]:n.LINEAR_MIPMAP_NEAREST,[_o]:n.LINEAR_MIPMAP_LINEAR},le={[Sw]:n.NEVER,[Aw]:n.ALWAYS,[Mw]:n.LESS,[Zp]:n.LEQUAL,[ww]:n.EQUAL,[Jp]:n.GEQUAL,[Ew]:n.GREATER,[Tw]:n.NOTEQUAL};function me(P,S){if(S.type===yr&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Gn||S.magFilter===jd||S.magFilter===Pc||S.magFilter===_o||S.minFilter===Gn||S.minFilter===jd||S.minFilter===Pc||S.minFilter===_o)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,j[S.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,j[S.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,j[S.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,N[S.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,N[S.minFilter]),S.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,le[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Cn||S.minFilter!==Pc&&S.minFilter!==_o||S.type===yr&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ge(P,S){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",A));const Z=S.source;let Q=f.get(Z);Q===void 0&&(Q={},f.set(Z,Q));const K=k(S);if(K!==P.__cacheKey){Q[K]===void 0&&(Q[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[K].usedTimes++;const Me=Q[P.__cacheKey];Me!==void 0&&(Q[P.__cacheKey].usedTimes--,Me.usedTimes===0&&E(S)),P.__cacheKey=K,P.__webglTexture=Q[K].texture}return z}function ve(P,S,z){return Math.floor(Math.floor(P/z)/S)}function Te(P,S,z,Z){const K=P.updateRanges;if(K.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,z,Z,S.data);else{K.sort((be,we)=>be.start-we.start);let Me=0;for(let be=1;be<K.length;be++){const we=K[Me],Pe=K[be],Ne=we.start+we.count,Ie=ve(Pe.start,S.width,4),et=ve(we.start,S.width,4);Pe.start<=Ne+1&&Ie===et&&ve(Pe.start+Pe.count-1,S.width,4)===Ie?we.count=Math.max(we.count,Pe.start+Pe.count-we.start):(++Me,K[Me]=Pe)}K.length=Me+1;const xe=n.getParameter(n.UNPACK_ROW_LENGTH),He=n.getParameter(n.UNPACK_SKIP_PIXELS),Le=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let be=0,we=K.length;be<we;be++){const Pe=K[be],Ne=Math.floor(Pe.start/4),Ie=Math.ceil(Pe.count/4),et=Ne%S.width,W=Math.floor(Ne/S.width),Ce=Ie,Ee=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,et),n.pixelStorei(n.UNPACK_SKIP_ROWS,W),t.texSubImage2D(n.TEXTURE_2D,0,et,W,Ce,Ee,z,Z,S.data)}P.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,xe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,He),n.pixelStorei(n.UNPACK_SKIP_ROWS,Le)}}function J(P,S,z){let Z=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=n.TEXTURE_3D);const Q=ge(P,S),K=S.source;t.bindTexture(Z,P.__webglTexture,n.TEXTURE0+z);const Me=i.get(K);if(K.version!==Me.__version||Q===!0){t.activeTexture(n.TEXTURE0+z);const xe=St.getPrimaries(St.workingColorSpace),He=S.colorSpace===ws?null:St.getPrimaries(S.colorSpace),Le=S.colorSpace===ws||xe===He?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let be=_(S.image,!1,r.maxTextureSize);be=ne(S,be);const we=s.convert(S.format,S.colorSpace),Pe=s.convert(S.type);let Ne=M(S.internalFormat,we,Pe,S.colorSpace,S.isVideoTexture);me(Z,S);let Ie;const et=S.mipmaps,W=S.isVideoTexture!==!0,Ce=Me.__version===void 0||Q===!0,Ee=K.dataReady,Oe=R(S,be);if(S.isDepthTexture)Ne=x(S.format===xo,S.type),Ce&&(W?t.texStorage2D(n.TEXTURE_2D,1,Ne,be.width,be.height):t.texImage2D(n.TEXTURE_2D,0,Ne,be.width,be.height,0,we,Pe,null));else if(S.isDataTexture)if(et.length>0){W&&Ce&&t.texStorage2D(n.TEXTURE_2D,Oe,Ne,et[0].width,et[0].height);for(let Se=0,ce=et.length;Se<ce;Se++)Ie=et[Se],W?Ee&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,we,Pe,Ie.data):t.texImage2D(n.TEXTURE_2D,Se,Ne,Ie.width,Ie.height,0,we,Pe,Ie.data);S.generateMipmaps=!1}else W?(Ce&&t.texStorage2D(n.TEXTURE_2D,Oe,Ne,be.width,be.height),Ee&&Te(S,be,we,Pe)):t.texImage2D(n.TEXTURE_2D,0,Ne,be.width,be.height,0,we,Pe,be.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){W&&Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,Ne,et[0].width,et[0].height,be.depth);for(let Se=0,ce=et.length;Se<ce;Se++)if(Ie=et[Se],S.format!==tr)if(we!==null)if(W){if(Ee)if(S.layerUpdates.size>0){const Ge=Ym(Ie.width,Ie.height,S.format,S.type);for(const Je of S.layerUpdates){const Mt=Ie.data.subarray(Je*Ge/Ie.data.BYTES_PER_ELEMENT,(Je+1)*Ge/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,Je,Ie.width,Ie.height,1,we,Mt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,Ie.width,Ie.height,be.depth,we,Ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Se,Ne,Ie.width,Ie.height,be.depth,0,Ie.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ee&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,Ie.width,Ie.height,be.depth,we,Pe,Ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Se,Ne,Ie.width,Ie.height,be.depth,0,we,Pe,Ie.data)}else{W&&Ce&&t.texStorage2D(n.TEXTURE_2D,Oe,Ne,et[0].width,et[0].height);for(let Se=0,ce=et.length;Se<ce;Se++)Ie=et[Se],S.format!==tr?we!==null?W?Ee&&t.compressedTexSubImage2D(n.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,we,Ie.data):t.compressedTexImage2D(n.TEXTURE_2D,Se,Ne,Ie.width,Ie.height,0,Ie.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ee&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,we,Pe,Ie.data):t.texImage2D(n.TEXTURE_2D,Se,Ne,Ie.width,Ie.height,0,we,Pe,Ie.data)}else if(S.isDataArrayTexture)if(W){if(Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,Ne,be.width,be.height,be.depth),Ee)if(S.layerUpdates.size>0){const Se=Ym(be.width,be.height,S.format,S.type);for(const ce of S.layerUpdates){const Ge=be.data.subarray(ce*Se/be.data.BYTES_PER_ELEMENT,(ce+1)*Se/be.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,be.width,be.height,1,we,Pe,Ge)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,we,Pe,be.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,be.width,be.height,be.depth,0,we,Pe,be.data);else if(S.isData3DTexture)W?(Ce&&t.texStorage3D(n.TEXTURE_3D,Oe,Ne,be.width,be.height,be.depth),Ee&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,we,Pe,be.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,be.width,be.height,be.depth,0,we,Pe,be.data);else if(S.isFramebufferTexture){if(Ce)if(W)t.texStorage2D(n.TEXTURE_2D,Oe,Ne,be.width,be.height);else{let Se=be.width,ce=be.height;for(let Ge=0;Ge<Oe;Ge++)t.texImage2D(n.TEXTURE_2D,Ge,Ne,Se,ce,0,we,Pe,null),Se>>=1,ce>>=1}}else if(et.length>0){if(W&&Ce){const Se=pe(et[0]);t.texStorage2D(n.TEXTURE_2D,Oe,Ne,Se.width,Se.height)}for(let Se=0,ce=et.length;Se<ce;Se++)Ie=et[Se],W?Ee&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,we,Pe,Ie):t.texImage2D(n.TEXTURE_2D,Se,Ne,we,Pe,Ie);S.generateMipmaps=!1}else if(W){if(Ce){const Se=pe(be);t.texStorage2D(n.TEXTURE_2D,Oe,Ne,Se.width,Se.height)}Ee&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,Pe,be)}else t.texImage2D(n.TEXTURE_2D,0,Ne,we,Pe,be);p(S)&&m(Z),Me.__version=K.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function ue(P,S,z){if(S.image.length!==6)return;const Z=ge(P,S),Q=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+z);const K=i.get(Q);if(Q.version!==K.__version||Z===!0){t.activeTexture(n.TEXTURE0+z);const Me=St.getPrimaries(St.workingColorSpace),xe=S.colorSpace===ws?null:St.getPrimaries(S.colorSpace),He=S.colorSpace===ws||Me===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const Le=S.isCompressedTexture||S.image[0].isCompressedTexture,be=S.image[0]&&S.image[0].isDataTexture,we=[];for(let ce=0;ce<6;ce++)!Le&&!be?we[ce]=_(S.image[ce],!0,r.maxCubemapSize):we[ce]=be?S.image[ce].image:S.image[ce],we[ce]=ne(S,we[ce]);const Pe=we[0],Ne=s.convert(S.format,S.colorSpace),Ie=s.convert(S.type),et=M(S.internalFormat,Ne,Ie,S.colorSpace),W=S.isVideoTexture!==!0,Ce=K.__version===void 0||Z===!0,Ee=Q.dataReady;let Oe=R(S,Pe);me(n.TEXTURE_CUBE_MAP,S);let Se;if(Le){W&&Ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,et,Pe.width,Pe.height);for(let ce=0;ce<6;ce++){Se=we[ce].mipmaps;for(let Ge=0;Ge<Se.length;Ge++){const Je=Se[Ge];S.format!==tr?Ne!==null?W?Ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ge,0,0,Je.width,Je.height,Ne,Je.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ge,et,Je.width,Je.height,0,Je.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ge,0,0,Je.width,Je.height,Ne,Ie,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ge,et,Je.width,Je.height,0,Ne,Ie,Je.data)}}}else{if(Se=S.mipmaps,W&&Ce){Se.length>0&&Oe++;const ce=pe(we[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,et,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(be){W?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,we[ce].width,we[ce].height,Ne,Ie,we[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,et,we[ce].width,we[ce].height,0,Ne,Ie,we[ce].data);for(let Ge=0;Ge<Se.length;Ge++){const Mt=Se[Ge].image[ce].image;W?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ge+1,0,0,Mt.width,Mt.height,Ne,Ie,Mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ge+1,et,Mt.width,Mt.height,0,Ne,Ie,Mt.data)}}else{W?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ne,Ie,we[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,et,Ne,Ie,we[ce]);for(let Ge=0;Ge<Se.length;Ge++){const Je=Se[Ge];W?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ge+1,0,0,Ne,Ie,Je.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ge+1,et,Ne,Ie,Je.image[ce])}}}p(S)&&m(n.TEXTURE_CUBE_MAP),K.__version=Q.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function oe(P,S,z,Z,Q,K){const Me=s.convert(z.format,z.colorSpace),xe=s.convert(z.type),He=M(z.internalFormat,Me,xe,z.colorSpace),Le=i.get(S),be=i.get(z);if(be.__renderTarget=S,!Le.__hasExternalTextures){const we=Math.max(1,S.width>>K),Pe=Math.max(1,S.height>>K);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,K,He,we,Pe,S.depth,0,Me,xe,null):t.texImage2D(Q,K,He,we,Pe,0,Me,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),_e(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,Q,be.__webglTexture,0,I(S)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,Q,be.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(P,S,z){if(n.bindRenderbuffer(n.RENDERBUFFER,P),S.depthBuffer){const Z=S.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,K=x(S.stencilBuffer,Q),Me=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;_e(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I(S),K,S.width,S.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,I(S),K,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,K,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,P)}else{const Z=S.textures;for(let Q=0;Q<Z.length;Q++){const K=Z[Q],Me=s.convert(K.format,K.colorSpace),xe=s.convert(K.type),He=M(K.internalFormat,Me,xe,K.colorSpace);_e(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I(S),He,S.width,S.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,I(S),He,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,He,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(P,S,z){const Z=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(S.depthTexture);if(Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),me(n.TEXTURE_CUBE_MAP,S.depthTexture);const Le=s.convert(S.depthTexture.format),be=s.convert(S.depthTexture.type);let we;S.depthTexture.format===cs?we=n.DEPTH_COMPONENT24:S.depthTexture.format===xo&&(we=n.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,we,S.width,S.height,0,Le,be,null)}}else G(S.depthTexture,0);const K=Q.__webglTexture,Me=I(S),xe=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,He=S.depthTexture.format===xo?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===cs)_e(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,He,xe,K,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,He,xe,K,0);else if(S.depthTexture.format===xo)_e(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,He,xe,K,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,He,xe,K,0);else throw new Error("Unknown depthTexture format")}function ae(P){const S=i.get(P),z=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const Z=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=Z}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(z)for(let Z=0;Z<6;Z++)Ae(S.__webglFramebuffer[Z],P,Z);else{const Z=P.texture.mipmaps;Z&&Z.length>0?Ae(S.__webglFramebuffer[0],P,0):Ae(S.__webglFramebuffer,P,0)}else if(z){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=n.createRenderbuffer(),Re(S.__webglDepthbuffer[Z],P,!1);else{const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,K)}}else{const Z=P.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Re(S.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,K)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function w(P,S,z){const Z=i.get(P);S!==void 0&&oe(Z.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&ae(P)}function T(P){const S=P.texture,z=i.get(P),Z=i.get(S);P.addEventListener("dispose",C);const Q=P.textures,K=P.isWebGLCubeRenderTarget===!0,Me=Q.length>1;if(Me||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=S.version,o.memory.textures++),K){z.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[xe]=[];for(let He=0;He<S.mipmaps.length;He++)z.__webglFramebuffer[xe][He]=n.createFramebuffer()}else z.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let xe=0;xe<S.mipmaps.length;xe++)z.__webglFramebuffer[xe]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Me)for(let xe=0,He=Q.length;xe<He;xe++){const Le=i.get(Q[xe]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&_e(P)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let xe=0;xe<Q.length;xe++){const He=Q[xe];z.__webglColorRenderbuffer[xe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[xe]);const Le=s.convert(He.format,He.colorSpace),be=s.convert(He.type),we=M(He.internalFormat,Le,be,He.colorSpace,P.isXRRenderTarget===!0),Pe=I(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,we,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,z.__webglColorRenderbuffer[xe])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Re(z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),me(n.TEXTURE_CUBE_MAP,S);for(let xe=0;xe<6;xe++)if(S.mipmaps&&S.mipmaps.length>0)for(let He=0;He<S.mipmaps.length;He++)oe(z.__webglFramebuffer[xe][He],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He);else oe(z.__webglFramebuffer[xe],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);p(S)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let xe=0,He=Q.length;xe<He;xe++){const Le=Q[xe],be=i.get(Le);let we=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(we=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(we,be.__webglTexture),me(we,Le),oe(z.__webglFramebuffer,P,Le,n.COLOR_ATTACHMENT0+xe,we,0),p(Le)&&m(we)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xe=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,Z.__webglTexture),me(xe,S),S.mipmaps&&S.mipmaps.length>0)for(let He=0;He<S.mipmaps.length;He++)oe(z.__webglFramebuffer[He],P,S,n.COLOR_ATTACHMENT0,xe,He);else oe(z.__webglFramebuffer,P,S,n.COLOR_ATTACHMENT0,xe,0);p(S)&&m(xe),t.unbindTexture()}P.depthBuffer&&ae(P)}function H(P){const S=P.textures;for(let z=0,Z=S.length;z<Z;z++){const Q=S[z];if(p(Q)){const K=v(P),Me=i.get(Q).__webglTexture;t.bindTexture(K,Me),m(K),t.unbindTexture()}}}const ee=[],Y=[];function O(P){if(P.samples>0){if(_e(P)===!1){const S=P.textures,z=P.width,Z=P.height;let Q=n.COLOR_BUFFER_BIT;const K=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(P),xe=S.length>1;if(xe)for(let Le=0;Le<S.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const He=P.texture.mipmaps;He&&He.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Le=0;Le<S.length;Le++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),xe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Le]);const be=i.get(S[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,be,0)}n.blitFramebuffer(0,0,z,Z,0,0,z,Z,Q,n.NEAREST),l===!0&&(ee.length=0,Y.length=0,ee.push(n.COLOR_ATTACHMENT0+Le),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ee.push(K),Y.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xe)for(let Le=0;Le<S.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Le]);const be=i.get(S[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const S=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function I(P){return Math.min(r.maxSamples,P.samples)}function _e(P){const S=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function fe(P){const S=o.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function ne(P,S){const z=P.colorSpace,Z=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==Fa&&z!==ws&&(St.getTransfer(z)===Ut?(Z!==tr||Q!==zi)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",z)),S}function pe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=L,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=B,this.setTextureCube=q,this.rebindTextures=w,this.setupRenderTarget=T,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=_e,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function K3(n,e){function t(i,r=ws){let s;const o=St.getTransfer(r);if(i===zi)return n.UNSIGNED_BYTE;if(i===$p)return n.UNSIGNED_SHORT_4_4_4_4;if(i===jp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hv)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pv)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===dv)return n.BYTE;if(i===fv)return n.SHORT;if(i===Kl)return n.UNSIGNED_SHORT;if(i===Xp)return n.INT;if(i===Dr)return n.UNSIGNED_INT;if(i===yr)return n.FLOAT;if(i===ls)return n.HALF_FLOAT;if(i===mv)return n.ALPHA;if(i===gv)return n.RGB;if(i===tr)return n.RGBA;if(i===cs)return n.DEPTH_COMPONENT;if(i===xo)return n.DEPTH_STENCIL;if(i===_v)return n.RED;if(i===Yp)return n.RED_INTEGER;if(i===Ua)return n.RG;if(i===qp)return n.RG_INTEGER;if(i===Kp)return n.RGBA_INTEGER;if(i===mu||i===gu||i===_u||i===xu)if(o===Ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===mu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_u)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===mu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_u)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sh||i===Mh||i===wh||i===Eh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Sh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Eh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Th||i===Ah||i===Ch||i===Rh||i===Ph||i===Dh||i===Lh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Th||i===Ah)return o===Ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ch)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Rh)return s.COMPRESSED_R11_EAC;if(i===Ph)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Dh)return s.COMPRESSED_RG11_EAC;if(i===Lh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ih||i===Uh||i===Fh||i===Nh||i===Oh||i===kh||i===Bh||i===zh||i===Vh||i===Hh||i===Gh||i===Wh||i===Xh||i===$h)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ih)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Oh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$h)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jh||i===Yh||i===qh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===jh)return o===Ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kh||i===Zh||i===Jh||i===Qh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Kh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Zh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Z3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Q3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Av(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new sr({vertexShader:Z3,fragmentShader:J3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lr(new cc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eC extends Oa{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",p=new Q3,m={},v=t.getContextAttributes();let M=null,x=null;const R=[],A=[],C=new bt;let b=null;const E=new Qi;E.viewport=new nn;const F=new Qi;F.viewport=new nn;const U=[E,F],L=new f2;let V=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ue=R[J];return ue===void 0&&(ue=new tf,R[J]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(J){let ue=R[J];return ue===void 0&&(ue=new tf,R[J]=ue),ue.getGripSpace()},this.getHand=function(J){let ue=R[J];return ue===void 0&&(ue=new tf,R[J]=ue),ue.getHandSpace()};function G(J){const ue=A.indexOf(J.inputSource);if(ue===-1)return;const oe=R[ue];oe!==void 0&&(oe.update(J.inputSource,J.frame,c||o),oe.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",B);for(let J=0;J<R.length;J++){const ue=A[J];ue!==null&&(A[J]=null,R[J].disconnect(ue))}V=null,k=null,p.reset();for(const J in m)delete m[J];e.setRenderTarget(M),h=null,f=null,d=null,r=null,x=null,Te.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",X),r.addEventListener("inputsourceschange",B),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Re=null,Ae=null;v.depth&&(Ae=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=v.stencil?xo:cs,Re=v.stencil?Zl:Dr);const ae={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(ae),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Tr(f.textureWidth,f.textureHeight,{format:tr,type:zi,depthTexture:new Jl(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const oe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new Tr(h.framebufferWidth,h.framebufferHeight,{format:tr,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Te.setContext(r),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function B(J){for(let ue=0;ue<J.removed.length;ue++){const oe=J.removed[ue],Re=A.indexOf(oe);Re>=0&&(A[Re]=null,R[Re].disconnect(oe))}for(let ue=0;ue<J.added.length;ue++){const oe=J.added[ue];let Re=A.indexOf(oe);if(Re===-1){for(let ae=0;ae<R.length;ae++)if(ae>=A.length){A.push(oe),Re=ae;break}else if(A[ae]===null){A[ae]=oe,Re=ae;break}if(Re===-1)break}const Ae=R[Re];Ae&&Ae.connect(oe)}}const q=new se,j=new se;function N(J,ue,oe){q.setFromMatrixPosition(ue.matrixWorld),j.setFromMatrixPosition(oe.matrixWorld);const Re=q.distanceTo(j),Ae=ue.projectionMatrix.elements,ae=oe.projectionMatrix.elements,w=Ae[14]/(Ae[10]-1),T=Ae[14]/(Ae[10]+1),H=(Ae[9]+1)/Ae[5],ee=(Ae[9]-1)/Ae[5],Y=(Ae[8]-1)/Ae[0],O=(ae[8]+1)/ae[0],I=w*Y,_e=w*O,fe=Re/(-Y+O),ne=fe*-Y;if(ue.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ne),J.translateZ(fe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ae[10]===-1)J.projectionMatrix.copy(ue.projectionMatrix),J.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const pe=w+fe,P=T+fe,S=I-ne,z=_e+(Re-ne),Z=H*T/P*pe,Q=ee*T/P*pe;J.projectionMatrix.makePerspective(S,z,Z,Q,pe,P),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function le(J,ue){ue===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ue.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ue=J.near,oe=J.far;p.texture!==null&&(p.depthNear>0&&(ue=p.depthNear),p.depthFar>0&&(oe=p.depthFar)),L.near=F.near=E.near=ue,L.far=F.far=E.far=oe,(V!==L.near||k!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),V=L.near,k=L.far),L.layers.mask=J.layers.mask|6,E.layers.mask=L.layers.mask&-5,F.layers.mask=L.layers.mask&-3;const Re=J.parent,Ae=L.cameras;le(L,Re);for(let ae=0;ae<Ae.length;ae++)le(Ae[ae],Re);Ae.length===2?N(L,E,F):L.projectionMatrix.copy(E.projectionMatrix),me(J,L,Re)};function me(J,ue,oe){oe===null?J.matrix.copy(ue.matrixWorld):(J.matrix.copy(oe.matrixWorld),J.matrix.invert(),J.matrix.multiply(ue.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ue.projectionMatrix),J.projectionMatrixInverse.copy(ue.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ep*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(J){return m[J]};let ge=null;function ve(J,ue){if(u=ue.getViewerPose(c||o),g=ue,u!==null){const oe=u.views;h!==null&&(e.setRenderTargetFramebuffer(x,h.framebuffer),e.setRenderTarget(x));let Re=!1;oe.length!==L.cameras.length&&(L.cameras.length=0,Re=!0);for(let T=0;T<oe.length;T++){const H=oe[T];let ee=null;if(h!==null)ee=h.getViewport(H);else{const O=d.getViewSubImage(f,H);ee=O.viewport,T===0&&(e.setRenderTargetTextures(x,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(x))}let Y=U[T];Y===void 0&&(Y=new Qi,Y.layers.enable(T),Y.viewport=new nn,U[T]=Y),Y.matrix.fromArray(H.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(H.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(ee.x,ee.y,ee.width,ee.height),T===0&&(L.matrix.copy(Y.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Re===!0&&L.cameras.push(Y)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const T=d.getDepthInformation(oe[0]);T&&T.isValid&&T.texture&&p.init(T,r.renderState)}if(Ae&&Ae.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let T=0;T<oe.length;T++){const H=oe[T].camera;if(H){let ee=m[H];ee||(ee=new Av,m[H]=ee);const Y=d.getCameraImage(H);ee.sourceTexture=Y}}}}for(let oe=0;oe<R.length;oe++){const Re=A[oe],Ae=R[oe];Re!==null&&Ae!==void 0&&Ae.update(Re,ue,c||o)}ge&&ge(J,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),g=null}const Te=new Pv;Te.setAnimationLoop(ve),this.setAnimationLoop=function(J){ge=J},this.dispose=function(){}}}const to=new us,tC=new cn;function nC(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Cv(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,v,M,x){m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,v,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===hi&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===hi&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=e.get(m),M=v.envMap,x=v.envMapRotation;M&&(p.envMap.value=M,to.copy(x),to.x*=-1,to.y*=-1,to.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(to.y*=-1,to.z*=-1),p.envMapRotation.value.setFromMatrix4(tC.makeRotationFromEuler(to)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=M*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===hi&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function iC(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){const x=M.program;i.uniformBlockBinding(v,x)}function c(v,M){let x=r[v.id];x===void 0&&(g(v),x=u(v),r[v.id]=x,v.addEventListener("dispose",p));const R=M.program;i.updateUBOMapping(v,R);const A=e.render.frame;s[v.id]!==A&&(f(v),s[v.id]=A)}function u(v){const M=d();v.__bindingPointIndex=M;const x=n.createBuffer(),R=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,R,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,x),x}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const M=r[v.id],x=v.uniforms,R=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let A=0,C=x.length;A<C;A++){const b=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,F=b.length;E<F;E++){const U=b[E];if(h(U,A,E,R)===!0){const L=U.__offset,V=Array.isArray(U.value)?U.value:[U.value];let k=0;for(let G=0;G<V.length;G++){const X=V[G],B=_(X);typeof X=="number"||typeof X=="boolean"?(U.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,L+k,U.__data)):X.isMatrix3?(U.__data[0]=X.elements[0],U.__data[1]=X.elements[1],U.__data[2]=X.elements[2],U.__data[3]=0,U.__data[4]=X.elements[3],U.__data[5]=X.elements[4],U.__data[6]=X.elements[5],U.__data[7]=0,U.__data[8]=X.elements[6],U.__data[9]=X.elements[7],U.__data[10]=X.elements[8],U.__data[11]=0):(X.toArray(U.__data,k),k+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,M,x,R){const A=v.value,C=M+"_"+x;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{const b=R[C];if(typeof A=="number"||typeof A=="boolean"){if(b!==A)return R[C]=A,!0}else if(b.equals(A)===!1)return b.copy(A),!0}return!1}function g(v){const M=v.uniforms;let x=0;const R=16;for(let C=0,b=M.length;C<b;C++){const E=Array.isArray(M[C])?M[C]:[M[C]];for(let F=0,U=E.length;F<U;F++){const L=E[F],V=Array.isArray(L.value)?L.value:[L.value];for(let k=0,G=V.length;k<G;k++){const X=V[k],B=_(X),q=x%R,j=q%B.boundary,N=q+j;x+=j,N!==0&&R-N<B.storage&&(x+=R-N),L.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=B.storage}}}const A=x%R;return A>0&&(x+=R-A),v.__size=x,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ot("WebGLRenderer: Unsupported uniform value type.",v),M}function p(v){const M=v.target;M.removeEventListener("dispose",p);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function m(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}const rC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let cr=null;function sC(){return cr===null&&(cr=new Qw(rC,16,16,Ua,ls),cr.name="DFG_LUT",cr.minFilter=Gn,cr.magFilter=Gn,cr.wrapS=Kr,cr.wrapT=Kr,cr.generateMipmaps=!1,cr.needsUpdate=!0),cr}class oC{constructor(e={}){const{canvas:t=Rw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=zi}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const _=h,p=new Set([Kp,qp,Yp]),m=new Set([zi,Dr,Kl,Zl,$p,jp]),v=new Uint32Array(4),M=new Int32Array(4);let x=null,R=null;const A=[],C=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let F=!1;this._outputColorSpace=Oi;let U=0,L=0,V=null,k=-1,G=null;const X=new nn,B=new nn;let q=null;const j=new Ot(0);let N=0,le=t.width,me=t.height,ge=1,ve=null,Te=null;const J=new nn(0,0,le,me),ue=new nn(0,0,le,me);let oe=!1;const Re=new Ev;let Ae=!1,ae=!1;const w=new cn,T=new se,H=new nn,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Y=!1;function O(){return V===null?ge:1}let I=i;function _e(D,$){return t.getContext(D,$)}try{const D={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wp}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",Mt,!1),I===null){const $="webgl2";if(I=_e($,D),I===null)throw _e($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw Et("WebGLRenderer: "+D.message),D}let fe,ne,pe,P,S,z,Z,Q,K,Me,xe,He,Le,be,we,Pe,Ne,Ie,et,W,Ce,Ee,Oe;function Se(){fe=new oA(I),fe.init(),Ce=new K3(I,fe),ne=new JT(I,fe,e,Ce),pe=new Y3(I,fe),ne.reversedDepthBuffer&&f&&pe.buffers.depth.setReversed(!0),P=new cA(I),S=new U3,z=new q3(I,fe,pe,S,ne,Ce,P),Z=new sA(E),Q=new p2(I),Ee=new KT(I,Q),K=new aA(I,Q,P,Ee),Me=new dA(I,K,Q,Ee,P),Ie=new uA(I,ne,z),we=new QT(S),xe=new I3(E,Z,fe,ne,Ee,we),He=new nC(E,S),Le=new N3,be=new H3(fe),Ne=new qT(E,Z,pe,Me,g,l),Pe=new j3(E,Me,ne),Oe=new iC(I,P,ne,pe),et=new ZT(I,fe,P),W=new lA(I,fe,P),P.programs=xe.programs,E.capabilities=ne,E.extensions=fe,E.properties=S,E.renderLists=Le,E.shadowMap=Pe,E.state=pe,E.info=P}Se(),_!==zi&&(b=new hA(_,t.width,t.height,r,s));const ce=new eC(E,I);this.xr=ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const D=fe.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=fe.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(D){D!==void 0&&(ge=D,this.setSize(le,me,!1))},this.getSize=function(D){return D.set(le,me)},this.setSize=function(D,$,re=!0){if(ce.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}le=D,me=$,t.width=Math.floor(D*ge),t.height=Math.floor($*ge),re===!0&&(t.style.width=D+"px",t.style.height=$+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,D,$)},this.getDrawingBufferSize=function(D){return D.set(le*ge,me*ge).floor()},this.setDrawingBufferSize=function(D,$,re){le=D,me=$,ge=re,t.width=Math.floor(D*re),t.height=Math.floor($*re),this.setViewport(0,0,D,$)},this.setEffects=function(D){if(_===zi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let $=0;$<D.length;$++)if(D[$].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(X)},this.getViewport=function(D){return D.copy(J)},this.setViewport=function(D,$,re,ie){D.isVector4?J.set(D.x,D.y,D.z,D.w):J.set(D,$,re,ie),pe.viewport(X.copy(J).multiplyScalar(ge).round())},this.getScissor=function(D){return D.copy(ue)},this.setScissor=function(D,$,re,ie){D.isVector4?ue.set(D.x,D.y,D.z,D.w):ue.set(D,$,re,ie),pe.scissor(B.copy(ue).multiplyScalar(ge).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(D){pe.setScissorTest(oe=D)},this.setOpaqueSort=function(D){ve=D},this.setTransparentSort=function(D){Te=D},this.getClearColor=function(D){return D.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(D=!0,$=!0,re=!0){let ie=0;if(D){let te=!1;if(V!==null){const Ue=V.texture.format;te=p.has(Ue)}if(te){const Ue=V.texture.type,ke=m.has(Ue),Fe=Ne.getClearColor(),Xe=Ne.getClearAlpha(),We=Fe.r,lt=Fe.g,pt=Fe.b;ke?(v[0]=We,v[1]=lt,v[2]=pt,v[3]=Xe,I.clearBufferuiv(I.COLOR,0,v)):(M[0]=We,M[1]=lt,M[2]=pt,M[3]=Xe,I.clearBufferiv(I.COLOR,0,M))}else ie|=I.COLOR_BUFFER_BIT}$&&(ie|=I.DEPTH_BUFFER_BIT),re&&(ie|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&I.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",Mt,!1),Ne.dispose(),Le.dispose(),be.dispose(),S.dispose(),Z.dispose(),Me.dispose(),Ee.dispose(),Oe.dispose(),xe.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",it),ce.removeEventListener("sessionend",Qt),at.stop()};function Ge(D){D.preventDefault(),Dm("WebGLRenderer: Context Lost."),F=!0}function Je(){Dm("WebGLRenderer: Context Restored."),F=!1;const D=P.autoReset,$=Pe.enabled,re=Pe.autoUpdate,ie=Pe.needsUpdate,te=Pe.type;Se(),P.autoReset=D,Pe.enabled=$,Pe.autoUpdate=re,Pe.needsUpdate=ie,Pe.type=te}function Mt(D){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Ve(D){const $=D.target;$.removeEventListener("dispose",Ve),Ye($)}function Ye(D){ut(D),S.remove(D)}function ut(D){const $=S.get(D).programs;$!==void 0&&($.forEach(function(re){xe.releaseProgram(re)}),D.isShaderMaterial&&xe.releaseShaderCache(D))}this.renderBufferDirect=function(D,$,re,ie,te,Ue){$===null&&($=ee);const ke=te.isMesh&&te.matrixWorld.determinant()<0,Fe=Li(D,$,re,ie,te);pe.setMaterial(ie,ke);let Xe=re.index,We=1;if(ie.wireframe===!0){if(Xe=K.getWireframeAttribute(re),Xe===void 0)return;We=2}const lt=re.drawRange,pt=re.attributes.position;let Ze=lt.start*We,Ft=(lt.start+lt.count)*We;Ue!==null&&(Ze=Math.max(Ze,Ue.start*We),Ft=Math.min(Ft,(Ue.start+Ue.count)*We)),Xe!==null?(Ze=Math.max(Ze,0),Ft=Math.min(Ft,Xe.count)):pt!=null&&(Ze=Math.max(Ze,0),Ft=Math.min(Ft,pt.count));const en=Ft-Ze;if(en<0||en===1/0)return;Ee.setup(te,ie,Fe,re,Xe);let Zt,Nt=et;if(Xe!==null&&(Zt=Q.get(Xe),Nt=W,Nt.setIndex(Zt)),te.isMesh)ie.wireframe===!0?(pe.setLineWidth(ie.wireframeLinewidth*O()),Nt.setMode(I.LINES)):Nt.setMode(I.TRIANGLES);else if(te.isLine){let In=ie.linewidth;In===void 0&&(In=1),pe.setLineWidth(In*O()),te.isLineSegments?Nt.setMode(I.LINES):te.isLineLoop?Nt.setMode(I.LINE_LOOP):Nt.setMode(I.LINE_STRIP)}else te.isPoints?Nt.setMode(I.POINTS):te.isSprite&&Nt.setMode(I.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)ju("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(fe.get("WEBGL_multi_draw"))Nt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const In=te._multiDrawStarts,qe=te._multiDrawCounts,mi=te._multiDrawCount,wt=Xe?Q.get(Xe).bytesPerElement:1,Yi=S.get(ie).currentProgram.getUniforms();for(let or=0;or<mi;or++)Yi.setValue(I,"_gl_DrawID",or),Nt.render(In[or]/wt,qe[or])}else if(te.isInstancedMesh)Nt.renderInstances(Ze,en,te.count);else if(re.isInstancedBufferGeometry){const In=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,qe=Math.min(re.instanceCount,In);Nt.renderInstances(Ze,en,qe)}else Nt.render(Ze,en)};function Be(D,$,re){D.transparent===!0&&D.side===Yr&&D.forceSinglePass===!1?(D.side=hi,D.needsUpdate=!0,Dn(D,$,re),D.side=zs,D.needsUpdate=!0,Dn(D,$,re),D.side=Yr):Dn(D,$,re)}this.compile=function(D,$,re=null){re===null&&(re=D),R=be.get(re),R.init($),C.push(R),re.traverseVisible(function(te){te.isLight&&te.layers.test($.layers)&&(R.pushLight(te),te.castShadow&&R.pushShadow(te))}),D!==re&&D.traverseVisible(function(te){te.isLight&&te.layers.test($.layers)&&(R.pushLight(te),te.castShadow&&R.pushShadow(te))}),R.setupLights();const ie=new Set;return D.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Ue=te.material;if(Ue)if(Array.isArray(Ue))for(let ke=0;ke<Ue.length;ke++){const Fe=Ue[ke];Be(Fe,re,te),ie.add(Fe)}else Be(Ue,re,te),ie.add(Ue)}),R=C.pop(),ie},this.compileAsync=function(D,$,re=null){const ie=this.compile(D,$,re);return new Promise(te=>{function Ue(){if(ie.forEach(function(ke){S.get(ke).currentProgram.isReady()&&ie.delete(ke)}),ie.size===0){te(D);return}setTimeout(Ue,10)}fe.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let nt=null;function Qe(D){nt&&nt(D)}function it(){at.stop()}function Qt(){at.start()}const at=new Pv;at.setAnimationLoop(Qe),typeof self<"u"&&at.setContext(self),this.setAnimationLoop=function(D){nt=D,ce.setAnimationLoop(D),D===null?at.stop():at.start()},ce.addEventListener("sessionstart",it),ce.addEventListener("sessionend",Qt),this.render=function(D,$){if($!==void 0&&$.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;const re=ce.enabled===!0&&ce.isPresenting===!0,ie=b!==null&&(V===null||re)&&b.begin(E,V);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera($),$=ce.getCamera()),D.isScene===!0&&D.onBeforeRender(E,D,$,V),R=be.get(D,C.length),R.init($),C.push(R),w.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Re.setFromProjectionMatrix(w,br,$.reversedDepth),ae=this.localClippingEnabled,Ae=we.init(this.clippingPlanes,ae),x=Le.get(D,A.length),x.init(),A.push(x),ce.enabled===!0&&ce.isPresenting===!0){const ke=E.xr.getDepthSensingMesh();ke!==null&&Wt(ke,$,-1/0,E.sortObjects)}Wt(D,$,0,E.sortObjects),x.finish(),E.sortObjects===!0&&x.sort(ve,Te),Y=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Y&&Ne.addToRenderList(x,D),this.info.render.frame++,Ae===!0&&we.beginShadows();const te=R.state.shadowsArray;if(Pe.render(te,D,$),Ae===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&b.hasRenderPass())===!1){const ke=x.opaque,Fe=x.transmissive;if(R.setupLights(),$.isArrayCamera){const Xe=$.cameras;if(Fe.length>0)for(let We=0,lt=Xe.length;We<lt;We++){const pt=Xe[We];Xt(ke,Fe,D,pt)}Y&&Ne.render(D);for(let We=0,lt=Xe.length;We<lt;We++){const pt=Xe[We];un(x,D,pt,pt.viewport)}}else Fe.length>0&&Xt(ke,Fe,D,$),Y&&Ne.render(D),un(x,D,$)}V!==null&&L===0&&(z.updateMultisampleRenderTarget(V),z.updateRenderTargetMipmap(V)),ie&&b.end(E),D.isScene===!0&&D.onAfterRender(E,D,$),Ee.resetDefaultState(),k=-1,G=null,C.pop(),C.length>0?(R=C[C.length-1],Ae===!0&&we.setGlobalState(E.clippingPlanes,R.state.camera)):R=null,A.pop(),A.length>0?x=A[A.length-1]:x=null};function Wt(D,$,re,ie){if(D.visible===!1)return;if(D.layers.test($.layers)){if(D.isGroup)re=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update($);else if(D.isLight)R.pushLight(D),D.castShadow&&R.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Re.intersectsSprite(D)){ie&&H.setFromMatrixPosition(D.matrixWorld).applyMatrix4(w);const ke=Me.update(D),Fe=D.material;Fe.visible&&x.push(D,ke,Fe,re,H.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Re.intersectsObject(D))){const ke=Me.update(D),Fe=D.material;if(ie&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),H.copy(D.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),H.copy(ke.boundingSphere.center)),H.applyMatrix4(D.matrixWorld).applyMatrix4(w)),Array.isArray(Fe)){const Xe=ke.groups;for(let We=0,lt=Xe.length;We<lt;We++){const pt=Xe[We],Ze=Fe[pt.materialIndex];Ze&&Ze.visible&&x.push(D,ke,Ze,re,H.z,pt)}}else Fe.visible&&x.push(D,ke,Fe,re,H.z,null)}}const Ue=D.children;for(let ke=0,Fe=Ue.length;ke<Fe;ke++)Wt(Ue[ke],$,re,ie)}function un(D,$,re,ie){const{opaque:te,transmissive:Ue,transparent:ke}=D;R.setupLightsView(re),Ae===!0&&we.setGlobalState(E.clippingPlanes,re),ie&&pe.viewport(X.copy(ie)),te.length>0&&Lt(te,$,re),Ue.length>0&&Lt(Ue,$,re),ke.length>0&&Lt(ke,$,re),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Xt(D,$,re,ie){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[ie.id]===void 0){const Ze=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[ie.id]=new Tr(1,1,{generateMipmaps:!0,type:Ze?ls:zi,minFilter:_o,samples:Math.max(4,ne.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace})}const Ue=R.state.transmissionRenderTarget[ie.id],ke=ie.viewport||X;Ue.setSize(ke.z*E.transmissionResolutionScale,ke.w*E.transmissionResolutionScale);const Fe=E.getRenderTarget(),Xe=E.getActiveCubeFace(),We=E.getActiveMipmapLevel();E.setRenderTarget(Ue),E.getClearColor(j),N=E.getClearAlpha(),N<1&&E.setClearColor(16777215,.5),E.clear(),Y&&Ne.render(re);const lt=E.toneMapping;E.toneMapping=Er;const pt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),R.setupLightsView(ie),Ae===!0&&we.setGlobalState(E.clippingPlanes,ie),Lt(D,re,ie),z.updateMultisampleRenderTarget(Ue),z.updateRenderTargetMipmap(Ue),fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Ft=0,en=$.length;Ft<en;Ft++){const Zt=$[Ft],{object:Nt,geometry:In,material:qe,group:mi}=Zt;if(qe.side===Yr&&Nt.layers.test(ie.layers)){const wt=qe.side;qe.side=hi,qe.needsUpdate=!0,Ct(Nt,re,ie,In,qe,mi),qe.side=wt,qe.needsUpdate=!0,Ze=!0}}Ze===!0&&(z.updateMultisampleRenderTarget(Ue),z.updateRenderTargetMipmap(Ue))}E.setRenderTarget(Fe,Xe,We),E.setClearColor(j,N),pt!==void 0&&(ie.viewport=pt),E.toneMapping=lt}function Lt(D,$,re){const ie=$.isScene===!0?$.overrideMaterial:null;for(let te=0,Ue=D.length;te<Ue;te++){const ke=D[te],{object:Fe,geometry:Xe,group:We}=ke;let lt=ke.material;lt.allowOverride===!0&&ie!==null&&(lt=ie),Fe.layers.test(re.layers)&&Ct(Fe,$,re,Xe,lt,We)}}function Ct(D,$,re,ie,te,Ue){D.onBeforeRender(E,$,re,ie,te,Ue),D.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),te.onBeforeRender(E,$,re,ie,D,Ue),te.transparent===!0&&te.side===Yr&&te.forceSinglePass===!1?(te.side=hi,te.needsUpdate=!0,E.renderBufferDirect(re,$,ie,te,D,Ue),te.side=zs,te.needsUpdate=!0,E.renderBufferDirect(re,$,ie,te,D,Ue),te.side=Yr):E.renderBufferDirect(re,$,ie,te,D,Ue),D.onAfterRender(E,$,re,ie,te,Ue)}function Dn(D,$,re){$.isScene!==!0&&($=ee);const ie=S.get(D),te=R.state.lights,Ue=R.state.shadowsArray,ke=te.state.version,Fe=xe.getParameters(D,te.state,Ue,$,re),Xe=xe.getProgramCacheKey(Fe);let We=ie.programs;ie.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?$.environment:null,ie.fog=$.fog;const lt=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;ie.envMap=Z.get(D.envMap||ie.environment,lt),ie.envMapRotation=ie.environment!==null&&D.envMap===null?$.environmentRotation:D.envMapRotation,We===void 0&&(D.addEventListener("dispose",Ve),We=new Map,ie.programs=We);let pt=We.get(Xe);if(pt!==void 0){if(ie.currentProgram===pt&&ie.lightsStateVersion===ke)return Ln(D,Fe),pt}else Fe.uniforms=xe.getUniforms(D),D.onBeforeCompile(Fe,E),pt=xe.acquireProgram(Fe,Xe),We.set(Xe,pt),ie.uniforms=Fe.uniforms;const Ze=ie.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ze.clippingPlanes=we.uniform),Ln(D,Fe),ie.needsLights=fn(D),ie.lightsStateVersion=ke,ie.needsLights&&(Ze.ambientLightColor.value=te.state.ambient,Ze.lightProbe.value=te.state.probe,Ze.directionalLights.value=te.state.directional,Ze.directionalLightShadows.value=te.state.directionalShadow,Ze.spotLights.value=te.state.spot,Ze.spotLightShadows.value=te.state.spotShadow,Ze.rectAreaLights.value=te.state.rectArea,Ze.ltc_1.value=te.state.rectAreaLTC1,Ze.ltc_2.value=te.state.rectAreaLTC2,Ze.pointLights.value=te.state.point,Ze.pointLightShadows.value=te.state.pointShadow,Ze.hemisphereLights.value=te.state.hemi,Ze.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ze.spotLightMatrix.value=te.state.spotLightMatrix,Ze.spotLightMap.value=te.state.spotLightMap,Ze.pointShadowMatrix.value=te.state.pointShadowMatrix),ie.currentProgram=pt,ie.uniformsList=null,pt}function Ht(D){if(D.uniformsList===null){const $=D.currentProgram.getUniforms();D.uniformsList=vu.seqWithValue($.seq,D.uniforms)}return D.uniformsList}function Ln(D,$){const re=S.get(D);re.outputColorSpace=$.outputColorSpace,re.batching=$.batching,re.batchingColor=$.batchingColor,re.instancing=$.instancing,re.instancingColor=$.instancingColor,re.instancingMorph=$.instancingMorph,re.skinning=$.skinning,re.morphTargets=$.morphTargets,re.morphNormals=$.morphNormals,re.morphColors=$.morphColors,re.morphTargetsCount=$.morphTargetsCount,re.numClippingPlanes=$.numClippingPlanes,re.numIntersection=$.numClipIntersection,re.vertexAlphas=$.vertexAlphas,re.vertexTangents=$.vertexTangents,re.toneMapping=$.toneMapping}function Li(D,$,re,ie,te){$.isScene!==!0&&($=ee),z.resetTextureUnits();const Ue=$.fog,ke=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?$.environment:null,Fe=V===null?E.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Fa,Xe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,We=Z.get(ie.envMap||ke,Xe),lt=ie.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pt=!!re.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ze=!!re.morphAttributes.position,Ft=!!re.morphAttributes.normal,en=!!re.morphAttributes.color;let Zt=Er;ie.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Zt=E.toneMapping);const Nt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,In=Nt!==void 0?Nt.length:0,qe=S.get(ie),mi=R.state.lights;if(Ae===!0&&(ae===!0||D!==G)){const xn=D===G&&ie.id===k;we.setState(ie,D,xn)}let wt=!1;ie.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==mi.state.version||qe.outputColorSpace!==Fe||te.isBatchedMesh&&qe.batching===!1||!te.isBatchedMesh&&qe.batching===!0||te.isBatchedMesh&&qe.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&qe.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&qe.instancing===!1||!te.isInstancedMesh&&qe.instancing===!0||te.isSkinnedMesh&&qe.skinning===!1||!te.isSkinnedMesh&&qe.skinning===!0||te.isInstancedMesh&&qe.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&qe.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&qe.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&qe.instancingMorph===!1&&te.morphTexture!==null||qe.envMap!==We||ie.fog===!0&&qe.fog!==Ue||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==we.numPlanes||qe.numIntersection!==we.numIntersection)||qe.vertexAlphas!==lt||qe.vertexTangents!==pt||qe.morphTargets!==Ze||qe.morphNormals!==Ft||qe.morphColors!==en||qe.toneMapping!==Zt||qe.morphTargetsCount!==In)&&(wt=!0):(wt=!0,qe.__version=ie.version);let Yi=qe.currentProgram;wt===!0&&(Yi=Dn(ie,$,te));let or=!1,Gs=!1,Fo=!1;const kt=Yi.getUniforms(),En=qe.uniforms;if(pe.useProgram(Yi.program)&&(or=!0,Gs=!0,Fo=!0),ie.id!==k&&(k=ie.id,Gs=!0),or||G!==D){pe.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),kt.setValue(I,"projectionMatrix",D.projectionMatrix),kt.setValue(I,"viewMatrix",D.matrixWorldInverse);const ps=kt.map.cameraPosition;ps!==void 0&&ps.setValue(I,T.setFromMatrixPosition(D.matrixWorld)),ne.logarithmicDepthBuffer&&kt.setValue(I,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&kt.setValue(I,"isOrthographic",D.isOrthographicCamera===!0),G!==D&&(G=D,Gs=!0,Fo=!0)}if(qe.needsLights&&(mi.state.directionalShadowMap.length>0&&kt.setValue(I,"directionalShadowMap",mi.state.directionalShadowMap,z),mi.state.spotShadowMap.length>0&&kt.setValue(I,"spotShadowMap",mi.state.spotShadowMap,z),mi.state.pointShadowMap.length>0&&kt.setValue(I,"pointShadowMap",mi.state.pointShadowMap,z)),te.isSkinnedMesh){kt.setOptional(I,te,"bindMatrix"),kt.setOptional(I,te,"bindMatrixInverse");const xn=te.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),kt.setValue(I,"boneTexture",xn.boneTexture,z))}te.isBatchedMesh&&(kt.setOptional(I,te,"batchingTexture"),kt.setValue(I,"batchingTexture",te._matricesTexture,z),kt.setOptional(I,te,"batchingIdTexture"),kt.setValue(I,"batchingIdTexture",te._indirectTexture,z),kt.setOptional(I,te,"batchingColorTexture"),te._colorsTexture!==null&&kt.setValue(I,"batchingColorTexture",te._colorsTexture,z));const hs=re.morphAttributes;if((hs.position!==void 0||hs.normal!==void 0||hs.color!==void 0)&&Ie.update(te,re,Yi),(Gs||qe.receiveShadow!==te.receiveShadow)&&(qe.receiveShadow=te.receiveShadow,kt.setValue(I,"receiveShadow",te.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&$.environment!==null&&(En.envMapIntensity.value=$.environmentIntensity),En.dfgLUT!==void 0&&(En.dfgLUT.value=sC()),Gs&&(kt.setValue(I,"toneMappingExposure",E.toneMappingExposure),qe.needsLights&&dn(En,Fo),Ue&&ie.fog===!0&&He.refreshFogUniforms(En,Ue),He.refreshMaterialUniforms(En,ie,ge,me,R.state.transmissionRenderTarget[D.id]),vu.upload(I,Ht(qe),En,z)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(vu.upload(I,Ht(qe),En,z),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&kt.setValue(I,"center",te.center),kt.setValue(I,"modelViewMatrix",te.modelViewMatrix),kt.setValue(I,"normalMatrix",te.normalMatrix),kt.setValue(I,"modelMatrix",te.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const xn=ie.uniformsGroups;for(let ps=0,No=xn.length;ps<No;ps++){const r0=xn[ps];Oe.update(r0,Yi),Oe.bind(r0,Yi)}}return Yi}function dn(D,$){D.ambientLightColor.needsUpdate=$,D.lightProbe.needsUpdate=$,D.directionalLights.needsUpdate=$,D.directionalLightShadows.needsUpdate=$,D.pointLights.needsUpdate=$,D.pointLightShadows.needsUpdate=$,D.spotLights.needsUpdate=$,D.spotLightShadows.needsUpdate=$,D.rectAreaLights.needsUpdate=$,D.hemisphereLights.needsUpdate=$}function fn(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(D,$,re){const ie=S.get(D);ie.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),S.get(D.texture).__webglTexture=$,S.get(D.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:re,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,$){const re=S.get(D);re.__webglFramebuffer=$,re.__useDefaultFramebuffer=$===void 0};const _n=I.createFramebuffer();this.setRenderTarget=function(D,$=0,re=0){V=D,U=$,L=re;let ie=null,te=!1,Ue=!1;if(D){const Fe=S.get(D);if(Fe.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(I.FRAMEBUFFER,Fe.__webglFramebuffer),X.copy(D.viewport),B.copy(D.scissor),q=D.scissorTest,pe.viewport(X),pe.scissor(B),pe.setScissorTest(q),k=-1;return}else if(Fe.__webglFramebuffer===void 0)z.setupRenderTarget(D);else if(Fe.__hasExternalTextures)z.rebindTextures(D,S.get(D.texture).__webglTexture,S.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const lt=D.depthTexture;if(Fe.__boundDepthTexture!==lt){if(lt!==null&&S.has(lt)&&(D.width!==lt.image.width||D.height!==lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(D)}}const Xe=D.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ue=!0);const We=S.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(We[$])?ie=We[$][re]:ie=We[$],te=!0):D.samples>0&&z.useMultisampledRTT(D)===!1?ie=S.get(D).__webglMultisampledFramebuffer:Array.isArray(We)?ie=We[re]:ie=We,X.copy(D.viewport),B.copy(D.scissor),q=D.scissorTest}else X.copy(J).multiplyScalar(ge).floor(),B.copy(ue).multiplyScalar(ge).floor(),q=oe;if(re!==0&&(ie=_n),pe.bindFramebuffer(I.FRAMEBUFFER,ie)&&pe.drawBuffers(D,ie),pe.viewport(X),pe.scissor(B),pe.setScissorTest(q),te){const Fe=S.get(D.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+$,Fe.__webglTexture,re)}else if(Ue){const Fe=$;for(let Xe=0;Xe<D.textures.length;Xe++){const We=S.get(D.textures[Xe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Xe,We.__webglTexture,re,Fe)}}else if(D!==null&&re!==0){const Fe=S.get(D.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Fe.__webglTexture,re)}k=-1},this.readRenderTargetPixels=function(D,$,re,ie,te,Ue,ke,Fe=0){if(!(D&&D.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=S.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ke!==void 0&&(Xe=Xe[ke]),Xe){pe.bindFramebuffer(I.FRAMEBUFFER,Xe);try{const We=D.textures[Fe],lt=We.format,pt=We.type;if(D.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Fe),!ne.textureFormatReadable(lt)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(pt)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=D.width-ie&&re>=0&&re<=D.height-te&&I.readPixels($,re,ie,te,Ce.convert(lt),Ce.convert(pt),Ue)}finally{const We=V!==null?S.get(V).__webglFramebuffer:null;pe.bindFramebuffer(I.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(D,$,re,ie,te,Ue,ke,Fe=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=S.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ke!==void 0&&(Xe=Xe[ke]),Xe)if($>=0&&$<=D.width-ie&&re>=0&&re<=D.height-te){pe.bindFramebuffer(I.FRAMEBUFFER,Xe);const We=D.textures[Fe],lt=We.format,pt=We.type;if(D.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Fe),!ne.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ze),I.bufferData(I.PIXEL_PACK_BUFFER,Ue.byteLength,I.STREAM_READ),I.readPixels($,re,ie,te,Ce.convert(lt),Ce.convert(pt),0);const Ft=V!==null?S.get(V).__webglFramebuffer:null;pe.bindFramebuffer(I.FRAMEBUFFER,Ft);const en=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Pw(I,en,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ze),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Ue),I.deleteBuffer(Ze),I.deleteSync(en),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,$=null,re=0){const ie=Math.pow(2,-re),te=Math.floor(D.image.width*ie),Ue=Math.floor(D.image.height*ie),ke=$!==null?$.x:0,Fe=$!==null?$.y:0;z.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,re,0,0,ke,Fe,te,Ue),pe.unbindTexture()};const Ir=I.createFramebuffer(),Uo=I.createFramebuffer();this.copyTextureToTexture=function(D,$,re=null,ie=null,te=0,Ue=0){let ke,Fe,Xe,We,lt,pt,Ze,Ft,en;const Zt=D.isCompressedTexture?D.mipmaps[Ue]:D.image;if(re!==null)ke=re.max.x-re.min.x,Fe=re.max.y-re.min.y,Xe=re.isBox3?re.max.z-re.min.z:1,We=re.min.x,lt=re.min.y,pt=re.isBox3?re.min.z:0;else{const En=Math.pow(2,-te);ke=Math.floor(Zt.width*En),Fe=Math.floor(Zt.height*En),D.isDataArrayTexture?Xe=Zt.depth:D.isData3DTexture?Xe=Math.floor(Zt.depth*En):Xe=1,We=0,lt=0,pt=0}ie!==null?(Ze=ie.x,Ft=ie.y,en=ie.z):(Ze=0,Ft=0,en=0);const Nt=Ce.convert($.format),In=Ce.convert($.type);let qe;$.isData3DTexture?(z.setTexture3D($,0),qe=I.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(z.setTexture2DArray($,0),qe=I.TEXTURE_2D_ARRAY):(z.setTexture2D($,0),qe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,$.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,$.unpackAlignment);const mi=I.getParameter(I.UNPACK_ROW_LENGTH),wt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Yi=I.getParameter(I.UNPACK_SKIP_PIXELS),or=I.getParameter(I.UNPACK_SKIP_ROWS),Gs=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Zt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Zt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,We),I.pixelStorei(I.UNPACK_SKIP_ROWS,lt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,pt);const Fo=D.isDataArrayTexture||D.isData3DTexture,kt=$.isDataArrayTexture||$.isData3DTexture;if(D.isDepthTexture){const En=S.get(D),hs=S.get($),xn=S.get(En.__renderTarget),ps=S.get(hs.__renderTarget);pe.bindFramebuffer(I.READ_FRAMEBUFFER,xn.__webglFramebuffer),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,ps.__webglFramebuffer);for(let No=0;No<Xe;No++)Fo&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,S.get(D).__webglTexture,te,pt+No),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,S.get($).__webglTexture,Ue,en+No)),I.blitFramebuffer(We,lt,ke,Fe,Ze,Ft,ke,Fe,I.DEPTH_BUFFER_BIT,I.NEAREST);pe.bindFramebuffer(I.READ_FRAMEBUFFER,null),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(te!==0||D.isRenderTargetTexture||S.has(D)){const En=S.get(D),hs=S.get($);pe.bindFramebuffer(I.READ_FRAMEBUFFER,Ir),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,Uo);for(let xn=0;xn<Xe;xn++)Fo?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,En.__webglTexture,te,pt+xn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,En.__webglTexture,te),kt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,hs.__webglTexture,Ue,en+xn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,hs.__webglTexture,Ue),te!==0?I.blitFramebuffer(We,lt,ke,Fe,Ze,Ft,ke,Fe,I.COLOR_BUFFER_BIT,I.NEAREST):kt?I.copyTexSubImage3D(qe,Ue,Ze,Ft,en+xn,We,lt,ke,Fe):I.copyTexSubImage2D(qe,Ue,Ze,Ft,We,lt,ke,Fe);pe.bindFramebuffer(I.READ_FRAMEBUFFER,null),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else kt?D.isDataTexture||D.isData3DTexture?I.texSubImage3D(qe,Ue,Ze,Ft,en,ke,Fe,Xe,Nt,In,Zt.data):$.isCompressedArrayTexture?I.compressedTexSubImage3D(qe,Ue,Ze,Ft,en,ke,Fe,Xe,Nt,Zt.data):I.texSubImage3D(qe,Ue,Ze,Ft,en,ke,Fe,Xe,Nt,In,Zt):D.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Ue,Ze,Ft,ke,Fe,Nt,In,Zt.data):D.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Ue,Ze,Ft,Zt.width,Zt.height,Nt,Zt.data):I.texSubImage2D(I.TEXTURE_2D,Ue,Ze,Ft,ke,Fe,Nt,In,Zt);I.pixelStorei(I.UNPACK_ROW_LENGTH,mi),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,wt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Yi),I.pixelStorei(I.UNPACK_SKIP_ROWS,or),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Gs),Ue===0&&$.generateMipmaps&&I.generateMipmap(qe),pe.unbindTexture()},this.initRenderTarget=function(D){S.get(D).__webglFramebuffer===void 0&&z.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?z.setTextureCube(D,0):D.isData3DTexture?z.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?z.setTexture2DArray(D,0):z.setTexture2D(D,0),pe.unbindTexture()},this.resetState=function(){U=0,L=0,V=null,pe.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return br}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}function aC(n,e=50){const t=new Map;let i=null;const r=o=>{try{return JSON.stringify(o)}catch{return String(o)}},s=(...o)=>{const a=r(o);if(t.has(a))return t.get(a);const l=n(...o);return t.set(a,l),i&&clearTimeout(i),i=setTimeout(()=>{t.clear(),i=null},e),l};return s.cancel=()=>{i&&(clearTimeout(i),i=null),t.clear()},s}const Ef=9,lC=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,cC={__name:"Blob3DBackground",setup(n,{expose:e}){const t=De(null);let i=null;const r={sampleScreenPixel:null,samplePoints:null},s=aC((p,m)=>{var E;if(!l||!d)return null;const v=(E=t.value)==null?void 0:E.getBoundingClientRect();if(!v)return null;const M=Math.round((p-v.left)*l.getPixelRatio()),x=Math.round((m-v.top)*l.getPixelRatio()),R=Math.round(v.width*l.getPixelRatio()),A=Math.round(v.height*l.getPixelRatio());if(M<0||x<0||M>=R||x>=A)return null;const C=l.getContext(),b=new Uint8Array(4);return C.readPixels(M,A-x-1,1,1,C.RGBA,C.UNSIGNED_BYTE,b),{r:b[0],g:b[1],b:b[2],a:b[3]}},50),o=(p,m,v,M)=>{var k;if(!l||!d)return null;const x=(k=t.value)==null?void 0:k.getBoundingClientRect();if(!x)return null;const R=l.getPixelRatio(),A=Math.round(x.width*R),C=Math.round(x.height*R);let b=Math.floor((p-x.left)*R),E=Math.floor((m-x.top)*R),F=Math.ceil(v*R),U=Math.ceil(M*R);if(b<0&&(F+=b,b=0),E<0&&(U+=E,E=0),F=Math.min(F,A-b),U=Math.min(U,C-E),F<=0||U<=0)return null;const L=F*U*4;(!i||i.length<L)&&(i=new Uint8Array(L));const V=l.getContext();return V.readPixels(b,C-(E+U),F,U,V.RGBA,V.UNSIGNED_BYTE,i),{data:i,px:b,py:E,pw:F,ph:U,ratio:R,left:x.left,top:x.top}},a=p=>{if(!p||p.length===0)return[];let m=1/0,v=1/0,M=-1/0,x=-1/0;for(const G of p)G.x<m&&(m=G.x),G.x>M&&(M=G.x),G.y<v&&(v=G.y),G.y>x&&(x=G.y);const R=o(m,v,M-m+1,x-v+1);if(!R)return p.map(()=>null);const{data:A,px:C,py:b,pw:E,ph:F,ratio:U,left:L,top:V}=R,k=new Array(p.length);for(let G=0;G<p.length;G++){const X=Math.floor((p[G].x-L)*U),B=Math.floor((p[G].y-V)*U);if(X<C||X>=C+E||B<b||B>=b+F){k[G]=null;continue}const j=((b+F-1-B)*E+(X-C))*4;k[G]={r:A[j],g:A[j+1],b:A[j+2],a:A[j+3]}}return k};r.sampleScreenPixel=s,r.samplePoints=a,window.__blobSampler=r,e({sampleScreenPixel:s,samplePoints:a});let l=null,c=null,u=null,d=null,f=null,h=[];function g(p,m){const v=getComputedStyle(document.documentElement).getPropertyValue(p).trim();if(!v)return m;const M=v.split(/\s+/).map(Number);return M.length<3||M.some(Number.isNaN)?m:new se(M[0]/255,M[1]/255,M[2]/255)}const _=`
  precision highp float;

  varying vec2 vUv;

  uniform vec2  uResolution;
  uniform float uTime;
  uniform float uScroll;
  uniform vec2  uMouse;
  uniform vec2  uMouseDir;
  uniform float uMouseStrength;
  uniform vec3  uBallPos[${Ef}];
  uniform float uBallRadius[${Ef}];
  uniform vec3  uColorA;
  uniform vec3  uColorB;
  uniform vec3  uColorC;
  uniform vec3  uColorHi;

  // Smooth minimum - this is what makes blobs FUSE together.
  // When two surfaces get within k of each other they bridge into one
  // continuous shape; as they separate the bridge necks down and snaps.
  float smin(float a, float b, float k) {
    float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
    return mix(b, a, h) - k * h * (1.0 - h);
  }

  float sdSphere(vec3 p, float r) {
    return length(p) - r;
  }

  // Radius of the cursor's influence, in world units. Outside this the
  // lava is completely untouched - only the portion under the pointer
  // deforms.
  const float MOUSE_R = 1.75;

  // Mouse position in the blob field's world space
  vec2 mouseWorld() {
    return uMouse * vec2(3.6, 2.3);
  }

  // Local influence: 1 at the cursor, smoothly reaching exactly 0 at
  // MOUSE_R. Using smoothstep (not exp) guarantees a hard cutoff so
  // distant blobs are provably unaffected.
  float mouseFalloff(float dist) {
    return smoothstep(MOUSE_R, 0.0, dist);
  }

  // SQUISH: warp the sample space, but ONLY inside MOUSE_R.
  // Scaling coordinates UP along an axis makes the shape look COMPRESSED
  // along that axis; scaling DOWN makes it look STRETCHED. So we compress
  // along the direction of mouse travel and stretch perpendicular to it -
  // exactly how a soft body squishes when you press into it.
  vec3 squishSpace(vec3 p) {
    vec2 mw = mouseWorld();
    vec2 delta = p.xy - mw;
    float dist = length(delta);

    // Hard early-out: outside the cursor radius nothing changes at all
    if (dist > MOUSE_R || uMouseStrength < 0.001) return p;

    // Squared falloff concentrates the effect near the pointer
    float f = mouseFalloff(dist);
    float amt = uMouseStrength * f * f;

    // Decompose into "along the drag" and "perpendicular to the drag"
    vec2 dir  = uMouseDir;
    vec2 perp = vec2(-dir.y, dir.x);
    float along  = dot(delta, dir);
    float across = dot(delta, perp);

    // Compress along the drag, bulge across it
    along  *= 1.0 + amt * 1.30;
    across *= 1.0 - amt * 0.60;

    // Flatten slightly in Z so it reads as pressed toward the viewer
    float pz = p.z * (1.0 + amt * 0.50);

    return vec3(mw + dir * along + perp * across, pz);
  }

  // Signed distance to the whole metaball field
  float sdScene(vec3 p) {
    // Apply the squish warp before evaluating the field
    vec3 q = squishSpace(p);

    float d = sdSphere(q - uBallPos[0], uBallRadius[0]);
    for (int i = 1; i < ${Ef}; i++) {
      float di = sdSphere(q - uBallPos[i], uBallRadius[i]);
      // Larger blend radius - big masses fuse into thick, chunky lava
      d = smin(d, di, 1.25);
    }

    // Finger-press: a dimple right under the cursor ringed by a raised
    // lip, like pressing into dough. Both terms are zero beyond MOUSE_R.
    float md = length(p.xy - mouseWorld());
    if (md < MOUSE_R && uMouseStrength > 0.001) {
      float f = mouseFalloff(md);
      // Tight inward dimple - concentrated in the inner third
      float dent = f * f * f * 0.60 * uMouseStrength;
      // Raised lip around it, peaking at ~60% of the radius
      float ringPos = md / MOUSE_R;
      float rim = exp(-pow((ringPos - 0.60) / 0.20, 2.0)) * f * 0.30 * uMouseStrength;
      d += dent;
      d -= rim;

      // Only the deformed region breaks the strict distance bound, so
      // the step penalty is applied here rather than globally.
      d *= 0.70;
    }

    return d;
  }

  // Surface normal via gradient of the distance field
  vec3 calcNormal(vec3 p) {
    const vec2 e = vec2(0.0015, 0.0);
    return normalize(vec3(
      sdScene(p + e.xyy) - sdScene(p - e.xyy),
      sdScene(p + e.yxy) - sdScene(p - e.yxy),
      sdScene(p + e.yyx) - sdScene(p - e.yyx)
    ));
  }

  // Soft shadow for a bit of depth between overlapping masses
  float softShadow(vec3 ro, vec3 rd) {
    float res = 1.0;
    float t = 0.08;
    for (int i = 0; i < 1; i++) {
      float h = sdScene(ro + rd * t);
      if (h < 0.001) return 0.15;
      res = min(res, 10.0 * h / t);
      t += clamp(h, 0.05, 0.4);
      if (t > 8.0) break;
    }
    return clamp(res, 0.15, 1.0);
  }

  void main() {
    // Normalized device coords, aspect corrected
    vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / uResolution.y;

    // Camera - tighter FOV so the lava mass fills the frame
    vec3 ro = vec3(0.0, 0.0, 9.5);
    vec3 rd = normalize(vec3(uv * 0.95, -1.0));

    // Raymarch - smaller steps because the squish warp distorts the field
    float t = 0.0;
    float d = 0.0;
    bool hit = false;
    for (int i = 0; i < 64; i++) {
      vec3 p = ro + rd * t;
      d = sdScene(p);
      if (d < 0.0025) { hit = true; break; }
      t += max(d * 0.7, 0.004);
      if (t > 32.0) break;
    }

    if (!hit) {
      gl_FragColor = vec4(0.0);
      return;
    }

    vec3 p = ro + rd * t;
    vec3 n = calcNormal(p);
    vec3 viewDir = normalize(ro - p);

    // --- Lighting -------------------------------------------------
    vec3 lightDir1 = normalize(vec3(-0.6, 0.8, 0.9));
    vec3 lightDir2 = normalize(vec3(0.8, -0.4, 0.6));

    float diff1 = max(dot(n, lightDir1), 0.0);
    float diff2 = max(dot(n, lightDir2), 0.0) * 0.5;
    float shadow = softShadow(p + n * 0.02, lightDir1);

    vec3 halfVec = normalize(lightDir1 + viewDir);
    float spec = pow(max(dot(n, halfVec), 0.0), 48.0);

    // Fresnel rim - gives the glossy liquid edge
    float fresnel = pow(1.0 - max(dot(n, viewDir), 0.0), 2.5);

    // --- Color ----------------------------------------------------
    // Slow, continuous drift between three palette shades.
    // Position term makes different regions of the mass differ in hue.
    float posMix = (p.y * 0.12 + p.x * 0.06) + uTime * 0.05;
    float m1 = sin(uTime * 0.11 + posMix) * 0.5 + 0.5;
    float m2 = sin(uTime * 0.07 + posMix * 1.4 + 2.1) * 0.5 + 0.5;

    vec3 base = mix(uColorA, uColorB, m1);
    base = mix(base, uColorC, m2 * 0.65);

    // Depth shading - deeper parts darker
    float depthFade = clamp(1.0 - (t - 6.0) / 14.0, 0.35, 1.0);

    vec3 col = base * (0.30 + 0.70 * diff1 * shadow + 0.30 * diff2);
    col += uColorHi * spec * 0.85;
    col = mix(col, uColorHi, fresnel * 0.45);
    col *= depthFade;

    // Subtle internal glow so the mass reads as translucent lava
    col += base * 0.14;

    // Localized highlight - only lights the lava actually being squished
    float md = length(p.xy - mouseWorld());
    if (md < MOUSE_R) {
      float f = mouseFalloff(md);
      col += uColorHi * f * f * (0.10 + uMouseStrength * 0.30);

      // Bright compression lip where the lava is pinched
      float ringPos = md / MOUSE_R;
      float ring = exp(-pow((ringPos - 0.60) / 0.20, 2.0)) * f * uMouseStrength * 0.35;
      col += uColorHi * ring;
    }

    // Fade the whole field out slightly as the hero scrolls away
    float alpha = (0.88 - uScroll * 0.35) * clamp(1.0 - fresnel * 0.15, 0.0, 1.0);

    gl_FragColor = vec4(col, alpha);
  }
`;return Pn(()=>{const p=t.value,m=p.clientWidth,v=p.clientHeight;l=new oC({antialias:!1,alpha:!0,preserveDrawingBuffer:!0}),l.setSize(m,v),l.setPixelRatio(Math.min(window.devicePixelRatio,1)),p.appendChild(l.domElement),c=new $w,u=new t0(-1,1,1,-1,0,1);const M=[{base:[-3.4,1.4,-.5],amp:[2.4,2,1.3],spd:[.13,.089,.061],ph:[0,1.7,3.4],r:2.6},{base:[3.6,-1.2,.4],amp:[2.2,2.3,1.2],spd:[.101,.127,.073],ph:[2.1,.4,5.2],r:2.3},{base:[-.8,-2.6,-1.1],amp:[2.6,1.9,1.5],spd:[.083,.113,.055],ph:[4.3,2.9,1.1],r:1.95},{base:[1.9,2.6,-.8],amp:[2,2.1,1.1],spd:[.119,.067,.091],ph:[1.2,5.1,2.7],r:1.5},{base:[-4.1,-1.9,.7],amp:[1.8,2.2,1.4],spd:[.071,.103,.047],ph:[3.8,1.5,4.6],r:1.25},{base:[4.2,1.8,-1.4],amp:[2.1,1.8,1.6],spd:[.109,.079,.121],ph:[5.5,3.2,.8],r:1.1},{base:[.4,3.3,.3],amp:[2.3,1.5,1.2],spd:[.059,.131,.085],ph:[2.6,4.8,3.9],r:.75},{base:[-2.1,2.9,-1.7],amp:[1.9,2,1.3],spd:[.127,.053,.097],ph:[.7,2.3,5.8],r:.58},{base:[1.4,-3.2,-.3],amp:[2.2,1.7,1.5],spd:[.093,.117,.065],ph:[4.9,.9,2.2],r:.45}],x=M.map(()=>new se),R=M.map(oe=>oe.r),A=new se(.06,.73,.51),C=new se(.02,.47,.34),b=new se(.02,.31,.23),E=new se(.2,.83,.6);d=new sr({vertexShader:lC,fragmentShader:_,transparent:!0,depthWrite:!1,uniforms:{uResolution:{value:new bt(m,v)},uTime:{value:0},uScroll:{value:0},uMouse:{value:new bt(0,0)},uMouseDir:{value:new bt(1,0)},uMouseStrength:{value:0},uBallPos:{value:x},uBallRadius:{value:R},uColorA:{value:A.clone()},uColorB:{value:C.clone()},uColorC:{value:b.clone()},uColorHi:{value:E.clone()}}});const F=new Lr(new cc(2,2),d);F.frustumCulled=!1,c.add(F);const U=()=>{d.uniforms.uColorA.value.copy(g("--color-primary-500",A)),d.uniforms.uColorB.value.copy(g("--color-primary-700",C)),d.uniforms.uColorC.value.copy(g("--color-primary-900",b)),d.uniforms.uColorHi.value.copy(g("--color-primary-400",E))};U(),window.addEventListener("colorpalettechange",U);const L=new bt(0,0),V=new bt(0,0),k=new bt(1,0);let G=0,X=!1;const B=oe=>{const Re=oe.clientX/window.innerWidth*2-1,Ae=-(oe.clientY/window.innerHeight*2-1),ae=Re-V.x,w=Ae-V.y,T=Math.hypot(ae,w);if(T>8e-4){k.x+=(ae/T-k.x)*.25,k.y+=(w/T-k.y)*.25;const H=Math.hypot(k.x,k.y)||1;k.x/=H,k.y/=H,G=Math.min(1,G+T*7)}V.set(Re,Ae),L.set(Re,Ae),X=!0},q=()=>{X=!1},j=oe=>{if(oe.touches.length>0){const Re=oe.touches[0],Ae=Re.clientX/window.innerWidth*2-1,ae=-(Re.clientY/window.innerHeight*2-1);V.set(Ae,ae),L.set(Ae,ae),X=!0}},N=oe=>{if(oe.touches.length>0){const Re=oe.touches[0],Ae=Re.clientX/window.innerWidth*2-1,ae=-(Re.clientY/window.innerHeight*2-1),w=Ae-V.x,T=ae-V.y,H=Math.hypot(w,T);if(H>8e-4){k.x+=(w/H-k.x)*.25,k.y+=(T/H-k.y)*.25;const ee=Math.hypot(k.x,k.y)||1;k.x/=ee,k.y/=ee,G=Math.min(1,G+H*7)}V.set(Ae,ae),L.set(Ae,ae),X=!0}},le=()=>{X=!1};window.addEventListener("mousemove",B,{passive:!0}),document.addEventListener("mouseleave",q),window.addEventListener("touchstart",j,{passive:!0}),window.addEventListener("touchmove",N,{passive:!0}),window.addEventListener("touchend",le,{passive:!0});let me=!0,ge=0;const ve=()=>{ge=Math.min(1,window.scrollY/window.innerHeight);const oe=me;me=ge<.95,oe&&!me?(cancelAnimationFrame(f),f=null):!oe&&me&&ue()};window.addEventListener("scroll",ve,{passive:!0});const Te=()=>{const oe=p.clientWidth,Re=p.clientHeight;l.setSize(oe,Re),d.uniforms.uResolution.value.set(oe*l.getPixelRatio(),Re*l.getPixelRatio())};Te(),window.addEventListener("resize",Te);const J=performance.now(),ue=()=>{if(f=requestAnimationFrame(ue),!me)return;const oe=(performance.now()-J)/1e3,Re=d.uniforms.uScroll.value;d.uniforms.uScroll.value=Re+(ge-Re)*.08;const Ae=d.uniforms.uScroll.value,ae=d.uniforms.uMouse.value;ae.x+=(L.x-ae.x)*.1,ae.y+=(L.y-ae.y)*.1,G*=.93;const w=X?.3+G*.85:0,T=d.uniforms.uMouseStrength;T.value+=(w-T.value)*.12;const H=d.uniforms.uMouseDir.value;H.x+=(k.x-H.x)*.1,H.y+=(k.y-H.y)*.1;const ee=Math.hypot(H.x,H.y)||1;H.x/=ee,H.y/=ee;for(let Y=0;Y<M.length;Y++){const O=M[Y],I=1+Ae*1.1,_e=1-Ae*.25,fe=1.55;x[Y].set((O.base[0]+Math.sin(oe*O.spd[0]*fe+O.ph[0])*O.amp[0])*I,(O.base[1]+Math.sin(oe*O.spd[1]*fe+O.ph[1])*O.amp[1])*_e-Ae*1.6,O.base[2]+Math.cos(oe*O.spd[2]*fe+O.ph[2])*O.amp[2]-Ae*1.2),R[Y]=O.r*(1+Math.sin(oe*(.055+Y*.009)+Y*1.9)*.16)*(1-Ae*.15);const ne=ae.x*3.6,pe=ae.y*2.3,P=ne-x[Y].x,S=pe-x[Y].y,z=Math.hypot(P,S),Z=R[Y]+.9;if(z<Z){const K=(1-z/Z)*T.value*.1;x[Y].x+=H.x*K,x[Y].y+=H.y*K}}d.uniforms.uTime.value=oe,l.render(c,u)};ve(),me&&ue(),h.push(()=>{cancelAnimationFrame(f),window.removeEventListener("scroll",ve),window.removeEventListener("resize",Te),window.removeEventListener("mousemove",B),document.removeEventListener("mouseleave",q),window.removeEventListener("touchstart",j),window.removeEventListener("touchmove",N),window.removeEventListener("touchend",le),window.removeEventListener("colorpalettechange",U),F.geometry.dispose(),d.dispose(),l.dispose(),l.domElement.parentNode&&l.domElement.parentNode.removeChild(l.domElement)})}),$n(()=>{h.forEach(p=>p())}),(p,m)=>(de(),he("div",{ref_key:"containerRef",ref:t,class:"absolute inset-0 overflow-hidden pointer-events-none"},null,512))}},uc=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},uC={class:"text-primary-500 light:text-primary-600"},dC={__name:"HeroSection",setup(n){Ke.registerPlugin(ft);const e=De(""),t=De(0),i=De(!1),r=["Frontend Developer","Vue.js Specialist","UI/UX Enthusiast","Problem Solver"];let s=null,o=null,a=[],l=null,c=null;const u=De(null),d=De(null),f=De(null),h=De(null),g=De(null),_=De(null),p=De(null),m=De(null),v=()=>{const M=r[t.value],x=e.value.length;if(i.value){if(e.value=M.substring(0,x-1),x===0){i.value=!1,t.value=(t.value+1)%r.length,s=setTimeout(v,500);return}s=setTimeout(v,50)}else{if(e.value=M.substring(0,x+1),x===M.length){i.value=!0,s=setTimeout(v,2e3);return}s=setTimeout(v,100)}};return Pn(()=>{s=setTimeout(v,500),o=Ke.timeline({defaults:{ease:"power3.out"}}),o.fromTo(u.value,{opacity:0,y:30,filter:"blur(8px)"},{opacity:1,y:0,filter:"blur(0px)",clearProps:"filter",duration:.8}).fromTo(d.value,{opacity:0,y:50,filter:"blur(12px)"},{opacity:1,y:0,filter:"blur(0px)",clearProps:"filter",duration:1.1},"-=0.4").fromTo(f.value,{opacity:0,y:50,filter:"blur(12px)"},{opacity:1,y:0,filter:"blur(0px)",clearProps:"filter",duration:1.1},"-=0.6").fromTo(h.value,{opacity:0,y:40,filter:"blur(10px)"},{opacity:1,y:0,filter:"blur(0px)",clearProps:"filter",duration:1},"-=0.5").fromTo(g.value,{opacity:0,y:30,filter:"blur(8px)"},{opacity:1,y:0,filter:"blur(0px)",clearProps:"filter",duration:.8,stagger:.15},"-=0.5"),l=Ke.to(_.value,{yPercent:-30,opacity:.2,ease:"none",scrollTrigger:{trigger:p.value,start:"top top",end:"bottom top",scrub:!0}});const M=d.value,x=14,R=C=>{const b=M.getBoundingClientRect(),E=(C.clientX-b.left)/b.width-.5,F=(C.clientY-b.top)/b.height-.5;c&&c.kill(),c=Ke.to(M,{rotationY:E*x*2,rotationX:-F*x*2,transformPerspective:600,transformOrigin:"center center",duration:.4,ease:"power2.out"})},A=()=>{c&&c.kill(),c=Ke.to(M,{rotationX:0,rotationY:0,duration:.8,ease:"elastic.out(1, 0.4)"})};M.addEventListener("mousemove",R),M.addEventListener("mouseleave",A),a.push(()=>{M.removeEventListener("mousemove",R),M.removeEventListener("mouseleave",A)})}),$n(()=>{var M;clearTimeout(s),o&&o.kill(),l&&((M=l.scrollTrigger)==null||M.kill()),a.forEach(x=>x())}),(M,x)=>(de(),he("section",{ref_key:"heroSectionRef",ref:p,id:"home",class:"relative h-screen flex items-center justify-center overflow-hidden sticky top-0"},[x[3]||(x[3]=y("div",{class:"absolute inset-0 bg-grid opacity-20"},null,-1)),At(cC),y("div",{ref_key:"contentRef",ref:_,class:"relative text-center px-4 sm:px-6 lg:px-8 mx-auto"},[y("p",{ref_key:"greetingRef",ref:u,class:"text-primary-400 tracking-widest text-sm mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] light:drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"}," PORTFOLIO ",512),y("h1",{ref_key:"nameRef",ref:d,class:"font-griaste text-5xl sm:text-6xl md:text-7xl text-white light:text-secondary-900 mb-4 foil-text name-glow"}," Kenneth Cortez ",512),y("h2",{ref_key:"roleRef",ref:f,class:"text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary-300 light:text-secondary-800 mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] light:drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"},[x[0]||(x[0]=Hi(" I'm a ",-1)),y("span",uC,ye(e.value),1),x[1]||(x[1]=y("span",{class:"animate-pulse text-primary-500 light:text-primary-600"},"|",-1))],512),y("p",{ref_key:"descriptionRef",ref:h,class:"light:text-black text-white text-lg mb-8 max-w-2xl mx-auto"}," I build modern, responsive web applications. In every project, creating a seamless user experience is my primary focus. ",512),y("div",{ref_key:"buttonsRef",ref:g,class:"flex flex-col sm:flex-row items-center justify-center gap-4"},[x[2]||(x[2]=y("a",{href:"#projects",class:"bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25 w-full sm:w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] light:drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"}," View My Work ",-1)),y("a",{ref_key:"resumeBtnRef",ref:m,href:"https://docs.google.com/document/d/1pxuH9Ue2NJ18GnzGR44gVKfEIvoe9YvMHj26P7A0RDY/edit?usp=sharing",target:"_blank",class:"resume-btn light:text-primary-800 light:border-primary-800 relative border border-white text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"}," MY RESUME ",512)],512)],512)],512))}},fC=uc(dC,[["__scopeId","data-v-d1ff7438"]]);/*!
 * ScrollToPlugin 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Hn,Nv,ns,Sr,Us,Ov,wa,Qc,kv=function(){return typeof window<"u"},Bv=function(){return Hn||kv()&&(Hn=window.gsap)&&Hn.registerPlugin&&Hn},zv=function(e){return typeof e=="string"},xg=function(e){return typeof e=="function"},Ql=function(e,t){var i=t==="x"?"Width":"Height",r="scroll"+i,s="client"+i;return e===ns||e===Sr||e===Us?Math.max(Sr[r],Us[r])-(ns["inner"+i]||Sr[s]||Us[s]):e[r]-e["offset"+i]},ec=function(e,t){var i="scroll"+(t==="x"?"Left":"Top");return e===ns&&(e.pageXOffset!=null?i="page"+t.toUpperCase()+"Offset":e=Sr[i]!=null?Sr:Us),function(){return e[i]}},hC=function(e,t,i,r){if(xg(e)&&(e=e(t,i,r)),typeof e!="object")return zv(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s={},o;for(o in e)s[o]=o!=="onAutoKill"&&xg(e[o])?e[o](t,i,r):e[o];return s},Vv=function(e,t){if(e=Ov(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var i=e.getBoundingClientRect(),r=!t||t===ns||t===Us,s=r?{top:Sr.clientTop-(ns.pageYOffset||Sr.scrollTop||Us.scrollTop||0),left:Sr.clientLeft-(ns.pageXOffset||Sr.scrollLeft||Us.scrollLeft||0)}:t.getBoundingClientRect(),o={x:i.left-s.left,y:i.top-s.top};return!r&&t&&(o.x+=ec(t,"x")(),o.y+=ec(t,"y")()),o},vg=function(e,t,i,r,s){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-s:zv(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+r-s:e==="max"?Ql(t,i)-s:Math.min(Ql(t,i),Vv(e,t)[i]-s)},ip=function(){Hn=Bv(),kv()&&Hn&&typeof document<"u"&&document.body&&(ns=window,Us=document.body,Sr=document.documentElement,Ov=Hn.utils.toArray,Hn.config({autoKillThreshold:7}),wa=Hn.config(),Nv=1)},za={version:"3.15.0",name:"scrollTo",rawVars:1,register:function(e){Hn=e,ip()},init:function(e,t,i,r,s){Nv||ip();var o=this,a=Hn.getProperty(e,"scrollSnapType");o.isWin=e===ns,o.target=e,o.tween=i,t=hC(t,r,e,s),o.vars=t,o.autoKill=!!("autoKill"in t?t:wa).autoKill,o.getX=ec(e,"x"),o.getY=ec(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),Qc||(Qc=Hn.core.globals().ScrollTrigger),Hn.getProperty(e,"scrollBehavior")==="smooth"&&Hn.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,vg(t.x,e,"x",o.x,t.offsetX||0),r,s),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,vg(t.y,e,"y",o.y,t.offsetY||0),r,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var i=t._pt,r=t.target,s=t.tween,o=t.autoKill,a=t.xPrev,l=t.yPrev,c=t.isWin,u=t.snap,d=t.snapInline,f,h,g,_,p;i;)i.r(e,i.d),i=i._next;f=c||!t.skipX?t.getX():a,h=c||!t.skipY?t.getY():l,g=h-l,_=f-a,p=wa.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(_>p||_<-p)&&f<Ql(r,"x")&&(t.skipX=1),!t.skipY&&(g>p||g<-p)&&h<Ql(r,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(s.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(s,t.vars.onAutoKillParams||[]))),c?ns.scrollTo(t.skipX?f:t.x,t.skipY?h:t.y):(t.skipY||(r.scrollTop=t.y),t.skipX||(r.scrollLeft=t.x)),u&&(e===1||e===0)&&(h=r.scrollTop,f=r.scrollLeft,d?r.style.scrollSnapType=d:r.style.removeProperty("scroll-snap-type"),r.scrollTop=h+1,r.scrollLeft=f+1,r.scrollTop=h,r.scrollLeft=f),t.xPrev=t.x,t.yPrev=t.y,Qc&&Qc.update()},kill:function(e){var t=e==="scrollTo",i=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),i>-1&&this._props.splice(i,1),!this._props.length}};za.max=Ql;za.getOffset=Vv;za.buildGetter=ec;za.config=function(n){wa||ip()||(wa=Hn.config());for(var e in n)wa[e]=n[e]};Bv()&&Hn.registerPlugin(za);Ke.registerPlugin(ft,za);function n0(n,e={}){const{y:t=60,duration:i=1.2,stagger:r=.12,start:s="top 85%",blur:o=12,scale:a=1.05,ease:l="power3.out",delay:c=0,onComplete:u}=e;Ke.set(n,{opacity:0,y:t,scale:a,filter:`blur(${o}px)`,willChange:"transform, opacity, filter"});const f=Ke.to(n,{opacity:1,y:0,scale:1,filter:"blur(0px)",duration:i,stagger:r,delay:c,ease:l,scrollTrigger:{trigger:n,start:s,once:!0},onComplete:u}).scrollTrigger;return Array.isArray(f)?f:[f]}function _d(n,e={}){const{x:t=-120,opacity:i=1,start:r="top 90%",end:s="top 40%",stagger:o=0,blur:a=0}=e;Ke.set(n,{x:t,opacity:0,filter:a?`blur(${a}px)`:"blur(0px)",willChange:"transform, opacity, filter"});const c=Ke.to(n,{x:0,opacity:i,filter:"blur(0px)",ease:"none",stagger:o,scrollTrigger:{trigger:n,start:r,end:s,scrub:!0}}).scrollTrigger;return Array.isArray(c)?c:[c]}function pC(n,e=8){const t=r=>{const s=n.getBoundingClientRect(),o=(r.clientX-s.left)/s.width-.5,a=(r.clientY-s.top)/s.height-.5;Ke.to(n,{rotationY:o*e*2,rotationX:-a*e*2,transformPerspective:800,duration:.3,ease:"power2.out"})},i=()=>{Ke.to(n,{rotationX:0,rotationY:0,duration:.5,ease:"elastic.out(1, 0.5)"})};return n.addEventListener("mousemove",t),n.addEventListener("mouseleave",i),()=>{n.removeEventListener("mousemove",t),n.removeEventListener("mouseleave",i)}}function mC(n={}){const{size:e=40,trailLength:t=200,trailWidth:i=18}=n,r=F=>getComputedStyle(document.documentElement).getPropertyValue(F).trim()||"16 185 129";let s=null;const o=()=>{if(s)return s;const F=r("--color-primary-500").split(" ").map(Number),U=r("--color-primary-400").split(" ").map(Number),L=r("--color-primary-300").split(" ").map(Number),V=r("--color-primary-700").split(" ").map(Number),k=r("--color-primary-900").split(" ").map(Number);return s={particleColors:[[255,255,255],L,F,V],outerGlow:[F,V,k,k],midGlow:[L,F,V],coreGlow:[[255,255,255],U,L,F]},s},a=()=>{s=null};window.addEventListener("colorpalettechange",a);const l=document.createElement("canvas");l.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
  `,document.body.appendChild(l);const c=l.getContext("2d"),u=()=>{l.width=window.innerWidth,l.height=window.innerHeight};u(),window.addEventListener("resize",u);const d={x:window.innerWidth/2,y:window.innerHeight/2},f={x:d.x,y:d.y},h=[];let g=!1,_=null;const p=F=>{d.x=F.clientX,d.y=F.clientY,g=!0,clearTimeout(_),_=setTimeout(()=>{g=!1},200)},m=()=>{g=!1,clearTimeout(_)},v=F=>{F.touches.length>0&&(d.x=F.touches[0].clientX,d.y=F.touches[0].clientY)},M=()=>{g=!0,clearTimeout(_)},x=()=>{clearTimeout(_),_=setTimeout(()=>{g=!1},200)},R=F=>{F.touches.length>0&&(d.x=F.touches[0].clientX,d.y=F.touches[0].clientY,f.x=d.x,f.y=d.y,g=!0)},A=()=>{g=!1},C=()=>{g=!1},b=Ke.to({},{duration:.2,repeat:-1,yoyo:!0,ease:"sine.inOut",onUpdate:function(){}}),E=Ke.ticker.add(()=>{c.clearRect(0,0,l.width,l.height);const F=d.x-f.x,U=d.y-f.y,L=Math.sqrt(F*F+U*U);if(g){const V=Math.max(1,Math.min(4,Math.floor(L*.15)+1));for(let k=0;k<V;k++){const G=Math.random()*Math.PI*2,X=Math.random()*e*.4;h.push({x:d.x+Math.cos(G)*X,y:d.y+Math.sin(G)*X,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,radius:(Math.random()*.6+.4)*(i*.35),life:1,decay:.004+Math.random()*.004,colorIndex:Math.floor(Math.random()*4),swirl:(Math.random()-.5)*.02,angle:Math.random()*Math.PI*2})}}h.length>t&&h.splice(0,h.length-t);for(let V=h.length-1;V>=0;V--){const k=h[V];if(k.life-=k.decay,k.life<=0){h.splice(V,1);continue}k.angle+=k.swirl,k.x+=k.vx+Math.cos(k.angle)*.15,k.y+=k.vy+Math.sin(k.angle)*.15;const G=k.life*.35,{particleColors:X}=o(),[B,q,j]=X[k.colorIndex],N=c.createRadialGradient(k.x,k.y,0,k.x,k.y,k.radius*2.5);N.addColorStop(0,`rgba(${B}, ${q}, ${j}, ${G})`),N.addColorStop(.5,`rgba(${B}, ${q}, ${j}, ${G*.4})`),N.addColorStop(1,`rgba(${B}, ${q}, ${j}, 0)`),c.beginPath(),c.arc(k.x,k.y,k.radius*2.5,0,Math.PI*2),c.fillStyle=N,c.fill()}if(g){const V=Date.now()/1e3,k=1+Math.sin(V*3)*.08+Math.sin(V*7)*.05,G=Math.sin(V*2.5)*2,X=Math.cos(V*2.1)*2,{outerGlow:B,midGlow:q,coreGlow:j}=o(),N=c.createRadialGradient(d.x+G,d.y+X,0,d.x+G,d.y+X,e*1.5*k);N.addColorStop(0,`rgba(${B[0]}, 0.3)`),N.addColorStop(.4,`rgba(${B[1]}, 0.18)`),N.addColorStop(.7,`rgba(${B[2]}, 0.08)`),N.addColorStop(1,`rgba(${B[3]}, 0)`),c.beginPath(),c.arc(d.x+G,d.y+X,e*1.5*k,0,Math.PI*2),c.fillStyle=N,c.fill();const le=c.createRadialGradient(d.x+G,d.y+X,0,d.x+G,d.y+X,e*.7*k);le.addColorStop(0,`rgba(${q[0]}, 0.5)`),le.addColorStop(.5,`rgba(${q[1]}, 0.3)`),le.addColorStop(1,`rgba(${q[2]}, 0)`),c.beginPath(),c.arc(d.x+G,d.y+X,e*.7*k,0,Math.PI*2),c.fillStyle=le,c.fill();const me=c.createRadialGradient(d.x+G,d.y+X,0,d.x+G,d.y+X,e*.35*k);me.addColorStop(0,`rgba(${j[0]}, 0.85)`),me.addColorStop(.3,`rgba(${j[1]}, 0.6)`),me.addColorStop(.7,`rgba(${j[2]}, 0.25)`),me.addColorStop(1,`rgba(${j[3]}, 0)`),c.beginPath(),c.arc(d.x+G,d.y+X,e*.35*k,0,Math.PI*2),c.fillStyle=me,c.fill()}f.x=d.x,f.y=d.y});return window.addEventListener("mousemove",p),window.addEventListener("mouseleave",m),window.addEventListener("mousedown",M),window.addEventListener("mouseup",x),window.addEventListener("touchmove",v,{passive:!0}),window.addEventListener("touchstart",R,{passive:!0}),window.addEventListener("touchend",A,{passive:!0}),window.addEventListener("touchcancel",C,{passive:!0}),()=>{clearTimeout(_),window.removeEventListener("mousemove",p),window.removeEventListener("mouseleave",m),window.removeEventListener("mousedown",M),window.removeEventListener("mouseup",x),window.removeEventListener("touchmove",v),window.removeEventListener("touchstart",R),window.removeEventListener("touchend",A),window.removeEventListener("touchcancel",C),window.removeEventListener("resize",u),window.removeEventListener("colorpalettechange",a),Ke.ticker.remove(E),b.kill(),l.remove()}}const gC={id:"about",class:"pt-40 sm:pt-48 md:pt-56 pb-20 relative overflow-x-clip"},_C={class:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},xC={class:"flex items-center justify-between mb-10"},vC={class:"flex items-center gap-1 p-1 rounded-lg bg-secondary-800 border border-secondary-700 light:bg-secondary-100 light:border-secondary-200"},yC={class:"grid lg:grid-cols-2 gap-12 items-start"},bC={class:"flex flex-wrap gap-3"},SC={class:"text-3xl mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 inline-block"},MC={class:"text-white light:text-secondary-900 font-semibold mb-2 text-xl"},wC=["data-count"],EC={class:"text-secondary-400 light:text-secondary-500 text-sm"},TC=["src","alt"],AC={class:"absolute inset-x-0 bottom-0 p-6 pointer-events-none"},CC={class:"text-white font-bold text-2xl mb-2 drop-shadow-lg"},RC=["data-count"],PC={class:"text-white/80 text-sm drop-shadow"},DC={__name:"AboutSection",setup(n){Ke.registerPlugin(ft);const e=new Date("2021-09-01"),t=an(()=>{const m=(new Date-e)/(1e3*60*60*24*365.25);return Math.floor(m)}),i=an(()=>[{value:t.value,suffix:"+",title:"Years Work Experience",description:"Building production-ready web applications",icon:"💼",image:"https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=600&q=80",bgClass:"bg-secondary-800 light:bg-white"},{value:50,suffix:"+",title:"Projects Delivered",description:"Scalable, maintainable, and user-friendly applications",icon:"🚀",image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",bgClass:"bg-secondary-700 light:bg-secondary-50"},{title:"Creative Designer",description:"Crafting visually stunning and memorable experiences",icon:"🎨",image:"https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&q=80",bgClass:"bg-secondary-600 light:bg-secondary-100"},{title:"Continuous Learner",description:"Always exploring new technologies and best practices",icon:"📚",image:"https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=600&q=80",bgClass:"bg-secondary-500 light:bg-secondary-200"}]),r=De(null),s=De(null),o=De(null),a=De(null),l=De("stack");let c=[],u=[],d=[];const f=()=>{const _=l.value==="stack"?a.value:o.value;if(!_)return;u.forEach(m=>{var v;(v=m.scrollTrigger)==null||v.kill(),m.kill()}),u=[],_.querySelectorAll("[data-count]").forEach(m=>{const v=parseInt(m.dataset.count,10),M={val:0},x=Ke.to(M,{val:v,duration:Math.max(.5,v*.04),ease:"power2.out",scrollTrigger:{trigger:m,start:"top 85%",once:!0},onUpdate:()=>{m.textContent=Math.floor(M.val)}});u.push(x)})},h=()=>{if(!a.value)return;d.forEach(E=>E()),d=[];const _=Array.from(a.value.querySelectorAll(".stack-card"));if(_.length===0)return;const p=[-6,4,-3,2],m=[0,8,16,24],v=()=>{_.forEach((E,F)=>{F===0?Ke.to(E,{x:0,y:0,rotation:0,zIndex:_.length-F,duration:.3,ease:"power2.out"}):Ke.to(E,{x:0,y:m[F%m.length],rotation:p[F%p.length],zIndex:_.length-F,duration:.3,ease:"power2.out"})})};v();let M=!1,x=0,R=0,A=0,C=0;const b=E=>{d.forEach(V=>V()),d=[];const F=V=>{M=!0;const k=V.touches?V.touches[0]:V;x=k.clientX,R=k.clientY,A=0,C=0,Ke.killTweensOf(E),Ke.set(E,{cursor:"grabbing"})},U=V=>{if(!M)return;const k=V.touches?V.touches[0]:V;A=k.clientX-x,C=k.clientY-R,Ke.set(E,{x:A,y:C,rotation:A*.05})},L=()=>{if(!M)return;M=!1,Ke.set(E,{cursor:"grab"});const V=120,k=Math.abs(A),G=Math.abs(C);if(k>V||G>V){const X=A>0?1:-1,B=C>0?1:-1,q=X*Math.min(Math.abs(A)+100,window.innerWidth*.35),j=B*200;Ke.to(E,{x:q,y:j,rotation:X*20,opacity:0,duration:.5,ease:"power2.in",onComplete:()=>{Ke.set(E,{opacity:1}),_.push(_.shift()),v(),b(_[0])}})}else Ke.to(E,{x:0,y:0,rotation:0,duration:.4,ease:"power3.out"})};E.addEventListener("pointerdown",F),window.addEventListener("pointermove",U),window.addEventListener("pointerup",L),d.push(()=>{E.removeEventListener("pointerdown",F),window.removeEventListener("pointermove",U),window.removeEventListener("pointerup",L)})};b(_[0])},g=_=>{l.value=_,Rr(()=>{_==="stack"&&h(),f()})};return Pn(()=>{c.push(..._d(r.value,{x:-120,start:"top 90%",end:"top 40%"})),h(),f()}),$n(()=>{c.forEach(_=>_.kill()),u.forEach(_=>{var p;(p=_.scrollTrigger)==null||p.kill(),_.kill()}),d.forEach(_=>_())}),(_,p)=>(de(),he("section",gC,[p[7]||(p[7]=lo('<svg width="0" height="0" class="absolute" aria-hidden="true"><defs><clipPath id="about-concave-clip" clipPathUnits="objectBoundingBox"><path d="M0 0 Q0.5 0.2 1 0 L1 1 L0 1 Z"></path></clipPath></defs></svg><div class="absolute -top-24 sm:-top-24 md:-top-32 left-0 right-0 bottom-0 bg-dark-800 light:bg-white" style="clip-path:url(#about-concave-clip);"></div><svg class="absolute -top-24 sm:-top-24 md:-top-32 left-0 w-full h-[calc(100%+6rem)] sm:h-[calc(100%+6rem)] md:h-[calc(100%+8rem)] pointer-events-none" viewBox="0 0 1 1" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0 Q0.5 0.2 1 0" fill="none" stroke="rgb(var(--color-primary-500) / 0.4)" stroke-width="0.002" vector-effect="non-scaling-stroke"></path></svg>',3)),y("div",_C,[y("div",xC,[y("h2",{ref_key:"titleRef",ref:r,class:"section-title"},"About Me",512),y("div",vC,[y("button",{onClick:p[0]||(p[0]=m=>g("grid")),class:st(["px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300",l.value==="grid"?"bg-primary-600 text-white shadow-md shadow-primary-500/25":"text-secondary-400 hover:text-white light:text-secondary-500 light:hover:text-secondary-900"]),"aria-label":"Grid view"},[...p[2]||(p[2]=[y("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})],-1)])],2),y("button",{onClick:p[1]||(p[1]=m=>g("stack")),class:st(["px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300",l.value==="stack"?"bg-primary-600 text-white shadow-md shadow-primary-500/25":"text-secondary-400 hover:text-white light:text-secondary-500 light:hover:text-secondary-900"]),"aria-label":"Stack view"},[...p[3]||(p[3]=[y("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)])],2)])]),y("div",yC,[y("div",{ref_key:"textRef",ref:s,class:"order-1 lg:order-1"},[p[4]||(p[4]=y("p",{class:"text-secondary-300 light:text-secondary-700 text-lg leading-relaxed mb-6"}," I build modern web applications that are as functional as they are beautiful. What started as a curiosity about the web has evolved into a career creating impactful digital products. ",-1)),p[5]||(p[5]=y("p",{class:"text-secondary-400 light:text-secondary-500 leading-relaxed mb-8"}," I specialize in the Vue.js ecosystem but I'm able to adjust to any framework, always prioritizing clean, maintainable code and highly intuitive user experiences. ",-1)),y("div",bC,[(de(),he(je,null,rt(["Vue 3","JavaScript","TypeScript","Node.js","Tailwind CSS"],m=>y("span",{key:m,class:"px-4 py-2 bg-secondary-800/50 border border-secondary-700 rounded-full text-sm text-secondary-300 hover:border-primary-500/50 hover:text-primary-400 light:bg-secondary-100 light:border-secondary-200 light:text-secondary-600 light:hover:border-primary-500/50 light:hover:text-primary-600 transition-all duration-300 hover:scale-105 cursor-default"},ye(m),1)),64)),(de(),he(je,null,rt(["Git","Figma"],m=>y("span",{key:m,class:"px-4 py-2 bg-secondary-800/50 border border-secondary-700 rounded-full text-sm text-secondary-300 hover:border-primary-500/50 hover:text-primary-400 light:bg-secondary-100 light:border-secondary-200 light:text-secondary-600 light:hover:border-primary-500/50 light:hover:text-primary-600 transition-all duration-300 hover:scale-105 cursor-default"},ye(m),1)),64))])],512),l.value==="grid"?(de(),he("div",{key:0,ref_key:"gridRef",ref:o,class:"order-2 lg:order-2 grid sm:grid-cols-2 gap-6"},[(de(!0),he(je,null,rt(i.value,m=>(de(),he("div",{key:m.title,class:"group bg-secondary-800 border border-secondary-700 rounded-xl p-6 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1 transition-all duration-300 light:bg-white light:border-secondary-200 light:hover:border-primary-500/50 light:hover:shadow-primary-500/10"},[y("div",SC,ye(m.icon),1),y("h3",MC,[m.value!==void 0?(de(),he(je,{key:0},[y("span",{"data-count":m.value},ye(m.value),9,wC),Hi(ye(m.suffix),1)],64)):(de(),he(je,{key:1},[Hi(ye(m.title),1)],64))]),y("p",EC,ye(m.description),1)]))),128))],512)):(de(),he("div",{key:1,ref_key:"stackRef",ref:a,class:"order-2 lg:order-2 relative h-[24rem] sm:h-[22rem] select-none"},[(de(!0),he(je,null,rt(i.value,(m,v)=>(de(),he("div",{key:m.title,class:st(["stack-card absolute inset-0 group border border-secondary-700 rounded-xl overflow-hidden hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10 transition-colors duration-300 light:border-secondary-200 light:hover:border-primary-500/50 light:hover:shadow-primary-500/10 cursor-grab active:cursor-grabbing touch-none",m.bgClass]),style:Sn({zIndex:i.value.length-v})},[y("img",{src:m.image,alt:m.title,class:"absolute inset-0 w-full h-full object-cover pointer-events-none select-none",loading:"lazy",draggable:"false"},null,8,TC),p[6]||(p[6]=y("div",{class:"absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none"},null,-1)),y("div",AC,[y("h3",CC,[m.value!==void 0?(de(),he(je,{key:0},[y("span",{"data-count":m.value},ye(m.value),9,RC),Hi(ye(m.suffix)+" "+ye(m.title),1)],64)):(de(),he(je,{key:1},[Hi(ye(m.title),1)],64))]),y("p",PC,ye(m.description),1)])],6))),128))],512))])])]))}},Tf=[{name:"Vue.js",category:"Frontend",description:"Progressive JavaScript framework for building user interfaces",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"},{name:"TypeScript",category:"Language",description:"Typed superset of JavaScript for safer code",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},{name:"JavaScript",category:"Language",description:"High-level programming language for the web",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},{name:"Node.js",category:"Backend",description:"JavaScript runtime for building server-side applications",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},{name:"Tailwind CSS",category:"Styling",description:"Utility-first CSS framework for rapid UI development",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"},{name:"Vite",category:"Tooling",description:"Next-generation frontend build tool",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg"},{name:"GitHub",category:"DevOps",description:"Platform for version control and collaboration",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},{name:"GitHub Desktop",category:"Tooling",description:"Visual interface for Git version control",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},{name:"Pinia",category:"Frontend",description:"State management library for Vue.js",image:"https://pinia.vuejs.org/logo.svg"},{name:"Three.js",category:"Frontend",description:"3D graphics library for the web",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"},{name:"GSAP",category:"Frontend",description:"High-performance animation library",image:"https://gsap.com/favicon.ico"},{name:"Lucide",category:"Frontend",description:"Beautiful & consistent icon toolkit",image:"https://lucide.dev/favicon.ico"},{name:"Axios",category:"Backend",description:"Promise-based HTTP client for the browser and Node.js",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg"},{name:"shadcn/ui",category:"Frontend",description:"Reusable components built with Radix UI and Tailwind",image:"https://ui.shadcn.com/favicon.ico"},{name:"Python",category:"Language",description:"Versatile programming language for data and automation",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},{name:"Jupyter Notebook",category:"Tooling",description:"Interactive computing environment for data science",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"},{name:"Google Colab",category:"Tooling",description:"Free cloud-based Jupyter notebook environment",image:"https://colab.research.google.com/img/colab_favicon_256px.png"},{name:"VS Code",category:"Tooling",description:"Powerful code editor with rich extension ecosystem",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"},{name:"Figma",category:"Design",description:"Collaborative interface design tool for prototyping and UI/UX",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"}],LC={id:"tech-stack",class:"py-20 bg-dark-800 light:bg-secondary-100 relative overflow-hidden"},IC={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},UC=["onClick"],FC=["data-column"],NC={class:"tech-brick group relative bg-secondary-800 border border-secondary-700 rounded-xl p-6 overflow-hidden hover:border-primary-500 hover:shadow-xl hover:shadow-primary-500/10 transition-colors duration-300 light:bg-white light:border-secondary-200 light:hover:border-primary-500 light:hover:shadow-primary-500/10"},OC={class:"tech-image-overlay absolute inset-0 z-10 flex items-center justify-center bg-dark-900/95 light:bg-white/95 backdrop-blur-sm overflow-hidden"},kC=["src","alt"],BC={class:"relative z-0 flex flex-col h-full"},zC={class:"flex items-start justify-between mb-4"},VC={class:"w-10 h-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"},HC=["src","alt"],GC={class:"text-xs text-primary-400 bg-primary-500/10 px-2 py-1 rounded-full"},WC={class:"text-white light:text-secondary-900 font-bold text-lg mb-2 group-hover:text-primary-400 transition-colors duration-300"},XC={class:"text-secondary-300 light:text-secondary-500 text-sm"},$C={__name:"TechStack",setup(n){Ke.registerPlugin(ft);const e=an(()=>["All",...new Set(Tf.map(v=>v.category))]),t=De("All"),i=De(null),r=De(null),s=De(null),o=De(null),a=De(typeof window<"u"?window.innerWidth:1024);let l=[],c=[],u=[],d=null,f=null;const h=an(()=>t.value==="All"?Tf:Tf.filter(v=>v.category===t.value)),g=an(()=>{if(t.value!=="All")return!1;const v=h.value.length;return a.value>=1024?v>4:a.value>=640?v>2:!1}),_=v=>{t.value=v},p=()=>{if(!i.value)return;const v=i.value.querySelectorAll(".brick-wrapper");if(c.forEach(x=>{var R;(R=x.scrollTrigger)==null||R.kill(),x.kill()}),c=[],t.value!=="All"){v.forEach(x=>{const R=x.querySelector(".tech-brick");R&&Ke.set(R,{yPercent:0})});return}const M=window.innerWidth>=768;v.forEach(x=>{const R=x.querySelector(".tech-brick");if(!R)return;const A=parseInt(x.dataset.column,10);if(!M){Ke.set(R,{yPercent:0});return}if(A===1||A===3){const C=Ke.fromTo(R,{yPercent:-20},{yPercent:20,ease:"none",scrollTrigger:{trigger:i.value,start:"top bottom",end:"bottom top",scrub:.6}});c.push(C)}})},m=()=>{if(!i.value)return;u.forEach(M=>M()),u=[],i.value.querySelectorAll(".tech-brick").forEach(M=>{const x=M.querySelector(".tech-image-overlay");if(!x)return;Ke.set(x,{clipPath:"circle(0% at 50% 0%)",visibility:"hidden"});const R=()=>{Ke.killTweensOf(x),Ke.set(x,{visibility:"visible"}),Ke.to(x,{clipPath:"circle(150% at 50% 0%)",duration:.6,ease:"power3.out",overwrite:"auto"})},A=()=>{Ke.killTweensOf(x),Ke.set(x,{visibility:"hidden"}),Ke.to(x,{clipPath:"circle(0% at 50% 0%)",duration:.5,ease:"power3.in",overwrite:"auto"})};M.addEventListener("mouseenter",R),M.addEventListener("mouseleave",A),M.addEventListener("touchstart",R,{passive:!0}),M.addEventListener("touchend",A,{passive:!0}),M.addEventListener("touchcancel",A,{passive:!0}),u.push(()=>{M.removeEventListener("mouseenter",R),M.removeEventListener("mouseleave",A),M.removeEventListener("touchstart",R),M.removeEventListener("touchend",A),M.removeEventListener("touchcancel",A)})})};return Pn(()=>{l.push(..._d(r.value,{x:-120,start:"top 90%",end:"top 40%"})),p(),m(),f=window.innerWidth>=768;const v=()=>{a.value=window.innerWidth;const M=window.innerWidth>=768;M!==f&&(f=M,p())};window.addEventListener("resize",v),d=()=>window.removeEventListener("resize",v)}),$n(()=>{l.forEach(v=>v.kill()),c.forEach(v=>{var M;(M=v.scrollTrigger)==null||M.kill(),v.kill()}),u.forEach(v=>v()),d==null||d()}),Ai(h,async()=>{await Rr(),p(),m()}),(v,M)=>(de(),he("section",LC,[M[0]||(M[0]=y("div",{class:"absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"},null,-1)),y("div",IC,[y("h2",{ref_key:"titleRef",ref:r,class:"section-title text-4xl font-bold text-white light:text-secondary-900 mb-6"},"Tech Stack",512),y("p",{ref_key:"subtitleRef",ref:s,class:"section-subtitle text-secondary-400 light:text-secondary-500 mb-8"},"Technologies and tools I work with",512),y("div",{ref_key:"filterRef",ref:o,class:"flex flex-wrap gap-3 mb-10"},[(de(!0),he(je,null,rt(e.value,x=>(de(),he("button",{key:x,onClick:R=>_(x),class:st(["px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105",t.value===x?"bg-primary-600 text-white shadow-lg shadow-primary-500/25":"bg-secondary-800 text-secondary-400 hover:text-white border border-secondary-700 light:bg-white light:text-secondary-500 light:hover:text-secondary-900 light:border-secondary-200"])},ye(x),11,UC))),128))],512),y("div",{ref_key:"gridRef",ref:i,class:"brick-wall"},[(de(!0),he(je,null,rt(h.value,(x,R)=>(de(),he("div",{key:x.name,"data-column":R%4,class:st(["brick-wrapper",{"brick-offset":g.value}])},[y("div",NC,[y("div",OC,[y("img",{src:x.image,alt:`${x.name} logo`,class:"w-24 h-24 object-contain drop-shadow-lg",loading:"lazy"},null,8,kC)]),y("div",BC,[y("div",zC,[y("div",VC,[y("img",{src:x.image,alt:`${x.name} logo`,class:"w-full h-full object-contain",loading:"lazy"},null,8,HC)]),y("span",GC,ye(x.category),1)]),y("h3",WC,ye(x.name),1),y("p",XC,ye(x.description),1)])])],10,FC))),128))],512)])]))}},jC=uc($C,[["__scopeId","data-v-3c28cea0"]]),Af=[{id:1,title:"E-Commerce Platform",description:"A full-featured e-commerce platform with product management, cart functionality, and Stripe payment integration.",tech:["Vue 3","Node.js","MongoDB","Stripe"],github:"https://github.com/yourusername/ecommerce-platform",demo:"https://ecommerce-demo.example.com",image:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",features:["Product catalog with search, filtering, and category browsing","Shopping cart with real-time price calculations and quantity management","Secure Stripe payment integration with order confirmation","User authentication with profile and order history","Admin dashboard for product and inventory management"]},{id:2,title:"Task Management App",description:"A collaborative task management application with real-time updates, drag-and-drop boards, and team collaboration features.",tech:["Vue 3","Firebase","Tailwind CSS"],github:"https://github.com/yourusername/task-manager",demo:"https://task-manager-demo.example.com",image:"https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",features:["Drag-and-drop kanban boards for task organization","Real-time collaboration with live updates across team members","Task assignments, due dates, and priority levels","Project workspaces with customizable columns and labels","Activity timeline and notifications for team updates"]},{id:3,title:"Weather Dashboard",description:"A real-time weather dashboard with location-based forecasts, interactive maps, and 7-day weather predictions.",tech:["Vue 3","REST API","Chart.js"],github:"https://github.com/yourusername/weather-dashboard",demo:"https://weather-demo.example.com",image:"https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",features:["Real-time weather data with location-based search","Interactive 7-day forecast with temperature trends","Hourly breakdown with precipitation and wind speed","Visual weather charts using Chart.js for data visualization","Responsive design optimized for mobile and desktop"]},{id:4,title:"Social Media Analytics",description:"An analytics dashboard for social media managers to track engagement, follower growth, and content performance across platforms.",tech:["Vue 3","D3.js","Express","PostgreSQL"],github:"https://github.com/yourusername/social-analytics",demo:"https://analytics-demo.example.com",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",features:["Cross-platform analytics aggregation for major social networks","Interactive data visualizations with D3.js charts","Follower growth tracking with trend analysis","Content performance metrics and engagement scoring","Customizable reporting with export capabilities"]},{id:5,title:"Recipe Finder",description:"A recipe discovery app with ingredient-based search, meal planning, and step-by-step cooking instructions.",tech:["Vue 3","Vuex","Tailwind CSS"],github:"https://github.com/yourusername/recipe-finder",demo:"https://recipe-demo.example.com",image:"https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=400&fit=crop",features:["Ingredient-based recipe search with smart matching","Meal planning calendar with grocery list generation","Step-by-step cooking instructions with timers","Recipe filtering by dietary preferences and cuisine","Save and organize favorite recipes in collections"]},{id:6,title:"Dev Portfolio Template",description:"A modern, responsive developer portfolio template with dark mode, smooth animations, and project showcase features.",tech:["Vue 3","Tailwind CSS","Vite"],github:"https://github.com/yourusername/dev-portfolio",demo:"https://portfolio-demo.example.com",image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",features:["Dark/light mode with smooth theme transitions","GSAP-powered scroll animations and micro-interactions","Interactive project showcase with detail modals","Fully responsive layout across all device sizes","Optimized performance with Vite build tooling"]},{id:7,title:"Dev Portfolio",description:"A modern, responsive developer portfolio template with dark mode, smooth animations, and project showcase features.",tech:["Vue 3","Tailwind CSS","Vite"],github:"https://github.com/yourusername/dev-portfolio",demo:"https://portfolio-demo.example.com",image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",features:["Dark/light mode with smooth theme transitions","GSAP-powered scroll animations and micro-interactions","Interactive project showcase with detail modals","Fully responsive layout across all device sizes","Optimized performance with Vite build tooling"]},{id:8,title:"Dev Template",description:"A modern, responsive developer portfolio template with dark mode, smooth animations, and project showcase features.",tech:["Vue 3","Tailwind CSS","Vite"],github:"https://github.com/yourusername/dev-portfolio",demo:"https://portfolio-demo.example.com",image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",features:["Dark/light mode with smooth theme transitions","GSAP-powered scroll animations and micro-interactions","Interactive project showcase with detail modals","Fully responsive layout across all device sizes","Optimized performance with Vite build tooling"]}],YC={class:"w-full h-full bg-secondary-900 light:bg-secondary-100 overflow-hidden relative flex flex-col"},qC={class:"flex items-center gap-2 px-3 sm:px-4 py-2 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},KC={class:"flex-1 max-w-md mx-auto"},ZC={class:"bg-secondary-700/50 light:bg-secondary-100 rounded-md px-2 sm:px-3 py-1 text-[10px] sm:text-xs text-secondary-400 light:text-secondary-500 flex items-center gap-1.5 sm:gap-2 truncate"},JC={class:"truncate"},QC={key:0,class:"flex-1 flex flex-col min-h-0 relative"},eR={class:"flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},tR={class:"flex items-center gap-2 sm:gap-4"},nR={key:0,class:"absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-accent-500 rounded-full text-[8px] sm:text-[9px] text-white flex items-center justify-center font-bold"},iR={class:"flex-1 p-3 sm:p-4 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 overflow-y-auto min-h-0 overscroll-contain"},rR={class:"text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 mb-1 truncate"},sR={class:"flex items-center justify-between"},oR={class:"text-[10px] sm:text-xs font-semibold text-primary-500"},aR=["onClick"],lR={key:0,class:"absolute inset-y-0 right-0 w-64 sm:w-80 bg-secondary-800 light:bg-white border-l border-secondary-700 light:border-secondary-200 shadow-2xl z-20 flex flex-col"},cR={class:"flex items-center justify-between px-4 py-3 border-b border-secondary-700 light:border-secondary-200"},uR={class:"flex-1 overflow-y-auto p-4 space-y-3 overscroll-contain"},dR={key:0,class:"text-center py-8"},fR={class:"flex-1 min-w-0"},hR={class:"text-[10px] text-white light:text-secondary-900 font-medium truncate"},pR={class:"text-[9px] text-primary-500"},mR={class:"flex items-center gap-1.5"},gR=["onClick"],_R={class:"text-[10px] text-white light:text-secondary-900 w-4 text-center"},xR=["onClick"],vR={class:"p-4 border-t border-secondary-700 light:border-secondary-200"},yR={class:"flex justify-between mb-3"},bR={class:"text-sm font-bold text-white light:text-secondary-900"},SR={key:1,class:"flex-1 flex flex-col min-h-0"},MR={class:"px-3 sm:px-6 py-2.5 bg-secondary-800/50 light:bg-secondary-100/50 border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},wR={class:"flex gap-2"},ER=["value"],TR={class:"flex-1 p-2 sm:p-4 flex gap-2 sm:gap-3 overflow-x-auto min-h-0"},AR={class:"flex-1 min-w-[140px] sm:min-w-0 bg-secondary-800/50 light:bg-secondary-200/50 rounded-lg p-2 sm:p-2.5 flex flex-col"},CR={class:"flex items-center justify-between mb-2 px-1 flex-shrink-0"},RR={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400"},PR={class:"space-y-1.5 sm:space-y-2 overflow-y-auto flex-1 min-h-0 overscroll-contain"},DR=["onClick"],LR={class:"flex items-start gap-1.5"},IR=["onClick"],UR={class:"flex-1 min-w-0"},FR={class:"text-[9px] sm:text-[10px] text-white light:text-secondary-900 leading-tight"},NR={class:"flex-1 min-w-[140px] sm:min-w-0 bg-secondary-800/50 light:bg-secondary-200/50 rounded-lg p-2 sm:p-2.5 flex flex-col"},OR={class:"flex items-center justify-between mb-2 px-1 flex-shrink-0"},kR={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400"},BR={class:"space-y-1.5 sm:space-y-2 overflow-y-auto flex-1 min-h-0 overscroll-contain"},zR=["onClick"],VR={class:"flex items-start gap-1.5"},HR=["onClick"],GR={class:"flex-1 min-w-0"},WR={class:"text-[9px] sm:text-[10px] text-white light:text-secondary-900 leading-tight"},XR={class:"flex-1 min-w-[140px] sm:min-w-0 bg-secondary-800/50 light:bg-secondary-200/50 rounded-lg p-2 sm:p-2.5 flex flex-col"},$R={class:"flex items-center justify-between mb-2 px-1 flex-shrink-0"},jR={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400"},YR={class:"space-y-1.5 sm:space-y-2 overflow-y-auto flex-1 min-h-0 overscroll-contain"},qR=["onClick"],KR={class:"flex items-start gap-1.5"},ZR={class:"flex-1 min-w-0"},JR={class:"text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 line-through leading-tight"},QR={key:2,class:"flex-1 flex flex-col min-h-0"},eP={class:"flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},tP={class:"flex items-center gap-2"},nP={class:"flex rounded-lg overflow-hidden border border-secondary-600 light:border-secondary-200"},iP={class:"px-3 sm:px-6 py-2.5 bg-secondary-800/50 light:bg-secondary-100/50 border-b border-secondary-700 light:border-secondary-200 flex-shrink-0 relative"},rP={class:"flex gap-2"},sP={class:"flex-1 relative"},oP={key:0,class:"absolute left-3 sm:left-6 right-3 sm:right-6 top-full mt-1 bg-secondary-800 light:bg-white border border-secondary-700 light:border-secondary-200 rounded-lg shadow-xl z-10 overflow-hidden"},aP=["onClick"],lP={class:"ml-auto text-secondary-500 light:text-secondary-400"},cP={class:"px-3 sm:px-6 py-3 sm:py-4 bg-gradient-to-br from-primary-600/30 to-primary-500/10 flex-shrink-0"},uP={class:"flex items-center justify-between"},dP={class:"text-2xl sm:text-3xl font-bold text-white light:text-secondary-900"},fP={class:"text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 mt-0.5"},hP={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mt-0.5"},pP={class:"text-4xl sm:text-5xl"},mP={class:"px-3 sm:px-6 py-2.5 flex-shrink-0"},gP={class:"flex gap-1.5 sm:gap-2 overflow-x-auto"},_P={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5"},xP={class:"text-sm sm:text-base mb-0.5"},vP={class:"text-[9px] sm:text-[10px] font-semibold text-white light:text-secondary-900"},yP={class:"flex-1 px-3 sm:px-6 pb-3 sm:pb-4 min-h-0 overflow-y-auto overscroll-contain"},bP={class:"space-y-1 sm:space-y-1.5"},SP={class:"text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 w-8 sm:w-10"},MP={class:"text-sm sm:text-base"},wP={class:"flex-1 mx-2 sm:mx-3 h-1 bg-secondary-700 light:bg-secondary-200 rounded-full overflow-hidden"},EP={class:"text-[9px] sm:text-[10px] text-white light:text-secondary-900 font-semibold w-10 sm:w-12 text-right"},TP={key:3,class:"flex-1 flex flex-col min-h-0"},AP={class:"flex-1 flex overflow-hidden min-h-0"},CP={class:"w-10 sm:w-14 bg-secondary-800 light:bg-white border-r border-secondary-700 light:border-secondary-200 flex flex-col items-center py-2 sm:py-3 gap-2 sm:gap-3 flex-shrink-0"},RP={class:"flex-1 p-2 sm:p-4 overflow-y-auto min-h-0 overscroll-contain"},PP={class:"flex gap-1.5 sm:gap-2 mb-3 flex-wrap"},DP=["onClick"],LP={class:"grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-3"},IP={class:"bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-3 border border-secondary-700 light:border-secondary-200"},UP={class:"text-sm sm:text-lg font-bold text-white light:text-secondary-900"},FP={class:"bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-3 border border-secondary-700 light:border-secondary-200"},NP={class:"text-sm sm:text-lg font-bold text-white light:text-secondary-900"},OP={class:"bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-3 border border-secondary-700 light:border-secondary-200"},kP={class:"text-sm sm:text-lg font-bold text-white light:text-secondary-900"},BP={class:"bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-3 border border-secondary-700 light:border-secondary-200"},zP={class:"text-sm sm:text-lg font-bold text-white light:text-secondary-900"},VP={class:"bg-secondary-800 light:bg-white rounded-lg p-2.5 sm:p-3 border border-secondary-700 light:border-secondary-200 mb-3"},HP={class:"h-20 sm:h-24 flex items-end gap-1"},GP=["onMouseenter","onMouseleave"],WP={class:"text-[6px] sm:text-[7px] text-secondary-500 light:text-secondary-400"},XP={class:"grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3"},$P={class:"bg-secondary-800 light:bg-white rounded-lg p-2.5 sm:p-3 border border-secondary-700 light:border-secondary-200"},jP={class:"space-y-1.5 sm:space-y-2"},YP=["onClick"],qP={class:"text-[8px] sm:text-[9px] text-secondary-400 light:text-secondary-500 flex-1"},KP={class:"text-[8px] sm:text-[9px] font-semibold text-white light:text-secondary-900"},ZP={class:"bg-secondary-800 light:bg-white rounded-lg p-2.5 sm:p-3 border border-secondary-700 light:border-secondary-200"},JP={class:"space-y-1.5 sm:space-y-2"},QP={class:"text-[8px] sm:text-[9px] text-primary-500"},eD={key:4,class:"flex-1 flex flex-col min-h-0"},tD={class:"px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},nD={class:"flex gap-1.5 sm:gap-2"},iD={class:"flex-1 relative"},rD={class:"px-3 sm:px-6 py-2 flex gap-1.5 sm:gap-2 overflow-x-auto flex-shrink-0"},sD=["onClick"],oD={class:"flex-1 px-3 sm:px-6 pb-3 sm:pb-4 grid grid-cols-2 gap-2 sm:gap-3 overflow-y-auto min-h-0 overscroll-contain"},aD=["onClick"],lD={class:"absolute top-1.5 right-1.5 bg-accent-500 text-white text-[7px] sm:text-[8px] px-1.5 py-0.5 rounded-full font-medium"},cD={class:"p-2 sm:p-2.5"},uD={class:"text-[9px] sm:text-[10px] text-white light:text-secondary-900 font-medium mb-1 truncate"},dD={class:"flex items-center gap-1"},fD={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400"},hD={class:"ml-auto text-[7px] sm:text-[8px] text-secondary-500 light:text-secondary-400"},pD={key:0,class:"col-span-2 text-center py-8"},mD={class:"flex items-start justify-between mb-3"},gD={class:"text-3xl"},_D={class:"text-sm font-bold text-white light:text-secondary-900 mb-1"},xD={class:"flex items-center gap-2 mb-3"},vD={class:"text-yellow-500 text-xs"},yD={class:"text-[9px] text-secondary-500 light:text-secondary-400"},bD={class:"text-[9px] text-secondary-500 light:text-secondary-400"},SD={class:"space-y-2 mb-4"},MD={key:5,class:"flex-1 flex flex-col min-h-0"},wD={class:"flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},ED={class:"flex gap-2 sm:gap-4 text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500"},TD=["onClick"],AD={class:"flex-1 overflow-y-auto min-h-0 overscroll-contain"},CD={key:0,class:"h-full flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-secondary-800 to-secondary-900 light:from-white light:to-secondary-100"},RD={class:"text-center"},PD={class:"flex gap-2 justify-center"},DD={key:1,class:"p-4 sm:p-6"},LD={class:"space-y-2 mb-4"},ID={class:"grid grid-cols-2 gap-2"},UD={class:"text-[9px] sm:text-[10px] text-primary-500 font-medium"},FD={class:"mt-1.5 h-1 bg-secondary-700 light:bg-secondary-200 rounded-full overflow-hidden"},ND={key:2,class:"p-4 sm:p-6"},OD={class:"grid grid-cols-2 gap-2 sm:gap-3"},kD={key:3,class:"p-4 sm:p-6"},BD={class:"px-3 sm:px-6 py-2 sm:py-3 bg-secondary-800 light:bg-white border-t border-secondary-700 light:border-secondary-200 flex-shrink-0"},zD={class:"flex justify-center gap-1.5 sm:gap-3 overflow-x-auto"},VD={key:6,class:"flex-1 flex flex-col min-h-0"},HD={class:"flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},GD={class:"text-xs sm:text-sm font-bold text-primary-500"},WD={class:"flex gap-2 sm:gap-3 text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500"},XD=["onClick"],$D={class:"flex-1 overflow-y-auto min-h-0 overscroll-contain"},jD={key:0,class:"h-full flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-primary-600/20 to-primary-500/5"},YD={class:"text-center max-w-sm"},qD={class:"text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-1.5"},KD={class:"text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 mb-3 sm:mb-4 leading-relaxed"},ZD={class:"flex gap-1.5 sm:gap-2 justify-center flex-wrap"},JD={key:1,class:"p-4 sm:p-6"},QD={class:"space-y-2"},e5={class:"text-[9px] sm:text-[10px] text-secondary-300 light:text-secondary-600 leading-relaxed"},t5={key:2,class:"p-4 sm:p-6"},n5={class:"space-y-2"},i5={__name:"ProjectPreview",props:{project:{type:Object,required:!0}},setup(n){const e=n,t=an(()=>{const ae=e.project.title.toLowerCase();return ae.includes("e-commerce")?"ecommerce":ae.includes("task")?"task":ae.includes("weather")?"weather":ae.includes("social")||ae.includes("analytics")?"analytics":ae.includes("recipe")?"recipe":ae.includes("portfolio")||ae.includes("template")?"portfolio":"generic"}),i=[{id:1,name:"Wireless Headphones",price:89,emoji:"🎧",color:"from-purple-500 to-indigo-500"},{id:2,name:"Smart Watch",price:199,emoji:"⌚",color:"from-blue-500 to-cyan-500"},{id:3,name:"Laptop Stand",price:45,emoji:"💻",color:"from-emerald-500 to-teal-500"},{id:4,name:"Mechanical Keyboard",price:129,emoji:"⌨️",color:"from-amber-500 to-orange-500"},{id:5,name:"USB-C Hub",price:59,emoji:"🔌",color:"from-rose-500 to-pink-500"},{id:6,name:"Desk Lamp",price:35,emoji:"💡",color:"from-yellow-500 to-amber-500"}],r=ua([]),s=De(!1),o=an(()=>r.reduce((ae,w)=>ae+w.qty,0)),a=an(()=>r.reduce((ae,w)=>ae+w.price*w.qty,0)),l=ae=>{const w=r.find(T=>T.id===ae.id);w?w.qty++:r.push({...ae,qty:1})},c=ae=>{const w=r.findIndex(T=>T.id===ae);w!==-1&&r.splice(w,1)},u=(ae,w)=>{const T=r.find(H=>H.id===ae);T&&(T.qty+=w,T.qty<=0&&c(ae))},d=ua({todo:[{id:1,title:"Design landing page",tag:"Design",tagColor:"bg-purple-500/20 text-purple-400",done:!1},{id:2,title:"Set up database schema",tag:"Backend",tagColor:"bg-blue-500/20 text-blue-400",done:!1},{id:3,title:"Write API endpoints",tag:"Backend",tagColor:"bg-blue-500/20 text-blue-400",done:!1}],progress:[{id:4,title:"Build auth system",tag:"Frontend",tagColor:"bg-emerald-500/20 text-emerald-400",done:!1},{id:5,title:"Implement dark mode",tag:"UI",tagColor:"bg-amber-500/20 text-amber-400",done:!1}],done:[{id:6,title:"Project setup",tag:"Setup",tagColor:"bg-gray-500/20 text-gray-400",done:!0},{id:7,title:"Create wireframes",tag:"Design",tagColor:"bg-purple-500/20 text-purple-400",done:!0},{id:8,title:"Configure CI/CD",tag:"DevOps",tagColor:"bg-rose-500/20 text-rose-400",done:!0}]}),f=De(""),h=De("General"),g=["General","Design","Frontend","Backend","UI","DevOps"],_=()=>{f.value.trim()&&(d.todo.push({id:Date.now(),title:f.value.trim(),tag:h.value,tagColor:"bg-primary-500/20 text-primary-400",done:!1}),f.value="")},p=(ae,w)=>{const T=d[ae].find(H=>H.id===w);if(T)if(T.done=!T.done,T.done){const H=d[ae].findIndex(Y=>Y.id===w),[ee]=d[ae].splice(H,1);d.done.push(ee)}else{const H=d.done.findIndex(Y=>Y.id===w),[ee]=d.done.splice(H,1);d.todo.push(ee)}},m=(ae,w,T)=>{const H=d[ae].findIndex(Y=>Y.id===T);if(H===-1)return;const[ee]=d[ae].splice(H,1);d[w].push(ee)},v={Manila:{temp:28,condition:"Partly Cloudy",emoji:"⛅",humidity:72,wind:12},Tokyo:{temp:22,condition:"Clear Sky",emoji:"☀️",humidity:55,wind:8},"New York":{temp:18,condition:"Rainy",emoji:"🌧️",humidity:85,wind:20},London:{temp:15,condition:"Cloudy",emoji:"☁️",humidity:78,wind:15},Sydney:{temp:25,condition:"Sunny",emoji:"🌤️",humidity:60,wind:10}},M=De("Manila"),x=De(""),R=De("C"),A=an(()=>v[M.value]||v.Manila),C=an(()=>{const ae=A.value.temp;return R.value==="C"?ae:Math.round(ae*9/5+32)}),b=an(()=>{const ae=A.value.temp;return Array.from({length:6},(w,T)=>({time:`${(T+1)*3}:00`,temp:ae+[0,2,3,1,-1,-2][T],emoji:["⛅","☀️","☀️","⛅","☁️","🌙"][T]}))}),E=an(()=>{const ae=A.value.temp;return["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((T,H)=>({day:T,high:ae+[2,4,3,5,1,0,-1][H],low:ae-[4,3,5,2,6,5,7][H],emoji:["⛅","☀️","🌧️","⛅","☀️","☁️","🌧️"][H]}))}),F=an(()=>{const ae=x.value.toLowerCase();return ae?Object.keys(v).filter(w=>w.toLowerCase().includes(ae)):Object.keys(v)}),U=ae=>{M.value=ae,x.value=""},L=ua({followers:12800,engagement:4.2,reach:45200,posts:128}),V=De("All"),k=["All","Instagram","Twitter","LinkedIn"],G={All:{followers:12800,engagement:4.2,reach:45200,posts:128},Instagram:{followers:8500,engagement:5.1,reach:28e3,posts:64},Twitter:{followers:3200,engagement:3.4,reach:12e3,posts:42},LinkedIn:{followers:1100,engagement:2.8,reach:5200,posts:22}},X=an(()=>{const w=(G[V.value]||G.All).followers/12800;return[30,45,38,60,52,75,68,90,82,100,88,95].map((T,H)=>({value:Math.round(T*w),label:["J","F","M","A","M","J","J","A","S","O","N","D"][H]}))}),B=ae=>{V.value=ae;const w=G[ae]||G.All;L.followers=w.followers,L.engagement=w.engagement,L.reach=w.reach,L.posts=w.posts},q=[{id:1,name:"Creamy Garlic Pasta",time:25,rating:4.5,emoji:"🍝",category:"Dinner",color:"from-amber-500/40 to-orange-500/40"},{id:2,name:"Avocado Toast",time:10,rating:4.2,emoji:"🥑",category:"Breakfast",color:"from-emerald-500/40 to-green-500/40"},{id:3,name:"Chocolate Cake",time:45,rating:4.8,emoji:"🍰",category:"Dessert",color:"from-rose-500/40 to-pink-500/40"},{id:4,name:"Chicken Stir Fry",time:20,rating:3.9,emoji:"🍗",category:"Lunch",color:"from-red-500/40 to-orange-500/40"},{id:5,name:"Berry Smoothie",time:5,rating:4.6,emoji:"🥤",category:"Breakfast",color:"from-purple-500/40 to-indigo-500/40"},{id:6,name:"Beef Tacos",time:30,rating:4.4,emoji:"🌮",category:"Dinner",color:"from-yellow-500/40 to-amber-500/40"}],j=De("All"),N=De(""),le=De(null),me=["All","Breakfast","Lunch","Dinner","Dessert"],ge=an(()=>q.filter(ae=>{const w=j.value==="All"||ae.category===j.value,T=ae.name.toLowerCase().includes(N.value.toLowerCase());return w&&T})),ve=ae=>{le.value=ae},Te=De("home"),J=["home","about","projects","contact"],ue=ae=>{Te.value=ae},oe=De("home"),Re=["home","features","about"],Ae=ae=>{oe.value=ae};return(ae,w)=>(de(),he("div",YC,[y("div",qC,[w[16]||(w[16]=y("div",{class:"flex gap-1.5"},[y("span",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent-500"}),y("span",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"}),y("span",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary-500"})],-1)),y("div",KC,[y("div",ZC,[w[15]||(w[15]=y("svg",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 8a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0115.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"})],-1)),y("span",JC,ye(n.project.demo),1)])])]),t.value==="ecommerce"?(de(),he("div",QC,[y("div",eR,[w[19]||(w[19]=y("div",{class:"text-primary-500 font-bold text-xs sm:text-sm"},"🛍️ ShopHub",-1)),y("div",tR,[w[18]||(w[18]=y("div",{class:"hidden sm:flex gap-3 text-[10px] text-secondary-400 light:text-secondary-500"},[y("span",{class:"cursor-pointer hover:text-primary-500 transition-colors"},"Home"),y("span",{class:"cursor-pointer hover:text-primary-500 transition-colors"},"Products"),y("span",{class:"cursor-pointer hover:text-primary-500 transition-colors"},"About")],-1)),y("button",{onClick:w[0]||(w[0]=T=>s.value=!s.value),class:"relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-500/20 flex items-center justify-center hover:bg-primary-500/30 transition-colors cursor-pointer","aria-label":"Open cart"},[w[17]||(w[17]=y("svg",{class:"w-4 h-4 sm:w-5 sm:h-5 text-primary-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})],-1)),o.value>0?(de(),he("span",nR,ye(o.value),1)):Bn("",!0)])])]),w[25]||(w[25]=lo('<div class="px-3 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-primary-500 flex-shrink-0" data-v-b832dd55><div class="text-white" data-v-b832dd55><div class="text-[9px] sm:text-[10px] uppercase tracking-wider opacity-80 mb-1" data-v-b832dd55>Summer Sale</div><div class="text-xs sm:text-sm font-bold mb-1.5 sm:mb-2" data-v-b832dd55>Up to 50% Off Everything</div><div class="inline-block bg-white text-primary-600 text-[9px] sm:text-[10px] font-semibold px-2.5 sm:px-3 py-1 rounded-full cursor-pointer hover:bg-primary-50 transition-colors" data-v-b832dd55>Shop Now →</div></div></div>',1)),y("div",iR,[(de(),he(je,null,rt(i,T=>y("div",{key:T.id,class:"bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-2.5 border border-secondary-700 light:border-secondary-200 hover:border-primary-500/50 transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-primary-500/10"},[y("div",{class:st(["aspect-square rounded-md bg-gradient-to-br mb-2 flex items-center justify-center text-2xl sm:text-3xl",T.color])},[y("span",null,ye(T.emoji),1)],2),y("div",rR,ye(T.name),1),y("div",sR,[y("div",oR,"$"+ye(T.price),1),y("button",{onClick:po(H=>l(T),["stop"]),class:"w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary-500 hover:bg-primary-400 flex items-center justify-center transition-colors cursor-pointer","aria-label":"Add to cart"},[...w[20]||(w[20]=[y("svg",{class:"w-3 h-3 sm:w-3.5 sm:h-3.5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"})],-1)])],8,aR)])])),64))]),At(zf,{name:"slide"},{default:Mu(()=>[s.value?(de(),he("div",lR,[y("div",cR,[w[22]||(w[22]=y("span",{class:"text-xs font-semibold text-white light:text-secondary-900"},"Shopping Cart",-1)),y("button",{onClick:w[1]||(w[1]=T=>s.value=!1),class:"text-secondary-400 hover:text-white light:hover:text-secondary-900 transition-colors cursor-pointer","aria-label":"Close cart"},[...w[21]||(w[21]=[y("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),y("div",uR,[r.length===0?(de(),he("div",dR,[...w[23]||(w[23]=[y("div",{class:"text-3xl mb-2"},"🛒",-1),y("p",{class:"text-xs text-secondary-400 light:text-secondary-500"},"Your cart is empty",-1),y("p",{class:"text-[10px] text-secondary-500 light:text-secondary-400 mt-1"},"Add some products!",-1)])])):Bn("",!0),(de(!0),he(je,null,rt(r,T=>(de(),he("div",{key:T.id,class:"flex items-center gap-3 bg-secondary-700/50 light:bg-secondary-100 rounded-lg p-2.5"},[y("div",{class:st(["w-8 h-8 rounded-md bg-gradient-to-br flex items-center justify-center text-sm flex-shrink-0",T.color])},ye(T.emoji),3),y("div",fR,[y("div",hR,ye(T.name),1),y("div",pR,"$"+ye(T.price),1)]),y("div",mR,[y("button",{onClick:H=>u(T.id,-1),class:"w-4 h-4 rounded bg-secondary-600 light:bg-secondary-200 text-white light:text-secondary-900 text-[9px] flex items-center justify-center hover:bg-accent-500 transition-colors cursor-pointer"},"−",8,gR),y("span",_R,ye(T.qty),1),y("button",{onClick:H=>u(T.id,1),class:"w-4 h-4 rounded bg-secondary-600 light:bg-secondary-200 text-white light:text-secondary-900 text-[9px] flex items-center justify-center hover:bg-primary-500 transition-colors cursor-pointer"},"+",8,xR)])]))),128))]),y("div",vR,[y("div",yR,[w[24]||(w[24]=y("span",{class:"text-[10px] text-secondary-400 light:text-secondary-500"},"Total",-1)),y("span",bR,"$"+ye(a.value.toFixed(2)),1)]),y("button",{onClick:w[2]||(w[2]=T=>s.value=!1),class:"w-full py-2 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-[10px] font-semibold transition-colors cursor-pointer"}," Checkout ")])])):Bn("",!0)]),_:1})])):t.value==="task"?(de(),he("div",SR,[w[30]||(w[30]=lo('<div class="flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0" data-v-b832dd55><div class="flex items-center gap-2" data-v-b832dd55><div class="w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary-500 flex items-center justify-center" data-v-b832dd55><svg class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b832dd55><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" data-v-b832dd55></path></svg></div><span class="text-xs sm:text-sm font-semibold text-white light:text-secondary-900" data-v-b832dd55>TaskFlow</span></div><div class="flex items-center gap-1.5 sm:gap-2" data-v-b832dd55><div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary-500/20 flex items-center justify-center text-[9px] sm:text-[10px] text-primary-500 font-bold" data-v-b832dd55>+</div><div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent-500/20 flex items-center justify-center text-[9px] sm:text-[10px] text-accent-500 font-bold" data-v-b832dd55>A</div><div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-[9px] sm:text-[10px] text-yellow-500 font-bold" data-v-b832dd55>B</div></div></div>',1)),y("div",MR,[y("div",wR,[pc(y("input",{"onUpdate:modelValue":w[3]||(w[3]=T=>f.value=T),onKeyup:pb(_,["enter"]),type:"text",placeholder:"Add a new task...",class:"flex-1 bg-secondary-700/50 light:bg-white border border-secondary-600 light:border-secondary-200 rounded-lg px-3 py-1.5 text-[10px] sm:text-xs text-white light:text-secondary-900 placeholder-secondary-500 light:placeholder-secondary-400 focus:outline-none focus:border-primary-500 transition-colors"},null,544),[[Pd,f.value]]),pc(y("select",{"onUpdate:modelValue":w[4]||(w[4]=T=>h.value=T),class:"bg-secondary-700/50 light:bg-white border border-secondary-600 light:border-secondary-200 rounded-lg px-2 py-1.5 text-[9px] sm:text-[10px] text-secondary-300 light:text-secondary-600 focus:outline-none focus:border-primary-500 transition-colors cursor-pointer"},[(de(),he(je,null,rt(g,T=>y("option",{key:T,value:T},ye(T),9,ER)),64))],512),[[ub,h.value]]),y("button",{onClick:_,class:"px-3 py-1.5 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-[10px] sm:text-xs font-semibold transition-colors cursor-pointer flex-shrink-0"}," Add ")])]),y("div",TR,[y("div",AR,[y("div",CR,[w[26]||(w[26]=y("span",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500"},"TO DO",-1)),y("span",RR,ye(d.todo.length),1)]),y("div",PR,[(de(!0),he(je,null,rt(d.todo,T=>(de(),he("div",{key:T.id,class:"bg-secondary-800 light:bg-white rounded-md p-2 sm:p-2.5 border border-secondary-700 light:border-secondary-200 hover:border-primary-500/40 transition-colors cursor-pointer group",onClick:H=>m("todo","progress",T.id)},[y("div",LR,[y("button",{onClick:po(H=>p("todo",T.id),["stop"]),class:"w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-secondary-500 light:border-secondary-300 flex-shrink-0 mt-0.5 hover:border-primary-500 transition-colors cursor-pointer","aria-label":"Mark as done"},null,8,IR),y("div",UR,[y("div",FR,ye(T.title),1),y("span",{class:st(["inline-block mt-1 px-1.5 py-0.5 rounded-full text-[7px] sm:text-[8px] font-medium",T.tagColor])},ye(T.tag),3)])])],8,DR))),128))])]),y("div",NR,[y("div",OR,[w[27]||(w[27]=y("span",{class:"text-[9px] sm:text-[10px] font-semibold text-primary-500"},"IN PROGRESS",-1)),y("span",kR,ye(d.progress.length),1)]),y("div",BR,[(de(!0),he(je,null,rt(d.progress,T=>(de(),he("div",{key:T.id,class:"bg-secondary-800 light:bg-white rounded-md p-2 sm:p-2.5 border border-primary-500/30 hover:border-primary-500/60 transition-colors cursor-pointer group",onClick:H=>m("progress","done",T.id)},[y("div",VR,[y("button",{onClick:po(H=>p("progress",T.id),["stop"]),class:"w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-primary-500 flex-shrink-0 mt-0.5 hover:bg-primary-500/20 transition-colors cursor-pointer","aria-label":"Mark as done"},null,8,HR),y("div",GR,[y("div",WR,ye(T.title),1),y("span",{class:st(["inline-block mt-1 px-1.5 py-0.5 rounded-full text-[7px] sm:text-[8px] font-medium",T.tagColor])},ye(T.tag),3)])])],8,zR))),128))])]),y("div",XR,[y("div",$R,[w[28]||(w[28]=y("span",{class:"text-[9px] sm:text-[10px] font-semibold text-primary-500"},"DONE",-1)),y("span",jR,ye(d.done.length),1)]),y("div",YR,[(de(!0),he(je,null,rt(d.done,T=>(de(),he("div",{key:T.id,class:"bg-secondary-800 light:bg-white rounded-md p-2 sm:p-2.5 border border-secondary-700 light:border-secondary-200 opacity-70 hover:opacity-100 transition-opacity cursor-pointer",onClick:H=>p("done",T.id)},[y("div",KR,[w[29]||(w[29]=y("div",{class:"w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 mt-0.5"},[y("svg",{class:"w-2 h-2 sm:w-2.5 sm:h-2.5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M5 13l4 4L19 7"})])],-1)),y("div",ZR,[y("div",JR,ye(T.title),1),y("span",{class:st(["inline-block mt-1 px-1.5 py-0.5 rounded-full text-[7px] sm:text-[8px] font-medium",T.tagColor])},ye(T.tag),3)])])],8,qR))),128))])])])])):t.value==="weather"?(de(),he("div",QR,[y("div",eP,[w[31]||(w[31]=y("div",{class:"flex items-center gap-2"},[y("span",{class:"text-base sm:text-lg"},"🌤️"),y("span",{class:"text-xs sm:text-sm font-semibold text-white light:text-secondary-900"},"SkyCast")],-1)),y("div",tP,[y("div",nP,[y("button",{onClick:w[5]||(w[5]=T=>R.value="C"),class:st(["px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold transition-colors cursor-pointer",R.value==="C"?"bg-primary-600 text-white":"text-secondary-400 light:text-secondary-500 hover:text-white light:hover:text-secondary-900"])},"°C",2),y("button",{onClick:w[6]||(w[6]=T=>R.value="F"),class:st(["px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold transition-colors cursor-pointer",R.value==="F"?"bg-primary-600 text-white":"text-secondary-400 light:text-secondary-500 hover:text-white light:hover:text-secondary-900"])},"°F",2)])])]),y("div",iP,[y("div",rP,[y("div",sP,[w[32]||(w[32]=y("svg",{class:"w-3 h-3 sm:w-3.5 sm:h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-secondary-500 light:text-secondary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1)),pc(y("input",{"onUpdate:modelValue":w[7]||(w[7]=T=>x.value=T),type:"text",placeholder:"Search city...",class:"w-full bg-secondary-700/50 light:bg-white border border-secondary-600 light:border-secondary-200 rounded-lg pl-7 pr-3 py-1.5 text-[10px] sm:text-xs text-white light:text-secondary-900 placeholder-secondary-500 light:placeholder-secondary-400 focus:outline-none focus:border-primary-500 transition-colors"},null,512),[[Pd,x.value]])])]),x.value?(de(),he("div",oP,[(de(!0),he(je,null,rt(F.value,T=>(de(),he("button",{key:T,onClick:H=>U(T),class:"w-full px-3 py-2 text-left text-[10px] sm:text-xs text-secondary-300 light:text-secondary-600 hover:bg-primary-500/10 hover:text-primary-500 transition-colors cursor-pointer flex items-center gap-2"},[y("span",null,ye(v[T].emoji),1),y("span",null,ye(T),1),y("span",lP,ye(v[T].temp)+"°",1)],8,aP))),128))])):Bn("",!0)]),y("div",cP,[y("div",uP,[y("div",null,[y("div",dP,ye(C.value)+"°"+ye(R.value),1),y("div",fP,ye(A.value.condition),1),y("div",hP,ye(M.value)+" • 💧 "+ye(A.value.humidity)+"% • 🌬️ "+ye(A.value.wind)+" km/h",1)]),y("div",pP,ye(A.value.emoji),1)])]),y("div",mP,[w[33]||(w[33]=y("div",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-1.5 uppercase tracking-wider"},"Hourly Forecast",-1)),y("div",gP,[(de(!0),he(je,null,rt(b.value,(T,H)=>(de(),he("div",{key:H,class:"flex-1 min-w-[50px] sm:min-w-0 bg-secondary-800 light:bg-white rounded-lg p-1.5 sm:p-2 text-center border border-secondary-700 light:border-secondary-200 hover:border-primary-500/40 transition-colors cursor-pointer"},[y("div",_P,ye(T.time),1),y("div",xP,ye(T.emoji),1),y("div",vP,ye(T.temp)+"°",1)]))),128))])]),y("div",yP,[w[34]||(w[34]=y("div",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-1.5 uppercase tracking-wider"},"7-Day Forecast",-1)),y("div",bP,[(de(!0),he(je,null,rt(E.value,(T,H)=>(de(),he("div",{key:H,class:"flex items-center justify-between bg-secondary-800 light:bg-white rounded-md px-2.5 sm:px-3 py-1.5 sm:py-2 border border-secondary-700 light:border-secondary-200 hover:border-primary-500/40 transition-colors cursor-pointer"},[y("span",SP,ye(T.day),1),y("span",MP,ye(T.emoji),1),y("div",wP,[y("div",{class:"h-full bg-gradient-to-r from-yellow-500 to-primary-500 rounded-full",style:Sn({width:(T.high-10)*5+"%"})},null,4)]),y("span",EP,ye(T.high)+"° / "+ye(T.low)+"°",1)]))),128))])])])):t.value==="analytics"?(de(),he("div",TP,[y("div",AP,[y("div",CP,[w[36]||(w[36]=y("div",{class:"w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-primary-500 flex items-center justify-center"},[y("svg",{class:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})])],-1)),(de(),he(je,null,rt(4,T=>y("div",{key:T,class:"w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-secondary-700/50 light:bg-secondary-200 flex items-center justify-center cursor-pointer hover:bg-primary-500/20 transition-colors"},[...w[35]||(w[35]=[y("div",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm bg-secondary-500 light:bg-secondary-400"},null,-1)])])),64))]),y("div",RP,[y("div",PP,[(de(),he(je,null,rt(k,T=>y("button",{key:T,onClick:H=>B(T),class:st(["px-2 sm:px-3 py-1 rounded-full text-[8px] sm:text-[9px] font-medium transition-all cursor-pointer",V.value===T?"bg-primary-600 text-white shadow-md shadow-primary-500/25":"bg-secondary-800 light:bg-white text-secondary-400 light:text-secondary-500 border border-secondary-700 light:border-secondary-200 hover:text-white light:hover:text-secondary-900"])},ye(T),11,DP)),64))]),y("div",LP,[y("div",IP,[w[37]||(w[37]=y("div",{class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5"},"Followers",-1)),y("div",UP,ye(L.followers.toLocaleString()),1),w[38]||(w[38]=y("div",{class:"text-[8px] sm:text-[9px] text-primary-500 mt-0.5"},"▲ 12%",-1))]),y("div",FP,[w[39]||(w[39]=y("div",{class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5"},"Engagement",-1)),y("div",NP,ye(L.engagement)+"%",1),w[40]||(w[40]=y("div",{class:"text-[8px] sm:text-[9px] text-primary-500 mt-0.5"},"▲ 0.8%",-1))]),y("div",OP,[w[41]||(w[41]=y("div",{class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5"},"Reach",-1)),y("div",kP,ye(L.reach.toLocaleString()),1),w[42]||(w[42]=y("div",{class:"text-[8px] sm:text-[9px] text-primary-500 mt-0.5"},"▲ 23%",-1))]),y("div",BP,[w[43]||(w[43]=y("div",{class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5"},"Posts",-1)),y("div",zP,ye(L.posts),1),w[44]||(w[44]=y("div",{class:"text-[8px] sm:text-[9px] text-primary-500 mt-0.5"},"▲ 5%",-1))])]),y("div",VP,[w[45]||(w[45]=y("div",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-2"},"Engagement Over Time",-1)),y("div",HP,[(de(!0),he(je,null,rt(X.value,(T,H)=>(de(),he("div",{key:H,class:"flex-1 flex flex-col items-center gap-1 group cursor-pointer",onMouseenter:ee=>T.hover=!0,onMouseleave:ee=>T.hover=!1},[y("div",{class:st(["w-full rounded-t bg-gradient-to-t from-primary-600 to-primary-400 transition-all duration-300 group-hover:from-primary-500 group-hover:to-primary-300",{"opacity-40":H%3===0}]),style:Sn({height:T.value+"%"})},null,6),y("span",WP,ye(T.label),1)],40,GP))),128))])]),y("div",XP,[y("div",$P,[w[46]||(w[46]=y("div",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-2"},"Platforms",-1)),y("div",jP,[(de(),he(je,null,rt(["Instagram","Twitter","LinkedIn"],(T,H)=>y("div",{key:T,class:"flex items-center gap-2 cursor-pointer hover:bg-secondary-700/30 light:hover:bg-secondary-100 rounded-md px-1.5 py-1 transition-colors",onClick:ee=>B(T)},[y("div",{class:st(["w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full",["bg-primary-500","bg-accent-500","bg-yellow-500"][H]])},null,2),y("span",qP,ye(T),1),y("span",KP,ye([45,30,25][H])+"%",1)],8,YP)),64))])]),y("div",ZP,[w[48]||(w[48]=y("div",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-2"},"Top Posts",-1)),y("div",JP,[(de(),he(je,null,rt(3,T=>y("div",{key:T,class:"flex items-center gap-2 cursor-pointer hover:bg-secondary-700/30 light:hover:bg-secondary-100 rounded-md px-1.5 py-1 transition-colors"},[y("div",{class:st(["w-5 h-5 sm:w-6 sm:h-6 rounded bg-gradient-to-br flex items-center justify-center text-[10px] sm:text-xs flex-shrink-0",["from-primary-500/30 to-primary-500/10","from-accent-500/30 to-accent-500/10","from-yellow-500/30 to-yellow-500/10"][T-1]])},ye(["📸","🐦","💼"][T-1]),3),w[47]||(w[47]=y("div",{class:"flex-1 min-w-0"},[y("div",{class:"h-1.5 bg-secondary-700 light:bg-secondary-200 rounded mb-1 w-4/5"}),y("div",{class:"h-1 bg-secondary-700 light:bg-secondary-200 rounded w-1/2"})],-1)),y("span",QP,ye([1200,890,650][T-1]),1)])),64))])])])])])])):t.value==="recipe"?(de(),he("div",eD,[y("div",tD,[w[51]||(w[51]=lo('<div class="flex items-center justify-between mb-2" data-v-b832dd55><div class="text-xs sm:text-sm font-bold text-primary-500" data-v-b832dd55>🍳 FlavorFind</div><div class="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary-500/20 flex items-center justify-center cursor-pointer hover:bg-primary-500/30 transition-colors" data-v-b832dd55><svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b832dd55><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-b832dd55></path></svg></div></div>',1)),y("div",nD,[y("div",iD,[w[49]||(w[49]=y("svg",{class:"w-3 h-3 sm:w-3.5 sm:h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-secondary-500 light:text-secondary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1)),pc(y("input",{"onUpdate:modelValue":w[8]||(w[8]=T=>N.value=T),type:"text",placeholder:"Search recipes...",class:"w-full bg-secondary-700/50 light:bg-secondary-100 rounded-lg pl-7 pr-3 py-1.5 sm:py-2 text-[10px] sm:text-xs text-white light:text-secondary-900 placeholder-secondary-500 light:placeholder-secondary-400 focus:outline-none focus:border-primary-500 border border-transparent focus:border-primary-500/50 transition-colors"},null,512),[[Pd,N.value]])]),w[50]||(w[50]=y("button",{class:"bg-primary-500 hover:bg-primary-400 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 flex items-center transition-colors cursor-pointer"},[y("span",{class:"text-[10px] sm:text-xs text-white font-semibold"},"Search")],-1))])]),y("div",rD,[(de(),he(je,null,rt(me,T=>y("button",{key:T,onClick:H=>j.value=T,class:st(["px-2.5 sm:px-3 py-1 rounded-full text-[8px] sm:text-[9px] font-medium whitespace-nowrap transition-all cursor-pointer",j.value===T?"bg-primary-500 text-white shadow-md shadow-primary-500/25":"bg-secondary-800 light:bg-white text-secondary-400 light:text-secondary-500 border border-secondary-700 light:border-secondary-200 hover:text-white light:hover:text-secondary-900"])},ye(T),11,sD)),64))]),y("div",oD,[(de(!0),he(je,null,rt(ge.value,T=>(de(),he("div",{key:T.id,onClick:H=>ve(T),class:"bg-secondary-800 light:bg-white rounded-lg overflow-hidden border border-secondary-700 light:border-secondary-200 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-200 cursor-pointer"},[y("div",{class:st(["h-14 sm:h-16 bg-gradient-to-br relative flex items-center justify-center text-2xl sm:text-3xl",T.color])},[y("span",null,ye(T.emoji),1),y("div",lD,"⏱ "+ye(T.time)+" min",1)],2),y("div",cD,[y("div",uD,ye(T.name),1),y("div",dD,[w[52]||(w[52]=y("span",{class:"text-yellow-500 text-[9px] sm:text-[10px]"},"★",-1)),y("span",fD,ye(T.rating),1),y("span",hD,ye(T.category),1)])])],8,aD))),128)),ge.value.length===0?(de(),he("div",pD,[...w[53]||(w[53]=[y("div",{class:"text-3xl mb-2"},"🔍",-1),y("p",{class:"text-xs text-secondary-400 light:text-secondary-500"},"No recipes found",-1)])])):Bn("",!0)]),At(zf,{name:"fade"},{default:Mu(()=>[le.value?(de(),he("div",{key:0,class:"absolute inset-0 bg-dark-900/80 light:bg-secondary-900/80 backdrop-blur-sm z-20 flex items-center justify-center p-4",onClick:w[12]||(w[12]=T=>le.value=null)},[y("div",{class:"bg-secondary-800 light:bg-white rounded-xl max-w-sm w-full p-5 border border-secondary-700 light:border-secondary-200 shadow-2xl",onClick:w[11]||(w[11]=po(()=>{},["stop"]))},[y("div",mD,[y("div",gD,ye(le.value.emoji),1),y("button",{onClick:w[9]||(w[9]=T=>le.value=null),class:"text-secondary-400 hover:text-white light:hover:text-secondary-900 transition-colors cursor-pointer","aria-label":"Close recipe"},[...w[54]||(w[54]=[y("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),y("h3",_D,ye(le.value.name),1),y("div",xD,[y("span",vD,"★ "+ye(le.value.rating),1),w[55]||(w[55]=y("span",{class:"text-[9px] text-secondary-500 light:text-secondary-400"},"•",-1)),y("span",yD,"⏱ "+ye(le.value.time)+" min",1),w[56]||(w[56]=y("span",{class:"text-[9px] text-secondary-500 light:text-secondary-400"},"•",-1)),y("span",bD,ye(le.value.category),1)]),y("div",SD,[(de(),he(je,null,rt(4,T=>y("div",{key:T,class:"flex items-center gap-2"},[w[57]||(w[57]=y("div",{class:"w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0"},null,-1)),y("div",{class:"h-1.5 bg-secondary-700 light:bg-secondary-200 rounded flex-1",style:Sn({width:60+T*8+"%"})},null,4)])),64))]),y("button",{onClick:w[10]||(w[10]=T=>le.value=null),class:"w-full py-2 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-[10px] font-semibold transition-colors cursor-pointer"}," Start Cooking ")])])):Bn("",!0)]),_:1})])):t.value==="portfolio"?(de(),he("div",MD,[y("div",wD,[w[58]||(w[58]=y("div",{class:"text-xs sm:text-sm font-bold text-primary-500"},"👨‍💻 DevName",-1)),y("div",ED,[(de(),he(je,null,rt(J,T=>y("button",{key:T,onClick:H=>ue(T),class:st(["capitalize cursor-pointer transition-colors",Te.value===T?"text-primary-500 font-semibold":"hover:text-white light:hover:text-secondary-900"])},ye(T),11,TD)),64))])]),y("div",AD,[Te.value==="home"?(de(),he("div",CD,[y("div",RD,[w[59]||(w[59]=lo('<div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 mx-auto mb-3 sm:mb-4 flex items-center justify-center" data-v-b832dd55><svg class="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b832dd55><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" data-v-b832dd55></path></svg></div><div class="text-base sm:text-lg font-bold text-white light:text-secondary-900 mb-1.5" data-v-b832dd55>Hi, I&#39;m a Developer</div><div class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 mb-3 sm:mb-4" data-v-b832dd55>Building beautiful web experiences</div>',3)),y("div",PD,[y("button",{onClick:w[13]||(w[13]=T=>ue("projects")),class:"bg-primary-500 hover:bg-primary-400 text-white text-[9px] sm:text-[10px] font-semibold px-3 sm:px-4 py-1.5 rounded-full transition-colors cursor-pointer"},"View Work"),y("button",{onClick:w[14]||(w[14]=T=>ue("contact")),class:"border border-secondary-600 light:border-secondary-300 text-secondary-300 light:text-secondary-600 hover:text-white light:hover:text-secondary-900 text-[9px] sm:text-[10px] font-semibold px-3 sm:px-4 py-1.5 rounded-full transition-colors cursor-pointer"},"Contact Me")])])])):Te.value==="about"?(de(),he("div",DD,[w[60]||(w[60]=y("h3",{class:"text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3"},"About Me",-1)),y("div",LD,[(de(),he(je,null,rt(4,T=>y("div",{key:T,class:"h-2 bg-secondary-700 light:bg-secondary-200 rounded",style:Sn({width:70+T*5+"%"})},null,4)),64))]),y("div",ID,[(de(),he(je,null,rt(["Vue.js","React","Node.js","TypeScript","Tailwind","GraphQL"],T=>y("div",{key:T,class:"bg-secondary-800 light:bg-white rounded-lg p-2.5 border border-secondary-700 light:border-secondary-200 text-center"},[y("div",UD,ye(T),1),y("div",FD,[y("div",{class:"h-full bg-primary-500 rounded-full",style:Sn({width:60+T.length*3+"%"})},null,4)])])),64))])])):Te.value==="projects"?(de(),he("div",ND,[w[62]||(w[62]=y("h3",{class:"text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3"},"My Projects",-1)),y("div",OD,[(de(),he(je,null,rt(4,T=>y("div",{key:T,class:"bg-secondary-800 light:bg-white rounded-lg overflow-hidden border border-secondary-700 light:border-secondary-200 hover:border-primary-500/50 transition-colors cursor-pointer"},[y("div",{class:st(["h-12 sm:h-16 bg-gradient-to-br flex items-center justify-center text-xl sm:text-2xl",["from-primary-500/30 to-primary-500/10","from-accent-500/30 to-accent-500/10","from-yellow-500/30 to-yellow-500/10","from-blue-500/30 to-blue-500/10"][T-1]])},ye(["📱","🌐","🎮","📊"][T-1]),3),w[61]||(w[61]=y("div",{class:"p-2 sm:p-2.5"},[y("div",{class:"h-1.5 bg-secondary-700 light:bg-secondary-200 rounded mb-1 w-4/5"}),y("div",{class:"h-1 bg-secondary-700 light:bg-secondary-200 rounded w-1/2"})],-1))])),64))])])):(de(),he("div",kD,[...w[63]||(w[63]=[lo('<h3 class="text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3" data-v-b832dd55>Get In Touch</h3><div class="space-y-2 mb-4" data-v-b832dd55><div class="flex items-center gap-2 bg-secondary-800 light:bg-white rounded-lg p-2.5 border border-secondary-700 light:border-secondary-200" data-v-b832dd55><span class="text-base" data-v-b832dd55>📧</span><span class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500" data-v-b832dd55>hello@devname.com</span></div><div class="flex items-center gap-2 bg-secondary-800 light:bg-white rounded-lg p-2.5 border border-secondary-700 light:border-secondary-200" data-v-b832dd55><span class="text-base" data-v-b832dd55>💼</span><span class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500" data-v-b832dd55>linkedin.com/in/devname</span></div><div class="flex items-center gap-2 bg-secondary-800 light:bg-white rounded-lg p-2.5 border border-secondary-700 light:border-secondary-200" data-v-b832dd55><span class="text-base" data-v-b832dd55>🐙</span><span class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500" data-v-b832dd55>github.com/devname</span></div></div><button class="w-full py-2 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-[10px] font-semibold transition-colors cursor-pointer" data-v-b832dd55>Send Message</button>',3)])]))]),y("div",BD,[y("div",zD,[(de(),he(je,null,rt(["Vue","React","Node","Python","Go"],T=>y("div",{key:T,class:"px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-secondary-700/50 light:bg-secondary-100 text-[8px] sm:text-[9px] text-secondary-400 light:text-secondary-500 border border-secondary-700 light:border-secondary-200 whitespace-nowrap"},ye(T),1)),64))])])])):(de(),he("div",VD,[y("div",HD,[y("div",GD,ye(n.project.title),1),y("div",WD,[(de(),he(je,null,rt(Re,T=>y("button",{key:T,onClick:H=>Ae(T),class:st(["capitalize cursor-pointer transition-colors",oe.value===T?"text-primary-500 font-semibold":"hover:text-white light:hover:text-secondary-900"])},ye(T),11,XD)),64))])]),y("div",$D,[oe.value==="home"?(de(),he("div",jD,[y("div",YD,[w[64]||(w[64]=y("div",{class:"w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-500/20 mx-auto mb-2 sm:mb-3 flex items-center justify-center"},[y("svg",{class:"w-5 h-5 sm:w-6 sm:h-6 text-primary-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"}),y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M8 9h8M8 13h5"})])],-1)),y("div",qD,ye(n.project.title),1),y("div",KD,ye(n.project.description),1),y("div",ZD,[(de(!0),he(je,null,rt(n.project.tech.slice(0,3),T=>(de(),he("div",{key:T,class:"px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-primary-500/10 text-[8px] sm:text-[9px] text-primary-500 border border-primary-500/20"},ye(T),1))),128))])])])):oe.value==="features"?(de(),he("div",JD,[w[66]||(w[66]=y("h3",{class:"text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3"},"Features",-1)),y("div",QD,[(de(!0),he(je,null,rt(n.project.features||["Feature 1","Feature 2","Feature 3","Feature 4"],(T,H)=>(de(),he("div",{key:H,class:"flex items-start gap-2 bg-secondary-800 light:bg-white rounded-lg p-2.5 sm:p-3 border border-secondary-700 light:border-secondary-200"},[w[65]||(w[65]=y("div",{class:"w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0"},[y("svg",{class:"w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})])],-1)),y("span",e5,ye(T),1)]))),128))])])):(de(),he("div",t5,[w[67]||(w[67]=y("h3",{class:"text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3"},"About",-1)),y("div",n5,[(de(),he(je,null,rt(5,T=>y("div",{key:T,class:"h-2 bg-secondary-700 light:bg-secondary-200 rounded",style:Sn({width:65+T*5+"%"})},null,4)),64))])]))])]))]))}},i0=uc(i5,[["__scopeId","data-v-b832dd55"]]),r5={class:"relative w-full h-[500px] select-none"},s5=["disabled"],o5=["onClick","onMouseenter","onMouseleave"],a5={class:"relative overflow-hidden rounded-t-xl h-48"},l5={key:0,class:"absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent rounded-t-xl pointer-events-none"},c5={class:"p-5 bg-secondary-800 h-full light:bg-white rounded-b-xl"},u5={class:"text-white light:text-secondary-900 font-semibold text-lg mb-2"},d5={class:"text-secondary-400 light:text-secondary-500 text-sm mb-3 leading-relaxed line-clamp-2"},f5={class:"flex flex-wrap gap-1.5 mb-3"},h5=["disabled"],p5={class:"absolute bottom-0 left-1/2 -translate-x-1/2 w-64 sm:w-80"},m5={class:"h-1 rounded-full bg-secondary-800 light:bg-secondary-200 overflow-hidden"},Cf=300,yg=380,el=2,eu=.6,tl=.5,g5=215,_5=34,x5=8,v5=1.08,y5=16,b5=58,S5={__name:"ProjectWheel",props:{projects:{type:Array,required:!0}},emits:["open"],setup(n,{emit:e}){const t=n,i=e,{isDark:r}=Fp(),s=De(null),o=De(0),a=De(0),l=De(!1),c=De(null);let u=[],d=!1,f=0,h=0,g=!1;const _=an(()=>t.projects.length>1),p=an(()=>t.projects.length===0?0:(o.value+1)/t.projects.length*100),m=async()=>{await Rr(),!(!s.value||(u=Array.from(s.value.children),u.length===0))&&(u.forEach(ve=>{Ke.set(ve,{position:"absolute",top:"50%",left:"50%",width:Cf,height:yg,marginLeft:-Cf/2,marginTop:-yg/2,transformOrigin:"center center",willChange:"transform, opacity",borderRadius:"1rem",boxShadow:r.value?"0 10px 30px rgba(0,0,0,0.3)":"none",cursor:"pointer",backgroundColor:"rgb(var(--color-secondary-800))"})}),o.value=0,a.value=0,A(!0))},v=ge=>{const ve=el;return ge<=ve?(eu+tl)*ge-tl*ge*ge/(2*ve):(eu+tl)*ve-tl*ve/2+eu*(ge-ve)},M=v(1),x=ge=>{const Te=360/u.length,J=o.value+a.value;let oe=(ge*Te-J*Te)%360;oe>180&&(oe-=360),oe<-180&&(oe+=360);const Re=oe/Te,Ae=Math.abs(Re),ae=Math.min(Ae,el),w=Math.max(0,1-Ae/(el+1)),T=Math.sign(Re)*g5*(v(Ae)/M),H=_5*(1-Math.cos(ae/el*(Math.PI/2))),ee=Math.sign(Re)*x5*(ae/el),Y=eu+w*tl,O=w,I=Math.round(w*100);return{x:T,y:H,scale:Y,opacity:O,zIndex:I,rotation:ee,normalized:oe,offset:Re}},R=()=>!l.value&&!d,A=(ge=!1,ve=!1)=>{const Te=R()?c.value:null,J=Te!==null&&u[Te]?x(Te).offset:null;u.forEach((ue,oe)=>{const{x:Re,y:Ae,scale:ae,opacity:w,zIndex:T,rotation:H,normalized:ee,offset:Y}=x(oe),O=Math.abs(ee)<5,I=Te===oe;let _e=Re,fe=Ae,ne=ae,pe=H,P=T,S=ge?"none":"power3.out",z=ge?0:.8;if(I)ne=ae*v5,fe=Ae-y5,pe=H*.35,P=150,ge||(S=ve?"elastic.out(1, 0.45)":"back.out(2)",z=ve?.9:.5);else if(J!==null){const K=Y-J,Me=Math.abs(K);if(Me>.01){const xe=b5/Me*Math.sign(K);_e=Re+xe,fe=Ae+Math.min(10,10/Me),ge||(S=ve?"back.out(3)":"power3.out",z=ve?.75:.5)}}const Z=w>.05?1:0,Q={x:_e,y:fe,scale:ne,rotation:pe,opacity:Z,zIndex:P,filter:O||I?"brightness(1)":r.value?"brightness(0.7)":"brightness(0.85)",boxShadow:I?"0 25px 60px rgb(var(--color-primary-500) / 0.45)":O?"0 0 50px rgb(var(--color-primary-500) / 0.35)":r.value?"0 0 0px rgb(var(--color-primary-500) / 0)":"none",pointerEvents:w>.05?"auto":"none",duration:z,ease:S,overwrite:"auto",borderRadius:"1rem",transformOrigin:"center center"};ge?Ke.set(ue,Q):Ke.to(ue,Q)})},C=ge=>{l.value||d||c.value!==ge&&(c.value=ge,A(!1,!0))},b=ge=>{c.value===ge&&(c.value=null,!(l.value||d)&&A(!1,!0))},E=ge=>{if(d||u.length===0||!_.value)return;d=!0,c.value=null;const ve=u.length;o.value=(o.value+ge+ve)%ve,Ke.to({},{duration:1,ease:"power3.inOut",onUpdate:()=>{A()},onComplete:()=>{d=!1,A()}})},F=ge=>{d||u.length===0||l.value||g||U(ge)},U=ge=>{const ve=u[ge];if(!ve)return;const Te=ve.getBoundingClientRect();i("open",{project:t.projects[ge],originRect:{left:Te.left,top:Te.top,width:Te.width,height:Te.height}})},L=ge=>{d||u.length===0||!_.value||(l.value=!0,c.value=null,g=!1,f=ge.clientX,h=ge.clientX,ge.preventDefault())},V=ge=>{if(!l.value)return;const ve=ge.clientX-h;h=ge.clientX,Math.abs(ge.clientX-f)>5&&(g=!0),a.value-=ve/Cf,A()},k=()=>{if(!l.value)return;l.value=!1;const ge=u.length,ve=Math.round(a.value);if(!g&&ve===0){a.value=0;return}ve!==0&&(o.value=(o.value+ve+ge)%ge),a.value=0,d=!0,Ke.to({},{duration:.5,ease:"power3.out",onUpdate:()=>{A()},onComplete:()=>{d=!1,A(),setTimeout(()=>{g=!1},50)}})},G=()=>{l.value&&k()},X=()=>{c.value!==null&&(c.value=null,!l.value&&!d&&A(!1,!0)),k()},B=ge=>{const ve=ge.currentTarget;if(!ve.querySelector(".fill-overlay"))return;const J=ve.getBoundingClientRect(),ue=ge.clientX-J.left,oe=ge.clientY-J.top;ve.style.setProperty("--mx",`${ue}px`),ve.style.setProperty("--my",`${oe}px`)},q=ge=>{const ve=ge.currentTarget;if(ve.style.setProperty("--mx","50%"),ve.style.setProperty("--my","50%"),j){const Te=ve.querySelector(".fill-overlay");Te&&(Te.classList.remove("active"),Te.classList.add("fade-out"),setTimeout(()=>{Te.classList.remove("fade-out")},500))}},j=window.matchMedia("(hover: hover)").matches,N=ge=>{if(j)return;const ve=ge.currentTarget,Te=ve.querySelector(".fill-overlay");if(!Te)return;const J=ve.getBoundingClientRect(),ue=ge.clientX-J.left,oe=ge.clientY-J.top;ve.style.setProperty("--mx",`${ue}px`),ve.style.setProperty("--my",`${oe}px`),Te.classList.add("active")},le=ge=>{if(j)return;const Te=ge.currentTarget.querySelector(".fill-overlay");Te&&(Te.classList.remove("active"),Te.classList.add("fade-out"),setTimeout(()=>{Te.classList.remove("fade-out")},500))},me=ge=>{if(!j)return;const ve=ge.currentTarget,Te=ve.querySelector(".fill-overlay");if(!Te)return;const J=ve.getBoundingClientRect(),ue=ge.clientX-J.left,oe=ge.clientY-J.top;ve.style.setProperty("--mx",`${ue}px`),ve.style.setProperty("--my",`${oe}px`),Te.classList.add("active")};return Pn(async()=>{await m()}),Ai(()=>t.projects,async()=>{await m()}),Ai(r,()=>{u.length>0&&A(!0)}),(ge,ve)=>(de(),he("div",r5,[y("button",{onClick:ve[0]||(ve[0]=Te=>E(-1)),onMousemove:B,onMouseleave:q,onMouseenter:me,onPointerdown:N,onPointerup:le,onPointercancel:le,disabled:!_.value,class:"absolute -left-24 md:-left-24 lg:-left-40 top-1/2 -translate-y-1/2 size-[200px] md:size-[200px] lg:size-[300px] rounded-full flex items-center justify-center text-secondary-300 light:text-secondary-500 disabled:opacity-40 disabled:cursor-not-allowed z-[110] border-2 border-primary-500/50 light:border-primary-600/50 hover:border-primary-500 light:hover:border-primary-600 hover:scale-105 transition-all duration-300 overflow-hidden","aria-label":"Previous project"},[...ve[2]||(ve[2]=[y("span",{class:"fill-overlay"},null,-1),y("svg",{class:"absolute z-10 w-8 h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 right-10 md:right-10 lg:right-16 top-1/2 -translate-y-1/2 text-primary-500 light:text-primary-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M19 12H5M12 19l-7-7 7-7"})],-1)])],40,s5),y("div",{ref_key:"wheelRef",ref:s,class:st(["relative w-full h-full",{"cursor-grabbing":l.value,"cursor-grab":!l.value}]),onPointerdown:L,onPointermove:V,onPointerup:k,onPointercancel:G,onPointerleave:X},[(de(!0),he(je,null,rt(n.projects,(Te,J)=>(de(),he("div",{key:Te.id,onClick:ue=>F(J),onMouseenter:ue=>C(J),onMouseleave:ue=>b(J),class:"absolute rounded-xl overflow-hidden shadow-xl light:shadow-none",style:{width:"300px",height:"360px"}},[y("div",a5,[At(i0,{project:Te,class:"w-full h-full"},null,8,["project"]),xt(r)?(de(),he("div",l5)):Bn("",!0)]),y("div",c5,[y("h3",u5,ye(Te.title),1),y("p",d5,ye(Te.description),1),y("div",f5,[(de(!0),he(je,null,rt(Te.tech.slice(0,3),ue=>(de(),he("span",{key:ue,class:"text-xs text-primary-400 bg-primary-500/10 px-2 py-0.5 rounded-full"},ye(ue),1))),128))])])],40,o5))),128))],34),y("button",{onClick:ve[1]||(ve[1]=Te=>E(1)),onMousemove:B,onMouseleave:q,onMouseenter:me,onPointerdown:N,onPointerup:le,onPointercancel:le,disabled:!_.value,class:"absolute -right-24 md:-right-24 lg:-right-40 top-1/2 -translate-y-1/2 size-[200px] md:size-[200px] lg:size-[300px] rounded-full flex items-center justify-center text-secondary-300 light:text-secondary-500 disabled:opacity-40 disabled:cursor-not-allowed z-[110] border-2 border-primary-500/50 light:border-primary-600/50 hover:border-primary-500 light:hover:border-primary-600 hover:scale-105 transition-all duration-300 overflow-hidden","aria-label":"Next project"},[...ve[3]||(ve[3]=[y("span",{class:"fill-overlay"},null,-1),y("svg",{class:"absolute z-10 w-8 h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 left-10 md:left-10 lg:left-16 top-1/2 -translate-y-1/2 text-primary-500 light:text-primary-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M5 12h14M12 5l7 7-7 7"})],-1)])],40,h5),y("div",p5,[y("div",m5,[y("div",{class:"h-full rounded-full bg-primary-500 light:bg-primary-600 transition-all duration-500 ease-out",style:Sn({width:p.value+"%"})},null,4)])])]))}},M5=uc(S5,[["__scopeId","data-v-4fd9bb21"]]),w5={class:"relative overflow-hidden h-48"},E5={class:"p-6"},T5={class:"text-white light:text-secondary-900 font-semibold text-lg mb-2 group-hover:text-primary-400 transition-colors duration-200"},A5={class:"text-secondary-400 light:text-secondary-500 text-sm mb-4 leading-relaxed"},C5={class:"flex flex-wrap gap-2 mb-4"},bg={__name:"ProjectCard",props:{project:{type:Object,required:!0}},emits:["open"],setup(n,{emit:e}){const t=n,i=e,r=De(null);let s=null;const o=()=>{if(!r.value)return;const a=r.value.getBoundingClientRect();i("open",{project:t.project,originRect:{left:a.left,top:a.top,width:a.width,height:a.height}})};return Pn(()=>{r.value&&(s=pC(r.value,6))}),$n(()=>{s&&s()}),(a,l)=>(de(),he("div",{ref_key:"cardRef",ref:r,onClick:o,class:"group bg-secondary-800 border border-secondary-700 rounded-xl overflow-hidden hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 will-change-transform cursor-pointer light:bg-white light:border-secondary-200 light:hover:border-primary-500/50 light:hover:shadow-primary-500/10"},[y("div",w5,[At(i0,{project:n.project,class:"w-full h-full group-hover:scale-105 transition-transform duration-500"},null,8,["project"]),l[0]||(l[0]=y("div",{class:"absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent pointer-events-none"},null,-1))]),y("div",E5,[y("h3",T5,ye(n.project.title),1),y("p",A5,ye(n.project.description),1),y("div",C5,[(de(!0),he(je,null,rt(n.project.tech,c=>(de(),he("span",{key:c,class:"text-xs text-primary-400 bg-primary-500/10 px-2 py-1 rounded-full"},ye(c),1))),128))])])],512))}},R5={class:"min-h-full flex flex-col lg:flex-row"},P5={class:"relative lg:w-1/2 lg:h-screen overflow-hidden flex-shrink-0"},D5={class:"absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:hidden bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent"},L5={class:"text-xl sm:text-3xl font-bold text-white mb-2"},I5={class:"flex flex-wrap gap-2"},U5={class:"flex-1 p-5 sm:p-8 lg:p-12 lg:overflow-y-auto"},F5={class:"hidden lg:block text-4xl font-bold text-white light:text-secondary-900 mb-4"},N5={class:"hidden lg:flex flex-wrap gap-2 mb-6"},O5={class:"mb-8"},k5={class:"text-secondary-300 light:text-secondary-600 leading-relaxed text-lg"},B5={class:"mb-8"},z5={class:"space-y-3"},V5={class:"flex flex-wrap gap-4"},H5=["href"],G5=["href"],W5={__name:"ProjectDetailModal",props:{project:{type:Object,required:!0},originRect:{type:Object,default:null}},emits:["close"],setup(n,{emit:e}){const t=n,i=e,r=["Responsive design that works across all devices","Optimized performance with lazy loading and code splitting","Clean, maintainable code following best practices","Accessible UI with semantic HTML and ARIA labels"],s=De(null),o=De(null),a=De(null),l=De(null),c=De(!1);let u=null;const d=async()=>{if(await Rr(),!s.value||!o.value)return;const g=s.value,_=o.value,p=a.value,m=t.originRect||{left:0,top:0,width:0,height:0},v=window.innerWidth,M=window.innerHeight;Ke.set(g,{opacity:0,pointerEvents:"none"}),Ke.set(_,{position:"fixed",left:m.left,top:m.top,width:m.width,height:m.height,margin:0,borderRadius:"1rem",zIndex:9999,overflow:"hidden"}),Ke.set(p,{opacity:0,y:30}),Ke.to(g,{opacity:1,duration:.3,ease:"power2.out",pointerEvents:"auto"}),u=Ke.timeline({defaults:{ease:"power3.inOut"}}),u.to(_,{left:0,top:0,width:v,height:M,borderRadius:0,duration:.7}).to(p,{opacity:1,y:0,duration:.5,ease:"power2.out"},"-=0.3").from(l.value,{opacity:0,scale:.8,duration:.3,ease:"back.out(1.7)"},"-=0.2")},f=()=>{if(c.value)return;c.value=!0;const g=s.value,_=o.value,p=a.value,m=t.originRect||{left:0,top:0,width:0,height:0};u&&u.kill(),Ke.timeline({defaults:{ease:"power3.inOut"},onComplete:()=>{i("close")}}).to(p,{opacity:0,y:-30,duration:.3,ease:"power2.in"}).to(_,{left:m.left,top:m.top,width:m.width,height:m.height,borderRadius:"1rem",duration:.6},"-=0.1").to(g,{opacity:0,duration:.3,ease:"power2.in"},"-=0.3")},h=g=>{g.key==="Escape"&&f()};return Pn(()=>{d(),document.body.style.overflow="hidden",window.addEventListener("keydown",h)}),$n(()=>{document.body.style.overflow="",window.removeEventListener("keydown",h),u&&u.kill()}),(g,_)=>(de(),he("div",{ref_key:"overlayRef",ref:s,class:"fixed inset-0 z-[9998] bg-dark-900/90 light:bg-secondary-900/90 backdrop-blur-sm",onClick:po(f,["self"])},[y("div",{ref_key:"cardRef",ref:o,class:"bg-secondary-800 light:bg-white shadow-2xl"},[y("button",{ref_key:"closeBtnRef",ref:l,onClick:f,class:"fixed top-4 right-4 z-[10000] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-900/80 light:bg-white/90 border border-secondary-700 light:border-secondary-200 flex items-center justify-center text-secondary-300 light:text-secondary-600 hover:text-primary-400 light:hover:text-primary-600 hover:border-primary-500/50 transition-colors duration-200 shadow-lg backdrop-blur-sm","aria-label":"Close project details"},[..._[0]||(_[0]=[y("svg",{class:"w-5 h-5 sm:w-6 sm:h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])],512),y("div",{ref_key:"contentRef",ref:a,class:"h-full w-full overflow-y-auto overscroll-contain"},[y("div",R5,[y("div",P5,[At(i0,{project:n.project,class:"w-full h-[60vh] sm:h-[55vh] lg:h-full"},null,8,["project"]),y("div",D5,[y("h2",L5,ye(n.project.title),1),y("div",I5,[(de(!0),he(je,null,rt(n.project.tech,p=>(de(),he("span",{key:p,class:"text-xs text-primary-300 bg-primary-500/20 px-3 py-1 rounded-full backdrop-blur-sm"},ye(p),1))),128))])])]),y("div",U5,[y("h2",F5,ye(n.project.title),1),y("div",N5,[(de(!0),he(je,null,rt(n.project.tech,p=>(de(),he("span",{key:p,class:"text-sm text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full"},ye(p),1))),128))]),y("div",O5,[_[1]||(_[1]=y("h3",{class:"text-lg font-semibold text-primary-400 light:text-primary-600 mb-3 uppercase tracking-wider"}," About This Project ",-1)),y("p",k5,ye(n.project.description),1)]),y("div",B5,[_[3]||(_[3]=y("h3",{class:"text-lg font-semibold text-primary-400 light:text-primary-600 mb-3 uppercase tracking-wider"}," Key Features ",-1)),y("ul",z5,[(de(!0),he(je,null,rt(n.project.features||r,(p,m)=>(de(),he("li",{key:m,class:"flex items-start gap-3 text-secondary-300 light:text-secondary-600"},[_[2]||(_[2]=y("svg",{class:"w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})],-1)),y("span",null,ye(p),1)]))),128))])]),y("div",V5,[y("a",{href:n.project.github,target:"_blank",rel:"noopener noreferrer",class:"inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary-700 light:bg-secondary-100 text-white light:text-secondary-900 font-medium hover:bg-primary-600 light:hover:bg-primary-600 light:hover:text-white transition-colors duration-300"},[..._[4]||(_[4]=[y("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24"},[y("path",{"fill-rule":"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z","clip-rule":"evenodd"})],-1),Hi(" View Code ",-1)])],8,H5),y("a",{href:n.project.demo,target:"_blank",rel:"noopener noreferrer",class:"inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors duration-300 shadow-lg shadow-primary-500/25"},[..._[5]||(_[5]=[y("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})],-1),Hi(" Live Demo ",-1)])],8,G5)])])])],512)],512)],512))}},X5={class:"h-1 bg-secondary-800/50 light:bg-secondary-200/50 backdrop-blur-sm"},$5={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},j5={class:"flex flex-wrap gap-3"},Y5=["onClick"],q5={key:0,class:"ml-auto flex items-center gap-1 p-1 rounded-lg bg-secondary-800 border border-secondary-700 light:bg-secondary-100 light:border-secondary-200"},K5={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"},Z5={__name:"ProjectsSection",setup(n){Ke.registerPlugin(ft);const e=De("All"),t=De("carousel"),i=De(!1),r=De(0),s=De(0),o=De(!1),a=De(null),l=De(null),c=De(null),u=De(null),d=De(null),f=De(null),h=De(null),g=De(null),_=De(null),p=De(null);let m=[],v=null,M=null,x=null,R=null;const A=an(()=>{const j=Af.flatMap(N=>N.tech);return["All",...new Set(j)]}),C=an(()=>e.value==="All"?Af:Af.filter(j=>j.tech.includes(e.value))),b=j=>{e.value=j},E=({project:j,originRect:N})=>{_.value=j,p.value=N},F=()=>{_.value=null,p.value=null};Ai(C,async()=>{await Rr(),V(),t.value==="horizontal"&&B()});const U=j=>{i.value||(t.value=j,j==="horizontal"?Rr(()=>B()):q())},L=j=>{i.value=j.matches,j.matches&&(t.value="grid",q())},V=()=>{if(!d.value)return;const j=d.value.getBoundingClientRect(),N=window.innerHeight,le=j.height-N,me=Math.min(Math.max(-j.top,0),le);r.value=le>0?me/le*100:100},k=()=>{M&&window.removeEventListener("scroll",M,{passive:!0}),M=()=>V(),window.addEventListener("scroll",M,{passive:!0}),V()},G=()=>{if(!f.value)return;const j=f.value.getBoundingClientRect(),N=window.innerHeight,me=j.height-N;if(o.value=j.top<N&&j.bottom>0,me>0){const ge=Math.min(Math.max(-j.top,0),me);s.value=ge/me*100}else s.value=o.value?100:0},X=()=>{x&&window.removeEventListener("scroll",x,{passive:!0}),x=()=>G(),window.addEventListener("scroll",x,{passive:!0}),G()},B=()=>{if(q(),!h.value||!g.value||!u.value)return;const j=g.value,N=u.value,me=j.scrollWidth-window.innerWidth;me<=0||(R=Ke.to(j,{x:-me,ease:"none",scrollTrigger:{trigger:N,start:"top top",end:()=>`+=${me}`,pin:!0,pinSpacing:!0,scrub:!0,anticipatePin:1,invalidateOnRefresh:!0,preventOverlaps:!0,fastScrollEnd:!0}}))},q=()=>{var j;R&&((j=R.scrollTrigger)==null||j.kill(),R.kill(),R=null)};return Pn(()=>{v=window.matchMedia("(max-width: 768px)"),i.value=v.matches,i.value&&(t.value="grid"),v.addEventListener("change",L),m.push(..._d(a.value,{x:-120,start:"top 90%",end:"top 40%"})),m.push(...n0(u.value,{y:60,duration:1.2,start:"top 80%",blur:14})),k(),X()}),$n(()=>{m.forEach(j=>j.kill()),q(),v&&v.removeEventListener("change",L),M&&window.removeEventListener("scroll",M,{passive:!0}),x&&window.removeEventListener("scroll",x,{passive:!0})}),(j,N)=>(de(),he("section",{ref_key:"sectionRef",ref:f,id:"projects",class:st(["pt-20 pb-0 bg-dark-800 light:bg-white relative",t.value==="horizontal"?"overflow-visible":"overflow-hidden"])},[N[5]||(N[5]=y("div",{class:"absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"},null,-1)),o.value?(de(),he("div",{key:0,class:st(["fixed top-16 left-0 right-0 z-40 transition-opacity duration-300",s.value>=100?"opacity-0 pointer-events-none":"opacity-100"])},[y("div",X5,[y("div",{class:"h-full bg-gradient-to-r from-primary-500 to-accent-500 light:from-primary-600 light:to-accent-600 transition-all duration-150 ease-out",style:Sn({width:s.value+"%"})},null,4)])],2)):Bn("",!0),y("div",$5,[y("h2",{ref_key:"titleRef",ref:a,class:"section-title"},"Featured Projects",512),y("p",{ref_key:"subtitleRef",ref:l,class:"section-subtitle"},"A selection of projects I've built",512),y("div",{ref_key:"filterRef",ref:c,class:"flex flex-wrap items-center gap-3 mb-10"},[y("div",j5,[(de(!0),he(je,null,rt(A.value,le=>(de(),he("button",{key:le,onClick:me=>b(le),class:st(["px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105",e.value===le?"bg-primary-600 text-white shadow-lg shadow-primary-500/25":"bg-secondary-800 text-secondary-400 hover:text-white border border-secondary-700 light:bg-white light:text-secondary-500 light:hover:text-secondary-900 light:border-secondary-200"])},ye(le),11,Y5))),128))]),i.value?Bn("",!0):(de(),he("div",q5,[y("button",{onClick:N[0]||(N[0]=le=>U("grid")),class:st(["px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300",t.value==="grid"?"bg-primary-600 text-white shadow-md shadow-primary-500/25":"text-secondary-400 hover:text-white light:text-secondary-500 light:hover:text-secondary-900"]),"aria-label":"Grid view"},[...N[2]||(N[2]=[y("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})],-1)])],2),y("button",{onClick:N[1]||(N[1]=le=>U("carousel")),class:st(["px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300",t.value==="carousel"?"bg-primary-600 text-white shadow-md shadow-primary-500/25":"text-secondary-400 hover:text-white light:text-secondary-500 light:hover:text-secondary-900"]),"aria-label":"Carousel view"},[...N[3]||(N[3]=[y("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)])],2)]))],512)]),y("div",{ref_key:"wheelContainerRef",ref:u,class:"w-full"},[t.value==="grid"?(de(),he("div",{key:0,ref_key:"gridContainerRef",ref:d,class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"},[y("div",K5,[(de(!0),he(je,null,rt(C.value,le=>(de(),vl(bg,{key:le.id,project:le,onOpen:E},null,8,["project"]))),128))]),N[4]||(N[4]=y("div",{class:"mt-10 flex justify-center"},[y("div",{class:"w-64 sm:w-80"})],-1))],512)):t.value==="carousel"?(de(),vl(M5,{key:1,projects:C.value,onOpen:E},null,8,["projects"])):t.value==="horizontal"?(de(),he("div",{key:2,ref_key:"horizontalContainerRef",ref:h,class:"relative h-screen overflow-hidden"},[y("div",{ref_key:"horizontalTrackRef",ref:g,class:"flex items-center gap-8 px-8 sm:px-12 lg:px-16 h-full w-max"},[(de(!0),he(je,null,rt(C.value,le=>(de(),he("div",{key:le.id,class:"w-[320px] sm:w-[380px] lg:w-[420px] shrink-0"},[At(bg,{project:le,onOpen:E},null,8,["project"])]))),128))],512)],512)):Bn("",!0)],512),_.value?(de(),vl(W5,{key:1,project:_.value,"origin-rect":p.value,onClose:F},null,8,["project","origin-rect"])):Bn("",!0)],2))}},J5={id:"contact",class:"py-20 bg-dark-800 light:bg-white relative overflow-hidden"},Q5={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},eL={class:"text-center mb-16"},tL={class:"text-center"},nL={class:"flex items-center justify-center gap-4"},iL=["href","aria-label"],rL={class:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24"},sL=["d"],oL={__name:"ContactSection",setup(n){const e=De(null),t=De(null),i=De(null);let r=[];const s=[{name:"GitHub",href:"https://github.com/pixel-user-512",icon:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"},{name:"LinkedIn",href:"https://linkedin.com/in/kenneth-paul-cortez",icon:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"}];return Pn(()=>{r.push(..._d(t.value,{x:-120,start:"top 90%",end:"top 40%"})),r.push(...n0(e.value,{y:60,duration:1.2,stagger:.15,start:"top 80%",blur:14}))}),$n(()=>{r.forEach(o=>o.kill())}),(o,a)=>(de(),he("section",J5,[a[2]||(a[2]=y("div",{class:"absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"},null,-1)),y("div",Q5,[y("div",eL,[y("h2",{ref_key:"titleRef",ref:t,class:"section-title"},"Get In Touch",512),y("p",{ref_key:"subtitleRef",ref:i,class:"section-subtitle"},"Have a project in mind? Let's work together!",512)]),y("div",{ref_key:"infoRef",ref:e,class:"max-w-3xl mx-auto"},[a[1]||(a[1]=lo('<div class="text-center mb-12"><p class="text-secondary-400 light:text-secondary-500 text-lg leading-relaxed"> I&#39;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out! </p></div><div class="grid sm:grid-cols-2 gap-4 mb-12"><a href="mailto:kenneth.cortez.512@gmail.com" class="group flex items-center gap-4 bg-secondary-800/50 border border-secondary-700 rounded-2xl p-5 hover:border-primary-500/50 hover:bg-secondary-800/80 transition-all duration-300 light:bg-white light:border-secondary-200 light:hover:border-primary-500/50"><span class="w-12 h-12 flex items-center justify-center bg-secondary-800 border border-secondary-700 rounded-xl group-hover:border-primary-500/50 group-hover:scale-110 transition-all duration-300 light:bg-secondary-50 light:border-secondary-200 shrink-0"><svg class="w-6 h-6 text-primary-400 light:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></span><span class="min-w-0"><span class="block text-xs text-secondary-500 light:text-secondary-400 uppercase tracking-wider mb-1">Email</span><span class="block text-secondary-200 light:text-secondary-700 font-medium truncate">kenneth.cortez.512@gmail.com</span></span></a><a href="tel:+639664002142" class="group flex items-center gap-4 bg-secondary-800/50 border border-secondary-700 rounded-2xl p-5 hover:border-primary-500/50 hover:bg-secondary-800/80 transition-all duration-300 light:bg-white light:border-secondary-200 light:hover:border-primary-500/50"><span class="w-12 h-12 flex items-center justify-center bg-secondary-800 border border-secondary-700 rounded-xl group-hover:border-primary-500/50 group-hover:scale-110 transition-all duration-300 light:bg-secondary-50 light:border-secondary-200 shrink-0"><svg class="w-6 h-6 text-primary-400 light:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></span><span class="min-w-0"><span class="block text-xs text-secondary-500 light:text-secondary-400 uppercase tracking-wider mb-1">Phone</span><span class="block text-secondary-200 light:text-secondary-700 font-medium">+63 (966) 400-2142</span></span></a></div>',2)),y("div",tL,[a[0]||(a[0]=y("h4",{class:"text-white light:text-secondary-900 text-sm font-semibold uppercase tracking-wider mb-5"},"Follow Me",-1)),y("div",nL,[(de(),he(je,null,rt(s,l=>y("a",{key:l.name,href:l.href,target:"_blank",rel:"noopener noreferrer",class:"w-12 h-12 flex items-center justify-center bg-secondary-800 border border-secondary-700 rounded-xl text-secondary-400 hover:text-primary-400 hover:border-primary-500/50 hover:scale-110 transition-all duration-300 light:bg-white light:border-secondary-200 light:text-secondary-500 light:hover:text-primary-600","aria-label":l.name},[(de(),he("svg",rL,[y("path",{d:l.icon},null,8,sL)]))],8,iL)),64))])])],512)])]))}},aL={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},lL={class:"flex flex-col md:flex-row items-center justify-between gap-4"},cL={class:"text-secondary-400 light:text-secondary-500 text-sm"},uL={class:"flex items-center gap-6"},dL={__name:"Footer",setup(n){const e=new Date().getFullYear(),t=De(null);let i=[];const r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return Pn(()=>{i=n0(t.value,{y:30,duration:1,start:"top bottom",blur:8})}),$n(()=>{i.forEach(s=>s.kill())}),(s,o)=>(de(),he("footer",{ref_key:"footerRef",ref:t,class:"bg-dark-800 border-t border-dark-700 light:bg-white light:border-secondary-200 py-8"},[y("div",aL,[y("div",lL,[y("div",cL," © "+ye(xt(e))+" Kenneth Paul Cortez ",1),y("div",uL,[y("a",{href:"#home",onClick:po(r,["prevent"]),class:"text-secondary-400 hover:text-primary-400 light:text-secondary-500 light:hover:text-primary-600 transition-colors duration-200 text-sm"}," Home "),o[0]||(o[0]=y("a",{href:"#about",class:"text-secondary-400 hover:text-primary-400 light:text-secondary-500 light:hover:text-primary-600 transition-colors duration-200 text-sm"}," About ",-1)),o[1]||(o[1]=y("a",{href:"#projects",class:"text-secondary-400 hover:text-primary-400 light:text-secondary-500 light:hover:text-primary-600 transition-colors duration-200 text-sm"}," Projects ",-1)),o[2]||(o[2]=y("a",{href:"#contact",class:"text-secondary-400 hover:text-primary-400 light:text-secondary-500 light:hover:text-primary-600 transition-colors duration-200 text-sm"}," Contact ",-1))]),o[3]||(o[3]=y("div",{class:"text-secondary-500 light:text-secondary-400 text-sm"},[Hi(" Built with "),y("span",{class:"text-primary-500"},"Vue 3"),Hi(" & "),y("span",{class:"text-primary-500"},"Tailwind CSS")],-1))])])],512))}},fL={__name:"BackToTop",setup(n){const e=De(!1),t=()=>{e.value=window.scrollY>400},i=()=>{window.scrollTo({top:0,behavior:"smooth"})};return Pn(()=>{window.addEventListener("scroll",t)}),$n(()=>{window.removeEventListener("scroll",t)}),(r,s)=>(de(),vl(zf,{"enter-active-class":"transition-all duration-300 ease-out","enter-from-class":"opacity-0 translate-y-4","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition-all duration-300 ease-in","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 translate-y-4"},{default:Mu(()=>[e.value?(de(),he("button",{key:0,onClick:i,class:"fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white rounded-xl shadow-lg shadow-primary-500/25 hover:scale-110 transition-all duration-300","aria-label":"Back to top"},[...s[0]||(s[0]=[y("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 15l7-7 7 7"})],-1)])])):Bn("",!0)]),_:1}))}},hL={__name:"MouseTrail",setup(n){const{isMouseTrailEnabled:e}=Px();let t=null;const i=()=>{t||(t=mC({size:45,trailLength:400,trailWidth:16}))},r=()=>{t&&(t(),t=null)};return Pn(()=>{e.value&&i()}),$n(()=>{r()}),Ai(e,s=>{s?i():r()}),(s,o)=>null}},pL={__name:"IntroLoader",setup(n){const e=De(!0),t=De(null);return Pn(()=>{document.body.style.overflow="hidden";const i=getComputedStyle(document.documentElement).getPropertyValue("--color-primary-500").trim();t.value.style.backgroundColor=`rgb(${i})`;const r={size:3};t.value.style.setProperty("--hole-size",`${r.size}%`),Ke.delayedCall(.5,()=>{Ke.to(r,{size:100,duration:.6,ease:"power2.inOut",onUpdate:()=>{t.value.style.setProperty("--hole-size",`${r.size}%`)},onComplete:()=>{e.value=!1,document.body.style.overflow=""}})})}),$n(()=>{document.body.style.overflow=""}),(i,r)=>e.value?(de(),he("div",{key:0,ref_key:"overlayRef",ref:t,class:"intro-overlay"},null,512)):Bn("",!0)}},mL=uc(pL,[["__scopeId","data-v-151ea3fb"]]),gL={class:"min-h-screen bg-dark-900 light:bg-secondary-50"},_L={__name:"App",setup(n){return(e,t)=>(de(),he("div",gL,[At(RM),y("main",null,[At(fC),At(DC),At(jC),At(Z5),At(oL)]),At(dL),At(fL),At(hL),At(mL)]))}};_b(_L).mount("#app");
