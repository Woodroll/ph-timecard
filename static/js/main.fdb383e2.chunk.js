(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{140:function(t,e,n){},141:function(t,e,n){},163:function(t,e,n){"use strict";n.r(e);var a=n(3),c=n.n(a),o=n(45),i=n.n(o),s=(n(140),n(7)),r=n(25),l=n(21),u=n.p+"static/media/fillable.8a5c035d.pdf",O=(n(141),n(80)),d=n.n(O),j=n(101),b=n(102),m=n(118),f=n.n(m),h=n(120),g=n.n(h),x=n(222),p=n(6),v=function(t){var e=["MONIn","TUEIn","WEDIn","THURIn","FRIIn","SATIn","SUNIn","MONOut","TUEOut","WEDOut","THUROut","FRIOut","SATOut","SUNOut","MONIn_2","TUEIn_2","WEDIn_2","THURIn_2","FRIIn_2","SATIn_2","SUNIn_2","MONOut_2","TUEOut_2","WEDOut_2","THUROut_2","FRIOut_2","SATOut_2","SUNOut_2","MONIn_3","TUEIn_3","WEDIn_3","THURIn_3","FRIIn_3","SATIn_3","SUNIn_3","MONOut_3","TUEOut_3","WEDOut_3","THUROut_3","FRIOut_3","SATOut_3","SUNOut_3"],n=function(){var n=Object(j.a)(d.a.mark((function n(){var a,c,o,i,s,r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=t.pdf,n.next=3,fetch(a,{headers:{"Content-Type":"application/pdf"}}).then((function(t){return console.log(t.headers),t.arrayBuffer()}));case 3:return c=n.sent,n.next=6,b.PDFDocument.load(c);case 6:return o=n.sent,i=o.getForm(),console.log(i.getFields().map((function(t){return t.getName()}))),Object.keys(t.timeCard).forEach((function(e){console.log("key:".concat(e,", value:").concat(t.timeCard[e])),i.getTextField(e).setText(t.timeCard[e])})),Object.keys(t.daysOBJ).forEach((function(n,a){if(console.log("key:".concat(n,", value:").concat(t.daysOBJ[n])),t.daysOBJ[n])if(e.includes(n)){console.log("found key:".concat(n));var c=Number(t.daysOBJ[n].slice(0,2)),o=t.daysOBJ[n].slice(3,5);if(c>12){var s=c-12;i.getTextField(n).setText("".concat(s,":").concat(o))}else i.getTextField(n).setText("".concat(c,":").concat(o))}else i.getTextField(n).setText(t.daysOBJ[n])})),s=new Date(Date.now()).toLocaleDateString(),i.getTextField("Employee_Signature").setText(t.timeCard.Name),i.getTextField("Employee_Sign_Date").setText(s),n.next=16,o.saveAsBase64({dataUri:!0});case 16:r=n.sent,f.a.saveAs(r,"Time Card ".concat(t.timeCard.Name," for ").concat(t.timeCard["Pay Week Ending"]),"application/pdf");case 18:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(p.jsx)(x.a,{variant:"contained",endIcon:Object(p.jsx)(g.a,{}),onClick:function(){n()},children:"Download PDF"})},y=n(209),T=n(213),I=n(217),_=n(223),S=n(224),R=n(211),D=n(208),E=n(214),N=n(216);function U(t){var e=t.daysOBJ,n=t.setDays,a=t.abvList;function c(t){var e=t.abv,n=t.daysOBJ;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(_.a,{variant:"body2",color:"textSecondary",align:"center",children:[e," - ",n["".concat(e,"Date_es_:date")]]}),Object(p.jsx)(_.a,{children:n["".concat(e,"HOURS WORKED")]?n["".concat(e,"HOURS WORKED")]+" hrs.":" -- "})]})}function o(t){return console.log(25*Math.round(t.slice(3,5)/15)*.01),Number(t.slice(0,2))+25*Math.round(t.slice(3,5)/15)*.01}function i(){var t=0;a.forEach((function(n){e["".concat(n,"HOURS WORKED")]&&(t+=Number(e["".concat(n,"HOURS WORKED")]))})),console.log("week total:",t),n((function(e){return Object(r.a)(Object(r.a)({},e),{},{"GRAND TOTALHOURS WORKED":t.toString()})}))}function l(t){console.log("Calc Ran!!!",t);var a=0;e["".concat(t,"In")]&&e["".concat(t,"Out")]&&(a=o(e["".concat(t,"Out")])-o(e["".concat(t,"In")]),e["".concat(t,"In_2")]&&e["".concat(t,"Out_2")]&&(a+=o(e["".concat(t,"Out_2")])-o(e["".concat(t,"In_2")]),e["".concat(t,"In_3")]&&e["".concat(t,"Out_3")]&&(a+=o(e["".concat(t,"Out_3")])-o(e["".concat(t,"In_3")]),e["".concat(t,"In_4")]&&e["".concat(t,"Out_4")]&&(a+=o(e["".concat(t,"Out_4")])-o(e["".concat(t,"In_4")]))))),n((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(s.a)({},"".concat(t,"HOURS WORKED"),a.toString()))})),console.log("total:",a),i()}function u(t){n((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(s.a)({},t.target.name,t.target.value))})),i()}function O(t,n,a){return Object(p.jsx)(I.a,{item:!0,container:!0,fullWidth:!0,sx:12,mt:3,name:t,id:t,onClick:function(e){l(t),i()},onBlur:function(e){l(t),i()},children:Object(p.jsxs)(D.a,{spacing:1,alignItems:"stretch",direction:{xs:"row",sm:"column"},children:[Object(p.jsxs)(R.a,{variant:"outlined",fullWidth:!0,id:"".concat(t,"Type Reg Vac Sick Pers Hol").concat(n),label:Object(p.jsx)(N.a,{children:"Type"}),name:"".concat(t,"Type Reg Vac Sick Pers Hol").concat(n),value:e["".concat(t,"Type Reg Vac Sick Pers Hol").concat(n)],onChange:function(t){u(t)},sx:{width:150},children:[Object(p.jsx)(E.a,{value:"",children:"---"}),Object(p.jsx)(E.a,{value:"Reg",children:"Reg"}),Object(p.jsx)(E.a,{value:"Vac",children:"Vac"}),Object(p.jsx)(E.a,{value:"Sick",children:"Sick"}),Object(p.jsx)(E.a,{value:"Pers",children:"Pers"}),Object(p.jsx)(E.a,{value:"Hol",children:"Hol"})]}),Object(p.jsx)(T.a,{label:"In",type:"time",fullWidth:!0,name:"".concat(t,"In").concat(n),value:e["".concat(t,"In").concat(n)],onChange:u,InputLabelProps:{shrink:!0,elevation:0},inputProps:{step:1500},elevation:0}),Object(p.jsx)(T.a,{label:"Out",type:"time",fullWidth:!0,name:"".concat(t,"Out").concat(n),value:e["".concat(t,"Out").concat(n)],onChange:function(t){u(t)},InputLabelProps:{shrink:!0},inputProps:{step:1500}})]})},a)}return console.log(e),Object(p.jsx)(I.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:a.map((function(t,n){return Object(p.jsxs)(D.a,{item:!0,fullWidth:!0,sm:12,xs:12,container:!0,spacing:0,alignItems:"center",children:[Object(p.jsx)(D.a,{mt:3,children:Object(p.jsx)(c,{abv:t,daysOBJ:e})}),O(t,"",1),O(t,"_2",2),O(t,"_3",3)]},n)}))})}var W=function(t){var e=t.timeCard,n=t.setTimeCard,a=t.daysOBJ,c=t.setDays,o=t.abvList;return Object(p.jsxs)(S.a,{maxWidth:"lg",component:"main",children:[Object(p.jsx)(y.a,{}),Object(p.jsxs)("div",{className:"classes.paper",children:[Object(p.jsx)(_.a,{component:"h1",variant:"h3",children:"Time Card"}),Object(p.jsxs)("form",{className:"classes.form",onSubmit:function(t){t.preventDefault()},onInput:function(t){t.persist(),n((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(s.a)({},t.target.name,t.target.value))}))},noValidate:!0,children:[Object(p.jsxs)(I.a,{container:!0,spacing:2,children:[Object(p.jsx)(I.a,{item:!0,xs:12,sm:6,md:4,children:Object(p.jsx)(T.a,{variant:"outlined",required:!0,fullWidth:!0,id:"Name",label:"Name",name:"Name",value:e?e.Name:"",InputLabelProps:{shrink:!0}})}),Object(p.jsx)(I.a,{item:!0,xs:12,sm:6,md:4,children:Object(p.jsx)(T.a,{variant:"outlined",required:!0,fullWidth:!0,id:"Position",label:"Position",name:"Position",value:e?e.Position:""})}),Object(p.jsx)(I.a,{item:!0,xs:12,sm:6,md:4,children:Object(p.jsx)(T.a,{type:"date",variant:"outlined",required:!0,fullWidth:!0,name:"Pay Week Ending",label:"Pay Week Ending",id:"PayWeekEnding",onChange:function(t){t.persist(),n((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(s.a)({},t.target.name,t.target.value))})),o.forEach((function(e,n){var a=new Date(Date.parse("".concat(t.target.value,"T00:00:00"))),o=new Date(a.setDate(a.getDate()-(6-n))),i="".concat(o.getMonth()+1,"/").concat(o.getDate());console.log("i:".concat(n,", date:").concat(o,", fd:").concat(i)),c((function(t){return Object(r.a)(Object(r.a)({},t),{},Object(s.a)({},"".concat(e,"Date_es_:date"),i))}))}))},value:e?e["Pay Week Ending"]:"",InputLabelProps:{shrink:!0}})}),Object(p.jsx)(U,{daysOBJ:a,setDays:c,abvList:o})]}),Object(p.jsx)(x.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:"classes.submit",children:"Time Card"}),Object(p.jsx)(I.a,{container:!0,justify:"flex-end"})]})]})]})},k=(n(162),n(69)),C=n(70),P=function(){function t(e){Object(k.a)(this,t);for(var n=0;n<e.length;n++){this["".concat(e[n],"Date_es_:date")]=void 0,this["".concat(e[n],"HOURS WORKED")]=void 0;for(var a=1;a<4;a++){var c="";1!==a&&(c="_".concat(a)),this["".concat(e[n],"Type Reg Vac Sick Pers Hol").concat(c)]="",this["".concat(e[n],"In").concat(c)]=void 0,this["".concat(e[n],"Out").concat(c)]=void 0}}}return Object(C.a)(t,[{key:"GRAND TOTALHOURS WORKED",value:function(){return"null"}}]),t}(),H=n(210),F=n(219),J=n(220),A=n(221);var B=function(){var t=["MON","TUE","WED","THUR","FRI","SAT","SUN"],e=Object(a.useState)(new P(t)),n=Object(l.a)(e,2),c=n[0],o=n[1],i=Object(a.useState)({Name:void 0,Position:void 0,"Pay Week Ending":void 0}),s=Object(l.a)(i,2),r=s[0],O=s[1];return Object(a.useEffect)((function(){var t=localStorage.getItem("my-time-card");t&&O(JSON.parse(t));var e=localStorage.getItem("my-days");e&&o(JSON.parse(e))}),[]),Object(a.useEffect)((function(){localStorage.setItem("my-time-card",JSON.stringify(r)),localStorage.setItem("my-days",JSON.stringify(c))})),Object(p.jsx)(H.a,{injectFirst:!0,children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(v,{pdf:u,timeCard:r,daysOBJ:c}),Object(p.jsx)(W,{timeCard:r,setTimeCard:O,daysOBJ:c,setDays:o,abvList:t}),Object(p.jsx)(F.a,{sx:{position:"fixed",bottom:0,left:0,right:0},elevation:1,children:Object(p.jsxs)(J.a,{showLabels:!0,children:[Object(p.jsx)(A.a,{label:c["GRAND TOTALHOURS WORKED"]?"  TOTAL HOURS:".concat(c["GRAND TOTALHOURS WORKED"]):""}),Object(p.jsx)(v,{pdf:u,timeCard:r,daysOBJ:c})]})})]})})},L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,227)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),o(t),i(t)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(B,{})}),document.getElementById("root")),L()}},[[163,1,2]]]);
//# sourceMappingURL=main.fdb383e2.chunk.js.map