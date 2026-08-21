var Zv=Object.defineProperty;var Jv=(n,e,t)=>e in n?Zv(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var qe=(n,e,t)=>Jv(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ap(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ht={},fa=[],wr=()=>{},Rg=()=>!1,Ju=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Qu=n=>n.startsWith("onUpdate:"),wn=Object.assign,lp=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Qv=Object.prototype.hasOwnProperty,Dt=(n,e)=>Qv.call(n,e),it=Array.isArray,ha=n=>oc(n)==="[object Map]",ed=n=>oc(n)==="[object Set]",c0=n=>oc(n)==="[object Date]",dt=n=>typeof n=="function",Zt=n=>typeof n=="string",Rr=n=>typeof n=="symbol",Lt=n=>n!==null&&typeof n=="object",Pg=n=>(Lt(n)||dt(n))&&dt(n.then)&&dt(n.catch),Dg=Object.prototype.toString,oc=n=>Dg.call(n),ey=n=>oc(n).slice(8,-1),Lg=n=>oc(n)==="[object Object]",cp=n=>Zt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,xl=ap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),td=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},ty=/-\w/g,ir=td(n=>n.replace(ty,e=>e.slice(1).toUpperCase())),ny=/\B([A-Z])/g,Xs=td(n=>n.replace(ny,"-$1").toLowerCase()),Ig=td(n=>n.charAt(0).toUpperCase()+n.slice(1)),bd=td(n=>n?`on${Ig(n)}`:""),_r=(n,e)=>!Object.is(n,e),su=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ug=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},nd=n=>{const e=parseFloat(n);return isNaN(e)?n:e},iy=n=>{const e=Zt(n)?Number(n):NaN;return isNaN(e)?n:e};let u0;const id=()=>u0||(u0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Mn(n){if(it(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Zt(i)?ay(i):Mn(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Zt(n)||Lt(n))return n}const ry=/;(?![^(]*\))/g,sy=/:([^]+)/,oy=/\/\*[^]*?\*\//g;function ay(n){const e={};return n.replace(oy,"").split(ry).forEach(t=>{if(t){const i=t.split(sy);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ct(n){let e="";if(Zt(n))e=n;else if(it(n))for(let t=0;t<n.length;t++){const i=ct(n[t]);i&&(e+=i+" ")}else if(Lt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ly="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cy=ap(ly);function Ng(n){return!!n||n===""}function uy(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=ac(n[i],e[i]);return t}function ac(n,e){if(n===e)return!0;let t=c0(n),i=c0(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Rr(n),i=Rr(e),t||i)return n===e;if(t=it(n),i=it(e),t||i)return t&&i?uy(n,e):!1;if(t=Lt(n),i=Lt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ac(n[o],e[o]))return!1}}return String(n)===String(e)}function dy(n,e){return n.findIndex(t=>ac(t,e))}const Fg=n=>!!(n&&n.__v_isRef===!0),ye=n=>Zt(n)?n:n==null?"":it(n)||Lt(n)&&(n.toString===Dg||!dt(n.toString))?Fg(n)?ye(n.value):JSON.stringify(n,Og,2):String(n),Og=(n,e)=>Fg(e)?Og(n,e.value):ha(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Sd(i,s)+" =>"]=r,t),{})}:ed(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Sd(t))}:Rr(e)?Sd(e):Lt(e)&&!it(e)&&!Lg(e)?String(e):e,Sd=(n,e="")=>{var t;return Rr(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Cn;class fy{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Cn&&(Cn.active?(this.parent=Cn,this.index=(Cn.scopes||(Cn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Cn;try{return Cn=this,e()}finally{Cn=t}}}on(){++this._on===1&&(this.prevScope=Cn,Cn=this)}off(){if(this._on>0&&--this._on===0){if(Cn===this)Cn=this.prevScope;else{let e=Cn;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function hy(){return Cn}let Wt;const Md=new WeakSet;class kg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Cn&&(Cn.active?Cn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Md.has(this)&&(Md.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,d0(this),Vg(this);const e=Wt,t=rr;Wt=this,rr=!0;try{return this.fn()}finally{Hg(this),Wt=e,rr=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)fp(e);this.deps=this.depsTail=void 0,d0(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Md.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Lf(this)&&this.run()}get dirty(){return Lf(this)}}let Bg=0,vl,yl;function zg(n,e=!1){if(n.flags|=8,e){n.next=yl,yl=n;return}n.next=vl,vl=n}function up(){Bg++}function dp(){if(--Bg>0)return;if(yl){let e=yl;for(yl=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;vl;){let e=vl;for(vl=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Vg(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Hg(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),fp(i),py(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Lf(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Gg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Gg(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ol)||(n.globalVersion=Ol,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Lf(n))))return;n.flags|=2;const e=n.dep,t=Wt,i=rr;Wt=n,rr=!0;try{Vg(n);const r=n.fn(n._value);(e.version===0||_r(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Wt=t,rr=i,Hg(n),n.flags&=-3}}function fp(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)fp(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function py(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let rr=!0;const Wg=[];function rs(){Wg.push(rr),rr=!1}function ss(){const n=Wg.pop();rr=n===void 0?!0:n}function d0(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Wt;Wt=void 0;try{e()}finally{Wt=t}}}let Ol=0;class my{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class hp{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Wt||!rr||Wt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Wt)t=this.activeLink=new my(Wt,this),Wt.deps?(t.prevDep=Wt.depsTail,Wt.depsTail.nextDep=t,Wt.depsTail=t):Wt.deps=Wt.depsTail=t,Xg(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Wt.depsTail,t.nextDep=void 0,Wt.depsTail.nextDep=t,Wt.depsTail=t,Wt.deps===t&&(Wt.deps=i)}return t}trigger(e){this.version++,Ol++,this.notify(e)}notify(e){up();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{dp()}}}function Xg(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Xg(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const If=new WeakMap,So=Symbol(""),Uf=Symbol(""),kl=Symbol("");function Vn(n,e,t){if(rr&&Wt){let i=If.get(n);i||If.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new hp),r.map=i,r.key=t),r.track()}}function $r(n,e,t,i,r,s){const o=If.get(n);if(!o){Ol++;return}const a=l=>{l&&l.trigger()};if(up(),e==="clear")o.forEach(a);else{const l=it(n),c=l&&cp(t);if(l&&t==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===kl||!Rr(f)&&f>=u)&&a(d)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(kl)),e){case"add":l?c&&a(o.get("length")):(a(o.get(So)),ha(n)&&a(o.get(Uf)));break;case"delete":l||(a(o.get(So)),ha(n)&&a(o.get(Uf)));break;case"set":ha(n)&&a(o.get(So));break}}dp()}function Vo(n){const e=At(n);return e===n?e:(Vn(e,"iterate",kl),$i(n)?e:e.map(sr))}function rd(n){return Vn(n=At(n),"iterate",kl),n}function pr(n,e){return os(n)?Ra(Mo(n)?sr(e):e):sr(e)}const gy={__proto__:null,[Symbol.iterator](){return wd(this,Symbol.iterator,n=>pr(this,n))},concat(...n){return Vo(this).concat(...n.map(e=>it(e)?Vo(e):e))},entries(){return wd(this,"entries",n=>(n[1]=pr(this,n[1]),n))},every(n,e){return Ur(this,"every",n,e,void 0,arguments)},filter(n,e){return Ur(this,"filter",n,e,t=>t.map(i=>pr(this,i)),arguments)},find(n,e){return Ur(this,"find",n,e,t=>pr(this,t),arguments)},findIndex(n,e){return Ur(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Ur(this,"findLast",n,e,t=>pr(this,t),arguments)},findLastIndex(n,e){return Ur(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Ur(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ed(this,"includes",n)},indexOf(...n){return Ed(this,"indexOf",n)},join(n){return Vo(this).join(n)},lastIndexOf(...n){return Ed(this,"lastIndexOf",n)},map(n,e){return Ur(this,"map",n,e,void 0,arguments)},pop(){return $a(this,"pop")},push(...n){return $a(this,"push",n)},reduce(n,...e){return f0(this,"reduce",n,e)},reduceRight(n,...e){return f0(this,"reduceRight",n,e)},shift(){return $a(this,"shift")},some(n,e){return Ur(this,"some",n,e,void 0,arguments)},splice(...n){return $a(this,"splice",n)},toReversed(){return Vo(this).toReversed()},toSorted(n){return Vo(this).toSorted(n)},toSpliced(...n){return Vo(this).toSpliced(...n)},unshift(...n){return $a(this,"unshift",n)},values(){return wd(this,"values",n=>pr(this,n))}};function wd(n,e,t){const i=rd(n),r=i[e]();return i!==n&&!$i(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const _y=Array.prototype;function Ur(n,e,t,i,r,s){const o=rd(n),a=o!==n&&!$i(n),l=o[e];if(l!==_y[e]){const d=l.apply(n,s);return a?sr(d):d}let c=t;o!==n&&(a?c=function(d,f){return t.call(this,pr(n,d),f,n)}:t.length>2&&(c=function(d,f){return t.call(this,d,f,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function f0(n,e,t,i){const r=rd(n),s=r!==n&&!$i(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=pr(n,c)),t.call(this,c,pr(n,u),d,n)}):t.length>3&&(o=function(c,u,d){return t.call(this,c,u,d,n)}));const l=r[e](o,...i);return a?pr(n,l):l}function Ed(n,e,t){const i=At(n);Vn(i,"iterate",kl);const r=i[e](...t);return(r===-1||r===!1)&&gp(t[0])?(t[0]=At(t[0]),i[e](...t)):r}function $a(n,e,t=[]){rs(),up();const i=At(n)[e].apply(n,t);return dp(),ss(),i}const xy=ap("__proto__,__v_isRef,__isVue"),$g=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Rr));function vy(n){Rr(n)||(n=String(n));const e=At(this);return Vn(e,"has",n),e.hasOwnProperty(n)}class jg{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Ry:Zg:s?Kg:qg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=it(e);if(!r){let l;if(o&&(l=gy[t]))return l;if(t==="hasOwnProperty")return vy}const a=Reflect.get(e,t,$n(e)?e:i);if((Rr(t)?$g.has(t):xy(t))||(r||Vn(e,"get",t),s))return a;if($n(a)){const l=o&&cp(t)?a:a.value;return r&&Lt(l)?Ff(l):l}return Lt(a)?r?Ff(a):pa(a):a}}class Yg extends jg{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=it(e)&&cp(t);if(!this._isShallow){const c=os(s);if(!$i(i)&&!os(i)&&(s=At(s),i=At(i)),!o&&$n(s)&&!$n(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:Dt(e,t),l=Reflect.set(e,t,i,$n(e)?e:r);return e===At(r)&&l&&(a?_r(i,s)&&$r(e,"set",t,i):$r(e,"add",t,i)),l}deleteProperty(e,t){const i=Dt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&$r(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Rr(t)||!$g.has(t))&&Vn(e,"has",t),i}ownKeys(e){return Vn(e,"iterate",it(e)?"length":So),Reflect.ownKeys(e)}}class yy extends jg{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const by=new Yg,Sy=new yy,My=new Yg(!0);const Nf=n=>n,mc=n=>Reflect.getPrototypeOf(n);function wy(n,e,t){return function(...i){const r=this.__v_raw,s=At(r),o=ha(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Nf:e?Ra:sr;return!e&&Vn(s,"iterate",l?Uf:So),wn(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function gc(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Ey(n,e){const t={get(r){const s=this.__v_raw,o=At(s),a=At(r);n||(_r(r,a)&&Vn(o,"get",r),Vn(o,"get",a));const{has:l}=mc(o),c=e?Nf:n?Ra:sr;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Vn(At(r),"iterate",So),r.size},has(r){const s=this.__v_raw,o=At(s),a=At(r);return n||(_r(r,a)&&Vn(o,"has",r),Vn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=At(a),c=e?Nf:n?Ra:sr;return!n&&Vn(l,"iterate",So),a.forEach((u,d)=>r.call(s,c(u),c(d),o))}};return wn(t,n?{add:gc("add"),set:gc("set"),delete:gc("delete"),clear:gc("clear")}:{add(r){const s=At(this),o=mc(s),a=At(r),l=!e&&!$i(r)&&!os(r)?a:r;return o.has.call(s,l)||_r(r,l)&&o.has.call(s,r)||_r(a,l)&&o.has.call(s,a)||(s.add(l),$r(s,"add",l,l)),this},set(r,s){!e&&!$i(s)&&!os(s)&&(s=At(s));const o=At(this),{has:a,get:l}=mc(o);let c=a.call(o,r);c||(r=At(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?_r(s,u)&&$r(o,"set",r,s):$r(o,"add",r,s),this},delete(r){const s=At(this),{has:o,get:a}=mc(s);let l=o.call(s,r);l||(r=At(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&$r(s,"delete",r,void 0),c},clear(){const r=At(this),s=r.size!==0,o=r.clear();return s&&$r(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=wy(r,n,e)}),t}function pp(n,e){const t=Ey(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Dt(t,r)&&r in i?t:i,r,s)}const Ty={get:pp(!1,!1)},Ay={get:pp(!1,!0)},Cy={get:pp(!0,!1)};const qg=new WeakMap,Kg=new WeakMap,Zg=new WeakMap,Ry=new WeakMap;function Py(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pa(n){return os(n)?n:mp(n,!1,by,Ty,qg)}function Dy(n){return mp(n,!1,My,Ay,Kg)}function Ff(n){return mp(n,!0,Sy,Cy,Zg)}function mp(n,e,t,i,r){if(!Lt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const o=Py(ey(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Mo(n){return os(n)?Mo(n.__v_raw):!!(n&&n.__v_isReactive)}function os(n){return!!(n&&n.__v_isReadonly)}function $i(n){return!!(n&&n.__v_isShallow)}function gp(n){return n?!!n.__v_raw:!1}function At(n){const e=n&&n.__v_raw;return e?At(e):n}function Ly(n){return!Dt(n,"__v_skip")&&Object.isExtensible(n)&&Ug(n,"__v_skip",!0),n}const sr=n=>Lt(n)?pa(n):n,Ra=n=>Lt(n)?Ff(n):n;function $n(n){return n?n.__v_isRef===!0:!1}function Fe(n){return Iy(n,!1)}function Iy(n,e){return $n(n)?n:new Uy(n,e)}class Uy{constructor(e,t){this.dep=new hp,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:At(e),this._value=t?e:sr(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||$i(e)||os(e);e=i?e:At(e),_r(e,t)&&(this._rawValue=e,this._value=i?e:sr(e),this.dep.trigger())}}function mt(n){return $n(n)?n.value:n}const Ny={get:(n,e,t)=>e==="__v_raw"?n:mt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return $n(r)&&!$n(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Jg(n){return Mo(n)?n:new Proxy(n,Ny)}class Fy{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new hp(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ol-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Wt!==this)return zg(this,!0),!0}get value(){const e=this.dep.track();return Gg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Oy(n,e,t=!1){let i,r;return dt(n)?i=n:(i=n.get,r=n.set),new Fy(i,r,t)}const _c={},wu=new WeakMap;let oo;function ky(n,e=!1,t=oo){if(t){let i=wu.get(t);i||wu.set(t,i=[]),i.push(n)}}function By(n,e,t=Ht){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=v=>r?v:$i(v)||r===!1||r===0?jr(v,1):jr(v);let u,d,f,h,m=!1,_=!1;if($n(n)?(d=()=>n.value,m=$i(n)):Mo(n)?(d=()=>c(n),m=!0):it(n)?(_=!0,m=n.some(v=>Mo(v)||$i(v)),d=()=>n.map(v=>{if($n(v))return v.value;if(Mo(v))return c(v);if(dt(v))return l?l(v,2):v()})):dt(n)?e?d=l?()=>l(n,2):n:d=()=>{if(f){rs();try{f()}finally{ss()}}const v=oo;oo=u;try{return l?l(n,3,[h]):n(h)}finally{oo=v}}:d=wr,e&&r){const v=d,C=r===!0?1/0:r;d=()=>jr(v(),C)}const p=hy(),g=()=>{u.stop(),p&&p.active&&lp(p.effects,u)};if(s&&e){const v=e;e=(...C)=>{const R=v(...C);return g(),R}}let x=_?new Array(n.length).fill(_c):_c;const S=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const C=u.run();if(v||r||m||(_?C.some((R,A)=>_r(R,x[A])):_r(C,x))){f&&f();const R=oo;oo=u;try{const A=[C,x===_c?void 0:_&&x[0]===_c?[]:x,h];x=C,l?l(e,3,A):e(...A)}finally{oo=R}}}else u.run()};return a&&a(S),u=new kg(d),u.scheduler=o?()=>o(S,!1):S,h=v=>ky(v,!1,u),f=u.onStop=()=>{const v=wu.get(u);if(v){if(l)l(v,4);else for(const C of v)C();wu.delete(u)}},e?i?S(!0):x=u.run():o?o(S.bind(null,!0),!0):u.run(),g.pause=u.pause.bind(u),g.resume=u.resume.bind(u),g.stop=g,g}function jr(n,e=1/0,t){if(e<=0||!Lt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,$n(n))jr(n.value,e,t);else if(it(n))for(let i=0;i<n.length;i++)jr(n[i],e,t);else if(ed(n)||ha(n))n.forEach(i=>{jr(i,e,t)});else if(Lg(n)){for(const i in n)jr(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&jr(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function lc(n,e,t,i){try{return i?n(...i):n()}catch(r){sd(r,e,t)}}function Yi(n,e,t,i){if(dt(n)){const r=lc(n,e,t,i);return r&&Pg(r)&&r.catch(s=>{sd(s,e,t)}),r}if(it(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Yi(n[s],e,t,i));return r}}function sd(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ht;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(s){rs(),lc(s,null,10,[n,l,c]),ss();return}}zy(n,t,r,i,o)}function zy(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const ti=[];let dr=-1;const ma=[];let Ts=null,oa=0;const Qg=Promise.resolve();let Eu=null;function as(n){const e=Eu||Qg;return n?e.then(this?n.bind(this):n):e}function Vy(n){let e=dr+1,t=ti.length;for(;e<t;){const i=e+t>>>1,r=ti[i],s=Bl(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function _p(n){if(!(n.flags&1)){const e=Bl(n),t=ti[ti.length-1];!t||!(n.flags&2)&&e>=Bl(t)?ti.push(n):ti.splice(Vy(e),0,n),n.flags|=1,e_()}}function e_(){Eu||(Eu=Qg.then(n_))}function Hy(n){if(!it(n))Ts&&n.id===-1?Ts.splice(oa+1,0,n):n.flags&1||(ma.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)ma.push(n[e]);e_()}function h0(n,e,t=dr+1){for(;t<ti.length;t++){const i=ti[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;ti.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function t_(n){if(ma.length){const e=[...new Set(ma)].sort((t,i)=>Bl(t)-Bl(i));if(ma.length=0,Ts){for(let t=0;t<e.length;t++)Ts.push(e[t]);return}for(Ts=e,oa=0;oa<Ts.length;oa++){const t=Ts[oa];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ts=null,oa=0}}const Bl=n=>n.id==null?n.flags&2?-1:1/0:n.id;function n_(n){try{for(dr=0;dr<ti.length;dr++){const e=ti[dr];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),lc(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;dr<ti.length;dr++){const e=ti[dr];e&&(e.flags&=-2)}dr=-1,ti.length=0,t_(),Eu=null,(ti.length||ma.length)&&n_()}}let Gi=null,i_=null;function Tu(n){const e=Gi;return Gi=n,i_=n&&n.type.__scopeId||null,e}function Au(n,e=Gi,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Du(-1);const s=Tu(e),o=wo.length;let a;try{a=n(...r)}finally{for(let l=wo.length;l>o;l--)D_();Tu(s),i._d&&Du(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function xc(n,e){if(Gi===null)return n;const t=dd(Gi),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=Ht]=e[r];s&&(dt(s)&&(s={mounted:s,updated:s}),s.deep&&jr(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ys(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(rs(),Yi(l,t,8,[n.el,a,n,e]),ss())}}function Gy(n,e){if(ii){let t=ii.provides;const i=ii.parent&&ii.parent.provides;i===t&&(t=ii.provides=Object.create(i)),t[n]=e}}function ou(n,e,t=!1){const i=U_();if(i||ga){let r=ga?ga._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&dt(e)?e.call(i&&i.proxy):e}}const Wy=Symbol.for("v-scx"),Xy=()=>ou(Wy);function Ri(n,e,t){return r_(n,e,t)}function r_(n,e,t=Ht){const{immediate:i,deep:r,flush:s,once:o}=t,a=wn({},t),l=e&&i||!e&&s!=="post";let c;if(Gl){if(s==="sync"){const h=Xy();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=wr,h.resume=wr,h.pause=wr,h}}const u=ii;a.call=(h,m,_)=>Yi(h,u,m,_);let d=!1;s==="post"?a.scheduler=h=>{ai(h,u&&u.suspense)}:s!=="sync"&&(d=!0,a.scheduler=(h,m)=>{m?h():_p(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=By(n,e,a);return Gl&&(c?c.push(f):l&&f()),f}function $y(n,e,t){const i=this.proxy,r=Zt(n)?n.includes(".")?s_(i,n):()=>i[n]:n.bind(i,i);let s;dt(e)?s=e:(s=e.handler,t=e);const o=cc(this),a=r_(r,s.bind(i),t);return o(),a}function s_(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const jy=Symbol("_vte"),od=n=>n.__isTeleport,ki=Symbol("_leaveCb"),ja=Symbol("_enterCb");function Yy(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Tn(()=>{n.isMounted=!0}),h_(()=>{n.isUnmounting=!0}),n}const Ni=[Function,Array],o_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ni,onEnter:Ni,onAfterEnter:Ni,onEnterCancelled:Ni,onBeforeLeave:Ni,onLeave:Ni,onAfterLeave:Ni,onLeaveCancelled:Ni,onBeforeAppear:Ni,onAppear:Ni,onAfterAppear:Ni,onAppearCancelled:Ni},a_=n=>{const e=n.subTree;return e.component?a_(e.component):e},qy={name:"BaseTransition",props:o_,setup(n,{slots:e}){const t=U_(),i=Yy();return()=>{const r=e.default&&u_(e.default(),!0),s=r&&r.length?l_(r):t.subTree?Rn():void 0;if(!s)return;const o=At(n),{mode:a}=o;if(i.isLeaving)return Td(s);const l=Cu(s);if(!l)return Td(s);let c=Of(l,o,i,t,d=>c=d);l.type!==ni&&zl(l,c);let u=t.subTree&&Cu(t.subTree);if(u&&u.type!==ni&&!fo(u,l)&&a_(t).type!==ni){let d=Of(u,o,i,t);if(zl(u,d),a==="out-in"&&l.type!==ni)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,u=void 0},Td(s);a==="in-out"&&l.type!==ni?d.delayLeave=(f,h,m)=>{const _=c_(i,u);_[String(u.key)]=u,f[ki]=()=>{h(),f[ki]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{m(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function l_(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==ni){e=t;break}}return e}const Ky=qy;function c_(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Of(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:p,onAppear:g,onAfterAppear:x,onAppearCancelled:S}=e,v=String(n.key),C=c_(t,n),R=(E,N)=>{E&&Yi(E,i,9,N)},A=(E,N)=>{const U=N[1];R(E,N),it(E)?E.every(L=>L.length<=1)&&U():E.length<=1&&U()},y={mode:o,persisted:a,beforeEnter(E){let N=l;if(!t.isMounted)if(s)N=p||l;else return;E[ki]&&E[ki](!0);const U=C[v];U&&fo(n,U)&&U.el[ki]&&U.el[ki](),R(N,[E])},enter(E){if(C[v]===n)return;let N=c,U=u,L=d;if(!t.isMounted)if(s)N=g||c,U=x||u,L=S||d;else return;let V=!1;E[ja]=G=>{V||(V=!0,G?R(L,[E]):R(U,[E]),y.delayedLeave&&y.delayedLeave(),E[ja]=void 0)};const z=E[ja].bind(null,!1);N?A(N,[E,z]):z()},leave(E,N){const U=String(n.key);if(E[ja]&&E[ja](!0),t.isUnmounting)return N();R(f,[E]);let L=!1;E[ki]=z=>{L||(L=!0,N(),z?R(_,[E]):R(m,[E]),E[ki]=void 0,C[U]===n&&delete C[U])};const V=E[ki].bind(null,!1);C[U]=n,h?A(h,[E,V]):V()},clone(E){const N=Of(E,e,t,i,r);return r&&r(N),N}};return y}function Td(n){if(ad(n))return n=Bs(n),n.children=null,n}function Cu(n){if(!ad(n))return od(n.type)&&n.children?l_(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&dt(t.default))return t.default()}}function zl(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;zl(od(t.type)&&Cu(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function u_(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===We?(o.patchFlag&128&&r++,i=i.concat(u_(o.children,e,a))):(e||o.type!==ni)&&i.push(a!=null?Bs(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function d_(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function p0(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Ru=new WeakMap;function bl(n,e,t,i,r=!1){if(it(n)){n.forEach((_,p)=>bl(_,e&&(it(e)?e[p]:e),t,i,r));return}if(Sl(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&bl(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?dd(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Ht?a.refs={}:a.refs,d=a.setupState,f=At(d),h=d===Ht?Rg:_=>p0(u,_)?!1:Dt(f,_),m=(_,p)=>!(p&&p0(u,p));if(c!=null&&c!==l){if(m0(e),Zt(c))u[c]=null,h(c)&&(d[c]=null);else if($n(c)){const _=e;m(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(dt(l))lc(l,a,12,[o,u]);else{const _=Zt(l),p=$n(l);if(_||p){const g=()=>{if(n.f){const x=_?h(l)?d[l]:u[l]:m()||!n.k?l.value:u[n.k];if(r)it(x)&&lp(x,s);else if(it(x))x.includes(s)||x.push(s);else if(_)u[l]=[s],h(l)&&(d[l]=u[l]);else{const S=[s];m(l,n.k)&&(l.value=S),n.k&&(u[n.k]=S)}}else _?(u[l]=o,h(l)&&(d[l]=o)):p&&(m(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const x=()=>{g(),Ru.delete(n)};x.id=-1,Ru.set(n,x),ai(x,t)}else m0(n),g()}}}function m0(n){const e=Ru.get(n);e&&(e.flags|=8,Ru.delete(n))}id().requestIdleCallback;id().cancelIdleCallback;const Sl=n=>!!n.type.__asyncLoader,ad=n=>n.type.__isKeepAlive;function Zy(n,e){f_(n,"a",e)}function Jy(n,e){f_(n,"da",e)}function f_(n,e,t=ii){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(ld(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ad(r.parent.vnode)&&Qy(i,e,t,r),r=r.parent}}function Qy(n,e,t,i){const r=ld(e,n,i,!0);In(()=>{lp(i[e],r)},t)}function ld(n,e,t=ii,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{rs();const a=cc(t),l=Yi(e,t,n,o);return a(),ss(),l});return i?r.unshift(s):r.push(s),s}}const hs=n=>(e,t=ii)=>{(!Gl||n==="sp")&&ld(n,(...i)=>e(...i),t)},e1=hs("bm"),Tn=hs("m"),t1=hs("bu"),n1=hs("u"),h_=hs("bum"),In=hs("um"),i1=hs("sp"),r1=hs("rtg"),s1=hs("rtc");function o1(n,e=ii){ld("ec",n,e)}const a1=Symbol.for("v-ndc");function tt(n,e,t,i){let r;const s=t,o=it(n);if(o||Zt(n)){const a=o&&Mo(n);let l=!1,c=!1;a&&(l=!$i(n),c=os(n),n=rd(n)),r=new Array(n.length);for(let u=0,d=n.length;u<d;u++)r[u]=e(l?c?Ra(sr(n[u])):sr(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(Lt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const kf=n=>n?N_(n)?dd(n):kf(n.parent):null,Ml=wn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>kf(n.parent),$root:n=>kf(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>m_(n),$forceUpdate:n=>n.f||(n.f=()=>{_p(n.update)}),$nextTick:n=>n.n||(n.n=as.bind(n.proxy)),$watch:n=>$y.bind(n)}),Ad=(n,e)=>n!==Ht&&!n.__isScriptSetup&&Dt(n,e),l1={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ad(i,e))return o[e]=1,i[e];if(r!==Ht&&Dt(r,e))return o[e]=2,r[e];if(Dt(s,e))return o[e]=3,s[e];if(t!==Ht&&Dt(t,e))return o[e]=4,t[e];Bf&&(o[e]=0)}}const c=Ml[e];let u,d;if(c)return e==="$attrs"&&Vn(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Ht&&Dt(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,Dt(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Ad(r,e)?(r[e]=t,!0):i!==Ht&&Dt(i,e)?(i[e]=t,!0):Dt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==Ht&&a[0]!=="$"&&Dt(n,a)||Ad(e,a)||Dt(s,a)||Dt(i,a)||Dt(Ml,a)||Dt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Dt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function g0(n){return it(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Bf=!0;function c1(n){const e=m_(n),t=n.proxy,i=n.ctx;Bf=!1,e.beforeCreate&&_0(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:m,activated:_,deactivated:p,beforeDestroy:g,beforeUnmount:x,destroyed:S,unmounted:v,render:C,renderTracked:R,renderTriggered:A,errorCaptured:y,serverPrefetch:E,expose:N,inheritAttrs:U,components:L,directives:V,filters:z}=e;if(c&&u1(c,i,null),o)for(const k in o){const K=o[k];dt(K)&&(i[k]=K.bind(t))}if(r){const k=r.call(t,t);Lt(k)&&(n.data=pa(k))}if(Bf=!0,s)for(const k in s){const K=s[k],j=dt(K)?K.bind(t,t):dt(K.get)?K.get.bind(t,t):wr,F=!dt(K)&&dt(K.set)?K.set.bind(t):wr,ce=Sn({get:j,set:F});Object.defineProperty(i,k,{enumerable:!0,configurable:!0,get:()=>ce.value,set:me=>ce.value=me})}if(a)for(const k in a)p_(a[k],i,t,k);if(l){const k=dt(l)?l.call(t):l;Reflect.ownKeys(k).forEach(K=>{Gy(K,k[K])})}u&&_0(u,n,"c");function X(k,K){it(K)?K.forEach(j=>k(j.bind(t))):K&&k(K.bind(t))}if(X(e1,d),X(Tn,f),X(t1,h),X(n1,m),X(Zy,_),X(Jy,p),X(o1,y),X(s1,R),X(r1,A),X(h_,x),X(In,v),X(i1,E),it(N))if(N.length){const k=n.exposed||(n.exposed={});N.forEach(K=>{Object.defineProperty(k,K,{get:()=>t[K],set:j=>t[K]=j,enumerable:!0})})}else n.exposed||(n.exposed={});C&&n.render===wr&&(n.render=C),U!=null&&(n.inheritAttrs=U),L&&(n.components=L),V&&(n.directives=V),E&&d_(n)}function u1(n,e,t=wr){it(n)&&(n=zf(n));for(const i in n){const r=n[i];let s;Lt(r)?"default"in r?s=ou(r.from||i,r.default,!0):s=ou(r.from||i):s=ou(r),$n(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function _0(n,e,t){Yi(it(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function p_(n,e,t,i){let r=i.includes(".")?s_(t,i):()=>t[i];if(Zt(n)){const s=e[n];dt(s)&&Ri(r,s)}else if(dt(n))Ri(r,n.bind(t));else if(Lt(n))if(it(n))n.forEach(s=>p_(s,e,t,i));else{const s=dt(n.handler)?n.handler.bind(t):e[n.handler];dt(s)&&Ri(r,s,n)}}function m_(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Pu(l,c,o,!0)),Pu(l,e,o)),Lt(e)&&s.set(e,l),l}function Pu(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Pu(n,s,t,!0),r&&r.forEach(o=>Pu(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=d1[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const d1={data:x0,props:v0,emits:v0,methods:al,computed:al,beforeCreate:qn,created:qn,beforeMount:qn,mounted:qn,beforeUpdate:qn,updated:qn,beforeDestroy:qn,beforeUnmount:qn,destroyed:qn,unmounted:qn,activated:qn,deactivated:qn,errorCaptured:qn,serverPrefetch:qn,components:al,directives:al,watch:h1,provide:x0,inject:f1};function x0(n,e){return e?n?function(){return wn(dt(n)?n.call(this,this):n,dt(e)?e.call(this,this):e)}:e:n}function f1(n,e){return al(zf(n),zf(e))}function zf(n){if(it(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function qn(n,e){return n?[...new Set([].concat(n,e))]:e}function al(n,e){return n?wn(Object.create(null),n,e):e}function v0(n,e){return n?it(n)&&it(e)?[...new Set([...n,...e])]:wn(Object.create(null),g0(n),g0(e??{})):e}function h1(n,e){if(!n)return e;if(!e)return n;const t=wn(Object.create(null),n);for(const i in e)t[i]=qn(n[i],e[i]);return t}function g_(){return{app:null,config:{isNativeTag:Rg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let p1=0;function m1(n,e){return function(i,r=null){dt(i)||(i=wn({},i)),r!=null&&!Lt(r)&&(r=null);const s=g_(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:p1++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:$1,get config(){return s.config},set config(u){},use(u,...d){return o.has(u)||(u&&dt(u.install)?(o.add(u),u.install(c,...d)):dt(u)&&(o.add(u),u(c,...d))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,d){return d?(s.components[u]=d,c):s.components[u]},directive(u,d){return d?(s.directives[u]=d,c):s.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||Ct(i,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),n(h,u,f),l=!0,c._container=u,u.__vue_app__=c,dd(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Yi(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return s.provides[u]=d,c},runWithContext(u){const d=ga;ga=c;try{return u()}finally{ga=d}}};return c}}let ga=null;const g1=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ir(e)}Modifiers`]||n[`${Xs(e)}Modifiers`];function _1(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ht;let r=t;const s=e.startsWith("update:"),o=s&&g1(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Zt(u)?u.trim():u)),o.number&&(r=t.map(nd)));let a,l=i[a=bd(e)]||i[a=bd(ir(e))];!l&&s&&(l=i[a=bd(Xs(e))]),l&&Yi(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Yi(c,n,6,r)}}const x1=new WeakMap;function __(n,e,t=!1){const i=t?x1:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!dt(n)){const l=c=>{const u=__(c,e,!0);u&&(a=!0,wn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(Lt(n)&&i.set(n,null),null):(it(s)?s.forEach(l=>o[l]=null):wn(o,s),Lt(n)&&i.set(n,o),o)}function cd(n,e){return!n||!Ju(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Dt(n,e[0].toLowerCase()+e.slice(1))||Dt(n,Xs(e))||Dt(n,e))}function y0(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:m,inheritAttrs:_}=n,p=Tu(n);let g,x;try{if(t.shapeFlag&4){const v=r||i,C=v;g=mr(c.call(C,v,u,d,h,f,m)),x=a}else{const v=e;g=mr(v.length>1?v(d,{attrs:a,slots:o,emit:l}):v(d,null)),x=e.props?a:v1(a)}}catch(v){wo.length=0,sd(v,n,1),g=Ct(ni)}let S=g;if(x&&_!==!1){const v=Object.keys(x),{shapeFlag:C}=S;v.length&&C&7&&(s&&v.some(Qu)&&(x=y1(x,s)),S=Bs(S,x,!1,!0))}if(t.dirs&&(S=Bs(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition){const v=od(S.type)&&Cu(S)||S;zl(v,t.transition)}return g=S,Tu(p),g}const v1=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ju(t))&&((e||(e={}))[t]=n[t]);return e},y1=(n,e)=>{const t={};for(const i in n)(!Qu(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function b1(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?b0(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(x_(o,i,f)&&!cd(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?b0(i,o,c):!0:!!o;return!1}function b0(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(x_(e,n,s)&&!cd(t,s))return!0}return!1}function x_(n,e,t){const i=n[t],r=e[t];return t==="style"&&Lt(i)&&Lt(r)?!ac(i,r):i!==r}function S1({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const v_={},y_=()=>Object.create(v_),b_=n=>Object.getPrototypeOf(n)===v_;function M1(n,e,t,i=!1){const r={},s=y_();n.propsDefaults=Object.create(null),S_(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Dy(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function w1(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=At(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(cd(n.emitsOptions,f))continue;const h=e[f];if(l)if(Dt(s,f))h!==s[f]&&(s[f]=h,c=!0);else{const m=ir(f);r[m]=Vf(l,a,m,h,n,!1)}else h!==s[f]&&(s[f]=h,c=!0)}}}else{S_(n,e,r,s)&&(c=!0);let u;for(const d in a)(!e||!Dt(e,d)&&((u=Xs(d))===d||!Dt(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(r[d]=Vf(l,a,d,void 0,n,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!Dt(e,d))&&(delete s[d],c=!0)}c&&$r(n.attrs,"set","")}function S_(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(xl(l))continue;const c=e[l];let u;r&&Dt(r,u=ir(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:cd(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=At(t),c=a||Ht;for(let u=0;u<s.length;u++){const d=s[u];t[d]=Vf(r,l,d,c[d],n,!Dt(c,d))}}return o}function Vf(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Dt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&dt(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=cc(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Xs(t))&&(i=!0))}return i}const E1=new WeakMap;function M_(n,e,t=!1){const i=t?E1:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!dt(n)){const u=d=>{l=!0;const[f,h]=M_(d,e,!0);wn(o,f),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Lt(n)&&i.set(n,fa),fa;if(it(s))for(let u=0;u<s.length;u++){const d=ir(s[u]);S0(d)&&(o[d]=Ht)}else if(s)for(const u in s){const d=ir(u);if(S0(d)){const f=s[u],h=o[d]=it(f)||dt(f)?{type:f}:wn({},f),m=h.type;let _=!1,p=!0;if(it(m))for(let g=0;g<m.length;++g){const x=m[g],S=dt(x)&&x.name;if(S==="Boolean"){_=!0;break}else S==="String"&&(p=!1)}else _=dt(m)&&m.name==="Boolean";h[0]=_,h[1]=p,(_||Dt(h,"default"))&&a.push(d)}}const c=[o,a];return Lt(n)&&i.set(n,c),c}function S0(n){return n[0]!=="$"&&!xl(n)}const xp=n=>n==="_"||n==="_ctx"||n==="$stable",vp=n=>it(n)?n.map(mr):[mr(n)],T1=(n,e,t)=>{if(e._n)return e;const i=Au((...r)=>vp(e(...r)),t);return i._c=!1,i},w_=(n,e,t)=>{const i=n._ctx;for(const r in n){if(xp(r))continue;const s=n[r];if(dt(s))e[r]=T1(r,s,i);else if(s!=null){const o=vp(s);e[r]=()=>o}}},E_=(n,e)=>{const t=vp(e);n.slots.default=()=>t},T_=(n,e,t)=>{for(const i in e)(t||!xp(i))&&(n[i]=e[i])},A1=(n,e,t)=>{const i=n.slots=y_();if(n.vnode.shapeFlag&32){const r=e._;r?(T_(i,e,t),t&&Ug(i,"_",r,!0)):w_(e,i)}else e&&E_(n,e)},C1=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Ht;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:T_(r,e,t):(s=!e.$stable,w_(e,r)),o=e}else e&&(E_(n,e),o={default:1});if(s)for(const a in r)!xp(a)&&o[a]==null&&delete r[a]},ai=I1;function R1(n){return P1(n)}function P1(n,e){const t=id();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=wr,insertStaticContent:m}=n,_=(w,T,H,ee=null,Y=null,O=null,I=void 0,_e=null,he=!!T.dynamicChildren)=>{if(w===T)return;w&&!fo(w,T)&&(ee=fe(w),me(w,Y,O,!0),w=null),T.patchFlag===-2&&(he=!1,T.dynamicChildren=null);const{type:ne,ref:pe,shapeFlag:P}=T;switch(ne){case ud:p(w,T,H,ee);break;case ni:g(w,T,H,ee);break;case au:w==null&&x(T,H,ee,I);break;case We:L(w,T,H,ee,Y,O,I,_e,he);break;default:P&1?C(w,T,H,ee,Y,O,I,_e,he):P&6?V(w,T,H,ee,Y,O,I,_e,he):(P&64||P&128)&&ne.process(w,T,H,ee,Y,O,I,_e,he,Ae)}pe!=null&&Y?bl(pe,w&&w.ref,O,T||w,!T):pe==null&&w&&w.ref!=null&&bl(w.ref,null,O,w,!0)},p=(w,T,H,ee)=>{if(w==null)i(T.el=a(T.children),H,ee);else{const Y=T.el=w.el;T.children!==w.children&&c(Y,T.children)}},g=(w,T,H,ee)=>{w==null?i(T.el=l(T.children||""),H,ee):T.el=w.el},x=(w,T,H,ee)=>{[w.el,w.anchor]=m(w.children,T,H,ee,w.el,w.anchor)},S=({el:w,anchor:T},H,ee)=>{let Y;for(;w&&w!==T;)Y=f(w),i(w,H,ee),w=Y;i(T,H,ee)},v=({el:w,anchor:T})=>{let H;for(;w&&w!==T;)H=f(w),r(w),w=H;r(T)},C=(w,T,H,ee,Y,O,I,_e,he)=>{if(T.type==="svg"?I="svg":T.type==="math"&&(I="mathml"),w==null)R(T,H,ee,Y,O,I,_e,he);else{const ne=w.el&&w.el._isVueCE?w.el:null;try{ne&&ne._beginPatch(),E(w,T,Y,O,I,_e,he)}finally{ne&&ne._endPatch()}}},R=(w,T,H,ee,Y,O,I,_e)=>{let he,ne;const{props:pe,shapeFlag:P,transition:M,dirs:B}=w;if(he=w.el=o(w.type,O,pe&&pe.is,pe),P&8?u(he,w.children):P&16&&y(w.children,he,null,ee,Y,Cd(w,O),I,_e),B&&Ys(w,null,ee,"created"),A(he,w,w.scopeId,I,ee),pe){for(const Q in pe)Q!=="value"&&!xl(Q)&&s(he,Q,null,pe[Q],O,ee);"value"in pe&&s(he,"value",null,pe.value,O),(ne=pe.onVnodeBeforeMount)&&lr(ne,ee,w)}B&&Ys(w,null,ee,"beforeMount");const Z=D1(Y,M);Z&&M.beforeEnter(he),i(he,T,H),((ne=pe&&pe.onVnodeMounted)||Z||B)&&ai(()=>{try{ne&&lr(ne,ee,w),Z&&M.enter(he),B&&Ys(w,null,ee,"mounted")}finally{}},Y)},A=(w,T,H,ee,Y)=>{if(H&&h(w,H),ee)for(let O=0;O<ee.length;O++)h(w,ee[O]);if(Y){let O=Y.subTree;if(T===O||P_(O.type)&&(O.ssContent===T||O.ssFallback===T)){const I=Y.vnode;A(w,I,I.scopeId,I.slotScopeIds,Y.parent)}}},y=(w,T,H,ee,Y,O,I,_e,he=0)=>{for(let ne=he;ne<w.length;ne++){const pe=w[ne]=_e?Wr(w[ne]):mr(w[ne]);_(null,pe,T,H,ee,Y,O,I,_e)}},E=(w,T,H,ee,Y,O,I)=>{const _e=T.el=w.el;let{patchFlag:he,dynamicChildren:ne,dirs:pe}=T;he|=w.patchFlag&16;const P=w.props||Ht,M=T.props||Ht;let B;if(H&&qs(H,!1),(B=M.onVnodeBeforeUpdate)&&lr(B,H,T,w),pe&&Ys(T,w,H,"beforeUpdate"),H&&qs(H,!0),ne&&(!w.dynamicChildren||w.dynamicChildren.length!==ne.length)&&(he=0,I=!1,ne=null),(P.innerHTML&&M.innerHTML==null||P.textContent&&M.textContent==null)&&u(_e,""),ne?N(w.dynamicChildren,ne,_e,H,ee,Cd(T,Y),O):I||K(w,T,_e,null,H,ee,Cd(T,Y),O,!1),he>0){if(he&16)U(_e,P,M,H,Y);else if(he&2&&P.class!==M.class&&s(_e,"class",null,M.class,Y),he&4&&s(_e,"style",P.style,M.style,Y),he&8){const Z=T.dynamicProps;for(let Q=0;Q<Z.length;Q++){const q=Z[Q],Me=P[q],xe=M[q];(xe!==Me||q==="value")&&s(_e,q,Me,xe,Y,H)}}he&1&&w.children!==T.children&&u(_e,T.children)}else!I&&ne==null&&U(_e,P,M,H,Y);((B=M.onVnodeUpdated)||pe)&&ai(()=>{B&&lr(B,H,T,w),pe&&Ys(T,w,H,"updated")},ee)},N=(w,T,H,ee,Y,O,I)=>{for(let _e=0;_e<T.length;_e++){const he=w[_e],ne=T[_e],pe=he.el&&(he.type===We||!fo(he,ne)||he.shapeFlag&198)?d(he.el):H;_(he,ne,pe,null,ee,Y,O,I,!0)}},U=(w,T,H,ee,Y)=>{if(T!==H){if(T!==Ht)for(const O in T)!xl(O)&&!(O in H)&&s(w,O,T[O],null,Y,ee);for(const O in H){if(xl(O))continue;const I=H[O],_e=T[O];I!==_e&&O!=="value"&&s(w,O,_e,I,Y,ee)}"value"in H&&s(w,"value",T.value,H.value,Y)}},L=(w,T,H,ee,Y,O,I,_e,he)=>{const ne=T.el=w?w.el:a(""),pe=T.anchor=w?w.anchor:a("");let{patchFlag:P,dynamicChildren:M,slotScopeIds:B}=T;B&&(_e=_e?_e.concat(B):B),w==null?(i(ne,H,ee),i(pe,H,ee),y(T.children||[],H,pe,Y,O,I,_e,he)):P>0&&P&64&&M&&w.dynamicChildren&&w.dynamicChildren.length===M.length?(N(w.dynamicChildren,M,H,Y,O,I,_e),(T.key!=null||Y&&T===Y.subTree)&&A_(w,T,!0)):K(w,T,H,pe,Y,O,I,_e,he)},V=(w,T,H,ee,Y,O,I,_e,he)=>{T.slotScopeIds=_e,w==null?T.shapeFlag&512?Y.ctx.activate(T,H,ee,I,he):z(T,H,ee,Y,O,I,he):G(w,T,he)},z=(w,T,H,ee,Y,O,I)=>{const _e=w.component=B1(w,ee,Y);if(ad(w)&&(_e.ctx.renderer=Ae),z1(_e,!1,I),_e.asyncDep){if(Y&&Y.registerDep(_e,X,I),!w.el){const he=_e.subTree=Ct(ni);g(null,he,T,H),w.placeholder=he.el}}else X(_e,w,T,H,Y,O,I)},G=(w,T,H)=>{const ee=T.component=w.component;if(b1(w,T,H))if(ee.asyncDep&&!ee.asyncResolved){k(ee,T,H);return}else ee.next=T,ee.update();else T.el=w.el,ee.vnode=T},X=(w,T,H,ee,Y,O,I)=>{const _e=()=>{if(w.isMounted){let{next:P,bu:M,u:B,parent:Z,vnode:Q}=w;{const De=C_(w);if(De){P&&(P.el=Q.el,k(w,P,I)),De.asyncDep.then(()=>{ai(()=>{w.isUnmounted||ne()},Y)});return}}let q=P,Me;qs(w,!1),P?(P.el=Q.el,k(w,P,I)):P=Q,M&&su(M),(Me=P.props&&P.props.onVnodeBeforeUpdate)&&lr(Me,Z,P,Q),qs(w,!0);const xe=y0(w),He=w.subTree;w.subTree=xe,_(He,xe,d(He.el),fe(He),w,Y,O),P.el=xe.el,q===null&&S1(w,xe.el),B&&ai(B,Y),(Me=P.props&&P.props.onVnodeUpdated)&&ai(()=>lr(Me,Z,P,Q),Y)}else{let P;const{el:M,props:B}=T,{bm:Z,m:Q,parent:q,root:Me,type:xe}=w,He=Sl(T);qs(w,!1),Z&&su(Z),!He&&(P=B&&B.onVnodeBeforeMount)&&lr(P,q,T),qs(w,!0);{Me.ce&&Me.ce._hasShadowRoot()&&Me.ce._injectChildStyle(xe,w.parent?w.parent.type:void 0);const De=w.subTree=y0(w);_(null,De,H,ee,w,Y,O),T.el=De.el}if(Q&&ai(Q,Y),!He&&(P=B&&B.onVnodeMounted)){const De=T;ai(()=>lr(P,q,De),Y)}(T.shapeFlag&256||q&&Sl(q.vnode)&&q.vnode.shapeFlag&256)&&w.a&&ai(w.a,Y),w.isMounted=!0,T=H=ee=null}};w.scope.on();const he=w.effect=new kg(_e);w.scope.off();const ne=w.update=he.run.bind(he),pe=w.job=he.runIfDirty.bind(he);pe.i=w,pe.id=w.uid,he.scheduler=()=>_p(pe),qs(w,!0),ne()},k=(w,T,H)=>{T.component=w;const ee=w.vnode.props;w.vnode=T,w.next=null,w1(w,T.props,ee,H),C1(w,T.children,H),rs(),h0(w),ss()},K=(w,T,H,ee,Y,O,I,_e,he=!1)=>{const ne=w&&w.children,pe=w?w.shapeFlag:0,P=T.children,{patchFlag:M,shapeFlag:B}=T;if(M>0){if(M&128){F(ne,P,H,ee,Y,O,I,_e,he);return}else if(M&256){j(ne,P,H,ee,Y,O,I,_e,he);return}}B&8?(pe&16&&J(ne,Y,O),P!==ne&&u(H,P)):pe&16?B&16?F(ne,P,H,ee,Y,O,I,_e,he):J(ne,Y,O,!0):(pe&8&&u(H,""),B&16&&y(P,H,ee,Y,O,I,_e,he))},j=(w,T,H,ee,Y,O,I,_e,he)=>{w=w||fa,T=T||fa;const ne=w.length,pe=T.length,P=Math.min(ne,pe);let M;for(M=0;M<P;M++){const B=T[M]=he?Wr(T[M]):mr(T[M]);_(w[M],B,H,null,Y,O,I,_e,he)}ne>pe?J(w,Y,O,!0,!1,P):y(T,H,ee,Y,O,I,_e,he,P)},F=(w,T,H,ee,Y,O,I,_e,he)=>{let ne=0;const pe=T.length;let P=w.length-1,M=pe-1;for(;ne<=P&&ne<=M;){const B=w[ne],Z=T[ne]=he?Wr(T[ne]):mr(T[ne]);if(fo(B,Z))_(B,Z,H,null,Y,O,I,_e,he);else break;ne++}for(;ne<=P&&ne<=M;){const B=w[P],Z=T[M]=he?Wr(T[M]):mr(T[M]);if(fo(B,Z))_(B,Z,H,null,Y,O,I,_e,he);else break;P--,M--}if(ne>P){if(ne<=M){const B=M+1,Z=B<pe?T[B].el:ee;for(;ne<=M;)_(null,T[ne]=he?Wr(T[ne]):mr(T[ne]),H,Z,Y,O,I,_e,he),ne++}}else if(ne>M)for(;ne<=P;)me(w[ne],Y,O,!0),ne++;else{const B=ne,Z=ne,Q=new Map;for(ne=Z;ne<=M;ne++){const Pe=T[ne]=he?Wr(T[ne]):mr(T[ne]);Pe.key!=null&&Q.set(Pe.key,ne)}let q,Me=0;const xe=M-Z+1;let He=!1,De=0;const be=new Array(xe);for(ne=0;ne<xe;ne++)be[ne]=0;for(ne=B;ne<=P;ne++){const Pe=w[ne];if(Me>=xe){me(Pe,Y,O,!0);continue}let Ne;if(Pe.key!=null)Ne=Q.get(Pe.key);else for(q=Z;q<=M;q++)if(be[q-Z]===0&&fo(Pe,T[q])){Ne=q;break}Ne===void 0?me(Pe,Y,O,!0):(be[Ne-Z]=ne+1,Ne>=De?De=Ne:He=!0,_(Pe,T[Ne],H,null,Y,O,I,_e,he),Me++)}const we=He?L1(be):fa;for(q=we.length-1,ne=xe-1;ne>=0;ne--){const Pe=Z+ne,Ne=T[Pe],Le=T[Pe+1],nt=Pe+1<pe?Le.el||R_(Le):ee;be[ne]===0?_(null,Ne,H,nt,Y,O,I,_e,he):He&&(q<0||ne!==we[q]?ce(Ne,H,nt,2):q--)}}},ce=(w,T,H,ee,Y=null)=>{const{el:O,type:I,transition:_e,children:he,shapeFlag:ne}=w;if(ne&6){ce(w.component.subTree,T,H,ee);return}if(ne&128){w.suspense.move(T,H,ee);return}if(ne&64){I.move(w,T,H,Ae);return}if(I===We){i(O,T,H);for(let P=0;P<he.length;P++)ce(he[P],T,H,ee);i(w.anchor,T,H);return}if(I===au){S(w,T,H);return}if(ee!==2&&ne&1&&_e)if(ee===0)_e.persisted&&!O[ki]?i(O,T,H):(_e.beforeEnter(O),i(O,T,H),ai(()=>_e.enter(O),Y));else{const{leave:P,delayLeave:M,afterLeave:B}=_e,Z=()=>{w.ctx.isUnmounted?r(O):i(O,T,H)},Q=()=>{const q=O._isLeaving||!!O[ki];O._isLeaving&&O[ki](!0),_e.persisted&&!q?Z():P(O,()=>{Z(),B&&B()})};M?M(O,Z,Q):Q()}else i(O,T,H)},me=(w,T,H,ee=!1,Y=!1)=>{const{type:O,props:I,ref:_e,children:he,dynamicChildren:ne,shapeFlag:pe,patchFlag:P,dirs:M,cacheIndex:B,memo:Z}=w;if(P===-2&&(Y=!1),_e!=null&&(rs(),bl(_e,null,H,w,!0),ss()),B!=null&&(T.renderCache[B]=void 0),pe&256){T.ctx.deactivate(w);return}const Q=pe&1&&M,q=!Sl(w);let Me;if(q&&(Me=I&&I.onVnodeBeforeUnmount)&&lr(Me,T,w),pe&6)Te(w.component,H,ee);else{if(pe&128){w.suspense.unmount(H,ee);return}Q&&Ys(w,null,T,"beforeUnmount"),pe&64?w.type.remove(w,T,H,Ae,ee):ne&&!ne.hasOnce&&(O!==We||P>0&&P&64)?J(ne,T,H,!1,!0):(O===We&&P&384||!Y&&pe&16)&&J(he,T,H),ee&&ge(w)}const xe=Z!=null&&B==null;(q&&(Me=I&&I.onVnodeUnmounted)||Q||xe)&&ai(()=>{Me&&lr(Me,T,w),Q&&Ys(w,null,T,"unmounted"),xe&&(w.el=null)},H)},ge=w=>{const{type:T,el:H,anchor:ee,transition:Y}=w;if(T===We){ve(H,ee);return}if(T===au){v(w);return}const O=()=>{r(H),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(w.shapeFlag&1&&Y&&!Y.persisted){const{leave:I,delayLeave:_e}=Y,he=()=>I(H,O);_e?_e(w.el,O,he):he()}else O()},ve=(w,T)=>{let H;for(;w!==T;)H=f(w),r(w),w=H;r(T)},Te=(w,T,H)=>{const{bum:ee,scope:Y,job:O,subTree:I,um:_e,m:he,a:ne}=w;M0(he),M0(ne),ee&&su(ee),Y.stop(),O&&(O.flags|=8,me(I,w,T,H)),_e&&ai(_e,T),ai(()=>{w.isUnmounted=!0},T)},J=(w,T,H,ee=!1,Y=!1,O=0)=>{for(let I=O;I<w.length;I++)me(w[I],T,H,ee,Y)},fe=w=>{if(w.shapeFlag&6)return fe(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const T=f(w.anchor||w.el),H=T&&T[jy];return H?f(H):T};let oe=!1;const Re=(w,T,H)=>{let ee;w==null?T._vnode&&(me(T._vnode,null,null,!0),ee=T._vnode.component):_(T._vnode||null,w,T,null,null,null,H),T._vnode=w,oe||(oe=!0,h0(ee),t_(),oe=!1)},Ae={p:_,um:me,m:ce,r:ge,mt:z,mc:y,pc:K,pbc:N,n:fe,o:n};return{render:Re,hydrate:void 0,createApp:m1(Re)}}function Cd({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function qs({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function D1(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function A_(n,e,t=!1){const i=n.children,r=e.children;if(it(i)&&it(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Wr(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&A_(o,a)),a.type===ud&&(a.patchFlag===-1&&(a=r[s]=Wr(a)),a.el=o.el),a.type===ni&&!a.el&&(a.el=o.el)}}function L1(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function C_(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:C_(e)}function M0(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function R_(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?R_(e.subTree):null}const P_=n=>n.__isSuspense;function I1(n,e){e&&e.pendingBranch?it(n)?e.effects.push(...n):e.effects.push(n):Hy(n)}const We=Symbol.for("v-fgt"),ud=Symbol.for("v-txt"),ni=Symbol.for("v-cmt"),au=Symbol.for("v-stc"),wo=[];let Ti=null;function ae(n=!1){wo.push(Ti=n?null:[])}function D_(){wo.pop(),Ti=wo[wo.length-1]||null}let Vl=1;function Du(n,e=!1){Vl+=n,n<0&&Ti&&e&&(Ti.hasOnce=!0)}function L_(n){return n.dynamicChildren=Vl>0?Ti||fa:null,D_(),Vl>0&&Ti&&Ti.push(n),n}function ue(n,e,t,i,r,s){return L_(b(n,e,t,i,r,s,!0))}function wl(n,e,t,i,r){return L_(Ct(n,e,t,i,r,!0))}function Lu(n){return n?n.__v_isVNode===!0:!1}function fo(n,e){return n.type===e.type&&n.key===e.key}const I_=({key:n})=>n??null,lu=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Zt(n)||$n(n)||dt(n)?{i:Gi,r:n,k:e,f:!!t}:n:null);function b(n,e=null,t=null,i=0,r=null,s=n===We?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&I_(e),ref:e&&lu(e),scopeId:i_,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Gi};return a?(Iu(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Zt(t)?8:16),Vl>0&&!o&&Ti&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ti.push(l),l}const Ct=U1;function U1(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===a1)&&(n=ni),Lu(n)){const a=Bs(n,e,!0);return t&&Iu(a,t),Vl>0&&!s&&Ti&&(a.shapeFlag&6?Ti[Ti.indexOf(n)]=a:Ti.push(a)),a.patchFlag=-2,a}if(W1(n)&&(n=n.__vccOpts),e){e=N1(e);let{class:a,style:l}=e;a&&!Zt(a)&&(e.class=ct(a)),Lt(l)&&(gp(l)&&!it(l)&&(l=wn({},l)),e.style=Mn(l))}const o=Zt(n)?1:P_(n)?128:od(n)?64:Lt(n)?4:dt(n)?2:0;return b(n,e,t,i,r,o,s,!0)}function N1(n){return n?gp(n)||b_(n)?wn({},n):n:null}function Bs(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?F1(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&I_(c),ref:e&&e.ref?t&&s?it(s)?s.concat(lu(e)):[s,lu(e)]:lu(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==We?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Bs(n.ssContent),ssFallback:n.ssFallback&&Bs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&zl(u,l.clone(u)),u}function Mi(n=" ",e=0){return Ct(ud,null,n,e)}function ho(n,e){const t=Ct(au,null,n);return t.staticCount=e,t}function Rn(n="",e=!1){return e?(ae(),wl(ni,null,n)):Ct(ni,null,n)}function mr(n){return n==null||typeof n=="boolean"?Ct(ni):it(n)?Ct(We,null,n.slice()):Lu(n)?Wr(n):Ct(ud,null,String(n))}function Wr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Bs(n)}function Iu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(it(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Iu(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!b_(e)?e._ctx=Gi:r===3&&Gi&&(Gi.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(dt(e)){if(i&65){Iu(n,{default:e});return}e={default:e,_ctx:Gi},t=32}else e=String(e),i&64?(t=16,e=[Mi(e)]):t=8;n.children=e,n.shapeFlag|=t}function F1(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ct([e.class,i.class]));else if(r==="style")e.style=Mn([e.style,i.style]);else if(Ju(r)){const s=e[r],o=i[r];o&&s!==o&&!(it(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!Qu(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function lr(n,e,t,i=null){Yi(n,e,7,[t,i])}const O1=g_();let k1=0;function B1(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||O1,s={uid:k1++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new fy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:M_(i,r),emitsOptions:__(i,r),emit:null,emitted:null,propsDefaults:Ht,inheritAttrs:i.inheritAttrs,ctx:Ht,data:Ht,props:Ht,attrs:Ht,slots:Ht,refs:Ht,setupState:Ht,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=_1.bind(null,s),n.ce&&n.ce(s),s}let ii=null;const U_=()=>ii||Gi;let Uu,Hl;{const n=id(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Uu=e("__VUE_INSTANCE_SETTERS__",t=>ii=t),Hl=e("__VUE_SSR_SETTERS__",t=>Gl=t)}const cc=n=>{const e=ii;return Uu(n),n.scope.on(),()=>{n.scope.off(),Uu(e)}},w0=()=>{ii&&ii.scope.off(),Uu(null)};function N_(n){return n.vnode.shapeFlag&4}let Gl=!1;function z1(n,e=!1,t=!1){e&&Hl(e);const{props:i,children:r}=n.vnode,s=N_(n);M1(n,i,s,e),A1(n,r,t||e);const o=s?V1(n,e):void 0;return e&&Hl(!1),o}function V1(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,l1);const{setup:i}=t;if(i){rs();const r=n.setupContext=i.length>1?G1(n):null,s=cc(n),o=lc(i,n,0,[n.props,r]),a=Pg(o);if(ss(),s(),(a||n.sp)&&!Sl(n)&&d_(n),a){if(o.then(w0,w0),e)return o.then(l=>{Hl(!0);try{E0(n,l,e)}finally{Hl(!1)}}).catch(l=>{sd(l,n,0)});n.asyncDep=o}else E0(n,o)}else F_(n)}function E0(n,e,t){dt(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Lt(e)&&(n.setupState=Jg(e)),F_(n)}function F_(n,e,t){const i=n.type;n.render||(n.render=i.render||wr);{const r=cc(n);rs();try{c1(n)}finally{ss(),r()}}}const H1={get(n,e){return Vn(n,"get",""),n[e]}};function G1(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,H1),slots:n.slots,emit:n.emit,expose:e}}function dd(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Jg(Ly(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ml)return Ml[t](n)},has(e,t){return t in e||t in Ml}})):n.proxy}function W1(n){return dt(n)&&"__vccOpts"in n}const Sn=(n,e)=>Oy(n,e,Gl);function X1(n,e,t){try{Du(-1);const i=arguments.length;return i===2?Lt(e)&&!it(e)?Lu(e)?Ct(n,null,[e]):Ct(n,e):Ct(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Lu(t)&&(t=[t]),Ct(n,e,t))}finally{Du(1)}}const $1="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Hf;const T0=typeof window<"u"&&window.trustedTypes;if(T0)try{Hf=T0.createPolicy("vue",{createHTML:n=>n})}catch{}const O_=Hf?n=>Hf.createHTML(n):n=>n,j1="http://www.w3.org/2000/svg",Y1="http://www.w3.org/1998/Math/MathML",Hr=typeof document<"u"?document:null,A0=Hr&&Hr.createElement("template"),q1={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Hr.createElementNS(j1,n):e==="mathml"?Hr.createElementNS(Y1,n):t?Hr.createElement(n,{is:t}):Hr.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Hr.createTextNode(n),createComment:n=>Hr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Hr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{A0.innerHTML=O_(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=A0.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},_s="transition",Ya="animation",Wl=Symbol("_vtc"),k_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},K1=wn({},o_,k_),Z1=n=>(n.displayName="Transition",n.props=K1,n),Gf=Z1((n,{slots:e})=>X1(Ky,J1(n),e)),Ks=(n,e=[])=>{it(n)?n.forEach(t=>t(...e)):n&&n(...e)},C0=n=>n?it(n)?n.some(e=>e.length>1):n.length>1:!1;function J1(n){const e={};for(const L in n)L in k_||(e[L]=n[L]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=n,m=Q1(r),_=m&&m[0],p=m&&m[1],{onBeforeEnter:g,onEnter:x,onEnterCancelled:S,onLeave:v,onLeaveCancelled:C,onBeforeAppear:R=g,onAppear:A=x,onAppearCancelled:y=S}=e,E=(L,V,z,G)=>{L._enterCancelled=G,Zs(L,V?u:a),Zs(L,V?c:o),z&&z()},N=(L,V)=>{L._isLeaving=!1,Zs(L,d),Zs(L,h),Zs(L,f),V&&V()},U=L=>(V,z)=>{const G=L?A:x,X=()=>E(V,L,z);Ks(G,[V,X]),R0(()=>{Zs(V,L?l:s),Nr(V,L?u:a),C0(G)||P0(V,i,_,X)})};return wn(e,{onBeforeEnter(L){Ks(g,[L]),Nr(L,s),Nr(L,o)},onBeforeAppear(L){Ks(R,[L]),Nr(L,l),Nr(L,c)},onEnter:U(!1),onAppear:U(!0),onLeave(L,V){L._isLeaving=!0;const z=()=>N(L,V);Nr(L,d),L._enterCancelled?(Nr(L,f),I0(L)):(I0(L),Nr(L,f)),R0(()=>{L._isLeaving&&(Zs(L,d),Nr(L,h),C0(v)||P0(L,i,p,z))}),Ks(v,[L,z])},onEnterCancelled(L){E(L,!1,void 0,!0),Ks(S,[L])},onAppearCancelled(L){E(L,!0,void 0,!0),Ks(y,[L])},onLeaveCancelled(L){N(L),Ks(C,[L])}})}function Q1(n){if(n==null)return null;if(Lt(n))return[Rd(n.enter),Rd(n.leave)];{const e=Rd(n);return[e,e]}}function Rd(n){return iy(n)}function Nr(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Wl]||(n[Wl]=new Set)).add(e)}function Zs(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Wl];t&&(t.delete(e),t.size||(n[Wl]=void 0))}function R0(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let eb=0;function P0(n,e,t,i){const r=n._endId=++eb,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=tb(n,e);if(!o)return i();const c=o+"end";let u=0;const d=()=>{n.removeEventListener(c,f),s()},f=h=>{h.target===n&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),n.addEventListener(c,f)}function tb(n,e){const t=window.getComputedStyle(n),i=m=>(t[m]||"").split(", "),r=i(`${_s}Delay`),s=i(`${_s}Duration`),o=D0(r,s),a=i(`${Ya}Delay`),l=i(`${Ya}Duration`),c=D0(a,l);let u=null,d=0,f=0;e===_s?o>0&&(u=_s,d=o,f=s.length):e===Ya?c>0&&(u=Ya,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?_s:Ya:null,f=u?u===_s?s.length:l.length:0);const h=u===_s&&/\b(?:transform|all)(?:,|$)/.test(i(`${_s}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function D0(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>L0(t)+L0(n[i])))}function L0(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function I0(n){return(n?n.ownerDocument:document).body.offsetHeight}function nb(n,e,t){const i=n[Wl];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const U0=Symbol("_vod"),ib=Symbol("_vsh"),rb=Symbol(""),sb=/(?:^|;)\s*display\s*:/;function ob(n,e,t){const i=n.style,r=Zt(t);let s=!1;if(t&&!r){if(e)if(Zt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ll(i,a,"")}else for(const o in e)t[o]==null&&ll(i,o,"");for(const o in t){o==="display"&&(s=!0);const a=t[o];a!=null?lb(n,o,!Zt(e)&&e?e[o]:void 0,a)||ll(i,o,a):ll(i,o,"")}}else if(r){if(e!==t){const o=i[rb];o&&(t+=";"+o),i.cssText=t,s=sb.test(t)}}else e&&n.removeAttribute("style");U0 in n&&(n[U0]=s?i.display:"",n[ib]&&(i.display="none"))}const N0=/\s*!important$/;function ll(n,e,t){if(it(t))t.forEach(i=>ll(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=ab(n,e);N0.test(t)?n.setProperty(Xs(i),t.replace(N0,""),"important"):n[i]=t}}const F0=["Webkit","Moz","ms"],Pd={};function ab(n,e){const t=Pd[e];if(t)return t;let i=ir(e);if(i!=="filter"&&i in n)return Pd[e]=i;i=Ig(i);for(let r=0;r<F0.length;r++){const s=F0[r]+i;if(s in n)return Pd[e]=s}return e}function lb(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Zt(i)&&t===i}const O0="http://www.w3.org/1999/xlink";function k0(n,e,t,i,r,s=cy(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(O0,e.slice(6,e.length)):n.setAttributeNS(O0,e,t):t==null||s&&!Ng(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Rr(t)?String(t):t)}function B0(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?O_(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Ng(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function po(n,e,t,i){n.addEventListener(e,t,i)}function cb(n,e,t,i){n.removeEventListener(e,t,i)}const z0=Symbol("_vei");function ub(n,e,t,i,r=null){const s=n[z0]||(n[z0]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=hb(e);if(i){const c=s[e]=gb(i,r);po(n,a,c,l)}else o&&(cb(n,a,o,l),s[e]=void 0)}}const db=/(Once|Passive|Capture)$/,fb=/^on:?(?:Once|Passive|Capture)$/;function hb(n){let e,t;for(;(t=n.match(db))&&!fb.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Xs(n.slice(2)),e]}let Dd=0;const pb=Promise.resolve(),mb=()=>Dd||(pb.then(()=>Dd=0),Dd=Date.now());function gb(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(it(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Yi(c,e,5,a)}}else Yi(r,e,5,[i])};return t.value=n,t.attached=mb(),t}const V0=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,_b=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?nb(n,i,o):e==="style"?ob(n,t,i):Ju(e)?Qu(e)||ub(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xb(n,e,i,o))?(B0(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&k0(n,e,i,o,s,e!=="value")):n._isVueCE&&(vb(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Zt(i)))?B0(n,ir(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),k0(n,e,i,o))};function xb(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&V0(e)&&dt(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return V0(e)&&Zt(t)?!1:e in n}function vb(n,e){const t=n._def.props;if(!t)return!1;const i=ir(e);return Array.isArray(t)?t.some(r=>ir(r)===i):Object.keys(t).some(r=>ir(r)===i)}const Nu=n=>{const e=n.props["onUpdate:modelValue"]||!1;return it(e)?t=>su(e,t):e};function yb(n){n.target.composing=!0}function H0(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _o=Symbol("_assign"),vc=Symbol("_initialValue");function Ld(n,e,t){return e&&(n=n.trim()),t&&(n=nd(n)),n}const Id={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n.parentNode&&(n.type==="text"?n[vc]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[vc]=n.defaultValue.replace(/\r\n?/g,`
`))),n[_o]=Nu(r);const s=i||r.props&&r.props.type==="number";po(n,e?"change":"input",o=>{o.target.composing||n[_o](Ld(n.value,t,s))}),(t||s)&&po(n,"change",()=>{n.value=Ld(n.value,t,s)}),e||(po(n,"compositionstart",yb),po(n,"compositionend",H0),po(n,"change",H0))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const r=e??"",s=n[vc];delete n[vc],s!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==s?n[_o](Ld(n.value,t,i)):n.value=r},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[_o]=Nu(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?nd(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},bb={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,po(n,"change",()=>{const r=Array.prototype.filter.call(n.options,s=>s.selected).map(s=>t?nd(Fu(s)):Fu(s));n[_o](n.multiple?ed(n._modelValue)?new Set(r):r:r[0]),n._assigning=!0,as(()=>{n._assigning=!1})}),n[_o]=Nu(i)},mounted(n,{value:e}){G0(n,e)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[_o]=Nu(t)},updated(n,{value:e}){n._assigning||G0(n,e)}};function G0(n,e){const t=n.multiple,i=it(e);if(!(t&&!i&&!ed(e))){for(let r=0,s=n.options.length;r<s;r++){const o=n.options[r],a=Fu(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=dy(e,a)>-1}else o.selected=e.has(a);else if(ac(Fu(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Fu(n){return"_value"in n?n._value:n.value}const Sb=["ctrl","shift","alt","meta"],Mb={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Sb.some(t=>n[`${t}Key`]&&!e.includes(t))},Cs=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=Mb[e[o]];if(a&&a(r,e))return}return n(r,...s)}))},wb={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Eb=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(r=>{if(!("key"in r))return;const s=Xs(r.key);if(e.some(o=>o===s||wb[o]===s))return n(r)}))},Tb=wn({patchProp:_b},q1);let W0;function Ab(){return W0||(W0=R1(Tb))}const Cb=((...n)=>{const e=Ab().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Pb(i);if(!r)return;const s=e._component;!dt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Rb(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Rb(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Pb(n){return Zt(n)?document.querySelector(n):n}const fd={goldenHour:{name:"Lime",primary:{50:"#fafff0",100:"#f2ffd6",200:"#e6ffad",300:"#daff7a",400:"#d2ff02",500:"#bde602",600:"#9ebf02",700:"#7e9901",800:"#5f7301",900:"#3f4d01"},accent:{50:"#fafff0",100:"#f2ffd6",200:"#e6ffad",300:"#daff7a",400:"#d2ff02",500:"#bde602",600:"#9ebf02",700:"#7e9901",800:"#5f7301",900:"#3f4d01"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#44403c",800:"#292524",900:"#1c1917"}},emerald:{name:"Emerald",primary:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},accent:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#44403c",800:"#292524",900:"#1c1917"}},ocean:{name:"Ocean",primary:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},accent:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},secondary:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},dark:{700:"#334155",800:"#1e293b",900:"#0f172a"}},sunset:{name:"Sunset",primary:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},accent:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#44403c",800:"#292524",900:"#1c1917"}},royal:{name:"Royal",primary:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},accent:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},secondary:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},dark:{700:"#334155",800:"#1e293b",900:"#0f172a"}},beach:{name:"Beach",primary:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},accent:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#44403c",800:"#292524",900:"#1c1917"}},rose:{name:"Rose",primary:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},accent:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#44403c",800:"#292524",900:"#1c1917"}},moonlit:{name:"Silver",primary:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},accent:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#334155",800:"#1e293b",900:"#0f172a"}},maple:{name:"Maple",primary:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},accent:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},secondary:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},dark:{700:"#44403c",800:"#292524",900:"#1c1917"}}},yc=n=>{const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return e?`${parseInt(e[1],16)} ${parseInt(e[2],16)} ${parseInt(e[3],16)}`:"0 0 0"},_a=Fe("goldenHour"),B_=n=>{const e=fd[n];if(!e)return;const t=document.documentElement;Object.entries(e.primary).forEach(([i,r])=>{t.style.setProperty(`--color-primary-${i}`,yc(r))}),Object.entries(e.accent).forEach(([i,r])=>{t.style.setProperty(`--color-accent-${i}`,yc(r))}),Object.entries(e.secondary).forEach(([i,r])=>{t.style.setProperty(`--color-secondary-${i}`,yc(r))}),Object.entries(e.dark).forEach(([i,r])=>{t.style.setProperty(`--color-dark-${i}`,yc(r))})},Db=()=>{const n=localStorage.getItem("colorPalette");n&&fd[n]?_a.value=n:_a.value="goldenHour",B_(_a.value)};Ri(_a,n=>{B_(n),window.dispatchEvent(new CustomEvent("colorpalettechange"))});const Lb=n=>{fd[n]&&(_a.value=n,localStorage.setItem("colorPalette",n))};Db();function Ib(){return{colorPalettes:fd,selectedPalette:_a,setPalette:Lb}}function Gr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function z_(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Pi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Xl={duration:.5,overwrite:!1,delay:0},yp,Ln,jt,Wi=1e8,Vt=1/Wi,Wf=Math.PI*2,Ub=Wf/4,Nb=0,V_=Math.sqrt,Fb=Math.cos,Ob=Math.sin,En=function(e){return typeof e=="string"},Qt=function(e){return typeof e=="function"},ls=function(e){return typeof e=="number"},bp=function(e){return typeof e>"u"},Pr=function(e){return typeof e=="object"},ui=function(e){return e!==!1},Sp=function(){return typeof window<"u"},bc=function(e){return Qt(e)||En(e)},H_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},jn=Array.isArray,kb=/random\([^)]+\)/g,Bb=/,\s*/g,X0=/(?:-?\.?\d|\.)+/gi,G_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ca=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ud=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,W_=/[+-]=-?[.\d]+/,zb=/[^,'"\[\]\s]+/gi,Vb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,qt,fr,Xf,Mp,Li={},Ou={},X_,$_=function(e){return(Ou=Pa(e,Li))&&mi},wp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},$l=function(e,t){return!t&&console.warn(e)},j_=function(e,t){return e&&(Li[e]=t)&&Ou&&(Ou[e]=t)||Li},jl=function(){return 0},Hb={suppressEvents:!0,isStart:!0,kill:!1},cu={suppressEvents:!0,kill:!1},Gb={suppressEvents:!0},Ep={},Ns=[],$f={},Y_,bi={},Nd={},$0=30,uu=[],Tp="",Ap=function(e){var t=e[0],i,r;if(Pr(t)||Qt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=uu.length;r--&&!uu[r].targetTest(t););i=uu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new gx(e[r],i)))||e.splice(r,1);return e},Eo=function(e){return e._gsap||Ap(Xi(e))[0]._gsap},q_=function(e,t,i){return(i=e[t])&&Qt(i)?e[t]():bp(i)&&e.getAttribute&&e.getAttribute(t)||i},di=function(e,t){return(e=e.split(",")).forEach(t)||e},nn=function(e){return Math.round(e*1e5)/1e5||0},Yt=function(e){return Math.round(e*1e7)/1e7||0},xa=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},Wb=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},ku=function(){var e=Ns.length,t=Ns.slice(0),i,r;for($f={},Ns.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Cp=function(e){return!!(e._initted||e._startAt||e.add)},K_=function(e,t,i,r){Ns.length&&!Ln&&ku(),e.render(t,i,!!(Ln&&t<0&&Cp(e))),Ns.length&&!Ln&&ku()},Z_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(zb).length<2?t:En(e)?e.trim():e},J_=function(e){return e},Ii=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Xb=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Pa=function(e,t){for(var i in t)e[i]=t[i];return e},j0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Pr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Bu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},El=function(e){var t=e.parent||qt,i=e.keyframes?Xb(jn(e.keyframes)):Ii;if(ui(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},$b=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Q_=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},hd=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},zs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},To=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},jb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},jf=function(e,t,i,r){return e._startAt&&(Ln?e._startAt.revert(cu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Yb=function n(e){return!e||e._ts&&n(e.parent)},Y0=function(e){return e._repeat?Da(e._tTime,e=e.duration()+e._rDelay)*e:0},Da=function(e,t){var i=Math.floor(e=Yt(e/t));return e&&i===e?i-1:i},zu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},pd=function(e){return e._end=Yt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Vt)||0))},md=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Yt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),pd(e),i._dirty||To(i,e)),e},ex=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=zu(e.rawTime(),t),(!t._dur||uc(0,t.totalDuration(),i)-t._tTime>Vt)&&t.render(i,!0)),To(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Vt}},xr=function(e,t,i,r){return t.parent&&zs(t),t._start=Yt((ls(i)?i:i||e!==qt?Oi(e,i,t):e._time)+t._delay),t._end=Yt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Q_(e,t,"_first","_last",e._sort?"_start":0),Yf(t)||(e._recent=t),r||ex(e,t),e._ts<0&&md(e,e._tTime),e},tx=function(e,t){return(Li.ScrollTrigger||wp("scrollTrigger",t))&&Li.ScrollTrigger.create(t,e)},nx=function(e,t,i,r,s){if(Pp(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Ln&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Y_!==wi.frame)return Ns.push(e),e._lazy=[s,r],1},qb=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Yf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Kb=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&qb(e)&&!(!e._initted&&Yf(e))||(e._ts<0||e._dp._ts<0)&&!Yf(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=uc(0,e._tDur,t),u=Da(l,a),e._yoyo&&u&1&&(o=1-o),u!==Da(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Ln||r||e._zTime===Vt||!t&&e._zTime){if(!e._initted&&nx(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?Vt:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&jf(e,t,i,!0),e._onUpdate&&!i&&Ai(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ai(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&zs(e,1),!i&&!Ln&&(Ai(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Zb=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},La=function(e,t,i,r){var s=e._repeat,o=Yt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Yt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&md(e,e._tTime=e._tDur*a),e.parent&&pd(e),i||To(e.parent,e),e},q0=function(e){return e instanceof ci?To(e):La(e,e._dur)},Jb={_start:0,endTime:jl,totalDuration:jl},Oi=function n(e,t,i){var r=e.labels,s=e._recent||Jb,o=e.duration()>=Wi?s.endTime(!1):e._dur,a,l,c;return En(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(jn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Tl=function(e,t,i){var r=ls(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ui(l.vars.inherit)&&l.parent;o.immediateRender=ui(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new ln(t[0],o,t[s+1])},$s=function(e,t){return e||e===0?t(e):t},uc=function(e,t,i){return i<e?e:i>t?t:i},Hn=function(e,t){return!En(e)||!(t=Vb.exec(e))?"":t[1]},Qb=function(e,t,i){return $s(i,function(r){return uc(e,t,r)})},qf=[].slice,ix=function(e,t){return e&&Pr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Pr(e[0]))&&!e.nodeType&&e!==fr},eS=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return En(r)&&!t||ix(r,1)?(s=i).push.apply(s,Xi(r)):i.push(r)})||i},Xi=function(e,t,i){return jt&&!t&&jt.selector?jt.selector(e):En(e)&&!i&&(Xf||!Ia())?qf.call((t||Mp).querySelectorAll(e),0):jn(e)?eS(e,i):ix(e)?qf.call(e,0):e?[e]:[]},Kf=function(e){return e=Xi(e)[0]||$l("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Xi(t,i.querySelectorAll?i:i===e?$l("Invalid scope")||Mp.createElement("div"):e)}},rx=function(e){return e.sort(function(){return .5-Math.random()})},sx=function(e){if(Qt(e))return e;var t=Pr(e)?e:{each:e},i=Ao(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,d=r;return En(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],d=r[1]),function(f,h,m){var _=(m||t).length,p=o[_],g,x,S,v,C,R,A,y,E;if(!p){if(E=t.grid==="auto"?0:(t.grid||[1,Wi])[1],!E){for(A=-Wi;A<(A=m[E++].getBoundingClientRect().left)&&E<_;);E<_&&E--}for(p=o[_]=[],g=l?Math.min(E,_)*u-.5:r%E,x=E===Wi?0:l?_*d/E-.5:r/E|0,A=0,y=Wi,R=0;R<_;R++)S=R%E-g,v=x-(R/E|0),p[R]=C=c?Math.abs(c==="y"?v:S):V_(S*S+v*v),C>A&&(A=C),C<y&&(y=C);r==="random"&&rx(p),p.max=A-y,p.min=y,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(E>_?_-1:c?c==="y"?_/E:E:Math.max(E,_/E))||0)*(r==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Hn(t.amount||t.each)||0,i=i&&_<0?hS(i):i}return _=(p[f]-p.min)/p.max||0,Yt(p.b+(i?i(_):_)*p.v)+p.u}},Zf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Yt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(ls(i)?0:Hn(i))}},ox=function(e,t){var i=jn(e),r,s;return!i&&Pr(e)&&(r=i=e.radius||Wi,e.values?(e=Xi(e.values),(s=!ls(e[0]))&&(r*=r)):e=Zf(e.increment)),$s(t,i?Qt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Wi,u=0,d=e.length,f,h;d--;)s?(f=e[d].x-a,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-a),f<c&&(c=f,u=d);return u=!r||c<=r?e[u]:o,s||u===o||ls(o)?u:u+Hn(o)}:Zf(e))},ax=function(e,t,i,r){return $s(jn(e)?!t:i===!0?!!(i=0):!r,function(){return jn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},tS=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},nS=function(e,t){return function(i){return e(parseFloat(i))+(t||Hn(i))}},iS=function(e,t,i){return cx(e,t,0,1,i)},lx=function(e,t,i){return $s(i,function(r){return e[~~t(r)]})},rS=function n(e,t,i){var r=t-e;return jn(e)?lx(e,n(0,e.length),t):$s(i,function(s){return(r+(s-e)%r)%r+e})},sS=function n(e,t,i){var r=t-e,s=r*2;return jn(e)?lx(e,n(0,e.length-1),t):$s(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Yl=function(e){return e.replace(kb,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(Bb);return ax(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},cx=function(e,t,i,r,s){var o=t-e,a=r-i;return $s(s,function(l){return i+((l-e)/o*a||0)})},oS=function n(e,t,i,r){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var o=En(e),a={},l,c,u,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(jn(e)&&!jn(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(n(e[c-1],e[c]));d--,s=function(m){m*=d;var _=Math.min(f,~~m);return u[_](m-_)},i=t}else r||(e=Pa(jn(e)?[]:{},e));if(!u){for(l in t)Rp.call(a,e,l,"get",t[l]);s=function(m){return Ip(m,a)||(o?e.p:e)}}}return $s(i,s)},K0=function(e,t,i){var r=e.labels,s=Wi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ai=function(e,t,i){var r=e.vars,s=r[t],o=jt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&Ns.length&&ku(),a&&(jt=a),u=l?s.apply(c,l):s.call(c),jt=o,u},cl=function(e){return zs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ln),e.progress()<1&&Ai(e,"onInterrupt"),e},ua,ux=[],dx=function(e){if(e)if(e=!e.name&&e.default||e,Sp()||e.headless){var t=e.name,i=Qt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:jl,render:Ip,add:Rp,kill:MS,modifier:SS,rawVars:0},o={targetTest:0,get:0,getSetter:Lp,aliases:{},register:0};if(Ia(),e!==r){if(bi[t])return;Ii(r,Ii(Bu(e,s),o)),Pa(r.prototype,Pa(s,Bu(e,o))),bi[r.prop=t]=r,e.targetTest&&(uu.push(r),Ep[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}j_(t,r),e.register&&e.register(mi,r,fi)}else ux.push(e)},zt=255,ul={aqua:[0,zt,zt],lime:[0,zt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,zt],navy:[0,0,128],white:[zt,zt,zt],olive:[128,128,0],yellow:[zt,zt,0],orange:[zt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[zt,0,0],pink:[zt,192,203],cyan:[0,zt,zt],transparent:[zt,zt,zt,0]},Fd=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*zt+.5|0},fx=function(e,t,i){var r=e?ls(e)?[e>>16,e>>8&zt,e&zt]:0:ul.black,s,o,a,l,c,u,d,f,h,m;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ul[e])r=ul[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&zt,r&zt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&zt,e&zt]}else if(e.substr(0,3)==="hsl"){if(r=m=e.match(X0),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Fd(l+1/3,s,o),r[1]=Fd(l,s,o),r[2]=Fd(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(G_),i&&r.length<4&&(r[3]=1),r}else r=e.match(X0)||ul.transparent;r=r.map(Number)}return t&&!m&&(s=r[0]/zt,o=r[1]/zt,a=r[2]/zt,d=Math.max(s,o,a),f=Math.min(s,o,a),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===s?(o-a)/h+(o<a?6:0):d===o?(a-s)/h+2:(s-o)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},hx=function(e){var t=[],i=[],r=-1;return e.split(Fs).forEach(function(s){var o=s.match(ca)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},Z0=function(e,t,i){var r="",s=(e+r).match(Fs),o=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!s)return e;if(s=s.map(function(f){return(f=fx(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=hx(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Fs,"1").split(ca),d=c.length-1;a<d;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Fs),d=c.length-1;a<d;a++)r+=c[a]+s[a];return r+c[d]},Fs=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ul)n+="|"+e+"\\b";return new RegExp(n+")","gi")})(),aS=/hsl[a]?\(/,px=function(e){var t=e.join(" "),i;if(Fs.lastIndex=0,Fs.test(t))return i=aS.test(t),e[1]=Z0(e[1],i),e[0]=Z0(e[0],i,hx(e[1])),!0},ql,wi=(function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,d,f,h,m=function _(p){var g=n()-r,x=p===!0,S,v,C,R;if((g>e||g<0)&&(i+=g-t),r+=g,C=r-i,S=C-o,(S>0||x)&&(R=++d.frame,f=C-d.time*1e3,d.time=C=C/1e3,o+=S+(S>=s?4:s-S),v=1),x||(l=c(_)),v)for(h=0;h<a.length;h++)a[h](C,f,R,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){X_&&(!Xf&&Sp()&&(fr=Xf=window,Mp=fr.document||{},Li.gsap=mi,(fr.gsapVersions||(fr.gsapVersions=[])).push(mi.version),$_(Ou||fr.GreenSockGlobals||!fr.gsap&&fr||{}),ux.forEach(dx)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,o-d.time*1e3+1|0)},ql=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ql=0,c=jl},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){s=1e3/(p||240),o=d.time*1e3+s},add:function(p,g,x){var S=g?function(v,C,R,A){p(v,C,R,A),d.remove(S)}:p;return d.remove(p),a[x?"unshift":"push"](S),Ia(),S},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&h>=g&&h--},_listeners:a},d})(),Ia=function(){return!ql&&wi.wake()},bt={},lS=/^[\d.\-M][\d.\-,\s]/,cS=/["']/g,uS=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(cS,"").trim():+c,r=l.substr(a+1).trim();return t},dS=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},fS=function(e){var t=(e+"").split("("),i=bt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[uS(t[1])]:dS(e).split(",").map(Z_)):bt._CE&&lS.test(e)?bt._CE("",e):i},hS=function(e){return function(t){return 1-e(1-t)}},Ao=function(e,t){return e&&(Qt(e)?e:bt[e]||fS(e))||t},Oo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return di(e,function(a){bt[a]=Li[a]=s,bt[o=a.toLowerCase()]=i;for(var l in s)bt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=bt[a+"."+l]=s[l]}),s},mx=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Od=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Wf*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*Ob((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:mx(a);return s=Wf/s,l.config=function(c,u){return n(e,c,u)},l},kd=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:mx(i);return r.config=function(s){return n(e,s)},r};di("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Oo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});bt.Linear.easeNone=bt.none=bt.Linear.easeIn;Oo("Elastic",Od("in"),Od("out"),Od());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Oo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Oo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Oo("Circ",function(n){return-(V_(1-n*n)-1)});Oo("Sine",function(n){return n===1?1:-Fb(n*Ub)+1});Oo("Back",kd("in"),kd("out"),kd());bt.SteppedEase=bt.steps=Li.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Vt;return function(a){return((r*uc(0,o,a)|0)+s)*i}}};Xl.ease=bt["quad.out"];di("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Tp+=n+","+n+"Params,"});var gx=function(e,t){this.id=Nb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:q_,this.set=t?t.getSetter:Lp},Kl=(function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,La(this,+t.duration,1,1),this.data=t.data,jt&&(this._ctx=jt,jt.data.push(this)),ql||wi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,La(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Ia(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(md(this,i),!s._dp||s.parent||ex(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&xr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Vt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),K_(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Y0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Y0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Da(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Vt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?zu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Vt?0:this._rts,this.totalTime(uc(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),pd(this),jb(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ia(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Vt&&(this._tTime-=Vt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Yt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&xr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ui(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?zu(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Gb);var r=Ln;return Ln=i,Cp(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ln=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,q0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,q0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Oi(this,i),ui(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ui(r)),this._dur||(this._zTime=-Vt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Vt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Vt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Vt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Qt(i)?i:J_,l=function(){var u=r.then;r.then=null,s&&s(),Qt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){cl(this)},n})();Ii(Kl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Vt,_prom:0,_ps:!1,_rts:1});var ci=(function(n){z_(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ui(i.sortChildren),qt&&xr(i.parent||qt,Gr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&tx(Gr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Tl(0,arguments,this),this},t.from=function(r,s,o){return Tl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Tl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,El(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ln(r,s,Oi(this,o),1),this},t.call=function(r,s,o){return xr(this,ln.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new ln(r,o,Oi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,El(o).immediateRender=ui(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,d){return a.startAt=o,El(a).immediateRender=ui(a.immediateRender),this.staggerTo(r,s,a,l,c,u,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Yt(r),d=this._zTime<0!=r<0&&(this._initted||!c),f,h,m,_,p,g,x,S,v,C,R,A;if(this!==qt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||d){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,v=this._start,S=this._ts,g=!S,d&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(f=Yt(u%p),u===l?(_=this._repeat,f=c):(C=Yt(u/p),_=~~C,_&&_===C&&(f=c,_--),f>c&&(f=c)),C=Da(this._tTime,p),!a&&this._tTime&&C!==_&&this._tTime-C*p-this._dur<=0&&(C=_),R&&_&1&&(f=c-f,A=1),_!==C&&!this._lock){var y=R&&C&1,E=y===(R&&_&1);if(_<C&&(y=!y),a=y?0:u%c?c:u,this._lock=1,this.render(a||(A?0:Yt(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Ai(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,C=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,a=y?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Zb(this,Yt(a),Yt(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!C&&(Ai(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(h=this._first;h;){if(m=h._next,(h._act||f>=h._start)&&h._ts&&x!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,s,o),f!==this._time||!this._ts&&!g){x=0,m&&(u+=this._zTime=-Vt);break}}h=m}else{h=this._last;for(var N=r<0?r:f;h;){if(m=h._prev,(h._act||N<=h._end)&&h._ts&&x!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(N-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(N-h._start)*h._ts,s,o||Ln&&Cp(h)),f!==this._time||!this._ts&&!g){x=0,m&&(u+=this._zTime=N?-Vt:Vt);break}}h=m}}if(x&&!s&&(this.pause(),x.render(f>=a?0:-Vt)._zTime=f>=a?1:-1,this._ts))return this._start=v,pd(this),this.render(r,s,o);this._onUpdate&&!s&&Ai(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&zs(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Ai(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(ls(s)||(s=Oi(this,s,r)),!(r instanceof Kl)){if(jn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(En(r))return this.addLabel(r,s);if(Qt(r))r=ln.delayedCall(0,r);else return this}return this!==r?xr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Wi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ln?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return En(r)?this.removeLabel(r):Qt(r)?this.killTweensOf(r):(r.parent===this&&hd(this,r),r===this._recent&&(this._recent=this._last),To(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Yt(wi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Oi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=ln.delayedCall(0,s||jl,o);return a.data="isPause",this._hasPause=1,xr(this,a,Oi(this,r))},t.removePause=function(r){var s=this._first;for(r=Oi(this,r);s;)s._start===r&&s.data==="isPause"&&zs(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Rs!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Xi(r),l=this._first,c=ls(s),u;l;)l instanceof ln?Wb(l._targets,a)&&(c?(!Rs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Oi(o,r),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,m=ln.to(o,Ii({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Vt,onStart:function(){if(o.pause(),!h){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==p&&La(m,p,0,1).render(m._time,!0,!0),h=1}u&&u.apply(m,d||[])}},s));return f?m.render(0):m},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ii({startAt:{time:Oi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),K0(this,Oi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),K0(this,Oi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Vt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=Yt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return To(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),To(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Wi,c,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,xr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Yt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;La(o,o===qt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(qt._ts&&(K_(qt,zu(r,qt)),Y_=wi.frame),wi.frame>=$0){$0+=Pi.autoSleep||120;var s=qt._first;if((!s||!s._ts)&&Pi.autoSleep&&wi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||wi.sleep()}}},e})(Kl);Ii(ci.prototype,{_lock:0,_hasPause:0,_forcing:0});var pS=function(e,t,i,r,s,o,a){var l=new fi(this._pt,e,t,0,1,Sx,null,s),c=0,u=0,d,f,h,m,_,p,g,x;for(l.b=i,l.e=r,i+="",r+="",(g=~r.indexOf("random("))&&(r=Yl(r)),o&&(x=[i,r],o(x,e,t),i=x[0],r=x[1]),f=i.match(Ud)||[];d=Ud.exec(r);)m=d[0],_=r.substring(c,d.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),m!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:m.charAt(1)==="="?xa(p,m)-p:parseFloat(m)-p,m:h&&h<4?Math.round:0},c=Ud.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(W_.test(r)||g)&&(l.e=0),this._pt=l,l},Rp=function(e,t,i,r,s,o,a,l,c,u){Qt(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:Qt(d)?c?e[t.indexOf("set")||!Qt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,h=Qt(d)?c?vS:yx:Dp,m;if(En(r)&&(~r.indexOf("random(")&&(r=Yl(r)),r.charAt(1)==="="&&(m=xa(f,r)+(Hn(f)||0),(m||m===0)&&(r=m))),!u||f!==r||Jf)return!isNaN(f*r)&&r!==""?(m=new fi(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?bS:bx,0,h),c&&(m.fp=c),a&&m.modifier(a,this,e),this._pt=m):(!d&&!(t in e)&&wp(t,r),pS.call(this,e,t,f,r,h,l||Pi.stringFilter,c))},mS=function(e,t,i,r,s){if(Qt(e)&&(e=Al(e,s,t,i,r)),!Pr(e)||e.style&&e.nodeType||jn(e)||H_(e))return En(e)?Al(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Al(e[a],s,t,i,r);return o},_x=function(e,t,i,r,s,o){var a,l,c,u;if(bi[e]&&(a=new bi[e]).init(s,a.rawVars?t[e]:mS(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new fi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==ua))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Rs,Jf,Pp=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,f=r.keyframes,h=r.autoRevert,m=e._dur,_=e._startAt,p=e._targets,g=e.parent,x=g&&g.data==="nested"?g.vars.targets:p,S=e._overwrite==="auto"&&!yp,v=e.timeline,C=r.easeReverse||d,R,A,y,E,N,U,L,V,z,G,X,k,K;if(v&&(!f||!s)&&(s="none"),e._ease=Ao(s,Xl.ease),e._rEase=C&&(Ao(C)||e._ease),e._from=!v&&!!r.runBackwards,e._from&&(e.ratio=1),!v||f&&!r.stagger){if(V=p[0]?Eo(p[0]).harness:0,k=V&&r[V.prop],R=Bu(r,Ep),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!h?_.render(-1,!0):_.revert(u&&m?cu:Hb),_._lazy=0),o){if(zs(e._startAt=ln.set(p,Ii({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&ui(l),startAt:null,delay:0,onUpdate:c&&function(){return Ai(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ln||!a&&!h)&&e._startAt.revert(cu),a&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&m&&!_){if(t&&(a=!1),y=Ii({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ui(l),immediateRender:a,stagger:0,parent:g},R),k&&(y[V.prop]=k),zs(e._startAt=ln.set(p,y)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ln?e._startAt.revert(cu):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Vt,Vt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&ui(l)||l&&!m,A=0;A<p.length;A++){if(N=p[A],L=N._gsap||Ap(p)[A]._gsap,e._ptLookup[A]=G={},$f[L.id]&&Ns.length&&ku(),X=x===p?A:x.indexOf(N),V&&(z=new V).init(N,k||R,e,X,x)!==!1&&(e._pt=E=new fi(e._pt,N,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(j){G[j]=E}),z.priority&&(U=1)),!V||k)for(y in R)bi[y]&&(z=_x(y,R,e,X,N,x))?z.priority&&(U=1):G[y]=E=Rp.call(e,N,y,"get",R[y],X,x,0,r.stringFilter);e._op&&e._op[A]&&e.kill(N,e._op[A]),S&&e._pt&&(Rs=e,qt.killTweensOf(N,G,e.globalTime(t)),K=!e.parent,Rs=0),e._pt&&l&&($f[L.id]=1)}U&&Mx(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!K,f&&t<=0&&v.render(Wi,!0,!0)},gS=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,h;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(u=f[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Jf=1,e.vars[t]="+=0",Pp(e,a),Jf=0,l?$l(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,d.e&&(d.e=nn(i)+Hn(d.e)),d.b&&(d.b=u.s+Hn(d.b))},_S=function(e,t){var i=e[0]?Eo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Pa({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},xS=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(jn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Al=function(e,t,i,r,s){return Qt(e)?e.call(t,i,r,s):En(e)&&~e.indexOf("random(")?Yl(e):e},xx=Tp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",vx={};di(xx+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return vx[n]=1});var ln=(function(n){z_(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:El(r))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=r.parent||qt,x=(jn(i)||H_(i)?ls(i[0]):"length"in r)?[i]:Xi(i),S,v,C,R,A,y,E,N;if(a._targets=x.length?Ap(x):$l("GSAP target "+i+" not found. https://gsap.com",!Pi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,m||f||bc(c)||bc(u)){r=a.vars;var U=r.easeReverse||r.yoyoEase;if(S=a.timeline=new ci({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:x}),S.kill(),S.parent=S._dp=Gr(a),S._start=0,f||bc(c)||bc(u)){if(R=x.length,E=f&&sx(f),Pr(f))for(A in f)~xx.indexOf(A)&&(N||(N={}),N[A]=f[A]);for(v=0;v<R;v++)C=Bu(r,vx),C.stagger=0,U&&(C.easeReverse=U),N&&Pa(C,N),y=x[v],C.duration=+Al(c,Gr(a),v,y,x),C.delay=(+Al(u,Gr(a),v,y,x)||0)-a._delay,!f&&R===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),S.to(y,C,E?E(v,y,x):0),S._ease=bt.none;S.duration()?c=u=0:a.timeline=0}else if(m){El(Ii(S.vars.defaults,{ease:"none"})),S._ease=Ao(m.ease||r.ease||"none");var L=0,V,z,G;if(jn(m))m.forEach(function(X){return S.to(x,X,">")}),S.duration();else{C={};for(A in m)A==="ease"||A==="easeEach"||xS(A,m[A],C,m.easeEach);for(A in C)for(V=C[A].sort(function(X,k){return X.t-k.t}),L=0,v=0;v<V.length;v++)z=V[v],G={ease:z.e,duration:(z.t-(v?V[v-1].t:0))/100*c},G[A]=z.v,S.to(x,G,L),L+=G.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return h===!0&&!yp&&(Rs=Gr(a),qt.killTweensOf(x),Rs=0),xr(g,Gr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!c&&!m&&a._start===Yt(g._time)&&ui(d)&&Yb(Gr(a))&&g.data!=="nested")&&(a._tTime=-Vt,a.render(Math.max(0,-u)||0)),p&&tx(Gr(a),p),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-Vt&&!u?l:r<Vt?0:r,f,h,m,_,p,g,x,S;if(!c)Kb(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(f=Yt(d%_),d===l?(m=this._repeat,f=c):(p=Yt(d/_),m=~~p,m&&m===p?(f=c,m--):f>c&&(f=c)),g=this._yoyo&&m&1,g&&(f=c-f),p=Da(this._tTime,_),f===a&&!o&&this._initted&&m===p)return this._tTime=d,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Yt(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(nx(this,u?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var v=f<a;if(v!==this._inv){var C=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=C?(v?-1:1)/C:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(f/c);if(this._from&&(this.ratio=x=1-x),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!p&&(Ai(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(x,h.d),h=h._next;S&&S.render(r<0?r:S._dur*S._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&jf(this,r,s,o),Ai(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&Ai(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&jf(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&zs(this,1),!s&&!(u&&!a)&&(d||a||g)&&(Ai(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){ql||wi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Pp(this,c),u=this._ease(c/this._dur),gS(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(md(this,0),this.parent||Q_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?cl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ln),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Rs&&Rs.vars.overwrite!==!0)._first||cl(this),this.parent&&o!==this.timeline.totalDuration()&&La(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Xi(r):a,c=this._ptLookup,u=this._pt,d,f,h,m,_,p,g;if((!s||s==="all")&&$b(a,l))return s==="all"&&(this._pt=0),cl(this);for(d=this._op=this._op||[],s!=="all"&&(En(s)&&(_={},di(s,function(x){return _[x]=1}),s=_),s=_S(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],s==="all"?(d[g]=s,m=f,h={}):(h=d[g]=d[g]||{},m=s);for(_ in m)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&hd(this,p,"_pt"),delete f[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&u&&cl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Tl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Tl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return qt.killTweensOf(r,s,o)},e})(Kl);Ii(ln.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});di("staggerTo,staggerFrom,staggerFromTo",function(n){ln[n]=function(){var e=new ci,t=qf.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Dp=function(e,t,i){return e[t]=i},yx=function(e,t,i){return e[t](i)},vS=function(e,t,i,r){return e[t](r.fp,i)},yS=function(e,t,i){return e.setAttribute(t,i)},Lp=function(e,t){return Qt(e[t])?yx:bp(e[t])&&e.setAttribute?yS:Dp},bx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},bS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Sx=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Ip=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},SS=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},MS=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?hd(this,t,"_pt"):t.dep||(i=1),t=r;return!i},wS=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Mx=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},fi=(function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||bx,this.d=l||this,this.set=c||Dp,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=wS,this.m=i,this.mt=s,this.tween=r},n})();di(Tp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return Ep[n]=1});Li.TweenMax=Li.TweenLite=ln;Li.TimelineLite=Li.TimelineMax=ci;qt=new ci({sortChildren:!1,defaults:Xl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Pi.stringFilter=px;var Co=[],du={},ES=[],J0=0,TS=0,Bd=function(e){return(du[e]||ES).map(function(t){return t()})},Qf=function(){var e=Date.now(),t=[];e-J0>2&&(Bd("matchMediaInit"),Co.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=fr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),Bd("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),J0=e,Bd("matchMedia"))},wx=(function(){function n(t,i){this.selector=i&&Kf(i),this.data=[],this._r=[],this.isReverted=!1,this.id=TS++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Qt(i)&&(s=r,r=i,i=Qt);var o=this,a=function(){var c=jt,u=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=Kf(s)),jt=o,d=r.apply(o,arguments),Qt(d)&&o._r.push(d),jt=c,o.selector=u,o.isReverted=!1,d};return o.last=a,i===Qt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=jt;jt=null,i(this),jt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof ln&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof ci?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ln)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Co.length;o--;)Co[o].id===this.id&&Co.splice(o,1)},e.revert=function(i){this.kill(i||{})},n})(),AS=(function(){function n(t){this.contexts=[],this.scope=t,jt&&jt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Pr(i)||(i={matches:i});var o=new wx(0,s||this.scope),a=o.conditions={},l,c,u;jt&&!o.selector&&(o.selector=jt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=fr.matchMedia(i[c]),l&&(Co.indexOf(o)<0&&Co.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Qf):l.addEventListener("change",Qf)));return u&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n})(),Vu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return dx(r)})},timeline:function(e){return new ci(e)},getTweensOf:function(e,t){return qt.getTweensOf(e,t)},getProperty:function(e,t,i,r){En(e)&&(e=Xi(e)[0]);var s=Eo(e||{}).get,o=i?J_:Z_;return i==="native"&&(i=""),e&&(t?o((bi[t]&&bi[t].get||s)(e,t,i,r)):function(a,l,c){return o((bi[a]&&bi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Xi(e),e.length>1){var r=e.map(function(u){return mi.quickSetter(u,t,i)}),s=r.length;return function(u){for(var d=s;d--;)r[d](u)}}e=e[0]||{};var o=bi[t],a=Eo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var d=new o;ua._pt=0,d.init(e,i?u+i:u,ua,0,[e]),d.render(1,d),ua._pt&&Ip(1,ua)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=mi.to(e,Ii((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return qt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ao(e.ease,Xl.ease)),j0(Xl,e||{})},config:function(e){return j0(Pi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!bi[a]&&!Li[a]&&$l(t+" effect requires "+a+" plugin.")}),Nd[t]=function(a,l,c){return i(Xi(a),Ii(l||{},s),c)},o&&(ci.prototype[t]=function(a,l,c){return this.add(Nd[t](a,Pr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){bt[e]=Ao(t)},parseEase:function(e,t){return arguments.length?Ao(e,t):bt},getById:function(e){return qt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new ci(e),r,s;for(i.smoothChildTiming=ui(e.smoothChildTiming),qt.remove(i),i._dp=0,i._time=i._tTime=qt._time,r=qt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof ln&&r.vars.onComplete===r._targets[0]))&&xr(i,r,r._start-r._delay),r=s;return xr(qt,i,0),i},context:function(e,t){return e?new wx(e,t):jt},matchMedia:function(e){return new AS(e)},matchMediaRefresh:function(){return Co.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Qf()},addEventListener:function(e,t){var i=du[e]||(du[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=du[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:rS,wrapYoyo:sS,distribute:sx,random:ax,snap:ox,normalize:iS,getUnit:Hn,clamp:Qb,splitColor:fx,toArray:Xi,selector:Kf,mapRange:cx,pipe:tS,unitize:nS,interpolate:oS,shuffle:rx},install:$_,effects:Nd,ticker:wi,updateRoot:ci.updateRoot,plugins:bi,globalTimeline:qt,core:{PropTween:fi,globals:j_,Tween:ln,Timeline:ci,Animation:Kl,getCache:Eo,_removeLinkedListItem:hd,reverting:function(){return Ln},context:function(e){return e&&jt&&(jt.data.push(e),e._ctx=jt),jt},suppressOverwrites:function(e){return yp=e}}};di("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Vu[n]=ln[n]});wi.add(ci.updateRoot);ua=Vu.to({},{duration:0});var CS=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},RS=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=CS(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},zd=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(En(s)&&(l={},di(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}RS(a,s)}}}},mi=Vu.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Ln?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},zd("roundProps",Zf),zd("modifiers"),zd("snap",ox))||Vu;ln.version=ci.version=mi.version="3.15.0";X_=1;Sp()&&Ia();bt.Power0;bt.Power1;bt.Power2;bt.Power3;bt.Power4;bt.Linear;bt.Quad;bt.Cubic;bt.Quart;bt.Quint;bt.Strong;bt.Elastic;bt.Back;bt.SteppedEase;bt.Bounce;bt.Sine;bt.Expo;bt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Q0,Ps,va,Up,xo,em,Np,PS=function(){return typeof window<"u"},cs={},ao=180/Math.PI,ya=Math.PI/180,Ho=Math.atan2,tm=1e8,Fp=/([A-Z])/g,DS=/(left|right|width|margin|padding|x)/i,LS=/[\s,\(]\S/,vr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},eh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},IS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},US=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},NS=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},FS=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Ex=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Tx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},OS=function(e,t,i){return e.style[t]=i},kS=function(e,t,i){return e.style.setProperty(t,i)},BS=function(e,t,i){return e._gsap[t]=i},zS=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},VS=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},HS=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Kt="transform",hi=Kt+"Origin",GS=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in cs&&s){if(this.tfm=this.tfm||{},e!=="transform")e=vr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Xr(r,a)}):this.tfm[e]=o.x?o[e]:Xr(r,e),e===hi&&(this.tfm.zOrigin=o.zOrigin);else return vr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Kt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(hi,t,"")),e=Kt}(s||t)&&this.props.push(e,t,s[e])},Ax=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},WS=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Fp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Np(),(!s||!s.isStart)&&!i[Kt]&&(Ax(i),r.zOrigin&&i[hi]&&(i[hi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Cx=function(e,t){var i={target:e,props:[],revert:WS,save:GS};return e._gsap||mi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Rx,th=function(e,t){var i=Ps.createElementNS?Ps.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ps.createElement(e);return i&&i.style?i:Ps.createElement(e)},Ci=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Fp,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Ua(t)||t,1)||""},nm="O,Moz,ms,Ms,Webkit".split(","),Ua=function(e,t,i){var r=t||xo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(nm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?nm[o]:"")+e},nh=function(){PS()&&window.document&&(Q0=window,Ps=Q0.document,va=Ps.documentElement,xo=th("div")||{style:{}},th("div"),Kt=Ua(Kt),hi=Kt+"Origin",xo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Rx=!!Ua("perspective"),Np=mi.core.reverting,Up=1)},im=function(e){var t=e.ownerSVGElement,i=th("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),va.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),va.removeChild(i),s},rm=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Px=function(e){var t,i;try{t=e.getBBox()}catch{t=im(e),i=1}return t&&(t.width||t.height)||i||(t=im(e)),t&&!t.width&&!t.x&&!t.y?{x:+rm(e,["x","cx","x1"])||0,y:+rm(e,["y","cy","y1"])||0,width:0,height:0}:t},Dx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Px(e))},Vs=function(e,t){if(t){var i=e.style,r;t in cs&&t!==hi&&(t=Kt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Fp,"-$1").toLowerCase())):i.removeAttribute(t)}},Ds=function(e,t,i,r,s,o){var a=new fi(e._pt,t,i,0,1,o?Tx:Ex);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},sm={deg:1,rad:1,turn:1},XS={grid:1,flex:1},Hs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=xo.style,l=DS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",h=r==="%",m,_,p,g;if(r===o||!s||sm[r]||sm[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),g=e.getCTM&&Dx(e),(h||o==="%")&&(cs[t]||~t.indexOf("adius")))return m=g?e.getBBox()[l?"width":"height"]:e[u],nn(h?s/m*d:s/100*m);if(a[l?"width":"height"]=d+(f?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ps||!_.appendChild)&&(_=Ps.body),p=_._gsap,p&&h&&p.width&&l&&p.time===wi.time&&!p.uncache)return nn(s/p.width*d);if(h&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=d+r,m=e[u],x?e.style[t]=x:Vs(e,t)}else(h||o==="%")&&!XS[Ci(_,"display")]&&(a.position=Ci(e,"position")),_===e&&(a.position="static"),_.appendChild(xo),m=xo[u],_.removeChild(xo),a.position="absolute";return l&&h&&(p=Eo(_),p.time=wi.time,p.width=_[u]),nn(f?m*s/d:m&&s?d/m*s:0)},Xr=function(e,t,i,r){var s;return Up||nh(),t in vr&&t!=="transform"&&(t=vr[t],~t.indexOf(",")&&(t=t.split(",")[0])),cs[t]&&t!=="transform"?(s=Jl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Gu(Ci(e,hi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Hu[t]&&Hu[t](e,t,i)||Ci(e,t)||q_(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Hs(e,t,s,i)+i:s},$S=function(e,t,i,r){if(!i||i==="none"){var s=Ua(t,e,1),o=s&&Ci(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Ci(e,"borderTopColor"))}var a=new fi(this._pt,e.style,t,0,1,Sx),l=0,c=0,u,d,f,h,m,_,p,g,x,S,v,C;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Ci(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=Ci(e,t)||r,_?e.style[t]=_:Vs(e,t)),u=[i,r],px(u),i=u[0],r=u[1],f=i.match(ca)||[],C=r.match(ca)||[],C.length){for(;d=ca.exec(r);)p=d[0],x=r.substring(l,d.index),m?m=(m+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(m=1),p!==(_=f[c++]||"")&&(h=parseFloat(_)||0,v=_.substr((h+"").length),p.charAt(1)==="="&&(p=xa(h,p)+v),g=parseFloat(p),S=p.substr((g+"").length),l=ca.lastIndex-S.length,S||(S=S||Pi.units[t]||v,l===r.length&&(r+=S,a.e+=S)),v!==S&&(h=Hs(e,t,_,S)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:h,c:g-h,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Tx:Ex;return W_.test(r)&&(a.e=0),this._pt=a,a},om={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},jS=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=om[i]||i,t[1]=om[r]||r,t.join(" ")},YS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],cs[a]&&(l=1,a=a==="transformOrigin"?hi:Kt),Vs(i,a);l&&(Vs(i,Kt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Jl(i,1),o.uncache=1,Ax(r)))}},Hu={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new fi(e._pt,t,i,0,0,YS);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Zl=[1,0,0,1,0,0],Lx={},Ix=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},am=function(e){var t=Ci(e,Kt);return Ix(t)?Zl:t.substr(7).match(G_).map(nn)},Op=function(e,t){var i=e._gsap||Eo(e),r=e.style,s=am(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Zl:s):(s===Zl&&!e.offsetParent&&e!==va&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,va.appendChild(e)),s=am(e),l?r.display=l:Vs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):va.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ih=function(e,t,i,r,s,o){var a=e._gsap,l=s||Op(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,h=l[0],m=l[1],_=l[2],p=l[3],g=l[4],x=l[5],S=t.split(" "),v=parseFloat(S[0])||0,C=parseFloat(S[1])||0,R,A,y,E;i?l!==Zl&&(A=h*p-m*_)&&(y=v*(p/A)+C*(-_/A)+(_*x-p*g)/A,E=v*(-m/A)+C*(h/A)-(h*x-m*g)/A,v=y,C=E):(R=Px(e),v=R.x+(~S[0].indexOf("%")?v/100*R.width:v),C=R.y+(~(S[1]||S[0]).indexOf("%")?C/100*R.height:C)),r||r!==!1&&a.smooth?(g=v-c,x=C-u,a.xOffset=d+(g*h+x*_)-g,a.yOffset=f+(g*m+x*p)-x):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[hi]="0px 0px",o&&(Ds(o,a,"xOrigin",c,v),Ds(o,a,"yOrigin",u,C),Ds(o,a,"xOffset",d,a.xOffset),Ds(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+C)},Jl=function(e,t){var i=e._gsap||new gx(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ci(e,hi)||"0",u,d,f,h,m,_,p,g,x,S,v,C,R,A,y,E,N,U,L,V,z,G,X,k,K,j,F,ce,me,ge,ve,Te;return u=d=f=_=p=g=x=S=v=0,h=m=1,i.svg=!!(e.getCTM&&Dx(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Kt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Kt]!=="none"?l[Kt]:"")),r.scale=r.rotate=r.translate="none"),A=Op(e,i.svg),i.svg&&(i.uncache?(K=e.getBBox(),c=i.xOrigin-K.x+"px "+(i.yOrigin-K.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),ih(e,k||c,!!k||i.originIsAbsolute,i.smooth!==!1,A)),C=i.xOrigin||0,R=i.yOrigin||0,A!==Zl&&(U=A[0],L=A[1],V=A[2],z=A[3],u=G=A[4],d=X=A[5],A.length===6?(h=Math.sqrt(U*U+L*L),m=Math.sqrt(z*z+V*V),_=U||L?Ho(L,U)*ao:0,x=V||z?Ho(V,z)*ao+_:0,x&&(m*=Math.abs(Math.cos(x*ya))),i.svg&&(u-=C-(C*U+R*V),d-=R-(C*L+R*z))):(Te=A[6],ge=A[7],F=A[8],ce=A[9],me=A[10],ve=A[11],u=A[12],d=A[13],f=A[14],y=Ho(Te,me),p=y*ao,y&&(E=Math.cos(-y),N=Math.sin(-y),k=G*E+F*N,K=X*E+ce*N,j=Te*E+me*N,F=G*-N+F*E,ce=X*-N+ce*E,me=Te*-N+me*E,ve=ge*-N+ve*E,G=k,X=K,Te=j),y=Ho(-V,me),g=y*ao,y&&(E=Math.cos(-y),N=Math.sin(-y),k=U*E-F*N,K=L*E-ce*N,j=V*E-me*N,ve=z*N+ve*E,U=k,L=K,V=j),y=Ho(L,U),_=y*ao,y&&(E=Math.cos(y),N=Math.sin(y),k=U*E+L*N,K=G*E+X*N,L=L*E-U*N,X=X*E-G*N,U=k,G=K),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),h=nn(Math.sqrt(U*U+L*L+V*V)),m=nn(Math.sqrt(X*X+Te*Te)),y=Ho(G,X),x=Math.abs(y)>2e-4?y*ao:0,v=ve?1/(ve<0?-ve:ve):0),i.svg&&(k=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Ix(Ci(e,Kt)),k&&e.setAttribute("transform",k))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(h*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,x+=x<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=nn(h),i.scaleY=nn(m),i.rotation=nn(_)+a,i.rotationX=nn(p)+a,i.rotationY=nn(g)+a,i.skewX=x+a,i.skewY=S+a,i.transformPerspective=v+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[hi]=Gu(c)),i.xOffset=i.yOffset=0,i.force3D=Pi.force3D,i.renderTransform=i.svg?KS:Rx?Ux:qS,i.uncache=0,i},Gu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Vd=function(e,t,i){var r=Hn(t);return nn(parseFloat(t)+parseFloat(Hs(e,"x",i+"px",r)))+r},qS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ux(e,t)},Js="0deg",qa="0px",Qs=") ",Ux=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,d=i.rotationX,f=i.skewX,h=i.skewY,m=i.scaleX,_=i.scaleY,p=i.transformPerspective,g=i.force3D,x=i.target,S=i.zOrigin,v="",C=g==="auto"&&e&&e!==1||g===!0;if(S&&(d!==Js||u!==Js)){var R=parseFloat(u)*ya,A=Math.sin(R),y=Math.cos(R),E;R=parseFloat(d)*ya,E=Math.cos(R),o=Vd(x,o,A*E*-S),a=Vd(x,a,-Math.sin(R)*-S),l=Vd(x,l,y*E*-S+S)}p!==qa&&(v+="perspective("+p+Qs),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(C||o!==qa||a!==qa||l!==qa)&&(v+=l!==qa||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Qs),c!==Js&&(v+="rotate("+c+Qs),u!==Js&&(v+="rotateY("+u+Qs),d!==Js&&(v+="rotateX("+d+Qs),(f!==Js||h!==Js)&&(v+="skew("+f+", "+h+Qs),(m!==1||_!==1)&&(v+="scale("+m+", "+_+Qs),x.style[Kt]=v||"translate(0, 0)"},KS=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,d=i.scaleX,f=i.scaleY,h=i.target,m=i.xOrigin,_=i.yOrigin,p=i.xOffset,g=i.yOffset,x=i.forceCSS,S=parseFloat(o),v=parseFloat(a),C,R,A,y,E;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ya,c*=ya,C=Math.cos(l)*d,R=Math.sin(l)*d,A=Math.sin(l-c)*-f,y=Math.cos(l-c)*f,c&&(u*=ya,E=Math.tan(c-u),E=Math.sqrt(1+E*E),A*=E,y*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),C*=E,R*=E)),C=nn(C),R=nn(R),A=nn(A),y=nn(y)):(C=d,y=f,R=A=0),(S&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(S=Hs(h,"x",o,"px"),v=Hs(h,"y",a,"px")),(m||_||p||g)&&(S=nn(S+m-(m*C+_*A)+p),v=nn(v+_-(m*R+_*y)+g)),(r||s)&&(E=h.getBBox(),S=nn(S+r/100*E.width),v=nn(v+s/100*E.height)),E="matrix("+C+","+R+","+A+","+y+","+S+","+v+")",h.setAttribute("transform",E),x&&(h.style[Kt]=E)},ZS=function(e,t,i,r,s){var o=360,a=En(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ao:1),c=l-r,u=r+c+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*tm)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*tm)%o-~~(c/o)*o)),e._pt=f=new fi(e._pt,t,i,r,c,IS),f.e=u,f.u="deg",e._props.push(i),f},lm=function(e,t){for(var i in t)e[i]=t[i];return e},JS=function(e,t,i){var r=lm({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,d,f,h,m;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[Kt]=t,a=Jl(i,1),Vs(i,Kt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Kt],o[Kt]=t,a=Jl(i,1),o[Kt]=c);for(l in cs)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(h=Hn(c),m=Hn(u),d=h!==m?Hs(i,l,c,m):parseFloat(c),f=parseFloat(u),e._pt=new fi(e._pt,a,l,d,f-d,eh),e._pt.u=m||0,e._props.push(l));lm(a,r)};di("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Hu[e>1?"border"+n:n]=function(a,l,c,u,d){var f,h;if(arguments.length<4)return f=o.map(function(m){return Xr(a,m,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},o.forEach(function(m,_){return h[m]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,h,d)}});var Nx={name:"css",register:nh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,d,f,h,m,_,p,g,x,S,v,C,R,A,y,E;Up||nh(),this.styles=this.styles||Cx(e),y=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(bi[_]&&_x(_,t,i,r,e,s)))){if(h=typeof u,m=Hu[_],h==="function"&&(u=u.call(i,r,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Yl(u)),m)m(this,e,_,u,i)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Fs.lastIndex=0,Fs.test(c)||(p=Hn(c),g=Hn(u),g?p!==g&&(c=Hs(e,_,c,g)+g):p&&(u+=p)),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),y.push(_,0,a[_]);else if(h!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],En(c)&&~c.indexOf("random(")&&(c=Yl(c)),Hn(c+"")||c==="auto"||(c+=Pi.units[_]||Hn(Xr(e,_))||""),(c+"").charAt(1)==="="&&(c=Xr(e,_))):c=Xr(e,_),f=parseFloat(c),x=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),d=parseFloat(u),_ in vr&&(_==="autoAlpha"&&(f===1&&Xr(e,"visibility")==="hidden"&&d&&(f=0),y.push("visibility",0,a.visibility),Ds(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=vr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in cs,S){if(this.styles.save(_),E=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=Ci(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var N=e.style.perspective;e.style.perspective=u,u=Ci(e,"perspective"),N?e.style.perspective=N:Vs(e,"perspective")}d=parseFloat(u)}if(v||(C=e._gsap,C.renderTransform&&!t.parseTransform||Jl(e,t.parseTransform),R=t.smoothOrigin!==!1&&C.smooth,v=this._pt=new fi(this._pt,a,Kt,0,1,C.renderTransform,C,0,-1),v.dep=1),_==="scale")this._pt=new fi(this._pt,C,"scaleY",C.scaleY,(x?xa(C.scaleY,x+d):d)-C.scaleY||0,eh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){y.push(hi,0,a[hi]),u=jS(u),C.svg?ih(e,u,0,R,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==C.zOrigin&&Ds(this,C,"zOrigin",C.zOrigin,g),Ds(this,a,_,Gu(c),Gu(u)));continue}else if(_==="svgOrigin"){ih(e,u,1,R,0,this);continue}else if(_ in Lx){ZS(this,C,_,f,x?xa(f,x+u):u);continue}else if(_==="smoothOrigin"){Ds(this,C,"smooth",C.smooth,u);continue}else if(_==="force3D"){C[_]=u;continue}else if(_==="transform"){JS(this,u,e);continue}}else _ in a||(_=Ua(_)||_);if(S||(d||d===0)&&(f||f===0)&&!LS.test(u)&&_ in a)p=(c+"").substr((f+"").length),d||(d=0),g=Hn(u)||(_ in Pi.units?Pi.units[_]:p),p!==g&&(f=Hs(e,_,c,g)),this._pt=new fi(this._pt,S?C:a,_,f,(x?xa(f,x+d):d)-f,!S&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?FS:eh),this._pt.u=g||0,S&&E!==u?(this._pt.b=c,this._pt.e=E,this._pt.r=NS):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=US);else if(_ in a)$S.call(this,e,_,c,x?x+u:u);else if(_ in e)this.add(e,_,c||e[_],x?x+u:u,r,s);else if(_!=="parseTransform"){wp(_,u);continue}S||(_ in a?y.push(_,0,a[_]):typeof e[_]=="function"?y.push(_,2,e[_]()):y.push(_,1,c||e[_])),o.push(_)}}A&&Mx(this)},render:function(e,t){if(t.tween._time||!Np())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Xr,aliases:vr,getSetter:function(e,t,i){var r=vr[t];return r&&r.indexOf(",")<0&&(t=r),t in cs&&t!==hi&&(e._gsap.x||Xr(e,"x"))?i&&em===i?t==="scale"?zS:BS:(em=i||{})&&(t==="scale"?VS:HS):e.style&&!bp(e.style[t])?OS:~t.indexOf("-")?kS:Lp(e,t)},core:{_removeProperty:Vs,_getMatrix:Op}};mi.utils.checkPrefix=Ua;mi.core.getStyleSaver=Cx;(function(n,e,t,i){var r=di(n+","+e+","+t,function(s){cs[s]=1});di(e,function(s){Pi.units[s]="deg",Lx[s]=1}),vr[r[13]]=n+","+e,di(i,function(s){var o=s.split(":");vr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");di("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Pi.units[n]="px"});mi.registerPlugin(Nx);var Xe=mi.registerPlugin(Nx)||mi;Xe.core.Tween;function QS(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function eM(n,e,t){return e&&QS(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Pn,fu,Ei,Ls,Is,ba,Fx,lo,Sa,Ox,Kr,Qi,kx,Bx=function(){return Pn||typeof window<"u"&&(Pn=window.gsap)&&Pn.registerPlugin&&Pn},zx=1,da=[],vt=[],Er=[],Cl=Date.now,rh=function(e,t){return t},tM=function(){var e=Sa.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,vt),r.push.apply(r,Er),vt=i,Er=r,rh=function(o,a){return t[o](a)}},Os=function(e,t){return~Er.indexOf(e)&&Er[Er.indexOf(e)+1][t]},Rl=function(e){return!!~Ox.indexOf(e)},Kn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Yn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Sc="scrollLeft",Mc="scrollTop",sh=function(){return Kr&&Kr.isPressed||vt.cache++},Wu=function(e,t){var i=function r(s){if(s||s===0){zx&&(Ei.history.scrollRestoration="manual");var o=Kr&&Kr.isPressed;s=r.v=Math.round(s)||(Kr&&Kr.iOS?1:0),e(s),r.cacheID=vt.cache,o&&rh("ss",s)}else(t||vt.cache!==r.cacheID||rh("ref"))&&(r.cacheID=vt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},ri={s:Sc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Wu(function(n){return arguments.length?Ei.scrollTo(n,pn.sc()):Ei.pageXOffset||Ls[Sc]||Is[Sc]||ba[Sc]||0})},pn={s:Mc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ri,sc:Wu(function(n){return arguments.length?Ei.scrollTo(ri.sc(),n):Ei.pageYOffset||Ls[Mc]||Is[Mc]||ba[Mc]||0})},li=function(e,t){return(t&&t._ctx&&t._ctx.selector||Pn.utils.toArray)(e)[0]||(typeof e=="string"&&Pn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},nM=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Gs=function(e,t){var i=t.s,r=t.sc;Rl(e)&&(e=Ls.scrollingElement||Is);var s=vt.indexOf(e),o=r===pn.sc?1:2;!~s&&(s=vt.push(e)-1),vt[s+o]||Kn(e,"scroll",sh);var a=vt[s+o],l=a||(vt[s+o]=Wu(Os(e,i),!0)||(Rl(e)?r:Wu(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=Pn.getProperty(e,"scrollBehavior")==="smooth"),l},oh=function(e,t,i){var r=e,s=e,o=Cl(),a=o,l=t||50,c=Math.max(500,l*3),u=function(m,_){var p=Cl();_||p-o>l?(s=r,r=m,a=o,o=p):i?r+=m:r=s+(m-s)/(p-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},f=function(m){var _=a,p=s,g=Cl();return(m||m===0)&&m!==r&&u(m),o===a||g-a>c?0:(r+(i?p:-p))/((i?g:o)-_)*1e3};return{update:u,reset:d,getVelocity:f}},Ka=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},cm=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},Vx=function(){Sa=Pn.core.globals().ScrollTrigger,Sa&&Sa.core&&tM()},Hx=function(e){return Pn=e||Bx(),!fu&&Pn&&typeof document<"u"&&document.body&&(Ei=window,Ls=document,Is=Ls.documentElement,ba=Ls.body,Ox=[Ei,Ls,Is,ba],Pn.utils.clamp,kx=Pn.core.context||function(){},lo="onpointerenter"in ba?"pointer":"mouse",Fx=sn.isTouch=Ei.matchMedia&&Ei.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ei||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Qi=sn.eventTypes=("ontouchstart"in Is?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Is?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return zx=0},500),fu=1),Sa||Vx(),fu};ri.op=pn;vt.cache=0;var sn=(function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){fu||Hx(Pn)||console.warn("Please gsap.registerPlugin(Observer)"),Sa||Vx();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,d=i.onStop,f=i.onStopDelay,h=i.ignore,m=i.wheelSpeed,_=i.event,p=i.onDragStart,g=i.onDragEnd,x=i.onDrag,S=i.onPress,v=i.onRelease,C=i.onRight,R=i.onLeft,A=i.onUp,y=i.onDown,E=i.onChangeX,N=i.onChangeY,U=i.onChange,L=i.onToggleX,V=i.onToggleY,z=i.onHover,G=i.onHoverEnd,X=i.onMove,k=i.ignoreCheck,K=i.isNormalizer,j=i.onGestureStart,F=i.onGestureEnd,ce=i.onWheel,me=i.onEnable,ge=i.onDisable,ve=i.onClick,Te=i.scrollSpeed,J=i.capture,fe=i.allowClicks,oe=i.lockAxis,Re=i.onLockAxis;this.target=a=li(a)||Is,this.vars=i,h&&(h=Pn.utils.toArray(h)),r=r||1e-9,s=s||0,m=m||1,Te=Te||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Ei.getComputedStyle(ba).lineHeight)||22);var Ae,le,w,T,H,ee,Y,O=this,I=0,_e=0,he=i.passive||!u&&i.passive!==!1,ne=Gs(a,ri),pe=Gs(a,pn),P=ne(),M=pe(),B=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Qi[0]==="pointerdown",Z=Rl(a),Q=a.ownerDocument||Ls,q=[0,0,0],Me=[0,0,0],xe=0,He=function(){return xe=Cl()},De=function(Ke,ft){return(O.event=Ke)&&h&&nM(Ke.target,h)||ft&&B&&Ke.pointerType!=="touch"||k&&k(Ke,ft)},be=function(){O._vx.reset(),O._vy.reset(),le.pause(),d&&d(O)},we=function(){var Ke=O.deltaX=cm(q),ft=O.deltaY=cm(Me),Be=Math.abs(Ke)>=r,rt=Math.abs(ft)>=r;U&&(Be||rt)&&U(O,Ke,ft,q,Me),Be&&(C&&O.deltaX>0&&C(O),R&&O.deltaX<0&&R(O),E&&E(O),L&&O.deltaX<0!=I<0&&L(O),I=O.deltaX,q[0]=q[1]=q[2]=0),rt&&(y&&O.deltaY>0&&y(O),A&&O.deltaY<0&&A(O),N&&N(O),V&&O.deltaY<0!=_e<0&&V(O),_e=O.deltaY,Me[0]=Me[1]=Me[2]=0),(T||w)&&(X&&X(O),w&&(p&&w===1&&p(O),x&&x(O),w=0),T=!1),ee&&!(ee=!1)&&Re&&Re(O),H&&(ce(O),H=!1),Ae=0},Pe=function(Ke,ft,Be){q[Be]+=Ke,Me[Be]+=ft,O._vx.update(Ke),O._vy.update(ft),c?Ae||(Ae=requestAnimationFrame(we)):we()},Ne=function(Ke,ft){oe&&!Y&&(O.axis=Y=Math.abs(Ke)>Math.abs(ft)?"x":"y",ee=!0),Y!=="y"&&(q[2]+=Ke,O._vx.update(Ke,!0)),Y!=="x"&&(Me[2]+=ft,O._vy.update(ft,!0)),c?Ae||(Ae=requestAnimationFrame(we)):we()},Le=function(Ke){if(!De(Ke,1)){Ke=Ka(Ke,u);var ft=Ke.clientX,Be=Ke.clientY,rt=ft-O.x,et=Be-O.y,st=O.isDragging;O.x=ft,O.y=Be,(st||(rt||et)&&(Math.abs(O.startX-ft)>=s||Math.abs(O.startY-Be)>=s))&&(w||(w=st?2:1),st||(O.isDragging=!0),Ne(rt,et))}},nt=O.onPress=function(Ve){De(Ve,1)||Ve&&Ve.button||(O.axis=Y=null,le.pause(),O.isPressed=!0,Ve=Ka(Ve),I=_e=0,O.startX=O.x=Ve.clientX,O.startY=O.y=Ve.clientY,O._vx.reset(),O._vy.reset(),Kn(K?a:Q,Qi[1],Le,he,!0),O.deltaX=O.deltaY=0,S&&S(O))},W=O.onRelease=function(Ve){if(!De(Ve,1)){Yn(K?a:Q,Qi[1],Le,!0);var Ke=!isNaN(O.y-O.startY),ft=O.isDragging,Be=ft&&(Math.abs(O.x-O.startX)>3||Math.abs(O.y-O.startY)>3),rt=Ka(Ve);!Be&&Ke&&(O._vx.reset(),O._vy.reset(),u&&fe&&Pn.delayedCall(.08,function(){if(Cl()-xe>300&&!Ve.defaultPrevented){if(Ve.target.click)Ve.target.click();else if(Q.createEvent){var et=Q.createEvent("MouseEvents");et.initMouseEvent("click",!0,!0,Ei,1,rt.screenX,rt.screenY,rt.clientX,rt.clientY,!1,!1,!1,!1,0,null),Ve.target.dispatchEvent(et)}}})),O.isDragging=O.isGesturing=O.isPressed=!1,d&&ft&&!K&&le.restart(!0),w&&we(),g&&ft&&g(O),v&&v(O,Be)}},Ce=function(Ke){return Ke.touches&&Ke.touches.length>1&&(O.isGesturing=!0)&&j(Ke,O.isDragging)},Ee=function(){return(O.isGesturing=!1)||F(O)},Oe=function(Ke){if(!De(Ke)){var ft=ne(),Be=pe();Pe((ft-P)*Te,(Be-M)*Te,1),P=ft,M=Be,d&&le.restart(!0)}},Se=function(Ke){if(!De(Ke)){Ke=Ka(Ke,u),ce&&(H=!0);var ft=(Ke.deltaMode===1?l:Ke.deltaMode===2?Ei.innerHeight:1)*m;Pe(Ke.deltaX*ft,Ke.deltaY*ft,0),d&&!K&&le.restart(!0)}},de=function(Ke){if(!De(Ke)){var ft=Ke.clientX,Be=Ke.clientY,rt=ft-O.x,et=Be-O.y;O.x=ft,O.y=Be,T=!0,d&&le.restart(!0),(rt||et)&&Ne(rt,et)}},Ge=function(Ke){O.event=Ke,z(O)},Qe=function(Ke){O.event=Ke,G(O)},wt=function(Ke){return De(Ke)||Ka(Ke,u)&&ve(O)};le=O._dc=Pn.delayedCall(f||.25,be).pause(),O.deltaX=O.deltaY=0,O._vx=oh(0,50,!0),O._vy=oh(0,50,!0),O.scrollX=ne,O.scrollY=pe,O.isDragging=O.isGesturing=O.isPressed=!1,kx(this),O.enable=function(Ve){return O.isEnabled||(Kn(Z?Q:a,"scroll",sh),o.indexOf("scroll")>=0&&Kn(Z?Q:a,"scroll",Oe,he,J),o.indexOf("wheel")>=0&&Kn(a,"wheel",Se,he,J),(o.indexOf("touch")>=0&&Fx||o.indexOf("pointer")>=0)&&(Kn(a,Qi[0],nt,he,J),Kn(Q,Qi[2],W),Kn(Q,Qi[3],W),fe&&Kn(a,"click",He,!0,!0),ve&&Kn(a,"click",wt),j&&Kn(Q,"gesturestart",Ce),F&&Kn(Q,"gestureend",Ee),z&&Kn(a,lo+"enter",Ge),G&&Kn(a,lo+"leave",Qe),X&&Kn(a,lo+"move",de)),O.isEnabled=!0,O.isDragging=O.isGesturing=O.isPressed=T=w=!1,O._vx.reset(),O._vy.reset(),P=ne(),M=pe(),Ve&&Ve.type&&nt(Ve),me&&me(O)),O},O.disable=function(){O.isEnabled&&(da.filter(function(Ve){return Ve!==O&&Rl(Ve.target)}).length||Yn(Z?Q:a,"scroll",sh),O.isPressed&&(O._vx.reset(),O._vy.reset(),Yn(K?a:Q,Qi[1],Le,!0)),Yn(Z?Q:a,"scroll",Oe,J),Yn(a,"wheel",Se,J),Yn(a,Qi[0],nt,J),Yn(Q,Qi[2],W),Yn(Q,Qi[3],W),Yn(a,"click",He,!0),Yn(a,"click",wt),Yn(Q,"gesturestart",Ce),Yn(Q,"gestureend",Ee),Yn(a,lo+"enter",Ge),Yn(a,lo+"leave",Qe),Yn(a,lo+"move",de),O.isEnabled=O.isPressed=O.isDragging=!1,ge&&ge(O))},O.kill=O.revert=function(){O.disable();var Ve=da.indexOf(O);Ve>=0&&da.splice(Ve,1),Kr===O&&(Kr=0)},da.push(O),K&&Rl(a)&&(Kr=O),O.enable(_)},eM(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n})();sn.version="3.15.0";sn.create=function(n){return new sn(n)};sn.register=Hx;sn.getAll=function(){return da.slice()};sn.getById=function(n){return da.filter(function(e){return e.vars.id===n})[0]};Bx()&&Pn.registerPlugin(sn);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ye,aa,xt,Ut,Si,Pt,kp,Xu,Ql,Pl,dl,wc,Bn,gd,ah,Qn,um,dm,la,Gx,Hd,Wx,Jn,lh,Xx,$x,Es,ch,Bp,Ma,zp,Dl,uh,Gd,Ec=1,zn=Date.now,Wd=zn(),ji=0,fl=0,fm=function(e,t,i){var r=yi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},hm=function(e,t){return t&&(!yi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},iM=function n(){return fl&&requestAnimationFrame(n)},pm=function(){return gd=1},mm=function(){return gd=0},hr=function(e){return e},hl=function(e){return Math.round(e*1e5)/1e5||0},jx=function(){return typeof window<"u"},Yx=function(){return Ye||jx()&&(Ye=window.gsap)&&Ye.registerPlugin&&Ye},Io=function(e){return!!~kp.indexOf(e)},qx=function(e){return(e==="Height"?zp:xt["inner"+e])||Si["client"+e]||Pt["client"+e]},Kx=function(e){return Os(e,"getBoundingClientRect")||(Io(e)?function(){return _u.width=xt.innerWidth,_u.height=zp,_u}:function(){return Yr(e)})},rM=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Os(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?qx(s):e["client"+s])||0}},sM=function(e,t){return!t||~Er.indexOf(e)?Kx(e):function(){return _u}},yr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Os(e,i))?o()-Kx(e)()[s]:Io(e)?(Si[i]||Pt[i])-qx(r):e[i]-e["offset"+r])},Tc=function(e,t){for(var i=0;i<la.length;i+=3)(!t||~t.indexOf(la[i+1]))&&e(la[i],la[i+1],la[i+2])},yi=function(e){return typeof e=="string"},Gn=function(e){return typeof e=="function"},pl=function(e){return typeof e=="number"},co=function(e){return typeof e=="object"},Za=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Go=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},Wo=Math.abs,Zx="left",Jx="top",Vp="right",Hp="bottom",Ro="width",Po="height",Ll="Right",Il="Left",Ul="Top",Nl="Bottom",an="padding",zi="margin",Na="Width",Gp="Height",hn="px",Vi=function(e){return xt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},oM=function(e){var t=Vi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},gm=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Yr=function(e,t){var i=t&&Vi(e)[ah]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ye.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},$u=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},Qx=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},aM=function(e){return function(t){return Ye.utils.snap(Qx(e),t)}},Wp=function(e){var t=Ye.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},lM=function(e){return function(t,i){return Wp(Qx(e))(t,i.direction)}},Ac=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},bn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},yn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Cc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},_m={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Rc={toggleActions:"play",anticipatePin:0},ju={top:0,left:0,center:.5,bottom:1,right:1},hu=function(e,t){if(yi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in ju?ju[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Pc=function(e,t,i,r,s,o,a,l){var c=s.startColor,u=s.endColor,d=s.fontSize,f=s.indent,h=s.fontWeight,m=Ut.createElement("div"),_=Io(i)||Os(i,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,g=_?Pt:i.tagName==="IFRAME"?i.contentDocument.body:i,x=e.indexOf("start")!==-1,S=x?c:u,v="border-color:"+S+";font-size:"+d+";color:"+S+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(v+=(r===pn?Vp:Hp)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=x,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=v,m.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+r.op.d2],pu(m,0,r,x),m},pu=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+Na]=1,s["border"+a+Na]=0,s[i.p]=t+"px",Ye.set(e,s)},_t=[],dh={},ec,xm=function(){return zn()-ji>34&&(ec||(ec=requestAnimationFrame(Jr)))},Xo=function(){(!Jn||!Jn.isPressed||Jn.startX>Pt.clientWidth)&&(vt.cache++,Jn?ec||(ec=requestAnimationFrame(Jr)):Jr(),ji||No("scrollStart"),ji=zn())},Xd=function(){$x=xt.innerWidth,Xx=xt.innerHeight},ml=function(e){vt.cache++,(e===!0||!Bn&&!Wx&&!Ut.fullscreenElement&&!Ut.webkitFullscreenElement&&(!lh||$x!==xt.innerWidth||Math.abs(xt.innerHeight-Xx)>xt.innerHeight*.25))&&Xu.restart(!0)},Uo={},cM=[],ev=function n(){return yn(ot,"scrollEnd",n)||vo(!0)},No=function(e){return Uo[e]&&Uo[e].map(function(t){return t()})||cM},vi=[],tv=function(e){for(var t=0;t<vi.length;t+=5)(!e||vi[t+4]&&vi[t+4].query===e)&&(vi[t].style.cssText=vi[t+1],vi[t].getBBox&&vi[t].setAttribute("transform",vi[t+2]||""),vi[t+3].uncache=1)},nv=function(){return vt.forEach(function(e){return Gn(e)&&++e.cacheID&&(e.rec=e())})},Xp=function(e,t){var i;for(Qn=0;Qn<_t.length;Qn++)i=_t[Qn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Dl=!0,t&&tv(t),t||No("revert")},iv=function(e,t){vt.cache++,(t||!ei)&&vt.forEach(function(i){return Gn(i)&&i.cacheID++&&(i.rec=0)}),yi(e)&&(xt.history.scrollRestoration=Bp=e)},ei,Do=0,vm,uM=function(){if(vm!==Do){var e=vm=Do;requestAnimationFrame(function(){return e===Do&&vo(!0)})}},rv=function(){Pt.appendChild(Ma),zp=!Jn&&Ma.offsetHeight||xt.innerHeight,Pt.removeChild(Ma)},ym=function(e){return Ql(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},vo=function(e,t){if(Si=Ut.documentElement,Pt=Ut.body,kp=[xt,Ut,Si,Pt],ji&&!e&&!Dl){bn(ot,"scrollEnd",ev);return}rv(),ei=ot.isRefreshing=!0,Dl||nv();var i=No("refreshInit");Gx&&ot.sort(),t||Xp(),vt.forEach(function(r){Gn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),_t.slice(0).forEach(function(r){return r.refresh()}),Dl=!1,_t.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),uh=1,ym(!0),_t.forEach(function(r){var s=yr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),ym(!1),uh=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),vt.forEach(function(r){Gn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),iv(Bp,1),Xu.pause(),Do++,ei=2,Jr(2),_t.forEach(function(r){return Gn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),ei=ot.isRefreshing=!1,No("refresh")},fh=0,mu=1,Fl,Jr=function(e){if(e===2||!ei&&!Dl){ot.isUpdating=!0,Fl&&Fl.update(0);var t=_t.length,i=zn(),r=i-Wd>=50,s=t&&_t[0].scroll();if(mu=fh>s?-1:1,ei||(fh=s),r&&(ji&&!gd&&i-ji>200&&(ji=0,No("scrollEnd")),dl=Wd,Wd=i),mu<0){for(Qn=t;Qn-- >0;)_t[Qn]&&_t[Qn].update(0,r);mu=1}else for(Qn=0;Qn<t;Qn++)_t[Qn]&&_t[Qn].update(0,r);ot.isUpdating=!1}ec=0},hh=[Zx,Jx,Hp,Vp,zi+Nl,zi+Ll,zi+Ul,zi+Il,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],gu=hh.concat([Ro,Po,"boxSizing","max"+Na,"max"+Gp,"position",zi,an,an+Ul,an+Ll,an+Nl,an+Il]),dM=function(e,t,i){wa(i);var r=e._gsap;if(r.spacerIsNative)wa(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},$d=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=hh.length,o=t.style,a=e.style,l;s--;)l=hh[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Hp]=a[Vp]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ro]=$u(e,ri)+hn,o[Po]=$u(e,pn)+hn,o[an]=a[zi]=a[Jx]=a[Zx]="0",wa(r),a[Ro]=a["max"+Na]=i[Ro],a[Po]=a["max"+Gp]=i[Po],a[an]=i[an],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},fM=/([A-Z])/g,wa=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Ye.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(fM,"-$1").toLowerCase())}},Dc=function(e){for(var t=gu.length,i=e.style,r=[],s=0;s<t;s++)r.push(gu[s],i[gu[s]]);return r.t=e,r},hM=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},_u={left:0,top:0},bm=function(e,t,i,r,s,o,a,l,c,u,d,f,h,m){Gn(e)&&(e=e(l)),yi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?hu("0"+e.substr(3),i):0));var _=h?h.time():0,p,g,x;if(h&&h.seek(0),isNaN(e)||(e=+e),pl(e))h&&(e=Ye.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),a&&pu(a,i,r,!0);else{Gn(t)&&(t=t(l));var S=(e||"0").split(" "),v,C,R,A;x=li(t,l)||Pt,v=Yr(x)||{},(!v||!v.left&&!v.top)&&Vi(x).display==="none"&&(A=x.style.display,x.style.display="block",v=Yr(x),A?x.style.display=A:x.style.removeProperty("display")),C=hu(S[0],v[r.d]),R=hu(S[1]||"0",i),e=v[r.p]-c[r.p]-u+C+s-R,a&&pu(a,R,r,i-R<20||a._isStart&&R>20),i-=i-R}if(m&&(l[m]=e||-.001,e<0&&(e=0)),o){var y=e+i,E=o._isStart;p="scroll"+r.d2,pu(o,y,r,E&&y>20||!E&&(d?Math.max(Pt[p],Si[p]):o.parentNode[p])<=y+1),d&&(c=Yr(a),d&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+hn))}return h&&x&&(p=Yr(x),h.seek(f),g=Yr(x),h._caScrollDist=p[r.p]-g[r.p],e=e/h._caScrollDist*f),h&&h.seek(_),h?e:Math.round(e)},pM=/(webkit|moz|length|cssText|inset)/i,Sm=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===Pt){e._stOrig=s.cssText,a=Vi(e);for(o in a)!+o&&!pM.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Ye.core.getCache(e).uncache=1,t.appendChild(e)}},sv=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Lc=function(e,t,i){var r={};r[t.p]="+="+i,Ye.set(e,r)},Mm=function(e,t){var i=Gs(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,d){var f=o.tween,h=l.onComplete,m={};c=c||i();var _=sv(i,c,function(){f.kill(),o.tween=0});return d=u&&d||0,u=u||a-c,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=m,m[r]=function(){return _(c+u*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){vt.cache++,o.tween&&Jr()},l.onComplete=function(){o.tween=0,h&&h.call(f)},f=o.tween=Ye.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},bn(e,"wheel",i.wheelHandler),ot.isTouch&&bn(e,"touchmove",i.wheelHandler),s},ot=(function(){function n(t,i){aa||n.register(Ye)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ch(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!fl){this.update=this.refresh=this.kill=hr;return}i=gm(yi(i)||pl(i)||i.nodeType?{trigger:i}:i,Rc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,f=s.trigger,h=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,g=s.onScrubComplete,x=s.onSnapComplete,S=s.once,v=s.snap,C=s.pinReparent,R=s.pinSpacer,A=s.containerAnimation,y=s.fastScrollEnd,E=s.preventOverlaps,N=i.horizontal||i.containerAnimation&&i.horizontal!==!1?ri:pn,U=!d&&d!==0,L=li(i.scroller||xt),V=Ye.core.getCache(L),z=Io(L),G=("pinType"in i?i.pinType:Os(L,"pinType")||z&&"fixed")==="fixed",X=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],k=U&&i.toggleActions.split(" "),K="markers"in i?i.markers:Rc.markers,j=z?0:parseFloat(Vi(L)["border"+N.p2+Na])||0,F=this,ce=i.onRefreshInit&&function(){return i.onRefreshInit(F)},me=rM(L,z,N),ge=sM(L,z),ve=0,Te=0,J=0,fe=Gs(L,N),oe,Re,Ae,le,w,T,H,ee,Y,O,I,_e,he,ne,pe,P,M,B,Z,Q,q,Me,xe,He,De,be,we,Pe,Ne,Le,nt,W,Ce,Ee,Oe,Se,de,Ge,Qe;if(F._startClamp=F._endClamp=!1,F._dir=N,p*=45,F.scroller=L,F.scroll=A?A.time.bind(A):fe,le=fe(),F.vars=i,r=r||i.animation,"refreshPriority"in i&&(Gx=1,i.refreshPriority===-9999&&(Fl=F)),V.tweenScroll=V.tweenScroll||{top:Mm(L,pn),left:Mm(L,ri)},F.tweenTo=oe=V.tweenScroll[N.p],F.scrubDuration=function(Be){Ce=pl(Be)&&Be,Ce?W?W.duration(Be):W=Ye.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ce,paused:!0,onComplete:function(){return g&&g(F)}}):(W&&W.progress(1).kill(),W=0)},r&&(r.vars.lazy=!1,r._initted&&!F.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),F.animation=r.pause(),r.scrollTrigger=F,F.scrubDuration(d),Le=0,l||(l=r.vars.id)),v&&((!co(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Pt.style&&Ye.set(z?[Pt,Si]:L,{scrollBehavior:"auto"}),vt.forEach(function(Be){return Gn(Be)&&Be.target===(z?Ut.scrollingElement||Si:L)&&(Be.smooth=!1)}),Ae=Gn(v.snapTo)?v.snapTo:v.snapTo==="labels"?aM(r):v.snapTo==="labelsDirectional"?lM(r):v.directional!==!1?function(Be,rt){return Wp(v.snapTo)(Be,zn()-Te<500?0:rt.direction)}:Ye.utils.snap(v.snapTo),Ee=v.duration||{min:.1,max:2},Ee=co(Ee)?Pl(Ee.min,Ee.max):Pl(Ee,Ee),Oe=Ye.delayedCall(v.delay||Ce/2||.1,function(){var Be=fe(),rt=zn()-Te<500,et=oe.tween;if((rt||Math.abs(F.getVelocity())<10)&&!et&&!gd&&ve!==Be){var st=(Be-T)/ne,en=r&&!U?r.totalProgress():st,lt=rt?0:(en-nt)/(zn()-dl)*1e3||0,Xt=Ye.utils.clamp(-st,1-st,Wo(lt/2)*lt/.185),un=st+(v.inertia===!1?0:Xt),$t,It,Rt=v,Un=Rt.onStart,Gt=Rt.onInterrupt,Nn=Rt.onComplete;if($t=Ae(un,F),pl($t)||($t=un),It=Math.max(0,Math.round(T+$t*ne)),Be<=H&&Be>=T&&It!==Be){if(et&&!et._initted&&et.data<=Wo(It-Be))return;v.inertia===!1&&(Xt=$t-st),oe(It,{duration:Ee(Wo(Math.max(Wo(un-en),Wo($t-en))*.185/lt/.05||0)),ease:v.ease||"power3",data:Wo(It-Be),onInterrupt:function(){return Oe.restart(!0)&&Gt&&Go(F,Gt)},onComplete:function(){F.update(),ve=fe(),r&&!U&&(W?W.resetTo("totalProgress",$t,r._tTime/r._tDur):r.progress($t)),Le=nt=r&&!U?r.totalProgress():F.progress,x&&x(F),Nn&&Go(F,Nn)}},Be,Xt*ne,It-Be-Xt*ne),Un&&Go(F,Un,oe.tween)}}else F.isActive&&ve!==Be&&Oe.restart(!0)}).pause()),l&&(dh[l]=F),f=F.trigger=li(f||h!==!0&&h),Qe=f&&f._gsap&&f._gsap.stRevert,Qe&&(Qe=Qe(F)),h=h===!0?f:li(h),yi(a)&&(a={targets:f,className:a}),h&&(m===!1||m===zi||(m=!m&&h.parentNode&&h.parentNode.style&&Vi(h.parentNode).display==="flex"?!1:an),F.pin=h,Re=Ye.core.getCache(h),Re.spacer?pe=Re.pinState:(R&&(R=li(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),Re.spacerIsNative=!!R,R&&(Re.spacerState=Dc(R))),Re.spacer=B=R||Ut.createElement("div"),B.classList.add("pin-spacer"),l&&B.classList.add("pin-spacer-"+l),Re.pinState=pe=Dc(h)),i.force3D!==!1&&Ye.set(h,{force3D:!0}),F.spacer=B=Re.spacer,Ne=Vi(h),He=Ne[m+N.os2],Q=Ye.getProperty(h),q=Ye.quickSetter(h,N.a,hn),$d(h,B,Ne),M=Dc(h)),K){_e=co(K)?gm(K,_m):_m,O=Pc("scroller-start",l,L,N,_e,0),I=Pc("scroller-end",l,L,N,_e,0,O),Z=O["offset"+N.op.d2];var wt=li(Os(L,"content")||L);ee=this.markerStart=Pc("start",l,wt,N,_e,Z,0,A),Y=this.markerEnd=Pc("end",l,wt,N,_e,Z,0,A),A&&(Ge=Ye.quickSetter([ee,Y],N.a,hn)),!G&&!(Er.length&&Os(L,"fixedMarkers")===!0)&&(oM(z?Pt:L),Ye.set([O,I],{force3D:!0}),be=Ye.quickSetter(O,N.a,hn),Pe=Ye.quickSetter(I,N.a,hn))}if(A){var Ve=A.vars.onUpdate,Ke=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){F.update(0,0,1),Ve&&Ve.apply(A,Ke||[])})}if(F.previous=function(){return _t[_t.indexOf(F)-1]},F.next=function(){return _t[_t.indexOf(F)+1]},F.revert=function(Be,rt){if(!rt)return F.kill(!0);var et=Be!==!1||!F.enabled,st=Bn;et!==F.isReverted&&(et&&(Se=Math.max(fe(),F.scroll.rec||0),J=F.progress,de=r&&r.progress()),ee&&[ee,Y,O,I].forEach(function(en){return en.style.display=et?"none":"block"}),et&&(Bn=F,F.update(et)),h&&(!C||!F.isActive)&&(et?dM(h,B,pe):$d(h,B,Vi(h),De)),et||F.update(et),Bn=st,F.isReverted=et)},F.refresh=function(Be,rt,et,st){if(!((Bn||!F.enabled)&&!rt)){if(h&&Be&&ji){bn(n,"scrollEnd",ev);return}!ei&&ce&&ce(F),Bn=F,oe.tween&&!et&&(oe.tween.kill(),oe.tween=0),W&&W.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function($e){return $e.vars.immediateRender&&$e.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),F.isReverted||F.revert(!0,!0),F._subPinOffset=!1;var en=me(),lt=ge(),Xt=A?A.duration():yr(L,N),un=ne<=.01||!ne,$t=0,It=st||0,Rt=co(et)?et.end:i.end,Un=i.endTrigger||f,Gt=co(et)?et.start:i.start||(i.start===0||!f?0:h?"0 0":"0 100%"),Nn=F.pinnedContainer=i.pinnedContainer&&li(i.pinnedContainer,F),Ui=f&&Math.max(0,_t.indexOf(F))||0,dn=Ui,fn,_n,Ir,ko,D,$,re,ie,te,Ie,ke,Ue,je;for(K&&co(et)&&(Ue=Ye.getProperty(O,N.p),je=Ye.getProperty(I,N.p));dn-- >0;)$=_t[dn],$.end||$.refresh(0,1)||(Bn=F),re=$.pin,re&&(re===f||re===h||re===Nn)&&!$.isReverted&&(Ie||(Ie=[]),Ie.unshift($),$.revert(!0,!0)),$!==_t[dn]&&(Ui--,dn--);for(Gn(Gt)&&(Gt=Gt(F)),Gt=fm(Gt,"start",F),T=bm(Gt,f,en,N,fe(),ee,O,F,lt,j,G,Xt,A,F._startClamp&&"_startClamp")||(h?-.001:0),Gn(Rt)&&(Rt=Rt(F)),yi(Rt)&&!Rt.indexOf("+=")&&(~Rt.indexOf(" ")?Rt=(yi(Gt)?Gt.split(" ")[0]:"")+Rt:($t=hu(Rt.substr(2),en),Rt=yi(Gt)?Gt:(A?Ye.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,T):T)+$t,Un=f)),Rt=fm(Rt,"end",F),H=Math.max(T,bm(Rt||(Un?"100% 0":Xt),Un,en,N,fe()+$t,Y,I,F,lt,j,G,Xt,A,F._endClamp&&"_endClamp"))||-.001,$t=0,dn=Ui;dn--;)$=_t[dn]||{},re=$.pin,re&&$.start-$._pinPush<=T&&!A&&$.end>0&&(fn=$.end-(F._startClamp?Math.max(0,$.start):$.start),(re===f&&$.start-$._pinPush<T||re===Nn)&&isNaN(Gt)&&($t+=fn*(1-$.progress)),re===h&&(It+=fn));if(T+=$t,H+=$t,F._startClamp&&(F._startClamp+=$t),F._endClamp&&!ei&&(F._endClamp=H||-.001,H=Math.min(H,yr(L,N))),ne=H-T||(T-=.01)&&.001,un&&(J=Ye.utils.clamp(0,1,Ye.utils.normalize(T,H,Se))),F._pinPush=It,ee&&$t&&(fn={},fn[N.a]="+="+$t,Nn&&(fn[N.p]="-="+fe()),Ye.set([ee,Y],fn)),h&&!(uh&&F.end>=yr(L,N)))fn=Vi(h),ko=N===pn,Ir=fe(),Me=parseFloat(Q(N.a))+It,!Xt&&H>1&&(ke=(z?Ut.scrollingElement||Si:L).style,ke={style:ke,value:ke["overflow"+N.a.toUpperCase()]},z&&Vi(Pt)["overflow"+N.a.toUpperCase()]!=="scroll"&&(ke.style["overflow"+N.a.toUpperCase()]="scroll")),$d(h,B,fn),M=Dc(h),_n=Yr(h,!0),ie=G&&Gs(L,ko?ri:pn)(),m?(De=[m+N.os2,ne+It+hn],De.t=B,dn=m===an?$u(h,N)+ne+It:0,dn&&(De.push(N.d,dn+hn),B.style.flexBasis!=="auto"&&(B.style.flexBasis=dn+hn)),wa(De),Nn&&_t.forEach(function($e){$e.pin===Nn&&$e.vars.pinSpacing!==!1&&($e._subPinOffset=!0)}),G&&fe(Se)):(dn=$u(h,N),dn&&B.style.flexBasis!=="auto"&&(B.style.flexBasis=dn+hn)),G&&(D={top:_n.top+(ko?Ir-T:ie)+hn,left:_n.left+(ko?ie:Ir-T)+hn,boxSizing:"border-box",position:"fixed"},D[Ro]=D["max"+Na]=Math.ceil(_n.width)+hn,D[Po]=D["max"+Gp]=Math.ceil(_n.height)+hn,D[zi]=D[zi+Ul]=D[zi+Ll]=D[zi+Nl]=D[zi+Il]="0",D[an]=fn[an],D[an+Ul]=fn[an+Ul],D[an+Ll]=fn[an+Ll],D[an+Nl]=fn[an+Nl],D[an+Il]=fn[an+Il],P=hM(pe,D,C),ei&&fe(0)),r?(te=r._initted,Hd(1),r.render(r.duration(),!0,!0),xe=Q(N.a)-Me+ne+It,we=Math.abs(ne-xe)>1,G&&we&&P.splice(P.length-2,2),r.render(0,!0,!0),te||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Hd(0)):xe=ne,ke&&(ke.value?ke.style["overflow"+N.a.toUpperCase()]=ke.value:ke.style.removeProperty("overflow-"+N.a));else if(f&&fe()&&!A)for(_n=f.parentNode;_n&&_n!==Pt;)_n._pinOffset&&(T-=_n._pinOffset,H-=_n._pinOffset),_n=_n.parentNode;Ie&&Ie.forEach(function($e){return $e.revert(!1,!0)}),F.start=T,F.end=H,le=w=ei?Se:fe(),!A&&!ei&&(le<Se&&fe(Se),F.scroll.rec=0),F.revert(!1,!0),Te=zn(),Oe&&(ve=-1,Oe.restart(!0)),Bn=0,r&&U&&(r._initted||de)&&r.progress()!==de&&r.progress(de||0,!0).render(r.time(),!0,!0),(un||J!==F.progress||A||_||r&&!r._initted)&&(r&&!U&&(r._initted||J||r.vars.immediateRender!==!1)&&r.totalProgress(A&&T<-.001&&!J?Ye.utils.normalize(T,H,0):J,!0),F.progress=un||(le-T)/ne===J?0:J),h&&m&&(B._pinOffset=Math.round(F.progress*xe)),W&&W.invalidate(),isNaN(Ue)||(Ue-=Ye.getProperty(O,N.p),je-=Ye.getProperty(I,N.p),Lc(O,N,Ue),Lc(ee,N,Ue-(st||0)),Lc(I,N,je),Lc(Y,N,je-(st||0))),un&&!ei&&F.update(),u&&!ei&&!he&&(he=!0,u(F),he=!1)}},F.getVelocity=function(){return(fe()-w)/(zn()-dl)*1e3||0},F.endAnimation=function(){Za(F.callbackAnimation),r&&(W?W.progress(1):r.paused()?U||Za(r,F.direction<0,1):Za(r,r.reversed()))},F.labelToScroll=function(Be){return r&&r.labels&&(T||F.refresh()||T)+r.labels[Be]/r.duration()*ne||0},F.getTrailing=function(Be){var rt=_t.indexOf(F),et=F.direction>0?_t.slice(0,rt).reverse():_t.slice(rt+1);return(yi(Be)?et.filter(function(st){return st.vars.preventOverlaps===Be}):et).filter(function(st){return F.direction>0?st.end<=T:st.start>=H})},F.update=function(Be,rt,et){if(!(A&&!et&&!Be)){var st=ei===!0?Se:F.scroll(),en=Be?0:(st-T)/ne,lt=en<0?0:en>1?1:en||0,Xt=F.progress,un,$t,It,Rt,Un,Gt,Nn,Ui;if(rt&&(w=le,le=A?fe():st,v&&(nt=Le,Le=r&&!U?r.totalProgress():lt)),p&&h&&!Bn&&!Ec&&ji&&(!lt&&T<st+(st-w)/(zn()-dl)*p?lt=1e-4:lt===1&&H>st+(st-w)/(zn()-dl)*p&&(lt=.9999)),lt!==Xt&&F.enabled){if(un=F.isActive=!!lt&&lt<1,$t=!!Xt&&Xt<1,Gt=un!==$t,Un=Gt||!!lt!=!!Xt,F.direction=lt>Xt?1:-1,F.progress=lt,Un&&!Bn&&(It=lt&&!Xt?0:lt===1?1:Xt===1?2:3,U&&(Rt=!Gt&&k[It+1]!=="none"&&k[It+1]||k[It],Ui=r&&(Rt==="complete"||Rt==="reset"||Rt in r))),E&&(Gt||Ui)&&(Ui||d||!r)&&(Gn(E)?E(F):F.getTrailing(E).forEach(function(Ir){return Ir.endAnimation()})),U||(W&&!Bn&&!Ec?(W._dp._time-W._start!==W._time&&W.render(W._dp._time-W._start),W.resetTo?W.resetTo("totalProgress",lt,r._tTime/r._tDur):(W.vars.totalProgress=lt,W.invalidate().restart())):r&&r.totalProgress(lt,!!(Bn&&(Te||Be)))),h){if(Be&&m&&(B.style[m+N.os2]=He),!G)q(hl(Me+xe*lt));else if(Un){if(Nn=!Be&&lt>Xt&&H+1>st&&st+1>=yr(L,N),C)if(!Be&&(un||Nn)){var dn=Yr(h,!0),fn=st-T;Sm(h,Pt,dn.top+(N===pn?fn:0)+hn,dn.left+(N===pn?0:fn)+hn)}else Sm(h,B);wa(un||Nn?P:M),we&&lt<1&&un||q(Me+(lt===1&&!Nn?xe:0))}}v&&!oe.tween&&!Bn&&!Ec&&Oe.restart(!0),a&&(Gt||S&&lt&&(lt<1||!Gd))&&Ql(a.targets).forEach(function(Ir){return Ir.classList[un||S?"add":"remove"](a.className)}),o&&!U&&!Be&&o(F),Un&&!Bn?(U&&(Ui&&(Rt==="complete"?r.pause().totalProgress(1):Rt==="reset"?r.restart(!0).pause():Rt==="restart"?r.restart(!0):r[Rt]()),o&&o(F)),(Gt||!Gd)&&(c&&Gt&&Go(F,c),X[It]&&Go(F,X[It]),S&&(lt===1?F.kill(!1,1):X[It]=0),Gt||(It=lt===1?1:3,X[It]&&Go(F,X[It]))),y&&!un&&Math.abs(F.getVelocity())>(pl(y)?y:2500)&&(Za(F.callbackAnimation),W?W.progress(1):Za(r,Rt==="reverse"?1:!lt,1))):U&&o&&!Bn&&o(F)}if(Pe){var _n=A?st/A.duration()*(A._caScrollDist||0):st;be(_n+(O._isFlipped?1:0)),Pe(_n)}Ge&&Ge(-st/A.duration()*(A._caScrollDist||0))}},F.enable=function(Be,rt){F.enabled||(F.enabled=!0,bn(L,"resize",ml),z||bn(L,"scroll",Xo),ce&&bn(n,"refreshInit",ce),Be!==!1&&(F.progress=J=0,le=w=ve=fe()),rt!==!1&&F.refresh())},F.getTween=function(Be){return Be&&oe?oe.tween:W},F.setPositions=function(Be,rt,et,st){if(A){var en=A.scrollTrigger,lt=A.duration(),Xt=en.end-en.start;Be=en.start+Xt*Be/lt,rt=en.start+Xt*rt/lt}F.refresh(!1,!1,{start:hm(Be,et&&!!F._startClamp),end:hm(rt,et&&!!F._endClamp)},st),F.update()},F.adjustPinSpacing=function(Be){if(De&&Be){var rt=De.indexOf(N.d)+1;De[rt]=parseFloat(De[rt])+Be+hn,De[1]=parseFloat(De[1])+Be+hn,wa(De)}},F.disable=function(Be,rt){if(Be!==!1&&F.revert(!0,!0),F.enabled&&(F.enabled=F.isActive=!1,rt||W&&W.pause(),Se=0,Re&&(Re.uncache=1),ce&&yn(n,"refreshInit",ce),Oe&&(Oe.pause(),oe.tween&&oe.tween.kill()&&(oe.tween=0)),!z)){for(var et=_t.length;et--;)if(_t[et].scroller===L&&_t[et]!==F)return;yn(L,"resize",ml),z||yn(L,"scroll",Xo)}},F.kill=function(Be,rt){F.disable(Be,rt),W&&!rt&&W.kill(),l&&delete dh[l];var et=_t.indexOf(F);et>=0&&_t.splice(et,1),et===Qn&&mu>0&&Qn--,et=0,_t.forEach(function(st){return st.scroller===F.scroller&&(et=1)}),et||ei||(F.scroll.rec=0),r&&(r.scrollTrigger=null,Be&&r.revert({kill:!1}),rt||r.kill()),ee&&[ee,Y,O,I].forEach(function(st){return st.parentNode&&st.parentNode.removeChild(st)}),Fl===F&&(Fl=0),h&&(Re&&(Re.uncache=1),et=0,_t.forEach(function(st){return st.pin===h&&et++}),et||(Re.spacer=0)),i.onKill&&i.onKill(F)},_t.push(F),F.enable(!1,!1),Qe&&Qe(F),r&&r.add&&!ne){var ft=F.update;F.update=function(){F.update=ft,vt.cache++,T||H||F.refresh()},Ye.delayedCall(.01,F.update),ne=.01,T=H=0}else F.refresh();h&&uM()},n.register=function(i){return aa||(Ye=i||Yx(),jx()&&window.document&&n.enable(),aa=fl),aa},n.defaults=function(i){if(i)for(var r in i)Rc[r]=i[r];return Rc},n.disable=function(i,r){fl=0,_t.forEach(function(o){return o[r?"kill":"disable"](i)}),yn(xt,"wheel",Xo),yn(Ut,"scroll",Xo),clearInterval(wc),yn(Ut,"touchcancel",hr),yn(Pt,"touchstart",hr),Ac(yn,Ut,"pointerdown,touchstart,mousedown",pm),Ac(yn,Ut,"pointerup,touchend,mouseup",mm),Xu.kill(),Tc(yn);for(var s=0;s<vt.length;s+=3)Cc(yn,vt[s],vt[s+1]),Cc(yn,vt[s],vt[s+2])},n.enable=function(){if(xt=window,Ut=document,Si=Ut.documentElement,Pt=Ut.body,Ye){if(Ql=Ye.utils.toArray,Pl=Ye.utils.clamp,ch=Ye.core.context||hr,Hd=Ye.core.suppressOverwrites||hr,Bp=xt.history.scrollRestoration||"auto",fh=xt.pageYOffset||0,Ye.core.globals("ScrollTrigger",n),Pt){fl=1,Ma=document.createElement("div"),Ma.style.height="100vh",Ma.style.position="absolute",rv(),iM(),sn.register(Ye),n.isTouch=sn.isTouch,Es=sn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),lh=sn.isTouch===1,bn(xt,"wheel",Xo),kp=[xt,Ut,Si,Pt],Ye.matchMedia?(n.matchMedia=function(u){var d=Ye.matchMedia(),f;for(f in u)d.add(f,u[f]);return d},Ye.addEventListener("matchMediaInit",function(){nv(),Xp()}),Ye.addEventListener("matchMediaRevert",function(){return tv()}),Ye.addEventListener("matchMedia",function(){vo(0,1),No("matchMedia")}),Ye.matchMedia().add("(orientation: portrait)",function(){return Xd(),Xd})):console.warn("Requires GSAP 3.11.0 or later"),Xd(),bn(Ut,"scroll",Xo);var i=Pt.hasAttribute("style"),r=Pt.style,s=r.borderTopStyle,o=Ye.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Yr(Pt),pn.m=Math.round(a.top+pn.sc())||0,ri.m=Math.round(a.left+ri.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(Pt.setAttribute("style",""),Pt.removeAttribute("style")),wc=setInterval(xm,250),Ye.delayedCall(.5,function(){return Ec=0}),bn(Ut,"touchcancel",hr),bn(Pt,"touchstart",hr),Ac(bn,Ut,"pointerdown,touchstart,mousedown",pm),Ac(bn,Ut,"pointerup,touchend,mouseup",mm),ah=Ye.utils.checkPrefix("transform"),gu.push(ah),aa=zn(),Xu=Ye.delayedCall(.2,vo).pause(),la=[Ut,"visibilitychange",function(){var u=xt.innerWidth,d=xt.innerHeight;Ut.hidden?(um=u,dm=d):(um!==u||dm!==d)&&ml()},Ut,"DOMContentLoaded",vo,xt,"load",vo,xt,"resize",ml],Tc(bn),_t.forEach(function(u){return u.enable(0,1)}),l=0;l<vt.length;l+=3)Cc(yn,vt[l],vt[l+1]),Cc(yn,vt[l],vt[l+2])}else if(Ut){var c=function u(){n.enable(),Ut.removeEventListener("DOMContentLoaded",u)};Ut.addEventListener("DOMContentLoaded",c)}}},n.config=function(i){"limitCallbacks"in i&&(Gd=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(wc)||(wc=r)&&setInterval(xm,r),"ignoreMobileResize"in i&&(lh=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Tc(yn)||Tc(bn,i.autoRefreshEvents||"none"),Wx=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=li(i),o=vt.indexOf(s),a=Io(s);~o&&vt.splice(o,a?6:2),r&&(a?Er.unshift(xt,r,Pt,r,Si,r):Er.unshift(s,r))},n.clearMatchMedia=function(i){_t.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(yi(i)?li(i):i).getBoundingClientRect(),a=o[s?Ro:Po]*r||0;return s?o.right-a>0&&o.left+a<xt.innerWidth:o.bottom-a>0&&o.top+a<xt.innerHeight},n.positionInViewport=function(i,r,s){yi(i)&&(i=li(i));var o=i.getBoundingClientRect(),a=o[s?Ro:Po],l=r==null?a/2:r in ju?ju[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/xt.innerWidth:(o.top+l)/xt.innerHeight},n.killAll=function(i){if(_t.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Uo.killAll||[];Uo={},r.forEach(function(s){return s()})}},n})();ot.version="3.15.0";ot.saveStyles=function(n){return n?Ql(n).forEach(function(e){if(e&&e.style){var t=vi.indexOf(e);t>=0&&vi.splice(t,5),vi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ye.core.getCache(e),ch())}}):vi};ot.revert=function(n,e){return Xp(!n,e)};ot.create=function(n,e){return new ot(n,e)};ot.refresh=function(n){return n?ml(!0):(aa||ot.register())&&vo(!0)};ot.update=function(n){return++vt.cache&&Jr(n===!0?2:0)};ot.clearScrollMemory=iv;ot.maxScroll=function(n,e){return yr(n,e?ri:pn)};ot.getScrollFunc=function(n,e){return Gs(li(n),e?ri:pn)};ot.getById=function(n){return dh[n]};ot.getAll=function(){return _t.filter(function(n){return n.vars.id!=="ScrollSmoother"})};ot.isScrolling=function(){return!!ji};ot.snapDirectional=Wp;ot.addEventListener=function(n,e){var t=Uo[n]||(Uo[n]=[]);~t.indexOf(e)||t.push(e)};ot.removeEventListener=function(n,e){var t=Uo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};ot.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var d=[],f=[],h=Ye.delayedCall(r,function(){u(d,f),d=[],f=[]}).pause();return function(m){d.length||h.restart(!0),d.push(m.trigger),f.push(m),s<=d.length&&h.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Gn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Gn(s)&&(s=s(),bn(ot,"refresh",function(){return s=e.batchMax()})),Ql(n).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(ot.create(c))}),t};var wm=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},jd=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(sn.isTouch?" pinch-zoom":""):"none",e===Si&&n(Pt,t)},Ic={auto:1,scroll:1},mM=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ye.core.getCache(s),a=zn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ic[(l=Vi(s)).overflowY]||Ic[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Io(s)&&(Ic[(l=Vi(s)).overflowY]||Ic[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},ov=function(e,t,i,r){return sn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&mM,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&bn(Ut,sn.eventTypes[0],Tm,!1,!0)},onDisable:function(){return yn(Ut,sn.eventTypes[0],Tm,!0)}})},gM=/(input|label|select|textarea)/i,Em,Tm=function(e){var t=gM.test(e.target.tagName);(t||Em)&&(e._gsapAllow=!0,Em=t)},_M=function(e){co(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=li(e.target)||Si,u=Ye.core.globals().ScrollSmoother,d=u&&u.get(),f=Es&&(e.content&&li(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=Gs(c,pn),m=Gs(c,ri),_=1,p=(sn.isTouch&&xt.visualViewport?xt.visualViewport.scale*xt.visualViewport.width:xt.outerWidth)/xt.innerWidth,g=0,x=Gn(r)?function(){return r(a)}:function(){return r||2.8},S,v,C=ov(c,e.type,!0,s),R=function(){return v=!1},A=hr,y=hr,E=function(){l=yr(c,pn),y=Pl(Es?1:0,l),i&&(A=Pl(0,yr(c,ri))),S=Do},N=function(){f._gsap.y=hl(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},U=function(){if(v){requestAnimationFrame(R);var K=hl(a.deltaY/2),j=y(h.v-K);if(f&&j!==h.v+h.offset){h.offset=j-h.v;var F=hl((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+F+", 0, 1)",f._gsap.y=F+"px",h.cacheID=vt.cache,Jr()}return!0}h.offset&&N(),v=!0},L,V,z,G,X=function(){E(),L.isActive()&&L.vars.scrollY>l&&(h()>l?L.progress(1)&&h(l):L.resetTo("scrollY",l))};return f&&Ye.set(f,{y:"+=0"}),e.ignoreCheck=function(k){return Es&&k.type==="touchmove"&&U()||_>1.05&&k.type!=="touchstart"||a.isGesturing||k.touches&&k.touches.length>1},e.onPress=function(){v=!1;var k=_;_=hl((xt.visualViewport&&xt.visualViewport.scale||1)/p),L.pause(),k!==_&&jd(c,_>1.01?!0:i?!1:"x"),V=m(),z=h(),E(),S=Do},e.onRelease=e.onGestureStart=function(k,K){if(h.offset&&N(),!K)G.restart(!0);else{vt.cache++;var j=x(),F,ce;i&&(F=m(),ce=F+j*.05*-k.velocityX/.227,j*=wm(m,F,ce,yr(c,ri)),L.vars.scrollX=A(ce)),F=h(),ce=F+j*.05*-k.velocityY/.227,j*=wm(h,F,ce,yr(c,pn)),L.vars.scrollY=y(ce),L.invalidate().duration(j).play(.01),(Es&&L.vars.scrollY>=l||F>=l-1)&&Ye.to({},{onUpdate:X,duration:j})}o&&o(k)},e.onWheel=function(){L._ts&&L.pause(),zn()-g>1e3&&(S=0,g=zn())},e.onChange=function(k,K,j,F,ce){if(Do!==S&&E(),K&&i&&m(A(F[2]===K?V+(k.startX-k.x):m()+K-F[1])),j){h.offset&&N();var me=ce[2]===j,ge=me?z+k.startY-k.y:h()+j-ce[1],ve=y(ge);me&&ge!==ve&&(z+=ve-ge),h(ve)}(j||K)&&Jr()},e.onEnable=function(){jd(c,i?!1:"x"),ot.addEventListener("refresh",X),bn(xt,"resize",X),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=m.smooth=!1),C.enable()},e.onDisable=function(){jd(c,!0),yn(xt,"resize",X),ot.removeEventListener("refresh",X),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new sn(e),a.iOS=Es,Es&&!h()&&h(1),Es&&Ye.ticker.add(hr),G=a._dc,L=Ye.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:sv(h,h(),function(){return L.pause()})},onUpdate:Jr,onComplete:G.vars.onComplete}),a};ot.sort=function(n){if(Gn(n))return _t.sort(n);var e=xt.pageYOffset||0;return ot.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+xt.innerHeight}),_t.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};ot.observe=function(n){return new sn(n)};ot.normalizeScroll=function(n){if(typeof n>"u")return Jn;if(n===!0&&Jn)return Jn.enable();if(n===!1){Jn&&Jn.kill(),Jn=n;return}var e=n instanceof sn?n:_M(n);return Jn&&Jn.target===e.target&&Jn.kill(),Io(e.target)&&(Jn=e),e};ot.core={_getVelocityProp:oh,_inputObserver:ov,_scrollers:vt,_proxies:Er,bridge:{ss:function(){ji||No("scrollStart"),ji=zn()},ref:function(){return Bn}}};Yx()&&Ye.registerPlugin(ot);const Qr=Fe(!0),av=()=>{Qr.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},xM=()=>{const n=localStorage.getItem("theme");n==="light"?Qr.value=!1:Qr.value=!0,av()};Ri(Qr,()=>{av()});const vM=()=>{Qr.value=!Qr.value,localStorage.setItem("theme",Qr.value?"dark":"light")};xM();function $p(){return{isDark:Qr,toggleTheme:vM}}const Ea=Fe(!1),yM=()=>{localStorage.getItem("mouseTrail")==="enabled"?Ea.value=!0:Ea.value=!1},bM=()=>{Ea.value=!Ea.value,localStorage.setItem("mouseTrail",Ea.value?"enabled":"disabled")};yM();function lv(){return{isMouseTrailEnabled:Ea,toggleMouseTrail:bM}}function SM({elements:n,interval:e=150}){const{isDark:t}=$p(),i=Fe({});n.forEach(({key:l})=>{i.value[l]=!1});let r=null;const s=({r:l,g:c,b:u})=>(.299*l+.587*c+.114*u)/255,o=l=>{var h;if(!l||!((h=window.__blobSampler)!=null&&h.sampleScreenPixel))return null;const c=l.getBoundingClientRect();if(c.width===0||c.height===0)return null;const u=[{x:c.left+c.width*.5,y:c.top+c.height*.5},{x:c.left+c.width*.3,y:c.top+c.height*.3},{x:c.left+c.width*.7,y:c.top+c.height*.3},{x:c.left+c.width*.3,y:c.top+c.height*.7},{x:c.left+c.width*.7,y:c.top+c.height*.7}];let d=0,f=0;for(const m of u){const _=window.__blobSampler.sampleScreenPixel(m.x,m.y);_&&_.a>0&&(d+=s(_),f++)}return f===0?null:d/f},a=()=>{if(t.value)return;const l={};let c=!1;for(const{key:u,el:d}of n){const f=o(d.value);if(f===null)continue;const h=f<.5;i.value[u]!==h&&(l[u]=h,c=!0)}c&&(i.value={...i.value,...l})};return Tn(()=>{setTimeout(a,300),r=setInterval(a,e)}),In(()=>{r&&clearInterval(r)}),Ri(t,()=>{setTimeout(a,100)}),{isDarkBackground:i}}var Am="1.3.26";function cv(n,e,t){return Math.max(n,Math.min(e,t))}function MM(n,e,t){return(1-t)*n+t*e}function wM(n,e,t,i){return MM(n,e,1-Math.exp(-t*i))}function EM(n,e){return(n%e+e)%e}var TM=class{constructor(){qe(this,"isRunning",!1);qe(this,"value",0);qe(this,"from",0);qe(this,"to",0);qe(this,"currentTime",0);qe(this,"lerp");qe(this,"duration");qe(this,"easing");qe(this,"onUpdate")}advance(n){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=n;const i=cv(0,this.currentTime/this.duration,1);e=i>=1;const r=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=wM(this.value,this.to,this.lerp*60,n),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(n,e,{lerp:t,duration:i,easing:r,onStart:s,onUpdate:o}){this.from=this.value=n,this.to=e,this.lerp=t,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function AM(n,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,n.apply(this,i)},e)}}var CM=class{constructor(n,e,{autoResize:t=!0,debounce:i=250}={}){qe(this,"width",0);qe(this,"height",0);qe(this,"scrollHeight",0);qe(this,"scrollWidth",0);qe(this,"debouncedResize");qe(this,"wrapperResizeObserver");qe(this,"contentResizeObserver");qe(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});qe(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});qe(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=n,this.content=e,t&&(this.debouncedResize=AM(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var n,e;(n=this.wrapperResizeObserver)==null||n.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},uv=class{constructor(){qe(this,"events",{})}emit(n,...e){var i;const t=this.events[n]||[];for(let r=0,s=t.length;r<s;r++)(i=t[r])==null||i.call(t,...e)}on(n,e){return this.events[n]?this.events[n].push(e):this.events[n]=[e],()=>{var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}}off(n,e){var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}destroy(){this.events={}}};const RM=100/6,xs={passive:!1};function Cm(n,e){return n===1?RM:n===2?e:1}var PM=class{constructor(n,e={wheelMultiplier:1,touchMultiplier:1}){qe(this,"touchStart",{x:0,y:0});qe(this,"lastDelta",{x:0,y:0});qe(this,"window",{width:0,height:0});qe(this,"emitter",new uv);qe(this,"onTouchStart",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})});qe(this,"onTouchMove",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:n})});qe(this,"onTouchEnd",n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})});qe(this,"onWheel",n=>{let{deltaX:e,deltaY:t,deltaMode:i}=n;const r=Cm(i,this.window.width),s=Cm(i,this.window.height);e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:n})});qe(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=n,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,xs),this.element.addEventListener("touchstart",this.onTouchStart,xs),this.element.addEventListener("touchmove",this.onTouchMove,xs),this.element.addEventListener("touchend",this.onTouchEnd,xs)}on(n,e){return this.emitter.on(n,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,xs),this.element.removeEventListener("touchstart",this.onTouchStart,xs),this.element.removeEventListener("touchmove",this.onTouchMove,xs),this.element.removeEventListener("touchend",this.onTouchEnd,xs)}};const Rm=n=>Math.min(1,1.001-2**(-10*n));var DM=class{constructor({wrapper:n=window,content:e=document.documentElement,eventsTarget:t=n,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:h=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:p,virtualScroll:g,overscroll:x=!0,autoRaf:S=!1,anchors:v=!1,autoToggle:C=!1,allowNestedScroll:R=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:y=A,stopInertiaOnNavigate:E=!1,respectReducedMotion:N=!0}={}){qe(this,"_isScrolling",!1);qe(this,"_isStopped",!1);qe(this,"_isLocked",!1);qe(this,"_preventNextNativeScrollEvent",!1);qe(this,"_resetVelocityTimeout",null);qe(this,"_rafId",null);qe(this,"_isDraggingSelection",!1);qe(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));qe(this,"isTouching");qe(this,"isIos");qe(this,"time",0);qe(this,"userData",{});qe(this,"lastVelocity",0);qe(this,"velocity",0);qe(this,"direction",0);qe(this,"options");qe(this,"targetScroll");qe(this,"animatedScroll");qe(this,"animate",new TM);qe(this,"emitter",new uv);qe(this,"dimensions");qe(this,"virtualScroll");qe(this,"onScrollEnd",n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()});qe(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});qe(this,"onTransitionEnd",n=>{var e;(e=n.propertyName)!=null&&e.includes("overflow")&&n.target===this.rootElement&&this.checkOverflow()});qe(this,"onClick",n=>{const e=n.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),t=new URL(window.location.href);if(this.options.anchors){const i=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(i.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>t.host===i.host&&t.pathname!==i.pathname)){this.reset();return}});qe(this,"onPointerDown",n=>{n.button===1&&this.reset()});qe(this,"onVirtualScroll",n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:e,deltaY:t,event:i}=n;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");if(r&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(m=>{var _,p,g,x,S;return m instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(m))||((_=m.hasAttribute)==null?void 0:_.call(m,"data-lenis-prevent"))||u==="vertical"&&((p=m.hasAttribute)==null?void 0:p.call(m,"data-lenis-prevent-vertical"))||u==="horizontal"&&((g=m.hasAttribute)==null?void 0:g.call(m,"data-lenis-prevent-horizontal"))||r&&((x=m.hasAttribute)==null?void 0:x.call(m,"data-lenis-prevent-touch"))||s&&((S=m.hasAttribute)==null?void 0:S.call(m,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const f=r&&this.options.syncTouch,h=r&&i.type==="touchend";h&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:h?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});qe(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});qe(this,"raf",n=>{const e=n-(this.time||n);this.time=n,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Am,window.lenis||(window.lenis={}),window.lenis.version=Am,d==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!n||n===document.documentElement)&&(n=window),typeof a=="number"&&typeof l!="function"?l=Rm:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:n,content:e,eventsTarget:t,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:h,wheelMultiplier:m,autoResize:_,prevent:p,virtualScroll:g,overscroll:x,autoRaf:S,anchors:v,autoToggle:C,allowNestedScroll:R,naiveDimensions:y,stopInertiaOnNavigate:E,respectReducedMotion:N},this.dimensions=new CM(n,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new PM(t,{touchMultiplier:h,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,e){return this.emitter.on(n,e)}off(n,e){return this.emitter.off(n,e)}get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}isTouchOnSelectionHandle(n){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=n.targetTouches[0]??n.changedTouches[0];if(!t)return!1;const i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;const r=i[0],s=i[i.length-1],o=40,a=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=o,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(n,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(r?t=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=n,h=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let m=null;if(typeof f=="string"?(m=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),m||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof HTMLElement&&(f!=null&&f.nodeType)&&(m=f),m){if(this.options.wrapper!==window){const v=this.rootElement.getBoundingClientRect();h-=this.isHorizontal?v.left:v.top}const _=m.getBoundingClientRect(),p=getComputedStyle(m),g=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),x=getComputedStyle(this.rootElement),S=this.isHorizontal?Number.parseFloat(x.scrollPaddingLeft):Number.parseFloat(x.scrollPaddingTop);f=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(S)?0:S)}}if(typeof f=="number"){if(f+=h,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const m=f-this.animatedScroll;m>this.limit/2?f-=this.limit:m<-this.limit/2&&(f+=this.limit)}}else f=cv(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=Rm:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(m,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),r&&(this.targetScroll=m),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:e,deltaY:t}){const i=Date.now();n._lenis||(n._lenis={});const r=n._lenis;let s,o,a,l,c,u,d,f,h,m;if(i-(r.time??0)>2e3){r.time=Date.now();const R=window.getComputedStyle(n);if(r.computedStyle=R,s=["auto","overlay","scroll"].includes(R.overflowX),o=["auto","overlay","scroll"].includes(R.overflowY),c=["auto"].includes(R.overscrollBehaviorX),u=["auto"].includes(R.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;d=n.scrollWidth,f=n.scrollHeight,h=n.clientWidth,m=n.clientHeight,a=d>h,l=f>m,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=d,r.scrollHeight=f,r.clientWidth=h,r.clientHeight=m,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,d=r.scrollWidth,f=r.scrollHeight,h=r.clientWidth,m=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let p,g,x,S,v,C;if(_==="horizontal")p=Math.round(n.scrollLeft),g=d-h,x=e,S=s,v=a,C=c;else if(_==="vertical")p=Math.round(n.scrollTop),g=f-m,x=t,S=o,v=l,C=u;else return!1;return!C&&(p>=g||p<=0)?!0:(x>0?p<g:p>0)&&S&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?EM(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(n=>{this.rootElement.classList.add(n)})}cleanUpClassName(){for(const n of Array.from(this.rootElement.classList))(n==="lenis"||n.startsWith("lenis-"))&&this.rootElement.classList.remove(n)}};Xe.registerPlugin(ot);let Vr=null;function Lo(){return Vr}function LM(){return Tn(()=>{Vr=new DM({duration:1.5,wheelMultiplier:.7,easing:n=>Math.min(1,1.001-Math.pow(2,-10*n)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,smoothTouch:!1,touchMultiplier:2}),Vr.on("scroll",ot.update),Xe.ticker.add(n=>{Vr.raf(n*1e3)}),Xe.ticker.lagSmoothing(0)}),In(()=>{Vr&&(Vr.destroy(),Xe.ticker.remove(Vr.raf),Vr=null)}),{get lenis(){return Vr}}}const IM={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},UM={class:"flex items-center justify-between h-16"},NM=["href","onClick"],FM=["aria-expanded"],OM={key:0,class:"settings-dropdown absolute right-0 mt-2 w-64 rounded-xl bg-dark-800 border border-dark-700 shadow-2xl light:bg-white light:border-secondary-200 light:shadow-secondary-200/50 overflow-hidden"},kM={class:"px-4 py-3 flex items-center justify-between hover:bg-dark-700/50 light:hover:bg-secondary-50 transition-colors duration-200"},BM={class:"flex items-center space-x-3"},zM={key:0,class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},VM={key:1,class:"w-4 h-4 text-primary-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},HM=["aria-label"],GM={class:"px-4 py-3 flex items-center justify-between hover:bg-dark-700/50 light:hover:bg-secondary-50 transition-colors duration-200"},WM={class:"flex items-center space-x-3"},XM={class:"text-sm text-secondary-300 light:text-secondary-600"},$M=["aria-label"],jM={class:"px-4 py-3 border-t border-dark-700 light:border-secondary-200"},YM={class:"grid grid-cols-3 gap-2"},qM=["onClick","aria-label","aria-pressed"],KM={class:"flex space-x-0.5"},ZM={key:0,class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},JM={key:1,class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},QM={class:"px-4 py-3 space-y-2"},ew=["href","onClick"],tw={class:"pt-2 border-t border-dark-700 light:border-secondary-200"},nw={class:"flex items-center justify-between py-2"},iw={class:"flex items-center space-x-3"},rw={key:0,class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},sw={key:1,class:"w-4 h-4 text-primary-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},ow=["aria-label"],aw={class:"flex items-center justify-between py-2"},lw={class:"flex items-center space-x-3"},cw={class:"text-sm text-secondary-300 light:text-secondary-600"},uw=["aria-label"],dw={class:"py-2"},fw={class:"grid grid-cols-3 gap-2"},hw=["onClick","aria-label","aria-pressed"],pw={class:"flex space-x-0.5"},mw={__name:"NavBar",setup(n){Xe.registerPlugin(ot);const e=Fe(!1),t=Fe(!1),i=Fe(!1),r=Fe(null),s=Fe(null),o=Fe(null),a=Fe(null),l=Fe(!1);typeof window<"u"&&(l.value=window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window);const{isDark:c,toggleTheme:u}=$p(),{isMouseTrailEnabled:d,toggleMouseTrail:f}=lv(),{colorPalettes:h,selectedPalette:m,setPalette:_}=Ib(),{isDarkBackground:p}=SM({elements:[{key:"nav",el:a}]}),g=[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Tech Stack",href:"#tech-stack"},{label:"Projects",href:"#projects"}],x=()=>{e.value=window.scrollY>50},S=R=>{R.preventDefault(),t.value=!1;const A=Lo();A?A.scrollTo(0):window.scrollTo({top:0,behavior:"smooth"})},v=(R,A)=>{if(R.preventDefault(),t.value=!1,A==="#home"){const V=Lo();V?V.scrollTo(0):window.scrollTo({top:0,behavior:"smooth"});return}const y=document.querySelector(A);if(!y)return;const N=ot.getAll().find(V=>{var z;return V.trigger===y||((z=V.trigger)==null?void 0:z.id)===A.replace("#","")});if(N&&A==="#about"&&typeof N.labelToScroll=="function"){const V=N.labelToScroll("stage-1");window.scrollTo({top:V,behavior:"auto"});return}const U=N?N.start:y.getBoundingClientRect().top+window.scrollY,L=Lo();L?L.scrollTo(U):window.scrollTo({top:U,behavior:"smooth"})},C=R=>{o.value&&!o.value.contains(R.target)&&(i.value=!1),r.value&&!r.value.contains(R.target)&&(t.value=!1)};return Tn(()=>{window.addEventListener("scroll",x),document.addEventListener("click",C),Xe.fromTo(r.value,{y:-80,opacity:0},{y:0,opacity:1,duration:.8,ease:"power3.out",delay:.2,clearProps:"all"})}),In(()=>{window.removeEventListener("scroll",x),document.removeEventListener("click",C)}),Ri(t,async R=>{await as(),s.value&&(R?(Xe.fromTo(s.value,{height:0,opacity:0},{height:"auto",opacity:1,duration:.4,ease:"power2.out"}),Xe.from(s.value.querySelectorAll("a"),{x:-20,opacity:0,stagger:.08,duration:.3,ease:"power2.out"})):Xe.to(s.value,{height:0,opacity:0,duration:.3,ease:"power2.in"}))}),Ri(i,async R=>{var y;await as();const A=(y=o.value)==null?void 0:y.querySelector(".settings-dropdown");A&&(R?Xe.fromTo(A,{opacity:0,y:-10,scale:.95},{opacity:1,y:0,scale:1,duration:.25,ease:"power2.out"}):Xe.to(A,{opacity:0,y:-10,scale:.95,duration:.2,ease:"power2.in"}))}),(R,A)=>(ae(),ue("nav",{ref_key:"navRef",ref:r,class:ct(["fixed top-0 left-0 right-0 z-50 transition-colors duration-300",e.value?"bg-dark-900/95 backdrop-blur-md shadow-lg light:bg-white/95 light:shadow-secondary-200":"bg-transparent"])},[b("div",IM,[b("div",UM,[b("a",{href:"#home",onClick:S,class:"text-xl font-bold text-white light:text-secondary-900 group transition-colors duration-300"},[...A[7]||(A[7]=[b("span",{class:"text-primary-500"},"<",-1),Mi("KPC",-1),b("span",{class:"text-primary-500"},"/>",-1)])]),b("div",{ref_key:"navLinksRef",ref:a,class:"hidden md:flex items-center space-x-8"},[(ae(),ue(We,null,tt(g,y=>b("a",{key:y.href,href:y.href,onClick:E=>v(E,y.href),class:"text-secondary-300 whitespace-nowrap hover:text-primary-400 light:text-black transition-colors duration-200 text-sm font-medium relative group"},[Mi(ye(y.label)+" ",1),A[8]||(A[8]=b("span",{class:"absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"},null,-1))],8,NM)),64)),A[16]||(A[16]=b("a",{href:"#contact",class:"bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"}," Hire Me ",-1)),b("div",{ref_key:"settingsRef",ref:o,class:"relative"},[b("button",{onClick:A[0]||(A[0]=Cs(y=>i.value=!i.value,["stop"])),class:"p-2 rounded-lg light:text-black text-secondary-300 hover:text-primary-400 hover:bg-secondary-800/50 light:hover:text-primary-600 light:hover:bg-secondary-100 transition-all duration-300 focus:outline-none","aria-label":"Settings","aria-expanded":i.value},[(ae(),ue("svg",{class:ct(["w-5 h-5",{"rotate-90 transition-transform duration-300":i.value}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...A[9]||(A[9]=[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"},null,-1),b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"},null,-1)])],2))],8,FM),i.value?(ae(),ue("div",OM,[A[15]||(A[15]=b("div",{class:"px-4 py-3 border-b border-dark-700 light:border-secondary-200"},[b("p",{class:"text-sm font-semibold text-white light:text-secondary-900"},"Settings")],-1)),b("div",kM,[b("div",BM,[mt(c)?(ae(),ue("svg",zM,[...A[10]||(A[10]=[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1)])])):(ae(),ue("svg",VM,[...A[11]||(A[11]=[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)])])),A[12]||(A[12]=b("span",{class:"text-sm text-secondary-300 light:text-secondary-600"},"Night Mode",-1))]),b("button",{onClick:A[1]||(A[1]=(...y)=>mt(u)&&mt(u)(...y)),class:ct(["relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none",mt(c)?"bg-primary-500":"bg-secondary-300 light:bg-secondary-300"]),"aria-label":mt(c)?"Disable night mode":"Enable night mode"},[b("span",{class:ct(["absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300",mt(c)?"left-5":"left-0.5"])},null,2)],10,HM)]),b("div",GM,[b("div",WM,[A[13]||(A[13]=b("svg",{class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"})],-1)),b("span",XM,ye(l.value?"Swipe Animation":"Mouse Animation"),1)]),b("button",{onClick:A[2]||(A[2]=(...y)=>mt(f)&&mt(f)(...y)),class:ct(["relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none",mt(d)?"bg-primary-500":"bg-secondary-300 light:bg-secondary-300"]),"aria-label":mt(d)?"Disable mouse animation":"Enable mouse animation"},[b("span",{class:ct(["absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300",mt(d)?"left-5":"left-0.5"])},null,2)],10,$M)]),b("div",jM,[A[14]||(A[14]=b("div",{class:"flex items-center space-x-3 mb-2"},[b("svg",{class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"})]),b("span",{class:"text-sm text-secondary-300 light:text-secondary-600"},"Color Palette")],-1)),b("div",YM,[(ae(!0),ue(We,null,tt(mt(h),(y,E)=>(ae(),ue("button",{key:E,onClick:N=>mt(_)(E),class:ct(["flex flex-col items-center gap-1 p-2 rounded-lg border transition-all duration-200 focus:outline-none",mt(m)===E?"border-primary-500 bg-primary-500/10 light:bg-primary-50":"border-dark-700 hover:border-primary-400 light:border-secondary-200 light:hover:border-primary-400"]),"aria-label":`Use ${y.name} color palette`,"aria-pressed":mt(m)===E},[b("span",KM,[b("span",{class:"w-3 h-3 rounded-full",style:Mn({backgroundColor:y.primary[500]})},null,4),b("span",{class:"w-3 h-3 rounded-full",style:Mn({backgroundColor:y.accent[500]})},null,4),b("span",{class:"w-3 h-3 rounded-full",style:Mn({backgroundColor:y.secondary[500]})},null,4)]),b("span",{class:ct(["text-[10px] font-medium",mt(m)===E?"text-primary-400 light:text-primary-600":"text-secondary-400 light:text-secondary-500"])},ye(y.name),3)],10,qM))),128))])])])):Rn("",!0)],512)],512),b("button",{onClick:A[3]||(A[3]=Cs(y=>t.value=!t.value,["stop"])),class:ct(["md:hidden text-secondary-300 hover:text-white light:text-secondary-600 light:hover:text-secondary-900 focus:outline-none transition-colors duration-300",!e.value&&mt(p).nav?"light:text-white light:hover:text-secondary-900":"light:text-secondary-600 light:hover:text-secondary-900"]),"aria-label":"Toggle menu"},[t.value?(ae(),ue("svg",JM,[...A[18]||(A[18]=[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)])])):(ae(),ue("svg",ZM,[...A[17]||(A[17]=[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)])]))],2)])]),t.value?(ae(),ue("div",{key:0,ref_key:"mobileMenuRef",ref:s,class:"md:hidden bg-dark-800 border-t border-dark-700 light:bg-white light:border-secondary-200 overflow-hidden"},[b("div",QM,[(ae(),ue(We,null,tt(g,y=>b("a",{key:y.href,href:y.href,onClick:E=>v(E,y.href),class:"block text-secondary-300 hover:text-primary-400 light:text-secondary-600 light:hover:text-primary-600 transition-colors duration-200 py-2 text-sm font-medium"},ye(y.label),9,ew)),64)),b("a",{href:"#contact",onClick:A[4]||(A[4]=y=>t.value=!1),class:"block text-secondary-300 hover:text-primary-400 light:text-secondary-600 light:hover:text-primary-600 transition-colors duration-200 py-2 text-sm font-medium"}," Hire Me "),b("div",tw,[A[24]||(A[24]=b("p",{class:"text-xs font-semibold text-secondary-500 light:text-secondary-400 uppercase tracking-wider mb-2"},"Settings",-1)),b("div",nw,[b("div",iw,[mt(c)?(ae(),ue("svg",rw,[...A[19]||(A[19]=[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1)])])):(ae(),ue("svg",sw,[...A[20]||(A[20]=[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)])])),A[21]||(A[21]=b("span",{class:"text-sm text-secondary-300 light:text-secondary-600"},"Night Mode",-1))]),b("button",{onClick:A[5]||(A[5]=(...y)=>mt(u)&&mt(u)(...y)),class:ct(["relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none",mt(c)?"bg-primary-500":"bg-secondary-300 light:bg-secondary-300"]),"aria-label":mt(c)?"Disable night mode":"Enable night mode"},[b("span",{class:ct(["absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300",mt(c)?"left-5":"left-0.5"])},null,2)],10,ow)]),b("div",aw,[b("div",lw,[A[22]||(A[22]=b("svg",{class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"})],-1)),b("span",cw,ye(l.value?"Swipe Animation":"Mouse Animation"),1)]),b("button",{onClick:A[6]||(A[6]=(...y)=>mt(f)&&mt(f)(...y)),class:ct(["relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none",mt(d)?"bg-primary-500":"bg-secondary-300 light:bg-secondary-300"]),"aria-label":mt(d)?"Disable mouse animation":"Enable mouse animation"},[b("span",{class:ct(["absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300",mt(d)?"left-5":"left-0.5"])},null,2)],10,uw)]),b("div",dw,[A[23]||(A[23]=b("div",{class:"flex items-center space-x-3 mb-2"},[b("svg",{class:"w-4 h-4 text-primary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"})]),b("span",{class:"text-sm text-secondary-300 light:text-secondary-600"},"Color Palette")],-1)),b("div",fw,[(ae(!0),ue(We,null,tt(mt(h),(y,E)=>(ae(),ue("button",{key:E,onClick:N=>mt(_)(E),class:ct(["flex flex-col items-center gap-1 p-2 rounded-lg border transition-all duration-200 focus:outline-none",mt(m)===E?"border-primary-500 bg-primary-500/10 light:bg-primary-50":"border-dark-700 hover:border-primary-400 light:border-secondary-200 light:hover:border-primary-400"]),"aria-label":`Use ${y.name} color palette`,"aria-pressed":mt(m)===E},[b("span",pw,[b("span",{class:"w-3 h-3 rounded-full",style:Mn({backgroundColor:y.primary[500]})},null,4),b("span",{class:"w-3 h-3 rounded-full",style:Mn({backgroundColor:y.accent[500]})},null,4),b("span",{class:"w-3 h-3 rounded-full",style:Mn({backgroundColor:y.secondary[500]})},null,4)]),b("span",{class:ct(["text-[10px] font-medium",mt(m)===E?"text-primary-400 light:text-primary-600":"text-secondary-400 light:text-secondary-500"])},ye(y.name),3)],10,hw))),128))])])])])],512)):Rn("",!0)],2))}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jp="183",gw=0,Pm=1,_w=2,xu=1,xw=2,gl=3,Ws=0,pi=1,qr=2,es=0,Ta=1,Dm=2,Lm=3,Im=4,vw=5,mo=100,yw=101,bw=102,Sw=103,Mw=104,ww=200,Ew=201,Tw=202,Aw=203,ph=204,mh=205,Cw=206,Rw=207,Pw=208,Dw=209,Lw=210,Iw=211,Uw=212,Nw=213,Fw=214,gh=0,_h=1,xh=2,Fa=3,vh=4,yh=5,bh=6,Sh=7,dv=0,Ow=1,kw=2,Tr=0,fv=1,hv=2,pv=3,mv=4,gv=5,_v=6,xv=7,vv=300,Fo=301,Oa=302,Yd=303,qd=304,_d=306,Mh=1e3,Zr=1001,wh=1002,Dn=1003,Bw=1004,Uc=1005,Xn=1006,Kd=1007,yo=1008,Hi=1009,yv=1010,bv=1011,tc=1012,Yp=1013,Dr=1014,br=1015,us=1016,qp=1017,Kp=1018,nc=1020,Sv=35902,Mv=35899,wv=1021,Ev=1022,nr=1023,ds=1026,bo=1027,Tv=1028,Zp=1029,ka=1030,Jp=1031,Qp=1033,vu=33776,yu=33777,bu=33778,Su=33779,Eh=35840,Th=35841,Ah=35842,Ch=35843,Rh=36196,Ph=37492,Dh=37496,Lh=37488,Ih=37489,Uh=37490,Nh=37491,Fh=37808,Oh=37809,kh=37810,Bh=37811,zh=37812,Vh=37813,Hh=37814,Gh=37815,Wh=37816,Xh=37817,$h=37818,jh=37819,Yh=37820,qh=37821,Kh=36492,Zh=36494,Jh=36495,Qh=36283,ep=36284,tp=36285,np=36286,zw=3200,Vw=0,Hw=1,As="",Bi="srgb",Ba="srgb-linear",Yu="linear",Nt="srgb",$o=7680,Um=519,Gw=512,Ww=513,Xw=514,e0=515,$w=516,jw=517,t0=518,Yw=519,Nm=35044,Fm="300 es",Sr=2e3,qu=2001;function qw(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ku(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kw(){const n=Ku("canvas");return n.style.display="block",n}const Om={};function km(...n){const e="THREE."+n.shift();console.log(e,...n)}function Av(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function at(...n){n=Av(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Tt(...n){n=Av(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Zu(...n){const e=n.join(" ");e in Om||(Om[e]=!0,at(...n))}function Zw(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Jw={[gh]:_h,[xh]:bh,[vh]:Sh,[Fa]:yh,[_h]:gh,[bh]:xh,[Sh]:vh,[yh]:Fa};class Va{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zd=Math.PI/180,ip=180/Math.PI;function dc(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(On[n&255]+On[n>>8&255]+On[n>>16&255]+On[n>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[t&63|128]+On[t>>8&255]+"-"+On[t>>16&255]+On[t>>24&255]+On[i&255]+On[i>>8&255]+On[i>>16&255]+On[i>>24&255]).toLowerCase()}function yt(n,e,t){return Math.max(e,Math.min(t,n))}function Qw(n,e){return(n%e+e)%e}function Jd(n,e,t){return(1-t)*n+t*e}function Ja(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function oi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class St{constructor(e=0,t=0){St.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ha{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],m=s[o+2],_=s[o+3];if(d!==_||l!==f||c!==h||u!==m){let p=l*f+c*h+u*m+d*_;p<0&&(f=-f,h=-h,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){const x=Math.acos(p),S=Math.sin(x);g=Math.sin(g*x)/S,a=Math.sin(a*x)/S,l=l*g+f*a,c=c*g+h*a,u=u*g+m*a,d=d*g+_*a}else{l=l*g+f*a,c=c*g+h*a,u=u*g+m*a,d=d*g+_*a;const x=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=x,c*=x,u*=x,d*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],m=s[o+3];return e[t]=a*m+u*d+l*h-c*f,e[t+1]=l*m+u*f+c*d-a*h,e[t+2]=c*m+u*h+a*f-l*d,e[t+3]=u*m-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),h=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d-f*h*m;break;case"YXZ":this._x=f*u*d+c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d+f*h*m;break;case"ZXY":this._x=f*u*d-c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d-f*h*m;break;case"ZYX":this._x=f*u*d-c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d+f*h*m;break;case"YZX":this._x=f*u*d+c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d-f*h*m;break;case"XZY":this._x=f*u*d-c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d+f*h*m;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,t=0,i=0){se.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qd.copy(this).projectOnVector(e),this.sub(Qd)}reflect(e){return this.sub(Qd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qd=new se,Bm=new Ha;class ht{constructor(e,t,i,r,s,o,a,l,c){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],m=i[8],_=r[0],p=r[3],g=r[6],x=r[1],S=r[4],v=r[7],C=r[2],R=r[5],A=r[8];return s[0]=o*_+a*x+l*C,s[3]=o*p+a*S+l*R,s[6]=o*g+a*v+l*A,s[1]=c*_+u*x+d*C,s[4]=c*p+u*S+d*R,s[7]=c*g+u*v+d*A,s[2]=f*_+h*x+m*C,s[5]=f*p+h*S+m*R,s[8]=f*g+h*v+m*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,h=c*s-o*l,m=t*d+i*f+r*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=h*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ef.makeScale(e,t)),this}rotate(e){return this.premultiply(ef.makeRotation(-e)),this}translate(e,t){return this.premultiply(ef.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ef=new ht,zm=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vm=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eE(){const n={enabled:!0,workingColorSpace:Ba,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Nt&&(r.r=ts(r.r),r.g=ts(r.g),r.b=ts(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Nt&&(r.r=Aa(r.r),r.g=Aa(r.g),r.b=Aa(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===As?Yu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Zu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Zu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ba]:{primaries:e,whitePoint:i,transfer:Yu,toXYZ:zm,fromXYZ:Vm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bi},outputColorSpaceConfig:{drawingBufferColorSpace:Bi}},[Bi]:{primaries:e,whitePoint:i,transfer:Nt,toXYZ:zm,fromXYZ:Vm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bi}}}),n}const Mt=eE();function ts(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Aa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let jo;class tE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{jo===void 0&&(jo=Ku("canvas")),jo.width=e.width,jo.height=e.height;const r=jo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=jo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ku("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ts(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ts(t[i]/255)*255):t[i]=ts(t[i]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nE=0;class n0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=dc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(tf(r[o].image)):s.push(tf(r[o]))}else s=tf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function tf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?tE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let iE=0;const nf=new se;class si extends Va{constructor(e=si.DEFAULT_IMAGE,t=si.DEFAULT_MAPPING,i=Zr,r=Zr,s=Xn,o=yo,a=nr,l=Hi,c=si.DEFAULT_ANISOTROPY,u=As){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=dc(),this.name="",this.source=new n0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(nf).x}get height(){return this.source.getSize(nf).y}get depth(){return this.source.getSize(nf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mh:e.x=e.x-Math.floor(e.x);break;case Zr:e.x=e.x<0?0:1;break;case wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mh:e.y=e.y-Math.floor(e.y);break;case Zr:e.y=e.y<0?0:1;break;case wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=vv;si.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,t=0,i=0,r=1){rn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(h+1)/2,C=(g+1)/2,R=(u+f)/4,A=(d+_)/4,y=(m+p)/4;return S>v&&S>C?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=R/i,s=A/i):v>C?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=R/r,s=y/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=y/s),this.set(i,r,s,t),this}let x=Math.sqrt((p-m)*(p-m)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-m)/x,this.y=(d-_)/x,this.z=(f-u)/x,this.w=Math.acos((c+h+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rE extends Va{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new si(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new n0(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends rE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Cv extends si{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sE extends si{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cn{constructor(e,t,i,r,s,o,a,l,c,u,d,f,h,m,_,p){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,h,m,_,p)}set(e,t,i,r,s,o,a,l,c,u,d,f,h,m,_,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=f,g[3]=h,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Yo.setFromMatrixColumn(e,0).length(),s=1/Yo.setFromMatrixColumn(e,1).length(),o=1/Yo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,h=o*d,m=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+m*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=m+h*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,m=c*u,_=c*d;t[0]=f+_*a,t[4]=m*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-m,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,m=c*u,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=m+h*a,t[1]=h+m*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,m=a*u,_=a*d;t[0]=l*u,t[4]=m*c-h,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=h*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=_-f*d,t[8]=m*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+m,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,h=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+_,t[5]=o*u,t[9]=h*d-m,t[2]=m*d-h,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oE,e,aE)}lookAt(e,t,i){const r=this.elements;return _i.subVectors(e,t),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),vs.crossVectors(i,_i),vs.lengthSq()===0&&(Math.abs(i.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),vs.crossVectors(i,_i)),vs.normalize(),Nc.crossVectors(_i,vs),r[0]=vs.x,r[4]=Nc.x,r[8]=_i.x,r[1]=vs.y,r[5]=Nc.y,r[9]=_i.y,r[2]=vs.z,r[6]=Nc.z,r[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],m=i[2],_=i[6],p=i[10],g=i[14],x=i[3],S=i[7],v=i[11],C=i[15],R=r[0],A=r[4],y=r[8],E=r[12],N=r[1],U=r[5],L=r[9],V=r[13],z=r[2],G=r[6],X=r[10],k=r[14],K=r[3],j=r[7],F=r[11],ce=r[15];return s[0]=o*R+a*N+l*z+c*K,s[4]=o*A+a*U+l*G+c*j,s[8]=o*y+a*L+l*X+c*F,s[12]=o*E+a*V+l*k+c*ce,s[1]=u*R+d*N+f*z+h*K,s[5]=u*A+d*U+f*G+h*j,s[9]=u*y+d*L+f*X+h*F,s[13]=u*E+d*V+f*k+h*ce,s[2]=m*R+_*N+p*z+g*K,s[6]=m*A+_*U+p*G+g*j,s[10]=m*y+_*L+p*X+g*F,s[14]=m*E+_*V+p*k+g*ce,s[3]=x*R+S*N+v*z+C*K,s[7]=x*A+S*U+v*G+C*j,s[11]=x*y+S*L+v*X+C*F,s[15]=x*E+S*V+v*k+C*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],m=e[3],_=e[7],p=e[11],g=e[15],x=l*h-c*f,S=a*h-c*d,v=a*f-l*d,C=o*h-c*u,R=o*f-l*u,A=o*d-a*u;return t*(_*x-p*S+g*v)-i*(m*x-p*C+g*R)+r*(m*S-_*C+g*A)-s*(m*v-_*R+p*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],m=e[12],_=e[13],p=e[14],g=e[15],x=t*a-i*o,S=t*l-r*o,v=t*c-s*o,C=i*l-r*a,R=i*c-s*a,A=r*c-s*l,y=u*_-d*m,E=u*p-f*m,N=u*g-h*m,U=d*p-f*_,L=d*g-h*_,V=f*g-h*p,z=x*V-S*L+v*U+C*N-R*E+A*y;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/z;return e[0]=(a*V-l*L+c*U)*G,e[1]=(r*L-i*V-s*U)*G,e[2]=(_*A-p*R+g*C)*G,e[3]=(f*R-d*A-h*C)*G,e[4]=(l*N-o*V-c*E)*G,e[5]=(t*V-r*N+s*E)*G,e[6]=(p*v-m*A-g*S)*G,e[7]=(u*A-f*v+h*S)*G,e[8]=(o*L-a*N+c*y)*G,e[9]=(i*N-t*L-s*y)*G,e[10]=(m*R-_*v+g*x)*G,e[11]=(d*v-u*R-h*x)*G,e[12]=(a*E-o*U-l*y)*G,e[13]=(t*U-i*E+r*y)*G,e[14]=(_*S-m*C-p*x)*G,e[15]=(u*C-d*S+f*x)*G,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,h=s*u,m=s*d,_=o*u,p=o*d,g=a*d,x=l*c,S=l*u,v=l*d,C=i.x,R=i.y,A=i.z;return r[0]=(1-(_+g))*C,r[1]=(h+v)*C,r[2]=(m-S)*C,r[3]=0,r[4]=(h-v)*R,r[5]=(1-(f+g))*R,r[6]=(p+x)*R,r[7]=0,r[8]=(m+S)*A,r[9]=(p-x)*A,r[10]=(1-(f+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let o=Yo.set(r[0],r[1],r[2]).length();const a=Yo.set(r[4],r[5],r[6]).length(),l=Yo.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Ki.copy(this);const c=1/o,u=1/a,d=1/l;return Ki.elements[0]*=c,Ki.elements[1]*=c,Ki.elements[2]*=c,Ki.elements[4]*=u,Ki.elements[5]*=u,Ki.elements[6]*=u,Ki.elements[8]*=d,Ki.elements[9]*=d,Ki.elements[10]*=d,t.setFromRotationMatrix(Ki),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=Sr,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let m,_;if(l)m=s/(o-s),_=o*s/(o-s);else if(a===Sr)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===qu)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Sr,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r);let m,_;if(l)m=1/(o-s),_=o/(o-s);else if(a===Sr)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===qu)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Yo=new se,Ki=new cn,oE=new se(0,0,0),aE=new se(1,1,1),vs=new se,Nc=new se,_i=new se,Hm=new cn,Gm=new Ha;class fs{constructor(e=0,t=0,i=0,r=fs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Hm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gm.setFromEuler(this),this.setFromQuaternion(Gm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fs.DEFAULT_ORDER="XYZ";class Rv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lE=0;const Wm=new se,qo=new Ha,Fr=new cn,Fc=new se,Qa=new se,cE=new se,uE=new Ha,Xm=new se(1,0,0),$m=new se(0,1,0),jm=new se(0,0,1),Ym={type:"added"},dE={type:"removed"},Ko={type:"childadded",child:null},rf={type:"childremoved",child:null};class Di extends Va{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=dc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Di.DEFAULT_UP.clone();const e=new se,t=new fs,i=new Ha,r=new se(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new cn},normalMatrix:{value:new ht}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=Di.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qo.setFromAxisAngle(e,t),this.quaternion.multiply(qo),this}rotateOnWorldAxis(e,t){return qo.setFromAxisAngle(e,t),this.quaternion.premultiply(qo),this}rotateX(e){return this.rotateOnAxis(Xm,e)}rotateY(e){return this.rotateOnAxis($m,e)}rotateZ(e){return this.rotateOnAxis(jm,e)}translateOnAxis(e,t){return Wm.copy(e).applyQuaternion(this.quaternion),this.position.add(Wm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xm,e)}translateY(e){return this.translateOnAxis($m,e)}translateZ(e){return this.translateOnAxis(jm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fc.copy(e):Fc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fr.lookAt(Qa,Fc,this.up):Fr.lookAt(Fc,Qa,this.up),this.quaternion.setFromRotationMatrix(Fr),r&&(Fr.extractRotation(r.matrixWorld),qo.setFromRotationMatrix(Fr),this.quaternion.premultiply(qo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ym),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null):Tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dE),rf.child=e,this.dispatchEvent(rf),rf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ym),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,e,cE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,uE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Di.DEFAULT_UP=new se(0,1,0);Di.DEFAULT_MATRIX_AUTO_UPDATE=!0;Di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Oc extends Di{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fE={type:"move"};class sf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,m=.005;c.inputState.pinching&&f>h+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Oc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},kc={h:0,s:0,l:0};function of(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class kt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Mt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Mt.workingColorSpace){if(e=Qw(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=of(o,s,e+1/3),this.g=of(o,s,e),this.b=of(o,s,e-1/3)}return Mt.colorSpaceToWorking(this,r),this}setStyle(e,t=Bi){function i(s){s!==void 0&&parseFloat(s)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bi){const i=Pv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=Aa(e.r),this.g=Aa(e.g),this.b=Aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bi){return Mt.workingToColorSpace(kn.copy(this),e),Math.round(yt(kn.r*255,0,255))*65536+Math.round(yt(kn.g*255,0,255))*256+Math.round(yt(kn.b*255,0,255))}getHexString(e=Bi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(kn.copy(this),t);const i=kn.r,r=kn.g,s=kn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(kn.copy(this),t),e.r=kn.r,e.g=kn.g,e.b=kn.b,e}getStyle(e=Bi){Mt.workingToColorSpace(kn.copy(this),e);const t=kn.r,i=kn.g,r=kn.b;return e!==Bi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ys),this.setHSL(ys.h+e,ys.s+t,ys.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ys),e.getHSL(kc);const i=Jd(ys.h,kc.h,t),r=Jd(ys.s,kc.s,t),s=Jd(ys.l,kc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new kt;kt.NAMES=Pv;class hE extends Di{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fs,this.environmentIntensity=1,this.environmentRotation=new fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Zi=new se,Or=new se,af=new se,kr=new se,Zo=new se,Jo=new se,qm=new se,lf=new se,cf=new se,uf=new se,df=new rn,ff=new rn,hf=new rn;class tr{constructor(e=new se,t=new se,i=new se){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Zi.subVectors(e,t),r.cross(Zi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Zi.subVectors(r,t),Or.subVectors(i,t),af.subVectors(e,t);const o=Zi.dot(Zi),a=Zi.dot(Or),l=Zi.dot(af),c=Or.dot(Or),u=Or.dot(af),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-h-m,m,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,kr)===null?!1:kr.x>=0&&kr.y>=0&&kr.x+kr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,kr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,kr.x),l.addScaledVector(o,kr.y),l.addScaledVector(a,kr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return df.setScalar(0),ff.setScalar(0),hf.setScalar(0),df.fromBufferAttribute(e,t),ff.fromBufferAttribute(e,i),hf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(df,s.x),o.addScaledVector(ff,s.y),o.addScaledVector(hf,s.z),o}static isFrontFacing(e,t,i,r){return Zi.subVectors(i,t),Or.subVectors(e,t),Zi.cross(Or).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zi.subVectors(this.c,this.b),Or.subVectors(this.a,this.b),Zi.cross(Or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return tr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return tr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Zo.subVectors(r,i),Jo.subVectors(s,i),lf.subVectors(e,i);const l=Zo.dot(lf),c=Jo.dot(lf);if(l<=0&&c<=0)return t.copy(i);cf.subVectors(e,r);const u=Zo.dot(cf),d=Jo.dot(cf);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Zo,o);uf.subVectors(e,s);const h=Zo.dot(uf),m=Jo.dot(uf);if(m>=0&&h<=m)return t.copy(s);const _=h*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(Jo,a);const p=u*m-h*d;if(p<=0&&d-u>=0&&h-m>=0)return qm.subVectors(s,r),a=(d-u)/(d-u+(h-m)),t.copy(r).addScaledVector(qm,a);const g=1/(p+_+f);return o=_*g,a=f*g,t.copy(i).addScaledVector(Zo,o).addScaledVector(Jo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class fc{constructor(e=new se(1/0,1/0,1/0),t=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ji.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ji.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ji.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ji):Ji.fromBufferAttribute(s,o),Ji.applyMatrix4(e.matrixWorld),this.expandByPoint(Ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Bc.copy(i.boundingBox)),Bc.applyMatrix4(e.matrixWorld),this.union(Bc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ji),Ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(el),zc.subVectors(this.max,el),Qo.subVectors(e.a,el),ea.subVectors(e.b,el),ta.subVectors(e.c,el),bs.subVectors(ea,Qo),Ss.subVectors(ta,ea),eo.subVectors(Qo,ta);let t=[0,-bs.z,bs.y,0,-Ss.z,Ss.y,0,-eo.z,eo.y,bs.z,0,-bs.x,Ss.z,0,-Ss.x,eo.z,0,-eo.x,-bs.y,bs.x,0,-Ss.y,Ss.x,0,-eo.y,eo.x,0];return!pf(t,Qo,ea,ta,zc)||(t=[1,0,0,0,1,0,0,0,1],!pf(t,Qo,ea,ta,zc))?!1:(Vc.crossVectors(bs,Ss),t=[Vc.x,Vc.y,Vc.z],pf(t,Qo,ea,ta,zc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Br[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Br[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Br[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Br[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Br[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Br[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Br[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Br[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Br),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Br=[new se,new se,new se,new se,new se,new se,new se,new se],Ji=new se,Bc=new fc,Qo=new se,ea=new se,ta=new se,bs=new se,Ss=new se,eo=new se,el=new se,zc=new se,Vc=new se,to=new se;function pf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){to.fromArray(n,s);const a=r.x*Math.abs(to.x)+r.y*Math.abs(to.y)+r.z*Math.abs(to.z),l=e.dot(to),c=t.dot(to),u=i.dot(to);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const on=new se,Hc=new St;let pE=0;class Cr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Nm,this.updateRanges=[],this.gpuType=br,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Hc.fromBufferAttribute(this,t),Hc.applyMatrix3(e),this.setXY(t,Hc.x,Hc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ja(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=oi(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ja(t,this.array)),t}setX(e,t){return this.normalized&&(t=oi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ja(t,this.array)),t}setY(e,t){return this.normalized&&(t=oi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ja(t,this.array)),t}setZ(e,t){return this.normalized&&(t=oi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ja(t,this.array)),t}setW(e,t){return this.normalized&&(t=oi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=oi(t,this.array),i=oi(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=oi(t,this.array),i=oi(i,this.array),r=oi(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=oi(t,this.array),i=oi(i,this.array),r=oi(r,this.array),s=oi(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nm&&(e.usage=this.usage),e}}class Dv extends Cr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Lv extends Cr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ns extends Cr{constructor(e,t,i){super(new Float32Array(e),t,i)}}const mE=new fc,tl=new se,mf=new se;class i0{constructor(e=new se,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):mE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tl.subVectors(e,this.center);const t=tl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(tl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tl.copy(e.center).add(mf)),this.expandByPoint(tl.copy(e.center).sub(mf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let gE=0;const Fi=new cn,gf=new Di,na=new se,xi=new fc,nl=new fc,vn=new se;class ps extends Va{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=dc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qw(e)?Lv:Dv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ht().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fi.makeRotationFromQuaternion(e),this.applyMatrix4(Fi),this}rotateX(e){return Fi.makeRotationX(e),this.applyMatrix4(Fi),this}rotateY(e){return Fi.makeRotationY(e),this.applyMatrix4(Fi),this}rotateZ(e){return Fi.makeRotationZ(e),this.applyMatrix4(Fi),this}translate(e,t,i){return Fi.makeTranslation(e,t,i),this.applyMatrix4(Fi),this}scale(e,t,i){return Fi.makeScale(e,t,i),this.applyMatrix4(Fi),this}lookAt(e){return gf.lookAt(e),gf.updateMatrix(),this.applyMatrix4(gf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(na).negate(),this.translate(na.x,na.y,na.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ns(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];xi.setFromBufferAttribute(s),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new i0);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const i=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];nl.setFromBufferAttribute(a),this.morphTargetsRelative?(vn.addVectors(xi.min,nl.min),xi.expandByPoint(vn),vn.addVectors(xi.max,nl.max),xi.expandByPoint(vn)):(xi.expandByPoint(nl.min),xi.expandByPoint(nl.max))}xi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)vn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(vn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)vn.fromBufferAttribute(a,c),l&&(na.fromBufferAttribute(e,c),vn.add(na)),r=Math.max(r,i.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new se,l[y]=new se;const c=new se,u=new se,d=new se,f=new St,h=new St,m=new St,_=new se,p=new se;function g(y,E,N){c.fromBufferAttribute(i,y),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,N),f.fromBufferAttribute(s,y),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,N),u.sub(c),d.sub(c),h.sub(f),m.sub(f);const U=1/(h.x*m.y-m.x*h.y);isFinite(U)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(d,-h.y).multiplyScalar(U),p.copy(d).multiplyScalar(h.x).addScaledVector(u,-m.x).multiplyScalar(U),a[y].add(_),a[E].add(_),a[N].add(_),l[y].add(p),l[E].add(p),l[N].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let y=0,E=x.length;y<E;++y){const N=x[y],U=N.start,L=N.count;for(let V=U,z=U+L;V<z;V+=3)g(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const S=new se,v=new se,C=new se,R=new se;function A(y){C.fromBufferAttribute(r,y),R.copy(C);const E=a[y];S.copy(E),S.sub(C.multiplyScalar(C.dot(E))).normalize(),v.crossVectors(R,E);const U=v.dot(l[y])<0?-1:1;o.setXYZW(y,S.x,S.y,S.z,U)}for(let y=0,E=x.length;y<E;++y){const N=x[y],U=N.start,L=N.count;for(let V=U,z=U+L;V<z;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Cr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new se,s=new se,o=new se,a=new se,l=new se,c=new se,u=new se,d=new se;if(e)for(let f=0,h=e.count;f<h;f+=3){const m=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let g=0;g<u;g++)f[m++]=c[h++]}return new Cr(f,u,d)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ps,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let _E=0;class xd extends Va{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=dc(),this.name="",this.type="Material",this.blending=Ta,this.side=Ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=mo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Um,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$o,this.stencilZFail=$o,this.stencilZPass=$o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ta&&(i.blending=this.blending),this.side!==Ws&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ph&&(i.blendSrc=this.blendSrc),this.blendDst!==mh&&(i.blendDst=this.blendDst),this.blendEquation!==mo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Um&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$o&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$o&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$o&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const zr=new se,_f=new se,Gc=new se,Ms=new se,xf=new se,Wc=new se,vf=new se;class xE{constructor(e=new se,t=new se(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zr.copy(this.origin).addScaledVector(this.direction,t),zr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){_f.copy(e).add(t).multiplyScalar(.5),Gc.copy(t).sub(e).normalize(),Ms.copy(this.origin).sub(_f);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Gc),a=Ms.dot(this.direction),l=-Ms.dot(Gc),c=Ms.lengthSq(),u=Math.abs(1-o*o);let d,f,h,m;if(u>0)if(d=o*l-a,f=o*a-l,m=s*u,d>=0)if(f>=-m)if(f<=m){const _=1/u;d*=_,f*=_,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(_f).addScaledVector(Gc,f),h}intersectSphere(e,t){zr.subVectors(e.center,this.origin);const i=zr.dot(this.direction),r=zr.dot(zr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,zr)!==null}intersectTriangle(e,t,i,r,s){xf.subVectors(t,e),Wc.subVectors(i,e),vf.crossVectors(xf,Wc);let o=this.direction.dot(vf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ms.subVectors(this.origin,e);const l=a*this.direction.dot(Wc.crossVectors(Ms,Wc));if(l<0)return null;const c=a*this.direction.dot(xf.cross(Ms));if(c<0||l+c>o)return null;const u=-a*Ms.dot(vf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Iv extends xd{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fs,this.combine=dv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Km=new cn,no=new xE,Xc=new i0,Zm=new se,$c=new se,jc=new se,Yc=new se,yf=new se,qc=new se,Jm=new se,Kc=new se;class Lr extends Di{constructor(e=new ps,t=new Iv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){qc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(yf.fromBufferAttribute(d,e),o?qc.addScaledVector(yf,u):qc.addScaledVector(yf.sub(t),u))}t.add(qc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xc.copy(i.boundingSphere),Xc.applyMatrix4(s),no.copy(e.ray).recast(e.near),!(Xc.containsPoint(no.origin)===!1&&(no.intersectSphere(Xc,Zm)===null||no.origin.distanceToSquared(Zm)>(e.far-e.near)**2))&&(Km.copy(s).invert(),no.copy(e.ray).applyMatrix4(Km),!(i.boundingBox!==null&&no.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,no)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const p=f[m],g=o[p.materialIndex],x=Math.max(p.start,h.start),S=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let v=x,C=S;v<C;v+=3){const R=a.getX(v),A=a.getX(v+1),y=a.getX(v+2);r=Zc(this,g,e,i,c,u,d,R,A,y),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const m=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let p=m,g=_;p<g;p+=3){const x=a.getX(p),S=a.getX(p+1),v=a.getX(p+2);r=Zc(this,o,e,i,c,u,d,x,S,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const p=f[m],g=o[p.materialIndex],x=Math.max(p.start,h.start),S=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let v=x,C=S;v<C;v+=3){const R=v,A=v+1,y=v+2;r=Zc(this,g,e,i,c,u,d,R,A,y),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const m=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let p=m,g=_;p<g;p+=3){const x=p,S=p+1,v=p+2;r=Zc(this,o,e,i,c,u,d,x,S,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function vE(n,e,t,i,r,s,o,a){let l;if(e.side===pi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ws,a),l===null)return null;Kc.copy(a),Kc.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Kc);return c<t.near||c>t.far?null:{distance:c,point:Kc.clone(),object:n}}function Zc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,$c),n.getVertexPosition(l,jc),n.getVertexPosition(c,Yc);const u=vE(n,e,t,i,$c,jc,Yc,Jm);if(u){const d=new se;tr.getBarycoord(Jm,$c,jc,Yc,d),r&&(u.uv=tr.getInterpolatedAttribute(r,a,l,c,d,new St)),s&&(u.uv1=tr.getInterpolatedAttribute(s,a,l,c,d,new St)),o&&(u.normal=tr.getInterpolatedAttribute(o,a,l,c,d,new se),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new se,materialIndex:0};tr.getNormal($c,jc,Yc,f.normal),u.face=f,u.barycoord=d}return u}class yE extends si{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Dn,u=Dn,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bf=new se,bE=new se,SE=new ht;class uo{constructor(e=new se(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=bf.subVectors(i,t).cross(bE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(bf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||SE.getNormalMatrix(e),r=this.coplanarPoint(bf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const io=new i0,ME=new St(.5,.5),Jc=new se;class Uv{constructor(e=new uo,t=new uo,i=new uo,r=new uo,s=new uo,o=new uo){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Sr,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],m=s[8],_=s[9],p=s[10],g=s[11],x=s[12],S=s[13],v=s[14],C=s[15];if(r[0].setComponents(c-o,h-u,g-m,C-x).normalize(),r[1].setComponents(c+o,h+u,g+m,C+x).normalize(),r[2].setComponents(c+a,h+d,g+_,C+S).normalize(),r[3].setComponents(c-a,h-d,g-_,C-S).normalize(),i)r[4].setComponents(l,f,p,v).normalize(),r[5].setComponents(c-l,h-f,g-p,C-v).normalize();else if(r[4].setComponents(c-l,h-f,g-p,C-v).normalize(),t===Sr)r[5].setComponents(c+l,h+f,g+p,C+v).normalize();else if(t===qu)r[5].setComponents(l,f,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),io.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),io.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(io)}intersectsSprite(e){io.center.set(0,0,0);const t=ME.distanceTo(e.center);return io.radius=.7071067811865476+t,io.applyMatrix4(e.matrixWorld),this.intersectsSphere(io)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Jc.x=r.normal.x>0?e.max.x:e.min.x,Jc.y=r.normal.y>0?e.max.y:e.min.y,Jc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Jc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nv extends si{constructor(e=[],t=Fo,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ic extends si{constructor(e,t,i=Dr,r,s,o,a=Dn,l=Dn,c,u=ds,d=1){if(u!==ds&&u!==bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new n0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wE extends ic{constructor(e,t=Dr,i=Fo,r,s,o=Dn,a=Dn,l,c=ds){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Fv extends si{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class hc extends ps{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ns(c,3)),this.setAttribute("normal",new ns(u,3)),this.setAttribute("uv",new ns(d,2));function m(_,p,g,x,S,v,C,R,A,y,E){const N=v/A,U=C/y,L=v/2,V=C/2,z=R/2,G=A+1,X=y+1;let k=0,K=0;const j=new se;for(let F=0;F<X;F++){const ce=F*U-V;for(let me=0;me<G;me++){const ge=me*N-L;j[_]=ge*x,j[p]=ce*S,j[g]=z,c.push(j.x,j.y,j.z),j[_]=0,j[p]=0,j[g]=R>0?1:-1,u.push(j.x,j.y,j.z),d.push(me/A),d.push(1-F/y),k+=1}}for(let F=0;F<y;F++)for(let ce=0;ce<A;ce++){const me=f+ce+G*F,ge=f+ce+G*(F+1),ve=f+(ce+1)+G*(F+1),Te=f+(ce+1)+G*F;l.push(me,ge,Te),l.push(ge,ve,Te),K+=6}a.addGroup(h,K,E),h+=K,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class pc extends ps{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,h=[],m=[],_=[],p=[];for(let g=0;g<u;g++){const x=g*f-o;for(let S=0;S<c;S++){const v=S*d-s;m.push(v,-x,0),_.push(0,0,1),p.push(S/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){const S=x+c*g,v=x+c*(g+1),C=x+1+c*(g+1),R=x+1+c*g;h.push(S,v,R),h.push(v,C,R)}this.setIndex(h),this.setAttribute("position",new ns(m,3)),this.setAttribute("normal",new ns(_,3)),this.setAttribute("uv",new ns(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pc(e.width,e.height,e.widthSegments,e.heightSegments)}}function za(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Zn(n){const e={};for(let t=0;t<n.length;t++){const i=za(n[t]);for(const r in i)e[r]=i[r]}return e}function EE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ov(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const TE={clone:za,merge:Zn};var AE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends xd{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AE,this.fragmentShader=CE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=za(e.uniforms),this.uniformsGroups=EE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class RE extends or{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class PE extends xd{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DE extends xd{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qc=new se,eu=new Ha,cr=new se;class kv extends Di{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=Sr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qc,eu,cr),cr.x===1&&cr.y===1&&cr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qc,eu,cr.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Qc,eu,cr),cr.x===1&&cr.y===1&&cr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qc,eu,cr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ws=new se,Qm=new St,eg=new St;class er extends kv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ip*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ip*2*Math.atan(Math.tan(Zd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ws.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ws.x,ws.y).multiplyScalar(-e/ws.z),ws.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ws.x,ws.y).multiplyScalar(-e/ws.z)}getViewSize(e,t){return this.getViewBounds(e,Qm,eg),t.subVectors(eg,Qm)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zd*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class r0 extends kv{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ia=-90,ra=1;class LE extends Di{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new er(ia,ra,e,t);r.layers=this.layers,this.add(r);const s=new er(ia,ra,e,t);s.layers=this.layers,this.add(s);const o=new er(ia,ra,e,t);o.layers=this.layers,this.add(o);const a=new er(ia,ra,e,t);a.layers=this.layers,this.add(a);const l=new er(ia,ra,e,t);l.layers=this.layers,this.add(l);const c=new er(ia,ra,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Sr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class IE extends er{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function tg(n,e,t,i){const r=UE(i);switch(t){case wv:return n*e;case Tv:return n*e/r.components*r.byteLength;case Zp:return n*e/r.components*r.byteLength;case ka:return n*e*2/r.components*r.byteLength;case Jp:return n*e*2/r.components*r.byteLength;case Ev:return n*e*3/r.components*r.byteLength;case nr:return n*e*4/r.components*r.byteLength;case Qp:return n*e*4/r.components*r.byteLength;case vu:case yu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bu:case Su:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Th:case Ch:return Math.max(n,16)*Math.max(e,8)/4;case Eh:case Ah:return Math.max(n,8)*Math.max(e,8)/2;case Rh:case Ph:case Lh:case Ih:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Dh:case Uh:case Nh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case kh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case zh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case $h:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case jh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Yh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case qh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Kh:case Zh:case Jh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Qh:case ep:return Math.ceil(n/4)*Math.ceil(e/4)*8;case tp:case np:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function UE(n){switch(n){case Hi:case yv:return{byteLength:1,components:1};case tc:case bv:case us:return{byteLength:2,components:1};case qp:case Kp:return{byteLength:2,components:4};case Dr:case Yp:case br:return{byteLength:4,components:1};case Sv:case Mv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jp}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function NE(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,m)=>h.start-m.start);let f=0;for(let h=1;h<d.length;h++){const m=d[f],_=d[h];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,d[f]=_)}d.length=f+1;for(let h=0,m=d.length;h<m;h++){const _=d[h];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var FE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OE=`#ifdef USE_ALPHAHASH
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
#endif`,kE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,BE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HE=`#ifdef USE_AOMAP
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
#endif`,GE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WE=`#ifdef USE_BATCHING
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
#endif`,XE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$E=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qE=`#ifdef USE_IRIDESCENCE
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
#endif`,KE=`#ifdef USE_BUMPMAP
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
#endif`,ZE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,JE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,QE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,iT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,sT=`#define PI 3.141592653589793
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
} // validated`,oT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,aT=`vec3 transformedNormal = objectNormal;
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
#endif`,lT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fT="gl_FragColor = linearToOutputTexel( gl_FragColor );",hT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pT=`#ifdef USE_ENVMAP
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
#endif`,mT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,gT=`#ifdef USE_ENVMAP
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
#endif`,_T=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xT=`#ifdef USE_ENVMAP
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
#endif`,vT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ST=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MT=`#ifdef USE_GRADIENTMAP
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
}`,wT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ET=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AT=`uniform bool receiveShadow;
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
#endif`,CT=`#ifdef USE_ENVMAP
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
#endif`,RT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IT=`PhysicalMaterial material;
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
#endif`,UT=`uniform sampler2D dfgLUT;
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
}`,NT=`
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
#endif`,FT=`#if defined( RE_IndirectDiffuse )
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
#endif`,OT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,HT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,XT=`#if defined( USE_POINTS_UV )
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
#endif`,$T=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZT=`#ifdef USE_MORPHTARGETS
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
#endif`,JT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,e2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,t2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,r2=`#ifdef USE_NORMALMAP
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
#endif`,s2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,o2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,a2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,l2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,d2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,v2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y2=`float getShadowMask() {
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
}`,b2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S2=`#ifdef USE_SKINNING
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
#endif`,M2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w2=`#ifdef USE_SKINNING
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
#endif`,E2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,R2=`#ifdef USE_TRANSMISSION
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
#endif`,P2=`#ifdef USE_TRANSMISSION
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
#endif`,D2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F2=`uniform sampler2D t2D;
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
}`,O2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,B2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V2=`#include <common>
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
}`,H2=`#if DEPTH_PACKING == 3200
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
}`,G2=`#define DISTANCE
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
}`,W2=`#define DISTANCE
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
}`,X2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j2=`uniform float scale;
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
}`,Y2=`uniform vec3 diffuse;
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
}`,q2=`#include <common>
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
}`,K2=`uniform vec3 diffuse;
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
}`,Z2=`#define LAMBERT
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
}`,J2=`#define LAMBERT
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
}`,Q2=`#define MATCAP
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
}`,eA=`#define MATCAP
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
}`,tA=`#define NORMAL
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
}`,nA=`#define NORMAL
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
}`,iA=`#define PHONG
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
}`,rA=`#define PHONG
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
}`,sA=`#define STANDARD
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
}`,oA=`#define STANDARD
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
}`,aA=`#define TOON
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
}`,lA=`#define TOON
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
}`,cA=`uniform float size;
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
}`,uA=`uniform vec3 diffuse;
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
}`,dA=`#include <common>
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
}`,fA=`uniform vec3 color;
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
}`,hA=`uniform float rotation;
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
}`,pA=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:FE,alphahash_pars_fragment:OE,alphamap_fragment:kE,alphamap_pars_fragment:BE,alphatest_fragment:zE,alphatest_pars_fragment:VE,aomap_fragment:HE,aomap_pars_fragment:GE,batching_pars_vertex:WE,batching_vertex:XE,begin_vertex:$E,beginnormal_vertex:jE,bsdfs:YE,iridescence_fragment:qE,bumpmap_pars_fragment:KE,clipping_planes_fragment:ZE,clipping_planes_pars_fragment:JE,clipping_planes_pars_vertex:QE,clipping_planes_vertex:eT,color_fragment:tT,color_pars_fragment:nT,color_pars_vertex:iT,color_vertex:rT,common:sT,cube_uv_reflection_fragment:oT,defaultnormal_vertex:aT,displacementmap_pars_vertex:lT,displacementmap_vertex:cT,emissivemap_fragment:uT,emissivemap_pars_fragment:dT,colorspace_fragment:fT,colorspace_pars_fragment:hT,envmap_fragment:pT,envmap_common_pars_fragment:mT,envmap_pars_fragment:gT,envmap_pars_vertex:_T,envmap_physical_pars_fragment:CT,envmap_vertex:xT,fog_vertex:vT,fog_pars_vertex:yT,fog_fragment:bT,fog_pars_fragment:ST,gradientmap_pars_fragment:MT,lightmap_pars_fragment:wT,lights_lambert_fragment:ET,lights_lambert_pars_fragment:TT,lights_pars_begin:AT,lights_toon_fragment:RT,lights_toon_pars_fragment:PT,lights_phong_fragment:DT,lights_phong_pars_fragment:LT,lights_physical_fragment:IT,lights_physical_pars_fragment:UT,lights_fragment_begin:NT,lights_fragment_maps:FT,lights_fragment_end:OT,logdepthbuf_fragment:kT,logdepthbuf_pars_fragment:BT,logdepthbuf_pars_vertex:zT,logdepthbuf_vertex:VT,map_fragment:HT,map_pars_fragment:GT,map_particle_fragment:WT,map_particle_pars_fragment:XT,metalnessmap_fragment:$T,metalnessmap_pars_fragment:jT,morphinstance_vertex:YT,morphcolor_vertex:qT,morphnormal_vertex:KT,morphtarget_pars_vertex:ZT,morphtarget_vertex:JT,normal_fragment_begin:QT,normal_fragment_maps:e2,normal_pars_fragment:t2,normal_pars_vertex:n2,normal_vertex:i2,normalmap_pars_fragment:r2,clearcoat_normal_fragment_begin:s2,clearcoat_normal_fragment_maps:o2,clearcoat_pars_fragment:a2,iridescence_pars_fragment:l2,opaque_fragment:c2,packing:u2,premultiplied_alpha_fragment:d2,project_vertex:f2,dithering_fragment:h2,dithering_pars_fragment:p2,roughnessmap_fragment:m2,roughnessmap_pars_fragment:g2,shadowmap_pars_fragment:_2,shadowmap_pars_vertex:x2,shadowmap_vertex:v2,shadowmask_pars_fragment:y2,skinbase_vertex:b2,skinning_pars_vertex:S2,skinning_vertex:M2,skinnormal_vertex:w2,specularmap_fragment:E2,specularmap_pars_fragment:T2,tonemapping_fragment:A2,tonemapping_pars_fragment:C2,transmission_fragment:R2,transmission_pars_fragment:P2,uv_pars_fragment:D2,uv_pars_vertex:L2,uv_vertex:I2,worldpos_vertex:U2,background_vert:N2,background_frag:F2,backgroundCube_vert:O2,backgroundCube_frag:k2,cube_vert:B2,cube_frag:z2,depth_vert:V2,depth_frag:H2,distance_vert:G2,distance_frag:W2,equirect_vert:X2,equirect_frag:$2,linedashed_vert:j2,linedashed_frag:Y2,meshbasic_vert:q2,meshbasic_frag:K2,meshlambert_vert:Z2,meshlambert_frag:J2,meshmatcap_vert:Q2,meshmatcap_frag:eA,meshnormal_vert:tA,meshnormal_frag:nA,meshphong_vert:iA,meshphong_frag:rA,meshphysical_vert:sA,meshphysical_frag:oA,meshtoon_vert:aA,meshtoon_frag:lA,points_vert:cA,points_frag:uA,shadow_vert:dA,shadow_frag:fA,sprite_vert:hA,sprite_frag:pA},ze={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},gr={basic:{uniforms:Zn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Zn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Zn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Zn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Zn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new kt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Zn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Zn([ze.points,ze.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Zn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Zn([ze.common,ze.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Zn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Zn([ze.sprite,ze.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Zn([ze.common,ze.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Zn([ze.lights,ze.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};gr.physical={uniforms:Zn([gr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const tu={r:0,b:0,g:0},ro=new fs,mA=new cn;function gA(n,e,t,i,r,s){const o=new kt(0);let a=r===!0?0:1,l,c,u=null,d=0,f=null;function h(x){let S=x.isScene===!0?x.background:null;if(S&&S.isTexture){const v=x.backgroundBlurriness>0;S=e.get(S,v)}return S}function m(x){let S=!1;const v=h(x);v===null?p(o,a):v&&v.isColor&&(p(v,1),S=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(x,S){const v=h(S);v&&(v.isCubeTexture||v.mapping===_d)?(c===void 0&&(c=new Lr(new hc(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:za(gr.backgroundCube.uniforms),vertexShader:gr.backgroundCube.vertexShader,fragmentShader:gr.backgroundCube.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),ro.copy(S.backgroundRotation),ro.x*=-1,ro.y*=-1,ro.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ro.y*=-1,ro.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(mA.makeRotationFromEuler(ro)),c.material.toneMapped=Mt.getTransfer(v.colorSpace)!==Nt,(u!==v||d!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Lr(new pc(2,2),new or({name:"BackgroundMaterial",uniforms:za(gr.background.uniforms),vertexShader:gr.background.vertexShader,fragmentShader:gr.background.fragmentShader,side:Ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Mt.getTransfer(v.colorSpace)!==Nt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,S){x.getRGB(tu,Ov(n)),t.buffers.color.setClear(tu.r,tu.g,tu.b,S,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,S=1){o.set(x),a=S,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,p(o,a)},render:m,addToRenderList:_,dispose:g}}function _A(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(U,L,V,z,G){let X=!1;const k=d(U,z,V,L);s!==k&&(s=k,c(s.object)),X=h(U,z,V,G),X&&m(U,z,V,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(U,L,V,z),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function u(U){return n.deleteVertexArray(U)}function d(U,L,V,z){const G=z.wireframe===!0;let X=i[L.id];X===void 0&&(X={},i[L.id]=X);const k=U.isInstancedMesh===!0?U.id:0;let K=X[k];K===void 0&&(K={},X[k]=K);let j=K[V.id];j===void 0&&(j={},K[V.id]=j);let F=j[G];return F===void 0&&(F=f(l()),j[G]=F),F}function f(U){const L=[],V=[],z=[];for(let G=0;G<t;G++)L[G]=0,V[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:z,object:U,attributes:{},index:null}}function h(U,L,V,z){const G=s.attributes,X=L.attributes;let k=0;const K=V.getAttributes();for(const j in K)if(K[j].location>=0){const ce=G[j];let me=X[j];if(me===void 0&&(j==="instanceMatrix"&&U.instanceMatrix&&(me=U.instanceMatrix),j==="instanceColor"&&U.instanceColor&&(me=U.instanceColor)),ce===void 0||ce.attribute!==me||me&&ce.data!==me.data)return!0;k++}return s.attributesNum!==k||s.index!==z}function m(U,L,V,z){const G={},X=L.attributes;let k=0;const K=V.getAttributes();for(const j in K)if(K[j].location>=0){let ce=X[j];ce===void 0&&(j==="instanceMatrix"&&U.instanceMatrix&&(ce=U.instanceMatrix),j==="instanceColor"&&U.instanceColor&&(ce=U.instanceColor));const me={};me.attribute=ce,ce&&ce.data&&(me.data=ce.data),G[j]=me,k++}s.attributes=G,s.attributesNum=k,s.index=z}function _(){const U=s.newAttributes;for(let L=0,V=U.length;L<V;L++)U[L]=0}function p(U){g(U,0)}function g(U,L){const V=s.newAttributes,z=s.enabledAttributes,G=s.attributeDivisors;V[U]=1,z[U]===0&&(n.enableVertexAttribArray(U),z[U]=1),G[U]!==L&&(n.vertexAttribDivisor(U,L),G[U]=L)}function x(){const U=s.newAttributes,L=s.enabledAttributes;for(let V=0,z=L.length;V<z;V++)L[V]!==U[V]&&(n.disableVertexAttribArray(V),L[V]=0)}function S(U,L,V,z,G,X,k){k===!0?n.vertexAttribIPointer(U,L,V,G,X):n.vertexAttribPointer(U,L,V,z,G,X)}function v(U,L,V,z){_();const G=z.attributes,X=V.getAttributes(),k=L.defaultAttributeValues;for(const K in X){const j=X[K];if(j.location>=0){let F=G[K];if(F===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(F=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(F=U.instanceColor)),F!==void 0){const ce=F.normalized,me=F.itemSize,ge=e.get(F);if(ge===void 0)continue;const ve=ge.buffer,Te=ge.type,J=ge.bytesPerElement,fe=Te===n.INT||Te===n.UNSIGNED_INT||F.gpuType===Yp;if(F.isInterleavedBufferAttribute){const oe=F.data,Re=oe.stride,Ae=F.offset;if(oe.isInstancedInterleavedBuffer){for(let le=0;le<j.locationSize;le++)g(j.location+le,oe.meshPerAttribute);U.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let le=0;le<j.locationSize;le++)p(j.location+le);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let le=0;le<j.locationSize;le++)S(j.location+le,me/j.locationSize,Te,ce,Re*J,(Ae+me/j.locationSize*le)*J,fe)}else{if(F.isInstancedBufferAttribute){for(let oe=0;oe<j.locationSize;oe++)g(j.location+oe,F.meshPerAttribute);U.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let oe=0;oe<j.locationSize;oe++)p(j.location+oe);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let oe=0;oe<j.locationSize;oe++)S(j.location+oe,me/j.locationSize,Te,ce,me*J,me/j.locationSize*oe*J,fe)}}else if(k!==void 0){const ce=k[K];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(j.location,ce);break;case 3:n.vertexAttrib3fv(j.location,ce);break;case 4:n.vertexAttrib4fv(j.location,ce);break;default:n.vertexAttrib1fv(j.location,ce)}}}}x()}function C(){E();for(const U in i){const L=i[U];for(const V in L){const z=L[V];for(const G in z){const X=z[G];for(const k in X)u(X[k].object),delete X[k];delete z[G]}}delete i[U]}}function R(U){if(i[U.id]===void 0)return;const L=i[U.id];for(const V in L){const z=L[V];for(const G in z){const X=z[G];for(const k in X)u(X[k].object),delete X[k];delete z[G]}}delete i[U.id]}function A(U){for(const L in i){const V=i[L];for(const z in V){const G=V[z];if(G[U.id]===void 0)continue;const X=G[U.id];for(const k in X)u(X[k].object),delete X[k];delete G[U.id]}}}function y(U){for(const L in i){const V=i[L],z=U.isInstancedMesh===!0?U.id:0,G=V[z];if(G!==void 0){for(const X in G){const k=G[X];for(const K in k)u(k[K].object),delete k[K];delete G[X]}delete V[z],Object.keys(V).length===0&&delete i[L]}}}function E(){N(),o=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:E,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function xA(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let m=0;m<d;m++)h+=u[m];t.update(h,i,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<c.length;m++)o(c[m],u[m],f[m]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let m=0;for(let _=0;_<d;_++)m+=u[_]*f[_];t.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function vA(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==nr&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const y=A===us&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Hi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==br&&!y)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(at("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:v,maxSamples:C,samples:R}}function yA(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new uo,a=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const m=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,g=n.get(d);if(!r||m===null||m.length===0||s&&!p)s?u(null):c();else{const x=s?0:i,S=x*4;let v=g.clippingState||null;l.value=v,v=u(m,f,S,h);for(let C=0;C!==S;++C)v[C]=t[C];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,m){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,m!==!0||p===null){const g=h+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<g)&&(p=new Float32Array(g));for(let S=0,v=h;S!==_;++S,v+=4)o.copy(d[S]).applyMatrix4(x,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const Us=4,ng=[.125,.215,.35,.446,.526,.582],go=20,bA=256,il=new r0,ig=new kt;let Sf=null,Mf=0,wf=0,Ef=!1;const SA=new se;class rg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=SA}=s;Sf=this._renderer.getRenderTarget(),Mf=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ag(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=og(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sf,Mf,wf),this._renderer.xr.enabled=Ef,e.scissorTest=!1,sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fo||e.mapping===Oa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sf=this._renderer.getRenderTarget(),Mf=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:us,format:nr,colorSpace:Ba,depthBuffer:!1},r=sg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sg(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=MA(s)),this._blurMaterial=EA(s,e,t),this._ggxMaterial=wA(s,e,t)}return r}_compileMaterial(e){const t=new Lr(new ps,e);this._renderer.compile(t,il)}_sceneToCubeUV(e,t,i,r,s){const l=new er(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(ig),d.toneMapping=Tr,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Lr(new hc,new Iv({name:"PMREM.Background",side:pi,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let g=!1;const x=e.background;x?x.isColor&&(p.color.copy(x),e.background=null,g=!0):(p.color.copy(ig),g=!0);for(let S=0;S<6;S++){const v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const C=this._cubeSize;sa(r,v*C,S>2?C:0,C,C),d.setRenderTarget(r),g&&d.render(_,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Fo||e.mapping===Oa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ag()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=og());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;sa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,il)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,h=d*f,{_lodMax:m}=this,_=this._sizeLods[i],p=3*_*(i>m-Us?i-m+Us:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=m-t,sa(s,p,g,3*_,2*_),r.setRenderTarget(s),r.render(a,il),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,sa(e,p,g,3*_,2*_),r.setRenderTarget(e),r.render(a,il)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Tt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,h=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*go-1),_=s/m,p=isFinite(s)?1+Math.floor(u*_):go;p>go&&at(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${go}`);const g=[];let x=0;for(let A=0;A<go;++A){const y=A/_,E=Math.exp(-y*y/2);g.push(E),A===0?x+=E:A<p&&(x+=2*E)}for(let A=0;A<g.length;A++)g[A]=g[A]/x;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=m,f.mipInt.value=S-i;const v=this._sizeLods[r],C=3*v*(r>S-Us?r-S+Us:0),R=4*(this._cubeSize-v);sa(t,C,R,3*v,2*v),l.setRenderTarget(t),l.render(d,il)}}function MA(n){const e=[],t=[],i=[];let r=n;const s=n-Us+1+ng.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Us?l=ng[o-n+Us-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,m=6,_=3,p=2,g=1,x=new Float32Array(_*m*h),S=new Float32Array(p*m*h),v=new Float32Array(g*m*h);for(let R=0;R<h;R++){const A=R%3*2/3-1,y=R>2?0:-1,E=[A,y,0,A+2/3,y,0,A+2/3,y+1,0,A,y,0,A+2/3,y+1,0,A,y+1,0];x.set(E,_*m*R),S.set(f,p*m*R);const N=[R,R,R,R,R,R];v.set(N,g*m*R)}const C=new ps;C.setAttribute("position",new Cr(x,_)),C.setAttribute("uv",new Cr(S,p)),C.setAttribute("faceIndex",new Cr(v,g)),i.push(new Lr(C,null)),r>Us&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function sg(n,e,t){const i=new Ar(n,e,t);return i.texture.mapping=_d,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function wA(n,e,t){return new or({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vd(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function EA(n,e,t){const i=new Float32Array(go),r=new se(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:go,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vd(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function og(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vd(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function ag(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function vd(){return`

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
	`}class zv extends Ar{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Nv(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hc(5,5,5),s=new or({name:"CubemapFromEquirect",uniforms:za(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pi,blending:es});s.uniforms.tEquirect.value=t;const o=new Lr(r,s),a=t.minFilter;return t.minFilter===yo&&(t.minFilter=Xn),new LE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function TA(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?o(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Yd||h===qd)if(e.has(f)){const m=e.get(f).texture;return a(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const _=new zv(m.height);return _.fromEquirectangularTexture(n,f),e.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const h=f.mapping,m=h===Yd||h===qd,_=h===Fo||h===Oa;if(m||_){let p=t.get(f);const g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new rg(n)),p=m?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const x=f.image;return m&&x&&x.height>0||_&&x&&l(x)?(i===null&&(i=new rg(n)),p=m?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,h){return h===Yd?f.mapping=Fo:h===qd&&(f.mapping=Oa),f}function l(f){let h=0;const m=6;for(let _=0;_<m;_++)f[_]!==void 0&&h++;return h===m}function c(f){const h=f.target;h.removeEventListener("dispose",c);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function AA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Zu("WebGLRenderer: "+i+" extension not supported."),r}}}function CA(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,m=d.attributes.position;let _=0;if(m===void 0)return;if(h!==null){const x=h.array;_=h.version;for(let S=0,v=x.length;S<v;S+=3){const C=x[S+0],R=x[S+1],A=x[S+2];f.push(C,R,R,A,A,C)}}else{const x=m.array;_=m.version;for(let S=0,v=x.length/3-1;S<v;S+=3){const C=S+0,R=S+1,A=S+2;f.push(C,R,R,A,A,C)}}const p=new(m.count>=65535?Lv:Dv)(f,1);p.version=_;const g=s.get(d);g&&e.remove(g),s.set(d,p)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function RA(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function c(f,h,m){m!==0&&(n.drawElementsInstanced(i,h,s,f*o,m),t.update(h,i,m))}function u(f,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,m);let p=0;for(let g=0;g<m;g++)p+=h[g];t.update(p,i,1)}function d(f,h,m,_){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f.length;g++)c(f[g]/o,h[g],_[g]);else{p.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,_,0,m);let g=0;for(let x=0;x<m;x++)g+=h[x]*_[x];t.update(g,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function PA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Tt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function DA(n,e,t){const i=new WeakMap,r=new rn;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let N=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",N)};var h=N;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),_===!0&&(v=2),p===!0&&(v=3);let C=a.attributes.position.count*v,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*R*4*d),y=new Cv(A,C,R,d);y.type=br,y.needsUpdate=!0;const E=v*4;for(let U=0;U<d;U++){const L=g[U],V=x[U],z=S[U],G=C*R*4*U;for(let X=0;X<L.count;X++){const k=X*E;m===!0&&(r.fromBufferAttribute(L,X),A[G+k+0]=r.x,A[G+k+1]=r.y,A[G+k+2]=r.z,A[G+k+3]=0),_===!0&&(r.fromBufferAttribute(V,X),A[G+k+4]=r.x,A[G+k+5]=r.y,A[G+k+6]=r.z,A[G+k+7]=0),p===!0&&(r.fromBufferAttribute(z,X),A[G+k+8]=r.x,A[G+k+9]=r.y,A[G+k+10]=r.z,A[G+k+11]=z.itemSize===4?r.w:1)}}f={count:d,texture:y,size:new St(C,R)},i.set(a,f),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function LA(n,e,t,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const IA={[fv]:"LINEAR_TONE_MAPPING",[hv]:"REINHARD_TONE_MAPPING",[pv]:"CINEON_TONE_MAPPING",[mv]:"ACES_FILMIC_TONE_MAPPING",[_v]:"AGX_TONE_MAPPING",[xv]:"NEUTRAL_TONE_MAPPING",[gv]:"CUSTOM_TONE_MAPPING"};function UA(n,e,t,i,r){const s=new Ar(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),o=new Ar(e,t,{type:us,depthBuffer:!1,stencilBuffer:!1}),a=new ps;a.setAttribute("position",new ns([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ns([0,2,0,0,2,0],2));const l=new RE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Lr(a,l),u=new r0(-1,1,1,-1,0,1);let d=null,f=null,h=!1,m,_=null,p=[],g=!1;this.setSize=function(x,S){s.setSize(x,S),o.setSize(x,S);for(let v=0;v<p.length;v++){const C=p[v];C.setSize&&C.setSize(x,S)}},this.setEffects=function(x){p=x,g=p.length>0&&p[0].isRenderPass===!0;const S=s.width,v=s.height;for(let C=0;C<p.length;C++){const R=p[C];R.setSize&&R.setSize(S,v)}},this.begin=function(x,S){if(h||x.toneMapping===Tr&&p.length===0)return!1;if(_=S,S!==null){const v=S.width,C=S.height;(s.width!==v||s.height!==C)&&this.setSize(v,C)}return g===!1&&x.setRenderTarget(s),m=x.toneMapping,x.toneMapping=Tr,!0},this.hasRenderPass=function(){return g},this.end=function(x,S){x.toneMapping=m,h=!0;let v=s,C=o;for(let R=0;R<p.length;R++){const A=p[R];if(A.enabled!==!1&&(A.render(x,C,v,S),A.needsSwap!==!1)){const y=v;v=C,C=y}}if(d!==x.outputColorSpace||f!==x.toneMapping){d=x.outputColorSpace,f=x.toneMapping,l.defines={},Mt.getTransfer(d)===Nt&&(l.defines.SRGB_TRANSFER="");const R=IA[f];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,x.setRenderTarget(_),x.render(c,u),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Vv=new si,rp=new ic(1,1),Hv=new Cv,Gv=new sE,Wv=new Nv,lg=[],cg=[],ug=new Float32Array(16),dg=new Float32Array(9),fg=new Float32Array(4);function Ga(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=lg[r];if(s===void 0&&(s=new Float32Array(r),lg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function mn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function yd(n,e){let t=cg[e];t===void 0&&(t=new Int32Array(e),cg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function NA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function FA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2fv(this.addr,e),gn(t,e)}}function OA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;n.uniform3fv(this.addr,e),gn(t,e)}}function kA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4fv(this.addr,e),gn(t,e)}}function BA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;fg.set(i),n.uniformMatrix2fv(this.addr,!1,fg),gn(t,i)}}function zA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;dg.set(i),n.uniformMatrix3fv(this.addr,!1,dg),gn(t,i)}}function VA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;ug.set(i),n.uniformMatrix4fv(this.addr,!1,ug),gn(t,i)}}function HA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function GA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2iv(this.addr,e),gn(t,e)}}function WA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;n.uniform3iv(this.addr,e),gn(t,e)}}function XA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4iv(this.addr,e),gn(t,e)}}function $A(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function jA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2uiv(this.addr,e),gn(t,e)}}function YA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;n.uniform3uiv(this.addr,e),gn(t,e)}}function qA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4uiv(this.addr,e),gn(t,e)}}function KA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(rp.compareFunction=t.isReversedDepthBuffer()?t0:e0,s=rp):s=Vv,t.setTexture2D(e||s,r)}function ZA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Gv,r)}function JA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Wv,r)}function QA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Hv,r)}function eC(n){switch(n){case 5126:return NA;case 35664:return FA;case 35665:return OA;case 35666:return kA;case 35674:return BA;case 35675:return zA;case 35676:return VA;case 5124:case 35670:return HA;case 35667:case 35671:return GA;case 35668:case 35672:return WA;case 35669:case 35673:return XA;case 5125:return $A;case 36294:return jA;case 36295:return YA;case 36296:return qA;case 35678:case 36198:case 36298:case 36306:case 35682:return KA;case 35679:case 36299:case 36307:return ZA;case 35680:case 36300:case 36308:case 36293:return JA;case 36289:case 36303:case 36311:case 36292:return QA}}function tC(n,e){n.uniform1fv(this.addr,e)}function nC(n,e){const t=Ga(e,this.size,2);n.uniform2fv(this.addr,t)}function iC(n,e){const t=Ga(e,this.size,3);n.uniform3fv(this.addr,t)}function rC(n,e){const t=Ga(e,this.size,4);n.uniform4fv(this.addr,t)}function sC(n,e){const t=Ga(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function oC(n,e){const t=Ga(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function aC(n,e){const t=Ga(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function lC(n,e){n.uniform1iv(this.addr,e)}function cC(n,e){n.uniform2iv(this.addr,e)}function uC(n,e){n.uniform3iv(this.addr,e)}function dC(n,e){n.uniform4iv(this.addr,e)}function fC(n,e){n.uniform1uiv(this.addr,e)}function hC(n,e){n.uniform2uiv(this.addr,e)}function pC(n,e){n.uniform3uiv(this.addr,e)}function mC(n,e){n.uniform4uiv(this.addr,e)}function gC(n,e,t){const i=this.cache,r=e.length,s=yd(t,r);mn(i,s)||(n.uniform1iv(this.addr,s),gn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=rp:o=Vv;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function _C(n,e,t){const i=this.cache,r=e.length,s=yd(t,r);mn(i,s)||(n.uniform1iv(this.addr,s),gn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Gv,s[o])}function xC(n,e,t){const i=this.cache,r=e.length,s=yd(t,r);mn(i,s)||(n.uniform1iv(this.addr,s),gn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Wv,s[o])}function vC(n,e,t){const i=this.cache,r=e.length,s=yd(t,r);mn(i,s)||(n.uniform1iv(this.addr,s),gn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Hv,s[o])}function yC(n){switch(n){case 5126:return tC;case 35664:return nC;case 35665:return iC;case 35666:return rC;case 35674:return sC;case 35675:return oC;case 35676:return aC;case 5124:case 35670:return lC;case 35667:case 35671:return cC;case 35668:case 35672:return uC;case 35669:case 35673:return dC;case 5125:return fC;case 36294:return hC;case 36295:return pC;case 36296:return mC;case 35678:case 36198:case 36298:case 36306:case 35682:return gC;case 35679:case 36299:case 36307:return _C;case 35680:case 36300:case 36308:case 36293:return xC;case 36289:case 36303:case 36311:case 36292:return vC}}class bC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=eC(t.type)}}class SC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yC(t.type)}}class MC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Tf=/(\w+)(\])?(\[|\.)?/g;function hg(n,e){n.seq.push(e),n.map[e.id]=e}function wC(n,e,t){const i=n.name,r=i.length;for(Tf.lastIndex=0;;){const s=Tf.exec(i),o=Tf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){hg(t,c===void 0?new bC(a,n,e):new SC(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new MC(a),hg(t,d)),t=d}}}class Mu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);wC(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function pg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const EC=37297;let TC=0;function AC(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const mg=new ht;function CC(n){Mt._getMatrix(mg,Mt.workingColorSpace,n);const e=`mat3( ${mg.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(n)){case Yu:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function gg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+AC(n.getShaderSource(e),a)}else return s}function RC(n,e){const t=CC(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const PC={[fv]:"Linear",[hv]:"Reinhard",[pv]:"Cineon",[mv]:"ACESFilmic",[_v]:"AgX",[xv]:"Neutral",[gv]:"Custom"};function DC(n,e){const t=PC[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nu=new se;function LC(){Mt.getLuminanceCoefficients(nu);const n=nu.x.toFixed(4),e=nu.y.toFixed(4),t=nu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_l).join(`
`)}function UC(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function NC(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function _l(n){return n!==""}function _g(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const FC=/^[ \t]*#include +<([\w\d./]+)>/gm;function sp(n){return n.replace(FC,kC)}const OC=new Map;function kC(n,e){let t=pt[e];if(t===void 0){const i=OC.get(e);if(i!==void 0)t=pt[i],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return sp(t)}const BC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vg(n){return n.replace(BC,zC)}function zC(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yg(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const VC={[xu]:"SHADOWMAP_TYPE_PCF",[gl]:"SHADOWMAP_TYPE_VSM"};function HC(n){return VC[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const GC={[Fo]:"ENVMAP_TYPE_CUBE",[Oa]:"ENVMAP_TYPE_CUBE",[_d]:"ENVMAP_TYPE_CUBE_UV"};function WC(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":GC[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const XC={[Oa]:"ENVMAP_MODE_REFRACTION"};function $C(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":XC[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const jC={[dv]:"ENVMAP_BLENDING_MULTIPLY",[Ow]:"ENVMAP_BLENDING_MIX",[kw]:"ENVMAP_BLENDING_ADD"};function YC(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":jC[n.combine]||"ENVMAP_BLENDING_NONE"}function qC(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function KC(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=HC(t),c=WC(t),u=$C(t),d=YC(t),f=qC(t),h=IC(t),m=UC(s),_=r.createProgram();let p,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(_l).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(_l).join(`
`),g.length>0&&(g+=`
`)):(p=[yg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_l).join(`
`),g=[yg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tr?"#define TONE_MAPPING":"",t.toneMapping!==Tr?pt.tonemapping_pars_fragment:"",t.toneMapping!==Tr?DC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,RC("linearToOutputTexel",t.outputColorSpace),LC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_l).join(`
`)),o=sp(o),o=_g(o,t),o=xg(o,t),a=sp(a),a=_g(a,t),a=xg(a,t),o=vg(o),a=vg(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=x+p+o,v=x+g+a,C=pg(r,r.VERTEX_SHADER,S),R=pg(r,r.FRAGMENT_SHADER,v);r.attachShader(_,C),r.attachShader(_,R),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(U){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(_)||"",V=r.getShaderInfoLog(C)||"",z=r.getShaderInfoLog(R)||"",G=L.trim(),X=V.trim(),k=z.trim();let K=!0,j=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,R);else{const F=gg(r,C,"vertex"),ce=gg(r,R,"fragment");Tt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+G+`
`+F+`
`+ce)}else G!==""?at("WebGLProgram: Program Info Log:",G):(X===""||k==="")&&(j=!1);j&&(U.diagnostics={runnable:K,programLog:G,vertexShader:{log:X,prefix:p},fragmentShader:{log:k,prefix:g}})}r.deleteShader(C),r.deleteShader(R),y=new Mu(r,_),E=NC(r,_)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(_,EC)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=TC++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=R,this}let ZC=0;class JC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new QC(e),t.set(e,i)),i}}class QC{constructor(e){this.id=ZC++,this.code=e,this.usedTimes=0}}function e3(n,e,t,i,r,s){const o=new Rv,a=new JC,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,E,N,U,L){const V=U.fog,z=L.geometry,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,k=e.get(y.envMap||G,X),K=k&&k.mapping===_d?k.image.height:null,j=h[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&at("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const F=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ce=F!==void 0?F.length:0;let me=0;z.morphAttributes.position!==void 0&&(me=1),z.morphAttributes.normal!==void 0&&(me=2),z.morphAttributes.color!==void 0&&(me=3);let ge,ve,Te,J;if(j){const Ve=gr[j];ge=Ve.vertexShader,ve=Ve.fragmentShader}else ge=y.vertexShader,ve=y.fragmentShader,a.update(y),Te=a.getVertexShaderID(y),J=a.getFragmentShaderID(y);const fe=n.getRenderTarget(),oe=n.state.buffers.depth.getReversed(),Re=L.isInstancedMesh===!0,Ae=L.isBatchedMesh===!0,le=!!y.map,w=!!y.matcap,T=!!k,H=!!y.aoMap,ee=!!y.lightMap,Y=!!y.bumpMap,O=!!y.normalMap,I=!!y.displacementMap,_e=!!y.emissiveMap,he=!!y.metalnessMap,ne=!!y.roughnessMap,pe=y.anisotropy>0,P=y.clearcoat>0,M=y.dispersion>0,B=y.iridescence>0,Z=y.sheen>0,Q=y.transmission>0,q=pe&&!!y.anisotropyMap,Me=P&&!!y.clearcoatMap,xe=P&&!!y.clearcoatNormalMap,He=P&&!!y.clearcoatRoughnessMap,De=B&&!!y.iridescenceMap,be=B&&!!y.iridescenceThicknessMap,we=Z&&!!y.sheenColorMap,Pe=Z&&!!y.sheenRoughnessMap,Ne=!!y.specularMap,Le=!!y.specularColorMap,nt=!!y.specularIntensityMap,W=Q&&!!y.transmissionMap,Ce=Q&&!!y.thicknessMap,Ee=!!y.gradientMap,Oe=!!y.alphaMap,Se=y.alphaTest>0,de=!!y.alphaHash,Ge=!!y.extensions;let Qe=Tr;y.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Qe=n.toneMapping);const wt={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:ge,fragmentShader:ve,defines:y.defines,customVertexShaderID:Te,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ae,batchingColor:Ae&&L._colorsTexture!==null,instancing:Re,instancingColor:Re&&L.instanceColor!==null,instancingMorph:Re&&L.morphTexture!==null,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ba,alphaToCoverage:!!y.alphaToCoverage,map:le,matcap:w,envMap:T,envMapMode:T&&k.mapping,envMapCubeUVHeight:K,aoMap:H,lightMap:ee,bumpMap:Y,normalMap:O,displacementMap:I,emissiveMap:_e,normalMapObjectSpace:O&&y.normalMapType===Hw,normalMapTangentSpace:O&&y.normalMapType===Vw,metalnessMap:he,roughnessMap:ne,anisotropy:pe,anisotropyMap:q,clearcoat:P,clearcoatMap:Me,clearcoatNormalMap:xe,clearcoatRoughnessMap:He,dispersion:M,iridescence:B,iridescenceMap:De,iridescenceThicknessMap:be,sheen:Z,sheenColorMap:we,sheenRoughnessMap:Pe,specularMap:Ne,specularColorMap:Le,specularIntensityMap:nt,transmission:Q,transmissionMap:W,thicknessMap:Ce,gradientMap:Ee,opaque:y.transparent===!1&&y.blending===Ta&&y.alphaToCoverage===!1,alphaMap:Oe,alphaTest:Se,alphaHash:de,combine:y.combine,mapUv:le&&m(y.map.channel),aoMapUv:H&&m(y.aoMap.channel),lightMapUv:ee&&m(y.lightMap.channel),bumpMapUv:Y&&m(y.bumpMap.channel),normalMapUv:O&&m(y.normalMap.channel),displacementMapUv:I&&m(y.displacementMap.channel),emissiveMapUv:_e&&m(y.emissiveMap.channel),metalnessMapUv:he&&m(y.metalnessMap.channel),roughnessMapUv:ne&&m(y.roughnessMap.channel),anisotropyMapUv:q&&m(y.anisotropyMap.channel),clearcoatMapUv:Me&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:xe&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:be&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:we&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&m(y.sheenRoughnessMap.channel),specularMapUv:Ne&&m(y.specularMap.channel),specularColorMapUv:Le&&m(y.specularColorMap.channel),specularIntensityMapUv:nt&&m(y.specularIntensityMap.channel),transmissionMapUv:W&&m(y.transmissionMap.channel),thicknessMapUv:Ce&&m(y.thicknessMap.channel),alphaMapUv:Oe&&m(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(O||pe),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(le||Oe),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||z.attributes.normal===void 0&&O===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:oe,skinning:L.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:me,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Qe,decodeVideoTexture:le&&y.map.isVideoTexture===!0&&Mt.getTransfer(y.map.colorSpace)===Nt,decodeVideoTextureEmissive:_e&&y.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(y.emissiveMap.colorSpace)===Nt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===qr,flipSided:y.side===pi,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ge&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&y.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return wt.vertexUv1s=l.has(1),wt.vertexUv2s=l.has(2),wt.vertexUv3s=l.has(3),l.clear(),wt}function p(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)E.push(N),E.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(g(E,y),x(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function g(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function x(y,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),y.push(o.mask)}function S(y){const E=h[y.type];let N;if(E){const U=gr[E];N=TE.clone(U.uniforms)}else N=y.uniforms;return N}function v(y,E){let N=u.get(E);return N!==void 0?++N.usedTimes:(N=new KC(n,E,y,r),c.push(N),u.set(E,N)),N}function C(y){if(--y.usedTimes===0){const E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function R(y){a.remove(y)}function A(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:S,acquireProgram:v,releaseProgram:C,releaseShaderCache:R,programs:c,dispose:A}}function t3(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function n3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function bg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Sg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,m,_,p,g){let x=n[e];return x===void 0?(x={id:f.id,object:f,geometry:h,material:m,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:g},n[e]=x):(x.id=f.id,x.object=f,x.geometry=h,x.material=m,x.materialVariant=o(f),x.groupOrder=_,x.renderOrder=f.renderOrder,x.z=p,x.group=g),e++,x}function l(f,h,m,_,p,g){const x=a(f,h,m,_,p,g);m.transmission>0?i.push(x):m.transparent===!0?r.push(x):t.push(x)}function c(f,h,m,_,p,g){const x=a(f,h,m,_,p,g);m.transmission>0?i.unshift(x):m.transparent===!0?r.unshift(x):t.unshift(x)}function u(f,h){t.length>1&&t.sort(f||n3),i.length>1&&i.sort(h||bg),r.length>1&&r.sort(h||bg)}function d(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function i3(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Sg,n.set(i,[o])):r>=s.length?(o=new Sg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function r3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new se,color:new kt};break;case"SpotLight":t={position:new se,direction:new se,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new se,color:new kt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new se,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":t={color:new kt,position:new se,halfWidth:new se,halfHeight:new se};break}return n[e.id]=t,t}}}function s3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let o3=0;function a3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function l3(n){const e=new r3,t=s3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new se);const r=new se,s=new cn,o=new cn;function a(c){let u=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let h=0,m=0,_=0,p=0,g=0,x=0,S=0,v=0,C=0,R=0,A=0;c.sort(a3);for(let E=0,N=c.length;E<N;E++){const U=c[E],L=U.color,V=U.intensity,z=U.distance;let G=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===ka?G=U.shadow.map.texture:G=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=L.r*V,d+=L.g*V,f+=L.b*V;else if(U.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(U.sh.coefficients[X],V);A++}else if(U.isDirectionalLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const k=U.shadow,K=t.get(U);K.shadowIntensity=k.intensity,K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,i.directionalShadow[h]=K,i.directionalShadowMap[h]=G,i.directionalShadowMatrix[h]=U.shadow.matrix,x++}i.directional[h]=X,h++}else if(U.isSpotLight){const X=e.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(L).multiplyScalar(V),X.distance=z,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,i.spot[_]=X;const k=U.shadow;if(U.map&&(i.spotLightMap[C]=U.map,C++,k.updateMatrices(U),U.castShadow&&R++),i.spotLightMatrix[_]=k.matrix,U.castShadow){const K=t.get(U);K.shadowIntensity=k.intensity,K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,i.spotShadow[_]=K,i.spotShadowMap[_]=G,v++}_++}else if(U.isRectAreaLight){const X=e.get(U);X.color.copy(L).multiplyScalar(V),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),i.rectArea[p]=X,p++}else if(U.isPointLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),X.distance=U.distance,X.decay=U.decay,U.castShadow){const k=U.shadow,K=t.get(U);K.shadowIntensity=k.intensity,K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,K.shadowCameraNear=k.camera.near,K.shadowCameraFar=k.camera.far,i.pointShadow[m]=K,i.pointShadowMap[m]=G,i.pointShadowMatrix[m]=U.shadow.matrix,S++}i.point[m]=X,m++}else if(U.isHemisphereLight){const X=e.get(U);X.skyColor.copy(U.color).multiplyScalar(V),X.groundColor.copy(U.groundColor).multiplyScalar(V),i.hemi[g]=X,g++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ze.LTC_FLOAT_1,i.rectAreaLTC2=ze.LTC_FLOAT_2):(i.rectAreaLTC1=ze.LTC_HALF_1,i.rectAreaLTC2=ze.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const y=i.hash;(y.directionalLength!==h||y.pointLength!==m||y.spotLength!==_||y.rectAreaLength!==p||y.hemiLength!==g||y.numDirectionalShadows!==x||y.numPointShadows!==S||y.numSpotShadows!==v||y.numSpotMaps!==C||y.numLightProbes!==A)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=p,i.point.length=m,i.hemi.length=g,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=v+C-R,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,y.directionalLength=h,y.pointLength=m,y.spotLength=_,y.rectAreaLength=p,y.hemiLength=g,y.numDirectionalShadows=x,y.numPointShadows=S,y.numSpotShadows=v,y.numSpotMaps=C,y.numLightProbes=A,i.version=o3++)}function l(c,u){let d=0,f=0,h=0,m=0,_=0;const p=u.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){const S=c[g];if(S.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),d++}else if(S.isSpotLight){const v=i.spot[h];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),h++}else if(S.isRectAreaLight){const v=i.rectArea[m];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),o.identity(),s.copy(S.matrixWorld),s.premultiply(p),o.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function Mg(n){const e=new l3(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function c3(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Mg(n),e.set(r,[a])):s>=o.length?(a=new Mg(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const u3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d3=`uniform sampler2D shadow_pass;
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
}`,f3=[new se(1,0,0),new se(-1,0,0),new se(0,1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1)],h3=[new se(0,-1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1),new se(0,-1,0),new se(0,-1,0)],wg=new cn,rl=new se,Af=new se;function p3(n,e,t){let i=new Uv;const r=new St,s=new St,o=new rn,a=new PE,l=new DE,c={},u=t.maxTextureSize,d={[Ws]:pi,[pi]:Ws,[qr]:qr},f=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:u3,fragmentShader:d3}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const m=new ps;m.setAttribute("position",new Cr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Lr(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xu;let g=this.type;this.render=function(R,A,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;this.type===xw&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=xu);const E=n.getRenderTarget(),N=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),L=n.state;L.setBlending(es),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const V=g!==this.type;V&&A.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(G=>G.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,G=R.length;z<G;z++){const X=R[z],k=X.shadow;if(k===void 0){at("WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const K=k.getFrameExtents();r.multiply(K),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,k.mapSize.y=s.y));const j=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=j,k.map===null||V===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===gl){if(X.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Ar(r.x,r.y,{format:ka,type:us,minFilter:Xn,magFilter:Xn,generateMipmaps:!1}),k.map.texture.name=X.name+".shadowMap",k.map.depthTexture=new ic(r.x,r.y,br),k.map.depthTexture.name=X.name+".shadowMapDepth",k.map.depthTexture.format=ds,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Dn,k.map.depthTexture.magFilter=Dn}else X.isPointLight?(k.map=new zv(r.x),k.map.depthTexture=new wE(r.x,Dr)):(k.map=new Ar(r.x,r.y),k.map.depthTexture=new ic(r.x,r.y,Dr)),k.map.depthTexture.name=X.name+".shadowMap",k.map.depthTexture.format=ds,this.type===xu?(k.map.depthTexture.compareFunction=j?t0:e0,k.map.depthTexture.minFilter=Xn,k.map.depthTexture.magFilter=Xn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Dn,k.map.depthTexture.magFilter=Dn);k.camera.updateProjectionMatrix()}const F=k.map.isWebGLCubeRenderTarget?6:1;for(let ce=0;ce<F;ce++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,ce),n.clear();else{ce===0&&(n.setRenderTarget(k.map),n.clear());const me=k.getViewport(ce);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),L.viewport(o)}if(X.isPointLight){const me=k.camera,ge=k.matrix,ve=X.distance||me.far;ve!==me.far&&(me.far=ve,me.updateProjectionMatrix()),rl.setFromMatrixPosition(X.matrixWorld),me.position.copy(rl),Af.copy(me.position),Af.add(f3[ce]),me.up.copy(h3[ce]),me.lookAt(Af),me.updateMatrixWorld(),ge.makeTranslation(-rl.x,-rl.y,-rl.z),wg.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),k._frustum.setFromProjectionMatrix(wg,me.coordinateSystem,me.reversedDepth)}else k.updateMatrices(X);i=k.getFrustum(),v(A,y,k.camera,X,this.type)}k.isPointLightShadow!==!0&&this.type===gl&&x(k,y),k.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(E,N,U)};function x(R,A){const y=e.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ar(r.x,r.y,{format:ka,type:us})),f.uniforms.shadow_pass.value=R.map.depthTexture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,y,f,_,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,y,h,_,null)}function S(R,A,y,E){let N=null;const U=y.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)N=U;else if(N=y.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const L=N.uuid,V=A.uuid;let z=c[L];z===void 0&&(z={},c[L]=z);let G=z[V];G===void 0&&(G=N.clone(),z[V]=G,A.addEventListener("dispose",C)),N=G}if(N.visible=A.visible,N.wireframe=A.wireframe,E===gl?N.side=A.shadowSide!==null?A.shadowSide:A.side:N.side=A.shadowSide!==null?A.shadowSide:d[A.side],N.alphaMap=A.alphaMap,N.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,N.map=A.map,N.clipShadows=A.clipShadows,N.clippingPlanes=A.clippingPlanes,N.clipIntersection=A.clipIntersection,N.displacementMap=A.displacementMap,N.displacementScale=A.displacementScale,N.displacementBias=A.displacementBias,N.wireframeLinewidth=A.wireframeLinewidth,N.linewidth=A.linewidth,y.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const L=n.properties.get(N);L.light=y}return N}function v(R,A,y,E,N){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&N===gl)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,R.matrixWorld);const V=e.update(R),z=R.material;if(Array.isArray(z)){const G=V.groups;for(let X=0,k=G.length;X<k;X++){const K=G[X],j=z[K.materialIndex];if(j&&j.visible){const F=S(R,j,E,N);R.onBeforeShadow(n,R,A,y,V,F,K),n.renderBufferDirect(y,null,V,F,R,K),R.onAfterShadow(n,R,A,y,V,F,K)}}}else if(z.visible){const G=S(R,z,E,N);R.onBeforeShadow(n,R,A,y,V,G,null),n.renderBufferDirect(y,null,V,G,R,null),R.onAfterShadow(n,R,A,y,V,G,null)}}const L=R.children;for(let V=0,z=L.length;V<z;V++)v(L[V],A,y,E,N)}function C(R){R.target.removeEventListener("dispose",C);for(const y in c){const E=c[y],N=R.target.uuid;N in E&&(E[N].dispose(),delete E[N])}}}function m3(n,e){function t(){let W=!1;const Ce=new rn;let Ee=null;const Oe=new rn(0,0,0,0);return{setMask:function(Se){Ee!==Se&&!W&&(n.colorMask(Se,Se,Se,Se),Ee=Se)},setLocked:function(Se){W=Se},setClear:function(Se,de,Ge,Qe,wt){wt===!0&&(Se*=Qe,de*=Qe,Ge*=Qe),Ce.set(Se,de,Ge,Qe),Oe.equals(Ce)===!1&&(n.clearColor(Se,de,Ge,Qe),Oe.copy(Ce))},reset:function(){W=!1,Ee=null,Oe.set(-1,0,0,0)}}}function i(){let W=!1,Ce=!1,Ee=null,Oe=null,Se=null;return{setReversed:function(de){if(Ce!==de){const Ge=e.get("EXT_clip_control");de?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Ce=de;const Qe=Se;Se=null,this.setClear(Qe)}},getReversed:function(){return Ce},setTest:function(de){de?fe(n.DEPTH_TEST):oe(n.DEPTH_TEST)},setMask:function(de){Ee!==de&&!W&&(n.depthMask(de),Ee=de)},setFunc:function(de){if(Ce&&(de=Jw[de]),Oe!==de){switch(de){case gh:n.depthFunc(n.NEVER);break;case _h:n.depthFunc(n.ALWAYS);break;case xh:n.depthFunc(n.LESS);break;case Fa:n.depthFunc(n.LEQUAL);break;case vh:n.depthFunc(n.EQUAL);break;case yh:n.depthFunc(n.GEQUAL);break;case bh:n.depthFunc(n.GREATER);break;case Sh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Oe=de}},setLocked:function(de){W=de},setClear:function(de){Se!==de&&(Se=de,Ce&&(de=1-de),n.clearDepth(de))},reset:function(){W=!1,Ee=null,Oe=null,Se=null,Ce=!1}}}function r(){let W=!1,Ce=null,Ee=null,Oe=null,Se=null,de=null,Ge=null,Qe=null,wt=null;return{setTest:function(Ve){W||(Ve?fe(n.STENCIL_TEST):oe(n.STENCIL_TEST))},setMask:function(Ve){Ce!==Ve&&!W&&(n.stencilMask(Ve),Ce=Ve)},setFunc:function(Ve,Ke,ft){(Ee!==Ve||Oe!==Ke||Se!==ft)&&(n.stencilFunc(Ve,Ke,ft),Ee=Ve,Oe=Ke,Se=ft)},setOp:function(Ve,Ke,ft){(de!==Ve||Ge!==Ke||Qe!==ft)&&(n.stencilOp(Ve,Ke,ft),de=Ve,Ge=Ke,Qe=ft)},setLocked:function(Ve){W=Ve},setClear:function(Ve){wt!==Ve&&(n.clearStencil(Ve),wt=Ve)},reset:function(){W=!1,Ce=null,Ee=null,Oe=null,Se=null,de=null,Ge=null,Qe=null,wt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],m=null,_=!1,p=null,g=null,x=null,S=null,v=null,C=null,R=null,A=new kt(0,0,0),y=0,E=!1,N=null,U=null,L=null,V=null,z=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,k=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=k>=1):K.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=k>=2);let j=null,F={};const ce=n.getParameter(n.SCISSOR_BOX),me=n.getParameter(n.VIEWPORT),ge=new rn().fromArray(ce),ve=new rn().fromArray(me);function Te(W,Ce,Ee,Oe){const Se=new Uint8Array(4),de=n.createTexture();n.bindTexture(W,de),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<Ee;Ge++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,Oe,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(Ce+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return de}const J={};J[n.TEXTURE_2D]=Te(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=Te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=Te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=Te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(n.DEPTH_TEST),o.setFunc(Fa),Y(!1),O(Pm),fe(n.CULL_FACE),H(es);function fe(W){u[W]!==!0&&(n.enable(W),u[W]=!0)}function oe(W){u[W]!==!1&&(n.disable(W),u[W]=!1)}function Re(W,Ce){return d[W]!==Ce?(n.bindFramebuffer(W,Ce),d[W]=Ce,W===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ce),W===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ae(W,Ce){let Ee=h,Oe=!1;if(W){Ee=f.get(Ce),Ee===void 0&&(Ee=[],f.set(Ce,Ee));const Se=W.textures;if(Ee.length!==Se.length||Ee[0]!==n.COLOR_ATTACHMENT0){for(let de=0,Ge=Se.length;de<Ge;de++)Ee[de]=n.COLOR_ATTACHMENT0+de;Ee.length=Se.length,Oe=!0}}else Ee[0]!==n.BACK&&(Ee[0]=n.BACK,Oe=!0);Oe&&n.drawBuffers(Ee)}function le(W){return m!==W?(n.useProgram(W),m=W,!0):!1}const w={[mo]:n.FUNC_ADD,[yw]:n.FUNC_SUBTRACT,[bw]:n.FUNC_REVERSE_SUBTRACT};w[Sw]=n.MIN,w[Mw]=n.MAX;const T={[ww]:n.ZERO,[Ew]:n.ONE,[Tw]:n.SRC_COLOR,[ph]:n.SRC_ALPHA,[Lw]:n.SRC_ALPHA_SATURATE,[Pw]:n.DST_COLOR,[Cw]:n.DST_ALPHA,[Aw]:n.ONE_MINUS_SRC_COLOR,[mh]:n.ONE_MINUS_SRC_ALPHA,[Dw]:n.ONE_MINUS_DST_COLOR,[Rw]:n.ONE_MINUS_DST_ALPHA,[Iw]:n.CONSTANT_COLOR,[Uw]:n.ONE_MINUS_CONSTANT_COLOR,[Nw]:n.CONSTANT_ALPHA,[Fw]:n.ONE_MINUS_CONSTANT_ALPHA};function H(W,Ce,Ee,Oe,Se,de,Ge,Qe,wt,Ve){if(W===es){_===!0&&(oe(n.BLEND),_=!1);return}if(_===!1&&(fe(n.BLEND),_=!0),W!==vw){if(W!==p||Ve!==E){if((g!==mo||v!==mo)&&(n.blendEquation(n.FUNC_ADD),g=mo,v=mo),Ve)switch(W){case Ta:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dm:n.blendFunc(n.ONE,n.ONE);break;case Lm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Im:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Tt("WebGLState: Invalid blending: ",W);break}else switch(W){case Ta:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dm:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Lm:Tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Im:Tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tt("WebGLState: Invalid blending: ",W);break}x=null,S=null,C=null,R=null,A.set(0,0,0),y=0,p=W,E=Ve}return}Se=Se||Ce,de=de||Ee,Ge=Ge||Oe,(Ce!==g||Se!==v)&&(n.blendEquationSeparate(w[Ce],w[Se]),g=Ce,v=Se),(Ee!==x||Oe!==S||de!==C||Ge!==R)&&(n.blendFuncSeparate(T[Ee],T[Oe],T[de],T[Ge]),x=Ee,S=Oe,C=de,R=Ge),(Qe.equals(A)===!1||wt!==y)&&(n.blendColor(Qe.r,Qe.g,Qe.b,wt),A.copy(Qe),y=wt),p=W,E=!1}function ee(W,Ce){W.side===qr?oe(n.CULL_FACE):fe(n.CULL_FACE);let Ee=W.side===pi;Ce&&(Ee=!Ee),Y(Ee),W.blending===Ta&&W.transparent===!1?H(es):H(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),s.setMask(W.colorWrite);const Oe=W.stencilWrite;a.setTest(Oe),Oe&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),_e(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Y(W){N!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),N=W)}function O(W){W!==gw?(fe(n.CULL_FACE),W!==U&&(W===Pm?n.cullFace(n.BACK):W===_w?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):oe(n.CULL_FACE),U=W}function I(W){W!==L&&(X&&n.lineWidth(W),L=W)}function _e(W,Ce,Ee){W?(fe(n.POLYGON_OFFSET_FILL),(V!==Ce||z!==Ee)&&(V=Ce,z=Ee,o.getReversed()&&(Ce=-Ce),n.polygonOffset(Ce,Ee))):oe(n.POLYGON_OFFSET_FILL)}function he(W){W?fe(n.SCISSOR_TEST):oe(n.SCISSOR_TEST)}function ne(W){W===void 0&&(W=n.TEXTURE0+G-1),j!==W&&(n.activeTexture(W),j=W)}function pe(W,Ce,Ee){Ee===void 0&&(j===null?Ee=n.TEXTURE0+G-1:Ee=j);let Oe=F[Ee];Oe===void 0&&(Oe={type:void 0,texture:void 0},F[Ee]=Oe),(Oe.type!==W||Oe.texture!==Ce)&&(j!==Ee&&(n.activeTexture(Ee),j=Ee),n.bindTexture(W,Ce||J[W]),Oe.type=W,Oe.texture=Ce)}function P(){const W=F[j];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(W){Tt("WebGLState:",W)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(W){Tt("WebGLState:",W)}}function Z(){try{n.texSubImage2D(...arguments)}catch(W){Tt("WebGLState:",W)}}function Q(){try{n.texSubImage3D(...arguments)}catch(W){Tt("WebGLState:",W)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(W){Tt("WebGLState:",W)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(W){Tt("WebGLState:",W)}}function xe(){try{n.texStorage2D(...arguments)}catch(W){Tt("WebGLState:",W)}}function He(){try{n.texStorage3D(...arguments)}catch(W){Tt("WebGLState:",W)}}function De(){try{n.texImage2D(...arguments)}catch(W){Tt("WebGLState:",W)}}function be(){try{n.texImage3D(...arguments)}catch(W){Tt("WebGLState:",W)}}function we(W){ge.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),ge.copy(W))}function Pe(W){ve.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),ve.copy(W))}function Ne(W,Ce){let Ee=c.get(Ce);Ee===void 0&&(Ee=new WeakMap,c.set(Ce,Ee));let Oe=Ee.get(W);Oe===void 0&&(Oe=n.getUniformBlockIndex(Ce,W.name),Ee.set(W,Oe))}function Le(W,Ce){const Oe=c.get(Ce).get(W);l.get(Ce)!==Oe&&(n.uniformBlockBinding(Ce,Oe,W.__bindingPointIndex),l.set(Ce,Oe))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},j=null,F={},d={},f=new WeakMap,h=[],m=null,_=!1,p=null,g=null,x=null,S=null,v=null,C=null,R=null,A=new kt(0,0,0),y=0,E=!1,N=null,U=null,L=null,V=null,z=null,ge.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:fe,disable:oe,bindFramebuffer:Re,drawBuffers:Ae,useProgram:le,setBlending:H,setMaterial:ee,setFlipSided:Y,setCullFace:O,setLineWidth:I,setPolygonOffset:_e,setScissorTest:he,activeTexture:ne,bindTexture:pe,unbindTexture:P,compressedTexImage2D:M,compressedTexImage3D:B,texImage2D:De,texImage3D:be,updateUBOMapping:Ne,uniformBlockBinding:Le,texStorage2D:xe,texStorage3D:He,texSubImage2D:Z,texSubImage3D:Q,compressedTexSubImage2D:q,compressedTexSubImage3D:Me,scissor:we,viewport:Pe,reset:nt}}function g3(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new St,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,M){return h?new OffscreenCanvas(P,M):Ku("canvas")}function _(P,M,B){let Z=1;const Q=pe(P);if((Q.width>B||Q.height>B)&&(Z=B/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const q=Math.floor(Z*Q.width),Me=Math.floor(Z*Q.height);d===void 0&&(d=m(q,Me));const xe=M?m(q,Me):d;return xe.width=q,xe.height=Me,xe.getContext("2d").drawImage(P,0,0,q,Me),at("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Me+")."),xe}else return"data"in P&&at("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function p(P){return P.generateMipmaps}function g(P){n.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(P,M,B,Z,Q=!1){if(P!==null){if(n[P]!==void 0)return n[P];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let q=M;if(M===n.RED&&(B===n.FLOAT&&(q=n.R32F),B===n.HALF_FLOAT&&(q=n.R16F),B===n.UNSIGNED_BYTE&&(q=n.R8)),M===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.R8UI),B===n.UNSIGNED_SHORT&&(q=n.R16UI),B===n.UNSIGNED_INT&&(q=n.R32UI),B===n.BYTE&&(q=n.R8I),B===n.SHORT&&(q=n.R16I),B===n.INT&&(q=n.R32I)),M===n.RG&&(B===n.FLOAT&&(q=n.RG32F),B===n.HALF_FLOAT&&(q=n.RG16F),B===n.UNSIGNED_BYTE&&(q=n.RG8)),M===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RG8UI),B===n.UNSIGNED_SHORT&&(q=n.RG16UI),B===n.UNSIGNED_INT&&(q=n.RG32UI),B===n.BYTE&&(q=n.RG8I),B===n.SHORT&&(q=n.RG16I),B===n.INT&&(q=n.RG32I)),M===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RGB8UI),B===n.UNSIGNED_SHORT&&(q=n.RGB16UI),B===n.UNSIGNED_INT&&(q=n.RGB32UI),B===n.BYTE&&(q=n.RGB8I),B===n.SHORT&&(q=n.RGB16I),B===n.INT&&(q=n.RGB32I)),M===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),B===n.UNSIGNED_INT&&(q=n.RGBA32UI),B===n.BYTE&&(q=n.RGBA8I),B===n.SHORT&&(q=n.RGBA16I),B===n.INT&&(q=n.RGBA32I)),M===n.RGB&&(B===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),M===n.RGBA){const Me=Q?Yu:Mt.getTransfer(Z);B===n.FLOAT&&(q=n.RGBA32F),B===n.HALF_FLOAT&&(q=n.RGBA16F),B===n.UNSIGNED_BYTE&&(q=Me===Nt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function v(P,M){let B;return P?M===null||M===Dr||M===nc?B=n.DEPTH24_STENCIL8:M===br?B=n.DEPTH32F_STENCIL8:M===tc&&(B=n.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Dr||M===nc?B=n.DEPTH_COMPONENT24:M===br?B=n.DEPTH_COMPONENT32F:M===tc&&(B=n.DEPTH_COMPONENT16),B}function C(P,M){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Dn&&P.minFilter!==Xn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function R(P){const M=P.target;M.removeEventListener("dispose",R),y(M),M.isVideoTexture&&u.delete(M)}function A(P){const M=P.target;M.removeEventListener("dispose",A),N(M)}function y(P){const M=i.get(P);if(M.__webglInit===void 0)return;const B=P.source,Z=f.get(B);if(Z){const Q=Z[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(P),Object.keys(Z).length===0&&f.delete(B)}i.remove(P)}function E(P){const M=i.get(P);n.deleteTexture(M.__webglTexture);const B=P.source,Z=f.get(B);delete Z[M.__cacheKey],o.memory.textures--}function N(P){const M=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let Q=0;Q<M.__webglFramebuffer[Z].length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[Z][Q]);else n.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)n.deleteFramebuffer(M.__webglFramebuffer[Z]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=P.textures;for(let Z=0,Q=B.length;Z<Q;Z++){const q=i.get(B[Z]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(B[Z])}i.remove(P)}let U=0;function L(){U=0}function V(){const P=U;return P>=r.maxTextures&&at("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),U+=1,P}function z(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function G(P,M){const B=i.get(P);if(P.isVideoTexture&&he(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&B.__version!==P.version){const Z=P.image;if(Z===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{J(B,P,M);return}}else P.isExternalTexture&&(B.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+M)}function X(P,M){const B=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){J(B,P,M);return}else P.isExternalTexture&&(B.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+M)}function k(P,M){const B=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){J(B,P,M);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+M)}function K(P,M){const B=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&B.__version!==P.version){fe(B,P,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+M)}const j={[Mh]:n.REPEAT,[Zr]:n.CLAMP_TO_EDGE,[wh]:n.MIRRORED_REPEAT},F={[Dn]:n.NEAREST,[Bw]:n.NEAREST_MIPMAP_NEAREST,[Uc]:n.NEAREST_MIPMAP_LINEAR,[Xn]:n.LINEAR,[Kd]:n.LINEAR_MIPMAP_NEAREST,[yo]:n.LINEAR_MIPMAP_LINEAR},ce={[Gw]:n.NEVER,[Yw]:n.ALWAYS,[Ww]:n.LESS,[e0]:n.LEQUAL,[Xw]:n.EQUAL,[t0]:n.GEQUAL,[$w]:n.GREATER,[jw]:n.NOTEQUAL};function me(P,M){if(M.type===br&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Xn||M.magFilter===Kd||M.magFilter===Uc||M.magFilter===yo||M.minFilter===Xn||M.minFilter===Kd||M.minFilter===Uc||M.minFilter===yo)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,j[M.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,j[M.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,j[M.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,F[M.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,F[M.minFilter]),M.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,ce[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Dn||M.minFilter!==Uc&&M.minFilter!==yo||M.type===br&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ge(P,M){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",R));const Z=M.source;let Q=f.get(Z);Q===void 0&&(Q={},f.set(Z,Q));const q=z(M);if(q!==P.__cacheKey){Q[q]===void 0&&(Q[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[q].usedTimes++;const Me=Q[P.__cacheKey];Me!==void 0&&(Q[P.__cacheKey].usedTimes--,Me.usedTimes===0&&E(M)),P.__cacheKey=q,P.__webglTexture=Q[q].texture}return B}function ve(P,M,B){return Math.floor(Math.floor(P/B)/M)}function Te(P,M,B,Z){const q=P.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,B,Z,M.data);else{q.sort((be,we)=>be.start-we.start);let Me=0;for(let be=1;be<q.length;be++){const we=q[Me],Pe=q[be],Ne=we.start+we.count,Le=ve(Pe.start,M.width,4),nt=ve(we.start,M.width,4);Pe.start<=Ne+1&&Le===nt&&ve(Pe.start+Pe.count-1,M.width,4)===Le?we.count=Math.max(we.count,Pe.start+Pe.count-we.start):(++Me,q[Me]=Pe)}q.length=Me+1;const xe=n.getParameter(n.UNPACK_ROW_LENGTH),He=n.getParameter(n.UNPACK_SKIP_PIXELS),De=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let be=0,we=q.length;be<we;be++){const Pe=q[be],Ne=Math.floor(Pe.start/4),Le=Math.ceil(Pe.count/4),nt=Ne%M.width,W=Math.floor(Ne/M.width),Ce=Le,Ee=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,nt),n.pixelStorei(n.UNPACK_SKIP_ROWS,W),t.texSubImage2D(n.TEXTURE_2D,0,nt,W,Ce,Ee,B,Z,M.data)}P.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,xe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,He),n.pixelStorei(n.UNPACK_SKIP_ROWS,De)}}function J(P,M,B){let Z=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=n.TEXTURE_3D);const Q=ge(P,M),q=M.source;t.bindTexture(Z,P.__webglTexture,n.TEXTURE0+B);const Me=i.get(q);if(q.version!==Me.__version||Q===!0){t.activeTexture(n.TEXTURE0+B);const xe=Mt.getPrimaries(Mt.workingColorSpace),He=M.colorSpace===As?null:Mt.getPrimaries(M.colorSpace),De=M.colorSpace===As||xe===He?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let be=_(M.image,!1,r.maxTextureSize);be=ne(M,be);const we=s.convert(M.format,M.colorSpace),Pe=s.convert(M.type);let Ne=S(M.internalFormat,we,Pe,M.colorSpace,M.isVideoTexture);me(Z,M);let Le;const nt=M.mipmaps,W=M.isVideoTexture!==!0,Ce=Me.__version===void 0||Q===!0,Ee=q.dataReady,Oe=C(M,be);if(M.isDepthTexture)Ne=v(M.format===bo,M.type),Ce&&(W?t.texStorage2D(n.TEXTURE_2D,1,Ne,be.width,be.height):t.texImage2D(n.TEXTURE_2D,0,Ne,be.width,be.height,0,we,Pe,null));else if(M.isDataTexture)if(nt.length>0){W&&Ce&&t.texStorage2D(n.TEXTURE_2D,Oe,Ne,nt[0].width,nt[0].height);for(let Se=0,de=nt.length;Se<de;Se++)Le=nt[Se],W?Ee&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,Le.width,Le.height,we,Pe,Le.data):t.texImage2D(n.TEXTURE_2D,Se,Ne,Le.width,Le.height,0,we,Pe,Le.data);M.generateMipmaps=!1}else W?(Ce&&t.texStorage2D(n.TEXTURE_2D,Oe,Ne,be.width,be.height),Ee&&Te(M,be,we,Pe)):t.texImage2D(n.TEXTURE_2D,0,Ne,be.width,be.height,0,we,Pe,be.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){W&&Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,Ne,nt[0].width,nt[0].height,be.depth);for(let Se=0,de=nt.length;Se<de;Se++)if(Le=nt[Se],M.format!==nr)if(we!==null)if(W){if(Ee)if(M.layerUpdates.size>0){const Ge=tg(Le.width,Le.height,M.format,M.type);for(const Qe of M.layerUpdates){const wt=Le.data.subarray(Qe*Ge/Le.data.BYTES_PER_ELEMENT,(Qe+1)*Ge/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,Qe,Le.width,Le.height,1,we,wt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,Le.width,Le.height,be.depth,we,Le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Se,Ne,Le.width,Le.height,be.depth,0,Le.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ee&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,Le.width,Le.height,be.depth,we,Pe,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Se,Ne,Le.width,Le.height,be.depth,0,we,Pe,Le.data)}else{W&&Ce&&t.texStorage2D(n.TEXTURE_2D,Oe,Ne,nt[0].width,nt[0].height);for(let Se=0,de=nt.length;Se<de;Se++)Le=nt[Se],M.format!==nr?we!==null?W?Ee&&t.compressedTexSubImage2D(n.TEXTURE_2D,Se,0,0,Le.width,Le.height,we,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,Se,Ne,Le.width,Le.height,0,Le.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ee&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,Le.width,Le.height,we,Pe,Le.data):t.texImage2D(n.TEXTURE_2D,Se,Ne,Le.width,Le.height,0,we,Pe,Le.data)}else if(M.isDataArrayTexture)if(W){if(Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,Ne,be.width,be.height,be.depth),Ee)if(M.layerUpdates.size>0){const Se=tg(be.width,be.height,M.format,M.type);for(const de of M.layerUpdates){const Ge=be.data.subarray(de*Se/be.data.BYTES_PER_ELEMENT,(de+1)*Se/be.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,be.width,be.height,1,we,Pe,Ge)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,we,Pe,be.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,be.width,be.height,be.depth,0,we,Pe,be.data);else if(M.isData3DTexture)W?(Ce&&t.texStorage3D(n.TEXTURE_3D,Oe,Ne,be.width,be.height,be.depth),Ee&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,we,Pe,be.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,be.width,be.height,be.depth,0,we,Pe,be.data);else if(M.isFramebufferTexture){if(Ce)if(W)t.texStorage2D(n.TEXTURE_2D,Oe,Ne,be.width,be.height);else{let Se=be.width,de=be.height;for(let Ge=0;Ge<Oe;Ge++)t.texImage2D(n.TEXTURE_2D,Ge,Ne,Se,de,0,we,Pe,null),Se>>=1,de>>=1}}else if(nt.length>0){if(W&&Ce){const Se=pe(nt[0]);t.texStorage2D(n.TEXTURE_2D,Oe,Ne,Se.width,Se.height)}for(let Se=0,de=nt.length;Se<de;Se++)Le=nt[Se],W?Ee&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,we,Pe,Le):t.texImage2D(n.TEXTURE_2D,Se,Ne,we,Pe,Le);M.generateMipmaps=!1}else if(W){if(Ce){const Se=pe(be);t.texStorage2D(n.TEXTURE_2D,Oe,Ne,Se.width,Se.height)}Ee&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,Pe,be)}else t.texImage2D(n.TEXTURE_2D,0,Ne,we,Pe,be);p(M)&&g(Z),Me.__version=q.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function fe(P,M,B){if(M.image.length!==6)return;const Z=ge(P,M),Q=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+B);const q=i.get(Q);if(Q.version!==q.__version||Z===!0){t.activeTexture(n.TEXTURE0+B);const Me=Mt.getPrimaries(Mt.workingColorSpace),xe=M.colorSpace===As?null:Mt.getPrimaries(M.colorSpace),He=M.colorSpace===As||Me===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const De=M.isCompressedTexture||M.image[0].isCompressedTexture,be=M.image[0]&&M.image[0].isDataTexture,we=[];for(let de=0;de<6;de++)!De&&!be?we[de]=_(M.image[de],!0,r.maxCubemapSize):we[de]=be?M.image[de].image:M.image[de],we[de]=ne(M,we[de]);const Pe=we[0],Ne=s.convert(M.format,M.colorSpace),Le=s.convert(M.type),nt=S(M.internalFormat,Ne,Le,M.colorSpace),W=M.isVideoTexture!==!0,Ce=q.__version===void 0||Z===!0,Ee=Q.dataReady;let Oe=C(M,Pe);me(n.TEXTURE_CUBE_MAP,M);let Se;if(De){W&&Ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,nt,Pe.width,Pe.height);for(let de=0;de<6;de++){Se=we[de].mipmaps;for(let Ge=0;Ge<Se.length;Ge++){const Qe=Se[Ge];M.format!==nr?Ne!==null?W?Ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge,0,0,Qe.width,Qe.height,Ne,Qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge,nt,Qe.width,Qe.height,0,Qe.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge,0,0,Qe.width,Qe.height,Ne,Le,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge,nt,Qe.width,Qe.height,0,Ne,Le,Qe.data)}}}else{if(Se=M.mipmaps,W&&Ce){Se.length>0&&Oe++;const de=pe(we[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,nt,de.width,de.height)}for(let de=0;de<6;de++)if(be){W?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,we[de].width,we[de].height,Ne,Le,we[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,nt,we[de].width,we[de].height,0,Ne,Le,we[de].data);for(let Ge=0;Ge<Se.length;Ge++){const wt=Se[Ge].image[de].image;W?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge+1,0,0,wt.width,wt.height,Ne,Le,wt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge+1,nt,wt.width,wt.height,0,Ne,Le,wt.data)}}else{W?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ne,Le,we[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,nt,Ne,Le,we[de]);for(let Ge=0;Ge<Se.length;Ge++){const Qe=Se[Ge];W?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge+1,0,0,Ne,Le,Qe.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge+1,nt,Ne,Le,Qe.image[de])}}}p(M)&&g(n.TEXTURE_CUBE_MAP),q.__version=Q.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function oe(P,M,B,Z,Q,q){const Me=s.convert(B.format,B.colorSpace),xe=s.convert(B.type),He=S(B.internalFormat,Me,xe,B.colorSpace),De=i.get(M),be=i.get(B);if(be.__renderTarget=M,!De.__hasExternalTextures){const we=Math.max(1,M.width>>q),Pe=Math.max(1,M.height>>q);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,q,He,we,Pe,M.depth,0,Me,xe,null):t.texImage2D(Q,q,He,we,Pe,0,Me,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),_e(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,Q,be.__webglTexture,0,I(M)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,Q,be.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(P,M,B){if(n.bindRenderbuffer(n.RENDERBUFFER,P),M.depthBuffer){const Z=M.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,q=v(M.stencilBuffer,Q),Me=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;_e(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I(M),q,M.width,M.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,I(M),q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,q,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,P)}else{const Z=M.textures;for(let Q=0;Q<Z.length;Q++){const q=Z[Q],Me=s.convert(q.format,q.colorSpace),xe=s.convert(q.type),He=S(q.internalFormat,Me,xe,q.colorSpace);_e(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I(M),He,M.width,M.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,I(M),He,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,He,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(P,M,B){const Z=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(M.depthTexture);if(Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,M.depthTexture.addEventListener("dispose",R)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),me(n.TEXTURE_CUBE_MAP,M.depthTexture);const De=s.convert(M.depthTexture.format),be=s.convert(M.depthTexture.type);let we;M.depthTexture.format===ds?we=n.DEPTH_COMPONENT24:M.depthTexture.format===bo&&(we=n.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,we,M.width,M.height,0,De,be,null)}}else G(M.depthTexture,0);const q=Q.__webglTexture,Me=I(M),xe=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,He=M.depthTexture.format===bo?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===ds)_e(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,He,xe,q,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,He,xe,q,0);else if(M.depthTexture.format===bo)_e(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,He,xe,q,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,He,xe,q,0);else throw new Error("Unknown depthTexture format")}function le(P){const M=i.get(P),B=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const Z=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=Z}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(B)for(let Z=0;Z<6;Z++)Ae(M.__webglFramebuffer[Z],P,Z);else{const Z=P.texture.mipmaps;Z&&Z.length>0?Ae(M.__webglFramebuffer[0],P,0):Ae(M.__webglFramebuffer,P,0)}else if(B){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=n.createRenderbuffer(),Re(M.__webglDepthbuffer[Z],P,!1);else{const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,q)}}else{const Z=P.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Re(M.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function w(P,M,B){const Z=i.get(P);M!==void 0&&oe(Z.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&le(P)}function T(P){const M=P.texture,B=i.get(P),Z=i.get(M);P.addEventListener("dispose",A);const Q=P.textures,q=P.isWebGLCubeRenderTarget===!0,Me=Q.length>1;if(Me||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=M.version,o.memory.textures++),q){B.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[xe]=[];for(let He=0;He<M.mipmaps.length;He++)B.__webglFramebuffer[xe][He]=n.createFramebuffer()}else B.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let xe=0;xe<M.mipmaps.length;xe++)B.__webglFramebuffer[xe]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Me)for(let xe=0,He=Q.length;xe<He;xe++){const De=i.get(Q[xe]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&_e(P)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let xe=0;xe<Q.length;xe++){const He=Q[xe];B.__webglColorRenderbuffer[xe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[xe]);const De=s.convert(He.format,He.colorSpace),be=s.convert(He.type),we=S(He.internalFormat,De,be,He.colorSpace,P.isXRRenderTarget===!0),Pe=I(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,we,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,B.__webglColorRenderbuffer[xe])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Re(B.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),me(n.TEXTURE_CUBE_MAP,M);for(let xe=0;xe<6;xe++)if(M.mipmaps&&M.mipmaps.length>0)for(let He=0;He<M.mipmaps.length;He++)oe(B.__webglFramebuffer[xe][He],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He);else oe(B.__webglFramebuffer[xe],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);p(M)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let xe=0,He=Q.length;xe<He;xe++){const De=Q[xe],be=i.get(De);let we=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(we=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(we,be.__webglTexture),me(we,De),oe(B.__webglFramebuffer,P,De,n.COLOR_ATTACHMENT0+xe,we,0),p(De)&&g(we)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xe=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,Z.__webglTexture),me(xe,M),M.mipmaps&&M.mipmaps.length>0)for(let He=0;He<M.mipmaps.length;He++)oe(B.__webglFramebuffer[He],P,M,n.COLOR_ATTACHMENT0,xe,He);else oe(B.__webglFramebuffer,P,M,n.COLOR_ATTACHMENT0,xe,0);p(M)&&g(xe),t.unbindTexture()}P.depthBuffer&&le(P)}function H(P){const M=P.textures;for(let B=0,Z=M.length;B<Z;B++){const Q=M[B];if(p(Q)){const q=x(P),Me=i.get(Q).__webglTexture;t.bindTexture(q,Me),g(q),t.unbindTexture()}}}const ee=[],Y=[];function O(P){if(P.samples>0){if(_e(P)===!1){const M=P.textures,B=P.width,Z=P.height;let Q=n.COLOR_BUFFER_BIT;const q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(P),xe=M.length>1;if(xe)for(let De=0;De<M.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const He=P.texture.mipmaps;He&&He.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let De=0;De<M.length;De++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),xe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[De]);const be=i.get(M[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,be,0)}n.blitFramebuffer(0,0,B,Z,0,0,B,Z,Q,n.NEAREST),l===!0&&(ee.length=0,Y.length=0,ee.push(n.COLOR_ATTACHMENT0+De),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ee.push(q),Y.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xe)for(let De=0;De<M.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,Me.__webglColorRenderbuffer[De]);const be=i.get(M[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const M=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function I(P){return Math.min(r.maxSamples,P.samples)}function _e(P){const M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function he(P){const M=o.render.frame;u.get(P)!==M&&(u.set(P,M),P.update())}function ne(P,M){const B=P.colorSpace,Z=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||B!==Ba&&B!==As&&(Mt.getTransfer(B)===Nt?(Z!==nr||Q!==Hi)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Tt("WebGLTextures: Unsupported texture color space:",B)),M}function pe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=L,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=k,this.setTextureCube=K,this.rebindTextures=w,this.setupRenderTarget=T,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=_e,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function _3(n,e){function t(i,r=As){let s;const o=Mt.getTransfer(r);if(i===Hi)return n.UNSIGNED_BYTE;if(i===qp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Sv)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mv)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===yv)return n.BYTE;if(i===bv)return n.SHORT;if(i===tc)return n.UNSIGNED_SHORT;if(i===Yp)return n.INT;if(i===Dr)return n.UNSIGNED_INT;if(i===br)return n.FLOAT;if(i===us)return n.HALF_FLOAT;if(i===wv)return n.ALPHA;if(i===Ev)return n.RGB;if(i===nr)return n.RGBA;if(i===ds)return n.DEPTH_COMPONENT;if(i===bo)return n.DEPTH_STENCIL;if(i===Tv)return n.RED;if(i===Zp)return n.RED_INTEGER;if(i===ka)return n.RG;if(i===Jp)return n.RG_INTEGER;if(i===Qp)return n.RGBA_INTEGER;if(i===vu||i===yu||i===bu||i===Su)if(o===Nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===vu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Su)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===vu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Su)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Eh||i===Th||i===Ah||i===Ch)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Eh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Th)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ah)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ch)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rh||i===Ph||i===Dh||i===Lh||i===Ih||i===Uh||i===Nh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Rh||i===Ph)return o===Nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Dh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Lh)return s.COMPRESSED_R11_EAC;if(i===Ih)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Uh)return s.COMPRESSED_RG11_EAC;if(i===Nh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Fh||i===Oh||i===kh||i===Bh||i===zh||i===Vh||i===Hh||i===Gh||i===Wh||i===Xh||i===$h||i===jh||i===Yh||i===qh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Fh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Oh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===kh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$h)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qh)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kh||i===Zh||i===Jh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Kh)return o===Nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qh||i===ep||i===tp||i===np)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Qh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ep)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===tp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===np)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===nc?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const x3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v3=`
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

}`;class y3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Fv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new or({vertexShader:x3,fragmentShader:v3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lr(new pc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class b3 extends Va{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,m=null;const _=typeof XRWebGLBinding<"u",p=new y3,g={},x=t.getContextAttributes();let S=null,v=null;const C=[],R=[],A=new St;let y=null;const E=new er;E.viewport=new rn;const N=new er;N.viewport=new rn;const U=[E,N],L=new IE;let V=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let fe=C[J];return fe===void 0&&(fe=new sf,C[J]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(J){let fe=C[J];return fe===void 0&&(fe=new sf,C[J]=fe),fe.getGripSpace()},this.getHand=function(J){let fe=C[J];return fe===void 0&&(fe=new sf,C[J]=fe),fe.getHandSpace()};function G(J){const fe=R.indexOf(J.inputSource);if(fe===-1)return;const oe=C[fe];oe!==void 0&&(oe.update(J.inputSource,J.frame,c||o),oe.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",k);for(let J=0;J<C.length;J++){const fe=R[J];fe!==null&&(R[J]=null,C[J].disconnect(fe))}V=null,z=null,p.reset();for(const J in g)delete g[J];e.setRenderTarget(S),h=null,f=null,d=null,r=null,v=null,Te.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",X),r.addEventListener("inputsourceschange",k),x.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Re=null,Ae=null;x.depth&&(Ae=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=x.stencil?bo:ds,Re=x.stencil?nc:Dr);const le={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(le),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Ar(f.textureWidth,f.textureHeight,{format:nr,type:Hi,depthTexture:new ic(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const oe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new Ar(h.framebufferWidth,h.framebufferHeight,{format:nr,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Te.setContext(r),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function k(J){for(let fe=0;fe<J.removed.length;fe++){const oe=J.removed[fe],Re=R.indexOf(oe);Re>=0&&(R[Re]=null,C[Re].disconnect(oe))}for(let fe=0;fe<J.added.length;fe++){const oe=J.added[fe];let Re=R.indexOf(oe);if(Re===-1){for(let le=0;le<C.length;le++)if(le>=R.length){R.push(oe),Re=le;break}else if(R[le]===null){R[le]=oe,Re=le;break}if(Re===-1)break}const Ae=C[Re];Ae&&Ae.connect(oe)}}const K=new se,j=new se;function F(J,fe,oe){K.setFromMatrixPosition(fe.matrixWorld),j.setFromMatrixPosition(oe.matrixWorld);const Re=K.distanceTo(j),Ae=fe.projectionMatrix.elements,le=oe.projectionMatrix.elements,w=Ae[14]/(Ae[10]-1),T=Ae[14]/(Ae[10]+1),H=(Ae[9]+1)/Ae[5],ee=(Ae[9]-1)/Ae[5],Y=(Ae[8]-1)/Ae[0],O=(le[8]+1)/le[0],I=w*Y,_e=w*O,he=Re/(-Y+O),ne=he*-Y;if(fe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ne),J.translateZ(he),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ae[10]===-1)J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const pe=w+he,P=T+he,M=I-ne,B=_e+(Re-ne),Z=H*T/P*pe,Q=ee*T/P*pe;J.projectionMatrix.makePerspective(M,B,Z,Q,pe,P),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ce(J,fe){fe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(fe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let fe=J.near,oe=J.far;p.texture!==null&&(p.depthNear>0&&(fe=p.depthNear),p.depthFar>0&&(oe=p.depthFar)),L.near=N.near=E.near=fe,L.far=N.far=E.far=oe,(V!==L.near||z!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),V=L.near,z=L.far),L.layers.mask=J.layers.mask|6,E.layers.mask=L.layers.mask&-5,N.layers.mask=L.layers.mask&-3;const Re=J.parent,Ae=L.cameras;ce(L,Re);for(let le=0;le<Ae.length;le++)ce(Ae[le],Re);Ae.length===2?F(L,E,N):L.projectionMatrix.copy(E.projectionMatrix),me(J,L,Re)};function me(J,fe,oe){oe===null?J.matrix.copy(fe.matrixWorld):(J.matrix.copy(oe.matrixWorld),J.matrix.invert(),J.matrix.multiply(fe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ip*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(J){return g[J]};let ge=null;function ve(J,fe){if(u=fe.getViewerPose(c||o),m=fe,u!==null){const oe=u.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let Re=!1;oe.length!==L.cameras.length&&(L.cameras.length=0,Re=!0);for(let T=0;T<oe.length;T++){const H=oe[T];let ee=null;if(h!==null)ee=h.getViewport(H);else{const O=d.getViewSubImage(f,H);ee=O.viewport,T===0&&(e.setRenderTargetTextures(v,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(v))}let Y=U[T];Y===void 0&&(Y=new er,Y.layers.enable(T),Y.viewport=new rn,U[T]=Y),Y.matrix.fromArray(H.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(H.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(ee.x,ee.y,ee.width,ee.height),T===0&&(L.matrix.copy(Y.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Re===!0&&L.cameras.push(Y)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const T=d.getDepthInformation(oe[0]);T&&T.isValid&&T.texture&&p.init(T,r.renderState)}if(Ae&&Ae.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let T=0;T<oe.length;T++){const H=oe[T].camera;if(H){let ee=g[H];ee||(ee=new Fv,g[H]=ee);const Y=d.getCameraImage(H);ee.sourceTexture=Y}}}}for(let oe=0;oe<C.length;oe++){const Re=R[oe],Ae=C[oe];Re!==null&&Ae!==void 0&&Ae.update(Re,fe,c||o)}ge&&ge(J,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),m=null}const Te=new Bv;Te.setAnimationLoop(ve),this.setAnimationLoop=function(J){ge=J},this.dispose=function(){}}}const so=new fs,S3=new cn;function M3(n,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,Ov(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function r(p,g,x,S,v){g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),d(p,g)):g.isMeshPhongMaterial?(s(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),f(p,g),g.isMeshPhysicalMaterial&&h(p,g,v)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),_(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,x,S):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===pi&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===pi&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const x=e.get(g),S=x.envMap,v=x.envMapRotation;S&&(p.envMap.value=S,so.copy(v),so.x*=-1,so.y*=-1,so.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(so.y*=-1,so.z*=-1),p.envMapRotation.value.setFromMatrix4(S3.makeRotationFromEuler(so)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,x,S){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*x,p.scale.value=S*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function h(p,g,x){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===pi&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const x=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function w3(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){const v=S.program;i.uniformBlockBinding(x,v)}function c(x,S){let v=r[x.id];v===void 0&&(m(x),v=u(x),r[x.id]=v,x.addEventListener("dispose",p));const C=S.program;i.updateUBOMapping(x,C);const R=e.render.frame;s[x.id]!==R&&(f(x),s[x.id]=R)}function u(x){const S=d();x.__bindingPointIndex=S;const v=n.createBuffer(),C=x.__size,R=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,C,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,v),v}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const S=r[x.id],v=x.uniforms,C=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let R=0,A=v.length;R<A;R++){const y=Array.isArray(v[R])?v[R]:[v[R]];for(let E=0,N=y.length;E<N;E++){const U=y[E];if(h(U,R,E,C)===!0){const L=U.__offset,V=Array.isArray(U.value)?U.value:[U.value];let z=0;for(let G=0;G<V.length;G++){const X=V[G],k=_(X);typeof X=="number"||typeof X=="boolean"?(U.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,L+z,U.__data)):X.isMatrix3?(U.__data[0]=X.elements[0],U.__data[1]=X.elements[1],U.__data[2]=X.elements[2],U.__data[3]=0,U.__data[4]=X.elements[3],U.__data[5]=X.elements[4],U.__data[6]=X.elements[5],U.__data[7]=0,U.__data[8]=X.elements[6],U.__data[9]=X.elements[7],U.__data[10]=X.elements[8],U.__data[11]=0):(X.toArray(U.__data,z),z+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(x,S,v,C){const R=x.value,A=S+"_"+v;if(C[A]===void 0)return typeof R=="number"||typeof R=="boolean"?C[A]=R:C[A]=R.clone(),!0;{const y=C[A];if(typeof R=="number"||typeof R=="boolean"){if(y!==R)return C[A]=R,!0}else if(y.equals(R)===!1)return y.copy(R),!0}return!1}function m(x){const S=x.uniforms;let v=0;const C=16;for(let A=0,y=S.length;A<y;A++){const E=Array.isArray(S[A])?S[A]:[S[A]];for(let N=0,U=E.length;N<U;N++){const L=E[N],V=Array.isArray(L.value)?L.value:[L.value];for(let z=0,G=V.length;z<G;z++){const X=V[z],k=_(X),K=v%C,j=K%k.boundary,F=K+j;v+=j,F!==0&&C-F<k.storage&&(v+=C-F),L.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=k.storage}}}const R=v%C;return R>0&&(v+=C-R),x.__size=v,x.__cache={},this}function _(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):at("WebGLRenderer: Unsupported uniform value type.",x),S}function p(x){const S=x.target;S.removeEventListener("dispose",p);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function g(){for(const x in r)n.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:g}}const E3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ur=null;function T3(){return ur===null&&(ur=new yE(E3,16,16,ka,us),ur.name="DFG_LUT",ur.minFilter=Xn,ur.magFilter=Xn,ur.wrapS=Zr,ur.wrapT=Zr,ur.generateMipmaps=!1,ur.needsUpdate=!0),ur}class A3{constructor(e={}){const{canvas:t=Kw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Hi}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const _=h,p=new Set([Qp,Jp,Zp]),g=new Set([Hi,Dr,tc,nc,qp,Kp]),x=new Uint32Array(4),S=new Int32Array(4);let v=null,C=null;const R=[],A=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let N=!1;this._outputColorSpace=Bi;let U=0,L=0,V=null,z=-1,G=null;const X=new rn,k=new rn;let K=null;const j=new kt(0);let F=0,ce=t.width,me=t.height,ge=1,ve=null,Te=null;const J=new rn(0,0,ce,me),fe=new rn(0,0,ce,me);let oe=!1;const Re=new Uv;let Ae=!1,le=!1;const w=new cn,T=new se,H=new rn,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Y=!1;function O(){return V===null?ge:1}let I=i;function _e(D,$){return t.getContext(D,$)}try{const D={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jp}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",wt,!1),I===null){const $="webgl2";if(I=_e($,D),I===null)throw _e($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw Tt("WebGLRenderer: "+D.message),D}let he,ne,pe,P,M,B,Z,Q,q,Me,xe,He,De,be,we,Pe,Ne,Le,nt,W,Ce,Ee,Oe;function Se(){he=new AA(I),he.init(),Ce=new _3(I,he),ne=new vA(I,he,e,Ce),pe=new m3(I,he),ne.reversedDepthBuffer&&f&&pe.buffers.depth.setReversed(!0),P=new PA(I),M=new t3,B=new g3(I,he,pe,M,ne,Ce,P),Z=new TA(E),Q=new NE(I),Ee=new _A(I,Q),q=new CA(I,Q,P,Ee),Me=new LA(I,q,Q,Ee,P),Le=new DA(I,ne,B),we=new yA(M),xe=new e3(E,Z,he,ne,Ee,we),He=new M3(E,M),De=new i3,be=new c3(he),Ne=new gA(E,Z,pe,Me,m,l),Pe=new p3(E,Me,ne),Oe=new w3(I,P,ne,pe),nt=new xA(I,he,P),W=new RA(I,he,P),P.programs=xe.programs,E.capabilities=ne,E.extensions=he,E.properties=M,E.renderLists=De,E.shadowMap=Pe,E.state=pe,E.info=P}Se(),_!==Hi&&(y=new UA(_,t.width,t.height,r,s));const de=new b3(E,I);this.xr=de,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const D=he.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=he.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(D){D!==void 0&&(ge=D,this.setSize(ce,me,!1))},this.getSize=function(D){return D.set(ce,me)},this.setSize=function(D,$,re=!0){if(de.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=D,me=$,t.width=Math.floor(D*ge),t.height=Math.floor($*ge),re===!0&&(t.style.width=D+"px",t.style.height=$+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,D,$)},this.getDrawingBufferSize=function(D){return D.set(ce*ge,me*ge).floor()},this.setDrawingBufferSize=function(D,$,re){ce=D,me=$,ge=re,t.width=Math.floor(D*re),t.height=Math.floor($*re),this.setViewport(0,0,D,$)},this.setEffects=function(D){if(_===Hi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let $=0;$<D.length;$++)if(D[$].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(X)},this.getViewport=function(D){return D.copy(J)},this.setViewport=function(D,$,re,ie){D.isVector4?J.set(D.x,D.y,D.z,D.w):J.set(D,$,re,ie),pe.viewport(X.copy(J).multiplyScalar(ge).round())},this.getScissor=function(D){return D.copy(fe)},this.setScissor=function(D,$,re,ie){D.isVector4?fe.set(D.x,D.y,D.z,D.w):fe.set(D,$,re,ie),pe.scissor(k.copy(fe).multiplyScalar(ge).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(D){pe.setScissorTest(oe=D)},this.setOpaqueSort=function(D){ve=D},this.setTransparentSort=function(D){Te=D},this.getClearColor=function(D){return D.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(D=!0,$=!0,re=!0){let ie=0;if(D){let te=!1;if(V!==null){const Ie=V.texture.format;te=p.has(Ie)}if(te){const Ie=V.texture.type,ke=g.has(Ie),Ue=Ne.getClearColor(),je=Ne.getClearAlpha(),$e=Ue.r,ut=Ue.g,gt=Ue.b;ke?(x[0]=$e,x[1]=ut,x[2]=gt,x[3]=je,I.clearBufferuiv(I.COLOR,0,x)):(S[0]=$e,S[1]=ut,S[2]=gt,S[3]=je,I.clearBufferiv(I.COLOR,0,S))}else ie|=I.COLOR_BUFFER_BIT}$&&(ie|=I.DEPTH_BUFFER_BIT),re&&(ie|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&I.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",wt,!1),Ne.dispose(),De.dispose(),be.dispose(),M.dispose(),Z.dispose(),Me.dispose(),Ee.dispose(),Oe.dispose(),xe.dispose(),de.dispose(),de.removeEventListener("sessionstart",st),de.removeEventListener("sessionend",en),lt.stop()};function Ge(D){D.preventDefault(),km("WebGLRenderer: Context Lost."),N=!0}function Qe(){km("WebGLRenderer: Context Restored."),N=!1;const D=P.autoReset,$=Pe.enabled,re=Pe.autoUpdate,ie=Pe.needsUpdate,te=Pe.type;Se(),P.autoReset=D,Pe.enabled=$,Pe.autoUpdate=re,Pe.needsUpdate=ie,Pe.type=te}function wt(D){Tt("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Ve(D){const $=D.target;$.removeEventListener("dispose",Ve),Ke($)}function Ke(D){ft(D),M.remove(D)}function ft(D){const $=M.get(D).programs;$!==void 0&&($.forEach(function(re){xe.releaseProgram(re)}),D.isShaderMaterial&&xe.releaseShaderCache(D))}this.renderBufferDirect=function(D,$,re,ie,te,Ie){$===null&&($=ee);const ke=te.isMesh&&te.matrixWorld.determinant()<0,Ue=Ui(D,$,re,ie,te);pe.setMaterial(ie,ke);let je=re.index,$e=1;if(ie.wireframe===!0){if(je=q.getWireframeAttribute(re),je===void 0)return;$e=2}const ut=re.drawRange,gt=re.attributes.position;let Je=ut.start*$e,Ft=(ut.start+ut.count)*$e;Ie!==null&&(Je=Math.max(Je,Ie.start*$e),Ft=Math.min(Ft,(Ie.start+Ie.count)*$e)),je!==null?(Je=Math.max(Je,0),Ft=Math.min(Ft,je.count)):gt!=null&&(Je=Math.max(Je,0),Ft=Math.min(Ft,gt.count));const tn=Ft-Je;if(tn<0||tn===1/0)return;Ee.setup(te,ie,Ue,re,je);let Jt,Ot=nt;if(je!==null&&(Jt=Q.get(je),Ot=W,Ot.setIndex(Jt)),te.isMesh)ie.wireframe===!0?(pe.setLineWidth(ie.wireframeLinewidth*O()),Ot.setMode(I.LINES)):Ot.setMode(I.TRIANGLES);else if(te.isLine){let Fn=ie.linewidth;Fn===void 0&&(Fn=1),pe.setLineWidth(Fn*O()),te.isLineSegments?Ot.setMode(I.LINES):te.isLineLoop?Ot.setMode(I.LINE_LOOP):Ot.setMode(I.LINE_STRIP)}else te.isPoints?Ot.setMode(I.POINTS):te.isSprite&&Ot.setMode(I.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)Zu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ot.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))Ot.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const Fn=te._multiDrawStarts,Ze=te._multiDrawCounts,gi=te._multiDrawCount,Et=je?Q.get(je).bytesPerElement:1,qi=M.get(ie).currentProgram.getUniforms();for(let ar=0;ar<gi;ar++)qi.setValue(I,"_gl_DrawID",ar),Ot.render(Fn[ar]/Et,Ze[ar])}else if(te.isInstancedMesh)Ot.renderInstances(Je,tn,te.count);else if(re.isInstancedBufferGeometry){const Fn=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ze=Math.min(re.instanceCount,Fn);Ot.renderInstances(Je,tn,Ze)}else Ot.render(Je,tn)};function Be(D,$,re){D.transparent===!0&&D.side===qr&&D.forceSinglePass===!1?(D.side=pi,D.needsUpdate=!0,Un(D,$,re),D.side=Ws,D.needsUpdate=!0,Un(D,$,re),D.side=qr):Un(D,$,re)}this.compile=function(D,$,re=null){re===null&&(re=D),C=be.get(re),C.init($),A.push(C),re.traverseVisible(function(te){te.isLight&&te.layers.test($.layers)&&(C.pushLight(te),te.castShadow&&C.pushShadow(te))}),D!==re&&D.traverseVisible(function(te){te.isLight&&te.layers.test($.layers)&&(C.pushLight(te),te.castShadow&&C.pushShadow(te))}),C.setupLights();const ie=new Set;return D.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Ie=te.material;if(Ie)if(Array.isArray(Ie))for(let ke=0;ke<Ie.length;ke++){const Ue=Ie[ke];Be(Ue,re,te),ie.add(Ue)}else Be(Ie,re,te),ie.add(Ie)}),C=A.pop(),ie},this.compileAsync=function(D,$,re=null){const ie=this.compile(D,$,re);return new Promise(te=>{function Ie(){if(ie.forEach(function(ke){M.get(ke).currentProgram.isReady()&&ie.delete(ke)}),ie.size===0){te(D);return}setTimeout(Ie,10)}he.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let rt=null;function et(D){rt&&rt(D)}function st(){lt.stop()}function en(){lt.start()}const lt=new Bv;lt.setAnimationLoop(et),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(D){rt=D,de.setAnimationLoop(D),D===null?lt.stop():lt.start()},de.addEventListener("sessionstart",st),de.addEventListener("sessionend",en),this.render=function(D,$){if($!==void 0&&$.isCamera!==!0){Tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const re=de.enabled===!0&&de.isPresenting===!0,ie=y!==null&&(V===null||re)&&y.begin(E,V);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera($),$=de.getCamera()),D.isScene===!0&&D.onBeforeRender(E,D,$,V),C=be.get(D,A.length),C.init($),A.push(C),w.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Re.setFromProjectionMatrix(w,Sr,$.reversedDepth),le=this.localClippingEnabled,Ae=we.init(this.clippingPlanes,le),v=De.get(D,R.length),v.init(),R.push(v),de.enabled===!0&&de.isPresenting===!0){const ke=E.xr.getDepthSensingMesh();ke!==null&&Xt(ke,$,-1/0,E.sortObjects)}Xt(D,$,0,E.sortObjects),v.finish(),E.sortObjects===!0&&v.sort(ve,Te),Y=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,Y&&Ne.addToRenderList(v,D),this.info.render.frame++,Ae===!0&&we.beginShadows();const te=C.state.shadowsArray;if(Pe.render(te,D,$),Ae===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&y.hasRenderPass())===!1){const ke=v.opaque,Ue=v.transmissive;if(C.setupLights(),$.isArrayCamera){const je=$.cameras;if(Ue.length>0)for(let $e=0,ut=je.length;$e<ut;$e++){const gt=je[$e];$t(ke,Ue,D,gt)}Y&&Ne.render(D);for(let $e=0,ut=je.length;$e<ut;$e++){const gt=je[$e];un(v,D,gt,gt.viewport)}}else Ue.length>0&&$t(ke,Ue,D,$),Y&&Ne.render(D),un(v,D,$)}V!==null&&L===0&&(B.updateMultisampleRenderTarget(V),B.updateRenderTargetMipmap(V)),ie&&y.end(E),D.isScene===!0&&D.onAfterRender(E,D,$),Ee.resetDefaultState(),z=-1,G=null,A.pop(),A.length>0?(C=A[A.length-1],Ae===!0&&we.setGlobalState(E.clippingPlanes,C.state.camera)):C=null,R.pop(),R.length>0?v=R[R.length-1]:v=null};function Xt(D,$,re,ie){if(D.visible===!1)return;if(D.layers.test($.layers)){if(D.isGroup)re=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update($);else if(D.isLight)C.pushLight(D),D.castShadow&&C.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Re.intersectsSprite(D)){ie&&H.setFromMatrixPosition(D.matrixWorld).applyMatrix4(w);const ke=Me.update(D),Ue=D.material;Ue.visible&&v.push(D,ke,Ue,re,H.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Re.intersectsObject(D))){const ke=Me.update(D),Ue=D.material;if(ie&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),H.copy(D.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),H.copy(ke.boundingSphere.center)),H.applyMatrix4(D.matrixWorld).applyMatrix4(w)),Array.isArray(Ue)){const je=ke.groups;for(let $e=0,ut=je.length;$e<ut;$e++){const gt=je[$e],Je=Ue[gt.materialIndex];Je&&Je.visible&&v.push(D,ke,Je,re,H.z,gt)}}else Ue.visible&&v.push(D,ke,Ue,re,H.z,null)}}const Ie=D.children;for(let ke=0,Ue=Ie.length;ke<Ue;ke++)Xt(Ie[ke],$,re,ie)}function un(D,$,re,ie){const{opaque:te,transmissive:Ie,transparent:ke}=D;C.setupLightsView(re),Ae===!0&&we.setGlobalState(E.clippingPlanes,re),ie&&pe.viewport(X.copy(ie)),te.length>0&&It(te,$,re),Ie.length>0&&It(Ie,$,re),ke.length>0&&It(ke,$,re),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function $t(D,$,re,ie){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[ie.id]===void 0){const Je=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[ie.id]=new Ar(1,1,{generateMipmaps:!0,type:Je?us:Hi,minFilter:yo,samples:Math.max(4,ne.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const Ie=C.state.transmissionRenderTarget[ie.id],ke=ie.viewport||X;Ie.setSize(ke.z*E.transmissionResolutionScale,ke.w*E.transmissionResolutionScale);const Ue=E.getRenderTarget(),je=E.getActiveCubeFace(),$e=E.getActiveMipmapLevel();E.setRenderTarget(Ie),E.getClearColor(j),F=E.getClearAlpha(),F<1&&E.setClearColor(16777215,.5),E.clear(),Y&&Ne.render(re);const ut=E.toneMapping;E.toneMapping=Tr;const gt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),C.setupLightsView(ie),Ae===!0&&we.setGlobalState(E.clippingPlanes,ie),It(D,re,ie),B.updateMultisampleRenderTarget(Ie),B.updateRenderTargetMipmap(Ie),he.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Ft=0,tn=$.length;Ft<tn;Ft++){const Jt=$[Ft],{object:Ot,geometry:Fn,material:Ze,group:gi}=Jt;if(Ze.side===qr&&Ot.layers.test(ie.layers)){const Et=Ze.side;Ze.side=pi,Ze.needsUpdate=!0,Rt(Ot,re,ie,Fn,Ze,gi),Ze.side=Et,Ze.needsUpdate=!0,Je=!0}}Je===!0&&(B.updateMultisampleRenderTarget(Ie),B.updateRenderTargetMipmap(Ie))}E.setRenderTarget(Ue,je,$e),E.setClearColor(j,F),gt!==void 0&&(ie.viewport=gt),E.toneMapping=ut}function It(D,$,re){const ie=$.isScene===!0?$.overrideMaterial:null;for(let te=0,Ie=D.length;te<Ie;te++){const ke=D[te],{object:Ue,geometry:je,group:$e}=ke;let ut=ke.material;ut.allowOverride===!0&&ie!==null&&(ut=ie),Ue.layers.test(re.layers)&&Rt(Ue,$,re,je,ut,$e)}}function Rt(D,$,re,ie,te,Ie){D.onBeforeRender(E,$,re,ie,te,Ie),D.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),te.onBeforeRender(E,$,re,ie,D,Ie),te.transparent===!0&&te.side===qr&&te.forceSinglePass===!1?(te.side=pi,te.needsUpdate=!0,E.renderBufferDirect(re,$,ie,te,D,Ie),te.side=Ws,te.needsUpdate=!0,E.renderBufferDirect(re,$,ie,te,D,Ie),te.side=qr):E.renderBufferDirect(re,$,ie,te,D,Ie),D.onAfterRender(E,$,re,ie,te,Ie)}function Un(D,$,re){$.isScene!==!0&&($=ee);const ie=M.get(D),te=C.state.lights,Ie=C.state.shadowsArray,ke=te.state.version,Ue=xe.getParameters(D,te.state,Ie,$,re),je=xe.getProgramCacheKey(Ue);let $e=ie.programs;ie.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?$.environment:null,ie.fog=$.fog;const ut=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;ie.envMap=Z.get(D.envMap||ie.environment,ut),ie.envMapRotation=ie.environment!==null&&D.envMap===null?$.environmentRotation:D.envMapRotation,$e===void 0&&(D.addEventListener("dispose",Ve),$e=new Map,ie.programs=$e);let gt=$e.get(je);if(gt!==void 0){if(ie.currentProgram===gt&&ie.lightsStateVersion===ke)return Nn(D,Ue),gt}else Ue.uniforms=xe.getUniforms(D),D.onBeforeCompile(Ue,E),gt=xe.acquireProgram(Ue,je),$e.set(je,gt),ie.uniforms=Ue.uniforms;const Je=ie.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Je.clippingPlanes=we.uniform),Nn(D,Ue),ie.needsLights=fn(D),ie.lightsStateVersion=ke,ie.needsLights&&(Je.ambientLightColor.value=te.state.ambient,Je.lightProbe.value=te.state.probe,Je.directionalLights.value=te.state.directional,Je.directionalLightShadows.value=te.state.directionalShadow,Je.spotLights.value=te.state.spot,Je.spotLightShadows.value=te.state.spotShadow,Je.rectAreaLights.value=te.state.rectArea,Je.ltc_1.value=te.state.rectAreaLTC1,Je.ltc_2.value=te.state.rectAreaLTC2,Je.pointLights.value=te.state.point,Je.pointLightShadows.value=te.state.pointShadow,Je.hemisphereLights.value=te.state.hemi,Je.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Je.spotLightMatrix.value=te.state.spotLightMatrix,Je.spotLightMap.value=te.state.spotLightMap,Je.pointShadowMatrix.value=te.state.pointShadowMatrix),ie.currentProgram=gt,ie.uniformsList=null,gt}function Gt(D){if(D.uniformsList===null){const $=D.currentProgram.getUniforms();D.uniformsList=Mu.seqWithValue($.seq,D.uniforms)}return D.uniformsList}function Nn(D,$){const re=M.get(D);re.outputColorSpace=$.outputColorSpace,re.batching=$.batching,re.batchingColor=$.batchingColor,re.instancing=$.instancing,re.instancingColor=$.instancingColor,re.instancingMorph=$.instancingMorph,re.skinning=$.skinning,re.morphTargets=$.morphTargets,re.morphNormals=$.morphNormals,re.morphColors=$.morphColors,re.morphTargetsCount=$.morphTargetsCount,re.numClippingPlanes=$.numClippingPlanes,re.numIntersection=$.numClipIntersection,re.vertexAlphas=$.vertexAlphas,re.vertexTangents=$.vertexTangents,re.toneMapping=$.toneMapping}function Ui(D,$,re,ie,te){$.isScene!==!0&&($=ee),B.resetTextureUnits();const Ie=$.fog,ke=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?$.environment:null,Ue=V===null?E.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ba,je=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,$e=Z.get(ie.envMap||ke,je),ut=ie.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,gt=!!re.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Je=!!re.morphAttributes.position,Ft=!!re.morphAttributes.normal,tn=!!re.morphAttributes.color;let Jt=Tr;ie.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Jt=E.toneMapping);const Ot=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Fn=Ot!==void 0?Ot.length:0,Ze=M.get(ie),gi=C.state.lights;if(Ae===!0&&(le===!0||D!==G)){const xn=D===G&&ie.id===z;we.setState(ie,D,xn)}let Et=!1;ie.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==gi.state.version||Ze.outputColorSpace!==Ue||te.isBatchedMesh&&Ze.batching===!1||!te.isBatchedMesh&&Ze.batching===!0||te.isBatchedMesh&&Ze.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Ze.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Ze.instancing===!1||!te.isInstancedMesh&&Ze.instancing===!0||te.isSkinnedMesh&&Ze.skinning===!1||!te.isSkinnedMesh&&Ze.skinning===!0||te.isInstancedMesh&&Ze.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Ze.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Ze.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Ze.instancingMorph===!1&&te.morphTexture!==null||Ze.envMap!==$e||ie.fog===!0&&Ze.fog!==Ie||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==we.numPlanes||Ze.numIntersection!==we.numIntersection)||Ze.vertexAlphas!==ut||Ze.vertexTangents!==gt||Ze.morphTargets!==Je||Ze.morphNormals!==Ft||Ze.morphColors!==tn||Ze.toneMapping!==Jt||Ze.morphTargetsCount!==Fn)&&(Et=!0):(Et=!0,Ze.__version=ie.version);let qi=Ze.currentProgram;Et===!0&&(qi=Un(ie,$,te));let ar=!1,js=!1,Bo=!1;const Bt=qi.getUniforms(),An=Ze.uniforms;if(pe.useProgram(qi.program)&&(ar=!0,js=!0,Bo=!0),ie.id!==z&&(z=ie.id,js=!0),ar||G!==D){pe.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Bt.setValue(I,"projectionMatrix",D.projectionMatrix),Bt.setValue(I,"viewMatrix",D.matrixWorldInverse);const gs=Bt.map.cameraPosition;gs!==void 0&&gs.setValue(I,T.setFromMatrixPosition(D.matrixWorld)),ne.logarithmicDepthBuffer&&Bt.setValue(I,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Bt.setValue(I,"isOrthographic",D.isOrthographicCamera===!0),G!==D&&(G=D,js=!0,Bo=!0)}if(Ze.needsLights&&(gi.state.directionalShadowMap.length>0&&Bt.setValue(I,"directionalShadowMap",gi.state.directionalShadowMap,B),gi.state.spotShadowMap.length>0&&Bt.setValue(I,"spotShadowMap",gi.state.spotShadowMap,B),gi.state.pointShadowMap.length>0&&Bt.setValue(I,"pointShadowMap",gi.state.pointShadowMap,B)),te.isSkinnedMesh){Bt.setOptional(I,te,"bindMatrix"),Bt.setOptional(I,te,"bindMatrixInverse");const xn=te.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Bt.setValue(I,"boneTexture",xn.boneTexture,B))}te.isBatchedMesh&&(Bt.setOptional(I,te,"batchingTexture"),Bt.setValue(I,"batchingTexture",te._matricesTexture,B),Bt.setOptional(I,te,"batchingIdTexture"),Bt.setValue(I,"batchingIdTexture",te._indirectTexture,B),Bt.setOptional(I,te,"batchingColorTexture"),te._colorsTexture!==null&&Bt.setValue(I,"batchingColorTexture",te._colorsTexture,B));const ms=re.morphAttributes;if((ms.position!==void 0||ms.normal!==void 0||ms.color!==void 0)&&Le.update(te,re,qi),(js||Ze.receiveShadow!==te.receiveShadow)&&(Ze.receiveShadow=te.receiveShadow,Bt.setValue(I,"receiveShadow",te.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&$.environment!==null&&(An.envMapIntensity.value=$.environmentIntensity),An.dfgLUT!==void 0&&(An.dfgLUT.value=T3()),js&&(Bt.setValue(I,"toneMappingExposure",E.toneMappingExposure),Ze.needsLights&&dn(An,Bo),Ie&&ie.fog===!0&&He.refreshFogUniforms(An,Ie),He.refreshMaterialUniforms(An,ie,ge,me,C.state.transmissionRenderTarget[D.id]),Mu.upload(I,Gt(Ze),An,B)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Mu.upload(I,Gt(Ze),An,B),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Bt.setValue(I,"center",te.center),Bt.setValue(I,"modelViewMatrix",te.modelViewMatrix),Bt.setValue(I,"normalMatrix",te.normalMatrix),Bt.setValue(I,"modelMatrix",te.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const xn=ie.uniformsGroups;for(let gs=0,zo=xn.length;gs<zo;gs++){const l0=xn[gs];Oe.update(l0,qi),Oe.bind(l0,qi)}}return qi}function dn(D,$){D.ambientLightColor.needsUpdate=$,D.lightProbe.needsUpdate=$,D.directionalLights.needsUpdate=$,D.directionalLightShadows.needsUpdate=$,D.pointLights.needsUpdate=$,D.pointLightShadows.needsUpdate=$,D.spotLights.needsUpdate=$,D.spotLightShadows.needsUpdate=$,D.rectAreaLights.needsUpdate=$,D.hemisphereLights.needsUpdate=$}function fn(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(D,$,re){const ie=M.get(D);ie.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),M.get(D.texture).__webglTexture=$,M.get(D.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:re,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,$){const re=M.get(D);re.__webglFramebuffer=$,re.__useDefaultFramebuffer=$===void 0};const _n=I.createFramebuffer();this.setRenderTarget=function(D,$=0,re=0){V=D,U=$,L=re;let ie=null,te=!1,Ie=!1;if(D){const Ue=M.get(D);if(Ue.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(I.FRAMEBUFFER,Ue.__webglFramebuffer),X.copy(D.viewport),k.copy(D.scissor),K=D.scissorTest,pe.viewport(X),pe.scissor(k),pe.setScissorTest(K),z=-1;return}else if(Ue.__webglFramebuffer===void 0)B.setupRenderTarget(D);else if(Ue.__hasExternalTextures)B.rebindTextures(D,M.get(D.texture).__webglTexture,M.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const ut=D.depthTexture;if(Ue.__boundDepthTexture!==ut){if(ut!==null&&M.has(ut)&&(D.width!==ut.image.width||D.height!==ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(D)}}const je=D.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ie=!0);const $e=M.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray($e[$])?ie=$e[$][re]:ie=$e[$],te=!0):D.samples>0&&B.useMultisampledRTT(D)===!1?ie=M.get(D).__webglMultisampledFramebuffer:Array.isArray($e)?ie=$e[re]:ie=$e,X.copy(D.viewport),k.copy(D.scissor),K=D.scissorTest}else X.copy(J).multiplyScalar(ge).floor(),k.copy(fe).multiplyScalar(ge).floor(),K=oe;if(re!==0&&(ie=_n),pe.bindFramebuffer(I.FRAMEBUFFER,ie)&&pe.drawBuffers(D,ie),pe.viewport(X),pe.scissor(k),pe.setScissorTest(K),te){const Ue=M.get(D.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ue.__webglTexture,re)}else if(Ie){const Ue=$;for(let je=0;je<D.textures.length;je++){const $e=M.get(D.textures[je]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+je,$e.__webglTexture,re,Ue)}}else if(D!==null&&re!==0){const Ue=M.get(D.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ue.__webglTexture,re)}z=-1},this.readRenderTargetPixels=function(D,$,re,ie,te,Ie,ke,Ue=0){if(!(D&&D.isWebGLRenderTarget)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=M.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ke!==void 0&&(je=je[ke]),je){pe.bindFramebuffer(I.FRAMEBUFFER,je);try{const $e=D.textures[Ue],ut=$e.format,gt=$e.type;if(D.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ue),!ne.textureFormatReadable(ut)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(gt)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=D.width-ie&&re>=0&&re<=D.height-te&&I.readPixels($,re,ie,te,Ce.convert(ut),Ce.convert(gt),Ie)}finally{const $e=V!==null?M.get(V).__webglFramebuffer:null;pe.bindFramebuffer(I.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(D,$,re,ie,te,Ie,ke,Ue=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=M.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ke!==void 0&&(je=je[ke]),je)if($>=0&&$<=D.width-ie&&re>=0&&re<=D.height-te){pe.bindFramebuffer(I.FRAMEBUFFER,je);const $e=D.textures[Ue],ut=$e.format,gt=$e.type;if(D.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ue),!ne.textureFormatReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Je),I.bufferData(I.PIXEL_PACK_BUFFER,Ie.byteLength,I.STREAM_READ),I.readPixels($,re,ie,te,Ce.convert(ut),Ce.convert(gt),0);const Ft=V!==null?M.get(V).__webglFramebuffer:null;pe.bindFramebuffer(I.FRAMEBUFFER,Ft);const tn=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Zw(I,tn,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Je),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Ie),I.deleteBuffer(Je),I.deleteSync(tn),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,$=null,re=0){const ie=Math.pow(2,-re),te=Math.floor(D.image.width*ie),Ie=Math.floor(D.image.height*ie),ke=$!==null?$.x:0,Ue=$!==null?$.y:0;B.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,re,0,0,ke,Ue,te,Ie),pe.unbindTexture()};const Ir=I.createFramebuffer(),ko=I.createFramebuffer();this.copyTextureToTexture=function(D,$,re=null,ie=null,te=0,Ie=0){let ke,Ue,je,$e,ut,gt,Je,Ft,tn;const Jt=D.isCompressedTexture?D.mipmaps[Ie]:D.image;if(re!==null)ke=re.max.x-re.min.x,Ue=re.max.y-re.min.y,je=re.isBox3?re.max.z-re.min.z:1,$e=re.min.x,ut=re.min.y,gt=re.isBox3?re.min.z:0;else{const An=Math.pow(2,-te);ke=Math.floor(Jt.width*An),Ue=Math.floor(Jt.height*An),D.isDataArrayTexture?je=Jt.depth:D.isData3DTexture?je=Math.floor(Jt.depth*An):je=1,$e=0,ut=0,gt=0}ie!==null?(Je=ie.x,Ft=ie.y,tn=ie.z):(Je=0,Ft=0,tn=0);const Ot=Ce.convert($.format),Fn=Ce.convert($.type);let Ze;$.isData3DTexture?(B.setTexture3D($,0),Ze=I.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(B.setTexture2DArray($,0),Ze=I.TEXTURE_2D_ARRAY):(B.setTexture2D($,0),Ze=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,$.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,$.unpackAlignment);const gi=I.getParameter(I.UNPACK_ROW_LENGTH),Et=I.getParameter(I.UNPACK_IMAGE_HEIGHT),qi=I.getParameter(I.UNPACK_SKIP_PIXELS),ar=I.getParameter(I.UNPACK_SKIP_ROWS),js=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Jt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Jt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$e),I.pixelStorei(I.UNPACK_SKIP_ROWS,ut),I.pixelStorei(I.UNPACK_SKIP_IMAGES,gt);const Bo=D.isDataArrayTexture||D.isData3DTexture,Bt=$.isDataArrayTexture||$.isData3DTexture;if(D.isDepthTexture){const An=M.get(D),ms=M.get($),xn=M.get(An.__renderTarget),gs=M.get(ms.__renderTarget);pe.bindFramebuffer(I.READ_FRAMEBUFFER,xn.__webglFramebuffer),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,gs.__webglFramebuffer);for(let zo=0;zo<je;zo++)Bo&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,M.get(D).__webglTexture,te,gt+zo),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,M.get($).__webglTexture,Ie,tn+zo)),I.blitFramebuffer($e,ut,ke,Ue,Je,Ft,ke,Ue,I.DEPTH_BUFFER_BIT,I.NEAREST);pe.bindFramebuffer(I.READ_FRAMEBUFFER,null),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(te!==0||D.isRenderTargetTexture||M.has(D)){const An=M.get(D),ms=M.get($);pe.bindFramebuffer(I.READ_FRAMEBUFFER,Ir),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,ko);for(let xn=0;xn<je;xn++)Bo?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,An.__webglTexture,te,gt+xn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,An.__webglTexture,te),Bt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ms.__webglTexture,Ie,tn+xn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ms.__webglTexture,Ie),te!==0?I.blitFramebuffer($e,ut,ke,Ue,Je,Ft,ke,Ue,I.COLOR_BUFFER_BIT,I.NEAREST):Bt?I.copyTexSubImage3D(Ze,Ie,Je,Ft,tn+xn,$e,ut,ke,Ue):I.copyTexSubImage2D(Ze,Ie,Je,Ft,$e,ut,ke,Ue);pe.bindFramebuffer(I.READ_FRAMEBUFFER,null),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Bt?D.isDataTexture||D.isData3DTexture?I.texSubImage3D(Ze,Ie,Je,Ft,tn,ke,Ue,je,Ot,Fn,Jt.data):$.isCompressedArrayTexture?I.compressedTexSubImage3D(Ze,Ie,Je,Ft,tn,ke,Ue,je,Ot,Jt.data):I.texSubImage3D(Ze,Ie,Je,Ft,tn,ke,Ue,je,Ot,Fn,Jt):D.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Ie,Je,Ft,ke,Ue,Ot,Fn,Jt.data):D.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Ie,Je,Ft,Jt.width,Jt.height,Ot,Jt.data):I.texSubImage2D(I.TEXTURE_2D,Ie,Je,Ft,ke,Ue,Ot,Fn,Jt);I.pixelStorei(I.UNPACK_ROW_LENGTH,gi),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Et),I.pixelStorei(I.UNPACK_SKIP_PIXELS,qi),I.pixelStorei(I.UNPACK_SKIP_ROWS,ar),I.pixelStorei(I.UNPACK_SKIP_IMAGES,js),Ie===0&&$.generateMipmaps&&I.generateMipmap(Ze),pe.unbindTexture()},this.initRenderTarget=function(D){M.get(D).__webglFramebuffer===void 0&&B.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?B.setTextureCube(D,0):D.isData3DTexture?B.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?B.setTexture2DArray(D,0):B.setTexture2D(D,0),pe.unbindTexture()},this.resetState=function(){U=0,L=0,V=null,pe.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}function C3(n,e=50){const t=new Map;let i=null;const r=o=>{try{return JSON.stringify(o)}catch{return String(o)}},s=(...o)=>{const a=r(o);if(t.has(a))return t.get(a);const l=n(...o);return t.set(a,l),i&&clearTimeout(i),i=setTimeout(()=>{t.clear(),i=null},e),l};return s.cancel=()=>{i&&(clearTimeout(i),i=null),t.clear()},s}const Cf=9,R3=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,P3={__name:"Blob3DBackground",setup(n,{expose:e}){const t=Fe(null);let i=null;const r={sampleScreenPixel:null,samplePoints:null},s=C3((p,g)=>{var E;if(!l||!d)return null;const x=(E=t.value)==null?void 0:E.getBoundingClientRect();if(!x)return null;const S=Math.round((p-x.left)*l.getPixelRatio()),v=Math.round((g-x.top)*l.getPixelRatio()),C=Math.round(x.width*l.getPixelRatio()),R=Math.round(x.height*l.getPixelRatio());if(S<0||v<0||S>=C||v>=R)return null;const A=l.getContext(),y=new Uint8Array(4);return A.readPixels(S,R-v-1,1,1,A.RGBA,A.UNSIGNED_BYTE,y),{r:y[0],g:y[1],b:y[2],a:y[3]}},50),o=(p,g,x,S)=>{var z;if(!l||!d)return null;const v=(z=t.value)==null?void 0:z.getBoundingClientRect();if(!v)return null;const C=l.getPixelRatio(),R=Math.round(v.width*C),A=Math.round(v.height*C);let y=Math.floor((p-v.left)*C),E=Math.floor((g-v.top)*C),N=Math.ceil(x*C),U=Math.ceil(S*C);if(y<0&&(N+=y,y=0),E<0&&(U+=E,E=0),N=Math.min(N,R-y),U=Math.min(U,A-E),N<=0||U<=0)return null;const L=N*U*4;(!i||i.length<L)&&(i=new Uint8Array(L));const V=l.getContext();return V.readPixels(y,A-(E+U),N,U,V.RGBA,V.UNSIGNED_BYTE,i),{data:i,px:y,py:E,pw:N,ph:U,ratio:C,left:v.left,top:v.top}},a=p=>{if(!p||p.length===0)return[];let g=1/0,x=1/0,S=-1/0,v=-1/0;for(const G of p)G.x<g&&(g=G.x),G.x>S&&(S=G.x),G.y<x&&(x=G.y),G.y>v&&(v=G.y);const C=o(g,x,S-g+1,v-x+1);if(!C)return p.map(()=>null);const{data:R,px:A,py:y,pw:E,ph:N,ratio:U,left:L,top:V}=C,z=new Array(p.length);for(let G=0;G<p.length;G++){const X=Math.floor((p[G].x-L)*U),k=Math.floor((p[G].y-V)*U);if(X<A||X>=A+E||k<y||k>=y+N){z[G]=null;continue}const j=((y+N-1-k)*E+(X-A))*4;z[G]={r:R[j],g:R[j+1],b:R[j+2],a:R[j+3]}}return z};r.sampleScreenPixel=s,r.samplePoints=a,window.__blobSampler=r,e({sampleScreenPixel:s,samplePoints:a});let l=null,c=null,u=null,d=null,f=null,h=[];function m(p,g){const x=getComputedStyle(document.documentElement).getPropertyValue(p).trim();if(!x)return g;const S=x.split(/\s+/).map(Number);return S.length<3||S.some(Number.isNaN)?g:new se(S[0]/255,S[1]/255,S[2]/255)}const _=`
  precision highp float;

  varying vec2 vUv;

  uniform vec2  uResolution;
  uniform float uTime;
  uniform float uScroll;
  uniform vec2  uMouse;
  uniform vec2  uMouseDir;
  uniform float uMouseStrength;
  uniform vec3  uBallPos[${Cf}];
  uniform float uBallRadius[${Cf}];
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
    for (int i = 1; i < ${Cf}; i++) {
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
`;return Tn(()=>{const p=t.value,g=p.clientWidth,x=p.clientHeight;l=new A3({antialias:!1,alpha:!0,preserveDrawingBuffer:!0}),l.setSize(g,x),l.setPixelRatio(Math.min(window.devicePixelRatio,1)),p.appendChild(l.domElement),c=new hE,u=new r0(-1,1,1,-1,0,1);const S=[{base:[-3.4,1.4,-.5],amp:[2.4,2,1.3],spd:[.13,.089,.061],ph:[0,1.7,3.4],r:2.6},{base:[3.6,-1.2,.4],amp:[2.2,2.3,1.2],spd:[.101,.127,.073],ph:[2.1,.4,5.2],r:2.3},{base:[-.8,-2.6,-1.1],amp:[2.6,1.9,1.5],spd:[.083,.113,.055],ph:[4.3,2.9,1.1],r:1.95},{base:[1.9,2.6,-.8],amp:[2,2.1,1.1],spd:[.119,.067,.091],ph:[1.2,5.1,2.7],r:1.5},{base:[-4.1,-1.9,.7],amp:[1.8,2.2,1.4],spd:[.071,.103,.047],ph:[3.8,1.5,4.6],r:1.25},{base:[4.2,1.8,-1.4],amp:[2.1,1.8,1.6],spd:[.109,.079,.121],ph:[5.5,3.2,.8],r:1.1},{base:[.4,3.3,.3],amp:[2.3,1.5,1.2],spd:[.059,.131,.085],ph:[2.6,4.8,3.9],r:.75},{base:[-2.1,2.9,-1.7],amp:[1.9,2,1.3],spd:[.127,.053,.097],ph:[.7,2.3,5.8],r:.58},{base:[1.4,-3.2,-.3],amp:[2.2,1.7,1.5],spd:[.093,.117,.065],ph:[4.9,.9,2.2],r:.45}],v=S.map(()=>new se),C=S.map(oe=>oe.r),R=new se(.06,.73,.51),A=new se(.02,.47,.34),y=new se(.02,.31,.23),E=new se(.2,.83,.6);d=new or({vertexShader:R3,fragmentShader:_,transparent:!0,depthWrite:!1,uniforms:{uResolution:{value:new St(g,x)},uTime:{value:0},uScroll:{value:0},uMouse:{value:new St(0,0)},uMouseDir:{value:new St(1,0)},uMouseStrength:{value:0},uBallPos:{value:v},uBallRadius:{value:C},uColorA:{value:R.clone()},uColorB:{value:A.clone()},uColorC:{value:y.clone()},uColorHi:{value:E.clone()}}});const N=new Lr(new pc(2,2),d);N.frustumCulled=!1,c.add(N);const U=()=>{d.uniforms.uColorA.value.copy(m("--color-primary-500",R)),d.uniforms.uColorB.value.copy(m("--color-primary-700",A)),d.uniforms.uColorC.value.copy(m("--color-primary-900",y)),d.uniforms.uColorHi.value.copy(m("--color-primary-400",E))};U(),window.addEventListener("colorpalettechange",U);const L=new St(0,0),V=new St(0,0),z=new St(1,0);let G=0,X=!1;const k=oe=>{const Re=oe.clientX/window.innerWidth*2-1,Ae=-(oe.clientY/window.innerHeight*2-1),le=Re-V.x,w=Ae-V.y,T=Math.hypot(le,w);if(T>8e-4){z.x+=(le/T-z.x)*.25,z.y+=(w/T-z.y)*.25;const H=Math.hypot(z.x,z.y)||1;z.x/=H,z.y/=H,G=Math.min(1,G+T*7)}V.set(Re,Ae),L.set(Re,Ae),X=!0},K=()=>{X=!1},j=oe=>{if(oe.touches.length>0){const Re=oe.touches[0],Ae=Re.clientX/window.innerWidth*2-1,le=-(Re.clientY/window.innerHeight*2-1);V.set(Ae,le),L.set(Ae,le),X=!0}},F=oe=>{if(oe.touches.length>0){const Re=oe.touches[0],Ae=Re.clientX/window.innerWidth*2-1,le=-(Re.clientY/window.innerHeight*2-1),w=Ae-V.x,T=le-V.y,H=Math.hypot(w,T);if(H>8e-4){z.x+=(w/H-z.x)*.25,z.y+=(T/H-z.y)*.25;const ee=Math.hypot(z.x,z.y)||1;z.x/=ee,z.y/=ee,G=Math.min(1,G+H*7)}V.set(Ae,le),L.set(Ae,le),X=!0}},ce=()=>{X=!1};window.addEventListener("mousemove",k,{passive:!0}),document.addEventListener("mouseleave",K),window.addEventListener("touchstart",j,{passive:!0}),window.addEventListener("touchmove",F,{passive:!0}),window.addEventListener("touchend",ce,{passive:!0});let me=!0,ge=0;const ve=()=>{ge=Math.min(1,window.scrollY/window.innerHeight);const oe=me;me=ge<.95,oe&&!me?(cancelAnimationFrame(f),f=null):!oe&&me&&fe()};window.addEventListener("scroll",ve,{passive:!0});const Te=()=>{const oe=p.clientWidth,Re=p.clientHeight;l.setSize(oe,Re),d.uniforms.uResolution.value.set(oe*l.getPixelRatio(),Re*l.getPixelRatio())};Te(),window.addEventListener("resize",Te);const J=performance.now(),fe=()=>{if(f=requestAnimationFrame(fe),!me)return;const oe=(performance.now()-J)/1e3,Re=d.uniforms.uScroll.value;d.uniforms.uScroll.value=Re+(ge-Re)*.08;const Ae=d.uniforms.uScroll.value,le=d.uniforms.uMouse.value;le.x+=(L.x-le.x)*.1,le.y+=(L.y-le.y)*.1,G*=.93;const w=X?.3+G*.85:0,T=d.uniforms.uMouseStrength;T.value+=(w-T.value)*.12;const H=d.uniforms.uMouseDir.value;H.x+=(z.x-H.x)*.1,H.y+=(z.y-H.y)*.1;const ee=Math.hypot(H.x,H.y)||1;H.x/=ee,H.y/=ee;for(let Y=0;Y<S.length;Y++){const O=S[Y],I=1+Ae*1.1,_e=1-Ae*.25,he=1.55;v[Y].set((O.base[0]+Math.sin(oe*O.spd[0]*he+O.ph[0])*O.amp[0])*I,(O.base[1]+Math.sin(oe*O.spd[1]*he+O.ph[1])*O.amp[1])*_e-Ae*1.6,O.base[2]+Math.cos(oe*O.spd[2]*he+O.ph[2])*O.amp[2]-Ae*1.2),C[Y]=O.r*(1+Math.sin(oe*(.055+Y*.009)+Y*1.9)*.16)*(1-Ae*.15);const ne=le.x*3.6,pe=le.y*2.3,P=ne-v[Y].x,M=pe-v[Y].y,B=Math.hypot(P,M),Z=C[Y]+.9;if(B<Z){const q=(1-B/Z)*T.value*.1;v[Y].x+=H.x*q,v[Y].y+=H.y*q}}d.uniforms.uTime.value=oe,l.render(c,u)};ve(),me&&fe(),h.push(()=>{cancelAnimationFrame(f),window.removeEventListener("scroll",ve),window.removeEventListener("resize",Te),window.removeEventListener("mousemove",k),document.removeEventListener("mouseleave",K),window.removeEventListener("touchstart",j),window.removeEventListener("touchmove",F),window.removeEventListener("touchend",ce),window.removeEventListener("colorpalettechange",U),N.geometry.dispose(),d.dispose(),l.dispose(),l.domElement.parentNode&&l.domElement.parentNode.removeChild(l.domElement)})}),In(()=>{h.forEach(p=>p())}),(p,g)=>(ae(),ue("div",{ref_key:"containerRef",ref:t,class:"absolute inset-0 overflow-hidden pointer-events-none"},null,512))}},Wa=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},D3={class:"text-primary-500 light:text-primary-600"},L3={__name:"HeroSection",setup(n){Xe.registerPlugin(ot);const e=Fe(""),t=Fe(0),i=Fe(!1),r=["Frontend Developer","Vue.js Specialist","UI/UX Enthusiast","Problem Solver"];let s=null,o=null,a=[],l=null;const c=Fe(null),u=Fe(null),d=Fe(null),f=Fe(null),h=Fe(null),m=Fe(null),_=Fe(null),p=Fe(null),g=()=>{const x=r[t.value],S=e.value.length;if(i.value){if(e.value=x.substring(0,S-1),S===0){i.value=!1,t.value=(t.value+1)%r.length,s=setTimeout(g,500);return}s=setTimeout(g,50)}else{if(e.value=x.substring(0,S+1),S===x.length){i.value=!0,s=setTimeout(g,2e3);return}s=setTimeout(g,100)}};return Tn(()=>{s=setTimeout(g,500),o=Xe.timeline({defaults:{ease:"power3.out"}}),o.fromTo(c.value,{opacity:0,y:30,filter:"blur(8px)"},{opacity:1,y:0,filter:"blur(0px)",clearProps:"filter",duration:.8}).fromTo(u.value,{opacity:0,y:50,filter:"blur(12px)"},{opacity:1,y:0,filter:"blur(0px)",clearProps:"filter",duration:1.1},"-=0.4").fromTo(d.value,{opacity:0,y:50,filter:"blur(12px)"},{opacity:1,y:0,filter:"blur(0px)",clearProps:"filter",duration:1.1},"-=0.6").fromTo(f.value,{opacity:0,y:40,filter:"blur(10px)"},{opacity:1,y:0,filter:"blur(0px)",clearProps:"filter",duration:1},"-=0.5").fromTo(h.value,{opacity:0,y:30,filter:"blur(8px)"},{opacity:1,y:0,filter:"blur(0px)",clearProps:"filter",duration:.8,stagger:.15},"-=0.5");const x=u.value,S=14,v=R=>{const A=x.getBoundingClientRect(),y=(R.clientX-A.left)/A.width-.5,E=(R.clientY-A.top)/A.height-.5;l&&l.kill(),l=Xe.to(x,{rotationY:y*S*2,rotationX:-E*S*2,transformPerspective:600,transformOrigin:"center center",duration:.4,ease:"power2.out"})},C=()=>{l&&l.kill(),l=Xe.to(x,{rotationX:0,rotationY:0,duration:.8,ease:"elastic.out(1, 0.4)"})};x.addEventListener("mousemove",v),x.addEventListener("mouseleave",C),a.push(()=>{x.removeEventListener("mousemove",v),x.removeEventListener("mouseleave",C)})}),In(()=>{clearTimeout(s),o&&o.kill(),a.forEach(x=>x())}),(x,S)=>(ae(),ue("section",{ref_key:"heroSectionRef",ref:_,id:"home",class:"relative h-screen flex items-center justify-center overflow-hidden"},[S[3]||(S[3]=b("div",{class:"absolute inset-0 bg-grid opacity-20"},null,-1)),Ct(P3),b("div",{ref_key:"contentRef",ref:m,class:"relative text-center px-4 sm:px-6 lg:px-8 mx-auto"},[b("p",{ref_key:"greetingRef",ref:c,class:"text-primary-400 tracking-widest text-sm mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] light:drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"}," PORTFOLIO ",512),b("h1",{ref_key:"nameRef",ref:u,class:"font-griaste text-5xl sm:text-6xl md:text-7xl text-white light:text-secondary-900 mb-4 foil-text name-glow"}," Kenneth Cortez ",512),b("h2",{ref_key:"roleRef",ref:d,class:"text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary-300 light:text-secondary-800 mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] light:drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"},[S[0]||(S[0]=Mi(" I'm a ",-1)),b("span",D3,ye(e.value),1),S[1]||(S[1]=b("span",{class:"animate-pulse text-primary-500 light:text-primary-600"},"|",-1))],512),b("p",{ref_key:"descriptionRef",ref:f,class:"light:text-black text-white text-lg mb-8 max-w-2xl mx-auto"}," I build modern, responsive web applications. In every project, creating a seamless user experience is my primary focus. ",512),b("div",{ref_key:"buttonsRef",ref:h,class:"flex flex-col sm:flex-row items-center justify-center gap-4"},[S[2]||(S[2]=b("a",{href:"#projects",class:"bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25 w-full sm:w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] light:drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"}," View My Work ",-1)),b("a",{ref_key:"resumeBtnRef",ref:p,href:"https://docs.google.com/document/d/1pxuH9Ue2NJ18GnzGR44gVKfEIvoe9YvMHj26P7A0RDY/edit?usp=sharing",target:"_blank",class:"resume-btn light:text-primary-800 light:border-primary-800 relative border border-white text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"}," MY RESUME ",512)],512)],512)],512))}},I3=Wa(L3,[["__scopeId","data-v-c14f03b3"]]),U3={class:"about-stage-1 absolute top-[2%] bottom-6 left-8 sm:left-12 lg:left-14 right-4 sm:right-6 lg:right-8 flex flex-col justify-center gap-2 sm:gap-4"},N3={class:"about-title section-title"},F3={class:"whitespace-nowrap"},O3={class:"whitespace-nowrap"},k3={class:"about-skills flex flex-wrap gap-3"},B3={class:"about-stat-title section-title"},z3=["data-count"],V3={class:"whitespace-nowrap text-7xl"},H3={class:"about-stat-subtext text-secondary-300 light:text-secondary-700 leading-relaxed text-lg sm:text-xl md:text-2xl font-light"},G3={class:"whitespace-nowrap"},W3={__name:"AboutSection",setup(n){Xe.registerPlugin(ot);const e=Fe(null),t=Fe(null);let i=null;const r=["Vue 3","JavaScript","TypeScript","Node.js","Tailwind CSS","Git","Figma"],s=[{text:"I build modern web applications that are as functional as they are beautiful. What started as a curiosity about the web has evolved into a career creating impactful digital products.",size:"text-base sm:text-xl md:text-2xl font-light"},{text:"I specialize in the Vue.js ecosystem but I'm able to adjust to any framework, always prioritizing clean, maintainable code and highly intuitive user experiences.",size:"text-base sm:text-xl md:text-2xl font-light"}],o=[{title:"Years Work Experience",count:4,subtext:"Specializing in building modern, responsive frontend applications with a focus on clean, maintainable code and seamless user experiences."},{title:"Projects Delivered",count:50,subtext:"Scalable, Maintainable and user friendly designs"},{title:"Creative Designer",count:null,subtext:"Crafting intuitive interfaces that blend aesthetics with functionality"},{title:"Continuous Learner",count:null,subtext:"Always exploring new technologies and pushing the boundaries of what's possible"}],a=d=>!d||typeof d!="string"?[]:d.trim().split(/\s+/).map((f,h)=>({id:`word-${h}`,letters:f.split("").map((m,_)=>({char:m,id:`${h}-${_}-${m}`}))})),l=a("About Me"),c=s.map(d=>({...d,words:a(d.text)})),u=o.map(d=>({...d,titleWords:d.count!==null?a("+ "+d.title):a(d.title),subtextWords:a(d.subtext)}));return Tn(()=>{const d=t.value.querySelector(".about-title"),f=t.value.querySelectorAll(".about-paragraph-first"),h=t.value.querySelectorAll(".about-skills"),m=t.value.querySelector(".about-progress"),_=d?d.querySelectorAll(".about-letter"):[],p=t.value.querySelectorAll(".about-stat-stage"),g=t.value.querySelectorAll(".about-count");if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){Xe.set(d,{opacity:1,y:0}),Xe.set(f,{y:0,opacity:1}),Xe.set(h,{y:0,opacity:1}),Xe.set(p,{y:0,opacity:1}),Xe.set(m,{scaleX:1}),g.forEach(x=>{x.textContent=x.dataset.count});return}Xe.set(_,{y:30,opacity:0,filter:"blur(4px)"}),Xe.set(t.value.querySelectorAll(".about-paragraph-first .about-letter"),{y:30,opacity:0,filter:"blur(4px)"}),Xe.set(h,{y:"100vh",opacity:0}),Xe.set(p,{opacity:0}),p.forEach(x=>{Xe.set(x.querySelectorAll(".about-letter"),{y:30,opacity:0,filter:"blur(4px)"});const S=x.querySelector(".about-count");S&&Xe.set(S,{y:30,opacity:0})}),Xe.set(m,{scaleX:0,transformOrigin:"left center"}),i=Xe.timeline({scrollTrigger:{trigger:e.value,start:"top top",end:"+=1200%",pin:!0,scrub:1,anticipatePin:1,onUpdate:x=>{Xe.set(m,{scaleX:x.progress})},snap:{snapTo:"labels",duration:{min:.2,max:.5},delay:.1,ease:"power2.inOut"},onToggle:x=>{const S=Lo();S&&(x.isActive?S.stop():S.start())}}}),i.to(_,{y:0,opacity:1,filter:"blur(0px)",duration:.3,stagger:.02,ease:"power2.out"}),f.forEach(x=>{const S=x.querySelectorAll(".about-letter");i.to(S,{y:0,opacity:1,filter:"blur(0px)",duration:.3,stagger:.025,ease:"power2.out"})}),i.to(h,{y:0,opacity:1,duration:.225,ease:"power2.out"}),i.add("stage-1"),i.to(t.value.querySelector(".about-stage-1"),{opacity:0,duration:.6,ease:"power2.in"},"+=0.2"),p.forEach((x,S)=>{const v=x.querySelectorAll(".about-stat-title .about-letter"),C=x.querySelectorAll(".about-stat-subtext .about-letter"),R=x.querySelector(".about-count");if(i.to(x,{opacity:1,duration:.1,ease:"none"}),i.to(v,{y:0,opacity:1,filter:"blur(0px)",duration:.3,stagger:.02,ease:"power2.out"}),R){i.to(R,{y:0,opacity:1,duration:.3,ease:"power2.out"});const A=parseInt(R.dataset.count),y={val:0};i.to(y,{val:A,duration:.5,ease:"power2.out",onUpdate:()=>{R.textContent=Math.round(y.val)}})}i.to(C,{y:0,opacity:1,filter:"blur(0px)",duration:.3,stagger:.02,ease:"power2.out"}),i.add(`stat-${S}`),S<p.length-1&&i.to(x,{opacity:0,duration:.6,ease:"power2.in"},"+=0.2")})}),In(()=>{var f;const d=Lo();d&&d.start(),i&&((f=i.scrollTrigger)==null||f.kill(),i.kill())}),(d,f)=>(ae(),ue("section",{ref_key:"sectionRef",ref:e,id:"about",class:"relative h-screen pt-24 sm:pt-24 md:pt-32 z-10"},[f[3]||(f[3]=ho('<svg width="0" height="0" class="absolute" aria-hidden="true" data-v-e2ece6b6><defs data-v-e2ece6b6><clipPath id="about-concave-clip" clipPathUnits="objectBoundingBox" data-v-e2ece6b6><path d="M0 0 Q0.5 0.2 1 0 L1 1 L0 1 Z" data-v-e2ece6b6></path></clipPath></defs></svg><div class="absolute -top-24 sm:-top-24 md:-top-32 left-0 right-0 bottom-0 bg-dark-800 light:bg-white" style="clip-path:url(#about-concave-clip);" data-v-e2ece6b6></div><svg class="absolute -top-24 sm:-top-24 md:-top-32 left-0 w-full h-[calc(100%+6rem)] sm:h-[calc(100%+6rem)] md:h-[calc(100%+8rem)] pointer-events-none" viewBox="0 0 1 1" preserveAspectRatio="none" aria-hidden="true" data-v-e2ece6b6><path d="M0 0 Q0.5 0.2 1 0" fill="none" stroke="rgb(var(--color-primary-500) / 0.4)" stroke-width="0.002" vector-effect="non-scaling-stroke" data-v-e2ece6b6></path></svg>',3)),b("div",{ref_key:"contentRef",ref:t,class:"relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full"},[f[1]||(f[1]=b("div",{class:"absolute left-4 sm:left-6 lg:left-8 top-[12%] bottom-[6%] w-px bg-primary-500/30"},null,-1)),b("div",U3,[b("h2",N3,[(ae(!0),ue(We,null,tt(mt(l),(h,m)=>(ae(),ue(We,{key:h.id},[b("span",F3,[(ae(!0),ue(We,null,tt(h.letters,_=>(ae(),ue("span",{key:_.id,class:"about-letter inline-block will-change-transform"},ye(_.char),1))),128))]),Mi(ye(m<mt(l).length-1?" ":""),1)],64))),128))]),(ae(!0),ue(We,null,tt(mt(c),(h,m)=>(ae(),ue("p",{key:`first-${m}`,class:ct(["about-paragraph-first text-secondary-300 light:text-secondary-700 leading-relaxed",h.size])},[(ae(!0),ue(We,null,tt(h.words,(_,p)=>(ae(),ue(We,{key:_.id},[b("span",O3,[(ae(!0),ue(We,null,tt(_.letters,g=>(ae(),ue("span",{key:g.id,class:"about-letter inline-block will-change-transform"},ye(g.char),1))),128))]),Mi(ye(p<h.words.length-1?" ":""),1)],64))),128))],2))),128)),b("div",k3,[(ae(),ue(We,null,tt(r,h=>b("span",{key:h,class:"px-4 py-2 bg-secondary-800/50 border border-secondary-700 rounded-full text-sm text-secondary-300 hover:border-primary-500/50 hover:text-primary-400 light:bg-secondary-100 light:border-secondary-200 light:text-secondary-600 light:hover:border-primary-500/50 light:hover:text-primary-600 transition-all duration-300 hover:scale-105 cursor-default"},ye(h),1)),64))])]),(ae(!0),ue(We,null,tt(mt(u),(h,m)=>(ae(),ue("div",{key:`stat-${m}`,class:"about-stat-stage absolute top-[20%] bottom-6 left-8 sm:left-12 lg:left-14 right-4 sm:right-6 lg:right-8 flex flex-col justify-start gap-4 sm:gap-6"},[b("h2",B3,[h.count!==null?(ae(),ue(We,{key:0},[b("span",{class:"about-count inline-block tabular-nums text-left text-primary-500 light:text-primary-600 text-9xl","data-count":h.count,style:Mn({minWidth:`${String(h.count).length}ch`})},"0",12,z3),f[0]||(f[0]=Mi(" "+ye(" "),-1))],64)):Rn("",!0),(ae(!0),ue(We,null,tt(h.titleWords,(_,p)=>(ae(),ue(We,{key:_.id},[b("span",V3,[(ae(!0),ue(We,null,tt(_.letters,g=>(ae(),ue("span",{key:g.id,class:"about-letter inline-block will-change-transform"},ye(g.char),1))),128))]),Mi(ye(p<h.titleWords.length-1?" ":""),1)],64))),128))]),b("p",H3,[(ae(!0),ue(We,null,tt(h.subtextWords,(_,p)=>(ae(),ue(We,{key:_.id},[b("span",G3,[(ae(!0),ue(We,null,tt(_.letters,g=>(ae(),ue("span",{key:g.id,class:"about-letter inline-block will-change-transform"},ye(g.char),1))),128))]),Mi(ye(p<h.subtextWords.length-1?" ":""),1)],64))),128))])]))),128)),f[2]||(f[2]=b("div",{class:"absolute bottom-0 left-0 right-0 h-1 bg-secondary-700/30 light:bg-secondary-200"},[b("div",{class:"about-progress rounded-full h-full bg-primary-500"})],-1))],512)],512))}},X3=Wa(W3,[["__scopeId","data-v-e2ece6b6"]]),Rf=[{name:"Vue.js",category:"Frontend",description:"Progressive JavaScript framework for building user interfaces",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"},{name:"TypeScript",category:"Language",description:"Typed superset of JavaScript for safer code",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},{name:"JavaScript",category:"Language",description:"High-level programming language for the web",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},{name:"Node.js",category:"Backend",description:"JavaScript runtime for building server-side applications",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},{name:"Tailwind CSS",category:"Styling",description:"Utility-first CSS framework for rapid UI development",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"},{name:"Vite",category:"Tooling",description:"Next-generation frontend build tool",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg"},{name:"GitHub",category:"DevOps",description:"Platform for version control and collaboration",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},{name:"GitHub Desktop",category:"Tooling",description:"Visual interface for Git version control",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},{name:"Pinia",category:"Frontend",description:"State management library for Vue.js",image:"https://pinia.vuejs.org/logo.svg"},{name:"Three.js",category:"Frontend",description:"3D graphics library for the web",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"},{name:"GSAP",category:"Frontend",description:"High-performance animation library",image:"https://gsap.com/favicon.ico"},{name:"Lucide",category:"Frontend",description:"Beautiful & consistent icon toolkit",image:"https://lucide.dev/favicon.ico"},{name:"Axios",category:"Backend",description:"Promise-based HTTP client for the browser and Node.js",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg"},{name:"shadcn/ui",category:"Frontend",description:"Reusable components built with Radix UI and Tailwind",image:"https://ui.shadcn.com/favicon.ico"},{name:"Python",category:"Language",description:"Versatile programming language for data and automation",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},{name:"Jupyter Notebook",category:"Tooling",description:"Interactive computing environment for data science",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"},{name:"Google Colab",category:"Tooling",description:"Free cloud-based Jupyter notebook environment",image:"https://colab.research.google.com/img/colab_favicon_256px.png"},{name:"VS Code",category:"Tooling",description:"Powerful code editor with rich extension ecosystem",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"},{name:"Figma",category:"Design",description:"Collaborative interface design tool for prototyping and UI/UX",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"}];/*!
 * ScrollToPlugin 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Wn,Xv,is,Mr,ks,$v,Ca,iu,jv=function(){return typeof window<"u"},Yv=function(){return Wn||jv()&&(Wn=window.gsap)&&Wn.registerPlugin&&Wn},qv=function(e){return typeof e=="string"},Eg=function(e){return typeof e=="function"},rc=function(e,t){var i=t==="x"?"Width":"Height",r="scroll"+i,s="client"+i;return e===is||e===Mr||e===ks?Math.max(Mr[r],ks[r])-(is["inner"+i]||Mr[s]||ks[s]):e[r]-e["offset"+i]},sc=function(e,t){var i="scroll"+(t==="x"?"Left":"Top");return e===is&&(e.pageXOffset!=null?i="page"+t.toUpperCase()+"Offset":e=Mr[i]!=null?Mr:ks),function(){return e[i]}},$3=function(e,t,i,r){if(Eg(e)&&(e=e(t,i,r)),typeof e!="object")return qv(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s={},o;for(o in e)s[o]=o!=="onAutoKill"&&Eg(e[o])?e[o](t,i,r):e[o];return s},Kv=function(e,t){if(e=$v(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var i=e.getBoundingClientRect(),r=!t||t===is||t===ks,s=r?{top:Mr.clientTop-(is.pageYOffset||Mr.scrollTop||ks.scrollTop||0),left:Mr.clientLeft-(is.pageXOffset||Mr.scrollLeft||ks.scrollLeft||0)}:t.getBoundingClientRect(),o={x:i.left-s.left,y:i.top-s.top};return!r&&t&&(o.x+=sc(t,"x")(),o.y+=sc(t,"y")()),o},Tg=function(e,t,i,r,s){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-s:qv(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+r-s:e==="max"?rc(t,i)-s:Math.min(rc(t,i),Kv(e,t)[i]-s)},op=function(){Wn=Yv(),jv()&&Wn&&typeof document<"u"&&document.body&&(is=window,ks=document.body,Mr=document.documentElement,$v=Wn.utils.toArray,Wn.config({autoKillThreshold:7}),Ca=Wn.config(),Xv=1)},Xa={version:"3.15.0",name:"scrollTo",rawVars:1,register:function(e){Wn=e,op()},init:function(e,t,i,r,s){Xv||op();var o=this,a=Wn.getProperty(e,"scrollSnapType");o.isWin=e===is,o.target=e,o.tween=i,t=$3(t,r,e,s),o.vars=t,o.autoKill=!!("autoKill"in t?t:Ca).autoKill,o.getX=sc(e,"x"),o.getY=sc(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),iu||(iu=Wn.core.globals().ScrollTrigger),Wn.getProperty(e,"scrollBehavior")==="smooth"&&Wn.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,Tg(t.x,e,"x",o.x,t.offsetX||0),r,s),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,Tg(t.y,e,"y",o.y,t.offsetY||0),r,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var i=t._pt,r=t.target,s=t.tween,o=t.autoKill,a=t.xPrev,l=t.yPrev,c=t.isWin,u=t.snap,d=t.snapInline,f,h,m,_,p;i;)i.r(e,i.d),i=i._next;f=c||!t.skipX?t.getX():a,h=c||!t.skipY?t.getY():l,m=h-l,_=f-a,p=Ca.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(_>p||_<-p)&&f<rc(r,"x")&&(t.skipX=1),!t.skipY&&(m>p||m<-p)&&h<rc(r,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(s.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(s,t.vars.onAutoKillParams||[]))),c?is.scrollTo(t.skipX?f:t.x,t.skipY?h:t.y):(t.skipY||(r.scrollTop=t.y),t.skipX||(r.scrollLeft=t.x)),u&&(e===1||e===0)&&(h=r.scrollTop,f=r.scrollLeft,d?r.style.scrollSnapType=d:r.style.removeProperty("scroll-snap-type"),r.scrollTop=h+1,r.scrollLeft=f+1,r.scrollTop=h,r.scrollLeft=f),t.xPrev=t.x,t.yPrev=t.y,iu&&iu.update()},kill:function(e){var t=e==="scrollTo",i=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),i>-1&&this._props.splice(i,1),!this._props.length}};Xa.max=rc;Xa.getOffset=Kv;Xa.buildGetter=sc;Xa.config=function(n){Ca||op()||(Ca=Wn.config());for(var e in n)Ca[e]=n[e]};Yv()&&Wn.registerPlugin(Xa);Xe.registerPlugin(ot,Xa);function s0(n,e={}){const{y:t=60,duration:i=1.2,stagger:r=.12,start:s="top 85%",blur:o=12,scale:a=1.05,ease:l="power3.out",delay:c=0,onComplete:u}=e;Xe.set(n,{opacity:0,y:t,scale:a,filter:`blur(${o}px)`,willChange:"transform, opacity, filter"});const f=Xe.to(n,{opacity:1,y:0,scale:1,filter:"blur(0px)",duration:i,stagger:r,delay:c,ease:l,scrollTrigger:{trigger:n,start:s,once:!0},onComplete:u}).scrollTrigger;return Array.isArray(f)?f:[f]}function o0(n,e={}){const{x:t=-120,opacity:i=1,start:r="top 90%",end:s="top 40%",stagger:o=0,blur:a=0}=e;Xe.set(n,{x:t,opacity:0,filter:a?`blur(${a}px)`:"blur(0px)",willChange:"transform, opacity, filter"});const c=Xe.to(n,{x:0,opacity:i,filter:"blur(0px)",ease:"none",stagger:o,scrollTrigger:{trigger:n,start:r,end:s,scrub:!0}}).scrollTrigger;return Array.isArray(c)?c:[c]}function j3(n,e=8){const t=r=>{const s=n.getBoundingClientRect(),o=(r.clientX-s.left)/s.width-.5,a=(r.clientY-s.top)/s.height-.5;Xe.to(n,{rotationY:o*e*2,rotationX:-a*e*2,transformPerspective:800,duration:.3,ease:"power2.out"})},i=()=>{Xe.to(n,{rotationX:0,rotationY:0,duration:.5,ease:"elastic.out(1, 0.5)"})};return n.addEventListener("mousemove",t),n.addEventListener("mouseleave",i),()=>{n.removeEventListener("mousemove",t),n.removeEventListener("mouseleave",i)}}function Y3(n={}){const{size:e=40,trailLength:t=200,trailWidth:i=18}=n,r=N=>getComputedStyle(document.documentElement).getPropertyValue(N).trim()||"16 185 129";let s=null;const o=()=>{if(s)return s;const N=r("--color-primary-500").split(" ").map(Number),U=r("--color-primary-400").split(" ").map(Number),L=r("--color-primary-300").split(" ").map(Number),V=r("--color-primary-700").split(" ").map(Number),z=r("--color-primary-900").split(" ").map(Number);return s={particleColors:[[255,255,255],L,N,V],outerGlow:[N,V,z,z],midGlow:[L,N,V],coreGlow:[[255,255,255],U,L,N]},s},a=()=>{s=null};window.addEventListener("colorpalettechange",a);const l=document.createElement("canvas");l.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
  `,document.body.appendChild(l);const c=l.getContext("2d"),u=()=>{l.width=window.innerWidth,l.height=window.innerHeight};u(),window.addEventListener("resize",u);const d={x:window.innerWidth/2,y:window.innerHeight/2},f={x:d.x,y:d.y},h=[];let m=!1,_=null;const p=N=>{d.x=N.clientX,d.y=N.clientY,m=!0,clearTimeout(_),_=setTimeout(()=>{m=!1},200)},g=()=>{m=!1,clearTimeout(_)},x=N=>{N.touches.length>0&&(d.x=N.touches[0].clientX,d.y=N.touches[0].clientY)},S=()=>{m=!0,clearTimeout(_)},v=()=>{clearTimeout(_),_=setTimeout(()=>{m=!1},200)},C=N=>{N.touches.length>0&&(d.x=N.touches[0].clientX,d.y=N.touches[0].clientY,f.x=d.x,f.y=d.y,m=!0)},R=()=>{m=!1},A=()=>{m=!1},y=Xe.to({},{duration:.2,repeat:-1,yoyo:!0,ease:"sine.inOut",onUpdate:function(){}}),E=Xe.ticker.add(()=>{c.clearRect(0,0,l.width,l.height);const N=d.x-f.x,U=d.y-f.y,L=Math.sqrt(N*N+U*U);if(m){const V=Math.max(1,Math.min(4,Math.floor(L*.15)+1));for(let z=0;z<V;z++){const G=Math.random()*Math.PI*2,X=Math.random()*e*.4;h.push({x:d.x+Math.cos(G)*X,y:d.y+Math.sin(G)*X,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,radius:(Math.random()*.6+.4)*(i*.35),life:1,decay:.004+Math.random()*.004,colorIndex:Math.floor(Math.random()*4),swirl:(Math.random()-.5)*.02,angle:Math.random()*Math.PI*2})}}h.length>t&&h.splice(0,h.length-t);for(let V=h.length-1;V>=0;V--){const z=h[V];if(z.life-=z.decay,z.life<=0){h.splice(V,1);continue}z.angle+=z.swirl,z.x+=z.vx+Math.cos(z.angle)*.15,z.y+=z.vy+Math.sin(z.angle)*.15;const G=z.life*.35,{particleColors:X}=o(),[k,K,j]=X[z.colorIndex],F=c.createRadialGradient(z.x,z.y,0,z.x,z.y,z.radius*2.5);F.addColorStop(0,`rgba(${k}, ${K}, ${j}, ${G})`),F.addColorStop(.5,`rgba(${k}, ${K}, ${j}, ${G*.4})`),F.addColorStop(1,`rgba(${k}, ${K}, ${j}, 0)`),c.beginPath(),c.arc(z.x,z.y,z.radius*2.5,0,Math.PI*2),c.fillStyle=F,c.fill()}if(m){const V=Date.now()/1e3,z=1+Math.sin(V*3)*.08+Math.sin(V*7)*.05,G=Math.sin(V*2.5)*2,X=Math.cos(V*2.1)*2,{outerGlow:k,midGlow:K,coreGlow:j}=o(),F=c.createRadialGradient(d.x+G,d.y+X,0,d.x+G,d.y+X,e*1.5*z);F.addColorStop(0,`rgba(${k[0]}, 0.3)`),F.addColorStop(.4,`rgba(${k[1]}, 0.18)`),F.addColorStop(.7,`rgba(${k[2]}, 0.08)`),F.addColorStop(1,`rgba(${k[3]}, 0)`),c.beginPath(),c.arc(d.x+G,d.y+X,e*1.5*z,0,Math.PI*2),c.fillStyle=F,c.fill();const ce=c.createRadialGradient(d.x+G,d.y+X,0,d.x+G,d.y+X,e*.7*z);ce.addColorStop(0,`rgba(${K[0]}, 0.5)`),ce.addColorStop(.5,`rgba(${K[1]}, 0.3)`),ce.addColorStop(1,`rgba(${K[2]}, 0)`),c.beginPath(),c.arc(d.x+G,d.y+X,e*.7*z,0,Math.PI*2),c.fillStyle=ce,c.fill();const me=c.createRadialGradient(d.x+G,d.y+X,0,d.x+G,d.y+X,e*.35*z);me.addColorStop(0,`rgba(${j[0]}, 0.85)`),me.addColorStop(.3,`rgba(${j[1]}, 0.6)`),me.addColorStop(.7,`rgba(${j[2]}, 0.25)`),me.addColorStop(1,`rgba(${j[3]}, 0)`),c.beginPath(),c.arc(d.x+G,d.y+X,e*.35*z,0,Math.PI*2),c.fillStyle=me,c.fill()}f.x=d.x,f.y=d.y});return window.addEventListener("mousemove",p),window.addEventListener("mouseleave",g),window.addEventListener("mousedown",S),window.addEventListener("mouseup",v),window.addEventListener("touchmove",x,{passive:!0}),window.addEventListener("touchstart",C,{passive:!0}),window.addEventListener("touchend",R,{passive:!0}),window.addEventListener("touchcancel",A,{passive:!0}),()=>{clearTimeout(_),window.removeEventListener("mousemove",p),window.removeEventListener("mouseleave",g),window.removeEventListener("mousedown",S),window.removeEventListener("mouseup",v),window.removeEventListener("touchmove",x),window.removeEventListener("touchstart",C),window.removeEventListener("touchend",R),window.removeEventListener("touchcancel",A),window.removeEventListener("resize",u),window.removeEventListener("colorpalettechange",a),Xe.ticker.remove(E),y.kill(),l.remove()}}const q3={id:"tech-stack",class:"py-20 bg-dark-800 light:bg-secondary-100 relative overflow-hidden"},K3={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},Z3=["onClick"],J3=["data-column"],Q3={class:"tech-brick group relative bg-secondary-800 border border-secondary-700 rounded-xl p-6 overflow-hidden hover:border-primary-500 hover:shadow-xl hover:shadow-primary-500/10 transition-colors duration-300 light:bg-white light:border-secondary-200 light:hover:border-primary-500 light:hover:shadow-primary-500/10"},eR={class:"tech-image-overlay absolute inset-0 z-10 flex items-center justify-center bg-dark-900/95 light:bg-white/95 backdrop-blur-sm overflow-hidden"},tR=["src","alt"],nR={class:"relative z-0 flex flex-col h-full"},iR={class:"flex items-start justify-between mb-4"},rR={class:"w-10 h-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"},sR=["src","alt"],oR={class:"text-xs text-primary-400 bg-primary-500/10 px-2 py-1 rounded-full"},aR={class:"text-white light:text-secondary-900 font-bold text-lg mb-2 group-hover:text-primary-400 transition-colors duration-300"},lR={class:"text-secondary-300 light:text-secondary-500 text-sm"},cR={__name:"TechStack",setup(n){Xe.registerPlugin(ot);const e=Sn(()=>["All",...new Set(Rf.map(x=>x.category))]),t=Fe("All"),i=Fe(null),r=Fe(null),s=Fe(null),o=Fe(null),a=Fe(typeof window<"u"?window.innerWidth:1024);let l=[],c=[],u=[],d=null,f=null;const h=Sn(()=>t.value==="All"?Rf:Rf.filter(x=>x.category===t.value)),m=Sn(()=>{if(t.value!=="All")return!1;const x=h.value.length;return a.value>=1024?x>4:a.value>=640?x>2:!1}),_=x=>{t.value=x},p=()=>{if(!i.value)return;const x=i.value.querySelectorAll(".brick-wrapper");if(c.forEach(v=>{var C;(C=v.scrollTrigger)==null||C.kill(),v.kill()}),c=[],t.value!=="All"){x.forEach(v=>{const C=v.querySelector(".tech-brick");C&&Xe.set(C,{yPercent:0})});return}const S=window.innerWidth>=768;x.forEach(v=>{const C=v.querySelector(".tech-brick");if(!C)return;const R=parseInt(v.dataset.column,10);if(!S){Xe.set(C,{yPercent:0});return}if(R===1||R===3){const A=Xe.fromTo(C,{yPercent:-20},{yPercent:20,ease:"none",scrollTrigger:{trigger:i.value,start:"top bottom",end:"bottom top",scrub:.6}});c.push(A)}})},g=()=>{if(!i.value)return;u.forEach(S=>S()),u=[],i.value.querySelectorAll(".tech-brick").forEach(S=>{const v=S.querySelector(".tech-image-overlay");if(!v)return;Xe.set(v,{clipPath:"circle(0% at 50% 0%)",visibility:"hidden"});const C=()=>{Xe.killTweensOf(v),Xe.set(v,{visibility:"visible"}),Xe.to(v,{clipPath:"circle(150% at 50% 0%)",duration:.6,ease:"power3.out",overwrite:"auto"})},R=()=>{Xe.killTweensOf(v),Xe.set(v,{visibility:"hidden"}),Xe.to(v,{clipPath:"circle(0% at 50% 0%)",duration:.5,ease:"power3.in",overwrite:"auto"})};S.addEventListener("mouseenter",C),S.addEventListener("mouseleave",R),S.addEventListener("touchstart",C,{passive:!0}),S.addEventListener("touchend",R,{passive:!0}),S.addEventListener("touchcancel",R,{passive:!0}),u.push(()=>{S.removeEventListener("mouseenter",C),S.removeEventListener("mouseleave",R),S.removeEventListener("touchstart",C),S.removeEventListener("touchend",R),S.removeEventListener("touchcancel",R)})})};return Tn(()=>{l.push(...o0(r.value,{x:-120,start:"top 90%",end:"top 40%"})),p(),g(),f=window.innerWidth>=768;const x=()=>{a.value=window.innerWidth;const S=window.innerWidth>=768;S!==f&&(f=S,p())};window.addEventListener("resize",x),d=()=>window.removeEventListener("resize",x)}),In(()=>{l.forEach(x=>x.kill()),c.forEach(x=>{var S;(S=x.scrollTrigger)==null||S.kill(),x.kill()}),u.forEach(x=>x()),d==null||d()}),Ri(h,async()=>{await as(),p(),g()}),(x,S)=>(ae(),ue("section",q3,[S[0]||(S[0]=b("div",{class:"absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"},null,-1)),b("div",K3,[b("h2",{ref_key:"titleRef",ref:r,class:"section-title text-4xl font-bold text-white light:text-secondary-900 mb-6"},"Tech Stack",512),b("p",{ref_key:"subtitleRef",ref:s,class:"section-subtitle text-secondary-400 light:text-secondary-500 mb-8"},"Technologies and tools I work with",512),b("div",{ref_key:"filterRef",ref:o,class:"flex flex-wrap gap-3 mb-10"},[(ae(!0),ue(We,null,tt(e.value,v=>(ae(),ue("button",{key:v,onClick:C=>_(v),class:ct(["px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105",t.value===v?"bg-primary-600 text-white shadow-lg shadow-primary-500/25":"bg-secondary-800 text-secondary-400 hover:text-white border border-secondary-700 light:bg-white light:text-secondary-500 light:hover:text-secondary-900 light:border-secondary-200"])},ye(v),11,Z3))),128))],512),b("div",{ref_key:"gridRef",ref:i,class:"brick-wall"},[(ae(!0),ue(We,null,tt(h.value,(v,C)=>(ae(),ue("div",{key:v.name,"data-column":C%4,class:ct(["brick-wrapper",{"brick-offset":m.value}])},[b("div",Q3,[b("div",eR,[b("img",{src:v.image,alt:`${v.name} logo`,class:"w-24 h-24 object-contain drop-shadow-lg",loading:"lazy"},null,8,tR)]),b("div",nR,[b("div",iR,[b("div",rR,[b("img",{src:v.image,alt:`${v.name} logo`,class:"w-full h-full object-contain",loading:"lazy"},null,8,sR)]),b("span",oR,ye(v.category),1)]),b("h3",aR,ye(v.name),1),b("p",lR,ye(v.description),1)])])],10,J3))),128))],512)])]))}},uR=Wa(cR,[["__scopeId","data-v-3c28cea0"]]),Pf=[{id:1,title:"E-Commerce Platform",description:"A full-featured e-commerce platform with product management, cart functionality, and Stripe payment integration.",tech:["Vue 3","Node.js","MongoDB","Stripe"],github:"https://github.com/yourusername/ecommerce-platform",demo:"https://ecommerce-demo.example.com",image:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",features:["Product catalog with search, filtering, and category browsing","Shopping cart with real-time price calculations and quantity management","Secure Stripe payment integration with order confirmation","User authentication with profile and order history","Admin dashboard for product and inventory management"]},{id:2,title:"Task Management App",description:"A collaborative task management application with real-time updates, drag-and-drop boards, and team collaboration features.",tech:["Vue 3","Firebase","Tailwind CSS"],github:"https://github.com/yourusername/task-manager",demo:"https://task-manager-demo.example.com",image:"https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",features:["Drag-and-drop kanban boards for task organization","Real-time collaboration with live updates across team members","Task assignments, due dates, and priority levels","Project workspaces with customizable columns and labels","Activity timeline and notifications for team updates"]},{id:3,title:"Weather Dashboard",description:"A real-time weather dashboard with location-based forecasts, interactive maps, and 7-day weather predictions.",tech:["Vue 3","REST API","Chart.js"],github:"https://github.com/yourusername/weather-dashboard",demo:"https://weather-demo.example.com",image:"https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",features:["Real-time weather data with location-based search","Interactive 7-day forecast with temperature trends","Hourly breakdown with precipitation and wind speed","Visual weather charts using Chart.js for data visualization","Responsive design optimized for mobile and desktop"]},{id:4,title:"Social Media Analytics",description:"An analytics dashboard for social media managers to track engagement, follower growth, and content performance across platforms.",tech:["Vue 3","D3.js","Express","PostgreSQL"],github:"https://github.com/yourusername/social-analytics",demo:"https://analytics-demo.example.com",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",features:["Cross-platform analytics aggregation for major social networks","Interactive data visualizations with D3.js charts","Follower growth tracking with trend analysis","Content performance metrics and engagement scoring","Customizable reporting with export capabilities"]},{id:5,title:"Recipe Finder",description:"A recipe discovery app with ingredient-based search, meal planning, and step-by-step cooking instructions.",tech:["Vue 3","Vuex","Tailwind CSS"],github:"https://github.com/yourusername/recipe-finder",demo:"https://recipe-demo.example.com",image:"https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=400&fit=crop",features:["Ingredient-based recipe search with smart matching","Meal planning calendar with grocery list generation","Step-by-step cooking instructions with timers","Recipe filtering by dietary preferences and cuisine","Save and organize favorite recipes in collections"]},{id:6,title:"Dev Portfolio Template",description:"A modern, responsive developer portfolio template with dark mode, smooth animations, and project showcase features.",tech:["Vue 3","Tailwind CSS","Vite"],github:"https://github.com/yourusername/dev-portfolio",demo:"https://portfolio-demo.example.com",image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",features:["Dark/light mode with smooth theme transitions","GSAP-powered scroll animations and micro-interactions","Interactive project showcase with detail modals","Fully responsive layout across all device sizes","Optimized performance with Vite build tooling"]},{id:7,title:"Dev Portfolio",description:"A modern, responsive developer portfolio template with dark mode, smooth animations, and project showcase features.",tech:["Vue 3","Tailwind CSS","Vite"],github:"https://github.com/yourusername/dev-portfolio",demo:"https://portfolio-demo.example.com",image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",features:["Dark/light mode with smooth theme transitions","GSAP-powered scroll animations and micro-interactions","Interactive project showcase with detail modals","Fully responsive layout across all device sizes","Optimized performance with Vite build tooling"]},{id:8,title:"Dev Template",description:"A modern, responsive developer portfolio template with dark mode, smooth animations, and project showcase features.",tech:["Vue 3","Tailwind CSS","Vite"],github:"https://github.com/yourusername/dev-portfolio",demo:"https://portfolio-demo.example.com",image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",features:["Dark/light mode with smooth theme transitions","GSAP-powered scroll animations and micro-interactions","Interactive project showcase with detail modals","Fully responsive layout across all device sizes","Optimized performance with Vite build tooling"]}],dR={class:"w-full h-full bg-secondary-900 light:bg-secondary-100 overflow-hidden relative flex flex-col"},fR={class:"flex items-center gap-2 px-3 sm:px-4 py-2 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},hR={class:"flex-1 max-w-md mx-auto"},pR={class:"bg-secondary-700/50 light:bg-secondary-100 rounded-md px-2 sm:px-3 py-1 text-[10px] sm:text-xs text-secondary-400 light:text-secondary-500 flex items-center gap-1.5 sm:gap-2 truncate"},mR={class:"truncate"},gR={key:0,class:"flex-1 flex flex-col min-h-0 relative"},_R={class:"flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},xR={class:"flex items-center gap-2 sm:gap-4"},vR={key:0,class:"absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-accent-500 rounded-full text-[8px] sm:text-[9px] text-white flex items-center justify-center font-bold"},yR={class:"flex-1 p-3 sm:p-4 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 overflow-y-auto min-h-0 overscroll-contain"},bR={class:"text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 mb-1 truncate"},SR={class:"flex items-center justify-between"},MR={class:"text-[10px] sm:text-xs font-semibold text-primary-500"},wR=["onClick"],ER={key:0,class:"absolute inset-y-0 right-0 w-64 sm:w-80 bg-secondary-800 light:bg-white border-l border-secondary-700 light:border-secondary-200 shadow-2xl z-20 flex flex-col"},TR={class:"flex items-center justify-between px-4 py-3 border-b border-secondary-700 light:border-secondary-200"},AR={class:"flex-1 overflow-y-auto p-4 space-y-3 overscroll-contain"},CR={key:0,class:"text-center py-8"},RR={class:"flex-1 min-w-0"},PR={class:"text-[10px] text-white light:text-secondary-900 font-medium truncate"},DR={class:"text-[9px] text-primary-500"},LR={class:"flex items-center gap-1.5"},IR=["onClick"],UR={class:"text-[10px] text-white light:text-secondary-900 w-4 text-center"},NR=["onClick"],FR={class:"p-4 border-t border-secondary-700 light:border-secondary-200"},OR={class:"flex justify-between mb-3"},kR={class:"text-sm font-bold text-white light:text-secondary-900"},BR={key:1,class:"flex-1 flex flex-col min-h-0"},zR={class:"px-3 sm:px-6 py-2.5 bg-secondary-800/50 light:bg-secondary-100/50 border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},VR={class:"flex gap-2"},HR=["value"],GR={class:"flex-1 p-2 sm:p-4 flex gap-2 sm:gap-3 overflow-x-auto min-h-0"},WR={class:"flex-1 min-w-[140px] sm:min-w-0 bg-secondary-800/50 light:bg-secondary-200/50 rounded-lg p-2 sm:p-2.5 flex flex-col"},XR={class:"flex items-center justify-between mb-2 px-1 flex-shrink-0"},$R={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400"},jR={class:"space-y-1.5 sm:space-y-2 overflow-y-auto flex-1 min-h-0 overscroll-contain"},YR=["onClick"],qR={class:"flex items-start gap-1.5"},KR=["onClick"],ZR={class:"flex-1 min-w-0"},JR={class:"text-[9px] sm:text-[10px] text-white light:text-secondary-900 leading-tight"},QR={class:"flex-1 min-w-[140px] sm:min-w-0 bg-secondary-800/50 light:bg-secondary-200/50 rounded-lg p-2 sm:p-2.5 flex flex-col"},eP={class:"flex items-center justify-between mb-2 px-1 flex-shrink-0"},tP={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400"},nP={class:"space-y-1.5 sm:space-y-2 overflow-y-auto flex-1 min-h-0 overscroll-contain"},iP=["onClick"],rP={class:"flex items-start gap-1.5"},sP=["onClick"],oP={class:"flex-1 min-w-0"},aP={class:"text-[9px] sm:text-[10px] text-white light:text-secondary-900 leading-tight"},lP={class:"flex-1 min-w-[140px] sm:min-w-0 bg-secondary-800/50 light:bg-secondary-200/50 rounded-lg p-2 sm:p-2.5 flex flex-col"},cP={class:"flex items-center justify-between mb-2 px-1 flex-shrink-0"},uP={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400"},dP={class:"space-y-1.5 sm:space-y-2 overflow-y-auto flex-1 min-h-0 overscroll-contain"},fP=["onClick"],hP={class:"flex items-start gap-1.5"},pP={class:"flex-1 min-w-0"},mP={class:"text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 line-through leading-tight"},gP={key:2,class:"flex-1 flex flex-col min-h-0"},_P={class:"flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},xP={class:"flex items-center gap-2"},vP={class:"flex rounded-lg overflow-hidden border border-secondary-600 light:border-secondary-200"},yP={class:"px-3 sm:px-6 py-2.5 bg-secondary-800/50 light:bg-secondary-100/50 border-b border-secondary-700 light:border-secondary-200 flex-shrink-0 relative"},bP={class:"flex gap-2"},SP={class:"flex-1 relative"},MP={key:0,class:"absolute left-3 sm:left-6 right-3 sm:right-6 top-full mt-1 bg-secondary-800 light:bg-white border border-secondary-700 light:border-secondary-200 rounded-lg shadow-xl z-10 overflow-hidden"},wP=["onClick"],EP={class:"ml-auto text-secondary-500 light:text-secondary-400"},TP={class:"px-3 sm:px-6 py-3 sm:py-4 bg-gradient-to-br from-primary-600/30 to-primary-500/10 flex-shrink-0"},AP={class:"flex items-center justify-between"},CP={class:"text-2xl sm:text-3xl font-bold text-white light:text-secondary-900"},RP={class:"text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 mt-0.5"},PP={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mt-0.5"},DP={class:"text-4xl sm:text-5xl"},LP={class:"px-3 sm:px-6 py-2.5 flex-shrink-0"},IP={class:"flex gap-1.5 sm:gap-2 overflow-x-auto"},UP={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5"},NP={class:"text-sm sm:text-base mb-0.5"},FP={class:"text-[9px] sm:text-[10px] font-semibold text-white light:text-secondary-900"},OP={class:"flex-1 px-3 sm:px-6 pb-3 sm:pb-4 min-h-0 overflow-y-auto overscroll-contain"},kP={class:"space-y-1 sm:space-y-1.5"},BP={class:"text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 w-8 sm:w-10"},zP={class:"text-sm sm:text-base"},VP={class:"flex-1 mx-2 sm:mx-3 h-1 bg-secondary-700 light:bg-secondary-200 rounded-full overflow-hidden"},HP={class:"text-[9px] sm:text-[10px] text-white light:text-secondary-900 font-semibold w-10 sm:w-12 text-right"},GP={key:3,class:"flex-1 flex flex-col min-h-0"},WP={class:"flex-1 flex overflow-hidden min-h-0"},XP={class:"w-10 sm:w-14 bg-secondary-800 light:bg-white border-r border-secondary-700 light:border-secondary-200 flex flex-col items-center py-2 sm:py-3 gap-2 sm:gap-3 flex-shrink-0"},$P={class:"flex-1 p-2 sm:p-4 overflow-y-auto min-h-0 overscroll-contain"},jP={class:"flex gap-1.5 sm:gap-2 mb-3 flex-wrap"},YP=["onClick"],qP={class:"grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-3"},KP={class:"bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-3 border border-secondary-700 light:border-secondary-200"},ZP={class:"text-sm sm:text-lg font-bold text-white light:text-secondary-900"},JP={class:"bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-3 border border-secondary-700 light:border-secondary-200"},QP={class:"text-sm sm:text-lg font-bold text-white light:text-secondary-900"},eD={class:"bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-3 border border-secondary-700 light:border-secondary-200"},tD={class:"text-sm sm:text-lg font-bold text-white light:text-secondary-900"},nD={class:"bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-3 border border-secondary-700 light:border-secondary-200"},iD={class:"text-sm sm:text-lg font-bold text-white light:text-secondary-900"},rD={class:"bg-secondary-800 light:bg-white rounded-lg p-2.5 sm:p-3 border border-secondary-700 light:border-secondary-200 mb-3"},sD={class:"h-20 sm:h-24 flex items-end gap-1"},oD=["onMouseenter","onMouseleave"],aD={class:"text-[6px] sm:text-[7px] text-secondary-500 light:text-secondary-400"},lD={class:"grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3"},cD={class:"bg-secondary-800 light:bg-white rounded-lg p-2.5 sm:p-3 border border-secondary-700 light:border-secondary-200"},uD={class:"space-y-1.5 sm:space-y-2"},dD=["onClick"],fD={class:"text-[8px] sm:text-[9px] text-secondary-400 light:text-secondary-500 flex-1"},hD={class:"text-[8px] sm:text-[9px] font-semibold text-white light:text-secondary-900"},pD={class:"bg-secondary-800 light:bg-white rounded-lg p-2.5 sm:p-3 border border-secondary-700 light:border-secondary-200"},mD={class:"space-y-1.5 sm:space-y-2"},gD={class:"text-[8px] sm:text-[9px] text-primary-500"},_D={key:4,class:"flex-1 flex flex-col min-h-0"},xD={class:"px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},vD={class:"flex gap-1.5 sm:gap-2"},yD={class:"flex-1 relative"},bD={class:"px-3 sm:px-6 py-2 flex gap-1.5 sm:gap-2 overflow-x-auto flex-shrink-0"},SD=["onClick"],MD={class:"flex-1 px-3 sm:px-6 pb-3 sm:pb-4 grid grid-cols-2 gap-2 sm:gap-3 overflow-y-auto min-h-0 overscroll-contain"},wD=["onClick"],ED={class:"absolute top-1.5 right-1.5 bg-accent-500 text-white text-[7px] sm:text-[8px] px-1.5 py-0.5 rounded-full font-medium"},TD={class:"p-2 sm:p-2.5"},AD={class:"text-[9px] sm:text-[10px] text-white light:text-secondary-900 font-medium mb-1 truncate"},CD={class:"flex items-center gap-1"},RD={class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400"},PD={class:"ml-auto text-[7px] sm:text-[8px] text-secondary-500 light:text-secondary-400"},DD={key:0,class:"col-span-2 text-center py-8"},LD={class:"flex items-start justify-between mb-3"},ID={class:"text-3xl"},UD={class:"text-sm font-bold text-white light:text-secondary-900 mb-1"},ND={class:"flex items-center gap-2 mb-3"},FD={class:"text-yellow-500 text-xs"},OD={class:"text-[9px] text-secondary-500 light:text-secondary-400"},kD={class:"text-[9px] text-secondary-500 light:text-secondary-400"},BD={class:"space-y-2 mb-4"},zD={key:5,class:"flex-1 flex flex-col min-h-0"},VD={class:"flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},HD={class:"flex gap-2 sm:gap-4 text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500"},GD=["onClick"],WD={class:"flex-1 overflow-y-auto min-h-0 overscroll-contain"},XD={key:0,class:"h-full flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-secondary-800 to-secondary-900 light:from-white light:to-secondary-100"},$D={class:"text-center"},jD={class:"flex gap-2 justify-center"},YD={key:1,class:"p-4 sm:p-6"},qD={class:"space-y-2 mb-4"},KD={class:"grid grid-cols-2 gap-2"},ZD={class:"text-[9px] sm:text-[10px] text-primary-500 font-medium"},JD={class:"mt-1.5 h-1 bg-secondary-700 light:bg-secondary-200 rounded-full overflow-hidden"},QD={key:2,class:"p-4 sm:p-6"},eL={class:"grid grid-cols-2 gap-2 sm:gap-3"},tL={key:3,class:"p-4 sm:p-6"},nL={class:"px-3 sm:px-6 py-2 sm:py-3 bg-secondary-800 light:bg-white border-t border-secondary-700 light:border-secondary-200 flex-shrink-0"},iL={class:"flex justify-center gap-1.5 sm:gap-3 overflow-x-auto"},rL={key:6,class:"flex-1 flex flex-col min-h-0"},sL={class:"flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0"},oL={class:"text-xs sm:text-sm font-bold text-primary-500"},aL={class:"flex gap-2 sm:gap-3 text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500"},lL=["onClick"],cL={class:"flex-1 overflow-y-auto min-h-0 overscroll-contain"},uL={key:0,class:"h-full flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-primary-600/20 to-primary-500/5"},dL={class:"text-center max-w-sm"},fL={class:"text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-1.5"},hL={class:"text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 mb-3 sm:mb-4 leading-relaxed"},pL={class:"flex gap-1.5 sm:gap-2 justify-center flex-wrap"},mL={key:1,class:"p-4 sm:p-6"},gL={class:"space-y-2"},_L={class:"text-[9px] sm:text-[10px] text-secondary-300 light:text-secondary-600 leading-relaxed"},xL={key:2,class:"p-4 sm:p-6"},vL={class:"space-y-2"},yL={__name:"ProjectPreview",props:{project:{type:Object,required:!0}},setup(n){const e=n,t=Sn(()=>{const le=e.project.title.toLowerCase();return le.includes("e-commerce")?"ecommerce":le.includes("task")?"task":le.includes("weather")?"weather":le.includes("social")||le.includes("analytics")?"analytics":le.includes("recipe")?"recipe":le.includes("portfolio")||le.includes("template")?"portfolio":"generic"}),i=[{id:1,name:"Wireless Headphones",price:89,emoji:"🎧",color:"from-purple-500 to-indigo-500"},{id:2,name:"Smart Watch",price:199,emoji:"⌚",color:"from-blue-500 to-cyan-500"},{id:3,name:"Laptop Stand",price:45,emoji:"💻",color:"from-emerald-500 to-teal-500"},{id:4,name:"Mechanical Keyboard",price:129,emoji:"⌨️",color:"from-amber-500 to-orange-500"},{id:5,name:"USB-C Hub",price:59,emoji:"🔌",color:"from-rose-500 to-pink-500"},{id:6,name:"Desk Lamp",price:35,emoji:"💡",color:"from-yellow-500 to-amber-500"}],r=pa([]),s=Fe(!1),o=Sn(()=>r.reduce((le,w)=>le+w.qty,0)),a=Sn(()=>r.reduce((le,w)=>le+w.price*w.qty,0)),l=le=>{const w=r.find(T=>T.id===le.id);w?w.qty++:r.push({...le,qty:1})},c=le=>{const w=r.findIndex(T=>T.id===le);w!==-1&&r.splice(w,1)},u=(le,w)=>{const T=r.find(H=>H.id===le);T&&(T.qty+=w,T.qty<=0&&c(le))},d=pa({todo:[{id:1,title:"Design landing page",tag:"Design",tagColor:"bg-purple-500/20 text-purple-400",done:!1},{id:2,title:"Set up database schema",tag:"Backend",tagColor:"bg-blue-500/20 text-blue-400",done:!1},{id:3,title:"Write API endpoints",tag:"Backend",tagColor:"bg-blue-500/20 text-blue-400",done:!1}],progress:[{id:4,title:"Build auth system",tag:"Frontend",tagColor:"bg-emerald-500/20 text-emerald-400",done:!1},{id:5,title:"Implement dark mode",tag:"UI",tagColor:"bg-amber-500/20 text-amber-400",done:!1}],done:[{id:6,title:"Project setup",tag:"Setup",tagColor:"bg-gray-500/20 text-gray-400",done:!0},{id:7,title:"Create wireframes",tag:"Design",tagColor:"bg-purple-500/20 text-purple-400",done:!0},{id:8,title:"Configure CI/CD",tag:"DevOps",tagColor:"bg-rose-500/20 text-rose-400",done:!0}]}),f=Fe(""),h=Fe("General"),m=["General","Design","Frontend","Backend","UI","DevOps"],_=()=>{f.value.trim()&&(d.todo.push({id:Date.now(),title:f.value.trim(),tag:h.value,tagColor:"bg-primary-500/20 text-primary-400",done:!1}),f.value="")},p=(le,w)=>{const T=d[le].find(H=>H.id===w);if(T)if(T.done=!T.done,T.done){const H=d[le].findIndex(Y=>Y.id===w),[ee]=d[le].splice(H,1);d.done.push(ee)}else{const H=d.done.findIndex(Y=>Y.id===w),[ee]=d.done.splice(H,1);d.todo.push(ee)}},g=(le,w,T)=>{const H=d[le].findIndex(Y=>Y.id===T);if(H===-1)return;const[ee]=d[le].splice(H,1);d[w].push(ee)},x={Manila:{temp:28,condition:"Partly Cloudy",emoji:"⛅",humidity:72,wind:12},Tokyo:{temp:22,condition:"Clear Sky",emoji:"☀️",humidity:55,wind:8},"New York":{temp:18,condition:"Rainy",emoji:"🌧️",humidity:85,wind:20},London:{temp:15,condition:"Cloudy",emoji:"☁️",humidity:78,wind:15},Sydney:{temp:25,condition:"Sunny",emoji:"🌤️",humidity:60,wind:10}},S=Fe("Manila"),v=Fe(""),C=Fe("C"),R=Sn(()=>x[S.value]||x.Manila),A=Sn(()=>{const le=R.value.temp;return C.value==="C"?le:Math.round(le*9/5+32)}),y=Sn(()=>{const le=R.value.temp;return Array.from({length:6},(w,T)=>({time:`${(T+1)*3}:00`,temp:le+[0,2,3,1,-1,-2][T],emoji:["⛅","☀️","☀️","⛅","☁️","🌙"][T]}))}),E=Sn(()=>{const le=R.value.temp;return["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((T,H)=>({day:T,high:le+[2,4,3,5,1,0,-1][H],low:le-[4,3,5,2,6,5,7][H],emoji:["⛅","☀️","🌧️","⛅","☀️","☁️","🌧️"][H]}))}),N=Sn(()=>{const le=v.value.toLowerCase();return le?Object.keys(x).filter(w=>w.toLowerCase().includes(le)):Object.keys(x)}),U=le=>{S.value=le,v.value=""},L=pa({followers:12800,engagement:4.2,reach:45200,posts:128}),V=Fe("All"),z=["All","Instagram","Twitter","LinkedIn"],G={All:{followers:12800,engagement:4.2,reach:45200,posts:128},Instagram:{followers:8500,engagement:5.1,reach:28e3,posts:64},Twitter:{followers:3200,engagement:3.4,reach:12e3,posts:42},LinkedIn:{followers:1100,engagement:2.8,reach:5200,posts:22}},X=Sn(()=>{const w=(G[V.value]||G.All).followers/12800;return[30,45,38,60,52,75,68,90,82,100,88,95].map((T,H)=>({value:Math.round(T*w),label:["J","F","M","A","M","J","J","A","S","O","N","D"][H]}))}),k=le=>{V.value=le;const w=G[le]||G.All;L.followers=w.followers,L.engagement=w.engagement,L.reach=w.reach,L.posts=w.posts},K=[{id:1,name:"Creamy Garlic Pasta",time:25,rating:4.5,emoji:"🍝",category:"Dinner",color:"from-amber-500/40 to-orange-500/40"},{id:2,name:"Avocado Toast",time:10,rating:4.2,emoji:"🥑",category:"Breakfast",color:"from-emerald-500/40 to-green-500/40"},{id:3,name:"Chocolate Cake",time:45,rating:4.8,emoji:"🍰",category:"Dessert",color:"from-rose-500/40 to-pink-500/40"},{id:4,name:"Chicken Stir Fry",time:20,rating:3.9,emoji:"🍗",category:"Lunch",color:"from-red-500/40 to-orange-500/40"},{id:5,name:"Berry Smoothie",time:5,rating:4.6,emoji:"🥤",category:"Breakfast",color:"from-purple-500/40 to-indigo-500/40"},{id:6,name:"Beef Tacos",time:30,rating:4.4,emoji:"🌮",category:"Dinner",color:"from-yellow-500/40 to-amber-500/40"}],j=Fe("All"),F=Fe(""),ce=Fe(null),me=["All","Breakfast","Lunch","Dinner","Dessert"],ge=Sn(()=>K.filter(le=>{const w=j.value==="All"||le.category===j.value,T=le.name.toLowerCase().includes(F.value.toLowerCase());return w&&T})),ve=le=>{ce.value=le},Te=Fe("home"),J=["home","about","projects","contact"],fe=le=>{Te.value=le},oe=Fe("home"),Re=["home","features","about"],Ae=le=>{oe.value=le};return(le,w)=>(ae(),ue("div",dR,[b("div",fR,[w[16]||(w[16]=b("div",{class:"flex gap-1.5"},[b("span",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent-500"}),b("span",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"}),b("span",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary-500"})],-1)),b("div",hR,[b("div",pR,[w[15]||(w[15]=b("svg",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 8a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0115.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"})],-1)),b("span",mR,ye(n.project.demo),1)])])]),t.value==="ecommerce"?(ae(),ue("div",gR,[b("div",_R,[w[19]||(w[19]=b("div",{class:"text-primary-500 font-bold text-xs sm:text-sm"},"🛍️ ShopHub",-1)),b("div",xR,[w[18]||(w[18]=b("div",{class:"hidden sm:flex gap-3 text-[10px] text-secondary-400 light:text-secondary-500"},[b("span",{class:"cursor-pointer hover:text-primary-500 transition-colors"},"Home"),b("span",{class:"cursor-pointer hover:text-primary-500 transition-colors"},"Products"),b("span",{class:"cursor-pointer hover:text-primary-500 transition-colors"},"About")],-1)),b("button",{onClick:w[0]||(w[0]=T=>s.value=!s.value),class:"relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-500/20 flex items-center justify-center hover:bg-primary-500/30 transition-colors cursor-pointer","aria-label":"Open cart"},[w[17]||(w[17]=b("svg",{class:"w-4 h-4 sm:w-5 sm:h-5 text-primary-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})],-1)),o.value>0?(ae(),ue("span",vR,ye(o.value),1)):Rn("",!0)])])]),w[25]||(w[25]=ho('<div class="px-3 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-primary-500 flex-shrink-0" data-v-b832dd55><div class="text-white" data-v-b832dd55><div class="text-[9px] sm:text-[10px] uppercase tracking-wider opacity-80 mb-1" data-v-b832dd55>Summer Sale</div><div class="text-xs sm:text-sm font-bold mb-1.5 sm:mb-2" data-v-b832dd55>Up to 50% Off Everything</div><div class="inline-block bg-white text-primary-600 text-[9px] sm:text-[10px] font-semibold px-2.5 sm:px-3 py-1 rounded-full cursor-pointer hover:bg-primary-50 transition-colors" data-v-b832dd55>Shop Now →</div></div></div>',1)),b("div",yR,[(ae(),ue(We,null,tt(i,T=>b("div",{key:T.id,class:"bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-2.5 border border-secondary-700 light:border-secondary-200 hover:border-primary-500/50 transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-primary-500/10"},[b("div",{class:ct(["aspect-square rounded-md bg-gradient-to-br mb-2 flex items-center justify-center text-2xl sm:text-3xl",T.color])},[b("span",null,ye(T.emoji),1)],2),b("div",bR,ye(T.name),1),b("div",SR,[b("div",MR,"$"+ye(T.price),1),b("button",{onClick:Cs(H=>l(T),["stop"]),class:"w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary-500 hover:bg-primary-400 flex items-center justify-center transition-colors cursor-pointer","aria-label":"Add to cart"},[...w[20]||(w[20]=[b("svg",{class:"w-3 h-3 sm:w-3.5 sm:h-3.5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"})],-1)])],8,wR)])])),64))]),Ct(Gf,{name:"slide"},{default:Au(()=>[s.value?(ae(),ue("div",ER,[b("div",TR,[w[22]||(w[22]=b("span",{class:"text-xs font-semibold text-white light:text-secondary-900"},"Shopping Cart",-1)),b("button",{onClick:w[1]||(w[1]=T=>s.value=!1),class:"text-secondary-400 hover:text-white light:hover:text-secondary-900 transition-colors cursor-pointer","aria-label":"Close cart"},[...w[21]||(w[21]=[b("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),b("div",AR,[r.length===0?(ae(),ue("div",CR,[...w[23]||(w[23]=[b("div",{class:"text-3xl mb-2"},"🛒",-1),b("p",{class:"text-xs text-secondary-400 light:text-secondary-500"},"Your cart is empty",-1),b("p",{class:"text-[10px] text-secondary-500 light:text-secondary-400 mt-1"},"Add some products!",-1)])])):Rn("",!0),(ae(!0),ue(We,null,tt(r,T=>(ae(),ue("div",{key:T.id,class:"flex items-center gap-3 bg-secondary-700/50 light:bg-secondary-100 rounded-lg p-2.5"},[b("div",{class:ct(["w-8 h-8 rounded-md bg-gradient-to-br flex items-center justify-center text-sm flex-shrink-0",T.color])},ye(T.emoji),3),b("div",RR,[b("div",PR,ye(T.name),1),b("div",DR,"$"+ye(T.price),1)]),b("div",LR,[b("button",{onClick:H=>u(T.id,-1),class:"w-4 h-4 rounded bg-secondary-600 light:bg-secondary-200 text-white light:text-secondary-900 text-[9px] flex items-center justify-center hover:bg-accent-500 transition-colors cursor-pointer"},"−",8,IR),b("span",UR,ye(T.qty),1),b("button",{onClick:H=>u(T.id,1),class:"w-4 h-4 rounded bg-secondary-600 light:bg-secondary-200 text-white light:text-secondary-900 text-[9px] flex items-center justify-center hover:bg-primary-500 transition-colors cursor-pointer"},"+",8,NR)])]))),128))]),b("div",FR,[b("div",OR,[w[24]||(w[24]=b("span",{class:"text-[10px] text-secondary-400 light:text-secondary-500"},"Total",-1)),b("span",kR,"$"+ye(a.value.toFixed(2)),1)]),b("button",{onClick:w[2]||(w[2]=T=>s.value=!1),class:"w-full py-2 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-[10px] font-semibold transition-colors cursor-pointer"}," Checkout ")])])):Rn("",!0)]),_:1})])):t.value==="task"?(ae(),ue("div",BR,[w[30]||(w[30]=ho('<div class="flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0" data-v-b832dd55><div class="flex items-center gap-2" data-v-b832dd55><div class="w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary-500 flex items-center justify-center" data-v-b832dd55><svg class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b832dd55><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" data-v-b832dd55></path></svg></div><span class="text-xs sm:text-sm font-semibold text-white light:text-secondary-900" data-v-b832dd55>TaskFlow</span></div><div class="flex items-center gap-1.5 sm:gap-2" data-v-b832dd55><div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary-500/20 flex items-center justify-center text-[9px] sm:text-[10px] text-primary-500 font-bold" data-v-b832dd55>+</div><div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent-500/20 flex items-center justify-center text-[9px] sm:text-[10px] text-accent-500 font-bold" data-v-b832dd55>A</div><div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-[9px] sm:text-[10px] text-yellow-500 font-bold" data-v-b832dd55>B</div></div></div>',1)),b("div",zR,[b("div",VR,[xc(b("input",{"onUpdate:modelValue":w[3]||(w[3]=T=>f.value=T),onKeyup:Eb(_,["enter"]),type:"text",placeholder:"Add a new task...",class:"flex-1 bg-secondary-700/50 light:bg-white border border-secondary-600 light:border-secondary-200 rounded-lg px-3 py-1.5 text-[10px] sm:text-xs text-white light:text-secondary-900 placeholder-secondary-500 light:placeholder-secondary-400 focus:outline-none focus:border-primary-500 transition-colors"},null,544),[[Id,f.value]]),xc(b("select",{"onUpdate:modelValue":w[4]||(w[4]=T=>h.value=T),class:"bg-secondary-700/50 light:bg-white border border-secondary-600 light:border-secondary-200 rounded-lg px-2 py-1.5 text-[9px] sm:text-[10px] text-secondary-300 light:text-secondary-600 focus:outline-none focus:border-primary-500 transition-colors cursor-pointer"},[(ae(),ue(We,null,tt(m,T=>b("option",{key:T,value:T},ye(T),9,HR)),64))],512),[[bb,h.value]]),b("button",{onClick:_,class:"px-3 py-1.5 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-[10px] sm:text-xs font-semibold transition-colors cursor-pointer flex-shrink-0"}," Add ")])]),b("div",GR,[b("div",WR,[b("div",XR,[w[26]||(w[26]=b("span",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500"},"TO DO",-1)),b("span",$R,ye(d.todo.length),1)]),b("div",jR,[(ae(!0),ue(We,null,tt(d.todo,T=>(ae(),ue("div",{key:T.id,class:"bg-secondary-800 light:bg-white rounded-md p-2 sm:p-2.5 border border-secondary-700 light:border-secondary-200 hover:border-primary-500/40 transition-colors cursor-pointer group",onClick:H=>g("todo","progress",T.id)},[b("div",qR,[b("button",{onClick:Cs(H=>p("todo",T.id),["stop"]),class:"w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-secondary-500 light:border-secondary-300 flex-shrink-0 mt-0.5 hover:border-primary-500 transition-colors cursor-pointer","aria-label":"Mark as done"},null,8,KR),b("div",ZR,[b("div",JR,ye(T.title),1),b("span",{class:ct(["inline-block mt-1 px-1.5 py-0.5 rounded-full text-[7px] sm:text-[8px] font-medium",T.tagColor])},ye(T.tag),3)])])],8,YR))),128))])]),b("div",QR,[b("div",eP,[w[27]||(w[27]=b("span",{class:"text-[9px] sm:text-[10px] font-semibold text-primary-500"},"IN PROGRESS",-1)),b("span",tP,ye(d.progress.length),1)]),b("div",nP,[(ae(!0),ue(We,null,tt(d.progress,T=>(ae(),ue("div",{key:T.id,class:"bg-secondary-800 light:bg-white rounded-md p-2 sm:p-2.5 border border-primary-500/30 hover:border-primary-500/60 transition-colors cursor-pointer group",onClick:H=>g("progress","done",T.id)},[b("div",rP,[b("button",{onClick:Cs(H=>p("progress",T.id),["stop"]),class:"w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-primary-500 flex-shrink-0 mt-0.5 hover:bg-primary-500/20 transition-colors cursor-pointer","aria-label":"Mark as done"},null,8,sP),b("div",oP,[b("div",aP,ye(T.title),1),b("span",{class:ct(["inline-block mt-1 px-1.5 py-0.5 rounded-full text-[7px] sm:text-[8px] font-medium",T.tagColor])},ye(T.tag),3)])])],8,iP))),128))])]),b("div",lP,[b("div",cP,[w[28]||(w[28]=b("span",{class:"text-[9px] sm:text-[10px] font-semibold text-primary-500"},"DONE",-1)),b("span",uP,ye(d.done.length),1)]),b("div",dP,[(ae(!0),ue(We,null,tt(d.done,T=>(ae(),ue("div",{key:T.id,class:"bg-secondary-800 light:bg-white rounded-md p-2 sm:p-2.5 border border-secondary-700 light:border-secondary-200 opacity-70 hover:opacity-100 transition-opacity cursor-pointer",onClick:H=>p("done",T.id)},[b("div",hP,[w[29]||(w[29]=b("div",{class:"w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 mt-0.5"},[b("svg",{class:"w-2 h-2 sm:w-2.5 sm:h-2.5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M5 13l4 4L19 7"})])],-1)),b("div",pP,[b("div",mP,ye(T.title),1),b("span",{class:ct(["inline-block mt-1 px-1.5 py-0.5 rounded-full text-[7px] sm:text-[8px] font-medium",T.tagColor])},ye(T.tag),3)])])],8,fP))),128))])])])])):t.value==="weather"?(ae(),ue("div",gP,[b("div",_P,[w[31]||(w[31]=b("div",{class:"flex items-center gap-2"},[b("span",{class:"text-base sm:text-lg"},"🌤️"),b("span",{class:"text-xs sm:text-sm font-semibold text-white light:text-secondary-900"},"SkyCast")],-1)),b("div",xP,[b("div",vP,[b("button",{onClick:w[5]||(w[5]=T=>C.value="C"),class:ct(["px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold transition-colors cursor-pointer",C.value==="C"?"bg-primary-600 text-white":"text-secondary-400 light:text-secondary-500 hover:text-white light:hover:text-secondary-900"])},"°C",2),b("button",{onClick:w[6]||(w[6]=T=>C.value="F"),class:ct(["px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold transition-colors cursor-pointer",C.value==="F"?"bg-primary-600 text-white":"text-secondary-400 light:text-secondary-500 hover:text-white light:hover:text-secondary-900"])},"°F",2)])])]),b("div",yP,[b("div",bP,[b("div",SP,[w[32]||(w[32]=b("svg",{class:"w-3 h-3 sm:w-3.5 sm:h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-secondary-500 light:text-secondary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1)),xc(b("input",{"onUpdate:modelValue":w[7]||(w[7]=T=>v.value=T),type:"text",placeholder:"Search city...",class:"w-full bg-secondary-700/50 light:bg-white border border-secondary-600 light:border-secondary-200 rounded-lg pl-7 pr-3 py-1.5 text-[10px] sm:text-xs text-white light:text-secondary-900 placeholder-secondary-500 light:placeholder-secondary-400 focus:outline-none focus:border-primary-500 transition-colors"},null,512),[[Id,v.value]])])]),v.value?(ae(),ue("div",MP,[(ae(!0),ue(We,null,tt(N.value,T=>(ae(),ue("button",{key:T,onClick:H=>U(T),class:"w-full px-3 py-2 text-left text-[10px] sm:text-xs text-secondary-300 light:text-secondary-600 hover:bg-primary-500/10 hover:text-primary-500 transition-colors cursor-pointer flex items-center gap-2"},[b("span",null,ye(x[T].emoji),1),b("span",null,ye(T),1),b("span",EP,ye(x[T].temp)+"°",1)],8,wP))),128))])):Rn("",!0)]),b("div",TP,[b("div",AP,[b("div",null,[b("div",CP,ye(A.value)+"°"+ye(C.value),1),b("div",RP,ye(R.value.condition),1),b("div",PP,ye(S.value)+" • 💧 "+ye(R.value.humidity)+"% • 🌬️ "+ye(R.value.wind)+" km/h",1)]),b("div",DP,ye(R.value.emoji),1)])]),b("div",LP,[w[33]||(w[33]=b("div",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-1.5 uppercase tracking-wider"},"Hourly Forecast",-1)),b("div",IP,[(ae(!0),ue(We,null,tt(y.value,(T,H)=>(ae(),ue("div",{key:H,class:"flex-1 min-w-[50px] sm:min-w-0 bg-secondary-800 light:bg-white rounded-lg p-1.5 sm:p-2 text-center border border-secondary-700 light:border-secondary-200 hover:border-primary-500/40 transition-colors cursor-pointer"},[b("div",UP,ye(T.time),1),b("div",NP,ye(T.emoji),1),b("div",FP,ye(T.temp)+"°",1)]))),128))])]),b("div",OP,[w[34]||(w[34]=b("div",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-1.5 uppercase tracking-wider"},"7-Day Forecast",-1)),b("div",kP,[(ae(!0),ue(We,null,tt(E.value,(T,H)=>(ae(),ue("div",{key:H,class:"flex items-center justify-between bg-secondary-800 light:bg-white rounded-md px-2.5 sm:px-3 py-1.5 sm:py-2 border border-secondary-700 light:border-secondary-200 hover:border-primary-500/40 transition-colors cursor-pointer"},[b("span",BP,ye(T.day),1),b("span",zP,ye(T.emoji),1),b("div",VP,[b("div",{class:"h-full bg-gradient-to-r from-yellow-500 to-primary-500 rounded-full",style:Mn({width:(T.high-10)*5+"%"})},null,4)]),b("span",HP,ye(T.high)+"° / "+ye(T.low)+"°",1)]))),128))])])])):t.value==="analytics"?(ae(),ue("div",GP,[b("div",WP,[b("div",XP,[w[36]||(w[36]=b("div",{class:"w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-primary-500 flex items-center justify-center"},[b("svg",{class:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})])],-1)),(ae(),ue(We,null,tt(4,T=>b("div",{key:T,class:"w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-secondary-700/50 light:bg-secondary-200 flex items-center justify-center cursor-pointer hover:bg-primary-500/20 transition-colors"},[...w[35]||(w[35]=[b("div",{class:"w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm bg-secondary-500 light:bg-secondary-400"},null,-1)])])),64))]),b("div",$P,[b("div",jP,[(ae(),ue(We,null,tt(z,T=>b("button",{key:T,onClick:H=>k(T),class:ct(["px-2 sm:px-3 py-1 rounded-full text-[8px] sm:text-[9px] font-medium transition-all cursor-pointer",V.value===T?"bg-primary-600 text-white shadow-md shadow-primary-500/25":"bg-secondary-800 light:bg-white text-secondary-400 light:text-secondary-500 border border-secondary-700 light:border-secondary-200 hover:text-white light:hover:text-secondary-900"])},ye(T),11,YP)),64))]),b("div",qP,[b("div",KP,[w[37]||(w[37]=b("div",{class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5"},"Followers",-1)),b("div",ZP,ye(L.followers.toLocaleString()),1),w[38]||(w[38]=b("div",{class:"text-[8px] sm:text-[9px] text-primary-500 mt-0.5"},"▲ 12%",-1))]),b("div",JP,[w[39]||(w[39]=b("div",{class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5"},"Engagement",-1)),b("div",QP,ye(L.engagement)+"%",1),w[40]||(w[40]=b("div",{class:"text-[8px] sm:text-[9px] text-primary-500 mt-0.5"},"▲ 0.8%",-1))]),b("div",eD,[w[41]||(w[41]=b("div",{class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5"},"Reach",-1)),b("div",tD,ye(L.reach.toLocaleString()),1),w[42]||(w[42]=b("div",{class:"text-[8px] sm:text-[9px] text-primary-500 mt-0.5"},"▲ 23%",-1))]),b("div",nD,[w[43]||(w[43]=b("div",{class:"text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5"},"Posts",-1)),b("div",iD,ye(L.posts),1),w[44]||(w[44]=b("div",{class:"text-[8px] sm:text-[9px] text-primary-500 mt-0.5"},"▲ 5%",-1))])]),b("div",rD,[w[45]||(w[45]=b("div",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-2"},"Engagement Over Time",-1)),b("div",sD,[(ae(!0),ue(We,null,tt(X.value,(T,H)=>(ae(),ue("div",{key:H,class:"flex-1 flex flex-col items-center gap-1 group cursor-pointer",onMouseenter:ee=>T.hover=!0,onMouseleave:ee=>T.hover=!1},[b("div",{class:ct(["w-full rounded-t bg-gradient-to-t from-primary-600 to-primary-400 transition-all duration-300 group-hover:from-primary-500 group-hover:to-primary-300",{"opacity-40":H%3===0}]),style:Mn({height:T.value+"%"})},null,6),b("span",aD,ye(T.label),1)],40,oD))),128))])]),b("div",lD,[b("div",cD,[w[46]||(w[46]=b("div",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-2"},"Platforms",-1)),b("div",uD,[(ae(),ue(We,null,tt(["Instagram","Twitter","LinkedIn"],(T,H)=>b("div",{key:T,class:"flex items-center gap-2 cursor-pointer hover:bg-secondary-700/30 light:hover:bg-secondary-100 rounded-md px-1.5 py-1 transition-colors",onClick:ee=>k(T)},[b("div",{class:ct(["w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full",["bg-primary-500","bg-accent-500","bg-yellow-500"][H]])},null,2),b("span",fD,ye(T),1),b("span",hD,ye([45,30,25][H])+"%",1)],8,dD)),64))])]),b("div",pD,[w[48]||(w[48]=b("div",{class:"text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-2"},"Top Posts",-1)),b("div",mD,[(ae(),ue(We,null,tt(3,T=>b("div",{key:T,class:"flex items-center gap-2 cursor-pointer hover:bg-secondary-700/30 light:hover:bg-secondary-100 rounded-md px-1.5 py-1 transition-colors"},[b("div",{class:ct(["w-5 h-5 sm:w-6 sm:h-6 rounded bg-gradient-to-br flex items-center justify-center text-[10px] sm:text-xs flex-shrink-0",["from-primary-500/30 to-primary-500/10","from-accent-500/30 to-accent-500/10","from-yellow-500/30 to-yellow-500/10"][T-1]])},ye(["📸","🐦","💼"][T-1]),3),w[47]||(w[47]=b("div",{class:"flex-1 min-w-0"},[b("div",{class:"h-1.5 bg-secondary-700 light:bg-secondary-200 rounded mb-1 w-4/5"}),b("div",{class:"h-1 bg-secondary-700 light:bg-secondary-200 rounded w-1/2"})],-1)),b("span",gD,ye([1200,890,650][T-1]),1)])),64))])])])])])])):t.value==="recipe"?(ae(),ue("div",_D,[b("div",xD,[w[51]||(w[51]=ho('<div class="flex items-center justify-between mb-2" data-v-b832dd55><div class="text-xs sm:text-sm font-bold text-primary-500" data-v-b832dd55>🍳 FlavorFind</div><div class="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary-500/20 flex items-center justify-center cursor-pointer hover:bg-primary-500/30 transition-colors" data-v-b832dd55><svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b832dd55><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-b832dd55></path></svg></div></div>',1)),b("div",vD,[b("div",yD,[w[49]||(w[49]=b("svg",{class:"w-3 h-3 sm:w-3.5 sm:h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-secondary-500 light:text-secondary-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1)),xc(b("input",{"onUpdate:modelValue":w[8]||(w[8]=T=>F.value=T),type:"text",placeholder:"Search recipes...",class:"w-full bg-secondary-700/50 light:bg-secondary-100 rounded-lg pl-7 pr-3 py-1.5 sm:py-2 text-[10px] sm:text-xs text-white light:text-secondary-900 placeholder-secondary-500 light:placeholder-secondary-400 focus:outline-none focus:border-primary-500 border border-transparent focus:border-primary-500/50 transition-colors"},null,512),[[Id,F.value]])]),w[50]||(w[50]=b("button",{class:"bg-primary-500 hover:bg-primary-400 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 flex items-center transition-colors cursor-pointer"},[b("span",{class:"text-[10px] sm:text-xs text-white font-semibold"},"Search")],-1))])]),b("div",bD,[(ae(),ue(We,null,tt(me,T=>b("button",{key:T,onClick:H=>j.value=T,class:ct(["px-2.5 sm:px-3 py-1 rounded-full text-[8px] sm:text-[9px] font-medium whitespace-nowrap transition-all cursor-pointer",j.value===T?"bg-primary-500 text-white shadow-md shadow-primary-500/25":"bg-secondary-800 light:bg-white text-secondary-400 light:text-secondary-500 border border-secondary-700 light:border-secondary-200 hover:text-white light:hover:text-secondary-900"])},ye(T),11,SD)),64))]),b("div",MD,[(ae(!0),ue(We,null,tt(ge.value,T=>(ae(),ue("div",{key:T.id,onClick:H=>ve(T),class:"bg-secondary-800 light:bg-white rounded-lg overflow-hidden border border-secondary-700 light:border-secondary-200 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-200 cursor-pointer"},[b("div",{class:ct(["h-14 sm:h-16 bg-gradient-to-br relative flex items-center justify-center text-2xl sm:text-3xl",T.color])},[b("span",null,ye(T.emoji),1),b("div",ED,"⏱ "+ye(T.time)+" min",1)],2),b("div",TD,[b("div",AD,ye(T.name),1),b("div",CD,[w[52]||(w[52]=b("span",{class:"text-yellow-500 text-[9px] sm:text-[10px]"},"★",-1)),b("span",RD,ye(T.rating),1),b("span",PD,ye(T.category),1)])])],8,wD))),128)),ge.value.length===0?(ae(),ue("div",DD,[...w[53]||(w[53]=[b("div",{class:"text-3xl mb-2"},"🔍",-1),b("p",{class:"text-xs text-secondary-400 light:text-secondary-500"},"No recipes found",-1)])])):Rn("",!0)]),Ct(Gf,{name:"fade"},{default:Au(()=>[ce.value?(ae(),ue("div",{key:0,class:"absolute inset-0 bg-dark-900/80 light:bg-secondary-900/80 backdrop-blur-sm z-20 flex items-center justify-center p-4",onClick:w[12]||(w[12]=T=>ce.value=null)},[b("div",{class:"bg-secondary-800 light:bg-white rounded-xl max-w-sm w-full p-5 border border-secondary-700 light:border-secondary-200 shadow-2xl",onClick:w[11]||(w[11]=Cs(()=>{},["stop"]))},[b("div",LD,[b("div",ID,ye(ce.value.emoji),1),b("button",{onClick:w[9]||(w[9]=T=>ce.value=null),class:"text-secondary-400 hover:text-white light:hover:text-secondary-900 transition-colors cursor-pointer","aria-label":"Close recipe"},[...w[54]||(w[54]=[b("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),b("h3",UD,ye(ce.value.name),1),b("div",ND,[b("span",FD,"★ "+ye(ce.value.rating),1),w[55]||(w[55]=b("span",{class:"text-[9px] text-secondary-500 light:text-secondary-400"},"•",-1)),b("span",OD,"⏱ "+ye(ce.value.time)+" min",1),w[56]||(w[56]=b("span",{class:"text-[9px] text-secondary-500 light:text-secondary-400"},"•",-1)),b("span",kD,ye(ce.value.category),1)]),b("div",BD,[(ae(),ue(We,null,tt(4,T=>b("div",{key:T,class:"flex items-center gap-2"},[w[57]||(w[57]=b("div",{class:"w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0"},null,-1)),b("div",{class:"h-1.5 bg-secondary-700 light:bg-secondary-200 rounded flex-1",style:Mn({width:60+T*8+"%"})},null,4)])),64))]),b("button",{onClick:w[10]||(w[10]=T=>ce.value=null),class:"w-full py-2 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-[10px] font-semibold transition-colors cursor-pointer"}," Start Cooking ")])])):Rn("",!0)]),_:1})])):t.value==="portfolio"?(ae(),ue("div",zD,[b("div",VD,[w[58]||(w[58]=b("div",{class:"text-xs sm:text-sm font-bold text-primary-500"},"👨‍💻 DevName",-1)),b("div",HD,[(ae(),ue(We,null,tt(J,T=>b("button",{key:T,onClick:H=>fe(T),class:ct(["capitalize cursor-pointer transition-colors",Te.value===T?"text-primary-500 font-semibold":"hover:text-white light:hover:text-secondary-900"])},ye(T),11,GD)),64))])]),b("div",WD,[Te.value==="home"?(ae(),ue("div",XD,[b("div",$D,[w[59]||(w[59]=ho('<div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 mx-auto mb-3 sm:mb-4 flex items-center justify-center" data-v-b832dd55><svg class="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b832dd55><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" data-v-b832dd55></path></svg></div><div class="text-base sm:text-lg font-bold text-white light:text-secondary-900 mb-1.5" data-v-b832dd55>Hi, I&#39;m a Developer</div><div class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 mb-3 sm:mb-4" data-v-b832dd55>Building beautiful web experiences</div>',3)),b("div",jD,[b("button",{onClick:w[13]||(w[13]=T=>fe("projects")),class:"bg-primary-500 hover:bg-primary-400 text-white text-[9px] sm:text-[10px] font-semibold px-3 sm:px-4 py-1.5 rounded-full transition-colors cursor-pointer"},"View Work"),b("button",{onClick:w[14]||(w[14]=T=>fe("contact")),class:"border border-secondary-600 light:border-secondary-300 text-secondary-300 light:text-secondary-600 hover:text-white light:hover:text-secondary-900 text-[9px] sm:text-[10px] font-semibold px-3 sm:px-4 py-1.5 rounded-full transition-colors cursor-pointer"},"Contact Me")])])])):Te.value==="about"?(ae(),ue("div",YD,[w[60]||(w[60]=b("h3",{class:"text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3"},"About Me",-1)),b("div",qD,[(ae(),ue(We,null,tt(4,T=>b("div",{key:T,class:"h-2 bg-secondary-700 light:bg-secondary-200 rounded",style:Mn({width:70+T*5+"%"})},null,4)),64))]),b("div",KD,[(ae(),ue(We,null,tt(["Vue.js","React","Node.js","TypeScript","Tailwind","GraphQL"],T=>b("div",{key:T,class:"bg-secondary-800 light:bg-white rounded-lg p-2.5 border border-secondary-700 light:border-secondary-200 text-center"},[b("div",ZD,ye(T),1),b("div",JD,[b("div",{class:"h-full bg-primary-500 rounded-full",style:Mn({width:60+T.length*3+"%"})},null,4)])])),64))])])):Te.value==="projects"?(ae(),ue("div",QD,[w[62]||(w[62]=b("h3",{class:"text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3"},"My Projects",-1)),b("div",eL,[(ae(),ue(We,null,tt(4,T=>b("div",{key:T,class:"bg-secondary-800 light:bg-white rounded-lg overflow-hidden border border-secondary-700 light:border-secondary-200 hover:border-primary-500/50 transition-colors cursor-pointer"},[b("div",{class:ct(["h-12 sm:h-16 bg-gradient-to-br flex items-center justify-center text-xl sm:text-2xl",["from-primary-500/30 to-primary-500/10","from-accent-500/30 to-accent-500/10","from-yellow-500/30 to-yellow-500/10","from-blue-500/30 to-blue-500/10"][T-1]])},ye(["📱","🌐","🎮","📊"][T-1]),3),w[61]||(w[61]=b("div",{class:"p-2 sm:p-2.5"},[b("div",{class:"h-1.5 bg-secondary-700 light:bg-secondary-200 rounded mb-1 w-4/5"}),b("div",{class:"h-1 bg-secondary-700 light:bg-secondary-200 rounded w-1/2"})],-1))])),64))])])):(ae(),ue("div",tL,[...w[63]||(w[63]=[ho('<h3 class="text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3" data-v-b832dd55>Get In Touch</h3><div class="space-y-2 mb-4" data-v-b832dd55><div class="flex items-center gap-2 bg-secondary-800 light:bg-white rounded-lg p-2.5 border border-secondary-700 light:border-secondary-200" data-v-b832dd55><span class="text-base" data-v-b832dd55>📧</span><span class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500" data-v-b832dd55>hello@devname.com</span></div><div class="flex items-center gap-2 bg-secondary-800 light:bg-white rounded-lg p-2.5 border border-secondary-700 light:border-secondary-200" data-v-b832dd55><span class="text-base" data-v-b832dd55>💼</span><span class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500" data-v-b832dd55>linkedin.com/in/devname</span></div><div class="flex items-center gap-2 bg-secondary-800 light:bg-white rounded-lg p-2.5 border border-secondary-700 light:border-secondary-200" data-v-b832dd55><span class="text-base" data-v-b832dd55>🐙</span><span class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500" data-v-b832dd55>github.com/devname</span></div></div><button class="w-full py-2 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-[10px] font-semibold transition-colors cursor-pointer" data-v-b832dd55>Send Message</button>',3)])]))]),b("div",nL,[b("div",iL,[(ae(),ue(We,null,tt(["Vue","React","Node","Python","Go"],T=>b("div",{key:T,class:"px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-secondary-700/50 light:bg-secondary-100 text-[8px] sm:text-[9px] text-secondary-400 light:text-secondary-500 border border-secondary-700 light:border-secondary-200 whitespace-nowrap"},ye(T),1)),64))])])])):(ae(),ue("div",rL,[b("div",sL,[b("div",oL,ye(n.project.title),1),b("div",aL,[(ae(),ue(We,null,tt(Re,T=>b("button",{key:T,onClick:H=>Ae(T),class:ct(["capitalize cursor-pointer transition-colors",oe.value===T?"text-primary-500 font-semibold":"hover:text-white light:hover:text-secondary-900"])},ye(T),11,lL)),64))])]),b("div",cL,[oe.value==="home"?(ae(),ue("div",uL,[b("div",dL,[w[64]||(w[64]=b("div",{class:"w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-500/20 mx-auto mb-2 sm:mb-3 flex items-center justify-center"},[b("svg",{class:"w-5 h-5 sm:w-6 sm:h-6 text-primary-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"}),b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M8 9h8M8 13h5"})])],-1)),b("div",fL,ye(n.project.title),1),b("div",hL,ye(n.project.description),1),b("div",pL,[(ae(!0),ue(We,null,tt(n.project.tech.slice(0,3),T=>(ae(),ue("div",{key:T,class:"px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-primary-500/10 text-[8px] sm:text-[9px] text-primary-500 border border-primary-500/20"},ye(T),1))),128))])])])):oe.value==="features"?(ae(),ue("div",mL,[w[66]||(w[66]=b("h3",{class:"text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3"},"Features",-1)),b("div",gL,[(ae(!0),ue(We,null,tt(n.project.features||["Feature 1","Feature 2","Feature 3","Feature 4"],(T,H)=>(ae(),ue("div",{key:H,class:"flex items-start gap-2 bg-secondary-800 light:bg-white rounded-lg p-2.5 sm:p-3 border border-secondary-700 light:border-secondary-200"},[w[65]||(w[65]=b("div",{class:"w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0"},[b("svg",{class:"w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})])],-1)),b("span",_L,ye(T),1)]))),128))])])):(ae(),ue("div",xL,[w[67]||(w[67]=b("h3",{class:"text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3"},"About",-1)),b("div",vL,[(ae(),ue(We,null,tt(5,T=>b("div",{key:T,class:"h-2 bg-secondary-700 light:bg-secondary-200 rounded",style:Mn({width:65+T*5+"%"})},null,4)),64))])]))])]))]))}},a0=Wa(yL,[["__scopeId","data-v-b832dd55"]]),bL={class:"relative w-full h-[500px] select-none"},SL=["disabled"],ML=["onClick","onMouseenter","onMouseleave"],wL={class:"relative overflow-hidden rounded-t-xl h-48"},EL={key:0,class:"absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent rounded-t-xl pointer-events-none"},TL={class:"p-5 bg-secondary-800 h-full light:bg-white rounded-b-xl"},AL={class:"text-white light:text-secondary-900 font-semibold text-lg mb-2"},CL={class:"text-secondary-400 light:text-secondary-500 text-sm mb-3 leading-relaxed line-clamp-2"},RL={class:"flex flex-wrap gap-1.5 mb-3"},PL=["disabled"],DL={class:"absolute bottom-0 left-1/2 -translate-x-1/2 w-64 sm:w-80"},LL={class:"h-1 rounded-full bg-secondary-800 light:bg-secondary-200 overflow-hidden"},Df=300,Ag=380,sl=2,ru=.6,ol=.5,IL=215,UL=34,NL=8,FL=1.08,OL=16,kL=58,BL={__name:"ProjectWheel",props:{projects:{type:Array,required:!0}},emits:["open"],setup(n,{emit:e}){const t=n,i=e,{isDark:r}=$p(),s=Fe(null),o=Fe(0),a=Fe(0),l=Fe(!1),c=Fe(null);let u=[],d=!1,f=0,h=0,m=!1;const _=Sn(()=>t.projects.length>1),p=Sn(()=>t.projects.length===0?0:(o.value+1)/t.projects.length*100),g=async()=>{await as(),!(!s.value||(u=Array.from(s.value.children),u.length===0))&&(u.forEach(ve=>{Xe.set(ve,{position:"absolute",top:"50%",left:"50%",width:Df,height:Ag,marginLeft:-Df/2,marginTop:-Ag/2,transformOrigin:"center center",willChange:"transform, opacity",borderRadius:"1rem",boxShadow:r.value?"0 10px 30px rgba(0,0,0,0.3)":"none",cursor:"pointer",backgroundColor:"rgb(var(--color-secondary-800))"})}),o.value=0,a.value=0,R(!0))},x=ge=>{const ve=sl;return ge<=ve?(ru+ol)*ge-ol*ge*ge/(2*ve):(ru+ol)*ve-ol*ve/2+ru*(ge-ve)},S=x(1),v=ge=>{const Te=360/u.length,J=o.value+a.value;let oe=(ge*Te-J*Te)%360;oe>180&&(oe-=360),oe<-180&&(oe+=360);const Re=oe/Te,Ae=Math.abs(Re),le=Math.min(Ae,sl),w=Math.max(0,1-Ae/(sl+1)),T=Math.sign(Re)*IL*(x(Ae)/S),H=UL*(1-Math.cos(le/sl*(Math.PI/2))),ee=Math.sign(Re)*NL*(le/sl),Y=ru+w*ol,O=w,I=Math.round(w*100);return{x:T,y:H,scale:Y,opacity:O,zIndex:I,rotation:ee,normalized:oe,offset:Re}},C=()=>!l.value&&!d,R=(ge=!1,ve=!1)=>{const Te=C()?c.value:null,J=Te!==null&&u[Te]?v(Te).offset:null;u.forEach((fe,oe)=>{const{x:Re,y:Ae,scale:le,opacity:w,zIndex:T,rotation:H,normalized:ee,offset:Y}=v(oe),O=Math.abs(ee)<5,I=Te===oe;let _e=Re,he=Ae,ne=le,pe=H,P=T,M=ge?"none":"power3.out",B=ge?0:.8;if(I)ne=le*FL,he=Ae-OL,pe=H*.35,P=150,ge||(M=ve?"elastic.out(1, 0.45)":"back.out(2)",B=ve?.9:.5);else if(J!==null){const q=Y-J,Me=Math.abs(q);if(Me>.01){const xe=kL/Me*Math.sign(q);_e=Re+xe,he=Ae+Math.min(10,10/Me),ge||(M=ve?"back.out(3)":"power3.out",B=ve?.75:.5)}}const Z=w>.05?1:0,Q={x:_e,y:he,scale:ne,rotation:pe,opacity:Z,zIndex:P,filter:O||I?"brightness(1)":r.value?"brightness(0.7)":"brightness(0.85)",boxShadow:I?"0 25px 60px rgb(var(--color-primary-500) / 0.45)":O?"0 0 50px rgb(var(--color-primary-500) / 0.35)":r.value?"0 0 0px rgb(var(--color-primary-500) / 0)":"none",pointerEvents:w>.05?"auto":"none",duration:B,ease:M,overwrite:"auto",borderRadius:"1rem",transformOrigin:"center center"};ge?Xe.set(fe,Q):Xe.to(fe,Q)})},A=ge=>{l.value||d||c.value!==ge&&(c.value=ge,R(!1,!0))},y=ge=>{c.value===ge&&(c.value=null,!(l.value||d)&&R(!1,!0))},E=ge=>{if(d||u.length===0||!_.value)return;d=!0,c.value=null;const ve=u.length;o.value=(o.value+ge+ve)%ve,Xe.to({},{duration:1,ease:"power3.inOut",onUpdate:()=>{R()},onComplete:()=>{d=!1,R()}})},N=ge=>{d||u.length===0||l.value||m||U(ge)},U=ge=>{const ve=u[ge];if(!ve)return;const Te=ve.getBoundingClientRect();i("open",{project:t.projects[ge],originRect:{left:Te.left,top:Te.top,width:Te.width,height:Te.height}})},L=ge=>{d||u.length===0||!_.value||(l.value=!0,c.value=null,m=!1,f=ge.clientX,h=ge.clientX,ge.preventDefault())},V=ge=>{if(!l.value)return;const ve=ge.clientX-h;h=ge.clientX,Math.abs(ge.clientX-f)>5&&(m=!0),a.value-=ve/Df,R()},z=()=>{if(!l.value)return;l.value=!1;const ge=u.length,ve=Math.round(a.value);if(!m&&ve===0){a.value=0;return}ve!==0&&(o.value=(o.value+ve+ge)%ge),a.value=0,d=!0,Xe.to({},{duration:.5,ease:"power3.out",onUpdate:()=>{R()},onComplete:()=>{d=!1,R(),setTimeout(()=>{m=!1},50)}})},G=()=>{l.value&&z()},X=()=>{c.value!==null&&(c.value=null,!l.value&&!d&&R(!1,!0)),z()},k=ge=>{const ve=ge.currentTarget;if(!ve.querySelector(".fill-overlay"))return;const J=ve.getBoundingClientRect(),fe=ge.clientX-J.left,oe=ge.clientY-J.top;ve.style.setProperty("--mx",`${fe}px`),ve.style.setProperty("--my",`${oe}px`)},K=ge=>{const ve=ge.currentTarget;if(ve.style.setProperty("--mx","50%"),ve.style.setProperty("--my","50%"),j){const Te=ve.querySelector(".fill-overlay");Te&&(Te.classList.remove("active"),Te.classList.add("fade-out"),setTimeout(()=>{Te.classList.remove("fade-out")},500))}},j=window.matchMedia("(hover: hover)").matches,F=ge=>{if(j)return;const ve=ge.currentTarget,Te=ve.querySelector(".fill-overlay");if(!Te)return;const J=ve.getBoundingClientRect(),fe=ge.clientX-J.left,oe=ge.clientY-J.top;ve.style.setProperty("--mx",`${fe}px`),ve.style.setProperty("--my",`${oe}px`),Te.classList.add("active")},ce=ge=>{if(j)return;const Te=ge.currentTarget.querySelector(".fill-overlay");Te&&(Te.classList.remove("active"),Te.classList.add("fade-out"),setTimeout(()=>{Te.classList.remove("fade-out")},500))},me=ge=>{if(!j)return;const ve=ge.currentTarget,Te=ve.querySelector(".fill-overlay");if(!Te)return;const J=ve.getBoundingClientRect(),fe=ge.clientX-J.left,oe=ge.clientY-J.top;ve.style.setProperty("--mx",`${fe}px`),ve.style.setProperty("--my",`${oe}px`),Te.classList.add("active")};return Tn(async()=>{await g()}),Ri(()=>t.projects,async()=>{await g()}),Ri(r,()=>{u.length>0&&R(!0)}),(ge,ve)=>(ae(),ue("div",bL,[b("button",{onClick:ve[0]||(ve[0]=Te=>E(-1)),onMousemove:k,onMouseleave:K,onMouseenter:me,onPointerdown:F,onPointerup:ce,onPointercancel:ce,disabled:!_.value,class:"absolute -left-24 md:-left-24 lg:-left-40 top-1/2 -translate-y-1/2 size-[200px] md:size-[200px] lg:size-[300px] rounded-full flex items-center justify-center text-secondary-300 light:text-secondary-500 disabled:opacity-40 disabled:cursor-not-allowed z-[110] border-2 border-primary-500/50 light:border-primary-600/50 hover:border-primary-500 light:hover:border-primary-600 hover:scale-105 transition-all duration-300 overflow-hidden","aria-label":"Previous project"},[...ve[2]||(ve[2]=[b("span",{class:"fill-overlay"},null,-1),b("svg",{class:"absolute z-10 w-8 h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 right-10 md:right-10 lg:right-16 top-1/2 -translate-y-1/2 text-primary-500 light:text-primary-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M19 12H5M12 19l-7-7 7-7"})],-1)])],40,SL),b("div",{ref_key:"wheelRef",ref:s,class:ct(["relative w-full h-full",{"cursor-grabbing":l.value,"cursor-grab":!l.value}]),onPointerdown:L,onPointermove:V,onPointerup:z,onPointercancel:G,onPointerleave:X},[(ae(!0),ue(We,null,tt(n.projects,(Te,J)=>(ae(),ue("div",{key:Te.id,onClick:fe=>N(J),onMouseenter:fe=>A(J),onMouseleave:fe=>y(J),class:"absolute rounded-xl overflow-hidden shadow-xl light:shadow-none",style:{width:"300px",height:"360px"}},[b("div",wL,[Ct(a0,{project:Te,class:"w-full h-full"},null,8,["project"]),mt(r)?(ae(),ue("div",EL)):Rn("",!0)]),b("div",TL,[b("h3",AL,ye(Te.title),1),b("p",CL,ye(Te.description),1),b("div",RL,[(ae(!0),ue(We,null,tt(Te.tech.slice(0,3),fe=>(ae(),ue("span",{key:fe,class:"text-xs text-primary-400 bg-primary-500/10 px-2 py-0.5 rounded-full"},ye(fe),1))),128))])])],40,ML))),128))],34),b("button",{onClick:ve[1]||(ve[1]=Te=>E(1)),onMousemove:k,onMouseleave:K,onMouseenter:me,onPointerdown:F,onPointerup:ce,onPointercancel:ce,disabled:!_.value,class:"absolute -right-24 md:-right-24 lg:-right-40 top-1/2 -translate-y-1/2 size-[200px] md:size-[200px] lg:size-[300px] rounded-full flex items-center justify-center text-secondary-300 light:text-secondary-500 disabled:opacity-40 disabled:cursor-not-allowed z-[110] border-2 border-primary-500/50 light:border-primary-600/50 hover:border-primary-500 light:hover:border-primary-600 hover:scale-105 transition-all duration-300 overflow-hidden","aria-label":"Next project"},[...ve[3]||(ve[3]=[b("span",{class:"fill-overlay"},null,-1),b("svg",{class:"absolute z-10 w-8 h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 left-10 md:left-10 lg:left-16 top-1/2 -translate-y-1/2 text-primary-500 light:text-primary-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M5 12h14M12 5l7 7-7 7"})],-1)])],40,PL),b("div",DL,[b("div",LL,[b("div",{class:"h-full rounded-full bg-primary-500 light:bg-primary-600 transition-all duration-500 ease-out",style:Mn({width:p.value+"%"})},null,4)])])]))}},zL=Wa(BL,[["__scopeId","data-v-4fd9bb21"]]),VL={class:"relative overflow-hidden h-48"},HL={class:"p-6"},GL={class:"text-white light:text-secondary-900 font-semibold text-lg mb-2 group-hover:text-primary-400 transition-colors duration-200"},WL={class:"text-secondary-400 light:text-secondary-500 text-sm mb-4 leading-relaxed"},XL={class:"flex flex-wrap gap-2 mb-4"},Cg={__name:"ProjectCard",props:{project:{type:Object,required:!0}},emits:["open"],setup(n,{emit:e}){const t=n,i=e,r=Fe(null);let s=null;const o=()=>{if(!r.value)return;const a=r.value.getBoundingClientRect();i("open",{project:t.project,originRect:{left:a.left,top:a.top,width:a.width,height:a.height}})};return Tn(()=>{r.value&&(s=j3(r.value,6))}),In(()=>{s&&s()}),(a,l)=>(ae(),ue("div",{ref_key:"cardRef",ref:r,onClick:o,class:"group bg-secondary-800 border border-secondary-700 rounded-xl overflow-hidden hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 will-change-transform cursor-pointer light:bg-white light:border-secondary-200 light:hover:border-primary-500/50 light:hover:shadow-primary-500/10"},[b("div",VL,[Ct(a0,{project:n.project,class:"w-full h-full group-hover:scale-105 transition-transform duration-500"},null,8,["project"]),l[0]||(l[0]=b("div",{class:"absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent pointer-events-none"},null,-1))]),b("div",HL,[b("h3",GL,ye(n.project.title),1),b("p",WL,ye(n.project.description),1),b("div",XL,[(ae(!0),ue(We,null,tt(n.project.tech,c=>(ae(),ue("span",{key:c,class:"text-xs text-primary-400 bg-primary-500/10 px-2 py-1 rounded-full"},ye(c),1))),128))])])],512))}},$L={class:"min-h-full flex flex-col lg:flex-row"},jL={class:"relative lg:w-1/2 lg:h-screen overflow-hidden flex-shrink-0"},YL={class:"absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:hidden bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent"},qL={class:"text-xl sm:text-3xl font-bold text-white mb-2"},KL={class:"flex flex-wrap gap-2"},ZL={class:"flex-1 p-5 sm:p-8 lg:p-12 lg:overflow-y-auto"},JL={class:"hidden lg:block text-4xl font-bold text-white light:text-secondary-900 mb-4"},QL={class:"hidden lg:flex flex-wrap gap-2 mb-6"},e5={class:"mb-8"},t5={class:"text-secondary-300 light:text-secondary-600 leading-relaxed text-lg"},n5={class:"mb-8"},i5={class:"space-y-3"},r5={class:"flex flex-wrap gap-4"},s5=["href"],o5=["href"],a5={__name:"ProjectDetailModal",props:{project:{type:Object,required:!0},originRect:{type:Object,default:null}},emits:["close"],setup(n,{emit:e}){const t=n,i=e,r=["Responsive design that works across all devices","Optimized performance with lazy loading and code splitting","Clean, maintainable code following best practices","Accessible UI with semantic HTML and ARIA labels"],s=Fe(null),o=Fe(null),a=Fe(null),l=Fe(null),c=Fe(!1);let u=null;const d=async()=>{if(await as(),!s.value||!o.value)return;const m=s.value,_=o.value,p=a.value,g=t.originRect||{left:0,top:0,width:0,height:0},x=window.innerWidth,S=window.innerHeight;Xe.set(m,{opacity:0,pointerEvents:"none"}),Xe.set(_,{position:"fixed",left:g.left,top:g.top,width:g.width,height:g.height,margin:0,borderRadius:"1rem",zIndex:9999,overflow:"hidden"}),Xe.set(p,{opacity:0,y:30}),Xe.to(m,{opacity:1,duration:.3,ease:"power2.out",pointerEvents:"auto"}),u=Xe.timeline({defaults:{ease:"power3.inOut"}}),u.to(_,{left:0,top:0,width:x,height:S,borderRadius:0,duration:.7}).to(p,{opacity:1,y:0,duration:.5,ease:"power2.out"},"-=0.3").from(l.value,{opacity:0,scale:.8,duration:.3,ease:"back.out(1.7)"},"-=0.2")},f=()=>{if(c.value)return;c.value=!0;const m=s.value,_=o.value,p=a.value,g=t.originRect||{left:0,top:0,width:0,height:0};u&&u.kill(),Xe.timeline({defaults:{ease:"power3.inOut"},onComplete:()=>{i("close")}}).to(p,{opacity:0,y:-30,duration:.3,ease:"power2.in"}).to(_,{left:g.left,top:g.top,width:g.width,height:g.height,borderRadius:"1rem",duration:.6},"-=0.1").to(m,{opacity:0,duration:.3,ease:"power2.in"},"-=0.3")},h=m=>{m.key==="Escape"&&f()};return Tn(()=>{d(),document.body.style.overflow="hidden",window.addEventListener("keydown",h)}),In(()=>{document.body.style.overflow="",window.removeEventListener("keydown",h),u&&u.kill()}),(m,_)=>(ae(),ue("div",{ref_key:"overlayRef",ref:s,class:"fixed inset-0 z-[9998] bg-dark-900/90 light:bg-secondary-900/90 backdrop-blur-sm",onClick:Cs(f,["self"])},[b("div",{ref_key:"cardRef",ref:o,class:"bg-secondary-800 light:bg-white shadow-2xl"},[b("button",{ref_key:"closeBtnRef",ref:l,onClick:f,class:"fixed top-4 right-4 z-[10000] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-900/80 light:bg-white/90 border border-secondary-700 light:border-secondary-200 flex items-center justify-center text-secondary-300 light:text-secondary-600 hover:text-primary-400 light:hover:text-primary-600 hover:border-primary-500/50 transition-colors duration-200 shadow-lg backdrop-blur-sm","aria-label":"Close project details"},[..._[0]||(_[0]=[b("svg",{class:"w-5 h-5 sm:w-6 sm:h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])],512),b("div",{ref_key:"contentRef",ref:a,class:"h-full w-full overflow-y-auto overscroll-contain"},[b("div",$L,[b("div",jL,[Ct(a0,{project:n.project,class:"w-full h-[60vh] sm:h-[55vh] lg:h-full"},null,8,["project"]),b("div",YL,[b("h2",qL,ye(n.project.title),1),b("div",KL,[(ae(!0),ue(We,null,tt(n.project.tech,p=>(ae(),ue("span",{key:p,class:"text-xs text-primary-300 bg-primary-500/20 px-3 py-1 rounded-full backdrop-blur-sm"},ye(p),1))),128))])])]),b("div",ZL,[b("h2",JL,ye(n.project.title),1),b("div",QL,[(ae(!0),ue(We,null,tt(n.project.tech,p=>(ae(),ue("span",{key:p,class:"text-sm text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full"},ye(p),1))),128))]),b("div",e5,[_[1]||(_[1]=b("h3",{class:"text-lg font-semibold text-primary-400 light:text-primary-600 mb-3 uppercase tracking-wider"}," About This Project ",-1)),b("p",t5,ye(n.project.description),1)]),b("div",n5,[_[3]||(_[3]=b("h3",{class:"text-lg font-semibold text-primary-400 light:text-primary-600 mb-3 uppercase tracking-wider"}," Key Features ",-1)),b("ul",i5,[(ae(!0),ue(We,null,tt(n.project.features||r,(p,g)=>(ae(),ue("li",{key:g,class:"flex items-start gap-3 text-secondary-300 light:text-secondary-600"},[_[2]||(_[2]=b("svg",{class:"w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})],-1)),b("span",null,ye(p),1)]))),128))])]),b("div",r5,[b("a",{href:n.project.github,target:"_blank",rel:"noopener noreferrer",class:"inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary-700 light:bg-secondary-100 text-white light:text-secondary-900 font-medium hover:bg-primary-600 light:hover:bg-primary-600 light:hover:text-white transition-colors duration-300"},[..._[4]||(_[4]=[b("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24"},[b("path",{"fill-rule":"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z","clip-rule":"evenodd"})],-1),Mi(" View Code ",-1)])],8,s5),b("a",{href:n.project.demo,target:"_blank",rel:"noopener noreferrer",class:"inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors duration-300 shadow-lg shadow-primary-500/25"},[..._[5]||(_[5]=[b("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})],-1),Mi(" Live Demo ",-1)])],8,o5)])])])],512)],512)],512))}},l5={class:"h-1 bg-secondary-800/50 light:bg-secondary-200/50 backdrop-blur-sm"},c5={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},u5={class:"flex flex-wrap gap-3"},d5=["onClick"],f5={key:0,class:"ml-auto flex items-center gap-1 p-1 rounded-lg bg-secondary-800 border border-secondary-700 light:bg-secondary-100 light:border-secondary-200"},h5={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"},p5={__name:"ProjectsSection",setup(n){Xe.registerPlugin(ot);const e=Fe("All"),t=Fe("carousel"),i=Fe(!1),r=Fe(0),s=Fe(0),o=Fe(!1),a=Fe(null),l=Fe(null),c=Fe(null),u=Fe(null),d=Fe(null),f=Fe(null),h=Fe(null),m=Fe(null),_=Fe(null),p=Fe(null);let g=[],x=null,S=null,v=null,C=null;const R=Sn(()=>{const j=Pf.flatMap(F=>F.tech);return["All",...new Set(j)]}),A=Sn(()=>e.value==="All"?Pf:Pf.filter(j=>j.tech.includes(e.value))),y=j=>{e.value=j},E=({project:j,originRect:F})=>{_.value=j,p.value=F},N=()=>{_.value=null,p.value=null};Ri(A,async()=>{await as(),V(),t.value==="horizontal"&&k()});const U=j=>{i.value||(t.value=j,j==="horizontal"?as(()=>k()):K())},L=j=>{i.value=j.matches,j.matches&&(t.value="grid",K())},V=()=>{if(!d.value)return;const j=d.value.getBoundingClientRect(),F=window.innerHeight,ce=j.height-F,me=Math.min(Math.max(-j.top,0),ce);r.value=ce>0?me/ce*100:100},z=()=>{S&&window.removeEventListener("scroll",S,{passive:!0}),S=()=>V(),window.addEventListener("scroll",S,{passive:!0}),V()},G=()=>{if(!f.value)return;const j=f.value.getBoundingClientRect(),F=window.innerHeight,me=j.height-F;if(o.value=j.top<F&&j.bottom>0,me>0){const ge=Math.min(Math.max(-j.top,0),me);s.value=ge/me*100}else s.value=o.value?100:0},X=()=>{v&&window.removeEventListener("scroll",v,{passive:!0}),v=()=>G(),window.addEventListener("scroll",v,{passive:!0}),G()},k=()=>{if(K(),!h.value||!m.value||!u.value)return;const j=m.value,F=u.value,me=j.scrollWidth-window.innerWidth;me<=0||(C=Xe.to(j,{x:-me,ease:"none",scrollTrigger:{trigger:F,start:"top top",end:()=>`+=${me}`,pin:!0,pinSpacing:!0,scrub:!0,anticipatePin:1,invalidateOnRefresh:!0,preventOverlaps:!0,fastScrollEnd:!0}}))},K=()=>{var j;C&&((j=C.scrollTrigger)==null||j.kill(),C.kill(),C=null)};return Tn(()=>{x=window.matchMedia("(max-width: 768px)"),i.value=x.matches,i.value&&(t.value="grid"),x.addEventListener("change",L),g.push(...o0(a.value,{x:-120,start:"top 90%",end:"top 40%"})),g.push(...s0(u.value,{y:60,duration:1.2,start:"top 80%",blur:14})),z(),X()}),In(()=>{g.forEach(j=>j.kill()),K(),x&&x.removeEventListener("change",L),S&&window.removeEventListener("scroll",S,{passive:!0}),v&&window.removeEventListener("scroll",v,{passive:!0})}),(j,F)=>(ae(),ue("section",{ref_key:"sectionRef",ref:f,id:"projects",class:ct(["pt-20 pb-0 bg-dark-800 light:bg-white relative",t.value==="horizontal"?"overflow-visible":"overflow-hidden"])},[F[5]||(F[5]=b("div",{class:"absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"},null,-1)),o.value?(ae(),ue("div",{key:0,class:ct(["fixed top-16 left-0 right-0 z-40 transition-opacity duration-300",s.value>=100?"opacity-0 pointer-events-none":"opacity-100"])},[b("div",l5,[b("div",{class:"h-full bg-gradient-to-r from-primary-500 to-accent-500 light:from-primary-600 light:to-accent-600 transition-all duration-150 ease-out",style:Mn({width:s.value+"%"})},null,4)])],2)):Rn("",!0),b("div",c5,[b("h2",{ref_key:"titleRef",ref:a,class:"section-title"},"Featured Projects",512),b("p",{ref_key:"subtitleRef",ref:l,class:"section-subtitle"},"A selection of projects I've built",512),b("div",{ref_key:"filterRef",ref:c,class:"flex flex-wrap items-center gap-3 mb-10"},[b("div",u5,[(ae(!0),ue(We,null,tt(R.value,ce=>(ae(),ue("button",{key:ce,onClick:me=>y(ce),class:ct(["px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105",e.value===ce?"bg-primary-600 text-white shadow-lg shadow-primary-500/25":"bg-secondary-800 text-secondary-400 hover:text-white border border-secondary-700 light:bg-white light:text-secondary-500 light:hover:text-secondary-900 light:border-secondary-200"])},ye(ce),11,d5))),128))]),i.value?Rn("",!0):(ae(),ue("div",f5,[b("button",{onClick:F[0]||(F[0]=ce=>U("grid")),class:ct(["px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300",t.value==="grid"?"bg-primary-600 text-white shadow-md shadow-primary-500/25":"text-secondary-400 hover:text-white light:text-secondary-500 light:hover:text-secondary-900"]),"aria-label":"Grid view"},[...F[2]||(F[2]=[b("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})],-1)])],2),b("button",{onClick:F[1]||(F[1]=ce=>U("carousel")),class:ct(["px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300",t.value==="carousel"?"bg-primary-600 text-white shadow-md shadow-primary-500/25":"text-secondary-400 hover:text-white light:text-secondary-500 light:hover:text-secondary-900"]),"aria-label":"Carousel view"},[...F[3]||(F[3]=[b("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)])],2)]))],512)]),b("div",{ref_key:"wheelContainerRef",ref:u,class:"w-full"},[t.value==="grid"?(ae(),ue("div",{key:0,ref_key:"gridContainerRef",ref:d,class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"},[b("div",h5,[(ae(!0),ue(We,null,tt(A.value,ce=>(ae(),wl(Cg,{key:ce.id,project:ce,onOpen:E},null,8,["project"]))),128))]),F[4]||(F[4]=b("div",{class:"mt-10 flex justify-center"},[b("div",{class:"w-64 sm:w-80"})],-1))],512)):t.value==="carousel"?(ae(),wl(zL,{key:1,projects:A.value,onOpen:E},null,8,["projects"])):t.value==="horizontal"?(ae(),ue("div",{key:2,ref_key:"horizontalContainerRef",ref:h,class:"relative h-screen overflow-hidden"},[b("div",{ref_key:"horizontalTrackRef",ref:m,class:"flex items-center gap-8 px-8 sm:px-12 lg:px-16 h-full w-max"},[(ae(!0),ue(We,null,tt(A.value,ce=>(ae(),ue("div",{key:ce.id,class:"w-[320px] sm:w-[380px] lg:w-[420px] shrink-0"},[Ct(Cg,{project:ce,onOpen:E},null,8,["project"])]))),128))],512)],512)):Rn("",!0)],512),_.value?(ae(),wl(a5,{key:1,project:_.value,"origin-rect":p.value,onClose:N},null,8,["project","origin-rect"])):Rn("",!0)],2))}},m5={id:"contact",class:"py-20 bg-dark-800 light:bg-white relative overflow-hidden"},g5={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},_5={class:"text-center mb-16"},x5={class:"text-center"},v5={class:"flex items-center justify-center gap-4"},y5=["href","aria-label"],b5={class:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24"},S5=["d"],M5={__name:"ContactSection",setup(n){const e=Fe(null),t=Fe(null),i=Fe(null);let r=[];const s=[{name:"GitHub",href:"https://github.com/pixel-user-512",icon:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"},{name:"LinkedIn",href:"https://linkedin.com/in/kenneth-paul-cortez",icon:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"}];return Tn(()=>{r.push(...o0(t.value,{x:-120,start:"top 90%",end:"top 40%"})),r.push(...s0(e.value,{y:60,duration:1.2,stagger:.15,start:"top 80%",blur:14}))}),In(()=>{r.forEach(o=>o.kill())}),(o,a)=>(ae(),ue("section",m5,[a[2]||(a[2]=b("div",{class:"absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"},null,-1)),b("div",g5,[b("div",_5,[b("h2",{ref_key:"titleRef",ref:t,class:"section-title"},"Get In Touch",512),b("p",{ref_key:"subtitleRef",ref:i,class:"section-subtitle"},"Have a project in mind? Let's work together!",512)]),b("div",{ref_key:"infoRef",ref:e,class:"max-w-3xl mx-auto"},[a[1]||(a[1]=ho('<div class="text-center mb-12"><p class="text-secondary-400 light:text-secondary-500 text-lg leading-relaxed"> I&#39;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out! </p></div><div class="grid sm:grid-cols-2 gap-4 mb-12"><a href="mailto:kenneth.cortez.512@gmail.com" class="group flex items-center gap-4 bg-secondary-800/50 border border-secondary-700 rounded-2xl p-5 hover:border-primary-500/50 hover:bg-secondary-800/80 transition-all duration-300 light:bg-white light:border-secondary-200 light:hover:border-primary-500/50"><span class="w-12 h-12 flex items-center justify-center bg-secondary-800 border border-secondary-700 rounded-xl group-hover:border-primary-500/50 group-hover:scale-110 transition-all duration-300 light:bg-secondary-50 light:border-secondary-200 shrink-0"><svg class="w-6 h-6 text-primary-400 light:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></span><span class="min-w-0"><span class="block text-xs text-secondary-500 light:text-secondary-400 uppercase tracking-wider mb-1">Email</span><span class="block text-secondary-200 light:text-secondary-700 font-medium truncate">kenneth.cortez.512@gmail.com</span></span></a><a href="tel:+639664002142" class="group flex items-center gap-4 bg-secondary-800/50 border border-secondary-700 rounded-2xl p-5 hover:border-primary-500/50 hover:bg-secondary-800/80 transition-all duration-300 light:bg-white light:border-secondary-200 light:hover:border-primary-500/50"><span class="w-12 h-12 flex items-center justify-center bg-secondary-800 border border-secondary-700 rounded-xl group-hover:border-primary-500/50 group-hover:scale-110 transition-all duration-300 light:bg-secondary-50 light:border-secondary-200 shrink-0"><svg class="w-6 h-6 text-primary-400 light:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></span><span class="min-w-0"><span class="block text-xs text-secondary-500 light:text-secondary-400 uppercase tracking-wider mb-1">Phone</span><span class="block text-secondary-200 light:text-secondary-700 font-medium">+63 (966) 400-2142</span></span></a></div>',2)),b("div",x5,[a[0]||(a[0]=b("h4",{class:"text-white light:text-secondary-900 text-sm font-semibold uppercase tracking-wider mb-5"},"Follow Me",-1)),b("div",v5,[(ae(),ue(We,null,tt(s,l=>b("a",{key:l.name,href:l.href,target:"_blank",rel:"noopener noreferrer",class:"w-12 h-12 flex items-center justify-center bg-secondary-800 border border-secondary-700 rounded-xl text-secondary-400 hover:text-primary-400 hover:border-primary-500/50 hover:scale-110 transition-all duration-300 light:bg-white light:border-secondary-200 light:text-secondary-500 light:hover:text-primary-600","aria-label":l.name},[(ae(),ue("svg",b5,[b("path",{d:l.icon},null,8,S5)]))],8,y5)),64))])])],512)])]))}},w5={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},E5={class:"flex flex-col md:flex-row items-center justify-between gap-4"},T5={class:"text-secondary-400 light:text-secondary-500 text-sm"},A5={class:"flex items-center gap-6"},C5={__name:"Footer",setup(n){const e=new Date().getFullYear(),t=Fe(null);let i=[];const r=()=>{const s=Lo();s?s.scrollTo(0):window.scrollTo({top:0,behavior:"smooth"})};return Tn(()=>{i=s0(t.value,{y:30,duration:1,start:"top bottom",blur:8})}),In(()=>{i.forEach(s=>s.kill())}),(s,o)=>(ae(),ue("footer",{ref_key:"footerRef",ref:t,class:"bg-dark-800 border-t border-dark-700 light:bg-white light:border-secondary-200 py-8"},[b("div",w5,[b("div",E5,[b("div",T5," © "+ye(mt(e))+" Kenneth Paul Cortez ",1),b("div",A5,[b("a",{href:"#home",onClick:Cs(r,["prevent"]),class:"text-secondary-400 hover:text-primary-400 light:text-secondary-500 light:hover:text-primary-600 transition-colors duration-200 text-sm"}," Home "),o[0]||(o[0]=b("a",{href:"#about",class:"text-secondary-400 hover:text-primary-400 light:text-secondary-500 light:hover:text-primary-600 transition-colors duration-200 text-sm"}," About ",-1)),o[1]||(o[1]=b("a",{href:"#projects",class:"text-secondary-400 hover:text-primary-400 light:text-secondary-500 light:hover:text-primary-600 transition-colors duration-200 text-sm"}," Projects ",-1)),o[2]||(o[2]=b("a",{href:"#contact",class:"text-secondary-400 hover:text-primary-400 light:text-secondary-500 light:hover:text-primary-600 transition-colors duration-200 text-sm"}," Contact ",-1))]),o[3]||(o[3]=b("div",{class:"text-secondary-500 light:text-secondary-400 text-sm"},[Mi(" Built with "),b("span",{class:"text-primary-500"},"Vue 3"),Mi(" & "),b("span",{class:"text-primary-500"},"Tailwind CSS")],-1))])])],512))}},R5={__name:"BackToTop",setup(n){const e=Fe(!1),t=()=>{e.value=window.scrollY>400},i=()=>{const r=Lo();r?r.scrollTo(0):window.scrollTo({top:0,behavior:"smooth"})};return Tn(()=>{window.addEventListener("scroll",t)}),In(()=>{window.removeEventListener("scroll",t)}),(r,s)=>(ae(),wl(Gf,{"enter-active-class":"transition-all duration-300 ease-out","enter-from-class":"opacity-0 translate-y-4","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition-all duration-300 ease-in","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 translate-y-4"},{default:Au(()=>[e.value?(ae(),ue("button",{key:0,onClick:i,class:"fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white rounded-xl shadow-lg shadow-primary-500/25 hover:scale-110 transition-all duration-300","aria-label":"Back to top"},[...s[0]||(s[0]=[b("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 15l7-7 7 7"})],-1)])])):Rn("",!0)]),_:1}))}},P5={__name:"MouseTrail",setup(n){const{isMouseTrailEnabled:e}=lv();let t=null;const i=()=>{t||(t=Y3({size:45,trailLength:400,trailWidth:16}))},r=()=>{t&&(t(),t=null)};return Tn(()=>{e.value&&i()}),In(()=>{r()}),Ri(e,s=>{s?i():r()}),(s,o)=>null}},D5={__name:"IntroLoader",setup(n){const e=Fe(!0),t=Fe(null);return Tn(()=>{document.body.style.overflow="hidden";const i=getComputedStyle(document.documentElement).getPropertyValue("--color-primary-500").trim();t.value.style.backgroundColor=`rgb(${i})`;const r={size:3};t.value.style.setProperty("--hole-size",`${r.size}%`),Xe.delayedCall(.5,()=>{Xe.to(r,{size:100,duration:.6,ease:"power2.inOut",onUpdate:()=>{t.value.style.setProperty("--hole-size",`${r.size}%`)},onComplete:()=>{e.value=!1,document.body.style.overflow=""}})})}),In(()=>{document.body.style.overflow=""}),(i,r)=>e.value?(ae(),ue("div",{key:0,ref_key:"overlayRef",ref:t,class:"intro-overlay"},null,512)):Rn("",!0)}},L5=Wa(D5,[["__scopeId","data-v-151ea3fb"]]),I5={class:"min-h-screen bg-dark-900 light:bg-secondary-50"},U5={__name:"App",setup(n){return LM(),(e,t)=>(ae(),ue("div",I5,[Ct(mw),b("main",null,[Ct(I3),Ct(X3),Ct(uR),Ct(p5),Ct(M5)]),Ct(C5),Ct(R5),Ct(P5),Ct(L5)]))}};Cb(U5).mount("#app");
