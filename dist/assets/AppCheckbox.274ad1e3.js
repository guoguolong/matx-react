import{s as $,$ as s,j as o,b6 as f,c as e,b7 as C,b8 as B,b9 as j,C as R,t as D,N as i,ax as w,ay as h}from"./index.b42ef678.js";import{a as u,F as l}from"./FormGroup.6c95a808.js";import{C as a}from"./Checkbox.eddffd06.js";import{r as k,i as b,a as p}from"./jsx-runtime_commonjs-proxy.482f9faa.js";import"./SwitchBase.ee0187b9.js";const z=$("div")(({theme:c})=>({display:"flex","& .formControl":{margin:c.spacing(2)}}));function I(){const[c,n]=s.useState({gilad:!0,jason:!1,antoine:!1}),t=v=>L=>{n({...c,[v]:L.target.checked})},{gilad:r,jason:d,antoine:m}=c,G=[r,d,m].filter(v=>v).length!==2;return o(z,{children:[o(f,{component:"fieldset",className:"formControl",children:[e(C,{component:"legend",children:"Assign responsibility"}),o(u,{children:[e(l,{control:e(a,{checked:r,onChange:t("gilad"),value:"gilad"}),label:"Gilad Gray"}),e(l,{control:e(a,{checked:d,onChange:t("jason"),value:"jason"}),label:"Jason Killian"}),e(l,{control:e(a,{checked:m,onChange:t("antoine"),value:"antoine"}),label:"Antoine Llorca"})]}),e(B,{children:"Be careful"})]}),o(f,{required:!0,error:G,component:"fieldset",className:"formControl",children:[e(C,{component:"legend",children:"Pick two"}),o(u,{children:[e(l,{control:e(a,{checked:r,onChange:t("gilad"),value:"gilad"}),label:"Gilad Gray"}),e(l,{control:e(a,{checked:d,onChange:t("jason"),value:"jason"}),label:"Jason Killian"}),e(l,{control:e(a,{checked:m,onChange:t("antoine"),value:"antoine"}),label:"Antoine Llorca"})]}),e(B,{children:"You can display an error"})]})]})}var x={},q=b.exports;Object.defineProperty(x,"__esModule",{value:!0});var F=x.default=void 0,M=q(k()),O=p,H=(0,M.default)((0,O.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox");F=x.default=H;var g={},N=b.exports;Object.defineProperty(g,"__esModule",{value:!0});var P=g.default=void 0,V=N(k()),E=p,J=(0,V.default)((0,E.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank");P=g.default=J;var _={},K=b.exports;Object.defineProperty(_,"__esModule",{value:!0});var S=_.default=void 0,T=K(k()),U=p,Y=(0,T.default)((0,U.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");S=_.default=Y;var y={},Q=b.exports;Object.defineProperty(y,"__esModule",{value:!0});var A=y.default=void 0,W=Q(k()),X=p,Z=(0,W.default)((0,X.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");A=y.default=Z;const ee=$(a)(()=>({color:j[400],"&$checked":{color:j[600]}}));function ae(){const[c,n]=s.useState({checkedA:!0,checkedB:!0,checkedF:!0,checkedG:!0}),t=r=>d=>{n({...c,[r]:d.target.checked})};return o(u,{row:!0,children:[e(l,{control:e(a,{checked:c.checkedA,onChange:t("checkedA"),value:"checkedA"}),label:"Secondary"}),e(l,{control:e(a,{checked:c.checkedB,onChange:t("checkedB"),value:"checkedB",color:"primary"}),label:"Primary"}),e(l,{control:e(a,{value:"checkedC"}),label:"Uncontrolled"}),e(l,{disabled:!0,control:e(a,{value:"checkedD"}),label:"Disabled"}),e(l,{disabled:!0,control:e(a,{checked:!0,value:"checkedE"}),label:"Disabled"}),e(l,{control:e(a,{checked:c.checkedF,onChange:t("checkedF"),value:"checkedF",indeterminate:!0}),label:"Indeterminate"}),e(l,{control:e(ee,{color:"default",checked:c.checkedG,onChange:t("checkedG"),value:"checkedG"}),label:"Custom color"}),e(l,{control:e(a,{icon:e(A,{}),checkedIcon:e(S,{}),value:"checkedH"}),label:"Custom icon"}),e(l,{control:e(a,{icon:e(P,{fontSize:"small"}),checkedIcon:e(F,{fontSize:"small"}),value:"checkedI"}),label:"Custom size"})]})}function ce(){const[c,n]=s.useState("female");return o(f,{component:"fieldset",children:[e(C,{component:"legend",children:"labelPlacement"}),o(u,{"aria-label":"position",name:"position",value:c,onChange:r=>{n(r.target.value)},row:!0,children:[e(l,{value:"top",label:"Top",labelPlacement:"top",control:e(a,{color:"primary"})}),e(l,{value:"start",label:"Start",labelPlacement:"start",control:e(a,{color:"primary"})}),e(l,{value:"bottom",label:"Bottom",labelPlacement:"bottom",control:e(a,{color:"primary"})}),e(l,{value:"end",label:"End",labelPlacement:"end",control:e(a,{color:"primary"})})]})]})}function le(){const[c,n]=s.useState({checkedA:!0,checkedB:!0,checkedF:!0}),t=r=>d=>{n({...c,[r]:d.target.checked})};return o(R,{children:[e(a,{value:"checkedA",checked:c.checkedA,onChange:t("checkedA"),inputProps:{"aria-label":"primary checkbox"}}),e(a,{checked:c.checkedB,onChange:t("checkedB"),value:"checkedB",color:"primary",inputProps:{"aria-label":"secondary checkbox"}}),e(a,{value:"checkedC",inputProps:{"aria-label":"uncontrolled-checkbox"}}),e(a,{disabled:!0,value:"checkedD",inputProps:{"aria-label":"disabled checkbox"}}),e(a,{disabled:!0,checked:!0,value:"checkedE",inputProps:{"aria-label":"disabled checked checkbox"}}),e(a,{checked:c.checkedF,onChange:t("checkedF"),value:"checkedF",indeterminate:!0,inputProps:{"aria-label":"indeterminate checkbox"}}),e(a,{defaultChecked:!0,color:"default",value:"checkedG",inputProps:{"aria-label":"checkbox with default color"}})]})}const te=D("div")(({theme:c})=>({margin:"30px",[c.breakpoints.down("sm")]:{margin:"16px"},"& .breadcrumb":{marginBottom:"30px",[c.breakpoints.down("sm")]:{marginBottom:"16px"}}})),he=()=>o(te,{children:[e(i,{className:"breadcrumb",children:e(w,{routeSegments:[{name:"Material",path:"/material"},{name:"Chckbox"}]})}),e(h,{title:"simple checkbox",children:e(le,{})}),e(i,{py:"12px"}),e(h,{title:"Checkbox with Label",children:e(ae,{})}),e(i,{py:"12px"}),e(h,{title:"Checkbox with Form Group",children:e(I,{})}),e(i,{py:"12px"}),e(h,{title:"Checkbox with Different Label Placement",children:e(ce,{})})]});export{he as default};
