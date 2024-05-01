import{c as R,i as j,e as _,l as q,p as P,a as l,h as s,b as E,g as H,d as I,r as u,f as K,j as w,k as m,w as O,o as N,m as U,n as V,q as A,s as D,t as C,u as L}from"./index.dbf76095.js";import{Q as G,a as $,_ as J}from"./plugin-vue_export-helper.b5e96e53.js";var X=R({name:"QPageContainer",setup(t,{slots:v}){const{proxy:{$q:r}}=H(),n=j(q,_);if(n===_)return console.error("QPageContainer needs to be child of QLayout"),_;P(I,!0);const d=l(()=>{const i={};return n.header.space===!0&&(i.paddingTop=`${n.header.size}px`),n.right.space===!0&&(i[`padding${r.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(i.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(i[`padding${r.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),i});return()=>s("div",{class:"q-page-container",style:d.value},E(v.default))}}),Y=R({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:v,emit:r}){const{proxy:{$q:n}}=H(),d=u(null),i=u(n.screen.height),y=u(t.container===!0?0:n.screen.width),b=u({position:0,direction:"down",inflectionPoint:0}),h=u(0),a=u(K.value===!0?0:w()),Q=l(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),T=l(()=>t.container===!1?{minHeight:n.screen.height+"px"}:null),F=l(()=>a.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${a.value}px`}:null),W=l(()=>a.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${a.value}px`,width:`calc(100% + ${a.value}px)`}:null);function B(e){if(t.container===!0||document.qScrollPrevented!==!0){const o={position:e.position.top,direction:e.direction,directionChanged:e.directionChanged,inflectionPoint:e.inflectionPoint.top,delta:e.delta.top};b.value=o,t.onScroll!==void 0&&r("scroll",o)}}function k(e){const{height:o,width:c}=e;let f=!1;i.value!==o&&(f=!0,i.value=o,t.onScrollHeight!==void 0&&r("scrollHeight",o),z()),y.value!==c&&(f=!0,y.value=c),f===!0&&t.onResize!==void 0&&r("resize",e)}function M({height:e}){h.value!==e&&(h.value=e,z())}function z(){if(t.container===!0){const e=i.value>h.value?w():0;a.value!==e&&(a.value=e)}}let g=null;const S={instances:{},view:l(()=>t.view),isContainer:l(()=>t.container),rootRef:d,height:i,containerHeight:h,scrollbarWidth:a,totalWidth:l(()=>y.value+a.value),rows:l(()=>{const e=t.view.toLowerCase().split(" ");return{top:e[0].split(""),middle:e[1].split(""),bottom:e[2].split("")}}),header:m({size:0,offset:0,space:!1}),right:m({size:300,offset:0,space:!1}),footer:m({size:0,offset:0,space:!1}),left:m({size:300,offset:0,space:!1}),scroll:b,animate(){g!==null?clearTimeout(g):document.body.classList.add("q-body--layout-animate"),g=setTimeout(()=>{g=null,document.body.classList.remove("q-body--layout-animate")},155)},update(e,o,c){S[e][o]=c}};if(P(q,S),w()>0){let c=function(){e=null,o.classList.remove("hide-scrollbar")},f=function(){if(e===null){if(o.scrollHeight>n.screen.height)return;o.classList.add("hide-scrollbar")}else clearTimeout(e);e=setTimeout(c,300)},p=function(x){e!==null&&x==="remove"&&(clearTimeout(e),c()),window[`${x}EventListener`]("resize",f)},e=null;const o=document.body;O(()=>t.container!==!0?"add":"remove",p),t.container!==!0&&p("add"),N(()=>{p("remove")})}return()=>{const e=U(v.default,[s(G,{onScroll:B}),s($,{onResize:k})]),o=s("div",{class:Q.value,style:T.value,ref:t.container===!0?void 0:d,tabindex:-1},e);return t.container===!0?s("div",{class:"q-layout-container overflow-hidden",ref:d},[s($,{onResize:M}),s("div",{class:"absolute-full",style:F.value},[s("div",{class:"scroll",style:W.value},[o])])]):o}}});const Z={};function ee(t,v){const r=V("router-view");return A(),D(Y,{view:"lHh Lpr lFf"},{default:C(()=>[L(X,{class:"container"},{default:C(()=>[L(r)]),_:1})]),_:1})}var oe=J(Z,[["render",ee],["__scopeId","data-v-0d4d0b4c"]]);export{oe as default};
