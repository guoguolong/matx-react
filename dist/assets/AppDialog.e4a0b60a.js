import{a as M,g as P,r as p,s as f,bc as Re,M as We,e as R,b as u,P as ne,f as A,k as Me,_ as I,ak as Pe,c as e,h as x,d as O,bd as Ae,T as k,i as Ie,ag as Oe,aQ as W,t as B,$ as h,j as a,b1 as H,B as c,D as ae,C as F,aL as Be,w as re,Q as Le,be as Ne,b6 as Fe,bf as _e,aH as Ue,a6 as je,a9 as oe,bg as te,N as ze,ax as Ge,ay as g}from"./index.b42ef678.js";import{a as S,L as T}from"./ListItemText.67c33dab.js";import{R as qe,a as Ve}from"./RadioGroup.960596d9.js";import{F as le}from"./FormGroup.6c95a808.js";import{d as se}from"./Close.f4df2df5.js";import{S as ce}from"./Slide.f32abf07.js";import{A as Ee}from"./AppBar.51ac305f.js";import{T as He}from"./Toolbar.9eb02cb1.js";import{M as N}from"./MenuItem.78d13e95.js";import{S as Ye}from"./Switch.b2159d87.js";import{r as de,i as ue,a as pe}from"./jsx-runtime_commonjs-proxy.482f9faa.js";import{S as Ke}from"./Stack.489c501c.js";import"./SwitchBase.ee0187b9.js";function Qe(o){return P("MuiDialog",o)}const Xe=M("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),E=Xe,Je=p.exports.createContext({}),me=Je,Ze=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],eo=f(Re,{name:"MuiDialog",slot:"Backdrop",overrides:(o,t)=>t.backdrop})({zIndex:-1}),oo=o=>{const{classes:t,scroll:i,maxWidth:n,fullWidth:r,fullScreen:s}=o,l={root:["root"],container:["container",`scroll${R(i)}`],paper:["paper",`paperScroll${R(i)}`,`paperWidth${R(String(n))}`,r&&"paperFullWidth",s&&"paperFullScreen"]};return O(l,Qe,t)},to=f(We,{name:"MuiDialog",slot:"Root",overridesResolver:(o,t)=>t.root})({"@media print":{position:"absolute !important"}}),io=f("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,t)=>{const{ownerState:i}=o;return[t.container,t[`scroll${R(i.scroll)}`]]}})(({ownerState:o})=>u({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),no=f(ne,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,t)=>{const{ownerState:i}=o;return[t.paper,t[`scrollPaper${R(i.scroll)}`],t[`paperWidth${R(String(i.maxWidth))}`],i.fullWidth&&t.paperFullWidth,i.fullScreen&&t.paperFullScreen]}})(({theme:o,ownerState:t})=>u({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},t.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},t.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!t.maxWidth&&{maxWidth:"calc(100% - 64px)"},t.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`${o.breakpoints.values.xs}${o.breakpoints.unit}`,[`&.${E.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},t.maxWidth&&t.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[t.maxWidth]}${o.breakpoints.unit}`,[`&.${E.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[t.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},t.fullWidth&&{width:"calc(100% - 64px)"},t.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${E.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),ao=p.exports.forwardRef(function(t,i){const n=A({props:t,name:"MuiDialog"}),r=Me(),s={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{"aria-describedby":l,"aria-labelledby":d,BackdropComponent:m,BackdropProps:b,children:y,className:Q,disableEscapeKeyDown:D=!1,fullScreen:j=!1,fullWidth:xe=!1,maxWidth:ve="sm",onBackdropClick:X,onClose:z,open:J,PaperComponent:be=ne,PaperProps:Z={},scroll:ye="paper",TransitionComponent:De=Ae,transitionDuration:ee=s,TransitionProps:ke}=n,Se=I(n,Ze),U=u({},n,{disableEscapeKeyDown:D,fullScreen:j,fullWidth:xe,maxWidth:ve,scroll:ye}),G=oo(U),q=p.exports.useRef(),Te=L=>{q.current=L.target===L.currentTarget},we=L=>{!q.current||(q.current=null,X&&X(L),z&&z(L,"backdropClick"))},V=Pe(d),$e=p.exports.useMemo(()=>({titleId:V}),[V]);return e(to,u({className:x(G.root,Q),closeAfterTransition:!0,components:{Backdrop:eo},componentsProps:{backdrop:u({transitionDuration:ee,as:m},b)},disableEscapeKeyDown:D,onClose:z,open:J,ref:i,onClick:we,ownerState:U},Se,{children:e(De,u({appear:!0,in:J,timeout:ee,role:"presentation"},ke,{children:e(io,{className:x(G.container),onMouseDown:Te,ownerState:U,children:e(no,u({as:be,elevation:24,role:"dialog","aria-describedby":l,"aria-labelledby":V},Z,{className:x(G.paper,Z.className),ownerState:U,children:e(me.Provider,{value:$e,children:y})}))})}))}))}),C=ao;function ro(o){return P("MuiDialogActions",o)}M("MuiDialogActions",["root","spacing"]);const lo=["className","disableSpacing"],so=o=>{const{classes:t,disableSpacing:i}=o;return O({root:["root",!i&&"spacing"]},ro,t)},co=f("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:i}=o;return[t.root,!i.disableSpacing&&t.spacing]}})(({ownerState:o})=>u({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),uo=p.exports.forwardRef(function(t,i){const n=A({props:t,name:"MuiDialogActions"}),{className:r,disableSpacing:s=!1}=n,l=I(n,lo),d=u({},n,{disableSpacing:s}),m=so(d);return e(co,u({className:x(m.root,r),ownerState:d,ref:i},l))}),w=uo;function po(o){return P("MuiDialogContent",o)}M("MuiDialogContent",["root","dividers"]);function mo(o){return P("MuiDialogTitle",o)}const ho=M("MuiDialogTitle",["root"]),go=ho,fo=["className","dividers"],Co=o=>{const{classes:t,dividers:i}=o;return O({root:["root",i&&"dividers"]},po,t)},xo=f("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:i}=o;return[t.root,i.dividers&&t.dividers]}})(({theme:o,ownerState:t})=>u({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${go.root} + &`]:{paddingTop:0}})),vo=p.exports.forwardRef(function(t,i){const n=A({props:t,name:"MuiDialogContent"}),{className:r,dividers:s=!1}=n,l=I(n,fo),d=u({},n,{dividers:s}),m=Co(d);return e(xo,u({className:x(m.root,r),ownerState:d,ref:i},l))}),$=vo;function bo(o){return P("MuiDialogContentText",o)}M("MuiDialogContentText",["root"]);const yo=["children","className"],Do=o=>{const{classes:t}=o,n=O({root:["root"]},bo,t);return u({},t,n)},ko=f(k,{shouldForwardProp:o=>Ie(o)||o==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(o,t)=>t.root})({}),So=p.exports.forwardRef(function(t,i){const n=A({props:t,name:"MuiDialogContentText"}),{className:r}=n,s=I(n,yo),l=Do(s);return e(ko,u({component:"p",variant:"body1",color:"text.secondary",ref:i,ownerState:s,className:x(l.root,r)},n,{classes:l}))}),_=So,To=["className","id"],wo=o=>{const{classes:t}=o;return O({root:["root"]},mo,t)},$o=f(k,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(o,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),Ro=p.exports.forwardRef(function(t,i){const n=A({props:t,name:"MuiDialogTitle"}),{className:r,id:s}=n,l=I(n,To),d=n,m=wo(d),{titleId:b=s}=p.exports.useContext(me);return e($o,u({component:"h2",className:x(m.root,r),ownerState:d,ref:i,variant:"h6",id:b},l))}),v=Ro;function Wo(o){return P("MuiListItemAvatar",o)}M("MuiListItemAvatar",["root","alignItemsFlexStart"]);const Mo=["className"],Po=o=>{const{alignItems:t,classes:i}=o;return O({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},Wo,i)},Ao=f("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:i}=o;return[t.root,i.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(({ownerState:o})=>u({minWidth:56,flexShrink:0},o.alignItems==="flex-start"&&{marginTop:8})),Io=p.exports.forwardRef(function(t,i){const n=A({props:t,name:"MuiListItemAvatar"}),{className:r}=n,s=I(n,Mo),l=p.exports.useContext(Oe),d=u({},n,{alignItems:l.alignItems}),m=Po(d);return e(Ao,u({className:x(m.root,r),ownerState:d,ref:i},s))}),ie=Io,Oo=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];function he(o){const{onClose:t,value:i,open:n,...r}=o,[s,l]=p.exports.useState(i),d=p.exports.useRef(null);p.exports.useEffect(()=>{n||l(i)},[i,n]);function m(){d.current!==null&&d.current.focus()}const b=()=>t(),y=()=>t(s);return a(C,{maxWidth:"xs",disableEscapeKeyDown:!0,TransitionProps:{onExiting:m},"aria-labelledby":"confirmation-dialog-title",open:n,...r,children:[e(v,{id:"confirmation-dialog-title",children:"Phone Ringtone"}),e($,{dividers:!0,children:e(qe,{ref:d,"aria-label":"Ringtone",name:"ringtone",value:s,onChange:(D,j)=>l(j),children:Oo.map(D=>e(le,{value:D,control:e(Ve,{}),label:D},D))})}),a(w,{children:[e(c,{variant:"outlined",color:"secondary",onClick:b,children:"Cancel"}),e(c,{onClick:y,color:"primary",children:"Ok"})]})]})}he.propTypes={onClose:W.exports.func.isRequired,open:W.exports.bool.isRequired,value:W.exports.string.isRequired};const Bo=B("div")(({theme:o})=>({width:"100%",maxWidth:360,backgroundColor:o.palette.background.paper,"& .paper":{width:"80%",maxHeight:435}}));function Lo(){const[o,t]=h.useState(!1),[i,n]=h.useState("Dione");function r(){t(!0)}function s(l){t(!1),l&&n(l)}return e(Bo,{children:a(H,{component:"div",role:"list",children:[e(S,{button:!0,divider:!0,disabled:!0,role:"listitem",children:e(T,{primary:"Interruptions"})}),e(S,{button:!0,divider:!0,"aria-controls":"ringtone-menu","aria-label":"Phone ringtone",onClick:r,role:"listitem",children:e(T,{primary:"Phone ringtone",secondary:i})}),e(S,{button:!0,divider:!0,disabled:!0,role:"listitem",children:e(T,{primary:"Default notification ringtone",secondary:"Tethys"})}),e(he,{open:o,value:i,onClose:s})]})})}const No=B(v)(({theme:o})=>({margin:0,padding:o.spacing(2),"& .closeButton":{position:"absolute",right:o.spacing(1),top:o.spacing(1),color:o.palette.grey[500]}})),Fo=o=>{const{children:t,onClose:i}=o;return a(No,{disableTypography:!0,children:[e(k,{variant:"h6",children:t}),i?e(ae,{"aria-label":"Close",className:"closeButton",onClick:i,children:e(se,{})}):null]})},_o=B($)(({theme:o})=>({"&.root":{padding:o.spacing(2)}})),Uo=B(w)(({theme:o})=>({"&.root":{margin:0,padding:o.spacing(1)}})),jo=()=>{const[o,t]=p.exports.useState(!1),i=()=>t(!0),n=()=>t(!1);return a("div",{children:[e(c,{variant:"outlined",color:"secondary",onClick:i,children:"Open dialog"}),a(C,{onClose:n,"aria-labelledby":"customized-dialog-title",open:o,children:[e(Fo,{id:"customized-dialog-title",onClose:n,children:"Modal title"}),a(_o,{dividers:!0,children:[e(k,{gutterBottom:!0,children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e(k,{gutterBottom:!0,children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),e(k,{gutterBottom:!0,children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})]}),e(Uo,{children:e(c,{onClick:n,color:"primary",children:"Save changes"})})]})]})},zo=h.forwardRef(function(t,i){return e(ce,{direction:"up",ref:i,...t})});function Go(){const[o,t]=h.useState(!1);function i(){t(!0)}function n(){t(!1)}return a("div",{children:[e(c,{variant:"outlined",color:"primary",onClick:i,children:"Slide in alert dialog"}),a(C,{open:o,keepMounted:!0,onClose:n,TransitionComponent:zo,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[e(v,{id:"alert-dialog-slide-title",children:"Use Google's location service?"}),e($,{children:e(_,{id:"alert-dialog-slide-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),a(w,{children:[e(c,{onClick:n,color:"primary",children:"Disagree"}),e(c,{onClick:n,color:"primary",children:"Agree"})]})]})]})}function qo(){const[o,t]=h.useState(!1);function i(){t(!0)}function n(){t(!1)}return a(F,{children:[e(c,{variant:"outlined",color:"primary",onClick:i,children:"Open form dialog"}),a(C,{open:o,onClose:n,"aria-labelledby":"form-dialog-title",children:[e(v,{id:"form-dialog-title",children:"Subscribe"}),a($,{children:[e(_,{children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),e(Be,{autoFocus:!0,margin:"dense",id:"name",label:"Email Address",type:"email",fullWidth:!0})]}),a(w,{children:[e(c,{variant:"outlined",color:"secondary",onClick:n,children:"Cancel"}),e(c,{onClick:n,color:"primary",children:"Subscribe"})]})]})]})}const Vo=h.forwardRef(function(t,i){return e(ce,{direction:"up",ref:i,...t})});function Eo(){const o=re(),[t,i]=h.useState(!1);function n(){i(!0)}function r(){i(!1)}return a(F,{children:[e(c,{variant:"outlined",color:"primary",onClick:n,children:"Open full-screen dialog"}),a(C,{fullScreen:!0,open:t,onClose:r,TransitionComponent:Vo,children:[e(Ee,{sx:{position:"relative"},children:a(He,{children:[e(ae,{edge:"start",color:"inherit",onClick:r,"aria-label":"Close",children:e(se,{})}),e(Le,{sx:{flex:1,marginLeft:o.spacing(2)},children:"Sound"}),e(c,{color:"inherit",onClick:r,children:"save"})]})}),a(H,{children:[e(S,{button:!0,children:e(T,{primary:"Phone ringtone",secondary:"Titania"})}),e(Ne,{}),e(S,{button:!0,children:e(T,{primary:"Default notification ringtone",secondary:"Tethys"})})]})]})]})}const Ho=B("div")(({theme:o})=>({"& form":{display:"flex",margin:"auto",flexDirection:"column",width:"fit-content"},"& .formControl":{marginTop:o.spacing(2),minWidth:120},"& .formControlLabel":{marginTop:o.spacing(1)}}));function Yo(){const[o,t]=h.useState(!1),[i,n]=h.useState(!0),[r,s]=h.useState("sm");function l(){t(!0)}function d(){t(!1)}function m(y){s(y.target.value)}function b(y){n(y.target.checked)}return a(Ho,{children:[e(c,{variant:"outlined",color:"primary",onClick:l,children:"Open max-width dialog"}),a(C,{open:o,fullWidth:i,maxWidth:r,onClose:d,"aria-labelledby":"max-width-dialog-title",children:[e(v,{id:"max-width-dialog-title",children:"Optional sizes"}),a($,{children:[e(_,{children:"You can set my maximum width and whether to adapt or not."}),a("form",{noValidate:!0,children:[a(Fe,{className:"formControl",children:[e(_e,{htmlFor:"max-width",children:"maxWidth"}),a(Ue,{value:r,onChange:m,inputProps:{name:"max-width",id:"max-width"},children:[e(N,{value:"xs",children:"xs"}),e(N,{value:"sm",children:"sm"}),e(N,{value:"md",children:"md"}),e(N,{value:"lg",children:"lg"}),e(N,{value:"xl",children:"xl"})]})]}),e(le,{className:"formControlLabel",label:"Full width",control:e(Ye,{checked:i,onChange:b,value:"fullWidth"})})]})]}),e(w,{children:e(c,{onClick:d,color:"primary",children:"Close"})})]})]})}function Ko(){const[o,t]=h.useState(!1),i=re(),n=je(i.breakpoints.down("sm"));function r(){t(!0)}function s(){t(!1)}return a(F,{children:[e(c,{variant:"outlined",color:"primary",onClick:r,children:"Open responsive dialog"}),a(C,{fullScreen:n,open:o,onClose:s,"aria-labelledby":"responsive-dialog-title",children:[e(v,{id:"responsive-dialog-title",children:"Use Google's location service?"}),e($,{children:e(_,{children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),a(w,{children:[e(c,{onClick:s,color:"primary",children:"Disagree"}),e(c,{onClick:s,color:"primary",autoFocus:!0,children:"Agree"})]})]})]})}function Qo(){const[o,t]=p.exports.useState(!1),i=()=>t(!0),n=()=>t(!1);return a(F,{children:[e(c,{variant:"outlined",color:"primary",onClick:i,children:"Open alert dialog"}),a(C,{open:o,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e(v,{id:"alert-dialog-title",children:"Use Google's location service?"}),e($,{children:e(_,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),a(w,{children:[e(c,{onClick:n,color:"primary",children:"Disagree"}),e(c,{onClick:n,color:"primary",autoFocus:!0,children:"Agree"})]})]})]})}var Y={},Xo=ue.exports;Object.defineProperty(Y,"__esModule",{value:!0});var ge=Y.default=void 0,Jo=Xo(de()),Zo=pe,et=(0,Jo.default)((0,Zo.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");ge=Y.default=et;var K={},ot=ue.exports;Object.defineProperty(K,"__esModule",{value:!0});var fe=K.default=void 0,tt=ot(de()),it=pe,nt=(0,tt.default)((0,it.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");fe=K.default=nt;const at=["username@gmail.com","user02@gmail.com"];function Ce(o){const{onClose:t,selectedValue:i,...n}=o;function r(){t(i)}function s(l){t(l)}return a(C,{onClose:r,"aria-labelledby":"simple-dialog-title",...n,children:[e(v,{id:"simple-dialog-title",children:"Set backup account"}),a(H,{children:[at.map(l=>a(S,{button:!0,onClick:()=>s(l),children:[e(ie,{children:e(oe,{sx:{backgroundColor:te[100],color:te[600]},children:e(fe,{})})}),e(T,{primary:l})]},l)),a(S,{button:!0,onClick:()=>s("addAccount"),children:[e(ie,{children:e(oe,{children:e(ge,{})})}),e(T,{primary:"add account"})]})]})]})}Ce.propTypes={open:W.exports.bool,onClose:W.exports.func,selectedValue:W.exports.string};function rt(){const[o,t]=p.exports.useState(!1),[i,n]=p.exports.useState("user02@gmail.com");return a(F,{children:[a(k,{variant:"subtitle1",children:["Selected: ",i]}),e("br",{}),e(c,{variant:"outlined",color:"primary",onClick:()=>t(!0),children:"Open simple dialog"}),e(Ce,{selectedValue:i,open:o,onClose:l=>{t(!1),n(l)}})]})}const lt=B("div")(({theme:o})=>({margin:"30px",[o.breakpoints.down("sm")]:{margin:"16px"},"& .breadcrumb":{marginBottom:"30px",[o.breakpoints.down("sm")]:{marginBottom:"16px"}}})),yt=()=>a(lt,{children:[e(ze,{className:"breadcrumb",children:e(Ge,{routeSegments:[{name:"Material",path:"/material"},{name:"Dialog"}]})}),a(Ke,{spacing:3,children:[e(g,{title:"simple Dialog",children:e(rt,{})}),e(g,{title:"alert dialog",children:e(Qo,{})}),e(g,{title:"transition",children:e(Go,{})}),e(g,{title:"form dialog",children:e(qo,{})}),e(g,{title:"customized dialog",children:e(jo,{})}),e(g,{title:"full-screen dialog",children:e(Eo,{})}),e(g,{title:"optimized size dialog",children:e(Yo,{})}),e(g,{title:"responsive dialog",children:e(Ko,{})}),e(g,{title:"confirmation dialog",children:e(Lo,{})})]})]});export{yt as default};
