import{M as f,m as h,k as g}from"./index-S32gYurt.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{b as d,p as w,o,c as l,a as i,q as u,F as $,l as C,t as V,k as m,s as p,w as c}from"./index-CzzellJY.js";const T=["innerHTML"],_={key:0,class:"loading"},L={__name:"Article",props:{url:{type:String},textType:{type:String,default:"markdown"}},setup(k){const v=k;var t=new f;t.use(h),t.use(g);const a=d("true"),s=d("");function r(e){const n=v.url.substring(0,v.url.lastIndexOf("/"));return console.log(`<img src="${n}/`),e.replace(/<img src="/g,`<img src="${n}/`)}return w(async()=>{try{a.value=!0,s.value="";const e=await fetch(v.url);if(!e.ok)throw console.log("error!"),new Error("Network response was not ok");s.value=await e.text(),v.textType.toLowerCase()==="markdown"?s.value=t.render(s.value):s.value=r(s.value),a.value=!1}catch(e){console.error("Error fetching file:",e)}}),(e,n)=>(o(),l($,null,[i("div",{class:"article-container",innerHTML:s.value},null,8,T),a.value?(o(),l("div",_," Loading... ")):u("",!0)],64))}},N=y(L,[["__scopeId","data-v-c4ee24cd"]]),M={class:"theme",style:{"--i":"5"}},A={key:0,class:"theme-description"},H={key:0,class:"theme-description"},S={key:0,class:"theme-description"},D={key:0,class:"theme-description"},x={key:0,class:"theme-description"},b={__name:"Theme",emits:["changeTheme"],setup(k,{emit:v}){const t=d("Vue"),a=d(!1),s=d(!1);return C(a,()=>{a.value||(s.value=!1)}),(r,e)=>(o(),l("div",{class:"theme-container",onClick:e[5]||(e[5]=n=>a.value=!a.value)},[i("span",M,V(a.value?"收起":"切换主题"),1),i("span",{class:p(["theme",{move1:a.value}]),style:{"--i":"4"},onClick:e[0]||(e[0]=c(n=>(r.$emit("changeTheme","Vue"),s.value=!s.value,t.value="Vue"),["stop"]))},[e[6]||(e[6]=m(" Vue ")),s.value&&t.value==="Vue"?(o(),l("span",A," 这是一款以深绿色和浅绿色为主要颜色的文档主题，它和建构本网站时所使用的主要技术同名，因此以本主题作为文档的默认主题。 ")):u("",!0)],2),i("span",{class:p(["theme",{move2:a.value}]),style:{"--i":"3"},onClick:e[1]||(e[1]=c(n=>(r.$emit("changeTheme","VueDark"),s.value=!s.value,t.value="VueDark"),["stop"]))},[e[7]||(e[7]=m(" VueDark ")),s.value&&t.value==="VueDark"?(o(),l("span",H," Vue 主题的暗黑版 ")):u("",!0)],2),i("span",{class:p(["theme",{move3:a.value}]),style:{"--i":"2"},onClick:e[2]||(e[2]=c(n=>(r.$emit("changeTheme","Han"),s.value=!s.value,t.value="Han"),["stop"]))},[e[8]||(e[8]=m(" Han ")),s.value&&t.value==="Han"?(o(),l("span",S," Han 是一款非常少见的面向中文设计的主题，它以浅绿色为主要颜色，页边距为左右10mm。专为打印设计，因此本网站文档的PDF基本上都是 Han 主题。 ")):u("",!0)],2),i("span",{class:p(["theme",{move4:a.value}]),style:{"--i":"1"},onClick:e[3]||(e[3]=c(n=>(r.$emit("changeTheme","LCARS"),s.value=!s.value,t.value="LCARS"),["stop"]))},[e[9]||(e[9]=m(" LCARS ")),s.value&&t.value==="LCARS"?(o(),l("span",D," LCARS 是一款风格非常独特的主题，以黑色和黄色为主要颜色，有很强的视觉冲击力。 ")):u("",!0)],2),i("span",{class:p(["theme",{move5:a.value}]),style:{"--i":"0"},onClick:e[4]||(e[4]=c(n=>(r.$emit("changeTheme","Vue"),s.value=!s.value,t.value="Monika"),["stop"]))},[e[10]||(e[10]=m(" Monika ")),s.value&&t.value==="Monika"?(o(),l("span",x," Monika 是本人亲自设计的一款黑白风格的文档主题，与本网站的风格一致。尚未完成，敬请期待。 ")):u("",!0)],2)]))}};export{N as A,b as _};