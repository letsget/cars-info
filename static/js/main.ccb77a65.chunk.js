(this["webpackJsonpcars-info"]=this["webpackJsonpcars-info"]||[]).push([[0],{100:function(e,t,n){},111:function(e,t,n){e.exports=n.p+"static/media/logo.f4d4eb19.png"},140:function(e,t,n){e.exports=n(264)},264:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(44),l=n.n(c),o=n(7),i=n(8),s=(new Date).getFullYear(),u=["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435","\u0433\u043e\u0434","\u0446\u0432\u0435\u0442","\u0441\u0442\u0430\u0442\u0443\u0441","\u0446\u0435\u043d\u0430"],m={white:"#fff",black:"#000",grey:"#cbcbcc",red:"#d74345",green:"#88c504"},d=[{color:"#fff"},{color:"#000"},{color:"#cbcbcc"},{color:"#d74345"},{color:"#88c504"}],p=["\u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438","\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f","\u043d\u0435\u0442 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"],f=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,u.map((function(e,t){return r.a.createElement("th",{key:t},e)})),r.a.createElement("th",null)))},b=n(9),E=n(64),v=n.n(E),g=n(105),h=n(106),x=n.n(h),y=function(e){return{type:"CARS_LOADED_SUCCESS",payload:e}},O=function(){var e=Object(g.a)(v.a.mark((function e(t){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json");case 3:n=e.sent,a=n.data,t(y(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log((null===e.t0||void 0===e.t0?void 0:e.t0.message)||(null===e.t0||void 0===e.t0?void 0:e.t0.body)||(null===e.t0||void 0===e.t0?void 0:e.t0.response)||e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();function k(){var e=Object(i.a)(["\n  padding: 10px 15px;\n  color: #abb1b3;\n  cursor: pointer;\n  border-radius: 20px;\n  border: none;\n  outline: none;\n  transition: ease-in-out 0.4s;\n  background: none;\n\n  &:hover {\n    background: #282d30;\n    color: #fff;\n    padding: 10px 15px;\n    border-radius: 20px;\n  }\n"]);return k=function(){return e},e}var j=b.a.button(k()),N=function(e){var t=e.id,n=Object(o.c)();return r.a.createElement(j,{onClick:function(){return n(function(e){return{type:"REMOVE_CAR",payload:{id:e}}}(t))}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")},C=function(e){return e.toLocaleString("ru")+"\xa0\u20bd"};function w(){var e=Object(i.a)(["\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  cursor: pointer;\n  margin-right: 20px;\n  display: block;\n"]);return w=function(){return e},e}var A=b.a.span(w()),_=function(){var e=Object(o.d)((function(e){return e.app.cars}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("tbody",null,e&&e.map((function(e){var t=e.id,n=e.title,a=e.description,c=e.year,l=e.color,o=e.status,i=e.price;return r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"align-middle col-lg-4"},n,a&&r.a.createElement("span",{className:"item-desc"},a)),r.a.createElement("td",{className:"align-middle"},c),r.a.createElement("td",{className:"align-middle"},r.a.createElement(A,{style:{backgroundColor:m["".concat(l)]||l}})),r.a.createElement("td",{className:"align-middle"},function(e){switch(e){case"pednding":return"\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f";case"out_of_stock":return"\u043d\u0435\u0442 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438";case"in_stock":return"\u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438";default:return e}}(o)),r.a.createElement("td",{className:"align-middle"},C(i)),r.a.createElement("td",{className:"align-middle"},r.a.createElement(N,{id:t})))}))))},S=function(e){var t=e.colors;return Object(o.d)((function(e){return e.app.cars})).length?r.a.createElement("table",{className:"table table-hover"},r.a.createElement(f,null),r.a.createElement(_,{colors:t})):null};function D(){var e=Object(i.a)(['\n  text-transform: uppercase;\n  margin-top: 100px;\n  margin-bottom: 40px;\n  margin-left: 17px;\n  color: #282d30;\n  position: relative;\n\n  &:before {\n    content: "";\n    position: absolute;\n    width: 3px;\n    height: 23px;\n    background: #8b9497;\n    display: block;\n    left: -19px;\n    top: 7px;\n  }\n']);return D=function(){return e},e}var L=b.a.h2(D()),R=function(){return Object(o.d)((function(e){return e.app.cars})).length?r.a.createElement(L,null,"\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0438 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"):r.a.createElement(L,null,"\u041d\u0435\u0442 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0435\u0439 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438")},T=n(27);function V(){var e=Object(i.a)(["\n  width: 100%;\n  background-color: #c4092f;\n  color: #fff;\n  text-transform: uppercase;\n\n  &:hover {\n    color: #fff;\n  }\n\n  > i {\n    padding-left: 7px;\n  }\n"]);return V=function(){return e},e}var F=b.a.button(V()),M=function(e){var t=e.type;return r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement(F,{type:t,className:"btn"},"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",r.a.createElement("i",{className:"fas fa-chevron-right"})))},U=function(e){return e?void 0:"\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"},W=function(e){return e&&e.replace(/[^0-9]+/g,"")},B=n(62),I=n(101),J=n(102),z=n(114);function K(){var e=Object(i.a)(["\n  display: flex;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0;\n  margin-right: 0;\n"]);return K=function(){return e},e}var P=function(e){var t=e.label,n=e.input,a=e.type,c=e.meta,l=e.blockClasses,o=e.inputclasses,i=e.maxLength;return r.a.createElement("div",{className:l},r.a.createElement("input",Object.assign({className:o},n,{type:a,placeholder:t,maxLength:i})),c.error&&c.touched&&!c.active&&r.a.createElement("div",{className:"feedback-text error-text"},c.error))},Q=function(e){var t=e.name,n=e.statusOptions,a=e.blockClasses,c=e.selectClasses,l=e.input;return r.a.createElement("div",{className:a},r.a.createElement("select",Object.assign({},l,{name:t,className:c}),n.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)}))))},Y=b.a.div(K()),q=function(e){e.value;var t=e.colorOptions,n=(e.renderActive,Object(z.a)(e,["value","colorOptions","renderActive"]));return r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement(Y,null,t.map((function(e){return r.a.createElement("label",{className:"input-container",key:e.color},r.a.createElement("input",Object.assign({},n.input,{type:"radio",value:e.color,checked:n.checked})),r.a.createElement("span",{className:"checkmark",style:{backgroundColor:e.color,border:"#fff"===e.color&&!n.checked&&"2px solid #aeaeae"}}))}))))},G=n(266),H=Object(J.a)({form:"addCar"})((function(e){var t=e.handleSubmit,n=e.values,a=Object(o.c)();return r.a.createElement("form",{onSubmit:t((function(e){var t=Object(T.a)({id:Object(G.a)()},e);a(function(e){return{type:"ADD_NEW_CAR",payload:{data:e}}}(t)),a(Object(B.a)("addCar"))}),n)},r.a.createElement("div",{className:"form-row"},r.a.createElement(I.a,{type:"text",name:"title",component:P,validate:[U],maxLength:20,inputclasses:"form-control",blockClasses:"form-group col-md-4",label:"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),r.a.createElement(I.a,{type:"text",name:"year",component:P,validate:U,format:W,inputclasses:"form-control",blockClasses:"form-group col-md-4",maxLength:4,label:"\u0413\u043e\u0434"}),r.a.createElement(I.a,{type:"text",name:"price",component:P,validate:U,format:W,inputclasses:"form-control",blockClasses:"form-group col-md-4",maxLength:20,label:"\u0426\u0435\u043d\u0430"})),r.a.createElement("div",{className:"form-row"},r.a.createElement(I.a,{type:"text",name:"description",component:P,validate:U,inputclasses:"form-control",blockClasses:"form-group col-md-12",maxLength:60,label:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})),r.a.createElement("div",{className:"form-row"},r.a.createElement(I.a,{type:"radio",component:q,validate:U,name:"color",colorOptions:d}),r.a.createElement(I.a,{name:"status",statusOptions:p,component:Q,blockClasses:"form-group col-md-4",selectClasses:"form-control custom-select"}),r.a.createElement(M,{type:"submit"})))})),X=n(111),Z=n.n(X);function $(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  background: #282d30;\n  height: 100px;\n"]);return $=function(){return e},e}var ee=b.a.header($()),te=function(){return r.a.createElement(ee,null,r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:Z.a,alt:"logo"})))};function ne(){var e=Object(i.a)(["\n  background: #282d30;\n  min-height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  margin-top: 100px;\n\n  > span {\n    color: #a4a5a6;\n  }\n"]);return ne=function(){return e},e}var ae=b.a.footer(ne()),re=function(){return r.a.createElement(ae,null,r.a.createElement("span",null,r.a.createElement("p",null,r.a.createElement("span",{style:{textTransform:"uppercase"}},"\xa9 ",s," CAPTAIN QUACK"),r.a.createElement("br",null)," \u0414\u0435\u0441\u043d\u0438\u0446\u0430 \u0442\u044b\u0441\u044f\u0447\u0435\u043b\u0435\u0442\u0438\u044f \u0438 \u043c\u043e\u043b\u043b\u044e\u0441\u043a!")))},ce=function(){return r.a.createElement("h2",{style:{paddingTop:"75px",paddingBottom:"63px"},className:"text-center"},"\xa1Ay caramba!")};n(100);function le(){var e=Object(i.a)(["\n  min-height: calc(100vh - 200px);\n"]);return le=function(){return e},e}var oe=b.a.div(le()),ie=function(){var e=Object(o.c)();Object(a.useEffect)((function(){e(O)}),[e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(te,null),r.a.createElement("div",{className:"container"},r.a.createElement(ce,null),r.a.createElement(oe,null,r.a.createElement(H,{initialValues:{year:"",price:"",color:"#fff",status:"\u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"}}),r.a.createElement(R,null),r.a.createElement(S,null))),r.a.createElement(re,null))},se=function(){return r.a.createElement(ie,null)},ue=n(112),me=n(6),de=n(113),pe=n(103),fe={cars:[]};var be=Object(me.combineReducers)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"CARS_LOADED_SUCCESS":return Object(T.a)({},e,{cars:a});case"ADD_NEW_CAR":return Object(T.a)({},e,{cars:e.cars.concat(a.data)});case"REMOVE_CAR":return Object(T.a)({},e,{cars:e.cars.filter((function(e){return e.id!==a.id}))});default:return e}},form:pe.a}),Ee=[ue.a],ve=Object(me.createStore)(be,Object(de.composeWithDevTools)(me.applyMiddleware.apply(void 0,Ee)));n(263);l.a.render(r.a.createElement(o.a,{store:ve},r.a.createElement(se,null)),document.getElementById("root"))}},[[140,1,2]]]);
//# sourceMappingURL=main.ccb77a65.chunk.js.map