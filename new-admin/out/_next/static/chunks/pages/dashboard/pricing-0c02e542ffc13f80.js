(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6535],{53156:function(e,t,r){"use strict";r.d(t,{Z:function(){return Z}});var i=r(63366),n=r(87462),a=r(67294),o=r(86010),s=r(28320),c=r(34867),l=r(94780),d=r(29628);var u=(0,r(70182).ZP)(),p=r(88647),h=r(85893);const m=["className","component","disableGutters","fixed","maxWidth","classes"],x=(0,p.Z)(),g=u("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,s.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),f=e=>(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:x});var b=r(98216),v=r(90948),w=r(71657);var Z=function(e={}){const{createStyledComponent:t=g,useThemeProps:r=f,componentName:d="MuiContainer"}=e,u=t((({theme:e,ownerState:t})=>(0,n.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,r)=>{const i=r,n=e.breakpoints.values[i];return 0!==n&&(t[e.breakpoints.up(i)]={maxWidth:`${n}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,n.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})));return a.forwardRef((function(e,t){const a=r(e),{className:p,component:x="div",disableGutters:g=!1,fixed:f=!1,maxWidth:b="lg"}=a,v=(0,i.Z)(a,m),w=(0,n.Z)({},a,{component:x,disableGutters:g,fixed:f,maxWidth:b}),Z=((e,t)=>{const{classes:r,fixed:i,disableGutters:n,maxWidth:a}=e,o={root:["root",a&&`maxWidth${(0,s.Z)(String(a))}`,i&&"fixed",n&&"disableGutters"]};return(0,l.Z)(o,(e=>(0,c.Z)(t,e)),r)})(w,d);return(0,h.jsx)(u,(0,n.Z)({as:x,ownerState:w,className:(0,o.Z)(Z.root,p),ref:t},v))}))}({createStyledComponent:(0,v.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,b.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,w.Z)({props:e,name:"MuiContainer"})})},86886:function(e,t,r){"use strict";r.d(t,{ZP:function(){return y}});var i=r(63366),n=r(87462),a=r(67294),o=r(86010),s=r(95408),c=r(39707),l=r(94780),d=r(90948),u=r(71657),p=r(2734);var h=a.createContext(),m=r(34867);function x(e){return(0,m.Z)("MuiGrid",e)}const g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var f=(0,r(1588).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...g.map((e=>`grid-xs-${e}`)),...g.map((e=>`grid-sm-${e}`)),...g.map((e=>`grid-md-${e}`)),...g.map((e=>`grid-lg-${e}`)),...g.map((e=>`grid-xl-${e}`))]),b=r(85893);const v=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function w(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}const Z=(0,d.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e,{container:i,direction:n,item:a,spacing:o,wrap:s,zeroMinWidth:c,breakpoints:l}=r;let d=[];i&&(d=function(e,t,r={}){if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[r[`spacing-xs-${String(e)}`]];const i=[];return t.forEach((t=>{const n=e[t];Number(n)>0&&i.push(r[`spacing-${t}-${String(n)}`])})),i}(o,l,t));const u=[];return l.forEach((e=>{const i=r[e];i&&u.push(t[`grid-${e}-${String(i)}`])})),[t.root,i&&t.container,a&&t.item,c&&t.zeroMinWidth,...d,"row"!==n&&t[`direction-xs-${String(n)}`],"wrap"!==s&&t[`wrap-xs-${String(s)}`],...u]}})((({ownerState:e})=>(0,n.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:t}){const r=(0,s.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,s.k9)({theme:e},r,(e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${f.item}`]={maxWidth:"none"}),t}))}),(function({theme:e,ownerState:t}){const{container:r,rowSpacing:i}=t;let n={};if(r&&0!==i){const t=(0,s.P$)({values:i,breakpoints:e.breakpoints.values});n=(0,s.k9)({theme:e},t,(t=>{const r=e.spacing(t);return"0px"!==r?{marginTop:`-${w(r)}`,[`& > .${f.item}`]:{paddingTop:w(r)}}:{}}))}return n}),(function({theme:e,ownerState:t}){const{container:r,columnSpacing:i}=t;let n={};if(r&&0!==i){const t=(0,s.P$)({values:i,breakpoints:e.breakpoints.values});n=(0,s.k9)({theme:e},t,(t=>{const r=e.spacing(t);return"0px"!==r?{width:`calc(100% + ${w(r)})`,marginLeft:`-${w(r)}`,[`& > .${f.item}`]:{paddingLeft:w(r)}}:{}}))}return n}),(function({theme:e,ownerState:t}){let r;return e.breakpoints.keys.reduce(((i,a)=>{let o={};if(t[a]&&(r=t[a]),!r)return i;if(!0===r)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=(0,s.P$)({values:t.columns,breakpoints:e.breakpoints.values}),l="object"===typeof c?c[a]:c;if(void 0===l||null===l)return i;const d=Math.round(r/l*1e8)/1e6+"%";let u={};if(t.container&&t.item&&0!==t.columnSpacing){const r=e.spacing(t.columnSpacing);if("0px"!==r){const e=`calc(${d} + ${w(r)})`;u={flexBasis:e,maxWidth:e}}}o=(0,n.Z)({flexBasis:d,flexGrow:0,maxWidth:d},u)}return 0===e.breakpoints.values[a]?Object.assign(i,o):i[e.breakpoints.up(a)]=o,i}),{})}));const k=e=>{const{classes:t,container:r,direction:i,item:n,spacing:a,wrap:o,zeroMinWidth:s,breakpoints:c}=e;let d=[];r&&(d=function(e,t){if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[`spacing-xs-${String(e)}`];const r=[];return t.forEach((t=>{const i=e[t];if(Number(i)>0){const e=`spacing-${t}-${String(i)}`;r.push(e)}})),r}(a,c));const u=[];c.forEach((t=>{const r=e[t];r&&u.push(`grid-${t}-${String(r)}`)}));const p={root:["root",r&&"container",n&&"item",s&&"zeroMinWidth",...d,"row"!==i&&`direction-xs-${String(i)}`,"wrap"!==o&&`wrap-xs-${String(o)}`,...u]};return(0,l.Z)(p,x,t)};var y=a.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiGrid"}),{breakpoints:s}=(0,p.Z)(),l=(0,c.Z)(r),{className:d,columns:m,columnSpacing:x,component:g="div",container:f=!1,direction:w="row",item:y=!1,rowSpacing:S,spacing:$=0,wrap:j="wrap",zeroMinWidth:P=!1}=l,W=(0,i.Z)(l,v),C=S||$,R=x||$,z=a.useContext(h),M=f?m||12:z,N={},O=(0,n.Z)({},W);s.keys.forEach((e=>{null!=W[e]&&(N[e]=W[e],delete O[e])}));const B=(0,n.Z)({},l,{columns:M,container:f,direction:w,item:y,rowSpacing:C,columnSpacing:R,wrap:j,zeroMinWidth:P,spacing:$},N,{breakpoints:s.keys}),G=k(B);return(0,b.jsx)(h.Provider,{value:M,children:(0,b.jsx)(Z,(0,n.Z)({ownerState:B,className:(0,o.Z)(G.root,d),as:g,ref:t},O))})}))},45843:function(e,t,r){"use strict";r.d(t,{Z:function(){return k}});var i=r(63366),n=r(87462),a=r(67294),o=r(86010),s=r(94780),c=r(41796),l=r(98216),d=r(21964),u=r(71657),p=r(90948),h=r(34867);function m(e){return(0,h.Z)("MuiSwitch",e)}var x=(0,r(1588).Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),g=r(85893);const f=["className","color","edge","size","sx"],b=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.edge&&t[`edge${(0,l.Z)(r.edge)}`],t[`size${(0,l.Z)(r.size)}`]]}})((({ownerState:e})=>(0,n.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===e.edge&&{marginLeft:-8},"end"===e.edge&&{marginRight:-8},"small"===e.size&&{width:40,height:24,padding:7,[`& .${x.thumb}`]:{width:16,height:16},[`& .${x.switchBase}`]:{padding:4,[`&.${x.checked}`]:{transform:"translateX(16px)"}}}))),v=(0,p.ZP)(d.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.switchBase,{[`& .${x.input}`]:t.input},"default"!==r.color&&t[`color${(0,l.Z)(r.color)}`]]}})((({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${"light"===e.palette.mode?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${x.checked}`]:{transform:"translateX(20px)"},[`&.${x.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${x.checked} + .${x.track}`]:{opacity:.5},[`&.${x.disabled} + .${x.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:""+("light"===e.palette.mode?.12:.2)},[`& .${x.input}`]:{left:"-100%",width:"300%"}})),(({theme:e,ownerState:t})=>(0,n.Z)({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${x.checked}`]:{color:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${x.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t.color}DisabledColor`]:`${"light"===e.palette.mode?(0,c.$n)(e.palette[t.color].main,.62):(0,c._j)(e.palette[t.color].main,.55)}`}},[`&.${x.checked} + .${x.track}`]:{backgroundColor:(e.vars||e).palette[t.color].main}}))),w=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})((({theme:e})=>({height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${"light"===e.palette.mode?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:""+("light"===e.palette.mode?.38:.3)}))),Z=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})((({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})));var k=a.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiSwitch"}),{className:a,color:c="primary",edge:d=!1,size:p="medium",sx:h}=r,x=(0,i.Z)(r,f),k=(0,n.Z)({},r,{color:c,edge:d,size:p}),y=(e=>{const{classes:t,edge:r,size:i,color:a,checked:o,disabled:c}=e,d={root:["root",r&&`edge${(0,l.Z)(r)}`,`size${(0,l.Z)(i)}`],switchBase:["switchBase",`color${(0,l.Z)(a)}`,o&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},u=(0,s.Z)(d,m,t);return(0,n.Z)({},t,u)})(k),S=(0,g.jsx)(Z,{className:y.thumb,ownerState:k});return(0,g.jsxs)(b,{className:(0,o.Z)(y.root,a),sx:h,ownerState:k,children:[(0,g.jsx)(v,(0,n.Z)({type:"checkbox",icon:S,checkedIcon:S,ref:t,ownerState:k},x,{classes:(0,n.Z)({},y,{root:y.switchBase})})),(0,g.jsx)(w,{className:y.track,ownerState:k})]})}))},21964:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var i=r(63366),n=r(87462),a=r(67294),o=r(86010),s=r(94780),c=r(98216),l=r(90948),d=r(49299),u=r(74423),p=r(82607),h=r(34867);function m(e){return(0,h.Z)("PrivateSwitchBase",e)}(0,r(1588).Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var x=r(85893);const g=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],f=(0,l.ZP)(p.Z)((({ownerState:e})=>(0,n.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12}))),b=(0,l.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1});var v=a.forwardRef((function(e,t){const{autoFocus:r,checked:a,checkedIcon:l,className:p,defaultChecked:h,disabled:v,disableFocusRipple:w=!1,edge:Z=!1,icon:k,id:y,inputProps:S,inputRef:$,name:j,onBlur:P,onChange:W,onFocus:C,readOnly:R,required:z,tabIndex:M,type:N,value:O}=e,B=(0,i.Z)(e,g),[G,F]=(0,d.Z)({controlled:a,default:Boolean(h),name:"SwitchBase",state:"checked"}),T=(0,u.Z)();let E=v;T&&"undefined"===typeof E&&(E=T.disabled);const I="checkbox"===N||"radio"===N,_=(0,n.Z)({},e,{checked:G,disabled:E,disableFocusRipple:w,edge:Z}),q=(e=>{const{classes:t,checked:r,disabled:i,edge:n}=e,a={root:["root",r&&"checked",i&&"disabled",n&&`edge${(0,c.Z)(n)}`],input:["input"]};return(0,s.Z)(a,m,t)})(_);return(0,x.jsxs)(f,(0,n.Z)({component:"span",className:(0,o.Z)(q.root,p),centerRipple:!0,focusRipple:!w,disabled:E,tabIndex:null,role:void 0,onFocus:e=>{C&&C(e),T&&T.onFocus&&T.onFocus(e)},onBlur:e=>{P&&P(e),T&&T.onBlur&&T.onBlur(e)},ownerState:_,ref:t},B,{children:[(0,x.jsx)(b,(0,n.Z)({autoFocus:r,checked:a,defaultChecked:h,className:q.input,disabled:E,id:I&&y,name:j,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const t=e.target.checked;F(t),W&&W(e,t)},readOnly:R,ref:$,required:z,ownerState:_,tabIndex:M,type:N},"checkbox"===N&&void 0===O?{}:{value:O},S)),G?l:k]}))}))},70208:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/pricing",function(){return r(94132)}])},96296:function(e,t,r){"use strict";r.d(t,{J:function(){return n}});var i=r(85893),n=(0,r(82066).Z)((0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),"Check")},94132:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var i=r(85893),n=r(67294),a=r(9008),o=r(99226),s=r(53156),c=r(86886),l=r(15861),d=r(45843),u=r(31594),p=r(67720),h=r(2734),m=r(98875),x=r(21405),g=r(45697),f=r.n(g),b=r(11057),v=r(96296);function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){w(e,t,r[t])}))}return e}function k(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var y=function(e){var t=e.cta,r=e.currency,n=e.description,a=e.features,s=e.image,c=e.name,d=e.popular,u=e.price,h=e.sx,m=k(e,["cta","currency","description","features","image","name","popular","price","sx"]);return(0,i.jsxs)(o.Z,Z({sx:Z({display:"flex",flexDirection:"column"},h)},m,{children:[(0,i.jsxs)(o.Z,{sx:{p:3},children:[(0,i.jsx)(o.Z,{sx:{height:52,width:52,"& img":{height:"auto",width:"100%"}},children:(0,i.jsx)("img",{alt:"",src:s})}),(0,i.jsxs)(o.Z,{sx:{display:"flex"},children:[(0,i.jsxs)(l.Z,{variant:"h4",children:[r,u]}),(0,i.jsx)(l.Z,{color:"textSecondary",sx:{alignSelf:"flex-end",ml:1},variant:"subtitle2",children:"/mo"})]}),(0,i.jsx)(l.Z,{sx:{mt:2},variant:"h6",children:c}),(0,i.jsx)(l.Z,{color:"textSecondary",sx:{mt:2},variant:"body2",children:n})]}),(0,i.jsx)(p.Z,{}),(0,i.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",flexGrow:1,p:3},children:[a.map((function(e){return(0,i.jsxs)(o.Z,{sx:{alignItems:"center",display:"flex","& + &":{mt:2}},children:[(0,i.jsx)(v.J,{fontSize:"small",sx:{color:"text.primary"}}),(0,i.jsx)(l.Z,{sx:{fontWeight:500,ml:2},variant:"body2",children:e})]},e)})),(0,i.jsx)(o.Z,{sx:{flexGrow:1}}),(0,i.jsx)(o.Z,{sx:{display:"flex",justifyContent:"center",mt:6},children:(0,i.jsx)(b.Z,{fullWidth:!0,variant:d?"contained":"outlined",children:t})})]})]}))};y.propTypes={cta:f().string.isRequired,currency:f().string.isRequired,description:f().string.isRequired,features:f().array.isRequired,image:f().string.isRequired,name:f().string.isRequired,popular:f().bool,price:f().string.isRequired,sx:f().object};var S=r(38682),$=function(){var e=(0,h.Z)();return(0,n.useEffect)((function(){S.w.push({event:"page_view"})}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.default,{children:(0,i.jsx)("title",{children:"Pricing | Material Kit Pro"})}),(0,i.jsxs)(o.Z,{component:"main",sx:{backgroundColor:"background.paper",flexGrow:1,pb:6},children:[(0,i.jsx)(o.Z,{sx:{backgroundColor:"background.default",py:6},children:(0,i.jsx)(s.Z,{maxWidth:"lg",children:(0,i.jsxs)(c.ZP,{container:!0,alignItems:"center",spacing:2,flexWrap:"nowrap",children:[(0,i.jsxs)(c.ZP,{item:!0,md:7,xs:12,children:[(0,i.jsx)(l.Z,{variant:"h3",children:"Start today. Boost up your services!"}),(0,i.jsx)(l.Z,{color:"textSecondary",sx:{my:2},variant:"body1",children:"Join 3,000+ developers & designers using Devias to power modern web projects."}),(0,i.jsx)(d.Z,{}),(0,i.jsx)(u.Z,{badgeContent:"25% OFF",sx:{"& .MuiBadge-badge":{backgroundColor:"primary.main",color:"primary.contrastText",right:-38,top:"25%"}},children:(0,i.jsx)(l.Z,{variant:"body1",children:"Yearly Payment"})})]}),(0,i.jsx)(c.ZP,{item:!0,md:5,sx:{display:{md:"block",xs:"none"}},children:(0,i.jsx)(o.Z,{sx:{height:420,maxWidth:419,position:"relative","& img":{height:"auto",position:"absolute",top:0,width:"100%"}},children:(0,i.jsx)("img",{alt:"Pricing hero",src:"/static/pricing/pricing_".concat(e.palette.mode,".svg")})})})]})})}),(0,i.jsx)(p.Z,{}),(0,i.jsx)(s.Z,{maxWidth:"lg",sx:{py:6},children:(0,i.jsxs)(c.ZP,{container:!0,spacing:4,children:[(0,i.jsx)(c.ZP,{item:!0,md:4,xs:12,children:(0,i.jsx)(y,{cta:"Start Free Trial",currency:"$",description:"To familiarize yourself with our tools.",features:["Create contracts","Chat support","Email alerts"],image:"/static/pricing/plan1.svg",name:"Startup",price:"0",sx:{height:"100%",maxWidth:460,mx:"auto"}})}),(0,i.jsx)(c.ZP,{item:!0,md:4,xs:12,children:(0,i.jsx)(y,{cta:"Start Free Trial",currency:"$",description:"To familiarize yourself with our tools.",features:["All previous","Highlights reporting","Data history","Unlimited users"],image:"/static/pricing/plan2.svg",name:"Standard",popular:!0,price:"4.99",sx:{height:"100%",maxWidth:460,mx:"auto"}})}),(0,i.jsx)(c.ZP,{item:!0,md:4,xs:12,children:(0,i.jsx)(y,{cta:"Contact Us",currency:"$",description:"To familiarize yourself with our tools.",features:["All previous","Unlimited contacts","Analytics platform","Public API access","Send and sign unlimited contracts"],image:"/static/pricing/plan3.svg",name:"Business",price:"29.99",sx:{height:"100%",maxWidth:460,mx:"auto"}})})]})}),(0,i.jsx)(l.Z,{align:"center",color:"textSecondary",component:"p",variant:"caption",children:"30% of our income goes into Whale Charity"})]})]})};$.getLayout=function(e){return(0,i.jsx)(m.a,{children:(0,i.jsx)(x.c,{children:e})})};var j=$}},function(e){e.O(0,[354,9417,5464,9519,135,925,4386,5459,7344,7637,3606,7258,3008,5124,9774,2888,179],(function(){return t=70208,e(e.s=t);var t}));var t=e.O();_N_E=t}]);