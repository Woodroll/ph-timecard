(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{140:function(t,e,n){},141:function(t,e,n){},163:function(t,e,n){"use strict";n.r(e);var a=n(3),c=n.n(a),o=n(45),i=n.n(o),s=(n(140),n(21)),r=n.p+"static/media/fillable.8a5c035d.pdf",l=(n(141),n(81)),u=n.n(l),O=n(101),d=n(102),j=n(118),b=n.n(j),m=n(120),f=n.n(m),h=n(221),g=n(6),x=function(t){var e=["MONIn","TUEIn","WEDIn","THURIn","FRIIn","SATIn","SUNIn","MONOut","TUEOut","WEDOut","THUROut","FRIOut","SATOut","SUNOut","MONIn_2","TUEIn_2","WEDIn_2","THURIn_2","FRIIn_2","SATIn_2","SUNIn_2","MONOut_2","TUEOut_2","WEDOut_2","THUROut_2","FRIOut_2","SATOut_2","SUNOut_2","MONIn_3","TUEIn_3","WEDIn_3","THURIn_3","FRIIn_3","SATIn_3","SUNIn_3","MONOut_3","TUEOut_3","WEDOut_3","THUROut_3","FRIOut_3","SATOut_3","SUNOut_3"],n=function(){var n=Object(O.a)(u.a.mark((function n(){var a,c,o,i,s,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=t.pdf,n.next=3,fetch(a,{headers:{"Content-Type":"application/pdf"}}).then((function(t){return console.log(t.headers),t.arrayBuffer()}));case 3:return c=n.sent,n.next=6,d.PDFDocument.load(c);case 6:return o=n.sent,i=o.getForm(),console.log(i.getFields().map((function(t){return t.getName()}))),Object.keys(t.timeCard).forEach((function(e){console.log("key:".concat(e,", value:").concat(t.timeCard[e])),i.getTextField(e).setText(t.timeCard[e])})),Object.keys(t.daysOBJ).forEach((function(n,a){if(console.log("key:".concat(n,", value:").concat(t.daysOBJ[n])),t.daysOBJ[n])if(e.includes(n)){console.log("found key:".concat(n));var c=Number(t.daysOBJ[n].slice(0,2)),o=t.daysOBJ[n].slice(3,5);if(c>12){var s=c-12;i.getTextField(n).setText("".concat(s,":").concat(o))}else i.getTextField(n).setText("".concat(c,":").concat(o))}else i.getTextField(n).setText(t.daysOBJ[n])})),s=new Date(Date.now()).toLocaleDateString(),i.getTextField("Employee_Signature").setText(t.timeCard.Name),i.getTextField("Employee_Sign_Date").setText(s),n.next=16,o.saveAsBase64({dataUri:!0});case 16:r=n.sent,b.a.saveAs(r,"Time Card ".concat(t.timeCard.Name," for ").concat(t.timeCard["Pay Week Ending"]),"application/pdf");case 18:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(g.jsx)(h.a,{variant:"contained",endIcon:Object(g.jsx)(f.a,{}),onClick:function(){n()},children:"Download PDF"})},p=n(7),v=n(29),y=n(208),T=n(212),I=n(216),_=n(222),S=n(223),R=n(210),D=n(207),E=n(213),N=n(215);function U(t){var e=t.daysOBJ,n=t.setDays,a=t.abvList;function c(t){var e=t.abv,n=t.daysOBJ;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(_.a,{variant:"body2",color:"textSecondary",align:"center",children:[e," - ",n["".concat(e,"Date_es_:date")]]}),Object(g.jsx)(_.a,{children:n["".concat(e,"HOURS WORKED")]?n["".concat(e,"HOURS WORKED")]+" hrs.":" -- "})]})}function o(t){return console.log(25*Math.round(t.slice(3,5)/15)*.01),Number(t.slice(0,2))+25*Math.round(t.slice(3,5)/15)*.01}function i(){var t=0;a.forEach((function(n){e["".concat(n,"HOURS WORKED")]&&(t+=Number(e["".concat(n,"HOURS WORKED")]))})),console.log("week total:",t),n((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(p.a)({},"GRAND TOTALHOURS WORKED",t.toString()))}))}function s(t){console.log("Calc Ran!!!",t);var a=0;e["".concat(t,"In")]&&e["".concat(t,"Out")]&&(a=o(e["".concat(t,"Out")])-o(e["".concat(t,"In")]),e["".concat(t,"In_2")]&&e["".concat(t,"Out_2")]&&(a+=o(e["".concat(t,"Out_2")])-o(e["".concat(t,"In_2")]),e["".concat(t,"In_3")]&&e["".concat(t,"Out_3")]&&(a+=o(e["".concat(t,"Out_3")])-o(e["".concat(t,"In_3")]),e["".concat(t,"In_4")]&&e["".concat(t,"Out_4")]&&(a+=o(e["".concat(t,"Out_4")])-o(e["".concat(t,"In_4")]))))),n((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(p.a)({},"".concat(t,"HOURS WORKED"),a.toString()))})),console.log("total:",a),i()}function r(t){n((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(p.a)({},t.target.name,t.target.value))}))}function l(t,n,a){return Object(g.jsx)(I.a,{item:!0,container:!0,fullWidth:!0,sx:12,mt:3,name:t,id:t,onClick:function(e){s(t),i()},onBlur:function(e){s(t),i()},children:Object(g.jsxs)(D.a,{spacing:1,alignItems:"stretch",direction:{xs:"row",sm:"column"},children:[Object(g.jsxs)(R.a,{variant:"outlined",fullWidth:!0,id:"".concat(t,"Type Reg Vac Sick Pers Hol").concat(n),label:Object(g.jsx)(N.a,{children:"Type"}),name:"".concat(t,"Type Reg Vac Sick Pers Hol").concat(n),value:e["".concat(t,"Type Reg Vac Sick Pers Hol").concat(n)],onChange:function(t){r(t)},sx:{width:150},children:[Object(g.jsx)(E.a,{value:"",children:"---"}),Object(g.jsx)(E.a,{value:"Reg",children:"Reg"}),Object(g.jsx)(E.a,{value:"Vac",children:"Vac"}),Object(g.jsx)(E.a,{value:"Sick",children:"Sick"}),Object(g.jsx)(E.a,{value:"Pers",children:"Pers"}),Object(g.jsx)(E.a,{value:"Hol",children:"Hol"})]}),Object(g.jsx)(T.a,{label:"In",type:"time",fullWidth:!0,name:"".concat(t,"In").concat(n),value:e["".concat(t,"In").concat(n)],onChange:r,InputLabelProps:{shrink:!0},inputProps:{step:1500},elevation:0}),Object(g.jsx)(T.a,{label:"Out",type:"time",fullWidth:!0,name:"".concat(t,"Out").concat(n),value:e["".concat(t,"Out").concat(n)],onChange:function(t){r(t)},InputLabelProps:{shrink:!0},inputProps:{step:1500}})]})},a)}return console.log(e),Object(g.jsx)(I.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:a.map((function(t,n){return Object(g.jsxs)(D.a,{item:!0,fullWidth:!0,sm:12/7,xs:12,container:!0,spacing:0,alignItems:"center",children:[Object(g.jsx)(D.a,{mt:3,children:Object(g.jsx)(c,{abv:t,daysOBJ:e})}),l(t,"",1),l(t,"_2",2),l(t,"_3",3)]},n)}))})}var W=function(t){var e=t.timeCard,n=t.setTimeCard,a=t.daysOBJ,c=t.setDays,o=t.abvList;return Object(g.jsxs)(S.a,{component:"main",children:[Object(g.jsx)(y.a,{}),Object(g.jsxs)("div",{className:"classes.paper",children:[Object(g.jsx)(_.a,{component:"h1",variant:"h3",children:"Time Card"}),Object(g.jsxs)("form",{className:"classes.form",onSubmit:function(t){t.preventDefault()},onInput:function(t){t.persist(),n((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(p.a)({},t.target.name,t.target.value))}))},noValidate:!0,children:[Object(g.jsxs)(I.a,{container:!0,spacing:2,children:[Object(g.jsx)(I.a,{item:!0,xs:12,sm:6,md:4,children:Object(g.jsx)(T.a,{variant:"outlined",required:!0,fullWidth:!0,id:"Name",label:"Name",name:"Name",value:e?e.Name:""})}),Object(g.jsx)(I.a,{item:!0,xs:12,sm:6,md:4,children:Object(g.jsx)(T.a,{variant:"outlined",required:!0,fullWidth:!0,id:"Position",label:"Position",name:"Position",value:e?e.Position:""})}),Object(g.jsx)(I.a,{item:!0,xs:12,sm:6,md:4,children:Object(g.jsx)(T.a,{type:"date",variant:"outlined",required:!0,fullWidth:!0,name:"Pay Week Ending",label:"Pay Week Ending",id:"PayWeekEnding",onChange:function(t){t.persist(),n((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(p.a)({},t.target.name,t.target.value))})),o.forEach((function(e,n){var a=new Date(Date.parse("".concat(t.target.value,"T00:00:00"))),o=new Date(a.setDate(a.getDate()-(6-n))),i="".concat(o.getMonth()+1,"/").concat(o.getDate());console.log("i:".concat(n,", date:").concat(o,", fd:").concat(i)),c((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(p.a)({},"".concat(e,"Date_es_:date"),i))}))}))},value:e?e["Pay Week Ending"]:"",InputLabelProps:{shrink:!0}})}),Object(g.jsx)(U,{daysOBJ:a,setDays:c,abvList:o})]}),Object(g.jsx)(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:"classes.submit",children:"Time Card"}),Object(g.jsx)(I.a,{container:!0,justify:"flex-end"})]})]})]})},k=(n(162),n(69)),C=n(70),P=function(){function t(e){Object(k.a)(this,t);for(var n=0;n<e.length;n++){this["".concat(e[n],"Date_es_:date")]=void 0,this["".concat(e[n],"HOURS WORKED")]=void 0;for(var a=1;a<4;a++){var c="";1!==a&&(c="_".concat(a)),this["".concat(e[n],"Type Reg Vac Sick Pers Hol").concat(c)]="",this["".concat(e[n],"In").concat(c)]=void 0,this["".concat(e[n],"Out").concat(c)]=void 0}}}return Object(C.a)(t,[{key:"GRAND TOTALHOURS WORKED",value:function(){return"null"}}]),t}(),H=n(209),F=n(218),A=n(219),J=n(220);var B=function(){var t=["MON","TUE","WED","THUR","FRI","SAT","SUN"],e=Object(a.useState)(new P(t)),n=Object(s.a)(e,2),c=n[0],o=n[1],i=Object(a.useState)({Name:void 0,Position:void 0,"Pay Week Ending":void 0}),l=Object(s.a)(i,2),u=l[0],O=l[1];return Object(a.useEffect)((function(){var t=localStorage.getItem("my-time-card");t&&O(JSON.parse(t));var e=localStorage.getItem("my-days");e&&o(JSON.parse(e))}),[]),Object(a.useEffect)((function(){localStorage.setItem("my-time-card",JSON.stringify(u)),localStorage.setItem("my-days",JSON.stringify(c))})),Object(g.jsx)(H.a,{injectFirst:!0,children:Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)("div",{className:"App-header",children:[Object(g.jsx)(x,{pdf:r,timeCard:u,daysOBJ:c}),Object(g.jsx)(W,{timeCard:u,setTimeCard:O,daysOBJ:c,setDays:o,abvList:t}),Object(g.jsx)(F.a,{sx:{position:"fixed",bottom:0,left:0,right:0},elevation:1,children:Object(g.jsxs)(A.a,{showLabels:!0,children:[Object(g.jsx)(J.a,{label:c["GRAND TOTALHOURS WORKED"]?"  TOTAL HOURS:".concat(c["GRAND TOTALHOURS WORKED"]):""}),Object(g.jsx)(x,{pdf:r,timeCard:u,daysOBJ:c})]})})]})})})},L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,226)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),o(t),i(t)}))};i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(B,{})}),document.getElementById("root")),L()}},[[163,1,2]]]);
//# sourceMappingURL=main.acd984fc.chunk.js.map