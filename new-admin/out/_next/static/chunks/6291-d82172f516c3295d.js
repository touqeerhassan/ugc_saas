(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6291],{18987:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(63366),a=n(87462),o=n(67294),i=n(86010),s=n(94780),l=n(59773),c=n(90948),u=n(71657),d=n(34867);function f(e){return(0,d.Z)("MuiListItemAvatar",e)}(0,n(1588).Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var p=n(85893);const v=["className"],m=(0,c.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"flex-start"===n.alignItems&&t.alignItemsFlexStart]}})((({ownerState:e})=>(0,a.Z)({minWidth:56,flexShrink:0},"flex-start"===e.alignItems&&{marginTop:8})));var g=o.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiListItemAvatar"}),{className:c}=n,d=(0,r.Z)(n,v),g=o.useContext(l.Z),b=(0,a.Z)({},n,{alignItems:g.alignItems}),h=(e=>{const{alignItems:t,classes:n}=e,r={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,s.Z)(r,f,n)})(b);return(0,p.jsx)(m,(0,a.Z)({className:(0,i.Z)(h.root,c),ownerState:b,ref:t},d))}))},78462:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(63366),a=n(87462),o=n(67294),i=n(86010),s=n(94780),l=n(90948),c=n(71657),u=n(59773),d=n(34867);function f(e){return(0,d.Z)("MuiList",e)}(0,n(1588).Z)("MuiList",["root","padding","dense","subheader"]);var p=n(85893);const v=["children","className","component","dense","disablePadding","subheader"],m=(0,l.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})((({ownerState:e})=>(0,a.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})));var g=o.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiList"}),{children:l,className:d,component:g="ul",dense:b=!1,disablePadding:h=!1,subheader:y}=n,Z=(0,r.Z)(n,v),x=o.useMemo((()=>({dense:b})),[b]),w=(0,a.Z)({},n,{component:g,dense:b,disablePadding:h}),C=(e=>{const{classes:t,disablePadding:n,dense:r,subheader:a}=e,o={root:["root",!n&&"padding",r&&"dense",a&&"subheader"]};return(0,s.Z)(o,f,t)})(w);return(0,p.jsx)(u.Z.Provider,{value:x,children:(0,p.jsxs)(m,(0,a.Z)({as:g,className:(0,i.Z)(C.root,d),ref:t,ownerState:w},Z,{children:[y,l]}))})}))},59773:function(e,t,n){"use strict";const r=n(67294).createContext({});t.Z=r},18972:function(e,t,n){"use strict";n.d(t,{Z:function(){return I}});var r=n(63366),a=n(87462),o=n(67294),i=n(86010),s=n(94780),l=n(41796),c=n(90948),u=n(71657),d=n(59773),f=n(82607),p=n(58974),v=n(51705),m=n(35097),g=n(84592),b=n(26336),h=n(34867);function y(e){return(0,h.Z)("MuiMenuItem",e)}var Z=(0,n(1588).Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),x=n(85893);const w=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],C=(0,c.ZP)(f.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,a.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Z.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Z.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${Z.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${Z.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${Z.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${m.Z.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${m.Z.inset}`]:{marginLeft:52},[`& .${b.Z.root}`]:{marginTop:0,marginBottom:0},[`& .${b.Z.inset}`]:{paddingLeft:36},[`& .${g.Z.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,a.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${g.Z.root} svg`]:{fontSize:"1.25rem"}}))));var I=o.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:l=!1,component:c="li",dense:f=!1,divider:m=!1,disableGutters:g=!1,focusVisibleClassName:b,role:h="menuitem",tabIndex:Z}=n,I=(0,r.Z)(n,w),M=o.useContext(d.Z),L={dense:f||M.dense||!1,disableGutters:g},$=o.useRef(null);(0,p.Z)((()=>{l&&$.current&&$.current.focus()}),[l]);const k=(0,a.Z)({},n,{dense:L.dense,divider:m,disableGutters:g}),S=(e=>{const{disabled:t,dense:n,divider:r,disableGutters:o,selected:i,classes:l}=e,c={root:["root",n&&"dense",t&&"disabled",!o&&"gutters",r&&"divider",i&&"selected"]},u=(0,s.Z)(c,y,l);return(0,a.Z)({},l,u)})(n),O=(0,v.Z)($,t);let R;return n.disabled||(R=void 0!==Z?Z:-1),(0,x.jsx)(d.Z.Provider,{value:L,children:(0,x.jsx)(C,(0,a.Z)({ref:O,role:h,tabIndex:R,component:c,focusVisibleClassName:(0,i.Z)(S.focusVisible,b)},I,{ownerState:k,classes:S}))})}))},71579:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(67294);var a=function(e,t){return r.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},58974:function(e,t,n){"use strict";var r=n(16600);t.Z=r.Z},27909:function(e,t,n){"use strict";var r=n(57579);t.Z=r.Z},48418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){a=!0,o=l}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var a,o=(a=n(67294))&&a.__esModule?a:{default:a},i=n(76273),s=n(90387),l=n(57190);var c={};function u(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,a=s.useRouter(),d=o.default.useMemo((function(){var t=r(i.resolveHref(a,e.href,!0),2),n=t[0],o=t[1];return{href:n,as:e.as?i.resolveHref(a,e.as):o||n}}),[a,e.href,e.as]),f=d.href,p=d.as,v=e.children,m=e.replace,g=e.shallow,b=e.scroll,h=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var y=(t=o.default.Children.only(v))&&"object"===typeof t&&t.ref,Z=r(l.useIntersection({rootMargin:"200px"}),2),x=Z[0],w=Z[1],C=o.default.useCallback((function(e){x(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,x]);o.default.useEffect((function(){var e=w&&n&&i.isLocalURL(f),t="undefined"!==typeof h?h:a&&a.locale,r=c[f+"%"+p+(t?"%"+t:"")];e&&!r&&u(a,f,p,{locale:t})}),[p,f,w,h,n,a]);var I={ref:C,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[a?"replace":"push"](n,r,{shallow:o,locale:l,scroll:s}))}(e,a,f,p,m,g,b,h)},onMouseEnter:function(e){i.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,f,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof h?h:a&&a.locale,L=a&&a.isLocaleDomain&&i.getDomainLocale(p,M,a&&a.locales,a&&a.domainLocales);I.href=L||i.addBasePath(i.addLocale(p,M,a&&a.defaultLocale))}return o.default.cloneElement(t,I)};t.default=d},57190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){a=!0,o=l}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,l=a.useRef(),c=r(a.useState(!1),2),u=c[0],d=c[1],f=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||u||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),s.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,u]);return a.useEffect((function(){if(!i&&!u){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[f,u]};var a=n(67294),o=n(9311),i="undefined"!==typeof IntersectionObserver;var s=new Map},41664:function(e,t,n){e.exports=n(48418)}}]);