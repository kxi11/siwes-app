(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{171:function(e,t,n){"use strict";n.d(t,"a",(function(){return je}));var a=n(33),c=n.n(a),r=n(34),o=n.n(r),i=n(53),s=n.n(i),l=n(54),u=n.n(l),j=n(28),b=n.n(j),d=(n(229),n(0)),h=n.n(d),p=(n(25),n(11)),m=n(5),O=n(4),f=n(19),x=n(1),y=m.a.create({header:{height:60,alignItems:"center",justifyContent:"center"},title:{color:"grey",fontSize:28,fontWeight:"900",textTransform:"uppercase"}}),g=function(e){return Object(x.jsx)(O.a,{style:y.header,children:Object(x.jsx)(f.a,{style:y.title,children:e.title})})},v=n(65),C=n(48),N=(n(197),m.a.create({inputContainer:{flexDirection:"row",justifyContent:"space-between",shadowOffset:{width:0,height:3},shadowColor:"#171717",shadowOpacity:.1},input:{backgroundColor:"#f3f3f3",flex:1,fontSize:18,height:35},addButton:{width:100,backgroundColor:"#ffce00",alignItems:"center",justifyContent:"center"},addButtonText:{color:"#171717",fontSize:18,fontWeight:"700"}}),n(151));function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=b()(e);if(t){var c=b()(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return u()(this,n)}}!function(e){s()(n,e);var t=k(n);function n(e){return c()(this,n),t.call(this,e)}o()(n,[{key:"render",value:function(){var e=this,t=this.props.logItem;return Object(x.jsxs)(C.a,{style:P.logItem,children:[Object(x.jsx)(f.a,{style:t.supervisorApproval?{color:"#AAAAAA"}:{color:"#313131"},children:t.entry}),Object(x.jsx)(N.a,{title:"Remove",color:t.supervisorApproval?"rgba(200, 0, 0, 0.5)":"rgba(200, 0, 0, 1)",onPress:function(){return e.props.removeLog()}})]})}}])}(h.a.Component);var P=m.a.create({logItem:{width:"100%",height:40,borderBottomColor:"#DDD",borderBottomWidth:1,flexDirection:"row",alignItems:"center",justifyContent:"center",paddingLeft:15}}),T=n(244),L=n(246),w=n(7),S=n.n(w),E=n(42),I=n(78),A=n(154),D=n(49),R=n(17),F=n(152),G=n(60),U=Object(F.a)({apiKey:"AIzaSyCLR8XlGiAJAMIxCEKh144Uso849fUv1uk",authDomain:"siwesapp-99c10.firebaseapp.com",projectId:"siwesapp-99c10",storageBucket:"siwesapp-99c10.appspot.com",messagingSenderId:"854600264735",appId:"1:854600264735:web:81e96d486daee00e7b392a"}),W=Object(I.b)(U),B=Object(R.k)(U),M=Object(G.b)(U),H=(n(94),n(249)),z=function(){var e=Object(d.useState)(""),t=S()(e,2),n=t[0],a=t[1],c=Object(d.useState)(""),r=S()(c,2),o=r[0],i=r[1],s=Object(E.k)();Object(R.b)(B,"profiles");return Object(x.jsxs)(A.a,{style:Y.container,behavior:"padding",children:[Object(x.jsx)(O.a,{children:Object(x.jsx)(D.a,{style:{width:250,height:250},source:{uri:"https://yt3.ggpht.com/a/AGF-l79SeAEqp4CvG_EAONZnGRfG0eK_W_Iopwgb1Q=s900-c-k-c0xffffffff-no-rj-mo"}})}),Object(x.jsx)(g,{title:"DIGITAL LOGBOOK"}),Object(x.jsxs)(O.a,{style:Y.inputContainer,children:[Object(x.jsx)(v.a,{placeholder:"Email",value:n,onChangeText:function(e){return a(e)},style:Y.input}),Object(x.jsx)(v.a,{placeholder:"Password",value:o,onChangeText:function(e){return i(e)},style:Y.input,secureTextEntry:!0})]}),Object(x.jsxs)(O.a,{style:Y.buttonContainer,children:[Object(x.jsx)(C.a,{onPress:function(){Object(I.c)(W,n,o).then((function(e){var t=e.user;console.log("Logged in with: ",t.email)})).catch((function(e){return alert(e.message)})),W.currentUser&&s.replace("Home")},style:Y.button,children:Object(x.jsx)(H.a,{children:"Login"})}),o?Object(x.jsx)(C.a,{onPress:function(){Object(I.a)(W,n,o).then((function(e){var t=e.user;console.log("Registered in with: ",t.email)})).catch((function(e){return alert(e.message)})),W.currentUser&&s.replace("Register")},children:Object(x.jsx)(H.a,{className:"mt-3",children:"Register"})}):Object(x.jsx)(O.a,{})]})]})},Y=m.a.create({container:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"white"},inputContainer:{width:"80%"},input:{backgroundColor:"white",paddingHorizontal:15,paddingVertical:10,borderRadius:10,marginTop:5},buttonContainer:{width:"60%",justifyContent:"center",alignItems:"center",marginTop:40},buttonText:{color:"white",fontWeight:"700",fontSize:16},buttonOutline:{backgroundColor:"white",marginTop:5,borderColor:"#0782F9",borderWidth:2},buttonOutlineText:{color:"#0782F9",fontWeight:"700",fontSize:16}}),V=n(14),K=n.n(V),_=n(8),J=n.n(_),q=n(247),Q=n(241),X=n(248),Z=n(242),$=(n(227),n(245));function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){J()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ne=function(){var e=Object(E.k)(),t=Object(d.useState)([]),n=S()(t,2),a=n[0],c=n[1],r=Object(d.useState)({userId:W.currentUser.uid,activity:[""],Day:"",locations:[""],Week:""}),o=S()(r,2),i=o[0],s=o[1],l=Object(d.useState)(!1),u=S()(l,2),j=u[0],b=u[1],h=Object(R.b)(B,"logs");Object(d.useEffect)((function(){Object(R.m)(h,(function(e){c(e.docs.map((function(e){return te({id:e.id,viewing:!1},e.data())})))}))}),[]);var p=function(e){e.preventDefault(),i.Week&&i.Day&&i.activity&&i.locations?(Object(R.a)(h,i),s({userId:W.currentUser.uid,activity:[""],Day:"",locations:[""],Week:""})):alert("Please fill out all fields")};return Object(x.jsx)(O.a,{className:"App",children:Object(x.jsxs)(O.a,{children:[Object(x.jsx)($.a,{className:"navbar navbar-expand-lg navbar-light bg-dark mb-3",children:Object(x.jsxs)("div",{className:"container-fluid",children:[Object(x.jsx)(g,{title:"My Logs"}),Object(x.jsx)(H.a,{className:"btn-dark",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample",children:"Profile"})]})}),Object(x.jsx)("div",{className:"container-fluid d-grid justify-content-center",children:Object(x.jsx)("div",{className:"collapse",id:"collapseExample",children:Object(x.jsxs)($.a.Text,{className:"container-fluid",children:[Object(x.jsx)(H.a,{className:"m-3",onClick:function(){e.replace("Profile")},children:Object(x.jsx)(f.a,{children:"Detailed Profile"})}),Object(x.jsx)(H.a,{className:"m-3 btn-danger",onClick:function(){W.signOut().then((function(){e.replace("Login")})).catch((function(e){return alert(e.message)}))},children:Object(x.jsx)(f.a,{children:"Sign out"})})]})})}),Object(x.jsx)(H.a,{className:"m-3 d-grid gap-2 col-6 mx-auto btn-lg","data-bs-toggle":"collapse","data-bs-target":"#modalExample","aria-expanded":"false","aria-controls":"modalExample",onClick:function(){return b(!j)},title:"Add Log",children:Object(x.jsx)(f.a,{children:"Add Log"})}),j&&Object(x.jsx)(O.a,{className:"collapse fade",id:"modalExample",children:Object(x.jsx)("div",{className:"container-fluid",children:Object(x.jsxs)(O.a,{className:"popup-inner",children:[Object(x.jsx)("div",{className:"modal-title",children:Object(x.jsx)(f.a,{className:"",children:"Add a new log"})}),Object(x.jsxs)(q.a,{className:"container-fluid mb-3",onSubmit:p,children:[Object(x.jsxs)(q.a.Group,{children:[Object(x.jsx)(q.a.Label,{children:"Week"}),Object(x.jsx)(q.a.Control,{type:"text",placeholder:"Ex. Week 1, Week 2...",value:i.Week,onChange:function(e){return s(te(te({},i),{},{Week:e.target.value}))}})]}),Object(x.jsxs)(q.a.Group,{children:[Object(x.jsx)(q.a.Label,{children:"Day"}),Object(x.jsx)(q.a.Control,{type:"text",placeholder:"Ex. Monday Jan. 1 2020",value:i.Day,onChange:function(e){return s(te(te({},i),{},{Day:e.target.value}))}})]}),Object(x.jsxs)(q.a.Group,{children:[Object(x.jsx)(q.a.Label,{className:"mt-3",children:"Activity"}),i.activity.map((function(e,t){return Object(x.jsx)(q.a.Control,{type:"text",placeholder:"What did you do today?",value:e,onChange:function(e){return function(e,t){var n=K()(i.activity);n[t]=e.target.value,s(te(te({},i),{},{activity:n}))}(e,t)}},t)})),Object(x.jsx)(H.a,{className:"mt-2",type:"button",onClick:function(){s(te(te({},i),{},{activity:[].concat(K()(i.activity),[""])}))},title:"Add Activity",children:Object(x.jsx)(f.a,{children:"Add Activity"})})]}),Object(x.jsxs)(q.a.Group,{children:[Object(x.jsx)(q.a.Label,{className:"mt-2",children:"Location"}),i.locations.map((function(e,t){return Object(x.jsx)(q.a.Control,{type:"text",placeholder:"Where did you work today?",value:e,onChange:function(e){return function(e,t){var n=K()(i.locations);n[t]=e.target.value,s(te(te({},i),{},{locations:n}))}(e,t)}},t)})),Object(x.jsx)(H.a,{className:"mt-2",type:"button",onClick:function(){s(te(te({},i),{},{locations:[].concat(K()(i.locations),[""])}))},title:"Add Location",children:Object(x.jsx)(f.a,{children:"Add Location"})})]}),Object(x.jsxs)("div",{className:"btn-group-vertical container-fluid mt-3 d-grid justify-content-center",children:[Object(x.jsx)(H.a,{className:"btn-primary",type:"submit",onClick:p,title:"Submit",children:Object(x.jsx)(f.a,{children:"Submit"})}),Object(x.jsx)(H.a,{className:"btn-danger remove",type:"button",onClick:function(){return b(!1)},title:"Close",children:Object(x.jsx)(f.a,{children:"Close"})})]})]})]})})}),Object(x.jsx)("div",{className:"container-fluid",children:Object(x.jsx)(Q.a,{className:"row row-cols-2 m-3 p-3",children:a.filter((function(e){if(e.userId===W.currentUser.uid)return e})).map((function(e,t){return Object(x.jsxs)(X.a,{className:"col",children:[Object(x.jsx)(X.a.Title,{className:"mt-3",children:e.Week}),Object(x.jsx)(X.a.Text,{dangerouslySetInnerHTML:{__html:e.Day}}),e.viewing&&Object(x.jsxs)(X.a.Body,{children:[Object(x.jsx)(X.a.Text,{className:"h6",children:"Activities"}),Object(x.jsx)(X.a.Text,{children:e.activity.map((function(e,t){return Object(x.jsx)(X.a.Text,{children:e},t)}))}),Object(x.jsx)(X.a.Text,{className:"h6",children:"Locations"}),Object(x.jsx)(X.a.Text,{children:e.locations.map((function(e,t){return Object(x.jsx)(f.a,{children:e},t)}))})]}),Object(x.jsxs)(Z.a,{className:"btn-group-vertical",children:[Object(x.jsx)(H.a,{className:"d-grid gap-2 col-6 mx-auto",onClick:function(){return function(e){var t=K()(a);t.forEach((function(t){t.id===e?t.viewing=!t.viewing:t.viewing=!1})),c(t)}(e.id)},title:"View",children:Object(x.jsxs)(f.a,{children:["View ",e.viewing?"less":"more"]})}),Object(x.jsx)(H.a,{className:"remove d-grid gap-2 col-6 mx-auto btn-danger mb-4",onClick:function(){return t=e.id,void Object(R.c)(Object(R.d)(B,"logs",t));var t},title:"Delete",children:Object(x.jsx)(f.a,{children:"Delete"})})]})]},e.id)}))})})]})})},ae=(n(218),n(243));function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var re=function(){var e=Object(E.k)(),t=Object(d.useState)([]),n=S()(t,2),a=n[0],c=n[1],r=Object(G.d)(M,"images/"),o=Object(d.useState)([]),i=S()(o,2),s=i[0],l=i[1],u=Object(R.b)(B,"profiles");Object(d.useEffect)((function(){Object(R.m)(u,(function(e){l(e.docs.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){J()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:e.id,viewing:!1},e.data())})))}))}),[]);return Object(d.useEffect)((function(){Object(G.c)(r).then((function(e){e.items.filter((function(e){if(e.name===W.currentUser.uid)return e})).forEach((function(e){Object(G.a)(e).then((function(e){c((function(t){return[].concat(K()(t),[e])}))}))}))}))}),[]),Object(x.jsxs)(ae.a,{className:"container-fluid",children:[a.map((function(e){return Object(x.jsx)(X.a.Img,{src:e},e)})),s.filter((function(e){if(e.userId===W.currentUser.uid)return e})).map((function(e,t){var n;return Object(x.jsxs)(X.a,{className:"container-fluid",children:[Object(x.jsx)(X.a.Title,{children:e.fullName}),Object(x.jsxs)(X.a.Text,{children:["Signed in as ",null==(n=W.currentUser)?void 0:n.email]}),Object(x.jsxs)(X.a.Text,{children:["Year: ",e.year]}),Object(x.jsxs)(X.a.Text,{children:["Faculty: ",e.faculty]}),Object(x.jsxs)(X.a.Text,{children:["Level: ",e.level]}),Object(x.jsxs)(X.a.Text,{children:["Company Name: ",e.companyName]}),Object(x.jsxs)(X.a.Text,{children:["City: ",e.city]}),Object(x.jsxs)(X.a.Text,{children:["State: ",e.state]}),Object(x.jsxs)(X.a.Text,{children:["Year Company Established: ",e.yearEstablished]}),Object(x.jsxs)(X.a.Text,{children:["Number of Employees: ",e.employeeNumber]}),Object(x.jsxs)(X.a.Text,{children:["Type of Establishment: ",e.estatishmentType]}),Object(x.jsxs)(X.a.Text,{children:["Type of Business: ",e.businessType]}),Object(x.jsxs)(X.a.Text,{children:["Contact Person's Name: ",e.nameContactPerson]}),Object(x.jsxs)(X.a.Text,{children:["Contact Person's Position: ",e.positionContactPerson]}),Object(x.jsxs)(X.a.Text,{children:["Contact Person's Phone Number: ",e.phoneContactPerson]}),Object(x.jsxs)(X.a.Text,{children:["Contact Person's Email: ",e.emailContactPerson]})]},e.id)})),Object(x.jsx)(H.a,{className:"m-3 btn-danger",onClick:function(){W.signOut().then((function(){e.replace("Login")})).catch((function(e){return alert(e.message)}))},children:Object(x.jsx)(f.a,{children:"Sign out"})}),Object(x.jsx)(H.a,{className:"m-3",onClick:function(){e.replace("Home")},children:Object(x.jsx)(f.a,{children:"Back"})})]})};function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(n),!0).forEach((function(t){J()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var se=function(){var e=Object(d.useState)(""),t=S()(e,2),n=(t[0],t[1],Object(d.useState)("")),a=S()(n,2),c=(a[0],a[1],h.a.useState("")),r=S()(c,2),o=r[0],i=r[1],s=h.a.useState({userId:W.currentUser.uid,fullName:"",year:"",faculty:"",level:"",companyName:"",companyAddress:"",city:"",state:"",yearEstablished:"",employeeNumber:"",establishmentType:"",businessType:"",nameContactPerson:"",positionContactPerson:"",phoneContactPerson:"",emailContactPerson:""}),l=S()(s,2),u=l[0],j=l[1],b=Object(E.k)(),p=Object(R.b)(B,"profiles"),m=function(e){e.preventDefault(),o&&u.fullName&&u.year&&u.faculty&&u.level&&u.companyName&&u.companyAddress&&u.city&&u.state&&u.yearEstablished&&u.employeeNumber&&u.establishmentType&&u.businessType&&u.nameContactPerson&&u.positionContactPerson&&u.phoneContactPerson&&u.emailContactPerson?(Object(R.a)(p,u),j({userId:W.currentUser.uid,fullName:"",year:"",faculty:"",level:"",companyName:"",companyAddress:"",city:"",state:"",yearEstablished:"",employeeNumber:"",establishmentType:"",businessType:"",nameContactPerson:"",positionContactPerson:"",phoneContactPerson:"",emailContactPerson:""}),b.replace("Home")):alert("Please fill out all fields")};return Object(x.jsxs)(O.a,{className:"container-fluid",children:[Object(x.jsx)(g,{title:"Student Particulars Form"}),Object(x.jsxs)(q.a,{className:"m-3 p-3",onSubmit:m,children:[Object(x.jsxs)(q.a.Group,{children:[Object(x.jsx)(q.a.Label,{children:"PASSPORT PHOTO"}),Object(x.jsx)(q.a.Label,{htmlFor:"upload-button",className:"m-3"}),Object(x.jsx)("input",{type:"file",id:"upload-button",onChange:function(e){e.target.files[0]&&i(e.target.files[0])}}),Object(x.jsx)(H.a,{type:"button",onClick:function(e){if(e.preventDefault(),null!=o){var t=Object(G.d)(M,"images/"+W.currentUser.uid);Object(G.e)(t,o).then((function(){alert("Image Uploaded!")}))}},children:Object(x.jsx)(f.a,{children:"Upload Photo"})})]}),Object(x.jsxs)(q.a.Group,{children:[Object(x.jsx)(q.a.Label,{children:"FULL NAME"}),Object(x.jsx)(q.a.Control,{type:"text",value:u.fullName,onChange:function(e){return j(ie(ie({},u),{},{fullName:e.target.value}))}})]}),Object(x.jsxs)(q.a.Group,{children:[Object(x.jsx)(q.a.Label,{children:"SIWES YEAR"}),Object(x.jsxs)(q.a.Check,{children:[Object(x.jsx)("input",{className:"form-check-input",type:"radio",name:"years",id:"2021Input",value:"2021",onChange:function(e){return j(ie(ie({},u),{},{year:e.target.value}))}}),Object(x.jsx)(q.a.Label,{className:"form-check-label",htmlFor:"2021Input",children:"2021"})]}),Object(x.jsxs)(q.a.Check,{children:[Object(x.jsx)("input",{className:"form-check-input",type:"radio",name:"years",id:"2022Input",value:"2022",onChange:function(e){return j(ie(ie({},u),{},{year:e.target.value}))}}),Object(x.jsx)(q.a.Label,{className:"form-check-label",htmlFor:"2022Input",children:"2022"})]})]}),Object(x.jsxs)(q.a.Group,{children:[Object(x.jsx)(q.a.Label,{children:"FACULTY OF NATURAL AND APPLIED SCIENCE"}),Object(x.jsxs)(q.a.Check,{children:[Object(x.jsx)("input",{className:"form-check-input",type:"radio",name:"departments",id:"Biochemistry",value:"biochemistry",onChange:function(e){return j(ie(ie({},u),{},{faculty:e.target.value}))}}),Object(x.jsx)(q.a.Label,{className:"form-check-label",htmlFor:"biochemistry",children:"BIOCHEMISTRY"})]}),Object(x.jsxs)(q.a.Check,{children:[Object(x.jsx)("input",{className:"form-check-input",type:"radio",name:"departments",id:"Software Engineering",value:"softwareEngineering",onChange:function(e){return j(ie(ie({},u),{},{faculty:e.target.value}))}}),Object(x.jsx)(q.a.Label,{className:"form-check-label",htmlFor:"softwareEngineering",children:"SOFTWARE ENGINEERING"})]}),Object(x.jsxs)(q.a.Check,{children:[Object(x.jsx)("input",{className:"form-check-input",type:"radio",name:"departments",id:"Biotechnology",value:"biotechnology",onChange:function(e){return j(ie(ie({},u),{},{faculty:e.target.value}))}}),Object(x.jsx)(q.a.Label,{className:"form-check-label",htmlFor:"biotechnology",children:"BIOTECHNOLOGY"})]}),Object(x.jsxs)(q.a.Check,{children:[Object(x.jsx)("input",{className:"form-check-input",type:"radio",name:"departments",id:"Information Technologies",value:"informationTechnologies",onChange:function(e){return j(ie(ie({},u),{},{faculty:e.target.value}))}}),Object(x.jsx)(q.a.Label,{className:"form-check-label",htmlFor:"informationTechnologies",children:"INFORMATION TECHNOLOGIES"})]}),Object(x.jsxs)(q.a.Check,{children:[Object(x.jsx)("input",{className:"form-check-input",type:"radio",name:"departments",id:"Microbiology",value:"microbiology",onChange:function(e){return j(ie(ie({},u),{},{faculty:e.target.value}))}}),Object(x.jsx)(q.a.Label,{className:"form-check-label",htmlFor:"microbiology",children:"MICROBIOLOGY"})]}),Object(x.jsxs)(q.a.Check,{children:[Object(x.jsx)("input",{className:"form-check-input",type:"radio",name:"departments",id:"Computer Science",value:"computerScience",onChange:function(e){return j(ie(ie({},u),{},{faculty:e.target.value}))}}),Object(x.jsx)(q.a.Label,{className:"form-check-label",htmlFor:"computerScience",children:"COMPUTER SCIENCE"})]})]}),Object(x.jsxs)(q.a.Group,{children:[Object(x.jsx)(q.a.Label,{children:"LEVEL"}),Object(x.jsxs)(q.a.Check,{children:[Object(x.jsx)("input",{className:"form-check-input",type:"radio",name:"levels",id:"200level",value:"200 level",onChange:function(e){return j(ie(ie({},u),{},{level:e.target.value}))}}),Object(x.jsx)(q.a.Label,{className:"form-check-label",htmlFor:"200level",children:"200"})]}),Object(x.jsxs)(q.a.Check,{children:[Object(x.jsx)("input",{className:"form-check-input",type:"radio",name:"levels",id:"300level",value:"300 level",onChange:function(e){return j(ie(ie({},u),{},{level:e.target.value}))}}),Object(x.jsx)(q.a.Label,{className:"form-check-label",htmlFor:"300level",children:"300"})]})]}),Object(x.jsxs)(q.a.Group,{children:[Object(x.jsx)(q.a.Label,{children:"COMPANY INFORMATION"}),Object(x.jsxs)(q.a.Group,{className:"border rounded border-dark p-3",children:[Object(x.jsx)(q.a.Label,{children:"Name of the Company"}),Object(x.jsx)(q.a.Control,{type:"text",value:u.companyName,onChange:function(e){return j(ie(ie({},u),{},{companyName:e.target.value}))}}),Object(x.jsx)(q.a.Label,{children:"Address"}),Object(x.jsx)(q.a.Control,{type:"text",value:u.companyAddress,onChange:function(e){return j(ie(ie({},u),{},{companyAddress:e.target.value}))}}),Object(x.jsx)(q.a.Label,{children:"City"}),Object(x.jsx)(q.a.Control,{type:"text",value:u.city,onChange:function(e){return j(ie(ie({},u),{},{city:e.target.value}))}}),Object(x.jsx)(q.a.Label,{children:"State"}),Object(x.jsx)(q.a.Control,{type:"text",value:u.state,onChange:function(e){return j(ie(ie({},u),{},{state:e.target.value}))}}),Object(x.jsx)(q.a.Label,{children:"Year Established"}),Object(x.jsx)(q.a.Control,{type:"text",value:u.yearEstablished,onChange:function(e){return j(ie(ie({},u),{},{yearEstablished:e.target.value}))}}),Object(x.jsx)(q.a.Label,{children:"Number of Employees"}),Object(x.jsx)(q.a.Control,{type:"text",value:u.employeeNumber,onChange:function(e){return j(ie(ie({},u),{},{employeeNumber:e.target.value}))}}),Object(x.jsx)(q.a.Label,{children:"Type of Established"}),Object(x.jsxs)(q.a.Check,{children:[Object(x.jsx)("input",{className:"form-check-input",type:"radio",name:"levels",id:"government",value:"Government",onChange:function(e){return j(ie(ie({},u),{},{establishmentType:e.target.value}))}}),Object(x.jsx)(q.a.Label,{className:"form-check-label",htmlFor:"government",children:"Government Enterprise"})]}),Object(x.jsxs)(q.a.Check,{children:[Object(x.jsx)("input",{className:"form-check-input",type:"radio",name:"levels",id:"private",value:"Private",onChange:function(e){return j(ie(ie({},u),{},{establishmentType:e.target.value}))}}),Object(x.jsx)(q.a.Label,{className:"form-check-label",htmlFor:"private",children:"Private Company"})]}),Object(x.jsxs)(q.a.Check,{children:[Object(x.jsx)(q.a.Label,{className:"form-check-label",htmlFor:"other",children:"Other - Please specify"}),Object(x.jsx)(q.a.Control,{type:"text",value:u.establishmentType,onChange:function(e){return j(ie(ie({},u),{},{establishmentType:e.target.value}))}})]}),Object(x.jsx)(q.a.Label,{children:"Type of Business"}),Object(x.jsx)(q.a.Control,{type:"text",value:u.businessType,onChange:function(e){return j(ie(ie({},u),{},{businessType:e.target.value}))}}),Object(x.jsx)(q.a.Label,{children:"Contact Person's Name"}),Object(x.jsx)(q.a.Control,{type:"text",value:u.nameContactPerson,onChange:function(e){return j(ie(ie({},u),{},{nameContactPerson:e.target.value}))}}),Object(x.jsx)(q.a.Label,{children:"Contact's position in company"}),Object(x.jsx)(q.a.Control,{type:"text",value:u.positionContactPerson,onChange:function(e){return j(ie(ie({},u),{},{positionContactPerson:e.target.value}))}}),Object(x.jsx)(q.a.Label,{children:"Phone"}),Object(x.jsx)(q.a.Control,{type:"text",value:u.phoneContactPerson,onChange:function(e){return j(ie(ie({},u),{},{phoneContactPerson:e.target.value}))}}),Object(x.jsx)(q.a.Label,{children:"Email"}),Object(x.jsx)(q.a.Control,{type:"email",value:u.emailContactPerson,onChange:function(e){return j(ie(ie({},u),{},{emailContactPerson:e.target.value}))}})]})]}),Object(x.jsxs)(q.a.Group,{children:[Object(x.jsx)(q.a.Label,{children:"STUDENT'S WORKING SCOPE DURING INDUSTRIAL TRAINING"}),Object(x.jsx)(q.a.Control,{type:"textarea"}),Object(x.jsx)(q.a.Label,{className:"mt-3",children:"Principal activity of company - Describe the relavance to your academic program/department"}),Object(x.jsx)(q.a.Control,{type:"textarea"}),Object(x.jsx)(q.a.Label,{children:"Description of department/unit attached with"}),Object(x.jsx)(q.a.Control,{type:"textarea"}),Object(x.jsx)(q.a.Label,{children:"DETAILS OF INDUSTRY BASED SUPERVISOR"}),Object(x.jsx)(q.a.Label,{children:"Full Name"}),Object(x.jsx)(q.a.Control,{type:"text"}),Object(x.jsx)(q.a.Label,{children:"Occupation"}),Object(x.jsx)(q.a.Control,{type:"text"}),Object(x.jsx)(q.a.Label,{children:"Email"}),Object(x.jsx)(q.a.Control,{type:"email"}),Object(x.jsx)(q.a.Label,{children:"Phone"}),Object(x.jsx)(q.a.Control,{type:"text"})]}),Object(x.jsx)(q.a.Group,{children:Object(x.jsx)(H.a,{className:"m-3",type:"submit",onClick:m,children:Object(x.jsx)(f.a,{children:"Submit"})})})]})]})};m.a.create({container:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"white"},inputContainer:{width:"80%"},input:{backgroundColor:"white",paddingHorizontal:15,paddingVertical:10,borderRadius:10,marginTop:5},buttonContainer:{width:"60%",justifyContent:"center",alignItems:"center",marginTop:40},buttonText:{color:"white",fontWeight:"700",fontSize:16},buttonOutline:{backgroundColor:"white",marginTop:5,borderColor:"#0782F9",borderWidth:2},buttonOutlineText:{color:"#0782F9",fontWeight:"700",fontSize:16}});function le(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=b()(e);if(t){var c=b()(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return u()(this,n)}}var ue=Object(L.a)(),je=function(e){s()(n,e);var t=le(n);function n(){var e;return c()(this,n),(e=t.call(this)).state={},e}return o()(n,[{key:"render",value:function(){"ios"===p.a.OS?Object(x.jsx)(O.a,{styles:be.statusbar}):Object(x.jsx)(O.a,{});return Object(x.jsx)(T.a,{children:Object(x.jsxs)(ue.Navigator,{children:[Object(x.jsx)(ue.Screen,{options:{headerShown:!1},name:"Login",component:z}),Object(x.jsx)(ue.Screen,{options:{headerShown:!1},name:"Home",component:ne}),Object(x.jsx)(ue.Screen,{options:{headerShown:!1},name:"Register",component:se}),Object(x.jsx)(ue.Screen,{options:{headerShown:!1},name:"Profile",component:re})]})})}}]),n}(h.a.Component),be=m.a.create({container:{flex:1,backgroundColor:"#342F4E"},statusbar:{backgroundColor:"#ffce00",height:20}})},184:function(e,t,n){e.exports=n(228)}},[[184,1,2]]]);
//# sourceMappingURL=app.81c1f5de.chunk.js.map