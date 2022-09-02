(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2063],{33758:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/authentication/register",function(){return t(28537)}])},88986:function(e,r,t){"use strict";t.d(r,{U:function(){return x}});var n=t(85893),a=t(41664),i=t(99226),s=t(53156),l=t(87918),o=t(15861),u=t(23795),c=t(34386),d="/static/icons/amplify.svg",h="/static/icons/auth0.svg",m="/static/icons/firebase.svg",f="/static/icons/jwt.svg",x=function(){return(0,n.jsx)(i.Z,{sx:{backgroundColor:"background.paper",borderBottom:1,borderColor:"divider",py:1},children:(0,n.jsx)(s.Z,{maxWidth:"md",children:(0,n.jsxs)(i.Z,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap",justifyContent:"center"},children:[(0,n.jsx)(l.Z,{color:"primary",label:"NEW",sx:{mr:2},size:"small"}),(0,n.jsxs)(o.Z,{variant:"subtitle2",children:["Visit our"," ",(0,n.jsx)(a.default,{href:"/docs/welcome",passHref:!0,children:(0,n.jsx)(u.Z,{variant:"subtitle2",children:"docs"})})," ","and find out how to switch between"]}),(0,n.jsxs)(i.Z,{sx:{alignItems:"center",display:"flex","& img":{height:30,m:1}},children:[(0,n.jsx)(c.Z,{title:"Amplify",children:(0,n.jsx)("img",{alt:"Amplify",src:d})}),(0,n.jsx)(c.Z,{title:"Auth0",children:(0,n.jsx)("img",{alt:"Auth0",src:h})}),(0,n.jsx)(c.Z,{title:"Firebase",children:(0,n.jsx)("img",{alt:"Firebase",src:m})}),(0,n.jsx)(c.Z,{title:"JSON Web Token",children:(0,n.jsx)("img",{alt:"JWT",src:f})})]})]})})})}},33149:function(e,r,t){"use strict";t.d(r,{A:function(){return u}});var n=t(85893),a=t(67294),i=t(11163),s=t(45697),l=t.n(s),o=t(89731),u=function(e){var r=e.children,t=(0,o.a)(),s=(0,i.useRouter)(),l=(0,a.useState)(!1),u=l[0],c=l[1],d=s.query.disableGuard;return(0,a.useEffect)((function(){s.isReady&&(t.isAuthenticated&&"true"!==d?s.push("/dashboard"):c(!0))}),[s.isReady]),u?(0,n.jsx)(n.Fragment,{children:r}):null};u.propTypes={children:l().node}},89731:function(e,r,t){"use strict";t.d(r,{a:function(){return i}});var n=t(67294),a=t(20818),i=function(){return(0,n.useContext)(a.Vo)}},46723:function(e,r,t){"use strict";t.d(r,{s:function(){return a}});var n=t(67294),a=function(){var e=(0,n.useRef)(!1);return(0,n.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),(0,n.useCallback)((function(){return e.current}),[])}},28537:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return H}});var n=t(85893),a=t(67294),i=t(9008),s=t(41664),l=t(11163),o=t(99226),u=t(53156),c=t(66242),d=t(15861),h=t(67720),m=t(23795),f=t(33149),x=(t(88986),t(28520)),p=t.n(x),g=t(74231),v=t(82175),j=t(89731),y=t(46723);var b=t(50135),Z=t(94054),w=t(33841),N=t(18360),A=t(18972),T=t(69368),C=t(56815),E=t(11057),S=t(63961);function _(e,r,t,n,a,i,s){try{var l=e[i](s),o=l.value}catch(u){return void t(u)}l.done?r(o):Promise.resolve(o).then(n,a)}function P(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var i=e.apply(r,t);function s(e){_(i,n,a,s,l,"next",e)}function l(e){_(i,n,a,s,l,"throw",e)}s(void 0)}))}}function k(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function I(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){k(e,r,t[r])}))}return e}var W=function(e,r){if("AUTH_STATE_CHANGED"===r.type){var t=r.payload;return I({},e,{isAuthenticated:t.isAuthenticated,isInitialized:!0,user:t.user})}return e},B={isAuthenticated:!1,isInitialized:!1,user:null},O=function(e){var r=(0,a.useReducer)(W,B),t=(r[0],r[1]);(0,a.useEffect)((function(){return S.Z.auth().onAuthStateChanged((function(e){t(e?{type:"AUTH_STATE_CHANGED",payload:{isAuthenticated:!0,user:{id:e.uid,avatar:e.photoURL,email:e.email,name:"Anika Visser",plan:"Premium"}}}:{type:"AUTH_STATE_CHANGED",payload:{isAuthenticated:!1,user:null}})}))}),[t]);var i=(0,y.s)(),s=(0,l.useRouter)(),u=(0,j.a)(),c=(u.createUserWithEmailAndPassword,u.signInWithGoogle,(0,a.useState)("")),h=c[0],f=c[1],x=(0,v.TA)({initialValues:{fName:"",lName:"",email:"",password:"",policy:!0,submit:null},validationSchema:g.Ry({fName:g.Z_().max(255).required("First name is required"),lName:g.Z_().max(255).required("First name is required"),email:g.Z_().email("Must be a valid email").max(255).required("Email is required"),password:g.Z_().min(7).max(255).required("Password is required"),policy:g.O7().oneOf([!0],"This field must be checked")}),onSubmit:P(p().mark((function e(r,t){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{console.log("Trying"),console.log(r),sessionStorage.setItem("userType",h),S.Z.auth().createUserWithEmailAndPassword(r.email,r.password).then((function(e){var t=e.user;sessionStorage.setItem("userId",t.uid),sessionStorage.setItem("userEmail",t.email),sessionStorage.setItem("loginType","register");s.query.returnUrl;S.Z.auth().currentUser.updateProfile({displayName:"".concat(r.fName," ").concat(r.lName)}).then((function(){console.log("Profile updated!",S.Z.auth().currentUser)})).catch((function(e){console.log("Profile updated!",S.Z.auth().currentUser)}))})).catch((function(e){console.log(e)}))}catch(n){console.error(n),i()&&(t.setStatus({success:!1}),t.setErrors({submit:n.message}),t.setSubmitting(!1))}case 1:case"end":return e.stop()}}),e)})))});P(p().mark((function e(){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new S.Z.auth.GoogleAuthProvider,e.abrupt("return",S.Z.auth().signInWithPopup(r));case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return(0,n.jsxs)("div",I({},e,{children:[(0,n.jsx)(o.Z,{sx:{alignItems:"center",display:"flex",mt:2}}),(0,n.jsxs)("form",{noValidate:!0,onSubmit:x.handleSubmit,children:[(0,n.jsx)(b.Z,{error:Boolean(x.touched.fName&&x.errors.fName),fullWidth:!0,helperText:x.touched.fName&&x.errors.fName,label:"First Name",margin:"normal",name:"fName",onBlur:x.handleBlur,onChange:x.handleChange,type:"text",value:x.values.fName}),(0,n.jsx)(b.Z,{error:Boolean(x.touched.lName&&x.errors.lName),fullWidth:!0,helperText:x.touched.lName&&x.errors.lName,label:"Last Name",margin:"normal",name:"lName",onBlur:x.handleBlur,onChange:x.handleChange,type:"text",value:x.values.lName}),(0,n.jsxs)(Z.Z,{fullWidth:!0,sx:{margin:"16px 0"},children:[(0,n.jsx)(w.Z,{id:"demo-simple-select-label",children:"User Type"}),(0,n.jsxs)(N.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:h,label:"User Type",onChange:function(e){return f(e.target.value)},children:[(0,n.jsx)(A.Z,{value:"brand",children:"Brand"}),(0,n.jsx)(A.Z,{value:"creator",children:"Creator"})]})]}),(0,n.jsx)(b.Z,{error:Boolean(x.touched.email&&x.errors.email),fullWidth:!0,helperText:x.touched.email&&x.errors.email,label:"Email Address",margin:"normal",name:"email",onBlur:x.handleBlur,onChange:x.handleChange,type:"email",value:x.values.email}),(0,n.jsx)(b.Z,{error:Boolean(x.touched.password&&x.errors.password),fullWidth:!0,helperText:x.touched.password&&x.errors.password,label:"Password",margin:"normal",name:"password",onBlur:x.handleBlur,onChange:x.handleChange,type:"password",value:x.values.password}),(0,n.jsxs)(o.Z,{sx:{alignItems:"center",display:"flex",ml:-1,mt:2},children:[(0,n.jsx)(T.Z,{checked:x.values.policy,name:"policy",onChange:x.handleChange}),(0,n.jsxs)(d.Z,{color:"textSecondary",variant:"body2",children:["I have read the"," ",(0,n.jsx)(m.Z,{component:"a",href:"#",children:"Terms and Conditions"})]})]}),Boolean(x.touched.policy&&x.errors.policy)&&(0,n.jsx)(C.Z,{error:!0,children:x.errors.policy}),x.errors.submit&&(0,n.jsx)(o.Z,{sx:{mt:3},children:(0,n.jsx)(C.Z,{error:!0,children:x.errors.submit})}),(0,n.jsx)(o.Z,{sx:{mt:2},children:(0,n.jsx)(E.Z,{disabled:x.isSubmitting,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Register"})})]})]}))};var R=t(36788),U=t(38682),q=function(){var e=(0,l.useRouter)().query.disableGuard;return(0,a.useEffect)((function(){U.w.push({event:"page_view"})}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.default,{children:(0,n.jsx)("title",{children:"Register | Material Kit Pro"})}),(0,n.jsx)(o.Z,{component:"main",sx:{backgroundColor:"background.default",display:"flex",flexDirection:"column",minHeight:"100vh"},children:(0,n.jsx)(u.Z,{maxWidth:"sm",sx:{py:{xs:"60px",md:"120px"}},children:(0,n.jsxs)(c.Z,{elevation:16,sx:{p:4},children:[(0,n.jsxs)(o.Z,{sx:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,n.jsx)(s.default,{href:"/",passHref:!0,children:(0,n.jsx)("a",{children:(0,n.jsx)(R.T,{sx:{height:40,width:40}})})}),(0,n.jsx)(d.Z,{variant:"h4",children:"Register"}),(0,n.jsx)(d.Z,{color:"textSecondary",sx:{mt:2},variant:"body2",children:"Register on the internal platform"})]}),(0,n.jsx)(o.Z,{sx:{flexGrow:1,mt:3},children:(0,n.jsx)(O,{})}),(0,n.jsx)(h.Z,{sx:{my:3}}),(0,n.jsx)(s.default,{href:e?"/authentication/login?disableGuard=".concat(e):"/authentication/login",passHref:!0,children:(0,n.jsx)(m.Z,{color:"textSecondary",variant:"body2",children:"Having an account"})})]})})})]})};q.getLayout=function(e){return(0,n.jsx)(f.A,{children:e})};var H=q}},function(e){e.O(0,[354,9417,5464,135,925,4386,939,1141,8247,4135,9774,2888,179],(function(){return r=33758,e(e.s=r);var r}));var r=e.O();_N_E=r}]);