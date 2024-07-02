"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1430],{86010:function(e,t,n){t.Z=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(r&&(r+=" "),r+=t);return r}},68908:function(e,t,n){function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return w}});var o=n(67294),i=o.useLayoutEffect,a=function(e){var t=o.useRef(e);return i(function(){t.current=e}),t},l=function(e,t){if("function"==typeof e){e(t);return}e.current=t},u=function(e,t){var n=(0,o.useRef)();return(0,o.useCallback)(function(r){e.current=r,n.current&&l(n.current,null),n.current=t,t&&l(t,r)},[t])},s={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},c=function(e){Object.keys(s).forEach(function(t){e.style.setProperty(t,s[t],"important")})},d=null,f=function(e,t){var n=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?n+t.borderSize:n-t.paddingSize},p=function(){},m=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],h=!!document.documentElement.currentStyle,g=function(e){var t=window.getComputedStyle(e);if(null===t)return null;var n=m.reduce(function(e,n){return e[n]=t[n],e},{}),r=n.boxSizing;if(""===r)return null;h&&"border-box"===r&&(n.width=parseFloat(n.width)+parseFloat(n.borderRightWidth)+parseFloat(n.borderLeftWidth)+parseFloat(n.paddingRight)+parseFloat(n.paddingLeft)+"px");var o=parseFloat(n.paddingBottom)+parseFloat(n.paddingTop),i=parseFloat(n.borderBottomWidth)+parseFloat(n.borderTopWidth);return{sizingStyle:n,paddingSize:o,borderSize:i}};function v(e,t,n){var r=a(n);(0,o.useLayoutEffect)(function(){var n=function(e){return r.current(e)};return e.addEventListener(t,n),function(){return e.removeEventListener(t,n)}},[])}var b=function(e){v(window,"resize",e)},y=function(e){v(document.fonts,"loadingdone",e)},k=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],w=(0,o.forwardRef)(function(e,t){var n=e.cacheMeasurements,i=e.maxRows,a=e.minRows,l=e.onChange,s=void 0===l?p:l,m=e.onHeightChange,h=void 0===m?p:m,v=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,k),w=void 0!==v.value,R=(0,o.useRef)(null),x=u(R,t),S=(0,o.useRef)(0),E=(0,o.useRef)(),C=function(){var e,t,r,o,l,u,s,p,m,v,b,y=R.current,k=n&&E.current?E.current:g(y);if(k){E.current=k;var w=(e=y.value||y.placeholder||"x",void 0===(t=a)&&(t=1),void 0===(r=i)&&(r=1/0),d||((d=document.createElement("textarea")).setAttribute("tabindex","-1"),d.setAttribute("aria-hidden","true"),c(d)),null===d.parentNode&&document.body.appendChild(d),o=k.paddingSize,l=k.borderSize,s=(u=k.sizingStyle).boxSizing,Object.keys(u).forEach(function(e){d.style[e]=u[e]}),c(d),d.value=e,p=f(d,k),d.value=e,p=f(d,k),d.value="x",v=(m=d.scrollHeight-o)*t,"border-box"===s&&(v=v+o+l),p=Math.max(v,p),b=m*r,"border-box"===s&&(b=b+o+l),[p=Math.min(b,p),m]),x=w[0],C=w[1];S.current!==x&&(S.current=x,y.style.setProperty("height",x+"px","important"),h(x,{rowHeight:C}))}};return(0,o.useLayoutEffect)(C),b(C),y(C),(0,o.createElement)("textarea",r({},v,{onChange:function(e){w||C(),s(e)},ref:x}))})},6512:function(e,t,n){n.d(t,{p:function(){return _}});var r,o,i=n(67294),a=n(32984),l=n(12351),u=n(23784),s=n(19946),c=n(61363),d=n(64103),f=n(16567),p=n(14157),m=n(15466),h=n(73781),g=((r=g||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),v=((o=v||{})[o.ToggleDisclosure=0]="ToggleDisclosure",o[o.CloseDisclosure=1]="CloseDisclosure",o[o.SetButtonId=2]="SetButtonId",o[o.SetPanelId=3]="SetPanelId",o[o.LinkPanel=4]="LinkPanel",o[o.UnlinkPanel=5]="UnlinkPanel",o);let b={0:e=>({...e,disclosureState:(0,a.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},y=(0,i.createContext)(null);function k(e){let t=(0,i.useContext)(y);if(null===t){let t=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,k),t}return t}y.displayName="DisclosureContext";let w=(0,i.createContext)(null);w.displayName="DisclosureAPIContext";let R=(0,i.createContext)(null);function x(e,t){return(0,a.E)(t.type,b,e,t)}R.displayName="DisclosurePanelContext";let S=i.Fragment,E=(0,l.yV)(function(e,t){let{defaultOpen:n=!1,...r}=e,o=`headlessui-disclosure-button-${(0,s.M)()}`,c=`headlessui-disclosure-panel-${(0,s.M)()}`,d=(0,i.useRef)(null),p=(0,u.T)(t,(0,u.h)(e=>{d.current=e},void 0===e.as||e.as===i.Fragment)),g=(0,i.useRef)(null),v=(0,i.useRef)(null),b=(0,i.useReducer)(x,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:v,panelRef:g,buttonId:o,panelId:c}),[{disclosureState:k},R]=b;(0,i.useEffect)(()=>R({type:2,buttonId:o}),[o,R]),(0,i.useEffect)(()=>R({type:3,panelId:c}),[c,R]);let E=(0,h.z)(e=>{R({type:1});let t=(0,m.r)(d);if(!t)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(o):t.getElementById(o);null==n||n.focus()}),C=(0,i.useMemo)(()=>({close:E}),[E]),P=(0,i.useMemo)(()=>({open:0===k,close:E}),[k,E]);return i.createElement(y.Provider,{value:b},i.createElement(w.Provider,{value:C},i.createElement(f.up,{value:(0,a.E)(k,{0:f.ZM.Open,1:f.ZM.Closed})},(0,l.sY)({ourProps:{ref:p},theirProps:r,slot:P,defaultTag:S,name:"Disclosure"}))))}),C=(0,l.yV)(function(e,t){let[n,r]=k("Disclosure.Button"),o=(0,i.useContext)(R),a=null!==o&&o===n.panelId,s=(0,i.useRef)(null),f=(0,u.T)(s,t,a?null:n.buttonRef),m=(0,h.z)(e=>{var t;if(a){if(1===n.disclosureState)return;switch(e.key){case c.R.Space:case c.R.Enter:e.preventDefault(),e.stopPropagation(),r({type:0}),null==(t=n.buttonRef.current)||t.focus()}}else switch(e.key){case c.R.Space:case c.R.Enter:e.preventDefault(),e.stopPropagation(),r({type:0})}}),g=(0,h.z)(e=>{e.key===c.R.Space&&e.preventDefault()}),v=(0,h.z)(t=>{var o;(0,d.P)(t.currentTarget)||e.disabled||(a?(r({type:0}),null==(o=n.buttonRef.current)||o.focus()):r({type:0}))}),b=(0,i.useMemo)(()=>({open:0===n.disclosureState}),[n]),y=(0,p.f)(e,s),w=a?{ref:f,type:y,onKeyDown:m,onClick:v}:{ref:f,id:n.buttonId,type:y,"aria-expanded":e.disabled?void 0:0===n.disclosureState,"aria-controls":n.linkedPanel?n.panelId:void 0,onKeyDown:m,onKeyUp:g,onClick:v};return(0,l.sY)({ourProps:w,theirProps:e,slot:b,defaultTag:"button",name:"Disclosure.Button"})}),P=l.AN.RenderStrategy|l.AN.Static,_=Object.assign(E,{Button:C,Panel:(0,l.yV)(function(e,t){let[n,r]=k("Disclosure.Panel"),{close:o}=function e(t){let n=(0,i.useContext)(w);if(null===n){let n=Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("Disclosure.Panel"),a=(0,u.T)(t,n.panelRef,()=>{n.linkedPanel||r({type:4})}),s=(0,f.oJ)(),c=null!==s?s===f.ZM.Open:0===n.disclosureState;(0,i.useEffect)(()=>()=>r({type:5}),[r]),(0,i.useEffect)(()=>{var t;1===n.disclosureState&&(null==(t=e.unmount)||t)&&r({type:5})},[n.disclosureState,e.unmount,r]);let d=(0,i.useMemo)(()=>({open:0===n.disclosureState,close:o}),[n,o]),p={ref:a,id:n.panelId};return i.createElement(R.Provider,{value:n.panelId},(0,l.sY)({ourProps:p,theirProps:e,slot:d,defaultTag:"div",features:P,visible:c,name:"Disclosure.Panel"}))})})},73933:function(e,t,n){n.d(t,{r:function(){return y}});var r=n(67294),o=n(12351),i=n(19946),a=n(61363),l=n(64103),u=n(16723),s=n(23784),c=n(73781);let d=(0,r.createContext)(null),f=(0,o.yV)(function(e,t){let{passive:n=!1,...a}=e,l=function e(){let t=(0,r.useContext)(d);if(null===t){let t=Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),c=`headlessui-label-${(0,i.M)()}`,f=(0,s.T)(t);(0,u.e)(()=>l.register(c),[c,l.register]);let p={ref:f,...l.props,id:c};return n&&("onClick"in p&&delete p.onClick,"onClick"in a&&delete a.onClick),(0,o.sY)({ourProps:p,theirProps:a,slot:l.slot||{},defaultTag:"label",name:l.name||"Label"})});var p=n(39516),m=n(14157),h=n(46045),g=n(18689);let v=(0,r.createContext)(null);v.displayName="GroupContext";let b=r.Fragment,y=Object.assign((0,o.yV)(function(e,t){let{checked:n,onChange:u,name:d,value:f,...p}=e,b=`headlessui-switch-${(0,i.M)()}`,y=(0,r.useContext)(v),k=(0,r.useRef)(null),w=(0,s.T)(k,t,null===y?null:y.setSwitch),R=(0,c.z)(()=>u(!n)),x=(0,c.z)(e=>{if((0,l.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),R()}),S=(0,c.z)(e=>{e.key===a.R.Space?(e.preventDefault(),R()):e.key===a.R.Enter&&(0,g.g)(e.currentTarget)}),E=(0,c.z)(e=>e.preventDefault()),C=(0,r.useMemo)(()=>({checked:n}),[n]),P={id:b,ref:w,role:"switch",type:(0,m.f)(e,k),tabIndex:0,"aria-checked":n,"aria-labelledby":null==y?void 0:y.labelledby,"aria-describedby":null==y?void 0:y.describedby,onClick:x,onKeyUp:S,onKeyPress:E};return r.createElement(r.Fragment,null,null!=d&&n&&r.createElement(h._,{features:h.A.Hidden,...(0,o.oA)({as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:n,name:d,value:f})}),(0,o.sY)({ourProps:P,theirProps:p,slot:C,defaultTag:"button",name:"Switch"}))}),{Group:function(e){let[t,n]=(0,r.useState)(null),[i,a]=function(){let[e,t]=(0,r.useState)([]);return[e.length>0?e.join(" "):void 0,(0,r.useMemo)(()=>function(e){let n=(0,c.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))),o=(0,r.useMemo)(()=>({register:n,slot:e.slot,name:e.name,props:e.props}),[n,e.slot,e.name,e.props]);return r.createElement(d.Provider,{value:o},e.children)},[t])]}(),[l,u]=(0,p.f)(),s=(0,r.useMemo)(()=>({switch:t,setSwitch:n,labelledby:i,describedby:l}),[t,n,i,l]);return r.createElement(u,{name:"Switch.Description"},r.createElement(a,{name:"Switch.Label",props:{onClick(){t&&(t.click(),t.focus({preventScroll:!0}))}}},r.createElement(v.Provider,{value:s},(0,o.sY)({ourProps:{},theirProps:e,defaultTag:b,name:"Switch.Group"}))))},Label:f,Description:p.d})},68715:function(e,t,n){var r=n(67294);let o=r.forwardRef(function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}))});t.Z=o},13902:function(e,t,n){var r=n(67294);let o=r.forwardRef(function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))});t.Z=o},24634:function(e,t,n){var r=n(67294);let o=r.forwardRef(function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"}))});t.Z=o},19965:function(e,t,n){var r=n(67294);let o=r.forwardRef(function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"}))});t.Z=o},33740:function(e,t,n){var r=n(67294);let o=r.forwardRef(function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"}))});t.Z=o},85298:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),o=n(4529);function i(e){var t=e.size,n=void 0===t?80:t,i=e.color,a=void 0===i?"black":i,l=e.lineWeight,u=void 0===l?5:l,s=e.speed,c=void 0===s?1.4:s;return(0,o.Z)("RaceBy","size",n,"number"),(0,o.Z)("RaceBy","color",a,"string"),(0,o.Z)("RaceBy","speed",c,"number"),(0,o.Z)("RaceBy","lineWeight",u,"number"),r.createElement("div",{className:"RaceBy-module_container__pu79P",style:{"--uib-size":n+"px","--uib-color":a,"--uib-line-weight":u+"px","--uib-speed":c+"s"}})}(0,n(71511).s)('.RaceBy-module_container__pu79P{align-items:center;border-radius:calc(var(--uib-line-weight)/2);display:flex;height:var(--uib-line-weight);justify-content:center;overflow:hidden;position:relative;transform:translateZ(0);width:var(--uib-size)}.RaceBy-module_container__pu79P:before{background-color:var(--uib-color);content:"";height:100%;left:0;opacity:.1;position:absolute;top:0;width:100%}.RaceBy-module_container__pu79P:after{animation:RaceBy-module_raceBy__g-TGB var(--uib-speed) ease-in-out infinite;background-color:var(--uib-color);border-radius:calc(var(--uib-line-weight)/2);content:"";height:100%;transform:translateX(-100%);width:100%}@keyframes RaceBy-module_raceBy__g-TGB{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}')},98779:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),o=n(4529);function i(e){var t=e.size,n=void 0===t?40:t,i=e.color,a=void 0===i?"black":i,l=e.lineWeight,u=void 0===l?5:l,s=e.speed,c=void 0===s?2:s;return(0,o.Z)("Ring","size",n,"number"),(0,o.Z)("Ring","color",a,"string"),(0,o.Z)("Ring","lineWeight",u,"number"),(0,o.Z)("Ring","speed",c,"number"),r.createElement("svg",{height:n,width:n,className:"Ring-module_container__1mCd7",viewBox:"25 25 50 50",style:{"--uib-size":n+"px","--uib-color":a,"--uib-speed":c+"s"}},r.createElement("circle",{cx:"50",cy:"50",r:"20",strokeWidth:u}))}(0,n(71511).s)(".Ring-module_container__1mCd7{animation:Ring-module_rotate__RBwLl var(--uib-speed) linear infinite;height:var(--uib-size);transform-origin:center;vertical-align:middle;width:var(--uib-size);will-change:transform}.Ring-module_container__1mCd7 circle{fill:none;stroke:var(--uib-color);stroke-dasharray:1,200;stroke-dashoffset:0;stroke-linecap:round;animation:Ring-module_stretch__L-1Qd calc(var(--uib-speed)*.75) ease-in-out infinite;will-change:stroke-dasharray,stroke-dashoffset}@keyframes Ring-module_rotate__RBwLl{to{transform:rotate(1turn)}}@keyframes Ring-module_stretch__L-1Qd{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,200;stroke-dashoffset:-35px}to{stroke-dashoffset:-124px}}")},4529:function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t,n,o){if(r(n)!==o)throw TypeError("Invalid prop '".concat(t,"' of type '").concat(r(n),"' supplied to '").concat(e,"', expected '").concat(o,"'."))}n.d(t,{Z:function(){return o}})},71511:function(e,t,n){n.d(t,{s:function(){return r}});function r(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}}}]);