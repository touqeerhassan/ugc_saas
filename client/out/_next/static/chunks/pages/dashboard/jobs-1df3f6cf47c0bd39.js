(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5110],{66242:function(e,r,n){"use strict";n.d(r,{Z:function(){return v}});var t=n(87462),a=n(63366),i=n(67294),o=n(86010),l=n(94780),s=n(90948),c=n(71657),u=n(55113),d=n(34867);function f(e){return(0,d.Z)("MuiCard",e)}(0,n(1588).Z)("MuiCard",["root"]);var x=n(85893);const p=["className","raised"],m=(0,s.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,r)=>r.root})((()=>({overflow:"hidden"})));var v=i.forwardRef((function(e,r){const n=(0,c.Z)({props:e,name:"MuiCard"}),{className:i,raised:s=!1}=n,u=(0,a.Z)(n,p),d=(0,t.Z)({},n,{raised:s}),v=(e=>{const{classes:r}=e;return(0,l.Z)({root:["root"]},f,r)})(d);return(0,x.jsx)(m,(0,t.Z)({className:(0,o.Z)(v.root,i),elevation:s?8:void 0,ref:r,ownerState:d},u))}))},53156:function(e,r,n){"use strict";n.d(r,{Z:function(){return g}});var t=n(63366),a=n(87462),i=n(67294),o=n(86010),l=n(28320),s=n(34867),c=n(94780),u=n(29628);var d=(0,n(70182).ZP)(),f=n(66500),x=n(85893);const p=["className","component","disableGutters","fixed","maxWidth","classes"],m=(0,f.Z)(),v=d("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:n}=e;return[r.root,r[`maxWidth${(0,l.Z)(String(n.maxWidth))}`],n.fixed&&r.fixed,n.disableGutters&&r.disableGutters]}}),h=e=>(0,u.Z)({props:e,name:"MuiContainer",defaultTheme:m});var b=n(98216),j=n(90948),y=n(71657);var g=function(e={}){const{createStyledComponent:r=v,useThemeProps:n=h,componentName:u="MuiContainer"}=e,d=r((({theme:e,ownerState:r})=>(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!r.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:r})=>r.fixed&&Object.keys(e.breakpoints.values).reduce(((r,n)=>{const t=n,a=e.breakpoints.values[t];return 0!==a&&(r[e.breakpoints.up(t)]={maxWidth:`${a}${e.breakpoints.unit}`}),r}),{})),(({theme:e,ownerState:r})=>(0,a.Z)({},"xs"===r.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},r.maxWidth&&"xs"!==r.maxWidth&&{[e.breakpoints.up(r.maxWidth)]:{maxWidth:`${e.breakpoints.values[r.maxWidth]}${e.breakpoints.unit}`}})));return i.forwardRef((function(e,r){const i=n(e),{className:f,component:m="div",disableGutters:v=!1,fixed:h=!1,maxWidth:b="lg"}=i,j=(0,t.Z)(i,p),y=(0,a.Z)({},i,{component:m,disableGutters:v,fixed:h,maxWidth:b}),g=((e,r)=>{const{classes:n,fixed:t,disableGutters:a,maxWidth:i}=e,o={root:["root",i&&`maxWidth${(0,l.Z)(String(i))}`,t&&"fixed",a&&"disableGutters"]};return(0,c.Z)(o,(e=>(0,s.Z)(r,e)),n)})(y,u);return(0,x.jsx)(d,(0,a.Z)({as:m,ownerState:y,className:(0,o.Z)(g.root,f),ref:r},j))}))}({createStyledComponent:(0,j.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:n}=e;return[r.root,r[`maxWidth${(0,b.Z)(String(n.maxWidth))}`],n.fixed&&r.fixed,n.disableGutters&&r.disableGutters]}}),useThemeProps:e=>(0,y.Z)({props:e,name:"MuiContainer"})})},73949:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/jobs",function(){return n(92651)}])},46716:function(e,r,n){"use strict";n.d(r,{N:function(){return h}});var t=n(85893),a=n(67294),i=n(45697),o=n.n(i),l=n(11057),s=n(25464),c=n(18972),u=n(50480),d=n(69368),f=n(5365);function x(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){x(e,r,n[r])}))}return e}function m(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function v(e){return function(e){if(Array.isArray(e)){for(var r=0,n=new Array(e.length);r<e.length;r++)n[r]=e[r];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var h=function(e){var r=e.label,n=e.onChange,i=e.options,o=e.value,x=void 0===o?[]:o,h=m(e,["label","onChange","options","value"]),b=(0,a.useRef)(null),j=(0,a.useState)(!1),y=j[0],g=j[1],Z=function(e){var r=v(x);e.target.checked?r.push(e.target.value):r=r.filter((function(r){return r!==e.target.value})),null===n||void 0===n||n(r)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.Z,p({color:"inherit",endIcon:(0,t.jsx)(f._,{fontSize:"small"}),onClick:function(){g(!0)},ref:b},h,{children:r})),(0,t.jsx)(s.Z,{anchorEl:b.current,onClose:function(){g(!1)},open:y,PaperProps:{style:{width:250}},children:i.map((function(e){return(0,t.jsx)(c.Z,{children:(0,t.jsx)(u.Z,{control:(0,t.jsx)(d.Z,{checked:x.includes(e.value),onChange:Z,value:e.value}),label:e.label,sx:{flexGrow:1,mr:0}})},e.label)}))})]})};h.propTypes={label:o().string.isRequired,onChange:o().func,options:o().array.isRequired,value:o().array.isRequired}},64337:function(e,r,n){"use strict";n.d(r,{s:function(){return a}});var t=n(85893),a=(0,n(82066).Z)((0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"})}),"ChevronLeft")},92651:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return q}});var t=n(28520),a=n.n(t),i=n(85893),o=n(67294),l=n(9008),s=n(41664),c=n(87357),u=n(53156),d=n(86886),f=n(15861),x=n(11057),p=n(66242),m=n(44267),v=n(87952),h=n(23795),b=n(93946),j=n(96536),y=n(98875),g=n(64527),Z=n(79332),w=n(67720),k=n(87918),S=n(50480),O=n(69368),P=n(97169),W=n(46716);function C(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var R=[{label:"Freelance",value:"freelance"},{label:"Full Time",value:"fullTime"},{label:"Part Time",value:"partTime"},{label:"Internship",value:"internship"}],N=[{label:"Novice",value:"novice"},{label:"Expert",value:"expert"}],M=[{label:"Africa",value:"africa"},{label:"Asia",value:"asia"},{label:"Europe",value:"europe"},{label:"North America",value:"northAmerica"},{label:"South America",value:"southAmerica"}],_=[{label:"Web Developer",value:"webDeveloper"},{label:"Android Developer",value:"androidDeveloper"},{label:"iOS Developer",value:"iosDeveloper"}],E=function(e){var r=(0,o.useMemo)((function(){return[{label:"Type",field:"type",value:"freelance",displayValue:"Freelance"},{label:"Type",field:"type",value:"internship",displayValue:"Internship"},{label:"Level",field:"level",value:"novice",displayValue:"Novice"},{label:"Location",field:"location",value:"asia",displayValue:"Asia"},{label:"Role",field:"role",value:"webDeveloper",displayValue:"Web Developer"}]}),[]),n=(0,o.useMemo)((function(){return r.filter((function(e){return"type"===e.field})).map((function(e){return e.value}))}),[r]),t=(0,o.useMemo)((function(){return r.filter((function(e){return"level"===e.field})).map((function(e){return e.value}))}),[r]),a=(0,o.useMemo)((function(){return r.filter((function(e){return"location"===e.field})).map((function(e){return e.value}))}),[r]),l=(0,o.useMemo)((function(){return r.filter((function(e){return"role"===e.field})).map((function(e){return e.value}))}),[r]);return(0,i.jsxs)(p.Z,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){C(e,r,n[r])}))}return e}({},e,{children:[(0,i.jsxs)(c.Z,{sx:{alignItems:"center",display:"flex",p:2},children:[(0,i.jsx)(P.o,{fontSize:"small"}),(0,i.jsx)(c.Z,{sx:{flexGrow:1,ml:3},children:(0,i.jsx)(Z.Z,{disableUnderline:!0,fullWidth:!0,placeholder:"Enter a keyword"})})]}),(0,i.jsx)(w.Z,{}),(0,i.jsx)(c.Z,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap",p:2},children:r.map((function(e,r){return(0,i.jsx)(k.Z,{label:(0,i.jsxs)(c.Z,{sx:{alignItems:"center",display:"flex","& span":{fontWeight:600}},children:[(0,i.jsx)("span",{children:e.label}),":"," ",e.displayValue||e.value]}),onDelete:function(){},sx:{m:1},variant:"outlined"},r)}))}),(0,i.jsx)(w.Z,{}),(0,i.jsxs)(c.Z,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap",p:1},children:[(0,i.jsx)(W.N,{label:"Type",options:R,value:n}),(0,i.jsx)(W.N,{label:"Level",options:N,value:t}),(0,i.jsx)(W.N,{label:"Location",options:M,value:a}),(0,i.jsx)(W.N,{label:"Role",options:_,value:l}),(0,i.jsx)(c.Z,{sx:{flexGrow:1}}),(0,i.jsx)(S.Z,{control:(0,i.jsx)(O.Z,{defaultChecked:!0}),label:"In network"})]})]}))},I=n(27182),D=n(46723),G=(0,n(82066).Z)((0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"})}),"BadgeCheckOutlined"),T=n(64337),A=n(9952),L=n(56432),z=n(27514),F=n(38682),V=n(75955);function $(e,r,n,t,a,i,o){try{var l=e[i](o),s=l.value}catch(c){return void n(c)}l.done?r(s):Promise.resolve(s).then(t,a)}var B=function(){var e=(0,D.s)(),r=(0,o.useState)([]),n=r[0],t=r[1];(0,o.useEffect)((function(){F.w.push({event:"page_view"})}),[]);var y,g=(0,o.useCallback)((y=a().mark((function r(){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,j.i.getCompanies();case 3:n=r.sent,e()&&t(n),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})),function(){var e=this,r=arguments;return new Promise((function(n,t){var a=y.apply(e,r);function i(e){$(a,n,t,i,o,"next",e)}function o(e){$(a,n,t,i,o,"throw",e)}i(void 0)}))}),[e]);return(0,o.useEffect)((function(){g()}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.default,{children:(0,i.jsx)("title",{children:"Dashboard: Job Browse | Material Kit Pro"})}),(0,i.jsx)(c.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,i.jsxs)(u.Z,{maxWidth:"md",children:[(0,i.jsxs)(d.ZP,{alignItems:"center",container:!0,sx:{backgroundColor:"neutral.900",borderRadius:1,color:"#FFFFFF",px:4,py:8},children:[(0,i.jsxs)(d.ZP,{item:!0,xs:12,sm:7,children:[(0,i.jsx)(f.Z,{color:"inherit",variant:"h3",children:"Reach 50K+ potential candidates."}),(0,i.jsx)(f.Z,{color:"neutral.500",sx:{mt:2},variant:"body1",children:"Post your job today for free. Promotions start at $99."}),(0,i.jsx)(x.Z,{color:"secondary",size:"large",sx:{mt:3},variant:"contained",children:"Post a job"})]}),(0,i.jsx)(d.ZP,{item:!0,sm:5,sx:{display:{xs:"none",sm:"block"}},children:(0,i.jsx)("img",{alt:"",src:"/static/mock-images/jobs/job_browse_header.svg"})})]}),(0,i.jsx)(c.Z,{sx:{mt:4},children:(0,i.jsx)(E,{})}),(0,i.jsx)("div",{children:n.map((function(e){return(0,i.jsx)(p.Z,{sx:{mt:4},children:(0,i.jsxs)(m.Z,{children:[(0,i.jsxs)(c.Z,{sx:{display:"flex",flexDirection:{xs:"column",sm:"row"}},children:[(0,i.jsx)(s.default,{href:"/dashboard/jobs/companies/1",passHref:!0,children:(0,i.jsx)(v.Z,{component:"a",src:e.logo,sx:{background:"transparent",mr:2,mb:{xs:2,md:0}},variant:"rounded",children:(0,V.Q)(e.name)})}),(0,i.jsxs)("div",{children:[(0,i.jsx)(s.default,{href:"/dashboard/jobs/companies/1",passHref:!0,children:(0,i.jsx)(h.Z,{color:"textPrimary",variant:"h6",children:e.name})}),(0,i.jsx)(f.Z,{variant:"body2",children:e.shortDescription}),(0,i.jsxs)(c.Z,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap",ml:-3,"& > *":{ml:3,mt:1}},children:[(0,i.jsxs)(c.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,i.jsx)(z.Q,{color:"action",fontSize:"small",sx:{mr:1}}),(0,i.jsx)(f.Z,{color:"textSecondary",noWrap:!0,variant:"overline",children:e.employees})]}),(0,i.jsxs)(c.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,i.jsx)(L.U,{color:"action",fontSize:"small",sx:{mr:1}}),(0,i.jsxs)(f.Z,{color:"textSecondary",noWrap:!0,variant:"overline",children:[e.averageRating,"/5"]})]}),e.isVerified&&(0,i.jsxs)(c.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,i.jsx)(G,{color:"success",fontSize:"small",sx:{mr:1}}),(0,i.jsx)(f.Z,{color:"success",noWrap:!0,variant:"overline",children:"Verified"})]})]})]})]}),(0,i.jsx)(c.Z,{sx:{mt:2},children:(0,i.jsx)(I.i,{jobs:e.jobs})})]})},e.id)}))}),(0,i.jsxs)(c.Z,{sx:{display:"flex",justifyContent:"flex-end",mt:4,px:3,py:2},children:[(0,i.jsx)(b.Z,{disabled:!0,children:(0,i.jsx)(T.s,{fontSize:"small"})}),(0,i.jsx)(b.Z,{children:(0,i.jsx)(A._,{fontSize:"small"})})]})]})})]})};B.getLayout=function(e){return(0,i.jsx)(y.a,{children:(0,i.jsx)(g.c,{children:e})})};var q=B}},function(e){e.O(0,[354,5464,9519,135,5459,7344,7637,3606,3680,267,9419,63,8848,4434,9774,2888,179],(function(){return r=73949,e(e.s=r);var r}));var r=e.O();_N_E=r}]);