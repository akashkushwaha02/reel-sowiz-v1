(this.webpackJsonpreels=this.webpackJsonpreels||[]).push([[0],{164:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){},179:function(e,t,n){},180:function(e,t,n){},181:function(e,t,n){},183:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(44),s=n.n(r),i=(n(164),n(165),n(0)),o=n(6),l=n(12),u=n(282),d=n(283),j=n(284),b=n(277),O=n(287),p=n(268),f=n(269),h=(n(166),n.p+"static/media/Instagram.895005c3.JPG"),x=n(267),m=n(115),g=n.n(m),v=n(30),y=n(56),k=n(79);n(167),n(185),n(186);k.a.initializeApp({apiKey:"AIzaSyACrhdh1bogKLRTb47MEjcWP41kOQ5HP-U",authDomain:"reel-sowiz-v1.firebaseapp.com",projectId:"reel-sowiz-v1",storageBucket:"reel-sowiz-v1.appspot.com",messagingSenderId:"895001914758",appId:"1:895001914758:web:cde290f0c87525e3905007",measurementId:"G-048QV681RP"});var C=k.a.auth(),w=k.a.firestore(),I={users:w.collection("users"),posts:w.collection("posts"),comments:w.collection("comments"),getTimeStamp:k.a.firestore.FieldValue.serverTimestamp},S=k.a.storage(),N=n(5),D=c.a.createContext();function T(e){var t=e.children,n=Object(a.useState)(),c=Object(l.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(!0),o=Object(l.a)(i,2),u=o[0],d=o[1];Object(a.useEffect)((function(){var e=C.onAuthStateChanged((function(e){s(e),d(!1)}));return function(){e()}}),[]);var j={user:r,signup:function(e,t){return C.createUserWithEmailAndPassword(e,t)},login:function(e,t){return C.signInWithEmailAndPassword(e,t)},logout:function(){return C.signOut()}};return Object(N.jsx)(D.Provider,{value:j,children:!u&&t})}function P(){var e,t=Object(p.a)({text1:{color:"grey",textAlign:"center"},card2:{height:"5vh",marginTop:"2%"}})(),n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],s=c[1],m=Object(a.useState)(""),k=Object(l.a)(m,2),C=k[0],w=k[1],T=Object(a.useState)(""),P=Object(l.a)(T,2),z=P[0],E=P[1],F=Object(a.useState)(null),W=Object(l.a)(F,2),U=W[0],A=W[1],B=Object(a.useState)(""),L=Object(l.a)(B,2),R=L[0],G=L[1],M=Object(a.useState)(!1),V=Object(l.a)(M,2),J=V[0],_=V[1],H=Object(v.g)(),K=Object(a.useContext)(D).signup;return Object(N.jsx)("div",{className:"signupWrapper",children:Object(N.jsxs)("div",{className:"signupCard",children:[Object(N.jsxs)(u.a,{variant:"outlined",children:[Object(N.jsx)("div",{className:"insta-logo",children:Object(N.jsx)("img",{src:h,alt:""})}),Object(N.jsxs)(d.a,{children:[Object(N.jsx)(j.a,{className:t.text1,variant:"subtitle1",children:"Sign up to see photos and videos from your friends"}),""!=R&&Object(N.jsx)(f.a,{severity:"error",children:R}),Object(N.jsx)(x.a,{id:"outlined-basic",label:"Email",variant:"outlined",fullWidth:!0,margin:"dense",size:"small",value:r,onChange:function(e){return s(e.target.value)}}),Object(N.jsx)(x.a,{id:"outlined-basic",label:"Password",variant:"outlined",fullWidth:!0,margin:"dense",size:"small",value:C,onChange:function(e){return w(e.target.value)}}),Object(N.jsx)(x.a,{id:"outlined-basic",label:"Full Name",variant:"outlined",fullWidth:!0,margin:"dense",size:"small",value:z,onChange:function(e){return E(e.target.value)}}),Object(N.jsxs)(b.a,{color:"secondary",fullWidth:!0,variant:"outlined",margin:"dense",startIcon:Object(N.jsx)(g.a,{}),component:"label",children:["Upload Profile Image",Object(N.jsx)("input",{type:"file",accept:"image/*",hidden:!0,onChange:function(e){return A(e.target.files[0])}})]})]}),Object(N.jsx)(O.a,{children:Object(N.jsx)(b.a,{color:"primary",fullWidth:!0,variant:"contained",disabled:J,onClick:function(){return(e=e||Object(o.a)(Object(i.a)().mark((function e(){var t,n,a,c,s,o;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=U){e.next=4;break}return G("Please upload profile image first"),setTimeout((function(){G("")}),2e3),e.abrupt("return");case 4:return e.prev=4,t=function(e){var t=e.bytesTransferred/e.totalBytes*100;console.log("Upload is ".concat(t," done."))},n=function(e){G(e),setTimeout((function(){G("")}),2e3),_(!1)},a=function(){o.snapshot.ref.getDownloadURL().then((function(e){console.log(e),I.users.doc(s).set({email:r,userId:s,fullname:z,profileUrl:e,createdAt:I.getTimeStamp()})})),_(!1),H.push("/")},G(""),_(!0),e.next=12,K(r,C);case 12:c=e.sent,s=c.user.uid,console.log(s,"uid"),(o=S.ref("/users/".concat(s,"/ProfileImage")).put(U)).on("state_changed",t,n,a),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(4),G(e.t0),setTimeout((function(){G("")}),2e3);case 23:case"end":return e.stop()}}),e,null,[[4,19]])})))).apply(this,arguments)},children:"Sign up"})}),Object(N.jsx)(d.a,{children:Object(N.jsx)(j.a,{className:t.text1,variant:"subtitle1",children:"By signing up, you agree to our Terms, Conditions and Cookies policy."})})]}),Object(N.jsx)(u.a,{variant:"outlined",className:t.card2,children:Object(N.jsx)(d.a,{children:Object(N.jsxs)(j.a,{className:t.text1,variant:"subtitle1",children:["Having an account ? ",Object(N.jsx)(y.b,{to:"/login",style:{textDecoration:"none"},children:"Login"})]})})})]})})}n(179),n.p;function z(){var e,t=Object(a.useContext)(D);console.log(t);var n=Object(p.a)({text1:{color:"grey",textAlign:"center"},text2:{textAlign:"center"},card2:{height:"5vh",marginTop:"2%"}})(),c=Object(a.useState)(""),r=Object(l.a)(c,2),s=r[0],m=r[1],g=Object(a.useState)(""),k=Object(l.a)(g,2),C=k[0],w=k[1],I=Object(a.useState)(""),S=Object(l.a)(I,2),T=S[0],P=S[1],z=Object(a.useState)(!1),E=Object(l.a)(z,2),F=E[0],W=E[1],U=Object(v.g)(),A=Object(a.useContext)(D).login;return Object(N.jsx)("div",{className:"loginWrapper",children:Object(N.jsxs)("div",{className:"loginCard",children:[Object(N.jsxs)(u.a,{variant:"outlined",children:[Object(N.jsx)("div",{className:"insta-logo",children:Object(N.jsx)("img",{src:h,alt:""})}),Object(N.jsxs)(d.a,{children:[""!=T&&Object(N.jsx)(f.a,{severity:"error",children:T}),Object(N.jsx)(x.a,{id:"outlined-basic",label:"Email",variant:"outlined",fullWidth:!0,margin:"dense",size:"small",value:s,onChange:function(e){return m(e.target.value)}}),Object(N.jsx)(x.a,{id:"outlined-basic",label:"Password",variant:"outlined",fullWidth:!0,margin:"dense",size:"small",value:C,onChange:function(e){return w(e.target.value)}}),Object(N.jsx)(j.a,{className:n.text2,color:"primary",variant:"subtitle1",children:"Forget Password ?"})]}),Object(N.jsx)(O.a,{children:Object(N.jsx)(b.a,{color:"primary",fullWidth:!0,variant:"contained",onClick:function(){return(e=e||Object(o.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,P(""),W(!0),e.next=5,A(s,C);case 5:e.sent,W(!1),U.push("/"),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),P(e.t0),setTimeout((function(){P("")}),2e3),W(!1);case 15:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)},disabled:F,children:"Log in"})})]}),Object(N.jsx)(u.a,{variant:"outlined",className:n.card2,children:Object(N.jsx)(d.a,{children:Object(N.jsxs)(j.a,{className:n.text1,variant:"subtitle1",children:["Don't have an account ? ",Object(N.jsx)(y.b,{to:"/signup",style:{textDecoration:"none"},children:"Signup"})]})})})]})})}var E=n(21),F=n(136),W=n.n(F),U=n(288),A=n(273);var B=function(e){var t;console.log(e.user);var n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],s=c[1],u=Object(a.useState)(!1),d=Object(l.a)(u,2),j=d[0],O=d[1],p=Object(a.useState)(""),h=Object(l.a)(p,2),m=h[0],g=h[1];return Object(N.jsx)("div",{style:{marginTop:"5rem",marginBottom:"1rem"},children:""!=r?Object(N.jsx)(f.a,{severity:"error",children:r}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(x.a,{id:"outlined-basic",label:"Category",variant:"outlined",fullWidth:!0,margin:"dense",size:"small",value:m,onChange:function(e){return g(e.target.value)}}),Object(N.jsx)("input",{type:"file",accept:"video/*",onChange:function(n){return function(n){return(t=t||Object(o.a)(Object(i.a)().mark((function t(n){var a,c,r,l,u;return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u=function(){c.snapshot.ref.getDownloadURL().then((function(t){var n;console.log(t);var c={likes:[],comments:[],pId:a,pUrl:t,uName:e.user.fullname,uProfile:e.user.profileUrl,userId:e.user.userId,category:m,createdAt:I.getTimeStamp()};I.posts.add(c).then((function(t){return(n=n||Object(o.a)(Object(i.a)().mark((function t(n){return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.users.doc(e.user.userId).update({postIds:null!=e.user.postIds?[].concat(Object(E.a)(e.user.postIds),[n.id]):[n.id]});case 2:t.sent;case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)})).then((function(){O(!1),g("")})).catch((function(e){s(e),setTimeout((function(){s("")}),2e3),O(!1)}))}))},l=function(e){s(e),setTimeout((function(){s("")}),2e3),O(!1)},r=function(e){var t=e.bytesTransferred/e.totalBytes*100;console.log("Upload is ".concat(t," done."))},null!=m&&""!==m){t.next=7;break}return s("Pleases tell category of video"),setTimeout((function(){s("")}),2e3),t.abrupt("return");case 7:if(console.log("fuel",n,m),null!=n){t.next=12;break}return s("Please select a file first"),setTimeout((function(){s("")}),2e3),t.abrupt("return");case 12:if(!(n.size/1048576>100)){t.next=16;break}return s("This video is very big"),setTimeout((function(){s("")}),2e3),t.abrupt("return");case 16:a=Object(A.a)(),O(!0),(c=S.ref("/posts/".concat(a,"/").concat(n.name)).put(n)).on("state_changed",r,l,u);case 20:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(n.target.files[0])},id:"upload-input",style:{display:"none"}}),Object(N.jsx)("label",{htmlFor:"upload-input",children:Object(N.jsxs)(b.a,{variant:"outlined",color:"secondary",component:"span",disabled:j,children:[Object(N.jsx)(W.a,{}),"\xa0Upload Video"]})}),j&&Object(N.jsx)(U.a,{color:"secondary",style:{marginTop:"3%"}})]})})},L=n(55),R=n(289),G=n(280),M=n(279);n(180);var V=function(e){return Object(N.jsx)("video",{src:e.src,onEnded:function(e){var t=s.a.findDOMNode(e.target).parentNode.nextSibling;t&&(t.scrollIntoView(),e.target.muted=!0)},className:"videos-styling",id:e.id,onClick:function(e){e.preventDefault(),e.target.muted=!e.target.muted},muted:"muted"})},J=(n(181),n(278)),_=n(77),H=n.n(_);var K=function(e){var t=e.userData,n=e.postData,c=Object(a.useState)(null),r=Object(l.a)(c,2),s=r[0],i=r[1];Object(a.useEffect)((function(){var e=!!n.likes.includes(t.userId);i(e)}),[n]);var o=function(){if(1==s){var e=n.likes.filter((function(e){return e!=t.userId}));I.posts.doc(n.postId).update({likes:e})}else{var a=[].concat(Object(E.a)(n.likes),[t.userId]);I.posts.doc(n.postId).update({likes:a})}};return Object(N.jsx)("div",{children:null!=s?Object(N.jsx)(N.Fragment,{children:1==s?Object(N.jsx)(H.a,{className:"icon-styling like",onClick:o}):Object(N.jsx)(H.a,{className:"icon-styling unlike",onClick:o})}):Object(N.jsx)(N.Fragment,{})})},Q=n(137),q=n.n(Q),X=n(281);var Y=function(e){var t=e.userData,n=e.postData,c=Object(a.useState)(null),r=Object(l.a)(c,2),s=r[0],i=r[1];Object(a.useEffect)((function(){var e=!!n.likes.includes(t.userId);i(e)}),[n]);var o=function(){if(1==s){var e=n.likes.filter((function(e){return e!=t.userId}));I.posts.doc(n.postId).update({likes:e})}else{var a=[].concat(Object(E.a)(n.likes),[t.userId]);I.posts.doc(n.postId).update({likes:a})}};return Object(N.jsx)("div",{children:null!=s?Object(N.jsx)(N.Fragment,{children:1==s?Object(N.jsx)(H.a,{style:{padding:"1rem",paddingTop:"0.5rem"},className:"like",onClick:o}):Object(N.jsx)(H.a,{style:{padding:"1rem",paddingTop:"0.5rem"},className:"unlike2",onClick:o})}):Object(N.jsx)(N.Fragment,{})})};var Z=function(e){var t=e.userData,n=e.postData,c=Object(a.useState)(""),r=Object(l.a)(c,2),s=r[0],i=r[1];return Object(N.jsxs)("div",{style:{width:"100%"},children:[Object(N.jsx)(x.a,{id:"outlined-basic",label:"Comment",variant:"outlined",size:"small",sx:{width:"70%"},value:s,onChange:function(e){return i(e.target.value)}}),Object(N.jsx)(b.a,{variant:"contained",onClick:function(){var e={text:s,uProfileImage:t.profileUrl,uName:t.fullname};I.comments.add(e).then((function(e){I.posts.doc(n.postId).update({comments:[].concat(Object(E.a)(n.comments),[e.id])})})),i("")},children:"Post"})]})};var $=function(e){var t=e.postData,n=Object(a.useState)(null),c=Object(l.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)(Object(o.a)(Object(i.a)().mark((function e(){var n,a,c;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],a=0;case 2:if(!(a<t.comments.length)){e.next=10;break}return e.next=5,I.comments.doc(t.comments[a]).get();case 5:c=e.sent,n.push(c.data());case 7:a++,e.next=2;break;case 10:s(n);case 11:case"end":return e.stop()}}),e)}))),[t]),Object(N.jsx)("div",{children:null==r?Object(N.jsx)(R.a,{}):Object(N.jsx)(N.Fragment,{children:r.map((function(e,t){return Object(N.jsxs)("div",{style:{display:"flex"},children:[Object(N.jsx)(J.a,{src:e.uProfileImage}),Object(N.jsxs)("p",{children:["\xa0\xa0",Object(N.jsx)("span",{style:{fontWeight:"bold"},children:e.uName}),"\xa0\xa0 ",e.text]})]})}))})})};var ee=function(e){var t=e.userData,n=Object(a.useState)(null),r=Object(l.a)(n,2),s=r[0],i=r[1],o=Object(a.useState)(null),d=Object(l.a)(o,2),b=d[0],O=d[1],p=Object(a.useState)(null),f=Object(l.a)(p,2),h=f[0],x=f[1],m=function(){O(null)};Object(a.useEffect)((function(){var e=[];return I.posts.orderBy("createdAt","desc").onSnapshot((function(t){e=[],t.forEach((function(t){var n=Object(L.a)(Object(L.a)({},t.data()),{},{postId:t.id});e.push(n)})),i(e),x(e)}))}),[]);var g=new IntersectionObserver((function(e){e.forEach((function(e){var t=e.target.childNodes[0];console.log(t),t.play().then((function(){t.paused||e.isIntersecting||t.pause()}))}))}),{threshold:.7});Object(a.useEffect)((function(){return document.querySelectorAll(".videos").forEach((function(e){g.observe(e)})),function(){g.disconnect()}}),[s]);var v=function(e){i(s.filter((function(t){return t.category===e.target.innerText})))},y=Object(E.a)(new Set(null===s||void 0===s?void 0:s.map((function(e){return e.category}))));return Object(N.jsx)("div",{children:null==s||null==t?Object(N.jsx)(R.a,{}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(M.a,{direction:"row",justifyContent:"center",spacing:1,style:{marginBottom:"20px"},children:"Select Filter"}),Object(N.jsxs)(M.a,{direction:"row",justifyContent:"center",spacing:1,style:{marginBottom:"20px"},children:[null===y||void 0===y?void 0:y.map((function(e){return Object(N.jsx)(G.a,{label:e,variant:"outlined",onClick:v})})),Object(N.jsx)(G.a,{label:"Reset",variant:"outlined",onClick:function(){i(h)}})]}),Object(N.jsx)("div",{className:"video-container",children:s.map((function(e,n){return Object(N.jsx)(c.a.Fragment,{children:Object(N.jsxs)("div",{className:"videos",style:{background:"#D3D3D3",marginBottom:"25px"},children:[Object(N.jsx)(V,{src:e.pUrl,id:e.pId}),Object(N.jsxs)("div",{style:{display:"flex"},children:[Object(N.jsxs)("div",{className:"fa",style:{display:"flex"},children:[Object(N.jsx)(J.a,{src:e.uProfile}),Object(N.jsx)("h4",{children:e.uName})]}),Object(N.jsx)(K,{userData:t,postData:e}),Object(N.jsx)(q.a,{className:"chat-styling",onClick:function(){return t=e.pId,void O(t);var t}})]}),Object(N.jsx)(X.a,{open:b==e.pId,onClose:m,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",fullWidth:!0,maxWidth:"md",children:Object(N.jsxs)("div",{className:"modal-container",children:[Object(N.jsx)("div",{className:"video-modal",children:Object(N.jsx)("video",{autoPlay:!0,muted:"muted",controls:!0,children:Object(N.jsx)("source",{src:e.pUrl})})}),Object(N.jsxs)("div",{className:"comment-modal",children:[Object(N.jsx)(u.a,{className:"card1",style:{padding:"1rem"},children:Object(N.jsx)($,{postData:e})}),Object(N.jsxs)(u.a,{variant:"outlined",className:"card2",children:[Object(N.jsx)(j.a,{style:{padding:"0.4rem"},children:0==e.likes.length?"Liked by nobody":"Liked by ".concat(e.likes.length," users")}),Object(N.jsxs)("div",{style:{display:"flex"},children:[Object(N.jsx)(Y,{postData:e,userData:t,style:{display:"flex",alignItems:"center",justifyContent:"center"}}),Object(N.jsx)(Z,{style:{display:"flex",alignItems:"center",justifyContent:"center"},userData:t,postData:e})]})]})]})]})})]})},n)}))})]})})},te=n(291),ne=n(290),ae=n(292),ce=n(285),re=n(274),se=n(142),ie=n(140),oe=n.n(ie),le=n(117),ue=n.n(le),de=n(138),je=n.n(de),be=n(139),Oe=n.n(be),pe=Object(p.a)({appb:{background:"white"}});function fe(e){var t,n=e.userData,c=a.useState(null),r=Object(l.a)(c,2),s=r[0],u=r[1],d=a.useState(null),j=Object(l.a)(d,2),b=j[0],O=j[1],p=Boolean(s),f=Boolean(b),x=Object(v.g)(),m=a.useContext(D).logout,g=(pe(),function(){O(null)}),y=function(){x.push("/")},k=function(){return(t=t||Object(o.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:x.push("/login");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)},C="primary-search-account-menu",w=Object(N.jsx)(se.a,{anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},id:C,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:p,onClose:function(){u(null),g()},children:Object(N.jsxs)(re.a,{onClick:k,children:[Object(N.jsx)(ue.a,{}),Object(N.jsx)("p",{children:"\xa0\xa0"}),"Logout"]})}),I="primary-search-account-menu-mobile",S=Object(N.jsx)(se.a,{anchorEl:b,anchorOrigin:{vertical:"top",horizontal:"right"},id:I,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:f,onClose:g,children:Object(N.jsxs)(re.a,{onClick:k,children:[Object(N.jsx)(ue.a,{}),Object(N.jsx)("p",{children:"\xa0\xa0"}),"Logout"]})});return Object(N.jsxs)(ne.a,{sx:{flexGrow:1},children:[Object(N.jsx)(te.a,{position:"fixed",sx:{background:"white"},children:Object(N.jsxs)(ae.a,{children:[Object(N.jsx)("div",{style:{marginLeft:"5%"},children:Object(N.jsx)("img",{src:h,style:{width:"20vh"},onClick:y})}),Object(N.jsx)(ne.a,{sx:{flexGrow:1}}),Object(N.jsxs)(ne.a,{sx:{display:{xs:"none",md:"flex"},color:"black",alignItems:"center",marginRight:"4rem"},children:[Object(N.jsx)(je.a,{onClick:y,sx:{marginRight:"1.5rem",cursor:"pointer"}}),Object(N.jsx)(Oe.a,{onClick:function(){window.open("https://www.pepcoding.com","_blank").focus()},sx:{marginRight:"1rem",cursor:"pointer"}}),Object(N.jsx)(ce.a,{size:"large",edge:"end","aria-label":"account of current user","aria-controls":C,"aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},color:"inherit",children:Object(N.jsx)(J.a,{src:null===n||void 0===n?void 0:n.profileUrl,sx:{height:"2rem",width:"2rem"}})})]}),Object(N.jsx)(ne.a,{sx:{display:{xs:"flex",md:"none"}},children:Object(N.jsx)(ce.a,{size:"large","aria-label":"show more","aria-controls":I,"aria-haspopup":"true",onClick:function(e){O(e.currentTarget)},color:"inherit",children:Object(N.jsx)(oe.a,{})})})]})}),S,w]})}var he=function(){var e=Object(a.useContext)(D),t=e.user,n=(e.logout,Object(a.useState)("")),c=Object(l.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){var e=I.users.doc(t.uid).onSnapshot((function(e){s(e.data())}));return function(){e()}}),[t]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(fe,{userData:r}),Object(N.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[Object(N.jsx)(B,{user:r}),Object(N.jsx)(ee,{userData:r})]})]})},xe=n(34),me=["component"];var ge=function(e){var t=e.component,n=Object(xe.a)(e,me),c=Object(a.useContext)(D).user;return Object(N.jsx)(v.b,Object(L.a)(Object(L.a)({},n),{},{render:function(e){return c?Object(N.jsx)(t,Object(L.a)({},e)):Object(N.jsx)(v.a,{to:"login"})}}))};var ve=function(){return Object(N.jsx)(y.a,{children:Object(N.jsx)(T,{children:Object(N.jsxs)(v.d,{children:[Object(N.jsx)(v.b,{path:"/login",component:z}),Object(N.jsx)(v.b,{path:"/signup",component:P}),Object(N.jsx)(ge,{path:"/",component:he})]})})})},ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,293)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(N.jsx)(ve,{}),document.getElementById("root")),ye()}},[[183,1,2]]]);
//# sourceMappingURL=main.87d3456a.chunk.js.map