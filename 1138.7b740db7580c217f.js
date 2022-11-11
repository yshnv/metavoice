"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1138],{7423:(ee,W,P)=>{P.d(W,{Uw:()=>u,fo:()=>l});var g=P(5861);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global&&global;var t=(()=>{return(o=t||(t={})).Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",t;var o})();class S extends Error{constructor(e,n,a){super(e),this.message=e,this.code=n,this.data=a}}const G=o=>{var e,n,a,s,r;const f=o.CapacitorCustomPlatform||null,i=o.Capacitor||{},h=i.Plugins=i.Plugins||{},d=o.CapacitorPlatforms,E=(null===(e=null==d?void 0:d.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==f?f.name:(o=>{var e,n;return null!=o&&o.androidBridge?"android":null!==(n=null===(e=null==o?void 0:o.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==n&&n.bridge?"ios":"web"})(o)),se=(null===(n=null==d?void 0:d.currentPlatform)||void 0===n?void 0:n.isNativePlatform)||(()=>"web"!==E()),ce=(null===(a=null==d?void 0:d.currentPlatform)||void 0===a?void 0:a.isPluginAvailable)||(m=>{const p=V.get(m);return!!(null!=p&&p.platforms.has(E())||N(m))}),N=(null===(s=null==d?void 0:d.currentPlatform)||void 0===s?void 0:s.getPluginHeader)||(m=>{var p;return null===(p=i.PluginHeaders)||void 0===p?void 0:p.find(H=>H.name===m)}),V=new Map,me=(null===(r=null==d?void 0:d.currentPlatform)||void 0===r?void 0:r.registerPlugin)||((m,p={})=>{const H=V.get(m);if(H)return console.warn(`Capacitor plugin "${m}" already registered. Cannot register plugins twice.`),H.proxy;const A=E(),M=N(m);let T;const pe=function(){var v=(0,g.Z)(function*(){return!T&&A in p?T=T="function"==typeof p[A]?yield p[A]():p[A]:null!==f&&!T&&"web"in p&&(T=T="function"==typeof p.web?yield p.web():p.web),T});return function(){return v.apply(this,arguments)}}(),q=v=>{let w;const Z=(...x)=>{const L=pe().then(C=>{const O=((v,w)=>{var Z,x;if(!M){if(v)return null===(x=v[w])||void 0===x?void 0:x.bind(v);throw new S(`"${m}" plugin is not implemented on ${A}`,t.Unimplemented)}{const L=null==M?void 0:M.methods.find(C=>w===C.name);if(L)return"promise"===L.rtype?C=>i.nativePromise(m,w.toString(),C):(C,O)=>i.nativeCallback(m,w.toString(),C,O);if(v)return null===(Z=v[w])||void 0===Z?void 0:Z.bind(v)}})(C,v);if(O){const R=O(...x);return w=null==R?void 0:R.remove,R}throw new S(`"${m}.${v}()" is not implemented on ${A}`,t.Unimplemented)});return"addListener"===v&&(L.remove=(0,g.Z)(function*(){return w()})),L};return Z.toString=()=>`${v.toString()}() { [capacitor code] }`,Object.defineProperty(Z,"name",{value:v,writable:!1,configurable:!1}),Z},X=q("addListener"),Y=q("removeListener"),ve=(v,w)=>{const Z=X({eventName:v},w),x=function(){var C=(0,g.Z)(function*(){const O=yield Z;Y({eventName:v,callbackId:O},w)});return function(){return C.apply(this,arguments)}}(),L=new Promise(C=>Z.then(()=>C({remove:x})));return L.remove=(0,g.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield x()}),L},D=new Proxy({},{get(v,w){switch(w){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return M?ve:X;case"removeListener":return Y;default:return q(w)}}});return h[m]=D,V.set(m,{name:m,proxy:D,platforms:new Set([...Object.keys(p),...M?[A]:[]])}),D});return i.convertFileSrc||(i.convertFileSrc=m=>m),i.getPlatform=E,i.handleError=m=>o.console.error(m),i.isNativePlatform=se,i.isPluginAvailable=ce,i.pluginMethodNoop=(m,p,H)=>Promise.reject(`${H} does not have an implementation of "${p}".`),i.registerPlugin=me,i.Exception=S,i.DEBUG=!!i.DEBUG,i.isLoggingEnabled=!!i.isLoggingEnabled,i.platform=i.getPlatform(),i.isNative=i.isNativePlatform(),i},U=(o=>o.Capacitor=G(o))("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}),l=U.registerPlugin;class u{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,n){var a=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(n);const r=this.windowListeners[e];r&&!r.registered&&this.addWindowListener(r);const f=function(){var h=(0,g.Z)(function*(){return a.removeListener(e,n)});return function(){return h.apply(this,arguments)}}(),i=Promise.resolve({remove:f});return Object.defineProperty(i,"remove",{value:(h=(0,g.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield f()}),function(){return h.apply(this,arguments)})}),i;var h}removeAllListeners(){var e=this;return(0,g.Z)(function*(){e.listeners={};for(const n in e.windowListeners)e.removeWindowListener(e.windowListeners[n]);e.windowListeners={}})()}notifyListeners(e,n){const a=this.listeners[e];a&&a.forEach(s=>s(n))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:a=>{this.notifyListeners(n,a)}}}unimplemented(e="not implemented"){return new U.Exception(e,t.Unimplemented)}unavailable(e="not available"){return new U.Exception(e,t.Unavailable)}removeListener(e,n){var a=this;return(0,g.Z)(function*(){const s=a.listeners[e];if(!s)return;const r=s.indexOf(n);a.listeners[e].splice(r,1),a.listeners[e].length||a.removeWindowListener(a.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){!e||(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const y=o=>encodeURIComponent(o).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);class te extends u{setCookie(e){return(0,g.Z)(function*(){try{const n=y(e.key),a=y(e.value),s=`; expires=${(e.expires||"").replace("expires=","")}`,r=(e.path||"/").replace("path=","");document.cookie=`${n}=${a||""}${s}; path=${r}`}catch(n){return Promise.reject(n)}})()}deleteCookie(e){return(0,g.Z)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}})()}clearCookies(){return(0,g.Z)(function*(){try{const e=document.cookie.split(";")||[];for(const n of e)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,g.Z)(function*(){try{yield e.clearCookies()}catch(n){return Promise.reject(n)}})()}}l("CapacitorCookies",{web:()=>new te});const ne=function(){var o=(0,g.Z)(function*(e){return new Promise((n,a)=>{const s=new FileReader;s.onload=()=>{const r=s.result;n(r.indexOf(",")>=0?r.split(",")[1]:r)},s.onerror=r=>a(r),s.readAsDataURL(e)})});return function(n){return o.apply(this,arguments)}}();class ae extends u{request(e){return(0,g.Z)(function*(){const n=((o,e={})=>{const n=Object.assign({method:o.method||"GET",headers:o.headers},e),s=((o={})=>{const e=Object.keys(o);return Object.keys(o).map(s=>s.toLocaleLowerCase()).reduce((s,r,f)=>(s[r]=o[e[f]],s),{})})(o.headers)["content-type"]||"";if("string"==typeof o.data)n.body=o.data;else if(s.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[f,i]of Object.entries(o.data||{}))r.set(f,i);n.body=r.toString()}else if(s.includes("multipart/form-data")){const r=new FormData;if(o.data instanceof FormData)o.data.forEach((i,h)=>{r.append(h,i)});else for(const i of Object.keys(o.data))r.append(i,o.data[i]);n.body=r;const f=new Headers(n.headers);f.delete("content-type"),n.headers=f}else(s.includes("application/json")||"object"==typeof o.data)&&(n.body=JSON.stringify(o.data));return n})(e,e.webFetchExtra),a=((o,e=!0)=>o?Object.entries(o).reduce((a,s)=>{const[r,f]=s;let i,h;return Array.isArray(f)?(h="",f.forEach(d=>{i=e?encodeURIComponent(d):d,h+=`${r}=${i}&`}),h.slice(0,-1)):(i=e?encodeURIComponent(f):f,h=`${r}=${i}`),`${a}&${h}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),s=a?`${e.url}?${a}`:e.url,r=yield fetch(s,n),f=r.headers.get("content-type")||"";let h,d,{responseType:i="text"}=r.ok?e:{};switch(f.includes("application/json")&&(i="json"),i){case"arraybuffer":case"blob":d=yield r.blob(),h=yield ne(d);break;case"json":h=yield r.json();break;default:h=yield r.text()}const J={};return r.headers.forEach((E,I)=>{J[I]=E}),{data:h,headers:J,status:r.status,url:r.url}})()}get(e){var n=this;return(0,g.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var n=this;return(0,g.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var n=this;return(0,g.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var n=this;return(0,g.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var n=this;return(0,g.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}l("CapacitorHttp",{web:()=>new ae})},1138:(ee,W,P)=>{P.r(W),P.d(W,{HomePageModule:()=>U});var g=P(9808),b=P(7590),F=P(4182),$=P(2292),B=P(655);const j=(0,P(7423).fo)("TextToSpeech",{web:()=>P.e(3244).then(P.bind(P,3244)).then(l=>new l.TextToSpeechWeb)});"speechSynthesis"in window&&window;var t=P(2096);function S(l,_){if(1&l&&(t.TgZ(0,"ion-select-option",14),t._uU(1),t.qZA()),2&l){const c=_.$implicit;t.Q6J("value",_.index),t.xp6(1),t.AsE("",c.name," - ",c.lang,"")}}const G=[{path:"",component:(()=>{class l{constructor(){this.inputText="An easy way to convert text to voice that\u2019s fast and straightforward \u2013 it\u2019ll make your message more catchy and inclusive.",this.voices=[],this.selectedVoice=0,this.pitch=1,this.volume=1,this.rate=1,this.languages=[]}ngOnInit(){return(0,B.mG)(this,void 0,void 0,function*(){j.getSupportedVoices().then(c=>{this.voices=c.voices,j.getSupportedLanguages().then(u=>{this.languages=u.languages})})})}selectVoice(c){this.selectedVoice=c.detail.value}pitchChange(c){this.pitch=c.detail.value}rateChange(c){this.rate=c.detail.value}volumeChange(c){this.volume=c.detail.value}pitchFormatter(c){return c.toFixed(1)}voiceChange(c){this.pitch=c.detail.value}speak(c){return(0,B.mG)(this,void 0,void 0,function*(){yield j.speak({text:c,lang:"en-IN",rate:this.rate,pitch:this.pitch,volume:this.volume,voice:this.selectedVoice})})}}return l.\u0275fac=function(c){return new(c||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-home"]],decls:37,vars:10,consts:[["mode","md"],["src","assets/metavoice.svg","alt","",1,"logo"],["fill","outline","mode","md"],["position","floating"],[3,"autoGrow","ngModel","ngModelChange"],["multiple","false","placeholder","Select voice",3,"value","ionChange"],[3,"value",4,"ngFor","ngForOf"],["min","0.0","max","2.0","dualKnobs","false","pin","true","snaps","true","step","0.2","ticks","false","color","primary",3,"pinFormatter","value","ionChange"],["slot","start",1,"labelSec"],["slot","start"],["slot","end"],["vertical","bottom","horizontal","center","slot","fixed","mode","md"],[3,"click"],["name","play"],[3,"value"]],template:function(c,u){1&c&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar"),t._UZ(2,"img",1),t.qZA()(),t.TgZ(3,"ion-content")(4,"ion-item",2)(5,"ion-label",3),t._uU(6,"Write your text here*"),t.qZA(),t.TgZ(7,"ion-textarea",4),t.NdJ("ngModelChange",function(y){return u.inputText=y}),t.qZA()(),t.TgZ(8,"ion-item",2)(9,"ion-label",3),t._uU(10,"Voice"),t.qZA(),t.TgZ(11,"ion-select",5),t.NdJ("ionChange",function(y){return u.selectVoice(y)}),t.YNc(12,S,2,3,"ion-select-option",6),t.qZA()(),t.TgZ(13,"ion-range",7),t.NdJ("ionChange",function(y){return u.pitchChange(y)}),t.TgZ(14,"ion-label",8),t._uU(15,"Pitch"),t.qZA(),t.TgZ(16,"ion-label",9),t._uU(17,"0"),t.qZA(),t.TgZ(18,"ion-label",10),t._uU(19,"2.0"),t.qZA()(),t.TgZ(20,"ion-range",7),t.NdJ("ionChange",function(y){return u.volumeChange(y)}),t.TgZ(21,"ion-label",8),t._uU(22,"Volume"),t.qZA(),t.TgZ(23,"ion-label",9),t._uU(24,"0"),t.qZA(),t.TgZ(25,"ion-label",10),t._uU(26,"2.0"),t.qZA()(),t.TgZ(27,"ion-range",7),t.NdJ("ionChange",function(y){return u.rateChange(y)}),t.TgZ(28,"ion-label",8),t._uU(29,"Rate"),t.qZA(),t.TgZ(30,"ion-label",9),t._uU(31,"0"),t.qZA(),t.TgZ(32,"ion-label",10),t._uU(33,"2.0"),t.qZA()(),t.TgZ(34,"ion-fab",11)(35,"ion-fab-button",12),t.NdJ("click",function(){return u.speak(u.inputText)}),t._UZ(36,"ion-icon",13),t.qZA()()()),2&c&&(t.xp6(7),t.Q6J("autoGrow",!0)("ngModel",u.inputText),t.xp6(4),t.Q6J("value",u.selectedVoice),t.xp6(1),t.Q6J("ngForOf",u.voices),t.xp6(1),t.Q6J("pinFormatter",u.pitchFormatter)("value",u.pitch),t.xp6(7),t.Q6J("pinFormatter",u.pitchFormatter)("value",u.volume),t.xp6(7),t.Q6J("pinFormatter",u.pitchFormatter)("value",u.rate))},dependencies:[g.sg,F.JJ,F.On,b.W2,b.IJ,b.W4,b.Gu,b.gu,b.Ie,b.Q$,b.I_,b.t9,b.n0,b.g2,b.sr,b.QI,b.j9],styles:["ion-content[_ngcontent-%COMP%]{--padding-top: 20px;--padding-start: 20px;--padding-end: 20px}.logo[_ngcontent-%COMP%]{height:20px;padding-left:20px}ion-item[_ngcontent-%COMP%]{margin-bottom:16px}.labelSec[_ngcontent-%COMP%]{width:60px}ion-fab-button[_ngcontent-%COMP%]{--background: #b7f399;--background-activated: #87d361;--background-hover: #a3e681;--border-radius: 15px;--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, .3), 0px 1px 3px 1px rgba(0, 0, 0, .15);--color: black}ion-fab[_ngcontent-%COMP%]{bottom:24px}"]}),l})()}];let K=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[$.Bz.forChild(G),$.Bz]}),l})(),U=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[g.ez,F.u5,b.Pc,K]}),l})()}}]);