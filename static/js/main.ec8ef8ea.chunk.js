(this.webpackJsonplas=this.webpackJsonplas||[]).push([[0],{50:function(e,t,c){},51:function(e,t,c){},54:function(e,t,c){},56:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(10),s=c.n(n),r=c(41),a=c.n(r),j=(c(50),c(28)),i=c(14),l=(c(51),c(11)),o=c(29),b=c(42),d=c(45),p=Object(b.a)({apiKey:"AIzaSyAq_PWmr97j8odG0qzj1sJOJWlEX_Yddjo",authDomain:"leave-approval-system.firebaseapp.com",databaseURL:"https://leave-approval-system.firebaseapp.com",projectId:"leave-approval-system",storageBucket:"leave-approval-system.appspot.com",messagingSenderId:"691668587265",appId:"1:691668587265:web:9933f464a1c912bbba0100"}),u=Object(o.b)(p),h=(Object(d.a)(p),c(54),c(9)),O=function(e){return e.trigger?Object(h.jsx)("div",{className:"popup",children:Object(h.jsxs)("div",{className:"popup-inner",children:[Object(h.jsx)("button",{className:"close_btn",onClick:function(){return e.settrigger(!1)},children:"close"}),e.children]})}):""},m=(c(56),function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!1),a=Object(l.a)(r,2),j=a[0],i=a[1];return Object(n.useEffect)((function(){var e=Object(o.d)(Object(o.a)(u,"employee")),t=Object(o.c)(e,(function(e){var t=[];e.forEach((function(e){t.push(e.data()),console.log(e.data().phoneNumber)})),s(t),console.log(t)}));return function(){return t()}}),[]),Object(h.jsx)("div",{className:"employeelist",children:Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Phone Number"}),Object(h.jsx)("th",{})]})}),Object(h.jsx)("tbody",{children:c.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[" ",e.name]}),Object(h.jsxs)("td",{children:[" ",e.phoneNumber]}),Object(h.jsxs)("td",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:function(){return i(!0)},children:"Employee Details"}),Object(h.jsxs)(O,{trigger:j,settrigger:i,children:[Object(h.jsxs)("div",{className:"Name_popup",children:[Object(h.jsx)("strong",{children:" Name :"})," ",e.name]}),Object(h.jsxs)("div",{className:"Name_phonenumber",children:[Object(h.jsx)("strong",{children:" Phone Number : "}),e.phoneNumber]}),Object(h.jsxs)("div",{className:"Age_popup",children:[Object(h.jsx)("strong",{children:" Age :"}),e.age]}),Object(h.jsxs)("div",{className:"Gender_popup",children:[Object(h.jsx)("strong",{children:" Gender : "}),e.gender]}),Object(h.jsxs)("div",{className:"Experience_popup",children:[Object(h.jsx)("strong",{children:" Experience :"}),e.experience," yrs"]}),Object(h.jsxs)("div",{className:"approvedleave_popup",children:[Object(h.jsx)("strong",{children:" Approved Leave :"}),e.approvedleave]})]})]})," "]})]},e.phoneNumber)}))})]})})}),x=function(){return Object(h.jsxs)("div",{className:"adminpanel",children:[Object(h.jsxs)("div",{className:"adminpanel_header",children:[Object(h.jsx)("div",{children:"Admin Login"}),Object(h.jsx)(j.b,{to:"/addnewemployee",children:"+ New Employee"})]}),Object(h.jsx)(m,{})]})},v=c(0),f=c.n(v),g=c(2),N=(c(61),c(30)),y=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(),a=Object(l.a)(r,2),i=a[0],o=a[1],b=function(){var e=Object(g.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,Object(N.a)(Object(N.b)(u,"employee"),{name:c,phoneNumber:i,age:"",gender:"",experience:"",approvedleave:""});case 3:o(""),s(""),console.log(c),console.log(i);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"addnewemployee",children:[Object(h.jsx)(j.b,{className:"homeback",to:"./",children:"   Back to Home"}),Object(h.jsxs)("form",{onSubmit:b,children:[Object(h.jsxs)("label",{children:[" Name",Object(h.jsx)("input",{type:"text",onChange:function(e){return s(e.target.value)},required:!0,value:c})]}),Object(h.jsxs)("label",{children:[" Phone Number",Object(h.jsx)("input",{type:"number",onChange:function(e){return o(e.target.value)},required:!0,value:i})]}),Object(h.jsx)("button",{type:"submit",children:"Add Employee"})]})]})},_=function(){return Object(h.jsx)(j.a,{children:Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{path:"/addnewemployee",children:Object(h.jsx)(y,{})}),Object(h.jsx)(i.a,{path:"/",children:Object(h.jsx)(x,{})})]})})})};a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(_,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.ec8ef8ea.chunk.js.map