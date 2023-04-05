/*!
* reveal.js-linkify 0.0.1
* https://github.com/alex-van-vliet/reveal.js-linkify
* GNU GPLv3 Licensed
*
* Copyright (C) 2023, Alex van Vliet <alex@vanvliet.pro>
*/
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).Linkify=r()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r=function(t){return t&&t.Math==Math&&t},n=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof t&&t)||function(){return this}()||Function("return this")(),e={},o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),u=!o((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),c=u,a=Function.prototype.call,f=c?a.bind(a):function(){return a.apply(a,arguments)},s={},l={}.propertyIsEnumerable,p=Object.getOwnPropertyDescriptor,v=p&&!l.call({1:2},1);s.f=v?function(t){var r=p(this,t);return!!r&&r.enumerable}:l;var h,y,d=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}},g=u,b=Function.prototype,m=b.call,_=g&&b.bind.bind(m,m),j=g?_:function(t){return function(){return m.apply(t,arguments)}},O=j,w=O({}.toString),S=O("".slice),A=function(t){return S(w(t),8,-1)},x=o,E=A,T=Object,P=j("".split),L=x((function(){return!T("z").propertyIsEnumerable(0)}))?function(t){return"String"==E(t)?P(t,""):T(t)}:T,C=function(t){return null==t},I=C,F=TypeError,k=function(t){if(I(t))throw F("Can't call method on "+t);return t},R=L,z=k,M=function(t){return R(z(t))},D="object"==typeof document&&document.all,U={all:D,IS_HTMLDDA:void 0===D&&void 0!==D},G=U.all,N=U.IS_HTMLDDA?function(t){return"function"==typeof t||t===G}:function(t){return"function"==typeof t},B=N,W=U.all,V=U.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:B(t)||t===W}:function(t){return"object"==typeof t?null!==t:B(t)},$=n,H=N,q=function(t,r){return arguments.length<2?(n=$[t],H(n)?n:void 0):$[t]&&$[t][r];var n},Y=j({}.isPrototypeOf),J=n,X="undefined"!=typeof navigator&&String(navigator.userAgent)||"",K=J.process,Z=J.Deno,Q=K&&K.versions||Z&&Z.version,tt=Q&&Q.v8;tt&&(y=(h=tt.split("."))[0]>0&&h[0]<4?1:+(h[0]+h[1])),!y&&X&&(!(h=X.match(/Edge\/(\d+)/))||h[1]>=74)&&(h=X.match(/Chrome\/(\d+)/))&&(y=+h[1]);var rt=y,nt=rt,et=o,ot=!!Object.getOwnPropertySymbols&&!et((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&nt&&nt<41})),it=ot&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ut=q,ct=N,at=Y,ft=Object,st=it?function(t){return"symbol"==typeof t}:function(t){var r=ut("Symbol");return ct(r)&&at(r.prototype,ft(t))},lt=String,pt=function(t){try{return lt(t)}catch(t){return"Object"}},vt=N,ht=pt,yt=TypeError,dt=function(t){if(vt(t))return t;throw yt(ht(t)+" is not a function")},gt=dt,bt=C,mt=function(t,r){var n=t[r];return bt(n)?void 0:gt(n)},_t=f,jt=N,Ot=V,wt=TypeError,St={},At={get exports(){return St},set exports(t){St=t}},xt=n,Et=Object.defineProperty,Tt=function(t,r){try{Et(xt,t,{value:r,configurable:!0,writable:!0})}catch(n){xt[t]=r}return r},Pt=Tt,Lt="__core-js_shared__",Ct=n[Lt]||Pt(Lt,{}),It=Ct;(At.exports=function(t,r){return It[t]||(It[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.30.0",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.0/LICENSE",source:"https://github.com/zloirock/core-js"});var Ft=k,kt=Object,Rt=function(t){return kt(Ft(t))},zt=Rt,Mt=j({}.hasOwnProperty),Dt=Object.hasOwn||function(t,r){return Mt(zt(t),r)},Ut=j,Gt=0,Nt=Math.random(),Bt=Ut(1..toString),Wt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Bt(++Gt+Nt,36)},Vt=St,$t=Dt,Ht=Wt,qt=ot,Yt=it,Jt=n.Symbol,Xt=Vt("wks"),Kt=Yt?Jt.for||Jt:Jt&&Jt.withoutSetter||Ht,Zt=function(t){return $t(Xt,t)||(Xt[t]=qt&&$t(Jt,t)?Jt[t]:Kt("Symbol."+t)),Xt[t]},Qt=f,tr=V,rr=st,nr=mt,er=function(t,r){var n,e;if("string"===r&&jt(n=t.toString)&&!Ot(e=_t(n,t)))return e;if(jt(n=t.valueOf)&&!Ot(e=_t(n,t)))return e;if("string"!==r&&jt(n=t.toString)&&!Ot(e=_t(n,t)))return e;throw wt("Can't convert object to primitive value")},or=TypeError,ir=Zt("toPrimitive"),ur=function(t,r){if(!tr(t)||rr(t))return t;var n,e=nr(t,ir);if(e){if(void 0===r&&(r="default"),n=Qt(e,t,r),!tr(n)||rr(n))return n;throw or("Can't convert object to primitive value")}return void 0===r&&(r="number"),er(t,r)},cr=st,ar=function(t){var r=ur(t,"string");return cr(r)?r:r+""},fr=V,sr=n.document,lr=fr(sr)&&fr(sr.createElement),pr=function(t){return lr?sr.createElement(t):{}},vr=pr,hr=!i&&!o((function(){return 7!=Object.defineProperty(vr("div"),"a",{get:function(){return 7}}).a})),yr=i,dr=f,gr=s,br=d,mr=M,_r=ar,jr=Dt,Or=hr,wr=Object.getOwnPropertyDescriptor;e.f=yr?wr:function(t,r){if(t=mr(t),r=_r(r),Or)try{return wr(t,r)}catch(t){}if(jr(t,r))return br(!dr(gr.f,t,r),t[r])};var Sr={},Ar=i&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),xr=V,Er=String,Tr=TypeError,Pr=function(t){if(xr(t))return t;throw Tr(Er(t)+" is not an object")},Lr=i,Cr=hr,Ir=Ar,Fr=Pr,kr=ar,Rr=TypeError,zr=Object.defineProperty,Mr=Object.getOwnPropertyDescriptor,Dr="enumerable",Ur="configurable",Gr="writable";Sr.f=Lr?Ir?function(t,r,n){if(Fr(t),r=kr(r),Fr(n),"function"==typeof t&&"prototype"===r&&"value"in n&&Gr in n&&!n[Gr]){var e=Mr(t,r);e&&e[Gr]&&(t[r]=n.value,n={configurable:Ur in n?n[Ur]:e[Ur],enumerable:Dr in n?n[Dr]:e[Dr],writable:!1})}return zr(t,r,n)}:zr:function(t,r,n){if(Fr(t),r=kr(r),Fr(n),Cr)try{return zr(t,r,n)}catch(t){}if("get"in n||"set"in n)throw Rr("Accessors not supported");return"value"in n&&(t[r]=n.value),t};var Nr=Sr,Br=d,Wr=i?function(t,r,n){return Nr.f(t,r,Br(1,n))}:function(t,r,n){return t[r]=n,t},Vr={},$r={get exports(){return Vr},set exports(t){Vr=t}},Hr=i,qr=Dt,Yr=Function.prototype,Jr=Hr&&Object.getOwnPropertyDescriptor,Xr=qr(Yr,"name"),Kr={EXISTS:Xr,PROPER:Xr&&"something"===function(){}.name,CONFIGURABLE:Xr&&(!Hr||Hr&&Jr(Yr,"name").configurable)},Zr=N,Qr=Ct,tn=j(Function.toString);Zr(Qr.inspectSource)||(Qr.inspectSource=function(t){return tn(t)});var rn,nn,en,on=Qr.inspectSource,un=N,cn=n.WeakMap,an=un(cn)&&/native code/.test(String(cn)),fn=Wt,sn=St("keys"),ln=function(t){return sn[t]||(sn[t]=fn(t))},pn={},vn=an,hn=n,yn=V,dn=Wr,gn=Dt,bn=Ct,mn=ln,_n=pn,jn="Object already initialized",On=hn.TypeError,wn=hn.WeakMap;if(vn||bn.state){var Sn=bn.state||(bn.state=new wn);Sn.get=Sn.get,Sn.has=Sn.has,Sn.set=Sn.set,rn=function(t,r){if(Sn.has(t))throw On(jn);return r.facade=t,Sn.set(t,r),r},nn=function(t){return Sn.get(t)||{}},en=function(t){return Sn.has(t)}}else{var An=mn("state");_n[An]=!0,rn=function(t,r){if(gn(t,An))throw On(jn);return r.facade=t,dn(t,An,r),r},nn=function(t){return gn(t,An)?t[An]:{}},en=function(t){return gn(t,An)}}var xn={set:rn,get:nn,has:en,enforce:function(t){return en(t)?nn(t):rn(t,{})},getterFor:function(t){return function(r){var n;if(!yn(r)||(n=nn(r)).type!==t)throw On("Incompatible receiver, "+t+" required");return n}}},En=j,Tn=o,Pn=N,Ln=Dt,Cn=i,In=Kr.CONFIGURABLE,Fn=on,kn=xn.enforce,Rn=xn.get,zn=String,Mn=Object.defineProperty,Dn=En("".slice),Un=En("".replace),Gn=En([].join),Nn=Cn&&!Tn((function(){return 8!==Mn((function(){}),"length",{value:8}).length})),Bn=String(String).split("String"),Wn=$r.exports=function(t,r,n){"Symbol("===Dn(zn(r),0,7)&&(r="["+Un(zn(r),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(r="get "+r),n&&n.setter&&(r="set "+r),(!Ln(t,"name")||In&&t.name!==r)&&(Cn?Mn(t,"name",{value:r,configurable:!0}):t.name=r),Nn&&n&&Ln(n,"arity")&&t.length!==n.arity&&Mn(t,"length",{value:n.arity});try{n&&Ln(n,"constructor")&&n.constructor?Cn&&Mn(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var e=kn(t);return Ln(e,"source")||(e.source=Gn(Bn,"string"==typeof r?r:"")),t};Function.prototype.toString=Wn((function(){return Pn(this)&&Rn(this).source||Fn(this)}),"toString");var Vn=N,$n=Sr,Hn=Vr,qn=Tt,Yn=function(t,r,n,e){e||(e={});var o=e.enumerable,i=void 0!==e.name?e.name:r;if(Vn(n)&&Hn(n,i,e),e.global)o?t[r]=n:qn(r,n);else{try{e.unsafe?t[r]&&(o=!0):delete t[r]}catch(t){}o?t[r]=n:$n.f(t,r,{value:n,enumerable:!1,configurable:!e.nonConfigurable,writable:!e.nonWritable})}return t},Jn={},Xn=Math.ceil,Kn=Math.floor,Zn=Math.trunc||function(t){var r=+t;return(r>0?Kn:Xn)(r)},Qn=function(t){var r=+t;return r!=r||0===r?0:Zn(r)},te=Qn,re=Math.max,ne=Math.min,ee=Qn,oe=Math.min,ie=function(t){return t>0?oe(ee(t),9007199254740991):0},ue=ie,ce=function(t){return ue(t.length)},ae=M,fe=function(t,r){var n=te(t);return n<0?re(n+r,0):ne(n,r)},se=ce,le=function(t){return function(r,n,e){var o,i=ae(r),u=se(i),c=fe(e,u);if(t&&n!=n){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===n)return t||c||0;return!t&&-1}},pe={includes:le(!0),indexOf:le(!1)},ve=Dt,he=M,ye=pe.indexOf,de=pn,ge=j([].push),be=function(t,r){var n,e=he(t),o=0,i=[];for(n in e)!ve(de,n)&&ve(e,n)&&ge(i,n);for(;r.length>o;)ve(e,n=r[o++])&&(~ye(i,n)||ge(i,n));return i},me=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],_e=be,je=me.concat("length","prototype");Jn.f=Object.getOwnPropertyNames||function(t){return _e(t,je)};var Oe={};Oe.f=Object.getOwnPropertySymbols;var we=q,Se=Jn,Ae=Oe,xe=Pr,Ee=j([].concat),Te=we("Reflect","ownKeys")||function(t){var r=Se.f(xe(t)),n=Ae.f;return n?Ee(r,n(t)):r},Pe=Dt,Le=Te,Ce=e,Ie=Sr,Fe=o,ke=N,Re=/#|\.prototype\./,ze=function(t,r){var n=De[Me(t)];return n==Ge||n!=Ue&&(ke(r)?Fe(r):!!r)},Me=ze.normalize=function(t){return String(t).replace(Re,".").toLowerCase()},De=ze.data={},Ue=ze.NATIVE="N",Ge=ze.POLYFILL="P",Ne=ze,Be=n,We=e.f,Ve=Wr,$e=Yn,He=Tt,qe=function(t,r,n){for(var e=Le(r),o=Ie.f,i=Ce.f,u=0;u<e.length;u++){var c=e[u];Pe(t,c)||n&&Pe(n,c)||o(t,c,i(r,c))}},Ye=Ne,Je=function(t,r){var n,e,o,i,u,c=t.target,a=t.global,f=t.stat;if(n=a?Be:f?Be[c]||He(c,{}):(Be[c]||{}).prototype)for(e in r){if(i=r[e],o=t.dontCallGetSet?(u=We(n,e))&&u.value:n[e],!Ye(a?e:c+(f?".":"#")+e,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;qe(i,o)}(t.sham||o&&o.sham)&&Ve(i,"sham",!0),$e(n,e,i,t)}},Xe={},Ke=be,Ze=me,Qe=Object.keys||function(t){return Ke(t,Ze)},to=i,ro=Ar,no=Sr,eo=Pr,oo=M,io=Qe;Xe.f=to&&!ro?Object.defineProperties:function(t,r){eo(t);for(var n,e=oo(r),o=io(r),i=o.length,u=0;i>u;)no.f(t,n=o[u++],e[n]);return t};var uo,co=q("document","documentElement"),ao=Pr,fo=Xe,so=me,lo=pn,po=co,vo=pr,ho="prototype",yo="script",go=ln("IE_PROTO"),bo=function(){},mo=function(t){return"<"+yo+">"+t+"</"+yo+">"},_o=function(t){t.write(mo("")),t.close();var r=t.parentWindow.Object;return t=null,r},jo=function(){try{uo=new ActiveXObject("htmlfile")}catch(t){}var t,r,n;jo="undefined"!=typeof document?document.domain&&uo?_o(uo):(r=vo("iframe"),n="java"+yo+":",r.style.display="none",po.appendChild(r),r.src=String(n),(t=r.contentWindow.document).open(),t.write(mo("document.F=Object")),t.close(),t.F):_o(uo);for(var e=so.length;e--;)delete jo[ho][so[e]];return jo()};lo[go]=!0;var Oo=Object.create||function(t,r){var n;return null!==t?(bo[ho]=ao(t),n=new bo,bo[ho]=null,n[go]=t):n=jo(),void 0===r?n:fo.f(n,r)},wo=Zt,So=Oo,Ao=Sr.f,xo=wo("unscopables"),Eo=Array.prototype;null==Eo[xo]&&Ao(Eo,xo,{configurable:!0,value:So(null)});var To=function(t){Eo[xo][t]=!0},Po=pe.includes,Lo=To;Je({target:"Array",proto:!0,forced:o((function(){return!Array(1).includes()}))},{includes:function(t){return Po(this,t,arguments.length>1?arguments[1]:void 0)}}),Lo("includes");var Co=V,Io=A,Fo=Zt("match"),ko=function(t){var r;return Co(t)&&(void 0!==(r=t[Fo])?!!r:"RegExp"==Io(t))},Ro=TypeError,zo=function(t){if(ko(t))throw Ro("The method doesn't accept regular expressions");return t},Mo={};Mo[Zt("toStringTag")]="z";var Do="[object z]"===String(Mo),Uo=Do,Go=N,No=A,Bo=Zt("toStringTag"),Wo=Object,Vo="Arguments"==No(function(){return arguments}()),$o=Uo?No:function(t){var r,n,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,r){try{return t[r]}catch(t){}}(r=Wo(t),Bo))?n:Vo?No(r):"Object"==(e=No(r))&&Go(r.callee)?"Arguments":e},Ho=$o,qo=String,Yo=function(t){if("Symbol"===Ho(t))throw TypeError("Cannot convert a Symbol value to a string");return qo(t)},Jo=Zt("match"),Xo=function(t){var r=/./;try{"/./"[t](r)}catch(n){try{return r[Jo]=!1,"/./"[t](r)}catch(t){}}return!1},Ko=Je,Zo=zo,Qo=k,ti=Yo,ri=Xo,ni=j("".indexOf);Ko({target:"String",proto:!0,forced:!ri("includes")},{includes:function(t){return!!~ni(ti(Qo(this)),ti(Zo(t)),arguments.length>1?arguments[1]:void 0)}});var ei=A,oi=j,ii=function(t){if("Function"===ei(t))return oi(t)},ui=dt,ci=u,ai=ii(ii.bind),fi=function(t,r){return ui(t),void 0===r?t:ci?ai(t,r):function(){return t.apply(r,arguments)}},si=f,li=Pr,pi=mt,vi=Pr,hi=function(t,r,n){var e,o;li(t);try{if(!(e=pi(t,"return"))){if("throw"===r)throw n;return n}e=si(e,t)}catch(t){o=!0,e=t}if("throw"===r)throw n;if(o)throw e;return li(e),n},yi={},di=yi,gi=Zt("iterator"),bi=Array.prototype,mi=j,_i=o,ji=N,Oi=$o,wi=on,Si=function(){},Ai=[],xi=q("Reflect","construct"),Ei=/^\s*(?:class|function)\b/,Ti=mi(Ei.exec),Pi=!Ei.exec(Si),Li=function(t){if(!ji(t))return!1;try{return xi(Si,Ai,t),!0}catch(t){return!1}},Ci=function(t){if(!ji(t))return!1;switch(Oi(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Pi||!!Ti(Ei,wi(t))}catch(t){return!0}};Ci.sham=!0;var Ii=!xi||_i((function(){var t;return Li(Li.call)||!Li(Object)||!Li((function(){t=!0}))||t}))?Ci:Li,Fi=ar,ki=Sr,Ri=d,zi=$o,Mi=mt,Di=C,Ui=yi,Gi=Zt("iterator"),Ni=function(t){if(!Di(t))return Mi(t,Gi)||Mi(t,"@@iterator")||Ui[zi(t)]},Bi=f,Wi=dt,Vi=Pr,$i=pt,Hi=Ni,qi=TypeError,Yi=fi,Ji=f,Xi=Rt,Ki=function(t,r,n,e){try{return e?r(vi(n)[0],n[1]):r(n)}catch(r){hi(t,"throw",r)}},Zi=function(t){return void 0!==t&&(di.Array===t||bi[gi]===t)},Qi=Ii,tu=ce,ru=function(t,r,n){var e=Fi(r);e in t?ki.f(t,e,Ri(0,n)):t[e]=n},nu=function(t,r){var n=arguments.length<2?Hi(t):r;if(Wi(n))return Vi(Bi(n,t));throw qi($i(t)+" is not iterable")},eu=Ni,ou=Array,iu=Zt("iterator"),uu=!1;try{var cu=0,au={next:function(){return{done:!!cu++}},return:function(){uu=!0}};au[iu]=function(){return this},Array.from(au,(function(){throw 2}))}catch(t){}var fu=function(t){var r=Xi(t),n=Qi(this),e=arguments.length,o=e>1?arguments[1]:void 0,i=void 0!==o;i&&(o=Yi(o,e>2?arguments[2]:void 0));var u,c,a,f,s,l,p=eu(r),v=0;if(!p||this===ou&&Zi(p))for(u=tu(r),c=n?new this(u):ou(u);u>v;v++)l=i?o(r[v],v):r[v],ru(c,v,l);else for(s=(f=nu(r,p)).next,c=n?new this:[];!(a=Ji(s,f)).done;v++)l=i?Ki(f,o,[a.value,v],!0):a.value,ru(c,v,l);return c.length=v,c},su=function(t,r){if(!r&&!uu)return!1;var n=!1;try{var e={};e[iu]=function(){return{next:function(){return{done:n=!0}}}},t(e)}catch(t){}return n};Je({target:"Array",stat:!0,forced:!su((function(t){Array.from(t)}))},{from:fu});var lu,pu,vu,hu=j,yu=Qn,du=Yo,gu=k,bu=hu("".charAt),mu=hu("".charCodeAt),_u=hu("".slice),ju=function(t){return function(r,n){var e,o,i=du(gu(r)),u=yu(n),c=i.length;return u<0||u>=c?t?"":void 0:(e=mu(i,u))<55296||e>56319||u+1===c||(o=mu(i,u+1))<56320||o>57343?t?bu(i,u):e:t?_u(i,u,u+2):o-56320+(e-55296<<10)+65536}},Ou={codeAt:ju(!1),charAt:ju(!0)},wu=!o((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),Su=Dt,Au=N,xu=Rt,Eu=wu,Tu=ln("IE_PROTO"),Pu=Object,Lu=Pu.prototype,Cu=Eu?Pu.getPrototypeOf:function(t){var r=xu(t);if(Su(r,Tu))return r[Tu];var n=r.constructor;return Au(n)&&r instanceof n?n.prototype:r instanceof Pu?Lu:null},Iu=o,Fu=N,ku=V,Ru=Cu,zu=Yn,Mu=Zt("iterator"),Du=!1;[].keys&&("next"in(vu=[].keys())?(pu=Ru(Ru(vu)))!==Object.prototype&&(lu=pu):Du=!0);var Uu=!ku(lu)||Iu((function(){var t={};return lu[Mu].call(t)!==t}));Uu&&(lu={}),Fu(lu[Mu])||zu(lu,Mu,(function(){return this}));var Gu={IteratorPrototype:lu,BUGGY_SAFARI_ITERATORS:Du},Nu=Sr.f,Bu=Dt,Wu=Zt("toStringTag"),Vu=function(t,r,n){t&&!n&&(t=t.prototype),t&&!Bu(t,Wu)&&Nu(t,Wu,{configurable:!0,value:r})},$u=Gu.IteratorPrototype,Hu=Oo,qu=d,Yu=Vu,Ju=yi,Xu=function(){return this},Ku=j,Zu=dt,Qu=N,tc=String,rc=TypeError,nc=function(t,r,n){try{return Ku(Zu(Object.getOwnPropertyDescriptor(t,r)[n]))}catch(t){}},ec=Pr,oc=function(t){if("object"==typeof t||Qu(t))return t;throw rc("Can't set "+tc(t)+" as a prototype")},ic=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,n={};try{(t=nc(Object.prototype,"__proto__","set"))(n,[]),r=n instanceof Array}catch(t){}return function(n,e){return ec(n),oc(e),r?t(n,e):n.__proto__=e,n}}():void 0),uc=Je,cc=f,ac=N,fc=function(t,r,n,e){var o=r+" Iterator";return t.prototype=Hu($u,{next:qu(+!e,n)}),Yu(t,o,!1),Ju[o]=Xu,t},sc=Cu,lc=ic,pc=Vu,vc=Wr,hc=Yn,yc=yi,dc=Kr.PROPER,gc=Kr.CONFIGURABLE,bc=Gu.IteratorPrototype,mc=Gu.BUGGY_SAFARI_ITERATORS,_c=Zt("iterator"),jc="keys",Oc="values",wc="entries",Sc=function(){return this},Ac=Ou.charAt,xc=Yo,Ec=xn,Tc=function(t,r,n,e,o,i,u){fc(n,r,e);var c,a,f,s=function(t){if(t===o&&y)return y;if(!mc&&t in v)return v[t];switch(t){case jc:case Oc:case wc:return function(){return new n(this,t)}}return function(){return new n(this)}},l=r+" Iterator",p=!1,v=t.prototype,h=v[_c]||v["@@iterator"]||o&&v[o],y=!mc&&h||s(o),d="Array"==r&&v.entries||h;if(d&&(c=sc(d.call(new t)))!==Object.prototype&&c.next&&(sc(c)!==bc&&(lc?lc(c,bc):ac(c[_c])||hc(c,_c,Sc)),pc(c,l,!0)),dc&&o==Oc&&h&&h.name!==Oc&&(gc?vc(v,"name",Oc):(p=!0,y=function(){return cc(h,this)})),o)if(a={values:s(Oc),keys:i?y:s(jc),entries:s(wc)},u)for(f in a)(mc||p||!(f in v))&&hc(v,f,a[f]);else uc({target:r,proto:!0,forced:mc||p},a);return v[_c]!==y&&hc(v,_c,y,{name:o}),yc[r]=y,a},Pc=function(t,r){return{value:t,done:r}},Lc="String Iterator",Cc=Ec.set,Ic=Ec.getterFor(Lc);Tc(String,"String",(function(t){Cc(this,{type:Lc,string:xc(t),index:0})}),(function(){var t,r=Ic(this),n=r.string,e=r.index;return e>=n.length?Pc(void 0,!0):(t=Ac(n,e),r.index+=t.length,Pc(t,!1))}));var Fc=o,kc=function(t,r){var n=[][t];return!!n&&Fc((function(){n.call(null,r||function(){return 1},1)}))},Rc=Je,zc=L,Mc=M,Dc=kc,Uc=j([].join);Rc({target:"Array",proto:!0,forced:zc!=Object||!Dc("join",",")},{join:function(t){return Uc(Mc(this),void 0===t?",":t)}});var Gc=A,Nc=Array.isArray||function(t){return"Array"==Gc(t)},Bc=Ii,Wc=V,Vc=Zt("species"),$c=Array,Hc=function(t){var r;return Nc(t)&&(r=t.constructor,(Bc(r)&&(r===$c||Nc(r.prototype))||Wc(r)&&null===(r=r[Vc]))&&(r=void 0)),void 0===r?$c:r},qc=fi,Yc=L,Jc=Rt,Xc=ce,Kc=function(t,r){return new(Hc(t))(0===r?0:r)},Zc=j([].push),Qc=function(t){var r=1==t,n=2==t,e=3==t,o=4==t,i=6==t,u=7==t,c=5==t||i;return function(a,f,s,l){for(var p,v,h=Jc(a),y=Yc(h),d=qc(f,s),g=Xc(y),b=0,m=l||Kc,_=r?m(a,g):n||u?m(a,0):void 0;g>b;b++)if((c||b in y)&&(v=d(p=y[b],b,h),t))if(r)_[b]=v;else if(v)switch(t){case 3:return!0;case 5:return p;case 6:return b;case 2:Zc(_,p)}else switch(t){case 4:return!1;case 7:Zc(_,p)}return i?-1:e||o?o:_}},ta={forEach:Qc(0),map:Qc(1),filter:Qc(2),some:Qc(3),every:Qc(4),find:Qc(5),findIndex:Qc(6),filterReject:Qc(7)},ra=o,na=rt,ea=Zt("species"),oa=function(t){return na>=51||!ra((function(){var r=[];return(r.constructor={})[ea]=function(){return{foo:1}},1!==r[t](Boolean).foo}))},ia=ta.map;Je({target:"Array",proto:!0,forced:!oa("map")},{map:function(t){return ia(this,t,arguments.length>1?arguments[1]:void 0)}});var ua=Je,ca=ta.find,aa=To,fa="find",sa=!0;fa in[]&&Array(1)[fa]((function(){sa=!1})),ua({target:"Array",proto:!0,forced:sa},{find:function(t){return ca(this,t,arguments.length>1?arguments[1]:void 0)}}),aa(fa);var la=$o,pa=Do?{}.toString:function(){return"[object "+la(this)+"]"};Do||Yn(Object.prototype,"toString",pa,{unsafe:!0});var va=ta.filter;Je({target:"Array",proto:!0,forced:!oa("filter")},{filter:function(t){return va(this,t,arguments.length>1?arguments[1]:void 0)}});var ha,ya=Je,da=ii,ga=e.f,ba=ie,ma=Yo,_a=zo,ja=k,Oa=Xo,wa=da("".startsWith),Sa=da("".slice),Aa=Math.min,xa=Oa("startsWith");ya({target:"String",proto:!0,forced:!!(xa||(ha=ga(String.prototype,"startsWith"),!ha||ha.writable))&&!xa},{startsWith:function(t){var r=ma(ja(this));_a(t);var n=ba(Aa(arguments.length>1?arguments[1]:void 0,r.length)),e=ma(t);return wa?wa(r,e,n):Sa(r,n,n+e.length)===e}});var Ea=k,Ta=Yo,Pa=/"/g,La=j("".replace),Ca=o,Ia=function(t,r,n,e){var o=Ta(Ea(t)),i="<"+r;return""!==n&&(i+=" "+n+'="'+La(Ta(e),Pa,"&quot;")+'"'),i+">"+o+"</"+r+">"},Fa=function(t){return Ca((function(){var r=""[t]('"');return r!==r.toLowerCase()||r.split('"').length>3}))};Je({target:"String",proto:!0,forced:Fa("link")},{link:function(t){return Ia(this,"a","href",t)}});var ka=ta.forEach,Ra=kc("forEach")?[].forEach:function(t){return ka(this,t,arguments.length>1?arguments[1]:void 0)};Je({target:"Array",proto:!0,forced:[].forEach!=Ra},{forEach:Ra});var za=pr("span").classList,Ma=za&&za.constructor&&za.constructor.prototype,Da=n,Ua={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Ga=Ma===Object.prototype?void 0:Ma,Na=Ra,Ba=Wr,Wa=function(t){if(t&&t.forEach!==Na)try{Ba(t,"forEach",Na)}catch(r){t.forEach=Na}};for(var Va in Ua)Ua[Va]&&Wa(Da[Va]&&Da[Va].prototype);Wa(Ga);var $a=function(){this.__data__=[],this.size=0};var Ha=function(t,r){return t===r||t!=t&&r!=r},qa=Ha;var Ya=function(t,r){for(var n=t.length;n--;)if(qa(t[n][0],r))return n;return-1},Ja=Ya,Xa=Array.prototype.splice;var Ka=function(t){var r=this.__data__,n=Ja(r,t);return!(n<0)&&(n==r.length-1?r.pop():Xa.call(r,n,1),--this.size,!0)},Za=Ya;var Qa=function(t){var r=this.__data__,n=Za(r,t);return n<0?void 0:r[n][1]},tf=Ya;var rf=Ya;var nf=function(t,r){var n=this.__data__,e=rf(n,t);return e<0?(++this.size,n.push([t,r])):n[e][1]=r,this},ef=$a,of=Ka,uf=Qa,cf=function(t){return tf(this.__data__,t)>-1},af=nf;function ff(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}ff.prototype.clear=ef,ff.prototype.delete=of,ff.prototype.get=uf,ff.prototype.has=cf,ff.prototype.set=af;var sf=ff,lf=sf;var pf=function(){this.__data__=new lf,this.size=0};var vf=function(t){var r=this.__data__,n=r.delete(t);return this.size=r.size,n};var hf=function(t){return this.__data__.get(t)};var yf=function(t){return this.__data__.has(t)},df="object"==typeof t&&t&&t.Object===Object&&t,gf=df,bf="object"==typeof self&&self&&self.Object===Object&&self,mf=gf||bf||Function("return this")(),_f=mf.Symbol,jf=_f,Of=Object.prototype,wf=Of.hasOwnProperty,Sf=Of.toString,Af=jf?jf.toStringTag:void 0;var xf=function(t){var r=wf.call(t,Af),n=t[Af];try{t[Af]=void 0;var e=!0}catch(t){}var o=Sf.call(t);return e&&(r?t[Af]=n:delete t[Af]),o},Ef=Object.prototype.toString;var Tf=xf,Pf=function(t){return Ef.call(t)},Lf=_f?_f.toStringTag:void 0;var Cf=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Lf&&Lf in Object(t)?Tf(t):Pf(t)};var If=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)},Ff=Cf,kf=If;var Rf=function(t){if(!kf(t))return!1;var r=Ff(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},zf=mf["__core-js_shared__"],Mf=function(){var t=/[^.]+$/.exec(zf&&zf.keys&&zf.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();var Df=function(t){return!!Mf&&Mf in t},Uf=Function.prototype.toString;var Gf=Rf,Nf=Df,Bf=If,Wf=function(t){if(null!=t){try{return Uf.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Vf=/^\[object .+?Constructor\]$/,$f=Function.prototype,Hf=Object.prototype,qf=$f.toString,Yf=Hf.hasOwnProperty,Jf=RegExp("^"+qf.call(Yf).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Xf=function(t){return!(!Bf(t)||Nf(t))&&(Gf(t)?Jf:Vf).test(Wf(t))},Kf=function(t,r){return null==t?void 0:t[r]};var Zf=function(t,r){var n=Kf(t,r);return Xf(n)?n:void 0},Qf=Zf(mf,"Map"),ts=Zf(Object,"create"),rs=ts;var ns=function(){this.__data__=rs?rs(null):{},this.size=0};var es=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},os=ts,is=Object.prototype.hasOwnProperty;var us=function(t){var r=this.__data__;if(os){var n=r[t];return"__lodash_hash_undefined__"===n?void 0:n}return is.call(r,t)?r[t]:void 0},cs=ts,as=Object.prototype.hasOwnProperty;var fs=function(t){var r=this.__data__;return cs?void 0!==r[t]:as.call(r,t)},ss=ts;var ls=function(t,r){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ss&&void 0===r?"__lodash_hash_undefined__":r,this},ps=ns,vs=es,hs=us,ys=fs,ds=ls;function gs(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}gs.prototype.clear=ps,gs.prototype.delete=vs,gs.prototype.get=hs,gs.prototype.has=ys,gs.prototype.set=ds;var bs=gs,ms=sf,_s=Qf;var js=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t};var Os=function(t,r){var n=t.__data__;return js(r)?n["string"==typeof r?"string":"hash"]:n.map},ws=Os;var Ss=Os;var As=Os;var xs=Os;var Es=function(t,r){var n=xs(this,t),e=n.size;return n.set(t,r),this.size+=n.size==e?0:1,this},Ts=function(){this.size=0,this.__data__={hash:new bs,map:new(_s||ms),string:new bs}},Ps=function(t){var r=ws(this,t).delete(t);return this.size-=r?1:0,r},Ls=function(t){return Ss(this,t).get(t)},Cs=function(t){return As(this,t).has(t)},Is=Es;function Fs(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}Fs.prototype.clear=Ts,Fs.prototype.delete=Ps,Fs.prototype.get=Ls,Fs.prototype.has=Cs,Fs.prototype.set=Is;var ks=sf,Rs=Qf,zs=Fs;var Ms=function(t,r){var n=this.__data__;if(n instanceof ks){var e=n.__data__;if(!Rs||e.length<199)return e.push([t,r]),this.size=++n.size,this;n=this.__data__=new zs(e)}return n.set(t,r),this.size=n.size,this},Ds=sf,Us=pf,Gs=vf,Ns=hf,Bs=yf,Ws=Ms;function Vs(t){var r=this.__data__=new Ds(t);this.size=r.size}Vs.prototype.clear=Us,Vs.prototype.delete=Gs,Vs.prototype.get=Ns,Vs.prototype.has=Bs,Vs.prototype.set=Ws;var $s=Vs,Hs=Zf,qs=function(){try{var t=Hs(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),Ys=qs;var Js=function(t,r,n){"__proto__"==r&&Ys?Ys(t,r,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[r]=n},Xs=Js,Ks=Ha;var Zs=function(t,r,n){(void 0!==n&&!Ks(t[r],n)||void 0===n&&!(r in t))&&Xs(t,r,n)};var Qs=function(t){return function(r,n,e){for(var o=-1,i=Object(r),u=e(r),c=u.length;c--;){var a=u[t?c:++o];if(!1===n(i[a],a,i))break}return r}}(),tl={};!function(t,r){var n=mf,e=r&&!r.nodeType&&r,o=e&&t&&!t.nodeType&&t,i=o&&o.exports===e?n.Buffer:void 0,u=i?i.allocUnsafe:void 0;t.exports=function(t,r){if(r)return t.slice();var n=t.length,e=u?u(n):new t.constructor(n);return t.copy(e),e}}({get exports(){return tl},set exports(t){tl=t}},tl);var rl=mf.Uint8Array;var nl=function(t){var r=new t.constructor(t.byteLength);return new rl(r).set(new rl(t)),r};var el=function(t,r){var n=r?nl(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)};var ol=function(t,r){var n=-1,e=t.length;for(r||(r=Array(e));++n<e;)r[n]=t[n];return r},il=If,ul=Object.create,cl=function(){function t(){}return function(r){if(!il(r))return{};if(ul)return ul(r);t.prototype=r;var n=new t;return t.prototype=void 0,n}}();var al=function(t,r){return function(n){return t(r(n))}}(Object.getPrototypeOf,Object),fl=Object.prototype;var sl=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||fl)},ll=cl,pl=al,vl=sl;var hl=function(t){return"function"!=typeof t.constructor||vl(t)?{}:ll(pl(t))};var yl=function(t){return null!=t&&"object"==typeof t},dl=Cf,gl=yl;var bl=function(t){return gl(t)&&"[object Arguments]"==dl(t)},ml=yl,_l=Object.prototype,jl=_l.hasOwnProperty,Ol=_l.propertyIsEnumerable,wl=bl(function(){return arguments}())?bl:function(t){return ml(t)&&jl.call(t,"callee")&&!Ol.call(t,"callee")},Sl=wl,Al=Array.isArray;var xl=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},El=Rf,Tl=xl;var Pl=function(t){return null!=t&&Tl(t.length)&&!El(t)},Ll=Pl,Cl=yl;var Il=function(t){return Cl(t)&&Ll(t)},Fl={};var kl=function(){return!1};!function(t,r){var n=mf,e=kl,o=r&&!r.nodeType&&r,i=o&&t&&!t.nodeType&&t,u=i&&i.exports===o?n.Buffer:void 0,c=(u?u.isBuffer:void 0)||e;t.exports=c}({get exports(){return Fl},set exports(t){Fl=t}},Fl);var Rl=Cf,zl=al,Ml=yl,Dl=Function.prototype,Ul=Object.prototype,Gl=Dl.toString,Nl=Ul.hasOwnProperty,Bl=Gl.call(Object);var Wl=function(t){if(!Ml(t)||"[object Object]"!=Rl(t))return!1;var r=zl(t);if(null===r)return!0;var n=Nl.call(r,"constructor")&&r.constructor;return"function"==typeof n&&n instanceof n&&Gl.call(n)==Bl},Vl=Cf,$l=xl,Hl=yl,ql={};ql["[object Float32Array]"]=ql["[object Float64Array]"]=ql["[object Int8Array]"]=ql["[object Int16Array]"]=ql["[object Int32Array]"]=ql["[object Uint8Array]"]=ql["[object Uint8ClampedArray]"]=ql["[object Uint16Array]"]=ql["[object Uint32Array]"]=!0,ql["[object Arguments]"]=ql["[object Array]"]=ql["[object ArrayBuffer]"]=ql["[object Boolean]"]=ql["[object DataView]"]=ql["[object Date]"]=ql["[object Error]"]=ql["[object Function]"]=ql["[object Map]"]=ql["[object Number]"]=ql["[object Object]"]=ql["[object RegExp]"]=ql["[object Set]"]=ql["[object String]"]=ql["[object WeakMap]"]=!1;var Yl=function(t){return Hl(t)&&$l(t.length)&&!!ql[Vl(t)]};var Jl=function(t){return function(r){return t(r)}},Xl={};!function(t,r){var n=df,e=r&&!r.nodeType&&r,o=e&&t&&!t.nodeType&&t,i=o&&o.exports===e&&n.process,u=function(){try{var t=o&&o.require&&o.require("util").types;return t||i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=u}({get exports(){return Xl},set exports(t){Xl=t}},Xl);var Kl=Yl,Zl=Jl,Ql=Xl&&Xl.isTypedArray,tp=Ql?Zl(Ql):Kl;var rp=function(t,r){if(("constructor"!==r||"function"!=typeof t[r])&&"__proto__"!=r)return t[r]},np=Js,ep=Ha,op=Object.prototype.hasOwnProperty;var ip=function(t,r,n){var e=t[r];op.call(t,r)&&ep(e,n)&&(void 0!==n||r in t)||np(t,r,n)},up=Js;var cp=function(t,r,n,e){var o=!n;n||(n={});for(var i=-1,u=r.length;++i<u;){var c=r[i],a=e?e(n[c],t[c],c,n,t):void 0;void 0===a&&(a=t[c]),o?up(n,c,a):ip(n,c,a)}return n};var ap=/^(?:0|[1-9]\d*)$/;var fp=function(t,r){var n=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==n||"symbol"!=n&&ap.test(t))&&t>-1&&t%1==0&&t<r},sp=function(t,r){for(var n=-1,e=Array(t);++n<t;)e[n]=r(n);return e},lp=Sl,pp=Al,vp=Fl,hp=fp,yp=tp,dp=Object.prototype.hasOwnProperty;var gp=function(t,r){var n=pp(t),e=!n&&lp(t),o=!n&&!e&&vp(t),i=!n&&!e&&!o&&yp(t),u=n||e||o||i,c=u?sp(t.length,String):[],a=c.length;for(var f in t)!r&&!dp.call(t,f)||u&&("length"==f||o&&("offset"==f||"parent"==f)||i&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||hp(f,a))||c.push(f);return c};var bp=If,mp=sl,_p=function(t){var r=[];if(null!=t)for(var n in Object(t))r.push(n);return r},jp=Object.prototype.hasOwnProperty;var Op=gp,wp=function(t){if(!bp(t))return _p(t);var r=mp(t),n=[];for(var e in t)("constructor"!=e||!r&&jp.call(t,e))&&n.push(e);return n},Sp=Pl;var Ap=function(t){return Sp(t)?Op(t,!0):wp(t)},xp=cp,Ep=Ap;var Tp=Zs,Pp=tl,Lp=el,Cp=ol,Ip=hl,Fp=Sl,kp=Al,Rp=Il,zp=Fl,Mp=Rf,Dp=If,Up=Wl,Gp=tp,Np=rp,Bp=function(t){return xp(t,Ep(t))};var Wp=$s,Vp=Zs,$p=Qs,Hp=function(t,r,n,e,o,i,u){var c=Np(t,n),a=Np(r,n),f=u.get(a);if(f)Tp(t,n,f);else{var s=i?i(c,a,n+"",t,r,u):void 0,l=void 0===s;if(l){var p=kp(a),v=!p&&zp(a),h=!p&&!v&&Gp(a);s=a,p||v||h?kp(c)?s=c:Rp(c)?s=Cp(c):v?(l=!1,s=Pp(a,!0)):h?(l=!1,s=Lp(a,!0)):s=[]:Up(a)||Fp(a)?(s=c,Fp(c)?s=Bp(c):Dp(c)&&!Mp(c)||(s=Ip(a))):l=!1}l&&(u.set(a,s),o(s,a,e,i,u),u.delete(a)),Tp(t,n,s)}},qp=If,Yp=Ap,Jp=rp;var Xp=function t(r,n,e,o,i){r!==n&&$p(n,(function(u,c){if(i||(i=new Wp),qp(u))Hp(r,n,c,e,t,o,i);else{var a=o?o(Jp(r,c),u,c+"",r,n,i):void 0;void 0===a&&(a=u),Vp(r,c,a)}}),Yp)};var Kp=function(t){return t};var Zp=function(t,r,n){switch(n.length){case 0:return t.call(r);case 1:return t.call(r,n[0]);case 2:return t.call(r,n[0],n[1]);case 3:return t.call(r,n[0],n[1],n[2])}return t.apply(r,n)},Qp=Math.max;var tv=function(t,r,n){return r=Qp(void 0===r?t.length-1:r,0),function(){for(var e=arguments,o=-1,i=Qp(e.length-r,0),u=Array(i);++o<i;)u[o]=e[r+o];o=-1;for(var c=Array(r+1);++o<r;)c[o]=e[o];return c[r]=n(u),Zp(t,this,c)}};var rv=function(t){return function(){return t}},nv=qs,ev=nv?function(t,r){return nv(t,"toString",{configurable:!0,enumerable:!1,value:rv(r),writable:!0})}:Kp,ov=Date.now;var iv=function(t){var r=0,n=0;return function(){var e=ov(),o=16-(e-n);if(n=e,o>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(void 0,arguments)}},uv=iv(ev),cv=Kp,av=tv,fv=uv;var sv=Ha,lv=Pl,pv=fp,vv=If;var hv=function(t,r){return fv(av(t,r,cv),t+"")},yv=function(t,r,n){if(!vv(n))return!1;var e=typeof r;return!!("number"==e?lv(n)&&pv(r,n.length):"string"==e&&r in n)&&sv(n[r],t)};var dv=Xp,gv=function(t){return hv((function(r,n){var e=-1,o=n.length,i=o>1?n[o-1]:void 0,u=o>2?n[2]:void 0;for(i=t.length>3&&"function"==typeof i?(o--,i):void 0,u&&yv(n[0],n[1],u)&&(i=o<3?void 0:i,o=1),r=Object(r);++e<o;){var c=n[e];c&&t(r,c,e,i)}return r}))}((function(t,r,n){dv(t,r,n)})),bv={};
/*! https://mths.be/base64 v1.0.0 by @mathias | MIT license */
!function(r,n){!function(e){var o=n,i=r&&r.exports==o&&r,u="object"==typeof t&&t;u.global!==u&&u.window!==u||(e=u);var c=function(t){this.message=t};(c.prototype=new Error).name="InvalidCharacterError";var a=function(t){throw new c(t)},f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=/[\t\n\f\r ]/g,l={encode:function(t){t=String(t),/[^\0-\xFF]/.test(t)&&a("The string to be encoded contains characters outside of the Latin1 range.");for(var r,n,e,o,i=t.length%3,u="",c=-1,s=t.length-i;++c<s;)r=t.charCodeAt(c)<<16,n=t.charCodeAt(++c)<<8,e=t.charCodeAt(++c),u+=f.charAt((o=r+n+e)>>18&63)+f.charAt(o>>12&63)+f.charAt(o>>6&63)+f.charAt(63&o);return 2==i?(r=t.charCodeAt(c)<<8,n=t.charCodeAt(++c),u+=f.charAt((o=r+n)>>10)+f.charAt(o>>4&63)+f.charAt(o<<2&63)+"="):1==i&&(o=t.charCodeAt(c),u+=f.charAt(o>>2)+f.charAt(o<<4&63)+"=="),u},decode:function(t){var r=(t=String(t).replace(s,"")).length;r%4==0&&(r=(t=t.replace(/==?$/,"")).length),(r%4==1||/[^+a-zA-Z0-9/]/.test(t))&&a("Invalid character: the string to be decoded is not correctly encoded.");for(var n,e,o=0,i="",u=-1;++u<r;)e=f.indexOf(t.charAt(u)),n=o%4?64*n+e:e,o++%4&&(i+=String.fromCharCode(255&n>>(-2*o&6)));return i},version:"1.0.0"};if(o&&!o.nodeType)if(i)i.exports=l;else for(var p in l)l.hasOwnProperty(p)&&(o[p]=l[p]);else e.base64=l}(t)}({get exports(){return bv},set exports(t){bv=t}},bv);var mv=bv,_v={};function jv(t){return mv.encode(_v.encode(t))}
/*! https://mths.be/utf8js v3.0.0 by @mathias */
!function(t){!function(t){var r,n,e,o=String.fromCharCode;function i(t){for(var r,n,e=[],o=0,i=t.length;o<i;)(r=t.charCodeAt(o++))>=55296&&r<=56319&&o<i?56320==(64512&(n=t.charCodeAt(o++)))?e.push(((1023&r)<<10)+(1023&n)+65536):(e.push(r),o--):e.push(r);return e}function u(t){if(t>=55296&&t<=57343)throw Error("Lone surrogate U+"+t.toString(16).toUpperCase()+" is not a scalar value")}function c(t,r){return o(t>>r&63|128)}function a(t){if(0==(4294967168&t))return o(t);var r="";return 0==(4294965248&t)?r=o(t>>6&31|192):0==(4294901760&t)?(u(t),r=o(t>>12&15|224),r+=c(t,6)):0==(4292870144&t)&&(r=o(t>>18&7|240),r+=c(t,12),r+=c(t,6)),r+=o(63&t|128)}function f(){if(e>=n)throw Error("Invalid byte index");var t=255&r[e];if(e++,128==(192&t))return 63&t;throw Error("Invalid continuation byte")}function s(){var t,o;if(e>n)throw Error("Invalid byte index");if(e==n)return!1;if(t=255&r[e],e++,0==(128&t))return t;if(192==(224&t)){if((o=(31&t)<<6|f())>=128)return o;throw Error("Invalid continuation byte")}if(224==(240&t)){if((o=(15&t)<<12|f()<<6|f())>=2048)return u(o),o;throw Error("Invalid continuation byte")}if(240==(248&t)&&(o=(7&t)<<18|f()<<12|f()<<6|f())>=65536&&o<=1114111)return o;throw Error("Invalid UTF-8 detected")}t.version="3.0.0",t.encode=function(t){for(var r=i(t),n=r.length,e=-1,o="";++e<n;)o+=a(r[e]);return o},t.decode=function(t){r=i(t),n=r.length,e=0;for(var u,c=[];!1!==(u=s());)c.push(u);return function(t){for(var r,n=t.length,e=-1,i="";++e<n;)(r=t[e])>65535&&(i+=o((r-=65536)>>>10&1023|55296),r=56320|1023&r),i+=o(r);return i}(c)}}(t)}(_v);var Ov={languages:{cpp:{disassemble:!1,compiler:"clang_trunk",options:"",execute:!0,libs:[],compilers:function(t){return[{id:this.compiler,libs:this.libs,options:this.options,filters:{execute:this.execute}}]},executors:function(t){return[{compiler:{id:this.compiler,libs:this.libs,options:this.options,filters:{execute:this.execute}}}]},state:function(t,r){return{sessions:[{id:1,language:"c++",source:r,compilers:this.disassemble?this.compilers():[],executors:this.disassemble?[]:this.executors()}]}},link:function(t,r){var n=encodeURIComponent(jv(JSON.stringify(this.state(t,r))));return"https://godbolt.org/clientstate/".concat(n)}},javascript:{compiler:"js_trunk",options:"",execute:!0,libs:[],compilers:function(t){return[{id:this.compiler,libs:this.libs,options:this.options,filters:{execute:this.execute}}]},state:function(t,r){return{sessions:[{id:1,language:"javascript",source:r,compilers:this.compilers(),executors:[]}]}},link:function(t,r){var n=encodeURIComponent(jv(JSON.stringify(this.state(t,r))));return"https://godbolt.org/clientstate/".concat(n)}}},text:"Run Online!",class:"linkify-link"},wv=function(t,r){var n="language-",e=Array.from(r.classList).filter((function(t){return t.startsWith(n)})).map((function(t){return t.substring(n.length)})).find((function(r){return t.languages.hasOwnProperty(r)}));if(void 0!==e){var o=function(t){return t.children.length>0&&Array.from(t.children[0].classList).includes("hljs-ln")?Array.from(t.querySelectorAll(".hljs-ln-code")).map((function(t){return t.textContent})).join("\n"):t.textContent}(r),i=t.languages[e].link(t,o),u=document.createElement("a");u.href=i,u.target="_blank",u.textContent=t.text,u.classList.add(t.class),r.after(u)}};return function(){return{id:"linkify",init:function(t){var r=gv({},Ov,t.getConfig().linkify||{});Array.from(t.getRevealElement().getElementsByTagName("code")).forEach((function(t){return wv(r,t)}))}}}}));
