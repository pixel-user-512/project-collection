var gy=Object.defineProperty;var _y=(n,e,t)=>e in n?gy(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ke=(n,e,t)=>_y(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pp(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ht={},ga=[],Tr=()=>{},zg=()=>!1,rd=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),sd=n=>n.startsWith("onUpdate:"),Tn=Object.assign,mp=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},xy=Object.prototype.hasOwnProperty,Dt=(n,e)=>xy.call(n,e),ot=Array.isArray,_a=n=>dc(n)==="[object Map]",od=n=>dc(n)==="[object Set]",m0=n=>dc(n)==="[object Date]",ft=n=>typeof n=="function",Zt=n=>typeof n=="string",Dr=n=>typeof n=="symbol",Lt=n=>n!==null&&typeof n=="object",Vg=n=>(Lt(n)||ft(n))&&ft(n.then)&&ft(n.catch),Hg=Object.prototype.toString,dc=n=>Hg.call(n),vy=n=>dc(n).slice(8,-1),Gg=n=>dc(n)==="[object Object]",gp=n=>Zt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,wl=pp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ad=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},yy=/-\w/g,ai=ad(n=>n.replace(yy,e=>e.slice(1).toUpperCase())),by=/\B([A-Z])/g,Ys=ad(n=>n.replace(by,"-$1").toLowerCase()),ld=ad(n=>n.charAt(0).toUpperCase()+n.slice(1)),Cd=ad(n=>n?`on${ld(n)}`:""),vr=(n,e)=>!Object.is(n,e),uu=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Wg=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},cd=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Sy=n=>{const e=Zt(n)?Number(n):NaN;return isNaN(e)?n:e};let g0;const ud=()=>g0||(g0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gt(n){if(ot(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Zt(i)?Ty(i):Gt(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Zt(n)||Lt(n))return n}const wy=/;(?![^(]*\))/g,My=/:([^]+)/,Ey=/\/\*[^]*?\*\//g;function Ty(n){const e={};return n.replace(Ey,"").split(wy).forEach(t=>{if(t){const i=t.split(My);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function rt(n){let e="";if(Zt(n))e=n;else if(ot(n))for(let t=0;t<n.length;t++){const i=rt(n[t]);i&&(e+=i+" ")}else if(Lt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Ay="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cy=pp(Ay);function $g(n){return!!n||n===""}function Ry(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=fc(n[i],e[i]);return t}function fc(n,e){if(n===e)return!0;let t=m0(n),i=m0(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Dr(n),i=Dr(e),t||i)return n===e;if(t=ot(n),i=ot(e),t||i)return t&&i?Ry(n,e):!1;if(t=Lt(n),i=Lt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!fc(n[o],e[o]))return!1}}return String(n)===String(e)}function Py(n,e){return n.findIndex(t=>fc(t,e))}const Xg=n=>!!(n&&n.__v_isRef===!0),pe=n=>Zt(n)?n:n==null?"":ot(n)||Lt(n)&&(n.toString===Hg||!ft(n.toString))?Xg(n)?pe(n.value):JSON.stringify(n,jg,2):String(n),jg=(n,e)=>Xg(e)?jg(n,e.value):_a(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Rd(i,s)+" =>"]=r,t),{})}:od(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Rd(t))}:Dr(e)?Rd(e):Lt(e)&&!ot(e)&&!Gg(e)?String(e):e,Rd=(n,e="")=>{var t;return Dr(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pn;class Dy{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Pn&&(Pn.active?(this.parent=Pn,this.index=(Pn.scopes||(Pn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Pn;try{return Pn=this,e()}finally{Pn=t}}}on(){++this._on===1&&(this.prevScope=Pn,Pn=this)}off(){if(this._on>0&&--this._on===0){if(Pn===this)Pn=this.prevScope;else{let e=Pn;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Ly(){return Pn}let $t;const Pd=new WeakSet;class Yg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Pn&&(Pn.active?Pn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Pd.has(this)&&(Pd.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Kg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_0(this),Zg(this);const e=$t,t=or;$t=this,or=!0;try{return this.fn()}finally{Jg(this),$t=e,or=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)vp(e);this.deps=this.depsTail=void 0,_0(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Pd.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Bf(this)&&this.run()}get dirty(){return Bf(this)}}let qg=0,Ml,El;function Kg(n,e=!1){if(n.flags|=8,e){n.next=El,El=n;return}n.next=Ml,Ml=n}function _p(){qg++}function xp(){if(--qg>0)return;if(El){let e=El;for(El=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ml;){let e=Ml;for(Ml=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Zg(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Jg(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),vp(i),Iy(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Bf(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Qg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Qg(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Hl)||(n.globalVersion=Hl,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Bf(n))))return;n.flags|=2;const e=n.dep,t=$t,i=or;$t=n,or=!0;try{Zg(n);const r=n.fn(n._value);(e.version===0||vr(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{$t=t,or=i,Jg(n),n.flags&=-3}}function vp(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)vp(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Iy(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let or=!0;const e_=[];function as(){e_.push(or),or=!1}function ls(){const n=e_.pop();or=n===void 0?!0:n}function _0(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=$t;$t=void 0;try{e()}finally{$t=t}}}let Hl=0;class Ny{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class yp{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!$t||!or||$t===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==$t)t=this.activeLink=new Ny($t,this),$t.deps?(t.prevDep=$t.depsTail,$t.depsTail.nextDep=t,$t.depsTail=t):$t.deps=$t.depsTail=t,t_(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=$t.depsTail,t.nextDep=void 0,$t.depsTail.nextDep=t,$t.depsTail=t,$t.deps===t&&($t.deps=i)}return t}trigger(e){this.version++,Hl++,this.notify(e)}notify(e){_p();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{xp()}}}function t_(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)t_(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const zf=new WeakMap,Eo=Symbol(""),Vf=Symbol(""),Gl=Symbol("");function Vn(n,e,t){if(or&&$t){let i=zf.get(n);i||zf.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new yp),r.map=i,r.key=t),r.track()}}function qr(n,e,t,i,r,s){const o=zf.get(n);if(!o){Hl++;return}const a=l=>{l&&l.trigger()};if(_p(),e==="clear")o.forEach(a);else{const l=ot(n),c=l&&gp(t);if(l&&t==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===Gl||!Dr(f)&&f>=u)&&a(d)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Gl)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Eo)),_a(n)&&a(o.get(Vf)));break;case"delete":l||(a(o.get(Eo)),_a(n)&&a(o.get(Vf)));break;case"set":_a(n)&&a(o.get(Eo));break}}xp()}function Wo(n){const e=Ct(n);return e===n?e:(Vn(e,"iterate",Gl),Yi(n)?e:e.map(ar))}function dd(n){return Vn(n=Ct(n),"iterate",Gl),n}function gr(n,e){return cs(n)?Ia(To(n)?ar(e):e):ar(e)}const Uy={__proto__:null,[Symbol.iterator](){return Dd(this,Symbol.iterator,n=>gr(this,n))},concat(...n){return Wo(this).concat(...n.map(e=>ot(e)?Wo(e):e))},entries(){return Dd(this,"entries",n=>(n[1]=gr(this,n[1]),n))},every(n,e){return Or(this,"every",n,e,void 0,arguments)},filter(n,e){return Or(this,"filter",n,e,t=>t.map(i=>gr(this,i)),arguments)},find(n,e){return Or(this,"find",n,e,t=>gr(this,t),arguments)},findIndex(n,e){return Or(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Or(this,"findLast",n,e,t=>gr(this,t),arguments)},findLastIndex(n,e){return Or(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Or(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ld(this,"includes",n)},indexOf(...n){return Ld(this,"indexOf",n)},join(n){return Wo(this).join(n)},lastIndexOf(...n){return Ld(this,"lastIndexOf",n)},map(n,e){return Or(this,"map",n,e,void 0,arguments)},pop(){return Za(this,"pop")},push(...n){return Za(this,"push",n)},reduce(n,...e){return x0(this,"reduce",n,e)},reduceRight(n,...e){return x0(this,"reduceRight",n,e)},shift(){return Za(this,"shift")},some(n,e){return Or(this,"some",n,e,void 0,arguments)},splice(...n){return Za(this,"splice",n)},toReversed(){return Wo(this).toReversed()},toSorted(n){return Wo(this).toSorted(n)},toSpliced(...n){return Wo(this).toSpliced(...n)},unshift(...n){return Za(this,"unshift",n)},values(){return Dd(this,"values",n=>gr(this,n))}};function Dd(n,e,t){const i=dd(n),r=i[e]();return i!==n&&!Yi(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Fy=Array.prototype;function Or(n,e,t,i,r,s){const o=dd(n),a=o!==n&&!Yi(n),l=o[e];if(l!==Fy[e]){const d=l.apply(n,s);return a?ar(d):d}let c=t;o!==n&&(a?c=function(d,f){return t.call(this,gr(n,d),f,n)}:t.length>2&&(c=function(d,f){return t.call(this,d,f,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function x0(n,e,t,i){const r=dd(n),s=r!==n&&!Yi(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=gr(n,c)),t.call(this,c,gr(n,u),d,n)}):t.length>3&&(o=function(c,u,d){return t.call(this,c,u,d,n)}));const l=r[e](o,...i);return a?gr(n,l):l}function Ld(n,e,t){const i=Ct(n);Vn(i,"iterate",Gl);const r=i[e](...t);return(r===-1||r===!1)&&wp(t[0])?(t[0]=Ct(t[0]),i[e](...t)):r}function Za(n,e,t=[]){as(),_p();const i=Ct(n)[e].apply(n,t);return xp(),ls(),i}const Oy=pp("__proto__,__v_isRef,__isVue"),n_=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Dr));function ky(n){Dr(n)||(n=String(n));const e=Ct(this);return Vn(e,"has",n),e.hasOwnProperty(n)}class i_{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Yy:a_:s?o_:s_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ot(e);if(!r){let l;if(o&&(l=Uy[t]))return l;if(t==="hasOwnProperty")return ky}const a=Reflect.get(e,t,jn(e)?e:i);if((Dr(t)?n_.has(t):Oy(t))||(r||Vn(e,"get",t),s))return a;if(jn(a)){const l=o&&gp(t)?a:a.value;return r&&Lt(l)?Gf(l):l}return Lt(a)?r?Gf(a):xa(a):a}}class r_ extends i_{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=ot(e)&&gp(t);if(!this._isShallow){const c=cs(s);if(!Yi(i)&&!cs(i)&&(s=Ct(s),i=Ct(i)),!o&&jn(s)&&!jn(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:Dt(e,t),l=Reflect.set(e,t,i,jn(e)?e:r);return e===Ct(r)&&l&&(a?vr(i,s)&&qr(e,"set",t,i):qr(e,"add",t,i)),l}deleteProperty(e,t){const i=Dt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&qr(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Dr(t)||!n_.has(t))&&Vn(e,"has",t),i}ownKeys(e){return Vn(e,"iterate",ot(e)?"length":Eo),Reflect.ownKeys(e)}}class By extends i_{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const zy=new r_,Vy=new By,Hy=new r_(!0);const Hf=n=>n,yc=n=>Reflect.getPrototypeOf(n);function Gy(n,e,t){return function(...i){const r=this.__v_raw,s=Ct(r),o=_a(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Hf:e?Ia:ar;return!e&&Vn(s,"iterate",l?Vf:Eo),Tn(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function bc(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Wy(n,e){const t={get(r){const s=this.__v_raw,o=Ct(s),a=Ct(r);n||(vr(r,a)&&Vn(o,"get",r),Vn(o,"get",a));const{has:l}=yc(o),c=e?Hf:n?Ia:ar;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Vn(Ct(r),"iterate",Eo),r.size},has(r){const s=this.__v_raw,o=Ct(s),a=Ct(r);return n||(vr(r,a)&&Vn(o,"has",r),Vn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Ct(a),c=e?Hf:n?Ia:ar;return!n&&Vn(l,"iterate",Eo),a.forEach((u,d)=>r.call(s,c(u),c(d),o))}};return Tn(t,n?{add:bc("add"),set:bc("set"),delete:bc("delete"),clear:bc("clear")}:{add(r){const s=Ct(this),o=yc(s),a=Ct(r),l=!e&&!Yi(r)&&!cs(r)?a:r;return o.has.call(s,l)||vr(r,l)&&o.has.call(s,r)||vr(a,l)&&o.has.call(s,a)||(s.add(l),qr(s,"add",l,l)),this},set(r,s){!e&&!Yi(s)&&!cs(s)&&(s=Ct(s));const o=Ct(this),{has:a,get:l}=yc(o);let c=a.call(o,r);c||(r=Ct(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?vr(s,u)&&qr(o,"set",r,s):qr(o,"add",r,s),this},delete(r){const s=Ct(this),{has:o,get:a}=yc(s);let l=o.call(s,r);l||(r=Ct(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&qr(s,"delete",r,void 0),c},clear(){const r=Ct(this),s=r.size!==0,o=r.clear();return s&&qr(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Gy(r,n,e)}),t}function bp(n,e){const t=Wy(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Dt(t,r)&&r in i?t:i,r,s)}const $y={get:bp(!1,!1)},Xy={get:bp(!1,!0)},jy={get:bp(!0,!1)};const s_=new WeakMap,o_=new WeakMap,a_=new WeakMap,Yy=new WeakMap;function qy(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xa(n){return cs(n)?n:Sp(n,!1,zy,$y,s_)}function Ky(n){return Sp(n,!1,Hy,Xy,o_)}function Gf(n){return Sp(n,!0,Vy,jy,a_)}function Sp(n,e,t,i,r){if(!Lt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const o=qy(vy(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function To(n){return cs(n)?To(n.__v_raw):!!(n&&n.__v_isReactive)}function cs(n){return!!(n&&n.__v_isReadonly)}function Yi(n){return!!(n&&n.__v_isShallow)}function wp(n){return n?!!n.__v_raw:!1}function Ct(n){const e=n&&n.__v_raw;return e?Ct(e):n}function Zy(n){return!Dt(n,"__v_skip")&&Object.isExtensible(n)&&Wg(n,"__v_skip",!0),n}const ar=n=>Lt(n)?xa(n):n,Ia=n=>Lt(n)?Gf(n):n;function jn(n){return n?n.__v_isRef===!0:!1}function we(n){return Jy(n,!1)}function Jy(n,e){return jn(n)?n:new Qy(n,e)}class Qy{constructor(e,t){this.dep=new yp,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ct(e),this._value=t?e:ar(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Yi(e)||cs(e);e=i?e:Ct(e),vr(e,t)&&(this._rawValue=e,this._value=i?e:ar(e),this.dep.trigger())}}function Xe(n){return jn(n)?n.value:n}const e1={get:(n,e,t)=>e==="__v_raw"?n:Xe(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return jn(r)&&!jn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function l_(n){return To(n)?n:new Proxy(n,e1)}class t1{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new yp(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Hl-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&$t!==this)return Kg(this,!0),!0}get value(){const e=this.dep.track();return Qg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function n1(n,e,t=!1){let i,r;return ft(n)?i=n:(i=n.get,r=n.set),new t1(i,r,t)}const Sc={},Ru=new WeakMap;let uo;function i1(n,e=!1,t=uo){if(t){let i=Ru.get(t);i||Ru.set(t,i=[]),i.push(n)}}function r1(n,e,t=Ht){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=v=>r?v:Yi(v)||r===!1||r===0?Kr(v,1):Kr(v);let u,d,f,h,m=!1,x=!1;if(jn(n)?(d=()=>n.value,m=Yi(n)):To(n)?(d=()=>c(n),m=!0):ot(n)?(x=!0,m=n.some(v=>To(v)||Yi(v)),d=()=>n.map(v=>{if(jn(v))return v.value;if(To(v))return c(v);if(ft(v))return l?l(v,2):v()})):ft(n)?e?d=l?()=>l(n,2):n:d=()=>{if(f){as();try{f()}finally{ls()}}const v=uo;uo=u;try{return l?l(n,3,[h]):n(h)}finally{uo=v}}:d=Tr,e&&r){const v=d,A=r===!0?1/0:r;d=()=>Kr(v(),A)}const p=Ly(),g=()=>{u.stop(),p&&p.active&&mp(p.effects,u)};if(s&&e){const v=e;e=(...A)=>{const R=v(...A);return g(),R}}let b=x?new Array(n.length).fill(Sc):Sc;const y=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const A=u.run();if(v||r||m||(x?A.some((R,M)=>vr(R,b[M])):vr(A,b))){f&&f();const R=uo;uo=u;try{const M=[A,b===Sc?void 0:x&&b[0]===Sc?[]:b,h];b=A,l?l(e,3,M):e(...M)}finally{uo=R}}}else u.run()};return a&&a(y),u=new Yg(d),u.scheduler=o?()=>o(y,!1):y,h=v=>i1(v,!1,u),f=u.onStop=()=>{const v=Ru.get(u);if(v){if(l)l(v,4);else for(const A of v)A();Ru.delete(u)}},e?i?y(!0):b=u.run():o?o(y.bind(null,!0),!0):u.run(),g.pause=u.pause.bind(u),g.resume=u.resume.bind(u),g.stop=g,g}function Kr(n,e=1/0,t){if(e<=0||!Lt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,jn(n))Kr(n.value,e,t);else if(ot(n))for(let i=0;i<n.length;i++)Kr(n[i],e,t);else if(od(n)||_a(n))n.forEach(i=>{Kr(i,e,t)});else if(Gg(n)){for(const i in n)Kr(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Kr(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hc(n,e,t,i){try{return i?n(...i):n()}catch(r){fd(r,e,t)}}function Zi(n,e,t,i){if(ft(n)){const r=hc(n,e,t,i);return r&&Vg(r)&&r.catch(s=>{fd(s,e,t)}),r}if(ot(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Zi(n[s],e,t,i));return r}}function fd(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ht;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(s){as(),hc(s,null,10,[n,l,c]),ls();return}}s1(n,t,r,i,o)}function s1(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const ri=[];let hr=-1;const va=[];let Cs=null,ua=0;const c_=Promise.resolve();let Pu=null;function Lr(n){const e=Pu||c_;return n?e.then(this?n.bind(this):n):e}function o1(n){let e=hr+1,t=ri.length;for(;e<t;){const i=e+t>>>1,r=ri[i],s=Wl(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Mp(n){if(!(n.flags&1)){const e=Wl(n),t=ri[ri.length-1];!t||!(n.flags&2)&&e>=Wl(t)?ri.push(n):ri.splice(o1(e),0,n),n.flags|=1,u_()}}function u_(){Pu||(Pu=c_.then(f_))}function a1(n){if(!ot(n))Cs&&n.id===-1?Cs.splice(ua+1,0,n):n.flags&1||(va.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)va.push(n[e]);u_()}function v0(n,e,t=hr+1){for(;t<ri.length;t++){const i=ri[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;ri.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function d_(n){if(va.length){const e=[...new Set(va)].sort((t,i)=>Wl(t)-Wl(i));if(va.length=0,Cs){for(let t=0;t<e.length;t++)Cs.push(e[t]);return}for(Cs=e,ua=0;ua<Cs.length;ua++){const t=Cs[ua];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Cs=null,ua=0}}const Wl=n=>n.id==null?n.flags&2?-1:1/0:n.id;function f_(n){try{for(hr=0;hr<ri.length;hr++){const e=ri[hr];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),hc(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;hr<ri.length;hr++){const e=ri[hr];e&&(e.flags&=-2)}hr=-1,ri.length=0,d_(),Pu=null,(ri.length||va.length)&&f_()}}let Ri=null,h_=null;function Du(n){const e=Ri;return Ri=n,h_=n&&n.type.__scopeId||null,e}function Uo(n,e=Ri,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Uu(-1);const s=Du(e),o=Ao.length;let a;try{a=n(...r)}finally{for(let l=Ao.length;l>o;l--)H_();Du(s),i._d&&Uu(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function wc(n,e){if(Ri===null)return n;const t=xd(Ri),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=Ht]=e[r];s&&(ft(s)&&(s={mounted:s,updated:s}),s.deep&&Kr(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Js(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(as(),Zi(l,t,8,[n.el,a,n,e]),ls())}}function l1(n,e){if(Hn){let t=Hn.provides;const i=Hn.parent&&Hn.parent.provides;i===t&&(t=Hn.provides=Object.create(i)),t[n]=e}}function Tl(n,e,t=!1){const i=$_();if(i||ya){let r=ya?ya._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ft(e)?e.call(i&&i.proxy):e}}const c1=Symbol.for("v-scx"),u1=()=>Tl(c1);function li(n,e,t){return p_(n,e,t)}function p_(n,e,t=Ht){const{immediate:i,deep:r,flush:s,once:o}=t,a=Tn({},t),l=e&&i||!e&&s!=="post";let c;if(Yl){if(s==="sync"){const h=u1();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Tr,h.resume=Tr,h.pause=Tr,h}}const u=Hn;a.call=(h,m,x)=>Zi(h,u,m,x);let d=!1;s==="post"?a.scheduler=h=>{di(h,u&&u.suspense)}:s!=="sync"&&(d=!0,a.scheduler=(h,m)=>{m?h():Mp(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=r1(n,e,a);return Yl&&(c?c.push(f):l&&f()),f}function d1(n,e,t){const i=this.proxy,r=Zt(n)?n.includes(".")?m_(i,n):()=>i[n]:n.bind(i,i);let s;ft(e)?s=e:(s=e.handler,t=e);const o=pc(this),a=p_(r,s.bind(i),t);return o(),a}function m_(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const f1=Symbol("_vte"),hd=n=>n.__isTeleport,Vi=Symbol("_leaveCb"),Ja=Symbol("_enterCb");function h1(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return yn(()=>{n.isMounted=!0}),w_(()=>{n.isUnmounting=!0}),n}const ki=[Function,Array],g_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ki,onEnter:ki,onAfterEnter:ki,onEnterCancelled:ki,onBeforeLeave:ki,onLeave:ki,onAfterLeave:ki,onLeaveCancelled:ki,onBeforeAppear:ki,onAppear:ki,onAfterAppear:ki,onAppearCancelled:ki},__=n=>{const e=n.subTree;return e.component?__(e.component):e},p1={name:"BaseTransition",props:g_,setup(n,{slots:e}){const t=$_(),i=h1();return()=>{const r=e.default&&y_(e.default(),!0),s=r&&r.length?x_(r):t.subTree?qt():void 0;if(!s)return;const o=Ct(n),{mode:a}=o;if(i.isLeaving)return Id(s);const l=Lu(s);if(!l)return Id(s);let c=Wf(l,o,i,t,d=>c=d);l.type!==si&&$l(l,c);let u=t.subTree&&Lu(t.subTree);if(u&&u.type!==si&&!go(u,l)&&__(t).type!==si){let d=Wf(u,o,i,t);if($l(u,d),a==="out-in"&&l.type!==si)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,u=void 0},Id(s);a==="in-out"&&l.type!==si?d.delayLeave=(f,h,m)=>{const x=v_(i,u);x[String(u.key)]=u,f[Vi]=()=>{h(),f[Vi]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{m(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function x_(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==si){e=t;break}}return e}const m1=p1;function v_(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Wf(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:x,onBeforeAppear:p,onAppear:g,onAfterAppear:b,onAppearCancelled:y}=e,v=String(n.key),A=v_(t,n),R=(T,U)=>{T&&Zi(T,i,9,U)},M=(T,U)=>{const I=U[1];R(T,U),ot(T)?T.every(L=>L.length<=1)&&I():T.length<=1&&I()},S={mode:o,persisted:a,beforeEnter(T){let U=l;if(!t.isMounted)if(s)U=p||l;else return;T[Vi]&&T[Vi](!0);const I=A[v];I&&go(n,I)&&I.el[Vi]&&I.el[Vi](),R(U,[T])},enter(T){if(A[v]===n)return;let U=c,I=u,L=d;if(!t.isMounted)if(s)U=g||c,I=b||u,L=y||d;else return;let G=!1;T[Ja]=V=>{G||(G=!0,V?R(L,[T]):R(I,[T]),S.delayedLeave&&S.delayedLeave(),T[Ja]=void 0)};const B=T[Ja].bind(null,!1);U?M(U,[T,B]):B()},leave(T,U){const I=String(n.key);if(T[Ja]&&T[Ja](!0),t.isUnmounting)return U();R(f,[T]);let L=!1;T[Vi]=B=>{L||(L=!0,U(),B?R(x,[T]):R(m,[T]),T[Vi]=void 0,A[I]===n&&delete A[I])};const G=T[Vi].bind(null,!1);A[I]=n,h?M(h,[T,G]):G()},clone(T){const U=Wf(T,e,t,i,r);return r&&r(U),U}};return S}function Id(n){if(pd(n))return n=Hs(n),n.children=null,n}function Lu(n){if(!pd(n))return hd(n.type)&&n.children?x_(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&ft(t.default))return t.default()}}function $l(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;$l(hd(t.type)&&Lu(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function y_(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===We?(o.patchFlag&128&&r++,i=i.concat(y_(o.children,e,a))):(e||o.type!==si)&&i.push(a!=null?Hs(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function b_(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function y0(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Iu=new WeakMap;function Al(n,e,t,i,r=!1){if(ot(n)){n.forEach((x,p)=>Al(x,e&&(ot(e)?e[p]:e),t,i,r));return}if(Cl(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Al(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?xd(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Ht?a.refs={}:a.refs,d=a.setupState,f=Ct(d),h=d===Ht?zg:x=>y0(u,x)?!1:Dt(f,x),m=(x,p)=>!(p&&y0(u,p));if(c!=null&&c!==l){if(b0(e),Zt(c))u[c]=null,h(c)&&(d[c]=null);else if(jn(c)){const x=e;m(c,x.k)&&(c.value=null),x.k&&(u[x.k]=null)}}if(ft(l))hc(l,a,12,[o,u]);else{const x=Zt(l),p=jn(l);if(x||p){const g=()=>{if(n.f){const b=x?h(l)?d[l]:u[l]:m()||!n.k?l.value:u[n.k];if(r)ot(b)&&mp(b,s);else if(ot(b))b.includes(s)||b.push(s);else if(x)u[l]=[s],h(l)&&(d[l]=u[l]);else{const y=[s];m(l,n.k)&&(l.value=y),n.k&&(u[n.k]=y)}}else x?(u[l]=o,h(l)&&(d[l]=o)):p&&(m(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const b=()=>{g(),Iu.delete(n)};b.id=-1,Iu.set(n,b),di(b,t)}else b0(n),g()}}}function b0(n){const e=Iu.get(n);e&&(e.flags|=8,Iu.delete(n))}ud().requestIdleCallback;ud().cancelIdleCallback;const Cl=n=>!!n.type.__asyncLoader,pd=n=>n.type.__isKeepAlive;function g1(n,e){S_(n,"a",e)}function _1(n,e){S_(n,"da",e)}function S_(n,e,t=Hn){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(md(e,i,t),t){let r=t.parent;for(;r&&r.parent;)pd(r.parent.vnode)&&x1(i,e,t,r),r=r.parent}}function x1(n,e,t,i){const r=md(e,n,i,!0);Cn(()=>{mp(i[e],r)},t)}function md(n,e,t=Hn,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{as();const a=pc(t),l=Zi(e,t,n,o);return a(),ls(),l});return i?r.unshift(s):r.push(s),s}}const ms=n=>(e,t=Hn)=>{(!Yl||n==="sp")&&md(n,(...i)=>e(...i),t)},v1=ms("bm"),yn=ms("m"),y1=ms("bu"),b1=ms("u"),w_=ms("bum"),Cn=ms("um"),S1=ms("sp"),w1=ms("rtg"),M1=ms("rtc");function E1(n,e=Hn){md("ec",n,e)}const T1="components",M_=Symbol.for("v-ndc");function A1(n){return Zt(n)?C1(T1,n,!1)||n:n||M_}function C1(n,e,t=!0,i=!1){const r=Ri||Hn;if(r){const s=r.type;{const a=db(s,!1);if(a&&(a===e||a===ai(e)||a===ld(ai(e))))return s}const o=S0(r[n]||s[n],e)||S0(r.appContext[n],e);return!o&&i?s:o}}function S0(n,e){return n&&(n[e]||n[ai(e)]||n[ld(ai(e))])}function it(n,e,t,i){let r;const s=t,o=ot(n);if(o||Zt(n)){const a=o&&To(n);let l=!1,c=!1;a&&(l=!Yi(n),c=cs(n),n=dd(n)),r=new Array(n.length);for(let u=0,d=n.length;u<d;u++)r[u]=e(l?c?Ia(ar(n[u])):ar(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(Lt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const $f=n=>n?X_(n)?xd(n):$f(n.parent):null,Rl=Tn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>$f(n.parent),$root:n=>$f(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>T_(n),$forceUpdate:n=>n.f||(n.f=()=>{Mp(n.update)}),$nextTick:n=>n.n||(n.n=Lr.bind(n.proxy)),$watch:n=>d1.bind(n)}),Nd=(n,e)=>n!==Ht&&!n.__isScriptSetup&&Dt(n,e),R1={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Nd(i,e))return o[e]=1,i[e];if(r!==Ht&&Dt(r,e))return o[e]=2,r[e];if(Dt(s,e))return o[e]=3,s[e];if(t!==Ht&&Dt(t,e))return o[e]=4,t[e];Xf&&(o[e]=0)}}const c=Rl[e];let u,d;if(c)return e==="$attrs"&&Vn(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Ht&&Dt(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,Dt(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Nd(r,e)?(r[e]=t,!0):i!==Ht&&Dt(i,e)?(i[e]=t,!0):Dt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==Ht&&a[0]!=="$"&&Dt(n,a)||Nd(e,a)||Dt(s,a)||Dt(i,a)||Dt(Rl,a)||Dt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Dt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function w0(n){return ot(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Xf=!0;function P1(n){const e=T_(n),t=n.proxy,i=n.ctx;Xf=!1,e.beforeCreate&&M0(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:m,activated:x,deactivated:p,beforeDestroy:g,beforeUnmount:b,destroyed:y,unmounted:v,render:A,renderTracked:R,renderTriggered:M,errorCaptured:S,serverPrefetch:T,expose:U,inheritAttrs:I,components:L,directives:G,filters:B}=e;if(c&&D1(c,i,null),o)for(const k in o){const Z=o[k];ft(Z)&&(i[k]=Z.bind(t))}if(r){const k=r.call(t,t);Lt(k)&&(n.data=xa(k))}if(Xf=!0,s)for(const k in s){const Z=s[k],j=ft(Z)?Z.bind(t,t):ft(Z.get)?Z.get.bind(t,t):Tr,F=!ft(Z)&&ft(Z.set)?Z.set.bind(t):Tr,ue=Xt({get:j,set:F});Object.defineProperty(i,k,{enumerable:!0,configurable:!0,get:()=>ue.value,set:ge=>ue.value=ge})}if(a)for(const k in a)E_(a[k],i,t,k);if(l){const k=ft(l)?l.call(t):l;Reflect.ownKeys(k).forEach(Z=>{l1(Z,k[Z])})}u&&M0(u,n,"c");function $(k,Z){ot(Z)?Z.forEach(j=>k(j.bind(t))):Z&&k(Z.bind(t))}if($(v1,d),$(yn,f),$(y1,h),$(b1,m),$(g1,x),$(_1,p),$(E1,S),$(M1,R),$(w1,M),$(w_,b),$(Cn,v),$(S1,T),ot(U))if(U.length){const k=n.exposed||(n.exposed={});U.forEach(Z=>{Object.defineProperty(k,Z,{get:()=>t[Z],set:j=>t[Z]=j,enumerable:!0})})}else n.exposed||(n.exposed={});A&&n.render===Tr&&(n.render=A),I!=null&&(n.inheritAttrs=I),L&&(n.components=L),G&&(n.directives=G),T&&b_(n)}function D1(n,e,t=Tr){ot(n)&&(n=jf(n));for(const i in n){const r=n[i];let s;Lt(r)?"default"in r?s=Tl(r.from||i,r.default,!0):s=Tl(r.from||i):s=Tl(r),jn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function M0(n,e,t){Zi(ot(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function E_(n,e,t,i){let r=i.includes(".")?m_(t,i):()=>t[i];if(Zt(n)){const s=e[n];ft(s)&&li(r,s)}else if(ft(n))li(r,n.bind(t));else if(Lt(n))if(ot(n))n.forEach(s=>E_(s,e,t,i));else{const s=ft(n.handler)?n.handler.bind(t):e[n.handler];ft(s)&&li(r,s,n)}}function T_(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Nu(l,c,o,!0)),Nu(l,e,o)),Lt(e)&&s.set(e,l),l}function Nu(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Nu(n,s,t,!0),r&&r.forEach(o=>Nu(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=L1[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const L1={data:E0,props:T0,emits:T0,methods:fl,computed:fl,beforeCreate:Jn,created:Jn,beforeMount:Jn,mounted:Jn,beforeUpdate:Jn,updated:Jn,beforeDestroy:Jn,beforeUnmount:Jn,destroyed:Jn,unmounted:Jn,activated:Jn,deactivated:Jn,errorCaptured:Jn,serverPrefetch:Jn,components:fl,directives:fl,watch:N1,provide:E0,inject:I1};function E0(n,e){return e?n?function(){return Tn(ft(n)?n.call(this,this):n,ft(e)?e.call(this,this):e)}:e:n}function I1(n,e){return fl(jf(n),jf(e))}function jf(n){if(ot(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Jn(n,e){return n?[...new Set([].concat(n,e))]:e}function fl(n,e){return n?Tn(Object.create(null),n,e):e}function T0(n,e){return n?ot(n)&&ot(e)?[...new Set([...n,...e])]:Tn(Object.create(null),w0(n),w0(e??{})):e}function N1(n,e){if(!n)return e;if(!e)return n;const t=Tn(Object.create(null),n);for(const i in e)t[i]=Jn(n[i],e[i]);return t}function A_(){return{app:null,config:{isNativeTag:zg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let U1=0;function F1(n,e){return function(i,r=null){ft(i)||(i=Tn({},i)),r!=null&&!Lt(r)&&(r=null);const s=A_(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:U1++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:hb,get config(){return s.config},set config(u){},use(u,...d){return o.has(u)||(u&&ft(u.install)?(o.add(u),u.install(c,...d)):ft(u)&&(o.add(u),u(c,...d))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,d){return d?(s.components[u]=d,c):s.components[u]},directive(u,d){return d?(s.directives[u]=d,c):s.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||et(i,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),n(h,u,f),l=!0,c._container=u,u.__vue_app__=c,xd(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Zi(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return s.provides[u]=d,c},runWithContext(u){const d=ya;ya=c;try{return u()}finally{ya=d}}};return c}}let ya=null;const O1=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ai(e)}Modifiers`]||n[`${Ys(e)}Modifiers`];function k1(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ht;let r=t;const s=e.startsWith("update:"),o=s&&O1(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Zt(u)?u.trim():u)),o.number&&(r=t.map(cd)));let a,l=i[a=Cd(e)]||i[a=Cd(ai(e))];!l&&s&&(l=i[a=Cd(Ys(e))]),l&&Zi(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Zi(c,n,6,r)}}const B1=new WeakMap;function C_(n,e,t=!1){const i=t?B1:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!ft(n)){const l=c=>{const u=C_(c,e,!0);u&&(a=!0,Tn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(Lt(n)&&i.set(n,null),null):(ot(s)?s.forEach(l=>o[l]=null):Tn(o,s),Lt(n)&&i.set(n,o),o)}function gd(n,e){return!n||!rd(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Dt(n,e[0].toLowerCase()+e.slice(1))||Dt(n,Ys(e))||Dt(n,e))}function A0(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:m,inheritAttrs:x}=n,p=Du(n);let g,b;try{if(t.shapeFlag&4){const v=r||i,A=v;g=_r(c.call(A,v,u,d,h,f,m)),b=a}else{const v=e;g=_r(v.length>1?v(d,{attrs:a,slots:o,emit:l}):v(d,null)),b=e.props?a:z1(a)}}catch(v){Ao.length=0,fd(v,n,1),g=et(si)}let y=g;if(b&&x!==!1){const v=Object.keys(b),{shapeFlag:A}=y;v.length&&A&7&&(s&&v.some(sd)&&(b=V1(b,s)),y=Hs(y,b,!1,!0))}if(t.dirs&&(y=Hs(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition){const v=hd(y.type)&&Lu(y)||y;$l(v,t.transition)}return g=y,Du(p),g}const z1=n=>{let e;for(const t in n)(t==="class"||t==="style"||rd(t))&&((e||(e={}))[t]=n[t]);return e},V1=(n,e)=>{const t={};for(const i in n)(!sd(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function H1(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?C0(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(R_(o,i,f)&&!gd(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?C0(i,o,c):!0:!!o;return!1}function C0(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(R_(e,n,s)&&!gd(t,s))return!0}return!1}function R_(n,e,t){const i=n[t],r=e[t];return t==="style"&&Lt(i)&&Lt(r)?!fc(i,r):i!==r}function G1({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const P_={},D_=()=>Object.create(P_),L_=n=>Object.getPrototypeOf(n)===P_;function W1(n,e,t,i=!1){const r={},s=D_();n.propsDefaults=Object.create(null),I_(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Ky(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function $1(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Ct(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(gd(n.emitsOptions,f))continue;const h=e[f];if(l)if(Dt(s,f))h!==s[f]&&(s[f]=h,c=!0);else{const m=ai(f);r[m]=Yf(l,a,m,h,n,!1)}else h!==s[f]&&(s[f]=h,c=!0)}}}else{I_(n,e,r,s)&&(c=!0);let u;for(const d in a)(!e||!Dt(e,d)&&((u=Ys(d))===d||!Dt(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(r[d]=Yf(l,a,d,void 0,n,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!Dt(e,d))&&(delete s[d],c=!0)}c&&qr(n.attrs,"set","")}function I_(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(wl(l))continue;const c=e[l];let u;r&&Dt(r,u=ai(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:gd(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Ct(t),c=a||Ht;for(let u=0;u<s.length;u++){const d=s[u];t[d]=Yf(r,l,d,c[d],n,!Dt(c,d))}}return o}function Yf(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Dt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ft(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=pc(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ys(t))&&(i=!0))}return i}const X1=new WeakMap;function N_(n,e,t=!1){const i=t?X1:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!ft(n)){const u=d=>{l=!0;const[f,h]=N_(d,e,!0);Tn(o,f),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Lt(n)&&i.set(n,ga),ga;if(ot(s))for(let u=0;u<s.length;u++){const d=ai(s[u]);R0(d)&&(o[d]=Ht)}else if(s)for(const u in s){const d=ai(u);if(R0(d)){const f=s[u],h=o[d]=ot(f)||ft(f)?{type:f}:Tn({},f),m=h.type;let x=!1,p=!0;if(ot(m))for(let g=0;g<m.length;++g){const b=m[g],y=ft(b)&&b.name;if(y==="Boolean"){x=!0;break}else y==="String"&&(p=!1)}else x=ft(m)&&m.name==="Boolean";h[0]=x,h[1]=p,(x||Dt(h,"default"))&&a.push(d)}}const c=[o,a];return Lt(n)&&i.set(n,c),c}function R0(n){return n[0]!=="$"&&!wl(n)}const Ep=n=>n==="_"||n==="_ctx"||n==="$stable",Tp=n=>ot(n)?n.map(_r):[_r(n)],j1=(n,e,t)=>{if(e._n)return e;const i=Uo((...r)=>Tp(e(...r)),t);return i._c=!1,i},U_=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Ep(r))continue;const s=n[r];if(ft(s))e[r]=j1(r,s,i);else if(s!=null){const o=Tp(s);e[r]=()=>o}}},F_=(n,e)=>{const t=Tp(e);n.slots.default=()=>t},O_=(n,e,t)=>{for(const i in e)(t||!Ep(i))&&(n[i]=e[i])},Y1=(n,e,t)=>{const i=n.slots=D_();if(n.vnode.shapeFlag&32){const r=e._;r?(O_(i,e,t),t&&Wg(i,"_",r,!0)):U_(e,i)}else e&&F_(n,e)},q1=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Ht;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:O_(r,e,t):(s=!e.$stable,U_(e,r)),o=e}else e&&(F_(n,e),o={default:1});if(s)for(const a in r)!Ep(a)&&o[a]==null&&delete r[a]},di=eb;function K1(n){return Z1(n)}function Z1(n,e){const t=ud();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Tr,insertStaticContent:m}=n,x=(E,C,H,ne=null,q=null,O=null,N=void 0,xe=null,he=!!C.dynamicChildren)=>{if(E===C)return;E&&!go(E,C)&&(ne=fe(E),ge(E,q,O,!0),E=null),C.patchFlag===-2&&(he=!1,C.dynamicChildren=null);const{type:re,ref:me,shapeFlag:P}=C;switch(re){case _d:p(E,C,H,ne);break;case si:g(E,C,H,ne);break;case du:E==null&&b(C,H,ne,N);break;case We:L(E,C,H,ne,q,O,N,xe,he);break;default:P&1?A(E,C,H,ne,q,O,N,xe,he):P&6?G(E,C,H,ne,q,O,N,xe,he):(P&64||P&128)&&re.process(E,C,H,ne,q,O,N,xe,he,Ce)}me!=null&&q?Al(me,E&&E.ref,O,C||E,!C):me==null&&E&&E.ref!=null&&Al(E.ref,null,O,E,!0)},p=(E,C,H,ne)=>{if(E==null)i(C.el=a(C.children),H,ne);else{const q=C.el=E.el;C.children!==E.children&&c(q,C.children)}},g=(E,C,H,ne)=>{E==null?i(C.el=l(C.children||""),H,ne):C.el=E.el},b=(E,C,H,ne)=>{[E.el,E.anchor]=m(E.children,C,H,ne,E.el,E.anchor)},y=({el:E,anchor:C},H,ne)=>{let q;for(;E&&E!==C;)q=f(E),i(E,H,ne),E=q;i(C,H,ne)},v=({el:E,anchor:C})=>{let H;for(;E&&E!==C;)H=f(E),r(E),E=H;r(C)},A=(E,C,H,ne,q,O,N,xe,he)=>{if(C.type==="svg"?N="svg":C.type==="math"&&(N="mathml"),E==null)R(C,H,ne,q,O,N,xe,he);else{const re=E.el&&E.el._isVueCE?E.el:null;try{re&&re._beginPatch(),T(E,C,q,O,N,xe,he)}finally{re&&re._endPatch()}}},R=(E,C,H,ne,q,O,N,xe)=>{let he,re;const{props:me,shapeFlag:P,transition:w,dirs:z}=E;if(he=E.el=o(E.type,O,me&&me.is,me),P&8?u(he,E.children):P&16&&S(E.children,he,null,ne,q,Ud(E,O),N,xe),z&&Js(E,null,ne,"created"),M(he,E,E.scopeId,N,ne),me){for(const te in me)te!=="value"&&!wl(te)&&s(he,te,null,me[te],O,ne);"value"in me&&s(he,"value",null,me.value,O),(re=me.onVnodeBeforeMount)&&ur(re,ne,E)}z&&Js(E,null,ne,"beforeMount");const J=J1(q,w);J&&w.beforeEnter(he),i(he,C,H),((re=me&&me.onVnodeMounted)||J||z)&&di(()=>{try{re&&ur(re,ne,E),J&&w.enter(he),z&&Js(E,null,ne,"mounted")}finally{}},q)},M=(E,C,H,ne,q)=>{if(H&&h(E,H),ne)for(let O=0;O<ne.length;O++)h(E,ne[O]);if(q){let O=q.subTree;if(C===O||V_(O.type)&&(O.ssContent===C||O.ssFallback===C)){const N=q.vnode;M(E,N,N.scopeId,N.slotScopeIds,q.parent)}}},S=(E,C,H,ne,q,O,N,xe,he=0)=>{for(let re=he;re<E.length;re++){const me=E[re]=xe?jr(E[re]):_r(E[re]);x(null,me,C,H,ne,q,O,N,xe)}},T=(E,C,H,ne,q,O,N)=>{const xe=C.el=E.el;let{patchFlag:he,dynamicChildren:re,dirs:me}=C;he|=E.patchFlag&16;const P=E.props||Ht,w=C.props||Ht;let z;if(H&&Qs(H,!1),(z=w.onVnodeBeforeUpdate)&&ur(z,H,C,E),me&&Js(C,E,H,"beforeUpdate"),H&&Qs(H,!0),re&&(!E.dynamicChildren||E.dynamicChildren.length!==re.length)&&(he=0,N=!1,re=null),(P.innerHTML&&w.innerHTML==null||P.textContent&&w.textContent==null)&&u(xe,""),re?U(E.dynamicChildren,re,xe,H,ne,Ud(C,q),O):N||Z(E,C,xe,null,H,ne,Ud(C,q),O,!1),he>0){if(he&16)I(xe,P,w,H,q);else if(he&2&&P.class!==w.class&&s(xe,"class",null,w.class,q),he&4&&s(xe,"style",P.style,w.style,q),he&8){const J=C.dynamicProps;for(let te=0;te<J.length;te++){const K=J[te],Me=P[K],ve=w[K];(ve!==Me||K==="value")&&s(xe,K,Me,ve,q,H)}}he&1&&E.children!==C.children&&u(xe,C.children)}else!N&&re==null&&I(xe,P,w,H,q);((z=w.onVnodeUpdated)||me)&&di(()=>{z&&ur(z,H,C,E),me&&Js(C,E,H,"updated")},ne)},U=(E,C,H,ne,q,O,N)=>{for(let xe=0;xe<C.length;xe++){const he=E[xe],re=C[xe],me=he.el&&(he.type===We||!go(he,re)||he.shapeFlag&198)?d(he.el):H;x(he,re,me,null,ne,q,O,N,!0)}},I=(E,C,H,ne,q)=>{if(C!==H){if(C!==Ht)for(const O in C)!wl(O)&&!(O in H)&&s(E,O,C[O],null,q,ne);for(const O in H){if(wl(O))continue;const N=H[O],xe=C[O];N!==xe&&O!=="value"&&s(E,O,xe,N,q,ne)}"value"in H&&s(E,"value",C.value,H.value,q)}},L=(E,C,H,ne,q,O,N,xe,he)=>{const re=C.el=E?E.el:a(""),me=C.anchor=E?E.anchor:a("");let{patchFlag:P,dynamicChildren:w,slotScopeIds:z}=C;z&&(xe=xe?xe.concat(z):z),E==null?(i(re,H,ne),i(me,H,ne),S(C.children||[],H,me,q,O,N,xe,he)):P>0&&P&64&&w&&E.dynamicChildren&&E.dynamicChildren.length===w.length?(U(E.dynamicChildren,w,H,q,O,N,xe),(C.key!=null||q&&C===q.subTree)&&k_(E,C,!0)):Z(E,C,H,me,q,O,N,xe,he)},G=(E,C,H,ne,q,O,N,xe,he)=>{C.slotScopeIds=xe,E==null?C.shapeFlag&512?q.ctx.activate(C,H,ne,N,he):B(C,H,ne,q,O,N,he):V(E,C,he)},B=(E,C,H,ne,q,O,N)=>{const xe=E.component=ob(E,ne,q);if(pd(E)&&(xe.ctx.renderer=Ce),ab(xe,!1,N),xe.asyncDep){if(q&&q.registerDep(xe,$,N),!E.el){const he=xe.subTree=et(si);g(null,he,C,H),E.placeholder=he.el}}else $(xe,E,C,H,q,O,N)},V=(E,C,H)=>{const ne=C.component=E.component;if(H1(E,C,H))if(ne.asyncDep&&!ne.asyncResolved){k(ne,C,H);return}else ne.next=C,ne.update();else C.el=E.el,ne.vnode=C},$=(E,C,H,ne,q,O,N)=>{const xe=()=>{if(E.isMounted){let{next:P,bu:w,u:z,parent:J,vnode:te}=E;{const Le=B_(E);if(Le){P&&(P.el=te.el,k(E,P,N)),Le.asyncDep.then(()=>{di(()=>{E.isUnmounted||re()},q)});return}}let K=P,Me;Qs(E,!1),P?(P.el=te.el,k(E,P,N)):P=te,w&&uu(w),(Me=P.props&&P.props.onVnodeBeforeUpdate)&&ur(Me,J,P,te),Qs(E,!0);const ve=A0(E),He=E.subTree;E.subTree=ve,x(He,ve,d(He.el),fe(He),E,q,O),P.el=ve.el,K===null&&G1(E,ve.el),z&&di(z,q),(Me=P.props&&P.props.onVnodeUpdated)&&di(()=>ur(Me,J,P,te),q)}else{let P;const{el:w,props:z}=C,{bm:J,m:te,parent:K,root:Me,type:ve}=E,He=Cl(C);Qs(E,!1),J&&uu(J),!He&&(P=z&&z.onVnodeBeforeMount)&&ur(P,K,C),Qs(E,!0);{Me.ce&&Me.ce._hasShadowRoot()&&Me.ce._injectChildStyle(ve,E.parent?E.parent.type:void 0);const Le=E.subTree=A0(E);x(null,Le,H,ne,E,q,O),C.el=Le.el}if(te&&di(te,q),!He&&(P=z&&z.onVnodeMounted)){const Le=C;di(()=>ur(P,K,Le),q)}(C.shapeFlag&256||K&&Cl(K.vnode)&&K.vnode.shapeFlag&256)&&E.a&&di(E.a,q),E.isMounted=!0,C=H=ne=null}};E.scope.on();const he=E.effect=new Yg(xe);E.scope.off();const re=E.update=he.run.bind(he),me=E.job=he.runIfDirty.bind(he);me.i=E,me.id=E.uid,he.scheduler=()=>Mp(me),Qs(E,!0),re()},k=(E,C,H)=>{C.component=E;const ne=E.vnode.props;E.vnode=C,E.next=null,$1(E,C.props,ne,H),q1(E,C.children,H),as(),v0(E),ls()},Z=(E,C,H,ne,q,O,N,xe,he=!1)=>{const re=E&&E.children,me=E?E.shapeFlag:0,P=C.children,{patchFlag:w,shapeFlag:z}=C;if(w>0){if(w&128){F(re,P,H,ne,q,O,N,xe,he);return}else if(w&256){j(re,P,H,ne,q,O,N,xe,he);return}}z&8?(me&16&&ee(re,q,O),P!==re&&u(H,P)):me&16?z&16?F(re,P,H,ne,q,O,N,xe,he):ee(re,q,O,!0):(me&8&&u(H,""),z&16&&S(P,H,ne,q,O,N,xe,he))},j=(E,C,H,ne,q,O,N,xe,he)=>{E=E||ga,C=C||ga;const re=E.length,me=C.length,P=Math.min(re,me);let w;for(w=0;w<P;w++){const z=C[w]=he?jr(C[w]):_r(C[w]);x(E[w],z,H,null,q,O,N,xe,he)}re>me?ee(E,q,O,!0,!1,P):S(C,H,ne,q,O,N,xe,he,P)},F=(E,C,H,ne,q,O,N,xe,he)=>{let re=0;const me=C.length;let P=E.length-1,w=me-1;for(;re<=P&&re<=w;){const z=E[re],J=C[re]=he?jr(C[re]):_r(C[re]);if(go(z,J))x(z,J,H,null,q,O,N,xe,he);else break;re++}for(;re<=P&&re<=w;){const z=E[P],J=C[w]=he?jr(C[w]):_r(C[w]);if(go(z,J))x(z,J,H,null,q,O,N,xe,he);else break;P--,w--}if(re>P){if(re<=w){const z=w+1,J=z<me?C[z].el:ne;for(;re<=w;)x(null,C[re]=he?jr(C[re]):_r(C[re]),H,J,q,O,N,xe,he),re++}}else if(re>w)for(;re<=P;)ge(E[re],q,O,!0),re++;else{const z=re,J=re,te=new Map;for(re=J;re<=w;re++){const De=C[re]=he?jr(C[re]):_r(C[re]);De.key!=null&&te.set(De.key,re)}let K,Me=0;const ve=w-J+1;let He=!1,Le=0;const be=new Array(ve);for(re=0;re<ve;re++)be[re]=0;for(re=z;re<=P;re++){const De=E[re];if(Me>=ve){ge(De,q,O,!0);continue}let Fe;if(De.key!=null)Fe=te.get(De.key);else for(K=J;K<=w;K++)if(be[K-J]===0&&go(De,C[K])){Fe=K;break}Fe===void 0?ge(De,q,O,!0):(be[Fe-J]=re+1,Fe>=Le?Le=Fe:He=!0,x(De,C[Fe],H,null,q,O,N,xe,he),Me++)}const Ee=He?Q1(be):ga;for(K=Ee.length-1,re=ve-1;re>=0;re--){const De=J+re,Fe=C[De],Ie=C[De+1],st=De+1<me?Ie.el||z_(Ie):ne;be[re]===0?x(null,Fe,H,st,q,O,N,xe,he):He&&(K<0||re!==Ee[K]?ue(Fe,H,st,2):K--)}}},ue=(E,C,H,ne,q=null)=>{const{el:O,type:N,transition:xe,children:he,shapeFlag:re}=E;if(re&6){ue(E.component.subTree,C,H,ne);return}if(re&128){E.suspense.move(C,H,ne);return}if(re&64){N.move(E,C,H,Ce);return}if(N===We){i(O,C,H);for(let P=0;P<he.length;P++)ue(he[P],C,H,ne);i(E.anchor,C,H);return}if(N===du){y(E,C,H);return}if(ne!==2&&re&1&&xe)if(ne===0)xe.persisted&&!O[Vi]?i(O,C,H):(xe.beforeEnter(O),i(O,C,H),di(()=>xe.enter(O),q));else{const{leave:P,delayLeave:w,afterLeave:z}=xe,J=()=>{E.ctx.isUnmounted?r(O):i(O,C,H)},te=()=>{const K=O._isLeaving||!!O[Vi];O._isLeaving&&O[Vi](!0),xe.persisted&&!K?J():P(O,()=>{J(),z&&z()})};w?w(O,J,te):te()}else i(O,C,H)},ge=(E,C,H,ne=!1,q=!1)=>{const{type:O,props:N,ref:xe,children:he,dynamicChildren:re,shapeFlag:me,patchFlag:P,dirs:w,cacheIndex:z,memo:J}=E;if(P===-2&&(q=!1),xe!=null&&(as(),Al(xe,null,H,E,!0),ls()),z!=null&&(C.renderCache[z]=void 0),me&256){C.ctx.deactivate(E);return}const te=me&1&&w,K=!Cl(E);let Me;if(K&&(Me=N&&N.onVnodeBeforeUnmount)&&ur(Me,C,E),me&6)Ae(E.component,H,ne);else{if(me&128){E.suspense.unmount(H,ne);return}te&&Js(E,null,C,"beforeUnmount"),me&64?E.type.remove(E,C,H,Ce,ne):re&&!re.hasOnce&&(O!==We||P>0&&P&64)?ee(re,C,H,!1,!0):(O===We&&P&384||!q&&me&16)&&ee(he,C,H),ne&&_e(E)}const ve=J!=null&&z==null;(K&&(Me=N&&N.onVnodeUnmounted)||te||ve)&&di(()=>{Me&&ur(Me,C,E),te&&Js(E,null,C,"unmounted"),ve&&(E.el=null)},H)},_e=E=>{const{type:C,el:H,anchor:ne,transition:q}=E;if(C===We){ye(H,ne);return}if(C===du){v(E);return}const O=()=>{r(H),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(E.shapeFlag&1&&q&&!q.persisted){const{leave:N,delayLeave:xe}=q,he=()=>N(H,O);xe?xe(E.el,O,he):he()}else O()},ye=(E,C)=>{let H;for(;E!==C;)H=f(E),r(E),E=H;r(C)},Ae=(E,C,H)=>{const{bum:ne,scope:q,job:O,subTree:N,um:xe,m:he,a:re}=E;P0(he),P0(re),ne&&uu(ne),q.stop(),O&&(O.flags|=8,ge(N,E,C,H)),xe&&di(xe,C),di(()=>{E.isUnmounted=!0},C)},ee=(E,C,H,ne=!1,q=!1,O=0)=>{for(let N=O;N<E.length;N++)ge(E[N],C,H,ne,q)},fe=E=>{if(E.shapeFlag&6)return fe(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const C=f(E.anchor||E.el),H=C&&C[f1];return H?f(H):C};let le=!1;const Pe=(E,C,H)=>{let ne;E==null?C._vnode&&(ge(C._vnode,null,null,!0),ne=C._vnode.component):x(C._vnode||null,E,C,null,null,null,H),C._vnode=E,le||(le=!0,v0(ne),d_(),le=!1)},Ce={p:x,um:ge,m:ue,r:_e,mt:B,mc:S,pc:Z,pbc:U,n:fe,o:n};return{render:Pe,hydrate:void 0,createApp:F1(Pe)}}function Ud({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Qs({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function J1(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function k_(n,e,t=!1){const i=n.children,r=e.children;if(ot(i)&&ot(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=jr(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&k_(o,a)),a.type===_d&&(a.patchFlag===-1&&(a=r[s]=jr(a)),a.el=o.el),a.type===si&&!a.el&&(a.el=o.el)}}function Q1(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function B_(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:B_(e)}function P0(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function z_(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?z_(e.subTree):null}const V_=n=>n.__isSuspense;function eb(n,e){e&&e.pendingBranch?ot(n)?e.effects.push(...n):e.effects.push(n):a1(n)}const We=Symbol.for("v-fgt"),_d=Symbol.for("v-txt"),si=Symbol.for("v-cmt"),du=Symbol.for("v-stc"),Ao=[];let Pi=null;function Y(n=!1){Ao.push(Pi=n?null:[])}function H_(){Ao.pop(),Pi=Ao[Ao.length-1]||null}let Xl=1;function Uu(n,e=!1){Xl+=n,n<0&&Pi&&e&&(Pi.hasOnce=!0)}function G_(n){return n.dynamicChildren=Xl>0?Pi||ga:null,H_(),Xl>0&&Pi&&Pi.push(n),n}function Q(n,e,t,i,r,s){return G_(_(n,e,t,i,r,s,!0))}function Yn(n,e,t,i,r){return G_(et(n,e,t,i,r,!0))}function Fu(n){return n?n.__v_isVNode===!0:!1}function go(n,e){return n.type===e.type&&n.key===e.key}const W_=({key:n})=>n??null,fu=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Zt(n)||jn(n)||ft(n)?{i:Ri,r:n,k:e,f:!!t}:n:null);function _(n,e=null,t=null,i=0,r=null,s=n===We?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&W_(e),ref:e&&fu(e),scopeId:h_,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ri};return a?(Ou(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Zt(t)?8:16),Xl>0&&!o&&Pi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Pi.push(l),l}const et=tb;function tb(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===M_)&&(n=si),Fu(n)){const a=Hs(n,e,!0);return t&&Ou(a,t),Xl>0&&!s&&Pi&&(a.shapeFlag&6?Pi[Pi.indexOf(n)]=a:Pi.push(a)),a.patchFlag=-2,a}if(fb(n)&&(n=n.__vccOpts),e){e=nb(e);let{class:a,style:l}=e;a&&!Zt(a)&&(e.class=rt(a)),Lt(l)&&(wp(l)&&!ot(l)&&(l=Tn({},l)),e.style=Gt(l))}const o=Zt(n)?1:V_(n)?128:hd(n)?64:Lt(n)?4:ft(n)?2:0;return _(n,e,t,i,r,o,s,!0)}function nb(n){return n?wp(n)||L_(n)?Tn({},n):n:null}function Hs(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?ib(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&W_(c),ref:e&&e.ref?t&&s?ot(s)?s.concat(fu(e)):[s,fu(e)]:fu(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==We?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Hs(n.ssContent),ssFallback:n.ssFallback&&Hs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&$l(u,l.clone(u)),u}function qi(n=" ",e=0){return et(_d,null,n,e)}function Rs(n,e){const t=et(du,null,n);return t.staticCount=e,t}function qt(n="",e=!1){return e?(Y(),Yn(si,null,n)):et(si,null,n)}function _r(n){return n==null||typeof n=="boolean"?et(si):ot(n)?et(We,null,n.slice()):Fu(n)?jr(n):et(_d,null,String(n))}function jr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Hs(n)}function Ou(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ot(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ou(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!L_(e)?e._ctx=Ri:r===3&&Ri&&(Ri.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(ft(e)){if(i&65){Ou(n,{default:e});return}e={default:e,_ctx:Ri},t=32}else e=String(e),i&64?(t=16,e=[qi(e)]):t=8;n.children=e,n.shapeFlag|=t}function ib(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=rt([e.class,i.class]));else if(r==="style")e.style=Gt([e.style,i.style]);else if(rd(r)){const s=e[r],o=i[r];o&&s!==o&&!(ot(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!sd(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function ur(n,e,t,i=null){Zi(n,e,7,[t,i])}const rb=A_();let sb=0;function ob(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||rb,s={uid:sb++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Dy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:N_(i,r),emitsOptions:C_(i,r),emit:null,emitted:null,propsDefaults:Ht,inheritAttrs:i.inheritAttrs,ctx:Ht,data:Ht,props:Ht,attrs:Ht,slots:Ht,refs:Ht,setupState:Ht,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=k1.bind(null,s),n.ce&&n.ce(s),s}let Hn=null;const $_=()=>Hn||Ri;let ku,jl;{const n=ud(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ku=e("__VUE_INSTANCE_SETTERS__",t=>Hn=t),jl=e("__VUE_SSR_SETTERS__",t=>Yl=t)}const pc=n=>{const e=Hn;return ku(n),n.scope.on(),()=>{n.scope.off(),ku(e)}},D0=()=>{Hn&&Hn.scope.off(),ku(null)};function X_(n){return n.vnode.shapeFlag&4}let Yl=!1;function ab(n,e=!1,t=!1){e&&jl(e);const{props:i,children:r}=n.vnode,s=X_(n);W1(n,i,s,e),Y1(n,r,t||e);const o=s?lb(n,e):void 0;return e&&jl(!1),o}function lb(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,R1);const{setup:i}=t;if(i){as();const r=n.setupContext=i.length>1?ub(n):null,s=pc(n),o=hc(i,n,0,[n.props,r]),a=Vg(o);if(ls(),s(),(a||n.sp)&&!Cl(n)&&b_(n),a){if(o.then(D0,D0),e)return o.then(l=>{jl(!0);try{L0(n,l,e)}finally{jl(!1)}}).catch(l=>{fd(l,n,0)});n.asyncDep=o}else L0(n,o)}else j_(n)}function L0(n,e,t){ft(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Lt(e)&&(n.setupState=l_(e)),j_(n)}function j_(n,e,t){const i=n.type;n.render||(n.render=i.render||Tr);{const r=pc(n);as();try{P1(n)}finally{ls(),r()}}}const cb={get(n,e){return Vn(n,"get",""),n[e]}};function ub(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,cb),slots:n.slots,emit:n.emit,expose:e}}function xd(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(l_(Zy(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Rl)return Rl[t](n)},has(e,t){return t in e||t in Rl}})):n.proxy}function db(n,e=!0){return ft(n)?n.displayName||n.name:n.name||e&&n.__name}function fb(n){return ft(n)&&"__vccOpts"in n}const Xt=(n,e)=>n1(n,e,Yl);function Bu(n,e,t){try{Uu(-1);const i=arguments.length;return i===2?Lt(e)&&!ot(e)?Fu(e)?et(n,null,[e]):et(n,e):et(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Fu(t)&&(t=[t]),et(n,e,t))}finally{Uu(1)}}const hb="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qf;const I0=typeof window<"u"&&window.trustedTypes;if(I0)try{qf=I0.createPolicy("vue",{createHTML:n=>n})}catch{}const Y_=qf?n=>qf.createHTML(n):n=>n,pb="http://www.w3.org/2000/svg",mb="http://www.w3.org/1998/Math/MathML",$r=typeof document<"u"?document:null,N0=$r&&$r.createElement("template"),gb={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?$r.createElementNS(pb,n):e==="mathml"?$r.createElementNS(mb,n):t?$r.createElement(n,{is:t}):$r.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>$r.createTextNode(n),createComment:n=>$r.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>$r.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{N0.innerHTML=Y_(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=N0.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},vs="transition",Qa="animation",ql=Symbol("_vtc"),q_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},_b=Tn({},g_,q_),xb=n=>(n.displayName="Transition",n.props=_b,n),Na=xb((n,{slots:e})=>Bu(m1,vb(n),e)),eo=(n,e=[])=>{ot(n)?n.forEach(t=>t(...e)):n&&n(...e)},U0=n=>n?ot(n)?n.some(e=>e.length>1):n.length>1:!1;function vb(n){const e={};for(const L in n)L in q_||(e[L]=n[L]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=n,m=yb(r),x=m&&m[0],p=m&&m[1],{onBeforeEnter:g,onEnter:b,onEnterCancelled:y,onLeave:v,onLeaveCancelled:A,onBeforeAppear:R=g,onAppear:M=b,onAppearCancelled:S=y}=e,T=(L,G,B,V)=>{L._enterCancelled=V,to(L,G?u:a),to(L,G?c:o),B&&B()},U=(L,G)=>{L._isLeaving=!1,to(L,d),to(L,h),to(L,f),G&&G()},I=L=>(G,B)=>{const V=L?M:b,$=()=>T(G,L,B);eo(V,[G,$]),F0(()=>{to(G,L?l:s),kr(G,L?u:a),U0(V)||O0(G,i,x,$)})};return Tn(e,{onBeforeEnter(L){eo(g,[L]),kr(L,s),kr(L,o)},onBeforeAppear(L){eo(R,[L]),kr(L,l),kr(L,c)},onEnter:I(!1),onAppear:I(!0),onLeave(L,G){L._isLeaving=!0;const B=()=>U(L,G);kr(L,d),L._enterCancelled?(kr(L,f),z0(L)):(z0(L),kr(L,f)),F0(()=>{L._isLeaving&&(to(L,d),kr(L,h),U0(v)||O0(L,i,p,B))}),eo(v,[L,B])},onEnterCancelled(L){T(L,!1,void 0,!0),eo(y,[L])},onAppearCancelled(L){T(L,!0,void 0,!0),eo(S,[L])},onLeaveCancelled(L){U(L),eo(A,[L])}})}function yb(n){if(n==null)return null;if(Lt(n))return[Fd(n.enter),Fd(n.leave)];{const e=Fd(n);return[e,e]}}function Fd(n){return Sy(n)}function kr(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[ql]||(n[ql]=new Set)).add(e)}function to(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[ql];t&&(t.delete(e),t.size||(n[ql]=void 0))}function F0(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let bb=0;function O0(n,e,t,i){const r=n._endId=++bb,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=Sb(n,e);if(!o)return i();const c=o+"end";let u=0;const d=()=>{n.removeEventListener(c,f),s()},f=h=>{h.target===n&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),n.addEventListener(c,f)}function Sb(n,e){const t=window.getComputedStyle(n),i=m=>(t[m]||"").split(", "),r=i(`${vs}Delay`),s=i(`${vs}Duration`),o=k0(r,s),a=i(`${Qa}Delay`),l=i(`${Qa}Duration`),c=k0(a,l);let u=null,d=0,f=0;e===vs?o>0&&(u=vs,d=o,f=s.length):e===Qa?c>0&&(u=Qa,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?vs:Qa:null,f=u?u===vs?s.length:l.length:0);const h=u===vs&&/\b(?:transform|all)(?:,|$)/.test(i(`${vs}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function k0(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>B0(t)+B0(n[i])))}function B0(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function z0(n){return(n?n.ownerDocument:document).body.offsetHeight}function wb(n,e,t){const i=n[ql];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const V0=Symbol("_vod"),Mb=Symbol("_vsh"),Eb=Symbol(""),Tb=/(?:^|;)\s*display\s*:/;function Ab(n,e,t){const i=n.style,r=Zt(t);let s=!1;if(t&&!r){if(e)if(Zt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&hl(i,a,"")}else for(const o in e)t[o]==null&&hl(i,o,"");for(const o in t){o==="display"&&(s=!0);const a=t[o];a!=null?Rb(n,o,!Zt(e)&&e?e[o]:void 0,a)||hl(i,o,a):hl(i,o,"")}}else if(r){if(e!==t){const o=i[Eb];o&&(t+=";"+o),i.cssText=t,s=Tb.test(t)}}else e&&n.removeAttribute("style");V0 in n&&(n[V0]=s?i.display:"",n[Mb]&&(i.display="none"))}const H0=/\s*!important$/;function hl(n,e,t){if(ot(t))t.forEach(i=>hl(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Cb(n,e);H0.test(t)?n.setProperty(Ys(i),t.replace(H0,""),"important"):n[i]=t}}const G0=["Webkit","Moz","ms"],Od={};function Cb(n,e){const t=Od[e];if(t)return t;let i=ai(e);if(i!=="filter"&&i in n)return Od[e]=i;i=ld(i);for(let r=0;r<G0.length;r++){const s=G0[r]+i;if(s in n)return Od[e]=s}return e}function Rb(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Zt(i)&&t===i}const W0="http://www.w3.org/1999/xlink";function $0(n,e,t,i,r,s=Cy(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(W0,e.slice(6,e.length)):n.setAttributeNS(W0,e,t):t==null||s&&!$g(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Dr(t)?String(t):t)}function X0(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Y_(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=$g(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function _o(n,e,t,i){n.addEventListener(e,t,i)}function Pb(n,e,t,i){n.removeEventListener(e,t,i)}const j0=Symbol("_vei");function Db(n,e,t,i,r=null){const s=n[j0]||(n[j0]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Nb(e);if(i){const c=s[e]=Ob(i,r);_o(n,a,c,l)}else o&&(Pb(n,a,o,l),s[e]=void 0)}}const Lb=/(Once|Passive|Capture)$/,Ib=/^on:?(?:Once|Passive|Capture)$/;function Nb(n){let e,t;for(;(t=n.match(Lb))&&!Ib.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Ys(n.slice(2)),e]}let kd=0;const Ub=Promise.resolve(),Fb=()=>kd||(Ub.then(()=>kd=0),kd=Date.now());function Ob(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(ot(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Zi(c,e,5,a)}}else Zi(r,e,5,[i])};return t.value=n,t.attached=Fb(),t}const Y0=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,kb=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?wb(n,i,o):e==="style"?Ab(n,t,i):rd(e)?sd(e)||Db(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bb(n,e,i,o))?(X0(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$0(n,e,i,o,s,e!=="value")):n._isVueCE&&(zb(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Zt(i)))?X0(n,ai(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),$0(n,e,i,o))};function Bb(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Y0(e)&&ft(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Y0(e)&&Zt(t)?!1:e in n}function zb(n,e){const t=n._def.props;if(!t)return!1;const i=ai(e);return Array.isArray(t)?t.some(r=>ai(r)===i):Object.keys(t).some(r=>ai(r)===i)}const zu=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ot(e)?t=>uu(e,t):e};function Vb(n){n.target.composing=!0}function q0(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const yo=Symbol("_assign"),Mc=Symbol("_initialValue");function Bd(n,e,t){return e&&(n=n.trim()),t&&(n=cd(n)),n}const zd={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n.parentNode&&(n.type==="text"?n[Mc]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Mc]=n.defaultValue.replace(/\r\n?/g,`
`))),n[yo]=zu(r);const s=i||r.props&&r.props.type==="number";_o(n,e?"change":"input",o=>{o.target.composing||n[yo](Bd(n.value,t,s))}),(t||s)&&_o(n,"change",()=>{n.value=Bd(n.value,t,s)}),e||(_o(n,"compositionstart",Vb),_o(n,"compositionend",q0),_o(n,"change",q0))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const r=e??"",s=n[Mc];delete n[Mc],s!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==s?n[yo](Bd(n.value,t,i)):n.value=r},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[yo]=zu(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?cd(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},Hb={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,_o(n,"change",()=>{const r=Array.prototype.filter.call(n.options,s=>s.selected).map(s=>t?cd(Vu(s)):Vu(s));n[yo](n.multiple?od(n._modelValue)?new Set(r):r:r[0]),n._assigning=!0,Lr(()=>{n._assigning=!1})}),n[yo]=zu(i)},mounted(n,{value:e}){K0(n,e)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[yo]=zu(t)},updated(n,{value:e}){n._assigning||K0(n,e)}};function K0(n,e){const t=n.multiple,i=ot(e);if(!(t&&!i&&!od(e))){for(let r=0,s=n.options.length;r<s;r++){const o=n.options[r],a=Vu(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Py(e,a)>-1}else o.selected=e.has(a);else if(fc(Vu(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Vu(n){return"_value"in n?n._value:n.value}const Gb=["ctrl","shift","alt","meta"],Wb={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Gb.some(t=>n[`${t}Key`]&&!e.includes(t))},Ds=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=Wb[e[o]];if(a&&a(r,e))return}return n(r,...s)}))},$b={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Xb=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(r=>{if(!("key"in r))return;const s=Ys(r.key);if(e.some(o=>o===s||$b[o]===s))return n(r)}))},jb=Tn({patchProp:kb},gb);let Z0;function Yb(){return Z0||(Z0=K1(jb))}const qb=((...n)=>{const e=Yb().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Zb(i);if(!r)return;const s=e._component;!ft(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Kb(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Kb(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Zb(n){return Zt(n)?document.querySelector(n):n}const vd={goldenHour:{name:"Lime",primary:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},accent:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#44403c",800:"#292524",900:"#1c1917"}},emerald:{name:"Emerald",primary:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},accent:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#44403c",800:"#292524",900:"#1c1917"}},ocean:{name:"Ocean",primary:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},accent:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},secondary:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},dark:{700:"#334155",800:"#1e293b",900:"#0f172a"}},sunset:{name:"Sunset",primary:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},accent:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#44403c",800:"#292524",900:"#1c1917"}},royal:{name:"Royal",primary:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},accent:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},secondary:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},dark:{700:"#334155",800:"#1e293b",900:"#0f172a"}},sky:{name:"Sky",primary:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},accent:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#44403c",800:"#292524",900:"#1c1917"}},rose:{name:"Rose",primary:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},accent:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#44403c",800:"#292524",900:"#1c1917"}},moonlit:{name:"Silver",primary:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},accent:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#334155",800:"#1e293b",900:"#0f172a"}},maple:{name:"Maple",primary:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},accent:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#44403c",800:"#292524",900:"#1c1917"}}},Ec=n=>{const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return e?`${parseInt(e[1],16)} ${parseInt(e[2],16)} ${parseInt(e[3],16)}`:"0 0 0"},ba=we("goldenHour"),K_=n=>{const e=vd[n];if(!e)return;const t=document.documentElement;Object.entries(e.primary).forEach(([i,r])=>{t.style.setProperty(`--color-primary-${i}`,Ec(r))}),Object.entries(e.accent).forEach(([i,r])=>{t.style.setProperty(`--color-accent-${i}`,Ec(r))}),Object.entries(e.secondary).forEach(([i,r])=>{t.style.setProperty(`--color-secondary-${i}`,Ec(r))}),Object.entries(e.dark).forEach(([i,r])=>{t.style.setProperty(`--color-dark-${i}`,Ec(r))})},Jb=()=>{const n=localStorage.getItem("colorPalette");n&&vd[n]?ba.value=n:ba.value="goldenHour",K_(ba.value)};li(ba,n=>{K_(n),window.dispatchEvent(new CustomEvent("colorpalettechange"))});const Qb=n=>{vd[n]&&(ba.value=n,localStorage.setItem("colorPalette",n))};Jb();function eS(){return{colorPalettes:vd,selectedPalette:ba,setPalette:Qb}}function Xr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Z_(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ii={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Kl={duration:.5,overwrite:!1,delay:0},Ap,In,Kt,Xi=1e8,Vt=1/Xi,Kf=Math.PI*2,tS=Kf/4,nS=0,J_=Math.sqrt,iS=Math.cos,rS=Math.sin,An=function(e){return typeof e=="string"},nn=function(e){return typeof e=="function"},us=function(e){return typeof e=="number"},Cp=function(e){return typeof e>"u"},Ir=function(e){return typeof e=="object"},pi=function(e){return e!==!1},Rp=function(){return typeof window<"u"},Tc=function(e){return nn(e)||An(e)},Q_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},qn=Array.isArray,sS=/random\([^)]+\)/g,oS=/,\s*/g,J0=/(?:-?\.?\d|\.)+/gi,ex=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ha=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Vd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,tx=/[+-]=-?[.\d]+/,aS=/[^,'"\[\]\s]+/gi,lS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Qt,pr,Zf,Pp,Ui={},Hu={},nx,ix=function(e){return(Hu=Ua(e,Ui))&&vi},Dp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Zl=function(e,t){return!t&&console.warn(e)},rx=function(e,t){return e&&(Ui[e]=t)&&Hu&&(Hu[e]=t)||Ui},Jl=function(){return 0},cS={suppressEvents:!0,isStart:!0,kill:!1},hu={suppressEvents:!0,kill:!1},uS={suppressEvents:!0},Lp={},ks=[],Jf={},sx,Ei={},Hd={},Q0=30,pu=[],Ip="",Np=function(e){var t=e[0],i,r;if(Ir(t)||nn(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=pu.length;r--&&!pu[r].targetTest(t););i=pu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Ax(e[r],i)))||e.splice(r,1);return e},Co=function(e){return e._gsap||Np(ji(e))[0]._gsap},ox=function(e,t,i){return(i=e[t])&&nn(i)?e[t]():Cp(i)&&e.getAttribute&&e.getAttribute(t)||i},mi=function(e,t){return(e=e.split(",")).forEach(t)||e},on=function(e){return Math.round(e*1e5)/1e5||0},Jt=function(e){return Math.round(e*1e7)/1e7||0},Sa=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},dS=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Gu=function(){var e=ks.length,t=ks.slice(0),i,r;for(Jf={},ks.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Up=function(e){return!!(e._initted||e._startAt||e.add)},ax=function(e,t,i,r){ks.length&&!In&&Gu(),e.render(t,i,!!(In&&t<0&&Up(e))),ks.length&&!In&&Gu()},lx=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(aS).length<2?t:An(e)?e.trim():e},cx=function(e){return e},Fi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},fS=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ua=function(e,t){for(var i in t)e[i]=t[i];return e},em=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ir(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Wu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Pl=function(e){var t=e.parent||Qt,i=e.keyframes?fS(qn(e.keyframes)):Fi;if(pi(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},hS=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},ux=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},yd=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Gs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ro=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},pS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Qf=function(e,t,i,r){return e._startAt&&(In?e._startAt.revert(hu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},mS=function n(e){return!e||e._ts&&n(e.parent)},tm=function(e){return e._repeat?Fa(e._tTime,e=e.duration()+e._rDelay)*e:0},Fa=function(e,t){var i=Math.floor(e=Jt(e/t));return e&&i===e?i-1:i},$u=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},bd=function(e){return e._end=Jt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Vt)||0))},Sd=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Jt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),bd(e),i._dirty||Ro(i,e)),e},dx=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=$u(e.rawTime(),t),(!t._dur||mc(0,t.totalDuration(),i)-t._tTime>Vt)&&t.render(i,!0)),Ro(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Vt}},yr=function(e,t,i,r){return t.parent&&Gs(t),t._start=Jt((us(i)?i:i||e!==Qt?zi(e,i,t):e._time)+t._delay),t._end=Jt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ux(e,t,"_first","_last",e._sort?"_start":0),eh(t)||(e._recent=t),r||dx(e,t),e._ts<0&&Sd(e,e._tTime),e},fx=function(e,t){return(Ui.ScrollTrigger||Dp("scrollTrigger",t))&&Ui.ScrollTrigger.create(t,e)},hx=function(e,t,i,r,s){if(Op(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!In&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&sx!==Ai.frame)return ks.push(e),e._lazy=[s,r],1},gS=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},eh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},_S=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&gS(e)&&!(!e._initted&&eh(e))||(e._ts<0||e._dp._ts<0)&&!eh(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=mc(0,e._tDur,t),u=Fa(l,a),e._yoyo&&u&1&&(o=1-o),u!==Fa(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||In||r||e._zTime===Vt||!t&&e._zTime){if(!e._initted&&hx(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?Vt:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Qf(e,t,i,!0),e._onUpdate&&!i&&Di(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Di(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Gs(e,1),!i&&!In&&(Di(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},xS=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Oa=function(e,t,i,r){var s=e._repeat,o=Jt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Jt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Sd(e,e._tTime=e._tDur*a),e.parent&&bd(e),i||Ro(e.parent,e),e},nm=function(e){return e instanceof hi?Ro(e):Oa(e,e._dur)},vS={_start:0,endTime:Jl,totalDuration:Jl},zi=function n(e,t,i){var r=e.labels,s=e._recent||vS,o=e.duration()>=Xi?s.endTime(!1):e._dur,a,l,c;return An(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(qn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Dl=function(e,t,i){var r=us(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=pi(l.vars.inherit)&&l.parent;o.immediateRender=pi(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new dn(t[0],o,t[s+1])},qs=function(e,t){return e||e===0?t(e):t},mc=function(e,t,i){return i<e?e:i>t?t:i},Gn=function(e,t){return!An(e)||!(t=lS.exec(e))?"":t[1]},yS=function(e,t,i){return qs(i,function(r){return mc(e,t,r)})},th=[].slice,px=function(e,t){return e&&Ir(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ir(e[0]))&&!e.nodeType&&e!==pr},bS=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return An(r)&&!t||px(r,1)?(s=i).push.apply(s,ji(r)):i.push(r)})||i},ji=function(e,t,i){return Kt&&!t&&Kt.selector?Kt.selector(e):An(e)&&!i&&(Zf||!ka())?th.call((t||Pp).querySelectorAll(e),0):qn(e)?bS(e,i):px(e)?th.call(e,0):e?[e]:[]},nh=function(e){return e=ji(e)[0]||Zl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ji(t,i.querySelectorAll?i:i===e?Zl("Invalid scope")||Pp.createElement("div"):e)}},mx=function(e){return e.sort(function(){return .5-Math.random()})},gx=function(e){if(nn(e))return e;var t=Ir(e)?e:{each:e},i=Po(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,d=r;return An(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],d=r[1]),function(f,h,m){var x=(m||t).length,p=o[x],g,b,y,v,A,R,M,S,T;if(!p){if(T=t.grid==="auto"?0:(t.grid||[1,Xi])[1],!T){for(M=-Xi;M<(M=m[T++].getBoundingClientRect().left)&&T<x;);T<x&&T--}for(p=o[x]=[],g=l?Math.min(T,x)*u-.5:r%T,b=T===Xi?0:l?x*d/T-.5:r/T|0,M=0,S=Xi,R=0;R<x;R++)y=R%T-g,v=b-(R/T|0),p[R]=A=c?Math.abs(c==="y"?v:y):J_(y*y+v*v),A>M&&(M=A),A<S&&(S=A);r==="random"&&mx(p),p.max=M-S,p.min=S,p.v=x=(parseFloat(t.amount)||parseFloat(t.each)*(T>x?x-1:c?c==="y"?x/T:T:Math.max(T,x/T))||0)*(r==="edges"?-1:1),p.b=x<0?s-x:s,p.u=Gn(t.amount||t.each)||0,i=i&&x<0?NS(i):i}return x=(p[f]-p.min)/p.max||0,Jt(p.b+(i?i(x):x)*p.v)+p.u}},ih=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Jt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(us(i)?0:Gn(i))}},_x=function(e,t){var i=qn(e),r,s;return!i&&Ir(e)&&(r=i=e.radius||Xi,e.values?(e=ji(e.values),(s=!us(e[0]))&&(r*=r)):e=ih(e.increment)),qs(t,i?nn(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Xi,u=0,d=e.length,f,h;d--;)s?(f=e[d].x-a,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-a),f<c&&(c=f,u=d);return u=!r||c<=r?e[u]:o,s||u===o||us(o)?u:u+Gn(o)}:ih(e))},xx=function(e,t,i,r){return qs(qn(e)?!t:i===!0?!!(i=0):!r,function(){return qn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},SS=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},wS=function(e,t){return function(i){return e(parseFloat(i))+(t||Gn(i))}},MS=function(e,t,i){return yx(e,t,0,1,i)},vx=function(e,t,i){return qs(i,function(r){return e[~~t(r)]})},ES=function n(e,t,i){var r=t-e;return qn(e)?vx(e,n(0,e.length),t):qs(i,function(s){return(r+(s-e)%r)%r+e})},TS=function n(e,t,i){var r=t-e,s=r*2;return qn(e)?vx(e,n(0,e.length-1),t):qs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Ql=function(e){return e.replace(sS,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(oS);return xx(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},yx=function(e,t,i,r,s){var o=t-e,a=r-i;return qs(s,function(l){return i+((l-e)/o*a||0)})},AS=function n(e,t,i,r){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var o=An(e),a={},l,c,u,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(qn(e)&&!qn(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(n(e[c-1],e[c]));d--,s=function(m){m*=d;var x=Math.min(f,~~m);return u[x](m-x)},i=t}else r||(e=Ua(qn(e)?[]:{},e));if(!u){for(l in t)Fp.call(a,e,l,"get",t[l]);s=function(m){return zp(m,a)||(o?e.p:e)}}}return qs(i,s)},im=function(e,t,i){var r=e.labels,s=Xi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Di=function(e,t,i){var r=e.vars,s=r[t],o=Kt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&ks.length&&Gu(),a&&(Kt=a),u=l?s.apply(c,l):s.call(c),Kt=o,u},pl=function(e){return Gs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!In),e.progress()<1&&Di(e,"onInterrupt"),e},pa,bx=[],Sx=function(e){if(e)if(e=!e.name&&e.default||e,Rp()||e.headless){var t=e.name,i=nn(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Jl,render:zp,add:Fp,kill:WS,modifier:GS,rawVars:0},o={targetTest:0,get:0,getSetter:Bp,aliases:{},register:0};if(ka(),e!==r){if(Ei[t])return;Fi(r,Fi(Wu(e,s),o)),Ua(r.prototype,Ua(s,Wu(e,o))),Ei[r.prop=t]=r,e.targetTest&&(pu.push(r),Lp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}rx(t,r),e.register&&e.register(vi,r,gi)}else bx.push(e)},zt=255,ml={aqua:[0,zt,zt],lime:[0,zt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,zt],navy:[0,0,128],white:[zt,zt,zt],olive:[128,128,0],yellow:[zt,zt,0],orange:[zt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[zt,0,0],pink:[zt,192,203],cyan:[0,zt,zt],transparent:[zt,zt,zt,0]},Gd=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*zt+.5|0},wx=function(e,t,i){var r=e?us(e)?[e>>16,e>>8&zt,e&zt]:0:ml.black,s,o,a,l,c,u,d,f,h,m;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ml[e])r=ml[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&zt,r&zt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&zt,e&zt]}else if(e.substr(0,3)==="hsl"){if(r=m=e.match(J0),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Gd(l+1/3,s,o),r[1]=Gd(l,s,o),r[2]=Gd(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(ex),i&&r.length<4&&(r[3]=1),r}else r=e.match(J0)||ml.transparent;r=r.map(Number)}return t&&!m&&(s=r[0]/zt,o=r[1]/zt,a=r[2]/zt,d=Math.max(s,o,a),f=Math.min(s,o,a),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===s?(o-a)/h+(o<a?6:0):d===o?(a-s)/h+2:(s-o)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},Mx=function(e){var t=[],i=[],r=-1;return e.split(Bs).forEach(function(s){var o=s.match(ha)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},rm=function(e,t,i){var r="",s=(e+r).match(Bs),o=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!s)return e;if(s=s.map(function(f){return(f=wx(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=Mx(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Bs,"1").split(ha),d=c.length-1;a<d;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Bs),d=c.length-1;a<d;a++)r+=c[a]+s[a];return r+c[d]},Bs=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ml)n+="|"+e+"\\b";return new RegExp(n+")","gi")})(),CS=/hsl[a]?\(/,Ex=function(e){var t=e.join(" "),i;if(Bs.lastIndex=0,Bs.test(t))return i=CS.test(t),e[1]=rm(e[1],i),e[0]=rm(e[0],i,Mx(e[1])),!0},ec,Ai=(function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,d,f,h,m=function x(p){var g=n()-r,b=p===!0,y,v,A,R;if((g>e||g<0)&&(i+=g-t),r+=g,A=r-i,y=A-o,(y>0||b)&&(R=++d.frame,f=A-d.time*1e3,d.time=A=A/1e3,o+=y+(y>=s?4:s-y),v=1),b||(l=c(x)),v)for(h=0;h<a.length;h++)a[h](A,f,R,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){nx&&(!Zf&&Rp()&&(pr=Zf=window,Pp=pr.document||{},Ui.gsap=vi,(pr.gsapVersions||(pr.gsapVersions=[])).push(vi.version),ix(Hu||pr.GreenSockGlobals||!pr.gsap&&pr||{}),bx.forEach(Sx)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,o-d.time*1e3+1|0)},ec=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ec=0,c=Jl},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){s=1e3/(p||240),o=d.time*1e3+s},add:function(p,g,b){var y=g?function(v,A,R,M){p(v,A,R,M),d.remove(y)}:p;return d.remove(p),a[b?"unshift":"push"](y),ka(),y},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&h>=g&&h--},_listeners:a},d})(),ka=function(){return!ec&&Ai.wake()},St={},RS=/^[\d.\-M][\d.\-,\s]/,PS=/["']/g,DS=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(PS,"").trim():+c,r=l.substr(a+1).trim();return t},LS=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},IS=function(e){var t=(e+"").split("("),i=St[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[DS(t[1])]:LS(e).split(",").map(lx)):St._CE&&RS.test(e)?St._CE("",e):i},NS=function(e){return function(t){return 1-e(1-t)}},Po=function(e,t){return e&&(nn(e)?e:St[e]||IS(e))||t},zo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return mi(e,function(a){St[a]=Ui[a]=s,St[o=a.toLowerCase()]=i;for(var l in s)St[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=St[a+"."+l]=s[l]}),s},Tx=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Wd=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Kf*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*rS((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Tx(a);return s=Kf/s,l.config=function(c,u){return n(e,c,u)},l},$d=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:Tx(i);return r.config=function(s){return n(e,s)},r};mi("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;zo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});St.Linear.easeNone=St.none=St.Linear.easeIn;zo("Elastic",Wd("in"),Wd("out"),Wd());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};zo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);zo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});zo("Circ",function(n){return-(J_(1-n*n)-1)});zo("Sine",function(n){return n===1?1:-iS(n*tS)+1});zo("Back",$d("in"),$d("out"),$d());St.SteppedEase=St.steps=Ui.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Vt;return function(a){return((r*mc(0,o,a)|0)+s)*i}}};Kl.ease=St["quad.out"];mi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Ip+=n+","+n+"Params,"});var Ax=function(e,t){this.id=nS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ox,this.set=t?t.getSetter:Bp},tc=(function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Oa(this,+t.duration,1,1),this.data=t.data,Kt&&(this._ctx=Kt,Kt.data.push(this)),ec||Ai.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Oa(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(ka(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Sd(this,i),!s._dp||s.parent||dx(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&yr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Vt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),ax(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+tm(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+tm(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Fa(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Vt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?$u(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Vt?0:this._rts,this.totalTime(mc(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),bd(this),pS(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ka(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Vt&&(this._tTime-=Vt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Jt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&yr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(pi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?$u(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=uS);var r=In;return In=i,Up(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),In=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,nm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,nm(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(zi(this,i),pi(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,pi(r)),this._dur||(this._zTime=-Vt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Vt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Vt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Vt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=nn(i)?i:cx,l=function(){var u=r.then;r.then=null,s&&s(),nn(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){pl(this)},n})();Fi(tc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Vt,_prom:0,_ps:!1,_rts:1});var hi=(function(n){Z_(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=pi(i.sortChildren),Qt&&yr(i.parent||Qt,Xr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&fx(Xr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Dl(0,arguments,this),this},t.from=function(r,s,o){return Dl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Dl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Pl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new dn(r,s,zi(this,o),1),this},t.call=function(r,s,o){return yr(this,dn.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new dn(r,o,zi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Pl(o).immediateRender=pi(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,d){return a.startAt=o,Pl(a).immediateRender=pi(a.immediateRender),this.staggerTo(r,s,a,l,c,u,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Jt(r),d=this._zTime<0!=r<0&&(this._initted||!c),f,h,m,x,p,g,b,y,v,A,R,M;if(this!==Qt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||d){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,v=this._start,y=this._ts,g=!y,d&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(f=Jt(u%p),u===l?(x=this._repeat,f=c):(A=Jt(u/p),x=~~A,x&&x===A&&(f=c,x--),f>c&&(f=c)),A=Fa(this._tTime,p),!a&&this._tTime&&A!==x&&this._tTime-A*p-this._dur<=0&&(A=x),R&&x&1&&(f=c-f,M=1),x!==A&&!this._lock){var S=R&&A&1,T=S===(R&&x&1);if(x<A&&(S=!S),a=S?0:u%c?c:u,this._lock=1,this.render(a||(M?0:Jt(x*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Di(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,A=x),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,a=S?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=xS(this,Jt(a),Jt(f)),b&&(u-=f-(f=b._start))),this._tTime=u,this._time=f,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!A&&(Di(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(h=this._first;h;){if(m=h._next,(h._act||f>=h._start)&&h._ts&&b!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,s,o),f!==this._time||!this._ts&&!g){b=0,m&&(u+=this._zTime=-Vt);break}}h=m}else{h=this._last;for(var U=r<0?r:f;h;){if(m=h._prev,(h._act||U<=h._end)&&h._ts&&b!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(U-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(U-h._start)*h._ts,s,o||In&&Up(h)),f!==this._time||!this._ts&&!g){b=0,m&&(u+=this._zTime=U?-Vt:Vt);break}}h=m}}if(b&&!s&&(this.pause(),b.render(f>=a?0:-Vt)._zTime=f>=a?1:-1,this._ts))return this._start=v,bd(this),this.render(r,s,o);this._onUpdate&&!s&&Di(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Gs(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Di(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(us(s)||(s=zi(this,s,r)),!(r instanceof tc)){if(qn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(An(r))return this.addLabel(r,s);if(nn(r))r=dn.delayedCall(0,r);else return this}return this!==r?yr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Xi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof dn?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return An(r)?this.removeLabel(r):nn(r)?this.killTweensOf(r):(r.parent===this&&yd(this,r),r===this._recent&&(this._recent=this._last),Ro(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Jt(Ai.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=zi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=dn.delayedCall(0,s||Jl,o);return a.data="isPause",this._hasPause=1,yr(this,a,zi(this,r))},t.removePause=function(r){var s=this._first;for(r=zi(this,r);s;)s._start===r&&s.data==="isPause"&&Gs(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Ls!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=ji(r),l=this._first,c=us(s),u;l;)l instanceof dn?dS(l._targets,a)&&(c?(!Ls||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=zi(o,r),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,m=dn.to(o,Fi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Vt,onStart:function(){if(o.pause(),!h){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==p&&Oa(m,p,0,1).render(m._time,!0,!0),h=1}u&&u.apply(m,d||[])}},s));return f?m.render(0):m},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Fi({startAt:{time:zi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),im(this,zi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),im(this,zi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Vt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=Jt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Ro(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ro(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Xi,c,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,yr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Jt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Oa(o,o===Qt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Qt._ts&&(ax(Qt,$u(r,Qt)),sx=Ai.frame),Ai.frame>=Q0){Q0+=Ii.autoSleep||120;var s=Qt._first;if((!s||!s._ts)&&Ii.autoSleep&&Ai._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ai.sleep()}}},e})(tc);Fi(hi.prototype,{_lock:0,_hasPause:0,_forcing:0});var US=function(e,t,i,r,s,o,a){var l=new gi(this._pt,e,t,0,1,Ix,null,s),c=0,u=0,d,f,h,m,x,p,g,b;for(l.b=i,l.e=r,i+="",r+="",(g=~r.indexOf("random("))&&(r=Ql(r)),o&&(b=[i,r],o(b,e,t),i=b[0],r=b[1]),f=i.match(Vd)||[];d=Vd.exec(r);)m=d[0],x=r.substring(c,d.index),h?h=(h+1)%5:x.substr(-5)==="rgba("&&(h=1),m!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:x||u===1?x:",",s:p,c:m.charAt(1)==="="?Sa(p,m)-p:parseFloat(m)-p,m:h&&h<4?Math.round:0},c=Vd.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(tx.test(r)||g)&&(l.e=0),this._pt=l,l},Fp=function(e,t,i,r,s,o,a,l,c,u){nn(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:nn(d)?c?e[t.indexOf("set")||!nn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,h=nn(d)?c?zS:Dx:kp,m;if(An(r)&&(~r.indexOf("random(")&&(r=Ql(r)),r.charAt(1)==="="&&(m=Sa(f,r)+(Gn(f)||0),(m||m===0)&&(r=m))),!u||f!==r||rh)return!isNaN(f*r)&&r!==""?(m=new gi(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?HS:Lx,0,h),c&&(m.fp=c),a&&m.modifier(a,this,e),this._pt=m):(!d&&!(t in e)&&Dp(t,r),US.call(this,e,t,f,r,h,l||Ii.stringFilter,c))},FS=function(e,t,i,r,s){if(nn(e)&&(e=Ll(e,s,t,i,r)),!Ir(e)||e.style&&e.nodeType||qn(e)||Q_(e))return An(e)?Ll(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Ll(e[a],s,t,i,r);return o},Cx=function(e,t,i,r,s,o){var a,l,c,u;if(Ei[e]&&(a=new Ei[e]).init(s,a.rawVars?t[e]:FS(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new gi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==pa))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Ls,rh,Op=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,f=r.keyframes,h=r.autoRevert,m=e._dur,x=e._startAt,p=e._targets,g=e.parent,b=g&&g.data==="nested"?g.vars.targets:p,y=e._overwrite==="auto"&&!Ap,v=e.timeline,A=r.easeReverse||d,R,M,S,T,U,I,L,G,B,V,$,k,Z;if(v&&(!f||!s)&&(s="none"),e._ease=Po(s,Kl.ease),e._rEase=A&&(Po(A)||e._ease),e._from=!v&&!!r.runBackwards,e._from&&(e.ratio=1),!v||f&&!r.stagger){if(G=p[0]?Co(p[0]).harness:0,k=G&&r[G.prop],R=Wu(r,Lp),x&&(x._zTime<0&&x.progress(1),t<0&&u&&a&&!h?x.render(-1,!0):x.revert(u&&m?hu:cS),x._lazy=0),o){if(Gs(e._startAt=dn.set(p,Fi({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!x&&pi(l),startAt:null,delay:0,onUpdate:c&&function(){return Di(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(In||!a&&!h)&&e._startAt.revert(hu),a&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&m&&!x){if(t&&(a=!1),S=Fi({overwrite:!1,data:"isFromStart",lazy:a&&!x&&pi(l),immediateRender:a,stagger:0,parent:g},R),k&&(S[G.prop]=k),Gs(e._startAt=dn.set(p,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(In?e._startAt.revert(hu):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Vt,Vt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&pi(l)||l&&!m,M=0;M<p.length;M++){if(U=p[M],L=U._gsap||Np(p)[M]._gsap,e._ptLookup[M]=V={},Jf[L.id]&&ks.length&&Gu(),$=b===p?M:b.indexOf(U),G&&(B=new G).init(U,k||R,e,$,b)!==!1&&(e._pt=T=new gi(e._pt,U,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(j){V[j]=T}),B.priority&&(I=1)),!G||k)for(S in R)Ei[S]&&(B=Cx(S,R,e,$,U,b))?B.priority&&(I=1):V[S]=T=Fp.call(e,U,S,"get",R[S],$,b,0,r.stringFilter);e._op&&e._op[M]&&e.kill(U,e._op[M]),y&&e._pt&&(Ls=e,Qt.killTweensOf(U,V,e.globalTime(t)),Z=!e.parent,Ls=0),e._pt&&l&&(Jf[L.id]=1)}I&&Nx(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Z,f&&t<=0&&v.render(Xi,!0,!0)},OS=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,h;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(u=f[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return rh=1,e.vars[t]="+=0",Op(e,a),rh=0,l?Zl(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,d.e&&(d.e=on(i)+Gn(d.e)),d.b&&(d.b=u.s+Gn(d.b))},kS=function(e,t){var i=e[0]?Co(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Ua({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},BS=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(qn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ll=function(e,t,i,r,s){return nn(e)?e.call(t,i,r,s):An(e)&&~e.indexOf("random(")?Ql(e):e},Rx=Ip+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Px={};mi(Rx+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Px[n]=1});var dn=(function(n){Z_(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Pl(r))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,m=l.keyframes,x=l.defaults,p=l.scrollTrigger,g=r.parent||Qt,b=(qn(i)||Q_(i)?us(i[0]):"length"in r)?[i]:ji(i),y,v,A,R,M,S,T,U;if(a._targets=b.length?Np(b):Zl("GSAP target "+i+" not found. https://gsap.com",!Ii.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,m||f||Tc(c)||Tc(u)){r=a.vars;var I=r.easeReverse||r.yoyoEase;if(y=a.timeline=new hi({data:"nested",defaults:x||{},targets:g&&g.data==="nested"?g.vars.targets:b}),y.kill(),y.parent=y._dp=Xr(a),y._start=0,f||Tc(c)||Tc(u)){if(R=b.length,T=f&&gx(f),Ir(f))for(M in f)~Rx.indexOf(M)&&(U||(U={}),U[M]=f[M]);for(v=0;v<R;v++)A=Wu(r,Px),A.stagger=0,I&&(A.easeReverse=I),U&&Ua(A,U),S=b[v],A.duration=+Ll(c,Xr(a),v,S,b),A.delay=(+Ll(u,Xr(a),v,S,b)||0)-a._delay,!f&&R===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),y.to(S,A,T?T(v,S,b):0),y._ease=St.none;y.duration()?c=u=0:a.timeline=0}else if(m){Pl(Fi(y.vars.defaults,{ease:"none"})),y._ease=Po(m.ease||r.ease||"none");var L=0,G,B,V;if(qn(m))m.forEach(function($){return y.to(b,$,">")}),y.duration();else{A={};for(M in m)M==="ease"||M==="easeEach"||BS(M,m[M],A,m.easeEach);for(M in A)for(G=A[M].sort(function($,k){return $.t-k.t}),L=0,v=0;v<G.length;v++)B=G[v],V={ease:B.e,duration:(B.t-(v?G[v-1].t:0))/100*c},V[M]=B.v,y.to(b,V,L),L+=V.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return h===!0&&!Ap&&(Ls=Xr(a),Qt.killTweensOf(b),Ls=0),yr(g,Xr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!c&&!m&&a._start===Jt(g._time)&&pi(d)&&mS(Xr(a))&&g.data!=="nested")&&(a._tTime=-Vt,a.render(Math.max(0,-u)||0)),p&&fx(Xr(a),p),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-Vt&&!u?l:r<Vt?0:r,f,h,m,x,p,g,b,y;if(!c)_S(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,y=this.timeline,this._repeat){if(x=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(x*100+r,s,o);if(f=Jt(d%x),d===l?(m=this._repeat,f=c):(p=Jt(d/x),m=~~p,m&&m===p?(f=c,m--):f>c&&(f=c)),g=this._yoyo&&m&1,g&&(f=c-f),p=Fa(this._tTime,x),f===a&&!o&&this._initted&&m===p)return this._tTime=d,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==x&&this._initted&&(this._lock=o=1,this.render(Jt(x*m),!0).invalidate()._lock=0)}if(!this._initted){if(hx(this,u?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var v=f<a;if(v!==this._inv){var A=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=A?(v?-1:1)/A:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(f/c);if(this._from&&(this.ratio=b=1-b),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!p&&(Di(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(b,h.d),h=h._next;y&&y.render(r<0?r:y._dur*y._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Qf(this,r,s,o),Di(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&Di(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Qf(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Gs(this,1),!s&&!(u&&!a)&&(d||a||g)&&(Di(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){ec||Ai.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Op(this,c),u=this._ease(c/this._dur),OS(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Sd(this,0),this.parent||ux(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?pl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!In),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ls&&Ls.vars.overwrite!==!0)._first||pl(this),this.parent&&o!==this.timeline.totalDuration()&&Oa(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ji(r):a,c=this._ptLookup,u=this._pt,d,f,h,m,x,p,g;if((!s||s==="all")&&hS(a,l))return s==="all"&&(this._pt=0),pl(this);for(d=this._op=this._op||[],s!=="all"&&(An(s)&&(x={},mi(s,function(b){return x[b]=1}),s=x),s=kS(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],s==="all"?(d[g]=s,m=f,h={}):(h=d[g]=d[g]||{},m=s);for(x in m)p=f&&f[x],p&&((!("kill"in p.d)||p.d.kill(x)===!0)&&yd(this,p,"_pt"),delete f[x]),h!=="all"&&(h[x]=1)}return this._initted&&!this._pt&&u&&pl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Dl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Dl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Qt.killTweensOf(r,s,o)},e})(tc);Fi(dn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});mi("staggerTo,staggerFrom,staggerFromTo",function(n){dn[n]=function(){var e=new hi,t=th.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var kp=function(e,t,i){return e[t]=i},Dx=function(e,t,i){return e[t](i)},zS=function(e,t,i,r){return e[t](r.fp,i)},VS=function(e,t,i){return e.setAttribute(t,i)},Bp=function(e,t){return nn(e[t])?Dx:Cp(e[t])&&e.setAttribute?VS:kp},Lx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},HS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ix=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},zp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},GS=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},WS=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?yd(this,t,"_pt"):t.dep||(i=1),t=r;return!i},$S=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Nx=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},gi=(function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||Lx,this.d=l||this,this.set=c||kp,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=$S,this.m=i,this.mt=s,this.tween=r},n})();mi(Ip+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return Lp[n]=1});Ui.TweenMax=Ui.TweenLite=dn;Ui.TimelineLite=Ui.TimelineMax=hi;Qt=new hi({sortChildren:!1,defaults:Kl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ii.stringFilter=Ex;var Do=[],mu={},XS=[],sm=0,jS=0,Xd=function(e){return(mu[e]||XS).map(function(t){return t()})},sh=function(){var e=Date.now(),t=[];e-sm>2&&(Xd("matchMediaInit"),Do.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=pr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),Xd("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),sm=e,Xd("matchMedia"))},Ux=(function(){function n(t,i){this.selector=i&&nh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=jS++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){nn(i)&&(s=r,r=i,i=nn);var o=this,a=function(){var c=Kt,u=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=nh(s)),Kt=o,d=r.apply(o,arguments),nn(d)&&o._r.push(d),Kt=c,o.selector=u,o.isReverted=!1,d};return o.last=a,i===nn?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Kt;Kt=null,i(this),Kt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof dn&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof hi?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof dn)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Do.length;o--;)Do[o].id===this.id&&Do.splice(o,1)},e.revert=function(i){this.kill(i||{})},n})(),YS=(function(){function n(t){this.contexts=[],this.scope=t,Kt&&Kt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Ir(i)||(i={matches:i});var o=new Ux(0,s||this.scope),a=o.conditions={},l,c,u;Kt&&!o.selector&&(o.selector=Kt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=pr.matchMedia(i[c]),l&&(Do.indexOf(o)<0&&Do.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(sh):l.addEventListener("change",sh)));return u&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n})(),Xu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return Sx(r)})},timeline:function(e){return new hi(e)},getTweensOf:function(e,t){return Qt.getTweensOf(e,t)},getProperty:function(e,t,i,r){An(e)&&(e=ji(e)[0]);var s=Co(e||{}).get,o=i?cx:lx;return i==="native"&&(i=""),e&&(t?o((Ei[t]&&Ei[t].get||s)(e,t,i,r)):function(a,l,c){return o((Ei[a]&&Ei[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=ji(e),e.length>1){var r=e.map(function(u){return vi.quickSetter(u,t,i)}),s=r.length;return function(u){for(var d=s;d--;)r[d](u)}}e=e[0]||{};var o=Ei[t],a=Co(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var d=new o;pa._pt=0,d.init(e,i?u+i:u,pa,0,[e]),d.render(1,d),pa._pt&&zp(1,pa)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=vi.to(e,Fi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Qt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Po(e.ease,Kl.ease)),em(Kl,e||{})},config:function(e){return em(Ii,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Ei[a]&&!Ui[a]&&Zl(t+" effect requires "+a+" plugin.")}),Hd[t]=function(a,l,c){return i(ji(a),Fi(l||{},s),c)},o&&(hi.prototype[t]=function(a,l,c){return this.add(Hd[t](a,Ir(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){St[e]=Po(t)},parseEase:function(e,t){return arguments.length?Po(e,t):St},getById:function(e){return Qt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new hi(e),r,s;for(i.smoothChildTiming=pi(e.smoothChildTiming),Qt.remove(i),i._dp=0,i._time=i._tTime=Qt._time,r=Qt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof dn&&r.vars.onComplete===r._targets[0]))&&yr(i,r,r._start-r._delay),r=s;return yr(Qt,i,0),i},context:function(e,t){return e?new Ux(e,t):Kt},matchMedia:function(e){return new YS(e)},matchMediaRefresh:function(){return Do.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||sh()},addEventListener:function(e,t){var i=mu[e]||(mu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=mu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:ES,wrapYoyo:TS,distribute:gx,random:xx,snap:_x,normalize:MS,getUnit:Gn,clamp:yS,splitColor:wx,toArray:ji,selector:nh,mapRange:yx,pipe:SS,unitize:wS,interpolate:AS,shuffle:mx},install:ix,effects:Hd,ticker:Ai,updateRoot:hi.updateRoot,plugins:Ei,globalTimeline:Qt,core:{PropTween:gi,globals:rx,Tween:dn,Timeline:hi,Animation:tc,getCache:Co,_removeLinkedListItem:yd,reverting:function(){return In},context:function(e){return e&&Kt&&(Kt.data.push(e),e._ctx=Kt),Kt},suppressOverwrites:function(e){return Ap=e}}};mi("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Xu[n]=dn[n]});Ai.add(hi.updateRoot);pa=Xu.to({},{duration:0});var qS=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},KS=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=qS(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},jd=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(An(s)&&(l={},mi(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}KS(a,s)}}}},vi=Xu.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)In?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},jd("roundProps",ih),jd("modifiers"),jd("snap",_x))||Xu;dn.version=hi.version=vi.version="3.15.0";nx=1;Rp()&&ka();St.Power0;St.Power1;St.Power2;St.Power3;St.Power4;St.Linear;St.Quad;St.Cubic;St.Quart;St.Quint;St.Strong;St.Elastic;St.Back;St.SteppedEase;St.Bounce;St.Sine;St.Expo;St.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var om,Is,wa,Vp,bo,am,Hp,ZS=function(){return typeof window<"u"},ds={},fo=180/Math.PI,Ma=Math.PI/180,$o=Math.atan2,lm=1e8,Gp=/([A-Z])/g,JS=/(left|right|width|margin|padding|x)/i,QS=/[\s,\(]\S/,br={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},oh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ew=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},tw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},nw=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},iw=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Fx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ox=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},rw=function(e,t,i){return e.style[t]=i},sw=function(e,t,i){return e.style.setProperty(t,i)},ow=function(e,t,i){return e._gsap[t]=i},aw=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},lw=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},cw=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},en="transform",_i=en+"Origin",uw=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in ds&&s){if(this.tfm=this.tfm||{},e!=="transform")e=br[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Yr(r,a)}):this.tfm[e]=o.x?o[e]:Yr(r,e),e===_i&&(this.tfm.zOrigin=o.zOrigin);else return br.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(en)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(_i,t,"")),e=en}(s||t)&&this.props.push(e,t,s[e])},kx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},dw=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Gp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Hp(),(!s||!s.isStart)&&!i[en]&&(kx(i),r.zOrigin&&i[_i]&&(i[_i]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Bx=function(e,t){var i={target:e,props:[],revert:dw,save:uw};return e._gsap||vi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},zx,ah=function(e,t){var i=Is.createElementNS?Is.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Is.createElement(e);return i&&i.style?i:Is.createElement(e)},Li=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Gp,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Ba(t)||t,1)||""},cm="O,Moz,ms,Ms,Webkit".split(","),Ba=function(e,t,i){var r=t||bo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(cm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?cm[o]:"")+e},lh=function(){ZS()&&window.document&&(om=window,Is=om.document,wa=Is.documentElement,bo=ah("div")||{style:{}},ah("div"),en=Ba(en),_i=en+"Origin",bo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",zx=!!Ba("perspective"),Hp=vi.core.reverting,Vp=1)},um=function(e){var t=e.ownerSVGElement,i=ah("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),wa.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),wa.removeChild(i),s},dm=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Vx=function(e){var t,i;try{t=e.getBBox()}catch{t=um(e),i=1}return t&&(t.width||t.height)||i||(t=um(e)),t&&!t.width&&!t.x&&!t.y?{x:+dm(e,["x","cx","x1"])||0,y:+dm(e,["y","cy","y1"])||0,width:0,height:0}:t},Hx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Vx(e))},Ws=function(e,t){if(t){var i=e.style,r;t in ds&&t!==_i&&(t=en),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Gp,"-$1").toLowerCase())):i.removeAttribute(t)}},Ns=function(e,t,i,r,s,o){var a=new gi(e._pt,t,i,0,1,o?Ox:Fx);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},fm={deg:1,rad:1,turn:1},fw={grid:1,flex:1},$s=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=bo.style,l=JS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",h=r==="%",m,x,p,g;if(r===o||!s||fm[r]||fm[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),g=e.getCTM&&Hx(e),(h||o==="%")&&(ds[t]||~t.indexOf("adius")))return m=g?e.getBBox()[l?"width":"height"]:e[u],on(h?s/m*d:s/100*m);if(a[l?"width":"height"]=d+(f?o:r),x=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(x=(e.ownerSVGElement||{}).parentNode),(!x||x===Is||!x.appendChild)&&(x=Is.body),p=x._gsap,p&&h&&p.width&&l&&p.time===Ai.time&&!p.uncache)return on(s/p.width*d);if(h&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=d+r,m=e[u],b?e.style[t]=b:Ws(e,t)}else(h||o==="%")&&!fw[Li(x,"display")]&&(a.position=Li(e,"position")),x===e&&(a.position="static"),x.appendChild(bo),m=bo[u],x.removeChild(bo),a.position="absolute";return l&&h&&(p=Co(x),p.time=Ai.time,p.width=x[u]),on(f?m*s/d:m&&s?d/m*s:0)},Yr=function(e,t,i,r){var s;return Vp||lh(),t in br&&t!=="transform"&&(t=br[t],~t.indexOf(",")&&(t=t.split(",")[0])),ds[t]&&t!=="transform"?(s=ic(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Yu(Li(e,_i))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ju[t]&&ju[t](e,t,i)||Li(e,t)||ox(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?$s(e,t,s,i)+i:s},hw=function(e,t,i,r){if(!i||i==="none"){var s=Ba(t,e,1),o=s&&Li(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Li(e,"borderTopColor"))}var a=new gi(this._pt,e.style,t,0,1,Ix),l=0,c=0,u,d,f,h,m,x,p,g,b,y,v,A;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Li(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(x=e.style[t],e.style[t]=r,r=Li(e,t)||r,x?e.style[t]=x:Ws(e,t)),u=[i,r],Ex(u),i=u[0],r=u[1],f=i.match(ha)||[],A=r.match(ha)||[],A.length){for(;d=ha.exec(r);)p=d[0],b=r.substring(l,d.index),m?m=(m+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(m=1),p!==(x=f[c++]||"")&&(h=parseFloat(x)||0,v=x.substr((h+"").length),p.charAt(1)==="="&&(p=Sa(h,p)+v),g=parseFloat(p),y=p.substr((g+"").length),l=ha.lastIndex-y.length,y||(y=y||Ii.units[t]||v,l===r.length&&(r+=y,a.e+=y)),v!==y&&(h=$s(e,t,x,y)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:h,c:g-h,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Ox:Fx;return tx.test(r)&&(a.e=0),this._pt=a,a},hm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},pw=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=hm[i]||i,t[1]=hm[r]||r,t.join(" ")},mw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ds[a]&&(l=1,a=a==="transformOrigin"?_i:en),Ws(i,a);l&&(Ws(i,en),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",ic(i,1),o.uncache=1,kx(r)))}},ju={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new gi(e._pt,t,i,0,0,mw);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},nc=[1,0,0,1,0,0],Gx={},Wx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},pm=function(e){var t=Li(e,en);return Wx(t)?nc:t.substr(7).match(ex).map(on)},Wp=function(e,t){var i=e._gsap||Co(e),r=e.style,s=pm(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?nc:s):(s===nc&&!e.offsetParent&&e!==wa&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,wa.appendChild(e)),s=pm(e),l?r.display=l:Ws(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):wa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ch=function(e,t,i,r,s,o){var a=e._gsap,l=s||Wp(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,h=l[0],m=l[1],x=l[2],p=l[3],g=l[4],b=l[5],y=t.split(" "),v=parseFloat(y[0])||0,A=parseFloat(y[1])||0,R,M,S,T;i?l!==nc&&(M=h*p-m*x)&&(S=v*(p/M)+A*(-x/M)+(x*b-p*g)/M,T=v*(-m/M)+A*(h/M)-(h*b-m*g)/M,v=S,A=T):(R=Vx(e),v=R.x+(~y[0].indexOf("%")?v/100*R.width:v),A=R.y+(~(y[1]||y[0]).indexOf("%")?A/100*R.height:A)),r||r!==!1&&a.smooth?(g=v-c,b=A-u,a.xOffset=d+(g*h+b*x)-g,a.yOffset=f+(g*m+b*p)-b):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=A,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[_i]="0px 0px",o&&(Ns(o,a,"xOrigin",c,v),Ns(o,a,"yOrigin",u,A),Ns(o,a,"xOffset",d,a.xOffset),Ns(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+A)},ic=function(e,t){var i=e._gsap||new Ax(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Li(e,_i)||"0",u,d,f,h,m,x,p,g,b,y,v,A,R,M,S,T,U,I,L,G,B,V,$,k,Z,j,F,ue,ge,_e,ye,Ae;return u=d=f=x=p=g=b=y=v=0,h=m=1,i.svg=!!(e.getCTM&&Hx(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[en]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[en]!=="none"?l[en]:"")),r.scale=r.rotate=r.translate="none"),M=Wp(e,i.svg),i.svg&&(i.uncache?(Z=e.getBBox(),c=i.xOrigin-Z.x+"px "+(i.yOrigin-Z.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),ch(e,k||c,!!k||i.originIsAbsolute,i.smooth!==!1,M)),A=i.xOrigin||0,R=i.yOrigin||0,M!==nc&&(I=M[0],L=M[1],G=M[2],B=M[3],u=V=M[4],d=$=M[5],M.length===6?(h=Math.sqrt(I*I+L*L),m=Math.sqrt(B*B+G*G),x=I||L?$o(L,I)*fo:0,b=G||B?$o(G,B)*fo+x:0,b&&(m*=Math.abs(Math.cos(b*Ma))),i.svg&&(u-=A-(A*I+R*G),d-=R-(A*L+R*B))):(Ae=M[6],_e=M[7],F=M[8],ue=M[9],ge=M[10],ye=M[11],u=M[12],d=M[13],f=M[14],S=$o(Ae,ge),p=S*fo,S&&(T=Math.cos(-S),U=Math.sin(-S),k=V*T+F*U,Z=$*T+ue*U,j=Ae*T+ge*U,F=V*-U+F*T,ue=$*-U+ue*T,ge=Ae*-U+ge*T,ye=_e*-U+ye*T,V=k,$=Z,Ae=j),S=$o(-G,ge),g=S*fo,S&&(T=Math.cos(-S),U=Math.sin(-S),k=I*T-F*U,Z=L*T-ue*U,j=G*T-ge*U,ye=B*U+ye*T,I=k,L=Z,G=j),S=$o(L,I),x=S*fo,S&&(T=Math.cos(S),U=Math.sin(S),k=I*T+L*U,Z=V*T+$*U,L=L*T-I*U,$=$*T-V*U,I=k,V=Z),p&&Math.abs(p)+Math.abs(x)>359.9&&(p=x=0,g=180-g),h=on(Math.sqrt(I*I+L*L+G*G)),m=on(Math.sqrt($*$+Ae*Ae)),S=$o(V,$),b=Math.abs(S)>2e-4?S*fo:0,v=ye?1/(ye<0?-ye:ye):0),i.svg&&(k=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Wx(Li(e,en)),k&&e.setAttribute("transform",k))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(h*=-1,b+=x<=0?180:-180,x+=x<=0?180:-180):(m*=-1,b+=b<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=on(h),i.scaleY=on(m),i.rotation=on(x)+a,i.rotationX=on(p)+a,i.rotationY=on(g)+a,i.skewX=b+a,i.skewY=y+a,i.transformPerspective=v+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[_i]=Yu(c)),i.xOffset=i.yOffset=0,i.force3D=Ii.force3D,i.renderTransform=i.svg?_w:zx?$x:gw,i.uncache=0,i},Yu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Yd=function(e,t,i){var r=Gn(t);return on(parseFloat(t)+parseFloat($s(e,"x",i+"px",r)))+r},gw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,$x(e,t)},no="0deg",el="0px",io=") ",$x=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,d=i.rotationX,f=i.skewX,h=i.skewY,m=i.scaleX,x=i.scaleY,p=i.transformPerspective,g=i.force3D,b=i.target,y=i.zOrigin,v="",A=g==="auto"&&e&&e!==1||g===!0;if(y&&(d!==no||u!==no)){var R=parseFloat(u)*Ma,M=Math.sin(R),S=Math.cos(R),T;R=parseFloat(d)*Ma,T=Math.cos(R),o=Yd(b,o,M*T*-y),a=Yd(b,a,-Math.sin(R)*-y),l=Yd(b,l,S*T*-y+y)}p!==el&&(v+="perspective("+p+io),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(A||o!==el||a!==el||l!==el)&&(v+=l!==el||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+io),c!==no&&(v+="rotate("+c+io),u!==no&&(v+="rotateY("+u+io),d!==no&&(v+="rotateX("+d+io),(f!==no||h!==no)&&(v+="skew("+f+", "+h+io),(m!==1||x!==1)&&(v+="scale("+m+", "+x+io),b.style[en]=v||"translate(0, 0)"},_w=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,d=i.scaleX,f=i.scaleY,h=i.target,m=i.xOrigin,x=i.yOrigin,p=i.xOffset,g=i.yOffset,b=i.forceCSS,y=parseFloat(o),v=parseFloat(a),A,R,M,S,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ma,c*=Ma,A=Math.cos(l)*d,R=Math.sin(l)*d,M=Math.sin(l-c)*-f,S=Math.cos(l-c)*f,c&&(u*=Ma,T=Math.tan(c-u),T=Math.sqrt(1+T*T),M*=T,S*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),A*=T,R*=T)),A=on(A),R=on(R),M=on(M),S=on(S)):(A=d,S=f,R=M=0),(y&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(y=$s(h,"x",o,"px"),v=$s(h,"y",a,"px")),(m||x||p||g)&&(y=on(y+m-(m*A+x*M)+p),v=on(v+x-(m*R+x*S)+g)),(r||s)&&(T=h.getBBox(),y=on(y+r/100*T.width),v=on(v+s/100*T.height)),T="matrix("+A+","+R+","+M+","+S+","+y+","+v+")",h.setAttribute("transform",T),b&&(h.style[en]=T)},xw=function(e,t,i,r,s){var o=360,a=An(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?fo:1),c=l-r,u=r+c+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*lm)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*lm)%o-~~(c/o)*o)),e._pt=f=new gi(e._pt,t,i,r,c,ew),f.e=u,f.u="deg",e._props.push(i),f},mm=function(e,t){for(var i in t)e[i]=t[i];return e},vw=function(e,t,i){var r=mm({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,d,f,h,m;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[en]=t,a=ic(i,1),Ws(i,en),i.setAttribute("transform",c)):(c=getComputedStyle(i)[en],o[en]=t,a=ic(i,1),o[en]=c);for(l in ds)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(h=Gn(c),m=Gn(u),d=h!==m?$s(i,l,c,m):parseFloat(c),f=parseFloat(u),e._pt=new gi(e._pt,a,l,d,f-d,oh),e._pt.u=m||0,e._props.push(l));mm(a,r)};mi("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});ju[e>1?"border"+n:n]=function(a,l,c,u,d){var f,h;if(arguments.length<4)return f=o.map(function(m){return Yr(a,m,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},o.forEach(function(m,x){return h[m]=f[x]=f[x]||f[(x-1)/2|0]}),a.init(l,h,d)}});var Xx={name:"css",register:lh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,d,f,h,m,x,p,g,b,y,v,A,R,M,S,T;Vp||lh(),this.styles=this.styles||Bx(e),S=this.styles.props,this.tween=i;for(x in t)if(x!=="autoRound"&&(u=t[x],!(Ei[x]&&Cx(x,t,i,r,e,s)))){if(h=typeof u,m=ju[x],h==="function"&&(u=u.call(i,r,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Ql(u)),m)m(this,e,x,u,i)&&(M=1);else if(x.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(x)+"").trim(),u+="",Bs.lastIndex=0,Bs.test(c)||(p=Gn(c),g=Gn(u),g?p!==g&&(c=$s(e,x,c,g)+g):p&&(u+=p)),this.add(a,"setProperty",c,u,r,s,0,0,x),o.push(x),S.push(x,0,a[x]);else if(h!=="undefined"){if(l&&x in l?(c=typeof l[x]=="function"?l[x].call(i,r,e,s):l[x],An(c)&&~c.indexOf("random(")&&(c=Ql(c)),Gn(c+"")||c==="auto"||(c+=Ii.units[x]||Gn(Yr(e,x))||""),(c+"").charAt(1)==="="&&(c=Yr(e,x))):c=Yr(e,x),f=parseFloat(c),b=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),d=parseFloat(u),x in br&&(x==="autoAlpha"&&(f===1&&Yr(e,"visibility")==="hidden"&&d&&(f=0),S.push("visibility",0,a.visibility),Ns(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),x!=="scale"&&x!=="transform"&&(x=br[x],~x.indexOf(",")&&(x=x.split(",")[0]))),y=x in ds,y){if(this.styles.save(x),T=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=Li(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var U=e.style.perspective;e.style.perspective=u,u=Li(e,"perspective"),U?e.style.perspective=U:Ws(e,"perspective")}d=parseFloat(u)}if(v||(A=e._gsap,A.renderTransform&&!t.parseTransform||ic(e,t.parseTransform),R=t.smoothOrigin!==!1&&A.smooth,v=this._pt=new gi(this._pt,a,en,0,1,A.renderTransform,A,0,-1),v.dep=1),x==="scale")this._pt=new gi(this._pt,A,"scaleY",A.scaleY,(b?Sa(A.scaleY,b+d):d)-A.scaleY||0,oh),this._pt.u=0,o.push("scaleY",x),x+="X";else if(x==="transformOrigin"){S.push(_i,0,a[_i]),u=pw(u),A.svg?ch(e,u,0,R,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==A.zOrigin&&Ns(this,A,"zOrigin",A.zOrigin,g),Ns(this,a,x,Yu(c),Yu(u)));continue}else if(x==="svgOrigin"){ch(e,u,1,R,0,this);continue}else if(x in Gx){xw(this,A,x,f,b?Sa(f,b+u):u);continue}else if(x==="smoothOrigin"){Ns(this,A,"smooth",A.smooth,u);continue}else if(x==="force3D"){A[x]=u;continue}else if(x==="transform"){vw(this,u,e);continue}}else x in a||(x=Ba(x)||x);if(y||(d||d===0)&&(f||f===0)&&!QS.test(u)&&x in a)p=(c+"").substr((f+"").length),d||(d=0),g=Gn(u)||(x in Ii.units?Ii.units[x]:p),p!==g&&(f=$s(e,x,c,g)),this._pt=new gi(this._pt,y?A:a,x,f,(b?Sa(f,b+d):d)-f,!y&&(g==="px"||x==="zIndex")&&t.autoRound!==!1?iw:oh),this._pt.u=g||0,y&&T!==u?(this._pt.b=c,this._pt.e=T,this._pt.r=nw):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=tw);else if(x in a)hw.call(this,e,x,c,b?b+u:u);else if(x in e)this.add(e,x,c||e[x],b?b+u:u,r,s);else if(x!=="parseTransform"){Dp(x,u);continue}y||(x in a?S.push(x,0,a[x]):typeof e[x]=="function"?S.push(x,2,e[x]()):S.push(x,1,c||e[x])),o.push(x)}}M&&Nx(this)},render:function(e,t){if(t.tween._time||!Hp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Yr,aliases:br,getSetter:function(e,t,i){var r=br[t];return r&&r.indexOf(",")<0&&(t=r),t in ds&&t!==_i&&(e._gsap.x||Yr(e,"x"))?i&&am===i?t==="scale"?aw:ow:(am=i||{})&&(t==="scale"?lw:cw):e.style&&!Cp(e.style[t])?rw:~t.indexOf("-")?sw:Bp(e,t)},core:{_removeProperty:Ws,_getMatrix:Wp}};vi.utils.checkPrefix=Ba;vi.core.getStyleSaver=Bx;(function(n,e,t,i){var r=mi(n+","+e+","+t,function(s){ds[s]=1});mi(e,function(s){Ii.units[s]="deg",Gx[s]=1}),br[r[13]]=n+","+e,mi(i,function(s){var o=s.split(":");br[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");mi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ii.units[n]="px"});vi.registerPlugin(Xx);var $e=vi.registerPlugin(Xx)||vi;$e.core.Tween;function yw(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function bw(n,e,t){return e&&yw(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Dn,gu,Ci,Us,Fs,Ea,jx,ho,Ta,Yx,Qr,nr,qx,Kx=function(){return Dn||typeof window<"u"&&(Dn=window.gsap)&&Dn.registerPlugin&&Dn},Zx=1,ma=[],yt=[],Ar=[],Il=Date.now,uh=function(e,t){return t},Sw=function(){var e=Ta.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,yt),r.push.apply(r,Ar),yt=i,Ar=r,uh=function(o,a){return t[o](a)}},zs=function(e,t){return~Ar.indexOf(e)&&Ar[Ar.indexOf(e)+1][t]},Nl=function(e){return!!~Yx.indexOf(e)},Qn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Zn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Ac="scrollLeft",Cc="scrollTop",dh=function(){return Qr&&Qr.isPressed||yt.cache++},qu=function(e,t){var i=function r(s){if(s||s===0){Zx&&(Ci.history.scrollRestoration="manual");var o=Qr&&Qr.isPressed;s=r.v=Math.round(s)||(Qr&&Qr.iOS?1:0),e(s),r.cacheID=yt.cache,o&&uh("ss",s)}else(t||yt.cache!==r.cacheID||uh("ref"))&&(r.cacheID=yt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},oi={s:Ac,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:qu(function(n){return arguments.length?Ci.scrollTo(n,_n.sc()):Ci.pageXOffset||Us[Ac]||Fs[Ac]||Ea[Ac]||0})},_n={s:Cc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:oi,sc:qu(function(n){return arguments.length?Ci.scrollTo(oi.sc(),n):Ci.pageYOffset||Us[Cc]||Fs[Cc]||Ea[Cc]||0})},fi=function(e,t){return(t&&t._ctx&&t._ctx.selector||Dn.utils.toArray)(e)[0]||(typeof e=="string"&&Dn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},ww=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Xs=function(e,t){var i=t.s,r=t.sc;Nl(e)&&(e=Us.scrollingElement||Fs);var s=yt.indexOf(e),o=r===_n.sc?1:2;!~s&&(s=yt.push(e)-1),yt[s+o]||Qn(e,"scroll",dh);var a=yt[s+o],l=a||(yt[s+o]=qu(zs(e,i),!0)||(Nl(e)?r:qu(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=Dn.getProperty(e,"scrollBehavior")==="smooth"),l},fh=function(e,t,i){var r=e,s=e,o=Il(),a=o,l=t||50,c=Math.max(500,l*3),u=function(m,x){var p=Il();x||p-o>l?(s=r,r=m,a=o,o=p):i?r+=m:r=s+(m-s)/(p-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},f=function(m){var x=a,p=s,g=Il();return(m||m===0)&&m!==r&&u(m),o===a||g-a>c?0:(r+(i?p:-p))/((i?g:o)-x)*1e3};return{update:u,reset:d,getVelocity:f}},tl=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},gm=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},Jx=function(){Ta=Dn.core.globals().ScrollTrigger,Ta&&Ta.core&&Sw()},Qx=function(e){return Dn=e||Kx(),!gu&&Dn&&typeof document<"u"&&document.body&&(Ci=window,Us=document,Fs=Us.documentElement,Ea=Us.body,Yx=[Ci,Us,Fs,Ea],Dn.utils.clamp,qx=Dn.core.context||function(){},ho="onpointerenter"in Ea?"pointer":"mouse",jx=ln.isTouch=Ci.matchMedia&&Ci.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ci||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,nr=ln.eventTypes=("ontouchstart"in Fs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Fs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Zx=0},500),gu=1),Ta||Jx(),gu};oi.op=_n;yt.cache=0;var ln=(function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){gu||Qx(Dn)||console.warn("Please gsap.registerPlugin(Observer)"),Ta||Jx();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,d=i.onStop,f=i.onStopDelay,h=i.ignore,m=i.wheelSpeed,x=i.event,p=i.onDragStart,g=i.onDragEnd,b=i.onDrag,y=i.onPress,v=i.onRelease,A=i.onRight,R=i.onLeft,M=i.onUp,S=i.onDown,T=i.onChangeX,U=i.onChangeY,I=i.onChange,L=i.onToggleX,G=i.onToggleY,B=i.onHover,V=i.onHoverEnd,$=i.onMove,k=i.ignoreCheck,Z=i.isNormalizer,j=i.onGestureStart,F=i.onGestureEnd,ue=i.onWheel,ge=i.onEnable,_e=i.onDisable,ye=i.onClick,Ae=i.scrollSpeed,ee=i.capture,fe=i.allowClicks,le=i.lockAxis,Pe=i.onLockAxis;this.target=a=fi(a)||Fs,this.vars=i,h&&(h=Dn.utils.toArray(h)),r=r||1e-9,s=s||0,m=m||1,Ae=Ae||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Ci.getComputedStyle(Ea).lineHeight)||22);var Ce,ce,E,C,H,ne,q,O=this,N=0,xe=0,he=i.passive||!u&&i.passive!==!1,re=Xs(a,oi),me=Xs(a,_n),P=re(),w=me(),z=~o.indexOf("touch")&&!~o.indexOf("pointer")&&nr[0]==="pointerdown",J=Nl(a),te=a.ownerDocument||Us,K=[0,0,0],Me=[0,0,0],ve=0,He=function(){return ve=Il()},Le=function(Ze,pt){return(O.event=Ze)&&h&&ww(Ze.target,h)||pt&&z&&Ze.pointerType!=="touch"||k&&k(Ze,pt)},be=function(){O._vx.reset(),O._vy.reset(),ce.pause(),d&&d(O)},Ee=function(){var Ze=O.deltaX=gm(K),pt=O.deltaY=gm(Me),Be=Math.abs(Ze)>=r,at=Math.abs(pt)>=r;I&&(Be||at)&&I(O,Ze,pt,K,Me),Be&&(A&&O.deltaX>0&&A(O),R&&O.deltaX<0&&R(O),T&&T(O),L&&O.deltaX<0!=N<0&&L(O),N=O.deltaX,K[0]=K[1]=K[2]=0),at&&(S&&O.deltaY>0&&S(O),M&&O.deltaY<0&&M(O),U&&U(O),G&&O.deltaY<0!=xe<0&&G(O),xe=O.deltaY,Me[0]=Me[1]=Me[2]=0),(C||E)&&($&&$(O),E&&(p&&E===1&&p(O),b&&b(O),E=0),C=!1),ne&&!(ne=!1)&&Pe&&Pe(O),H&&(ue(O),H=!1),Ce=0},De=function(Ze,pt,Be){K[Be]+=Ze,Me[Be]+=pt,O._vx.update(Ze),O._vy.update(pt),c?Ce||(Ce=requestAnimationFrame(Ee)):Ee()},Fe=function(Ze,pt){le&&!q&&(O.axis=q=Math.abs(Ze)>Math.abs(pt)?"x":"y",ne=!0),q!=="y"&&(K[2]+=Ze,O._vx.update(Ze,!0)),q!=="x"&&(Me[2]+=pt,O._vy.update(pt,!0)),c?Ce||(Ce=requestAnimationFrame(Ee)):Ee()},Ie=function(Ze){if(!Le(Ze,1)){Ze=tl(Ze,u);var pt=Ze.clientX,Be=Ze.clientY,at=pt-O.x,nt=Be-O.y,lt=O.isDragging;O.x=pt,O.y=Be,(lt||(at||nt)&&(Math.abs(O.startX-pt)>=s||Math.abs(O.startY-Be)>=s))&&(E||(E=lt?2:1),lt||(O.isDragging=!0),Fe(at,nt))}},st=O.onPress=function(Ve){Le(Ve,1)||Ve&&Ve.button||(O.axis=q=null,ce.pause(),O.isPressed=!0,Ve=tl(Ve),N=xe=0,O.startX=O.x=Ve.clientX,O.startY=O.y=Ve.clientY,O._vx.reset(),O._vy.reset(),Qn(Z?a:te,nr[1],Ie,he,!0),O.deltaX=O.deltaY=0,y&&y(O))},W=O.onRelease=function(Ve){if(!Le(Ve,1)){Zn(Z?a:te,nr[1],Ie,!0);var Ze=!isNaN(O.y-O.startY),pt=O.isDragging,Be=pt&&(Math.abs(O.x-O.startX)>3||Math.abs(O.y-O.startY)>3),at=tl(Ve);!Be&&Ze&&(O._vx.reset(),O._vy.reset(),u&&fe&&Dn.delayedCall(.08,function(){if(Il()-ve>300&&!Ve.defaultPrevented){if(Ve.target.click)Ve.target.click();else if(te.createEvent){var nt=te.createEvent("MouseEvents");nt.initMouseEvent("click",!0,!0,Ci,1,at.screenX,at.screenY,at.clientX,at.clientY,!1,!1,!1,!1,0,null),Ve.target.dispatchEvent(nt)}}})),O.isDragging=O.isGesturing=O.isPressed=!1,d&&pt&&!Z&&ce.restart(!0),E&&Ee(),g&&pt&&g(O),v&&v(O,Be)}},Re=function(Ze){return Ze.touches&&Ze.touches.length>1&&(O.isGesturing=!0)&&j(Ze,O.isDragging)},Te=function(){return(O.isGesturing=!1)||F(O)},Oe=function(Ze){if(!Le(Ze)){var pt=re(),Be=me();De((pt-P)*Ae,(Be-w)*Ae,1),P=pt,w=Be,d&&ce.restart(!0)}},Se=function(Ze){if(!Le(Ze)){Ze=tl(Ze,u),ue&&(H=!0);var pt=(Ze.deltaMode===1?l:Ze.deltaMode===2?Ci.innerHeight:1)*m;De(Ze.deltaX*pt,Ze.deltaY*pt,0),d&&!Z&&ce.restart(!0)}},de=function(Ze){if(!Le(Ze)){var pt=Ze.clientX,Be=Ze.clientY,at=pt-O.x,nt=Be-O.y;O.x=pt,O.y=Be,C=!0,d&&ce.restart(!0),(at||nt)&&Fe(at,nt)}},Ge=function(Ze){O.event=Ze,B(O)},tt=function(Ze){O.event=Ze,V(O)},Et=function(Ze){return Le(Ze)||tl(Ze,u)&&ye(O)};ce=O._dc=Dn.delayedCall(f||.25,be).pause(),O.deltaX=O.deltaY=0,O._vx=fh(0,50,!0),O._vy=fh(0,50,!0),O.scrollX=re,O.scrollY=me,O.isDragging=O.isGesturing=O.isPressed=!1,qx(this),O.enable=function(Ve){return O.isEnabled||(Qn(J?te:a,"scroll",dh),o.indexOf("scroll")>=0&&Qn(J?te:a,"scroll",Oe,he,ee),o.indexOf("wheel")>=0&&Qn(a,"wheel",Se,he,ee),(o.indexOf("touch")>=0&&jx||o.indexOf("pointer")>=0)&&(Qn(a,nr[0],st,he,ee),Qn(te,nr[2],W),Qn(te,nr[3],W),fe&&Qn(a,"click",He,!0,!0),ye&&Qn(a,"click",Et),j&&Qn(te,"gesturestart",Re),F&&Qn(te,"gestureend",Te),B&&Qn(a,ho+"enter",Ge),V&&Qn(a,ho+"leave",tt),$&&Qn(a,ho+"move",de)),O.isEnabled=!0,O.isDragging=O.isGesturing=O.isPressed=C=E=!1,O._vx.reset(),O._vy.reset(),P=re(),w=me(),Ve&&Ve.type&&st(Ve),ge&&ge(O)),O},O.disable=function(){O.isEnabled&&(ma.filter(function(Ve){return Ve!==O&&Nl(Ve.target)}).length||Zn(J?te:a,"scroll",dh),O.isPressed&&(O._vx.reset(),O._vy.reset(),Zn(Z?a:te,nr[1],Ie,!0)),Zn(J?te:a,"scroll",Oe,ee),Zn(a,"wheel",Se,ee),Zn(a,nr[0],st,ee),Zn(te,nr[2],W),Zn(te,nr[3],W),Zn(a,"click",He,!0),Zn(a,"click",Et),Zn(te,"gesturestart",Re),Zn(te,"gestureend",Te),Zn(a,ho+"enter",Ge),Zn(a,ho+"leave",tt),Zn(a,ho+"move",de),O.isEnabled=O.isPressed=O.isDragging=!1,_e&&_e(O))},O.kill=O.revert=function(){O.disable();var Ve=ma.indexOf(O);Ve>=0&&ma.splice(Ve,1),Qr===O&&(Qr=0)},ma.push(O),Z&&Nl(a)&&(Qr=O),O.enable(x)},bw(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n})();ln.version="3.15.0";ln.create=function(n){return new ln(n)};ln.register=Qx;ln.getAll=function(){return ma.slice()};ln.getById=function(n){return ma.filter(function(e){return e.vars.id===n})[0]};Kx()&&Dn.registerPlugin(ln);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var qe,da,vt,Nt,Ti,Pt,$p,Ku,rc,Ul,gl,Rc,Bn,wd,hh,ni,_m,xm,fa,ev,qd,tv,ti,ph,nv,iv,As,mh,Xp,Aa,jp,Fl,gh,Kd,Pc=1,zn=Date.now,Zd=zn(),Ki=0,_l=0,vm=function(e,t,i){var r=Mi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},ym=function(e,t){return t&&(!Mi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Mw=function n(){return _l&&requestAnimationFrame(n)},bm=function(){return wd=1},Sm=function(){return wd=0},mr=function(e){return e},xl=function(e){return Math.round(e*1e5)/1e5||0},rv=function(){return typeof window<"u"},sv=function(){return qe||rv()&&(qe=window.gsap)&&qe.registerPlugin&&qe},Fo=function(e){return!!~$p.indexOf(e)},ov=function(e){return(e==="Height"?jp:vt["inner"+e])||Ti["client"+e]||Pt["client"+e]},av=function(e){return zs(e,"getBoundingClientRect")||(Fo(e)?function(){return bu.width=vt.innerWidth,bu.height=jp,bu}:function(){return Zr(e)})},Ew=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=zs(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?ov(s):e["client"+s])||0}},Tw=function(e,t){return!t||~Ar.indexOf(e)?av(e):function(){return bu}},Sr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=zs(e,i))?o()-av(e)()[s]:Fo(e)?(Ti[i]||Pt[i])-ov(r):e[i]-e["offset"+r])},Dc=function(e,t){for(var i=0;i<fa.length;i+=3)(!t||~t.indexOf(fa[i+1]))&&e(fa[i],fa[i+1],fa[i+2])},Mi=function(e){return typeof e=="string"},Wn=function(e){return typeof e=="function"},vl=function(e){return typeof e=="number"},po=function(e){return typeof e=="object"},nl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Xo=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},jo=Math.abs,lv="left",cv="top",Yp="right",qp="bottom",Lo="width",Io="height",Ol="Right",kl="Left",Bl="Top",zl="Bottom",un="padding",Gi="margin",za="Width",Kp="Height",gn="px",Wi=function(e){return vt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Aw=function(e){var t=Wi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},wm=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Zr=function(e,t){var i=t&&Wi(e)[hh]!=="matrix(1, 0, 0, 1, 0, 0)"&&qe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},Zu=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},uv=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},Cw=function(e){return function(t){return qe.utils.snap(uv(e),t)}},Zp=function(e){var t=qe.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},Rw=function(e){return function(t,i){return Zp(uv(e))(t,i.direction)}},Lc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},En=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},Mn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Ic=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Mm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Nc={toggleActions:"play",anticipatePin:0},Ju={top:0,left:0,center:.5,bottom:1,right:1},_u=function(e,t){if(Mi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in Ju?Ju[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Uc=function(e,t,i,r,s,o,a,l){var c=s.startColor,u=s.endColor,d=s.fontSize,f=s.indent,h=s.fontWeight,m=Nt.createElement("div"),x=Fo(i)||zs(i,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,g=x?Pt:i.tagName==="IFRAME"?i.contentDocument.body:i,b=e.indexOf("start")!==-1,y=b?c:u,v="border-color:"+y+";font-size:"+d+";color:"+y+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((p||l)&&x?"fixed;":"absolute;"),(p||l||!x)&&(v+=(r===_n?Yp:qp)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=b,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=v,m.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+r.op.d2],xu(m,0,r,b),m},xu=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+za]=1,s["border"+a+za]=0,s[i.p]=t+"px",qe.set(e,s)},xt=[],_h={},sc,Em=function(){return zn()-Ki>34&&(sc||(sc=requestAnimationFrame(ts)))},Yo=function(){(!ti||!ti.isPressed||ti.startX>Pt.clientWidth)&&(yt.cache++,ti?sc||(sc=requestAnimationFrame(ts)):ts(),Ki||ko("scrollStart"),Ki=zn())},Jd=function(){iv=vt.innerWidth,nv=vt.innerHeight},yl=function(e){yt.cache++,(e===!0||!Bn&&!tv&&!Nt.fullscreenElement&&!Nt.webkitFullscreenElement&&(!ph||iv!==vt.innerWidth||Math.abs(vt.innerHeight-nv)>vt.innerHeight*.25))&&Ku.restart(!0)},Oo={},Pw=[],dv=function n(){return Mn(ct,"scrollEnd",n)||So(!0)},ko=function(e){return Oo[e]&&Oo[e].map(function(t){return t()})||Pw},wi=[],fv=function(e){for(var t=0;t<wi.length;t+=5)(!e||wi[t+4]&&wi[t+4].query===e)&&(wi[t].style.cssText=wi[t+1],wi[t].getBBox&&wi[t].setAttribute("transform",wi[t+2]||""),wi[t+3].uncache=1)},hv=function(){return yt.forEach(function(e){return Wn(e)&&++e.cacheID&&(e.rec=e())})},Jp=function(e,t){var i;for(ni=0;ni<xt.length;ni++)i=xt[ni],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Fl=!0,t&&fv(t),t||ko("revert")},pv=function(e,t){yt.cache++,(t||!ii)&&yt.forEach(function(i){return Wn(i)&&i.cacheID++&&(i.rec=0)}),Mi(e)&&(vt.history.scrollRestoration=Xp=e)},ii,No=0,Tm,Dw=function(){if(Tm!==No){var e=Tm=No;requestAnimationFrame(function(){return e===No&&So(!0)})}},mv=function(){Pt.appendChild(Aa),jp=!ti&&Aa.offsetHeight||vt.innerHeight,Pt.removeChild(Aa)},Am=function(e){return rc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},So=function(e,t){if(Ti=Nt.documentElement,Pt=Nt.body,$p=[vt,Nt,Ti,Pt],Ki&&!e&&!Fl){En(ct,"scrollEnd",dv);return}mv(),ii=ct.isRefreshing=!0,Fl||hv();var i=ko("refreshInit");ev&&ct.sort(),t||Jp(),yt.forEach(function(r){Wn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),xt.slice(0).forEach(function(r){return r.refresh()}),Fl=!1,xt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),gh=1,Am(!0),xt.forEach(function(r){var s=Sr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),Am(!1),gh=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),yt.forEach(function(r){Wn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),pv(Xp,1),Ku.pause(),No++,ii=2,ts(2),xt.forEach(function(r){return Wn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),ii=ct.isRefreshing=!1,ko("refresh")},xh=0,vu=1,Vl,ts=function(e){if(e===2||!ii&&!Fl){ct.isUpdating=!0,Vl&&Vl.update(0);var t=xt.length,i=zn(),r=i-Zd>=50,s=t&&xt[0].scroll();if(vu=xh>s?-1:1,ii||(xh=s),r&&(Ki&&!wd&&i-Ki>200&&(Ki=0,ko("scrollEnd")),gl=Zd,Zd=i),vu<0){for(ni=t;ni-- >0;)xt[ni]&&xt[ni].update(0,r);vu=1}else for(ni=0;ni<t;ni++)xt[ni]&&xt[ni].update(0,r);ct.isUpdating=!1}sc=0},vh=[lv,cv,qp,Yp,Gi+zl,Gi+Ol,Gi+Bl,Gi+kl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],yu=vh.concat([Lo,Io,"boxSizing","max"+za,"max"+Kp,"position",Gi,un,un+Bl,un+Ol,un+zl,un+kl]),Lw=function(e,t,i){Ca(i);var r=e._gsap;if(r.spacerIsNative)Ca(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Qd=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=vh.length,o=t.style,a=e.style,l;s--;)l=vh[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[qp]=a[Yp]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Lo]=Zu(e,oi)+gn,o[Io]=Zu(e,_n)+gn,o[un]=a[Gi]=a[cv]=a[lv]="0",Ca(r),a[Lo]=a["max"+za]=i[Lo],a[Io]=a["max"+Kp]=i[Io],a[un]=i[un],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Iw=/([A-Z])/g,Ca=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||qe.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(Iw,"-$1").toLowerCase())}},Fc=function(e){for(var t=yu.length,i=e.style,r=[],s=0;s<t;s++)r.push(yu[s],i[yu[s]]);return r.t=e,r},Nw=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},bu={left:0,top:0},Cm=function(e,t,i,r,s,o,a,l,c,u,d,f,h,m){Wn(e)&&(e=e(l)),Mi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?_u("0"+e.substr(3),i):0));var x=h?h.time():0,p,g,b;if(h&&h.seek(0),isNaN(e)||(e=+e),vl(e))h&&(e=qe.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),a&&xu(a,i,r,!0);else{Wn(t)&&(t=t(l));var y=(e||"0").split(" "),v,A,R,M;b=fi(t,l)||Pt,v=Zr(b)||{},(!v||!v.left&&!v.top)&&Wi(b).display==="none"&&(M=b.style.display,b.style.display="block",v=Zr(b),M?b.style.display=M:b.style.removeProperty("display")),A=_u(y[0],v[r.d]),R=_u(y[1]||"0",i),e=v[r.p]-c[r.p]-u+A+s-R,a&&xu(a,R,r,i-R<20||a._isStart&&R>20),i-=i-R}if(m&&(l[m]=e||-.001,e<0&&(e=0)),o){var S=e+i,T=o._isStart;p="scroll"+r.d2,xu(o,S,r,T&&S>20||!T&&(d?Math.max(Pt[p],Ti[p]):o.parentNode[p])<=S+1),d&&(c=Zr(a),d&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+gn))}return h&&b&&(p=Zr(b),h.seek(f),g=Zr(b),h._caScrollDist=p[r.p]-g[r.p],e=e/h._caScrollDist*f),h&&h.seek(x),h?e:Math.round(e)},Uw=/(webkit|moz|length|cssText|inset)/i,Rm=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===Pt){e._stOrig=s.cssText,a=Wi(e);for(o in a)!+o&&!Uw.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;qe.core.getCache(e).uncache=1,t.appendChild(e)}},gv=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Oc=function(e,t,i){var r={};r[t.p]="+="+i,qe.set(e,r)},Pm=function(e,t){var i=Xs(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,d){var f=o.tween,h=l.onComplete,m={};c=c||i();var x=gv(i,c,function(){f.kill(),o.tween=0});return d=u&&d||0,u=u||a-c,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=m,m[r]=function(){return x(c+u*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){yt.cache++,o.tween&&ts()},l.onComplete=function(){o.tween=0,h&&h.call(f)},f=o.tween=qe.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},En(e,"wheel",i.wheelHandler),ct.isTouch&&En(e,"touchmove",i.wheelHandler),s},ct=(function(){function n(t,i){da||n.register(qe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),mh(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!_l){this.update=this.refresh=this.kill=mr;return}i=wm(Mi(i)||vl(i)||i.nodeType?{trigger:i}:i,Nc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,f=s.trigger,h=s.pin,m=s.pinSpacing,x=s.invalidateOnRefresh,p=s.anticipatePin,g=s.onScrubComplete,b=s.onSnapComplete,y=s.once,v=s.snap,A=s.pinReparent,R=s.pinSpacer,M=s.containerAnimation,S=s.fastScrollEnd,T=s.preventOverlaps,U=i.horizontal||i.containerAnimation&&i.horizontal!==!1?oi:_n,I=!d&&d!==0,L=fi(i.scroller||vt),G=qe.core.getCache(L),B=Fo(L),V=("pinType"in i?i.pinType:zs(L,"pinType")||B&&"fixed")==="fixed",$=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],k=I&&i.toggleActions.split(" "),Z="markers"in i?i.markers:Nc.markers,j=B?0:parseFloat(Wi(L)["border"+U.p2+za])||0,F=this,ue=i.onRefreshInit&&function(){return i.onRefreshInit(F)},ge=Ew(L,B,U),_e=Tw(L,B),ye=0,Ae=0,ee=0,fe=Xs(L,U),le,Pe,Ce,ce,E,C,H,ne,q,O,N,xe,he,re,me,P,w,z,J,te,K,Me,ve,He,Le,be,Ee,De,Fe,Ie,st,W,Re,Te,Oe,Se,de,Ge,tt;if(F._startClamp=F._endClamp=!1,F._dir=U,p*=45,F.scroller=L,F.scroll=M?M.time.bind(M):fe,ce=fe(),F.vars=i,r=r||i.animation,"refreshPriority"in i&&(ev=1,i.refreshPriority===-9999&&(Vl=F)),G.tweenScroll=G.tweenScroll||{top:Pm(L,_n),left:Pm(L,oi)},F.tweenTo=le=G.tweenScroll[U.p],F.scrubDuration=function(Be){Re=vl(Be)&&Be,Re?W?W.duration(Be):W=qe.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Re,paused:!0,onComplete:function(){return g&&g(F)}}):(W&&W.progress(1).kill(),W=0)},r&&(r.vars.lazy=!1,r._initted&&!F.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),F.animation=r.pause(),r.scrollTrigger=F,F.scrubDuration(d),Ie=0,l||(l=r.vars.id)),v&&((!po(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Pt.style&&qe.set(B?[Pt,Ti]:L,{scrollBehavior:"auto"}),yt.forEach(function(Be){return Wn(Be)&&Be.target===(B?Nt.scrollingElement||Ti:L)&&(Be.smooth=!1)}),Ce=Wn(v.snapTo)?v.snapTo:v.snapTo==="labels"?Cw(r):v.snapTo==="labelsDirectional"?Rw(r):v.directional!==!1?function(Be,at){return Zp(v.snapTo)(Be,zn()-Ae<500?0:at.direction)}:qe.utils.snap(v.snapTo),Te=v.duration||{min:.1,max:2},Te=po(Te)?Ul(Te.min,Te.max):Ul(Te,Te),Oe=qe.delayedCall(v.delay||Re/2||.1,function(){var Be=fe(),at=zn()-Ae<500,nt=le.tween;if((at||Math.abs(F.getVelocity())<10)&&!nt&&!wd&&ye!==Be){var lt=(Be-C)/re,rn=r&&!I?r.totalProgress():lt,dt=at?0:(rn-st)/(zn()-gl)*1e3||0,jt=qe.utils.clamp(-lt,1-lt,jo(dt/2)*dt/.185),hn=lt+(v.inertia===!1?0:jt),Yt,It,Rt=v,Nn=Rt.onStart,Wt=Rt.onInterrupt,Un=Rt.onComplete;if(Yt=Ce(hn,F),vl(Yt)||(Yt=hn),It=Math.max(0,Math.round(C+Yt*re)),Be<=H&&Be>=C&&It!==Be){if(nt&&!nt._initted&&nt.data<=jo(It-Be))return;v.inertia===!1&&(jt=Yt-lt),le(It,{duration:Te(jo(Math.max(jo(hn-rn),jo(Yt-rn))*.185/dt/.05||0)),ease:v.ease||"power3",data:jo(It-Be),onInterrupt:function(){return Oe.restart(!0)&&Wt&&Xo(F,Wt)},onComplete:function(){F.update(),ye=fe(),r&&!I&&(W?W.resetTo("totalProgress",Yt,r._tTime/r._tDur):r.progress(Yt)),Ie=st=r&&!I?r.totalProgress():F.progress,b&&b(F),Un&&Xo(F,Un)}},Be,jt*re,It-Be-jt*re),Nn&&Xo(F,Nn,le.tween)}}else F.isActive&&ye!==Be&&Oe.restart(!0)}).pause()),l&&(_h[l]=F),f=F.trigger=fi(f||h!==!0&&h),tt=f&&f._gsap&&f._gsap.stRevert,tt&&(tt=tt(F)),h=h===!0?f:fi(h),Mi(a)&&(a={targets:f,className:a}),h&&(m===!1||m===Gi||(m=!m&&h.parentNode&&h.parentNode.style&&Wi(h.parentNode).display==="flex"?!1:un),F.pin=h,Pe=qe.core.getCache(h),Pe.spacer?me=Pe.pinState:(R&&(R=fi(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),Pe.spacerIsNative=!!R,R&&(Pe.spacerState=Fc(R))),Pe.spacer=z=R||Nt.createElement("div"),z.classList.add("pin-spacer"),l&&z.classList.add("pin-spacer-"+l),Pe.pinState=me=Fc(h)),i.force3D!==!1&&qe.set(h,{force3D:!0}),F.spacer=z=Pe.spacer,Fe=Wi(h),He=Fe[m+U.os2],te=qe.getProperty(h),K=qe.quickSetter(h,U.a,gn),Qd(h,z,Fe),w=Fc(h)),Z){xe=po(Z)?wm(Z,Mm):Mm,O=Uc("scroller-start",l,L,U,xe,0),N=Uc("scroller-end",l,L,U,xe,0,O),J=O["offset"+U.op.d2];var Et=fi(zs(L,"content")||L);ne=this.markerStart=Uc("start",l,Et,U,xe,J,0,M),q=this.markerEnd=Uc("end",l,Et,U,xe,J,0,M),M&&(Ge=qe.quickSetter([ne,q],U.a,gn)),!V&&!(Ar.length&&zs(L,"fixedMarkers")===!0)&&(Aw(B?Pt:L),qe.set([O,N],{force3D:!0}),be=qe.quickSetter(O,U.a,gn),De=qe.quickSetter(N,U.a,gn))}if(M){var Ve=M.vars.onUpdate,Ze=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){F.update(0,0,1),Ve&&Ve.apply(M,Ze||[])})}if(F.previous=function(){return xt[xt.indexOf(F)-1]},F.next=function(){return xt[xt.indexOf(F)+1]},F.revert=function(Be,at){if(!at)return F.kill(!0);var nt=Be!==!1||!F.enabled,lt=Bn;nt!==F.isReverted&&(nt&&(Se=Math.max(fe(),F.scroll.rec||0),ee=F.progress,de=r&&r.progress()),ne&&[ne,q,O,N].forEach(function(rn){return rn.style.display=nt?"none":"block"}),nt&&(Bn=F,F.update(nt)),h&&(!A||!F.isActive)&&(nt?Lw(h,z,me):Qd(h,z,Wi(h),Le)),nt||F.update(nt),Bn=lt,F.isReverted=nt)},F.refresh=function(Be,at,nt,lt){if(!((Bn||!F.enabled)&&!at)){if(h&&Be&&Ki){En(n,"scrollEnd",dv);return}!ii&&ue&&ue(F),Bn=F,le.tween&&!nt&&(le.tween.kill(),le.tween=0),W&&W.pause(),x&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(je){return je.vars.immediateRender&&je.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),F.isReverted||F.revert(!0,!0),F._subPinOffset=!1;var rn=ge(),dt=_e(),jt=M?M.duration():Sr(L,U),hn=re<=.01||!re,Yt=0,It=lt||0,Rt=po(nt)?nt.end:i.end,Nn=i.endTrigger||f,Wt=po(nt)?nt.start:i.start||(i.start===0||!f?0:h?"0 0":"0 100%"),Un=F.pinnedContainer=i.pinnedContainer&&fi(i.pinnedContainer,F),Oi=f&&Math.max(0,xt.indexOf(F))||0,pn=Oi,mn,bn,Fr,Vo,D,X,oe,se,ie,Ne,ke,Ue,Ye;for(Z&&po(nt)&&(Ue=qe.getProperty(O,U.p),Ye=qe.getProperty(N,U.p));pn-- >0;)X=xt[pn],X.end||X.refresh(0,1)||(Bn=F),oe=X.pin,oe&&(oe===f||oe===h||oe===Un)&&!X.isReverted&&(Ne||(Ne=[]),Ne.unshift(X),X.revert(!0,!0)),X!==xt[pn]&&(Oi--,pn--);for(Wn(Wt)&&(Wt=Wt(F)),Wt=vm(Wt,"start",F),C=Cm(Wt,f,rn,U,fe(),ne,O,F,dt,j,V,jt,M,F._startClamp&&"_startClamp")||(h?-.001:0),Wn(Rt)&&(Rt=Rt(F)),Mi(Rt)&&!Rt.indexOf("+=")&&(~Rt.indexOf(" ")?Rt=(Mi(Wt)?Wt.split(" ")[0]:"")+Rt:(Yt=_u(Rt.substr(2),rn),Rt=Mi(Wt)?Wt:(M?qe.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,C):C)+Yt,Nn=f)),Rt=vm(Rt,"end",F),H=Math.max(C,Cm(Rt||(Nn?"100% 0":jt),Nn,rn,U,fe()+Yt,q,N,F,dt,j,V,jt,M,F._endClamp&&"_endClamp"))||-.001,Yt=0,pn=Oi;pn--;)X=xt[pn]||{},oe=X.pin,oe&&X.start-X._pinPush<=C&&!M&&X.end>0&&(mn=X.end-(F._startClamp?Math.max(0,X.start):X.start),(oe===f&&X.start-X._pinPush<C||oe===Un)&&isNaN(Wt)&&(Yt+=mn*(1-X.progress)),oe===h&&(It+=mn));if(C+=Yt,H+=Yt,F._startClamp&&(F._startClamp+=Yt),F._endClamp&&!ii&&(F._endClamp=H||-.001,H=Math.min(H,Sr(L,U))),re=H-C||(C-=.01)&&.001,hn&&(ee=qe.utils.clamp(0,1,qe.utils.normalize(C,H,Se))),F._pinPush=It,ne&&Yt&&(mn={},mn[U.a]="+="+Yt,Un&&(mn[U.p]="-="+fe()),qe.set([ne,q],mn)),h&&!(gh&&F.end>=Sr(L,U)))mn=Wi(h),Vo=U===_n,Fr=fe(),Me=parseFloat(te(U.a))+It,!jt&&H>1&&(ke=(B?Nt.scrollingElement||Ti:L).style,ke={style:ke,value:ke["overflow"+U.a.toUpperCase()]},B&&Wi(Pt)["overflow"+U.a.toUpperCase()]!=="scroll"&&(ke.style["overflow"+U.a.toUpperCase()]="scroll")),Qd(h,z,mn),w=Fc(h),bn=Zr(h,!0),se=V&&Xs(L,Vo?oi:_n)(),m?(Le=[m+U.os2,re+It+gn],Le.t=z,pn=m===un?Zu(h,U)+re+It:0,pn&&(Le.push(U.d,pn+gn),z.style.flexBasis!=="auto"&&(z.style.flexBasis=pn+gn)),Ca(Le),Un&&xt.forEach(function(je){je.pin===Un&&je.vars.pinSpacing!==!1&&(je._subPinOffset=!0)}),V&&fe(Se)):(pn=Zu(h,U),pn&&z.style.flexBasis!=="auto"&&(z.style.flexBasis=pn+gn)),V&&(D={top:bn.top+(Vo?Fr-C:se)+gn,left:bn.left+(Vo?se:Fr-C)+gn,boxSizing:"border-box",position:"fixed"},D[Lo]=D["max"+za]=Math.ceil(bn.width)+gn,D[Io]=D["max"+Kp]=Math.ceil(bn.height)+gn,D[Gi]=D[Gi+Bl]=D[Gi+Ol]=D[Gi+zl]=D[Gi+kl]="0",D[un]=mn[un],D[un+Bl]=mn[un+Bl],D[un+Ol]=mn[un+Ol],D[un+zl]=mn[un+zl],D[un+kl]=mn[un+kl],P=Nw(me,D,A),ii&&fe(0)),r?(ie=r._initted,qd(1),r.render(r.duration(),!0,!0),ve=te(U.a)-Me+re+It,Ee=Math.abs(re-ve)>1,V&&Ee&&P.splice(P.length-2,2),r.render(0,!0,!0),ie||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),qd(0)):ve=re,ke&&(ke.value?ke.style["overflow"+U.a.toUpperCase()]=ke.value:ke.style.removeProperty("overflow-"+U.a));else if(f&&fe()&&!M)for(bn=f.parentNode;bn&&bn!==Pt;)bn._pinOffset&&(C-=bn._pinOffset,H-=bn._pinOffset),bn=bn.parentNode;Ne&&Ne.forEach(function(je){return je.revert(!1,!0)}),F.start=C,F.end=H,ce=E=ii?Se:fe(),!M&&!ii&&(ce<Se&&fe(Se),F.scroll.rec=0),F.revert(!1,!0),Ae=zn(),Oe&&(ye=-1,Oe.restart(!0)),Bn=0,r&&I&&(r._initted||de)&&r.progress()!==de&&r.progress(de||0,!0).render(r.time(),!0,!0),(hn||ee!==F.progress||M||x||r&&!r._initted)&&(r&&!I&&(r._initted||ee||r.vars.immediateRender!==!1)&&r.totalProgress(M&&C<-.001&&!ee?qe.utils.normalize(C,H,0):ee,!0),F.progress=hn||(ce-C)/re===ee?0:ee),h&&m&&(z._pinOffset=Math.round(F.progress*ve)),W&&W.invalidate(),isNaN(Ue)||(Ue-=qe.getProperty(O,U.p),Ye-=qe.getProperty(N,U.p),Oc(O,U,Ue),Oc(ne,U,Ue-(lt||0)),Oc(N,U,Ye),Oc(q,U,Ye-(lt||0))),hn&&!ii&&F.update(),u&&!ii&&!he&&(he=!0,u(F),he=!1)}},F.getVelocity=function(){return(fe()-E)/(zn()-gl)*1e3||0},F.endAnimation=function(){nl(F.callbackAnimation),r&&(W?W.progress(1):r.paused()?I||nl(r,F.direction<0,1):nl(r,r.reversed()))},F.labelToScroll=function(Be){return r&&r.labels&&(C||F.refresh()||C)+r.labels[Be]/r.duration()*re||0},F.getTrailing=function(Be){var at=xt.indexOf(F),nt=F.direction>0?xt.slice(0,at).reverse():xt.slice(at+1);return(Mi(Be)?nt.filter(function(lt){return lt.vars.preventOverlaps===Be}):nt).filter(function(lt){return F.direction>0?lt.end<=C:lt.start>=H})},F.update=function(Be,at,nt){if(!(M&&!nt&&!Be)){var lt=ii===!0?Se:F.scroll(),rn=Be?0:(lt-C)/re,dt=rn<0?0:rn>1?1:rn||0,jt=F.progress,hn,Yt,It,Rt,Nn,Wt,Un,Oi;if(at&&(E=ce,ce=M?fe():lt,v&&(st=Ie,Ie=r&&!I?r.totalProgress():dt)),p&&h&&!Bn&&!Pc&&Ki&&(!dt&&C<lt+(lt-E)/(zn()-gl)*p?dt=1e-4:dt===1&&H>lt+(lt-E)/(zn()-gl)*p&&(dt=.9999)),dt!==jt&&F.enabled){if(hn=F.isActive=!!dt&&dt<1,Yt=!!jt&&jt<1,Wt=hn!==Yt,Nn=Wt||!!dt!=!!jt,F.direction=dt>jt?1:-1,F.progress=dt,Nn&&!Bn&&(It=dt&&!jt?0:dt===1?1:jt===1?2:3,I&&(Rt=!Wt&&k[It+1]!=="none"&&k[It+1]||k[It],Oi=r&&(Rt==="complete"||Rt==="reset"||Rt in r))),T&&(Wt||Oi)&&(Oi||d||!r)&&(Wn(T)?T(F):F.getTrailing(T).forEach(function(Fr){return Fr.endAnimation()})),I||(W&&!Bn&&!Pc?(W._dp._time-W._start!==W._time&&W.render(W._dp._time-W._start),W.resetTo?W.resetTo("totalProgress",dt,r._tTime/r._tDur):(W.vars.totalProgress=dt,W.invalidate().restart())):r&&r.totalProgress(dt,!!(Bn&&(Ae||Be)))),h){if(Be&&m&&(z.style[m+U.os2]=He),!V)K(xl(Me+ve*dt));else if(Nn){if(Un=!Be&&dt>jt&&H+1>lt&&lt+1>=Sr(L,U),A)if(!Be&&(hn||Un)){var pn=Zr(h,!0),mn=lt-C;Rm(h,Pt,pn.top+(U===_n?mn:0)+gn,pn.left+(U===_n?0:mn)+gn)}else Rm(h,z);Ca(hn||Un?P:w),Ee&&dt<1&&hn||K(Me+(dt===1&&!Un?ve:0))}}v&&!le.tween&&!Bn&&!Pc&&Oe.restart(!0),a&&(Wt||y&&dt&&(dt<1||!Kd))&&rc(a.targets).forEach(function(Fr){return Fr.classList[hn||y?"add":"remove"](a.className)}),o&&!I&&!Be&&o(F),Nn&&!Bn?(I&&(Oi&&(Rt==="complete"?r.pause().totalProgress(1):Rt==="reset"?r.restart(!0).pause():Rt==="restart"?r.restart(!0):r[Rt]()),o&&o(F)),(Wt||!Kd)&&(c&&Wt&&Xo(F,c),$[It]&&Xo(F,$[It]),y&&(dt===1?F.kill(!1,1):$[It]=0),Wt||(It=dt===1?1:3,$[It]&&Xo(F,$[It]))),S&&!hn&&Math.abs(F.getVelocity())>(vl(S)?S:2500)&&(nl(F.callbackAnimation),W?W.progress(1):nl(r,Rt==="reverse"?1:!dt,1))):I&&o&&!Bn&&o(F)}if(De){var bn=M?lt/M.duration()*(M._caScrollDist||0):lt;be(bn+(O._isFlipped?1:0)),De(bn)}Ge&&Ge(-lt/M.duration()*(M._caScrollDist||0))}},F.enable=function(Be,at){F.enabled||(F.enabled=!0,En(L,"resize",yl),B||En(L,"scroll",Yo),ue&&En(n,"refreshInit",ue),Be!==!1&&(F.progress=ee=0,ce=E=ye=fe()),at!==!1&&F.refresh())},F.getTween=function(Be){return Be&&le?le.tween:W},F.setPositions=function(Be,at,nt,lt){if(M){var rn=M.scrollTrigger,dt=M.duration(),jt=rn.end-rn.start;Be=rn.start+jt*Be/dt,at=rn.start+jt*at/dt}F.refresh(!1,!1,{start:ym(Be,nt&&!!F._startClamp),end:ym(at,nt&&!!F._endClamp)},lt),F.update()},F.adjustPinSpacing=function(Be){if(Le&&Be){var at=Le.indexOf(U.d)+1;Le[at]=parseFloat(Le[at])+Be+gn,Le[1]=parseFloat(Le[1])+Be+gn,Ca(Le)}},F.disable=function(Be,at){if(Be!==!1&&F.revert(!0,!0),F.enabled&&(F.enabled=F.isActive=!1,at||W&&W.pause(),Se=0,Pe&&(Pe.uncache=1),ue&&Mn(n,"refreshInit",ue),Oe&&(Oe.pause(),le.tween&&le.tween.kill()&&(le.tween=0)),!B)){for(var nt=xt.length;nt--;)if(xt[nt].scroller===L&&xt[nt]!==F)return;Mn(L,"resize",yl),B||Mn(L,"scroll",Yo)}},F.kill=function(Be,at){F.disable(Be,at),W&&!at&&W.kill(),l&&delete _h[l];var nt=xt.indexOf(F);nt>=0&&xt.splice(nt,1),nt===ni&&vu>0&&ni--,nt=0,xt.forEach(function(lt){return lt.scroller===F.scroller&&(nt=1)}),nt||ii||(F.scroll.rec=0),r&&(r.scrollTrigger=null,Be&&r.revert({kill:!1}),at||r.kill()),ne&&[ne,q,O,N].forEach(function(lt){return lt.parentNode&&lt.parentNode.removeChild(lt)}),Vl===F&&(Vl=0),h&&(Pe&&(Pe.uncache=1),nt=0,xt.forEach(function(lt){return lt.pin===h&&nt++}),nt||(Pe.spacer=0)),i.onKill&&i.onKill(F)},xt.push(F),F.enable(!1,!1),tt&&tt(F),r&&r.add&&!re){var pt=F.update;F.update=function(){F.update=pt,yt.cache++,C||H||F.refresh()},qe.delayedCall(.01,F.update),re=.01,C=H=0}else F.refresh();h&&Dw()},n.register=function(i){return da||(qe=i||sv(),rv()&&window.document&&n.enable(),da=_l),da},n.defaults=function(i){if(i)for(var r in i)Nc[r]=i[r];return Nc},n.disable=function(i,r){_l=0,xt.forEach(function(o){return o[r?"kill":"disable"](i)}),Mn(vt,"wheel",Yo),Mn(Nt,"scroll",Yo),clearInterval(Rc),Mn(Nt,"touchcancel",mr),Mn(Pt,"touchstart",mr),Lc(Mn,Nt,"pointerdown,touchstart,mousedown",bm),Lc(Mn,Nt,"pointerup,touchend,mouseup",Sm),Ku.kill(),Dc(Mn);for(var s=0;s<yt.length;s+=3)Ic(Mn,yt[s],yt[s+1]),Ic(Mn,yt[s],yt[s+2])},n.enable=function(){if(vt=window,Nt=document,Ti=Nt.documentElement,Pt=Nt.body,qe){if(rc=qe.utils.toArray,Ul=qe.utils.clamp,mh=qe.core.context||mr,qd=qe.core.suppressOverwrites||mr,Xp=vt.history.scrollRestoration||"auto",xh=vt.pageYOffset||0,qe.core.globals("ScrollTrigger",n),Pt){_l=1,Aa=document.createElement("div"),Aa.style.height="100vh",Aa.style.position="absolute",mv(),Mw(),ln.register(qe),n.isTouch=ln.isTouch,As=ln.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ph=ln.isTouch===1,En(vt,"wheel",Yo),$p=[vt,Nt,Ti,Pt],qe.matchMedia?(n.matchMedia=function(u){var d=qe.matchMedia(),f;for(f in u)d.add(f,u[f]);return d},qe.addEventListener("matchMediaInit",function(){hv(),Jp()}),qe.addEventListener("matchMediaRevert",function(){return fv()}),qe.addEventListener("matchMedia",function(){So(0,1),ko("matchMedia")}),qe.matchMedia().add("(orientation: portrait)",function(){return Jd(),Jd})):console.warn("Requires GSAP 3.11.0 or later"),Jd(),En(Nt,"scroll",Yo);var i=Pt.hasAttribute("style"),r=Pt.style,s=r.borderTopStyle,o=qe.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Zr(Pt),_n.m=Math.round(a.top+_n.sc())||0,oi.m=Math.round(a.left+oi.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(Pt.setAttribute("style",""),Pt.removeAttribute("style")),Rc=setInterval(Em,250),qe.delayedCall(.5,function(){return Pc=0}),En(Nt,"touchcancel",mr),En(Pt,"touchstart",mr),Lc(En,Nt,"pointerdown,touchstart,mousedown",bm),Lc(En,Nt,"pointerup,touchend,mouseup",Sm),hh=qe.utils.checkPrefix("transform"),yu.push(hh),da=zn(),Ku=qe.delayedCall(.2,So).pause(),fa=[Nt,"visibilitychange",function(){var u=vt.innerWidth,d=vt.innerHeight;Nt.hidden?(_m=u,xm=d):(_m!==u||xm!==d)&&yl()},Nt,"DOMContentLoaded",So,vt,"load",So,vt,"resize",yl],Dc(En),xt.forEach(function(u){return u.enable(0,1)}),l=0;l<yt.length;l+=3)Ic(Mn,yt[l],yt[l+1]),Ic(Mn,yt[l],yt[l+2])}else if(Nt){var c=function u(){n.enable(),Nt.removeEventListener("DOMContentLoaded",u)};Nt.addEventListener("DOMContentLoaded",c)}}},n.config=function(i){"limitCallbacks"in i&&(Kd=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Rc)||(Rc=r)&&setInterval(Em,r),"ignoreMobileResize"in i&&(ph=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Dc(Mn)||Dc(En,i.autoRefreshEvents||"none"),tv=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=fi(i),o=yt.indexOf(s),a=Fo(s);~o&&yt.splice(o,a?6:2),r&&(a?Ar.unshift(vt,r,Pt,r,Ti,r):Ar.unshift(s,r))},n.clearMatchMedia=function(i){xt.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(Mi(i)?fi(i):i).getBoundingClientRect(),a=o[s?Lo:Io]*r||0;return s?o.right-a>0&&o.left+a<vt.innerWidth:o.bottom-a>0&&o.top+a<vt.innerHeight},n.positionInViewport=function(i,r,s){Mi(i)&&(i=fi(i));var o=i.getBoundingClientRect(),a=o[s?Lo:Io],l=r==null?a/2:r in Ju?Ju[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/vt.innerWidth:(o.top+l)/vt.innerHeight},n.killAll=function(i){if(xt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Oo.killAll||[];Oo={},r.forEach(function(s){return s()})}},n})();ct.version="3.15.0";ct.saveStyles=function(n){return n?rc(n).forEach(function(e){if(e&&e.style){var t=wi.indexOf(e);t>=0&&wi.splice(t,5),wi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),qe.core.getCache(e),mh())}}):wi};ct.revert=function(n,e){return Jp(!n,e)};ct.create=function(n,e){return new ct(n,e)};ct.refresh=function(n){return n?yl(!0):(da||ct.register())&&So(!0)};ct.update=function(n){return++yt.cache&&ts(n===!0?2:0)};ct.clearScrollMemory=pv;ct.maxScroll=function(n,e){return Sr(n,e?oi:_n)};ct.getScrollFunc=function(n,e){return Xs(fi(n),e?oi:_n)};ct.getById=function(n){return _h[n]};ct.getAll=function(){return xt.filter(function(n){return n.vars.id!=="ScrollSmoother"})};ct.isScrolling=function(){return!!Ki};ct.snapDirectional=Zp;ct.addEventListener=function(n,e){var t=Oo[n]||(Oo[n]=[]);~t.indexOf(e)||t.push(e)};ct.removeEventListener=function(n,e){var t=Oo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};ct.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var d=[],f=[],h=qe.delayedCall(r,function(){u(d,f),d=[],f=[]}).pause();return function(m){d.length||h.restart(!0),d.push(m.trigger),f.push(m),s<=d.length&&h.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Wn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Wn(s)&&(s=s(),En(ct,"refresh",function(){return s=e.batchMax()})),rc(n).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(ct.create(c))}),t};var Dm=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},ef=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(ln.isTouch?" pinch-zoom":""):"none",e===Ti&&n(Pt,t)},kc={auto:1,scroll:1},Fw=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||qe.core.getCache(s),a=zn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(kc[(l=Wi(s)).overflowY]||kc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Fo(s)&&(kc[(l=Wi(s)).overflowY]||kc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},_v=function(e,t,i,r){return ln.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&Fw,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&En(Nt,ln.eventTypes[0],Im,!1,!0)},onDisable:function(){return Mn(Nt,ln.eventTypes[0],Im,!0)}})},Ow=/(input|label|select|textarea)/i,Lm,Im=function(e){var t=Ow.test(e.target.tagName);(t||Lm)&&(e._gsapAllow=!0,Lm=t)},kw=function(e){po(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=fi(e.target)||Ti,u=qe.core.globals().ScrollSmoother,d=u&&u.get(),f=As&&(e.content&&fi(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=Xs(c,_n),m=Xs(c,oi),x=1,p=(ln.isTouch&&vt.visualViewport?vt.visualViewport.scale*vt.visualViewport.width:vt.outerWidth)/vt.innerWidth,g=0,b=Wn(r)?function(){return r(a)}:function(){return r||2.8},y,v,A=_v(c,e.type,!0,s),R=function(){return v=!1},M=mr,S=mr,T=function(){l=Sr(c,_n),S=Ul(As?1:0,l),i&&(M=Ul(0,Sr(c,oi))),y=No},U=function(){f._gsap.y=xl(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},I=function(){if(v){requestAnimationFrame(R);var Z=xl(a.deltaY/2),j=S(h.v-Z);if(f&&j!==h.v+h.offset){h.offset=j-h.v;var F=xl((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+F+", 0, 1)",f._gsap.y=F+"px",h.cacheID=yt.cache,ts()}return!0}h.offset&&U(),v=!0},L,G,B,V,$=function(){T(),L.isActive()&&L.vars.scrollY>l&&(h()>l?L.progress(1)&&h(l):L.resetTo("scrollY",l))};return f&&qe.set(f,{y:"+=0"}),e.ignoreCheck=function(k){return As&&k.type==="touchmove"&&I()||x>1.05&&k.type!=="touchstart"||a.isGesturing||k.touches&&k.touches.length>1},e.onPress=function(){v=!1;var k=x;x=xl((vt.visualViewport&&vt.visualViewport.scale||1)/p),L.pause(),k!==x&&ef(c,x>1.01?!0:i?!1:"x"),G=m(),B=h(),T(),y=No},e.onRelease=e.onGestureStart=function(k,Z){if(h.offset&&U(),!Z)V.restart(!0);else{yt.cache++;var j=b(),F,ue;i&&(F=m(),ue=F+j*.05*-k.velocityX/.227,j*=Dm(m,F,ue,Sr(c,oi)),L.vars.scrollX=M(ue)),F=h(),ue=F+j*.05*-k.velocityY/.227,j*=Dm(h,F,ue,Sr(c,_n)),L.vars.scrollY=S(ue),L.invalidate().duration(j).play(.01),(As&&L.vars.scrollY>=l||F>=l-1)&&qe.to({},{onUpdate:$,duration:j})}o&&o(k)},e.onWheel=function(){L._ts&&L.pause(),zn()-g>1e3&&(y=0,g=zn())},e.onChange=function(k,Z,j,F,ue){if(No!==y&&T(),Z&&i&&m(M(F[2]===Z?G+(k.startX-k.x):m()+Z-F[1])),j){h.offset&&U();var ge=ue[2]===j,_e=ge?B+k.startY-k.y:h()+j-ue[1],ye=S(_e);ge&&_e!==ye&&(B+=ye-_e),h(ye)}(j||Z)&&ts()},e.onEnable=function(){ef(c,i?!1:"x"),ct.addEventListener("refresh",$),En(vt,"resize",$),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=m.smooth=!1),A.enable()},e.onDisable=function(){ef(c,!0),Mn(vt,"resize",$),ct.removeEventListener("refresh",$),A.kill()},e.lockAxis=e.lockAxis!==!1,a=new ln(e),a.iOS=As,As&&!h()&&h(1),As&&qe.ticker.add(mr),V=a._dc,L=qe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:gv(h,h(),function(){return L.pause()})},onUpdate:ts,onComplete:V.vars.onComplete}),a};ct.sort=function(n){if(Wn(n))return xt.sort(n);var e=vt.pageYOffset||0;return ct.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+vt.innerHeight}),xt.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};ct.observe=function(n){return new ln(n)};ct.normalizeScroll=function(n){if(typeof n>"u")return ti;if(n===!0&&ti)return ti.enable();if(n===!1){ti&&ti.kill(),ti=n;return}var e=n instanceof ln?n:kw(n);return ti&&ti.target===e.target&&ti.kill(),Fo(e.target)&&(ti=e),e};ct.core={_getVelocityProp:fh,_inputObserver:_v,_scrollers:yt,_proxies:Ar,bridge:{ss:function(){Ki||ko("scrollStart"),Ki=zn()},ref:function(){return Bn}}};sv()&&qe.registerPlugin(ct);const ns=we(!0),xv=()=>{ns.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},Bw=()=>{const n=localStorage.getItem("theme");n==="light"?ns.value=!1:ns.value=!0,xv()};li(ns,()=>{xv()});const zw=()=>{ns.value=!ns.value,localStorage.setItem("theme",ns.value?"dark":"light")};Bw();function Qp(){return{isDark:ns,toggleTheme:zw}}const Ra=we(!1),Vw=()=>{localStorage.getItem("mouseTrail")==="enabled"?Ra.value=!0:Ra.value=!1},Hw=()=>{Ra.value=!Ra.value,localStorage.setItem("mouseTrail",Ra.value?"enabled":"disabled")};Vw();function vv(){return{isMouseTrailEnabled:Ra,toggleMouseTrail:Hw}}function Gw({elements:n,interval:e=150}){const{isDark:t}=Qp(),i=we({});n.forEach(({key:l})=>{i.value[l]=!1});let r=null;const s=({r:l,g:c,b:u})=>(.299*l+.587*c+.114*u)/255,o=l=>{var h;if(!l||!((h=window.__blobSampler)!=null&&h.sampleScreenPixel))return null;const c=l.getBoundingClientRect();if(c.width===0||c.height===0)return null;const u=[{x:c.left+c.width*.5,y:c.top+c.height*.5},{x:c.left+c.width*.3,y:c.top+c.height*.3},{x:c.left+c.width*.7,y:c.top+c.height*.3},{x:c.left+c.width*.3,y:c.top+c.height*.7},{x:c.left+c.width*.7,y:c.top+c.height*.7}];let d=0,f=0;for(const m of u){const x=window.__blobSampler.sampleScreenPixel(m.x,m.y);x&&x.a>0&&(d+=s(x),f++)}return f===0?null:d/f},a=()=>{if(t.value)return;const l={};let c=!1;for(const{key:u,el:d}of n){const f=o(d.value);if(f===null)continue;const h=f<.5;i.value[u]!==h&&(l[u]=h,c=!0)}c&&(i.value={...i.value,...l})};return yn(()=>{setTimeout(a,300),r=setInterval(a,e)}),Cn(()=>{r&&clearInterval(r)}),li(t,()=>{setTimeout(a,100)}),{isDarkBackground:i}}var Nm="1.3.26";function yv(n,e,t){return Math.max(n,Math.min(e,t))}function Ww(n,e,t){return(1-t)*n+t*e}function $w(n,e,t,i){return Ww(n,e,1-Math.exp(-t*i))}function Xw(n,e){return(n%e+e)%e}var jw=class{constructor(){Ke(this,"isRunning",!1);Ke(this,"value",0);Ke(this,"from",0);Ke(this,"to",0);Ke(this,"currentTime",0);Ke(this,"lerp");Ke(this,"duration");Ke(this,"easing");Ke(this,"onUpdate")}advance(n){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=n;const i=yv(0,this.currentTime/this.duration,1);e=i>=1;const r=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=$w(this.value,this.to,this.lerp*60,n),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(n,e,{lerp:t,duration:i,easing:r,onStart:s,onUpdate:o}){this.from=this.value=n,this.to=e,this.lerp=t,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function Yw(n,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,n.apply(this,i)},e)}}var qw=class{constructor(n,e,{autoResize:t=!0,debounce:i=250}={}){Ke(this,"width",0);Ke(this,"height",0);Ke(this,"scrollHeight",0);Ke(this,"scrollWidth",0);Ke(this,"debouncedResize");Ke(this,"wrapperResizeObserver");Ke(this,"contentResizeObserver");Ke(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ke(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ke(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=n,this.content=e,t&&(this.debouncedResize=Yw(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var n,e;(n=this.wrapperResizeObserver)==null||n.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},bv=class{constructor(){Ke(this,"events",{})}emit(n,...e){var i;const t=this.events[n]||[];for(let r=0,s=t.length;r<s;r++)(i=t[r])==null||i.call(t,...e)}on(n,e){return this.events[n]?this.events[n].push(e):this.events[n]=[e],()=>{var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}}off(n,e){var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}destroy(){this.events={}}};const Kw=100/6,ys={passive:!1};function Um(n,e){return n===1?Kw:n===2?e:1}var Zw=class{constructor(n,e={wheelMultiplier:1,touchMultiplier:1}){Ke(this,"touchStart",{x:0,y:0});Ke(this,"lastDelta",{x:0,y:0});Ke(this,"window",{width:0,height:0});Ke(this,"emitter",new bv);Ke(this,"onTouchStart",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})});Ke(this,"onTouchMove",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:n})});Ke(this,"onTouchEnd",n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})});Ke(this,"onWheel",n=>{let{deltaX:e,deltaY:t,deltaMode:i}=n;const r=Um(i,this.window.width),s=Um(i,this.window.height);e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:n})});Ke(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=n,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ys),this.element.addEventListener("touchstart",this.onTouchStart,ys),this.element.addEventListener("touchmove",this.onTouchMove,ys),this.element.addEventListener("touchend",this.onTouchEnd,ys)}on(n,e){return this.emitter.on(n,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,ys),this.element.removeEventListener("touchstart",this.onTouchStart,ys),this.element.removeEventListener("touchmove",this.onTouchMove,ys),this.element.removeEventListener("touchend",this.onTouchEnd,ys)}};const Fm=n=>Math.min(1,1.001-2**(-10*n));var Jw=class{constructor({wrapper:n=window,content:e=document.documentElement,eventsTarget:t=n,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:h=1,wheelMultiplier:m=1,autoResize:x=!0,prevent:p,virtualScroll:g,overscroll:b=!0,autoRaf:y=!1,anchors:v=!1,autoToggle:A=!1,allowNestedScroll:R=!1,__experimental__naiveDimensions:M=!1,naiveDimensions:S=M,stopInertiaOnNavigate:T=!1,respectReducedMotion:U=!0}={}){Ke(this,"_isScrolling",!1);Ke(this,"_isStopped",!1);Ke(this,"_isLocked",!1);Ke(this,"_preventNextNativeScrollEvent",!1);Ke(this,"_resetVelocityTimeout",null);Ke(this,"_rafId",null);Ke(this,"_isDraggingSelection",!1);Ke(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Ke(this,"isTouching");Ke(this,"isIos");Ke(this,"time",0);Ke(this,"userData",{});Ke(this,"lastVelocity",0);Ke(this,"velocity",0);Ke(this,"direction",0);Ke(this,"options");Ke(this,"targetScroll");Ke(this,"animatedScroll");Ke(this,"animate",new jw);Ke(this,"emitter",new bv);Ke(this,"dimensions");Ke(this,"virtualScroll");Ke(this,"onScrollEnd",n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()});Ke(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ke(this,"onTransitionEnd",n=>{var e;(e=n.propertyName)!=null&&e.includes("overflow")&&n.target===this.rootElement&&this.checkOverflow()});Ke(this,"onClick",n=>{const e=n.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),t=new URL(window.location.href);if(this.options.anchors){const i=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(i.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>t.host===i.host&&t.pathname!==i.pathname)){this.reset();return}});Ke(this,"onPointerDown",n=>{n.button===1&&this.reset()});Ke(this,"onVirtualScroll",n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:e,deltaY:t,event:i}=n;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");if(r&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(m=>{var x,p,g,b,y;return m instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(m))||((x=m.hasAttribute)==null?void 0:x.call(m,"data-lenis-prevent"))||u==="vertical"&&((p=m.hasAttribute)==null?void 0:p.call(m,"data-lenis-prevent-vertical"))||u==="horizontal"&&((g=m.hasAttribute)==null?void 0:g.call(m,"data-lenis-prevent-horizontal"))||r&&((b=m.hasAttribute)==null?void 0:b.call(m,"data-lenis-prevent-touch"))||s&&((y=m.hasAttribute)==null?void 0:y.call(m,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const f=r&&this.options.syncTouch,h=r&&i.type==="touchend";h&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:h?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ke(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ke(this,"raf",n=>{const e=n-(this.time||n);this.time=n,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Nm,window.lenis||(window.lenis={}),window.lenis.version=Nm,d==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!n||n===document.documentElement)&&(n=window),typeof a=="number"&&typeof l!="function"?l=Fm:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:n,content:e,eventsTarget:t,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:h,wheelMultiplier:m,autoResize:x,prevent:p,virtualScroll:g,overscroll:b,autoRaf:y,anchors:v,autoToggle:A,allowNestedScroll:R,naiveDimensions:S,stopInertiaOnNavigate:T,respectReducedMotion:U},this.dimensions=new qw(n,e,{autoResize:x}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Zw(t,{touchMultiplier:h,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,e){return this.emitter.on(n,e)}off(n,e){return this.emitter.off(n,e)}get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}isTouchOnSelectionHandle(n){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=n.targetTouches[0]??n.changedTouches[0];if(!t)return!1;const i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;const r=i[0],s=i[i.length-1],o=40,a=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=o,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(n,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(r?t=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=n,h=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let m=null;if(typeof f=="string"?(m=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),m||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof HTMLElement&&(f!=null&&f.nodeType)&&(m=f),m){if(this.options.wrapper!==window){const v=this.rootElement.getBoundingClientRect();h-=this.isHorizontal?v.left:v.top}const x=m.getBoundingClientRect(),p=getComputedStyle(m),g=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),b=getComputedStyle(this.rootElement),y=this.isHorizontal?Number.parseFloat(b.scrollPaddingLeft):Number.parseFloat(b.scrollPaddingTop);f=(this.isHorizontal?x.left:x.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(y)?0:y)}}if(typeof f=="number"){if(f+=h,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const m=f-this.animatedScroll;m>this.limit/2?f-=this.limit:m<-this.limit/2&&(f+=this.limit)}}else f=yv(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=Fm:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(m,x)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),r&&(this.targetScroll=m),x||this.emit(),x&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:e,deltaY:t}){const i=Date.now();n._lenis||(n._lenis={});const r=n._lenis;let s,o,a,l,c,u,d,f,h,m;if(i-(r.time??0)>2e3){r.time=Date.now();const R=window.getComputedStyle(n);if(r.computedStyle=R,s=["auto","overlay","scroll"].includes(R.overflowX),o=["auto","overlay","scroll"].includes(R.overflowY),c=["auto"].includes(R.overscrollBehaviorX),u=["auto"].includes(R.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;d=n.scrollWidth,f=n.scrollHeight,h=n.clientWidth,m=n.clientHeight,a=d>h,l=f>m,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=d,r.scrollHeight=f,r.clientWidth=h,r.clientHeight=m,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,d=r.scrollWidth,f=r.scrollHeight,h=r.clientWidth,m=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const x=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let p,g,b,y,v,A;if(x==="horizontal")p=Math.round(n.scrollLeft),g=d-h,b=e,y=s,v=a,A=c;else if(x==="vertical")p=Math.round(n.scrollTop),g=f-m,b=t,y=o,v=l,A=u;else return!1;return!A&&(p>=g||p<=0)?!0:(b>0?p<g:p>0)&&y&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?Xw(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(n=>{this.rootElement.classList.add(n)})}cleanUpClassName(){for(const n of Array.from(this.rootElement.classList))(n==="lenis"||n.startsWith("lenis-"))&&this.rootElement.classList.remove(n)}};$e.registerPlugin(ct);let Wr=null;function Va(){return Wr}function Qw(){return yn(()=>{Wr=new Jw({duration:1.5,wheelMultiplier:.7,easing:n=>Math.min(1,1.001-Math.pow(2,-10*n)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,smoothTouch:!1,touchMultiplier:2}),Wr.on("scroll",ct.update),$e.ticker.add(n=>{Wr.raf(n*1e3)}),$e.ticker.lagSmoothing(0)}),Cn(()=>{Wr&&(Wr.destroy(),$e.ticker.remove(Wr.raf),Wr=null)}),{get lenis(){return Wr}}}const eM={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},tM={class:"flex items-center justify-between h-16"},nM=["href","onClick"],iM=["aria-expanded"],rM={key:0,class:"settings-dropdown absolute right-0 mt-2 w-64 rounded-xl bg-dark-800 border border-dark-700 shadow-2xl light:bg-white light:border-secondary-200 light:shadow-secondary-200/50 overflow-hidden"},sM={class:"px-4 py-3 flex items-center justify-between hover:bg-dark-700/50 light:hover:bg-secondary-50 transition-colors duration-200"},oM={class:"flex items-center space-x-3"},aM={key:0,class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},lM={key:1,class:"w-4 h-4 text-primary-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},cM=["aria-label"],uM={class:"px-4 py-3 flex items-center justify-between hover:bg-dark-700/50 light:hover:bg-secondary-50 transition-colors duration-200"},dM={class:"flex items-center space-x-3"},fM={class:"text-sm text-secondary-300 light:text-secondary-600"},hM=["aria-label"],pM={class:"px-4 py-3 border-t border-dark-700 light:border-secondary-200"},mM={class:"grid grid-cols-3 gap-2"},gM=["onClick","aria-label","aria-pressed"],_M={class:"flex space-x-0.5"},xM={key:0,class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},vM={key:1,class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},yM={class:"px-4 py-3 space-y-2"},bM=["href","onClick"],SM={class:"pt-2 border-t border-dark-700 light:border-secondary-200"},wM={class:"flex items-center justify-between py-2"},MM={class:"flex items-center space-x-3"},EM={key:0,class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},TM={key:1,class:"w-4 h-4 text-primary-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},AM=["aria-label"],CM={class:"flex items-center justify-between py-2"},RM={class:"flex items-center space-x-3"},PM={class:"text-sm text-secondary-300 light:text-secondary-600"},DM=["aria-label"],LM={class:"py-2"},IM={class:"grid grid-cols-3 gap-2"},NM=["onClick","aria-label","aria-pressed"],UM={class:"flex space-x-0.5"},FM={__name:"NavBar",setup(n){$e.registerPlugin(ct);const e=we(!1),t=we(!1),i=we(!1),r=we(null),s=we(null),o=we(null),a=we(null),l=we(!1);typeof window<"u"&&(l.value=window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window);const{isDark:c,toggleTheme:u}=Qp(),{isMouseTrailEnabled:d,toggleMouseTrail:f}=vv(),{colorPalettes:h,selectedPalette:m,setPalette:x}=eS(),{isDarkBackground:p}=Gw({elements:[{key:"nav",el:a}]}),g=[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Tech Stack",href:"#tech-stack"},{label:"Projects",href:"#projects"}],b=()=>{e.value=window.scrollY>50},y=R=>{R.preventDefault(),t.value=!1;const M=Va();M?M.scrollTo(0):window.scrollTo({top:0,behavior:"smooth"})},v=(R,M)=>{var G;R.preventDefault(),t.value=!1;const S=Va();if(M==="#home"){S?S.scrollTo(0,{immediate:!0}):window.scrollTo({top:0,behavior:"auto"});return}const T=document.querySelector(M);if(!T)return;const I=ct.getAll().find(B=>{var V;return B.trigger===T||((V=B.trigger)==null?void 0:V.id)===M.replace("#","")});if(I&&M==="#about"){ct.refresh();const B=I.animation,V=(G=B==null?void 0:B.labels)==null?void 0:G["stage-1"];if(typeof V=="number"){const $=V/B.duration(),k=I.start+$*(I.end-I.start);S?S.scrollTo(k,{immediate:!0}):window.scrollTo({top:k,behavior:"auto"});return}}const L=I?I.start:T.getBoundingClientRect().top+window.scrollY;S?S.scrollTo(L,{immediate:!0}):window.scrollTo({top:L,behavior:"auto"})},A=R=>{o.value&&!o.value.contains(R.target)&&(i.value=!1),r.value&&!r.value.contains(R.target)&&(t.value=!1)};return yn(()=>{window.addEventListener("scroll",b),document.addEventListener("click",A),$e.fromTo(r.value,{y:-80,opacity:0},{y:0,opacity:1,duration:.8,ease:"power3.out",delay:.2,clearProps:"all"})}),Cn(()=>{window.removeEventListener("scroll",b),document.removeEventListener("click",A)}),li(t,async R=>{await Lr(),s.value&&(R?($e.fromTo(s.value,{height:0,opacity:0},{height:"auto",opacity:1,duration:.4,ease:"power2.out"}),$e.from(s.value.querySelectorAll("a"),{x:-20,opacity:0,stagger:.08,duration:.3,ease:"power2.out"})):$e.to(s.value,{height:0,opacity:0,duration:.3,ease:"power2.in"}))}),li(i,async R=>{var S;await Lr();const M=(S=o.value)==null?void 0:S.querySelector(".settings-dropdown");M&&(R?$e.fromTo(M,{opacity:0,y:-10,scale:.95},{opacity:1,y:0,scale:1,duration:.25,ease:"power2.out"}):$e.to(M,{opacity:0,y:-10,scale:.95,duration:.2,ease:"power2.in"}))}),(R,M)=>(Y(),Q("nav",{ref_key:"navRef",ref:r,class:rt(["fixed top-0 left-0 right-0 z-50 transition-colors duration-300",e.value?"bg-dark-900/95 backdrop-blur-md shadow-lg light:bg-white/95 light:shadow-secondary-200":"bg-transparent"])},[_("div",eM,[_("div",tM,[_("a",{href:"#home",onClick:y,class:"text-xl font-bold text-white light:text-secondary-900 group transition-colors duration-300"},[...M[7]||(M[7]=[_("span",{class:"text-primary-500"},"<",-1),qi("KPC",-1),_("span",{class:"text-primary-500"},"/>",-1)])]),_("div",{ref_key:"navLinksRef",ref:a,class:"hidden md:flex items-center space-x-8"},[(Y(),Q(We,null,it(g,S=>_("a",{key:S.href,href:S.href,onClick:T=>v(T,S.href),class:"text-secondary-300 whitespace-nowrap hover:text-primary-400 light:text-black transition-colors duration-200 text-sm font-medium relative group"},[qi(pe(S.label)+" ",1),M[8]||(M[8]=_("span",{class:"absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"},null,-1))],8,nM)),64)),M[16]||(M[16]=_("a",{href:"#contact",class:"bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"}," Get in Touch ",-1)),_("div",{ref_key:"settingsRef",ref:o,class:"relative"},[_("button",{onClick:M[0]||(M[0]=Ds(S=>i.value=!i.value,["stop"])),class:"p-2 rounded-lg light:text-black text-secondary-300 hover:text-primary-400 hover:bg-secondary-800/50 light:hover:text-primary-600 light:hover:bg-secondary-100 transition-all duration-300 focus:outline-none","aria-label":"Settings","aria-expanded":i.value},[(Y(),Q("svg",{class:rt(["w-5 h-5",{"rotate-90 transition-transform duration-300":i.value}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...M[9]||(M[9]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"},null,-1),_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"},null,-1)])],2))],8,iM),i.value?(Y(),Q("div",rM,[M[15]||(M[15]=_("div",{class:"px-4 py-3 border-b border-dark-700 light:border-secondary-200"},[_("p",{class:"text-sm font-semibold text-white light:text-secondary-900"},"Settings")],-1)),_("div",sM,[_("div",oM,[Xe(c)?(Y(),Q("svg",aM,[...M[10]||(M[10]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1)])])):(Y(),Q("svg",lM,[...M[11]||(M[11]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)])])),M[12]||(M[12]=_("span",{class:"text-sm text-secondary-300 light:text-secondary-600"},"Night Mode",-1))]),_("button",{onClick:M[1]||(M[1]=(...S)=>Xe(u)&&Xe(u)(...S)),class:rt(["relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none",Xe(c)?"bg-primary-500":"bg-secondary-300 light:bg-secondary-300"]),"aria-label":Xe(c)?"Disable night mode":"Enable night mode"},[_("span",{class:rt(["absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300",Xe(c)?"left-5":"left-0.5"])},null,2)],10,cM)]),_("div",uM,[_("div",dM,[M[13]||(M[13]=_("svg",{class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"})],-1)),_("span",fM,pe(l.value?"Swipe Animation":"Mouse Animation"),1)]),_("button",{onClick:M[2]||(M[2]=(...S)=>Xe(f)&&Xe(f)(...S)),class:rt(["relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none",Xe(d)?"bg-primary-500":"bg-secondary-300 light:bg-secondary-300"]),"aria-label":Xe(d)?"Disable mouse animation":"Enable mouse animation"},[_("span",{class:rt(["absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300",Xe(d)?"left-5":"left-0.5"])},null,2)],10,hM)]),_("div",pM,[M[14]||(M[14]=_("div",{class:"flex items-center space-x-3 mb-2"},[_("svg",{class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"})]),_("span",{class:"text-sm text-secondary-300 light:text-secondary-600"},"Color Palette")],-1)),_("div",mM,[(Y(!0),Q(We,null,it(Xe(h),(S,T)=>(Y(),Q("button",{key:T,onClick:U=>Xe(x)(T),class:rt(["flex flex-col items-center gap-1 p-2 rounded-lg border transition-all duration-200 focus:outline-none",Xe(m)===T?"border-primary-500 bg-primary-500/10 light:bg-primary-50":"border-dark-700 hover:border-primary-400 light:border-secondary-200 light:hover:border-primary-400"]),"aria-label":`Use ${S.name} color palette`,"aria-pressed":Xe(m)===T},[_("span",_M,[_("span",{class:"w-3 h-3 rounded-full",style:Gt({backgroundColor:S.primary[500]})},null,4),_("span",{class:"w-3 h-3 rounded-full",style:Gt({backgroundColor:S.accent[500]})},null,4),_("span",{class:"w-3 h-3 rounded-full",style:Gt({backgroundColor:S.secondary[500]})},null,4)]),_("span",{class:rt(["text-[10px] font-medium",Xe(m)===T?"text-primary-400 light:text-primary-600":"text-secondary-400 light:text-secondary-500"])},pe(S.name),3)],10,gM))),128))])])])):qt("",!0)],512)],512),_("button",{onClick:M[3]||(M[3]=Ds(S=>t.value=!t.value,["stop"])),class:rt(["md:hidden text-secondary-300 hover:text-white light:text-secondary-600 light:hover:text-secondary-900 focus:outline-none transition-colors duration-300",!e.value&&Xe(p).nav?"light:text-white light:hover:text-secondary-900":"light:text-secondary-600 light:hover:text-secondary-900"]),"aria-label":"Toggle menu"},[t.value?(Y(),Q("svg",vM,[...M[18]||(M[18]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)])])):(Y(),Q("svg",xM,[...M[17]||(M[17]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)])]))],2)])]),t.value?(Y(),Q("div",{key:0,ref_key:"mobileMenuRef",ref:s,class:"md:hidden bg-dark-800 border-t border-dark-700 light:bg-white light:border-secondary-200 overflow-hidden"},[_("div",yM,[(Y(),Q(We,null,it(g,S=>_("a",{key:S.href,href:S.href,onClick:T=>v(T,S.href),class:"block text-secondary-300 hover:text-primary-400 light:text-secondary-600 light:hover:text-primary-600 transition-colors duration-200 py-2 text-sm font-medium"},pe(S.label),9,bM)),64)),_("a",{href:"#contact",onClick:M[4]||(M[4]=S=>t.value=!1),class:"block text-secondary-300 hover:text-primary-400 light:text-secondary-600 light:hover:text-primary-600 transition-colors duration-200 py-2 text-sm font-medium"}," Get in Touch "),_("div",SM,[M[24]||(M[24]=_("p",{class:"text-xs font-semibold text-secondary-500 light:text-secondary-400 uppercase tracking-wider mb-2"},"Settings",-1)),_("div",wM,[_("div",MM,[Xe(c)?(Y(),Q("svg",EM,[...M[19]||(M[19]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1)])])):(Y(),Q("svg",TM,[...M[20]||(M[20]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)])])),M[21]||(M[21]=_("span",{class:"text-sm text-secondary-300 light:text-secondary-600"},"Night Mode",-1))]),_("button",{onClick:M[5]||(M[5]=(...S)=>Xe(u)&&Xe(u)(...S)),class:rt(["relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none",Xe(c)?"bg-primary-500":"bg-secondary-300 light:bg-secondary-300"]),"aria-label":Xe(c)?"Disable night mode":"Enable night mode"},[_("span",{class:rt(["absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300",Xe(c)?"left-5":"left-0.5"])},null,2)],10,AM)]),_("div",CM,[_("div",RM,[M[22]||(M[22]=_("svg",{class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"})],-1)),_("span",PM,pe(l.value?"Swipe Animation":"Mouse Animation"),1)]),_("button",{onClick:M[6]||(M[6]=(...S)=>Xe(f)&&Xe(f)(...S)),class:rt(["relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none",Xe(d)?"bg-primary-500":"bg-secondary-300 light:bg-secondary-300"]),"aria-label":Xe(d)?"Disable mouse animation":"Enable mouse animation"},[_("span",{class:rt(["absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300",Xe(d)?"left-5":"left-0.5"])},null,2)],10,DM)]),_("div",LM,[M[23]||(M[23]=_("div",{class:"flex items-center space-x-3 mb-2"},[_("svg",{class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"})]),_("span",{class:"text-sm text-secondary-300 light:text-secondary-600"},"Color Palette")],-1)),_("div",IM,[(Y(!0),Q(We,null,it(Xe(h),(S,T)=>(Y(),Q("button",{key:T,onClick:U=>Xe(x)(T),class:rt(["flex flex-col items-center gap-1 p-2 rounded-lg border transition-all duration-200 focus:outline-none",Xe(m)===T?"border-primary-500 bg-primary-500/10 light:bg-primary-50":"border-dark-700 hover:border-primary-400 light:border-secondary-200 light:hover:border-primary-400"]),"aria-label":`Use ${S.name} color palette`,"aria-pressed":Xe(m)===T},[_("span",UM,[_("span",{class:"w-3 h-3 rounded-full",style:Gt({backgroundColor:S.primary[500]})},null,4),_("span",{class:"w-3 h-3 rounded-full",style:Gt({backgroundColor:S.accent[500]})},null,4),_("span",{class:"w-3 h-3 rounded-full",style:Gt({backgroundColor:S.secondary[500]})},null,4)]),_("span",{class:rt(["text-[10px] font-medium",Xe(m)===T?"text-primary-400 light:text-primary-600":"text-secondary-400 light:text-secondary-500"])},pe(S.name),3)],10,NM))),128))])])])])],512)):qt("",!0)],2))}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const e0="183",OM=0,Om=1,kM=2,Su=1,BM=2,bl=3,js=0,xi=1,Jr=2,is=0,Pa=1,km=2,Bm=3,zm=4,zM=5,xo=100,VM=101,HM=102,GM=103,WM=104,$M=200,XM=201,jM=202,YM=203,yh=204,bh=205,qM=206,KM=207,ZM=208,JM=209,QM=210,e2=211,t2=212,n2=213,i2=214,Sh=0,wh=1,Mh=2,Ha=3,Eh=4,Th=5,Ah=6,Ch=7,Sv=0,r2=1,s2=2,Cr=0,wv=1,Mv=2,Ev=3,Tv=4,Av=5,Cv=6,Rv=7,Pv=300,Bo=301,Ga=302,tf=303,nf=304,Md=306,Rh=1e3,es=1001,Ph=1002,Ln=1003,o2=1004,Bc=1005,Xn=1006,rf=1007,wo=1008,$i=1009,Dv=1010,Lv=1011,oc=1012,t0=1013,Nr=1014,wr=1015,fs=1016,n0=1017,i0=1018,ac=1020,Iv=35902,Nv=35899,Uv=1021,Fv=1022,sr=1023,hs=1026,Mo=1027,Ov=1028,r0=1029,Wa=1030,s0=1031,o0=1033,wu=33776,Mu=33777,Eu=33778,Tu=33779,Dh=35840,Lh=35841,Ih=35842,Nh=35843,Uh=36196,Fh=37492,Oh=37496,kh=37488,Bh=37489,zh=37490,Vh=37491,Hh=37808,Gh=37809,Wh=37810,$h=37811,Xh=37812,jh=37813,Yh=37814,qh=37815,Kh=37816,Zh=37817,Jh=37818,Qh=37819,ep=37820,tp=37821,np=36492,ip=36494,rp=36495,sp=36283,op=36284,ap=36285,lp=36286,a2=3200,l2=0,c2=1,Ps="",Hi="srgb",$a="srgb-linear",Qu="linear",Ut="srgb",qo=7680,Vm=519,u2=512,d2=513,f2=514,a0=515,h2=516,p2=517,l0=518,m2=519,Hm=35044,Gm="300 es",Mr=2e3,ed=2001;function g2(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function td(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _2(){const n=td("canvas");return n.style.display="block",n}const Wm={};function $m(...n){const e="THREE."+n.shift();console.log(e,...n)}function kv(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ut(...n){n=kv(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function At(...n){n=kv(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function nd(...n){const e=n.join(" ");e in Wm||(Wm[e]=!0,ut(...n))}function x2(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const v2={[Sh]:wh,[Mh]:Ah,[Eh]:Ch,[Ha]:Th,[wh]:Sh,[Ah]:Mh,[Ch]:Eh,[Th]:Ha};class ja{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sf=Math.PI/180,cp=180/Math.PI;function gc(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(On[n&255]+On[n>>8&255]+On[n>>16&255]+On[n>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[t&63|128]+On[t>>8&255]+"-"+On[t>>16&255]+On[t>>24&255]+On[i&255]+On[i>>8&255]+On[i>>16&255]+On[i>>24&255]).toLowerCase()}function bt(n,e,t){return Math.max(e,Math.min(t,n))}function y2(n,e){return(n%e+e)%e}function of(n,e,t){return(1-t)*n+t*e}function il(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ui(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class wt{constructor(e=0,t=0){wt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(bt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ya{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],m=s[o+2],x=s[o+3];if(d!==x||l!==f||c!==h||u!==m){let p=l*f+c*h+u*m+d*x;p<0&&(f=-f,h=-h,m=-m,x=-x,p=-p);let g=1-a;if(p<.9995){const b=Math.acos(p),y=Math.sin(b);g=Math.sin(g*b)/y,a=Math.sin(a*b)/y,l=l*g+f*a,c=c*g+h*a,u=u*g+m*a,d=d*g+x*a}else{l=l*g+f*a,c=c*g+h*a,u=u*g+m*a,d=d*g+x*a;const b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],m=s[o+3];return e[t]=a*m+u*d+l*h-c*f,e[t+1]=l*m+u*f+c*d-a*h,e[t+2]=c*m+u*h+a*f-l*d,e[t+3]=u*m-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),h=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d-f*h*m;break;case"YXZ":this._x=f*u*d+c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d+f*h*m;break;case"ZXY":this._x=f*u*d-c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d-f*h*m;break;case"ZYX":this._x=f*u*d-c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d+f*h*m;break;case"YZX":this._x=f*u*d+c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d-f*h*m;break;case"XZY":this._x=f*u*d-c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d+f*h*m;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(e=0,t=0,i=0){ae.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(bt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return af.copy(this).projectOnVector(e),this.sub(af)}reflect(e){return this.sub(af.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const af=new ae,Xm=new Ya;class mt{constructor(e,t,i,r,s,o,a,l,c){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],m=i[8],x=r[0],p=r[3],g=r[6],b=r[1],y=r[4],v=r[7],A=r[2],R=r[5],M=r[8];return s[0]=o*x+a*b+l*A,s[3]=o*p+a*y+l*R,s[6]=o*g+a*v+l*M,s[1]=c*x+u*b+d*A,s[4]=c*p+u*y+d*R,s[7]=c*g+u*v+d*M,s[2]=f*x+h*b+m*A,s[5]=f*p+h*y+m*R,s[8]=f*g+h*v+m*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,h=c*s-o*l,m=t*d+i*f+r*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=h*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(lf.makeScale(e,t)),this}rotate(e){return this.premultiply(lf.makeRotation(-e)),this}translate(e,t){return this.premultiply(lf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const lf=new mt,jm=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ym=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function b2(){const n={enabled:!0,workingColorSpace:$a,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ut&&(r.r=rs(r.r),r.g=rs(r.g),r.b=rs(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ut&&(r.r=Da(r.r),r.g=Da(r.g),r.b=Da(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ps?Qu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return nd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return nd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[$a]:{primaries:e,whitePoint:i,transfer:Qu,toXYZ:jm,fromXYZ:Ym,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Hi},outputColorSpaceConfig:{drawingBufferColorSpace:Hi}},[Hi]:{primaries:e,whitePoint:i,transfer:Ut,toXYZ:jm,fromXYZ:Ym,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Hi}}}),n}const Mt=b2();function rs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Da(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ko;class S2{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ko===void 0&&(Ko=td("canvas")),Ko.width=e.width,Ko.height=e.height;const r=Ko.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ko}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=td("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=rs(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(rs(t[i]/255)*255):t[i]=rs(t[i]);return{data:t,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let w2=0;class c0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:w2++}),this.uuid=gc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cf(r[o].image)):s.push(cf(r[o]))}else s=cf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function cf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?S2.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let M2=0;const uf=new ae;class ci extends ja{constructor(e=ci.DEFAULT_IMAGE,t=ci.DEFAULT_MAPPING,i=es,r=es,s=Xn,o=wo,a=sr,l=$i,c=ci.DEFAULT_ANISOTROPY,u=Ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:M2++}),this.uuid=gc(),this.name="",this.source=new c0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(uf).x}get height(){return this.source.getSize(uf).y}get depth(){return this.source.getSize(uf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ut(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ut(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rh:e.x=e.x-Math.floor(e.x);break;case es:e.x=e.x<0?0:1;break;case Ph:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rh:e.y=e.y-Math.floor(e.y);break;case es:e.y=e.y<0?0:1;break;case Ph:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ci.DEFAULT_IMAGE=null;ci.DEFAULT_MAPPING=Pv;ci.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,t=0,i=0,r=1){an.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(h+1)/2,A=(g+1)/2,R=(u+f)/4,M=(d+x)/4,S=(m+p)/4;return y>v&&y>A?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=R/i,s=M/i):v>A?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=R/r,s=S/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=M/s,r=S/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-m)*(p-m)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(p-m)/b,this.y=(d-x)/b,this.z=(f-u)/b,this.w=Math.acos((c+h+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this.w=bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this.w=bt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(bt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class E2 extends ja{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new ci(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new c0(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rr extends E2{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Bv extends ci{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class T2 extends ci{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fn{constructor(e,t,i,r,s,o,a,l,c,u,d,f,h,m,x,p){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,h,m,x,p)}set(e,t,i,r,s,o,a,l,c,u,d,f,h,m,x,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=f,g[3]=h,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Zo.setFromMatrixColumn(e,0).length(),s=1/Zo.setFromMatrixColumn(e,1).length(),o=1/Zo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,h=o*d,m=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+m*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=m+h*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,m=c*u,x=c*d;t[0]=f+x*a,t[4]=m*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-m,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,m=c*u,x=c*d;t[0]=f-x*a,t[4]=-o*d,t[8]=m+h*a,t[1]=h+m*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,m=a*u,x=a*d;t[0]=l*u,t[4]=m*c-h,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=h*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=x-f*d,t[8]=m*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+m,t[10]=f-x*d}else if(e.order==="XZY"){const f=o*l,h=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+x,t[5]=o*u,t[9]=h*d-m,t[2]=m*d-h,t[6]=a*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(A2,e,C2)}lookAt(e,t,i){const r=this.elements;return bi.subVectors(e,t),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),bs.crossVectors(i,bi),bs.lengthSq()===0&&(Math.abs(i.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),bs.crossVectors(i,bi)),bs.normalize(),zc.crossVectors(bi,bs),r[0]=bs.x,r[4]=zc.x,r[8]=bi.x,r[1]=bs.y,r[5]=zc.y,r[9]=bi.y,r[2]=bs.z,r[6]=zc.z,r[10]=bi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],m=i[2],x=i[6],p=i[10],g=i[14],b=i[3],y=i[7],v=i[11],A=i[15],R=r[0],M=r[4],S=r[8],T=r[12],U=r[1],I=r[5],L=r[9],G=r[13],B=r[2],V=r[6],$=r[10],k=r[14],Z=r[3],j=r[7],F=r[11],ue=r[15];return s[0]=o*R+a*U+l*B+c*Z,s[4]=o*M+a*I+l*V+c*j,s[8]=o*S+a*L+l*$+c*F,s[12]=o*T+a*G+l*k+c*ue,s[1]=u*R+d*U+f*B+h*Z,s[5]=u*M+d*I+f*V+h*j,s[9]=u*S+d*L+f*$+h*F,s[13]=u*T+d*G+f*k+h*ue,s[2]=m*R+x*U+p*B+g*Z,s[6]=m*M+x*I+p*V+g*j,s[10]=m*S+x*L+p*$+g*F,s[14]=m*T+x*G+p*k+g*ue,s[3]=b*R+y*U+v*B+A*Z,s[7]=b*M+y*I+v*V+A*j,s[11]=b*S+y*L+v*$+A*F,s[15]=b*T+y*G+v*k+A*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],m=e[3],x=e[7],p=e[11],g=e[15],b=l*h-c*f,y=a*h-c*d,v=a*f-l*d,A=o*h-c*u,R=o*f-l*u,M=o*d-a*u;return t*(x*b-p*y+g*v)-i*(m*b-p*A+g*R)+r*(m*y-x*A+g*M)-s*(m*v-x*R+p*M)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],m=e[12],x=e[13],p=e[14],g=e[15],b=t*a-i*o,y=t*l-r*o,v=t*c-s*o,A=i*l-r*a,R=i*c-s*a,M=r*c-s*l,S=u*x-d*m,T=u*p-f*m,U=u*g-h*m,I=d*p-f*x,L=d*g-h*x,G=f*g-h*p,B=b*G-y*L+v*I+A*U-R*T+M*S;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/B;return e[0]=(a*G-l*L+c*I)*V,e[1]=(r*L-i*G-s*I)*V,e[2]=(x*M-p*R+g*A)*V,e[3]=(f*R-d*M-h*A)*V,e[4]=(l*U-o*G-c*T)*V,e[5]=(t*G-r*U+s*T)*V,e[6]=(p*v-m*M-g*y)*V,e[7]=(u*M-f*v+h*y)*V,e[8]=(o*L-a*U+c*S)*V,e[9]=(i*U-t*L-s*S)*V,e[10]=(m*R-x*v+g*b)*V,e[11]=(d*v-u*R-h*b)*V,e[12]=(a*T-o*I-l*S)*V,e[13]=(t*I-i*T+r*S)*V,e[14]=(x*y-m*A-p*b)*V,e[15]=(u*A-d*y+f*b)*V,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,h=s*u,m=s*d,x=o*u,p=o*d,g=a*d,b=l*c,y=l*u,v=l*d,A=i.x,R=i.y,M=i.z;return r[0]=(1-(x+g))*A,r[1]=(h+v)*A,r[2]=(m-y)*A,r[3]=0,r[4]=(h-v)*R,r[5]=(1-(f+g))*R,r[6]=(p+b)*R,r[7]=0,r[8]=(m+y)*M,r[9]=(p-b)*M,r[10]=(1-(f+x))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let o=Zo.set(r[0],r[1],r[2]).length();const a=Zo.set(r[4],r[5],r[6]).length(),l=Zo.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Qi.copy(this);const c=1/o,u=1/a,d=1/l;return Qi.elements[0]*=c,Qi.elements[1]*=c,Qi.elements[2]*=c,Qi.elements[4]*=u,Qi.elements[5]*=u,Qi.elements[6]*=u,Qi.elements[8]*=d,Qi.elements[9]*=d,Qi.elements[10]*=d,t.setFromRotationMatrix(Qi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=Mr,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let m,x;if(l)m=s/(o-s),x=o*s/(o-s);else if(a===Mr)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ed)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Mr,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r);let m,x;if(l)m=1/(o-s),x=o/(o-s);else if(a===Mr)m=-2/(o-s),x=-(o+s)/(o-s);else if(a===ed)m=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Zo=new ae,Qi=new fn,A2=new ae(0,0,0),C2=new ae(1,1,1),bs=new ae,zc=new ae,bi=new ae,qm=new fn,Km=new Ya;class ps{constructor(e=0,t=0,i=0,r=ps.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Km.setFromEuler(this),this.setFromQuaternion(Km,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ps.DEFAULT_ORDER="XYZ";class zv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let R2=0;const Zm=new ae,Jo=new Ya,Br=new fn,Vc=new ae,rl=new ae,P2=new ae,D2=new Ya,Jm=new ae(1,0,0),Qm=new ae(0,1,0),eg=new ae(0,0,1),tg={type:"added"},L2={type:"removed"},Qo={type:"childadded",child:null},df={type:"childremoved",child:null};class Ni extends ja{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:R2++}),this.uuid=gc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ni.DEFAULT_UP.clone();const e=new ae,t=new ps,i=new Ya,r=new ae(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new fn},normalMatrix:{value:new mt}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=Ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jo.setFromAxisAngle(e,t),this.quaternion.multiply(Jo),this}rotateOnWorldAxis(e,t){return Jo.setFromAxisAngle(e,t),this.quaternion.premultiply(Jo),this}rotateX(e){return this.rotateOnAxis(Jm,e)}rotateY(e){return this.rotateOnAxis(Qm,e)}rotateZ(e){return this.rotateOnAxis(eg,e)}translateOnAxis(e,t){return Zm.copy(e).applyQuaternion(this.quaternion),this.position.add(Zm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jm,e)}translateY(e){return this.translateOnAxis(Qm,e)}translateZ(e){return this.translateOnAxis(eg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Br.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Vc.copy(e):Vc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Br.lookAt(rl,Vc,this.up):Br.lookAt(Vc,rl,this.up),this.quaternion.setFromRotationMatrix(Br),r&&(Br.extractRotation(r.matrixWorld),Jo.setFromRotationMatrix(Br),this.quaternion.premultiply(Jo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(At("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tg),Qo.child=e,this.dispatchEvent(Qo),Qo.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(L2),df.child=e,this.dispatchEvent(df),df.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Br.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Br.multiply(e.parent.matrixWorld)),e.applyMatrix4(Br),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tg),Qo.child=e,this.dispatchEvent(Qo),Qo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,e,P2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,D2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ni.DEFAULT_UP=new ae(0,1,0);Ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hc extends Ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const I2={type:"move"};class ff{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,i),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,m=.005;c.inputState.pinching&&f>h+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(I2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Hc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ss={h:0,s:0,l:0},Gc={h:0,s:0,l:0};function hf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class kt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Mt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Mt.workingColorSpace){if(e=y2(e,1),t=bt(t,0,1),i=bt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=hf(o,s,e+1/3),this.g=hf(o,s,e),this.b=hf(o,s,e-1/3)}return Mt.colorSpaceToWorking(this,r),this}setStyle(e,t=Hi){function i(s){s!==void 0&&parseFloat(s)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ut("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Hi){const i=Vv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}copyLinearToSRGB(e){return this.r=Da(e.r),this.g=Da(e.g),this.b=Da(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hi){return Mt.workingToColorSpace(kn.copy(this),e),Math.round(bt(kn.r*255,0,255))*65536+Math.round(bt(kn.g*255,0,255))*256+Math.round(bt(kn.b*255,0,255))}getHexString(e=Hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(kn.copy(this),t);const i=kn.r,r=kn.g,s=kn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(kn.copy(this),t),e.r=kn.r,e.g=kn.g,e.b=kn.b,e}getStyle(e=Hi){Mt.workingToColorSpace(kn.copy(this),e);const t=kn.r,i=kn.g,r=kn.b;return e!==Hi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ss),this.setHSL(Ss.h+e,Ss.s+t,Ss.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ss),e.getHSL(Gc);const i=of(Ss.h,Gc.h,t),r=of(Ss.s,Gc.s,t),s=of(Ss.l,Gc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new kt;kt.NAMES=Vv;class N2 extends Ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ps,this.environmentIntensity=1,this.environmentRotation=new ps,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const er=new ae,zr=new ae,pf=new ae,Vr=new ae,ea=new ae,ta=new ae,ng=new ae,mf=new ae,gf=new ae,_f=new ae,xf=new an,vf=new an,yf=new an;class rr{constructor(e=new ae,t=new ae,i=new ae){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),er.subVectors(e,t),r.cross(er);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){er.subVectors(r,t),zr.subVectors(i,t),pf.subVectors(e,t);const o=er.dot(er),a=er.dot(zr),l=er.dot(pf),c=zr.dot(zr),u=zr.dot(pf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-h-m,m,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Vr)===null?!1:Vr.x>=0&&Vr.y>=0&&Vr.x+Vr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Vr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vr.x),l.addScaledVector(o,Vr.y),l.addScaledVector(a,Vr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return xf.setScalar(0),vf.setScalar(0),yf.setScalar(0),xf.fromBufferAttribute(e,t),vf.fromBufferAttribute(e,i),yf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(xf,s.x),o.addScaledVector(vf,s.y),o.addScaledVector(yf,s.z),o}static isFrontFacing(e,t,i,r){return er.subVectors(i,t),zr.subVectors(e,t),er.cross(zr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return er.subVectors(this.c,this.b),zr.subVectors(this.a,this.b),er.cross(zr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return rr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return rr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ea.subVectors(r,i),ta.subVectors(s,i),mf.subVectors(e,i);const l=ea.dot(mf),c=ta.dot(mf);if(l<=0&&c<=0)return t.copy(i);gf.subVectors(e,r);const u=ea.dot(gf),d=ta.dot(gf);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ea,o);_f.subVectors(e,s);const h=ea.dot(_f),m=ta.dot(_f);if(m>=0&&h<=m)return t.copy(s);const x=h*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(ta,a);const p=u*m-h*d;if(p<=0&&d-u>=0&&h-m>=0)return ng.subVectors(s,r),a=(d-u)/(d-u+(h-m)),t.copy(r).addScaledVector(ng,a);const g=1/(p+x+f);return o=x*g,a=f*g,t.copy(i).addScaledVector(ea,o).addScaledVector(ta,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class _c{constructor(e=new ae(1/0,1/0,1/0),t=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(tr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(tr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=tr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,tr):tr.fromBufferAttribute(s,o),tr.applyMatrix4(e.matrixWorld),this.expandByPoint(tr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wc.copy(i.boundingBox)),Wc.applyMatrix4(e.matrixWorld),this.union(Wc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tr),tr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sl),$c.subVectors(this.max,sl),na.subVectors(e.a,sl),ia.subVectors(e.b,sl),ra.subVectors(e.c,sl),ws.subVectors(ia,na),Ms.subVectors(ra,ia),ro.subVectors(na,ra);let t=[0,-ws.z,ws.y,0,-Ms.z,Ms.y,0,-ro.z,ro.y,ws.z,0,-ws.x,Ms.z,0,-Ms.x,ro.z,0,-ro.x,-ws.y,ws.x,0,-Ms.y,Ms.x,0,-ro.y,ro.x,0];return!bf(t,na,ia,ra,$c)||(t=[1,0,0,0,1,0,0,0,1],!bf(t,na,ia,ra,$c))?!1:(Xc.crossVectors(ws,Ms),t=[Xc.x,Xc.y,Xc.z],bf(t,na,ia,ra,$c))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Hr=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],tr=new ae,Wc=new _c,na=new ae,ia=new ae,ra=new ae,ws=new ae,Ms=new ae,ro=new ae,sl=new ae,$c=new ae,Xc=new ae,so=new ae;function bf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){so.fromArray(n,s);const a=r.x*Math.abs(so.x)+r.y*Math.abs(so.y)+r.z*Math.abs(so.z),l=e.dot(so),c=t.dot(so),u=i.dot(so);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const cn=new ae,jc=new wt;let U2=0;class Pr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:U2++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Hm,this.updateRanges=[],this.gpuType=wr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jc.fromBufferAttribute(this,t),jc.applyMatrix3(e),this.setXY(t,jc.x,jc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=il(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ui(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=il(t,this.array)),t}setX(e,t){return this.normalized&&(t=ui(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=il(t,this.array)),t}setY(e,t){return this.normalized&&(t=ui(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=il(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ui(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=il(t,this.array)),t}setW(e,t){return this.normalized&&(t=ui(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ui(t,this.array),i=ui(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ui(t,this.array),i=ui(i,this.array),r=ui(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ui(t,this.array),i=ui(i,this.array),r=ui(r,this.array),s=ui(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hm&&(e.usage=this.usage),e}}class Hv extends Pr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Gv extends Pr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ss extends Pr{constructor(e,t,i){super(new Float32Array(e),t,i)}}const F2=new _c,ol=new ae,Sf=new ae;class u0{constructor(e=new ae,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):F2.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ol.subVectors(e,this.center);const t=ol.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ol,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ol.copy(e.center).add(Sf)),this.expandByPoint(ol.copy(e.center).sub(Sf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let O2=0;const Bi=new fn,wf=new Ni,sa=new ae,Si=new _c,al=new _c,wn=new ae;class gs extends ja{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O2++}),this.uuid=gc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(g2(e)?Gv:Hv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new mt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bi.makeRotationFromQuaternion(e),this.applyMatrix4(Bi),this}rotateX(e){return Bi.makeRotationX(e),this.applyMatrix4(Bi),this}rotateY(e){return Bi.makeRotationY(e),this.applyMatrix4(Bi),this}rotateZ(e){return Bi.makeRotationZ(e),this.applyMatrix4(Bi),this}translate(e,t,i){return Bi.makeTranslation(e,t,i),this.applyMatrix4(Bi),this}scale(e,t,i){return Bi.makeScale(e,t,i),this.applyMatrix4(Bi),this}lookAt(e){return wf.lookAt(e),wf.updateMatrix(),this.applyMatrix4(wf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sa).negate(),this.translate(sa.x,sa.y,sa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ss(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _c);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Si.setFromBufferAttribute(s),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new u0);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const i=this.boundingSphere.center;if(Si.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];al.setFromBufferAttribute(a),this.morphTargetsRelative?(wn.addVectors(Si.min,al.min),Si.expandByPoint(wn),wn.addVectors(Si.max,al.max),Si.expandByPoint(wn)):(Si.expandByPoint(al.min),Si.expandByPoint(al.max))}Si.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)wn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(wn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)wn.fromBufferAttribute(a,c),l&&(sa.fromBufferAttribute(e,c),wn.add(sa)),r=Math.max(r,i.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<i.count;S++)a[S]=new ae,l[S]=new ae;const c=new ae,u=new ae,d=new ae,f=new wt,h=new wt,m=new wt,x=new ae,p=new ae;function g(S,T,U){c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,U),f.fromBufferAttribute(s,S),h.fromBufferAttribute(s,T),m.fromBufferAttribute(s,U),u.sub(c),d.sub(c),h.sub(f),m.sub(f);const I=1/(h.x*m.y-m.x*h.y);isFinite(I)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(d,-h.y).multiplyScalar(I),p.copy(d).multiplyScalar(h.x).addScaledVector(u,-m.x).multiplyScalar(I),a[S].add(x),a[T].add(x),a[U].add(x),l[S].add(p),l[T].add(p),l[U].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let S=0,T=b.length;S<T;++S){const U=b[S],I=U.start,L=U.count;for(let G=I,B=I+L;G<B;G+=3)g(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const y=new ae,v=new ae,A=new ae,R=new ae;function M(S){A.fromBufferAttribute(r,S),R.copy(A);const T=a[S];y.copy(T),y.sub(A.multiplyScalar(A.dot(T))).normalize(),v.crossVectors(R,T);const I=v.dot(l[S])<0?-1:1;o.setXYZW(S,y.x,y.y,y.z,I)}for(let S=0,T=b.length;S<T;++S){const U=b[S],I=U.start,L=U.count;for(let G=I,B=I+L;G<B;G+=3)M(e.getX(G+0)),M(e.getX(G+1)),M(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new ae,s=new ae,o=new ae,a=new ae,l=new ae,c=new ae,u=new ae,d=new ae;if(e)for(let f=0,h=e.count;f<h;f+=3){const m=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wn.fromBufferAttribute(e,t),wn.normalize(),e.setXYZ(t,wn.x,wn.y,wn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,m=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*u;for(let g=0;g<u;g++)f[m++]=c[h++]}return new Pr(f,u,d)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gs,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let k2=0;class Ed extends ja{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:k2++}),this.uuid=gc(),this.name="",this.type="Material",this.blending=Pa,this.side=js,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yh,this.blendDst=bh,this.blendEquation=xo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qo,this.stencilZFail=qo,this.stencilZPass=qo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ut(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ut(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Pa&&(i.blending=this.blending),this.side!==js&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yh&&(i.blendSrc=this.blendSrc),this.blendDst!==bh&&(i.blendDst=this.blendDst),this.blendEquation!==xo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ha&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Gr=new ae,Mf=new ae,Yc=new ae,Es=new ae,Ef=new ae,qc=new ae,Tf=new ae;class B2{constructor(e=new ae,t=new ae(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gr.copy(this.origin).addScaledVector(this.direction,t),Gr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Mf.copy(e).add(t).multiplyScalar(.5),Yc.copy(t).sub(e).normalize(),Es.copy(this.origin).sub(Mf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Yc),a=Es.dot(this.direction),l=-Es.dot(Yc),c=Es.lengthSq(),u=Math.abs(1-o*o);let d,f,h,m;if(u>0)if(d=o*l-a,f=o*a-l,m=s*u,d>=0)if(f>=-m)if(f<=m){const x=1/u;d*=x,f*=x,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Mf).addScaledVector(Yc,f),h}intersectSphere(e,t){Gr.subVectors(e.center,this.origin);const i=Gr.dot(this.direction),r=Gr.dot(Gr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Gr)!==null}intersectTriangle(e,t,i,r,s){Ef.subVectors(t,e),qc.subVectors(i,e),Tf.crossVectors(Ef,qc);let o=this.direction.dot(Tf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Es.subVectors(this.origin,e);const l=a*this.direction.dot(qc.crossVectors(Es,qc));if(l<0)return null;const c=a*this.direction.dot(Ef.cross(Es));if(c<0||l+c>o)return null;const u=-a*Es.dot(Tf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wv extends Ed{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ps,this.combine=Sv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ig=new fn,oo=new B2,Kc=new u0,rg=new ae,Zc=new ae,Jc=new ae,Qc=new ae,Af=new ae,eu=new ae,sg=new ae,tu=new ae;class Ur extends Ni{constructor(e=new gs,t=new Wv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){eu.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Af.fromBufferAttribute(d,e),o?eu.addScaledVector(Af,u):eu.addScaledVector(Af.sub(t),u))}t.add(eu)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kc.copy(i.boundingSphere),Kc.applyMatrix4(s),oo.copy(e.ray).recast(e.near),!(Kc.containsPoint(oo.origin)===!1&&(oo.intersectSphere(Kc,rg)===null||oo.origin.distanceToSquared(rg)>(e.far-e.near)**2))&&(ig.copy(s).invert(),oo.copy(e.ray).applyMatrix4(ig),!(i.boundingBox!==null&&oo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,oo)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){const p=f[m],g=o[p.materialIndex],b=Math.max(p.start,h.start),y=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let v=b,A=y;v<A;v+=3){const R=a.getX(v),M=a.getX(v+1),S=a.getX(v+2);r=nu(this,g,e,i,c,u,d,R,M,S),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const m=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let p=m,g=x;p<g;p+=3){const b=a.getX(p),y=a.getX(p+1),v=a.getX(p+2);r=nu(this,o,e,i,c,u,d,b,y,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){const p=f[m],g=o[p.materialIndex],b=Math.max(p.start,h.start),y=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let v=b,A=y;v<A;v+=3){const R=v,M=v+1,S=v+2;r=nu(this,g,e,i,c,u,d,R,M,S),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const m=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let p=m,g=x;p<g;p+=3){const b=p,y=p+1,v=p+2;r=nu(this,o,e,i,c,u,d,b,y,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function z2(n,e,t,i,r,s,o,a){let l;if(e.side===xi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===js,a),l===null)return null;tu.copy(a),tu.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(tu);return c<t.near||c>t.far?null:{distance:c,point:tu.clone(),object:n}}function nu(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Zc),n.getVertexPosition(l,Jc),n.getVertexPosition(c,Qc);const u=z2(n,e,t,i,Zc,Jc,Qc,sg);if(u){const d=new ae;rr.getBarycoord(sg,Zc,Jc,Qc,d),r&&(u.uv=rr.getInterpolatedAttribute(r,a,l,c,d,new wt)),s&&(u.uv1=rr.getInterpolatedAttribute(s,a,l,c,d,new wt)),o&&(u.normal=rr.getInterpolatedAttribute(o,a,l,c,d,new ae),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new ae,materialIndex:0};rr.getNormal(Zc,Jc,Qc,f.normal),u.face=f,u.barycoord=d}return u}class V2 extends ci{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Ln,u=Ln,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cf=new ae,H2=new ae,G2=new mt;class mo{constructor(e=new ae(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Cf.subVectors(i,t).cross(H2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Cf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||G2.getNormalMatrix(e),r=this.coplanarPoint(Cf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ao=new u0,W2=new wt(.5,.5),iu=new ae;class $v{constructor(e=new mo,t=new mo,i=new mo,r=new mo,s=new mo,o=new mo){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mr,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],m=s[8],x=s[9],p=s[10],g=s[11],b=s[12],y=s[13],v=s[14],A=s[15];if(r[0].setComponents(c-o,h-u,g-m,A-b).normalize(),r[1].setComponents(c+o,h+u,g+m,A+b).normalize(),r[2].setComponents(c+a,h+d,g+x,A+y).normalize(),r[3].setComponents(c-a,h-d,g-x,A-y).normalize(),i)r[4].setComponents(l,f,p,v).normalize(),r[5].setComponents(c-l,h-f,g-p,A-v).normalize();else if(r[4].setComponents(c-l,h-f,g-p,A-v).normalize(),t===Mr)r[5].setComponents(c+l,h+f,g+p,A+v).normalize();else if(t===ed)r[5].setComponents(l,f,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ao.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ao.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ao)}intersectsSprite(e){ao.center.set(0,0,0);const t=W2.distanceTo(e.center);return ao.radius=.7071067811865476+t,ao.applyMatrix4(e.matrixWorld),this.intersectsSphere(ao)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(iu.x=r.normal.x>0?e.max.x:e.min.x,iu.y=r.normal.y>0?e.max.y:e.min.y,iu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(iu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xv extends ci{constructor(e=[],t=Bo,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lc extends ci{constructor(e,t,i=Nr,r,s,o,a=Ln,l=Ln,c,u=hs,d=1){if(u!==hs&&u!==Mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new c0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $2 extends lc{constructor(e,t=Nr,i=Bo,r,s,o=Ln,a=Ln,l,c=hs){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class jv extends ci{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xc extends gs{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ss(c,3)),this.setAttribute("normal",new ss(u,3)),this.setAttribute("uv",new ss(d,2));function m(x,p,g,b,y,v,A,R,M,S,T){const U=v/M,I=A/S,L=v/2,G=A/2,B=R/2,V=M+1,$=S+1;let k=0,Z=0;const j=new ae;for(let F=0;F<$;F++){const ue=F*I-G;for(let ge=0;ge<V;ge++){const _e=ge*U-L;j[x]=_e*b,j[p]=ue*y,j[g]=B,c.push(j.x,j.y,j.z),j[x]=0,j[p]=0,j[g]=R>0?1:-1,u.push(j.x,j.y,j.z),d.push(ge/M),d.push(1-F/S),k+=1}}for(let F=0;F<S;F++)for(let ue=0;ue<M;ue++){const ge=f+ue+V*F,_e=f+ue+V*(F+1),ye=f+(ue+1)+V*(F+1),Ae=f+(ue+1)+V*F;l.push(ge,_e,Ae),l.push(_e,ye,Ae),Z+=6}a.addGroup(h,Z,T),h+=Z,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class vc extends gs{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,h=[],m=[],x=[],p=[];for(let g=0;g<u;g++){const b=g*f-o;for(let y=0;y<c;y++){const v=y*d-s;m.push(v,-b,0),x.push(0,0,1),p.push(y/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<a;b++){const y=b+c*g,v=b+c*(g+1),A=b+1+c*(g+1),R=b+1+c*g;h.push(y,v,R),h.push(v,A,R)}this.setIndex(h),this.setAttribute("position",new ss(m,3)),this.setAttribute("normal",new ss(x,3)),this.setAttribute("uv",new ss(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.width,e.height,e.widthSegments,e.heightSegments)}}function Xa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ei(n){const e={};for(let t=0;t<n.length;t++){const i=Xa(n[t]);for(const r in i)e[r]=i[r]}return e}function X2(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Yv(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const j2={clone:Xa,merge:ei};var Y2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lr extends Ed{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Y2,this.fragmentShader=q2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xa(e.uniforms),this.uniformsGroups=X2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class K2 extends lr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Z2 extends Ed{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=a2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class J2 extends Ed{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ru=new ae,su=new Ya,dr=new ae;class qv extends Ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Mr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ru,su,dr),dr.x===1&&dr.y===1&&dr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ru,su,dr.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ru,su,dr),dr.x===1&&dr.y===1&&dr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ru,su,dr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ts=new ae,og=new wt,ag=new wt;class ir extends qv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cp*2*Math.atan(Math.tan(sf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ts.x,Ts.y).multiplyScalar(-e/Ts.z),Ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ts.x,Ts.y).multiplyScalar(-e/Ts.z)}getViewSize(e,t){return this.getViewBounds(e,og,ag),t.subVectors(ag,og)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sf*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class d0 extends qv{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const oa=-90,aa=1;class Q2 extends Ni{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ir(oa,aa,e,t);r.layers=this.layers,this.add(r);const s=new ir(oa,aa,e,t);s.layers=this.layers,this.add(s);const o=new ir(oa,aa,e,t);o.layers=this.layers,this.add(o);const a=new ir(oa,aa,e,t);a.layers=this.layers,this.add(a);const l=new ir(oa,aa,e,t);l.layers=this.layers,this.add(l);const c=new ir(oa,aa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Mr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ed)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class eE extends ir{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function lg(n,e,t,i){const r=tE(i);switch(t){case Uv:return n*e;case Ov:return n*e/r.components*r.byteLength;case r0:return n*e/r.components*r.byteLength;case Wa:return n*e*2/r.components*r.byteLength;case s0:return n*e*2/r.components*r.byteLength;case Fv:return n*e*3/r.components*r.byteLength;case sr:return n*e*4/r.components*r.byteLength;case o0:return n*e*4/r.components*r.byteLength;case wu:case Mu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Eu:case Tu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lh:case Nh:return Math.max(n,16)*Math.max(e,8)/4;case Dh:case Ih:return Math.max(n,8)*Math.max(e,8)/2;case Uh:case Fh:case kh:case Bh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Oh:case zh:case Vh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case $h:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case jh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case qh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Kh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Qh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ep:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case tp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case np:case ip:case rp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case sp:case op:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ap:case lp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tE(n){switch(n){case $i:case Dv:return{byteLength:1,components:1};case oc:case Lv:case fs:return{byteLength:2,components:1};case n0:case i0:return{byteLength:2,components:4};case Nr:case t0:case wr:return{byteLength:4,components:1};case Iv:case Nv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:e0}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=e0);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function nE(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,m)=>h.start-m.start);let f=0;for(let h=1;h<d.length;h++){const m=d[f],x=d[h];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,d[f]=x)}d.length=f+1;for(let h=0,m=d.length;h<m;h++){const x=d[h];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var iE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rE=`#ifdef USE_ALPHAHASH
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
#endif`,sE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cE=`#ifdef USE_AOMAP
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
#endif`,uE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dE=`#ifdef USE_BATCHING
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
#endif`,fE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gE=`#ifdef USE_IRIDESCENCE
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
#endif`,_E=`#ifdef USE_BUMPMAP
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
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ME=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,EE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,TE=`#define PI 3.141592653589793
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
} // validated`,AE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,CE=`vec3 transformedNormal = objectNormal;
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
#endif`,RE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IE="gl_FragColor = linearToOutputTexel( gl_FragColor );",NE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UE=`#ifdef USE_ENVMAP
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
#endif`,FE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,OE=`#ifdef USE_ENVMAP
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
#endif`,kE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BE=`#ifdef USE_ENVMAP
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
#endif`,zE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,VE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WE=`#ifdef USE_GRADIENTMAP
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
}`,$E=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YE=`uniform bool receiveShadow;
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
#endif`,qE=`#ifdef USE_ENVMAP
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
#endif`,KE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eT=`PhysicalMaterial material;
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
#endif`,tT=`uniform sampler2D dfgLUT;
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
}`,nT=`
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
#endif`,iT=`#if defined( RE_IndirectDiffuse )
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
#endif`,rT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fT=`#if defined( USE_POINTS_UV )
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
#endif`,hT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_T=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xT=`#ifdef USE_MORPHTARGETS
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
#endif`,vT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ST=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ET=`#ifdef USE_NORMALMAP
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
#endif`,TT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,LT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,VT=`float getShadowMask() {
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
}`,HT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GT=`#ifdef USE_SKINNING
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
#endif`,WT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$T=`#ifdef USE_SKINNING
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
#endif`,XT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,KT=`#ifdef USE_TRANSMISSION
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
#endif`,ZT=`#ifdef USE_TRANSMISSION
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
#endif`,JT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const n3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i3=`uniform sampler2D t2D;
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
}`,r3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,o3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l3=`#include <common>
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
}`,c3=`#if DEPTH_PACKING == 3200
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
}`,u3=`#define DISTANCE
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
}`,d3=`#define DISTANCE
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
}`,f3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p3=`uniform float scale;
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
}`,m3=`uniform vec3 diffuse;
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
}`,g3=`#include <common>
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
}`,_3=`uniform vec3 diffuse;
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
}`,x3=`#define LAMBERT
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
}`,v3=`#define LAMBERT
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
}`,y3=`#define MATCAP
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
}`,b3=`#define MATCAP
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
}`,S3=`#define NORMAL
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
}`,w3=`#define NORMAL
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
}`,M3=`#define PHONG
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
}`,E3=`#define PHONG
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
}`,T3=`#define STANDARD
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
}`,A3=`#define STANDARD
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
}`,C3=`#define TOON
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
}`,R3=`#define TOON
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
}`,P3=`uniform float size;
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
}`,D3=`uniform vec3 diffuse;
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
}`,L3=`#include <common>
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
}`,I3=`uniform vec3 color;
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
}`,N3=`uniform float rotation;
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
}`,U3=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:iE,alphahash_pars_fragment:rE,alphamap_fragment:sE,alphamap_pars_fragment:oE,alphatest_fragment:aE,alphatest_pars_fragment:lE,aomap_fragment:cE,aomap_pars_fragment:uE,batching_pars_vertex:dE,batching_vertex:fE,begin_vertex:hE,beginnormal_vertex:pE,bsdfs:mE,iridescence_fragment:gE,bumpmap_pars_fragment:_E,clipping_planes_fragment:xE,clipping_planes_pars_fragment:vE,clipping_planes_pars_vertex:yE,clipping_planes_vertex:bE,color_fragment:SE,color_pars_fragment:wE,color_pars_vertex:ME,color_vertex:EE,common:TE,cube_uv_reflection_fragment:AE,defaultnormal_vertex:CE,displacementmap_pars_vertex:RE,displacementmap_vertex:PE,emissivemap_fragment:DE,emissivemap_pars_fragment:LE,colorspace_fragment:IE,colorspace_pars_fragment:NE,envmap_fragment:UE,envmap_common_pars_fragment:FE,envmap_pars_fragment:OE,envmap_pars_vertex:kE,envmap_physical_pars_fragment:qE,envmap_vertex:BE,fog_vertex:zE,fog_pars_vertex:VE,fog_fragment:HE,fog_pars_fragment:GE,gradientmap_pars_fragment:WE,lightmap_pars_fragment:$E,lights_lambert_fragment:XE,lights_lambert_pars_fragment:jE,lights_pars_begin:YE,lights_toon_fragment:KE,lights_toon_pars_fragment:ZE,lights_phong_fragment:JE,lights_phong_pars_fragment:QE,lights_physical_fragment:eT,lights_physical_pars_fragment:tT,lights_fragment_begin:nT,lights_fragment_maps:iT,lights_fragment_end:rT,logdepthbuf_fragment:sT,logdepthbuf_pars_fragment:oT,logdepthbuf_pars_vertex:aT,logdepthbuf_vertex:lT,map_fragment:cT,map_pars_fragment:uT,map_particle_fragment:dT,map_particle_pars_fragment:fT,metalnessmap_fragment:hT,metalnessmap_pars_fragment:pT,morphinstance_vertex:mT,morphcolor_vertex:gT,morphnormal_vertex:_T,morphtarget_pars_vertex:xT,morphtarget_vertex:vT,normal_fragment_begin:yT,normal_fragment_maps:bT,normal_pars_fragment:ST,normal_pars_vertex:wT,normal_vertex:MT,normalmap_pars_fragment:ET,clearcoat_normal_fragment_begin:TT,clearcoat_normal_fragment_maps:AT,clearcoat_pars_fragment:CT,iridescence_pars_fragment:RT,opaque_fragment:PT,packing:DT,premultiplied_alpha_fragment:LT,project_vertex:IT,dithering_fragment:NT,dithering_pars_fragment:UT,roughnessmap_fragment:FT,roughnessmap_pars_fragment:OT,shadowmap_pars_fragment:kT,shadowmap_pars_vertex:BT,shadowmap_vertex:zT,shadowmask_pars_fragment:VT,skinbase_vertex:HT,skinning_pars_vertex:GT,skinning_vertex:WT,skinnormal_vertex:$T,specularmap_fragment:XT,specularmap_pars_fragment:jT,tonemapping_fragment:YT,tonemapping_pars_fragment:qT,transmission_fragment:KT,transmission_pars_fragment:ZT,uv_pars_fragment:JT,uv_pars_vertex:QT,uv_vertex:e3,worldpos_vertex:t3,background_vert:n3,background_frag:i3,backgroundCube_vert:r3,backgroundCube_frag:s3,cube_vert:o3,cube_frag:a3,depth_vert:l3,depth_frag:c3,distance_vert:u3,distance_frag:d3,equirect_vert:f3,equirect_frag:h3,linedashed_vert:p3,linedashed_frag:m3,meshbasic_vert:g3,meshbasic_frag:_3,meshlambert_vert:x3,meshlambert_frag:v3,meshmatcap_vert:y3,meshmatcap_frag:b3,meshnormal_vert:S3,meshnormal_frag:w3,meshphong_vert:M3,meshphong_frag:E3,meshphysical_vert:T3,meshphysical_frag:A3,meshtoon_vert:C3,meshtoon_frag:R3,points_vert:P3,points_frag:D3,shadow_vert:L3,shadow_frag:I3,sprite_vert:N3,sprite_frag:U3},ze={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},xr={basic:{uniforms:ei([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:ei([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:ei([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:ei([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:ei([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new kt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:ei([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:ei([ze.points,ze.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:ei([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:ei([ze.common,ze.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:ei([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:ei([ze.sprite,ze.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:ei([ze.common,ze.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:ei([ze.lights,ze.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};xr.physical={uniforms:ei([xr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const ou={r:0,b:0,g:0},lo=new ps,F3=new fn;function O3(n,e,t,i,r,s){const o=new kt(0);let a=r===!0?0:1,l,c,u=null,d=0,f=null;function h(b){let y=b.isScene===!0?b.background:null;if(y&&y.isTexture){const v=b.backgroundBlurriness>0;y=e.get(y,v)}return y}function m(b){let y=!1;const v=h(b);v===null?p(o,a):v&&v.isColor&&(p(v,1),y=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(b,y){const v=h(y);v&&(v.isCubeTexture||v.mapping===Md)?(c===void 0&&(c=new Ur(new xc(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:Xa(xr.backgroundCube.uniforms),vertexShader:xr.backgroundCube.vertexShader,fragmentShader:xr.backgroundCube.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,R,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),lo.copy(y.backgroundRotation),lo.x*=-1,lo.y*=-1,lo.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(lo.y*=-1,lo.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(F3.makeRotationFromEuler(lo)),c.material.toneMapped=Mt.getTransfer(v.colorSpace)!==Ut,(u!==v||d!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ur(new vc(2,2),new lr({name:"BackgroundMaterial",uniforms:Xa(xr.background.uniforms),vertexShader:xr.background.vertexShader,fragmentShader:xr.background.fragmentShader,side:js,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Mt.getTransfer(v.colorSpace)!==Ut,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,y){b.getRGB(ou,Yv(n)),t.buffers.color.setClear(ou.r,ou.g,ou.b,y,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),a=y,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,p(o,a)},render:m,addToRenderList:x,dispose:g}}function k3(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(I,L,G,B,V){let $=!1;const k=d(I,B,G,L);s!==k&&(s=k,c(s.object)),$=h(I,B,G,V),$&&m(I,B,G,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,v(I,L,G,B),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(I){return n.bindVertexArray(I)}function u(I){return n.deleteVertexArray(I)}function d(I,L,G,B){const V=B.wireframe===!0;let $=i[L.id];$===void 0&&($={},i[L.id]=$);const k=I.isInstancedMesh===!0?I.id:0;let Z=$[k];Z===void 0&&(Z={},$[k]=Z);let j=Z[G.id];j===void 0&&(j={},Z[G.id]=j);let F=j[V];return F===void 0&&(F=f(l()),j[V]=F),F}function f(I){const L=[],G=[],B=[];for(let V=0;V<t;V++)L[V]=0,G[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:B,object:I,attributes:{},index:null}}function h(I,L,G,B){const V=s.attributes,$=L.attributes;let k=0;const Z=G.getAttributes();for(const j in Z)if(Z[j].location>=0){const ue=V[j];let ge=$[j];if(ge===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(ge=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(ge=I.instanceColor)),ue===void 0||ue.attribute!==ge||ge&&ue.data!==ge.data)return!0;k++}return s.attributesNum!==k||s.index!==B}function m(I,L,G,B){const V={},$=L.attributes;let k=0;const Z=G.getAttributes();for(const j in Z)if(Z[j].location>=0){let ue=$[j];ue===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(ue=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(ue=I.instanceColor));const ge={};ge.attribute=ue,ue&&ue.data&&(ge.data=ue.data),V[j]=ge,k++}s.attributes=V,s.attributesNum=k,s.index=B}function x(){const I=s.newAttributes;for(let L=0,G=I.length;L<G;L++)I[L]=0}function p(I){g(I,0)}function g(I,L){const G=s.newAttributes,B=s.enabledAttributes,V=s.attributeDivisors;G[I]=1,B[I]===0&&(n.enableVertexAttribArray(I),B[I]=1),V[I]!==L&&(n.vertexAttribDivisor(I,L),V[I]=L)}function b(){const I=s.newAttributes,L=s.enabledAttributes;for(let G=0,B=L.length;G<B;G++)L[G]!==I[G]&&(n.disableVertexAttribArray(G),L[G]=0)}function y(I,L,G,B,V,$,k){k===!0?n.vertexAttribIPointer(I,L,G,V,$):n.vertexAttribPointer(I,L,G,B,V,$)}function v(I,L,G,B){x();const V=B.attributes,$=G.getAttributes(),k=L.defaultAttributeValues;for(const Z in $){const j=$[Z];if(j.location>=0){let F=V[Z];if(F===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(F=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(F=I.instanceColor)),F!==void 0){const ue=F.normalized,ge=F.itemSize,_e=e.get(F);if(_e===void 0)continue;const ye=_e.buffer,Ae=_e.type,ee=_e.bytesPerElement,fe=Ae===n.INT||Ae===n.UNSIGNED_INT||F.gpuType===t0;if(F.isInterleavedBufferAttribute){const le=F.data,Pe=le.stride,Ce=F.offset;if(le.isInstancedInterleavedBuffer){for(let ce=0;ce<j.locationSize;ce++)g(j.location+ce,le.meshPerAttribute);I.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ce=0;ce<j.locationSize;ce++)p(j.location+ce);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let ce=0;ce<j.locationSize;ce++)y(j.location+ce,ge/j.locationSize,Ae,ue,Pe*ee,(Ce+ge/j.locationSize*ce)*ee,fe)}else{if(F.isInstancedBufferAttribute){for(let le=0;le<j.locationSize;le++)g(j.location+le,F.meshPerAttribute);I.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let le=0;le<j.locationSize;le++)p(j.location+le);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let le=0;le<j.locationSize;le++)y(j.location+le,ge/j.locationSize,Ae,ue,ge*ee,ge/j.locationSize*le*ee,fe)}}else if(k!==void 0){const ue=k[Z];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(j.location,ue);break;case 3:n.vertexAttrib3fv(j.location,ue);break;case 4:n.vertexAttrib4fv(j.location,ue);break;default:n.vertexAttrib1fv(j.location,ue)}}}}b()}function A(){T();for(const I in i){const L=i[I];for(const G in L){const B=L[G];for(const V in B){const $=B[V];for(const k in $)u($[k].object),delete $[k];delete B[V]}}delete i[I]}}function R(I){if(i[I.id]===void 0)return;const L=i[I.id];for(const G in L){const B=L[G];for(const V in B){const $=B[V];for(const k in $)u($[k].object),delete $[k];delete B[V]}}delete i[I.id]}function M(I){for(const L in i){const G=i[L];for(const B in G){const V=G[B];if(V[I.id]===void 0)continue;const $=V[I.id];for(const k in $)u($[k].object),delete $[k];delete V[I.id]}}}function S(I){for(const L in i){const G=i[L],B=I.isInstancedMesh===!0?I.id:0,V=G[B];if(V!==void 0){for(const $ in V){const k=V[$];for(const Z in k)u(k[Z].object),delete k[Z];delete V[$]}delete G[B],Object.keys(G).length===0&&delete i[L]}}}function T(){U(),o=!0,s!==r&&(s=r,c(s.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:U,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfObject:S,releaseStatesOfProgram:M,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function B3(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let m=0;m<d;m++)h+=u[m];t.update(h,i,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<c.length;m++)o(c[m],u[m],f[m]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let m=0;for(let x=0;x<d;x++)m+=u[x]*f[x];t.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function z3(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(M){return!(M!==sr&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const S=M===fs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==$i&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==wr&&!S)}function l(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(ut("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:v,maxSamples:A,samples:R}}function V3(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new mo,a=new mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const m=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,g=n.get(d);if(!r||m===null||m.length===0||s&&!p)s?u(null):c();else{const b=s?0:i,y=b*4;let v=g.clippingState||null;l.value=v,v=u(m,f,y,h);for(let A=0;A!==y;++A)v[A]=t[A];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,m){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,m!==!0||p===null){const g=h+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<g)&&(p=new Float32Array(g));for(let y=0,v=h;y!==x;++y,v+=4)o.copy(d[y]).applyMatrix4(b,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}const Os=4,cg=[.125,.215,.35,.446,.526,.582],vo=20,H3=256,ll=new d0,ug=new kt;let Rf=null,Pf=0,Df=0,Lf=!1;const G3=new ae;class dg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=G3}=s;Rf=this._renderer.getRenderTarget(),Pf=this._renderer.getActiveCubeFace(),Df=this._renderer.getActiveMipmapLevel(),Lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rf,Pf,Df),this._renderer.xr.enabled=Lf,e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bo||e.mapping===Ga?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rf=this._renderer.getRenderTarget(),Pf=this._renderer.getActiveCubeFace(),Df=this._renderer.getActiveMipmapLevel(),Lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:fs,format:sr,colorSpace:$a,depthBuffer:!1},r=fg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fg(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=W3(s)),this._blurMaterial=X3(s,e,t),this._ggxMaterial=$3(s,e,t)}return r}_compileMaterial(e){const t=new Ur(new gs,e);this._renderer.compile(t,ll)}_sceneToCubeUV(e,t,i,r,s){const l=new ir(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(ug),d.toneMapping=Cr,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ur(new xc,new Wv({name:"PMREM.Background",side:xi,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,p=x.material;let g=!1;const b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,g=!0):(p.color.copy(ug),g=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const A=this._cubeSize;la(r,v*A,y>2?A:0,A,A),d.setRenderTarget(r),g&&d.render(x,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Bo||e.mapping===Ga;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;la(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ll)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,h=d*f,{_lodMax:m}=this,x=this._sizeLods[i],p=3*x*(i>m-Os?i-m+Os:0),g=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=m-t,la(s,p,g,3*x,2*x),r.setRenderTarget(s),r.render(a,ll),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,la(e,p,g,3*x,2*x),r.setRenderTarget(e),r.render(a,ll)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,h=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*vo-1),x=s/m,p=isFinite(s)?1+Math.floor(u*x):vo;p>vo&&ut(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vo}`);const g=[];let b=0;for(let M=0;M<vo;++M){const S=M/x,T=Math.exp(-S*S/2);g.push(T),M===0?b+=T:M<p&&(b+=2*T)}for(let M=0;M<g.length;M++)g[M]=g[M]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=m,f.mipInt.value=y-i;const v=this._sizeLods[r],A=3*v*(r>y-Os?r-y+Os:0),R=4*(this._cubeSize-v);la(t,A,R,3*v,2*v),l.setRenderTarget(t),l.render(d,ll)}}function W3(n){const e=[],t=[],i=[];let r=n;const s=n-Os+1+cg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Os?l=cg[o-n+Os-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,m=6,x=3,p=2,g=1,b=new Float32Array(x*m*h),y=new Float32Array(p*m*h),v=new Float32Array(g*m*h);for(let R=0;R<h;R++){const M=R%3*2/3-1,S=R>2?0:-1,T=[M,S,0,M+2/3,S,0,M+2/3,S+1,0,M,S,0,M+2/3,S+1,0,M,S+1,0];b.set(T,x*m*R),y.set(f,p*m*R);const U=[R,R,R,R,R,R];v.set(U,g*m*R)}const A=new gs;A.setAttribute("position",new Pr(b,x)),A.setAttribute("uv",new Pr(y,p)),A.setAttribute("faceIndex",new Pr(v,g)),i.push(new Ur(A,null)),r>Os&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function fg(n,e,t){const i=new Rr(n,e,t);return i.texture.mapping=Md,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function la(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function $3(n,e,t){return new lr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:H3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Td(),fragmentShader:`

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
		`,blending:is,depthTest:!1,depthWrite:!1})}function X3(n,e,t){const i=new Float32Array(vo),r=new ae(0,1,0);return new lr({name:"SphericalGaussianBlur",defines:{n:vo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Td(),fragmentShader:`

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
		`,blending:is,depthTest:!1,depthWrite:!1})}function hg(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Td(),fragmentShader:`

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
		`,blending:is,depthTest:!1,depthWrite:!1})}function pg(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function Td(){return`

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
	`}class Zv extends Rr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Xv(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new xc(5,5,5),s=new lr({name:"CubemapFromEquirect",uniforms:Xa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xi,blending:is});s.uniforms.tEquirect.value=t;const o=new Ur(r,s),a=t.minFilter;return t.minFilter===wo&&(t.minFilter=Xn),new Q2(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function j3(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?o(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===tf||h===nf)if(e.has(f)){const m=e.get(f).texture;return a(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const x=new Zv(m.height);return x.fromEquirectangularTexture(n,f),e.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const h=f.mapping,m=h===tf||h===nf,x=h===Bo||h===Ga;if(m||x){let p=t.get(f);const g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new dg(n)),p=m?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const b=f.image;return m&&b&&b.height>0||x&&b&&l(b)?(i===null&&(i=new dg(n)),p=m?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,h){return h===tf?f.mapping=Bo:h===nf&&(f.mapping=Ga),f}function l(f){let h=0;const m=6;for(let x=0;x<m;x++)f[x]!==void 0&&h++;return h===m}function c(f){const h=f.target;h.removeEventListener("dispose",c);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function Y3(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&nd("WebGLRenderer: "+i+" extension not supported."),r}}}function q3(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,m=d.attributes.position;let x=0;if(m===void 0)return;if(h!==null){const b=h.array;x=h.version;for(let y=0,v=b.length;y<v;y+=3){const A=b[y+0],R=b[y+1],M=b[y+2];f.push(A,R,R,M,M,A)}}else{const b=m.array;x=m.version;for(let y=0,v=b.length/3-1;y<v;y+=3){const A=y+0,R=y+1,M=y+2;f.push(A,R,R,M,M,A)}}const p=new(m.count>=65535?Gv:Hv)(f,1);p.version=x;const g=s.get(d);g&&e.remove(g),s.set(d,p)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function K3(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function c(f,h,m){m!==0&&(n.drawElementsInstanced(i,h,s,f*o,m),t.update(h,i,m))}function u(f,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,m);let p=0;for(let g=0;g<m;g++)p+=h[g];t.update(p,i,1)}function d(f,h,m,x){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f.length;g++)c(f[g]/o,h[g],x[g]);else{p.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,x,0,m);let g=0;for(let b=0;b<m;b++)g+=h[b]*x[b];t.update(g,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Z3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:At("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function J3(n,e,t){const i=new WeakMap,r=new an;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let U=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",U)};var h=U;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),x===!0&&(v=2),p===!0&&(v=3);let A=a.attributes.position.count*v,R=1;A>e.maxTextureSize&&(R=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const M=new Float32Array(A*R*4*d),S=new Bv(M,A,R,d);S.type=wr,S.needsUpdate=!0;const T=v*4;for(let I=0;I<d;I++){const L=g[I],G=b[I],B=y[I],V=A*R*4*I;for(let $=0;$<L.count;$++){const k=$*T;m===!0&&(r.fromBufferAttribute(L,$),M[V+k+0]=r.x,M[V+k+1]=r.y,M[V+k+2]=r.z,M[V+k+3]=0),x===!0&&(r.fromBufferAttribute(G,$),M[V+k+4]=r.x,M[V+k+5]=r.y,M[V+k+6]=r.z,M[V+k+7]=0),p===!0&&(r.fromBufferAttribute(B,$),M[V+k+8]=r.x,M[V+k+9]=r.y,M[V+k+10]=r.z,M[V+k+11]=B.itemSize===4?r.w:1)}}f={count:d,texture:S,size:new wt(A,R)},i.set(a,f),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Q3(n,e,t,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const eA={[wv]:"LINEAR_TONE_MAPPING",[Mv]:"REINHARD_TONE_MAPPING",[Ev]:"CINEON_TONE_MAPPING",[Tv]:"ACES_FILMIC_TONE_MAPPING",[Cv]:"AGX_TONE_MAPPING",[Rv]:"NEUTRAL_TONE_MAPPING",[Av]:"CUSTOM_TONE_MAPPING"};function tA(n,e,t,i,r){const s=new Rr(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),o=new Rr(e,t,{type:fs,depthBuffer:!1,stencilBuffer:!1}),a=new gs;a.setAttribute("position",new ss([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ss([0,2,0,0,2,0],2));const l=new K2({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ur(a,l),u=new d0(-1,1,1,-1,0,1);let d=null,f=null,h=!1,m,x=null,p=[],g=!1;this.setSize=function(b,y){s.setSize(b,y),o.setSize(b,y);for(let v=0;v<p.length;v++){const A=p[v];A.setSize&&A.setSize(b,y)}},this.setEffects=function(b){p=b,g=p.length>0&&p[0].isRenderPass===!0;const y=s.width,v=s.height;for(let A=0;A<p.length;A++){const R=p[A];R.setSize&&R.setSize(y,v)}},this.begin=function(b,y){if(h||b.toneMapping===Cr&&p.length===0)return!1;if(x=y,y!==null){const v=y.width,A=y.height;(s.width!==v||s.height!==A)&&this.setSize(v,A)}return g===!1&&b.setRenderTarget(s),m=b.toneMapping,b.toneMapping=Cr,!0},this.hasRenderPass=function(){return g},this.end=function(b,y){b.toneMapping=m,h=!0;let v=s,A=o;for(let R=0;R<p.length;R++){const M=p[R];if(M.enabled!==!1&&(M.render(b,A,v,y),M.needsSwap!==!1)){const S=v;v=A,A=S}}if(d!==b.outputColorSpace||f!==b.toneMapping){d=b.outputColorSpace,f=b.toneMapping,l.defines={},Mt.getTransfer(d)===Ut&&(l.defines.SRGB_TRANSFER="");const R=eA[f];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,b.setRenderTarget(x),b.render(c,u),x=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Jv=new ci,up=new lc(1,1),Qv=new Bv,ey=new T2,ty=new Xv,mg=[],gg=[],_g=new Float32Array(16),xg=new Float32Array(9),vg=new Float32Array(4);function qa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=mg[r];if(s===void 0&&(s=new Float32Array(r),mg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function xn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ad(n,e){let t=gg[e];t===void 0&&(t=new Int32Array(e),gg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function nA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function iA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2fv(this.addr,e),vn(t,e)}}function rA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;n.uniform3fv(this.addr,e),vn(t,e)}}function sA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4fv(this.addr,e),vn(t,e)}}function oA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(xn(t,i))return;vg.set(i),n.uniformMatrix2fv(this.addr,!1,vg),vn(t,i)}}function aA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(xn(t,i))return;xg.set(i),n.uniformMatrix3fv(this.addr,!1,xg),vn(t,i)}}function lA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(xn(t,i))return;_g.set(i),n.uniformMatrix4fv(this.addr,!1,_g),vn(t,i)}}function cA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function uA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2iv(this.addr,e),vn(t,e)}}function dA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;n.uniform3iv(this.addr,e),vn(t,e)}}function fA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4iv(this.addr,e),vn(t,e)}}function hA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function pA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;n.uniform2uiv(this.addr,e),vn(t,e)}}function mA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;n.uniform3uiv(this.addr,e),vn(t,e)}}function gA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;n.uniform4uiv(this.addr,e),vn(t,e)}}function _A(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(up.compareFunction=t.isReversedDepthBuffer()?l0:a0,s=up):s=Jv,t.setTexture2D(e||s,r)}function xA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ey,r)}function vA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ty,r)}function yA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Qv,r)}function bA(n){switch(n){case 5126:return nA;case 35664:return iA;case 35665:return rA;case 35666:return sA;case 35674:return oA;case 35675:return aA;case 35676:return lA;case 5124:case 35670:return cA;case 35667:case 35671:return uA;case 35668:case 35672:return dA;case 35669:case 35673:return fA;case 5125:return hA;case 36294:return pA;case 36295:return mA;case 36296:return gA;case 35678:case 36198:case 36298:case 36306:case 35682:return _A;case 35679:case 36299:case 36307:return xA;case 35680:case 36300:case 36308:case 36293:return vA;case 36289:case 36303:case 36311:case 36292:return yA}}function SA(n,e){n.uniform1fv(this.addr,e)}function wA(n,e){const t=qa(e,this.size,2);n.uniform2fv(this.addr,t)}function MA(n,e){const t=qa(e,this.size,3);n.uniform3fv(this.addr,t)}function EA(n,e){const t=qa(e,this.size,4);n.uniform4fv(this.addr,t)}function TA(n,e){const t=qa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function AA(n,e){const t=qa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function CA(n,e){const t=qa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function RA(n,e){n.uniform1iv(this.addr,e)}function PA(n,e){n.uniform2iv(this.addr,e)}function DA(n,e){n.uniform3iv(this.addr,e)}function LA(n,e){n.uniform4iv(this.addr,e)}function IA(n,e){n.uniform1uiv(this.addr,e)}function NA(n,e){n.uniform2uiv(this.addr,e)}function UA(n,e){n.uniform3uiv(this.addr,e)}function FA(n,e){n.uniform4uiv(this.addr,e)}function OA(n,e,t){const i=this.cache,r=e.length,s=Ad(t,r);xn(i,s)||(n.uniform1iv(this.addr,s),vn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=up:o=Jv;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function kA(n,e,t){const i=this.cache,r=e.length,s=Ad(t,r);xn(i,s)||(n.uniform1iv(this.addr,s),vn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ey,s[o])}function BA(n,e,t){const i=this.cache,r=e.length,s=Ad(t,r);xn(i,s)||(n.uniform1iv(this.addr,s),vn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ty,s[o])}function zA(n,e,t){const i=this.cache,r=e.length,s=Ad(t,r);xn(i,s)||(n.uniform1iv(this.addr,s),vn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Qv,s[o])}function VA(n){switch(n){case 5126:return SA;case 35664:return wA;case 35665:return MA;case 35666:return EA;case 35674:return TA;case 35675:return AA;case 35676:return CA;case 5124:case 35670:return RA;case 35667:case 35671:return PA;case 35668:case 35672:return DA;case 35669:case 35673:return LA;case 5125:return IA;case 36294:return NA;case 36295:return UA;case 36296:return FA;case 35678:case 36198:case 36298:case 36306:case 35682:return OA;case 35679:case 36299:case 36307:return kA;case 35680:case 36300:case 36308:case 36293:return BA;case 36289:case 36303:case 36311:case 36292:return zA}}class HA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=bA(t.type)}}class GA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=VA(t.type)}}class WA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const If=/(\w+)(\])?(\[|\.)?/g;function yg(n,e){n.seq.push(e),n.map[e.id]=e}function $A(n,e,t){const i=n.name,r=i.length;for(If.lastIndex=0;;){const s=If.exec(i),o=If.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){yg(t,c===void 0?new HA(a,n,e):new GA(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new WA(a),yg(t,d)),t=d}}}class Au{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);$A(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function bg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const XA=37297;let jA=0;function YA(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Sg=new mt;function qA(n){Mt._getMatrix(Sg,Mt.workingColorSpace,n);const e=`mat3( ${Sg.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(n)){case Qu:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function wg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+YA(n.getShaderSource(e),a)}else return s}function KA(n,e){const t=qA(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ZA={[wv]:"Linear",[Mv]:"Reinhard",[Ev]:"Cineon",[Tv]:"ACESFilmic",[Cv]:"AgX",[Rv]:"Neutral",[Av]:"Custom"};function JA(n,e){const t=ZA[e];return t===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const au=new ae;function QA(){Mt.getLuminanceCoefficients(au);const n=au.x.toFixed(4),e=au.y.toFixed(4),t=au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sl).join(`
`)}function tC(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function nC(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Sl(n){return n!==""}function Mg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iC=/^[ \t]*#include +<([\w\d./]+)>/gm;function dp(n){return n.replace(iC,sC)}const rC=new Map;function sC(n,e){let t=gt[e];if(t===void 0){const i=rC.get(e);if(i!==void 0)t=gt[i],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return dp(t)}const oC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tg(n){return n.replace(oC,aC)}function aC(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ag(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const lC={[Su]:"SHADOWMAP_TYPE_PCF",[bl]:"SHADOWMAP_TYPE_VSM"};function cC(n){return lC[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const uC={[Bo]:"ENVMAP_TYPE_CUBE",[Ga]:"ENVMAP_TYPE_CUBE",[Md]:"ENVMAP_TYPE_CUBE_UV"};function dC(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":uC[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const fC={[Ga]:"ENVMAP_MODE_REFRACTION"};function hC(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":fC[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pC={[Sv]:"ENVMAP_BLENDING_MULTIPLY",[r2]:"ENVMAP_BLENDING_MIX",[s2]:"ENVMAP_BLENDING_ADD"};function mC(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":pC[n.combine]||"ENVMAP_BLENDING_NONE"}function gC(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function _C(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=cC(t),c=dC(t),u=hC(t),d=mC(t),f=gC(t),h=eC(t),m=tC(s),x=r.createProgram();let p,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Sl).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Sl).join(`
`),g.length>0&&(g+=`
`)):(p=[Ag(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sl).join(`
`),g=[Ag(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cr?"#define TONE_MAPPING":"",t.toneMapping!==Cr?gt.tonemapping_pars_fragment:"",t.toneMapping!==Cr?JA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,KA("linearToOutputTexel",t.outputColorSpace),QA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sl).join(`
`)),o=dp(o),o=Mg(o,t),o=Eg(o,t),a=dp(a),a=Mg(a,t),a=Eg(a,t),o=Tg(o),a=Tg(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Gm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=b+p+o,v=b+g+a,A=bg(r,r.VERTEX_SHADER,y),R=bg(r,r.FRAGMENT_SHADER,v);r.attachShader(x,A),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function M(I){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(x)||"",G=r.getShaderInfoLog(A)||"",B=r.getShaderInfoLog(R)||"",V=L.trim(),$=G.trim(),k=B.trim();let Z=!0,j=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,A,R);else{const F=wg(r,A,"vertex"),ue=wg(r,R,"fragment");At("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+F+`
`+ue)}else V!==""?ut("WebGLProgram: Program Info Log:",V):($===""||k==="")&&(j=!1);j&&(I.diagnostics={runnable:Z,programLog:V,vertexShader:{log:$,prefix:p},fragmentShader:{log:k,prefix:g}})}r.deleteShader(A),r.deleteShader(R),S=new Au(r,x),T=nC(r,x)}let S;this.getUniforms=function(){return S===void 0&&M(this),S};let T;this.getAttributes=function(){return T===void 0&&M(this),T};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(x,XA)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jA++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=R,this}let xC=0;class vC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new yC(e),t.set(e,i)),i}}class yC{constructor(e){this.id=xC++,this.code=e,this.usedTimes=0}}function bC(n,e,t,i,r,s){const o=new zv,a=new vC,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return l.add(S),S===0?"uv":`uv${S}`}function x(S,T,U,I,L){const G=I.fog,B=L.geometry,V=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?I.environment:null,$=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,k=e.get(S.envMap||V,$),Z=k&&k.mapping===Md?k.image.height:null,j=h[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&ut("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const F=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ue=F!==void 0?F.length:0;let ge=0;B.morphAttributes.position!==void 0&&(ge=1),B.morphAttributes.normal!==void 0&&(ge=2),B.morphAttributes.color!==void 0&&(ge=3);let _e,ye,Ae,ee;if(j){const Ve=xr[j];_e=Ve.vertexShader,ye=Ve.fragmentShader}else _e=S.vertexShader,ye=S.fragmentShader,a.update(S),Ae=a.getVertexShaderID(S),ee=a.getFragmentShaderID(S);const fe=n.getRenderTarget(),le=n.state.buffers.depth.getReversed(),Pe=L.isInstancedMesh===!0,Ce=L.isBatchedMesh===!0,ce=!!S.map,E=!!S.matcap,C=!!k,H=!!S.aoMap,ne=!!S.lightMap,q=!!S.bumpMap,O=!!S.normalMap,N=!!S.displacementMap,xe=!!S.emissiveMap,he=!!S.metalnessMap,re=!!S.roughnessMap,me=S.anisotropy>0,P=S.clearcoat>0,w=S.dispersion>0,z=S.iridescence>0,J=S.sheen>0,te=S.transmission>0,K=me&&!!S.anisotropyMap,Me=P&&!!S.clearcoatMap,ve=P&&!!S.clearcoatNormalMap,He=P&&!!S.clearcoatRoughnessMap,Le=z&&!!S.iridescenceMap,be=z&&!!S.iridescenceThicknessMap,Ee=J&&!!S.sheenColorMap,De=J&&!!S.sheenRoughnessMap,Fe=!!S.specularMap,Ie=!!S.specularColorMap,st=!!S.specularIntensityMap,W=te&&!!S.transmissionMap,Re=te&&!!S.thicknessMap,Te=!!S.gradientMap,Oe=!!S.alphaMap,Se=S.alphaTest>0,de=!!S.alphaHash,Ge=!!S.extensions;let tt=Cr;S.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(tt=n.toneMapping);const Et={shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:_e,fragmentShader:ye,defines:S.defines,customVertexShaderID:Ae,customFragmentShaderID:ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ce,batchingColor:Ce&&L._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&L.instanceColor!==null,instancingMorph:Pe&&L.morphTexture!==null,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:$a,alphaToCoverage:!!S.alphaToCoverage,map:ce,matcap:E,envMap:C,envMapMode:C&&k.mapping,envMapCubeUVHeight:Z,aoMap:H,lightMap:ne,bumpMap:q,normalMap:O,displacementMap:N,emissiveMap:xe,normalMapObjectSpace:O&&S.normalMapType===c2,normalMapTangentSpace:O&&S.normalMapType===l2,metalnessMap:he,roughnessMap:re,anisotropy:me,anisotropyMap:K,clearcoat:P,clearcoatMap:Me,clearcoatNormalMap:ve,clearcoatRoughnessMap:He,dispersion:w,iridescence:z,iridescenceMap:Le,iridescenceThicknessMap:be,sheen:J,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Fe,specularColorMap:Ie,specularIntensityMap:st,transmission:te,transmissionMap:W,thicknessMap:Re,gradientMap:Te,opaque:S.transparent===!1&&S.blending===Pa&&S.alphaToCoverage===!1,alphaMap:Oe,alphaTest:Se,alphaHash:de,combine:S.combine,mapUv:ce&&m(S.map.channel),aoMapUv:H&&m(S.aoMap.channel),lightMapUv:ne&&m(S.lightMap.channel),bumpMapUv:q&&m(S.bumpMap.channel),normalMapUv:O&&m(S.normalMap.channel),displacementMapUv:N&&m(S.displacementMap.channel),emissiveMapUv:xe&&m(S.emissiveMap.channel),metalnessMapUv:he&&m(S.metalnessMap.channel),roughnessMapUv:re&&m(S.roughnessMap.channel),anisotropyMapUv:K&&m(S.anisotropyMap.channel),clearcoatMapUv:Me&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:ve&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:be&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:De&&m(S.sheenRoughnessMap.channel),specularMapUv:Fe&&m(S.specularMap.channel),specularColorMapUv:Ie&&m(S.specularColorMap.channel),specularIntensityMapUv:st&&m(S.specularIntensityMap.channel),transmissionMapUv:W&&m(S.transmissionMap.channel),thicknessMapUv:Re&&m(S.thicknessMap.channel),alphaMapUv:Oe&&m(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(O||me),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(ce||Oe),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||B.attributes.normal===void 0&&O===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:le,skinning:L.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:ge,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:tt,decodeVideoTexture:ce&&S.map.isVideoTexture===!0&&Mt.getTransfer(S.map.colorSpace)===Ut,decodeVideoTextureEmissive:xe&&S.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(S.emissiveMap.colorSpace)===Ut,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Jr,flipSided:S.side===xi,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ge&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&S.extensions.multiDraw===!0||Ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Et.vertexUv1s=l.has(1),Et.vertexUv2s=l.has(2),Et.vertexUv3s=l.has(3),l.clear(),Et}function p(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const U in S.defines)T.push(U),T.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(g(T,S),b(T,S),T.push(n.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function g(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function b(S,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),S.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const T=h[S.type];let U;if(T){const I=xr[T];U=j2.clone(I.uniforms)}else U=S.uniforms;return U}function v(S,T){let U=u.get(T);return U!==void 0?++U.usedTimes:(U=new _C(n,T,S,r),c.push(U),u.set(T,U)),U}function A(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function R(S){a.remove(S)}function M(){a.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:y,acquireProgram:v,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:M}}function SC(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function wC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Cg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Rg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,m,x,p,g){let b=n[e];return b===void 0?(b={id:f.id,object:f,geometry:h,material:m,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:p,group:g},n[e]=b):(b.id=f.id,b.object=f,b.geometry=h,b.material=m,b.materialVariant=o(f),b.groupOrder=x,b.renderOrder=f.renderOrder,b.z=p,b.group=g),e++,b}function l(f,h,m,x,p,g){const b=a(f,h,m,x,p,g);m.transmission>0?i.push(b):m.transparent===!0?r.push(b):t.push(b)}function c(f,h,m,x,p,g){const b=a(f,h,m,x,p,g);m.transmission>0?i.unshift(b):m.transparent===!0?r.unshift(b):t.unshift(b)}function u(f,h){t.length>1&&t.sort(f||wC),i.length>1&&i.sort(h||Cg),r.length>1&&r.sort(h||Cg)}function d(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function MC(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Rg,n.set(i,[o])):r>=s.length?(o=new Rg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function EC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ae,color:new kt};break;case"SpotLight":t={position:new ae,direction:new ae,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ae,color:new kt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ae,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":t={color:new kt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return n[e.id]=t,t}}}function TC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let AC=0;function CC(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function RC(n){const e=new EC,t=TC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new ae);const r=new ae,s=new fn,o=new fn;function a(c){let u=0,d=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let h=0,m=0,x=0,p=0,g=0,b=0,y=0,v=0,A=0,R=0,M=0;c.sort(CC);for(let T=0,U=c.length;T<U;T++){const I=c[T],L=I.color,G=I.intensity,B=I.distance;let V=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Wa?V=I.shadow.map.texture:V=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=L.r*G,d+=L.g*G,f+=L.b*G;else if(I.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(I.sh.coefficients[$],G);M++}else if(I.isDirectionalLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const k=I.shadow,Z=t.get(I);Z.shadowIntensity=k.intensity,Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,i.directionalShadow[h]=Z,i.directionalShadowMap[h]=V,i.directionalShadowMatrix[h]=I.shadow.matrix,b++}i.directional[h]=$,h++}else if(I.isSpotLight){const $=e.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(L).multiplyScalar(G),$.distance=B,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,i.spot[x]=$;const k=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,k.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[x]=k.matrix,I.castShadow){const Z=t.get(I);Z.shadowIntensity=k.intensity,Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,i.spotShadow[x]=Z,i.spotShadowMap[x]=V,v++}x++}else if(I.isRectAreaLight){const $=e.get(I);$.color.copy(L).multiplyScalar(G),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),i.rectArea[p]=$,p++}else if(I.isPointLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){const k=I.shadow,Z=t.get(I);Z.shadowIntensity=k.intensity,Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,Z.shadowCameraNear=k.camera.near,Z.shadowCameraFar=k.camera.far,i.pointShadow[m]=Z,i.pointShadowMap[m]=V,i.pointShadowMatrix[m]=I.shadow.matrix,y++}i.point[m]=$,m++}else if(I.isHemisphereLight){const $=e.get(I);$.skyColor.copy(I.color).multiplyScalar(G),$.groundColor.copy(I.groundColor).multiplyScalar(G),i.hemi[g]=$,g++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ze.LTC_FLOAT_1,i.rectAreaLTC2=ze.LTC_FLOAT_2):(i.rectAreaLTC1=ze.LTC_HALF_1,i.rectAreaLTC2=ze.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const S=i.hash;(S.directionalLength!==h||S.pointLength!==m||S.spotLength!==x||S.rectAreaLength!==p||S.hemiLength!==g||S.numDirectionalShadows!==b||S.numPointShadows!==y||S.numSpotShadows!==v||S.numSpotMaps!==A||S.numLightProbes!==M)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=p,i.point.length=m,i.hemi.length=g,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=M,S.directionalLength=h,S.pointLength=m,S.spotLength=x,S.rectAreaLength=p,S.hemiLength=g,S.numDirectionalShadows=b,S.numPointShadows=y,S.numSpotShadows=v,S.numSpotMaps=A,S.numLightProbes=M,i.version=AC++)}function l(c,u){let d=0,f=0,h=0,m=0,x=0;const p=u.matrixWorldInverse;for(let g=0,b=c.length;g<b;g++){const y=c[g];if(y.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),d++}else if(y.isSpotLight){const v=i.spot[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),h++}else if(y.isRectAreaLight){const v=i.rectArea[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),o.identity(),s.copy(y.matrixWorld),s.premultiply(p),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const v=i.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function Pg(n){const e=new RC(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function PC(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Pg(n),e.set(r,[a])):s>=o.length?(a=new Pg(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const DC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LC=`uniform sampler2D shadow_pass;
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
}`,IC=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],NC=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],Dg=new fn,cl=new ae,Nf=new ae;function UC(n,e,t){let i=new $v;const r=new wt,s=new wt,o=new an,a=new Z2,l=new J2,c={},u=t.maxTextureSize,d={[js]:xi,[xi]:js,[Jr]:Jr},f=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:DC,fragmentShader:LC}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const m=new gs;m.setAttribute("position",new Pr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ur(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Su;let g=this.type;this.render=function(R,M,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;this.type===BM&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Su);const T=n.getRenderTarget(),U=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),L=n.state;L.setBlending(is),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const G=g!==this.type;G&&M.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(V=>V.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,V=R.length;B<V;B++){const $=R[B],k=$.shadow;if(k===void 0){ut("WebGLShadowMap:",$,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const Z=k.getFrameExtents();r.multiply(Z),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,k.mapSize.y=s.y));const j=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=j,k.map===null||G===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===bl){if($.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Rr(r.x,r.y,{format:Wa,type:fs,minFilter:Xn,magFilter:Xn,generateMipmaps:!1}),k.map.texture.name=$.name+".shadowMap",k.map.depthTexture=new lc(r.x,r.y,wr),k.map.depthTexture.name=$.name+".shadowMapDepth",k.map.depthTexture.format=hs,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ln,k.map.depthTexture.magFilter=Ln}else $.isPointLight?(k.map=new Zv(r.x),k.map.depthTexture=new $2(r.x,Nr)):(k.map=new Rr(r.x,r.y),k.map.depthTexture=new lc(r.x,r.y,Nr)),k.map.depthTexture.name=$.name+".shadowMap",k.map.depthTexture.format=hs,this.type===Su?(k.map.depthTexture.compareFunction=j?l0:a0,k.map.depthTexture.minFilter=Xn,k.map.depthTexture.magFilter=Xn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ln,k.map.depthTexture.magFilter=Ln);k.camera.updateProjectionMatrix()}const F=k.map.isWebGLCubeRenderTarget?6:1;for(let ue=0;ue<F;ue++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,ue),n.clear();else{ue===0&&(n.setRenderTarget(k.map),n.clear());const ge=k.getViewport(ue);o.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),L.viewport(o)}if($.isPointLight){const ge=k.camera,_e=k.matrix,ye=$.distance||ge.far;ye!==ge.far&&(ge.far=ye,ge.updateProjectionMatrix()),cl.setFromMatrixPosition($.matrixWorld),ge.position.copy(cl),Nf.copy(ge.position),Nf.add(IC[ue]),ge.up.copy(NC[ue]),ge.lookAt(Nf),ge.updateMatrixWorld(),_e.makeTranslation(-cl.x,-cl.y,-cl.z),Dg.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Dg,ge.coordinateSystem,ge.reversedDepth)}else k.updateMatrices($);i=k.getFrustum(),v(M,S,k.camera,$,this.type)}k.isPointLightShadow!==!0&&this.type===bl&&b(k,S),k.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(T,U,I)};function b(R,M){const S=e.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Rr(r.x,r.y,{format:Wa,type:fs})),f.uniforms.shadow_pass.value=R.map.depthTexture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(M,null,S,f,x,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(M,null,S,h,x,null)}function y(R,M,S,T){let U=null;const I=S.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)U=I;else if(U=S.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const L=U.uuid,G=M.uuid;let B=c[L];B===void 0&&(B={},c[L]=B);let V=B[G];V===void 0&&(V=U.clone(),B[G]=V,M.addEventListener("dispose",A)),U=V}if(U.visible=M.visible,U.wireframe=M.wireframe,T===bl?U.side=M.shadowSide!==null?M.shadowSide:M.side:U.side=M.shadowSide!==null?M.shadowSide:d[M.side],U.alphaMap=M.alphaMap,U.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,U.map=M.map,U.clipShadows=M.clipShadows,U.clippingPlanes=M.clippingPlanes,U.clipIntersection=M.clipIntersection,U.displacementMap=M.displacementMap,U.displacementScale=M.displacementScale,U.displacementBias=M.displacementBias,U.wireframeLinewidth=M.wireframeLinewidth,U.linewidth=M.linewidth,S.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const L=n.properties.get(U);L.light=S}return U}function v(R,M,S,T,U){if(R.visible===!1)return;if(R.layers.test(M.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&U===bl)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,R.matrixWorld);const G=e.update(R),B=R.material;if(Array.isArray(B)){const V=G.groups;for(let $=0,k=V.length;$<k;$++){const Z=V[$],j=B[Z.materialIndex];if(j&&j.visible){const F=y(R,j,T,U);R.onBeforeShadow(n,R,M,S,G,F,Z),n.renderBufferDirect(S,null,G,F,R,Z),R.onAfterShadow(n,R,M,S,G,F,Z)}}}else if(B.visible){const V=y(R,B,T,U);R.onBeforeShadow(n,R,M,S,G,V,null),n.renderBufferDirect(S,null,G,V,R,null),R.onAfterShadow(n,R,M,S,G,V,null)}}const L=R.children;for(let G=0,B=L.length;G<B;G++)v(L[G],M,S,T,U)}function A(R){R.target.removeEventListener("dispose",A);for(const S in c){const T=c[S],U=R.target.uuid;U in T&&(T[U].dispose(),delete T[U])}}}function FC(n,e){function t(){let W=!1;const Re=new an;let Te=null;const Oe=new an(0,0,0,0);return{setMask:function(Se){Te!==Se&&!W&&(n.colorMask(Se,Se,Se,Se),Te=Se)},setLocked:function(Se){W=Se},setClear:function(Se,de,Ge,tt,Et){Et===!0&&(Se*=tt,de*=tt,Ge*=tt),Re.set(Se,de,Ge,tt),Oe.equals(Re)===!1&&(n.clearColor(Se,de,Ge,tt),Oe.copy(Re))},reset:function(){W=!1,Te=null,Oe.set(-1,0,0,0)}}}function i(){let W=!1,Re=!1,Te=null,Oe=null,Se=null;return{setReversed:function(de){if(Re!==de){const Ge=e.get("EXT_clip_control");de?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Re=de;const tt=Se;Se=null,this.setClear(tt)}},getReversed:function(){return Re},setTest:function(de){de?fe(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(de){Te!==de&&!W&&(n.depthMask(de),Te=de)},setFunc:function(de){if(Re&&(de=v2[de]),Oe!==de){switch(de){case Sh:n.depthFunc(n.NEVER);break;case wh:n.depthFunc(n.ALWAYS);break;case Mh:n.depthFunc(n.LESS);break;case Ha:n.depthFunc(n.LEQUAL);break;case Eh:n.depthFunc(n.EQUAL);break;case Th:n.depthFunc(n.GEQUAL);break;case Ah:n.depthFunc(n.GREATER);break;case Ch:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Oe=de}},setLocked:function(de){W=de},setClear:function(de){Se!==de&&(Se=de,Re&&(de=1-de),n.clearDepth(de))},reset:function(){W=!1,Te=null,Oe=null,Se=null,Re=!1}}}function r(){let W=!1,Re=null,Te=null,Oe=null,Se=null,de=null,Ge=null,tt=null,Et=null;return{setTest:function(Ve){W||(Ve?fe(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(Ve){Re!==Ve&&!W&&(n.stencilMask(Ve),Re=Ve)},setFunc:function(Ve,Ze,pt){(Te!==Ve||Oe!==Ze||Se!==pt)&&(n.stencilFunc(Ve,Ze,pt),Te=Ve,Oe=Ze,Se=pt)},setOp:function(Ve,Ze,pt){(de!==Ve||Ge!==Ze||tt!==pt)&&(n.stencilOp(Ve,Ze,pt),de=Ve,Ge=Ze,tt=pt)},setLocked:function(Ve){W=Ve},setClear:function(Ve){Et!==Ve&&(n.clearStencil(Ve),Et=Ve)},reset:function(){W=!1,Re=null,Te=null,Oe=null,Se=null,de=null,Ge=null,tt=null,Et=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],m=null,x=!1,p=null,g=null,b=null,y=null,v=null,A=null,R=null,M=new kt(0,0,0),S=0,T=!1,U=null,I=null,L=null,G=null,B=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,k=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=k>=1):Z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=k>=2);let j=null,F={};const ue=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),_e=new an().fromArray(ue),ye=new an().fromArray(ge);function Ae(W,Re,Te,Oe){const Se=new Uint8Array(4),de=n.createTexture();n.bindTexture(W,de),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<Te;Ge++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Re,0,n.RGBA,1,1,Oe,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(Re+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return de}const ee={};ee[n.TEXTURE_2D]=Ae(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=Ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=Ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=Ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(n.DEPTH_TEST),o.setFunc(Ha),q(!1),O(Om),fe(n.CULL_FACE),H(is);function fe(W){u[W]!==!0&&(n.enable(W),u[W]=!0)}function le(W){u[W]!==!1&&(n.disable(W),u[W]=!1)}function Pe(W,Re){return d[W]!==Re?(n.bindFramebuffer(W,Re),d[W]=Re,W===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Re),W===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ce(W,Re){let Te=h,Oe=!1;if(W){Te=f.get(Re),Te===void 0&&(Te=[],f.set(Re,Te));const Se=W.textures;if(Te.length!==Se.length||Te[0]!==n.COLOR_ATTACHMENT0){for(let de=0,Ge=Se.length;de<Ge;de++)Te[de]=n.COLOR_ATTACHMENT0+de;Te.length=Se.length,Oe=!0}}else Te[0]!==n.BACK&&(Te[0]=n.BACK,Oe=!0);Oe&&n.drawBuffers(Te)}function ce(W){return m!==W?(n.useProgram(W),m=W,!0):!1}const E={[xo]:n.FUNC_ADD,[VM]:n.FUNC_SUBTRACT,[HM]:n.FUNC_REVERSE_SUBTRACT};E[GM]=n.MIN,E[WM]=n.MAX;const C={[$M]:n.ZERO,[XM]:n.ONE,[jM]:n.SRC_COLOR,[yh]:n.SRC_ALPHA,[QM]:n.SRC_ALPHA_SATURATE,[ZM]:n.DST_COLOR,[qM]:n.DST_ALPHA,[YM]:n.ONE_MINUS_SRC_COLOR,[bh]:n.ONE_MINUS_SRC_ALPHA,[JM]:n.ONE_MINUS_DST_COLOR,[KM]:n.ONE_MINUS_DST_ALPHA,[e2]:n.CONSTANT_COLOR,[t2]:n.ONE_MINUS_CONSTANT_COLOR,[n2]:n.CONSTANT_ALPHA,[i2]:n.ONE_MINUS_CONSTANT_ALPHA};function H(W,Re,Te,Oe,Se,de,Ge,tt,Et,Ve){if(W===is){x===!0&&(le(n.BLEND),x=!1);return}if(x===!1&&(fe(n.BLEND),x=!0),W!==zM){if(W!==p||Ve!==T){if((g!==xo||v!==xo)&&(n.blendEquation(n.FUNC_ADD),g=xo,v=xo),Ve)switch(W){case Pa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case km:n.blendFunc(n.ONE,n.ONE);break;case Bm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zm:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:At("WebGLState: Invalid blending: ",W);break}else switch(W){case Pa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case km:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Bm:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zm:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",W);break}b=null,y=null,A=null,R=null,M.set(0,0,0),S=0,p=W,T=Ve}return}Se=Se||Re,de=de||Te,Ge=Ge||Oe,(Re!==g||Se!==v)&&(n.blendEquationSeparate(E[Re],E[Se]),g=Re,v=Se),(Te!==b||Oe!==y||de!==A||Ge!==R)&&(n.blendFuncSeparate(C[Te],C[Oe],C[de],C[Ge]),b=Te,y=Oe,A=de,R=Ge),(tt.equals(M)===!1||Et!==S)&&(n.blendColor(tt.r,tt.g,tt.b,Et),M.copy(tt),S=Et),p=W,T=!1}function ne(W,Re){W.side===Jr?le(n.CULL_FACE):fe(n.CULL_FACE);let Te=W.side===xi;Re&&(Te=!Te),q(Te),W.blending===Pa&&W.transparent===!1?H(is):H(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),s.setMask(W.colorWrite);const Oe=W.stencilWrite;a.setTest(Oe),Oe&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),xe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(W){U!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),U=W)}function O(W){W!==OM?(fe(n.CULL_FACE),W!==I&&(W===Om?n.cullFace(n.BACK):W===kM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),I=W}function N(W){W!==L&&($&&n.lineWidth(W),L=W)}function xe(W,Re,Te){W?(fe(n.POLYGON_OFFSET_FILL),(G!==Re||B!==Te)&&(G=Re,B=Te,o.getReversed()&&(Re=-Re),n.polygonOffset(Re,Te))):le(n.POLYGON_OFFSET_FILL)}function he(W){W?fe(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function re(W){W===void 0&&(W=n.TEXTURE0+V-1),j!==W&&(n.activeTexture(W),j=W)}function me(W,Re,Te){Te===void 0&&(j===null?Te=n.TEXTURE0+V-1:Te=j);let Oe=F[Te];Oe===void 0&&(Oe={type:void 0,texture:void 0},F[Te]=Oe),(Oe.type!==W||Oe.texture!==Re)&&(j!==Te&&(n.activeTexture(Te),j=Te),n.bindTexture(W,Re||ee[W]),Oe.type=W,Oe.texture=Re)}function P(){const W=F[j];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function w(){try{n.compressedTexImage2D(...arguments)}catch(W){At("WebGLState:",W)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(W){At("WebGLState:",W)}}function J(){try{n.texSubImage2D(...arguments)}catch(W){At("WebGLState:",W)}}function te(){try{n.texSubImage3D(...arguments)}catch(W){At("WebGLState:",W)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(W){At("WebGLState:",W)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(W){At("WebGLState:",W)}}function ve(){try{n.texStorage2D(...arguments)}catch(W){At("WebGLState:",W)}}function He(){try{n.texStorage3D(...arguments)}catch(W){At("WebGLState:",W)}}function Le(){try{n.texImage2D(...arguments)}catch(W){At("WebGLState:",W)}}function be(){try{n.texImage3D(...arguments)}catch(W){At("WebGLState:",W)}}function Ee(W){_e.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),_e.copy(W))}function De(W){ye.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),ye.copy(W))}function Fe(W,Re){let Te=c.get(Re);Te===void 0&&(Te=new WeakMap,c.set(Re,Te));let Oe=Te.get(W);Oe===void 0&&(Oe=n.getUniformBlockIndex(Re,W.name),Te.set(W,Oe))}function Ie(W,Re){const Oe=c.get(Re).get(W);l.get(Re)!==Oe&&(n.uniformBlockBinding(Re,Oe,W.__bindingPointIndex),l.set(Re,Oe))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},j=null,F={},d={},f=new WeakMap,h=[],m=null,x=!1,p=null,g=null,b=null,y=null,v=null,A=null,R=null,M=new kt(0,0,0),S=0,T=!1,U=null,I=null,L=null,G=null,B=null,_e.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:fe,disable:le,bindFramebuffer:Pe,drawBuffers:Ce,useProgram:ce,setBlending:H,setMaterial:ne,setFlipSided:q,setCullFace:O,setLineWidth:N,setPolygonOffset:xe,setScissorTest:he,activeTexture:re,bindTexture:me,unbindTexture:P,compressedTexImage2D:w,compressedTexImage3D:z,texImage2D:Le,texImage3D:be,updateUBOMapping:Fe,uniformBlockBinding:Ie,texStorage2D:ve,texStorage3D:He,texSubImage2D:J,texSubImage3D:te,compressedTexSubImage2D:K,compressedTexSubImage3D:Me,scissor:Ee,viewport:De,reset:st}}function OC(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new wt,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,w){return h?new OffscreenCanvas(P,w):td("canvas")}function x(P,w,z){let J=1;const te=me(P);if((te.width>z||te.height>z)&&(J=z/Math.max(te.width,te.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const K=Math.floor(J*te.width),Me=Math.floor(J*te.height);d===void 0&&(d=m(K,Me));const ve=w?m(K,Me):d;return ve.width=K,ve.height=Me,ve.getContext("2d").drawImage(P,0,0,K,Me),ut("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+K+"x"+Me+")."),ve}else return"data"in P&&ut("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),P;return P}function p(P){return P.generateMipmaps}function g(P){n.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(P,w,z,J,te=!1){if(P!==null){if(n[P]!==void 0)return n[P];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let K=w;if(w===n.RED&&(z===n.FLOAT&&(K=n.R32F),z===n.HALF_FLOAT&&(K=n.R16F),z===n.UNSIGNED_BYTE&&(K=n.R8)),w===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.R8UI),z===n.UNSIGNED_SHORT&&(K=n.R16UI),z===n.UNSIGNED_INT&&(K=n.R32UI),z===n.BYTE&&(K=n.R8I),z===n.SHORT&&(K=n.R16I),z===n.INT&&(K=n.R32I)),w===n.RG&&(z===n.FLOAT&&(K=n.RG32F),z===n.HALF_FLOAT&&(K=n.RG16F),z===n.UNSIGNED_BYTE&&(K=n.RG8)),w===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RG8UI),z===n.UNSIGNED_SHORT&&(K=n.RG16UI),z===n.UNSIGNED_INT&&(K=n.RG32UI),z===n.BYTE&&(K=n.RG8I),z===n.SHORT&&(K=n.RG16I),z===n.INT&&(K=n.RG32I)),w===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RGB8UI),z===n.UNSIGNED_SHORT&&(K=n.RGB16UI),z===n.UNSIGNED_INT&&(K=n.RGB32UI),z===n.BYTE&&(K=n.RGB8I),z===n.SHORT&&(K=n.RGB16I),z===n.INT&&(K=n.RGB32I)),w===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),z===n.UNSIGNED_INT&&(K=n.RGBA32UI),z===n.BYTE&&(K=n.RGBA8I),z===n.SHORT&&(K=n.RGBA16I),z===n.INT&&(K=n.RGBA32I)),w===n.RGB&&(z===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),w===n.RGBA){const Me=te?Qu:Mt.getTransfer(J);z===n.FLOAT&&(K=n.RGBA32F),z===n.HALF_FLOAT&&(K=n.RGBA16F),z===n.UNSIGNED_BYTE&&(K=Me===Ut?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(P,w){let z;return P?w===null||w===Nr||w===ac?z=n.DEPTH24_STENCIL8:w===wr?z=n.DEPTH32F_STENCIL8:w===oc&&(z=n.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Nr||w===ac?z=n.DEPTH_COMPONENT24:w===wr?z=n.DEPTH_COMPONENT32F:w===oc&&(z=n.DEPTH_COMPONENT16),z}function A(P,w){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ln&&P.minFilter!==Xn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function R(P){const w=P.target;w.removeEventListener("dispose",R),S(w),w.isVideoTexture&&u.delete(w)}function M(P){const w=P.target;w.removeEventListener("dispose",M),U(w)}function S(P){const w=i.get(P);if(w.__webglInit===void 0)return;const z=P.source,J=f.get(z);if(J){const te=J[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&T(P),Object.keys(J).length===0&&f.delete(z)}i.remove(P)}function T(P){const w=i.get(P);n.deleteTexture(w.__webglTexture);const z=P.source,J=f.get(z);delete J[w.__cacheKey],o.memory.textures--}function U(P){const w=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let te=0;te<w.__webglFramebuffer[J].length;te++)n.deleteFramebuffer(w.__webglFramebuffer[J][te]);else n.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)n.deleteFramebuffer(w.__webglFramebuffer[J]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const z=P.textures;for(let J=0,te=z.length;J<te;J++){const K=i.get(z[J]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(z[J])}i.remove(P)}let I=0;function L(){I=0}function G(){const P=I;return P>=r.maxTextures&&ut("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),I+=1,P}function B(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function V(P,w){const z=i.get(P);if(P.isVideoTexture&&he(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&z.__version!==P.version){const J=P.image;if(J===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(z,P,w);return}}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+w)}function $(P,w){const z=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){ee(z,P,w);return}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+w)}function k(P,w){const z=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){ee(z,P,w);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+w)}function Z(P,w){const z=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&z.__version!==P.version){fe(z,P,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+w)}const j={[Rh]:n.REPEAT,[es]:n.CLAMP_TO_EDGE,[Ph]:n.MIRRORED_REPEAT},F={[Ln]:n.NEAREST,[o2]:n.NEAREST_MIPMAP_NEAREST,[Bc]:n.NEAREST_MIPMAP_LINEAR,[Xn]:n.LINEAR,[rf]:n.LINEAR_MIPMAP_NEAREST,[wo]:n.LINEAR_MIPMAP_LINEAR},ue={[u2]:n.NEVER,[m2]:n.ALWAYS,[d2]:n.LESS,[a0]:n.LEQUAL,[f2]:n.EQUAL,[l0]:n.GEQUAL,[h2]:n.GREATER,[p2]:n.NOTEQUAL};function ge(P,w){if(w.type===wr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Xn||w.magFilter===rf||w.magFilter===Bc||w.magFilter===wo||w.minFilter===Xn||w.minFilter===rf||w.minFilter===Bc||w.minFilter===wo)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,j[w.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,j[w.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,j[w.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,F[w.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,F[w.minFilter]),w.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,ue[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ln||w.minFilter!==Bc&&w.minFilter!==wo||w.type===wr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function _e(P,w){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",R));const J=w.source;let te=f.get(J);te===void 0&&(te={},f.set(J,te));const K=B(w);if(K!==P.__cacheKey){te[K]===void 0&&(te[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[K].usedTimes++;const Me=te[P.__cacheKey];Me!==void 0&&(te[P.__cacheKey].usedTimes--,Me.usedTimes===0&&T(w)),P.__cacheKey=K,P.__webglTexture=te[K].texture}return z}function ye(P,w,z){return Math.floor(Math.floor(P/z)/w)}function Ae(P,w,z,J){const K=P.updateRanges;if(K.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,z,J,w.data);else{K.sort((be,Ee)=>be.start-Ee.start);let Me=0;for(let be=1;be<K.length;be++){const Ee=K[Me],De=K[be],Fe=Ee.start+Ee.count,Ie=ye(De.start,w.width,4),st=ye(Ee.start,w.width,4);De.start<=Fe+1&&Ie===st&&ye(De.start+De.count-1,w.width,4)===Ie?Ee.count=Math.max(Ee.count,De.start+De.count-Ee.start):(++Me,K[Me]=De)}K.length=Me+1;const ve=n.getParameter(n.UNPACK_ROW_LENGTH),He=n.getParameter(n.UNPACK_SKIP_PIXELS),Le=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let be=0,Ee=K.length;be<Ee;be++){const De=K[be],Fe=Math.floor(De.start/4),Ie=Math.ceil(De.count/4),st=Fe%w.width,W=Math.floor(Fe/w.width),Re=Ie,Te=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,st),n.pixelStorei(n.UNPACK_SKIP_ROWS,W),t.texSubImage2D(n.TEXTURE_2D,0,st,W,Re,Te,z,J,w.data)}P.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ve),n.pixelStorei(n.UNPACK_SKIP_PIXELS,He),n.pixelStorei(n.UNPACK_SKIP_ROWS,Le)}}function ee(P,w,z){let J=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=n.TEXTURE_3D);const te=_e(P,w),K=w.source;t.bindTexture(J,P.__webglTexture,n.TEXTURE0+z);const Me=i.get(K);if(K.version!==Me.__version||te===!0){t.activeTexture(n.TEXTURE0+z);const ve=Mt.getPrimaries(Mt.workingColorSpace),He=w.colorSpace===Ps?null:Mt.getPrimaries(w.colorSpace),Le=w.colorSpace===Ps||ve===He?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let be=x(w.image,!1,r.maxTextureSize);be=re(w,be);const Ee=s.convert(w.format,w.colorSpace),De=s.convert(w.type);let Fe=y(w.internalFormat,Ee,De,w.colorSpace,w.isVideoTexture);ge(J,w);let Ie;const st=w.mipmaps,W=w.isVideoTexture!==!0,Re=Me.__version===void 0||te===!0,Te=K.dataReady,Oe=A(w,be);if(w.isDepthTexture)Fe=v(w.format===Mo,w.type),Re&&(W?t.texStorage2D(n.TEXTURE_2D,1,Fe,be.width,be.height):t.texImage2D(n.TEXTURE_2D,0,Fe,be.width,be.height,0,Ee,De,null));else if(w.isDataTexture)if(st.length>0){W&&Re&&t.texStorage2D(n.TEXTURE_2D,Oe,Fe,st[0].width,st[0].height);for(let Se=0,de=st.length;Se<de;Se++)Ie=st[Se],W?Te&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,Ee,De,Ie.data):t.texImage2D(n.TEXTURE_2D,Se,Fe,Ie.width,Ie.height,0,Ee,De,Ie.data);w.generateMipmaps=!1}else W?(Re&&t.texStorage2D(n.TEXTURE_2D,Oe,Fe,be.width,be.height),Te&&Ae(w,be,Ee,De)):t.texImage2D(n.TEXTURE_2D,0,Fe,be.width,be.height,0,Ee,De,be.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){W&&Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,Fe,st[0].width,st[0].height,be.depth);for(let Se=0,de=st.length;Se<de;Se++)if(Ie=st[Se],w.format!==sr)if(Ee!==null)if(W){if(Te)if(w.layerUpdates.size>0){const Ge=lg(Ie.width,Ie.height,w.format,w.type);for(const tt of w.layerUpdates){const Et=Ie.data.subarray(tt*Ge/Ie.data.BYTES_PER_ELEMENT,(tt+1)*Ge/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,tt,Ie.width,Ie.height,1,Ee,Et)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,Ie.width,Ie.height,be.depth,Ee,Ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Se,Fe,Ie.width,Ie.height,be.depth,0,Ie.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Te&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,Ie.width,Ie.height,be.depth,Ee,De,Ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Se,Fe,Ie.width,Ie.height,be.depth,0,Ee,De,Ie.data)}else{W&&Re&&t.texStorage2D(n.TEXTURE_2D,Oe,Fe,st[0].width,st[0].height);for(let Se=0,de=st.length;Se<de;Se++)Ie=st[Se],w.format!==sr?Ee!==null?W?Te&&t.compressedTexSubImage2D(n.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,Ee,Ie.data):t.compressedTexImage2D(n.TEXTURE_2D,Se,Fe,Ie.width,Ie.height,0,Ie.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Te&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,Ee,De,Ie.data):t.texImage2D(n.TEXTURE_2D,Se,Fe,Ie.width,Ie.height,0,Ee,De,Ie.data)}else if(w.isDataArrayTexture)if(W){if(Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,Fe,be.width,be.height,be.depth),Te)if(w.layerUpdates.size>0){const Se=lg(be.width,be.height,w.format,w.type);for(const de of w.layerUpdates){const Ge=be.data.subarray(de*Se/be.data.BYTES_PER_ELEMENT,(de+1)*Se/be.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,be.width,be.height,1,Ee,De,Ge)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Ee,De,be.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,be.width,be.height,be.depth,0,Ee,De,be.data);else if(w.isData3DTexture)W?(Re&&t.texStorage3D(n.TEXTURE_3D,Oe,Fe,be.width,be.height,be.depth),Te&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Ee,De,be.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,be.width,be.height,be.depth,0,Ee,De,be.data);else if(w.isFramebufferTexture){if(Re)if(W)t.texStorage2D(n.TEXTURE_2D,Oe,Fe,be.width,be.height);else{let Se=be.width,de=be.height;for(let Ge=0;Ge<Oe;Ge++)t.texImage2D(n.TEXTURE_2D,Ge,Fe,Se,de,0,Ee,De,null),Se>>=1,de>>=1}}else if(st.length>0){if(W&&Re){const Se=me(st[0]);t.texStorage2D(n.TEXTURE_2D,Oe,Fe,Se.width,Se.height)}for(let Se=0,de=st.length;Se<de;Se++)Ie=st[Se],W?Te&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,Ee,De,Ie):t.texImage2D(n.TEXTURE_2D,Se,Fe,Ee,De,Ie);w.generateMipmaps=!1}else if(W){if(Re){const Se=me(be);t.texStorage2D(n.TEXTURE_2D,Oe,Fe,Se.width,Se.height)}Te&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,De,be)}else t.texImage2D(n.TEXTURE_2D,0,Fe,Ee,De,be);p(w)&&g(J),Me.__version=K.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function fe(P,w,z){if(w.image.length!==6)return;const J=_e(P,w),te=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+z);const K=i.get(te);if(te.version!==K.__version||J===!0){t.activeTexture(n.TEXTURE0+z);const Me=Mt.getPrimaries(Mt.workingColorSpace),ve=w.colorSpace===Ps?null:Mt.getPrimaries(w.colorSpace),He=w.colorSpace===Ps||Me===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const Le=w.isCompressedTexture||w.image[0].isCompressedTexture,be=w.image[0]&&w.image[0].isDataTexture,Ee=[];for(let de=0;de<6;de++)!Le&&!be?Ee[de]=x(w.image[de],!0,r.maxCubemapSize):Ee[de]=be?w.image[de].image:w.image[de],Ee[de]=re(w,Ee[de]);const De=Ee[0],Fe=s.convert(w.format,w.colorSpace),Ie=s.convert(w.type),st=y(w.internalFormat,Fe,Ie,w.colorSpace),W=w.isVideoTexture!==!0,Re=K.__version===void 0||J===!0,Te=te.dataReady;let Oe=A(w,De);ge(n.TEXTURE_CUBE_MAP,w);let Se;if(Le){W&&Re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,st,De.width,De.height);for(let de=0;de<6;de++){Se=Ee[de].mipmaps;for(let Ge=0;Ge<Se.length;Ge++){const tt=Se[Ge];w.format!==sr?Fe!==null?W?Te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge,0,0,tt.width,tt.height,Fe,tt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge,st,tt.width,tt.height,0,tt.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge,0,0,tt.width,tt.height,Fe,Ie,tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge,st,tt.width,tt.height,0,Fe,Ie,tt.data)}}}else{if(Se=w.mipmaps,W&&Re){Se.length>0&&Oe++;const de=me(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,st,de.width,de.height)}for(let de=0;de<6;de++)if(be){W?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ee[de].width,Ee[de].height,Fe,Ie,Ee[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,st,Ee[de].width,Ee[de].height,0,Fe,Ie,Ee[de].data);for(let Ge=0;Ge<Se.length;Ge++){const Et=Se[Ge].image[de].image;W?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge+1,0,0,Et.width,Et.height,Fe,Ie,Et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge+1,st,Et.width,Et.height,0,Fe,Ie,Et.data)}}else{W?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Fe,Ie,Ee[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,st,Fe,Ie,Ee[de]);for(let Ge=0;Ge<Se.length;Ge++){const tt=Se[Ge];W?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge+1,0,0,Fe,Ie,tt.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge+1,st,Fe,Ie,tt.image[de])}}}p(w)&&g(n.TEXTURE_CUBE_MAP),K.__version=te.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function le(P,w,z,J,te,K){const Me=s.convert(z.format,z.colorSpace),ve=s.convert(z.type),He=y(z.internalFormat,Me,ve,z.colorSpace),Le=i.get(w),be=i.get(z);if(be.__renderTarget=w,!Le.__hasExternalTextures){const Ee=Math.max(1,w.width>>K),De=Math.max(1,w.height>>K);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,K,He,Ee,De,w.depth,0,Me,ve,null):t.texImage2D(te,K,He,Ee,De,0,Me,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),xe(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,te,be.__webglTexture,0,N(w)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,te,be.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(P,w,z){if(n.bindRenderbuffer(n.RENDERBUFFER,P),w.depthBuffer){const J=w.depthTexture,te=J&&J.isDepthTexture?J.type:null,K=v(w.stencilBuffer,te),Me=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;xe(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,N(w),K,w.width,w.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,N(w),K,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,K,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,P)}else{const J=w.textures;for(let te=0;te<J.length;te++){const K=J[te],Me=s.convert(K.format,K.colorSpace),ve=s.convert(K.type),He=y(K.internalFormat,Me,ve,K.colorSpace);xe(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,N(w),He,w.width,w.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,N(w),He,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,He,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(P,w,z){const J=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(w.depthTexture);if(te.__renderTarget=w,(!te.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),J){if(te.__webglInit===void 0&&(te.__webglInit=!0,w.depthTexture.addEventListener("dispose",R)),te.__webglTexture===void 0){te.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),ge(n.TEXTURE_CUBE_MAP,w.depthTexture);const Le=s.convert(w.depthTexture.format),be=s.convert(w.depthTexture.type);let Ee;w.depthTexture.format===hs?Ee=n.DEPTH_COMPONENT24:w.depthTexture.format===Mo&&(Ee=n.DEPTH24_STENCIL8);for(let De=0;De<6;De++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ee,w.width,w.height,0,Le,be,null)}}else V(w.depthTexture,0);const K=te.__webglTexture,Me=N(w),ve=J?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,He=w.depthTexture.format===Mo?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===hs)xe(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,He,ve,K,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,He,ve,K,0);else if(w.depthTexture.format===Mo)xe(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,He,ve,K,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,He,ve,K,0);else throw new Error("Unknown depthTexture format")}function ce(P){const w=i.get(P),z=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const J=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){const te=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",te)};J.addEventListener("dispose",te),w.__depthDisposeCallback=te}w.__boundDepthTexture=J}if(P.depthTexture&&!w.__autoAllocateDepthBuffer)if(z)for(let J=0;J<6;J++)Ce(w.__webglFramebuffer[J],P,J);else{const J=P.texture.mipmaps;J&&J.length>0?Ce(w.__webglFramebuffer[0],P,0):Ce(w.__webglFramebuffer,P,0)}else if(z){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=n.createRenderbuffer(),Pe(w.__webglDepthbuffer[J],P,!1);else{const te=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,K)}}else{const J=P.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Pe(w.__webglDepthbuffer,P,!1);else{const te=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,K)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function E(P,w,z){const J=i.get(P);w!==void 0&&le(J.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&ce(P)}function C(P){const w=P.texture,z=i.get(P),J=i.get(w);P.addEventListener("dispose",M);const te=P.textures,K=P.isWebGLCubeRenderTarget===!0,Me=te.length>1;if(Me||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=w.version,o.memory.textures++),K){z.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[ve]=[];for(let He=0;He<w.mipmaps.length;He++)z.__webglFramebuffer[ve][He]=n.createFramebuffer()}else z.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let ve=0;ve<w.mipmaps.length;ve++)z.__webglFramebuffer[ve]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ve=0,He=te.length;ve<He;ve++){const Le=i.get(te[ve]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&xe(P)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ve=0;ve<te.length;ve++){const He=te[ve];z.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ve]);const Le=s.convert(He.format,He.colorSpace),be=s.convert(He.type),Ee=y(He.internalFormat,Le,be,He.colorSpace,P.isXRRenderTarget===!0),De=N(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Ee,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,z.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),ge(n.TEXTURE_CUBE_MAP,w);for(let ve=0;ve<6;ve++)if(w.mipmaps&&w.mipmaps.length>0)for(let He=0;He<w.mipmaps.length;He++)le(z.__webglFramebuffer[ve][He],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He);else le(z.__webglFramebuffer[ve],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);p(w)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ve=0,He=te.length;ve<He;ve++){const Le=te[ve],be=i.get(Le);let Ee=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ee=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ee,be.__webglTexture),ge(Ee,Le),le(z.__webglFramebuffer,P,Le,n.COLOR_ATTACHMENT0+ve,Ee,0),p(Le)&&g(Ee)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ve=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,J.__webglTexture),ge(ve,w),w.mipmaps&&w.mipmaps.length>0)for(let He=0;He<w.mipmaps.length;He++)le(z.__webglFramebuffer[He],P,w,n.COLOR_ATTACHMENT0,ve,He);else le(z.__webglFramebuffer,P,w,n.COLOR_ATTACHMENT0,ve,0);p(w)&&g(ve),t.unbindTexture()}P.depthBuffer&&ce(P)}function H(P){const w=P.textures;for(let z=0,J=w.length;z<J;z++){const te=w[z];if(p(te)){const K=b(P),Me=i.get(te).__webglTexture;t.bindTexture(K,Me),g(K),t.unbindTexture()}}}const ne=[],q=[];function O(P){if(P.samples>0){if(xe(P)===!1){const w=P.textures,z=P.width,J=P.height;let te=n.COLOR_BUFFER_BIT;const K=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(P),ve=w.length>1;if(ve)for(let Le=0;Le<w.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const He=P.texture.mipmaps;He&&He.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Le=0;Le<w.length;Le++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),ve){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Le]);const be=i.get(w[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,be,0)}n.blitFramebuffer(0,0,z,J,0,0,z,J,te,n.NEAREST),l===!0&&(ne.length=0,q.length=0,ne.push(n.COLOR_ATTACHMENT0+Le),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ne.push(K),q.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let Le=0;Le<w.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Le]);const be=i.get(w[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const w=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function N(P){return Math.min(r.maxSamples,P.samples)}function xe(P){const w=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function he(P){const w=o.render.frame;u.get(P)!==w&&(u.set(P,w),P.update())}function re(P,w){const z=P.colorSpace,J=P.format,te=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==$a&&z!==Ps&&(Mt.getTransfer(z)===Ut?(J!==sr||te!==$i)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",z)),w}function me(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=L,this.setTexture2D=V,this.setTexture2DArray=$,this.setTexture3D=k,this.setTextureCube=Z,this.rebindTextures=E,this.setupRenderTarget=C,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=le,this.useMultisampledRTT=xe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function kC(n,e){function t(i,r=Ps){let s;const o=Mt.getTransfer(r);if(i===$i)return n.UNSIGNED_BYTE;if(i===n0)return n.UNSIGNED_SHORT_4_4_4_4;if(i===i0)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Iv)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Nv)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Dv)return n.BYTE;if(i===Lv)return n.SHORT;if(i===oc)return n.UNSIGNED_SHORT;if(i===t0)return n.INT;if(i===Nr)return n.UNSIGNED_INT;if(i===wr)return n.FLOAT;if(i===fs)return n.HALF_FLOAT;if(i===Uv)return n.ALPHA;if(i===Fv)return n.RGB;if(i===sr)return n.RGBA;if(i===hs)return n.DEPTH_COMPONENT;if(i===Mo)return n.DEPTH_STENCIL;if(i===Ov)return n.RED;if(i===r0)return n.RED_INTEGER;if(i===Wa)return n.RG;if(i===s0)return n.RG_INTEGER;if(i===o0)return n.RGBA_INTEGER;if(i===wu||i===Mu||i===Eu||i===Tu)if(o===Ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===wu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Mu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Eu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Tu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===wu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Mu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Eu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Tu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dh||i===Lh||i===Ih||i===Nh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Dh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ih)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Uh||i===Fh||i===Oh||i===kh||i===Bh||i===zh||i===Vh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Uh||i===Fh)return o===Ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Oh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===kh)return s.COMPRESSED_R11_EAC;if(i===Bh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===zh)return s.COMPRESSED_RG11_EAC;if(i===Vh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Hh||i===Gh||i===Wh||i===$h||i===Xh||i===jh||i===Yh||i===qh||i===Kh||i===Zh||i===Jh||i===Qh||i===ep||i===tp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Hh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$h)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Kh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qh)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ep)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===tp)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===np||i===ip||i===rp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===np)return o===Ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ip)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sp||i===op||i===ap||i===lp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===sp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===op)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ap)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ac?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const BC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zC=`
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

}`;class VC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new jv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new lr({vertexShader:BC,fragmentShader:zC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ur(new vc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HC extends ja{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,m=null;const x=typeof XRWebGLBinding<"u",p=new VC,g={},b=t.getContextAttributes();let y=null,v=null;const A=[],R=[],M=new wt;let S=null;const T=new ir;T.viewport=new an;const U=new ir;U.viewport=new an;const I=[T,U],L=new eE;let G=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=A[ee];return fe===void 0&&(fe=new ff,A[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=A[ee];return fe===void 0&&(fe=new ff,A[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=A[ee];return fe===void 0&&(fe=new ff,A[ee]=fe),fe.getHandSpace()};function V(ee){const fe=R.indexOf(ee.inputSource);if(fe===-1)return;const le=A[fe];le!==void 0&&(le.update(ee.inputSource,ee.frame,c||o),le.dispatchEvent({type:ee.type,data:ee.inputSource}))}function $(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",k);for(let ee=0;ee<A.length;ee++){const fe=R[ee];fe!==null&&(R[ee]=null,A[ee].disconnect(fe))}G=null,B=null,p.reset();for(const ee in g)delete g[ee];e.setRenderTarget(y),h=null,f=null,d=null,r=null,v=null,Ae.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",$),r.addEventListener("inputsourceschange",k),b.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(M),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Pe=null,Ce=null;b.depth&&(Ce=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=b.stencil?Mo:hs,Pe=b.stencil?ac:Nr);const ce={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(ce),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Rr(f.textureWidth,f.textureHeight,{format:sr,type:$i,depthTexture:new lc(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const le={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new Rr(h.framebufferWidth,h.framebufferHeight,{format:sr,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ae.setContext(r),Ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function k(ee){for(let fe=0;fe<ee.removed.length;fe++){const le=ee.removed[fe],Pe=R.indexOf(le);Pe>=0&&(R[Pe]=null,A[Pe].disconnect(le))}for(let fe=0;fe<ee.added.length;fe++){const le=ee.added[fe];let Pe=R.indexOf(le);if(Pe===-1){for(let ce=0;ce<A.length;ce++)if(ce>=R.length){R.push(le),Pe=ce;break}else if(R[ce]===null){R[ce]=le,Pe=ce;break}if(Pe===-1)break}const Ce=A[Pe];Ce&&Ce.connect(le)}}const Z=new ae,j=new ae;function F(ee,fe,le){Z.setFromMatrixPosition(fe.matrixWorld),j.setFromMatrixPosition(le.matrixWorld);const Pe=Z.distanceTo(j),Ce=fe.projectionMatrix.elements,ce=le.projectionMatrix.elements,E=Ce[14]/(Ce[10]-1),C=Ce[14]/(Ce[10]+1),H=(Ce[9]+1)/Ce[5],ne=(Ce[9]-1)/Ce[5],q=(Ce[8]-1)/Ce[0],O=(ce[8]+1)/ce[0],N=E*q,xe=E*O,he=Pe/(-q+O),re=he*-q;if(fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(re),ee.translateZ(he),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ce[10]===-1)ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const me=E+he,P=C+he,w=N-re,z=xe+(Pe-re),J=H*C/P*me,te=ne*C/P*me;ee.projectionMatrix.makePerspective(w,z,J,te,me,P),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ue(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let fe=ee.near,le=ee.far;p.texture!==null&&(p.depthNear>0&&(fe=p.depthNear),p.depthFar>0&&(le=p.depthFar)),L.near=U.near=T.near=fe,L.far=U.far=T.far=le,(G!==L.near||B!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),G=L.near,B=L.far),L.layers.mask=ee.layers.mask|6,T.layers.mask=L.layers.mask&-5,U.layers.mask=L.layers.mask&-3;const Pe=ee.parent,Ce=L.cameras;ue(L,Pe);for(let ce=0;ce<Ce.length;ce++)ue(Ce[ce],Pe);Ce.length===2?F(L,T,U):L.projectionMatrix.copy(T.projectionMatrix),ge(ee,L,Pe)};function ge(ee,fe,le){le===null?ee.matrix.copy(fe.matrixWorld):(ee.matrix.copy(le.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(fe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=cp*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(ee){l=ee,f!==null&&(f.fixedFoveation=ee),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ee)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(ee){return g[ee]};let _e=null;function ye(ee,fe){if(u=fe.getViewerPose(c||o),m=fe,u!==null){const le=u.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let Pe=!1;le.length!==L.cameras.length&&(L.cameras.length=0,Pe=!0);for(let C=0;C<le.length;C++){const H=le[C];let ne=null;if(h!==null)ne=h.getViewport(H);else{const O=d.getViewSubImage(f,H);ne=O.viewport,C===0&&(e.setRenderTargetTextures(v,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(v))}let q=I[C];q===void 0&&(q=new ir,q.layers.enable(C),q.viewport=new an,I[C]=q),q.matrix.fromArray(H.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(H.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(ne.x,ne.y,ne.width,ne.height),C===0&&(L.matrix.copy(q.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Pe===!0&&L.cameras.push(q)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){d=i.getBinding();const C=d.getDepthInformation(le[0]);C&&C.isValid&&C.texture&&p.init(C,r.renderState)}if(Ce&&Ce.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let C=0;C<le.length;C++){const H=le[C].camera;if(H){let ne=g[H];ne||(ne=new jv,g[H]=ne);const q=d.getCameraImage(H);ne.sourceTexture=q}}}}for(let le=0;le<A.length;le++){const Pe=R[le],Ce=A[le];Pe!==null&&Ce!==void 0&&Ce.update(Pe,fe,c||o)}_e&&_e(ee,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),m=null}const Ae=new Kv;Ae.setAnimationLoop(ye),this.setAnimationLoop=function(ee){_e=ee},this.dispose=function(){}}}const co=new ps,GC=new fn;function WC(n,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,Yv(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function r(p,g,b,y,v){g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),d(p,g)):g.isMeshPhongMaterial?(s(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),f(p,g),g.isMeshPhysicalMaterial&&h(p,g,v)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),x(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,b,y):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===xi&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===xi&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const b=e.get(g),y=b.envMap,v=b.envMapRotation;y&&(p.envMap.value=y,co.copy(v),co.x*=-1,co.y*=-1,co.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(co.y*=-1,co.z*=-1),p.envMapRotation.value.setFromMatrix4(GC.makeRotationFromEuler(co)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,b,y){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*b,p.scale.value=y*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function h(p,g,b){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===xi&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){const b=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function $C(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){const v=y.program;i.uniformBlockBinding(b,v)}function c(b,y){let v=r[b.id];v===void 0&&(m(b),v=u(b),r[b.id]=v,b.addEventListener("dispose",p));const A=y.program;i.updateUBOMapping(b,A);const R=e.render.frame;s[b.id]!==R&&(f(b),s[b.id]=R)}function u(b){const y=d();b.__bindingPointIndex=y;const v=n.createBuffer(),A=b.__size,R=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,A,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const y=r[b.id],v=b.uniforms,A=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let R=0,M=v.length;R<M;R++){const S=Array.isArray(v[R])?v[R]:[v[R]];for(let T=0,U=S.length;T<U;T++){const I=S[T];if(h(I,R,T,A)===!0){const L=I.__offset,G=Array.isArray(I.value)?I.value:[I.value];let B=0;for(let V=0;V<G.length;V++){const $=G[V],k=x($);typeof $=="number"||typeof $=="boolean"?(I.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,L+B,I.__data)):$.isMatrix3?(I.__data[0]=$.elements[0],I.__data[1]=$.elements[1],I.__data[2]=$.elements[2],I.__data[3]=0,I.__data[4]=$.elements[3],I.__data[5]=$.elements[4],I.__data[6]=$.elements[5],I.__data[7]=0,I.__data[8]=$.elements[6],I.__data[9]=$.elements[7],I.__data[10]=$.elements[8],I.__data[11]=0):($.toArray(I.__data,B),B+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(b,y,v,A){const R=b.value,M=y+"_"+v;if(A[M]===void 0)return typeof R=="number"||typeof R=="boolean"?A[M]=R:A[M]=R.clone(),!0;{const S=A[M];if(typeof R=="number"||typeof R=="boolean"){if(S!==R)return A[M]=R,!0}else if(S.equals(R)===!1)return S.copy(R),!0}return!1}function m(b){const y=b.uniforms;let v=0;const A=16;for(let M=0,S=y.length;M<S;M++){const T=Array.isArray(y[M])?y[M]:[y[M]];for(let U=0,I=T.length;U<I;U++){const L=T[U],G=Array.isArray(L.value)?L.value:[L.value];for(let B=0,V=G.length;B<V;B++){const $=G[B],k=x($),Z=v%A,j=Z%k.boundary,F=Z+j;v+=j,F!==0&&A-F<k.storage&&(v+=A-F),L.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=k.storage}}}const R=v%A;return R>0&&(v+=A-R),b.__size=v,b.__cache={},this}function x(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ut("WebGLRenderer: Unsupported uniform value type.",b),y}function p(b){const y=b.target;y.removeEventListener("dispose",p);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function g(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:g}}const XC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fr=null;function jC(){return fr===null&&(fr=new V2(XC,16,16,Wa,fs),fr.name="DFG_LUT",fr.minFilter=Xn,fr.magFilter=Xn,fr.wrapS=es,fr.wrapT=es,fr.generateMipmaps=!1,fr.needsUpdate=!0),fr}class YC{constructor(e={}){const{canvas:t=_2(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=$i}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const x=h,p=new Set([o0,s0,r0]),g=new Set([$i,Nr,oc,ac,n0,i0]),b=new Uint32Array(4),y=new Int32Array(4);let v=null,A=null;const R=[],M=[];let S=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let U=!1;this._outputColorSpace=Hi;let I=0,L=0,G=null,B=-1,V=null;const $=new an,k=new an;let Z=null;const j=new kt(0);let F=0,ue=t.width,ge=t.height,_e=1,ye=null,Ae=null;const ee=new an(0,0,ue,ge),fe=new an(0,0,ue,ge);let le=!1;const Pe=new $v;let Ce=!1,ce=!1;const E=new fn,C=new ae,H=new an,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let q=!1;function O(){return G===null?_e:1}let N=i;function xe(D,X){return t.getContext(D,X)}try{const D={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${e0}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",Et,!1),N===null){const X="webgl2";if(N=xe(X,D),N===null)throw xe(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw At("WebGLRenderer: "+D.message),D}let he,re,me,P,w,z,J,te,K,Me,ve,He,Le,be,Ee,De,Fe,Ie,st,W,Re,Te,Oe;function Se(){he=new Y3(N),he.init(),Re=new kC(N,he),re=new z3(N,he,e,Re),me=new FC(N,he),re.reversedDepthBuffer&&f&&me.buffers.depth.setReversed(!0),P=new Z3(N),w=new SC,z=new OC(N,he,me,w,re,Re,P),J=new j3(T),te=new nE(N),Te=new k3(N,te),K=new q3(N,te,P,Te),Me=new Q3(N,K,te,Te,P),Ie=new J3(N,re,z),Ee=new V3(w),ve=new bC(T,J,he,re,Te,Ee),He=new WC(T,w),Le=new MC,be=new PC(he),Fe=new O3(T,J,me,Me,m,l),De=new UC(T,Me,re),Oe=new $C(N,P,re,me),st=new B3(N,he,P),W=new K3(N,he,P),P.programs=ve.programs,T.capabilities=re,T.extensions=he,T.properties=w,T.renderLists=Le,T.shadowMap=De,T.state=me,T.info=P}Se(),x!==$i&&(S=new tA(x,t.width,t.height,r,s));const de=new HC(T,N);this.xr=de,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const D=he.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=he.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(D){D!==void 0&&(_e=D,this.setSize(ue,ge,!1))},this.getSize=function(D){return D.set(ue,ge)},this.setSize=function(D,X,oe=!0){if(de.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=D,ge=X,t.width=Math.floor(D*_e),t.height=Math.floor(X*_e),oe===!0&&(t.style.width=D+"px",t.style.height=X+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,D,X)},this.getDrawingBufferSize=function(D){return D.set(ue*_e,ge*_e).floor()},this.setDrawingBufferSize=function(D,X,oe){ue=D,ge=X,_e=oe,t.width=Math.floor(D*oe),t.height=Math.floor(X*oe),this.setViewport(0,0,D,X)},this.setEffects=function(D){if(x===$i){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let X=0;X<D.length;X++)if(D[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy($)},this.getViewport=function(D){return D.copy(ee)},this.setViewport=function(D,X,oe,se){D.isVector4?ee.set(D.x,D.y,D.z,D.w):ee.set(D,X,oe,se),me.viewport($.copy(ee).multiplyScalar(_e).round())},this.getScissor=function(D){return D.copy(fe)},this.setScissor=function(D,X,oe,se){D.isVector4?fe.set(D.x,D.y,D.z,D.w):fe.set(D,X,oe,se),me.scissor(k.copy(fe).multiplyScalar(_e).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(D){me.setScissorTest(le=D)},this.setOpaqueSort=function(D){ye=D},this.setTransparentSort=function(D){Ae=D},this.getClearColor=function(D){return D.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(D=!0,X=!0,oe=!0){let se=0;if(D){let ie=!1;if(G!==null){const Ne=G.texture.format;ie=p.has(Ne)}if(ie){const Ne=G.texture.type,ke=g.has(Ne),Ue=Fe.getClearColor(),Ye=Fe.getClearAlpha(),je=Ue.r,ht=Ue.g,_t=Ue.b;ke?(b[0]=je,b[1]=ht,b[2]=_t,b[3]=Ye,N.clearBufferuiv(N.COLOR,0,b)):(y[0]=je,y[1]=ht,y[2]=_t,y[3]=Ye,N.clearBufferiv(N.COLOR,0,y))}else se|=N.COLOR_BUFFER_BIT}X&&(se|=N.DEPTH_BUFFER_BIT),oe&&(se|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&N.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Et,!1),Fe.dispose(),Le.dispose(),be.dispose(),w.dispose(),J.dispose(),Me.dispose(),Te.dispose(),Oe.dispose(),ve.dispose(),de.dispose(),de.removeEventListener("sessionstart",lt),de.removeEventListener("sessionend",rn),dt.stop()};function Ge(D){D.preventDefault(),$m("WebGLRenderer: Context Lost."),U=!0}function tt(){$m("WebGLRenderer: Context Restored."),U=!1;const D=P.autoReset,X=De.enabled,oe=De.autoUpdate,se=De.needsUpdate,ie=De.type;Se(),P.autoReset=D,De.enabled=X,De.autoUpdate=oe,De.needsUpdate=se,De.type=ie}function Et(D){At("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Ve(D){const X=D.target;X.removeEventListener("dispose",Ve),Ze(X)}function Ze(D){pt(D),w.remove(D)}function pt(D){const X=w.get(D).programs;X!==void 0&&(X.forEach(function(oe){ve.releaseProgram(oe)}),D.isShaderMaterial&&ve.releaseShaderCache(D))}this.renderBufferDirect=function(D,X,oe,se,ie,Ne){X===null&&(X=ne);const ke=ie.isMesh&&ie.matrixWorld.determinant()<0,Ue=Oi(D,X,oe,se,ie);me.setMaterial(se,ke);let Ye=oe.index,je=1;if(se.wireframe===!0){if(Ye=K.getWireframeAttribute(oe),Ye===void 0)return;je=2}const ht=oe.drawRange,_t=oe.attributes.position;let Qe=ht.start*je,Ft=(ht.start+ht.count)*je;Ne!==null&&(Qe=Math.max(Qe,Ne.start*je),Ft=Math.min(Ft,(Ne.start+Ne.count)*je)),Ye!==null?(Qe=Math.max(Qe,0),Ft=Math.min(Ft,Ye.count)):_t!=null&&(Qe=Math.max(Qe,0),Ft=Math.min(Ft,_t.count));const sn=Ft-Qe;if(sn<0||sn===1/0)return;Te.setup(ie,se,Ue,oe,Ye);let tn,Ot=st;if(Ye!==null&&(tn=te.get(Ye),Ot=W,Ot.setIndex(tn)),ie.isMesh)se.wireframe===!0?(me.setLineWidth(se.wireframeLinewidth*O()),Ot.setMode(N.LINES)):Ot.setMode(N.TRIANGLES);else if(ie.isLine){let Fn=se.linewidth;Fn===void 0&&(Fn=1),me.setLineWidth(Fn*O()),ie.isLineSegments?Ot.setMode(N.LINES):ie.isLineLoop?Ot.setMode(N.LINE_LOOP):Ot.setMode(N.LINE_STRIP)}else ie.isPoints?Ot.setMode(N.POINTS):ie.isSprite&&Ot.setMode(N.TRIANGLES);if(ie.isBatchedMesh)if(ie._multiDrawInstances!==null)nd("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ot.renderMultiDrawInstances(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount,ie._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))Ot.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const Fn=ie._multiDrawStarts,Je=ie._multiDrawCounts,yi=ie._multiDrawCount,Tt=Ye?te.get(Ye).bytesPerElement:1,Ji=w.get(se).currentProgram.getUniforms();for(let cr=0;cr<yi;cr++)Ji.setValue(N,"_gl_DrawID",cr),Ot.render(Fn[cr]/Tt,Je[cr])}else if(ie.isInstancedMesh)Ot.renderInstances(Qe,sn,ie.count);else if(oe.isInstancedBufferGeometry){const Fn=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Je=Math.min(oe.instanceCount,Fn);Ot.renderInstances(Qe,sn,Je)}else Ot.render(Qe,sn)};function Be(D,X,oe){D.transparent===!0&&D.side===Jr&&D.forceSinglePass===!1?(D.side=xi,D.needsUpdate=!0,Nn(D,X,oe),D.side=js,D.needsUpdate=!0,Nn(D,X,oe),D.side=Jr):Nn(D,X,oe)}this.compile=function(D,X,oe=null){oe===null&&(oe=D),A=be.get(oe),A.init(X),M.push(A),oe.traverseVisible(function(ie){ie.isLight&&ie.layers.test(X.layers)&&(A.pushLight(ie),ie.castShadow&&A.pushShadow(ie))}),D!==oe&&D.traverseVisible(function(ie){ie.isLight&&ie.layers.test(X.layers)&&(A.pushLight(ie),ie.castShadow&&A.pushShadow(ie))}),A.setupLights();const se=new Set;return D.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Ne=ie.material;if(Ne)if(Array.isArray(Ne))for(let ke=0;ke<Ne.length;ke++){const Ue=Ne[ke];Be(Ue,oe,ie),se.add(Ue)}else Be(Ne,oe,ie),se.add(Ne)}),A=M.pop(),se},this.compileAsync=function(D,X,oe=null){const se=this.compile(D,X,oe);return new Promise(ie=>{function Ne(){if(se.forEach(function(ke){w.get(ke).currentProgram.isReady()&&se.delete(ke)}),se.size===0){ie(D);return}setTimeout(Ne,10)}he.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let at=null;function nt(D){at&&at(D)}function lt(){dt.stop()}function rn(){dt.start()}const dt=new Kv;dt.setAnimationLoop(nt),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(D){at=D,de.setAnimationLoop(D),D===null?dt.stop():dt.start()},de.addEventListener("sessionstart",lt),de.addEventListener("sessionend",rn),this.render=function(D,X){if(X!==void 0&&X.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const oe=de.enabled===!0&&de.isPresenting===!0,se=S!==null&&(G===null||oe)&&S.begin(T,G);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(X),X=de.getCamera()),D.isScene===!0&&D.onBeforeRender(T,D,X,G),A=be.get(D,M.length),A.init(X),M.push(A),E.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Pe.setFromProjectionMatrix(E,Mr,X.reversedDepth),ce=this.localClippingEnabled,Ce=Ee.init(this.clippingPlanes,ce),v=Le.get(D,R.length),v.init(),R.push(v),de.enabled===!0&&de.isPresenting===!0){const ke=T.xr.getDepthSensingMesh();ke!==null&&jt(ke,X,-1/0,T.sortObjects)}jt(D,X,0,T.sortObjects),v.finish(),T.sortObjects===!0&&v.sort(ye,Ae),q=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,q&&Fe.addToRenderList(v,D),this.info.render.frame++,Ce===!0&&Ee.beginShadows();const ie=A.state.shadowsArray;if(De.render(ie,D,X),Ce===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&S.hasRenderPass())===!1){const ke=v.opaque,Ue=v.transmissive;if(A.setupLights(),X.isArrayCamera){const Ye=X.cameras;if(Ue.length>0)for(let je=0,ht=Ye.length;je<ht;je++){const _t=Ye[je];Yt(ke,Ue,D,_t)}q&&Fe.render(D);for(let je=0,ht=Ye.length;je<ht;je++){const _t=Ye[je];hn(v,D,_t,_t.viewport)}}else Ue.length>0&&Yt(ke,Ue,D,X),q&&Fe.render(D),hn(v,D,X)}G!==null&&L===0&&(z.updateMultisampleRenderTarget(G),z.updateRenderTargetMipmap(G)),se&&S.end(T),D.isScene===!0&&D.onAfterRender(T,D,X),Te.resetDefaultState(),B=-1,V=null,M.pop(),M.length>0?(A=M[M.length-1],Ce===!0&&Ee.setGlobalState(T.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?v=R[R.length-1]:v=null};function jt(D,X,oe,se){if(D.visible===!1)return;if(D.layers.test(X.layers)){if(D.isGroup)oe=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(X);else if(D.isLight)A.pushLight(D),D.castShadow&&A.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Pe.intersectsSprite(D)){se&&H.setFromMatrixPosition(D.matrixWorld).applyMatrix4(E);const ke=Me.update(D),Ue=D.material;Ue.visible&&v.push(D,ke,Ue,oe,H.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Pe.intersectsObject(D))){const ke=Me.update(D),Ue=D.material;if(se&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),H.copy(D.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),H.copy(ke.boundingSphere.center)),H.applyMatrix4(D.matrixWorld).applyMatrix4(E)),Array.isArray(Ue)){const Ye=ke.groups;for(let je=0,ht=Ye.length;je<ht;je++){const _t=Ye[je],Qe=Ue[_t.materialIndex];Qe&&Qe.visible&&v.push(D,ke,Qe,oe,H.z,_t)}}else Ue.visible&&v.push(D,ke,Ue,oe,H.z,null)}}const Ne=D.children;for(let ke=0,Ue=Ne.length;ke<Ue;ke++)jt(Ne[ke],X,oe,se)}function hn(D,X,oe,se){const{opaque:ie,transmissive:Ne,transparent:ke}=D;A.setupLightsView(oe),Ce===!0&&Ee.setGlobalState(T.clippingPlanes,oe),se&&me.viewport($.copy(se)),ie.length>0&&It(ie,X,oe),Ne.length>0&&It(Ne,X,oe),ke.length>0&&It(ke,X,oe),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Yt(D,X,oe,se){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[se.id]===void 0){const Qe=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[se.id]=new Rr(1,1,{generateMipmaps:!0,type:Qe?fs:$i,minFilter:wo,samples:Math.max(4,re.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const Ne=A.state.transmissionRenderTarget[se.id],ke=se.viewport||$;Ne.setSize(ke.z*T.transmissionResolutionScale,ke.w*T.transmissionResolutionScale);const Ue=T.getRenderTarget(),Ye=T.getActiveCubeFace(),je=T.getActiveMipmapLevel();T.setRenderTarget(Ne),T.getClearColor(j),F=T.getClearAlpha(),F<1&&T.setClearColor(16777215,.5),T.clear(),q&&Fe.render(oe);const ht=T.toneMapping;T.toneMapping=Cr;const _t=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),A.setupLightsView(se),Ce===!0&&Ee.setGlobalState(T.clippingPlanes,se),It(D,oe,se),z.updateMultisampleRenderTarget(Ne),z.updateRenderTargetMipmap(Ne),he.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Ft=0,sn=X.length;Ft<sn;Ft++){const tn=X[Ft],{object:Ot,geometry:Fn,material:Je,group:yi}=tn;if(Je.side===Jr&&Ot.layers.test(se.layers)){const Tt=Je.side;Je.side=xi,Je.needsUpdate=!0,Rt(Ot,oe,se,Fn,Je,yi),Je.side=Tt,Je.needsUpdate=!0,Qe=!0}}Qe===!0&&(z.updateMultisampleRenderTarget(Ne),z.updateRenderTargetMipmap(Ne))}T.setRenderTarget(Ue,Ye,je),T.setClearColor(j,F),_t!==void 0&&(se.viewport=_t),T.toneMapping=ht}function It(D,X,oe){const se=X.isScene===!0?X.overrideMaterial:null;for(let ie=0,Ne=D.length;ie<Ne;ie++){const ke=D[ie],{object:Ue,geometry:Ye,group:je}=ke;let ht=ke.material;ht.allowOverride===!0&&se!==null&&(ht=se),Ue.layers.test(oe.layers)&&Rt(Ue,X,oe,Ye,ht,je)}}function Rt(D,X,oe,se,ie,Ne){D.onBeforeRender(T,X,oe,se,ie,Ne),D.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ie.onBeforeRender(T,X,oe,se,D,Ne),ie.transparent===!0&&ie.side===Jr&&ie.forceSinglePass===!1?(ie.side=xi,ie.needsUpdate=!0,T.renderBufferDirect(oe,X,se,ie,D,Ne),ie.side=js,ie.needsUpdate=!0,T.renderBufferDirect(oe,X,se,ie,D,Ne),ie.side=Jr):T.renderBufferDirect(oe,X,se,ie,D,Ne),D.onAfterRender(T,X,oe,se,ie,Ne)}function Nn(D,X,oe){X.isScene!==!0&&(X=ne);const se=w.get(D),ie=A.state.lights,Ne=A.state.shadowsArray,ke=ie.state.version,Ue=ve.getParameters(D,ie.state,Ne,X,oe),Ye=ve.getProgramCacheKey(Ue);let je=se.programs;se.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?X.environment:null,se.fog=X.fog;const ht=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;se.envMap=J.get(D.envMap||se.environment,ht),se.envMapRotation=se.environment!==null&&D.envMap===null?X.environmentRotation:D.envMapRotation,je===void 0&&(D.addEventListener("dispose",Ve),je=new Map,se.programs=je);let _t=je.get(Ye);if(_t!==void 0){if(se.currentProgram===_t&&se.lightsStateVersion===ke)return Un(D,Ue),_t}else Ue.uniforms=ve.getUniforms(D),D.onBeforeCompile(Ue,T),_t=ve.acquireProgram(Ue,Ye),je.set(Ye,_t),se.uniforms=Ue.uniforms;const Qe=se.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Qe.clippingPlanes=Ee.uniform),Un(D,Ue),se.needsLights=mn(D),se.lightsStateVersion=ke,se.needsLights&&(Qe.ambientLightColor.value=ie.state.ambient,Qe.lightProbe.value=ie.state.probe,Qe.directionalLights.value=ie.state.directional,Qe.directionalLightShadows.value=ie.state.directionalShadow,Qe.spotLights.value=ie.state.spot,Qe.spotLightShadows.value=ie.state.spotShadow,Qe.rectAreaLights.value=ie.state.rectArea,Qe.ltc_1.value=ie.state.rectAreaLTC1,Qe.ltc_2.value=ie.state.rectAreaLTC2,Qe.pointLights.value=ie.state.point,Qe.pointLightShadows.value=ie.state.pointShadow,Qe.hemisphereLights.value=ie.state.hemi,Qe.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Qe.spotLightMatrix.value=ie.state.spotLightMatrix,Qe.spotLightMap.value=ie.state.spotLightMap,Qe.pointShadowMatrix.value=ie.state.pointShadowMatrix),se.currentProgram=_t,se.uniformsList=null,_t}function Wt(D){if(D.uniformsList===null){const X=D.currentProgram.getUniforms();D.uniformsList=Au.seqWithValue(X.seq,D.uniforms)}return D.uniformsList}function Un(D,X){const oe=w.get(D);oe.outputColorSpace=X.outputColorSpace,oe.batching=X.batching,oe.batchingColor=X.batchingColor,oe.instancing=X.instancing,oe.instancingColor=X.instancingColor,oe.instancingMorph=X.instancingMorph,oe.skinning=X.skinning,oe.morphTargets=X.morphTargets,oe.morphNormals=X.morphNormals,oe.morphColors=X.morphColors,oe.morphTargetsCount=X.morphTargetsCount,oe.numClippingPlanes=X.numClippingPlanes,oe.numIntersection=X.numClipIntersection,oe.vertexAlphas=X.vertexAlphas,oe.vertexTangents=X.vertexTangents,oe.toneMapping=X.toneMapping}function Oi(D,X,oe,se,ie){X.isScene!==!0&&(X=ne),z.resetTextureUnits();const Ne=X.fog,ke=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?X.environment:null,Ue=G===null?T.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:$a,Ye=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,je=J.get(se.envMap||ke,Ye),ht=se.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,_t=!!oe.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Qe=!!oe.morphAttributes.position,Ft=!!oe.morphAttributes.normal,sn=!!oe.morphAttributes.color;let tn=Cr;se.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(tn=T.toneMapping);const Ot=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Fn=Ot!==void 0?Ot.length:0,Je=w.get(se),yi=A.state.lights;if(Ce===!0&&(ce===!0||D!==V)){const Sn=D===V&&se.id===B;Ee.setState(se,D,Sn)}let Tt=!1;se.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==yi.state.version||Je.outputColorSpace!==Ue||ie.isBatchedMesh&&Je.batching===!1||!ie.isBatchedMesh&&Je.batching===!0||ie.isBatchedMesh&&Je.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&Je.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&Je.instancing===!1||!ie.isInstancedMesh&&Je.instancing===!0||ie.isSkinnedMesh&&Je.skinning===!1||!ie.isSkinnedMesh&&Je.skinning===!0||ie.isInstancedMesh&&Je.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Je.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Je.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Je.instancingMorph===!1&&ie.morphTexture!==null||Je.envMap!==je||se.fog===!0&&Je.fog!==Ne||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Ee.numPlanes||Je.numIntersection!==Ee.numIntersection)||Je.vertexAlphas!==ht||Je.vertexTangents!==_t||Je.morphTargets!==Qe||Je.morphNormals!==Ft||Je.morphColors!==sn||Je.toneMapping!==tn||Je.morphTargetsCount!==Fn)&&(Tt=!0):(Tt=!0,Je.__version=se.version);let Ji=Je.currentProgram;Tt===!0&&(Ji=Nn(se,X,ie));let cr=!1,Zs=!1,Ho=!1;const Bt=Ji.getUniforms(),Rn=Je.uniforms;if(me.useProgram(Ji.program)&&(cr=!0,Zs=!0,Ho=!0),se.id!==B&&(B=se.id,Zs=!0),cr||V!==D){me.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Bt.setValue(N,"projectionMatrix",D.projectionMatrix),Bt.setValue(N,"viewMatrix",D.matrixWorldInverse);const xs=Bt.map.cameraPosition;xs!==void 0&&xs.setValue(N,C.setFromMatrixPosition(D.matrixWorld)),re.logarithmicDepthBuffer&&Bt.setValue(N,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Bt.setValue(N,"isOrthographic",D.isOrthographicCamera===!0),V!==D&&(V=D,Zs=!0,Ho=!0)}if(Je.needsLights&&(yi.state.directionalShadowMap.length>0&&Bt.setValue(N,"directionalShadowMap",yi.state.directionalShadowMap,z),yi.state.spotShadowMap.length>0&&Bt.setValue(N,"spotShadowMap",yi.state.spotShadowMap,z),yi.state.pointShadowMap.length>0&&Bt.setValue(N,"pointShadowMap",yi.state.pointShadowMap,z)),ie.isSkinnedMesh){Bt.setOptional(N,ie,"bindMatrix"),Bt.setOptional(N,ie,"bindMatrixInverse");const Sn=ie.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Bt.setValue(N,"boneTexture",Sn.boneTexture,z))}ie.isBatchedMesh&&(Bt.setOptional(N,ie,"batchingTexture"),Bt.setValue(N,"batchingTexture",ie._matricesTexture,z),Bt.setOptional(N,ie,"batchingIdTexture"),Bt.setValue(N,"batchingIdTexture",ie._indirectTexture,z),Bt.setOptional(N,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Bt.setValue(N,"batchingColorTexture",ie._colorsTexture,z));const _s=oe.morphAttributes;if((_s.position!==void 0||_s.normal!==void 0||_s.color!==void 0)&&Ie.update(ie,oe,Ji),(Zs||Je.receiveShadow!==ie.receiveShadow)&&(Je.receiveShadow=ie.receiveShadow,Bt.setValue(N,"receiveShadow",ie.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&X.environment!==null&&(Rn.envMapIntensity.value=X.environmentIntensity),Rn.dfgLUT!==void 0&&(Rn.dfgLUT.value=jC()),Zs&&(Bt.setValue(N,"toneMappingExposure",T.toneMappingExposure),Je.needsLights&&pn(Rn,Ho),Ne&&se.fog===!0&&He.refreshFogUniforms(Rn,Ne),He.refreshMaterialUniforms(Rn,se,_e,ge,A.state.transmissionRenderTarget[D.id]),Au.upload(N,Wt(Je),Rn,z)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Au.upload(N,Wt(Je),Rn,z),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Bt.setValue(N,"center",ie.center),Bt.setValue(N,"modelViewMatrix",ie.modelViewMatrix),Bt.setValue(N,"normalMatrix",ie.normalMatrix),Bt.setValue(N,"modelMatrix",ie.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Sn=se.uniformsGroups;for(let xs=0,Go=Sn.length;xs<Go;xs++){const p0=Sn[xs];Oe.update(p0,Ji),Oe.bind(p0,Ji)}}return Ji}function pn(D,X){D.ambientLightColor.needsUpdate=X,D.lightProbe.needsUpdate=X,D.directionalLights.needsUpdate=X,D.directionalLightShadows.needsUpdate=X,D.pointLights.needsUpdate=X,D.pointLightShadows.needsUpdate=X,D.spotLights.needsUpdate=X,D.spotLightShadows.needsUpdate=X,D.rectAreaLights.needsUpdate=X,D.hemisphereLights.needsUpdate=X}function mn(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(D,X,oe){const se=w.get(D);se.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),w.get(D.texture).__webglTexture=X,w.get(D.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:oe,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,X){const oe=w.get(D);oe.__webglFramebuffer=X,oe.__useDefaultFramebuffer=X===void 0};const bn=N.createFramebuffer();this.setRenderTarget=function(D,X=0,oe=0){G=D,I=X,L=oe;let se=null,ie=!1,Ne=!1;if(D){const Ue=w.get(D);if(Ue.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(N.FRAMEBUFFER,Ue.__webglFramebuffer),$.copy(D.viewport),k.copy(D.scissor),Z=D.scissorTest,me.viewport($),me.scissor(k),me.setScissorTest(Z),B=-1;return}else if(Ue.__webglFramebuffer===void 0)z.setupRenderTarget(D);else if(Ue.__hasExternalTextures)z.rebindTextures(D,w.get(D.texture).__webglTexture,w.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const ht=D.depthTexture;if(Ue.__boundDepthTexture!==ht){if(ht!==null&&w.has(ht)&&(D.width!==ht.image.width||D.height!==ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(D)}}const Ye=D.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ne=!0);const je=w.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(je[X])?se=je[X][oe]:se=je[X],ie=!0):D.samples>0&&z.useMultisampledRTT(D)===!1?se=w.get(D).__webglMultisampledFramebuffer:Array.isArray(je)?se=je[oe]:se=je,$.copy(D.viewport),k.copy(D.scissor),Z=D.scissorTest}else $.copy(ee).multiplyScalar(_e).floor(),k.copy(fe).multiplyScalar(_e).floor(),Z=le;if(oe!==0&&(se=bn),me.bindFramebuffer(N.FRAMEBUFFER,se)&&me.drawBuffers(D,se),me.viewport($),me.scissor(k),me.setScissorTest(Z),ie){const Ue=w.get(D.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ue.__webglTexture,oe)}else if(Ne){const Ue=X;for(let Ye=0;Ye<D.textures.length;Ye++){const je=w.get(D.textures[Ye]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ye,je.__webglTexture,oe,Ue)}}else if(D!==null&&oe!==0){const Ue=w.get(D.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ue.__webglTexture,oe)}B=-1},this.readRenderTargetPixels=function(D,X,oe,se,ie,Ne,ke,Ue=0){if(!(D&&D.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=w.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ke!==void 0&&(Ye=Ye[ke]),Ye){me.bindFramebuffer(N.FRAMEBUFFER,Ye);try{const je=D.textures[Ue],ht=je.format,_t=je.type;if(D.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ue),!re.textureFormatReadable(ht)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(_t)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=D.width-se&&oe>=0&&oe<=D.height-ie&&N.readPixels(X,oe,se,ie,Re.convert(ht),Re.convert(_t),Ne)}finally{const je=G!==null?w.get(G).__webglFramebuffer:null;me.bindFramebuffer(N.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(D,X,oe,se,ie,Ne,ke,Ue=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=w.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ke!==void 0&&(Ye=Ye[ke]),Ye)if(X>=0&&X<=D.width-se&&oe>=0&&oe<=D.height-ie){me.bindFramebuffer(N.FRAMEBUFFER,Ye);const je=D.textures[Ue],ht=je.format,_t=je.type;if(D.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ue),!re.textureFormatReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Qe),N.bufferData(N.PIXEL_PACK_BUFFER,Ne.byteLength,N.STREAM_READ),N.readPixels(X,oe,se,ie,Re.convert(ht),Re.convert(_t),0);const Ft=G!==null?w.get(G).__webglFramebuffer:null;me.bindFramebuffer(N.FRAMEBUFFER,Ft);const sn=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await x2(N,sn,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Qe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Ne),N.deleteBuffer(Qe),N.deleteSync(sn),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,X=null,oe=0){const se=Math.pow(2,-oe),ie=Math.floor(D.image.width*se),Ne=Math.floor(D.image.height*se),ke=X!==null?X.x:0,Ue=X!==null?X.y:0;z.setTexture2D(D,0),N.copyTexSubImage2D(N.TEXTURE_2D,oe,0,0,ke,Ue,ie,Ne),me.unbindTexture()};const Fr=N.createFramebuffer(),Vo=N.createFramebuffer();this.copyTextureToTexture=function(D,X,oe=null,se=null,ie=0,Ne=0){let ke,Ue,Ye,je,ht,_t,Qe,Ft,sn;const tn=D.isCompressedTexture?D.mipmaps[Ne]:D.image;if(oe!==null)ke=oe.max.x-oe.min.x,Ue=oe.max.y-oe.min.y,Ye=oe.isBox3?oe.max.z-oe.min.z:1,je=oe.min.x,ht=oe.min.y,_t=oe.isBox3?oe.min.z:0;else{const Rn=Math.pow(2,-ie);ke=Math.floor(tn.width*Rn),Ue=Math.floor(tn.height*Rn),D.isDataArrayTexture?Ye=tn.depth:D.isData3DTexture?Ye=Math.floor(tn.depth*Rn):Ye=1,je=0,ht=0,_t=0}se!==null?(Qe=se.x,Ft=se.y,sn=se.z):(Qe=0,Ft=0,sn=0);const Ot=Re.convert(X.format),Fn=Re.convert(X.type);let Je;X.isData3DTexture?(z.setTexture3D(X,0),Je=N.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(z.setTexture2DArray(X,0),Je=N.TEXTURE_2D_ARRAY):(z.setTexture2D(X,0),Je=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,X.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,X.unpackAlignment);const yi=N.getParameter(N.UNPACK_ROW_LENGTH),Tt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ji=N.getParameter(N.UNPACK_SKIP_PIXELS),cr=N.getParameter(N.UNPACK_SKIP_ROWS),Zs=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,tn.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,tn.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,je),N.pixelStorei(N.UNPACK_SKIP_ROWS,ht),N.pixelStorei(N.UNPACK_SKIP_IMAGES,_t);const Ho=D.isDataArrayTexture||D.isData3DTexture,Bt=X.isDataArrayTexture||X.isData3DTexture;if(D.isDepthTexture){const Rn=w.get(D),_s=w.get(X),Sn=w.get(Rn.__renderTarget),xs=w.get(_s.__renderTarget);me.bindFramebuffer(N.READ_FRAMEBUFFER,Sn.__webglFramebuffer),me.bindFramebuffer(N.DRAW_FRAMEBUFFER,xs.__webglFramebuffer);for(let Go=0;Go<Ye;Go++)Ho&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,w.get(D).__webglTexture,ie,_t+Go),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,w.get(X).__webglTexture,Ne,sn+Go)),N.blitFramebuffer(je,ht,ke,Ue,Qe,Ft,ke,Ue,N.DEPTH_BUFFER_BIT,N.NEAREST);me.bindFramebuffer(N.READ_FRAMEBUFFER,null),me.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(ie!==0||D.isRenderTargetTexture||w.has(D)){const Rn=w.get(D),_s=w.get(X);me.bindFramebuffer(N.READ_FRAMEBUFFER,Fr),me.bindFramebuffer(N.DRAW_FRAMEBUFFER,Vo);for(let Sn=0;Sn<Ye;Sn++)Ho?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Rn.__webglTexture,ie,_t+Sn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Rn.__webglTexture,ie),Bt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,_s.__webglTexture,Ne,sn+Sn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,_s.__webglTexture,Ne),ie!==0?N.blitFramebuffer(je,ht,ke,Ue,Qe,Ft,ke,Ue,N.COLOR_BUFFER_BIT,N.NEAREST):Bt?N.copyTexSubImage3D(Je,Ne,Qe,Ft,sn+Sn,je,ht,ke,Ue):N.copyTexSubImage2D(Je,Ne,Qe,Ft,je,ht,ke,Ue);me.bindFramebuffer(N.READ_FRAMEBUFFER,null),me.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Bt?D.isDataTexture||D.isData3DTexture?N.texSubImage3D(Je,Ne,Qe,Ft,sn,ke,Ue,Ye,Ot,Fn,tn.data):X.isCompressedArrayTexture?N.compressedTexSubImage3D(Je,Ne,Qe,Ft,sn,ke,Ue,Ye,Ot,tn.data):N.texSubImage3D(Je,Ne,Qe,Ft,sn,ke,Ue,Ye,Ot,Fn,tn):D.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Ne,Qe,Ft,ke,Ue,Ot,Fn,tn.data):D.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Ne,Qe,Ft,tn.width,tn.height,Ot,tn.data):N.texSubImage2D(N.TEXTURE_2D,Ne,Qe,Ft,ke,Ue,Ot,Fn,tn);N.pixelStorei(N.UNPACK_ROW_LENGTH,yi),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Tt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ji),N.pixelStorei(N.UNPACK_SKIP_ROWS,cr),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Zs),Ne===0&&X.generateMipmaps&&N.generateMipmap(Je),me.unbindTexture()},this.initRenderTarget=function(D){w.get(D).__webglFramebuffer===void 0&&z.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?z.setTextureCube(D,0):D.isData3DTexture?z.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?z.setTexture2DArray(D,0):z.setTexture2D(D,0),me.unbindTexture()},this.resetState=function(){I=0,L=0,G=null,me.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}function qC(n,e=50){const t=new Map;let i=null;const r=o=>{try{return JSON.stringify(o)}catch{return String(o)}},s=(...o)=>{const a=r(o);if(t.has(a))return t.get(a);const l=n(...o);return t.set(a,l),i&&clearTimeout(i),i=setTimeout(()=>{t.clear(),i=null},e),l};return s.cancel=()=>{i&&(clearTimeout(i),i=null),t.clear()},s}const Uf=9,KC=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,ZC={__name:"Blob3DBackground",setup(n,{expose:e}){const t=we(null);let i=null;const r={sampleScreenPixel:null,samplePoints:null},s=qC((p,g)=>{var T;if(!l||!d)return null;const b=(T=t.value)==null?void 0:T.getBoundingClientRect();if(!b)return null;const y=Math.round((p-b.left)*l.getPixelRatio()),v=Math.round((g-b.top)*l.getPixelRatio()),A=Math.round(b.width*l.getPixelRatio()),R=Math.round(b.height*l.getPixelRatio());if(y<0||v<0||y>=A||v>=R)return null;const M=l.getContext(),S=new Uint8Array(4);return M.readPixels(y,R-v-1,1,1,M.RGBA,M.UNSIGNED_BYTE,S),{r:S[0],g:S[1],b:S[2],a:S[3]}},50),o=(p,g,b,y)=>{var B;if(!l||!d)return null;const v=(B=t.value)==null?void 0:B.getBoundingClientRect();if(!v)return null;const A=l.getPixelRatio(),R=Math.round(v.width*A),M=Math.round(v.height*A);let S=Math.floor((p-v.left)*A),T=Math.floor((g-v.top)*A),U=Math.ceil(b*A),I=Math.ceil(y*A);if(S<0&&(U+=S,S=0),T<0&&(I+=T,T=0),U=Math.min(U,R-S),I=Math.min(I,M-T),U<=0||I<=0)return null;const L=U*I*4;(!i||i.length<L)&&(i=new Uint8Array(L));const G=l.getContext();return G.readPixels(S,M-(T+I),U,I,G.RGBA,G.UNSIGNED_BYTE,i),{data:i,px:S,py:T,pw:U,ph:I,ratio:A,left:v.left,top:v.top}},a=p=>{if(!p||p.length===0)return[];let g=1/0,b=1/0,y=-1/0,v=-1/0;for(const V of p)V.x<g&&(g=V.x),V.x>y&&(y=V.x),V.y<b&&(b=V.y),V.y>v&&(v=V.y);const A=o(g,b,y-g+1,v-b+1);if(!A)return p.map(()=>null);const{data:R,px:M,py:S,pw:T,ph:U,ratio:I,left:L,top:G}=A,B=new Array(p.length);for(let V=0;V<p.length;V++){const $=Math.floor((p[V].x-L)*I),k=Math.floor((p[V].y-G)*I);if($<M||$>=M+T||k<S||k>=S+U){B[V]=null;continue}const j=((S+U-1-k)*T+($-M))*4;B[V]={r:R[j],g:R[j+1],b:R[j+2],a:R[j+3]}}return B};r.sampleScreenPixel=s,r.samplePoints=a,window.__blobSampler=r,e({sampleScreenPixel:s,samplePoints:a});let l=null,c=null,u=null,d=null,f=null,h=[];function m(p,g){const b=getComputedStyle(document.documentElement).getPropertyValue(p).trim();if(!b)return g;const y=b.split(/\s+/).map(Number);return y.length<3||y.some(Number.isNaN)?g:new ae(y[0]/255,y[1]/255,y[2]/255)}const x=`
  precision highp float;

  varying vec2 vUv;

  uniform vec2  uResolution;
  uniform float uTime;
  uniform float uScroll;
  uniform vec2  uMouse;
  uniform vec2  uMouseDir;
  uniform float uMouseStrength;
  uniform vec3  uBallPos[${Uf}];
  uniform float uBallRadius[${Uf}];
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
    for (int i = 1; i < ${Uf}; i++) {
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
`;return yn(()=>{const p=t.value,g=p.clientWidth,b=p.clientHeight;l=new YC({antialias:!1,alpha:!0,preserveDrawingBuffer:!0}),l.setSize(g,b),l.setPixelRatio(Math.min(window.devicePixelRatio,1)),p.appendChild(l.domElement),c=new N2,u=new d0(-1,1,1,-1,0,1);const y=[{base:[-3.4,1.4,-.5],amp:[2.4,2,1.3],spd:[.13,.089,.061],ph:[0,1.7,3.4],r:2.6},{base:[3.6,-1.2,.4],amp:[2.2,2.3,1.2],spd:[.101,.127,.073],ph:[2.1,.4,5.2],r:2.3},{base:[-.8,-2.6,-1.1],amp:[2.6,1.9,1.5],spd:[.083,.113,.055],ph:[4.3,2.9,1.1],r:1.95},{base:[1.9,2.6,-.8],amp:[2,2.1,1.1],spd:[.119,.067,.091],ph:[1.2,5.1,2.7],r:1.5},{base:[-4.1,-1.9,.7],amp:[1.8,2.2,1.4],spd:[.071,.103,.047],ph:[3.8,1.5,4.6],r:1.25},{base:[4.2,1.8,-1.4],amp:[2.1,1.8,1.6],spd:[.109,.079,.121],ph:[5.5,3.2,.8],r:1.1},{base:[.4,3.3,.3],amp:[2.3,1.5,1.2],spd:[.059,.131,.085],ph:[2.6,4.8,3.9],r:.75},{base:[-2.1,2.9,-1.7],amp:[1.9,2,1.3],spd:[.127,.053,.097],ph:[.7,2.3,5.8],r:.58},{base:[1.4,-3.2,-.3],amp:[2.2,1.7,1.5],spd:[.093,.117,.065],ph:[4.9,.9,2.2],r:.45}],v=y.map(()=>new ae),A=y.map(le=>le.r),R=new ae(.06,.73,.51),M=new ae(.02,.47,.34),S=new ae(.02,.31,.23),T=new ae(.2,.83,.6);d=new lr({vertexShader:KC,fragmentShader:x,transparent:!0,depthWrite:!1,uniforms:{uResolution:{value:new wt(g,b)},uTime:{value:0},uScroll:{value:0},uMouse:{value:new wt(0,0)},uMouseDir:{value:new wt(1,0)},uMouseStrength:{value:0},uBallPos:{value:v},uBallRadius:{value:A},uColorA:{value:R.clone()},uColorB:{value:M.clone()},uColorC:{value:S.clone()},uColorHi:{value:T.clone()}}});const U=new Ur(new vc(2,2),d);U.frustumCulled=!1,c.add(U);const I=()=>{d.uniforms.uColorA.value.copy(m("--color-primary-500",R)),d.uniforms.uColorB.value.copy(m("--color-primary-700",M)),d.uniforms.uColorC.value.copy(m("--color-primary-900",S)),d.uniforms.uColorHi.value.copy(m("--color-primary-400",T))};I(),window.addEventListener("colorpalettechange",I);const L=new wt(0,0),G=new wt(0,0),B=new wt(1,0);let V=0,$=!1;const k=le=>{const Pe=le.clientX/window.innerWidth*2-1,Ce=-(le.clientY/window.innerHeight*2-1),ce=Pe-G.x,E=Ce-G.y,C=Math.hypot(ce,E);if(C>8e-4){B.x+=(ce/C-B.x)*.25,B.y+=(E/C-B.y)*.25;const H=Math.hypot(B.x,B.y)||1;B.x/=H,B.y/=H,V=Math.min(1,V+C*7)}G.set(Pe,Ce),L.set(Pe,Ce),$=!0},Z=()=>{$=!1},j=le=>{if(le.touches.length>0){const Pe=le.touches[0],Ce=Pe.clientX/window.innerWidth*2-1,ce=-(Pe.clientY/window.innerHeight*2-1);G.set(Ce,ce),L.set(Ce,ce),$=!0}},F=le=>{if(le.touches.length>0){const Pe=le.touches[0],Ce=Pe.clientX/window.innerWidth*2-1,ce=-(Pe.clientY/window.innerHeight*2-1),E=Ce-G.x,C=ce-G.y,H=Math.hypot(E,C);if(H>8e-4){B.x+=(E/H-B.x)*.25,B.y+=(C/H-B.y)*.25;const ne=Math.hypot(B.x,B.y)||1;B.x/=ne,B.y/=ne,V=Math.min(1,V+H*7)}G.set(Ce,ce),L.set(Ce,ce),$=!0}},ue=()=>{$=!1};window.addEventListener("mousemove",k,{passive:!0}),document.addEventListener("mouseleave",Z),window.addEventListener("touchstart",j,{passive:!0}),window.addEventListener("touchmove",F,{passive:!0}),window.addEventListener("touchend",ue,{passive:!0});let ge=!0,_e=0;const ye=()=>{_e=Math.min(1,window.scrollY/window.innerHeight);const le=ge;ge=_e<.95,le&&!ge?(cancelAnimationFrame(f),f=null):!le&&ge&&fe()};window.addEventListener("scroll",ye,{passive:!0});const Ae=()=>{const le=p.clientWidth,Pe=p.clientHeight;l.setSize(le,Pe),d.uniforms.uResolution.value.set(le*l.getPixelRatio(),Pe*l.getPixelRatio())};Ae(),window.addEventListener("resize",Ae);const ee=performance.now(),fe=()=>{if(f=requestAnimationFrame(fe),!ge)return;const le=(performance.now()-ee)/1e3,Pe=d.uniforms.uScroll.value;d.uniforms.uScroll.value=Pe+(_e-Pe)*.08;const Ce=d.uniforms.uScroll.value,ce=d.uniforms.uMouse.value;ce.x+=(L.x-ce.x)*.1,ce.y+=(L.y-ce.y)*.1,V*=.93;const E=$?.3+V*.85:0,C=d.uniforms.uMouseStrength;C.value+=(E-C.value)*.12;const H=d.uniforms.uMouseDir.value;H.x+=(B.x-H.x)*.1,H.y+=(B.y-H.y)*.1;const ne=Math.hypot(H.x,H.y)||1;H.x/=ne,H.y/=ne;for(let q=0;q<y.length;q++){const O=y[q],N=1+Ce*1.1,xe=1-Ce*.25,he=1.55;v[q].set((O.base[0]+Math.sin(le*O.spd[0]*he+O.ph[0])*O.amp[0])*N,(O.base[1]+Math.sin(le*O.spd[1]*he+O.ph[1])*O.amp[1])*xe-Ce*1.6,O.base[2]+Math.cos(le*O.spd[2]*he+O.ph[2])*O.amp[2]-Ce*1.2),A[q]=O.r*(1+Math.sin(le*(.055+q*.009)+q*1.9)*.16)*(1-Ce*.15);const re=ce.x*3.6,me=ce.y*2.3,P=re-v[q].x,w=me-v[q].y,z=Math.hypot(P,w),J=A[q]+.9;if(z<J){const K=(1-z/J)*C.value*.1;v[q].x+=H.x*K,v[q].y+=H.y*K}}d.uniforms.uTime.value=le,l.render(c,u)};ye(),ge&&fe(),h.push(()=>{cancelAnimationFrame(f),window.removeEventListener("scroll",ye),window.removeEventListener("resize",Ae),window.removeEventListener("mousemove",k),document.removeEventListener("mouseleave",Z),window.removeEventListener("touchstart",j),window.removeEventListener("touchmove",F),window.removeEventListener("touchend",ue),window.removeEventListener("colorpalettechange",I),U.geometry.dispose(),d.dispose(),l.dispose(),l.domElement.parentNode&&l.domElement.parentNode.removeChild(l.domElement)})}),Cn(()=>{h.forEach(p=>p())}),(p,g)=>(Y(),Q("div",{ref_key:"containerRef",ref:t,class:"absolute inset-0 overflow-hidden pointer-events-none"},null,512))}},Ks=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},JC={class:"text-accent-500 light:text-accent-600"},QC={__name:"HeroSection",setup(n){$e.registerPlugin(ct);const e=we(""),t=we(0),i=we(!1),r=["Frontend Developer","Vue.js Specialist","UI/UX Enthusiast","Problem Solver"];let s=null,o=null,a=[],l=null;const c=we(null),u=we(null),d=we(null),f=we(null),h=we(null),m=we(null),x=we(null),p=we(null),g=()=>{const b=r[t.value],y=e.value.length;if(i.value){if(e.value=b.substring(0,y-1),y===0){i.value=!1,t.value=(t.value+1)%r.length,s=setTimeout(g,500);return}s=setTimeout(g,50)}else{if(e.value=b.substring(0,y+1),y===b.length){i.value=!0,s=setTimeout(g,2e3);return}s=setTimeout(g,100)}};return yn(()=>{s=setTimeout(g,500),o=$e.timeline({defaults:{ease:"power3.out"}}),o.fromTo(c.value,{opacity:0,y:30,filter:"blur(8px)"},{opacity:1,y:0,filter:"blur(0px)",clearProps:"filter",duration:.8}).fromTo(u.value,{opacity:0,y:50,filter:"blur(12px)"},{opacity:1,y:0,filter:"blur(0px)",clearProps:"filter",duration:1.1},"-=0.4").fromTo(d.value,{opacity:0,y:50,filter:"blur(12px)"},{opacity:1,y:0,filter:"blur(0px)",clearProps:"filter",duration:1.1},"-=0.6").fromTo(f.value,{opacity:0,y:40,filter:"blur(10px)"},{opacity:1,y:0,filter:"blur(0px)",clearProps:"filter",duration:1},"-=0.5").fromTo(h.value,{opacity:0,y:30,filter:"blur(8px)"},{opacity:1,y:0,filter:"blur(0px)",clearProps:"filter",duration:.8,stagger:.15},"-=0.5");const b=u.value,y=14,v=R=>{const M=b.getBoundingClientRect(),S=(R.clientX-M.left)/M.width-.5,T=(R.clientY-M.top)/M.height-.5;l&&l.kill(),l=$e.to(b,{rotationY:S*y*2,rotationX:-T*y*2,transformPerspective:600,transformOrigin:"center center",duration:.4,ease:"power2.out"})},A=()=>{l&&l.kill(),l=$e.to(b,{rotationX:0,rotationY:0,duration:.8,ease:"elastic.out(1, 0.4)"})};b.addEventListener("mousemove",v),b.addEventListener("mouseleave",A),a.push(()=>{b.removeEventListener("mousemove",v),b.removeEventListener("mouseleave",A)})}),Cn(()=>{clearTimeout(s),o&&o.kill(),a.forEach(b=>b())}),(b,y)=>(Y(),Q("section",{ref_key:"heroSectionRef",ref:x,id:"home",class:"relative h-screen flex items-center justify-center overflow-hidden light:bg-secondary-100"},[y[3]||(y[3]=_("div",{class:"absolute inset-0 bg-grid opacity-20"},null,-1)),et(ZC),_("div",{ref_key:"contentRef",ref:m,class:"relative text-center px-4 sm:px-6 lg:px-8 mx-auto"},[_("p",{ref_key:"greetingRef",ref:c,class:"text-accent-500 font-semibold tracking-widest text-sm mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] light:drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"}," PORTFOLIO ",512),_("h1",{ref_key:"nameRef",ref:u,class:"font-griaste text-5xl sm:text-6xl md:text-7xl text-white light:text-secondary-900 mb-4 foil-text name-glow"}," Kenneth Cortez ",512),_("h2",{ref_key:"roleRef",ref:d,class:"text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary-300 light:text-secondary-800 mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] light:drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"},[y[0]||(y[0]=qi(" I'm a ",-1)),_("span",JC,pe(e.value),1),y[1]||(y[1]=_("span",{class:"animate-pulse text-primary-500 light:text-primary-600"},"|",-1))],512),_("p",{ref_key:"descriptionRef",ref:f,class:"light:text-black text-white text-lg mb-8 max-w-2xl mx-auto"}," I build modern, responsive web applications. In every project, creating a seamless user experience is my primary focus. ",512),_("div",{ref_key:"buttonsRef",ref:h,class:"flex flex-col sm:flex-row items-center justify-center gap-4"},[y[2]||(y[2]=_("a",{href:"#projects",class:"bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25 w-full sm:w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] light:drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"}," View Projects ",-1)),_("a",{ref_key:"resumeBtnRef",ref:p,href:"https://docs.google.com/document/d/1pxuH9Ue2NJ18GnzGR44gVKfEIvoe9YvMHj26P7A0RDY/edit?usp=sharing",target:"_blank",class:"resume-btn light:text-primary-500 light:border-none shadow-md hover:shadow-lg light:bg-primary-100 hover:light:bg-primary-200 ease-in-out relative border border-white text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"}," Open Resume ",512)],512)],512)],512))}},eR=Ks(QC,[["__scopeId","data-v-10f84687"]]),tR={class:"about-stage-1 absolute top-[2%] bottom-6 left-8 sm:left-12 lg:left-14 right-4 sm:right-6 lg:right-8 flex flex-col justify-center gap-2 sm:gap-4"},nR={class:"about-title section-title"},iR={class:"whitespace-nowrap"},rR={class:"about-skills flex flex-wrap gap-3"},sR={class:"about-stat-title section-title"},oR=["data-count"],aR={class:"whitespace-nowrap text-7xl"},lR={class:"about-stat-subtext text-secondary-300 light:text-secondary-700 leading-relaxed text-lg sm:text-xl md:text-2xl font-light"},cR={__name:"AboutSection",setup(n){$e.registerPlugin(ct);const e=we(null),t=we(null);let i=null;const r=["Vue 3","TypeScript","Node.js","Tailwind CSS","Github","Figma"],s=[{text:"I build modern web applications that are as functional as they are beautiful. What started as a curiosity about the web has evolved into a career creating impactful digital products.",size:"text-base sm:text-xl md:text-2xl font-light"},{text:"I specialize in the Vue.js ecosystem but I'm able to adjust to any framework, always prioritizing clean, maintainable code and highly intuitive user experiences.",size:"text-base sm:text-xl md:text-2xl font-light"}],o=[{title:"Years Work Experience",count:5,subtext:"Specializing in building modern, responsive frontend applications with a focus on clean, maintainable code and seamless user experiences."},{title:"Projects Delivered",count:50,subtext:"Scalable, Maintainable and user friendly designs"},{title:"Creative Designer",count:null,subtext:"Crafting intuitive interfaces that blend aesthetics with functionality"},{title:"Continuous Learner",count:null,subtext:"Always exploring new technologies and pushing the boundaries of what's possible"}],a=d=>!d||typeof d!="string"?[]:d.trim().split(/\s+/).map((f,h)=>({id:`word-${h}`,letters:f.split("").map((m,x)=>({char:m,id:`${h}-${x}-${m}`}))})),l=a("About Me"),c=s.map(d=>({...d})),u=o.map(d=>({...d,titleWords:d.count!==null?a("+ "+d.title):a(d.title)}));return yn(()=>{const d=t.value.querySelector(".about-title"),f=t.value.querySelectorAll(".about-paragraph-first"),h=t.value.querySelectorAll(".about-skills"),m=t.value.querySelector(".about-progress"),x=t.value.querySelectorAll(".about-stat-stage"),p=t.value.querySelectorAll(".about-count");if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){$e.set(d,{opacity:1,y:0}),$e.set(f,{y:0,opacity:1}),$e.set(h,{y:0,opacity:1}),$e.set(x,{y:0,opacity:1}),$e.set(m,{scaleX:1}),p.forEach(g=>{g.textContent=g.dataset.count});return}$e.set(d,{x:-120,opacity:0,scale:.9}),$e.set(f,{y:30,opacity:0,filter:"blur(8px)"}),$e.set(h,{y:"100vh",opacity:0}),$e.set(x,{opacity:0}),x.forEach(g=>{const b=g.querySelector(".about-stat-subtext");b&&$e.set(b,{y:30,opacity:0,filter:"blur(8px)"});const y=g.querySelector(".about-count");y&&$e.set(y,{y:30,opacity:0})}),$e.set(m,{scaleX:0,transformOrigin:"left center"}),i=$e.timeline({scrollTrigger:{trigger:e.value,start:"top top",end:"+=1200%",pin:!0,scrub:1,anticipatePin:1,onUpdate:g=>{$e.set(m,{scaleX:g.progress})},snap:{snapTo:"labels",duration:{min:.2,max:.5},delay:.1,ease:"power2.inOut"}}}),i.to(d,{x:0,opacity:1,scale:1,duration:1,ease:"elastic.out(1, 0.4)"}),i.to(f,{y:0,opacity:1,filter:"blur(0px)",duration:.8,stagger:.15,ease:"power2.out"}),i.to(h,{y:0,opacity:1,duration:.225,ease:"power2.out"}),i.add("stage-1"),i.to(t.value.querySelector(".about-stage-1"),{opacity:0,duration:.6,ease:"power2.in"},"+=0.2"),x.forEach((g,b)=>{const y=g.querySelectorAll(".about-stat-title .about-letter"),v=g.querySelector(".about-stat-subtext"),A=g.querySelector(".about-count");if(i.to(g,{opacity:1,duration:.1,ease:"none"}),i.to(y,{y:0,opacity:1,filter:"blur(0px)",duration:.3,stagger:.02,ease:"power2.out"}),A){i.to(A,{y:0,opacity:1,duration:.3,ease:"power2.out"});const R=parseInt(A.dataset.count),M={val:0};i.to(M,{val:R,duration:.5,ease:"power2.out",onUpdate:()=>{A.textContent=Math.round(M.val)}})}v&&i.to(v,{y:0,opacity:1,filter:"blur(0px)",duration:.8,ease:"power2.out"}),i.add(`stat-${b}`),b<x.length-1&&i.to(g,{opacity:0,duration:.6,ease:"power2.in"},"+=0.2")})}),Cn(()=>{var d;i&&((d=i.scrollTrigger)==null||d.kill(),i.kill())}),(d,f)=>(Y(),Q("section",{ref_key:"sectionRef",ref:e,id:"about",class:"relative h-screen pt-24 sm:pt-24 md:pt-32 z-10"},[f[3]||(f[3]=Rs('<svg width="0" height="0" class="absolute" aria-hidden="true" data-v-a0576359><defs data-v-a0576359><clipPath id="about-concave-clip" clipPathUnits="objectBoundingBox" data-v-a0576359><path d="M0 0 Q0.5 0.2 1 0 L1 1 L0 1 Z" data-v-a0576359></path></clipPath></defs></svg><div class="absolute -top-24 sm:-top-24 md:-top-32 left-0 right-0 bottom-0 bg-dark-800 light:bg-white" style="clip-path:url(#about-concave-clip);" data-v-a0576359></div><svg class="absolute -top-24 sm:-top-24 md:-top-32 left-0 w-full h-[calc(100%+6rem)] sm:h-[calc(100%+6rem)] md:h-[calc(100%+8rem)] pointer-events-none" viewBox="0 0 1 1" preserveAspectRatio="none" aria-hidden="true" data-v-a0576359><path d="M0 0 Q0.5 0.2 1 0" fill="none" stroke="rgb(var(--color-primary-500) / 0.4)" stroke-width="0.002" vector-effect="non-scaling-stroke" data-v-a0576359></path></svg>',3)),_("div",{ref_key:"contentRef",ref:t,class:"relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full"},[f[1]||(f[1]=_("div",{class:"absolute left-4 sm:left-6 lg:left-8 top-[12%] bottom-[6%] w-px bg-primary-500/30"},null,-1)),_("div",tR,[_("h2",nR,[(Y(!0),Q(We,null,it(Xe(l),(h,m)=>(Y(),Q(We,{key:h.id},[_("span",iR,[(Y(!0),Q(We,null,it(h.letters,x=>(Y(),Q("span",{key:x.id,class:"about-letter inline-block will-change-transform"},pe(x.char),1))),128))]),qi(pe(m<Xe(l).length-1?" ":""),1)],64))),128))]),(Y(!0),Q(We,null,it(Xe(c),(h,m)=>(Y(),Q("p",{key:`first-${m}`,class:rt(["about-paragraph-first text-secondary-300 light:text-secondary-700 leading-relaxed",h.size])},pe(h.text),3))),128)),_("div",rR,[(Y(),Q(We,null,it(r,h=>_("span",{key:h,class:"px-4 py-2 bg-secondary-800/50 border border-secondary-700 rounded-full text-sm text-secondary-300 hover:border-primary-500/50 hover:text-primary-400 light:bg-secondary-100 light:border-secondary-200 light:text-secondary-600 light:hover:border-primary-500/50 light:hover:text-primary-600 transition-all duration-300 hover:scale-105 cursor-default"},pe(h),1)),64))])]),(Y(!0),Q(We,null,it(Xe(u),(h,m)=>(Y(),Q("div",{key:`stat-${m}`,class:"about-stat-stage absolute top-[20%] bottom-6 left-8 sm:left-12 lg:left-14 right-4 sm:right-6 lg:right-8 flex flex-col justify-start gap-4 sm:gap-6"},[_("h2",sR,[h.count!==null?(Y(),Q(We,{key:0},[_("span",{class:"about-count inline-block tabular-nums text-left text-primary-500 light:text-primary-600 text-9xl","data-count":h.count,style:Gt({minWidth:`${String(h.count).length}ch`})},"0",12,oR),f[0]||(f[0]=qi(" "+pe(" "),-1))],64)):qt("",!0),(Y(!0),Q(We,null,it(h.titleWords,(x,p)=>(Y(),Q(We,{key:x.id},[_("span",aR,[(Y(!0),Q(We,null,it(x.letters,g=>(Y(),Q("span",{key:g.id,class:"about-letter inline-block will-change-transform"},pe(g.char),1))),128))]),qi(pe(p<h.titleWords.length-1?" ":""),1)],64))),128))]),_("p",lR,pe(h.subtext),1)]))),128)),f[2]||(f[2]=_("div",{class:"absolute bottom-0 left-0 right-0 h-1 bg-secondary-700/30 light:bg-secondary-200"},[_("div",{class:"about-progress rounded-full h-full bg-primary-500"})],-1))],512)],512))}},uR=Ks(cR,[["__scopeId","data-v-a0576359"]]),Ff=[{name:"Vue.js",category:"Frontend",description:"Progressive JavaScript framework for building user interfaces",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"},{name:"TypeScript",category:"Language",description:"Typed superset of JavaScript for safer code",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},{name:"JavaScript",category:"Language",description:"High-level programming language for the web",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},{name:"Node.js",category:"Backend",description:"JavaScript runtime for building server-side applications",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},{name:"Tailwind CSS",category:"Styling",description:"Utility-first CSS framework for rapid UI development",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"},{name:"Vite",category:"Tooling",description:"Next-generation frontend build tool",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg"},{name:"GitHub",category:"DevOps",description:"Platform for version control and collaboration",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},{name:"GitHub Desktop",category:"Tooling",description:"Visual interface for Git version control",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},{name:"Pinia",category:"Frontend",description:"State management library for Vue.js",image:"https://pinia.vuejs.org/logo.svg"},{name:"Three.js",category:"Frontend",description:"3D graphics library for the web",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"},{name:"GSAP",category:"Frontend",description:"High-performance animation library",image:"https://cdn.simpleicons.org/gsap"},{name:"Lucide",category:"Frontend",description:"Beautiful & consistent icon toolkit",image:"https://cdn.simpleicons.org/lucide"},{name:"Axios",category:"Backend",description:"Promise-based HTTP client for the browser and Node.js",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg"},{name:"shadcn/ui",category:"Frontend",description:"Reusable components built with Radix UI and Tailwind",image:"https://cdn.simpleicons.org/shadcnui"},{name:"Python",category:"Language",description:"Versatile programming language for data and automation",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},{name:"Jupyter Notebook",category:"Tooling",description:"Interactive computing environment for data science",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"},{name:"Google Colab",category:"Tooling",description:"Free cloud-based Jupyter notebook environment",image:"https://colab.research.google.com/img/colab_favicon_256px.png"},{name:"VS Code",category:"Tooling",description:"Powerful code editor with rich extension ecosystem",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"},{name:"Figma",category:"Design",description:"Collaborative interface design tool for prototyping and UI/UX",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"}];/*!
 * ScrollToPlugin 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var $n,ny,os,Er,Vs,iy,La,lu,ry=function(){return typeof window<"u"},sy=function(){return $n||ry()&&($n=window.gsap)&&$n.registerPlugin&&$n},oy=function(e){return typeof e=="string"},Lg=function(e){return typeof e=="function"},cc=function(e,t){var i=t==="x"?"Width":"Height",r="scroll"+i,s="client"+i;return e===os||e===Er||e===Vs?Math.max(Er[r],Vs[r])-(os["inner"+i]||Er[s]||Vs[s]):e[r]-e["offset"+i]},uc=function(e,t){var i="scroll"+(t==="x"?"Left":"Top");return e===os&&(e.pageXOffset!=null?i="page"+t.toUpperCase()+"Offset":e=Er[i]!=null?Er:Vs),function(){return e[i]}},dR=function(e,t,i,r){if(Lg(e)&&(e=e(t,i,r)),typeof e!="object")return oy(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s={},o;for(o in e)s[o]=o!=="onAutoKill"&&Lg(e[o])?e[o](t,i,r):e[o];return s},ay=function(e,t){if(e=iy(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var i=e.getBoundingClientRect(),r=!t||t===os||t===Vs,s=r?{top:Er.clientTop-(os.pageYOffset||Er.scrollTop||Vs.scrollTop||0),left:Er.clientLeft-(os.pageXOffset||Er.scrollLeft||Vs.scrollLeft||0)}:t.getBoundingClientRect(),o={x:i.left-s.left,y:i.top-s.top};return!r&&t&&(o.x+=uc(t,"x")(),o.y+=uc(t,"y")()),o},Ig=function(e,t,i,r,s){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-s:oy(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+r-s:e==="max"?cc(t,i)-s:Math.min(cc(t,i),ay(e,t)[i]-s)},fp=function(){$n=sy(),ry()&&$n&&typeof document<"u"&&document.body&&(os=window,Vs=document.body,Er=document.documentElement,iy=$n.utils.toArray,$n.config({autoKillThreshold:7}),La=$n.config(),ny=1)},Ka={version:"3.15.0",name:"scrollTo",rawVars:1,register:function(e){$n=e,fp()},init:function(e,t,i,r,s){ny||fp();var o=this,a=$n.getProperty(e,"scrollSnapType");o.isWin=e===os,o.target=e,o.tween=i,t=dR(t,r,e,s),o.vars=t,o.autoKill=!!("autoKill"in t?t:La).autoKill,o.getX=uc(e,"x"),o.getY=uc(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),lu||(lu=$n.core.globals().ScrollTrigger),$n.getProperty(e,"scrollBehavior")==="smooth"&&$n.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,Ig(t.x,e,"x",o.x,t.offsetX||0),r,s),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,Ig(t.y,e,"y",o.y,t.offsetY||0),r,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var i=t._pt,r=t.target,s=t.tween,o=t.autoKill,a=t.xPrev,l=t.yPrev,c=t.isWin,u=t.snap,d=t.snapInline,f,h,m,x,p;i;)i.r(e,i.d),i=i._next;f=c||!t.skipX?t.getX():a,h=c||!t.skipY?t.getY():l,m=h-l,x=f-a,p=La.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(x>p||x<-p)&&f<cc(r,"x")&&(t.skipX=1),!t.skipY&&(m>p||m<-p)&&h<cc(r,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(s.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(s,t.vars.onAutoKillParams||[]))),c?os.scrollTo(t.skipX?f:t.x,t.skipY?h:t.y):(t.skipY||(r.scrollTop=t.y),t.skipX||(r.scrollLeft=t.x)),u&&(e===1||e===0)&&(h=r.scrollTop,f=r.scrollLeft,d?r.style.scrollSnapType=d:r.style.removeProperty("scroll-snap-type"),r.scrollTop=h+1,r.scrollLeft=f+1,r.scrollTop=h,r.scrollLeft=f),t.xPrev=t.x,t.yPrev=t.y,lu&&lu.update()},kill:function(e){var t=e==="scrollTo",i=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),i>-1&&this._props.splice(i,1),!this._props.length}};Ka.max=cc;Ka.getOffset=ay;Ka.buildGetter=uc;Ka.config=function(n){La||fp()||(La=$n.config());for(var e in n)La[e]=n[e]};sy()&&$n.registerPlugin(Ka);$e.registerPlugin(ct,Ka);function f0(n,e={}){const{y:t=60,duration:i=1.2,stagger:r=.12,start:s="top 85%",blur:o=12,scale:a=1.05,ease:l="power3.out",delay:c=0,onComplete:u}=e;$e.set(n,{opacity:0,y:t,scale:a,filter:`blur(${o}px)`,willChange:"transform, opacity, filter"});const f=$e.to(n,{opacity:1,y:0,scale:1,filter:"blur(0px)",duration:i,stagger:r,delay:c,ease:l,scrollTrigger:{trigger:n,start:s,once:!0},onComplete:u}).scrollTrigger;return Array.isArray(f)?f:[f]}function h0(n,e={}){const{y:t=60,x:i=0,scale:r=.9,duration:s=1.4,start:o="top 85%",ease:a="elastic.out(1, 0.3)",delay:l=0}=e;$e.set(n,{opacity:0,y:t,x:i,scale:r,willChange:"transform, opacity"});const u=$e.to(n,{opacity:1,y:0,x:0,scale:1,duration:s,delay:l,ease:a,scrollTrigger:{trigger:n,start:o,once:!0}}).scrollTrigger;return Array.isArray(u)?u:[u]}function fR(n,e=8){const t=r=>{const s=n.getBoundingClientRect(),o=(r.clientX-s.left)/s.width-.5,a=(r.clientY-s.top)/s.height-.5;$e.to(n,{rotationY:o*e*2,rotationX:-a*e*2,transformPerspective:800,duration:.3,ease:"power2.out"})},i=()=>{$e.to(n,{rotationX:0,rotationY:0,duration:.5,ease:"elastic.out(1, 0.5)"})};return n.addEventListener("mousemove",t),n.addEventListener("mouseleave",i),()=>{n.removeEventListener("mousemove",t),n.removeEventListener("mouseleave",i)}}function hR(n={}){const{size:e=40,trailLength:t=200,trailWidth:i=18}=n,r=U=>getComputedStyle(document.documentElement).getPropertyValue(U).trim()||"16 185 129";let s=null;const o=()=>{if(s)return s;const U=r("--color-primary-500").split(" ").map(Number),I=r("--color-primary-400").split(" ").map(Number),L=r("--color-primary-300").split(" ").map(Number),G=r("--color-primary-700").split(" ").map(Number),B=r("--color-primary-900").split(" ").map(Number);return s={particleColors:[[255,255,255],L,U,G],outerGlow:[U,G,B,B],midGlow:[L,U,G],coreGlow:[[255,255,255],I,L,U]},s},a=()=>{s=null};window.addEventListener("colorpalettechange",a);const l=document.createElement("canvas");l.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
  `,document.body.appendChild(l);const c=l.getContext("2d"),u=()=>{l.width=window.innerWidth,l.height=window.innerHeight};u(),window.addEventListener("resize",u);const d={x:window.innerWidth/2,y:window.innerHeight/2},f={x:d.x,y:d.y},h=[];let m=!1,x=null;const p=U=>{d.x=U.clientX,d.y=U.clientY,m=!0,clearTimeout(x),x=setTimeout(()=>{m=!1},200)},g=()=>{m=!1,clearTimeout(x)},b=U=>{U.touches.length>0&&(d.x=U.touches[0].clientX,d.y=U.touches[0].clientY)},y=()=>{m=!0,clearTimeout(x)},v=()=>{clearTimeout(x),x=setTimeout(()=>{m=!1},200)},A=U=>{U.touches.length>0&&(d.x=U.touches[0].clientX,d.y=U.touches[0].clientY,f.x=d.x,f.y=d.y,m=!0)},R=()=>{m=!1},M=()=>{m=!1},S=$e.to({},{duration:.2,repeat:-1,yoyo:!0,ease:"sine.inOut",onUpdate:function(){}}),T=$e.ticker.add(()=>{c.clearRect(0,0,l.width,l.height);const U=d.x-f.x,I=d.y-f.y,L=Math.sqrt(U*U+I*I);if(m){const G=Math.max(1,Math.min(4,Math.floor(L*.15)+1));for(let B=0;B<G;B++){const V=Math.random()*Math.PI*2,$=Math.random()*e*.4;h.push({x:d.x+Math.cos(V)*$,y:d.y+Math.sin(V)*$,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,radius:(Math.random()*.6+.4)*(i*.35),life:1,decay:.004+Math.random()*.004,colorIndex:Math.floor(Math.random()*4),swirl:(Math.random()-.5)*.02,angle:Math.random()*Math.PI*2})}}h.length>t&&h.splice(0,h.length-t);for(let G=h.length-1;G>=0;G--){const B=h[G];if(B.life-=B.decay,B.life<=0){h.splice(G,1);continue}B.angle+=B.swirl,B.x+=B.vx+Math.cos(B.angle)*.15,B.y+=B.vy+Math.sin(B.angle)*.15;const V=B.life*.35,{particleColors:$}=o(),[k,Z,j]=$[B.colorIndex],F=c.createRadialGradient(B.x,B.y,0,B.x,B.y,B.radius*2.5);F.addColorStop(0,`rgba(${k}, ${Z}, ${j}, ${V})`),F.addColorStop(.5,`rgba(${k}, ${Z}, ${j}, ${V*.4})`),F.addColorStop(1,`rgba(${k}, ${Z}, ${j}, 0)`),c.beginPath(),c.arc(B.x,B.y,B.radius*2.5,0,Math.PI*2),c.fillStyle=F,c.fill()}if(m){const G=Date.now()/1e3,B=1+Math.sin(G*3)*.08+Math.sin(G*7)*.05,V=Math.sin(G*2.5)*2,$=Math.cos(G*2.1)*2,{outerGlow:k,midGlow:Z,coreGlow:j}=o(),F=c.createRadialGradient(d.x+V,d.y+$,0,d.x+V,d.y+$,e*1.5*B);F.addColorStop(0,`rgba(${k[0]}, 0.3)`),F.addColorStop(.4,`rgba(${k[1]}, 0.18)`),F.addColorStop(.7,`rgba(${k[2]}, 0.08)`),F.addColorStop(1,`rgba(${k[3]}, 0)`),c.beginPath(),c.arc(d.x+V,d.y+$,e*1.5*B,0,Math.PI*2),c.fillStyle=F,c.fill();const ue=c.createRadialGradient(d.x+V,d.y+$,0,d.x+V,d.y+$,e*.7*B);ue.addColorStop(0,`rgba(${Z[0]}, 0.5)`),ue.addColorStop(.5,`rgba(${Z[1]}, 0.3)`),ue.addColorStop(1,`rgba(${Z[2]}, 0)`),c.beginPath(),c.arc(d.x+V,d.y+$,e*.7*B,0,Math.PI*2),c.fillStyle=ue,c.fill();const ge=c.createRadialGradient(d.x+V,d.y+$,0,d.x+V,d.y+$,e*.35*B);ge.addColorStop(0,`rgba(${j[0]}, 0.85)`),ge.addColorStop(.3,`rgba(${j[1]}, 0.6)`),ge.addColorStop(.7,`rgba(${j[2]}, 0.25)`),ge.addColorStop(1,`rgba(${j[3]}, 0)`),c.beginPath(),c.arc(d.x+V,d.y+$,e*.35*B,0,Math.PI*2),c.fillStyle=ge,c.fill()}f.x=d.x,f.y=d.y});return window.addEventListener("mousemove",p),window.addEventListener("mouseleave",g),window.addEventListener("mousedown",y),window.addEventListener("mouseup",v),window.addEventListener("touchmove",b,{passive:!0}),window.addEventListener("touchstart",A,{passive:!0}),window.addEventListener("touchend",R,{passive:!0}),window.addEventListener("touchcancel",M,{passive:!0}),()=>{clearTimeout(x),window.removeEventListener("mousemove",p),window.removeEventListener("mouseleave",g),window.removeEventListener("mousedown",y),window.removeEventListener("mouseup",v),window.removeEventListener("touchmove",b),window.removeEventListener("touchstart",A),window.removeEventListener("touchend",R),window.removeEventListener("touchcancel",M),window.removeEventListener("resize",u),window.removeEventListener("colorpalettechange",a),$e.ticker.remove(T),S.kill(),l.remove()}}const pR={id:"tech-stack",class:"py-20 bg-dark-800 light:bg-secondary-100 relative overflow-hidden"},mR={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},gR=["onClick"],_R=["data-column"],xR={class:"tech-brick group relative bg-secondary-800 border border-secondary-700 rounded-xl p-6 overflow-hidden hover:border-primary-500 hover:shadow-xl hover:shadow-primary-500/10 transition-colors duration-300 light:bg-white light:border-secondary-200 light:hover:border-primary-500 light:hover:shadow-primary-500/10"},vR={class:"tech-image-overlay absolute inset-0 z-10 flex items-center justify-center bg-dark-900/95 light:bg-white/95 backdrop-blur-sm overflow-hidden"},yR=["src","alt"],bR={class:"relative z-0 flex flex-col h-full"},SR={class:"flex items-start justify-between mb-4"},wR={class:"w-10 h-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"},MR=["src","alt"],ER={class:"text-xs text-primary-400 bg-primary-500/10 px-2 py-1 rounded-full"},TR={class:"text-white light:text-secondary-900 font-bold text-lg mb-2 group-hover:text-primary-400 transition-colors duration-300"},AR={class:"text-secondary-300 light:text-secondary-500 text-sm"},CR={__name:"TechStack",setup(n){$e.registerPlugin(ct);const e=Xt(()=>["All",...new Set(Ff.map(b=>b.category))]),t=we("All"),i=we(null),r=we(null),s=we(null),o=we(null),a=we(typeof window<"u"?window.innerWidth:1024);let l=[],c=[],u=[],d=null,f=null;const h=Xt(()=>t.value==="All"?Ff:Ff.filter(b=>b.category===t.value)),m=Xt(()=>{if(t.value!=="All")return!1;const b=h.value.length;return a.value>=1024?b>4:a.value>=640?b>2:!1}),x=b=>{t.value=b},p=()=>{if(!i.value)return;const b=i.value.querySelectorAll(".brick-wrapper");if(c.forEach(v=>{var A;(A=v.scrollTrigger)==null||A.kill(),v.kill()}),c=[],t.value!=="All"){b.forEach(v=>{const A=v.querySelector(".tech-brick");A&&$e.set(A,{yPercent:0})});return}const y=window.innerWidth>=768;b.forEach(v=>{const A=v.querySelector(".tech-brick");if(!A)return;const R=parseInt(v.dataset.column,10);if(!y){$e.set(A,{yPercent:0});return}if(R===1||R===3){const M=$e.fromTo(A,{yPercent:-20},{yPercent:20,ease:"none",scrollTrigger:{trigger:i.value,start:"top bottom",end:"bottom top",scrub:.6}});c.push(M)}})},g=()=>{if(!i.value)return;u.forEach(y=>y()),u=[],i.value.querySelectorAll(".tech-brick").forEach(y=>{const v=y.querySelector(".tech-image-overlay");if(!v)return;$e.set(v,{clipPath:"circle(0% at 50% 0%)",visibility:"hidden"});const A=()=>{$e.killTweensOf(v),$e.set(v,{visibility:"visible"}),$e.to(v,{clipPath:"circle(150% at 50% 0%)",duration:.9,ease:"power3.out",overwrite:"auto"})},R=()=>{$e.killTweensOf(v),$e.set(v,{visibility:"hidden"}),$e.to(v,{clipPath:"circle(0% at 50% 0%)",duration:.7,ease:"power3.in",overwrite:"auto"})};y.addEventListener("mouseenter",A),y.addEventListener("mouseleave",R),y.addEventListener("touchstart",A,{passive:!0}),y.addEventListener("touchend",R,{passive:!0}),y.addEventListener("touchcancel",R,{passive:!0}),u.push(()=>{y.removeEventListener("mouseenter",A),y.removeEventListener("mouseleave",R),y.removeEventListener("touchstart",A),y.removeEventListener("touchend",R),y.removeEventListener("touchcancel",R)})})};return yn(()=>{l.push(...h0(r.value,{x:-120,start:"top 85%"})),p(),g(),f=window.innerWidth>=768;const b=()=>{a.value=window.innerWidth;const y=window.innerWidth>=768;y!==f&&(f=y,p())};window.addEventListener("resize",b),d=()=>window.removeEventListener("resize",b)}),Cn(()=>{l.forEach(b=>b.kill()),c.forEach(b=>{var y;(y=b.scrollTrigger)==null||y.kill(),b.kill()}),u.forEach(b=>b()),d==null||d()}),li(h,async()=>{await Lr(),p(),g()}),(b,y)=>(Y(),Q("section",pR,[y[0]||(y[0]=_("div",{class:"absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"},null,-1)),_("div",mR,[_("h2",{ref_key:"titleRef",ref:r,class:"section-title text-4xl font-bold text-white light:text-secondary-900 mb-6"},"Tech Stack",512),_("p",{ref_key:"subtitleRef",ref:s,class:"section-subtitle text-secondary-400 light:text-secondary-500 mb-8"},"Technologies and tools I work with",512),_("div",{ref_key:"filterRef",ref:o,class:"flex flex-wrap gap-3 mb-10"},[(Y(!0),Q(We,null,it(e.value,v=>(Y(),Q("button",{key:v,onClick:A=>x(v),class:rt(["px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105",t.value===v?"bg-primary-600 text-white shadow-lg shadow-primary-500/25 ":"bg-secondary-800 text-secondary-400 hover:text-white border border-secondary-700 light:bg-white light:text-secondary-500 light:hover:text-primary-500 light:border-secondary-200 light:hover:border-primary-500"])},pe(v),11,gR))),128))],512),_("div",{ref_key:"gridRef",ref:i,class:"brick-wall"},[(Y(!0),Q(We,null,it(h.value,(v,A)=>(Y(),Q("div",{key:v.name,"data-column":A%4,class:rt(["brick-wrapper",{"brick-offset":m.value}])},[_("div",xR,[_("div",vR,[_("img",{src:v.image,alt:`${v.name} logo`,class:"w-24 h-24 object-contain drop-shadow-lg",loading:"lazy"},null,8,yR)]),_("div",bR,[_("div",SR,[_("div",wR,[_("img",{src:v.image,alt:`${v.name} logo`,class:"w-full h-full object-contain",loading:"lazy"},null,8,MR)]),_("span",ER,pe(v.category),1)]),_("h3",TR,pe(v.name),1),_("p",AR,pe(v.description),1)])])],10,_R))),128))],512)])]))}},RR=Ks(CR,[["__scopeId","data-v-57e1a728"]]),PR="/project-collection/assets/merchant-redemption-form-cover-C-EMIhUe.png",Of=[{id:1,title:"E-Commerce Platform",description:"A full-featured e-commerce platform with product management, cart functionality, and Stripe payment integration.",tech:["Vue 3","Node.js","MongoDB","Stripe"],github:"https://github.com/yourusername/ecommerce-platform",demo:"https://ecommerce-demo.example.com",image:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",features:["Product catalog with search, filtering, and category browsing","Shopping cart with real-time price calculations and quantity management","Secure Stripe payment integration with order confirmation","User authentication with profile and order history","Admin dashboard for product and inventory management"]},{id:2,title:"Task Management App",description:"A collaborative task management application with real-time updates, drag-and-drop boards, and team collaboration features.",tech:["Vue 3","Firebase","Tailwind CSS"],github:"https://github.com/yourusername/task-manager",demo:"https://task-manager-demo.example.com",image:"https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",features:["Drag-and-drop kanban boards for task organization","Real-time collaboration with live updates across team members","Task assignments, due dates, and priority levels","Project workspaces with customizable columns and labels","Activity timeline and notifications for team updates"]},{id:3,title:"Weather Dashboard",description:"A real-time weather dashboard with location-based forecasts, interactive maps, and 7-day weather predictions.",tech:["Vue 3","REST API","Chart.js"],github:"https://github.com/yourusername/weather-dashboard",demo:"https://weather-demo.example.com",image:"https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",features:["Real-time weather data with location-based search","Interactive 7-day forecast with temperature trends","Hourly breakdown with precipitation and wind speed","Visual weather charts using Chart.js for data visualization","Responsive design optimized for mobile and desktop"]},{id:4,title:"Social Media Analytics",description:"An analytics dashboard for social media managers to track engagement, follower growth, and content performance across platforms.",tech:["Vue 3","D3.js","Express","PostgreSQL"],github:"https://github.com/yourusername/social-analytics",demo:"https://analytics-demo.example.com",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",features:["Cross-platform analytics aggregation for major social networks","Interactive data visualizations with D3.js charts","Follower growth tracking with trend analysis","Content performance metrics and engagement scoring","Customizable reporting with export capabilities"]},{id:5,title:"Recipe Finder",description:"A recipe discovery app with ingredient-based search, meal planning, and step-by-step cooking instructions.",tech:["Vue 3","Vuex","Tailwind CSS"],github:"https://github.com/yourusername/recipe-finder",demo:"https://recipe-demo.example.com",image:"https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=400&fit=crop",features:["Ingredient-based recipe search with smart matching","Meal planning calendar with grocery list generation","Step-by-step cooking instructions with timers","Recipe filtering by dietary preferences and cuisine","Save and organize favorite recipes in collections"]},{id:6,title:"Dev Portfolio Template",description:"A modern, responsive developer portfolio template with dark mode, smooth animations, and project showcase features.",tech:["Vue 3","Tailwind CSS","Vite"],github:"https://github.com/yourusername/dev-portfolio",demo:"https://portfolio-demo.example.com",image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",features:["Dark/light mode with smooth theme transitions","GSAP-powered scroll animations and micro-interactions","Interactive project showcase with detail modals","Fully responsive layout across all device sizes","Optimized performance with Vite build tooling"]},{id:7,title:"Dev Portfolio",description:"A modern, responsive developer portfolio template with dark mode, smooth animations, and project showcase features.",tech:["Vue 3","Tailwind CSS","Vite"],github:"https://github.com/yourusername/dev-portfolio",demo:"https://portfolio-demo.example.com",image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",features:["Dark/light mode with smooth theme transitions","GSAP-powered scroll animations and micro-interactions","Interactive project showcase with detail modals","Fully responsive layout across all device sizes","Optimized performance with Vite build tooling"]},{id:8,title:"Merchant Redemption Form",description:"A dynamic merchant redemption form that adapts to each partnered merchant with a smooth redemption, OTP verification, and confirmation flow.",tech:["Vue 3","Tailwind CSS","Lucide Icons"],github:"https://github.com/yourusername/merchant-redemption",demo:"https://redemption.merchant-form.com/redeem",image:PR,features:["Dynamic merchant branding that adapts to each partnered merchant","Smooth redemption flow with form, OTP verification, and confirmation","Redemption history with status tracking (processing, voided, successful, redeemed, cancelled)","Secure OTP verification with resend timer and auto-advance inputs","Mobile-first design with lucide icons throughout the interface"]}],DR={class:"relative w-full h-[500px] select-none"},LR=["disabled"],IR=["onClick","onMouseenter","onMouseleave"],NR={class:"relative overflow-hidden rounded-t-xl h-48"},UR=["src","alt"],FR={key:0,class:"absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent rounded-t-xl pointer-events-none"},OR={class:"p-5 bg-secondary-800 h-full light:bg-white rounded-b-xl"},kR={class:"text-white light:text-secondary-900 font-semibold text-lg mb-2"},BR={class:"text-secondary-400 light:text-secondary-500 text-sm mb-3 leading-relaxed line-clamp-2"},zR={class:"flex flex-wrap gap-1.5 mb-3"},VR=["disabled"],HR={class:"absolute bottom-0 left-1/2 -translate-x-1/2 w-64 sm:w-80"},GR={class:"h-1 rounded-full bg-secondary-800 light:bg-secondary-200 overflow-hidden"},kf=300,Ng=380,ul=2,cu=.6,dl=.5,WR=215,$R=34,XR=8,jR=1.08,YR=16,qR=58,KR={__name:"ProjectWheel",props:{projects:{type:Array,required:!0}},emits:["open"],setup(n,{emit:e}){const t=n,i=e,{isDark:r}=Qp(),s=we(null),o=we(0),a=we(0),l=we(!1),c=we(null);let u=[],d=!1,f=0,h=0,m=!1;const x=Xt(()=>t.projects.length>1),p=Xt(()=>t.projects.length===0?0:(o.value+1)/t.projects.length*100),g=async()=>{await Lr(),!(!s.value||(u=Array.from(s.value.children),u.length===0))&&(u.forEach(ye=>{$e.set(ye,{position:"absolute",top:"50%",left:"50%",width:kf,height:Ng,marginLeft:-kf/2,marginTop:-Ng/2,transformOrigin:"center center",willChange:"transform, opacity",borderRadius:"1rem",boxShadow:r.value?"0 10px 30px rgba(0,0,0,0.3)":"none",cursor:"pointer",backgroundColor:"rgb(var(--color-secondary-800))"})}),o.value=0,a.value=0,R(!0))},b=_e=>{const ye=ul;return _e<=ye?(cu+dl)*_e-dl*_e*_e/(2*ye):(cu+dl)*ye-dl*ye/2+cu*(_e-ye)},y=b(1),v=_e=>{const Ae=360/u.length,ee=o.value+a.value;let le=(_e*Ae-ee*Ae)%360;le>180&&(le-=360),le<-180&&(le+=360);const Pe=le/Ae,Ce=Math.abs(Pe),ce=Math.min(Ce,ul),E=Math.max(0,1-Ce/(ul+1)),C=Math.sign(Pe)*WR*(b(Ce)/y),H=$R*(1-Math.cos(ce/ul*(Math.PI/2))),ne=Math.sign(Pe)*XR*(ce/ul),q=cu+E*dl,O=E,N=Math.round(E*100);return{x:C,y:H,scale:q,opacity:O,zIndex:N,rotation:ne,normalized:le,offset:Pe}},A=()=>!l.value&&!d,R=(_e=!1,ye=!1)=>{const Ae=A()?c.value:null,ee=Ae!==null&&u[Ae]?v(Ae).offset:null;u.forEach((fe,le)=>{const{x:Pe,y:Ce,scale:ce,opacity:E,zIndex:C,rotation:H,normalized:ne,offset:q}=v(le),O=Math.abs(ne)<5,N=Ae===le;let xe=Pe,he=Ce,re=ce,me=H,P=C,w=_e?"none":"power3.out",z=_e?0:.8;if(N)re=ce*jR,he=Ce-YR,me=H*.35,P=150,_e||(w=ye?"elastic.out(1, 0.45)":"back.out(2)",z=ye?.9:.5);else if(ee!==null){const K=q-ee,Me=Math.abs(K);if(Me>.01){const ve=qR/Me*Math.sign(K);xe=Pe+ve,he=Ce+Math.min(10,10/Me),_e||(w=ye?"back.out(3)":"power3.out",z=ye?.75:.5)}}const J=E>.05?1:0;$e.set(fe,{filter:O||N?"brightness(1)":r.value?"brightness(0.7)":"brightness(0.85)",boxShadow:N?"0 25px 60px rgb(var(--color-primary-500) / 0.45)":O?"0 0 50px rgb(var(--color-primary-500) / 0.35)":r.value?"0 0 0px rgb(var(--color-primary-500) / 0)":"none"});const te={x:xe,y:he,scale:re,rotation:me,opacity:J,zIndex:P,pointerEvents:E>.05?"auto":"none",duration:z,ease:w,overwrite:"auto",borderRadius:"1rem",transformOrigin:"center center"};_e?$e.set(fe,te):$e.to(fe,te)})},M=_e=>{l.value||d||c.value!==_e&&(c.value=_e,R(!1,!0))},S=_e=>{c.value===_e&&(c.value=null,!(l.value||d)&&R(!1,!0))},T=_e=>{if(d||u.length===0||!x.value)return;d=!0,c.value=null;const ye=u.length;o.value=(o.value+_e+ye)%ye,$e.to({},{duration:1,ease:"power3.inOut",onUpdate:()=>{R()},onComplete:()=>{d=!1,R()}})},U=_e=>{d||u.length===0||l.value||m||I(_e)},I=_e=>{const ye=u[_e];if(!ye)return;const Ae=ye.getBoundingClientRect();i("open",{project:t.projects[_e],originRect:{left:Ae.left,top:Ae.top,width:Ae.width,height:Ae.height}})},L=_e=>{d||u.length===0||!x.value||(l.value=!0,c.value=null,m=!1,f=_e.clientX,h=_e.clientX,_e.preventDefault())},G=_e=>{if(!l.value)return;const ye=_e.clientX-h;h=_e.clientX,Math.abs(_e.clientX-f)>5&&(m=!0),a.value-=ye/kf,R()},B=()=>{if(!l.value)return;l.value=!1;const _e=u.length,ye=Math.round(a.value);if(!m&&ye===0){a.value=0;return}ye!==0&&(o.value=(o.value+ye+_e)%_e),a.value=0,d=!0,$e.to({},{duration:.5,ease:"power3.out",onUpdate:()=>{R()},onComplete:()=>{d=!1,R(),setTimeout(()=>{m=!1},50)}})},V=()=>{l.value&&B()},$=()=>{c.value!==null&&(c.value=null,!l.value&&!d&&R(!1,!0)),B()},k=_e=>{const ye=_e.currentTarget;if(!ye.querySelector(".fill-overlay"))return;const ee=ye.getBoundingClientRect(),fe=_e.clientX-ee.left,le=_e.clientY-ee.top;ye.style.setProperty("--mx",`${fe}px`),ye.style.setProperty("--my",`${le}px`)},Z=_e=>{const ye=_e.currentTarget;if(ye.style.setProperty("--mx","50%"),ye.style.setProperty("--my","50%"),j){const Ae=ye.querySelector(".fill-overlay");Ae&&(Ae.classList.remove("active"),Ae.classList.add("fade-out"),setTimeout(()=>{Ae.classList.remove("fade-out")},500))}},j=window.matchMedia("(hover: hover)").matches,F=_e=>{if(j)return;const ye=_e.currentTarget,Ae=ye.querySelector(".fill-overlay");if(!Ae)return;const ee=ye.getBoundingClientRect(),fe=_e.clientX-ee.left,le=_e.clientY-ee.top;ye.style.setProperty("--mx",`${fe}px`),ye.style.setProperty("--my",`${le}px`),Ae.classList.add("active")},ue=_e=>{if(j)return;const Ae=_e.currentTarget.querySelector(".fill-overlay");Ae&&(Ae.classList.remove("active"),Ae.classList.add("fade-out"),setTimeout(()=>{Ae.classList.remove("fade-out")},500))},ge=_e=>{if(!j)return;const ye=_e.currentTarget,Ae=ye.querySelector(".fill-overlay");if(!Ae)return;const ee=ye.getBoundingClientRect(),fe=_e.clientX-ee.left,le=_e.clientY-ee.top;ye.style.setProperty("--mx",`${fe}px`),ye.style.setProperty("--my",`${le}px`),Ae.classList.add("active")};return yn(async()=>{await g()}),li(()=>t.projects,async()=>{await g()}),li(r,()=>{u.length>0&&R(!0)}),(_e,ye)=>(Y(),Q("div",DR,[_("button",{onClick:ye[0]||(ye[0]=Ae=>T(-1)),onMousemove:k,onMouseleave:Z,onMouseenter:ge,onPointerdown:F,onPointerup:ue,onPointercancel:ue,disabled:!x.value,class:"absolute -left-24 md:-left-24 lg:-left-40 top-1/2 -translate-y-1/2 size-[200px] md:size-[200px] lg:size-[300px] rounded-full flex items-center justify-center text-secondary-300 light:text-secondary-500 disabled:opacity-40 disabled:cursor-not-allowed z-[110] border-2 border-primary-500/50 light:border-primary-600/50 hover:border-primary-500 light:hover:border-primary-600 hover:scale-105 transition-all duration-300 overflow-hidden","aria-label":"Previous project"},[...ye[2]||(ye[2]=[_("span",{class:"fill-overlay"},null,-1),_("svg",{class:"absolute z-10 w-8 h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 right-10 md:right-10 lg:right-16 top-1/2 -translate-y-1/2 text-primary-500 light:text-primary-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M19 12H5M12 19l-7-7 7-7"})],-1)])],40,LR),_("div",{ref_key:"wheelRef",ref:s,class:rt(["relative w-full h-full",{"cursor-grabbing":l.value,"cursor-grab":!l.value}]),onPointerdown:L,onPointermove:G,onPointerup:B,onPointercancel:V,onPointerleave:$},[(Y(!0),Q(We,null,it(n.projects,(Ae,ee)=>(Y(),Q("div",{key:Ae.id,onClick:fe=>U(ee),onMouseenter:fe=>M(ee),onMouseleave:fe=>S(ee),class:"absolute rounded-xl overflow-hidden shadow-xl light:shadow-none",style:{width:"300px",height:"360px"}},[_("div",NR,[_("img",{src:Ae.image,alt:Ae.title,class:"w-full h-full object-cover"},null,8,UR),Xe(r)?(Y(),Q("div",FR)):qt("",!0)]),_("div",OR,[_("h3",kR,pe(Ae.title),1),_("p",BR,pe(Ae.description),1),_("div",zR,[(Y(!0),Q(We,null,it(Ae.tech.slice(0,3),fe=>(Y(),Q("span",{key:fe,class:"text-xs text-primary-400 bg-primary-500/10 px-2 py-0.5 rounded-full"},pe(fe),1))),128))])])],40,IR))),128))],34),_("button",{onClick:ye[1]||(ye[1]=Ae=>T(1)),onMousemove:k,onMouseleave:Z,onMouseenter:ge,onPointerdown:F,onPointerup:ue,onPointercancel:ue,disabled:!x.value,class:"absolute -right-24 md:-right-24 lg:-right-40 top-1/2 -translate-y-1/2 size-[200px] md:size-[200px] lg:size-[300px] rounded-full flex items-center justify-center text-secondary-300 light:text-secondary-500 disabled:opacity-40 disabled:cursor-not-allowed z-[110] border-2 border-primary-500/50 light:border-primary-600/50 hover:border-primary-500 light:hover:border-primary-600 hover:scale-105 transition-all duration-300 overflow-hidden","aria-label":"Next project"},[...ye[3]||(ye[3]=[_("span",{class:"fill-overlay"},null,-1),_("svg",{class:"absolute z-10 w-8 h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 left-10 md:left-10 lg:left-16 top-1/2 -translate-y-1/2 text-primary-500 light:text-primary-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M5 12h14M12 5l7 7-7 7"})],-1)])],40,VR),_("div",HR,[_("div",GR,[_("div",{class:"h-full rounded-full bg-primary-500 light:bg-primary-600 transition-all duration-500 ease-out",style:Gt({width:p.value+"%"})},null,4)])])]))}},ZR=Ks(KR,[["__scopeId","data-v-7c9d2faa"]]),JR={class:"relative overflow-hidden h-48"},QR=["src","alt"],eP={class:"p-6"},tP={class:"text-white light:text-secondary-900 font-semibold text-lg mb-2 group-hover:text-primary-400 transition-colors duration-200"},nP={class:"text-secondary-400 light:text-secondary-500 text-sm mb-4 leading-relaxed"},iP={class:"flex flex-wrap gap-2 mb-4"},Ug={__name:"ProjectCard",props:{project:{type:Object,required:!0}},emits:["open"],setup(n,{emit:e}){const t=n,i=e,r=we(null);let s=null;const o=()=>{if(!r.value)return;const a=r.value.getBoundingClientRect();i("open",{project:t.project,originRect:{left:a.left,top:a.top,width:a.width,height:a.height}})};return yn(()=>{r.value&&(s=fR(r.value,6))}),Cn(()=>{s&&s()}),(a,l)=>(Y(),Q("div",{ref_key:"cardRef",ref:r,onClick:o,class:"group bg-secondary-800 border border-secondary-700 rounded-xl overflow-hidden hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 will-change-transform cursor-pointer light:bg-white light:border-secondary-200 light:hover:border-primary-500/50 light:hover:shadow-primary-500/10"},[_("div",JR,[_("img",{src:n.project.image,alt:n.project.title,class:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"},null,8,QR),l[0]||(l[0]=_("div",{class:"absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent pointer-events-none"},null,-1))]),_("div",eP,[_("h3",tP,pe(n.project.title),1),_("p",nP,pe(n.project.description),1),_("div",iP,[(Y(!0),Q(We,null,it(n.project.tech,c=>(Y(),Q("span",{key:c,class:"text-xs text-primary-400 bg-primary-500/10 px-2 py-1 rounded-full"},pe(c),1))),128))])])],512))}};/**
 * @license @lucide/vue v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=n=>n==="";/**
 * @license @lucide/vue v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rP=(...n)=>n.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license @lucide/vue v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license @lucide/vue v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sP=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase());/**
 * @license @lucide/vue v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oP=n=>{const e=sP(n);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license @lucide/vue v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ca={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license @lucide/vue v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aP=Symbol("lucide-icons");function lP(){return Tl(aP,{})}/**
 * @license @lucide/vue v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cP=({name:n,iconNode:e,"icon-node":t,absoluteStrokeWidth:i,"absolute-stroke-width":r,strokeWidth:s,"stroke-width":o,size:a,color:l,...c},{slots:u})=>{const{size:d,color:f,strokeWidth:h=2,absoluteStrokeWidth:m=!1,class:x=""}=lP(),p=Xt(()=>{const g=Fg(i)||Fg(r)||i===!0||r===!0||m===!0,b=s||o||h||ca["stroke-width"];return g?Number(b)*24/Number(a??d??ca.width):b});return Bu("svg",{...ca,...c,width:a??d??ca.width,height:a??d??ca.height,stroke:l??f??ca.stroke,"stroke-width":p.value,class:rP("lucide",x,...n?[`lucide-${Og(oP(n))}-icon`,`lucide-${Og(n)}`]:["lucide-icon"])},[...(e??t??[]).map(g=>Bu(...g)),...u.default?[u.default()]:[]])};/**
 * @license @lucide/vue v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=(n,e)=>(t,{slots:i,attrs:r})=>Bu(cP,{...r,...t,iconNode:e,name:n},i.default?{default:i.default}:void 0);/**
 * @license @lucide/vue v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M4.929 4.929 19.07 19.071",key:"196cmz"}]],dP=Kn("ban",uP);/**
 * @license @lucide/vue v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fP=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],hP=Kn("check",fP);/**
 * @license @lucide/vue v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pP=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],ly=Kn("chevron-left",pP);/**
 * @license @lucide/vue v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],cy=Kn("circle-check",mP);/**
 * @license @lucide/vue v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],_P=Kn("circle-x",gP);/**
 * @license @lucide/vue v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],uy=Kn("clock",xP);/**
 * @license @lucide/vue v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vP=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],yP=Kn("copy",vP);/**
 * @license @lucide/vue v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bP=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"1sqzm4"}],["path",{d:"M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5",key:"kc0143"}],["rect",{x:"3",y:"7",width:"18",height:"4",rx:"1",key:"1hberx"}]],dy=Kn("gift",bP);/**
 * @license @lucide/vue v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SP=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],Cu=Kn("key-round",SP);/**
 * @license @lucide/vue v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wP=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],fy=Kn("loader-circle",wP);/**
 * @license @lucide/vue v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MP=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],hy=Kn("mail",MP);/**
 * @license @lucide/vue v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EP=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],hp=Kn("rotate-ccw-clock",EP);/**
 * @license @lucide/vue v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TP=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],py=Kn("rotate-ccw",TP);/**
 * @license @lucide/vue v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AP=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],id=Kn("shield-check",AP);/**
 * @license @lucide/vue v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CP=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],kg=Kn("smartphone",CP);/**
 * @license @lucide/vue v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RP=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",key:"slp6dd"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",key:"o0xfot"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",key:"wn3emo"}]],PP=Kn("store",RP),DP={class:"flex flex-col"},LP={class:"flex items-center gap-3"},IP={class:"w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0"},NP={class:"p-4 sm:p-5"},UP={class:"mb-4"},FP={class:"relative"},OP={class:"absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400"},kP=["value"],BP={key:0,class:"text-[10px] text-accent-500 mt-1"},zP={key:1,class:"text-[10px] text-secondary-400 mt-1"},VP={class:"mb-4"},HP={class:"relative"},GP={class:"absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400"},WP=["value"],$P={key:0,class:"text-[10px] text-accent-500 mt-1"},XP={key:1,class:"text-[10px] text-secondary-400 mt-1"},jP={class:"mb-4"},YP={class:"relative"},qP={class:"absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400"},KP=["value"],ZP={key:0,class:"text-[10px] text-accent-500 mt-1"},JP={class:"mb-4"},QP={class:"relative"},e5={class:"absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400"},t5=["value"],n5={key:0,class:"text-[10px] text-accent-500 mt-1"},i5={key:1,class:"text-[10px] text-secondary-400 mt-1"},r5={class:"flex items-start gap-2 bg-secondary-50 border border-secondary-200 rounded-lg p-3 mb-4"},s5=["disabled"],o5={__name:"RedemptionForm",props:{merchant:{type:Object,required:!0},isSubmitting:{type:Boolean,default:!1}},emits:["submit"],setup(n,{emit:e}){const t=n,i=e,r=we(""),s=we(""),o=we(""),a=we(""),l=we({redemptionCode:"",mobileno:"",confirmMobileno:"",email:""}),c=b=>b.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,8),u=b=>{const y=b.replace(/\D/g,"").slice(0,11);return y.length<=3?y:y.length<=7?`${y.slice(0,3)} ${y.slice(3)}`:`${y.slice(0,3)} ${y.slice(3,7)} ${y.slice(7)}`},d=b=>{r.value=c(b.target.value),l.value.redemptionCode=""},f=b=>{s.value=u(b.target.value),l.value.mobileno="",o.value&&o.value!==s.value?l.value.confirmMobileno="Mobile numbers do not match":l.value.confirmMobileno=""},h=b=>{o.value=u(b.target.value),l.value.confirmMobileno=""},m=b=>{a.value=b.target.value,l.value.email=""},x=()=>{l.value={redemptionCode:"",mobileno:"",confirmMobileno:"",email:""};let b=!0;return r.value.length!==8&&(l.value.redemptionCode="Redemption code must be exactly 8 characters",b=!1),s.value.replace(/\D/g,"").length<10&&(l.value.mobileno="Enter a valid mobile number",b=!1),o.value!==s.value&&(l.value.confirmMobileno="Mobile numbers do not match",b=!1),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.value)||(l.value.email="Enter a valid email address",b=!1),b},p=Xt(()=>r.value.length===8&&s.value.replace(/\D/g,"").length>=10&&o.value===s.value&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.value)),g=()=>{!x()||t.isSubmitting||i("submit",{redemptionCode:r.value,mobileno:s.value.replace(/\s/g,""),email:a.value})};return(b,y)=>(Y(),Q("div",DP,[_("div",{class:"px-4 sm:px-5 py-4 sm:py-5 flex-shrink-0",style:Gt({background:`linear-gradient(135deg, ${n.merchant.hexColor}, ${n.merchant.hexColor}cc)`})},[_("div",LP,[_("div",IP,[et(Xe(Cu),{class:"w-5 h-5 sm:w-5.5 sm:h-5.5 text-white"})]),y[0]||(y[0]=_("div",null,[_("div",{class:"text-white font-bold text-sm sm:text-base leading-tight"},"Redeem your eGift"),_("div",{class:"text-white/70 text-[10px] sm:text-[11px] mt-0.5"},"Enter your details to redeem")],-1))])],4),_("div",NP,[_("div",UP,[y[1]||(y[1]=_("label",{class:"block text-[11px] sm:text-xs font-semibold text-secondary-700 mb-1.5"}," Redemption Code ",-1)),_("div",FP,[_("div",OP,[et(Xe(Cu),{class:"w-4 h-4"})]),_("input",{value:r.value,onInput:d,type:"text",inputmode:"text",placeholder:"ABC12345",maxlength:"8",class:rt(["w-full bg-secondary-50 border border-secondary-200 rounded-lg pl-9 pr-3 py-2.5 text-sm text-secondary-900 placeholder-secondary-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all font-mono uppercase tracking-wider",{"border-accent-500 focus:border-accent-500 focus:ring-accent-500/20":l.value.redemptionCode}])},null,42,kP)]),l.value.redemptionCode?(Y(),Q("p",BP,pe(l.value.redemptionCode),1)):(Y(),Q("p",zP,"Enter the 8-character code from your eGift"))]),_("div",VP,[y[2]||(y[2]=_("label",{class:"block text-[11px] sm:text-xs font-semibold text-secondary-700 mb-1.5"}," Mobile Number ",-1)),_("div",HP,[_("div",GP,[et(Xe(kg),{class:"w-4 h-4"})]),_("input",{value:s.value,onInput:f,type:"tel",inputmode:"numeric",placeholder:"09XX XXX XXXX",class:rt(["w-full bg-secondary-50 border border-secondary-200 rounded-lg pl-9 pr-3 py-2.5 text-sm text-secondary-900 placeholder-secondary-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all",{"border-accent-500 focus:border-accent-500 focus:ring-accent-500/20":l.value.mobileno}])},null,42,WP)]),l.value.mobileno?(Y(),Q("p",$P,pe(l.value.mobileno),1)):(Y(),Q("p",XP,"We'll send a one-time PIN to verify your number"))]),_("div",jP,[y[3]||(y[3]=_("label",{class:"block text-[11px] sm:text-xs font-semibold text-secondary-700 mb-1.5"}," Retype Mobile Number ",-1)),_("div",YP,[_("div",qP,[et(Xe(kg),{class:"w-4 h-4"})]),_("input",{value:o.value,onInput:h,type:"tel",inputmode:"numeric",placeholder:"09XX XXX XXXX",class:rt(["w-full bg-secondary-50 border border-secondary-200 rounded-lg pl-9 pr-3 py-2.5 text-sm text-secondary-900 placeholder-secondary-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all",{"border-accent-500 focus:border-accent-500 focus:ring-accent-500/20":l.value.confirmMobileno}])},null,42,KP)]),l.value.confirmMobileno?(Y(),Q("p",ZP,pe(l.value.confirmMobileno),1)):qt("",!0)]),_("div",JP,[y[4]||(y[4]=_("label",{class:"block text-[11px] sm:text-xs font-semibold text-secondary-700 mb-1.5"}," Email Address ",-1)),_("div",QP,[_("div",e5,[et(Xe(hy),{class:"w-4 h-4"})]),_("input",{value:a.value,onInput:m,type:"email",inputmode:"email",placeholder:"you@email.com",class:rt(["w-full bg-secondary-50 border border-secondary-200 rounded-lg pl-9 pr-3 py-2.5 text-sm text-secondary-900 placeholder-secondary-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all",{"border-accent-500 focus:border-accent-500 focus:ring-accent-500/20":l.value.email}])},null,42,t5)]),l.value.email?(Y(),Q("p",n5,pe(l.value.email),1)):(Y(),Q("p",i5,"We'll send your eGift receipt to this email"))]),_("div",r5,[et(Xe(id),{class:"w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5"}),y[5]||(y[5]=_("p",{class:"text-[10px] text-secondary-500 leading-relaxed"}," Your transaction is secured. We never store your personal information. ",-1))]),_("button",{onClick:g,disabled:!p.value||n.isSubmitting,class:rt(["w-full py-3 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer",p.value&&!n.isSubmitting?"text-white shadow-lg hover:opacity-90 active:scale-[0.98]":"bg-secondary-200 text-secondary-400 cursor-not-allowed"]),style:Gt(p.value&&!n.isSubmitting?{background:n.merchant.hexColor,boxShadow:`0 4px 15px ${n.merchant.hexColor}40`}:{})},[n.isSubmitting?(Y(),Yn(Xe(fy),{key:0,class:"w-4 h-4 animate-spin"})):(Y(),Q(We,{key:1},[et(Xe(Cu),{class:"w-4 h-4"}),y[6]||(y[6]=_("span",null,"Redeem Now",-1))],64))],14,s5)])]))}},a5={class:"flex flex-col"},l5={class:"flex items-center gap-3"},c5={class:"p-4 sm:p-5"},u5={class:"flex items-center gap-2 bg-secondary-50 border border-secondary-200 rounded-lg p-3 mb-5"},d5={class:"text-[11px] text-secondary-600"},f5={class:"font-semibold text-secondary-900"},h5={class:"flex gap-2 sm:gap-2.5 mb-4"},p5=["value","onInput","onKeydown"],m5={key:0,class:"text-[11px] text-accent-500 mb-3"},g5={class:"flex items-center justify-between mb-5"},_5={class:"flex items-center gap-1.5 text-[11px] text-secondary-400"},x5={key:0},v5={key:1},y5=["disabled"],b5={class:"flex items-start gap-2 bg-secondary-50 border border-secondary-200 rounded-lg p-3 mb-4"},S5=["disabled"],w5={__name:"OtpVerification",props:{merchant:{type:Object,required:!0},phone:{type:String,default:""}},emits:["verified","back","resend"],setup(n,{emit:e}){const t=n,i=e,r=we(["","","","","",""]),s=we([]),o=we(!1),a=we(!1),l=we(30),c=we("");let u=null;const d=Xt(()=>{if(!t.phone)return"your mobile number";const y=t.phone.replace(/\D/g,"");return y.length<=3?y:y.length<=7?`${y.slice(0,3)} ${y.slice(3)}`:`${y.slice(0,3)} ${y.slice(3,7)} ${y.slice(7)}`}),f=Xt(()=>r.value.every(y=>y!=="")),h=(y,v)=>{var R;const A=v.target.value.replace(/\D/g,"").slice(-1);r.value[y]=A,c.value="",A&&y<5&&((R=s.value[y+1])==null||R.focus())},m=(y,v)=>{var A,R,M;v.key==="Backspace"&&!r.value[y]&&y>0&&((A=s.value[y-1])==null||A.focus()),v.key==="ArrowLeft"&&y>0&&((R=s.value[y-1])==null||R.focus()),v.key==="ArrowRight"&&y<5&&((M=s.value[y+1])==null||M.focus())},x=y=>{var R;const v=y.clipboardData.getData("text").replace(/\D/g,"").slice(0,6);if(!v)return;y.preventDefault();const A=v.split("");r.value=["","","","","",""],A.forEach((M,S)=>{r.value[S]=M}),(R=s.value[Math.min(A.length,5)])==null||R.focus()},p=async()=>{!f.value||o.value||(o.value=!0,c.value="",setTimeout(()=>{o.value=!1,i("verified")},1200))},g=async()=>{a.value||l.value>0||(a.value=!0,await i("resend"),a.value=!1,l.value=30,b())},b=()=>{u&&clearInterval(u),u=setInterval(()=>{l.value--,l.value<=0&&(clearInterval(u),u=null)},1e3)};return yn(()=>{b(),setTimeout(()=>{var y;return(y=s.value[0])==null?void 0:y.focus()},300)}),Cn(()=>{u&&clearInterval(u)}),li(f,y=>{y&&setTimeout(()=>p(),300)}),(y,v)=>(Y(),Q("div",a5,[_("div",{class:"px-4 sm:px-5 py-4 sm:py-5 flex-shrink-0",style:Gt({background:`linear-gradient(135deg, ${n.merchant.hexColor}, ${n.merchant.hexColor}cc)`})},[_("div",l5,[_("button",{onClick:v[0]||(v[0]=A=>i("back")),class:"w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors cursor-pointer","aria-label":"Go back"},[et(Xe(ly),{class:"w-4 h-4 text-white"})]),v[1]||(v[1]=_("div",null,[_("div",{class:"text-white font-bold text-sm sm:text-base leading-tight"},"Verify OTP"),_("div",{class:"text-white/70 text-[10px] sm:text-[11px] mt-0.5"},"Enter the code sent to your phone")],-1))])],4),_("div",c5,[_("div",u5,[et(Xe(hy),{class:"w-4 h-4 text-primary-500 flex-shrink-0"}),_("p",d5,[v[2]||(v[2]=qi(" We sent a 6-digit code to ",-1)),_("span",f5,pe(d.value),1)])]),_("div",h5,[(Y(!0),Q(We,null,it(r.value,(A,R)=>(Y(),Q("input",{key:R,ref_for:!0,ref:M=>{M&&(s.value[R]=M)},value:A,onInput:M=>h(R,M),onKeydown:M=>m(R,M),onPaste:x,type:"tel",inputmode:"numeric",maxlength:"1",class:rt(["w-11 h-12 sm:w-12 sm:h-12 text-center text-lg font-bold text-secondary-900 bg-secondary-50 border border-secondary-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all",{"border-primary-500 ring-2 ring-primary-500/20":A}])},null,42,p5))),128))]),c.value?(Y(),Q("p",m5,pe(c.value),1)):qt("",!0),_("div",g5,[_("div",_5,[et(Xe(uy),{class:"w-3.5 h-3.5"}),l.value>0?(Y(),Q("span",x5,"Resend in "+pe(l.value)+"s",1)):(Y(),Q("span",v5,"Code expired"))]),_("button",{onClick:g,disabled:l.value>0||a.value,class:rt(["text-[11px] font-semibold transition-colors cursor-pointer",l.value>0?"text-secondary-300 cursor-not-allowed":"text-primary-500 hover:text-primary-600"])},pe(a.value?"Sending...":"Resend Code"),11,y5)]),_("div",b5,[et(Xe(id),{class:"w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5"}),v[3]||(v[3]=_("p",{class:"text-[10px] text-secondary-500 leading-relaxed"}," Never share your OTP with anyone. Our team will never ask for this code. ",-1))]),_("button",{onClick:p,disabled:!f.value||o.value,class:rt(["w-full py-3 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer",f.value&&!o.value?"text-white shadow-lg hover:opacity-90 active:scale-[0.98]":"bg-secondary-200 text-secondary-400 cursor-not-allowed"]),style:Gt(f.value&&!o.value?{background:n.merchant.hexColor,boxShadow:`0 4px 15px ${n.merchant.hexColor}40`}:{})},[o.value?(Y(),Yn(Xe(fy),{key:0,class:"w-4 h-4 animate-spin"})):(Y(),Q(We,{key:1},[et(Xe(id),{class:"w-4 h-4"}),v[4]||(v[4]=_("span",null,"Verify & Redeem",-1))],64))],14,S5)])]))}},M5={class:"flex flex-col"},E5={class:"w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-sm mx-auto mb-3 flex items-center justify-center"},T5={class:"p-4 sm:p-5"},A5={class:"bg-white border border-secondary-200 rounded-xl p-4 sm:p-5 mb-4 shadow-sm"},C5={class:"text-2xl sm:text-3xl font-bold text-secondary-900 font-mono tracking-wider"},R5={class:"flex items-center gap-1.5 mt-1"},P5={class:"text-[10px] sm:text-[11px] text-secondary-500"},D5={class:"bg-secondary-50 border border-secondary-200 rounded-xl p-4 sm:p-5 mb-4"},L5={class:"flex items-center justify-between gap-2"},I5={class:"text-sm sm:text-base font-mono font-semibold text-secondary-900"},N5={class:"bg-secondary-50 border border-secondary-200 rounded-xl p-4 sm:p-5 mb-4"},U5={class:"space-y-2"},F5={class:"flex items-start gap-2"},O5={class:"text-[11px] text-secondary-600 leading-relaxed"},k5={class:"flex items-start gap-2 bg-secondary-50 border border-secondary-200 rounded-lg p-3 mb-4"},B5={__name:"RedemptionSuccess",props:{merchant:{type:Object,required:!0},referenceNumber:{type:String,default:""},redemptionCode:{type:String,default:"ABC12345"}},emits:["new-redemption"],setup(n,{emit:e}){const t=n,i=e,r=we(!1),s=Xt(()=>t.referenceNumber||"RDM-XXXXXX"),o=async()=>{try{await navigator.clipboard.writeText(s.value),r.value=!0,setTimeout(()=>{r.value=!1},2e3)}catch{r.value=!1}};return(a,l)=>(Y(),Q("div",M5,[_("div",{class:"px-4 sm:px-5 py-5 sm:py-6 flex-shrink-0 text-center",style:Gt({background:`linear-gradient(135deg, ${n.merchant.hexColor}, ${n.merchant.hexColor}cc)`})},[_("div",E5,[et(Xe(cy),{class:"w-7 h-7 sm:w-8 sm:h-8 text-white"})]),l[1]||(l[1]=_("div",{class:"text-white font-bold text-base sm:text-lg"},"Redemption Successful!",-1)),l[2]||(l[2]=_("div",{class:"text-white/70 text-[11px] sm:text-xs mt-1"},"Your eGift has been sent to your account",-1))],4),_("div",T5,[_("div",A5,[l[3]||(l[3]=_("div",{class:"text-[10px] sm:text-[11px] text-secondary-400 uppercase tracking-wider mb-1"},"Redemption Code",-1)),_("div",C5,pe(n.redemptionCode),1),_("div",R5,[et(Xe(Cu),{class:"w-3.5 h-3.5 text-primary-500"}),_("span",P5,pe(n.merchant.name)+" eGift",1)])]),_("div",D5,[l[4]||(l[4]=_("div",{class:"text-[10px] sm:text-[11px] text-secondary-400 uppercase tracking-wider mb-2"},"Reference Number",-1)),_("div",L5,[_("span",I5,pe(s.value),1),_("button",{onClick:o,class:"flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-secondary-200 text-[10px] sm:text-[11px] font-medium text-secondary-600 hover:border-primary-500 hover:text-primary-600 transition-colors cursor-pointer"},[r.value?(Y(),Yn(Xe(hP),{key:1,class:"w-3.5 h-3.5 text-primary-500"})):(Y(),Yn(Xe(yP),{key:0,class:"w-3.5 h-3.5"})),_("span",null,pe(r.value?"Copied!":"Copy"),1)])])]),_("div",N5,[l[7]||(l[7]=_("div",{class:"text-[10px] sm:text-[11px] text-secondary-400 uppercase tracking-wider mb-2"},"What's Next?",-1)),_("div",U5,[_("div",F5,[l[5]||(l[5]=_("div",{class:"w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0 mt-0.5"},[_("span",{class:"text-[9px] font-bold text-primary-600"},"1")],-1)),_("p",O5,"Check your "+pe(n.merchant.name)+" app for the eGift",1)]),l[6]||(l[6]=Rs('<div class="flex items-start gap-2"><div class="w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0 mt-0.5"><span class="text-[9px] font-bold text-primary-600">2</span></div><p class="text-[11px] text-secondary-600 leading-relaxed">Use the eGift at any participating merchant</p></div><div class="flex items-start gap-2"><div class="w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0 mt-0.5"><span class="text-[9px] font-bold text-primary-600">3</span></div><p class="text-[11px] text-secondary-600 leading-relaxed">Keep your reference number for support</p></div>',2))])]),_("div",k5,[et(Xe(id),{class:"w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5"}),l[8]||(l[8]=_("p",{class:"text-[10px] text-secondary-500 leading-relaxed"}," This transaction is protected. Contact support if you have any issues with your redemption. ",-1))]),_("button",{onClick:l[0]||(l[0]=c=>i("new-redemption")),class:"w-full py-3 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer",style:Gt({background:n.merchant.hexColor,boxShadow:`0 4px 15px ${n.merchant.hexColor}40`})},[et(Xe(py),{class:"w-4 h-4 text-white"}),l[9]||(l[9]=_("span",{class:"text-white"},"New Redemption",-1))],4)])]))}},z5={class:"flex flex-col h-full"},V5={class:"px-4 sm:px-5 py-3 sm:py-4 bg-white border-b border-secondary-200 flex-shrink-0"},H5={class:"flex items-center justify-between"},G5={class:"flex items-center gap-2.5"},W5={class:"flex items-center gap-2"},$5={class:"text-[10px] text-secondary-400"},X5={class:"px-4 sm:px-5 py-2.5 bg-white border-b border-secondary-200 flex-shrink-0 overflow-x-auto"},j5={class:"flex gap-1.5"},Y5=["onClick"],q5={class:"flex-1 overflow-y-auto min-h-0 overscroll-contain bg-secondary-50"},K5={key:0,class:"flex flex-col items-center justify-center py-12"},Z5={class:"w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center mb-3"},J5={key:1,class:"p-3 sm:p-4 space-y-2"},Q5={class:"flex items-start justify-between gap-2 mb-2"},e4={class:"flex items-center gap-2 min-w-0"},t4={class:"w-7 h-7 rounded-full bg-secondary-100 flex items-center justify-center flex-shrink-0"},n4={class:"min-w-0"},i4={class:"text-[11px] font-semibold text-secondary-900 truncate"},r4={class:"text-[9px] text-secondary-400 font-mono truncate"},s4={class:"flex items-center justify-between pl-9"},o4={class:"text-[10px] text-secondary-400"},a4={class:"text-[11px] font-bold text-secondary-900"},l4={__name:"RedemptionHistory",props:{items:{type:Array,default:()=>[]}},emits:["close"],setup(n,{emit:e}){const t=n,i=e,r=we("all"),s={processing:{label:"Processing",icon:uy,color:"text-yellow-500",bg:"bg-yellow-500/10",border:"border-yellow-500/20"},voided:{label:"Voided",icon:_P,color:"text-accent-500",bg:"bg-accent-500/10",border:"border-accent-500/20"},successful:{label:"Successful",icon:cy,color:"text-emerald-500",bg:"bg-emerald-500/10",border:"border-emerald-500/20"},redeemed:{label:"Redeemed",icon:py,color:"text-primary-500",bg:"bg-primary-500/10",border:"border-primary-500/20"},cancelled:{label:"Cancelled",icon:dP,color:"text-secondary-400",bg:"bg-secondary-400/10",border:"border-secondary-400/20"}},o=["all","processing","voided","successful","redeemed","cancelled"],a=Xt(()=>r.value==="all"?t.items:t.items.filter(c=>c.status===r.value)),l=c=>s[c]||s.processing;return(c,u)=>(Y(),Q("div",z5,[_("div",V5,[_("div",H5,[_("div",G5,[_("button",{onClick:u[0]||(u[0]=d=>i("close")),class:"w-8 h-8 rounded-full bg-secondary-100 hover:bg-secondary-200 flex items-center justify-center transition-colors cursor-pointer","aria-label":"Close history"},[et(Xe(ly),{class:"w-4 h-4 text-secondary-600"})]),_("div",W5,[et(Xe(hp),{class:"w-4 h-4 text-primary-500"}),u[1]||(u[1]=_("span",{class:"text-sm font-bold text-secondary-900"},"Redemption History",-1))])]),_("span",$5,pe(a.value.length)+" records",1)])]),_("div",X5,[_("div",j5,[(Y(),Q(We,null,it(o,d=>_("button",{key:d,onClick:f=>r.value=d,class:rt(["px-2.5 py-1 rounded-full text-[10px] font-medium whitespace-nowrap transition-all cursor-pointer",r.value===d?"bg-primary-500 text-white shadow-md shadow-primary-500/25":"bg-secondary-100 text-secondary-500 hover:bg-secondary-200"])},pe(d==="all"?"All":s[d].label),11,Y5)),64))])]),_("div",q5,[a.value.length===0?(Y(),Q("div",K5,[_("div",Z5,[et(Xe(hp),{class:"w-5 h-5 text-secondary-400"})]),u[2]||(u[2]=_("p",{class:"text-xs text-secondary-400"},"No redemption records found",-1))])):(Y(),Q("div",J5,[(Y(!0),Q(We,null,it(a.value,d=>(Y(),Q("div",{key:d.id,class:"bg-white border border-secondary-200 rounded-xl p-3 sm:p-3.5 hover:border-primary-500/30 hover:shadow-sm transition-all"},[_("div",Q5,[_("div",e4,[_("div",t4,[et(Xe(dy),{class:"w-3.5 h-3.5 text-secondary-500"})]),_("div",n4,[_("div",i4,pe(d.id),1),_("div",r4,pe(d.code),1)])]),_("span",{class:rt(["inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-medium border flex-shrink-0",[l(d.status).bg,l(d.status).color,l(d.status).border]])},[(Y(),Yn(A1(l(d.status).icon),{class:"w-3 h-3"})),qi(" "+pe(l(d.status).label),1)],2)]),_("div",s4,[_("span",o4,pe(d.date),1),_("span",a4,pe(d.amount),1)])]))),128))]))])]))}},c4={class:"w-full h-full bg-secondary-900 light:bg-secondary-100 overflow-y-auto relative flex flex-col"},u4={key:0,class:"flex items-center gap-2 px-3 sm:px-4 py-2 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},d4={class:"flex-1 max-w-md mx-auto"},f4={class:"bg-secondary-700/50 light:bg-secondary-100 rounded-md px-2 sm:px-3 py-1 text-[10px] sm:text-xs text-secondary-400 light:text-secondary-500 flex items-center gap-1.5 sm:gap-2 truncate"},h4={class:"truncate"},p4={class:"flex-1 flex items-center justify-center p-2 sm:p-4 mb-10"},m4={class:"w-full max-w-[430px] bg-white light:bg-white rounded-2xl shadow-2xl overflow-hidden relative flex flex-col border border-secondary-200 light:border-secondary-200"},g4={class:"px-4 sm:px-5 py-3 sm:py-4"},_4={class:"flex items-center justify-between"},x4={class:"flex items-center gap-2.5"},v4={class:"w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-md"},y4={key:0,class:"w-5 h-5 sm:w-6 sm:h-6",viewBox:"0 0 24 24",fill:"none"},b4={key:1,class:"w-5 h-5 sm:w-6 sm:h-6",viewBox:"0 0 24 24",fill:"none"},S4={key:2,class:"w-5 h-5 sm:w-6 sm:h-6",viewBox:"0 0 24 24",fill:"none"},w4={key:3,class:"w-5 h-5 sm:w-6 sm:h-6",viewBox:"0 0 24 24",fill:"none"},M4={key:4,class:"w-5 h-5 sm:w-6 sm:h-6",viewBox:"0 0 24 24",fill:"none"},E4={class:"flex flex-col"},T4={class:"text-white font-bold text-sm sm:text-base leading-tight"},A4={class:"text-white/70 text-[9px] sm:text-[10px]"},C4={class:"flex items-center gap-1.5"},R4={class:"relative"},P4={key:0,class:"absolute right-0 top-full mt-1 w-44 bg-white rounded-xl shadow-2xl border border-secondary-200 overflow-hidden z-30"},D4=["onClick"],L4={class:"text-[11px] font-medium text-secondary-700 flex-1 text-left"},I4=["aria-label"],N4={class:"bg-secondary-50 light:bg-secondary-50"},U4={key:0,class:"absolute inset-0 z-20 bg-secondary-50 light:bg-secondary-50"},F4={__name:"RedemptionApp",props:{showChrome:{type:Boolean,default:!0}},setup(n){const e=n,t=[{name:"GCash",vanityUrl:"gcash",hexColor:"#007CFF",tagline:"Redeem your eGift",logo:"gcash"},{name:"ShopeePay",vanityUrl:"shopeepay",hexColor:"#EE4D2D",tagline:"Redeem your eGift",logo:"shopeepay"},{name:"Maya",vanityUrl:"maya",hexColor:"#00A6A6",tagline:"Redeem your eGift",logo:"maya"},{name:"GrabPay",vanityUrl:"grabpay",hexColor:"#00B14F",tagline:"Redeem your eGift",logo:"grabpay"},{name:"Coins.ph",vanityUrl:"coinsph",hexColor:"#F7931A",tagline:"Redeem your eGift",logo:"coinsph"}],i=we(0),r=we(!1),s=Xt(()=>t[i.value]),o=we("form"),a=we(!1),l=we(!1),c=we({}),u=we(""),d=we([{id:"RDM-2024-001",code:"GC-4821-9034",amount:"₱500.00",date:"Aug 20, 2024",status:"successful"},{id:"RDM-2024-002",code:"GC-7712-4456",amount:"₱1,000.00",date:"Aug 18, 2024",status:"redeemed"},{id:"RDM-2024-003",code:"GC-3390-1287",amount:"₱250.00",date:"Aug 15, 2024",status:"processing"},{id:"RDM-2024-004",code:"GC-9054-6671",amount:"₱750.00",date:"Aug 12, 2024",status:"voided"},{id:"RDM-2024-005",code:"GC-1188-3390",amount:"₱300.00",date:"Aug 10, 2024",status:"cancelled"}]),f=b=>{i.value=b,r.value=!1,o.value="form",c.value={},u.value="",a.value=!1},h=b=>{c.value=b,l.value=!0,setTimeout(()=>{l.value=!1,o.value="otp"},1200)},m=()=>{u.value="RDM-"+Math.random().toString(36).slice(2,8).toUpperCase(),o.value="success"},x=()=>{o.value="form"},p=()=>{o.value="form",c.value={},u.value=""},g=()=>new Promise(b=>{setTimeout(b,800)});return(b,y)=>(Y(),Q("div",c4,[e.showChrome?(Y(),Q("div",u4,[y[4]||(y[4]=_("div",{class:"flex gap-1.5"},[_("span",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent-500"}),_("span",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"}),_("span",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary-500"})],-1)),_("div",d4,[_("div",f4,[y[3]||(y[3]=_("svg",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 8a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0115.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"})],-1)),_("span",h4,"https://redemption."+pe(s.value.vanityUrl)+".com/redeem",1)])])])):qt("",!0),_("div",p4,[_("div",m4,[_("div",{class:"flex-shrink-0 h-40",style:Gt({background:`linear-gradient(135deg, ${s.value.hexColor}, ${s.value.hexColor}cc)`})},[_("div",g4,[_("div",_4,[_("div",x4,[_("div",v4,[s.value.logo==="gcash"?(Y(),Q("svg",y4,[...y[5]||(y[5]=[_("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",fill:"#007CFF"},null,-1),_("path",{d:"M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z",fill:"#007CFF"},null,-1),_("circle",{cx:"12",cy:"12",r:"2",fill:"#007CFF"},null,-1)])])):s.value.logo==="shopeepay"?(Y(),Q("svg",b4,[...y[6]||(y[6]=[_("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",fill:"#EE4D2D"},null,-1),_("path",{d:"M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z",fill:"#EE4D2D"},null,-1),_("circle",{cx:"12",cy:"12",r:"2",fill:"#EE4D2D"},null,-1)])])):s.value.logo==="maya"?(Y(),Q("svg",S4,[...y[7]||(y[7]=[_("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",fill:"#00A6A6"},null,-1),_("path",{d:"M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z",fill:"#00A6A6"},null,-1),_("circle",{cx:"12",cy:"12",r:"2",fill:"#00A6A6"},null,-1)])])):s.value.logo==="grabpay"?(Y(),Q("svg",w4,[...y[8]||(y[8]=[_("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",fill:"#00B14F"},null,-1),_("path",{d:"M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z",fill:"#00B14F"},null,-1),_("circle",{cx:"12",cy:"12",r:"2",fill:"#00B14F"},null,-1)])])):(Y(),Q("svg",M4,[...y[9]||(y[9]=[_("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",fill:"#F7931A"},null,-1),_("path",{d:"M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z",fill:"#F7931A"},null,-1),_("circle",{cx:"12",cy:"12",r:"2",fill:"#F7931A"},null,-1)])]))]),_("div",E4,[_("div",T4,pe(s.value.name),1),_("div",A4,pe(s.value.tagline),1)])]),_("div",C4,[_("div",R4,[_("button",{onClick:y[0]||(y[0]=v=>r.value=!r.value),class:"w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors cursor-pointer","aria-label":"Switch merchant"},[et(Xe(PP),{class:"w-4 h-4 sm:w-4.5 sm:h-4.5 text-white"})]),et(Na,{name:"dropdown"},{default:Uo(()=>[r.value?(Y(),Q("div",P4,[y[10]||(y[10]=_("div",{class:"px-3 py-2 text-[9px] font-semibold text-secondary-400 uppercase tracking-wider border-b border-secondary-100"},"Partnered Merchants",-1)),(Y(),Q(We,null,it(t,(v,A)=>_("button",{key:v.vanityUrl,onClick:R=>f(A),class:"w-full px-3 py-2.5 flex items-center gap-2.5 hover:bg-secondary-50 transition-colors cursor-pointer"},[_("span",{class:"w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0",style:Gt({background:v.hexColor})},[et(Xe(dy),{class:"w-2.5 h-2.5 text-white"})],4),_("span",L4,pe(v.name),1),i.value===A?(Y(),Q("span",{key:0,class:"w-1.5 h-1.5 rounded-full",style:Gt({background:v.hexColor})},null,4)):qt("",!0)],8,D4)),64))])):qt("",!0)]),_:1})]),_("button",{onClick:y[1]||(y[1]=v=>a.value=!a.value),class:"w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors cursor-pointer","aria-label":a.value?"Close history":"View redemption history"},[et(Xe(hp),{class:"w-4 h-4 sm:w-4.5 sm:h-4.5 text-white"})],8,I4)])])])],4),_("div",N4,[et(Na,{name:"fade-slide"},{default:Uo(()=>[a.value?(Y(),Q("div",U4,[et(l4,{items:d.value,onClose:y[2]||(y[2]=v=>a.value=!1)},null,8,["items"])])):qt("",!0)]),_:1}),_("div",null,[o.value==="form"?(Y(),Yn(o5,{key:0,merchant:s.value,"is-submitting":l.value,onSubmit:h},null,8,["merchant","is-submitting"])):o.value==="otp"?(Y(),Yn(w5,{key:1,merchant:s.value,phone:c.value.mobileno,onVerified:m,onBack:x,onResend:g},null,8,["merchant","phone"])):(Y(),Yn(B5,{key:2,merchant:s.value,"reference-number":u.value,"redemption-code":c.value.redemptionCode||"ABC12345",onNewRedemption:p},null,8,["merchant","reference-number","redemption-code"]))])])])])]))}},my=Ks(F4,[["__scopeId","data-v-b1ed1387"]]),O4={class:"w-full h-full bg-secondary-900 light:bg-secondary-100 overflow-hidden relative flex flex-col"},k4={class:"flex items-center gap-2 px-3 sm:px-4 py-2 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},B4={class:"flex-1 max-w-md mx-auto"},z4={class:"bg-secondary-700/50 light:bg-secondary-100 rounded-md px-2 sm:px-3 py-1 text-[10px] sm:text-xs text-secondary-400 light:text-secondary-500 flex items-center gap-1.5 sm:gap-2 truncate"},V4={class:"truncate"},H4={key:1,class:"flex-1 flex flex-col min-h-0 relative"},G4={class:"flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},W4={class:"flex items-center gap-2 sm:gap-4"},$4={key:0,class:"absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-accent-500 rounded-full text-[8px] sm:text-[9px] text-white flex items-center justify-center font-bold"},X4={class:"flex-1 p-3 sm:p-4 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 overflow-y-auto min-h-0 overscroll-contain"},j4={class:"text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 mb-1 truncate"},Y4={class:"flex items-center justify-between"},q4={class:"text-[10px] sm:text-xs font-semibold text-primary-500"},K4=["onClick"],Z4={key:0,class:"absolute inset-y-0 right-0 w-64 sm:w-80 bg-secondary-800 light:bg-white border-l border-secondary-700 light:border-secondary-200 shadow-2xl z-20 flex flex-col"},J4={class:"flex items-center justify-between px-4 py-3 border-b border-secondary-700 light:border-secondary-200"},Q4={class:"flex-1 overflow-y-auto p-4 space-y-3 overscroll-contain"},eD={key:0,class:"text-center py-8"},tD={class:"flex-1 min-w-0"},nD={class:"text-[10px] text-white light:text-secondary-900 font-medium truncate"},iD={class:"text-[9px] text-primary-500"},rD={class:"flex items-center gap-1.5"},sD=["onClick"],oD={class:"text-[10px] text-white light:text-secondary-900 w-4 text-center"},aD=["onClick"],lD={class:"p-4 border-t border-secondary-700 light:border-secondary-200"},cD={class:"flex justify-between mb-3"},uD={class:"text-sm font-bold text-white light:text-secondary-900"},dD={key:2,class:"flex-1 flex flex-col min-h-0"},fD={class:"px-3 sm:px-6 py-2.5 bg-secondary-800/50 light:bg-secondary-100/50 border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},hD={class:"flex gap-2"},pD=["value"],mD={class:"flex-1 p-2 sm:p-4 flex gap-2 sm:gap-3 overflow-x-auto min-h-0"},gD={class:"flex-1 min-w-[140px] sm:min-w-0 bg-secondary-800/50 light:bg-secondary-200/50 rounded-lg p-2 sm:p-2.5 flex flex-col"},_D={class:"flex items-center justify-between mb-2 px-1 flex-shrink-0"},xD={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400"},vD={class:"space-y-1.5 sm:space-y-2 overflow-y-auto flex-1 min-h-0 overscroll-contain"},yD=["onClick"],bD={class:"flex items-start gap-1.5"},SD=["onClick"],wD={class:"flex-1 min-w-0"},MD={class:"text-[9px] sm:text-[10px] text-white light:text-secondary-900 leading-tight"},ED={class:"flex-1 min-w-[140px] sm:min-w-0 bg-secondary-800/50 light:bg-secondary-200/50 rounded-lg p-2 sm:p-2.5 flex flex-col"},TD={class:"flex items-center justify-between mb-2 px-1 flex-shrink-0"},AD={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400"},CD={class:"space-y-1.5 sm:space-y-2 overflow-y-auto flex-1 min-h-0 overscroll-contain"},RD=["onClick"],PD={class:"flex items-start gap-1.5"},DD=["onClick"],LD={class:"flex-1 min-w-0"},ID={class:"text-[9px] sm:text-[10px] text-white light:text-secondary-900 leading-tight"},ND={class:"flex-1 min-w-[140px] sm:min-w-0 bg-secondary-800/50 light:bg-secondary-200/50 rounded-lg p-2 sm:p-2.5 flex flex-col"},UD={class:"flex items-center justify-between mb-2 px-1 flex-shrink-0"},FD={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400"},OD={class:"space-y-1.5 sm:space-y-2 overflow-y-auto flex-1 min-h-0 overscroll-contain"},kD=["onClick"],BD={class:"flex items-start gap-1.5"},zD={class:"flex-1 min-w-0"},VD={class:"text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 line-through leading-tight"},HD={key:3,class:"flex-1 flex flex-col min-h-0"},GD={class:"flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},WD={class:"flex items-center gap-2"},$D={class:"flex rounded-lg overflow-hidden border border-secondary-600 light:border-secondary-200"},XD={class:"px-3 sm:px-6 py-2.5 bg-secondary-800/50 light:bg-secondary-100/50 border-b border-secondary-700 light:border-secondary-200 flex-shrink-0 relative"},jD={class:"flex gap-2"},YD={class:"flex-1 relative"},qD={key:0,class:"absolute left-3 sm:left-6 right-3 sm:right-6 top-full mt-1 bg-secondary-800 light:bg-white border border-secondary-700 light:border-secondary-200 rounded-lg shadow-xl z-10 overflow-hidden"},KD=["onClick"],ZD={class:"ml-auto text-secondary-500 light:text-secondary-400"},JD={class:"px-3 sm:px-6 py-3 sm:py-4 bg-gradient-to-br from-primary-600/30 to-primary-500/10 flex-shrink-0"},QD={class:"flex items-center justify-between"},eL={class:"text-2xl sm:text-3xl font-bold text-white light:text-secondary-900"},tL={class:"text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 mt-0.5"},nL={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mt-0.5"},iL={class:"text-4xl sm:text-5xl"},rL={class:"px-3 sm:px-6 py-2.5 flex-shrink-0"},sL={class:"flex gap-1.5 sm:gap-2 overflow-x-auto"},oL={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5"},aL={class:"text-sm sm:text-base mb-0.5"},lL={class:"text-[9px] sm:text-[10px] font-semibold text-white light:text-secondary-900"},cL={class:"flex-1 px-3 sm:px-6 pb-3 sm:pb-4 min-h-0 overflow-y-auto overscroll-contain"},uL={class:"space-y-1 sm:space-y-1.5"},dL={class:"text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 w-8 sm:w-10"},fL={class:"text-sm sm:text-base"},hL={class:"flex-1 mx-2 sm:mx-3 h-1 bg-secondary-700 light:bg-secondary-200 rounded-full overflow-hidden"},pL={class:"text-[9px] sm:text-[10px] text-white light:text-secondary-900 font-semibold w-10 sm:w-12 text-right"},mL={key:4,class:"flex-1 flex flex-col min-h-0"},gL={class:"flex-1 flex overflow-hidden min-h-0"},_L={class:"w-10 sm:w-14 bg-secondary-800 light:bg-white border-r border-secondary-700 light:border-secondary-200 flex flex-col items-center py-2 sm:py-3 gap-2 sm:gap-3 flex-shrink-0"},xL={class:"flex-1 p-2 sm:p-4 overflow-y-auto min-h-0 overscroll-contain"},vL={class:"flex gap-1.5 sm:gap-2 mb-3 flex-wrap"},yL=["onClick"],bL={class:"grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-3"},SL={class:"bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-3 border border-secondary-700 light:border-secondary-200"},wL={class:"text-sm sm:text-lg font-bold text-white light:text-secondary-900"},ML={class:"bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-3 border border-secondary-700 light:border-secondary-200"},EL={class:"text-sm sm:text-lg font-bold text-white light:text-secondary-900"},TL={class:"bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-3 border border-secondary-700 light:border-secondary-200"},AL={class:"text-sm sm:text-lg font-bold text-white light:text-secondary-900"},CL={class:"bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-3 border border-secondary-700 light:border-secondary-200"},RL={class:"text-sm sm:text-lg font-bold text-white light:text-secondary-900"},PL={class:"bg-secondary-800 light:bg-white rounded-lg p-2.5 sm:p-3 border border-secondary-700 light:border-secondary-200 mb-3"},DL={class:"h-20 sm:h-24 flex items-end gap-1"},LL=["onMouseenter","onMouseleave"],IL={class:"text-[6px] sm:text-[7px] text-secondary-500 light:text-secondary-400"},NL={class:"grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3"},UL={class:"bg-secondary-800 light:bg-white rounded-lg p-2.5 sm:p-3 border border-secondary-700 light:border-secondary-200"},FL={class:"space-y-1.5 sm:space-y-2"},OL=["onClick"],kL={class:"text-[8px] sm:text-[9px] text-secondary-400 light:text-secondary-500 flex-1"},BL={class:"text-[8px] sm:text-[9px] font-semibold text-white light:text-secondary-900"},zL={class:"bg-secondary-800 light:bg-white rounded-lg p-2.5 sm:p-3 border border-secondary-700 light:border-secondary-200"},VL={class:"space-y-1.5 sm:space-y-2"},HL={class:"text-[8px] sm:text-[9px] text-primary-500"},GL={key:5,class:"flex-1 flex flex-col min-h-0"},WL={class:"px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},$L={class:"flex gap-1.5 sm:gap-2"},XL={class:"flex-1 relative"},jL={class:"px-3 sm:px-6 py-2 flex gap-1.5 sm:gap-2 overflow-x-auto flex-shrink-0"},YL=["onClick"],qL={class:"flex-1 px-3 sm:px-6 pb-3 sm:pb-4 grid grid-cols-2 gap-2 sm:gap-3 overflow-y-auto min-h-0 overscroll-contain"},KL=["onClick"],ZL={class:"absolute top-1.5 right-1.5 bg-accent-500 text-white text-[7px] sm:text-[8px] px-1.5 py-0.5 rounded-full font-medium"},JL={class:"p-2 sm:p-2.5"},QL={class:"text-[9px] sm:text-[10px] text-white light:text-secondary-900 font-medium mb-1 truncate"},eI={class:"flex items-center gap-1"},tI={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400"},nI={class:"ml-auto text-[7px] sm:text-[8px] text-secondary-500 light:text-secondary-400"},iI={key:0,class:"col-span-2 text-center py-8"},rI={class:"flex items-start justify-between mb-3"},sI={class:"text-3xl"},oI={class:"text-sm font-bold text-white light:text-secondary-900 mb-1"},aI={class:"flex items-center gap-2 mb-3"},lI={class:"text-yellow-500 text-xs"},cI={class:"text-[9px] text-secondary-500 light:text-secondary-400"},uI={class:"text-[9px] text-secondary-500 light:text-secondary-400"},dI={class:"space-y-2 mb-4"},fI={key:6,class:"flex-1 flex flex-col min-h-0"},hI={class:"flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},pI={class:"flex gap-2 sm:gap-4 text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500"},mI=["onClick"],gI={class:"flex-1 overflow-y-auto min-h-0 overscroll-contain"},_I={key:0,class:"h-full flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-secondary-800 to-secondary-900 light:from-white light:to-secondary-100"},xI={class:"text-center"},vI={class:"flex gap-2 justify-center"},yI={key:1,class:"p-4 sm:p-6"},bI={class:"space-y-2 mb-4"},SI={class:"grid grid-cols-2 gap-2"},wI={class:"text-[9px] sm:text-[10px] text-primary-500 font-medium"},MI={class:"mt-1.5 h-1 bg-secondary-700 light:bg-secondary-200 rounded-full overflow-hidden"},EI={key:2,class:"p-4 sm:p-6"},TI={class:"grid grid-cols-2 gap-2 sm:gap-3"},AI={key:3,class:"p-4 sm:p-6"},CI={class:"px-3 sm:px-6 py-2 sm:py-3 bg-secondary-800 light:bg-white border-t border-secondary-700 light:border-secondary-200 flex-shrink-0"},RI={class:"flex justify-center gap-1.5 sm:gap-3 overflow-x-auto"},PI={key:7,class:"flex-1 flex flex-col min-h-0"},DI={class:"flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},LI={class:"text-xs sm:text-sm font-bold text-primary-500"},II={class:"flex gap-2 sm:gap-3 text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500"},NI=["onClick"],UI={class:"flex-1 overflow-y-auto min-h-0 overscroll-contain"},FI={key:0,class:"h-full flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-primary-600/20 to-primary-500/5"},OI={class:"text-center max-w-sm"},kI={class:"text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-1.5"},BI={class:"text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 mb-3 sm:mb-4 leading-relaxed"},zI={class:"flex gap-1.5 sm:gap-2 justify-center flex-wrap"},VI={key:1,class:"p-4 sm:p-6"},HI={class:"space-y-2"},GI={class:"text-[9px] sm:text-[10px] text-secondary-300 light:text-secondary-600 leading-relaxed"},WI={key:2,class:"p-4 sm:p-6"},$I={class:"space-y-2"},XI={__name:"ProjectPreview",props:{project:{type:Object,required:!0}},setup(n){const e=n,t=Xt(()=>{const ce=e.project.title.toLowerCase();return ce.includes("redemption")||ce.includes("merchant")?"redemption":ce.includes("e-commerce")?"ecommerce":ce.includes("task")?"task":ce.includes("weather")?"weather":ce.includes("social")||ce.includes("analytics")?"analytics":ce.includes("recipe")?"recipe":ce.includes("portfolio")||ce.includes("template")?"portfolio":"generic"}),i=[{id:1,name:"Wireless Headphones",price:89,emoji:"🎧",color:"from-purple-500 to-indigo-500"},{id:2,name:"Smart Watch",price:199,emoji:"⌚",color:"from-blue-500 to-cyan-500"},{id:3,name:"Laptop Stand",price:45,emoji:"💻",color:"from-emerald-500 to-teal-500"},{id:4,name:"Mechanical Keyboard",price:129,emoji:"⌨️",color:"from-amber-500 to-orange-500"},{id:5,name:"USB-C Hub",price:59,emoji:"🔌",color:"from-rose-500 to-pink-500"},{id:6,name:"Desk Lamp",price:35,emoji:"💡",color:"from-yellow-500 to-amber-500"}],r=xa([]),s=we(!1),o=Xt(()=>r.reduce((ce,E)=>ce+E.qty,0)),a=Xt(()=>r.reduce((ce,E)=>ce+E.price*E.qty,0)),l=ce=>{const E=r.find(C=>C.id===ce.id);E?E.qty++:r.push({...ce,qty:1})},c=ce=>{const E=r.findIndex(C=>C.id===ce);E!==-1&&r.splice(E,1)},u=(ce,E)=>{const C=r.find(H=>H.id===ce);C&&(C.qty+=E,C.qty<=0&&c(ce))},d=xa({todo:[{id:1,title:"Design landing page",tag:"Design",tagColor:"bg-purple-500/20 text-purple-400",done:!1},{id:2,title:"Set up database schema",tag:"Backend",tagColor:"bg-blue-500/20 text-blue-400",done:!1},{id:3,title:"Write API endpoints",tag:"Backend",tagColor:"bg-blue-500/20 text-blue-400",done:!1}],progress:[{id:4,title:"Build auth system",tag:"Frontend",tagColor:"bg-emerald-500/20 text-emerald-400",done:!1},{id:5,title:"Implement dark mode",tag:"UI",tagColor:"bg-amber-500/20 text-amber-400",done:!1}],done:[{id:6,title:"Project setup",tag:"Setup",tagColor:"bg-gray-500/20 text-gray-400",done:!0},{id:7,title:"Create wireframes",tag:"Design",tagColor:"bg-purple-500/20 text-purple-400",done:!0},{id:8,title:"Configure CI/CD",tag:"DevOps",tagColor:"bg-rose-500/20 text-rose-400",done:!0}]}),f=we(""),h=we("General"),m=["General","Design","Frontend","Backend","UI","DevOps"],x=()=>{f.value.trim()&&(d.todo.push({id:Date.now(),title:f.value.trim(),tag:h.value,tagColor:"bg-primary-500/20 text-primary-400",done:!1}),f.value="")},p=(ce,E)=>{const C=d[ce].find(H=>H.id===E);if(C)if(C.done=!C.done,C.done){const H=d[ce].findIndex(q=>q.id===E),[ne]=d[ce].splice(H,1);d.done.push(ne)}else{const H=d.done.findIndex(q=>q.id===E),[ne]=d.done.splice(H,1);d.todo.push(ne)}},g=(ce,E,C)=>{const H=d[ce].findIndex(q=>q.id===C);if(H===-1)return;const[ne]=d[ce].splice(H,1);d[E].push(ne)},b={Manila:{temp:28,condition:"Partly Cloudy",emoji:"⛅",humidity:72,wind:12},Tokyo:{temp:22,condition:"Clear Sky",emoji:"☀️",humidity:55,wind:8},"New York":{temp:18,condition:"Rainy",emoji:"🌧️",humidity:85,wind:20},London:{temp:15,condition:"Cloudy",emoji:"☁️",humidity:78,wind:15},Sydney:{temp:25,condition:"Sunny",emoji:"🌤️",humidity:60,wind:10}},y=we("Manila"),v=we(""),A=we("C"),R=Xt(()=>b[y.value]||b.Manila),M=Xt(()=>{const ce=R.value.temp;return A.value==="C"?ce:Math.round(ce*9/5+32)}),S=Xt(()=>{const ce=R.value.temp;return Array.from({length:6},(E,C)=>({time:`${(C+1)*3}:00`,temp:ce+[0,2,3,1,-1,-2][C],emoji:["⛅","☀️","☀️","⛅","☁️","🌙"][C]}))}),T=Xt(()=>{const ce=R.value.temp;return["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((C,H)=>({day:C,high:ce+[2,4,3,5,1,0,-1][H],low:ce-[4,3,5,2,6,5,7][H],emoji:["⛅","☀️","🌧️","⛅","☀️","☁️","🌧️"][H]}))}),U=Xt(()=>{const ce=v.value.toLowerCase();return ce?Object.keys(b).filter(E=>E.toLowerCase().includes(ce)):Object.keys(b)}),I=ce=>{y.value=ce,v.value=""},L=xa({followers:12800,engagement:4.2,reach:45200,posts:128}),G=we("All"),B=["All","Instagram","Twitter","LinkedIn"],V={All:{followers:12800,engagement:4.2,reach:45200,posts:128},Instagram:{followers:8500,engagement:5.1,reach:28e3,posts:64},Twitter:{followers:3200,engagement:3.4,reach:12e3,posts:42},LinkedIn:{followers:1100,engagement:2.8,reach:5200,posts:22}},$=Xt(()=>{const E=(V[G.value]||V.All).followers/12800;return[30,45,38,60,52,75,68,90,82,100,88,95].map((C,H)=>({value:Math.round(C*E),label:["J","F","M","A","M","J","J","A","S","O","N","D"][H]}))}),k=ce=>{G.value=ce;const E=V[ce]||V.All;L.followers=E.followers,L.engagement=E.engagement,L.reach=E.reach,L.posts=E.posts},Z=[{id:1,name:"Creamy Garlic Pasta",time:25,rating:4.5,emoji:"🍝",category:"Dinner",color:"from-amber-500/40 to-orange-500/40"},{id:2,name:"Avocado Toast",time:10,rating:4.2,emoji:"🥑",category:"Breakfast",color:"from-emerald-500/40 to-green-500/40"},{id:3,name:"Chocolate Cake",time:45,rating:4.8,emoji:"🍰",category:"Dessert",color:"from-rose-500/40 to-pink-500/40"},{id:4,name:"Chicken Stir Fry",time:20,rating:3.9,emoji:"🍗",category:"Lunch",color:"from-red-500/40 to-orange-500/40"},{id:5,name:"Berry Smoothie",time:5,rating:4.6,emoji:"🥤",category:"Breakfast",color:"from-purple-500/40 to-indigo-500/40"},{id:6,name:"Beef Tacos",time:30,rating:4.4,emoji:"🌮",category:"Dinner",color:"from-yellow-500/40 to-amber-500/40"}],j=we("All"),F=we(""),ue=we(null),ge=["All","Breakfast","Lunch","Dinner","Dessert"],_e=Xt(()=>Z.filter(ce=>{const E=j.value==="All"||ce.category===j.value,C=ce.name.toLowerCase().includes(F.value.toLowerCase());return E&&C})),ye=ce=>{ue.value=ce},Ae=we("home"),ee=["home","about","projects","contact"],fe=ce=>{Ae.value=ce},le=we("home"),Pe=["home","features","about"],Ce=ce=>{le.value=ce};return(ce,E)=>(Y(),Q("div",O4,[_("div",k4,[E[16]||(E[16]=_("div",{class:"flex gap-1.5"},[_("span",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent-500"}),_("span",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"}),_("span",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary-500"})],-1)),_("div",B4,[_("div",z4,[E[15]||(E[15]=_("svg",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 8a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0115.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"})],-1)),_("span",V4,pe(n.project.demo),1)])])]),t.value==="redemption"?(Y(),Yn(my,{key:0,"show-chrome":!1,class:"flex-1 min-h-0"})):t.value==="ecommerce"?(Y(),Q("div",H4,[_("div",G4,[E[19]||(E[19]=_("div",{class:"text-primary-500 font-bold text-xs sm:text-sm"},"🛍️ ShopHub",-1)),_("div",W4,[E[18]||(E[18]=_("div",{class:"hidden sm:flex gap-3 text-[10px] text-secondary-400 light:text-secondary-500"},[_("span",{class:"cursor-pointer hover:text-primary-500 transition-colors"},"Home"),_("span",{class:"cursor-pointer hover:text-primary-500 transition-colors"},"Products"),_("span",{class:"cursor-pointer hover:text-primary-500 transition-colors"},"About")],-1)),_("button",{onClick:E[0]||(E[0]=C=>s.value=!s.value),class:"relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-500/20 flex items-center justify-center hover:bg-primary-500/30 transition-colors cursor-pointer","aria-label":"Open cart"},[E[17]||(E[17]=_("svg",{class:"w-4 h-4 sm:w-5 sm:h-5 text-primary-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})],-1)),o.value>0?(Y(),Q("span",$4,pe(o.value),1)):qt("",!0)])])]),E[25]||(E[25]=Rs('<div class="px-3 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-primary-500 flex-shrink-0" data-v-67e9e612><div class="text-white" data-v-67e9e612><div class="text-[9px] sm:text-[10px] uppercase tracking-wider opacity-80 mb-1" data-v-67e9e612>Summer Sale</div><div class="text-xs sm:text-sm font-bold mb-1.5 sm:mb-2" data-v-67e9e612>Up to 50% Off Everything</div><div class="inline-block bg-white text-primary-600 text-[9px] sm:text-[10px] font-semibold px-2.5 sm:px-3 py-1 rounded-full cursor-pointer hover:bg-primary-50 transition-colors" data-v-67e9e612>Shop Now →</div></div></div>',1)),_("div",X4,[(Y(),Q(We,null,it(i,C=>_("div",{key:C.id,class:"bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-2.5 border border-secondary-700 light:border-secondary-200 hover:border-primary-500/50 transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-primary-500/10"},[_("div",{class:rt(["aspect-square rounded-md bg-gradient-to-br mb-2 flex items-center justify-center text-2xl sm:text-3xl",C.color])},[_("span",null,pe(C.emoji),1)],2),_("div",j4,pe(C.name),1),_("div",Y4,[_("div",q4,"$"+pe(C.price),1),_("button",{onClick:Ds(H=>l(C),["stop"]),class:"w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary-500 hover:bg-primary-400 flex items-center justify-center transition-colors cursor-pointer","aria-label":"Add to cart"},[...E[20]||(E[20]=[_("svg",{class:"w-3 h-3 sm:w-3.5 sm:h-3.5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"})],-1)])],8,K4)])])),64))]),et(Na,{name:"slide"},{default:Uo(()=>[s.value?(Y(),Q("div",Z4,[_("div",J4,[E[22]||(E[22]=_("span",{class:"text-xs font-semibold text-white light:text-secondary-900"},"Shopping Cart",-1)),_("button",{onClick:E[1]||(E[1]=C=>s.value=!1),class:"text-secondary-400 hover:text-white light:hover:text-secondary-900 transition-colors cursor-pointer","aria-label":"Close cart"},[...E[21]||(E[21]=[_("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),_("div",Q4,[r.length===0?(Y(),Q("div",eD,[...E[23]||(E[23]=[_("div",{class:"text-3xl mb-2"},"🛒",-1),_("p",{class:"text-xs text-secondary-400 light:text-secondary-500"},"Your cart is empty",-1),_("p",{class:"text-[10px] text-secondary-500 light:text-secondary-400 mt-1"},"Add some products!",-1)])])):qt("",!0),(Y(!0),Q(We,null,it(r,C=>(Y(),Q("div",{key:C.id,class:"flex items-center gap-3 bg-secondary-700/50 light:bg-secondary-100 rounded-lg p-2.5"},[_("div",{class:rt(["w-8 h-8 rounded-md bg-gradient-to-br flex items-center justify-center text-sm flex-shrink-0",C.color])},pe(C.emoji),3),_("div",tD,[_("div",nD,pe(C.name),1),_("div",iD,"$"+pe(C.price),1)]),_("div",rD,[_("button",{onClick:H=>u(C.id,-1),class:"w-4 h-4 rounded bg-secondary-600 light:bg-secondary-200 text-white light:text-secondary-900 text-[9px] flex items-center justify-center hover:bg-accent-500 transition-colors cursor-pointer"},"−",8,sD),_("span",oD,pe(C.qty),1),_("button",{onClick:H=>u(C.id,1),class:"w-4 h-4 rounded bg-secondary-600 light:bg-secondary-200 text-white light:text-secondary-900 text-[9px] flex items-center justify-center hover:bg-primary-500 transition-colors cursor-pointer"},"+",8,aD)])]))),128))]),_("div",lD,[_("div",cD,[E[24]||(E[24]=_("span",{class:"text-[10px] text-secondary-400 light:text-secondary-500"},"Total",-1)),_("span",uD,"$"+pe(a.value.toFixed(2)),1)]),_("button",{onClick:E[2]||(E[2]=C=>s.value=!1),class:"w-full py-2 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-[10px] font-semibold transition-colors cursor-pointer"}," Checkout ")])])):qt("",!0)]),_:1})])):t.value==="task"?(Y(),Q("div",dD,[E[30]||(E[30]=Rs('<div class="flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0" data-v-67e9e612><div class="flex items-center gap-2" data-v-67e9e612><div class="w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary-500 flex items-center justify-center" data-v-67e9e612><svg class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-67e9e612><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" data-v-67e9e612></path></svg></div><span class="text-xs sm:text-sm font-semibold text-white light:text-secondary-900" data-v-67e9e612>TaskFlow</span></div><div class="flex items-center gap-1.5 sm:gap-2" data-v-67e9e612><div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary-500/20 flex items-center justify-center text-[9px] sm:text-[10px] text-primary-500 font-bold" data-v-67e9e612>+</div><div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent-500/20 flex items-center justify-center text-[9px] sm:text-[10px] text-accent-500 font-bold" data-v-67e9e612>A</div><div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-[9px] sm:text-[10px] text-yellow-500 font-bold" data-v-67e9e612>B</div></div></div>',1)),_("div",fD,[_("div",hD,[wc(_("input",{"onUpdate:modelValue":E[3]||(E[3]=C=>f.value=C),onKeyup:Xb(x,["enter"]),type:"text",placeholder:"Add a new task...",class:"flex-1 bg-secondary-700/50 light:bg-white border border-secondary-600 light:border-secondary-200 rounded-lg px-3 py-1.5 text-[10px] sm:text-xs text-white light:text-secondary-900 placeholder-secondary-500 light:placeholder-secondary-400 focus:outline-none focus:border-primary-500 transition-colors"},null,544),[[zd,f.value]]),wc(_("select",{"onUpdate:modelValue":E[4]||(E[4]=C=>h.value=C),class:"bg-secondary-700/50 light:bg-white border border-secondary-600 light:border-secondary-200 rounded-lg px-2 py-1.5 text-[9px] sm:text-[10px] text-secondary-300 light:text-secondary-600 focus:outline-none focus:border-primary-500 transition-colors cursor-pointer"},[(Y(),Q(We,null,it(m,C=>_("option",{key:C,value:C},pe(C),9,pD)),64))],512),[[Hb,h.value]]),_("button",{onClick:x,class:"px-3 py-1.5 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-[10px] sm:text-xs font-semibold transition-colors cursor-pointer flex-shrink-0"}," Add ")])]),_("div",mD,[_("div",gD,[_("div",_D,[E[26]||(E[26]=_("span",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500"},"TO DO",-1)),_("span",xD,pe(d.todo.length),1)]),_("div",vD,[(Y(!0),Q(We,null,it(d.todo,C=>(Y(),Q("div",{key:C.id,class:"bg-secondary-800 light:bg-white rounded-md p-2 sm:p-2.5 border border-secondary-700 light:border-secondary-200 hover:border-primary-500/40 transition-colors cursor-pointer group",onClick:H=>g("todo","progress",C.id)},[_("div",bD,[_("button",{onClick:Ds(H=>p("todo",C.id),["stop"]),class:"w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-secondary-500 light:border-secondary-300 flex-shrink-0 mt-0.5 hover:border-primary-500 transition-colors cursor-pointer","aria-label":"Mark as done"},null,8,SD),_("div",wD,[_("div",MD,pe(C.title),1),_("span",{class:rt(["inline-block mt-1 px-1.5 py-0.5 rounded-full text-[7px] sm:text-[8px] font-medium",C.tagColor])},pe(C.tag),3)])])],8,yD))),128))])]),_("div",ED,[_("div",TD,[E[27]||(E[27]=_("span",{class:"text-[9px] sm:text-[10px] font-semibold text-primary-500"},"IN PROGRESS",-1)),_("span",AD,pe(d.progress.length),1)]),_("div",CD,[(Y(!0),Q(We,null,it(d.progress,C=>(Y(),Q("div",{key:C.id,class:"bg-secondary-800 light:bg-white rounded-md p-2 sm:p-2.5 border border-primary-500/30 hover:border-primary-500/60 transition-colors cursor-pointer group",onClick:H=>g("progress","done",C.id)},[_("div",PD,[_("button",{onClick:Ds(H=>p("progress",C.id),["stop"]),class:"w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-primary-500 flex-shrink-0 mt-0.5 hover:bg-primary-500/20 transition-colors cursor-pointer","aria-label":"Mark as done"},null,8,DD),_("div",LD,[_("div",ID,pe(C.title),1),_("span",{class:rt(["inline-block mt-1 px-1.5 py-0.5 rounded-full text-[7px] sm:text-[8px] font-medium",C.tagColor])},pe(C.tag),3)])])],8,RD))),128))])]),_("div",ND,[_("div",UD,[E[28]||(E[28]=_("span",{class:"text-[9px] sm:text-[10px] font-semibold text-primary-500"},"DONE",-1)),_("span",FD,pe(d.done.length),1)]),_("div",OD,[(Y(!0),Q(We,null,it(d.done,C=>(Y(),Q("div",{key:C.id,class:"bg-secondary-800 light:bg-white rounded-md p-2 sm:p-2.5 border border-secondary-700 light:border-secondary-200 opacity-70 hover:opacity-100 transition-opacity cursor-pointer",onClick:H=>p("done",C.id)},[_("div",BD,[E[29]||(E[29]=_("div",{class:"w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 mt-0.5"},[_("svg",{class:"w-2 h-2 sm:w-2.5 sm:h-2.5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M5 13l4 4L19 7"})])],-1)),_("div",zD,[_("div",VD,pe(C.title),1),_("span",{class:rt(["inline-block mt-1 px-1.5 py-0.5 rounded-full text-[7px] sm:text-[8px] font-medium",C.tagColor])},pe(C.tag),3)])])],8,kD))),128))])])])])):t.value==="weather"?(Y(),Q("div",HD,[_("div",GD,[E[31]||(E[31]=_("div",{class:"flex items-center gap-2"},[_("span",{class:"text-base sm:text-lg"},"🌤️"),_("span",{class:"text-xs sm:text-sm font-semibold text-white light:text-secondary-900"},"SkyCast")],-1)),_("div",WD,[_("div",$D,[_("button",{onClick:E[5]||(E[5]=C=>A.value="C"),class:rt(["px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold transition-colors cursor-pointer",A.value==="C"?"bg-primary-600 text-white":"text-secondary-400 light:text-secondary-500 hover:text-white light:hover:text-secondary-900"])},"°C",2),_("button",{onClick:E[6]||(E[6]=C=>A.value="F"),class:rt(["px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold transition-colors cursor-pointer",A.value==="F"?"bg-primary-600 text-white":"text-secondary-400 light:text-secondary-500 hover:text-white light:hover:text-secondary-900"])},"°F",2)])])]),_("div",XD,[_("div",jD,[_("div",YD,[E[32]||(E[32]=_("svg",{class:"w-3 h-3 sm:w-3.5 sm:h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-secondary-500 light:text-secondary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1)),wc(_("input",{"onUpdate:modelValue":E[7]||(E[7]=C=>v.value=C),type:"text",placeholder:"Search city...",class:"w-full bg-secondary-700/50 light:bg-white border border-secondary-600 light:border-secondary-200 rounded-lg pl-7 pr-3 py-1.5 text-[10px] sm:text-xs text-white light:text-secondary-900 placeholder-secondary-500 light:placeholder-secondary-400 focus:outline-none focus:border-primary-500 transition-colors"},null,512),[[zd,v.value]])])]),v.value?(Y(),Q("div",qD,[(Y(!0),Q(We,null,it(U.value,C=>(Y(),Q("button",{key:C,onClick:H=>I(C),class:"w-full px-3 py-2 text-left text-[10px] sm:text-xs text-secondary-300 light:text-secondary-600 hover:bg-primary-500/10 hover:text-primary-500 transition-colors cursor-pointer flex items-center gap-2"},[_("span",null,pe(b[C].emoji),1),_("span",null,pe(C),1),_("span",ZD,pe(b[C].temp)+"°",1)],8,KD))),128))])):qt("",!0)]),_("div",JD,[_("div",QD,[_("div",null,[_("div",eL,pe(M.value)+"°"+pe(A.value),1),_("div",tL,pe(R.value.condition),1),_("div",nL,pe(y.value)+" • 💧 "+pe(R.value.humidity)+"% • 🌬️ "+pe(R.value.wind)+" km/h",1)]),_("div",iL,pe(R.value.emoji),1)])]),_("div",rL,[E[33]||(E[33]=_("div",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-1.5 uppercase tracking-wider"},"Hourly Forecast",-1)),_("div",sL,[(Y(!0),Q(We,null,it(S.value,(C,H)=>(Y(),Q("div",{key:H,class:"flex-1 min-w-[50px] sm:min-w-0 bg-secondary-800 light:bg-white rounded-lg p-1.5 sm:p-2 text-center border border-secondary-700 light:border-secondary-200 hover:border-primary-500/40 transition-colors cursor-pointer"},[_("div",oL,pe(C.time),1),_("div",aL,pe(C.emoji),1),_("div",lL,pe(C.temp)+"°",1)]))),128))])]),_("div",cL,[E[34]||(E[34]=_("div",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-1.5 uppercase tracking-wider"},"7-Day Forecast",-1)),_("div",uL,[(Y(!0),Q(We,null,it(T.value,(C,H)=>(Y(),Q("div",{key:H,class:"flex items-center justify-between bg-secondary-800 light:bg-white rounded-md px-2.5 sm:px-3 py-1.5 sm:py-2 border border-secondary-700 light:border-secondary-200 hover:border-primary-500/40 transition-colors cursor-pointer"},[_("span",dL,pe(C.day),1),_("span",fL,pe(C.emoji),1),_("div",hL,[_("div",{class:"h-full bg-gradient-to-r from-yellow-500 to-primary-500 rounded-full",style:Gt({width:(C.high-10)*5+"%"})},null,4)]),_("span",pL,pe(C.high)+"° / "+pe(C.low)+"°",1)]))),128))])])])):t.value==="analytics"?(Y(),Q("div",mL,[_("div",gL,[_("div",_L,[E[36]||(E[36]=_("div",{class:"w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-primary-500 flex items-center justify-center"},[_("svg",{class:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})])],-1)),(Y(),Q(We,null,it(4,C=>_("div",{key:C,class:"w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-secondary-700/50 light:bg-secondary-200 flex items-center justify-center cursor-pointer hover:bg-primary-500/20 transition-colors"},[...E[35]||(E[35]=[_("div",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm bg-secondary-500 light:bg-secondary-400"},null,-1)])])),64))]),_("div",xL,[_("div",vL,[(Y(),Q(We,null,it(B,C=>_("button",{key:C,onClick:H=>k(C),class:rt(["px-2 sm:px-3 py-1 rounded-full text-[8px] sm:text-[9px] font-medium transition-all cursor-pointer",G.value===C?"bg-primary-600 text-white shadow-md shadow-primary-500/25":"bg-secondary-800 light:bg-white text-secondary-400 light:text-secondary-500 border border-secondary-700 light:border-secondary-200 hover:text-white light:hover:text-secondary-900"])},pe(C),11,yL)),64))]),_("div",bL,[_("div",SL,[E[37]||(E[37]=_("div",{class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5"},"Followers",-1)),_("div",wL,pe(L.followers.toLocaleString()),1),E[38]||(E[38]=_("div",{class:"text-[8px] sm:text-[9px] text-primary-500 mt-0.5"},"▲ 12%",-1))]),_("div",ML,[E[39]||(E[39]=_("div",{class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5"},"Engagement",-1)),_("div",EL,pe(L.engagement)+"%",1),E[40]||(E[40]=_("div",{class:"text-[8px] sm:text-[9px] text-primary-500 mt-0.5"},"▲ 0.8%",-1))]),_("div",TL,[E[41]||(E[41]=_("div",{class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5"},"Reach",-1)),_("div",AL,pe(L.reach.toLocaleString()),1),E[42]||(E[42]=_("div",{class:"text-[8px] sm:text-[9px] text-primary-500 mt-0.5"},"▲ 23%",-1))]),_("div",CL,[E[43]||(E[43]=_("div",{class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5"},"Posts",-1)),_("div",RL,pe(L.posts),1),E[44]||(E[44]=_("div",{class:"text-[8px] sm:text-[9px] text-primary-500 mt-0.5"},"▲ 5%",-1))])]),_("div",PL,[E[45]||(E[45]=_("div",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-2"},"Engagement Over Time",-1)),_("div",DL,[(Y(!0),Q(We,null,it($.value,(C,H)=>(Y(),Q("div",{key:H,class:"flex-1 flex flex-col items-center gap-1 group cursor-pointer",onMouseenter:ne=>C.hover=!0,onMouseleave:ne=>C.hover=!1},[_("div",{class:rt(["w-full rounded-t bg-gradient-to-t from-primary-600 to-primary-400 transition-all duration-300 group-hover:from-primary-500 group-hover:to-primary-300",{"opacity-40":H%3===0}]),style:Gt({height:C.value+"%"})},null,6),_("span",IL,pe(C.label),1)],40,LL))),128))])]),_("div",NL,[_("div",UL,[E[46]||(E[46]=_("div",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-2"},"Platforms",-1)),_("div",FL,[(Y(),Q(We,null,it(["Instagram","Twitter","LinkedIn"],(C,H)=>_("div",{key:C,class:"flex items-center gap-2 cursor-pointer hover:bg-secondary-700/30 light:hover:bg-secondary-100 rounded-md px-1.5 py-1 transition-colors",onClick:ne=>k(C)},[_("div",{class:rt(["w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full",["bg-primary-500","bg-accent-500","bg-yellow-500"][H]])},null,2),_("span",kL,pe(C),1),_("span",BL,pe([45,30,25][H])+"%",1)],8,OL)),64))])]),_("div",zL,[E[48]||(E[48]=_("div",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-2"},"Top Posts",-1)),_("div",VL,[(Y(),Q(We,null,it(3,C=>_("div",{key:C,class:"flex items-center gap-2 cursor-pointer hover:bg-secondary-700/30 light:hover:bg-secondary-100 rounded-md px-1.5 py-1 transition-colors"},[_("div",{class:rt(["w-5 h-5 sm:w-6 sm:h-6 rounded bg-gradient-to-br flex items-center justify-center text-[10px] sm:text-xs flex-shrink-0",["from-primary-500/30 to-primary-500/10","from-accent-500/30 to-accent-500/10","from-yellow-500/30 to-yellow-500/10"][C-1]])},pe(["📸","🐦","💼"][C-1]),3),E[47]||(E[47]=_("div",{class:"flex-1 min-w-0"},[_("div",{class:"h-1.5 bg-secondary-700 light:bg-secondary-200 rounded mb-1 w-4/5"}),_("div",{class:"h-1 bg-secondary-700 light:bg-secondary-200 rounded w-1/2"})],-1)),_("span",HL,pe([1200,890,650][C-1]),1)])),64))])])])])])])):t.value==="recipe"?(Y(),Q("div",GL,[_("div",WL,[E[51]||(E[51]=Rs('<div class="flex items-center justify-between mb-2" data-v-67e9e612><div class="text-xs sm:text-sm font-bold text-primary-500" data-v-67e9e612>🍳 FlavorFind</div><div class="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary-500/20 flex items-center justify-center cursor-pointer hover:bg-primary-500/30 transition-colors" data-v-67e9e612><svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-67e9e612><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-67e9e612></path></svg></div></div>',1)),_("div",$L,[_("div",XL,[E[49]||(E[49]=_("svg",{class:"w-3 h-3 sm:w-3.5 sm:h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-secondary-500 light:text-secondary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1)),wc(_("input",{"onUpdate:modelValue":E[8]||(E[8]=C=>F.value=C),type:"text",placeholder:"Search recipes...",class:"w-full bg-secondary-700/50 light:bg-secondary-100 rounded-lg pl-7 pr-3 py-1.5 sm:py-2 text-[10px] sm:text-xs text-white light:text-secondary-900 placeholder-secondary-500 light:placeholder-secondary-400 focus:outline-none focus:border-primary-500 border border-transparent focus:border-primary-500/50 transition-colors"},null,512),[[zd,F.value]])]),E[50]||(E[50]=_("button",{class:"bg-primary-500 hover:bg-primary-400 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 flex items-center transition-colors cursor-pointer"},[_("span",{class:"text-[10px] sm:text-xs text-white font-semibold"},"Search")],-1))])]),_("div",jL,[(Y(),Q(We,null,it(ge,C=>_("button",{key:C,onClick:H=>j.value=C,class:rt(["px-2.5 sm:px-3 py-1 rounded-full text-[8px] sm:text-[9px] font-medium whitespace-nowrap transition-all cursor-pointer",j.value===C?"bg-primary-500 text-white shadow-md shadow-primary-500/25":"bg-secondary-800 light:bg-white text-secondary-400 light:text-secondary-500 border border-secondary-700 light:border-secondary-200 hover:text-white light:hover:text-secondary-900"])},pe(C),11,YL)),64))]),_("div",qL,[(Y(!0),Q(We,null,it(_e.value,C=>(Y(),Q("div",{key:C.id,onClick:H=>ye(C),class:"bg-secondary-800 light:bg-white rounded-lg overflow-hidden border border-secondary-700 light:border-secondary-200 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-200 cursor-pointer"},[_("div",{class:rt(["h-14 sm:h-16 bg-gradient-to-br relative flex items-center justify-center text-2xl sm:text-3xl",C.color])},[_("span",null,pe(C.emoji),1),_("div",ZL,"⏱ "+pe(C.time)+" min",1)],2),_("div",JL,[_("div",QL,pe(C.name),1),_("div",eI,[E[52]||(E[52]=_("span",{class:"text-yellow-500 text-[9px] sm:text-[10px]"},"★",-1)),_("span",tI,pe(C.rating),1),_("span",nI,pe(C.category),1)])])],8,KL))),128)),_e.value.length===0?(Y(),Q("div",iI,[...E[53]||(E[53]=[_("div",{class:"text-3xl mb-2"},"🔍",-1),_("p",{class:"text-xs text-secondary-400 light:text-secondary-500"},"No recipes found",-1)])])):qt("",!0)]),et(Na,{name:"fade"},{default:Uo(()=>[ue.value?(Y(),Q("div",{key:0,class:"absolute inset-0 bg-dark-900/80 light:bg-secondary-900/80 backdrop-blur-sm z-20 flex items-center justify-center p-4",onClick:E[12]||(E[12]=C=>ue.value=null)},[_("div",{class:"bg-secondary-800 light:bg-white rounded-xl max-w-sm w-full p-5 border border-secondary-700 light:border-secondary-200 shadow-2xl",onClick:E[11]||(E[11]=Ds(()=>{},["stop"]))},[_("div",rI,[_("div",sI,pe(ue.value.emoji),1),_("button",{onClick:E[9]||(E[9]=C=>ue.value=null),class:"text-secondary-400 hover:text-white light:hover:text-secondary-900 transition-colors cursor-pointer","aria-label":"Close recipe"},[...E[54]||(E[54]=[_("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),_("h3",oI,pe(ue.value.name),1),_("div",aI,[_("span",lI,"★ "+pe(ue.value.rating),1),E[55]||(E[55]=_("span",{class:"text-[9px] text-secondary-500 light:text-secondary-400"},"•",-1)),_("span",cI,"⏱ "+pe(ue.value.time)+" min",1),E[56]||(E[56]=_("span",{class:"text-[9px] text-secondary-500 light:text-secondary-400"},"•",-1)),_("span",uI,pe(ue.value.category),1)]),_("div",dI,[(Y(),Q(We,null,it(4,C=>_("div",{key:C,class:"flex items-center gap-2"},[E[57]||(E[57]=_("div",{class:"w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0"},null,-1)),_("div",{class:"h-1.5 bg-secondary-700 light:bg-secondary-200 rounded flex-1",style:Gt({width:60+C*8+"%"})},null,4)])),64))]),_("button",{onClick:E[10]||(E[10]=C=>ue.value=null),class:"w-full py-2 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-[10px] font-semibold transition-colors cursor-pointer"}," Start Cooking ")])])):qt("",!0)]),_:1})])):t.value==="portfolio"?(Y(),Q("div",fI,[_("div",hI,[E[58]||(E[58]=_("div",{class:"text-xs sm:text-sm font-bold text-primary-500"},"👨‍💻 DevName",-1)),_("div",pI,[(Y(),Q(We,null,it(ee,C=>_("button",{key:C,onClick:H=>fe(C),class:rt(["capitalize cursor-pointer transition-colors",Ae.value===C?"text-primary-500 font-semibold":"hover:text-white light:hover:text-secondary-900"])},pe(C),11,mI)),64))])]),_("div",gI,[Ae.value==="home"?(Y(),Q("div",_I,[_("div",xI,[E[59]||(E[59]=Rs('<div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 mx-auto mb-3 sm:mb-4 flex items-center justify-center" data-v-67e9e612><svg class="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-67e9e612><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" data-v-67e9e612></path></svg></div><div class="text-base sm:text-lg font-bold text-white light:text-secondary-900 mb-1.5" data-v-67e9e612>Hi, I&#39;m a Developer</div><div class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 mb-3 sm:mb-4" data-v-67e9e612>Building beautiful web experiences</div>',3)),_("div",vI,[_("button",{onClick:E[13]||(E[13]=C=>fe("projects")),class:"bg-primary-500 hover:bg-primary-400 text-white text-[9px] sm:text-[10px] font-semibold px-3 sm:px-4 py-1.5 rounded-full transition-colors cursor-pointer"},"View Work"),_("button",{onClick:E[14]||(E[14]=C=>fe("contact")),class:"border border-secondary-600 light:border-secondary-300 text-secondary-300 light:text-secondary-600 hover:text-white light:hover:text-secondary-900 text-[9px] sm:text-[10px] font-semibold px-3 sm:px-4 py-1.5 rounded-full transition-colors cursor-pointer"},"Contact Me")])])])):Ae.value==="about"?(Y(),Q("div",yI,[E[60]||(E[60]=_("h3",{class:"text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3"},"About Me",-1)),_("div",bI,[(Y(),Q(We,null,it(4,C=>_("div",{key:C,class:"h-2 bg-secondary-700 light:bg-secondary-200 rounded",style:Gt({width:70+C*5+"%"})},null,4)),64))]),_("div",SI,[(Y(),Q(We,null,it(["Vue.js","React","Node.js","TypeScript","Tailwind","GraphQL"],C=>_("div",{key:C,class:"bg-secondary-800 light:bg-white rounded-lg p-2.5 border border-secondary-700 light:border-secondary-200 text-center"},[_("div",wI,pe(C),1),_("div",MI,[_("div",{class:"h-full bg-primary-500 rounded-full",style:Gt({width:60+C.length*3+"%"})},null,4)])])),64))])])):Ae.value==="projects"?(Y(),Q("div",EI,[E[62]||(E[62]=_("h3",{class:"text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3"},"My Projects",-1)),_("div",TI,[(Y(),Q(We,null,it(4,C=>_("div",{key:C,class:"bg-secondary-800 light:bg-white rounded-lg overflow-hidden border border-secondary-700 light:border-secondary-200 hover:border-primary-500/50 transition-colors cursor-pointer"},[_("div",{class:rt(["h-12 sm:h-16 bg-gradient-to-br flex items-center justify-center text-xl sm:text-2xl",["from-primary-500/30 to-primary-500/10","from-accent-500/30 to-accent-500/10","from-yellow-500/30 to-yellow-500/10","from-blue-500/30 to-blue-500/10"][C-1]])},pe(["📱","🌐","🎮","📊"][C-1]),3),E[61]||(E[61]=_("div",{class:"p-2 sm:p-2.5"},[_("div",{class:"h-1.5 bg-secondary-700 light:bg-secondary-200 rounded mb-1 w-4/5"}),_("div",{class:"h-1 bg-secondary-700 light:bg-secondary-200 rounded w-1/2"})],-1))])),64))])])):(Y(),Q("div",AI,[...E[63]||(E[63]=[Rs('<h3 class="text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3" data-v-67e9e612>Get In Touch</h3><div class="space-y-2 mb-4" data-v-67e9e612><div class="flex items-center gap-2 bg-secondary-800 light:bg-white rounded-lg p-2.5 border border-secondary-700 light:border-secondary-200" data-v-67e9e612><span class="text-base" data-v-67e9e612>📧</span><span class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500" data-v-67e9e612>hello@devname.com</span></div><div class="flex items-center gap-2 bg-secondary-800 light:bg-white rounded-lg p-2.5 border border-secondary-700 light:border-secondary-200" data-v-67e9e612><span class="text-base" data-v-67e9e612>💼</span><span class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500" data-v-67e9e612>linkedin.com/in/devname</span></div><div class="flex items-center gap-2 bg-secondary-800 light:bg-white rounded-lg p-2.5 border border-secondary-700 light:border-secondary-200" data-v-67e9e612><span class="text-base" data-v-67e9e612>🐙</span><span class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500" data-v-67e9e612>github.com/devname</span></div></div><button class="w-full py-2 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-[10px] font-semibold transition-colors cursor-pointer" data-v-67e9e612>Send Message</button>',3)])]))]),_("div",CI,[_("div",RI,[(Y(),Q(We,null,it(["Vue","React","Node","Python","Go"],C=>_("div",{key:C,class:"px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-secondary-700/50 light:bg-secondary-100 text-[8px] sm:text-[9px] text-secondary-400 light:text-secondary-500 border border-secondary-700 light:border-secondary-200 whitespace-nowrap"},pe(C),1)),64))])])])):(Y(),Q("div",PI,[_("div",DI,[_("div",LI,pe(n.project.title),1),_("div",II,[(Y(),Q(We,null,it(Pe,C=>_("button",{key:C,onClick:H=>Ce(C),class:rt(["capitalize cursor-pointer transition-colors",le.value===C?"text-primary-500 font-semibold":"hover:text-white light:hover:text-secondary-900"])},pe(C),11,NI)),64))])]),_("div",UI,[le.value==="home"?(Y(),Q("div",FI,[_("div",OI,[E[64]||(E[64]=_("div",{class:"w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-500/20 mx-auto mb-2 sm:mb-3 flex items-center justify-center"},[_("svg",{class:"w-5 h-5 sm:w-6 sm:h-6 text-primary-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"}),_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M8 9h8M8 13h5"})])],-1)),_("div",kI,pe(n.project.title),1),_("div",BI,pe(n.project.description),1),_("div",zI,[(Y(!0),Q(We,null,it(n.project.tech.slice(0,3),C=>(Y(),Q("div",{key:C,class:"px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-primary-500/10 text-[8px] sm:text-[9px] text-primary-500 border border-primary-500/20"},pe(C),1))),128))])])])):le.value==="features"?(Y(),Q("div",VI,[E[66]||(E[66]=_("h3",{class:"text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3"},"Features",-1)),_("div",HI,[(Y(!0),Q(We,null,it(n.project.features||["Feature 1","Feature 2","Feature 3","Feature 4"],(C,H)=>(Y(),Q("div",{key:H,class:"flex items-start gap-2 bg-secondary-800 light:bg-white rounded-lg p-2.5 sm:p-3 border border-secondary-700 light:border-secondary-200"},[E[65]||(E[65]=_("div",{class:"w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0"},[_("svg",{class:"w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})])],-1)),_("span",GI,pe(C),1)]))),128))])])):(Y(),Q("div",WI,[E[67]||(E[67]=_("h3",{class:"text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3"},"About",-1)),_("div",$I,[(Y(),Q(We,null,it(5,C=>_("div",{key:C,class:"h-2 bg-secondary-700 light:bg-secondary-200 rounded",style:Gt({width:65+C*5+"%"})},null,4)),64))])]))])]))]))}},Bg=Ks(XI,[["__scopeId","data-v-67e9e612"]]),jI={class:"min-h-full flex flex-col lg:flex-row"},YI={class:"relative lg:w-1/2 lg:h-screen overflow-hidden flex-shrink-0"},qI=["src","alt"],KI={class:"absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:hidden bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent"},ZI={class:"text-xl sm:text-3xl font-bold text-white mb-2"},JI={class:"flex flex-wrap gap-2"},QI={class:"flex-1 p-5 sm:p-8 lg:p-12 lg:overflow-y-auto"},eN={class:"hidden lg:block text-4xl font-bold text-white light:text-secondary-900 mb-4"},tN={class:"hidden lg:flex flex-wrap gap-2 mb-6"},nN={class:"mb-8"},iN={class:"text-secondary-300 light:text-secondary-600 leading-relaxed text-lg"},rN={class:"mb-8"},sN={class:"space-y-3"},oN={class:"flex flex-wrap gap-4"},aN={key:0,class:"fixed inset-0 z-[10001] bg-dark-900/95 light:bg-secondary-900/95 backdrop-blur-sm flex flex-col"},lN={class:"flex items-center justify-between px-4 py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},cN={__name:"ProjectDetailModal",props:{project:{type:Object,required:!0},originRect:{type:Object,default:null}},emits:["close"],setup(n,{emit:e}){const t=n,i=e,r=Xt(()=>{const y=t.project.title.toLowerCase();return y.includes("redemption")||y.includes("merchant")}),s=we(!1),o=["Responsive design that works across all devices","Optimized performance with lazy loading and code splitting","Clean, maintainable code following best practices","Accessible UI with semantic HTML and ARIA labels"],a=we(null),l=we(null),c=we(null),u=we(null),d=we(null),f=we(!1);let h=null;const m=async()=>{if(await Lr(),!a.value||!l.value)return;const y=a.value,v=l.value,A=c.value,R=t.originRect||{left:0,top:0,width:0,height:0},M=window.innerWidth,S=window.innerHeight;$e.set(y,{opacity:0,pointerEvents:"none"}),$e.set(v,{position:"fixed",left:R.left,top:R.top,width:R.width,height:R.height,margin:0,borderRadius:"1rem",zIndex:9999,overflow:"hidden"}),$e.set(A,{opacity:0,y:30}),$e.to(y,{opacity:1,duration:.3,ease:"power2.out",pointerEvents:"auto"}),h=$e.timeline({defaults:{ease:"power3.inOut"}}),h.to(v,{left:0,top:0,width:M,height:S,borderRadius:0,duration:.7}).to(A,{opacity:1,y:0,duration:.5,ease:"power2.out"},"-=0.3").from(d.value,{opacity:0,scale:.8,duration:.3,ease:"back.out(1.7)"},"-=0.2")},x=()=>{if(f.value)return;f.value=!0;const y=a.value,v=l.value,A=c.value,R=t.originRect||{left:0,top:0,width:0,height:0};h&&h.kill(),$e.timeline({defaults:{ease:"power3.inOut"},onComplete:()=>{i("close")}}).to(A,{opacity:0,y:-30,duration:.3,ease:"power2.in"}).to(v,{left:R.left,top:R.top,width:R.width,height:R.height,borderRadius:"1rem",duration:.6},"-=0.1").to(y,{opacity:0,duration:.3,ease:"power2.in"},"-=0.3")},p=y=>{y.key==="Escape"&&x()},g=y=>{y.stopPropagation()},b=y=>{y.stopPropagation()};return li(s,y=>{var v,A;y?Lr(()=>{var R,M;(R=u.value)==null||R.addEventListener("wheel",g,{passive:!1}),(M=u.value)==null||M.addEventListener("touchmove",b,{passive:!1})}):((v=u.value)==null||v.removeEventListener("wheel",g),(A=u.value)==null||A.removeEventListener("touchmove",b))}),yn(()=>{var v,A;m(),document.body.style.overflow="hidden",document.body.style.overscrollBehavior="contain";const y=Va();y&&y.stop(),(v=c.value)==null||v.addEventListener("wheel",g,{passive:!1}),(A=c.value)==null||A.addEventListener("touchmove",b,{passive:!1}),window.addEventListener("keydown",p)}),Cn(()=>{var v,A,R,M;document.body.style.overflow="",document.body.style.overscrollBehavior="";const y=Va();y&&y.start(),(v=c.value)==null||v.removeEventListener("wheel",g),(A=c.value)==null||A.removeEventListener("touchmove",b),(R=u.value)==null||R.removeEventListener("wheel",g),(M=u.value)==null||M.removeEventListener("touchmove",b),window.removeEventListener("keydown",p),h&&h.kill()}),(y,v)=>(Y(),Q("div",{ref_key:"overlayRef",ref:a,class:"fixed inset-0 z-[9998] bg-dark-900/90 light:bg-secondary-900/90 backdrop-blur-sm",onClick:Ds(x,["self"])},[_("div",{ref_key:"cardRef",ref:l,class:"bg-secondary-800 light:bg-white shadow-2xl"},[_("button",{ref_key:"closeBtnRef",ref:d,onClick:x,class:"fixed top-4 right-4 z-[10000] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-900/80 light:bg-white/90 border border-secondary-700 light:border-secondary-200 flex items-center justify-center text-secondary-300 light:text-secondary-600 hover:text-primary-400 light:hover:text-primary-600 hover:border-primary-500/50 transition-colors duration-200 shadow-lg backdrop-blur-sm","aria-label":"Close project details"},[...v[2]||(v[2]=[_("svg",{class:"w-5 h-5 sm:w-6 sm:h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])],512),_("div",{ref_key:"contentRef",ref:c,class:"h-full w-full overflow-y-auto overscroll-contain touch-pan-y"},[_("div",jI,[_("div",YI,[_("img",{src:n.project.image,alt:n.project.title,class:"w-full h-[60vh] sm:h-[55vh] lg:hidden object-cover"},null,8,qI),et(Bg,{project:n.project,class:"hidden lg:block w-full h-full"},null,8,["project"]),_("div",KI,[_("h2",ZI,pe(n.project.title),1),_("div",JI,[(Y(!0),Q(We,null,it(n.project.tech,A=>(Y(),Q("span",{key:A,class:"text-xs text-primary-300 bg-primary-500/20 px-3 py-1 rounded-full backdrop-blur-sm"},pe(A),1))),128))])])]),_("div",QI,[_("h2",eN,pe(n.project.title),1),_("div",tN,[(Y(!0),Q(We,null,it(n.project.tech,A=>(Y(),Q("span",{key:A,class:"text-sm text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full"},pe(A),1))),128))]),_("div",nN,[v[3]||(v[3]=_("h3",{class:"text-lg font-semibold text-primary-400 light:text-primary-600 mb-3 uppercase tracking-wider"}," About This Project ",-1)),_("p",iN,pe(n.project.description),1)]),_("div",rN,[v[5]||(v[5]=_("h3",{class:"text-lg font-semibold text-primary-400 light:text-primary-600 mb-3 uppercase tracking-wider"}," Key Features ",-1)),_("ul",sN,[(Y(!0),Q(We,null,it(n.project.features||o,(A,R)=>(Y(),Q("li",{key:R,class:"flex items-start gap-3 text-secondary-300 light:text-secondary-600"},[v[4]||(v[4]=_("svg",{class:"w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})],-1)),_("span",null,pe(A),1)]))),128))])]),_("div",oN,[_("button",{onClick:v[0]||(v[0]=A=>s.value=!0),class:"lg:hidden inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors duration-300 shadow-lg shadow-primary-500/25 cursor-pointer"},[...v[6]||(v[6]=[_("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})],-1),qi(" Show Demo ",-1)])])])])])],512)],512),et(Na,{name:"demo-fade"},{default:Uo(()=>[s.value?(Y(),Q("div",aN,[_("div",lN,[v[8]||(v[8]=_("div",{class:"flex items-center gap-2"},[_("svg",{class:"w-4 h-4 text-primary-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})]),_("span",{class:"text-sm font-semibold text-white light:text-secondary-900"},"Live Demo")],-1)),_("button",{onClick:v[1]||(v[1]=A=>s.value=!1),class:"w-9 h-9 rounded-full bg-secondary-700/50 light:bg-secondary-100 flex items-center justify-center text-secondary-300 light:text-secondary-600 hover:text-white light:hover:text-secondary-900 transition-colors cursor-pointer","aria-label":"Close live demo"},[...v[7]||(v[7]=[_("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),_("div",{ref_key:"demoContentRef",ref:u,class:"flex-1 min-h-0 overflow-y-auto overscroll-contain touch-pan-y"},[r.value?(Y(),Yn(my,{key:0,class:"w-full h-full"})):(Y(),Yn(Bg,{key:1,project:n.project,class:"w-full h-full"},null,8,["project"]))],512)])):qt("",!0)]),_:1})],512))}},uN=Ks(cN,[["__scopeId","data-v-9017117e"]]),dN={class:"h-1 bg-secondary-800/50 light:bg-secondary-300 backdrop-blur-sm"},fN={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},hN={class:"flex flex-wrap gap-3"},pN=["onClick"],mN={key:0,class:"ml-auto flex items-center gap-1 p-1 rounded-lg bg-secondary-800 border border-secondary-700 light:bg-secondary-100 light:border-secondary-200"},gN={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"},_N={__name:"ProjectsSection",setup(n){$e.registerPlugin(ct);const e=we("All"),t=we("carousel"),i=we(!1),r=we(0),s=we(0),o=we(!1),a=we(null),l=we(null),c=we(null),u=we(null),d=we(null),f=we(null),h=we(null),m=we(null),x=we(null),p=we(null);let g=[],b=null,y=null,v=null,A=null;const R=Xt(()=>{const j=Of.flatMap(F=>F.tech);return["All",...new Set(j)]}),M=Xt(()=>e.value==="All"?Of:Of.filter(j=>j.tech.includes(e.value))),S=j=>{e.value=j},T=({project:j,originRect:F})=>{x.value=j,p.value=F},U=()=>{x.value=null,p.value=null};li(M,async()=>{await Lr(),G(),t.value==="horizontal"&&k()});const I=j=>{i.value||(t.value=j,j==="horizontal"?Lr(()=>k()):Z())},L=j=>{i.value=j.matches,j.matches&&(t.value="grid",Z())},G=()=>{if(!d.value)return;const j=d.value.getBoundingClientRect(),F=window.innerHeight,ue=j.height-F,ge=Math.min(Math.max(-j.top,0),ue);r.value=ue>0?ge/ue*100:100},B=()=>{y&&window.removeEventListener("scroll",y,{passive:!0}),y=()=>G(),window.addEventListener("scroll",y,{passive:!0}),G()},V=()=>{if(!f.value)return;const j=f.value.getBoundingClientRect(),F=window.innerHeight,ge=j.height-F;if(o.value=j.top<F&&j.bottom>0,ge>0){const _e=Math.min(Math.max(-j.top,0),ge);s.value=_e/ge*100}else s.value=o.value?100:0},$=()=>{v&&window.removeEventListener("scroll",v,{passive:!0}),v=()=>V(),window.addEventListener("scroll",v,{passive:!0}),V()},k=()=>{if(Z(),!h.value||!m.value||!u.value)return;const j=m.value,F=u.value,ge=j.scrollWidth-window.innerWidth;ge<=0||(A=$e.to(j,{x:-ge,ease:"none",scrollTrigger:{trigger:F,start:"top top",end:()=>`+=${ge}`,pin:!0,pinSpacing:!0,scrub:!0,anticipatePin:1,invalidateOnRefresh:!0,preventOverlaps:!0,fastScrollEnd:!0}}))},Z=()=>{var j;A&&((j=A.scrollTrigger)==null||j.kill(),A.kill(),A=null)};return yn(()=>{b=window.matchMedia("(max-width: 768px)"),i.value=b.matches,i.value&&(t.value="grid"),b.addEventListener("change",L),g.push(...h0(a.value,{x:-120,start:"top 85%"})),g.push(...f0(u.value,{y:60,duration:1.2,start:"top 80%",blur:14})),B(),$()}),Cn(()=>{g.forEach(j=>j.kill()),Z(),b&&b.removeEventListener("change",L),y&&window.removeEventListener("scroll",y,{passive:!0}),v&&window.removeEventListener("scroll",v,{passive:!0})}),(j,F)=>(Y(),Q("section",{ref_key:"sectionRef",ref:f,id:"projects",class:rt(["pt-20 pb-0 bg-dark-800 light:bg-white relative",t.value==="horizontal"?"overflow-visible":"overflow-hidden"])},[F[5]||(F[5]=_("div",{class:"absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"},null,-1)),o.value?(Y(),Q("div",{key:0,class:rt(["fixed top-16 left-0 right-0 z-40 transition-opacity duration-300",s.value>=100?"opacity-0 pointer-events-none":"opacity-100"])},[_("div",dN,[_("div",{class:"h-full bg-gradient-to-r from-primary-500 to-accent-500 light:from-primary-500 light:to-accent-500 transition-all duration-150 ease-out",style:Gt({width:s.value+"%"})},null,4)])],2)):qt("",!0),_("div",fN,[_("h2",{ref_key:"titleRef",ref:a,class:"section-title"},"Featured Projects",512),_("p",{ref_key:"subtitleRef",ref:l,class:"section-subtitle"},"A selection of projects I've built",512),_("div",{ref_key:"filterRef",ref:c,class:"flex flex-wrap items-center gap-3 mb-10"},[_("div",hN,[(Y(!0),Q(We,null,it(R.value,ue=>(Y(),Q("button",{key:ue,onClick:ge=>S(ue),class:rt(["px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105",e.value===ue?"bg-primary-600 text-white shadow-lg shadow-primary-500/25":"bg-secondary-800 text-secondary-400 hover:text-white border border-secondary-700 light:bg-white light:text-secondary-500 light:hover:text-primary-500 light:border-secondary-200 light:hover:border-primary-500"])},pe(ue),11,pN))),128))]),i.value?qt("",!0):(Y(),Q("div",mN,[_("button",{onClick:F[0]||(F[0]=ue=>I("grid")),class:rt(["px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300",t.value==="grid"?"bg-primary-600 text-white shadow-md shadow-primary-500/25":"text-secondary-400 hover:text-white light:text-secondary-500 light:hover:text-secondary-900"]),"aria-label":"Grid view"},[...F[2]||(F[2]=[_("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})],-1)])],2),_("button",{onClick:F[1]||(F[1]=ue=>I("carousel")),class:rt(["px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300",t.value==="carousel"?"bg-primary-600 text-white shadow-md shadow-primary-500/25":"text-secondary-400 hover:text-white light:text-secondary-500 light:hover:text-secondary-900"]),"aria-label":"Carousel view"},[...F[3]||(F[3]=[_("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)])],2)]))],512)]),_("div",{ref_key:"wheelContainerRef",ref:u,class:"w-full"},[t.value==="grid"?(Y(),Q("div",{key:0,ref_key:"gridContainerRef",ref:d,class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"},[_("div",gN,[(Y(!0),Q(We,null,it(M.value,ue=>(Y(),Yn(Ug,{key:ue.id,project:ue,onOpen:T},null,8,["project"]))),128))]),F[4]||(F[4]=_("div",{class:"mt-10 flex justify-center"},[_("div",{class:"w-64 sm:w-80"})],-1))],512)):t.value==="carousel"?(Y(),Yn(ZR,{key:1,projects:M.value,onOpen:T},null,8,["projects"])):t.value==="horizontal"?(Y(),Q("div",{key:2,ref_key:"horizontalContainerRef",ref:h,class:"relative h-screen overflow-hidden"},[_("div",{ref_key:"horizontalTrackRef",ref:m,class:"flex items-center gap-8 px-8 sm:px-12 lg:px-16 h-full w-max"},[(Y(!0),Q(We,null,it(M.value,ue=>(Y(),Q("div",{key:ue.id,class:"w-[320px] sm:w-[380px] lg:w-[420px] shrink-0"},[et(Ug,{project:ue,onOpen:T},null,8,["project"])]))),128))],512)],512)):qt("",!0)],512),x.value?(Y(),Yn(uN,{key:1,project:x.value,"origin-rect":p.value,onClose:U},null,8,["project","origin-rect"])):qt("",!0)],2))}},xN={id:"contact",class:"py-20 bg-dark-800 light:bg-white relative overflow-hidden"},vN={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},yN={class:"text-center mb-16"},bN={class:"text-center"},SN={class:"flex items-center justify-center gap-4"},wN=["href","aria-label"],MN={class:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24"},EN=["d"],TN={__name:"ContactSection",setup(n){const e=we(null),t=we(null),i=we(null);let r=[];const s=[{name:"GitHub",href:"https://github.com/pixel-user-512",icon:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"},{name:"LinkedIn",href:"https://linkedin.com/in/kenneth-paul-cortez",icon:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"}];return yn(()=>{r.push(...h0(t.value,{x:-120,start:"top 85%"})),r.push(...f0(e.value,{y:60,duration:1.2,stagger:.15,start:"top 80%",blur:14}))}),Cn(()=>{r.forEach(o=>o.kill())}),(o,a)=>(Y(),Q("section",xN,[a[2]||(a[2]=_("div",{class:"absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"},null,-1)),_("div",vN,[_("div",yN,[_("h2",{ref_key:"titleRef",ref:t,class:"section-title"},"Get In Touch",512),_("p",{ref_key:"subtitleRef",ref:i,class:"section-subtitle"},"Have a project in mind? Let's work together!",512)]),_("div",{ref_key:"infoRef",ref:e,class:"max-w-3xl mx-auto"},[a[1]||(a[1]=Rs('<div class="text-center mb-12"><p class="text-secondary-400 light:text-secondary-500 text-lg leading-relaxed"> I&#39;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out! </p></div><div class="grid sm:grid-cols-2 gap-4 mb-12"><a href="mailto:kenneth.cortez.512@gmail.com" class="group flex items-center gap-4 bg-secondary-800/50 border border-secondary-700 rounded-2xl p-5 hover:border-primary-500/50 hover:bg-secondary-800/80 transition-all duration-300 light:bg-white light:border-secondary-200 light:hover:border-primary-500/50"><span class="w-12 h-12 flex items-center justify-center bg-secondary-800 border border-secondary-700 rounded-xl group-hover:border-primary-500/50 group-hover:scale-110 transition-all duration-300 light:bg-secondary-50 light:border-secondary-200 shrink-0"><svg class="w-6 h-6 text-primary-400 light:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></span><span class="min-w-0"><span class="block text-xs text-secondary-500 light:text-secondary-400 uppercase tracking-wider mb-1">Email</span><span class="block text-secondary-200 light:text-secondary-700 font-medium truncate">kenneth.cortez.512@gmail.com</span></span></a><a href="tel:+639664002142" class="group flex items-center gap-4 bg-secondary-800/50 border border-secondary-700 rounded-2xl p-5 hover:border-primary-500/50 hover:bg-secondary-800/80 transition-all duration-300 light:bg-white light:border-secondary-200 light:hover:border-primary-500/50"><span class="w-12 h-12 flex items-center justify-center bg-secondary-800 border border-secondary-700 rounded-xl group-hover:border-primary-500/50 group-hover:scale-110 transition-all duration-300 light:bg-secondary-50 light:border-secondary-200 shrink-0"><svg class="w-6 h-6 text-primary-400 light:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></span><span class="min-w-0"><span class="block text-xs text-secondary-500 light:text-secondary-400 uppercase tracking-wider mb-1">Phone</span><span class="block text-secondary-200 light:text-secondary-700 font-medium">+63 (966) 400-2142</span></span></a></div>',2)),_("div",bN,[a[0]||(a[0]=_("h4",{class:"text-white light:text-secondary-900 text-sm font-semibold uppercase tracking-wider mb-5"},"Follow Me",-1)),_("div",SN,[(Y(),Q(We,null,it(s,l=>_("a",{key:l.name,href:l.href,target:"_blank",rel:"noopener noreferrer",class:"w-12 h-12 flex items-center justify-center bg-secondary-800 border border-secondary-700 rounded-xl text-secondary-400 hover:text-primary-400 hover:border-primary-500/50 hover:scale-110 transition-all duration-300 light:bg-white light:border-secondary-200 light:text-secondary-500 light:hover:text-primary-600","aria-label":l.name},[(Y(),Q("svg",MN,[_("path",{d:l.icon},null,8,EN)]))],8,wN)),64))])])],512)])]))}},AN={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},CN={class:"flex flex-col md:flex-row items-center justify-between gap-4"},RN={class:"text-secondary-400 light:text-secondary-500 text-sm"},PN={class:"flex items-center gap-6"},DN={__name:"Footer",setup(n){const e=new Date().getFullYear(),t=we(null);let i=[];const r=()=>{const s=Va();s?s.scrollTo(0):window.scrollTo({top:0,behavior:"smooth"})};return yn(()=>{i=f0(t.value,{y:30,duration:1,start:"top bottom",blur:8})}),Cn(()=>{i.forEach(s=>s.kill())}),(s,o)=>(Y(),Q("footer",{ref_key:"footerRef",ref:t,class:"bg-dark-800 border-t border-dark-700 light:bg-white light:border-secondary-200 py-8"},[_("div",AN,[_("div",CN,[_("div",RN," © "+pe(Xe(e))+" Kenneth Paul Cortez ",1),_("div",PN,[_("a",{href:"#home",onClick:Ds(r,["prevent"]),class:"text-secondary-400 hover:text-primary-400 light:text-secondary-500 light:hover:text-primary-600 transition-colors duration-200 text-sm"}," Home "),o[0]||(o[0]=_("a",{href:"#about",class:"text-secondary-400 hover:text-primary-400 light:text-secondary-500 light:hover:text-primary-600 transition-colors duration-200 text-sm"}," About ",-1)),o[1]||(o[1]=_("a",{href:"#projects",class:"text-secondary-400 hover:text-primary-400 light:text-secondary-500 light:hover:text-primary-600 transition-colors duration-200 text-sm"}," Projects ",-1)),o[2]||(o[2]=_("a",{href:"#contact",class:"text-secondary-400 hover:text-primary-400 light:text-secondary-500 light:hover:text-primary-600 transition-colors duration-200 text-sm"}," Contact ",-1))]),o[3]||(o[3]=_("div",{class:"text-secondary-500 light:text-secondary-400 text-sm"},[qi(" Built with "),_("span",{class:"text-primary-500"},"Vue 3"),qi(" & "),_("span",{class:"text-primary-500"},"Tailwind CSS")],-1))])])],512))}},LN={__name:"BackToTop",setup(n){const e=we(!1),t=()=>{e.value=window.scrollY>400},i=()=>{const r=Va();r?r.scrollTo(0):window.scrollTo({top:0,behavior:"smooth"})};return yn(()=>{window.addEventListener("scroll",t)}),Cn(()=>{window.removeEventListener("scroll",t)}),(r,s)=>(Y(),Yn(Na,{"enter-active-class":"transition-all duration-300 ease-out","enter-from-class":"opacity-0 translate-y-4","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition-all duration-300 ease-in","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 translate-y-4"},{default:Uo(()=>[e.value?(Y(),Q("button",{key:0,onClick:i,class:"fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white rounded-xl shadow-lg shadow-primary-500/25 hover:scale-110 transition-all duration-300","aria-label":"Back to top"},[...s[0]||(s[0]=[_("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 15l7-7 7 7"})],-1)])])):qt("",!0)]),_:1}))}},IN={__name:"MouseTrail",setup(n){const{isMouseTrailEnabled:e}=vv();let t=null;const i=()=>{t||(t=hR({size:45,trailLength:400,trailWidth:16}))},r=()=>{t&&(t(),t=null)};return yn(()=>{e.value&&i()}),Cn(()=>{r()}),li(e,s=>{s?i():r()}),(s,o)=>null}},NN={__name:"IntroLoader",setup(n){const e=we(!0),t=we(null);return yn(()=>{document.body.style.overflow="hidden";const i=getComputedStyle(document.documentElement).getPropertyValue("--color-primary-500").trim();t.value.style.backgroundColor=`rgb(${i})`;const r={size:3};t.value.style.setProperty("--hole-size",`${r.size}%`),$e.delayedCall(.5,()=>{$e.to(r,{size:100,duration:.6,ease:"power2.inOut",onUpdate:()=>{t.value.style.setProperty("--hole-size",`${r.size}%`)},onComplete:()=>{e.value=!1,document.body.style.overflow=""}})})}),Cn(()=>{document.body.style.overflow=""}),(i,r)=>e.value?(Y(),Q("div",{key:0,ref_key:"overlayRef",ref:t,class:"intro-overlay"},null,512)):qt("",!0)}},UN=Ks(NN,[["__scopeId","data-v-151ea3fb"]]),FN={class:"min-h-screen bg-dark-900 light:bg-secondary-50"},ON={__name:"App",setup(n){return Qw(),(e,t)=>(Y(),Q("div",FN,[et(FM),_("main",null,[et(eR),et(uR),et(RR),et(_N),et(TN)]),et(DN),et(LN),et(IN),et(UN)]))}};qb(ON).mount("#app");
