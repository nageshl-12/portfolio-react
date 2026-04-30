(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function dy(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var g_={exports:{}},Yu={},__={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ja=Symbol.for("react.element"),hy=Symbol.for("react.portal"),py=Symbol.for("react.fragment"),my=Symbol.for("react.strict_mode"),gy=Symbol.for("react.profiler"),_y=Symbol.for("react.provider"),vy=Symbol.for("react.context"),xy=Symbol.for("react.forward_ref"),yy=Symbol.for("react.suspense"),Sy=Symbol.for("react.memo"),My=Symbol.for("react.lazy"),yp=Symbol.iterator;function Ey(n){return n===null||typeof n!="object"?null:(n=yp&&n[yp]||n["@@iterator"],typeof n=="function"?n:null)}var v_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x_=Object.assign,y_={};function Io(n,e,t){this.props=n,this.context=e,this.refs=y_,this.updater=t||v_}Io.prototype.isReactComponent={};Io.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Io.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function S_(){}S_.prototype=Io.prototype;function Zd(n,e,t){this.props=n,this.context=e,this.refs=y_,this.updater=t||v_}var Qd=Zd.prototype=new S_;Qd.constructor=Zd;x_(Qd,Io.prototype);Qd.isPureReactComponent=!0;var Sp=Array.isArray,M_=Object.prototype.hasOwnProperty,Jd={current:null},E_={key:!0,ref:!0,__self:!0,__source:!0};function T_(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)M_.call(e,i)&&!E_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ja,type:n,key:s,ref:o,props:r,_owner:Jd.current}}function Ty(n,e){return{$$typeof:ja,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function eh(n){return typeof n=="object"&&n!==null&&n.$$typeof===ja}function wy(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Mp=/\/+/g;function Sc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?wy(""+n.key):e.toString(36)}function ql(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case ja:case hy:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Sc(o,0):i,Sp(r)?(t="",n!=null&&(t=n.replace(Mp,"$&/")+"/"),ql(r,e,t,"",function(u){return u})):r!=null&&(eh(r)&&(r=Ty(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Mp,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Sp(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Sc(s,a);o+=ql(s,e,t,l,r)}else if(l=Ey(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Sc(s,a++),o+=ql(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function sl(n,e,t){if(n==null)return n;var i=[],r=0;return ql(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Ay(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var un={current:null},$l={transition:null},Cy={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:$l,ReactCurrentOwner:Jd};function w_(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:sl,forEach:function(n,e,t){sl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return sl(n,function(){e++}),e},toArray:function(n){return sl(n,function(e){return e})||[]},only:function(n){if(!eh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ge.Component=Io;Ge.Fragment=py;Ge.Profiler=gy;Ge.PureComponent=Zd;Ge.StrictMode=my;Ge.Suspense=yy;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cy;Ge.act=w_;Ge.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=x_({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jd.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)M_.call(e,l)&&!E_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ja,type:n.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(n){return n={$$typeof:vy,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:_y,_context:n},n.Consumer=n};Ge.createElement=T_;Ge.createFactory=function(n){var e=T_.bind(null,n);return e.type=n,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(n){return{$$typeof:xy,render:n}};Ge.isValidElement=eh;Ge.lazy=function(n){return{$$typeof:My,_payload:{_status:-1,_result:n},_init:Ay}};Ge.memo=function(n,e){return{$$typeof:Sy,type:n,compare:e===void 0?null:e}};Ge.startTransition=function(n){var e=$l.transition;$l.transition={};try{n()}finally{$l.transition=e}};Ge.unstable_act=w_;Ge.useCallback=function(n,e){return un.current.useCallback(n,e)};Ge.useContext=function(n){return un.current.useContext(n)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(n){return un.current.useDeferredValue(n)};Ge.useEffect=function(n,e){return un.current.useEffect(n,e)};Ge.useId=function(){return un.current.useId()};Ge.useImperativeHandle=function(n,e,t){return un.current.useImperativeHandle(n,e,t)};Ge.useInsertionEffect=function(n,e){return un.current.useInsertionEffect(n,e)};Ge.useLayoutEffect=function(n,e){return un.current.useLayoutEffect(n,e)};Ge.useMemo=function(n,e){return un.current.useMemo(n,e)};Ge.useReducer=function(n,e,t){return un.current.useReducer(n,e,t)};Ge.useRef=function(n){return un.current.useRef(n)};Ge.useState=function(n){return un.current.useState(n)};Ge.useSyncExternalStore=function(n,e,t){return un.current.useSyncExternalStore(n,e,t)};Ge.useTransition=function(){return un.current.useTransition()};Ge.version="18.3.1";__.exports=Ge;var at=__.exports;const Ry=dy(at);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Py=at,by=Symbol.for("react.element"),Ly=Symbol.for("react.fragment"),Dy=Object.prototype.hasOwnProperty,Ny=Py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uy={key:!0,ref:!0,__self:!0,__source:!0};function A_(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Dy.call(e,i)&&!Uy.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:by,type:n,key:s,ref:o,props:r,_owner:Ny.current}}Yu.Fragment=Ly;Yu.jsx=A_;Yu.jsxs=A_;g_.exports=Yu;var P=g_.exports,Nf={},C_={exports:{}},Bn={},R_={exports:{}},P_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,z){var k=N.length;N.push(z);e:for(;0<k;){var Z=k-1>>>1,Q=N[Z];if(0<r(Q,z))N[Z]=z,N[k]=Q,k=Z;else break e}}function t(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var z=N[0],k=N.pop();if(k!==z){N[0]=k;e:for(var Z=0,Q=N.length,q=Q>>>1;Z<q;){var K=2*(Z+1)-1,re=N[K],de=K+1,he=N[de];if(0>r(re,k))de<Q&&0>r(he,re)?(N[Z]=he,N[de]=k,Z=de):(N[Z]=re,N[K]=k,Z=K);else if(de<Q&&0>r(he,k))N[Z]=he,N[de]=k,Z=de;else break e}}return z}function r(N,z){var k=N.sortIndex-z.sortIndex;return k!==0?k:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,p=!1,x=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var z=t(u);z!==null;){if(z.callback===null)i(u);else if(z.startTime<=N)i(u),z.sortIndex=z.expirationTime,e(l,z);else break;z=t(u)}}function y(N){if(g=!1,v(N),!x)if(t(l)!==null)x=!0,O(E);else{var z=t(u);z!==null&&Y(y,z.startTime-N)}}function E(N,z){x=!1,g&&(g=!1,f(L),L=-1),p=!0;var k=h;try{for(v(z),d=t(l);d!==null&&(!(d.expirationTime>z)||N&&!B());){var Z=d.callback;if(typeof Z=="function"){d.callback=null,h=d.priorityLevel;var Q=Z(d.expirationTime<=z);z=n.unstable_now(),typeof Q=="function"?d.callback=Q:d===t(l)&&i(l),v(z)}else i(l);d=t(l)}if(d!==null)var q=!0;else{var K=t(u);K!==null&&Y(y,K.startTime-z),q=!1}return q}finally{d=null,h=k,p=!1}}var w=!1,M=null,L=-1,S=5,A=-1;function B(){return!(n.unstable_now()-A<S)}function U(){if(M!==null){var N=n.unstable_now();A=N;var z=!0;try{z=M(!0,N)}finally{z?V():(w=!1,M=null)}}else w=!1}var V;if(typeof _=="function")V=function(){_(U)};else if(typeof MessageChannel<"u"){var b=new MessageChannel,I=b.port2;b.port1.onmessage=U,V=function(){I.postMessage(null)}}else V=function(){m(U,0)};function O(N){M=N,w||(w=!0,V())}function Y(N,z){L=m(function(){N(n.unstable_now())},z)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){x||p||(x=!0,O(E))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(N){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var k=h;h=z;try{return N()}finally{h=k}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var k=h;h=N;try{return z()}finally{h=k}},n.unstable_scheduleCallback=function(N,z,k){var Z=n.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?Z+k:Z):k=Z,N){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=k+Q,N={id:c++,callback:z,priorityLevel:N,startTime:k,expirationTime:Q,sortIndex:-1},k>Z?(N.sortIndex=k,e(u,N),t(l)===null&&N===t(u)&&(g?(f(L),L=-1):g=!0,Y(y,k-Z))):(N.sortIndex=Q,e(l,N),x||p||(x=!0,O(E))),N},n.unstable_shouldYield=B,n.unstable_wrapCallback=function(N){var z=h;return function(){var k=h;h=z;try{return N.apply(this,arguments)}finally{h=k}}}})(P_);R_.exports=P_;var Iy=R_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oy=at,Fn=Iy;function te(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b_=new Set,ya={};function Es(n,e){vo(n,e),vo(n+"Capture",e)}function vo(n,e){for(ya[n]=e,n=0;n<e.length;n++)b_.add(e[n])}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uf=Object.prototype.hasOwnProperty,Fy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ep={},Tp={};function ky(n){return Uf.call(Tp,n)?!0:Uf.call(Ep,n)?!1:Fy.test(n)?Tp[n]=!0:(Ep[n]=!0,!1)}function zy(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function By(n,e,t,i){if(e===null||typeof e>"u"||zy(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function cn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Wt[n]=new cn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Wt[e]=new cn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Wt[n]=new cn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Wt[n]=new cn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Wt[n]=new cn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Wt[n]=new cn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Wt[n]=new cn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Wt[n]=new cn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Wt[n]=new cn(n,5,!1,n.toLowerCase(),null,!1,!1)});var th=/[\-:]([a-z])/g;function nh(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(th,nh);Wt[e]=new cn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(th,nh);Wt[e]=new cn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(th,nh);Wt[e]=new cn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Wt[n]=new cn(n,1,!1,n.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Wt[n]=new cn(n,1,!1,n.toLowerCase(),null,!0,!0)});function ih(n,e,t,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(By(e,t,r,i)&&(t=null),i||r===null?ky(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Qi=Oy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ol=Symbol.for("react.element"),Ws=Symbol.for("react.portal"),Xs=Symbol.for("react.fragment"),rh=Symbol.for("react.strict_mode"),If=Symbol.for("react.profiler"),L_=Symbol.for("react.provider"),D_=Symbol.for("react.context"),sh=Symbol.for("react.forward_ref"),Of=Symbol.for("react.suspense"),Ff=Symbol.for("react.suspense_list"),oh=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),N_=Symbol.for("react.offscreen"),wp=Symbol.iterator;function Ho(n){return n===null||typeof n!="object"?null:(n=wp&&n[wp]||n["@@iterator"],typeof n=="function"?n:null)}var _t=Object.assign,Mc;function ta(n){if(Mc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Mc=e&&e[1]||""}return`
`+Mc+n}var Ec=!1;function Tc(n,e){if(!n||Ec)return"";Ec=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ec=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?ta(n):""}function Hy(n){switch(n.tag){case 5:return ta(n.type);case 16:return ta("Lazy");case 13:return ta("Suspense");case 19:return ta("SuspenseList");case 0:case 2:case 15:return n=Tc(n.type,!1),n;case 11:return n=Tc(n.type.render,!1),n;case 1:return n=Tc(n.type,!0),n;default:return""}}function kf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Xs:return"Fragment";case Ws:return"Portal";case If:return"Profiler";case rh:return"StrictMode";case Of:return"Suspense";case Ff:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D_:return(n.displayName||"Context")+".Consumer";case L_:return(n._context.displayName||"Context")+".Provider";case sh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case oh:return e=n.displayName||null,e!==null?e:kf(n.type)||"Memo";case or:e=n._payload,n=n._init;try{return kf(n(e))}catch{}}return null}function Gy(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kf(e);case 8:return e===rh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Lr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function U_(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Vy(n){var e=U_(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function al(n){n._valueTracker||(n._valueTracker=Vy(n))}function I_(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=U_(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function cu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function zf(n,e){var t=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Ap(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Lr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function O_(n,e){e=e.checked,e!=null&&ih(n,"checked",e,!1)}function Bf(n,e){O_(n,e);var t=Lr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Hf(n,e.type,t):e.hasOwnProperty("defaultValue")&&Hf(n,e.type,Lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Cp(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Hf(n,e,t){(e!=="number"||cu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var na=Array.isArray;function oo(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Lr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Gf(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Rp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(te(92));if(na(t)){if(1<t.length)throw Error(te(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Lr(t)}}function F_(n,e){var t=Lr(e.value),i=Lr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Pp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function k_(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?k_(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ll,z_=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ll=ll||document.createElement("div"),ll.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ll.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Sa(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var aa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wy=["Webkit","ms","Moz","O"];Object.keys(aa).forEach(function(n){Wy.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),aa[e]=aa[n]})});function B_(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||aa.hasOwnProperty(n)&&aa[n]?(""+e).trim():e+"px"}function H_(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=B_(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Xy=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wf(n,e){if(e){if(Xy[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Xf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jf=null;function ah(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Yf=null,ao=null,lo=null;function bp(n){if(n=$a(n)){if(typeof Yf!="function")throw Error(te(280));var e=n.stateNode;e&&(e=Qu(e),Yf(n.stateNode,n.type,e))}}function G_(n){ao?lo?lo.push(n):lo=[n]:ao=n}function V_(){if(ao){var n=ao,e=lo;if(lo=ao=null,bp(n),e)for(n=0;n<e.length;n++)bp(e[n])}}function W_(n,e){return n(e)}function X_(){}var wc=!1;function j_(n,e,t){if(wc)return n(e,t);wc=!0;try{return W_(n,e,t)}finally{wc=!1,(ao!==null||lo!==null)&&(X_(),V_())}}function Ma(n,e){var t=n.stateNode;if(t===null)return null;var i=Qu(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(te(231,e,typeof t));return t}var qf=!1;if(Xi)try{var Go={};Object.defineProperty(Go,"passive",{get:function(){qf=!0}}),window.addEventListener("test",Go,Go),window.removeEventListener("test",Go,Go)}catch{qf=!1}function jy(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var la=!1,fu=null,du=!1,$f=null,Yy={onError:function(n){la=!0,fu=n}};function qy(n,e,t,i,r,s,o,a,l){la=!1,fu=null,jy.apply(Yy,arguments)}function $y(n,e,t,i,r,s,o,a,l){if(qy.apply(this,arguments),la){if(la){var u=fu;la=!1,fu=null}else throw Error(te(198));du||(du=!0,$f=u)}}function Ts(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Y_(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Lp(n){if(Ts(n)!==n)throw Error(te(188))}function Ky(n){var e=n.alternate;if(!e){if(e=Ts(n),e===null)throw Error(te(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Lp(r),n;if(s===i)return Lp(r),e;s=s.sibling}throw Error(te(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(t.alternate!==i)throw Error(te(190))}if(t.tag!==3)throw Error(te(188));return t.stateNode.current===t?n:e}function q_(n){return n=Ky(n),n!==null?$_(n):null}function $_(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=$_(n);if(e!==null)return e;n=n.sibling}return null}var K_=Fn.unstable_scheduleCallback,Dp=Fn.unstable_cancelCallback,Zy=Fn.unstable_shouldYield,Qy=Fn.unstable_requestPaint,Tt=Fn.unstable_now,Jy=Fn.unstable_getCurrentPriorityLevel,lh=Fn.unstable_ImmediatePriority,Z_=Fn.unstable_UserBlockingPriority,hu=Fn.unstable_NormalPriority,eS=Fn.unstable_LowPriority,Q_=Fn.unstable_IdlePriority,qu=null,Ai=null;function tS(n){if(Ai&&typeof Ai.onCommitFiberRoot=="function")try{Ai.onCommitFiberRoot(qu,n,void 0,(n.current.flags&128)===128)}catch{}}var pi=Math.clz32?Math.clz32:rS,nS=Math.log,iS=Math.LN2;function rS(n){return n>>>=0,n===0?32:31-(nS(n)/iS|0)|0}var ul=64,cl=4194304;function ia(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function pu(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=ia(a):(s&=o,s!==0&&(i=ia(s)))}else o=t&~r,o!==0?i=ia(o):s!==0&&(i=ia(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-pi(e),r=1<<t,i|=n[t],e&=~r;return i}function sS(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oS(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-pi(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=sS(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Kf(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function J_(){var n=ul;return ul<<=1,!(ul&4194240)&&(ul=64),n}function Ac(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Ya(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-pi(e),n[e]=t}function aS(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-pi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function uh(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-pi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var qe=0;function ev(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var tv,ch,nv,iv,rv,Zf=!1,fl=[],vr=null,xr=null,yr=null,Ea=new Map,Ta=new Map,lr=[],lS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Np(n,e){switch(n){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":Ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ta.delete(e.pointerId)}}function Vo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=$a(e),e!==null&&ch(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function uS(n,e,t,i,r){switch(e){case"focusin":return vr=Vo(vr,n,e,t,i,r),!0;case"dragenter":return xr=Vo(xr,n,e,t,i,r),!0;case"mouseover":return yr=Vo(yr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Ea.set(s,Vo(Ea.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ta.set(s,Vo(Ta.get(s)||null,n,e,t,i,r)),!0}return!1}function sv(n){var e=ns(n.target);if(e!==null){var t=Ts(e);if(t!==null){if(e=t.tag,e===13){if(e=Y_(t),e!==null){n.blockedOn=e,rv(n.priority,function(){nv(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Kl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Qf(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);jf=i,t.target.dispatchEvent(i),jf=null}else return e=$a(t),e!==null&&ch(e),n.blockedOn=t,!1;e.shift()}return!0}function Up(n,e,t){Kl(n)&&t.delete(e)}function cS(){Zf=!1,vr!==null&&Kl(vr)&&(vr=null),xr!==null&&Kl(xr)&&(xr=null),yr!==null&&Kl(yr)&&(yr=null),Ea.forEach(Up),Ta.forEach(Up)}function Wo(n,e){n.blockedOn===e&&(n.blockedOn=null,Zf||(Zf=!0,Fn.unstable_scheduleCallback(Fn.unstable_NormalPriority,cS)))}function wa(n){function e(r){return Wo(r,n)}if(0<fl.length){Wo(fl[0],n);for(var t=1;t<fl.length;t++){var i=fl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(vr!==null&&Wo(vr,n),xr!==null&&Wo(xr,n),yr!==null&&Wo(yr,n),Ea.forEach(e),Ta.forEach(e),t=0;t<lr.length;t++)i=lr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<lr.length&&(t=lr[0],t.blockedOn===null);)sv(t),t.blockedOn===null&&lr.shift()}var uo=Qi.ReactCurrentBatchConfig,mu=!0;function fS(n,e,t,i){var r=qe,s=uo.transition;uo.transition=null;try{qe=1,fh(n,e,t,i)}finally{qe=r,uo.transition=s}}function dS(n,e,t,i){var r=qe,s=uo.transition;uo.transition=null;try{qe=4,fh(n,e,t,i)}finally{qe=r,uo.transition=s}}function fh(n,e,t,i){if(mu){var r=Qf(n,e,t,i);if(r===null)Oc(n,e,i,gu,t),Np(n,i);else if(uS(r,n,e,t,i))i.stopPropagation();else if(Np(n,i),e&4&&-1<lS.indexOf(n)){for(;r!==null;){var s=$a(r);if(s!==null&&tv(s),s=Qf(n,e,t,i),s===null&&Oc(n,e,i,gu,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Oc(n,e,i,null,t)}}var gu=null;function Qf(n,e,t,i){if(gu=null,n=ah(i),n=ns(n),n!==null)if(e=Ts(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Y_(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return gu=n,null}function ov(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jy()){case lh:return 1;case Z_:return 4;case hu:case eS:return 16;case Q_:return 536870912;default:return 16}default:return 16}}var cr=null,dh=null,Zl=null;function av(){if(Zl)return Zl;var n,e=dh,t=e.length,i,r="value"in cr?cr.value:cr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Zl=r.slice(n,1<i?1-i:void 0)}function Ql(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function dl(){return!0}function Ip(){return!1}function Hn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?dl:Ip,this.isPropagationStopped=Ip,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),e}var Oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hh=Hn(Oo),qa=_t({},Oo,{view:0,detail:0}),hS=Hn(qa),Cc,Rc,Xo,$u=_t({},qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ph,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Xo&&(Xo&&n.type==="mousemove"?(Cc=n.screenX-Xo.screenX,Rc=n.screenY-Xo.screenY):Rc=Cc=0,Xo=n),Cc)},movementY:function(n){return"movementY"in n?n.movementY:Rc}}),Op=Hn($u),pS=_t({},$u,{dataTransfer:0}),mS=Hn(pS),gS=_t({},qa,{relatedTarget:0}),Pc=Hn(gS),_S=_t({},Oo,{animationName:0,elapsedTime:0,pseudoElement:0}),vS=Hn(_S),xS=_t({},Oo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),yS=Hn(xS),SS=_t({},Oo,{data:0}),Fp=Hn(SS),MS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ES={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wS(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=TS[n])?!!e[n]:!1}function ph(){return wS}var AS=_t({},qa,{key:function(n){if(n.key){var e=MS[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Ql(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ES[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ph,charCode:function(n){return n.type==="keypress"?Ql(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ql(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),CS=Hn(AS),RS=_t({},$u,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kp=Hn(RS),PS=_t({},qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ph}),bS=Hn(PS),LS=_t({},Oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),DS=Hn(LS),NS=_t({},$u,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),US=Hn(NS),IS=[9,13,27,32],mh=Xi&&"CompositionEvent"in window,ua=null;Xi&&"documentMode"in document&&(ua=document.documentMode);var OS=Xi&&"TextEvent"in window&&!ua,lv=Xi&&(!mh||ua&&8<ua&&11>=ua),zp=" ",Bp=!1;function uv(n,e){switch(n){case"keyup":return IS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cv(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var js=!1;function FS(n,e){switch(n){case"compositionend":return cv(e);case"keypress":return e.which!==32?null:(Bp=!0,zp);case"textInput":return n=e.data,n===zp&&Bp?null:n;default:return null}}function kS(n,e){if(js)return n==="compositionend"||!mh&&uv(n,e)?(n=av(),Zl=dh=cr=null,js=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return lv&&e.locale!=="ko"?null:e.data;default:return null}}var zS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!zS[n.type]:e==="textarea"}function fv(n,e,t,i){G_(i),e=_u(e,"onChange"),0<e.length&&(t=new hh("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var ca=null,Aa=null;function BS(n){Mv(n,0)}function Ku(n){var e=$s(n);if(I_(e))return n}function HS(n,e){if(n==="change")return e}var dv=!1;if(Xi){var bc;if(Xi){var Lc="oninput"in document;if(!Lc){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),Lc=typeof Gp.oninput=="function"}bc=Lc}else bc=!1;dv=bc&&(!document.documentMode||9<document.documentMode)}function Vp(){ca&&(ca.detachEvent("onpropertychange",hv),Aa=ca=null)}function hv(n){if(n.propertyName==="value"&&Ku(Aa)){var e=[];fv(e,Aa,n,ah(n)),j_(BS,e)}}function GS(n,e,t){n==="focusin"?(Vp(),ca=e,Aa=t,ca.attachEvent("onpropertychange",hv)):n==="focusout"&&Vp()}function VS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ku(Aa)}function WS(n,e){if(n==="click")return Ku(e)}function XS(n,e){if(n==="input"||n==="change")return Ku(e)}function jS(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var _i=typeof Object.is=="function"?Object.is:jS;function Ca(n,e){if(_i(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Uf.call(e,r)||!_i(n[r],e[r]))return!1}return!0}function Wp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Xp(n,e){var t=Wp(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Wp(t)}}function pv(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?pv(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function mv(){for(var n=window,e=cu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=cu(n.document)}return e}function gh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function YS(n){var e=mv(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&pv(t.ownerDocument.documentElement,t)){if(i!==null&&gh(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Xp(t,s);var o=Xp(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var qS=Xi&&"documentMode"in document&&11>=document.documentMode,Ys=null,Jf=null,fa=null,ed=!1;function jp(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ed||Ys==null||Ys!==cu(i)||(i=Ys,"selectionStart"in i&&gh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),fa&&Ca(fa,i)||(fa=i,i=_u(Jf,"onSelect"),0<i.length&&(e=new hh("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Ys)))}function hl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var qs={animationend:hl("Animation","AnimationEnd"),animationiteration:hl("Animation","AnimationIteration"),animationstart:hl("Animation","AnimationStart"),transitionend:hl("Transition","TransitionEnd")},Dc={},gv={};Xi&&(gv=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function Zu(n){if(Dc[n])return Dc[n];if(!qs[n])return n;var e=qs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in gv)return Dc[n]=e[t];return n}var _v=Zu("animationend"),vv=Zu("animationiteration"),xv=Zu("animationstart"),yv=Zu("transitionend"),Sv=new Map,Yp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(n,e){Sv.set(n,e),Es(e,[n])}for(var Nc=0;Nc<Yp.length;Nc++){var Uc=Yp[Nc],$S=Uc.toLowerCase(),KS=Uc[0].toUpperCase()+Uc.slice(1);Fr($S,"on"+KS)}Fr(_v,"onAnimationEnd");Fr(vv,"onAnimationIteration");Fr(xv,"onAnimationStart");Fr("dblclick","onDoubleClick");Fr("focusin","onFocus");Fr("focusout","onBlur");Fr(yv,"onTransitionEnd");vo("onMouseEnter",["mouseout","mouseover"]);vo("onMouseLeave",["mouseout","mouseover"]);vo("onPointerEnter",["pointerout","pointerover"]);vo("onPointerLeave",["pointerout","pointerover"]);Es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Es("onBeforeInput",["compositionend","keypress","textInput","paste"]);Es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function qp(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,$y(i,e,void 0,n),n.currentTarget=null}function Mv(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;qp(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;qp(r,a,u),s=l}}}if(du)throw n=$f,du=!1,$f=null,n}function rt(n,e){var t=e[sd];t===void 0&&(t=e[sd]=new Set);var i=n+"__bubble";t.has(i)||(Ev(e,n,2,!1),t.add(i))}function Ic(n,e,t){var i=0;e&&(i|=4),Ev(t,n,i,e)}var pl="_reactListening"+Math.random().toString(36).slice(2);function Ra(n){if(!n[pl]){n[pl]=!0,b_.forEach(function(t){t!=="selectionchange"&&(ZS.has(t)||Ic(t,!1,n),Ic(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[pl]||(e[pl]=!0,Ic("selectionchange",!1,e))}}function Ev(n,e,t,i){switch(ov(e)){case 1:var r=fS;break;case 4:r=dS;break;default:r=fh}t=r.bind(null,e,t,n),r=void 0,!qf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Oc(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ns(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}j_(function(){var u=s,c=ah(t),d=[];e:{var h=Sv.get(n);if(h!==void 0){var p=hh,x=n;switch(n){case"keypress":if(Ql(t)===0)break e;case"keydown":case"keyup":p=CS;break;case"focusin":x="focus",p=Pc;break;case"focusout":x="blur",p=Pc;break;case"beforeblur":case"afterblur":p=Pc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=mS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=bS;break;case _v:case vv:case xv:p=vS;break;case yv:p=DS;break;case"scroll":p=hS;break;case"wheel":p=US;break;case"copy":case"cut":case"paste":p=yS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=kp}var g=(e&4)!==0,m=!g&&n==="scroll",f=g?h!==null?h+"Capture":null:h;g=[];for(var _=u,v;_!==null;){v=_;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,f!==null&&(y=Ma(_,f),y!=null&&g.push(Pa(_,y,v)))),m)break;_=_.return}0<g.length&&(h=new p(h,x,null,t,c),d.push({event:h,listeners:g}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==jf&&(x=t.relatedTarget||t.fromElement)&&(ns(x)||x[ji]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=t.relatedTarget||t.toElement,p=u,x=x?ns(x):null,x!==null&&(m=Ts(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=u),p!==x)){if(g=Op,y="onMouseLeave",f="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(g=kp,y="onPointerLeave",f="onPointerEnter",_="pointer"),m=p==null?h:$s(p),v=x==null?h:$s(x),h=new g(y,_+"leave",p,t,c),h.target=m,h.relatedTarget=v,y=null,ns(c)===u&&(g=new g(f,_+"enter",x,t,c),g.target=v,g.relatedTarget=m,y=g),m=y,p&&x)t:{for(g=p,f=x,_=0,v=g;v;v=As(v))_++;for(v=0,y=f;y;y=As(y))v++;for(;0<_-v;)g=As(g),_--;for(;0<v-_;)f=As(f),v--;for(;_--;){if(g===f||f!==null&&g===f.alternate)break t;g=As(g),f=As(f)}g=null}else g=null;p!==null&&$p(d,h,p,g,!1),x!==null&&m!==null&&$p(d,m,x,g,!0)}}e:{if(h=u?$s(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var E=HS;else if(Hp(h))if(dv)E=XS;else{E=VS;var w=GS}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=WS);if(E&&(E=E(n,u))){fv(d,E,t,c);break e}w&&w(n,h,u),n==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&Hf(h,"number",h.value)}switch(w=u?$s(u):window,n){case"focusin":(Hp(w)||w.contentEditable==="true")&&(Ys=w,Jf=u,fa=null);break;case"focusout":fa=Jf=Ys=null;break;case"mousedown":ed=!0;break;case"contextmenu":case"mouseup":case"dragend":ed=!1,jp(d,t,c);break;case"selectionchange":if(qS)break;case"keydown":case"keyup":jp(d,t,c)}var M;if(mh)e:{switch(n){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else js?uv(n,t)&&(L="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(L="onCompositionStart");L&&(lv&&t.locale!=="ko"&&(js||L!=="onCompositionStart"?L==="onCompositionEnd"&&js&&(M=av()):(cr=c,dh="value"in cr?cr.value:cr.textContent,js=!0)),w=_u(u,L),0<w.length&&(L=new Fp(L,n,null,t,c),d.push({event:L,listeners:w}),M?L.data=M:(M=cv(t),M!==null&&(L.data=M)))),(M=OS?FS(n,t):kS(n,t))&&(u=_u(u,"onBeforeInput"),0<u.length&&(c=new Fp("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=M))}Mv(d,e)})}function Pa(n,e,t){return{instance:n,listener:e,currentTarget:t}}function _u(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ma(n,t),s!=null&&i.unshift(Pa(n,s,r)),s=Ma(n,e),s!=null&&i.push(Pa(n,s,r))),n=n.return}return i}function As(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function $p(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ma(t,s),l!=null&&o.unshift(Pa(t,l,a))):r||(l=Ma(t,s),l!=null&&o.push(Pa(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var QS=/\r\n?/g,JS=/\u0000|\uFFFD/g;function Kp(n){return(typeof n=="string"?n:""+n).replace(QS,`
`).replace(JS,"")}function ml(n,e,t){if(e=Kp(e),Kp(n)!==e&&t)throw Error(te(425))}function vu(){}var td=null,nd=null;function id(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rd=typeof setTimeout=="function"?setTimeout:void 0,eM=typeof clearTimeout=="function"?clearTimeout:void 0,Zp=typeof Promise=="function"?Promise:void 0,tM=typeof queueMicrotask=="function"?queueMicrotask:typeof Zp<"u"?function(n){return Zp.resolve(null).then(n).catch(nM)}:rd;function nM(n){setTimeout(function(){throw n})}function Fc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),wa(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);wa(e)}function Sr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Qp(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Fo=Math.random().toString(36).slice(2),Ei="__reactFiber$"+Fo,ba="__reactProps$"+Fo,ji="__reactContainer$"+Fo,sd="__reactEvents$"+Fo,iM="__reactListeners$"+Fo,rM="__reactHandles$"+Fo;function ns(n){var e=n[Ei];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ji]||t[Ei]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Qp(n);n!==null;){if(t=n[Ei])return t;n=Qp(n)}return e}n=t,t=n.parentNode}return null}function $a(n){return n=n[Ei]||n[ji],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function $s(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(te(33))}function Qu(n){return n[ba]||null}var od=[],Ks=-1;function kr(n){return{current:n}}function ot(n){0>Ks||(n.current=od[Ks],od[Ks]=null,Ks--)}function it(n,e){Ks++,od[Ks]=n.current,n.current=e}var Dr={},Jt=kr(Dr),mn=kr(!1),gs=Dr;function xo(n,e){var t=n.type.contextTypes;if(!t)return Dr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function gn(n){return n=n.childContextTypes,n!=null}function xu(){ot(mn),ot(Jt)}function Jp(n,e,t){if(Jt.current!==Dr)throw Error(te(168));it(Jt,e),it(mn,t)}function Tv(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,Gy(n)||"Unknown",r));return _t({},t,i)}function yu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Dr,gs=Jt.current,it(Jt,n),it(mn,mn.current),!0}function em(n,e,t){var i=n.stateNode;if(!i)throw Error(te(169));t?(n=Tv(n,e,gs),i.__reactInternalMemoizedMergedChildContext=n,ot(mn),ot(Jt),it(Jt,n)):ot(mn),it(mn,t)}var ki=null,Ju=!1,kc=!1;function wv(n){ki===null?ki=[n]:ki.push(n)}function sM(n){Ju=!0,wv(n)}function zr(){if(!kc&&ki!==null){kc=!0;var n=0,e=qe;try{var t=ki;for(qe=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}ki=null,Ju=!1}catch(r){throw ki!==null&&(ki=ki.slice(n+1)),K_(lh,zr),r}finally{qe=e,kc=!1}}return null}var Zs=[],Qs=0,Su=null,Mu=0,Xn=[],jn=0,_s=null,Hi=1,Gi="";function $r(n,e){Zs[Qs++]=Mu,Zs[Qs++]=Su,Su=n,Mu=e}function Av(n,e,t){Xn[jn++]=Hi,Xn[jn++]=Gi,Xn[jn++]=_s,_s=n;var i=Hi;n=Gi;var r=32-pi(i)-1;i&=~(1<<r),t+=1;var s=32-pi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Hi=1<<32-pi(e)+r|t<<r|i,Gi=s+n}else Hi=1<<s|t<<r|i,Gi=n}function _h(n){n.return!==null&&($r(n,1),Av(n,1,0))}function vh(n){for(;n===Su;)Su=Zs[--Qs],Zs[Qs]=null,Mu=Zs[--Qs],Zs[Qs]=null;for(;n===_s;)_s=Xn[--jn],Xn[jn]=null,Gi=Xn[--jn],Xn[jn]=null,Hi=Xn[--jn],Xn[jn]=null}var Un=null,Ln=null,lt=!1,ci=null;function Cv(n,e){var t=Zn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function tm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Un=n,Ln=Sr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Un=n,Ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=_s!==null?{id:Hi,overflow:Gi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Zn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Un=n,Ln=null,!0):!1;default:return!1}}function ad(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ld(n){if(lt){var e=Ln;if(e){var t=e;if(!tm(n,e)){if(ad(n))throw Error(te(418));e=Sr(t.nextSibling);var i=Un;e&&tm(n,e)?Cv(i,t):(n.flags=n.flags&-4097|2,lt=!1,Un=n)}}else{if(ad(n))throw Error(te(418));n.flags=n.flags&-4097|2,lt=!1,Un=n}}}function nm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Un=n}function gl(n){if(n!==Un)return!1;if(!lt)return nm(n),lt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!id(n.type,n.memoizedProps)),e&&(e=Ln)){if(ad(n))throw Rv(),Error(te(418));for(;e;)Cv(n,e),e=Sr(e.nextSibling)}if(nm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(te(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Ln=Sr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Ln=null}}else Ln=Un?Sr(n.stateNode.nextSibling):null;return!0}function Rv(){for(var n=Ln;n;)n=Sr(n.nextSibling)}function yo(){Ln=Un=null,lt=!1}function xh(n){ci===null?ci=[n]:ci.push(n)}var oM=Qi.ReactCurrentBatchConfig;function jo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(te(309));var i=t.stateNode}if(!i)throw Error(te(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(te(284));if(!t._owner)throw Error(te(290,n))}return n}function _l(n,e){throw n=Object.prototype.toString.call(e),Error(te(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function im(n){var e=n._init;return e(n._payload)}function Pv(n){function e(f,_){if(n){var v=f.deletions;v===null?(f.deletions=[_],f.flags|=16):v.push(_)}}function t(f,_){if(!n)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=wr(f,_),f.index=0,f.sibling=null,f}function s(f,_,v){return f.index=v,n?(v=f.alternate,v!==null?(v=v.index,v<_?(f.flags|=2,_):v):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,_,v,y){return _===null||_.tag!==6?(_=Xc(v,f.mode,y),_.return=f,_):(_=r(_,v),_.return=f,_)}function l(f,_,v,y){var E=v.type;return E===Xs?c(f,_,v.props.children,y,v.key):_!==null&&(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===or&&im(E)===_.type)?(y=r(_,v.props),y.ref=jo(f,_,v),y.return=f,y):(y=su(v.type,v.key,v.props,null,f.mode,y),y.ref=jo(f,_,v),y.return=f,y)}function u(f,_,v,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=jc(v,f.mode,y),_.return=f,_):(_=r(_,v.children||[]),_.return=f,_)}function c(f,_,v,y,E){return _===null||_.tag!==7?(_=as(v,f.mode,y,E),_.return=f,_):(_=r(_,v),_.return=f,_)}function d(f,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Xc(""+_,f.mode,v),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ol:return v=su(_.type,_.key,_.props,null,f.mode,v),v.ref=jo(f,null,_),v.return=f,v;case Ws:return _=jc(_,f.mode,v),_.return=f,_;case or:var y=_._init;return d(f,y(_._payload),v)}if(na(_)||Ho(_))return _=as(_,f.mode,v,null),_.return=f,_;_l(f,_)}return null}function h(f,_,v,y){var E=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return E!==null?null:a(f,_,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ol:return v.key===E?l(f,_,v,y):null;case Ws:return v.key===E?u(f,_,v,y):null;case or:return E=v._init,h(f,_,E(v._payload),y)}if(na(v)||Ho(v))return E!==null?null:c(f,_,v,y,null);_l(f,v)}return null}function p(f,_,v,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(v)||null,a(_,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ol:return f=f.get(y.key===null?v:y.key)||null,l(_,f,y,E);case Ws:return f=f.get(y.key===null?v:y.key)||null,u(_,f,y,E);case or:var w=y._init;return p(f,_,v,w(y._payload),E)}if(na(y)||Ho(y))return f=f.get(v)||null,c(_,f,y,E,null);_l(_,y)}return null}function x(f,_,v,y){for(var E=null,w=null,M=_,L=_=0,S=null;M!==null&&L<v.length;L++){M.index>L?(S=M,M=null):S=M.sibling;var A=h(f,M,v[L],y);if(A===null){M===null&&(M=S);break}n&&M&&A.alternate===null&&e(f,M),_=s(A,_,L),w===null?E=A:w.sibling=A,w=A,M=S}if(L===v.length)return t(f,M),lt&&$r(f,L),E;if(M===null){for(;L<v.length;L++)M=d(f,v[L],y),M!==null&&(_=s(M,_,L),w===null?E=M:w.sibling=M,w=M);return lt&&$r(f,L),E}for(M=i(f,M);L<v.length;L++)S=p(M,f,L,v[L],y),S!==null&&(n&&S.alternate!==null&&M.delete(S.key===null?L:S.key),_=s(S,_,L),w===null?E=S:w.sibling=S,w=S);return n&&M.forEach(function(B){return e(f,B)}),lt&&$r(f,L),E}function g(f,_,v,y){var E=Ho(v);if(typeof E!="function")throw Error(te(150));if(v=E.call(v),v==null)throw Error(te(151));for(var w=E=null,M=_,L=_=0,S=null,A=v.next();M!==null&&!A.done;L++,A=v.next()){M.index>L?(S=M,M=null):S=M.sibling;var B=h(f,M,A.value,y);if(B===null){M===null&&(M=S);break}n&&M&&B.alternate===null&&e(f,M),_=s(B,_,L),w===null?E=B:w.sibling=B,w=B,M=S}if(A.done)return t(f,M),lt&&$r(f,L),E;if(M===null){for(;!A.done;L++,A=v.next())A=d(f,A.value,y),A!==null&&(_=s(A,_,L),w===null?E=A:w.sibling=A,w=A);return lt&&$r(f,L),E}for(M=i(f,M);!A.done;L++,A=v.next())A=p(M,f,L,A.value,y),A!==null&&(n&&A.alternate!==null&&M.delete(A.key===null?L:A.key),_=s(A,_,L),w===null?E=A:w.sibling=A,w=A);return n&&M.forEach(function(U){return e(f,U)}),lt&&$r(f,L),E}function m(f,_,v,y){if(typeof v=="object"&&v!==null&&v.type===Xs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ol:e:{for(var E=v.key,w=_;w!==null;){if(w.key===E){if(E=v.type,E===Xs){if(w.tag===7){t(f,w.sibling),_=r(w,v.props.children),_.return=f,f=_;break e}}else if(w.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===or&&im(E)===w.type){t(f,w.sibling),_=r(w,v.props),_.ref=jo(f,w,v),_.return=f,f=_;break e}t(f,w);break}else e(f,w);w=w.sibling}v.type===Xs?(_=as(v.props.children,f.mode,y,v.key),_.return=f,f=_):(y=su(v.type,v.key,v.props,null,f.mode,y),y.ref=jo(f,_,v),y.return=f,f=y)}return o(f);case Ws:e:{for(w=v.key;_!==null;){if(_.key===w)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){t(f,_.sibling),_=r(_,v.children||[]),_.return=f,f=_;break e}else{t(f,_);break}else e(f,_);_=_.sibling}_=jc(v,f.mode,y),_.return=f,f=_}return o(f);case or:return w=v._init,m(f,_,w(v._payload),y)}if(na(v))return x(f,_,v,y);if(Ho(v))return g(f,_,v,y);_l(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(t(f,_.sibling),_=r(_,v),_.return=f,f=_):(t(f,_),_=Xc(v,f.mode,y),_.return=f,f=_),o(f)):t(f,_)}return m}var So=Pv(!0),bv=Pv(!1),Eu=kr(null),Tu=null,Js=null,yh=null;function Sh(){yh=Js=Tu=null}function Mh(n){var e=Eu.current;ot(Eu),n._currentValue=e}function ud(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function co(n,e){Tu=n,yh=Js=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(pn=!0),n.firstContext=null)}function ti(n){var e=n._currentValue;if(yh!==n)if(n={context:n,memoizedValue:e,next:null},Js===null){if(Tu===null)throw Error(te(308));Js=n,Tu.dependencies={lanes:0,firstContext:n}}else Js=Js.next=n;return e}var is=null;function Eh(n){is===null?is=[n]:is.push(n)}function Lv(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Eh(e)):(t.next=r.next,r.next=t),e.interleaved=t,Yi(n,i)}function Yi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ar=!1;function Th(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dv(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Wi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Mr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Yi(n,t)}return r=i.interleaved,r===null?(e.next=e,Eh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Yi(n,t)}function Jl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,uh(n,t)}}function rm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function wu(n,e,t,i){var r=n.updateQueue;ar=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,g=a;switch(h=e,p=t,g.tag){case 1:if(x=g.payload,typeof x=="function"){d=x.call(p,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=g.payload,h=typeof x=="function"?x.call(p,d,h):x,h==null)break e;d=_t({},d,h);break e;case 2:ar=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);xs|=o,n.lanes=o,n.memoizedState=d}}function sm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Ka={},Ci=kr(Ka),La=kr(Ka),Da=kr(Ka);function rs(n){if(n===Ka)throw Error(te(174));return n}function wh(n,e){switch(it(Da,e),it(La,n),it(Ci,Ka),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Vf(e,n)}ot(Ci),it(Ci,e)}function Mo(){ot(Ci),ot(La),ot(Da)}function Nv(n){rs(Da.current);var e=rs(Ci.current),t=Vf(e,n.type);e!==t&&(it(La,n),it(Ci,t))}function Ah(n){La.current===n&&(ot(Ci),ot(La))}var ht=kr(0);function Au(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zc=[];function Ch(){for(var n=0;n<zc.length;n++)zc[n]._workInProgressVersionPrimary=null;zc.length=0}var eu=Qi.ReactCurrentDispatcher,Bc=Qi.ReactCurrentBatchConfig,vs=0,gt=null,Rt=null,It=null,Cu=!1,da=!1,Na=0,aM=0;function jt(){throw Error(te(321))}function Rh(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!_i(n[t],e[t]))return!1;return!0}function Ph(n,e,t,i,r,s){if(vs=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,eu.current=n===null||n.memoizedState===null?fM:dM,n=t(i,r),da){s=0;do{if(da=!1,Na=0,25<=s)throw Error(te(301));s+=1,It=Rt=null,e.updateQueue=null,eu.current=hM,n=t(i,r)}while(da)}if(eu.current=Ru,e=Rt!==null&&Rt.next!==null,vs=0,It=Rt=gt=null,Cu=!1,e)throw Error(te(300));return n}function bh(){var n=Na!==0;return Na=0,n}function yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?gt.memoizedState=It=n:It=It.next=n,It}function ni(){if(Rt===null){var n=gt.alternate;n=n!==null?n.memoizedState:null}else n=Rt.next;var e=It===null?gt.memoizedState:It.next;if(e!==null)It=e,Rt=n;else{if(n===null)throw Error(te(310));Rt=n,n={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},It===null?gt.memoizedState=It=n:It=It.next=n}return It}function Ua(n,e){return typeof e=="function"?e(n):e}function Hc(n){var e=ni(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=Rt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((vs&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,gt.lanes|=c,xs|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,_i(i,e.memoizedState)||(pn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,gt.lanes|=s,xs|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Gc(n){var e=ni(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);_i(s,e.memoizedState)||(pn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Uv(){}function Iv(n,e){var t=gt,i=ni(),r=e(),s=!_i(i.memoizedState,r);if(s&&(i.memoizedState=r,pn=!0),i=i.queue,Lh(kv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||It!==null&&It.memoizedState.tag&1){if(t.flags|=2048,Ia(9,Fv.bind(null,t,i,r,e),void 0,null),Ot===null)throw Error(te(349));vs&30||Ov(t,e,r)}return r}function Ov(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Fv(n,e,t,i){e.value=t,e.getSnapshot=i,zv(e)&&Bv(n)}function kv(n,e,t){return t(function(){zv(e)&&Bv(n)})}function zv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!_i(n,t)}catch{return!0}}function Bv(n){var e=Yi(n,1);e!==null&&mi(e,n,1,-1)}function om(n){var e=yi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:n},e.queue=n,n=n.dispatch=cM.bind(null,gt,n),[e.memoizedState,n]}function Ia(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Hv(){return ni().memoizedState}function tu(n,e,t,i){var r=yi();gt.flags|=n,r.memoizedState=Ia(1|e,t,void 0,i===void 0?null:i)}function ec(n,e,t,i){var r=ni();i=i===void 0?null:i;var s=void 0;if(Rt!==null){var o=Rt.memoizedState;if(s=o.destroy,i!==null&&Rh(i,o.deps)){r.memoizedState=Ia(e,t,s,i);return}}gt.flags|=n,r.memoizedState=Ia(1|e,t,s,i)}function am(n,e){return tu(8390656,8,n,e)}function Lh(n,e){return ec(2048,8,n,e)}function Gv(n,e){return ec(4,2,n,e)}function Vv(n,e){return ec(4,4,n,e)}function Wv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Xv(n,e,t){return t=t!=null?t.concat([n]):null,ec(4,4,Wv.bind(null,e,n),t)}function Dh(){}function jv(n,e){var t=ni();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Rh(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Yv(n,e){var t=ni();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Rh(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function qv(n,e,t){return vs&21?(_i(t,e)||(t=J_(),gt.lanes|=t,xs|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,pn=!0),n.memoizedState=t)}function lM(n,e){var t=qe;qe=t!==0&&4>t?t:4,n(!0);var i=Bc.transition;Bc.transition={};try{n(!1),e()}finally{qe=t,Bc.transition=i}}function $v(){return ni().memoizedState}function uM(n,e,t){var i=Tr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Kv(n))Zv(e,t);else if(t=Lv(n,e,t,i),t!==null){var r=ln();mi(t,n,i,r),Qv(t,e,i)}}function cM(n,e,t){var i=Tr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Kv(n))Zv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,_i(a,o)){var l=e.interleaved;l===null?(r.next=r,Eh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Lv(n,e,r,i),t!==null&&(r=ln(),mi(t,n,i,r),Qv(t,e,i))}}function Kv(n){var e=n.alternate;return n===gt||e!==null&&e===gt}function Zv(n,e){da=Cu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Qv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,uh(n,t)}}var Ru={readContext:ti,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},fM={readContext:ti,useCallback:function(n,e){return yi().memoizedState=[n,e===void 0?null:e],n},useContext:ti,useEffect:am,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,tu(4194308,4,Wv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return tu(4194308,4,n,e)},useInsertionEffect:function(n,e){return tu(4,2,n,e)},useMemo:function(n,e){var t=yi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=yi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=uM.bind(null,gt,n),[i.memoizedState,n]},useRef:function(n){var e=yi();return n={current:n},e.memoizedState=n},useState:om,useDebugValue:Dh,useDeferredValue:function(n){return yi().memoizedState=n},useTransition:function(){var n=om(!1),e=n[0];return n=lM.bind(null,n[1]),yi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=gt,r=yi();if(lt){if(t===void 0)throw Error(te(407));t=t()}else{if(t=e(),Ot===null)throw Error(te(349));vs&30||Ov(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,am(kv.bind(null,i,s,n),[n]),i.flags|=2048,Ia(9,Fv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=yi(),e=Ot.identifierPrefix;if(lt){var t=Gi,i=Hi;t=(i&~(1<<32-pi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Na++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=aM++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},dM={readContext:ti,useCallback:jv,useContext:ti,useEffect:Lh,useImperativeHandle:Xv,useInsertionEffect:Gv,useLayoutEffect:Vv,useMemo:Yv,useReducer:Hc,useRef:Hv,useState:function(){return Hc(Ua)},useDebugValue:Dh,useDeferredValue:function(n){var e=ni();return qv(e,Rt.memoizedState,n)},useTransition:function(){var n=Hc(Ua)[0],e=ni().memoizedState;return[n,e]},useMutableSource:Uv,useSyncExternalStore:Iv,useId:$v,unstable_isNewReconciler:!1},hM={readContext:ti,useCallback:jv,useContext:ti,useEffect:Lh,useImperativeHandle:Xv,useInsertionEffect:Gv,useLayoutEffect:Vv,useMemo:Yv,useReducer:Gc,useRef:Hv,useState:function(){return Gc(Ua)},useDebugValue:Dh,useDeferredValue:function(n){var e=ni();return Rt===null?e.memoizedState=n:qv(e,Rt.memoizedState,n)},useTransition:function(){var n=Gc(Ua)[0],e=ni().memoizedState;return[n,e]},useMutableSource:Uv,useSyncExternalStore:Iv,useId:$v,unstable_isNewReconciler:!1};function li(n,e){if(n&&n.defaultProps){e=_t({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function cd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:_t({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var tc={isMounted:function(n){return(n=n._reactInternals)?Ts(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=ln(),r=Tr(n),s=Wi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Mr(n,s,r),e!==null&&(mi(e,n,r,i),Jl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=ln(),r=Tr(n),s=Wi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Mr(n,s,r),e!==null&&(mi(e,n,r,i),Jl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=ln(),i=Tr(n),r=Wi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Mr(n,r,i),e!==null&&(mi(e,n,i,t),Jl(e,n,i))}};function lm(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ca(t,i)||!Ca(r,s):!0}function Jv(n,e,t){var i=!1,r=Dr,s=e.contextType;return typeof s=="object"&&s!==null?s=ti(s):(r=gn(e)?gs:Jt.current,i=e.contextTypes,s=(i=i!=null)?xo(n,r):Dr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function um(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&tc.enqueueReplaceState(e,e.state,null)}function fd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Th(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ti(s):(s=gn(e)?gs:Jt.current,r.context=xo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&tc.enqueueReplaceState(r,r.state,null),wu(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Eo(n,e){try{var t="",i=e;do t+=Hy(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Vc(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function dd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var pM=typeof WeakMap=="function"?WeakMap:Map;function e0(n,e,t){t=Wi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){bu||(bu=!0,Md=i),dd(n,e)},t}function t0(n,e,t){t=Wi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){dd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){dd(n,e),typeof i!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function cm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new pM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=RM.bind(null,n,e,t),e.then(n,n))}function fm(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function dm(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Wi(-1,1),e.tag=2,Mr(t,e,1))),t.lanes|=1),n)}var mM=Qi.ReactCurrentOwner,pn=!1;function sn(n,e,t,i){e.child=n===null?bv(e,null,t,i):So(e,n.child,t,i)}function hm(n,e,t,i,r){t=t.render;var s=e.ref;return co(e,r),i=Ph(n,e,t,i,s,r),t=bh(),n!==null&&!pn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,qi(n,e,r)):(lt&&t&&_h(e),e.flags|=1,sn(n,e,i,r),e.child)}function pm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Bh(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,n0(n,e,s,i,r)):(n=su(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Ca,t(o,i)&&n.ref===e.ref)return qi(n,e,r)}return e.flags|=1,n=wr(s,i),n.ref=e.ref,n.return=e,e.child=n}function n0(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Ca(s,i)&&n.ref===e.ref)if(pn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(pn=!0);else return e.lanes=n.lanes,qi(n,e,r)}return hd(n,e,t,i,r)}function i0(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(to,Rn),Rn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,it(to,Rn),Rn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,it(to,Rn),Rn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,it(to,Rn),Rn|=i;return sn(n,e,r,t),e.child}function r0(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function hd(n,e,t,i,r){var s=gn(t)?gs:Jt.current;return s=xo(e,s),co(e,r),t=Ph(n,e,t,i,s,r),i=bh(),n!==null&&!pn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,qi(n,e,r)):(lt&&i&&_h(e),e.flags|=1,sn(n,e,t,r),e.child)}function mm(n,e,t,i,r){if(gn(t)){var s=!0;yu(e)}else s=!1;if(co(e,r),e.stateNode===null)nu(n,e),Jv(e,t,i),fd(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=ti(u):(u=gn(t)?gs:Jt.current,u=xo(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&um(e,o,i,u),ar=!1;var h=e.memoizedState;o.state=h,wu(e,i,o,r),l=e.memoizedState,a!==i||h!==l||mn.current||ar?(typeof c=="function"&&(cd(e,t,c,i),l=e.memoizedState),(a=ar||lm(e,t,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Dv(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:li(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=ti(l):(l=gn(t)?gs:Jt.current,l=xo(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&um(e,o,i,l),ar=!1,h=e.memoizedState,o.state=h,wu(e,i,o,r);var x=e.memoizedState;a!==d||h!==x||mn.current||ar?(typeof p=="function"&&(cd(e,t,p,i),x=e.memoizedState),(u=ar||lm(e,t,u,i,h,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return pd(n,e,t,i,s,r)}function pd(n,e,t,i,r,s){r0(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&em(e,t,!1),qi(n,e,s);i=e.stateNode,mM.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=So(e,n.child,null,s),e.child=So(e,null,a,s)):sn(n,e,a,s),e.memoizedState=i.state,r&&em(e,t,!0),e.child}function s0(n){var e=n.stateNode;e.pendingContext?Jp(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Jp(n,e.context,!1),wh(n,e.containerInfo)}function gm(n,e,t,i,r){return yo(),xh(r),e.flags|=256,sn(n,e,t,i),e.child}var md={dehydrated:null,treeContext:null,retryLane:0};function gd(n){return{baseLanes:n,cachePool:null,transitions:null}}function o0(n,e,t){var i=e.pendingProps,r=ht.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),it(ht,r&1),n===null)return ld(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=rc(o,i,0,null),n=as(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=gd(t),e.memoizedState=md,n):Nh(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return gM(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=wr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=wr(a,s):(s=as(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?gd(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=md,i}return s=n.child,n=s.sibling,i=wr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Nh(n,e){return e=rc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function vl(n,e,t,i){return i!==null&&xh(i),So(e,n.child,null,t),n=Nh(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function gM(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Vc(Error(te(422))),vl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=rc({mode:"visible",children:i.children},r,0,null),s=as(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&So(e,n.child,null,o),e.child.memoizedState=gd(o),e.memoizedState=md,s);if(!(e.mode&1))return vl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=Vc(s,i,void 0),vl(n,e,o,i)}if(a=(o&n.childLanes)!==0,pn||a){if(i=Ot,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Yi(n,r),mi(i,n,r,-1))}return zh(),i=Vc(Error(te(421))),vl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=PM.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Ln=Sr(r.nextSibling),Un=e,lt=!0,ci=null,n!==null&&(Xn[jn++]=Hi,Xn[jn++]=Gi,Xn[jn++]=_s,Hi=n.id,Gi=n.overflow,_s=e),e=Nh(e,i.children),e.flags|=4096,e)}function _m(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),ud(n.return,e,t)}function Wc(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function a0(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(sn(n,e,i.children,t),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&_m(n,t,e);else if(n.tag===19)_m(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(it(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Au(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Wc(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Au(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Wc(e,!0,t,null,s);break;case"together":Wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nu(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function qi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),xs|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(te(153));if(e.child!==null){for(n=e.child,t=wr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=wr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function _M(n,e,t){switch(e.tag){case 3:s0(e),yo();break;case 5:Nv(e);break;case 1:gn(e.type)&&yu(e);break;case 4:wh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(Eu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(ht,ht.current&1),e.flags|=128,null):t&e.child.childLanes?o0(n,e,t):(it(ht,ht.current&1),n=qi(n,e,t),n!==null?n.sibling:null);it(ht,ht.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return a0(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,i0(n,e,t)}return qi(n,e,t)}var l0,_d,u0,c0;l0=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};_d=function(){};u0=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,rs(Ci.current);var s=null;switch(t){case"input":r=zf(n,r),i=zf(n,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=Gf(n,r),i=Gf(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=vu)}Wf(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ya.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ya.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&rt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};c0=function(n,e,t,i){t!==i&&(e.flags|=4)};function Yo(n,e){if(!lt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Yt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function vM(n,e,t){var i=e.pendingProps;switch(vh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return gn(e.type)&&xu(),Yt(e),null;case 3:return i=e.stateNode,Mo(),ot(mn),ot(Jt),Ch(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(gl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ci!==null&&(wd(ci),ci=null))),_d(n,e),Yt(e),null;case 5:Ah(e);var r=rs(Da.current);if(t=e.type,n!==null&&e.stateNode!=null)u0(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Yt(e),null}if(n=rs(Ci.current),gl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Ei]=e,i[ba]=s,n=(e.mode&1)!==0,t){case"dialog":rt("cancel",i),rt("close",i);break;case"iframe":case"object":case"embed":rt("load",i);break;case"video":case"audio":for(r=0;r<ra.length;r++)rt(ra[r],i);break;case"source":rt("error",i);break;case"img":case"image":case"link":rt("error",i),rt("load",i);break;case"details":rt("toggle",i);break;case"input":Ap(i,s),rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},rt("invalid",i);break;case"textarea":Rp(i,s),rt("invalid",i)}Wf(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ml(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ml(i.textContent,a,n),r=["children",""+a]):ya.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&rt("scroll",i)}switch(t){case"input":al(i),Cp(i,s,!0);break;case"textarea":al(i),Pp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=vu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=k_(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Ei]=e,n[ba]=i,l0(n,e,!1,!1),e.stateNode=n;e:{switch(o=Xf(t,i),t){case"dialog":rt("cancel",n),rt("close",n),r=i;break;case"iframe":case"object":case"embed":rt("load",n),r=i;break;case"video":case"audio":for(r=0;r<ra.length;r++)rt(ra[r],n);r=i;break;case"source":rt("error",n),r=i;break;case"img":case"image":case"link":rt("error",n),rt("load",n),r=i;break;case"details":rt("toggle",n),r=i;break;case"input":Ap(n,i),r=zf(n,i),rt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),rt("invalid",n);break;case"textarea":Rp(n,i),r=Gf(n,i),rt("invalid",n);break;default:r=i}Wf(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?H_(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&z_(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Sa(n,l):typeof l=="number"&&Sa(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ya.hasOwnProperty(s)?l!=null&&s==="onScroll"&&rt("scroll",n):l!=null&&ih(n,s,l,o))}switch(t){case"input":al(n),Cp(n,i,!1);break;case"textarea":al(n),Pp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Lr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?oo(n,!!i.multiple,s,!1):i.defaultValue!=null&&oo(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=vu)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(n&&e.stateNode!=null)c0(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(t=rs(Da.current),rs(Ci.current),gl(e)){if(i=e.stateNode,t=e.memoizedProps,i[Ei]=e,(s=i.nodeValue!==t)&&(n=Un,n!==null))switch(n.tag){case 3:ml(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ml(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Ei]=e,e.stateNode=i}return Yt(e),null;case 13:if(ot(ht),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(lt&&Ln!==null&&e.mode&1&&!(e.flags&128))Rv(),yo(),e.flags|=98560,s=!1;else if(s=gl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[Ei]=e}else yo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else ci!==null&&(wd(ci),ci=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||ht.current&1?Pt===0&&(Pt=3):zh())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return Mo(),_d(n,e),n===null&&Ra(e.stateNode.containerInfo),Yt(e),null;case 10:return Mh(e.type._context),Yt(e),null;case 17:return gn(e.type)&&xu(),Yt(e),null;case 19:if(ot(ht),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Yo(s,!1);else{if(Pt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Au(n),o!==null){for(e.flags|=128,Yo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return it(ht,ht.current&1|2),e.child}n=n.sibling}s.tail!==null&&Tt()>To&&(e.flags|=128,i=!0,Yo(s,!1),e.lanes=4194304)}else{if(!i)if(n=Au(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Yo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!lt)return Yt(e),null}else 2*Tt()-s.renderingStartTime>To&&t!==1073741824&&(e.flags|=128,i=!0,Yo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,t=ht.current,it(ht,i?t&1|2:t&1),e):(Yt(e),null);case 22:case 23:return kh(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Rn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function xM(n,e){switch(vh(e),e.tag){case 1:return gn(e.type)&&xu(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Mo(),ot(mn),ot(Jt),Ch(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Ah(e),null;case 13:if(ot(ht),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(te(340));yo()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return ot(ht),null;case 4:return Mo(),null;case 10:return Mh(e.type._context),null;case 22:case 23:return kh(),null;case 24:return null;default:return null}}var xl=!1,Kt=!1,yM=typeof WeakSet=="function"?WeakSet:Set,fe=null;function eo(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){yt(n,e,i)}else t.current=null}function vd(n,e,t){try{t()}catch(i){yt(n,e,i)}}var vm=!1;function SM(n,e){if(td=mu,n=mv(),gh(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,h=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(nd={focusedElem:n,selectionRange:t},mu=!1,fe=e;fe!==null;)if(e=fe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,fe=n;else for(;fe!==null;){e=fe;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var g=x.memoizedProps,m=x.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?g:li(e.type,g),m);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(y){yt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}return x=vm,vm=!1,x}function ha(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&vd(e,t,s)}r=r.next}while(r!==i)}}function nc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function xd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function f0(n){var e=n.alternate;e!==null&&(n.alternate=null,f0(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Ei],delete e[ba],delete e[sd],delete e[iM],delete e[rM])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function d0(n){return n.tag===5||n.tag===3||n.tag===4}function xm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||d0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function yd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=vu));else if(i!==4&&(n=n.child,n!==null))for(yd(n,e,t),n=n.sibling;n!==null;)yd(n,e,t),n=n.sibling}function Sd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Sd(n,e,t),n=n.sibling;n!==null;)Sd(n,e,t),n=n.sibling}var zt=null,ui=!1;function er(n,e,t){for(t=t.child;t!==null;)h0(n,e,t),t=t.sibling}function h0(n,e,t){if(Ai&&typeof Ai.onCommitFiberUnmount=="function")try{Ai.onCommitFiberUnmount(qu,t)}catch{}switch(t.tag){case 5:Kt||eo(t,e);case 6:var i=zt,r=ui;zt=null,er(n,e,t),zt=i,ui=r,zt!==null&&(ui?(n=zt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):zt.removeChild(t.stateNode));break;case 18:zt!==null&&(ui?(n=zt,t=t.stateNode,n.nodeType===8?Fc(n.parentNode,t):n.nodeType===1&&Fc(n,t),wa(n)):Fc(zt,t.stateNode));break;case 4:i=zt,r=ui,zt=t.stateNode.containerInfo,ui=!0,er(n,e,t),zt=i,ui=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vd(t,e,o),r=r.next}while(r!==i)}er(n,e,t);break;case 1:if(!Kt&&(eo(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){yt(t,e,a)}er(n,e,t);break;case 21:er(n,e,t);break;case 22:t.mode&1?(Kt=(i=Kt)||t.memoizedState!==null,er(n,e,t),Kt=i):er(n,e,t);break;default:er(n,e,t)}}function ym(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new yM),e.forEach(function(i){var r=bM.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ii(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:zt=a.stateNode,ui=!1;break e;case 3:zt=a.stateNode.containerInfo,ui=!0;break e;case 4:zt=a.stateNode.containerInfo,ui=!0;break e}a=a.return}if(zt===null)throw Error(te(160));h0(s,o,r),zt=null,ui=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){yt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)p0(e,n),e=e.sibling}function p0(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ii(e,n),xi(n),i&4){try{ha(3,n,n.return),nc(3,n)}catch(g){yt(n,n.return,g)}try{ha(5,n,n.return)}catch(g){yt(n,n.return,g)}}break;case 1:ii(e,n),xi(n),i&512&&t!==null&&eo(t,t.return);break;case 5:if(ii(e,n),xi(n),i&512&&t!==null&&eo(t,t.return),n.flags&32){var r=n.stateNode;try{Sa(r,"")}catch(g){yt(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&O_(r,s),Xf(a,o);var u=Xf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?H_(r,d):c==="dangerouslySetInnerHTML"?z_(r,d):c==="children"?Sa(r,d):ih(r,c,d,u)}switch(a){case"input":Bf(r,s);break;case"textarea":F_(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?oo(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?oo(r,!!s.multiple,s.defaultValue,!0):oo(r,!!s.multiple,s.multiple?[]:"",!1))}r[ba]=s}catch(g){yt(n,n.return,g)}}break;case 6:if(ii(e,n),xi(n),i&4){if(n.stateNode===null)throw Error(te(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(g){yt(n,n.return,g)}}break;case 3:if(ii(e,n),xi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{wa(e.containerInfo)}catch(g){yt(n,n.return,g)}break;case 4:ii(e,n),xi(n);break;case 13:ii(e,n),xi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Oh=Tt())),i&4&&ym(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Kt=(u=Kt)||c,ii(e,n),Kt=u):ii(e,n),xi(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(fe=n,c=n.child;c!==null;){for(d=fe=c;fe!==null;){switch(h=fe,p=h.child,h.tag){case 0:case 11:case 14:case 15:ha(4,h,h.return);break;case 1:eo(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(g){yt(i,t,g)}}break;case 5:eo(h,h.return);break;case 22:if(h.memoizedState!==null){Mm(d);continue}}p!==null?(p.return=h,fe=p):Mm(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=B_("display",o))}catch(g){yt(n,n.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){yt(n,n.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ii(e,n),xi(n),i&4&&ym(n);break;case 21:break;default:ii(e,n),xi(n)}}function xi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(d0(t)){var i=t;break e}t=t.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Sa(r,""),i.flags&=-33);var s=xm(n);Sd(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=xm(n);yd(n,a,o);break;default:throw Error(te(161))}}catch(l){yt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function MM(n,e,t){fe=n,m0(n)}function m0(n,e,t){for(var i=(n.mode&1)!==0;fe!==null;){var r=fe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||xl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Kt;a=xl;var u=Kt;if(xl=o,(Kt=l)&&!u)for(fe=r;fe!==null;)o=fe,l=o.child,o.tag===22&&o.memoizedState!==null?Em(r):l!==null?(l.return=o,fe=l):Em(r);for(;s!==null;)fe=s,m0(s),s=s.sibling;fe=r,xl=a,Kt=u}Sm(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,fe=s):Sm(n)}}function Sm(n){for(;fe!==null;){var e=fe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||nc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:li(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&sm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}sm(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&wa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Kt||e.flags&512&&xd(e)}catch(h){yt(e,e.return,h)}}if(e===n){fe=null;break}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}}function Mm(n){for(;fe!==null;){var e=fe;if(e===n){fe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,fe=t;break}fe=e.return}}function Em(n){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{nc(4,e)}catch(l){yt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{xd(e)}catch(l){yt(e,s,l)}break;case 5:var o=e.return;try{xd(e)}catch(l){yt(e,o,l)}}}catch(l){yt(e,e.return,l)}if(e===n){fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,fe=a;break}fe=e.return}}var EM=Math.ceil,Pu=Qi.ReactCurrentDispatcher,Uh=Qi.ReactCurrentOwner,ei=Qi.ReactCurrentBatchConfig,Xe=0,Ot=null,Ct=null,Gt=0,Rn=0,to=kr(0),Pt=0,Oa=null,xs=0,ic=0,Ih=0,pa=null,dn=null,Oh=0,To=1/0,Oi=null,bu=!1,Md=null,Er=null,yl=!1,fr=null,Lu=0,ma=0,Ed=null,iu=-1,ru=0;function ln(){return Xe&6?Tt():iu!==-1?iu:iu=Tt()}function Tr(n){return n.mode&1?Xe&2&&Gt!==0?Gt&-Gt:oM.transition!==null?(ru===0&&(ru=J_()),ru):(n=qe,n!==0||(n=window.event,n=n===void 0?16:ov(n.type)),n):1}function mi(n,e,t,i){if(50<ma)throw ma=0,Ed=null,Error(te(185));Ya(n,t,i),(!(Xe&2)||n!==Ot)&&(n===Ot&&(!(Xe&2)&&(ic|=t),Pt===4&&ur(n,Gt)),_n(n,i),t===1&&Xe===0&&!(e.mode&1)&&(To=Tt()+500,Ju&&zr()))}function _n(n,e){var t=n.callbackNode;oS(n,e);var i=pu(n,n===Ot?Gt:0);if(i===0)t!==null&&Dp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Dp(t),e===1)n.tag===0?sM(Tm.bind(null,n)):wv(Tm.bind(null,n)),tM(function(){!(Xe&6)&&zr()}),t=null;else{switch(ev(i)){case 1:t=lh;break;case 4:t=Z_;break;case 16:t=hu;break;case 536870912:t=Q_;break;default:t=hu}t=E0(t,g0.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function g0(n,e){if(iu=-1,ru=0,Xe&6)throw Error(te(327));var t=n.callbackNode;if(fo()&&n.callbackNode!==t)return null;var i=pu(n,n===Ot?Gt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Du(n,i);else{e=i;var r=Xe;Xe|=2;var s=v0();(Ot!==n||Gt!==e)&&(Oi=null,To=Tt()+500,os(n,e));do try{AM();break}catch(a){_0(n,a)}while(!0);Sh(),Pu.current=s,Xe=r,Ct!==null?e=0:(Ot=null,Gt=0,e=Pt)}if(e!==0){if(e===2&&(r=Kf(n),r!==0&&(i=r,e=Td(n,r))),e===1)throw t=Oa,os(n,0),ur(n,i),_n(n,Tt()),t;if(e===6)ur(n,i);else{if(r=n.current.alternate,!(i&30)&&!TM(r)&&(e=Du(n,i),e===2&&(s=Kf(n),s!==0&&(i=s,e=Td(n,s))),e===1))throw t=Oa,os(n,0),ur(n,i),_n(n,Tt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:Kr(n,dn,Oi);break;case 3:if(ur(n,i),(i&130023424)===i&&(e=Oh+500-Tt(),10<e)){if(pu(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){ln(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=rd(Kr.bind(null,n,dn,Oi),e);break}Kr(n,dn,Oi);break;case 4:if(ur(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-pi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*EM(i/1960))-i,10<i){n.timeoutHandle=rd(Kr.bind(null,n,dn,Oi),i);break}Kr(n,dn,Oi);break;case 5:Kr(n,dn,Oi);break;default:throw Error(te(329))}}}return _n(n,Tt()),n.callbackNode===t?g0.bind(null,n):null}function Td(n,e){var t=pa;return n.current.memoizedState.isDehydrated&&(os(n,e).flags|=256),n=Du(n,e),n!==2&&(e=dn,dn=t,e!==null&&wd(e)),n}function wd(n){dn===null?dn=n:dn.push.apply(dn,n)}function TM(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!_i(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(n,e){for(e&=~Ih,e&=~ic,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-pi(e),i=1<<t;n[t]=-1,e&=~i}}function Tm(n){if(Xe&6)throw Error(te(327));fo();var e=pu(n,0);if(!(e&1))return _n(n,Tt()),null;var t=Du(n,e);if(n.tag!==0&&t===2){var i=Kf(n);i!==0&&(e=i,t=Td(n,i))}if(t===1)throw t=Oa,os(n,0),ur(n,e),_n(n,Tt()),t;if(t===6)throw Error(te(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Kr(n,dn,Oi),_n(n,Tt()),null}function Fh(n,e){var t=Xe;Xe|=1;try{return n(e)}finally{Xe=t,Xe===0&&(To=Tt()+500,Ju&&zr())}}function ys(n){fr!==null&&fr.tag===0&&!(Xe&6)&&fo();var e=Xe;Xe|=1;var t=ei.transition,i=qe;try{if(ei.transition=null,qe=1,n)return n()}finally{qe=i,ei.transition=t,Xe=e,!(Xe&6)&&zr()}}function kh(){Rn=to.current,ot(to)}function os(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,eM(t)),Ct!==null)for(t=Ct.return;t!==null;){var i=t;switch(vh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&xu();break;case 3:Mo(),ot(mn),ot(Jt),Ch();break;case 5:Ah(i);break;case 4:Mo();break;case 13:ot(ht);break;case 19:ot(ht);break;case 10:Mh(i.type._context);break;case 22:case 23:kh()}t=t.return}if(Ot=n,Ct=n=wr(n.current,null),Gt=Rn=e,Pt=0,Oa=null,Ih=ic=xs=0,dn=pa=null,is!==null){for(e=0;e<is.length;e++)if(t=is[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}is=null}return n}function _0(n,e){do{var t=Ct;try{if(Sh(),eu.current=Ru,Cu){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Cu=!1}if(vs=0,It=Rt=gt=null,da=!1,Na=0,Uh.current=null,t===null||t.return===null){Pt=1,Oa=e,Ct=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Gt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=fm(o);if(p!==null){p.flags&=-257,dm(p,o,a,s,e),p.mode&1&&cm(s,u,e),e=p,l=u;var x=e.updateQueue;if(x===null){var g=new Set;g.add(l),e.updateQueue=g}else x.add(l);break e}else{if(!(e&1)){cm(s,u,e),zh();break e}l=Error(te(426))}}else if(lt&&a.mode&1){var m=fm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),dm(m,o,a,s,e),xh(Eo(l,a));break e}}s=l=Eo(l,a),Pt!==4&&(Pt=2),pa===null?pa=[s]:pa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=e0(s,l,e);rm(s,f);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Er===null||!Er.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=t0(s,a,e);rm(s,y);break e}}s=s.return}while(s!==null)}y0(t)}catch(E){e=E,Ct===t&&t!==null&&(Ct=t=t.return);continue}break}while(!0)}function v0(){var n=Pu.current;return Pu.current=Ru,n===null?Ru:n}function zh(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Ot===null||!(xs&268435455)&&!(ic&268435455)||ur(Ot,Gt)}function Du(n,e){var t=Xe;Xe|=2;var i=v0();(Ot!==n||Gt!==e)&&(Oi=null,os(n,e));do try{wM();break}catch(r){_0(n,r)}while(!0);if(Sh(),Xe=t,Pu.current=i,Ct!==null)throw Error(te(261));return Ot=null,Gt=0,Pt}function wM(){for(;Ct!==null;)x0(Ct)}function AM(){for(;Ct!==null&&!Zy();)x0(Ct)}function x0(n){var e=M0(n.alternate,n,Rn);n.memoizedProps=n.pendingProps,e===null?y0(n):Ct=e,Uh.current=null}function y0(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=xM(t,e),t!==null){t.flags&=32767,Ct=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Pt=6,Ct=null;return}}else if(t=vM(t,e,Rn),t!==null){Ct=t;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=n}while(e!==null);Pt===0&&(Pt=5)}function Kr(n,e,t){var i=qe,r=ei.transition;try{ei.transition=null,qe=1,CM(n,e,t,i)}finally{ei.transition=r,qe=i}return null}function CM(n,e,t,i){do fo();while(fr!==null);if(Xe&6)throw Error(te(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(te(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(aS(n,s),n===Ot&&(Ct=Ot=null,Gt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||yl||(yl=!0,E0(hu,function(){return fo(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=ei.transition,ei.transition=null;var o=qe;qe=1;var a=Xe;Xe|=4,Uh.current=null,SM(n,t),p0(t,n),YS(nd),mu=!!td,nd=td=null,n.current=t,MM(t),Qy(),Xe=a,qe=o,ei.transition=s}else n.current=t;if(yl&&(yl=!1,fr=n,Lu=r),s=n.pendingLanes,s===0&&(Er=null),tS(t.stateNode),_n(n,Tt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(bu)throw bu=!1,n=Md,Md=null,n;return Lu&1&&n.tag!==0&&fo(),s=n.pendingLanes,s&1?n===Ed?ma++:(ma=0,Ed=n):ma=0,zr(),null}function fo(){if(fr!==null){var n=ev(Lu),e=ei.transition,t=qe;try{if(ei.transition=null,qe=16>n?16:n,fr===null)var i=!1;else{if(n=fr,fr=null,Lu=0,Xe&6)throw Error(te(331));var r=Xe;for(Xe|=4,fe=n.current;fe!==null;){var s=fe,o=s.child;if(fe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(fe=u;fe!==null;){var c=fe;switch(c.tag){case 0:case 11:case 15:ha(8,c,s)}var d=c.child;if(d!==null)d.return=c,fe=d;else for(;fe!==null;){c=fe;var h=c.sibling,p=c.return;if(f0(c),c===u){fe=null;break}if(h!==null){h.return=p,fe=h;break}fe=p}}}var x=s.alternate;if(x!==null){var g=x.child;if(g!==null){x.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}fe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,fe=o;else e:for(;fe!==null;){if(s=fe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ha(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,fe=f;break e}fe=s.return}}var _=n.current;for(fe=_;fe!==null;){o=fe;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,fe=v;else e:for(o=_;fe!==null;){if(a=fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:nc(9,a)}}catch(E){yt(a,a.return,E)}if(a===o){fe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,fe=y;break e}fe=a.return}}if(Xe=r,zr(),Ai&&typeof Ai.onPostCommitFiberRoot=="function")try{Ai.onPostCommitFiberRoot(qu,n)}catch{}i=!0}return i}finally{qe=t,ei.transition=e}}return!1}function wm(n,e,t){e=Eo(t,e),e=e0(n,e,1),n=Mr(n,e,1),e=ln(),n!==null&&(Ya(n,1,e),_n(n,e))}function yt(n,e,t){if(n.tag===3)wm(n,n,t);else for(;e!==null;){if(e.tag===3){wm(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Er===null||!Er.has(i))){n=Eo(t,n),n=t0(e,n,1),e=Mr(e,n,1),n=ln(),e!==null&&(Ya(e,1,n),_n(e,n));break}}e=e.return}}function RM(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=ln(),n.pingedLanes|=n.suspendedLanes&t,Ot===n&&(Gt&t)===t&&(Pt===4||Pt===3&&(Gt&130023424)===Gt&&500>Tt()-Oh?os(n,0):Ih|=t),_n(n,e)}function S0(n,e){e===0&&(n.mode&1?(e=cl,cl<<=1,!(cl&130023424)&&(cl=4194304)):e=1);var t=ln();n=Yi(n,e),n!==null&&(Ya(n,e,t),_n(n,t))}function PM(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),S0(n,t)}function bM(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),S0(n,t)}var M0;M0=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||mn.current)pn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return pn=!1,_M(n,e,t);pn=!!(n.flags&131072)}else pn=!1,lt&&e.flags&1048576&&Av(e,Mu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;nu(n,e),n=e.pendingProps;var r=xo(e,Jt.current);co(e,t),r=Ph(null,e,i,n,r,t);var s=bh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gn(i)?(s=!0,yu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Th(e),r.updater=tc,e.stateNode=r,r._reactInternals=e,fd(e,i,n,t),e=pd(null,e,i,!0,s,t)):(e.tag=0,lt&&s&&_h(e),sn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(nu(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=DM(i),n=li(i,n),r){case 0:e=hd(null,e,i,n,t);break e;case 1:e=mm(null,e,i,n,t);break e;case 11:e=hm(null,e,i,n,t);break e;case 14:e=pm(null,e,i,li(i.type,n),t);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),hd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),mm(n,e,i,r,t);case 3:e:{if(s0(e),n===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Dv(n,e),wu(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Eo(Error(te(423)),e),e=gm(n,e,i,t,r);break e}else if(i!==r){r=Eo(Error(te(424)),e),e=gm(n,e,i,t,r);break e}else for(Ln=Sr(e.stateNode.containerInfo.firstChild),Un=e,lt=!0,ci=null,t=bv(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(yo(),i===r){e=qi(n,e,t);break e}sn(n,e,i,t)}e=e.child}return e;case 5:return Nv(e),n===null&&ld(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,id(i,r)?o=null:s!==null&&id(i,s)&&(e.flags|=32),r0(n,e),sn(n,e,o,t),e.child;case 6:return n===null&&ld(e),null;case 13:return o0(n,e,t);case 4:return wh(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=So(e,null,i,t):sn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),hm(n,e,i,r,t);case 7:return sn(n,e,e.pendingProps,t),e.child;case 8:return sn(n,e,e.pendingProps.children,t),e.child;case 12:return sn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,it(Eu,i._currentValue),i._currentValue=o,s!==null)if(_i(s.value,o)){if(s.children===r.children&&!mn.current){e=qi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Wi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),ud(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),ud(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}sn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,co(e,t),r=ti(r),i=i(r),e.flags|=1,sn(n,e,i,t),e.child;case 14:return i=e.type,r=li(i,e.pendingProps),r=li(i.type,r),pm(n,e,i,r,t);case 15:return n0(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),nu(n,e),e.tag=1,gn(i)?(n=!0,yu(e)):n=!1,co(e,t),Jv(e,i,r),fd(e,i,r,t),pd(null,e,i,!0,n,t);case 19:return a0(n,e,t);case 22:return i0(n,e,t)}throw Error(te(156,e.tag))};function E0(n,e){return K_(n,e)}function LM(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(n,e,t,i){return new LM(n,e,t,i)}function Bh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function DM(n){if(typeof n=="function")return Bh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===sh)return 11;if(n===oh)return 14}return 2}function wr(n,e){var t=n.alternate;return t===null?(t=Zn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function su(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Bh(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Xs:return as(t.children,r,s,e);case rh:o=8,r|=8;break;case If:return n=Zn(12,t,e,r|2),n.elementType=If,n.lanes=s,n;case Of:return n=Zn(13,t,e,r),n.elementType=Of,n.lanes=s,n;case Ff:return n=Zn(19,t,e,r),n.elementType=Ff,n.lanes=s,n;case N_:return rc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case L_:o=10;break e;case D_:o=9;break e;case sh:o=11;break e;case oh:o=14;break e;case or:o=16,i=null;break e}throw Error(te(130,n==null?n:typeof n,""))}return e=Zn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function as(n,e,t,i){return n=Zn(7,n,i,e),n.lanes=t,n}function rc(n,e,t,i){return n=Zn(22,n,i,e),n.elementType=N_,n.lanes=t,n.stateNode={isHidden:!1},n}function Xc(n,e,t){return n=Zn(6,n,null,e),n.lanes=t,n}function jc(n,e,t){return e=Zn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function NM(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ac(0),this.expirationTimes=Ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ac(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Hh(n,e,t,i,r,s,o,a,l){return n=new NM(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Th(s),n}function UM(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ws,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function T0(n){if(!n)return Dr;n=n._reactInternals;e:{if(Ts(n)!==n||n.tag!==1)throw Error(te(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(n.tag===1){var t=n.type;if(gn(t))return Tv(n,t,e)}return e}function w0(n,e,t,i,r,s,o,a,l){return n=Hh(t,i,!0,n,r,s,o,a,l),n.context=T0(null),t=n.current,i=ln(),r=Tr(t),s=Wi(i,r),s.callback=e??null,Mr(t,s,r),n.current.lanes=r,Ya(n,r,i),_n(n,i),n}function sc(n,e,t,i){var r=e.current,s=ln(),o=Tr(r);return t=T0(t),e.context===null?e.context=t:e.pendingContext=t,e=Wi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Mr(r,e,o),n!==null&&(mi(n,r,o,s),Jl(n,r,o)),o}function Nu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Am(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Gh(n,e){Am(n,e),(n=n.alternate)&&Am(n,e)}function IM(){return null}var A0=typeof reportError=="function"?reportError:function(n){console.error(n)};function Vh(n){this._internalRoot=n}oc.prototype.render=Vh.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(te(409));sc(n,e,null,null)};oc.prototype.unmount=Vh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ys(function(){sc(null,n,null,null)}),e[ji]=null}};function oc(n){this._internalRoot=n}oc.prototype.unstable_scheduleHydration=function(n){if(n){var e=iv();n={blockedOn:null,target:n,priority:e};for(var t=0;t<lr.length&&e!==0&&e<lr[t].priority;t++);lr.splice(t,0,n),t===0&&sv(n)}};function Wh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ac(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Cm(){}function OM(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Nu(o);s.call(u)}}var o=w0(e,i,n,0,null,!1,!1,"",Cm);return n._reactRootContainer=o,n[ji]=o.current,Ra(n.nodeType===8?n.parentNode:n),ys(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Nu(l);a.call(u)}}var l=Hh(n,0,!1,null,null,!1,!1,"",Cm);return n._reactRootContainer=l,n[ji]=l.current,Ra(n.nodeType===8?n.parentNode:n),ys(function(){sc(e,l,t,i)}),l}function lc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Nu(o);a.call(l)}}sc(e,o,n,r)}else o=OM(t,e,n,r,i);return Nu(o)}tv=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ia(e.pendingLanes);t!==0&&(uh(e,t|1),_n(e,Tt()),!(Xe&6)&&(To=Tt()+500,zr()))}break;case 13:ys(function(){var i=Yi(n,1);if(i!==null){var r=ln();mi(i,n,1,r)}}),Gh(n,1)}};ch=function(n){if(n.tag===13){var e=Yi(n,134217728);if(e!==null){var t=ln();mi(e,n,134217728,t)}Gh(n,134217728)}};nv=function(n){if(n.tag===13){var e=Tr(n),t=Yi(n,e);if(t!==null){var i=ln();mi(t,n,e,i)}Gh(n,e)}};iv=function(){return qe};rv=function(n,e){var t=qe;try{return qe=n,e()}finally{qe=t}};Yf=function(n,e,t){switch(e){case"input":if(Bf(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Qu(i);if(!r)throw Error(te(90));I_(i),Bf(i,r)}}}break;case"textarea":F_(n,t);break;case"select":e=t.value,e!=null&&oo(n,!!t.multiple,e,!1)}};W_=Fh;X_=ys;var FM={usingClientEntryPoint:!1,Events:[$a,$s,Qu,G_,V_,Fh]},qo={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kM={bundleType:qo.bundleType,version:qo.version,rendererPackageName:qo.rendererPackageName,rendererConfig:qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=q_(n),n===null?null:n.stateNode},findFiberByHostInstance:qo.findFiberByHostInstance||IM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{qu=Sl.inject(kM),Ai=Sl}catch{}}Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FM;Bn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wh(e))throw Error(te(200));return UM(n,e,null,t)};Bn.createRoot=function(n,e){if(!Wh(n))throw Error(te(299));var t=!1,i="",r=A0;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Hh(n,1,!1,null,null,t,!1,i,r),n[ji]=e.current,Ra(n.nodeType===8?n.parentNode:n),new Vh(e)};Bn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(te(188)):(n=Object.keys(n).join(","),Error(te(268,n)));return n=q_(e),n=n===null?null:n.stateNode,n};Bn.flushSync=function(n){return ys(n)};Bn.hydrate=function(n,e,t){if(!ac(e))throw Error(te(200));return lc(null,n,e,!0,t)};Bn.hydrateRoot=function(n,e,t){if(!Wh(n))throw Error(te(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=A0;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=w0(e,null,n,1,t??null,r,!1,s,o),n[ji]=e.current,Ra(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new oc(e)};Bn.render=function(n,e,t){if(!ac(e))throw Error(te(200));return lc(null,n,e,!1,t)};Bn.unmountComponentAtNode=function(n){if(!ac(n))throw Error(te(40));return n._reactRootContainer?(ys(function(){lc(null,null,n,!1,function(){n._reactRootContainer=null,n[ji]=null})}),!0):!1};Bn.unstable_batchedUpdates=Fh;Bn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!ac(t))throw Error(te(200));if(n==null||n._reactInternals===void 0)throw Error(te(38));return lc(n,e,t,!1,i)};Bn.version="18.3.1-next-f1338f8080-20240426";function C0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C0)}catch(n){console.error(n)}}C0(),C_.exports=Bn;var zM=C_.exports,Rm=zM;Nf.createRoot=Rm.createRoot,Nf.hydrateRoot=Rm.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xh="160",BM=0,Pm=1,HM=2,R0=1,GM=2,Ii=3,Nr=0,vn=1,Bi=2,Ar=0,ho=1,bm=2,Lm=3,Dm=4,VM=5,es=100,WM=101,XM=102,Nm=103,Um=104,jM=200,YM=201,qM=202,$M=203,Ad=204,Cd=205,KM=206,ZM=207,QM=208,JM=209,eE=210,tE=211,nE=212,iE=213,rE=214,sE=0,oE=1,aE=2,Uu=3,lE=4,uE=5,cE=6,fE=7,P0=0,dE=1,hE=2,Cr=0,pE=1,mE=2,gE=3,_E=4,vE=5,xE=6,b0=300,wo=301,Ao=302,Rd=303,Pd=304,uc=306,bd=1e3,di=1001,Ld=1002,on=1003,Im=1004,Yc=1005,Yn=1006,yE=1007,Fa=1008,Rr=1009,SE=1010,ME=1011,jh=1012,L0=1013,dr=1014,hr=1015,ka=1016,D0=1017,N0=1018,ls=1020,EE=1021,hi=1023,TE=1024,wE=1025,us=1026,Co=1027,AE=1028,U0=1029,CE=1030,I0=1031,O0=1033,qc=33776,$c=33777,Kc=33778,Zc=33779,Om=35840,Fm=35841,km=35842,zm=35843,F0=36196,Bm=37492,Hm=37496,Gm=37808,Vm=37809,Wm=37810,Xm=37811,jm=37812,Ym=37813,qm=37814,$m=37815,Km=37816,Zm=37817,Qm=37818,Jm=37819,eg=37820,tg=37821,Qc=36492,ng=36494,ig=36495,RE=36283,rg=36284,sg=36285,og=36286,k0=3e3,cs=3001,PE=3200,bE=3201,LE=0,DE=1,Kn="",Bt="srgb",$i="srgb-linear",Yh="display-p3",cc="display-p3-linear",Iu="linear",st="srgb",Ou="rec709",Fu="p3",Cs=7680,ag=519,NE=512,UE=513,IE=514,z0=515,OE=516,FE=517,kE=518,zE=519,lg=35044,ug="300 es",Dd=1035,Vi=2e3,ku=2001;class ko{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jc=Math.PI/180,Nd=180/Math.PI;function Za(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function hn(n,e,t){return Math.max(e,Math.min(t,n))}function BE(n,e){return(n%e+e)%e}function ef(n,e,t){return(1-t)*n+t*e}function cg(n){return(n&n-1)===0&&n!==0}function Ud(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function $o(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function fn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(hn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,i,r,s,o,a,l,u){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],p=i[5],x=i[8],g=r[0],m=r[3],f=r[6],_=r[1],v=r[4],y=r[7],E=r[2],w=r[5],M=r[8];return s[0]=o*g+a*_+l*E,s[3]=o*m+a*v+l*w,s[6]=o*f+a*y+l*M,s[1]=u*g+c*_+d*E,s[4]=u*m+c*v+d*w,s[7]=u*f+c*y+d*M,s[2]=h*g+p*_+x*E,s[5]=h*m+p*v+x*w,s[8]=h*f+p*y+x*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,h=a*l-c*s,p=u*s-o*l,x=t*d+i*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=d*g,e[1]=(r*u-c*i)*g,e[2]=(a*i-r*o)*g,e[3]=h*g,e[4]=(c*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*l-u*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tf.makeScale(e,t)),this}rotate(e){return this.premultiply(tf.makeRotation(-e)),this}translate(e,t){return this.premultiply(tf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tf=new Be;function B0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function zu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function HE(){const n=zu("canvas");return n.style.display="block",n}const fg={};function ga(n){n in fg||(fg[n]=!0,console.warn(n))}const dg=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hg=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ml={[$i]:{transfer:Iu,primaries:Ou,toReference:n=>n,fromReference:n=>n},[Bt]:{transfer:st,primaries:Ou,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[cc]:{transfer:Iu,primaries:Fu,toReference:n=>n.applyMatrix3(hg),fromReference:n=>n.applyMatrix3(dg)},[Yh]:{transfer:st,primaries:Fu,toReference:n=>n.convertSRGBToLinear().applyMatrix3(hg),fromReference:n=>n.applyMatrix3(dg).convertLinearToSRGB()}},GE=new Set([$i,cc]),Ke={enabled:!0,_workingColorSpace:$i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!GE.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ml[e].toReference,r=Ml[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ml[n].primaries},getTransfer:function(n){return n===Kn?Iu:Ml[n].transfer}};function po(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function nf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Rs;class H0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rs===void 0&&(Rs=zu("canvas")),Rs.width=e.width,Rs.height=e.height;const i=Rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=po(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(po(t[i]/255)*255):t[i]=po(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let VE=0;class G0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=Za(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(rf(r[o].image)):s.push(rf(r[o]))}else s=rf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function rf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?H0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let WE=0;class In extends ko{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,i=di,r=di,s=Yn,o=Fa,a=hi,l=Rr,u=In.DEFAULT_ANISOTROPY,c=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=Za(),this.name="",this.source=new G0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(ga("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===cs?Bt:Kn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==b0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bd:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case Ld:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bd:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case Ld:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ga("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Bt?cs:k0}set encoding(e){ga("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===cs?Bt:Kn}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=b0;In.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,t=0,i=0,r=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],p=l[5],x=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+g)<.1&&Math.abs(x+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,y=(p+1)/2,E=(f+1)/2,w=(c+h)/4,M=(d+g)/4,L=(x+m)/4;return v>y&&v>E?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=w/i,s=M/i):y>E?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=L/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=M/s,r=L/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-x)*(m-x)+(d-g)*(d-g)+(h-c)*(h-c));return Math.abs(_)<.001&&(_=1),this.x=(m-x)/_,this.y=(d-g)/_,this.z=(h-c)/_,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XE extends ko{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(ga("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===cs?Bt:Kn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new In(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new G0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ss extends XE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class V0 extends In{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jE extends In{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qa{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],x=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=x,e[t+3]=g;return}if(d!==g||l!==h||u!==p||c!==x){let m=1-a;const f=l*h+u*p+c*x+d*g,_=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const E=Math.sqrt(v),w=Math.atan2(E,f*_);m=Math.sin(m*w)/E,a=Math.sin(a*w)/E}const y=a*_;if(l=l*m+h*y,u=u*m+p*y,c=c*m+x*y,d=d*m+g*y,m===1-a){const E=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=E,u*=E,c*=E,d*=E}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],h=s[o+1],p=s[o+2],x=s[o+3];return e[t]=a*x+c*d+l*p-u*h,e[t+1]=l*x+c*h+u*d-a*p,e[t+2]=u*x+c*p+a*h-l*d,e[t+3]=c*x-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*c*d+u*p*x,this._y=u*p*d-h*c*x,this._z=u*c*x+h*p*d,this._w=u*c*d-h*p*x;break;case"YXZ":this._x=h*c*d+u*p*x,this._y=u*p*d-h*c*x,this._z=u*c*x-h*p*d,this._w=u*c*d+h*p*x;break;case"ZXY":this._x=h*c*d-u*p*x,this._y=u*p*d+h*c*x,this._z=u*c*x+h*p*d,this._w=u*c*d-h*p*x;break;case"ZYX":this._x=h*c*d-u*p*x,this._y=u*p*d+h*c*x,this._z=u*c*x-h*p*d,this._w=u*c*d+h*p*x;break;case"YZX":this._x=h*c*d+u*p*x,this._y=u*p*d+h*c*x,this._z=u*c*x-h*p*d,this._w=u*c*d-h*p*x;break;case"XZY":this._x=h*c*d-u*p*x,this._y=u*p*d-h*c*x,this._z=u*c*x+h*p*d,this._w=u*c*d+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sf.copy(this).projectOnVector(e),this.sub(sf)}reflect(e){return this.sub(sf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(hn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sf=new j,pg=new Qa;class Ja{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ri):ri.fromBufferAttribute(s,o),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),El.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),El.copy(i.boundingBox)),El.applyMatrix4(e.matrixWorld),this.union(El)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ko),Tl.subVectors(this.max,Ko),Ps.subVectors(e.a,Ko),bs.subVectors(e.b,Ko),Ls.subVectors(e.c,Ko),tr.subVectors(bs,Ps),nr.subVectors(Ls,bs),Vr.subVectors(Ps,Ls);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Vr.z,Vr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Vr.z,0,-Vr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Vr.y,Vr.x,0];return!of(t,Ps,bs,Ls,Tl)||(t=[1,0,0,0,1,0,0,0,1],!of(t,Ps,bs,Ls,Tl))?!1:(wl.crossVectors(tr,nr),t=[wl.x,wl.y,wl.z],of(t,Ps,bs,Ls,Tl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bi=[new j,new j,new j,new j,new j,new j,new j,new j],ri=new j,El=new Ja,Ps=new j,bs=new j,Ls=new j,tr=new j,nr=new j,Vr=new j,Ko=new j,Tl=new j,wl=new j,Wr=new j;function of(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Wr.fromArray(n,s);const a=r.x*Math.abs(Wr.x)+r.y*Math.abs(Wr.y)+r.z*Math.abs(Wr.z),l=e.dot(Wr),u=t.dot(Wr),c=i.dot(Wr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const YE=new Ja,Zo=new j,af=new j;class fc{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):YE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zo.subVectors(e,this.center);const t=Zo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Zo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(af.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zo.copy(e.center).add(af)),this.expandByPoint(Zo.copy(e.center).sub(af))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new j,lf=new j,Al=new j,ir=new j,uf=new j,Cl=new j,cf=new j;class W0{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){lf.copy(e).add(t).multiplyScalar(.5),Al.copy(t).sub(e).normalize(),ir.copy(this.origin).sub(lf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Al),a=ir.dot(this.direction),l=-ir.dot(Al),u=ir.lengthSq(),c=Math.abs(1-o*o);let d,h,p,x;if(c>0)if(d=o*l-a,h=o*a-l,x=s*c,d>=0)if(h>=-x)if(h<=x){const g=1/c;d*=g,h*=g,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-x?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u):h<=x?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(lf).addScaledVector(Al,h),p}intersectSphere(e,t){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),r=Li.dot(Li)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,i,r,s){uf.subVectors(t,e),Cl.subVectors(i,e),cf.crossVectors(uf,Cl);let o=this.direction.dot(cf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ir.subVectors(this.origin,e);const l=a*this.direction.dot(Cl.crossVectors(ir,Cl));if(l<0)return null;const u=a*this.direction.dot(uf.cross(ir));if(u<0||l+u>o)return null;const c=-a*ir.dot(cf);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(e,t,i,r,s,o,a,l,u,c,d,h,p,x,g,m){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,h,p,x,g,m)}set(e,t,i,r,s,o,a,l,u,c,d,h,p,x,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=p,f[7]=x,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ds.setFromMatrixColumn(e,0).length(),s=1/Ds.setFromMatrixColumn(e,1).length(),o=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*d,x=a*c,g=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+x*u,t[5]=h-g*u,t[9]=-a*l,t[2]=g-h*u,t[6]=x+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*d,x=u*c,g=u*d;t[0]=h+g*a,t[4]=x*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-x,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*d,x=u*c,g=u*d;t[0]=h-g*a,t[4]=-o*d,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*c,t[9]=g-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*d,x=a*c,g=a*d;t[0]=l*c,t[4]=x*u-p,t[8]=h*u+g,t[1]=l*d,t[5]=g*u+h,t[9]=p*u-x,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,x=a*l,g=a*u;t[0]=l*c,t[4]=g-h*d,t[8]=x*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+x,t[10]=h-g*d}else if(e.order==="XZY"){const h=o*l,p=o*u,x=a*l,g=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=h*d+g,t[5]=o*c,t[9]=p*d-x,t[2]=x*d-p,t[6]=a*c,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qE,e,$E)}lookAt(e,t,i){const r=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),rr.crossVectors(i,An),rr.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),rr.crossVectors(i,An)),rr.normalize(),Rl.crossVectors(An,rr),r[0]=rr.x,r[4]=Rl.x,r[8]=An.x,r[1]=rr.y,r[5]=Rl.y,r[9]=An.y,r[2]=rr.z,r[6]=Rl.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],p=i[13],x=i[2],g=i[6],m=i[10],f=i[14],_=i[3],v=i[7],y=i[11],E=i[15],w=r[0],M=r[4],L=r[8],S=r[12],A=r[1],B=r[5],U=r[9],V=r[13],b=r[2],I=r[6],O=r[10],Y=r[14],N=r[3],z=r[7],k=r[11],Z=r[15];return s[0]=o*w+a*A+l*b+u*N,s[4]=o*M+a*B+l*I+u*z,s[8]=o*L+a*U+l*O+u*k,s[12]=o*S+a*V+l*Y+u*Z,s[1]=c*w+d*A+h*b+p*N,s[5]=c*M+d*B+h*I+p*z,s[9]=c*L+d*U+h*O+p*k,s[13]=c*S+d*V+h*Y+p*Z,s[2]=x*w+g*A+m*b+f*N,s[6]=x*M+g*B+m*I+f*z,s[10]=x*L+g*U+m*O+f*k,s[14]=x*S+g*V+m*Y+f*Z,s[3]=_*w+v*A+y*b+E*N,s[7]=_*M+v*B+y*I+E*z,s[11]=_*L+v*U+y*O+E*k,s[15]=_*S+v*V+y*Y+E*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],p=e[14],x=e[3],g=e[7],m=e[11],f=e[15];return x*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*p-i*l*p)+g*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+t*u*d-t*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+f*(-r*a*c-t*l*d+t*a*h+r*o*d-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],p=e[11],x=e[12],g=e[13],m=e[14],f=e[15],_=d*m*u-g*h*u+g*l*p-a*m*p-d*l*f+a*h*f,v=x*h*u-c*m*u-x*l*p+o*m*p+c*l*f-o*h*f,y=c*g*u-x*d*u+x*a*p-o*g*p-c*a*f+o*d*f,E=x*d*l-c*g*l-x*a*h+o*g*h+c*a*m-o*d*m,w=t*_+i*v+r*y+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=_*M,e[1]=(g*h*s-d*m*s-g*r*p+i*m*p+d*r*f-i*h*f)*M,e[2]=(a*m*s-g*l*s+g*r*u-i*m*u-a*r*f+i*l*f)*M,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*p-i*l*p)*M,e[4]=v*M,e[5]=(c*m*s-x*h*s+x*r*p-t*m*p-c*r*f+t*h*f)*M,e[6]=(x*l*s-o*m*s-x*r*u+t*m*u+o*r*f-t*l*f)*M,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*M,e[8]=y*M,e[9]=(x*d*s-c*g*s-x*i*p+t*g*p+c*i*f-t*d*f)*M,e[10]=(o*g*s-x*a*s+x*i*u-t*g*u-o*i*f+t*a*f)*M,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*p-t*a*p)*M,e[12]=E*M,e[13]=(c*g*r-x*d*r+x*i*h-t*g*h-c*i*m+t*d*m)*M,e[14]=(x*a*r-o*g*r-x*i*l+t*g*l+o*i*m-t*a*m)*M,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*h+t*a*h)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,h=s*u,p=s*c,x=s*d,g=o*c,m=o*d,f=a*d,_=l*u,v=l*c,y=l*d,E=i.x,w=i.y,M=i.z;return r[0]=(1-(g+f))*E,r[1]=(p+y)*E,r[2]=(x-v)*E,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(h+f))*w,r[6]=(m+_)*w,r[7]=0,r[8]=(x+v)*M,r[9]=(m-_)*M,r[10]=(1-(h+g))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ds.set(r[0],r[1],r[2]).length();const o=Ds.set(r[4],r[5],r[6]).length(),a=Ds.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],si.copy(this);const u=1/s,c=1/o,d=1/a;return si.elements[0]*=u,si.elements[1]*=u,si.elements[2]*=u,si.elements[4]*=c,si.elements[5]*=c,si.elements[6]*=c,si.elements[8]*=d,si.elements[9]*=d,si.elements[10]*=d,t.setFromRotationMatrix(si),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Vi){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let p,x;if(a===Vi)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ku)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Vi){const l=this.elements,u=1/(t-e),c=1/(i-r),d=1/(o-s),h=(t+e)*u,p=(i+r)*c;let x,g;if(a===Vi)x=(o+s)*d,g=-2*d;else if(a===ku)x=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ds=new j,si=new Ft,qE=new j(0,0,0),$E=new j(1,1,1),rr=new j,Rl=new j,An=new j,mg=new Ft,gg=new Qa;class dc{constructor(e=0,t=0,i=0,r=dc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(hn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-hn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(hn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-hn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(hn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-hn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return mg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gg.setFromEuler(this),this.setFromQuaternion(gg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dc.DEFAULT_ORDER="XYZ";class X0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let KE=0;const _g=new j,Ns=new Qa,Di=new Ft,Pl=new j,Qo=new j,ZE=new j,QE=new Qa,vg=new j(1,0,0),xg=new j(0,1,0),yg=new j(0,0,1),JE={type:"added"},eT={type:"removed"};class xn extends ko{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=Za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new j,t=new dc,i=new Qa,r=new j(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ft},normalMatrix:{value:new Be}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new X0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(vg,e)}rotateY(e){return this.rotateOnAxis(xg,e)}rotateZ(e){return this.rotateOnAxis(yg,e)}translateOnAxis(e,t){return _g.copy(e).applyQuaternion(this.quaternion),this.position.add(_g.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vg,e)}translateY(e){return this.translateOnAxis(xg,e)}translateZ(e){return this.translateOnAxis(yg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Pl.copy(e):Pl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Qo,Pl,this.up):Di.lookAt(Pl,Qo,this.up),this.quaternion.setFromRotationMatrix(Di),r&&(Di.extractRotation(r.matrixWorld),Ns.setFromRotationMatrix(Di),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(JE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eT)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,e,ZE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,QE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}xn.DEFAULT_UP=new j(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new j,Ni=new j,ff=new j,Ui=new j,Us=new j,Is=new j,Sg=new j,df=new j,hf=new j,pf=new j;let bl=!1;class fi{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),oi.subVectors(e,t),r.cross(oi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){oi.subVectors(r,t),Ni.subVectors(i,t),ff.subVectors(e,t);const o=oi.dot(oi),a=oi.dot(Ni),l=oi.dot(ff),u=Ni.dot(Ni),c=Ni.dot(ff),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(u*l-a*c)*h,x=(o*c-a*l)*h;return s.set(1-p-x,x,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getUV(e,t,i,r,s,o,a,l){return bl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bl=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ui.x),l.addScaledVector(o,Ui.y),l.addScaledVector(a,Ui.z),l)}static isFrontFacing(e,t,i,r){return oi.subVectors(i,t),Ni.subVectors(e,t),oi.cross(Ni).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),oi.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return bl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bl=!0),fi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return fi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Us.subVectors(r,i),Is.subVectors(s,i),df.subVectors(e,i);const l=Us.dot(df),u=Is.dot(df);if(l<=0&&u<=0)return t.copy(i);hf.subVectors(e,r);const c=Us.dot(hf),d=Is.dot(hf);if(c>=0&&d<=c)return t.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Us,o);pf.subVectors(e,s);const p=Us.dot(pf),x=Is.dot(pf);if(x>=0&&p<=x)return t.copy(s);const g=p*u-l*x;if(g<=0&&u>=0&&x<=0)return a=u/(u-x),t.copy(i).addScaledVector(Is,a);const m=c*x-p*d;if(m<=0&&d-c>=0&&p-x>=0)return Sg.subVectors(s,r),a=(d-c)/(d-c+(p-x)),t.copy(r).addScaledVector(Sg,a);const f=1/(m+g+h);return o=g*f,a=h*f,t.copy(i).addScaledVector(Us,o).addScaledVector(Is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const j0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},Ll={h:0,s:0,l:0};function mf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=BE(e,1),t=hn(t,0,1),i=hn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=mf(o,s,e+1/3),this.g=mf(o,s,e),this.b=mf(o,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,t=Bt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){const i=j0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}copyLinearToSRGB(e){return this.r=nf(e.r),this.g=nf(e.g),this.b=nf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return Ke.fromWorkingColorSpace($t.copy(this),e),Math.round(hn($t.r*255,0,255))*65536+Math.round(hn($t.g*255,0,255))*256+Math.round(hn($t.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace($t.copy(this),t);const i=$t.r,r=$t.g,s=$t.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Bt){Ke.fromWorkingColorSpace($t.copy(this),e);const t=$t.r,i=$t.g,r=$t.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+t,sr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(sr),e.getHSL(Ll);const i=ef(sr.h,Ll.h,t),r=ef(sr.s,Ll.s,t),s=ef(sr.l,Ll.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Ye;Ye.NAMES=j0;let tT=0;class el extends ko{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tT++}),this.uuid=Za(),this.name="",this.type="Material",this.blending=ho,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=Cd,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Uu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ag,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ho&&(i.blending=this.blending),this.side!==Nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ad&&(i.blendSrc=this.blendSrc),this.blendDst!==Cd&&(i.blendDst=this.blendDst),this.blendEquation!==es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Uu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ag&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Y0 extends el{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=P0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new j,Dl=new Ze;class gi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=lg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=hr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Dl.fromBufferAttribute(this,t),Dl.applyMatrix3(e),this.setXY(t,Dl.x,Dl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=$o(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=fn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$o(t,this.array)),t}setX(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$o(t,this.array)),t}setY(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$o(t,this.array)),t}setZ(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$o(t,this.array)),t}setW(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),i=fn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),i=fn(i,this.array),r=fn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),i=fn(i,this.array),r=fn(r,this.array),s=fn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lg&&(e.usage=this.usage),e}}class q0 extends gi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class $0 extends gi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class fs extends gi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let nT=0;const Vn=new Ft,gf=new xn,Os=new j,Cn=new Ja,Jo=new Ja,Ut=new j;class Ji extends ko{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nT++}),this.uuid=Za(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(B0(e)?$0:q0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,i){return Vn.makeTranslation(e,t,i),this.applyMatrix4(Vn),this}scale(e,t,i){return Vn.makeScale(e,t,i),this.applyMatrix4(Vn),this}lookAt(e){return gf.lookAt(e),gf.updateMatrix(),this.applyMatrix4(gf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new fs(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ja);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Jo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(Cn.min,Jo.min),Cn.expandByPoint(Ut),Ut.addVectors(Cn.max,Jo.max),Cn.expandByPoint(Ut)):(Cn.expandByPoint(Jo.min),Cn.expandByPoint(Jo.max))}Cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ut.fromBufferAttribute(a,u),l&&(Os.fromBufferAttribute(e,u),Ut.add(Os)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let A=0;A<a;A++)u[A]=new j,c[A]=new j;const d=new j,h=new j,p=new j,x=new Ze,g=new Ze,m=new Ze,f=new j,_=new j;function v(A,B,U){d.fromArray(r,A*3),h.fromArray(r,B*3),p.fromArray(r,U*3),x.fromArray(o,A*2),g.fromArray(o,B*2),m.fromArray(o,U*2),h.sub(d),p.sub(d),g.sub(x),m.sub(x);const V=1/(g.x*m.y-m.x*g.y);isFinite(V)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(V),_.copy(p).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(V),u[A].add(f),u[B].add(f),u[U].add(f),c[A].add(_),c[B].add(_),c[U].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let A=0,B=y.length;A<B;++A){const U=y[A],V=U.start,b=U.count;for(let I=V,O=V+b;I<O;I+=3)v(i[I+0],i[I+1],i[I+2])}const E=new j,w=new j,M=new j,L=new j;function S(A){M.fromArray(s,A*3),L.copy(M);const B=u[A];E.copy(B),E.sub(M.multiplyScalar(M.dot(B))).normalize(),w.crossVectors(L,B);const V=w.dot(c[A])<0?-1:1;l[A*4]=E.x,l[A*4+1]=E.y,l[A*4+2]=E.z,l[A*4+3]=V}for(let A=0,B=y.length;A<B;++A){const U=y[A],V=U.start,b=U.count;for(let I=V,O=V+b;I<O;I+=3)S(i[I+0]),S(i[I+1]),S(i[I+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new j,s=new j,o=new j,a=new j,l=new j,u=new j,c=new j,d=new j;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c);let p=0,x=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*c;for(let f=0;f<c;f++)h[x++]=u[p++]}return new gi(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ji,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let h=0,p=d.length;h<p;h++)c.push(d[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mg=new Ft,Xr=new W0,Nl=new fc,Eg=new j,Fs=new j,ks=new j,zs=new j,_f=new j,Ul=new j,Il=new Ze,Ol=new Ze,Fl=new Ze,Tg=new j,wg=new j,Ag=new j,kl=new j,zl=new j;class pr extends xn{constructor(e=new Ji,t=new Y0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ul.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(_f.fromBufferAttribute(d,e),o?Ul.addScaledVector(_f,c):Ul.addScaledVector(_f.sub(t),c))}t.add(Ul)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nl.copy(i.boundingSphere),Nl.applyMatrix4(s),Xr.copy(e.ray).recast(e.near),!(Nl.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(Nl,Eg)===null||Xr.origin.distanceToSquared(Eg)>(e.far-e.near)**2))&&(Mg.copy(s).invert(),Xr.copy(e.ray).applyMatrix4(Mg),!(i.boundingBox!==null&&Xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Xr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=h.length;x<g;x++){const m=h[x],f=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,E=v;y<E;y+=3){const w=a.getX(y),M=a.getX(y+1),L=a.getX(y+2);r=Bl(this,f,e,i,u,c,d,w,M,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=x,f=g;m<f;m+=3){const _=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=Bl(this,o,e,i,u,c,d,_,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,g=h.length;x<g;x++){const m=h[x],f=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,E=v;y<E;y+=3){const w=y,M=y+1,L=y+2;r=Bl(this,f,e,i,u,c,d,w,M,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=x,f=g;m<f;m+=3){const _=m,v=m+1,y=m+2;r=Bl(this,o,e,i,u,c,d,_,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function iT(n,e,t,i,r,s,o,a){let l;if(e.side===vn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Nr,a),l===null)return null;zl.copy(a),zl.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(zl);return u<t.near||u>t.far?null:{distance:u,point:zl.clone(),object:n}}function Bl(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Fs),n.getVertexPosition(l,ks),n.getVertexPosition(u,zs);const c=iT(n,e,t,i,Fs,ks,zs,kl);if(c){r&&(Il.fromBufferAttribute(r,a),Ol.fromBufferAttribute(r,l),Fl.fromBufferAttribute(r,u),c.uv=fi.getInterpolation(kl,Fs,ks,zs,Il,Ol,Fl,new Ze)),s&&(Il.fromBufferAttribute(s,a),Ol.fromBufferAttribute(s,l),Fl.fromBufferAttribute(s,u),c.uv1=fi.getInterpolation(kl,Fs,ks,zs,Il,Ol,Fl,new Ze),c.uv2=c.uv1),o&&(Tg.fromBufferAttribute(o,a),wg.fromBufferAttribute(o,l),Ag.fromBufferAttribute(o,u),c.normal=fi.getInterpolation(kl,Fs,ks,zs,Tg,wg,Ag,new j),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new j,materialIndex:0};fi.getNormal(Fs,ks,zs,d.normal),c.face=d}return c}class tl extends Ji{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let h=0,p=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new fs(u,3)),this.setAttribute("normal",new fs(c,3)),this.setAttribute("uv",new fs(d,2));function x(g,m,f,_,v,y,E,w,M,L,S){const A=y/M,B=E/L,U=y/2,V=E/2,b=w/2,I=M+1,O=L+1;let Y=0,N=0;const z=new j;for(let k=0;k<O;k++){const Z=k*B-V;for(let Q=0;Q<I;Q++){const q=Q*A-U;z[g]=q*_,z[m]=Z*v,z[f]=b,u.push(z.x,z.y,z.z),z[g]=0,z[m]=0,z[f]=w>0?1:-1,c.push(z.x,z.y,z.z),d.push(Q/M),d.push(1-k/L),Y+=1}}for(let k=0;k<L;k++)for(let Z=0;Z<M;Z++){const Q=h+Z+I*k,q=h+Z+I*(k+1),K=h+(Z+1)+I*(k+1),re=h+(Z+1)+I*k;l.push(Q,q,re),l.push(q,K,re),N+=6}a.addGroup(p,N,S),p+=N,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ro(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function rn(n){const e={};for(let t=0;t<n.length;t++){const i=Ro(n[t]);for(const r in i)e[r]=i[r]}return e}function rT(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function K0(n){return n.getRenderTarget()===null?n.outputColorSpace:Ke.workingColorSpace}const sT={clone:Ro,merge:rn};var oT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ms extends el{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oT,this.fragmentShader=aT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ro(e.uniforms),this.uniformsGroups=rT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Z0 extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qn extends Z0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nd*2*Math.atan(Math.tan(Jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jc*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bs=-90,Hs=1;class lT extends xn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qn(Bs,Hs,e,t);r.layers=this.layers,this.add(r);const s=new qn(Bs,Hs,e,t);s.layers=this.layers,this.add(s);const o=new qn(Bs,Hs,e,t);o.layers=this.layers,this.add(o);const a=new qn(Bs,Hs,e,t);a.layers=this.layers,this.add(a);const l=new qn(Bs,Hs,e,t);l.layers=this.layers,this.add(l);const u=new qn(Bs,Hs,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ku)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(d,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Q0 extends In{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:wo,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uT extends Ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(ga("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===cs?Bt:Kn),this.texture=new Q0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new tl(5,5,5),s=new Ms({name:"CubemapFromEquirect",uniforms:Ro(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:Ar});s.uniforms.tEquirect.value=t;const o=new pr(r,s),a=t.minFilter;return t.minFilter===Fa&&(t.minFilter=Yn),new lT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const vf=new j,cT=new j,fT=new Be;class Zr{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=vf.subVectors(i,t).cross(cT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(vf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||fT.getNormalMatrix(e),r=this.coplanarPoint(vf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new fc,Hl=new j;class J0{constructor(e=new Zr,t=new Zr,i=new Zr,r=new Zr,s=new Zr,o=new Zr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],h=r[7],p=r[8],x=r[9],g=r[10],m=r[11],f=r[12],_=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,m-p,y-f).normalize(),i[1].setComponents(l+s,h+u,m+p,y+f).normalize(),i[2].setComponents(l+o,h+c,m+x,y+_).normalize(),i[3].setComponents(l-o,h-c,m-x,y-_).normalize(),i[4].setComponents(l-a,h-d,m-g,y-v).normalize(),t===Vi)i[5].setComponents(l+a,h+d,m+g,y+v).normalize();else if(t===ku)i[5].setComponents(a,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Hl.x=r.normal.x>0?e.max.x:e.min.x,Hl.y=r.normal.y>0?e.max.y:e.min.y,Hl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ex(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function dT(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,h=u.usage,p=d.byteLength,x=n.createBuffer();n.bindBuffer(c,x),n.bufferData(c,d,h),u.onUploadCallback();let g;if(d instanceof Float32Array)g=n.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=n.SHORT;else if(d instanceof Uint32Array)g=n.UNSIGNED_INT;else if(d instanceof Int32Array)g=n.INT;else if(d instanceof Int8Array)g=n.BYTE;else if(d instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,d){const h=c.array,p=c._updateRange,x=c.updateRanges;if(n.bindBuffer(d,u),p.count===-1&&x.length===0&&n.bufferSubData(d,0,h),x.length!==0){for(let g=0,m=x.length;g<m;g++){const f=x[g];t?n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}c.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);if(d===void 0)i.set(u,r(u,c));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,u,c),d.version=u.version}}return{get:o,remove:a,update:l}}class qh extends Ji{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,h=t/l,p=[],x=[],g=[],m=[];for(let f=0;f<c;f++){const _=f*h-o;for(let v=0;v<u;v++){const y=v*d-s;x.push(y,-_,0),g.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const v=_+u*f,y=_+u*(f+1),E=_+1+u*(f+1),w=_+1+u*f;p.push(v,y,w),p.push(y,E,w)}this.setIndex(p),this.setAttribute("position",new fs(x,3)),this.setAttribute("normal",new fs(g,3)),this.setAttribute("uv",new fs(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qh(e.width,e.height,e.widthSegments,e.heightSegments)}}var hT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pT=`#ifdef USE_ALPHAHASH
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
#endif`,mT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_T=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,vT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xT=`#ifdef USE_AOMAP
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
#endif`,yT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ST=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,MT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ET=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AT=`#ifdef USE_IRIDESCENCE
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
#endif`,CT=`#ifdef USE_BUMPMAP
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
#endif`,RT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,PT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,UT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,IT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,OT=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,FT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kT=`vec3 transformedNormal = objectNormal;
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
#endif`,zT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VT="gl_FragColor = linearToOutputTexel( gl_FragColor );",WT=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,XT=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YT=`#ifdef USE_ENVMAP
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
#endif`,qT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$T=`#ifdef USE_ENVMAP
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
#endif`,KT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e1=`#ifdef USE_GRADIENTMAP
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
}`,t1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,n1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s1=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,o1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,a1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,d1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,h1=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,p1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,m1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,x1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,y1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,E1=`#if defined( USE_POINTS_UV )
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
#endif`,T1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,R1=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,P1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,b1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,L1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,D1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,I1=`#ifdef USE_NORMALMAP
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
#endif`,O1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,G1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,$1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,K1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Z1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J1=`#ifdef USE_SKINNING
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
#endif`,ew=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tw=`#ifdef USE_SKINNING
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
#endif`,nw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sw=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ow=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aw=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hw=`uniform sampler2D t2D;
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
}`,pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_w=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vw=`#include <common>
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
}`,xw=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,yw=`#define DISTANCE
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
}`,Sw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ew=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tw=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ww=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Aw=`#include <common>
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
}`,Cw=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Rw=`#define LAMBERT
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
}`,Pw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,bw=`#define MATCAP
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
}`,Lw=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Dw=`#define NORMAL
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
}`,Nw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Uw=`#define PHONG
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
}`,Iw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ow=`#define STANDARD
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
}`,Fw=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,kw=`#define TOON
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
}`,zw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Bw=`uniform float size;
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
}`,Hw=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Gw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Vw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Ww=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Xw=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ue={alphahash_fragment:hT,alphahash_pars_fragment:pT,alphamap_fragment:mT,alphamap_pars_fragment:gT,alphatest_fragment:_T,alphatest_pars_fragment:vT,aomap_fragment:xT,aomap_pars_fragment:yT,batching_pars_vertex:ST,batching_vertex:MT,begin_vertex:ET,beginnormal_vertex:TT,bsdfs:wT,iridescence_fragment:AT,bumpmap_pars_fragment:CT,clipping_planes_fragment:RT,clipping_planes_pars_fragment:PT,clipping_planes_pars_vertex:bT,clipping_planes_vertex:LT,color_fragment:DT,color_pars_fragment:NT,color_pars_vertex:UT,color_vertex:IT,common:OT,cube_uv_reflection_fragment:FT,defaultnormal_vertex:kT,displacementmap_pars_vertex:zT,displacementmap_vertex:BT,emissivemap_fragment:HT,emissivemap_pars_fragment:GT,colorspace_fragment:VT,colorspace_pars_fragment:WT,envmap_fragment:XT,envmap_common_pars_fragment:jT,envmap_pars_fragment:YT,envmap_pars_vertex:qT,envmap_physical_pars_fragment:o1,envmap_vertex:$T,fog_vertex:KT,fog_pars_vertex:ZT,fog_fragment:QT,fog_pars_fragment:JT,gradientmap_pars_fragment:e1,lightmap_fragment:t1,lightmap_pars_fragment:n1,lights_lambert_fragment:i1,lights_lambert_pars_fragment:r1,lights_pars_begin:s1,lights_toon_fragment:a1,lights_toon_pars_fragment:l1,lights_phong_fragment:u1,lights_phong_pars_fragment:c1,lights_physical_fragment:f1,lights_physical_pars_fragment:d1,lights_fragment_begin:h1,lights_fragment_maps:p1,lights_fragment_end:m1,logdepthbuf_fragment:g1,logdepthbuf_pars_fragment:_1,logdepthbuf_pars_vertex:v1,logdepthbuf_vertex:x1,map_fragment:y1,map_pars_fragment:S1,map_particle_fragment:M1,map_particle_pars_fragment:E1,metalnessmap_fragment:T1,metalnessmap_pars_fragment:w1,morphcolor_vertex:A1,morphnormal_vertex:C1,morphtarget_pars_vertex:R1,morphtarget_vertex:P1,normal_fragment_begin:b1,normal_fragment_maps:L1,normal_pars_fragment:D1,normal_pars_vertex:N1,normal_vertex:U1,normalmap_pars_fragment:I1,clearcoat_normal_fragment_begin:O1,clearcoat_normal_fragment_maps:F1,clearcoat_pars_fragment:k1,iridescence_pars_fragment:z1,opaque_fragment:B1,packing:H1,premultiplied_alpha_fragment:G1,project_vertex:V1,dithering_fragment:W1,dithering_pars_fragment:X1,roughnessmap_fragment:j1,roughnessmap_pars_fragment:Y1,shadowmap_pars_fragment:q1,shadowmap_pars_vertex:$1,shadowmap_vertex:K1,shadowmask_pars_fragment:Z1,skinbase_vertex:Q1,skinning_pars_vertex:J1,skinning_vertex:ew,skinnormal_vertex:tw,specularmap_fragment:nw,specularmap_pars_fragment:iw,tonemapping_fragment:rw,tonemapping_pars_fragment:sw,transmission_fragment:ow,transmission_pars_fragment:aw,uv_pars_fragment:lw,uv_pars_vertex:uw,uv_vertex:cw,worldpos_vertex:fw,background_vert:dw,background_frag:hw,backgroundCube_vert:pw,backgroundCube_frag:mw,cube_vert:gw,cube_frag:_w,depth_vert:vw,depth_frag:xw,distanceRGBA_vert:yw,distanceRGBA_frag:Sw,equirect_vert:Mw,equirect_frag:Ew,linedashed_vert:Tw,linedashed_frag:ww,meshbasic_vert:Aw,meshbasic_frag:Cw,meshlambert_vert:Rw,meshlambert_frag:Pw,meshmatcap_vert:bw,meshmatcap_frag:Lw,meshnormal_vert:Dw,meshnormal_frag:Nw,meshphong_vert:Uw,meshphong_frag:Iw,meshphysical_vert:Ow,meshphysical_frag:Fw,meshtoon_vert:kw,meshtoon_frag:zw,points_vert:Bw,points_frag:Hw,shadow_vert:Gw,shadow_frag:Vw,sprite_vert:Ww,sprite_frag:Xw},oe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Mi={basic:{uniforms:rn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:rn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:rn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:rn([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:rn([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:rn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:rn([oe.points,oe.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:rn([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:rn([oe.common,oe.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:rn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:rn([oe.sprite,oe.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:rn([oe.common,oe.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:rn([oe.lights,oe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Mi.physical={uniforms:rn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Gl={r:0,b:0,g:0};function jw(n,e,t,i,r,s,o){const a=new Ye(0);let l=s===!0?0:1,u,c,d=null,h=0,p=null;function x(m,f){let _=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),_=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===uc)?(c===void 0&&(c=new pr(new tl(1,1,1),new Ms({name:"BackgroundCubeMaterial",uniforms:Ro(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(v.colorSpace)!==st,(d!==v||h!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new pr(new qh(2,2),new Ms({name:"BackgroundMaterial",uniforms:Ro(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=Ke.getTransfer(v.colorSpace)!==st,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function g(m,f){m.getRGB(Gl,K0(n)),i.buffers.color.setClear(Gl.r,Gl.g,Gl.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:x}}function Yw(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function d(b,I,O,Y,N){let z=!1;if(o){const k=g(Y,O,I);u!==k&&(u=k,p(u.object)),z=f(b,Y,O,N),z&&_(b,Y,O,N)}else{const k=I.wireframe===!0;(u.geometry!==Y.id||u.program!==O.id||u.wireframe!==k)&&(u.geometry=Y.id,u.program=O.id,u.wireframe=k,z=!0)}N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(z||c)&&(c=!1,L(b,I,O,Y),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(b){return i.isWebGL2?n.bindVertexArray(b):s.bindVertexArrayOES(b)}function x(b){return i.isWebGL2?n.deleteVertexArray(b):s.deleteVertexArrayOES(b)}function g(b,I,O){const Y=O.wireframe===!0;let N=a[b.id];N===void 0&&(N={},a[b.id]=N);let z=N[I.id];z===void 0&&(z={},N[I.id]=z);let k=z[Y];return k===void 0&&(k=m(h()),z[Y]=k),k}function m(b){const I=[],O=[],Y=[];for(let N=0;N<r;N++)I[N]=0,O[N]=0,Y[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:Y,object:b,attributes:{},index:null}}function f(b,I,O,Y){const N=u.attributes,z=I.attributes;let k=0;const Z=O.getAttributes();for(const Q in Z)if(Z[Q].location>=0){const K=N[Q];let re=z[Q];if(re===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(re=b.instanceColor)),K===void 0||K.attribute!==re||re&&K.data!==re.data)return!0;k++}return u.attributesNum!==k||u.index!==Y}function _(b,I,O,Y){const N={},z=I.attributes;let k=0;const Z=O.getAttributes();for(const Q in Z)if(Z[Q].location>=0){let K=z[Q];K===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(K=b.instanceColor));const re={};re.attribute=K,K&&K.data&&(re.data=K.data),N[Q]=re,k++}u.attributes=N,u.attributesNum=k,u.index=Y}function v(){const b=u.newAttributes;for(let I=0,O=b.length;I<O;I++)b[I]=0}function y(b){E(b,0)}function E(b,I){const O=u.newAttributes,Y=u.enabledAttributes,N=u.attributeDivisors;O[b]=1,Y[b]===0&&(n.enableVertexAttribArray(b),Y[b]=1),N[b]!==I&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](b,I),N[b]=I)}function w(){const b=u.newAttributes,I=u.enabledAttributes;for(let O=0,Y=I.length;O<Y;O++)I[O]!==b[O]&&(n.disableVertexAttribArray(O),I[O]=0)}function M(b,I,O,Y,N,z,k){k===!0?n.vertexAttribIPointer(b,I,O,N,z):n.vertexAttribPointer(b,I,O,Y,N,z)}function L(b,I,O,Y){if(i.isWebGL2===!1&&(b.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const N=Y.attributes,z=O.getAttributes(),k=I.defaultAttributeValues;for(const Z in z){const Q=z[Z];if(Q.location>=0){let q=N[Z];if(q===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(q=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(q=b.instanceColor)),q!==void 0){const K=q.normalized,re=q.itemSize,de=t.get(q);if(de===void 0)continue;const he=de.buffer,xe=de.type,De=de.bytesPerElement,we=i.isWebGL2===!0&&(xe===n.INT||xe===n.UNSIGNED_INT||q.gpuType===L0);if(q.isInterleavedBufferAttribute){const We=q.data,H=We.stride,en=q.offset;if(We.isInstancedInterleavedBuffer){for(let Se=0;Se<Q.locationSize;Se++)E(Q.location+Se,We.meshPerAttribute);b.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let Se=0;Se<Q.locationSize;Se++)y(Q.location+Se);n.bindBuffer(n.ARRAY_BUFFER,he);for(let Se=0;Se<Q.locationSize;Se++)M(Q.location+Se,re/Q.locationSize,xe,K,H*De,(en+re/Q.locationSize*Se)*De,we)}else{if(q.isInstancedBufferAttribute){for(let We=0;We<Q.locationSize;We++)E(Q.location+We,q.meshPerAttribute);b.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let We=0;We<Q.locationSize;We++)y(Q.location+We);n.bindBuffer(n.ARRAY_BUFFER,he);for(let We=0;We<Q.locationSize;We++)M(Q.location+We,re/Q.locationSize,xe,K,re*De,re/Q.locationSize*We*De,we)}}else if(k!==void 0){const K=k[Z];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(Q.location,K);break;case 3:n.vertexAttrib3fv(Q.location,K);break;case 4:n.vertexAttrib4fv(Q.location,K);break;default:n.vertexAttrib1fv(Q.location,K)}}}}w()}function S(){U();for(const b in a){const I=a[b];for(const O in I){const Y=I[O];for(const N in Y)x(Y[N].object),delete Y[N];delete I[O]}delete a[b]}}function A(b){if(a[b.id]===void 0)return;const I=a[b.id];for(const O in I){const Y=I[O];for(const N in Y)x(Y[N].object),delete Y[N];delete I[O]}delete a[b.id]}function B(b){for(const I in a){const O=a[I];if(O[b.id]===void 0)continue;const Y=O[b.id];for(const N in Y)x(Y[N].object),delete Y[N];delete O[b.id]}}function U(){V(),c=!0,u!==l&&(u=l,p(u.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:U,resetDefaultState:V,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:B,initAttributes:v,enableAttribute:y,disableUnusedAttributes:w}}function qw(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,d){n.drawArrays(s,c,d),t.update(d,s,1)}function l(c,d,h){if(h===0)return;let p,x;if(r)p=n,x="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[x](s,c,d,h),t.update(d,s,h)}function u(c,d,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<h;x++)this.render(c[x],d[x]);else{p.multiDrawArraysWEBGL(s,c,0,d,0,h);let x=0;for(let g=0;g<h;g++)x+=d[g];t.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function $w(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,y=o||e.has("OES_texture_float"),E=v&&y,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:w}}function Kw(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Zr,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=c(d,h,0)},this.setState=function(d,h,p){const x=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||x===null||x.length===0||s&&!m)s?c(null):u();else{const _=s?0:i,v=_*4;let y=f.clippingState||null;l.value=y,y=c(x,h,v,p);for(let E=0;E!==v;++E)y[E]=t[E];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,p,x){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,x!==!0||m===null){const f=p+g*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,y=p;v!==g;++v,y+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Zw(n){let e=new WeakMap;function t(o,a){return a===Rd?o.mapping=wo:a===Pd&&(o.mapping=Ao),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Rd||a===Pd)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new uT(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Qw extends Z0{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const no=4,Cg=[.125,.215,.35,.446,.526,.582],ts=20,xf=new Qw,Rg=new Ye;let yf=null,Sf=0,Mf=0;const Qr=(1+Math.sqrt(5))/2,Gs=1/Qr,Pg=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,Qr,Gs),new j(0,Qr,-Gs),new j(Gs,0,Qr),new j(-Gs,0,Qr),new j(Qr,Gs,0),new j(-Qr,Gs,0)];class bg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){yf=this._renderer.getRenderTarget(),Sf=this._renderer.getActiveCubeFace(),Mf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yf,Sf,Mf),e.scissorTest=!1,Vl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wo||e.mapping===Ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yf=this._renderer.getRenderTarget(),Sf=this._renderer.getActiveCubeFace(),Mf=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:ka,format:hi,colorSpace:$i,depthBuffer:!1},r=Lg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lg(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jw(s)),this._blurMaterial=eA(s,e,t)}return r}_compileMaterial(e){const t=new pr(this._lodPlanes[0],e);this._renderer.compile(t,xf)}_sceneToCubeUV(e,t,i,r){const a=new qn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(Rg),c.toneMapping=Cr,c.autoClear=!1;const p=new Y0({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),x=new pr(new tl,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Rg),g=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const v=this._cubeSize;Vl(r,_*v,f>2?v:0,v,v),c.setRenderTarget(r),g&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===wo||e.mapping===Ao;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ng()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new pr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Vl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,xf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Pg[(r-1)%Pg.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new pr(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ts-1),g=s/x,m=isFinite(s)?1+Math.floor(c*g):ts;m>ts&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ts}`);const f=[];let _=0;for(let M=0;M<ts;++M){const L=M/g,S=Math.exp(-L*L/2);f.push(S),M===0?_+=S:M<m&&(_+=2*S)}for(let M=0;M<f.length;M++)f[M]=f[M]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=x,h.mipInt.value=v-i;const y=this._sizeLods[r],E=3*y*(r>v-no?r-v+no:0),w=4*(this._cubeSize-y);Vl(t,E,w,3*y,2*y),l.setRenderTarget(t),l.render(d,xf)}}function Jw(n){const e=[],t=[],i=[];let r=n;const s=n-no+1+Cg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-no?l=Cg[o-n+no-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,x=6,g=3,m=2,f=1,_=new Float32Array(g*x*p),v=new Float32Array(m*x*p),y=new Float32Array(f*x*p);for(let w=0;w<p;w++){const M=w%3*2/3-1,L=w>2?0:-1,S=[M,L,0,M+2/3,L,0,M+2/3,L+1,0,M,L,0,M+2/3,L+1,0,M,L+1,0];_.set(S,g*x*w),v.set(h,m*x*w);const A=[w,w,w,w,w,w];y.set(A,f*x*w)}const E=new Ji;E.setAttribute("position",new gi(_,g)),E.setAttribute("uv",new gi(v,m)),E.setAttribute("faceIndex",new gi(y,f)),e.push(E),r>no&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Lg(n,e,t){const i=new Ss(n,e,t);return i.texture.mapping=uc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function eA(n,e,t){const i=new Float32Array(ts),r=new j(0,1,0);return new Ms({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$h(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Dg(){return new Ms({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$h(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Ng(){return new Ms({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function $h(){return`

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
	`}function tA(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Rd||l===Pd,c=l===wo||l===Ao;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new bg(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){t===null&&(t=new bg(n));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function nA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function iA(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const g=h.morphAttributes[x];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const x in h)e.update(h[x],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const x in p){const g=p[x];for(let m=0,f=g.length;m<f;m++)e.update(g[m],n.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,x=d.attributes.position;let g=0;if(p!==null){const _=p.array;g=p.version;for(let v=0,y=_.length;v<y;v+=3){const E=_[v+0],w=_[v+1],M=_[v+2];h.push(E,w,w,M,M,E)}}else if(x!==void 0){const _=x.array;g=x.version;for(let v=0,y=_.length/3-1;v<y;v+=3){const E=v+0,w=v+1,M=v+2;h.push(E,w,w,M,M,E)}}else return;const m=new(B0(h)?$0:q0)(h,1);m.version=g;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function c(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function rA(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,x){n.drawElements(s,x,a,p*l),t.update(x,s,1)}function d(p,x,g){if(g===0)return;let m,f;if(r)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,x,a,p*l,g),t.update(x,s,g)}function h(p,x,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<g;f++)this.render(p[f]/l,x[f]);else{m.multiDrawElementsWEBGL(s,x,0,a,p,0,g);let f=0;for(let _=0;_<g;_++)f+=x[_];t.update(f,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function sA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function oA(n,e){return n[0]-e[0]}function aA(n,e){return Math.abs(e[1])-Math.abs(n[1])}function lA(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ht,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=x!==void 0?x.length:0;let m=s.get(c);if(m===void 0||m.count!==g){let I=function(){V.dispose(),s.delete(c),c.removeEventListener("dispose",I)};var p=I;m!==void 0&&m.texture.dispose();const v=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,E=c.morphAttributes.color!==void 0,w=c.morphAttributes.position||[],M=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),E===!0&&(S=3);let A=c.attributes.position.count*S,B=1;A>e.maxTextureSize&&(B=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const U=new Float32Array(A*B*4*g),V=new V0(U,A,B,g);V.type=hr,V.needsUpdate=!0;const b=S*4;for(let O=0;O<g;O++){const Y=w[O],N=M[O],z=L[O],k=A*B*4*O;for(let Z=0;Z<Y.count;Z++){const Q=Z*b;v===!0&&(o.fromBufferAttribute(Y,Z),U[k+Q+0]=o.x,U[k+Q+1]=o.y,U[k+Q+2]=o.z,U[k+Q+3]=0),y===!0&&(o.fromBufferAttribute(N,Z),U[k+Q+4]=o.x,U[k+Q+5]=o.y,U[k+Q+6]=o.z,U[k+Q+7]=0),E===!0&&(o.fromBufferAttribute(z,Z),U[k+Q+8]=o.x,U[k+Q+9]=o.y,U[k+Q+10]=o.z,U[k+Q+11]=z.itemSize===4?o.w:1)}}m={count:g,texture:V,size:new Ze(A,B)},s.set(c,m),c.addEventListener("dispose",I)}let f=0;for(let v=0;v<h.length;v++)f+=h[v];const _=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",_),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const x=h===void 0?0:h.length;let g=i[c.id];if(g===void 0||g.length!==x){g=[];for(let y=0;y<x;y++)g[y]=[y,0];i[c.id]=g}for(let y=0;y<x;y++){const E=g[y];E[0]=y,E[1]=h[y]}g.sort(aA);for(let y=0;y<8;y++)y<x&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(oA);const m=c.morphAttributes.position,f=c.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const E=a[y],w=E[0],M=E[1];w!==Number.MAX_SAFE_INTEGER&&M?(m&&c.getAttribute("morphTarget"+y)!==m[w]&&c.setAttribute("morphTarget"+y,m[w]),f&&c.getAttribute("morphNormal"+y)!==f[w]&&c.setAttribute("morphNormal"+y,f[w]),r[y]=M,_+=M):(m&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),f&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const v=c.morphTargetsRelative?1:1-_;d.getUniforms().setValue(n,"morphTargetBaseInfluence",v),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function uA(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class tx extends In{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:us,c!==us&&c!==Co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===us&&(i=dr),i===void 0&&c===Co&&(i=ls),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const nx=new In,ix=new tx(1,1);ix.compareFunction=z0;const rx=new V0,sx=new jE,ox=new Q0,Ug=[],Ig=[],Og=new Float32Array(16),Fg=new Float32Array(9),kg=new Float32Array(4);function zo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ug[r];if(s===void 0&&(s=new Float32Array(r),Ug[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hc(n,e){let t=Ig[e];t===void 0&&(t=new Int32Array(e),Ig[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function dA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function hA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function pA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(bt(t,i))return;kg.set(i),n.uniformMatrix2fv(this.addr,!1,kg),Lt(t,i)}}function mA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(bt(t,i))return;Fg.set(i),n.uniformMatrix3fv(this.addr,!1,Fg),Lt(t,i)}}function gA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(bt(t,i))return;Og.set(i),n.uniformMatrix4fv(this.addr,!1,Og),Lt(t,i)}}function _A(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function vA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function xA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function yA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function SA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function MA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function EA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function TA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function wA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?ix:nx;t.setTexture2D(e||s,r)}function AA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||sx,r)}function CA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ox,r)}function RA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||rx,r)}function PA(n){switch(n){case 5126:return cA;case 35664:return fA;case 35665:return dA;case 35666:return hA;case 35674:return pA;case 35675:return mA;case 35676:return gA;case 5124:case 35670:return _A;case 35667:case 35671:return vA;case 35668:case 35672:return xA;case 35669:case 35673:return yA;case 5125:return SA;case 36294:return MA;case 36295:return EA;case 36296:return TA;case 35678:case 36198:case 36298:case 36306:case 35682:return wA;case 35679:case 36299:case 36307:return AA;case 35680:case 36300:case 36308:case 36293:return CA;case 36289:case 36303:case 36311:case 36292:return RA}}function bA(n,e){n.uniform1fv(this.addr,e)}function LA(n,e){const t=zo(e,this.size,2);n.uniform2fv(this.addr,t)}function DA(n,e){const t=zo(e,this.size,3);n.uniform3fv(this.addr,t)}function NA(n,e){const t=zo(e,this.size,4);n.uniform4fv(this.addr,t)}function UA(n,e){const t=zo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function IA(n,e){const t=zo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function OA(n,e){const t=zo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function FA(n,e){n.uniform1iv(this.addr,e)}function kA(n,e){n.uniform2iv(this.addr,e)}function zA(n,e){n.uniform3iv(this.addr,e)}function BA(n,e){n.uniform4iv(this.addr,e)}function HA(n,e){n.uniform1uiv(this.addr,e)}function GA(n,e){n.uniform2uiv(this.addr,e)}function VA(n,e){n.uniform3uiv(this.addr,e)}function WA(n,e){n.uniform4uiv(this.addr,e)}function XA(n,e,t){const i=this.cache,r=e.length,s=hc(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||nx,s[o])}function jA(n,e,t){const i=this.cache,r=e.length,s=hc(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||sx,s[o])}function YA(n,e,t){const i=this.cache,r=e.length,s=hc(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ox,s[o])}function qA(n,e,t){const i=this.cache,r=e.length,s=hc(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||rx,s[o])}function $A(n){switch(n){case 5126:return bA;case 35664:return LA;case 35665:return DA;case 35666:return NA;case 35674:return UA;case 35675:return IA;case 35676:return OA;case 5124:case 35670:return FA;case 35667:case 35671:return kA;case 35668:case 35672:return zA;case 35669:case 35673:return BA;case 5125:return HA;case 36294:return GA;case 36295:return VA;case 36296:return WA;case 35678:case 36198:case 36298:case 36306:case 35682:return XA;case 35679:case 36299:case 36307:return jA;case 35680:case 36300:case 36308:case 36293:return YA;case 36289:case 36303:case 36311:case 36292:return qA}}class KA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=PA(t.type)}}class ZA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$A(t.type)}}class QA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ef=/(\w+)(\])?(\[|\.)?/g;function zg(n,e){n.seq.push(e),n.map[e.id]=e}function JA(n,e,t){const i=n.name,r=i.length;for(Ef.lastIndex=0;;){const s=Ef.exec(i),o=Ef.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){zg(t,u===void 0?new KA(a,n,e):new ZA(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new QA(a),zg(t,d)),t=d}}}class ou{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);JA(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Bg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const eC=37297;let tC=0;function nC(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function iC(n){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(n);let i;switch(e===t?i="":e===Fu&&t===Ou?i="LinearDisplayP3ToLinearSRGB":e===Ou&&t===Fu&&(i="LinearSRGBToLinearDisplayP3"),n){case $i:case cc:return[i,"LinearTransferOETF"];case Bt:case Yh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Hg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+nC(n.getShaderSource(e),o)}else return r}function rC(n,e){const t=iC(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function sC(n,e){let t;switch(e){case pE:t="Linear";break;case mE:t="Reinhard";break;case gE:t="OptimizedCineon";break;case _E:t="ACESFilmic";break;case xE:t="AgX";break;case vE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function oC(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(io).join(`
`)}function aC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(io).join(`
`)}function lC(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function uC(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function io(n){return n!==""}function Gg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Id(n){return n.replace(cC,dC)}const fC=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function dC(n,e){let t=Ue[e];if(t===void 0){const i=fC.get(e);if(i!==void 0)t=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Id(t)}const hC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wg(n){return n.replace(hC,pC)}function pC(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xg(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mC(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===R0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===GM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function gC(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case wo:case Ao:e="ENVMAP_TYPE_CUBE";break;case uc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _C(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ao:e="ENVMAP_MODE_REFRACTION";break}return e}function vC(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case P0:e="ENVMAP_BLENDING_MULTIPLY";break;case dE:e="ENVMAP_BLENDING_MIX";break;case hE:e="ENVMAP_BLENDING_ADD";break}return e}function xC(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function yC(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=mC(t),u=gC(t),c=_C(t),d=vC(t),h=xC(t),p=t.isWebGL2?"":oC(t),x=aC(t),g=lC(s),m=r.createProgram();let f,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(io).join(`
`),f.length>0&&(f+=`
`),_=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(io).join(`
`),_.length>0&&(_+=`
`)):(f=[Xg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(io).join(`
`),_=[p,Xg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cr?"#define TONE_MAPPING":"",t.toneMapping!==Cr?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Cr?sC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,rC("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(io).join(`
`)),o=Id(o),o=Gg(o,t),o=Vg(o,t),a=Id(a),a=Gg(a,t),a=Vg(a,t),o=Wg(o),a=Wg(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ug?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ug?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=v+f+o,E=v+_+a,w=Bg(r,r.VERTEX_SHADER,y),M=Bg(r,r.FRAGMENT_SHADER,E);r.attachShader(m,w),r.attachShader(m,M),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function L(U){if(n.debug.checkShaderErrors){const V=r.getProgramInfoLog(m).trim(),b=r.getShaderInfoLog(w).trim(),I=r.getShaderInfoLog(M).trim();let O=!0,Y=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,w,M);else{const N=Hg(r,w,"vertex"),z=Hg(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+V+`
`+N+`
`+z)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(b===""||I==="")&&(Y=!1);Y&&(U.diagnostics={runnable:O,programLog:V,vertexShader:{log:b,prefix:f},fragmentShader:{log:I,prefix:_}})}r.deleteShader(w),r.deleteShader(M),S=new ou(r,m),A=uC(r,m)}let S;this.getUniforms=function(){return S===void 0&&L(this),S};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(m,eC)),B},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tC++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=M,this}let SC=0;class MC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new EC(e),t.set(e,i)),i}}class EC{constructor(e){this.id=SC++,this.code=e,this.usedTimes=0}}function TC(n,e,t,i,r,s,o){const a=new X0,l=new MC,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function m(S,A,B,U,V){const b=U.fog,I=V.geometry,O=S.isMeshStandardMaterial?U.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||O),N=Y&&Y.mapping===uc?Y.image.height:null,z=x[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const k=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Z=k!==void 0?k.length:0;let Q=0;I.morphAttributes.position!==void 0&&(Q=1),I.morphAttributes.normal!==void 0&&(Q=2),I.morphAttributes.color!==void 0&&(Q=3);let q,K,re,de;if(z){const tn=Mi[z];q=tn.vertexShader,K=tn.fragmentShader}else q=S.vertexShader,K=S.fragmentShader,l.update(S),re=l.getVertexShaderID(S),de=l.getFragmentShaderID(S);const he=n.getRenderTarget(),xe=V.isInstancedMesh===!0,De=V.isBatchedMesh===!0,we=!!S.map,We=!!S.matcap,H=!!Y,en=!!S.aoMap,Se=!!S.lightMap,Pe=!!S.bumpMap,ge=!!S.normalMap,ct=!!S.displacementMap,Ie=!!S.emissiveMap,R=!!S.metalnessMap,T=!!S.roughnessMap,W=S.anisotropy>0,ne=S.clearcoat>0,ee=S.iridescence>0,ie=S.sheen>0,_e=S.transmission>0,ue=W&&!!S.anisotropyMap,pe=ne&&!!S.clearcoatMap,Te=ne&&!!S.clearcoatNormalMap,Oe=ne&&!!S.clearcoatRoughnessMap,J=ee&&!!S.iridescenceMap,$e=ee&&!!S.iridescenceThicknessMap,He=ie&&!!S.sheenColorMap,Re=ie&&!!S.sheenRoughnessMap,ye=!!S.specularMap,me=!!S.specularColorMap,Ne=!!S.specularIntensityMap,je=_e&&!!S.transmissionMap,vt=_e&&!!S.thicknessMap,ke=!!S.gradientMap,se=!!S.alphaMap,D=S.alphaTest>0,ae=!!S.alphaHash,le=!!S.extensions,Ae=!!I.attributes.uv1,Me=!!I.attributes.uv2,et=!!I.attributes.uv3;let tt=Cr;return S.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(tt=n.toneMapping),{isWebGL2:c,shaderID:z,shaderType:S.type,shaderName:S.name,vertexShader:q,fragmentShader:K,defines:S.defines,customVertexShaderID:re,customFragmentShaderID:de,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:De,instancing:xe,instancingColor:xe&&V.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:$i,map:we,matcap:We,envMap:H,envMapMode:H&&Y.mapping,envMapCubeUVHeight:N,aoMap:en,lightMap:Se,bumpMap:Pe,normalMap:ge,displacementMap:h&&ct,emissiveMap:Ie,normalMapObjectSpace:ge&&S.normalMapType===DE,normalMapTangentSpace:ge&&S.normalMapType===LE,metalnessMap:R,roughnessMap:T,anisotropy:W,anisotropyMap:ue,clearcoat:ne,clearcoatMap:pe,clearcoatNormalMap:Te,clearcoatRoughnessMap:Oe,iridescence:ee,iridescenceMap:J,iridescenceThicknessMap:$e,sheen:ie,sheenColorMap:He,sheenRoughnessMap:Re,specularMap:ye,specularColorMap:me,specularIntensityMap:Ne,transmission:_e,transmissionMap:je,thicknessMap:vt,gradientMap:ke,opaque:S.transparent===!1&&S.blending===ho,alphaMap:se,alphaTest:D,alphaHash:ae,combine:S.combine,mapUv:we&&g(S.map.channel),aoMapUv:en&&g(S.aoMap.channel),lightMapUv:Se&&g(S.lightMap.channel),bumpMapUv:Pe&&g(S.bumpMap.channel),normalMapUv:ge&&g(S.normalMap.channel),displacementMapUv:ct&&g(S.displacementMap.channel),emissiveMapUv:Ie&&g(S.emissiveMap.channel),metalnessMapUv:R&&g(S.metalnessMap.channel),roughnessMapUv:T&&g(S.roughnessMap.channel),anisotropyMapUv:ue&&g(S.anisotropyMap.channel),clearcoatMapUv:pe&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Te&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:He&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Re&&g(S.sheenRoughnessMap.channel),specularMapUv:ye&&g(S.specularMap.channel),specularColorMapUv:me&&g(S.specularColorMap.channel),specularIntensityMapUv:Ne&&g(S.specularIntensityMap.channel),transmissionMapUv:je&&g(S.transmissionMap.channel),thicknessMapUv:vt&&g(S.thicknessMap.channel),alphaMapUv:se&&g(S.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ge||W),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:Ae,vertexUv2s:Me,vertexUv3s:et,pointsUvs:V.isPoints===!0&&!!I.attributes.uv&&(we||se),fog:!!b,useFog:S.fog===!0,fogExp2:b&&b.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:V.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Q,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:tt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:we&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===st,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Bi,flipSided:S.side===vn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:le&&S.extensions.derivatives===!0,extensionFragDepth:le&&S.extensions.fragDepth===!0,extensionDrawBuffers:le&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const B in S.defines)A.push(B),A.push(S.defines[B]);return S.isRawShaderMaterial===!1&&(_(A,S),v(A,S),A.push(n.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function _(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function v(S,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const A=x[S.type];let B;if(A){const U=Mi[A];B=sT.clone(U.uniforms)}else B=S.uniforms;return B}function E(S,A){let B;for(let U=0,V=u.length;U<V;U++){const b=u[U];if(b.cacheKey===A){B=b,++B.usedTimes;break}}return B===void 0&&(B=new yC(n,A,S,s),u.push(B)),B}function w(S){if(--S.usedTimes===0){const A=u.indexOf(S);u[A]=u[u.length-1],u.pop(),S.destroy()}}function M(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:E,releaseProgram:w,releaseShaderCache:M,programs:u,dispose:L}}function wC(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function AC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function jg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Yg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,p,x,g,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=g,f.group=m),e++,f}function a(d,h,p,x,g,m){const f=o(d,h,p,x,g,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,h,p,x,g,m){const f=o(d,h,p,x,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function u(d,h){t.length>1&&t.sort(d||AC),i.length>1&&i.sort(h||jg),r.length>1&&r.sort(h||jg)}function c(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function CC(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Yg,n.set(i,[o])):r>=s.length?(o=new Yg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function RC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new Ye};break;case"SpotLight":t={position:new j,direction:new j,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function PC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let bC=0;function LC(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function DC(n,e){const t=new RC,i=PC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new j);const s=new j,o=new Ft,a=new Ft;function l(c,d){let h=0,p=0,x=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let g=0,m=0,f=0,_=0,v=0,y=0,E=0,w=0,M=0,L=0,S=0;c.sort(LC);const A=d===!0?Math.PI:1;for(let U=0,V=c.length;U<V;U++){const b=c[U],I=b.color,O=b.intensity,Y=b.distance,N=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=I.r*O*A,p+=I.g*O*A,x+=I.b*O*A;else if(b.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(b.sh.coefficients[z],O);S++}else if(b.isDirectionalLight){const z=t.get(b);if(z.color.copy(b.color).multiplyScalar(b.intensity*A),b.castShadow){const k=b.shadow,Z=i.get(b);Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,r.directionalShadow[g]=Z,r.directionalShadowMap[g]=N,r.directionalShadowMatrix[g]=b.shadow.matrix,y++}r.directional[g]=z,g++}else if(b.isSpotLight){const z=t.get(b);z.position.setFromMatrixPosition(b.matrixWorld),z.color.copy(I).multiplyScalar(O*A),z.distance=Y,z.coneCos=Math.cos(b.angle),z.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),z.decay=b.decay,r.spot[f]=z;const k=b.shadow;if(b.map&&(r.spotLightMap[M]=b.map,M++,k.updateMatrices(b),b.castShadow&&L++),r.spotLightMatrix[f]=k.matrix,b.castShadow){const Z=i.get(b);Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,r.spotShadow[f]=Z,r.spotShadowMap[f]=N,w++}f++}else if(b.isRectAreaLight){const z=t.get(b);z.color.copy(I).multiplyScalar(O),z.halfWidth.set(b.width*.5,0,0),z.halfHeight.set(0,b.height*.5,0),r.rectArea[_]=z,_++}else if(b.isPointLight){const z=t.get(b);if(z.color.copy(b.color).multiplyScalar(b.intensity*A),z.distance=b.distance,z.decay=b.decay,b.castShadow){const k=b.shadow,Z=i.get(b);Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,Z.shadowCameraNear=k.camera.near,Z.shadowCameraFar=k.camera.far,r.pointShadow[m]=Z,r.pointShadowMap[m]=N,r.pointShadowMatrix[m]=b.shadow.matrix,E++}r.point[m]=z,m++}else if(b.isHemisphereLight){const z=t.get(b);z.skyColor.copy(b.color).multiplyScalar(O*A),z.groundColor.copy(b.groundColor).multiplyScalar(O*A),r.hemi[v]=z,v++}}_>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=x;const B=r.hash;(B.directionalLength!==g||B.pointLength!==m||B.spotLength!==f||B.rectAreaLength!==_||B.hemiLength!==v||B.numDirectionalShadows!==y||B.numPointShadows!==E||B.numSpotShadows!==w||B.numSpotMaps!==M||B.numLightProbes!==S)&&(r.directional.length=g,r.spot.length=f,r.rectArea.length=_,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=w+M-L,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=S,B.directionalLength=g,B.pointLength=m,B.spotLength=f,B.rectAreaLength=_,B.hemiLength=v,B.numDirectionalShadows=y,B.numPointShadows=E,B.numSpotShadows=w,B.numSpotMaps=M,B.numLightProbes=S,r.version=bC++)}function u(c,d){let h=0,p=0,x=0,g=0,m=0;const f=d.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){const y=c[_];if(y.isDirectionalLight){const E=r.directional[h];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),h++}else if(y.isSpotLight){const E=r.spot[x];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),x++}else if(y.isRectAreaLight){const E=r.rectArea[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const E=r.point[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const E=r.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(f),m++}}}return{setup:l,setupView:u,state:r}}function qg(n,e){const t=new DC(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function NC(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new qg(n,e),t.set(s,[l])):o>=a.length?(l=new qg(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class UC extends el{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IC extends el{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const OC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kC(n,e,t){let i=new J0;const r=new Ze,s=new Ze,o=new Ht,a=new UC({depthPacking:bE}),l=new IC,u={},c=t.maxTextureSize,d={[Nr]:vn,[vn]:Nr,[Bi]:Bi},h=new Ms({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:OC,fragmentShader:FC}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new Ji;x.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new pr(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=R0;let f=this.type;this.render=function(w,M,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=n.getRenderTarget(),A=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Ar),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const V=f!==Ii&&this.type===Ii,b=f===Ii&&this.type!==Ii;for(let I=0,O=w.length;I<O;I++){const Y=w[I],N=Y.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const z=N.getFrameExtents();if(r.multiply(z),s.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/z.x),r.x=s.x*z.x,N.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/z.y),r.y=s.y*z.y,N.mapSize.y=s.y)),N.map===null||V===!0||b===!0){const Z=this.type!==Ii?{minFilter:on,magFilter:on}:{};N.map!==null&&N.map.dispose(),N.map=new Ss(r.x,r.y,Z),N.map.texture.name=Y.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const k=N.getViewportCount();for(let Z=0;Z<k;Z++){const Q=N.getViewport(Z);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),U.viewport(o),N.updateMatrices(Y,Z),i=N.getFrustum(),y(M,L,N.camera,Y,this.type)}N.isPointLightShadow!==!0&&this.type===Ii&&_(N,L),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,A,B)};function _(w,M){const L=e.update(g);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ss(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(M,null,L,h,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(M,null,L,p,g,null)}function v(w,M,L,S){let A=null;const B=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(B!==void 0)A=B;else if(A=L.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const U=A.uuid,V=M.uuid;let b=u[U];b===void 0&&(b={},u[U]=b);let I=b[V];I===void 0&&(I=A.clone(),b[V]=I,M.addEventListener("dispose",E)),A=I}if(A.visible=M.visible,A.wireframe=M.wireframe,S===Ii?A.side=M.shadowSide!==null?M.shadowSide:M.side:A.side=M.shadowSide!==null?M.shadowSide:d[M.side],A.alphaMap=M.alphaMap,A.alphaTest=M.alphaTest,A.map=M.map,A.clipShadows=M.clipShadows,A.clippingPlanes=M.clippingPlanes,A.clipIntersection=M.clipIntersection,A.displacementMap=M.displacementMap,A.displacementScale=M.displacementScale,A.displacementBias=M.displacementBias,A.wireframeLinewidth=M.wireframeLinewidth,A.linewidth=M.linewidth,L.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const U=n.properties.get(A);U.light=L}return A}function y(w,M,L,S,A){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&A===Ii)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const V=e.update(w),b=w.material;if(Array.isArray(b)){const I=V.groups;for(let O=0,Y=I.length;O<Y;O++){const N=I[O],z=b[N.materialIndex];if(z&&z.visible){const k=v(w,z,S,A);w.onBeforeShadow(n,w,M,L,V,k,N),n.renderBufferDirect(L,null,V,k,w,N),w.onAfterShadow(n,w,M,L,V,k,N)}}}else if(b.visible){const I=v(w,b,S,A);w.onBeforeShadow(n,w,M,L,V,I,null),n.renderBufferDirect(L,null,V,I,w,null),w.onAfterShadow(n,w,M,L,V,I,null)}}const U=w.children;for(let V=0,b=U.length;V<b;V++)y(U[V],M,L,S,A)}function E(w){w.target.removeEventListener("dispose",E);for(const L in u){const S=u[L],A=w.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}function zC(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const ae=new Ht;let le=null;const Ae=new Ht(0,0,0,0);return{setMask:function(Me){le!==Me&&!D&&(n.colorMask(Me,Me,Me,Me),le=Me)},setLocked:function(Me){D=Me},setClear:function(Me,et,tt,Dt,tn){tn===!0&&(Me*=Dt,et*=Dt,tt*=Dt),ae.set(Me,et,tt,Dt),Ae.equals(ae)===!1&&(n.clearColor(Me,et,tt,Dt),Ae.copy(ae))},reset:function(){D=!1,le=null,Ae.set(-1,0,0,0)}}}function s(){let D=!1,ae=null,le=null,Ae=null;return{setTest:function(Me){Me?De(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(Me){ae!==Me&&!D&&(n.depthMask(Me),ae=Me)},setFunc:function(Me){if(le!==Me){switch(Me){case sE:n.depthFunc(n.NEVER);break;case oE:n.depthFunc(n.ALWAYS);break;case aE:n.depthFunc(n.LESS);break;case Uu:n.depthFunc(n.LEQUAL);break;case lE:n.depthFunc(n.EQUAL);break;case uE:n.depthFunc(n.GEQUAL);break;case cE:n.depthFunc(n.GREATER);break;case fE:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=Me}},setLocked:function(Me){D=Me},setClear:function(Me){Ae!==Me&&(n.clearDepth(Me),Ae=Me)},reset:function(){D=!1,ae=null,le=null,Ae=null}}}function o(){let D=!1,ae=null,le=null,Ae=null,Me=null,et=null,tt=null,Dt=null,tn=null;return{setTest:function(nt){D||(nt?De(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(nt){ae!==nt&&!D&&(n.stencilMask(nt),ae=nt)},setFunc:function(nt,nn,vi){(le!==nt||Ae!==nn||Me!==vi)&&(n.stencilFunc(nt,nn,vi),le=nt,Ae=nn,Me=vi)},setOp:function(nt,nn,vi){(et!==nt||tt!==nn||Dt!==vi)&&(n.stencilOp(nt,nn,vi),et=nt,tt=nn,Dt=vi)},setLocked:function(nt){D=nt},setClear:function(nt){tn!==nt&&(n.clearStencil(nt),tn=nt)},reset:function(){D=!1,ae=null,le=null,Ae=null,Me=null,et=null,tt=null,Dt=null,tn=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let h={},p={},x=new WeakMap,g=[],m=null,f=!1,_=null,v=null,y=null,E=null,w=null,M=null,L=null,S=new Ye(0,0,0),A=0,B=!1,U=null,V=null,b=null,I=null,O=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,z=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=z>=1):k.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=z>=2);let Z=null,Q={};const q=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),re=new Ht().fromArray(q),de=new Ht().fromArray(K);function he(D,ae,le,Ae){const Me=new Uint8Array(4),et=n.createTexture();n.bindTexture(D,et),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<le;tt++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(ae,0,n.RGBA,1,1,Ae,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(ae+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return et}const xe={};xe[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(xe[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),De(n.DEPTH_TEST),l.setFunc(Uu),Ie(!1),R(Pm),De(n.CULL_FACE),ge(Ar);function De(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function we(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function We(D,ae){return p[D]!==ae?(n.bindFramebuffer(D,ae),p[D]=ae,i&&(D===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ae),D===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ae)),!0):!1}function H(D,ae){let le=g,Ae=!1;if(D)if(le=x.get(ae),le===void 0&&(le=[],x.set(ae,le)),D.isWebGLMultipleRenderTargets){const Me=D.texture;if(le.length!==Me.length||le[0]!==n.COLOR_ATTACHMENT0){for(let et=0,tt=Me.length;et<tt;et++)le[et]=n.COLOR_ATTACHMENT0+et;le.length=Me.length,Ae=!0}}else le[0]!==n.COLOR_ATTACHMENT0&&(le[0]=n.COLOR_ATTACHMENT0,Ae=!0);else le[0]!==n.BACK&&(le[0]=n.BACK,Ae=!0);Ae&&(t.isWebGL2?n.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function en(D){return m!==D?(n.useProgram(D),m=D,!0):!1}const Se={[es]:n.FUNC_ADD,[WM]:n.FUNC_SUBTRACT,[XM]:n.FUNC_REVERSE_SUBTRACT};if(i)Se[Nm]=n.MIN,Se[Um]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(Se[Nm]=D.MIN_EXT,Se[Um]=D.MAX_EXT)}const Pe={[jM]:n.ZERO,[YM]:n.ONE,[qM]:n.SRC_COLOR,[Ad]:n.SRC_ALPHA,[eE]:n.SRC_ALPHA_SATURATE,[QM]:n.DST_COLOR,[KM]:n.DST_ALPHA,[$M]:n.ONE_MINUS_SRC_COLOR,[Cd]:n.ONE_MINUS_SRC_ALPHA,[JM]:n.ONE_MINUS_DST_COLOR,[ZM]:n.ONE_MINUS_DST_ALPHA,[tE]:n.CONSTANT_COLOR,[nE]:n.ONE_MINUS_CONSTANT_COLOR,[iE]:n.CONSTANT_ALPHA,[rE]:n.ONE_MINUS_CONSTANT_ALPHA};function ge(D,ae,le,Ae,Me,et,tt,Dt,tn,nt){if(D===Ar){f===!0&&(we(n.BLEND),f=!1);return}if(f===!1&&(De(n.BLEND),f=!0),D!==VM){if(D!==_||nt!==B){if((v!==es||w!==es)&&(n.blendEquation(n.FUNC_ADD),v=es,w=es),nt)switch(D){case ho:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bm:n.blendFunc(n.ONE,n.ONE);break;case Lm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ho:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bm:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Lm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,E=null,M=null,L=null,S.set(0,0,0),A=0,_=D,B=nt}return}Me=Me||ae,et=et||le,tt=tt||Ae,(ae!==v||Me!==w)&&(n.blendEquationSeparate(Se[ae],Se[Me]),v=ae,w=Me),(le!==y||Ae!==E||et!==M||tt!==L)&&(n.blendFuncSeparate(Pe[le],Pe[Ae],Pe[et],Pe[tt]),y=le,E=Ae,M=et,L=tt),(Dt.equals(S)===!1||tn!==A)&&(n.blendColor(Dt.r,Dt.g,Dt.b,tn),S.copy(Dt),A=tn),_=D,B=!1}function ct(D,ae){D.side===Bi?we(n.CULL_FACE):De(n.CULL_FACE);let le=D.side===vn;ae&&(le=!le),Ie(le),D.blending===ho&&D.transparent===!1?ge(Ar):ge(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const Ae=D.stencilWrite;u.setTest(Ae),Ae&&(u.setMask(D.stencilWriteMask),u.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),u.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),W(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?De(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(D){U!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),U=D)}function R(D){D!==BM?(De(n.CULL_FACE),D!==V&&(D===Pm?n.cullFace(n.BACK):D===HM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),V=D}function T(D){D!==b&&(N&&n.lineWidth(D),b=D)}function W(D,ae,le){D?(De(n.POLYGON_OFFSET_FILL),(I!==ae||O!==le)&&(n.polygonOffset(ae,le),I=ae,O=le)):we(n.POLYGON_OFFSET_FILL)}function ne(D){D?De(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function ee(D){D===void 0&&(D=n.TEXTURE0+Y-1),Z!==D&&(n.activeTexture(D),Z=D)}function ie(D,ae,le){le===void 0&&(Z===null?le=n.TEXTURE0+Y-1:le=Z);let Ae=Q[le];Ae===void 0&&(Ae={type:void 0,texture:void 0},Q[le]=Ae),(Ae.type!==D||Ae.texture!==ae)&&(Z!==le&&(n.activeTexture(le),Z=le),n.bindTexture(D,ae||xe[D]),Ae.type=D,Ae.texture=ae)}function _e(){const D=Q[Z];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ue(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function He(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(D){re.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),re.copy(D))}function je(D){de.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),de.copy(D))}function vt(D,ae){let le=d.get(ae);le===void 0&&(le=new WeakMap,d.set(ae,le));let Ae=le.get(D);Ae===void 0&&(Ae=n.getUniformBlockIndex(ae,D.name),le.set(D,Ae))}function ke(D,ae){const Ae=d.get(ae).get(D);c.get(ae)!==Ae&&(n.uniformBlockBinding(ae,Ae,D.__bindingPointIndex),c.set(ae,Ae))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Z=null,Q={},p={},x=new WeakMap,g=[],m=null,f=!1,_=null,v=null,y=null,E=null,w=null,M=null,L=null,S=new Ye(0,0,0),A=0,B=!1,U=null,V=null,b=null,I=null,O=null,re.set(0,0,n.canvas.width,n.canvas.height),de.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:De,disable:we,bindFramebuffer:We,drawBuffers:H,useProgram:en,setBlending:ge,setMaterial:ct,setFlipSided:Ie,setCullFace:R,setLineWidth:T,setPolygonOffset:W,setScissorTest:ne,activeTexture:ee,bindTexture:ie,unbindTexture:_e,compressedTexImage2D:ue,compressedTexImage3D:pe,texImage2D:ye,texImage3D:me,updateUBOMapping:vt,uniformBlockBinding:ke,texStorage2D:He,texStorage3D:Re,texSubImage2D:Te,texSubImage3D:Oe,compressedTexSubImage2D:J,compressedTexSubImage3D:$e,scissor:Ne,viewport:je,reset:se}}function BC(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,T){return p?new OffscreenCanvas(R,T):zu("canvas")}function g(R,T,W,ne){let ee=1;if((R.width>ne||R.height>ne)&&(ee=ne/Math.max(R.width,R.height)),ee<1||T===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ie=T?Ud:Math.floor,_e=ie(ee*R.width),ue=ie(ee*R.height);d===void 0&&(d=x(_e,ue));const pe=W?x(_e,ue):d;return pe.width=_e,pe.height=ue,pe.getContext("2d").drawImage(R,0,0,_e,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+_e+"x"+ue+")."),pe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return cg(R.width)&&cg(R.height)}function f(R){return a?!1:R.wrapS!==di||R.wrapT!==di||R.minFilter!==on&&R.minFilter!==Yn}function _(R,T){return R.generateMipmaps&&T&&R.minFilter!==on&&R.minFilter!==Yn}function v(R){n.generateMipmap(R)}function y(R,T,W,ne,ee=!1){if(a===!1)return T;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ie=T;if(T===n.RED&&(W===n.FLOAT&&(ie=n.R32F),W===n.HALF_FLOAT&&(ie=n.R16F),W===n.UNSIGNED_BYTE&&(ie=n.R8)),T===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(ie=n.R8UI),W===n.UNSIGNED_SHORT&&(ie=n.R16UI),W===n.UNSIGNED_INT&&(ie=n.R32UI),W===n.BYTE&&(ie=n.R8I),W===n.SHORT&&(ie=n.R16I),W===n.INT&&(ie=n.R32I)),T===n.RG&&(W===n.FLOAT&&(ie=n.RG32F),W===n.HALF_FLOAT&&(ie=n.RG16F),W===n.UNSIGNED_BYTE&&(ie=n.RG8)),T===n.RGBA){const _e=ee?Iu:Ke.getTransfer(ne);W===n.FLOAT&&(ie=n.RGBA32F),W===n.HALF_FLOAT&&(ie=n.RGBA16F),W===n.UNSIGNED_BYTE&&(ie=_e===st?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function E(R,T,W){return _(R,W)===!0||R.isFramebufferTexture&&R.minFilter!==on&&R.minFilter!==Yn?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function w(R){return R===on||R===Im||R===Yc?n.NEAREST:n.LINEAR}function M(R){const T=R.target;T.removeEventListener("dispose",M),S(T),T.isVideoTexture&&c.delete(T)}function L(R){const T=R.target;T.removeEventListener("dispose",L),B(T)}function S(R){const T=i.get(R);if(T.__webglInit===void 0)return;const W=R.source,ne=h.get(W);if(ne){const ee=ne[T.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&A(R),Object.keys(ne).length===0&&h.delete(W)}i.remove(R)}function A(R){const T=i.get(R);n.deleteTexture(T.__webglTexture);const W=R.source,ne=h.get(W);delete ne[T.__cacheKey],o.memory.textures--}function B(R){const T=R.texture,W=i.get(R),ne=i.get(T);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(W.__webglFramebuffer[ee]))for(let ie=0;ie<W.__webglFramebuffer[ee].length;ie++)n.deleteFramebuffer(W.__webglFramebuffer[ee][ie]);else n.deleteFramebuffer(W.__webglFramebuffer[ee]);W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer[ee])}else{if(Array.isArray(W.__webglFramebuffer))for(let ee=0;ee<W.__webglFramebuffer.length;ee++)n.deleteFramebuffer(W.__webglFramebuffer[ee]);else n.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&n.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let ee=0;ee<W.__webglColorRenderbuffer.length;ee++)W.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(W.__webglColorRenderbuffer[ee]);W.__webglDepthRenderbuffer&&n.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ee=0,ie=T.length;ee<ie;ee++){const _e=i.get(T[ee]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(T[ee])}i.remove(T),i.remove(R)}let U=0;function V(){U=0}function b(){const R=U;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),U+=1,R}function I(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function O(R,T){const W=i.get(R);if(R.isVideoTexture&&ct(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){const ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(W,R,T);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+T)}function Y(R,T){const W=i.get(R);if(R.version>0&&W.__version!==R.version){re(W,R,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+T)}function N(R,T){const W=i.get(R);if(R.version>0&&W.__version!==R.version){re(W,R,T);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+T)}function z(R,T){const W=i.get(R);if(R.version>0&&W.__version!==R.version){de(W,R,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+T)}const k={[bd]:n.REPEAT,[di]:n.CLAMP_TO_EDGE,[Ld]:n.MIRRORED_REPEAT},Z={[on]:n.NEAREST,[Im]:n.NEAREST_MIPMAP_NEAREST,[Yc]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[yE]:n.LINEAR_MIPMAP_NEAREST,[Fa]:n.LINEAR_MIPMAP_LINEAR},Q={[NE]:n.NEVER,[zE]:n.ALWAYS,[UE]:n.LESS,[z0]:n.LEQUAL,[IE]:n.EQUAL,[kE]:n.GEQUAL,[OE]:n.GREATER,[FE]:n.NOTEQUAL};function q(R,T,W){if(W?(n.texParameteri(R,n.TEXTURE_WRAP_S,k[T.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,k[T.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,k[T.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Z[T.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Z[T.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(T.wrapS!==di||T.wrapT!==di)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,w(T.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,w(T.minFilter)),T.minFilter!==on&&T.minFilter!==Yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Q[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===on||T.minFilter!==Yc&&T.minFilter!==Fa||T.type===hr&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===ka&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(n.texParameterf(R,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function K(R,T){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",M));const ne=T.source;let ee=h.get(ne);ee===void 0&&(ee={},h.set(ne,ee));const ie=I(T);if(ie!==R.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ee[ie].usedTimes++;const _e=ee[R.__cacheKey];_e!==void 0&&(ee[R.__cacheKey].usedTimes--,_e.usedTimes===0&&A(T)),R.__cacheKey=ie,R.__webglTexture=ee[ie].texture}return W}function re(R,T,W){let ne=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ne=n.TEXTURE_3D);const ee=K(R,T),ie=T.source;t.bindTexture(ne,R.__webglTexture,n.TEXTURE0+W);const _e=i.get(ie);if(ie.version!==_e.__version||ee===!0){t.activeTexture(n.TEXTURE0+W);const ue=Ke.getPrimaries(Ke.workingColorSpace),pe=T.colorSpace===Kn?null:Ke.getPrimaries(T.colorSpace),Te=T.colorSpace===Kn||ue===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Oe=f(T)&&m(T.image)===!1;let J=g(T.image,Oe,!1,r.maxTextureSize);J=Ie(T,J);const $e=m(J)||a,He=s.convert(T.format,T.colorSpace);let Re=s.convert(T.type),ye=y(T.internalFormat,He,Re,T.colorSpace,T.isVideoTexture);q(ne,T,$e);let me;const Ne=T.mipmaps,je=a&&T.isVideoTexture!==!0&&ye!==F0,vt=_e.__version===void 0||ee===!0,ke=E(T,J,$e);if(T.isDepthTexture)ye=n.DEPTH_COMPONENT,a?T.type===hr?ye=n.DEPTH_COMPONENT32F:T.type===dr?ye=n.DEPTH_COMPONENT24:T.type===ls?ye=n.DEPTH24_STENCIL8:ye=n.DEPTH_COMPONENT16:T.type===hr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===us&&ye===n.DEPTH_COMPONENT&&T.type!==jh&&T.type!==dr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=dr,Re=s.convert(T.type)),T.format===Co&&ye===n.DEPTH_COMPONENT&&(ye=n.DEPTH_STENCIL,T.type!==ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=ls,Re=s.convert(T.type))),vt&&(je?t.texStorage2D(n.TEXTURE_2D,1,ye,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,ye,J.width,J.height,0,He,Re,null));else if(T.isDataTexture)if(Ne.length>0&&$e){je&&vt&&t.texStorage2D(n.TEXTURE_2D,ke,ye,Ne[0].width,Ne[0].height);for(let se=0,D=Ne.length;se<D;se++)me=Ne[se],je?t.texSubImage2D(n.TEXTURE_2D,se,0,0,me.width,me.height,He,Re,me.data):t.texImage2D(n.TEXTURE_2D,se,ye,me.width,me.height,0,He,Re,me.data);T.generateMipmaps=!1}else je?(vt&&t.texStorage2D(n.TEXTURE_2D,ke,ye,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,He,Re,J.data)):t.texImage2D(n.TEXTURE_2D,0,ye,J.width,J.height,0,He,Re,J.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){je&&vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,ye,Ne[0].width,Ne[0].height,J.depth);for(let se=0,D=Ne.length;se<D;se++)me=Ne[se],T.format!==hi?He!==null?je?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,me.width,me.height,J.depth,He,me.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,ye,me.width,me.height,J.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,me.width,me.height,J.depth,He,Re,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,ye,me.width,me.height,J.depth,0,He,Re,me.data)}else{je&&vt&&t.texStorage2D(n.TEXTURE_2D,ke,ye,Ne[0].width,Ne[0].height);for(let se=0,D=Ne.length;se<D;se++)me=Ne[se],T.format!==hi?He!==null?je?t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,me.width,me.height,He,me.data):t.compressedTexImage2D(n.TEXTURE_2D,se,ye,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(n.TEXTURE_2D,se,0,0,me.width,me.height,He,Re,me.data):t.texImage2D(n.TEXTURE_2D,se,ye,me.width,me.height,0,He,Re,me.data)}else if(T.isDataArrayTexture)je?(vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,ye,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,He,Re,J.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,J.width,J.height,J.depth,0,He,Re,J.data);else if(T.isData3DTexture)je?(vt&&t.texStorage3D(n.TEXTURE_3D,ke,ye,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,He,Re,J.data)):t.texImage3D(n.TEXTURE_3D,0,ye,J.width,J.height,J.depth,0,He,Re,J.data);else if(T.isFramebufferTexture){if(vt)if(je)t.texStorage2D(n.TEXTURE_2D,ke,ye,J.width,J.height);else{let se=J.width,D=J.height;for(let ae=0;ae<ke;ae++)t.texImage2D(n.TEXTURE_2D,ae,ye,se,D,0,He,Re,null),se>>=1,D>>=1}}else if(Ne.length>0&&$e){je&&vt&&t.texStorage2D(n.TEXTURE_2D,ke,ye,Ne[0].width,Ne[0].height);for(let se=0,D=Ne.length;se<D;se++)me=Ne[se],je?t.texSubImage2D(n.TEXTURE_2D,se,0,0,He,Re,me):t.texImage2D(n.TEXTURE_2D,se,ye,He,Re,me);T.generateMipmaps=!1}else je?(vt&&t.texStorage2D(n.TEXTURE_2D,ke,ye,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,He,Re,J)):t.texImage2D(n.TEXTURE_2D,0,ye,He,Re,J);_(T,$e)&&v(ne),_e.__version=ie.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function de(R,T,W){if(T.image.length!==6)return;const ne=K(R,T),ee=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+W);const ie=i.get(ee);if(ee.version!==ie.__version||ne===!0){t.activeTexture(n.TEXTURE0+W);const _e=Ke.getPrimaries(Ke.workingColorSpace),ue=T.colorSpace===Kn?null:Ke.getPrimaries(T.colorSpace),pe=T.colorSpace===Kn||_e===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Te=T.isCompressedTexture||T.image[0].isCompressedTexture,Oe=T.image[0]&&T.image[0].isDataTexture,J=[];for(let se=0;se<6;se++)!Te&&!Oe?J[se]=g(T.image[se],!1,!0,r.maxCubemapSize):J[se]=Oe?T.image[se].image:T.image[se],J[se]=Ie(T,J[se]);const $e=J[0],He=m($e)||a,Re=s.convert(T.format,T.colorSpace),ye=s.convert(T.type),me=y(T.internalFormat,Re,ye,T.colorSpace),Ne=a&&T.isVideoTexture!==!0,je=ie.__version===void 0||ne===!0;let vt=E(T,$e,He);q(n.TEXTURE_CUBE_MAP,T,He);let ke;if(Te){Ne&&je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,vt,me,$e.width,$e.height);for(let se=0;se<6;se++){ke=J[se].mipmaps;for(let D=0;D<ke.length;D++){const ae=ke[D];T.format!==hi?Re!==null?Ne?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,D,0,0,ae.width,ae.height,Re,ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,D,me,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,D,0,0,ae.width,ae.height,Re,ye,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,D,me,ae.width,ae.height,0,Re,ye,ae.data)}}}else{ke=T.mipmaps,Ne&&je&&(ke.length>0&&vt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,vt,me,J[0].width,J[0].height));for(let se=0;se<6;se++)if(Oe){Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,J[se].width,J[se].height,Re,ye,J[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,me,J[se].width,J[se].height,0,Re,ye,J[se].data);for(let D=0;D<ke.length;D++){const le=ke[D].image[se].image;Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,D+1,0,0,le.width,le.height,Re,ye,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,D+1,me,le.width,le.height,0,Re,ye,le.data)}}else{Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Re,ye,J[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,me,Re,ye,J[se]);for(let D=0;D<ke.length;D++){const ae=ke[D];Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,D+1,0,0,Re,ye,ae.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,D+1,me,Re,ye,ae.image[se])}}}_(T,He)&&v(n.TEXTURE_CUBE_MAP),ie.__version=ee.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function he(R,T,W,ne,ee,ie){const _e=s.convert(W.format,W.colorSpace),ue=s.convert(W.type),pe=y(W.internalFormat,_e,ue,W.colorSpace);if(!i.get(T).__hasExternalTextures){const Oe=Math.max(1,T.width>>ie),J=Math.max(1,T.height>>ie);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,ie,pe,Oe,J,T.depth,0,_e,ue,null):t.texImage2D(ee,ie,pe,Oe,J,0,_e,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ge(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,ee,i.get(W).__webglTexture,0,Pe(T)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,ee,i.get(W).__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(R,T,W){if(n.bindRenderbuffer(n.RENDERBUFFER,R),T.depthBuffer&&!T.stencilBuffer){let ne=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(W||ge(T)){const ee=T.depthTexture;ee&&ee.isDepthTexture&&(ee.type===hr?ne=n.DEPTH_COMPONENT32F:ee.type===dr&&(ne=n.DEPTH_COMPONENT24));const ie=Pe(T);ge(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,ne,T.width,T.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,ne,T.width,T.height)}else n.renderbufferStorage(n.RENDERBUFFER,ne,T.width,T.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(T.depthBuffer&&T.stencilBuffer){const ne=Pe(T);W&&ge(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,T.width,T.height):ge(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{const ne=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ee=0;ee<ne.length;ee++){const ie=ne[ee],_e=s.convert(ie.format,ie.colorSpace),ue=s.convert(ie.type),pe=y(ie.internalFormat,_e,ue,ie.colorSpace),Te=Pe(T);W&&ge(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,pe,T.width,T.height):ge(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,pe,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,pe,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),O(T.depthTexture,0);const ne=i.get(T.depthTexture).__webglTexture,ee=Pe(T);if(T.depthTexture.format===us)ge(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(T.depthTexture.format===Co)ge(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function we(R){const T=i.get(R),W=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");De(T.__webglFramebuffer,R)}else if(W){T.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ne]),T.__webglDepthbuffer[ne]=n.createRenderbuffer(),xe(T.__webglDepthbuffer[ne],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),xe(T.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(R,T,W){const ne=i.get(R);T!==void 0&&he(ne.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&we(R)}function H(R){const T=R.texture,W=i.get(R),ne=i.get(T);R.addEventListener("dispose",L),R.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=T.version,o.memory.textures++);const ee=R.isWebGLCubeRenderTarget===!0,ie=R.isWebGLMultipleRenderTargets===!0,_e=m(R)||a;if(ee){W.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[ue]=[];for(let pe=0;pe<T.mipmaps.length;pe++)W.__webglFramebuffer[ue][pe]=n.createFramebuffer()}else W.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let ue=0;ue<T.mipmaps.length;ue++)W.__webglFramebuffer[ue]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(ie)if(r.drawBuffers){const ue=R.texture;for(let pe=0,Te=ue.length;pe<Te;pe++){const Oe=i.get(ue[pe]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&ge(R)===!1){const ue=ie?T:[T];W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let pe=0;pe<ue.length;pe++){const Te=ue[pe];W.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[pe]);const Oe=s.convert(Te.format,Te.colorSpace),J=s.convert(Te.type),$e=y(Te.internalFormat,Oe,J,Te.colorSpace,R.isXRRenderTarget===!0),He=Pe(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,He,$e,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,W.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),xe(W.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),q(n.TEXTURE_CUBE_MAP,T,_e);for(let ue=0;ue<6;ue++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let pe=0;pe<T.mipmaps.length;pe++)he(W.__webglFramebuffer[ue][pe],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,pe);else he(W.__webglFramebuffer[ue],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);_(T,_e)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const ue=R.texture;for(let pe=0,Te=ue.length;pe<Te;pe++){const Oe=ue[pe],J=i.get(Oe);t.bindTexture(n.TEXTURE_2D,J.__webglTexture),q(n.TEXTURE_2D,Oe,_e),he(W.__webglFramebuffer,R,Oe,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),_(Oe,_e)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ue=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,ne.__webglTexture),q(ue,T,_e),a&&T.mipmaps&&T.mipmaps.length>0)for(let pe=0;pe<T.mipmaps.length;pe++)he(W.__webglFramebuffer[pe],R,T,n.COLOR_ATTACHMENT0,ue,pe);else he(W.__webglFramebuffer,R,T,n.COLOR_ATTACHMENT0,ue,0);_(T,_e)&&v(ue),t.unbindTexture()}R.depthBuffer&&we(R)}function en(R){const T=m(R)||a,W=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ne=0,ee=W.length;ne<ee;ne++){const ie=W[ne];if(_(ie,T)){const _e=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ue=i.get(ie).__webglTexture;t.bindTexture(_e,ue),v(_e),t.unbindTexture()}}}function Se(R){if(a&&R.samples>0&&ge(R)===!1){const T=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],W=R.width,ne=R.height;let ee=n.COLOR_BUFFER_BIT;const ie=[],_e=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(R),pe=R.isWebGLMultipleRenderTargets===!0;if(pe)for(let Te=0;Te<T.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Te=0;Te<T.length;Te++){ie.push(n.COLOR_ATTACHMENT0+Te),R.depthBuffer&&ie.push(_e);const Oe=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(Oe===!1&&(R.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),pe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[Te]),Oe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[_e]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_e])),pe){const J=i.get(T[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,W,ne,0,0,W,ne,ee,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Te=0;Te<T.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,ue.__webglColorRenderbuffer[Te]);const Oe=i.get(T[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,Oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Pe(R){return Math.min(r.maxSamples,R.samples)}function ge(R){const T=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ct(R){const T=o.render.frame;c.get(R)!==T&&(c.set(R,T),R.update())}function Ie(R,T){const W=R.colorSpace,ne=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Dd||W!==$i&&W!==Kn&&(Ke.getTransfer(W)===st?a===!1?e.has("EXT_sRGB")===!0&&ne===hi?(R.format=Dd,R.minFilter=Yn,R.generateMipmaps=!1):T=H0.sRGBToLinear(T):(ne!==hi||ee!==Rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),T}this.allocateTextureUnit=b,this.resetTextureUnits=V,this.setTexture2D=O,this.setTexture2DArray=Y,this.setTexture3D=N,this.setTextureCube=z,this.rebindTextures=We,this.setupRenderTarget=H,this.updateRenderTargetMipmap=en,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=he,this.useMultisampledRTT=ge}function HC(n,e,t){const i=t.isWebGL2;function r(s,o=Kn){let a;const l=Ke.getTransfer(o);if(s===Rr)return n.UNSIGNED_BYTE;if(s===D0)return n.UNSIGNED_SHORT_4_4_4_4;if(s===N0)return n.UNSIGNED_SHORT_5_5_5_1;if(s===SE)return n.BYTE;if(s===ME)return n.SHORT;if(s===jh)return n.UNSIGNED_SHORT;if(s===L0)return n.INT;if(s===dr)return n.UNSIGNED_INT;if(s===hr)return n.FLOAT;if(s===ka)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===EE)return n.ALPHA;if(s===hi)return n.RGBA;if(s===TE)return n.LUMINANCE;if(s===wE)return n.LUMINANCE_ALPHA;if(s===us)return n.DEPTH_COMPONENT;if(s===Co)return n.DEPTH_STENCIL;if(s===Dd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===AE)return n.RED;if(s===U0)return n.RED_INTEGER;if(s===CE)return n.RG;if(s===I0)return n.RG_INTEGER;if(s===O0)return n.RGBA_INTEGER;if(s===qc||s===$c||s===Kc||s===Zc)if(l===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===qc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$c)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Kc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===qc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$c)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Kc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Om||s===Fm||s===km||s===zm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Om)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===km)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===F0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Bm||s===Hm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Bm)return l===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Hm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gm||s===Vm||s===Wm||s===Xm||s===jm||s===Ym||s===qm||s===$m||s===Km||s===Zm||s===Qm||s===Jm||s===eg||s===tg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Gm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Vm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Wm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===jm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ym)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$m)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Km)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Zm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Jm)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===eg)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===tg)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Qc||s===ng||s===ig)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Qc)return l===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ng)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ig)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===RE||s===rg||s===sg||s===og)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Qc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===rg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===sg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===og)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ls?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class GC extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wl extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VC={type:"move"};class Tf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),f=this._getHandJoint(u,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),p=.02,x=.005;u.inputState.pinching&&h>p+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(VC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Wl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class WC extends ko{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,p=null,x=null;const g=t.getContextAttributes();let m=null,f=null;const _=[],v=[],y=new Ze;let E=null;const w=new qn;w.layers.enable(1),w.viewport=new Ht;const M=new qn;M.layers.enable(2),M.viewport=new Ht;const L=[w,M],S=new GC;S.layers.enable(1),S.layers.enable(2);let A=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=_[q];return K===void 0&&(K=new Tf,_[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=_[q];return K===void 0&&(K=new Tf,_[q]=K),K.getGripSpace()},this.getHand=function(q){let K=_[q];return K===void 0&&(K=new Tf,_[q]=K),K.getHandSpace()};function U(q){const K=v.indexOf(q.inputSource);if(K===-1)return;const re=_[K];re!==void 0&&(re.update(q.inputSource,q.frame,u||o),re.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",b);for(let q=0;q<_.length;q++){const K=v[q];K!==null&&(v[q]=null,_[q].disconnect(K))}A=null,B=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,f=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",V),r.addEventListener("inputsourceschange",b),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Ss(p.framebufferWidth,p.framebufferHeight,{format:hi,type:Rr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,re=null,de=null;g.depth&&(de=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?Co:us,re=g.stencil?ls:dr);const he={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(he),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),f=new Ss(h.textureWidth,h.textureHeight,{format:hi,type:Rr,depthTexture:new tx(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const xe=e.properties.get(f);xe.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function b(q){for(let K=0;K<q.removed.length;K++){const re=q.removed[K],de=v.indexOf(re);de>=0&&(v[de]=null,_[de].disconnect(re))}for(let K=0;K<q.added.length;K++){const re=q.added[K];let de=v.indexOf(re);if(de===-1){for(let xe=0;xe<_.length;xe++)if(xe>=v.length){v.push(re),de=xe;break}else if(v[xe]===null){v[xe]=re,de=xe;break}if(de===-1)break}const he=_[de];he&&he.connect(re)}}const I=new j,O=new j;function Y(q,K,re){I.setFromMatrixPosition(K.matrixWorld),O.setFromMatrixPosition(re.matrixWorld);const de=I.distanceTo(O),he=K.projectionMatrix.elements,xe=re.projectionMatrix.elements,De=he[14]/(he[10]-1),we=he[14]/(he[10]+1),We=(he[9]+1)/he[5],H=(he[9]-1)/he[5],en=(he[8]-1)/he[0],Se=(xe[8]+1)/xe[0],Pe=De*en,ge=De*Se,ct=de/(-en+Se),Ie=ct*-en;K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ie),q.translateZ(ct),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const R=De+ct,T=we+ct,W=Pe-Ie,ne=ge+(de-Ie),ee=We*we/T*R,ie=H*we/T*R;q.projectionMatrix.makePerspective(W,ne,ee,ie,R,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function N(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;S.near=M.near=w.near=q.near,S.far=M.far=w.far=q.far,(A!==S.near||B!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,B=S.far);const K=q.parent,re=S.cameras;N(S,K);for(let de=0;de<re.length;de++)N(re[de],K);re.length===2?Y(S,w,M):S.projectionMatrix.copy(w.projectionMatrix),z(q,S,K)};function z(q,K,re){re===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(re.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Nd*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)};let k=null;function Z(q,K){if(c=K.getViewerPose(u||o),x=K,c!==null){const re=c.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let de=!1;re.length!==S.cameras.length&&(S.cameras.length=0,de=!0);for(let he=0;he<re.length;he++){const xe=re[he];let De=null;if(p!==null)De=p.getViewport(xe);else{const We=d.getViewSubImage(h,xe);De=We.viewport,he===0&&(e.setRenderTargetTextures(f,We.colorTexture,h.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(f))}let we=L[he];we===void 0&&(we=new qn,we.layers.enable(he),we.viewport=new Ht,L[he]=we),we.matrix.fromArray(xe.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(xe.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(De.x,De.y,De.width,De.height),he===0&&(S.matrix.copy(we.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),de===!0&&S.cameras.push(we)}}for(let re=0;re<_.length;re++){const de=v[re],he=_[re];de!==null&&he!==void 0&&he.update(de,K,u||o)}k&&k(q,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),x=null}const Q=new ex;Q.setAnimationLoop(Z),this.setAnimationLoop=function(q){k=q},this.dispose=function(){}}}function XC(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,K0(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,v,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),x(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,v):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===vn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===vn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===vn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function jC(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){const y=v.program;i.uniformBlockBinding(_,y)}function u(_,v){let y=r[_.id];y===void 0&&(x(_),y=c(_),r[_.id]=y,_.addEventListener("dispose",m));const E=v.program;i.updateUBOMapping(_,E);const w=e.render.frame;s[_.id]!==w&&(h(_),s[_.id]=w)}function c(_){const v=d();_.__bindingPointIndex=v;const y=n.createBuffer(),E=_.__size,w=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,E,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=r[_.id],y=_.uniforms,E=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let w=0,M=y.length;w<M;w++){const L=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,A=L.length;S<A;S++){const B=L[S];if(p(B,w,S,E)===!0){const U=B.__offset,V=Array.isArray(B.value)?B.value:[B.value];let b=0;for(let I=0;I<V.length;I++){const O=V[I],Y=g(O);typeof O=="number"||typeof O=="boolean"?(B.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,U+b,B.__data)):O.isMatrix3?(B.__data[0]=O.elements[0],B.__data[1]=O.elements[1],B.__data[2]=O.elements[2],B.__data[3]=0,B.__data[4]=O.elements[3],B.__data[5]=O.elements[4],B.__data[6]=O.elements[5],B.__data[7]=0,B.__data[8]=O.elements[6],B.__data[9]=O.elements[7],B.__data[10]=O.elements[8],B.__data[11]=0):(O.toArray(B.__data,b),b+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,B.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,v,y,E){const w=_.value,M=v+"_"+y;if(E[M]===void 0)return typeof w=="number"||typeof w=="boolean"?E[M]=w:E[M]=w.clone(),!0;{const L=E[M];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return E[M]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function x(_){const v=_.uniforms;let y=0;const E=16;for(let M=0,L=v.length;M<L;M++){const S=Array.isArray(v[M])?v[M]:[v[M]];for(let A=0,B=S.length;A<B;A++){const U=S[A],V=Array.isArray(U.value)?U.value:[U.value];for(let b=0,I=V.length;b<I;b++){const O=V[b],Y=g(O),N=y%E;N!==0&&E-N<Y.boundary&&(y+=E-N),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=Y.storage}}}const w=y%E;return w>0&&(y+=E-w),_.__size=y,_.__cache={},this}function g(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class ax{constructor(e={}){const{canvas:t=HE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),x=new Int32Array(4);let g=null,m=null;const f=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bt,this._useLegacyLights=!1,this.toneMapping=Cr,this.toneMappingExposure=1;const v=this;let y=!1,E=0,w=0,M=null,L=-1,S=null;const A=new Ht,B=new Ht;let U=null;const V=new Ye(0);let b=0,I=t.width,O=t.height,Y=1,N=null,z=null;const k=new Ht(0,0,I,O),Z=new Ht(0,0,I,O);let Q=!1;const q=new J0;let K=!1,re=!1,de=null;const he=new Ft,xe=new Ze,De=new j,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return M===null?Y:1}let H=i;function en(C,F){for(let X=0;X<C.length;X++){const $=C[X],G=t.getContext($,F);if(G!==null)return G}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xh}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",ae,!1),H===null){const F=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&F.shift(),H=en(F,C),H===null)throw en(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Se,Pe,ge,ct,Ie,R,T,W,ne,ee,ie,_e,ue,pe,Te,Oe,J,$e,He,Re,ye,me,Ne,je;function vt(){Se=new nA(H),Pe=new $w(H,Se,e),Se.init(Pe),me=new HC(H,Se,Pe),ge=new zC(H,Se,Pe),ct=new sA(H),Ie=new wC,R=new BC(H,Se,ge,Ie,Pe,me,ct),T=new Zw(v),W=new tA(v),ne=new dT(H,Pe),Ne=new Yw(H,Se,ne,Pe),ee=new iA(H,ne,ct,Ne),ie=new uA(H,ee,ne,ct),He=new lA(H,Pe,R),Oe=new Kw(Ie),_e=new TC(v,T,W,Se,Pe,Ne,Oe),ue=new XC(v,Ie),pe=new CC,Te=new NC(Se,Pe),$e=new jw(v,T,W,ge,ie,h,l),J=new kC(v,ie,Pe),je=new jC(H,ct,Pe,ge),Re=new qw(H,Se,ct,Pe),ye=new rA(H,Se,ct,Pe),ct.programs=_e.programs,v.capabilities=Pe,v.extensions=Se,v.properties=Ie,v.renderLists=pe,v.shadowMap=J,v.state=ge,v.info=ct}vt();const ke=new WC(v,H);this.xr=ke,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=Se.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Se.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(I,O,!1))},this.getSize=function(C){return C.set(I,O)},this.setSize=function(C,F,X=!0){if(ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,O=F,t.width=Math.floor(C*Y),t.height=Math.floor(F*Y),X===!0&&(t.style.width=C+"px",t.style.height=F+"px"),this.setViewport(0,0,C,F)},this.getDrawingBufferSize=function(C){return C.set(I*Y,O*Y).floor()},this.setDrawingBufferSize=function(C,F,X){I=C,O=F,Y=X,t.width=Math.floor(C*X),t.height=Math.floor(F*X),this.setViewport(0,0,C,F)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy(k)},this.setViewport=function(C,F,X,$){C.isVector4?k.set(C.x,C.y,C.z,C.w):k.set(C,F,X,$),ge.viewport(A.copy(k).multiplyScalar(Y).floor())},this.getScissor=function(C){return C.copy(Z)},this.setScissor=function(C,F,X,$){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,F,X,$),ge.scissor(B.copy(Z).multiplyScalar(Y).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(C){ge.setScissorTest(Q=C)},this.setOpaqueSort=function(C){N=C},this.setTransparentSort=function(C){z=C},this.getClearColor=function(C){return C.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(C=!0,F=!0,X=!0){let $=0;if(C){let G=!1;if(M!==null){const ce=M.texture.format;G=ce===O0||ce===I0||ce===U0}if(G){const ce=M.texture.type,ve=ce===Rr||ce===dr||ce===jh||ce===ls||ce===D0||ce===N0,Ee=$e.getClearColor(),Ce=$e.getClearAlpha(),Fe=Ee.r,be=Ee.g,Le=Ee.b;ve?(p[0]=Fe,p[1]=be,p[2]=Le,p[3]=Ce,H.clearBufferuiv(H.COLOR,0,p)):(x[0]=Fe,x[1]=be,x[2]=Le,x[3]=Ce,H.clearBufferiv(H.COLOR,0,x))}else $|=H.COLOR_BUFFER_BIT}F&&($|=H.DEPTH_BUFFER_BIT),X&&($|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),pe.dispose(),Te.dispose(),Ie.dispose(),T.dispose(),W.dispose(),ie.dispose(),Ne.dispose(),je.dispose(),_e.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",tn),ke.removeEventListener("sessionend",nt),de&&(de.dispose(),de=null),nn.stop()};function se(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=ct.autoReset,F=J.enabled,X=J.autoUpdate,$=J.needsUpdate,G=J.type;vt(),ct.autoReset=C,J.enabled=F,J.autoUpdate=X,J.needsUpdate=$,J.type=G}function ae(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function le(C){const F=C.target;F.removeEventListener("dispose",le),Ae(F)}function Ae(C){Me(C),Ie.remove(C)}function Me(C){const F=Ie.get(C).programs;F!==void 0&&(F.forEach(function(X){_e.releaseProgram(X)}),C.isShaderMaterial&&_e.releaseShaderCache(C))}this.renderBufferDirect=function(C,F,X,$,G,ce){F===null&&(F=we);const ve=G.isMesh&&G.matrixWorld.determinant()<0,Ee=ly(C,F,X,$,G);ge.setMaterial($,ve);let Ce=X.index,Fe=1;if($.wireframe===!0){if(Ce=ee.getWireframeAttribute(X),Ce===void 0)return;Fe=2}const be=X.drawRange,Le=X.attributes.position;let Mt=be.start*Fe,wn=(be.start+be.count)*Fe;ce!==null&&(Mt=Math.max(Mt,ce.start*Fe),wn=Math.min(wn,(ce.start+ce.count)*Fe)),Ce!==null?(Mt=Math.max(Mt,0),wn=Math.min(wn,Ce.count)):Le!=null&&(Mt=Math.max(Mt,0),wn=Math.min(wn,Le.count));const Nt=wn-Mt;if(Nt<0||Nt===1/0)return;Ne.setup(G,$,Ee,X,Ce);let Pi,ft=Re;if(Ce!==null&&(Pi=ne.get(Ce),ft=ye,ft.setIndex(Pi)),G.isMesh)$.wireframe===!0?(ge.setLineWidth($.wireframeLinewidth*We()),ft.setMode(H.LINES)):ft.setMode(H.TRIANGLES);else if(G.isLine){let ze=$.linewidth;ze===void 0&&(ze=1),ge.setLineWidth(ze*We()),G.isLineSegments?ft.setMode(H.LINES):G.isLineLoop?ft.setMode(H.LINE_LOOP):ft.setMode(H.LINE_STRIP)}else G.isPoints?ft.setMode(H.POINTS):G.isSprite&&ft.setMode(H.TRIANGLES);if(G.isBatchedMesh)ft.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ft.renderInstances(Mt,Nt,G.count);else if(X.isInstancedBufferGeometry){const ze=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,_c=Math.min(X.instanceCount,ze);ft.renderInstances(Mt,Nt,_c)}else ft.render(Mt,Nt)};function et(C,F,X){C.transparent===!0&&C.side===Bi&&C.forceSinglePass===!1?(C.side=vn,C.needsUpdate=!0,rl(C,F,X),C.side=Nr,C.needsUpdate=!0,rl(C,F,X),C.side=Bi):rl(C,F,X)}this.compile=function(C,F,X=null){X===null&&(X=C),m=Te.get(X),m.init(),_.push(m),X.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),C!==X&&C.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(v._useLegacyLights);const $=new Set;return C.traverse(function(G){const ce=G.material;if(ce)if(Array.isArray(ce))for(let ve=0;ve<ce.length;ve++){const Ee=ce[ve];et(Ee,X,G),$.add(Ee)}else et(ce,X,G),$.add(ce)}),_.pop(),m=null,$},this.compileAsync=function(C,F,X=null){const $=this.compile(C,F,X);return new Promise(G=>{function ce(){if($.forEach(function(ve){Ie.get(ve).currentProgram.isReady()&&$.delete(ve)}),$.size===0){G(C);return}setTimeout(ce,10)}Se.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let tt=null;function Dt(C){tt&&tt(C)}function tn(){nn.stop()}function nt(){nn.start()}const nn=new ex;nn.setAnimationLoop(Dt),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(C){tt=C,ke.setAnimationLoop(C),C===null?nn.stop():nn.start()},ke.addEventListener("sessionstart",tn),ke.addEventListener("sessionend",nt),this.render=function(C,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(F),F=ke.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,F,M),m=Te.get(C,_.length),m.init(),_.push(m),he.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(he),re=this.localClippingEnabled,K=Oe.init(this.clippingPlanes,re),g=pe.get(C,f.length),g.init(),f.push(g),vi(C,F,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(N,z),this.info.render.frame++,K===!0&&Oe.beginShadows();const X=m.state.shadowsArray;if(J.render(X,C,F),K===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),$e.render(g,C),m.setupLights(v._useLegacyLights),F.isArrayCamera){const $=F.cameras;for(let G=0,ce=$.length;G<ce;G++){const ve=$[G];pp(g,C,ve,ve.viewport)}}else pp(g,C,F);M!==null&&(R.updateMultisampleRenderTarget(M),R.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(v,C,F),Ne.resetDefaultState(),L=-1,S=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function vi(C,F,X,$){if(C.visible===!1)return;if(C.layers.test(F.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(F);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){$&&De.setFromMatrixPosition(C.matrixWorld).applyMatrix4(he);const ve=ie.update(C),Ee=C.material;Ee.visible&&g.push(C,ve,Ee,X,De.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){const ve=ie.update(C),Ee=C.material;if($&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),De.copy(C.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),De.copy(ve.boundingSphere.center)),De.applyMatrix4(C.matrixWorld).applyMatrix4(he)),Array.isArray(Ee)){const Ce=ve.groups;for(let Fe=0,be=Ce.length;Fe<be;Fe++){const Le=Ce[Fe],Mt=Ee[Le.materialIndex];Mt&&Mt.visible&&g.push(C,ve,Mt,X,De.z,Le)}}else Ee.visible&&g.push(C,ve,Ee,X,De.z,null)}}const ce=C.children;for(let ve=0,Ee=ce.length;ve<Ee;ve++)vi(ce[ve],F,X,$)}function pp(C,F,X,$){const G=C.opaque,ce=C.transmissive,ve=C.transparent;m.setupLightsView(X),K===!0&&Oe.setGlobalState(v.clippingPlanes,X),ce.length>0&&ay(G,ce,F,X),$&&ge.viewport(A.copy($)),G.length>0&&il(G,F,X),ce.length>0&&il(ce,F,X),ve.length>0&&il(ve,F,X),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function ay(C,F,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const ce=Pe.isWebGL2;de===null&&(de=new Ss(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?ka:Rr,minFilter:Fa,samples:ce?4:0})),v.getDrawingBufferSize(xe),ce?de.setSize(xe.x,xe.y):de.setSize(Ud(xe.x),Ud(xe.y));const ve=v.getRenderTarget();v.setRenderTarget(de),v.getClearColor(V),b=v.getClearAlpha(),b<1&&v.setClearColor(16777215,.5),v.clear();const Ee=v.toneMapping;v.toneMapping=Cr,il(C,X,$),R.updateMultisampleRenderTarget(de),R.updateRenderTargetMipmap(de);let Ce=!1;for(let Fe=0,be=F.length;Fe<be;Fe++){const Le=F[Fe],Mt=Le.object,wn=Le.geometry,Nt=Le.material,Pi=Le.group;if(Nt.side===Bi&&Mt.layers.test($.layers)){const ft=Nt.side;Nt.side=vn,Nt.needsUpdate=!0,mp(Mt,X,$,wn,Nt,Pi),Nt.side=ft,Nt.needsUpdate=!0,Ce=!0}}Ce===!0&&(R.updateMultisampleRenderTarget(de),R.updateRenderTargetMipmap(de)),v.setRenderTarget(ve),v.setClearColor(V,b),v.toneMapping=Ee}function il(C,F,X){const $=F.isScene===!0?F.overrideMaterial:null;for(let G=0,ce=C.length;G<ce;G++){const ve=C[G],Ee=ve.object,Ce=ve.geometry,Fe=$===null?ve.material:$,be=ve.group;Ee.layers.test(X.layers)&&mp(Ee,F,X,Ce,Fe,be)}}function mp(C,F,X,$,G,ce){C.onBeforeRender(v,F,X,$,G,ce),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(v,F,X,$,C,ce),G.transparent===!0&&G.side===Bi&&G.forceSinglePass===!1?(G.side=vn,G.needsUpdate=!0,v.renderBufferDirect(X,F,$,G,C,ce),G.side=Nr,G.needsUpdate=!0,v.renderBufferDirect(X,F,$,G,C,ce),G.side=Bi):v.renderBufferDirect(X,F,$,G,C,ce),C.onAfterRender(v,F,X,$,G,ce)}function rl(C,F,X){F.isScene!==!0&&(F=we);const $=Ie.get(C),G=m.state.lights,ce=m.state.shadowsArray,ve=G.state.version,Ee=_e.getParameters(C,G.state,ce,F,X),Ce=_e.getProgramCacheKey(Ee);let Fe=$.programs;$.environment=C.isMeshStandardMaterial?F.environment:null,$.fog=F.fog,$.envMap=(C.isMeshStandardMaterial?W:T).get(C.envMap||$.environment),Fe===void 0&&(C.addEventListener("dispose",le),Fe=new Map,$.programs=Fe);let be=Fe.get(Ce);if(be!==void 0){if($.currentProgram===be&&$.lightsStateVersion===ve)return _p(C,Ee),be}else Ee.uniforms=_e.getUniforms(C),C.onBuild(X,Ee,v),C.onBeforeCompile(Ee,v),be=_e.acquireProgram(Ee,Ce),Fe.set(Ce,be),$.uniforms=Ee.uniforms;const Le=$.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Le.clippingPlanes=Oe.uniform),_p(C,Ee),$.needsLights=cy(C),$.lightsStateVersion=ve,$.needsLights&&(Le.ambientLightColor.value=G.state.ambient,Le.lightProbe.value=G.state.probe,Le.directionalLights.value=G.state.directional,Le.directionalLightShadows.value=G.state.directionalShadow,Le.spotLights.value=G.state.spot,Le.spotLightShadows.value=G.state.spotShadow,Le.rectAreaLights.value=G.state.rectArea,Le.ltc_1.value=G.state.rectAreaLTC1,Le.ltc_2.value=G.state.rectAreaLTC2,Le.pointLights.value=G.state.point,Le.pointLightShadows.value=G.state.pointShadow,Le.hemisphereLights.value=G.state.hemi,Le.directionalShadowMap.value=G.state.directionalShadowMap,Le.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Le.spotShadowMap.value=G.state.spotShadowMap,Le.spotLightMatrix.value=G.state.spotLightMatrix,Le.spotLightMap.value=G.state.spotLightMap,Le.pointShadowMap.value=G.state.pointShadowMap,Le.pointShadowMatrix.value=G.state.pointShadowMatrix),$.currentProgram=be,$.uniformsList=null,be}function gp(C){if(C.uniformsList===null){const F=C.currentProgram.getUniforms();C.uniformsList=ou.seqWithValue(F.seq,C.uniforms)}return C.uniformsList}function _p(C,F){const X=Ie.get(C);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function ly(C,F,X,$,G){F.isScene!==!0&&(F=we),R.resetTextureUnits();const ce=F.fog,ve=$.isMeshStandardMaterial?F.environment:null,Ee=M===null?v.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:$i,Ce=($.isMeshStandardMaterial?W:T).get($.envMap||ve),Fe=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,be=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Le=!!X.morphAttributes.position,Mt=!!X.morphAttributes.normal,wn=!!X.morphAttributes.color;let Nt=Cr;$.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Nt=v.toneMapping);const Pi=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ft=Pi!==void 0?Pi.length:0,ze=Ie.get($),_c=m.state.lights;if(K===!0&&(re===!0||C!==S)){const Gn=C===S&&$.id===L;Oe.setState($,C,Gn)}let xt=!1;$.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==_c.state.version||ze.outputColorSpace!==Ee||G.isBatchedMesh&&ze.batching===!1||!G.isBatchedMesh&&ze.batching===!0||G.isInstancedMesh&&ze.instancing===!1||!G.isInstancedMesh&&ze.instancing===!0||G.isSkinnedMesh&&ze.skinning===!1||!G.isSkinnedMesh&&ze.skinning===!0||G.isInstancedMesh&&ze.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ze.instancingColor===!1&&G.instanceColor!==null||ze.envMap!==Ce||$.fog===!0&&ze.fog!==ce||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Oe.numPlanes||ze.numIntersection!==Oe.numIntersection)||ze.vertexAlphas!==Fe||ze.vertexTangents!==be||ze.morphTargets!==Le||ze.morphNormals!==Mt||ze.morphColors!==wn||ze.toneMapping!==Nt||Pe.isWebGL2===!0&&ze.morphTargetsCount!==ft)&&(xt=!0):(xt=!0,ze.__version=$.version);let Hr=ze.currentProgram;xt===!0&&(Hr=rl($,F,G));let vp=!1,Bo=!1,vc=!1;const Xt=Hr.getUniforms(),Gr=ze.uniforms;if(ge.useProgram(Hr.program)&&(vp=!0,Bo=!0,vc=!0),$.id!==L&&(L=$.id,Bo=!0),vp||S!==C){Xt.setValue(H,"projectionMatrix",C.projectionMatrix),Xt.setValue(H,"viewMatrix",C.matrixWorldInverse);const Gn=Xt.map.cameraPosition;Gn!==void 0&&Gn.setValue(H,De.setFromMatrixPosition(C.matrixWorld)),Pe.logarithmicDepthBuffer&&Xt.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Xt.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,Bo=!0,vc=!0)}if(G.isSkinnedMesh){Xt.setOptional(H,G,"bindMatrix"),Xt.setOptional(H,G,"bindMatrixInverse");const Gn=G.skeleton;Gn&&(Pe.floatVertexTextures?(Gn.boneTexture===null&&Gn.computeBoneTexture(),Xt.setValue(H,"boneTexture",Gn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Xt.setOptional(H,G,"batchingTexture"),Xt.setValue(H,"batchingTexture",G._matricesTexture,R));const xc=X.morphAttributes;if((xc.position!==void 0||xc.normal!==void 0||xc.color!==void 0&&Pe.isWebGL2===!0)&&He.update(G,X,Hr),(Bo||ze.receiveShadow!==G.receiveShadow)&&(ze.receiveShadow=G.receiveShadow,Xt.setValue(H,"receiveShadow",G.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Gr.envMap.value=Ce,Gr.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Bo&&(Xt.setValue(H,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&uy(Gr,vc),ce&&$.fog===!0&&ue.refreshFogUniforms(Gr,ce),ue.refreshMaterialUniforms(Gr,$,Y,O,de),ou.upload(H,gp(ze),Gr,R)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ou.upload(H,gp(ze),Gr,R),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Xt.setValue(H,"center",G.center),Xt.setValue(H,"modelViewMatrix",G.modelViewMatrix),Xt.setValue(H,"normalMatrix",G.normalMatrix),Xt.setValue(H,"modelMatrix",G.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Gn=$.uniformsGroups;for(let yc=0,fy=Gn.length;yc<fy;yc++)if(Pe.isWebGL2){const xp=Gn[yc];je.update(xp,Hr),je.bind(xp,Hr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hr}function uy(C,F){C.ambientLightColor.needsUpdate=F,C.lightProbe.needsUpdate=F,C.directionalLights.needsUpdate=F,C.directionalLightShadows.needsUpdate=F,C.pointLights.needsUpdate=F,C.pointLightShadows.needsUpdate=F,C.spotLights.needsUpdate=F,C.spotLightShadows.needsUpdate=F,C.rectAreaLights.needsUpdate=F,C.hemisphereLights.needsUpdate=F}function cy(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,F,X){Ie.get(C.texture).__webglTexture=F,Ie.get(C.depthTexture).__webglTexture=X;const $=Ie.get(C);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=X===void 0,$.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,F){const X=Ie.get(C);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(C,F=0,X=0){M=C,E=F,w=X;let $=!0,G=null,ce=!1,ve=!1;if(C){const Ce=Ie.get(C);Ce.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(H.FRAMEBUFFER,null),$=!1):Ce.__webglFramebuffer===void 0?R.setupRenderTarget(C):Ce.__hasExternalTextures&&R.rebindTextures(C,Ie.get(C.texture).__webglTexture,Ie.get(C.depthTexture).__webglTexture);const Fe=C.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ve=!0);const be=Ie.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(be[F])?G=be[F][X]:G=be[F],ce=!0):Pe.isWebGL2&&C.samples>0&&R.useMultisampledRTT(C)===!1?G=Ie.get(C).__webglMultisampledFramebuffer:Array.isArray(be)?G=be[X]:G=be,A.copy(C.viewport),B.copy(C.scissor),U=C.scissorTest}else A.copy(k).multiplyScalar(Y).floor(),B.copy(Z).multiplyScalar(Y).floor(),U=Q;if(ge.bindFramebuffer(H.FRAMEBUFFER,G)&&Pe.drawBuffers&&$&&ge.drawBuffers(C,G),ge.viewport(A),ge.scissor(B),ge.setScissorTest(U),ce){const Ce=Ie.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ce.__webglTexture,X)}else if(ve){const Ce=Ie.get(C.texture),Fe=F||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ce.__webglTexture,X||0,Fe)}L=-1},this.readRenderTargetPixels=function(C,F,X,$,G,ce,ve){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ie.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ve!==void 0&&(Ee=Ee[ve]),Ee){ge.bindFramebuffer(H.FRAMEBUFFER,Ee);try{const Ce=C.texture,Fe=Ce.format,be=Ce.type;if(Fe!==hi&&me.convert(Fe)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=be===ka&&(Se.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&Se.has("EXT_color_buffer_float"));if(be!==Rr&&me.convert(be)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(be===hr&&(Pe.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=C.width-$&&X>=0&&X<=C.height-G&&H.readPixels(F,X,$,G,me.convert(Fe),me.convert(be),ce)}finally{const Ce=M!==null?Ie.get(M).__webglFramebuffer:null;ge.bindFramebuffer(H.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(C,F,X=0){const $=Math.pow(2,-X),G=Math.floor(F.image.width*$),ce=Math.floor(F.image.height*$);R.setTexture2D(F,0),H.copyTexSubImage2D(H.TEXTURE_2D,X,0,0,C.x,C.y,G,ce),ge.unbindTexture()},this.copyTextureToTexture=function(C,F,X,$=0){const G=F.image.width,ce=F.image.height,ve=me.convert(X.format),Ee=me.convert(X.type);R.setTexture2D(X,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment),F.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,$,C.x,C.y,G,ce,ve,Ee,F.image.data):F.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,$,C.x,C.y,F.mipmaps[0].width,F.mipmaps[0].height,ve,F.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,$,C.x,C.y,ve,Ee,F.image),$===0&&X.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(C,F,X,$,G=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=C.max.x-C.min.x+1,ve=C.max.y-C.min.y+1,Ee=C.max.z-C.min.z+1,Ce=me.convert($.format),Fe=me.convert($.type);let be;if($.isData3DTexture)R.setTexture3D($,0),be=H.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)R.setTexture2DArray($,0),be=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,$.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,$.unpackAlignment);const Le=H.getParameter(H.UNPACK_ROW_LENGTH),Mt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),wn=H.getParameter(H.UNPACK_SKIP_PIXELS),Nt=H.getParameter(H.UNPACK_SKIP_ROWS),Pi=H.getParameter(H.UNPACK_SKIP_IMAGES),ft=X.isCompressedTexture?X.mipmaps[G]:X.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,ft.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ft.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,C.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,C.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,C.min.z),X.isDataTexture||X.isData3DTexture?H.texSubImage3D(be,G,F.x,F.y,F.z,ce,ve,Ee,Ce,Fe,ft.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(be,G,F.x,F.y,F.z,ce,ve,Ee,Ce,ft.data)):H.texSubImage3D(be,G,F.x,F.y,F.z,ce,ve,Ee,Ce,Fe,ft),H.pixelStorei(H.UNPACK_ROW_LENGTH,Le),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Mt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,wn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Nt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Pi),G===0&&$.generateMipmaps&&H.generateMipmap(be),ge.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),ge.unbindTexture()},this.resetState=function(){E=0,w=0,M=null,ge.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Yh?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===cc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Bt?cs:k0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===cs?Bt:$i}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class YC extends ax{}YC.prototype.isWebGL1Renderer=!0;class qC extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class lx extends el{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $g=new Ft,Od=new W0,Xl=new fc,jl=new j;class $C extends xn{constructor(e=new Ji,t=new lx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xl.copy(i.boundingSphere),Xl.applyMatrix4(r),Xl.radius+=s,e.ray.intersectsSphere(Xl)===!1)return;$g.copy(r).invert(),Od.copy(e.ray).applyMatrix4($g);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=h,g=p;x<g;x++){const m=u.getX(x);jl.fromBufferAttribute(d,m),Kg(jl,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=h,g=p;x<g;x++)jl.fromBufferAttribute(d,x),Kg(jl,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Kg(n,e,t,i,r,s,o){const a=Od.distanceSqToPoint(n);if(a<t){const l=new j;Od.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class KC{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Zg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Zg(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xh);function Fi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ux(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var On={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Po={duration:.5,overwrite:!1,delay:0},Kh,Vt,ut,Qn=1e8,Je=1/Qn,Fd=Math.PI*2,ZC=Fd/4,QC=0,cx=Math.sqrt,JC=Math.cos,eR=Math.sin,kt=function(e){return typeof e=="string"},St=function(e){return typeof e=="function"},Ki=function(e){return typeof e=="number"},Zh=function(e){return typeof e>"u"},Ri=function(e){return typeof e=="object"},yn=function(e){return e!==!1},Qh=function(){return typeof window<"u"},Yl=function(e){return St(e)||kt(e)},fx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Qt=Array.isArray,tR=/random\([^)]+\)/g,nR=/,\s*/g,Qg=/(?:-?\.?\d|\.)+/gi,dx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ro=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,wf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,hx=/[+-]=-?[.\d]+/,iR=/[^,'"\[\]\s]+/gi,rR=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,pt,Si,kd,Jh,kn={},Bu={},px,mx=function(e){return(Bu=bo(e,kn))&&Tn},ep=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},za=function(e,t){return!t&&console.warn(e)},gx=function(e,t){return e&&(kn[e]=t)&&Bu&&(Bu[e]=t)||kn},Ba=function(){return 0},sR={suppressEvents:!0,isStart:!0,kill:!1},au={suppressEvents:!0,kill:!1},oR={suppressEvents:!0},tp={},Pr=[],zd={},_x,Pn={},Af={},Jg=30,lu=[],np="",ip=function(e){var t=e[0],i,r;if(Ri(t)||St(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=lu.length;r--&&!lu[r].targetTest(t););i=lu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Hx(e[r],i)))||e.splice(r,1);return e},ds=function(e){return e._gsap||ip(Jn(e))[0]._gsap},vx=function(e,t,i){return(i=e[t])&&St(i)?e[t]():Zh(i)&&e.getAttribute&&e.getAttribute(t)||i},Sn=function(e,t){return(e=e.split(",")).forEach(t)||e},Et=function(e){return Math.round(e*1e5)/1e5||0},dt=function(e){return Math.round(e*1e7)/1e7||0},mo=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},aR=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Hu=function(){var e=Pr.length,t=Pr.slice(0),i,r;for(zd={},Pr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},rp=function(e){return!!(e._initted||e._startAt||e.add)},xx=function(e,t,i,r){Pr.length&&!Vt&&Hu(),e.render(t,i,!!(Vt&&t<0&&rp(e))),Pr.length&&!Vt&&Hu()},yx=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(iR).length<2?t:kt(e)?e.trim():e},Sx=function(e){return e},zn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},lR=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},bo=function(e,t){for(var i in t)e[i]=t[i];return e},e_=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ri(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Gu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},_a=function(e){var t=e.parent||pt,i=e.keyframes?lR(Qt(e.keyframes)):zn;if(yn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},uR=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Mx=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},pc=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ur=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},hs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},cR=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Bd=function(e,t,i,r){return e._startAt&&(Vt?e._startAt.revert(au):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},fR=function n(e){return!e||e._ts&&n(e.parent)},t_=function(e){return e._repeat?Lo(e._tTime,e=e.duration()+e._rDelay)*e:0},Lo=function(e,t){var i=Math.floor(e=dt(e/t));return e&&i===e?i-1:i},Vu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},mc=function(e){return e._end=dt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Je)||0))},gc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=dt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),mc(e),i._dirty||hs(i,e)),e},Ex=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Vu(e.rawTime(),t),(!t._dur||nl(0,t.totalDuration(),i)-t._tTime>Je)&&t.render(i,!0)),hs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Je}},Ti=function(e,t,i,r){return t.parent&&Ur(t),t._start=dt((Ki(i)?i:i||e!==pt?Wn(e,i,t):e._time)+t._delay),t._end=dt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Mx(e,t,"_first","_last",e._sort?"_start":0),Hd(t)||(e._recent=t),r||Ex(e,t),e._ts<0&&gc(e,e._tTime),e},Tx=function(e,t){return(kn.ScrollTrigger||ep("scrollTrigger",t))&&kn.ScrollTrigger.create(t,e)},wx=function(e,t,i,r,s){if(op(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Vt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&_x!==bn.frame)return Pr.push(e),e._lazy=[s,r],1},dR=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Hd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},hR=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&dR(e)&&!(!e._initted&&Hd(e))||(e._ts<0||e._dp._ts<0)&&!Hd(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=nl(0,e._tDur,t),c=Lo(l,a),e._yoyo&&c&1&&(o=1-o),c!==Lo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Vt||r||e._zTime===Je||!t&&e._zTime){if(!e._initted&&wx(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?Je:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Bd(e,t,i,!0),e._onUpdate&&!i&&Dn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Dn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ur(e,1),!i&&!Vt&&(Dn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},pR=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Do=function(e,t,i,r){var s=e._repeat,o=dt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:dt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&gc(e,e._tTime=e._tDur*a),e.parent&&mc(e),i||hs(e.parent,e),e},n_=function(e){return e instanceof an?hs(e):Do(e,e._dur)},mR={_start:0,endTime:Ba,totalDuration:Ba},Wn=function n(e,t,i){var r=e.labels,s=e._recent||mR,o=e.duration()>=Qn?s.endTime(!1):e._dur,a,l,u;return kt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Qt(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},va=function(e,t,i){var r=Ki(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=yn(l.vars.inherit)&&l.parent;o.immediateRender=yn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new At(t[0],o,t[s+1])},Br=function(e,t){return e||e===0?t(e):t},nl=function(e,t,i){return i<e?e:i>t?t:i},Zt=function(e,t){return!kt(e)||!(t=rR.exec(e))?"":t[1]},gR=function(e,t,i){return Br(i,function(r){return nl(e,t,r)})},Gd=[].slice,Ax=function(e,t){return e&&Ri(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ri(e[0]))&&!e.nodeType&&e!==Si},_R=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return kt(r)&&!t||Ax(r,1)?(s=i).push.apply(s,Jn(r)):i.push(r)})||i},Jn=function(e,t,i){return ut&&!t&&ut.selector?ut.selector(e):kt(e)&&!i&&(kd||!No())?Gd.call((t||Jh).querySelectorAll(e),0):Qt(e)?_R(e,i):Ax(e)?Gd.call(e,0):e?[e]:[]},Vd=function(e){return e=Jn(e)[0]||za("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Jn(t,i.querySelectorAll?i:i===e?za("Invalid scope")||Jh.createElement("div"):e)}},Cx=function(e){return e.sort(function(){return .5-Math.random()})},Rx=function(e){if(St(e))return e;var t=Ri(e)?e:{each:e},i=ps(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return kt(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(h,p,x){var g=(x||t).length,m=o[g],f,_,v,y,E,w,M,L,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Qn])[1],!S){for(M=-Qn;M<(M=x[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(m=o[g]=[],f=l?Math.min(S,g)*c-.5:r%S,_=S===Qn?0:l?g*d/S-.5:r/S|0,M=0,L=Qn,w=0;w<g;w++)v=w%S-f,y=_-(w/S|0),m[w]=E=u?Math.abs(u==="y"?y:v):cx(v*v+y*y),E>M&&(M=E),E<L&&(L=E);r==="random"&&Cx(m),m.max=M-L,m.min=L,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:u?u==="y"?g/S:S:Math.max(S,g/S))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Zt(t.amount||t.each)||0,i=i&&g<0?kx(i):i}return g=(m[h]-m.min)/m.max||0,dt(m.b+(i?i(g):g)*m.v)+m.u}},Wd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=dt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Ki(i)?0:Zt(i))}},Px=function(e,t){var i=Qt(e),r,s;return!i&&Ri(e)&&(r=i=e.radius||Qn,e.values?(e=Jn(e.values),(s=!Ki(e[0]))&&(r*=r)):e=Wd(e.increment)),Br(t,i?St(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Qn,c=0,d=e.length,h,p;d--;)s?(h=e[d].x-a,p=e[d].y-l,h=h*h+p*p):h=Math.abs(e[d]-a),h<u&&(u=h,c=d);return c=!r||u<=r?e[c]:o,s||c===o||Ki(o)?c:c+Zt(o)}:Wd(e))},bx=function(e,t,i,r){return Br(Qt(e)?!t:i===!0?!!(i=0):!r,function(){return Qt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},vR=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},xR=function(e,t){return function(i){return e(parseFloat(i))+(t||Zt(i))}},yR=function(e,t,i){return Dx(e,t,0,1,i)},Lx=function(e,t,i){return Br(i,function(r){return e[~~t(r)]})},SR=function n(e,t,i){var r=t-e;return Qt(e)?Lx(e,n(0,e.length),t):Br(i,function(s){return(r+(s-e)%r)%r+e})},MR=function n(e,t,i){var r=t-e,s=r*2;return Qt(e)?Lx(e,n(0,e.length-1),t):Br(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Ha=function(e){return e.replace(tR,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(nR);return bx(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},Dx=function(e,t,i,r,s){var o=t-e,a=r-i;return Br(s,function(l){return i+((l-e)/o*a||0)})},ER=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=kt(e),a={},l,u,c,d,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Qt(e)&&!Qt(t)){for(c=[],d=e.length,h=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(x){x*=d;var g=Math.min(h,~~x);return c[g](x-g)},i=t}else r||(e=bo(Qt(e)?[]:{},e));if(!c){for(l in t)sp.call(a,e,l,"get",t[l]);s=function(x){return up(x,a)||(o?e.p:e)}}}return Br(i,s)},i_=function(e,t,i){var r=e.labels,s=Qn,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Dn=function(e,t,i){var r=e.vars,s=r[t],o=ut,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Pr.length&&Hu(),a&&(ut=a),c=l?s.apply(u,l):s.call(u),ut=o,c},sa=function(e){return Ur(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Vt),e.progress()<1&&Dn(e,"onInterrupt"),e},so,Nx=[],Ux=function(e){if(e)if(e=!e.name&&e.default||e,Qh()||e.headless){var t=e.name,i=St(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Ba,render:up,add:sp,kill:zR,modifier:kR,rawVars:0},o={targetTest:0,get:0,getSetter:lp,aliases:{},register:0};if(No(),e!==r){if(Pn[t])return;zn(r,zn(Gu(e,s),o)),bo(r.prototype,bo(s,Gu(e,o))),Pn[r.prop=t]=r,e.targetTest&&(lu.push(r),tp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}gx(t,r),e.register&&e.register(Tn,r,Mn)}else Nx.push(e)},Qe=255,oa={aqua:[0,Qe,Qe],lime:[0,Qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Qe],navy:[0,0,128],white:[Qe,Qe,Qe],olive:[128,128,0],yellow:[Qe,Qe,0],orange:[Qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Qe,0,0],pink:[Qe,192,203],cyan:[0,Qe,Qe],transparent:[Qe,Qe,Qe,0]},Cf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Qe+.5|0},Ix=function(e,t,i){var r=e?Ki(e)?[e>>16,e>>8&Qe,e&Qe]:0:oa.black,s,o,a,l,u,c,d,h,p,x;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),oa[e])r=oa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Qe,r&Qe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Qe,e&Qe]}else if(e.substr(0,3)==="hsl"){if(r=x=e.match(Qg),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Cf(l+1/3,s,o),r[1]=Cf(l,s,o),r[2]=Cf(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(dx),i&&r.length<4&&(r[3]=1),r}else r=e.match(Qg)||oa.transparent;r=r.map(Number)}return t&&!x&&(s=r[0]/Qe,o=r[1]/Qe,a=r[2]/Qe,d=Math.max(s,o,a),h=Math.min(s,o,a),c=(d+h)/2,d===h?l=u=0:(p=d-h,u=c>.5?p/(2-d-h):p/(d+h),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},Ox=function(e){var t=[],i=[],r=-1;return e.split(br).forEach(function(s){var o=s.match(ro)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},r_=function(e,t,i){var r="",s=(e+r).match(br),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(h){return(h=Ix(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=Ox(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(br,"1").split(ro),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(br),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},br=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in oa)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),TR=/hsl[a]?\(/,Fx=function(e){var t=e.join(" "),i;if(br.lastIndex=0,br.test(t))return i=TR.test(t),e[1]=r_(e[1],i),e[0]=r_(e[0],i,Ox(e[1])),!0},Ga,bn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,h,p,x=function g(m){var f=n()-r,_=m===!0,v,y,E,w;if((f>e||f<0)&&(i+=f-t),r+=f,E=r-i,v=E-o,(v>0||_)&&(w=++d.frame,h=E-d.time*1e3,d.time=E=E/1e3,o+=v+(v>=s?4:s-v),y=1),_||(l=u(g)),y)for(p=0;p<a.length;p++)a[p](E,h,w,m)};return d={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){px&&(!kd&&Qh()&&(Si=kd=window,Jh=Si.document||{},kn.gsap=Tn,(Si.gsapVersions||(Si.gsapVersions=[])).push(Tn.version),mx(Bu||Si.GreenSockGlobals||!Si.gsap&&Si||{}),Nx.forEach(Ux)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Ga=1,x(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Ga=0,u=Ba},lagSmoothing:function(m,f){e=m||1/0,t=Math.min(f||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,f,_){var v=f?function(y,E,w,M){m(y,E,w,M),d.remove(v)}:m;return d.remove(m),a[_?"unshift":"push"](v),No(),v},remove:function(m,f){~(f=a.indexOf(m))&&a.splice(f,1)&&p>=f&&p--},_listeners:a},d}(),No=function(){return!Ga&&bn.wake()},Ve={},wR=/^[\d.\-M][\d.\-,\s]/,AR=/["']/g,CR=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(AR,"").trim():+u,r=l.substr(a+1).trim();return t},RR=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},PR=function(e){var t=(e+"").split("("),i=Ve[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[CR(t[1])]:RR(e).split(",").map(yx)):Ve._CE&&wR.test(e)?Ve._CE("",e):i},kx=function(e){return function(t){return 1-e(1-t)}},zx=function n(e,t){for(var i=e._first,r;i;)i instanceof an?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},ps=function(e,t){return e&&(St(e)?e:Ve[e]||PR(e))||t},ws=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return Sn(e,function(a){Ve[a]=kn[a]=s,Ve[o=a.toLowerCase()]=i;for(var l in s)Ve[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ve[a+"."+l]=s[l]}),s},Bx=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Rf=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Fd*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*eR((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:Bx(a);return s=Fd/s,l.config=function(u,c){return n(e,u,c)},l},Pf=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:Bx(i);return r.config=function(s){return n(e,s)},r};Sn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;ws(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Ve.Linear.easeNone=Ve.none=Ve.Linear.easeIn;ws("Elastic",Rf("in"),Rf("out"),Rf());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};ws("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ws("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});ws("Circ",function(n){return-(cx(1-n*n)-1)});ws("Sine",function(n){return n===1?1:-JC(n*ZC)+1});ws("Back",Pf("in"),Pf("out"),Pf());Ve.SteppedEase=Ve.steps=kn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Je;return function(a){return((r*nl(0,o,a)|0)+s)*i}}};Po.ease=Ve["quad.out"];Sn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return np+=n+","+n+"Params,"});var Hx=function(e,t){this.id=QC++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:vx,this.set=t?t.getSetter:lp},Va=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Do(this,+t.duration,1,1),this.data=t.data,ut&&(this._ctx=ut,ut.data.push(this)),Ga||bn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Do(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(No(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(gc(this,i),!s._dp||s.parent||Ex(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ti(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Je||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),xx(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+t_(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+t_(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Lo(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Je?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Vu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Je?0:this._rts,this.totalTime(nl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),mc(this),cR(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(No(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Je&&(this._tTime-=Je)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=dt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ti(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(yn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Vu(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=oR);var r=Vt;return Vt=i,rp(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Vt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,n_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,n_(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Wn(this,i),yn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,yn(r)),this._dur||(this._zTime=-Je),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Je:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Je,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Je)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=St(i)?i:Sx,l=function(){var c=r.then;r.then=null,s&&s(),St(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){sa(this)},n}();zn(Va.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Je,_prom:0,_ps:!1,_rts:1});var an=function(n){ux(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=yn(i.sortChildren),pt&&Ti(i.parent||pt,Fi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Tx(Fi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return va(0,arguments,this),this},t.from=function(r,s,o){return va(1,arguments,this),this},t.fromTo=function(r,s,o,a){return va(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,_a(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new At(r,s,Wn(this,o),1),this},t.call=function(r,s,o){return Ti(this,At.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new At(r,o,Wn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,_a(o).immediateRender=yn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,_a(a).immediateRender=yn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:dt(r),d=this._zTime<0!=r<0&&(this._initted||!u),h,p,x,g,m,f,_,v,y,E,w,M;if(this!==pt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,y=this._start,v=this._ts,f=!v,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=dt(c%m),c===l?(g=this._repeat,h=u):(E=dt(c/m),g=~~E,g&&g===E&&(h=u,g--),h>u&&(h=u)),E=Lo(this._tTime,m),!a&&this._tTime&&E!==g&&this._tTime-E*m-this._dur<=0&&(E=g),w&&g&1&&(h=u-h,M=1),g!==E&&!this._lock){var L=w&&E&1,S=L===(w&&g&1);if(g<E&&(L=!L),a=L?0:c%u?u:c,this._lock=1,this.render(a||(M?0:dt(g*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Dn(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,E=g),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,S&&(this._lock=2,a=L?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;zx(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(_=pR(this,dt(a),dt(h)),_&&(c-=h-(h=_._start))),this._tTime=c,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!E&&(Dn(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(x=p._next,(p._act||h>=p._start)&&p._ts&&_!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!f){_=0,x&&(c+=this._zTime=-Je);break}}p=x}else{p=this._last;for(var A=r<0?r:h;p;){if(x=p._prev,(p._act||A<=p._end)&&p._ts&&_!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(A-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(A-p._start)*p._ts,s,o||Vt&&rp(p)),h!==this._time||!this._ts&&!f){_=0,x&&(c+=this._zTime=A?-Je:Je);break}}p=x}}if(_&&!s&&(this.pause(),_.render(h>=a?0:-Je)._zTime=h>=a?1:-1,this._ts))return this._start=y,mc(this),this.render(r,s,o);this._onUpdate&&!s&&Dn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Ur(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Dn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Ki(s)||(s=Wn(this,s,r)),!(r instanceof Va)){if(Qt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(kt(r))return this.addLabel(r,s);if(St(r))r=At.delayedCall(0,r);else return this}return this!==r?Ti(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Qn);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof At?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return kt(r)?this.removeLabel(r):St(r)?this.killTweensOf(r):(r.parent===this&&pc(this,r),r===this._recent&&(this._recent=this._last),hs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=dt(bn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Wn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=At.delayedCall(0,s||Ba,o);return a.data="isPause",this._hasPause=1,Ti(this,a,Wn(this,r))},t.removePause=function(r){var s=this._first;for(r=Wn(this,r);s;)s._start===r&&s.data==="isPause"&&Ur(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)mr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Jn(r),l=this._first,u=Ki(s),c;l;)l instanceof At?aR(l._targets,a)&&(u?(!mr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Wn(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,h=l.immediateRender,p,x=At.to(o,zn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Je,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());x._dur!==m&&Do(x,m,0,1).render(x._time,!0,!0),p=1}c&&c.apply(x,d||[])}},s));return h?x.render(0):x},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,zn({startAt:{time:Wn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),i_(this,Wn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),i_(this,Wn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Je)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=dt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return hs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),hs(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Qn,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ti(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=dt(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Do(o,o===pt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(pt._ts&&(xx(pt,Vu(r,pt)),_x=bn.frame),bn.frame>=Jg){Jg+=On.autoSleep||120;var s=pt._first;if((!s||!s._ts)&&On.autoSleep&&bn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||bn.sleep()}}},e}(Va);zn(an.prototype,{_lock:0,_hasPause:0,_forcing:0});var bR=function(e,t,i,r,s,o,a){var l=new Mn(this._pt,e,t,0,1,Yx,null,s),u=0,c=0,d,h,p,x,g,m,f,_;for(l.b=i,l.e=r,i+="",r+="",(f=~r.indexOf("random("))&&(r=Ha(r)),o&&(_=[i,r],o(_,e,t),i=_[0],r=_[1]),h=i.match(wf)||[];d=wf.exec(r);)x=d[0],g=r.substring(u,d.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),x!==h[c++]&&(m=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:m,c:x.charAt(1)==="="?mo(m,x)-m:parseFloat(x)-m,m:p&&p<4?Math.round:0},u=wf.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(hx.test(r)||f)&&(l.e=0),this._pt=l,l},sp=function(e,t,i,r,s,o,a,l,u,c){St(r)&&(r=r(s||0,e,o));var d=e[t],h=i!=="get"?i:St(d)?u?e[t.indexOf("set")||!St(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=St(d)?u?IR:Xx:ap,x;if(kt(r)&&(~r.indexOf("random(")&&(r=Ha(r)),r.charAt(1)==="="&&(x=mo(h,r)+(Zt(h)||0),(x||x===0)&&(r=x))),!c||h!==r||Xd)return!isNaN(h*r)&&r!==""?(x=new Mn(this._pt,e,t,+h||0,r-(h||0),typeof d=="boolean"?FR:jx,0,p),u&&(x.fp=u),a&&x.modifier(a,this,e),this._pt=x):(!d&&!(t in e)&&ep(t,r),bR.call(this,e,t,h,r,p,l||On.stringFilter,u))},LR=function(e,t,i,r,s){if(St(e)&&(e=xa(e,s,t,i,r)),!Ri(e)||e.style&&e.nodeType||Qt(e)||fx(e))return kt(e)?xa(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=xa(e[a],s,t,i,r);return o},Gx=function(e,t,i,r,s,o){var a,l,u,c;if(Pn[e]&&(a=new Pn[e]).init(s,a.rawVars?t[e]:LR(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new Mn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==so))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},mr,Xd,op=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,h=r.keyframes,p=r.autoRevert,x=e._dur,g=e._startAt,m=e._targets,f=e.parent,_=f&&f.data==="nested"?f.vars.targets:m,v=e._overwrite==="auto"&&!Kh,y=e.timeline,E,w,M,L,S,A,B,U,V,b,I,O,Y;if(y&&(!h||!s)&&(s="none"),e._ease=ps(s,Po.ease),e._yEase=d?kx(ps(d===!0?s:d,Po.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!y&&!!r.runBackwards,!y||h&&!r.stagger){if(U=m[0]?ds(m[0]).harness:0,O=U&&r[U.prop],E=Gu(r,tp),g&&(g._zTime<0&&g.progress(1),t<0&&c&&a&&!p?g.render(-1,!0):g.revert(c&&x?au:sR),g._lazy=0),o){if(Ur(e._startAt=At.set(m,zn({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!g&&yn(l),startAt:null,delay:0,onUpdate:u&&function(){return Dn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Vt||!a&&!p)&&e._startAt.revert(au),a&&x&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&x&&!g){if(t&&(a=!1),M=zn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&yn(l),immediateRender:a,stagger:0,parent:f},E),O&&(M[U.prop]=O),Ur(e._startAt=At.set(m,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Vt?e._startAt.revert(au):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Je,Je);else if(!t)return}for(e._pt=e._ptCache=0,l=x&&yn(l)||l&&!x,w=0;w<m.length;w++){if(S=m[w],B=S._gsap||ip(m)[w]._gsap,e._ptLookup[w]=b={},zd[B.id]&&Pr.length&&Hu(),I=_===m?w:_.indexOf(S),U&&(V=new U).init(S,O||E,e,I,_)!==!1&&(e._pt=L=new Mn(e._pt,S,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(N){b[N]=L}),V.priority&&(A=1)),!U||O)for(M in E)Pn[M]&&(V=Gx(M,E,e,I,S,_))?V.priority&&(A=1):b[M]=L=sp.call(e,S,M,"get",E[M],I,_,0,r.stringFilter);e._op&&e._op[w]&&e.kill(S,e._op[w]),v&&e._pt&&(mr=e,pt.killTweensOf(S,b,e.globalTime(t)),Y=!e.parent,mr=0),e._pt&&l&&(zd[B.id]=1)}A&&qx(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!Y,h&&t<=0&&y.render(Qn,!0,!0)},DR=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,h,p;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(c=h[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Xd=1,e.vars[t]="+=0",op(e,a),Xd=0,l?za(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)d=u[p],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,d.e&&(d.e=Et(i)+Zt(d.e)),d.b&&(d.b=c.s+Zt(d.b))},NR=function(e,t){var i=e[0]?ds(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=bo({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},UR=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Qt(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},xa=function(e,t,i,r,s){return St(e)?e.call(t,i,r,s):kt(e)&&~e.indexOf("random(")?Ha(e):e},Vx=np+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Wx={};Sn(Vx+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Wx[n]=1});var At=function(n){ux(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:_a(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,h=l.stagger,p=l.overwrite,x=l.keyframes,g=l.defaults,m=l.scrollTrigger,f=l.yoyoEase,_=r.parent||pt,v=(Qt(i)||fx(i)?Ki(i[0]):"length"in r)?[i]:Jn(i),y,E,w,M,L,S,A,B;if(a._targets=v.length?ip(v):za("GSAP target "+i+" not found. https://gsap.com",!On.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,x||h||Yl(u)||Yl(c)){if(r=a.vars,y=a.timeline=new an({data:"nested",defaults:g||{},targets:_&&_.data==="nested"?_.vars.targets:v}),y.kill(),y.parent=y._dp=Fi(a),y._start=0,h||Yl(u)||Yl(c)){if(M=v.length,A=h&&Rx(h),Ri(h))for(L in h)~Vx.indexOf(L)&&(B||(B={}),B[L]=h[L]);for(E=0;E<M;E++)w=Gu(r,Wx),w.stagger=0,f&&(w.yoyoEase=f),B&&bo(w,B),S=v[E],w.duration=+xa(u,Fi(a),E,S,v),w.delay=(+xa(c,Fi(a),E,S,v)||0)-a._delay,!h&&M===1&&w.delay&&(a._delay=c=w.delay,a._start+=c,w.delay=0),y.to(S,w,A?A(E,S,v):0),y._ease=Ve.none;y.duration()?u=c=0:a.timeline=0}else if(x){_a(zn(y.vars.defaults,{ease:"none"})),y._ease=ps(x.ease||r.ease||"none");var U=0,V,b,I;if(Qt(x))x.forEach(function(O){return y.to(v,O,">")}),y.duration();else{w={};for(L in x)L==="ease"||L==="easeEach"||UR(L,x[L],w,x.easeEach);for(L in w)for(V=w[L].sort(function(O,Y){return O.t-Y.t}),U=0,E=0;E<V.length;E++)b=V[E],I={ease:b.e,duration:(b.t-(E?V[E-1].t:0))/100*u},I[L]=b.v,y.to(v,I,U),U+=I.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return p===!0&&!Kh&&(mr=Fi(a),pt.killTweensOf(v),mr=0),Ti(_,Fi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!x&&a._start===dt(_._time)&&yn(d)&&fR(Fi(a))&&_.data!=="nested")&&(a._tTime=-Je,a.render(Math.max(0,-c)||0)),m&&Tx(Fi(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-Je&&!c?l:r<Je?0:r,h,p,x,g,m,f,_,v,y;if(!u)hR(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=d,v=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,s,o);if(h=dt(d%g),d===l?(x=this._repeat,h=u):(m=dt(d/g),x=~~m,x&&x===m?(h=u,x--):h>u&&(h=u)),f=this._yoyo&&x&1,f&&(y=this._yEase,h=u-h),m=Lo(this._tTime,g),h===a&&!o&&this._initted&&x===m)return this._tTime=d,this;x!==m&&(v&&this._yEase&&zx(v,f),this.vars.repeatRefresh&&!f&&!this._lock&&h!==g&&this._initted&&(this._lock=o=1,this.render(dt(g*x),!0).invalidate()._lock=0))}if(!this._initted){if(wx(this,c?r:h,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&x!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=_=(y||this._ease)(h/u),this._from&&(this.ratio=_=1-_),!a&&d&&!s&&!m&&(Dn(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(_,p.d),p=p._next;v&&v.render(r<0?r:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Bd(this,r,s,o),Dn(this,"onUpdate")),this._repeat&&x!==m&&this.vars.onRepeat&&!s&&this.parent&&Dn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Bd(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ur(this,1),!s&&!(c&&!a)&&(d||a||f)&&(Dn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Ga||bn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||op(this,u),c=this._ease(u/this._dur),DR(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(gc(this,0),this.parent||Mx(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?sa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Vt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,mr&&mr.vars.overwrite!==!0)._first||sa(this),this.parent&&o!==this.timeline.totalDuration()&&Do(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Jn(r):a,u=this._ptLookup,c=this._pt,d,h,p,x,g,m,f;if((!s||s==="all")&&uR(a,l))return s==="all"&&(this._pt=0),sa(this);for(d=this._op=this._op||[],s!=="all"&&(kt(s)&&(g={},Sn(s,function(_){return g[_]=1}),s=g),s=NR(a,s)),f=a.length;f--;)if(~l.indexOf(a[f])){h=u[f],s==="all"?(d[f]=s,x=h,p={}):(p=d[f]=d[f]||{},x=s);for(g in x)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&pc(this,m,"_pt"),delete h[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&c&&sa(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return va(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return va(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return pt.killTweensOf(r,s,o)},e}(Va);zn(At.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Sn("staggerTo,staggerFrom,staggerFromTo",function(n){At[n]=function(){var e=new an,t=Gd.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var ap=function(e,t,i){return e[t]=i},Xx=function(e,t,i){return e[t](i)},IR=function(e,t,i,r){return e[t](r.fp,i)},OR=function(e,t,i){return e.setAttribute(t,i)},lp=function(e,t){return St(e[t])?Xx:Zh(e[t])&&e.setAttribute?OR:ap},jx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},FR=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Yx=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},up=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},kR=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},zR=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?pc(this,t,"_pt"):t.dep||(i=1),t=r;return!i},BR=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},qx=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},Mn=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||jx,this.d=l||this,this.set=u||ap,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=BR,this.m=i,this.mt=s,this.tween=r},n}();Sn(np+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return tp[n]=1});kn.TweenMax=kn.TweenLite=At;kn.TimelineLite=kn.TimelineMax=an;pt=new an({sortChildren:!1,defaults:Po,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});On.stringFilter=Fx;var ms=[],uu={},HR=[],s_=0,GR=0,bf=function(e){return(uu[e]||HR).map(function(t){return t()})},jd=function(){var e=Date.now(),t=[];e-s_>2&&(bf("matchMediaInit"),ms.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=Si.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),bf("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),s_=e,bf("matchMedia"))},$x=function(){function n(t,i){this.selector=i&&Vd(i),this.data=[],this._r=[],this.isReverted=!1,this.id=GR++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){St(i)&&(s=r,r=i,i=St);var o=this,a=function(){var u=ut,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=Vd(s)),ut=o,d=r.apply(o,arguments),St(d)&&o._r.push(d),ut=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===St?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=ut;ut=null,i(this),ut=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof At&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof an?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof At)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=ms.length;o--;)ms[o].id===this.id&&ms.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),VR=function(){function n(t){this.contexts=[],this.scope=t,ut&&ut.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Ri(i)||(i={matches:i});var o=new $x(0,s||this.scope),a=o.conditions={},l,u,c;ut&&!o.selector&&(o.selector=ut.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=Si.matchMedia(i[u]),l&&(ms.indexOf(o)<0&&ms.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(jd):l.addEventListener("change",jd)));return c&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Wu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return Ux(r)})},timeline:function(e){return new an(e)},getTweensOf:function(e,t){return pt.getTweensOf(e,t)},getProperty:function(e,t,i,r){kt(e)&&(e=Jn(e)[0]);var s=ds(e||{}).get,o=i?Sx:yx;return i==="native"&&(i=""),e&&(t?o((Pn[t]&&Pn[t].get||s)(e,t,i,r)):function(a,l,u){return o((Pn[a]&&Pn[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Jn(e),e.length>1){var r=e.map(function(c){return Tn.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=Pn[t],a=ds(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;so._pt=0,d.init(e,i?c+i:c,so,0,[e]),d.render(1,d),so._pt&&up(1,so)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=Tn.to(e,zn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return pt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ps(e.ease,Po.ease)),e_(Po,e||{})},config:function(e){return e_(On,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Pn[a]&&!kn[a]&&za(t+" effect requires "+a+" plugin.")}),Af[t]=function(a,l,u){return i(Jn(a),zn(l||{},s),u)},o&&(an.prototype[t]=function(a,l,u){return this.add(Af[t](a,Ri(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){Ve[e]=ps(t)},parseEase:function(e,t){return arguments.length?ps(e,t):Ve},getById:function(e){return pt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new an(e),r,s;for(i.smoothChildTiming=yn(e.smoothChildTiming),pt.remove(i),i._dp=0,i._time=i._tTime=pt._time,r=pt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof At&&r.vars.onComplete===r._targets[0]))&&Ti(i,r,r._start-r._delay),r=s;return Ti(pt,i,0),i},context:function(e,t){return e?new $x(e,t):ut},matchMedia:function(e){return new VR(e)},matchMediaRefresh:function(){return ms.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||jd()},addEventListener:function(e,t){var i=uu[e]||(uu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=uu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:SR,wrapYoyo:MR,distribute:Rx,random:bx,snap:Px,normalize:yR,getUnit:Zt,clamp:gR,splitColor:Ix,toArray:Jn,selector:Vd,mapRange:Dx,pipe:vR,unitize:xR,interpolate:ER,shuffle:Cx},install:mx,effects:Af,ticker:bn,updateRoot:an.updateRoot,plugins:Pn,globalTimeline:pt,core:{PropTween:Mn,globals:gx,Tween:At,Timeline:an,Animation:Va,getCache:ds,_removeLinkedListItem:pc,reverting:function(){return Vt},context:function(e){return e&&ut&&(ut.data.push(e),e._ctx=ut),ut},suppressOverwrites:function(e){return Kh=e}}};Sn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Wu[n]=At[n]});bn.add(an.updateRoot);so=Wu.to({},{duration:0});var WR=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},XR=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=WR(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Lf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(kt(s)&&(l={},Sn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}XR(a,s)}}}},Tn=Wu.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Vt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Lf("roundProps",Wd),Lf("modifiers"),Lf("snap",Px))||Wu;At.version=an.version=Tn.version="3.14.2";px=1;Qh()&&No();Ve.Power0;Ve.Power1;Ve.Power2;Ve.Power3;Ve.Power4;Ve.Linear;Ve.Quad;Ve.Cubic;Ve.Quart;Ve.Quint;Ve.Strong;Ve.Elastic;Ve.Back;Ve.SteppedEase;Ve.Bounce;Ve.Sine;Ve.Expo;Ve.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var o_,gr,go,cp,ss,a_,fp,jR=function(){return typeof window<"u"},Zi={},Jr=180/Math.PI,_o=Math.PI/180,Vs=Math.atan2,l_=1e8,dp=/([A-Z])/g,YR=/(left|right|width|margin|padding|x)/i,qR=/[\s,\(]\S/,wi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Yd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},$R=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},KR=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ZR=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},QR=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Kx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Zx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},JR=function(e,t,i){return e.style[t]=i},eP=function(e,t,i){return e.style.setProperty(t,i)},tP=function(e,t,i){return e._gsap[t]=i},nP=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},iP=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},rP=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},mt="transform",En=mt+"Origin",sP=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Zi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=wi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=zi(r,a)}):this.tfm[e]=o.x?o[e]:zi(r,e),e===En&&(this.tfm.zOrigin=o.zOrigin);else return wi.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(mt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(En,t,"")),e=mt}(s||t)&&this.props.push(e,t,s[e])},Qx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},oP=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(dp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=fp(),(!s||!s.isStart)&&!i[mt]&&(Qx(i),r.zOrigin&&i[En]&&(i[En]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Jx=function(e,t){var i={target:e,props:[],revert:oP,save:sP};return e._gsap||Tn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},ey,qd=function(e,t){var i=gr.createElementNS?gr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):gr.createElement(e);return i&&i.style?i:gr.createElement(e)},Nn=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(dp,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Uo(t)||t,1)||""},u_="O,Moz,ms,Ms,Webkit".split(","),Uo=function(e,t,i){var r=t||ss,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(u_[o]+e in s););return o<0?null:(o===3?"ms":o>=0?u_[o]:"")+e},$d=function(){jR()&&window.document&&(o_=window,gr=o_.document,go=gr.documentElement,ss=qd("div")||{style:{}},qd("div"),mt=Uo(mt),En=mt+"Origin",ss.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ey=!!Uo("perspective"),fp=Tn.core.reverting,cp=1)},c_=function(e){var t=e.ownerSVGElement,i=qd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),go.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),go.removeChild(i),s},f_=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},ty=function(e){var t,i;try{t=e.getBBox()}catch{t=c_(e),i=1}return t&&(t.width||t.height)||i||(t=c_(e)),t&&!t.width&&!t.x&&!t.y?{x:+f_(e,["x","cx","x1"])||0,y:+f_(e,["y","cy","y1"])||0,width:0,height:0}:t},ny=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ty(e))},Ir=function(e,t){if(t){var i=e.style,r;t in Zi&&t!==En&&(t=mt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(dp,"-$1").toLowerCase())):i.removeAttribute(t)}},_r=function(e,t,i,r,s,o){var a=new Mn(e._pt,t,i,0,1,o?Zx:Kx);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},d_={deg:1,rad:1,turn:1},aP={grid:1,flex:1},Or=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=ss.style,l=YR.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",p=r==="%",x,g,m,f;if(r===o||!s||d_[r]||d_[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),f=e.getCTM&&ny(e),(p||o==="%")&&(Zi[t]||~t.indexOf("adius")))return x=f?e.getBBox()[l?"width":"height"]:e[c],Et(p?s/x*d:s/100*x);if(a[l?"width":"height"]=d+(h?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,f&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===gr||!g.appendChild)&&(g=gr.body),m=g._gsap,m&&p&&m.width&&l&&m.time===bn.time&&!m.uncache)return Et(s/m.width*d);if(p&&(t==="height"||t==="width")){var _=e.style[t];e.style[t]=d+r,x=e[c],_?e.style[t]=_:Ir(e,t)}else(p||o==="%")&&!aP[Nn(g,"display")]&&(a.position=Nn(e,"position")),g===e&&(a.position="static"),g.appendChild(ss),x=ss[c],g.removeChild(ss),a.position="absolute";return l&&p&&(m=ds(g),m.time=bn.time,m.width=g[c]),Et(h?x*s/d:x&&s?d/x*s:0)},zi=function(e,t,i,r){var s;return cp||$d(),t in wi&&t!=="transform"&&(t=wi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Zi[t]&&t!=="transform"?(s=Xa(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ju(Nn(e,En))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Xu[t]&&Xu[t](e,t,i)||Nn(e,t)||vx(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Or(e,t,s,i)+i:s},lP=function(e,t,i,r){if(!i||i==="none"){var s=Uo(t,e,1),o=s&&Nn(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Nn(e,"borderTopColor"))}var a=new Mn(this._pt,e.style,t,0,1,Yx),l=0,u=0,c,d,h,p,x,g,m,f,_,v,y,E;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Nn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=Nn(e,t)||r,g?e.style[t]=g:Ir(e,t)),c=[i,r],Fx(c),i=c[0],r=c[1],h=i.match(ro)||[],E=r.match(ro)||[],E.length){for(;d=ro.exec(r);)m=d[0],_=r.substring(l,d.index),x?x=(x+1)%5:(_.substr(-5)==="rgba("||_.substr(-5)==="hsla(")&&(x=1),m!==(g=h[u++]||"")&&(p=parseFloat(g)||0,y=g.substr((p+"").length),m.charAt(1)==="="&&(m=mo(p,m)+y),f=parseFloat(m),v=m.substr((f+"").length),l=ro.lastIndex-v.length,v||(v=v||On.units[t]||y,l===r.length&&(r+=v,a.e+=v)),y!==v&&(p=Or(e,t,g,v)||0),a._pt={_next:a._pt,p:_||u===1?_:",",s:p,c:f-p,m:x&&x<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Zx:Kx;return hx.test(r)&&(a.e=0),this._pt=a,a},h_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},uP=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=h_[i]||i,t[1]=h_[r]||r,t.join(" ")},cP=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Zi[a]&&(l=1,a=a==="transformOrigin"?En:mt),Ir(i,a);l&&(Ir(i,mt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Xa(i,1),o.uncache=1,Qx(r)))}},Xu={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Mn(e._pt,t,i,0,0,cP);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Wa=[1,0,0,1,0,0],iy={},ry=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},p_=function(e){var t=Nn(e,mt);return ry(t)?Wa:t.substr(7).match(dx).map(Et)},hp=function(e,t){var i=e._gsap||ds(e),r=e.style,s=p_(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Wa:s):(s===Wa&&!e.offsetParent&&e!==go&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,go.appendChild(e)),s=p_(e),l?r.display=l:Ir(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):go.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Kd=function(e,t,i,r,s,o){var a=e._gsap,l=s||hp(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,p=l[0],x=l[1],g=l[2],m=l[3],f=l[4],_=l[5],v=t.split(" "),y=parseFloat(v[0])||0,E=parseFloat(v[1])||0,w,M,L,S;i?l!==Wa&&(M=p*m-x*g)&&(L=y*(m/M)+E*(-g/M)+(g*_-m*f)/M,S=y*(-x/M)+E*(p/M)-(p*_-x*f)/M,y=L,E=S):(w=ty(e),y=w.x+(~v[0].indexOf("%")?y/100*w.width:y),E=w.y+(~(v[1]||v[0]).indexOf("%")?E/100*w.height:E)),r||r!==!1&&a.smooth?(f=y-u,_=E-c,a.xOffset=d+(f*p+_*g)-f,a.yOffset=h+(f*x+_*m)-_):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=E,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[En]="0px 0px",o&&(_r(o,a,"xOrigin",u,y),_r(o,a,"yOrigin",c,E),_r(o,a,"xOffset",d,a.xOffset),_r(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+E)},Xa=function(e,t){var i=e._gsap||new Hx(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Nn(e,En)||"0",c,d,h,p,x,g,m,f,_,v,y,E,w,M,L,S,A,B,U,V,b,I,O,Y,N,z,k,Z,Q,q,K,re;return c=d=h=g=m=f=_=v=y=0,p=x=1,i.svg=!!(e.getCTM&&ny(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[mt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[mt]!=="none"?l[mt]:"")),r.scale=r.rotate=r.translate="none"),M=hp(e,i.svg),i.svg&&(i.uncache?(N=e.getBBox(),u=i.xOrigin-N.x+"px "+(i.yOrigin-N.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Kd(e,Y||u,!!Y||i.originIsAbsolute,i.smooth!==!1,M)),E=i.xOrigin||0,w=i.yOrigin||0,M!==Wa&&(B=M[0],U=M[1],V=M[2],b=M[3],c=I=M[4],d=O=M[5],M.length===6?(p=Math.sqrt(B*B+U*U),x=Math.sqrt(b*b+V*V),g=B||U?Vs(U,B)*Jr:0,_=V||b?Vs(V,b)*Jr+g:0,_&&(x*=Math.abs(Math.cos(_*_o))),i.svg&&(c-=E-(E*B+w*V),d-=w-(E*U+w*b))):(re=M[6],q=M[7],k=M[8],Z=M[9],Q=M[10],K=M[11],c=M[12],d=M[13],h=M[14],L=Vs(re,Q),m=L*Jr,L&&(S=Math.cos(-L),A=Math.sin(-L),Y=I*S+k*A,N=O*S+Z*A,z=re*S+Q*A,k=I*-A+k*S,Z=O*-A+Z*S,Q=re*-A+Q*S,K=q*-A+K*S,I=Y,O=N,re=z),L=Vs(-V,Q),f=L*Jr,L&&(S=Math.cos(-L),A=Math.sin(-L),Y=B*S-k*A,N=U*S-Z*A,z=V*S-Q*A,K=b*A+K*S,B=Y,U=N,V=z),L=Vs(U,B),g=L*Jr,L&&(S=Math.cos(L),A=Math.sin(L),Y=B*S+U*A,N=I*S+O*A,U=U*S-B*A,O=O*S-I*A,B=Y,I=N),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,f=180-f),p=Et(Math.sqrt(B*B+U*U+V*V)),x=Et(Math.sqrt(O*O+re*re)),L=Vs(I,O),_=Math.abs(L)>2e-4?L*Jr:0,y=K?1/(K<0?-K:K):0),i.svg&&(Y=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!ry(Nn(e,mt)),Y&&e.setAttribute("transform",Y))),Math.abs(_)>90&&Math.abs(_)<270&&(s?(p*=-1,_+=g<=0?180:-180,g+=g<=0?180:-180):(x*=-1,_+=_<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Et(p),i.scaleY=Et(x),i.rotation=Et(g)+a,i.rotationX=Et(m)+a,i.rotationY=Et(f)+a,i.skewX=_+a,i.skewY=v+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[En]=ju(u)),i.xOffset=i.yOffset=0,i.force3D=On.force3D,i.renderTransform=i.svg?dP:ey?sy:fP,i.uncache=0,i},ju=function(e){return(e=e.split(" "))[0]+" "+e[1]},Df=function(e,t,i){var r=Zt(t);return Et(parseFloat(t)+parseFloat(Or(e,"x",i+"px",r)))+r},fP=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,sy(e,t)},Yr="0deg",ea="0px",qr=") ",sy=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,h=i.skewX,p=i.skewY,x=i.scaleX,g=i.scaleY,m=i.transformPerspective,f=i.force3D,_=i.target,v=i.zOrigin,y="",E=f==="auto"&&e&&e!==1||f===!0;if(v&&(d!==Yr||c!==Yr)){var w=parseFloat(c)*_o,M=Math.sin(w),L=Math.cos(w),S;w=parseFloat(d)*_o,S=Math.cos(w),o=Df(_,o,M*S*-v),a=Df(_,a,-Math.sin(w)*-v),l=Df(_,l,L*S*-v+v)}m!==ea&&(y+="perspective("+m+qr),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(E||o!==ea||a!==ea||l!==ea)&&(y+=l!==ea||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+qr),u!==Yr&&(y+="rotate("+u+qr),c!==Yr&&(y+="rotateY("+c+qr),d!==Yr&&(y+="rotateX("+d+qr),(h!==Yr||p!==Yr)&&(y+="skew("+h+", "+p+qr),(x!==1||g!==1)&&(y+="scale("+x+", "+g+qr),_.style[mt]=y||"translate(0, 0)"},dP=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,h=i.scaleY,p=i.target,x=i.xOrigin,g=i.yOrigin,m=i.xOffset,f=i.yOffset,_=i.forceCSS,v=parseFloat(o),y=parseFloat(a),E,w,M,L,S;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=_o,u*=_o,E=Math.cos(l)*d,w=Math.sin(l)*d,M=Math.sin(l-u)*-h,L=Math.cos(l-u)*h,u&&(c*=_o,S=Math.tan(u-c),S=Math.sqrt(1+S*S),M*=S,L*=S,c&&(S=Math.tan(c),S=Math.sqrt(1+S*S),E*=S,w*=S)),E=Et(E),w=Et(w),M=Et(M),L=Et(L)):(E=d,L=h,w=M=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=Or(p,"x",o,"px"),y=Or(p,"y",a,"px")),(x||g||m||f)&&(v=Et(v+x-(x*E+g*M)+m),y=Et(y+g-(x*w+g*L)+f)),(r||s)&&(S=p.getBBox(),v=Et(v+r/100*S.width),y=Et(y+s/100*S.height)),S="matrix("+E+","+w+","+M+","+L+","+v+","+y+")",p.setAttribute("transform",S),_&&(p.style[mt]=S)},hP=function(e,t,i,r,s){var o=360,a=kt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Jr:1),u=l-r,c=r+u+"deg",d,h;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*l_)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*l_)%o-~~(u/o)*o)),e._pt=h=new Mn(e._pt,t,i,r,u,$R),h.e=c,h.u="deg",e._props.push(i),h},m_=function(e,t){for(var i in t)e[i]=t[i];return e},pP=function(e,t,i){var r=m_({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,h,p,x;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[mt]=t,a=Xa(i,1),Ir(i,mt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[mt],o[mt]=t,a=Xa(i,1),o[mt]=u);for(l in Zi)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Zt(u),x=Zt(c),d=p!==x?Or(i,l,u,x):parseFloat(u),h=parseFloat(c),e._pt=new Mn(e._pt,a,l,d,h-d,Yd),e._pt.u=x||0,e._props.push(l));m_(a,r)};Sn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Xu[e>1?"border"+n:n]=function(a,l,u,c,d){var h,p;if(arguments.length<4)return h=o.map(function(x){return zi(a,x,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(x,g){return p[x]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,p,d)}});var oy={name:"css",register:$d,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,h,p,x,g,m,f,_,v,y,E,w,M,L,S;cp||$d(),this.styles=this.styles||Jx(e),L=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(c=t[g],!(Pn[g]&&Gx(g,t,i,r,e,s)))){if(p=typeof c,x=Xu[g],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Ha(c)),x)x(this,e,g,c,i)&&(M=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",br.lastIndex=0,br.test(u)||(m=Zt(u),f=Zt(c),f?m!==f&&(u=Or(e,g,u,f)+f):m&&(c+=m)),this.add(a,"setProperty",u,c,r,s,0,0,g),o.push(g),L.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],kt(u)&&~u.indexOf("random(")&&(u=Ha(u)),Zt(u+"")||u==="auto"||(u+=On.units[g]||Zt(zi(e,g))||""),(u+"").charAt(1)==="="&&(u=zi(e,g))):u=zi(e,g),h=parseFloat(u),_=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),_&&(c=c.substr(2)),d=parseFloat(c),g in wi&&(g==="autoAlpha"&&(h===1&&zi(e,"visibility")==="hidden"&&d&&(h=0),L.push("visibility",0,a.visibility),_r(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=wi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in Zi,v){if(this.styles.save(g),S=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=Nn(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=c,c=Nn(e,"perspective"),A?e.style.perspective=A:Ir(e,"perspective")}d=parseFloat(c)}if(y||(E=e._gsap,E.renderTransform&&!t.parseTransform||Xa(e,t.parseTransform),w=t.smoothOrigin!==!1&&E.smooth,y=this._pt=new Mn(this._pt,a,mt,0,1,E.renderTransform,E,0,-1),y.dep=1),g==="scale")this._pt=new Mn(this._pt,E,"scaleY",E.scaleY,(_?mo(E.scaleY,_+d):d)-E.scaleY||0,Yd),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){L.push(En,0,a[En]),c=uP(c),E.svg?Kd(e,c,0,w,0,this):(f=parseFloat(c.split(" ")[2])||0,f!==E.zOrigin&&_r(this,E,"zOrigin",E.zOrigin,f),_r(this,a,g,ju(u),ju(c)));continue}else if(g==="svgOrigin"){Kd(e,c,1,w,0,this);continue}else if(g in iy){hP(this,E,g,h,_?mo(h,_+c):c);continue}else if(g==="smoothOrigin"){_r(this,E,"smooth",E.smooth,c);continue}else if(g==="force3D"){E[g]=c;continue}else if(g==="transform"){pP(this,c,e);continue}}else g in a||(g=Uo(g)||g);if(v||(d||d===0)&&(h||h===0)&&!qR.test(c)&&g in a)m=(u+"").substr((h+"").length),d||(d=0),f=Zt(c)||(g in On.units?On.units[g]:m),m!==f&&(h=Or(e,g,u,f)),this._pt=new Mn(this._pt,v?E:a,g,h,(_?mo(h,_+d):d)-h,!v&&(f==="px"||g==="zIndex")&&t.autoRound!==!1?QR:Yd),this._pt.u=f||0,v&&S!==c?(this._pt.b=u,this._pt.e=S,this._pt.r=ZR):m!==f&&f!=="%"&&(this._pt.b=u,this._pt.r=KR);else if(g in a)lP.call(this,e,g,u,_?_+c:c);else if(g in e)this.add(e,g,u||e[g],_?_+c:c,r,s);else if(g!=="parseTransform"){ep(g,c);continue}v||(g in a?L.push(g,0,a[g]):typeof e[g]=="function"?L.push(g,2,e[g]()):L.push(g,1,u||e[g])),o.push(g)}}M&&qx(this)},render:function(e,t){if(t.tween._time||!fp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:zi,aliases:wi,getSetter:function(e,t,i){var r=wi[t];return r&&r.indexOf(",")<0&&(t=r),t in Zi&&t!==En&&(e._gsap.x||zi(e,"x"))?i&&a_===i?t==="scale"?nP:tP:(a_=i||{})&&(t==="scale"?iP:rP):e.style&&!Zh(e.style[t])?JR:~t.indexOf("-")?eP:lp(e,t)},core:{_removeProperty:Ir,_getMatrix:hp}};Tn.utils.checkPrefix=Uo;Tn.core.getStyleSaver=Jx;(function(n,e,t,i){var r=Sn(n+","+e+","+t,function(s){Zi[s]=1});Sn(e,function(s){On.units[s]="deg",iy[s]=1}),wi[r[13]]=n+","+e,Sn(i,function(s){var o=s.split(":");wi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Sn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){On.units[n]="px"});Tn.registerPlugin(oy);var ai=Tn.registerPlugin(oy)||Tn;ai.core.Tween;class $n{constructor(e,t={}){if(!(e instanceof Node))throw"Can't initialize VanillaTilt because "+e+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=e,this.settings=this.extendSettings(t),this.reverse=this.settings.reverse?-1:1,this.resetToStart=$n.isSettingTrue(this.settings["reset-to-start"]),this.glare=$n.isSettingTrue(this.settings.glare),this.glarePrerender=$n.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=$n.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=$n.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.reset(),this.resetToStart===!1&&(this.settings.startX=0,this.settings.startY=0)}static isSettingTrue(e){return e===""||e===!0||e===1}getElementListener(){if(this.fullPageListening)return window.document;if(typeof this.settings["mouse-event-element"]=="string"){const e=document.querySelector(this.settings["mouse-event-element"]);if(e)return e}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element}addEventListeners(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResize.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)}removeEventListeners(){this.elementListener.removeEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.removeEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.removeEventListener("mousemove",this.onMouseMoveBind),this.gyroscope&&window.removeEventListener("deviceorientation",this.onDeviceOrientationBind),(this.glare||this.fullPageListening)&&window.removeEventListener("resize",this.onWindowResizeBind)}destroy(){clearTimeout(this.transitionTimeout),this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.element.style.willChange="",this.element.style.transition="",this.element.style.transform="",this.resetGlare(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null}onDeviceOrientation(e){if(e.gamma===null||e.beta===null)return;this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,this.gammazero===null?(this.gammazero=e.gamma,this.betazero=e.beta):(this.gammazero=(e.gamma+this.lastgammazero)/2,this.betazero=(e.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);const t=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,i=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,r=t/this.width,s=i/this.height,o=e.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero),a=e.beta-(this.settings.gyroscopeMinAngleY+this.betazero),l=o/r,u=a/s;this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.event={clientX:l+this.left,clientY:u+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}onMouseEnter(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()}onMouseMove(e){this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.event=e,this.updateCall=requestAnimationFrame(this.updateBind)}onMouseLeave(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)}reset(){this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};let e=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=e,this.resetGlare()}resetGlare(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")}getValues(){let e,t;this.fullPageListening?(e=this.event.clientX/this.clientWidth,t=this.event.clientY/this.clientHeight):(e=(this.event.clientX-this.left)/this.width,t=(this.event.clientY-this.top)/this.height),e=Math.min(Math.max(e,0),1),t=Math.min(Math.max(t,0),1);let i=(this.reverse*(this.settings.max-e*this.settings.max*2)).toFixed(2),r=(this.reverse*(t*this.settings.max*2-this.settings.max)).toFixed(2),s=Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI);return{tiltX:i,tiltY:r,percentageX:e*100,percentageY:t*100,angle:s}}updateElementPosition(){let e=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=e.left,this.top=e.top}update(){let e=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+(this.settings.axis==="x"?0:e.tiltY)+"deg) rotateY("+(this.settings.axis==="y"?0:e.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform=`rotate(${e.angle}deg) translate(-50%, -50%)`,this.glareElement.style.opacity=`${e.percentageY*this.settings["max-glare"]/100}`),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:e})),this.updateCall=null}prepareGlare(){if(!this.glarePrerender){const e=document.createElement("div");e.classList.add("js-tilt-glare");const t=document.createElement("div");t.classList.add("js-tilt-glare-inner"),e.appendChild(t),this.element.appendChild(e)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),!this.glarePrerender&&(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none","border-radius":"inherit"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}),this.updateGlareSize())}updateGlareSize(){if(this.glare){const e=(this.element.offsetWidth>this.element.offsetHeight?this.element.offsetWidth:this.element.offsetHeight)*2;Object.assign(this.glareElement.style,{width:`${e}px`,height:`${e}px`})}}updateClientSize(){this.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}onWindowResize(){this.updateGlareSize(),this.updateClientSize()}setTransition(){clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition=`opacity ${this.settings.speed}ms ${this.settings.easing}`),this.transitionTimeout=setTimeout(()=>{this.element.style.transition="",this.glare&&(this.glareElement.style.transition="")},this.settings.speed)}extendSettings(e){let t={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,"reset-to-start":!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},i={};for(var r in t)if(r in e)i[r]=e[r];else if(this.element.hasAttribute("data-tilt-"+r)){let s=this.element.getAttribute("data-tilt-"+r);try{i[r]=JSON.parse(s)}catch{i[r]=s}}else i[r]=t[r];return i}static init(e,t){e instanceof Node&&(e=[e]),e instanceof NodeList&&(e=[].slice.call(e)),e instanceof Array&&e.forEach(i=>{"vanillaTilt"in i||(i.vanillaTilt=new $n(i,t))})}}typeof document<"u"&&(window.VanillaTilt=$n,$n.init(document.querySelectorAll("[data-tilt]")));function mP(){return P.jsx("div",{style:{backgroundColor:"transparent",color:"var(--text-color)",minHeight:"100vh",padding:"50px 20px",fontFamily:'"Arial", sans-serif'},children:P.jsxs("div",{style:{backgroundColor:"var(--menu-bg)",border:"1px solid var(--glass-border)",borderRadius:"15px",padding:"40px",maxWidth:"750px",margin:"0 auto",marginBottom:"50px",boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)"},children:[P.jsxs("div",{style:{textAlign:"center",marginBottom:"30px"},children:[P.jsx("h1",{style:{color:"#e74c3c",fontSize:"2.2rem",letterSpacing:"2px",textTransform:"uppercase",margin:"0 0 15px 0"},children:"NAGESH L"}),P.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.85rem",margin:0},children:"nageshl15260@gmail.com | 6360744922 | Chamrajnagar, India 571313"})]}),P.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--glass-border)",marginBottom:"30px"}}),P.jsxs("div",{style:{marginBottom:"35px"},children:[P.jsx("h2",{style:{color:"#e74c3c",fontSize:"1.1rem",textTransform:"uppercase",marginBottom:"15px",letterSpacing:"1px"},children:"Summary"}),P.jsx("p",{style:{fontSize:"0.9rem",lineHeight:"1.6",color:"var(--text-color)",margin:0},children:"Motivated BCA student and aspiring web developer skilled in HTML, CSS, and JavaScript. Experienced in building responsive websites and Python-based mini projects. Strong interest in frontend development, problem-solving, and continuous learning."})]}),P.jsxs("div",{style:{marginBottom:"35px"},children:[P.jsx("h2",{style:{color:"#e74c3c",fontSize:"1.1rem",textTransform:"uppercase",marginBottom:"15px",letterSpacing:"1px"},children:"Skills"}),P.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"5px",fontSize:"0.9rem",color:"var(--text-color)"},children:[P.jsxs("ul",{style:{listStyleType:"disc",paddingLeft:"20px",margin:0,lineHeight:"1.8"},children:[P.jsxs("li",{children:[P.jsx("strong",{children:"Web Development:"})," HTML, CSS, JavaScript"]}),P.jsxs("li",{children:[P.jsx("strong",{children:"Programming:"})," Python, C"]}),P.jsxs("li",{children:[P.jsx("strong",{children:"Database:"})," MySQL"]})]}),P.jsxs("ul",{style:{listStyleType:"disc",paddingLeft:"20px",margin:0,lineHeight:"1.8"},children:[P.jsxs("li",{children:[P.jsx("strong",{children:"Tools:"})," GitHub, VS Code"]}),P.jsxs("li",{children:[P.jsx("strong",{children:"Other:"})," Responsive Design, Debugging, Teamwork"]})]})]})]}),P.jsxs("div",{style:{marginBottom:"35px"},children:[P.jsx("h2",{style:{color:"#e74c3c",fontSize:"1.1rem",textTransform:"uppercase",marginBottom:"15px",letterSpacing:"1px"},children:"Projects"}),P.jsxs("div",{style:{marginBottom:"25px"},children:[P.jsx("strong",{style:{fontSize:"0.95rem",color:"var(--text-color)",display:"block"},children:"Online Code Compiler (AI-assisted)"}),P.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-muted)",margin:"5px 0 10px 0"},children:"Full Stack | 2026"}),P.jsxs("ul",{style:{listStyleType:"disc",paddingLeft:"20px",fontSize:"0.9rem",color:"var(--text-color)",lineHeight:"1.8",margin:0},children:[P.jsx("li",{children:"Worked with an AI-generated full-stack codebase for an online compiler."}),P.jsx("li",{children:"Identified and fixed issues in both frontend and backend components."}),P.jsx("li",{children:"Assisted in deploying the application on AWS."}),P.jsx("li",{children:"Gained understanding of full-stack architecture and code execution flow."})]})]}),P.jsxs("div",{style:{marginBottom:"25px"},children:[P.jsx("strong",{style:{fontSize:"0.95rem",color:"var(--text-color)",display:"block"},children:"Web Development Mini Project"}),P.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-muted)",margin:"5px 0 10px 0"},children:"Vidya Vikas FGC | Mysore | 09/2024 – 01/2025"}),P.jsxs("ul",{style:{listStyleType:"disc",paddingLeft:"20px",fontSize:"0.9rem",color:"var(--text-color)",lineHeight:"1.8",margin:0},children:[P.jsx("li",{children:"Developed a responsive website using HTML, CSS, and JavaScript."}),P.jsx("li",{children:"Learned core frontend concepts and page layouts."}),P.jsx("li",{children:"Collaborated with classmates to manage tasks and testing."})]})]}),P.jsxs("div",{children:[P.jsx("strong",{style:{fontSize:"0.95rem",color:"var(--text-color)",display:"block"},children:"Python Mini Project"}),P.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-muted)",margin:"5px 0 10px 0"},children:"Vidya Vikas FGC | Mysore | 09/2024 – 01/2025"}),P.jsxs("ul",{style:{listStyleType:"disc",paddingLeft:"20px",fontSize:"0.9rem",color:"var(--text-color)",lineHeight:"1.8",margin:0},children:[P.jsx("li",{children:"Built a console-based Python application."}),P.jsx("li",{children:"Practiced loops, functions, and file handling."})]})]})]}),P.jsxs("div",{style:{marginBottom:"35px"},children:[P.jsx("h2",{style:{color:"#e74c3c",fontSize:"1.1rem",textTransform:"uppercase",marginBottom:"15px",letterSpacing:"1px"},children:"Education"}),P.jsx("strong",{style:{fontSize:"0.95rem",color:"var(--text-color)",display:"block"},children:"Bachelor of Computer Applications (BCA)"}),P.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-color)",margin:"5px 0 0 0"},children:"Vidya Vikas First Grade College, Mysore"}),P.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-muted)",margin:"5px 0 0 0"},children:"09/2023 – 06/2026 (Expected)"})]}),P.jsxs("div",{style:{marginBottom:"35px"},children:[P.jsx("h2",{style:{color:"#e74c3c",fontSize:"1.1rem",textTransform:"uppercase",marginBottom:"15px",letterSpacing:"1px"},children:"Languages"}),P.jsxs("ul",{style:{listStyleType:"disc",paddingLeft:"20px",fontSize:"0.9rem",color:"var(--text-color)",lineHeight:"1.8",margin:0},children:[P.jsx("li",{children:"Kannada – Native"}),P.jsx("li",{children:"English – Intermediate"}),P.jsx("li",{children:"Hindi – Advanced"})]})]}),P.jsxs("div",{style:{marginBottom:"60px"},children:[P.jsx("h2",{style:{color:"#e74c3c",fontSize:"1.1rem",textTransform:"uppercase",marginBottom:"15px",letterSpacing:"1px"},children:"Certifications"}),P.jsxs("ul",{style:{listStyleType:"disc",paddingLeft:"20px",fontSize:"0.9rem",color:"var(--text-color)",lineHeight:"1.8",margin:0},children:[P.jsx("li",{children:"Python Essentials Certificate – Cisco (Completed 2024)"}),P.jsx("li",{children:"Python Essentials Certificate Level 2 – Cisco (Completed 2024)"})]})]}),P.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"20px",flexWrap:"wrap"},children:P.jsx("a",{href:"Nagesh L Resume .pdf",download:"Nagesh L Resume .pdf",style:{border:"1px solid #e74c3c",color:"var(--bg-color)",backgroundColor:"#e74c3c",padding:"10px 30px",borderRadius:"30px",textDecoration:"none",fontWeight:"600",fontSize:"0.9rem",transition:"0.3s"},children:"Download PDF"})})]})})}function gP(){const[n,e]=at.useState(!1),[t,i]=at.useState(!1),[r,s]=at.useState(!1),[o,a]=at.useState(null),[l,u]=at.useState(null),[c,d]=at.useState(localStorage.getItem("theme")||"dark"),[h,p]=at.useState(window.location.hash),[x,g]=at.useState(!1),m=at.useRef(!1);at.useEffect(()=>{const U=()=>p(window.location.hash);return window.addEventListener("hashchange",U),()=>window.removeEventListener("hashchange",U)},[]),at.useEffect(()=>{document.body.setAttribute("data-theme",c),localStorage.setItem("theme",c)},[c]);const f=()=>d(U=>U==="dark"?"light":"dark"),_=()=>{x||(g(!0),setTimeout(()=>{g(!1)},500))},v=at.useRef(null),y=at.useRef(null),E=at.useRef(null),w=at.useRef([]),M=at.useRef([]);at.useEffect(()=>{const U=document.getElementById("bg-canvas");if(!U)return;const V=new qC,b=new qn(75,window.innerWidth/window.innerHeight,.1,1e3),I=new ax({canvas:U,alpha:!0});I.setSize(window.innerWidth,window.innerHeight),I.setPixelRatio(window.devicePixelRatio);const O=new Ji,Y=2e3,N=new Float32Array(Y*3);for(let xe=0;xe<Y*3;xe++)N[xe]=(Math.random()-.5)*15;O.setAttribute("position",new gi(N,3));const z=new lx({size:c==="light"?.009:.005,color:c==="light"?43222:62463,transparent:!0,opacity:c==="light"?1:.8}),k=new $C(O,z);V.add(k),b.position.z=3;let Z=0,Q=0;const q=xe=>{Z=xe.clientX,Q=xe.clientY};document.addEventListener("mousemove",q);const K=new KC;let re;const de=()=>{const xe=K.getElapsedTime();k.rotation.y=xe*.05,k.rotation.x=xe*.02,Z>0&&(k.rotation.x+=Q*5e-5,k.rotation.y+=Z*5e-5),I.render(V,b),re=requestAnimationFrame(de)};de();const he=()=>{b.aspect=window.innerWidth/window.innerHeight,b.updateProjectionMatrix(),I.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",he),()=>{document.removeEventListener("mousemove",q),window.removeEventListener("resize",he),cancelAnimationFrame(re),O.dispose(),z.dispose(),I.dispose()}},[c]),at.useEffect(()=>{const U=["Web Developer","Tech Enthusiast"];let V=0,b=0,I=!1,O=100,Y;const N=()=>{const z=U[V],k=y.current;k&&(I?(k.textContent=z.substring(0,b-1),b--,O=50):(k.textContent=z.substring(0,b+1),b++,O=150),!I&&b===z.length?(I=!0,O=2e3):I&&b===0&&(I=!1,V=(V+1)%U.length,O=500),Y=setTimeout(N,O))};return N(),()=>clearTimeout(Y)},[]),at.useEffect(()=>{let U=ai.context(()=>{ai.from(".logo",{opacity:0,y:-20,duration:1,delay:.5}),ai.from(".nav-links li",{opacity:0,y:-20,duration:1,delay:.8,stagger:.2}),ai.from(".hero-content h1",{opacity:0,y:50,duration:1,delay:1.5}),ai.from(".hero-content h2",{opacity:0,y:50,duration:1,delay:1.8}),ai.from(".hero-content p",{opacity:0,y:50,duration:1,delay:2.1}),ai.from(".cta-buttons",{opacity:0,y:50,duration:1,delay:2.4}),ai.from(".hero-3d-wrapper",{opacity:0,x:50,duration:1,delay:2.6}),ai.from(".social-icon",{opacity:0,y:20,duration:1,delay:3,stagger:.2})});return(()=>{window.innerWidth>768&&(E.current&&$n.init(E.current,{max:10,speed:400,glare:!0,"max-glare":.5}),w.current.forEach(b=>b&&$n.init(b,{max:10,speed:400})),M.current.forEach(b=>b&&$n.init(b,{max:10,speed:400})))})(),()=>{U.revert(),E.current&&E.current.vanillaTilt&&E.current.vanillaTilt.destroy(),w.current.forEach(b=>b&&b.vanillaTilt&&b.vanillaTilt.destroy()),M.current.forEach(b=>b&&b.vanillaTilt&&b.vanillaTilt.destroy())}},[]),at.useEffect(()=>{const U=document.querySelectorAll("section"),V=document.querySelectorAll(".nav-links a"),b={root:null,rootMargin:"-150px 0px -40% 0px",threshold:0},I=Y=>{m.current&&window.innerWidth>900||Y.forEach(N=>{if(N.isIntersecting){const z=N.target.getAttribute("id");V.forEach(k=>{k.classList.remove("active"),k.getAttribute("href")===`#${z}`&&k.classList.add("active")}),window.innerWidth>900&&L()}})},O=new IntersectionObserver(I,b);return U.forEach(Y=>O.observe(Y)),()=>{U.forEach(Y=>O.unobserve(Y)),O.disconnect()}},[]);const L=(U=null)=>{const V=U||document.querySelector(".nav-links a.active"),b=document.querySelector(".nav-indicator");if(V&&b){const I=V.getBoundingClientRect(),O=V.closest(".nav-links").getBoundingClientRect();ai.to(b,{left:I.left-O.left,width:I.width,duration:.4,ease:"power2.out",overwrite:!0})}};at.useEffect(()=>(window.innerWidth>900&&setTimeout(L,100),window.addEventListener("resize",L),()=>window.removeEventListener("resize",L)),[]);const S=(U,V)=>{if(U.preventDefault(),e(!1),history.pushState(null,null,V),p(V),V==="#resume"){window.scrollTo(0,0);return}const b=document.querySelector(`.nav-links a[href="${V}"]`),I=document.querySelectorAll(".nav-links a");b&&(window.innerWidth>900&&(I.forEach(O=>O.classList.remove("active")),b.classList.add("active"),L(b)),m.current=!0),setTimeout(()=>{const O=document.querySelector(V);O?(O.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{m.current=!1},1e3)):m.current=!1},50)},A=()=>{if(v.current){const U=v.current.getBoundingClientRect(),V=Math.min(window.innerWidth*.9,window.innerHeight*.9,600),b=V,I=(window.innerHeight-b)/2,O=(window.innerWidth-V)/2;a({top:U.top,left:U.left,width:U.width,height:U.height}),u({top:I,left:O,width:V,height:b}),i(!0),requestAnimationFrame(()=>{requestAnimationFrame(()=>{s(!0)})})}},B=()=>{if(v.current){const U=v.current.getBoundingClientRect();a({top:U.top,left:U.left,width:U.width,height:U.height})}s(!1),setTimeout(()=>{i(!1),a(null)},400)};return P.jsxs(P.Fragment,{children:[P.jsx("canvas",{id:"bg-canvas"}),h==="#resume"?P.jsx(mP,{}):P.jsxs(P.Fragment,{children:[P.jsx("div",{className:`dp-modal ${r?"active":""}`,style:{display:t?"block":"none",pointerEvents:t?"all":"none"},onClick:B,children:P.jsx("img",{src:"/profile.jpg",alt:"Full Profile",onClick:U=>U.stopPropagation(),style:o&&l?r?{position:"fixed",top:`${l.top}px`,left:`${l.left}px`,width:`${l.width}px`,height:`${l.height}px`,transform:"none",borderRadius:"50%",objectFit:"cover"}:{position:"fixed",top:`${o.top}px`,left:`${o.left}px`,width:`${o.width}px`,height:`${o.height}px`,transform:"none",borderRadius:"50%",objectFit:"cover"}:{},className:"dp-modal-img"})}),P.jsx("div",{className:`mobile-overlay ${n?"active":""}`,onClick:()=>e(!1)}),P.jsx("header",{children:P.jsxs("nav",{className:"glass-nav",children:[P.jsx("div",{className:"logo",onClick:_,children:P.jsx("span",{className:x?"shake-text":"",style:{display:"inline-block",position:"relative",zIndex:2},children:"Nagesh L"})}),P.jsxs("ul",{className:`nav-links ${n?"active":""}`,children:[P.jsx("div",{className:"nav-indicator"}),[{id:"#hero",text:"Home"},{id:"#skills",text:"Skills"},{id:"#about",text:"About"},{id:"#projects",text:"Projects"},{id:"#experience",text:"Experience"},{id:"#contact",text:"Contact"}].map((U,V)=>P.jsx("li",{className:`nav-item-${U.id.substring(1)}`,style:n?{animation:`navLinkFade 0.5s ease forwards ${V/7+.3}s`}:{},children:U.id==="#resume"?P.jsx("a",{href:U.id,target:"_blank",rel:"noreferrer",onClick:()=>e(!1),children:U.text}):P.jsx("a",{href:U.id,onClick:b=>S(b,U.id),children:U.text})},V))]}),P.jsxs("div",{className:"nav-actions",children:[P.jsx("button",{className:"theme-switch",onClick:f,children:P.jsx("i",{className:`fas ${c==="dark"?"fa-sun":"fa-moon"}`})}),P.jsxs("div",{className:`hamburger ${n?"toggle":""}`,onClick:()=>e(!n),children:[P.jsx("div",{className:"line1"}),P.jsx("div",{className:"line2"}),P.jsx("div",{className:"line3"})]})]})]})}),P.jsxs("main",{children:[P.jsx("section",{id:"hero",children:P.jsxs("div",{className:"container hero-container",children:[P.jsxs("div",{className:"hero-content",children:[P.jsxs("h1",{children:["Hello, I'm ",P.jsx("span",{className:"neon-text",children:"Nagesh L"})]}),P.jsxs("h2",{className:"typewriter",children:["I am a ",P.jsx("span",{id:"typing-text",ref:y}),P.jsx("span",{className:"cursor",children:"|"})]}),P.jsx("p",{className:"hero-desc",children:"Building the future of the web with 3D interactives and premium aesthetics."}),P.jsxs("div",{className:"cta-buttons",children:[P.jsx("a",{href:"#resume",target:"_blank",rel:"noreferrer",className:"btn btn-primary",style:{marginRight:"15px",marginBottom:"15px"},children:"View Resume"}),P.jsx("a",{href:"#contact",onClick:U=>S(U,"#contact"),className:"btn btn-secondary",style:{marginLeft:"0px",marginBottom:"15px"},children:"Hire Me"})]})]}),P.jsx("div",{className:"hero-3d-wrapper",children:P.jsx("div",{className:"hero-3d-card",ref:E,children:P.jsxs("div",{className:"card-content",children:[P.jsx("div",{className:"profile-img-placeholder",ref:v,onClick:A,children:P.jsx("img",{src:"/profile.jpg",alt:"Nagesh",className:"profile-dp"})}),P.jsx("h3",{children:"Web Developer"}),P.jsx("p",{children:"Creative & Tech Enthusiast"}),P.jsxs("div",{className:"card-socials",children:[P.jsx("a",{href:"https://www.instagram.com/nage.sh_.12?igsh=bzk3eTlubzBxYmMy",target:"_blank",rel:"noreferrer",children:P.jsx("i",{className:"fab fa-instagram"})}),P.jsx("a",{href:"https://github.com/nageshl-12",target:"_blank",rel:"noreferrer",children:P.jsx("i",{className:"fab fa-github"})}),P.jsx("a",{href:"https://www.linkedin.com/in/nagesh-l-842372273/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",target:"_blank",rel:"noreferrer",children:P.jsx("i",{className:"fab fa-linkedin-in"})}),P.jsx("a",{href:"https://www.reddit.com/user/PixelNyx-12/?share_id=vYv0vWsmYowIpVvCKTWmQ&utm_content=1&utm_medium=android_app&utm_name=androidcss&utm_source=share&utm_term=1/",target:"_blank",rel:"noreferrer",children:P.jsx("i",{className:"fab fa-reddit-alien"})})]})]})})})]})}),P.jsx("section",{id:"skills",className:"section",children:P.jsxs("div",{className:"container",children:[P.jsx("h2",{className:"section-title",children:"My Skills"}),P.jsxs("div",{className:"skills-wrapper",children:[P.jsxs("div",{className:"skills-group",children:[P.jsx("h3",{className:"skills-group-title",children:"Frontend"}),P.jsxs("div",{className:"skills-container",children:[P.jsxs("div",{className:"skill-item floating",children:[P.jsx("i",{className:"fab fa-html5",style:{color:"#E34F26"}}),P.jsx("span",{children:"HTML"})]}),P.jsxs("div",{className:"skill-item floating",style:{animationDelay:"0.2s"},children:[P.jsx("i",{className:"fab fa-css3-alt",style:{color:"#1572B6"}}),P.jsx("span",{children:"CSS"})]}),P.jsxs("div",{className:"skill-item floating",style:{animationDelay:"0.4s"},children:[P.jsx("i",{className:"fab fa-js",style:{color:"#F7DF1E"}}),P.jsx("span",{children:"JavaScript"})]}),P.jsxs("div",{className:"skill-item floating",style:{animationDelay:"0.6s"},children:[P.jsx("i",{className:"fab fa-react",style:{color:"#61DAFB"}}),P.jsx("span",{children:"React (Learning)"})]})]})]}),P.jsxs("div",{className:"skills-group",children:[P.jsx("h3",{className:"skills-group-title",children:"Technologies"}),P.jsxs("div",{className:"skills-container",children:[P.jsxs("div",{className:"skill-item floating",style:{animationDelay:"0.8s"},children:[P.jsx("i",{className:"fab fa-git-alt",style:{color:"#F05032"}}),P.jsx("span",{children:"Git"})]}),P.jsxs("div",{className:"skill-item floating",style:{animationDelay:"1.0s"},children:[P.jsx("i",{className:"fab fa-aws",style:{color:"#FF9900"}}),P.jsx("span",{children:"AWS (Basic)"})]}),P.jsxs("div",{className:"skill-item floating",style:{animationDelay:"1.2s"},children:[P.jsx("i",{className:"fas fa-network-wired",style:{color:"#00D1B2"}}),P.jsx("span",{children:"REST API"})]})]})]})]})]})}),P.jsx("section",{id:"about",className:"section",children:P.jsxs("div",{className:"container",children:[P.jsx("h2",{className:"section-title",children:"About Me"}),P.jsx("div",{className:"glass-card about-card",children:P.jsx("p",{children:"I am a BCA student and Frontend Developer (Fresher) skilled in HTML, CSS, and JavaScript, currently learning React.js. I enjoy building responsive web applications and improving my skills through practical projects. I am eager to start my career and gain real-world experience."})}),P.jsxs("div",{className:"education-section",children:[P.jsx("h3",{className:"section-subtitle",children:"Education"}),P.jsx("div",{className:"edu-grid",children:P.jsxs("div",{className:"edu-card glass-card",ref:U=>w.current[0]=U,children:[P.jsx("i",{className:"fas fa-graduation-cap edu-icon"}),P.jsx("h4",{children:"Bachelor of Computer Applications"}),P.jsx("h5",{children:"Vidya Vikas Institute of Engineering and Technology, Mysore"}),P.jsx("span",{className:"year",children:"2023 - 2026"}),P.jsx("p",{children:"Computer Applications"})]})})]})]})}),P.jsx("section",{id:"projects",className:"section",children:P.jsxs("div",{className:"container",children:[P.jsx("h2",{className:"section-title",children:"Featured Projects"}),P.jsx("div",{className:"projects-grid",children:[{title:"Online Code Compiler",desc:"Integrated execution flow for running code in different languages",icon:"fa-code",demoLink:"https://compilex.co.in",codeLink:"https://github.com/nageshl-12/Compile-X-Online-Code-compiler"},{title:"Currency Converter",desc:"A modern, responsive currency converter application with real-time exchange rates.",icon:"fa-coins",demoLink:"https://nageshl-12.github.io/-Currency-Converter-/",codeLink:"https://github.com/nageshl-12/-Currency-Converter-"},{title:"Auth UI",desc:"A secure and responsive authentication UI with seamless sign-in and sign-up flows.",icon:"fa-user-lock",demoLink:"https://nageshl-12.github.io/auth-ui-signin-signup/",codeLink:"https://github.com/nageshl-12/auth-ui-signin-signup"}].map((U,V)=>P.jsxs("div",{className:"project-card glass-card",ref:b=>M.current[V]=b,onClick:()=>U.demoLink!=="#"&&window.open(U.demoLink,"_blank"),style:{cursor:"pointer"},children:[P.jsx("div",{className:"project-img",children:P.jsx("i",{className:`fas ${U.icon}`})}),P.jsxs("div",{className:"project-info",children:[P.jsx("h3",{children:U.title}),P.jsx("p",{children:U.desc}),P.jsxs("div",{className:"project-links",children:[P.jsxs("a",{href:U.demoLink,target:U.demoLink!=="#"?"_blank":"_self",rel:"noreferrer",className:"btn-sm",onClick:b=>b.stopPropagation(),children:[P.jsx("i",{className:"fas fa-eye"})," Demo"]}),P.jsxs("a",{href:U.codeLink,target:U.codeLink!=="#"?"_blank":"_self",rel:"noreferrer",className:"btn-sm",onClick:b=>b.stopPropagation(),children:[P.jsx("i",{className:"fab fa-github"})," Code"]})]})]})]},V))})]})}),P.jsx("section",{id:"experience",className:"section",children:P.jsxs("div",{className:"container",children:[P.jsx("h2",{className:"section-title",children:"Experience"}),P.jsxs("div",{className:"experience-list",children:[P.jsxs("div",{className:"experience-card glass-card",children:[P.jsx("h3",{children:"Frontend Development (Academic Projects)"}),P.jsx("span",{className:"exp-date",children:"2025"}),P.jsx("p",{children:"Worked on frontend projects focusing on clean UI, responsiveness, and basic interactivity."}),P.jsxs("ul",{children:[P.jsx("li",{children:"Built responsive websites using HTML & CSS"}),P.jsx("li",{children:"Created login & signup UI with JavaScript validation"}),P.jsx("li",{children:"Designed animated loading screens using CSS"}),P.jsx("li",{children:"Used GitHub for version control and hosting"})]})]}),P.jsxs("div",{className:"experience-card glass-card",children:[P.jsx("h3",{children:"Web Design Practice"}),P.jsx("span",{className:"exp-date",children:"2023 – 2024"}),P.jsx("p",{children:"Practiced modern web design techniques through hands-on UI experiments and layouts."}),P.jsxs("ul",{children:[P.jsx("li",{children:"Designed landing pages and portfolio layouts"}),P.jsx("li",{children:"Worked with Flexbox and CSS Grid"}),P.jsx("li",{children:"Improved typography and color selection"})]})]}),P.jsxs("div",{className:"experience-card glass-card",children:[P.jsx("h3",{children:"Online Code Compiler (AI-assisted)"}),P.jsx("span",{className:"exp-date",children:"2026"}),P.jsxs("ul",{children:[P.jsx("li",{children:"Worked with an AI-generated full-stack codebase for an online compiler"}),P.jsx("li",{children:"Identified and fixed issues in both frontend and backend components"}),P.jsx("li",{children:"Assisted in deploying the application on AWS"}),P.jsx("li",{children:"Gained understanding of full-stack architecture and code execution flow"})]})]})]})]})}),P.jsx("section",{id:"contact",className:"section",children:P.jsxs("div",{className:"container",children:[P.jsx("h2",{className:"section-title",children:"Get In Touch"}),P.jsxs("div",{className:"contact-wrapper glass-card",children:[P.jsxs("form",{action:"https://api.web3forms.com/submit",method:"POST",id:"contact-form",children:[P.jsx("input",{type:"hidden",name:"access_key",value:"199b0f4f-cf58-452d-b4b2-07c76e2d0d88"}),P.jsx("input",{type:"hidden",name:"subject",value:"New Submission from My Portfolio"}),P.jsxs("div",{className:"input-group",children:[P.jsx("input",{type:"text",name:"name",id:"name",required:!0,placeholder:" "}),P.jsx("label",{htmlFor:"name",children:"Name"})]}),P.jsxs("div",{className:"input-group",children:[P.jsx("input",{type:"email",name:"email",id:"email",required:!0,placeholder:" "}),P.jsx("label",{htmlFor:"email",children:"Email"})]}),P.jsxs("div",{className:"input-group",children:[P.jsx("textarea",{name:"message",id:"message",rows:"5",required:!0,placeholder:" "}),P.jsx("label",{htmlFor:"message",children:"Message"})]}),P.jsx("button",{type:"submit",className:"btn btn-primary btn-block",children:"Send Message"})]}),P.jsxs("div",{className:"social-links",children:[P.jsx("a",{href:"https://github.com/nageshl-12",target:"_blank",rel:"noreferrer",className:"social-icon",children:P.jsx("i",{className:"fab fa-github"})}),P.jsx("a",{href:"https://www.linkedin.com/in/nagesh-l-842372273/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",target:"_blank",rel:"noreferrer",className:"social-icon",children:P.jsx("i",{className:"fab fa-linkedin-in"})}),P.jsx("a",{href:"https://www.instagram.com/nage.sh_.12?igsh=bzk3eTlubzBxYmMy",target:"_blank",rel:"noreferrer",className:"social-icon",children:P.jsx("i",{className:"fab fa-instagram"})}),P.jsx("a",{href:"https://www.reddit.com/user/PixelNyx-12/?share_id=vYv0vWsmYowIpVvCKTWmQ&utm_content=1&utm_medium=android_app&utm_name=androidcss&utm_source=share&utm_term=1/",target:"_blank",rel:"noreferrer",className:"social-icon",children:P.jsx("i",{className:"fab fa-reddit-alien"})})]})]})]})})]}),P.jsx("footer",{children:P.jsx("p",{children:"© 2026 Nagesh L. All Rights Reserved."})})]})]})}Nf.createRoot(document.getElementById("root")).render(P.jsx(Ry.StrictMode,{children:P.jsx(gP,{})}));
