(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{129:function(t,e,a){},130:function(t,e,a){},148:function(t,e,a){"use strict";a.r(e);var c=a(4),n=a.n(c),o=a(42),s=a.n(o),i=(a(129),a(18)),r=(a.p,a.p+"static/media/fillable.8a5c035d.pdf"),u=(a(130),a(75)),l=a.n(u),d=a(89),O=a(71),j=a(105),b=a.n(j),f=a(6),h=function(t){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var a,c,n,o,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.pdf,e.next=3,fetch(a,{headers:{"Content-Type":"application/pdf"}}).then((function(t){return console.log(t.headers),t.arrayBuffer()}));case 3:return c=e.sent,e.next=6,O.PDFDocument.load(c);case 6:return n=e.sent,o=n.getForm(),console.log(o.getFields().map((function(t){return t.getName()}))),Object.keys(t.timeCard).forEach((function(e){console.log("key:".concat(e,", value:").concat(t.timeCard[e])),o.getTextField(e).setText(t.timeCard[e])})),Object.keys(t.daysOBJ).forEach((function(e,a){console.log("key:".concat(e,", value:").concat(t.daysOBJ[e])),t.daysOBJ[e]&&o.getTextField(e).setText(t.daysOBJ[e])})),e.next=13,n.saveAsBase64({dataUri:!0});case 13:s=e.sent,t.setUpdatedPDF(s),b.a.saveAs(s,"pdf-lib_form_creation_example.pdf","application/pdf");case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{children:Object(f.jsx)("button",{onClick:function(){e()},children:"Fill PDF"})})},p=a(7),m=a(29),v=a(208),g=a(198),x=a(201),y=a(204),S=a(209),D=a(207),P=a(206),R=a(199),k=a(202);function _(t){var e=t.daysOBJ,a=t.setDays,c=t.abvList;function n(t){return Number(t.slice(0,2))+Math.round(t.slice(3,5))/15*25*.01}function o(t){var o=0;e["".concat(t,"In")]&&e["".concat(t,"Out")]&&(o=n(e["".concat(t,"Out")])-n(e["".concat(t,"In")]),e["".concat(t,"In_2")]&&e["".concat(t,"Out_2")]&&(o+=n(e["".concat(t,"Out_2")])-n(e["".concat(t,"In_2")]),e["".concat(t,"In_3")]&&e["".concat(t,"Out_3")]&&(o+=n(e["".concat(t,"Out_3")])-n(e["".concat(t,"In_3")]),e["".concat(t,"In_4")]&&e["".concat(t,"Out_4")]&&(o+=n(e["".concat(t,"Out_4")])-n(e["".concat(t,"In_4")]))))),console.log("total:",o),a((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(p.a)({},"".concat(t,"HOURS WORKED"),o.toString()))})),function(){var t=0;c.forEach((function(a){e["".concat(a,"HOURS WORKED")]&&(t+=Number(e["".concat(a,"HOURS WORKED")]))})),console.log("week total:",t),a((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(p.a)({},"GRAND TOTALHOURS WORKED",t.toString()))}))}()}function s(t,e){t.persist(),console.log("error:",t.target),a((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(p.a)({},t.target.name,t.target.value))}))}function i(t,a){return Object(f.jsxs)("div",{children:[Object(f.jsxs)(R.a,{variant:"outlined",fullWidth:!0,id:"".concat(t,"Type Reg Vac Sick Pers Hol").concat(a),label:"Type",name:"".concat(t,"Type Reg Vac Sick Pers Hol").concat(a),value:e["".concat(t,"Type Reg Vac Sick Pers Hol").concat(a)],onChange:s,children:[Object(f.jsx)(k.a,{value:"Reg",children:"Reg"}),Object(f.jsx)(k.a,{value:"Vac",children:"Vac"}),Object(f.jsx)(k.a,{value:"Sick",children:"Sick"}),Object(f.jsx)(k.a,{value:"Pers",children:"Pers"}),Object(f.jsx)(k.a,{value:"Hol",children:"Hol"})]}),Object(f.jsx)(x.a,{label:"In",type:"time",name:"".concat(t,"In").concat(a),value:e["".concat(t,"In").concat(a)],onChange:s,InputLabelProps:{shrink:!0},inputProps:{step:1500},sx:{width:150}}),Object(f.jsx)(x.a,{label:"Out",type:"time",name:"".concat(t,"Out").concat(a),value:e["".concat(t,"Out").concat(a)],onChange:s,onBlur:function(e){o(t)},InputLabelProps:{shrink:!0},inputProps:{step:1500},sx:{width:150}})]})}return console.log(e),Object(f.jsx)("div",{children:c.map((function(t,a){return Object(f.jsxs)(y.a,{children:[Object(f.jsxs)("p",{children:[t," - ",e["".concat(t,"Date_es_:date")],e["".concat(t,"HOURS WORKED")]?" - "+e["".concat(t,"HOURS WORKED")]+" hrs.":""]}),i(t,""),i(t,"_2"),i(t,"_3"),i(t,"_4")]})}))})}var T=function(t){var e=t.timeCard,a=t.setTimeCard,c=(t.setters,t.days,t.daysOBJ),n=t.setDays,o=t.abvList;return Object(f.jsxs)(P.a,{component:"main",maxWidth:"xs",children:[Object(f.jsx)(g.a,{}),Object(f.jsxs)("div",{className:"classes.paper",children:[Object(f.jsx)(D.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(f.jsxs)("form",{className:"classes.form",onSubmit:function(t){t.preventDefault()},onInput:function(t){t.persist(),a((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(p.a)({},t.target.name,t.target.value))}))},noValidate:!0,children:[Object(f.jsxs)(y.a,{container:!0,spacing:2,children:[Object(f.jsx)(y.a,{item:!0,xs:12,sm:6,children:Object(f.jsx)(x.a,{variant:"outlined",required:!0,fullWidth:!0,id:"Name",label:"Name",name:"Name",value:e?e.Name:""})}),Object(f.jsx)(y.a,{item:!0,xs:12,sm:6,children:Object(f.jsx)(x.a,{variant:"outlined",required:!0,fullWidth:!0,id:"Position",label:"Position",name:"Position",value:e?e.Position:""})}),Object(f.jsx)(y.a,{item:!0,xs:12,children:Object(f.jsx)(x.a,{type:"date",variant:"outlined",required:!0,fullWidth:!0,name:"Pay Week Ending",label:"Pay Week Ending",id:"PayWeekEnding",onChange:function(t){t.persist(),a((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(p.a)({},t.target.name,t.target.value))})),o.forEach((function(e,a){var o=new Date(Date.parse("".concat(t.target.value,"T00:00:00"))),s=new Date(o.setDate(o.getDate()-(6-a))),i="".concat(s.getMonth()+1,"/").concat(s.getDate());console.log("i:".concat(a,", date:").concat(s,", fd:").concat(i)),n((function(t){return Object(m.a)(Object(m.a)({},t),{},Object(p.a)({},"".concat(e,"Date_es_:date"),i))})),console.log(c)}))},value:e?e["Pay Week Ending"]:"",sx:{width:220},InputLabelProps:{shrink:!0}})}),Object(f.jsx)(_,{daysOBJ:c,setDays:n,abvList:o})]}),Object(f.jsx)(v.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:"classes.submit",children:"Sign Up"}),Object(f.jsx)(y.a,{container:!0,justify:"flex-end"})]})]}),Object(f.jsx)(S.a,{mt:5})]})},I=(a(147),a(48)),E=a(49),N=function(){function t(e){Object(I.a)(this,t),this.date=void 0,this["".concat(e,"Date_es_:date")]=void 0;for(var a=1;a<5;a++){var c="";1!==a&&(c="_".concat(a)),this["".concat(e,"Type Reg Vac Sick Pers Hol").concat(c)]=void 0,this["".concat(e,"In").concat(c)]=void 0,this["".concat(e,"Out").concat(c)]=void 0}this.abv=e,this.num1=2,this.num2=3,this["".concat(e,"HOURS WORKED")]={function:function(){return this.num1+this.num2}}}return Object(E.a)(t,[{key:"calcHours",value:function(){return this.num1+this.num2}}]),t}(),w=function(){function t(e){Object(I.a)(this,t);for(var a=0;a<e.length;a++){this["".concat(e[a],"Date_es_:date")]=void 0,this["".concat(e[a],"HOURS WORKED")]=void 0;for(var c=1;c<4;c++){var n="";1!==c&&(n="_".concat(c)),this["".concat(e[a],"Type Reg Vac Sick Pers Hol").concat(n)]="Reg",this["".concat(e[a],"In").concat(n)]=void 0,this["".concat(e[a],"Out").concat(n)]=void 0}}}return Object(E.a)(t,[{key:"calcHours",value:function(){return null}}]),t}();var H=function(){var t=Object(c.useState)(0),e=Object(i.a)(t,2),a=e[0],n=e[1],o=Object(c.useState)(),s=Object(i.a)(o,2),u=(s[0],s[1],Object(c.useState)(new N("MON"))),l=Object(i.a)(u,2),d=l[0],O=l[1],j=Object(c.useState)(new N("TUE")),b=Object(i.a)(j,2),p=b[0],m=b[1],v=Object(c.useState)(new N("WED")),g=Object(i.a)(v,2),x=g[0],y=g[1],S=Object(c.useState)(new N("THUR")),D=Object(i.a)(S,2),P=D[0],R=D[1],k=Object(c.useState)(new N("FRI")),_=Object(i.a)(k,2),I=_[0],E=_[1],H=Object(c.useState)(new N("SAT")),W=Object(i.a)(H,2),U=W[0],C=W[1],F=Object(c.useState)(new N("SUN")),J=Object(i.a)(F,2),B=J[0],L=J[1],A=["MON","TUE","WED","THUR","FRI","SAT","SUN"],K=Object(c.useState)(new w(A)),V=Object(i.a)(K,2),M=V[0],q=V[1],G=Object(c.useState)({Name:void 0,Position:void 0,"Pay Week Ending":void 0}),z=Object(i.a)(G,2),Q=z[0],X=z[1],Y=[O,m,y,R,E,C,L],Z=[d,p,x,P,I,U,B],$=new N("SUN","2021-07-04");$.num2=10,console.log("num 2:".concat($.num2,", Hours worked: ").concat($.calcHours()));var tt=new Date(Date.parse("2021-07-04T00:00:00"));return tt.setDate(tt.getDate()-6),tt.toLocaleString("en-us",{weekday:"short"}).toUpperCase(),console.log(Q.Days?"True":"Fal"),Object(c.useEffect)((function(){var t=localStorage.getItem("my-time-card");t&&X(JSON.parse(t));var e=localStorage.getItem("my-days");e&&q(JSON.parse(e))}),[]),Object(c.useEffect)((function(){localStorage.setItem("my-time-card",JSON.stringify(Q)),localStorage.setItem("my-days",JSON.stringify(M))})),Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("header",{className:"App-header",children:[Object(f.jsx)(h,{pdf:r,updatedPDF:a,setUpdatedPDF:n,timeCard:Q,daysOBJ:M}),Object(f.jsx)(T,{timeCard:Q,setTimeCard:X,setters:Y,days:Z,daysOBJ:M,setDays:q,abvList:A})]})})},W=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,212)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,o=e.getLCP,s=e.getTTFB;a(t),c(t),n(t),o(t),s(t)}))};s.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(H,{})}),document.getElementById("root")),W()}},[[148,1,2]]]);
//# sourceMappingURL=main.c1149ac7.chunk.js.map