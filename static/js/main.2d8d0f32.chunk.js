(this["webpackJsonpcard-maker"]=this["webpackJsonpcard-maker"]||[]).push([[0],{71:function(e,t,a){e.exports=a(80)},76:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),c=a.n(i),l=(a(76),a(13)),o=a(121),m=a(120),s=a(81),u=a(61),d=a(124),E=a(125),g=a(126),p=a(54),h=a.n(p),b=a(111),f=a(115),v=function(){return r.a.createElement(b.a,{position:"static"},r.a.createElement(f.a,null,r.a.createElement(u.a,{variant:"h6"},"\u3055\u304f\u3089\u5b66\u9662 \u751f\u5f92\u8a3c\u30e1\u30fc\u30ab\u30fc\uff08\u958b\u767a\u4e2d\uff09")))},w=a(127),k=a(132),S=a(59),y=Object(S.a)((function(e){return e}),{name:"",year:"",month:"",date:"",grade:"\u4e2d\u7b49\u90e8",gradeYear:"",myBoom:"",target:""}),x=a(129),j=a(119),N=function(e){var t=e.item,a=e.rows,n=e.appendText,i=y.useGlobalState(t),c=Object(l.a)(i,2),o=c[0],m=c[1];return r.a.createElement(x.a,{variant:"outlined",size:"small",fullWidth:!0,multiline:a>1,rows:a,InputProps:{endAdornment:r.a.createElement(j.a,{position:"end"},n||"")},value:o,onChange:function(e){return m(e.target.value)}})},O=function(e){var t=e.children,a=e.title;return r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(m.a,{container:!0,direction:"row",alignItems:"center"},r.a.createElement(m.a,{item:!0,xs:12,sm:2},r.a.createElement(u.a,{variant:"subtitle2"},a)),t))},C=Object(o.a)({root:{padding:"8px"}}),T=function(){var e=y.useGlobalState("grade"),t=Object(l.a)(e,2),a=t[0],n=t[1],i=C();return r.a.createElement(m.a,{container:!0,className:i.root,spacing:2},r.a.createElement(O,{title:"\u540d\u524d"},r.a.createElement(m.a,{item:!0,xs:12,sm:6},r.a.createElement(N,{item:"name",rows:1}))),r.a.createElement(O,{title:"\u751f\u5e74\u6708\u65e5"},r.a.createElement(m.a,{item:!0,xs:4,sm:3},r.a.createElement(N,{item:"year",rows:1,appendText:"\u5e74"})),r.a.createElement(m.a,{item:!0,xs:4,sm:2},r.a.createElement(N,{item:"month",rows:1,appendText:"\u6708"})),r.a.createElement(m.a,{item:!0,xs:4,sm:2},r.a.createElement(N,{item:"date",rows:1,appendText:"\u65e5"}))),r.a.createElement(O,{title:"\u5b66\u5e74"},r.a.createElement(w.a,{variant:"outlined",margin:"dense",value:a,onChange:function(e){return n(e.target.value)}},r.a.createElement(k.a,{value:"\u4e2d\u7b49\u90e8"},"\u4e2d\u7b49\u90e8"),r.a.createElement(k.a,{value:"\u5c0f\u7b49\u90e8"},"\u5c0f\u7b49\u90e8")),r.a.createElement(m.a,{item:!0,xs:4,sm:2},r.a.createElement(N,{item:"gradeYear",rows:1,appendText:"\u5e74"}))),r.a.createElement(O,{title:"\u30de\u30a4\u30d6\u30fc\u30e0"},r.a.createElement(m.a,{item:!0,xs:12,sm:10},r.a.createElement(N,{item:"myBoom",rows:2}))),r.a.createElement(O,{title:"\u4eca\u5e74\u306e\u76ee\u6a19"},r.a.createElement(m.a,{item:!0,xs:12,sm:10},r.a.createElement(N,{item:"target",rows:2}))))},z=a(130),B=a(122),F=a(123),L=a(133),I=Object(o.a)({button:{textTransform:"none"}}),J=function(e){var t=e.src,a=e.open,n=e.setOpen,i=I();return r.a.createElement(z.a,{open:a,disableBackdropClick:!0},r.a.createElement(B.a,null,r.a.createElement("img",{src:t,width:"100%",alt:"\u751f\u5f92\u8a3c\u753b\u50cf"})),r.a.createElement(F.a,null,r.a.createElement(m.a,{container:!0,justify:"center",alignItems:"center",spacing:2,direction:"row-reverse"},r.a.createElement(m.a,{item:!0},r.a.createElement(d.a,{onClick:function(){n(!1)},variant:"contained",color:"primary",size:"large",className:i.button,startIcon:r.a.createElement(L.a,null)},"Twitter\u3067\u5171\u6709")),r.a.createElement(m.a,{item:!0},r.a.createElement(d.a,{onClick:function(){n(!1)}},"\u30ad\u30e3\u30f3\u30bb\u30eb")))))},A=Object(o.a)({header:{width:"100%",height:164,display:"flex"},logo:{marginLeft:70},logoJp:{fontSize:60,paddingTop:56,letterSpacing:-2},logoEn:{fontSize:32,marginTop:8,marginLeft:16,letterSpacing:4},titleJp:{fontSize:72,marginLeft:"auto",paddingTop:64,marginRight:60,letterSpacing:110},titleEn:{width:"100%",height:44,fontSize:44,lineHeight:1,paddingRight:44,letterSpacing:40,textAlign:"end",marginBottom:-8},border:{width:"100%",height:8,color:"#E62588",backgroundColor:"#E62588",margin:0}}),G=function(){var e=A();return r.a.createElement("div",null,r.a.createElement("div",{className:e.header},r.a.createElement("div",{className:e.logo},r.a.createElement("div",{className:e.logoJp},"\u3055\u304f\u3089\u5b66\u9662 \u7236\u5144"),r.a.createElement("div",{className:e.logoEn},"Sakura Gakuin Fukei")),r.a.createElement("div",{className:e.titleJp},"\u751f\u5f92\u8a3c")),r.a.createElement("div",{className:e.titleEn},"Student Card"),r.a.createElement("hr",{className:e.border}))},R=a(48),Y=Object(o.a)({background:{position:"absolute",width:"100%",height:"100%"},backStr:{position:"absolute",backgroundColor:"#FEF3F8",opacity:.15},backPair:{marginBottom:8},backStr1:{fontSize:39,whiteSpace:"nowrap",marginLeft:-32,marginBottom:4},backStr2:{fontSize:39,whiteSpace:"nowrap",marginLeft:-108},backLogo:{position:"absolute",width:1400,height:660,display:"flex",alignItems:"center",justifyContent:"center",opacity:.1}}),P=function(){var e=Y();return r.a.createElement("div",{className:e.background},r.a.createElement("div",{className:e.backLogo},r.a.createElement("div",null,r.a.createElement("img",{src:"".concat("/sakura-card-maker","/logo.png"),width:"580",height:"580",alt:"logo"}))),r.a.createElement("div",{className:e.backStr},Object(R.a)(Array(8)).map((function(t,a){return r.a.createElement("div",{className:e.backPair,key:a},r.a.createElement("div",{className:e.backStr1},Object(R.a)(Array(6)).map((function(){return"Sakura Gakuin "}))),r.a.createElement("div",{className:e.backStr2},Object(R.a)(Array(6)).map((function(){return"Sakura Gakuin "}))))}))))},W=Object(o.a)({body:{width:"100%",height:690},test:{fontSize:100},target:{fontFamily:"TanukiMagic !important"}}),_=function(){var e=W();return r.a.createElement("div",{className:e.body},r.a.createElement(P,null))},M=Object(o.a)({root:{width:"100%",height:"100%",backgroundColor:"#FEF3F8",borderRadius:8,color:"#E62588"}}),D=function(){var e=M();return r.a.createElement("div",{className:e.root},r.a.createElement(G,null),r.a.createElement(_,null))},H=Object(o.a)({paper:{padding:"16px 8px"},buttonContainer:{padding:32},loading:{position:"absolute"},card:{position:"absolute",top:-1e3,width:1400,height:900}}),U=function(){var e=r.a.useState(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],i=r.a.useState(!1),c=Object(l.a)(i,2),o=c[0],p=c[1],b=r.a.useState(""),f=Object(l.a)(b,2),w=f[0],k=f[1],S=H(),y=r.a.useRef(null);return r.a.createElement("div",null,r.a.createElement("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width"}),r.a.createElement(v,null),r.a.createElement("div",{ref:y,className:S.card},r.a.createElement(D,null)),r.a.createElement(m.a,{container:!0,justify:"center"},r.a.createElement(m.a,{item:!0,xs:12,md:8,lg:6},r.a.createElement(s.a,{className:S.paper},r.a.createElement(m.a,{container:!0,spacing:2},r.a.createElement(m.a,{item:!0,container:!0},r.a.createElement(u.a,{variant:"subtitle1"},"\u4ee5\u4e0b\u3092\u8a18\u5165\u3057\u3066\u3001\u81ea\u5206\u306e\u751f\u5f92\u8a3c\u3092\u4f5c\u308d\u3046\uff01")),r.a.createElement(m.a,{item:!0,container:!0},r.a.createElement(T,null)),r.a.createElement(m.a,{container:!0,item:!0,justify:"center",alignItems:"center",className:S.buttonContainer},r.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){y.current?(p(!0),h()(y.current,{scrollX:0,scrollY:-window.scrollY}).then((function(e){k(e.toDataURL()),p(!1),n(!0)}))):console.error("error")},size:"large",disabled:o},"\u751f\u5f92\u8a3c\u3092\u4f5c\u6210\u3059\u308b"),o&&r.a.createElement(E.a,{className:S.loading})),r.a.createElement(m.a,{item:!0,container:!0,justify:"flex-end"},r.a.createElement(u.a,{variant:"caption"},"Created by"," ",r.a.createElement(g.a,{href:"https://twitter.com/ryochan_metal",target:"_blank"},"@ryochan_metal")))),r.a.createElement(J,{src:w,open:a,setOpen:n})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[71,1,2]]]);
//# sourceMappingURL=main.2d8d0f32.chunk.js.map