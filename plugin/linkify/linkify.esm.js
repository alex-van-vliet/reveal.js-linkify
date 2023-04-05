/*!
* reveal.js-linkify 0.0.1
* https://github.com/alex-van-vliet/reveal.js-linkify
* GNU GPLv3 Licensed
*
* Copyright (C) 2023, https://alexvanvliet.pro
*/
var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r=function(t){return t&&t.Math==Math&&t},n=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof t&&t)||function(){return this}()||Function("return this")(),e={},o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),u=!o((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),a=u,c=Function.prototype.call,f=a?c.bind(c):function(){return c.apply(c,arguments)},s={},l={}.propertyIsEnumerable,p=Object.getOwnPropertyDescriptor,v=p&&!l.call({1:2},1);s.f=v?function(t){var r=p(this,t);return!!r&&r.enumerable}:l;var y,h,b=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}},d=u,g=Function.prototype,_=g.call,j=d&&g.bind.bind(_,_),m=d?j:function(t){return function(){return _.apply(t,arguments)}},O=m,w=O({}.toString),S=O("".slice),A=function(t){return S(w(t),8,-1)},P=o,T=A,E=Object,x=m("".split),L=P((function(){return!E("z").propertyIsEnumerable(0)}))?function(t){return"String"==T(t)?x(t,""):E(t)}:E,I=function(t){return null==t},F=I,k=TypeError,z=function(t){if(F(t))throw k("Can't call method on "+t);return t},C=L,M=z,R=function(t){return C(M(t))},D="object"==typeof document&&document.all,G={all:D,IS_HTMLDDA:void 0===D&&void 0!==D},N=G.all,U=G.IS_HTMLDDA?function(t){return"function"==typeof t||t===N}:function(t){return"function"==typeof t},B=U,V=G.all,$=G.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:B(t)||t===V}:function(t){return"object"==typeof t?null!==t:B(t)},H=n,W=U,q=function(t,r){return arguments.length<2?(n=H[t],W(n)?n:void 0):H[t]&&H[t][r];var n},Y=m({}.isPrototypeOf),X=n,K="undefined"!=typeof navigator&&String(navigator.userAgent)||"",J=X.process,Q=X.Deno,Z=J&&J.versions||Q&&Q.version,tt=Z&&Z.v8;tt&&(h=(y=tt.split("."))[0]>0&&y[0]<4?1:+(y[0]+y[1])),!h&&K&&(!(y=K.match(/Edge\/(\d+)/))||y[1]>=74)&&(y=K.match(/Chrome\/(\d+)/))&&(h=+y[1]);var rt=h,nt=o,et=!!Object.getOwnPropertySymbols&&!nt((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&rt&&rt<41})),ot=et&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,it=q,ut=U,at=Y,ct=Object,ft=ot?function(t){return"symbol"==typeof t}:function(t){var r=it("Symbol");return ut(r)&&at(r.prototype,ct(t))},st=String,lt=function(t){try{return st(t)}catch(t){return"Object"}},pt=U,vt=lt,yt=TypeError,ht=function(t){if(pt(t))return t;throw yt(vt(t)+" is not a function")},bt=ht,dt=I,gt=function(t,r){var n=t[r];return dt(n)?void 0:bt(n)},_t=f,jt=U,mt=$,Ot=TypeError,wt={},St={get exports(){return wt},set exports(t){wt=t}},At=n,Pt=Object.defineProperty,Tt=function(t,r){try{Pt(At,t,{value:r,configurable:!0,writable:!0})}catch(n){At[t]=r}return r},Et=Tt,xt="__core-js_shared__",Lt=n[xt]||Et(xt,{}),It=Lt;(St.exports=function(t,r){return It[t]||(It[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.30.0",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.0/LICENSE",source:"https://github.com/zloirock/core-js"});var Ft=z,kt=Object,zt=function(t){return kt(Ft(t))},Ct=zt,Mt=m({}.hasOwnProperty),Rt=Object.hasOwn||function(t,r){return Mt(Ct(t),r)},Dt=m,Gt=0,Nt=Math.random(),Ut=Dt(1..toString),Bt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Ut(++Gt+Nt,36)},Vt=wt,$t=Rt,Ht=Bt,Wt=et,qt=ot,Yt=n.Symbol,Xt=Vt("wks"),Kt=qt?Yt.for||Yt:Yt&&Yt.withoutSetter||Ht,Jt=function(t){return $t(Xt,t)||(Xt[t]=Wt&&$t(Yt,t)?Yt[t]:Kt("Symbol."+t)),Xt[t]},Qt=f,Zt=$,tr=ft,rr=gt,nr=function(t,r){var n,e;if("string"===r&&jt(n=t.toString)&&!mt(e=_t(n,t)))return e;if(jt(n=t.valueOf)&&!mt(e=_t(n,t)))return e;if("string"!==r&&jt(n=t.toString)&&!mt(e=_t(n,t)))return e;throw Ot("Can't convert object to primitive value")},er=TypeError,or=Jt("toPrimitive"),ir=function(t,r){if(!Zt(t)||tr(t))return t;var n,e=rr(t,or);if(e){if(void 0===r&&(r="default"),n=Qt(e,t,r),!Zt(n)||tr(n))return n;throw er("Can't convert object to primitive value")}return void 0===r&&(r="number"),nr(t,r)},ur=ft,ar=function(t){var r=ir(t,"string");return ur(r)?r:r+""},cr=$,fr=n.document,sr=cr(fr)&&cr(fr.createElement),lr=function(t){return sr?fr.createElement(t):{}},pr=lr,vr=!i&&!o((function(){return 7!=Object.defineProperty(pr("div"),"a",{get:function(){return 7}}).a})),yr=i,hr=f,br=s,dr=b,gr=R,_r=ar,jr=Rt,mr=vr,Or=Object.getOwnPropertyDescriptor;e.f=yr?Or:function(t,r){if(t=gr(t),r=_r(r),mr)try{return Or(t,r)}catch(t){}if(jr(t,r))return dr(!hr(br.f,t,r),t[r])};var wr={},Sr=i&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Ar=$,Pr=String,Tr=TypeError,Er=function(t){if(Ar(t))return t;throw Tr(Pr(t)+" is not an object")},xr=i,Lr=vr,Ir=Sr,Fr=Er,kr=ar,zr=TypeError,Cr=Object.defineProperty,Mr=Object.getOwnPropertyDescriptor,Rr="enumerable",Dr="configurable",Gr="writable";wr.f=xr?Ir?function(t,r,n){if(Fr(t),r=kr(r),Fr(n),"function"==typeof t&&"prototype"===r&&"value"in n&&Gr in n&&!n[Gr]){var e=Mr(t,r);e&&e[Gr]&&(t[r]=n.value,n={configurable:Dr in n?n[Dr]:e[Dr],enumerable:Rr in n?n[Rr]:e[Rr],writable:!1})}return Cr(t,r,n)}:Cr:function(t,r,n){if(Fr(t),r=kr(r),Fr(n),Lr)try{return Cr(t,r,n)}catch(t){}if("get"in n||"set"in n)throw zr("Accessors not supported");return"value"in n&&(t[r]=n.value),t};var Nr=wr,Ur=b,Br=i?function(t,r,n){return Nr.f(t,r,Ur(1,n))}:function(t,r,n){return t[r]=n,t},Vr={},$r={get exports(){return Vr},set exports(t){Vr=t}},Hr=i,Wr=Rt,qr=Function.prototype,Yr=Hr&&Object.getOwnPropertyDescriptor,Xr=Wr(qr,"name"),Kr={EXISTS:Xr,PROPER:Xr&&"something"===function(){}.name,CONFIGURABLE:Xr&&(!Hr||Hr&&Yr(qr,"name").configurable)},Jr=U,Qr=Lt,Zr=m(Function.toString);Jr(Qr.inspectSource)||(Qr.inspectSource=function(t){return Zr(t)});var tn,rn,nn,en=Qr.inspectSource,on=U,un=n.WeakMap,an=on(un)&&/native code/.test(String(un)),cn=Bt,fn=wt("keys"),sn=function(t){return fn[t]||(fn[t]=cn(t))},ln={},pn=an,vn=n,yn=$,hn=Br,bn=Rt,dn=Lt,gn=sn,_n=ln,jn="Object already initialized",mn=vn.TypeError,On=vn.WeakMap;if(pn||dn.state){var wn=dn.state||(dn.state=new On);wn.get=wn.get,wn.has=wn.has,wn.set=wn.set,tn=function(t,r){if(wn.has(t))throw mn(jn);return r.facade=t,wn.set(t,r),r},rn=function(t){return wn.get(t)||{}},nn=function(t){return wn.has(t)}}else{var Sn=gn("state");_n[Sn]=!0,tn=function(t,r){if(bn(t,Sn))throw mn(jn);return r.facade=t,hn(t,Sn,r),r},rn=function(t){return bn(t,Sn)?t[Sn]:{}},nn=function(t){return bn(t,Sn)}}var An={set:tn,get:rn,has:nn,enforce:function(t){return nn(t)?rn(t):tn(t,{})},getterFor:function(t){return function(r){var n;if(!yn(r)||(n=rn(r)).type!==t)throw mn("Incompatible receiver, "+t+" required");return n}}},Pn=m,Tn=o,En=U,xn=Rt,Ln=i,In=Kr.CONFIGURABLE,Fn=en,kn=An.enforce,zn=An.get,Cn=String,Mn=Object.defineProperty,Rn=Pn("".slice),Dn=Pn("".replace),Gn=Pn([].join),Nn=Ln&&!Tn((function(){return 8!==Mn((function(){}),"length",{value:8}).length})),Un=String(String).split("String"),Bn=$r.exports=function(t,r,n){"Symbol("===Rn(Cn(r),0,7)&&(r="["+Dn(Cn(r),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(r="get "+r),n&&n.setter&&(r="set "+r),(!xn(t,"name")||In&&t.name!==r)&&(Ln?Mn(t,"name",{value:r,configurable:!0}):t.name=r),Nn&&n&&xn(n,"arity")&&t.length!==n.arity&&Mn(t,"length",{value:n.arity});try{n&&xn(n,"constructor")&&n.constructor?Ln&&Mn(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var e=kn(t);return xn(e,"source")||(e.source=Gn(Un,"string"==typeof r?r:"")),t};Function.prototype.toString=Bn((function(){return En(this)&&zn(this).source||Fn(this)}),"toString");var Vn=U,$n=wr,Hn=Vr,Wn=Tt,qn=function(t,r,n,e){e||(e={});var o=e.enumerable,i=void 0!==e.name?e.name:r;if(Vn(n)&&Hn(n,i,e),e.global)o?t[r]=n:Wn(r,n);else{try{e.unsafe?t[r]&&(o=!0):delete t[r]}catch(t){}o?t[r]=n:$n.f(t,r,{value:n,enumerable:!1,configurable:!e.nonConfigurable,writable:!e.nonWritable})}return t},Yn={},Xn=Math.ceil,Kn=Math.floor,Jn=Math.trunc||function(t){var r=+t;return(r>0?Kn:Xn)(r)},Qn=function(t){var r=+t;return r!=r||0===r?0:Jn(r)},Zn=Qn,te=Math.max,re=Math.min,ne=Qn,ee=Math.min,oe=function(t){return t>0?ee(ne(t),9007199254740991):0},ie=function(t){return oe(t.length)},ue=R,ae=function(t,r){var n=Zn(t);return n<0?te(n+r,0):re(n,r)},ce=ie,fe=function(t){return function(r,n,e){var o,i=ue(r),u=ce(i),a=ae(e,u);if(t&&n!=n){for(;u>a;)if((o=i[a++])!=o)return!0}else for(;u>a;a++)if((t||a in i)&&i[a]===n)return t||a||0;return!t&&-1}},se={includes:fe(!0),indexOf:fe(!1)},le=Rt,pe=R,ve=se.indexOf,ye=ln,he=m([].push),be=function(t,r){var n,e=pe(t),o=0,i=[];for(n in e)!le(ye,n)&&le(e,n)&&he(i,n);for(;r.length>o;)le(e,n=r[o++])&&(~ve(i,n)||he(i,n));return i},de=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ge=be,_e=de.concat("length","prototype");Yn.f=Object.getOwnPropertyNames||function(t){return ge(t,_e)};var je={};je.f=Object.getOwnPropertySymbols;var me=q,Oe=Yn,we=je,Se=Er,Ae=m([].concat),Pe=me("Reflect","ownKeys")||function(t){var r=Oe.f(Se(t)),n=we.f;return n?Ae(r,n(t)):r},Te=Rt,Ee=Pe,xe=e,Le=wr,Ie=o,Fe=U,ke=/#|\.prototype\./,ze=function(t,r){var n=Me[Ce(t)];return n==De||n!=Re&&(Fe(r)?Ie(r):!!r)},Ce=ze.normalize=function(t){return String(t).replace(ke,".").toLowerCase()},Me=ze.data={},Re=ze.NATIVE="N",De=ze.POLYFILL="P",Ge=ze,Ne=n,Ue=e.f,Be=Br,Ve=qn,$e=Tt,He=function(t,r,n){for(var e=Ee(r),o=Le.f,i=xe.f,u=0;u<e.length;u++){var a=e[u];Te(t,a)||n&&Te(n,a)||o(t,a,i(r,a))}},We=Ge,qe=function(t,r){var n,e,o,i,u,a=t.target,c=t.global,f=t.stat;if(n=c?Ne:f?Ne[a]||$e(a,{}):(Ne[a]||{}).prototype)for(e in r){if(i=r[e],o=t.dontCallGetSet?(u=Ue(n,e))&&u.value:n[e],!We(c?e:a+(f?".":"#")+e,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;He(i,o)}(t.sham||o&&o.sham)&&Be(i,"sham",!0),Ve(n,e,i,t)}},Ye=A,Xe=m,Ke=function(t){if("Function"===Ye(t))return Xe(t)},Je=ht,Qe=u,Ze=Ke(Ke.bind),to=function(t,r){return Je(t),void 0===r?t:Qe?Ze(t,r):function(){return t.apply(r,arguments)}},ro=A,no=Array.isArray||function(t){return"Array"==ro(t)},eo={};eo[Jt("toStringTag")]="z";var oo="[object z]"===String(eo),io=oo,uo=U,ao=A,co=Jt("toStringTag"),fo=Object,so="Arguments"==ao(function(){return arguments}()),lo=io?ao:function(t){var r,n,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,r){try{return t[r]}catch(t){}}(r=fo(t),co))?n:so?ao(r):"Object"==(e=ao(r))&&uo(r.callee)?"Arguments":e},po=m,vo=o,yo=U,ho=lo,bo=en,go=function(){},_o=[],jo=q("Reflect","construct"),mo=/^\s*(?:class|function)\b/,Oo=po(mo.exec),wo=!mo.exec(go),So=function(t){if(!yo(t))return!1;try{return jo(go,_o,t),!0}catch(t){return!1}},Ao=function(t){if(!yo(t))return!1;switch(ho(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return wo||!!Oo(mo,bo(t))}catch(t){return!0}};Ao.sham=!0;var Po=!jo||vo((function(){var t;return So(So.call)||!So(Object)||!So((function(){t=!0}))||t}))?Ao:So,To=no,Eo=Po,xo=$,Lo=Jt("species"),Io=Array,Fo=function(t){var r;return To(t)&&(r=t.constructor,(Eo(r)&&(r===Io||To(r.prototype))||xo(r)&&null===(r=r[Lo]))&&(r=void 0)),void 0===r?Io:r},ko=to,zo=L,Co=zt,Mo=ie,Ro=function(t,r){return new(Fo(t))(0===r?0:r)},Do=m([].push),Go=function(t){var r=1==t,n=2==t,e=3==t,o=4==t,i=6==t,u=7==t,a=5==t||i;return function(c,f,s,l){for(var p,v,y=Co(c),h=zo(y),b=ko(f,s),d=Mo(h),g=0,_=l||Ro,j=r?_(c,d):n||u?_(c,0):void 0;d>g;g++)if((a||g in h)&&(v=b(p=h[g],g,y),t))if(r)j[g]=v;else if(v)switch(t){case 3:return!0;case 5:return p;case 6:return g;case 2:Do(j,p)}else switch(t){case 4:return!1;case 7:Do(j,p)}return i?-1:e||o?o:j}},No={forEach:Go(0),map:Go(1),filter:Go(2),some:Go(3),every:Go(4),find:Go(5),findIndex:Go(6),filterReject:Go(7)},Uo={},Bo=be,Vo=de,$o=Object.keys||function(t){return Bo(t,Vo)},Ho=i,Wo=Sr,qo=wr,Yo=Er,Xo=R,Ko=$o;Uo.f=Ho&&!Wo?Object.defineProperties:function(t,r){Yo(t);for(var n,e=Xo(r),o=Ko(r),i=o.length,u=0;i>u;)qo.f(t,n=o[u++],e[n]);return t};var Jo,Qo=q("document","documentElement"),Zo=Er,ti=Uo,ri=de,ni=ln,ei=Qo,oi=lr,ii="prototype",ui="script",ai=sn("IE_PROTO"),ci=function(){},fi=function(t){return"<"+ui+">"+t+"</"+ui+">"},si=function(t){t.write(fi("")),t.close();var r=t.parentWindow.Object;return t=null,r},li=function(){try{Jo=new ActiveXObject("htmlfile")}catch(t){}var t,r,n;li="undefined"!=typeof document?document.domain&&Jo?si(Jo):(r=oi("iframe"),n="java"+ui+":",r.style.display="none",ei.appendChild(r),r.src=String(n),(t=r.contentWindow.document).open(),t.write(fi("document.F=Object")),t.close(),t.F):si(Jo);for(var e=ri.length;e--;)delete li[ii][ri[e]];return li()};ni[ai]=!0;var pi=Object.create||function(t,r){var n;return null!==t?(ci[ii]=Zo(t),n=new ci,ci[ii]=null,n[ai]=t):n=li(),void 0===r?n:ti.f(n,r)},vi=Jt,yi=pi,hi=wr.f,bi=vi("unscopables"),di=Array.prototype;null==di[bi]&&hi(di,bi,{configurable:!0,value:yi(null)});var gi=qe,_i=No.find,ji=function(t){di[bi][t]=!0},mi="find",Oi=!0;mi in[]&&Array(1)[mi]((function(){Oi=!1})),gi({target:"Array",proto:!0,forced:Oi},{find:function(t){return _i(this,t,arguments.length>1?arguments[1]:void 0)}}),ji(mi);var wi=lo,Si=oo?{}.toString:function(){return"[object "+wi(this)+"]"};oo||qn(Object.prototype,"toString",Si,{unsafe:!0});var Ai=f,Pi=Er,Ti=gt,Ei=Er,xi=function(t,r,n){var e,o;Pi(t);try{if(!(e=Ti(t,"return"))){if("throw"===r)throw n;return n}e=Ai(e,t)}catch(t){o=!0,e=t}if("throw"===r)throw n;if(o)throw e;return Pi(e),n},Li={},Ii=Li,Fi=Jt("iterator"),ki=Array.prototype,zi=ar,Ci=wr,Mi=b,Ri=lo,Di=gt,Gi=I,Ni=Li,Ui=Jt("iterator"),Bi=function(t){if(!Gi(t))return Di(t,Ui)||Di(t,"@@iterator")||Ni[Ri(t)]},Vi=f,$i=ht,Hi=Er,Wi=lt,qi=Bi,Yi=TypeError,Xi=to,Ki=f,Ji=zt,Qi=function(t,r,n,e){try{return e?r(Ei(n)[0],n[1]):r(n)}catch(r){xi(t,"throw",r)}},Zi=function(t){return void 0!==t&&(Ii.Array===t||ki[Fi]===t)},tu=Po,ru=ie,nu=function(t,r,n){var e=zi(r);e in t?Ci.f(t,e,Mi(0,n)):t[e]=n},eu=function(t,r){var n=arguments.length<2?qi(t):r;if($i(n))return Hi(Vi(n,t));throw Yi(Wi(t)+" is not iterable")},ou=Bi,iu=Array,uu=Jt("iterator"),au=!1;try{var cu=0,fu={next:function(){return{done:!!cu++}},return:function(){au=!0}};fu[uu]=function(){return this},Array.from(fu,(function(){throw 2}))}catch(t){}var su=function(t){var r=Ji(t),n=tu(this),e=arguments.length,o=e>1?arguments[1]:void 0,i=void 0!==o;i&&(o=Xi(o,e>2?arguments[2]:void 0));var u,a,c,f,s,l,p=ou(r),v=0;if(!p||this===iu&&Zi(p))for(u=ru(r),a=n?new this(u):iu(u);u>v;v++)l=i?o(r[v],v):r[v],nu(a,v,l);else for(s=(f=eu(r,p)).next,a=n?new this:[];!(c=Ki(s,f)).done;v++)l=i?Qi(f,o,[c.value,v],!0):c.value,nu(a,v,l);return a.length=v,a},lu=function(t,r){if(!r&&!au)return!1;var n=!1;try{var e={};e[uu]=function(){return{next:function(){return{done:n=!0}}}},t(e)}catch(t){}return n};qe({target:"Array",stat:!0,forced:!lu((function(t){Array.from(t)}))},{from:su});var pu,vu,yu,hu=lo,bu=String,du=function(t){if("Symbol"===hu(t))throw TypeError("Cannot convert a Symbol value to a string");return bu(t)},gu=m,_u=Qn,ju=du,mu=z,Ou=gu("".charAt),wu=gu("".charCodeAt),Su=gu("".slice),Au=function(t){return function(r,n){var e,o,i=ju(mu(r)),u=_u(n),a=i.length;return u<0||u>=a?t?"":void 0:(e=wu(i,u))<55296||e>56319||u+1===a||(o=wu(i,u+1))<56320||o>57343?t?Ou(i,u):e:t?Su(i,u,u+2):o-56320+(e-55296<<10)+65536}},Pu={codeAt:Au(!1),charAt:Au(!0)},Tu=!o((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),Eu=Rt,xu=U,Lu=zt,Iu=Tu,Fu=sn("IE_PROTO"),ku=Object,zu=ku.prototype,Cu=Iu?ku.getPrototypeOf:function(t){var r=Lu(t);if(Eu(r,Fu))return r[Fu];var n=r.constructor;return xu(n)&&r instanceof n?n.prototype:r instanceof ku?zu:null},Mu=o,Ru=U,Du=$,Gu=Cu,Nu=qn,Uu=Jt("iterator"),Bu=!1;[].keys&&("next"in(yu=[].keys())?(vu=Gu(Gu(yu)))!==Object.prototype&&(pu=vu):Bu=!0);var Vu=!Du(pu)||Mu((function(){var t={};return pu[Uu].call(t)!==t}));Vu&&(pu={}),Ru(pu[Uu])||Nu(pu,Uu,(function(){return this}));var $u={IteratorPrototype:pu,BUGGY_SAFARI_ITERATORS:Bu},Hu=wr.f,Wu=Rt,qu=Jt("toStringTag"),Yu=function(t,r,n){t&&!n&&(t=t.prototype),t&&!Wu(t,qu)&&Hu(t,qu,{configurable:!0,value:r})},Xu=$u.IteratorPrototype,Ku=pi,Ju=b,Qu=Yu,Zu=Li,ta=function(){return this},ra=m,na=ht,ea=U,oa=String,ia=TypeError,ua=function(t,r,n){try{return ra(na(Object.getOwnPropertyDescriptor(t,r)[n]))}catch(t){}},aa=Er,ca=function(t){if("object"==typeof t||ea(t))return t;throw ia("Can't set "+oa(t)+" as a prototype")},fa=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,n={};try{(t=ua(Object.prototype,"__proto__","set"))(n,[]),r=n instanceof Array}catch(t){}return function(n,e){return aa(n),ca(e),r?t(n,e):n.__proto__=e,n}}():void 0),sa=qe,la=f,pa=U,va=function(t,r,n,e){var o=r+" Iterator";return t.prototype=Ku(Xu,{next:Ju(+!e,n)}),Qu(t,o,!1),Zu[o]=ta,t},ya=Cu,ha=fa,ba=Yu,da=Br,ga=qn,_a=Li,ja=Kr.PROPER,ma=Kr.CONFIGURABLE,Oa=$u.IteratorPrototype,wa=$u.BUGGY_SAFARI_ITERATORS,Sa=Jt("iterator"),Aa="keys",Pa="values",Ta="entries",Ea=function(){return this},xa=Pu.charAt,La=du,Ia=An,Fa=function(t,r,n,e,o,i,u){va(n,r,e);var a,c,f,s=function(t){if(t===o&&h)return h;if(!wa&&t in v)return v[t];switch(t){case Aa:case Pa:case Ta:return function(){return new n(this,t)}}return function(){return new n(this)}},l=r+" Iterator",p=!1,v=t.prototype,y=v[Sa]||v["@@iterator"]||o&&v[o],h=!wa&&y||s(o),b="Array"==r&&v.entries||y;if(b&&(a=ya(b.call(new t)))!==Object.prototype&&a.next&&(ya(a)!==Oa&&(ha?ha(a,Oa):pa(a[Sa])||ga(a,Sa,Ea)),ba(a,l,!0)),ja&&o==Pa&&y&&y.name!==Pa&&(ma?da(v,"name",Pa):(p=!0,h=function(){return la(y,this)})),o)if(c={values:s(Pa),keys:i?h:s(Aa),entries:s(Ta)},u)for(f in c)(wa||p||!(f in v))&&ga(v,f,c[f]);else sa({target:r,proto:!0,forced:wa||p},c);return v[Sa]!==h&&ga(v,Sa,h,{name:o}),_a[r]=h,c},ka=function(t,r){return{value:t,done:r}},za="String Iterator",Ca=Ia.set,Ma=Ia.getterFor(za);Fa(String,"String",(function(t){Ca(this,{type:za,string:La(t),index:0})}),(function(){var t,r=Ma(this),n=r.string,e=r.index;return e>=n.length?ka(void 0,!0):(t=xa(n,e),r.index+=t.length,ka(t,!1))}));var Ra=z,Da=du,Ga=/"/g,Na=m("".replace),Ua=o,Ba=function(t,r,n,e){var o=Da(Ra(t)),i="<"+r;return""!==n&&(i+=" "+n+'="'+Na(Da(e),Ga,"&quot;")+'"'),i+">"+o+"</"+r+">"},Va=function(t){return Ua((function(){var r=""[t]('"');return r!==r.toLowerCase()||r.split('"').length>3}))};qe({target:"String",proto:!0,forced:Va("link")},{link:function(t){return Ba(this,"a","href",t)}});var $a=o,Ha=No.forEach,Wa=function(t,r){var n=[][t];return!!n&&$a((function(){n.call(null,r||function(){return 1},1)}))}("forEach")?[].forEach:function(t){return Ha(this,t,arguments.length>1?arguments[1]:void 0)};qe({target:"Array",proto:!0,forced:[].forEach!=Wa},{forEach:Wa});var qa=lr("span").classList,Ya=qa&&qa.constructor&&qa.constructor.prototype,Xa=n,Ka={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Ja=Ya===Object.prototype?void 0:Ya,Qa=Wa,Za=Br,tc=function(t){if(t&&t.forEach!==Qa)try{Za(t,"forEach",Qa)}catch(r){t.forEach=Qa}};for(var rc in Ka)Ka[rc]&&tc(Xa[rc]&&Xa[rc].prototype);tc(Ja);var nc=function(){this.__data__=[],this.size=0};var ec=function(t,r){return t===r||t!=t&&r!=r},oc=ec;var ic=function(t,r){for(var n=t.length;n--;)if(oc(t[n][0],r))return n;return-1},uc=ic,ac=Array.prototype.splice;var cc=function(t){var r=this.__data__,n=uc(r,t);return!(n<0)&&(n==r.length-1?r.pop():ac.call(r,n,1),--this.size,!0)},fc=ic;var sc=function(t){var r=this.__data__,n=fc(r,t);return n<0?void 0:r[n][1]},lc=ic;var pc=ic;var vc=function(t,r){var n=this.__data__,e=pc(n,t);return e<0?(++this.size,n.push([t,r])):n[e][1]=r,this},yc=nc,hc=cc,bc=sc,dc=function(t){return lc(this.__data__,t)>-1},gc=vc;function _c(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}_c.prototype.clear=yc,_c.prototype.delete=hc,_c.prototype.get=bc,_c.prototype.has=dc,_c.prototype.set=gc;var jc=_c,mc=jc;var Oc=function(){this.__data__=new mc,this.size=0};var wc=function(t){var r=this.__data__,n=r.delete(t);return this.size=r.size,n};var Sc=function(t){return this.__data__.get(t)};var Ac=function(t){return this.__data__.has(t)},Pc="object"==typeof t&&t&&t.Object===Object&&t,Tc=Pc,Ec="object"==typeof self&&self&&self.Object===Object&&self,xc=Tc||Ec||Function("return this")(),Lc=xc.Symbol,Ic=Lc,Fc=Object.prototype,kc=Fc.hasOwnProperty,zc=Fc.toString,Cc=Ic?Ic.toStringTag:void 0;var Mc=function(t){var r=kc.call(t,Cc),n=t[Cc];try{t[Cc]=void 0;var e=!0}catch(t){}var o=zc.call(t);return e&&(r?t[Cc]=n:delete t[Cc]),o},Rc=Object.prototype.toString;var Dc=Mc,Gc=function(t){return Rc.call(t)},Nc=Lc?Lc.toStringTag:void 0;var Uc=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Nc&&Nc in Object(t)?Dc(t):Gc(t)};var Bc=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)},Vc=Uc,$c=Bc;var Hc=function(t){if(!$c(t))return!1;var r=Vc(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},Wc=xc["__core-js_shared__"],qc=function(){var t=/[^.]+$/.exec(Wc&&Wc.keys&&Wc.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();var Yc=function(t){return!!qc&&qc in t},Xc=Function.prototype.toString;var Kc=Hc,Jc=Yc,Qc=Bc,Zc=function(t){if(null!=t){try{return Xc.call(t)}catch(t){}try{return t+""}catch(t){}}return""},tf=/^\[object .+?Constructor\]$/,rf=Function.prototype,nf=Object.prototype,ef=rf.toString,of=nf.hasOwnProperty,uf=RegExp("^"+ef.call(of).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var af=function(t){return!(!Qc(t)||Jc(t))&&(Kc(t)?uf:tf).test(Zc(t))},cf=function(t,r){return null==t?void 0:t[r]};var ff=function(t,r){var n=cf(t,r);return af(n)?n:void 0},sf=ff(xc,"Map"),lf=ff(Object,"create"),pf=lf;var vf=function(){this.__data__=pf?pf(null):{},this.size=0};var yf=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},hf=lf,bf=Object.prototype.hasOwnProperty;var df=function(t){var r=this.__data__;if(hf){var n=r[t];return"__lodash_hash_undefined__"===n?void 0:n}return bf.call(r,t)?r[t]:void 0},gf=lf,_f=Object.prototype.hasOwnProperty;var jf=function(t){var r=this.__data__;return gf?void 0!==r[t]:_f.call(r,t)},mf=lf;var Of=function(t,r){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=mf&&void 0===r?"__lodash_hash_undefined__":r,this},wf=vf,Sf=yf,Af=df,Pf=jf,Tf=Of;function Ef(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}Ef.prototype.clear=wf,Ef.prototype.delete=Sf,Ef.prototype.get=Af,Ef.prototype.has=Pf,Ef.prototype.set=Tf;var xf=Ef,Lf=jc,If=sf;var Ff=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t};var kf=function(t,r){var n=t.__data__;return Ff(r)?n["string"==typeof r?"string":"hash"]:n.map},zf=kf;var Cf=kf;var Mf=kf;var Rf=kf;var Df=function(t,r){var n=Rf(this,t),e=n.size;return n.set(t,r),this.size+=n.size==e?0:1,this},Gf=function(){this.size=0,this.__data__={hash:new xf,map:new(If||Lf),string:new xf}},Nf=function(t){var r=zf(this,t).delete(t);return this.size-=r?1:0,r},Uf=function(t){return Cf(this,t).get(t)},Bf=function(t){return Mf(this,t).has(t)},Vf=Df;function $f(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}$f.prototype.clear=Gf,$f.prototype.delete=Nf,$f.prototype.get=Uf,$f.prototype.has=Bf,$f.prototype.set=Vf;var Hf=jc,Wf=sf,qf=$f;var Yf=function(t,r){var n=this.__data__;if(n instanceof Hf){var e=n.__data__;if(!Wf||e.length<199)return e.push([t,r]),this.size=++n.size,this;n=this.__data__=new qf(e)}return n.set(t,r),this.size=n.size,this},Xf=jc,Kf=Oc,Jf=wc,Qf=Sc,Zf=Ac,ts=Yf;function rs(t){var r=this.__data__=new Xf(t);this.size=r.size}rs.prototype.clear=Kf,rs.prototype.delete=Jf,rs.prototype.get=Qf,rs.prototype.has=Zf,rs.prototype.set=ts;var ns=rs,es=ff,os=function(){try{var t=es(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),is=os;var us=function(t,r,n){"__proto__"==r&&is?is(t,r,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[r]=n},as=us,cs=ec;var fs=function(t,r,n){(void 0!==n&&!cs(t[r],n)||void 0===n&&!(r in t))&&as(t,r,n)};var ss=function(t){return function(r,n,e){for(var o=-1,i=Object(r),u=e(r),a=u.length;a--;){var c=u[t?a:++o];if(!1===n(i[c],c,i))break}return r}}(),ls={};!function(t,r){var n=xc,e=r&&!r.nodeType&&r,o=e&&t&&!t.nodeType&&t,i=o&&o.exports===e?n.Buffer:void 0,u=i?i.allocUnsafe:void 0;t.exports=function(t,r){if(r)return t.slice();var n=t.length,e=u?u(n):new t.constructor(n);return t.copy(e),e}}({get exports(){return ls},set exports(t){ls=t}},ls);var ps=xc.Uint8Array;var vs=function(t){var r=new t.constructor(t.byteLength);return new ps(r).set(new ps(t)),r};var ys=function(t,r){var n=r?vs(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)};var hs=function(t,r){var n=-1,e=t.length;for(r||(r=Array(e));++n<e;)r[n]=t[n];return r},bs=Bc,ds=Object.create,gs=function(){function t(){}return function(r){if(!bs(r))return{};if(ds)return ds(r);t.prototype=r;var n=new t;return t.prototype=void 0,n}}();var _s=function(t,r){return function(n){return t(r(n))}}(Object.getPrototypeOf,Object),js=Object.prototype;var ms=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||js)},Os=gs,ws=_s,Ss=ms;var As=function(t){return"function"!=typeof t.constructor||Ss(t)?{}:Os(ws(t))};var Ps=function(t){return null!=t&&"object"==typeof t},Ts=Uc,Es=Ps;var xs=function(t){return Es(t)&&"[object Arguments]"==Ts(t)},Ls=Ps,Is=Object.prototype,Fs=Is.hasOwnProperty,ks=Is.propertyIsEnumerable,zs=xs(function(){return arguments}())?xs:function(t){return Ls(t)&&Fs.call(t,"callee")&&!ks.call(t,"callee")},Cs=Array.isArray;var Ms=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},Rs=Hc,Ds=Ms;var Gs=function(t){return null!=t&&Ds(t.length)&&!Rs(t)},Ns=Gs,Us=Ps;var Bs=function(t){return Us(t)&&Ns(t)},Vs={};var $s=function(){return!1};!function(t,r){var n=xc,e=$s,o=r&&!r.nodeType&&r,i=o&&t&&!t.nodeType&&t,u=i&&i.exports===o?n.Buffer:void 0,a=(u?u.isBuffer:void 0)||e;t.exports=a}({get exports(){return Vs},set exports(t){Vs=t}},Vs);var Hs=Uc,Ws=_s,qs=Ps,Ys=Function.prototype,Xs=Object.prototype,Ks=Ys.toString,Js=Xs.hasOwnProperty,Qs=Ks.call(Object);var Zs=function(t){if(!qs(t)||"[object Object]"!=Hs(t))return!1;var r=Ws(t);if(null===r)return!0;var n=Js.call(r,"constructor")&&r.constructor;return"function"==typeof n&&n instanceof n&&Ks.call(n)==Qs},tl=Uc,rl=Ms,nl=Ps,el={};el["[object Float32Array]"]=el["[object Float64Array]"]=el["[object Int8Array]"]=el["[object Int16Array]"]=el["[object Int32Array]"]=el["[object Uint8Array]"]=el["[object Uint8ClampedArray]"]=el["[object Uint16Array]"]=el["[object Uint32Array]"]=!0,el["[object Arguments]"]=el["[object Array]"]=el["[object ArrayBuffer]"]=el["[object Boolean]"]=el["[object DataView]"]=el["[object Date]"]=el["[object Error]"]=el["[object Function]"]=el["[object Map]"]=el["[object Number]"]=el["[object Object]"]=el["[object RegExp]"]=el["[object Set]"]=el["[object String]"]=el["[object WeakMap]"]=!1;var ol=function(t){return nl(t)&&rl(t.length)&&!!el[tl(t)]};var il=function(t){return function(r){return t(r)}},ul={};!function(t,r){var n=Pc,e=r&&!r.nodeType&&r,o=e&&t&&!t.nodeType&&t,i=o&&o.exports===e&&n.process,u=function(){try{var t=o&&o.require&&o.require("util").types;return t||i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=u}({get exports(){return ul},set exports(t){ul=t}},ul);var al=ol,cl=il,fl=ul&&ul.isTypedArray,sl=fl?cl(fl):al;var ll=function(t,r){if(("constructor"!==r||"function"!=typeof t[r])&&"__proto__"!=r)return t[r]},pl=us,vl=ec,yl=Object.prototype.hasOwnProperty;var hl=function(t,r,n){var e=t[r];yl.call(t,r)&&vl(e,n)&&(void 0!==n||r in t)||pl(t,r,n)},bl=us;var dl=function(t,r,n,e){var o=!n;n||(n={});for(var i=-1,u=r.length;++i<u;){var a=r[i],c=e?e(n[a],t[a],a,n,t):void 0;void 0===c&&(c=t[a]),o?bl(n,a,c):hl(n,a,c)}return n};var gl=/^(?:0|[1-9]\d*)$/;var _l=function(t,r){var n=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==n||"symbol"!=n&&gl.test(t))&&t>-1&&t%1==0&&t<r},jl=function(t,r){for(var n=-1,e=Array(t);++n<t;)e[n]=r(n);return e},ml=zs,Ol=Cs,wl=Vs,Sl=_l,Al=sl,Pl=Object.prototype.hasOwnProperty;var Tl=function(t,r){var n=Ol(t),e=!n&&ml(t),o=!n&&!e&&wl(t),i=!n&&!e&&!o&&Al(t),u=n||e||o||i,a=u?jl(t.length,String):[],c=a.length;for(var f in t)!r&&!Pl.call(t,f)||u&&("length"==f||o&&("offset"==f||"parent"==f)||i&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||Sl(f,c))||a.push(f);return a};var El=Bc,xl=ms,Ll=function(t){var r=[];if(null!=t)for(var n in Object(t))r.push(n);return r},Il=Object.prototype.hasOwnProperty;var Fl=Tl,kl=function(t){if(!El(t))return Ll(t);var r=xl(t),n=[];for(var e in t)("constructor"!=e||!r&&Il.call(t,e))&&n.push(e);return n},zl=Gs;var Cl=function(t){return zl(t)?Fl(t,!0):kl(t)},Ml=dl,Rl=Cl;var Dl=fs,Gl=ls,Nl=ys,Ul=hs,Bl=As,Vl=zs,$l=Cs,Hl=Bs,Wl=Vs,ql=Hc,Yl=Bc,Xl=Zs,Kl=sl,Jl=ll,Ql=function(t){return Ml(t,Rl(t))};var Zl=ns,tp=fs,rp=ss,np=function(t,r,n,e,o,i,u){var a=Jl(t,n),c=Jl(r,n),f=u.get(c);if(f)Dl(t,n,f);else{var s=i?i(a,c,n+"",t,r,u):void 0,l=void 0===s;if(l){var p=$l(c),v=!p&&Wl(c),y=!p&&!v&&Kl(c);s=c,p||v||y?$l(a)?s=a:Hl(a)?s=Ul(a):v?(l=!1,s=Gl(c,!0)):y?(l=!1,s=Nl(c,!0)):s=[]:Xl(c)||Vl(c)?(s=a,Vl(a)?s=Ql(a):Yl(a)&&!ql(a)||(s=Bl(c))):l=!1}l&&(u.set(c,s),o(s,c,e,i,u),u.delete(c)),Dl(t,n,s)}},ep=Bc,op=Cl,ip=ll;var up=function t(r,n,e,o,i){r!==n&&rp(n,(function(u,a){if(i||(i=new Zl),ep(u))np(r,n,a,e,t,o,i);else{var c=o?o(ip(r,a),u,a+"",r,n,i):void 0;void 0===c&&(c=u),tp(r,a,c)}}),op)};var ap=function(t){return t};var cp=function(t,r,n){switch(n.length){case 0:return t.call(r);case 1:return t.call(r,n[0]);case 2:return t.call(r,n[0],n[1]);case 3:return t.call(r,n[0],n[1],n[2])}return t.apply(r,n)},fp=Math.max;var sp=function(t,r,n){return r=fp(void 0===r?t.length-1:r,0),function(){for(var e=arguments,o=-1,i=fp(e.length-r,0),u=Array(i);++o<i;)u[o]=e[r+o];o=-1;for(var a=Array(r+1);++o<r;)a[o]=e[o];return a[r]=n(u),cp(t,this,a)}};var lp=function(t){return function(){return t}},pp=os,vp=pp?function(t,r){return pp(t,"toString",{configurable:!0,enumerable:!1,value:lp(r),writable:!0})}:ap,yp=Date.now;var hp=function(t){var r=0,n=0;return function(){var e=yp(),o=16-(e-n);if(n=e,o>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(void 0,arguments)}}(vp),bp=ap,dp=sp,gp=hp;var _p=ec,jp=Gs,mp=_l,Op=Bc;var wp=function(t,r){return gp(dp(t,r,bp),t+"")},Sp=function(t,r,n){if(!Op(n))return!1;var e=typeof r;return!!("number"==e?jp(n)&&mp(r,n.length):"string"==e&&r in n)&&_p(n[r],t)};var Ap=up,Pp=function(t){return wp((function(r,n){var e=-1,o=n.length,i=o>1?n[o-1]:void 0,u=o>2?n[2]:void 0;for(i=t.length>3&&"function"==typeof i?(o--,i):void 0,u&&Sp(n[0],n[1],u)&&(i=o<3?void 0:i,o=1),r=Object(r);++e<o;){var a=n[e];a&&t(r,a,e,i)}return r}))}((function(t,r,n){Ap(t,r,n)})),Tp={languages:{cpp:{link:function(t,r){return console.log("Generating link for source:",r),"https://godbolt.com/..."}}},text:"Run Online!",class:"linkify-link"},Ep=function(){return{id:"linkify",init:function(t){var r=Pp({},Tp,t.getConfig().linkify||{});Array.from(t.getRevealElement().getElementsByTagName("code")).forEach((function(t){return function(t,r){var n=Array.from(r.classList).find((function(r){return t.languages.hasOwnProperty(r)}));if(void 0!==n){var e=r.textContent,o=t.languages[n].link(t,e),i=document.createElement("a");i.href=o,i.target="_blank",i.textContent=t.text,i.classList.add(t.class),r.after(i)}}(r,t)}))}}};export{Ep as default};
