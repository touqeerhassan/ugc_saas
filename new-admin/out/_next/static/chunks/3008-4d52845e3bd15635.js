"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3008],{13540:function(e,t,r){var n=r(64836);t.Z=void 0;var o=n(r(64938)),i=r(85893),a=(0,o.default)((0,i.jsx)("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"}),"Logout");t.Z=a},31594:function(e,t,r){r.d(t,{Z:function(){return C}});var n=r(63366),o=r(87462),i=r(67294),a=r(86010);var s=e=>{const t=i.useRef({});return i.useEffect((()=>{t.current=e})),t.current},l=r(94780);var c=r(1588),u=r(34867);function d(e){return(0,u.Z)("BaseBadge",e)}(0,c.Z)("BaseBadge",["root","badge","invisible"]);var g=r(18793),f=r(85893);const p=["badgeContent","component","children","components","componentsProps","invisible","max","showZero"];var h=i.forwardRef((function(e,t){const{component:r,children:i,components:a={},componentsProps:c={},max:u=99,showZero:h=!1}=e,v=(0,n.Z)(e,p),{badgeContent:m,max:b,displayValue:y,invisible:Z}=function(e){const{badgeContent:t,invisible:r=!1,max:n=99,showZero:o=!1}=e,i=s({badgeContent:t,max:n});let a=r;!1!==r||0!==t||o||(a=!0);const{badgeContent:l,max:c=n}=a?i:e;return{badgeContent:l,invisible:a,max:c,displayValue:l&&Number(l)>c?`${c}+`:l}}((0,o.Z)({},e,{max:u})),w=(0,o.Z)({},e,{badgeContent:m,invisible:Z,max:b,showZero:h}),x=(e=>{const{invisible:t}=e,r={root:["root"],badge:["badge",t&&"invisible"]};return(0,l.Z)(r,d,void 0)})(w),S=r||a.Root||"span",O=(0,g.Z)({elementType:S,externalSlotProps:c.root,externalForwardedProps:v,additionalProps:{ref:t},ownerState:w,className:x.root}),k=a.Badge||"span",C=(0,g.Z)({elementType:k,externalSlotProps:c.badge,ownerState:w,className:x.badge});return(0,f.jsxs)(S,(0,o.Z)({},O,{children:[i,(0,f.jsx)(k,(0,o.Z)({},C,{children:y}))]}))})),v=r(90948),m=r(71657),b=r(28442);var y=e=>!e||!(0,b.Z)(e),Z=r(98216);function w(e){return(0,u.Z)("MuiBadge",e)}var x=(0,c.Z)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]);const S=["anchorOrigin","className","component","components","componentsProps","overlap","color","invisible","max","badgeContent","showZero","variant"],O=(0,v.ZP)("span",{name:"MuiBadge",slot:"Root",overridesResolver:(e,t)=>t.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),k=(0,v.ZP)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.badge,t[r.variant],t[`anchorOrigin${(0,Z.Z)(r.anchorOrigin.vertical)}${(0,Z.Z)(r.anchorOrigin.horizontal)}${(0,Z.Z)(r.overlap)}`],"default"!==r.color&&t[`color${(0,Z.Z)(r.color)}`],r.invisible&&t.invisible]}})((({theme:e,ownerState:t})=>(0,o.Z)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.enteringScreen})},"default"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].main,color:(e.vars||e).palette[t.color].contrastText},"dot"===t.variant&&{borderRadius:4,height:8,minWidth:8,padding:0},"top"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${x.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},"bottom"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${x.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},"top"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${x.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},"bottom"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${x.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},"top"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${x.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},"bottom"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${x.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},"top"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${x.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},"bottom"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${x.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},t.invisible&&{transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.leavingScreen})})));var C=i.forwardRef((function(e,t){var r,i,c,u;const d=(0,m.Z)({props:e,name:"MuiBadge"}),{anchorOrigin:g={vertical:"top",horizontal:"right"},className:p,component:v="span",components:b={},componentsProps:x={},overlap:C="rectangular",color:R="default",invisible:$=!1,max:z,badgeContent:P,showZero:N=!1,variant:E="standard"}=d,I=(0,n.Z)(d,S),j=s({anchorOrigin:g,color:R,overlap:C,variant:E});let M=$;!1===$&&(0===P&&!N||null==P&&"dot"!==E)&&(M=!0);const{color:L=R,overlap:T=C,anchorOrigin:B=g,variant:D=E}=M?j:d,A=(e=>{const{color:t,anchorOrigin:r,invisible:n,overlap:o,variant:i,classes:a={}}=e,s={root:["root"],badge:["badge",i,n&&"invisible",`anchorOrigin${(0,Z.Z)(r.vertical)}${(0,Z.Z)(r.horizontal)}`,`anchorOrigin${(0,Z.Z)(r.vertical)}${(0,Z.Z)(r.horizontal)}${(0,Z.Z)(o)}`,`overlap${(0,Z.Z)(o)}`,"default"!==t&&`color${(0,Z.Z)(t)}`]};return(0,l.Z)(s,w,a)})((0,o.Z)({},d,{anchorOrigin:B,invisible:M,color:L,overlap:T,variant:D}));let W;return"dot"!==D&&(W=P&&Number(P)>z?`${z}+`:P),(0,f.jsx)(h,(0,o.Z)({invisible:$,badgeContent:W,showZero:N,max:z},I,{components:(0,o.Z)({Root:O,Badge:k},b),className:(0,a.Z)(p,A.root,null==(r=x.root)?void 0:r.className),componentsProps:{root:(0,o.Z)({},x.root,y(b.Root)&&{as:v,ownerState:(0,o.Z)({},null==(i=x.root)?void 0:i.ownerState,{anchorOrigin:B,color:L,overlap:T,variant:D})}),badge:(0,o.Z)({},x.badge,{className:(0,a.Z)(A.badge,null==(c=x.badge)?void 0:c.className)},y(b.Badge)&&{ownerState:(0,o.Z)({},null==(u=x.badge)?void 0:u.ownerState,{anchorOrigin:B,color:L,overlap:T,variant:D})})},ref:t}))}))},98456:function(e,t,r){r.d(t,{Z:function(){return R}});var n=r(63366),o=r(87462),i=r(67294),a=r(86010),s=r(94780),l=r(98012),c=r(98216),u=r(71657),d=r(90948),g=r(34867);function f(e){return(0,g.Z)("MuiCircularProgress",e)}(0,r(1588).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var p=r(85893);const h=["className","color","disableShrink","size","style","thickness","value","variant"];let v,m,b,y,Z=e=>e;const w=44,x=(0,l.F4)(v||(v=Z`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),S=(0,l.F4)(m||(m=Z`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),O=(0,d.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,c.Z)(r.color)}`]]}})((({ownerState:e,theme:t})=>(0,o.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,l.iv)(b||(b=Z`
      animation: ${0} 1.4s linear infinite;
    `),x))),k=(0,d.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),C=(0,d.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,c.Z)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,o.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,l.iv)(y||(y=Z`
      animation: ${0} 1.4s ease-in-out infinite;
    `),S)));var R=i.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiCircularProgress"}),{className:i,color:l="primary",disableShrink:d=!1,size:g=40,style:v,thickness:m=3.6,value:b=0,variant:y="indeterminate"}=r,Z=(0,n.Z)(r,h),x=(0,o.Z)({},r,{color:l,disableShrink:d,size:g,thickness:m,value:b,variant:y}),S=(e=>{const{classes:t,variant:r,color:n,disableShrink:o}=e,i={root:["root",r,`color${(0,c.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(r)}`,o&&"circleDisableShrink"]};return(0,s.Z)(i,f,t)})(x),R={},$={},z={};if("determinate"===y){const e=2*Math.PI*((w-m)/2);R.strokeDasharray=e.toFixed(3),z["aria-valuenow"]=Math.round(b),R.strokeDashoffset=`${((100-b)/100*e).toFixed(3)}px`,$.transform="rotate(-90deg)"}return(0,p.jsx)(O,(0,o.Z)({className:(0,a.Z)(S.root,i),style:(0,o.Z)({width:g,height:g},$,v),ownerState:x,ref:t,role:"progressbar"},z,Z,{children:(0,p.jsx)(k,{className:S.svg,ownerState:x,viewBox:"22 22 44 44",children:(0,p.jsx)(C,{className:S.circle,style:R,ownerState:x,cx:w,cy:w,r:(w-m)/2,fill:"none",strokeWidth:m})})}))}))},57922:function(e,t,r){r.d(t,{Z:function(){return S}});var n=r(63366),o=r(87462),i=r(67294),a=r(86010),s=r(98885),l=r(94780),c=r(90948),u=r(71657),d=r(96067),g=r(30577),f=r(2734),p=r(51705),h=r(34867);function v(e){return(0,h.Z)("MuiCollapse",e)}(0,r(1588).Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var m=r(85893);const b=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],y=(0,c.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.orientation],"entered"===r.state&&t.entered,"exited"===r.state&&!r.in&&"0px"===r.collapsedSize&&t.hidden]}})((({theme:e,ownerState:t})=>(0,o.Z)({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===t.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===t.state&&(0,o.Z)({height:"auto",overflow:"visible"},"horizontal"===t.orientation&&{width:"auto"}),"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&{visibility:"hidden"}))),Z=(0,c.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})((({ownerState:e})=>(0,o.Z)({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),w=(0,c.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})((({ownerState:e})=>(0,o.Z)({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),x=i.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiCollapse"}),{addEndListener:c,children:h,className:x,collapsedSize:S="0px",component:O,easing:k,in:C,onEnter:R,onEntered:$,onEntering:z,onExit:P,onExited:N,onExiting:E,orientation:I="vertical",style:j,timeout:M=d.x9.standard,TransitionComponent:L=s.ZP}=r,T=(0,n.Z)(r,b),B=(0,o.Z)({},r,{orientation:I,collapsedSize:S}),D=(e=>{const{orientation:t,classes:r}=e,n={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return(0,l.Z)(n,v,r)})(B),A=(0,f.Z)(),W=i.useRef(),F=i.useRef(null),H=i.useRef(),G="number"===typeof S?`${S}px`:S,V="horizontal"===I,_=V?"width":"height";i.useEffect((()=>()=>{clearTimeout(W.current)}),[]);const U=i.useRef(null),J=(0,p.Z)(t,U),Y=e=>t=>{if(e){const r=U.current;void 0===t?e(r):e(r,t)}},q=()=>F.current?F.current[V?"clientWidth":"clientHeight"]:0,K=Y(((e,t)=>{F.current&&V&&(F.current.style.position="absolute"),e.style[_]=G,R&&R(e,t)})),Q=Y(((e,t)=>{const r=q();F.current&&V&&(F.current.style.position="");const{duration:n,easing:o}=(0,g.C)({style:j,timeout:M,easing:k},{mode:"enter"});if("auto"===M){const t=A.transitions.getAutoHeightDuration(r);e.style.transitionDuration=`${t}ms`,H.current=t}else e.style.transitionDuration="string"===typeof n?n:`${n}ms`;e.style[_]=`${r}px`,e.style.transitionTimingFunction=o,z&&z(e,t)})),X=Y(((e,t)=>{e.style[_]="auto",$&&$(e,t)})),ee=Y((e=>{e.style[_]=`${q()}px`,P&&P(e)})),te=Y(N),re=Y((e=>{const t=q(),{duration:r,easing:n}=(0,g.C)({style:j,timeout:M,easing:k},{mode:"exit"});if("auto"===M){const r=A.transitions.getAutoHeightDuration(t);e.style.transitionDuration=`${r}ms`,H.current=r}else e.style.transitionDuration="string"===typeof r?r:`${r}ms`;e.style[_]=G,e.style.transitionTimingFunction=n,E&&E(e)}));return(0,m.jsx)(L,(0,o.Z)({in:C,onEnter:K,onEntered:X,onEntering:Q,onExit:ee,onExited:te,onExiting:re,addEndListener:e=>{"auto"===M&&(W.current=setTimeout(e,H.current||0)),c&&c(U.current,e)},nodeRef:U,timeout:"auto"===M?null:M},T,{children:(e,t)=>(0,m.jsx)(y,(0,o.Z)({as:O,className:(0,a.Z)(D.root,x,{entered:D.entered,exited:!C&&"0px"===G&&D.hidden}[e]),style:(0,o.Z)({[V?"minWidth":"minHeight"]:G},j),ownerState:(0,o.Z)({},B,{state:e}),ref:J},t,{children:(0,m.jsx)(Z,{ownerState:(0,o.Z)({},B,{state:e}),className:D.wrapper,ref:F,children:(0,m.jsx)(w,{ownerState:(0,o.Z)({},B,{state:e}),className:D.wrapperInner,children:h})})}))}))}));x.muiSupportAuto=!0;var S=x},75438:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(63366),o=r(87462),i=r(67294),a=r(86010),s=r(94780),l=r(90948),c=r(71657),u=r(98216),d=r(34867);function g(e){return(0,d.Z)("MuiListSubheader",e)}(0,r(1588).Z)("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);var f=r(85893);const p=["className","color","component","disableGutters","disableSticky","inset"],h=(0,l.ZP)("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,"default"!==r.color&&t[`color${(0,u.Z)(r.color)}`],!r.disableGutters&&t.gutters,r.inset&&t.inset,!r.disableSticky&&t.sticky]}})((({theme:e,ownerState:t})=>(0,o.Z)({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(e.vars||e).palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},"primary"===t.color&&{color:(e.vars||e).palette.primary.main},"inherit"===t.color&&{color:"inherit"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.inset&&{paddingLeft:72},!t.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(e.vars||e).palette.background.paper})));var v=i.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiListSubheader"}),{className:i,color:l="default",component:d="li",disableGutters:v=!1,disableSticky:m=!1,inset:b=!1}=r,y=(0,n.Z)(r,p),Z=(0,o.Z)({},r,{color:l,component:d,disableGutters:v,disableSticky:m,inset:b}),w=(e=>{const{classes:t,color:r,disableGutters:n,inset:o,disableSticky:i}=e,a={root:["root","default"!==r&&`color${(0,u.Z)(r)}`,!n&&"gutters",o&&"inset",!i&&"sticky"]};return(0,s.Z)(a,g,t)})(Z);return(0,f.jsx)(h,(0,o.Z)({as:d,className:(0,a.Z)(w.root,i),ref:t,ownerState:Z},y))}))},70720:function(e,t){t.Z={50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea"}},62143:function(e,t,r){r.d(t,{$:function(){return m}});var n=r(40181);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(l){s=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}}(e,t)||(0,n.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=r(4942),a=r(67294),s=r(57715);function l(){if(console&&console.warn){for(var e,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];"string"===typeof r[0]&&(r[0]="react-i18next:: ".concat(r[0])),(e=console).warn.apply(e,r)}}var c={};function u(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];"string"===typeof t[0]&&c[t[0]]||("string"===typeof t[0]&&(c[t[0]]=new Date),l.apply(void 0,t))}function d(e,t,r){e.loadNamespaces(t,(function(){if(e.isInitialized)r();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),r()}))}}))}function g(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t.languages[0],o=!!t.options&&t.options.fallbackLng,i=t.languages[t.languages.length-1];if("cimode"===n.toLowerCase())return!0;var a=function(e,r){var n=t.services.backendConnector.state["".concat(e,"|").concat(r)];return-1===n||2===n};return!(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(n,e)||(!(t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages))||!(!a(n,e)||o&&!a(i,e))))}function f(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return u("i18n.languages were undefined or empty",t.languages),!0;var n=void 0!==t.options.ignoreJSONStructure;return n?t.hasLoadedNamespace(e,{precheck:function(t,n){if(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!n(t.isLanguageChangingTo,e))return!1}}):g(e,t,r)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(e,t){var r=(0,a.useRef)();return(0,a.useEffect)((function(){r.current=t?r.current:e}),[e,t]),r.current};function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.i18n,n=(0,a.useContext)(s.OO)||{},i=n.i18n,l=n.defaultNS,c=r||i||(0,s.nI)();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new s.zv),!c){u("You will need to pass in an i18next instance by using initReactI18next");var g=function(e){return Array.isArray(e)?e[e.length-1]:e},p=[g,{},!1];return p.t=g,p.i18n={},p.ready=!1,p}c.options.react&&void 0!==c.options.react.wait&&u("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var m=h(h(h({},(0,s.JP)()),c.options.react),t),b=m.useSuspense,y=m.keyPrefix,Z=e||l||c.options&&c.options.defaultNS;Z="string"===typeof Z?[Z]:Z||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(Z);var w=(c.isInitialized||c.initializedStoreOnce)&&Z.every((function(e){return f(e,c,m)}));function x(){return c.getFixedT(null,"fallback"===m.nsMode?Z:Z[0],y)}var S=(0,a.useState)(x),O=o(S,2),k=O[0],C=O[1],R=Z.join(),$=v(R),z=(0,a.useRef)(!0);(0,a.useEffect)((function(){var e=m.bindI18n,t=m.bindI18nStore;function r(){z.current&&C(x)}return z.current=!0,w||b||d(c,Z,(function(){z.current&&C(x)})),w&&$&&$!==R&&z.current&&C(x),e&&c&&c.on(e,r),t&&c&&c.store.on(t,r),function(){z.current=!1,e&&c&&e.split(" ").forEach((function(e){return c.off(e,r)})),t&&c&&t.split(" ").forEach((function(e){return c.store.off(e,r)}))}}),[c,R]);var P=(0,a.useRef)(!0);(0,a.useEffect)((function(){z.current&&!P.current&&C(x),P.current=!1}),[c]);var N=[k,c,w];if(N.t=k,N.i18n=c,N.ready=w,w)return N;if(!w&&!b)return N;throw new Promise((function(e){d(c,Z,(function(){e()}))}))}},30907:function(e,t,r){function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return n}})},40181:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(30907);function o(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}}}]);