(this["webpackJsonpcard-maker"]=this["webpackJsonpcard-maker"]||[]).push([[0],{133:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),i=(a(97),a(57)),o=a(12),m=a(36),s=a.n(m),u=a(47),d=a(10),p=a(165),E=a(168),g=a(134),h=a(80),v=a(170),f=a(172),b=a(173),w=a(185),y=a(187),j=a(34),x=a.n(j);x.a.defaults.baseURL="https://dhvwqsfku5.execute-api.ap-northeast-1.amazonaws.com/dev",x.a.defaults.headers.post["Content-Type"]="application/json;charset=utf-8",x.a.defaults.headers.post["Access-Control-Allow-Origin"]="*";var k=function(e,t){var a={oauth_token:e,oauth_verifier:t};return x.a.post("/access_token",a)},N=function(e){var t={access_token:e};return x.a.post("/icon",t)},S=Object(p.a)({paper:{padding:"16px 8px"},buttonContainer:{padding:32},loading:{position:"absolute"},button:{textTransform:"none"}}),O=function(){var e=r.a.useState(!1),t=Object(d.a)(e,2),a=t[0],n=t[1],c=r.a.useState(!1),l=Object(d.a)(c,2),i=l[0],o=l[1],m=S(),p=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.prev=1,e.next=4,x.a.get("/request_token");case 4:t=e.sent,window.location.href=t.data.authenticate_endpoint,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),o(!0);case 11:n(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width"}),r.a.createElement(E.a,{container:!0,justify:"center"},r.a.createElement(E.a,{item:!0,xs:12,md:8,lg:6},r.a.createElement(g.a,{className:m.paper},r.a.createElement(E.a,{container:!0,spacing:2},r.a.createElement(E.a,{item:!0,container:!0,justify:"center"},r.a.createElement(h.a,{variant:"subtitle1"},"\u81ea\u5206\u306e\u751f\u5f92\u8a3c\u3092\u4f5c\u6210\u3067\u304d\u308b\u30b5\u30a4\u30c8\u3067\u3059\uff01")),r.a.createElement(E.a,{container:!0,item:!0,justify:"center",alignItems:"center",className:m.buttonContainer},r.a.createElement(v.a,{variant:"contained",color:"primary",onClick:p,size:"large",disabled:a,className:m.button,startIcon:r.a.createElement(y.a,null)},"Twitter\u8a8d\u8a3c\u3057\u3066\u751f\u5f92\u8a3c\u3092\u4f5c\u308b"),a&&r.a.createElement(f.a,{className:m.loading})),r.a.createElement(E.a,{item:!0,container:!0,justify:"center"},r.a.createElement(h.a,{variant:"body2"},"Twitter\u8a8d\u8a3c\u306f\u30a2\u30a4\u30b3\u30f3\u53d6\u5f97\u3068\u5171\u6709\u30c4\u30a4\u30fc\u30c8\u306e\u305f\u3081\u3060\u3051\u306b\u4f7f\u7528\u3057\u307e\u3059")),r.a.createElement(E.a,{item:!0,container:!0,justify:"center"},r.a.createElement(h.a,{variant:"subtitle1"},"\u2193 \u30b5\u30f3\u30d7\u30eb \u2193"),r.a.createElement(E.a,{item:!0,container:!0,justify:"center"},r.a.createElement("img",{src:"".concat("/sakura-card-maker","/sample.jpg"),width:"70%",height:"auto",alt:"sample"}))),r.a.createElement(E.a,{item:!0,container:!0,justify:"flex-end"},r.a.createElement(h.a,{variant:"caption"},"Created by"," ",r.a.createElement(b.a,{href:"https://twitter.com/ryochan_metal",target:"_blank"},"@ryochan_metal"))))))),r.a.createElement(w.a,{open:i,onClose:function(){return o(!1)},message:"\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\u3057\u3070\u3089\u304f\u6642\u9593\u3092\u304a\u3044\u3066\u518d\u5ea6\u30a2\u30af\u30bb\u30b9\u3057\u3066\u4e0b\u3055\u3044",autoHideDuration:5e3}))},T=a(76),C=a.n(T),_=a(77),z=a.n(_),G=a(78),I=Object(G.a)((function(e){return e}),{name:"",year:"",month:"",date:"",grade:"\u4e2d\u7b49\u90e8",gradeYear:"",myBoom:"",target:"",accessToken:{},iconUrl:""}),B=a(182),H=a(189),R=a(184),U=a(177),Y=function(e){var t=e.item,a=e.rows,n=e.appendText,c=I.useGlobalState(t),l=Object(d.a)(c,2),i=l[0],o=l[1];return r.a.createElement(R.a,{variant:"outlined",size:"small",fullWidth:!0,multiline:a>1,rows:a,InputProps:{endAdornment:r.a.createElement(U.a,{position:"end"},n||"")},value:i,onChange:function(e){return o(e.target.value)}})},L=function(e){var t=e.children,a=e.title;return r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(E.a,{container:!0,direction:"row",alignItems:"center"},r.a.createElement(E.a,{item:!0,xs:12,sm:2},r.a.createElement(h.a,{variant:"subtitle2"},a)),t))},A=Object(p.a)({root:{padding:"8px"}}),D=function(){var e=I.useGlobalState("grade"),t=Object(d.a)(e,2),a=t[0],n=t[1],c=A();return r.a.createElement(E.a,{container:!0,className:c.root,spacing:2},r.a.createElement(L,{title:"\u540d\u524d"},r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement(Y,{item:"name",rows:1}))),r.a.createElement(L,{title:"\u751f\u5e74\u6708\u65e5"},r.a.createElement(E.a,{item:!0,xs:4,sm:3},r.a.createElement(Y,{item:"year",rows:1,appendText:"\u5e74"})),r.a.createElement(E.a,{item:!0,xs:4,sm:2},r.a.createElement(Y,{item:"month",rows:1,appendText:"\u6708"})),r.a.createElement(E.a,{item:!0,xs:4,sm:2},r.a.createElement(Y,{item:"date",rows:1,appendText:"\u65e5"}))),r.a.createElement(L,{title:"\u5b66\u5e74"},r.a.createElement(B.a,{variant:"outlined",margin:"dense",value:a,onChange:function(e){return n(e.target.value)}},r.a.createElement(H.a,{value:"\u4e2d\u7b49\u90e8"},"\u4e2d\u7b49\u90e8"),r.a.createElement(H.a,{value:"\u5c0f\u7b49\u90e8"},"\u5c0f\u7b49\u90e8")),r.a.createElement(E.a,{item:!0,xs:4,sm:2},r.a.createElement(Y,{item:"gradeYear",rows:1,appendText:"\u5e74"}))),r.a.createElement(L,{title:"\u30de\u30a4\u30d6\u30fc\u30e0"},r.a.createElement(E.a,{item:!0,xs:12,sm:10},r.a.createElement(Y,{item:"myBoom",rows:2}))),r.a.createElement(L,{title:"\u4eca\u5e74\u306e\u76ee\u6a19"},r.a.createElement(E.a,{item:!0,xs:12,sm:10},r.a.createElement(Y,{item:"target",rows:2}))))},W=a(186),q=a(178),J=a(179),K=Object(p.a)({button:{textTransform:"none"}}),M=function(e){var t=e.src,a=e.open,n=e.setOpen,c=K();return r.a.createElement(W.a,{open:a,disableBackdropClick:!0},r.a.createElement(q.a,null,r.a.createElement("img",{src:t,width:"100%",alt:"\u751f\u5f92\u8a3c\u753b\u50cf"})),r.a.createElement(J.a,null,r.a.createElement(E.a,{container:!0,justify:"center",alignItems:"center",spacing:2,direction:"row-reverse"},r.a.createElement(E.a,{item:!0},r.a.createElement(v.a,{onClick:function(){n(!1)},variant:"contained",color:"primary",size:"large",className:c.button,startIcon:r.a.createElement(y.a,null)},"Twitter\u3067\u5171\u6709")),r.a.createElement(E.a,{item:!0},r.a.createElement(v.a,{onClick:function(){n(!1)}},"\u30ad\u30e3\u30f3\u30bb\u30eb")))))},V=Object(p.a)({body:{width:"100%",height:690,display:"flex",paddingTop:202},left:{width:470,height:590,paddingLeft:60,paddingTop:100},right:{width:870,height:630,paddingTop:60},icon:{width:380,height:380,backgroundColor:"white",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:40,lineHeight:2},empire:{marginTop:64,marginLeft:16,fontSize:24,lineHeight:1.3,letterSpacing:2},row:{padding:"7px 0",display:"flex",alignItems:"center",letterSpacing:2,lineHeight:1.2},key:{width:210,fontSize:32},value:{width:600,fontSize:48,color:"#333333"},ymd:{fontSize:40,color:"#333333"},boomRow:{width:"100%",height:120,whiteSpace:"pre-wrap"},targetKey:{marginTop:16,fontSize:32,letterSpacing:2,lineHeight:1.2},targetValue:{margin:"20px 0 0 60px",width:760,height:190,fontSize:56,color:"#333333",fontFamily:"TanukiMagic !important",letterSpacing:2,lineHeight:1.2,whiteSpace:"pre-wrap"}}),X=function(){var e=I.useGlobalState("name"),t=Object(d.a)(e,1)[0],a=I.useGlobalState("year"),n=Object(d.a)(a,1)[0],c=I.useGlobalState("month"),l=Object(d.a)(c,1)[0],i=I.useGlobalState("date"),o=Object(d.a)(i,1)[0],m=I.useGlobalState("grade"),s=Object(d.a)(m,1)[0],u=I.useGlobalState("gradeYear"),p=Object(d.a)(u,1)[0],E=I.useGlobalState("myBoom"),g=Object(d.a)(E,1)[0],h=I.useGlobalState("target"),v=Object(d.a)(h,1)[0],f=I.useGlobalState("iconUrl"),b=(Object(d.a)(f,1)[0],V());return r.a.createElement("div",{className:b.body},r.a.createElement("div",{className:b.left},r.a.createElement("div",{className:b.icon},r.a.createElement("div",null,"Twitter\u306e"),r.a.createElement("div",null,"\u30a2\u30a4\u30b3\u30f3\u304c"),r.a.createElement("div",null,"\u3053\u3053\u306b\u5165\u308a\u307e\u3059")),r.a.createElement("div",{className:b.empire},r.a.createElement("div",null,"\u6709\u52b9\u671f\u9650"),r.a.createElement("div",null,"2021.8.31"))),r.a.createElement("div",{className:b.right},r.a.createElement("div",{className:b.row},r.a.createElement("div",{className:b.key},"\u6c0f\u3000\u3000\u540d"),r.a.createElement("div",{className:b.value},t)),r.a.createElement("div",{className:b.row},r.a.createElement("div",{className:b.key},"\u751f\u5e74\u6708\u65e5"),r.a.createElement("div",{className:b.value},n," ",r.a.createElement("span",{className:b.ymd},"\u5e74")," ",l," ",r.a.createElement("span",{className:b.ymd},"\u6708")," ",o," ",r.a.createElement("span",{className:b.ymd},"\u65e5"))),r.a.createElement("div",{className:b.row},r.a.createElement("div",{className:b.key},"\u5b66\u3000\u3000\u5e74"),r.a.createElement("div",{className:b.value},s," ",p," \u5e74")),r.a.createElement("div",{className:b.boomRow},r.a.createElement("div",{className:b.row},r.a.createElement("div",{className:b.key},"\u30de\u30a4\u30d6\u30fc\u30e0"),r.a.createElement("div",{className:b.value},g))),r.a.createElement("div",{className:b.targetKey},"\u4eca\u5e74\u306e\u76ee\u6a19"),r.a.createElement("div",{className:b.targetValue},v)))},F=Object(p.a)({root:{width:"100%",height:"100%",backgroundImage:'url("background.png")',backgroundSize:"cover",borderRadius:8,color:"#E62588"}}),P=function(){var e=F();return r.a.createElement("div",{className:e.root},r.a.createElement(X,null))},$=Object(p.a)({paper:{padding:"16px 8px"},buttonContainer:{padding:32},loading:{position:"absolute"},card:{position:"absolute",top:-2e3,width:1342,height:900},button:{textTransform:"none"}}),Q=function(){var e=r.a.useState(!1),t=Object(d.a)(e,2),a=t[0],n=t[1],c=r.a.useState(!1),l=Object(d.a)(c,2),i=l[0],m=l[1],p=r.a.useState(""),w=Object(d.a)(p,2),y=w[0],j=w[1],x=I.useGlobalState("accessToken"),S=Object(d.a)(x,2),O=(S[0],S[1]),T=I.useGlobalState("iconUrl"),_=Object(d.a)(T,2),G=(_[0],_[1]),B=$(),H=r.a.useRef(null),R=Object(o.g)();r.a.useEffect((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n,r,c,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=z.a.parse(R.search),a=t.oauth_token,n=t.oauth_verifier,e.next=6,k(a,n);case 6:return r=e.sent,O(r.data.access_token),e.next=10,N(r.data.access_token);case 10:c=e.sent,l=c.data.icon,G(l),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}})()()}),[R,O,G]);return r.a.createElement("div",null,r.a.createElement("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width"}),r.a.createElement("div",{ref:H,className:B.card},r.a.createElement(P,null)),r.a.createElement(E.a,{container:!0,justify:"center"},r.a.createElement(E.a,{item:!0,xs:12,md:8,lg:6},r.a.createElement(g.a,{className:B.paper},r.a.createElement(E.a,{container:!0,spacing:2},r.a.createElement(E.a,{item:!0,container:!0},r.a.createElement(h.a,{variant:"subtitle1"},"\u4ee5\u4e0b\u3092\u5165\u529b\u3057\u3066\u3001\u81ea\u5206\u306e\u751f\u5f92\u8a3c\u3092\u4f5c\u308d\u3046\uff01")),r.a.createElement(E.a,{item:!0,container:!0},r.a.createElement(D,null)),r.a.createElement(E.a,{container:!0,item:!0,justify:"center",alignItems:"center",className:B.buttonContainer},r.a.createElement(v.a,{variant:"contained",color:"primary",onClick:function(){H.current?(m(!0),C()(H.current,{scrollX:-window.scrollX,scrollY:-window.scrollY}).then((function(e){j(e.toDataURL()),m(!1),n(!0)}))):console.error("error")},size:"large",disabled:i,className:B.button},"Twitter\u9023\u643a\u3057\u3066\u751f\u5f92\u8a3c\u3092\u4f5c\u6210\u3059\u308b"),i&&r.a.createElement(f.a,{className:B.loading})),r.a.createElement(E.a,{item:!0,container:!0,justify:"center"},r.a.createElement(h.a,{variant:"caption"},"Twitter\u9023\u643a\u306f\u30a2\u30a4\u30b3\u30f3\u53d6\u5f97\u3068\u5171\u6709\u30c4\u30a4\u30fc\u30c8\u306e\u305f\u3081\u306b\u4f7f\u7528\u3057\u307e\u3059")),r.a.createElement(E.a,{item:!0,container:!0,justify:"flex-end"},r.a.createElement(h.a,{variant:"caption"},"Created by"," ",r.a.createElement(b.a,{href:"https://twitter.com/ryochan_metal",target:"_blank"},"@ryochan_metal")))),r.a.createElement(M,{src:y,open:a,setOpen:n})))))},Z=function(){return r.a.createElement(i.a,{basename:"/sakura-card-maker"},r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/",exact:!0,component:O}),r.a.createElement(o.b,{path:"/edit",component:Q}),r.a.createElement(o.b,{component:function(){return r.a.createElement(o.a,{to:"/"})}})))},ee=a(180),te=a(181),ae=function(){return r.a.createElement(ee.a,{position:"static"},r.a.createElement(te.a,null,r.a.createElement(h.a,{variant:"h6"},"\u3055\u304f\u3089\u5b66\u9662 \u751f\u5f92\u8a3c\u30e1\u30fc\u30ab\u30fc\uff08\u958b\u767a\u4e2d\uff09")))},ne=function(){return r.a.createElement("div",null,r.a.createElement(ae,null),r.a.createElement(Z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},92:function(e,t,a){e.exports=a(133)},97:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.2717627c.chunk.js.map