(this["webpackJsonplapa-app"]=this["webpackJsonplapa-app"]||[]).push([[0],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(12),a=n(98),c=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/"}),s={getAuth:function(){return c.get("auth/me").then((function(e){return e.data}))},logining:function(e){return c.post("auth/login",Object(r.a)({},e))},setUnlogging:function(){return c.delete("auth/login")},getCaptcha:function(){return c.get("security/get-captcha-url")}}},120:function(e,t,n){e.exports={wrapper:"Users_wrapper__IPgt-",img:"Users_img__34U24",info:"Users_info__1grIT",items:"Users_items__26q9j",selected:"Users_selected__322Qs"}},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n(12),a=n(79),c="lapa-app/app-reducer/SET_INITIALIZED",s={initialized:!1},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(r.a)(Object(r.a)({},e),{},{initialized:t.initialized});default:return e}},i=function(){return function(e){e(Object(a.a)()).then((function(){e({type:c,initialized:!0})}))}}},175:function(e,t,n){e.exports={avatarCard:"Profile_avatarCard__3lS5N"}},176:function(e,t,n){e.exports={comment:"Posts_comment__2T6y2",buttonText:"Posts_buttonText__2cbkf",buttonImg:"Posts_buttonImg__2mYo_"}},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(95),a=n(12),c=n(39),s="lapa-app/dialogs-reducer/ADD-MESSAGE",o=function(e){return{type:s,message:e}},i={dialogs:[{id:Object(c.v1)(),name:"Pashka"},{id:Object(c.v1)(),name:"Maks"},{id:Object(c.v1)(),name:"Vlados"},{id:Object(c.v1)(),name:"Leha"},{id:Object(c.v1)(),name:"Dima"}],messages:[{id:Object(c.v1)(),message:"Hi"},{id:Object(c.v1)(),message:"How are you?"},{id:Object(c.v1)(),message:"I am fine"}]};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n={id:Object(c.v1)(),message:t.message};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}}},220:function(e,t,n){e.exports={item:"Post_item__5yp1L",postLikes:"Post_postLikes__1z3U8",comment:"Post_comment__3NEPh",commentAction:"Post_commentAction__jphb5","comment-action":"Post_comment-action__JeqJE"}},223:function(e,t,n){e.exports={widgets:"Widgets_widgets__EfZB_"}},332:function(e,t,n){},333:function(e,t,n){},337:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(45),s=n.n(c),o=n(179),i=n(180),u=n(181),l=n(182),j=n(62),p=n(36),d=n(48),b=n(28),f=n(79),O=n(87),h=n(344),x=n(109),m=n(69),g=n(340),v=n(345),w=n(349),y=n(228),k=n(3),P=Object(b.b)((function(e){return{login:e.login.data.login,password:e.login.data.password,isAuth:e.auth.isAuth,errorMessage:e.auth.errorMessage,captchaUrl:e.login.captchaUrl}}),{setLoginData:O.c,setAuth:f.c,getCaptchaUrl:O.a})((function(e){var t=h.a.useForm(),n=Object(d.a)(t,1)[0],r=function(t,n,r,a){e.setAuth(t,n,r,a)};return e.isAuth?Object(k.jsx)(p.a,{to:"/profile"}):Object(k.jsx)(x.a,{justify:"center",style:{height:"90vh"},children:Object(k.jsx)(m.a,{xs:{span:23,offset:1},md:{span:23,offset:1},lg:{span:8,offset:1},xl:{span:8,offset:1},children:Object(k.jsxs)(g.a,{style:{boxShadow:"rgb(0 0 0 / 50%) 5px 6px 10px -5px",textAlign:"center"},children:[Object(k.jsx)("h1",{children:"LOGIN PAGE"}),Object(k.jsxs)(h.a,{onFinish:function(t){r(t.login,t.password,t.rememberMe,t.captcha),e.setLoginData(t)},form:n,children:[Object(k.jsx)(h.a.Item,{name:"login",rules:[{required:!0,message:"You need to write your Email"},{type:"email",message:"Must be Email"}],children:Object(k.jsx)(v.a,{name:"login",placeholder:"Email"})}),Object(k.jsx)(h.a.Item,{name:"password",rules:[{required:!0,message:"You need to write your password"}],children:Object(k.jsx)(v.a,{name:"password",placeholder:"Password"})}),Object(k.jsx)(h.a.Item,{name:"rememberMe",children:Object(k.jsx)(w.a,{name:"rememberMe",children:"Remember me"})}),e.captchaUrl&&Object(k.jsxs)(h.a.Item,{name:"captcha",children:[Object(k.jsx)("img",{src:e.captchaUrl,style:{width:"200px"}}),Object(k.jsx)(v.a,{type:"text",name:"captcha"})]}),Object(k.jsx)(h.a.Item,{children:Object(k.jsx)(y.a,{type:"primary",htmlType:"submit",children:"Submit"})}),Object(k.jsxs)("p",{children:["To log in get registered",Object(k.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:" here"})]}),Object(k.jsx)("p",{children:"or use common test account credentials:"}),Object(k.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(k.jsx)("p",{children:"Password: free"})]})]})})})})),_=n(92),S=n(148),A=n.p+"static/media/loader.07928bad.gif",I=function(){return Object(k.jsx)("div",{children:Object(k.jsx)("img",{src:A})})},F=n(12),E=n(175),C=n.n(E),T=n(50),U=function(e){var t=Object(b.c)(),n=Object(r.useState)(!1),a=Object(d.a)(n,2),c=a[0],s=a[1],o=Object(r.useState)(e.status),i=Object(d.a)(o,2),u=i[0],l=i[1];Object(r.useEffect)((function(){l(e.status)}),[e.status]);return Object(k.jsxs)("div",{children:[!c&&Object(k.jsx)("div",{children:Object(k.jsx)("span",{onDoubleClick:function(){s(!0)},children:e.status||"clear status"})}),c&&Object(k.jsx)("div",{children:Object(k.jsx)("input",{autoFocus:!0,onChange:function(e){l(e.currentTarget.value)},value:u,onBlur:function(){s(!1),t(Object(T.g)(u))}})})]})},N=n(162),D=n(342),M=n(231),L=function(e){var t=e.aboutMe,n=e.userId,a=e.fullName,c=e.lookingForAJob,s=e.lookingForAJobDescription,o=e.contacts,i=(Object(N.a)(e,["aboutMe","userId","fullName","lookingForAJob","lookingForAJobDescription","contacts"]),g.a.Meta),u=(D.a.Paragraph,Object(b.c)()),l=Object(r.useState)(!1),j=Object(d.a)(l,2),p=j[0],f=j[1],O=Object(r.useState)({aboutMe:t,userId:n,fullName:a,lookingForAJobDescription:s,lookingForAJob:c,contacts:{github:o.github}}),h=Object(d.a)(O,2),x=h[0],m=h[1];Object(r.useEffect)((function(){m({aboutMe:t,userId:n,fullName:a,lookingForAJobDescription:s,lookingForAJob:c,contacts:{github:o.github}})}),[t,n,a,c,s,o]);var v=function(e,t){switch(t){case"fullName":return m(Object(F.a)(Object(F.a)({},x),{},{fullName:e.currentTarget.value}));case"aboutMe":return m(Object(F.a)(Object(F.a)({},x),{},{aboutMe:e.currentTarget.value}));case"lookingForAJobDescription":return m(Object(F.a)(Object(F.a)({},x),{},{lookingForAJobDescription:e.currentTarget.value}));case"lookingForAJob":return m(Object(F.a)(Object(F.a)({},x),{},{lookingForAJob:e.currentTarget.checked}));case"contacts.github":return m(Object(F.a)(Object(F.a)({},x),{},{contacts:Object(F.a)(Object(F.a)({},o),{},{github:e.currentTarget.value})}));default:return x}};return Object(k.jsxs)("div",{children:[!p&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(g.a,{style:{marginBottom:"10px",boxShadow:"rgb(0 0 0 / 50%) -6px 5px 10px -5px"},title:Object(k.jsxs)("span",{style:{fontSize:20},children:[a,Object(k.jsx)(M.a,{onClick:function(){f(!0)}})]}),hoverable:!0,children:Object(k.jsx)(i,{title:t,description:"I'm ".concat(s," and ").concat(c?"find":"dont find"," a job")})}),Object(k.jsx)(g.a,{title:"Contacts:",style:{marginBottom:"10px",boxShadow:"rgb(0 0 0 / 50%) -6px 5px 10px -5px"},children:Object(k.jsx)(i,{title:Object(k.jsx)("span",{children:Object(k.jsx)("a",{href:o.github,target:"_blank",children:o.github})})})})]}),p&&Object(k.jsxs)(g.a,{style:{margin:"10px",borderRadius:"5px"},title:Object(k.jsxs)("span",{children:["Fullname: ",Object(k.jsx)("input",{type:"text",value:x.fullName,onChange:function(e){return v(e,"fullName")}}),Object(k.jsx)(y.a,{type:"primary",onClick:function(){f(!1),u(Object(T.f)({aboutMe:x.aboutMe,userId:x.userId,fullName:x.fullName,lookingForAJobDescription:x.lookingForAJobDescription,lookingForAJob:x.lookingForAJob,contacts:{github:x.contacts.github}}))},children:"Save"})]}),hoverable:!0,children:[Object(k.jsx)(i,{title:Object(k.jsxs)("div",{children:["About me: ",Object(k.jsx)("input",{type:"text",value:x.aboutMe,onChange:function(e){return v(e,"aboutMe")}})]}),description:Object(k.jsxs)("div",{children:["I'm ",Object(k.jsxs)("span",{children:["lookingForAJobDescription: ",Object(k.jsx)("input",{type:"text",value:x.lookingForAJobDescription,onChange:function(e){return v(e,"lookingForAJobDescription")}})]})," and ",Object(k.jsxs)("span",{children:["lookingForAJob: ",Object(k.jsx)("input",{type:"checkbox",checked:x.lookingForAJob,onChange:function(e){return v(e,"lookingForAJob")}})]})," a job "]})}),Object(k.jsx)(i,{title:Object(k.jsx)("span",{children:Object(k.jsx)("a",{href:o.github,target:"_blank",children:Object(k.jsxs)("div",{children:["contacts: ",Object(k.jsx)("input",{type:"text",value:x.contacts.github,onChange:function(e){return v(e,"contacts.github")}})]})})})})]})]})},z=n(346),J=n(341),R=n(347),G=n(356),B=n(66),H=n(338),W=n(351),q=n(352),Y=n(353),V=n(354),K=n(220),X=n.n(K),Z=function(e){var t=Object(r.useState)(0),n=Object(d.a)(t,2),c=n[0],s=n[1],o=Object(r.useState)(0),i=Object(d.a)(o,2),u=i[0],l=i[1],j=Object(r.useState)(null),p=Object(d.a)(j,2),b=p[0],f=p[1],O=[Object(k.jsx)(B.a,{title:"Like",children:Object(k.jsxs)("span",{onClick:function(){s(1),l(0),f("liked")},children:[Object(r.createElement)("liked"===b?W.a:q.a),Object(k.jsx)("span",{className:"comment-action",children:c})]})},"comment-basic-like"),Object(k.jsx)(B.a,{title:"Dislike",children:Object(k.jsxs)("span",{onClick:function(){s(0),l(1),f("disliked")},children:[a.a.createElement("disliked"===b?Y.a:V.a),Object(k.jsx)("span",{className:"comment-action",children:u})]})},"comment-basic-dislike")];return Object(k.jsx)(H.a,{className:X.a.comment,actions:O,author:e.author,content:Object(k.jsx)("p",{children:e.content}),style:{boxShadow:"rgb(0 0 0 / 50%) -6px 5px 10px -5px"}})},Q=a.a.memo((function(e){return Object(k.jsx)(m.a,{span:24,style:{marginBottom:10},children:Object(k.jsx)(Z,{author:e.profile.fullName,avatar:e.profile.photos.small,content:e.message})})})),$=a.a.memo((function(e){e.addPost,e.myPost,e.newPost;var t=e.posts,n=e.profile,r=(Object(N.a)(e,["addPost","myPost","newPost","posts","profile"]),t.map((function(e){return Object(k.jsx)(Q,{profile:n,message:e.postMessage,likes:e.likes,id:e.id},e.id)})));return Object(k.jsx)("div",{children:r})})),ee=Object(b.b)((function(e){return{myPost:e.profilePage.myPost,newPost:e.profilePage.newPost,posts:e.profilePage.posts,profile:e.profilePage.profile}}),{addPost:T.a})($),te=n(176),ne=n.n(te),re=n(229),ae=n(355),ce=function(){var e=h.a.useForm(),t=Object(d.a)(e,1)[0],n=Object(r.useState)({}),a=Object(d.a)(n,2)[1];Object(r.useEffect)((function(){a({})}),[]);var c=v.a.TextArea,s=Object(b.c)(),o="".concat(ne.a.buttonText," addPost");return Object(k.jsx)(h.a,{onFinish:function(e){console.log("Success:",e),s(Object(T.a)(e.post)),t.resetFields()},form:t,onFinishFailed:function(e){console.log("Failed:",e),re.b.error("Post must be maximum 100 characters.")},children:Object(k.jsxs)(x.a,{justify:"center",align:"middle",children:[Object(k.jsx)(m.a,{xs:{span:17,offset:1},md:{span:17,offset:1},lg:{span:17,offset:1},xl:{span:17,offset:1},children:Object(k.jsx)(h.a.Item,{rules:[{max:100,message:"Post must be maximum 100 characters."}],name:"post",style:{marginBottom:0},children:Object(k.jsx)(c,{rows:2,name:"post",onChange:function(e){t.setFieldsValue({post:e.currentTarget.value})},required:!0,style:{borderRadius:10}})})}),Object(k.jsx)(m.a,{xs:{span:5,offset:1},md:{span:5,offset:1},lg:{span:5,offset:1},xl:{span:5,offset:1},children:Object(k.jsx)(h.a.Item,{style:{marginBottom:0},children:Object(k.jsx)(y.a,{type:"primary",htmlType:"submit",icon:Object(k.jsx)(ae.a,{className:ne.a.buttonImg}),children:Object(k.jsx)("span",{className:o,children:"Add post"})})})})]})})},se=function(e){var t=Object(r.useRef)(null),n=(g.a.Meta,Object(b.c)());e.profile;return Object(k.jsxs)("div",{className:C.a.wrapper,children:[Object(k.jsxs)(x.a,{children:[Object(k.jsxs)(m.a,{xs:{span:24,offset:1},md:{span:24,offset:1},lg:{span:10,offset:1},xl:{span:8,offset:1},children:[Object(k.jsxs)(g.a,{style:{marginBottom:"10px",boxShadow:"rgb(0 0 0 / 50%) 5px 6px 10px -5px",textAlign:"center"},children:[Object(k.jsx)(m.a,{children:Object(k.jsx)(J.a,{src:e.profile.photos.large,style:{borderRadius:"10px",paddingBottom:10}})}),Object(k.jsx)(y.a,{type:"primary",icon:Object(k.jsx)(G.a,{}),size:"large",onClick:function(){return t&&t.current&&t.current.click()},children:"Add image"}),Object(k.jsx)("input",{ref:t,type:"file",style:{display:"none"},onChange:function(e){e.target.files&&n(Object(T.e)(e.target.files[0]))}})]}),Object(k.jsx)(g.a,{hoverable:!0,style:{marginBottom:"10px",boxShadow:"rgb(0 0 0 / 50%) 5px 6px 10px -5px"},children:Object(k.jsx)(U,{status:e.status})})]}),Object(k.jsxs)(m.a,{xs:{span:24,offset:1},md:{span:24,offset:1},lg:{span:12,offset:1},xl:{span:14,offset:1},children:[Object(k.jsx)(L,Object(F.a)({},e.profile)),Object(k.jsx)(g.a,{style:{boxShadow:"rgb(0 0 0 / 50%) -6px 5px 10px -5px",marginBottom:"10px"},hoverable:!0,children:Object(k.jsx)(ce,{})})]})]}),21095===e.profile.userId&&Object(k.jsxs)(x.a,{children:[Object(k.jsx)(m.a,{xs:{span:24,offset:1},md:{span:18,offset:1},lg:{span:10,offset:1},xl:{span:8,offset:1},children:Object(k.jsx)(g.a,{title:"Friends",className:C.a.avatarCard,children:Object(k.jsxs)(x.a,{align:"middle",justify:"center",children:[Object(k.jsxs)(m.a,{xs:{span:3,offset:1},md:{span:3,offset:1},lg:{span:10,offset:1},xl:{span:7,offset:1},children:[Object(k.jsx)(z.a,{size:80,src:"https://joeschmoe.io/api/v1/random"}),Object(k.jsx)("span",{children:"Friend"})]}),Object(k.jsxs)(m.a,{xs:{span:3,offset:1},md:{span:3,offset:1},lg:{span:10,offset:1},xl:{span:7,offset:1},children:[Object(k.jsx)(z.a,{size:80,src:"https://joeschmoe.io/api/v1/random"}),Object(k.jsx)("span",{children:"Friend"})]}),Object(k.jsxs)(m.a,{xs:{span:3,offset:1},md:{span:3,offset:1},lg:{span:10,offset:1},xl:{span:7,offset:1},children:[Object(k.jsx)(z.a,{size:80,src:"https://joeschmoe.io/api/v1/random"}),Object(k.jsx)("span",{children:"Friend"})]}),Object(k.jsxs)(m.a,{xs:{span:3,offset:1},md:{span:3,offset:1},lg:{span:10,offset:1},xl:{span:7,offset:1},children:[Object(k.jsx)(z.a,{size:80,src:"https://joeschmoe.io/api/v1/random"}),Object(k.jsx)("span",{children:"Friend"})]}),Object(k.jsxs)(m.a,{xs:{span:3,offset:1},md:{span:3,offset:1},lg:{span:10,offset:1},xl:{span:7,offset:1},children:[Object(k.jsx)(z.a,{size:80,src:"https://joeschmoe.io/api/v1/random"}),Object(k.jsx)("span",{children:"Friend"})]}),Object(k.jsxs)(m.a,{xs:{span:3,offset:1},md:{span:3,offset:1},lg:{span:10,offset:1},xl:{span:7,offset:1},children:[Object(k.jsx)(R.a,{count:1,children:Object(k.jsx)(z.a,{size:80,src:"https://joeschmoe.io/api/v1/random"})}),Object(k.jsx)("span",{children:"Friend"})]})]})})}),Object(k.jsx)(m.a,{xs:{span:24,offset:1},md:{span:24,offset:1},lg:{span:12,offset:1},xl:{span:14,offset:1},children:Object(k.jsx)(ee,{})})]})]})},oe=n(44),ie=n(77),ue=n(350),le=function(){var e=Object(b.c)(),t=Object(oe.b)(ie.a),n=Object(oe.b)(ie.d),a=Object(oe.b)(ie.e),c=Object(oe.b)(ie.c),s=Object(p.g)().userId;return Object(r.useEffect)((function(){t&&(s||(s=0!==c?c:21095),e(Object(T.b)(s)),e(Object(T.c)(s)))}),[s]),t?Object(k.jsx)("div",{children:Object(k.jsx)(ue.b,{direction:"vertical",size:"middle",style:{display:"flex"},children:Object(k.jsx)(se,{profile:n,status:a})})}):Object(k.jsx)(p.a,{to:"/login"})},je=function(e){return Object(k.jsx)("img",{src:e.src})},pe=n(223),de=n.n(pe),be=function(e){return Object(k.jsx)("div",{className:de.a.widgets,children:Object(k.jsx)(je,{src:e.smallPhoto})})},fe=n(339),Oe=function(){var e=fe.a.Header,t=Object(b.c)(),n=Object(oe.b)(ie.b),r=Object(oe.b)(ie.a),a=Object(oe.b)(ie.f);return Object(k.jsx)(e,{style:{padding:0,boxShadow:"rgb(0 0 0 / 50%) -5px 8px 10px -5px",position:"fixed",right:0,zIndex:20,minWidth:300,textAlign:"center",borderRadius:10,margin:5},children:r?Object(k.jsxs)(x.a,{children:[Object(k.jsx)(m.a,{span:8,children:n}),Object(k.jsxs)(m.a,{span:8,children:[" ",Object(k.jsx)(be,{smallPhoto:a})]}),Object(k.jsx)(m.a,{span:8,children:Object(k.jsx)(y.a,{type:"primary",onClick:function(){t(Object(f.d)())},children:"Log out"})})]}):Object(k.jsx)(m.a,{span:24,children:Object(k.jsx)(j.b,{to:"/login",children:"Login"})})})},he=n(343),xe=function(e){for(var t=e.totalItemsCounter,n=e.pageSize,a=e.currentPage,c=e.onPageClick,s=e.portionSize,o=void 0===s?10:s,i=Math.ceil(t/n),u=[],l=1;l<=i;l++)u.push(l);Math.ceil(i/o);var j=Object(r.useState)(1),p=Object(d.a)(j,2),b=(p[0],p[1]);Object(r.useEffect)((function(){b(Math.ceil(a/o))}),[a,o]);return Object(k.jsx)("div",{children:Object(k.jsx)(he.a,{showSizeChanger:!1,onShowSizeChange:function(e,t){console.log(e,t)},defaultCurrent:1,current:a,total:i,onChange:function(e,t){c(e)}})})},me=n(120),ge=n.n(me),ve=n.p+"static/media/user.3b87c899.png",we=n(85),ye=function(e){var t=e.user,n=e.followInProgress,r=Object(b.c)();return Object(k.jsx)(m.a,{xs:{span:23,offset:1},md:{span:23,offset:1},lg:{span:12,offset:1},xl:{span:12,offset:1},children:Object(k.jsx)(g.a,{style:{boxShadow:"rgb(0 0 0 / 50%) 5px 5px 10px -5px",marginBottom:10},children:Object(k.jsxs)("div",{className:ge.a.wrapper,children:[Object(k.jsxs)("div",{className:ge.a.items,children:[Object(k.jsx)(j.b,{to:"/profile/"+t.id,children:Object(k.jsx)("img",{className:ge.a.img,src:null!=t.photos.small?t.photos.small:ve})}),t.followed?Object(k.jsx)(y.a,{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(Object(we.c)(t.id))},style:{marginTop:10},children:"Unfollow"}):Object(k.jsx)(y.a,{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(Object(we.a)(t.id))},style:{marginTop:10},children:"Follow"})]}),Object(k.jsxs)("div",{className:ge.a.info,children:[Object(k.jsx)("h2",{children:t.name}),Object(k.jsx)("div",{children:t.status})]})]})})})},ke=function(e){return e.users.users},Pe=function(e){return e.users.pageSize},_e=function(e){return e.users.totalUserCounter},Se=function(e){return e.users.currentPage},Ae=function(e){return e.users.isFetching},Ie=function(e){return e.users.followInProgress},Fe=function(){var e=Object(b.c)(),t=Object(oe.b)(ke),n=Object(oe.b)(Pe),a=Object(oe.b)(_e),c=Object(oe.b)(Se),s=Object(oe.b)(Ae),o=Object(oe.b)(Ie);Object(r.useEffect)((function(){e(Object(we.d)(c,n))}),[]);return Object(k.jsxs)("div",{children:[s?Object(k.jsx)(I,{}):null,Object(k.jsx)(x.a,{justify:"center",children:t.map((function(e){return Object(k.jsx)(ye,{user:e,followInProgress:o},e.id)}))}),Object(k.jsx)(x.a,{justify:"center",children:Object(k.jsx)(xe,{pageSize:n,totalItemsCounter:a,currentPage:c,onPageClick:function(t){e(Object(we.b)(t,n))}})})]})},Ee=(n(331),n(332),n(348)),Ce=n(357),Te=n(358),Ue=n(359),Ne=a.a.lazy((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,431))})),De=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e){alert("Some error"),console.error(e)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializedTC(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){if(!this.props.initialized)return Object(k.jsx)(I,{});var e=fe.a.Content,t=fe.a.Footer,n=fe.a.Sider;return Object(k.jsxs)(fe.a,{hasSider:!0,children:[Object(k.jsxs)(n,{breakpoint:"md",collapsedWidth:"0",className:"sider",children:[Object(k.jsx)("div",{className:"logo"}),Object(k.jsxs)(Ee.a,{mode:"inline",defaultSelectedKeys:["4"],children:[Object(k.jsx)(Ee.a.Item,{icon:Object(k.jsx)(Ce.a,{}),children:Object(k.jsx)(j.b,{to:"/profile",children:"Profile"})},"1"),Object(k.jsx)(Ee.a.Item,{icon:Object(k.jsx)(Te.a,{}),children:Object(k.jsx)(j.b,{to:"/dialogs",children:"Dialogs"})},"2"),Object(k.jsx)(Ee.a.Item,{icon:Object(k.jsx)(Ue.a,{}),children:Object(k.jsx)(j.b,{to:"/users",children:"Users"})},"3")]})]}),Object(k.jsxs)(fe.a,{className:"site-layout",children:[Object(k.jsx)(Oe,{}),Object(k.jsx)(e,{style:{margin:"24px 16px 0",overflow:"initial"},children:Object(k.jsx)("div",{className:"site-layout-background",style:{padding:"60px 20px"},children:Object(k.jsx)(r.Suspense,{fallback:Object(k.jsx)(I,{}),children:Object(k.jsxs)(p.d,{children:[Object(k.jsx)(p.b,{path:"/profile/:userId?",render:function(){return Object(k.jsx)(le,{})}}),Object(k.jsx)(p.b,{path:"/dialogs",render:function(){return Object(k.jsx)(Ne,{})}}),Object(k.jsx)(p.b,{path:"/users",render:function(){return Object(k.jsx)(Fe,{})}}),Object(k.jsx)(p.b,{path:"/login",render:function(){return Object(k.jsx)(P,{})}}),Object(k.jsx)(p.b,{path:"/",render:function(){return Object(k.jsx)(p.a,{to:"/profile"})}}),Object(k.jsx)(p.b,{exact:!0,path:"*",render:function(){return Object(k.jsx)("div",{children:"404 PAGE NOT FOUND"})}})]})})})}),Object(k.jsx)(t,{style:{background:"linear-gradient(5deg, #d7edfc 30%, #ffecb2 60%)"},children:"Designed by Lapa17"})]})]})}}]),n}(a.a.Component),Me=Object(_.c)(p.h,Object(b.b)((function(e){return{friends:e.navbarRight.friends,initialized:e.app.initialized}}),{initializedTC:S.b}))(De),Le=(n(333),function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,430)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))}),ze=n(225);n.n(ze).a.initialize({gtmId:"GTM-WF95T4J"}),s.a.render(Object(k.jsx)(j.a,{children:Object(k.jsx)(b.a,{store:oe.a,children:Object(k.jsx)(Me,{})})}),document.getElementById("root")),window.store=oe.a,Le()},44:function(e,t,n){"use strict";n.d(t,"b",(function(){return x}));var r=n(92),a=n(79),c=n(209),s=n(39),o={friends:[{id:Object(s.v1)(),name:"Pashka"},{id:Object(s.v1)(),name:"Maks"},{id:Object(s.v1)(),name:"Vlad"},{id:Object(s.v1)(),name:"Leha"}]},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;return e},u=n(50),l=n(85),j=n(222),p=n(87),d=n(148),b=n(28),f=Object(r.b)({profilePage:u.d,dialogsPage:c.b,navbarRight:i,users:l.e,auth:a.b,login:p.b,app:d.a}),O=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.c,h=Object(r.d)(f,O(Object(r.a)(j.a))),x=b.d;t.a=h},50:function(e,t,n){"use strict";n.d(t,"d",(function(){return g})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return w})),n.d(t,"g",(function(){return y})),n.d(t,"e",(function(){return k})),n.d(t,"a",(function(){return P})),n.d(t,"f",(function(){return _}));var r=n(24),a=n.n(r),c=n(47),s=n(95),o=n(12),i=n(39),u=n(86),l="lapa-app/profile-reducer/ADD-POST",j="lapa-app/profile-reducer/DELETE-POST",p="lapa-app/profile-reducer/SET_USER_PROFILE",d="lapa-app/profile-reducer/SET_STATUS",b="lapa-app/profile-reducer/UPDATE_PHOTO",f="lapa-app/profile-reducer/UPDATE_PROFILE",O=function(e){return{type:d,status:e}},h=function(e){return{type:b,photo:e}},x=function(e){return{type:f,profile:e}},m={posts:[{id:Object(i.v1)(),postMessage:"Hi, I'm Pavel",likes:10},{id:Object(i.v1)(),postMessage:"Let's go to learn a React",likes:9},{id:Object(i.v1)(),postMessage:"Also we need improve our html/css skills",likes:11},{id:Object(i.v1)(),postMessage:"Then we'll learn Redux",likes:22}],profile:{aboutMe:"",userId:0,fullName:"",photos:{small:"",large:""},contacts:{},lookingForAJobDescription:"",lookingForAJob:!1},status:""},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:Object(i.v1)(),postMessage:t.post,likes:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n])});case j:return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case p:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case d:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case b:return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photo})});case f:return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),t.profile)});default:return e}},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:p,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.getProfileStatus(e);case 2:r=t.sent,n(O(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(O(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.updatePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n(h(r.data.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P=function(e){return function(t){t(function(e){return{type:l,post:e}}(e))}},_=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.updateProfile(e);case 2:0===t.sent.data.resultCode&&(n(x(e)),n(v(r().auth.userId)));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"f",(function(){return i}));var r=function(e){return e.auth.isAuth},a=function(e){return e.auth.userId},c=function(e){return e.profilePage.profile},s=function(e){return e.profilePage.status},o=function(e){return e.auth.login},i=function(e){return e.auth.photos.small}},79:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return x})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return g}));var r=n(24),a=n.n(r),c=n(47),s=n(12),o=n(87),i=n(108),u=n(86),l="lapa-app/auth-reducer/SET_AUTH_DATA",j="lapa-app/auth-reducer/SET_USER_PHOTO",p="lapa-app/auth-reducer/SET_AUTH_CHANGE",d="lapa-app/auth-reducer/GET_LOGIN_ERROR",b=function(e,t,n){return{type:l,data:{userId:e,login:t,email:n}}},f=function(e){return{type:p,isAuth:e}},O={userId:0,login:"",email:"",isAuth:!1,photos:{large:"",small:""}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(s.a)(Object(s.a)(Object(s.a)({},e),t.data),{},{isAuth:!0});case j:return Object(s.a)(Object(s.a)({},e),{},{photos:Object(s.a)({},t.photos)});case p:return Object(s.a)(Object(s.a)({},e),{},{isAuth:t.isAuth});case d:return Object(s.a)(Object(s.a)({},e),{},{errorMessage:t.message});default:return e}},x=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s,o,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.getAuth();case 3:if(0!==(n=e.sent).resultCode){e.next=11;break}return r=n.data,c=r.id,s=r.login,o=r.email,t(b(c,s,o)),e.next=9,u.a.getProfile(c);case 9:l=e.sent,t((a=l.data.photos,{type:j,photos:a}));case 11:return e.abrupt("return",n);case 14:e.prev=14,e.t0=e.catch(0);case 16:case"end":return e.stop()}var a}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}()},m=function(e,t,n,r){return function(){var s=Object(c.a)(a.a.mark((function c(s){var u;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.a.logining({email:e,password:t,rememberMe:n,captcha:r});case 3:(u=a.sent).data.data.userId?s(f(!0)):(10===u.data.resultCode&&s(Object(o.a)()),s((c=u.data.messages[0],{type:d,message:c}))),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(0);case 9:case"end":return a.stop()}var c}),c,null,[[0,7]])})));return function(e){return s.apply(this,arguments)}}()},g=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.setUnlogging();case 3:0===e.sent.data.resultCode&&t(f(!1)),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}},85:function(e,t,n){"use strict";n.d(t,"e",(function(){return x})),n.d(t,"d",(function(){return k})),n.d(t,"b",(function(){return P})),n.d(t,"a",(function(){return S})),n.d(t,"c",(function(){return A}));var r=n(24),a=n.n(r),c=n(47),s=n(95),o=n(12),i=n(98),u=n.n(i).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"a60fb14a-6f41-481f-9441-d849223c43b5"}}),l={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return u.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},setFollow:function(e){return u.post("follow/".concat(e)).then((function(e){return e.data}))},setUnFollow:function(e){return u.delete("follow/".concat(e)).then((function(e){return e.data}))}},j="lapa-app/users-reducer/IS_FOLLOWING",p="lapa-app/users-reducer/SET_USERS",d="lapa-app/users-reducer/SET_CURRENT_PAGE",b="lapa-app/users-reducer/SET_TOTAL_USERS_COUNT",f="lapa-app/users-reducer/TOGGLE_IS_FETCHING",O="lapa-app/users-reducer/TOGGLE_IS_FOLLOWING_PROGRESS",h={users:[],pageSize:10,totalUserCounter:0,currentPage:1,isFetching:!1,followInProgress:[]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(o.a)(Object(o.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(o.a)(Object(o.a)({},e),{},{followed:t.follow}):e}))});case p:return Object(o.a)(Object(o.a)({},e),{},{users:t.users});case d:return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.currentPage});case b:return Object(o.a)(Object(o.a)({},e),{},{totalUserCounter:t.totalCount});case f:return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case O:return Object(o.a)(Object(o.a)({},e),{},{followInProgress:t.isFetching?[].concat(Object(s.a)(e.followInProgress),[t.userId]):e.followInProgress.filter((function(e){return e!==t.userId}))});default:return e}},m=function(e,t){return{type:j,userID:e,follow:t}},g=function(e){return{type:p,users:e}},v=function(e){return{type:d,currentPage:e}},w=function(e){return{type:f,isFetching:e}},y=function(e,t){return{type:O,isFetching:e,userId:t}},k=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(w(!0)),n.next=3,l.getUsers(e,t);case 3:c=n.sent,r(w(!1)),r(g(c.items)),r((a=c.totalCount,{type:b,totalCount:a}));case 7:case"end":return n.stop()}var a}),n)})));return function(e){return n.apply(this,arguments)}}()},P=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(w(!0)),r(v(e)),n.next=4,l.getUsers(e,t);case 4:c=n.sent,r(w(!1)),r(g(c.items));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},_=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(y(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(m(n,c)),t(y(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),S=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.setFollow.bind(l),t.next=3,_(n,e,r,!0);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},A=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.setUnFollow.bind(l),t.next=3,_(n,e,r,!1);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(98),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"a60fb14a-6f41-481f-9441-d849223c43b5"}}),c={getProfile:function(e){return a.get("profile/".concat(e))},getProfileStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},updatePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-type":"multipart/form-data"}})},updateProfile:function(e){return a.put("profile",e)}}},87:function(e,t,n){"use strict";n.d(t,"c",(function(){return j})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return d}));var r=n(24),a=n.n(r),c=n(47),s=n(12),o=n(108),i="lapa-app/login-reducer/SET_LOGIN",u="lapa-app/login-reducer/SET_CAPTCHA",l={data:{login:"",password:""},captchaUrl:""},j=function(e){return{type:i,data:e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(s.a)(Object(s.a)({},e),{},{data:t.data});case u:return Object(s.a)(Object(s.a)({},e),{},{captchaUrl:t.captchaUrl});default:return e}},d=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.getCaptcha();case 3:(n=e.sent).data.url&&t((r=n.data.url,{type:u,captchaUrl:r})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}var r}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}}},[[337,1,2]]]);
//# sourceMappingURL=main.a9bc0584.chunk.js.map