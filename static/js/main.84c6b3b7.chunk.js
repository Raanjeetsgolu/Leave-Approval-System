(this.webpackJsonplas=this.webpackJsonplas||[]).push([[0],{50:function(e,t,c){},51:function(e,t,c){},54:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(10),r=c.n(n),s=c(42),a=c.n(s),i=(c(50),c(35)),o=c(14),l=(c(51),c(11)),j=c(28),b=c(43),d=c(32),p=Object(b.a)({apiKey:"AIzaSyAq_PWmr97j8odG0qzj1sJOJWlEX_Yddjo",authDomain:"leave-approval-system.firebaseapp.com",databaseURL:"https://leave-approval-system.firebaseapp.com",projectId:"leave-approval-system",storageBucket:"leave-approval-system.appspot.com",messagingSenderId:"691668587265",appId:"1:691668587265:web:9933f464a1c912bbba0100"}),u=Object(j.b)(p),h=Object(d.b)(p),O=(c(54),c(9)),m=function(e){return e.trigger?Object(O.jsx)("div",{className:"popup",children:Object(O.jsxs)("div",{className:"popup-inner",children:[Object(O.jsx)("button",{className:"close_btn",children:"close"}),e.children]})}):""},x=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!1),a=Object(l.a)(s,2),i=a[0],o=a[1];Object(n.useEffect)((function(){var e=Object(j.d)(Object(j.a)(u,"employee")),t=Object(j.c)(e,(function(e){var t=[];e.forEach((function(e){t.push(e.data()),console.log(e.data().phoneNumber)})),r(t),console.log(t)}));return function(){return t()}}),[]);return Object(O.jsx)("div",{children:Object(O.jsxs)("table",{className:"table",style:{margin:"auto",color:"black"},children:[Object(O.jsx)("thead",{style:{color:"black"},children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Name"}),Object(O.jsx)("th",{children:"Phone Number"})]})}),c.map((function(e){return Object(O.jsxs)("tr",{onClick:function(){return o(!i)},children:[Object(O.jsxs)("td",{children:[" ",e.name]}),Object(O.jsxs)("td",{children:[" ",e.phoneNumber]}),Object(O.jsxs)(m,{trigger:i,children:[Object(O.jsxs)("div",{className:"Name_popup",children:[Object(O.jsx)("strong",{children:" Name :"})," ",e.name]}),Object(O.jsxs)("div",{className:"Name_phonenumber",children:[Object(O.jsx)("strong",{children:" Phone Number : "}),e.phoneNumber]}),Object(O.jsxs)("div",{className:"Age_popup",children:[Object(O.jsx)("strong",{children:" Age :"}),e.age]}),Object(O.jsxs)("div",{className:"Gender_popup",children:[Object(O.jsx)("strong",{children:" Gender : "}),e.gender," "]}),Object(O.jsxs)("div",{className:"Experience_popup",children:[Object(O.jsx)("strong",{children:" Experience :"}),e.experience," yrs"]}),Object(O.jsxs)("div",{className:"approvedleave_popup",children:[Object(O.jsx)("strong",{children:" Approved Leave :"}),e.approvedleave]})]})]})}))]})})},v=function(){return Object(O.jsxs)("div",{className:"adminpanel",children:[Object(O.jsxs)("div",{className:"adminpanel_header",children:[Object(O.jsx)("div",{children:"Admin Login"}),Object(O.jsx)(i.b,{to:"/addnewemployee",children:"+ New Employee"})]}),Object(O.jsx)(x,{})]})},f=c(0),g=c.n(f),N=c(2),y=(c(60),c(29)),w=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(),a=Object(l.a)(s,2),i=a[0],o=a[1],j=function(){var e=Object(N.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,Object(y.a)(Object(y.b)(u,"employee"),{name:c,phoneNumber:i,age:"",gender:"",experience:"",approvedleave:""});case 3:o(""),r(""),console.log(c),console.log(i);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"addnewemployee",children:Object(O.jsxs)("form",{onSubmit:j,children:[Object(O.jsxs)("label",{children:[" Name",Object(O.jsx)("input",{type:"text",onChange:function(e){return r(e.target.value)},required:!0,value:c})]}),Object(O.jsxs)("label",{children:[" Phone Number",Object(O.jsx)("input",{type:"number",onChange:function(e){return o(e.target.value)},required:!0,value:i})]}),Object(O.jsx)("button",{type:"submit",children:"Add Employee"})]})})},S=(c(61),function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),c=t[0],r=t[1];window.recaptchaVerifier=new d.a("recaptch-conatiner",{size:"invisible",callback:function(e){console.log("User Login"),s()}},h);var s=function(e){e.preventDefault();var t=window.recaptchaVerifier;Object(d.c)(h,911234567890,t).then((function(e){var t=prompt("put the confimantion code");e.confirm(t).window.confirmationResult=e})).catch((function(e){console.log(e),console.log("Sms sent")}))};return Object(O.jsxs)("div",{className:"login",children:[Object(O.jsx)("h1",{children:"Login"}),Object(O.jsx)("div",{id:"recaptcha-container"}),Object(O.jsxs)("form",{onSubmit:s,children:[Object(O.jsx)("div",{className:""}),Object(O.jsxs)("label",{children:["Mobile Number",Object(O.jsx)("input",{type:"number",id:"mobile_number",placeholder:"Type your phone number",value:c,onChange:function(e){return r(e.target.value)}})]})," ",Object(O.jsxs)("label",{children:["Password",Object(O.jsx)("input",{type:"password",placeholder:"type your password",id:"password"})]}),Object(O.jsx)("button",{type:"submit",children:"submit"})]})]})}),_=function(){return Object(O.jsx)(i.a,{children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(S,{}),Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{path:"/addnewemployee",children:Object(O.jsx)(w,{})}),Object(O.jsx)(o.a,{path:"/",children:Object(O.jsx)(v,{})})]})]})})};a.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(_,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.84c6b3b7.chunk.js.map