(this["webpackJsonplapa-app"]=this["webpackJsonplapa-app"]||[]).push([[3],{380:function(e,a,s){e.exports={dialog:"Dialog_dialog__MV1s0",active:"Dialog_active__1OIl0"}},381:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__2UMoM",dialogItems:"Dialogs_dialogItems__3jzYh",messages:"Dialogs_messages__1-kcy"}},382:function(e,a,s){},384:function(e,a,s){"use strict";s.r(a);s(0);var i=s(51),t=s(380),n=s.n(t),c=s(1),l=function(e){return Object(c.jsx)("div",{className:n.a.dialog,children:Object(c.jsx)(i.b,{activeClassName:n.a.active,to:"/dialogs/"+e.id,children:e.name})},e.id)},d=s(381),o=s.n(d),r=s(382),m=s.n(r),g=function(e){return Object(c.jsx)("div",{className:m.a.message,children:e.message})},j=s(111),b=s(123),u=s(203),O=s(20),x=function(){var e=Object(O.c)();return Object(c.jsx)(j.d,{initialValues:{message:""},validateOnBlur:!0,validationSchema:b.b,onSubmit:function(a,s){var i=s.setSubmitting;e(Object(u.a)(a.message)),i(!1)},children:function(e){var a=e.isSubmitting,s=e.errors,i=e.touched;e.dirty,e.isValid;return Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.b,{name:"message",as:"textarea",className:"form-textarea",placeholder:"Enter a message..."}),i.message&&s.message&&Object(c.jsx)(j.a,{name:"message",component:"div"}),Object(c.jsx)("button",{type:"submit",disabled:a,children:"Send"})]})}})},p=s(33),v=function(e){return e.dialogsPage.dialogs},h=function(e){return e.dialogsPage.messages},f=s(68),_=s(30);a.default=function(){var e=Object(p.b)(f.a),a=Object(p.b)(v),s=Object(p.b)(h),i=a.map((function(e){return Object(c.jsx)(l,{id:e.id,name:e.name},e.id)})),t=s.map((function(e){return Object(c.jsx)(g,{message:e.message,id:e.id},e.id)}));return e?Object(c.jsxs)("div",{className:o.a.dialogs,children:[Object(c.jsx)("div",{className:o.a.dialogItems,children:i}),Object(c.jsx)("div",{className:o.a.messages,children:t}),Object(c.jsx)("div",{className:o.a.item,children:Object(c.jsx)(x,{})})]}):Object(c.jsx)(_.a,{to:"/login"})}}}]);
//# sourceMappingURL=3.595e8be6.chunk.js.map