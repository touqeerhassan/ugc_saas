(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6835],{78462:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(63366),a=n(87462),o=n(67294),i=n(86010),u=n(94780),s=n(90948),c=n(71657),l=n(59773),f=n(34867);function d(e){return(0,f.Z)("MuiList",e)}(0,n(1588).Z)("MuiList",["root","padding","dense","subheader"]);var v=n(85893);const h=["children","className","component","dense","disablePadding","subheader"],p=(0,s.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})((({ownerState:e})=>(0,a.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})));var m=o.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiList"}),{children:s,className:f,component:m="ul",dense:Z=!1,disablePadding:g=!1,subheader:M}=n,b=(0,r.Z)(n,h),y=o.useMemo((()=>({dense:Z})),[Z]),D=(0,a.Z)({},n,{component:m,dense:Z,disablePadding:g}),w=(e=>{const{classes:t,disablePadding:n,dense:r,subheader:a}=e,o={root:["root",!n&&"padding",r&&"dense",a&&"subheader"]};return(0,u.Z)(o,d,t)})(D);return(0,v.jsx)(l.Z.Provider,{value:y,children:(0,v.jsxs)(p,(0,a.Z)({as:m,className:(0,i.Z)(w.root,f),ref:t,ownerState:D},b,{children:[M,s]}))})}))},59773:function(e,t,n){"use strict";const r=n(67294).createContext({});t.Z=r},71579:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(67294);var a=function(e,t){return r.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},58974:function(e,t,n){"use strict";var r=n(16600);t.Z=r.Z},92094:function(e,t,n){"use strict";function r(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t=t||{})Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}({},e)}n.d(t,{Z:function(){return r}})},49474:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(19013),a=n(13882);function o(e,t){(0,a.Z)(2,arguments);var n=(0,r.Z)(e),o=(0,r.Z)(t),i=n.getTime()-o.getTime();return i<0?-1:i>0?1:i}},14680:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(49474),a=n(19013),o=n(13882);function i(e,t){(0,o.Z)(2,arguments);var n=(0,a.Z)(e),r=(0,a.Z)(t),i=n.getFullYear()-r.getFullYear(),u=n.getMonth()-r.getMonth();return 12*i+u}var u=n(83894);function s(e){(0,o.Z)(1,arguments);var t=(0,a.Z)(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function c(e){(0,o.Z)(1,arguments);var t=(0,a.Z)(e);return(0,u.Z)(t).getTime()===s(t).getTime()}function l(e,t){(0,o.Z)(2,arguments);var n,u=(0,a.Z)(e),s=(0,a.Z)(t),l=(0,r.Z)(u,s),f=Math.abs(i(u,s));if(f<1)n=0;else{1===u.getMonth()&&u.getDate()>27&&u.setDate(30),u.setMonth(u.getMonth()-l*f);var d=(0,r.Z)(u,s)===-l;c((0,a.Z)(e))&&1===f&&1===(0,r.Z)(e,s)&&(d=!1),n=l*(f-Number(d))}return 0===n?0:n}function f(e,t){return(0,o.Z)(2,arguments),(0,a.Z)(e).getTime()-(0,a.Z)(t).getTime()}var d={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function v(e){return e?d[e]:d.trunc}function h(e,t,n){(0,o.Z)(2,arguments);var r=f(e,t)/1e3;return v(null===n||void 0===n?void 0:n.roundingMethod)(r)}var p=n(35077),m=n(92094),Z=n(24262),g=1440,M=43200;function b(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,o.Z)(2,arguments);var i=n.locale||p.Z;if(!i.formatDistance)throw new RangeError("locale must contain formatDistance property");var u=(0,r.Z)(e,t);if(isNaN(u))throw new RangeError("Invalid time value");var s,c,f=(0,m.Z)(n);f.addSuffix=Boolean(n.addSuffix),f.comparison=u,u>0?(s=(0,a.Z)(t),c=(0,a.Z)(e)):(s=(0,a.Z)(e),c=(0,a.Z)(t));var d,v=h(c,s),b=((0,Z.Z)(c)-(0,Z.Z)(s))/1e3,y=Math.round((v-b)/60);if(y<2)return n.includeSeconds?v<5?i.formatDistance("lessThanXSeconds",5,f):v<10?i.formatDistance("lessThanXSeconds",10,f):v<20?i.formatDistance("lessThanXSeconds",20,f):v<40?i.formatDistance("halfAMinute",null,f):v<60?i.formatDistance("lessThanXMinutes",1,f):i.formatDistance("xMinutes",1,f):0===y?i.formatDistance("lessThanXMinutes",1,f):i.formatDistance("xMinutes",y,f);if(y<45)return i.formatDistance("xMinutes",y,f);if(y<90)return i.formatDistance("aboutXHours",1,f);if(y<g){var D=Math.round(y/60);return i.formatDistance("aboutXHours",D,f)}if(y<2520)return i.formatDistance("xDays",1,f);if(y<M){var w=Math.round(y/g);return i.formatDistance("xDays",w,f)}if(y<86400)return d=Math.round(y/M),i.formatDistance("aboutXMonths",d,f);if((d=l(c,s))<12){var E=Math.round(y/M);return i.formatDistance("xMonths",E,f)}var T=d%12,x=Math.floor(d/12);return T<3?i.formatDistance("aboutXYears",x,f):T<9?i.formatDistance("overXYears",x,f):i.formatDistance("almostXYears",x+1,f)}function y(e,t){return(0,o.Z)(1,arguments),b(e,Date.now(),t)}},48418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var a,o=(a=n(67294))&&a.__esModule?a:{default:a},i=n(76273),u=n(90387),s=n(57190);var c={};function l(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=u.useRouter(),f=o.default.useMemo((function(){var t=r(i.resolveHref(a,e.href,!0),2),n=t[0],o=t[1];return{href:n,as:e.as?i.resolveHref(a,e.as):o||n}}),[a,e.href,e.as]),d=f.href,v=f.as,h=e.children,p=e.replace,m=e.shallow,Z=e.scroll,g=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var M=(t=o.default.Children.only(h))&&"object"===typeof t&&t.ref,b=r(s.useIntersection({rootMargin:"200px"}),2),y=b[0],D=b[1],w=o.default.useCallback((function(e){y(e),M&&("function"===typeof M?M(e):"object"===typeof M&&(M.current=e))}),[M,y]);o.default.useEffect((function(){var e=D&&n&&i.isLocalURL(d),t="undefined"!==typeof g?g:a&&a.locale,r=c[d+"%"+v+(t?"%"+t:"")];e&&!r&&l(a,d,v,{locale:t})}),[v,d,D,g,n,a]);var E={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,u,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),t[a?"replace":"push"](n,r,{shallow:o,locale:s,scroll:u}))}(e,a,d,v,p,m,Z,g)},onMouseEnter:function(e){i.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(a,d,v,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var T="undefined"!==typeof g?g:a&&a.locale,x=a&&a.isLocaleDomain&&i.getDomainLocale(v,T,a&&a.locales,a&&a.domainLocales);E.href=x||i.addBasePath(i.addLocale(v,T,a&&a.defaultLocale))}return o.default.cloneElement(t,E)};t.default=f},57190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,s=a.useRef(),c=r(a.useState(!1),2),l=c[0],f=c[1],d=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||l||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),u.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,l]);return a.useEffect((function(){if(!i&&!l){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[l]),[d,l]};var a=n(67294),o=n(9311),i="undefined"!==typeof IntersectionObserver;var u=new Map},41664:function(e,t,n){e.exports=n(48418)}}]);