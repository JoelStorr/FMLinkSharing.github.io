import{_ as c,r as i,o as p,c as u,s as o,a,v as n}from"./entry.DKzi1-pO.js";const _=["type","placeholder","id","value"],f={class:"errorText"},h={__name:"TextField",props:{type:String,error:Boolean,placeholderText:String,fieldId:String,value:String},emits:["onValueChange"],setup(r,{emit:l}){i("");const s=l,e=r;function d(t){s("onValueChange",t.target.value)}return(t,m)=>(p(),u("div",{class:n(["textfieldHolder",e.error?"errorState":"normalState"])},[o(t.$slots,"default",{},void 0,!0),a("input",{type:e.type,onInput:d,class:n(e.error?"inputeError":""),placeholder:r.placeholderText,id:e.fieldId,value:e.value},null,42,_),a("p",f,[o(t.$slots,"error",{},void 0,!0)])],2))}},v=c(h,[["__scopeId","data-v-0889dbfd"]]);export{v as _};
