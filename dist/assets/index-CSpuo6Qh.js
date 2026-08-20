(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function sp(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Vt={},la=[],Sr=()=>{},Sg=()=>!1,Yu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),qu=n=>n.startsWith("onUpdate:"),Sn=Object.assign,op=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Hv=Object.prototype.hasOwnProperty,Pt=(n,e)=>Hv.call(n,e),et=Array.isArray,ca=n=>tc(n)==="[object Map]",Ku=n=>tc(n)==="[object Set]",s0=n=>tc(n)==="[object Date]",lt=n=>typeof n=="function",Kt=n=>typeof n=="string",Ar=n=>typeof n=="symbol",Dt=n=>n!==null&&typeof n=="object",Mg=n=>(Dt(n)||lt(n))&&lt(n.then)&&lt(n.catch),wg=Object.prototype.toString,tc=n=>wg.call(n),Gv=n=>tc(n).slice(8,-1),Eg=n=>tc(n)==="[object Object]",ap=n=>Kt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,hl=sp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zu=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Wv=/-\w/g,tr=Zu(n=>n.replace(Wv,e=>e.slice(1).toUpperCase())),Xv=/\B([A-Z])/g,Vs=Zu(n=>n.replace(Xv,"-$1").toLowerCase()),Tg=Zu(n=>n.charAt(0).toUpperCase()+n.slice(1)),vd=Zu(n=>n?`on${Tg(n)}`:""),mr=(n,e)=>!Object.is(n,e),tu=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ag=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Ju=n=>{const e=parseFloat(n);return isNaN(e)?n:e},$v=n=>{const e=Kt(n)?Number(n):NaN;return isNaN(e)?n:e};let o0;const Qu=()=>o0||(o0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Tn(n){if(et(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Kt(i)?Kv(i):Tn(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Kt(n)||Dt(n))return n}const jv=/;(?![^(]*\))/g,Yv=/:([^]+)/,qv=/\/\*[^]*?\*\//g;function Kv(n){const e={};return n.replace(qv,"").split(jv).forEach(t=>{if(t){const i=t.split(Yv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function at(n){let e="";if(Kt(n))e=n;else if(et(n))for(let t=0;t<n.length;t++){const i=at(n[t]);i&&(e+=i+" ")}else if(Dt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Zv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jv=sp(Zv);function Cg(n){return!!n||n===""}function Qv(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=nc(n[i],e[i]);return t}function nc(n,e){if(n===e)return!0;let t=s0(n),i=s0(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Ar(n),i=Ar(e),t||i)return n===e;if(t=et(n),i=et(e),t||i)return t&&i?Qv(n,e):!1;if(t=Dt(n),i=Dt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!nc(n[o],e[o]))return!1}}return String(n)===String(e)}function ey(n,e){return n.findIndex(t=>nc(t,e))}const Rg=n=>!!(n&&n.__v_isRef===!0),Se=n=>Kt(n)?n:n==null?"":et(n)||Dt(n)&&(n.toString===wg||!lt(n.toString))?Rg(n)?Se(n.value):JSON.stringify(n,Pg,2):String(n),Pg=(n,e)=>Rg(e)?Pg(n,e.value):ca(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[yd(i,s)+" =>"]=r,t),{})}:Ku(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>yd(t))}:Ar(e)?yd(e):Dt(e)&&!et(e)&&!Eg(e)?String(e):e,yd=(n,e="")=>{var t;return Ar(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let En;class ty{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&En&&(En.active?(this.parent=En,this.index=(En.scopes||(En.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=En;try{return En=this,e()}finally{En=t}}}on(){++this._on===1&&(this.prevScope=En,En=this)}off(){if(this._on>0&&--this._on===0){if(En===this)En=this.prevScope;else{let e=En;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ny(){return En}let Gt;const bd=new WeakSet;class Dg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,En&&(En.active?En.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,bd.has(this)&&(bd.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ig(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,a0(this),Ug(this);const e=Gt,t=nr;Gt=this,nr=!0;try{return this.fn()}finally{Fg(this),Gt=e,nr=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)up(e);this.deps=this.depsTail=void 0,a0(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?bd.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Pf(this)&&this.run()}get dirty(){return Pf(this)}}let Lg=0,pl,ml;function Ig(n,e=!1){if(n.flags|=8,e){n.next=ml,ml=n;return}n.next=pl,pl=n}function lp(){Lg++}function cp(){if(--Lg>0)return;if(ml){let e=ml;for(ml=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;pl;){let e=pl;for(pl=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Ug(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Fg(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),up(i),iy(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Pf(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ng(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Ng(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ll)||(n.globalVersion=Ll,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Pf(n))))return;n.flags|=2;const e=n.dep,t=Gt,i=nr;Gt=n,nr=!0;try{Ug(n);const r=n.fn(n._value);(e.version===0||mr(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Gt=t,nr=i,Fg(n),n.flags&=-3}}function up(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)up(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function iy(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let nr=!0;const Og=[];function ts(){Og.push(nr),nr=!1}function ns(){const n=Og.pop();nr=n===void 0?!0:n}function a0(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Gt;Gt=void 0;try{e()}finally{Gt=t}}}let Ll=0;class ry{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class dp{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Gt||!nr||Gt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Gt)t=this.activeLink=new ry(Gt,this),Gt.deps?(t.prevDep=Gt.depsTail,Gt.depsTail.nextDep=t,Gt.depsTail=t):Gt.deps=Gt.depsTail=t,kg(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Gt.depsTail,t.nextDep=void 0,Gt.depsTail.nextDep=t,Gt.depsTail=t,Gt.deps===t&&(Gt.deps=i)}return t}trigger(e){this.version++,Ll++,this.notify(e)}notify(e){lp();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{cp()}}}function kg(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)kg(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Df=new WeakMap,vo=Symbol(""),Lf=Symbol(""),Il=Symbol("");function kn(n,e,t){if(nr&&Gt){let i=Df.get(n);i||Df.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new dp),r.map=i,r.key=t),r.track()}}function Gr(n,e,t,i,r,s){const o=Df.get(n);if(!o){Ll++;return}const a=l=>{l&&l.trigger()};if(lp(),e==="clear")o.forEach(a);else{const l=et(n),c=l&&ap(t);if(l&&t==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===Il||!Ar(f)&&f>=u)&&a(d)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Il)),e){case"add":l?c&&a(o.get("length")):(a(o.get(vo)),ca(n)&&a(o.get(Lf)));break;case"delete":l||(a(o.get(vo)),ca(n)&&a(o.get(Lf)));break;case"set":ca(n)&&a(o.get(vo));break}}cp()}function Oo(n){const e=Tt(n);return e===n?e:(kn(e,"iterate",Il),Wi(n)?e:e.map(ir))}function ed(n){return kn(n=Tt(n),"iterate",Il),n}function fr(n,e){return is(n)?Ea(yo(n)?ir(e):e):ir(e)}const sy={__proto__:null,[Symbol.iterator](){return Sd(this,Symbol.iterator,n=>fr(this,n))},concat(...n){return Oo(this).concat(...n.map(e=>et(e)?Oo(e):e))},entries(){return Sd(this,"entries",n=>(n[1]=fr(this,n[1]),n))},every(n,e){return Lr(this,"every",n,e,void 0,arguments)},filter(n,e){return Lr(this,"filter",n,e,t=>t.map(i=>fr(this,i)),arguments)},find(n,e){return Lr(this,"find",n,e,t=>fr(this,t),arguments)},findIndex(n,e){return Lr(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Lr(this,"findLast",n,e,t=>fr(this,t),arguments)},findLastIndex(n,e){return Lr(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Lr(this,"forEach",n,e,void 0,arguments)},includes(...n){return Md(this,"includes",n)},indexOf(...n){return Md(this,"indexOf",n)},join(n){return Oo(this).join(n)},lastIndexOf(...n){return Md(this,"lastIndexOf",n)},map(n,e){return Lr(this,"map",n,e,void 0,arguments)},pop(){return Va(this,"pop")},push(...n){return Va(this,"push",n)},reduce(n,...e){return l0(this,"reduce",n,e)},reduceRight(n,...e){return l0(this,"reduceRight",n,e)},shift(){return Va(this,"shift")},some(n,e){return Lr(this,"some",n,e,void 0,arguments)},splice(...n){return Va(this,"splice",n)},toReversed(){return Oo(this).toReversed()},toSorted(n){return Oo(this).toSorted(n)},toSpliced(...n){return Oo(this).toSpliced(...n)},unshift(...n){return Va(this,"unshift",n)},values(){return Sd(this,"values",n=>fr(this,n))}};function Sd(n,e,t){const i=ed(n),r=i[e]();return i!==n&&!Wi(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const oy=Array.prototype;function Lr(n,e,t,i,r,s){const o=ed(n),a=o!==n&&!Wi(n),l=o[e];if(l!==oy[e]){const d=l.apply(n,s);return a?ir(d):d}let c=t;o!==n&&(a?c=function(d,f){return t.call(this,fr(n,d),f,n)}:t.length>2&&(c=function(d,f){return t.call(this,d,f,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function l0(n,e,t,i){const r=ed(n),s=r!==n&&!Wi(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=fr(n,c)),t.call(this,c,fr(n,u),d,n)}):t.length>3&&(o=function(c,u,d){return t.call(this,c,u,d,n)}));const l=r[e](o,...i);return a?fr(n,l):l}function Md(n,e,t){const i=Tt(n);kn(i,"iterate",Il);const r=i[e](...t);return(r===-1||r===!1)&&pp(t[0])?(t[0]=Tt(t[0]),i[e](...t)):r}function Va(n,e,t=[]){ts(),lp();const i=Tt(n)[e].apply(n,t);return cp(),ns(),i}const ay=sp("__proto__,__v_isRef,__isVue"),Bg=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ar));function ly(n){Ar(n)||(n=String(n));const e=Tt(this);return kn(e,"has",n),e.hasOwnProperty(n)}class zg{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?xy:Wg:s?Gg:Hg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=et(e);if(!r){let l;if(o&&(l=sy[t]))return l;if(t==="hasOwnProperty")return ly}const a=Reflect.get(e,t,Wn(e)?e:i);if((Ar(t)?Bg.has(t):ay(t))||(r||kn(e,"get",t),s))return a;if(Wn(a)){const l=o&&ap(t)?a:a.value;return r&&Dt(l)?Uf(l):l}return Dt(a)?r?Uf(a):ua(a):a}}class Vg extends zg{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=et(e)&&ap(t);if(!this._isShallow){const c=is(s);if(!Wi(i)&&!is(i)&&(s=Tt(s),i=Tt(i)),!o&&Wn(s)&&!Wn(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:Pt(e,t),l=Reflect.set(e,t,i,Wn(e)?e:r);return e===Tt(r)&&l&&(a?mr(i,s)&&Gr(e,"set",t,i):Gr(e,"add",t,i)),l}deleteProperty(e,t){const i=Pt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Gr(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Ar(t)||!Bg.has(t))&&kn(e,"has",t),i}ownKeys(e){return kn(e,"iterate",et(e)?"length":vo),Reflect.ownKeys(e)}}class cy extends zg{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const uy=new Vg,dy=new cy,fy=new Vg(!0);const If=n=>n,dc=n=>Reflect.getPrototypeOf(n);function hy(n,e,t){return function(...i){const r=this.__v_raw,s=Tt(r),o=ca(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?If:e?Ea:ir;return!e&&kn(s,"iterate",l?Lf:vo),Sn(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function fc(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function py(n,e){const t={get(r){const s=this.__v_raw,o=Tt(s),a=Tt(r);n||(mr(r,a)&&kn(o,"get",r),kn(o,"get",a));const{has:l}=dc(o),c=e?If:n?Ea:ir;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&kn(Tt(r),"iterate",vo),r.size},has(r){const s=this.__v_raw,o=Tt(s),a=Tt(r);return n||(mr(r,a)&&kn(o,"has",r),kn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Tt(a),c=e?If:n?Ea:ir;return!n&&kn(l,"iterate",vo),a.forEach((u,d)=>r.call(s,c(u),c(d),o))}};return Sn(t,n?{add:fc("add"),set:fc("set"),delete:fc("delete"),clear:fc("clear")}:{add(r){const s=Tt(this),o=dc(s),a=Tt(r),l=!e&&!Wi(r)&&!is(r)?a:r;return o.has.call(s,l)||mr(r,l)&&o.has.call(s,r)||mr(a,l)&&o.has.call(s,a)||(s.add(l),Gr(s,"add",l,l)),this},set(r,s){!e&&!Wi(s)&&!is(s)&&(s=Tt(s));const o=Tt(this),{has:a,get:l}=dc(o);let c=a.call(o,r);c||(r=Tt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?mr(s,u)&&Gr(o,"set",r,s):Gr(o,"add",r,s),this},delete(r){const s=Tt(this),{has:o,get:a}=dc(s);let l=o.call(s,r);l||(r=Tt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Gr(s,"delete",r,void 0),c},clear(){const r=Tt(this),s=r.size!==0,o=r.clear();return s&&Gr(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=hy(r,n,e)}),t}function fp(n,e){const t=py(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Pt(t,r)&&r in i?t:i,r,s)}const my={get:fp(!1,!1)},gy={get:fp(!1,!0)},_y={get:fp(!0,!1)};const Hg=new WeakMap,Gg=new WeakMap,Wg=new WeakMap,xy=new WeakMap;function vy(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ua(n){return is(n)?n:hp(n,!1,uy,my,Hg)}function yy(n){return hp(n,!1,fy,gy,Gg)}function Uf(n){return hp(n,!0,dy,_y,Wg)}function hp(n,e,t,i,r){if(!Dt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const o=vy(Gv(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function yo(n){return is(n)?yo(n.__v_raw):!!(n&&n.__v_isReactive)}function is(n){return!!(n&&n.__v_isReadonly)}function Wi(n){return!!(n&&n.__v_isShallow)}function pp(n){return n?!!n.__v_raw:!1}function Tt(n){const e=n&&n.__v_raw;return e?Tt(e):n}function by(n){return!Pt(n,"__v_skip")&&Object.isExtensible(n)&&Ag(n,"__v_skip",!0),n}const ir=n=>Dt(n)?ua(n):n,Ea=n=>Dt(n)?Uf(n):n;function Wn(n){return n?n.__v_isRef===!0:!1}function Ne(n){return Sy(n,!1)}function Sy(n,e){return Wn(n)?n:new My(n,e)}class My{constructor(e,t){this.dep=new dp,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Tt(e),this._value=t?e:ir(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Wi(e)||is(e);e=i?e:Tt(e),mr(e,t)&&(this._rawValue=e,this._value=i?e:ir(e),this.dep.trigger())}}function xt(n){return Wn(n)?n.value:n}const wy={get:(n,e,t)=>e==="__v_raw"?n:xt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Wn(r)&&!Wn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Xg(n){return yo(n)?n:new Proxy(n,wy)}class Ey{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new dp(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ll-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Gt!==this)return Ig(this,!0),!0}get value(){const e=this.dep.track();return Ng(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ty(n,e,t=!1){let i,r;return lt(n)?i=n:(i=n.get,r=n.set),new Ey(i,r,t)}const hc={},yu=new WeakMap;let no;function Ay(n,e=!1,t=no){if(t){let i=yu.get(t);i||yu.set(t,i=[]),i.push(n)}}function Cy(n,e,t=Vt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=x=>r?x:Wi(x)||r===!1||r===0?Wr(x,1):Wr(x);let u,d,f,h,g=!1,_=!1;if(Wn(n)?(d=()=>n.value,g=Wi(n)):yo(n)?(d=()=>c(n),g=!0):et(n)?(_=!0,g=n.some(x=>yo(x)||Wi(x)),d=()=>n.map(x=>{if(Wn(x))return x.value;if(yo(x))return c(x);if(lt(x))return l?l(x,2):x()})):lt(n)?e?d=l?()=>l(n,2):n:d=()=>{if(f){ts();try{f()}finally{ns()}}const x=no;no=u;try{return l?l(n,3,[h]):n(h)}finally{no=x}}:d=Sr,e&&r){const x=d,R=r===!0?1/0:r;d=()=>Wr(x(),R)}const p=ny(),m=()=>{u.stop(),p&&p.active&&op(p.effects,u)};if(s&&e){const x=e;e=(...R)=>{const A=x(...R);return m(),A}}let y=_?new Array(n.length).fill(hc):hc;const E=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const R=u.run();if(x||r||g||(_?R.some((A,C)=>mr(A,y[C])):mr(R,y))){f&&f();const A=no;no=u;try{const C=[R,y===hc?void 0:_&&y[0]===hc?[]:y,h];y=R,l?l(e,3,C):e(...C)}finally{no=A}}}else u.run()};return a&&a(E),u=new Dg(d),u.scheduler=o?()=>o(E,!1):E,h=x=>Ay(x,!1,u),f=u.onStop=()=>{const x=yu.get(u);if(x){if(l)l(x,4);else for(const R of x)R();yu.delete(u)}},e?i?E(!0):y=u.run():o?o(E.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function Wr(n,e=1/0,t){if(e<=0||!Dt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Wn(n))Wr(n.value,e,t);else if(et(n))for(let i=0;i<n.length;i++)Wr(n[i],e,t);else if(Ku(n)||ca(n))n.forEach(i=>{Wr(i,e,t)});else if(Eg(n)){for(const i in n)Wr(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Wr(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ic(n,e,t,i){try{return i?n(...i):n()}catch(r){td(r,e,t)}}function $i(n,e,t,i){if(lt(n)){const r=ic(n,e,t,i);return r&&Mg(r)&&r.catch(s=>{td(s,e,t)}),r}if(et(n)){const r=[];for(let s=0;s<n.length;s++)r.push($i(n[s],e,t,i));return r}}function td(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Vt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(s){ts(),ic(s,null,10,[n,l,c]),ns();return}}Ry(n,t,r,i,o)}function Ry(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const ei=[];let cr=-1;const da=[];let Ss=null,na=0;const $g=Promise.resolve();let bu=null;function rs(n){const e=bu||$g;return n?e.then(this?n.bind(this):n):e}function Py(n){let e=cr+1,t=ei.length;for(;e<t;){const i=e+t>>>1,r=ei[i],s=Ul(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function mp(n){if(!(n.flags&1)){const e=Ul(n),t=ei[ei.length-1];!t||!(n.flags&2)&&e>=Ul(t)?ei.push(n):ei.splice(Py(e),0,n),n.flags|=1,jg()}}function jg(){bu||(bu=$g.then(qg))}function Dy(n){if(!et(n))Ss&&n.id===-1?Ss.splice(na+1,0,n):n.flags&1||(da.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)da.push(n[e]);jg()}function c0(n,e,t=cr+1){for(;t<ei.length;t++){const i=ei[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;ei.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Yg(n){if(da.length){const e=[...new Set(da)].sort((t,i)=>Ul(t)-Ul(i));if(da.length=0,Ss){for(let t=0;t<e.length;t++)Ss.push(e[t]);return}for(Ss=e,na=0;na<Ss.length;na++){const t=Ss[na];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ss=null,na=0}}const Ul=n=>n.id==null?n.flags&2?-1:1/0:n.id;function qg(n){try{for(cr=0;cr<ei.length;cr++){const e=ei[cr];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ic(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;cr<ei.length;cr++){const e=ei[cr];e&&(e.flags&=-2)}cr=-1,ei.length=0,Yg(),bu=null,(ei.length||da.length)&&qg()}}let Vi=null,Kg=null;function Su(n){const e=Vi;return Vi=n,Kg=n&&n.type.__scopeId||null,e}function Mu(n,e=Vi,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Au(-1);const s=Su(e),o=bo.length;let a;try{a=n(...r)}finally{for(let l=bo.length;l>o;l--)w_();Su(s),i._d&&Au(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function pc(n,e){if(Vi===null)return n;const t=ad(Vi),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=Vt]=e[r];s&&(lt(s)&&(s={mounted:s,updated:s}),s.deep&&Wr(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ws(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ts(),$i(l,t,8,[n.el,a,n,e]),ns())}}function Ly(n,e){if(ni){let t=ni.provides;const i=ni.parent&&ni.parent.provides;i===t&&(t=ni.provides=Object.create(i)),t[n]=e}}function nu(n,e,t=!1){const i=A_();if(i||fa){let r=fa?fa._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&lt(e)?e.call(i&&i.proxy):e}}const Iy=Symbol.for("v-scx"),Uy=()=>nu(Iy);function Ai(n,e,t){return Zg(n,e,t)}function Zg(n,e,t=Vt){const{immediate:i,deep:r,flush:s,once:o}=t,a=Sn({},t),l=e&&i||!e&&s!=="post";let c;if(kl){if(s==="sync"){const h=Uy();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Sr,h.resume=Sr,h.pause=Sr,h}}const u=ni;a.call=(h,g,_)=>$i(h,u,g,_);let d=!1;s==="post"?a.scheduler=h=>{oi(h,u&&u.suspense)}:s!=="sync"&&(d=!0,a.scheduler=(h,g)=>{g?h():mp(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=Cy(n,e,a);return kl&&(c?c.push(f):l&&f()),f}function Fy(n,e,t){const i=this.proxy,r=Kt(n)?n.includes(".")?Jg(i,n):()=>i[n]:n.bind(i,i);let s;lt(e)?s=e:(s=e.handler,t=e);const o=rc(this),a=Zg(r,s.bind(i),t);return o(),a}function Jg(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Ny=Symbol("_vte"),nd=n=>n.__isTeleport,Ni=Symbol("_leaveCb"),Ha=Symbol("_enterCb");function Oy(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Pn(()=>{n.isMounted=!0}),o_(()=>{n.isUnmounting=!0}),n}const Ii=[Function,Array],Qg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ii,onEnter:Ii,onAfterEnter:Ii,onEnterCancelled:Ii,onBeforeLeave:Ii,onLeave:Ii,onAfterLeave:Ii,onLeaveCancelled:Ii,onBeforeAppear:Ii,onAppear:Ii,onAfterAppear:Ii,onAppearCancelled:Ii},e_=n=>{const e=n.subTree;return e.component?e_(e.component):e},ky={name:"BaseTransition",props:Qg,setup(n,{slots:e}){const t=A_(),i=Oy();return()=>{const r=e.default&&i_(e.default(),!0),s=r&&r.length?t_(r):t.subTree?Bn():void 0;if(!s)return;const o=Tt(n),{mode:a}=o;if(i.isLeaving)return wd(s);const l=wu(s);if(!l)return wd(s);let c=Ff(l,o,i,t,d=>c=d);l.type!==ti&&Fl(l,c);let u=t.subTree&&wu(t.subTree);if(u&&u.type!==ti&&!ao(u,l)&&e_(t).type!==ti){let d=Ff(u,o,i,t);if(Fl(u,d),a==="out-in"&&l.type!==ti)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,u=void 0},wd(s);a==="in-out"&&l.type!==ti?d.delayLeave=(f,h,g)=>{const _=n_(i,u);_[String(u.key)]=u,f[Ni]=()=>{h(),f[Ni]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function t_(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==ti){e=t;break}}return e}const By=ky;function n_(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Ff(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:p,onAppear:m,onAfterAppear:y,onAppearCancelled:E}=e,x=String(n.key),R=n_(t,n),A=(T,N)=>{T&&$i(T,i,9,N)},C=(T,N)=>{const U=N[1];A(T,N),et(T)?T.every(L=>L.length<=1)&&U():T.length<=1&&U()},v={mode:o,persisted:a,beforeEnter(T){let N=l;if(!t.isMounted)if(s)N=p||l;else return;T[Ni]&&T[Ni](!0);const U=R[x];U&&ao(n,U)&&U.el[Ni]&&U.el[Ni](),A(N,[T])},enter(T){if(R[x]===n)return;let N=c,U=u,L=d;if(!t.isMounted)if(s)N=m||c,U=y||u,L=E||d;else return;let H=!1;T[Ha]=G=>{H||(H=!0,G?A(L,[T]):A(U,[T]),v.delayedLeave&&v.delayedLeave(),T[Ha]=void 0)};const z=T[Ha].bind(null,!1);N?C(N,[T,z]):z()},leave(T,N){const U=String(n.key);if(T[Ha]&&T[Ha](!0),t.isUnmounting)return N();A(f,[T]);let L=!1;T[Ni]=z=>{L||(L=!0,N(),z?A(_,[T]):A(g,[T]),T[Ni]=void 0,R[U]===n&&delete R[U])};const H=T[Ni].bind(null,!1);R[U]=n,h?C(h,[T,H]):H()},clone(T){const N=Ff(T,e,t,i,r);return r&&r(N),N}};return v}function wd(n){if(id(n))return n=Us(n),n.children=null,n}function wu(n){if(!id(n))return nd(n.type)&&n.children?t_(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&lt(t.default))return t.default()}}function Fl(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Fl(nd(t.type)&&wu(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function i_(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Ke?(o.patchFlag&128&&r++,i=i.concat(i_(o.children,e,a))):(e||o.type!==ti)&&i.push(a!=null?Us(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function r_(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function u0(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Eu=new WeakMap;function gl(n,e,t,i,r=!1){if(et(n)){n.forEach((_,p)=>gl(_,e&&(et(e)?e[p]:e),t,i,r));return}if(_l(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&gl(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?ad(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Vt?a.refs={}:a.refs,d=a.setupState,f=Tt(d),h=d===Vt?Sg:_=>u0(u,_)?!1:Pt(f,_),g=(_,p)=>!(p&&u0(u,p));if(c!=null&&c!==l){if(d0(e),Kt(c))u[c]=null,h(c)&&(d[c]=null);else if(Wn(c)){const _=e;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(lt(l))ic(l,a,12,[o,u]);else{const _=Kt(l),p=Wn(l);if(_||p){const m=()=>{if(n.f){const y=_?h(l)?d[l]:u[l]:g()||!n.k?l.value:u[n.k];if(r)et(y)&&op(y,s);else if(et(y))y.includes(s)||y.push(s);else if(_)u[l]=[s],h(l)&&(d[l]=u[l]);else{const E=[s];g(l,n.k)&&(l.value=E),n.k&&(u[n.k]=E)}}else _?(u[l]=o,h(l)&&(d[l]=o)):p&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const y=()=>{m(),Eu.delete(n)};y.id=-1,Eu.set(n,y),oi(y,t)}else d0(n),m()}}}function d0(n){const e=Eu.get(n);e&&(e.flags|=8,Eu.delete(n))}Qu().requestIdleCallback;Qu().cancelIdleCallback;const _l=n=>!!n.type.__asyncLoader,id=n=>n.type.__isKeepAlive;function zy(n,e){s_(n,"a",e)}function Vy(n,e){s_(n,"da",e)}function s_(n,e,t=ni){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(rd(e,i,t),t){let r=t.parent;for(;r&&r.parent;)id(r.parent.vnode)&&Hy(i,e,t,r),r=r.parent}}function Hy(n,e,t,i){const r=rd(e,n,i,!0);$n(()=>{op(i[e],r)},t)}function rd(n,e,t=ni,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{ts();const a=rc(t),l=$i(e,t,n,o);return a(),ns(),l});return i?r.unshift(s):r.push(s),s}}const us=n=>(e,t=ni)=>{(!kl||n==="sp")&&rd(n,(...i)=>e(...i),t)},Gy=us("bm"),Pn=us("m"),Wy=us("bu"),Xy=us("u"),o_=us("bum"),$n=us("um"),$y=us("sp"),jy=us("rtg"),Yy=us("rtc");function qy(n,e=ni){rd("ec",n,e)}const Ky=Symbol.for("v-ndc");function it(n,e,t,i){let r;const s=t,o=et(n);if(o||Kt(n)){const a=o&&yo(n);let l=!1,c=!1;a&&(l=!Wi(n),c=is(n),n=ed(n)),r=new Array(n.length);for(let u=0,d=n.length;u<d;u++)r[u]=e(l?c?Ea(ir(n[u])):ir(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(Dt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const Nf=n=>n?C_(n)?ad(n):Nf(n.parent):null,xl=Sn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Nf(n.parent),$root:n=>Nf(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>l_(n),$forceUpdate:n=>n.f||(n.f=()=>{mp(n.update)}),$nextTick:n=>n.n||(n.n=rs.bind(n.proxy)),$watch:n=>Fy.bind(n)}),Ed=(n,e)=>n!==Vt&&!n.__isScriptSetup&&Pt(n,e),Zy={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ed(i,e))return o[e]=1,i[e];if(r!==Vt&&Pt(r,e))return o[e]=2,r[e];if(Pt(s,e))return o[e]=3,s[e];if(t!==Vt&&Pt(t,e))return o[e]=4,t[e];Of&&(o[e]=0)}}const c=xl[e];let u,d;if(c)return e==="$attrs"&&kn(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Vt&&Pt(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,Pt(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Ed(r,e)?(r[e]=t,!0):i!==Vt&&Pt(i,e)?(i[e]=t,!0):Pt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==Vt&&a[0]!=="$"&&Pt(n,a)||Ed(e,a)||Pt(s,a)||Pt(i,a)||Pt(xl,a)||Pt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Pt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function f0(n){return et(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Of=!0;function Jy(n){const e=l_(n),t=n.proxy,i=n.ctx;Of=!1,e.beforeCreate&&h0(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:g,activated:_,deactivated:p,beforeDestroy:m,beforeUnmount:y,destroyed:E,unmounted:x,render:R,renderTracked:A,renderTriggered:C,errorCaptured:v,serverPrefetch:T,expose:N,inheritAttrs:U,components:L,directives:H,filters:z}=e;if(c&&Qy(c,i,null),o)for(const k in o){const K=o[k];lt(K)&&(i[k]=K.bind(t))}if(r){const k=r.call(t,t);Dt(k)&&(n.data=ua(k))}if(Of=!0,s)for(const k in s){const K=s[k],j=lt(K)?K.bind(t,t):lt(K.get)?K.get.bind(t,t):Sr,F=!lt(K)&&lt(K.set)?K.set.bind(t):Sr,ae=hn({get:j,set:F});Object.defineProperty(i,k,{enumerable:!0,configurable:!0,get:()=>ae.value,set:pe=>ae.value=pe})}if(a)for(const k in a)a_(a[k],i,t,k);if(l){const k=lt(l)?l.call(t):l;Reflect.ownKeys(k).forEach(K=>{Ly(K,k[K])})}u&&h0(u,n,"c");function X(k,K){et(K)?K.forEach(j=>k(j.bind(t))):K&&k(K.bind(t))}if(X(Gy,d),X(Pn,f),X(Wy,h),X(Xy,g),X(zy,_),X(Vy,p),X(qy,v),X(Yy,A),X(jy,C),X(o_,y),X($n,x),X($y,T),et(N))if(N.length){const k=n.exposed||(n.exposed={});N.forEach(K=>{Object.defineProperty(k,K,{get:()=>t[K],set:j=>t[K]=j,enumerable:!0})})}else n.exposed||(n.exposed={});R&&n.render===Sr&&(n.render=R),U!=null&&(n.inheritAttrs=U),L&&(n.components=L),H&&(n.directives=H),T&&r_(n)}function Qy(n,e,t=Sr){et(n)&&(n=kf(n));for(const i in n){const r=n[i];let s;Dt(r)?"default"in r?s=nu(r.from||i,r.default,!0):s=nu(r.from||i):s=nu(r),Wn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function h0(n,e,t){$i(et(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function a_(n,e,t,i){let r=i.includes(".")?Jg(t,i):()=>t[i];if(Kt(n)){const s=e[n];lt(s)&&Ai(r,s)}else if(lt(n))Ai(r,n.bind(t));else if(Dt(n))if(et(n))n.forEach(s=>a_(s,e,t,i));else{const s=lt(n.handler)?n.handler.bind(t):e[n.handler];lt(s)&&Ai(r,s,n)}}function l_(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Tu(l,c,o,!0)),Tu(l,e,o)),Dt(e)&&s.set(e,l),l}function Tu(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Tu(n,s,t,!0),r&&r.forEach(o=>Tu(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=e1[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const e1={data:p0,props:m0,emits:m0,methods:nl,computed:nl,beforeCreate:Yn,created:Yn,beforeMount:Yn,mounted:Yn,beforeUpdate:Yn,updated:Yn,beforeDestroy:Yn,beforeUnmount:Yn,destroyed:Yn,unmounted:Yn,activated:Yn,deactivated:Yn,errorCaptured:Yn,serverPrefetch:Yn,components:nl,directives:nl,watch:n1,provide:p0,inject:t1};function p0(n,e){return e?n?function(){return Sn(lt(n)?n.call(this,this):n,lt(e)?e.call(this,this):e)}:e:n}function t1(n,e){return nl(kf(n),kf(e))}function kf(n){if(et(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Yn(n,e){return n?[...new Set([].concat(n,e))]:e}function nl(n,e){return n?Sn(Object.create(null),n,e):e}function m0(n,e){return n?et(n)&&et(e)?[...new Set([...n,...e])]:Sn(Object.create(null),f0(n),f0(e??{})):e}function n1(n,e){if(!n)return e;if(!e)return n;const t=Sn(Object.create(null),n);for(const i in e)t[i]=Yn(n[i],e[i]);return t}function c_(){return{app:null,config:{isNativeTag:Sg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let i1=0;function r1(n,e){return function(i,r=null){lt(i)||(i=Sn({},i)),r!=null&&!Dt(r)&&(r=null);const s=c_(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:i1++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:F1,get config(){return s.config},set config(u){},use(u,...d){return o.has(u)||(u&&lt(u.install)?(o.add(u),u.install(c,...d)):lt(u)&&(o.add(u),u(c,...d))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,d){return d?(s.components[u]=d,c):s.components[u]},directive(u,d){return d?(s.directives[u]=d,c):s.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||At(i,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),n(h,u,f),l=!0,c._container=u,u.__vue_app__=c,ad(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&($i(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return s.provides[u]=d,c},runWithContext(u){const d=fa;fa=c;try{return u()}finally{fa=d}}};return c}}let fa=null;const s1=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${tr(e)}Modifiers`]||n[`${Vs(e)}Modifiers`];function o1(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Vt;let r=t;const s=e.startsWith("update:"),o=s&&s1(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Kt(u)?u.trim():u)),o.number&&(r=t.map(Ju)));let a,l=i[a=vd(e)]||i[a=vd(tr(e))];!l&&s&&(l=i[a=vd(Vs(e))]),l&&$i(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,$i(c,n,6,r)}}const a1=new WeakMap;function u_(n,e,t=!1){const i=t?a1:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!lt(n)){const l=c=>{const u=u_(c,e,!0);u&&(a=!0,Sn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(Dt(n)&&i.set(n,null),null):(et(s)?s.forEach(l=>o[l]=null):Sn(o,s),Dt(n)&&i.set(n,o),o)}function sd(n,e){return!n||!Yu(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Pt(n,e[0].toLowerCase()+e.slice(1))||Pt(n,Vs(e))||Pt(n,e))}function g0(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:g,inheritAttrs:_}=n,p=Su(n);let m,y;try{if(t.shapeFlag&4){const x=r||i,R=x;m=hr(c.call(R,x,u,d,h,f,g)),y=a}else{const x=e;m=hr(x.length>1?x(d,{attrs:a,slots:o,emit:l}):x(d,null)),y=e.props?a:l1(a)}}catch(x){bo.length=0,td(x,n,1),m=At(ti)}let E=m;if(y&&_!==!1){const x=Object.keys(y),{shapeFlag:R}=E;x.length&&R&7&&(s&&x.some(qu)&&(y=c1(y,s)),E=Us(E,y,!1,!0))}if(t.dirs&&(E=Us(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition){const x=nd(E.type)&&wu(E)||E;Fl(x,t.transition)}return m=E,Su(p),m}const l1=n=>{let e;for(const t in n)(t==="class"||t==="style"||Yu(t))&&((e||(e={}))[t]=n[t]);return e},c1=(n,e)=>{const t={};for(const i in n)(!qu(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function u1(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?_0(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(d_(o,i,f)&&!sd(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?_0(i,o,c):!0:!!o;return!1}function _0(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(d_(e,n,s)&&!sd(t,s))return!0}return!1}function d_(n,e,t){const i=n[t],r=e[t];return t==="style"&&Dt(i)&&Dt(r)?!nc(i,r):i!==r}function d1({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const f_={},h_=()=>Object.create(f_),p_=n=>Object.getPrototypeOf(n)===f_;function f1(n,e,t,i=!1){const r={},s=h_();n.propsDefaults=Object.create(null),m_(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:yy(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function h1(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Tt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(sd(n.emitsOptions,f))continue;const h=e[f];if(l)if(Pt(s,f))h!==s[f]&&(s[f]=h,c=!0);else{const g=tr(f);r[g]=Bf(l,a,g,h,n,!1)}else h!==s[f]&&(s[f]=h,c=!0)}}}else{m_(n,e,r,s)&&(c=!0);let u;for(const d in a)(!e||!Pt(e,d)&&((u=Vs(d))===d||!Pt(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(r[d]=Bf(l,a,d,void 0,n,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!Pt(e,d))&&(delete s[d],c=!0)}c&&Gr(n.attrs,"set","")}function m_(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(hl(l))continue;const c=e[l];let u;r&&Pt(r,u=tr(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:sd(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Tt(t),c=a||Vt;for(let u=0;u<s.length;u++){const d=s[u];t[d]=Bf(r,l,d,c[d],n,!Pt(c,d))}}return o}function Bf(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Pt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&lt(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=rc(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Vs(t))&&(i=!0))}return i}const p1=new WeakMap;function g_(n,e,t=!1){const i=t?p1:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!lt(n)){const u=d=>{l=!0;const[f,h]=g_(d,e,!0);Sn(o,f),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Dt(n)&&i.set(n,la),la;if(et(s))for(let u=0;u<s.length;u++){const d=tr(s[u]);x0(d)&&(o[d]=Vt)}else if(s)for(const u in s){const d=tr(u);if(x0(d)){const f=s[u],h=o[d]=et(f)||lt(f)?{type:f}:Sn({},f),g=h.type;let _=!1,p=!0;if(et(g))for(let m=0;m<g.length;++m){const y=g[m],E=lt(y)&&y.name;if(E==="Boolean"){_=!0;break}else E==="String"&&(p=!1)}else _=lt(g)&&g.name==="Boolean";h[0]=_,h[1]=p,(_||Pt(h,"default"))&&a.push(d)}}const c=[o,a];return Dt(n)&&i.set(n,c),c}function x0(n){return n[0]!=="$"&&!hl(n)}const gp=n=>n==="_"||n==="_ctx"||n==="$stable",_p=n=>et(n)?n.map(hr):[hr(n)],m1=(n,e,t)=>{if(e._n)return e;const i=Mu((...r)=>_p(e(...r)),t);return i._c=!1,i},__=(n,e,t)=>{const i=n._ctx;for(const r in n){if(gp(r))continue;const s=n[r];if(lt(s))e[r]=m1(r,s,i);else if(s!=null){const o=_p(s);e[r]=()=>o}}},x_=(n,e)=>{const t=_p(e);n.slots.default=()=>t},v_=(n,e,t)=>{for(const i in e)(t||!gp(i))&&(n[i]=e[i])},g1=(n,e,t)=>{const i=n.slots=h_();if(n.vnode.shapeFlag&32){const r=e._;r?(v_(i,e,t),t&&Ag(i,"_",r,!0)):__(e,i)}else e&&x_(n,e)},_1=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Vt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:v_(r,e,t):(s=!e.$stable,__(e,r)),o=e}else e&&(x_(n,e),o={default:1});if(s)for(const a in r)!gp(a)&&o[a]==null&&delete r[a]},oi=S1;function x1(n){return v1(n)}function v1(n,e){const t=Qu();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Sr,insertStaticContent:g}=n,_=(M,w,V,ee=null,Y=null,O=null,I=void 0,_e=null,de=!!w.dynamicChildren)=>{if(M===w)return;M&&!ao(M,w)&&(ee=ue(M),pe(M,Y,O,!0),M=null),w.patchFlag===-2&&(de=!1,w.dynamicChildren=null);const{type:ne,ref:fe,shapeFlag:P}=w;switch(ne){case od:p(M,w,V,ee);break;case ti:m(M,w,V,ee);break;case iu:M==null&&y(w,V,ee,I);break;case Ke:L(M,w,V,ee,Y,O,I,_e,de);break;default:P&1?R(M,w,V,ee,Y,O,I,_e,de):P&6?H(M,w,V,ee,Y,O,I,_e,de):(P&64||P&128)&&ne.process(M,w,V,ee,Y,O,I,_e,de,Ae)}fe!=null&&Y?gl(fe,M&&M.ref,O,w||M,!w):fe==null&&M&&M.ref!=null&&gl(M.ref,null,O,M,!0)},p=(M,w,V,ee)=>{if(M==null)i(w.el=a(w.children),V,ee);else{const Y=w.el=M.el;w.children!==M.children&&c(Y,w.children)}},m=(M,w,V,ee)=>{M==null?i(w.el=l(w.children||""),V,ee):w.el=M.el},y=(M,w,V,ee)=>{[M.el,M.anchor]=g(M.children,w,V,ee,M.el,M.anchor)},E=({el:M,anchor:w},V,ee)=>{let Y;for(;M&&M!==w;)Y=f(M),i(M,V,ee),M=Y;i(w,V,ee)},x=({el:M,anchor:w})=>{let V;for(;M&&M!==w;)V=f(M),r(M),M=V;r(w)},R=(M,w,V,ee,Y,O,I,_e,de)=>{if(w.type==="svg"?I="svg":w.type==="math"&&(I="mathml"),M==null)A(w,V,ee,Y,O,I,_e,de);else{const ne=M.el&&M.el._isVueCE?M.el:null;try{ne&&ne._beginPatch(),T(M,w,Y,O,I,_e,de)}finally{ne&&ne._endPatch()}}},A=(M,w,V,ee,Y,O,I,_e)=>{let de,ne;const{props:fe,shapeFlag:P,transition:S,dirs:B}=M;if(de=M.el=o(M.type,O,fe&&fe.is,fe),P&8?u(de,M.children):P&16&&v(M.children,de,null,ee,Y,Td(M,O),I,_e),B&&Ws(M,null,ee,"created"),C(de,M,M.scopeId,I,ee),fe){for(const Q in fe)Q!=="value"&&!hl(Q)&&s(de,Q,null,fe[Q],O,ee);"value"in fe&&s(de,"value",null,fe.value,O),(ne=fe.onVnodeBeforeMount)&&or(ne,ee,M)}B&&Ws(M,null,ee,"beforeMount");const Z=y1(Y,S);Z&&S.beforeEnter(de),i(de,w,V),((ne=fe&&fe.onVnodeMounted)||Z||B)&&oi(()=>{try{ne&&or(ne,ee,M),Z&&S.enter(de),B&&Ws(M,null,ee,"mounted")}finally{}},Y)},C=(M,w,V,ee,Y)=>{if(V&&h(M,V),ee)for(let O=0;O<ee.length;O++)h(M,ee[O]);if(Y){let O=Y.subTree;if(w===O||M_(O.type)&&(O.ssContent===w||O.ssFallback===w)){const I=Y.vnode;C(M,I,I.scopeId,I.slotScopeIds,Y.parent)}}},v=(M,w,V,ee,Y,O,I,_e,de=0)=>{for(let ne=de;ne<M.length;ne++){const fe=M[ne]=_e?Vr(M[ne]):hr(M[ne]);_(null,fe,w,V,ee,Y,O,I,_e)}},T=(M,w,V,ee,Y,O,I)=>{const _e=w.el=M.el;let{patchFlag:de,dynamicChildren:ne,dirs:fe}=w;de|=M.patchFlag&16;const P=M.props||Vt,S=w.props||Vt;let B;if(V&&Xs(V,!1),(B=S.onVnodeBeforeUpdate)&&or(B,V,w,M),fe&&Ws(w,M,V,"beforeUpdate"),V&&Xs(V,!0),ne&&(!M.dynamicChildren||M.dynamicChildren.length!==ne.length)&&(de=0,I=!1,ne=null),(P.innerHTML&&S.innerHTML==null||P.textContent&&S.textContent==null)&&u(_e,""),ne?N(M.dynamicChildren,ne,_e,V,ee,Td(w,Y),O):I||K(M,w,_e,null,V,ee,Td(w,Y),O,!1),de>0){if(de&16)U(_e,P,S,V,Y);else if(de&2&&P.class!==S.class&&s(_e,"class",null,S.class,Y),de&4&&s(_e,"style",P.style,S.style,Y),de&8){const Z=w.dynamicProps;for(let Q=0;Q<Z.length;Q++){const q=Z[Q],Me=P[q],xe=S[q];(xe!==Me||q==="value")&&s(_e,q,Me,xe,Y,V)}}de&1&&M.children!==w.children&&u(_e,w.children)}else!I&&ne==null&&U(_e,P,S,V,Y);((B=S.onVnodeUpdated)||fe)&&oi(()=>{B&&or(B,V,w,M),fe&&Ws(w,M,V,"updated")},ee)},N=(M,w,V,ee,Y,O,I)=>{for(let _e=0;_e<w.length;_e++){const de=M[_e],ne=w[_e],fe=de.el&&(de.type===Ke||!ao(de,ne)||de.shapeFlag&198)?d(de.el):V;_(de,ne,fe,null,ee,Y,O,I,!0)}},U=(M,w,V,ee,Y)=>{if(w!==V){if(w!==Vt)for(const O in w)!hl(O)&&!(O in V)&&s(M,O,w[O],null,Y,ee);for(const O in V){if(hl(O))continue;const I=V[O],_e=w[O];I!==_e&&O!=="value"&&s(M,O,_e,I,Y,ee)}"value"in V&&s(M,"value",w.value,V.value,Y)}},L=(M,w,V,ee,Y,O,I,_e,de)=>{const ne=w.el=M?M.el:a(""),fe=w.anchor=M?M.anchor:a("");let{patchFlag:P,dynamicChildren:S,slotScopeIds:B}=w;B&&(_e=_e?_e.concat(B):B),M==null?(i(ne,V,ee),i(fe,V,ee),v(w.children||[],V,fe,Y,O,I,_e,de)):P>0&&P&64&&S&&M.dynamicChildren&&M.dynamicChildren.length===S.length?(N(M.dynamicChildren,S,V,Y,O,I,_e),(w.key!=null||Y&&w===Y.subTree)&&y_(M,w,!0)):K(M,w,V,fe,Y,O,I,_e,de)},H=(M,w,V,ee,Y,O,I,_e,de)=>{w.slotScopeIds=_e,M==null?w.shapeFlag&512?Y.ctx.activate(w,V,ee,I,de):z(w,V,ee,Y,O,I,de):G(M,w,de)},z=(M,w,V,ee,Y,O,I)=>{const _e=M.component=C1(M,ee,Y);if(id(M)&&(_e.ctx.renderer=Ae),R1(_e,!1,I),_e.asyncDep){if(Y&&Y.registerDep(_e,X,I),!M.el){const de=_e.subTree=At(ti);m(null,de,w,V),M.placeholder=de.el}}else X(_e,M,w,V,Y,O,I)},G=(M,w,V)=>{const ee=w.component=M.component;if(u1(M,w,V))if(ee.asyncDep&&!ee.asyncResolved){k(ee,w,V);return}else ee.next=w,ee.update();else w.el=M.el,ee.vnode=w},X=(M,w,V,ee,Y,O,I)=>{const _e=()=>{if(M.isMounted){let{next:P,bu:S,u:B,parent:Z,vnode:Q}=M;{const De=b_(M);if(De){P&&(P.el=Q.el,k(M,P,I)),De.asyncDep.then(()=>{oi(()=>{M.isUnmounted||ne()},Y)});return}}let q=P,Me;Xs(M,!1),P?(P.el=Q.el,k(M,P,I)):P=Q,S&&tu(S),(Me=P.props&&P.props.onVnodeBeforeUpdate)&&or(Me,Z,P,Q),Xs(M,!0);const xe=g0(M),He=M.subTree;M.subTree=xe,_(He,xe,d(He.el),ue(He),M,Y,O),P.el=xe.el,q===null&&d1(M,xe.el),B&&oi(B,Y),(Me=P.props&&P.props.onVnodeUpdated)&&oi(()=>or(Me,Z,P,Q),Y)}else{let P;const{el:S,props:B}=w,{bm:Z,m:Q,parent:q,root:Me,type:xe}=M,He=_l(w);Xs(M,!1),Z&&tu(Z),!He&&(P=B&&B.onVnodeBeforeMount)&&or(P,q,w),Xs(M,!0);{Me.ce&&Me.ce._hasShadowRoot()&&Me.ce._injectChildStyle(xe,M.parent?M.parent.type:void 0);const De=M.subTree=g0(M);_(null,De,V,ee,M,Y,O),w.el=De.el}if(Q&&oi(Q,Y),!He&&(P=B&&B.onVnodeMounted)){const De=w;oi(()=>or(P,q,De),Y)}(w.shapeFlag&256||q&&_l(q.vnode)&&q.vnode.shapeFlag&256)&&M.a&&oi(M.a,Y),M.isMounted=!0,w=V=ee=null}};M.scope.on();const de=M.effect=new Dg(_e);M.scope.off();const ne=M.update=de.run.bind(de),fe=M.job=de.runIfDirty.bind(de);fe.i=M,fe.id=M.uid,de.scheduler=()=>mp(fe),Xs(M,!0),ne()},k=(M,w,V)=>{w.component=M;const ee=M.vnode.props;M.vnode=w,M.next=null,h1(M,w.props,ee,V),_1(M,w.children,V),ts(),c0(M),ns()},K=(M,w,V,ee,Y,O,I,_e,de=!1)=>{const ne=M&&M.children,fe=M?M.shapeFlag:0,P=w.children,{patchFlag:S,shapeFlag:B}=w;if(S>0){if(S&128){F(ne,P,V,ee,Y,O,I,_e,de);return}else if(S&256){j(ne,P,V,ee,Y,O,I,_e,de);return}}B&8?(fe&16&&J(ne,Y,O),P!==ne&&u(V,P)):fe&16?B&16?F(ne,P,V,ee,Y,O,I,_e,de):J(ne,Y,O,!0):(fe&8&&u(V,""),B&16&&v(P,V,ee,Y,O,I,_e,de))},j=(M,w,V,ee,Y,O,I,_e,de)=>{M=M||la,w=w||la;const ne=M.length,fe=w.length,P=Math.min(ne,fe);let S;for(S=0;S<P;S++){const B=w[S]=de?Vr(w[S]):hr(w[S]);_(M[S],B,V,null,Y,O,I,_e,de)}ne>fe?J(M,Y,O,!0,!1,P):v(w,V,ee,Y,O,I,_e,de,P)},F=(M,w,V,ee,Y,O,I,_e,de)=>{let ne=0;const fe=w.length;let P=M.length-1,S=fe-1;for(;ne<=P&&ne<=S;){const B=M[ne],Z=w[ne]=de?Vr(w[ne]):hr(w[ne]);if(ao(B,Z))_(B,Z,V,null,Y,O,I,_e,de);else break;ne++}for(;ne<=P&&ne<=S;){const B=M[P],Z=w[S]=de?Vr(w[S]):hr(w[S]);if(ao(B,Z))_(B,Z,V,null,Y,O,I,_e,de);else break;P--,S--}if(ne>P){if(ne<=S){const B=S+1,Z=B<fe?w[B].el:ee;for(;ne<=S;)_(null,w[ne]=de?Vr(w[ne]):hr(w[ne]),V,Z,Y,O,I,_e,de),ne++}}else if(ne>S)for(;ne<=P;)pe(M[ne],Y,O,!0),ne++;else{const B=ne,Z=ne,Q=new Map;for(ne=Z;ne<=S;ne++){const Pe=w[ne]=de?Vr(w[ne]):hr(w[ne]);Pe.key!=null&&Q.set(Pe.key,ne)}let q,Me=0;const xe=S-Z+1;let He=!1,De=0;const ye=new Array(xe);for(ne=0;ne<xe;ne++)ye[ne]=0;for(ne=B;ne<=P;ne++){const Pe=M[ne];if(Me>=xe){pe(Pe,Y,O,!0);continue}let Fe;if(Pe.key!=null)Fe=Q.get(Pe.key);else for(q=Z;q<=S;q++)if(ye[q-Z]===0&&ao(Pe,w[q])){Fe=q;break}Fe===void 0?pe(Pe,Y,O,!0):(ye[Fe-Z]=ne+1,Fe>=De?De=Fe:He=!0,_(Pe,w[Fe],V,null,Y,O,I,_e,de),Me++)}const we=He?b1(ye):la;for(q=we.length-1,ne=xe-1;ne>=0;ne--){const Pe=Z+ne,Fe=w[Pe],Le=w[Pe+1],Qe=Pe+1<fe?Le.el||S_(Le):ee;ye[ne]===0?_(null,Fe,V,Qe,Y,O,I,_e,de):He&&(q<0||ne!==we[q]?ae(Fe,V,Qe,2):q--)}}},ae=(M,w,V,ee,Y=null)=>{const{el:O,type:I,transition:_e,children:de,shapeFlag:ne}=M;if(ne&6){ae(M.component.subTree,w,V,ee);return}if(ne&128){M.suspense.move(w,V,ee);return}if(ne&64){I.move(M,w,V,Ae);return}if(I===Ke){i(O,w,V);for(let P=0;P<de.length;P++)ae(de[P],w,V,ee);i(M.anchor,w,V);return}if(I===iu){E(M,w,V);return}if(ee!==2&&ne&1&&_e)if(ee===0)_e.persisted&&!O[Ni]?i(O,w,V):(_e.beforeEnter(O),i(O,w,V),oi(()=>_e.enter(O),Y));else{const{leave:P,delayLeave:S,afterLeave:B}=_e,Z=()=>{M.ctx.isUnmounted?r(O):i(O,w,V)},Q=()=>{const q=O._isLeaving||!!O[Ni];O._isLeaving&&O[Ni](!0),_e.persisted&&!q?Z():P(O,()=>{Z(),B&&B()})};S?S(O,Z,Q):Q()}else i(O,w,V)},pe=(M,w,V,ee=!1,Y=!1)=>{const{type:O,props:I,ref:_e,children:de,dynamicChildren:ne,shapeFlag:fe,patchFlag:P,dirs:S,cacheIndex:B,memo:Z}=M;if(P===-2&&(Y=!1),_e!=null&&(ts(),gl(_e,null,V,M,!0),ns()),B!=null&&(w.renderCache[B]=void 0),fe&256){w.ctx.deactivate(M);return}const Q=fe&1&&S,q=!_l(M);let Me;if(q&&(Me=I&&I.onVnodeBeforeUnmount)&&or(Me,w,M),fe&6)Te(M.component,V,ee);else{if(fe&128){M.suspense.unmount(V,ee);return}Q&&Ws(M,null,w,"beforeUnmount"),fe&64?M.type.remove(M,w,V,Ae,ee):ne&&!ne.hasOnce&&(O!==Ke||P>0&&P&64)?J(ne,w,V,!1,!0):(O===Ke&&P&384||!Y&&fe&16)&&J(de,w,V),ee&&me(M)}const xe=Z!=null&&B==null;(q&&(Me=I&&I.onVnodeUnmounted)||Q||xe)&&oi(()=>{Me&&or(Me,w,M),Q&&Ws(M,null,w,"unmounted"),xe&&(M.el=null)},V)},me=M=>{const{type:w,el:V,anchor:ee,transition:Y}=M;if(w===Ke){ve(V,ee);return}if(w===iu){x(M);return}const O=()=>{r(V),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(M.shapeFlag&1&&Y&&!Y.persisted){const{leave:I,delayLeave:_e}=Y,de=()=>I(V,O);_e?_e(M.el,O,de):de()}else O()},ve=(M,w)=>{let V;for(;M!==w;)V=f(M),r(M),M=V;r(w)},Te=(M,w,V)=>{const{bum:ee,scope:Y,job:O,subTree:I,um:_e,m:de,a:ne}=M;v0(de),v0(ne),ee&&tu(ee),Y.stop(),O&&(O.flags|=8,pe(I,M,w,V)),_e&&oi(_e,w),oi(()=>{M.isUnmounted=!0},w)},J=(M,w,V,ee=!1,Y=!1,O=0)=>{for(let I=O;I<M.length;I++)pe(M[I],w,V,ee,Y)},ue=M=>{if(M.shapeFlag&6)return ue(M.component.subTree);if(M.shapeFlag&128)return M.suspense.next();const w=f(M.anchor||M.el),V=w&&w[Ny];return V?f(V):w};let oe=!1;const Re=(M,w,V)=>{let ee;M==null?w._vnode&&(pe(w._vnode,null,null,!0),ee=w._vnode.component):_(w._vnode||null,M,w,null,null,null,V),w._vnode=M,oe||(oe=!0,c0(ee),Yg(),oe=!1)},Ae={p:_,um:pe,m:ae,r:me,mt:z,mc:v,pc:K,pbc:N,n:ue,o:n};return{render:Re,hydrate:void 0,createApp:r1(Re)}}function Td({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Xs({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function y1(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function y_(n,e,t=!1){const i=n.children,r=e.children;if(et(i)&&et(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Vr(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&y_(o,a)),a.type===od&&(a.patchFlag===-1&&(a=r[s]=Vr(a)),a.el=o.el),a.type===ti&&!a.el&&(a.el=o.el)}}function b1(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function b_(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:b_(e)}function v0(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function S_(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?S_(e.subTree):null}const M_=n=>n.__isSuspense;function S1(n,e){e&&e.pendingBranch?et(n)?e.effects.push(...n):e.effects.push(n):Dy(n)}const Ke=Symbol.for("v-fgt"),od=Symbol.for("v-txt"),ti=Symbol.for("v-cmt"),iu=Symbol.for("v-stc"),bo=[];let wi=null;function he(n=!1){bo.push(wi=n?null:[])}function w_(){bo.pop(),wi=bo[bo.length-1]||null}let Nl=1;function Au(n,e=!1){Nl+=n,n<0&&wi&&e&&(wi.hasOnce=!0)}function E_(n){return n.dynamicChildren=Nl>0?wi||la:null,w_(),Nl>0&&wi&&wi.push(n),n}function ge(n,e,t,i,r,s){return E_(b(n,e,t,i,r,s,!0))}function vl(n,e,t,i,r){return E_(At(n,e,t,i,r,!0))}function Cu(n){return n?n.__v_isVNode===!0:!1}function ao(n,e){return n.type===e.type&&n.key===e.key}const T_=({key:n})=>n??null,ru=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Kt(n)||Wn(n)||lt(n)?{i:Vi,r:n,k:e,f:!!t}:n:null);function b(n,e=null,t=null,i=0,r=null,s=n===Ke?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&T_(e),ref:e&&ru(e),scopeId:Kg,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Vi};return a?(Ru(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Kt(t)?8:16),Nl>0&&!o&&wi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&wi.push(l),l}const At=M1;function M1(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Ky)&&(n=ti),Cu(n)){const a=Us(n,e,!0);return t&&Ru(a,t),Nl>0&&!s&&wi&&(a.shapeFlag&6?wi[wi.indexOf(n)]=a:wi.push(a)),a.patchFlag=-2,a}if(I1(n)&&(n=n.__vccOpts),e){e=w1(e);let{class:a,style:l}=e;a&&!Kt(a)&&(e.class=at(a)),Dt(l)&&(pp(l)&&!et(l)&&(l=Sn({},l)),e.style=Tn(l))}const o=Kt(n)?1:M_(n)?128:nd(n)?64:Dt(n)?4:lt(n)?2:0;return b(n,e,t,i,r,o,s,!0)}function w1(n){return n?pp(n)||p_(n)?Sn({},n):n:null}function Us(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?E1(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&T_(c),ref:e&&e.ref?t&&s?et(s)?s.concat(ru(e)):[s,ru(e)]:ru(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ke?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Us(n.ssContent),ssFallback:n.ssFallback&&Us(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Fl(u,l.clone(u)),u}function Fs(n=" ",e=0){return At(od,null,n,e)}function lo(n,e){const t=At(iu,null,n);return t.staticCount=e,t}function Bn(n="",e=!1){return e?(he(),vl(ti,null,n)):At(ti,null,n)}function hr(n){return n==null||typeof n=="boolean"?At(ti):et(n)?At(Ke,null,n.slice()):Cu(n)?Vr(n):At(od,null,String(n))}function Vr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Us(n)}function Ru(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(et(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ru(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!p_(e)?e._ctx=Vi:r===3&&Vi&&(Vi.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(lt(e)){if(i&65){Ru(n,{default:e});return}e={default:e,_ctx:Vi},t=32}else e=String(e),i&64?(t=16,e=[Fs(e)]):t=8;n.children=e,n.shapeFlag|=t}function E1(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=at([e.class,i.class]));else if(r==="style")e.style=Tn([e.style,i.style]);else if(Yu(r)){const s=e[r],o=i[r];o&&s!==o&&!(et(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!qu(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function or(n,e,t,i=null){$i(n,e,7,[t,i])}const T1=c_();let A1=0;function C1(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||T1,s={uid:A1++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ty(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:g_(i,r),emitsOptions:u_(i,r),emit:null,emitted:null,propsDefaults:Vt,inheritAttrs:i.inheritAttrs,ctx:Vt,data:Vt,props:Vt,attrs:Vt,slots:Vt,refs:Vt,setupState:Vt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=o1.bind(null,s),n.ce&&n.ce(s),s}let ni=null;const A_=()=>ni||Vi;let Pu,Ol;{const n=Qu(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Pu=e("__VUE_INSTANCE_SETTERS__",t=>ni=t),Ol=e("__VUE_SSR_SETTERS__",t=>kl=t)}const rc=n=>{const e=ni;return Pu(n),n.scope.on(),()=>{n.scope.off(),Pu(e)}},y0=()=>{ni&&ni.scope.off(),Pu(null)};function C_(n){return n.vnode.shapeFlag&4}let kl=!1;function R1(n,e=!1,t=!1){e&&Ol(e);const{props:i,children:r}=n.vnode,s=C_(n);f1(n,i,s,e),g1(n,r,t||e);const o=s?P1(n,e):void 0;return e&&Ol(!1),o}function P1(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Zy);const{setup:i}=t;if(i){ts();const r=n.setupContext=i.length>1?L1(n):null,s=rc(n),o=ic(i,n,0,[n.props,r]),a=Mg(o);if(ns(),s(),(a||n.sp)&&!_l(n)&&r_(n),a){if(o.then(y0,y0),e)return o.then(l=>{Ol(!0);try{b0(n,l,e)}finally{Ol(!1)}}).catch(l=>{td(l,n,0)});n.asyncDep=o}else b0(n,o)}else R_(n)}function b0(n,e,t){lt(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Dt(e)&&(n.setupState=Xg(e)),R_(n)}function R_(n,e,t){const i=n.type;n.render||(n.render=i.render||Sr);{const r=rc(n);ts();try{Jy(n)}finally{ns(),r()}}}const D1={get(n,e){return kn(n,"get",""),n[e]}};function L1(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,D1),slots:n.slots,emit:n.emit,expose:e}}function ad(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Xg(by(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in xl)return xl[t](n)},has(e,t){return t in e||t in xl}})):n.proxy}function I1(n){return lt(n)&&"__vccOpts"in n}const hn=(n,e)=>Ty(n,e,kl);function U1(n,e,t){try{Au(-1);const i=arguments.length;return i===2?Dt(e)&&!et(e)?Cu(e)?At(n,null,[e]):At(n,e):At(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Cu(t)&&(t=[t]),At(n,e,t))}finally{Au(1)}}const F1="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zf;const S0=typeof window<"u"&&window.trustedTypes;if(S0)try{zf=S0.createPolicy("vue",{createHTML:n=>n})}catch{}const P_=zf?n=>zf.createHTML(n):n=>n,N1="http://www.w3.org/2000/svg",O1="http://www.w3.org/1998/Math/MathML",Br=typeof document<"u"?document:null,M0=Br&&Br.createElement("template"),k1={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Br.createElementNS(N1,n):e==="mathml"?Br.createElementNS(O1,n):t?Br.createElement(n,{is:t}):Br.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Br.createTextNode(n),createComment:n=>Br.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Br.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{M0.innerHTML=P_(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=M0.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ps="transition",Ga="animation",Bl=Symbol("_vtc"),D_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},B1=Sn({},Qg,D_),z1=n=>(n.displayName="Transition",n.props=B1,n),Vf=z1((n,{slots:e})=>U1(By,V1(n),e)),$s=(n,e=[])=>{et(n)?n.forEach(t=>t(...e)):n&&n(...e)},w0=n=>n?et(n)?n.some(e=>e.length>1):n.length>1:!1;function V1(n){const e={};for(const L in n)L in D_||(e[L]=n[L]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=n,g=H1(r),_=g&&g[0],p=g&&g[1],{onBeforeEnter:m,onEnter:y,onEnterCancelled:E,onLeave:x,onLeaveCancelled:R,onBeforeAppear:A=m,onAppear:C=y,onAppearCancelled:v=E}=e,T=(L,H,z,G)=>{L._enterCancelled=G,js(L,H?u:a),js(L,H?c:o),z&&z()},N=(L,H)=>{L._isLeaving=!1,js(L,d),js(L,h),js(L,f),H&&H()},U=L=>(H,z)=>{const G=L?C:y,X=()=>T(H,L,z);$s(G,[H,X]),E0(()=>{js(H,L?l:s),Ir(H,L?u:a),w0(G)||T0(H,i,_,X)})};return Sn(e,{onBeforeEnter(L){$s(m,[L]),Ir(L,s),Ir(L,o)},onBeforeAppear(L){$s(A,[L]),Ir(L,l),Ir(L,c)},onEnter:U(!1),onAppear:U(!0),onLeave(L,H){L._isLeaving=!0;const z=()=>N(L,H);Ir(L,d),L._enterCancelled?(Ir(L,f),R0(L)):(R0(L),Ir(L,f)),E0(()=>{L._isLeaving&&(js(L,d),Ir(L,h),w0(x)||T0(L,i,p,z))}),$s(x,[L,z])},onEnterCancelled(L){T(L,!1,void 0,!0),$s(E,[L])},onAppearCancelled(L){T(L,!0,void 0,!0),$s(v,[L])},onLeaveCancelled(L){N(L),$s(R,[L])}})}function H1(n){if(n==null)return null;if(Dt(n))return[Ad(n.enter),Ad(n.leave)];{const e=Ad(n);return[e,e]}}function Ad(n){return $v(n)}function Ir(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Bl]||(n[Bl]=new Set)).add(e)}function js(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Bl];t&&(t.delete(e),t.size||(n[Bl]=void 0))}function E0(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let G1=0;function T0(n,e,t,i){const r=n._endId=++G1,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=W1(n,e);if(!o)return i();const c=o+"end";let u=0;const d=()=>{n.removeEventListener(c,f),s()},f=h=>{h.target===n&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),n.addEventListener(c,f)}function W1(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(`${ps}Delay`),s=i(`${ps}Duration`),o=A0(r,s),a=i(`${Ga}Delay`),l=i(`${Ga}Duration`),c=A0(a,l);let u=null,d=0,f=0;e===ps?o>0&&(u=ps,d=o,f=s.length):e===Ga?c>0&&(u=Ga,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?ps:Ga:null,f=u?u===ps?s.length:l.length:0);const h=u===ps&&/\b(?:transform|all)(?:,|$)/.test(i(`${ps}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function A0(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>C0(t)+C0(n[i])))}function C0(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function R0(n){return(n?n.ownerDocument:document).body.offsetHeight}function X1(n,e,t){const i=n[Bl];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const P0=Symbol("_vod"),$1=Symbol("_vsh"),j1=Symbol(""),Y1=/(?:^|;)\s*display\s*:/;function q1(n,e,t){const i=n.style,r=Kt(t);let s=!1;if(t&&!r){if(e)if(Kt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&il(i,a,"")}else for(const o in e)t[o]==null&&il(i,o,"");for(const o in t){o==="display"&&(s=!0);const a=t[o];a!=null?Z1(n,o,!Kt(e)&&e?e[o]:void 0,a)||il(i,o,a):il(i,o,"")}}else if(r){if(e!==t){const o=i[j1];o&&(t+=";"+o),i.cssText=t,s=Y1.test(t)}}else e&&n.removeAttribute("style");P0 in n&&(n[P0]=s?i.display:"",n[$1]&&(i.display="none"))}const D0=/\s*!important$/;function il(n,e,t){if(et(t))t.forEach(i=>il(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=K1(n,e);D0.test(t)?n.setProperty(Vs(i),t.replace(D0,""),"important"):n[i]=t}}const L0=["Webkit","Moz","ms"],Cd={};function K1(n,e){const t=Cd[e];if(t)return t;let i=tr(e);if(i!=="filter"&&i in n)return Cd[e]=i;i=Tg(i);for(let r=0;r<L0.length;r++){const s=L0[r]+i;if(s in n)return Cd[e]=s}return e}function Z1(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Kt(i)&&t===i}const I0="http://www.w3.org/1999/xlink";function U0(n,e,t,i,r,s=Jv(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(I0,e.slice(6,e.length)):n.setAttributeNS(I0,e,t):t==null||s&&!Cg(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Ar(t)?String(t):t)}function F0(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?P_(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Cg(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function co(n,e,t,i){n.addEventListener(e,t,i)}function J1(n,e,t,i){n.removeEventListener(e,t,i)}const N0=Symbol("_vei");function Q1(n,e,t,i,r=null){const s=n[N0]||(n[N0]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=nb(e);if(i){const c=s[e]=sb(i,r);co(n,a,c,l)}else o&&(J1(n,a,o,l),s[e]=void 0)}}const eb=/(Once|Passive|Capture)$/,tb=/^on:?(?:Once|Passive|Capture)$/;function nb(n){let e,t;for(;(t=n.match(eb))&&!tb.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Vs(n.slice(2)),e]}let Rd=0;const ib=Promise.resolve(),rb=()=>Rd||(ib.then(()=>Rd=0),Rd=Date.now());function sb(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(et(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&$i(c,e,5,a)}}else $i(r,e,5,[i])};return t.value=n,t.attached=rb(),t}const O0=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,ob=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?X1(n,i,o):e==="style"?q1(n,t,i):Yu(e)?qu(e)||Q1(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ab(n,e,i,o))?(F0(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&U0(n,e,i,o,s,e!=="value")):n._isVueCE&&(lb(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Kt(i)))?F0(n,tr(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),U0(n,e,i,o))};function ab(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&O0(e)&&lt(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return O0(e)&&Kt(t)?!1:e in n}function lb(n,e){const t=n._def.props;if(!t)return!1;const i=tr(e);return Array.isArray(t)?t.some(r=>tr(r)===i):Object.keys(t).some(r=>tr(r)===i)}const Du=n=>{const e=n.props["onUpdate:modelValue"]||!1;return et(e)?t=>tu(e,t):e};function cb(n){n.target.composing=!0}function k0(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ho=Symbol("_assign"),mc=Symbol("_initialValue");function Pd(n,e,t){return e&&(n=n.trim()),t&&(n=Ju(n)),n}const Dd={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n.parentNode&&(n.type==="text"?n[mc]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[mc]=n.defaultValue.replace(/\r\n?/g,`
`))),n[ho]=Du(r);const s=i||r.props&&r.props.type==="number";co(n,e?"change":"input",o=>{o.target.composing||n[ho](Pd(n.value,t,s))}),(t||s)&&co(n,"change",()=>{n.value=Pd(n.value,t,s)}),e||(co(n,"compositionstart",cb),co(n,"compositionend",k0),co(n,"change",k0))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const r=e??"",s=n[mc];delete n[mc],s!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==s?n[ho](Pd(n.value,t,i)):n.value=r},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[ho]=Du(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Ju(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},ub={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,co(n,"change",()=>{const r=Array.prototype.filter.call(n.options,s=>s.selected).map(s=>t?Ju(Lu(s)):Lu(s));n[ho](n.multiple?Ku(n._modelValue)?new Set(r):r:r[0]),n._assigning=!0,rs(()=>{n._assigning=!1})}),n[ho]=Du(i)},mounted(n,{value:e}){B0(n,e)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[ho]=Du(t)},updated(n,{value:e}){n._assigning||B0(n,e)}};function B0(n,e){const t=n.multiple,i=et(e);if(!(t&&!i&&!Ku(e))){for(let r=0,s=n.options.length;r<s;r++){const o=n.options[r],a=Lu(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=ey(e,a)>-1}else o.selected=e.has(a);else if(nc(Lu(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Lu(n){return"_value"in n?n._value:n.value}const db=["ctrl","shift","alt","meta"],fb={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>db.some(t=>n[`${t}Key`]&&!e.includes(t))},po=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=fb[e[o]];if(a&&a(r,e))return}return n(r,...s)}))},hb={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},pb=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(r=>{if(!("key"in r))return;const s=Vs(r.key);if(e.some(o=>o===s||hb[o]===s))return n(r)}))},mb=Sn({patchProp:ob},k1);let z0;function gb(){return z0||(z0=x1(mb))}const _b=((...n)=>{const e=gb().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=vb(i);if(!r)return;const s=e._component;!lt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,xb(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function xb(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function vb(n){return Kt(n)?document.querySelector(n):n}const ld={emerald:{name:"Emerald",primary:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},accent:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#44403c",800:"#292524",900:"#1c1917"}},ocean:{name:"Ocean",primary:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},accent:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},secondary:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},dark:{700:"#334155",800:"#1e293b",900:"#0f172a"}},sunset:{name:"Sunset",primary:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},accent:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#44403c",800:"#292524",900:"#1c1917"}},royal:{name:"Royal",primary:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},accent:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},secondary:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},dark:{700:"#334155",800:"#1e293b",900:"#0f172a"}},ruby:{name:"Ruby",primary:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},accent:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#44403c",800:"#292524",900:"#1c1917"}},rose:{name:"Rose",primary:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},accent:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#44403c",800:"#292524",900:"#1c1917"}},goldenHour:{name:"Gold",primary:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},accent:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#44403c",800:"#292524",900:"#1c1917"}},moonlit:{name:"Silver",primary:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},accent:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#334155",800:"#1e293b",900:"#0f172a"}},sepia:{name:"Sepia",primary:{50:"#faf6f0",100:"#f0e6d8",200:"#e0ccb0",300:"#d0b28a",400:"#c09a66",500:"#a97f4d",600:"#8a6540",700:"#6d4f33",800:"#543c28",900:"#3d2c1e"},accent:{50:"#fdf6ec",100:"#f9e8d0",200:"#f0d0a0",300:"#e5b878",400:"#d9a055",500:"#c0853d",600:"#9c6830",700:"#7a5026",800:"#5c3c1e",900:"#422b16"},secondary:{50:"#faf6f0",100:"#f0e6d8",200:"#e0ccb0",300:"#d0b28a",400:"#c09a66",500:"#a97f4d",600:"#8a6540",700:"#6d4f33",800:"#543c28",900:"#3d2c1e"},dark:{700:"#6d4f33",800:"#543c28",900:"#3d2c1e"}}},gc=n=>{const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return e?`${parseInt(e[1],16)} ${parseInt(e[2],16)} ${parseInt(e[3],16)}`:"0 0 0"},ha=Ne("sunset"),L_=n=>{const e=ld[n];if(!e)return;const t=document.documentElement;Object.entries(e.primary).forEach(([i,r])=>{t.style.setProperty(`--color-primary-${i}`,gc(r))}),Object.entries(e.accent).forEach(([i,r])=>{t.style.setProperty(`--color-accent-${i}`,gc(r))}),Object.entries(e.secondary).forEach(([i,r])=>{t.style.setProperty(`--color-secondary-${i}`,gc(r))}),Object.entries(e.dark).forEach(([i,r])=>{t.style.setProperty(`--color-dark-${i}`,gc(r))})},yb=()=>{const n=localStorage.getItem("colorPalette");n&&ld[n]?ha.value=n:ha.value="sunset",L_(ha.value)};Ai(ha,n=>{L_(n),window.dispatchEvent(new CustomEvent("colorpalettechange"))});const bb=n=>{ld[n]&&(ha.value=n,localStorage.setItem("colorPalette",n))};yb();function Sb(){return{colorPalettes:ld,selectedPalette:ha,setPalette:bb}}function zr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function I_(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ci={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},zl={duration:.5,overwrite:!1,delay:0},xp,Rn,$t,Hi=1e8,zt=1/Hi,Hf=Math.PI*2,Mb=Hf/4,wb=0,U_=Math.sqrt,Eb=Math.cos,Tb=Math.sin,Mn=function(e){return typeof e=="string"},Jt=function(e){return typeof e=="function"},ss=function(e){return typeof e=="number"},vp=function(e){return typeof e>"u"},Cr=function(e){return typeof e=="object"},ci=function(e){return e!==!1},yp=function(){return typeof window<"u"},_c=function(e){return Jt(e)||Mn(e)},F_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Xn=Array.isArray,Ab=/random\([^)]+\)/g,Cb=/,\s*/g,V0=/(?:-?\.?\d|\.)+/gi,N_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,sa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ld=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,O_=/[+-]=-?[.\d]+/,Rb=/[^,'"\[\]\s]+/gi,Pb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Yt,ur,Gf,bp,Pi={},Iu={},k_,B_=function(e){return(Iu=Ta(e,Pi))&&pi},Sp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Vl=function(e,t){return!t&&console.warn(e)},z_=function(e,t){return e&&(Pi[e]=t)&&Iu&&(Iu[e]=t)||Pi},Hl=function(){return 0},Db={suppressEvents:!0,isStart:!0,kill:!1},su={suppressEvents:!0,kill:!1},Lb={suppressEvents:!0},Mp={},Ps=[],Wf={},V_,yi={},Id={},H0=30,ou=[],wp="",Ep=function(e){var t=e[0],i,r;if(Cr(t)||Jt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=ou.length;r--&&!ou[r].targetTest(t););i=ou[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new cx(e[r],i)))||e.splice(r,1);return e},So=function(e){return e._gsap||Ep(Gi(e))[0]._gsap},H_=function(e,t,i){return(i=e[t])&&Jt(i)?e[t]():vp(i)&&e.getAttribute&&e.getAttribute(t)||i},ui=function(e,t){return(e=e.split(",")).forEach(t)||e},tn=function(e){return Math.round(e*1e5)/1e5||0},jt=function(e){return Math.round(e*1e7)/1e7||0},pa=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},Ib=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Uu=function(){var e=Ps.length,t=Ps.slice(0),i,r;for(Wf={},Ps.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Tp=function(e){return!!(e._initted||e._startAt||e.add)},G_=function(e,t,i,r){Ps.length&&!Rn&&Uu(),e.render(t,i,!!(Rn&&t<0&&Tp(e))),Ps.length&&!Rn&&Uu()},W_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Rb).length<2?t:Mn(e)?e.trim():e},X_=function(e){return e},Di=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Ub=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ta=function(e,t){for(var i in t)e[i]=t[i];return e},G0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Cr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Fu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},yl=function(e){var t=e.parent||Yt,i=e.keyframes?Ub(Xn(e.keyframes)):Di;if(ci(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Fb=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},$_=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},cd=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ns=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Mo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Nb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Xf=function(e,t,i,r){return e._startAt&&(Rn?e._startAt.revert(su):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Ob=function n(e){return!e||e._ts&&n(e.parent)},W0=function(e){return e._repeat?Aa(e._tTime,e=e.duration()+e._rDelay)*e:0},Aa=function(e,t){var i=Math.floor(e=jt(e/t));return e&&i===e?i-1:i},Nu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ud=function(e){return e._end=jt(e._start+(e._tDur/Math.abs(e._ts||e._rts||zt)||0))},dd=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=jt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ud(e),i._dirty||Mo(i,e)),e},j_=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Nu(e.rawTime(),t),(!t._dur||sc(0,t.totalDuration(),i)-t._tTime>zt)&&t.render(i,!0)),Mo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-zt}},gr=function(e,t,i,r){return t.parent&&Ns(t),t._start=jt((ss(i)?i:i||e!==Yt?Fi(e,i,t):e._time)+t._delay),t._end=jt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),$_(e,t,"_first","_last",e._sort?"_start":0),$f(t)||(e._recent=t),r||j_(e,t),e._ts<0&&dd(e,e._tTime),e},Y_=function(e,t){return(Pi.ScrollTrigger||Sp("scrollTrigger",t))&&Pi.ScrollTrigger.create(t,e)},q_=function(e,t,i,r,s){if(Cp(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Rn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&V_!==Si.frame)return Ps.push(e),e._lazy=[s,r],1},kb=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},$f=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Bb=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&kb(e)&&!(!e._initted&&$f(e))||(e._ts<0||e._dp._ts<0)&&!$f(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=sc(0,e._tDur,t),u=Aa(l,a),e._yoyo&&u&1&&(o=1-o),u!==Aa(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Rn||r||e._zTime===zt||!t&&e._zTime){if(!e._initted&&q_(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?zt:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Xf(e,t,i,!0),e._onUpdate&&!i&&Ei(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ei(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ns(e,1),!i&&!Rn&&(Ei(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},zb=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ca=function(e,t,i,r){var s=e._repeat,o=jt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:jt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&dd(e,e._tTime=e._tDur*a),e.parent&&ud(e),i||Mo(e.parent,e),e},X0=function(e){return e instanceof li?Mo(e):Ca(e,e._dur)},Vb={_start:0,endTime:Hl,totalDuration:Hl},Fi=function n(e,t,i){var r=e.labels,s=e._recent||Vb,o=e.duration()>=Hi?s.endTime(!1):e._dur,a,l,c;return Mn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(Xn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},bl=function(e,t,i){var r=ss(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ci(l.vars.inherit)&&l.parent;o.immediateRender=ci(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new an(t[0],o,t[s+1])},Hs=function(e,t){return e||e===0?t(e):t},sc=function(e,t,i){return i<e?e:i>t?t:i},zn=function(e,t){return!Mn(e)||!(t=Pb.exec(e))?"":t[1]},Hb=function(e,t,i){return Hs(i,function(r){return sc(e,t,r)})},jf=[].slice,K_=function(e,t){return e&&Cr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Cr(e[0]))&&!e.nodeType&&e!==ur},Gb=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Mn(r)&&!t||K_(r,1)?(s=i).push.apply(s,Gi(r)):i.push(r)})||i},Gi=function(e,t,i){return $t&&!t&&$t.selector?$t.selector(e):Mn(e)&&!i&&(Gf||!Ra())?jf.call((t||bp).querySelectorAll(e),0):Xn(e)?Gb(e,i):K_(e)?jf.call(e,0):e?[e]:[]},Yf=function(e){return e=Gi(e)[0]||Vl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Gi(t,i.querySelectorAll?i:i===e?Vl("Invalid scope")||bp.createElement("div"):e)}},Z_=function(e){return e.sort(function(){return .5-Math.random()})},J_=function(e){if(Jt(e))return e;var t=Cr(e)?e:{each:e},i=wo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,d=r;return Mn(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],d=r[1]),function(f,h,g){var _=(g||t).length,p=o[_],m,y,E,x,R,A,C,v,T;if(!p){if(T=t.grid==="auto"?0:(t.grid||[1,Hi])[1],!T){for(C=-Hi;C<(C=g[T++].getBoundingClientRect().left)&&T<_;);T<_&&T--}for(p=o[_]=[],m=l?Math.min(T,_)*u-.5:r%T,y=T===Hi?0:l?_*d/T-.5:r/T|0,C=0,v=Hi,A=0;A<_;A++)E=A%T-m,x=y-(A/T|0),p[A]=R=c?Math.abs(c==="y"?x:E):U_(E*E+x*x),R>C&&(C=R),R<v&&(v=R);r==="random"&&Z_(p),p.max=C-v,p.min=v,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(T>_?_-1:c?c==="y"?_/T:T:Math.max(T,_/T))||0)*(r==="edges"?-1:1),p.b=_<0?s-_:s,p.u=zn(t.amount||t.each)||0,i=i&&_<0?nS(i):i}return _=(p[f]-p.min)/p.max||0,jt(p.b+(i?i(_):_)*p.v)+p.u}},qf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=jt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(ss(i)?0:zn(i))}},Q_=function(e,t){var i=Xn(e),r,s;return!i&&Cr(e)&&(r=i=e.radius||Hi,e.values?(e=Gi(e.values),(s=!ss(e[0]))&&(r*=r)):e=qf(e.increment)),Hs(t,i?Jt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Hi,u=0,d=e.length,f,h;d--;)s?(f=e[d].x-a,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-a),f<c&&(c=f,u=d);return u=!r||c<=r?e[u]:o,s||u===o||ss(o)?u:u+zn(o)}:qf(e))},ex=function(e,t,i,r){return Hs(Xn(e)?!t:i===!0?!!(i=0):!r,function(){return Xn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},Wb=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},Xb=function(e,t){return function(i){return e(parseFloat(i))+(t||zn(i))}},$b=function(e,t,i){return nx(e,t,0,1,i)},tx=function(e,t,i){return Hs(i,function(r){return e[~~t(r)]})},jb=function n(e,t,i){var r=t-e;return Xn(e)?tx(e,n(0,e.length),t):Hs(i,function(s){return(r+(s-e)%r)%r+e})},Yb=function n(e,t,i){var r=t-e,s=r*2;return Xn(e)?tx(e,n(0,e.length-1),t):Hs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Gl=function(e){return e.replace(Ab,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(Cb);return ex(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},nx=function(e,t,i,r,s){var o=t-e,a=r-i;return Hs(s,function(l){return i+((l-e)/o*a||0)})},qb=function n(e,t,i,r){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var o=Mn(e),a={},l,c,u,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Xn(e)&&!Xn(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(n(e[c-1],e[c]));d--,s=function(g){g*=d;var _=Math.min(f,~~g);return u[_](g-_)},i=t}else r||(e=Ta(Xn(e)?[]:{},e));if(!u){for(l in t)Ap.call(a,e,l,"get",t[l]);s=function(g){return Dp(g,a)||(o?e.p:e)}}}return Hs(i,s)},$0=function(e,t,i){var r=e.labels,s=Hi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ei=function(e,t,i){var r=e.vars,s=r[t],o=$t,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&Ps.length&&Uu(),a&&($t=a),u=l?s.apply(c,l):s.call(c),$t=o,u},rl=function(e){return Ns(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Rn),e.progress()<1&&Ei(e,"onInterrupt"),e},oa,ix=[],rx=function(e){if(e)if(e=!e.name&&e.default||e,yp()||e.headless){var t=e.name,i=Jt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Hl,render:Dp,add:Ap,kill:fS,modifier:dS,rawVars:0},o={targetTest:0,get:0,getSetter:Pp,aliases:{},register:0};if(Ra(),e!==r){if(yi[t])return;Di(r,Di(Fu(e,s),o)),Ta(r.prototype,Ta(s,Fu(e,o))),yi[r.prop=t]=r,e.targetTest&&(ou.push(r),Mp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}z_(t,r),e.register&&e.register(pi,r,di)}else ix.push(e)},Bt=255,sl={aqua:[0,Bt,Bt],lime:[0,Bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Bt],navy:[0,0,128],white:[Bt,Bt,Bt],olive:[128,128,0],yellow:[Bt,Bt,0],orange:[Bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Bt,0,0],pink:[Bt,192,203],cyan:[0,Bt,Bt],transparent:[Bt,Bt,Bt,0]},Ud=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Bt+.5|0},sx=function(e,t,i){var r=e?ss(e)?[e>>16,e>>8&Bt,e&Bt]:0:sl.black,s,o,a,l,c,u,d,f,h,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),sl[e])r=sl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Bt,r&Bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Bt,e&Bt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(V0),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Ud(l+1/3,s,o),r[1]=Ud(l,s,o),r[2]=Ud(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(N_),i&&r.length<4&&(r[3]=1),r}else r=e.match(V0)||sl.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Bt,o=r[1]/Bt,a=r[2]/Bt,d=Math.max(s,o,a),f=Math.min(s,o,a),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===s?(o-a)/h+(o<a?6:0):d===o?(a-s)/h+2:(s-o)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},ox=function(e){var t=[],i=[],r=-1;return e.split(Ds).forEach(function(s){var o=s.match(sa)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},j0=function(e,t,i){var r="",s=(e+r).match(Ds),o=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!s)return e;if(s=s.map(function(f){return(f=sx(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=ox(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Ds,"1").split(sa),d=c.length-1;a<d;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Ds),d=c.length-1;a<d;a++)r+=c[a]+s[a];return r+c[d]},Ds=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in sl)n+="|"+e+"\\b";return new RegExp(n+")","gi")})(),Kb=/hsl[a]?\(/,ax=function(e){var t=e.join(" "),i;if(Ds.lastIndex=0,Ds.test(t))return i=Kb.test(t),e[1]=j0(e[1],i),e[0]=j0(e[0],i,ox(e[1])),!0},Wl,Si=(function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,d,f,h,g=function _(p){var m=n()-r,y=p===!0,E,x,R,A;if((m>e||m<0)&&(i+=m-t),r+=m,R=r-i,E=R-o,(E>0||y)&&(A=++d.frame,f=R-d.time*1e3,d.time=R=R/1e3,o+=E+(E>=s?4:s-E),x=1),y||(l=c(_)),x)for(h=0;h<a.length;h++)a[h](R,f,A,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){k_&&(!Gf&&yp()&&(ur=Gf=window,bp=ur.document||{},Pi.gsap=pi,(ur.gsapVersions||(ur.gsapVersions=[])).push(pi.version),B_(Iu||ur.GreenSockGlobals||!ur.gsap&&ur||{}),ix.forEach(rx)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,o-d.time*1e3+1|0)},Wl=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Wl=0,c=Hl},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=d.time*1e3+s},add:function(p,m,y){var E=m?function(x,R,A,C){p(x,R,A,C),d.remove(E)}:p;return d.remove(p),a[y?"unshift":"push"](E),Ra(),E},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&h>=m&&h--},_listeners:a},d})(),Ra=function(){return!Wl&&Si.wake()},yt={},Zb=/^[\d.\-M][\d.\-,\s]/,Jb=/["']/g,Qb=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(Jb,"").trim():+c,r=l.substr(a+1).trim();return t},eS=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},tS=function(e){var t=(e+"").split("("),i=yt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Qb(t[1])]:eS(e).split(",").map(W_)):yt._CE&&Zb.test(e)?yt._CE("",e):i},nS=function(e){return function(t){return 1-e(1-t)}},wo=function(e,t){return e&&(Jt(e)?e:yt[e]||tS(e))||t},Io=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ui(e,function(a){yt[a]=Pi[a]=s,yt[o=a.toLowerCase()]=i;for(var l in s)yt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=yt[a+"."+l]=s[l]}),s},lx=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Fd=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Hf*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*Tb((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:lx(a);return s=Hf/s,l.config=function(c,u){return n(e,c,u)},l},Nd=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:lx(i);return r.config=function(s){return n(e,s)},r};ui("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Io(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});yt.Linear.easeNone=yt.none=yt.Linear.easeIn;Io("Elastic",Fd("in"),Fd("out"),Fd());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Io("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Io("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Io("Circ",function(n){return-(U_(1-n*n)-1)});Io("Sine",function(n){return n===1?1:-Eb(n*Mb)+1});Io("Back",Nd("in"),Nd("out"),Nd());yt.SteppedEase=yt.steps=Pi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-zt;return function(a){return((r*sc(0,o,a)|0)+s)*i}}};zl.ease=yt["quad.out"];ui("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return wp+=n+","+n+"Params,"});var cx=function(e,t){this.id=wb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:H_,this.set=t?t.getSetter:Pp},Xl=(function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ca(this,+t.duration,1,1),this.data=t.data,$t&&(this._ctx=$t,$t.data.push(this)),Wl||Si.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ca(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Ra(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(dd(this,i),!s._dp||s.parent||j_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&gr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===zt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),G_(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+W0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+W0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Aa(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-zt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Nu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-zt?0:this._rts,this.totalTime(sc(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),ud(this),Nb(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ra(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==zt&&(this._tTime-=zt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=jt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&gr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ci(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Nu(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Lb);var r=Rn;return Rn=i,Tp(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Rn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,X0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,X0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Fi(this,i),ci(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ci(r)),this._dur||(this._zTime=-zt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-zt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-zt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-zt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Jt(i)?i:X_,l=function(){var u=r.then;r.then=null,s&&s(),Jt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){rl(this)},n})();Di(Xl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-zt,_prom:0,_ps:!1,_rts:1});var li=(function(n){I_(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ci(i.sortChildren),Yt&&gr(i.parent||Yt,zr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Y_(zr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return bl(0,arguments,this),this},t.from=function(r,s,o){return bl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return bl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,yl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new an(r,s,Fi(this,o),1),this},t.call=function(r,s,o){return gr(this,an.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new an(r,o,Fi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,yl(o).immediateRender=ci(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,d){return a.startAt=o,yl(a).immediateRender=ci(a.immediateRender),this.staggerTo(r,s,a,l,c,u,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:jt(r),d=this._zTime<0!=r<0&&(this._initted||!c),f,h,g,_,p,m,y,E,x,R,A,C;if(this!==Yt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||d){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,x=this._start,E=this._ts,m=!E,d&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(f=jt(u%p),u===l?(_=this._repeat,f=c):(R=jt(u/p),_=~~R,_&&_===R&&(f=c,_--),f>c&&(f=c)),R=Aa(this._tTime,p),!a&&this._tTime&&R!==_&&this._tTime-R*p-this._dur<=0&&(R=_),A&&_&1&&(f=c-f,C=1),_!==R&&!this._lock){var v=A&&R&1,T=v===(A&&_&1);if(_<R&&(v=!v),a=v?0:u%c?c:u,this._lock=1,this.render(a||(C?0:jt(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Ei(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1,R=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=zb(this,jt(a),jt(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!R&&(Ei(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(h=this._first;h;){if(g=h._next,(h._act||f>=h._start)&&h._ts&&y!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,s,o),f!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=-zt);break}}h=g}else{h=this._last;for(var N=r<0?r:f;h;){if(g=h._prev,(h._act||N<=h._end)&&h._ts&&y!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(N-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(N-h._start)*h._ts,s,o||Rn&&Tp(h)),f!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=N?-zt:zt);break}}h=g}}if(y&&!s&&(this.pause(),y.render(f>=a?0:-zt)._zTime=f>=a?1:-1,this._ts))return this._start=x,ud(this),this.render(r,s,o);this._onUpdate&&!s&&Ei(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ns(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Ei(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(ss(s)||(s=Fi(this,s,r)),!(r instanceof Xl)){if(Xn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Mn(r))return this.addLabel(r,s);if(Jt(r))r=an.delayedCall(0,r);else return this}return this!==r?gr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Hi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof an?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Mn(r)?this.removeLabel(r):Jt(r)?this.killTweensOf(r):(r.parent===this&&cd(this,r),r===this._recent&&(this._recent=this._last),Mo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=jt(Si.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Fi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=an.delayedCall(0,s||Hl,o);return a.data="isPause",this._hasPause=1,gr(this,a,Fi(this,r))},t.removePause=function(r){var s=this._first;for(r=Fi(this,r);s;)s._start===r&&s.data==="isPause"&&Ns(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ws!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Gi(r),l=this._first,c=ss(s),u;l;)l instanceof an?Ib(l._targets,a)&&(c?(!ws||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Fi(o,r),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,g=an.to(o,Di({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||zt,onStart:function(){if(o.pause(),!h){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Ca(g,p,0,1).render(g._time,!0,!0),h=1}u&&u.apply(g,d||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Di({startAt:{time:Fi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),$0(this,Fi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),$0(this,Fi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+zt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=jt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Mo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Mo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Hi,c,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,gr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=jt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ca(o,o===Yt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Yt._ts&&(G_(Yt,Nu(r,Yt)),V_=Si.frame),Si.frame>=H0){H0+=Ci.autoSleep||120;var s=Yt._first;if((!s||!s._ts)&&Ci.autoSleep&&Si._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Si.sleep()}}},e})(Xl);Di(li.prototype,{_lock:0,_hasPause:0,_forcing:0});var iS=function(e,t,i,r,s,o,a){var l=new di(this._pt,e,t,0,1,mx,null,s),c=0,u=0,d,f,h,g,_,p,m,y;for(l.b=i,l.e=r,i+="",r+="",(m=~r.indexOf("random("))&&(r=Gl(r)),o&&(y=[i,r],o(y,e,t),i=y[0],r=y[1]),f=i.match(Ld)||[];d=Ld.exec(r);)g=d[0],_=r.substring(c,d.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?pa(p,g)-p:parseFloat(g)-p,m:h&&h<4?Math.round:0},c=Ld.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(O_.test(r)||m)&&(l.e=0),this._pt=l,l},Ap=function(e,t,i,r,s,o,a,l,c,u){Jt(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:Jt(d)?c?e[t.indexOf("set")||!Jt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,h=Jt(d)?c?lS:hx:Rp,g;if(Mn(r)&&(~r.indexOf("random(")&&(r=Gl(r)),r.charAt(1)==="="&&(g=pa(f,r)+(zn(f)||0),(g||g===0)&&(r=g))),!u||f!==r||Kf)return!isNaN(f*r)&&r!==""?(g=new di(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?uS:px,0,h),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!d&&!(t in e)&&Sp(t,r),iS.call(this,e,t,f,r,h,l||Ci.stringFilter,c))},rS=function(e,t,i,r,s){if(Jt(e)&&(e=Sl(e,s,t,i,r)),!Cr(e)||e.style&&e.nodeType||Xn(e)||F_(e))return Mn(e)?Sl(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Sl(e[a],s,t,i,r);return o},ux=function(e,t,i,r,s,o){var a,l,c,u;if(yi[e]&&(a=new yi[e]).init(s,a.rawVars?t[e]:rS(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new di(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==oa))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},ws,Kf,Cp=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,f=r.keyframes,h=r.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:p,E=e._overwrite==="auto"&&!xp,x=e.timeline,R=r.easeReverse||d,A,C,v,T,N,U,L,H,z,G,X,k,K;if(x&&(!f||!s)&&(s="none"),e._ease=wo(s,zl.ease),e._rEase=R&&(wo(R)||e._ease),e._from=!x&&!!r.runBackwards,e._from&&(e.ratio=1),!x||f&&!r.stagger){if(H=p[0]?So(p[0]).harness:0,k=H&&r[H.prop],A=Fu(r,Mp),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!h?_.render(-1,!0):_.revert(u&&g?su:Db),_._lazy=0),o){if(Ns(e._startAt=an.set(p,Di({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&ci(l),startAt:null,delay:0,onUpdate:c&&function(){return Ei(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Rn||!a&&!h)&&e._startAt.revert(su),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),v=Di({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ci(l),immediateRender:a,stagger:0,parent:m},A),k&&(v[H.prop]=k),Ns(e._startAt=an.set(p,v)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Rn?e._startAt.revert(su):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,zt,zt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ci(l)||l&&!g,C=0;C<p.length;C++){if(N=p[C],L=N._gsap||Ep(p)[C]._gsap,e._ptLookup[C]=G={},Wf[L.id]&&Ps.length&&Uu(),X=y===p?C:y.indexOf(N),H&&(z=new H).init(N,k||A,e,X,y)!==!1&&(e._pt=T=new di(e._pt,N,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(j){G[j]=T}),z.priority&&(U=1)),!H||k)for(v in A)yi[v]&&(z=ux(v,A,e,X,N,y))?z.priority&&(U=1):G[v]=T=Ap.call(e,N,v,"get",A[v],X,y,0,r.stringFilter);e._op&&e._op[C]&&e.kill(N,e._op[C]),E&&e._pt&&(ws=e,Yt.killTweensOf(N,G,e.globalTime(t)),K=!e.parent,ws=0),e._pt&&l&&(Wf[L.id]=1)}U&&gx(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!K,f&&t<=0&&x.render(Hi,!0,!0)},sS=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,h;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(u=f[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Kf=1,e.vars[t]="+=0",Cp(e,a),Kf=0,l?Vl(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,d.e&&(d.e=tn(i)+zn(d.e)),d.b&&(d.b=u.s+zn(d.b))},oS=function(e,t){var i=e[0]?So(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Ta({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},aS=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Xn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Sl=function(e,t,i,r,s){return Jt(e)?e.call(t,i,r,s):Mn(e)&&~e.indexOf("random(")?Gl(e):e},dx=wp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",fx={};ui(dx+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return fx[n]=1});var an=(function(n){I_(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:yl(r))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=r.parent||Yt,y=(Xn(i)||F_(i)?ss(i[0]):"length"in r)?[i]:Gi(i),E,x,R,A,C,v,T,N;if(a._targets=y.length?Ep(y):Vl("GSAP target "+i+" not found. https://gsap.com",!Ci.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,g||f||_c(c)||_c(u)){r=a.vars;var U=r.easeReverse||r.yoyoEase;if(E=a.timeline=new li({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:y}),E.kill(),E.parent=E._dp=zr(a),E._start=0,f||_c(c)||_c(u)){if(A=y.length,T=f&&J_(f),Cr(f))for(C in f)~dx.indexOf(C)&&(N||(N={}),N[C]=f[C]);for(x=0;x<A;x++)R=Fu(r,fx),R.stagger=0,U&&(R.easeReverse=U),N&&Ta(R,N),v=y[x],R.duration=+Sl(c,zr(a),x,v,y),R.delay=(+Sl(u,zr(a),x,v,y)||0)-a._delay,!f&&A===1&&R.delay&&(a._delay=u=R.delay,a._start+=u,R.delay=0),E.to(v,R,T?T(x,v,y):0),E._ease=yt.none;E.duration()?c=u=0:a.timeline=0}else if(g){yl(Di(E.vars.defaults,{ease:"none"})),E._ease=wo(g.ease||r.ease||"none");var L=0,H,z,G;if(Xn(g))g.forEach(function(X){return E.to(y,X,">")}),E.duration();else{R={};for(C in g)C==="ease"||C==="easeEach"||aS(C,g[C],R,g.easeEach);for(C in R)for(H=R[C].sort(function(X,k){return X.t-k.t}),L=0,x=0;x<H.length;x++)z=H[x],G={ease:z.e,duration:(z.t-(x?H[x-1].t:0))/100*c},G[C]=z.v,E.to(y,G,L),L+=G.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||a.duration(c=E.duration())}else a.timeline=0;return h===!0&&!xp&&(ws=zr(a),Yt.killTweensOf(y),ws=0),gr(m,zr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!c&&!g&&a._start===jt(m._time)&&ci(d)&&Ob(zr(a))&&m.data!=="nested")&&(a._tTime=-zt,a.render(Math.max(0,-u)||0)),p&&Y_(zr(a),p),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-zt&&!u?l:r<zt?0:r,f,h,g,_,p,m,y,E;if(!c)Bb(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,E=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(f=jt(d%_),d===l?(g=this._repeat,f=c):(p=jt(d/_),g=~~p,g&&g===p?(f=c,g--):f>c&&(f=c)),m=this._yoyo&&g&1,m&&(f=c-f),p=Aa(this._tTime,_),f===a&&!o&&this._initted&&g===p)return this._tTime=d,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(jt(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(q_(this,u?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var x=f<a;if(x!==this._inv){var R=x?a:c-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=R?(x?-1:1)/R:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(f/c);if(this._from&&(this.ratio=y=1-y),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!p&&(Ei(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(y,h.d),h=h._next;E&&E.render(r<0?r:E._dur*E._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Xf(this,r,s,o),Ei(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Ei(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Xf(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ns(this,1),!s&&!(u&&!a)&&(d||a||m)&&(Ei(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Wl||Si.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Cp(this,c),u=this._ease(c/this._dur),sS(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(dd(this,0),this.parent||$_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?rl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Rn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ws&&ws.vars.overwrite!==!0)._first||rl(this),this.parent&&o!==this.timeline.totalDuration()&&Ca(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Gi(r):a,c=this._ptLookup,u=this._pt,d,f,h,g,_,p,m;if((!s||s==="all")&&Fb(a,l))return s==="all"&&(this._pt=0),rl(this);for(d=this._op=this._op||[],s!=="all"&&(Mn(s)&&(_={},ui(s,function(y){return _[y]=1}),s=_),s=oS(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(d[m]=s,g=f,h={}):(h=d[m]=d[m]||{},g=s);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&cd(this,p,"_pt"),delete f[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&u&&rl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return bl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return bl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Yt.killTweensOf(r,s,o)},e})(Xl);Di(an.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ui("staggerTo,staggerFrom,staggerFromTo",function(n){an[n]=function(){var e=new li,t=jf.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Rp=function(e,t,i){return e[t]=i},hx=function(e,t,i){return e[t](i)},lS=function(e,t,i,r){return e[t](r.fp,i)},cS=function(e,t,i){return e.setAttribute(t,i)},Pp=function(e,t){return Jt(e[t])?hx:vp(e[t])&&e.setAttribute?cS:Rp},px=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},uS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},mx=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Dp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},dS=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},fS=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?cd(this,t,"_pt"):t.dep||(i=1),t=r;return!i},hS=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},gx=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},di=(function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||px,this.d=l||this,this.set=c||Rp,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=hS,this.m=i,this.mt=s,this.tween=r},n})();ui(wp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return Mp[n]=1});Pi.TweenMax=Pi.TweenLite=an;Pi.TimelineLite=Pi.TimelineMax=li;Yt=new li({sortChildren:!1,defaults:zl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ci.stringFilter=ax;var Eo=[],au={},pS=[],Y0=0,mS=0,Od=function(e){return(au[e]||pS).map(function(t){return t()})},Zf=function(){var e=Date.now(),t=[];e-Y0>2&&(Od("matchMediaInit"),Eo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=ur.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),Od("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Y0=e,Od("matchMedia"))},_x=(function(){function n(t,i){this.selector=i&&Yf(i),this.data=[],this._r=[],this.isReverted=!1,this.id=mS++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Jt(i)&&(s=r,r=i,i=Jt);var o=this,a=function(){var c=$t,u=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=Yf(s)),$t=o,d=r.apply(o,arguments),Jt(d)&&o._r.push(d),$t=c,o.selector=u,o.isReverted=!1,d};return o.last=a,i===Jt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=$t;$t=null,i(this),$t=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof an&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof li?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof an)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Eo.length;o--;)Eo[o].id===this.id&&Eo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n})(),gS=(function(){function n(t){this.contexts=[],this.scope=t,$t&&$t.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Cr(i)||(i={matches:i});var o=new _x(0,s||this.scope),a=o.conditions={},l,c,u;$t&&!o.selector&&(o.selector=$t.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=ur.matchMedia(i[c]),l&&(Eo.indexOf(o)<0&&Eo.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Zf):l.addEventListener("change",Zf)));return u&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n})(),Ou={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return rx(r)})},timeline:function(e){return new li(e)},getTweensOf:function(e,t){return Yt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Mn(e)&&(e=Gi(e)[0]);var s=So(e||{}).get,o=i?X_:W_;return i==="native"&&(i=""),e&&(t?o((yi[t]&&yi[t].get||s)(e,t,i,r)):function(a,l,c){return o((yi[a]&&yi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Gi(e),e.length>1){var r=e.map(function(u){return pi.quickSetter(u,t,i)}),s=r.length;return function(u){for(var d=s;d--;)r[d](u)}}e=e[0]||{};var o=yi[t],a=So(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var d=new o;oa._pt=0,d.init(e,i?u+i:u,oa,0,[e]),d.render(1,d),oa._pt&&Dp(1,oa)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=pi.to(e,Di((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=wo(e.ease,zl.ease)),G0(zl,e||{})},config:function(e){return G0(Ci,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!yi[a]&&!Pi[a]&&Vl(t+" effect requires "+a+" plugin.")}),Id[t]=function(a,l,c){return i(Gi(a),Di(l||{},s),c)},o&&(li.prototype[t]=function(a,l,c){return this.add(Id[t](a,Cr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){yt[e]=wo(t)},parseEase:function(e,t){return arguments.length?wo(e,t):yt},getById:function(e){return Yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new li(e),r,s;for(i.smoothChildTiming=ci(e.smoothChildTiming),Yt.remove(i),i._dp=0,i._time=i._tTime=Yt._time,r=Yt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof an&&r.vars.onComplete===r._targets[0]))&&gr(i,r,r._start-r._delay),r=s;return gr(Yt,i,0),i},context:function(e,t){return e?new _x(e,t):$t},matchMedia:function(e){return new gS(e)},matchMediaRefresh:function(){return Eo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Zf()},addEventListener:function(e,t){var i=au[e]||(au[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=au[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:jb,wrapYoyo:Yb,distribute:J_,random:ex,snap:Q_,normalize:$b,getUnit:zn,clamp:Hb,splitColor:sx,toArray:Gi,selector:Yf,mapRange:nx,pipe:Wb,unitize:Xb,interpolate:qb,shuffle:Z_},install:B_,effects:Id,ticker:Si,updateRoot:li.updateRoot,plugins:yi,globalTimeline:Yt,core:{PropTween:di,globals:z_,Tween:an,Timeline:li,Animation:Xl,getCache:So,_removeLinkedListItem:cd,reverting:function(){return Rn},context:function(e){return e&&$t&&($t.data.push(e),e._ctx=$t),$t},suppressOverwrites:function(e){return xp=e}}};ui("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Ou[n]=an[n]});Si.add(li.updateRoot);oa=Ou.to({},{duration:0});var _S=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},xS=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=_S(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},kd=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Mn(s)&&(l={},ui(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}xS(a,s)}}}},pi=Ou.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Rn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},kd("roundProps",qf),kd("modifiers"),kd("snap",Q_))||Ou;an.version=li.version=pi.version="3.15.0";k_=1;yp()&&Ra();yt.Power0;yt.Power1;yt.Power2;yt.Power3;yt.Power4;yt.Linear;yt.Quad;yt.Cubic;yt.Quart;yt.Quint;yt.Strong;yt.Elastic;yt.Back;yt.SteppedEase;yt.Bounce;yt.Sine;yt.Expo;yt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var q0,Es,ma,Lp,mo,K0,Ip,vS=function(){return typeof window<"u"},os={},io=180/Math.PI,ga=Math.PI/180,ko=Math.atan2,Z0=1e8,Up=/([A-Z])/g,yS=/(left|right|width|margin|padding|x)/i,bS=/[\s,\(]\S/,_r={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Jf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},SS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},MS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},wS=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ES=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},xx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},vx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},TS=function(e,t,i){return e.style[t]=i},AS=function(e,t,i){return e.style.setProperty(t,i)},CS=function(e,t,i){return e._gsap[t]=i},RS=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},PS=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},DS=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},qt="transform",fi=qt+"Origin",LS=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in os&&s){if(this.tfm=this.tfm||{},e!=="transform")e=_r[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Hr(r,a)}):this.tfm[e]=o.x?o[e]:Hr(r,e),e===fi&&(this.tfm.zOrigin=o.zOrigin);else return _r.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(qt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(fi,t,"")),e=qt}(s||t)&&this.props.push(e,t,s[e])},yx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},IS=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Up,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ip(),(!s||!s.isStart)&&!i[qt]&&(yx(i),r.zOrigin&&i[fi]&&(i[fi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},bx=function(e,t){var i={target:e,props:[],revert:IS,save:LS};return e._gsap||pi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Sx,Qf=function(e,t){var i=Es.createElementNS?Es.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Es.createElement(e);return i&&i.style?i:Es.createElement(e)},Ti=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Up,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Pa(t)||t,1)||""},J0="O,Moz,ms,Ms,Webkit".split(","),Pa=function(e,t,i){var r=t||mo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(J0[o]+e in s););return o<0?null:(o===3?"ms":o>=0?J0[o]:"")+e},eh=function(){vS()&&window.document&&(q0=window,Es=q0.document,ma=Es.documentElement,mo=Qf("div")||{style:{}},Qf("div"),qt=Pa(qt),fi=qt+"Origin",mo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Sx=!!Pa("perspective"),Ip=pi.core.reverting,Lp=1)},Q0=function(e){var t=e.ownerSVGElement,i=Qf("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),ma.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),ma.removeChild(i),s},em=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Mx=function(e){var t,i;try{t=e.getBBox()}catch{t=Q0(e),i=1}return t&&(t.width||t.height)||i||(t=Q0(e)),t&&!t.width&&!t.x&&!t.y?{x:+em(e,["x","cx","x1"])||0,y:+em(e,["y","cy","y1"])||0,width:0,height:0}:t},wx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Mx(e))},Os=function(e,t){if(t){var i=e.style,r;t in os&&t!==fi&&(t=qt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Up,"-$1").toLowerCase())):i.removeAttribute(t)}},Ts=function(e,t,i,r,s,o){var a=new di(e._pt,t,i,0,1,o?vx:xx);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},tm={deg:1,rad:1,turn:1},US={grid:1,flex:1},ks=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=mo.style,l=yS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",h=r==="%",g,_,p,m;if(r===o||!s||tm[r]||tm[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),m=e.getCTM&&wx(e),(h||o==="%")&&(os[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],tn(h?s/g*d:s/100*g);if(a[l?"width":"height"]=d+(f?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Es||!_.appendChild)&&(_=Es.body),p=_._gsap,p&&h&&p.width&&l&&p.time===Si.time&&!p.uncache)return tn(s/p.width*d);if(h&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=d+r,g=e[u],y?e.style[t]=y:Os(e,t)}else(h||o==="%")&&!US[Ti(_,"display")]&&(a.position=Ti(e,"position")),_===e&&(a.position="static"),_.appendChild(mo),g=mo[u],_.removeChild(mo),a.position="absolute";return l&&h&&(p=So(_),p.time=Si.time,p.width=_[u]),tn(f?g*s/d:g&&s?d/g*s:0)},Hr=function(e,t,i,r){var s;return Lp||eh(),t in _r&&t!=="transform"&&(t=_r[t],~t.indexOf(",")&&(t=t.split(",")[0])),os[t]&&t!=="transform"?(s=jl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Bu(Ti(e,fi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ku[t]&&ku[t](e,t,i)||Ti(e,t)||H_(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?ks(e,t,s,i)+i:s},FS=function(e,t,i,r){if(!i||i==="none"){var s=Pa(t,e,1),o=s&&Ti(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Ti(e,"borderTopColor"))}var a=new di(this._pt,e.style,t,0,1,mx),l=0,c=0,u,d,f,h,g,_,p,m,y,E,x,R;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Ti(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=Ti(e,t)||r,_?e.style[t]=_:Os(e,t)),u=[i,r],ax(u),i=u[0],r=u[1],f=i.match(sa)||[],R=r.match(sa)||[],R.length){for(;d=sa.exec(r);)p=d[0],y=r.substring(l,d.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(h=parseFloat(_)||0,x=_.substr((h+"").length),p.charAt(1)==="="&&(p=pa(h,p)+x),m=parseFloat(p),E=p.substr((m+"").length),l=sa.lastIndex-E.length,E||(E=E||Ci.units[t]||x,l===r.length&&(r+=E,a.e+=E)),x!==E&&(h=ks(e,t,_,E)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:h,c:m-h,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?vx:xx;return O_.test(r)&&(a.e=0),this._pt=a,a},nm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},NS=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=nm[i]||i,t[1]=nm[r]||r,t.join(" ")},OS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],os[a]&&(l=1,a=a==="transformOrigin"?fi:qt),Os(i,a);l&&(Os(i,qt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",jl(i,1),o.uncache=1,yx(r)))}},ku={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new di(e._pt,t,i,0,0,OS);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},$l=[1,0,0,1,0,0],Ex={},Tx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},im=function(e){var t=Ti(e,qt);return Tx(t)?$l:t.substr(7).match(N_).map(tn)},Fp=function(e,t){var i=e._gsap||So(e),r=e.style,s=im(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?$l:s):(s===$l&&!e.offsetParent&&e!==ma&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ma.appendChild(e)),s=im(e),l?r.display=l:Os(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ma.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},th=function(e,t,i,r,s,o){var a=e._gsap,l=s||Fp(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,h=l[0],g=l[1],_=l[2],p=l[3],m=l[4],y=l[5],E=t.split(" "),x=parseFloat(E[0])||0,R=parseFloat(E[1])||0,A,C,v,T;i?l!==$l&&(C=h*p-g*_)&&(v=x*(p/C)+R*(-_/C)+(_*y-p*m)/C,T=x*(-g/C)+R*(h/C)-(h*y-g*m)/C,x=v,R=T):(A=Mx(e),x=A.x+(~E[0].indexOf("%")?x/100*A.width:x),R=A.y+(~(E[1]||E[0]).indexOf("%")?R/100*A.height:R)),r||r!==!1&&a.smooth?(m=x-c,y=R-u,a.xOffset=d+(m*h+y*_)-m,a.yOffset=f+(m*g+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=R,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[fi]="0px 0px",o&&(Ts(o,a,"xOrigin",c,x),Ts(o,a,"yOrigin",u,R),Ts(o,a,"xOffset",d,a.xOffset),Ts(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+R)},jl=function(e,t){var i=e._gsap||new cx(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ti(e,fi)||"0",u,d,f,h,g,_,p,m,y,E,x,R,A,C,v,T,N,U,L,H,z,G,X,k,K,j,F,ae,pe,me,ve,Te;return u=d=f=_=p=m=y=E=x=0,h=g=1,i.svg=!!(e.getCTM&&wx(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[qt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[qt]!=="none"?l[qt]:"")),r.scale=r.rotate=r.translate="none"),C=Fp(e,i.svg),i.svg&&(i.uncache?(K=e.getBBox(),c=i.xOrigin-K.x+"px "+(i.yOrigin-K.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),th(e,k||c,!!k||i.originIsAbsolute,i.smooth!==!1,C)),R=i.xOrigin||0,A=i.yOrigin||0,C!==$l&&(U=C[0],L=C[1],H=C[2],z=C[3],u=G=C[4],d=X=C[5],C.length===6?(h=Math.sqrt(U*U+L*L),g=Math.sqrt(z*z+H*H),_=U||L?ko(L,U)*io:0,y=H||z?ko(H,z)*io+_:0,y&&(g*=Math.abs(Math.cos(y*ga))),i.svg&&(u-=R-(R*U+A*H),d-=A-(R*L+A*z))):(Te=C[6],me=C[7],F=C[8],ae=C[9],pe=C[10],ve=C[11],u=C[12],d=C[13],f=C[14],v=ko(Te,pe),p=v*io,v&&(T=Math.cos(-v),N=Math.sin(-v),k=G*T+F*N,K=X*T+ae*N,j=Te*T+pe*N,F=G*-N+F*T,ae=X*-N+ae*T,pe=Te*-N+pe*T,ve=me*-N+ve*T,G=k,X=K,Te=j),v=ko(-H,pe),m=v*io,v&&(T=Math.cos(-v),N=Math.sin(-v),k=U*T-F*N,K=L*T-ae*N,j=H*T-pe*N,ve=z*N+ve*T,U=k,L=K,H=j),v=ko(L,U),_=v*io,v&&(T=Math.cos(v),N=Math.sin(v),k=U*T+L*N,K=G*T+X*N,L=L*T-U*N,X=X*T-G*N,U=k,G=K),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),h=tn(Math.sqrt(U*U+L*L+H*H)),g=tn(Math.sqrt(X*X+Te*Te)),v=ko(G,X),y=Math.abs(v)>2e-4?v*io:0,x=ve?1/(ve<0?-ve:ve):0),i.svg&&(k=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Tx(Ti(e,qt)),k&&e.setAttribute("transform",k))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(h*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=tn(h),i.scaleY=tn(g),i.rotation=tn(_)+a,i.rotationX=tn(p)+a,i.rotationY=tn(m)+a,i.skewX=y+a,i.skewY=E+a,i.transformPerspective=x+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[fi]=Bu(c)),i.xOffset=i.yOffset=0,i.force3D=Ci.force3D,i.renderTransform=i.svg?BS:Sx?Ax:kS,i.uncache=0,i},Bu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Bd=function(e,t,i){var r=zn(t);return tn(parseFloat(t)+parseFloat(ks(e,"x",i+"px",r)))+r},kS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ax(e,t)},Ys="0deg",Wa="0px",qs=") ",Ax=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,d=i.rotationX,f=i.skewX,h=i.skewY,g=i.scaleX,_=i.scaleY,p=i.transformPerspective,m=i.force3D,y=i.target,E=i.zOrigin,x="",R=m==="auto"&&e&&e!==1||m===!0;if(E&&(d!==Ys||u!==Ys)){var A=parseFloat(u)*ga,C=Math.sin(A),v=Math.cos(A),T;A=parseFloat(d)*ga,T=Math.cos(A),o=Bd(y,o,C*T*-E),a=Bd(y,a,-Math.sin(A)*-E),l=Bd(y,l,v*T*-E+E)}p!==Wa&&(x+="perspective("+p+qs),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(R||o!==Wa||a!==Wa||l!==Wa)&&(x+=l!==Wa||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+qs),c!==Ys&&(x+="rotate("+c+qs),u!==Ys&&(x+="rotateY("+u+qs),d!==Ys&&(x+="rotateX("+d+qs),(f!==Ys||h!==Ys)&&(x+="skew("+f+", "+h+qs),(g!==1||_!==1)&&(x+="scale("+g+", "+_+qs),y.style[qt]=x||"translate(0, 0)"},BS=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,d=i.scaleX,f=i.scaleY,h=i.target,g=i.xOrigin,_=i.yOrigin,p=i.xOffset,m=i.yOffset,y=i.forceCSS,E=parseFloat(o),x=parseFloat(a),R,A,C,v,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ga,c*=ga,R=Math.cos(l)*d,A=Math.sin(l)*d,C=Math.sin(l-c)*-f,v=Math.cos(l-c)*f,c&&(u*=ga,T=Math.tan(c-u),T=Math.sqrt(1+T*T),C*=T,v*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),R*=T,A*=T)),R=tn(R),A=tn(A),C=tn(C),v=tn(v)):(R=d,v=f,A=C=0),(E&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(E=ks(h,"x",o,"px"),x=ks(h,"y",a,"px")),(g||_||p||m)&&(E=tn(E+g-(g*R+_*C)+p),x=tn(x+_-(g*A+_*v)+m)),(r||s)&&(T=h.getBBox(),E=tn(E+r/100*T.width),x=tn(x+s/100*T.height)),T="matrix("+R+","+A+","+C+","+v+","+E+","+x+")",h.setAttribute("transform",T),y&&(h.style[qt]=T)},zS=function(e,t,i,r,s){var o=360,a=Mn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?io:1),c=l-r,u=r+c+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*Z0)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*Z0)%o-~~(c/o)*o)),e._pt=f=new di(e._pt,t,i,r,c,SS),f.e=u,f.u="deg",e._props.push(i),f},rm=function(e,t){for(var i in t)e[i]=t[i];return e},VS=function(e,t,i){var r=rm({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,d,f,h,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[qt]=t,a=jl(i,1),Os(i,qt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[qt],o[qt]=t,a=jl(i,1),o[qt]=c);for(l in os)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(h=zn(c),g=zn(u),d=h!==g?ks(i,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new di(e._pt,a,l,d,f-d,Jf),e._pt.u=g||0,e._props.push(l));rm(a,r)};ui("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});ku[e>1?"border"+n:n]=function(a,l,c,u,d){var f,h;if(arguments.length<4)return f=o.map(function(g){return Hr(a,g,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},o.forEach(function(g,_){return h[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,h,d)}});var Cx={name:"css",register:eh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,d,f,h,g,_,p,m,y,E,x,R,A,C,v,T;Lp||eh(),this.styles=this.styles||bx(e),v=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(yi[_]&&ux(_,t,i,r,e,s)))){if(h=typeof u,g=ku[_],h==="function"&&(u=u.call(i,r,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Gl(u)),g)g(this,e,_,u,i)&&(C=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Ds.lastIndex=0,Ds.test(c)||(p=zn(c),m=zn(u),m?p!==m&&(c=ks(e,_,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),v.push(_,0,a[_]);else if(h!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],Mn(c)&&~c.indexOf("random(")&&(c=Gl(c)),zn(c+"")||c==="auto"||(c+=Ci.units[_]||zn(Hr(e,_))||""),(c+"").charAt(1)==="="&&(c=Hr(e,_))):c=Hr(e,_),f=parseFloat(c),y=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),d=parseFloat(u),_ in _r&&(_==="autoAlpha"&&(f===1&&Hr(e,"visibility")==="hidden"&&d&&(f=0),v.push("visibility",0,a.visibility),Ts(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=_r[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in os,E){if(this.styles.save(_),T=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=Ti(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var N=e.style.perspective;e.style.perspective=u,u=Ti(e,"perspective"),N?e.style.perspective=N:Os(e,"perspective")}d=parseFloat(u)}if(x||(R=e._gsap,R.renderTransform&&!t.parseTransform||jl(e,t.parseTransform),A=t.smoothOrigin!==!1&&R.smooth,x=this._pt=new di(this._pt,a,qt,0,1,R.renderTransform,R,0,-1),x.dep=1),_==="scale")this._pt=new di(this._pt,R,"scaleY",R.scaleY,(y?pa(R.scaleY,y+d):d)-R.scaleY||0,Jf),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(fi,0,a[fi]),u=NS(u),R.svg?th(e,u,0,A,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==R.zOrigin&&Ts(this,R,"zOrigin",R.zOrigin,m),Ts(this,a,_,Bu(c),Bu(u)));continue}else if(_==="svgOrigin"){th(e,u,1,A,0,this);continue}else if(_ in Ex){zS(this,R,_,f,y?pa(f,y+u):u);continue}else if(_==="smoothOrigin"){Ts(this,R,"smooth",R.smooth,u);continue}else if(_==="force3D"){R[_]=u;continue}else if(_==="transform"){VS(this,u,e);continue}}else _ in a||(_=Pa(_)||_);if(E||(d||d===0)&&(f||f===0)&&!bS.test(u)&&_ in a)p=(c+"").substr((f+"").length),d||(d=0),m=zn(u)||(_ in Ci.units?Ci.units[_]:p),p!==m&&(f=ks(e,_,c,m)),this._pt=new di(this._pt,E?R:a,_,f,(y?pa(f,y+d):d)-f,!E&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?ES:Jf),this._pt.u=m||0,E&&T!==u?(this._pt.b=c,this._pt.e=T,this._pt.r=wS):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=MS);else if(_ in a)FS.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,r,s);else if(_!=="parseTransform"){Sp(_,u);continue}E||(_ in a?v.push(_,0,a[_]):typeof e[_]=="function"?v.push(_,2,e[_]()):v.push(_,1,c||e[_])),o.push(_)}}C&&gx(this)},render:function(e,t){if(t.tween._time||!Ip())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Hr,aliases:_r,getSetter:function(e,t,i){var r=_r[t];return r&&r.indexOf(",")<0&&(t=r),t in os&&t!==fi&&(e._gsap.x||Hr(e,"x"))?i&&K0===i?t==="scale"?RS:CS:(K0=i||{})&&(t==="scale"?PS:DS):e.style&&!vp(e.style[t])?TS:~t.indexOf("-")?AS:Pp(e,t)},core:{_removeProperty:Os,_getMatrix:Fp}};pi.utils.checkPrefix=Pa;pi.core.getStyleSaver=bx;(function(n,e,t,i){var r=ui(n+","+e+","+t,function(s){os[s]=1});ui(e,function(s){Ci.units[s]="deg",Ex[s]=1}),_r[r[13]]=n+","+e,ui(i,function(s){var o=s.split(":");_r[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ui("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ci.units[n]="px"});pi.registerPlugin(Cx);var pt=pi.registerPlugin(Cx)||pi;pt.core.Tween;const qr=Ne(!0),Rx=()=>{qr.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},HS=()=>{const n=localStorage.getItem("theme");n==="light"?qr.value=!1:qr.value=!0,Rx()};Ai(qr,()=>{Rx()});const GS=()=>{qr.value=!qr.value,localStorage.setItem("theme",qr.value?"dark":"light")};HS();function Np(){return{isDark:qr,toggleTheme:GS}}const _a=Ne(!1),WS=()=>{localStorage.getItem("mouseTrail")==="enabled"?_a.value=!0:_a.value=!1},XS=()=>{_a.value=!_a.value,localStorage.setItem("mouseTrail",_a.value?"enabled":"disabled")};WS();function Px(){return{isMouseTrailEnabled:_a,toggleMouseTrail:XS}}function $S({elements:n,interval:e=150}){const{isDark:t}=Np(),i=Ne({});n.forEach(({key:l})=>{i.value[l]=!1});let r=null;const s=({r:l,g:c,b:u})=>(.299*l+.587*c+.114*u)/255,o=l=>{var h;if(!l||!((h=window.__blobSampler)!=null&&h.sampleScreenPixel))return null;const c=l.getBoundingClientRect();if(c.width===0||c.height===0)return null;const u=[{x:c.left+c.width*.5,y:c.top+c.height*.5},{x:c.left+c.width*.3,y:c.top+c.height*.3},{x:c.left+c.width*.7,y:c.top+c.height*.3},{x:c.left+c.width*.3,y:c.top+c.height*.7},{x:c.left+c.width*.7,y:c.top+c.height*.7}];let d=0,f=0;for(const g of u){const _=window.__blobSampler.sampleScreenPixel(g.x,g.y);_&&_.a>0&&(d+=s(_),f++)}return f===0?null:d/f},a=()=>{if(t.value)return;const l={};let c=!1;for(const{key:u,el:d}of n){const f=o(d.value);if(f===null)continue;const h=f<.5;i.value[u]!==h&&(l[u]=h,c=!0)}c&&(i.value={...i.value,...l})};return Pn(()=>{setTimeout(a,300),r=setInterval(a,e)}),$n(()=>{r&&clearInterval(r)}),Ai(t,()=>{setTimeout(a,100)}),{isDarkBackground:i}}const jS={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},YS={class:"flex items-center justify-between h-16"},qS=["href","onClick"],KS=["aria-expanded"],ZS={key:0,class:"settings-dropdown absolute right-0 mt-2 w-64 rounded-xl bg-dark-800 border border-dark-700 shadow-2xl light:bg-white light:border-secondary-200 light:shadow-secondary-200/50 overflow-hidden"},JS={class:"px-4 py-3 flex items-center justify-between hover:bg-dark-700/50 light:hover:bg-secondary-50 transition-colors duration-200"},QS={class:"flex items-center space-x-3"},eM={key:0,class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},tM={key:1,class:"w-4 h-4 text-primary-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},nM=["aria-label"],iM={class:"px-4 py-3 flex items-center justify-between hover:bg-dark-700/50 light:hover:bg-secondary-50 transition-colors duration-200"},rM={class:"flex items-center space-x-3"},sM={class:"text-sm text-secondary-300 light:text-secondary-600"},oM=["aria-label"],aM={class:"px-4 py-3 border-t border-dark-700 light:border-secondary-200"},lM={class:"grid grid-cols-3 gap-2"},cM=["onClick","aria-label","aria-pressed"],uM={class:"flex space-x-0.5"},dM={key:0,class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},fM={key:1,class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},hM={class:"px-4 py-3 space-y-2"},pM=["href","onClick"],mM={class:"pt-2 border-t border-dark-700 light:border-secondary-200"},gM={class:"flex items-center justify-between py-2"},_M={class:"flex items-center space-x-3"},xM={key:0,class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},vM={key:1,class:"w-4 h-4 text-primary-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},yM=["aria-label"],bM={class:"flex items-center justify-between py-2"},SM={class:"flex items-center space-x-3"},MM={class:"text-sm text-secondary-300 light:text-secondary-600"},wM=["aria-label"],EM={class:"py-2"},TM={class:"grid grid-cols-3 gap-2"},AM=["onClick","aria-label","aria-pressed"],CM={class:"flex space-x-0.5"},RM={__name:"NavBar",setup(n){const e=Ne(!1),t=Ne(!1),i=Ne(!1),r=Ne(null),s=Ne(null),o=Ne(null),a=Ne(null),l=Ne(!1);typeof window<"u"&&(l.value=window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window);const{isDark:c,toggleTheme:u}=Np(),{isMouseTrailEnabled:d,toggleMouseTrail:f}=Px(),{colorPalettes:h,selectedPalette:g,setPalette:_}=Sb(),{isDarkBackground:p}=$S({elements:[{key:"nav",el:a}]}),m=[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Tech Stack",href:"#tech-stack"},{label:"Projects",href:"#projects"}],y=()=>{e.value=window.scrollY>50},E=R=>{R.preventDefault(),t.value=!1,window.scrollTo({top:0,behavior:"smooth"})},x=R=>{o.value&&!o.value.contains(R.target)&&(i.value=!1)};return Pn(()=>{window.addEventListener("scroll",y),document.addEventListener("click",x),pt.fromTo(r.value,{y:-80,opacity:0},{y:0,opacity:1,duration:.8,ease:"power3.out",delay:.2,clearProps:"all"})}),$n(()=>{window.removeEventListener("scroll",y),document.removeEventListener("click",x)}),Ai(t,async R=>{await rs(),s.value&&(R?(pt.fromTo(s.value,{height:0,opacity:0},{height:"auto",opacity:1,duration:.4,ease:"power2.out"}),pt.from(s.value.querySelectorAll("a"),{x:-20,opacity:0,stagger:.08,duration:.3,ease:"power2.out"})):pt.to(s.value,{height:0,opacity:0,duration:.3,ease:"power2.in"}))}),Ai(i,async R=>{var C;await rs();const A=(C=o.value)==null?void 0:C.querySelector(".settings-dropdown");A&&(R?pt.fromTo(A,{opacity:0,y:-10,scale:.95},{opacity:1,y:0,scale:1,duration:.25,ease:"power2.out"}):pt.to(A,{opacity:0,y:-10,scale:.95,duration:.2,ease:"power2.in"}))}),(R,A)=>(he(),ge("nav",{ref_key:"navRef",ref:r,class:at(["fixed top-0 left-0 right-0 z-50 transition-colors duration-300",e.value?"bg-dark-900/95 backdrop-blur-md shadow-lg light:bg-white/95 light:shadow-secondary-200":"bg-transparent"])},[b("div",jS,[b("div",YS,[b("a",{href:"#home",onClick:E,class:"text-xl font-bold text-white light:text-secondary-900 group transition-colors duration-300"},[...A[7]||(A[7]=[b("span",{class:"text-primary-500"},"<",-1),Fs("KPC",-1),b("span",{class:"text-primary-500"},"/>",-1)])]),b("div",{ref_key:"navLinksRef",ref:a,class:"hidden md:flex items-center space-x-8"},[(he(),ge(Ke,null,it(m,C=>b("a",{key:C.href,href:C.href,onClick:v=>C.href==="#home"?E(v):null,class:"text-secondary-300 whitespace-nowrap hover:text-primary-400 light:text-black transition-colors duration-200 text-sm font-medium relative group"},[Fs(Se(C.label)+" ",1),A[8]||(A[8]=b("span",{class:"absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"},null,-1))],8,qS)),64)),A[16]||(A[16]=b("a",{href:"#contact",class:"bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"}," Hire Me ",-1)),b("div",{ref_key:"settingsRef",ref:o,class:"relative"},[b("button",{onClick:A[0]||(A[0]=po(C=>i.value=!i.value,["stop"])),class:"p-2 rounded-lg light:text-black text-secondary-300 hover:text-primary-400 hover:bg-secondary-800/50 light:hover:text-primary-600 light:hover:bg-secondary-100 transition-all duration-300 focus:outline-none","aria-label":"Settings","aria-expanded":i.value},[(he(),ge("svg",{class:at(["w-5 h-5",{"rotate-90 transition-transform duration-300":i.value}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...A[9]||(A[9]=[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"},null,-1),b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"},null,-1)])],2))],8,KS),i.value?(he(),ge("div",ZS,[A[15]||(A[15]=b("div",{class:"px-4 py-3 border-b border-dark-700 light:border-secondary-200"},[b("p",{class:"text-sm font-semibold text-white light:text-secondary-900"},"Settings")],-1)),b("div",JS,[b("div",QS,[xt(c)?(he(),ge("svg",eM,[...A[10]||(A[10]=[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1)])])):(he(),ge("svg",tM,[...A[11]||(A[11]=[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)])])),A[12]||(A[12]=b("span",{class:"text-sm text-secondary-300 light:text-secondary-600"},"Night Mode",-1))]),b("button",{onClick:A[1]||(A[1]=(...C)=>xt(u)&&xt(u)(...C)),class:at(["relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none",xt(c)?"bg-primary-500":"bg-secondary-300 light:bg-secondary-300"]),"aria-label":xt(c)?"Disable night mode":"Enable night mode"},[b("span",{class:at(["absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300",xt(c)?"left-5":"left-0.5"])},null,2)],10,nM)]),b("div",iM,[b("div",rM,[A[13]||(A[13]=b("svg",{class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"})],-1)),b("span",sM,Se(l.value?"Swipe Animation":"Mouse Animation"),1)]),b("button",{onClick:A[2]||(A[2]=(...C)=>xt(f)&&xt(f)(...C)),class:at(["relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none",xt(d)?"bg-primary-500":"bg-secondary-300 light:bg-secondary-300"]),"aria-label":xt(d)?"Disable mouse animation":"Enable mouse animation"},[b("span",{class:at(["absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300",xt(d)?"left-5":"left-0.5"])},null,2)],10,oM)]),b("div",aM,[A[14]||(A[14]=b("div",{class:"flex items-center space-x-3 mb-2"},[b("svg",{class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"})]),b("span",{class:"text-sm text-secondary-300 light:text-secondary-600"},"Color Palette")],-1)),b("div",lM,[(he(!0),ge(Ke,null,it(xt(h),(C,v)=>(he(),ge("button",{key:v,onClick:T=>xt(_)(v),class:at(["flex flex-col items-center gap-1 p-2 rounded-lg border transition-all duration-200 focus:outline-none",xt(g)===v?"border-primary-500 bg-primary-500/10 light:bg-primary-50":"border-dark-700 hover:border-primary-400 light:border-secondary-200 light:hover:border-primary-400"]),"aria-label":`Use ${C.name} color palette`,"aria-pressed":xt(g)===v},[b("span",uM,[b("span",{class:"w-3 h-3 rounded-full",style:Tn({backgroundColor:C.primary[500]})},null,4),b("span",{class:"w-3 h-3 rounded-full",style:Tn({backgroundColor:C.accent[500]})},null,4),b("span",{class:"w-3 h-3 rounded-full",style:Tn({backgroundColor:C.secondary[500]})},null,4)]),b("span",{class:at(["text-[10px] font-medium",xt(g)===v?"text-primary-400 light:text-primary-600":"text-secondary-400 light:text-secondary-500"])},Se(C.name),3)],10,cM))),128))])])])):Bn("",!0)],512)],512),b("button",{onClick:A[3]||(A[3]=C=>t.value=!t.value),class:at(["md:hidden text-secondary-300 hover:text-white light:text-secondary-600 light:hover:text-secondary-900 focus:outline-none transition-colors duration-300",!e.value&&xt(p).nav?"light:text-white light:hover:text-secondary-900":"light:text-secondary-600 light:hover:text-secondary-900"]),"aria-label":"Toggle menu"},[t.value?(he(),ge("svg",fM,[...A[18]||(A[18]=[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)])])):(he(),ge("svg",dM,[...A[17]||(A[17]=[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)])]))],2)])]),t.value?(he(),ge("div",{key:0,ref_key:"mobileMenuRef",ref:s,class:"md:hidden bg-dark-800 border-t border-dark-700 light:bg-white light:border-secondary-200 overflow-hidden"},[b("div",hM,[(he(),ge(Ke,null,it(m,C=>b("a",{key:C.href,href:C.href,onClick:v=>C.href==="#home"?E(v):t.value=!1,class:"block text-secondary-300 hover:text-primary-400 light:text-secondary-600 light:hover:text-primary-600 transition-colors duration-200 py-2 text-sm font-medium"},Se(C.label),9,pM)),64)),b("a",{href:"#contact",onClick:A[4]||(A[4]=C=>t.value=!1),class:"block text-secondary-300 hover:text-primary-400 light:text-secondary-600 light:hover:text-primary-600 transition-colors duration-200 py-2 text-sm font-medium"}," Hire Me "),b("div",mM,[A[24]||(A[24]=b("p",{class:"text-xs font-semibold text-secondary-500 light:text-secondary-400 uppercase tracking-wider mb-2"},"Settings",-1)),b("div",gM,[b("div",_M,[xt(c)?(he(),ge("svg",xM,[...A[19]||(A[19]=[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1)])])):(he(),ge("svg",vM,[...A[20]||(A[20]=[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)])])),A[21]||(A[21]=b("span",{class:"text-sm text-secondary-300 light:text-secondary-600"},"Night Mode",-1))]),b("button",{onClick:A[5]||(A[5]=(...C)=>xt(u)&&xt(u)(...C)),class:at(["relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none",xt(c)?"bg-primary-500":"bg-secondary-300 light:bg-secondary-300"]),"aria-label":xt(c)?"Disable night mode":"Enable night mode"},[b("span",{class:at(["absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300",xt(c)?"left-5":"left-0.5"])},null,2)],10,yM)]),b("div",bM,[b("div",SM,[A[22]||(A[22]=b("svg",{class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"})],-1)),b("span",MM,Se(l.value?"Swipe Animation":"Mouse Animation"),1)]),b("button",{onClick:A[6]||(A[6]=(...C)=>xt(f)&&xt(f)(...C)),class:at(["relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none",xt(d)?"bg-primary-500":"bg-secondary-300 light:bg-secondary-300"]),"aria-label":xt(d)?"Disable mouse animation":"Enable mouse animation"},[b("span",{class:at(["absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300",xt(d)?"left-5":"left-0.5"])},null,2)],10,wM)]),b("div",EM,[A[23]||(A[23]=b("div",{class:"flex items-center space-x-3 mb-2"},[b("svg",{class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"})]),b("span",{class:"text-sm text-secondary-300 light:text-secondary-600"},"Color Palette")],-1)),b("div",TM,[(he(!0),ge(Ke,null,it(xt(h),(C,v)=>(he(),ge("button",{key:v,onClick:T=>xt(_)(v),class:at(["flex flex-col items-center gap-1 p-2 rounded-lg border transition-all duration-200 focus:outline-none",xt(g)===v?"border-primary-500 bg-primary-500/10 light:bg-primary-50":"border-dark-700 hover:border-primary-400 light:border-secondary-200 light:hover:border-primary-400"]),"aria-label":`Use ${C.name} color palette`,"aria-pressed":xt(g)===v},[b("span",CM,[b("span",{class:"w-3 h-3 rounded-full",style:Tn({backgroundColor:C.primary[500]})},null,4),b("span",{class:"w-3 h-3 rounded-full",style:Tn({backgroundColor:C.accent[500]})},null,4),b("span",{class:"w-3 h-3 rounded-full",style:Tn({backgroundColor:C.secondary[500]})},null,4)]),b("span",{class:at(["text-[10px] font-medium",xt(g)===v?"text-primary-400 light:text-primary-600":"text-secondary-400 light:text-secondary-500"])},Se(C.name),3)],10,AM))),128))])])])])],512)):Bn("",!0)],2))}};function PM(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function DM(n,e,t){return e&&PM(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var An,lu,Mi,As,Cs,xa,Dx,ro,va,Lx,jr,Zi,Ix,Ux=function(){return An||typeof window<"u"&&(An=window.gsap)&&An.registerPlugin&&An},Fx=1,aa=[],_t=[],Mr=[],Ml=Date.now,nh=function(e,t){return t},LM=function(){var e=va.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,_t),r.push.apply(r,Mr),_t=i,Mr=r,nh=function(o,a){return t[o](a)}},Ls=function(e,t){return~Mr.indexOf(e)&&Mr[Mr.indexOf(e)+1][t]},wl=function(e){return!!~Lx.indexOf(e)},qn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},jn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},xc="scrollLeft",vc="scrollTop",ih=function(){return jr&&jr.isPressed||_t.cache++},zu=function(e,t){var i=function r(s){if(s||s===0){Fx&&(Mi.history.scrollRestoration="manual");var o=jr&&jr.isPressed;s=r.v=Math.round(s)||(jr&&jr.iOS?1:0),e(s),r.cacheID=_t.cache,o&&nh("ss",s)}else(t||_t.cache!==r.cacheID||nh("ref"))&&(r.cacheID=_t.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},ii={s:xc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:zu(function(n){return arguments.length?Mi.scrollTo(n,pn.sc()):Mi.pageXOffset||As[xc]||Cs[xc]||xa[xc]||0})},pn={s:vc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ii,sc:zu(function(n){return arguments.length?Mi.scrollTo(ii.sc(),n):Mi.pageYOffset||As[vc]||Cs[vc]||xa[vc]||0})},ai=function(e,t){return(t&&t._ctx&&t._ctx.selector||An.utils.toArray)(e)[0]||(typeof e=="string"&&An.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},IM=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Bs=function(e,t){var i=t.s,r=t.sc;wl(e)&&(e=As.scrollingElement||Cs);var s=_t.indexOf(e),o=r===pn.sc?1:2;!~s&&(s=_t.push(e)-1),_t[s+o]||qn(e,"scroll",ih);var a=_t[s+o],l=a||(_t[s+o]=zu(Ls(e,i),!0)||(wl(e)?r:zu(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=An.getProperty(e,"scrollBehavior")==="smooth"),l},rh=function(e,t,i){var r=e,s=e,o=Ml(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var p=Ml();_||p-o>l?(s=r,r=g,a=o,o=p):i?r+=g:r=s+(g-s)/(p-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},f=function(g){var _=a,p=s,m=Ml();return(g||g===0)&&g!==r&&u(g),o===a||m-a>c?0:(r+(i?p:-p))/((i?m:o)-_)*1e3};return{update:u,reset:d,getVelocity:f}},Xa=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},sm=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},Nx=function(){va=An.core.globals().ScrollTrigger,va&&va.core&&LM()},Ox=function(e){return An=e||Ux(),!lu&&An&&typeof document<"u"&&document.body&&(Mi=window,As=document,Cs=As.documentElement,xa=As.body,Lx=[Mi,As,Cs,xa],An.utils.clamp,Ix=An.core.context||function(){},ro="onpointerenter"in xa?"pointer":"mouse",Dx=rn.isTouch=Mi.matchMedia&&Mi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Mi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Zi=rn.eventTypes=("ontouchstart"in Cs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Cs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Fx=0},500),lu=1),va||Nx(),lu};ii.op=pn;_t.cache=0;var rn=(function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){lu||Ox(An)||console.warn("Please gsap.registerPlugin(Observer)"),va||Nx();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,d=i.onStop,f=i.onStopDelay,h=i.ignore,g=i.wheelSpeed,_=i.event,p=i.onDragStart,m=i.onDragEnd,y=i.onDrag,E=i.onPress,x=i.onRelease,R=i.onRight,A=i.onLeft,C=i.onUp,v=i.onDown,T=i.onChangeX,N=i.onChangeY,U=i.onChange,L=i.onToggleX,H=i.onToggleY,z=i.onHover,G=i.onHoverEnd,X=i.onMove,k=i.ignoreCheck,K=i.isNormalizer,j=i.onGestureStart,F=i.onGestureEnd,ae=i.onWheel,pe=i.onEnable,me=i.onDisable,ve=i.onClick,Te=i.scrollSpeed,J=i.capture,ue=i.allowClicks,oe=i.lockAxis,Re=i.onLockAxis;this.target=a=ai(a)||Cs,this.vars=i,h&&(h=An.utils.toArray(h)),r=r||1e-9,s=s||0,g=g||1,Te=Te||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Mi.getComputedStyle(xa).lineHeight)||22);var Ae,le,M,w,V,ee,Y,O=this,I=0,_e=0,de=i.passive||!u&&i.passive!==!1,ne=Bs(a,ii),fe=Bs(a,pn),P=ne(),S=fe(),B=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Zi[0]==="pointerdown",Z=wl(a),Q=a.ownerDocument||As,q=[0,0,0],Me=[0,0,0],xe=0,He=function(){return xe=Ml()},De=function(je,ct){return(O.event=je)&&h&&IM(je.target,h)||ct&&B&&je.pointerType!=="touch"||k&&k(je,ct)},ye=function(){O._vx.reset(),O._vy.reset(),le.pause(),d&&d(O)},we=function(){var je=O.deltaX=sm(q),ct=O.deltaY=sm(Me),Be=Math.abs(je)>=r,tt=Math.abs(ct)>=r;U&&(Be||tt)&&U(O,je,ct,q,Me),Be&&(R&&O.deltaX>0&&R(O),A&&O.deltaX<0&&A(O),T&&T(O),L&&O.deltaX<0!=I<0&&L(O),I=O.deltaX,q[0]=q[1]=q[2]=0),tt&&(v&&O.deltaY>0&&v(O),C&&O.deltaY<0&&C(O),N&&N(O),H&&O.deltaY<0!=_e<0&&H(O),_e=O.deltaY,Me[0]=Me[1]=Me[2]=0),(w||M)&&(X&&X(O),M&&(p&&M===1&&p(O),y&&y(O),M=0),w=!1),ee&&!(ee=!1)&&Re&&Re(O),V&&(ae(O),V=!1),Ae=0},Pe=function(je,ct,Be){q[Be]+=je,Me[Be]+=ct,O._vx.update(je),O._vy.update(ct),c?Ae||(Ae=requestAnimationFrame(we)):we()},Fe=function(je,ct){oe&&!Y&&(O.axis=Y=Math.abs(je)>Math.abs(ct)?"x":"y",ee=!0),Y!=="y"&&(q[2]+=je,O._vx.update(je,!0)),Y!=="x"&&(Me[2]+=ct,O._vy.update(ct,!0)),c?Ae||(Ae=requestAnimationFrame(we)):we()},Le=function(je){if(!De(je,1)){je=Xa(je,u);var ct=je.clientX,Be=je.clientY,tt=ct-O.x,Je=Be-O.y,nt=O.isDragging;O.x=ct,O.y=Be,(nt||(tt||Je)&&(Math.abs(O.startX-ct)>=s||Math.abs(O.startY-Be)>=s))&&(M||(M=nt?2:1),nt||(O.isDragging=!0),Fe(tt,Je))}},Qe=O.onPress=function(Ve){De(Ve,1)||Ve&&Ve.button||(O.axis=Y=null,le.pause(),O.isPressed=!0,Ve=Xa(Ve),I=_e=0,O.startX=O.x=Ve.clientX,O.startY=O.y=Ve.clientY,O._vx.reset(),O._vy.reset(),qn(K?a:Q,Zi[1],Le,de,!0),O.deltaX=O.deltaY=0,E&&E(O))},W=O.onRelease=function(Ve){if(!De(Ve,1)){jn(K?a:Q,Zi[1],Le,!0);var je=!isNaN(O.y-O.startY),ct=O.isDragging,Be=ct&&(Math.abs(O.x-O.startX)>3||Math.abs(O.y-O.startY)>3),tt=Xa(Ve);!Be&&je&&(O._vx.reset(),O._vy.reset(),u&&ue&&An.delayedCall(.08,function(){if(Ml()-xe>300&&!Ve.defaultPrevented){if(Ve.target.click)Ve.target.click();else if(Q.createEvent){var Je=Q.createEvent("MouseEvents");Je.initMouseEvent("click",!0,!0,Mi,1,tt.screenX,tt.screenY,tt.clientX,tt.clientY,!1,!1,!1,!1,0,null),Ve.target.dispatchEvent(Je)}}})),O.isDragging=O.isGesturing=O.isPressed=!1,d&&ct&&!K&&le.restart(!0),M&&we(),m&&ct&&m(O),x&&x(O,Be)}},Ce=function(je){return je.touches&&je.touches.length>1&&(O.isGesturing=!0)&&j(je,O.isDragging)},Ee=function(){return(O.isGesturing=!1)||F(O)},Oe=function(je){if(!De(je)){var ct=ne(),Be=fe();Pe((ct-P)*Te,(Be-S)*Te,1),P=ct,S=Be,d&&le.restart(!0)}},be=function(je){if(!De(je)){je=Xa(je,u),ae&&(V=!0);var ct=(je.deltaMode===1?l:je.deltaMode===2?Mi.innerHeight:1)*g;Pe(je.deltaX*ct,je.deltaY*ct,0),d&&!K&&le.restart(!0)}},ce=function(je){if(!De(je)){var ct=je.clientX,Be=je.clientY,tt=ct-O.x,Je=Be-O.y;O.x=ct,O.y=Be,w=!0,d&&le.restart(!0),(tt||Je)&&Fe(tt,Je)}},Ge=function(je){O.event=je,z(O)},Ze=function(je){O.event=je,G(O)},Mt=function(je){return De(je)||Xa(je,u)&&ve(O)};le=O._dc=An.delayedCall(f||.25,ye).pause(),O.deltaX=O.deltaY=0,O._vx=rh(0,50,!0),O._vy=rh(0,50,!0),O.scrollX=ne,O.scrollY=fe,O.isDragging=O.isGesturing=O.isPressed=!1,Ix(this),O.enable=function(Ve){return O.isEnabled||(qn(Z?Q:a,"scroll",ih),o.indexOf("scroll")>=0&&qn(Z?Q:a,"scroll",Oe,de,J),o.indexOf("wheel")>=0&&qn(a,"wheel",be,de,J),(o.indexOf("touch")>=0&&Dx||o.indexOf("pointer")>=0)&&(qn(a,Zi[0],Qe,de,J),qn(Q,Zi[2],W),qn(Q,Zi[3],W),ue&&qn(a,"click",He,!0,!0),ve&&qn(a,"click",Mt),j&&qn(Q,"gesturestart",Ce),F&&qn(Q,"gestureend",Ee),z&&qn(a,ro+"enter",Ge),G&&qn(a,ro+"leave",Ze),X&&qn(a,ro+"move",ce)),O.isEnabled=!0,O.isDragging=O.isGesturing=O.isPressed=w=M=!1,O._vx.reset(),O._vy.reset(),P=ne(),S=fe(),Ve&&Ve.type&&Qe(Ve),pe&&pe(O)),O},O.disable=function(){O.isEnabled&&(aa.filter(function(Ve){return Ve!==O&&wl(Ve.target)}).length||jn(Z?Q:a,"scroll",ih),O.isPressed&&(O._vx.reset(),O._vy.reset(),jn(K?a:Q,Zi[1],Le,!0)),jn(Z?Q:a,"scroll",Oe,J),jn(a,"wheel",be,J),jn(a,Zi[0],Qe,J),jn(Q,Zi[2],W),jn(Q,Zi[3],W),jn(a,"click",He,!0),jn(a,"click",Mt),jn(Q,"gesturestart",Ce),jn(Q,"gestureend",Ee),jn(a,ro+"enter",Ge),jn(a,ro+"leave",Ze),jn(a,ro+"move",ce),O.isEnabled=O.isPressed=O.isDragging=!1,me&&me(O))},O.kill=O.revert=function(){O.disable();var Ve=aa.indexOf(O);Ve>=0&&aa.splice(Ve,1),jr===O&&(jr=0)},aa.push(O),K&&wl(a)&&(jr=O),O.enable(_)},DM(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n})();rn.version="3.15.0";rn.create=function(n){return new rn(n)};rn.register=Ox;rn.getAll=function(){return aa.slice()};rn.getById=function(n){return aa.filter(function(e){return e.vars.id===n})[0]};Ux()&&An.registerPlugin(rn);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var $e,ia,gt,It,bi,Rt,Op,Vu,Yl,El,ol,yc,Nn,fd,sh,Jn,om,am,ra,kx,zd,Bx,Zn,oh,zx,Vx,bs,ah,kp,ya,Bp,Tl,lh,Vd,bc=1,On=Date.now,Hd=On(),Xi=0,al=0,lm=function(e,t,i){var r=vi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},cm=function(e,t){return t&&(!vi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},UM=function n(){return al&&requestAnimationFrame(n)},um=function(){return fd=1},dm=function(){return fd=0},dr=function(e){return e},ll=function(e){return Math.round(e*1e5)/1e5||0},Hx=function(){return typeof window<"u"},Gx=function(){return $e||Hx()&&($e=window.gsap)&&$e.registerPlugin&&$e},Ro=function(e){return!!~Op.indexOf(e)},Wx=function(e){return(e==="Height"?Bp:gt["inner"+e])||bi["client"+e]||Rt["client"+e]},Xx=function(e){return Ls(e,"getBoundingClientRect")||(Ro(e)?function(){return hu.width=gt.innerWidth,hu.height=Bp,hu}:function(){return Xr(e)})},FM=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Ls(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?Wx(s):e["client"+s])||0}},NM=function(e,t){return!t||~Mr.indexOf(e)?Xx(e):function(){return hu}},xr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Ls(e,i))?o()-Xx(e)()[s]:Ro(e)?(bi[i]||Rt[i])-Wx(r):e[i]-e["offset"+r])},Sc=function(e,t){for(var i=0;i<ra.length;i+=3)(!t||~t.indexOf(ra[i+1]))&&e(ra[i],ra[i+1],ra[i+2])},vi=function(e){return typeof e=="string"},Vn=function(e){return typeof e=="function"},cl=function(e){return typeof e=="number"},so=function(e){return typeof e=="object"},$a=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Bo=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},zo=Math.abs,$x="left",jx="top",zp="right",Vp="bottom",To="width",Ao="height",Al="Right",Cl="Left",Rl="Top",Pl="Bottom",on="padding",ki="margin",Da="Width",Hp="Height",fn="px",Bi=function(e){return gt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},OM=function(e){var t=Bi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},fm=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Xr=function(e,t){var i=t&&Bi(e)[sh]!=="matrix(1, 0, 0, 1, 0, 0)"&&$e.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},Hu=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},Yx=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},kM=function(e){return function(t){return $e.utils.snap(Yx(e),t)}},Gp=function(e){var t=$e.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},BM=function(e){return function(t,i){return Gp(Yx(e))(t,i.direction)}},Mc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},bn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},yn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},wc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},hm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ec={toggleActions:"play",anticipatePin:0},Gu={top:0,left:0,center:.5,bottom:1,right:1},cu=function(e,t){if(vi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in Gu?Gu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Tc=function(e,t,i,r,s,o,a,l){var c=s.startColor,u=s.endColor,d=s.fontSize,f=s.indent,h=s.fontWeight,g=It.createElement("div"),_=Ro(i)||Ls(i,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?Rt:i.tagName==="IFRAME"?i.contentDocument.body:i,y=e.indexOf("start")!==-1,E=y?c:u,x="border-color:"+E+";font-size:"+d+";color:"+E+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(x+=(r===pn?zp:Vp)+":"+(o+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=x,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+r.op.d2],uu(g,0,r,y),g},uu=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+Da]=1,s["border"+a+Da]=0,s[i.p]=t+"px",$e.set(e,s)},ht=[],ch={},ql,pm=function(){return On()-Xi>34&&(ql||(ql=requestAnimationFrame(Kr)))},Vo=function(){(!Zn||!Zn.isPressed||Zn.startX>Rt.clientWidth)&&(_t.cache++,Zn?ql||(ql=requestAnimationFrame(Kr)):Kr(),Xi||Do("scrollStart"),Xi=On())},Gd=function(){Vx=gt.innerWidth,zx=gt.innerHeight},ul=function(e){_t.cache++,(e===!0||!Nn&&!Bx&&!It.fullscreenElement&&!It.webkitFullscreenElement&&(!oh||Vx!==gt.innerWidth||Math.abs(gt.innerHeight-zx)>gt.innerHeight*.25))&&Vu.restart(!0)},Po={},zM=[],qx=function n(){return yn(mt,"scrollEnd",n)||go(!0)},Do=function(e){return Po[e]&&Po[e].map(function(t){return t()})||zM},xi=[],Kx=function(e){for(var t=0;t<xi.length;t+=5)(!e||xi[t+4]&&xi[t+4].query===e)&&(xi[t].style.cssText=xi[t+1],xi[t].getBBox&&xi[t].setAttribute("transform",xi[t+2]||""),xi[t+3].uncache=1)},Zx=function(){return _t.forEach(function(e){return Vn(e)&&++e.cacheID&&(e.rec=e())})},Wp=function(e,t){var i;for(Jn=0;Jn<ht.length;Jn++)i=ht[Jn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Tl=!0,t&&Kx(t),t||Do("revert")},Jx=function(e,t){_t.cache++,(t||!Qn)&&_t.forEach(function(i){return Vn(i)&&i.cacheID++&&(i.rec=0)}),vi(e)&&(gt.history.scrollRestoration=kp=e)},Qn,Co=0,mm,VM=function(){if(mm!==Co){var e=mm=Co;requestAnimationFrame(function(){return e===Co&&go(!0)})}},Qx=function(){Rt.appendChild(ya),Bp=!Zn&&ya.offsetHeight||gt.innerHeight,Rt.removeChild(ya)},gm=function(e){return Yl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},go=function(e,t){if(bi=It.documentElement,Rt=It.body,Op=[gt,It,bi,Rt],Xi&&!e&&!Tl){bn(mt,"scrollEnd",qx);return}Qx(),Qn=mt.isRefreshing=!0,Tl||Zx();var i=Do("refreshInit");kx&&mt.sort(),t||Wp(),_t.forEach(function(r){Vn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ht.slice(0).forEach(function(r){return r.refresh()}),Tl=!1,ht.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),lh=1,gm(!0),ht.forEach(function(r){var s=xr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),gm(!1),lh=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),_t.forEach(function(r){Vn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Jx(kp,1),Vu.pause(),Co++,Qn=2,Kr(2),ht.forEach(function(r){return Vn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Qn=mt.isRefreshing=!1,Do("refresh")},uh=0,du=1,Dl,Kr=function(e){if(e===2||!Qn&&!Tl){mt.isUpdating=!0,Dl&&Dl.update(0);var t=ht.length,i=On(),r=i-Hd>=50,s=t&&ht[0].scroll();if(du=uh>s?-1:1,Qn||(uh=s),r&&(Xi&&!fd&&i-Xi>200&&(Xi=0,Do("scrollEnd")),ol=Hd,Hd=i),du<0){for(Jn=t;Jn-- >0;)ht[Jn]&&ht[Jn].update(0,r);du=1}else for(Jn=0;Jn<t;Jn++)ht[Jn]&&ht[Jn].update(0,r);mt.isUpdating=!1}ql=0},dh=[$x,jx,Vp,zp,ki+Pl,ki+Al,ki+Rl,ki+Cl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],fu=dh.concat([To,Ao,"boxSizing","max"+Da,"max"+Hp,"position",ki,on,on+Rl,on+Al,on+Pl,on+Cl]),HM=function(e,t,i){ba(i);var r=e._gsap;if(r.spacerIsNative)ba(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Wd=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=dh.length,o=t.style,a=e.style,l;s--;)l=dh[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Vp]=a[zp]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[To]=Hu(e,ii)+fn,o[Ao]=Hu(e,pn)+fn,o[on]=a[ki]=a[jx]=a[$x]="0",ba(r),a[To]=a["max"+Da]=i[To],a[Ao]=a["max"+Hp]=i[Ao],a[on]=i[on],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},GM=/([A-Z])/g,ba=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||$e.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(GM,"-$1").toLowerCase())}},Ac=function(e){for(var t=fu.length,i=e.style,r=[],s=0;s<t;s++)r.push(fu[s],i[fu[s]]);return r.t=e,r},WM=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},hu={left:0,top:0},_m=function(e,t,i,r,s,o,a,l,c,u,d,f,h,g){Vn(e)&&(e=e(l)),vi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?cu("0"+e.substr(3),i):0));var _=h?h.time():0,p,m,y;if(h&&h.seek(0),isNaN(e)||(e=+e),cl(e))h&&(e=$e.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),a&&uu(a,i,r,!0);else{Vn(t)&&(t=t(l));var E=(e||"0").split(" "),x,R,A,C;y=ai(t,l)||Rt,x=Xr(y)||{},(!x||!x.left&&!x.top)&&Bi(y).display==="none"&&(C=y.style.display,y.style.display="block",x=Xr(y),C?y.style.display=C:y.style.removeProperty("display")),R=cu(E[0],x[r.d]),A=cu(E[1]||"0",i),e=x[r.p]-c[r.p]-u+R+s-A,a&&uu(a,A,r,i-A<20||a._isStart&&A>20),i-=i-A}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var v=e+i,T=o._isStart;p="scroll"+r.d2,uu(o,v,r,T&&v>20||!T&&(d?Math.max(Rt[p],bi[p]):o.parentNode[p])<=v+1),d&&(c=Xr(a),d&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+fn))}return h&&y&&(p=Xr(y),h.seek(f),m=Xr(y),h._caScrollDist=p[r.p]-m[r.p],e=e/h._caScrollDist*f),h&&h.seek(_),h?e:Math.round(e)},XM=/(webkit|moz|length|cssText|inset)/i,xm=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===Rt){e._stOrig=s.cssText,a=Bi(e);for(o in a)!+o&&!XM.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;$e.core.getCache(e).uncache=1,t.appendChild(e)}},ev=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Cc=function(e,t,i){var r={};r[t.p]="+="+i,$e.set(e,r)},vm=function(e,t){var i=Bs(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,d){var f=o.tween,h=l.onComplete,g={};c=c||i();var _=ev(i,c,function(){f.kill(),o.tween=0});return d=u&&d||0,u=u||a-c,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(c+u*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){_t.cache++,o.tween&&Kr()},l.onComplete=function(){o.tween=0,h&&h.call(f)},f=o.tween=$e.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},bn(e,"wheel",i.wheelHandler),mt.isTouch&&bn(e,"touchmove",i.wheelHandler),s},mt=(function(){function n(t,i){ia||n.register($e)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ah(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!al){this.update=this.refresh=this.kill=dr;return}i=fm(vi(i)||cl(i)||i.nodeType?{trigger:i}:i,Ec);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,f=s.trigger,h=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,y=s.onSnapComplete,E=s.once,x=s.snap,R=s.pinReparent,A=s.pinSpacer,C=s.containerAnimation,v=s.fastScrollEnd,T=s.preventOverlaps,N=i.horizontal||i.containerAnimation&&i.horizontal!==!1?ii:pn,U=!d&&d!==0,L=ai(i.scroller||gt),H=$e.core.getCache(L),z=Ro(L),G=("pinType"in i?i.pinType:Ls(L,"pinType")||z&&"fixed")==="fixed",X=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],k=U&&i.toggleActions.split(" "),K="markers"in i?i.markers:Ec.markers,j=z?0:parseFloat(Bi(L)["border"+N.p2+Da])||0,F=this,ae=i.onRefreshInit&&function(){return i.onRefreshInit(F)},pe=FM(L,z,N),me=NM(L,z),ve=0,Te=0,J=0,ue=Bs(L,N),oe,Re,Ae,le,M,w,V,ee,Y,O,I,_e,de,ne,fe,P,S,B,Z,Q,q,Me,xe,He,De,ye,we,Pe,Fe,Le,Qe,W,Ce,Ee,Oe,be,ce,Ge,Ze;if(F._startClamp=F._endClamp=!1,F._dir=N,p*=45,F.scroller=L,F.scroll=C?C.time.bind(C):ue,le=ue(),F.vars=i,r=r||i.animation,"refreshPriority"in i&&(kx=1,i.refreshPriority===-9999&&(Dl=F)),H.tweenScroll=H.tweenScroll||{top:vm(L,pn),left:vm(L,ii)},F.tweenTo=oe=H.tweenScroll[N.p],F.scrubDuration=function(Be){Ce=cl(Be)&&Be,Ce?W?W.duration(Be):W=$e.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ce,paused:!0,onComplete:function(){return m&&m(F)}}):(W&&W.progress(1).kill(),W=0)},r&&(r.vars.lazy=!1,r._initted&&!F.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),F.animation=r.pause(),r.scrollTrigger=F,F.scrubDuration(d),Le=0,l||(l=r.vars.id)),x&&((!so(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in Rt.style&&$e.set(z?[Rt,bi]:L,{scrollBehavior:"auto"}),_t.forEach(function(Be){return Vn(Be)&&Be.target===(z?It.scrollingElement||bi:L)&&(Be.smooth=!1)}),Ae=Vn(x.snapTo)?x.snapTo:x.snapTo==="labels"?kM(r):x.snapTo==="labelsDirectional"?BM(r):x.directional!==!1?function(Be,tt){return Gp(x.snapTo)(Be,On()-Te<500?0:tt.direction)}:$e.utils.snap(x.snapTo),Ee=x.duration||{min:.1,max:2},Ee=so(Ee)?El(Ee.min,Ee.max):El(Ee,Ee),Oe=$e.delayedCall(x.delay||Ce/2||.1,function(){var Be=ue(),tt=On()-Te<500,Je=oe.tween;if((tt||Math.abs(F.getVelocity())<10)&&!Je&&!fd&&ve!==Be){var nt=(Be-w)/ne,Qt=r&&!U?r.totalProgress():nt,st=tt?0:(Qt-Qe)/(On()-ol)*1e3||0,Wt=$e.utils.clamp(-nt,1-nt,zo(st/2)*st/.185),cn=nt+(x.inertia===!1?0:Wt),Xt,Lt,Ct=x,Dn=Ct.onStart,Ht=Ct.onInterrupt,Ln=Ct.onComplete;if(Xt=Ae(cn,F),cl(Xt)||(Xt=cn),Lt=Math.max(0,Math.round(w+Xt*ne)),Be<=V&&Be>=w&&Lt!==Be){if(Je&&!Je._initted&&Je.data<=zo(Lt-Be))return;x.inertia===!1&&(Wt=Xt-nt),oe(Lt,{duration:Ee(zo(Math.max(zo(cn-Qt),zo(Xt-Qt))*.185/st/.05||0)),ease:x.ease||"power3",data:zo(Lt-Be),onInterrupt:function(){return Oe.restart(!0)&&Ht&&Bo(F,Ht)},onComplete:function(){F.update(),ve=ue(),r&&!U&&(W?W.resetTo("totalProgress",Xt,r._tTime/r._tDur):r.progress(Xt)),Le=Qe=r&&!U?r.totalProgress():F.progress,y&&y(F),Ln&&Bo(F,Ln)}},Be,Wt*ne,Lt-Be-Wt*ne),Dn&&Bo(F,Dn,oe.tween)}}else F.isActive&&ve!==Be&&Oe.restart(!0)}).pause()),l&&(ch[l]=F),f=F.trigger=ai(f||h!==!0&&h),Ze=f&&f._gsap&&f._gsap.stRevert,Ze&&(Ze=Ze(F)),h=h===!0?f:ai(h),vi(a)&&(a={targets:f,className:a}),h&&(g===!1||g===ki||(g=!g&&h.parentNode&&h.parentNode.style&&Bi(h.parentNode).display==="flex"?!1:on),F.pin=h,Re=$e.core.getCache(h),Re.spacer?fe=Re.pinState:(A&&(A=ai(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Re.spacerIsNative=!!A,A&&(Re.spacerState=Ac(A))),Re.spacer=B=A||It.createElement("div"),B.classList.add("pin-spacer"),l&&B.classList.add("pin-spacer-"+l),Re.pinState=fe=Ac(h)),i.force3D!==!1&&$e.set(h,{force3D:!0}),F.spacer=B=Re.spacer,Fe=Bi(h),He=Fe[g+N.os2],Q=$e.getProperty(h),q=$e.quickSetter(h,N.a,fn),Wd(h,B,Fe),S=Ac(h)),K){_e=so(K)?fm(K,hm):hm,O=Tc("scroller-start",l,L,N,_e,0),I=Tc("scroller-end",l,L,N,_e,0,O),Z=O["offset"+N.op.d2];var Mt=ai(Ls(L,"content")||L);ee=this.markerStart=Tc("start",l,Mt,N,_e,Z,0,C),Y=this.markerEnd=Tc("end",l,Mt,N,_e,Z,0,C),C&&(Ge=$e.quickSetter([ee,Y],N.a,fn)),!G&&!(Mr.length&&Ls(L,"fixedMarkers")===!0)&&(OM(z?Rt:L),$e.set([O,I],{force3D:!0}),ye=$e.quickSetter(O,N.a,fn),Pe=$e.quickSetter(I,N.a,fn))}if(C){var Ve=C.vars.onUpdate,je=C.vars.onUpdateParams;C.eventCallback("onUpdate",function(){F.update(0,0,1),Ve&&Ve.apply(C,je||[])})}if(F.previous=function(){return ht[ht.indexOf(F)-1]},F.next=function(){return ht[ht.indexOf(F)+1]},F.revert=function(Be,tt){if(!tt)return F.kill(!0);var Je=Be!==!1||!F.enabled,nt=Nn;Je!==F.isReverted&&(Je&&(be=Math.max(ue(),F.scroll.rec||0),J=F.progress,ce=r&&r.progress()),ee&&[ee,Y,O,I].forEach(function(Qt){return Qt.style.display=Je?"none":"block"}),Je&&(Nn=F,F.update(Je)),h&&(!R||!F.isActive)&&(Je?HM(h,B,fe):Wd(h,B,Bi(h),De)),Je||F.update(Je),Nn=nt,F.isReverted=Je)},F.refresh=function(Be,tt,Je,nt){if(!((Nn||!F.enabled)&&!tt)){if(h&&Be&&Xi){bn(n,"scrollEnd",qx);return}!Qn&&ae&&ae(F),Nn=F,oe.tween&&!Je&&(oe.tween.kill(),oe.tween=0),W&&W.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(We){return We.vars.immediateRender&&We.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),F.isReverted||F.revert(!0,!0),F._subPinOffset=!1;var Qt=pe(),st=me(),Wt=C?C.duration():xr(L,N),cn=ne<=.01||!ne,Xt=0,Lt=nt||0,Ct=so(Je)?Je.end:i.end,Dn=i.endTrigger||f,Ht=so(Je)?Je.start:i.start||(i.start===0||!f?0:h?"0 0":"0 100%"),Ln=F.pinnedContainer=i.pinnedContainer&&ai(i.pinnedContainer,F),Li=f&&Math.max(0,ht.indexOf(F))||0,un=Li,dn,_n,Dr,Uo,D,$,re,ie,te,Ie,ke,Ue,Xe;for(K&&so(Je)&&(Ue=$e.getProperty(O,N.p),Xe=$e.getProperty(I,N.p));un-- >0;)$=ht[un],$.end||$.refresh(0,1)||(Nn=F),re=$.pin,re&&(re===f||re===h||re===Ln)&&!$.isReverted&&(Ie||(Ie=[]),Ie.unshift($),$.revert(!0,!0)),$!==ht[un]&&(Li--,un--);for(Vn(Ht)&&(Ht=Ht(F)),Ht=lm(Ht,"start",F),w=_m(Ht,f,Qt,N,ue(),ee,O,F,st,j,G,Wt,C,F._startClamp&&"_startClamp")||(h?-.001:0),Vn(Ct)&&(Ct=Ct(F)),vi(Ct)&&!Ct.indexOf("+=")&&(~Ct.indexOf(" ")?Ct=(vi(Ht)?Ht.split(" ")[0]:"")+Ct:(Xt=cu(Ct.substr(2),Qt),Ct=vi(Ht)?Ht:(C?$e.utils.mapRange(0,C.duration(),C.scrollTrigger.start,C.scrollTrigger.end,w):w)+Xt,Dn=f)),Ct=lm(Ct,"end",F),V=Math.max(w,_m(Ct||(Dn?"100% 0":Wt),Dn,Qt,N,ue()+Xt,Y,I,F,st,j,G,Wt,C,F._endClamp&&"_endClamp"))||-.001,Xt=0,un=Li;un--;)$=ht[un]||{},re=$.pin,re&&$.start-$._pinPush<=w&&!C&&$.end>0&&(dn=$.end-(F._startClamp?Math.max(0,$.start):$.start),(re===f&&$.start-$._pinPush<w||re===Ln)&&isNaN(Ht)&&(Xt+=dn*(1-$.progress)),re===h&&(Lt+=dn));if(w+=Xt,V+=Xt,F._startClamp&&(F._startClamp+=Xt),F._endClamp&&!Qn&&(F._endClamp=V||-.001,V=Math.min(V,xr(L,N))),ne=V-w||(w-=.01)&&.001,cn&&(J=$e.utils.clamp(0,1,$e.utils.normalize(w,V,be))),F._pinPush=Lt,ee&&Xt&&(dn={},dn[N.a]="+="+Xt,Ln&&(dn[N.p]="-="+ue()),$e.set([ee,Y],dn)),h&&!(lh&&F.end>=xr(L,N)))dn=Bi(h),Uo=N===pn,Dr=ue(),Me=parseFloat(Q(N.a))+Lt,!Wt&&V>1&&(ke=(z?It.scrollingElement||bi:L).style,ke={style:ke,value:ke["overflow"+N.a.toUpperCase()]},z&&Bi(Rt)["overflow"+N.a.toUpperCase()]!=="scroll"&&(ke.style["overflow"+N.a.toUpperCase()]="scroll")),Wd(h,B,dn),S=Ac(h),_n=Xr(h,!0),ie=G&&Bs(L,Uo?ii:pn)(),g?(De=[g+N.os2,ne+Lt+fn],De.t=B,un=g===on?Hu(h,N)+ne+Lt:0,un&&(De.push(N.d,un+fn),B.style.flexBasis!=="auto"&&(B.style.flexBasis=un+fn)),ba(De),Ln&&ht.forEach(function(We){We.pin===Ln&&We.vars.pinSpacing!==!1&&(We._subPinOffset=!0)}),G&&ue(be)):(un=Hu(h,N),un&&B.style.flexBasis!=="auto"&&(B.style.flexBasis=un+fn)),G&&(D={top:_n.top+(Uo?Dr-w:ie)+fn,left:_n.left+(Uo?ie:Dr-w)+fn,boxSizing:"border-box",position:"fixed"},D[To]=D["max"+Da]=Math.ceil(_n.width)+fn,D[Ao]=D["max"+Hp]=Math.ceil(_n.height)+fn,D[ki]=D[ki+Rl]=D[ki+Al]=D[ki+Pl]=D[ki+Cl]="0",D[on]=dn[on],D[on+Rl]=dn[on+Rl],D[on+Al]=dn[on+Al],D[on+Pl]=dn[on+Pl],D[on+Cl]=dn[on+Cl],P=WM(fe,D,R),Qn&&ue(0)),r?(te=r._initted,zd(1),r.render(r.duration(),!0,!0),xe=Q(N.a)-Me+ne+Lt,we=Math.abs(ne-xe)>1,G&&we&&P.splice(P.length-2,2),r.render(0,!0,!0),te||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),zd(0)):xe=ne,ke&&(ke.value?ke.style["overflow"+N.a.toUpperCase()]=ke.value:ke.style.removeProperty("overflow-"+N.a));else if(f&&ue()&&!C)for(_n=f.parentNode;_n&&_n!==Rt;)_n._pinOffset&&(w-=_n._pinOffset,V-=_n._pinOffset),_n=_n.parentNode;Ie&&Ie.forEach(function(We){return We.revert(!1,!0)}),F.start=w,F.end=V,le=M=Qn?be:ue(),!C&&!Qn&&(le<be&&ue(be),F.scroll.rec=0),F.revert(!1,!0),Te=On(),Oe&&(ve=-1,Oe.restart(!0)),Nn=0,r&&U&&(r._initted||ce)&&r.progress()!==ce&&r.progress(ce||0,!0).render(r.time(),!0,!0),(cn||J!==F.progress||C||_||r&&!r._initted)&&(r&&!U&&(r._initted||J||r.vars.immediateRender!==!1)&&r.totalProgress(C&&w<-.001&&!J?$e.utils.normalize(w,V,0):J,!0),F.progress=cn||(le-w)/ne===J?0:J),h&&g&&(B._pinOffset=Math.round(F.progress*xe)),W&&W.invalidate(),isNaN(Ue)||(Ue-=$e.getProperty(O,N.p),Xe-=$e.getProperty(I,N.p),Cc(O,N,Ue),Cc(ee,N,Ue-(nt||0)),Cc(I,N,Xe),Cc(Y,N,Xe-(nt||0))),cn&&!Qn&&F.update(),u&&!Qn&&!de&&(de=!0,u(F),de=!1)}},F.getVelocity=function(){return(ue()-M)/(On()-ol)*1e3||0},F.endAnimation=function(){$a(F.callbackAnimation),r&&(W?W.progress(1):r.paused()?U||$a(r,F.direction<0,1):$a(r,r.reversed()))},F.labelToScroll=function(Be){return r&&r.labels&&(w||F.refresh()||w)+r.labels[Be]/r.duration()*ne||0},F.getTrailing=function(Be){var tt=ht.indexOf(F),Je=F.direction>0?ht.slice(0,tt).reverse():ht.slice(tt+1);return(vi(Be)?Je.filter(function(nt){return nt.vars.preventOverlaps===Be}):Je).filter(function(nt){return F.direction>0?nt.end<=w:nt.start>=V})},F.update=function(Be,tt,Je){if(!(C&&!Je&&!Be)){var nt=Qn===!0?be:F.scroll(),Qt=Be?0:(nt-w)/ne,st=Qt<0?0:Qt>1?1:Qt||0,Wt=F.progress,cn,Xt,Lt,Ct,Dn,Ht,Ln,Li;if(tt&&(M=le,le=C?ue():nt,x&&(Qe=Le,Le=r&&!U?r.totalProgress():st)),p&&h&&!Nn&&!bc&&Xi&&(!st&&w<nt+(nt-M)/(On()-ol)*p?st=1e-4:st===1&&V>nt+(nt-M)/(On()-ol)*p&&(st=.9999)),st!==Wt&&F.enabled){if(cn=F.isActive=!!st&&st<1,Xt=!!Wt&&Wt<1,Ht=cn!==Xt,Dn=Ht||!!st!=!!Wt,F.direction=st>Wt?1:-1,F.progress=st,Dn&&!Nn&&(Lt=st&&!Wt?0:st===1?1:Wt===1?2:3,U&&(Ct=!Ht&&k[Lt+1]!=="none"&&k[Lt+1]||k[Lt],Li=r&&(Ct==="complete"||Ct==="reset"||Ct in r))),T&&(Ht||Li)&&(Li||d||!r)&&(Vn(T)?T(F):F.getTrailing(T).forEach(function(Dr){return Dr.endAnimation()})),U||(W&&!Nn&&!bc?(W._dp._time-W._start!==W._time&&W.render(W._dp._time-W._start),W.resetTo?W.resetTo("totalProgress",st,r._tTime/r._tDur):(W.vars.totalProgress=st,W.invalidate().restart())):r&&r.totalProgress(st,!!(Nn&&(Te||Be)))),h){if(Be&&g&&(B.style[g+N.os2]=He),!G)q(ll(Me+xe*st));else if(Dn){if(Ln=!Be&&st>Wt&&V+1>nt&&nt+1>=xr(L,N),R)if(!Be&&(cn||Ln)){var un=Xr(h,!0),dn=nt-w;xm(h,Rt,un.top+(N===pn?dn:0)+fn,un.left+(N===pn?0:dn)+fn)}else xm(h,B);ba(cn||Ln?P:S),we&&st<1&&cn||q(Me+(st===1&&!Ln?xe:0))}}x&&!oe.tween&&!Nn&&!bc&&Oe.restart(!0),a&&(Ht||E&&st&&(st<1||!Vd))&&Yl(a.targets).forEach(function(Dr){return Dr.classList[cn||E?"add":"remove"](a.className)}),o&&!U&&!Be&&o(F),Dn&&!Nn?(U&&(Li&&(Ct==="complete"?r.pause().totalProgress(1):Ct==="reset"?r.restart(!0).pause():Ct==="restart"?r.restart(!0):r[Ct]()),o&&o(F)),(Ht||!Vd)&&(c&&Ht&&Bo(F,c),X[Lt]&&Bo(F,X[Lt]),E&&(st===1?F.kill(!1,1):X[Lt]=0),Ht||(Lt=st===1?1:3,X[Lt]&&Bo(F,X[Lt]))),v&&!cn&&Math.abs(F.getVelocity())>(cl(v)?v:2500)&&($a(F.callbackAnimation),W?W.progress(1):$a(r,Ct==="reverse"?1:!st,1))):U&&o&&!Nn&&o(F)}if(Pe){var _n=C?nt/C.duration()*(C._caScrollDist||0):nt;ye(_n+(O._isFlipped?1:0)),Pe(_n)}Ge&&Ge(-nt/C.duration()*(C._caScrollDist||0))}},F.enable=function(Be,tt){F.enabled||(F.enabled=!0,bn(L,"resize",ul),z||bn(L,"scroll",Vo),ae&&bn(n,"refreshInit",ae),Be!==!1&&(F.progress=J=0,le=M=ve=ue()),tt!==!1&&F.refresh())},F.getTween=function(Be){return Be&&oe?oe.tween:W},F.setPositions=function(Be,tt,Je,nt){if(C){var Qt=C.scrollTrigger,st=C.duration(),Wt=Qt.end-Qt.start;Be=Qt.start+Wt*Be/st,tt=Qt.start+Wt*tt/st}F.refresh(!1,!1,{start:cm(Be,Je&&!!F._startClamp),end:cm(tt,Je&&!!F._endClamp)},nt),F.update()},F.adjustPinSpacing=function(Be){if(De&&Be){var tt=De.indexOf(N.d)+1;De[tt]=parseFloat(De[tt])+Be+fn,De[1]=parseFloat(De[1])+Be+fn,ba(De)}},F.disable=function(Be,tt){if(Be!==!1&&F.revert(!0,!0),F.enabled&&(F.enabled=F.isActive=!1,tt||W&&W.pause(),be=0,Re&&(Re.uncache=1),ae&&yn(n,"refreshInit",ae),Oe&&(Oe.pause(),oe.tween&&oe.tween.kill()&&(oe.tween=0)),!z)){for(var Je=ht.length;Je--;)if(ht[Je].scroller===L&&ht[Je]!==F)return;yn(L,"resize",ul),z||yn(L,"scroll",Vo)}},F.kill=function(Be,tt){F.disable(Be,tt),W&&!tt&&W.kill(),l&&delete ch[l];var Je=ht.indexOf(F);Je>=0&&ht.splice(Je,1),Je===Jn&&du>0&&Jn--,Je=0,ht.forEach(function(nt){return nt.scroller===F.scroller&&(Je=1)}),Je||Qn||(F.scroll.rec=0),r&&(r.scrollTrigger=null,Be&&r.revert({kill:!1}),tt||r.kill()),ee&&[ee,Y,O,I].forEach(function(nt){return nt.parentNode&&nt.parentNode.removeChild(nt)}),Dl===F&&(Dl=0),h&&(Re&&(Re.uncache=1),Je=0,ht.forEach(function(nt){return nt.pin===h&&Je++}),Je||(Re.spacer=0)),i.onKill&&i.onKill(F)},ht.push(F),F.enable(!1,!1),Ze&&Ze(F),r&&r.add&&!ne){var ct=F.update;F.update=function(){F.update=ct,_t.cache++,w||V||F.refresh()},$e.delayedCall(.01,F.update),ne=.01,w=V=0}else F.refresh();h&&VM()},n.register=function(i){return ia||($e=i||Gx(),Hx()&&window.document&&n.enable(),ia=al),ia},n.defaults=function(i){if(i)for(var r in i)Ec[r]=i[r];return Ec},n.disable=function(i,r){al=0,ht.forEach(function(o){return o[r?"kill":"disable"](i)}),yn(gt,"wheel",Vo),yn(It,"scroll",Vo),clearInterval(yc),yn(It,"touchcancel",dr),yn(Rt,"touchstart",dr),Mc(yn,It,"pointerdown,touchstart,mousedown",um),Mc(yn,It,"pointerup,touchend,mouseup",dm),Vu.kill(),Sc(yn);for(var s=0;s<_t.length;s+=3)wc(yn,_t[s],_t[s+1]),wc(yn,_t[s],_t[s+2])},n.enable=function(){if(gt=window,It=document,bi=It.documentElement,Rt=It.body,$e){if(Yl=$e.utils.toArray,El=$e.utils.clamp,ah=$e.core.context||dr,zd=$e.core.suppressOverwrites||dr,kp=gt.history.scrollRestoration||"auto",uh=gt.pageYOffset||0,$e.core.globals("ScrollTrigger",n),Rt){al=1,ya=document.createElement("div"),ya.style.height="100vh",ya.style.position="absolute",Qx(),UM(),rn.register($e),n.isTouch=rn.isTouch,bs=rn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),oh=rn.isTouch===1,bn(gt,"wheel",Vo),Op=[gt,It,bi,Rt],$e.matchMedia?(n.matchMedia=function(u){var d=$e.matchMedia(),f;for(f in u)d.add(f,u[f]);return d},$e.addEventListener("matchMediaInit",function(){Zx(),Wp()}),$e.addEventListener("matchMediaRevert",function(){return Kx()}),$e.addEventListener("matchMedia",function(){go(0,1),Do("matchMedia")}),$e.matchMedia().add("(orientation: portrait)",function(){return Gd(),Gd})):console.warn("Requires GSAP 3.11.0 or later"),Gd(),bn(It,"scroll",Vo);var i=Rt.hasAttribute("style"),r=Rt.style,s=r.borderTopStyle,o=$e.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Xr(Rt),pn.m=Math.round(a.top+pn.sc())||0,ii.m=Math.round(a.left+ii.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(Rt.setAttribute("style",""),Rt.removeAttribute("style")),yc=setInterval(pm,250),$e.delayedCall(.5,function(){return bc=0}),bn(It,"touchcancel",dr),bn(Rt,"touchstart",dr),Mc(bn,It,"pointerdown,touchstart,mousedown",um),Mc(bn,It,"pointerup,touchend,mouseup",dm),sh=$e.utils.checkPrefix("transform"),fu.push(sh),ia=On(),Vu=$e.delayedCall(.2,go).pause(),ra=[It,"visibilitychange",function(){var u=gt.innerWidth,d=gt.innerHeight;It.hidden?(om=u,am=d):(om!==u||am!==d)&&ul()},It,"DOMContentLoaded",go,gt,"load",go,gt,"resize",ul],Sc(bn),ht.forEach(function(u){return u.enable(0,1)}),l=0;l<_t.length;l+=3)wc(yn,_t[l],_t[l+1]),wc(yn,_t[l],_t[l+2])}else if(It){var c=function u(){n.enable(),It.removeEventListener("DOMContentLoaded",u)};It.addEventListener("DOMContentLoaded",c)}}},n.config=function(i){"limitCallbacks"in i&&(Vd=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(yc)||(yc=r)&&setInterval(pm,r),"ignoreMobileResize"in i&&(oh=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Sc(yn)||Sc(bn,i.autoRefreshEvents||"none"),Bx=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=ai(i),o=_t.indexOf(s),a=Ro(s);~o&&_t.splice(o,a?6:2),r&&(a?Mr.unshift(gt,r,Rt,r,bi,r):Mr.unshift(s,r))},n.clearMatchMedia=function(i){ht.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(vi(i)?ai(i):i).getBoundingClientRect(),a=o[s?To:Ao]*r||0;return s?o.right-a>0&&o.left+a<gt.innerWidth:o.bottom-a>0&&o.top+a<gt.innerHeight},n.positionInViewport=function(i,r,s){vi(i)&&(i=ai(i));var o=i.getBoundingClientRect(),a=o[s?To:Ao],l=r==null?a/2:r in Gu?Gu[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/gt.innerWidth:(o.top+l)/gt.innerHeight},n.killAll=function(i){if(ht.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Po.killAll||[];Po={},r.forEach(function(s){return s()})}},n})();mt.version="3.15.0";mt.saveStyles=function(n){return n?Yl(n).forEach(function(e){if(e&&e.style){var t=xi.indexOf(e);t>=0&&xi.splice(t,5),xi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),$e.core.getCache(e),ah())}}):xi};mt.revert=function(n,e){return Wp(!n,e)};mt.create=function(n,e){return new mt(n,e)};mt.refresh=function(n){return n?ul(!0):(ia||mt.register())&&go(!0)};mt.update=function(n){return++_t.cache&&Kr(n===!0?2:0)};mt.clearScrollMemory=Jx;mt.maxScroll=function(n,e){return xr(n,e?ii:pn)};mt.getScrollFunc=function(n,e){return Bs(ai(n),e?ii:pn)};mt.getById=function(n){return ch[n]};mt.getAll=function(){return ht.filter(function(n){return n.vars.id!=="ScrollSmoother"})};mt.isScrolling=function(){return!!Xi};mt.snapDirectional=Gp;mt.addEventListener=function(n,e){var t=Po[n]||(Po[n]=[]);~t.indexOf(e)||t.push(e)};mt.removeEventListener=function(n,e){var t=Po[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};mt.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var d=[],f=[],h=$e.delayedCall(r,function(){u(d,f),d=[],f=[]}).pause();return function(g){d.length||h.restart(!0),d.push(g.trigger),f.push(g),s<=d.length&&h.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Vn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Vn(s)&&(s=s(),bn(mt,"refresh",function(){return s=e.batchMax()})),Yl(n).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(mt.create(c))}),t};var ym=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Xd=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(rn.isTouch?" pinch-zoom":""):"none",e===bi&&n(Rt,t)},Rc={auto:1,scroll:1},$M=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||$e.core.getCache(s),a=On(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Rt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Rc[(l=Bi(s)).overflowY]||Rc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Ro(s)&&(Rc[(l=Bi(s)).overflowY]||Rc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},tv=function(e,t,i,r){return rn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&$M,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&bn(It,rn.eventTypes[0],Sm,!1,!0)},onDisable:function(){return yn(It,rn.eventTypes[0],Sm,!0)}})},jM=/(input|label|select|textarea)/i,bm,Sm=function(e){var t=jM.test(e.target.tagName);(t||bm)&&(e._gsapAllow=!0,bm=t)},YM=function(e){so(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=ai(e.target)||bi,u=$e.core.globals().ScrollSmoother,d=u&&u.get(),f=bs&&(e.content&&ai(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=Bs(c,pn),g=Bs(c,ii),_=1,p=(rn.isTouch&&gt.visualViewport?gt.visualViewport.scale*gt.visualViewport.width:gt.outerWidth)/gt.innerWidth,m=0,y=Vn(r)?function(){return r(a)}:function(){return r||2.8},E,x,R=tv(c,e.type,!0,s),A=function(){return x=!1},C=dr,v=dr,T=function(){l=xr(c,pn),v=El(bs?1:0,l),i&&(C=El(0,xr(c,ii))),E=Co},N=function(){f._gsap.y=ll(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},U=function(){if(x){requestAnimationFrame(A);var K=ll(a.deltaY/2),j=v(h.v-K);if(f&&j!==h.v+h.offset){h.offset=j-h.v;var F=ll((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+F+", 0, 1)",f._gsap.y=F+"px",h.cacheID=_t.cache,Kr()}return!0}h.offset&&N(),x=!0},L,H,z,G,X=function(){T(),L.isActive()&&L.vars.scrollY>l&&(h()>l?L.progress(1)&&h(l):L.resetTo("scrollY",l))};return f&&$e.set(f,{y:"+=0"}),e.ignoreCheck=function(k){return bs&&k.type==="touchmove"&&U()||_>1.05&&k.type!=="touchstart"||a.isGesturing||k.touches&&k.touches.length>1},e.onPress=function(){x=!1;var k=_;_=ll((gt.visualViewport&&gt.visualViewport.scale||1)/p),L.pause(),k!==_&&Xd(c,_>1.01?!0:i?!1:"x"),H=g(),z=h(),T(),E=Co},e.onRelease=e.onGestureStart=function(k,K){if(h.offset&&N(),!K)G.restart(!0);else{_t.cache++;var j=y(),F,ae;i&&(F=g(),ae=F+j*.05*-k.velocityX/.227,j*=ym(g,F,ae,xr(c,ii)),L.vars.scrollX=C(ae)),F=h(),ae=F+j*.05*-k.velocityY/.227,j*=ym(h,F,ae,xr(c,pn)),L.vars.scrollY=v(ae),L.invalidate().duration(j).play(.01),(bs&&L.vars.scrollY>=l||F>=l-1)&&$e.to({},{onUpdate:X,duration:j})}o&&o(k)},e.onWheel=function(){L._ts&&L.pause(),On()-m>1e3&&(E=0,m=On())},e.onChange=function(k,K,j,F,ae){if(Co!==E&&T(),K&&i&&g(C(F[2]===K?H+(k.startX-k.x):g()+K-F[1])),j){h.offset&&N();var pe=ae[2]===j,me=pe?z+k.startY-k.y:h()+j-ae[1],ve=v(me);pe&&me!==ve&&(z+=ve-me),h(ve)}(j||K)&&Kr()},e.onEnable=function(){Xd(c,i?!1:"x"),mt.addEventListener("refresh",X),bn(gt,"resize",X),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),R.enable()},e.onDisable=function(){Xd(c,!0),yn(gt,"resize",X),mt.removeEventListener("refresh",X),R.kill()},e.lockAxis=e.lockAxis!==!1,a=new rn(e),a.iOS=bs,bs&&!h()&&h(1),bs&&$e.ticker.add(dr),G=a._dc,L=$e.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:ev(h,h(),function(){return L.pause()})},onUpdate:Kr,onComplete:G.vars.onComplete}),a};mt.sort=function(n){if(Vn(n))return ht.sort(n);var e=gt.pageYOffset||0;return mt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+gt.innerHeight}),ht.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};mt.observe=function(n){return new rn(n)};mt.normalizeScroll=function(n){if(typeof n>"u")return Zn;if(n===!0&&Zn)return Zn.enable();if(n===!1){Zn&&Zn.kill(),Zn=n;return}var e=n instanceof rn?n:YM(n);return Zn&&Zn.target===e.target&&Zn.kill(),Ro(e.target)&&(Zn=e),e};mt.core={_getVelocityProp:rh,_inputObserver:tv,_scrollers:_t,_proxies:Mr,bridge:{ss:function(){Xi||Do("scrollStart"),Xi=On()},ref:function(){return Nn}}};Gx()&&$e.registerPlugin(mt);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xp="183",qM=0,Mm=1,KM=2,pu=1,ZM=2,dl=3,zs=0,hi=1,$r=2,Zr=0,Sa=1,wm=2,Em=3,Tm=4,JM=5,uo=100,QM=101,ew=102,tw=103,nw=104,iw=200,rw=201,sw=202,ow=203,fh=204,hh=205,aw=206,lw=207,cw=208,uw=209,dw=210,fw=211,hw=212,pw=213,mw=214,ph=0,mh=1,gh=2,La=3,_h=4,xh=5,vh=6,yh=7,nv=0,gw=1,_w=2,wr=0,iv=1,rv=2,sv=3,ov=4,av=5,lv=6,cv=7,uv=300,Lo=301,Ia=302,$d=303,jd=304,hd=306,bh=1e3,Yr=1001,Sh=1002,Cn=1003,xw=1004,Pc=1005,Gn=1006,Yd=1007,_o=1008,zi=1009,dv=1010,fv=1011,Kl=1012,$p=1013,Rr=1014,vr=1015,as=1016,jp=1017,Yp=1018,Zl=1020,hv=35902,pv=35899,mv=1021,gv=1022,er=1023,ls=1026,xo=1027,_v=1028,qp=1029,Ua=1030,Kp=1031,Zp=1033,mu=33776,gu=33777,_u=33778,xu=33779,Mh=35840,wh=35841,Eh=35842,Th=35843,Ah=36196,Ch=37492,Rh=37496,Ph=37488,Dh=37489,Lh=37490,Ih=37491,Uh=37808,Fh=37809,Nh=37810,Oh=37811,kh=37812,Bh=37813,zh=37814,Vh=37815,Hh=37816,Gh=37817,Wh=37818,Xh=37819,$h=37820,jh=37821,Yh=36492,qh=36494,Kh=36495,Zh=36283,Jh=36284,Qh=36285,ep=36286,vw=3200,yw=0,bw=1,Ms="",Oi="srgb",Fa="srgb-linear",Wu="linear",Ut="srgb",Ho=7680,Am=519,Sw=512,Mw=513,ww=514,Jp=515,Ew=516,Tw=517,Qp=518,Aw=519,Cm=35044,Rm="300 es",yr=2e3,Xu=2001;function Cw(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function $u(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Rw(){const n=$u("canvas");return n.style.display="block",n}const Pm={};function Dm(...n){const e="THREE."+n.shift();console.log(e,...n)}function xv(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function rt(...n){n=xv(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Et(...n){n=xv(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ju(...n){const e=n.join(" ");e in Pm||(Pm[e]=!0,rt(...n))}function Pw(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Dw={[ph]:mh,[gh]:vh,[_h]:yh,[La]:xh,[mh]:ph,[vh]:gh,[yh]:_h,[xh]:La};class Oa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qd=Math.PI/180,tp=180/Math.PI;function oc(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[i&255]+Un[i>>8&255]+Un[i>>16&255]+Un[i>>24&255]).toLowerCase()}function vt(n,e,t){return Math.max(e,Math.min(t,n))}function Lw(n,e){return(n%e+e)%e}function Kd(n,e,t){return(1-t)*n+t*e}function ja(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function si(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class bt{constructor(e=0,t=0){bt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ka{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],g=s[o+2],_=s[o+3];if(d!==_||l!==f||c!==h||u!==g){let p=l*f+c*h+u*g+d*_;p<0&&(f=-f,h=-h,g=-g,_=-_,p=-p);let m=1-a;if(p<.9995){const y=Math.acos(p),E=Math.sin(y);m=Math.sin(m*y)/E,a=Math.sin(a*y)/E,l=l*m+f*a,c=c*m+h*a,u=u*m+g*a,d=d*m+_*a}else{l=l*m+f*a,c=c*m+h*a,u=u*m+g*a,d=d*m+_*a;const y=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=y,c*=y,u*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*d+l*h-c*f,e[t+1]=l*g+u*f+c*d-a*h,e[t+2]=c*g+u*h+a*f-l*d,e[t+3]=u*g-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"YZX":this._x=f*u*d+c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d-f*h*g;break;case"XZY":this._x=f*u*d-c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d+f*h*g;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,t=0,i=0){se.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zd.copy(this).projectOnVector(e),this.sub(Zd)}reflect(e){return this.sub(Zd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zd=new se,Lm=new ka;class ut{constructor(e,t,i,r,s,o,a,l,c){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],_=r[0],p=r[3],m=r[6],y=r[1],E=r[4],x=r[7],R=r[2],A=r[5],C=r[8];return s[0]=o*_+a*y+l*R,s[3]=o*p+a*E+l*A,s[6]=o*m+a*x+l*C,s[1]=c*_+u*y+d*R,s[4]=c*p+u*E+d*A,s[7]=c*m+u*x+d*C,s[2]=f*_+h*y+g*R,s[5]=f*p+h*E+g*A,s[8]=f*m+h*x+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,h=c*s-o*l,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=h*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Jd.makeScale(e,t)),this}rotate(e){return this.premultiply(Jd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jd=new ut,Im=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Um=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Iw(){const n={enabled:!0,workingColorSpace:Fa,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ut&&(r.r=Jr(r.r),r.g=Jr(r.g),r.b=Jr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ut&&(r.r=Ma(r.r),r.g=Ma(r.g),r.b=Ma(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ms?Wu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ju("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ju("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Fa]:{primaries:e,whitePoint:i,transfer:Wu,toXYZ:Im,fromXYZ:Um,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Oi},outputColorSpaceConfig:{drawingBufferColorSpace:Oi}},[Oi]:{primaries:e,whitePoint:i,transfer:Ut,toXYZ:Im,fromXYZ:Um,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Oi}}}),n}const St=Iw();function Jr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ma(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Go;class Uw{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Go===void 0&&(Go=$u("canvas")),Go.width=e.width,Go.height=e.height;const r=Go.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Go}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$u("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Jr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Jr(t[i]/255)*255):t[i]=Jr(t[i]);return{data:t,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fw=0;class e0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fw++}),this.uuid=oc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Qd(r[o].image)):s.push(Qd(r[o]))}else s=Qd(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Qd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Uw.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let Nw=0;const ef=new se;class ri extends Oa{constructor(e=ri.DEFAULT_IMAGE,t=ri.DEFAULT_MAPPING,i=Yr,r=Yr,s=Gn,o=_o,a=er,l=zi,c=ri.DEFAULT_ANISOTROPY,u=Ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nw++}),this.uuid=oc(),this.name="",this.source=new e0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ef).x}get height(){return this.source.getSize(ef).y}get depth(){return this.source.getSize(ef).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){rt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){rt(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bh:e.x=e.x-Math.floor(e.x);break;case Yr:e.x=e.x<0?0:1;break;case Sh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bh:e.y=e.y-Math.floor(e.y);break;case Yr:e.y=e.y<0?0:1;break;case Sh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=uv;ri.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,t=0,i=0,r=1){nn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,x=(h+1)/2,R=(m+1)/2,A=(u+f)/4,C=(d+_)/4,v=(g+p)/4;return E>x&&E>R?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=A/i,s=C/i):x>R?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=v/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=C/s,r=v/s),this.set(i,r,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ow extends Oa{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new ri(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new e0(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Er extends Ow{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vv extends ri{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kw extends ri{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ln{constructor(e,t,i,r,s,o,a,l,c,u,d,f,h,g,_,p){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,h,g,_,p)}set(e,t,i,r,s,o,a,l,c,u,d,f,h,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Wo.setFromMatrixColumn(e,0).length(),s=1/Wo.setFromMatrixColumn(e,1).length(),o=1/Wo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,h=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+h*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,g=c*u,_=c*d;t[0]=f+_*a,t[4]=g*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,g=c*u,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=g*c-h,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=h*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+_,t[5]=o*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bw,e,zw)}lookAt(e,t,i){const r=this.elements;return gi.subVectors(e,t),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),ms.crossVectors(i,gi),ms.lengthSq()===0&&(Math.abs(i.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),ms.crossVectors(i,gi)),ms.normalize(),Dc.crossVectors(gi,ms),r[0]=ms.x,r[4]=Dc.x,r[8]=gi.x,r[1]=ms.y,r[5]=Dc.y,r[9]=gi.y,r[2]=ms.z,r[6]=Dc.z,r[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],_=i[6],p=i[10],m=i[14],y=i[3],E=i[7],x=i[11],R=i[15],A=r[0],C=r[4],v=r[8],T=r[12],N=r[1],U=r[5],L=r[9],H=r[13],z=r[2],G=r[6],X=r[10],k=r[14],K=r[3],j=r[7],F=r[11],ae=r[15];return s[0]=o*A+a*N+l*z+c*K,s[4]=o*C+a*U+l*G+c*j,s[8]=o*v+a*L+l*X+c*F,s[12]=o*T+a*H+l*k+c*ae,s[1]=u*A+d*N+f*z+h*K,s[5]=u*C+d*U+f*G+h*j,s[9]=u*v+d*L+f*X+h*F,s[13]=u*T+d*H+f*k+h*ae,s[2]=g*A+_*N+p*z+m*K,s[6]=g*C+_*U+p*G+m*j,s[10]=g*v+_*L+p*X+m*F,s[14]=g*T+_*H+p*k+m*ae,s[3]=y*A+E*N+x*z+R*K,s[7]=y*C+E*U+x*G+R*j,s[11]=y*v+E*L+x*X+R*F,s[15]=y*T+E*H+x*k+R*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],_=e[7],p=e[11],m=e[15],y=l*h-c*f,E=a*h-c*d,x=a*f-l*d,R=o*h-c*u,A=o*f-l*u,C=o*d-a*u;return t*(_*y-p*E+m*x)-i*(g*y-p*R+m*A)+r*(g*E-_*R+m*C)-s*(g*x-_*A+p*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],_=e[13],p=e[14],m=e[15],y=t*a-i*o,E=t*l-r*o,x=t*c-s*o,R=i*l-r*a,A=i*c-s*a,C=r*c-s*l,v=u*_-d*g,T=u*p-f*g,N=u*m-h*g,U=d*p-f*_,L=d*m-h*_,H=f*m-h*p,z=y*H-E*L+x*U+R*N-A*T+C*v;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/z;return e[0]=(a*H-l*L+c*U)*G,e[1]=(r*L-i*H-s*U)*G,e[2]=(_*C-p*A+m*R)*G,e[3]=(f*A-d*C-h*R)*G,e[4]=(l*N-o*H-c*T)*G,e[5]=(t*H-r*N+s*T)*G,e[6]=(p*x-g*C-m*E)*G,e[7]=(u*C-f*x+h*E)*G,e[8]=(o*L-a*N+c*v)*G,e[9]=(i*N-t*L-s*v)*G,e[10]=(g*A-_*x+m*y)*G,e[11]=(d*x-u*A-h*y)*G,e[12]=(a*T-o*U-l*v)*G,e[13]=(t*U-i*T+r*v)*G,e[14]=(_*E-g*R-p*y)*G,e[15]=(u*R-d*E+f*y)*G,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,h=s*u,g=s*d,_=o*u,p=o*d,m=a*d,y=l*c,E=l*u,x=l*d,R=i.x,A=i.y,C=i.z;return r[0]=(1-(_+m))*R,r[1]=(h+x)*R,r[2]=(g-E)*R,r[3]=0,r[4]=(h-x)*A,r[5]=(1-(f+m))*A,r[6]=(p+y)*A,r[7]=0,r[8]=(g+E)*C,r[9]=(p-y)*C,r[10]=(1-(f+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let o=Wo.set(r[0],r[1],r[2]).length();const a=Wo.set(r[4],r[5],r[6]).length(),l=Wo.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Yi.copy(this);const c=1/o,u=1/a,d=1/l;return Yi.elements[0]*=c,Yi.elements[1]*=c,Yi.elements[2]*=c,Yi.elements[4]*=u,Yi.elements[5]*=u,Yi.elements[6]*=u,Yi.elements[8]*=d,Yi.elements[9]*=d,Yi.elements[10]*=d,t.setFromRotationMatrix(Yi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=yr,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===yr)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Xu)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=yr,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===yr)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Xu)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Wo=new se,Yi=new ln,Bw=new se(0,0,0),zw=new se(1,1,1),ms=new se,Dc=new se,gi=new se,Fm=new ln,Nm=new ka;class cs{constructor(e=0,t=0,i=0,r=cs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nm.setFromEuler(this),this.setFromQuaternion(Nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cs.DEFAULT_ORDER="XYZ";class yv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vw=0;const Om=new se,Xo=new ka,Ur=new ln,Lc=new se,Ya=new se,Hw=new se,Gw=new ka,km=new se(1,0,0),Bm=new se(0,1,0),zm=new se(0,0,1),Vm={type:"added"},Ww={type:"removed"},$o={type:"childadded",child:null},tf={type:"childremoved",child:null};class Ri extends Oa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vw++}),this.uuid=oc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ri.DEFAULT_UP.clone();const e=new se,t=new cs,i=new ka,r=new se(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ln},normalMatrix:{value:new ut}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=Ri.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xo.setFromAxisAngle(e,t),this.quaternion.multiply(Xo),this}rotateOnWorldAxis(e,t){return Xo.setFromAxisAngle(e,t),this.quaternion.premultiply(Xo),this}rotateX(e){return this.rotateOnAxis(km,e)}rotateY(e){return this.rotateOnAxis(Bm,e)}rotateZ(e){return this.rotateOnAxis(zm,e)}translateOnAxis(e,t){return Om.copy(e).applyQuaternion(this.quaternion),this.position.add(Om.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(km,e)}translateY(e){return this.translateOnAxis(Bm,e)}translateZ(e){return this.translateOnAxis(zm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ur.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Lc.copy(e):Lc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ur.lookAt(Ya,Lc,this.up):Ur.lookAt(Lc,Ya,this.up),this.quaternion.setFromRotationMatrix(Ur),r&&(Ur.extractRotation(r.matrixWorld),Xo.setFromRotationMatrix(Ur),this.quaternion.premultiply(Xo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vm),$o.child=e,this.dispatchEvent($o),$o.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ww),tf.child=e,this.dispatchEvent(tf),tf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ur.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ur.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ur),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vm),$o.child=e,this.dispatchEvent($o),$o.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ya,e,Hw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ya,Gw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ri.DEFAULT_UP=new se(0,1,0);Ri.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ic extends Ri{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xw={type:"move"};class nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ic,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ic,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ic,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ic;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const bv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gs={h:0,s:0,l:0},Uc={h:0,s:0,l:0};function rf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=St.workingColorSpace){return this.r=e,this.g=t,this.b=i,St.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=St.workingColorSpace){if(e=Lw(e,1),t=vt(t,0,1),i=vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=rf(o,s,e+1/3),this.g=rf(o,s,e),this.b=rf(o,s,e-1/3)}return St.colorSpaceToWorking(this,r),this}setStyle(e,t=Oi){function i(s){s!==void 0&&parseFloat(s)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:rt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Oi){const i=bv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}copyLinearToSRGB(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Oi){return St.workingToColorSpace(Fn.copy(this),e),Math.round(vt(Fn.r*255,0,255))*65536+Math.round(vt(Fn.g*255,0,255))*256+Math.round(vt(Fn.b*255,0,255))}getHexString(e=Oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.workingToColorSpace(Fn.copy(this),t);const i=Fn.r,r=Fn.g,s=Fn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=St.workingColorSpace){return St.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=Oi){St.workingToColorSpace(Fn.copy(this),e);const t=Fn.r,i=Fn.g,r=Fn.b;return e!==Oi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(gs),this.setHSL(gs.h+e,gs.s+t,gs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gs),e.getHSL(Uc);const i=Kd(gs.h,Uc.h,t),r=Kd(gs.s,Uc.s,t),s=Kd(gs.l,Uc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Ot;Ot.NAMES=bv;class $w extends Ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cs,this.environmentIntensity=1,this.environmentRotation=new cs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const qi=new se,Fr=new se,sf=new se,Nr=new se,jo=new se,Yo=new se,Hm=new se,of=new se,af=new se,lf=new se,cf=new nn,uf=new nn,df=new nn;class Qi{constructor(e=new se,t=new se,i=new se){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qi.subVectors(e,t),r.cross(qi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){qi.subVectors(r,t),Fr.subVectors(i,t),sf.subVectors(e,t);const o=qi.dot(qi),a=qi.dot(Fr),l=qi.dot(sf),c=Fr.dot(Fr),u=Fr.dot(sf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Nr)===null?!1:Nr.x>=0&&Nr.y>=0&&Nr.x+Nr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Nr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Nr.x),l.addScaledVector(o,Nr.y),l.addScaledVector(a,Nr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return cf.setScalar(0),uf.setScalar(0),df.setScalar(0),cf.fromBufferAttribute(e,t),uf.fromBufferAttribute(e,i),df.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(cf,s.x),o.addScaledVector(uf,s.y),o.addScaledVector(df,s.z),o}static isFrontFacing(e,t,i,r){return qi.subVectors(i,t),Fr.subVectors(e,t),qi.cross(Fr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qi.subVectors(this.c,this.b),Fr.subVectors(this.a,this.b),qi.cross(Fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Qi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Qi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;jo.subVectors(r,i),Yo.subVectors(s,i),of.subVectors(e,i);const l=jo.dot(of),c=Yo.dot(of);if(l<=0&&c<=0)return t.copy(i);af.subVectors(e,r);const u=jo.dot(af),d=Yo.dot(af);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(jo,o);lf.subVectors(e,s);const h=jo.dot(lf),g=Yo.dot(lf);if(g>=0&&h<=g)return t.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Yo,a);const p=u*g-h*d;if(p<=0&&d-u>=0&&h-g>=0)return Hm.subVectors(s,r),a=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(Hm,a);const m=1/(p+_+f);return o=_*m,a=f*m,t.copy(i).addScaledVector(jo,o).addScaledVector(Yo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ac{constructor(e=new se(1/0,1/0,1/0),t=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ki):Ki.fromBufferAttribute(s,o),Ki.applyMatrix4(e.matrixWorld),this.expandByPoint(Ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fc.copy(i.boundingBox)),Fc.applyMatrix4(e.matrixWorld),this.union(Fc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ki),Ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qa),Nc.subVectors(this.max,qa),qo.subVectors(e.a,qa),Ko.subVectors(e.b,qa),Zo.subVectors(e.c,qa),_s.subVectors(Ko,qo),xs.subVectors(Zo,Ko),Ks.subVectors(qo,Zo);let t=[0,-_s.z,_s.y,0,-xs.z,xs.y,0,-Ks.z,Ks.y,_s.z,0,-_s.x,xs.z,0,-xs.x,Ks.z,0,-Ks.x,-_s.y,_s.x,0,-xs.y,xs.x,0,-Ks.y,Ks.x,0];return!ff(t,qo,Ko,Zo,Nc)||(t=[1,0,0,0,1,0,0,0,1],!ff(t,qo,Ko,Zo,Nc))?!1:(Oc.crossVectors(_s,xs),t=[Oc.x,Oc.y,Oc.z],ff(t,qo,Ko,Zo,Nc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Or=[new se,new se,new se,new se,new se,new se,new se,new se],Ki=new se,Fc=new ac,qo=new se,Ko=new se,Zo=new se,_s=new se,xs=new se,Ks=new se,qa=new se,Nc=new se,Oc=new se,Zs=new se;function ff(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Zs.fromArray(n,s);const a=r.x*Math.abs(Zs.x)+r.y*Math.abs(Zs.y)+r.z*Math.abs(Zs.z),l=e.dot(Zs),c=t.dot(Zs),u=i.dot(Zs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const sn=new se,kc=new bt;let jw=0;class Tr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jw++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Cm,this.updateRanges=[],this.gpuType=vr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)kc.fromBufferAttribute(this,t),kc.applyMatrix3(e),this.setXY(t,kc.x,kc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ja(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=si(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ja(t,this.array)),t}setX(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ja(t,this.array)),t}setY(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ja(t,this.array)),t}setZ(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ja(t,this.array)),t}setW(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),i=si(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),i=si(i,this.array),r=si(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),i=si(i,this.array),r=si(r,this.array),s=si(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cm&&(e.usage=this.usage),e}}class Sv extends Tr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Mv extends Tr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qr extends Tr{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Yw=new ac,Ka=new se,hf=new se;class t0{constructor(e=new se,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Yw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ka.subVectors(e,this.center);const t=Ka.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ka,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ka.copy(e.center).add(hf)),this.expandByPoint(Ka.copy(e.center).sub(hf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let qw=0;const Ui=new ln,pf=new Ri,Jo=new se,_i=new ac,Za=new ac,vn=new se;class ds extends Oa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qw++}),this.uuid=oc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cw(e)?Mv:Sv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ut().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ui.makeRotationFromQuaternion(e),this.applyMatrix4(Ui),this}rotateX(e){return Ui.makeRotationX(e),this.applyMatrix4(Ui),this}rotateY(e){return Ui.makeRotationY(e),this.applyMatrix4(Ui),this}rotateZ(e){return Ui.makeRotationZ(e),this.applyMatrix4(Ui),this}translate(e,t,i){return Ui.makeTranslation(e,t,i),this.applyMatrix4(Ui),this}scale(e,t,i){return Ui.makeScale(e,t,i),this.applyMatrix4(Ui),this}lookAt(e){return pf.lookAt(e),pf.updateMatrix(),this.applyMatrix4(pf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jo).negate(),this.translate(Jo.x,Jo.y,Jo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qr(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ac);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];_i.setFromBufferAttribute(s),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new t0);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const i=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Za.setFromBufferAttribute(a),this.morphTargetsRelative?(vn.addVectors(_i.min,Za.min),_i.expandByPoint(vn),vn.addVectors(_i.max,Za.max),_i.expandByPoint(vn)):(_i.expandByPoint(Za.min),_i.expandByPoint(Za.max))}_i.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)vn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(vn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)vn.fromBufferAttribute(a,c),l&&(Jo.fromBufferAttribute(e,c),vn.add(Jo)),r=Math.max(r,i.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new se,l[v]=new se;const c=new se,u=new se,d=new se,f=new bt,h=new bt,g=new bt,_=new se,p=new se;function m(v,T,N){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,N),f.fromBufferAttribute(s,v),h.fromBufferAttribute(s,T),g.fromBufferAttribute(s,N),u.sub(c),d.sub(c),h.sub(f),g.sub(f);const U=1/(h.x*g.y-g.x*h.y);isFinite(U)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(U),p.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(U),a[v].add(_),a[T].add(_),a[N].add(_),l[v].add(p),l[T].add(p),l[N].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let v=0,T=y.length;v<T;++v){const N=y[v],U=N.start,L=N.count;for(let H=U,z=U+L;H<z;H+=3)m(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const E=new se,x=new se,R=new se,A=new se;function C(v){R.fromBufferAttribute(r,v),A.copy(R);const T=a[v];E.copy(T),E.sub(R.multiplyScalar(R.dot(T))).normalize(),x.crossVectors(A,T);const U=x.dot(l[v])<0?-1:1;o.setXYZW(v,E.x,E.y,E.z,U)}for(let v=0,T=y.length;v<T;++v){const N=y[v],U=N.start,L=N.count;for(let H=U,z=U+L;H<z;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new se,s=new se,o=new se,a=new se,l=new se,c=new se,u=new se,d=new se;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let m=0;m<u;m++)f[g++]=c[h++]}return new Tr(f,u,d)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ds,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Kw=0;class pd extends Oa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kw++}),this.uuid=oc(),this.name="",this.type="Material",this.blending=Sa,this.side=zs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fh,this.blendDst=hh,this.blendEquation=uo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=La,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ho,this.stencilZFail=Ho,this.stencilZPass=Ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){rt(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){rt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Sa&&(i.blending=this.blending),this.side!==zs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fh&&(i.blendSrc=this.blendSrc),this.blendDst!==hh&&(i.blendDst=this.blendDst),this.blendEquation!==uo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==La&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Am&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ho&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ho&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ho&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const kr=new se,mf=new se,Bc=new se,vs=new se,gf=new se,zc=new se,_f=new se;class Zw{constructor(e=new se,t=new se(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kr.copy(this.origin).addScaledVector(this.direction,t),kr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){mf.copy(e).add(t).multiplyScalar(.5),Bc.copy(t).sub(e).normalize(),vs.copy(this.origin).sub(mf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Bc),a=vs.dot(this.direction),l=-vs.dot(Bc),c=vs.lengthSq(),u=Math.abs(1-o*o);let d,f,h,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(mf).addScaledVector(Bc,f),h}intersectSphere(e,t){kr.subVectors(e.center,this.origin);const i=kr.dot(this.direction),r=kr.dot(kr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,kr)!==null}intersectTriangle(e,t,i,r,s){gf.subVectors(t,e),zc.subVectors(i,e),_f.crossVectors(gf,zc);let o=this.direction.dot(_f),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vs.subVectors(this.origin,e);const l=a*this.direction.dot(zc.crossVectors(vs,zc));if(l<0)return null;const c=a*this.direction.dot(gf.cross(vs));if(c<0||l+c>o)return null;const u=-a*vs.dot(_f);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wv extends pd{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cs,this.combine=nv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gm=new ln,Js=new Zw,Vc=new t0,Wm=new se,Hc=new se,Gc=new se,Wc=new se,xf=new se,Xc=new se,Xm=new se,$c=new se;class Pr extends Ri{constructor(e=new ds,t=new wv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Xc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(xf.fromBufferAttribute(d,e),o?Xc.addScaledVector(xf,u):Xc.addScaledVector(xf.sub(t),u))}t.add(Xc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vc.copy(i.boundingSphere),Vc.applyMatrix4(s),Js.copy(e.ray).recast(e.near),!(Vc.containsPoint(Js.origin)===!1&&(Js.intersectSphere(Vc,Wm)===null||Js.origin.distanceToSquared(Wm)>(e.far-e.near)**2))&&(Gm.copy(s).invert(),Js.copy(e.ray).applyMatrix4(Gm),!(i.boundingBox!==null&&Js.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Js)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],y=Math.max(p.start,h.start),E=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let x=y,R=E;x<R;x+=3){const A=a.getX(x),C=a.getX(x+1),v=a.getX(x+2);r=jc(this,m,e,i,c,u,d,A,C,v),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const y=a.getX(p),E=a.getX(p+1),x=a.getX(p+2);r=jc(this,o,e,i,c,u,d,y,E,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],y=Math.max(p.start,h.start),E=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let x=y,R=E;x<R;x+=3){const A=x,C=x+1,v=x+2;r=jc(this,m,e,i,c,u,d,A,C,v),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const y=p,E=p+1,x=p+2;r=jc(this,o,e,i,c,u,d,y,E,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Jw(n,e,t,i,r,s,o,a){let l;if(e.side===hi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===zs,a),l===null)return null;$c.copy(a),$c.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo($c);return c<t.near||c>t.far?null:{distance:c,point:$c.clone(),object:n}}function jc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Hc),n.getVertexPosition(l,Gc),n.getVertexPosition(c,Wc);const u=Jw(n,e,t,i,Hc,Gc,Wc,Xm);if(u){const d=new se;Qi.getBarycoord(Xm,Hc,Gc,Wc,d),r&&(u.uv=Qi.getInterpolatedAttribute(r,a,l,c,d,new bt)),s&&(u.uv1=Qi.getInterpolatedAttribute(s,a,l,c,d,new bt)),o&&(u.normal=Qi.getInterpolatedAttribute(o,a,l,c,d,new se),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new se,materialIndex:0};Qi.getNormal(Hc,Gc,Wc,f.normal),u.face=f,u.barycoord=d}return u}class Qw extends ri{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Cn,u=Cn,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vf=new se,eE=new se,tE=new ut;class oo{constructor(e=new se(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=vf.subVectors(i,t).cross(eE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(vf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||tE.getNormalMatrix(e),r=this.coplanarPoint(vf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qs=new t0,nE=new bt(.5,.5),Yc=new se;class Ev{constructor(e=new oo,t=new oo,i=new oo,r=new oo,s=new oo,o=new oo){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yr,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],g=s[8],_=s[9],p=s[10],m=s[11],y=s[12],E=s[13],x=s[14],R=s[15];if(r[0].setComponents(c-o,h-u,m-g,R-y).normalize(),r[1].setComponents(c+o,h+u,m+g,R+y).normalize(),r[2].setComponents(c+a,h+d,m+_,R+E).normalize(),r[3].setComponents(c-a,h-d,m-_,R-E).normalize(),i)r[4].setComponents(l,f,p,x).normalize(),r[5].setComponents(c-l,h-f,m-p,R-x).normalize();else if(r[4].setComponents(c-l,h-f,m-p,R-x).normalize(),t===yr)r[5].setComponents(c+l,h+f,m+p,R+x).normalize();else if(t===Xu)r[5].setComponents(l,f,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(e){Qs.center.set(0,0,0);const t=nE.distanceTo(e.center);return Qs.radius=.7071067811865476+t,Qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Yc.x=r.normal.x>0?e.max.x:e.min.x,Yc.y=r.normal.y>0?e.max.y:e.min.y,Yc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Yc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tv extends ri{constructor(e=[],t=Lo,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jl extends ri{constructor(e,t,i=Rr,r,s,o,a=Cn,l=Cn,c,u=ls,d=1){if(u!==ls&&u!==xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new e0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class iE extends Jl{constructor(e,t=Rr,i=Lo,r,s,o=Cn,a=Cn,l,c=ls){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Av extends ri{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class lc extends ds{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Qr(c,3)),this.setAttribute("normal",new Qr(u,3)),this.setAttribute("uv",new Qr(d,2));function g(_,p,m,y,E,x,R,A,C,v,T){const N=x/C,U=R/v,L=x/2,H=R/2,z=A/2,G=C+1,X=v+1;let k=0,K=0;const j=new se;for(let F=0;F<X;F++){const ae=F*U-H;for(let pe=0;pe<G;pe++){const me=pe*N-L;j[_]=me*y,j[p]=ae*E,j[m]=z,c.push(j.x,j.y,j.z),j[_]=0,j[p]=0,j[m]=A>0?1:-1,u.push(j.x,j.y,j.z),d.push(pe/C),d.push(1-F/v),k+=1}}for(let F=0;F<v;F++)for(let ae=0;ae<C;ae++){const pe=f+ae+G*F,me=f+ae+G*(F+1),ve=f+(ae+1)+G*(F+1),Te=f+(ae+1)+G*F;l.push(pe,me,Te),l.push(me,ve,Te),K+=6}a.addGroup(h,K,T),h+=K,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class cc extends ds{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,h=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const y=m*f-o;for(let E=0;E<c;E++){const x=E*d-s;g.push(x,-y,0),_.push(0,0,1),p.push(E/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const E=y+c*m,x=y+c*(m+1),R=y+1+c*(m+1),A=y+1+c*m;h.push(E,x,A),h.push(x,R,A)}this.setIndex(h),this.setAttribute("position",new Qr(g,3)),this.setAttribute("normal",new Qr(_,3)),this.setAttribute("uv",new Qr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.width,e.height,e.widthSegments,e.heightSegments)}}function Na(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Kn(n){const e={};for(let t=0;t<n.length;t++){const i=Na(n[t]);for(const r in i)e[r]=i[r]}return e}function rE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Cv(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const sE={clone:Na,merge:Kn};var oE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rr extends pd{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oE,this.fragmentShader=aE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Na(e.uniforms),this.uniformsGroups=rE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class lE extends rr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class cE extends pd{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uE extends pd{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qc=new se,Kc=new ka,ar=new se;class Rv extends Ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=yr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qc,Kc,ar),ar.x===1&&ar.y===1&&ar.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qc,Kc,ar.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(qc,Kc,ar),ar.x===1&&ar.y===1&&ar.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qc,Kc,ar.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ys=new se,$m=new bt,jm=new bt;class Ji extends Rv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tp*2*Math.atan(Math.tan(qd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ys.x,ys.y).multiplyScalar(-e/ys.z),ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ys.x,ys.y).multiplyScalar(-e/ys.z)}getViewSize(e,t){return this.getViewBounds(e,$m,jm),t.subVectors(jm,$m)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qd*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class n0 extends Rv{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qo=-90,ea=1;class dE extends Ri{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ji(Qo,ea,e,t);r.layers=this.layers,this.add(r);const s=new Ji(Qo,ea,e,t);s.layers=this.layers,this.add(s);const o=new Ji(Qo,ea,e,t);o.layers=this.layers,this.add(o);const a=new Ji(Qo,ea,e,t);a.layers=this.layers,this.add(a);const l=new Ji(Qo,ea,e,t);l.layers=this.layers,this.add(l);const c=new Ji(Qo,ea,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===yr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class fE extends Ji{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Ym(n,e,t,i){const r=hE(i);switch(t){case mv:return n*e;case _v:return n*e/r.components*r.byteLength;case qp:return n*e/r.components*r.byteLength;case Ua:return n*e*2/r.components*r.byteLength;case Kp:return n*e*2/r.components*r.byteLength;case gv:return n*e*3/r.components*r.byteLength;case er:return n*e*4/r.components*r.byteLength;case Zp:return n*e*4/r.components*r.byteLength;case mu:case gu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _u:case xu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wh:case Th:return Math.max(n,16)*Math.max(e,8)/4;case Mh:case Eh:return Math.max(n,8)*Math.max(e,8)/2;case Ah:case Ch:case Ph:case Dh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Rh:case Lh:case Ih:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case kh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case zh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Hh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Xh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case $h:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case jh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Yh:case qh:case Kh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Zh:case Jh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Qh:case ep:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hE(n){switch(n){case zi:case dv:return{byteLength:1,components:1};case Kl:case fv:case as:return{byteLength:2,components:1};case jp:case Yp:return{byteLength:2,components:4};case Rr:case $p:case vr:return{byteLength:4,components:1};case hv:case pv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xp}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Pv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function pE(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],_=d[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const _=d[h];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var mE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gE=`#ifdef USE_ALPHAHASH
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
#endif`,_E=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bE=`#ifdef USE_AOMAP
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
#endif`,SE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ME=`#ifdef USE_BATCHING
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
#endif`,wE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,EE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,CE=`#ifdef USE_IRIDESCENCE
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
#endif`,RE=`#ifdef USE_BUMPMAP
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
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,FE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,NE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,OE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,kE=`#define PI 3.141592653589793
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
} // validated`,BE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zE=`vec3 transformedNormal = objectNormal;
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
#endif`,VE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,XE="gl_FragColor = linearToOutputTexel( gl_FragColor );",$E=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jE=`#ifdef USE_ENVMAP
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
#endif`,YE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qE=`#ifdef USE_ENVMAP
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
#endif`,KE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZE=`#ifdef USE_ENVMAP
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
#endif`,JE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n2=`#ifdef USE_GRADIENTMAP
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
}`,i2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o2=`uniform bool receiveShadow;
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
#endif`,a2=`#ifdef USE_ENVMAP
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
#endif`,l2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f2=`PhysicalMaterial material;
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
#endif`,h2=`uniform sampler2D dfgLUT;
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
}`,p2=`
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
#endif`,m2=`#if defined( RE_IndirectDiffuse )
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
#endif`,g2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,w2=`#if defined( USE_POINTS_UV )
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
#endif`,E2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P2=`#ifdef USE_MORPHTARGETS
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
#endif`,D2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,I2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,U2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,O2=`#ifdef USE_NORMALMAP
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
#endif`,k2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,W2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,K2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,J2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Q2=`float getShadowMask() {
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
}`,dt={alphahash_fragment:mE,alphahash_pars_fragment:gE,alphamap_fragment:_E,alphamap_pars_fragment:xE,alphatest_fragment:vE,alphatest_pars_fragment:yE,aomap_fragment:bE,aomap_pars_fragment:SE,batching_pars_vertex:ME,batching_vertex:wE,begin_vertex:EE,beginnormal_vertex:TE,bsdfs:AE,iridescence_fragment:CE,bumpmap_pars_fragment:RE,clipping_planes_fragment:PE,clipping_planes_pars_fragment:DE,clipping_planes_pars_vertex:LE,clipping_planes_vertex:IE,color_fragment:UE,color_pars_fragment:FE,color_pars_vertex:NE,color_vertex:OE,common:kE,cube_uv_reflection_fragment:BE,defaultnormal_vertex:zE,displacementmap_pars_vertex:VE,displacementmap_vertex:HE,emissivemap_fragment:GE,emissivemap_pars_fragment:WE,colorspace_fragment:XE,colorspace_pars_fragment:$E,envmap_fragment:jE,envmap_common_pars_fragment:YE,envmap_pars_fragment:qE,envmap_pars_vertex:KE,envmap_physical_pars_fragment:a2,envmap_vertex:ZE,fog_vertex:JE,fog_pars_vertex:QE,fog_fragment:e2,fog_pars_fragment:t2,gradientmap_pars_fragment:n2,lightmap_pars_fragment:i2,lights_lambert_fragment:r2,lights_lambert_pars_fragment:s2,lights_pars_begin:o2,lights_toon_fragment:l2,lights_toon_pars_fragment:c2,lights_phong_fragment:u2,lights_phong_pars_fragment:d2,lights_physical_fragment:f2,lights_physical_pars_fragment:h2,lights_fragment_begin:p2,lights_fragment_maps:m2,lights_fragment_end:g2,logdepthbuf_fragment:_2,logdepthbuf_pars_fragment:x2,logdepthbuf_pars_vertex:v2,logdepthbuf_vertex:y2,map_fragment:b2,map_pars_fragment:S2,map_particle_fragment:M2,map_particle_pars_fragment:w2,metalnessmap_fragment:E2,metalnessmap_pars_fragment:T2,morphinstance_vertex:A2,morphcolor_vertex:C2,morphnormal_vertex:R2,morphtarget_pars_vertex:P2,morphtarget_vertex:D2,normal_fragment_begin:L2,normal_fragment_maps:I2,normal_pars_fragment:U2,normal_pars_vertex:F2,normal_vertex:N2,normalmap_pars_fragment:O2,clearcoat_normal_fragment_begin:k2,clearcoat_normal_fragment_maps:B2,clearcoat_pars_fragment:z2,iridescence_pars_fragment:V2,opaque_fragment:H2,packing:G2,premultiplied_alpha_fragment:W2,project_vertex:X2,dithering_fragment:$2,dithering_pars_fragment:j2,roughnessmap_fragment:Y2,roughnessmap_pars_fragment:q2,shadowmap_pars_fragment:K2,shadowmap_pars_vertex:Z2,shadowmap_vertex:J2,shadowmask_pars_fragment:Q2,skinbase_vertex:eT,skinning_pars_vertex:tT,skinning_vertex:nT,skinnormal_vertex:iT,specularmap_fragment:rT,specularmap_pars_fragment:sT,tonemapping_fragment:oT,tonemapping_pars_fragment:aT,transmission_fragment:lT,transmission_pars_fragment:cT,uv_pars_fragment:uT,uv_pars_vertex:dT,uv_vertex:fT,worldpos_vertex:hT,background_vert:pT,background_frag:mT,backgroundCube_vert:gT,backgroundCube_frag:_T,cube_vert:xT,cube_frag:vT,depth_vert:yT,depth_frag:bT,distance_vert:ST,distance_frag:MT,equirect_vert:wT,equirect_frag:ET,linedashed_vert:TT,linedashed_frag:AT,meshbasic_vert:CT,meshbasic_frag:RT,meshlambert_vert:PT,meshlambert_frag:DT,meshmatcap_vert:LT,meshmatcap_frag:IT,meshnormal_vert:UT,meshnormal_frag:FT,meshphong_vert:NT,meshphong_frag:OT,meshphysical_vert:kT,meshphysical_frag:BT,meshtoon_vert:zT,meshtoon_frag:VT,points_vert:HT,points_frag:GT,shadow_vert:WT,shadow_frag:XT,sprite_vert:$T,sprite_frag:jT},ze={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},pr={basic:{uniforms:Kn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Kn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Kn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Kn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Kn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Ot(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Kn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Kn([ze.points,ze.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Kn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Kn([ze.common,ze.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Kn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Kn([ze.sprite,ze.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:Kn([ze.common,ze.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:Kn([ze.lights,ze.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};pr.physical={uniforms:Kn([pr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Zc={r:0,b:0,g:0},eo=new cs,YT=new ln;function qT(n,e,t,i,r,s){const o=new Ot(0);let a=r===!0?0:1,l,c,u=null,d=0,f=null;function h(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){const x=y.backgroundBlurriness>0;E=e.get(E,x)}return E}function g(y){let E=!1;const x=h(y);x===null?p(o,a):x&&x.isColor&&(p(x,1),E=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(y,E){const x=h(E);x&&(x.isCubeTexture||x.mapping===hd)?(c===void 0&&(c=new Pr(new lc(1,1,1),new rr({name:"BackgroundCubeMaterial",uniforms:Na(pr.backgroundCube.uniforms),vertexShader:pr.backgroundCube.vertexShader,fragmentShader:pr.backgroundCube.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),eo.copy(E.backgroundRotation),eo.x*=-1,eo.y*=-1,eo.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(eo.y*=-1,eo.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(YT.makeRotationFromEuler(eo)),c.material.toneMapped=St.getTransfer(x.colorSpace)!==Ut,(u!==x||d!==x.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Pr(new cc(2,2),new rr({name:"BackgroundMaterial",uniforms:Na(pr.background.uniforms),vertexShader:pr.background.vertexShader,fragmentShader:pr.background.fragmentShader,side:zs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=St.getTransfer(x.colorSpace)!==Ut,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,E){y.getRGB(Zc,Cv(n)),t.buffers.color.setClear(Zc.r,Zc.g,Zc.b,E,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:g,addToRenderList:_,dispose:m}}function KT(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(U,L,H,z,G){let X=!1;const k=d(U,z,H,L);s!==k&&(s=k,c(s.object)),X=h(U,z,H,G),X&&g(U,z,H,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(U,L,H,z),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function u(U){return n.deleteVertexArray(U)}function d(U,L,H,z){const G=z.wireframe===!0;let X=i[L.id];X===void 0&&(X={},i[L.id]=X);const k=U.isInstancedMesh===!0?U.id:0;let K=X[k];K===void 0&&(K={},X[k]=K);let j=K[H.id];j===void 0&&(j={},K[H.id]=j);let F=j[G];return F===void 0&&(F=f(l()),j[G]=F),F}function f(U){const L=[],H=[],z=[];for(let G=0;G<t;G++)L[G]=0,H[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:z,object:U,attributes:{},index:null}}function h(U,L,H,z){const G=s.attributes,X=L.attributes;let k=0;const K=H.getAttributes();for(const j in K)if(K[j].location>=0){const ae=G[j];let pe=X[j];if(pe===void 0&&(j==="instanceMatrix"&&U.instanceMatrix&&(pe=U.instanceMatrix),j==="instanceColor"&&U.instanceColor&&(pe=U.instanceColor)),ae===void 0||ae.attribute!==pe||pe&&ae.data!==pe.data)return!0;k++}return s.attributesNum!==k||s.index!==z}function g(U,L,H,z){const G={},X=L.attributes;let k=0;const K=H.getAttributes();for(const j in K)if(K[j].location>=0){let ae=X[j];ae===void 0&&(j==="instanceMatrix"&&U.instanceMatrix&&(ae=U.instanceMatrix),j==="instanceColor"&&U.instanceColor&&(ae=U.instanceColor));const pe={};pe.attribute=ae,ae&&ae.data&&(pe.data=ae.data),G[j]=pe,k++}s.attributes=G,s.attributesNum=k,s.index=z}function _(){const U=s.newAttributes;for(let L=0,H=U.length;L<H;L++)U[L]=0}function p(U){m(U,0)}function m(U,L){const H=s.newAttributes,z=s.enabledAttributes,G=s.attributeDivisors;H[U]=1,z[U]===0&&(n.enableVertexAttribArray(U),z[U]=1),G[U]!==L&&(n.vertexAttribDivisor(U,L),G[U]=L)}function y(){const U=s.newAttributes,L=s.enabledAttributes;for(let H=0,z=L.length;H<z;H++)L[H]!==U[H]&&(n.disableVertexAttribArray(H),L[H]=0)}function E(U,L,H,z,G,X,k){k===!0?n.vertexAttribIPointer(U,L,H,G,X):n.vertexAttribPointer(U,L,H,z,G,X)}function x(U,L,H,z){_();const G=z.attributes,X=H.getAttributes(),k=L.defaultAttributeValues;for(const K in X){const j=X[K];if(j.location>=0){let F=G[K];if(F===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(F=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(F=U.instanceColor)),F!==void 0){const ae=F.normalized,pe=F.itemSize,me=e.get(F);if(me===void 0)continue;const ve=me.buffer,Te=me.type,J=me.bytesPerElement,ue=Te===n.INT||Te===n.UNSIGNED_INT||F.gpuType===$p;if(F.isInterleavedBufferAttribute){const oe=F.data,Re=oe.stride,Ae=F.offset;if(oe.isInstancedInterleavedBuffer){for(let le=0;le<j.locationSize;le++)m(j.location+le,oe.meshPerAttribute);U.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let le=0;le<j.locationSize;le++)p(j.location+le);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let le=0;le<j.locationSize;le++)E(j.location+le,pe/j.locationSize,Te,ae,Re*J,(Ae+pe/j.locationSize*le)*J,ue)}else{if(F.isInstancedBufferAttribute){for(let oe=0;oe<j.locationSize;oe++)m(j.location+oe,F.meshPerAttribute);U.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let oe=0;oe<j.locationSize;oe++)p(j.location+oe);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let oe=0;oe<j.locationSize;oe++)E(j.location+oe,pe/j.locationSize,Te,ae,pe*J,pe/j.locationSize*oe*J,ue)}}else if(k!==void 0){const ae=k[K];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(j.location,ae);break;case 3:n.vertexAttrib3fv(j.location,ae);break;case 4:n.vertexAttrib4fv(j.location,ae);break;default:n.vertexAttrib1fv(j.location,ae)}}}}y()}function R(){T();for(const U in i){const L=i[U];for(const H in L){const z=L[H];for(const G in z){const X=z[G];for(const k in X)u(X[k].object),delete X[k];delete z[G]}}delete i[U]}}function A(U){if(i[U.id]===void 0)return;const L=i[U.id];for(const H in L){const z=L[H];for(const G in z){const X=z[G];for(const k in X)u(X[k].object),delete X[k];delete z[G]}}delete i[U.id]}function C(U){for(const L in i){const H=i[L];for(const z in H){const G=H[z];if(G[U.id]===void 0)continue;const X=G[U.id];for(const k in X)u(X[k].object),delete X[k];delete G[U.id]}}}function v(U){for(const L in i){const H=i[L],z=U.isInstancedMesh===!0?U.id:0,G=H[z];if(G!==void 0){for(const X in G){const k=G[X];for(const K in k)u(k[K].object),delete k[K];delete G[X]}delete H[z],Object.keys(H).length===0&&delete i[L]}}}function T(){N(),o=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:N,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function ZT(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,i,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function JT(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==er&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const v=C===as&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==zi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==vr&&!v)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(rt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:x,maxSamples:R,samples:A}}function QT(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new oo,a=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const y=s?0:i,E=y*4;let x=m.clippingState||null;l.value=x,x=u(g,f,E,h);for(let R=0;R!==E;++R)x[R]=t[R];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=h+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,x=h;E!==_;++E,x+=4)o.copy(d[E]).applyMatrix4(y,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const Rs=4,qm=[.125,.215,.35,.446,.526,.582],fo=20,eA=256,Ja=new n0,Km=new Ot;let yf=null,bf=0,Sf=0,Mf=!1;const tA=new se;class Zm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=tA}=s;yf=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),Sf=this._renderer.getActiveMipmapLevel(),Mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yf,bf,Sf),this._renderer.xr.enabled=Mf,e.scissorTest=!1,ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lo||e.mapping===Ia?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yf=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),Sf=this._renderer.getActiveMipmapLevel(),Mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:as,format:er,colorSpace:Fa,depthBuffer:!1},r=Jm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jm(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=nA(s)),this._blurMaterial=rA(s,e,t),this._ggxMaterial=iA(s,e,t)}return r}_compileMaterial(e){const t=new Pr(new ds,e);this._renderer.compile(t,Ja)}_sceneToCubeUV(e,t,i,r,s){const l=new Ji(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Km),d.toneMapping=wr,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pr(new lc,new wv({name:"PMREM.Background",side:hi,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let m=!1;const y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,m=!0):(p.color.copy(Km),m=!0);for(let E=0;E<6;E++){const x=E%3;x===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):x===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const R=this._cubeSize;ta(r,x*R,E>2?R:0,R,R),d.setRenderTarget(r),m&&d.render(_,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Lo||e.mapping===Ia;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=eg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ta(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ja)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,h=d*f,{_lodMax:g}=this,_=this._sizeLods[i],p=3*_*(i>g-Rs?i-g+Rs:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=g-t,ta(s,p,m,3*_,2*_),r.setRenderTarget(s),r.render(a,Ja),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,ta(e,p,m,3*_,2*_),r.setRenderTarget(e),r.render(a,Ja)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*fo-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):fo;p>fo&&rt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fo}`);const m=[];let y=0;for(let C=0;C<fo;++C){const v=C/_,T=Math.exp(-v*v/2);m.push(T),C===0?y+=T:C<p&&(y+=2*T)}for(let C=0;C<m.length;C++)m[C]=m[C]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;const x=this._sizeLods[r],R=3*x*(r>E-Rs?r-E+Rs:0),A=4*(this._cubeSize-x);ta(t,R,A,3*x,2*x),l.setRenderTarget(t),l.render(d,Ja)}}function nA(n){const e=[],t=[],i=[];let r=n;const s=n-Rs+1+qm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Rs?l=qm[o-n+Rs-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*h),E=new Float32Array(p*g*h),x=new Float32Array(m*g*h);for(let A=0;A<h;A++){const C=A%3*2/3-1,v=A>2?0:-1,T=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];y.set(T,_*g*A),E.set(f,p*g*A);const N=[A,A,A,A,A,A];x.set(N,m*g*A)}const R=new ds;R.setAttribute("position",new Tr(y,_)),R.setAttribute("uv",new Tr(E,p)),R.setAttribute("faceIndex",new Tr(x,m)),i.push(new Pr(R,null)),r>Rs&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Jm(n,e,t){const i=new Er(n,e,t);return i.texture.mapping=hd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ta(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function iA(n,e,t){return new rr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:eA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:md(),fragmentShader:`

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
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function rA(n,e,t){const i=new Float32Array(fo),r=new se(0,1,0);return new rr({name:"SphericalGaussianBlur",defines:{n:fo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:md(),fragmentShader:`

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
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function Qm(){return new rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:md(),fragmentShader:`

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
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function eg(){return new rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function md(){return`

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
			`},r=new lc(5,5,5),s=new rr({name:"CubemapFromEquirect",uniforms:Na(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hi,blending:Zr});s.uniforms.tEquirect.value=t;const o=new Pr(r,s),a=t.minFilter;return t.minFilter===_o&&(t.minFilter=Gn),new dE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function sA(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?o(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===$d||h===jd)if(e.has(f)){const g=e.get(f).texture;return a(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const _=new Dv(g.height);return _.fromEquirectangularTexture(n,f),e.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const h=f.mapping,g=h===$d||h===jd,_=h===Lo||h===Ia;if(g||_){let p=t.get(f);const m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new Zm(n)),p=g?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const y=f.image;return g&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new Zm(n)),p=g?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,h){return h===$d?f.mapping=Lo:h===jd&&(f.mapping=Ia),f}function l(f){let h=0;const g=6;for(let _=0;_<g;_++)f[_]!==void 0&&h++;return h===g}function c(f){const h=f.target;h.removeEventListener("dispose",c);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function oA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ju("WebGLRenderer: "+i+" extension not supported."),r}}}function aA(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(h!==null){const y=h.array;_=h.version;for(let E=0,x=y.length;E<x;E+=3){const R=y[E+0],A=y[E+1],C=y[E+2];f.push(R,A,A,C,C,R)}}else{const y=g.array;_=g.version;for(let E=0,x=y.length/3-1;E<x;E+=3){const R=E+0,A=E+1,C=E+2;f.push(R,A,A,C,C,R)}}const p=new(g.count>=65535?Mv:Sv)(f,1);p.version=_;const m=s.get(d);m&&e.remove(m),s.set(d,p)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function lA(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function c(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,f*o,g),t.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,g);let p=0;for(let m=0;m<g;m++)p+=h[m];t.update(p,i,1)}function d(f,h,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,h[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,_,0,g);let m=0;for(let y=0;y<g;y++)m+=h[y]*_[y];t.update(m,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function cA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Et("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function uA(n,e,t){const i=new WeakMap,r=new nn;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let N=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",N)};var h=N;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),p===!0&&(x=3);let R=a.attributes.position.count*x,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const C=new Float32Array(R*A*4*d),v=new vv(C,R,A,d);v.type=vr,v.needsUpdate=!0;const T=x*4;for(let U=0;U<d;U++){const L=m[U],H=y[U],z=E[U],G=R*A*4*U;for(let X=0;X<L.count;X++){const k=X*T;g===!0&&(r.fromBufferAttribute(L,X),C[G+k+0]=r.x,C[G+k+1]=r.y,C[G+k+2]=r.z,C[G+k+3]=0),_===!0&&(r.fromBufferAttribute(H,X),C[G+k+4]=r.x,C[G+k+5]=r.y,C[G+k+6]=r.z,C[G+k+7]=0),p===!0&&(r.fromBufferAttribute(z,X),C[G+k+8]=r.x,C[G+k+9]=r.y,C[G+k+10]=r.z,C[G+k+11]=z.itemSize===4?r.w:1)}}f={count:d,texture:v,size:new bt(R,A)},i.set(a,f),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function dA(n,e,t,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const fA={[iv]:"LINEAR_TONE_MAPPING",[rv]:"REINHARD_TONE_MAPPING",[sv]:"CINEON_TONE_MAPPING",[ov]:"ACES_FILMIC_TONE_MAPPING",[lv]:"AGX_TONE_MAPPING",[cv]:"NEUTRAL_TONE_MAPPING",[av]:"CUSTOM_TONE_MAPPING"};function hA(n,e,t,i,r){const s=new Er(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),o=new Er(e,t,{type:as,depthBuffer:!1,stencilBuffer:!1}),a=new ds;a.setAttribute("position",new Qr([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Qr([0,2,0,0,2,0],2));const l=new lE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Pr(a,l),u=new n0(-1,1,1,-1,0,1);let d=null,f=null,h=!1,g,_=null,p=[],m=!1;this.setSize=function(y,E){s.setSize(y,E),o.setSize(y,E);for(let x=0;x<p.length;x++){const R=p[x];R.setSize&&R.setSize(y,E)}},this.setEffects=function(y){p=y,m=p.length>0&&p[0].isRenderPass===!0;const E=s.width,x=s.height;for(let R=0;R<p.length;R++){const A=p[R];A.setSize&&A.setSize(E,x)}},this.begin=function(y,E){if(h||y.toneMapping===wr&&p.length===0)return!1;if(_=E,E!==null){const x=E.width,R=E.height;(s.width!==x||s.height!==R)&&this.setSize(x,R)}return m===!1&&y.setRenderTarget(s),g=y.toneMapping,y.toneMapping=wr,!0},this.hasRenderPass=function(){return m},this.end=function(y,E){y.toneMapping=g,h=!0;let x=s,R=o;for(let A=0;A<p.length;A++){const C=p[A];if(C.enabled!==!1&&(C.render(y,R,x,E),C.needsSwap!==!1)){const v=x;x=R,R=v}}if(d!==y.outputColorSpace||f!==y.toneMapping){d=y.outputColorSpace,f=y.toneMapping,l.defines={},St.getTransfer(d)===Ut&&(l.defines.SRGB_TRANSFER="");const A=fA[f];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,y.setRenderTarget(_),y.render(c,u),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Lv=new ri,np=new Jl(1,1),Iv=new vv,Uv=new kw,Fv=new Tv,tg=[],ng=[],ig=new Float32Array(16),rg=new Float32Array(9),sg=new Float32Array(4);function Ba(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=tg[r];if(s===void 0&&(s=new Float32Array(r),tg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function mn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function gd(n,e){let t=ng[e];t===void 0&&(t=new Int32Array(e),ng[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function pA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function mA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2fv(this.addr,e),gn(t,e)}}function gA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;n.uniform3fv(this.addr,e),gn(t,e)}}function _A(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4fv(this.addr,e),gn(t,e)}}function xA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;sg.set(i),n.uniformMatrix2fv(this.addr,!1,sg),gn(t,i)}}function vA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;rg.set(i),n.uniformMatrix3fv(this.addr,!1,rg),gn(t,i)}}function yA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;ig.set(i),n.uniformMatrix4fv(this.addr,!1,ig),gn(t,i)}}function bA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function SA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2iv(this.addr,e),gn(t,e)}}function MA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;n.uniform3iv(this.addr,e),gn(t,e)}}function wA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4iv(this.addr,e),gn(t,e)}}function EA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function TA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2uiv(this.addr,e),gn(t,e)}}function AA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;n.uniform3uiv(this.addr,e),gn(t,e)}}function CA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4uiv(this.addr,e),gn(t,e)}}function RA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(np.compareFunction=t.isReversedDepthBuffer()?Qp:Jp,s=np):s=Lv,t.setTexture2D(e||s,r)}function PA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Uv,r)}function DA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Fv,r)}function LA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Iv,r)}function IA(n){switch(n){case 5126:return pA;case 35664:return mA;case 35665:return gA;case 35666:return _A;case 35674:return xA;case 35675:return vA;case 35676:return yA;case 5124:case 35670:return bA;case 35667:case 35671:return SA;case 35668:case 35672:return MA;case 35669:case 35673:return wA;case 5125:return EA;case 36294:return TA;case 36295:return AA;case 36296:return CA;case 35678:case 36198:case 36298:case 36306:case 35682:return RA;case 35679:case 36299:case 36307:return PA;case 35680:case 36300:case 36308:case 36293:return DA;case 36289:case 36303:case 36311:case 36292:return LA}}function UA(n,e){n.uniform1fv(this.addr,e)}function FA(n,e){const t=Ba(e,this.size,2);n.uniform2fv(this.addr,t)}function NA(n,e){const t=Ba(e,this.size,3);n.uniform3fv(this.addr,t)}function OA(n,e){const t=Ba(e,this.size,4);n.uniform4fv(this.addr,t)}function kA(n,e){const t=Ba(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function BA(n,e){const t=Ba(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zA(n,e){const t=Ba(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function VA(n,e){n.uniform1iv(this.addr,e)}function HA(n,e){n.uniform2iv(this.addr,e)}function GA(n,e){n.uniform3iv(this.addr,e)}function WA(n,e){n.uniform4iv(this.addr,e)}function XA(n,e){n.uniform1uiv(this.addr,e)}function $A(n,e){n.uniform2uiv(this.addr,e)}function jA(n,e){n.uniform3uiv(this.addr,e)}function YA(n,e){n.uniform4uiv(this.addr,e)}function qA(n,e,t){const i=this.cache,r=e.length,s=gd(t,r);mn(i,s)||(n.uniform1iv(this.addr,s),gn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=np:o=Lv;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function KA(n,e,t){const i=this.cache,r=e.length,s=gd(t,r);mn(i,s)||(n.uniform1iv(this.addr,s),gn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Uv,s[o])}function ZA(n,e,t){const i=this.cache,r=e.length,s=gd(t,r);mn(i,s)||(n.uniform1iv(this.addr,s),gn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Fv,s[o])}function JA(n,e,t){const i=this.cache,r=e.length,s=gd(t,r);mn(i,s)||(n.uniform1iv(this.addr,s),gn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Iv,s[o])}function QA(n){switch(n){case 5126:return UA;case 35664:return FA;case 35665:return NA;case 35666:return OA;case 35674:return kA;case 35675:return BA;case 35676:return zA;case 5124:case 35670:return VA;case 35667:case 35671:return HA;case 35668:case 35672:return GA;case 35669:case 35673:return WA;case 5125:return XA;case 36294:return $A;case 36295:return jA;case 36296:return YA;case 35678:case 36198:case 36298:case 36306:case 35682:return qA;case 35679:case 36299:case 36307:return KA;case 35680:case 36300:case 36308:case 36293:return ZA;case 36289:case 36303:case 36311:case 36292:return JA}}class e3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=IA(t.type)}}class t3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=QA(t.type)}}class n3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const wf=/(\w+)(\])?(\[|\.)?/g;function og(n,e){n.seq.push(e),n.map[e.id]=e}function i3(n,e,t){const i=n.name,r=i.length;for(wf.lastIndex=0;;){const s=wf.exec(i),o=wf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){og(t,c===void 0?new e3(a,n,e):new t3(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new n3(a),og(t,d)),t=d}}}class vu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);i3(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ag(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const r3=37297;let s3=0;function o3(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const lg=new ut;function a3(n){St._getMatrix(lg,St.workingColorSpace,n);const e=`mat3( ${lg.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(n)){case Wu:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function cg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+o3(n.getShaderSource(e),a)}else return s}function l3(n,e){const t=a3(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const c3={[iv]:"Linear",[rv]:"Reinhard",[sv]:"Cineon",[ov]:"ACESFilmic",[lv]:"AgX",[cv]:"Neutral",[av]:"Custom"};function u3(n,e){const t=c3[e];return t===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Jc=new se;function d3(){St.getLuminanceCoefficients(Jc);const n=Jc.x.toFixed(4),e=Jc.y.toFixed(4),t=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f3(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fl).join(`
`)}function h3(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function p3(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function fl(n){return n!==""}function ug(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const m3=/^[ \t]*#include +<([\w\d./]+)>/gm;function ip(n){return n.replace(m3,_3)}const g3=new Map;function _3(n,e){let t=dt[e];if(t===void 0){const i=g3.get(e);if(i!==void 0)t=dt[i],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ip(t)}const x3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fg(n){return n.replace(x3,v3)}function v3(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hg(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const y3={[pu]:"SHADOWMAP_TYPE_PCF",[dl]:"SHADOWMAP_TYPE_VSM"};function b3(n){return y3[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const S3={[Lo]:"ENVMAP_TYPE_CUBE",[Ia]:"ENVMAP_TYPE_CUBE",[hd]:"ENVMAP_TYPE_CUBE_UV"};function M3(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":S3[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const w3={[Ia]:"ENVMAP_MODE_REFRACTION"};function E3(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":w3[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const T3={[nv]:"ENVMAP_BLENDING_MULTIPLY",[gw]:"ENVMAP_BLENDING_MIX",[_w]:"ENVMAP_BLENDING_ADD"};function A3(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":T3[n.combine]||"ENVMAP_BLENDING_NONE"}function C3(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function R3(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=b3(t),c=M3(t),u=E3(t),d=A3(t),f=C3(t),h=f3(t),g=h3(s),_=r.createProgram();let p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fl).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fl).join(`
`),m.length>0&&(m+=`
`)):(p=[hg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fl).join(`
`),m=[hg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wr?"#define TONE_MAPPING":"",t.toneMapping!==wr?dt.tonemapping_pars_fragment:"",t.toneMapping!==wr?u3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,l3("linearToOutputTexel",t.outputColorSpace),d3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fl).join(`
`)),o=ip(o),o=ug(o,t),o=dg(o,t),a=ip(a),a=ug(a,t),a=dg(a,t),o=fg(o),a=fg(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Rm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=y+p+o,x=y+m+a,R=ag(r,r.VERTEX_SHADER,E),A=ag(r,r.FRAGMENT_SHADER,x);r.attachShader(_,R),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(U){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(_)||"",H=r.getShaderInfoLog(R)||"",z=r.getShaderInfoLog(A)||"",G=L.trim(),X=H.trim(),k=z.trim();let K=!0,j=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,R,A);else{const F=cg(r,R,"vertex"),ae=cg(r,A,"fragment");Et("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+G+`
`+F+`
`+ae)}else G!==""?rt("WebGLProgram: Program Info Log:",G):(X===""||k==="")&&(j=!1);j&&(U.diagnostics={runnable:K,programLog:G,vertexShader:{log:X,prefix:p},fragmentShader:{log:k,prefix:m}})}r.deleteShader(R),r.deleteShader(A),v=new vu(r,_),T=p3(r,_)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(_,r3)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=s3++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}let P3=0;class D3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new L3(e),t.set(e,i)),i}}class L3{constructor(e){this.id=P3++,this.code=e,this.usedTimes=0}}function I3(n,e,t,i,r,s){const o=new yv,a=new D3,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,T,N,U,L){const H=U.fog,z=L.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,k=e.get(v.envMap||G,X),K=k&&k.mapping===hd?k.image.height:null,j=h[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&rt("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const F=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ae=F!==void 0?F.length:0;let pe=0;z.morphAttributes.position!==void 0&&(pe=1),z.morphAttributes.normal!==void 0&&(pe=2),z.morphAttributes.color!==void 0&&(pe=3);let me,ve,Te,J;if(j){const Ve=pr[j];me=Ve.vertexShader,ve=Ve.fragmentShader}else me=v.vertexShader,ve=v.fragmentShader,a.update(v),Te=a.getVertexShaderID(v),J=a.getFragmentShaderID(v);const ue=n.getRenderTarget(),oe=n.state.buffers.depth.getReversed(),Re=L.isInstancedMesh===!0,Ae=L.isBatchedMesh===!0,le=!!v.map,M=!!v.matcap,w=!!k,V=!!v.aoMap,ee=!!v.lightMap,Y=!!v.bumpMap,O=!!v.normalMap,I=!!v.displacementMap,_e=!!v.emissiveMap,de=!!v.metalnessMap,ne=!!v.roughnessMap,fe=v.anisotropy>0,P=v.clearcoat>0,S=v.dispersion>0,B=v.iridescence>0,Z=v.sheen>0,Q=v.transmission>0,q=fe&&!!v.anisotropyMap,Me=P&&!!v.clearcoatMap,xe=P&&!!v.clearcoatNormalMap,He=P&&!!v.clearcoatRoughnessMap,De=B&&!!v.iridescenceMap,ye=B&&!!v.iridescenceThicknessMap,we=Z&&!!v.sheenColorMap,Pe=Z&&!!v.sheenRoughnessMap,Fe=!!v.specularMap,Le=!!v.specularColorMap,Qe=!!v.specularIntensityMap,W=Q&&!!v.transmissionMap,Ce=Q&&!!v.thicknessMap,Ee=!!v.gradientMap,Oe=!!v.alphaMap,be=v.alphaTest>0,ce=!!v.alphaHash,Ge=!!v.extensions;let Ze=wr;v.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Ze=n.toneMapping);const Mt={shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:me,fragmentShader:ve,defines:v.defines,customVertexShaderID:Te,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Ae,batchingColor:Ae&&L._colorsTexture!==null,instancing:Re,instancingColor:Re&&L.instanceColor!==null,instancingMorph:Re&&L.morphTexture!==null,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Fa,alphaToCoverage:!!v.alphaToCoverage,map:le,matcap:M,envMap:w,envMapMode:w&&k.mapping,envMapCubeUVHeight:K,aoMap:V,lightMap:ee,bumpMap:Y,normalMap:O,displacementMap:I,emissiveMap:_e,normalMapObjectSpace:O&&v.normalMapType===bw,normalMapTangentSpace:O&&v.normalMapType===yw,metalnessMap:de,roughnessMap:ne,anisotropy:fe,anisotropyMap:q,clearcoat:P,clearcoatMap:Me,clearcoatNormalMap:xe,clearcoatRoughnessMap:He,dispersion:S,iridescence:B,iridescenceMap:De,iridescenceThicknessMap:ye,sheen:Z,sheenColorMap:we,sheenRoughnessMap:Pe,specularMap:Fe,specularColorMap:Le,specularIntensityMap:Qe,transmission:Q,transmissionMap:W,thicknessMap:Ce,gradientMap:Ee,opaque:v.transparent===!1&&v.blending===Sa&&v.alphaToCoverage===!1,alphaMap:Oe,alphaTest:be,alphaHash:ce,combine:v.combine,mapUv:le&&g(v.map.channel),aoMapUv:V&&g(v.aoMap.channel),lightMapUv:ee&&g(v.lightMap.channel),bumpMapUv:Y&&g(v.bumpMap.channel),normalMapUv:O&&g(v.normalMap.channel),displacementMapUv:I&&g(v.displacementMap.channel),emissiveMapUv:_e&&g(v.emissiveMap.channel),metalnessMapUv:de&&g(v.metalnessMap.channel),roughnessMapUv:ne&&g(v.roughnessMap.channel),anisotropyMapUv:q&&g(v.anisotropyMap.channel),clearcoatMapUv:Me&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:xe&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:we&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&g(v.sheenRoughnessMap.channel),specularMapUv:Fe&&g(v.specularMap.channel),specularColorMapUv:Le&&g(v.specularColorMap.channel),specularIntensityMapUv:Qe&&g(v.specularIntensityMap.channel),transmissionMapUv:W&&g(v.transmissionMap.channel),thicknessMapUv:Ce&&g(v.thicknessMap.channel),alphaMapUv:Oe&&g(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(O||fe),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(le||Oe),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&O===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:oe,skinning:L.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:pe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,decodeVideoTexture:le&&v.map.isVideoTexture===!0&&St.getTransfer(v.map.colorSpace)===Ut,decodeVideoTextureEmissive:_e&&v.emissiveMap.isVideoTexture===!0&&St.getTransfer(v.emissiveMap.colorSpace)===Ut,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===$r,flipSided:v.side===hi,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ge&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&v.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function p(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)T.push(N),T.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(m(T,v),y(T,v),T.push(n.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function m(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function y(v,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),v.push(o.mask)}function E(v){const T=h[v.type];let N;if(T){const U=pr[T];N=sE.clone(U.uniforms)}else N=v.uniforms;return N}function x(v,T){let N=u.get(T);return N!==void 0?++N.usedTimes:(N=new R3(n,T,v,r),c.push(N),u.set(T,N)),N}function R(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function A(v){a.remove(v)}function C(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:E,acquireProgram:x,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:C}}function U3(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function F3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function pg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,g,_,p,m){let y=n[e];return y===void 0?(y={id:f.id,object:f,geometry:h,material:g,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:m},n[e]=y):(y.id=f.id,y.object=f,y.geometry=h,y.material=g,y.materialVariant=o(f),y.groupOrder=_,y.renderOrder=f.renderOrder,y.z=p,y.group=m),e++,y}function l(f,h,g,_,p,m){const y=a(f,h,g,_,p,m);g.transmission>0?i.push(y):g.transparent===!0?r.push(y):t.push(y)}function c(f,h,g,_,p,m){const y=a(f,h,g,_,p,m);g.transmission>0?i.unshift(y):g.transparent===!0?r.unshift(y):t.unshift(y)}function u(f,h){t.length>1&&t.sort(f||F3),i.length>1&&i.sort(h||pg),r.length>1&&r.sort(h||pg)}function d(){for(let f=e,h=n.length;f<h;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function N3(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new mg,n.set(i,[o])):r>=s.length?(o=new mg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function O3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new se,color:new Ot};break;case"SpotLight":t={position:new se,direction:new se,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new se,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new se,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":t={color:new Ot,position:new se,halfWidth:new se,halfHeight:new se};break}return n[e.id]=t,t}}}function k3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let B3=0;function z3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function V3(n){const e=new O3,t=k3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new se);const r=new se,s=new ln,o=new ln;function a(c){let u=0,d=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let h=0,g=0,_=0,p=0,m=0,y=0,E=0,x=0,R=0,A=0,C=0;c.sort(z3);for(let T=0,N=c.length;T<N;T++){const U=c[T],L=U.color,H=U.intensity,z=U.distance;let G=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Ua?G=U.shadow.map.texture:G=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=L.r*H,d+=L.g*H,f+=L.b*H;else if(U.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(U.sh.coefficients[X],H);C++}else if(U.isDirectionalLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const k=U.shadow,K=t.get(U);K.shadowIntensity=k.intensity,K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,i.directionalShadow[h]=K,i.directionalShadowMap[h]=G,i.directionalShadowMatrix[h]=U.shadow.matrix,y++}i.directional[h]=X,h++}else if(U.isSpotLight){const X=e.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(L).multiplyScalar(H),X.distance=z,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,i.spot[_]=X;const k=U.shadow;if(U.map&&(i.spotLightMap[R]=U.map,R++,k.updateMatrices(U),U.castShadow&&A++),i.spotLightMatrix[_]=k.matrix,U.castShadow){const K=t.get(U);K.shadowIntensity=k.intensity,K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,i.spotShadow[_]=K,i.spotShadowMap[_]=G,x++}_++}else if(U.isRectAreaLight){const X=e.get(U);X.color.copy(L).multiplyScalar(H),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),i.rectArea[p]=X,p++}else if(U.isPointLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),X.distance=U.distance,X.decay=U.decay,U.castShadow){const k=U.shadow,K=t.get(U);K.shadowIntensity=k.intensity,K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,K.shadowCameraNear=k.camera.near,K.shadowCameraFar=k.camera.far,i.pointShadow[g]=K,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=U.shadow.matrix,E++}i.point[g]=X,g++}else if(U.isHemisphereLight){const X=e.get(U);X.skyColor.copy(U.color).multiplyScalar(H),X.groundColor.copy(U.groundColor).multiplyScalar(H),i.hemi[m]=X,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ze.LTC_FLOAT_1,i.rectAreaLTC2=ze.LTC_FLOAT_2):(i.rectAreaLTC1=ze.LTC_HALF_1,i.rectAreaLTC2=ze.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const v=i.hash;(v.directionalLength!==h||v.pointLength!==g||v.spotLength!==_||v.rectAreaLength!==p||v.hemiLength!==m||v.numDirectionalShadows!==y||v.numPointShadows!==E||v.numSpotShadows!==x||v.numSpotMaps!==R||v.numLightProbes!==C)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=x+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,v.directionalLength=h,v.pointLength=g,v.spotLength=_,v.rectAreaLength=p,v.hemiLength=m,v.numDirectionalShadows=y,v.numPointShadows=E,v.numSpotShadows=x,v.numSpotMaps=R,v.numLightProbes=C,i.version=B3++)}function l(c,u){let d=0,f=0,h=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const E=c[m];if(E.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),d++}else if(E.isSpotLight){const x=i.spot[h];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),h++}else if(E.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(p),o.identity(),s.copy(E.matrixWorld),s.premultiply(p),o.extractRotation(s),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function gg(n){const e=new V3(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function H3(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new gg(n),e.set(r,[a])):s>=o.length?(a=new gg(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const G3=`void main() {
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
}`,X3=[new se(1,0,0),new se(-1,0,0),new se(0,1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1)],$3=[new se(0,-1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1),new se(0,-1,0),new se(0,-1,0)],_g=new ln,Qa=new se,Ef=new se;function j3(n,e,t){let i=new Ev;const r=new bt,s=new bt,o=new nn,a=new cE,l=new uE,c={},u=t.maxTextureSize,d={[zs]:hi,[hi]:zs,[$r]:$r},f=new rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:G3,fragmentShader:W3}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new ds;g.setAttribute("position",new Tr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pr(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pu;let m=this.type;this.render=function(A,C,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===ZM&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=pu);const T=n.getRenderTarget(),N=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Zr),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const H=m!==this.type;H&&C.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(G=>G.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,G=A.length;z<G;z++){const X=A[z],k=X.shadow;if(k===void 0){rt("WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const K=k.getFrameExtents();r.multiply(K),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,k.mapSize.y=s.y));const j=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=j,k.map===null||H===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===dl){if(X.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Er(r.x,r.y,{format:Ua,type:as,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),k.map.texture.name=X.name+".shadowMap",k.map.depthTexture=new Jl(r.x,r.y,vr),k.map.depthTexture.name=X.name+".shadowMapDepth",k.map.depthTexture.format=ls,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Cn,k.map.depthTexture.magFilter=Cn}else X.isPointLight?(k.map=new Dv(r.x),k.map.depthTexture=new iE(r.x,Rr)):(k.map=new Er(r.x,r.y),k.map.depthTexture=new Jl(r.x,r.y,Rr)),k.map.depthTexture.name=X.name+".shadowMap",k.map.depthTexture.format=ls,this.type===pu?(k.map.depthTexture.compareFunction=j?Qp:Jp,k.map.depthTexture.minFilter=Gn,k.map.depthTexture.magFilter=Gn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Cn,k.map.depthTexture.magFilter=Cn);k.camera.updateProjectionMatrix()}const F=k.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<F;ae++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,ae),n.clear();else{ae===0&&(n.setRenderTarget(k.map),n.clear());const pe=k.getViewport(ae);o.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),L.viewport(o)}if(X.isPointLight){const pe=k.camera,me=k.matrix,ve=X.distance||pe.far;ve!==pe.far&&(pe.far=ve,pe.updateProjectionMatrix()),Qa.setFromMatrixPosition(X.matrixWorld),pe.position.copy(Qa),Ef.copy(pe.position),Ef.add(X3[ae]),pe.up.copy($3[ae]),pe.lookAt(Ef),pe.updateMatrixWorld(),me.makeTranslation(-Qa.x,-Qa.y,-Qa.z),_g.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),k._frustum.setFromProjectionMatrix(_g,pe.coordinateSystem,pe.reversedDepth)}else k.updateMatrices(X);i=k.getFrustum(),x(C,v,k.camera,X,this.type)}k.isPointLightShadow!==!0&&this.type===dl&&y(k,v),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(T,N,U)};function y(A,C){const v=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Er(r.x,r.y,{format:Ua,type:as})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,v,f,_,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,v,h,_,null)}function E(A,C,v,T){let N=null;const U=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)N=U;else if(N=v.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const L=N.uuid,H=C.uuid;let z=c[L];z===void 0&&(z={},c[L]=z);let G=z[H];G===void 0&&(G=N.clone(),z[H]=G,C.addEventListener("dispose",R)),N=G}if(N.visible=C.visible,N.wireframe=C.wireframe,T===dl?N.side=C.shadowSide!==null?C.shadowSide:C.side:N.side=C.shadowSide!==null?C.shadowSide:d[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,N.map=C.map,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,v.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const L=n.properties.get(N);L.light=v}return N}function x(A,C,v,T,N){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&N===dl)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);const H=e.update(A),z=A.material;if(Array.isArray(z)){const G=H.groups;for(let X=0,k=G.length;X<k;X++){const K=G[X],j=z[K.materialIndex];if(j&&j.visible){const F=E(A,j,T,N);A.onBeforeShadow(n,A,C,v,H,F,K),n.renderBufferDirect(v,null,H,F,A,K),A.onAfterShadow(n,A,C,v,H,F,K)}}}else if(z.visible){const G=E(A,z,T,N);A.onBeforeShadow(n,A,C,v,H,G,null),n.renderBufferDirect(v,null,H,G,A,null),A.onAfterShadow(n,A,C,v,H,G,null)}}const L=A.children;for(let H=0,z=L.length;H<z;H++)x(L[H],C,v,T,N)}function R(A){A.target.removeEventListener("dispose",R);for(const v in c){const T=c[v],N=A.target.uuid;N in T&&(T[N].dispose(),delete T[N])}}}function Y3(n,e){function t(){let W=!1;const Ce=new nn;let Ee=null;const Oe=new nn(0,0,0,0);return{setMask:function(be){Ee!==be&&!W&&(n.colorMask(be,be,be,be),Ee=be)},setLocked:function(be){W=be},setClear:function(be,ce,Ge,Ze,Mt){Mt===!0&&(be*=Ze,ce*=Ze,Ge*=Ze),Ce.set(be,ce,Ge,Ze),Oe.equals(Ce)===!1&&(n.clearColor(be,ce,Ge,Ze),Oe.copy(Ce))},reset:function(){W=!1,Ee=null,Oe.set(-1,0,0,0)}}}function i(){let W=!1,Ce=!1,Ee=null,Oe=null,be=null;return{setReversed:function(ce){if(Ce!==ce){const Ge=e.get("EXT_clip_control");ce?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Ce=ce;const Ze=be;be=null,this.setClear(Ze)}},getReversed:function(){return Ce},setTest:function(ce){ce?ue(n.DEPTH_TEST):oe(n.DEPTH_TEST)},setMask:function(ce){Ee!==ce&&!W&&(n.depthMask(ce),Ee=ce)},setFunc:function(ce){if(Ce&&(ce=Dw[ce]),Oe!==ce){switch(ce){case ph:n.depthFunc(n.NEVER);break;case mh:n.depthFunc(n.ALWAYS);break;case gh:n.depthFunc(n.LESS);break;case La:n.depthFunc(n.LEQUAL);break;case _h:n.depthFunc(n.EQUAL);break;case xh:n.depthFunc(n.GEQUAL);break;case vh:n.depthFunc(n.GREATER);break;case yh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Oe=ce}},setLocked:function(ce){W=ce},setClear:function(ce){be!==ce&&(be=ce,Ce&&(ce=1-ce),n.clearDepth(ce))},reset:function(){W=!1,Ee=null,Oe=null,be=null,Ce=!1}}}function r(){let W=!1,Ce=null,Ee=null,Oe=null,be=null,ce=null,Ge=null,Ze=null,Mt=null;return{setTest:function(Ve){W||(Ve?ue(n.STENCIL_TEST):oe(n.STENCIL_TEST))},setMask:function(Ve){Ce!==Ve&&!W&&(n.stencilMask(Ve),Ce=Ve)},setFunc:function(Ve,je,ct){(Ee!==Ve||Oe!==je||be!==ct)&&(n.stencilFunc(Ve,je,ct),Ee=Ve,Oe=je,be=ct)},setOp:function(Ve,je,ct){(ce!==Ve||Ge!==je||Ze!==ct)&&(n.stencilOp(Ve,je,ct),ce=Ve,Ge=je,Ze=ct)},setLocked:function(Ve){W=Ve},setClear:function(Ve){Mt!==Ve&&(n.clearStencil(Ve),Mt=Ve)},reset:function(){W=!1,Ce=null,Ee=null,Oe=null,be=null,ce=null,Ge=null,Ze=null,Mt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],g=null,_=!1,p=null,m=null,y=null,E=null,x=null,R=null,A=null,C=new Ot(0,0,0),v=0,T=!1,N=null,U=null,L=null,H=null,z=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,k=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=k>=1):K.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=k>=2);let j=null,F={};const ae=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),me=new nn().fromArray(ae),ve=new nn().fromArray(pe);function Te(W,Ce,Ee,Oe){const be=new Uint8Array(4),ce=n.createTexture();n.bindTexture(W,ce),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<Ee;Ge++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,Oe,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(Ce+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return ce}const J={};J[n.TEXTURE_2D]=Te(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=Te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=Te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=Te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(n.DEPTH_TEST),o.setFunc(La),Y(!1),O(Mm),ue(n.CULL_FACE),V(Zr);function ue(W){u[W]!==!0&&(n.enable(W),u[W]=!0)}function oe(W){u[W]!==!1&&(n.disable(W),u[W]=!1)}function Re(W,Ce){return d[W]!==Ce?(n.bindFramebuffer(W,Ce),d[W]=Ce,W===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ce),W===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ae(W,Ce){let Ee=h,Oe=!1;if(W){Ee=f.get(Ce),Ee===void 0&&(Ee=[],f.set(Ce,Ee));const be=W.textures;if(Ee.length!==be.length||Ee[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Ge=be.length;ce<Ge;ce++)Ee[ce]=n.COLOR_ATTACHMENT0+ce;Ee.length=be.length,Oe=!0}}else Ee[0]!==n.BACK&&(Ee[0]=n.BACK,Oe=!0);Oe&&n.drawBuffers(Ee)}function le(W){return g!==W?(n.useProgram(W),g=W,!0):!1}const M={[uo]:n.FUNC_ADD,[QM]:n.FUNC_SUBTRACT,[ew]:n.FUNC_REVERSE_SUBTRACT};M[tw]=n.MIN,M[nw]=n.MAX;const w={[iw]:n.ZERO,[rw]:n.ONE,[sw]:n.SRC_COLOR,[fh]:n.SRC_ALPHA,[dw]:n.SRC_ALPHA_SATURATE,[cw]:n.DST_COLOR,[aw]:n.DST_ALPHA,[ow]:n.ONE_MINUS_SRC_COLOR,[hh]:n.ONE_MINUS_SRC_ALPHA,[uw]:n.ONE_MINUS_DST_COLOR,[lw]:n.ONE_MINUS_DST_ALPHA,[fw]:n.CONSTANT_COLOR,[hw]:n.ONE_MINUS_CONSTANT_COLOR,[pw]:n.CONSTANT_ALPHA,[mw]:n.ONE_MINUS_CONSTANT_ALPHA};function V(W,Ce,Ee,Oe,be,ce,Ge,Ze,Mt,Ve){if(W===Zr){_===!0&&(oe(n.BLEND),_=!1);return}if(_===!1&&(ue(n.BLEND),_=!0),W!==JM){if(W!==p||Ve!==T){if((m!==uo||x!==uo)&&(n.blendEquation(n.FUNC_ADD),m=uo,x=uo),Ve)switch(W){case Sa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wm:n.blendFunc(n.ONE,n.ONE);break;case Em:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Tm:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Et("WebGLState: Invalid blending: ",W);break}else switch(W){case Sa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wm:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Em:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tm:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",W);break}y=null,E=null,R=null,A=null,C.set(0,0,0),v=0,p=W,T=Ve}return}be=be||Ce,ce=ce||Ee,Ge=Ge||Oe,(Ce!==m||be!==x)&&(n.blendEquationSeparate(M[Ce],M[be]),m=Ce,x=be),(Ee!==y||Oe!==E||ce!==R||Ge!==A)&&(n.blendFuncSeparate(w[Ee],w[Oe],w[ce],w[Ge]),y=Ee,E=Oe,R=ce,A=Ge),(Ze.equals(C)===!1||Mt!==v)&&(n.blendColor(Ze.r,Ze.g,Ze.b,Mt),C.copy(Ze),v=Mt),p=W,T=!1}function ee(W,Ce){W.side===$r?oe(n.CULL_FACE):ue(n.CULL_FACE);let Ee=W.side===hi;Ce&&(Ee=!Ee),Y(Ee),W.blending===Sa&&W.transparent===!1?V(Zr):V(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),s.setMask(W.colorWrite);const Oe=W.stencilWrite;a.setTest(Oe),Oe&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),_e(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Y(W){N!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),N=W)}function O(W){W!==qM?(ue(n.CULL_FACE),W!==U&&(W===Mm?n.cullFace(n.BACK):W===KM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):oe(n.CULL_FACE),U=W}function I(W){W!==L&&(X&&n.lineWidth(W),L=W)}function _e(W,Ce,Ee){W?(ue(n.POLYGON_OFFSET_FILL),(H!==Ce||z!==Ee)&&(H=Ce,z=Ee,o.getReversed()&&(Ce=-Ce),n.polygonOffset(Ce,Ee))):oe(n.POLYGON_OFFSET_FILL)}function de(W){W?ue(n.SCISSOR_TEST):oe(n.SCISSOR_TEST)}function ne(W){W===void 0&&(W=n.TEXTURE0+G-1),j!==W&&(n.activeTexture(W),j=W)}function fe(W,Ce,Ee){Ee===void 0&&(j===null?Ee=n.TEXTURE0+G-1:Ee=j);let Oe=F[Ee];Oe===void 0&&(Oe={type:void 0,texture:void 0},F[Ee]=Oe),(Oe.type!==W||Oe.texture!==Ce)&&(j!==Ee&&(n.activeTexture(Ee),j=Ee),n.bindTexture(W,Ce||J[W]),Oe.type=W,Oe.texture=Ce)}function P(){const W=F[j];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(W){Et("WebGLState:",W)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(W){Et("WebGLState:",W)}}function Z(){try{n.texSubImage2D(...arguments)}catch(W){Et("WebGLState:",W)}}function Q(){try{n.texSubImage3D(...arguments)}catch(W){Et("WebGLState:",W)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(W){Et("WebGLState:",W)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(W){Et("WebGLState:",W)}}function xe(){try{n.texStorage2D(...arguments)}catch(W){Et("WebGLState:",W)}}function He(){try{n.texStorage3D(...arguments)}catch(W){Et("WebGLState:",W)}}function De(){try{n.texImage2D(...arguments)}catch(W){Et("WebGLState:",W)}}function ye(){try{n.texImage3D(...arguments)}catch(W){Et("WebGLState:",W)}}function we(W){me.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),me.copy(W))}function Pe(W){ve.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),ve.copy(W))}function Fe(W,Ce){let Ee=c.get(Ce);Ee===void 0&&(Ee=new WeakMap,c.set(Ce,Ee));let Oe=Ee.get(W);Oe===void 0&&(Oe=n.getUniformBlockIndex(Ce,W.name),Ee.set(W,Oe))}function Le(W,Ce){const Oe=c.get(Ce).get(W);l.get(Ce)!==Oe&&(n.uniformBlockBinding(Ce,Oe,W.__bindingPointIndex),l.set(Ce,Oe))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},j=null,F={},d={},f=new WeakMap,h=[],g=null,_=!1,p=null,m=null,y=null,E=null,x=null,R=null,A=null,C=new Ot(0,0,0),v=0,T=!1,N=null,U=null,L=null,H=null,z=null,me.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ue,disable:oe,bindFramebuffer:Re,drawBuffers:Ae,useProgram:le,setBlending:V,setMaterial:ee,setFlipSided:Y,setCullFace:O,setLineWidth:I,setPolygonOffset:_e,setScissorTest:de,activeTexture:ne,bindTexture:fe,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:B,texImage2D:De,texImage3D:ye,updateUBOMapping:Fe,uniformBlockBinding:Le,texStorage2D:xe,texStorage3D:He,texSubImage2D:Z,texSubImage3D:Q,compressedTexSubImage2D:q,compressedTexSubImage3D:Me,scissor:we,viewport:Pe,reset:Qe}}function q3(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return h?new OffscreenCanvas(P,S):$u("canvas")}function _(P,S,B){let Z=1;const Q=fe(P);if((Q.width>B||Q.height>B)&&(Z=B/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const q=Math.floor(Z*Q.width),Me=Math.floor(Z*Q.height);d===void 0&&(d=g(q,Me));const xe=S?g(q,Me):d;return xe.width=q,xe.height=Me,xe.getContext("2d").drawImage(P,0,0,q,Me),rt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Me+")."),xe}else return"data"in P&&rt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function p(P){return P.generateMipmaps}function m(P){n.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(P,S,B,Z,Q=!1){if(P!==null){if(n[P]!==void 0)return n[P];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let q=S;if(S===n.RED&&(B===n.FLOAT&&(q=n.R32F),B===n.HALF_FLOAT&&(q=n.R16F),B===n.UNSIGNED_BYTE&&(q=n.R8)),S===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.R8UI),B===n.UNSIGNED_SHORT&&(q=n.R16UI),B===n.UNSIGNED_INT&&(q=n.R32UI),B===n.BYTE&&(q=n.R8I),B===n.SHORT&&(q=n.R16I),B===n.INT&&(q=n.R32I)),S===n.RG&&(B===n.FLOAT&&(q=n.RG32F),B===n.HALF_FLOAT&&(q=n.RG16F),B===n.UNSIGNED_BYTE&&(q=n.RG8)),S===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RG8UI),B===n.UNSIGNED_SHORT&&(q=n.RG16UI),B===n.UNSIGNED_INT&&(q=n.RG32UI),B===n.BYTE&&(q=n.RG8I),B===n.SHORT&&(q=n.RG16I),B===n.INT&&(q=n.RG32I)),S===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RGB8UI),B===n.UNSIGNED_SHORT&&(q=n.RGB16UI),B===n.UNSIGNED_INT&&(q=n.RGB32UI),B===n.BYTE&&(q=n.RGB8I),B===n.SHORT&&(q=n.RGB16I),B===n.INT&&(q=n.RGB32I)),S===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),B===n.UNSIGNED_INT&&(q=n.RGBA32UI),B===n.BYTE&&(q=n.RGBA8I),B===n.SHORT&&(q=n.RGBA16I),B===n.INT&&(q=n.RGBA32I)),S===n.RGB&&(B===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),S===n.RGBA){const Me=Q?Wu:St.getTransfer(Z);B===n.FLOAT&&(q=n.RGBA32F),B===n.HALF_FLOAT&&(q=n.RGBA16F),B===n.UNSIGNED_BYTE&&(q=Me===Ut?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(P,S){let B;return P?S===null||S===Rr||S===Zl?B=n.DEPTH24_STENCIL8:S===vr?B=n.DEPTH32F_STENCIL8:S===Kl&&(B=n.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Rr||S===Zl?B=n.DEPTH_COMPONENT24:S===vr?B=n.DEPTH_COMPONENT32F:S===Kl&&(B=n.DEPTH_COMPONENT16),B}function R(P,S){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Cn&&P.minFilter!==Gn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function A(P){const S=P.target;S.removeEventListener("dispose",A),v(S),S.isVideoTexture&&u.delete(S)}function C(P){const S=P.target;S.removeEventListener("dispose",C),N(S)}function v(P){const S=i.get(P);if(S.__webglInit===void 0)return;const B=P.source,Z=f.get(B);if(Z){const Q=Z[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(P),Object.keys(Z).length===0&&f.delete(B)}i.remove(P)}function T(P){const S=i.get(P);n.deleteTexture(S.__webglTexture);const B=P.source,Z=f.get(B);delete Z[S.__cacheKey],o.memory.textures--}function N(P){const S=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let Q=0;Q<S.__webglFramebuffer[Z].length;Q++)n.deleteFramebuffer(S.__webglFramebuffer[Z][Q]);else n.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)n.deleteFramebuffer(S.__webglFramebuffer[Z]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=P.textures;for(let Z=0,Q=B.length;Z<Q;Z++){const q=i.get(B[Z]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(B[Z])}i.remove(P)}let U=0;function L(){U=0}function H(){const P=U;return P>=r.maxTextures&&rt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),U+=1,P}function z(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function G(P,S){const B=i.get(P);if(P.isVideoTexture&&de(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&B.__version!==P.version){const Z=P.image;if(Z===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{J(B,P,S);return}}else P.isExternalTexture&&(B.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+S)}function X(P,S){const B=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){J(B,P,S);return}else P.isExternalTexture&&(B.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+S)}function k(P,S){const B=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){J(B,P,S);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+S)}function K(P,S){const B=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&B.__version!==P.version){ue(B,P,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+S)}const j={[bh]:n.REPEAT,[Yr]:n.CLAMP_TO_EDGE,[Sh]:n.MIRRORED_REPEAT},F={[Cn]:n.NEAREST,[xw]:n.NEAREST_MIPMAP_NEAREST,[Pc]:n.NEAREST_MIPMAP_LINEAR,[Gn]:n.LINEAR,[Yd]:n.LINEAR_MIPMAP_NEAREST,[_o]:n.LINEAR_MIPMAP_LINEAR},ae={[Sw]:n.NEVER,[Aw]:n.ALWAYS,[Mw]:n.LESS,[Jp]:n.LEQUAL,[ww]:n.EQUAL,[Qp]:n.GEQUAL,[Ew]:n.GREATER,[Tw]:n.NOTEQUAL};function pe(P,S){if(S.type===vr&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Gn||S.magFilter===Yd||S.magFilter===Pc||S.magFilter===_o||S.minFilter===Gn||S.minFilter===Yd||S.minFilter===Pc||S.minFilter===_o)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,j[S.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,j[S.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,j[S.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,F[S.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,F[S.minFilter]),S.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,ae[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Cn||S.minFilter!==Pc&&S.minFilter!==_o||S.type===vr&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function me(P,S){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",A));const Z=S.source;let Q=f.get(Z);Q===void 0&&(Q={},f.set(Z,Q));const q=z(S);if(q!==P.__cacheKey){Q[q]===void 0&&(Q[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[q].usedTimes++;const Me=Q[P.__cacheKey];Me!==void 0&&(Q[P.__cacheKey].usedTimes--,Me.usedTimes===0&&T(S)),P.__cacheKey=q,P.__webglTexture=Q[q].texture}return B}function ve(P,S,B){return Math.floor(Math.floor(P/B)/S)}function Te(P,S,B,Z){const q=P.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,B,Z,S.data);else{q.sort((ye,we)=>ye.start-we.start);let Me=0;for(let ye=1;ye<q.length;ye++){const we=q[Me],Pe=q[ye],Fe=we.start+we.count,Le=ve(Pe.start,S.width,4),Qe=ve(we.start,S.width,4);Pe.start<=Fe+1&&Le===Qe&&ve(Pe.start+Pe.count-1,S.width,4)===Le?we.count=Math.max(we.count,Pe.start+Pe.count-we.start):(++Me,q[Me]=Pe)}q.length=Me+1;const xe=n.getParameter(n.UNPACK_ROW_LENGTH),He=n.getParameter(n.UNPACK_SKIP_PIXELS),De=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let ye=0,we=q.length;ye<we;ye++){const Pe=q[ye],Fe=Math.floor(Pe.start/4),Le=Math.ceil(Pe.count/4),Qe=Fe%S.width,W=Math.floor(Fe/S.width),Ce=Le,Ee=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Qe),n.pixelStorei(n.UNPACK_SKIP_ROWS,W),t.texSubImage2D(n.TEXTURE_2D,0,Qe,W,Ce,Ee,B,Z,S.data)}P.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,xe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,He),n.pixelStorei(n.UNPACK_SKIP_ROWS,De)}}function J(P,S,B){let Z=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=n.TEXTURE_3D);const Q=me(P,S),q=S.source;t.bindTexture(Z,P.__webglTexture,n.TEXTURE0+B);const Me=i.get(q);if(q.version!==Me.__version||Q===!0){t.activeTexture(n.TEXTURE0+B);const xe=St.getPrimaries(St.workingColorSpace),He=S.colorSpace===Ms?null:St.getPrimaries(S.colorSpace),De=S.colorSpace===Ms||xe===He?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ye=_(S.image,!1,r.maxTextureSize);ye=ne(S,ye);const we=s.convert(S.format,S.colorSpace),Pe=s.convert(S.type);let Fe=E(S.internalFormat,we,Pe,S.colorSpace,S.isVideoTexture);pe(Z,S);let Le;const Qe=S.mipmaps,W=S.isVideoTexture!==!0,Ce=Me.__version===void 0||Q===!0,Ee=q.dataReady,Oe=R(S,ye);if(S.isDepthTexture)Fe=x(S.format===xo,S.type),Ce&&(W?t.texStorage2D(n.TEXTURE_2D,1,Fe,ye.width,ye.height):t.texImage2D(n.TEXTURE_2D,0,Fe,ye.width,ye.height,0,we,Pe,null));else if(S.isDataTexture)if(Qe.length>0){W&&Ce&&t.texStorage2D(n.TEXTURE_2D,Oe,Fe,Qe[0].width,Qe[0].height);for(let be=0,ce=Qe.length;be<ce;be++)Le=Qe[be],W?Ee&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,Le.width,Le.height,we,Pe,Le.data):t.texImage2D(n.TEXTURE_2D,be,Fe,Le.width,Le.height,0,we,Pe,Le.data);S.generateMipmaps=!1}else W?(Ce&&t.texStorage2D(n.TEXTURE_2D,Oe,Fe,ye.width,ye.height),Ee&&Te(S,ye,we,Pe)):t.texImage2D(n.TEXTURE_2D,0,Fe,ye.width,ye.height,0,we,Pe,ye.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){W&&Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,Fe,Qe[0].width,Qe[0].height,ye.depth);for(let be=0,ce=Qe.length;be<ce;be++)if(Le=Qe[be],S.format!==er)if(we!==null)if(W){if(Ee)if(S.layerUpdates.size>0){const Ge=Ym(Le.width,Le.height,S.format,S.type);for(const Ze of S.layerUpdates){const Mt=Le.data.subarray(Ze*Ge/Le.data.BYTES_PER_ELEMENT,(Ze+1)*Ge/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,Ze,Le.width,Le.height,1,we,Mt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,Le.width,Le.height,ye.depth,we,Le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,be,Fe,Le.width,Le.height,ye.depth,0,Le.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ee&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,Le.width,Le.height,ye.depth,we,Pe,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,be,Fe,Le.width,Le.height,ye.depth,0,we,Pe,Le.data)}else{W&&Ce&&t.texStorage2D(n.TEXTURE_2D,Oe,Fe,Qe[0].width,Qe[0].height);for(let be=0,ce=Qe.length;be<ce;be++)Le=Qe[be],S.format!==er?we!==null?W?Ee&&t.compressedTexSubImage2D(n.TEXTURE_2D,be,0,0,Le.width,Le.height,we,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,be,Fe,Le.width,Le.height,0,Le.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ee&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,Le.width,Le.height,we,Pe,Le.data):t.texImage2D(n.TEXTURE_2D,be,Fe,Le.width,Le.height,0,we,Pe,Le.data)}else if(S.isDataArrayTexture)if(W){if(Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,Fe,ye.width,ye.height,ye.depth),Ee)if(S.layerUpdates.size>0){const be=Ym(ye.width,ye.height,S.format,S.type);for(const ce of S.layerUpdates){const Ge=ye.data.subarray(ce*be/ye.data.BYTES_PER_ELEMENT,(ce+1)*be/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,ye.width,ye.height,1,we,Pe,Ge)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,we,Pe,ye.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,ye.width,ye.height,ye.depth,0,we,Pe,ye.data);else if(S.isData3DTexture)W?(Ce&&t.texStorage3D(n.TEXTURE_3D,Oe,Fe,ye.width,ye.height,ye.depth),Ee&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,we,Pe,ye.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,ye.width,ye.height,ye.depth,0,we,Pe,ye.data);else if(S.isFramebufferTexture){if(Ce)if(W)t.texStorage2D(n.TEXTURE_2D,Oe,Fe,ye.width,ye.height);else{let be=ye.width,ce=ye.height;for(let Ge=0;Ge<Oe;Ge++)t.texImage2D(n.TEXTURE_2D,Ge,Fe,be,ce,0,we,Pe,null),be>>=1,ce>>=1}}else if(Qe.length>0){if(W&&Ce){const be=fe(Qe[0]);t.texStorage2D(n.TEXTURE_2D,Oe,Fe,be.width,be.height)}for(let be=0,ce=Qe.length;be<ce;be++)Le=Qe[be],W?Ee&&t.texSubImage2D(n.TEXTURE_2D,be,0,0,we,Pe,Le):t.texImage2D(n.TEXTURE_2D,be,Fe,we,Pe,Le);S.generateMipmaps=!1}else if(W){if(Ce){const be=fe(ye);t.texStorage2D(n.TEXTURE_2D,Oe,Fe,be.width,be.height)}Ee&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,Pe,ye)}else t.texImage2D(n.TEXTURE_2D,0,Fe,we,Pe,ye);p(S)&&m(Z),Me.__version=q.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function ue(P,S,B){if(S.image.length!==6)return;const Z=me(P,S),Q=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+B);const q=i.get(Q);if(Q.version!==q.__version||Z===!0){t.activeTexture(n.TEXTURE0+B);const Me=St.getPrimaries(St.workingColorSpace),xe=S.colorSpace===Ms?null:St.getPrimaries(S.colorSpace),He=S.colorSpace===Ms||Me===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const De=S.isCompressedTexture||S.image[0].isCompressedTexture,ye=S.image[0]&&S.image[0].isDataTexture,we=[];for(let ce=0;ce<6;ce++)!De&&!ye?we[ce]=_(S.image[ce],!0,r.maxCubemapSize):we[ce]=ye?S.image[ce].image:S.image[ce],we[ce]=ne(S,we[ce]);const Pe=we[0],Fe=s.convert(S.format,S.colorSpace),Le=s.convert(S.type),Qe=E(S.internalFormat,Fe,Le,S.colorSpace),W=S.isVideoTexture!==!0,Ce=q.__version===void 0||Z===!0,Ee=Q.dataReady;let Oe=R(S,Pe);pe(n.TEXTURE_CUBE_MAP,S);let be;if(De){W&&Ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,Qe,Pe.width,Pe.height);for(let ce=0;ce<6;ce++){be=we[ce].mipmaps;for(let Ge=0;Ge<be.length;Ge++){const Ze=be[Ge];S.format!==er?Fe!==null?W?Ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ge,0,0,Ze.width,Ze.height,Fe,Ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ge,Qe,Ze.width,Ze.height,0,Ze.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ge,0,0,Ze.width,Ze.height,Fe,Le,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ge,Qe,Ze.width,Ze.height,0,Fe,Le,Ze.data)}}}else{if(be=S.mipmaps,W&&Ce){be.length>0&&Oe++;const ce=fe(we[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,Qe,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(ye){W?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,we[ce].width,we[ce].height,Fe,Le,we[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Qe,we[ce].width,we[ce].height,0,Fe,Le,we[ce].data);for(let Ge=0;Ge<be.length;Ge++){const Mt=be[Ge].image[ce].image;W?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ge+1,0,0,Mt.width,Mt.height,Fe,Le,Mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ge+1,Qe,Mt.width,Mt.height,0,Fe,Le,Mt.data)}}else{W?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Fe,Le,we[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Qe,Fe,Le,we[ce]);for(let Ge=0;Ge<be.length;Ge++){const Ze=be[Ge];W?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ge+1,0,0,Fe,Le,Ze.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ge+1,Qe,Fe,Le,Ze.image[ce])}}}p(S)&&m(n.TEXTURE_CUBE_MAP),q.__version=Q.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function oe(P,S,B,Z,Q,q){const Me=s.convert(B.format,B.colorSpace),xe=s.convert(B.type),He=E(B.internalFormat,Me,xe,B.colorSpace),De=i.get(S),ye=i.get(B);if(ye.__renderTarget=S,!De.__hasExternalTextures){const we=Math.max(1,S.width>>q),Pe=Math.max(1,S.height>>q);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,q,He,we,Pe,S.depth,0,Me,xe,null):t.texImage2D(Q,q,He,we,Pe,0,Me,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),_e(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,Q,ye.__webglTexture,0,I(S)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,Q,ye.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(P,S,B){if(n.bindRenderbuffer(n.RENDERBUFFER,P),S.depthBuffer){const Z=S.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,q=x(S.stencilBuffer,Q),Me=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;_e(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I(S),q,S.width,S.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,I(S),q,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,q,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,P)}else{const Z=S.textures;for(let Q=0;Q<Z.length;Q++){const q=Z[Q],Me=s.convert(q.format,q.colorSpace),xe=s.convert(q.type),He=E(q.internalFormat,Me,xe,q.colorSpace);_e(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I(S),He,S.width,S.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,I(S),He,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,He,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(P,S,B){const Z=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(S.depthTexture);if(Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),pe(n.TEXTURE_CUBE_MAP,S.depthTexture);const De=s.convert(S.depthTexture.format),ye=s.convert(S.depthTexture.type);let we;S.depthTexture.format===ls?we=n.DEPTH_COMPONENT24:S.depthTexture.format===xo&&(we=n.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,we,S.width,S.height,0,De,ye,null)}}else G(S.depthTexture,0);const q=Q.__webglTexture,Me=I(S),xe=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,He=S.depthTexture.format===xo?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===ls)_e(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,He,xe,q,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,He,xe,q,0);else if(S.depthTexture.format===xo)_e(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,He,xe,q,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,He,xe,q,0);else throw new Error("Unknown depthTexture format")}function le(P){const S=i.get(P),B=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const Z=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=Z}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(B)for(let Z=0;Z<6;Z++)Ae(S.__webglFramebuffer[Z],P,Z);else{const Z=P.texture.mipmaps;Z&&Z.length>0?Ae(S.__webglFramebuffer[0],P,0):Ae(S.__webglFramebuffer,P,0)}else if(B){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=n.createRenderbuffer(),Re(S.__webglDepthbuffer[Z],P,!1);else{const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,q)}}else{const Z=P.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Re(S.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function M(P,S,B){const Z=i.get(P);S!==void 0&&oe(Z.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&le(P)}function w(P){const S=P.texture,B=i.get(P),Z=i.get(S);P.addEventListener("dispose",C);const Q=P.textures,q=P.isWebGLCubeRenderTarget===!0,Me=Q.length>1;if(Me||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=S.version,o.memory.textures++),q){B.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[xe]=[];for(let He=0;He<S.mipmaps.length;He++)B.__webglFramebuffer[xe][He]=n.createFramebuffer()}else B.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let xe=0;xe<S.mipmaps.length;xe++)B.__webglFramebuffer[xe]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Me)for(let xe=0,He=Q.length;xe<He;xe++){const De=i.get(Q[xe]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&_e(P)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let xe=0;xe<Q.length;xe++){const He=Q[xe];B.__webglColorRenderbuffer[xe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[xe]);const De=s.convert(He.format,He.colorSpace),ye=s.convert(He.type),we=E(He.internalFormat,De,ye,He.colorSpace,P.isXRRenderTarget===!0),Pe=I(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,we,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,B.__webglColorRenderbuffer[xe])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Re(B.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),pe(n.TEXTURE_CUBE_MAP,S);for(let xe=0;xe<6;xe++)if(S.mipmaps&&S.mipmaps.length>0)for(let He=0;He<S.mipmaps.length;He++)oe(B.__webglFramebuffer[xe][He],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He);else oe(B.__webglFramebuffer[xe],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);p(S)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let xe=0,He=Q.length;xe<He;xe++){const De=Q[xe],ye=i.get(De);let we=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(we=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(we,ye.__webglTexture),pe(we,De),oe(B.__webglFramebuffer,P,De,n.COLOR_ATTACHMENT0+xe,we,0),p(De)&&m(we)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xe=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,Z.__webglTexture),pe(xe,S),S.mipmaps&&S.mipmaps.length>0)for(let He=0;He<S.mipmaps.length;He++)oe(B.__webglFramebuffer[He],P,S,n.COLOR_ATTACHMENT0,xe,He);else oe(B.__webglFramebuffer,P,S,n.COLOR_ATTACHMENT0,xe,0);p(S)&&m(xe),t.unbindTexture()}P.depthBuffer&&le(P)}function V(P){const S=P.textures;for(let B=0,Z=S.length;B<Z;B++){const Q=S[B];if(p(Q)){const q=y(P),Me=i.get(Q).__webglTexture;t.bindTexture(q,Me),m(q),t.unbindTexture()}}}const ee=[],Y=[];function O(P){if(P.samples>0){if(_e(P)===!1){const S=P.textures,B=P.width,Z=P.height;let Q=n.COLOR_BUFFER_BIT;const q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(P),xe=S.length>1;if(xe)for(let De=0;De<S.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const He=P.texture.mipmaps;He&&He.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let De=0;De<S.length;De++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),xe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[De]);const ye=i.get(S[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ye,0)}n.blitFramebuffer(0,0,B,Z,0,0,B,Z,Q,n.NEAREST),l===!0&&(ee.length=0,Y.length=0,ee.push(n.COLOR_ATTACHMENT0+De),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ee.push(q),Y.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xe)for(let De=0;De<S.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,Me.__webglColorRenderbuffer[De]);const ye=i.get(S[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const S=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function I(P){return Math.min(r.maxSamples,P.samples)}function _e(P){const S=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function de(P){const S=o.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function ne(P,S){const B=P.colorSpace,Z=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||B!==Fa&&B!==Ms&&(St.getTransfer(B)===Ut?(Z!==er||Q!==zi)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",B)),S}function fe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=L,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=k,this.setTextureCube=K,this.rebindTextures=M,this.setupRenderTarget=w,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=_e,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function K3(n,e){function t(i,r=Ms){let s;const o=St.getTransfer(r);if(i===zi)return n.UNSIGNED_BYTE;if(i===jp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hv)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pv)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===dv)return n.BYTE;if(i===fv)return n.SHORT;if(i===Kl)return n.UNSIGNED_SHORT;if(i===$p)return n.INT;if(i===Rr)return n.UNSIGNED_INT;if(i===vr)return n.FLOAT;if(i===as)return n.HALF_FLOAT;if(i===mv)return n.ALPHA;if(i===gv)return n.RGB;if(i===er)return n.RGBA;if(i===ls)return n.DEPTH_COMPONENT;if(i===xo)return n.DEPTH_STENCIL;if(i===_v)return n.RED;if(i===qp)return n.RED_INTEGER;if(i===Ua)return n.RG;if(i===Kp)return n.RG_INTEGER;if(i===Zp)return n.RGBA_INTEGER;if(i===mu||i===gu||i===_u||i===xu)if(o===Ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===mu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_u)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===mu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_u)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mh||i===wh||i===Eh||i===Th)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Mh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Eh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Th)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ah||i===Ch||i===Rh||i===Ph||i===Dh||i===Lh||i===Ih)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ah||i===Ch)return o===Ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Rh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ph)return s.COMPRESSED_R11_EAC;if(i===Dh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Lh)return s.COMPRESSED_RG11_EAC;if(i===Ih)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Uh||i===Fh||i===Nh||i===Oh||i===kh||i===Bh||i===zh||i===Vh||i===Hh||i===Gh||i===Wh||i===Xh||i===$h||i===jh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Uh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$h)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yh||i===qh||i===Kh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Yh)return o===Ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zh||i===Jh||i===Qh||i===ep)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Zh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Jh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ep)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Z3=`
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

}`;class Q3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Av(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new rr({vertexShader:Z3,fragmentShader:J3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pr(new cc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eC extends Oa{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",p=new Q3,m={},y=t.getContextAttributes();let E=null,x=null;const R=[],A=[],C=new bt;let v=null;const T=new Ji;T.viewport=new nn;const N=new Ji;N.viewport=new nn;const U=[T,N],L=new fE;let H=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ue=R[J];return ue===void 0&&(ue=new nf,R[J]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(J){let ue=R[J];return ue===void 0&&(ue=new nf,R[J]=ue),ue.getGripSpace()},this.getHand=function(J){let ue=R[J];return ue===void 0&&(ue=new nf,R[J]=ue),ue.getHandSpace()};function G(J){const ue=A.indexOf(J.inputSource);if(ue===-1)return;const oe=R[ue];oe!==void 0&&(oe.update(J.inputSource,J.frame,c||o),oe.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",k);for(let J=0;J<R.length;J++){const ue=A[J];ue!==null&&(A[J]=null,R[J].disconnect(ue))}H=null,z=null,p.reset();for(const J in m)delete m[J];e.setRenderTarget(E),h=null,f=null,d=null,r=null,x=null,Te.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",X),r.addEventListener("inputsourceschange",k),y.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Re=null,Ae=null;y.depth&&(Ae=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=y.stencil?xo:ls,Re=y.stencil?Zl:Rr);const le={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(le),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Er(f.textureWidth,f.textureHeight,{format:er,type:zi,depthTexture:new Jl(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const oe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new Er(h.framebufferWidth,h.framebufferHeight,{format:er,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Te.setContext(r),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function k(J){for(let ue=0;ue<J.removed.length;ue++){const oe=J.removed[ue],Re=A.indexOf(oe);Re>=0&&(A[Re]=null,R[Re].disconnect(oe))}for(let ue=0;ue<J.added.length;ue++){const oe=J.added[ue];let Re=A.indexOf(oe);if(Re===-1){for(let le=0;le<R.length;le++)if(le>=A.length){A.push(oe),Re=le;break}else if(A[le]===null){A[le]=oe,Re=le;break}if(Re===-1)break}const Ae=R[Re];Ae&&Ae.connect(oe)}}const K=new se,j=new se;function F(J,ue,oe){K.setFromMatrixPosition(ue.matrixWorld),j.setFromMatrixPosition(oe.matrixWorld);const Re=K.distanceTo(j),Ae=ue.projectionMatrix.elements,le=oe.projectionMatrix.elements,M=Ae[14]/(Ae[10]-1),w=Ae[14]/(Ae[10]+1),V=(Ae[9]+1)/Ae[5],ee=(Ae[9]-1)/Ae[5],Y=(Ae[8]-1)/Ae[0],O=(le[8]+1)/le[0],I=M*Y,_e=M*O,de=Re/(-Y+O),ne=de*-Y;if(ue.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ne),J.translateZ(de),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ae[10]===-1)J.projectionMatrix.copy(ue.projectionMatrix),J.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const fe=M+de,P=w+de,S=I-ne,B=_e+(Re-ne),Z=V*w/P*fe,Q=ee*w/P*fe;J.projectionMatrix.makePerspective(S,B,Z,Q,fe,P),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ae(J,ue){ue===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ue.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ue=J.near,oe=J.far;p.texture!==null&&(p.depthNear>0&&(ue=p.depthNear),p.depthFar>0&&(oe=p.depthFar)),L.near=N.near=T.near=ue,L.far=N.far=T.far=oe,(H!==L.near||z!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),H=L.near,z=L.far),L.layers.mask=J.layers.mask|6,T.layers.mask=L.layers.mask&-5,N.layers.mask=L.layers.mask&-3;const Re=J.parent,Ae=L.cameras;ae(L,Re);for(let le=0;le<Ae.length;le++)ae(Ae[le],Re);Ae.length===2?F(L,T,N):L.projectionMatrix.copy(T.projectionMatrix),pe(J,L,Re)};function pe(J,ue,oe){oe===null?J.matrix.copy(ue.matrixWorld):(J.matrix.copy(oe.matrixWorld),J.matrix.invert(),J.matrix.multiply(ue.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ue.projectionMatrix),J.projectionMatrixInverse.copy(ue.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=tp*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(J){return m[J]};let me=null;function ve(J,ue){if(u=ue.getViewerPose(c||o),g=ue,u!==null){const oe=u.views;h!==null&&(e.setRenderTargetFramebuffer(x,h.framebuffer),e.setRenderTarget(x));let Re=!1;oe.length!==L.cameras.length&&(L.cameras.length=0,Re=!0);for(let w=0;w<oe.length;w++){const V=oe[w];let ee=null;if(h!==null)ee=h.getViewport(V);else{const O=d.getViewSubImage(f,V);ee=O.viewport,w===0&&(e.setRenderTargetTextures(x,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(x))}let Y=U[w];Y===void 0&&(Y=new Ji,Y.layers.enable(w),Y.viewport=new nn,U[w]=Y),Y.matrix.fromArray(V.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(V.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(ee.x,ee.y,ee.width,ee.height),w===0&&(L.matrix.copy(Y.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Re===!0&&L.cameras.push(Y)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const w=d.getDepthInformation(oe[0]);w&&w.isValid&&w.texture&&p.init(w,r.renderState)}if(Ae&&Ae.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let w=0;w<oe.length;w++){const V=oe[w].camera;if(V){let ee=m[V];ee||(ee=new Av,m[V]=ee);const Y=d.getCameraImage(V);ee.sourceTexture=Y}}}}for(let oe=0;oe<R.length;oe++){const Re=A[oe],Ae=R[oe];Re!==null&&Ae!==void 0&&Ae.update(Re,ue,c||o)}me&&me(J,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),g=null}const Te=new Pv;Te.setAnimationLoop(ve),this.setAnimationLoop=function(J){me=J},this.dispose=function(){}}}const to=new cs,tC=new ln;function nC(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Cv(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,y,E,x){m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===hi&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===hi&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m),E=y.envMap,x=y.envMapRotation;E&&(p.envMap.value=E,to.copy(x),to.x*=-1,to.y*=-1,to.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(to.y*=-1,to.z*=-1),p.envMapRotation.value.setFromMatrix4(tC.makeRotationFromEuler(to)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=E*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===hi&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function iC(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){const x=E.program;i.uniformBlockBinding(y,x)}function c(y,E){let x=r[y.id];x===void 0&&(g(y),x=u(y),r[y.id]=x,y.addEventListener("dispose",p));const R=E.program;i.updateUBOMapping(y,R);const A=e.render.frame;s[y.id]!==A&&(f(y),s[y.id]=A)}function u(y){const E=d();y.__bindingPointIndex=E;const x=n.createBuffer(),R=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,R,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,x),x}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const E=r[y.id],x=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let A=0,C=x.length;A<C;A++){const v=Array.isArray(x[A])?x[A]:[x[A]];for(let T=0,N=v.length;T<N;T++){const U=v[T];if(h(U,A,T,R)===!0){const L=U.__offset,H=Array.isArray(U.value)?U.value:[U.value];let z=0;for(let G=0;G<H.length;G++){const X=H[G],k=_(X);typeof X=="number"||typeof X=="boolean"?(U.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,L+z,U.__data)):X.isMatrix3?(U.__data[0]=X.elements[0],U.__data[1]=X.elements[1],U.__data[2]=X.elements[2],U.__data[3]=0,U.__data[4]=X.elements[3],U.__data[5]=X.elements[4],U.__data[6]=X.elements[5],U.__data[7]=0,U.__data[8]=X.elements[6],U.__data[9]=X.elements[7],U.__data[10]=X.elements[8],U.__data[11]=0):(X.toArray(U.__data,z),z+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,E,x,R){const A=y.value,C=E+"_"+x;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{const v=R[C];if(typeof A=="number"||typeof A=="boolean"){if(v!==A)return R[C]=A,!0}else if(v.equals(A)===!1)return v.copy(A),!0}return!1}function g(y){const E=y.uniforms;let x=0;const R=16;for(let C=0,v=E.length;C<v;C++){const T=Array.isArray(E[C])?E[C]:[E[C]];for(let N=0,U=T.length;N<U;N++){const L=T[N],H=Array.isArray(L.value)?L.value:[L.value];for(let z=0,G=H.length;z<G;z++){const X=H[z],k=_(X),K=x%R,j=K%k.boundary,F=K+j;x+=j,F!==0&&R-F<k.storage&&(x+=R-F),L.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=k.storage}}}const A=x%R;return A>0&&(x+=R-A),y.__size=x,y.__cache={},this}function _(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):rt("WebGLRenderer: Unsupported uniform value type.",y),E}function p(y){const E=y.target;E.removeEventListener("dispose",p);const x=o.indexOf(E.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function m(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}const rC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let lr=null;function sC(){return lr===null&&(lr=new Qw(rC,16,16,Ua,as),lr.name="DFG_LUT",lr.minFilter=Gn,lr.magFilter=Gn,lr.wrapS=Yr,lr.wrapT=Yr,lr.generateMipmaps=!1,lr.needsUpdate=!0),lr}class oC{constructor(e={}){const{canvas:t=Rw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=zi}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const _=h,p=new Set([Zp,Kp,qp]),m=new Set([zi,Rr,Kl,Zl,jp,Yp]),y=new Uint32Array(4),E=new Int32Array(4);let x=null,R=null;const A=[],C=[];let v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let N=!1;this._outputColorSpace=Oi;let U=0,L=0,H=null,z=-1,G=null;const X=new nn,k=new nn;let K=null;const j=new Ot(0);let F=0,ae=t.width,pe=t.height,me=1,ve=null,Te=null;const J=new nn(0,0,ae,pe),ue=new nn(0,0,ae,pe);let oe=!1;const Re=new Ev;let Ae=!1,le=!1;const M=new ln,w=new se,V=new nn,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Y=!1;function O(){return H===null?me:1}let I=i;function _e(D,$){return t.getContext(D,$)}try{const D={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xp}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",Ze,!1),t.addEventListener("webglcontextcreationerror",Mt,!1),I===null){const $="webgl2";if(I=_e($,D),I===null)throw _e($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw Et("WebGLRenderer: "+D.message),D}let de,ne,fe,P,S,B,Z,Q,q,Me,xe,He,De,ye,we,Pe,Fe,Le,Qe,W,Ce,Ee,Oe;function be(){de=new oA(I),de.init(),Ce=new K3(I,de),ne=new JT(I,de,e,Ce),fe=new Y3(I,de),ne.reversedDepthBuffer&&f&&fe.buffers.depth.setReversed(!0),P=new cA(I),S=new U3,B=new q3(I,de,fe,S,ne,Ce,P),Z=new sA(T),Q=new pE(I),Ee=new KT(I,Q),q=new aA(I,Q,P,Ee),Me=new dA(I,q,Q,Ee,P),Le=new uA(I,ne,B),we=new QT(S),xe=new I3(T,Z,de,ne,Ee,we),He=new nC(T,S),De=new N3,ye=new H3(de),Fe=new qT(T,Z,fe,Me,g,l),Pe=new j3(T,Me,ne),Oe=new iC(I,P,ne,fe),Qe=new ZT(I,de,P),W=new lA(I,de,P),P.programs=xe.programs,T.capabilities=ne,T.extensions=de,T.properties=S,T.renderLists=De,T.shadowMap=Pe,T.state=fe,T.info=P}be(),_!==zi&&(v=new hA(_,t.width,t.height,r,s));const ce=new eC(T,I);this.xr=ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const D=de.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=de.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(D){D!==void 0&&(me=D,this.setSize(ae,pe,!1))},this.getSize=function(D){return D.set(ae,pe)},this.setSize=function(D,$,re=!0){if(ce.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=D,pe=$,t.width=Math.floor(D*me),t.height=Math.floor($*me),re===!0&&(t.style.width=D+"px",t.style.height=$+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,D,$)},this.getDrawingBufferSize=function(D){return D.set(ae*me,pe*me).floor()},this.setDrawingBufferSize=function(D,$,re){ae=D,pe=$,me=re,t.width=Math.floor(D*re),t.height=Math.floor($*re),this.setViewport(0,0,D,$)},this.setEffects=function(D){if(_===zi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let $=0;$<D.length;$++)if(D[$].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(X)},this.getViewport=function(D){return D.copy(J)},this.setViewport=function(D,$,re,ie){D.isVector4?J.set(D.x,D.y,D.z,D.w):J.set(D,$,re,ie),fe.viewport(X.copy(J).multiplyScalar(me).round())},this.getScissor=function(D){return D.copy(ue)},this.setScissor=function(D,$,re,ie){D.isVector4?ue.set(D.x,D.y,D.z,D.w):ue.set(D,$,re,ie),fe.scissor(k.copy(ue).multiplyScalar(me).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(D){fe.setScissorTest(oe=D)},this.setOpaqueSort=function(D){ve=D},this.setTransparentSort=function(D){Te=D},this.getClearColor=function(D){return D.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(D=!0,$=!0,re=!0){let ie=0;if(D){let te=!1;if(H!==null){const Ie=H.texture.format;te=p.has(Ie)}if(te){const Ie=H.texture.type,ke=m.has(Ie),Ue=Fe.getClearColor(),Xe=Fe.getClearAlpha(),We=Ue.r,ot=Ue.g,ft=Ue.b;ke?(y[0]=We,y[1]=ot,y[2]=ft,y[3]=Xe,I.clearBufferuiv(I.COLOR,0,y)):(E[0]=We,E[1]=ot,E[2]=ft,E[3]=Xe,I.clearBufferiv(I.COLOR,0,E))}else ie|=I.COLOR_BUFFER_BIT}$&&(ie|=I.DEPTH_BUFFER_BIT),re&&(ie|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&I.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",Mt,!1),Fe.dispose(),De.dispose(),ye.dispose(),S.dispose(),Z.dispose(),Me.dispose(),Ee.dispose(),Oe.dispose(),xe.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",nt),ce.removeEventListener("sessionend",Qt),st.stop()};function Ge(D){D.preventDefault(),Dm("WebGLRenderer: Context Lost."),N=!0}function Ze(){Dm("WebGLRenderer: Context Restored."),N=!1;const D=P.autoReset,$=Pe.enabled,re=Pe.autoUpdate,ie=Pe.needsUpdate,te=Pe.type;be(),P.autoReset=D,Pe.enabled=$,Pe.autoUpdate=re,Pe.needsUpdate=ie,Pe.type=te}function Mt(D){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Ve(D){const $=D.target;$.removeEventListener("dispose",Ve),je($)}function je(D){ct(D),S.remove(D)}function ct(D){const $=S.get(D).programs;$!==void 0&&($.forEach(function(re){xe.releaseProgram(re)}),D.isShaderMaterial&&xe.releaseShaderCache(D))}this.renderBufferDirect=function(D,$,re,ie,te,Ie){$===null&&($=ee);const ke=te.isMesh&&te.matrixWorld.determinant()<0,Ue=Li(D,$,re,ie,te);fe.setMaterial(ie,ke);let Xe=re.index,We=1;if(ie.wireframe===!0){if(Xe=q.getWireframeAttribute(re),Xe===void 0)return;We=2}const ot=re.drawRange,ft=re.attributes.position;let qe=ot.start*We,Ft=(ot.start+ot.count)*We;Ie!==null&&(qe=Math.max(qe,Ie.start*We),Ft=Math.min(Ft,(Ie.start+Ie.count)*We)),Xe!==null?(qe=Math.max(qe,0),Ft=Math.min(Ft,Xe.count)):ft!=null&&(qe=Math.max(qe,0),Ft=Math.min(Ft,ft.count));const en=Ft-qe;if(en<0||en===1/0)return;Ee.setup(te,ie,Ue,re,Xe);let Zt,Nt=Qe;if(Xe!==null&&(Zt=Q.get(Xe),Nt=W,Nt.setIndex(Zt)),te.isMesh)ie.wireframe===!0?(fe.setLineWidth(ie.wireframeLinewidth*O()),Nt.setMode(I.LINES)):Nt.setMode(I.TRIANGLES);else if(te.isLine){let In=ie.linewidth;In===void 0&&(In=1),fe.setLineWidth(In*O()),te.isLineSegments?Nt.setMode(I.LINES):te.isLineLoop?Nt.setMode(I.LINE_LOOP):Nt.setMode(I.LINE_STRIP)}else te.isPoints?Nt.setMode(I.POINTS):te.isSprite&&Nt.setMode(I.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)ju("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(de.get("WEBGL_multi_draw"))Nt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const In=te._multiDrawStarts,Ye=te._multiDrawCounts,mi=te._multiDrawCount,wt=Xe?Q.get(Xe).bytesPerElement:1,ji=S.get(ie).currentProgram.getUniforms();for(let sr=0;sr<mi;sr++)ji.setValue(I,"_gl_DrawID",sr),Nt.render(In[sr]/wt,Ye[sr])}else if(te.isInstancedMesh)Nt.renderInstances(qe,en,te.count);else if(re.isInstancedBufferGeometry){const In=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ye=Math.min(re.instanceCount,In);Nt.renderInstances(qe,en,Ye)}else Nt.render(qe,en)};function Be(D,$,re){D.transparent===!0&&D.side===$r&&D.forceSinglePass===!1?(D.side=hi,D.needsUpdate=!0,Dn(D,$,re),D.side=zs,D.needsUpdate=!0,Dn(D,$,re),D.side=$r):Dn(D,$,re)}this.compile=function(D,$,re=null){re===null&&(re=D),R=ye.get(re),R.init($),C.push(R),re.traverseVisible(function(te){te.isLight&&te.layers.test($.layers)&&(R.pushLight(te),te.castShadow&&R.pushShadow(te))}),D!==re&&D.traverseVisible(function(te){te.isLight&&te.layers.test($.layers)&&(R.pushLight(te),te.castShadow&&R.pushShadow(te))}),R.setupLights();const ie=new Set;return D.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Ie=te.material;if(Ie)if(Array.isArray(Ie))for(let ke=0;ke<Ie.length;ke++){const Ue=Ie[ke];Be(Ue,re,te),ie.add(Ue)}else Be(Ie,re,te),ie.add(Ie)}),R=C.pop(),ie},this.compileAsync=function(D,$,re=null){const ie=this.compile(D,$,re);return new Promise(te=>{function Ie(){if(ie.forEach(function(ke){S.get(ke).currentProgram.isReady()&&ie.delete(ke)}),ie.size===0){te(D);return}setTimeout(Ie,10)}de.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let tt=null;function Je(D){tt&&tt(D)}function nt(){st.stop()}function Qt(){st.start()}const st=new Pv;st.setAnimationLoop(Je),typeof self<"u"&&st.setContext(self),this.setAnimationLoop=function(D){tt=D,ce.setAnimationLoop(D),D===null?st.stop():st.start()},ce.addEventListener("sessionstart",nt),ce.addEventListener("sessionend",Qt),this.render=function(D,$){if($!==void 0&&$.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const re=ce.enabled===!0&&ce.isPresenting===!0,ie=v!==null&&(H===null||re)&&v.begin(T,H);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera($),$=ce.getCamera()),D.isScene===!0&&D.onBeforeRender(T,D,$,H),R=ye.get(D,C.length),R.init($),C.push(R),M.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Re.setFromProjectionMatrix(M,yr,$.reversedDepth),le=this.localClippingEnabled,Ae=we.init(this.clippingPlanes,le),x=De.get(D,A.length),x.init(),A.push(x),ce.enabled===!0&&ce.isPresenting===!0){const ke=T.xr.getDepthSensingMesh();ke!==null&&Wt(ke,$,-1/0,T.sortObjects)}Wt(D,$,0,T.sortObjects),x.finish(),T.sortObjects===!0&&x.sort(ve,Te),Y=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Y&&Fe.addToRenderList(x,D),this.info.render.frame++,Ae===!0&&we.beginShadows();const te=R.state.shadowsArray;if(Pe.render(te,D,$),Ae===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&v.hasRenderPass())===!1){const ke=x.opaque,Ue=x.transmissive;if(R.setupLights(),$.isArrayCamera){const Xe=$.cameras;if(Ue.length>0)for(let We=0,ot=Xe.length;We<ot;We++){const ft=Xe[We];Xt(ke,Ue,D,ft)}Y&&Fe.render(D);for(let We=0,ot=Xe.length;We<ot;We++){const ft=Xe[We];cn(x,D,ft,ft.viewport)}}else Ue.length>0&&Xt(ke,Ue,D,$),Y&&Fe.render(D),cn(x,D,$)}H!==null&&L===0&&(B.updateMultisampleRenderTarget(H),B.updateRenderTargetMipmap(H)),ie&&v.end(T),D.isScene===!0&&D.onAfterRender(T,D,$),Ee.resetDefaultState(),z=-1,G=null,C.pop(),C.length>0?(R=C[C.length-1],Ae===!0&&we.setGlobalState(T.clippingPlanes,R.state.camera)):R=null,A.pop(),A.length>0?x=A[A.length-1]:x=null};function Wt(D,$,re,ie){if(D.visible===!1)return;if(D.layers.test($.layers)){if(D.isGroup)re=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update($);else if(D.isLight)R.pushLight(D),D.castShadow&&R.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Re.intersectsSprite(D)){ie&&V.setFromMatrixPosition(D.matrixWorld).applyMatrix4(M);const ke=Me.update(D),Ue=D.material;Ue.visible&&x.push(D,ke,Ue,re,V.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Re.intersectsObject(D))){const ke=Me.update(D),Ue=D.material;if(ie&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),V.copy(D.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),V.copy(ke.boundingSphere.center)),V.applyMatrix4(D.matrixWorld).applyMatrix4(M)),Array.isArray(Ue)){const Xe=ke.groups;for(let We=0,ot=Xe.length;We<ot;We++){const ft=Xe[We],qe=Ue[ft.materialIndex];qe&&qe.visible&&x.push(D,ke,qe,re,V.z,ft)}}else Ue.visible&&x.push(D,ke,Ue,re,V.z,null)}}const Ie=D.children;for(let ke=0,Ue=Ie.length;ke<Ue;ke++)Wt(Ie[ke],$,re,ie)}function cn(D,$,re,ie){const{opaque:te,transmissive:Ie,transparent:ke}=D;R.setupLightsView(re),Ae===!0&&we.setGlobalState(T.clippingPlanes,re),ie&&fe.viewport(X.copy(ie)),te.length>0&&Lt(te,$,re),Ie.length>0&&Lt(Ie,$,re),ke.length>0&&Lt(ke,$,re),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Xt(D,$,re,ie){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[ie.id]===void 0){const qe=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[ie.id]=new Er(1,1,{generateMipmaps:!0,type:qe?as:zi,minFilter:_o,samples:Math.max(4,ne.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace})}const Ie=R.state.transmissionRenderTarget[ie.id],ke=ie.viewport||X;Ie.setSize(ke.z*T.transmissionResolutionScale,ke.w*T.transmissionResolutionScale);const Ue=T.getRenderTarget(),Xe=T.getActiveCubeFace(),We=T.getActiveMipmapLevel();T.setRenderTarget(Ie),T.getClearColor(j),F=T.getClearAlpha(),F<1&&T.setClearColor(16777215,.5),T.clear(),Y&&Fe.render(re);const ot=T.toneMapping;T.toneMapping=wr;const ft=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),R.setupLightsView(ie),Ae===!0&&we.setGlobalState(T.clippingPlanes,ie),Lt(D,re,ie),B.updateMultisampleRenderTarget(Ie),B.updateRenderTargetMipmap(Ie),de.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Ft=0,en=$.length;Ft<en;Ft++){const Zt=$[Ft],{object:Nt,geometry:In,material:Ye,group:mi}=Zt;if(Ye.side===$r&&Nt.layers.test(ie.layers)){const wt=Ye.side;Ye.side=hi,Ye.needsUpdate=!0,Ct(Nt,re,ie,In,Ye,mi),Ye.side=wt,Ye.needsUpdate=!0,qe=!0}}qe===!0&&(B.updateMultisampleRenderTarget(Ie),B.updateRenderTargetMipmap(Ie))}T.setRenderTarget(Ue,Xe,We),T.setClearColor(j,F),ft!==void 0&&(ie.viewport=ft),T.toneMapping=ot}function Lt(D,$,re){const ie=$.isScene===!0?$.overrideMaterial:null;for(let te=0,Ie=D.length;te<Ie;te++){const ke=D[te],{object:Ue,geometry:Xe,group:We}=ke;let ot=ke.material;ot.allowOverride===!0&&ie!==null&&(ot=ie),Ue.layers.test(re.layers)&&Ct(Ue,$,re,Xe,ot,We)}}function Ct(D,$,re,ie,te,Ie){D.onBeforeRender(T,$,re,ie,te,Ie),D.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),te.onBeforeRender(T,$,re,ie,D,Ie),te.transparent===!0&&te.side===$r&&te.forceSinglePass===!1?(te.side=hi,te.needsUpdate=!0,T.renderBufferDirect(re,$,ie,te,D,Ie),te.side=zs,te.needsUpdate=!0,T.renderBufferDirect(re,$,ie,te,D,Ie),te.side=$r):T.renderBufferDirect(re,$,ie,te,D,Ie),D.onAfterRender(T,$,re,ie,te,Ie)}function Dn(D,$,re){$.isScene!==!0&&($=ee);const ie=S.get(D),te=R.state.lights,Ie=R.state.shadowsArray,ke=te.state.version,Ue=xe.getParameters(D,te.state,Ie,$,re),Xe=xe.getProgramCacheKey(Ue);let We=ie.programs;ie.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?$.environment:null,ie.fog=$.fog;const ot=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;ie.envMap=Z.get(D.envMap||ie.environment,ot),ie.envMapRotation=ie.environment!==null&&D.envMap===null?$.environmentRotation:D.envMapRotation,We===void 0&&(D.addEventListener("dispose",Ve),We=new Map,ie.programs=We);let ft=We.get(Xe);if(ft!==void 0){if(ie.currentProgram===ft&&ie.lightsStateVersion===ke)return Ln(D,Ue),ft}else Ue.uniforms=xe.getUniforms(D),D.onBeforeCompile(Ue,T),ft=xe.acquireProgram(Ue,Xe),We.set(Xe,ft),ie.uniforms=Ue.uniforms;const qe=ie.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(qe.clippingPlanes=we.uniform),Ln(D,Ue),ie.needsLights=dn(D),ie.lightsStateVersion=ke,ie.needsLights&&(qe.ambientLightColor.value=te.state.ambient,qe.lightProbe.value=te.state.probe,qe.directionalLights.value=te.state.directional,qe.directionalLightShadows.value=te.state.directionalShadow,qe.spotLights.value=te.state.spot,qe.spotLightShadows.value=te.state.spotShadow,qe.rectAreaLights.value=te.state.rectArea,qe.ltc_1.value=te.state.rectAreaLTC1,qe.ltc_2.value=te.state.rectAreaLTC2,qe.pointLights.value=te.state.point,qe.pointLightShadows.value=te.state.pointShadow,qe.hemisphereLights.value=te.state.hemi,qe.directionalShadowMatrix.value=te.state.directionalShadowMatrix,qe.spotLightMatrix.value=te.state.spotLightMatrix,qe.spotLightMap.value=te.state.spotLightMap,qe.pointShadowMatrix.value=te.state.pointShadowMatrix),ie.currentProgram=ft,ie.uniformsList=null,ft}function Ht(D){if(D.uniformsList===null){const $=D.currentProgram.getUniforms();D.uniformsList=vu.seqWithValue($.seq,D.uniforms)}return D.uniformsList}function Ln(D,$){const re=S.get(D);re.outputColorSpace=$.outputColorSpace,re.batching=$.batching,re.batchingColor=$.batchingColor,re.instancing=$.instancing,re.instancingColor=$.instancingColor,re.instancingMorph=$.instancingMorph,re.skinning=$.skinning,re.morphTargets=$.morphTargets,re.morphNormals=$.morphNormals,re.morphColors=$.morphColors,re.morphTargetsCount=$.morphTargetsCount,re.numClippingPlanes=$.numClippingPlanes,re.numIntersection=$.numClipIntersection,re.vertexAlphas=$.vertexAlphas,re.vertexTangents=$.vertexTangents,re.toneMapping=$.toneMapping}function Li(D,$,re,ie,te){$.isScene!==!0&&($=ee),B.resetTextureUnits();const Ie=$.fog,ke=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?$.environment:null,Ue=H===null?T.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Fa,Xe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,We=Z.get(ie.envMap||ke,Xe),ot=ie.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ft=!!re.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),qe=!!re.morphAttributes.position,Ft=!!re.morphAttributes.normal,en=!!re.morphAttributes.color;let Zt=wr;ie.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Zt=T.toneMapping);const Nt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,In=Nt!==void 0?Nt.length:0,Ye=S.get(ie),mi=R.state.lights;if(Ae===!0&&(le===!0||D!==G)){const xn=D===G&&ie.id===z;we.setState(ie,D,xn)}let wt=!1;ie.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==mi.state.version||Ye.outputColorSpace!==Ue||te.isBatchedMesh&&Ye.batching===!1||!te.isBatchedMesh&&Ye.batching===!0||te.isBatchedMesh&&Ye.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Ye.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Ye.instancing===!1||!te.isInstancedMesh&&Ye.instancing===!0||te.isSkinnedMesh&&Ye.skinning===!1||!te.isSkinnedMesh&&Ye.skinning===!0||te.isInstancedMesh&&Ye.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Ye.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Ye.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Ye.instancingMorph===!1&&te.morphTexture!==null||Ye.envMap!==We||ie.fog===!0&&Ye.fog!==Ie||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==we.numPlanes||Ye.numIntersection!==we.numIntersection)||Ye.vertexAlphas!==ot||Ye.vertexTangents!==ft||Ye.morphTargets!==qe||Ye.morphNormals!==Ft||Ye.morphColors!==en||Ye.toneMapping!==Zt||Ye.morphTargetsCount!==In)&&(wt=!0):(wt=!0,Ye.__version=ie.version);let ji=Ye.currentProgram;wt===!0&&(ji=Dn(ie,$,te));let sr=!1,Gs=!1,Fo=!1;const kt=ji.getUniforms(),wn=Ye.uniforms;if(fe.useProgram(ji.program)&&(sr=!0,Gs=!0,Fo=!0),ie.id!==z&&(z=ie.id,Gs=!0),sr||G!==D){fe.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),kt.setValue(I,"projectionMatrix",D.projectionMatrix),kt.setValue(I,"viewMatrix",D.matrixWorldInverse);const hs=kt.map.cameraPosition;hs!==void 0&&hs.setValue(I,w.setFromMatrixPosition(D.matrixWorld)),ne.logarithmicDepthBuffer&&kt.setValue(I,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&kt.setValue(I,"isOrthographic",D.isOrthographicCamera===!0),G!==D&&(G=D,Gs=!0,Fo=!0)}if(Ye.needsLights&&(mi.state.directionalShadowMap.length>0&&kt.setValue(I,"directionalShadowMap",mi.state.directionalShadowMap,B),mi.state.spotShadowMap.length>0&&kt.setValue(I,"spotShadowMap",mi.state.spotShadowMap,B),mi.state.pointShadowMap.length>0&&kt.setValue(I,"pointShadowMap",mi.state.pointShadowMap,B)),te.isSkinnedMesh){kt.setOptional(I,te,"bindMatrix"),kt.setOptional(I,te,"bindMatrixInverse");const xn=te.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),kt.setValue(I,"boneTexture",xn.boneTexture,B))}te.isBatchedMesh&&(kt.setOptional(I,te,"batchingTexture"),kt.setValue(I,"batchingTexture",te._matricesTexture,B),kt.setOptional(I,te,"batchingIdTexture"),kt.setValue(I,"batchingIdTexture",te._indirectTexture,B),kt.setOptional(I,te,"batchingColorTexture"),te._colorsTexture!==null&&kt.setValue(I,"batchingColorTexture",te._colorsTexture,B));const fs=re.morphAttributes;if((fs.position!==void 0||fs.normal!==void 0||fs.color!==void 0)&&Le.update(te,re,ji),(Gs||Ye.receiveShadow!==te.receiveShadow)&&(Ye.receiveShadow=te.receiveShadow,kt.setValue(I,"receiveShadow",te.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&$.environment!==null&&(wn.envMapIntensity.value=$.environmentIntensity),wn.dfgLUT!==void 0&&(wn.dfgLUT.value=sC()),Gs&&(kt.setValue(I,"toneMappingExposure",T.toneMappingExposure),Ye.needsLights&&un(wn,Fo),Ie&&ie.fog===!0&&He.refreshFogUniforms(wn,Ie),He.refreshMaterialUniforms(wn,ie,me,pe,R.state.transmissionRenderTarget[D.id]),vu.upload(I,Ht(Ye),wn,B)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(vu.upload(I,Ht(Ye),wn,B),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&kt.setValue(I,"center",te.center),kt.setValue(I,"modelViewMatrix",te.modelViewMatrix),kt.setValue(I,"normalMatrix",te.normalMatrix),kt.setValue(I,"modelMatrix",te.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const xn=ie.uniformsGroups;for(let hs=0,No=xn.length;hs<No;hs++){const r0=xn[hs];Oe.update(r0,ji),Oe.bind(r0,ji)}}return ji}function un(D,$){D.ambientLightColor.needsUpdate=$,D.lightProbe.needsUpdate=$,D.directionalLights.needsUpdate=$,D.directionalLightShadows.needsUpdate=$,D.pointLights.needsUpdate=$,D.pointLightShadows.needsUpdate=$,D.spotLights.needsUpdate=$,D.spotLightShadows.needsUpdate=$,D.rectAreaLights.needsUpdate=$,D.hemisphereLights.needsUpdate=$}function dn(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(D,$,re){const ie=S.get(D);ie.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),S.get(D.texture).__webglTexture=$,S.get(D.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:re,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,$){const re=S.get(D);re.__webglFramebuffer=$,re.__useDefaultFramebuffer=$===void 0};const _n=I.createFramebuffer();this.setRenderTarget=function(D,$=0,re=0){H=D,U=$,L=re;let ie=null,te=!1,Ie=!1;if(D){const Ue=S.get(D);if(Ue.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(I.FRAMEBUFFER,Ue.__webglFramebuffer),X.copy(D.viewport),k.copy(D.scissor),K=D.scissorTest,fe.viewport(X),fe.scissor(k),fe.setScissorTest(K),z=-1;return}else if(Ue.__webglFramebuffer===void 0)B.setupRenderTarget(D);else if(Ue.__hasExternalTextures)B.rebindTextures(D,S.get(D.texture).__webglTexture,S.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const ot=D.depthTexture;if(Ue.__boundDepthTexture!==ot){if(ot!==null&&S.has(ot)&&(D.width!==ot.image.width||D.height!==ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(D)}}const Xe=D.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ie=!0);const We=S.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(We[$])?ie=We[$][re]:ie=We[$],te=!0):D.samples>0&&B.useMultisampledRTT(D)===!1?ie=S.get(D).__webglMultisampledFramebuffer:Array.isArray(We)?ie=We[re]:ie=We,X.copy(D.viewport),k.copy(D.scissor),K=D.scissorTest}else X.copy(J).multiplyScalar(me).floor(),k.copy(ue).multiplyScalar(me).floor(),K=oe;if(re!==0&&(ie=_n),fe.bindFramebuffer(I.FRAMEBUFFER,ie)&&fe.drawBuffers(D,ie),fe.viewport(X),fe.scissor(k),fe.setScissorTest(K),te){const Ue=S.get(D.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ue.__webglTexture,re)}else if(Ie){const Ue=$;for(let Xe=0;Xe<D.textures.length;Xe++){const We=S.get(D.textures[Xe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Xe,We.__webglTexture,re,Ue)}}else if(D!==null&&re!==0){const Ue=S.get(D.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ue.__webglTexture,re)}z=-1},this.readRenderTargetPixels=function(D,$,re,ie,te,Ie,ke,Ue=0){if(!(D&&D.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=S.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ke!==void 0&&(Xe=Xe[ke]),Xe){fe.bindFramebuffer(I.FRAMEBUFFER,Xe);try{const We=D.textures[Ue],ot=We.format,ft=We.type;if(D.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ue),!ne.textureFormatReadable(ot)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(ft)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=D.width-ie&&re>=0&&re<=D.height-te&&I.readPixels($,re,ie,te,Ce.convert(ot),Ce.convert(ft),Ie)}finally{const We=H!==null?S.get(H).__webglFramebuffer:null;fe.bindFramebuffer(I.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(D,$,re,ie,te,Ie,ke,Ue=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=S.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ke!==void 0&&(Xe=Xe[ke]),Xe)if($>=0&&$<=D.width-ie&&re>=0&&re<=D.height-te){fe.bindFramebuffer(I.FRAMEBUFFER,Xe);const We=D.textures[Ue],ot=We.format,ft=We.type;if(D.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ue),!ne.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,qe),I.bufferData(I.PIXEL_PACK_BUFFER,Ie.byteLength,I.STREAM_READ),I.readPixels($,re,ie,te,Ce.convert(ot),Ce.convert(ft),0);const Ft=H!==null?S.get(H).__webglFramebuffer:null;fe.bindFramebuffer(I.FRAMEBUFFER,Ft);const en=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Pw(I,en,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,qe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Ie),I.deleteBuffer(qe),I.deleteSync(en),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,$=null,re=0){const ie=Math.pow(2,-re),te=Math.floor(D.image.width*ie),Ie=Math.floor(D.image.height*ie),ke=$!==null?$.x:0,Ue=$!==null?$.y:0;B.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,re,0,0,ke,Ue,te,Ie),fe.unbindTexture()};const Dr=I.createFramebuffer(),Uo=I.createFramebuffer();this.copyTextureToTexture=function(D,$,re=null,ie=null,te=0,Ie=0){let ke,Ue,Xe,We,ot,ft,qe,Ft,en;const Zt=D.isCompressedTexture?D.mipmaps[Ie]:D.image;if(re!==null)ke=re.max.x-re.min.x,Ue=re.max.y-re.min.y,Xe=re.isBox3?re.max.z-re.min.z:1,We=re.min.x,ot=re.min.y,ft=re.isBox3?re.min.z:0;else{const wn=Math.pow(2,-te);ke=Math.floor(Zt.width*wn),Ue=Math.floor(Zt.height*wn),D.isDataArrayTexture?Xe=Zt.depth:D.isData3DTexture?Xe=Math.floor(Zt.depth*wn):Xe=1,We=0,ot=0,ft=0}ie!==null?(qe=ie.x,Ft=ie.y,en=ie.z):(qe=0,Ft=0,en=0);const Nt=Ce.convert($.format),In=Ce.convert($.type);let Ye;$.isData3DTexture?(B.setTexture3D($,0),Ye=I.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(B.setTexture2DArray($,0),Ye=I.TEXTURE_2D_ARRAY):(B.setTexture2D($,0),Ye=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,$.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,$.unpackAlignment);const mi=I.getParameter(I.UNPACK_ROW_LENGTH),wt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ji=I.getParameter(I.UNPACK_SKIP_PIXELS),sr=I.getParameter(I.UNPACK_SKIP_ROWS),Gs=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Zt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Zt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,We),I.pixelStorei(I.UNPACK_SKIP_ROWS,ot),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ft);const Fo=D.isDataArrayTexture||D.isData3DTexture,kt=$.isDataArrayTexture||$.isData3DTexture;if(D.isDepthTexture){const wn=S.get(D),fs=S.get($),xn=S.get(wn.__renderTarget),hs=S.get(fs.__renderTarget);fe.bindFramebuffer(I.READ_FRAMEBUFFER,xn.__webglFramebuffer),fe.bindFramebuffer(I.DRAW_FRAMEBUFFER,hs.__webglFramebuffer);for(let No=0;No<Xe;No++)Fo&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,S.get(D).__webglTexture,te,ft+No),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,S.get($).__webglTexture,Ie,en+No)),I.blitFramebuffer(We,ot,ke,Ue,qe,Ft,ke,Ue,I.DEPTH_BUFFER_BIT,I.NEAREST);fe.bindFramebuffer(I.READ_FRAMEBUFFER,null),fe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(te!==0||D.isRenderTargetTexture||S.has(D)){const wn=S.get(D),fs=S.get($);fe.bindFramebuffer(I.READ_FRAMEBUFFER,Dr),fe.bindFramebuffer(I.DRAW_FRAMEBUFFER,Uo);for(let xn=0;xn<Xe;xn++)Fo?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,wn.__webglTexture,te,ft+xn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,wn.__webglTexture,te),kt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,fs.__webglTexture,Ie,en+xn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,fs.__webglTexture,Ie),te!==0?I.blitFramebuffer(We,ot,ke,Ue,qe,Ft,ke,Ue,I.COLOR_BUFFER_BIT,I.NEAREST):kt?I.copyTexSubImage3D(Ye,Ie,qe,Ft,en+xn,We,ot,ke,Ue):I.copyTexSubImage2D(Ye,Ie,qe,Ft,We,ot,ke,Ue);fe.bindFramebuffer(I.READ_FRAMEBUFFER,null),fe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else kt?D.isDataTexture||D.isData3DTexture?I.texSubImage3D(Ye,Ie,qe,Ft,en,ke,Ue,Xe,Nt,In,Zt.data):$.isCompressedArrayTexture?I.compressedTexSubImage3D(Ye,Ie,qe,Ft,en,ke,Ue,Xe,Nt,Zt.data):I.texSubImage3D(Ye,Ie,qe,Ft,en,ke,Ue,Xe,Nt,In,Zt):D.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Ie,qe,Ft,ke,Ue,Nt,In,Zt.data):D.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Ie,qe,Ft,Zt.width,Zt.height,Nt,Zt.data):I.texSubImage2D(I.TEXTURE_2D,Ie,qe,Ft,ke,Ue,Nt,In,Zt);I.pixelStorei(I.UNPACK_ROW_LENGTH,mi),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,wt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ji),I.pixelStorei(I.UNPACK_SKIP_ROWS,sr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Gs),Ie===0&&$.generateMipmaps&&I.generateMipmap(Ye),fe.unbindTexture()},this.initRenderTarget=function(D){S.get(D).__webglFramebuffer===void 0&&B.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?B.setTextureCube(D,0):D.isData3DTexture?B.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?B.setTexture2DArray(D,0):B.setTexture2D(D,0),fe.unbindTexture()},this.resetState=function(){U=0,L=0,H=null,fe.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}function aC(n,e=50){const t=new Map;let i=null;const r=o=>{try{return JSON.stringify(o)}catch{return String(o)}},s=(...o)=>{const a=r(o);if(t.has(a))return t.get(a);const l=n(...o);return t.set(a,l),i&&clearTimeout(i),i=setTimeout(()=>{t.clear(),i=null},e),l};return s.cancel=()=>{i&&(clearTimeout(i),i=null),t.clear()},s}const Tf=9,lC=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,cC={__name:"Blob3DBackground",setup(n,{expose:e}){const t=Ne(null);let i=null;const r={sampleScreenPixel:null,samplePoints:null},s=aC((p,m)=>{var T;if(!l||!d)return null;const y=(T=t.value)==null?void 0:T.getBoundingClientRect();if(!y)return null;const E=Math.round((p-y.left)*l.getPixelRatio()),x=Math.round((m-y.top)*l.getPixelRatio()),R=Math.round(y.width*l.getPixelRatio()),A=Math.round(y.height*l.getPixelRatio());if(E<0||x<0||E>=R||x>=A)return null;const C=l.getContext(),v=new Uint8Array(4);return C.readPixels(E,A-x-1,1,1,C.RGBA,C.UNSIGNED_BYTE,v),{r:v[0],g:v[1],b:v[2],a:v[3]}},50),o=(p,m,y,E)=>{var z;if(!l||!d)return null;const x=(z=t.value)==null?void 0:z.getBoundingClientRect();if(!x)return null;const R=l.getPixelRatio(),A=Math.round(x.width*R),C=Math.round(x.height*R);let v=Math.floor((p-x.left)*R),T=Math.floor((m-x.top)*R),N=Math.ceil(y*R),U=Math.ceil(E*R);if(v<0&&(N+=v,v=0),T<0&&(U+=T,T=0),N=Math.min(N,A-v),U=Math.min(U,C-T),N<=0||U<=0)return null;const L=N*U*4;(!i||i.length<L)&&(i=new Uint8Array(L));const H=l.getContext();return H.readPixels(v,C-(T+U),N,U,H.RGBA,H.UNSIGNED_BYTE,i),{data:i,px:v,py:T,pw:N,ph:U,ratio:R,left:x.left,top:x.top}},a=p=>{if(!p||p.length===0)return[];let m=1/0,y=1/0,E=-1/0,x=-1/0;for(const G of p)G.x<m&&(m=G.x),G.x>E&&(E=G.x),G.y<y&&(y=G.y),G.y>x&&(x=G.y);const R=o(m,y,E-m+1,x-y+1);if(!R)return p.map(()=>null);const{data:A,px:C,py:v,pw:T,ph:N,ratio:U,left:L,top:H}=R,z=new Array(p.length);for(let G=0;G<p.length;G++){const X=Math.floor((p[G].x-L)*U),k=Math.floor((p[G].y-H)*U);if(X<C||X>=C+T||k<v||k>=v+N){z[G]=null;continue}const j=((v+N-1-k)*T+(X-C))*4;z[G]={r:A[j],g:A[j+1],b:A[j+2],a:A[j+3]}}return z};r.sampleScreenPixel=s,r.samplePoints=a,window.__blobSampler=r,e({sampleScreenPixel:s,samplePoints:a});let l=null,c=null,u=null,d=null,f=null,h=[];function g(p,m){const y=getComputedStyle(document.documentElement).getPropertyValue(p).trim();if(!y)return m;const E=y.split(/\s+/).map(Number);return E.length<3||E.some(Number.isNaN)?m:new se(E[0]/255,E[1]/255,E[2]/255)}const _=`
  precision highp float;

  varying vec2 vUv;

  uniform vec2  uResolution;
  uniform float uTime;
  uniform float uScroll;
  uniform vec2  uMouse;
  uniform vec2  uMouseDir;
  uniform float uMouseStrength;
  uniform vec3  uBallPos[${Tf}];
  uniform float uBallRadius[${Tf}];
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
    for (int i = 1; i < ${Tf}; i++) {
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
`;return Pn(()=>{const p=t.value,m=p.clientWidth,y=p.clientHeight;l=new oC({antialias:!1,alpha:!0,preserveDrawingBuffer:!0}),l.setSize(m,y),l.setPixelRatio(Math.min(window.devicePixelRatio,1)),p.appendChild(l.domElement),c=new $w,u=new n0(-1,1,1,-1,0,1);const E=[{base:[-3.4,1.4,-.5],amp:[2.4,2,1.3],spd:[.13,.089,.061],ph:[0,1.7,3.4],r:2.6},{base:[3.6,-1.2,.4],amp:[2.2,2.3,1.2],spd:[.101,.127,.073],ph:[2.1,.4,5.2],r:2.3},{base:[-.8,-2.6,-1.1],amp:[2.6,1.9,1.5],spd:[.083,.113,.055],ph:[4.3,2.9,1.1],r:1.95},{base:[1.9,2.6,-.8],amp:[2,2.1,1.1],spd:[.119,.067,.091],ph:[1.2,5.1,2.7],r:1.5},{base:[-4.1,-1.9,.7],amp:[1.8,2.2,1.4],spd:[.071,.103,.047],ph:[3.8,1.5,4.6],r:1.25},{base:[4.2,1.8,-1.4],amp:[2.1,1.8,1.6],spd:[.109,.079,.121],ph:[5.5,3.2,.8],r:1.1},{base:[.4,3.3,.3],amp:[2.3,1.5,1.2],spd:[.059,.131,.085],ph:[2.6,4.8,3.9],r:.75},{base:[-2.1,2.9,-1.7],amp:[1.9,2,1.3],spd:[.127,.053,.097],ph:[.7,2.3,5.8],r:.58},{base:[1.4,-3.2,-.3],amp:[2.2,1.7,1.5],spd:[.093,.117,.065],ph:[4.9,.9,2.2],r:.45}],x=E.map(()=>new se),R=E.map(oe=>oe.r),A=new se(.06,.73,.51),C=new se(.02,.47,.34),v=new se(.02,.31,.23),T=new se(.2,.83,.6);d=new rr({vertexShader:lC,fragmentShader:_,transparent:!0,depthWrite:!1,uniforms:{uResolution:{value:new bt(m,y)},uTime:{value:0},uScroll:{value:0},uMouse:{value:new bt(0,0)},uMouseDir:{value:new bt(1,0)},uMouseStrength:{value:0},uBallPos:{value:x},uBallRadius:{value:R},uColorA:{value:A.clone()},uColorB:{value:C.clone()},uColorC:{value:v.clone()},uColorHi:{value:T.clone()}}});const N=new Pr(new cc(2,2),d);N.frustumCulled=!1,c.add(N);const U=()=>{d.uniforms.uColorA.value.copy(g("--color-primary-500",A)),d.uniforms.uColorB.value.copy(g("--color-primary-700",C)),d.uniforms.uColorC.value.copy(g("--color-primary-900",v)),d.uniforms.uColorHi.value.copy(g("--color-primary-400",T))};U(),window.addEventListener("colorpalettechange",U);const L=new bt(0,0),H=new bt(0,0),z=new bt(1,0);let G=0,X=!1;const k=oe=>{const Re=oe.clientX/window.innerWidth*2-1,Ae=-(oe.clientY/window.innerHeight*2-1),le=Re-H.x,M=Ae-H.y,w=Math.hypot(le,M);if(w>8e-4){z.x+=(le/w-z.x)*.25,z.y+=(M/w-z.y)*.25;const V=Math.hypot(z.x,z.y)||1;z.x/=V,z.y/=V,G=Math.min(1,G+w*7)}H.set(Re,Ae),L.set(Re,Ae),X=!0},K=()=>{X=!1},j=oe=>{if(oe.touches.length>0){const Re=oe.touches[0],Ae=Re.clientX/window.innerWidth*2-1,le=-(Re.clientY/window.innerHeight*2-1);H.set(Ae,le),L.set(Ae,le),X=!0}},F=oe=>{if(oe.touches.length>0){const Re=oe.touches[0],Ae=Re.clientX/window.innerWidth*2-1,le=-(Re.clientY/window.innerHeight*2-1),M=Ae-H.x,w=le-H.y,V=Math.hypot(M,w);if(V>8e-4){z.x+=(M/V-z.x)*.25,z.y+=(w/V-z.y)*.25;const ee=Math.hypot(z.x,z.y)||1;z.x/=ee,z.y/=ee,G=Math.min(1,G+V*7)}H.set(Ae,le),L.set(Ae,le),X=!0}},ae=()=>{X=!1};window.addEventListener("mousemove",k,{passive:!0}),document.addEventListener("mouseleave",K),window.addEventListener("touchstart",j,{passive:!0}),window.addEventListener("touchmove",F,{passive:!0}),window.addEventListener("touchend",ae,{passive:!0});let pe=!0,me=0;const ve=()=>{me=Math.min(1,window.scrollY/window.innerHeight);const oe=pe;pe=me<.95,oe&&!pe?(cancelAnimationFrame(f),f=null):!oe&&pe&&ue()};window.addEventListener("scroll",ve,{passive:!0});const Te=()=>{const oe=p.clientWidth,Re=p.clientHeight;l.setSize(oe,Re),d.uniforms.uResolution.value.set(oe*l.getPixelRatio(),Re*l.getPixelRatio())};Te(),window.addEventListener("resize",Te);const J=performance.now(),ue=()=>{if(f=requestAnimationFrame(ue),!pe)return;const oe=(performance.now()-J)/1e3,Re=d.uniforms.uScroll.value;d.uniforms.uScroll.value=Re+(me-Re)*.08;const Ae=d.uniforms.uScroll.value,le=d.uniforms.uMouse.value;le.x+=(L.x-le.x)*.1,le.y+=(L.y-le.y)*.1,G*=.93;const M=X?.3+G*.85:0,w=d.uniforms.uMouseStrength;w.value+=(M-w.value)*.12;const V=d.uniforms.uMouseDir.value;V.x+=(z.x-V.x)*.1,V.y+=(z.y-V.y)*.1;const ee=Math.hypot(V.x,V.y)||1;V.x/=ee,V.y/=ee;for(let Y=0;Y<E.length;Y++){const O=E[Y],I=1+Ae*1.1,_e=1-Ae*.25,de=1.55;x[Y].set((O.base[0]+Math.sin(oe*O.spd[0]*de+O.ph[0])*O.amp[0])*I,(O.base[1]+Math.sin(oe*O.spd[1]*de+O.ph[1])*O.amp[1])*_e-Ae*1.6,O.base[2]+Math.cos(oe*O.spd[2]*de+O.ph[2])*O.amp[2]-Ae*1.2),R[Y]=O.r*(1+Math.sin(oe*(.055+Y*.009)+Y*1.9)*.16)*(1-Ae*.15);const ne=le.x*3.6,fe=le.y*2.3,P=ne-x[Y].x,S=fe-x[Y].y,B=Math.hypot(P,S),Z=R[Y]+.9;if(B<Z){const q=(1-B/Z)*w.value*.1;x[Y].x+=V.x*q,x[Y].y+=V.y*q}}d.uniforms.uTime.value=oe,l.render(c,u)};ve(),pe&&ue(),h.push(()=>{cancelAnimationFrame(f),window.removeEventListener("scroll",ve),window.removeEventListener("resize",Te),window.removeEventListener("mousemove",k),document.removeEventListener("mouseleave",K),window.removeEventListener("touchstart",j),window.removeEventListener("touchmove",F),window.removeEventListener("touchend",ae),window.removeEventListener("colorpalettechange",U),N.geometry.dispose(),d.dispose(),l.dispose(),l.domElement.parentNode&&l.domElement.parentNode.removeChild(l.domElement)})}),$n(()=>{h.forEach(p=>p())}),(p,m)=>(he(),ge("div",{ref_key:"containerRef",ref:t,class:"absolute inset-0 overflow-hidden pointer-events-none"},null,512))}},_d=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},uC={class:"text-primary-500 light:text-primary-600"},dC={__name:"HeroSection",setup(n){pt.registerPlugin(mt);const e=Ne(""),t=Ne(0),i=Ne(!1),r=["Frontend Developer","Vue.js Specialist","UI/UX Enthusiast","Problem Solver"];let s=null,o=null,a=[],l=null,c=null;const u=Ne(null),d=Ne(null),f=Ne(null),h=Ne(null),g=Ne(null),_=Ne(null),p=Ne(null),m=Ne(null),y=()=>{const E=r[t.value],x=e.value.length;if(i.value){if(e.value=E.substring(0,x-1),x===0){i.value=!1,t.value=(t.value+1)%r.length,s=setTimeout(y,500);return}s=setTimeout(y,50)}else{if(e.value=E.substring(0,x+1),x===E.length){i.value=!0,s=setTimeout(y,2e3);return}s=setTimeout(y,100)}};return Pn(()=>{s=setTimeout(y,500),o=pt.timeline({defaults:{ease:"power3.out"}}),o.fromTo(u.value,{opacity:0,y:30,filter:"blur(8px)"},{opacity:1,y:0,filter:"blur(0px)",clearProps:"filter",duration:.8}).fromTo(d.value,{opacity:0,y:50,filter:"blur(12px)"},{opacity:1,y:0,filter:"blur(0px)",clearProps:"filter",duration:1.1},"-=0.4").fromTo(f.value,{opacity:0,y:50,filter:"blur(12px)"},{opacity:1,y:0,filter:"blur(0px)",clearProps:"filter",duration:1.1},"-=0.6").fromTo(h.value,{opacity:0,y:40,filter:"blur(10px)"},{opacity:1,y:0,filter:"blur(0px)",clearProps:"filter",duration:1},"-=0.5").fromTo(g.value,{opacity:0,y:30,filter:"blur(8px)"},{opacity:1,y:0,filter:"blur(0px)",clearProps:"filter",duration:.8,stagger:.15},"-=0.5"),l=pt.to(_.value,{yPercent:-30,opacity:.2,ease:"none",scrollTrigger:{trigger:p.value,start:"top top",end:"bottom top",scrub:!0}});const E=d.value,x=14,R=C=>{const v=E.getBoundingClientRect(),T=(C.clientX-v.left)/v.width-.5,N=(C.clientY-v.top)/v.height-.5;c&&c.kill(),c=pt.to(E,{rotationY:T*x*2,rotationX:-N*x*2,transformPerspective:600,transformOrigin:"center center",duration:.4,ease:"power2.out"})},A=()=>{c&&c.kill(),c=pt.to(E,{rotationX:0,rotationY:0,duration:.8,ease:"elastic.out(1, 0.4)"})};E.addEventListener("mousemove",R),E.addEventListener("mouseleave",A),a.push(()=>{E.removeEventListener("mousemove",R),E.removeEventListener("mouseleave",A)})}),$n(()=>{var E;clearTimeout(s),o&&o.kill(),l&&((E=l.scrollTrigger)==null||E.kill()),a.forEach(x=>x())}),(E,x)=>(he(),ge("section",{ref_key:"heroSectionRef",ref:p,id:"home",class:"relative h-screen flex items-center justify-center overflow-hidden sticky top-0"},[x[3]||(x[3]=b("div",{class:"absolute inset-0 bg-grid opacity-20"},null,-1)),At(cC),b("div",{ref_key:"contentRef",ref:_,class:"relative text-center px-4 sm:px-6 lg:px-8 mx-auto"},[b("p",{ref_key:"greetingRef",ref:u,class:"text-primary-400 tracking-widest text-sm mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] light:drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"}," PORTFOLIO ",512),b("h1",{ref_key:"nameRef",ref:d,class:"font-griaste text-5xl sm:text-6xl md:text-7xl text-white light:text-secondary-900 mb-4 foil-text name-glow"}," Kenneth Cortez ",512),b("h2",{ref_key:"roleRef",ref:f,class:"text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary-300 light:text-secondary-800 mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] light:drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"},[x[0]||(x[0]=Fs(" I'm a ",-1)),b("span",uC,Se(e.value),1),x[1]||(x[1]=b("span",{class:"animate-pulse text-primary-500 light:text-primary-600"},"|",-1))],512),b("p",{ref_key:"descriptionRef",ref:h,class:"light:text-black text-white text-lg mb-8 max-w-2xl mx-auto"}," I build modern, responsive web applications with clean code and great user experiences. Passionate about turning ideas into reality through technology. ",512),b("div",{ref_key:"buttonsRef",ref:g,class:"flex flex-col sm:flex-row items-center justify-center gap-4"},[x[2]||(x[2]=b("a",{href:"#projects",class:"bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25 w-full sm:w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] light:drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"}," View My Work ",-1)),b("a",{ref_key:"resumeBtnRef",ref:m,href:"https://docs.google.com/document/d/1pxuH9Ue2NJ18GnzGR44gVKfEIvoe9YvMHj26P7A0RDY/edit?usp=sharing",target:"_blank",class:"resume-btn light:text-primary-800 light:border-primary-800 relative border border-white text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"}," MY RESUME ",512)],512)],512)],512))}},fC=_d(dC,[["__scopeId","data-v-244f29db"]]);/*!
 * ScrollToPlugin 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Hn,Nv,es,br,Is,Ov,wa,Qc,kv=function(){return typeof window<"u"},Bv=function(){return Hn||kv()&&(Hn=window.gsap)&&Hn.registerPlugin&&Hn},zv=function(e){return typeof e=="string"},xg=function(e){return typeof e=="function"},Ql=function(e,t){var i=t==="x"?"Width":"Height",r="scroll"+i,s="client"+i;return e===es||e===br||e===Is?Math.max(br[r],Is[r])-(es["inner"+i]||br[s]||Is[s]):e[r]-e["offset"+i]},ec=function(e,t){var i="scroll"+(t==="x"?"Left":"Top");return e===es&&(e.pageXOffset!=null?i="page"+t.toUpperCase()+"Offset":e=br[i]!=null?br:Is),function(){return e[i]}},hC=function(e,t,i,r){if(xg(e)&&(e=e(t,i,r)),typeof e!="object")return zv(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s={},o;for(o in e)s[o]=o!=="onAutoKill"&&xg(e[o])?e[o](t,i,r):e[o];return s},Vv=function(e,t){if(e=Ov(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var i=e.getBoundingClientRect(),r=!t||t===es||t===Is,s=r?{top:br.clientTop-(es.pageYOffset||br.scrollTop||Is.scrollTop||0),left:br.clientLeft-(es.pageXOffset||br.scrollLeft||Is.scrollLeft||0)}:t.getBoundingClientRect(),o={x:i.left-s.left,y:i.top-s.top};return!r&&t&&(o.x+=ec(t,"x")(),o.y+=ec(t,"y")()),o},vg=function(e,t,i,r,s){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-s:zv(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+r-s:e==="max"?Ql(t,i)-s:Math.min(Ql(t,i),Vv(e,t)[i]-s)},rp=function(){Hn=Bv(),kv()&&Hn&&typeof document<"u"&&document.body&&(es=window,Is=document.body,br=document.documentElement,Ov=Hn.utils.toArray,Hn.config({autoKillThreshold:7}),wa=Hn.config(),Nv=1)},za={version:"3.15.0",name:"scrollTo",rawVars:1,register:function(e){Hn=e,rp()},init:function(e,t,i,r,s){Nv||rp();var o=this,a=Hn.getProperty(e,"scrollSnapType");o.isWin=e===es,o.target=e,o.tween=i,t=hC(t,r,e,s),o.vars=t,o.autoKill=!!("autoKill"in t?t:wa).autoKill,o.getX=ec(e,"x"),o.getY=ec(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),Qc||(Qc=Hn.core.globals().ScrollTrigger),Hn.getProperty(e,"scrollBehavior")==="smooth"&&Hn.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,vg(t.x,e,"x",o.x,t.offsetX||0),r,s),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,vg(t.y,e,"y",o.y,t.offsetY||0),r,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var i=t._pt,r=t.target,s=t.tween,o=t.autoKill,a=t.xPrev,l=t.yPrev,c=t.isWin,u=t.snap,d=t.snapInline,f,h,g,_,p;i;)i.r(e,i.d),i=i._next;f=c||!t.skipX?t.getX():a,h=c||!t.skipY?t.getY():l,g=h-l,_=f-a,p=wa.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(_>p||_<-p)&&f<Ql(r,"x")&&(t.skipX=1),!t.skipY&&(g>p||g<-p)&&h<Ql(r,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(s.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(s,t.vars.onAutoKillParams||[]))),c?es.scrollTo(t.skipX?f:t.x,t.skipY?h:t.y):(t.skipY||(r.scrollTop=t.y),t.skipX||(r.scrollLeft=t.x)),u&&(e===1||e===0)&&(h=r.scrollTop,f=r.scrollLeft,d?r.style.scrollSnapType=d:r.style.removeProperty("scroll-snap-type"),r.scrollTop=h+1,r.scrollLeft=f+1,r.scrollTop=h,r.scrollLeft=f),t.xPrev=t.x,t.yPrev=t.y,Qc&&Qc.update()},kill:function(e){var t=e==="scrollTo",i=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),i>-1&&this._props.splice(i,1),!this._props.length}};za.max=Ql;za.getOffset=Vv;za.buildGetter=ec;za.config=function(n){wa||rp()||(wa=Hn.config());for(var e in n)wa[e]=n[e]};Bv()&&Hn.registerPlugin(za);pt.registerPlugin(mt,za);function uc(n,e={}){const{y:t=60,duration:i=1.2,stagger:r=.12,start:s="top 85%",blur:o=12,scale:a=1.05,ease:l="power3.out",delay:c=0,onComplete:u}=e;pt.set(n,{opacity:0,y:t,scale:a,filter:`blur(${o}px)`,willChange:"transform, opacity, filter"});const f=pt.to(n,{opacity:1,y:0,scale:1,filter:"blur(0px)",duration:i,stagger:r,delay:c,ease:l,scrollTrigger:{trigger:n,start:s,once:!0},onComplete:u}).scrollTrigger;return Array.isArray(f)?f:[f]}function xd(n,e={}){const{x:t=-120,opacity:i=1,start:r="top 90%",end:s="top 40%",stagger:o=0,blur:a=0}=e;pt.set(n,{x:t,opacity:0,filter:a?`blur(${a}px)`:"blur(0px)",willChange:"transform, opacity, filter"});const c=pt.to(n,{x:0,opacity:i,filter:"blur(0px)",ease:"none",stagger:o,scrollTrigger:{trigger:n,start:r,end:s,scrub:!0}}).scrollTrigger;return Array.isArray(c)?c:[c]}function pC(n,e=8){const t=r=>{const s=n.getBoundingClientRect(),o=(r.clientX-s.left)/s.width-.5,a=(r.clientY-s.top)/s.height-.5;pt.to(n,{rotationY:o*e*2,rotationX:-a*e*2,transformPerspective:800,duration:.3,ease:"power2.out"})},i=()=>{pt.to(n,{rotationX:0,rotationY:0,duration:.5,ease:"elastic.out(1, 0.5)"})};return n.addEventListener("mousemove",t),n.addEventListener("mouseleave",i),()=>{n.removeEventListener("mousemove",t),n.removeEventListener("mouseleave",i)}}function mC(n,e){const t=n.querySelectorAll(e);pt.killTweensOf(t),pt.fromTo(t,{y:30,opacity:0,scale:.95},{y:0,opacity:1,scale:1,duration:.5,stagger:.08,ease:"power2.out",clearProps:"all"})}function gC(n={}){const{size:e=40,trailLength:t=200,trailWidth:i=18}=n,r=N=>getComputedStyle(document.documentElement).getPropertyValue(N).trim()||"16 185 129";let s=null;const o=()=>{if(s)return s;const N=r("--color-primary-500").split(" ").map(Number),U=r("--color-primary-400").split(" ").map(Number),L=r("--color-primary-300").split(" ").map(Number),H=r("--color-primary-700").split(" ").map(Number),z=r("--color-primary-900").split(" ").map(Number);return s={particleColors:[[255,255,255],L,N,H],outerGlow:[N,H,z,z],midGlow:[L,N,H],coreGlow:[[255,255,255],U,L,N]},s},a=()=>{s=null};window.addEventListener("colorpalettechange",a);const l=document.createElement("canvas");l.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
  `,document.body.appendChild(l);const c=l.getContext("2d"),u=()=>{l.width=window.innerWidth,l.height=window.innerHeight};u(),window.addEventListener("resize",u);const d={x:window.innerWidth/2,y:window.innerHeight/2},f={x:d.x,y:d.y},h=[];let g=!1,_=null;const p=N=>{d.x=N.clientX,d.y=N.clientY,g=!0,clearTimeout(_),_=setTimeout(()=>{g=!1},200)},m=()=>{g=!1,clearTimeout(_)},y=N=>{N.touches.length>0&&(d.x=N.touches[0].clientX,d.y=N.touches[0].clientY)},E=()=>{g=!0,clearTimeout(_)},x=()=>{clearTimeout(_),_=setTimeout(()=>{g=!1},200)},R=N=>{N.touches.length>0&&(d.x=N.touches[0].clientX,d.y=N.touches[0].clientY,f.x=d.x,f.y=d.y,g=!0)},A=()=>{g=!1},C=()=>{g=!1},v=pt.to({},{duration:.2,repeat:-1,yoyo:!0,ease:"sine.inOut",onUpdate:function(){}}),T=pt.ticker.add(()=>{c.clearRect(0,0,l.width,l.height);const N=d.x-f.x,U=d.y-f.y,L=Math.sqrt(N*N+U*U);if(g){const H=Math.max(1,Math.min(4,Math.floor(L*.15)+1));for(let z=0;z<H;z++){const G=Math.random()*Math.PI*2,X=Math.random()*e*.4;h.push({x:d.x+Math.cos(G)*X,y:d.y+Math.sin(G)*X,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,radius:(Math.random()*.6+.4)*(i*.35),life:1,decay:.004+Math.random()*.004,colorIndex:Math.floor(Math.random()*4),swirl:(Math.random()-.5)*.02,angle:Math.random()*Math.PI*2})}}h.length>t&&h.splice(0,h.length-t);for(let H=h.length-1;H>=0;H--){const z=h[H];if(z.life-=z.decay,z.life<=0){h.splice(H,1);continue}z.angle+=z.swirl,z.x+=z.vx+Math.cos(z.angle)*.15,z.y+=z.vy+Math.sin(z.angle)*.15;const G=z.life*.35,{particleColors:X}=o(),[k,K,j]=X[z.colorIndex],F=c.createRadialGradient(z.x,z.y,0,z.x,z.y,z.radius*2.5);F.addColorStop(0,`rgba(${k}, ${K}, ${j}, ${G})`),F.addColorStop(.5,`rgba(${k}, ${K}, ${j}, ${G*.4})`),F.addColorStop(1,`rgba(${k}, ${K}, ${j}, 0)`),c.beginPath(),c.arc(z.x,z.y,z.radius*2.5,0,Math.PI*2),c.fillStyle=F,c.fill()}if(g){const H=Date.now()/1e3,z=1+Math.sin(H*3)*.08+Math.sin(H*7)*.05,G=Math.sin(H*2.5)*2,X=Math.cos(H*2.1)*2,{outerGlow:k,midGlow:K,coreGlow:j}=o(),F=c.createRadialGradient(d.x+G,d.y+X,0,d.x+G,d.y+X,e*1.5*z);F.addColorStop(0,`rgba(${k[0]}, 0.3)`),F.addColorStop(.4,`rgba(${k[1]}, 0.18)`),F.addColorStop(.7,`rgba(${k[2]}, 0.08)`),F.addColorStop(1,`rgba(${k[3]}, 0)`),c.beginPath(),c.arc(d.x+G,d.y+X,e*1.5*z,0,Math.PI*2),c.fillStyle=F,c.fill();const ae=c.createRadialGradient(d.x+G,d.y+X,0,d.x+G,d.y+X,e*.7*z);ae.addColorStop(0,`rgba(${K[0]}, 0.5)`),ae.addColorStop(.5,`rgba(${K[1]}, 0.3)`),ae.addColorStop(1,`rgba(${K[2]}, 0)`),c.beginPath(),c.arc(d.x+G,d.y+X,e*.7*z,0,Math.PI*2),c.fillStyle=ae,c.fill();const pe=c.createRadialGradient(d.x+G,d.y+X,0,d.x+G,d.y+X,e*.35*z);pe.addColorStop(0,`rgba(${j[0]}, 0.85)`),pe.addColorStop(.3,`rgba(${j[1]}, 0.6)`),pe.addColorStop(.7,`rgba(${j[2]}, 0.25)`),pe.addColorStop(1,`rgba(${j[3]}, 0)`),c.beginPath(),c.arc(d.x+G,d.y+X,e*.35*z,0,Math.PI*2),c.fillStyle=pe,c.fill()}f.x=d.x,f.y=d.y});return window.addEventListener("mousemove",p),window.addEventListener("mouseleave",m),window.addEventListener("mousedown",E),window.addEventListener("mouseup",x),window.addEventListener("touchmove",y,{passive:!0}),window.addEventListener("touchstart",R,{passive:!0}),window.addEventListener("touchend",A,{passive:!0}),window.addEventListener("touchcancel",C,{passive:!0}),()=>{clearTimeout(_),window.removeEventListener("mousemove",p),window.removeEventListener("mouseleave",m),window.removeEventListener("mousedown",E),window.removeEventListener("mouseup",x),window.removeEventListener("touchmove",y),window.removeEventListener("touchstart",R),window.removeEventListener("touchend",A),window.removeEventListener("touchcancel",C),window.removeEventListener("resize",u),window.removeEventListener("colorpalettechange",a),pt.ticker.remove(T),v.kill(),l.remove()}}const _C={id:"about",class:"pt-40 sm:pt-48 md:pt-56 pb-20 relative"},xC={class:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},vC={class:"grid lg:grid-cols-2 gap-12 items-start"},yC={class:"text-3xl mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 inline-block"},bC={class:"text-white light:text-secondary-900 font-semibold mb-2"},SC={class:"text-secondary-400 light:text-secondary-500 text-sm"},MC={class:"flex flex-wrap gap-3"},wC={__name:"AboutSection",setup(n){const e=new Date("2021-09-01"),t=hn(()=>{const u=(new Date-e)/(1e3*60*60*24*365.25);return Math.floor(u)}),i=hn(()=>[{title:`${t.value}+ Years Experience`,description:"Building production-ready web applications",icon:"💼"},{title:"50+ Projects Delivered",description:"From small startups to enterprise solutions",icon:"🚀"},{title:"Clean Code Advocate",description:"Writing maintainable, testable, and scalable code",icon:"✨"},{title:"Continuous Learner",description:"Always exploring new technologies and best practices",icon:"📚"}]),r=Ne(null),s=Ne(null),o=Ne(null);let a=[];return Pn(()=>{a.push(...xd(r.value,{x:-120,start:"top 90%",end:"top 40%"})),a.push(...uc(o.value,{y:60,duration:1.2,stagger:.15,start:"top 80%",blur:14}))}),$n(()=>{a.forEach(l=>l.kill())}),(l,c)=>(he(),ge("section",_C,[c[2]||(c[2]=lo('<svg width="0" height="0" class="absolute" aria-hidden="true"><defs><clipPath id="about-concave-clip" clipPathUnits="objectBoundingBox"><path d="M0 0 Q0.5 0.2 1 0 L1 1 L0 1 Z"></path></clipPath></defs></svg><div class="absolute -top-24 sm:-top-24 md:-top-32 left-0 right-0 bottom-0 bg-dark-800 light:bg-white" style="clip-path:url(#about-concave-clip);"></div><svg class="absolute -top-24 sm:-top-24 md:-top-32 left-0 w-full h-[calc(100%+6rem)] sm:h-[calc(100%+6rem)] md:h-[calc(100%+8rem)] pointer-events-none" viewBox="0 0 1 1" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0 Q0.5 0.2 1 0" fill="none" stroke="rgb(var(--color-primary-500) / 0.4)" stroke-width="0.002" vector-effect="non-scaling-stroke"></path></svg>',3)),b("div",xC,[b("h2",{ref_key:"titleRef",ref:r,class:"section-title"},"About Me",512),b("div",vC,[b("div",{ref_key:"cardsRef",ref:o,class:"grid sm:grid-cols-2 gap-6 order-2 lg:order-1"},[(he(!0),ge(Ke,null,it(i.value,u=>(he(),ge("div",{key:u.title,class:"group bg-secondary-800 border border-secondary-700 rounded-xl p-6 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1 transition-all duration-300 light:bg-white light:border-secondary-200 light:hover:border-primary-500/50 light:hover:shadow-primary-500/10"},[b("div",yC,Se(u.icon),1),b("h3",bC,Se(u.title),1),b("p",SC,Se(u.description),1)]))),128))],512),b("div",{ref_key:"textRef",ref:s,class:"order-1 lg:order-2"},[c[0]||(c[0]=b("p",{class:"text-secondary-300 light:text-secondary-700 text-lg leading-relaxed mb-6"}," I'm a passionate developer with a strong focus on building modern web applications that are both functional and beautiful. My journey in software development started with a curiosity for how things work on the web, and has evolved into a career building products that make a difference. ",-1)),c[1]||(c[1]=b("p",{class:"text-secondary-400 light:text-secondary-500 leading-relaxed mb-8"}," I specialize in the Vue.js ecosystem, but I'm comfortable working across the full stack. I believe in writing clean, maintainable code and creating intuitive user experiences that people love to use. ",-1)),b("div",MC,[(he(),ge(Ke,null,it(["Vue 3","JavaScript","TypeScript","Node.js","Tailwind CSS","REST APIs"],u=>b("span",{key:u,class:"px-4 py-2 bg-secondary-800/50 border border-secondary-700 rounded-full text-sm text-secondary-300 hover:border-primary-500/50 hover:text-primary-400 light:bg-secondary-100 light:border-secondary-200 light:text-secondary-600 light:hover:border-primary-500/50 light:hover:text-primary-600 transition-all duration-300 hover:scale-105 cursor-default"},Se(u),1)),64)),(he(),ge(Ke,null,it(["Git","Docker","Figma"],u=>b("span",{key:u,class:"px-4 py-2 bg-secondary-800/50 border border-secondary-700 rounded-full text-sm text-secondary-300 hover:border-primary-500/50 hover:text-primary-400 light:bg-secondary-100 light:border-secondary-200 light:text-secondary-600 light:hover:border-primary-500/50 light:hover:text-primary-600 transition-all duration-300 hover:scale-105 cursor-default"},Se(u),1)),64))])],512)])])]))}},Af=[{name:"Vue.js",category:"Frontend",icon:"🟢",description:"Progressive JavaScript framework for building user interfaces"},{name:"React",category:"Frontend",icon:"⚛️",description:"Library for building user interfaces with components"},{name:"TypeScript",category:"Language",icon:"🔷",description:"Typed superset of JavaScript for safer code"},{name:"Node.js",category:"Backend",icon:"🟩",description:"JavaScript runtime for building server-side applications"},{name:"Tailwind CSS",category:"Styling",icon:"🎨",description:"Utility-first CSS framework for rapid UI development"},{name:"Vite",category:"Tooling",icon:"⚡",description:"Next-generation frontend build tool"},{name:"MongoDB",category:"Database",icon:"🍃",description:"NoSQL document database for modern applications"},{name:"PostgreSQL",category:"Database",icon:"🐘",description:"Powerful open-source relational database"},{name:"Docker",category:"DevOps",icon:"🐳",description:"Containerization platform for consistent deployments"},{name:"Git",category:"DevOps",icon:"🌿",description:"Distributed version control system"},{name:"Pinia",category:"Frontend",icon:"🍍",description:"State management library for Vue.js"},{name:"REST APIs",category:"Backend",icon:"🔗",description:"Architectural style for building web services"}],EC={id:"tech-stack",class:"py-20 bg-dark-800 light:bg-secondary-100 relative overflow-hidden"},TC={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},AC=["onClick"],CC={class:"flex items-start justify-between mb-4"},RC={class:"text-3xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"},PC={class:"text-xs text-primary-400 bg-primary-500/10 px-2 py-1 rounded-full"},DC={class:"text-white light:text-secondary-900 font-bold text-lg mb-2 group-hover:text-primary-400 transition-colors duration-300"},LC={class:"text-secondary-300 light:text-secondary-500 text-sm"},IC={__name:"TechStack",setup(n){const e=hn(()=>["All",...new Set(Af.map(u=>u.category))]),t=Ne("All"),i=Ne(null),r=Ne(null),s=Ne(null),o=Ne(null);let a=[];const l=hn(()=>t.value==="All"?Af:Af.filter(u=>u.category===t.value)),c=u=>{t.value=u};return Pn(()=>{a.push(...xd(r.value,{x:-120,start:"top 90%",end:"top 40%"})),a.push(...uc(i.value,{y:60,duration:1.2,stagger:.1,start:"top 80%",blur:14}))}),$n(()=>{a.forEach(u=>u.kill())}),Ai(l,async()=>{await rs(),i.value&&mC(i.value,".tech-card")}),(u,d)=>(he(),ge("section",EC,[d[0]||(d[0]=b("div",{class:"absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"},null,-1)),b("div",TC,[b("h2",{ref_key:"titleRef",ref:r,class:"section-title text-4xl font-bold text-white light:text-secondary-900 mb-6"},"Tech Stack",512),b("p",{ref_key:"subtitleRef",ref:s,class:"section-subtitle text-secondary-400 light:text-secondary-500 mb-8"},"Technologies and tools I work with",512),b("div",{ref_key:"filterRef",ref:o,class:"flex flex-wrap gap-3 mb-10"},[(he(!0),ge(Ke,null,it(e.value,f=>(he(),ge("button",{key:f,onClick:h=>c(f),class:at(["px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105",t.value===f?"bg-primary-600 text-white shadow-lg shadow-primary-500/25":"bg-secondary-800 text-secondary-400 hover:text-white border border-secondary-700 light:bg-white light:text-secondary-500 light:hover:text-secondary-900 light:border-secondary-200"])},Se(f),11,AC))),128))],512),b("div",{ref_key:"gridRef",ref:i,class:"grid sm:grid-cols-2 lg:grid-cols-3 gap-6"},[(he(!0),ge(Ke,null,it(l.value,f=>(he(),ge("div",{key:f.name,class:"tech-card group bg-secondary-800 border border-secondary-700 rounded-xl p-6 hover:border-primary-500 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1 transition-all duration-300 light:bg-white light:border-secondary-200 light:hover:border-primary-500 light:hover:shadow-primary-500/10"},[b("div",CC,[b("div",RC,Se(f.icon),1),b("span",PC,Se(f.category),1)]),b("h3",DC,Se(f.name),1),b("p",LC,Se(f.description),1)]))),128))],512)])]))}},Cf=[{id:1,title:"E-Commerce Platform",description:"A full-featured e-commerce platform with product management, cart functionality, and Stripe payment integration.",tech:["Vue 3","Node.js","MongoDB","Stripe"],github:"https://github.com/yourusername/ecommerce-platform",demo:"https://ecommerce-demo.example.com",image:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",features:["Product catalog with search, filtering, and category browsing","Shopping cart with real-time price calculations and quantity management","Secure Stripe payment integration with order confirmation","User authentication with profile and order history","Admin dashboard for product and inventory management"]},{id:2,title:"Task Management App",description:"A collaborative task management application with real-time updates, drag-and-drop boards, and team collaboration features.",tech:["Vue 3","Firebase","Tailwind CSS"],github:"https://github.com/yourusername/task-manager",demo:"https://task-manager-demo.example.com",image:"https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",features:["Drag-and-drop kanban boards for task organization","Real-time collaboration with live updates across team members","Task assignments, due dates, and priority levels","Project workspaces with customizable columns and labels","Activity timeline and notifications for team updates"]},{id:3,title:"Weather Dashboard",description:"A real-time weather dashboard with location-based forecasts, interactive maps, and 7-day weather predictions.",tech:["Vue 3","REST API","Chart.js"],github:"https://github.com/yourusername/weather-dashboard",demo:"https://weather-demo.example.com",image:"https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",features:["Real-time weather data with location-based search","Interactive 7-day forecast with temperature trends","Hourly breakdown with precipitation and wind speed","Visual weather charts using Chart.js for data visualization","Responsive design optimized for mobile and desktop"]},{id:4,title:"Social Media Analytics",description:"An analytics dashboard for social media managers to track engagement, follower growth, and content performance across platforms.",tech:["Vue 3","D3.js","Express","PostgreSQL"],github:"https://github.com/yourusername/social-analytics",demo:"https://analytics-demo.example.com",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",features:["Cross-platform analytics aggregation for major social networks","Interactive data visualizations with D3.js charts","Follower growth tracking with trend analysis","Content performance metrics and engagement scoring","Customizable reporting with export capabilities"]},{id:5,title:"Recipe Finder",description:"A recipe discovery app with ingredient-based search, meal planning, and step-by-step cooking instructions.",tech:["Vue 3","Vuex","Tailwind CSS"],github:"https://github.com/yourusername/recipe-finder",demo:"https://recipe-demo.example.com",image:"https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=400&fit=crop",features:["Ingredient-based recipe search with smart matching","Meal planning calendar with grocery list generation","Step-by-step cooking instructions with timers","Recipe filtering by dietary preferences and cuisine","Save and organize favorite recipes in collections"]},{id:6,title:"Dev Portfolio Template",description:"A modern, responsive developer portfolio template with dark mode, smooth animations, and project showcase features.",tech:["Vue 3","Tailwind CSS","Vite"],github:"https://github.com/yourusername/dev-portfolio",demo:"https://portfolio-demo.example.com",image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",features:["Dark/light mode with smooth theme transitions","GSAP-powered scroll animations and micro-interactions","Interactive project showcase with detail modals","Fully responsive layout across all device sizes","Optimized performance with Vite build tooling"]},{id:7,title:"Dev Portfolio",description:"A modern, responsive developer portfolio template with dark mode, smooth animations, and project showcase features.",tech:["Vue 3","Tailwind CSS","Vite"],github:"https://github.com/yourusername/dev-portfolio",demo:"https://portfolio-demo.example.com",image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",features:["Dark/light mode with smooth theme transitions","GSAP-powered scroll animations and micro-interactions","Interactive project showcase with detail modals","Fully responsive layout across all device sizes","Optimized performance with Vite build tooling"]},{id:8,title:"Dev Template",description:"A modern, responsive developer portfolio template with dark mode, smooth animations, and project showcase features.",tech:["Vue 3","Tailwind CSS","Vite"],github:"https://github.com/yourusername/dev-portfolio",demo:"https://portfolio-demo.example.com",image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",features:["Dark/light mode with smooth theme transitions","GSAP-powered scroll animations and micro-interactions","Interactive project showcase with detail modals","Fully responsive layout across all device sizes","Optimized performance with Vite build tooling"]}],UC={class:"w-full h-full bg-secondary-900 light:bg-secondary-100 overflow-hidden relative flex flex-col"},FC={class:"flex items-center gap-2 px-3 sm:px-4 py-2 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},NC={class:"flex-1 max-w-md mx-auto"},OC={class:"bg-secondary-700/50 light:bg-secondary-100 rounded-md px-2 sm:px-3 py-1 text-[10px] sm:text-xs text-secondary-400 light:text-secondary-500 flex items-center gap-1.5 sm:gap-2 truncate"},kC={class:"truncate"},BC={key:0,class:"flex-1 flex flex-col min-h-0 relative"},zC={class:"flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},VC={class:"flex items-center gap-2 sm:gap-4"},HC={key:0,class:"absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-accent-500 rounded-full text-[8px] sm:text-[9px] text-white flex items-center justify-center font-bold"},GC={class:"flex-1 p-3 sm:p-4 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 overflow-y-auto min-h-0 overscroll-contain"},WC={class:"text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 mb-1 truncate"},XC={class:"flex items-center justify-between"},$C={class:"text-[10px] sm:text-xs font-semibold text-primary-500"},jC=["onClick"],YC={key:0,class:"absolute inset-y-0 right-0 w-64 sm:w-80 bg-secondary-800 light:bg-white border-l border-secondary-700 light:border-secondary-200 shadow-2xl z-20 flex flex-col"},qC={class:"flex items-center justify-between px-4 py-3 border-b border-secondary-700 light:border-secondary-200"},KC={class:"flex-1 overflow-y-auto p-4 space-y-3 overscroll-contain"},ZC={key:0,class:"text-center py-8"},JC={class:"flex-1 min-w-0"},QC={class:"text-[10px] text-white light:text-secondary-900 font-medium truncate"},eR={class:"text-[9px] text-primary-500"},tR={class:"flex items-center gap-1.5"},nR=["onClick"],iR={class:"text-[10px] text-white light:text-secondary-900 w-4 text-center"},rR=["onClick"],sR={class:"p-4 border-t border-secondary-700 light:border-secondary-200"},oR={class:"flex justify-between mb-3"},aR={class:"text-sm font-bold text-white light:text-secondary-900"},lR={key:1,class:"flex-1 flex flex-col min-h-0"},cR={class:"px-3 sm:px-6 py-2.5 bg-secondary-800/50 light:bg-secondary-100/50 border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},uR={class:"flex gap-2"},dR=["value"],fR={class:"flex-1 p-2 sm:p-4 flex gap-2 sm:gap-3 overflow-x-auto min-h-0"},hR={class:"flex-1 min-w-[140px] sm:min-w-0 bg-secondary-800/50 light:bg-secondary-200/50 rounded-lg p-2 sm:p-2.5 flex flex-col"},pR={class:"flex items-center justify-between mb-2 px-1 flex-shrink-0"},mR={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400"},gR={class:"space-y-1.5 sm:space-y-2 overflow-y-auto flex-1 min-h-0 overscroll-contain"},_R=["onClick"],xR={class:"flex items-start gap-1.5"},vR=["onClick"],yR={class:"flex-1 min-w-0"},bR={class:"text-[9px] sm:text-[10px] text-white light:text-secondary-900 leading-tight"},SR={class:"flex-1 min-w-[140px] sm:min-w-0 bg-secondary-800/50 light:bg-secondary-200/50 rounded-lg p-2 sm:p-2.5 flex flex-col"},MR={class:"flex items-center justify-between mb-2 px-1 flex-shrink-0"},wR={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400"},ER={class:"space-y-1.5 sm:space-y-2 overflow-y-auto flex-1 min-h-0 overscroll-contain"},TR=["onClick"],AR={class:"flex items-start gap-1.5"},CR=["onClick"],RR={class:"flex-1 min-w-0"},PR={class:"text-[9px] sm:text-[10px] text-white light:text-secondary-900 leading-tight"},DR={class:"flex-1 min-w-[140px] sm:min-w-0 bg-secondary-800/50 light:bg-secondary-200/50 rounded-lg p-2 sm:p-2.5 flex flex-col"},LR={class:"flex items-center justify-between mb-2 px-1 flex-shrink-0"},IR={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400"},UR={class:"space-y-1.5 sm:space-y-2 overflow-y-auto flex-1 min-h-0 overscroll-contain"},FR=["onClick"],NR={class:"flex items-start gap-1.5"},OR={class:"flex-1 min-w-0"},kR={class:"text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 line-through leading-tight"},BR={key:2,class:"flex-1 flex flex-col min-h-0"},zR={class:"flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},VR={class:"flex items-center gap-2"},HR={class:"flex rounded-lg overflow-hidden border border-secondary-600 light:border-secondary-200"},GR={class:"px-3 sm:px-6 py-2.5 bg-secondary-800/50 light:bg-secondary-100/50 border-b border-secondary-700 light:border-secondary-200 flex-shrink-0 relative"},WR={class:"flex gap-2"},XR={class:"flex-1 relative"},$R={key:0,class:"absolute left-3 sm:left-6 right-3 sm:right-6 top-full mt-1 bg-secondary-800 light:bg-white border border-secondary-700 light:border-secondary-200 rounded-lg shadow-xl z-10 overflow-hidden"},jR=["onClick"],YR={class:"ml-auto text-secondary-500 light:text-secondary-400"},qR={class:"px-3 sm:px-6 py-3 sm:py-4 bg-gradient-to-br from-primary-600/30 to-primary-500/10 flex-shrink-0"},KR={class:"flex items-center justify-between"},ZR={class:"text-2xl sm:text-3xl font-bold text-white light:text-secondary-900"},JR={class:"text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 mt-0.5"},QR={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mt-0.5"},eP={class:"text-4xl sm:text-5xl"},tP={class:"px-3 sm:px-6 py-2.5 flex-shrink-0"},nP={class:"flex gap-1.5 sm:gap-2 overflow-x-auto"},iP={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5"},rP={class:"text-sm sm:text-base mb-0.5"},sP={class:"text-[9px] sm:text-[10px] font-semibold text-white light:text-secondary-900"},oP={class:"flex-1 px-3 sm:px-6 pb-3 sm:pb-4 min-h-0 overflow-y-auto overscroll-contain"},aP={class:"space-y-1 sm:space-y-1.5"},lP={class:"text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 w-8 sm:w-10"},cP={class:"text-sm sm:text-base"},uP={class:"flex-1 mx-2 sm:mx-3 h-1 bg-secondary-700 light:bg-secondary-200 rounded-full overflow-hidden"},dP={class:"text-[9px] sm:text-[10px] text-white light:text-secondary-900 font-semibold w-10 sm:w-12 text-right"},fP={key:3,class:"flex-1 flex flex-col min-h-0"},hP={class:"flex-1 flex overflow-hidden min-h-0"},pP={class:"w-10 sm:w-14 bg-secondary-800 light:bg-white border-r border-secondary-700 light:border-secondary-200 flex flex-col items-center py-2 sm:py-3 gap-2 sm:gap-3 flex-shrink-0"},mP={class:"flex-1 p-2 sm:p-4 overflow-y-auto min-h-0 overscroll-contain"},gP={class:"flex gap-1.5 sm:gap-2 mb-3 flex-wrap"},_P=["onClick"],xP={class:"grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-3"},vP={class:"bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-3 border border-secondary-700 light:border-secondary-200"},yP={class:"text-sm sm:text-lg font-bold text-white light:text-secondary-900"},bP={class:"bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-3 border border-secondary-700 light:border-secondary-200"},SP={class:"text-sm sm:text-lg font-bold text-white light:text-secondary-900"},MP={class:"bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-3 border border-secondary-700 light:border-secondary-200"},wP={class:"text-sm sm:text-lg font-bold text-white light:text-secondary-900"},EP={class:"bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-3 border border-secondary-700 light:border-secondary-200"},TP={class:"text-sm sm:text-lg font-bold text-white light:text-secondary-900"},AP={class:"bg-secondary-800 light:bg-white rounded-lg p-2.5 sm:p-3 border border-secondary-700 light:border-secondary-200 mb-3"},CP={class:"h-20 sm:h-24 flex items-end gap-1"},RP=["onMouseenter","onMouseleave"],PP={class:"text-[6px] sm:text-[7px] text-secondary-500 light:text-secondary-400"},DP={class:"grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3"},LP={class:"bg-secondary-800 light:bg-white rounded-lg p-2.5 sm:p-3 border border-secondary-700 light:border-secondary-200"},IP={class:"space-y-1.5 sm:space-y-2"},UP=["onClick"],FP={class:"text-[8px] sm:text-[9px] text-secondary-400 light:text-secondary-500 flex-1"},NP={class:"text-[8px] sm:text-[9px] font-semibold text-white light:text-secondary-900"},OP={class:"bg-secondary-800 light:bg-white rounded-lg p-2.5 sm:p-3 border border-secondary-700 light:border-secondary-200"},kP={class:"space-y-1.5 sm:space-y-2"},BP={class:"text-[8px] sm:text-[9px] text-primary-500"},zP={key:4,class:"flex-1 flex flex-col min-h-0"},VP={class:"px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},HP={class:"flex gap-1.5 sm:gap-2"},GP={class:"flex-1 relative"},WP={class:"px-3 sm:px-6 py-2 flex gap-1.5 sm:gap-2 overflow-x-auto flex-shrink-0"},XP=["onClick"],$P={class:"flex-1 px-3 sm:px-6 pb-3 sm:pb-4 grid grid-cols-2 gap-2 sm:gap-3 overflow-y-auto min-h-0 overscroll-contain"},jP=["onClick"],YP={class:"absolute top-1.5 right-1.5 bg-accent-500 text-white text-[7px] sm:text-[8px] px-1.5 py-0.5 rounded-full font-medium"},qP={class:"p-2 sm:p-2.5"},KP={class:"text-[9px] sm:text-[10px] text-white light:text-secondary-900 font-medium mb-1 truncate"},ZP={class:"flex items-center gap-1"},JP={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400"},QP={class:"ml-auto text-[7px] sm:text-[8px] text-secondary-500 light:text-secondary-400"},eD={key:0,class:"col-span-2 text-center py-8"},tD={class:"flex items-start justify-between mb-3"},nD={class:"text-3xl"},iD={class:"text-sm font-bold text-white light:text-secondary-900 mb-1"},rD={class:"flex items-center gap-2 mb-3"},sD={class:"text-yellow-500 text-xs"},oD={class:"text-[9px] text-secondary-500 light:text-secondary-400"},aD={class:"text-[9px] text-secondary-500 light:text-secondary-400"},lD={class:"space-y-2 mb-4"},cD={key:5,class:"flex-1 flex flex-col min-h-0"},uD={class:"flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},dD={class:"flex gap-2 sm:gap-4 text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500"},fD=["onClick"],hD={class:"flex-1 overflow-y-auto min-h-0 overscroll-contain"},pD={key:0,class:"h-full flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-secondary-800 to-secondary-900 light:from-white light:to-secondary-100"},mD={class:"text-center"},gD={class:"flex gap-2 justify-center"},_D={key:1,class:"p-4 sm:p-6"},xD={class:"space-y-2 mb-4"},vD={class:"grid grid-cols-2 gap-2"},yD={class:"text-[9px] sm:text-[10px] text-primary-500 font-medium"},bD={class:"mt-1.5 h-1 bg-secondary-700 light:bg-secondary-200 rounded-full overflow-hidden"},SD={key:2,class:"p-4 sm:p-6"},MD={class:"grid grid-cols-2 gap-2 sm:gap-3"},wD={key:3,class:"p-4 sm:p-6"},ED={class:"px-3 sm:px-6 py-2 sm:py-3 bg-secondary-800 light:bg-white border-t border-secondary-700 light:border-secondary-200 flex-shrink-0"},TD={class:"flex justify-center gap-1.5 sm:gap-3 overflow-x-auto"},AD={key:6,class:"flex-1 flex flex-col min-h-0"},CD={class:"flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},RD={class:"text-xs sm:text-sm font-bold text-primary-500"},PD={class:"flex gap-2 sm:gap-3 text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500"},DD=["onClick"],LD={class:"flex-1 overflow-y-auto min-h-0 overscroll-contain"},ID={key:0,class:"h-full flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-primary-600/20 to-primary-500/5"},UD={class:"text-center max-w-sm"},FD={class:"text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-1.5"},ND={class:"text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 mb-3 sm:mb-4 leading-relaxed"},OD={class:"flex gap-1.5 sm:gap-2 justify-center flex-wrap"},kD={key:1,class:"p-4 sm:p-6"},BD={class:"space-y-2"},zD={class:"text-[9px] sm:text-[10px] text-secondary-300 light:text-secondary-600 leading-relaxed"},VD={key:2,class:"p-4 sm:p-6"},HD={class:"space-y-2"},GD={__name:"ProjectPreview",props:{project:{type:Object,required:!0}},setup(n){const e=n,t=hn(()=>{const le=e.project.title.toLowerCase();return le.includes("e-commerce")?"ecommerce":le.includes("task")?"task":le.includes("weather")?"weather":le.includes("social")||le.includes("analytics")?"analytics":le.includes("recipe")?"recipe":le.includes("portfolio")||le.includes("template")?"portfolio":"generic"}),i=[{id:1,name:"Wireless Headphones",price:89,emoji:"🎧",color:"from-purple-500 to-indigo-500"},{id:2,name:"Smart Watch",price:199,emoji:"⌚",color:"from-blue-500 to-cyan-500"},{id:3,name:"Laptop Stand",price:45,emoji:"💻",color:"from-emerald-500 to-teal-500"},{id:4,name:"Mechanical Keyboard",price:129,emoji:"⌨️",color:"from-amber-500 to-orange-500"},{id:5,name:"USB-C Hub",price:59,emoji:"🔌",color:"from-rose-500 to-pink-500"},{id:6,name:"Desk Lamp",price:35,emoji:"💡",color:"from-yellow-500 to-amber-500"}],r=ua([]),s=Ne(!1),o=hn(()=>r.reduce((le,M)=>le+M.qty,0)),a=hn(()=>r.reduce((le,M)=>le+M.price*M.qty,0)),l=le=>{const M=r.find(w=>w.id===le.id);M?M.qty++:r.push({...le,qty:1})},c=le=>{const M=r.findIndex(w=>w.id===le);M!==-1&&r.splice(M,1)},u=(le,M)=>{const w=r.find(V=>V.id===le);w&&(w.qty+=M,w.qty<=0&&c(le))},d=ua({todo:[{id:1,title:"Design landing page",tag:"Design",tagColor:"bg-purple-500/20 text-purple-400",done:!1},{id:2,title:"Set up database schema",tag:"Backend",tagColor:"bg-blue-500/20 text-blue-400",done:!1},{id:3,title:"Write API endpoints",tag:"Backend",tagColor:"bg-blue-500/20 text-blue-400",done:!1}],progress:[{id:4,title:"Build auth system",tag:"Frontend",tagColor:"bg-emerald-500/20 text-emerald-400",done:!1},{id:5,title:"Implement dark mode",tag:"UI",tagColor:"bg-amber-500/20 text-amber-400",done:!1}],done:[{id:6,title:"Project setup",tag:"Setup",tagColor:"bg-gray-500/20 text-gray-400",done:!0},{id:7,title:"Create wireframes",tag:"Design",tagColor:"bg-purple-500/20 text-purple-400",done:!0},{id:8,title:"Configure CI/CD",tag:"DevOps",tagColor:"bg-rose-500/20 text-rose-400",done:!0}]}),f=Ne(""),h=Ne("General"),g=["General","Design","Frontend","Backend","UI","DevOps"],_=()=>{f.value.trim()&&(d.todo.push({id:Date.now(),title:f.value.trim(),tag:h.value,tagColor:"bg-primary-500/20 text-primary-400",done:!1}),f.value="")},p=(le,M)=>{const w=d[le].find(V=>V.id===M);if(w)if(w.done=!w.done,w.done){const V=d[le].findIndex(Y=>Y.id===M),[ee]=d[le].splice(V,1);d.done.push(ee)}else{const V=d.done.findIndex(Y=>Y.id===M),[ee]=d.done.splice(V,1);d.todo.push(ee)}},m=(le,M,w)=>{const V=d[le].findIndex(Y=>Y.id===w);if(V===-1)return;const[ee]=d[le].splice(V,1);d[M].push(ee)},y={Manila:{temp:28,condition:"Partly Cloudy",emoji:"⛅",humidity:72,wind:12},Tokyo:{temp:22,condition:"Clear Sky",emoji:"☀️",humidity:55,wind:8},"New York":{temp:18,condition:"Rainy",emoji:"🌧️",humidity:85,wind:20},London:{temp:15,condition:"Cloudy",emoji:"☁️",humidity:78,wind:15},Sydney:{temp:25,condition:"Sunny",emoji:"🌤️",humidity:60,wind:10}},E=Ne("Manila"),x=Ne(""),R=Ne("C"),A=hn(()=>y[E.value]||y.Manila),C=hn(()=>{const le=A.value.temp;return R.value==="C"?le:Math.round(le*9/5+32)}),v=hn(()=>{const le=A.value.temp;return Array.from({length:6},(M,w)=>({time:`${(w+1)*3}:00`,temp:le+[0,2,3,1,-1,-2][w],emoji:["⛅","☀️","☀️","⛅","☁️","🌙"][w]}))}),T=hn(()=>{const le=A.value.temp;return["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((w,V)=>({day:w,high:le+[2,4,3,5,1,0,-1][V],low:le-[4,3,5,2,6,5,7][V],emoji:["⛅","☀️","🌧️","⛅","☀️","☁️","🌧️"][V]}))}),N=hn(()=>{const le=x.value.toLowerCase();return le?Object.keys(y).filter(M=>M.toLowerCase().includes(le)):Object.keys(y)}),U=le=>{E.value=le,x.value=""},L=ua({followers:12800,engagement:4.2,reach:45200,posts:128}),H=Ne("All"),z=["All","Instagram","Twitter","LinkedIn"],G={All:{followers:12800,engagement:4.2,reach:45200,posts:128},Instagram:{followers:8500,engagement:5.1,reach:28e3,posts:64},Twitter:{followers:3200,engagement:3.4,reach:12e3,posts:42},LinkedIn:{followers:1100,engagement:2.8,reach:5200,posts:22}},X=hn(()=>{const M=(G[H.value]||G.All).followers/12800;return[30,45,38,60,52,75,68,90,82,100,88,95].map((w,V)=>({value:Math.round(w*M),label:["J","F","M","A","M","J","J","A","S","O","N","D"][V]}))}),k=le=>{H.value=le;const M=G[le]||G.All;L.followers=M.followers,L.engagement=M.engagement,L.reach=M.reach,L.posts=M.posts},K=[{id:1,name:"Creamy Garlic Pasta",time:25,rating:4.5,emoji:"🍝",category:"Dinner",color:"from-amber-500/40 to-orange-500/40"},{id:2,name:"Avocado Toast",time:10,rating:4.2,emoji:"🥑",category:"Breakfast",color:"from-emerald-500/40 to-green-500/40"},{id:3,name:"Chocolate Cake",time:45,rating:4.8,emoji:"🍰",category:"Dessert",color:"from-rose-500/40 to-pink-500/40"},{id:4,name:"Chicken Stir Fry",time:20,rating:3.9,emoji:"🍗",category:"Lunch",color:"from-red-500/40 to-orange-500/40"},{id:5,name:"Berry Smoothie",time:5,rating:4.6,emoji:"🥤",category:"Breakfast",color:"from-purple-500/40 to-indigo-500/40"},{id:6,name:"Beef Tacos",time:30,rating:4.4,emoji:"🌮",category:"Dinner",color:"from-yellow-500/40 to-amber-500/40"}],j=Ne("All"),F=Ne(""),ae=Ne(null),pe=["All","Breakfast","Lunch","Dinner","Dessert"],me=hn(()=>K.filter(le=>{const M=j.value==="All"||le.category===j.value,w=le.name.toLowerCase().includes(F.value.toLowerCase());return M&&w})),ve=le=>{ae.value=le},Te=Ne("home"),J=["home","about","projects","contact"],ue=le=>{Te.value=le},oe=Ne("home"),Re=["home","features","about"],Ae=le=>{oe.value=le};return(le,M)=>(he(),ge("div",UC,[b("div",FC,[M[16]||(M[16]=b("div",{class:"flex gap-1.5"},[b("span",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent-500"}),b("span",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"}),b("span",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary-500"})],-1)),b("div",NC,[b("div",OC,[M[15]||(M[15]=b("svg",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 8a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0115.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"})],-1)),b("span",kC,Se(n.project.demo),1)])])]),t.value==="ecommerce"?(he(),ge("div",BC,[b("div",zC,[M[19]||(M[19]=b("div",{class:"text-primary-500 font-bold text-xs sm:text-sm"},"🛍️ ShopHub",-1)),b("div",VC,[M[18]||(M[18]=b("div",{class:"hidden sm:flex gap-3 text-[10px] text-secondary-400 light:text-secondary-500"},[b("span",{class:"cursor-pointer hover:text-primary-500 transition-colors"},"Home"),b("span",{class:"cursor-pointer hover:text-primary-500 transition-colors"},"Products"),b("span",{class:"cursor-pointer hover:text-primary-500 transition-colors"},"About")],-1)),b("button",{onClick:M[0]||(M[0]=w=>s.value=!s.value),class:"relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-500/20 flex items-center justify-center hover:bg-primary-500/30 transition-colors cursor-pointer","aria-label":"Open cart"},[M[17]||(M[17]=b("svg",{class:"w-4 h-4 sm:w-5 sm:h-5 text-primary-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})],-1)),o.value>0?(he(),ge("span",HC,Se(o.value),1)):Bn("",!0)])])]),M[25]||(M[25]=lo('<div class="px-3 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-primary-500 flex-shrink-0" data-v-b832dd55><div class="text-white" data-v-b832dd55><div class="text-[9px] sm:text-[10px] uppercase tracking-wider opacity-80 mb-1" data-v-b832dd55>Summer Sale</div><div class="text-xs sm:text-sm font-bold mb-1.5 sm:mb-2" data-v-b832dd55>Up to 50% Off Everything</div><div class="inline-block bg-white text-primary-600 text-[9px] sm:text-[10px] font-semibold px-2.5 sm:px-3 py-1 rounded-full cursor-pointer hover:bg-primary-50 transition-colors" data-v-b832dd55>Shop Now →</div></div></div>',1)),b("div",GC,[(he(),ge(Ke,null,it(i,w=>b("div",{key:w.id,class:"bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-2.5 border border-secondary-700 light:border-secondary-200 hover:border-primary-500/50 transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-primary-500/10"},[b("div",{class:at(["aspect-square rounded-md bg-gradient-to-br mb-2 flex items-center justify-center text-2xl sm:text-3xl",w.color])},[b("span",null,Se(w.emoji),1)],2),b("div",WC,Se(w.name),1),b("div",XC,[b("div",$C,"$"+Se(w.price),1),b("button",{onClick:po(V=>l(w),["stop"]),class:"w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary-500 hover:bg-primary-400 flex items-center justify-center transition-colors cursor-pointer","aria-label":"Add to cart"},[...M[20]||(M[20]=[b("svg",{class:"w-3 h-3 sm:w-3.5 sm:h-3.5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"})],-1)])],8,jC)])])),64))]),At(Vf,{name:"slide"},{default:Mu(()=>[s.value?(he(),ge("div",YC,[b("div",qC,[M[22]||(M[22]=b("span",{class:"text-xs font-semibold text-white light:text-secondary-900"},"Shopping Cart",-1)),b("button",{onClick:M[1]||(M[1]=w=>s.value=!1),class:"text-secondary-400 hover:text-white light:hover:text-secondary-900 transition-colors cursor-pointer","aria-label":"Close cart"},[...M[21]||(M[21]=[b("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),b("div",KC,[r.length===0?(he(),ge("div",ZC,[...M[23]||(M[23]=[b("div",{class:"text-3xl mb-2"},"🛒",-1),b("p",{class:"text-xs text-secondary-400 light:text-secondary-500"},"Your cart is empty",-1),b("p",{class:"text-[10px] text-secondary-500 light:text-secondary-400 mt-1"},"Add some products!",-1)])])):Bn("",!0),(he(!0),ge(Ke,null,it(r,w=>(he(),ge("div",{key:w.id,class:"flex items-center gap-3 bg-secondary-700/50 light:bg-secondary-100 rounded-lg p-2.5"},[b("div",{class:at(["w-8 h-8 rounded-md bg-gradient-to-br flex items-center justify-center text-sm flex-shrink-0",w.color])},Se(w.emoji),3),b("div",JC,[b("div",QC,Se(w.name),1),b("div",eR,"$"+Se(w.price),1)]),b("div",tR,[b("button",{onClick:V=>u(w.id,-1),class:"w-4 h-4 rounded bg-secondary-600 light:bg-secondary-200 text-white light:text-secondary-900 text-[9px] flex items-center justify-center hover:bg-accent-500 transition-colors cursor-pointer"},"−",8,nR),b("span",iR,Se(w.qty),1),b("button",{onClick:V=>u(w.id,1),class:"w-4 h-4 rounded bg-secondary-600 light:bg-secondary-200 text-white light:text-secondary-900 text-[9px] flex items-center justify-center hover:bg-primary-500 transition-colors cursor-pointer"},"+",8,rR)])]))),128))]),b("div",sR,[b("div",oR,[M[24]||(M[24]=b("span",{class:"text-[10px] text-secondary-400 light:text-secondary-500"},"Total",-1)),b("span",aR,"$"+Se(a.value.toFixed(2)),1)]),b("button",{onClick:M[2]||(M[2]=w=>s.value=!1),class:"w-full py-2 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-[10px] font-semibold transition-colors cursor-pointer"}," Checkout ")])])):Bn("",!0)]),_:1})])):t.value==="task"?(he(),ge("div",lR,[M[30]||(M[30]=lo('<div class="flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0" data-v-b832dd55><div class="flex items-center gap-2" data-v-b832dd55><div class="w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary-500 flex items-center justify-center" data-v-b832dd55><svg class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b832dd55><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" data-v-b832dd55></path></svg></div><span class="text-xs sm:text-sm font-semibold text-white light:text-secondary-900" data-v-b832dd55>TaskFlow</span></div><div class="flex items-center gap-1.5 sm:gap-2" data-v-b832dd55><div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary-500/20 flex items-center justify-center text-[9px] sm:text-[10px] text-primary-500 font-bold" data-v-b832dd55>+</div><div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent-500/20 flex items-center justify-center text-[9px] sm:text-[10px] text-accent-500 font-bold" data-v-b832dd55>A</div><div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-[9px] sm:text-[10px] text-yellow-500 font-bold" data-v-b832dd55>B</div></div></div>',1)),b("div",cR,[b("div",uR,[pc(b("input",{"onUpdate:modelValue":M[3]||(M[3]=w=>f.value=w),onKeyup:pb(_,["enter"]),type:"text",placeholder:"Add a new task...",class:"flex-1 bg-secondary-700/50 light:bg-white border border-secondary-600 light:border-secondary-200 rounded-lg px-3 py-1.5 text-[10px] sm:text-xs text-white light:text-secondary-900 placeholder-secondary-500 light:placeholder-secondary-400 focus:outline-none focus:border-primary-500 transition-colors"},null,544),[[Dd,f.value]]),pc(b("select",{"onUpdate:modelValue":M[4]||(M[4]=w=>h.value=w),class:"bg-secondary-700/50 light:bg-white border border-secondary-600 light:border-secondary-200 rounded-lg px-2 py-1.5 text-[9px] sm:text-[10px] text-secondary-300 light:text-secondary-600 focus:outline-none focus:border-primary-500 transition-colors cursor-pointer"},[(he(),ge(Ke,null,it(g,w=>b("option",{key:w,value:w},Se(w),9,dR)),64))],512),[[ub,h.value]]),b("button",{onClick:_,class:"px-3 py-1.5 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-[10px] sm:text-xs font-semibold transition-colors cursor-pointer flex-shrink-0"}," Add ")])]),b("div",fR,[b("div",hR,[b("div",pR,[M[26]||(M[26]=b("span",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500"},"TO DO",-1)),b("span",mR,Se(d.todo.length),1)]),b("div",gR,[(he(!0),ge(Ke,null,it(d.todo,w=>(he(),ge("div",{key:w.id,class:"bg-secondary-800 light:bg-white rounded-md p-2 sm:p-2.5 border border-secondary-700 light:border-secondary-200 hover:border-primary-500/40 transition-colors cursor-pointer group",onClick:V=>m("todo","progress",w.id)},[b("div",xR,[b("button",{onClick:po(V=>p("todo",w.id),["stop"]),class:"w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-secondary-500 light:border-secondary-300 flex-shrink-0 mt-0.5 hover:border-primary-500 transition-colors cursor-pointer","aria-label":"Mark as done"},null,8,vR),b("div",yR,[b("div",bR,Se(w.title),1),b("span",{class:at(["inline-block mt-1 px-1.5 py-0.5 rounded-full text-[7px] sm:text-[8px] font-medium",w.tagColor])},Se(w.tag),3)])])],8,_R))),128))])]),b("div",SR,[b("div",MR,[M[27]||(M[27]=b("span",{class:"text-[9px] sm:text-[10px] font-semibold text-primary-500"},"IN PROGRESS",-1)),b("span",wR,Se(d.progress.length),1)]),b("div",ER,[(he(!0),ge(Ke,null,it(d.progress,w=>(he(),ge("div",{key:w.id,class:"bg-secondary-800 light:bg-white rounded-md p-2 sm:p-2.5 border border-primary-500/30 hover:border-primary-500/60 transition-colors cursor-pointer group",onClick:V=>m("progress","done",w.id)},[b("div",AR,[b("button",{onClick:po(V=>p("progress",w.id),["stop"]),class:"w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-primary-500 flex-shrink-0 mt-0.5 hover:bg-primary-500/20 transition-colors cursor-pointer","aria-label":"Mark as done"},null,8,CR),b("div",RR,[b("div",PR,Se(w.title),1),b("span",{class:at(["inline-block mt-1 px-1.5 py-0.5 rounded-full text-[7px] sm:text-[8px] font-medium",w.tagColor])},Se(w.tag),3)])])],8,TR))),128))])]),b("div",DR,[b("div",LR,[M[28]||(M[28]=b("span",{class:"text-[9px] sm:text-[10px] font-semibold text-primary-500"},"DONE",-1)),b("span",IR,Se(d.done.length),1)]),b("div",UR,[(he(!0),ge(Ke,null,it(d.done,w=>(he(),ge("div",{key:w.id,class:"bg-secondary-800 light:bg-white rounded-md p-2 sm:p-2.5 border border-secondary-700 light:border-secondary-200 opacity-70 hover:opacity-100 transition-opacity cursor-pointer",onClick:V=>p("done",w.id)},[b("div",NR,[M[29]||(M[29]=b("div",{class:"w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 mt-0.5"},[b("svg",{class:"w-2 h-2 sm:w-2.5 sm:h-2.5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M5 13l4 4L19 7"})])],-1)),b("div",OR,[b("div",kR,Se(w.title),1),b("span",{class:at(["inline-block mt-1 px-1.5 py-0.5 rounded-full text-[7px] sm:text-[8px] font-medium",w.tagColor])},Se(w.tag),3)])])],8,FR))),128))])])])])):t.value==="weather"?(he(),ge("div",BR,[b("div",zR,[M[31]||(M[31]=b("div",{class:"flex items-center gap-2"},[b("span",{class:"text-base sm:text-lg"},"🌤️"),b("span",{class:"text-xs sm:text-sm font-semibold text-white light:text-secondary-900"},"SkyCast")],-1)),b("div",VR,[b("div",HR,[b("button",{onClick:M[5]||(M[5]=w=>R.value="C"),class:at(["px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold transition-colors cursor-pointer",R.value==="C"?"bg-primary-600 text-white":"text-secondary-400 light:text-secondary-500 hover:text-white light:hover:text-secondary-900"])},"°C",2),b("button",{onClick:M[6]||(M[6]=w=>R.value="F"),class:at(["px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold transition-colors cursor-pointer",R.value==="F"?"bg-primary-600 text-white":"text-secondary-400 light:text-secondary-500 hover:text-white light:hover:text-secondary-900"])},"°F",2)])])]),b("div",GR,[b("div",WR,[b("div",XR,[M[32]||(M[32]=b("svg",{class:"w-3 h-3 sm:w-3.5 sm:h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-secondary-500 light:text-secondary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1)),pc(b("input",{"onUpdate:modelValue":M[7]||(M[7]=w=>x.value=w),type:"text",placeholder:"Search city...",class:"w-full bg-secondary-700/50 light:bg-white border border-secondary-600 light:border-secondary-200 rounded-lg pl-7 pr-3 py-1.5 text-[10px] sm:text-xs text-white light:text-secondary-900 placeholder-secondary-500 light:placeholder-secondary-400 focus:outline-none focus:border-primary-500 transition-colors"},null,512),[[Dd,x.value]])])]),x.value?(he(),ge("div",$R,[(he(!0),ge(Ke,null,it(N.value,w=>(he(),ge("button",{key:w,onClick:V=>U(w),class:"w-full px-3 py-2 text-left text-[10px] sm:text-xs text-secondary-300 light:text-secondary-600 hover:bg-primary-500/10 hover:text-primary-500 transition-colors cursor-pointer flex items-center gap-2"},[b("span",null,Se(y[w].emoji),1),b("span",null,Se(w),1),b("span",YR,Se(y[w].temp)+"°",1)],8,jR))),128))])):Bn("",!0)]),b("div",qR,[b("div",KR,[b("div",null,[b("div",ZR,Se(C.value)+"°"+Se(R.value),1),b("div",JR,Se(A.value.condition),1),b("div",QR,Se(E.value)+" • 💧 "+Se(A.value.humidity)+"% • 🌬️ "+Se(A.value.wind)+" km/h",1)]),b("div",eP,Se(A.value.emoji),1)])]),b("div",tP,[M[33]||(M[33]=b("div",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-1.5 uppercase tracking-wider"},"Hourly Forecast",-1)),b("div",nP,[(he(!0),ge(Ke,null,it(v.value,(w,V)=>(he(),ge("div",{key:V,class:"flex-1 min-w-[50px] sm:min-w-0 bg-secondary-800 light:bg-white rounded-lg p-1.5 sm:p-2 text-center border border-secondary-700 light:border-secondary-200 hover:border-primary-500/40 transition-colors cursor-pointer"},[b("div",iP,Se(w.time),1),b("div",rP,Se(w.emoji),1),b("div",sP,Se(w.temp)+"°",1)]))),128))])]),b("div",oP,[M[34]||(M[34]=b("div",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-1.5 uppercase tracking-wider"},"7-Day Forecast",-1)),b("div",aP,[(he(!0),ge(Ke,null,it(T.value,(w,V)=>(he(),ge("div",{key:V,class:"flex items-center justify-between bg-secondary-800 light:bg-white rounded-md px-2.5 sm:px-3 py-1.5 sm:py-2 border border-secondary-700 light:border-secondary-200 hover:border-primary-500/40 transition-colors cursor-pointer"},[b("span",lP,Se(w.day),1),b("span",cP,Se(w.emoji),1),b("div",uP,[b("div",{class:"h-full bg-gradient-to-r from-yellow-500 to-primary-500 rounded-full",style:Tn({width:(w.high-10)*5+"%"})},null,4)]),b("span",dP,Se(w.high)+"° / "+Se(w.low)+"°",1)]))),128))])])])):t.value==="analytics"?(he(),ge("div",fP,[b("div",hP,[b("div",pP,[M[36]||(M[36]=b("div",{class:"w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-primary-500 flex items-center justify-center"},[b("svg",{class:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})])],-1)),(he(),ge(Ke,null,it(4,w=>b("div",{key:w,class:"w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-secondary-700/50 light:bg-secondary-200 flex items-center justify-center cursor-pointer hover:bg-primary-500/20 transition-colors"},[...M[35]||(M[35]=[b("div",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm bg-secondary-500 light:bg-secondary-400"},null,-1)])])),64))]),b("div",mP,[b("div",gP,[(he(),ge(Ke,null,it(z,w=>b("button",{key:w,onClick:V=>k(w),class:at(["px-2 sm:px-3 py-1 rounded-full text-[8px] sm:text-[9px] font-medium transition-all cursor-pointer",H.value===w?"bg-primary-600 text-white shadow-md shadow-primary-500/25":"bg-secondary-800 light:bg-white text-secondary-400 light:text-secondary-500 border border-secondary-700 light:border-secondary-200 hover:text-white light:hover:text-secondary-900"])},Se(w),11,_P)),64))]),b("div",xP,[b("div",vP,[M[37]||(M[37]=b("div",{class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5"},"Followers",-1)),b("div",yP,Se(L.followers.toLocaleString()),1),M[38]||(M[38]=b("div",{class:"text-[8px] sm:text-[9px] text-primary-500 mt-0.5"},"▲ 12%",-1))]),b("div",bP,[M[39]||(M[39]=b("div",{class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5"},"Engagement",-1)),b("div",SP,Se(L.engagement)+"%",1),M[40]||(M[40]=b("div",{class:"text-[8px] sm:text-[9px] text-primary-500 mt-0.5"},"▲ 0.8%",-1))]),b("div",MP,[M[41]||(M[41]=b("div",{class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5"},"Reach",-1)),b("div",wP,Se(L.reach.toLocaleString()),1),M[42]||(M[42]=b("div",{class:"text-[8px] sm:text-[9px] text-primary-500 mt-0.5"},"▲ 23%",-1))]),b("div",EP,[M[43]||(M[43]=b("div",{class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5"},"Posts",-1)),b("div",TP,Se(L.posts),1),M[44]||(M[44]=b("div",{class:"text-[8px] sm:text-[9px] text-primary-500 mt-0.5"},"▲ 5%",-1))])]),b("div",AP,[M[45]||(M[45]=b("div",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-2"},"Engagement Over Time",-1)),b("div",CP,[(he(!0),ge(Ke,null,it(X.value,(w,V)=>(he(),ge("div",{key:V,class:"flex-1 flex flex-col items-center gap-1 group cursor-pointer",onMouseenter:ee=>w.hover=!0,onMouseleave:ee=>w.hover=!1},[b("div",{class:at(["w-full rounded-t bg-gradient-to-t from-primary-600 to-primary-400 transition-all duration-300 group-hover:from-primary-500 group-hover:to-primary-300",{"opacity-40":V%3===0}]),style:Tn({height:w.value+"%"})},null,6),b("span",PP,Se(w.label),1)],40,RP))),128))])]),b("div",DP,[b("div",LP,[M[46]||(M[46]=b("div",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-2"},"Platforms",-1)),b("div",IP,[(he(),ge(Ke,null,it(["Instagram","Twitter","LinkedIn"],(w,V)=>b("div",{key:w,class:"flex items-center gap-2 cursor-pointer hover:bg-secondary-700/30 light:hover:bg-secondary-100 rounded-md px-1.5 py-1 transition-colors",onClick:ee=>k(w)},[b("div",{class:at(["w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full",["bg-primary-500","bg-accent-500","bg-yellow-500"][V]])},null,2),b("span",FP,Se(w),1),b("span",NP,Se([45,30,25][V])+"%",1)],8,UP)),64))])]),b("div",OP,[M[48]||(M[48]=b("div",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-2"},"Top Posts",-1)),b("div",kP,[(he(),ge(Ke,null,it(3,w=>b("div",{key:w,class:"flex items-center gap-2 cursor-pointer hover:bg-secondary-700/30 light:hover:bg-secondary-100 rounded-md px-1.5 py-1 transition-colors"},[b("div",{class:at(["w-5 h-5 sm:w-6 sm:h-6 rounded bg-gradient-to-br flex items-center justify-center text-[10px] sm:text-xs flex-shrink-0",["from-primary-500/30 to-primary-500/10","from-accent-500/30 to-accent-500/10","from-yellow-500/30 to-yellow-500/10"][w-1]])},Se(["📸","🐦","💼"][w-1]),3),M[47]||(M[47]=b("div",{class:"flex-1 min-w-0"},[b("div",{class:"h-1.5 bg-secondary-700 light:bg-secondary-200 rounded mb-1 w-4/5"}),b("div",{class:"h-1 bg-secondary-700 light:bg-secondary-200 rounded w-1/2"})],-1)),b("span",BP,Se([1200,890,650][w-1]),1)])),64))])])])])])])):t.value==="recipe"?(he(),ge("div",zP,[b("div",VP,[M[51]||(M[51]=lo('<div class="flex items-center justify-between mb-2" data-v-b832dd55><div class="text-xs sm:text-sm font-bold text-primary-500" data-v-b832dd55>🍳 FlavorFind</div><div class="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary-500/20 flex items-center justify-center cursor-pointer hover:bg-primary-500/30 transition-colors" data-v-b832dd55><svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b832dd55><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-b832dd55></path></svg></div></div>',1)),b("div",HP,[b("div",GP,[M[49]||(M[49]=b("svg",{class:"w-3 h-3 sm:w-3.5 sm:h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-secondary-500 light:text-secondary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1)),pc(b("input",{"onUpdate:modelValue":M[8]||(M[8]=w=>F.value=w),type:"text",placeholder:"Search recipes...",class:"w-full bg-secondary-700/50 light:bg-secondary-100 rounded-lg pl-7 pr-3 py-1.5 sm:py-2 text-[10px] sm:text-xs text-white light:text-secondary-900 placeholder-secondary-500 light:placeholder-secondary-400 focus:outline-none focus:border-primary-500 border border-transparent focus:border-primary-500/50 transition-colors"},null,512),[[Dd,F.value]])]),M[50]||(M[50]=b("button",{class:"bg-primary-500 hover:bg-primary-400 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 flex items-center transition-colors cursor-pointer"},[b("span",{class:"text-[10px] sm:text-xs text-white font-semibold"},"Search")],-1))])]),b("div",WP,[(he(),ge(Ke,null,it(pe,w=>b("button",{key:w,onClick:V=>j.value=w,class:at(["px-2.5 sm:px-3 py-1 rounded-full text-[8px] sm:text-[9px] font-medium whitespace-nowrap transition-all cursor-pointer",j.value===w?"bg-primary-500 text-white shadow-md shadow-primary-500/25":"bg-secondary-800 light:bg-white text-secondary-400 light:text-secondary-500 border border-secondary-700 light:border-secondary-200 hover:text-white light:hover:text-secondary-900"])},Se(w),11,XP)),64))]),b("div",$P,[(he(!0),ge(Ke,null,it(me.value,w=>(he(),ge("div",{key:w.id,onClick:V=>ve(w),class:"bg-secondary-800 light:bg-white rounded-lg overflow-hidden border border-secondary-700 light:border-secondary-200 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-200 cursor-pointer"},[b("div",{class:at(["h-14 sm:h-16 bg-gradient-to-br relative flex items-center justify-center text-2xl sm:text-3xl",w.color])},[b("span",null,Se(w.emoji),1),b("div",YP,"⏱ "+Se(w.time)+" min",1)],2),b("div",qP,[b("div",KP,Se(w.name),1),b("div",ZP,[M[52]||(M[52]=b("span",{class:"text-yellow-500 text-[9px] sm:text-[10px]"},"★",-1)),b("span",JP,Se(w.rating),1),b("span",QP,Se(w.category),1)])])],8,jP))),128)),me.value.length===0?(he(),ge("div",eD,[...M[53]||(M[53]=[b("div",{class:"text-3xl mb-2"},"🔍",-1),b("p",{class:"text-xs text-secondary-400 light:text-secondary-500"},"No recipes found",-1)])])):Bn("",!0)]),At(Vf,{name:"fade"},{default:Mu(()=>[ae.value?(he(),ge("div",{key:0,class:"absolute inset-0 bg-dark-900/80 light:bg-secondary-900/80 backdrop-blur-sm z-20 flex items-center justify-center p-4",onClick:M[12]||(M[12]=w=>ae.value=null)},[b("div",{class:"bg-secondary-800 light:bg-white rounded-xl max-w-sm w-full p-5 border border-secondary-700 light:border-secondary-200 shadow-2xl",onClick:M[11]||(M[11]=po(()=>{},["stop"]))},[b("div",tD,[b("div",nD,Se(ae.value.emoji),1),b("button",{onClick:M[9]||(M[9]=w=>ae.value=null),class:"text-secondary-400 hover:text-white light:hover:text-secondary-900 transition-colors cursor-pointer","aria-label":"Close recipe"},[...M[54]||(M[54]=[b("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),b("h3",iD,Se(ae.value.name),1),b("div",rD,[b("span",sD,"★ "+Se(ae.value.rating),1),M[55]||(M[55]=b("span",{class:"text-[9px] text-secondary-500 light:text-secondary-400"},"•",-1)),b("span",oD,"⏱ "+Se(ae.value.time)+" min",1),M[56]||(M[56]=b("span",{class:"text-[9px] text-secondary-500 light:text-secondary-400"},"•",-1)),b("span",aD,Se(ae.value.category),1)]),b("div",lD,[(he(),ge(Ke,null,it(4,w=>b("div",{key:w,class:"flex items-center gap-2"},[M[57]||(M[57]=b("div",{class:"w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0"},null,-1)),b("div",{class:"h-1.5 bg-secondary-700 light:bg-secondary-200 rounded flex-1",style:Tn({width:60+w*8+"%"})},null,4)])),64))]),b("button",{onClick:M[10]||(M[10]=w=>ae.value=null),class:"w-full py-2 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-[10px] font-semibold transition-colors cursor-pointer"}," Start Cooking ")])])):Bn("",!0)]),_:1})])):t.value==="portfolio"?(he(),ge("div",cD,[b("div",uD,[M[58]||(M[58]=b("div",{class:"text-xs sm:text-sm font-bold text-primary-500"},"👨‍💻 DevName",-1)),b("div",dD,[(he(),ge(Ke,null,it(J,w=>b("button",{key:w,onClick:V=>ue(w),class:at(["capitalize cursor-pointer transition-colors",Te.value===w?"text-primary-500 font-semibold":"hover:text-white light:hover:text-secondary-900"])},Se(w),11,fD)),64))])]),b("div",hD,[Te.value==="home"?(he(),ge("div",pD,[b("div",mD,[M[59]||(M[59]=lo('<div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 mx-auto mb-3 sm:mb-4 flex items-center justify-center" data-v-b832dd55><svg class="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b832dd55><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" data-v-b832dd55></path></svg></div><div class="text-base sm:text-lg font-bold text-white light:text-secondary-900 mb-1.5" data-v-b832dd55>Hi, I&#39;m a Developer</div><div class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 mb-3 sm:mb-4" data-v-b832dd55>Building beautiful web experiences</div>',3)),b("div",gD,[b("button",{onClick:M[13]||(M[13]=w=>ue("projects")),class:"bg-primary-500 hover:bg-primary-400 text-white text-[9px] sm:text-[10px] font-semibold px-3 sm:px-4 py-1.5 rounded-full transition-colors cursor-pointer"},"View Work"),b("button",{onClick:M[14]||(M[14]=w=>ue("contact")),class:"border border-secondary-600 light:border-secondary-300 text-secondary-300 light:text-secondary-600 hover:text-white light:hover:text-secondary-900 text-[9px] sm:text-[10px] font-semibold px-3 sm:px-4 py-1.5 rounded-full transition-colors cursor-pointer"},"Contact Me")])])])):Te.value==="about"?(he(),ge("div",_D,[M[60]||(M[60]=b("h3",{class:"text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3"},"About Me",-1)),b("div",xD,[(he(),ge(Ke,null,it(4,w=>b("div",{key:w,class:"h-2 bg-secondary-700 light:bg-secondary-200 rounded",style:Tn({width:70+w*5+"%"})},null,4)),64))]),b("div",vD,[(he(),ge(Ke,null,it(["Vue.js","React","Node.js","TypeScript","Tailwind","GraphQL"],w=>b("div",{key:w,class:"bg-secondary-800 light:bg-white rounded-lg p-2.5 border border-secondary-700 light:border-secondary-200 text-center"},[b("div",yD,Se(w),1),b("div",bD,[b("div",{class:"h-full bg-primary-500 rounded-full",style:Tn({width:60+w.length*3+"%"})},null,4)])])),64))])])):Te.value==="projects"?(he(),ge("div",SD,[M[62]||(M[62]=b("h3",{class:"text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3"},"My Projects",-1)),b("div",MD,[(he(),ge(Ke,null,it(4,w=>b("div",{key:w,class:"bg-secondary-800 light:bg-white rounded-lg overflow-hidden border border-secondary-700 light:border-secondary-200 hover:border-primary-500/50 transition-colors cursor-pointer"},[b("div",{class:at(["h-12 sm:h-16 bg-gradient-to-br flex items-center justify-center text-xl sm:text-2xl",["from-primary-500/30 to-primary-500/10","from-accent-500/30 to-accent-500/10","from-yellow-500/30 to-yellow-500/10","from-blue-500/30 to-blue-500/10"][w-1]])},Se(["📱","🌐","🎮","📊"][w-1]),3),M[61]||(M[61]=b("div",{class:"p-2 sm:p-2.5"},[b("div",{class:"h-1.5 bg-secondary-700 light:bg-secondary-200 rounded mb-1 w-4/5"}),b("div",{class:"h-1 bg-secondary-700 light:bg-secondary-200 rounded w-1/2"})],-1))])),64))])])):(he(),ge("div",wD,[...M[63]||(M[63]=[lo('<h3 class="text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3" data-v-b832dd55>Get In Touch</h3><div class="space-y-2 mb-4" data-v-b832dd55><div class="flex items-center gap-2 bg-secondary-800 light:bg-white rounded-lg p-2.5 border border-secondary-700 light:border-secondary-200" data-v-b832dd55><span class="text-base" data-v-b832dd55>📧</span><span class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500" data-v-b832dd55>hello@devname.com</span></div><div class="flex items-center gap-2 bg-secondary-800 light:bg-white rounded-lg p-2.5 border border-secondary-700 light:border-secondary-200" data-v-b832dd55><span class="text-base" data-v-b832dd55>💼</span><span class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500" data-v-b832dd55>linkedin.com/in/devname</span></div><div class="flex items-center gap-2 bg-secondary-800 light:bg-white rounded-lg p-2.5 border border-secondary-700 light:border-secondary-200" data-v-b832dd55><span class="text-base" data-v-b832dd55>🐙</span><span class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500" data-v-b832dd55>github.com/devname</span></div></div><button class="w-full py-2 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-[10px] font-semibold transition-colors cursor-pointer" data-v-b832dd55>Send Message</button>',3)])]))]),b("div",ED,[b("div",TD,[(he(),ge(Ke,null,it(["Vue","React","Node","Python","Go"],w=>b("div",{key:w,class:"px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-secondary-700/50 light:bg-secondary-100 text-[8px] sm:text-[9px] text-secondary-400 light:text-secondary-500 border border-secondary-700 light:border-secondary-200 whitespace-nowrap"},Se(w),1)),64))])])])):(he(),ge("div",AD,[b("div",CD,[b("div",RD,Se(n.project.title),1),b("div",PD,[(he(),ge(Ke,null,it(Re,w=>b("button",{key:w,onClick:V=>Ae(w),class:at(["capitalize cursor-pointer transition-colors",oe.value===w?"text-primary-500 font-semibold":"hover:text-white light:hover:text-secondary-900"])},Se(w),11,DD)),64))])]),b("div",LD,[oe.value==="home"?(he(),ge("div",ID,[b("div",UD,[M[64]||(M[64]=b("div",{class:"w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-500/20 mx-auto mb-2 sm:mb-3 flex items-center justify-center"},[b("svg",{class:"w-5 h-5 sm:w-6 sm:h-6 text-primary-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"}),b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M8 9h8M8 13h5"})])],-1)),b("div",FD,Se(n.project.title),1),b("div",ND,Se(n.project.description),1),b("div",OD,[(he(!0),ge(Ke,null,it(n.project.tech.slice(0,3),w=>(he(),ge("div",{key:w,class:"px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-primary-500/10 text-[8px] sm:text-[9px] text-primary-500 border border-primary-500/20"},Se(w),1))),128))])])])):oe.value==="features"?(he(),ge("div",kD,[M[66]||(M[66]=b("h3",{class:"text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3"},"Features",-1)),b("div",BD,[(he(!0),ge(Ke,null,it(n.project.features||["Feature 1","Feature 2","Feature 3","Feature 4"],(w,V)=>(he(),ge("div",{key:V,class:"flex items-start gap-2 bg-secondary-800 light:bg-white rounded-lg p-2.5 sm:p-3 border border-secondary-700 light:border-secondary-200"},[M[65]||(M[65]=b("div",{class:"w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0"},[b("svg",{class:"w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})])],-1)),b("span",zD,Se(w),1)]))),128))])])):(he(),ge("div",VD,[M[67]||(M[67]=b("h3",{class:"text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3"},"About",-1)),b("div",HD,[(he(),ge(Ke,null,it(5,w=>b("div",{key:w,class:"h-2 bg-secondary-700 light:bg-secondary-200 rounded",style:Tn({width:65+w*5+"%"})},null,4)),64))])]))])]))]))}},i0=_d(GD,[["__scopeId","data-v-b832dd55"]]),WD={class:"relative w-full h-[500px] select-none"},XD=["disabled"],$D=["onClick","onMouseenter","onMouseleave"],jD={class:"relative overflow-hidden rounded-t-xl h-48"},YD={key:0,class:"absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent rounded-t-xl pointer-events-none"},qD={class:"p-5 bg-secondary-800 h-full light:bg-white rounded-b-xl"},KD={class:"text-white light:text-secondary-900 font-semibold text-lg mb-2"},ZD={class:"text-secondary-400 light:text-secondary-500 text-sm mb-3 leading-relaxed line-clamp-2"},JD={class:"flex flex-wrap gap-1.5 mb-3"},QD=["disabled"],eL={class:"absolute bottom-0 left-1/2 -translate-x-1/2 w-64 sm:w-80"},tL={class:"h-1 rounded-full bg-secondary-800 light:bg-secondary-200 overflow-hidden"},Rf=300,yg=380,el=2,eu=.6,tl=.5,nL=215,iL=34,rL=8,sL=1.08,oL=16,aL=58,lL={__name:"ProjectWheel",props:{projects:{type:Array,required:!0}},emits:["open"],setup(n,{emit:e}){const t=n,i=e,{isDark:r}=Np(),s=Ne(null),o=Ne(0),a=Ne(0),l=Ne(!1),c=Ne(null);let u=[],d=!1,f=0,h=0,g=!1;const _=hn(()=>t.projects.length>1),p=hn(()=>t.projects.length===0?0:(o.value+1)/t.projects.length*100),m=async()=>{await rs(),!(!s.value||(u=Array.from(s.value.children),u.length===0))&&(u.forEach(ve=>{pt.set(ve,{position:"absolute",top:"50%",left:"50%",width:Rf,height:yg,marginLeft:-Rf/2,marginTop:-yg/2,transformOrigin:"center center",willChange:"transform, opacity",borderRadius:"1rem",boxShadow:r.value?"0 10px 30px rgba(0,0,0,0.3)":"none",cursor:"pointer",backgroundColor:"rgb(var(--color-secondary-800))"})}),o.value=0,a.value=0,A(!0))},y=me=>{const ve=el;return me<=ve?(eu+tl)*me-tl*me*me/(2*ve):(eu+tl)*ve-tl*ve/2+eu*(me-ve)},E=y(1),x=me=>{const Te=360/u.length,J=o.value+a.value;let oe=(me*Te-J*Te)%360;oe>180&&(oe-=360),oe<-180&&(oe+=360);const Re=oe/Te,Ae=Math.abs(Re),le=Math.min(Ae,el),M=Math.max(0,1-Ae/(el+1)),w=Math.sign(Re)*nL*(y(Ae)/E),V=iL*(1-Math.cos(le/el*(Math.PI/2))),ee=Math.sign(Re)*rL*(le/el),Y=eu+M*tl,O=M,I=Math.round(M*100);return{x:w,y:V,scale:Y,opacity:O,zIndex:I,rotation:ee,normalized:oe,offset:Re}},R=()=>!l.value&&!d,A=(me=!1,ve=!1)=>{const Te=R()?c.value:null,J=Te!==null&&u[Te]?x(Te).offset:null;u.forEach((ue,oe)=>{const{x:Re,y:Ae,scale:le,opacity:M,zIndex:w,rotation:V,normalized:ee,offset:Y}=x(oe),O=Math.abs(ee)<5,I=Te===oe;let _e=Re,de=Ae,ne=le,fe=V,P=w,S=me?"none":"power3.out",B=me?0:.8;if(I)ne=le*sL,de=Ae-oL,fe=V*.35,P=150,me||(S=ve?"elastic.out(1, 0.45)":"back.out(2)",B=ve?.9:.5);else if(J!==null){const q=Y-J,Me=Math.abs(q);if(Me>.01){const xe=aL/Me*Math.sign(q);_e=Re+xe,de=Ae+Math.min(10,10/Me),me||(S=ve?"back.out(3)":"power3.out",B=ve?.75:.5)}}const Z=r.value?I?1:M>.05?M:0:M>.05?1:0,Q={x:_e,y:de,scale:ne,rotation:fe,opacity:Z,zIndex:P,filter:O||I?"brightness(1)":r.value?"brightness(0.6)":"brightness(0.85)",boxShadow:I?"0 25px 60px rgb(var(--color-primary-500) / 0.45)":O?"0 0 50px rgb(var(--color-primary-500) / 0.35)":r.value?"0 0 0px rgb(var(--color-primary-500) / 0)":"none",pointerEvents:M>.05?"auto":"none",duration:B,ease:S,overwrite:"auto",borderRadius:"1rem",transformOrigin:"center center"};me?pt.set(ue,Q):pt.to(ue,Q)})},C=me=>{l.value||d||c.value!==me&&(c.value=me,A(!1,!0))},v=me=>{c.value===me&&(c.value=null,!(l.value||d)&&A(!1,!0))},T=me=>{if(d||u.length===0||!_.value)return;d=!0,c.value=null;const ve=u.length;o.value=(o.value+me+ve)%ve,pt.to({},{duration:1,ease:"power3.inOut",onUpdate:()=>{A()},onComplete:()=>{d=!1,A()}})},N=me=>{d||u.length===0||l.value||g||U(me)},U=me=>{const ve=u[me];if(!ve)return;const Te=ve.getBoundingClientRect();i("open",{project:t.projects[me],originRect:{left:Te.left,top:Te.top,width:Te.width,height:Te.height}})},L=me=>{d||u.length===0||!_.value||(l.value=!0,c.value=null,g=!1,f=me.clientX,h=me.clientX,me.preventDefault())},H=me=>{if(!l.value)return;const ve=me.clientX-h;h=me.clientX,Math.abs(me.clientX-f)>5&&(g=!0),a.value-=ve/Rf,A()},z=()=>{if(!l.value)return;l.value=!1;const me=u.length,ve=Math.round(a.value);if(!g&&ve===0){a.value=0;return}ve!==0&&(o.value=(o.value+ve+me)%me),a.value=0,d=!0,pt.to({},{duration:.5,ease:"power3.out",onUpdate:()=>{A()},onComplete:()=>{d=!1,A(),setTimeout(()=>{g=!1},50)}})},G=()=>{l.value&&z()},X=()=>{c.value!==null&&(c.value=null,!l.value&&!d&&A(!1,!0)),z()},k=me=>{const ve=me.currentTarget;if(!ve.querySelector(".fill-overlay"))return;const J=ve.getBoundingClientRect(),ue=me.clientX-J.left,oe=me.clientY-J.top;ve.style.setProperty("--mx",`${ue}px`),ve.style.setProperty("--my",`${oe}px`)},K=me=>{const ve=me.currentTarget;if(ve.style.setProperty("--mx","50%"),ve.style.setProperty("--my","50%"),j){const Te=ve.querySelector(".fill-overlay");Te&&(Te.classList.remove("active"),Te.classList.add("fade-out"),setTimeout(()=>{Te.classList.remove("fade-out")},500))}},j=window.matchMedia("(hover: hover)").matches,F=me=>{if(j)return;const ve=me.currentTarget,Te=ve.querySelector(".fill-overlay");if(!Te)return;const J=ve.getBoundingClientRect(),ue=me.clientX-J.left,oe=me.clientY-J.top;ve.style.setProperty("--mx",`${ue}px`),ve.style.setProperty("--my",`${oe}px`),Te.classList.add("active")},ae=me=>{if(j)return;const Te=me.currentTarget.querySelector(".fill-overlay");Te&&(Te.classList.remove("active"),Te.classList.add("fade-out"),setTimeout(()=>{Te.classList.remove("fade-out")},500))},pe=me=>{if(!j)return;const ve=me.currentTarget,Te=ve.querySelector(".fill-overlay");if(!Te)return;const J=ve.getBoundingClientRect(),ue=me.clientX-J.left,oe=me.clientY-J.top;ve.style.setProperty("--mx",`${ue}px`),ve.style.setProperty("--my",`${oe}px`),Te.classList.add("active")};return Pn(async()=>{await m()}),Ai(()=>t.projects,async()=>{await m()}),Ai(r,()=>{u.length>0&&A(!0)}),(me,ve)=>(he(),ge("div",WD,[b("button",{onClick:ve[0]||(ve[0]=Te=>T(-1)),onMousemove:k,onMouseleave:K,onMouseenter:pe,onPointerdown:F,onPointerup:ae,onPointercancel:ae,disabled:!_.value,class:"absolute -left-24 md:-left-24 lg:-left-40 top-1/2 -translate-y-1/2 size-[200px] md:size-[200px] lg:size-[300px] rounded-full flex items-center justify-center text-secondary-300 light:text-secondary-500 disabled:opacity-40 disabled:cursor-not-allowed z-[110] border-2 border-primary-500/50 light:border-primary-600/50 hover:border-primary-500 light:hover:border-primary-600 hover:scale-105 transition-all duration-300 overflow-hidden","aria-label":"Previous project"},[...ve[2]||(ve[2]=[b("span",{class:"fill-overlay"},null,-1),b("svg",{class:"absolute z-10 w-8 h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 right-10 md:right-10 lg:right-16 top-1/2 -translate-y-1/2 text-primary-500 light:text-primary-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M19 12H5M12 19l-7-7 7-7"})],-1)])],40,XD),b("div",{ref_key:"wheelRef",ref:s,class:at(["relative w-full h-full",{"cursor-grabbing":l.value,"cursor-grab":!l.value}]),onPointerdown:L,onPointermove:H,onPointerup:z,onPointercancel:G,onPointerleave:X},[(he(!0),ge(Ke,null,it(n.projects,(Te,J)=>(he(),ge("div",{key:Te.id,onClick:ue=>N(J),onMouseenter:ue=>C(J),onMouseleave:ue=>v(J),class:"absolute rounded-xl overflow-hidden shadow-xl light:shadow-none",style:{width:"300px",height:"360px"}},[b("div",jD,[At(i0,{project:Te,class:"w-full h-full"},null,8,["project"]),xt(r)?(he(),ge("div",YD)):Bn("",!0)]),b("div",qD,[b("h3",KD,Se(Te.title),1),b("p",ZD,Se(Te.description),1),b("div",JD,[(he(!0),ge(Ke,null,it(Te.tech.slice(0,3),ue=>(he(),ge("span",{key:ue,class:"text-xs text-primary-400 bg-primary-500/10 px-2 py-0.5 rounded-full"},Se(ue),1))),128))])])],40,$D))),128))],34),b("button",{onClick:ve[1]||(ve[1]=Te=>T(1)),onMousemove:k,onMouseleave:K,onMouseenter:pe,onPointerdown:F,onPointerup:ae,onPointercancel:ae,disabled:!_.value,class:"absolute -right-24 md:-right-24 lg:-right-40 top-1/2 -translate-y-1/2 size-[200px] md:size-[200px] lg:size-[300px] rounded-full flex items-center justify-center text-secondary-300 light:text-secondary-500 disabled:opacity-40 disabled:cursor-not-allowed z-[110] border-2 border-primary-500/50 light:border-primary-600/50 hover:border-primary-500 light:hover:border-primary-600 hover:scale-105 transition-all duration-300 overflow-hidden","aria-label":"Next project"},[...ve[3]||(ve[3]=[b("span",{class:"fill-overlay"},null,-1),b("svg",{class:"absolute z-10 w-8 h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 left-10 md:left-10 lg:left-16 top-1/2 -translate-y-1/2 text-primary-500 light:text-primary-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M5 12h14M12 5l7 7-7 7"})],-1)])],40,QD),b("div",eL,[b("div",tL,[b("div",{class:"h-full rounded-full bg-primary-500 light:bg-primary-600 transition-all duration-500 ease-out",style:Tn({width:p.value+"%"})},null,4)])])]))}},cL=_d(lL,[["__scopeId","data-v-08329b5e"]]),uL={class:"relative overflow-hidden h-48"},dL={class:"p-6"},fL={class:"text-white light:text-secondary-900 font-semibold text-lg mb-2 group-hover:text-primary-400 transition-colors duration-200"},hL={class:"text-secondary-400 light:text-secondary-500 text-sm mb-4 leading-relaxed"},pL={class:"flex flex-wrap gap-2 mb-4"},bg={__name:"ProjectCard",props:{project:{type:Object,required:!0}},emits:["open"],setup(n,{emit:e}){const t=n,i=e,r=Ne(null);let s=null;const o=()=>{if(!r.value)return;const a=r.value.getBoundingClientRect();i("open",{project:t.project,originRect:{left:a.left,top:a.top,width:a.width,height:a.height}})};return Pn(()=>{r.value&&(s=pC(r.value,6))}),$n(()=>{s&&s()}),(a,l)=>(he(),ge("div",{ref_key:"cardRef",ref:r,onClick:o,class:"group bg-secondary-800 border border-secondary-700 rounded-xl overflow-hidden hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 will-change-transform cursor-pointer light:bg-white light:border-secondary-200 light:hover:border-primary-500/50 light:hover:shadow-primary-500/10"},[b("div",uL,[At(i0,{project:n.project,class:"w-full h-full group-hover:scale-105 transition-transform duration-500"},null,8,["project"]),l[0]||(l[0]=b("div",{class:"absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent pointer-events-none"},null,-1))]),b("div",dL,[b("h3",fL,Se(n.project.title),1),b("p",hL,Se(n.project.description),1),b("div",pL,[(he(!0),ge(Ke,null,it(n.project.tech,c=>(he(),ge("span",{key:c,class:"text-xs text-primary-400 bg-primary-500/10 px-2 py-1 rounded-full"},Se(c),1))),128))])])],512))}},mL={class:"min-h-full flex flex-col lg:flex-row"},gL={class:"relative lg:w-1/2 lg:h-screen overflow-hidden flex-shrink-0"},_L={class:"absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:hidden bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent"},xL={class:"text-xl sm:text-3xl font-bold text-white mb-2"},vL={class:"flex flex-wrap gap-2"},yL={class:"flex-1 p-5 sm:p-8 lg:p-12 lg:overflow-y-auto"},bL={class:"hidden lg:block text-4xl font-bold text-white light:text-secondary-900 mb-4"},SL={class:"hidden lg:flex flex-wrap gap-2 mb-6"},ML={class:"mb-8"},wL={class:"text-secondary-300 light:text-secondary-600 leading-relaxed text-lg"},EL={class:"mb-8"},TL={class:"space-y-3"},AL={class:"flex flex-wrap gap-4"},CL=["href"],RL=["href"],PL={__name:"ProjectDetailModal",props:{project:{type:Object,required:!0},originRect:{type:Object,default:null}},emits:["close"],setup(n,{emit:e}){const t=n,i=e,r=["Responsive design that works across all devices","Optimized performance with lazy loading and code splitting","Clean, maintainable code following best practices","Accessible UI with semantic HTML and ARIA labels"],s=Ne(null),o=Ne(null),a=Ne(null),l=Ne(null),c=Ne(!1);let u=null;const d=async()=>{if(await rs(),!s.value||!o.value)return;const g=s.value,_=o.value,p=a.value,m=t.originRect||{left:0,top:0,width:0,height:0},y=window.innerWidth,E=window.innerHeight;pt.set(g,{opacity:0,pointerEvents:"none"}),pt.set(_,{position:"fixed",left:m.left,top:m.top,width:m.width,height:m.height,margin:0,borderRadius:"1rem",zIndex:9999,overflow:"hidden"}),pt.set(p,{opacity:0,y:30}),pt.to(g,{opacity:1,duration:.3,ease:"power2.out",pointerEvents:"auto"}),u=pt.timeline({defaults:{ease:"power3.inOut"}}),u.to(_,{left:0,top:0,width:y,height:E,borderRadius:0,duration:.7}).to(p,{opacity:1,y:0,duration:.5,ease:"power2.out"},"-=0.3").from(l.value,{opacity:0,scale:.8,duration:.3,ease:"back.out(1.7)"},"-=0.2")},f=()=>{if(c.value)return;c.value=!0;const g=s.value,_=o.value,p=a.value,m=t.originRect||{left:0,top:0,width:0,height:0};u&&u.kill(),pt.timeline({defaults:{ease:"power3.inOut"},onComplete:()=>{i("close")}}).to(p,{opacity:0,y:-30,duration:.3,ease:"power2.in"}).to(_,{left:m.left,top:m.top,width:m.width,height:m.height,borderRadius:"1rem",duration:.6},"-=0.1").to(g,{opacity:0,duration:.3,ease:"power2.in"},"-=0.3")},h=g=>{g.key==="Escape"&&f()};return Pn(()=>{d(),document.body.style.overflow="hidden",window.addEventListener("keydown",h)}),$n(()=>{document.body.style.overflow="",window.removeEventListener("keydown",h),u&&u.kill()}),(g,_)=>(he(),ge("div",{ref_key:"overlayRef",ref:s,class:"fixed inset-0 z-[9998] bg-dark-900/90 light:bg-secondary-900/90 backdrop-blur-sm",onClick:po(f,["self"])},[b("div",{ref_key:"cardRef",ref:o,class:"bg-secondary-800 light:bg-white shadow-2xl"},[b("button",{ref_key:"closeBtnRef",ref:l,onClick:f,class:"fixed top-4 right-4 z-[10000] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-900/80 light:bg-white/90 border border-secondary-700 light:border-secondary-200 flex items-center justify-center text-secondary-300 light:text-secondary-600 hover:text-primary-400 light:hover:text-primary-600 hover:border-primary-500/50 transition-colors duration-200 shadow-lg backdrop-blur-sm","aria-label":"Close project details"},[..._[0]||(_[0]=[b("svg",{class:"w-5 h-5 sm:w-6 sm:h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])],512),b("div",{ref_key:"contentRef",ref:a,class:"h-full w-full overflow-y-auto overscroll-contain"},[b("div",mL,[b("div",gL,[At(i0,{project:n.project,class:"w-full h-[60vh] sm:h-[55vh] lg:h-full"},null,8,["project"]),b("div",_L,[b("h2",xL,Se(n.project.title),1),b("div",vL,[(he(!0),ge(Ke,null,it(n.project.tech,p=>(he(),ge("span",{key:p,class:"text-xs text-primary-300 bg-primary-500/20 px-3 py-1 rounded-full backdrop-blur-sm"},Se(p),1))),128))])])]),b("div",yL,[b("h2",bL,Se(n.project.title),1),b("div",SL,[(he(!0),ge(Ke,null,it(n.project.tech,p=>(he(),ge("span",{key:p,class:"text-sm text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full"},Se(p),1))),128))]),b("div",ML,[_[1]||(_[1]=b("h3",{class:"text-lg font-semibold text-primary-400 light:text-primary-600 mb-3 uppercase tracking-wider"}," About This Project ",-1)),b("p",wL,Se(n.project.description),1)]),b("div",EL,[_[3]||(_[3]=b("h3",{class:"text-lg font-semibold text-primary-400 light:text-primary-600 mb-3 uppercase tracking-wider"}," Key Features ",-1)),b("ul",TL,[(he(!0),ge(Ke,null,it(n.project.features||r,(p,m)=>(he(),ge("li",{key:m,class:"flex items-start gap-3 text-secondary-300 light:text-secondary-600"},[_[2]||(_[2]=b("svg",{class:"w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})],-1)),b("span",null,Se(p),1)]))),128))])]),b("div",AL,[b("a",{href:n.project.github,target:"_blank",rel:"noopener noreferrer",class:"inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary-700 light:bg-secondary-100 text-white light:text-secondary-900 font-medium hover:bg-primary-600 light:hover:bg-primary-600 light:hover:text-white transition-colors duration-300"},[..._[4]||(_[4]=[b("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24"},[b("path",{"fill-rule":"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z","clip-rule":"evenodd"})],-1),Fs(" View Code ",-1)])],8,CL),b("a",{href:n.project.demo,target:"_blank",rel:"noopener noreferrer",class:"inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors duration-300 shadow-lg shadow-primary-500/25"},[..._[5]||(_[5]=[b("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})],-1),Fs(" Live Demo ",-1)])],8,RL)])])])],512)],512)],512))}},DL={class:"h-1 bg-secondary-800/50 light:bg-secondary-200/50 backdrop-blur-sm"},LL={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},IL={class:"flex flex-wrap gap-3"},UL=["onClick"],FL={key:0,class:"ml-auto flex items-center gap-1 p-1 rounded-lg bg-secondary-800 border border-secondary-700 light:bg-secondary-100 light:border-secondary-200"},NL={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"},OL={__name:"ProjectsSection",setup(n){pt.registerPlugin(mt);const e=Ne("All"),t=Ne("carousel"),i=Ne(!1),r=Ne(0),s=Ne(0),o=Ne(!1),a=Ne(null),l=Ne(null),c=Ne(null),u=Ne(null),d=Ne(null),f=Ne(null),h=Ne(null),g=Ne(null),_=Ne(null),p=Ne(null);let m=[],y=null,E=null,x=null,R=null;const A=hn(()=>{const j=Cf.flatMap(F=>F.tech);return["All",...new Set(j)]}),C=hn(()=>e.value==="All"?Cf:Cf.filter(j=>j.tech.includes(e.value))),v=j=>{e.value=j},T=({project:j,originRect:F})=>{_.value=j,p.value=F},N=()=>{_.value=null,p.value=null};Ai(C,async()=>{await rs(),H(),t.value==="horizontal"&&k()});const U=j=>{i.value||(t.value=j,j==="horizontal"?rs(()=>k()):K())},L=j=>{i.value=j.matches,j.matches&&(t.value="grid",K())},H=()=>{if(!d.value)return;const j=d.value.getBoundingClientRect(),F=window.innerHeight,ae=j.height-F,pe=Math.min(Math.max(-j.top,0),ae);r.value=ae>0?pe/ae*100:100},z=()=>{E&&window.removeEventListener("scroll",E,{passive:!0}),E=()=>H(),window.addEventListener("scroll",E,{passive:!0}),H()},G=()=>{if(!f.value)return;const j=f.value.getBoundingClientRect(),F=window.innerHeight,pe=j.height-F;if(o.value=j.top<F&&j.bottom>0,pe>0){const me=Math.min(Math.max(-j.top,0),pe);s.value=me/pe*100}else s.value=o.value?100:0},X=()=>{x&&window.removeEventListener("scroll",x,{passive:!0}),x=()=>G(),window.addEventListener("scroll",x,{passive:!0}),G()},k=()=>{if(K(),!h.value||!g.value||!u.value)return;const j=g.value,F=u.value,pe=j.scrollWidth-window.innerWidth;pe<=0||(R=pt.to(j,{x:-pe,ease:"none",scrollTrigger:{trigger:F,start:"top top",end:()=>`+=${pe}`,pin:!0,pinSpacing:!0,scrub:!0,anticipatePin:1,invalidateOnRefresh:!0,preventOverlaps:!0,fastScrollEnd:!0}}))},K=()=>{var j;R&&((j=R.scrollTrigger)==null||j.kill(),R.kill(),R=null)};return Pn(()=>{y=window.matchMedia("(max-width: 768px)"),i.value=y.matches,i.value&&(t.value="grid"),y.addEventListener("change",L),m.push(...xd(a.value,{x:-120,start:"top 90%",end:"top 40%"})),m.push(...uc(u.value,{y:60,duration:1.2,start:"top 80%",blur:14})),z(),X()}),$n(()=>{m.forEach(j=>j.kill()),K(),y&&y.removeEventListener("change",L),E&&window.removeEventListener("scroll",E,{passive:!0}),x&&window.removeEventListener("scroll",x,{passive:!0})}),(j,F)=>(he(),ge("section",{ref_key:"sectionRef",ref:f,id:"projects",class:at(["pt-20 pb-0 bg-dark-800 light:bg-white relative",t.value==="horizontal"?"overflow-visible":"overflow-hidden"])},[F[7]||(F[7]=b("div",{class:"absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"},null,-1)),o.value?(he(),ge("div",{key:0,class:at(["fixed top-16 left-0 right-0 z-40 transition-opacity duration-300",s.value>=100?"opacity-0 pointer-events-none":"opacity-100"])},[b("div",DL,[b("div",{class:"h-full bg-gradient-to-r from-primary-500 to-accent-500 light:from-primary-600 light:to-accent-600 transition-all duration-150 ease-out",style:Tn({width:s.value+"%"})},null,4)])],2)):Bn("",!0),b("div",LL,[b("h2",{ref_key:"titleRef",ref:a,class:"section-title"},"Featured Projects",512),b("p",{ref_key:"subtitleRef",ref:l,class:"section-subtitle"},"A selection of projects I've built",512),b("div",{ref_key:"filterRef",ref:c,class:"flex flex-wrap items-center gap-3 mb-10"},[b("div",IL,[(he(!0),ge(Ke,null,it(A.value,ae=>(he(),ge("button",{key:ae,onClick:pe=>v(ae),class:at(["px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105",e.value===ae?"bg-primary-600 text-white shadow-lg shadow-primary-500/25":"bg-secondary-800 text-secondary-400 hover:text-white border border-secondary-700 light:bg-white light:text-secondary-500 light:hover:text-secondary-900 light:border-secondary-200"])},Se(ae),11,UL))),128))]),i.value?Bn("",!0):(he(),ge("div",FL,[b("button",{onClick:F[0]||(F[0]=ae=>U("grid")),class:at(["px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300",t.value==="grid"?"bg-primary-600 text-white shadow-md shadow-primary-500/25":"text-secondary-400 hover:text-white light:text-secondary-500 light:hover:text-secondary-900"]),"aria-label":"Grid view"},[...F[3]||(F[3]=[b("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})],-1)])],2),b("button",{onClick:F[1]||(F[1]=ae=>U("carousel")),class:at(["px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300",t.value==="carousel"?"bg-primary-600 text-white shadow-md shadow-primary-500/25":"text-secondary-400 hover:text-white light:text-secondary-500 light:hover:text-secondary-900"]),"aria-label":"Carousel view"},[...F[4]||(F[4]=[b("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)])],2),b("button",{onClick:F[2]||(F[2]=ae=>U("horizontal")),class:at(["px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300",t.value==="horizontal"?"bg-primary-600 text-white shadow-md shadow-primary-500/25":"text-secondary-400 hover:text-white light:text-secondary-500 light:hover:text-secondary-900"]),"aria-label":"Horizontal scroll view"},[...F[5]||(F[5]=[b("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"})],-1)])],2)]))],512)]),b("div",{ref_key:"wheelContainerRef",ref:u,class:"w-full"},[t.value==="grid"?(he(),ge("div",{key:0,ref_key:"gridContainerRef",ref:d,class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"},[b("div",NL,[(he(!0),ge(Ke,null,it(C.value,ae=>(he(),vl(bg,{key:ae.id,project:ae,onOpen:T},null,8,["project"]))),128))]),F[6]||(F[6]=b("div",{class:"mt-10 flex justify-center"},[b("div",{class:"w-64 sm:w-80"})],-1))],512)):t.value==="carousel"?(he(),vl(cL,{key:1,projects:C.value,onOpen:T},null,8,["projects"])):t.value==="horizontal"?(he(),ge("div",{key:2,ref_key:"horizontalContainerRef",ref:h,class:"relative h-screen overflow-hidden"},[b("div",{ref_key:"horizontalTrackRef",ref:g,class:"flex items-center gap-8 px-8 sm:px-12 lg:px-16 h-full w-max"},[(he(!0),ge(Ke,null,it(C.value,ae=>(he(),ge("div",{key:ae.id,class:"w-[320px] sm:w-[380px] lg:w-[420px] shrink-0"},[At(bg,{project:ae,onOpen:T},null,8,["project"])]))),128))],512)],512)):Bn("",!0)],512),_.value?(he(),vl(PL,{key:1,project:_.value,"origin-rect":p.value,onClose:N},null,8,["project","origin-rect"])):Bn("",!0)],2))}},kL={id:"contact",class:"py-20 bg-dark-800 light:bg-white relative overflow-hidden"},BL={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},zL={class:"text-center mb-16"},VL={class:"text-center"},HL={class:"flex items-center justify-center gap-4"},GL=["href","aria-label"],WL={class:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24"},XL=["d"],$L={__name:"ContactSection",setup(n){const e=Ne(null),t=Ne(null),i=Ne(null);let r=[];const s=[{name:"GitHub",href:"https://github.com/pixel-user-512",icon:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"},{name:"LinkedIn",href:"https://linkedin.com/in/kenneth-paul-cortez",icon:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"}];return Pn(()=>{r.push(...xd(t.value,{x:-120,start:"top 90%",end:"top 40%"})),r.push(...uc(e.value,{y:60,duration:1.2,stagger:.15,start:"top 80%",blur:14}))}),$n(()=>{r.forEach(o=>o.kill())}),(o,a)=>(he(),ge("section",kL,[a[2]||(a[2]=b("div",{class:"absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"},null,-1)),b("div",BL,[b("div",zL,[b("h2",{ref_key:"titleRef",ref:t,class:"section-title"},"Get In Touch",512),b("p",{ref_key:"subtitleRef",ref:i,class:"section-subtitle"},"Have a project in mind? Let's work together!",512)]),b("div",{ref_key:"infoRef",ref:e,class:"max-w-3xl mx-auto"},[a[1]||(a[1]=lo('<div class="text-center mb-12"><p class="text-secondary-400 light:text-secondary-500 text-lg leading-relaxed"> I&#39;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out! </p></div><div class="grid sm:grid-cols-2 gap-4 mb-12"><a href="mailto:kenneth.cortez.512@gmail.com" class="group flex items-center gap-4 bg-secondary-800/50 border border-secondary-700 rounded-2xl p-5 hover:border-primary-500/50 hover:bg-secondary-800/80 transition-all duration-300 light:bg-white light:border-secondary-200 light:hover:border-primary-500/50"><span class="w-12 h-12 flex items-center justify-center bg-secondary-800 border border-secondary-700 rounded-xl group-hover:border-primary-500/50 group-hover:scale-110 transition-all duration-300 light:bg-secondary-50 light:border-secondary-200 shrink-0"><svg class="w-6 h-6 text-primary-400 light:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></span><span class="min-w-0"><span class="block text-xs text-secondary-500 light:text-secondary-400 uppercase tracking-wider mb-1">Email</span><span class="block text-secondary-200 light:text-secondary-700 font-medium truncate">kenneth.cortez.512@gmail.com</span></span></a><a href="tel:+639664002142" class="group flex items-center gap-4 bg-secondary-800/50 border border-secondary-700 rounded-2xl p-5 hover:border-primary-500/50 hover:bg-secondary-800/80 transition-all duration-300 light:bg-white light:border-secondary-200 light:hover:border-primary-500/50"><span class="w-12 h-12 flex items-center justify-center bg-secondary-800 border border-secondary-700 rounded-xl group-hover:border-primary-500/50 group-hover:scale-110 transition-all duration-300 light:bg-secondary-50 light:border-secondary-200 shrink-0"><svg class="w-6 h-6 text-primary-400 light:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></span><span class="min-w-0"><span class="block text-xs text-secondary-500 light:text-secondary-400 uppercase tracking-wider mb-1">Phone</span><span class="block text-secondary-200 light:text-secondary-700 font-medium">+63 (966) 400-2142</span></span></a></div>',2)),b("div",VL,[a[0]||(a[0]=b("h4",{class:"text-white light:text-secondary-900 text-sm font-semibold uppercase tracking-wider mb-5"},"Follow Me",-1)),b("div",HL,[(he(),ge(Ke,null,it(s,l=>b("a",{key:l.name,href:l.href,target:"_blank",rel:"noopener noreferrer",class:"w-12 h-12 flex items-center justify-center bg-secondary-800 border border-secondary-700 rounded-xl text-secondary-400 hover:text-primary-400 hover:border-primary-500/50 hover:scale-110 transition-all duration-300 light:bg-white light:border-secondary-200 light:text-secondary-500 light:hover:text-primary-600","aria-label":l.name},[(he(),ge("svg",WL,[b("path",{d:l.icon},null,8,XL)]))],8,GL)),64))])])],512)])]))}},jL={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},YL={class:"flex flex-col md:flex-row items-center justify-between gap-4"},qL={class:"text-secondary-400 light:text-secondary-500 text-sm"},KL={class:"flex items-center gap-6"},ZL={__name:"Footer",setup(n){const e=new Date().getFullYear(),t=Ne(null);let i=[];const r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return Pn(()=>{i=uc(t.value,{y:30,duration:1,start:"top bottom",blur:8})}),$n(()=>{i.forEach(s=>s.kill())}),(s,o)=>(he(),ge("footer",{ref_key:"footerRef",ref:t,class:"bg-dark-800 border-t border-dark-700 light:bg-white light:border-secondary-200 py-8"},[b("div",jL,[b("div",YL,[b("div",qL," © "+Se(xt(e))+" Kenneth Paul Cortez ",1),b("div",KL,[b("a",{href:"#home",onClick:po(r,["prevent"]),class:"text-secondary-400 hover:text-primary-400 light:text-secondary-500 light:hover:text-primary-600 transition-colors duration-200 text-sm"}," Home "),o[0]||(o[0]=b("a",{href:"#about",class:"text-secondary-400 hover:text-primary-400 light:text-secondary-500 light:hover:text-primary-600 transition-colors duration-200 text-sm"}," About ",-1)),o[1]||(o[1]=b("a",{href:"#projects",class:"text-secondary-400 hover:text-primary-400 light:text-secondary-500 light:hover:text-primary-600 transition-colors duration-200 text-sm"}," Projects ",-1)),o[2]||(o[2]=b("a",{href:"#contact",class:"text-secondary-400 hover:text-primary-400 light:text-secondary-500 light:hover:text-primary-600 transition-colors duration-200 text-sm"}," Contact ",-1))]),o[3]||(o[3]=b("div",{class:"text-secondary-500 light:text-secondary-400 text-sm"},[Fs(" Built with "),b("span",{class:"text-primary-500"},"Vue 3"),Fs(" & "),b("span",{class:"text-primary-500"},"Tailwind CSS")],-1))])])],512))}},JL={__name:"BackToTop",setup(n){const e=Ne(!1),t=()=>{e.value=window.scrollY>400},i=()=>{window.scrollTo({top:0,behavior:"smooth"})};return Pn(()=>{window.addEventListener("scroll",t)}),$n(()=>{window.removeEventListener("scroll",t)}),(r,s)=>(he(),vl(Vf,{"enter-active-class":"transition-all duration-300 ease-out","enter-from-class":"opacity-0 translate-y-4","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition-all duration-300 ease-in","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 translate-y-4"},{default:Mu(()=>[e.value?(he(),ge("button",{key:0,onClick:i,class:"fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white rounded-xl shadow-lg shadow-primary-500/25 hover:scale-110 transition-all duration-300","aria-label":"Back to top"},[...s[0]||(s[0]=[b("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 15l7-7 7 7"})],-1)])])):Bn("",!0)]),_:1}))}},QL={__name:"MouseTrail",setup(n){const{isMouseTrailEnabled:e}=Px();let t=null;const i=()=>{t||(t=gC({size:45,trailLength:400,trailWidth:16}))},r=()=>{t&&(t(),t=null)};return Pn(()=>{e.value&&i()}),$n(()=>{r()}),Ai(e,s=>{s?i():r()}),(s,o)=>null}},e5={__name:"IntroLoader",setup(n){const e=Ne(!0),t=Ne(null);return Pn(()=>{document.body.style.overflow="hidden";const i=getComputedStyle(document.documentElement).getPropertyValue("--color-primary-500").trim();t.value.style.backgroundColor=`rgb(${i})`;const r={size:3};t.value.style.setProperty("--hole-size",`${r.size}%`),pt.delayedCall(.5,()=>{pt.to(r,{size:100,duration:.6,ease:"power2.inOut",onUpdate:()=>{t.value.style.setProperty("--hole-size",`${r.size}%`)},onComplete:()=>{e.value=!1,document.body.style.overflow=""}})})}),$n(()=>{document.body.style.overflow=""}),(i,r)=>e.value?(he(),ge("div",{key:0,ref_key:"overlayRef",ref:t,class:"intro-overlay"},null,512)):Bn("",!0)}},t5=_d(e5,[["__scopeId","data-v-151ea3fb"]]),n5={class:"min-h-screen bg-dark-900 light:bg-secondary-50"},i5={__name:"App",setup(n){return(e,t)=>(he(),ge("div",n5,[At(RM),b("main",null,[At(fC),At(wC),At(IC),At(OL),At($L)]),At(ZL),At(JL),At(QL),At(t5)]))}};_b(i5).mount("#app");
