(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4025],{56569:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/browse/colors",function(){return r(42523)}])},29961:function(e,n,r){"use strict";r.d(n,{h:function(){return v}});var t=r(85893),a=r(67294),i=r(45697),o=r.n(i),l=r(66242),c=r(78445),s=r(93946),d=r(67720),u=r(71927),x=r(92268),p=r(82066),h=(0,p.Z)((0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,t.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})}),"Moon"),m=(0,p.Z)((0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})}),"Sun"),f=r(73928);function j(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function b(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){j(e,n,r[n])}))}return e}function g(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var v=function(e){var n=e.element,r=e.name,i=g(e,["element","name"]),o=(0,x.r)().settings,p=(0,a.useState)(o.theme),j=p[0],v=p[1];(0,a.useEffect)((function(){v(o.theme)}),[o.theme]);var y=(0,f.j)(b({},o,{mode:j}));return(0,t.jsxs)(l.Z,b({variant:"outlined",sx:{mb:8}},i,{children:[(0,t.jsx)(c.Z,{action:(0,t.jsx)(s.Z,{onClick:function(){v((function(e){return"light"===e?"dark":"light"}))},children:"light"===j?(0,t.jsx)(h,{fontSize:"small"}):(0,t.jsx)(m,{fontSize:"small"})}),title:r}),(0,t.jsx)(d.Z,{}),(0,t.jsx)(u.Z,{theme:y,children:n})]}))};v.propTypes={element:o().node.isRequired,name:o().string.isRequired}},42523:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return y}});var t=r(85893),a=r(67294),i=r(9008),o=r(99226),l=r(53156),c=r(45982),s=r(54978),d=r(29961),u=r(78462),x=r(9875),p=r(18987),h=r(59334),m=r(15861),f=r(2734),j=function(){var e=(0,f.Z)(),n=[{name:"Primary",code:e.palette.primary.main},{name:"Text Primary",code:e.palette.text.primary},{name:"Text Secondary",code:e.palette.text.secondary},{name:"Divider",code:e.palette.divider}];return(0,t.jsx)(o.Z,{sx:{backgroundColor:"background.paper",p:3},children:(0,t.jsx)(u.Z,{disablePadding:!0,sx:{"& li:not(:last-child)":{pb:"33px",pt:0},"& li:last-child":{py:0}},children:n.map((function(e){return(0,t.jsxs)(x.ZP,{disableGutters:!0,children:[(0,t.jsx)(p.Z,{children:(0,t.jsx)(o.Z,{sx:{backgroundColor:e.code,borderRadius:"10px",height:46,mr:2,width:46}})}),(0,t.jsx)(h.Z,{primary:(0,t.jsx)(m.Z,{variant:"subtitle2",children:e.name}),secondary:(0,t.jsx)(m.Z,{color:"textSecondary",variant:"caption",children:e.code})})]},e.code)}))})})},b=function(){var e=(0,f.Z)(),n=[{name:"Success",code:e.palette.success.main},{name:"Error",code:e.palette.error.main},{name:"Warning",code:e.palette.warning.main},{name:"Info",code:e.palette.info.main}];return(0,t.jsx)(o.Z,{sx:{backgroundColor:"background.paper",p:3},children:(0,t.jsx)(u.Z,{disablePadding:!0,sx:{"& li:not(:last-child)":{pb:"33px",pt:0},"& li:last-child":{py:0}},children:n.map((function(e){return(0,t.jsxs)(x.ZP,{disableGutters:!0,children:[(0,t.jsx)(p.Z,{children:(0,t.jsx)(o.Z,{sx:{backgroundColor:e.code,borderRadius:"10px",height:46,mr:2,width:46}})}),(0,t.jsx)(h.Z,{primary:(0,t.jsx)(m.Z,{variant:"subtitle2",children:e.name}),secondary:(0,t.jsx)(m.Z,{color:"textSecondary",variant:"caption",children:e.code})})]},e.code)}))})})},g=r(38682),v=function(){return(0,a.useEffect)((function(){g.w.push({event:"page_view"})}),[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.default,{children:(0,t.jsx)("title",{children:"Browse: Colors | Material Kit Pro"})}),(0,t.jsx)(o.Z,{component:"main",sx:{backgroundColor:"background.paper",flexGrow:1,py:8},children:(0,t.jsxs)(l.Z,{maxWidth:"lg",children:[(0,t.jsx)(d.h,{element:(0,t.jsx)(j,{}),name:"Main colors"}),(0,t.jsx)(d.h,{element:(0,t.jsx)(b,{}),name:"Severity colors"})]})})]})};v.getLayout=function(e){return(0,t.jsx)(s.Z,{children:(0,t.jsx)(c.T,{children:e})})};var y=v}},function(e){e.O(0,[354,9519,7555,4421,9774,2888,179],(function(){return n=56569,e(e.s=n);var n}));var n=e.O();_N_E=n}]);