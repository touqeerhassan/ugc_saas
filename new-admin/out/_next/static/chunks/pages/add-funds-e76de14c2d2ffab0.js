(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9239],{26447:function(e,n,t){"use strict";var r=t(63366),o=t(87462),i=t(67294),a=t(95408),c=t(98700),s=t(39707),u=t(59766),l=t(90948),d=t(71657),p=t(85893);const f=["component","direction","spacing","divider","children"];function m(e,n){const t=i.Children.toArray(e).filter(Boolean);return t.reduce(((e,r,o)=>(e.push(r),o<t.length-1&&e.push(i.cloneElement(n,{key:`separator-${o}`})),e)),[])}const y=(0,l.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,n)=>[n.root]})((({ownerState:e,theme:n})=>{let t=(0,o.Z)({display:"flex"},(0,a.k9)({theme:n},(0,a.P$)({values:e.direction,breakpoints:n.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const r=(0,c.hB)(n),o=Object.keys(n.breakpoints.values).reduce(((n,t)=>(("object"===typeof e.spacing&&null!=e.spacing[t]||"object"===typeof e.direction&&null!=e.direction[t])&&(n[t]=!0),n)),{}),i=(0,a.P$)({values:e.direction,base:o}),s=(0,a.P$)({values:e.spacing,base:o}),l=(n,t)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${o=t?i[t]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o]}`]:(0,c.NA)(r,n)}};var o};t=(0,u.Z)(t,(0,a.k9)({theme:n},s,l))}return t})),h=i.forwardRef((function(e,n){const t=(0,d.Z)({props:e,name:"MuiStack"}),i=(0,s.Z)(t),{component:a="div",direction:c="column",spacing:u=0,divider:l,children:h}=i,v=(0,r.Z)(i,f),b={direction:c,spacing:u};return(0,p.jsx)(y,(0,o.Z)({as:a,ownerState:b,ref:n},v,{children:l?m(h,l):h}))}));n.Z=h},86664:function(e,n,t){!function(e,n){"use strict";function t(e,n){return e(n={exports:{}},n.exports),n.exports}n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function o(){}function i(){}i.resetWarningCache=o;var a=function(){function e(e,n,t,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t},c=t((function(e){e.exports=a()}));function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){d(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){return f(e)||m(e,n)||y(e,n)||v()}function f(e){if(Array.isArray(e))return e}function m(e,n){var t=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=t){var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(s){c=!0,o=s}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}}function y(e,n){if(e){if("string"===typeof e)return h(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?h(e,n):void 0}}function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function v(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var b=function(e){var t=n.useRef(e);return n.useEffect((function(){t.current=e}),[e]),t.current},g=function(e){return null!==e&&"object"===l(e)},x=function(e){return g(e)&&"function"===typeof e.then},j=function(e){return g(e)&&"function"===typeof e.elements&&"function"===typeof e.createToken&&"function"===typeof e.createPaymentMethod&&"function"===typeof e.confirmCardPayment},w="[object Object]",E=function e(n,t){if(!g(n)||!g(t))return n===t;var r=Array.isArray(n);if(r!==Array.isArray(t))return!1;var o=Object.prototype.toString.call(n)===w;if(o!==(Object.prototype.toString.call(t)===w))return!1;if(!o&&!r)return n===t;var i=Object.keys(n),a=Object.keys(t);if(i.length!==a.length)return!1;for(var c={},s=0;s<i.length;s+=1)c[i[s]]=!0;for(var u=0;u<a.length;u+=1)c[a[u]]=!0;var l=Object.keys(c);if(l.length!==i.length)return!1;var d=n,p=t,f=function(n){return e(d[n],p[n])};return l.every(f)},P=function(e,n,t){return g(e)?Object.keys(e).reduce((function(r,o){var i=!g(n)||!E(e[o],n[o]);return t.includes(o)?(i&&console.warn("Unsupported prop change: options.".concat(o," is not a mutable property.")),r):i?u(u({},r||{}),{},d({},o,e[o])):r}),null):null},S="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",k=function(e){if(null===e||j(e))return e;throw new Error(S)},O=function(e){if(x(e))return{tag:"async",stripePromise:Promise.resolve(e).then(k)};var n=k(e);return null===n?{tag:"empty"}:{tag:"sync",stripe:n}},C=n.createContext(null);C.displayName="ElementsContext";var Z=function(e,n){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(n," in an <Elements> provider."));return e},_=function(e){var t=e.stripe,r=e.options,o=e.children,i=n.useMemo((function(){return O(t)}),[t]),a=p(n.useState((function(){return{stripe:"sync"===i.tag?i.stripe:null,elements:"sync"===i.tag?i.stripe.elements(r):null}})),2),c=a[0],s=a[1];n.useEffect((function(){var e=!0,n=function(e){s((function(n){return n.stripe?n:{stripe:e,elements:e.elements(r)}}))};return"async"!==i.tag||c.stripe?"sync"!==i.tag||c.stripe||n(i.stripe):i.stripePromise.then((function(t){t&&e&&n(t)})),function(){e=!1}}),[i,c,r]);var u=b(t);n.useEffect((function(){null!==u&&u!==t&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")}),[u,t]);var l=b(r);return n.useEffect((function(){if(c.elements){var e=P(r,l,["clientSecret","fonts"]);e&&c.elements.update(e)}}),[r,l,c.elements]),n.useEffect((function(){var e=c.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"1.10.0"}),e.registerAppInfo({name:"react-stripe-js",version:"1.10.0",url:"https://stripe.com/docs/stripe-js/react"}))}),[c.stripe]),n.createElement(C.Provider,{value:c},o)};_.propTypes={stripe:c.any,options:c.object};var A=function(e){var t=n.useContext(C);return Z(t,e)},T=function(){return A("calls useElements()").elements},N=function(){return A("calls useStripe()").stripe},B=function(e){return(0,e.children)(A("mounts <ElementsConsumer>"))};B.propTypes={children:c.func.isRequired};var L=function(e){var t=n.useRef(e);return n.useEffect((function(){t.current=e}),[e]),function(){t.current&&t.current.apply(t,arguments)}},R=function(){},D=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},I=function(e,t){var r="".concat(D(e),"Element"),o=t?function(e){A("mounts <".concat(r,">"));var t=e.id,o=e.className;return n.createElement("div",{id:t,className:o})}:function(t){var o=t.id,i=t.className,a=t.options,c=void 0===a?{}:a,s=t.onBlur,u=void 0===s?R:s,l=t.onFocus,d=void 0===l?R:l,p=t.onReady,f=void 0===p?R:p,m=t.onChange,y=void 0===m?R:m,h=t.onEscape,v=void 0===h?R:h,g=t.onClick,x=void 0===g?R:g,j=t.onLoadError,w=void 0===j?R:j,E=t.onLoaderStart,S=void 0===E?R:E,k=A("mounts <".concat(r,">")).elements,O=n.useRef(null),C=n.useRef(null),Z=L(f),_=L(u),T=L(d),N=L(x),B=L(y),D=L(v),I=L(w),M=L(S);n.useLayoutEffect((function(){if(null==O.current&&k&&null!=C.current){var n=k.create(e,c);O.current=n,n.mount(C.current),n.on("ready",(function(){return Z(n)})),n.on("change",B),n.on("blur",_),n.on("focus",T),n.on("escape",D),n.on("loaderror",I),n.on("loaderstart",M),n.on("click",N)}}));var W=b(c);return n.useEffect((function(){if(O.current){var e=P(c,W,["paymentRequest"]);e&&O.current.update(e)}}),[c,W]),n.useLayoutEffect((function(){return function(){O.current&&(O.current.destroy(),O.current=null)}}),[]),n.createElement("div",{id:o,className:i,ref:C})};return o.propTypes={id:c.string,className:c.string,onChange:c.func,onBlur:c.func,onFocus:c.func,onReady:c.func,onClick:c.func,onLoadError:c.func,onLoaderStart:c.func,options:c.object},o.displayName=r,o.__elementType=e,o},M="undefined"===typeof window,W=I("auBankAccount",M),q=I("card",M),F=I("cardNumber",M),U=I("cardExpiry",M),Y=I("cardCvc",M),H=I("fpxBank",M),$=I("iban",M),J=I("idealBank",M),V=I("p24Bank",M),z=I("epsBank",M),G=I("payment",M),K=I("paymentRequestButton",M),X=I("linkAuthentication",M),Q=I("shippingAddress",M),ee=I("affirmMessage",M),ne=I("afterpayClearpayMessage",M);e.AffirmMessageElement=ee,e.AfterpayClearpayMessageElement=ne,e.AuBankAccountElement=W,e.CardCvcElement=Y,e.CardElement=q,e.CardExpiryElement=U,e.CardNumberElement=F,e.Elements=_,e.ElementsConsumer=B,e.EpsBankElement=z,e.FpxBankElement=H,e.IbanElement=$,e.IdealBankElement=J,e.LinkAuthenticationElement=X,e.P24BankElement=V,e.PaymentElement=G,e.PaymentRequestButtonElement=K,e.ShippingAddressElement=Q,e.useElements=T,e.useStripe=N,Object.defineProperty(e,"__esModule",{value:!0})}(n,t(67294))},19086:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/add-funds",function(){return t(52014)}])},2785:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(85893),o=t(67294),i=t(26447),a=t(14866),c=t(46901);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var u=o.forwardRef((function(e,n){return(0,r.jsx)(c.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}({elevation:6,ref:n,variant:"filled"},e))}));function l(e){var n=e.open,t=e.setOpen,o=e.message,c=e.severity,s=function(e,n){"clickaway"!==n&&t(!1)};return(0,r.jsx)(i.Z,{spacing:2,sx:{width:"100%"},children:(0,r.jsx)(a.Z,{open:n,autoHideDuration:3e3,onClose:s,anchorOrigin:{vertical:"bottom",horizontal:"center"},children:(0,r.jsx)(u,{onClose:s,severity:c,sx:{width:"100%"},children:o})})})}},52014:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return I}});var r=t(28520),o=t.n(r),i=t(85893),a=t(9008),c=t(67294),s=t(21405),u=t(99226),l=t(86886),d=t(50135),p=t(94054),f=t(33841),m=t(18360),y=t(18972),h=t(11057);var v=function(e){var n=e.createPaymentIntent,t=(0,c.useState)("usd"),r=t[0],o=t[1],a=(0,c.useState)(null),s=a[0],v=a[1],b=(0,c.useState)("card"),g=b[0];return b[1],(0,i.jsx)(u.Z,{maxWidth:"600px",sx:{margin:"40px auto",border:1,borderRadius:"2%",backgroundColor:"background.paper",borderColor:"black",p:5},children:(0,i.jsxs)(l.ZP,{container:!0,spacing:4,children:[(0,i.jsx)(l.ZP,{item:!0,xs:12,children:(0,i.jsx)(d.Z,{fullWidth:!0,disabled:!0,label:"Payment Method",defaultValue:"Card"})}),(0,i.jsx)(l.ZP,{item:!0,xs:12,children:(0,i.jsx)(d.Z,{value:s,type:"number",required:!0,id:"outlined-basic",label:"Amount",variant:"outlined",fullWidth:!0,onChange:function(e){return v(e.target.value)}})}),(0,i.jsx)(l.ZP,{item:!0,xs:12,children:(0,i.jsxs)(p.Z,{fullWidth:!0,children:[(0,i.jsx)(f.Z,{id:"demo-simple-select-label",children:"Currency"}),(0,i.jsxs)(m.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:r,label:"Currency",onChange:function(e){return o(e.target.value)},children:[(0,i.jsx)(y.Z,{value:"myr",children:"MYR"}),(0,i.jsx)(y.Z,{value:"idr",children:"IDR"}),(0,i.jsx)(y.Z,{value:"usd",children:"USD"})]})]})}),(0,i.jsx)(l.ZP,{item:!0,xs:12,children:(0,i.jsx)(h.Z,{fullWidth:!0,type:"submit",variant:"contained",onClick:function(){return n({type:g,amount:s,currency:r})},sx:{py:1.5},children:"CONTINUE"})})]})})},b="https://js.stripe.com/v3",g=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,x="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",j=null,w=function(e){return null!==j?j:j=new Promise((function(n,t){if("undefined"!==typeof window)if(window.Stripe&&e&&console.warn(x),window.Stripe)n(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(b,'"]')),n=0;n<e.length;n++){var t=e[n];if(g.test(t.src))return t}return null}();r&&e?console.warn(x):r||(r=function(e){var n=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",t=document.createElement("script");t.src="".concat(b).concat(n);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(t),t}(e)),r.addEventListener("load",(function(){window.Stripe?n(window.Stripe):t(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){t(new Error("Failed to load Stripe.js"))}))}catch(o){return void t(o)}else n(null)}))},E=function(e,n,t){if(null===e)return null;var r=e.apply(void 0,n);return function(e,n){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.35.0",startTime:n})}(r,t),r},P=Promise.resolve().then((function(){return w(null)})),S=!1;P.catch((function(e){S||console.warn(e)}));var k=t(86664),O=t(33726),C=t(2785),Z=t(89731);function _(e,n,t,r,o,i,a){try{var c=e[i](a),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(r,o)}function A(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){_(i,r,o,a,c,"next",e)}function c(e){_(i,r,o,a,c,"throw",e)}a(void 0)}))}}function T(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function N(e){var n=e.handleBack,t=(e.setClientSecret,(0,k.useStripe)()),r=(0,k.useElements)(),s=(0,Z.a)().user,p=(0,c.useState)(null),f=p[0],m=p[1],y=(0,c.useState)(!1),v=y[0],b=y[1],g=(0,c.useState)(!1),x=g[0],j=g[1],w=(0,c.useState)(""),E=w[0],P=w[1],S=(0,c.useState)({name:"Demo User",address:"B 345, sherlock lane",city:"New York",zip:"83888",country:"US"}),_=S[0],N=S[1],B=function(e){N(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){T(e,n,t[n])}))}return e}({},_,T({},e.target.name,e.target.value)))};(0,c.useEffect)((function(){}),[t]);var L=A(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t&&r){e.next=3;break}return e.abrupt("return");case 3:return b(!0),e.next=6,t.confirmPayment({elements:r,confirmParams:{shipping:{name:_.name,address:{line1:_.address,postal_code:_.zip,city:_.city,country:_.country}},return_url:"http://localhost:3000"},redirect:"if_required"}).then(function(e){var n=A(o().mark((function e(n){var t,r,i,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(n),t=n.paymentIntent,!(r=n.error)){e.next=6;break}"card_error"===r.type||"validation_error"===r.type?(m(r.message),P("error"),j(!0),b(!1)):(console.log(r),m("An unexpected error occurred."),P("error"),j(!0),b(!1)),e.next=15;break;case 6:if("succeeded"!==t.status){e.next=14;break}return i=t.currency,a=t.amount,t.customer,e.next=10,fetch("".concat(O.Ve,"/addFunds"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currency:i,amount:a,userId:s.id})});case 10:200==e.sent.status?(m("Funds added to wallet"),P("success"),j(!0),b(!1)):(m("An Unknown error occurred"),P("error"),j(!0),b(!1)),e.next=15;break;case 14:m(t.status),P("error"),j(!0),b(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return n.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e)})));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{children:(0,i.jsxs)(a.default,{children:[(0,i.jsx)("title",{children:"Test"}),(0,i.jsx)("link",{href:"/static/card-section.css",rel:"stylesheet"},"test")]})}),(0,i.jsx)("label",{children:(0,i.jsx)(u.Z,{maxWidth:"600px",sx:{margin:"40px auto",border:1.5,backgroundColor:"background.paper",borderColor:"black",p:5},children:(0,i.jsxs)(l.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(l.ZP,{item:!0,xs:12,children:(0,i.jsx)(d.Z,{fullWidth:!0,label:"Card Holder Name",name:"name",required:!0,value:_.name,onChange:B})}),(0,i.jsx)(l.ZP,{item:!0,md:12,xs:12,children:(0,i.jsx)("h4",{children:"Billing Details"})}),(0,i.jsx)(l.ZP,{item:!0,md:6,xs:12,children:(0,i.jsx)(d.Z,{autoFocus:!0,fullWidth:!0,label:"Street Address",name:"address",required:!0,value:_.address,onChange:B})}),(0,i.jsx)(l.ZP,{item:!0,md:6,xs:12,children:(0,i.jsx)(d.Z,{fullWidth:!0,label:"Country",name:"country",required:!0,value:_.country,onChange:B})}),(0,i.jsx)(l.ZP,{item:!0,md:6,xs:12,children:(0,i.jsx)(d.Z,{value:_.zip,fullWidth:!0,label:"Zip",name:"zip",required:!0,onChange:B})}),(0,i.jsx)(l.ZP,{item:!0,md:6,xs:12,children:(0,i.jsx)(d.Z,{value:_.city,fullWidth:!0,label:"City",name:"city",required:!0,onChange:B})}),(0,i.jsx)(l.ZP,{item:!0,xs:12,children:(0,i.jsx)(u.Z,{height:"200px",children:(0,i.jsx)(k.PaymentElement,{})})}),(0,i.jsx)(l.ZP,{item:!0,xs:12,children:(0,i.jsxs)(u.Z,{mt:12,alignItems:"center",justifyContent:"space-between",display:"flex",children:[(0,i.jsx)("div",{onClick:n,children:"Go Back"}),(0,i.jsx)(h.Z,{type:"submit",variant:"contained",onClick:L,style:{paddingLeft:"40px",paddingRight:"40px"},children:v?"Loading":"Add Funds"})]})}),(0,i.jsx)(C.Z,{open:x,setOpen:j,message:f,severity:E})]})})})]})}var B=t(98875);function L(e,n,t,r,o,i,a){try{var c=e[i](a),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(r,o)}console.log("pk_live_51LVI7jF5a1dvsT1LM5xk099gS9PsGMfM8wOCs0tntnupdJKhDHtq2DZBsmnhYNM83sxYDdHl6TU2L3axyegPhe6Y002PNcLHqJ");var R=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];S=!0;var r=Date.now();return P.then((function(e){return E(e,n,r)}))}("pk_live_51LVI7jF5a1dvsT1LM5xk099gS9PsGMfM8wOCs0tntnupdJKhDHtq2DZBsmnhYNM83sxYDdHl6TU2L3axyegPhe6Y002PNcLHqJ");function D(){var e=(0,c.useState)(null),n=e[0],t=e[1],r=(0,Z.a)().user;(0,c.useEffect)((function(){}),[r]);var s,u=(s=o().mark((function e(n){var r,i,a,c,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.type,i=n.amount,a=n.currency,console.log(r,i,a),e.next=4,fetch("".concat(O.Ve,"/create-payment-intent"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:i,currency:a,type:r})});case 4:return c=e.sent,e.next=7,c.json();case 7:(s=e.sent.clientSecret)&&t(s);case 9:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(t,r){var o=s.apply(e,n);function i(e){L(o,t,r,i,a,"next",e)}function a(e){L(o,t,r,i,a,"throw",e)}i(void 0)}))});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{children:(0,i.jsxs)(a.default,{children:[(0,i.jsx)("title",{children:"Test"}),(0,i.jsx)("link",{href:"/static/card-section.css",rel:"stylesheet"},"test")]})}),(0,i.jsx)("label",{children:n?(0,i.jsx)(k.Elements,{stripe:R,options:{clientSecret:n},children:(0,i.jsx)(N,{clientSecret:n,handleBack:function(){t(null)}})}):(0,i.jsx)(v,{createPaymentIntent:u})})]})}D.getLayout=function(e){return(0,i.jsx)(B.a,{children:(0,i.jsx)(s.c,{children:e})})};var I=D}},function(e){e.O(0,[354,9417,5464,9519,135,925,4386,5459,7344,7637,3606,7258,3008,3880,5124,9774,2888,179],(function(){return n=19086,e(e.s=n);var n}));var n=e.O();_N_E=n}]);