import{_ as k}from"./TextField.CFPqSXYI.js";import{_ as S}from"./Primary.CRtOwmr0.js";import{_ as I}from"./nuxt-link.BnZCs_pM.js";import{_ as P,B,H as C,r as a,o as T,c as V,a as e,D as N,d as t,b as c,w as r,t as f,y as D,p as L,e as U}from"./entry.BAxYKjjb.js";import{_ as M}from"./logo-devlinks-large.BDjdB4L1.js";import{_ as O,a as A}from"./icon-password.B6qqVXAn.js";const s=n=>(L("data-v-fe065c93"),n=n(),U(),n),F={id:"login-screen"},H=s(()=>e("img",{src:M,class:"logo"},null,-1)),$={id:"login-content-holder"},j=s(()=>e("h1",null,"Login",-1)),q=s(()=>e("p",null,"Add your details below to get back inot the app",-1)),z={for:"email",class:"g-bodyS"},G=s(()=>e("br",null,null,-1)),J=s(()=>e("img",{src:O,alt:"icon"},null,-1)),K={for:"password",class:"g-bodyS"},Q=s(()=>e("br",null,null,-1)),R=s(()=>e("img",{src:A,alt:"icon"},null,-1)),W={id:"form-switch"},X={__name:"index",setup(n){const v=B(),{loginUser:h}=v;let g=C("access_token");const _=a(""),d=a(""),l=a(!1),i=a(!1),u=a(""),p=a("");function w(o){_.value=o}function x(o){d.value=o}async function b(){if(l.value=!1,i.value=!1,_.value.length<4?(u.value="Please enter a email adress",l.value=!0):u.value="",d.value.length<8?(p.value="Enter valid Password",i.value=!0):p.value="",l.value||i.value)return;let o=await h(_.value,d.value);if(o){g.value=o,D("/editor");return}}return(o,Y)=>{const m=k,y=S,E=I;return T(),V("div",F,[H,e("div",$,[j,q,e("form",{onSubmit:N(b,["prevent"]),id:"login-form"},[e("label",z,[t(" Email address "),G,c(m,{error:l.value,type:"mail","placeholder-text":"e.g. alex@email.com","field-id":"email",onOnValueChange:w},{error:r(()=>[t(f(u.value),1)]),default:r(()=>[J]),_:1},8,["error"])]),e("label",K,[t(" Password "),Q,c(m,{error:i.value,type:"password","placeholder-text":"Enter your password","field-id":"password",onOnValueChange:x},{error:r(()=>[t(f(p.value),1)]),default:r(()=>[R]),_:1},8,["error"])]),c(y,{type:"submit"},{default:r(()=>[t(" Login ")]),_:1})],32),e("p",W,[t(" Don't have an account? "),c(E,{to:"/register",class:"login-link"},{default:r(()=>[t("Create account")]),_:1})])])])}}},re=P(X,[["__scopeId","data-v-fe065c93"]]);export{re as default};