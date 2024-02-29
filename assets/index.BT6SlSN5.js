import{n as te,q as K,u as oe,_ as N,o as c,c as p,a as e,s as ie,v as J,r as h,b as w,w as f,d as $,x as n,y as se,p as M,e as P,t as I,F as ae,z as le,A as C,B as O,C as D,D as H,E as ce,G as F,H as re}from"./entry.CjvnteCs.js";import{_ as W,a as de}from"./Link.Cbl4deZ-.js";import{_ as Y}from"./TextField.q55iR2Tk.js";import{_ as Z}from"./Primary.BgJ_yDnd.js";import"./nuxt-link.DydzFAnN.js";const ue="$s";function A(...t){const m=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(m);const[o,l]=t;if(!o||typeof o!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+o);if(l!==void 0&&typeof l!="function")throw new Error("[nuxt] [useState] init must be a function: "+l);const i=ue+o,r=oe(),_=te(r.payload.state,i);if(_.value===void 0&&l){const u=l();if(K(u))return r.payload.state[i]=u,u;_.value=u}return _}const me=["src"],_e={class:"mobile-text"},pe={__name:"Tab",props:{imgSrc:String,active:Boolean},emits:"clicked",setup(t,{emit:m}){const o=t,l=m;return(i,r)=>(c(),p("button",{class:J(["tag",o.active?"active":""]),onClick:r[0]||(r[0]=_=>l("clicked"))},[e("img",{src:o.imgSrc,alt:"icon"},null,8,me),e("span",_e,[ie(i.$slots,"default",{},void 0,!0)])],2))}},ve=N(pe,[["__scopeId","data-v-c78c8295"]]),he=""+globalThis.__publicAssetsURL("images/logo-devlinks-small.svg"),ge=""+globalThis.__publicAssetsURL("images/icon-preview-header.svg"),Q=t=>(M("data-v-62135bdf"),t=t(),P(),t),fe={id:"navbar"},ke=Q(()=>e("div",{class:"logo-holder"},[e("img",{src:he,alt:"icon"}),e("h2",{class:"mobile-name"},"devlinks")],-1)),xe={class:"tabs-holder"},$e=Q(()=>e("img",{src:ge,alt:"icon"},null,-1)),be={__name:"NavBar",props:{isLinkEditor:Boolean},emits:["setLinkEditor","setProfileEditor"],setup(t,{emit:m}){const o=h(!0),l=m;function i(){l("setLinkEditor"),o.value=!0}function r(){l("setProfileEditor"),o.value=!1}function _(){se("/preview")}return(u,a)=>{const s=ve,d=W;return c(),p("nav",fe,[ke,e("div",xe,[w(s,{"img-src":"/JSFMLinkSharing/images/icon-links-header.svg",active:n(o),onClicked:i},{default:f(()=>[$("Links")]),_:1},8,["active"]),w(s,{"img-src":"/JSFMLinkSharing/images/icon-profile-details-header.svg",active:!n(o),onClicked:r},{default:f(()=>[$("Profile Details")]),_:1},8,["active"])]),w(d,{onOnClick:_,"icon-only":!0},{text:f(()=>[$(" Preview ")]),icon:f(()=>[$e]),_:1})])}}},Se=N(be,[["__scopeId","data-v-62135bdf"]]),we=""+globalThis.__publicAssetsURL("images/icon-link.svg"),q=""+globalThis.__publicAssetsURL("images/icon-chevron-down.svg"),X=t=>(M("data-v-3fc87fdd"),t=t(),P(),t),ye={id:"dropdown-holder"},Le={key:0,class:"field-content"},Ee=X(()=>e("img",{src:we,alt:"icon"},null,-1)),Ce=X(()=>e("p",null,"Dropdown Field",-1)),Ie={key:1,class:"field-content"},Te=["src"],Ue={key:0,class:"options-container"},Fe=["onClick"],Ne=["src"],Ae={key:0},De={__name:"Dropdown",props:{options:Array,name:String,icon:String},emits:["setActiveElement"],setup(t,{emit:m}){const o=t,l=m;let i=h(!1);h(null);let r=h({name:o.name,icon:o.icon});function _(){i.value=!i.value}function u(a){r.value={name:a.name,icon:a.icon,link:a.link},i.value=!i.value,l("setActiveElement",r.value)}return(a,s)=>(c(),p("div",ye,[e("div",{onClick:_,class:J(["dropdown-field",n(i)?"active":""])},[n(r).name==null?(c(),p("div",Le,[Ee,Ce,e("img",{src:q,class:J(n(i)?"arrowUp":""),alt:"icon"},null,2)])):(c(),p("div",Ie,[e("img",{src:n(r).icon,alt:"icon"},null,8,Te),e("p",null,I(n(r).name),1),e("img",{src:q,class:J(n(i)?"arrowUp":""),alt:"icon"},null,2)]))],2),n(i)?(c(),p("div",Ue,[(c(!0),p(ae,null,le(t.options,d=>(c(),p("div",{key:d.name,class:J(["dropdown-item",d.name==n(r).name?"activeEl":""]),onClick:g=>u(d)},[e("div",null,[e("img",{src:d.icon,alt:"icon"},null,8,Ne),e("p",null,I(d.name==n(r).name?d.name+" (Selected)":d.name),1)]),d.name!==t.options[t.options.length-1].name?(c(),p("hr",Ae)):C("",!0)],10,Fe))),128))])):C("",!0)]))}},Me=N(De,[["__scopeId","data-v-3fc87fdd"]]),Pe=""+globalThis.__publicAssetsURL("images/icon-drag-and-drop.svg"),ze=[{name:"GitHub",icon:"/JSFMLinkSharing/images/icon-github.svg",link:"https://github.com/"},{name:"Frontend Mentor",icon:"/JSFMLinkSharing/images/icon-frontend-mentor.svg",link:"https://www.frontendmentor.io/profile/"},{name:"Twitter",icon:"/JSFMLinkSharing/images/icon-twitter.svg",link:"https://twitter.com/"},{name:"LinkedIn",icon:"/JSFMLinkSharing/images/icon-linkedin.svg",link:"https://linkedin.com/in/"},{name:"YouTube",icon:"/JSFMLinkSharing/images/icon-youtube.svg",link:"https://www.youtube.com/channel/"},{name:"Facebook",icon:"/JSFMLinkSharing/images/icon-facebook.svg",link:"https://www.facebook.com/"},{name:"Twitch",icon:"/JSFMLinkSharing/images/icon-twitch.svg",link:"https://www.twitch.tv/"},{name:"Dev.to",icon:"/JSFMLinkSharing/images/icon-devto.svg",link:"https://dev.to/"},{name:"Codewars",icon:"/JSFMLinkSharing/images/icon-codewars.svg",link:"https://www.codewars.com/users/"},{name:"Codepen",icon:"/JSFMLinkSharing/images/icon-codepen.svg",link:"https://codepen.io/"},{name:"freeCodeCamp",icon:"/JSFMLinkSharing/images/icon-freecodecamp.svg",link:"https://www.freecodecamp.org/"},{name:"GitLab",icon:"/JSFMLinkSharing/images/icon-gitlab.svg",link:"https://gitlab.com/"},{name:"Hashnode",icon:"/JSFMLinkSharing/images/icon-hashnode.svg",link:"https://hashnode.com/"},{name:"Stack Overflow",icon:"/JSFMLinkSharing/images/icon-stack-overflow.svg",link:"https://stackoverflow.com/users/"}],Je=new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,"i"),j=t=>(M("data-v-df197ae9"),t=t(),P(),t),Re={id:"link-edit"},Ve={class:"header"},Be={class:"header-link-number"},Oe=j(()=>e("img",{src:Pe,class:"handle",alt:"icon"},null,-1)),Ge=j(()=>e("p",null,"Platform",-1)),He=j(()=>e("p",null,"Link",-1)),je=["src"],qe={__name:"LinkEditComponent",props:{link:Object},emits:["linkadded","removeEl"],setup(t,{emit:m}){const o=t,l=O(),{add:i,remove:r,getIndex:_}=l,u=m,a=h({id:o.link.id?o.link.id:null,name:o.link.name??null,icon:o.link.icon??"/JSFMLinkSharing/images/icon-links-header.svg",link:o.link.link??null,placeholder:o.link.placeholder??null}),s=h(!1),d=h("");o.link.id;const g=h(!1),b=D(()=>_(o.link.id)+1);function k(v){a.value={...a.value,name:v.name,icon:v.icon,link:a.value.link,placeholder:v.link},T(a.value.link)&&a.value.id!=null&&(i(a.value),u("linkadded"))}function T(v){return new RegExp("^([a-zA-Z]+:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(v)}let L=null;function x(v){L!=null&&clearTimeout(L),L=setTimeout(()=>{v.length<1&&(d.value="Can't be empty",s.value=!0,a.value={...a.value,link:v}),T(v)?(d.value="",s.value=!1,a.value={...a.value,link:v},g.value=!0,i(a.value),u("linkadded")):(d.value="Please check the URL",s.value=!0,a.value={...a.value,link:v})},1e3)}function S(){r(a.value.id),u("linkadded")}return(v,R)=>{const V=Me,B=Y;return c(),p("div",Re,[e("div",Ve,[e("div",Be,[Oe,e("h2",null,"Link # "+I(n(b)),1)]),e("button",{onClick:S},"Remove")]),Ge,w(V,{options:n(ze),onSetActiveElement:k,name:n(a).name,icon:n(a).icon},null,8,["options","name","icon"]),He,w(B,{type:"string",value:n(a).link,"placeholder-text":n(a).placeholder,onOnValueChange:x,error:n(s)},{error:f(()=>[$(I(n(d)),1)]),default:f(()=>[e("img",{src:n(a).icon},null,8,je)]),_:1},8,["value","placeholder-text","error"])])}}},Ke=N(qe,[["__scopeId","data-v-df197ae9"]]),We=""+globalThis.__publicAssetsURL("images/illustration-empty.svg"),Ye=""+globalThis.__publicAssetsURL("images/icon-upload-image.svg"),Ze=t=>(M("data-v-0a21f047"),t=t(),P(),t),Qe=["src"],Xe=Ze(()=>e("img",{src:Ye,alt:"icon"},null,-1)),en={key:0},nn={key:1},tn={__name:"ImageUpload",setup(t){const m=O(),{addImage:o}=m,l=D(()=>m.profile.image),i=A("imageConvert",()=>m.profile.image);async function r(s){const d=s.target.files[0],g=new FileReader;g.readAsDataURL(d),g.onload=b=>{i.value=b.target.result},setTimeout(()=>{o(i.value)},500)}function _(s){s.preventDefault(),s.dataTransfer.dropEffect="copy"}function u(s){s.preventDefault()}function a(s){s.preventDefault();const d=s.dataTransfer.files[0],g=new FileReader;g.readAsDataURL(d),g.onload=b=>{i.value=b.target.result},setTimeout(()=>{o(i.value)},500)}return(s,d)=>(c(),p("div",{class:"image-uploader",onDragover:H(_,["prevent"]),onDragleave:H(u,["prevent"]),onDrop:H(a,["prevent"])},[n(i)?(c(),p("img",{key:0,src:n(i),class:"user-img",alt:"profile image"},null,8,Qe)):C("",!0),e("div",{class:J(n(l)?"haseImage":"noImage")},[Xe,n(l)?(c(),p("p",en,"Change Image")):(c(),p("p",nn,"+ Upload Image"))],2),e("label",null,[e("input",{type:"file",accept:"image/jpeg, image/png image/jpg image/PNG",onChange:r},null,32)])],32))}},on=N(tn,[["__scopeId","data-v-0a21f047"]]),z=t=>(M("data-v-611e1132"),t=t(),P(),t),sn={id:"linkEditor"},an=z(()=>e("h1",null,"Customize your links",-1)),ln=z(()=>e("p",null," Add/edit/remove links below and then share all your profiles with the world ",-1)),cn={key:0,class:"emptyHolder"},rn=z(()=>e("img",{src:We,alt:"icon"},null,-1)),dn=z(()=>e("h2",null,"Let's get you started",-1)),un=z(()=>e("p",null,` Use the "Add new link" button to get started Once you have more then one link, you can reorder and edit them. We're here to help you share your profiles with everyone `,-1)),mn=[rn,dn,un],_n={key:1,class:"link-edit-items"},pn=z(()=>e("hr",null,null,-1)),vn={class:"btn-holder"},hn=z(()=>e("div",{class:"btn-spacer"},null,-1)),gn={__name:"editor",props:{},emits:["save","linkadded"],setup(t,{emit:m}){const o=m,l=O(),{addEmpty:i,add:r,reoderLinks:_,saveData:u,checkLinkSave:a}=l,s=D({get(){return l.links},set(x){_(x),o("linkadded")}});let d=D(()=>(console.log(l.linkSave),!l.linkSave));const g=A("dragging",()=>!1);function b(){o("linkadded")}function k(){u()}function T(){i()}function L(x){}return(x,S)=>{const v=W,R=Ke,V=ce("draggable"),B=Z;return c(),p("div",sn,[an,ln,w(v,{onClick:T},{text:f(()=>[$(" + Add new Link ")]),_:1}),n(s).length==0?(c(),p("div",cn,mn)):(c(),p("div",_n,[w(V,{modelValue:n(s),"onUpdate:modelValue":S[0]||(S[0]=U=>K(s)?s.value=U:null),disabled:!1,"item-key":"name",class:"list-group","ghost-class":"ghost",move:L,onStart:S[1]||(S[1]=U=>g.value=!0),onEnd:S[2]||(S[2]=U=>g.value=!1),handle:".handle"},{item:f(({element:U})=>[(c(),F(R,{key:U.id,link:U,onLinkadded:b},null,8,["link"]))]),_:1},8,["modelValue"])])),pn,e("div",vn,[hn,w(B,{class:"save-btn",disabled:n(d),onOnClick:k},{default:f(()=>[$("Save")]),_:1},8,["disabled"])])])}}},fn=N(gn,[["__scopeId","data-v-611e1132"]]),y=t=>(M("data-v-8aaebe95"),t=t(),P(),t),kn={id:"profile-editor"},xn=y(()=>e("div",null,[e("h1",null,"Profile Details"),e("p",null,"Add your details to create a personal touch to your profile.")],-1)),$n={class:"image-upload-holder"},bn=y(()=>e("p",null,"Profile Picture",-1)),Sn=y(()=>e("p",null,[$(" Images must be below 1024x1024px. "),e("br"),$(" Use PNG or JPG format. ")],-1)),wn={class:"form-holder"},yn={action:""},Ln={for:"firstName"},En=y(()=>e("div",{class:"form-spacer"},null,-1)),Cn=y(()=>e("img",{alt:"icon"},null,-1)),In={for:"lastName"},Tn=y(()=>e("div",{class:"form-spacer"},null,-1)),Un=y(()=>e("img",{alt:"icon"},null,-1)),Fn={for:"email"},Nn=y(()=>e("div",{class:"form-spacer"},null,-1)),An=y(()=>e("img",{alt:"icon"},null,-1)),Dn=y(()=>e("div",{class:"mobile-spacer"},null,-1)),Mn=y(()=>e("hr",null,null,-1)),Pn={class:"btn-holder"},zn=y(()=>e("div",{class:"btn-spacer"},null,-1)),Jn={__name:"editor",setup(t){const m=O(),{addFristName:o,addLastName:l,addEmail:i,saveData:r}=m,_=h(m.profile.firstName),u=h(!1),a=h(""),s=h(m.profile.lastName),d=h(!1),g=h(""),b=h(m.profile.email),k=h(!1),T=h("");let L=null,x=null,S=null;const v=D(()=>!m.profileSave);function R(E){L!=null&&clearTimeout(L),L=setTimeout(()=>{E.length<2?(u.value=!0,a.value="Can't be empty"):(o(E),u.value=!1,a.value="")},1e3)}function V(E){x!=null&&clearTimeout(x),x=setTimeout(()=>{E.length<2?(d.value=!0,g.value="Can't be empty"):(l(E),d.value=!1,g.value="")},1e3)}function B(E){S!=null&&clearTimeout(S),S=setTimeout(()=>{Je.test(E)?(T.value="",k.value=!1,i(E)):(T.value="Invalid email adress",k.value=!0)},1e3),b.value=E}function U(){r()}return(E,nt)=>{const ee=on,G=Y,ne=Z;return c(),p("div",kn,[xn,e("div",$n,[bn,w(ee,{"img-src":"https://images.unsplash.com/photo-1708162664567-49732d4b39c7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}),Sn]),e("div",wn,[e("form",yn,[e("label",Ln,[$(" First name* "),En,w(G,{type:"text","placeholder-text":n(_)??"e.g. John","field-id":"firstName",onOnValueChange:R,error:n(u)},{error:f(()=>[$(I(n(a)),1)]),default:f(()=>[Cn]),_:1},8,["placeholder-text","error"])]),e("label",In,[$(" Last name* "),Tn,w(G,{type:"text","placeholder-text":n(s)??"e.g. Appleseed","field-id":"lastName",onOnValueChange:V,error:n(d)},{error:f(()=>[$(I(n(g)),1)]),default:f(()=>[Un]),_:1},8,["placeholder-text","error"])]),e("label",Fn,[$(" Email "),Nn,w(G,{type:"email","placeholder-text":n(b)??"e.g. email@example.com","field-id":"email",onOnValueChange:B,error:n(k)},{error:f(()=>[$(I(n(T)),1)]),default:f(()=>[An]),_:1},8,["placeholder-text","error"])])])]),Dn,Mn,e("div",Pn,[zn,w(ne,{class:"save-btn",disabled:n(v),onOnClick:U},{default:f(()=>[$("Save")]),_:1},8,["disabled"])])])}}},Rn=N(Jn,[["__scopeId","data-v-8aaebe95"]]),Vn=""+globalThis.__publicAssetsURL("images/illustration-phone-mockup.svg"),Bn=t=>(M("data-v-45e34df5"),t=t(),P(),t),On={id:"editor-view"},Gn={class:"mainView"},Hn={class:"phonePreview"},jn={class:"image-holder"},qn=Bn(()=>e("img",{src:Vn,class:"phone-image",alt:"icon"},null,-1)),Kn={key:0,class:"profile-image-holder"},Wn=["src"],Yn={key:1,class:"name-prev"},Zn={key:2,class:"link-prev"},Qn={key:4},Xn={class:"editor"},et={__name:"index",setup(t){const m=O();re("access_token");const o=h(!0),l=A("link1",()=>null),i=A("link2",()=>null),r=A("link3",()=>null),_=A("link4",()=>null),u=A("link5",()=>null),a=D(()=>m.links),s=D(()=>m.profile);function d(){o.value=!0}function g(){o.value=!1}function b(){l.value=null,i.value=null,r.value=null,_.value=null,u.value=null;for(let k of a.value)if(k.name!=null){if(l.value==null){l.value=k;continue}if(i.value==null){i.value=k;continue}if(r.value==null){r.value=k;continue}if(_.value==null){_.value=k;continue}if(u.value==null){u.value=k;continue}}}return b(),(k,T)=>{const L=Se,x=de,S=fn,v=Rn;return c(),p("div",On,[w(L,{isLinkEditor:n(o),onSetLinkEditor:d,onSetProfileEditor:g},null,8,["isLinkEditor"]),e("main",Gn,[e("div",Hn,[e("div",jn,[qn,n(s).image?(c(),p("div",Kn,[e("img",{src:n(s).image,class:"profile-image",alt:"icon"},null,8,Wn)])):C("",!0),n(s).firstName!==null&&n(s).lastName!==null?(c(),p("h2",Yn,I(n(s).firstName)+" "+I(n(s).lastName),1)):C("",!0),n(s).email!==null?(c(),p("p",Zn,I(n(s).email),1)):C("",!0),n(l)!==null?(c(),F(x,{key:3,id:"link1",iconSrc:n(l).icon,name:n(l).name},null,8,["iconSrc","name"])):(c(),p("div",Qn)),n(i)!=null?(c(),F(x,{key:5,id:"link2",iconSrc:n(i).icon,name:n(i).name},null,8,["iconSrc","name"])):C("",!0),n(r)!=null?(c(),F(x,{key:6,id:"link3",iconSrc:n(r).icon,name:n(r).name},null,8,["iconSrc","name"])):C("",!0),n(_)!=null?(c(),F(x,{key:7,id:"link4",iconSrc:n(_).icon,name:n(_).name},null,8,["iconSrc","name"])):C("",!0),n(u)!=null?(c(),F(x,{key:8,id:"link5",iconSrc:n(u).icon,name:n(u).name},null,8,["iconSrc","name"])):C("",!0)])]),e("div",Xn,[n(o)?(c(),F(S,{key:0,onSave:b,onLinkadded:b})):(c(),F(v,{key:1}))])])])}}},lt=N(et,[["__scopeId","data-v-45e34df5"]]);export{lt as default};
