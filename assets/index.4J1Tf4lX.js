import{_ as I}from"./TextField.DBQzHqUj.js";import{_ as T}from"./Primary.DOJPL0co.js";import{_ as V}from"./nuxt-link.BYP2f92J.js";import{_ as k,B as N,r as s,o as L,c as O,a as e,D as U,d as a,b as n,w as t,t as g,y as A,p as D,e as M}from"./entry.aCF3l0Lw.js";import{_ as F}from"./logo-devlinks-large.CcxAej63.js";import{_ as $,a as w}from"./icon-password.C_ZEsDUD.js";const o=i=>(D("data-v-1f765f13"),i=i(),M(),i),j={id:"login-screen"},q=o(()=>e("img",{src:F,class:"logo",alt:"logo"},null,-1)),z={id:"login-content-holder"},G=o(()=>e("h1",null,"Create account",-1)),H=o(()=>e("p",null,"Let's get you started sharing your links!",-1)),J={for:"email",class:"g-bodyS"},K=o(()=>e("br",null,null,-1)),Q=o(()=>e("img",{src:$,alt:"icon"},null,-1)),R={for:"password",class:"g-bodyS"},W=o(()=>e("br",null,null,-1)),X=o(()=>e("img",{src:w,alt:"icon"},null,-1)),Y={for:"confirmPassword",class:"g-bodyS"},Z=o(()=>e("br",null,null,-1)),ee=o(()=>e("img",{src:w,alt:"icon"},null,-1)),oe=o(()=>e("p",null,"Password must contain at least 8 characters",-1)),se={id:"form-switch"},ae={__name:"index",setup(i){const x=N(),{registerUser:y}=x,m=s(""),c=s(""),f=s(""),d=s(!1),u=s(!1),l=s(!1),p=s(""),v=s(""),_=s("");function P(r){m.value=r}function b(r){c.value=r}function E(r){f.value=r}function C(){d.value=!1,u.value=!1,l.value=!1,m.value.length<4?(p.value="Please enter a email adress",d.value=!0):p.value="",c.value.length<8?(v.value="Pleas enter a valid password",u.value=!0):v.value="",f.value!=c.value?(_.value="Pleas enter a valid password",l.value=!0):f.value.length<8?(_.value="Both passwords need to match",l.value=!0):_.value="",!(d.value||u.value||l.value)&&(y(m.value,c.value),A("/login"))}return(r,te)=>{const h=I,S=T,B=V;return L(),O("div",j,[q,e("div",z,[G,H,e("form",{onSubmit:U(C,["prevent"]),id:"login-form"},[e("label",J,[a(" Email address "),K,n(h,{error:d.value,type:"mail","placeholder-text":"e.g. alex@email.com","field-id":"email",onOnValueChange:P},{error:t(()=>[a(g(p.value),1)]),default:t(()=>[Q]),_:1},8,["error"])]),e("label",R,[a(" Password "),W,n(h,{error:u.value,type:"password","placeholder-text":"Enter your password","field-id":"password",onOnValueChange:b},{error:t(()=>[a(g(v.value),1)]),default:t(()=>[X]),_:1},8,["error"])]),e("label",Y,[a(" Confirm Password "),Z,n(h,{error:l.value,type:"password","placeholder-text":"Confirm your password","field-id":"confirmPassword",onOnValueChange:E},{error:t(()=>[a(g(_.value),1)]),default:t(()=>[ee]),_:1},8,["error"])]),oe,n(S,{type:"submit"},{default:t(()=>[a(" Create new Account ")]),_:1})],32),e("p",se,[a(" Alredy have an account? "),n(B,{to:"/login",class:"login-link"},{default:t(()=>[a("Login")]),_:1})])])])}}},ue=k(ae,[["__scopeId","data-v-1f765f13"]]);export{ue as default};
