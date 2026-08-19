(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rp(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Vt={},ca=[],Sr=()=>{},bg=()=>!1,qu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ku=n=>n.startsWith("onUpdate:"),Sn=Object.assign,sp=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Hv=Object.prototype.hasOwnProperty,Rt=(n,e)=>Hv.call(n,e),et=Array.isArray,ua=n=>nc(n)==="[object Map]",Zu=n=>nc(n)==="[object Set]",r0=n=>nc(n)==="[object Date]",lt=n=>typeof n=="function",Kt=n=>typeof n=="string",Cr=n=>typeof n=="symbol",Dt=n=>n!==null&&typeof n=="object",Sg=n=>(Dt(n)||lt(n))&&lt(n.then)&&lt(n.catch),Mg=Object.prototype.toString,nc=n=>Mg.call(n),Gv=n=>nc(n).slice(8,-1),wg=n=>nc(n)==="[object Object]",op=n=>Kt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,pl=rp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ju=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Wv=/-\w/g,tr=Ju(n=>n.replace(Wv,e=>e.slice(1).toUpperCase())),Xv=/\B([A-Z])/g,Hs=Ju(n=>n.replace(Xv,"-$1").toLowerCase()),Eg=Ju(n=>n.charAt(0).toUpperCase()+n.slice(1)),xd=Ju(n=>n?`on${Eg(n)}`:""),mr=(n,e)=>!Object.is(n,e),nu=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Tg=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Qu=n=>{const e=parseFloat(n);return isNaN(e)?n:e},$v=n=>{const e=Kt(n)?Number(n):NaN;return isNaN(e)?n:e};let s0;const ed=()=>s0||(s0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Tn(n){if(et(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Kt(i)?Kv(i):Tn(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Kt(n)||Dt(n))return n}const jv=/;(?![^(]*\))/g,Yv=/:([^]+)/,qv=/\/\*[^]*?\*\//g;function Kv(n){const e={};return n.replace(qv,"").split(jv).forEach(t=>{if(t){const i=t.split(Yv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function at(n){let e="";if(Kt(n))e=n;else if(et(n))for(let t=0;t<n.length;t++){const i=at(n[t]);i&&(e+=i+" ")}else if(Dt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Zv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jv=rp(Zv);function Ag(n){return!!n||n===""}function Qv(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=ic(n[i],e[i]);return t}function ic(n,e){if(n===e)return!0;let t=r0(n),i=r0(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Cr(n),i=Cr(e),t||i)return n===e;if(t=et(n),i=et(e),t||i)return t&&i?Qv(n,e):!1;if(t=Dt(n),i=Dt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ic(n[o],e[o]))return!1}}return String(n)===String(e)}function ey(n,e){return n.findIndex(t=>ic(t,e))}const Cg=n=>!!(n&&n.__v_isRef===!0),be=n=>Kt(n)?n:n==null?"":et(n)||Dt(n)&&(n.toString===Mg||!lt(n.toString))?Cg(n)?be(n.value):JSON.stringify(n,Rg,2):String(n),Rg=(n,e)=>Cg(e)?Rg(n,e.value):ua(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[vd(i,s)+" =>"]=r,t),{})}:Zu(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>vd(t))}:Cr(e)?vd(e):Dt(e)&&!et(e)&&!wg(e)?String(e):e,vd=(n,e="")=>{var t;return Cr(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let En;class ty{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&En&&(En.active?(this.parent=En,this.index=(En.scopes||(En.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=En;try{return En=this,e()}finally{En=t}}}on(){++this._on===1&&(this.prevScope=En,En=this)}off(){if(this._on>0&&--this._on===0){if(En===this)En=this.prevScope;else{let e=En;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ny(){return En}let Gt;const yd=new WeakSet;class Pg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,En&&(En.active?En.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,yd.has(this)&&(yd.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Lg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,o0(this),Ig(this);const e=Gt,t=nr;Gt=this,nr=!0;try{return this.fn()}finally{Ug(this),Gt=e,nr=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)cp(e);this.deps=this.depsTail=void 0,o0(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?yd.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Rf(this)&&this.run()}get dirty(){return Rf(this)}}let Dg=0,ml,gl;function Lg(n,e=!1){if(n.flags|=8,e){n.next=gl,gl=n;return}n.next=ml,ml=n}function ap(){Dg++}function lp(){if(--Dg>0)return;if(gl){let e=gl;for(gl=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ml;){let e=ml;for(ml=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Ig(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ug(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),cp(i),iy(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Rf(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Fg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Fg(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Il)||(n.globalVersion=Il,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Rf(n))))return;n.flags|=2;const e=n.dep,t=Gt,i=nr;Gt=n,nr=!0;try{Ig(n);const r=n.fn(n._value);(e.version===0||mr(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Gt=t,nr=i,Ug(n),n.flags&=-3}}function cp(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)cp(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function iy(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let nr=!0;const Ng=[];function ns(){Ng.push(nr),nr=!1}function is(){const n=Ng.pop();nr=n===void 0?!0:n}function o0(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Gt;Gt=void 0;try{e()}finally{Gt=t}}}let Il=0;class ry{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class up{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Gt||!nr||Gt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Gt)t=this.activeLink=new ry(Gt,this),Gt.deps?(t.prevDep=Gt.depsTail,Gt.depsTail.nextDep=t,Gt.depsTail=t):Gt.deps=Gt.depsTail=t,Og(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Gt.depsTail,t.nextDep=void 0,Gt.depsTail.nextDep=t,Gt.depsTail=t,Gt.deps===t&&(Gt.deps=i)}return t}trigger(e){this.version++,Il++,this.notify(e)}notify(e){ap();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{lp()}}}function Og(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Og(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Pf=new WeakMap,yo=Symbol(""),Df=Symbol(""),Ul=Symbol("");function On(n,e,t){if(nr&&Gt){let i=Pf.get(n);i||Pf.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new up),r.map=i,r.key=t),r.track()}}function Wr(n,e,t,i,r,s){const o=Pf.get(n);if(!o){Il++;return}const a=l=>{l&&l.trigger()};if(ap(),e==="clear")o.forEach(a);else{const l=et(n),c=l&&op(t);if(l&&t==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===Ul||!Cr(f)&&f>=u)&&a(d)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Ul)),e){case"add":l?c&&a(o.get("length")):(a(o.get(yo)),ua(n)&&a(o.get(Df)));break;case"delete":l||(a(o.get(yo)),ua(n)&&a(o.get(Df)));break;case"set":ua(n)&&a(o.get(yo));break}}lp()}function ko(n){const e=Tt(n);return e===n?e:(On(e,"iterate",Ul),Gi(n)?e:e.map(ir))}function td(n){return On(n=Tt(n),"iterate",Ul),n}function fr(n,e){return rs(n)?Ta(bo(n)?ir(e):e):ir(e)}const sy={__proto__:null,[Symbol.iterator](){return bd(this,Symbol.iterator,n=>fr(this,n))},concat(...n){return ko(this).concat(...n.map(e=>et(e)?ko(e):e))},entries(){return bd(this,"entries",n=>(n[1]=fr(this,n[1]),n))},every(n,e){return Ir(this,"every",n,e,void 0,arguments)},filter(n,e){return Ir(this,"filter",n,e,t=>t.map(i=>fr(this,i)),arguments)},find(n,e){return Ir(this,"find",n,e,t=>fr(this,t),arguments)},findIndex(n,e){return Ir(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Ir(this,"findLast",n,e,t=>fr(this,t),arguments)},findLastIndex(n,e){return Ir(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Ir(this,"forEach",n,e,void 0,arguments)},includes(...n){return Sd(this,"includes",n)},indexOf(...n){return Sd(this,"indexOf",n)},join(n){return ko(this).join(n)},lastIndexOf(...n){return Sd(this,"lastIndexOf",n)},map(n,e){return Ir(this,"map",n,e,void 0,arguments)},pop(){return Ha(this,"pop")},push(...n){return Ha(this,"push",n)},reduce(n,...e){return a0(this,"reduce",n,e)},reduceRight(n,...e){return a0(this,"reduceRight",n,e)},shift(){return Ha(this,"shift")},some(n,e){return Ir(this,"some",n,e,void 0,arguments)},splice(...n){return Ha(this,"splice",n)},toReversed(){return ko(this).toReversed()},toSorted(n){return ko(this).toSorted(n)},toSpliced(...n){return ko(this).toSpliced(...n)},unshift(...n){return Ha(this,"unshift",n)},values(){return bd(this,"values",n=>fr(this,n))}};function bd(n,e,t){const i=td(n),r=i[e]();return i!==n&&!Gi(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const oy=Array.prototype;function Ir(n,e,t,i,r,s){const o=td(n),a=o!==n&&!Gi(n),l=o[e];if(l!==oy[e]){const d=l.apply(n,s);return a?ir(d):d}let c=t;o!==n&&(a?c=function(d,f){return t.call(this,fr(n,d),f,n)}:t.length>2&&(c=function(d,f){return t.call(this,d,f,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function a0(n,e,t,i){const r=td(n),s=r!==n&&!Gi(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=fr(n,c)),t.call(this,c,fr(n,u),d,n)}):t.length>3&&(o=function(c,u,d){return t.call(this,c,u,d,n)}));const l=r[e](o,...i);return a?fr(n,l):l}function Sd(n,e,t){const i=Tt(n);On(i,"iterate",Ul);const r=i[e](...t);return(r===-1||r===!1)&&hp(t[0])?(t[0]=Tt(t[0]),i[e](...t)):r}function Ha(n,e,t=[]){ns(),ap();const i=Tt(n)[e].apply(n,t);return lp(),is(),i}const ay=rp("__proto__,__v_isRef,__isVue"),kg=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Cr));function ly(n){Cr(n)||(n=String(n));const e=Tt(this);return On(e,"has",n),e.hasOwnProperty(n)}class Bg{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?xy:Gg:s?Hg:Vg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=et(e);if(!r){let l;if(o&&(l=sy[t]))return l;if(t==="hasOwnProperty")return ly}const a=Reflect.get(e,t,Hn(e)?e:i);if((Cr(t)?kg.has(t):ay(t))||(r||On(e,"get",t),s))return a;if(Hn(a)){const l=o&&op(t)?a:a.value;return r&&Dt(l)?If(l):l}return Dt(a)?r?If(a):da(a):a}}class zg extends Bg{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=et(e)&&op(t);if(!this._isShallow){const c=rs(s);if(!Gi(i)&&!rs(i)&&(s=Tt(s),i=Tt(i)),!o&&Hn(s)&&!Hn(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:Rt(e,t),l=Reflect.set(e,t,i,Hn(e)?e:r);return e===Tt(r)&&l&&(a?mr(i,s)&&Wr(e,"set",t,i):Wr(e,"add",t,i)),l}deleteProperty(e,t){const i=Rt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Wr(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Cr(t)||!kg.has(t))&&On(e,"has",t),i}ownKeys(e){return On(e,"iterate",et(e)?"length":yo),Reflect.ownKeys(e)}}class cy extends Bg{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const uy=new zg,dy=new cy,fy=new zg(!0);const Lf=n=>n,fc=n=>Reflect.getPrototypeOf(n);function hy(n,e,t){return function(...i){const r=this.__v_raw,s=Tt(r),o=ua(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Lf:e?Ta:ir;return!e&&On(s,"iterate",l?Df:yo),Sn(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function hc(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function py(n,e){const t={get(r){const s=this.__v_raw,o=Tt(s),a=Tt(r);n||(mr(r,a)&&On(o,"get",r),On(o,"get",a));const{has:l}=fc(o),c=e?Lf:n?Ta:ir;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&On(Tt(r),"iterate",yo),r.size},has(r){const s=this.__v_raw,o=Tt(s),a=Tt(r);return n||(mr(r,a)&&On(o,"has",r),On(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Tt(a),c=e?Lf:n?Ta:ir;return!n&&On(l,"iterate",yo),a.forEach((u,d)=>r.call(s,c(u),c(d),o))}};return Sn(t,n?{add:hc("add"),set:hc("set"),delete:hc("delete"),clear:hc("clear")}:{add(r){const s=Tt(this),o=fc(s),a=Tt(r),l=!e&&!Gi(r)&&!rs(r)?a:r;return o.has.call(s,l)||mr(r,l)&&o.has.call(s,r)||mr(a,l)&&o.has.call(s,a)||(s.add(l),Wr(s,"add",l,l)),this},set(r,s){!e&&!Gi(s)&&!rs(s)&&(s=Tt(s));const o=Tt(this),{has:a,get:l}=fc(o);let c=a.call(o,r);c||(r=Tt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?mr(s,u)&&Wr(o,"set",r,s):Wr(o,"add",r,s),this},delete(r){const s=Tt(this),{has:o,get:a}=fc(s);let l=o.call(s,r);l||(r=Tt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Wr(s,"delete",r,void 0),c},clear(){const r=Tt(this),s=r.size!==0,o=r.clear();return s&&Wr(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=hy(r,n,e)}),t}function dp(n,e){const t=py(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Rt(t,r)&&r in i?t:i,r,s)}const my={get:dp(!1,!1)},gy={get:dp(!1,!0)},_y={get:dp(!0,!1)};const Vg=new WeakMap,Hg=new WeakMap,Gg=new WeakMap,xy=new WeakMap;function vy(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function da(n){return rs(n)?n:fp(n,!1,uy,my,Vg)}function yy(n){return fp(n,!1,fy,gy,Hg)}function If(n){return fp(n,!0,dy,_y,Gg)}function fp(n,e,t,i,r){if(!Dt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const o=vy(Gv(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function bo(n){return rs(n)?bo(n.__v_raw):!!(n&&n.__v_isReactive)}function rs(n){return!!(n&&n.__v_isReadonly)}function Gi(n){return!!(n&&n.__v_isShallow)}function hp(n){return n?!!n.__v_raw:!1}function Tt(n){const e=n&&n.__v_raw;return e?Tt(e):n}function by(n){return!Rt(n,"__v_skip")&&Object.isExtensible(n)&&Tg(n,"__v_skip",!0),n}const ir=n=>Dt(n)?da(n):n,Ta=n=>Dt(n)?If(n):n;function Hn(n){return n?n.__v_isRef===!0:!1}function Oe(n){return Sy(n,!1)}function Sy(n,e){return Hn(n)?n:new My(n,e)}class My{constructor(e,t){this.dep=new up,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Tt(e),this._value=t?e:ir(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Gi(e)||rs(e);e=i?e:Tt(e),mr(e,t)&&(this._rawValue=e,this._value=i?e:ir(e),this.dep.trigger())}}function xt(n){return Hn(n)?n.value:n}const wy={get:(n,e,t)=>e==="__v_raw"?n:xt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Hn(r)&&!Hn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Wg(n){return bo(n)?n:new Proxy(n,wy)}class Ey{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new up(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Il-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Gt!==this)return Lg(this,!0),!0}get value(){const e=this.dep.track();return Fg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ty(n,e,t=!1){let i,r;return lt(n)?i=n:(i=n.get,r=n.set),new Ey(i,r,t)}const pc={},bu=new WeakMap;let io;function Ay(n,e=!1,t=io){if(t){let i=bu.get(t);i||bu.set(t,i=[]),i.push(n)}}function Cy(n,e,t=Vt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=x=>r?x:Gi(x)||r===!1||r===0?Xr(x,1):Xr(x);let u,d,f,h,g=!1,_=!1;if(Hn(n)?(d=()=>n.value,g=Gi(n)):bo(n)?(d=()=>c(n),g=!0):et(n)?(_=!0,g=n.some(x=>bo(x)||Gi(x)),d=()=>n.map(x=>{if(Hn(x))return x.value;if(bo(x))return c(x);if(lt(x))return l?l(x,2):x()})):lt(n)?e?d=l?()=>l(n,2):n:d=()=>{if(f){ns();try{f()}finally{is()}}const x=io;io=u;try{return l?l(n,3,[h]):n(h)}finally{io=x}}:d=Sr,e&&r){const x=d,M=r===!0?1/0:r;d=()=>Xr(x(),M)}const p=ny(),m=()=>{u.stop(),p&&p.active&&sp(p.effects,u)};if(s&&e){const x=e;e=(...M)=>{const R=x(...M);return m(),R}}let b=_?new Array(n.length).fill(pc):pc;const A=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const M=u.run();if(x||r||g||(_?M.some((R,C)=>mr(R,b[C])):mr(M,b))){f&&f();const R=io;io=u;try{const C=[M,b===pc?void 0:_&&b[0]===pc?[]:b,h];b=M,l?l(e,3,C):e(...C)}finally{io=R}}}else u.run()};return a&&a(A),u=new Pg(d),u.scheduler=o?()=>o(A,!1):A,h=x=>Ay(x,!1,u),f=u.onStop=()=>{const x=bu.get(u);if(x){if(l)l(x,4);else for(const M of x)M();bu.delete(u)}},e?i?A(!0):b=u.run():o?o(A.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function Xr(n,e=1/0,t){if(e<=0||!Dt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Hn(n))Xr(n.value,e,t);else if(et(n))for(let i=0;i<n.length;i++)Xr(n[i],e,t);else if(Zu(n)||ua(n))n.forEach(i=>{Xr(i,e,t)});else if(wg(n)){for(const i in n)Xr(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Xr(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rc(n,e,t,i){try{return i?n(...i):n()}catch(r){nd(r,e,t)}}function $i(n,e,t,i){if(lt(n)){const r=rc(n,e,t,i);return r&&Sg(r)&&r.catch(s=>{nd(s,e,t)}),r}if(et(n)){const r=[];for(let s=0;s<n.length;s++)r.push($i(n[s],e,t,i));return r}}function nd(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Vt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(s){ns(),rc(s,null,10,[n,l,c]),is();return}}Ry(n,t,r,i,o)}function Ry(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Jn=[];let cr=-1;const fa=[];let Ms=null,ia=0;const Xg=Promise.resolve();let Su=null;function ss(n){const e=Su||Xg;return n?e.then(this?n.bind(this):n):e}function Py(n){let e=cr+1,t=Jn.length;for(;e<t;){const i=e+t>>>1,r=Jn[i],s=Fl(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function pp(n){if(!(n.flags&1)){const e=Fl(n),t=Jn[Jn.length-1];!t||!(n.flags&2)&&e>=Fl(t)?Jn.push(n):Jn.splice(Py(e),0,n),n.flags|=1,$g()}}function $g(){Su||(Su=Xg.then(Yg))}function Dy(n){if(!et(n))Ms&&n.id===-1?Ms.splice(ia+1,0,n):n.flags&1||(fa.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)fa.push(n[e]);$g()}function l0(n,e,t=cr+1){for(;t<Jn.length;t++){const i=Jn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Jn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function jg(n){if(fa.length){const e=[...new Set(fa)].sort((t,i)=>Fl(t)-Fl(i));if(fa.length=0,Ms){for(let t=0;t<e.length;t++)Ms.push(e[t]);return}for(Ms=e,ia=0;ia<Ms.length;ia++){const t=Ms[ia];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ms=null,ia=0}}const Fl=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Yg(n){try{for(cr=0;cr<Jn.length;cr++){const e=Jn[cr];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),rc(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;cr<Jn.length;cr++){const e=Jn[cr];e&&(e.flags&=-2)}cr=-1,Jn.length=0,jg(),Su=null,(Jn.length||fa.length)&&Yg()}}let zi=null,qg=null;function Mu(n){const e=zi;return zi=n,qg=n&&n.type.__scopeId||null,e}function wu(n,e=zi,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Cu(-1);const s=Mu(e),o=So.length;let a;try{a=n(...r)}finally{for(let l=So.length;l>o;l--)M_();Mu(s),i._d&&Cu(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function mc(n,e){if(zi===null)return n;const t=ld(zi),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=Vt]=e[r];s&&(lt(s)&&(s={mounted:s,updated:s}),s.deep&&Xr(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Xs(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ns(),$i(l,t,8,[n.el,a,n,e]),is())}}function Ly(n,e){if(ei){let t=ei.provides;const i=ei.parent&&ei.parent.provides;i===t&&(t=ei.provides=Object.create(i)),t[n]=e}}function iu(n,e,t=!1){const i=T_();if(i||ha){let r=ha?ha._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&lt(e)?e.call(i&&i.proxy):e}}const Iy=Symbol.for("v-scx"),Uy=()=>iu(Iy);function Wi(n,e,t){return Kg(n,e,t)}function Kg(n,e,t=Vt){const{immediate:i,deep:r,flush:s,once:o}=t,a=Sn({},t),l=e&&i||!e&&s!=="post";let c;if(Bl){if(s==="sync"){const h=Uy();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Sr,h.resume=Sr,h.pause=Sr,h}}const u=ei;a.call=(h,g,_)=>$i(h,u,g,_);let d=!1;s==="post"?a.scheduler=h=>{si(h,u&&u.suspense)}:s!=="sync"&&(d=!0,a.scheduler=(h,g)=>{g?h():pp(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=Cy(n,e,a);return Bl&&(c?c.push(f):l&&f()),f}function Fy(n,e,t){const i=this.proxy,r=Kt(n)?n.includes(".")?Zg(i,n):()=>i[n]:n.bind(i,i);let s;lt(e)?s=e:(s=e.handler,t=e);const o=sc(this),a=Kg(r,s.bind(i),t);return o(),a}function Zg(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Ny=Symbol("_vte"),id=n=>n.__isTeleport,Fi=Symbol("_leaveCb"),Ga=Symbol("_enterCb");function Oy(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Wn(()=>{n.isMounted=!0}),s_(()=>{n.isUnmounting=!0}),n}const Li=[Function,Array],Jg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Li,onEnter:Li,onAfterEnter:Li,onEnterCancelled:Li,onBeforeLeave:Li,onLeave:Li,onAfterLeave:Li,onLeaveCancelled:Li,onBeforeAppear:Li,onAppear:Li,onAfterAppear:Li,onAppearCancelled:Li},Qg=n=>{const e=n.subTree;return e.component?Qg(e.component):e},ky={name:"BaseTransition",props:Jg,setup(n,{slots:e}){const t=T_(),i=Oy();return()=>{const r=e.default&&n_(e.default(),!0),s=r&&r.length?e_(r):t.subTree?ai():void 0;if(!s)return;const o=Tt(n),{mode:a}=o;if(i.isLeaving)return Md(s);const l=Eu(s);if(!l)return Md(s);let c=Uf(l,o,i,t,d=>c=d);l.type!==Qn&&Nl(l,c);let u=t.subTree&&Eu(t.subTree);if(u&&u.type!==Qn&&!lo(u,l)&&Qg(t).type!==Qn){let d=Uf(u,o,i,t);if(Nl(u,d),a==="out-in"&&l.type!==Qn)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,u=void 0},Md(s);a==="in-out"&&l.type!==Qn?d.delayLeave=(f,h,g)=>{const _=t_(i,u);_[String(u.key)]=u,f[Fi]=()=>{h(),f[Fi]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function e_(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Qn){e=t;break}}return e}const By=ky;function t_(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Uf(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:p,onAppear:m,onAfterAppear:b,onAppearCancelled:A}=e,x=String(n.key),M=t_(t,n),R=(T,N)=>{T&&$i(T,i,9,N)},C=(T,N)=>{const F=N[1];R(T,N),et(T)?T.every(I=>I.length<=1)&&F():T.length<=1&&F()},y={mode:o,persisted:a,beforeEnter(T){let N=l;if(!t.isMounted)if(s)N=p||l;else return;T[Fi]&&T[Fi](!0);const F=M[x];F&&lo(n,F)&&F.el[Fi]&&F.el[Fi](),R(N,[T])},enter(T){if(M[x]===n)return;let N=c,F=u,I=d;if(!t.isMounted)if(s)N=m||c,F=b||u,I=A||d;else return;let G=!1;T[Ga]=V=>{G||(G=!0,V?R(I,[T]):R(F,[T]),y.delayedLeave&&y.delayedLeave(),T[Ga]=void 0)};const $=T[Ga].bind(null,!1);N?C(N,[T,$]):$()},leave(T,N){const F=String(n.key);if(T[Ga]&&T[Ga](!0),t.isUnmounting)return N();R(f,[T]);let I=!1;T[Fi]=$=>{I||(I=!0,N(),$?R(_,[T]):R(g,[T]),T[Fi]=void 0,M[F]===n&&delete M[F])};const G=T[Fi].bind(null,!1);M[F]=n,h?C(h,[T,G]):G()},clone(T){const N=Uf(T,e,t,i,r);return r&&r(N),N}};return y}function Md(n){if(rd(n))return n=Fs(n),n.children=null,n}function Eu(n){if(!rd(n))return id(n.type)&&n.children?e_(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&lt(t.default))return t.default()}}function Nl(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Nl(id(t.type)&&Eu(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function n_(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Ke?(o.patchFlag&128&&r++,i=i.concat(n_(o.children,e,a))):(e||o.type!==Qn)&&i.push(a!=null?Fs(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function i_(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function c0(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Tu=new WeakMap;function _l(n,e,t,i,r=!1){if(et(n)){n.forEach((_,p)=>_l(_,e&&(et(e)?e[p]:e),t,i,r));return}if(xl(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&_l(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?ld(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Vt?a.refs={}:a.refs,d=a.setupState,f=Tt(d),h=d===Vt?bg:_=>c0(u,_)?!1:Rt(f,_),g=(_,p)=>!(p&&c0(u,p));if(c!=null&&c!==l){if(u0(e),Kt(c))u[c]=null,h(c)&&(d[c]=null);else if(Hn(c)){const _=e;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(lt(l))rc(l,a,12,[o,u]);else{const _=Kt(l),p=Hn(l);if(_||p){const m=()=>{if(n.f){const b=_?h(l)?d[l]:u[l]:g()||!n.k?l.value:u[n.k];if(r)et(b)&&sp(b,s);else if(et(b))b.includes(s)||b.push(s);else if(_)u[l]=[s],h(l)&&(d[l]=u[l]);else{const A=[s];g(l,n.k)&&(l.value=A),n.k&&(u[n.k]=A)}}else _?(u[l]=o,h(l)&&(d[l]=o)):p&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const b=()=>{m(),Tu.delete(n)};b.id=-1,Tu.set(n,b),si(b,t)}else u0(n),m()}}}function u0(n){const e=Tu.get(n);e&&(e.flags|=8,Tu.delete(n))}ed().requestIdleCallback;ed().cancelIdleCallback;const xl=n=>!!n.type.__asyncLoader,rd=n=>n.type.__isKeepAlive;function zy(n,e){r_(n,"a",e)}function Vy(n,e){r_(n,"da",e)}function r_(n,e,t=ei){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(sd(e,i,t),t){let r=t.parent;for(;r&&r.parent;)rd(r.parent.vnode)&&Hy(i,e,t,r),r=r.parent}}function Hy(n,e,t,i){const r=sd(e,n,i,!0);ii(()=>{sp(i[e],r)},t)}function sd(n,e,t=ei,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{ns();const a=sc(t),l=$i(e,t,n,o);return a(),is(),l});return i?r.unshift(s):r.push(s),s}}const ds=n=>(e,t=ei)=>{(!Bl||n==="sp")&&sd(n,(...i)=>e(...i),t)},Gy=ds("bm"),Wn=ds("m"),Wy=ds("bu"),Xy=ds("u"),s_=ds("bum"),ii=ds("um"),$y=ds("sp"),jy=ds("rtg"),Yy=ds("rtc");function qy(n,e=ei){sd("ec",n,e)}const Ky=Symbol.for("v-ndc");function it(n,e,t,i){let r;const s=t,o=et(n);if(o||Kt(n)){const a=o&&bo(n);let l=!1,c=!1;a&&(l=!Gi(n),c=rs(n),n=td(n)),r=new Array(n.length);for(let u=0,d=n.length;u<d;u++)r[u]=e(l?c?Ta(ir(n[u])):ir(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(Dt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const Ff=n=>n?A_(n)?ld(n):Ff(n.parent):null,vl=Sn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ff(n.parent),$root:n=>Ff(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>a_(n),$forceUpdate:n=>n.f||(n.f=()=>{pp(n.update)}),$nextTick:n=>n.n||(n.n=ss.bind(n.proxy)),$watch:n=>Fy.bind(n)}),wd=(n,e)=>n!==Vt&&!n.__isScriptSetup&&Rt(n,e),Zy={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(wd(i,e))return o[e]=1,i[e];if(r!==Vt&&Rt(r,e))return o[e]=2,r[e];if(Rt(s,e))return o[e]=3,s[e];if(t!==Vt&&Rt(t,e))return o[e]=4,t[e];Nf&&(o[e]=0)}}const c=vl[e];let u,d;if(c)return e==="$attrs"&&On(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Vt&&Rt(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,Rt(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return wd(r,e)?(r[e]=t,!0):i!==Vt&&Rt(i,e)?(i[e]=t,!0):Rt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==Vt&&a[0]!=="$"&&Rt(n,a)||wd(e,a)||Rt(s,a)||Rt(i,a)||Rt(vl,a)||Rt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Rt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function d0(n){return et(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Nf=!0;function Jy(n){const e=a_(n),t=n.proxy,i=n.ctx;Nf=!1,e.beforeCreate&&f0(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:g,activated:_,deactivated:p,beforeDestroy:m,beforeUnmount:b,destroyed:A,unmounted:x,render:M,renderTracked:R,renderTriggered:C,errorCaptured:y,serverPrefetch:T,expose:N,inheritAttrs:F,components:I,directives:G,filters:$}=e;if(c&&Qy(c,i,null),o)for(const k in o){const j=o[k];lt(j)&&(i[k]=j.bind(t))}if(r){const k=r.call(t,t);Dt(k)&&(n.data=da(k))}if(Nf=!0,s)for(const k in s){const j=s[k],X=lt(j)?j.bind(t,t):lt(j.get)?j.get.bind(t,t):Sr,L=!lt(j)&&lt(j.set)?j.set.bind(t):Sr,oe=hn({get:X,set:L});Object.defineProperty(i,k,{enumerable:!0,configurable:!0,get:()=>oe.value,set:ue=>oe.value=ue})}if(a)for(const k in a)o_(a[k],i,t,k);if(l){const k=lt(l)?l.call(t):l;Reflect.ownKeys(k).forEach(j=>{Ly(j,k[j])})}u&&f0(u,n,"c");function z(k,j){et(j)?j.forEach(X=>k(X.bind(t))):j&&k(j.bind(t))}if(z(Gy,d),z(Wn,f),z(Wy,h),z(Xy,g),z(zy,_),z(Vy,p),z(qy,y),z(Yy,R),z(jy,C),z(s_,b),z(ii,x),z($y,T),et(N))if(N.length){const k=n.exposed||(n.exposed={});N.forEach(j=>{Object.defineProperty(k,j,{get:()=>t[j],set:X=>t[j]=X,enumerable:!0})})}else n.exposed||(n.exposed={});M&&n.render===Sr&&(n.render=M),F!=null&&(n.inheritAttrs=F),I&&(n.components=I),G&&(n.directives=G),T&&i_(n)}function Qy(n,e,t=Sr){et(n)&&(n=Of(n));for(const i in n){const r=n[i];let s;Dt(r)?"default"in r?s=iu(r.from||i,r.default,!0):s=iu(r.from||i):s=iu(r),Hn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function f0(n,e,t){$i(et(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function o_(n,e,t,i){let r=i.includes(".")?Zg(t,i):()=>t[i];if(Kt(n)){const s=e[n];lt(s)&&Wi(r,s)}else if(lt(n))Wi(r,n.bind(t));else if(Dt(n))if(et(n))n.forEach(s=>o_(s,e,t,i));else{const s=lt(n.handler)?n.handler.bind(t):e[n.handler];lt(s)&&Wi(r,s,n)}}function a_(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Au(l,c,o,!0)),Au(l,e,o)),Dt(e)&&s.set(e,l),l}function Au(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Au(n,s,t,!0),r&&r.forEach(o=>Au(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=e1[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const e1={data:h0,props:p0,emits:p0,methods:il,computed:il,beforeCreate:$n,created:$n,beforeMount:$n,mounted:$n,beforeUpdate:$n,updated:$n,beforeDestroy:$n,beforeUnmount:$n,destroyed:$n,unmounted:$n,activated:$n,deactivated:$n,errorCaptured:$n,serverPrefetch:$n,components:il,directives:il,watch:n1,provide:h0,inject:t1};function h0(n,e){return e?n?function(){return Sn(lt(n)?n.call(this,this):n,lt(e)?e.call(this,this):e)}:e:n}function t1(n,e){return il(Of(n),Of(e))}function Of(n){if(et(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function $n(n,e){return n?[...new Set([].concat(n,e))]:e}function il(n,e){return n?Sn(Object.create(null),n,e):e}function p0(n,e){return n?et(n)&&et(e)?[...new Set([...n,...e])]:Sn(Object.create(null),d0(n),d0(e??{})):e}function n1(n,e){if(!n)return e;if(!e)return n;const t=Sn(Object.create(null),n);for(const i in e)t[i]=$n(n[i],e[i]);return t}function l_(){return{app:null,config:{isNativeTag:bg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let i1=0;function r1(n,e){return function(i,r=null){lt(i)||(i=Sn({},i)),r!=null&&!Dt(r)&&(r=null);const s=l_(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:i1++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:F1,get config(){return s.config},set config(u){},use(u,...d){return o.has(u)||(u&&lt(u.install)?(o.add(u),u.install(c,...d)):lt(u)&&(o.add(u),u(c,...d))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,d){return d?(s.components[u]=d,c):s.components[u]},directive(u,d){return d?(s.directives[u]=d,c):s.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||Pt(i,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),n(h,u,f),l=!0,c._container=u,u.__vue_app__=c,ld(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&($i(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return s.provides[u]=d,c},runWithContext(u){const d=ha;ha=c;try{return u()}finally{ha=d}}};return c}}let ha=null;const s1=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${tr(e)}Modifiers`]||n[`${Hs(e)}Modifiers`];function o1(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Vt;let r=t;const s=e.startsWith("update:"),o=s&&s1(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Kt(u)?u.trim():u)),o.number&&(r=t.map(Qu)));let a,l=i[a=xd(e)]||i[a=xd(tr(e))];!l&&s&&(l=i[a=xd(Hs(e))]),l&&$i(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,$i(c,n,6,r)}}const a1=new WeakMap;function c_(n,e,t=!1){const i=t?a1:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!lt(n)){const l=c=>{const u=c_(c,e,!0);u&&(a=!0,Sn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(Dt(n)&&i.set(n,null),null):(et(s)?s.forEach(l=>o[l]=null):Sn(o,s),Dt(n)&&i.set(n,o),o)}function od(n,e){return!n||!qu(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Rt(n,e[0].toLowerCase()+e.slice(1))||Rt(n,Hs(e))||Rt(n,e))}function m0(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:g,inheritAttrs:_}=n,p=Mu(n);let m,b;try{if(t.shapeFlag&4){const x=r||i,M=x;m=hr(c.call(M,x,u,d,h,f,g)),b=a}else{const x=e;m=hr(x.length>1?x(d,{attrs:a,slots:o,emit:l}):x(d,null)),b=e.props?a:l1(a)}}catch(x){So.length=0,nd(x,n,1),m=Pt(Qn)}let A=m;if(b&&_!==!1){const x=Object.keys(b),{shapeFlag:M}=A;x.length&&M&7&&(s&&x.some(Ku)&&(b=c1(b,s)),A=Fs(A,b,!1,!0))}if(t.dirs&&(A=Fs(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition){const x=id(A.type)&&Eu(A)||A;Nl(x,t.transition)}return m=A,Mu(p),m}const l1=n=>{let e;for(const t in n)(t==="class"||t==="style"||qu(t))&&((e||(e={}))[t]=n[t]);return e},c1=(n,e)=>{const t={};for(const i in n)(!Ku(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function u1(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?g0(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(u_(o,i,f)&&!od(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?g0(i,o,c):!0:!!o;return!1}function g0(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(u_(e,n,s)&&!od(t,s))return!0}return!1}function u_(n,e,t){const i=n[t],r=e[t];return t==="style"&&Dt(i)&&Dt(r)?!ic(i,r):i!==r}function d1({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const d_={},f_=()=>Object.create(d_),h_=n=>Object.getPrototypeOf(n)===d_;function f1(n,e,t,i=!1){const r={},s=f_();n.propsDefaults=Object.create(null),p_(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:yy(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function h1(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Tt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(od(n.emitsOptions,f))continue;const h=e[f];if(l)if(Rt(s,f))h!==s[f]&&(s[f]=h,c=!0);else{const g=tr(f);r[g]=kf(l,a,g,h,n,!1)}else h!==s[f]&&(s[f]=h,c=!0)}}}else{p_(n,e,r,s)&&(c=!0);let u;for(const d in a)(!e||!Rt(e,d)&&((u=Hs(d))===d||!Rt(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(r[d]=kf(l,a,d,void 0,n,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!Rt(e,d))&&(delete s[d],c=!0)}c&&Wr(n.attrs,"set","")}function p_(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(pl(l))continue;const c=e[l];let u;r&&Rt(r,u=tr(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:od(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Tt(t),c=a||Vt;for(let u=0;u<s.length;u++){const d=s[u];t[d]=kf(r,l,d,c[d],n,!Rt(c,d))}}return o}function kf(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Rt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&lt(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=sc(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Hs(t))&&(i=!0))}return i}const p1=new WeakMap;function m_(n,e,t=!1){const i=t?p1:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!lt(n)){const u=d=>{l=!0;const[f,h]=m_(d,e,!0);Sn(o,f),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Dt(n)&&i.set(n,ca),ca;if(et(s))for(let u=0;u<s.length;u++){const d=tr(s[u]);_0(d)&&(o[d]=Vt)}else if(s)for(const u in s){const d=tr(u);if(_0(d)){const f=s[u],h=o[d]=et(f)||lt(f)?{type:f}:Sn({},f),g=h.type;let _=!1,p=!0;if(et(g))for(let m=0;m<g.length;++m){const b=g[m],A=lt(b)&&b.name;if(A==="Boolean"){_=!0;break}else A==="String"&&(p=!1)}else _=lt(g)&&g.name==="Boolean";h[0]=_,h[1]=p,(_||Rt(h,"default"))&&a.push(d)}}const c=[o,a];return Dt(n)&&i.set(n,c),c}function _0(n){return n[0]!=="$"&&!pl(n)}const mp=n=>n==="_"||n==="_ctx"||n==="$stable",gp=n=>et(n)?n.map(hr):[hr(n)],m1=(n,e,t)=>{if(e._n)return e;const i=wu((...r)=>gp(e(...r)),t);return i._c=!1,i},g_=(n,e,t)=>{const i=n._ctx;for(const r in n){if(mp(r))continue;const s=n[r];if(lt(s))e[r]=m1(r,s,i);else if(s!=null){const o=gp(s);e[r]=()=>o}}},__=(n,e)=>{const t=gp(e);n.slots.default=()=>t},x_=(n,e,t)=>{for(const i in e)(t||!mp(i))&&(n[i]=e[i])},g1=(n,e,t)=>{const i=n.slots=f_();if(n.vnode.shapeFlag&32){const r=e._;r?(x_(i,e,t),t&&Tg(i,"_",r,!0)):g_(e,i)}else e&&__(n,e)},_1=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Vt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:x_(r,e,t):(s=!e.$stable,g_(e,r)),o=e}else e&&(__(n,e),o={default:1});if(s)for(const a in r)!mp(a)&&o[a]==null&&delete r[a]},si=S1;function x1(n){return v1(n)}function v1(n,e){const t=ed();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Sr,insertStaticContent:g}=n,_=(w,E,W,ie=null,q=null,O=null,U=void 0,me=null,ce=!!E.dynamicChildren)=>{if(w===E)return;w&&!lo(w,E)&&(ie=le(w),ue(w,q,O,!0),w=null),E.patchFlag===-2&&(ce=!1,E.dynamicChildren=null);const{type:J,ref:de,shapeFlag:P}=E;switch(J){case ad:p(w,E,W,ie);break;case Qn:m(w,E,W,ie);break;case ru:w==null&&b(E,W,ie,U);break;case Ke:I(w,E,W,ie,q,O,U,me,ce);break;default:P&1?M(w,E,W,ie,q,O,U,me,ce):P&6?G(w,E,W,ie,q,O,U,me,ce):(P&64||P&128)&&J.process(w,E,W,ie,q,O,U,me,ce,Ee)}de!=null&&q?_l(de,w&&w.ref,O,E||w,!E):de==null&&w&&w.ref!=null&&_l(w.ref,null,O,w,!0)},p=(w,E,W,ie)=>{if(w==null)i(E.el=a(E.children),W,ie);else{const q=E.el=w.el;E.children!==w.children&&c(q,E.children)}},m=(w,E,W,ie)=>{w==null?i(E.el=l(E.children||""),W,ie):E.el=w.el},b=(w,E,W,ie)=>{[w.el,w.anchor]=g(w.children,E,W,ie,w.el,w.anchor)},A=({el:w,anchor:E},W,ie)=>{let q;for(;w&&w!==E;)q=f(w),i(w,W,ie),w=q;i(E,W,ie)},x=({el:w,anchor:E})=>{let W;for(;w&&w!==E;)W=f(w),r(w),w=W;r(E)},M=(w,E,W,ie,q,O,U,me,ce)=>{if(E.type==="svg"?U="svg":E.type==="math"&&(U="mathml"),w==null)R(E,W,ie,q,O,U,me,ce);else{const J=w.el&&w.el._isVueCE?w.el:null;try{J&&J._beginPatch(),T(w,E,q,O,U,me,ce)}finally{J&&J._endPatch()}}},R=(w,E,W,ie,q,O,U,me)=>{let ce,J;const{props:de,shapeFlag:P,transition:S,dirs:B}=w;if(ce=w.el=o(w.type,O,de&&de.is,de),P&8?u(ce,w.children):P&16&&y(w.children,ce,null,ie,q,Ed(w,O),U,me),B&&Xs(w,null,ie,"created"),C(ce,w,w.scopeId,U,ie),de){for(const te in de)te!=="value"&&!pl(te)&&s(ce,te,null,de[te],O,ie);"value"in de&&s(ce,"value",null,de.value,O),(J=de.onVnodeBeforeMount)&&or(J,ie,w)}B&&Xs(w,null,ie,"beforeMount");const Z=y1(q,S);Z&&S.beforeEnter(ce),i(ce,E,W),((J=de&&de.onVnodeMounted)||Z||B)&&si(()=>{try{J&&or(J,ie,w),Z&&S.enter(ce),B&&Xs(w,null,ie,"mounted")}finally{}},q)},C=(w,E,W,ie,q)=>{if(W&&h(w,W),ie)for(let O=0;O<ie.length;O++)h(w,ie[O]);if(q){let O=q.subTree;if(E===O||S_(O.type)&&(O.ssContent===E||O.ssFallback===E)){const U=q.vnode;C(w,U,U.scopeId,U.slotScopeIds,q.parent)}}},y=(w,E,W,ie,q,O,U,me,ce=0)=>{for(let J=ce;J<w.length;J++){const de=w[J]=me?Hr(w[J]):hr(w[J]);_(null,de,E,W,ie,q,O,U,me)}},T=(w,E,W,ie,q,O,U)=>{const me=E.el=w.el;let{patchFlag:ce,dynamicChildren:J,dirs:de}=E;ce|=w.patchFlag&16;const P=w.props||Vt,S=E.props||Vt;let B;if(W&&$s(W,!1),(B=S.onVnodeBeforeUpdate)&&or(B,W,E,w),de&&Xs(E,w,W,"beforeUpdate"),W&&$s(W,!0),J&&(!w.dynamicChildren||w.dynamicChildren.length!==J.length)&&(ce=0,U=!1,J=null),(P.innerHTML&&S.innerHTML==null||P.textContent&&S.textContent==null)&&u(me,""),J?N(w.dynamicChildren,J,me,W,ie,Ed(E,q),O):U||j(w,E,me,null,W,ie,Ed(E,q),O,!1),ce>0){if(ce&16)F(me,P,S,W,q);else if(ce&2&&P.class!==S.class&&s(me,"class",null,S.class,q),ce&4&&s(me,"style",P.style,S.style,q),ce&8){const Z=E.dynamicProps;for(let te=0;te<Z.length;te++){const K=Z[te],Me=P[K],_e=S[K];(_e!==Me||K==="value")&&s(me,K,Me,_e,q,W)}}ce&1&&w.children!==E.children&&u(me,E.children)}else!U&&J==null&&F(me,P,S,W,q);((B=S.onVnodeUpdated)||de)&&si(()=>{B&&or(B,W,E,w),de&&Xs(E,w,W,"updated")},ie)},N=(w,E,W,ie,q,O,U)=>{for(let me=0;me<E.length;me++){const ce=w[me],J=E[me],de=ce.el&&(ce.type===Ke||!lo(ce,J)||ce.shapeFlag&198)?d(ce.el):W;_(ce,J,de,null,ie,q,O,U,!0)}},F=(w,E,W,ie,q)=>{if(E!==W){if(E!==Vt)for(const O in E)!pl(O)&&!(O in W)&&s(w,O,E[O],null,q,ie);for(const O in W){if(pl(O))continue;const U=W[O],me=E[O];U!==me&&O!=="value"&&s(w,O,me,U,q,ie)}"value"in W&&s(w,"value",E.value,W.value,q)}},I=(w,E,W,ie,q,O,U,me,ce)=>{const J=E.el=w?w.el:a(""),de=E.anchor=w?w.anchor:a("");let{patchFlag:P,dynamicChildren:S,slotScopeIds:B}=E;B&&(me=me?me.concat(B):B),w==null?(i(J,W,ie),i(de,W,ie),y(E.children||[],W,de,q,O,U,me,ce)):P>0&&P&64&&S&&w.dynamicChildren&&w.dynamicChildren.length===S.length?(N(w.dynamicChildren,S,W,q,O,U,me),(E.key!=null||q&&E===q.subTree)&&v_(w,E,!0)):j(w,E,W,de,q,O,U,me,ce)},G=(w,E,W,ie,q,O,U,me,ce)=>{E.slotScopeIds=me,w==null?E.shapeFlag&512?q.ctx.activate(E,W,ie,U,ce):$(E,W,ie,q,O,U,ce):V(w,E,ce)},$=(w,E,W,ie,q,O,U)=>{const me=w.component=C1(w,ie,q);if(rd(w)&&(me.ctx.renderer=Ee),R1(me,!1,U),me.asyncDep){if(q&&q.registerDep(me,z,U),!w.el){const ce=me.subTree=Pt(Qn);m(null,ce,E,W),w.placeholder=ce.el}}else z(me,w,E,W,q,O,U)},V=(w,E,W)=>{const ie=E.component=w.component;if(u1(w,E,W))if(ie.asyncDep&&!ie.asyncResolved){k(ie,E,W);return}else ie.next=E,ie.update();else E.el=w.el,ie.vnode=E},z=(w,E,W,ie,q,O,U)=>{const me=()=>{if(w.isMounted){let{next:P,bu:S,u:B,parent:Z,vnode:te}=w;{const Ae=y_(w);if(Ae){P&&(P.el=te.el,k(w,P,U)),Ae.asyncDep.then(()=>{si(()=>{w.isUnmounted||J()},q)});return}}let K=P,Me;$s(w,!1),P?(P.el=te.el,k(w,P,U)):P=te,S&&nu(S),(Me=P.props&&P.props.onVnodeBeforeUpdate)&&or(Me,Z,P,te),$s(w,!0);const _e=m0(w),He=w.subTree;w.subTree=_e,_(He,_e,d(He.el),le(He),w,q,O),P.el=_e.el,K===null&&d1(w,_e.el),B&&si(B,q),(Me=P.props&&P.props.onVnodeUpdated)&&si(()=>or(Me,Z,P,te),q)}else{let P;const{el:S,props:B}=E,{bm:Z,m:te,parent:K,root:Me,type:_e}=w,He=xl(E);$s(w,!1),Z&&nu(Z),!He&&(P=B&&B.onVnodeBeforeMount)&&or(P,K,E),$s(w,!0);{Me.ce&&Me.ce._hasShadowRoot()&&Me.ce._injectChildStyle(_e,w.parent?w.parent.type:void 0);const Ae=w.subTree=m0(w);_(null,Ae,W,ie,w,q,O),E.el=Ae.el}if(te&&si(te,q),!He&&(P=B&&B.onVnodeMounted)){const Ae=E;si(()=>or(P,K,Ae),q)}(E.shapeFlag&256||K&&xl(K.vnode)&&K.vnode.shapeFlag&256)&&w.a&&si(w.a,q),w.isMounted=!0,E=W=ie=null}};w.scope.on();const ce=w.effect=new Pg(me);w.scope.off();const J=w.update=ce.run.bind(ce),de=w.job=ce.runIfDirty.bind(ce);de.i=w,de.id=w.uid,ce.scheduler=()=>pp(de),$s(w,!0),J()},k=(w,E,W)=>{E.component=w;const ie=w.vnode.props;w.vnode=E,w.next=null,h1(w,E.props,ie,W),_1(w,E.children,W),ns(),l0(w),is()},j=(w,E,W,ie,q,O,U,me,ce=!1)=>{const J=w&&w.children,de=w?w.shapeFlag:0,P=E.children,{patchFlag:S,shapeFlag:B}=E;if(S>0){if(S&128){L(J,P,W,ie,q,O,U,me,ce);return}else if(S&256){X(J,P,W,ie,q,O,U,me,ce);return}}B&8?(de&16&&ee(J,q,O),P!==J&&u(W,P)):de&16?B&16?L(J,P,W,ie,q,O,U,me,ce):ee(J,q,O,!0):(de&8&&u(W,""),B&16&&y(P,W,ie,q,O,U,me,ce))},X=(w,E,W,ie,q,O,U,me,ce)=>{w=w||ca,E=E||ca;const J=w.length,de=E.length,P=Math.min(J,de);let S;for(S=0;S<P;S++){const B=E[S]=ce?Hr(E[S]):hr(E[S]);_(w[S],B,W,null,q,O,U,me,ce)}J>de?ee(w,q,O,!0,!1,P):y(E,W,ie,q,O,U,me,ce,P)},L=(w,E,W,ie,q,O,U,me,ce)=>{let J=0;const de=E.length;let P=w.length-1,S=de-1;for(;J<=P&&J<=S;){const B=w[J],Z=E[J]=ce?Hr(E[J]):hr(E[J]);if(lo(B,Z))_(B,Z,W,null,q,O,U,me,ce);else break;J++}for(;J<=P&&J<=S;){const B=w[P],Z=E[S]=ce?Hr(E[S]):hr(E[S]);if(lo(B,Z))_(B,Z,W,null,q,O,U,me,ce);else break;P--,S--}if(J>P){if(J<=S){const B=S+1,Z=B<de?E[B].el:ie;for(;J<=S;)_(null,E[J]=ce?Hr(E[J]):hr(E[J]),W,Z,q,O,U,me,ce),J++}}else if(J>S)for(;J<=P;)ue(w[J],q,O,!0),J++;else{const B=J,Z=J,te=new Map;for(J=Z;J<=S;J++){const Te=E[J]=ce?Hr(E[J]):hr(E[J]);Te.key!=null&&te.set(Te.key,J)}let K,Me=0;const _e=S-Z+1;let He=!1,Ae=0;const xe=new Array(_e);for(J=0;J<_e;J++)xe[J]=0;for(J=B;J<=P;J++){const Te=w[J];if(Me>=_e){ue(Te,q,O,!0);continue}let De;if(Te.key!=null)De=te.get(Te.key);else for(K=Z;K<=S;K++)if(xe[K-Z]===0&&lo(Te,E[K])){De=K;break}De===void 0?ue(Te,q,O,!0):(xe[De-Z]=J+1,De>=Ae?Ae=De:He=!0,_(Te,E[De],W,null,q,O,U,me,ce),Me++)}const ye=He?b1(xe):ca;for(K=ye.length-1,J=_e-1;J>=0;J--){const Te=Z+J,De=E[Te],Ce=E[Te+1],Qe=Te+1<de?Ce.el||b_(Ce):ie;xe[J]===0?_(null,De,W,Qe,q,O,U,me,ce):He&&(K<0||J!==ye[K]?oe(De,W,Qe,2):K--)}}},oe=(w,E,W,ie,q=null)=>{const{el:O,type:U,transition:me,children:ce,shapeFlag:J}=w;if(J&6){oe(w.component.subTree,E,W,ie);return}if(J&128){w.suspense.move(E,W,ie);return}if(J&64){U.move(w,E,W,Ee);return}if(U===Ke){i(O,E,W);for(let P=0;P<ce.length;P++)oe(ce[P],E,W,ie);i(w.anchor,E,W);return}if(U===ru){A(w,E,W);return}if(ie!==2&&J&1&&me)if(ie===0)me.persisted&&!O[Fi]?i(O,E,W):(me.beforeEnter(O),i(O,E,W),si(()=>me.enter(O),q));else{const{leave:P,delayLeave:S,afterLeave:B}=me,Z=()=>{w.ctx.isUnmounted?r(O):i(O,E,W)},te=()=>{const K=O._isLeaving||!!O[Fi];O._isLeaving&&O[Fi](!0),me.persisted&&!K?Z():P(O,()=>{Z(),B&&B()})};S?S(O,Z,te):te()}else i(O,E,W)},ue=(w,E,W,ie=!1,q=!1)=>{const{type:O,props:U,ref:me,children:ce,dynamicChildren:J,shapeFlag:de,patchFlag:P,dirs:S,cacheIndex:B,memo:Z}=w;if(P===-2&&(q=!1),me!=null&&(ns(),_l(me,null,W,w,!0),is()),B!=null&&(E.renderCache[B]=void 0),de&256){E.ctx.deactivate(w);return}const te=de&1&&S,K=!xl(w);let Me;if(K&&(Me=U&&U.onVnodeBeforeUnmount)&&or(Me,E,w),de&6)Ve(w.component,W,ie);else{if(de&128){w.suspense.unmount(W,ie);return}te&&Xs(w,null,E,"beforeUnmount"),de&64?w.type.remove(w,E,W,Ee,ie):J&&!J.hasOnce&&(O!==Ke||P>0&&P&64)?ee(J,E,W,!1,!0):(O===Ke&&P&384||!q&&de&16)&&ee(ce,E,W),ie&&ke(w)}const _e=Z!=null&&B==null;(K&&(Me=U&&U.onVnodeUnmounted)||te||_e)&&si(()=>{Me&&or(Me,E,w),te&&Xs(w,null,E,"unmounted"),_e&&(w.el=null)},W)},ke=w=>{const{type:E,el:W,anchor:ie,transition:q}=w;if(E===Ke){Fe(W,ie);return}if(E===ru){x(w);return}const O=()=>{r(W),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(w.shapeFlag&1&&q&&!q.persisted){const{leave:U,delayLeave:me}=q,ce=()=>U(W,O);me?me(w.el,O,ce):ce()}else O()},Fe=(w,E)=>{let W;for(;w!==E;)W=f(w),r(w),w=W;r(E)},Ve=(w,E,W)=>{const{bum:ie,scope:q,job:O,subTree:U,um:me,m:ce,a:J}=w;x0(ce),x0(J),ie&&nu(ie),q.stop(),O&&(O.flags|=8,ue(U,w,E,W)),me&&si(me,E),si(()=>{w.isUnmounted=!0},E)},ee=(w,E,W,ie=!1,q=!1,O=0)=>{for(let U=O;U<w.length;U++)ue(w[U],E,W,ie,q)},le=w=>{if(w.shapeFlag&6)return le(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const E=f(w.anchor||w.el),W=E&&E[Ny];return W?f(W):E};let ge=!1;const Le=(w,E,W)=>{let ie;w==null?E._vnode&&(ue(E._vnode,null,null,!0),ie=E._vnode.component):_(E._vnode||null,w,E,null,null,null,W),E._vnode=w,ge||(ge=!0,l0(ie),jg(),ge=!1)},Ee={p:_,um:ue,m:oe,r:ke,mt:$,mc:y,pc:j,pbc:N,n:le,o:n};return{render:Le,hydrate:void 0,createApp:r1(Le)}}function Ed({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function $s({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function y1(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function v_(n,e,t=!1){const i=n.children,r=e.children;if(et(i)&&et(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Hr(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&v_(o,a)),a.type===ad&&(a.patchFlag===-1&&(a=r[s]=Hr(a)),a.el=o.el),a.type===Qn&&!a.el&&(a.el=o.el)}}function b1(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function y_(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:y_(e)}function x0(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function b_(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?b_(e.subTree):null}const S_=n=>n.__isSuspense;function S1(n,e){e&&e.pendingBranch?et(n)?e.effects.push(...n):e.effects.push(n):Dy(n)}const Ke=Symbol.for("v-fgt"),ad=Symbol.for("v-txt"),Qn=Symbol.for("v-cmt"),ru=Symbol.for("v-stc"),So=[];let wi=null;function he(n=!1){So.push(wi=n?null:[])}function M_(){So.pop(),wi=So[So.length-1]||null}let Ol=1;function Cu(n,e=!1){Ol+=n,n<0&&wi&&e&&(wi.hasOnce=!0)}function w_(n){return n.dynamicChildren=Ol>0?wi||ca:null,M_(),Ol>0&&wi&&wi.push(n),n}function pe(n,e,t,i,r,s){return w_(v(n,e,t,i,r,s,!0))}function yl(n,e,t,i,r){return w_(Pt(n,e,t,i,r,!0))}function Ru(n){return n?n.__v_isVNode===!0:!1}function lo(n,e){return n.type===e.type&&n.key===e.key}const E_=({key:n})=>n??null,su=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Kt(n)||Hn(n)||lt(n)?{i:zi,r:n,k:e,f:!!t}:n:null);function v(n,e=null,t=null,i=0,r=null,s=n===Ke?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&E_(e),ref:e&&su(e),scopeId:qg,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:zi};return a?(Pu(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Kt(t)?8:16),Ol>0&&!o&&wi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&wi.push(l),l}const Pt=M1;function M1(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Ky)&&(n=Qn),Ru(n)){const a=Fs(n,e,!0);return t&&Pu(a,t),Ol>0&&!s&&wi&&(a.shapeFlag&6?wi[wi.indexOf(n)]=a:wi.push(a)),a.patchFlag=-2,a}if(I1(n)&&(n=n.__vccOpts),e){e=w1(e);let{class:a,style:l}=e;a&&!Kt(a)&&(e.class=at(a)),Dt(l)&&(hp(l)&&!et(l)&&(l=Sn({},l)),e.style=Tn(l))}const o=Kt(n)?1:S_(n)?128:id(n)?64:Dt(n)?4:lt(n)?2:0;return v(n,e,t,i,r,o,s,!0)}function w1(n){return n?hp(n)||h_(n)?Sn({},n):n:null}function Fs(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?E1(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&E_(c),ref:e&&e.ref?t&&s?et(s)?s.concat(su(e)):[s,su(e)]:su(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ke?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Fs(n.ssContent),ssFallback:n.ssFallback&&Fs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Nl(u,l.clone(u)),u}function Ns(n=" ",e=0){return Pt(ad,null,n,e)}function co(n,e){const t=Pt(ru,null,n);return t.staticCount=e,t}function ai(n="",e=!1){return e?(he(),yl(Qn,null,n)):Pt(Qn,null,n)}function hr(n){return n==null||typeof n=="boolean"?Pt(Qn):et(n)?Pt(Ke,null,n.slice()):Ru(n)?Hr(n):Pt(ad,null,String(n))}function Hr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Fs(n)}function Pu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(et(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Pu(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!h_(e)?e._ctx=zi:r===3&&zi&&(zi.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(lt(e)){if(i&65){Pu(n,{default:e});return}e={default:e,_ctx:zi},t=32}else e=String(e),i&64?(t=16,e=[Ns(e)]):t=8;n.children=e,n.shapeFlag|=t}function E1(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=at([e.class,i.class]));else if(r==="style")e.style=Tn([e.style,i.style]);else if(qu(r)){const s=e[r],o=i[r];o&&s!==o&&!(et(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!Ku(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function or(n,e,t,i=null){$i(n,e,7,[t,i])}const T1=l_();let A1=0;function C1(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||T1,s={uid:A1++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ty(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:m_(i,r),emitsOptions:c_(i,r),emit:null,emitted:null,propsDefaults:Vt,inheritAttrs:i.inheritAttrs,ctx:Vt,data:Vt,props:Vt,attrs:Vt,slots:Vt,refs:Vt,setupState:Vt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=o1.bind(null,s),n.ce&&n.ce(s),s}let ei=null;const T_=()=>ei||zi;let Du,kl;{const n=ed(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Du=e("__VUE_INSTANCE_SETTERS__",t=>ei=t),kl=e("__VUE_SSR_SETTERS__",t=>Bl=t)}const sc=n=>{const e=ei;return Du(n),n.scope.on(),()=>{n.scope.off(),Du(e)}},v0=()=>{ei&&ei.scope.off(),Du(null)};function A_(n){return n.vnode.shapeFlag&4}let Bl=!1;function R1(n,e=!1,t=!1){e&&kl(e);const{props:i,children:r}=n.vnode,s=A_(n);f1(n,i,s,e),g1(n,r,t||e);const o=s?P1(n,e):void 0;return e&&kl(!1),o}function P1(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Zy);const{setup:i}=t;if(i){ns();const r=n.setupContext=i.length>1?L1(n):null,s=sc(n),o=rc(i,n,0,[n.props,r]),a=Sg(o);if(is(),s(),(a||n.sp)&&!xl(n)&&i_(n),a){if(o.then(v0,v0),e)return o.then(l=>{kl(!0);try{y0(n,l,e)}finally{kl(!1)}}).catch(l=>{nd(l,n,0)});n.asyncDep=o}else y0(n,o)}else C_(n)}function y0(n,e,t){lt(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Dt(e)&&(n.setupState=Wg(e)),C_(n)}function C_(n,e,t){const i=n.type;n.render||(n.render=i.render||Sr);{const r=sc(n);ns();try{Jy(n)}finally{is(),r()}}}const D1={get(n,e){return On(n,"get",""),n[e]}};function L1(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,D1),slots:n.slots,emit:n.emit,expose:e}}function ld(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Wg(by(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in vl)return vl[t](n)},has(e,t){return t in e||t in vl}})):n.proxy}function I1(n){return lt(n)&&"__vccOpts"in n}const hn=(n,e)=>Ty(n,e,Bl);function U1(n,e,t){try{Cu(-1);const i=arguments.length;return i===2?Dt(e)&&!et(e)?Ru(e)?Pt(n,null,[e]):Pt(n,e):Pt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ru(t)&&(t=[t]),Pt(n,e,t))}finally{Cu(1)}}const F1="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bf;const b0=typeof window<"u"&&window.trustedTypes;if(b0)try{Bf=b0.createPolicy("vue",{createHTML:n=>n})}catch{}const R_=Bf?n=>Bf.createHTML(n):n=>n,N1="http://www.w3.org/2000/svg",O1="http://www.w3.org/1998/Math/MathML",zr=typeof document<"u"?document:null,S0=zr&&zr.createElement("template"),k1={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?zr.createElementNS(N1,n):e==="mathml"?zr.createElementNS(O1,n):t?zr.createElement(n,{is:t}):zr.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>zr.createTextNode(n),createComment:n=>zr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>zr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{S0.innerHTML=R_(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=S0.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ms="transition",Wa="animation",zl=Symbol("_vtc"),P_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},B1=Sn({},Jg,P_),z1=n=>(n.displayName="Transition",n.props=B1,n),zf=z1((n,{slots:e})=>U1(By,V1(n),e)),js=(n,e=[])=>{et(n)?n.forEach(t=>t(...e)):n&&n(...e)},M0=n=>n?et(n)?n.some(e=>e.length>1):n.length>1:!1;function V1(n){const e={};for(const I in n)I in P_||(e[I]=n[I]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=n,g=H1(r),_=g&&g[0],p=g&&g[1],{onBeforeEnter:m,onEnter:b,onEnterCancelled:A,onLeave:x,onLeaveCancelled:M,onBeforeAppear:R=m,onAppear:C=b,onAppearCancelled:y=A}=e,T=(I,G,$,V)=>{I._enterCancelled=V,Ys(I,G?u:a),Ys(I,G?c:o),$&&$()},N=(I,G)=>{I._isLeaving=!1,Ys(I,d),Ys(I,h),Ys(I,f),G&&G()},F=I=>(G,$)=>{const V=I?C:b,z=()=>T(G,I,$);js(V,[G,z]),w0(()=>{Ys(G,I?l:s),Ur(G,I?u:a),M0(V)||E0(G,i,_,z)})};return Sn(e,{onBeforeEnter(I){js(m,[I]),Ur(I,s),Ur(I,o)},onBeforeAppear(I){js(R,[I]),Ur(I,l),Ur(I,c)},onEnter:F(!1),onAppear:F(!0),onLeave(I,G){I._isLeaving=!0;const $=()=>N(I,G);Ur(I,d),I._enterCancelled?(Ur(I,f),C0(I)):(C0(I),Ur(I,f)),w0(()=>{I._isLeaving&&(Ys(I,d),Ur(I,h),M0(x)||E0(I,i,p,$))}),js(x,[I,$])},onEnterCancelled(I){T(I,!1,void 0,!0),js(A,[I])},onAppearCancelled(I){T(I,!0,void 0,!0),js(y,[I])},onLeaveCancelled(I){N(I),js(M,[I])}})}function H1(n){if(n==null)return null;if(Dt(n))return[Td(n.enter),Td(n.leave)];{const e=Td(n);return[e,e]}}function Td(n){return $v(n)}function Ur(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[zl]||(n[zl]=new Set)).add(e)}function Ys(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[zl];t&&(t.delete(e),t.size||(n[zl]=void 0))}function w0(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let G1=0;function E0(n,e,t,i){const r=n._endId=++G1,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=W1(n,e);if(!o)return i();const c=o+"end";let u=0;const d=()=>{n.removeEventListener(c,f),s()},f=h=>{h.target===n&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),n.addEventListener(c,f)}function W1(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(`${ms}Delay`),s=i(`${ms}Duration`),o=T0(r,s),a=i(`${Wa}Delay`),l=i(`${Wa}Duration`),c=T0(a,l);let u=null,d=0,f=0;e===ms?o>0&&(u=ms,d=o,f=s.length):e===Wa?c>0&&(u=Wa,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?ms:Wa:null,f=u?u===ms?s.length:l.length:0);const h=u===ms&&/\b(?:transform|all)(?:,|$)/.test(i(`${ms}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function T0(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>A0(t)+A0(n[i])))}function A0(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function C0(n){return(n?n.ownerDocument:document).body.offsetHeight}function X1(n,e,t){const i=n[zl];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const R0=Symbol("_vod"),$1=Symbol("_vsh"),j1=Symbol(""),Y1=/(?:^|;)\s*display\s*:/;function q1(n,e,t){const i=n.style,r=Kt(t);let s=!1;if(t&&!r){if(e)if(Kt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&rl(i,a,"")}else for(const o in e)t[o]==null&&rl(i,o,"");for(const o in t){o==="display"&&(s=!0);const a=t[o];a!=null?Z1(n,o,!Kt(e)&&e?e[o]:void 0,a)||rl(i,o,a):rl(i,o,"")}}else if(r){if(e!==t){const o=i[j1];o&&(t+=";"+o),i.cssText=t,s=Y1.test(t)}}else e&&n.removeAttribute("style");R0 in n&&(n[R0]=s?i.display:"",n[$1]&&(i.display="none"))}const P0=/\s*!important$/;function rl(n,e,t){if(et(t))t.forEach(i=>rl(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=K1(n,e);P0.test(t)?n.setProperty(Hs(i),t.replace(P0,""),"important"):n[i]=t}}const D0=["Webkit","Moz","ms"],Ad={};function K1(n,e){const t=Ad[e];if(t)return t;let i=tr(e);if(i!=="filter"&&i in n)return Ad[e]=i;i=Eg(i);for(let r=0;r<D0.length;r++){const s=D0[r]+i;if(s in n)return Ad[e]=s}return e}function Z1(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Kt(i)&&t===i}const L0="http://www.w3.org/1999/xlink";function I0(n,e,t,i,r,s=Jv(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(L0,e.slice(6,e.length)):n.setAttributeNS(L0,e,t):t==null||s&&!Ag(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Cr(t)?String(t):t)}function U0(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?R_(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Ag(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function uo(n,e,t,i){n.addEventListener(e,t,i)}function J1(n,e,t,i){n.removeEventListener(e,t,i)}const F0=Symbol("_vei");function Q1(n,e,t,i,r=null){const s=n[F0]||(n[F0]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=nb(e);if(i){const c=s[e]=sb(i,r);uo(n,a,c,l)}else o&&(J1(n,a,o,l),s[e]=void 0)}}const eb=/(Once|Passive|Capture)$/,tb=/^on:?(?:Once|Passive|Capture)$/;function nb(n){let e,t;for(;(t=n.match(eb))&&!tb.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Hs(n.slice(2)),e]}let Cd=0;const ib=Promise.resolve(),rb=()=>Cd||(ib.then(()=>Cd=0),Cd=Date.now());function sb(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(et(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&$i(c,e,5,a)}}else $i(r,e,5,[i])};return t.value=n,t.attached=rb(),t}const N0=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,ob=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?X1(n,i,o):e==="style"?q1(n,t,i):qu(e)?Ku(e)||Q1(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ab(n,e,i,o))?(U0(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&I0(n,e,i,o,s,e!=="value")):n._isVueCE&&(lb(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Kt(i)))?U0(n,tr(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),I0(n,e,i,o))};function ab(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&N0(e)&&lt(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return N0(e)&&Kt(t)?!1:e in n}function lb(n,e){const t=n._def.props;if(!t)return!1;const i=tr(e);return Array.isArray(t)?t.some(r=>tr(r)===i):Object.keys(t).some(r=>tr(r)===i)}const Lu=n=>{const e=n.props["onUpdate:modelValue"]||!1;return et(e)?t=>nu(e,t):e};function cb(n){n.target.composing=!0}function O0(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const po=Symbol("_assign"),gc=Symbol("_initialValue");function Rd(n,e,t){return e&&(n=n.trim()),t&&(n=Qu(n)),n}const Pd={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n.parentNode&&(n.type==="text"?n[gc]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[gc]=n.defaultValue.replace(/\r\n?/g,`
`))),n[po]=Lu(r);const s=i||r.props&&r.props.type==="number";uo(n,e?"change":"input",o=>{o.target.composing||n[po](Rd(n.value,t,s))}),(t||s)&&uo(n,"change",()=>{n.value=Rd(n.value,t,s)}),e||(uo(n,"compositionstart",cb),uo(n,"compositionend",O0),uo(n,"change",O0))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const r=e??"",s=n[gc];delete n[gc],s!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==s?n[po](Rd(n.value,t,i)):n.value=r},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[po]=Lu(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Qu(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},ub={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,uo(n,"change",()=>{const r=Array.prototype.filter.call(n.options,s=>s.selected).map(s=>t?Qu(Iu(s)):Iu(s));n[po](n.multiple?Zu(n._modelValue)?new Set(r):r:r[0]),n._assigning=!0,ss(()=>{n._assigning=!1})}),n[po]=Lu(i)},mounted(n,{value:e}){k0(n,e)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[po]=Lu(t)},updated(n,{value:e}){n._assigning||k0(n,e)}};function k0(n,e){const t=n.multiple,i=et(e);if(!(t&&!i&&!Zu(e))){for(let r=0,s=n.options.length;r<s;r++){const o=n.options[r],a=Iu(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=ey(e,a)>-1}else o.selected=e.has(a);else if(ic(Iu(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Iu(n){return"_value"in n?n._value:n.value}const db=["ctrl","shift","alt","meta"],fb={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>db.some(t=>n[`${t}Key`]&&!e.includes(t))},mo=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=fb[e[o]];if(a&&a(r,e))return}return n(r,...s)}))},hb={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},pb=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(r=>{if(!("key"in r))return;const s=Hs(r.key);if(e.some(o=>o===s||hb[o]===s))return n(r)}))},mb=Sn({patchProp:ob},k1);let B0;function gb(){return B0||(B0=x1(mb))}const _b=((...n)=>{const e=gb().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=vb(i);if(!r)return;const s=e._component;!lt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,xb(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function xb(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function vb(n){return Kt(n)?document.querySelector(n):n}const cd={emerald:{name:"Emerald",primary:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},accent:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#44403c",800:"#292524",900:"#1c1917"}},ocean:{name:"Ocean",primary:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},accent:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},secondary:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},dark:{700:"#334155",800:"#1e293b",900:"#0f172a"}},sunset:{name:"Sunset",primary:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},accent:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#44403c",800:"#292524",900:"#1c1917"}},royal:{name:"Royal",primary:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},accent:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},secondary:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},dark:{700:"#334155",800:"#1e293b",900:"#0f172a"}},forest:{name:"Forest",primary:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},accent:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#44403c",800:"#292524",900:"#1c1917"}}},_c=n=>{const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return e?`${parseInt(e[1],16)} ${parseInt(e[2],16)} ${parseInt(e[3],16)}`:"0 0 0"},pa=Oe("emerald"),D_=n=>{const e=cd[n];if(!e)return;const t=document.documentElement;Object.entries(e.primary).forEach(([i,r])=>{t.style.setProperty(`--color-primary-${i}`,_c(r))}),Object.entries(e.accent).forEach(([i,r])=>{t.style.setProperty(`--color-accent-${i}`,_c(r))}),Object.entries(e.secondary).forEach(([i,r])=>{t.style.setProperty(`--color-secondary-${i}`,_c(r))}),Object.entries(e.dark).forEach(([i,r])=>{t.style.setProperty(`--color-dark-${i}`,_c(r))})},yb=()=>{const n=localStorage.getItem("colorPalette");n&&cd[n]?pa.value=n:pa.value="emerald",D_(pa.value)};Wi(pa,n=>{D_(n),window.dispatchEvent(new CustomEvent("colorpalettechange"))});const bb=n=>{cd[n]&&(pa.value=n,localStorage.setItem("colorPalette",n))};yb();function Sb(){return{colorPalettes:cd,selectedPalette:pa,setPalette:bb}}function Vr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function L_(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ai={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Vl={duration:.5,overwrite:!1,delay:0},_p,Rn,$t,Vi=1e8,zt=1/Vi,Vf=Math.PI*2,Mb=Vf/4,wb=0,I_=Math.sqrt,Eb=Math.cos,Tb=Math.sin,Mn=function(e){return typeof e=="string"},Jt=function(e){return typeof e=="function"},os=function(e){return typeof e=="number"},xp=function(e){return typeof e>"u"},Rr=function(e){return typeof e=="object"},ci=function(e){return e!==!1},vp=function(){return typeof window<"u"},xc=function(e){return Jt(e)||Mn(e)},U_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Gn=Array.isArray,Ab=/random\([^)]+\)/g,Cb=/,\s*/g,z0=/(?:-?\.?\d|\.)+/gi,F_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,oa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Dd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,N_=/[+-]=-?[.\d]+/,Rb=/[^,'"\[\]\s]+/gi,Pb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Yt,ur,Hf,yp,Ri={},Uu={},O_,k_=function(e){return(Uu=Aa(e,Ri))&&pi},bp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Hl=function(e,t){return!t&&console.warn(e)},B_=function(e,t){return e&&(Ri[e]=t)&&Uu&&(Uu[e]=t)||Ri},Gl=function(){return 0},Db={suppressEvents:!0,isStart:!0,kill:!1},ou={suppressEvents:!0,kill:!1},Lb={suppressEvents:!0},Sp={},Ds=[],Gf={},z_,yi={},Ld={},V0=30,au=[],Mp="",wp=function(e){var t=e[0],i,r;if(Rr(t)||Jt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=au.length;r--&&!au[r].targetTest(t););i=au[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new lx(e[r],i)))||e.splice(r,1);return e},Mo=function(e){return e._gsap||wp(Hi(e))[0]._gsap},V_=function(e,t,i){return(i=e[t])&&Jt(i)?e[t]():xp(i)&&e.getAttribute&&e.getAttribute(t)||i},ui=function(e,t){return(e=e.split(",")).forEach(t)||e},tn=function(e){return Math.round(e*1e5)/1e5||0},jt=function(e){return Math.round(e*1e7)/1e7||0},ma=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},Ib=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Fu=function(){var e=Ds.length,t=Ds.slice(0),i,r;for(Gf={},Ds.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ep=function(e){return!!(e._initted||e._startAt||e.add)},H_=function(e,t,i,r){Ds.length&&!Rn&&Fu(),e.render(t,i,!!(Rn&&t<0&&Ep(e))),Ds.length&&!Rn&&Fu()},G_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Rb).length<2?t:Mn(e)?e.trim():e},W_=function(e){return e},Pi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Ub=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Aa=function(e,t){for(var i in t)e[i]=t[i];return e},H0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Rr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Nu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},bl=function(e){var t=e.parent||Yt,i=e.keyframes?Ub(Gn(e.keyframes)):Pi;if(ci(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Fb=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},X_=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},ud=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Os=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},wo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Nb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Wf=function(e,t,i,r){return e._startAt&&(Rn?e._startAt.revert(ou):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Ob=function n(e){return!e||e._ts&&n(e.parent)},G0=function(e){return e._repeat?Ca(e._tTime,e=e.duration()+e._rDelay)*e:0},Ca=function(e,t){var i=Math.floor(e=jt(e/t));return e&&i===e?i-1:i},Ou=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},dd=function(e){return e._end=jt(e._start+(e._tDur/Math.abs(e._ts||e._rts||zt)||0))},fd=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=jt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),dd(e),i._dirty||wo(i,e)),e},$_=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Ou(e.rawTime(),t),(!t._dur||oc(0,t.totalDuration(),i)-t._tTime>zt)&&t.render(i,!0)),wo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-zt}},gr=function(e,t,i,r){return t.parent&&Os(t),t._start=jt((os(i)?i:i||e!==Yt?Ui(e,i,t):e._time)+t._delay),t._end=jt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),X_(e,t,"_first","_last",e._sort?"_start":0),Xf(t)||(e._recent=t),r||$_(e,t),e._ts<0&&fd(e,e._tTime),e},j_=function(e,t){return(Ri.ScrollTrigger||bp("scrollTrigger",t))&&Ri.ScrollTrigger.create(t,e)},Y_=function(e,t,i,r,s){if(Ap(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Rn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&z_!==Si.frame)return Ds.push(e),e._lazy=[s,r],1},kb=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Xf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Bb=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&kb(e)&&!(!e._initted&&Xf(e))||(e._ts<0||e._dp._ts<0)&&!Xf(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=oc(0,e._tDur,t),u=Ca(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ca(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Rn||r||e._zTime===zt||!t&&e._zTime){if(!e._initted&&Y_(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?zt:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Wf(e,t,i,!0),e._onUpdate&&!i&&Ei(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ei(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Os(e,1),!i&&!Rn&&(Ei(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},zb=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ra=function(e,t,i,r){var s=e._repeat,o=jt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:jt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&fd(e,e._tTime=e._tDur*a),e.parent&&dd(e),i||wo(e.parent,e),e},W0=function(e){return e instanceof li?wo(e):Ra(e,e._dur)},Vb={_start:0,endTime:Gl,totalDuration:Gl},Ui=function n(e,t,i){var r=e.labels,s=e._recent||Vb,o=e.duration()>=Vi?s.endTime(!1):e._dur,a,l,c;return Mn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(Gn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Sl=function(e,t,i){var r=os(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ci(l.vars.inherit)&&l.parent;o.immediateRender=ci(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new an(t[0],o,t[s+1])},Gs=function(e,t){return e||e===0?t(e):t},oc=function(e,t,i){return i<e?e:i>t?t:i},kn=function(e,t){return!Mn(e)||!(t=Pb.exec(e))?"":t[1]},Hb=function(e,t,i){return Gs(i,function(r){return oc(e,t,r)})},$f=[].slice,q_=function(e,t){return e&&Rr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Rr(e[0]))&&!e.nodeType&&e!==ur},Gb=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Mn(r)&&!t||q_(r,1)?(s=i).push.apply(s,Hi(r)):i.push(r)})||i},Hi=function(e,t,i){return $t&&!t&&$t.selector?$t.selector(e):Mn(e)&&!i&&(Hf||!Pa())?$f.call((t||yp).querySelectorAll(e),0):Gn(e)?Gb(e,i):q_(e)?$f.call(e,0):e?[e]:[]},jf=function(e){return e=Hi(e)[0]||Hl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Hi(t,i.querySelectorAll?i:i===e?Hl("Invalid scope")||yp.createElement("div"):e)}},K_=function(e){return e.sort(function(){return .5-Math.random()})},Z_=function(e){if(Jt(e))return e;var t=Rr(e)?e:{each:e},i=Eo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,d=r;return Mn(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],d=r[1]),function(f,h,g){var _=(g||t).length,p=o[_],m,b,A,x,M,R,C,y,T;if(!p){if(T=t.grid==="auto"?0:(t.grid||[1,Vi])[1],!T){for(C=-Vi;C<(C=g[T++].getBoundingClientRect().left)&&T<_;);T<_&&T--}for(p=o[_]=[],m=l?Math.min(T,_)*u-.5:r%T,b=T===Vi?0:l?_*d/T-.5:r/T|0,C=0,y=Vi,R=0;R<_;R++)A=R%T-m,x=b-(R/T|0),p[R]=M=c?Math.abs(c==="y"?x:A):I_(A*A+x*x),M>C&&(C=M),M<y&&(y=M);r==="random"&&K_(p),p.max=C-y,p.min=y,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(T>_?_-1:c?c==="y"?_/T:T:Math.max(T,_/T))||0)*(r==="edges"?-1:1),p.b=_<0?s-_:s,p.u=kn(t.amount||t.each)||0,i=i&&_<0?nS(i):i}return _=(p[f]-p.min)/p.max||0,jt(p.b+(i?i(_):_)*p.v)+p.u}},Yf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=jt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(os(i)?0:kn(i))}},J_=function(e,t){var i=Gn(e),r,s;return!i&&Rr(e)&&(r=i=e.radius||Vi,e.values?(e=Hi(e.values),(s=!os(e[0]))&&(r*=r)):e=Yf(e.increment)),Gs(t,i?Jt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Vi,u=0,d=e.length,f,h;d--;)s?(f=e[d].x-a,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-a),f<c&&(c=f,u=d);return u=!r||c<=r?e[u]:o,s||u===o||os(o)?u:u+kn(o)}:Yf(e))},Q_=function(e,t,i,r){return Gs(Gn(e)?!t:i===!0?!!(i=0):!r,function(){return Gn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},Wb=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},Xb=function(e,t){return function(i){return e(parseFloat(i))+(t||kn(i))}},$b=function(e,t,i){return tx(e,t,0,1,i)},ex=function(e,t,i){return Gs(i,function(r){return e[~~t(r)]})},jb=function n(e,t,i){var r=t-e;return Gn(e)?ex(e,n(0,e.length),t):Gs(i,function(s){return(r+(s-e)%r)%r+e})},Yb=function n(e,t,i){var r=t-e,s=r*2;return Gn(e)?ex(e,n(0,e.length-1),t):Gs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Wl=function(e){return e.replace(Ab,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(Cb);return Q_(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},tx=function(e,t,i,r,s){var o=t-e,a=r-i;return Gs(s,function(l){return i+((l-e)/o*a||0)})},qb=function n(e,t,i,r){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var o=Mn(e),a={},l,c,u,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Gn(e)&&!Gn(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(n(e[c-1],e[c]));d--,s=function(g){g*=d;var _=Math.min(f,~~g);return u[_](g-_)},i=t}else r||(e=Aa(Gn(e)?[]:{},e));if(!u){for(l in t)Tp.call(a,e,l,"get",t[l]);s=function(g){return Pp(g,a)||(o?e.p:e)}}}return Gs(i,s)},X0=function(e,t,i){var r=e.labels,s=Vi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ei=function(e,t,i){var r=e.vars,s=r[t],o=$t,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&Ds.length&&Fu(),a&&($t=a),u=l?s.apply(c,l):s.call(c),$t=o,u},sl=function(e){return Os(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Rn),e.progress()<1&&Ei(e,"onInterrupt"),e},aa,nx=[],ix=function(e){if(e)if(e=!e.name&&e.default||e,vp()||e.headless){var t=e.name,i=Jt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Gl,render:Pp,add:Tp,kill:fS,modifier:dS,rawVars:0},o={targetTest:0,get:0,getSetter:Rp,aliases:{},register:0};if(Pa(),e!==r){if(yi[t])return;Pi(r,Pi(Nu(e,s),o)),Aa(r.prototype,Aa(s,Nu(e,o))),yi[r.prop=t]=r,e.targetTest&&(au.push(r),Sp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}B_(t,r),e.register&&e.register(pi,r,di)}else nx.push(e)},Bt=255,ol={aqua:[0,Bt,Bt],lime:[0,Bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Bt],navy:[0,0,128],white:[Bt,Bt,Bt],olive:[128,128,0],yellow:[Bt,Bt,0],orange:[Bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Bt,0,0],pink:[Bt,192,203],cyan:[0,Bt,Bt],transparent:[Bt,Bt,Bt,0]},Id=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Bt+.5|0},rx=function(e,t,i){var r=e?os(e)?[e>>16,e>>8&Bt,e&Bt]:0:ol.black,s,o,a,l,c,u,d,f,h,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ol[e])r=ol[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Bt,r&Bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Bt,e&Bt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(z0),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Id(l+1/3,s,o),r[1]=Id(l,s,o),r[2]=Id(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(F_),i&&r.length<4&&(r[3]=1),r}else r=e.match(z0)||ol.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Bt,o=r[1]/Bt,a=r[2]/Bt,d=Math.max(s,o,a),f=Math.min(s,o,a),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===s?(o-a)/h+(o<a?6:0):d===o?(a-s)/h+2:(s-o)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},sx=function(e){var t=[],i=[],r=-1;return e.split(Ls).forEach(function(s){var o=s.match(oa)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},$0=function(e,t,i){var r="",s=(e+r).match(Ls),o=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!s)return e;if(s=s.map(function(f){return(f=rx(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=sx(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Ls,"1").split(oa),d=c.length-1;a<d;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Ls),d=c.length-1;a<d;a++)r+=c[a]+s[a];return r+c[d]},Ls=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ol)n+="|"+e+"\\b";return new RegExp(n+")","gi")})(),Kb=/hsl[a]?\(/,ox=function(e){var t=e.join(" "),i;if(Ls.lastIndex=0,Ls.test(t))return i=Kb.test(t),e[1]=$0(e[1],i),e[0]=$0(e[0],i,sx(e[1])),!0},Xl,Si=(function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,d,f,h,g=function _(p){var m=n()-r,b=p===!0,A,x,M,R;if((m>e||m<0)&&(i+=m-t),r+=m,M=r-i,A=M-o,(A>0||b)&&(R=++d.frame,f=M-d.time*1e3,d.time=M=M/1e3,o+=A+(A>=s?4:s-A),x=1),b||(l=c(_)),x)for(h=0;h<a.length;h++)a[h](M,f,R,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){O_&&(!Hf&&vp()&&(ur=Hf=window,yp=ur.document||{},Ri.gsap=pi,(ur.gsapVersions||(ur.gsapVersions=[])).push(pi.version),k_(Uu||ur.GreenSockGlobals||!ur.gsap&&ur||{}),nx.forEach(ix)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,o-d.time*1e3+1|0)},Xl=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Xl=0,c=Gl},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=d.time*1e3+s},add:function(p,m,b){var A=m?function(x,M,R,C){p(x,M,R,C),d.remove(A)}:p;return d.remove(p),a[b?"unshift":"push"](A),Pa(),A},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&h>=m&&h--},_listeners:a},d})(),Pa=function(){return!Xl&&Si.wake()},yt={},Zb=/^[\d.\-M][\d.\-,\s]/,Jb=/["']/g,Qb=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(Jb,"").trim():+c,r=l.substr(a+1).trim();return t},eS=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},tS=function(e){var t=(e+"").split("("),i=yt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Qb(t[1])]:eS(e).split(",").map(G_)):yt._CE&&Zb.test(e)?yt._CE("",e):i},nS=function(e){return function(t){return 1-e(1-t)}},Eo=function(e,t){return e&&(Jt(e)?e:yt[e]||tS(e))||t},Uo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ui(e,function(a){yt[a]=Ri[a]=s,yt[o=a.toLowerCase()]=i;for(var l in s)yt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=yt[a+"."+l]=s[l]}),s},ax=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ud=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Vf*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*Tb((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:ax(a);return s=Vf/s,l.config=function(c,u){return n(e,c,u)},l},Fd=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:ax(i);return r.config=function(s){return n(e,s)},r};ui("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Uo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});yt.Linear.easeNone=yt.none=yt.Linear.easeIn;Uo("Elastic",Ud("in"),Ud("out"),Ud());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Uo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Uo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Uo("Circ",function(n){return-(I_(1-n*n)-1)});Uo("Sine",function(n){return n===1?1:-Eb(n*Mb)+1});Uo("Back",Fd("in"),Fd("out"),Fd());yt.SteppedEase=yt.steps=Ri.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-zt;return function(a){return((r*oc(0,o,a)|0)+s)*i}}};Vl.ease=yt["quad.out"];ui("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Mp+=n+","+n+"Params,"});var lx=function(e,t){this.id=wb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:V_,this.set=t?t.getSetter:Rp},$l=(function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ra(this,+t.duration,1,1),this.data=t.data,$t&&(this._ctx=$t,$t.data.push(this)),Xl||Si.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ra(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Pa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(fd(this,i),!s._dp||s.parent||$_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&gr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===zt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),H_(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+G0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+G0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Ca(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-zt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Ou(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-zt?0:this._rts,this.totalTime(oc(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),dd(this),Nb(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Pa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==zt&&(this._tTime-=zt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=jt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&gr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ci(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ou(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Lb);var r=Rn;return Rn=i,Ep(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Rn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,W0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,W0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Ui(this,i),ci(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ci(r)),this._dur||(this._zTime=-zt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-zt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-zt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-zt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Jt(i)?i:W_,l=function(){var u=r.then;r.then=null,s&&s(),Jt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){sl(this)},n})();Pi($l.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-zt,_prom:0,_ps:!1,_rts:1});var li=(function(n){L_(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ci(i.sortChildren),Yt&&gr(i.parent||Yt,Vr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&j_(Vr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Sl(0,arguments,this),this},t.from=function(r,s,o){return Sl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Sl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,bl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new an(r,s,Ui(this,o),1),this},t.call=function(r,s,o){return gr(this,an.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new an(r,o,Ui(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,bl(o).immediateRender=ci(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,d){return a.startAt=o,bl(a).immediateRender=ci(a.immediateRender),this.staggerTo(r,s,a,l,c,u,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:jt(r),d=this._zTime<0!=r<0&&(this._initted||!c),f,h,g,_,p,m,b,A,x,M,R,C;if(this!==Yt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||d){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,x=this._start,A=this._ts,m=!A,d&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(f=jt(u%p),u===l?(_=this._repeat,f=c):(M=jt(u/p),_=~~M,_&&_===M&&(f=c,_--),f>c&&(f=c)),M=Ca(this._tTime,p),!a&&this._tTime&&M!==_&&this._tTime-M*p-this._dur<=0&&(M=_),R&&_&1&&(f=c-f,C=1),_!==M&&!this._lock){var y=R&&M&1,T=y===(R&&_&1);if(_<M&&(y=!y),a=y?0:u%c?c:u,this._lock=1,this.render(a||(C?0:jt(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Ei(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1,M=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,a=y?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=zb(this,jt(a),jt(f)),b&&(u-=f-(f=b._start))),this._tTime=u,this._time=f,this._act=!!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!M&&(Ei(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(h=this._first;h;){if(g=h._next,(h._act||f>=h._start)&&h._ts&&b!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,s,o),f!==this._time||!this._ts&&!m){b=0,g&&(u+=this._zTime=-zt);break}}h=g}else{h=this._last;for(var N=r<0?r:f;h;){if(g=h._prev,(h._act||N<=h._end)&&h._ts&&b!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(N-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(N-h._start)*h._ts,s,o||Rn&&Ep(h)),f!==this._time||!this._ts&&!m){b=0,g&&(u+=this._zTime=N?-zt:zt);break}}h=g}}if(b&&!s&&(this.pause(),b.render(f>=a?0:-zt)._zTime=f>=a?1:-1,this._ts))return this._start=x,dd(this),this.render(r,s,o);this._onUpdate&&!s&&Ei(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Os(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Ei(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(os(s)||(s=Ui(this,s,r)),!(r instanceof $l)){if(Gn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Mn(r))return this.addLabel(r,s);if(Jt(r))r=an.delayedCall(0,r);else return this}return this!==r?gr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Vi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof an?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Mn(r)?this.removeLabel(r):Jt(r)?this.killTweensOf(r):(r.parent===this&&ud(this,r),r===this._recent&&(this._recent=this._last),wo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=jt(Si.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Ui(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=an.delayedCall(0,s||Gl,o);return a.data="isPause",this._hasPause=1,gr(this,a,Ui(this,r))},t.removePause=function(r){var s=this._first;for(r=Ui(this,r);s;)s._start===r&&s.data==="isPause"&&Os(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Es!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Hi(r),l=this._first,c=os(s),u;l;)l instanceof an?Ib(l._targets,a)&&(c?(!Es||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Ui(o,r),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,g=an.to(o,Pi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||zt,onStart:function(){if(o.pause(),!h){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Ra(g,p,0,1).render(g._time,!0,!0),h=1}u&&u.apply(g,d||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Pi({startAt:{time:Ui(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),X0(this,Ui(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),X0(this,Ui(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+zt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=jt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return wo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),wo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Vi,c,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,gr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=jt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ra(o,o===Yt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Yt._ts&&(H_(Yt,Ou(r,Yt)),z_=Si.frame),Si.frame>=V0){V0+=Ai.autoSleep||120;var s=Yt._first;if((!s||!s._ts)&&Ai.autoSleep&&Si._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Si.sleep()}}},e})($l);Pi(li.prototype,{_lock:0,_hasPause:0,_forcing:0});var iS=function(e,t,i,r,s,o,a){var l=new di(this._pt,e,t,0,1,px,null,s),c=0,u=0,d,f,h,g,_,p,m,b;for(l.b=i,l.e=r,i+="",r+="",(m=~r.indexOf("random("))&&(r=Wl(r)),o&&(b=[i,r],o(b,e,t),i=b[0],r=b[1]),f=i.match(Dd)||[];d=Dd.exec(r);)g=d[0],_=r.substring(c,d.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?ma(p,g)-p:parseFloat(g)-p,m:h&&h<4?Math.round:0},c=Dd.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(N_.test(r)||m)&&(l.e=0),this._pt=l,l},Tp=function(e,t,i,r,s,o,a,l,c,u){Jt(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:Jt(d)?c?e[t.indexOf("set")||!Jt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,h=Jt(d)?c?lS:fx:Cp,g;if(Mn(r)&&(~r.indexOf("random(")&&(r=Wl(r)),r.charAt(1)==="="&&(g=ma(f,r)+(kn(f)||0),(g||g===0)&&(r=g))),!u||f!==r||qf)return!isNaN(f*r)&&r!==""?(g=new di(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?uS:hx,0,h),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!d&&!(t in e)&&bp(t,r),iS.call(this,e,t,f,r,h,l||Ai.stringFilter,c))},rS=function(e,t,i,r,s){if(Jt(e)&&(e=Ml(e,s,t,i,r)),!Rr(e)||e.style&&e.nodeType||Gn(e)||U_(e))return Mn(e)?Ml(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Ml(e[a],s,t,i,r);return o},cx=function(e,t,i,r,s,o){var a,l,c,u;if(yi[e]&&(a=new yi[e]).init(s,a.rawVars?t[e]:rS(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new di(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==aa))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Es,qf,Ap=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,f=r.keyframes,h=r.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,b=m&&m.data==="nested"?m.vars.targets:p,A=e._overwrite==="auto"&&!_p,x=e.timeline,M=r.easeReverse||d,R,C,y,T,N,F,I,G,$,V,z,k,j;if(x&&(!f||!s)&&(s="none"),e._ease=Eo(s,Vl.ease),e._rEase=M&&(Eo(M)||e._ease),e._from=!x&&!!r.runBackwards,e._from&&(e.ratio=1),!x||f&&!r.stagger){if(G=p[0]?Mo(p[0]).harness:0,k=G&&r[G.prop],R=Nu(r,Sp),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!h?_.render(-1,!0):_.revert(u&&g?ou:Db),_._lazy=0),o){if(Os(e._startAt=an.set(p,Pi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&ci(l),startAt:null,delay:0,onUpdate:c&&function(){return Ei(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Rn||!a&&!h)&&e._startAt.revert(ou),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),y=Pi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ci(l),immediateRender:a,stagger:0,parent:m},R),k&&(y[G.prop]=k),Os(e._startAt=an.set(p,y)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Rn?e._startAt.revert(ou):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,zt,zt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ci(l)||l&&!g,C=0;C<p.length;C++){if(N=p[C],I=N._gsap||wp(p)[C]._gsap,e._ptLookup[C]=V={},Gf[I.id]&&Ds.length&&Fu(),z=b===p?C:b.indexOf(N),G&&($=new G).init(N,k||R,e,z,b)!==!1&&(e._pt=T=new di(e._pt,N,$.name,0,1,$.render,$,0,$.priority),$._props.forEach(function(X){V[X]=T}),$.priority&&(F=1)),!G||k)for(y in R)yi[y]&&($=cx(y,R,e,z,N,b))?$.priority&&(F=1):V[y]=T=Tp.call(e,N,y,"get",R[y],z,b,0,r.stringFilter);e._op&&e._op[C]&&e.kill(N,e._op[C]),A&&e._pt&&(Es=e,Yt.killTweensOf(N,V,e.globalTime(t)),j=!e.parent,Es=0),e._pt&&l&&(Gf[I.id]=1)}F&&mx(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!j,f&&t<=0&&x.render(Vi,!0,!0)},sS=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,h;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(u=f[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return qf=1,e.vars[t]="+=0",Ap(e,a),qf=0,l?Hl(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,d.e&&(d.e=tn(i)+kn(d.e)),d.b&&(d.b=u.s+kn(d.b))},oS=function(e,t){var i=e[0]?Mo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Aa({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},aS=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Gn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ml=function(e,t,i,r,s){return Jt(e)?e.call(t,i,r,s):Mn(e)&&~e.indexOf("random(")?Wl(e):e},ux=Mp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",dx={};ui(ux+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return dx[n]=1});var an=(function(n){L_(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:bl(r))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=r.parent||Yt,b=(Gn(i)||U_(i)?os(i[0]):"length"in r)?[i]:Hi(i),A,x,M,R,C,y,T,N;if(a._targets=b.length?wp(b):Hl("GSAP target "+i+" not found. https://gsap.com",!Ai.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,g||f||xc(c)||xc(u)){r=a.vars;var F=r.easeReverse||r.yoyoEase;if(A=a.timeline=new li({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:b}),A.kill(),A.parent=A._dp=Vr(a),A._start=0,f||xc(c)||xc(u)){if(R=b.length,T=f&&Z_(f),Rr(f))for(C in f)~ux.indexOf(C)&&(N||(N={}),N[C]=f[C]);for(x=0;x<R;x++)M=Nu(r,dx),M.stagger=0,F&&(M.easeReverse=F),N&&Aa(M,N),y=b[x],M.duration=+Ml(c,Vr(a),x,y,b),M.delay=(+Ml(u,Vr(a),x,y,b)||0)-a._delay,!f&&R===1&&M.delay&&(a._delay=u=M.delay,a._start+=u,M.delay=0),A.to(y,M,T?T(x,y,b):0),A._ease=yt.none;A.duration()?c=u=0:a.timeline=0}else if(g){bl(Pi(A.vars.defaults,{ease:"none"})),A._ease=Eo(g.ease||r.ease||"none");var I=0,G,$,V;if(Gn(g))g.forEach(function(z){return A.to(b,z,">")}),A.duration();else{M={};for(C in g)C==="ease"||C==="easeEach"||aS(C,g[C],M,g.easeEach);for(C in M)for(G=M[C].sort(function(z,k){return z.t-k.t}),I=0,x=0;x<G.length;x++)$=G[x],V={ease:$.e,duration:($.t-(x?G[x-1].t:0))/100*c},V[C]=$.v,A.to(b,V,I),I+=V.duration;A.duration()<c&&A.to({},{duration:c-A.duration()})}}c||a.duration(c=A.duration())}else a.timeline=0;return h===!0&&!_p&&(Es=Vr(a),Yt.killTweensOf(b),Es=0),gr(m,Vr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!c&&!g&&a._start===jt(m._time)&&ci(d)&&Ob(Vr(a))&&m.data!=="nested")&&(a._tTime=-zt,a.render(Math.max(0,-u)||0)),p&&j_(Vr(a),p),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-zt&&!u?l:r<zt?0:r,f,h,g,_,p,m,b,A;if(!c)Bb(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,A=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(f=jt(d%_),d===l?(g=this._repeat,f=c):(p=jt(d/_),g=~~p,g&&g===p?(f=c,g--):f>c&&(f=c)),m=this._yoyo&&g&1,m&&(f=c-f),p=Ca(this._tTime,_),f===a&&!o&&this._initted&&g===p)return this._tTime=d,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(jt(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Y_(this,u?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var x=f<a;if(x!==this._inv){var M=x?a:c-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=M?(x?-1:1)/M:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(f/c);if(this._from&&(this.ratio=b=1-b),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!p&&(Ei(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(b,h.d),h=h._next;A&&A.render(r<0?r:A._dur*A._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Wf(this,r,s,o),Ei(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Ei(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Wf(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Os(this,1),!s&&!(u&&!a)&&(d||a||m)&&(Ei(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Xl||Si.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ap(this,c),u=this._ease(c/this._dur),sS(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(fd(this,0),this.parent||X_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?sl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Rn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Es&&Es.vars.overwrite!==!0)._first||sl(this),this.parent&&o!==this.timeline.totalDuration()&&Ra(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Hi(r):a,c=this._ptLookup,u=this._pt,d,f,h,g,_,p,m;if((!s||s==="all")&&Fb(a,l))return s==="all"&&(this._pt=0),sl(this);for(d=this._op=this._op||[],s!=="all"&&(Mn(s)&&(_={},ui(s,function(b){return _[b]=1}),s=_),s=oS(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(d[m]=s,g=f,h={}):(h=d[m]=d[m]||{},g=s);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&ud(this,p,"_pt"),delete f[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&u&&sl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Sl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Sl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Yt.killTweensOf(r,s,o)},e})($l);Pi(an.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ui("staggerTo,staggerFrom,staggerFromTo",function(n){an[n]=function(){var e=new li,t=$f.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Cp=function(e,t,i){return e[t]=i},fx=function(e,t,i){return e[t](i)},lS=function(e,t,i,r){return e[t](r.fp,i)},cS=function(e,t,i){return e.setAttribute(t,i)},Rp=function(e,t){return Jt(e[t])?fx:xp(e[t])&&e.setAttribute?cS:Cp},hx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},uS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},px=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Pp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},dS=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},fS=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?ud(this,t,"_pt"):t.dep||(i=1),t=r;return!i},hS=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},mx=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},di=(function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||hx,this.d=l||this,this.set=c||Cp,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=hS,this.m=i,this.mt=s,this.tween=r},n})();ui(Mp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return Sp[n]=1});Ri.TweenMax=Ri.TweenLite=an;Ri.TimelineLite=Ri.TimelineMax=li;Yt=new li({sortChildren:!1,defaults:Vl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ai.stringFilter=ox;var To=[],lu={},pS=[],j0=0,mS=0,Nd=function(e){return(lu[e]||pS).map(function(t){return t()})},Kf=function(){var e=Date.now(),t=[];e-j0>2&&(Nd("matchMediaInit"),To.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=ur.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),Nd("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),j0=e,Nd("matchMedia"))},gx=(function(){function n(t,i){this.selector=i&&jf(i),this.data=[],this._r=[],this.isReverted=!1,this.id=mS++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Jt(i)&&(s=r,r=i,i=Jt);var o=this,a=function(){var c=$t,u=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=jf(s)),$t=o,d=r.apply(o,arguments),Jt(d)&&o._r.push(d),$t=c,o.selector=u,o.isReverted=!1,d};return o.last=a,i===Jt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=$t;$t=null,i(this),$t=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof an&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof li?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof an)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=To.length;o--;)To[o].id===this.id&&To.splice(o,1)},e.revert=function(i){this.kill(i||{})},n})(),gS=(function(){function n(t){this.contexts=[],this.scope=t,$t&&$t.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Rr(i)||(i={matches:i});var o=new gx(0,s||this.scope),a=o.conditions={},l,c,u;$t&&!o.selector&&(o.selector=$t.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=ur.matchMedia(i[c]),l&&(To.indexOf(o)<0&&To.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Kf):l.addEventListener("change",Kf)));return u&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n})(),ku={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return ix(r)})},timeline:function(e){return new li(e)},getTweensOf:function(e,t){return Yt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Mn(e)&&(e=Hi(e)[0]);var s=Mo(e||{}).get,o=i?W_:G_;return i==="native"&&(i=""),e&&(t?o((yi[t]&&yi[t].get||s)(e,t,i,r)):function(a,l,c){return o((yi[a]&&yi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Hi(e),e.length>1){var r=e.map(function(u){return pi.quickSetter(u,t,i)}),s=r.length;return function(u){for(var d=s;d--;)r[d](u)}}e=e[0]||{};var o=yi[t],a=Mo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var d=new o;aa._pt=0,d.init(e,i?u+i:u,aa,0,[e]),d.render(1,d),aa._pt&&Pp(1,aa)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=pi.to(e,Pi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Eo(e.ease,Vl.ease)),H0(Vl,e||{})},config:function(e){return H0(Ai,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!yi[a]&&!Ri[a]&&Hl(t+" effect requires "+a+" plugin.")}),Ld[t]=function(a,l,c){return i(Hi(a),Pi(l||{},s),c)},o&&(li.prototype[t]=function(a,l,c){return this.add(Ld[t](a,Rr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){yt[e]=Eo(t)},parseEase:function(e,t){return arguments.length?Eo(e,t):yt},getById:function(e){return Yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new li(e),r,s;for(i.smoothChildTiming=ci(e.smoothChildTiming),Yt.remove(i),i._dp=0,i._time=i._tTime=Yt._time,r=Yt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof an&&r.vars.onComplete===r._targets[0]))&&gr(i,r,r._start-r._delay),r=s;return gr(Yt,i,0),i},context:function(e,t){return e?new gx(e,t):$t},matchMedia:function(e){return new gS(e)},matchMediaRefresh:function(){return To.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Kf()},addEventListener:function(e,t){var i=lu[e]||(lu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=lu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:jb,wrapYoyo:Yb,distribute:Z_,random:Q_,snap:J_,normalize:$b,getUnit:kn,clamp:Hb,splitColor:rx,toArray:Hi,selector:jf,mapRange:tx,pipe:Wb,unitize:Xb,interpolate:qb,shuffle:K_},install:k_,effects:Ld,ticker:Si,updateRoot:li.updateRoot,plugins:yi,globalTimeline:Yt,core:{PropTween:di,globals:B_,Tween:an,Timeline:li,Animation:$l,getCache:Mo,_removeLinkedListItem:ud,reverting:function(){return Rn},context:function(e){return e&&$t&&($t.data.push(e),e._ctx=$t),$t},suppressOverwrites:function(e){return _p=e}}};ui("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return ku[n]=an[n]});Si.add(li.updateRoot);aa=ku.to({},{duration:0});var _S=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},xS=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=_S(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Od=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Mn(s)&&(l={},ui(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}xS(a,s)}}}},pi=ku.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Rn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Od("roundProps",Yf),Od("modifiers"),Od("snap",J_))||ku;an.version=li.version=pi.version="3.15.0";O_=1;vp()&&Pa();yt.Power0;yt.Power1;yt.Power2;yt.Power3;yt.Power4;yt.Linear;yt.Quad;yt.Cubic;yt.Quart;yt.Quint;yt.Strong;yt.Elastic;yt.Back;yt.SteppedEase;yt.Bounce;yt.Sine;yt.Expo;yt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Y0,Ts,ga,Dp,go,q0,Lp,vS=function(){return typeof window<"u"},as={},ro=180/Math.PI,_a=Math.PI/180,Bo=Math.atan2,K0=1e8,Ip=/([A-Z])/g,yS=/(left|right|width|margin|padding|x)/i,bS=/[\s,\(]\S/,_r={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Zf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},SS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},MS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},wS=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ES=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},_x=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},xx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},TS=function(e,t,i){return e.style[t]=i},AS=function(e,t,i){return e.style.setProperty(t,i)},CS=function(e,t,i){return e._gsap[t]=i},RS=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},PS=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},DS=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},qt="transform",fi=qt+"Origin",LS=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in as&&s){if(this.tfm=this.tfm||{},e!=="transform")e=_r[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Gr(r,a)}):this.tfm[e]=o.x?o[e]:Gr(r,e),e===fi&&(this.tfm.zOrigin=o.zOrigin);else return _r.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(qt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(fi,t,"")),e=qt}(s||t)&&this.props.push(e,t,s[e])},vx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},IS=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ip,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Lp(),(!s||!s.isStart)&&!i[qt]&&(vx(i),r.zOrigin&&i[fi]&&(i[fi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},yx=function(e,t){var i={target:e,props:[],revert:IS,save:LS};return e._gsap||pi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},bx,Jf=function(e,t){var i=Ts.createElementNS?Ts.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ts.createElement(e);return i&&i.style?i:Ts.createElement(e)},Ti=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Ip,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Da(t)||t,1)||""},Z0="O,Moz,ms,Ms,Webkit".split(","),Da=function(e,t,i){var r=t||go,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Z0[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Z0[o]:"")+e},Qf=function(){vS()&&window.document&&(Y0=window,Ts=Y0.document,ga=Ts.documentElement,go=Jf("div")||{style:{}},Jf("div"),qt=Da(qt),fi=qt+"Origin",go.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",bx=!!Da("perspective"),Lp=pi.core.reverting,Dp=1)},J0=function(e){var t=e.ownerSVGElement,i=Jf("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),ga.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),ga.removeChild(i),s},Q0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Sx=function(e){var t,i;try{t=e.getBBox()}catch{t=J0(e),i=1}return t&&(t.width||t.height)||i||(t=J0(e)),t&&!t.width&&!t.x&&!t.y?{x:+Q0(e,["x","cx","x1"])||0,y:+Q0(e,["y","cy","y1"])||0,width:0,height:0}:t},Mx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Sx(e))},ks=function(e,t){if(t){var i=e.style,r;t in as&&t!==fi&&(t=qt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Ip,"-$1").toLowerCase())):i.removeAttribute(t)}},As=function(e,t,i,r,s,o){var a=new di(e._pt,t,i,0,1,o?xx:_x);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},em={deg:1,rad:1,turn:1},US={grid:1,flex:1},Bs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=go.style,l=yS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",h=r==="%",g,_,p,m;if(r===o||!s||em[r]||em[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),m=e.getCTM&&Mx(e),(h||o==="%")&&(as[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],tn(h?s/g*d:s/100*g);if(a[l?"width":"height"]=d+(f?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ts||!_.appendChild)&&(_=Ts.body),p=_._gsap,p&&h&&p.width&&l&&p.time===Si.time&&!p.uncache)return tn(s/p.width*d);if(h&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=d+r,g=e[u],b?e.style[t]=b:ks(e,t)}else(h||o==="%")&&!US[Ti(_,"display")]&&(a.position=Ti(e,"position")),_===e&&(a.position="static"),_.appendChild(go),g=go[u],_.removeChild(go),a.position="absolute";return l&&h&&(p=Mo(_),p.time=Si.time,p.width=_[u]),tn(f?g*s/d:g&&s?d/g*s:0)},Gr=function(e,t,i,r){var s;return Dp||Qf(),t in _r&&t!=="transform"&&(t=_r[t],~t.indexOf(",")&&(t=t.split(",")[0])),as[t]&&t!=="transform"?(s=Yl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:zu(Ti(e,fi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Bu[t]&&Bu[t](e,t,i)||Ti(e,t)||V_(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Bs(e,t,s,i)+i:s},FS=function(e,t,i,r){if(!i||i==="none"){var s=Da(t,e,1),o=s&&Ti(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Ti(e,"borderTopColor"))}var a=new di(this._pt,e.style,t,0,1,px),l=0,c=0,u,d,f,h,g,_,p,m,b,A,x,M;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Ti(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=Ti(e,t)||r,_?e.style[t]=_:ks(e,t)),u=[i,r],ox(u),i=u[0],r=u[1],f=i.match(oa)||[],M=r.match(oa)||[],M.length){for(;d=oa.exec(r);)p=d[0],b=r.substring(l,d.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(h=parseFloat(_)||0,x=_.substr((h+"").length),p.charAt(1)==="="&&(p=ma(h,p)+x),m=parseFloat(p),A=p.substr((m+"").length),l=oa.lastIndex-A.length,A||(A=A||Ai.units[t]||x,l===r.length&&(r+=A,a.e+=A)),x!==A&&(h=Bs(e,t,_,A)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:h,c:m-h,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?xx:_x;return N_.test(r)&&(a.e=0),this._pt=a,a},tm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},NS=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=tm[i]||i,t[1]=tm[r]||r,t.join(" ")},OS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],as[a]&&(l=1,a=a==="transformOrigin"?fi:qt),ks(i,a);l&&(ks(i,qt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Yl(i,1),o.uncache=1,vx(r)))}},Bu={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new di(e._pt,t,i,0,0,OS);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},jl=[1,0,0,1,0,0],wx={},Ex=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},nm=function(e){var t=Ti(e,qt);return Ex(t)?jl:t.substr(7).match(F_).map(tn)},Up=function(e,t){var i=e._gsap||Mo(e),r=e.style,s=nm(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?jl:s):(s===jl&&!e.offsetParent&&e!==ga&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ga.appendChild(e)),s=nm(e),l?r.display=l:ks(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ga.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},eh=function(e,t,i,r,s,o){var a=e._gsap,l=s||Up(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,h=l[0],g=l[1],_=l[2],p=l[3],m=l[4],b=l[5],A=t.split(" "),x=parseFloat(A[0])||0,M=parseFloat(A[1])||0,R,C,y,T;i?l!==jl&&(C=h*p-g*_)&&(y=x*(p/C)+M*(-_/C)+(_*b-p*m)/C,T=x*(-g/C)+M*(h/C)-(h*b-g*m)/C,x=y,M=T):(R=Sx(e),x=R.x+(~A[0].indexOf("%")?x/100*R.width:x),M=R.y+(~(A[1]||A[0]).indexOf("%")?M/100*R.height:M)),r||r!==!1&&a.smooth?(m=x-c,b=M-u,a.xOffset=d+(m*h+b*_)-m,a.yOffset=f+(m*g+b*p)-b):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=M,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[fi]="0px 0px",o&&(As(o,a,"xOrigin",c,x),As(o,a,"yOrigin",u,M),As(o,a,"xOffset",d,a.xOffset),As(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+M)},Yl=function(e,t){var i=e._gsap||new lx(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ti(e,fi)||"0",u,d,f,h,g,_,p,m,b,A,x,M,R,C,y,T,N,F,I,G,$,V,z,k,j,X,L,oe,ue,ke,Fe,Ve;return u=d=f=_=p=m=b=A=x=0,h=g=1,i.svg=!!(e.getCTM&&Mx(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[qt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[qt]!=="none"?l[qt]:"")),r.scale=r.rotate=r.translate="none"),C=Up(e,i.svg),i.svg&&(i.uncache?(j=e.getBBox(),c=i.xOrigin-j.x+"px "+(i.yOrigin-j.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),eh(e,k||c,!!k||i.originIsAbsolute,i.smooth!==!1,C)),M=i.xOrigin||0,R=i.yOrigin||0,C!==jl&&(F=C[0],I=C[1],G=C[2],$=C[3],u=V=C[4],d=z=C[5],C.length===6?(h=Math.sqrt(F*F+I*I),g=Math.sqrt($*$+G*G),_=F||I?Bo(I,F)*ro:0,b=G||$?Bo(G,$)*ro+_:0,b&&(g*=Math.abs(Math.cos(b*_a))),i.svg&&(u-=M-(M*F+R*G),d-=R-(M*I+R*$))):(Ve=C[6],ke=C[7],L=C[8],oe=C[9],ue=C[10],Fe=C[11],u=C[12],d=C[13],f=C[14],y=Bo(Ve,ue),p=y*ro,y&&(T=Math.cos(-y),N=Math.sin(-y),k=V*T+L*N,j=z*T+oe*N,X=Ve*T+ue*N,L=V*-N+L*T,oe=z*-N+oe*T,ue=Ve*-N+ue*T,Fe=ke*-N+Fe*T,V=k,z=j,Ve=X),y=Bo(-G,ue),m=y*ro,y&&(T=Math.cos(-y),N=Math.sin(-y),k=F*T-L*N,j=I*T-oe*N,X=G*T-ue*N,Fe=$*N+Fe*T,F=k,I=j,G=X),y=Bo(I,F),_=y*ro,y&&(T=Math.cos(y),N=Math.sin(y),k=F*T+I*N,j=V*T+z*N,I=I*T-F*N,z=z*T-V*N,F=k,V=j),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),h=tn(Math.sqrt(F*F+I*I+G*G)),g=tn(Math.sqrt(z*z+Ve*Ve)),y=Bo(V,z),b=Math.abs(y)>2e-4?y*ro:0,x=Fe?1/(Fe<0?-Fe:Fe):0),i.svg&&(k=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Ex(Ti(e,qt)),k&&e.setAttribute("transform",k))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(h*=-1,b+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=tn(h),i.scaleY=tn(g),i.rotation=tn(_)+a,i.rotationX=tn(p)+a,i.rotationY=tn(m)+a,i.skewX=b+a,i.skewY=A+a,i.transformPerspective=x+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[fi]=zu(c)),i.xOffset=i.yOffset=0,i.force3D=Ai.force3D,i.renderTransform=i.svg?BS:bx?Tx:kS,i.uncache=0,i},zu=function(e){return(e=e.split(" "))[0]+" "+e[1]},kd=function(e,t,i){var r=kn(t);return tn(parseFloat(t)+parseFloat(Bs(e,"x",i+"px",r)))+r},kS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Tx(e,t)},qs="0deg",Xa="0px",Ks=") ",Tx=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,d=i.rotationX,f=i.skewX,h=i.skewY,g=i.scaleX,_=i.scaleY,p=i.transformPerspective,m=i.force3D,b=i.target,A=i.zOrigin,x="",M=m==="auto"&&e&&e!==1||m===!0;if(A&&(d!==qs||u!==qs)){var R=parseFloat(u)*_a,C=Math.sin(R),y=Math.cos(R),T;R=parseFloat(d)*_a,T=Math.cos(R),o=kd(b,o,C*T*-A),a=kd(b,a,-Math.sin(R)*-A),l=kd(b,l,y*T*-A+A)}p!==Xa&&(x+="perspective("+p+Ks),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(M||o!==Xa||a!==Xa||l!==Xa)&&(x+=l!==Xa||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ks),c!==qs&&(x+="rotate("+c+Ks),u!==qs&&(x+="rotateY("+u+Ks),d!==qs&&(x+="rotateX("+d+Ks),(f!==qs||h!==qs)&&(x+="skew("+f+", "+h+Ks),(g!==1||_!==1)&&(x+="scale("+g+", "+_+Ks),b.style[qt]=x||"translate(0, 0)"},BS=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,d=i.scaleX,f=i.scaleY,h=i.target,g=i.xOrigin,_=i.yOrigin,p=i.xOffset,m=i.yOffset,b=i.forceCSS,A=parseFloat(o),x=parseFloat(a),M,R,C,y,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=_a,c*=_a,M=Math.cos(l)*d,R=Math.sin(l)*d,C=Math.sin(l-c)*-f,y=Math.cos(l-c)*f,c&&(u*=_a,T=Math.tan(c-u),T=Math.sqrt(1+T*T),C*=T,y*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),M*=T,R*=T)),M=tn(M),R=tn(R),C=tn(C),y=tn(y)):(M=d,y=f,R=C=0),(A&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(A=Bs(h,"x",o,"px"),x=Bs(h,"y",a,"px")),(g||_||p||m)&&(A=tn(A+g-(g*M+_*C)+p),x=tn(x+_-(g*R+_*y)+m)),(r||s)&&(T=h.getBBox(),A=tn(A+r/100*T.width),x=tn(x+s/100*T.height)),T="matrix("+M+","+R+","+C+","+y+","+A+","+x+")",h.setAttribute("transform",T),b&&(h.style[qt]=T)},zS=function(e,t,i,r,s){var o=360,a=Mn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ro:1),c=l-r,u=r+c+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*K0)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*K0)%o-~~(c/o)*o)),e._pt=f=new di(e._pt,t,i,r,c,SS),f.e=u,f.u="deg",e._props.push(i),f},im=function(e,t){for(var i in t)e[i]=t[i];return e},VS=function(e,t,i){var r=im({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,d,f,h,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[qt]=t,a=Yl(i,1),ks(i,qt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[qt],o[qt]=t,a=Yl(i,1),o[qt]=c);for(l in as)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(h=kn(c),g=kn(u),d=h!==g?Bs(i,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new di(e._pt,a,l,d,f-d,Zf),e._pt.u=g||0,e._props.push(l));im(a,r)};ui("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Bu[e>1?"border"+n:n]=function(a,l,c,u,d){var f,h;if(arguments.length<4)return f=o.map(function(g){return Gr(a,g,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},o.forEach(function(g,_){return h[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,h,d)}});var Ax={name:"css",register:Qf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,d,f,h,g,_,p,m,b,A,x,M,R,C,y,T;Dp||Qf(),this.styles=this.styles||yx(e),y=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(yi[_]&&cx(_,t,i,r,e,s)))){if(h=typeof u,g=Bu[_],h==="function"&&(u=u.call(i,r,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Wl(u)),g)g(this,e,_,u,i)&&(C=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Ls.lastIndex=0,Ls.test(c)||(p=kn(c),m=kn(u),m?p!==m&&(c=Bs(e,_,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),y.push(_,0,a[_]);else if(h!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],Mn(c)&&~c.indexOf("random(")&&(c=Wl(c)),kn(c+"")||c==="auto"||(c+=Ai.units[_]||kn(Gr(e,_))||""),(c+"").charAt(1)==="="&&(c=Gr(e,_))):c=Gr(e,_),f=parseFloat(c),b=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),d=parseFloat(u),_ in _r&&(_==="autoAlpha"&&(f===1&&Gr(e,"visibility")==="hidden"&&d&&(f=0),y.push("visibility",0,a.visibility),As(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=_r[_],~_.indexOf(",")&&(_=_.split(",")[0]))),A=_ in as,A){if(this.styles.save(_),T=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=Ti(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var N=e.style.perspective;e.style.perspective=u,u=Ti(e,"perspective"),N?e.style.perspective=N:ks(e,"perspective")}d=parseFloat(u)}if(x||(M=e._gsap,M.renderTransform&&!t.parseTransform||Yl(e,t.parseTransform),R=t.smoothOrigin!==!1&&M.smooth,x=this._pt=new di(this._pt,a,qt,0,1,M.renderTransform,M,0,-1),x.dep=1),_==="scale")this._pt=new di(this._pt,M,"scaleY",M.scaleY,(b?ma(M.scaleY,b+d):d)-M.scaleY||0,Zf),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){y.push(fi,0,a[fi]),u=NS(u),M.svg?eh(e,u,0,R,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==M.zOrigin&&As(this,M,"zOrigin",M.zOrigin,m),As(this,a,_,zu(c),zu(u)));continue}else if(_==="svgOrigin"){eh(e,u,1,R,0,this);continue}else if(_ in wx){zS(this,M,_,f,b?ma(f,b+u):u);continue}else if(_==="smoothOrigin"){As(this,M,"smooth",M.smooth,u);continue}else if(_==="force3D"){M[_]=u;continue}else if(_==="transform"){VS(this,u,e);continue}}else _ in a||(_=Da(_)||_);if(A||(d||d===0)&&(f||f===0)&&!bS.test(u)&&_ in a)p=(c+"").substr((f+"").length),d||(d=0),m=kn(u)||(_ in Ai.units?Ai.units[_]:p),p!==m&&(f=Bs(e,_,c,m)),this._pt=new di(this._pt,A?M:a,_,f,(b?ma(f,b+d):d)-f,!A&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?ES:Zf),this._pt.u=m||0,A&&T!==u?(this._pt.b=c,this._pt.e=T,this._pt.r=wS):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=MS);else if(_ in a)FS.call(this,e,_,c,b?b+u:u);else if(_ in e)this.add(e,_,c||e[_],b?b+u:u,r,s);else if(_!=="parseTransform"){bp(_,u);continue}A||(_ in a?y.push(_,0,a[_]):typeof e[_]=="function"?y.push(_,2,e[_]()):y.push(_,1,c||e[_])),o.push(_)}}C&&mx(this)},render:function(e,t){if(t.tween._time||!Lp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Gr,aliases:_r,getSetter:function(e,t,i){var r=_r[t];return r&&r.indexOf(",")<0&&(t=r),t in as&&t!==fi&&(e._gsap.x||Gr(e,"x"))?i&&q0===i?t==="scale"?RS:CS:(q0=i||{})&&(t==="scale"?PS:DS):e.style&&!xp(e.style[t])?TS:~t.indexOf("-")?AS:Rp(e,t)},core:{_removeProperty:ks,_getMatrix:Up}};pi.utils.checkPrefix=Da;pi.core.getStyleSaver=yx;(function(n,e,t,i){var r=ui(n+","+e+","+t,function(s){as[s]=1});ui(e,function(s){Ai.units[s]="deg",wx[s]=1}),_r[r[13]]=n+","+e,ui(i,function(s){var o=s.split(":");_r[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ui("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ai.units[n]="px"});pi.registerPlugin(Ax);var _t=pi.registerPlugin(Ax)||pi;_t.core.Tween;const Kr=Oe(!0),Cx=()=>{Kr.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},HS=()=>{const n=localStorage.getItem("theme");n==="light"?Kr.value=!1:Kr.value=!0,Cx()};Wi(Kr,()=>{Cx()});const GS=()=>{Kr.value=!Kr.value,localStorage.setItem("theme",Kr.value?"dark":"light")};HS();function Rx(){return{isDark:Kr,toggleTheme:GS}}const xa=Oe(!0),WS=()=>{localStorage.getItem("mouseTrail")==="disabled"?xa.value=!1:xa.value=!0},XS=()=>{xa.value=!xa.value,localStorage.setItem("mouseTrail",xa.value?"enabled":"disabled")};WS();function Px(){return{isMouseTrailEnabled:xa,toggleMouseTrail:XS}}function $S({elements:n,interval:e=150}){const{isDark:t}=Rx(),i=Oe({});n.forEach(({key:l})=>{i.value[l]=!1});let r=null;const s=({r:l,g:c,b:u})=>(.299*l+.587*c+.114*u)/255,o=l=>{var h;if(!l||!((h=window.__blobSampler)!=null&&h.sampleScreenPixel))return null;const c=l.getBoundingClientRect();if(c.width===0||c.height===0)return null;const u=[{x:c.left+c.width*.5,y:c.top+c.height*.5},{x:c.left+c.width*.3,y:c.top+c.height*.3},{x:c.left+c.width*.7,y:c.top+c.height*.3},{x:c.left+c.width*.3,y:c.top+c.height*.7},{x:c.left+c.width*.7,y:c.top+c.height*.7}];let d=0,f=0;for(const g of u){const _=window.__blobSampler.sampleScreenPixel(g.x,g.y);_&&_.a>0&&(d+=s(_),f++)}return f===0?null:d/f},a=()=>{if(t.value)return;const l={};let c=!1;for(const{key:u,el:d}of n){const f=o(d.value);if(f===null)continue;const h=f<.5;i.value[u]!==h&&(l[u]=h,c=!0)}c&&(i.value={...i.value,...l})};return Wn(()=>{setTimeout(a,300),r=setInterval(a,e)}),ii(()=>{r&&clearInterval(r)}),Wi(t,()=>{setTimeout(a,100)}),{isDarkBackground:i}}const jS={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},YS={class:"flex items-center justify-between h-16"},qS=["href","onClick"],KS=["aria-expanded"],ZS={key:0,class:"settings-dropdown absolute right-0 mt-2 w-64 rounded-xl bg-dark-800 border border-dark-700 shadow-2xl light:bg-white light:border-secondary-200 light:shadow-secondary-200/50 overflow-hidden"},JS={class:"px-4 py-3 flex items-center justify-between hover:bg-dark-700/50 light:hover:bg-secondary-50 transition-colors duration-200"},QS={class:"flex items-center space-x-3"},eM={key:0,class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},tM={key:1,class:"w-4 h-4 text-primary-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},nM=["aria-label"],iM={class:"px-4 py-3 flex items-center justify-between hover:bg-dark-700/50 light:hover:bg-secondary-50 transition-colors duration-200"},rM=["aria-label"],sM={class:"px-4 py-3 border-t border-dark-700 light:border-secondary-200"},oM={class:"grid grid-cols-3 gap-2"},aM=["onClick","aria-label","aria-pressed"],lM={class:"flex space-x-0.5"},cM={key:0,class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},uM={key:1,class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},dM={class:"px-4 py-3 space-y-2"},fM=["href","onClick"],hM={class:"pt-2 border-t border-dark-700 light:border-secondary-200"},pM={class:"flex items-center justify-between py-2"},mM={class:"flex items-center space-x-3"},gM={key:0,class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},_M={key:1,class:"w-4 h-4 text-primary-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},xM=["aria-label"],vM={class:"flex items-center justify-between py-2"},yM=["aria-label"],bM={class:"py-2"},SM={class:"grid grid-cols-3 gap-2"},MM=["onClick","aria-label","aria-pressed"],wM={class:"flex space-x-0.5"},EM={__name:"NavBar",setup(n){const e=Oe(!1),t=Oe(!1),i=Oe(!1),r=Oe(null),s=Oe(null),o=Oe(null),a=Oe(null),{isDark:l,toggleTheme:c}=Rx(),{isMouseTrailEnabled:u,toggleMouseTrail:d}=Px(),{colorPalettes:f,selectedPalette:h,setPalette:g}=Sb(),{isDarkBackground:_}=$S({elements:[{key:"nav",el:a}]}),p=[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Tech Stack",href:"#tech-stack"},{label:"Projects",href:"#projects"}],m=()=>{e.value=window.scrollY>50},b=x=>{x.preventDefault(),t.value=!1,window.scrollTo({top:0,behavior:"smooth"})},A=x=>{o.value&&!o.value.contains(x.target)&&(i.value=!1)};return Wn(()=>{window.addEventListener("scroll",m),document.addEventListener("click",A),_t.fromTo(r.value,{y:-80,opacity:0},{y:0,opacity:1,duration:.8,ease:"power3.out",delay:.2,clearProps:"all"})}),ii(()=>{window.removeEventListener("scroll",m),document.removeEventListener("click",A)}),Wi(t,async x=>{await ss(),s.value&&(x?(_t.fromTo(s.value,{height:0,opacity:0},{height:"auto",opacity:1,duration:.4,ease:"power2.out"}),_t.from(s.value.querySelectorAll("a"),{x:-20,opacity:0,stagger:.08,duration:.3,ease:"power2.out"})):_t.to(s.value,{height:0,opacity:0,duration:.3,ease:"power2.in"}))}),Wi(i,async x=>{var R;await ss();const M=(R=o.value)==null?void 0:R.querySelector(".settings-dropdown");M&&(x?_t.fromTo(M,{opacity:0,y:-10,scale:.95},{opacity:1,y:0,scale:1,duration:.25,ease:"power2.out"}):_t.to(M,{opacity:0,y:-10,scale:.95,duration:.2,ease:"power2.in"}))}),(x,M)=>(he(),pe("nav",{ref_key:"navRef",ref:r,class:at(["fixed top-0 left-0 right-0 z-50 transition-colors duration-300",e.value?"bg-dark-900/95 backdrop-blur-md shadow-lg light:bg-white/95 light:shadow-secondary-200":"bg-transparent"])},[v("div",jS,[v("div",YS,[v("a",{href:"#home",onClick:b,class:"text-xl font-bold text-white light:text-secondary-900 group transition-colors duration-300"},[...M[7]||(M[7]=[v("span",{class:"text-primary-500"},"<",-1),Ns("KPC",-1),v("span",{class:"text-primary-500"},"/>",-1)])]),v("div",{ref_key:"navLinksRef",ref:a,class:"hidden md:flex items-center space-x-8"},[(he(),pe(Ke,null,it(p,R=>v("a",{key:R.href,href:R.href,onClick:C=>R.href==="#home"?b(C):null,class:"text-secondary-300 hover:text-primary-400 light:text-black transition-colors duration-200 text-sm font-medium relative group"},[Ns(be(R.label)+" ",1),M[8]||(M[8]=v("span",{class:"absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"},null,-1))],8,qS)),64)),M[16]||(M[16]=v("a",{href:"#contact",class:"bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"}," Hire Me ",-1)),v("div",{ref_key:"settingsRef",ref:o,class:"relative"},[v("button",{onClick:M[0]||(M[0]=mo(R=>i.value=!i.value,["stop"])),class:"p-2 rounded-lg light:text-black text-secondary-300 hover:text-primary-400 hover:bg-secondary-800/50 light:hover:text-primary-600 light:hover:bg-secondary-100 transition-all duration-300 focus:outline-none","aria-label":"Settings","aria-expanded":i.value},[(he(),pe("svg",{class:at(["w-5 h-5",{"rotate-90 transition-transform duration-300":i.value}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...M[9]||(M[9]=[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"},null,-1),v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"},null,-1)])],2))],8,KS),i.value?(he(),pe("div",ZS,[M[15]||(M[15]=v("div",{class:"px-4 py-3 border-b border-dark-700 light:border-secondary-200"},[v("p",{class:"text-sm font-semibold text-white light:text-secondary-900"},"Settings")],-1)),v("div",JS,[v("div",QS,[xt(l)?(he(),pe("svg",eM,[...M[10]||(M[10]=[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1)])])):(he(),pe("svg",tM,[...M[11]||(M[11]=[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)])])),M[12]||(M[12]=v("span",{class:"text-sm text-secondary-300 light:text-secondary-600"},"Night Mode",-1))]),v("button",{onClick:M[1]||(M[1]=(...R)=>xt(c)&&xt(c)(...R)),class:at(["relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none",xt(l)?"bg-primary-500":"bg-secondary-300 light:bg-secondary-300"]),"aria-label":xt(l)?"Disable night mode":"Enable night mode"},[v("span",{class:at(["absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300",xt(l)?"left-5":"left-0.5"])},null,2)],10,nM)]),v("div",iM,[M[13]||(M[13]=v("div",{class:"flex items-center space-x-3"},[v("svg",{class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"})]),v("span",{class:"text-sm text-secondary-300 light:text-secondary-600"},"Mouse Animation")],-1)),v("button",{onClick:M[2]||(M[2]=(...R)=>xt(d)&&xt(d)(...R)),class:at(["relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none",xt(u)?"bg-primary-500":"bg-secondary-300 light:bg-secondary-300"]),"aria-label":xt(u)?"Disable mouse animation":"Enable mouse animation"},[v("span",{class:at(["absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300",xt(u)?"left-5":"left-0.5"])},null,2)],10,rM)]),v("div",sM,[M[14]||(M[14]=v("div",{class:"flex items-center space-x-3 mb-2"},[v("svg",{class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"})]),v("span",{class:"text-sm text-secondary-300 light:text-secondary-600"},"Color Palette")],-1)),v("div",oM,[(he(!0),pe(Ke,null,it(xt(f),(R,C)=>(he(),pe("button",{key:C,onClick:y=>xt(g)(C),class:at(["flex flex-col items-center gap-1 p-2 rounded-lg border transition-all duration-200 focus:outline-none",xt(h)===C?"border-primary-500 bg-primary-500/10 light:bg-primary-50":"border-dark-700 hover:border-primary-400 light:border-secondary-200 light:hover:border-primary-400"]),"aria-label":`Use ${R.name} color palette`,"aria-pressed":xt(h)===C},[v("span",lM,[v("span",{class:"w-3 h-3 rounded-full",style:Tn({backgroundColor:R.primary[500]})},null,4),v("span",{class:"w-3 h-3 rounded-full",style:Tn({backgroundColor:R.accent[500]})},null,4),v("span",{class:"w-3 h-3 rounded-full",style:Tn({backgroundColor:R.secondary[500]})},null,4)]),v("span",{class:at(["text-[10px] font-medium",xt(h)===C?"text-primary-400 light:text-primary-600":"text-secondary-400 light:text-secondary-500"])},be(R.name),3)],10,aM))),128))])])])):ai("",!0)],512)],512),v("button",{onClick:M[3]||(M[3]=R=>t.value=!t.value),class:at(["md:hidden text-secondary-300 hover:text-white light:text-secondary-600 light:hover:text-secondary-900 focus:outline-none transition-colors duration-300",!e.value&&xt(_).nav?"light:text-white light:hover:text-secondary-900":"light:text-secondary-600 light:hover:text-secondary-900"]),"aria-label":"Toggle menu"},[t.value?(he(),pe("svg",uM,[...M[18]||(M[18]=[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)])])):(he(),pe("svg",cM,[...M[17]||(M[17]=[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)])]))],2)])]),t.value?(he(),pe("div",{key:0,ref_key:"mobileMenuRef",ref:s,class:"md:hidden bg-dark-800 border-t border-dark-700 light:bg-white light:border-secondary-200 overflow-hidden"},[v("div",dM,[(he(),pe(Ke,null,it(p,R=>v("a",{key:R.href,href:R.href,onClick:C=>R.href==="#home"?b(C):t.value=!1,class:"block text-secondary-300 hover:text-primary-400 light:text-secondary-600 light:hover:text-primary-600 transition-colors duration-200 py-2 text-sm font-medium"},be(R.label),9,fM)),64)),v("a",{href:"#contact",onClick:M[4]||(M[4]=R=>t.value=!1),class:"block bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center transition-all duration-300 hover:scale-105"}," Hire Me "),v("div",hM,[M[24]||(M[24]=v("p",{class:"text-xs font-semibold text-secondary-500 light:text-secondary-400 uppercase tracking-wider mb-2"},"Settings",-1)),v("div",pM,[v("div",mM,[xt(l)?(he(),pe("svg",gM,[...M[19]||(M[19]=[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1)])])):(he(),pe("svg",_M,[...M[20]||(M[20]=[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)])])),M[21]||(M[21]=v("span",{class:"text-sm text-secondary-300 light:text-secondary-600"},"Night Mode",-1))]),v("button",{onClick:M[5]||(M[5]=(...R)=>xt(c)&&xt(c)(...R)),class:at(["relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none",xt(l)?"bg-primary-500":"bg-secondary-300 light:bg-secondary-300"]),"aria-label":xt(l)?"Disable night mode":"Enable night mode"},[v("span",{class:at(["absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300",xt(l)?"left-5":"left-0.5"])},null,2)],10,xM)]),v("div",vM,[M[22]||(M[22]=v("div",{class:"flex items-center space-x-3"},[v("svg",{class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"})]),v("span",{class:"text-sm text-secondary-300 light:text-secondary-600"},"Mouse Animation")],-1)),v("button",{onClick:M[6]||(M[6]=(...R)=>xt(d)&&xt(d)(...R)),class:at(["relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none",xt(u)?"bg-primary-500":"bg-secondary-300 light:bg-secondary-300"]),"aria-label":xt(u)?"Disable mouse animation":"Enable mouse animation"},[v("span",{class:at(["absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300",xt(u)?"left-5":"left-0.5"])},null,2)],10,yM)]),v("div",bM,[M[23]||(M[23]=v("div",{class:"flex items-center space-x-3 mb-2"},[v("svg",{class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"})]),v("span",{class:"text-sm text-secondary-300 light:text-secondary-600"},"Color Palette")],-1)),v("div",SM,[(he(!0),pe(Ke,null,it(xt(f),(R,C)=>(he(),pe("button",{key:C,onClick:y=>xt(g)(C),class:at(["flex flex-col items-center gap-1 p-2 rounded-lg border transition-all duration-200 focus:outline-none",xt(h)===C?"border-primary-500 bg-primary-500/10 light:bg-primary-50":"border-dark-700 hover:border-primary-400 light:border-secondary-200 light:hover:border-primary-400"]),"aria-label":`Use ${R.name} color palette`,"aria-pressed":xt(h)===C},[v("span",wM,[v("span",{class:"w-3 h-3 rounded-full",style:Tn({backgroundColor:R.primary[500]})},null,4),v("span",{class:"w-3 h-3 rounded-full",style:Tn({backgroundColor:R.accent[500]})},null,4),v("span",{class:"w-3 h-3 rounded-full",style:Tn({backgroundColor:R.secondary[500]})},null,4)]),v("span",{class:at(["text-[10px] font-medium",xt(h)===C?"text-primary-400 light:text-primary-600":"text-secondary-400 light:text-secondary-500"])},be(R.name),3)],10,MM))),128))])])])])],512)):ai("",!0)],2))}};function TM(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function AM(n,e,t){return e&&TM(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var An,cu,Mi,Cs,Rs,va,Dx,so,ya,Lx,Yr,Zi,Ix,Ux=function(){return An||typeof window<"u"&&(An=window.gsap)&&An.registerPlugin&&An},Fx=1,la=[],gt=[],Mr=[],wl=Date.now,th=function(e,t){return t},CM=function(){var e=ya.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,gt),r.push.apply(r,Mr),gt=i,Mr=r,th=function(o,a){return t[o](a)}},Is=function(e,t){return~Mr.indexOf(e)&&Mr[Mr.indexOf(e)+1][t]},El=function(e){return!!~Lx.indexOf(e)},jn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Xn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},vc="scrollLeft",yc="scrollTop",nh=function(){return Yr&&Yr.isPressed||gt.cache++},Vu=function(e,t){var i=function r(s){if(s||s===0){Fx&&(Mi.history.scrollRestoration="manual");var o=Yr&&Yr.isPressed;s=r.v=Math.round(s)||(Yr&&Yr.iOS?1:0),e(s),r.cacheID=gt.cache,o&&th("ss",s)}else(t||gt.cache!==r.cacheID||th("ref"))&&(r.cacheID=gt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},ti={s:vc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Vu(function(n){return arguments.length?Mi.scrollTo(n,pn.sc()):Mi.pageXOffset||Cs[vc]||Rs[vc]||va[vc]||0})},pn={s:yc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ti,sc:Vu(function(n){return arguments.length?Mi.scrollTo(ti.sc(),n):Mi.pageYOffset||Cs[yc]||Rs[yc]||va[yc]||0})},oi=function(e,t){return(t&&t._ctx&&t._ctx.selector||An.utils.toArray)(e)[0]||(typeof e=="string"&&An.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},RM=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},zs=function(e,t){var i=t.s,r=t.sc;El(e)&&(e=Cs.scrollingElement||Rs);var s=gt.indexOf(e),o=r===pn.sc?1:2;!~s&&(s=gt.push(e)-1),gt[s+o]||jn(e,"scroll",nh);var a=gt[s+o],l=a||(gt[s+o]=Vu(Is(e,i),!0)||(El(e)?r:Vu(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=An.getProperty(e,"scrollBehavior")==="smooth"),l},ih=function(e,t,i){var r=e,s=e,o=wl(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var p=wl();_||p-o>l?(s=r,r=g,a=o,o=p):i?r+=g:r=s+(g-s)/(p-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},f=function(g){var _=a,p=s,m=wl();return(g||g===0)&&g!==r&&u(g),o===a||m-a>c?0:(r+(i?p:-p))/((i?m:o)-_)*1e3};return{update:u,reset:d,getVelocity:f}},$a=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},rm=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},Nx=function(){ya=An.core.globals().ScrollTrigger,ya&&ya.core&&CM()},Ox=function(e){return An=e||Ux(),!cu&&An&&typeof document<"u"&&document.body&&(Mi=window,Cs=document,Rs=Cs.documentElement,va=Cs.body,Lx=[Mi,Cs,Rs,va],An.utils.clamp,Ix=An.core.context||function(){},so="onpointerenter"in va?"pointer":"mouse",Dx=rn.isTouch=Mi.matchMedia&&Mi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Mi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Zi=rn.eventTypes=("ontouchstart"in Rs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Rs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Fx=0},500),cu=1),ya||Nx(),cu};ti.op=pn;gt.cache=0;var rn=(function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){cu||Ox(An)||console.warn("Please gsap.registerPlugin(Observer)"),ya||Nx();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,d=i.onStop,f=i.onStopDelay,h=i.ignore,g=i.wheelSpeed,_=i.event,p=i.onDragStart,m=i.onDragEnd,b=i.onDrag,A=i.onPress,x=i.onRelease,M=i.onRight,R=i.onLeft,C=i.onUp,y=i.onDown,T=i.onChangeX,N=i.onChangeY,F=i.onChange,I=i.onToggleX,G=i.onToggleY,$=i.onHover,V=i.onHoverEnd,z=i.onMove,k=i.ignoreCheck,j=i.isNormalizer,X=i.onGestureStart,L=i.onGestureEnd,oe=i.onWheel,ue=i.onEnable,ke=i.onDisable,Fe=i.onClick,Ve=i.scrollSpeed,ee=i.capture,le=i.allowClicks,ge=i.lockAxis,Le=i.onLockAxis;this.target=a=oi(a)||Rs,this.vars=i,h&&(h=An.utils.toArray(h)),r=r||1e-9,s=s||0,g=g||1,Ve=Ve||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Mi.getComputedStyle(va).lineHeight)||22);var Ee,fe,w,E,W,ie,q,O=this,U=0,me=0,ce=i.passive||!u&&i.passive!==!1,J=zs(a,ti),de=zs(a,pn),P=J(),S=de(),B=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Zi[0]==="pointerdown",Z=El(a),te=a.ownerDocument||Cs,K=[0,0,0],Me=[0,0,0],_e=0,He=function(){return _e=wl()},Ae=function(je,ct){return(O.event=je)&&h&&RM(je.target,h)||ct&&B&&je.pointerType!=="touch"||k&&k(je,ct)},xe=function(){O._vx.reset(),O._vy.reset(),fe.pause(),d&&d(O)},ye=function(){var je=O.deltaX=rm(K),ct=O.deltaY=rm(Me),Ne=Math.abs(je)>=r,tt=Math.abs(ct)>=r;F&&(Ne||tt)&&F(O,je,ct,K,Me),Ne&&(M&&O.deltaX>0&&M(O),R&&O.deltaX<0&&R(O),T&&T(O),I&&O.deltaX<0!=U<0&&I(O),U=O.deltaX,K[0]=K[1]=K[2]=0),tt&&(y&&O.deltaY>0&&y(O),C&&O.deltaY<0&&C(O),N&&N(O),G&&O.deltaY<0!=me<0&&G(O),me=O.deltaY,Me[0]=Me[1]=Me[2]=0),(E||w)&&(z&&z(O),w&&(p&&w===1&&p(O),b&&b(O),w=0),E=!1),ie&&!(ie=!1)&&Le&&Le(O),W&&(oe(O),W=!1),Ee=0},Te=function(je,ct,Ne){K[Ne]+=je,Me[Ne]+=ct,O._vx.update(je),O._vy.update(ct),c?Ee||(Ee=requestAnimationFrame(ye)):ye()},De=function(je,ct){ge&&!q&&(O.axis=q=Math.abs(je)>Math.abs(ct)?"x":"y",ie=!0),q!=="y"&&(K[2]+=je,O._vx.update(je,!0)),q!=="x"&&(Me[2]+=ct,O._vy.update(ct,!0)),c?Ee||(Ee=requestAnimationFrame(ye)):ye()},Ce=function(je){if(!Ae(je,1)){je=$a(je,u);var ct=je.clientX,Ne=je.clientY,tt=ct-O.x,Je=Ne-O.y,nt=O.isDragging;O.x=ct,O.y=Ne,(nt||(tt||Je)&&(Math.abs(O.startX-ct)>=s||Math.abs(O.startY-Ne)>=s))&&(w||(w=nt?2:1),nt||(O.isDragging=!0),De(tt,Je))}},Qe=O.onPress=function(ze){Ae(ze,1)||ze&&ze.button||(O.axis=q=null,fe.pause(),O.isPressed=!0,ze=$a(ze),U=me=0,O.startX=O.x=ze.clientX,O.startY=O.y=ze.clientY,O._vx.reset(),O._vy.reset(),jn(j?a:te,Zi[1],Ce,ce,!0),O.deltaX=O.deltaY=0,A&&A(O))},H=O.onRelease=function(ze){if(!Ae(ze,1)){Xn(j?a:te,Zi[1],Ce,!0);var je=!isNaN(O.y-O.startY),ct=O.isDragging,Ne=ct&&(Math.abs(O.x-O.startX)>3||Math.abs(O.y-O.startY)>3),tt=$a(ze);!Ne&&je&&(O._vx.reset(),O._vy.reset(),u&&le&&An.delayedCall(.08,function(){if(wl()-_e>300&&!ze.defaultPrevented){if(ze.target.click)ze.target.click();else if(te.createEvent){var Je=te.createEvent("MouseEvents");Je.initMouseEvent("click",!0,!0,Mi,1,tt.screenX,tt.screenY,tt.clientX,tt.clientY,!1,!1,!1,!1,0,null),ze.target.dispatchEvent(Je)}}})),O.isDragging=O.isGesturing=O.isPressed=!1,d&&ct&&!j&&fe.restart(!0),w&&ye(),m&&ct&&m(O),x&&x(O,Ne)}},we=function(je){return je.touches&&je.touches.length>1&&(O.isGesturing=!0)&&X(je,O.isDragging)},Se=function(){return(O.isGesturing=!1)||L(O)},Ie=function(je){if(!Ae(je)){var ct=J(),Ne=de();Te((ct-P)*Ve,(Ne-S)*Ve,1),P=ct,S=Ne,d&&fe.restart(!0)}},ve=function(je){if(!Ae(je)){je=$a(je,u),oe&&(W=!0);var ct=(je.deltaMode===1?l:je.deltaMode===2?Mi.innerHeight:1)*g;Te(je.deltaX*ct,je.deltaY*ct,0),d&&!j&&fe.restart(!0)}},ae=function(je){if(!Ae(je)){var ct=je.clientX,Ne=je.clientY,tt=ct-O.x,Je=Ne-O.y;O.x=ct,O.y=Ne,E=!0,d&&fe.restart(!0),(tt||Je)&&De(tt,Je)}},Ge=function(je){O.event=je,$(O)},Ze=function(je){O.event=je,V(O)},Mt=function(je){return Ae(je)||$a(je,u)&&Fe(O)};fe=O._dc=An.delayedCall(f||.25,xe).pause(),O.deltaX=O.deltaY=0,O._vx=ih(0,50,!0),O._vy=ih(0,50,!0),O.scrollX=J,O.scrollY=de,O.isDragging=O.isGesturing=O.isPressed=!1,Ix(this),O.enable=function(ze){return O.isEnabled||(jn(Z?te:a,"scroll",nh),o.indexOf("scroll")>=0&&jn(Z?te:a,"scroll",Ie,ce,ee),o.indexOf("wheel")>=0&&jn(a,"wheel",ve,ce,ee),(o.indexOf("touch")>=0&&Dx||o.indexOf("pointer")>=0)&&(jn(a,Zi[0],Qe,ce,ee),jn(te,Zi[2],H),jn(te,Zi[3],H),le&&jn(a,"click",He,!0,!0),Fe&&jn(a,"click",Mt),X&&jn(te,"gesturestart",we),L&&jn(te,"gestureend",Se),$&&jn(a,so+"enter",Ge),V&&jn(a,so+"leave",Ze),z&&jn(a,so+"move",ae)),O.isEnabled=!0,O.isDragging=O.isGesturing=O.isPressed=E=w=!1,O._vx.reset(),O._vy.reset(),P=J(),S=de(),ze&&ze.type&&Qe(ze),ue&&ue(O)),O},O.disable=function(){O.isEnabled&&(la.filter(function(ze){return ze!==O&&El(ze.target)}).length||Xn(Z?te:a,"scroll",nh),O.isPressed&&(O._vx.reset(),O._vy.reset(),Xn(j?a:te,Zi[1],Ce,!0)),Xn(Z?te:a,"scroll",Ie,ee),Xn(a,"wheel",ve,ee),Xn(a,Zi[0],Qe,ee),Xn(te,Zi[2],H),Xn(te,Zi[3],H),Xn(a,"click",He,!0),Xn(a,"click",Mt),Xn(te,"gesturestart",we),Xn(te,"gestureend",Se),Xn(a,so+"enter",Ge),Xn(a,so+"leave",Ze),Xn(a,so+"move",ae),O.isEnabled=O.isPressed=O.isDragging=!1,ke&&ke(O))},O.kill=O.revert=function(){O.disable();var ze=la.indexOf(O);ze>=0&&la.splice(ze,1),Yr===O&&(Yr=0)},la.push(O),j&&El(a)&&(Yr=O),O.enable(_)},AM(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n})();rn.version="3.15.0";rn.create=function(n){return new rn(n)};rn.register=Ox;rn.getAll=function(){return la.slice()};rn.getById=function(n){return la.filter(function(e){return e.vars.id===n})[0]};Ux()&&An.registerPlugin(rn);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var $e,ra,mt,It,bi,Ct,Fp,Hu,ql,Tl,al,bc,Fn,hd,rh,Kn,sm,om,sa,kx,Bd,Bx,qn,sh,zx,Vx,Ss,oh,Np,ba,Op,Al,ah,zd,Sc=1,Nn=Date.now,Vd=Nn(),Xi=0,ll=0,am=function(e,t,i){var r=vi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},lm=function(e,t){return t&&(!vi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},PM=function n(){return ll&&requestAnimationFrame(n)},cm=function(){return hd=1},um=function(){return hd=0},dr=function(e){return e},cl=function(e){return Math.round(e*1e5)/1e5||0},Hx=function(){return typeof window<"u"},Gx=function(){return $e||Hx()&&($e=window.gsap)&&$e.registerPlugin&&$e},Po=function(e){return!!~Fp.indexOf(e)},Wx=function(e){return(e==="Height"?Op:mt["inner"+e])||bi["client"+e]||Ct["client"+e]},Xx=function(e){return Is(e,"getBoundingClientRect")||(Po(e)?function(){return pu.width=mt.innerWidth,pu.height=Op,pu}:function(){return $r(e)})},DM=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Is(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?Wx(s):e["client"+s])||0}},LM=function(e,t){return!t||~Mr.indexOf(e)?Xx(e):function(){return pu}},xr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Is(e,i))?o()-Xx(e)()[s]:Po(e)?(bi[i]||Ct[i])-Wx(r):e[i]-e["offset"+r])},Mc=function(e,t){for(var i=0;i<sa.length;i+=3)(!t||~t.indexOf(sa[i+1]))&&e(sa[i],sa[i+1],sa[i+2])},vi=function(e){return typeof e=="string"},Bn=function(e){return typeof e=="function"},ul=function(e){return typeof e=="number"},oo=function(e){return typeof e=="object"},ja=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},zo=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},Vo=Math.abs,$x="left",jx="top",kp="right",Bp="bottom",Ao="width",Co="height",Cl="Right",Rl="Left",Pl="Top",Dl="Bottom",on="padding",Oi="margin",La="Width",zp="Height",fn="px",ki=function(e){return mt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},IM=function(e){var t=ki(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},dm=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},$r=function(e,t){var i=t&&ki(e)[rh]!=="matrix(1, 0, 0, 1, 0, 0)"&&$e.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},Gu=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},Yx=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},UM=function(e){return function(t){return $e.utils.snap(Yx(e),t)}},Vp=function(e){var t=$e.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},FM=function(e){return function(t,i){return Vp(Yx(e))(t,i.direction)}},wc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},bn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},yn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Ec=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},fm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Tc={toggleActions:"play",anticipatePin:0},Wu={top:0,left:0,center:.5,bottom:1,right:1},uu=function(e,t){if(vi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in Wu?Wu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ac=function(e,t,i,r,s,o,a,l){var c=s.startColor,u=s.endColor,d=s.fontSize,f=s.indent,h=s.fontWeight,g=It.createElement("div"),_=Po(i)||Is(i,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?Ct:i.tagName==="IFRAME"?i.contentDocument.body:i,b=e.indexOf("start")!==-1,A=b?c:u,x="border-color:"+A+";font-size:"+d+";color:"+A+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(x+=(r===pn?kp:Bp)+":"+(o+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=b,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=x,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+r.op.d2],du(g,0,r,b),g},du=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+La]=1,s["border"+a+La]=0,s[i.p]=t+"px",$e.set(e,s)},ht=[],lh={},Kl,hm=function(){return Nn()-Xi>34&&(Kl||(Kl=requestAnimationFrame(Zr)))},Ho=function(){(!qn||!qn.isPressed||qn.startX>Ct.clientWidth)&&(gt.cache++,qn?Kl||(Kl=requestAnimationFrame(Zr)):Zr(),Xi||Lo("scrollStart"),Xi=Nn())},Hd=function(){Vx=mt.innerWidth,zx=mt.innerHeight},dl=function(e){gt.cache++,(e===!0||!Fn&&!Bx&&!It.fullscreenElement&&!It.webkitFullscreenElement&&(!sh||Vx!==mt.innerWidth||Math.abs(mt.innerHeight-zx)>mt.innerHeight*.25))&&Hu.restart(!0)},Do={},NM=[],qx=function n(){return yn(pt,"scrollEnd",n)||_o(!0)},Lo=function(e){return Do[e]&&Do[e].map(function(t){return t()})||NM},xi=[],Kx=function(e){for(var t=0;t<xi.length;t+=5)(!e||xi[t+4]&&xi[t+4].query===e)&&(xi[t].style.cssText=xi[t+1],xi[t].getBBox&&xi[t].setAttribute("transform",xi[t+2]||""),xi[t+3].uncache=1)},Zx=function(){return gt.forEach(function(e){return Bn(e)&&++e.cacheID&&(e.rec=e())})},Hp=function(e,t){var i;for(Kn=0;Kn<ht.length;Kn++)i=ht[Kn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Al=!0,t&&Kx(t),t||Lo("revert")},Jx=function(e,t){gt.cache++,(t||!Zn)&&gt.forEach(function(i){return Bn(i)&&i.cacheID++&&(i.rec=0)}),vi(e)&&(mt.history.scrollRestoration=Np=e)},Zn,Ro=0,pm,OM=function(){if(pm!==Ro){var e=pm=Ro;requestAnimationFrame(function(){return e===Ro&&_o(!0)})}},Qx=function(){Ct.appendChild(ba),Op=!qn&&ba.offsetHeight||mt.innerHeight,Ct.removeChild(ba)},mm=function(e){return ql(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},_o=function(e,t){if(bi=It.documentElement,Ct=It.body,Fp=[mt,It,bi,Ct],Xi&&!e&&!Al){bn(pt,"scrollEnd",qx);return}Qx(),Zn=pt.isRefreshing=!0,Al||Zx();var i=Lo("refreshInit");kx&&pt.sort(),t||Hp(),gt.forEach(function(r){Bn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ht.slice(0).forEach(function(r){return r.refresh()}),Al=!1,ht.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),ah=1,mm(!0),ht.forEach(function(r){var s=xr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),mm(!1),ah=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),gt.forEach(function(r){Bn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Jx(Np,1),Hu.pause(),Ro++,Zn=2,Zr(2),ht.forEach(function(r){return Bn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Zn=pt.isRefreshing=!1,Lo("refresh")},ch=0,fu=1,Ll,Zr=function(e){if(e===2||!Zn&&!Al){pt.isUpdating=!0,Ll&&Ll.update(0);var t=ht.length,i=Nn(),r=i-Vd>=50,s=t&&ht[0].scroll();if(fu=ch>s?-1:1,Zn||(ch=s),r&&(Xi&&!hd&&i-Xi>200&&(Xi=0,Lo("scrollEnd")),al=Vd,Vd=i),fu<0){for(Kn=t;Kn-- >0;)ht[Kn]&&ht[Kn].update(0,r);fu=1}else for(Kn=0;Kn<t;Kn++)ht[Kn]&&ht[Kn].update(0,r);pt.isUpdating=!1}Kl=0},uh=[$x,jx,Bp,kp,Oi+Dl,Oi+Cl,Oi+Pl,Oi+Rl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],hu=uh.concat([Ao,Co,"boxSizing","max"+La,"max"+zp,"position",Oi,on,on+Pl,on+Cl,on+Dl,on+Rl]),kM=function(e,t,i){Sa(i);var r=e._gsap;if(r.spacerIsNative)Sa(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Gd=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=uh.length,o=t.style,a=e.style,l;s--;)l=uh[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Bp]=a[kp]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ao]=Gu(e,ti)+fn,o[Co]=Gu(e,pn)+fn,o[on]=a[Oi]=a[jx]=a[$x]="0",Sa(r),a[Ao]=a["max"+La]=i[Ao],a[Co]=a["max"+zp]=i[Co],a[on]=i[on],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},BM=/([A-Z])/g,Sa=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||$e.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(BM,"-$1").toLowerCase())}},Cc=function(e){for(var t=hu.length,i=e.style,r=[],s=0;s<t;s++)r.push(hu[s],i[hu[s]]);return r.t=e,r},zM=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},pu={left:0,top:0},gm=function(e,t,i,r,s,o,a,l,c,u,d,f,h,g){Bn(e)&&(e=e(l)),vi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?uu("0"+e.substr(3),i):0));var _=h?h.time():0,p,m,b;if(h&&h.seek(0),isNaN(e)||(e=+e),ul(e))h&&(e=$e.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),a&&du(a,i,r,!0);else{Bn(t)&&(t=t(l));var A=(e||"0").split(" "),x,M,R,C;b=oi(t,l)||Ct,x=$r(b)||{},(!x||!x.left&&!x.top)&&ki(b).display==="none"&&(C=b.style.display,b.style.display="block",x=$r(b),C?b.style.display=C:b.style.removeProperty("display")),M=uu(A[0],x[r.d]),R=uu(A[1]||"0",i),e=x[r.p]-c[r.p]-u+M+s-R,a&&du(a,R,r,i-R<20||a._isStart&&R>20),i-=i-R}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var y=e+i,T=o._isStart;p="scroll"+r.d2,du(o,y,r,T&&y>20||!T&&(d?Math.max(Ct[p],bi[p]):o.parentNode[p])<=y+1),d&&(c=$r(a),d&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+fn))}return h&&b&&(p=$r(b),h.seek(f),m=$r(b),h._caScrollDist=p[r.p]-m[r.p],e=e/h._caScrollDist*f),h&&h.seek(_),h?e:Math.round(e)},VM=/(webkit|moz|length|cssText|inset)/i,_m=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===Ct){e._stOrig=s.cssText,a=ki(e);for(o in a)!+o&&!VM.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;$e.core.getCache(e).uncache=1,t.appendChild(e)}},ev=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Rc=function(e,t,i){var r={};r[t.p]="+="+i,$e.set(e,r)},xm=function(e,t){var i=zs(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,d){var f=o.tween,h=l.onComplete,g={};c=c||i();var _=ev(i,c,function(){f.kill(),o.tween=0});return d=u&&d||0,u=u||a-c,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(c+u*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){gt.cache++,o.tween&&Zr()},l.onComplete=function(){o.tween=0,h&&h.call(f)},f=o.tween=$e.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},bn(e,"wheel",i.wheelHandler),pt.isTouch&&bn(e,"touchmove",i.wheelHandler),s},pt=(function(){function n(t,i){ra||n.register($e)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),oh(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ll){this.update=this.refresh=this.kill=dr;return}i=dm(vi(i)||ul(i)||i.nodeType?{trigger:i}:i,Tc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,f=s.trigger,h=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,b=s.onSnapComplete,A=s.once,x=s.snap,M=s.pinReparent,R=s.pinSpacer,C=s.containerAnimation,y=s.fastScrollEnd,T=s.preventOverlaps,N=i.horizontal||i.containerAnimation&&i.horizontal!==!1?ti:pn,F=!d&&d!==0,I=oi(i.scroller||mt),G=$e.core.getCache(I),$=Po(I),V=("pinType"in i?i.pinType:Is(I,"pinType")||$&&"fixed")==="fixed",z=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],k=F&&i.toggleActions.split(" "),j="markers"in i?i.markers:Tc.markers,X=$?0:parseFloat(ki(I)["border"+N.p2+La])||0,L=this,oe=i.onRefreshInit&&function(){return i.onRefreshInit(L)},ue=DM(I,$,N),ke=LM(I,$),Fe=0,Ve=0,ee=0,le=zs(I,N),ge,Le,Ee,fe,w,E,W,ie,q,O,U,me,ce,J,de,P,S,B,Z,te,K,Me,_e,He,Ae,xe,ye,Te,De,Ce,Qe,H,we,Se,Ie,ve,ae,Ge,Ze;if(L._startClamp=L._endClamp=!1,L._dir=N,p*=45,L.scroller=I,L.scroll=C?C.time.bind(C):le,fe=le(),L.vars=i,r=r||i.animation,"refreshPriority"in i&&(kx=1,i.refreshPriority===-9999&&(Ll=L)),G.tweenScroll=G.tweenScroll||{top:xm(I,pn),left:xm(I,ti)},L.tweenTo=ge=G.tweenScroll[N.p],L.scrubDuration=function(Ne){we=ul(Ne)&&Ne,we?H?H.duration(Ne):H=$e.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:we,paused:!0,onComplete:function(){return m&&m(L)}}):(H&&H.progress(1).kill(),H=0)},r&&(r.vars.lazy=!1,r._initted&&!L.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),L.animation=r.pause(),r.scrollTrigger=L,L.scrubDuration(d),Ce=0,l||(l=r.vars.id)),x&&((!oo(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in Ct.style&&$e.set($?[Ct,bi]:I,{scrollBehavior:"auto"}),gt.forEach(function(Ne){return Bn(Ne)&&Ne.target===($?It.scrollingElement||bi:I)&&(Ne.smooth=!1)}),Ee=Bn(x.snapTo)?x.snapTo:x.snapTo==="labels"?UM(r):x.snapTo==="labelsDirectional"?FM(r):x.directional!==!1?function(Ne,tt){return Vp(x.snapTo)(Ne,Nn()-Ve<500?0:tt.direction)}:$e.utils.snap(x.snapTo),Se=x.duration||{min:.1,max:2},Se=oo(Se)?Tl(Se.min,Se.max):Tl(Se,Se),Ie=$e.delayedCall(x.delay||we/2||.1,function(){var Ne=le(),tt=Nn()-Ve<500,Je=ge.tween;if((tt||Math.abs(L.getVelocity())<10)&&!Je&&!hd&&Fe!==Ne){var nt=(Ne-E)/J,Qt=r&&!F?r.totalProgress():nt,st=tt?0:(Qt-Qe)/(Nn()-al)*1e3||0,Wt=$e.utils.clamp(-nt,1-nt,Vo(st/2)*st/.185),cn=nt+(x.inertia===!1?0:Wt),Xt,Lt,At=x,Pn=At.onStart,Ht=At.onInterrupt,Dn=At.onComplete;if(Xt=Ee(cn,L),ul(Xt)||(Xt=cn),Lt=Math.max(0,Math.round(E+Xt*J)),Ne<=W&&Ne>=E&&Lt!==Ne){if(Je&&!Je._initted&&Je.data<=Vo(Lt-Ne))return;x.inertia===!1&&(Wt=Xt-nt),ge(Lt,{duration:Se(Vo(Math.max(Vo(cn-Qt),Vo(Xt-Qt))*.185/st/.05||0)),ease:x.ease||"power3",data:Vo(Lt-Ne),onInterrupt:function(){return Ie.restart(!0)&&Ht&&zo(L,Ht)},onComplete:function(){L.update(),Fe=le(),r&&!F&&(H?H.resetTo("totalProgress",Xt,r._tTime/r._tDur):r.progress(Xt)),Ce=Qe=r&&!F?r.totalProgress():L.progress,b&&b(L),Dn&&zo(L,Dn)}},Ne,Wt*J,Lt-Ne-Wt*J),Pn&&zo(L,Pn,ge.tween)}}else L.isActive&&Fe!==Ne&&Ie.restart(!0)}).pause()),l&&(lh[l]=L),f=L.trigger=oi(f||h!==!0&&h),Ze=f&&f._gsap&&f._gsap.stRevert,Ze&&(Ze=Ze(L)),h=h===!0?f:oi(h),vi(a)&&(a={targets:f,className:a}),h&&(g===!1||g===Oi||(g=!g&&h.parentNode&&h.parentNode.style&&ki(h.parentNode).display==="flex"?!1:on),L.pin=h,Le=$e.core.getCache(h),Le.spacer?de=Le.pinState:(R&&(R=oi(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),Le.spacerIsNative=!!R,R&&(Le.spacerState=Cc(R))),Le.spacer=B=R||It.createElement("div"),B.classList.add("pin-spacer"),l&&B.classList.add("pin-spacer-"+l),Le.pinState=de=Cc(h)),i.force3D!==!1&&$e.set(h,{force3D:!0}),L.spacer=B=Le.spacer,De=ki(h),He=De[g+N.os2],te=$e.getProperty(h),K=$e.quickSetter(h,N.a,fn),Gd(h,B,De),S=Cc(h)),j){me=oo(j)?dm(j,fm):fm,O=Ac("scroller-start",l,I,N,me,0),U=Ac("scroller-end",l,I,N,me,0,O),Z=O["offset"+N.op.d2];var Mt=oi(Is(I,"content")||I);ie=this.markerStart=Ac("start",l,Mt,N,me,Z,0,C),q=this.markerEnd=Ac("end",l,Mt,N,me,Z,0,C),C&&(Ge=$e.quickSetter([ie,q],N.a,fn)),!V&&!(Mr.length&&Is(I,"fixedMarkers")===!0)&&(IM($?Ct:I),$e.set([O,U],{force3D:!0}),xe=$e.quickSetter(O,N.a,fn),Te=$e.quickSetter(U,N.a,fn))}if(C){var ze=C.vars.onUpdate,je=C.vars.onUpdateParams;C.eventCallback("onUpdate",function(){L.update(0,0,1),ze&&ze.apply(C,je||[])})}if(L.previous=function(){return ht[ht.indexOf(L)-1]},L.next=function(){return ht[ht.indexOf(L)+1]},L.revert=function(Ne,tt){if(!tt)return L.kill(!0);var Je=Ne!==!1||!L.enabled,nt=Fn;Je!==L.isReverted&&(Je&&(ve=Math.max(le(),L.scroll.rec||0),ee=L.progress,ae=r&&r.progress()),ie&&[ie,q,O,U].forEach(function(Qt){return Qt.style.display=Je?"none":"block"}),Je&&(Fn=L,L.update(Je)),h&&(!M||!L.isActive)&&(Je?kM(h,B,de):Gd(h,B,ki(h),Ae)),Je||L.update(Je),Fn=nt,L.isReverted=Je)},L.refresh=function(Ne,tt,Je,nt){if(!((Fn||!L.enabled)&&!tt)){if(h&&Ne&&Xi){bn(n,"scrollEnd",qx);return}!Zn&&oe&&oe(L),Fn=L,ge.tween&&!Je&&(ge.tween.kill(),ge.tween=0),H&&H.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(We){return We.vars.immediateRender&&We.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Qt=ue(),st=ke(),Wt=C?C.duration():xr(I,N),cn=J<=.01||!J,Xt=0,Lt=nt||0,At=oo(Je)?Je.end:i.end,Pn=i.endTrigger||f,Ht=oo(Je)?Je.start:i.start||(i.start===0||!f?0:h?"0 0":"0 100%"),Dn=L.pinnedContainer=i.pinnedContainer&&oi(i.pinnedContainer,L),Di=f&&Math.max(0,ht.indexOf(L))||0,un=Di,dn,_n,Lr,Fo,D,Y,re,ne,Q,Re,Ue,Pe,Xe;for(j&&oo(Je)&&(Pe=$e.getProperty(O,N.p),Xe=$e.getProperty(U,N.p));un-- >0;)Y=ht[un],Y.end||Y.refresh(0,1)||(Fn=L),re=Y.pin,re&&(re===f||re===h||re===Dn)&&!Y.isReverted&&(Re||(Re=[]),Re.unshift(Y),Y.revert(!0,!0)),Y!==ht[un]&&(Di--,un--);for(Bn(Ht)&&(Ht=Ht(L)),Ht=am(Ht,"start",L),E=gm(Ht,f,Qt,N,le(),ie,O,L,st,X,V,Wt,C,L._startClamp&&"_startClamp")||(h?-.001:0),Bn(At)&&(At=At(L)),vi(At)&&!At.indexOf("+=")&&(~At.indexOf(" ")?At=(vi(Ht)?Ht.split(" ")[0]:"")+At:(Xt=uu(At.substr(2),Qt),At=vi(Ht)?Ht:(C?$e.utils.mapRange(0,C.duration(),C.scrollTrigger.start,C.scrollTrigger.end,E):E)+Xt,Pn=f)),At=am(At,"end",L),W=Math.max(E,gm(At||(Pn?"100% 0":Wt),Pn,Qt,N,le()+Xt,q,U,L,st,X,V,Wt,C,L._endClamp&&"_endClamp"))||-.001,Xt=0,un=Di;un--;)Y=ht[un]||{},re=Y.pin,re&&Y.start-Y._pinPush<=E&&!C&&Y.end>0&&(dn=Y.end-(L._startClamp?Math.max(0,Y.start):Y.start),(re===f&&Y.start-Y._pinPush<E||re===Dn)&&isNaN(Ht)&&(Xt+=dn*(1-Y.progress)),re===h&&(Lt+=dn));if(E+=Xt,W+=Xt,L._startClamp&&(L._startClamp+=Xt),L._endClamp&&!Zn&&(L._endClamp=W||-.001,W=Math.min(W,xr(I,N))),J=W-E||(E-=.01)&&.001,cn&&(ee=$e.utils.clamp(0,1,$e.utils.normalize(E,W,ve))),L._pinPush=Lt,ie&&Xt&&(dn={},dn[N.a]="+="+Xt,Dn&&(dn[N.p]="-="+le()),$e.set([ie,q],dn)),h&&!(ah&&L.end>=xr(I,N)))dn=ki(h),Fo=N===pn,Lr=le(),Me=parseFloat(te(N.a))+Lt,!Wt&&W>1&&(Ue=($?It.scrollingElement||bi:I).style,Ue={style:Ue,value:Ue["overflow"+N.a.toUpperCase()]},$&&ki(Ct)["overflow"+N.a.toUpperCase()]!=="scroll"&&(Ue.style["overflow"+N.a.toUpperCase()]="scroll")),Gd(h,B,dn),S=Cc(h),_n=$r(h,!0),ne=V&&zs(I,Fo?ti:pn)(),g?(Ae=[g+N.os2,J+Lt+fn],Ae.t=B,un=g===on?Gu(h,N)+J+Lt:0,un&&(Ae.push(N.d,un+fn),B.style.flexBasis!=="auto"&&(B.style.flexBasis=un+fn)),Sa(Ae),Dn&&ht.forEach(function(We){We.pin===Dn&&We.vars.pinSpacing!==!1&&(We._subPinOffset=!0)}),V&&le(ve)):(un=Gu(h,N),un&&B.style.flexBasis!=="auto"&&(B.style.flexBasis=un+fn)),V&&(D={top:_n.top+(Fo?Lr-E:ne)+fn,left:_n.left+(Fo?ne:Lr-E)+fn,boxSizing:"border-box",position:"fixed"},D[Ao]=D["max"+La]=Math.ceil(_n.width)+fn,D[Co]=D["max"+zp]=Math.ceil(_n.height)+fn,D[Oi]=D[Oi+Pl]=D[Oi+Cl]=D[Oi+Dl]=D[Oi+Rl]="0",D[on]=dn[on],D[on+Pl]=dn[on+Pl],D[on+Cl]=dn[on+Cl],D[on+Dl]=dn[on+Dl],D[on+Rl]=dn[on+Rl],P=zM(de,D,M),Zn&&le(0)),r?(Q=r._initted,Bd(1),r.render(r.duration(),!0,!0),_e=te(N.a)-Me+J+Lt,ye=Math.abs(J-_e)>1,V&&ye&&P.splice(P.length-2,2),r.render(0,!0,!0),Q||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Bd(0)):_e=J,Ue&&(Ue.value?Ue.style["overflow"+N.a.toUpperCase()]=Ue.value:Ue.style.removeProperty("overflow-"+N.a));else if(f&&le()&&!C)for(_n=f.parentNode;_n&&_n!==Ct;)_n._pinOffset&&(E-=_n._pinOffset,W-=_n._pinOffset),_n=_n.parentNode;Re&&Re.forEach(function(We){return We.revert(!1,!0)}),L.start=E,L.end=W,fe=w=Zn?ve:le(),!C&&!Zn&&(fe<ve&&le(ve),L.scroll.rec=0),L.revert(!1,!0),Ve=Nn(),Ie&&(Fe=-1,Ie.restart(!0)),Fn=0,r&&F&&(r._initted||ae)&&r.progress()!==ae&&r.progress(ae||0,!0).render(r.time(),!0,!0),(cn||ee!==L.progress||C||_||r&&!r._initted)&&(r&&!F&&(r._initted||ee||r.vars.immediateRender!==!1)&&r.totalProgress(C&&E<-.001&&!ee?$e.utils.normalize(E,W,0):ee,!0),L.progress=cn||(fe-E)/J===ee?0:ee),h&&g&&(B._pinOffset=Math.round(L.progress*_e)),H&&H.invalidate(),isNaN(Pe)||(Pe-=$e.getProperty(O,N.p),Xe-=$e.getProperty(U,N.p),Rc(O,N,Pe),Rc(ie,N,Pe-(nt||0)),Rc(U,N,Xe),Rc(q,N,Xe-(nt||0))),cn&&!Zn&&L.update(),u&&!Zn&&!ce&&(ce=!0,u(L),ce=!1)}},L.getVelocity=function(){return(le()-w)/(Nn()-al)*1e3||0},L.endAnimation=function(){ja(L.callbackAnimation),r&&(H?H.progress(1):r.paused()?F||ja(r,L.direction<0,1):ja(r,r.reversed()))},L.labelToScroll=function(Ne){return r&&r.labels&&(E||L.refresh()||E)+r.labels[Ne]/r.duration()*J||0},L.getTrailing=function(Ne){var tt=ht.indexOf(L),Je=L.direction>0?ht.slice(0,tt).reverse():ht.slice(tt+1);return(vi(Ne)?Je.filter(function(nt){return nt.vars.preventOverlaps===Ne}):Je).filter(function(nt){return L.direction>0?nt.end<=E:nt.start>=W})},L.update=function(Ne,tt,Je){if(!(C&&!Je&&!Ne)){var nt=Zn===!0?ve:L.scroll(),Qt=Ne?0:(nt-E)/J,st=Qt<0?0:Qt>1?1:Qt||0,Wt=L.progress,cn,Xt,Lt,At,Pn,Ht,Dn,Di;if(tt&&(w=fe,fe=C?le():nt,x&&(Qe=Ce,Ce=r&&!F?r.totalProgress():st)),p&&h&&!Fn&&!Sc&&Xi&&(!st&&E<nt+(nt-w)/(Nn()-al)*p?st=1e-4:st===1&&W>nt+(nt-w)/(Nn()-al)*p&&(st=.9999)),st!==Wt&&L.enabled){if(cn=L.isActive=!!st&&st<1,Xt=!!Wt&&Wt<1,Ht=cn!==Xt,Pn=Ht||!!st!=!!Wt,L.direction=st>Wt?1:-1,L.progress=st,Pn&&!Fn&&(Lt=st&&!Wt?0:st===1?1:Wt===1?2:3,F&&(At=!Ht&&k[Lt+1]!=="none"&&k[Lt+1]||k[Lt],Di=r&&(At==="complete"||At==="reset"||At in r))),T&&(Ht||Di)&&(Di||d||!r)&&(Bn(T)?T(L):L.getTrailing(T).forEach(function(Lr){return Lr.endAnimation()})),F||(H&&!Fn&&!Sc?(H._dp._time-H._start!==H._time&&H.render(H._dp._time-H._start),H.resetTo?H.resetTo("totalProgress",st,r._tTime/r._tDur):(H.vars.totalProgress=st,H.invalidate().restart())):r&&r.totalProgress(st,!!(Fn&&(Ve||Ne)))),h){if(Ne&&g&&(B.style[g+N.os2]=He),!V)K(cl(Me+_e*st));else if(Pn){if(Dn=!Ne&&st>Wt&&W+1>nt&&nt+1>=xr(I,N),M)if(!Ne&&(cn||Dn)){var un=$r(h,!0),dn=nt-E;_m(h,Ct,un.top+(N===pn?dn:0)+fn,un.left+(N===pn?0:dn)+fn)}else _m(h,B);Sa(cn||Dn?P:S),ye&&st<1&&cn||K(Me+(st===1&&!Dn?_e:0))}}x&&!ge.tween&&!Fn&&!Sc&&Ie.restart(!0),a&&(Ht||A&&st&&(st<1||!zd))&&ql(a.targets).forEach(function(Lr){return Lr.classList[cn||A?"add":"remove"](a.className)}),o&&!F&&!Ne&&o(L),Pn&&!Fn?(F&&(Di&&(At==="complete"?r.pause().totalProgress(1):At==="reset"?r.restart(!0).pause():At==="restart"?r.restart(!0):r[At]()),o&&o(L)),(Ht||!zd)&&(c&&Ht&&zo(L,c),z[Lt]&&zo(L,z[Lt]),A&&(st===1?L.kill(!1,1):z[Lt]=0),Ht||(Lt=st===1?1:3,z[Lt]&&zo(L,z[Lt]))),y&&!cn&&Math.abs(L.getVelocity())>(ul(y)?y:2500)&&(ja(L.callbackAnimation),H?H.progress(1):ja(r,At==="reverse"?1:!st,1))):F&&o&&!Fn&&o(L)}if(Te){var _n=C?nt/C.duration()*(C._caScrollDist||0):nt;xe(_n+(O._isFlipped?1:0)),Te(_n)}Ge&&Ge(-nt/C.duration()*(C._caScrollDist||0))}},L.enable=function(Ne,tt){L.enabled||(L.enabled=!0,bn(I,"resize",dl),$||bn(I,"scroll",Ho),oe&&bn(n,"refreshInit",oe),Ne!==!1&&(L.progress=ee=0,fe=w=Fe=le()),tt!==!1&&L.refresh())},L.getTween=function(Ne){return Ne&&ge?ge.tween:H},L.setPositions=function(Ne,tt,Je,nt){if(C){var Qt=C.scrollTrigger,st=C.duration(),Wt=Qt.end-Qt.start;Ne=Qt.start+Wt*Ne/st,tt=Qt.start+Wt*tt/st}L.refresh(!1,!1,{start:lm(Ne,Je&&!!L._startClamp),end:lm(tt,Je&&!!L._endClamp)},nt),L.update()},L.adjustPinSpacing=function(Ne){if(Ae&&Ne){var tt=Ae.indexOf(N.d)+1;Ae[tt]=parseFloat(Ae[tt])+Ne+fn,Ae[1]=parseFloat(Ae[1])+Ne+fn,Sa(Ae)}},L.disable=function(Ne,tt){if(Ne!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,tt||H&&H.pause(),ve=0,Le&&(Le.uncache=1),oe&&yn(n,"refreshInit",oe),Ie&&(Ie.pause(),ge.tween&&ge.tween.kill()&&(ge.tween=0)),!$)){for(var Je=ht.length;Je--;)if(ht[Je].scroller===I&&ht[Je]!==L)return;yn(I,"resize",dl),$||yn(I,"scroll",Ho)}},L.kill=function(Ne,tt){L.disable(Ne,tt),H&&!tt&&H.kill(),l&&delete lh[l];var Je=ht.indexOf(L);Je>=0&&ht.splice(Je,1),Je===Kn&&fu>0&&Kn--,Je=0,ht.forEach(function(nt){return nt.scroller===L.scroller&&(Je=1)}),Je||Zn||(L.scroll.rec=0),r&&(r.scrollTrigger=null,Ne&&r.revert({kill:!1}),tt||r.kill()),ie&&[ie,q,O,U].forEach(function(nt){return nt.parentNode&&nt.parentNode.removeChild(nt)}),Ll===L&&(Ll=0),h&&(Le&&(Le.uncache=1),Je=0,ht.forEach(function(nt){return nt.pin===h&&Je++}),Je||(Le.spacer=0)),i.onKill&&i.onKill(L)},ht.push(L),L.enable(!1,!1),Ze&&Ze(L),r&&r.add&&!J){var ct=L.update;L.update=function(){L.update=ct,gt.cache++,E||W||L.refresh()},$e.delayedCall(.01,L.update),J=.01,E=W=0}else L.refresh();h&&OM()},n.register=function(i){return ra||($e=i||Gx(),Hx()&&window.document&&n.enable(),ra=ll),ra},n.defaults=function(i){if(i)for(var r in i)Tc[r]=i[r];return Tc},n.disable=function(i,r){ll=0,ht.forEach(function(o){return o[r?"kill":"disable"](i)}),yn(mt,"wheel",Ho),yn(It,"scroll",Ho),clearInterval(bc),yn(It,"touchcancel",dr),yn(Ct,"touchstart",dr),wc(yn,It,"pointerdown,touchstart,mousedown",cm),wc(yn,It,"pointerup,touchend,mouseup",um),Hu.kill(),Mc(yn);for(var s=0;s<gt.length;s+=3)Ec(yn,gt[s],gt[s+1]),Ec(yn,gt[s],gt[s+2])},n.enable=function(){if(mt=window,It=document,bi=It.documentElement,Ct=It.body,$e){if(ql=$e.utils.toArray,Tl=$e.utils.clamp,oh=$e.core.context||dr,Bd=$e.core.suppressOverwrites||dr,Np=mt.history.scrollRestoration||"auto",ch=mt.pageYOffset||0,$e.core.globals("ScrollTrigger",n),Ct){ll=1,ba=document.createElement("div"),ba.style.height="100vh",ba.style.position="absolute",Qx(),PM(),rn.register($e),n.isTouch=rn.isTouch,Ss=rn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),sh=rn.isTouch===1,bn(mt,"wheel",Ho),Fp=[mt,It,bi,Ct],$e.matchMedia?(n.matchMedia=function(u){var d=$e.matchMedia(),f;for(f in u)d.add(f,u[f]);return d},$e.addEventListener("matchMediaInit",function(){Zx(),Hp()}),$e.addEventListener("matchMediaRevert",function(){return Kx()}),$e.addEventListener("matchMedia",function(){_o(0,1),Lo("matchMedia")}),$e.matchMedia().add("(orientation: portrait)",function(){return Hd(),Hd})):console.warn("Requires GSAP 3.11.0 or later"),Hd(),bn(It,"scroll",Ho);var i=Ct.hasAttribute("style"),r=Ct.style,s=r.borderTopStyle,o=$e.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=$r(Ct),pn.m=Math.round(a.top+pn.sc())||0,ti.m=Math.round(a.left+ti.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(Ct.setAttribute("style",""),Ct.removeAttribute("style")),bc=setInterval(hm,250),$e.delayedCall(.5,function(){return Sc=0}),bn(It,"touchcancel",dr),bn(Ct,"touchstart",dr),wc(bn,It,"pointerdown,touchstart,mousedown",cm),wc(bn,It,"pointerup,touchend,mouseup",um),rh=$e.utils.checkPrefix("transform"),hu.push(rh),ra=Nn(),Hu=$e.delayedCall(.2,_o).pause(),sa=[It,"visibilitychange",function(){var u=mt.innerWidth,d=mt.innerHeight;It.hidden?(sm=u,om=d):(sm!==u||om!==d)&&dl()},It,"DOMContentLoaded",_o,mt,"load",_o,mt,"resize",dl],Mc(bn),ht.forEach(function(u){return u.enable(0,1)}),l=0;l<gt.length;l+=3)Ec(yn,gt[l],gt[l+1]),Ec(yn,gt[l],gt[l+2])}else if(It){var c=function u(){n.enable(),It.removeEventListener("DOMContentLoaded",u)};It.addEventListener("DOMContentLoaded",c)}}},n.config=function(i){"limitCallbacks"in i&&(zd=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(bc)||(bc=r)&&setInterval(hm,r),"ignoreMobileResize"in i&&(sh=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Mc(yn)||Mc(bn,i.autoRefreshEvents||"none"),Bx=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=oi(i),o=gt.indexOf(s),a=Po(s);~o&&gt.splice(o,a?6:2),r&&(a?Mr.unshift(mt,r,Ct,r,bi,r):Mr.unshift(s,r))},n.clearMatchMedia=function(i){ht.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(vi(i)?oi(i):i).getBoundingClientRect(),a=o[s?Ao:Co]*r||0;return s?o.right-a>0&&o.left+a<mt.innerWidth:o.bottom-a>0&&o.top+a<mt.innerHeight},n.positionInViewport=function(i,r,s){vi(i)&&(i=oi(i));var o=i.getBoundingClientRect(),a=o[s?Ao:Co],l=r==null?a/2:r in Wu?Wu[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/mt.innerWidth:(o.top+l)/mt.innerHeight},n.killAll=function(i){if(ht.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Do.killAll||[];Do={},r.forEach(function(s){return s()})}},n})();pt.version="3.15.0";pt.saveStyles=function(n){return n?ql(n).forEach(function(e){if(e&&e.style){var t=xi.indexOf(e);t>=0&&xi.splice(t,5),xi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),$e.core.getCache(e),oh())}}):xi};pt.revert=function(n,e){return Hp(!n,e)};pt.create=function(n,e){return new pt(n,e)};pt.refresh=function(n){return n?dl(!0):(ra||pt.register())&&_o(!0)};pt.update=function(n){return++gt.cache&&Zr(n===!0?2:0)};pt.clearScrollMemory=Jx;pt.maxScroll=function(n,e){return xr(n,e?ti:pn)};pt.getScrollFunc=function(n,e){return zs(oi(n),e?ti:pn)};pt.getById=function(n){return lh[n]};pt.getAll=function(){return ht.filter(function(n){return n.vars.id!=="ScrollSmoother"})};pt.isScrolling=function(){return!!Xi};pt.snapDirectional=Vp;pt.addEventListener=function(n,e){var t=Do[n]||(Do[n]=[]);~t.indexOf(e)||t.push(e)};pt.removeEventListener=function(n,e){var t=Do[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};pt.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var d=[],f=[],h=$e.delayedCall(r,function(){u(d,f),d=[],f=[]}).pause();return function(g){d.length||h.restart(!0),d.push(g.trigger),f.push(g),s<=d.length&&h.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Bn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Bn(s)&&(s=s(),bn(pt,"refresh",function(){return s=e.batchMax()})),ql(n).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(pt.create(c))}),t};var vm=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Wd=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(rn.isTouch?" pinch-zoom":""):"none",e===bi&&n(Ct,t)},Pc={auto:1,scroll:1},HM=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||$e.core.getCache(s),a=Nn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Ct&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Pc[(l=ki(s)).overflowY]||Pc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Po(s)&&(Pc[(l=ki(s)).overflowY]||Pc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},tv=function(e,t,i,r){return rn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&HM,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&bn(It,rn.eventTypes[0],bm,!1,!0)},onDisable:function(){return yn(It,rn.eventTypes[0],bm,!0)}})},GM=/(input|label|select|textarea)/i,ym,bm=function(e){var t=GM.test(e.target.tagName);(t||ym)&&(e._gsapAllow=!0,ym=t)},WM=function(e){oo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=oi(e.target)||bi,u=$e.core.globals().ScrollSmoother,d=u&&u.get(),f=Ss&&(e.content&&oi(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=zs(c,pn),g=zs(c,ti),_=1,p=(rn.isTouch&&mt.visualViewport?mt.visualViewport.scale*mt.visualViewport.width:mt.outerWidth)/mt.innerWidth,m=0,b=Bn(r)?function(){return r(a)}:function(){return r||2.8},A,x,M=tv(c,e.type,!0,s),R=function(){return x=!1},C=dr,y=dr,T=function(){l=xr(c,pn),y=Tl(Ss?1:0,l),i&&(C=Tl(0,xr(c,ti))),A=Ro},N=function(){f._gsap.y=cl(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},F=function(){if(x){requestAnimationFrame(R);var j=cl(a.deltaY/2),X=y(h.v-j);if(f&&X!==h.v+h.offset){h.offset=X-h.v;var L=cl((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",f._gsap.y=L+"px",h.cacheID=gt.cache,Zr()}return!0}h.offset&&N(),x=!0},I,G,$,V,z=function(){T(),I.isActive()&&I.vars.scrollY>l&&(h()>l?I.progress(1)&&h(l):I.resetTo("scrollY",l))};return f&&$e.set(f,{y:"+=0"}),e.ignoreCheck=function(k){return Ss&&k.type==="touchmove"&&F()||_>1.05&&k.type!=="touchstart"||a.isGesturing||k.touches&&k.touches.length>1},e.onPress=function(){x=!1;var k=_;_=cl((mt.visualViewport&&mt.visualViewport.scale||1)/p),I.pause(),k!==_&&Wd(c,_>1.01?!0:i?!1:"x"),G=g(),$=h(),T(),A=Ro},e.onRelease=e.onGestureStart=function(k,j){if(h.offset&&N(),!j)V.restart(!0);else{gt.cache++;var X=b(),L,oe;i&&(L=g(),oe=L+X*.05*-k.velocityX/.227,X*=vm(g,L,oe,xr(c,ti)),I.vars.scrollX=C(oe)),L=h(),oe=L+X*.05*-k.velocityY/.227,X*=vm(h,L,oe,xr(c,pn)),I.vars.scrollY=y(oe),I.invalidate().duration(X).play(.01),(Ss&&I.vars.scrollY>=l||L>=l-1)&&$e.to({},{onUpdate:z,duration:X})}o&&o(k)},e.onWheel=function(){I._ts&&I.pause(),Nn()-m>1e3&&(A=0,m=Nn())},e.onChange=function(k,j,X,L,oe){if(Ro!==A&&T(),j&&i&&g(C(L[2]===j?G+(k.startX-k.x):g()+j-L[1])),X){h.offset&&N();var ue=oe[2]===X,ke=ue?$+k.startY-k.y:h()+X-oe[1],Fe=y(ke);ue&&ke!==Fe&&($+=Fe-ke),h(Fe)}(X||j)&&Zr()},e.onEnable=function(){Wd(c,i?!1:"x"),pt.addEventListener("refresh",z),bn(mt,"resize",z),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),M.enable()},e.onDisable=function(){Wd(c,!0),yn(mt,"resize",z),pt.removeEventListener("refresh",z),M.kill()},e.lockAxis=e.lockAxis!==!1,a=new rn(e),a.iOS=Ss,Ss&&!h()&&h(1),Ss&&$e.ticker.add(dr),V=a._dc,I=$e.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:ev(h,h(),function(){return I.pause()})},onUpdate:Zr,onComplete:V.vars.onComplete}),a};pt.sort=function(n){if(Bn(n))return ht.sort(n);var e=mt.pageYOffset||0;return pt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+mt.innerHeight}),ht.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};pt.observe=function(n){return new rn(n)};pt.normalizeScroll=function(n){if(typeof n>"u")return qn;if(n===!0&&qn)return qn.enable();if(n===!1){qn&&qn.kill(),qn=n;return}var e=n instanceof rn?n:WM(n);return qn&&qn.target===e.target&&qn.kill(),Po(e.target)&&(qn=e),e};pt.core={_getVelocityProp:ih,_inputObserver:tv,_scrollers:gt,_proxies:Mr,bridge:{ss:function(){Xi||Lo("scrollStart"),Xi=Nn()},ref:function(){return Fn}}};Gx()&&$e.registerPlugin(pt);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gp="183",XM=0,Sm=1,$M=2,mu=1,jM=2,fl=3,Vs=0,hi=1,jr=2,Jr=0,Ma=1,Mm=2,wm=3,Em=4,YM=5,fo=100,qM=101,KM=102,ZM=103,JM=104,QM=200,ew=201,tw=202,nw=203,dh=204,fh=205,iw=206,rw=207,sw=208,ow=209,aw=210,lw=211,cw=212,uw=213,dw=214,hh=0,ph=1,mh=2,Ia=3,gh=4,_h=5,xh=6,vh=7,nv=0,fw=1,hw=2,wr=0,iv=1,rv=2,sv=3,ov=4,av=5,lv=6,cv=7,uv=300,Io=301,Ua=302,Xd=303,$d=304,pd=306,yh=1e3,qr=1001,bh=1002,Cn=1003,pw=1004,Dc=1005,Vn=1006,jd=1007,xo=1008,Bi=1009,dv=1010,fv=1011,Zl=1012,Wp=1013,Pr=1014,vr=1015,ls=1016,Xp=1017,$p=1018,Jl=1020,hv=35902,pv=35899,mv=1021,gv=1022,er=1023,cs=1026,vo=1027,_v=1028,jp=1029,Fa=1030,Yp=1031,qp=1033,gu=33776,_u=33777,xu=33778,vu=33779,Sh=35840,Mh=35841,wh=35842,Eh=35843,Th=36196,Ah=37492,Ch=37496,Rh=37488,Ph=37489,Dh=37490,Lh=37491,Ih=37808,Uh=37809,Fh=37810,Nh=37811,Oh=37812,kh=37813,Bh=37814,zh=37815,Vh=37816,Hh=37817,Gh=37818,Wh=37819,Xh=37820,$h=37821,jh=36492,Yh=36494,qh=36495,Kh=36283,Zh=36284,Jh=36285,Qh=36286,mw=3200,gw=0,_w=1,ws="",Ni="srgb",Na="srgb-linear",Xu="linear",Ut="srgb",Go=7680,Tm=519,xw=512,vw=513,yw=514,Kp=515,bw=516,Sw=517,Zp=518,Mw=519,Am=35044,Cm="300 es",yr=2e3,$u=2001;function ww(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ju(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ew(){const n=ju("canvas");return n.style.display="block",n}const Rm={};function Pm(...n){const e="THREE."+n.shift();console.log(e,...n)}function xv(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function rt(...n){n=xv(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Et(...n){n=xv(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Yu(...n){const e=n.join(" ");e in Rm||(Rm[e]=!0,rt(...n))}function Tw(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Aw={[hh]:ph,[mh]:xh,[gh]:vh,[Ia]:_h,[ph]:hh,[xh]:mh,[vh]:gh,[_h]:Ia};class ka{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yd=Math.PI/180,ep=180/Math.PI;function ac(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[t&63|128]+In[t>>8&255]+"-"+In[t>>16&255]+In[t>>24&255]+In[i&255]+In[i>>8&255]+In[i>>16&255]+In[i>>24&255]).toLowerCase()}function vt(n,e,t){return Math.max(e,Math.min(t,n))}function Cw(n,e){return(n%e+e)%e}function qd(n,e,t){return(1-t)*n+t*e}function Ya(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ri(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class bt{constructor(e=0,t=0){bt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ba{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],g=s[o+2],_=s[o+3];if(d!==_||l!==f||c!==h||u!==g){let p=l*f+c*h+u*g+d*_;p<0&&(f=-f,h=-h,g=-g,_=-_,p=-p);let m=1-a;if(p<.9995){const b=Math.acos(p),A=Math.sin(b);m=Math.sin(m*b)/A,a=Math.sin(a*b)/A,l=l*m+f*a,c=c*m+h*a,u=u*m+g*a,d=d*m+_*a}else{l=l*m+f*a,c=c*m+h*a,u=u*m+g*a,d=d*m+_*a;const b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*d+l*h-c*f,e[t+1]=l*g+u*f+c*d-a*h,e[t+2]=c*g+u*h+a*f-l*d,e[t+3]=u*g-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"YZX":this._x=f*u*d+c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d-f*h*g;break;case"XZY":this._x=f*u*d-c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d+f*h*g;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,t=0,i=0){se.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kd.copy(this).projectOnVector(e),this.sub(Kd)}reflect(e){return this.sub(Kd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kd=new se,Dm=new Ba;class ut{constructor(e,t,i,r,s,o,a,l,c){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],_=r[0],p=r[3],m=r[6],b=r[1],A=r[4],x=r[7],M=r[2],R=r[5],C=r[8];return s[0]=o*_+a*b+l*M,s[3]=o*p+a*A+l*R,s[6]=o*m+a*x+l*C,s[1]=c*_+u*b+d*M,s[4]=c*p+u*A+d*R,s[7]=c*m+u*x+d*C,s[2]=f*_+h*b+g*M,s[5]=f*p+h*A+g*R,s[8]=f*m+h*x+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,h=c*s-o*l,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=h*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Zd.makeScale(e,t)),this}rotate(e){return this.premultiply(Zd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zd=new ut,Lm=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Im=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rw(){const n={enabled:!0,workingColorSpace:Na,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ut&&(r.r=Qr(r.r),r.g=Qr(r.g),r.b=Qr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ut&&(r.r=wa(r.r),r.g=wa(r.g),r.b=wa(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ws?Xu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Yu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Yu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Na]:{primaries:e,whitePoint:i,transfer:Xu,toXYZ:Lm,fromXYZ:Im,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ni},outputColorSpaceConfig:{drawingBufferColorSpace:Ni}},[Ni]:{primaries:e,whitePoint:i,transfer:Ut,toXYZ:Lm,fromXYZ:Im,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ni}}}),n}const St=Rw();function Qr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function wa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Wo;class Pw{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Wo===void 0&&(Wo=ju("canvas")),Wo.width=e.width,Wo.height=e.height;const r=Wo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Wo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ju("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Qr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Qr(t[i]/255)*255):t[i]=Qr(t[i]);return{data:t,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dw=0;class Jp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dw++}),this.uuid=ac(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Jd(r[o].image)):s.push(Jd(r[o]))}else s=Jd(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Jd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Pw.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let Lw=0;const Qd=new se;class ni extends ka{constructor(e=ni.DEFAULT_IMAGE,t=ni.DEFAULT_MAPPING,i=qr,r=qr,s=Vn,o=xo,a=er,l=Bi,c=ni.DEFAULT_ANISOTROPY,u=ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lw++}),this.uuid=ac(),this.name="",this.source=new Jp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qd).x}get height(){return this.source.getSize(Qd).y}get depth(){return this.source.getSize(Qd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){rt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){rt(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yh:e.x=e.x-Math.floor(e.x);break;case qr:e.x=e.x<0?0:1;break;case bh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yh:e.y=e.y-Math.floor(e.y);break;case qr:e.y=e.y<0?0:1;break;case bh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ni.DEFAULT_IMAGE=null;ni.DEFAULT_MAPPING=uv;ni.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,t=0,i=0,r=1){nn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,x=(h+1)/2,M=(m+1)/2,R=(u+f)/4,C=(d+_)/4,y=(g+p)/4;return A>x&&A>M?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=R/i,s=C/i):x>M?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=R/r,s=y/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=C/s,r=y/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(d-_)/b,this.z=(f-u)/b,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Iw extends ka{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new ni(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Jp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Er extends Iw{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vv extends ni{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uw extends ni{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ln{constructor(e,t,i,r,s,o,a,l,c,u,d,f,h,g,_,p){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,h,g,_,p)}set(e,t,i,r,s,o,a,l,c,u,d,f,h,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Xo.setFromMatrixColumn(e,0).length(),s=1/Xo.setFromMatrixColumn(e,1).length(),o=1/Xo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,h=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+h*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,g=c*u,_=c*d;t[0]=f+_*a,t[4]=g*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,g=c*u,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=g*c-h,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=h*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+_,t[5]=o*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fw,e,Nw)}lookAt(e,t,i){const r=this.elements;return gi.subVectors(e,t),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),gs.crossVectors(i,gi),gs.lengthSq()===0&&(Math.abs(i.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),gs.crossVectors(i,gi)),gs.normalize(),Lc.crossVectors(gi,gs),r[0]=gs.x,r[4]=Lc.x,r[8]=gi.x,r[1]=gs.y,r[5]=Lc.y,r[9]=gi.y,r[2]=gs.z,r[6]=Lc.z,r[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],_=i[6],p=i[10],m=i[14],b=i[3],A=i[7],x=i[11],M=i[15],R=r[0],C=r[4],y=r[8],T=r[12],N=r[1],F=r[5],I=r[9],G=r[13],$=r[2],V=r[6],z=r[10],k=r[14],j=r[3],X=r[7],L=r[11],oe=r[15];return s[0]=o*R+a*N+l*$+c*j,s[4]=o*C+a*F+l*V+c*X,s[8]=o*y+a*I+l*z+c*L,s[12]=o*T+a*G+l*k+c*oe,s[1]=u*R+d*N+f*$+h*j,s[5]=u*C+d*F+f*V+h*X,s[9]=u*y+d*I+f*z+h*L,s[13]=u*T+d*G+f*k+h*oe,s[2]=g*R+_*N+p*$+m*j,s[6]=g*C+_*F+p*V+m*X,s[10]=g*y+_*I+p*z+m*L,s[14]=g*T+_*G+p*k+m*oe,s[3]=b*R+A*N+x*$+M*j,s[7]=b*C+A*F+x*V+M*X,s[11]=b*y+A*I+x*z+M*L,s[15]=b*T+A*G+x*k+M*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],_=e[7],p=e[11],m=e[15],b=l*h-c*f,A=a*h-c*d,x=a*f-l*d,M=o*h-c*u,R=o*f-l*u,C=o*d-a*u;return t*(_*b-p*A+m*x)-i*(g*b-p*M+m*R)+r*(g*A-_*M+m*C)-s*(g*x-_*R+p*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],_=e[13],p=e[14],m=e[15],b=t*a-i*o,A=t*l-r*o,x=t*c-s*o,M=i*l-r*a,R=i*c-s*a,C=r*c-s*l,y=u*_-d*g,T=u*p-f*g,N=u*m-h*g,F=d*p-f*_,I=d*m-h*_,G=f*m-h*p,$=b*G-A*I+x*F+M*N-R*T+C*y;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/$;return e[0]=(a*G-l*I+c*F)*V,e[1]=(r*I-i*G-s*F)*V,e[2]=(_*C-p*R+m*M)*V,e[3]=(f*R-d*C-h*M)*V,e[4]=(l*N-o*G-c*T)*V,e[5]=(t*G-r*N+s*T)*V,e[6]=(p*x-g*C-m*A)*V,e[7]=(u*C-f*x+h*A)*V,e[8]=(o*I-a*N+c*y)*V,e[9]=(i*N-t*I-s*y)*V,e[10]=(g*R-_*x+m*b)*V,e[11]=(d*x-u*R-h*b)*V,e[12]=(a*T-o*F-l*y)*V,e[13]=(t*F-i*T+r*y)*V,e[14]=(_*A-g*M-p*b)*V,e[15]=(u*M-d*A+f*b)*V,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,h=s*u,g=s*d,_=o*u,p=o*d,m=a*d,b=l*c,A=l*u,x=l*d,M=i.x,R=i.y,C=i.z;return r[0]=(1-(_+m))*M,r[1]=(h+x)*M,r[2]=(g-A)*M,r[3]=0,r[4]=(h-x)*R,r[5]=(1-(f+m))*R,r[6]=(p+b)*R,r[7]=0,r[8]=(g+A)*C,r[9]=(p-b)*C,r[10]=(1-(f+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let o=Xo.set(r[0],r[1],r[2]).length();const a=Xo.set(r[4],r[5],r[6]).length(),l=Xo.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Yi.copy(this);const c=1/o,u=1/a,d=1/l;return Yi.elements[0]*=c,Yi.elements[1]*=c,Yi.elements[2]*=c,Yi.elements[4]*=u,Yi.elements[5]*=u,Yi.elements[6]*=u,Yi.elements[8]*=d,Yi.elements[9]*=d,Yi.elements[10]*=d,t.setFromRotationMatrix(Yi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=yr,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===yr)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===$u)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=yr,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===yr)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===$u)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Xo=new se,Yi=new ln,Fw=new se(0,0,0),Nw=new se(1,1,1),gs=new se,Lc=new se,gi=new se,Um=new ln,Fm=new Ba;class us{constructor(e=0,t=0,i=0,r=us.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Um.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Um,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fm.setFromEuler(this),this.setFromQuaternion(Fm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}us.DEFAULT_ORDER="XYZ";class yv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ow=0;const Nm=new se,$o=new Ba,Fr=new ln,Ic=new se,qa=new se,kw=new se,Bw=new Ba,Om=new se(1,0,0),km=new se(0,1,0),Bm=new se(0,0,1),zm={type:"added"},zw={type:"removed"},jo={type:"childadded",child:null},ef={type:"childremoved",child:null};class Ci extends ka{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ow++}),this.uuid=ac(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ci.DEFAULT_UP.clone();const e=new se,t=new us,i=new Ba,r=new se(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ln},normalMatrix:{value:new ut}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=Ci.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $o.setFromAxisAngle(e,t),this.quaternion.multiply($o),this}rotateOnWorldAxis(e,t){return $o.setFromAxisAngle(e,t),this.quaternion.premultiply($o),this}rotateX(e){return this.rotateOnAxis(Om,e)}rotateY(e){return this.rotateOnAxis(km,e)}rotateZ(e){return this.rotateOnAxis(Bm,e)}translateOnAxis(e,t){return Nm.copy(e).applyQuaternion(this.quaternion),this.position.add(Nm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Om,e)}translateY(e){return this.translateOnAxis(km,e)}translateZ(e){return this.translateOnAxis(Bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ic.copy(e):Ic.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fr.lookAt(qa,Ic,this.up):Fr.lookAt(Ic,qa,this.up),this.quaternion.setFromRotationMatrix(Fr),r&&(Fr.extractRotation(r.matrixWorld),$o.setFromRotationMatrix(Fr),this.quaternion.premultiply($o.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zm),jo.child=e,this.dispatchEvent(jo),jo.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zw),ef.child=e,this.dispatchEvent(ef),ef.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zm),jo.child=e,this.dispatchEvent(jo),jo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qa,e,kw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qa,Bw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ci.DEFAULT_UP=new se(0,1,0);Ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Uc extends Ci{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vw={type:"move"};class tf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Uc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const bv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_s={h:0,s:0,l:0},Fc={h:0,s:0,l:0};function nf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=St.workingColorSpace){return this.r=e,this.g=t,this.b=i,St.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=St.workingColorSpace){if(e=Cw(e,1),t=vt(t,0,1),i=vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=nf(o,s,e+1/3),this.g=nf(o,s,e),this.b=nf(o,s,e-1/3)}return St.colorSpaceToWorking(this,r),this}setStyle(e,t=Ni){function i(s){s!==void 0&&parseFloat(s)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:rt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ni){const i=bv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}copyLinearToSRGB(e){return this.r=wa(e.r),this.g=wa(e.g),this.b=wa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ni){return St.workingToColorSpace(Un.copy(this),e),Math.round(vt(Un.r*255,0,255))*65536+Math.round(vt(Un.g*255,0,255))*256+Math.round(vt(Un.b*255,0,255))}getHexString(e=Ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.workingToColorSpace(Un.copy(this),t);const i=Un.r,r=Un.g,s=Un.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=St.workingColorSpace){return St.workingToColorSpace(Un.copy(this),t),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=Ni){St.workingToColorSpace(Un.copy(this),e);const t=Un.r,i=Un.g,r=Un.b;return e!==Ni?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(_s),this.setHSL(_s.h+e,_s.s+t,_s.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_s),e.getHSL(Fc);const i=qd(_s.h,Fc.h,t),r=qd(_s.s,Fc.s,t),s=qd(_s.l,Fc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Ot;Ot.NAMES=bv;class Hw extends Ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new us,this.environmentIntensity=1,this.environmentRotation=new us,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const qi=new se,Nr=new se,rf=new se,Or=new se,Yo=new se,qo=new se,Vm=new se,sf=new se,of=new se,af=new se,lf=new nn,cf=new nn,uf=new nn;class Qi{constructor(e=new se,t=new se,i=new se){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qi.subVectors(e,t),r.cross(qi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){qi.subVectors(r,t),Nr.subVectors(i,t),rf.subVectors(e,t);const o=qi.dot(qi),a=qi.dot(Nr),l=qi.dot(rf),c=Nr.dot(Nr),u=Nr.dot(rf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Or)===null?!1:Or.x>=0&&Or.y>=0&&Or.x+Or.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Or)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Or.x),l.addScaledVector(o,Or.y),l.addScaledVector(a,Or.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return lf.setScalar(0),cf.setScalar(0),uf.setScalar(0),lf.fromBufferAttribute(e,t),cf.fromBufferAttribute(e,i),uf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(lf,s.x),o.addScaledVector(cf,s.y),o.addScaledVector(uf,s.z),o}static isFrontFacing(e,t,i,r){return qi.subVectors(i,t),Nr.subVectors(e,t),qi.cross(Nr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qi.subVectors(this.c,this.b),Nr.subVectors(this.a,this.b),qi.cross(Nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Qi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Qi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Yo.subVectors(r,i),qo.subVectors(s,i),sf.subVectors(e,i);const l=Yo.dot(sf),c=qo.dot(sf);if(l<=0&&c<=0)return t.copy(i);of.subVectors(e,r);const u=Yo.dot(of),d=qo.dot(of);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Yo,o);af.subVectors(e,s);const h=Yo.dot(af),g=qo.dot(af);if(g>=0&&h<=g)return t.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(qo,a);const p=u*g-h*d;if(p<=0&&d-u>=0&&h-g>=0)return Vm.subVectors(s,r),a=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(Vm,a);const m=1/(p+_+f);return o=_*m,a=f*m,t.copy(i).addScaledVector(Yo,o).addScaledVector(qo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class lc{constructor(e=new se(1/0,1/0,1/0),t=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ki):Ki.fromBufferAttribute(s,o),Ki.applyMatrix4(e.matrixWorld),this.expandByPoint(Ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nc.copy(i.boundingBox)),Nc.applyMatrix4(e.matrixWorld),this.union(Nc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ki),Ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ka),Oc.subVectors(this.max,Ka),Ko.subVectors(e.a,Ka),Zo.subVectors(e.b,Ka),Jo.subVectors(e.c,Ka),xs.subVectors(Zo,Ko),vs.subVectors(Jo,Zo),Zs.subVectors(Ko,Jo);let t=[0,-xs.z,xs.y,0,-vs.z,vs.y,0,-Zs.z,Zs.y,xs.z,0,-xs.x,vs.z,0,-vs.x,Zs.z,0,-Zs.x,-xs.y,xs.x,0,-vs.y,vs.x,0,-Zs.y,Zs.x,0];return!df(t,Ko,Zo,Jo,Oc)||(t=[1,0,0,0,1,0,0,0,1],!df(t,Ko,Zo,Jo,Oc))?!1:(kc.crossVectors(xs,vs),t=[kc.x,kc.y,kc.z],df(t,Ko,Zo,Jo,Oc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const kr=[new se,new se,new se,new se,new se,new se,new se,new se],Ki=new se,Nc=new lc,Ko=new se,Zo=new se,Jo=new se,xs=new se,vs=new se,Zs=new se,Ka=new se,Oc=new se,kc=new se,Js=new se;function df(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Js.fromArray(n,s);const a=r.x*Math.abs(Js.x)+r.y*Math.abs(Js.y)+r.z*Math.abs(Js.z),l=e.dot(Js),c=t.dot(Js),u=i.dot(Js);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const sn=new se,Bc=new bt;let Gw=0;class Tr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gw++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Am,this.updateRanges=[],this.gpuType=vr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Bc.fromBufferAttribute(this,t),Bc.applyMatrix3(e),this.setXY(t,Bc.x,Bc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ya(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ri(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ya(t,this.array)),t}setX(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ya(t,this.array)),t}setY(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ya(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ya(t,this.array)),t}setW(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ri(t,this.array),i=ri(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ri(t,this.array),i=ri(i,this.array),r=ri(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ri(t,this.array),i=ri(i,this.array),r=ri(r,this.array),s=ri(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Am&&(e.usage=this.usage),e}}class Sv extends Tr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Mv extends Tr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class es extends Tr{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Ww=new lc,Za=new se,ff=new se;class Qp{constructor(e=new se,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ww.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Za.subVectors(e,this.center);const t=Za.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Za,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ff.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Za.copy(e.center).add(ff)),this.expandByPoint(Za.copy(e.center).sub(ff))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Xw=0;const Ii=new ln,hf=new Ci,Qo=new se,_i=new lc,Ja=new lc,vn=new se;class fs extends ka{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xw++}),this.uuid=ac(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ww(e)?Mv:Sv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ut().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ii.makeRotationFromQuaternion(e),this.applyMatrix4(Ii),this}rotateX(e){return Ii.makeRotationX(e),this.applyMatrix4(Ii),this}rotateY(e){return Ii.makeRotationY(e),this.applyMatrix4(Ii),this}rotateZ(e){return Ii.makeRotationZ(e),this.applyMatrix4(Ii),this}translate(e,t,i){return Ii.makeTranslation(e,t,i),this.applyMatrix4(Ii),this}scale(e,t,i){return Ii.makeScale(e,t,i),this.applyMatrix4(Ii),this}lookAt(e){return hf.lookAt(e),hf.updateMatrix(),this.applyMatrix4(hf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qo).negate(),this.translate(Qo.x,Qo.y,Qo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new es(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];_i.setFromBufferAttribute(s),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qp);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const i=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ja.setFromBufferAttribute(a),this.morphTargetsRelative?(vn.addVectors(_i.min,Ja.min),_i.expandByPoint(vn),vn.addVectors(_i.max,Ja.max),_i.expandByPoint(vn)):(_i.expandByPoint(Ja.min),_i.expandByPoint(Ja.max))}_i.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)vn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(vn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)vn.fromBufferAttribute(a,c),l&&(Qo.fromBufferAttribute(e,c),vn.add(Qo)),r=Math.max(r,i.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new se,l[y]=new se;const c=new se,u=new se,d=new se,f=new bt,h=new bt,g=new bt,_=new se,p=new se;function m(y,T,N){c.fromBufferAttribute(i,y),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,N),f.fromBufferAttribute(s,y),h.fromBufferAttribute(s,T),g.fromBufferAttribute(s,N),u.sub(c),d.sub(c),h.sub(f),g.sub(f);const F=1/(h.x*g.y-g.x*h.y);isFinite(F)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(F),p.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(F),a[y].add(_),a[T].add(_),a[N].add(_),l[y].add(p),l[T].add(p),l[N].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let y=0,T=b.length;y<T;++y){const N=b[y],F=N.start,I=N.count;for(let G=F,$=F+I;G<$;G+=3)m(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const A=new se,x=new se,M=new se,R=new se;function C(y){M.fromBufferAttribute(r,y),R.copy(M);const T=a[y];A.copy(T),A.sub(M.multiplyScalar(M.dot(T))).normalize(),x.crossVectors(R,T);const F=x.dot(l[y])<0?-1:1;o.setXYZW(y,A.x,A.y,A.z,F)}for(let y=0,T=b.length;y<T;++y){const N=b[y],F=N.start,I=N.count;for(let G=F,$=F+I;G<$;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new se,s=new se,o=new se,a=new se,l=new se,c=new se,u=new se,d=new se;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let m=0;m<u;m++)f[g++]=c[h++]}return new Tr(f,u,d)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fs,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let $w=0;class md extends ka{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$w++}),this.uuid=ac(),this.name="",this.type="Material",this.blending=Ma,this.side=Vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dh,this.blendDst=fh,this.blendEquation=fo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Go,this.stencilZFail=Go,this.stencilZPass=Go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){rt(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){rt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ma&&(i.blending=this.blending),this.side!==Vs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dh&&(i.blendSrc=this.blendSrc),this.blendDst!==fh&&(i.blendDst=this.blendDst),this.blendEquation!==fo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ia&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Go&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Go&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Go&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Br=new se,pf=new se,zc=new se,ys=new se,mf=new se,Vc=new se,gf=new se;class jw{constructor(e=new se,t=new se(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Br)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Br.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Br.copy(this.origin).addScaledVector(this.direction,t),Br.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){pf.copy(e).add(t).multiplyScalar(.5),zc.copy(t).sub(e).normalize(),ys.copy(this.origin).sub(pf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(zc),a=ys.dot(this.direction),l=-ys.dot(zc),c=ys.lengthSq(),u=Math.abs(1-o*o);let d,f,h,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(pf).addScaledVector(zc,f),h}intersectSphere(e,t){Br.subVectors(e.center,this.origin);const i=Br.dot(this.direction),r=Br.dot(Br)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Br)!==null}intersectTriangle(e,t,i,r,s){mf.subVectors(t,e),Vc.subVectors(i,e),gf.crossVectors(mf,Vc);let o=this.direction.dot(gf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ys.subVectors(this.origin,e);const l=a*this.direction.dot(Vc.crossVectors(ys,Vc));if(l<0)return null;const c=a*this.direction.dot(mf.cross(ys));if(c<0||l+c>o)return null;const u=-a*ys.dot(gf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wv extends md{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new us,this.combine=nv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hm=new ln,Qs=new jw,Hc=new Qp,Gm=new se,Gc=new se,Wc=new se,Xc=new se,_f=new se,$c=new se,Wm=new se,jc=new se;class Dr extends Ci{constructor(e=new fs,t=new wv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){$c.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(_f.fromBufferAttribute(d,e),o?$c.addScaledVector(_f,u):$c.addScaledVector(_f.sub(t),u))}t.add($c)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hc.copy(i.boundingSphere),Hc.applyMatrix4(s),Qs.copy(e.ray).recast(e.near),!(Hc.containsPoint(Qs.origin)===!1&&(Qs.intersectSphere(Hc,Gm)===null||Qs.origin.distanceToSquared(Gm)>(e.far-e.near)**2))&&(Hm.copy(s).invert(),Qs.copy(e.ray).applyMatrix4(Hm),!(i.boundingBox!==null&&Qs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qs)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],b=Math.max(p.start,h.start),A=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let x=b,M=A;x<M;x+=3){const R=a.getX(x),C=a.getX(x+1),y=a.getX(x+2);r=Yc(this,m,e,i,c,u,d,R,C,y),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const b=a.getX(p),A=a.getX(p+1),x=a.getX(p+2);r=Yc(this,o,e,i,c,u,d,b,A,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],b=Math.max(p.start,h.start),A=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let x=b,M=A;x<M;x+=3){const R=x,C=x+1,y=x+2;r=Yc(this,m,e,i,c,u,d,R,C,y),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const b=p,A=p+1,x=p+2;r=Yc(this,o,e,i,c,u,d,b,A,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Yw(n,e,t,i,r,s,o,a){let l;if(e.side===hi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Vs,a),l===null)return null;jc.copy(a),jc.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(jc);return c<t.near||c>t.far?null:{distance:c,point:jc.clone(),object:n}}function Yc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Gc),n.getVertexPosition(l,Wc),n.getVertexPosition(c,Xc);const u=Yw(n,e,t,i,Gc,Wc,Xc,Wm);if(u){const d=new se;Qi.getBarycoord(Wm,Gc,Wc,Xc,d),r&&(u.uv=Qi.getInterpolatedAttribute(r,a,l,c,d,new bt)),s&&(u.uv1=Qi.getInterpolatedAttribute(s,a,l,c,d,new bt)),o&&(u.normal=Qi.getInterpolatedAttribute(o,a,l,c,d,new se),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new se,materialIndex:0};Qi.getNormal(Gc,Wc,Xc,f.normal),u.face=f,u.barycoord=d}return u}class qw extends ni{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Cn,u=Cn,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xf=new se,Kw=new se,Zw=new ut;class ao{constructor(e=new se(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=xf.subVectors(i,t).cross(Kw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(xf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Zw.getNormalMatrix(e),r=this.coplanarPoint(xf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const eo=new Qp,Jw=new bt(.5,.5),qc=new se;class Ev{constructor(e=new ao,t=new ao,i=new ao,r=new ao,s=new ao,o=new ao){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yr,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],g=s[8],_=s[9],p=s[10],m=s[11],b=s[12],A=s[13],x=s[14],M=s[15];if(r[0].setComponents(c-o,h-u,m-g,M-b).normalize(),r[1].setComponents(c+o,h+u,m+g,M+b).normalize(),r[2].setComponents(c+a,h+d,m+_,M+A).normalize(),r[3].setComponents(c-a,h-d,m-_,M-A).normalize(),i)r[4].setComponents(l,f,p,x).normalize(),r[5].setComponents(c-l,h-f,m-p,M-x).normalize();else if(r[4].setComponents(c-l,h-f,m-p,M-x).normalize(),t===yr)r[5].setComponents(c+l,h+f,m+p,M+x).normalize();else if(t===$u)r[5].setComponents(l,f,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),eo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),eo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(eo)}intersectsSprite(e){eo.center.set(0,0,0);const t=Jw.distanceTo(e.center);return eo.radius=.7071067811865476+t,eo.applyMatrix4(e.matrixWorld),this.intersectsSphere(eo)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(qc.x=r.normal.x>0?e.max.x:e.min.x,qc.y=r.normal.y>0?e.max.y:e.min.y,qc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tv extends ni{constructor(e=[],t=Io,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ql extends ni{constructor(e,t,i=Pr,r,s,o,a=Cn,l=Cn,c,u=cs,d=1){if(u!==cs&&u!==vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Qw extends Ql{constructor(e,t=Pr,i=Io,r,s,o=Cn,a=Cn,l,c=cs){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Av extends ni{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cc extends fs{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new es(c,3)),this.setAttribute("normal",new es(u,3)),this.setAttribute("uv",new es(d,2));function g(_,p,m,b,A,x,M,R,C,y,T){const N=x/C,F=M/y,I=x/2,G=M/2,$=R/2,V=C+1,z=y+1;let k=0,j=0;const X=new se;for(let L=0;L<z;L++){const oe=L*F-G;for(let ue=0;ue<V;ue++){const ke=ue*N-I;X[_]=ke*b,X[p]=oe*A,X[m]=$,c.push(X.x,X.y,X.z),X[_]=0,X[p]=0,X[m]=R>0?1:-1,u.push(X.x,X.y,X.z),d.push(ue/C),d.push(1-L/y),k+=1}}for(let L=0;L<y;L++)for(let oe=0;oe<C;oe++){const ue=f+oe+V*L,ke=f+oe+V*(L+1),Fe=f+(oe+1)+V*(L+1),Ve=f+(oe+1)+V*L;l.push(ue,ke,Ve),l.push(ke,Fe,Ve),j+=6}a.addGroup(h,j,T),h+=j,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class uc extends fs{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,h=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const b=m*f-o;for(let A=0;A<c;A++){const x=A*d-s;g.push(x,-b,0),_.push(0,0,1),p.push(A/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){const A=b+c*m,x=b+c*(m+1),M=b+1+c*(m+1),R=b+1+c*m;h.push(A,x,R),h.push(x,M,R)}this.setIndex(h),this.setAttribute("position",new es(g,3)),this.setAttribute("normal",new es(_,3)),this.setAttribute("uv",new es(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uc(e.width,e.height,e.widthSegments,e.heightSegments)}}function Oa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Yn(n){const e={};for(let t=0;t<n.length;t++){const i=Oa(n[t]);for(const r in i)e[r]=i[r]}return e}function eE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Cv(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const tE={clone:Oa,merge:Yn};var nE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rr extends md{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nE,this.fragmentShader=iE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oa(e.uniforms),this.uniformsGroups=eE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class rE extends rr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sE extends md{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oE extends md{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kc=new se,Zc=new Ba,ar=new se;class Rv extends Ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=yr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Kc,Zc,ar),ar.x===1&&ar.y===1&&ar.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kc,Zc,ar.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Kc,Zc,ar),ar.x===1&&ar.y===1&&ar.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kc,Zc,ar.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const bs=new se,Xm=new bt,$m=new bt;class Ji extends Rv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ep*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ep*2*Math.atan(Math.tan(Yd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bs.x,bs.y).multiplyScalar(-e/bs.z),bs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bs.x,bs.y).multiplyScalar(-e/bs.z)}getViewSize(e,t){return this.getViewBounds(e,Xm,$m),t.subVectors($m,Xm)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yd*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class e0 extends Rv{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ea=-90,ta=1;class aE extends Ci{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ji(ea,ta,e,t);r.layers=this.layers,this.add(r);const s=new Ji(ea,ta,e,t);s.layers=this.layers,this.add(s);const o=new Ji(ea,ta,e,t);o.layers=this.layers,this.add(o);const a=new Ji(ea,ta,e,t);a.layers=this.layers,this.add(a);const l=new Ji(ea,ta,e,t);l.layers=this.layers,this.add(l);const c=new Ji(ea,ta,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===yr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$u)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class lE extends Ji{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function jm(n,e,t,i){const r=cE(i);switch(t){case mv:return n*e;case _v:return n*e/r.components*r.byteLength;case jp:return n*e/r.components*r.byteLength;case Fa:return n*e*2/r.components*r.byteLength;case Yp:return n*e*2/r.components*r.byteLength;case gv:return n*e*3/r.components*r.byteLength;case er:return n*e*4/r.components*r.byteLength;case qp:return n*e*4/r.components*r.byteLength;case gu:case _u:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case xu:case vu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mh:case Eh:return Math.max(n,16)*Math.max(e,8)/4;case Sh:case wh:return Math.max(n,8)*Math.max(e,8)/2;case Th:case Ah:case Rh:case Ph:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ch:case Dh:case Lh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case kh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case zh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Xh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case $h:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case jh:case Yh:case qh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Kh:case Zh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Jh:case Qh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cE(n){switch(n){case Bi:case dv:return{byteLength:1,components:1};case Zl:case fv:case ls:return{byteLength:2,components:1};case Xp:case $p:return{byteLength:2,components:4};case Pr:case Wp:case vr:return{byteLength:4,components:1};case hv:case pv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gp}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Pv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function uE(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],_=d[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const _=d[h];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var dE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fE=`#ifdef USE_ALPHAHASH
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
#endif`,hE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_E=`#ifdef USE_AOMAP
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
#endif`,xE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vE=`#ifdef USE_BATCHING
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
#endif`,yE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,SE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ME=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wE=`#ifdef USE_IRIDESCENCE
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
#endif`,EE=`#ifdef USE_BUMPMAP
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
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,DE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,LE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,IE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,UE=`#define PI 3.141592653589793
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
} // validated`,FE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,NE=`vec3 transformedNormal = objectNormal;
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
#endif`,OE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VE="gl_FragColor = linearToOutputTexel( gl_FragColor );",HE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GE=`#ifdef USE_ENVMAP
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
#endif`,WE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,XE=`#ifdef USE_ENVMAP
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
#endif`,$E=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jE=`#ifdef USE_ENVMAP
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
#endif`,YE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JE=`#ifdef USE_GRADIENTMAP
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
}`,QE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nT=`uniform bool receiveShadow;
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
#endif`,iT=`#ifdef USE_ENVMAP
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
#endif`,rT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lT=`PhysicalMaterial material;
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
#endif`,cT=`uniform sampler2D dfgLUT;
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
}`,uT=`
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
#endif`,dT=`#if defined( RE_IndirectDiffuse )
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
#endif`,fT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_T=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yT=`#if defined( USE_POINTS_UV )
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
#endif`,bT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ST=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ET=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TT=`#ifdef USE_MORPHTARGETS
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
#endif`,AT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,RT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,PT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IT=`#ifdef USE_NORMALMAP
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
#endif`,UT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$T=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qT=`float getShadowMask() {
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
}`,KT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZT=`#ifdef USE_SKINNING
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
#endif`,JT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QT=`#ifdef USE_SKINNING
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
#endif`,e2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,r2=`#ifdef USE_TRANSMISSION
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
#endif`,s2=`#ifdef USE_TRANSMISSION
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
#endif`,o2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d2=`uniform sampler2D t2D;
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
}`,f2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,p2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g2=`#include <common>
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
}`,_2=`#if DEPTH_PACKING == 3200
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
}`,x2=`#define DISTANCE
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
}`,v2=`#define DISTANCE
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
}`,y2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S2=`uniform float scale;
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
}`,M2=`uniform vec3 diffuse;
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
}`,w2=`#include <common>
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
}`,E2=`uniform vec3 diffuse;
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
}`,T2=`#define LAMBERT
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
}`,A2=`#define LAMBERT
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
}`,C2=`#define MATCAP
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
}`,R2=`#define MATCAP
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
}`,P2=`#define NORMAL
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
}`,D2=`#define NORMAL
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
}`,L2=`#define PHONG
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
}`,I2=`#define PHONG
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
}`,U2=`#define STANDARD
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
}`,F2=`#define STANDARD
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
}`,N2=`#define TOON
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
}`,O2=`#define TOON
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
}`,k2=`uniform float size;
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
}`,B2=`uniform vec3 diffuse;
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
}`,z2=`#include <common>
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
}`,V2=`uniform vec3 color;
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
}`,H2=`uniform float rotation;
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
}`,G2=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:dE,alphahash_pars_fragment:fE,alphamap_fragment:hE,alphamap_pars_fragment:pE,alphatest_fragment:mE,alphatest_pars_fragment:gE,aomap_fragment:_E,aomap_pars_fragment:xE,batching_pars_vertex:vE,batching_vertex:yE,begin_vertex:bE,beginnormal_vertex:SE,bsdfs:ME,iridescence_fragment:wE,bumpmap_pars_fragment:EE,clipping_planes_fragment:TE,clipping_planes_pars_fragment:AE,clipping_planes_pars_vertex:CE,clipping_planes_vertex:RE,color_fragment:PE,color_pars_fragment:DE,color_pars_vertex:LE,color_vertex:IE,common:UE,cube_uv_reflection_fragment:FE,defaultnormal_vertex:NE,displacementmap_pars_vertex:OE,displacementmap_vertex:kE,emissivemap_fragment:BE,emissivemap_pars_fragment:zE,colorspace_fragment:VE,colorspace_pars_fragment:HE,envmap_fragment:GE,envmap_common_pars_fragment:WE,envmap_pars_fragment:XE,envmap_pars_vertex:$E,envmap_physical_pars_fragment:iT,envmap_vertex:jE,fog_vertex:YE,fog_pars_vertex:qE,fog_fragment:KE,fog_pars_fragment:ZE,gradientmap_pars_fragment:JE,lightmap_pars_fragment:QE,lights_lambert_fragment:eT,lights_lambert_pars_fragment:tT,lights_pars_begin:nT,lights_toon_fragment:rT,lights_toon_pars_fragment:sT,lights_phong_fragment:oT,lights_phong_pars_fragment:aT,lights_physical_fragment:lT,lights_physical_pars_fragment:cT,lights_fragment_begin:uT,lights_fragment_maps:dT,lights_fragment_end:fT,logdepthbuf_fragment:hT,logdepthbuf_pars_fragment:pT,logdepthbuf_pars_vertex:mT,logdepthbuf_vertex:gT,map_fragment:_T,map_pars_fragment:xT,map_particle_fragment:vT,map_particle_pars_fragment:yT,metalnessmap_fragment:bT,metalnessmap_pars_fragment:ST,morphinstance_vertex:MT,morphcolor_vertex:wT,morphnormal_vertex:ET,morphtarget_pars_vertex:TT,morphtarget_vertex:AT,normal_fragment_begin:CT,normal_fragment_maps:RT,normal_pars_fragment:PT,normal_pars_vertex:DT,normal_vertex:LT,normalmap_pars_fragment:IT,clearcoat_normal_fragment_begin:UT,clearcoat_normal_fragment_maps:FT,clearcoat_pars_fragment:NT,iridescence_pars_fragment:OT,opaque_fragment:kT,packing:BT,premultiplied_alpha_fragment:zT,project_vertex:VT,dithering_fragment:HT,dithering_pars_fragment:GT,roughnessmap_fragment:WT,roughnessmap_pars_fragment:XT,shadowmap_pars_fragment:$T,shadowmap_pars_vertex:jT,shadowmap_vertex:YT,shadowmask_pars_fragment:qT,skinbase_vertex:KT,skinning_pars_vertex:ZT,skinning_vertex:JT,skinnormal_vertex:QT,specularmap_fragment:e2,specularmap_pars_fragment:t2,tonemapping_fragment:n2,tonemapping_pars_fragment:i2,transmission_fragment:r2,transmission_pars_fragment:s2,uv_pars_fragment:o2,uv_pars_vertex:a2,uv_vertex:l2,worldpos_vertex:c2,background_vert:u2,background_frag:d2,backgroundCube_vert:f2,backgroundCube_frag:h2,cube_vert:p2,cube_frag:m2,depth_vert:g2,depth_frag:_2,distance_vert:x2,distance_frag:v2,equirect_vert:y2,equirect_frag:b2,linedashed_vert:S2,linedashed_frag:M2,meshbasic_vert:w2,meshbasic_frag:E2,meshlambert_vert:T2,meshlambert_frag:A2,meshmatcap_vert:C2,meshmatcap_frag:R2,meshnormal_vert:P2,meshnormal_frag:D2,meshphong_vert:L2,meshphong_frag:I2,meshphysical_vert:U2,meshphysical_frag:F2,meshtoon_vert:N2,meshtoon_frag:O2,points_vert:k2,points_frag:B2,shadow_vert:z2,shadow_frag:V2,sprite_vert:H2,sprite_frag:G2},Be={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},pr={basic:{uniforms:Yn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Yn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Yn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Yn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Yn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Ot(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Yn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Yn([Be.points,Be.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Yn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Yn([Be.common,Be.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Yn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Yn([Be.sprite,Be.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:Yn([Be.common,Be.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:Yn([Be.lights,Be.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};pr.physical={uniforms:Yn([pr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Jc={r:0,b:0,g:0},to=new us,W2=new ln;function X2(n,e,t,i,r,s){const o=new Ot(0);let a=r===!0?0:1,l,c,u=null,d=0,f=null;function h(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){const x=b.backgroundBlurriness>0;A=e.get(A,x)}return A}function g(b){let A=!1;const x=h(b);x===null?p(o,a):x&&x.isColor&&(p(x,1),A=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(b,A){const x=h(A);x&&(x.isCubeTexture||x.mapping===pd)?(c===void 0&&(c=new Dr(new cc(1,1,1),new rr({name:"BackgroundCubeMaterial",uniforms:Oa(pr.backgroundCube.uniforms),vertexShader:pr.backgroundCube.vertexShader,fragmentShader:pr.backgroundCube.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),to.copy(A.backgroundRotation),to.x*=-1,to.y*=-1,to.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(to.y*=-1,to.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(W2.makeRotationFromEuler(to)),c.material.toneMapped=St.getTransfer(x.colorSpace)!==Ut,(u!==x||d!==x.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Dr(new uc(2,2),new rr({name:"BackgroundMaterial",uniforms:Oa(pr.background.uniforms),vertexShader:pr.background.vertexShader,fragmentShader:pr.background.fragmentShader,side:Vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=St.getTransfer(x.colorSpace)!==Ut,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,A){b.getRGB(Jc,Cv(n)),t.buffers.color.setClear(Jc.r,Jc.g,Jc.b,A,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,A=1){o.set(b),a=A,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,p(o,a)},render:g,addToRenderList:_,dispose:m}}function $2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(F,I,G,$,V){let z=!1;const k=d(F,$,G,I);s!==k&&(s=k,c(s.object)),z=h(F,$,G,V),z&&g(F,$,G,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,x(F,I,G,$),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(F){return n.bindVertexArray(F)}function u(F){return n.deleteVertexArray(F)}function d(F,I,G,$){const V=$.wireframe===!0;let z=i[I.id];z===void 0&&(z={},i[I.id]=z);const k=F.isInstancedMesh===!0?F.id:0;let j=z[k];j===void 0&&(j={},z[k]=j);let X=j[G.id];X===void 0&&(X={},j[G.id]=X);let L=X[V];return L===void 0&&(L=f(l()),X[V]=L),L}function f(F){const I=[],G=[],$=[];for(let V=0;V<t;V++)I[V]=0,G[V]=0,$[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:G,attributeDivisors:$,object:F,attributes:{},index:null}}function h(F,I,G,$){const V=s.attributes,z=I.attributes;let k=0;const j=G.getAttributes();for(const X in j)if(j[X].location>=0){const oe=V[X];let ue=z[X];if(ue===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&(ue=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&(ue=F.instanceColor)),oe===void 0||oe.attribute!==ue||ue&&oe.data!==ue.data)return!0;k++}return s.attributesNum!==k||s.index!==$}function g(F,I,G,$){const V={},z=I.attributes;let k=0;const j=G.getAttributes();for(const X in j)if(j[X].location>=0){let oe=z[X];oe===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&(oe=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&(oe=F.instanceColor));const ue={};ue.attribute=oe,oe&&oe.data&&(ue.data=oe.data),V[X]=ue,k++}s.attributes=V,s.attributesNum=k,s.index=$}function _(){const F=s.newAttributes;for(let I=0,G=F.length;I<G;I++)F[I]=0}function p(F){m(F,0)}function m(F,I){const G=s.newAttributes,$=s.enabledAttributes,V=s.attributeDivisors;G[F]=1,$[F]===0&&(n.enableVertexAttribArray(F),$[F]=1),V[F]!==I&&(n.vertexAttribDivisor(F,I),V[F]=I)}function b(){const F=s.newAttributes,I=s.enabledAttributes;for(let G=0,$=I.length;G<$;G++)I[G]!==F[G]&&(n.disableVertexAttribArray(G),I[G]=0)}function A(F,I,G,$,V,z,k){k===!0?n.vertexAttribIPointer(F,I,G,V,z):n.vertexAttribPointer(F,I,G,$,V,z)}function x(F,I,G,$){_();const V=$.attributes,z=G.getAttributes(),k=I.defaultAttributeValues;for(const j in z){const X=z[j];if(X.location>=0){let L=V[j];if(L===void 0&&(j==="instanceMatrix"&&F.instanceMatrix&&(L=F.instanceMatrix),j==="instanceColor"&&F.instanceColor&&(L=F.instanceColor)),L!==void 0){const oe=L.normalized,ue=L.itemSize,ke=e.get(L);if(ke===void 0)continue;const Fe=ke.buffer,Ve=ke.type,ee=ke.bytesPerElement,le=Ve===n.INT||Ve===n.UNSIGNED_INT||L.gpuType===Wp;if(L.isInterleavedBufferAttribute){const ge=L.data,Le=ge.stride,Ee=L.offset;if(ge.isInstancedInterleavedBuffer){for(let fe=0;fe<X.locationSize;fe++)m(X.location+fe,ge.meshPerAttribute);F.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let fe=0;fe<X.locationSize;fe++)p(X.location+fe);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let fe=0;fe<X.locationSize;fe++)A(X.location+fe,ue/X.locationSize,Ve,oe,Le*ee,(Ee+ue/X.locationSize*fe)*ee,le)}else{if(L.isInstancedBufferAttribute){for(let ge=0;ge<X.locationSize;ge++)m(X.location+ge,L.meshPerAttribute);F.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let ge=0;ge<X.locationSize;ge++)p(X.location+ge);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let ge=0;ge<X.locationSize;ge++)A(X.location+ge,ue/X.locationSize,Ve,oe,ue*ee,ue/X.locationSize*ge*ee,le)}}else if(k!==void 0){const oe=k[j];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(X.location,oe);break;case 3:n.vertexAttrib3fv(X.location,oe);break;case 4:n.vertexAttrib4fv(X.location,oe);break;default:n.vertexAttrib1fv(X.location,oe)}}}}b()}function M(){T();for(const F in i){const I=i[F];for(const G in I){const $=I[G];for(const V in $){const z=$[V];for(const k in z)u(z[k].object),delete z[k];delete $[V]}}delete i[F]}}function R(F){if(i[F.id]===void 0)return;const I=i[F.id];for(const G in I){const $=I[G];for(const V in $){const z=$[V];for(const k in z)u(z[k].object),delete z[k];delete $[V]}}delete i[F.id]}function C(F){for(const I in i){const G=i[I];for(const $ in G){const V=G[$];if(V[F.id]===void 0)continue;const z=V[F.id];for(const k in z)u(z[k].object),delete z[k];delete V[F.id]}}}function y(F){for(const I in i){const G=i[I],$=F.isInstancedMesh===!0?F.id:0,V=G[$];if(V!==void 0){for(const z in V){const k=V[z];for(const j in k)u(k[j].object),delete k[j];delete V[z]}delete G[$],Object.keys(G).length===0&&delete i[I]}}}function T(){N(),o=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:N,dispose:M,releaseStatesOfGeometry:R,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function j2(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,i,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Y2(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==er&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const y=C===ls&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Bi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==vr&&!y)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(rt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:x,maxSamples:M,samples:R}}function q2(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ao,a=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const b=s?0:i,A=b*4;let x=m.clippingState||null;l.value=x,x=u(g,f,A,h);for(let M=0;M!==A;++M)x[M]=t[M];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=h+_*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let A=0,x=h;A!==_;++A,x+=4)o.copy(d[A]).applyMatrix4(b,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const Ps=4,Ym=[.125,.215,.35,.446,.526,.582],ho=20,K2=256,Qa=new e0,qm=new Ot;let vf=null,yf=0,bf=0,Sf=!1;const Z2=new se;class Km{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=Z2}=s;vf=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),bf=this._renderer.getActiveMipmapLevel(),Sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vf,yf,bf),this._renderer.xr.enabled=Sf,e.scissorTest=!1,na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Io||e.mapping===Ua?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vf=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),bf=this._renderer.getActiveMipmapLevel(),Sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:ls,format:er,colorSpace:Na,depthBuffer:!1},r=Zm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zm(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=J2(s)),this._blurMaterial=eA(s,e,t),this._ggxMaterial=Q2(s,e,t)}return r}_compileMaterial(e){const t=new Dr(new fs,e);this._renderer.compile(t,Qa)}_sceneToCubeUV(e,t,i,r,s){const l=new Ji(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(qm),d.toneMapping=wr,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dr(new cc,new wv({name:"PMREM.Background",side:hi,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let m=!1;const b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,m=!0):(p.color.copy(qm),m=!0);for(let A=0;A<6;A++){const x=A%3;x===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[A],s.y,s.z)):x===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[A]));const M=this._cubeSize;na(r,x*M,A>2?M:0,M,M),d.setRenderTarget(r),m&&d.render(_,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Io||e.mapping===Ua;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;na(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Qa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,h=d*f,{_lodMax:g}=this,_=this._sizeLods[i],p=3*_*(i>g-Ps?i-g+Ps:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=g-t,na(s,p,m,3*_,2*_),r.setRenderTarget(s),r.render(a,Qa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,na(e,p,m,3*_,2*_),r.setRenderTarget(e),r.render(a,Qa)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*ho-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):ho;p>ho&&rt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ho}`);const m=[];let b=0;for(let C=0;C<ho;++C){const y=C/_,T=Math.exp(-y*y/2);m.push(T),C===0?b+=T:C<p&&(b+=2*T)}for(let C=0;C<m.length;C++)m[C]=m[C]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:A}=this;f.dTheta.value=g,f.mipInt.value=A-i;const x=this._sizeLods[r],M=3*x*(r>A-Ps?r-A+Ps:0),R=4*(this._cubeSize-x);na(t,M,R,3*x,2*x),l.setRenderTarget(t),l.render(d,Qa)}}function J2(n){const e=[],t=[],i=[];let r=n;const s=n-Ps+1+Ym.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Ps?l=Ym[o-n+Ps-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,_=3,p=2,m=1,b=new Float32Array(_*g*h),A=new Float32Array(p*g*h),x=new Float32Array(m*g*h);for(let R=0;R<h;R++){const C=R%3*2/3-1,y=R>2?0:-1,T=[C,y,0,C+2/3,y,0,C+2/3,y+1,0,C,y,0,C+2/3,y+1,0,C,y+1,0];b.set(T,_*g*R),A.set(f,p*g*R);const N=[R,R,R,R,R,R];x.set(N,m*g*R)}const M=new fs;M.setAttribute("position",new Tr(b,_)),M.setAttribute("uv",new Tr(A,p)),M.setAttribute("faceIndex",new Tr(x,m)),i.push(new Dr(M,null)),r>Ps&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Zm(n,e,t){const i=new Er(n,e,t);return i.texture.mapping=pd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function na(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Q2(n,e,t){return new rr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:K2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gd(),fragmentShader:`

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
		`,blending:Jr,depthTest:!1,depthWrite:!1})}function eA(n,e,t){const i=new Float32Array(ho),r=new se(0,1,0);return new rr({name:"SphericalGaussianBlur",defines:{n:ho,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gd(),fragmentShader:`

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
		`,blending:Jr,depthTest:!1,depthWrite:!1})}function Jm(){return new rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gd(),fragmentShader:`

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
		`,blending:Jr,depthTest:!1,depthWrite:!1})}function Qm(){return new rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jr,depthTest:!1,depthWrite:!1})}function gd(){return`

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
	`}class Dv extends Er{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Tv(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new cc(5,5,5),s=new rr({name:"CubemapFromEquirect",uniforms:Oa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hi,blending:Jr});s.uniforms.tEquirect.value=t;const o=new Dr(r,s),a=t.minFilter;return t.minFilter===xo&&(t.minFilter=Vn),new aE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function tA(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?o(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Xd||h===$d)if(e.has(f)){const g=e.get(f).texture;return a(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const _=new Dv(g.height);return _.fromEquirectangularTexture(n,f),e.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const h=f.mapping,g=h===Xd||h===$d,_=h===Io||h===Ua;if(g||_){let p=t.get(f);const m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new Km(n)),p=g?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const b=f.image;return g&&b&&b.height>0||_&&b&&l(b)?(i===null&&(i=new Km(n)),p=g?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,h){return h===Xd?f.mapping=Io:h===$d&&(f.mapping=Ua),f}function l(f){let h=0;const g=6;for(let _=0;_<g;_++)f[_]!==void 0&&h++;return h===g}function c(f){const h=f.target;h.removeEventListener("dispose",c);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function nA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Yu("WebGLRenderer: "+i+" extension not supported."),r}}}function iA(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(h!==null){const b=h.array;_=h.version;for(let A=0,x=b.length;A<x;A+=3){const M=b[A+0],R=b[A+1],C=b[A+2];f.push(M,R,R,C,C,M)}}else{const b=g.array;_=g.version;for(let A=0,x=b.length/3-1;A<x;A+=3){const M=A+0,R=A+1,C=A+2;f.push(M,R,R,C,C,M)}}const p=new(g.count>=65535?Mv:Sv)(f,1);p.version=_;const m=s.get(d);m&&e.remove(m),s.set(d,p)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function rA(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function c(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,f*o,g),t.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,g);let p=0;for(let m=0;m<g;m++)p+=h[m];t.update(p,i,1)}function d(f,h,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,h[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,_,0,g);let m=0;for(let b=0;b<g;b++)m+=h[b]*_[b];t.update(m,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function sA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Et("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function oA(n,e,t){const i=new WeakMap,r=new nn;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let N=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",N)};var h=N;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),p===!0&&(x=3);let M=a.attributes.position.count*x,R=1;M>e.maxTextureSize&&(R=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const C=new Float32Array(M*R*4*d),y=new vv(C,M,R,d);y.type=vr,y.needsUpdate=!0;const T=x*4;for(let F=0;F<d;F++){const I=m[F],G=b[F],$=A[F],V=M*R*4*F;for(let z=0;z<I.count;z++){const k=z*T;g===!0&&(r.fromBufferAttribute(I,z),C[V+k+0]=r.x,C[V+k+1]=r.y,C[V+k+2]=r.z,C[V+k+3]=0),_===!0&&(r.fromBufferAttribute(G,z),C[V+k+4]=r.x,C[V+k+5]=r.y,C[V+k+6]=r.z,C[V+k+7]=0),p===!0&&(r.fromBufferAttribute($,z),C[V+k+8]=r.x,C[V+k+9]=r.y,C[V+k+10]=r.z,C[V+k+11]=$.itemSize===4?r.w:1)}}f={count:d,texture:y,size:new bt(M,R)},i.set(a,f),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function aA(n,e,t,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const lA={[iv]:"LINEAR_TONE_MAPPING",[rv]:"REINHARD_TONE_MAPPING",[sv]:"CINEON_TONE_MAPPING",[ov]:"ACES_FILMIC_TONE_MAPPING",[lv]:"AGX_TONE_MAPPING",[cv]:"NEUTRAL_TONE_MAPPING",[av]:"CUSTOM_TONE_MAPPING"};function cA(n,e,t,i,r){const s=new Er(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),o=new Er(e,t,{type:ls,depthBuffer:!1,stencilBuffer:!1}),a=new fs;a.setAttribute("position",new es([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new es([0,2,0,0,2,0],2));const l=new rE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Dr(a,l),u=new e0(-1,1,1,-1,0,1);let d=null,f=null,h=!1,g,_=null,p=[],m=!1;this.setSize=function(b,A){s.setSize(b,A),o.setSize(b,A);for(let x=0;x<p.length;x++){const M=p[x];M.setSize&&M.setSize(b,A)}},this.setEffects=function(b){p=b,m=p.length>0&&p[0].isRenderPass===!0;const A=s.width,x=s.height;for(let M=0;M<p.length;M++){const R=p[M];R.setSize&&R.setSize(A,x)}},this.begin=function(b,A){if(h||b.toneMapping===wr&&p.length===0)return!1;if(_=A,A!==null){const x=A.width,M=A.height;(s.width!==x||s.height!==M)&&this.setSize(x,M)}return m===!1&&b.setRenderTarget(s),g=b.toneMapping,b.toneMapping=wr,!0},this.hasRenderPass=function(){return m},this.end=function(b,A){b.toneMapping=g,h=!0;let x=s,M=o;for(let R=0;R<p.length;R++){const C=p[R];if(C.enabled!==!1&&(C.render(b,M,x,A),C.needsSwap!==!1)){const y=x;x=M,M=y}}if(d!==b.outputColorSpace||f!==b.toneMapping){d=b.outputColorSpace,f=b.toneMapping,l.defines={},St.getTransfer(d)===Ut&&(l.defines.SRGB_TRANSFER="");const R=lA[f];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(_),b.render(c,u),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Lv=new ni,tp=new Ql(1,1),Iv=new vv,Uv=new Uw,Fv=new Tv,eg=[],tg=[],ng=new Float32Array(16),ig=new Float32Array(9),rg=new Float32Array(4);function za(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=eg[r];if(s===void 0&&(s=new Float32Array(r),eg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function mn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _d(n,e){let t=tg[e];t===void 0&&(t=new Int32Array(e),tg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function uA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2fv(this.addr,e),gn(t,e)}}function fA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;n.uniform3fv(this.addr,e),gn(t,e)}}function hA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4fv(this.addr,e),gn(t,e)}}function pA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;rg.set(i),n.uniformMatrix2fv(this.addr,!1,rg),gn(t,i)}}function mA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;ig.set(i),n.uniformMatrix3fv(this.addr,!1,ig),gn(t,i)}}function gA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;ng.set(i),n.uniformMatrix4fv(this.addr,!1,ng),gn(t,i)}}function _A(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2iv(this.addr,e),gn(t,e)}}function vA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;n.uniform3iv(this.addr,e),gn(t,e)}}function yA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4iv(this.addr,e),gn(t,e)}}function bA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function SA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2uiv(this.addr,e),gn(t,e)}}function MA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;n.uniform3uiv(this.addr,e),gn(t,e)}}function wA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4uiv(this.addr,e),gn(t,e)}}function EA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(tp.compareFunction=t.isReversedDepthBuffer()?Zp:Kp,s=tp):s=Lv,t.setTexture2D(e||s,r)}function TA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Uv,r)}function AA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Fv,r)}function CA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Iv,r)}function RA(n){switch(n){case 5126:return uA;case 35664:return dA;case 35665:return fA;case 35666:return hA;case 35674:return pA;case 35675:return mA;case 35676:return gA;case 5124:case 35670:return _A;case 35667:case 35671:return xA;case 35668:case 35672:return vA;case 35669:case 35673:return yA;case 5125:return bA;case 36294:return SA;case 36295:return MA;case 36296:return wA;case 35678:case 36198:case 36298:case 36306:case 35682:return EA;case 35679:case 36299:case 36307:return TA;case 35680:case 36300:case 36308:case 36293:return AA;case 36289:case 36303:case 36311:case 36292:return CA}}function PA(n,e){n.uniform1fv(this.addr,e)}function DA(n,e){const t=za(e,this.size,2);n.uniform2fv(this.addr,t)}function LA(n,e){const t=za(e,this.size,3);n.uniform3fv(this.addr,t)}function IA(n,e){const t=za(e,this.size,4);n.uniform4fv(this.addr,t)}function UA(n,e){const t=za(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function FA(n,e){const t=za(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function NA(n,e){const t=za(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function OA(n,e){n.uniform1iv(this.addr,e)}function kA(n,e){n.uniform2iv(this.addr,e)}function BA(n,e){n.uniform3iv(this.addr,e)}function zA(n,e){n.uniform4iv(this.addr,e)}function VA(n,e){n.uniform1uiv(this.addr,e)}function HA(n,e){n.uniform2uiv(this.addr,e)}function GA(n,e){n.uniform3uiv(this.addr,e)}function WA(n,e){n.uniform4uiv(this.addr,e)}function XA(n,e,t){const i=this.cache,r=e.length,s=_d(t,r);mn(i,s)||(n.uniform1iv(this.addr,s),gn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=tp:o=Lv;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function $A(n,e,t){const i=this.cache,r=e.length,s=_d(t,r);mn(i,s)||(n.uniform1iv(this.addr,s),gn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Uv,s[o])}function jA(n,e,t){const i=this.cache,r=e.length,s=_d(t,r);mn(i,s)||(n.uniform1iv(this.addr,s),gn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Fv,s[o])}function YA(n,e,t){const i=this.cache,r=e.length,s=_d(t,r);mn(i,s)||(n.uniform1iv(this.addr,s),gn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Iv,s[o])}function qA(n){switch(n){case 5126:return PA;case 35664:return DA;case 35665:return LA;case 35666:return IA;case 35674:return UA;case 35675:return FA;case 35676:return NA;case 5124:case 35670:return OA;case 35667:case 35671:return kA;case 35668:case 35672:return BA;case 35669:case 35673:return zA;case 5125:return VA;case 36294:return HA;case 36295:return GA;case 36296:return WA;case 35678:case 36198:case 36298:case 36306:case 35682:return XA;case 35679:case 36299:case 36307:return $A;case 35680:case 36300:case 36308:case 36293:return jA;case 36289:case 36303:case 36311:case 36292:return YA}}class KA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=RA(t.type)}}class ZA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qA(t.type)}}class JA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Mf=/(\w+)(\])?(\[|\.)?/g;function sg(n,e){n.seq.push(e),n.map[e.id]=e}function QA(n,e,t){const i=n.name,r=i.length;for(Mf.lastIndex=0;;){const s=Mf.exec(i),o=Mf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){sg(t,c===void 0?new KA(a,n,e):new ZA(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new JA(a),sg(t,d)),t=d}}}class yu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);QA(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function og(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const eC=37297;let tC=0;function nC(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const ag=new ut;function iC(n){St._getMatrix(ag,St.workingColorSpace,n);const e=`mat3( ${ag.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(n)){case Xu:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function lg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+nC(n.getShaderSource(e),a)}else return s}function rC(n,e){const t=iC(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const sC={[iv]:"Linear",[rv]:"Reinhard",[sv]:"Cineon",[ov]:"ACESFilmic",[lv]:"AgX",[cv]:"Neutral",[av]:"Custom"};function oC(n,e){const t=sC[e];return t===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qc=new se;function aC(){St.getLuminanceCoefficients(Qc);const n=Qc.x.toFixed(4),e=Qc.y.toFixed(4),t=Qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hl).join(`
`)}function cC(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function uC(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function hl(n){return n!==""}function cg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ug(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dC=/^[ \t]*#include +<([\w\d./]+)>/gm;function np(n){return n.replace(dC,hC)}const fC=new Map;function hC(n,e){let t=dt[e];if(t===void 0){const i=fC.get(e);if(i!==void 0)t=dt[i],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return np(t)}const pC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dg(n){return n.replace(pC,mC)}function mC(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fg(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const gC={[mu]:"SHADOWMAP_TYPE_PCF",[fl]:"SHADOWMAP_TYPE_VSM"};function _C(n){return gC[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xC={[Io]:"ENVMAP_TYPE_CUBE",[Ua]:"ENVMAP_TYPE_CUBE",[pd]:"ENVMAP_TYPE_CUBE_UV"};function vC(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":xC[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const yC={[Ua]:"ENVMAP_MODE_REFRACTION"};function bC(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":yC[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const SC={[nv]:"ENVMAP_BLENDING_MULTIPLY",[fw]:"ENVMAP_BLENDING_MIX",[hw]:"ENVMAP_BLENDING_ADD"};function MC(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":SC[n.combine]||"ENVMAP_BLENDING_NONE"}function wC(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function EC(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=_C(t),c=vC(t),u=bC(t),d=MC(t),f=wC(t),h=lC(t),g=cC(s),_=r.createProgram();let p,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hl).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hl).join(`
`),m.length>0&&(m+=`
`)):(p=[fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hl).join(`
`),m=[fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wr?"#define TONE_MAPPING":"",t.toneMapping!==wr?dt.tonemapping_pars_fragment:"",t.toneMapping!==wr?oC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,rC("linearToOutputTexel",t.outputColorSpace),aC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hl).join(`
`)),o=np(o),o=cg(o,t),o=ug(o,t),a=np(a),a=cg(a,t),a=ug(a,t),o=dg(o),a=dg(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const A=b+p+o,x=b+m+a,M=og(r,r.VERTEX_SHADER,A),R=og(r,r.FRAGMENT_SHADER,x);r.attachShader(_,M),r.attachShader(_,R),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(F){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(_)||"",G=r.getShaderInfoLog(M)||"",$=r.getShaderInfoLog(R)||"",V=I.trim(),z=G.trim(),k=$.trim();let j=!0,X=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,M,R);else{const L=lg(r,M,"vertex"),oe=lg(r,R,"fragment");Et("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+V+`
`+L+`
`+oe)}else V!==""?rt("WebGLProgram: Program Info Log:",V):(z===""||k==="")&&(X=!1);X&&(F.diagnostics={runnable:j,programLog:V,vertexShader:{log:z,prefix:p},fragmentShader:{log:k,prefix:m}})}r.deleteShader(M),r.deleteShader(R),y=new yu(r,_),T=uC(r,_)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(_,eC)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tC++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=R,this}let TC=0;class AC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new CC(e),t.set(e,i)),i}}class CC{constructor(e){this.id=TC++,this.code=e,this.usedTimes=0}}function RC(n,e,t,i,r,s){const o=new yv,a=new AC,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,T,N,F,I){const G=F.fog,$=I.geometry,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,k=e.get(y.envMap||V,z),j=k&&k.mapping===pd?k.image.height:null,X=h[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&rt("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const L=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,oe=L!==void 0?L.length:0;let ue=0;$.morphAttributes.position!==void 0&&(ue=1),$.morphAttributes.normal!==void 0&&(ue=2),$.morphAttributes.color!==void 0&&(ue=3);let ke,Fe,Ve,ee;if(X){const ze=pr[X];ke=ze.vertexShader,Fe=ze.fragmentShader}else ke=y.vertexShader,Fe=y.fragmentShader,a.update(y),Ve=a.getVertexShaderID(y),ee=a.getFragmentShaderID(y);const le=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),Le=I.isInstancedMesh===!0,Ee=I.isBatchedMesh===!0,fe=!!y.map,w=!!y.matcap,E=!!k,W=!!y.aoMap,ie=!!y.lightMap,q=!!y.bumpMap,O=!!y.normalMap,U=!!y.displacementMap,me=!!y.emissiveMap,ce=!!y.metalnessMap,J=!!y.roughnessMap,de=y.anisotropy>0,P=y.clearcoat>0,S=y.dispersion>0,B=y.iridescence>0,Z=y.sheen>0,te=y.transmission>0,K=de&&!!y.anisotropyMap,Me=P&&!!y.clearcoatMap,_e=P&&!!y.clearcoatNormalMap,He=P&&!!y.clearcoatRoughnessMap,Ae=B&&!!y.iridescenceMap,xe=B&&!!y.iridescenceThicknessMap,ye=Z&&!!y.sheenColorMap,Te=Z&&!!y.sheenRoughnessMap,De=!!y.specularMap,Ce=!!y.specularColorMap,Qe=!!y.specularIntensityMap,H=te&&!!y.transmissionMap,we=te&&!!y.thicknessMap,Se=!!y.gradientMap,Ie=!!y.alphaMap,ve=y.alphaTest>0,ae=!!y.alphaHash,Ge=!!y.extensions;let Ze=wr;y.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Ze=n.toneMapping);const Mt={shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:ke,fragmentShader:Fe,defines:y.defines,customVertexShaderID:Ve,customFragmentShaderID:ee,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ee,batchingColor:Ee&&I._colorsTexture!==null,instancing:Le,instancingColor:Le&&I.instanceColor!==null,instancingMorph:Le&&I.morphTexture!==null,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Na,alphaToCoverage:!!y.alphaToCoverage,map:fe,matcap:w,envMap:E,envMapMode:E&&k.mapping,envMapCubeUVHeight:j,aoMap:W,lightMap:ie,bumpMap:q,normalMap:O,displacementMap:U,emissiveMap:me,normalMapObjectSpace:O&&y.normalMapType===_w,normalMapTangentSpace:O&&y.normalMapType===gw,metalnessMap:ce,roughnessMap:J,anisotropy:de,anisotropyMap:K,clearcoat:P,clearcoatMap:Me,clearcoatNormalMap:_e,clearcoatRoughnessMap:He,dispersion:S,iridescence:B,iridescenceMap:Ae,iridescenceThicknessMap:xe,sheen:Z,sheenColorMap:ye,sheenRoughnessMap:Te,specularMap:De,specularColorMap:Ce,specularIntensityMap:Qe,transmission:te,transmissionMap:H,thicknessMap:we,gradientMap:Se,opaque:y.transparent===!1&&y.blending===Ma&&y.alphaToCoverage===!1,alphaMap:Ie,alphaTest:ve,alphaHash:ae,combine:y.combine,mapUv:fe&&g(y.map.channel),aoMapUv:W&&g(y.aoMap.channel),lightMapUv:ie&&g(y.lightMap.channel),bumpMapUv:q&&g(y.bumpMap.channel),normalMapUv:O&&g(y.normalMap.channel),displacementMapUv:U&&g(y.displacementMap.channel),emissiveMapUv:me&&g(y.emissiveMap.channel),metalnessMapUv:ce&&g(y.metalnessMap.channel),roughnessMapUv:J&&g(y.roughnessMap.channel),anisotropyMapUv:K&&g(y.anisotropyMap.channel),clearcoatMapUv:Me&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:_e&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(y.sheenRoughnessMap.channel),specularMapUv:De&&g(y.specularMap.channel),specularColorMapUv:Ce&&g(y.specularColorMap.channel),specularIntensityMapUv:Qe&&g(y.specularIntensityMap.channel),transmissionMapUv:H&&g(y.transmissionMap.channel),thicknessMapUv:we&&g(y.thicknessMap.channel),alphaMapUv:Ie&&g(y.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(O||de),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!$.attributes.uv&&(fe||Ie),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||$.attributes.normal===void 0&&O===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ge,skinning:I.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ue,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,decodeVideoTexture:fe&&y.map.isVideoTexture===!0&&St.getTransfer(y.map.colorSpace)===Ut,decodeVideoTextureEmissive:me&&y.emissiveMap.isVideoTexture===!0&&St.getTransfer(y.emissiveMap.colorSpace)===Ut,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===jr,flipSided:y.side===hi,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ge&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&y.extensions.multiDraw===!0||Ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function p(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)T.push(N),T.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(m(T,y),b(T,y),T.push(n.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function m(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function b(y,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),y.push(o.mask)}function A(y){const T=h[y.type];let N;if(T){const F=pr[T];N=tE.clone(F.uniforms)}else N=y.uniforms;return N}function x(y,T){let N=u.get(T);return N!==void 0?++N.usedTimes:(N=new EC(n,T,y,r),c.push(N),u.set(T,N)),N}function M(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function R(y){a.remove(y)}function C(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:A,acquireProgram:x,releaseProgram:M,releaseShaderCache:R,programs:c,dispose:C}}function PC(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function DC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function hg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function pg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,g,_,p,m){let b=n[e];return b===void 0?(b={id:f.id,object:f,geometry:h,material:g,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:m},n[e]=b):(b.id=f.id,b.object=f,b.geometry=h,b.material=g,b.materialVariant=o(f),b.groupOrder=_,b.renderOrder=f.renderOrder,b.z=p,b.group=m),e++,b}function l(f,h,g,_,p,m){const b=a(f,h,g,_,p,m);g.transmission>0?i.push(b):g.transparent===!0?r.push(b):t.push(b)}function c(f,h,g,_,p,m){const b=a(f,h,g,_,p,m);g.transmission>0?i.unshift(b):g.transparent===!0?r.unshift(b):t.unshift(b)}function u(f,h){t.length>1&&t.sort(f||DC),i.length>1&&i.sort(h||hg),r.length>1&&r.sort(h||hg)}function d(){for(let f=e,h=n.length;f<h;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function LC(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new pg,n.set(i,[o])):r>=s.length?(o=new pg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function IC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new se,color:new Ot};break;case"SpotLight":t={position:new se,direction:new se,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new se,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new se,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":t={color:new Ot,position:new se,halfWidth:new se,halfHeight:new se};break}return n[e.id]=t,t}}}function UC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let FC=0;function NC(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function OC(n){const e=new IC,t=UC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new se);const r=new se,s=new ln,o=new ln;function a(c){let u=0,d=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let h=0,g=0,_=0,p=0,m=0,b=0,A=0,x=0,M=0,R=0,C=0;c.sort(NC);for(let T=0,N=c.length;T<N;T++){const F=c[T],I=F.color,G=F.intensity,$=F.distance;let V=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Fa?V=F.shadow.map.texture:V=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=I.r*G,d+=I.g*G,f+=I.b*G;else if(F.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(F.sh.coefficients[z],G);C++}else if(F.isDirectionalLight){const z=e.get(F);if(z.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const k=F.shadow,j=t.get(F);j.shadowIntensity=k.intensity,j.shadowBias=k.bias,j.shadowNormalBias=k.normalBias,j.shadowRadius=k.radius,j.shadowMapSize=k.mapSize,i.directionalShadow[h]=j,i.directionalShadowMap[h]=V,i.directionalShadowMatrix[h]=F.shadow.matrix,b++}i.directional[h]=z,h++}else if(F.isSpotLight){const z=e.get(F);z.position.setFromMatrixPosition(F.matrixWorld),z.color.copy(I).multiplyScalar(G),z.distance=$,z.coneCos=Math.cos(F.angle),z.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),z.decay=F.decay,i.spot[_]=z;const k=F.shadow;if(F.map&&(i.spotLightMap[M]=F.map,M++,k.updateMatrices(F),F.castShadow&&R++),i.spotLightMatrix[_]=k.matrix,F.castShadow){const j=t.get(F);j.shadowIntensity=k.intensity,j.shadowBias=k.bias,j.shadowNormalBias=k.normalBias,j.shadowRadius=k.radius,j.shadowMapSize=k.mapSize,i.spotShadow[_]=j,i.spotShadowMap[_]=V,x++}_++}else if(F.isRectAreaLight){const z=e.get(F);z.color.copy(I).multiplyScalar(G),z.halfWidth.set(F.width*.5,0,0),z.halfHeight.set(0,F.height*.5,0),i.rectArea[p]=z,p++}else if(F.isPointLight){const z=e.get(F);if(z.color.copy(F.color).multiplyScalar(F.intensity),z.distance=F.distance,z.decay=F.decay,F.castShadow){const k=F.shadow,j=t.get(F);j.shadowIntensity=k.intensity,j.shadowBias=k.bias,j.shadowNormalBias=k.normalBias,j.shadowRadius=k.radius,j.shadowMapSize=k.mapSize,j.shadowCameraNear=k.camera.near,j.shadowCameraFar=k.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=F.shadow.matrix,A++}i.point[g]=z,g++}else if(F.isHemisphereLight){const z=e.get(F);z.skyColor.copy(F.color).multiplyScalar(G),z.groundColor.copy(F.groundColor).multiplyScalar(G),i.hemi[m]=z,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Be.LTC_FLOAT_1,i.rectAreaLTC2=Be.LTC_FLOAT_2):(i.rectAreaLTC1=Be.LTC_HALF_1,i.rectAreaLTC2=Be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const y=i.hash;(y.directionalLength!==h||y.pointLength!==g||y.spotLength!==_||y.rectAreaLength!==p||y.hemiLength!==m||y.numDirectionalShadows!==b||y.numPointShadows!==A||y.numSpotShadows!==x||y.numSpotMaps!==M||y.numLightProbes!==C)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=x+M-R,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,y.directionalLength=h,y.pointLength=g,y.spotLength=_,y.rectAreaLength=p,y.hemiLength=m,y.numDirectionalShadows=b,y.numPointShadows=A,y.numSpotShadows=x,y.numSpotMaps=M,y.numLightProbes=C,i.version=FC++)}function l(c,u){let d=0,f=0,h=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){const A=c[m];if(A.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),d++}else if(A.isSpotLight){const x=i.spot[h];x.position.setFromMatrixPosition(A.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),h++}else if(A.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(A.matrixWorld),x.position.applyMatrix4(p),o.identity(),s.copy(A.matrixWorld),s.premultiply(p),o.extractRotation(s),x.halfWidth.set(A.width*.5,0,0),x.halfHeight.set(0,A.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(A.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(A.matrixWorld),x.position.applyMatrix4(p),f++}else if(A.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(A.matrixWorld),x.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function mg(n){const e=new OC(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function kC(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new mg(n),e.set(r,[a])):s>=o.length?(a=new mg(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const BC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zC=`uniform sampler2D shadow_pass;
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
}`,VC=[new se(1,0,0),new se(-1,0,0),new se(0,1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1)],HC=[new se(0,-1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1),new se(0,-1,0),new se(0,-1,0)],gg=new ln,el=new se,wf=new se;function GC(n,e,t){let i=new Ev;const r=new bt,s=new bt,o=new nn,a=new sE,l=new oE,c={},u=t.maxTextureSize,d={[Vs]:hi,[hi]:Vs,[jr]:jr},f=new rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:BC,fragmentShader:zC}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new fs;g.setAttribute("position",new Tr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Dr(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mu;let m=this.type;this.render=function(R,C,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;this.type===jM&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=mu);const T=n.getRenderTarget(),N=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Jr),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const G=m!==this.type;G&&C.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(V=>V.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,V=R.length;$<V;$++){const z=R[$],k=z.shadow;if(k===void 0){rt("WebGLShadowMap:",z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const j=k.getFrameExtents();r.multiply(j),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,k.mapSize.y=s.y));const X=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=X,k.map===null||G===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===fl){if(z.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Er(r.x,r.y,{format:Fa,type:ls,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),k.map.texture.name=z.name+".shadowMap",k.map.depthTexture=new Ql(r.x,r.y,vr),k.map.depthTexture.name=z.name+".shadowMapDepth",k.map.depthTexture.format=cs,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Cn,k.map.depthTexture.magFilter=Cn}else z.isPointLight?(k.map=new Dv(r.x),k.map.depthTexture=new Qw(r.x,Pr)):(k.map=new Er(r.x,r.y),k.map.depthTexture=new Ql(r.x,r.y,Pr)),k.map.depthTexture.name=z.name+".shadowMap",k.map.depthTexture.format=cs,this.type===mu?(k.map.depthTexture.compareFunction=X?Zp:Kp,k.map.depthTexture.minFilter=Vn,k.map.depthTexture.magFilter=Vn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Cn,k.map.depthTexture.magFilter=Cn);k.camera.updateProjectionMatrix()}const L=k.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<L;oe++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,oe),n.clear();else{oe===0&&(n.setRenderTarget(k.map),n.clear());const ue=k.getViewport(oe);o.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),I.viewport(o)}if(z.isPointLight){const ue=k.camera,ke=k.matrix,Fe=z.distance||ue.far;Fe!==ue.far&&(ue.far=Fe,ue.updateProjectionMatrix()),el.setFromMatrixPosition(z.matrixWorld),ue.position.copy(el),wf.copy(ue.position),wf.add(VC[oe]),ue.up.copy(HC[oe]),ue.lookAt(wf),ue.updateMatrixWorld(),ke.makeTranslation(-el.x,-el.y,-el.z),gg.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),k._frustum.setFromProjectionMatrix(gg,ue.coordinateSystem,ue.reversedDepth)}else k.updateMatrices(z);i=k.getFrustum(),x(C,y,k.camera,z,this.type)}k.isPointLightShadow!==!0&&this.type===fl&&b(k,y),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(T,N,F)};function b(R,C){const y=e.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Er(r.x,r.y,{format:Fa,type:ls})),f.uniforms.shadow_pass.value=R.map.depthTexture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,y,f,_,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,y,h,_,null)}function A(R,C,y,T){let N=null;const F=y.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(F!==void 0)N=F;else if(N=y.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const I=N.uuid,G=C.uuid;let $=c[I];$===void 0&&($={},c[I]=$);let V=$[G];V===void 0&&(V=N.clone(),$[G]=V,C.addEventListener("dispose",M)),N=V}if(N.visible=C.visible,N.wireframe=C.wireframe,T===fl?N.side=C.shadowSide!==null?C.shadowSide:C.side:N.side=C.shadowSide!==null?C.shadowSide:d[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,N.map=C.map,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,y.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const I=n.properties.get(N);I.light=y}return N}function x(R,C,y,T,N){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&N===fl)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,R.matrixWorld);const G=e.update(R),$=R.material;if(Array.isArray($)){const V=G.groups;for(let z=0,k=V.length;z<k;z++){const j=V[z],X=$[j.materialIndex];if(X&&X.visible){const L=A(R,X,T,N);R.onBeforeShadow(n,R,C,y,G,L,j),n.renderBufferDirect(y,null,G,L,R,j),R.onAfterShadow(n,R,C,y,G,L,j)}}}else if($.visible){const V=A(R,$,T,N);R.onBeforeShadow(n,R,C,y,G,V,null),n.renderBufferDirect(y,null,G,V,R,null),R.onAfterShadow(n,R,C,y,G,V,null)}}const I=R.children;for(let G=0,$=I.length;G<$;G++)x(I[G],C,y,T,N)}function M(R){R.target.removeEventListener("dispose",M);for(const y in c){const T=c[y],N=R.target.uuid;N in T&&(T[N].dispose(),delete T[N])}}}function WC(n,e){function t(){let H=!1;const we=new nn;let Se=null;const Ie=new nn(0,0,0,0);return{setMask:function(ve){Se!==ve&&!H&&(n.colorMask(ve,ve,ve,ve),Se=ve)},setLocked:function(ve){H=ve},setClear:function(ve,ae,Ge,Ze,Mt){Mt===!0&&(ve*=Ze,ae*=Ze,Ge*=Ze),we.set(ve,ae,Ge,Ze),Ie.equals(we)===!1&&(n.clearColor(ve,ae,Ge,Ze),Ie.copy(we))},reset:function(){H=!1,Se=null,Ie.set(-1,0,0,0)}}}function i(){let H=!1,we=!1,Se=null,Ie=null,ve=null;return{setReversed:function(ae){if(we!==ae){const Ge=e.get("EXT_clip_control");ae?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),we=ae;const Ze=ve;ve=null,this.setClear(Ze)}},getReversed:function(){return we},setTest:function(ae){ae?le(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(ae){Se!==ae&&!H&&(n.depthMask(ae),Se=ae)},setFunc:function(ae){if(we&&(ae=Aw[ae]),Ie!==ae){switch(ae){case hh:n.depthFunc(n.NEVER);break;case ph:n.depthFunc(n.ALWAYS);break;case mh:n.depthFunc(n.LESS);break;case Ia:n.depthFunc(n.LEQUAL);break;case gh:n.depthFunc(n.EQUAL);break;case _h:n.depthFunc(n.GEQUAL);break;case xh:n.depthFunc(n.GREATER);break;case vh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=ae}},setLocked:function(ae){H=ae},setClear:function(ae){ve!==ae&&(ve=ae,we&&(ae=1-ae),n.clearDepth(ae))},reset:function(){H=!1,Se=null,Ie=null,ve=null,we=!1}}}function r(){let H=!1,we=null,Se=null,Ie=null,ve=null,ae=null,Ge=null,Ze=null,Mt=null;return{setTest:function(ze){H||(ze?le(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(ze){we!==ze&&!H&&(n.stencilMask(ze),we=ze)},setFunc:function(ze,je,ct){(Se!==ze||Ie!==je||ve!==ct)&&(n.stencilFunc(ze,je,ct),Se=ze,Ie=je,ve=ct)},setOp:function(ze,je,ct){(ae!==ze||Ge!==je||Ze!==ct)&&(n.stencilOp(ze,je,ct),ae=ze,Ge=je,Ze=ct)},setLocked:function(ze){H=ze},setClear:function(ze){Mt!==ze&&(n.clearStencil(ze),Mt=ze)},reset:function(){H=!1,we=null,Se=null,Ie=null,ve=null,ae=null,Ge=null,Ze=null,Mt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],g=null,_=!1,p=null,m=null,b=null,A=null,x=null,M=null,R=null,C=new Ot(0,0,0),y=0,T=!1,N=null,F=null,I=null,G=null,$=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,k=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(j)[1]),z=k>=1):j.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),z=k>=2);let X=null,L={};const oe=n.getParameter(n.SCISSOR_BOX),ue=n.getParameter(n.VIEWPORT),ke=new nn().fromArray(oe),Fe=new nn().fromArray(ue);function Ve(H,we,Se,Ie){const ve=new Uint8Array(4),ae=n.createTexture();n.bindTexture(H,ae),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<Se;Ge++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(we,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(we+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return ae}const ee={};ee[n.TEXTURE_2D]=Ve(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=Ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=Ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=Ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(n.DEPTH_TEST),o.setFunc(Ia),q(!1),O(Sm),le(n.CULL_FACE),W(Jr);function le(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function ge(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function Le(H,we){return d[H]!==we?(n.bindFramebuffer(H,we),d[H]=we,H===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=we),H===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=we),!0):!1}function Ee(H,we){let Se=h,Ie=!1;if(H){Se=f.get(we),Se===void 0&&(Se=[],f.set(we,Se));const ve=H.textures;if(Se.length!==ve.length||Se[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,Ge=ve.length;ae<Ge;ae++)Se[ae]=n.COLOR_ATTACHMENT0+ae;Se.length=ve.length,Ie=!0}}else Se[0]!==n.BACK&&(Se[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(Se)}function fe(H){return g!==H?(n.useProgram(H),g=H,!0):!1}const w={[fo]:n.FUNC_ADD,[qM]:n.FUNC_SUBTRACT,[KM]:n.FUNC_REVERSE_SUBTRACT};w[ZM]=n.MIN,w[JM]=n.MAX;const E={[QM]:n.ZERO,[ew]:n.ONE,[tw]:n.SRC_COLOR,[dh]:n.SRC_ALPHA,[aw]:n.SRC_ALPHA_SATURATE,[sw]:n.DST_COLOR,[iw]:n.DST_ALPHA,[nw]:n.ONE_MINUS_SRC_COLOR,[fh]:n.ONE_MINUS_SRC_ALPHA,[ow]:n.ONE_MINUS_DST_COLOR,[rw]:n.ONE_MINUS_DST_ALPHA,[lw]:n.CONSTANT_COLOR,[cw]:n.ONE_MINUS_CONSTANT_COLOR,[uw]:n.CONSTANT_ALPHA,[dw]:n.ONE_MINUS_CONSTANT_ALPHA};function W(H,we,Se,Ie,ve,ae,Ge,Ze,Mt,ze){if(H===Jr){_===!0&&(ge(n.BLEND),_=!1);return}if(_===!1&&(le(n.BLEND),_=!0),H!==YM){if(H!==p||ze!==T){if((m!==fo||x!==fo)&&(n.blendEquation(n.FUNC_ADD),m=fo,x=fo),ze)switch(H){case Ma:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mm:n.blendFunc(n.ONE,n.ONE);break;case wm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Em:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Et("WebGLState: Invalid blending: ",H);break}else switch(H){case Ma:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mm:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case wm:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Em:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",H);break}b=null,A=null,M=null,R=null,C.set(0,0,0),y=0,p=H,T=ze}return}ve=ve||we,ae=ae||Se,Ge=Ge||Ie,(we!==m||ve!==x)&&(n.blendEquationSeparate(w[we],w[ve]),m=we,x=ve),(Se!==b||Ie!==A||ae!==M||Ge!==R)&&(n.blendFuncSeparate(E[Se],E[Ie],E[ae],E[Ge]),b=Se,A=Ie,M=ae,R=Ge),(Ze.equals(C)===!1||Mt!==y)&&(n.blendColor(Ze.r,Ze.g,Ze.b,Mt),C.copy(Ze),y=Mt),p=H,T=!1}function ie(H,we){H.side===jr?ge(n.CULL_FACE):le(n.CULL_FACE);let Se=H.side===hi;we&&(Se=!Se),q(Se),H.blending===Ma&&H.transparent===!1?W(Jr):W(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),s.setMask(H.colorWrite);const Ie=H.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),me(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(H){N!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),N=H)}function O(H){H!==XM?(le(n.CULL_FACE),H!==F&&(H===Sm?n.cullFace(n.BACK):H===$M?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),F=H}function U(H){H!==I&&(z&&n.lineWidth(H),I=H)}function me(H,we,Se){H?(le(n.POLYGON_OFFSET_FILL),(G!==we||$!==Se)&&(G=we,$=Se,o.getReversed()&&(we=-we),n.polygonOffset(we,Se))):ge(n.POLYGON_OFFSET_FILL)}function ce(H){H?le(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function J(H){H===void 0&&(H=n.TEXTURE0+V-1),X!==H&&(n.activeTexture(H),X=H)}function de(H,we,Se){Se===void 0&&(X===null?Se=n.TEXTURE0+V-1:Se=X);let Ie=L[Se];Ie===void 0&&(Ie={type:void 0,texture:void 0},L[Se]=Ie),(Ie.type!==H||Ie.texture!==we)&&(X!==Se&&(n.activeTexture(Se),X=Se),n.bindTexture(H,we||ee[H]),Ie.type=H,Ie.texture=we)}function P(){const H=L[X];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(H){Et("WebGLState:",H)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(H){Et("WebGLState:",H)}}function Z(){try{n.texSubImage2D(...arguments)}catch(H){Et("WebGLState:",H)}}function te(){try{n.texSubImage3D(...arguments)}catch(H){Et("WebGLState:",H)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(H){Et("WebGLState:",H)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(H){Et("WebGLState:",H)}}function _e(){try{n.texStorage2D(...arguments)}catch(H){Et("WebGLState:",H)}}function He(){try{n.texStorage3D(...arguments)}catch(H){Et("WebGLState:",H)}}function Ae(){try{n.texImage2D(...arguments)}catch(H){Et("WebGLState:",H)}}function xe(){try{n.texImage3D(...arguments)}catch(H){Et("WebGLState:",H)}}function ye(H){ke.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),ke.copy(H))}function Te(H){Fe.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Fe.copy(H))}function De(H,we){let Se=c.get(we);Se===void 0&&(Se=new WeakMap,c.set(we,Se));let Ie=Se.get(H);Ie===void 0&&(Ie=n.getUniformBlockIndex(we,H.name),Se.set(H,Ie))}function Ce(H,we){const Ie=c.get(we).get(H);l.get(we)!==Ie&&(n.uniformBlockBinding(we,Ie,H.__bindingPointIndex),l.set(we,Ie))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},X=null,L={},d={},f=new WeakMap,h=[],g=null,_=!1,p=null,m=null,b=null,A=null,x=null,M=null,R=null,C=new Ot(0,0,0),y=0,T=!1,N=null,F=null,I=null,G=null,$=null,ke.set(0,0,n.canvas.width,n.canvas.height),Fe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:ge,bindFramebuffer:Le,drawBuffers:Ee,useProgram:fe,setBlending:W,setMaterial:ie,setFlipSided:q,setCullFace:O,setLineWidth:U,setPolygonOffset:me,setScissorTest:ce,activeTexture:J,bindTexture:de,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:B,texImage2D:Ae,texImage3D:xe,updateUBOMapping:De,uniformBlockBinding:Ce,texStorage2D:_e,texStorage3D:He,texSubImage2D:Z,texSubImage3D:te,compressedTexSubImage2D:K,compressedTexSubImage3D:Me,scissor:ye,viewport:Te,reset:Qe}}function XC(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return h?new OffscreenCanvas(P,S):ju("canvas")}function _(P,S,B){let Z=1;const te=de(P);if((te.width>B||te.height>B)&&(Z=B/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const K=Math.floor(Z*te.width),Me=Math.floor(Z*te.height);d===void 0&&(d=g(K,Me));const _e=S?g(K,Me):d;return _e.width=K,_e.height=Me,_e.getContext("2d").drawImage(P,0,0,K,Me),rt("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+K+"x"+Me+")."),_e}else return"data"in P&&rt("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),P;return P}function p(P){return P.generateMipmaps}function m(P){n.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(P,S,B,Z,te=!1){if(P!==null){if(n[P]!==void 0)return n[P];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let K=S;if(S===n.RED&&(B===n.FLOAT&&(K=n.R32F),B===n.HALF_FLOAT&&(K=n.R16F),B===n.UNSIGNED_BYTE&&(K=n.R8)),S===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.R8UI),B===n.UNSIGNED_SHORT&&(K=n.R16UI),B===n.UNSIGNED_INT&&(K=n.R32UI),B===n.BYTE&&(K=n.R8I),B===n.SHORT&&(K=n.R16I),B===n.INT&&(K=n.R32I)),S===n.RG&&(B===n.FLOAT&&(K=n.RG32F),B===n.HALF_FLOAT&&(K=n.RG16F),B===n.UNSIGNED_BYTE&&(K=n.RG8)),S===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RG8UI),B===n.UNSIGNED_SHORT&&(K=n.RG16UI),B===n.UNSIGNED_INT&&(K=n.RG32UI),B===n.BYTE&&(K=n.RG8I),B===n.SHORT&&(K=n.RG16I),B===n.INT&&(K=n.RG32I)),S===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RGB8UI),B===n.UNSIGNED_SHORT&&(K=n.RGB16UI),B===n.UNSIGNED_INT&&(K=n.RGB32UI),B===n.BYTE&&(K=n.RGB8I),B===n.SHORT&&(K=n.RGB16I),B===n.INT&&(K=n.RGB32I)),S===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),B===n.UNSIGNED_INT&&(K=n.RGBA32UI),B===n.BYTE&&(K=n.RGBA8I),B===n.SHORT&&(K=n.RGBA16I),B===n.INT&&(K=n.RGBA32I)),S===n.RGB&&(B===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),S===n.RGBA){const Me=te?Xu:St.getTransfer(Z);B===n.FLOAT&&(K=n.RGBA32F),B===n.HALF_FLOAT&&(K=n.RGBA16F),B===n.UNSIGNED_BYTE&&(K=Me===Ut?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(P,S){let B;return P?S===null||S===Pr||S===Jl?B=n.DEPTH24_STENCIL8:S===vr?B=n.DEPTH32F_STENCIL8:S===Zl&&(B=n.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Pr||S===Jl?B=n.DEPTH_COMPONENT24:S===vr?B=n.DEPTH_COMPONENT32F:S===Zl&&(B=n.DEPTH_COMPONENT16),B}function M(P,S){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Cn&&P.minFilter!==Vn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function R(P){const S=P.target;S.removeEventListener("dispose",R),y(S),S.isVideoTexture&&u.delete(S)}function C(P){const S=P.target;S.removeEventListener("dispose",C),N(S)}function y(P){const S=i.get(P);if(S.__webglInit===void 0)return;const B=P.source,Z=f.get(B);if(Z){const te=Z[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&T(P),Object.keys(Z).length===0&&f.delete(B)}i.remove(P)}function T(P){const S=i.get(P);n.deleteTexture(S.__webglTexture);const B=P.source,Z=f.get(B);delete Z[S.__cacheKey],o.memory.textures--}function N(P){const S=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let te=0;te<S.__webglFramebuffer[Z].length;te++)n.deleteFramebuffer(S.__webglFramebuffer[Z][te]);else n.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)n.deleteFramebuffer(S.__webglFramebuffer[Z]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=P.textures;for(let Z=0,te=B.length;Z<te;Z++){const K=i.get(B[Z]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(B[Z])}i.remove(P)}let F=0;function I(){F=0}function G(){const P=F;return P>=r.maxTextures&&rt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),F+=1,P}function $(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function V(P,S){const B=i.get(P);if(P.isVideoTexture&&ce(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&B.__version!==P.version){const Z=P.image;if(Z===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(B,P,S);return}}else P.isExternalTexture&&(B.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+S)}function z(P,S){const B=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){ee(B,P,S);return}else P.isExternalTexture&&(B.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+S)}function k(P,S){const B=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){ee(B,P,S);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+S)}function j(P,S){const B=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&B.__version!==P.version){le(B,P,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+S)}const X={[yh]:n.REPEAT,[qr]:n.CLAMP_TO_EDGE,[bh]:n.MIRRORED_REPEAT},L={[Cn]:n.NEAREST,[pw]:n.NEAREST_MIPMAP_NEAREST,[Dc]:n.NEAREST_MIPMAP_LINEAR,[Vn]:n.LINEAR,[jd]:n.LINEAR_MIPMAP_NEAREST,[xo]:n.LINEAR_MIPMAP_LINEAR},oe={[xw]:n.NEVER,[Mw]:n.ALWAYS,[vw]:n.LESS,[Kp]:n.LEQUAL,[yw]:n.EQUAL,[Zp]:n.GEQUAL,[bw]:n.GREATER,[Sw]:n.NOTEQUAL};function ue(P,S){if(S.type===vr&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Vn||S.magFilter===jd||S.magFilter===Dc||S.magFilter===xo||S.minFilter===Vn||S.minFilter===jd||S.minFilter===Dc||S.minFilter===xo)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,X[S.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,X[S.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,X[S.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,L[S.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,L[S.minFilter]),S.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,oe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Cn||S.minFilter!==Dc&&S.minFilter!==xo||S.type===vr&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ke(P,S){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",R));const Z=S.source;let te=f.get(Z);te===void 0&&(te={},f.set(Z,te));const K=$(S);if(K!==P.__cacheKey){te[K]===void 0&&(te[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),te[K].usedTimes++;const Me=te[P.__cacheKey];Me!==void 0&&(te[P.__cacheKey].usedTimes--,Me.usedTimes===0&&T(S)),P.__cacheKey=K,P.__webglTexture=te[K].texture}return B}function Fe(P,S,B){return Math.floor(Math.floor(P/B)/S)}function Ve(P,S,B,Z){const K=P.updateRanges;if(K.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,B,Z,S.data);else{K.sort((xe,ye)=>xe.start-ye.start);let Me=0;for(let xe=1;xe<K.length;xe++){const ye=K[Me],Te=K[xe],De=ye.start+ye.count,Ce=Fe(Te.start,S.width,4),Qe=Fe(ye.start,S.width,4);Te.start<=De+1&&Ce===Qe&&Fe(Te.start+Te.count-1,S.width,4)===Ce?ye.count=Math.max(ye.count,Te.start+Te.count-ye.start):(++Me,K[Me]=Te)}K.length=Me+1;const _e=n.getParameter(n.UNPACK_ROW_LENGTH),He=n.getParameter(n.UNPACK_SKIP_PIXELS),Ae=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let xe=0,ye=K.length;xe<ye;xe++){const Te=K[xe],De=Math.floor(Te.start/4),Ce=Math.ceil(Te.count/4),Qe=De%S.width,H=Math.floor(De/S.width),we=Ce,Se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Qe),n.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,Qe,H,we,Se,B,Z,S.data)}P.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,_e),n.pixelStorei(n.UNPACK_SKIP_PIXELS,He),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ae)}}function ee(P,S,B){let Z=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=n.TEXTURE_3D);const te=ke(P,S),K=S.source;t.bindTexture(Z,P.__webglTexture,n.TEXTURE0+B);const Me=i.get(K);if(K.version!==Me.__version||te===!0){t.activeTexture(n.TEXTURE0+B);const _e=St.getPrimaries(St.workingColorSpace),He=S.colorSpace===ws?null:St.getPrimaries(S.colorSpace),Ae=S.colorSpace===ws||_e===He?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let xe=_(S.image,!1,r.maxTextureSize);xe=J(S,xe);const ye=s.convert(S.format,S.colorSpace),Te=s.convert(S.type);let De=A(S.internalFormat,ye,Te,S.colorSpace,S.isVideoTexture);ue(Z,S);let Ce;const Qe=S.mipmaps,H=S.isVideoTexture!==!0,we=Me.__version===void 0||te===!0,Se=K.dataReady,Ie=M(S,xe);if(S.isDepthTexture)De=x(S.format===vo,S.type),we&&(H?t.texStorage2D(n.TEXTURE_2D,1,De,xe.width,xe.height):t.texImage2D(n.TEXTURE_2D,0,De,xe.width,xe.height,0,ye,Te,null));else if(S.isDataTexture)if(Qe.length>0){H&&we&&t.texStorage2D(n.TEXTURE_2D,Ie,De,Qe[0].width,Qe[0].height);for(let ve=0,ae=Qe.length;ve<ae;ve++)Ce=Qe[ve],H?Se&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,ye,Te,Ce.data):t.texImage2D(n.TEXTURE_2D,ve,De,Ce.width,Ce.height,0,ye,Te,Ce.data);S.generateMipmaps=!1}else H?(we&&t.texStorage2D(n.TEXTURE_2D,Ie,De,xe.width,xe.height),Se&&Ve(S,xe,ye,Te)):t.texImage2D(n.TEXTURE_2D,0,De,xe.width,xe.height,0,ye,Te,xe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){H&&we&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,De,Qe[0].width,Qe[0].height,xe.depth);for(let ve=0,ae=Qe.length;ve<ae;ve++)if(Ce=Qe[ve],S.format!==er)if(ye!==null)if(H){if(Se)if(S.layerUpdates.size>0){const Ge=jm(Ce.width,Ce.height,S.format,S.type);for(const Ze of S.layerUpdates){const Mt=Ce.data.subarray(Ze*Ge/Ce.data.BYTES_PER_ELEMENT,(Ze+1)*Ge/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,Ze,Ce.width,Ce.height,1,ye,Mt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Ce.width,Ce.height,xe.depth,ye,Ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,De,Ce.width,Ce.height,xe.depth,0,Ce.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Ce.width,Ce.height,xe.depth,ye,Te,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,De,Ce.width,Ce.height,xe.depth,0,ye,Te,Ce.data)}else{H&&we&&t.texStorage2D(n.TEXTURE_2D,Ie,De,Qe[0].width,Qe[0].height);for(let ve=0,ae=Qe.length;ve<ae;ve++)Ce=Qe[ve],S.format!==er?ye!==null?H?Se&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,ye,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,De,Ce.width,Ce.height,0,Ce.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Se&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,ye,Te,Ce.data):t.texImage2D(n.TEXTURE_2D,ve,De,Ce.width,Ce.height,0,ye,Te,Ce.data)}else if(S.isDataArrayTexture)if(H){if(we&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,De,xe.width,xe.height,xe.depth),Se)if(S.layerUpdates.size>0){const ve=jm(xe.width,xe.height,S.format,S.type);for(const ae of S.layerUpdates){const Ge=xe.data.subarray(ae*ve/xe.data.BYTES_PER_ELEMENT,(ae+1)*ve/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ae,xe.width,xe.height,1,ye,Te,Ge)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,ye,Te,xe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,xe.width,xe.height,xe.depth,0,ye,Te,xe.data);else if(S.isData3DTexture)H?(we&&t.texStorage3D(n.TEXTURE_3D,Ie,De,xe.width,xe.height,xe.depth),Se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,ye,Te,xe.data)):t.texImage3D(n.TEXTURE_3D,0,De,xe.width,xe.height,xe.depth,0,ye,Te,xe.data);else if(S.isFramebufferTexture){if(we)if(H)t.texStorage2D(n.TEXTURE_2D,Ie,De,xe.width,xe.height);else{let ve=xe.width,ae=xe.height;for(let Ge=0;Ge<Ie;Ge++)t.texImage2D(n.TEXTURE_2D,Ge,De,ve,ae,0,ye,Te,null),ve>>=1,ae>>=1}}else if(Qe.length>0){if(H&&we){const ve=de(Qe[0]);t.texStorage2D(n.TEXTURE_2D,Ie,De,ve.width,ve.height)}for(let ve=0,ae=Qe.length;ve<ae;ve++)Ce=Qe[ve],H?Se&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,ye,Te,Ce):t.texImage2D(n.TEXTURE_2D,ve,De,ye,Te,Ce);S.generateMipmaps=!1}else if(H){if(we){const ve=de(xe);t.texStorage2D(n.TEXTURE_2D,Ie,De,ve.width,ve.height)}Se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Te,xe)}else t.texImage2D(n.TEXTURE_2D,0,De,ye,Te,xe);p(S)&&m(Z),Me.__version=K.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function le(P,S,B){if(S.image.length!==6)return;const Z=ke(P,S),te=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+B);const K=i.get(te);if(te.version!==K.__version||Z===!0){t.activeTexture(n.TEXTURE0+B);const Me=St.getPrimaries(St.workingColorSpace),_e=S.colorSpace===ws?null:St.getPrimaries(S.colorSpace),He=S.colorSpace===ws||Me===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const Ae=S.isCompressedTexture||S.image[0].isCompressedTexture,xe=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let ae=0;ae<6;ae++)!Ae&&!xe?ye[ae]=_(S.image[ae],!0,r.maxCubemapSize):ye[ae]=xe?S.image[ae].image:S.image[ae],ye[ae]=J(S,ye[ae]);const Te=ye[0],De=s.convert(S.format,S.colorSpace),Ce=s.convert(S.type),Qe=A(S.internalFormat,De,Ce,S.colorSpace),H=S.isVideoTexture!==!0,we=K.__version===void 0||Z===!0,Se=te.dataReady;let Ie=M(S,Te);ue(n.TEXTURE_CUBE_MAP,S);let ve;if(Ae){H&&we&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,Qe,Te.width,Te.height);for(let ae=0;ae<6;ae++){ve=ye[ae].mipmaps;for(let Ge=0;Ge<ve.length;Ge++){const Ze=ve[Ge];S.format!==er?De!==null?H?Se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ge,0,0,Ze.width,Ze.height,De,Ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ge,Qe,Ze.width,Ze.height,0,Ze.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ge,0,0,Ze.width,Ze.height,De,Ce,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ge,Qe,Ze.width,Ze.height,0,De,Ce,Ze.data)}}}else{if(ve=S.mipmaps,H&&we){ve.length>0&&Ie++;const ae=de(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,Qe,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(xe){H?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ye[ae].width,ye[ae].height,De,Ce,ye[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Qe,ye[ae].width,ye[ae].height,0,De,Ce,ye[ae].data);for(let Ge=0;Ge<ve.length;Ge++){const Mt=ve[Ge].image[ae].image;H?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ge+1,0,0,Mt.width,Mt.height,De,Ce,Mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ge+1,Qe,Mt.width,Mt.height,0,De,Ce,Mt.data)}}else{H?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,De,Ce,ye[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Qe,De,Ce,ye[ae]);for(let Ge=0;Ge<ve.length;Ge++){const Ze=ve[Ge];H?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ge+1,0,0,De,Ce,Ze.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ge+1,Qe,De,Ce,Ze.image[ae])}}}p(S)&&m(n.TEXTURE_CUBE_MAP),K.__version=te.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function ge(P,S,B,Z,te,K){const Me=s.convert(B.format,B.colorSpace),_e=s.convert(B.type),He=A(B.internalFormat,Me,_e,B.colorSpace),Ae=i.get(S),xe=i.get(B);if(xe.__renderTarget=S,!Ae.__hasExternalTextures){const ye=Math.max(1,S.width>>K),Te=Math.max(1,S.height>>K);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,K,He,ye,Te,S.depth,0,Me,_e,null):t.texImage2D(te,K,He,ye,Te,0,Me,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),me(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,te,xe.__webglTexture,0,U(S)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,te,xe.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(P,S,B){if(n.bindRenderbuffer(n.RENDERBUFFER,P),S.depthBuffer){const Z=S.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,K=x(S.stencilBuffer,te),Me=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;me(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U(S),K,S.width,S.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,U(S),K,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,K,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,P)}else{const Z=S.textures;for(let te=0;te<Z.length;te++){const K=Z[te],Me=s.convert(K.format,K.colorSpace),_e=s.convert(K.type),He=A(K.internalFormat,Me,_e,K.colorSpace);me(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U(S),He,S.width,S.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,U(S),He,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,He,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ee(P,S,B){const Z=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(S.depthTexture);if(te.__renderTarget=S,(!te.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z){if(te.__webglInit===void 0&&(te.__webglInit=!0,S.depthTexture.addEventListener("dispose",R)),te.__webglTexture===void 0){te.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),ue(n.TEXTURE_CUBE_MAP,S.depthTexture);const Ae=s.convert(S.depthTexture.format),xe=s.convert(S.depthTexture.type);let ye;S.depthTexture.format===cs?ye=n.DEPTH_COMPONENT24:S.depthTexture.format===vo&&(ye=n.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ye,S.width,S.height,0,Ae,xe,null)}}else V(S.depthTexture,0);const K=te.__webglTexture,Me=U(S),_e=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,He=S.depthTexture.format===vo?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===cs)me(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,He,_e,K,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,He,_e,K,0);else if(S.depthTexture.format===vo)me(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,He,_e,K,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,He,_e,K,0);else throw new Error("Unknown depthTexture format")}function fe(P){const S=i.get(P),B=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const Z=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const te=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),S.__depthDisposeCallback=te}S.__boundDepthTexture=Z}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(B)for(let Z=0;Z<6;Z++)Ee(S.__webglFramebuffer[Z],P,Z);else{const Z=P.texture.mipmaps;Z&&Z.length>0?Ee(S.__webglFramebuffer[0],P,0):Ee(S.__webglFramebuffer,P,0)}else if(B){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=n.createRenderbuffer(),Le(S.__webglDepthbuffer[Z],P,!1);else{const te=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,K)}}else{const Z=P.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Le(S.__webglDepthbuffer,P,!1);else{const te=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,K)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function w(P,S,B){const Z=i.get(P);S!==void 0&&ge(Z.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&fe(P)}function E(P){const S=P.texture,B=i.get(P),Z=i.get(S);P.addEventListener("dispose",C);const te=P.textures,K=P.isWebGLCubeRenderTarget===!0,Me=te.length>1;if(Me||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=S.version,o.memory.textures++),K){B.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[_e]=[];for(let He=0;He<S.mipmaps.length;He++)B.__webglFramebuffer[_e][He]=n.createFramebuffer()}else B.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let _e=0;_e<S.mipmaps.length;_e++)B.__webglFramebuffer[_e]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Me)for(let _e=0,He=te.length;_e<He;_e++){const Ae=i.get(te[_e]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&me(P)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let _e=0;_e<te.length;_e++){const He=te[_e];B.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[_e]);const Ae=s.convert(He.format,He.colorSpace),xe=s.convert(He.type),ye=A(He.internalFormat,Ae,xe,He.colorSpace,P.isXRRenderTarget===!0),Te=U(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,ye,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,B.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(B.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),ue(n.TEXTURE_CUBE_MAP,S);for(let _e=0;_e<6;_e++)if(S.mipmaps&&S.mipmaps.length>0)for(let He=0;He<S.mipmaps.length;He++)ge(B.__webglFramebuffer[_e][He],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He);else ge(B.__webglFramebuffer[_e],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);p(S)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let _e=0,He=te.length;_e<He;_e++){const Ae=te[_e],xe=i.get(Ae);let ye=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ye=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,xe.__webglTexture),ue(ye,Ae),ge(B.__webglFramebuffer,P,Ae,n.COLOR_ATTACHMENT0+_e,ye,0),p(Ae)&&m(ye)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_e=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,Z.__webglTexture),ue(_e,S),S.mipmaps&&S.mipmaps.length>0)for(let He=0;He<S.mipmaps.length;He++)ge(B.__webglFramebuffer[He],P,S,n.COLOR_ATTACHMENT0,_e,He);else ge(B.__webglFramebuffer,P,S,n.COLOR_ATTACHMENT0,_e,0);p(S)&&m(_e),t.unbindTexture()}P.depthBuffer&&fe(P)}function W(P){const S=P.textures;for(let B=0,Z=S.length;B<Z;B++){const te=S[B];if(p(te)){const K=b(P),Me=i.get(te).__webglTexture;t.bindTexture(K,Me),m(K),t.unbindTexture()}}}const ie=[],q=[];function O(P){if(P.samples>0){if(me(P)===!1){const S=P.textures,B=P.width,Z=P.height;let te=n.COLOR_BUFFER_BIT;const K=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(P),_e=S.length>1;if(_e)for(let Ae=0;Ae<S.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const He=P.texture.mipmaps;He&&He.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ae=0;Ae<S.length;Ae++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),_e){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Ae]);const xe=i.get(S[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xe,0)}n.blitFramebuffer(0,0,B,Z,0,0,B,Z,te,n.NEAREST),l===!0&&(ie.length=0,q.length=0,ie.push(n.COLOR_ATTACHMENT0+Ae),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ie.push(K),q.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let Ae=0;Ae<S.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Ae]);const xe=i.get(S[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const S=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function U(P){return Math.min(r.maxSamples,P.samples)}function me(P){const S=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ce(P){const S=o.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function J(P,S){const B=P.colorSpace,Z=P.format,te=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||B!==Na&&B!==ws&&(St.getTransfer(B)===Ut?(Z!==er||te!==Bi)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",B)),S}function de(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=I,this.setTexture2D=V,this.setTexture2DArray=z,this.setTexture3D=k,this.setTextureCube=j,this.rebindTextures=w,this.setupRenderTarget=E,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $C(n,e){function t(i,r=ws){let s;const o=St.getTransfer(r);if(i===Bi)return n.UNSIGNED_BYTE;if(i===Xp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===$p)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hv)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pv)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===dv)return n.BYTE;if(i===fv)return n.SHORT;if(i===Zl)return n.UNSIGNED_SHORT;if(i===Wp)return n.INT;if(i===Pr)return n.UNSIGNED_INT;if(i===vr)return n.FLOAT;if(i===ls)return n.HALF_FLOAT;if(i===mv)return n.ALPHA;if(i===gv)return n.RGB;if(i===er)return n.RGBA;if(i===cs)return n.DEPTH_COMPONENT;if(i===vo)return n.DEPTH_STENCIL;if(i===_v)return n.RED;if(i===jp)return n.RED_INTEGER;if(i===Fa)return n.RG;if(i===Yp)return n.RG_INTEGER;if(i===qp)return n.RGBA_INTEGER;if(i===gu||i===_u||i===xu||i===vu)if(o===Ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===gu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_u)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===gu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_u)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sh||i===Mh||i===wh||i===Eh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Sh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Eh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Th||i===Ah||i===Ch||i===Rh||i===Ph||i===Dh||i===Lh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Th||i===Ah)return o===Ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ch)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Rh)return s.COMPRESSED_R11_EAC;if(i===Ph)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Dh)return s.COMPRESSED_RG11_EAC;if(i===Lh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ih||i===Uh||i===Fh||i===Nh||i===Oh||i===kh||i===Bh||i===zh||i===Vh||i===Hh||i===Gh||i===Wh||i===Xh||i===$h)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ih)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Oh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$h)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jh||i===Yh||i===qh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===jh)return o===Ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kh||i===Zh||i===Jh||i===Qh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Kh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Zh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Jl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const jC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YC=`
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

}`;class qC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Av(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new rr({vertexShader:jC,fragmentShader:YC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dr(new uc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KC extends ka{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",p=new qC,m={},b=t.getContextAttributes();let A=null,x=null;const M=[],R=[],C=new bt;let y=null;const T=new Ji;T.viewport=new nn;const N=new Ji;N.viewport=new nn;const F=[T,N],I=new lE;let G=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let le=M[ee];return le===void 0&&(le=new tf,M[ee]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ee){let le=M[ee];return le===void 0&&(le=new tf,M[ee]=le),le.getGripSpace()},this.getHand=function(ee){let le=M[ee];return le===void 0&&(le=new tf,M[ee]=le),le.getHandSpace()};function V(ee){const le=R.indexOf(ee.inputSource);if(le===-1)return;const ge=M[le];ge!==void 0&&(ge.update(ee.inputSource,ee.frame,c||o),ge.dispatchEvent({type:ee.type,data:ee.inputSource}))}function z(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",k);for(let ee=0;ee<M.length;ee++){const le=R[ee];le!==null&&(R[ee]=null,M[ee].disconnect(le))}G=null,$=null,p.reset();for(const ee in m)delete m[ee];e.setRenderTarget(A),h=null,f=null,d=null,r=null,x=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",z),r.addEventListener("inputsourceschange",k),b.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Le=null,Ee=null;b.depth&&(Ee=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=b.stencil?vo:cs,Le=b.stencil?Jl:Pr);const fe={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(fe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Er(f.textureWidth,f.textureHeight,{format:er,type:Bi,depthTexture:new Ql(f.textureWidth,f.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ge={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new Er(h.framebufferWidth,h.framebufferHeight,{format:er,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function k(ee){for(let le=0;le<ee.removed.length;le++){const ge=ee.removed[le],Le=R.indexOf(ge);Le>=0&&(R[Le]=null,M[Le].disconnect(ge))}for(let le=0;le<ee.added.length;le++){const ge=ee.added[le];let Le=R.indexOf(ge);if(Le===-1){for(let fe=0;fe<M.length;fe++)if(fe>=R.length){R.push(ge),Le=fe;break}else if(R[fe]===null){R[fe]=ge,Le=fe;break}if(Le===-1)break}const Ee=M[Le];Ee&&Ee.connect(ge)}}const j=new se,X=new se;function L(ee,le,ge){j.setFromMatrixPosition(le.matrixWorld),X.setFromMatrixPosition(ge.matrixWorld);const Le=j.distanceTo(X),Ee=le.projectionMatrix.elements,fe=ge.projectionMatrix.elements,w=Ee[14]/(Ee[10]-1),E=Ee[14]/(Ee[10]+1),W=(Ee[9]+1)/Ee[5],ie=(Ee[9]-1)/Ee[5],q=(Ee[8]-1)/Ee[0],O=(fe[8]+1)/fe[0],U=w*q,me=w*O,ce=Le/(-q+O),J=ce*-q;if(le.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(J),ee.translateZ(ce),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ee[10]===-1)ee.projectionMatrix.copy(le.projectionMatrix),ee.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const de=w+ce,P=E+ce,S=U-J,B=me+(Le-J),Z=W*E/P*de,te=ie*E/P*de;ee.projectionMatrix.makePerspective(S,B,Z,te,de,P),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function oe(ee,le){le===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(le.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let le=ee.near,ge=ee.far;p.texture!==null&&(p.depthNear>0&&(le=p.depthNear),p.depthFar>0&&(ge=p.depthFar)),I.near=N.near=T.near=le,I.far=N.far=T.far=ge,(G!==I.near||$!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),G=I.near,$=I.far),I.layers.mask=ee.layers.mask|6,T.layers.mask=I.layers.mask&-5,N.layers.mask=I.layers.mask&-3;const Le=ee.parent,Ee=I.cameras;oe(I,Le);for(let fe=0;fe<Ee.length;fe++)oe(Ee[fe],Le);Ee.length===2?L(I,T,N):I.projectionMatrix.copy(T.projectionMatrix),ue(ee,I,Le)};function ue(ee,le,ge){ge===null?ee.matrix.copy(le.matrixWorld):(ee.matrix.copy(ge.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(le.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(le.projectionMatrix),ee.projectionMatrixInverse.copy(le.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=ep*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(ee){l=ee,f!==null&&(f.fixedFoveation=ee),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ee)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function(ee){return m[ee]};let ke=null;function Fe(ee,le){if(u=le.getViewerPose(c||o),g=le,u!==null){const ge=u.views;h!==null&&(e.setRenderTargetFramebuffer(x,h.framebuffer),e.setRenderTarget(x));let Le=!1;ge.length!==I.cameras.length&&(I.cameras.length=0,Le=!0);for(let E=0;E<ge.length;E++){const W=ge[E];let ie=null;if(h!==null)ie=h.getViewport(W);else{const O=d.getViewSubImage(f,W);ie=O.viewport,E===0&&(e.setRenderTargetTextures(x,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(x))}let q=F[E];q===void 0&&(q=new Ji,q.layers.enable(E),q.viewport=new nn,F[E]=q),q.matrix.fromArray(W.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(W.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(ie.x,ie.y,ie.width,ie.height),E===0&&(I.matrix.copy(q.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Le===!0&&I.cameras.push(q)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const E=d.getDepthInformation(ge[0]);E&&E.isValid&&E.texture&&p.init(E,r.renderState)}if(Ee&&Ee.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let E=0;E<ge.length;E++){const W=ge[E].camera;if(W){let ie=m[W];ie||(ie=new Av,m[W]=ie);const q=d.getCameraImage(W);ie.sourceTexture=q}}}}for(let ge=0;ge<M.length;ge++){const Le=R[ge],Ee=M[ge];Le!==null&&Ee!==void 0&&Ee.update(Le,le,c||o)}ke&&ke(ee,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),g=null}const Ve=new Pv;Ve.setAnimationLoop(Fe),this.setAnimationLoop=function(ee){ke=ee},this.dispose=function(){}}}const no=new us,ZC=new ln;function JC(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Cv(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,b,A,x){m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,b,A):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===hi&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===hi&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const b=e.get(m),A=b.envMap,x=b.envMapRotation;A&&(p.envMap.value=A,no.copy(x),no.x*=-1,no.y*=-1,no.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(no.y*=-1,no.z*=-1),p.envMapRotation.value.setFromMatrix4(ZC.makeRotationFromEuler(no)),p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,A){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=A*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===hi&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const b=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function QC(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,A){const x=A.program;i.uniformBlockBinding(b,x)}function c(b,A){let x=r[b.id];x===void 0&&(g(b),x=u(b),r[b.id]=x,b.addEventListener("dispose",p));const M=A.program;i.updateUBOMapping(b,M);const R=e.render.frame;s[b.id]!==R&&(f(b),s[b.id]=R)}function u(b){const A=d();b.__bindingPointIndex=A;const x=n.createBuffer(),M=b.__size,R=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,M,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,x),x}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const A=r[b.id],x=b.uniforms,M=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let R=0,C=x.length;R<C;R++){const y=Array.isArray(x[R])?x[R]:[x[R]];for(let T=0,N=y.length;T<N;T++){const F=y[T];if(h(F,R,T,M)===!0){const I=F.__offset,G=Array.isArray(F.value)?F.value:[F.value];let $=0;for(let V=0;V<G.length;V++){const z=G[V],k=_(z);typeof z=="number"||typeof z=="boolean"?(F.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,I+$,F.__data)):z.isMatrix3?(F.__data[0]=z.elements[0],F.__data[1]=z.elements[1],F.__data[2]=z.elements[2],F.__data[3]=0,F.__data[4]=z.elements[3],F.__data[5]=z.elements[4],F.__data[6]=z.elements[5],F.__data[7]=0,F.__data[8]=z.elements[6],F.__data[9]=z.elements[7],F.__data[10]=z.elements[8],F.__data[11]=0):(z.toArray(F.__data,$),$+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(b,A,x,M){const R=b.value,C=A+"_"+x;if(M[C]===void 0)return typeof R=="number"||typeof R=="boolean"?M[C]=R:M[C]=R.clone(),!0;{const y=M[C];if(typeof R=="number"||typeof R=="boolean"){if(y!==R)return M[C]=R,!0}else if(y.equals(R)===!1)return y.copy(R),!0}return!1}function g(b){const A=b.uniforms;let x=0;const M=16;for(let C=0,y=A.length;C<y;C++){const T=Array.isArray(A[C])?A[C]:[A[C]];for(let N=0,F=T.length;N<F;N++){const I=T[N],G=Array.isArray(I.value)?I.value:[I.value];for(let $=0,V=G.length;$<V;$++){const z=G[$],k=_(z),j=x%M,X=j%k.boundary,L=j+X;x+=X,L!==0&&M-L<k.storage&&(x+=M-L),I.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=k.storage}}}const R=x%M;return R>0&&(x+=M-R),b.__size=x,b.__cache={},this}function _(b){const A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):rt("WebGLRenderer: Unsupported uniform value type.",b),A}function p(b){const A=b.target;A.removeEventListener("dispose",p);const x=o.indexOf(A.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function m(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}const e3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let lr=null;function t3(){return lr===null&&(lr=new qw(e3,16,16,Fa,ls),lr.name="DFG_LUT",lr.minFilter=Vn,lr.magFilter=Vn,lr.wrapS=qr,lr.wrapT=qr,lr.generateMipmaps=!1,lr.needsUpdate=!0),lr}class n3{constructor(e={}){const{canvas:t=Ew(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Bi}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const _=h,p=new Set([qp,Yp,jp]),m=new Set([Bi,Pr,Zl,Jl,Xp,$p]),b=new Uint32Array(4),A=new Int32Array(4);let x=null,M=null;const R=[],C=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let N=!1;this._outputColorSpace=Ni;let F=0,I=0,G=null,$=-1,V=null;const z=new nn,k=new nn;let j=null;const X=new Ot(0);let L=0,oe=t.width,ue=t.height,ke=1,Fe=null,Ve=null;const ee=new nn(0,0,oe,ue),le=new nn(0,0,oe,ue);let ge=!1;const Le=new Ev;let Ee=!1,fe=!1;const w=new ln,E=new se,W=new nn,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let q=!1;function O(){return G===null?ke:1}let U=i;function me(D,Y){return t.getContext(D,Y)}try{const D={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gp}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",Ze,!1),t.addEventListener("webglcontextcreationerror",Mt,!1),U===null){const Y="webgl2";if(U=me(Y,D),U===null)throw me(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw Et("WebGLRenderer: "+D.message),D}let ce,J,de,P,S,B,Z,te,K,Me,_e,He,Ae,xe,ye,Te,De,Ce,Qe,H,we,Se,Ie;function ve(){ce=new nA(U),ce.init(),we=new $C(U,ce),J=new Y2(U,ce,e,we),de=new WC(U,ce),J.reversedDepthBuffer&&f&&de.buffers.depth.setReversed(!0),P=new sA(U),S=new PC,B=new XC(U,ce,de,S,J,we,P),Z=new tA(T),te=new uE(U),Se=new $2(U,te),K=new iA(U,te,P,Se),Me=new aA(U,K,te,Se,P),Ce=new oA(U,J,B),ye=new q2(S),_e=new RC(T,Z,ce,J,Se,ye),He=new JC(T,S),Ae=new LC,xe=new kC(ce),De=new X2(T,Z,de,Me,g,l),Te=new GC(T,Me,J),Ie=new QC(U,P,J,de),Qe=new j2(U,ce,P),H=new rA(U,ce,P),P.programs=_e.programs,T.capabilities=J,T.extensions=ce,T.properties=S,T.renderLists=Ae,T.shadowMap=Te,T.state=de,T.info=P}ve(),_!==Bi&&(y=new cA(_,t.width,t.height,r,s));const ae=new KC(T,U);this.xr=ae,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const D=ce.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ce.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return ke},this.setPixelRatio=function(D){D!==void 0&&(ke=D,this.setSize(oe,ue,!1))},this.getSize=function(D){return D.set(oe,ue)},this.setSize=function(D,Y,re=!0){if(ae.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=D,ue=Y,t.width=Math.floor(D*ke),t.height=Math.floor(Y*ke),re===!0&&(t.style.width=D+"px",t.style.height=Y+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,D,Y)},this.getDrawingBufferSize=function(D){return D.set(oe*ke,ue*ke).floor()},this.setDrawingBufferSize=function(D,Y,re){oe=D,ue=Y,ke=re,t.width=Math.floor(D*re),t.height=Math.floor(Y*re),this.setViewport(0,0,D,Y)},this.setEffects=function(D){if(_===Bi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let Y=0;Y<D.length;Y++)if(D[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(z)},this.getViewport=function(D){return D.copy(ee)},this.setViewport=function(D,Y,re,ne){D.isVector4?ee.set(D.x,D.y,D.z,D.w):ee.set(D,Y,re,ne),de.viewport(z.copy(ee).multiplyScalar(ke).round())},this.getScissor=function(D){return D.copy(le)},this.setScissor=function(D,Y,re,ne){D.isVector4?le.set(D.x,D.y,D.z,D.w):le.set(D,Y,re,ne),de.scissor(k.copy(le).multiplyScalar(ke).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(D){de.setScissorTest(ge=D)},this.setOpaqueSort=function(D){Fe=D},this.setTransparentSort=function(D){Ve=D},this.getClearColor=function(D){return D.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(D=!0,Y=!0,re=!0){let ne=0;if(D){let Q=!1;if(G!==null){const Re=G.texture.format;Q=p.has(Re)}if(Q){const Re=G.texture.type,Ue=m.has(Re),Pe=De.getClearColor(),Xe=De.getClearAlpha(),We=Pe.r,ot=Pe.g,ft=Pe.b;Ue?(b[0]=We,b[1]=ot,b[2]=ft,b[3]=Xe,U.clearBufferuiv(U.COLOR,0,b)):(A[0]=We,A[1]=ot,A[2]=ft,A[3]=Xe,U.clearBufferiv(U.COLOR,0,A))}else ne|=U.COLOR_BUFFER_BIT}Y&&(ne|=U.DEPTH_BUFFER_BIT),re&&(ne|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&U.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",Mt,!1),De.dispose(),Ae.dispose(),xe.dispose(),S.dispose(),Z.dispose(),Me.dispose(),Se.dispose(),Ie.dispose(),_e.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",nt),ae.removeEventListener("sessionend",Qt),st.stop()};function Ge(D){D.preventDefault(),Pm("WebGLRenderer: Context Lost."),N=!0}function Ze(){Pm("WebGLRenderer: Context Restored."),N=!1;const D=P.autoReset,Y=Te.enabled,re=Te.autoUpdate,ne=Te.needsUpdate,Q=Te.type;ve(),P.autoReset=D,Te.enabled=Y,Te.autoUpdate=re,Te.needsUpdate=ne,Te.type=Q}function Mt(D){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function ze(D){const Y=D.target;Y.removeEventListener("dispose",ze),je(Y)}function je(D){ct(D),S.remove(D)}function ct(D){const Y=S.get(D).programs;Y!==void 0&&(Y.forEach(function(re){_e.releaseProgram(re)}),D.isShaderMaterial&&_e.releaseShaderCache(D))}this.renderBufferDirect=function(D,Y,re,ne,Q,Re){Y===null&&(Y=ie);const Ue=Q.isMesh&&Q.matrixWorld.determinant()<0,Pe=Di(D,Y,re,ne,Q);de.setMaterial(ne,Ue);let Xe=re.index,We=1;if(ne.wireframe===!0){if(Xe=K.getWireframeAttribute(re),Xe===void 0)return;We=2}const ot=re.drawRange,ft=re.attributes.position;let qe=ot.start*We,Ft=(ot.start+ot.count)*We;Re!==null&&(qe=Math.max(qe,Re.start*We),Ft=Math.min(Ft,(Re.start+Re.count)*We)),Xe!==null?(qe=Math.max(qe,0),Ft=Math.min(Ft,Xe.count)):ft!=null&&(qe=Math.max(qe,0),Ft=Math.min(Ft,ft.count));const en=Ft-qe;if(en<0||en===1/0)return;Se.setup(Q,ne,Pe,re,Xe);let Zt,Nt=Qe;if(Xe!==null&&(Zt=te.get(Xe),Nt=H,Nt.setIndex(Zt)),Q.isMesh)ne.wireframe===!0?(de.setLineWidth(ne.wireframeLinewidth*O()),Nt.setMode(U.LINES)):Nt.setMode(U.TRIANGLES);else if(Q.isLine){let Ln=ne.linewidth;Ln===void 0&&(Ln=1),de.setLineWidth(Ln*O()),Q.isLineSegments?Nt.setMode(U.LINES):Q.isLineLoop?Nt.setMode(U.LINE_LOOP):Nt.setMode(U.LINE_STRIP)}else Q.isPoints?Nt.setMode(U.POINTS):Q.isSprite&&Nt.setMode(U.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Yu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))Nt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Ln=Q._multiDrawStarts,Ye=Q._multiDrawCounts,mi=Q._multiDrawCount,wt=Xe?te.get(Xe).bytesPerElement:1,ji=S.get(ne).currentProgram.getUniforms();for(let sr=0;sr<mi;sr++)ji.setValue(U,"_gl_DrawID",sr),Nt.render(Ln[sr]/wt,Ye[sr])}else if(Q.isInstancedMesh)Nt.renderInstances(qe,en,Q.count);else if(re.isInstancedBufferGeometry){const Ln=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ye=Math.min(re.instanceCount,Ln);Nt.renderInstances(qe,en,Ye)}else Nt.render(qe,en)};function Ne(D,Y,re){D.transparent===!0&&D.side===jr&&D.forceSinglePass===!1?(D.side=hi,D.needsUpdate=!0,Pn(D,Y,re),D.side=Vs,D.needsUpdate=!0,Pn(D,Y,re),D.side=jr):Pn(D,Y,re)}this.compile=function(D,Y,re=null){re===null&&(re=D),M=xe.get(re),M.init(Y),C.push(M),re.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(M.pushLight(Q),Q.castShadow&&M.pushShadow(Q))}),D!==re&&D.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(M.pushLight(Q),Q.castShadow&&M.pushShadow(Q))}),M.setupLights();const ne=new Set;return D.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Re=Q.material;if(Re)if(Array.isArray(Re))for(let Ue=0;Ue<Re.length;Ue++){const Pe=Re[Ue];Ne(Pe,re,Q),ne.add(Pe)}else Ne(Re,re,Q),ne.add(Re)}),M=C.pop(),ne},this.compileAsync=function(D,Y,re=null){const ne=this.compile(D,Y,re);return new Promise(Q=>{function Re(){if(ne.forEach(function(Ue){S.get(Ue).currentProgram.isReady()&&ne.delete(Ue)}),ne.size===0){Q(D);return}setTimeout(Re,10)}ce.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let tt=null;function Je(D){tt&&tt(D)}function nt(){st.stop()}function Qt(){st.start()}const st=new Pv;st.setAnimationLoop(Je),typeof self<"u"&&st.setContext(self),this.setAnimationLoop=function(D){tt=D,ae.setAnimationLoop(D),D===null?st.stop():st.start()},ae.addEventListener("sessionstart",nt),ae.addEventListener("sessionend",Qt),this.render=function(D,Y){if(Y!==void 0&&Y.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const re=ae.enabled===!0&&ae.isPresenting===!0,ne=y!==null&&(G===null||re)&&y.begin(T,G);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(Y),Y=ae.getCamera()),D.isScene===!0&&D.onBeforeRender(T,D,Y,G),M=xe.get(D,C.length),M.init(Y),C.push(M),w.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Le.setFromProjectionMatrix(w,yr,Y.reversedDepth),fe=this.localClippingEnabled,Ee=ye.init(this.clippingPlanes,fe),x=Ae.get(D,R.length),x.init(),R.push(x),ae.enabled===!0&&ae.isPresenting===!0){const Ue=T.xr.getDepthSensingMesh();Ue!==null&&Wt(Ue,Y,-1/0,T.sortObjects)}Wt(D,Y,0,T.sortObjects),x.finish(),T.sortObjects===!0&&x.sort(Fe,Ve),q=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,q&&De.addToRenderList(x,D),this.info.render.frame++,Ee===!0&&ye.beginShadows();const Q=M.state.shadowsArray;if(Te.render(Q,D,Y),Ee===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&y.hasRenderPass())===!1){const Ue=x.opaque,Pe=x.transmissive;if(M.setupLights(),Y.isArrayCamera){const Xe=Y.cameras;if(Pe.length>0)for(let We=0,ot=Xe.length;We<ot;We++){const ft=Xe[We];Xt(Ue,Pe,D,ft)}q&&De.render(D);for(let We=0,ot=Xe.length;We<ot;We++){const ft=Xe[We];cn(x,D,ft,ft.viewport)}}else Pe.length>0&&Xt(Ue,Pe,D,Y),q&&De.render(D),cn(x,D,Y)}G!==null&&I===0&&(B.updateMultisampleRenderTarget(G),B.updateRenderTargetMipmap(G)),ne&&y.end(T),D.isScene===!0&&D.onAfterRender(T,D,Y),Se.resetDefaultState(),$=-1,V=null,C.pop(),C.length>0?(M=C[C.length-1],Ee===!0&&ye.setGlobalState(T.clippingPlanes,M.state.camera)):M=null,R.pop(),R.length>0?x=R[R.length-1]:x=null};function Wt(D,Y,re,ne){if(D.visible===!1)return;if(D.layers.test(Y.layers)){if(D.isGroup)re=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Y);else if(D.isLight)M.pushLight(D),D.castShadow&&M.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Le.intersectsSprite(D)){ne&&W.setFromMatrixPosition(D.matrixWorld).applyMatrix4(w);const Ue=Me.update(D),Pe=D.material;Pe.visible&&x.push(D,Ue,Pe,re,W.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Le.intersectsObject(D))){const Ue=Me.update(D),Pe=D.material;if(ne&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),W.copy(D.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),W.copy(Ue.boundingSphere.center)),W.applyMatrix4(D.matrixWorld).applyMatrix4(w)),Array.isArray(Pe)){const Xe=Ue.groups;for(let We=0,ot=Xe.length;We<ot;We++){const ft=Xe[We],qe=Pe[ft.materialIndex];qe&&qe.visible&&x.push(D,Ue,qe,re,W.z,ft)}}else Pe.visible&&x.push(D,Ue,Pe,re,W.z,null)}}const Re=D.children;for(let Ue=0,Pe=Re.length;Ue<Pe;Ue++)Wt(Re[Ue],Y,re,ne)}function cn(D,Y,re,ne){const{opaque:Q,transmissive:Re,transparent:Ue}=D;M.setupLightsView(re),Ee===!0&&ye.setGlobalState(T.clippingPlanes,re),ne&&de.viewport(z.copy(ne)),Q.length>0&&Lt(Q,Y,re),Re.length>0&&Lt(Re,Y,re),Ue.length>0&&Lt(Ue,Y,re),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Xt(D,Y,re,ne){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[ne.id]===void 0){const qe=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[ne.id]=new Er(1,1,{generateMipmaps:!0,type:qe?ls:Bi,minFilter:xo,samples:Math.max(4,J.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace})}const Re=M.state.transmissionRenderTarget[ne.id],Ue=ne.viewport||z;Re.setSize(Ue.z*T.transmissionResolutionScale,Ue.w*T.transmissionResolutionScale);const Pe=T.getRenderTarget(),Xe=T.getActiveCubeFace(),We=T.getActiveMipmapLevel();T.setRenderTarget(Re),T.getClearColor(X),L=T.getClearAlpha(),L<1&&T.setClearColor(16777215,.5),T.clear(),q&&De.render(re);const ot=T.toneMapping;T.toneMapping=wr;const ft=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),M.setupLightsView(ne),Ee===!0&&ye.setGlobalState(T.clippingPlanes,ne),Lt(D,re,ne),B.updateMultisampleRenderTarget(Re),B.updateRenderTargetMipmap(Re),ce.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Ft=0,en=Y.length;Ft<en;Ft++){const Zt=Y[Ft],{object:Nt,geometry:Ln,material:Ye,group:mi}=Zt;if(Ye.side===jr&&Nt.layers.test(ne.layers)){const wt=Ye.side;Ye.side=hi,Ye.needsUpdate=!0,At(Nt,re,ne,Ln,Ye,mi),Ye.side=wt,Ye.needsUpdate=!0,qe=!0}}qe===!0&&(B.updateMultisampleRenderTarget(Re),B.updateRenderTargetMipmap(Re))}T.setRenderTarget(Pe,Xe,We),T.setClearColor(X,L),ft!==void 0&&(ne.viewport=ft),T.toneMapping=ot}function Lt(D,Y,re){const ne=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Re=D.length;Q<Re;Q++){const Ue=D[Q],{object:Pe,geometry:Xe,group:We}=Ue;let ot=Ue.material;ot.allowOverride===!0&&ne!==null&&(ot=ne),Pe.layers.test(re.layers)&&At(Pe,Y,re,Xe,ot,We)}}function At(D,Y,re,ne,Q,Re){D.onBeforeRender(T,Y,re,ne,Q,Re),D.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),Q.onBeforeRender(T,Y,re,ne,D,Re),Q.transparent===!0&&Q.side===jr&&Q.forceSinglePass===!1?(Q.side=hi,Q.needsUpdate=!0,T.renderBufferDirect(re,Y,ne,Q,D,Re),Q.side=Vs,Q.needsUpdate=!0,T.renderBufferDirect(re,Y,ne,Q,D,Re),Q.side=jr):T.renderBufferDirect(re,Y,ne,Q,D,Re),D.onAfterRender(T,Y,re,ne,Q,Re)}function Pn(D,Y,re){Y.isScene!==!0&&(Y=ie);const ne=S.get(D),Q=M.state.lights,Re=M.state.shadowsArray,Ue=Q.state.version,Pe=_e.getParameters(D,Q.state,Re,Y,re),Xe=_e.getProgramCacheKey(Pe);let We=ne.programs;ne.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?Y.environment:null,ne.fog=Y.fog;const ot=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;ne.envMap=Z.get(D.envMap||ne.environment,ot),ne.envMapRotation=ne.environment!==null&&D.envMap===null?Y.environmentRotation:D.envMapRotation,We===void 0&&(D.addEventListener("dispose",ze),We=new Map,ne.programs=We);let ft=We.get(Xe);if(ft!==void 0){if(ne.currentProgram===ft&&ne.lightsStateVersion===Ue)return Dn(D,Pe),ft}else Pe.uniforms=_e.getUniforms(D),D.onBeforeCompile(Pe,T),ft=_e.acquireProgram(Pe,Xe),We.set(Xe,ft),ne.uniforms=Pe.uniforms;const qe=ne.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(qe.clippingPlanes=ye.uniform),Dn(D,Pe),ne.needsLights=dn(D),ne.lightsStateVersion=Ue,ne.needsLights&&(qe.ambientLightColor.value=Q.state.ambient,qe.lightProbe.value=Q.state.probe,qe.directionalLights.value=Q.state.directional,qe.directionalLightShadows.value=Q.state.directionalShadow,qe.spotLights.value=Q.state.spot,qe.spotLightShadows.value=Q.state.spotShadow,qe.rectAreaLights.value=Q.state.rectArea,qe.ltc_1.value=Q.state.rectAreaLTC1,qe.ltc_2.value=Q.state.rectAreaLTC2,qe.pointLights.value=Q.state.point,qe.pointLightShadows.value=Q.state.pointShadow,qe.hemisphereLights.value=Q.state.hemi,qe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,qe.spotLightMatrix.value=Q.state.spotLightMatrix,qe.spotLightMap.value=Q.state.spotLightMap,qe.pointShadowMatrix.value=Q.state.pointShadowMatrix),ne.currentProgram=ft,ne.uniformsList=null,ft}function Ht(D){if(D.uniformsList===null){const Y=D.currentProgram.getUniforms();D.uniformsList=yu.seqWithValue(Y.seq,D.uniforms)}return D.uniformsList}function Dn(D,Y){const re=S.get(D);re.outputColorSpace=Y.outputColorSpace,re.batching=Y.batching,re.batchingColor=Y.batchingColor,re.instancing=Y.instancing,re.instancingColor=Y.instancingColor,re.instancingMorph=Y.instancingMorph,re.skinning=Y.skinning,re.morphTargets=Y.morphTargets,re.morphNormals=Y.morphNormals,re.morphColors=Y.morphColors,re.morphTargetsCount=Y.morphTargetsCount,re.numClippingPlanes=Y.numClippingPlanes,re.numIntersection=Y.numClipIntersection,re.vertexAlphas=Y.vertexAlphas,re.vertexTangents=Y.vertexTangents,re.toneMapping=Y.toneMapping}function Di(D,Y,re,ne,Q){Y.isScene!==!0&&(Y=ie),B.resetTextureUnits();const Re=Y.fog,Ue=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?Y.environment:null,Pe=G===null?T.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Na,Xe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,We=Z.get(ne.envMap||Ue,Xe),ot=ne.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ft=!!re.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),qe=!!re.morphAttributes.position,Ft=!!re.morphAttributes.normal,en=!!re.morphAttributes.color;let Zt=wr;ne.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Zt=T.toneMapping);const Nt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Ln=Nt!==void 0?Nt.length:0,Ye=S.get(ne),mi=M.state.lights;if(Ee===!0&&(fe===!0||D!==V)){const xn=D===V&&ne.id===$;ye.setState(ne,D,xn)}let wt=!1;ne.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==mi.state.version||Ye.outputColorSpace!==Pe||Q.isBatchedMesh&&Ye.batching===!1||!Q.isBatchedMesh&&Ye.batching===!0||Q.isBatchedMesh&&Ye.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Ye.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Ye.instancing===!1||!Q.isInstancedMesh&&Ye.instancing===!0||Q.isSkinnedMesh&&Ye.skinning===!1||!Q.isSkinnedMesh&&Ye.skinning===!0||Q.isInstancedMesh&&Ye.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ye.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ye.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ye.instancingMorph===!1&&Q.morphTexture!==null||Ye.envMap!==We||ne.fog===!0&&Ye.fog!==Re||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ye.numPlanes||Ye.numIntersection!==ye.numIntersection)||Ye.vertexAlphas!==ot||Ye.vertexTangents!==ft||Ye.morphTargets!==qe||Ye.morphNormals!==Ft||Ye.morphColors!==en||Ye.toneMapping!==Zt||Ye.morphTargetsCount!==Ln)&&(wt=!0):(wt=!0,Ye.__version=ne.version);let ji=Ye.currentProgram;wt===!0&&(ji=Pn(ne,Y,Q));let sr=!1,Ws=!1,No=!1;const kt=ji.getUniforms(),wn=Ye.uniforms;if(de.useProgram(ji.program)&&(sr=!0,Ws=!0,No=!0),ne.id!==$&&($=ne.id,Ws=!0),sr||V!==D){de.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),kt.setValue(U,"projectionMatrix",D.projectionMatrix),kt.setValue(U,"viewMatrix",D.matrixWorldInverse);const ps=kt.map.cameraPosition;ps!==void 0&&ps.setValue(U,E.setFromMatrixPosition(D.matrixWorld)),J.logarithmicDepthBuffer&&kt.setValue(U,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&kt.setValue(U,"isOrthographic",D.isOrthographicCamera===!0),V!==D&&(V=D,Ws=!0,No=!0)}if(Ye.needsLights&&(mi.state.directionalShadowMap.length>0&&kt.setValue(U,"directionalShadowMap",mi.state.directionalShadowMap,B),mi.state.spotShadowMap.length>0&&kt.setValue(U,"spotShadowMap",mi.state.spotShadowMap,B),mi.state.pointShadowMap.length>0&&kt.setValue(U,"pointShadowMap",mi.state.pointShadowMap,B)),Q.isSkinnedMesh){kt.setOptional(U,Q,"bindMatrix"),kt.setOptional(U,Q,"bindMatrixInverse");const xn=Q.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),kt.setValue(U,"boneTexture",xn.boneTexture,B))}Q.isBatchedMesh&&(kt.setOptional(U,Q,"batchingTexture"),kt.setValue(U,"batchingTexture",Q._matricesTexture,B),kt.setOptional(U,Q,"batchingIdTexture"),kt.setValue(U,"batchingIdTexture",Q._indirectTexture,B),kt.setOptional(U,Q,"batchingColorTexture"),Q._colorsTexture!==null&&kt.setValue(U,"batchingColorTexture",Q._colorsTexture,B));const hs=re.morphAttributes;if((hs.position!==void 0||hs.normal!==void 0||hs.color!==void 0)&&Ce.update(Q,re,ji),(Ws||Ye.receiveShadow!==Q.receiveShadow)&&(Ye.receiveShadow=Q.receiveShadow,kt.setValue(U,"receiveShadow",Q.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&Y.environment!==null&&(wn.envMapIntensity.value=Y.environmentIntensity),wn.dfgLUT!==void 0&&(wn.dfgLUT.value=t3()),Ws&&(kt.setValue(U,"toneMappingExposure",T.toneMappingExposure),Ye.needsLights&&un(wn,No),Re&&ne.fog===!0&&He.refreshFogUniforms(wn,Re),He.refreshMaterialUniforms(wn,ne,ke,ue,M.state.transmissionRenderTarget[D.id]),yu.upload(U,Ht(Ye),wn,B)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(yu.upload(U,Ht(Ye),wn,B),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&kt.setValue(U,"center",Q.center),kt.setValue(U,"modelViewMatrix",Q.modelViewMatrix),kt.setValue(U,"normalMatrix",Q.normalMatrix),kt.setValue(U,"modelMatrix",Q.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const xn=ne.uniformsGroups;for(let ps=0,Oo=xn.length;ps<Oo;ps++){const i0=xn[ps];Ie.update(i0,ji),Ie.bind(i0,ji)}}return ji}function un(D,Y){D.ambientLightColor.needsUpdate=Y,D.lightProbe.needsUpdate=Y,D.directionalLights.needsUpdate=Y,D.directionalLightShadows.needsUpdate=Y,D.pointLights.needsUpdate=Y,D.pointLightShadows.needsUpdate=Y,D.spotLights.needsUpdate=Y,D.spotLightShadows.needsUpdate=Y,D.rectAreaLights.needsUpdate=Y,D.hemisphereLights.needsUpdate=Y}function dn(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(D,Y,re){const ne=S.get(D);ne.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),S.get(D.texture).__webglTexture=Y,S.get(D.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:re,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,Y){const re=S.get(D);re.__webglFramebuffer=Y,re.__useDefaultFramebuffer=Y===void 0};const _n=U.createFramebuffer();this.setRenderTarget=function(D,Y=0,re=0){G=D,F=Y,I=re;let ne=null,Q=!1,Re=!1;if(D){const Pe=S.get(D);if(Pe.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(U.FRAMEBUFFER,Pe.__webglFramebuffer),z.copy(D.viewport),k.copy(D.scissor),j=D.scissorTest,de.viewport(z),de.scissor(k),de.setScissorTest(j),$=-1;return}else if(Pe.__webglFramebuffer===void 0)B.setupRenderTarget(D);else if(Pe.__hasExternalTextures)B.rebindTextures(D,S.get(D.texture).__webglTexture,S.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const ot=D.depthTexture;if(Pe.__boundDepthTexture!==ot){if(ot!==null&&S.has(ot)&&(D.width!==ot.image.width||D.height!==ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(D)}}const Xe=D.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Re=!0);const We=S.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(We[Y])?ne=We[Y][re]:ne=We[Y],Q=!0):D.samples>0&&B.useMultisampledRTT(D)===!1?ne=S.get(D).__webglMultisampledFramebuffer:Array.isArray(We)?ne=We[re]:ne=We,z.copy(D.viewport),k.copy(D.scissor),j=D.scissorTest}else z.copy(ee).multiplyScalar(ke).floor(),k.copy(le).multiplyScalar(ke).floor(),j=ge;if(re!==0&&(ne=_n),de.bindFramebuffer(U.FRAMEBUFFER,ne)&&de.drawBuffers(D,ne),de.viewport(z),de.scissor(k),de.setScissorTest(j),Q){const Pe=S.get(D.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pe.__webglTexture,re)}else if(Re){const Pe=Y;for(let Xe=0;Xe<D.textures.length;Xe++){const We=S.get(D.textures[Xe]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Xe,We.__webglTexture,re,Pe)}}else if(D!==null&&re!==0){const Pe=S.get(D.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Pe.__webglTexture,re)}$=-1},this.readRenderTargetPixels=function(D,Y,re,ne,Q,Re,Ue,Pe=0){if(!(D&&D.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=S.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ue!==void 0&&(Xe=Xe[Ue]),Xe){de.bindFramebuffer(U.FRAMEBUFFER,Xe);try{const We=D.textures[Pe],ot=We.format,ft=We.type;if(D.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Pe),!J.textureFormatReadable(ot)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(ft)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=D.width-ne&&re>=0&&re<=D.height-Q&&U.readPixels(Y,re,ne,Q,we.convert(ot),we.convert(ft),Re)}finally{const We=G!==null?S.get(G).__webglFramebuffer:null;de.bindFramebuffer(U.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(D,Y,re,ne,Q,Re,Ue,Pe=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=S.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ue!==void 0&&(Xe=Xe[Ue]),Xe)if(Y>=0&&Y<=D.width-ne&&re>=0&&re<=D.height-Q){de.bindFramebuffer(U.FRAMEBUFFER,Xe);const We=D.textures[Pe],ot=We.format,ft=We.type;if(D.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Pe),!J.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,qe),U.bufferData(U.PIXEL_PACK_BUFFER,Re.byteLength,U.STREAM_READ),U.readPixels(Y,re,ne,Q,we.convert(ot),we.convert(ft),0);const Ft=G!==null?S.get(G).__webglFramebuffer:null;de.bindFramebuffer(U.FRAMEBUFFER,Ft);const en=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Tw(U,en,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,qe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Re),U.deleteBuffer(qe),U.deleteSync(en),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,Y=null,re=0){const ne=Math.pow(2,-re),Q=Math.floor(D.image.width*ne),Re=Math.floor(D.image.height*ne),Ue=Y!==null?Y.x:0,Pe=Y!==null?Y.y:0;B.setTexture2D(D,0),U.copyTexSubImage2D(U.TEXTURE_2D,re,0,0,Ue,Pe,Q,Re),de.unbindTexture()};const Lr=U.createFramebuffer(),Fo=U.createFramebuffer();this.copyTextureToTexture=function(D,Y,re=null,ne=null,Q=0,Re=0){let Ue,Pe,Xe,We,ot,ft,qe,Ft,en;const Zt=D.isCompressedTexture?D.mipmaps[Re]:D.image;if(re!==null)Ue=re.max.x-re.min.x,Pe=re.max.y-re.min.y,Xe=re.isBox3?re.max.z-re.min.z:1,We=re.min.x,ot=re.min.y,ft=re.isBox3?re.min.z:0;else{const wn=Math.pow(2,-Q);Ue=Math.floor(Zt.width*wn),Pe=Math.floor(Zt.height*wn),D.isDataArrayTexture?Xe=Zt.depth:D.isData3DTexture?Xe=Math.floor(Zt.depth*wn):Xe=1,We=0,ot=0,ft=0}ne!==null?(qe=ne.x,Ft=ne.y,en=ne.z):(qe=0,Ft=0,en=0);const Nt=we.convert(Y.format),Ln=we.convert(Y.type);let Ye;Y.isData3DTexture?(B.setTexture3D(Y,0),Ye=U.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(B.setTexture2DArray(Y,0),Ye=U.TEXTURE_2D_ARRAY):(B.setTexture2D(Y,0),Ye=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Y.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,Y.unpackAlignment);const mi=U.getParameter(U.UNPACK_ROW_LENGTH),wt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ji=U.getParameter(U.UNPACK_SKIP_PIXELS),sr=U.getParameter(U.UNPACK_SKIP_ROWS),Ws=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Zt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Zt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,We),U.pixelStorei(U.UNPACK_SKIP_ROWS,ot),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ft);const No=D.isDataArrayTexture||D.isData3DTexture,kt=Y.isDataArrayTexture||Y.isData3DTexture;if(D.isDepthTexture){const wn=S.get(D),hs=S.get(Y),xn=S.get(wn.__renderTarget),ps=S.get(hs.__renderTarget);de.bindFramebuffer(U.READ_FRAMEBUFFER,xn.__webglFramebuffer),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,ps.__webglFramebuffer);for(let Oo=0;Oo<Xe;Oo++)No&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,S.get(D).__webglTexture,Q,ft+Oo),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,S.get(Y).__webglTexture,Re,en+Oo)),U.blitFramebuffer(We,ot,Ue,Pe,qe,Ft,Ue,Pe,U.DEPTH_BUFFER_BIT,U.NEAREST);de.bindFramebuffer(U.READ_FRAMEBUFFER,null),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Q!==0||D.isRenderTargetTexture||S.has(D)){const wn=S.get(D),hs=S.get(Y);de.bindFramebuffer(U.READ_FRAMEBUFFER,Lr),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,Fo);for(let xn=0;xn<Xe;xn++)No?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,wn.__webglTexture,Q,ft+xn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,wn.__webglTexture,Q),kt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,hs.__webglTexture,Re,en+xn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,hs.__webglTexture,Re),Q!==0?U.blitFramebuffer(We,ot,Ue,Pe,qe,Ft,Ue,Pe,U.COLOR_BUFFER_BIT,U.NEAREST):kt?U.copyTexSubImage3D(Ye,Re,qe,Ft,en+xn,We,ot,Ue,Pe):U.copyTexSubImage2D(Ye,Re,qe,Ft,We,ot,Ue,Pe);de.bindFramebuffer(U.READ_FRAMEBUFFER,null),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else kt?D.isDataTexture||D.isData3DTexture?U.texSubImage3D(Ye,Re,qe,Ft,en,Ue,Pe,Xe,Nt,Ln,Zt.data):Y.isCompressedArrayTexture?U.compressedTexSubImage3D(Ye,Re,qe,Ft,en,Ue,Pe,Xe,Nt,Zt.data):U.texSubImage3D(Ye,Re,qe,Ft,en,Ue,Pe,Xe,Nt,Ln,Zt):D.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Re,qe,Ft,Ue,Pe,Nt,Ln,Zt.data):D.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Re,qe,Ft,Zt.width,Zt.height,Nt,Zt.data):U.texSubImage2D(U.TEXTURE_2D,Re,qe,Ft,Ue,Pe,Nt,Ln,Zt);U.pixelStorei(U.UNPACK_ROW_LENGTH,mi),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,wt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ji),U.pixelStorei(U.UNPACK_SKIP_ROWS,sr),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ws),Re===0&&Y.generateMipmaps&&U.generateMipmap(Ye),de.unbindTexture()},this.initRenderTarget=function(D){S.get(D).__webglFramebuffer===void 0&&B.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?B.setTextureCube(D,0):D.isData3DTexture?B.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?B.setTexture2DArray(D,0):B.setTexture2D(D,0),de.unbindTexture()},this.resetState=function(){F=0,I=0,G=null,de.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}const Ef=9,i3=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,r3={__name:"Blob3DBackground",setup(n,{expose:e}){const t=Oe(null);let i=null;const r={sampleScreenPixel:null,samplePoints:null},s=(p,m)=>{var T;if(!l||!d)return null;const b=(T=t.value)==null?void 0:T.getBoundingClientRect();if(!b)return null;const A=Math.round((p-b.left)*l.getPixelRatio()),x=Math.round((m-b.top)*l.getPixelRatio()),M=Math.round(b.width*l.getPixelRatio()),R=Math.round(b.height*l.getPixelRatio());if(A<0||x<0||A>=M||x>=R)return null;const C=l.getContext(),y=new Uint8Array(4);return C.readPixels(A,R-x-1,1,1,C.RGBA,C.UNSIGNED_BYTE,y),{r:y[0],g:y[1],b:y[2],a:y[3]}},o=(p,m,b,A)=>{var $;if(!l||!d)return null;const x=($=t.value)==null?void 0:$.getBoundingClientRect();if(!x)return null;const M=l.getPixelRatio(),R=Math.round(x.width*M),C=Math.round(x.height*M);let y=Math.floor((p-x.left)*M),T=Math.floor((m-x.top)*M),N=Math.ceil(b*M),F=Math.ceil(A*M);if(y<0&&(N+=y,y=0),T<0&&(F+=T,T=0),N=Math.min(N,R-y),F=Math.min(F,C-T),N<=0||F<=0)return null;const I=N*F*4;(!i||i.length<I)&&(i=new Uint8Array(I));const G=l.getContext();return G.readPixels(y,C-(T+F),N,F,G.RGBA,G.UNSIGNED_BYTE,i),{data:i,px:y,py:T,pw:N,ph:F,ratio:M,left:x.left,top:x.top}},a=p=>{if(!p||p.length===0)return[];let m=1/0,b=1/0,A=-1/0,x=-1/0;for(const V of p)V.x<m&&(m=V.x),V.x>A&&(A=V.x),V.y<b&&(b=V.y),V.y>x&&(x=V.y);const M=o(m,b,A-m+1,x-b+1);if(!M)return p.map(()=>null);const{data:R,px:C,py:y,pw:T,ph:N,ratio:F,left:I,top:G}=M,$=new Array(p.length);for(let V=0;V<p.length;V++){const z=Math.floor((p[V].x-I)*F),k=Math.floor((p[V].y-G)*F);if(z<C||z>=C+T||k<y||k>=y+N){$[V]=null;continue}const X=((y+N-1-k)*T+(z-C))*4;$[V]={r:R[X],g:R[X+1],b:R[X+2],a:R[X+3]}}return $};r.sampleScreenPixel=s,r.samplePoints=a,window.__blobSampler=r,e({sampleScreenPixel:s,samplePoints:a});let l=null,c=null,u=null,d=null,f=null,h=[];function g(p,m){const b=getComputedStyle(document.documentElement).getPropertyValue(p).trim();if(!b)return m;const A=b.split(/\s+/).map(Number);return A.length<3||A.some(Number.isNaN)?m:new se(A[0]/255,A[1]/255,A[2]/255)}const _=`
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
    for (int i = 0; i < 24; i++) {
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
    for (int i = 0; i < 128; i++) {
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
`;return Wn(()=>{const p=t.value,m=p.clientWidth,b=p.clientHeight;l=new n3({antialias:!1,alpha:!0,preserveDrawingBuffer:!0}),l.setSize(m,b),l.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),p.appendChild(l.domElement),c=new Hw,u=new e0(-1,1,1,-1,0,1);const A=[{base:[-3.4,1.4,-.5],amp:[2.4,2,1.3],spd:[.13,.089,.061],ph:[0,1.7,3.4],r:2.6},{base:[3.6,-1.2,.4],amp:[2.2,2.3,1.2],spd:[.101,.127,.073],ph:[2.1,.4,5.2],r:2.3},{base:[-.8,-2.6,-1.1],amp:[2.6,1.9,1.5],spd:[.083,.113,.055],ph:[4.3,2.9,1.1],r:1.95},{base:[1.9,2.6,-.8],amp:[2,2.1,1.1],spd:[.119,.067,.091],ph:[1.2,5.1,2.7],r:1.5},{base:[-4.1,-1.9,.7],amp:[1.8,2.2,1.4],spd:[.071,.103,.047],ph:[3.8,1.5,4.6],r:1.25},{base:[4.2,1.8,-1.4],amp:[2.1,1.8,1.6],spd:[.109,.079,.121],ph:[5.5,3.2,.8],r:1.1},{base:[.4,3.3,.3],amp:[2.3,1.5,1.2],spd:[.059,.131,.085],ph:[2.6,4.8,3.9],r:.75},{base:[-2.1,2.9,-1.7],amp:[1.9,2,1.3],spd:[.127,.053,.097],ph:[.7,2.3,5.8],r:.58},{base:[1.4,-3.2,-.3],amp:[2.2,1.7,1.5],spd:[.093,.117,.065],ph:[4.9,.9,2.2],r:.45}],x=A.map(()=>new se),M=A.map(Fe=>Fe.r),R=new se(.06,.73,.51),C=new se(.02,.47,.34),y=new se(.02,.31,.23),T=new se(.2,.83,.6);d=new rr({vertexShader:i3,fragmentShader:_,transparent:!0,depthWrite:!1,uniforms:{uResolution:{value:new bt(m,b)},uTime:{value:0},uScroll:{value:0},uMouse:{value:new bt(0,0)},uMouseDir:{value:new bt(1,0)},uMouseStrength:{value:0},uBallPos:{value:x},uBallRadius:{value:M},uColorA:{value:R.clone()},uColorB:{value:C.clone()},uColorC:{value:y.clone()},uColorHi:{value:T.clone()}}});const N=new Dr(new uc(2,2),d);N.frustumCulled=!1,c.add(N);const F=()=>{d.uniforms.uColorA.value.copy(g("--color-primary-500",R)),d.uniforms.uColorB.value.copy(g("--color-primary-700",C)),d.uniforms.uColorC.value.copy(g("--color-primary-900",y)),d.uniforms.uColorHi.value.copy(g("--color-primary-400",T))};F(),window.addEventListener("colorpalettechange",F);const I=new bt(0,0),G=new bt(0,0),$=new bt(1,0);let V=0,z=!1;const k=Fe=>{const Ve=Fe.clientX/window.innerWidth*2-1,ee=-(Fe.clientY/window.innerHeight*2-1),le=Ve-G.x,ge=ee-G.y,Le=Math.hypot(le,ge);if(Le>8e-4){$.x+=(le/Le-$.x)*.25,$.y+=(ge/Le-$.y)*.25;const Ee=Math.hypot($.x,$.y)||1;$.x/=Ee,$.y/=Ee,V=Math.min(1,V+Le*7)}G.set(Ve,ee),I.set(Ve,ee),z=!0},j=()=>{z=!1};window.addEventListener("mousemove",k,{passive:!0}),document.addEventListener("mouseleave",j);let X=0;const L=()=>{const Fe=document.getElementById("home");if(!Fe)return;const Ve=Fe.getBoundingClientRect();X=Math.max(0,Math.min(1,-Ve.top/window.innerHeight))};L(),window.addEventListener("scroll",L,{passive:!0});const oe=()=>{const Fe=p.clientWidth,Ve=p.clientHeight;l.setSize(Fe,Ve),d.uniforms.uResolution.value.set(Fe*l.getPixelRatio(),Ve*l.getPixelRatio())};oe(),window.addEventListener("resize",oe);const ue=performance.now(),ke=()=>{f=requestAnimationFrame(ke);const Fe=(performance.now()-ue)/1e3,Ve=d.uniforms.uScroll.value;d.uniforms.uScroll.value=Ve+(X-Ve)*.08;const ee=d.uniforms.uScroll.value,le=d.uniforms.uMouse.value;le.x+=(I.x-le.x)*.1,le.y+=(I.y-le.y)*.1,V*=.93;const ge=z?.3+V*.85:0,Le=d.uniforms.uMouseStrength;Le.value+=(ge-Le.value)*.12;const Ee=d.uniforms.uMouseDir.value;Ee.x+=($.x-Ee.x)*.1,Ee.y+=($.y-Ee.y)*.1;const fe=Math.hypot(Ee.x,Ee.y)||1;Ee.x/=fe,Ee.y/=fe;for(let w=0;w<A.length;w++){const E=A[w],W=1+ee*1.1,ie=1-ee*.25,q=1.55;x[w].set((E.base[0]+Math.sin(Fe*E.spd[0]*q+E.ph[0])*E.amp[0])*W,(E.base[1]+Math.sin(Fe*E.spd[1]*q+E.ph[1])*E.amp[1])*ie-ee*1.6,E.base[2]+Math.cos(Fe*E.spd[2]*q+E.ph[2])*E.amp[2]-ee*1.2),M[w]=E.r*(1+Math.sin(Fe*(.055+w*.009)+w*1.9)*.16)*(1-ee*.15);const O=le.x*3.6,U=le.y*2.3,me=O-x[w].x,ce=U-x[w].y,J=Math.hypot(me,ce),de=M[w]+.9;if(J<de){const S=(1-J/de)*Le.value*.1;x[w].x+=Ee.x*S,x[w].y+=Ee.y*S}}d.uniforms.uTime.value=Fe,l.render(c,u)};ke(),h.push(()=>{cancelAnimationFrame(f),window.removeEventListener("scroll",L),window.removeEventListener("resize",oe),window.removeEventListener("mousemove",k),document.removeEventListener("mouseleave",j),window.removeEventListener("colorpalettechange",F),N.geometry.dispose(),d.dispose(),l.dispose(),l.domElement.parentNode&&l.domElement.parentNode.removeChild(l.domElement)})}),ii(()=>{h.forEach(p=>p())}),(p,m)=>(he(),pe("div",{ref_key:"containerRef",ref:t,class:"absolute inset-0 overflow-hidden pointer-events-none"},null,512))}},t0=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},s3={class:"text-primary-500 light:text-primary-600"},o3={__name:"HeroSection",setup(n){_t.registerPlugin(pt);const e=Oe(""),t=Oe(0),i=Oe(!1),r=["Frontend Developer","Vue.js Specialist","UI/UX Enthusiast","Problem Solver"];let s=null,o=null,a=[],l=null,c=null;const u=Oe(null),d=Oe(null),f=Oe(null),h=Oe(null),g=Oe(null),_=Oe(null),p=Oe(null),m=Oe(null),b=Oe(null),A=()=>{const x=r[t.value],M=e.value.length;if(i.value){if(e.value=x.substring(0,M-1),M===0){i.value=!1,t.value=(t.value+1)%r.length,s=setTimeout(A,500);return}s=setTimeout(A,50)}else{if(e.value=x.substring(0,M+1),M===x.length){i.value=!0,s=setTimeout(A,2e3);return}s=setTimeout(A,100)}};return Wn(()=>{s=setTimeout(A,500),o=_t.timeline({defaults:{ease:"power3.out"}}),o.fromTo(u.value,{opacity:0,y:30,filter:"blur(8px)"},{opacity:1,y:0,filter:"blur(0px)",clearProps:"filter",duration:.8}).fromTo(d.value,{opacity:0,y:50,filter:"blur(12px)"},{opacity:1,y:0,filter:"blur(0px)",clearProps:"filter",duration:1.1},"-=0.4").fromTo(f.value,{opacity:0,y:50,filter:"blur(12px)"},{opacity:1,y:0,filter:"blur(0px)",clearProps:"filter",duration:1.1},"-=0.6").fromTo(h.value,{opacity:0,y:40,filter:"blur(10px)"},{opacity:1,y:0,filter:"blur(0px)",clearProps:"filter",duration:1},"-=0.5").fromTo(g.value,{opacity:0,y:30,filter:"blur(8px)"},{opacity:1,y:0,filter:"blur(0px)",clearProps:"filter",duration:.8,stagger:.15},"-=0.5").fromTo(_.value,{opacity:0,y:-20,filter:"blur(6px)"},{opacity:1,y:0,filter:"blur(0px)",clearProps:"filter",duration:.7},"-=0.4"),l=_t.to(p.value,{yPercent:-30,opacity:.2,ease:"none",scrollTrigger:{trigger:m.value,start:"top top",end:"bottom top",scrub:!0}}),_t.to(_.value,{opacity:0,ease:"none",scrollTrigger:{trigger:m.value,start:"top top",end:"top 40%",scrub:!0}});const x=d.value,M=14,R=y=>{const T=x.getBoundingClientRect(),N=(y.clientX-T.left)/T.width-.5,F=(y.clientY-T.top)/T.height-.5;c&&c.kill(),c=_t.to(x,{rotationY:N*M*2,rotationX:-F*M*2,transformPerspective:600,transformOrigin:"center center",duration:.4,ease:"power2.out"})},C=()=>{c&&c.kill(),c=_t.to(x,{rotationX:0,rotationY:0,duration:.8,ease:"elastic.out(1, 0.4)"})};x.addEventListener("mousemove",R),x.addEventListener("mouseleave",C),a.push(()=>{x.removeEventListener("mousemove",R),x.removeEventListener("mouseleave",C)})}),ii(()=>{var x;clearTimeout(s),o&&o.kill(),l&&((x=l.scrollTrigger)==null||x.kill()),a.forEach(M=>M())}),(x,M)=>(he(),pe("section",{ref_key:"heroSectionRef",ref:m,id:"home",class:"relative h-screen flex items-center justify-center overflow-hidden sticky top-0"},[M[4]||(M[4]=v("div",{class:"absolute inset-0 bg-grid opacity-20"},null,-1)),Pt(r3),v("div",{ref_key:"contentRef",ref:p,class:"relative text-center px-4 sm:px-6 lg:px-8 mx-auto"},[v("p",{ref_key:"greetingRef",ref:u,class:"text-primary-400 tracking-widest text-sm mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] light:drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"}," PORTFOLIO ",512),v("h1",{ref_key:"nameRef",ref:d,class:"font-griaste text-5xl sm:text-6xl md:text-7xl text-white light:text-secondary-900 mb-4 foil-text name-glow"}," Kenneth Cortez ",512),v("h2",{ref_key:"roleRef",ref:f,class:"text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary-300 light:text-secondary-800 mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] light:drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"},[M[0]||(M[0]=Ns(" I'm a ",-1)),v("span",s3,be(e.value),1),M[1]||(M[1]=v("span",{class:"animate-pulse text-primary-500 light:text-primary-600"},"|",-1))],512),v("p",{ref_key:"descriptionRef",ref:h,class:"light:text-black text-white text-lg mb-8 max-w-2xl mx-auto"}," I build modern, responsive web applications with clean code and great user experiences. Passionate about turning ideas into reality through technology. ",512),v("div",{ref_key:"buttonsRef",ref:g,class:"flex flex-col sm:flex-row items-center justify-center gap-4"},[M[2]||(M[2]=v("a",{href:"#projects",class:"bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25 w-full sm:w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] light:drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"}," View My Work ",-1)),v("a",{ref_key:"resumeBtnRef",ref:b,href:"https://docs.google.com/document/d/1pxuH9Ue2NJ18GnzGR44gVKfEIvoe9YvMHj26P7A0RDY/edit?usp=sharing",target:"_blank",class:"resume-btn light:text-primary-800 light:border-primary-800 relative border border-white text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"}," MY RESUME ",512)],512)],512),v("a",{ref_key:"scrollIndicatorRef",ref:_,href:"#about",class:"absolute bottom-8 left-1/2 -translate-x-1/2 text-secondary-400 hover:text-primary-400 light:text-secondary-500 light:hover:text-primary-600 transition-colors duration-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] light:drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]","aria-label":"Scroll down"},[...M[3]||(M[3]=[v("svg",{class:"w-6 h-6 animate-bounce",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 14l-7 7m0 0l-7-7m7 7V3"})],-1)])],512)],512))}},a3=t0(o3,[["__scopeId","data-v-e8f2345c"]]);/*!
 * ScrollToPlugin 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var zn,Nv,ts,br,Us,Ov,Ea,eu,kv=function(){return typeof window<"u"},Bv=function(){return zn||kv()&&(zn=window.gsap)&&zn.registerPlugin&&zn},zv=function(e){return typeof e=="string"},_g=function(e){return typeof e=="function"},ec=function(e,t){var i=t==="x"?"Width":"Height",r="scroll"+i,s="client"+i;return e===ts||e===br||e===Us?Math.max(br[r],Us[r])-(ts["inner"+i]||br[s]||Us[s]):e[r]-e["offset"+i]},tc=function(e,t){var i="scroll"+(t==="x"?"Left":"Top");return e===ts&&(e.pageXOffset!=null?i="page"+t.toUpperCase()+"Offset":e=br[i]!=null?br:Us),function(){return e[i]}},l3=function(e,t,i,r){if(_g(e)&&(e=e(t,i,r)),typeof e!="object")return zv(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s={},o;for(o in e)s[o]=o!=="onAutoKill"&&_g(e[o])?e[o](t,i,r):e[o];return s},Vv=function(e,t){if(e=Ov(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var i=e.getBoundingClientRect(),r=!t||t===ts||t===Us,s=r?{top:br.clientTop-(ts.pageYOffset||br.scrollTop||Us.scrollTop||0),left:br.clientLeft-(ts.pageXOffset||br.scrollLeft||Us.scrollLeft||0)}:t.getBoundingClientRect(),o={x:i.left-s.left,y:i.top-s.top};return!r&&t&&(o.x+=tc(t,"x")(),o.y+=tc(t,"y")()),o},xg=function(e,t,i,r,s){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-s:zv(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+r-s:e==="max"?ec(t,i)-s:Math.min(ec(t,i),Vv(e,t)[i]-s)},ip=function(){zn=Bv(),kv()&&zn&&typeof document<"u"&&document.body&&(ts=window,Us=document.body,br=document.documentElement,Ov=zn.utils.toArray,zn.config({autoKillThreshold:7}),Ea=zn.config(),Nv=1)},Va={version:"3.15.0",name:"scrollTo",rawVars:1,register:function(e){zn=e,ip()},init:function(e,t,i,r,s){Nv||ip();var o=this,a=zn.getProperty(e,"scrollSnapType");o.isWin=e===ts,o.target=e,o.tween=i,t=l3(t,r,e,s),o.vars=t,o.autoKill=!!("autoKill"in t?t:Ea).autoKill,o.getX=tc(e,"x"),o.getY=tc(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),eu||(eu=zn.core.globals().ScrollTrigger),zn.getProperty(e,"scrollBehavior")==="smooth"&&zn.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,xg(t.x,e,"x",o.x,t.offsetX||0),r,s),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,xg(t.y,e,"y",o.y,t.offsetY||0),r,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var i=t._pt,r=t.target,s=t.tween,o=t.autoKill,a=t.xPrev,l=t.yPrev,c=t.isWin,u=t.snap,d=t.snapInline,f,h,g,_,p;i;)i.r(e,i.d),i=i._next;f=c||!t.skipX?t.getX():a,h=c||!t.skipY?t.getY():l,g=h-l,_=f-a,p=Ea.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(_>p||_<-p)&&f<ec(r,"x")&&(t.skipX=1),!t.skipY&&(g>p||g<-p)&&h<ec(r,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(s.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(s,t.vars.onAutoKillParams||[]))),c?ts.scrollTo(t.skipX?f:t.x,t.skipY?h:t.y):(t.skipY||(r.scrollTop=t.y),t.skipX||(r.scrollLeft=t.x)),u&&(e===1||e===0)&&(h=r.scrollTop,f=r.scrollLeft,d?r.style.scrollSnapType=d:r.style.removeProperty("scroll-snap-type"),r.scrollTop=h+1,r.scrollLeft=f+1,r.scrollTop=h,r.scrollLeft=f),t.xPrev=t.x,t.yPrev=t.y,eu&&eu.update()},kill:function(e){var t=e==="scrollTo",i=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),i>-1&&this._props.splice(i,1),!this._props.length}};Va.max=ec;Va.getOffset=Vv;Va.buildGetter=tc;Va.config=function(n){Ea||ip()||(Ea=zn.config());for(var e in n)Ea[e]=n[e]};Bv()&&zn.registerPlugin(Va);_t.registerPlugin(pt,Va);function dc(n,e={}){const{y:t=60,duration:i=1.2,stagger:r=.12,start:s="top 85%",blur:o=12,scale:a=1.05,ease:l="power3.out",delay:c=0,onComplete:u}=e;_t.set(n,{opacity:0,y:t,scale:a,filter:`blur(${o}px)`,willChange:"transform, opacity, filter"});const f=_t.to(n,{opacity:1,y:0,scale:1,filter:"blur(0px)",duration:i,stagger:r,delay:c,ease:l,scrollTrigger:{trigger:n,start:s,once:!0},onComplete:u}).scrollTrigger;return Array.isArray(f)?f:[f]}function Ar(n,e={}){const{x:t=-120,opacity:i=1,start:r="top 90%",end:s="top 40%",stagger:o=0,blur:a=0}=e;_t.set(n,{x:t,opacity:0,filter:a?`blur(${a}px)`:"blur(0px)",willChange:"transform, opacity, filter"});const c=_t.to(n,{x:0,opacity:i,filter:"blur(0px)",ease:"none",stagger:o,scrollTrigger:{trigger:n,start:r,end:s,scrub:!0}}).scrollTrigger;return Array.isArray(c)?c:[c]}function c3(n,e=8){const t=r=>{const s=n.getBoundingClientRect(),o=(r.clientX-s.left)/s.width-.5,a=(r.clientY-s.top)/s.height-.5;_t.to(n,{rotationY:o*e*2,rotationX:-a*e*2,transformPerspective:800,duration:.3,ease:"power2.out"})},i=()=>{_t.to(n,{rotationX:0,rotationY:0,duration:.5,ease:"elastic.out(1, 0.5)"})};return n.addEventListener("mousemove",t),n.addEventListener("mouseleave",i),()=>{n.removeEventListener("mousemove",t),n.removeEventListener("mouseleave",i)}}function u3(n,e){_t.from(n.querySelectorAll(e),{y:30,opacity:0,scale:.95,duration:.5,stagger:.08,ease:"power2.out"})}function d3(n={}){const{size:e=40,trailLength:t=200,trailWidth:i=18}=n,r=m=>getComputedStyle(document.documentElement).getPropertyValue(m).trim()||"16 185 129";let s=null;const o=()=>{if(s)return s;const m=r("--color-primary-500").split(" ").map(Number),b=r("--color-primary-400").split(" ").map(Number),A=r("--color-primary-300").split(" ").map(Number),x=r("--color-primary-700").split(" ").map(Number),M=r("--color-primary-900").split(" ").map(Number);return s={particleColors:[[255,255,255],A,m,x],outerGlow:[m,x,M,M],midGlow:[A,m,x],coreGlow:[[255,255,255],b,A,m]},s},a=()=>{s=null};window.addEventListener("colorpalettechange",a);const l=document.createElement("canvas");l.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
  `,document.body.appendChild(l);const c=l.getContext("2d"),u=()=>{l.width=window.innerWidth,l.height=window.innerHeight};u(),window.addEventListener("resize",u);const d={x:window.innerWidth/2,y:window.innerHeight/2},f={x:d.x,y:d.y},h=[],g=m=>{d.x=m.clientX,d.y=m.clientY},_=_t.to({},{duration:.2,repeat:-1,yoyo:!0,ease:"sine.inOut",onUpdate:function(){}}),p=_t.ticker.add(()=>{c.clearRect(0,0,l.width,l.height);const m=d.x-f.x,b=d.y-f.y,A=Math.sqrt(m*m+b*b),x=Math.max(1,Math.min(4,Math.floor(A*.15)+1));for(let V=0;V<x;V++){const z=Math.random()*Math.PI*2,k=Math.random()*e*.4;h.push({x:d.x+Math.cos(z)*k,y:d.y+Math.sin(z)*k,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,radius:(Math.random()*.6+.4)*(i*.35),life:1,decay:.004+Math.random()*.004,colorIndex:Math.floor(Math.random()*4),swirl:(Math.random()-.5)*.02,angle:Math.random()*Math.PI*2})}h.length>t&&h.splice(0,h.length-t);for(let V=h.length-1;V>=0;V--){const z=h[V];if(z.life-=z.decay,z.life<=0){h.splice(V,1);continue}z.angle+=z.swirl,z.x+=z.vx+Math.cos(z.angle)*.15,z.y+=z.vy+Math.sin(z.angle)*.15;const k=z.life*.35,{particleColors:j}=o(),[X,L,oe]=j[z.colorIndex],ue=c.createRadialGradient(z.x,z.y,0,z.x,z.y,z.radius*2.5);ue.addColorStop(0,`rgba(${X}, ${L}, ${oe}, ${k})`),ue.addColorStop(.5,`rgba(${X}, ${L}, ${oe}, ${k*.4})`),ue.addColorStop(1,`rgba(${X}, ${L}, ${oe}, 0)`),c.beginPath(),c.arc(z.x,z.y,z.radius*2.5,0,Math.PI*2),c.fillStyle=ue,c.fill()}const M=Date.now()/1e3,R=1+Math.sin(M*3)*.08+Math.sin(M*7)*.05,C=Math.sin(M*2.5)*2,y=Math.cos(M*2.1)*2,{outerGlow:T,midGlow:N,coreGlow:F}=o(),I=c.createRadialGradient(d.x+C,d.y+y,0,d.x+C,d.y+y,e*1.5*R);I.addColorStop(0,`rgba(${T[0]}, 0.3)`),I.addColorStop(.4,`rgba(${T[1]}, 0.18)`),I.addColorStop(.7,`rgba(${T[2]}, 0.08)`),I.addColorStop(1,`rgba(${T[3]}, 0)`),c.beginPath(),c.arc(d.x+C,d.y+y,e*1.5*R,0,Math.PI*2),c.fillStyle=I,c.fill();const G=c.createRadialGradient(d.x+C,d.y+y,0,d.x+C,d.y+y,e*.7*R);G.addColorStop(0,`rgba(${N[0]}, 0.5)`),G.addColorStop(.5,`rgba(${N[1]}, 0.3)`),G.addColorStop(1,`rgba(${N[2]}, 0)`),c.beginPath(),c.arc(d.x+C,d.y+y,e*.7*R,0,Math.PI*2),c.fillStyle=G,c.fill();const $=c.createRadialGradient(d.x+C,d.y+y,0,d.x+C,d.y+y,e*.35*R);$.addColorStop(0,`rgba(${F[0]}, 0.85)`),$.addColorStop(.3,`rgba(${F[1]}, 0.6)`),$.addColorStop(.7,`rgba(${F[2]}, 0.25)`),$.addColorStop(1,`rgba(${F[3]}, 0)`),c.beginPath(),c.arc(d.x+C,d.y+y,e*.35*R,0,Math.PI*2),c.fillStyle=$,c.fill(),f.x=d.x,f.y=d.y});return window.addEventListener("mousemove",g),()=>{window.removeEventListener("mousemove",g),window.removeEventListener("resize",u),window.removeEventListener("colorpalettechange",a),_t.ticker.remove(p),_.kill(),l.remove()}}const f3={id:"about",class:"pt-40 sm:pt-48 md:pt-56 pb-20 relative"},h3={class:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},p3={class:"grid lg:grid-cols-2 gap-12 items-start"},m3={class:"text-3xl mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 inline-block"},g3={class:"text-white light:text-secondary-900 font-semibold mb-2"},_3={class:"text-secondary-400 light:text-secondary-500 text-sm"},x3={class:"flex flex-wrap gap-3"},v3={__name:"AboutSection",setup(n){const e=new Date("2021-09-01"),t=hn(()=>{const u=(new Date-e)/(1e3*60*60*24*365.25);return Math.floor(u)}),i=hn(()=>[{title:`${t.value}+ Years Experience`,description:"Building production-ready web applications",icon:"💼"},{title:"50+ Projects Delivered",description:"From small startups to enterprise solutions",icon:"🚀"},{title:"Clean Code Advocate",description:"Writing maintainable, testable, and scalable code",icon:"✨"},{title:"Continuous Learner",description:"Always exploring new technologies and best practices",icon:"📚"}]),r=Oe(null),s=Oe(null),o=Oe(null);let a=[];return Wn(()=>{a.push(...Ar(r.value,{x:-120,start:"top 90%",end:"top 40%"})),a.push(...Ar(s.value,{x:-140,start:"top 90%",end:"top 30%"})),a.push(...dc(o.value,{y:60,duration:1.2,stagger:.15,start:"top 80%",blur:14}))}),ii(()=>{a.forEach(l=>l.kill())}),(l,c)=>(he(),pe("section",f3,[c[2]||(c[2]=co('<svg width="0" height="0" class="absolute" aria-hidden="true"><defs><clipPath id="about-concave-clip" clipPathUnits="objectBoundingBox"><path d="M0 0 Q0.5 0.2 1 0 L1 1 L0 1 Z"></path></clipPath></defs></svg><div class="absolute -top-24 sm:-top-24 md:-top-32 left-0 right-0 bottom-0 bg-dark-800 light:bg-white" style="clip-path:url(#about-concave-clip);"></div><svg class="absolute -top-24 sm:-top-24 md:-top-32 left-0 w-full h-[calc(100%+6rem)] sm:h-[calc(100%+6rem)] md:h-[calc(100%+8rem)] pointer-events-none" viewBox="0 0 1 1" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0 Q0.5 0.2 1 0" fill="none" stroke="rgb(var(--color-primary-500) / 0.4)" stroke-width="0.002" vector-effect="non-scaling-stroke"></path></svg>',3)),v("div",h3,[v("h2",{ref_key:"titleRef",ref:r,class:"section-title"},"About Me",512),v("div",p3,[v("div",{ref_key:"cardsRef",ref:o,class:"grid sm:grid-cols-2 gap-6 order-2 lg:order-1"},[(he(!0),pe(Ke,null,it(i.value,u=>(he(),pe("div",{key:u.title,class:"group bg-secondary-800 border border-secondary-700 rounded-xl p-6 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1 transition-all duration-300 light:bg-white light:border-secondary-200 light:hover:border-primary-500/50 light:hover:shadow-primary-500/10"},[v("div",m3,be(u.icon),1),v("h3",g3,be(u.title),1),v("p",_3,be(u.description),1)]))),128))],512),v("div",{ref_key:"textRef",ref:s,class:"order-1 lg:order-2"},[c[0]||(c[0]=v("p",{class:"text-secondary-300 light:text-secondary-700 text-lg leading-relaxed mb-6"}," I'm a passionate developer with a strong focus on building modern web applications that are both functional and beautiful. My journey in software development started with a curiosity for how things work on the web, and has evolved into a career building products that make a difference. ",-1)),c[1]||(c[1]=v("p",{class:"text-secondary-400 light:text-secondary-500 leading-relaxed mb-8"}," I specialize in the Vue.js ecosystem, but I'm comfortable working across the full stack. I believe in writing clean, maintainable code and creating intuitive user experiences that people love to use. ",-1)),v("div",x3,[(he(),pe(Ke,null,it(["Vue 3","JavaScript","TypeScript","Node.js","Tailwind CSS","REST APIs"],u=>v("span",{key:u,class:"px-4 py-2 bg-secondary-800/50 border border-secondary-700 rounded-full text-sm text-secondary-300 hover:border-primary-500/50 hover:text-primary-400 light:bg-secondary-100 light:border-secondary-200 light:text-secondary-600 light:hover:border-primary-500/50 light:hover:text-primary-600 transition-all duration-300 hover:scale-105 cursor-default"},be(u),1)),64)),(he(),pe(Ke,null,it(["Git","Docker","Figma"],u=>v("span",{key:u,class:"px-4 py-2 bg-secondary-800/50 border border-secondary-700 rounded-full text-sm text-secondary-300 hover:border-primary-500/50 hover:text-primary-400 light:bg-secondary-100 light:border-secondary-200 light:text-secondary-600 light:hover:border-primary-500/50 light:hover:text-primary-600 transition-all duration-300 hover:scale-105 cursor-default"},be(u),1)),64))])],512)])])]))}},Tf=[{name:"Vue.js",category:"Frontend",icon:"🟢",description:"Progressive JavaScript framework for building user interfaces"},{name:"React",category:"Frontend",icon:"⚛️",description:"Library for building user interfaces with components"},{name:"TypeScript",category:"Language",icon:"🔷",description:"Typed superset of JavaScript for safer code"},{name:"Node.js",category:"Backend",icon:"🟩",description:"JavaScript runtime for building server-side applications"},{name:"Tailwind CSS",category:"Styling",icon:"🎨",description:"Utility-first CSS framework for rapid UI development"},{name:"Vite",category:"Tooling",icon:"⚡",description:"Next-generation frontend build tool"},{name:"MongoDB",category:"Database",icon:"🍃",description:"NoSQL document database for modern applications"},{name:"PostgreSQL",category:"Database",icon:"🐘",description:"Powerful open-source relational database"},{name:"Docker",category:"DevOps",icon:"🐳",description:"Containerization platform for consistent deployments"},{name:"Git",category:"DevOps",icon:"🌿",description:"Distributed version control system"},{name:"Pinia",category:"Frontend",icon:"🍍",description:"State management library for Vue.js"},{name:"REST APIs",category:"Backend",icon:"🔗",description:"Architectural style for building web services"}],y3={id:"tech-stack",class:"py-20 bg-dark-800 light:bg-secondary-100 relative overflow-hidden"},b3={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},S3=["onClick"],M3={class:"flex items-start justify-between mb-4"},w3={class:"text-3xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"},E3={class:"text-xs text-primary-400 bg-primary-500/10 px-2 py-1 rounded-full"},T3={class:"text-white light:text-secondary-900 font-bold text-lg mb-2 group-hover:text-primary-400 transition-colors duration-300"},A3={class:"text-secondary-300 light:text-secondary-500 text-sm"},C3={__name:"TechStack",setup(n){const e=hn(()=>["All",...new Set(Tf.map(u=>u.category))]),t=Oe("All"),i=Oe(null),r=Oe(null),s=Oe(null),o=Oe(null);let a=[];const l=hn(()=>t.value==="All"?Tf:Tf.filter(u=>u.category===t.value)),c=u=>{t.value=u};return Wn(()=>{a.push(...Ar(r.value,{x:-120,start:"top 90%",end:"top 40%"})),a.push(...Ar(s.value,{x:-120,start:"top 90%",end:"top 40%"})),a.push(...Ar(o.value,{x:-100,start:"top 90%",end:"top 30%"})),a.push(...dc(i.value,{y:60,duration:1.2,stagger:.1,start:"top 80%",blur:14}))}),ii(()=>{a.forEach(u=>u.kill())}),Wi(l,async()=>{await ss(),i.value&&u3(i.value,".tech-card")}),(u,d)=>(he(),pe("section",y3,[d[0]||(d[0]=v("div",{class:"absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"},null,-1)),v("div",b3,[v("h2",{ref_key:"titleRef",ref:r,class:"section-title text-4xl font-bold text-white light:text-secondary-900 mb-6"},"Tech Stack",512),v("p",{ref_key:"subtitleRef",ref:s,class:"section-subtitle text-secondary-400 light:text-secondary-500 mb-8"},"Technologies and tools I work with",512),v("div",{ref_key:"filterRef",ref:o,class:"flex flex-wrap gap-3 mb-10"},[(he(!0),pe(Ke,null,it(e.value,f=>(he(),pe("button",{key:f,onClick:h=>c(f),class:at(["px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105",t.value===f?"bg-primary-600 text-white shadow-lg shadow-primary-500/25":"bg-secondary-800 text-secondary-400 hover:text-white border border-secondary-700 light:bg-white light:text-secondary-500 light:hover:text-secondary-900 light:border-secondary-200"])},be(f),11,S3))),128))],512),v("div",{ref_key:"gridRef",ref:i,class:"grid sm:grid-cols-2 lg:grid-cols-3 gap-6"},[(he(!0),pe(Ke,null,it(l.value,f=>(he(),pe("div",{key:f.name,class:"tech-card group bg-secondary-800 border border-secondary-700 rounded-xl p-6 hover:border-primary-500 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1 transition-all duration-300 light:bg-white light:border-secondary-200 light:hover:border-primary-500 light:hover:shadow-primary-500/10"},[v("div",M3,[v("div",w3,be(f.icon),1),v("span",E3,be(f.category),1)]),v("h3",T3,be(f.name),1),v("p",A3,be(f.description),1)]))),128))],512)])]))}},Af=[{id:1,title:"E-Commerce Platform",description:"A full-featured e-commerce platform with product management, cart functionality, and Stripe payment integration.",tech:["Vue 3","Node.js","MongoDB","Stripe"],github:"https://github.com/yourusername/ecommerce-platform",demo:"https://ecommerce-demo.example.com",image:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",features:["Product catalog with search, filtering, and category browsing","Shopping cart with real-time price calculations and quantity management","Secure Stripe payment integration with order confirmation","User authentication with profile and order history","Admin dashboard for product and inventory management"]},{id:2,title:"Task Management App",description:"A collaborative task management application with real-time updates, drag-and-drop boards, and team collaboration features.",tech:["Vue 3","Firebase","Tailwind CSS"],github:"https://github.com/yourusername/task-manager",demo:"https://task-manager-demo.example.com",image:"https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",features:["Drag-and-drop kanban boards for task organization","Real-time collaboration with live updates across team members","Task assignments, due dates, and priority levels","Project workspaces with customizable columns and labels","Activity timeline and notifications for team updates"]},{id:3,title:"Weather Dashboard",description:"A real-time weather dashboard with location-based forecasts, interactive maps, and 7-day weather predictions.",tech:["Vue 3","REST API","Chart.js"],github:"https://github.com/yourusername/weather-dashboard",demo:"https://weather-demo.example.com",image:"https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",features:["Real-time weather data with location-based search","Interactive 7-day forecast with temperature trends","Hourly breakdown with precipitation and wind speed","Visual weather charts using Chart.js for data visualization","Responsive design optimized for mobile and desktop"]},{id:4,title:"Social Media Analytics",description:"An analytics dashboard for social media managers to track engagement, follower growth, and content performance across platforms.",tech:["Vue 3","D3.js","Express","PostgreSQL"],github:"https://github.com/yourusername/social-analytics",demo:"https://analytics-demo.example.com",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",features:["Cross-platform analytics aggregation for major social networks","Interactive data visualizations with D3.js charts","Follower growth tracking with trend analysis","Content performance metrics and engagement scoring","Customizable reporting with export capabilities"]},{id:5,title:"Recipe Finder",description:"A recipe discovery app with ingredient-based search, meal planning, and step-by-step cooking instructions.",tech:["Vue 3","Vuex","Tailwind CSS"],github:"https://github.com/yourusername/recipe-finder",demo:"https://recipe-demo.example.com",image:"https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=400&fit=crop",features:["Ingredient-based recipe search with smart matching","Meal planning calendar with grocery list generation","Step-by-step cooking instructions with timers","Recipe filtering by dietary preferences and cuisine","Save and organize favorite recipes in collections"]},{id:6,title:"Dev Portfolio Template",description:"A modern, responsive developer portfolio template with dark mode, smooth animations, and project showcase features.",tech:["Vue 3","Tailwind CSS","Vite"],github:"https://github.com/yourusername/dev-portfolio",demo:"https://portfolio-demo.example.com",image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",features:["Dark/light mode with smooth theme transitions","GSAP-powered scroll animations and micro-interactions","Interactive project showcase with detail modals","Fully responsive layout across all device sizes","Optimized performance with Vite build tooling"]},{id:7,title:"Dev Portfolio",description:"A modern, responsive developer portfolio template with dark mode, smooth animations, and project showcase features.",tech:["Vue 3","Tailwind CSS","Vite"],github:"https://github.com/yourusername/dev-portfolio",demo:"https://portfolio-demo.example.com",image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",features:["Dark/light mode with smooth theme transitions","GSAP-powered scroll animations and micro-interactions","Interactive project showcase with detail modals","Fully responsive layout across all device sizes","Optimized performance with Vite build tooling"]},{id:8,title:"Dev Template",description:"A modern, responsive developer portfolio template with dark mode, smooth animations, and project showcase features.",tech:["Vue 3","Tailwind CSS","Vite"],github:"https://github.com/yourusername/dev-portfolio",demo:"https://portfolio-demo.example.com",image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",features:["Dark/light mode with smooth theme transitions","GSAP-powered scroll animations and micro-interactions","Interactive project showcase with detail modals","Fully responsive layout across all device sizes","Optimized performance with Vite build tooling"]}],R3={class:"w-full h-full bg-secondary-900 light:bg-secondary-100 overflow-hidden relative flex flex-col"},P3={class:"flex items-center gap-2 px-3 sm:px-4 py-2 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},D3={class:"flex-1 max-w-md mx-auto"},L3={class:"bg-secondary-700/50 light:bg-secondary-100 rounded-md px-2 sm:px-3 py-1 text-[10px] sm:text-xs text-secondary-400 light:text-secondary-500 flex items-center gap-1.5 sm:gap-2 truncate"},I3={class:"truncate"},U3={key:0,class:"flex-1 flex flex-col min-h-0 relative"},F3={class:"flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},N3={class:"flex items-center gap-2 sm:gap-4"},O3={key:0,class:"absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-accent-500 rounded-full text-[8px] sm:text-[9px] text-white flex items-center justify-center font-bold"},k3={class:"flex-1 p-3 sm:p-4 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 overflow-y-auto min-h-0 overscroll-contain"},B3={class:"text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 mb-1 truncate"},z3={class:"flex items-center justify-between"},V3={class:"text-[10px] sm:text-xs font-semibold text-primary-500"},H3=["onClick"],G3={key:0,class:"absolute inset-y-0 right-0 w-64 sm:w-80 bg-secondary-800 light:bg-white border-l border-secondary-700 light:border-secondary-200 shadow-2xl z-20 flex flex-col"},W3={class:"flex items-center justify-between px-4 py-3 border-b border-secondary-700 light:border-secondary-200"},X3={class:"flex-1 overflow-y-auto p-4 space-y-3 overscroll-contain"},$3={key:0,class:"text-center py-8"},j3={class:"flex-1 min-w-0"},Y3={class:"text-[10px] text-white light:text-secondary-900 font-medium truncate"},q3={class:"text-[9px] text-primary-500"},K3={class:"flex items-center gap-1.5"},Z3=["onClick"],J3={class:"text-[10px] text-white light:text-secondary-900 w-4 text-center"},Q3=["onClick"],eR={class:"p-4 border-t border-secondary-700 light:border-secondary-200"},tR={class:"flex justify-between mb-3"},nR={class:"text-sm font-bold text-white light:text-secondary-900"},iR={key:1,class:"flex-1 flex flex-col min-h-0"},rR={class:"px-3 sm:px-6 py-2.5 bg-secondary-800/50 light:bg-secondary-100/50 border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},sR={class:"flex gap-2"},oR=["value"],aR={class:"flex-1 p-2 sm:p-4 flex gap-2 sm:gap-3 overflow-x-auto min-h-0"},lR={class:"flex-1 min-w-[140px] sm:min-w-0 bg-secondary-800/50 light:bg-secondary-200/50 rounded-lg p-2 sm:p-2.5 flex flex-col"},cR={class:"flex items-center justify-between mb-2 px-1 flex-shrink-0"},uR={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400"},dR={class:"space-y-1.5 sm:space-y-2 overflow-y-auto flex-1 min-h-0 overscroll-contain"},fR=["onClick"],hR={class:"flex items-start gap-1.5"},pR=["onClick"],mR={class:"flex-1 min-w-0"},gR={class:"text-[9px] sm:text-[10px] text-white light:text-secondary-900 leading-tight"},_R={class:"flex-1 min-w-[140px] sm:min-w-0 bg-secondary-800/50 light:bg-secondary-200/50 rounded-lg p-2 sm:p-2.5 flex flex-col"},xR={class:"flex items-center justify-between mb-2 px-1 flex-shrink-0"},vR={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400"},yR={class:"space-y-1.5 sm:space-y-2 overflow-y-auto flex-1 min-h-0 overscroll-contain"},bR=["onClick"],SR={class:"flex items-start gap-1.5"},MR=["onClick"],wR={class:"flex-1 min-w-0"},ER={class:"text-[9px] sm:text-[10px] text-white light:text-secondary-900 leading-tight"},TR={class:"flex-1 min-w-[140px] sm:min-w-0 bg-secondary-800/50 light:bg-secondary-200/50 rounded-lg p-2 sm:p-2.5 flex flex-col"},AR={class:"flex items-center justify-between mb-2 px-1 flex-shrink-0"},CR={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400"},RR={class:"space-y-1.5 sm:space-y-2 overflow-y-auto flex-1 min-h-0 overscroll-contain"},PR=["onClick"],DR={class:"flex items-start gap-1.5"},LR={class:"flex-1 min-w-0"},IR={class:"text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 line-through leading-tight"},UR={key:2,class:"flex-1 flex flex-col min-h-0"},FR={class:"flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},NR={class:"flex items-center gap-2"},OR={class:"flex rounded-lg overflow-hidden border border-secondary-600 light:border-secondary-200"},kR={class:"px-3 sm:px-6 py-2.5 bg-secondary-800/50 light:bg-secondary-100/50 border-b border-secondary-700 light:border-secondary-200 flex-shrink-0 relative"},BR={class:"flex gap-2"},zR={class:"flex-1 relative"},VR={key:0,class:"absolute left-3 sm:left-6 right-3 sm:right-6 top-full mt-1 bg-secondary-800 light:bg-white border border-secondary-700 light:border-secondary-200 rounded-lg shadow-xl z-10 overflow-hidden"},HR=["onClick"],GR={class:"ml-auto text-secondary-500 light:text-secondary-400"},WR={class:"px-3 sm:px-6 py-3 sm:py-4 bg-gradient-to-br from-primary-600/30 to-primary-500/10 flex-shrink-0"},XR={class:"flex items-center justify-between"},$R={class:"text-2xl sm:text-3xl font-bold text-white light:text-secondary-900"},jR={class:"text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 mt-0.5"},YR={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mt-0.5"},qR={class:"text-4xl sm:text-5xl"},KR={class:"px-3 sm:px-6 py-2.5 flex-shrink-0"},ZR={class:"flex gap-1.5 sm:gap-2 overflow-x-auto"},JR={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5"},QR={class:"text-sm sm:text-base mb-0.5"},eP={class:"text-[9px] sm:text-[10px] font-semibold text-white light:text-secondary-900"},tP={class:"flex-1 px-3 sm:px-6 pb-3 sm:pb-4 min-h-0 overflow-y-auto overscroll-contain"},nP={class:"space-y-1 sm:space-y-1.5"},iP={class:"text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 w-8 sm:w-10"},rP={class:"text-sm sm:text-base"},sP={class:"flex-1 mx-2 sm:mx-3 h-1 bg-secondary-700 light:bg-secondary-200 rounded-full overflow-hidden"},oP={class:"text-[9px] sm:text-[10px] text-white light:text-secondary-900 font-semibold w-10 sm:w-12 text-right"},aP={key:3,class:"flex-1 flex flex-col min-h-0"},lP={class:"flex-1 flex overflow-hidden min-h-0"},cP={class:"w-10 sm:w-14 bg-secondary-800 light:bg-white border-r border-secondary-700 light:border-secondary-200 flex flex-col items-center py-2 sm:py-3 gap-2 sm:gap-3 flex-shrink-0"},uP={class:"flex-1 p-2 sm:p-4 overflow-y-auto min-h-0 overscroll-contain"},dP={class:"flex gap-1.5 sm:gap-2 mb-3 flex-wrap"},fP=["onClick"],hP={class:"grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-3"},pP={class:"bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-3 border border-secondary-700 light:border-secondary-200"},mP={class:"text-sm sm:text-lg font-bold text-white light:text-secondary-900"},gP={class:"bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-3 border border-secondary-700 light:border-secondary-200"},_P={class:"text-sm sm:text-lg font-bold text-white light:text-secondary-900"},xP={class:"bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-3 border border-secondary-700 light:border-secondary-200"},vP={class:"text-sm sm:text-lg font-bold text-white light:text-secondary-900"},yP={class:"bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-3 border border-secondary-700 light:border-secondary-200"},bP={class:"text-sm sm:text-lg font-bold text-white light:text-secondary-900"},SP={class:"bg-secondary-800 light:bg-white rounded-lg p-2.5 sm:p-3 border border-secondary-700 light:border-secondary-200 mb-3"},MP={class:"h-20 sm:h-24 flex items-end gap-1"},wP=["onMouseenter","onMouseleave"],EP={class:"text-[6px] sm:text-[7px] text-secondary-500 light:text-secondary-400"},TP={class:"grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3"},AP={class:"bg-secondary-800 light:bg-white rounded-lg p-2.5 sm:p-3 border border-secondary-700 light:border-secondary-200"},CP={class:"space-y-1.5 sm:space-y-2"},RP=["onClick"],PP={class:"text-[8px] sm:text-[9px] text-secondary-400 light:text-secondary-500 flex-1"},DP={class:"text-[8px] sm:text-[9px] font-semibold text-white light:text-secondary-900"},LP={class:"bg-secondary-800 light:bg-white rounded-lg p-2.5 sm:p-3 border border-secondary-700 light:border-secondary-200"},IP={class:"space-y-1.5 sm:space-y-2"},UP={class:"text-[8px] sm:text-[9px] text-primary-500"},FP={key:4,class:"flex-1 flex flex-col min-h-0"},NP={class:"px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},OP={class:"flex gap-1.5 sm:gap-2"},kP={class:"flex-1 relative"},BP={class:"px-3 sm:px-6 py-2 flex gap-1.5 sm:gap-2 overflow-x-auto flex-shrink-0"},zP=["onClick"],VP={class:"flex-1 px-3 sm:px-6 pb-3 sm:pb-4 grid grid-cols-2 gap-2 sm:gap-3 overflow-y-auto min-h-0 overscroll-contain"},HP=["onClick"],GP={class:"absolute top-1.5 right-1.5 bg-accent-500 text-white text-[7px] sm:text-[8px] px-1.5 py-0.5 rounded-full font-medium"},WP={class:"p-2 sm:p-2.5"},XP={class:"text-[9px] sm:text-[10px] text-white light:text-secondary-900 font-medium mb-1 truncate"},$P={class:"flex items-center gap-1"},jP={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400"},YP={class:"ml-auto text-[7px] sm:text-[8px] text-secondary-500 light:text-secondary-400"},qP={key:0,class:"col-span-2 text-center py-8"},KP={class:"flex items-start justify-between mb-3"},ZP={class:"text-3xl"},JP={class:"text-sm font-bold text-white light:text-secondary-900 mb-1"},QP={class:"flex items-center gap-2 mb-3"},eD={class:"text-yellow-500 text-xs"},tD={class:"text-[9px] text-secondary-500 light:text-secondary-400"},nD={class:"text-[9px] text-secondary-500 light:text-secondary-400"},iD={class:"space-y-2 mb-4"},rD={key:5,class:"flex-1 flex flex-col min-h-0"},sD={class:"flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},oD={class:"flex gap-2 sm:gap-4 text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500"},aD=["onClick"],lD={class:"flex-1 overflow-y-auto min-h-0 overscroll-contain"},cD={key:0,class:"h-full flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-secondary-800 to-secondary-900 light:from-white light:to-secondary-100"},uD={class:"text-center"},dD={class:"flex gap-2 justify-center"},fD={key:1,class:"p-4 sm:p-6"},hD={class:"space-y-2 mb-4"},pD={class:"grid grid-cols-2 gap-2"},mD={class:"text-[9px] sm:text-[10px] text-primary-500 font-medium"},gD={class:"mt-1.5 h-1 bg-secondary-700 light:bg-secondary-200 rounded-full overflow-hidden"},_D={key:2,class:"p-4 sm:p-6"},xD={class:"grid grid-cols-2 gap-2 sm:gap-3"},vD={key:3,class:"p-4 sm:p-6"},yD={class:"px-3 sm:px-6 py-2 sm:py-3 bg-secondary-800 light:bg-white border-t border-secondary-700 light:border-secondary-200 flex-shrink-0"},bD={class:"flex justify-center gap-1.5 sm:gap-3 overflow-x-auto"},SD={key:6,class:"flex-1 flex flex-col min-h-0"},MD={class:"flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},wD={class:"text-xs sm:text-sm font-bold text-primary-500"},ED={class:"flex gap-2 sm:gap-3 text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500"},TD=["onClick"],AD={class:"flex-1 overflow-y-auto min-h-0 overscroll-contain"},CD={key:0,class:"h-full flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-primary-600/20 to-primary-500/5"},RD={class:"text-center max-w-sm"},PD={class:"text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-1.5"},DD={class:"text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 mb-3 sm:mb-4 leading-relaxed"},LD={class:"flex gap-1.5 sm:gap-2 justify-center flex-wrap"},ID={key:1,class:"p-4 sm:p-6"},UD={class:"space-y-2"},FD={class:"text-[9px] sm:text-[10px] text-secondary-300 light:text-secondary-600 leading-relaxed"},ND={key:2,class:"p-4 sm:p-6"},OD={class:"space-y-2"},kD={__name:"ProjectPreview",props:{project:{type:Object,required:!0}},setup(n){const e=n,t=hn(()=>{const fe=e.project.title.toLowerCase();return fe.includes("e-commerce")?"ecommerce":fe.includes("task")?"task":fe.includes("weather")?"weather":fe.includes("social")||fe.includes("analytics")?"analytics":fe.includes("recipe")?"recipe":fe.includes("portfolio")||fe.includes("template")?"portfolio":"generic"}),i=[{id:1,name:"Wireless Headphones",price:89,emoji:"🎧",color:"from-purple-500 to-indigo-500"},{id:2,name:"Smart Watch",price:199,emoji:"⌚",color:"from-blue-500 to-cyan-500"},{id:3,name:"Laptop Stand",price:45,emoji:"💻",color:"from-emerald-500 to-teal-500"},{id:4,name:"Mechanical Keyboard",price:129,emoji:"⌨️",color:"from-amber-500 to-orange-500"},{id:5,name:"USB-C Hub",price:59,emoji:"🔌",color:"from-rose-500 to-pink-500"},{id:6,name:"Desk Lamp",price:35,emoji:"💡",color:"from-yellow-500 to-amber-500"}],r=da([]),s=Oe(!1),o=hn(()=>r.reduce((fe,w)=>fe+w.qty,0)),a=hn(()=>r.reduce((fe,w)=>fe+w.price*w.qty,0)),l=fe=>{const w=r.find(E=>E.id===fe.id);w?w.qty++:r.push({...fe,qty:1})},c=fe=>{const w=r.findIndex(E=>E.id===fe);w!==-1&&r.splice(w,1)},u=(fe,w)=>{const E=r.find(W=>W.id===fe);E&&(E.qty+=w,E.qty<=0&&c(fe))},d=da({todo:[{id:1,title:"Design landing page",tag:"Design",tagColor:"bg-purple-500/20 text-purple-400",done:!1},{id:2,title:"Set up database schema",tag:"Backend",tagColor:"bg-blue-500/20 text-blue-400",done:!1},{id:3,title:"Write API endpoints",tag:"Backend",tagColor:"bg-blue-500/20 text-blue-400",done:!1}],progress:[{id:4,title:"Build auth system",tag:"Frontend",tagColor:"bg-emerald-500/20 text-emerald-400",done:!1},{id:5,title:"Implement dark mode",tag:"UI",tagColor:"bg-amber-500/20 text-amber-400",done:!1}],done:[{id:6,title:"Project setup",tag:"Setup",tagColor:"bg-gray-500/20 text-gray-400",done:!0},{id:7,title:"Create wireframes",tag:"Design",tagColor:"bg-purple-500/20 text-purple-400",done:!0},{id:8,title:"Configure CI/CD",tag:"DevOps",tagColor:"bg-rose-500/20 text-rose-400",done:!0}]}),f=Oe(""),h=Oe("General"),g=["General","Design","Frontend","Backend","UI","DevOps"],_=()=>{f.value.trim()&&(d.todo.push({id:Date.now(),title:f.value.trim(),tag:h.value,tagColor:"bg-primary-500/20 text-primary-400",done:!1}),f.value="")},p=(fe,w)=>{const E=d[fe].find(W=>W.id===w);if(E)if(E.done=!E.done,E.done){const W=d[fe].findIndex(q=>q.id===w),[ie]=d[fe].splice(W,1);d.done.push(ie)}else{const W=d.done.findIndex(q=>q.id===w),[ie]=d.done.splice(W,1);d.todo.push(ie)}},m=(fe,w,E)=>{const W=d[fe].findIndex(q=>q.id===E);if(W===-1)return;const[ie]=d[fe].splice(W,1);d[w].push(ie)},b={Manila:{temp:28,condition:"Partly Cloudy",emoji:"⛅",humidity:72,wind:12},Tokyo:{temp:22,condition:"Clear Sky",emoji:"☀️",humidity:55,wind:8},"New York":{temp:18,condition:"Rainy",emoji:"🌧️",humidity:85,wind:20},London:{temp:15,condition:"Cloudy",emoji:"☁️",humidity:78,wind:15},Sydney:{temp:25,condition:"Sunny",emoji:"🌤️",humidity:60,wind:10}},A=Oe("Manila"),x=Oe(""),M=Oe("C"),R=hn(()=>b[A.value]||b.Manila),C=hn(()=>{const fe=R.value.temp;return M.value==="C"?fe:Math.round(fe*9/5+32)}),y=hn(()=>{const fe=R.value.temp;return Array.from({length:6},(w,E)=>({time:`${(E+1)*3}:00`,temp:fe+[0,2,3,1,-1,-2][E],emoji:["⛅","☀️","☀️","⛅","☁️","🌙"][E]}))}),T=hn(()=>{const fe=R.value.temp;return["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((E,W)=>({day:E,high:fe+[2,4,3,5,1,0,-1][W],low:fe-[4,3,5,2,6,5,7][W],emoji:["⛅","☀️","🌧️","⛅","☀️","☁️","🌧️"][W]}))}),N=hn(()=>{const fe=x.value.toLowerCase();return fe?Object.keys(b).filter(w=>w.toLowerCase().includes(fe)):Object.keys(b)}),F=fe=>{A.value=fe,x.value=""},I=da({followers:12800,engagement:4.2,reach:45200,posts:128}),G=Oe("All"),$=["All","Instagram","Twitter","LinkedIn"],V={All:{followers:12800,engagement:4.2,reach:45200,posts:128},Instagram:{followers:8500,engagement:5.1,reach:28e3,posts:64},Twitter:{followers:3200,engagement:3.4,reach:12e3,posts:42},LinkedIn:{followers:1100,engagement:2.8,reach:5200,posts:22}},z=hn(()=>{const w=(V[G.value]||V.All).followers/12800;return[30,45,38,60,52,75,68,90,82,100,88,95].map((E,W)=>({value:Math.round(E*w),label:["J","F","M","A","M","J","J","A","S","O","N","D"][W]}))}),k=fe=>{G.value=fe;const w=V[fe]||V.All;I.followers=w.followers,I.engagement=w.engagement,I.reach=w.reach,I.posts=w.posts},j=[{id:1,name:"Creamy Garlic Pasta",time:25,rating:4.5,emoji:"🍝",category:"Dinner",color:"from-amber-500/40 to-orange-500/40"},{id:2,name:"Avocado Toast",time:10,rating:4.2,emoji:"🥑",category:"Breakfast",color:"from-emerald-500/40 to-green-500/40"},{id:3,name:"Chocolate Cake",time:45,rating:4.8,emoji:"🍰",category:"Dessert",color:"from-rose-500/40 to-pink-500/40"},{id:4,name:"Chicken Stir Fry",time:20,rating:3.9,emoji:"🍗",category:"Lunch",color:"from-red-500/40 to-orange-500/40"},{id:5,name:"Berry Smoothie",time:5,rating:4.6,emoji:"🥤",category:"Breakfast",color:"from-purple-500/40 to-indigo-500/40"},{id:6,name:"Beef Tacos",time:30,rating:4.4,emoji:"🌮",category:"Dinner",color:"from-yellow-500/40 to-amber-500/40"}],X=Oe("All"),L=Oe(""),oe=Oe(null),ue=["All","Breakfast","Lunch","Dinner","Dessert"],ke=hn(()=>j.filter(fe=>{const w=X.value==="All"||fe.category===X.value,E=fe.name.toLowerCase().includes(L.value.toLowerCase());return w&&E})),Fe=fe=>{oe.value=fe},Ve=Oe("home"),ee=["home","about","projects","contact"],le=fe=>{Ve.value=fe},ge=Oe("home"),Le=["home","features","about"],Ee=fe=>{ge.value=fe};return(fe,w)=>(he(),pe("div",R3,[v("div",P3,[w[16]||(w[16]=v("div",{class:"flex gap-1.5"},[v("span",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent-500"}),v("span",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"}),v("span",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary-500"})],-1)),v("div",D3,[v("div",L3,[w[15]||(w[15]=v("svg",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 8a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0115.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"})],-1)),v("span",I3,be(n.project.demo),1)])])]),t.value==="ecommerce"?(he(),pe("div",U3,[v("div",F3,[w[19]||(w[19]=v("div",{class:"text-primary-500 font-bold text-xs sm:text-sm"},"🛍️ ShopHub",-1)),v("div",N3,[w[18]||(w[18]=v("div",{class:"hidden sm:flex gap-3 text-[10px] text-secondary-400 light:text-secondary-500"},[v("span",{class:"cursor-pointer hover:text-primary-500 transition-colors"},"Home"),v("span",{class:"cursor-pointer hover:text-primary-500 transition-colors"},"Products"),v("span",{class:"cursor-pointer hover:text-primary-500 transition-colors"},"About")],-1)),v("button",{onClick:w[0]||(w[0]=E=>s.value=!s.value),class:"relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-500/20 flex items-center justify-center hover:bg-primary-500/30 transition-colors cursor-pointer","aria-label":"Open cart"},[w[17]||(w[17]=v("svg",{class:"w-4 h-4 sm:w-5 sm:h-5 text-primary-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})],-1)),o.value>0?(he(),pe("span",O3,be(o.value),1)):ai("",!0)])])]),w[25]||(w[25]=co('<div class="px-3 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-primary-500 flex-shrink-0" data-v-b832dd55><div class="text-white" data-v-b832dd55><div class="text-[9px] sm:text-[10px] uppercase tracking-wider opacity-80 mb-1" data-v-b832dd55>Summer Sale</div><div class="text-xs sm:text-sm font-bold mb-1.5 sm:mb-2" data-v-b832dd55>Up to 50% Off Everything</div><div class="inline-block bg-white text-primary-600 text-[9px] sm:text-[10px] font-semibold px-2.5 sm:px-3 py-1 rounded-full cursor-pointer hover:bg-primary-50 transition-colors" data-v-b832dd55>Shop Now →</div></div></div>',1)),v("div",k3,[(he(),pe(Ke,null,it(i,E=>v("div",{key:E.id,class:"bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-2.5 border border-secondary-700 light:border-secondary-200 hover:border-primary-500/50 transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-primary-500/10"},[v("div",{class:at(["aspect-square rounded-md bg-gradient-to-br mb-2 flex items-center justify-center text-2xl sm:text-3xl",E.color])},[v("span",null,be(E.emoji),1)],2),v("div",B3,be(E.name),1),v("div",z3,[v("div",V3,"$"+be(E.price),1),v("button",{onClick:mo(W=>l(E),["stop"]),class:"w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary-500 hover:bg-primary-400 flex items-center justify-center transition-colors cursor-pointer","aria-label":"Add to cart"},[...w[20]||(w[20]=[v("svg",{class:"w-3 h-3 sm:w-3.5 sm:h-3.5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"})],-1)])],8,H3)])])),64))]),Pt(zf,{name:"slide"},{default:wu(()=>[s.value?(he(),pe("div",G3,[v("div",W3,[w[22]||(w[22]=v("span",{class:"text-xs font-semibold text-white light:text-secondary-900"},"Shopping Cart",-1)),v("button",{onClick:w[1]||(w[1]=E=>s.value=!1),class:"text-secondary-400 hover:text-white light:hover:text-secondary-900 transition-colors cursor-pointer","aria-label":"Close cart"},[...w[21]||(w[21]=[v("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),v("div",X3,[r.length===0?(he(),pe("div",$3,[...w[23]||(w[23]=[v("div",{class:"text-3xl mb-2"},"🛒",-1),v("p",{class:"text-xs text-secondary-400 light:text-secondary-500"},"Your cart is empty",-1),v("p",{class:"text-[10px] text-secondary-500 light:text-secondary-400 mt-1"},"Add some products!",-1)])])):ai("",!0),(he(!0),pe(Ke,null,it(r,E=>(he(),pe("div",{key:E.id,class:"flex items-center gap-3 bg-secondary-700/50 light:bg-secondary-100 rounded-lg p-2.5"},[v("div",{class:at(["w-8 h-8 rounded-md bg-gradient-to-br flex items-center justify-center text-sm flex-shrink-0",E.color])},be(E.emoji),3),v("div",j3,[v("div",Y3,be(E.name),1),v("div",q3,"$"+be(E.price),1)]),v("div",K3,[v("button",{onClick:W=>u(E.id,-1),class:"w-4 h-4 rounded bg-secondary-600 light:bg-secondary-200 text-white light:text-secondary-900 text-[9px] flex items-center justify-center hover:bg-accent-500 transition-colors cursor-pointer"},"−",8,Z3),v("span",J3,be(E.qty),1),v("button",{onClick:W=>u(E.id,1),class:"w-4 h-4 rounded bg-secondary-600 light:bg-secondary-200 text-white light:text-secondary-900 text-[9px] flex items-center justify-center hover:bg-primary-500 transition-colors cursor-pointer"},"+",8,Q3)])]))),128))]),v("div",eR,[v("div",tR,[w[24]||(w[24]=v("span",{class:"text-[10px] text-secondary-400 light:text-secondary-500"},"Total",-1)),v("span",nR,"$"+be(a.value.toFixed(2)),1)]),v("button",{onClick:w[2]||(w[2]=E=>s.value=!1),class:"w-full py-2 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-[10px] font-semibold transition-colors cursor-pointer"}," Checkout ")])])):ai("",!0)]),_:1})])):t.value==="task"?(he(),pe("div",iR,[w[30]||(w[30]=co('<div class="flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0" data-v-b832dd55><div class="flex items-center gap-2" data-v-b832dd55><div class="w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary-500 flex items-center justify-center" data-v-b832dd55><svg class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b832dd55><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" data-v-b832dd55></path></svg></div><span class="text-xs sm:text-sm font-semibold text-white light:text-secondary-900" data-v-b832dd55>TaskFlow</span></div><div class="flex items-center gap-1.5 sm:gap-2" data-v-b832dd55><div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary-500/20 flex items-center justify-center text-[9px] sm:text-[10px] text-primary-500 font-bold" data-v-b832dd55>+</div><div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent-500/20 flex items-center justify-center text-[9px] sm:text-[10px] text-accent-500 font-bold" data-v-b832dd55>A</div><div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-[9px] sm:text-[10px] text-yellow-500 font-bold" data-v-b832dd55>B</div></div></div>',1)),v("div",rR,[v("div",sR,[mc(v("input",{"onUpdate:modelValue":w[3]||(w[3]=E=>f.value=E),onKeyup:pb(_,["enter"]),type:"text",placeholder:"Add a new task...",class:"flex-1 bg-secondary-700/50 light:bg-white border border-secondary-600 light:border-secondary-200 rounded-lg px-3 py-1.5 text-[10px] sm:text-xs text-white light:text-secondary-900 placeholder-secondary-500 light:placeholder-secondary-400 focus:outline-none focus:border-primary-500 transition-colors"},null,544),[[Pd,f.value]]),mc(v("select",{"onUpdate:modelValue":w[4]||(w[4]=E=>h.value=E),class:"bg-secondary-700/50 light:bg-white border border-secondary-600 light:border-secondary-200 rounded-lg px-2 py-1.5 text-[9px] sm:text-[10px] text-secondary-300 light:text-secondary-600 focus:outline-none focus:border-primary-500 transition-colors cursor-pointer"},[(he(),pe(Ke,null,it(g,E=>v("option",{key:E,value:E},be(E),9,oR)),64))],512),[[ub,h.value]]),v("button",{onClick:_,class:"px-3 py-1.5 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-[10px] sm:text-xs font-semibold transition-colors cursor-pointer flex-shrink-0"}," Add ")])]),v("div",aR,[v("div",lR,[v("div",cR,[w[26]||(w[26]=v("span",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500"},"TO DO",-1)),v("span",uR,be(d.todo.length),1)]),v("div",dR,[(he(!0),pe(Ke,null,it(d.todo,E=>(he(),pe("div",{key:E.id,class:"bg-secondary-800 light:bg-white rounded-md p-2 sm:p-2.5 border border-secondary-700 light:border-secondary-200 hover:border-primary-500/40 transition-colors cursor-pointer group",onClick:W=>m("todo","progress",E.id)},[v("div",hR,[v("button",{onClick:mo(W=>p("todo",E.id),["stop"]),class:"w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-secondary-500 light:border-secondary-300 flex-shrink-0 mt-0.5 hover:border-primary-500 transition-colors cursor-pointer","aria-label":"Mark as done"},null,8,pR),v("div",mR,[v("div",gR,be(E.title),1),v("span",{class:at(["inline-block mt-1 px-1.5 py-0.5 rounded-full text-[7px] sm:text-[8px] font-medium",E.tagColor])},be(E.tag),3)])])],8,fR))),128))])]),v("div",_R,[v("div",xR,[w[27]||(w[27]=v("span",{class:"text-[9px] sm:text-[10px] font-semibold text-primary-500"},"IN PROGRESS",-1)),v("span",vR,be(d.progress.length),1)]),v("div",yR,[(he(!0),pe(Ke,null,it(d.progress,E=>(he(),pe("div",{key:E.id,class:"bg-secondary-800 light:bg-white rounded-md p-2 sm:p-2.5 border border-primary-500/30 hover:border-primary-500/60 transition-colors cursor-pointer group",onClick:W=>m("progress","done",E.id)},[v("div",SR,[v("button",{onClick:mo(W=>p("progress",E.id),["stop"]),class:"w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-primary-500 flex-shrink-0 mt-0.5 hover:bg-primary-500/20 transition-colors cursor-pointer","aria-label":"Mark as done"},null,8,MR),v("div",wR,[v("div",ER,be(E.title),1),v("span",{class:at(["inline-block mt-1 px-1.5 py-0.5 rounded-full text-[7px] sm:text-[8px] font-medium",E.tagColor])},be(E.tag),3)])])],8,bR))),128))])]),v("div",TR,[v("div",AR,[w[28]||(w[28]=v("span",{class:"text-[9px] sm:text-[10px] font-semibold text-primary-500"},"DONE",-1)),v("span",CR,be(d.done.length),1)]),v("div",RR,[(he(!0),pe(Ke,null,it(d.done,E=>(he(),pe("div",{key:E.id,class:"bg-secondary-800 light:bg-white rounded-md p-2 sm:p-2.5 border border-secondary-700 light:border-secondary-200 opacity-70 hover:opacity-100 transition-opacity cursor-pointer",onClick:W=>p("done",E.id)},[v("div",DR,[w[29]||(w[29]=v("div",{class:"w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 mt-0.5"},[v("svg",{class:"w-2 h-2 sm:w-2.5 sm:h-2.5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M5 13l4 4L19 7"})])],-1)),v("div",LR,[v("div",IR,be(E.title),1),v("span",{class:at(["inline-block mt-1 px-1.5 py-0.5 rounded-full text-[7px] sm:text-[8px] font-medium",E.tagColor])},be(E.tag),3)])])],8,PR))),128))])])])])):t.value==="weather"?(he(),pe("div",UR,[v("div",FR,[w[31]||(w[31]=v("div",{class:"flex items-center gap-2"},[v("span",{class:"text-base sm:text-lg"},"🌤️"),v("span",{class:"text-xs sm:text-sm font-semibold text-white light:text-secondary-900"},"SkyCast")],-1)),v("div",NR,[v("div",OR,[v("button",{onClick:w[5]||(w[5]=E=>M.value="C"),class:at(["px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold transition-colors cursor-pointer",M.value==="C"?"bg-primary-600 text-white":"text-secondary-400 light:text-secondary-500 hover:text-white light:hover:text-secondary-900"])},"°C",2),v("button",{onClick:w[6]||(w[6]=E=>M.value="F"),class:at(["px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold transition-colors cursor-pointer",M.value==="F"?"bg-primary-600 text-white":"text-secondary-400 light:text-secondary-500 hover:text-white light:hover:text-secondary-900"])},"°F",2)])])]),v("div",kR,[v("div",BR,[v("div",zR,[w[32]||(w[32]=v("svg",{class:"w-3 h-3 sm:w-3.5 sm:h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-secondary-500 light:text-secondary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1)),mc(v("input",{"onUpdate:modelValue":w[7]||(w[7]=E=>x.value=E),type:"text",placeholder:"Search city...",class:"w-full bg-secondary-700/50 light:bg-white border border-secondary-600 light:border-secondary-200 rounded-lg pl-7 pr-3 py-1.5 text-[10px] sm:text-xs text-white light:text-secondary-900 placeholder-secondary-500 light:placeholder-secondary-400 focus:outline-none focus:border-primary-500 transition-colors"},null,512),[[Pd,x.value]])])]),x.value?(he(),pe("div",VR,[(he(!0),pe(Ke,null,it(N.value,E=>(he(),pe("button",{key:E,onClick:W=>F(E),class:"w-full px-3 py-2 text-left text-[10px] sm:text-xs text-secondary-300 light:text-secondary-600 hover:bg-primary-500/10 hover:text-primary-500 transition-colors cursor-pointer flex items-center gap-2"},[v("span",null,be(b[E].emoji),1),v("span",null,be(E),1),v("span",GR,be(b[E].temp)+"°",1)],8,HR))),128))])):ai("",!0)]),v("div",WR,[v("div",XR,[v("div",null,[v("div",$R,be(C.value)+"°"+be(M.value),1),v("div",jR,be(R.value.condition),1),v("div",YR,be(A.value)+" • 💧 "+be(R.value.humidity)+"% • 🌬️ "+be(R.value.wind)+" km/h",1)]),v("div",qR,be(R.value.emoji),1)])]),v("div",KR,[w[33]||(w[33]=v("div",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-1.5 uppercase tracking-wider"},"Hourly Forecast",-1)),v("div",ZR,[(he(!0),pe(Ke,null,it(y.value,(E,W)=>(he(),pe("div",{key:W,class:"flex-1 min-w-[50px] sm:min-w-0 bg-secondary-800 light:bg-white rounded-lg p-1.5 sm:p-2 text-center border border-secondary-700 light:border-secondary-200 hover:border-primary-500/40 transition-colors cursor-pointer"},[v("div",JR,be(E.time),1),v("div",QR,be(E.emoji),1),v("div",eP,be(E.temp)+"°",1)]))),128))])]),v("div",tP,[w[34]||(w[34]=v("div",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-1.5 uppercase tracking-wider"},"7-Day Forecast",-1)),v("div",nP,[(he(!0),pe(Ke,null,it(T.value,(E,W)=>(he(),pe("div",{key:W,class:"flex items-center justify-between bg-secondary-800 light:bg-white rounded-md px-2.5 sm:px-3 py-1.5 sm:py-2 border border-secondary-700 light:border-secondary-200 hover:border-primary-500/40 transition-colors cursor-pointer"},[v("span",iP,be(E.day),1),v("span",rP,be(E.emoji),1),v("div",sP,[v("div",{class:"h-full bg-gradient-to-r from-yellow-500 to-primary-500 rounded-full",style:Tn({width:(E.high-10)*5+"%"})},null,4)]),v("span",oP,be(E.high)+"° / "+be(E.low)+"°",1)]))),128))])])])):t.value==="analytics"?(he(),pe("div",aP,[v("div",lP,[v("div",cP,[w[36]||(w[36]=v("div",{class:"w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-primary-500 flex items-center justify-center"},[v("svg",{class:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})])],-1)),(he(),pe(Ke,null,it(4,E=>v("div",{key:E,class:"w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-secondary-700/50 light:bg-secondary-200 flex items-center justify-center cursor-pointer hover:bg-primary-500/20 transition-colors"},[...w[35]||(w[35]=[v("div",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm bg-secondary-500 light:bg-secondary-400"},null,-1)])])),64))]),v("div",uP,[v("div",dP,[(he(),pe(Ke,null,it($,E=>v("button",{key:E,onClick:W=>k(E),class:at(["px-2 sm:px-3 py-1 rounded-full text-[8px] sm:text-[9px] font-medium transition-all cursor-pointer",G.value===E?"bg-primary-600 text-white shadow-md shadow-primary-500/25":"bg-secondary-800 light:bg-white text-secondary-400 light:text-secondary-500 border border-secondary-700 light:border-secondary-200 hover:text-white light:hover:text-secondary-900"])},be(E),11,fP)),64))]),v("div",hP,[v("div",pP,[w[37]||(w[37]=v("div",{class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5"},"Followers",-1)),v("div",mP,be(I.followers.toLocaleString()),1),w[38]||(w[38]=v("div",{class:"text-[8px] sm:text-[9px] text-primary-500 mt-0.5"},"▲ 12%",-1))]),v("div",gP,[w[39]||(w[39]=v("div",{class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5"},"Engagement",-1)),v("div",_P,be(I.engagement)+"%",1),w[40]||(w[40]=v("div",{class:"text-[8px] sm:text-[9px] text-primary-500 mt-0.5"},"▲ 0.8%",-1))]),v("div",xP,[w[41]||(w[41]=v("div",{class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5"},"Reach",-1)),v("div",vP,be(I.reach.toLocaleString()),1),w[42]||(w[42]=v("div",{class:"text-[8px] sm:text-[9px] text-primary-500 mt-0.5"},"▲ 23%",-1))]),v("div",yP,[w[43]||(w[43]=v("div",{class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5"},"Posts",-1)),v("div",bP,be(I.posts),1),w[44]||(w[44]=v("div",{class:"text-[8px] sm:text-[9px] text-primary-500 mt-0.5"},"▲ 5%",-1))])]),v("div",SP,[w[45]||(w[45]=v("div",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-2"},"Engagement Over Time",-1)),v("div",MP,[(he(!0),pe(Ke,null,it(z.value,(E,W)=>(he(),pe("div",{key:W,class:"flex-1 flex flex-col items-center gap-1 group cursor-pointer",onMouseenter:ie=>E.hover=!0,onMouseleave:ie=>E.hover=!1},[v("div",{class:at(["w-full rounded-t bg-gradient-to-t from-primary-600 to-primary-400 transition-all duration-300 group-hover:from-primary-500 group-hover:to-primary-300",{"opacity-40":W%3===0}]),style:Tn({height:E.value+"%"})},null,6),v("span",EP,be(E.label),1)],40,wP))),128))])]),v("div",TP,[v("div",AP,[w[46]||(w[46]=v("div",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-2"},"Platforms",-1)),v("div",CP,[(he(),pe(Ke,null,it(["Instagram","Twitter","LinkedIn"],(E,W)=>v("div",{key:E,class:"flex items-center gap-2 cursor-pointer hover:bg-secondary-700/30 light:hover:bg-secondary-100 rounded-md px-1.5 py-1 transition-colors",onClick:ie=>k(E)},[v("div",{class:at(["w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full",["bg-primary-500","bg-accent-500","bg-yellow-500"][W]])},null,2),v("span",PP,be(E),1),v("span",DP,be([45,30,25][W])+"%",1)],8,RP)),64))])]),v("div",LP,[w[48]||(w[48]=v("div",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-2"},"Top Posts",-1)),v("div",IP,[(he(),pe(Ke,null,it(3,E=>v("div",{key:E,class:"flex items-center gap-2 cursor-pointer hover:bg-secondary-700/30 light:hover:bg-secondary-100 rounded-md px-1.5 py-1 transition-colors"},[v("div",{class:at(["w-5 h-5 sm:w-6 sm:h-6 rounded bg-gradient-to-br flex items-center justify-center text-[10px] sm:text-xs flex-shrink-0",["from-primary-500/30 to-primary-500/10","from-accent-500/30 to-accent-500/10","from-yellow-500/30 to-yellow-500/10"][E-1]])},be(["📸","🐦","💼"][E-1]),3),w[47]||(w[47]=v("div",{class:"flex-1 min-w-0"},[v("div",{class:"h-1.5 bg-secondary-700 light:bg-secondary-200 rounded mb-1 w-4/5"}),v("div",{class:"h-1 bg-secondary-700 light:bg-secondary-200 rounded w-1/2"})],-1)),v("span",UP,be([1200,890,650][E-1]),1)])),64))])])])])])])):t.value==="recipe"?(he(),pe("div",FP,[v("div",NP,[w[51]||(w[51]=co('<div class="flex items-center justify-between mb-2" data-v-b832dd55><div class="text-xs sm:text-sm font-bold text-primary-500" data-v-b832dd55>🍳 FlavorFind</div><div class="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary-500/20 flex items-center justify-center cursor-pointer hover:bg-primary-500/30 transition-colors" data-v-b832dd55><svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b832dd55><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-b832dd55></path></svg></div></div>',1)),v("div",OP,[v("div",kP,[w[49]||(w[49]=v("svg",{class:"w-3 h-3 sm:w-3.5 sm:h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-secondary-500 light:text-secondary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1)),mc(v("input",{"onUpdate:modelValue":w[8]||(w[8]=E=>L.value=E),type:"text",placeholder:"Search recipes...",class:"w-full bg-secondary-700/50 light:bg-secondary-100 rounded-lg pl-7 pr-3 py-1.5 sm:py-2 text-[10px] sm:text-xs text-white light:text-secondary-900 placeholder-secondary-500 light:placeholder-secondary-400 focus:outline-none focus:border-primary-500 border border-transparent focus:border-primary-500/50 transition-colors"},null,512),[[Pd,L.value]])]),w[50]||(w[50]=v("button",{class:"bg-primary-500 hover:bg-primary-400 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 flex items-center transition-colors cursor-pointer"},[v("span",{class:"text-[10px] sm:text-xs text-white font-semibold"},"Search")],-1))])]),v("div",BP,[(he(),pe(Ke,null,it(ue,E=>v("button",{key:E,onClick:W=>X.value=E,class:at(["px-2.5 sm:px-3 py-1 rounded-full text-[8px] sm:text-[9px] font-medium whitespace-nowrap transition-all cursor-pointer",X.value===E?"bg-primary-500 text-white shadow-md shadow-primary-500/25":"bg-secondary-800 light:bg-white text-secondary-400 light:text-secondary-500 border border-secondary-700 light:border-secondary-200 hover:text-white light:hover:text-secondary-900"])},be(E),11,zP)),64))]),v("div",VP,[(he(!0),pe(Ke,null,it(ke.value,E=>(he(),pe("div",{key:E.id,onClick:W=>Fe(E),class:"bg-secondary-800 light:bg-white rounded-lg overflow-hidden border border-secondary-700 light:border-secondary-200 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-200 cursor-pointer"},[v("div",{class:at(["h-14 sm:h-16 bg-gradient-to-br relative flex items-center justify-center text-2xl sm:text-3xl",E.color])},[v("span",null,be(E.emoji),1),v("div",GP,"⏱ "+be(E.time)+" min",1)],2),v("div",WP,[v("div",XP,be(E.name),1),v("div",$P,[w[52]||(w[52]=v("span",{class:"text-yellow-500 text-[9px] sm:text-[10px]"},"★",-1)),v("span",jP,be(E.rating),1),v("span",YP,be(E.category),1)])])],8,HP))),128)),ke.value.length===0?(he(),pe("div",qP,[...w[53]||(w[53]=[v("div",{class:"text-3xl mb-2"},"🔍",-1),v("p",{class:"text-xs text-secondary-400 light:text-secondary-500"},"No recipes found",-1)])])):ai("",!0)]),Pt(zf,{name:"fade"},{default:wu(()=>[oe.value?(he(),pe("div",{key:0,class:"absolute inset-0 bg-dark-900/80 light:bg-secondary-900/80 backdrop-blur-sm z-20 flex items-center justify-center p-4",onClick:w[12]||(w[12]=E=>oe.value=null)},[v("div",{class:"bg-secondary-800 light:bg-white rounded-xl max-w-sm w-full p-5 border border-secondary-700 light:border-secondary-200 shadow-2xl",onClick:w[11]||(w[11]=mo(()=>{},["stop"]))},[v("div",KP,[v("div",ZP,be(oe.value.emoji),1),v("button",{onClick:w[9]||(w[9]=E=>oe.value=null),class:"text-secondary-400 hover:text-white light:hover:text-secondary-900 transition-colors cursor-pointer","aria-label":"Close recipe"},[...w[54]||(w[54]=[v("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),v("h3",JP,be(oe.value.name),1),v("div",QP,[v("span",eD,"★ "+be(oe.value.rating),1),w[55]||(w[55]=v("span",{class:"text-[9px] text-secondary-500 light:text-secondary-400"},"•",-1)),v("span",tD,"⏱ "+be(oe.value.time)+" min",1),w[56]||(w[56]=v("span",{class:"text-[9px] text-secondary-500 light:text-secondary-400"},"•",-1)),v("span",nD,be(oe.value.category),1)]),v("div",iD,[(he(),pe(Ke,null,it(4,E=>v("div",{key:E,class:"flex items-center gap-2"},[w[57]||(w[57]=v("div",{class:"w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0"},null,-1)),v("div",{class:"h-1.5 bg-secondary-700 light:bg-secondary-200 rounded flex-1",style:Tn({width:60+E*8+"%"})},null,4)])),64))]),v("button",{onClick:w[10]||(w[10]=E=>oe.value=null),class:"w-full py-2 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-[10px] font-semibold transition-colors cursor-pointer"}," Start Cooking ")])])):ai("",!0)]),_:1})])):t.value==="portfolio"?(he(),pe("div",rD,[v("div",sD,[w[58]||(w[58]=v("div",{class:"text-xs sm:text-sm font-bold text-primary-500"},"👨‍💻 DevName",-1)),v("div",oD,[(he(),pe(Ke,null,it(ee,E=>v("button",{key:E,onClick:W=>le(E),class:at(["capitalize cursor-pointer transition-colors",Ve.value===E?"text-primary-500 font-semibold":"hover:text-white light:hover:text-secondary-900"])},be(E),11,aD)),64))])]),v("div",lD,[Ve.value==="home"?(he(),pe("div",cD,[v("div",uD,[w[59]||(w[59]=co('<div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 mx-auto mb-3 sm:mb-4 flex items-center justify-center" data-v-b832dd55><svg class="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b832dd55><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" data-v-b832dd55></path></svg></div><div class="text-base sm:text-lg font-bold text-white light:text-secondary-900 mb-1.5" data-v-b832dd55>Hi, I&#39;m a Developer</div><div class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 mb-3 sm:mb-4" data-v-b832dd55>Building beautiful web experiences</div>',3)),v("div",dD,[v("button",{onClick:w[13]||(w[13]=E=>le("projects")),class:"bg-primary-500 hover:bg-primary-400 text-white text-[9px] sm:text-[10px] font-semibold px-3 sm:px-4 py-1.5 rounded-full transition-colors cursor-pointer"},"View Work"),v("button",{onClick:w[14]||(w[14]=E=>le("contact")),class:"border border-secondary-600 light:border-secondary-300 text-secondary-300 light:text-secondary-600 hover:text-white light:hover:text-secondary-900 text-[9px] sm:text-[10px] font-semibold px-3 sm:px-4 py-1.5 rounded-full transition-colors cursor-pointer"},"Contact Me")])])])):Ve.value==="about"?(he(),pe("div",fD,[w[60]||(w[60]=v("h3",{class:"text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3"},"About Me",-1)),v("div",hD,[(he(),pe(Ke,null,it(4,E=>v("div",{key:E,class:"h-2 bg-secondary-700 light:bg-secondary-200 rounded",style:Tn({width:70+E*5+"%"})},null,4)),64))]),v("div",pD,[(he(),pe(Ke,null,it(["Vue.js","React","Node.js","TypeScript","Tailwind","GraphQL"],E=>v("div",{key:E,class:"bg-secondary-800 light:bg-white rounded-lg p-2.5 border border-secondary-700 light:border-secondary-200 text-center"},[v("div",mD,be(E),1),v("div",gD,[v("div",{class:"h-full bg-primary-500 rounded-full",style:Tn({width:60+E.length*3+"%"})},null,4)])])),64))])])):Ve.value==="projects"?(he(),pe("div",_D,[w[62]||(w[62]=v("h3",{class:"text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3"},"My Projects",-1)),v("div",xD,[(he(),pe(Ke,null,it(4,E=>v("div",{key:E,class:"bg-secondary-800 light:bg-white rounded-lg overflow-hidden border border-secondary-700 light:border-secondary-200 hover:border-primary-500/50 transition-colors cursor-pointer"},[v("div",{class:at(["h-12 sm:h-16 bg-gradient-to-br flex items-center justify-center text-xl sm:text-2xl",["from-primary-500/30 to-primary-500/10","from-accent-500/30 to-accent-500/10","from-yellow-500/30 to-yellow-500/10","from-blue-500/30 to-blue-500/10"][E-1]])},be(["📱","🌐","🎮","📊"][E-1]),3),w[61]||(w[61]=v("div",{class:"p-2 sm:p-2.5"},[v("div",{class:"h-1.5 bg-secondary-700 light:bg-secondary-200 rounded mb-1 w-4/5"}),v("div",{class:"h-1 bg-secondary-700 light:bg-secondary-200 rounded w-1/2"})],-1))])),64))])])):(he(),pe("div",vD,[...w[63]||(w[63]=[co('<h3 class="text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3" data-v-b832dd55>Get In Touch</h3><div class="space-y-2 mb-4" data-v-b832dd55><div class="flex items-center gap-2 bg-secondary-800 light:bg-white rounded-lg p-2.5 border border-secondary-700 light:border-secondary-200" data-v-b832dd55><span class="text-base" data-v-b832dd55>📧</span><span class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500" data-v-b832dd55>hello@devname.com</span></div><div class="flex items-center gap-2 bg-secondary-800 light:bg-white rounded-lg p-2.5 border border-secondary-700 light:border-secondary-200" data-v-b832dd55><span class="text-base" data-v-b832dd55>💼</span><span class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500" data-v-b832dd55>linkedin.com/in/devname</span></div><div class="flex items-center gap-2 bg-secondary-800 light:bg-white rounded-lg p-2.5 border border-secondary-700 light:border-secondary-200" data-v-b832dd55><span class="text-base" data-v-b832dd55>🐙</span><span class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500" data-v-b832dd55>github.com/devname</span></div></div><button class="w-full py-2 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-[10px] font-semibold transition-colors cursor-pointer" data-v-b832dd55>Send Message</button>',3)])]))]),v("div",yD,[v("div",bD,[(he(),pe(Ke,null,it(["Vue","React","Node","Python","Go"],E=>v("div",{key:E,class:"px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-secondary-700/50 light:bg-secondary-100 text-[8px] sm:text-[9px] text-secondary-400 light:text-secondary-500 border border-secondary-700 light:border-secondary-200 whitespace-nowrap"},be(E),1)),64))])])])):(he(),pe("div",SD,[v("div",MD,[v("div",wD,be(n.project.title),1),v("div",ED,[(he(),pe(Ke,null,it(Le,E=>v("button",{key:E,onClick:W=>Ee(E),class:at(["capitalize cursor-pointer transition-colors",ge.value===E?"text-primary-500 font-semibold":"hover:text-white light:hover:text-secondary-900"])},be(E),11,TD)),64))])]),v("div",AD,[ge.value==="home"?(he(),pe("div",CD,[v("div",RD,[w[64]||(w[64]=v("div",{class:"w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-500/20 mx-auto mb-2 sm:mb-3 flex items-center justify-center"},[v("svg",{class:"w-5 h-5 sm:w-6 sm:h-6 text-primary-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"}),v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M8 9h8M8 13h5"})])],-1)),v("div",PD,be(n.project.title),1),v("div",DD,be(n.project.description),1),v("div",LD,[(he(!0),pe(Ke,null,it(n.project.tech.slice(0,3),E=>(he(),pe("div",{key:E,class:"px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-primary-500/10 text-[8px] sm:text-[9px] text-primary-500 border border-primary-500/20"},be(E),1))),128))])])])):ge.value==="features"?(he(),pe("div",ID,[w[66]||(w[66]=v("h3",{class:"text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3"},"Features",-1)),v("div",UD,[(he(!0),pe(Ke,null,it(n.project.features||["Feature 1","Feature 2","Feature 3","Feature 4"],(E,W)=>(he(),pe("div",{key:W,class:"flex items-start gap-2 bg-secondary-800 light:bg-white rounded-lg p-2.5 sm:p-3 border border-secondary-700 light:border-secondary-200"},[w[65]||(w[65]=v("div",{class:"w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0"},[v("svg",{class:"w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})])],-1)),v("span",FD,be(E),1)]))),128))])])):(he(),pe("div",ND,[w[67]||(w[67]=v("h3",{class:"text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3"},"About",-1)),v("div",OD,[(he(),pe(Ke,null,it(5,E=>v("div",{key:E,class:"h-2 bg-secondary-700 light:bg-secondary-200 rounded",style:Tn({width:65+E*5+"%"})},null,4)),64))])]))])]))]))}},n0=t0(kD,[["__scopeId","data-v-b832dd55"]]),BD={class:"relative w-full h-[500px] select-none"},zD=["disabled"],VD=["onClick","onMouseenter","onMouseleave"],HD={class:"relative overflow-hidden rounded-t-xl h-48"},GD={class:"p-5 bg-secondary-800 h-full light:bg-white rounded-b-xl"},WD={class:"text-white light:text-secondary-900 font-semibold text-lg mb-2"},XD={class:"text-secondary-400 light:text-secondary-500 text-sm mb-3 leading-relaxed line-clamp-2"},$D={class:"flex flex-wrap gap-1.5 mb-3"},jD=["disabled"],YD={class:"absolute bottom-0 left-1/2 -translate-x-1/2 w-64 sm:w-80"},qD={class:"h-1 rounded-full bg-secondary-800 light:bg-secondary-200 overflow-hidden"},Cf=300,vg=380,tl=3,tu=.6,nl=.5,KD=215,ZD=34,JD=8,QD=1.08,eL=16,tL=58,nL={__name:"ProjectWheel",props:{projects:{type:Array,required:!0}},emits:["open"],setup(n,{emit:e}){const t=n,i=e,r=Oe(null),s=Oe(0),o=Oe(0),a=Oe(!1),l=Oe(null);let c=[],u=!1,d=0,f=0,h=!1;const g=hn(()=>t.projects.length>1),_=hn(()=>t.projects.length===0?0:(s.value+1)/t.projects.length*100),p=async()=>{await ss(),!(!r.value||(c=Array.from(r.value.children),c.length===0))&&(c.forEach(X=>{_t.set(X,{position:"absolute",top:"50%",left:"50%",width:Cf,height:vg,marginLeft:-Cf/2,marginTop:-vg/2,transformOrigin:"center center",willChange:"transform, opacity",borderRadius:"1rem",boxShadow:"0 10px 30px rgba(0,0,0,0.3)",cursor:"pointer",backgroundColor:"rgb(var(--color-secondary-800))"})}),s.value=0,o.value=0,M(!0))},m=j=>{const X=tl;return j<=X?(tu+nl)*j-nl*j*j/(2*X):(tu+nl)*X-nl*X/2+tu*(j-X)},b=m(1),A=j=>{const L=360/c.length,oe=s.value+o.value;let ke=(j*L-oe*L)%360;ke>180&&(ke-=360),ke<-180&&(ke+=360);const Fe=ke/L,Ve=Math.abs(Fe),ee=Math.min(Ve,tl),le=Math.max(0,1-Ve/tl),ge=Math.sign(Fe)*KD*(m(Ve)/b),Le=ZD*(1-Math.cos(ee/tl*(Math.PI/2))),Ee=Math.sign(Fe)*JD*(ee/tl),fe=tu+le*nl,w=le,E=Math.round(le*100);return{x:ge,y:Le,scale:fe,opacity:w,zIndex:E,rotation:Ee,normalized:ke,offset:Fe}},x=()=>!a.value&&!u,M=(j=!1,X=!1)=>{const L=x()?l.value:null,oe=L!==null&&c[L]?A(L).offset:null;c.forEach((ue,ke)=>{const{x:Fe,y:Ve,scale:ee,opacity:le,zIndex:ge,rotation:Le,normalized:Ee,offset:fe}=A(ke),w=Math.abs(Ee)<5,E=L===ke;let W=Fe,ie=Ve,q=ee,O=Le,U=ge,me=j?"none":"power3.out",ce=j?0:.8;if(E)q=ee*QD,ie=Ve-eL,O=Le*.35,U=150,j||(me=X?"elastic.out(1, 0.45)":"back.out(2)",ce=X?.9:.5);else if(oe!==null){const de=fe-oe,P=Math.abs(de);if(P>.01){const S=tL/P*Math.sign(de);W=Fe+S,ie=Ve+Math.min(10,10/P),j||(me=X?"back.out(3)":"power3.out",ce=X?.75:.5)}}const J={x:W,y:ie,scale:q,rotation:O,opacity:E?1:le>.05?le:0,zIndex:U,filter:w||E?"brightness(1)":"brightness(0.6)",boxShadow:E?"0 25px 60px rgb(var(--color-primary-500) / 0.45)":w?"0 0 50px rgb(var(--color-primary-500) / 0.35)":"0 0 0px rgb(var(--color-primary-500) / 0)",pointerEvents:le>.05?"auto":"none",duration:ce,ease:me,overwrite:"auto",borderRadius:"1rem",transformOrigin:"center center"};j?_t.set(ue,J):_t.to(ue,J)})},R=j=>{a.value||u||l.value!==j&&(l.value=j,M(!1,!0))},C=j=>{l.value===j&&(l.value=null,!(a.value||u)&&M(!1,!0))},y=j=>{if(u||c.length===0||!g.value)return;u=!0,l.value=null;const X=c.length;s.value=(s.value+j+X)%X,_t.to({},{duration:1,ease:"power3.inOut",onUpdate:()=>{M()},onComplete:()=>{u=!1,M()}})},T=j=>{u||c.length===0||a.value||h||N(j)},N=j=>{const X=c[j];if(!X)return;const L=X.getBoundingClientRect();i("open",{project:t.projects[j],originRect:{left:L.left,top:L.top,width:L.width,height:L.height}})},F=j=>{u||c.length===0||!g.value||(a.value=!0,l.value=null,h=!1,d=j.clientX,f=j.clientX,j.preventDefault())},I=j=>{if(!a.value)return;const X=j.clientX-f;f=j.clientX,Math.abs(j.clientX-d)>5&&(h=!0),o.value-=X/Cf,M()},G=()=>{if(!a.value)return;a.value=!1;const j=c.length,X=Math.round(o.value);if(!h&&X===0){o.value=0;return}X!==0&&(s.value=(s.value+X+j)%j),o.value=0,u=!0,_t.to({},{duration:.5,ease:"power3.out",onUpdate:()=>{M()},onComplete:()=>{u=!1,M(),setTimeout(()=>{h=!1},50)}})},$=()=>{a.value&&G()},V=()=>{l.value!==null&&(l.value=null,!a.value&&!u&&M(!1,!0)),G()},z=j=>{const X=j.currentTarget;if(!X.querySelector(".fill-overlay"))return;const oe=X.getBoundingClientRect(),ue=j.clientX-oe.left,ke=j.clientY-oe.top;X.style.setProperty("--mx",`${ue}px`),X.style.setProperty("--my",`${ke}px`)},k=j=>{const X=j.currentTarget;X.style.setProperty("--mx","50%"),X.style.setProperty("--my","50%")};return Wn(async()=>{await p()}),Wi(()=>t.projects,async()=>{await p()}),(j,X)=>(he(),pe("div",BD,[v("button",{onClick:X[0]||(X[0]=L=>y(-1)),onMousemove:z,onMouseleave:k,disabled:!g.value,class:"absolute -left-40 top-1/2 -translate-y-1/2 size-[300px] rounded-full flex items-center justify-center text-secondary-300 light:text-secondary-500 disabled:opacity-40 disabled:cursor-not-allowed z-[110] border-2 border-primary-500/50 light:border-primary-600/50 hover:border-primary-500 light:hover:border-primary-600 hover:scale-105 transition-all duration-300 overflow-hidden","aria-label":"Previous project"},[...X[2]||(X[2]=[v("span",{class:"fill-overlay"},null,-1),v("svg",{class:"absolute z-10 w-10 h-10 right-16 top-1/2 -translate-y-1/2 text-primary-500 light:text-primary-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M19 12H5M12 19l-7-7 7-7"})],-1)])],40,zD),v("div",{ref_key:"wheelRef",ref:r,class:at(["relative w-full h-full",{"cursor-grabbing":a.value,"cursor-grab":!a.value}]),onPointerdown:F,onPointermove:I,onPointerup:G,onPointercancel:$,onPointerleave:V},[(he(!0),pe(Ke,null,it(n.projects,(L,oe)=>(he(),pe("div",{key:L.id,onClick:ue=>T(oe),onMouseenter:ue=>R(oe),onMouseleave:ue=>C(oe),class:"absolute rounded-xl overflow-hidden shadow-xl",style:{width:"300px",height:"360px"}},[v("div",HD,[Pt(n0,{project:L,class:"w-full h-full"},null,8,["project"]),X[3]||(X[3]=v("div",{class:"absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent rounded-t-xl pointer-events-none"},null,-1))]),v("div",GD,[v("h3",WD,be(L.title),1),v("p",XD,be(L.description),1),v("div",$D,[(he(!0),pe(Ke,null,it(L.tech.slice(0,3),ue=>(he(),pe("span",{key:ue,class:"text-xs text-primary-400 bg-primary-500/10 px-2 py-0.5 rounded-full"},be(ue),1))),128))])])],40,VD))),128))],34),v("button",{onClick:X[1]||(X[1]=L=>y(1)),onMousemove:z,onMouseleave:k,disabled:!g.value,class:"absolute -right-40 top-1/2 -translate-y-1/2 size-[300px] rounded-full flex items-center justify-center text-secondary-300 light:text-secondary-500 disabled:opacity-40 disabled:cursor-not-allowed z-[110] border-2 border-primary-500/50 light:border-primary-600/50 hover:border-primary-500 light:hover:border-primary-600 hover:scale-105 transition-all duration-300 overflow-hidden","aria-label":"Next project"},[...X[4]||(X[4]=[v("span",{class:"fill-overlay"},null,-1),v("svg",{class:"absolute z-10 w-10 h-10 left-16 top-1/2 -translate-y-1/2 text-primary-500 light:text-primary-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M5 12h14M12 5l7 7-7 7"})],-1)])],40,jD),v("div",YD,[v("div",qD,[v("div",{class:"h-full rounded-full bg-primary-500 light:bg-primary-600 transition-all duration-500 ease-out",style:Tn({width:_.value+"%"})},null,4)])])]))}},iL=t0(nL,[["__scopeId","data-v-0d7afb23"]]),rL={class:"relative overflow-hidden h-48"},sL={class:"p-6"},oL={class:"text-white light:text-secondary-900 font-semibold text-lg mb-2 group-hover:text-primary-400 transition-colors duration-200"},aL={class:"text-secondary-400 light:text-secondary-500 text-sm mb-4 leading-relaxed"},lL={class:"flex flex-wrap gap-2 mb-4"},yg={__name:"ProjectCard",props:{project:{type:Object,required:!0}},emits:["open"],setup(n,{emit:e}){const t=n,i=e,r=Oe(null);let s=null;const o=()=>{if(!r.value)return;const a=r.value.getBoundingClientRect();i("open",{project:t.project,originRect:{left:a.left,top:a.top,width:a.width,height:a.height}})};return Wn(()=>{r.value&&(s=c3(r.value,6))}),ii(()=>{s&&s()}),(a,l)=>(he(),pe("div",{ref_key:"cardRef",ref:r,onClick:o,class:"group bg-secondary-800 border border-secondary-700 rounded-xl overflow-hidden hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 will-change-transform cursor-pointer light:bg-white light:border-secondary-200 light:hover:border-primary-500/50 light:hover:shadow-primary-500/10"},[v("div",rL,[Pt(n0,{project:n.project,class:"w-full h-full group-hover:scale-105 transition-transform duration-500"},null,8,["project"]),l[0]||(l[0]=v("div",{class:"absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent pointer-events-none"},null,-1))]),v("div",sL,[v("h3",oL,be(n.project.title),1),v("p",aL,be(n.project.description),1),v("div",lL,[(he(!0),pe(Ke,null,it(n.project.tech,c=>(he(),pe("span",{key:c,class:"text-xs text-primary-400 bg-primary-500/10 px-2 py-1 rounded-full"},be(c),1))),128))])])],512))}},cL={class:"min-h-full flex flex-col lg:flex-row"},uL={class:"relative lg:w-1/2 lg:h-screen overflow-hidden flex-shrink-0"},dL={class:"absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:hidden bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent"},fL={class:"text-xl sm:text-3xl font-bold text-white mb-2"},hL={class:"flex flex-wrap gap-2"},pL={class:"flex-1 p-5 sm:p-8 lg:p-12 lg:overflow-y-auto"},mL={class:"hidden lg:block text-4xl font-bold text-white light:text-secondary-900 mb-4"},gL={class:"hidden lg:flex flex-wrap gap-2 mb-6"},_L={class:"mb-8"},xL={class:"text-secondary-300 light:text-secondary-600 leading-relaxed text-lg"},vL={class:"mb-8"},yL={class:"space-y-3"},bL={class:"flex flex-wrap gap-4"},SL=["href"],ML=["href"],wL={__name:"ProjectDetailModal",props:{project:{type:Object,required:!0},originRect:{type:Object,default:null}},emits:["close"],setup(n,{emit:e}){const t=n,i=e,r=["Responsive design that works across all devices","Optimized performance with lazy loading and code splitting","Clean, maintainable code following best practices","Accessible UI with semantic HTML and ARIA labels"],s=Oe(null),o=Oe(null),a=Oe(null),l=Oe(null),c=Oe(!1);let u=null;const d=async()=>{if(await ss(),!s.value||!o.value)return;const g=s.value,_=o.value,p=a.value,m=t.originRect||{left:0,top:0,width:0,height:0},b=window.innerWidth,A=window.innerHeight;_t.set(g,{opacity:0,pointerEvents:"none"}),_t.set(_,{position:"fixed",left:m.left,top:m.top,width:m.width,height:m.height,margin:0,borderRadius:"1rem",zIndex:9999,overflow:"hidden"}),_t.set(p,{opacity:0,y:30}),_t.to(g,{opacity:1,duration:.3,ease:"power2.out",pointerEvents:"auto"}),u=_t.timeline({defaults:{ease:"power3.inOut"}}),u.to(_,{left:0,top:0,width:b,height:A,borderRadius:0,duration:.7}).to(p,{opacity:1,y:0,duration:.5,ease:"power2.out"},"-=0.3").from(l.value,{opacity:0,scale:.8,duration:.3,ease:"back.out(1.7)"},"-=0.2")},f=()=>{if(c.value)return;c.value=!0;const g=s.value,_=o.value,p=a.value,m=t.originRect||{left:0,top:0,width:0,height:0};u&&u.kill(),_t.timeline({defaults:{ease:"power3.inOut"},onComplete:()=>{i("close")}}).to(p,{opacity:0,y:-30,duration:.3,ease:"power2.in"}).to(_,{left:m.left,top:m.top,width:m.width,height:m.height,borderRadius:"1rem",duration:.6},"-=0.1").to(g,{opacity:0,duration:.3,ease:"power2.in"},"-=0.3")},h=g=>{g.key==="Escape"&&f()};return Wn(()=>{d(),document.body.style.overflow="hidden",window.addEventListener("keydown",h)}),ii(()=>{document.body.style.overflow="",window.removeEventListener("keydown",h),u&&u.kill()}),(g,_)=>(he(),pe("div",{ref_key:"overlayRef",ref:s,class:"fixed inset-0 z-[9998] bg-dark-900/90 light:bg-secondary-900/90 backdrop-blur-sm",onClick:mo(f,["self"])},[v("div",{ref_key:"cardRef",ref:o,class:"bg-secondary-800 light:bg-white shadow-2xl"},[v("button",{ref_key:"closeBtnRef",ref:l,onClick:f,class:"fixed top-4 right-4 z-[10000] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-900/80 light:bg-white/90 border border-secondary-700 light:border-secondary-200 flex items-center justify-center text-secondary-300 light:text-secondary-600 hover:text-primary-400 light:hover:text-primary-600 hover:border-primary-500/50 transition-colors duration-200 shadow-lg backdrop-blur-sm","aria-label":"Close project details"},[..._[0]||(_[0]=[v("svg",{class:"w-5 h-5 sm:w-6 sm:h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])],512),v("div",{ref_key:"contentRef",ref:a,class:"h-full w-full overflow-y-auto overscroll-contain"},[v("div",cL,[v("div",uL,[Pt(n0,{project:n.project,class:"w-full h-[60vh] sm:h-[55vh] lg:h-full"},null,8,["project"]),v("div",dL,[v("h2",fL,be(n.project.title),1),v("div",hL,[(he(!0),pe(Ke,null,it(n.project.tech,p=>(he(),pe("span",{key:p,class:"text-xs text-primary-300 bg-primary-500/20 px-3 py-1 rounded-full backdrop-blur-sm"},be(p),1))),128))])])]),v("div",pL,[v("h2",mL,be(n.project.title),1),v("div",gL,[(he(!0),pe(Ke,null,it(n.project.tech,p=>(he(),pe("span",{key:p,class:"text-sm text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full"},be(p),1))),128))]),v("div",_L,[_[1]||(_[1]=v("h3",{class:"text-lg font-semibold text-primary-400 light:text-primary-600 mb-3 uppercase tracking-wider"}," About This Project ",-1)),v("p",xL,be(n.project.description),1)]),v("div",vL,[_[3]||(_[3]=v("h3",{class:"text-lg font-semibold text-primary-400 light:text-primary-600 mb-3 uppercase tracking-wider"}," Key Features ",-1)),v("ul",yL,[(he(!0),pe(Ke,null,it(n.project.features||r,(p,m)=>(he(),pe("li",{key:m,class:"flex items-start gap-3 text-secondary-300 light:text-secondary-600"},[_[2]||(_[2]=v("svg",{class:"w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})],-1)),v("span",null,be(p),1)]))),128))])]),v("div",bL,[v("a",{href:n.project.github,target:"_blank",rel:"noopener noreferrer",class:"inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary-700 light:bg-secondary-100 text-white light:text-secondary-900 font-medium hover:bg-primary-600 light:hover:bg-primary-600 light:hover:text-white transition-colors duration-300"},[..._[4]||(_[4]=[v("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24"},[v("path",{"fill-rule":"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z","clip-rule":"evenodd"})],-1),Ns(" View Code ",-1)])],8,SL),v("a",{href:n.project.demo,target:"_blank",rel:"noopener noreferrer",class:"inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors duration-300 shadow-lg shadow-primary-500/25"},[..._[5]||(_[5]=[v("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})],-1),Ns(" Live Demo ",-1)])],8,ML)])])])],512)],512)],512))}},EL={class:"h-1 bg-secondary-800/50 light:bg-secondary-200/50 backdrop-blur-sm"},TL={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},AL={class:"flex flex-wrap gap-3"},CL=["onClick"],RL={key:0,class:"ml-auto flex items-center gap-1 p-1 rounded-lg bg-secondary-800 border border-secondary-700 light:bg-secondary-100 light:border-secondary-200"},PL={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"},DL={__name:"ProjectsSection",setup(n){_t.registerPlugin(pt);const e=Oe("All"),t=Oe("carousel"),i=Oe(!1),r=Oe(0),s=Oe(0),o=Oe(!1),a=Oe(null),l=Oe(null),c=Oe(null),u=Oe(null),d=Oe(null),f=Oe(null),h=Oe(null),g=Oe(null),_=Oe(null),p=Oe(null);let m=[],b=null,A=null,x=null,M=null;const R=hn(()=>{const X=Af.flatMap(L=>L.tech);return["All",...new Set(X)]}),C=hn(()=>e.value==="All"?Af:Af.filter(X=>X.tech.includes(e.value))),y=X=>{e.value=X},T=({project:X,originRect:L})=>{_.value=X,p.value=L},N=()=>{_.value=null,p.value=null};Wi(C,async()=>{await ss(),G(),t.value==="horizontal"&&k()});const F=X=>{i.value||(t.value=X,X==="horizontal"?ss(()=>k()):j())},I=X=>{i.value=X.matches,X.matches&&(t.value="grid",j())},G=()=>{if(!d.value)return;const X=d.value.getBoundingClientRect(),L=window.innerHeight,oe=X.height-L,ue=Math.min(Math.max(-X.top,0),oe);r.value=oe>0?ue/oe*100:100},$=()=>{A&&window.removeEventListener("scroll",A,{passive:!0}),A=()=>G(),window.addEventListener("scroll",A,{passive:!0}),G()},V=()=>{if(!f.value)return;const X=f.value.getBoundingClientRect(),L=window.innerHeight,ue=X.height-L;if(o.value=X.top<L&&X.bottom>0,ue>0){const ke=Math.min(Math.max(-X.top,0),ue);s.value=ke/ue*100}else s.value=o.value?100:0},z=()=>{x&&window.removeEventListener("scroll",x,{passive:!0}),x=()=>V(),window.addEventListener("scroll",x,{passive:!0}),V()},k=()=>{if(j(),!h.value||!g.value||!u.value)return;const X=g.value,L=u.value,ue=X.scrollWidth-window.innerWidth;ue<=0||(M=_t.to(X,{x:-ue,ease:"none",scrollTrigger:{trigger:L,start:"top top",end:()=>`+=${ue}`,pin:!0,pinSpacing:!0,scrub:!0,anticipatePin:1,invalidateOnRefresh:!0,preventOverlaps:!0,fastScrollEnd:!0}}))},j=()=>{var X;M&&((X=M.scrollTrigger)==null||X.kill(),M.kill(),M=null)};return Wn(()=>{b=window.matchMedia("(max-width: 768px)"),i.value=b.matches,i.value&&(t.value="grid"),b.addEventListener("change",I),m.push(...Ar(a.value,{x:-120,start:"top 90%",end:"top 40%"})),m.push(...Ar(l.value,{x:-120,start:"top 90%",end:"top 40%"})),m.push(...Ar(c.value,{x:-100,start:"top 90%",end:"top 30%"})),m.push(...dc(u.value,{y:60,duration:1.2,start:"top 80%",blur:14})),$(),z()}),ii(()=>{m.forEach(X=>X.kill()),j(),b&&b.removeEventListener("change",I),A&&window.removeEventListener("scroll",A,{passive:!0}),x&&window.removeEventListener("scroll",x,{passive:!0})}),(X,L)=>(he(),pe("section",{ref_key:"sectionRef",ref:f,id:"projects",class:at(["pt-20 pb-0 bg-dark-800 light:bg-white relative",t.value==="horizontal"?"overflow-visible":"overflow-hidden"])},[L[7]||(L[7]=v("div",{class:"absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"},null,-1)),o.value?(he(),pe("div",{key:0,class:at(["fixed top-16 left-0 right-0 z-40 transition-opacity duration-300",s.value>=100?"opacity-0 pointer-events-none":"opacity-100"])},[v("div",EL,[v("div",{class:"h-full bg-gradient-to-r from-primary-500 to-accent-500 light:from-primary-600 light:to-accent-600 transition-all duration-150 ease-out",style:Tn({width:s.value+"%"})},null,4)])],2)):ai("",!0),v("div",TL,[v("h2",{ref_key:"titleRef",ref:a,class:"section-title"},"Featured Projects",512),v("p",{ref_key:"subtitleRef",ref:l,class:"section-subtitle"},"A selection of projects I've built",512),v("div",{ref_key:"filterRef",ref:c,class:"flex flex-wrap items-center gap-3 mb-10"},[v("div",AL,[(he(!0),pe(Ke,null,it(R.value,oe=>(he(),pe("button",{key:oe,onClick:ue=>y(oe),class:at(["px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105",e.value===oe?"bg-primary-600 text-white shadow-lg shadow-primary-500/25":"bg-secondary-800 text-secondary-400 hover:text-white border border-secondary-700 light:bg-white light:text-secondary-500 light:hover:text-secondary-900 light:border-secondary-200"])},be(oe),11,CL))),128))]),i.value?ai("",!0):(he(),pe("div",RL,[v("button",{onClick:L[0]||(L[0]=oe=>F("grid")),class:at(["px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300",t.value==="grid"?"bg-primary-600 text-white shadow-md shadow-primary-500/25":"text-secondary-400 hover:text-white light:text-secondary-500 light:hover:text-secondary-900"]),"aria-label":"Grid view"},[...L[3]||(L[3]=[v("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})],-1)])],2),v("button",{onClick:L[1]||(L[1]=oe=>F("carousel")),class:at(["px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300",t.value==="carousel"?"bg-primary-600 text-white shadow-md shadow-primary-500/25":"text-secondary-400 hover:text-white light:text-secondary-500 light:hover:text-secondary-900"]),"aria-label":"Carousel view"},[...L[4]||(L[4]=[v("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)])],2),v("button",{onClick:L[2]||(L[2]=oe=>F("horizontal")),class:at(["px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300",t.value==="horizontal"?"bg-primary-600 text-white shadow-md shadow-primary-500/25":"text-secondary-400 hover:text-white light:text-secondary-500 light:hover:text-secondary-900"]),"aria-label":"Horizontal scroll view"},[...L[5]||(L[5]=[v("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"})],-1)])],2)]))],512)]),v("div",{ref_key:"wheelContainerRef",ref:u,class:"w-full"},[t.value==="grid"?(he(),pe("div",{key:0,ref_key:"gridContainerRef",ref:d,class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"},[v("div",PL,[(he(!0),pe(Ke,null,it(C.value,oe=>(he(),yl(yg,{key:oe.id,project:oe,onOpen:T},null,8,["project"]))),128))]),L[6]||(L[6]=v("div",{class:"mt-10 flex justify-center"},[v("div",{class:"w-64 sm:w-80"})],-1))],512)):t.value==="carousel"?(he(),yl(iL,{key:1,projects:C.value,onOpen:T},null,8,["projects"])):t.value==="horizontal"?(he(),pe("div",{key:2,ref_key:"horizontalContainerRef",ref:h,class:"relative h-screen overflow-hidden"},[v("div",{ref_key:"horizontalTrackRef",ref:g,class:"flex items-center gap-8 px-8 sm:px-12 lg:px-16 h-full w-max"},[(he(!0),pe(Ke,null,it(C.value,oe=>(he(),pe("div",{key:oe.id,class:"w-[320px] sm:w-[380px] lg:w-[420px] shrink-0"},[Pt(yg,{project:oe,onOpen:T},null,8,["project"])]))),128))],512)],512)):ai("",!0)],512),_.value?(he(),yl(wL,{key:1,project:_.value,"origin-rect":p.value,onClose:N},null,8,["project","origin-rect"])):ai("",!0)],2))}},LL={id:"contact",class:"py-20 bg-dark-800 light:bg-white relative overflow-hidden"},IL={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},UL={class:"text-center mb-16"},FL={class:"text-center"},NL={class:"flex items-center justify-center gap-4"},OL=["href","aria-label"],kL={class:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24"},BL=["d"],zL={__name:"ContactSection",setup(n){const e=Oe(null),t=Oe(null),i=Oe(null);let r=[];const s=[{name:"GitHub",href:"https://github.com/pixel-user-512",icon:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"},{name:"LinkedIn",href:"https://linkedin.com/in/kenneth-paul-cortez",icon:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"}];return Wn(()=>{r.push(...Ar(t.value,{x:-120,start:"top 90%",end:"top 40%"})),r.push(...Ar(i.value,{x:-120,start:"top 90%",end:"top 40%"})),r.push(...dc(e.value,{y:60,duration:1.2,stagger:.15,start:"top 80%",blur:14}))}),ii(()=>{r.forEach(o=>o.kill())}),(o,a)=>(he(),pe("section",LL,[a[2]||(a[2]=v("div",{class:"absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"},null,-1)),v("div",IL,[v("div",UL,[v("h2",{ref_key:"titleRef",ref:t,class:"section-title"},"Get In Touch",512),v("p",{ref_key:"subtitleRef",ref:i,class:"section-subtitle"},"Have a project in mind? Let's work together!",512)]),v("div",{ref_key:"infoRef",ref:e,class:"max-w-3xl mx-auto"},[a[1]||(a[1]=co('<div class="text-center mb-12"><p class="text-secondary-400 light:text-secondary-500 text-lg leading-relaxed"> I&#39;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out! </p></div><div class="grid sm:grid-cols-2 gap-4 mb-12"><a href="mailto:kenneth.cortez.512@gmail.com" class="group flex items-center gap-4 bg-secondary-800/50 border border-secondary-700 rounded-2xl p-5 hover:border-primary-500/50 hover:bg-secondary-800/80 transition-all duration-300 light:bg-white light:border-secondary-200 light:hover:border-primary-500/50"><span class="w-12 h-12 flex items-center justify-center bg-secondary-800 border border-secondary-700 rounded-xl group-hover:border-primary-500/50 group-hover:scale-110 transition-all duration-300 light:bg-secondary-50 light:border-secondary-200 shrink-0"><svg class="w-6 h-6 text-primary-400 light:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></span><span class="min-w-0"><span class="block text-xs text-secondary-500 light:text-secondary-400 uppercase tracking-wider mb-1">Email</span><span class="block text-secondary-200 light:text-secondary-700 font-medium truncate">kenneth.cortez.512@gmail.com</span></span></a><a href="tel:+639664002142" class="group flex items-center gap-4 bg-secondary-800/50 border border-secondary-700 rounded-2xl p-5 hover:border-primary-500/50 hover:bg-secondary-800/80 transition-all duration-300 light:bg-white light:border-secondary-200 light:hover:border-primary-500/50"><span class="w-12 h-12 flex items-center justify-center bg-secondary-800 border border-secondary-700 rounded-xl group-hover:border-primary-500/50 group-hover:scale-110 transition-all duration-300 light:bg-secondary-50 light:border-secondary-200 shrink-0"><svg class="w-6 h-6 text-primary-400 light:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></span><span class="min-w-0"><span class="block text-xs text-secondary-500 light:text-secondary-400 uppercase tracking-wider mb-1">Phone</span><span class="block text-secondary-200 light:text-secondary-700 font-medium">+63 (966) 400-2142</span></span></a></div>',2)),v("div",FL,[a[0]||(a[0]=v("h4",{class:"text-white light:text-secondary-900 text-sm font-semibold uppercase tracking-wider mb-5"},"Follow Me",-1)),v("div",NL,[(he(),pe(Ke,null,it(s,l=>v("a",{key:l.name,href:l.href,target:"_blank",rel:"noopener noreferrer",class:"w-12 h-12 flex items-center justify-center bg-secondary-800 border border-secondary-700 rounded-xl text-secondary-400 hover:text-primary-400 hover:border-primary-500/50 hover:scale-110 transition-all duration-300 light:bg-white light:border-secondary-200 light:text-secondary-500 light:hover:text-primary-600","aria-label":l.name},[(he(),pe("svg",kL,[v("path",{d:l.icon},null,8,BL)]))],8,OL)),64))])])],512)])]))}},VL={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},HL={class:"flex flex-col md:flex-row items-center justify-between gap-4"},GL={class:"text-secondary-400 light:text-secondary-500 text-sm"},WL={class:"flex items-center gap-6"},XL={__name:"Footer",setup(n){const e=new Date().getFullYear(),t=Oe(null);let i=[];const r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return Wn(()=>{i=dc(t.value,{y:30,duration:1,start:"top bottom",blur:8})}),ii(()=>{i.forEach(s=>s.kill())}),(s,o)=>(he(),pe("footer",{ref_key:"footerRef",ref:t,class:"bg-dark-800 border-t border-dark-700 light:bg-white light:border-secondary-200 py-8"},[v("div",VL,[v("div",HL,[v("div",GL," © "+be(xt(e))+" Kenneth Paul Cortez ",1),v("div",WL,[v("a",{href:"#home",onClick:mo(r,["prevent"]),class:"text-secondary-400 hover:text-primary-400 light:text-secondary-500 light:hover:text-primary-600 transition-colors duration-200 text-sm"}," Home "),o[0]||(o[0]=v("a",{href:"#about",class:"text-secondary-400 hover:text-primary-400 light:text-secondary-500 light:hover:text-primary-600 transition-colors duration-200 text-sm"}," About ",-1)),o[1]||(o[1]=v("a",{href:"#projects",class:"text-secondary-400 hover:text-primary-400 light:text-secondary-500 light:hover:text-primary-600 transition-colors duration-200 text-sm"}," Projects ",-1)),o[2]||(o[2]=v("a",{href:"#contact",class:"text-secondary-400 hover:text-primary-400 light:text-secondary-500 light:hover:text-primary-600 transition-colors duration-200 text-sm"}," Contact ",-1))]),o[3]||(o[3]=v("div",{class:"text-secondary-500 light:text-secondary-400 text-sm"},[Ns(" Built with "),v("span",{class:"text-primary-500"},"Vue 3"),Ns(" & "),v("span",{class:"text-primary-500"},"Tailwind CSS")],-1))])])],512))}},$L={__name:"BackToTop",setup(n){const e=Oe(!1),t=()=>{e.value=window.scrollY>400},i=()=>{window.scrollTo({top:0,behavior:"smooth"})};return Wn(()=>{window.addEventListener("scroll",t)}),ii(()=>{window.removeEventListener("scroll",t)}),(r,s)=>(he(),yl(zf,{"enter-active-class":"transition-all duration-300 ease-out","enter-from-class":"opacity-0 translate-y-4","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition-all duration-300 ease-in","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 translate-y-4"},{default:wu(()=>[e.value?(he(),pe("button",{key:0,onClick:i,class:"fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg shadow-primary-500/25 hover:scale-110 transition-all duration-300","aria-label":"Back to top"},[...s[0]||(s[0]=[v("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 15l7-7 7 7"})],-1)])])):ai("",!0)]),_:1}))}},jL={__name:"MouseTrail",setup(n){const{isMouseTrailEnabled:e}=Px();let t=null;const i=()=>{t||(t=d3({size:45,trailLength:400,trailWidth:16}))},r=()=>{t&&(t(),t=null)};return Wn(()=>{e.value&&i()}),ii(()=>{r()}),Wi(e,s=>{s?i():r()}),(s,o)=>null}},YL={class:"min-h-screen bg-dark-900 light:bg-secondary-50"},qL={__name:"App",setup(n){return(e,t)=>(he(),pe("div",YL,[Pt(EM),v("main",null,[Pt(a3),Pt(v3),Pt(C3),Pt(DL),Pt(zL)]),Pt(XL),Pt($L),Pt(jL)]))}};_b(qL).mount("#app");
