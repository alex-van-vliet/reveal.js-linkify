/*!
* reveal.js-linkify 0.0.1
* https://github.com/alex-van-vliet/reveal.js-linkify
* GNU GPLv3 Licensed
*
* Copyright (C) 2023, https://alexvanvliet.pro
*/
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).Linkify=r()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var r=function(){this.__data__=[],this.size=0};var e=function(t,r){return t===r||t!=t&&r!=r},n=e;var o=function(t,r){for(var e=t.length;e--;)if(n(t[e][0],r))return e;return-1},i=o,a=Array.prototype.splice;var u=o;var c=o;var f=o;var s=r,v=function(t){var r=this.__data__,e=i(r,t);return!(e<0)&&(e==r.length-1?r.pop():a.call(r,e,1),--this.size,!0)},l=function(t){var r=this.__data__,e=u(r,t);return e<0?void 0:r[e][1]},p=function(t){return c(this.__data__,t)>-1},y=function(t,r){var e=this.__data__,n=f(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this};function h(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}h.prototype.clear=s,h.prototype.delete=v,h.prototype.get=l,h.prototype.has=p,h.prototype.set=y;var _=h,d=_;var b=function(){this.__data__=new d,this.size=0};var g=function(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e};var j=function(t){return this.__data__.get(t)};var O=function(t){return this.__data__.has(t)},w="object"==typeof t&&t&&t.Object===Object&&t,A=w,m="object"==typeof self&&self&&self.Object===Object&&self,z=A||m||Function("return this")(),x=z.Symbol,P=x,T=Object.prototype,S=T.hasOwnProperty,F=T.toString,k=P?P.toStringTag:void 0;var U=function(t){var r=S.call(t,k),e=t[k];try{t[k]=void 0;var n=!0}catch(t){}var o=F.call(t);return n&&(r?t[k]=e:delete t[k]),o},$=Object.prototype.toString;var B=U,E=function(t){return $.call(t)},I=x?x.toStringTag:void 0;var M=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":I&&I in Object(t)?B(t):E(t)};var C=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)},D=M,L=C;var R,q=function(t){if(!L(t))return!1;var r=D(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},G=z["__core-js_shared__"],N=(R=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+R:"";var V=function(t){return!!N&&N in t},W=Function.prototype.toString;var H=q,J=V,K=C,Q=function(t){if(null!=t){try{return W.call(t)}catch(t){}try{return t+""}catch(t){}}return""},X=/^\[object .+?Constructor\]$/,Y=Function.prototype,Z=Object.prototype,tt=Y.toString,rt=Z.hasOwnProperty,et=RegExp("^"+tt.call(rt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var nt=function(t){return!(!K(t)||J(t))&&(H(t)?et:X).test(Q(t))},ot=function(t,r){return null==t?void 0:t[r]};var it=function(t,r){var e=ot(t,r);return nt(e)?e:void 0},at=it(z,"Map"),ut=it(Object,"create"),ct=ut;var ft=function(){this.__data__=ct?ct(null):{},this.size=0};var st=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},vt=ut,lt=Object.prototype.hasOwnProperty;var pt=function(t){var r=this.__data__;if(vt){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return lt.call(r,t)?r[t]:void 0},yt=ut,ht=Object.prototype.hasOwnProperty;var _t=ut;var dt=ft,bt=st,gt=pt,jt=function(t){var r=this.__data__;return yt?void 0!==r[t]:ht.call(r,t)},Ot=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=_t&&void 0===r?"__lodash_hash_undefined__":r,this};function wt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}wt.prototype.clear=dt,wt.prototype.delete=bt,wt.prototype.get=gt,wt.prototype.has=jt,wt.prototype.set=Ot;var At=wt,mt=_,zt=at;var xt=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t};var Pt=function(t,r){var e=t.__data__;return xt(r)?e["string"==typeof r?"string":"hash"]:e.map},Tt=Pt;var St=Pt;var Ft=Pt;var kt=Pt;var Ut=function(){this.size=0,this.__data__={hash:new At,map:new(zt||mt),string:new At}},$t=function(t){var r=Tt(this,t).delete(t);return this.size-=r?1:0,r},Bt=function(t){return St(this,t).get(t)},Et=function(t){return Ft(this,t).has(t)},It=function(t,r){var e=kt(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this};function Mt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Mt.prototype.clear=Ut,Mt.prototype.delete=$t,Mt.prototype.get=Bt,Mt.prototype.has=Et,Mt.prototype.set=It;var Ct=_,Dt=at,Lt=Mt;var Rt=_,qt=b,Gt=g,Nt=j,Vt=O,Wt=function(t,r){var e=this.__data__;if(e instanceof Ct){var n=e.__data__;if(!Dt||n.length<199)return n.push([t,r]),this.size=++e.size,this;e=this.__data__=new Lt(n)}return e.set(t,r),this.size=e.size,this};function Ht(t){var r=this.__data__=new Rt(t);this.size=r.size}Ht.prototype.clear=qt,Ht.prototype.delete=Gt,Ht.prototype.get=Nt,Ht.prototype.has=Vt,Ht.prototype.set=Wt;var Jt=Ht,Kt=it,Qt=function(){try{var t=Kt(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),Xt=Qt;var Yt=function(t,r,e){"__proto__"==r&&Xt?Xt(t,r,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[r]=e},Zt=Yt,tr=e;var rr=function(t,r,e){(void 0!==e&&!tr(t[r],e)||void 0===e&&!(r in t))&&Zt(t,r,e)};var er=function(t){return function(r,e,n){for(var o=-1,i=Object(r),a=n(r),u=a.length;u--;){var c=a[t?u:++o];if(!1===e(i[c],c,i))break}return r}}(),nr={};!function(t,r){var e=z,n=r&&!r.nodeType&&r,o=n&&t&&!t.nodeType&&t,i=o&&o.exports===n?e.Buffer:void 0,a=i?i.allocUnsafe:void 0;t.exports=function(t,r){if(r)return t.slice();var e=t.length,n=a?a(e):new t.constructor(e);return t.copy(n),n}}({get exports(){return nr},set exports(t){nr=t}},nr);var or=z.Uint8Array;var ir=function(t){var r=new t.constructor(t.byteLength);return new or(r).set(new or(t)),r};var ar=function(t,r){var e=r?ir(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)};var ur=function(t,r){var e=-1,n=t.length;for(r||(r=Array(n));++e<n;)r[e]=t[e];return r},cr=C,fr=Object.create,sr=function(){function t(){}return function(r){if(!cr(r))return{};if(fr)return fr(r);t.prototype=r;var e=new t;return t.prototype=void 0,e}}();var vr=function(t,r){return function(e){return t(r(e))}}(Object.getPrototypeOf,Object),lr=Object.prototype;var pr=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||lr)},yr=sr,hr=vr,_r=pr;var dr=function(t){return"function"!=typeof t.constructor||_r(t)?{}:yr(hr(t))};var br=function(t){return null!=t&&"object"==typeof t},gr=M,jr=br;var Or=function(t){return jr(t)&&"[object Arguments]"==gr(t)},wr=br,Ar=Object.prototype,mr=Ar.hasOwnProperty,zr=Ar.propertyIsEnumerable,xr=Or(function(){return arguments}())?Or:function(t){return wr(t)&&mr.call(t,"callee")&&!zr.call(t,"callee")},Pr=xr,Tr=Array.isArray;var Sr=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},Fr=q,kr=Sr;var Ur=function(t){return null!=t&&kr(t.length)&&!Fr(t)},$r=Ur,Br=br;var Er=function(t){return Br(t)&&$r(t)},Ir={};var Mr=function(){return!1};!function(t,r){var e=z,n=Mr,o=r&&!r.nodeType&&r,i=o&&t&&!t.nodeType&&t,a=i&&i.exports===o?e.Buffer:void 0,u=(a?a.isBuffer:void 0)||n;t.exports=u}({get exports(){return Ir},set exports(t){Ir=t}},Ir);var Cr=M,Dr=vr,Lr=br,Rr=Function.prototype,qr=Object.prototype,Gr=Rr.toString,Nr=qr.hasOwnProperty,Vr=Gr.call(Object);var Wr=function(t){if(!Lr(t)||"[object Object]"!=Cr(t))return!1;var r=Dr(t);if(null===r)return!0;var e=Nr.call(r,"constructor")&&r.constructor;return"function"==typeof e&&e instanceof e&&Gr.call(e)==Vr},Hr=M,Jr=Sr,Kr=br,Qr={};Qr["[object Float32Array]"]=Qr["[object Float64Array]"]=Qr["[object Int8Array]"]=Qr["[object Int16Array]"]=Qr["[object Int32Array]"]=Qr["[object Uint8Array]"]=Qr["[object Uint8ClampedArray]"]=Qr["[object Uint16Array]"]=Qr["[object Uint32Array]"]=!0,Qr["[object Arguments]"]=Qr["[object Array]"]=Qr["[object ArrayBuffer]"]=Qr["[object Boolean]"]=Qr["[object DataView]"]=Qr["[object Date]"]=Qr["[object Error]"]=Qr["[object Function]"]=Qr["[object Map]"]=Qr["[object Number]"]=Qr["[object Object]"]=Qr["[object RegExp]"]=Qr["[object Set]"]=Qr["[object String]"]=Qr["[object WeakMap]"]=!1;var Xr=function(t){return Kr(t)&&Jr(t.length)&&!!Qr[Hr(t)]};var Yr=function(t){return function(r){return t(r)}},Zr={};!function(t,r){var e=w,n=r&&!r.nodeType&&r,o=n&&t&&!t.nodeType&&t,i=o&&o.exports===n&&e.process,a=function(){try{var t=o&&o.require&&o.require("util").types;return t||i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=a}({get exports(){return Zr},set exports(t){Zr=t}},Zr);var te=Xr,re=Yr,ee=Zr&&Zr.isTypedArray,ne=ee?re(ee):te;var oe=function(t,r){if(("constructor"!==r||"function"!=typeof t[r])&&"__proto__"!=r)return t[r]},ie=Yt,ae=e,ue=Object.prototype.hasOwnProperty;var ce=function(t,r,e){var n=t[r];ue.call(t,r)&&ae(n,e)&&(void 0!==e||r in t)||ie(t,r,e)},fe=Yt;var se=function(t,r,e,n){var o=!e;e||(e={});for(var i=-1,a=r.length;++i<a;){var u=r[i],c=n?n(e[u],t[u],u,e,t):void 0;void 0===c&&(c=t[u]),o?fe(e,u,c):ce(e,u,c)}return e};var ve=/^(?:0|[1-9]\d*)$/;var le=function(t,r){var e=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==e||"symbol"!=e&&ve.test(t))&&t>-1&&t%1==0&&t<r},pe=function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n},ye=Pr,he=Tr,_e=Ir,de=le,be=ne,ge=Object.prototype.hasOwnProperty;var je=function(t,r){var e=he(t),n=!e&&ye(t),o=!e&&!n&&_e(t),i=!e&&!n&&!o&&be(t),a=e||n||o||i,u=a?pe(t.length,String):[],c=u.length;for(var f in t)!r&&!ge.call(t,f)||a&&("length"==f||o&&("offset"==f||"parent"==f)||i&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||de(f,c))||u.push(f);return u};var Oe=C,we=pr,Ae=function(t){var r=[];if(null!=t)for(var e in Object(t))r.push(e);return r},me=Object.prototype.hasOwnProperty;var ze=je,xe=function(t){if(!Oe(t))return Ae(t);var r=we(t),e=[];for(var n in t)("constructor"!=n||!r&&me.call(t,n))&&e.push(n);return e},Pe=Ur;var Te=function(t){return Pe(t)?ze(t,!0):xe(t)},Se=se,Fe=Te;var ke=rr,Ue=nr,$e=ar,Be=ur,Ee=dr,Ie=Pr,Me=Tr,Ce=Er,De=Ir,Le=q,Re=C,qe=Wr,Ge=ne,Ne=oe,Ve=function(t){return Se(t,Fe(t))};var We=Jt,He=rr,Je=er,Ke=function(t,r,e,n,o,i,a){var u=Ne(t,e),c=Ne(r,e),f=a.get(c);if(f)ke(t,e,f);else{var s=i?i(u,c,e+"",t,r,a):void 0,v=void 0===s;if(v){var l=Me(c),p=!l&&De(c),y=!l&&!p&&Ge(c);s=c,l||p||y?Me(u)?s=u:Ce(u)?s=Be(u):p?(v=!1,s=Ue(c,!0)):y?(v=!1,s=$e(c,!0)):s=[]:qe(c)||Ie(c)?(s=u,Ie(u)?s=Ve(u):Re(u)&&!Le(u)||(s=Ee(c))):v=!1}v&&(a.set(c,s),o(s,c,n,i,a),a.delete(c)),ke(t,e,s)}},Qe=C,Xe=Te,Ye=oe;var Ze=function t(r,e,n,o,i){r!==e&&Je(e,(function(a,u){if(i||(i=new We),Qe(a))Ke(r,e,u,n,t,o,i);else{var c=o?o(Ye(r,u),a,u+"",r,e,i):void 0;void 0===c&&(c=a),He(r,u,c)}}),Xe)};var tn=function(t){return t};var rn=function(t,r,e){switch(e.length){case 0:return t.call(r);case 1:return t.call(r,e[0]);case 2:return t.call(r,e[0],e[1]);case 3:return t.call(r,e[0],e[1],e[2])}return t.apply(r,e)},en=Math.max;var nn=function(t,r,e){return r=en(void 0===r?t.length-1:r,0),function(){for(var n=arguments,o=-1,i=en(n.length-r,0),a=Array(i);++o<i;)a[o]=n[r+o];o=-1;for(var u=Array(r+1);++o<r;)u[o]=n[o];return u[r]=e(a),rn(t,this,u)}};var on=function(t){return function(){return t}},an=Qt,un=an?function(t,r){return an(t,"toString",{configurable:!0,enumerable:!1,value:on(r),writable:!0})}:tn,cn=Date.now;var fn=function(t){var r=0,e=0;return function(){var n=cn(),o=16-(n-e);if(e=n,o>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(void 0,arguments)}},sn=fn(un),vn=tn,ln=nn,pn=sn;var yn=e,hn=Ur,_n=le,dn=C;var bn=function(t,r){return pn(ln(t,r,vn),t+"")},gn=function(t,r,e){if(!dn(e))return!1;var n=typeof r;return!!("number"==n?hn(e)&&_n(r,e.length):"string"==n&&r in e)&&yn(e[r],t)};var jn=Ze,On=function(t){return bn((function(r,e){var n=-1,o=e.length,i=o>1?e[o-1]:void 0,a=o>2?e[2]:void 0;for(i=t.length>3&&"function"==typeof i?(o--,i):void 0,a&&gn(e[0],e[1],a)&&(i=o<3?void 0:i,o=1),r=Object(r);++n<o;){var u=e[n];u&&t(r,u,n,i)}return r}))}((function(t,r,e){jn(t,r,e)})),wn={languages:{cpp:{link:function(t){return console.log("Generating link for source:",t),"https://godbolt.com/..."}}}};return function(){return{id:"linkify",init:function(t){var r=On({},wn,t.getConfig().linkify||{});console.log(r)}}}}));
