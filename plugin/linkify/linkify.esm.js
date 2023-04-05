/*!
* reveal.js-linkify 0.0.1
* https://github.com/alex-van-vliet/reveal.js-linkify
* GNU GPLv3 Licensed
*
* Copyright (C) 2023, https://alexvanvliet.pro
*/
var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r=function(t){return t&&t.Math==Math&&t},e=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof t&&t)||function(){return this}()||Function("return this")(),n={},o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a=!o((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),u=a,c=Function.prototype.call,f=u?c.bind(c):function(){return c.apply(c,arguments)},s={},l={}.propertyIsEnumerable,p=Object.getOwnPropertyDescriptor,v=p&&!l.call({1:2},1);s.f=v?function(t){var r=p(this,t);return!!r&&r.enumerable}:l;var h,y,d=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}},g=a,b=Function.prototype,m=b.call,_=g&&b.bind.bind(m,m),O=g?_:function(t){return function(){return m.apply(t,arguments)}},j=O,S=j({}.toString),w=j("".slice),x=function(t){return w(S(t),8,-1)},A=o,E=x,P=Object,T=O("".split),I=A((function(){return!P("z").propertyIsEnumerable(0)}))?function(t){return"String"==E(t)?T(t,""):P(t)}:P,C=function(t){return null==t},L=C,R=TypeError,k=function(t){if(L(t))throw R("Can't call method on "+t);return t},F=I,M=k,z=function(t){return F(M(t))},D="object"==typeof document&&document.all,N={all:D,IS_HTMLDDA:void 0===D&&void 0!==D},$=N.all,G=N.IS_HTMLDDA?function(t){return"function"==typeof t||t===$}:function(t){return"function"==typeof t},U=G,B=N.all,V=N.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:U(t)||t===B}:function(t){return"object"==typeof t?null!==t:U(t)},H=e,W=G,q=function(t,r){return arguments.length<2?(e=H[t],W(e)?e:void 0):H[t]&&H[t][r];var e},Y=O({}.isPrototypeOf),K=e,X="undefined"!=typeof navigator&&String(navigator.userAgent)||"",J=K.process,Q=K.Deno,Z=J&&J.versions||Q&&Q.version,tt=Z&&Z.v8;tt&&(y=(h=tt.split("."))[0]>0&&h[0]<4?1:+(h[0]+h[1])),!y&&X&&(!(h=X.match(/Edge\/(\d+)/))||h[1]>=74)&&(h=X.match(/Chrome\/(\d+)/))&&(y=+h[1]);var rt=y,et=o,nt=!!Object.getOwnPropertySymbols&&!et((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&rt&&rt<41})),ot=nt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,it=q,at=G,ut=Y,ct=Object,ft=ot?function(t){return"symbol"==typeof t}:function(t){var r=it("Symbol");return at(r)&&ut(r.prototype,ct(t))},st=String,lt=function(t){try{return st(t)}catch(t){return"Object"}},pt=G,vt=lt,ht=TypeError,yt=function(t){if(pt(t))return t;throw ht(vt(t)+" is not a function")},dt=yt,gt=C,bt=function(t,r){var e=t[r];return gt(e)?void 0:dt(e)},mt=f,_t=G,Ot=V,jt=TypeError,St={},wt={get exports(){return St},set exports(t){St=t}},xt=e,At=Object.defineProperty,Et=function(t,r){try{At(xt,t,{value:r,configurable:!0,writable:!0})}catch(e){xt[t]=r}return r},Pt=Et,Tt="__core-js_shared__",It=e[Tt]||Pt(Tt,{}),Ct=It;(wt.exports=function(t,r){return Ct[t]||(Ct[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.30.0",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.0/LICENSE",source:"https://github.com/zloirock/core-js"});var Lt=k,Rt=Object,kt=function(t){return Rt(Lt(t))},Ft=kt,Mt=O({}.hasOwnProperty),zt=Object.hasOwn||function(t,r){return Mt(Ft(t),r)},Dt=O,Nt=0,$t=Math.random(),Gt=Dt(1..toString),Ut=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Gt(++Nt+$t,36)},Bt=St,Vt=zt,Ht=Ut,Wt=nt,qt=ot,Yt=e.Symbol,Kt=Bt("wks"),Xt=qt?Yt.for||Yt:Yt&&Yt.withoutSetter||Ht,Jt=function(t){return Vt(Kt,t)||(Kt[t]=Wt&&Vt(Yt,t)?Yt[t]:Xt("Symbol."+t)),Kt[t]},Qt=f,Zt=V,tr=ft,rr=bt,er=function(t,r){var e,n;if("string"===r&&_t(e=t.toString)&&!Ot(n=mt(e,t)))return n;if(_t(e=t.valueOf)&&!Ot(n=mt(e,t)))return n;if("string"!==r&&_t(e=t.toString)&&!Ot(n=mt(e,t)))return n;throw jt("Can't convert object to primitive value")},nr=TypeError,or=Jt("toPrimitive"),ir=function(t,r){if(!Zt(t)||tr(t))return t;var e,n=rr(t,or);if(n){if(void 0===r&&(r="default"),e=Qt(n,t,r),!Zt(e)||tr(e))return e;throw nr("Can't convert object to primitive value")}return void 0===r&&(r="number"),er(t,r)},ar=ft,ur=function(t){var r=ir(t,"string");return ar(r)?r:r+""},cr=V,fr=e.document,sr=cr(fr)&&cr(fr.createElement),lr=function(t){return sr?fr.createElement(t):{}},pr=lr,vr=!i&&!o((function(){return 7!=Object.defineProperty(pr("div"),"a",{get:function(){return 7}}).a})),hr=i,yr=f,dr=s,gr=d,br=z,mr=ur,_r=zt,Or=vr,jr=Object.getOwnPropertyDescriptor;n.f=hr?jr:function(t,r){if(t=br(t),r=mr(r),Or)try{return jr(t,r)}catch(t){}if(_r(t,r))return gr(!yr(dr.f,t,r),t[r])};var Sr={},wr=i&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),xr=V,Ar=String,Er=TypeError,Pr=function(t){if(xr(t))return t;throw Er(Ar(t)+" is not an object")},Tr=i,Ir=vr,Cr=wr,Lr=Pr,Rr=ur,kr=TypeError,Fr=Object.defineProperty,Mr=Object.getOwnPropertyDescriptor,zr="enumerable",Dr="configurable",Nr="writable";Sr.f=Tr?Cr?function(t,r,e){if(Lr(t),r=Rr(r),Lr(e),"function"==typeof t&&"prototype"===r&&"value"in e&&Nr in e&&!e[Nr]){var n=Mr(t,r);n&&n[Nr]&&(t[r]=e.value,e={configurable:Dr in e?e[Dr]:n[Dr],enumerable:zr in e?e[zr]:n[zr],writable:!1})}return Fr(t,r,e)}:Fr:function(t,r,e){if(Lr(t),r=Rr(r),Lr(e),Ir)try{return Fr(t,r,e)}catch(t){}if("get"in e||"set"in e)throw kr("Accessors not supported");return"value"in e&&(t[r]=e.value),t};var $r=Sr,Gr=d,Ur=i?function(t,r,e){return $r.f(t,r,Gr(1,e))}:function(t,r,e){return t[r]=e,t},Br={},Vr={get exports(){return Br},set exports(t){Br=t}},Hr=i,Wr=zt,qr=Function.prototype,Yr=Hr&&Object.getOwnPropertyDescriptor,Kr=Wr(qr,"name"),Xr={EXISTS:Kr,PROPER:Kr&&"something"===function(){}.name,CONFIGURABLE:Kr&&(!Hr||Hr&&Yr(qr,"name").configurable)},Jr=G,Qr=It,Zr=O(Function.toString);Jr(Qr.inspectSource)||(Qr.inspectSource=function(t){return Zr(t)});var te,re,ee,ne=Qr.inspectSource,oe=G,ie=e.WeakMap,ae=oe(ie)&&/native code/.test(String(ie)),ue=Ut,ce=St("keys"),fe=function(t){return ce[t]||(ce[t]=ue(t))},se={},le=ae,pe=e,ve=V,he=Ur,ye=zt,de=It,ge=fe,be=se,me="Object already initialized",_e=pe.TypeError,Oe=pe.WeakMap;if(le||de.state){var je=de.state||(de.state=new Oe);je.get=je.get,je.has=je.has,je.set=je.set,te=function(t,r){if(je.has(t))throw _e(me);return r.facade=t,je.set(t,r),r},re=function(t){return je.get(t)||{}},ee=function(t){return je.has(t)}}else{var Se=ge("state");be[Se]=!0,te=function(t,r){if(ye(t,Se))throw _e(me);return r.facade=t,he(t,Se,r),r},re=function(t){return ye(t,Se)?t[Se]:{}},ee=function(t){return ye(t,Se)}}var we={set:te,get:re,has:ee,enforce:function(t){return ee(t)?re(t):te(t,{})},getterFor:function(t){return function(r){var e;if(!ve(r)||(e=re(r)).type!==t)throw _e("Incompatible receiver, "+t+" required");return e}}},xe=O,Ae=o,Ee=G,Pe=zt,Te=i,Ie=Xr.CONFIGURABLE,Ce=ne,Le=we.enforce,Re=we.get,ke=String,Fe=Object.defineProperty,Me=xe("".slice),ze=xe("".replace),De=xe([].join),Ne=Te&&!Ae((function(){return 8!==Fe((function(){}),"length",{value:8}).length})),$e=String(String).split("String"),Ge=Vr.exports=function(t,r,e){"Symbol("===Me(ke(r),0,7)&&(r="["+ze(ke(r),/^Symbol\(([^)]*)\)/,"$1")+"]"),e&&e.getter&&(r="get "+r),e&&e.setter&&(r="set "+r),(!Pe(t,"name")||Ie&&t.name!==r)&&(Te?Fe(t,"name",{value:r,configurable:!0}):t.name=r),Ne&&e&&Pe(e,"arity")&&t.length!==e.arity&&Fe(t,"length",{value:e.arity});try{e&&Pe(e,"constructor")&&e.constructor?Te&&Fe(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=Le(t);return Pe(n,"source")||(n.source=De($e,"string"==typeof r?r:"")),t};Function.prototype.toString=Ge((function(){return Ee(this)&&Re(this).source||Ce(this)}),"toString");var Ue=G,Be=Sr,Ve=Br,He=Et,We=function(t,r,e,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:r;if(Ue(e)&&Ve(e,i,n),n.global)o?t[r]=e:He(r,e);else{try{n.unsafe?t[r]&&(o=!0):delete t[r]}catch(t){}o?t[r]=e:Be.f(t,r,{value:e,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t},qe={},Ye=Math.ceil,Ke=Math.floor,Xe=Math.trunc||function(t){var r=+t;return(r>0?Ke:Ye)(r)},Je=function(t){var r=+t;return r!=r||0===r?0:Xe(r)},Qe=Je,Ze=Math.max,tn=Math.min,rn=Je,en=Math.min,nn=function(t){return t>0?en(rn(t),9007199254740991):0},on=nn,an=function(t){return on(t.length)},un=z,cn=function(t,r){var e=Qe(t);return e<0?Ze(e+r,0):tn(e,r)},fn=an,sn=function(t){return function(r,e,n){var o,i=un(r),a=fn(i),u=cn(n,a);if(t&&e!=e){for(;a>u;)if((o=i[u++])!=o)return!0}else for(;a>u;u++)if((t||u in i)&&i[u]===e)return t||u||0;return!t&&-1}},ln={includes:sn(!0),indexOf:sn(!1)},pn=zt,vn=z,hn=ln.indexOf,yn=se,dn=O([].push),gn=function(t,r){var e,n=vn(t),o=0,i=[];for(e in n)!pn(yn,e)&&pn(n,e)&&dn(i,e);for(;r.length>o;)pn(n,e=r[o++])&&(~hn(i,e)||dn(i,e));return i},bn=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],mn=gn,_n=bn.concat("length","prototype");qe.f=Object.getOwnPropertyNames||function(t){return mn(t,_n)};var On={};On.f=Object.getOwnPropertySymbols;var jn=q,Sn=qe,wn=On,xn=Pr,An=O([].concat),En=jn("Reflect","ownKeys")||function(t){var r=Sn.f(xn(t)),e=wn.f;return e?An(r,e(t)):r},Pn=zt,Tn=En,In=n,Cn=Sr,Ln=o,Rn=G,kn=/#|\.prototype\./,Fn=function(t,r){var e=zn[Mn(t)];return e==Nn||e!=Dn&&(Rn(r)?Ln(r):!!r)},Mn=Fn.normalize=function(t){return String(t).replace(kn,".").toLowerCase()},zn=Fn.data={},Dn=Fn.NATIVE="N",Nn=Fn.POLYFILL="P",$n=Fn,Gn=e,Un=n.f,Bn=Ur,Vn=We,Hn=Et,Wn=function(t,r,e){for(var n=Tn(r),o=Cn.f,i=In.f,a=0;a<n.length;a++){var u=n[a];Pn(t,u)||e&&Pn(e,u)||o(t,u,i(r,u))}},qn=$n,Yn=function(t,r){var e,n,o,i,a,u=t.target,c=t.global,f=t.stat;if(e=c?Gn:f?Gn[u]||Hn(u,{}):(Gn[u]||{}).prototype)for(n in r){if(i=r[n],o=t.dontCallGetSet?(a=Un(e,n))&&a.value:e[n],!qn(c?n:u+(f?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Wn(i,o)}(t.sham||o&&o.sham)&&Bn(i,"sham",!0),Vn(e,n,i,t)}},Kn=x,Xn=O,Jn=function(t){if("Function"===Kn(t))return Xn(t)},Qn=yt,Zn=a,to=Jn(Jn.bind),ro=function(t,r){return Qn(t),void 0===r?t:Zn?to(t,r):function(){return t.apply(r,arguments)}},eo=x,no=Array.isArray||function(t){return"Array"==eo(t)},oo={};oo[Jt("toStringTag")]="z";var io="[object z]"===String(oo),ao=io,uo=G,co=x,fo=Jt("toStringTag"),so=Object,lo="Arguments"==co(function(){return arguments}()),po=ao?co:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=so(t),fo))?e:lo?co(r):"Object"==(n=co(r))&&uo(r.callee)?"Arguments":n},vo=O,ho=o,yo=G,go=po,bo=ne,mo=function(){},_o=[],Oo=q("Reflect","construct"),jo=/^\s*(?:class|function)\b/,So=vo(jo.exec),wo=!jo.exec(mo),xo=function(t){if(!yo(t))return!1;try{return Oo(mo,_o,t),!0}catch(t){return!1}},Ao=function(t){if(!yo(t))return!1;switch(go(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return wo||!!So(jo,bo(t))}catch(t){return!0}};Ao.sham=!0;var Eo=!Oo||ho((function(){var t;return xo(xo.call)||!xo(Object)||!xo((function(){t=!0}))||t}))?Ao:xo,Po=no,To=Eo,Io=V,Co=Jt("species"),Lo=Array,Ro=function(t){var r;return Po(t)&&(r=t.constructor,(To(r)&&(r===Lo||Po(r.prototype))||Io(r)&&null===(r=r[Co]))&&(r=void 0)),void 0===r?Lo:r},ko=ro,Fo=I,Mo=kt,zo=an,Do=function(t,r){return new(Ro(t))(0===r?0:r)},No=O([].push),$o=function(t){var r=1==t,e=2==t,n=3==t,o=4==t,i=6==t,a=7==t,u=5==t||i;return function(c,f,s,l){for(var p,v,h=Mo(c),y=Fo(h),d=ko(f,s),g=zo(y),b=0,m=l||Do,_=r?m(c,g):e||a?m(c,0):void 0;g>b;b++)if((u||b in y)&&(v=d(p=y[b],b,h),t))if(r)_[b]=v;else if(v)switch(t){case 3:return!0;case 5:return p;case 6:return b;case 2:No(_,p)}else switch(t){case 4:return!1;case 7:No(_,p)}return i?-1:n||o?o:_}},Go={forEach:$o(0),map:$o(1),filter:$o(2),some:$o(3),every:$o(4),find:$o(5),findIndex:$o(6),filterReject:$o(7)},Uo={},Bo=gn,Vo=bn,Ho=Object.keys||function(t){return Bo(t,Vo)},Wo=i,qo=wr,Yo=Sr,Ko=Pr,Xo=z,Jo=Ho;Uo.f=Wo&&!qo?Object.defineProperties:function(t,r){Ko(t);for(var e,n=Xo(r),o=Jo(r),i=o.length,a=0;i>a;)Yo.f(t,e=o[a++],n[e]);return t};var Qo,Zo=q("document","documentElement"),ti=Pr,ri=Uo,ei=bn,ni=se,oi=Zo,ii=lr,ai="prototype",ui="script",ci=fe("IE_PROTO"),fi=function(){},si=function(t){return"<"+ui+">"+t+"</"+ui+">"},li=function(t){t.write(si("")),t.close();var r=t.parentWindow.Object;return t=null,r},pi=function(){try{Qo=new ActiveXObject("htmlfile")}catch(t){}var t,r,e;pi="undefined"!=typeof document?document.domain&&Qo?li(Qo):(r=ii("iframe"),e="java"+ui+":",r.style.display="none",oi.appendChild(r),r.src=String(e),(t=r.contentWindow.document).open(),t.write(si("document.F=Object")),t.close(),t.F):li(Qo);for(var n=ei.length;n--;)delete pi[ai][ei[n]];return pi()};ni[ci]=!0;var vi=Object.create||function(t,r){var e;return null!==t?(fi[ai]=ti(t),e=new fi,fi[ai]=null,e[ci]=t):e=pi(),void 0===r?e:ri.f(e,r)},hi=Jt,yi=vi,di=Sr.f,gi=hi("unscopables"),bi=Array.prototype;null==bi[gi]&&di(bi,gi,{configurable:!0,value:yi(null)});var mi=Yn,_i=Go.find,Oi=function(t){bi[gi][t]=!0},ji="find",Si=!0;ji in[]&&Array(1)[ji]((function(){Si=!1})),mi({target:"Array",proto:!0,forced:Si},{find:function(t){return _i(this,t,arguments.length>1?arguments[1]:void 0)}}),Oi(ji);var wi=po,xi=io?{}.toString:function(){return"[object "+wi(this)+"]"};io||We(Object.prototype,"toString",xi,{unsafe:!0});var Ai=f,Ei=Pr,Pi=bt,Ti=Pr,Ii=function(t,r,e){var n,o;Ei(t);try{if(!(n=Pi(t,"return"))){if("throw"===r)throw e;return e}n=Ai(n,t)}catch(t){o=!0,n=t}if("throw"===r)throw e;if(o)throw n;return Ei(n),e},Ci={},Li=Ci,Ri=Jt("iterator"),ki=Array.prototype,Fi=ur,Mi=Sr,zi=d,Di=po,Ni=bt,$i=C,Gi=Ci,Ui=Jt("iterator"),Bi=function(t){if(!$i(t))return Ni(t,Ui)||Ni(t,"@@iterator")||Gi[Di(t)]},Vi=f,Hi=yt,Wi=Pr,qi=lt,Yi=Bi,Ki=TypeError,Xi=ro,Ji=f,Qi=kt,Zi=function(t,r,e,n){try{return n?r(Ti(e)[0],e[1]):r(e)}catch(r){Ii(t,"throw",r)}},ta=function(t){return void 0!==t&&(Li.Array===t||ki[Ri]===t)},ra=Eo,ea=an,na=function(t,r,e){var n=Fi(r);n in t?Mi.f(t,n,zi(0,e)):t[n]=e},oa=function(t,r){var e=arguments.length<2?Yi(t):r;if(Hi(e))return Wi(Vi(e,t));throw Ki(qi(t)+" is not iterable")},ia=Bi,aa=Array,ua=Jt("iterator"),ca=!1;try{var fa=0,sa={next:function(){return{done:!!fa++}},return:function(){ca=!0}};sa[ua]=function(){return this},Array.from(sa,(function(){throw 2}))}catch(t){}var la=function(t){var r=Qi(t),e=ra(this),n=arguments.length,o=n>1?arguments[1]:void 0,i=void 0!==o;i&&(o=Xi(o,n>2?arguments[2]:void 0));var a,u,c,f,s,l,p=ia(r),v=0;if(!p||this===aa&&ta(p))for(a=ea(r),u=e?new this(a):aa(a);a>v;v++)l=i?o(r[v],v):r[v],na(u,v,l);else for(s=(f=oa(r,p)).next,u=e?new this:[];!(c=Ji(s,f)).done;v++)l=i?Zi(f,o,[c.value,v],!0):c.value,na(u,v,l);return u.length=v,u},pa=function(t,r){if(!r&&!ca)return!1;var e=!1;try{var n={};n[ua]=function(){return{next:function(){return{done:e=!0}}}},t(n)}catch(t){}return e};Yn({target:"Array",stat:!0,forced:!pa((function(t){Array.from(t)}))},{from:la});var va,ha,ya,da=po,ga=String,ba=function(t){if("Symbol"===da(t))throw TypeError("Cannot convert a Symbol value to a string");return ga(t)},ma=O,_a=Je,Oa=ba,ja=k,Sa=ma("".charAt),wa=ma("".charCodeAt),xa=ma("".slice),Aa=function(t){return function(r,e){var n,o,i=Oa(ja(r)),a=_a(e),u=i.length;return a<0||a>=u?t?"":void 0:(n=wa(i,a))<55296||n>56319||a+1===u||(o=wa(i,a+1))<56320||o>57343?t?Sa(i,a):n:t?xa(i,a,a+2):o-56320+(n-55296<<10)+65536}},Ea={codeAt:Aa(!1),charAt:Aa(!0)},Pa=!o((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),Ta=zt,Ia=G,Ca=kt,La=Pa,Ra=fe("IE_PROTO"),ka=Object,Fa=ka.prototype,Ma=La?ka.getPrototypeOf:function(t){var r=Ca(t);if(Ta(r,Ra))return r[Ra];var e=r.constructor;return Ia(e)&&r instanceof e?e.prototype:r instanceof ka?Fa:null},za=o,Da=G,Na=V,$a=Ma,Ga=We,Ua=Jt("iterator"),Ba=!1;[].keys&&("next"in(ya=[].keys())?(ha=$a($a(ya)))!==Object.prototype&&(va=ha):Ba=!0);var Va=!Na(va)||za((function(){var t={};return va[Ua].call(t)!==t}));Va&&(va={}),Da(va[Ua])||Ga(va,Ua,(function(){return this}));var Ha={IteratorPrototype:va,BUGGY_SAFARI_ITERATORS:Ba},Wa=Sr.f,qa=zt,Ya=Jt("toStringTag"),Ka=function(t,r,e){t&&!e&&(t=t.prototype),t&&!qa(t,Ya)&&Wa(t,Ya,{configurable:!0,value:r})},Xa=Ha.IteratorPrototype,Ja=vi,Qa=d,Za=Ka,tu=Ci,ru=function(){return this},eu=O,nu=yt,ou=G,iu=String,au=TypeError,uu=function(t,r,e){try{return eu(nu(Object.getOwnPropertyDescriptor(t,r)[e]))}catch(t){}},cu=Pr,fu=function(t){if("object"==typeof t||ou(t))return t;throw au("Can't set "+iu(t)+" as a prototype")},su=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,e={};try{(t=uu(Object.prototype,"__proto__","set"))(e,[]),r=e instanceof Array}catch(t){}return function(e,n){return cu(e),fu(n),r?t(e,n):e.__proto__=n,e}}():void 0),lu=Yn,pu=f,vu=G,hu=function(t,r,e,n){var o=r+" Iterator";return t.prototype=Ja(Xa,{next:Qa(+!n,e)}),Za(t,o,!1),tu[o]=ru,t},yu=Ma,du=su,gu=Ka,bu=Ur,mu=We,_u=Ci,Ou=Xr.PROPER,ju=Xr.CONFIGURABLE,Su=Ha.IteratorPrototype,wu=Ha.BUGGY_SAFARI_ITERATORS,xu=Jt("iterator"),Au="keys",Eu="values",Pu="entries",Tu=function(){return this},Iu=Ea.charAt,Cu=ba,Lu=we,Ru=function(t,r,e,n,o,i,a){hu(e,r,n);var u,c,f,s=function(t){if(t===o&&y)return y;if(!wu&&t in v)return v[t];switch(t){case Au:case Eu:case Pu:return function(){return new e(this,t)}}return function(){return new e(this)}},l=r+" Iterator",p=!1,v=t.prototype,h=v[xu]||v["@@iterator"]||o&&v[o],y=!wu&&h||s(o),d="Array"==r&&v.entries||h;if(d&&(u=yu(d.call(new t)))!==Object.prototype&&u.next&&(yu(u)!==Su&&(du?du(u,Su):vu(u[xu])||mu(u,xu,Tu)),gu(u,l,!0)),Ou&&o==Eu&&h&&h.name!==Eu&&(ju?bu(v,"name",Eu):(p=!0,y=function(){return pu(h,this)})),o)if(c={values:s(Eu),keys:i?y:s(Au),entries:s(Pu)},a)for(f in c)(wu||p||!(f in v))&&mu(v,f,c[f]);else lu({target:r,proto:!0,forced:wu||p},c);return v[xu]!==y&&mu(v,xu,y,{name:o}),_u[r]=y,c},ku=function(t,r){return{value:t,done:r}},Fu="String Iterator",Mu=Lu.set,zu=Lu.getterFor(Fu);Ru(String,"String",(function(t){Mu(this,{type:Fu,string:Cu(t),index:0})}),(function(){var t,r=zu(this),e=r.string,n=r.index;return n>=e.length?ku(void 0,!0):(t=Iu(e,n),r.index+=t.length,ku(t,!1))}));var Du=k,Nu=ba,$u=/"/g,Gu=O("".replace),Uu=o,Bu=function(t,r,e,n){var o=Nu(Du(t)),i="<"+r;return""!==e&&(i+=" "+e+'="'+Gu(Nu(n),$u,"&quot;")+'"'),i+">"+o+"</"+r+">"},Vu=function(t){return Uu((function(){var r=""[t]('"');return r!==r.toLowerCase()||r.split('"').length>3}))};Yn({target:"String",proto:!0,forced:Vu("link")},{link:function(t){return Bu(this,"a","href",t)}});var Hu=o,Wu=Go.forEach,qu=function(t,r){var e=[][t];return!!e&&Hu((function(){e.call(null,r||function(){return 1},1)}))}("forEach")?[].forEach:function(t){return Wu(this,t,arguments.length>1?arguments[1]:void 0)};Yn({target:"Array",proto:!0,forced:[].forEach!=qu},{forEach:qu});var Yu=lr("span").classList,Ku=Yu&&Yu.constructor&&Yu.constructor.prototype,Xu=e,Ju={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Qu=Ku===Object.prototype?void 0:Ku,Zu=qu,tc=Ur,rc=function(t){if(t&&t.forEach!==Zu)try{tc(t,"forEach",Zu)}catch(r){t.forEach=Zu}};for(var ec in Ju)Ju[ec]&&rc(Xu[ec]&&Xu[ec].prototype);rc(Qu);var nc=function(){this.__data__=[],this.size=0};var oc=function(t,r){return t===r||t!=t&&r!=r},ic=oc;var ac=function(t,r){for(var e=t.length;e--;)if(ic(t[e][0],r))return e;return-1},uc=ac,cc=Array.prototype.splice;var fc=function(t){var r=this.__data__,e=uc(r,t);return!(e<0)&&(e==r.length-1?r.pop():cc.call(r,e,1),--this.size,!0)},sc=ac;var lc=function(t){var r=this.__data__,e=sc(r,t);return e<0?void 0:r[e][1]},pc=ac;var vc=ac;var hc=function(t,r){var e=this.__data__,n=vc(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this},yc=nc,dc=fc,gc=lc,bc=function(t){return pc(this.__data__,t)>-1},mc=hc;function _c(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}_c.prototype.clear=yc,_c.prototype.delete=dc,_c.prototype.get=gc,_c.prototype.has=bc,_c.prototype.set=mc;var Oc=_c,jc=Oc;var Sc=function(){this.__data__=new jc,this.size=0};var wc=function(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e};var xc=function(t){return this.__data__.get(t)};var Ac=function(t){return this.__data__.has(t)},Ec="object"==typeof t&&t&&t.Object===Object&&t,Pc=Ec,Tc="object"==typeof self&&self&&self.Object===Object&&self,Ic=Pc||Tc||Function("return this")(),Cc=Ic.Symbol,Lc=Cc,Rc=Object.prototype,kc=Rc.hasOwnProperty,Fc=Rc.toString,Mc=Lc?Lc.toStringTag:void 0;var zc=function(t){var r=kc.call(t,Mc),e=t[Mc];try{t[Mc]=void 0;var n=!0}catch(t){}var o=Fc.call(t);return n&&(r?t[Mc]=e:delete t[Mc]),o},Dc=Object.prototype.toString;var Nc=zc,$c=function(t){return Dc.call(t)},Gc=Cc?Cc.toStringTag:void 0;var Uc=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Gc&&Gc in Object(t)?Nc(t):$c(t)};var Bc=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)},Vc=Uc,Hc=Bc;var Wc=function(t){if(!Hc(t))return!1;var r=Vc(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},qc=Ic["__core-js_shared__"],Yc=function(){var t=/[^.]+$/.exec(qc&&qc.keys&&qc.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();var Kc=function(t){return!!Yc&&Yc in t},Xc=Function.prototype.toString;var Jc=Wc,Qc=Kc,Zc=Bc,tf=function(t){if(null!=t){try{return Xc.call(t)}catch(t){}try{return t+""}catch(t){}}return""},rf=/^\[object .+?Constructor\]$/,ef=Function.prototype,nf=Object.prototype,of=ef.toString,af=nf.hasOwnProperty,uf=RegExp("^"+of.call(af).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var cf=function(t){return!(!Zc(t)||Qc(t))&&(Jc(t)?uf:rf).test(tf(t))},ff=function(t,r){return null==t?void 0:t[r]};var sf=function(t,r){var e=ff(t,r);return cf(e)?e:void 0},lf=sf(Ic,"Map"),pf=sf(Object,"create"),vf=pf;var hf=function(){this.__data__=vf?vf(null):{},this.size=0};var yf=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},df=pf,gf=Object.prototype.hasOwnProperty;var bf=function(t){var r=this.__data__;if(df){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return gf.call(r,t)?r[t]:void 0},mf=pf,_f=Object.prototype.hasOwnProperty;var Of=function(t){var r=this.__data__;return mf?void 0!==r[t]:_f.call(r,t)},jf=pf;var Sf=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=jf&&void 0===r?"__lodash_hash_undefined__":r,this},wf=hf,xf=yf,Af=bf,Ef=Of,Pf=Sf;function Tf(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Tf.prototype.clear=wf,Tf.prototype.delete=xf,Tf.prototype.get=Af,Tf.prototype.has=Ef,Tf.prototype.set=Pf;var If=Tf,Cf=Oc,Lf=lf;var Rf=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t};var kf=function(t,r){var e=t.__data__;return Rf(r)?e["string"==typeof r?"string":"hash"]:e.map},Ff=kf;var Mf=kf;var zf=kf;var Df=kf;var Nf=function(t,r){var e=Df(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this},$f=function(){this.size=0,this.__data__={hash:new If,map:new(Lf||Cf),string:new If}},Gf=function(t){var r=Ff(this,t).delete(t);return this.size-=r?1:0,r},Uf=function(t){return Mf(this,t).get(t)},Bf=function(t){return zf(this,t).has(t)},Vf=Nf;function Hf(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Hf.prototype.clear=$f,Hf.prototype.delete=Gf,Hf.prototype.get=Uf,Hf.prototype.has=Bf,Hf.prototype.set=Vf;var Wf=Oc,qf=lf,Yf=Hf;var Kf=function(t,r){var e=this.__data__;if(e instanceof Wf){var n=e.__data__;if(!qf||n.length<199)return n.push([t,r]),this.size=++e.size,this;e=this.__data__=new Yf(n)}return e.set(t,r),this.size=e.size,this},Xf=Oc,Jf=Sc,Qf=wc,Zf=xc,ts=Ac,rs=Kf;function es(t){var r=this.__data__=new Xf(t);this.size=r.size}es.prototype.clear=Jf,es.prototype.delete=Qf,es.prototype.get=Zf,es.prototype.has=ts,es.prototype.set=rs;var ns=es,os=sf,is=function(){try{var t=os(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),as=is;var us=function(t,r,e){"__proto__"==r&&as?as(t,r,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[r]=e},cs=us,fs=oc;var ss=function(t,r,e){(void 0!==e&&!fs(t[r],e)||void 0===e&&!(r in t))&&cs(t,r,e)};var ls=function(t){return function(r,e,n){for(var o=-1,i=Object(r),a=n(r),u=a.length;u--;){var c=a[t?u:++o];if(!1===e(i[c],c,i))break}return r}}(),ps={};!function(t,r){var e=Ic,n=r&&!r.nodeType&&r,o=n&&t&&!t.nodeType&&t,i=o&&o.exports===n?e.Buffer:void 0,a=i?i.allocUnsafe:void 0;t.exports=function(t,r){if(r)return t.slice();var e=t.length,n=a?a(e):new t.constructor(e);return t.copy(n),n}}({get exports(){return ps},set exports(t){ps=t}},ps);var vs=Ic.Uint8Array;var hs=function(t){var r=new t.constructor(t.byteLength);return new vs(r).set(new vs(t)),r};var ys=function(t,r){var e=r?hs(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)};var ds=function(t,r){var e=-1,n=t.length;for(r||(r=Array(n));++e<n;)r[e]=t[e];return r},gs=Bc,bs=Object.create,ms=function(){function t(){}return function(r){if(!gs(r))return{};if(bs)return bs(r);t.prototype=r;var e=new t;return t.prototype=void 0,e}}();var _s=function(t,r){return function(e){return t(r(e))}}(Object.getPrototypeOf,Object),Os=Object.prototype;var js=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||Os)},Ss=ms,ws=_s,xs=js;var As=function(t){return"function"!=typeof t.constructor||xs(t)?{}:Ss(ws(t))};var Es=function(t){return null!=t&&"object"==typeof t},Ps=Uc,Ts=Es;var Is=function(t){return Ts(t)&&"[object Arguments]"==Ps(t)},Cs=Es,Ls=Object.prototype,Rs=Ls.hasOwnProperty,ks=Ls.propertyIsEnumerable,Fs=Is(function(){return arguments}())?Is:function(t){return Cs(t)&&Rs.call(t,"callee")&&!ks.call(t,"callee")},Ms=Array.isArray;var zs=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},Ds=Wc,Ns=zs;var $s=function(t){return null!=t&&Ns(t.length)&&!Ds(t)},Gs=$s,Us=Es;var Bs=function(t){return Us(t)&&Gs(t)},Vs={};var Hs=function(){return!1};!function(t,r){var e=Ic,n=Hs,o=r&&!r.nodeType&&r,i=o&&t&&!t.nodeType&&t,a=i&&i.exports===o?e.Buffer:void 0,u=(a?a.isBuffer:void 0)||n;t.exports=u}({get exports(){return Vs},set exports(t){Vs=t}},Vs);var Ws=Uc,qs=_s,Ys=Es,Ks=Function.prototype,Xs=Object.prototype,Js=Ks.toString,Qs=Xs.hasOwnProperty,Zs=Js.call(Object);var tl=function(t){if(!Ys(t)||"[object Object]"!=Ws(t))return!1;var r=qs(t);if(null===r)return!0;var e=Qs.call(r,"constructor")&&r.constructor;return"function"==typeof e&&e instanceof e&&Js.call(e)==Zs},rl=Uc,el=zs,nl=Es,ol={};ol["[object Float32Array]"]=ol["[object Float64Array]"]=ol["[object Int8Array]"]=ol["[object Int16Array]"]=ol["[object Int32Array]"]=ol["[object Uint8Array]"]=ol["[object Uint8ClampedArray]"]=ol["[object Uint16Array]"]=ol["[object Uint32Array]"]=!0,ol["[object Arguments]"]=ol["[object Array]"]=ol["[object ArrayBuffer]"]=ol["[object Boolean]"]=ol["[object DataView]"]=ol["[object Date]"]=ol["[object Error]"]=ol["[object Function]"]=ol["[object Map]"]=ol["[object Number]"]=ol["[object Object]"]=ol["[object RegExp]"]=ol["[object Set]"]=ol["[object String]"]=ol["[object WeakMap]"]=!1;var il=function(t){return nl(t)&&el(t.length)&&!!ol[rl(t)]};var al=function(t){return function(r){return t(r)}},ul={};!function(t,r){var e=Ec,n=r&&!r.nodeType&&r,o=n&&t&&!t.nodeType&&t,i=o&&o.exports===n&&e.process,a=function(){try{var t=o&&o.require&&o.require("util").types;return t||i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=a}({get exports(){return ul},set exports(t){ul=t}},ul);var cl=il,fl=al,sl=ul&&ul.isTypedArray,ll=sl?fl(sl):cl;var pl=function(t,r){if(("constructor"!==r||"function"!=typeof t[r])&&"__proto__"!=r)return t[r]},vl=us,hl=oc,yl=Object.prototype.hasOwnProperty;var dl=function(t,r,e){var n=t[r];yl.call(t,r)&&hl(n,e)&&(void 0!==e||r in t)||vl(t,r,e)},gl=us;var bl=function(t,r,e,n){var o=!e;e||(e={});for(var i=-1,a=r.length;++i<a;){var u=r[i],c=n?n(e[u],t[u],u,e,t):void 0;void 0===c&&(c=t[u]),o?gl(e,u,c):dl(e,u,c)}return e};var ml=/^(?:0|[1-9]\d*)$/;var _l=function(t,r){var e=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==e||"symbol"!=e&&ml.test(t))&&t>-1&&t%1==0&&t<r},Ol=function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n},jl=Fs,Sl=Ms,wl=Vs,xl=_l,Al=ll,El=Object.prototype.hasOwnProperty;var Pl=function(t,r){var e=Sl(t),n=!e&&jl(t),o=!e&&!n&&wl(t),i=!e&&!n&&!o&&Al(t),a=e||n||o||i,u=a?Ol(t.length,String):[],c=u.length;for(var f in t)!r&&!El.call(t,f)||a&&("length"==f||o&&("offset"==f||"parent"==f)||i&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||xl(f,c))||u.push(f);return u};var Tl=Bc,Il=js,Cl=function(t){var r=[];if(null!=t)for(var e in Object(t))r.push(e);return r},Ll=Object.prototype.hasOwnProperty;var Rl=Pl,kl=function(t){if(!Tl(t))return Cl(t);var r=Il(t),e=[];for(var n in t)("constructor"!=n||!r&&Ll.call(t,n))&&e.push(n);return e},Fl=$s;var Ml=function(t){return Fl(t)?Rl(t,!0):kl(t)},zl=bl,Dl=Ml;var Nl=ss,$l=ps,Gl=ys,Ul=ds,Bl=As,Vl=Fs,Hl=Ms,Wl=Bs,ql=Vs,Yl=Wc,Kl=Bc,Xl=tl,Jl=ll,Ql=pl,Zl=function(t){return zl(t,Dl(t))};var tp=ns,rp=ss,ep=ls,np=function(t,r,e,n,o,i,a){var u=Ql(t,e),c=Ql(r,e),f=a.get(c);if(f)Nl(t,e,f);else{var s=i?i(u,c,e+"",t,r,a):void 0,l=void 0===s;if(l){var p=Hl(c),v=!p&&ql(c),h=!p&&!v&&Jl(c);s=c,p||v||h?Hl(u)?s=u:Wl(u)?s=Ul(u):v?(l=!1,s=$l(c,!0)):h?(l=!1,s=Gl(c,!0)):s=[]:Xl(c)||Vl(c)?(s=u,Vl(u)?s=Zl(u):Kl(u)&&!Yl(u)||(s=Bl(c))):l=!1}l&&(a.set(c,s),o(s,c,n,i,a),a.delete(c)),Nl(t,e,s)}},op=Bc,ip=Ml,ap=pl;var up=function t(r,e,n,o,i){r!==e&&ep(e,(function(a,u){if(i||(i=new tp),op(a))np(r,e,u,n,t,o,i);else{var c=o?o(ap(r,u),a,u+"",r,e,i):void 0;void 0===c&&(c=a),rp(r,u,c)}}),ip)};var cp=function(t){return t};var fp=function(t,r,e){switch(e.length){case 0:return t.call(r);case 1:return t.call(r,e[0]);case 2:return t.call(r,e[0],e[1]);case 3:return t.call(r,e[0],e[1],e[2])}return t.apply(r,e)},sp=Math.max;var lp=function(t,r,e){return r=sp(void 0===r?t.length-1:r,0),function(){for(var n=arguments,o=-1,i=sp(n.length-r,0),a=Array(i);++o<i;)a[o]=n[r+o];o=-1;for(var u=Array(r+1);++o<r;)u[o]=n[o];return u[r]=e(a),fp(t,this,u)}};var pp=function(t){return function(){return t}},vp=is,hp=vp?function(t,r){return vp(t,"toString",{configurable:!0,enumerable:!1,value:pp(r),writable:!0})}:cp,yp=Date.now;var dp=function(t){var r=0,e=0;return function(){var n=yp(),o=16-(n-e);if(e=n,o>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(void 0,arguments)}}(hp),gp=cp,bp=lp,mp=dp;var _p=oc,Op=$s,jp=_l,Sp=Bc;var wp=function(t,r){return mp(bp(t,r,gp),t+"")},xp=function(t,r,e){if(!Sp(e))return!1;var n=typeof r;return!!("number"==n?Op(e)&&jp(r,e.length):"string"==n&&r in e)&&_p(e[r],t)};var Ap,Ep,Pp=up,Tp=function(t){return wp((function(r,e){var n=-1,o=e.length,i=o>1?e[o-1]:void 0,a=o>2?e[2]:void 0;for(i=t.length>3&&"function"==typeof i?(o--,i):void 0,a&&xp(e[0],e[1],a)&&(i=o<3?void 0:i,o=1),r=Object(r);++n<o;){var u=e[n];u&&t(r,u,n,i)}return r}))}((function(t,r,e){Pp(t,r,e)})),Ip=Pr,Cp=o,Lp=e.RegExp,Rp=Cp((function(){var t=Lp("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),kp=Rp||Cp((function(){return!Lp("a","y").sticky})),Fp={BROKEN_CARET:Rp||Cp((function(){var t=Lp("^r","gy");return t.lastIndex=2,null!=t.exec("str")})),MISSED_STICKY:kp,UNSUPPORTED_Y:Rp},Mp=o,zp=e.RegExp,Dp=Mp((function(){var t=zp(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)})),Np=o,$p=e.RegExp,Gp=Np((function(){var t=$p("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")})),Up=f,Bp=O,Vp=ba,Hp=function(){var t=Ip(this),r="";return t.hasIndices&&(r+="d"),t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.unicodeSets&&(r+="v"),t.sticky&&(r+="y"),r},Wp=Fp,qp=vi,Yp=we.get,Kp=Dp,Xp=Gp,Jp=St("native-string-replace",String.prototype.replace),Qp=RegExp.prototype.exec,Zp=Qp,tv=Bp("".charAt),rv=Bp("".indexOf),ev=Bp("".replace),nv=Bp("".slice),ov=(Ep=/b*/g,Up(Qp,Ap=/a/,"a"),Up(Qp,Ep,"a"),0!==Ap.lastIndex||0!==Ep.lastIndex),iv=Wp.BROKEN_CARET,av=void 0!==/()??/.exec("")[1];(ov||av||iv||Kp||Xp)&&(Zp=function(t){var r,e,n,o,i,a,u,c=this,f=Yp(c),s=Vp(t),l=f.raw;if(l)return l.lastIndex=c.lastIndex,r=Up(Zp,l,s),c.lastIndex=l.lastIndex,r;var p=f.groups,v=iv&&c.sticky,h=Up(Hp,c),y=c.source,d=0,g=s;if(v&&(h=ev(h,"y",""),-1===rv(h,"g")&&(h+="g"),g=nv(s,c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==tv(s,c.lastIndex-1))&&(y="(?: "+y+")",g=" "+g,d++),e=new RegExp("^(?:"+y+")",h)),av&&(e=new RegExp("^"+y+"$(?!\\s)",h)),ov&&(n=c.lastIndex),o=Up(Qp,v?e:c,g),v?o?(o.input=nv(o.input,d),o[0]=nv(o[0],d),o.index=c.lastIndex,c.lastIndex+=o[0].length):c.lastIndex=0:ov&&o&&(c.lastIndex=c.global?o.index+o[0].length:n),av&&o&&o.length>1&&Up(Jp,o[0],e,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&p)for(o.groups=a=qp(null),i=0;i<p.length;i++)a[(u=p[i])[0]]=o[u[1]];return o});var uv=Zp;Yn({target:"RegExp",proto:!0,forced:/./.exec!==uv},{exec:uv});var cv=a,fv=Function.prototype,sv=fv.apply,lv=fv.call,pv="object"==typeof Reflect&&Reflect.apply||(cv?lv.bind(sv):function(){return lv.apply(sv,arguments)}),vv=Jn,hv=We,yv=uv,dv=o,gv=Jt,bv=Ur,mv=gv("species"),_v=RegExp.prototype,Ov=Ea.charAt,jv=O,Sv=kt,wv=Math.floor,xv=jv("".charAt),Av=jv("".replace),Ev=jv("".slice),Pv=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,Tv=/\$([$&'`]|\d{1,2})/g,Iv=f,Cv=Pr,Lv=G,Rv=x,kv=uv,Fv=TypeError,Mv=pv,zv=f,Dv=O,Nv=function(t,r,e,n){var o=gv(t),i=!dv((function(){var r={};return r[o]=function(){return 7},7!=""[t](r)})),a=i&&!dv((function(){var r=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[mv]=function(){return e},e.flags="",e[o]=/./[o]),e.exec=function(){return r=!0,null},e[o](""),!r}));if(!i||!a||e){var u=vv(/./[o]),c=r(o,""[t],(function(t,r,e,n,o){var a=vv(t),c=r.exec;return c===yv||c===_v.exec?i&&!o?{done:!0,value:u(r,e,n)}:{done:!0,value:a(e,r,n)}:{done:!1}}));hv(String.prototype,t,c[0]),hv(_v,o,c[1])}n&&bv(_v[o],"sham",!0)},$v=o,Gv=Pr,Uv=G,Bv=C,Vv=Je,Hv=nn,Wv=ba,qv=k,Yv=function(t,r,e){return r+(e?Ov(t,r).length:1)},Kv=bt,Xv=function(t,r,e,n,o,i){var a=e+t.length,u=n.length,c=Tv;return void 0!==o&&(o=Sv(o),c=Pv),Av(i,c,(function(i,c){var f;switch(xv(c,0)){case"$":return"$";case"&":return t;case"`":return Ev(r,0,e);case"'":return Ev(r,a);case"<":f=o[Ev(c,1,-1)];break;default:var s=+c;if(0===s)return i;if(s>u){var l=wv(s/10);return 0===l?i:l<=u?void 0===n[l-1]?xv(c,1):n[l-1]+xv(c,1):i}f=n[s-1]}return void 0===f?"":f}))},Jv=function(t,r){var e=t.exec;if(Lv(e)){var n=Iv(e,t,r);return null!==n&&Cv(n),n}if("RegExp"===Rv(t))return Iv(kv,t,r);throw Fv("RegExp#exec called on incompatible receiver")},Qv=Jt("replace"),Zv=Math.max,th=Math.min,rh=Dv([].concat),eh=Dv([].push),nh=Dv("".indexOf),oh=Dv("".slice),ih="$0"==="a".replace(/./,"$0"),ah=!!/./[Qv]&&""===/./[Qv]("a","$0");Nv("replace",(function(t,r,e){var n=ah?"$":"$0";return[function(t,e){var n=qv(this),o=Bv(t)?void 0:Kv(t,Qv);return o?zv(o,t,n,e):zv(r,Wv(n),t,e)},function(t,o){var i=Gv(this),a=Wv(t);if("string"==typeof o&&-1===nh(o,n)&&-1===nh(o,"$<")){var u=e(r,i,a,o);if(u.done)return u.value}var c=Uv(o);c||(o=Wv(o));var f=i.global;if(f){var s=i.unicode;i.lastIndex=0}for(var l=[];;){var p=Jv(i,a);if(null===p)break;if(eh(l,p),!f)break;""===Wv(p[0])&&(i.lastIndex=Yv(a,Hv(i.lastIndex),s))}for(var v,h="",y=0,d=0;d<l.length;d++){for(var g=Wv((p=l[d])[0]),b=Zv(th(Vv(p.index),a.length),0),m=[],_=1;_<p.length;_++)eh(m,void 0===(v=p[_])?v:String(v));var O=p.groups;if(c){var j=rh([g],m,b,a);void 0!==O&&eh(j,O);var S=Wv(Mv(o,void 0,j))}else S=Xv(g,a,b,m,O,o);b>=y&&(h+=oh(a,y,b)+S,y=b+g.length)}return h+oh(a,y)}]}),!!$v((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}))||!ih||ah);var uh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function ch(t){var r,e,n,o,i,a,u,c="",f=0;for(t=function(t){t=t.replace(/\r\n/g,"\n");for(var r="",e=0;e<t.length;e++){var n=t.charCodeAt(e);n<128?r+=String.fromCharCode(n):n>127&&n<2048?(r+=String.fromCharCode(n>>6|192),r+=String.fromCharCode(63&n|128)):(r+=String.fromCharCode(n>>12|224),r+=String.fromCharCode(n>>6&63|128),r+=String.fromCharCode(63&n|128))}return r}(t);f<t.length;)o=(r=t.charCodeAt(f++))>>2,i=(3&r)<<4|(e=t.charCodeAt(f++))>>4,a=(15&e)<<2|(n=t.charCodeAt(f++))>>6,u=63&n,isNaN(e)?a=u=64:isNaN(n)&&(u=64),c=c+uh.charAt(o)+uh.charAt(i)+uh.charAt(a)+uh.charAt(u);return c}var fh={languages:{cpp:{disassemble:!1,compiler:"clang_trunk",options:"",execute:!0,libs:[],compilers:function(t){return[{id:this.compiler,libs:this.libs,options:this.options,filters:{execute:this.execute}}]},executors:function(t){return[{compiler:{id:this.compiler,libs:this.libs,options:this.options,filters:{execute:this.execute}}}]},state:function(t,r){return{sessions:[{id:1,language:"c++",source:r,compilers:this.disassemble?this.compilers():[],executors:this.disassemble?[]:this.executors()}]}},link:function(t,r){var e=encodeURIComponent(ch(JSON.stringify(this.state(t,r))));return"https://godbolt.org/clientstate/".concat(e)}}},text:"Run Online!",class:"linkify-link"},sh=function(){return{id:"linkify",init:function(t){var r=Tp({},fh,t.getConfig().linkify||{});Array.from(t.getRevealElement().getElementsByTagName("code")).forEach((function(t){return function(t,r){var e=Array.from(r.classList).find((function(r){return t.languages.hasOwnProperty(r)}));if(void 0!==e){var n=r.textContent,o=t.languages[e].link(t,n),i=document.createElement("a");i.href=o,i.target="_blank",i.textContent=t.text,i.classList.add(t.class),r.after(i)}}(r,t)}))}}};export{sh as default};
