import{P as _,A as x,_ as v}from"./ActionFactory-BCNVM2d8.js";import{d as b,c as w,a as y,o as l,w as u,b as e,e as f,r as k,u as m,F as B,t as g,f as F,P as S,g as A}from"./app-MEfRq2ZK.js";const D=["favorite"],P=["fusionSync"];let d;function p(a=[],i={},c=!1){const o=c&&d?d:new _(i).createState();c||(d=o);const s={...o,...new x([...D,...P],o)},t={};for(const n of a)n in s&&(t[n]=s[n]);return t}const L={class:"py-16 bg-stone-50"},N={class:"container mx-auto px-4"},R={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},V={class:"flex h-60"},j=["src"],E={class:"p-6"},q={class:"text-orange-600 text-sm mb-2"},C={class:"text-xl font-serif text-stone-800 mb-3"},O=b({__name:"Index",setup(a){p(["search","podcasts","favorite","fusion"],a.fusion);const{podcastsRaw:i,name:c}=p(["podcastsRaw","name"],a.fusion,!0),o=w(()=>i.value.map(s=>({...s,slug:s.image.split("/").pop().replace(".jpg","")})));return(s,t)=>{const n=v;return l(),y(n,null,{default:u(()=>[e("section",L,[e("div",N,[t[2]||(t[2]=e("h2",{class:"text-4xl font-serif text-stone-800 mb-12 text-center"}," Latest From Our Blog ",-1)),e("div",R,[(l(!0),f(B,null,k(m(o),(r,h)=>(l(),f("article",{class:"bg-white rounded-lg shadow-md overflow-hidden",key:h},[e("div",V,[e("img",{src:r.image,class:"object-cover w-full"},null,8,j)]),e("div",E,[e("p",q,g(new Date(r.updated_at).toDateString()),1),e("h3",C,g(r.title),1),t[1]||(t[1]=e("p",{class:"text-stone-600 mb-4"}," Discover the secrets behind creating the perfect pour-over coffee, from selecting the right beans to mastering the technique. ",-1)),F(m(S),{class:"inline-block text-orange-600 hover:text-orange-700",href:r.slug},{default:u(()=>t[0]||(t[0]=[A("Read More →")])),_:2},1032,["href"])])]))),128))])])])]),_:1})}}});export{O as default};
