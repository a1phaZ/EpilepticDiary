(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{72:function(e,t,n){},74:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t),n.d(t,"store",(function(){return Ae}));var a=n(0),r=n(24),c=n.n(r),s=(n(72),n(8)),i=n(6),o=n.n(i),u=n(10),d=n(42),l=n(43),b=n(19),j=n(52),p=n(50),h=n(88),O=(n(74),n(1)),m=[1,2,3],f=function(e){var t=e.count,n=m.map((function(e){return Object(O.jsx)("span",{className:"fa fa-star ".concat(e<=t&&"checked")},e)}));return Object(O.jsx)("span",{className:"rating",children:n})},x=n(87),v=n(62),y=n(67);function g(){return w.apply(this,arguments)}function w(){return(w=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.a)("epileptic_diary",1,{upgrade:function(e){e.createObjectStore("items",{keyPath:"_id",autoIncrement:!0}).createIndex("date","date"),e.createObjectStore("settings",{keyPath:"_id",autoIncrement:!0}).createIndex("type","type")}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t,n,a){return I.apply(this,arguments)}function I(){return(I=Object(u.a)(o.a.mark((function e(t,n,a,r){var c,s,i,u,d,l,b,j,p,h;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=t.transaction(n),s=[],i=c.store.index(a),u=!0,d=!1,e.prev=5,b=Object(v.a)(i.iterate(r));case 7:return e.next=9,b.next();case 9:return j=e.sent,u=j.done,e.next=13,j.value;case 13:if(p=e.sent,u){e.next=20;break}h=p,s.push(h.value);case 17:u=!0,e.next=7;break;case 20:e.next=26;break;case 22:e.prev=22,e.t0=e.catch(5),d=!0,l=e.t0;case 26:if(e.prev=26,e.prev=27,u||null==b.return){e.next=31;break}return e.next=31,b.return();case 31:if(e.prev=31,!d){e.next=34;break}throw l;case 34:return e.finish(31);case 35:return e.finish(26);case 36:return e.abrupt("return",s);case 37:case"end":return e.stop()}}),e,null,[[5,22,26,36],[27,,31,35]])})))).apply(this,arguments)}function S(e,t,n){return C.apply(this,arguments)}function C(){return(C=Object(u.a)(o.a.mark((function e(t,n,a){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.transaction("items"),c=r.objectStore(n),e.abrupt("return",c.get(a));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t,n){return T.apply(this,arguments)}function T(){return(T=Object(u.a)(o.a.mark((function e(t,n,a){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.transaction(a,"readwrite"),c=r.objectStore(a),e.prev=2,e.next=5,c.add(n);case 5:return e.abrupt("return",e.sent);case 8:throw e.prev=8,e.t0=e.catch(2),e.t0;case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}function M(e,t,n){return N.apply(this,arguments)}function N(){return(N=Object(u.a)(o.a.mark((function e(t,n,a){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.transaction(a,"readwrite"),c=r.objectStore(a),e.prev=2,e.next=5,c.put(n);case 5:e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(2),e.t0;case 10:case"end":return e.stop()}}),e,null,[[2,7]])})))).apply(this,arguments)}var L="SET_ITEM",B="SET_ITEMS",E="RESET_ITEM",F=function(e){return{type:B,payload:{items:e}}},_=function(e){return{type:L,payload:{item:e}}},A=function(e){return{type:E,payload:{item:e}}},G=function(e){var t=new Date(e);return new Intl.DateTimeFormat("ru-RU",{hour:"numeric",minute:"numeric"}).format(t)},R=function(e,t){var n=36e5,a=t-e,r="",c=Math.trunc(a/n),s=Math.trunc((a-c*n)/6e4);return c>0&&(r+="".concat(c," \u0447\u0430\u0441\u043e\u0432 \u0438 ")),r+="".concat(s," \u043c\u0438\u043d\u0443\u0442")},U=function(e){var t=e.db,n=e.type,a=e.drugs,r=void 0===a?[]:a,c=e.subType,s=e.description,i=e.time,d=e.color,l=e.quality,b=e.strength,j=e.count,p=e.series,h=e.timeEnd,m=e.sleepId,v=e.setSleepId,y=r.map((function(e,t){var n=e.title,a=e.dosage;return Object(O.jsxs)("li",{children:[n," - ",a]},t)})),g=Object(O.jsx)(x.a,{variant:"primary",onClick:Object(u.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t,"items",m);case 2:return(n=e.sent).subType="\u043a\u043e\u043d\u0435\u0446",n.timeEnd=(new Date).getTime(),e.next=7,M(t,n,"items");case 7:v(-1),Ae.dispatch(A(n));case 9:case"end":return e.stop()}}),e)}))),"data-type":"\u0421\u043e\u043d","data-sub-type":"\u043a\u043e\u043d\u0435\u0446","data-color":"badge-primary",children:"\u041f\u0440\u043e\u0431\u0443\u0436\u0434\u0435\u043d\u0438\u0435"});return Object(O.jsx)("div",{className:"vertical-timeline-item vertical-timeline-element",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{className:"vertical-timeline-element-icon bounce-in",children:Object(O.jsx)("i",{className:"badge badge-dot badge-dot-xl ".concat(d),children:" "})}),Object(O.jsxs)("div",{className:"vertical-timeline-element-content bounce-in",children:[Object(O.jsxs)("h4",{className:"timeline-title",children:[n,j&&" - ".concat(j)]}),"\u0441\u043e\u043d"===n.toLowerCase()&&"\u043a\u043e\u043d\u0435\u0446"!==c.toLowerCase()&&g,"\u0441\u043e\u043d"===n.toLowerCase()&&"\u043a\u043e\u043d\u0435\u0446"===c.toLowerCase()&&h&&Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"\u041f\u0440\u043e\u0431\u0443\u0436\u0434\u0435\u043d\u0438\u0435:"})," ",G(h)]}),"\u0441\u043e\u043d"===n.toLowerCase()&&"\u043a\u043e\u043d\u0435\u0446"===c.toLowerCase()&&h&&Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c:"})," ",R(i,h)]}),s&&Object(O.jsx)("p",{children:s}),l&&Object(O.jsxs)("span",{children:["\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043d\u0430: ",Object(O.jsx)(f,{count:l})]}),p&&Object(O.jsx)("div",{children:Object(O.jsx)("b",{children:"\u0421\u0435\u0440\u0438\u044f"})}),b&&Object(O.jsxs)("span",{children:["\u0421\u0438\u043b\u0430 \u043f\u0440\u0438\u0441\u0442\u0443\u043f\u043e\u0432: ",Object(O.jsx)(f,{count:b})]}),r&&y,Object(O.jsx)("span",{className:"vertical-timeline-element-date",children:G(i)})]})]})})},H=function(e){var t=e.db,n=e.data,a=e.sleepId,r=e.setSleepId;return n.map((function(e,n){return Object(O.jsx)("div",{className:"vertical-timeline vertical-timeline--animate vertical-timeline--one-column",children:Object(O.jsx)(U,Object(s.a)(Object(s.a)({db:t},e),{},{sleepId:a,setSleepId:r}))},n)}))},P=(n(76),n(77),"DISABLE_BUTTON"),W="ENABLE_BUTTON",J="SHOW_MODAL",q="HIDE_MODAL",z=function(e){return{type:P,payload:{type:e}}},K=function(e){return{type:W,payload:{type:e}}},Q=function(e){return{type:J,payload:{modalType:e}}},V=function(){return{type:q}},X=n(89),Y=function(e){var t=e.sleepId,n=e.db,a=e.buttons,r=e.setSleepId,c=a.map((function(e,a){var c=e.variant,s=e.onClick,i=e.icon,d=e.type,l=e.subType;return Object(O.jsx)(x.a,{variant:c,disabled:-1!==t&&"\u0441\u043e\u043d"===d.toLowerCase(),onClick:s||function(){var e=Object(u.a)(o.a.mark((function e(t){var a,c,s,i,u,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.currentTarget.dataset,c=a.type,s=a.subType,i=a.color,u=t.currentTarget.disabled.disabled,d={type:c,subType:s,time:(new Date).getTime(),color:"badge-".concat(i),date:Object(X.a)(new Date,"yyyy-MM-dd")},e.t0=r,e.next=6,D(n,d,"items");case 6:e.t1=e.sent,(0,e.t0)(e.t1),u?Ae.dispatch(K(c)):(Ae.dispatch(z(c)),Ae.dispatch(_(d)));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),"data-type":d,"data-sub-type":l,"data-color":c,children:Object(O.jsx)("i",{className:"fa ".concat(i),"aria-hidden":"true"})},a)}));return Object(O.jsx)("div",{className:"buttons-panel",children:c})},Z=n(21),$=n(34),ee=n(15),te=n(90),ne=n(91),ae=function(e){var t=e.handleClose,n=e.handleSubmit,r=Object(a.useState)(""),c=Object(ee.a)(r,2),s=c[0],i=c[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(te.a.Body,{children:Object(O.jsx)(ne.a,{children:Object(O.jsxs)(ne.a.Group,{controlId:"formDescription",children:[Object(O.jsx)(ne.a.Label,{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(O.jsx)(ne.a.Control,{as:"textarea",rows:3,value:s,onChange:function(e){i(e.currentTarget.value)}}),Object(O.jsx)(ne.a.Text,{className:"text-muted",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]})})}),Object(O.jsxs)(te.a.Footer,{children:[Object(O.jsx)(x.a,{variant:"secondary",onClick:t,children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(O.jsx)(x.a,{variant:"primary",onClick:function(){n({description:s,type:"\u0415\u0434\u0430",color:"badge-success"})},disabled:!s,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})},re=function(e){var t=e.handleClose,n=e.handleSubmit,r=Object(a.useState)(1),c=Object(ee.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(!1),u=Object(ee.a)(o,2),d=u[0],l=u[1],b=Object(a.useState)(1),j=Object(ee.a)(b,2),p=j[0],h=j[1],m=Object(a.useState)("\u0421\u043b\u0430\u0431\u044b\u0439 \u043f\u0440\u0438\u0441\u0442\u0443\u043f"),f=Object(ee.a)(m,2),v=f[0],y=f[1],g=Object(a.useState)("secondary"),w=Object(ee.a)(g,2),k=w[0],I=w[1];return Object(a.useEffect)((function(){switch(p){case"1":return I("secondary"),void y("\u0421\u043b\u0430\u0431\u044b\u0439 \u043f\u0440\u0438\u0441\u0442\u0443\u043f");case"2":return I("warning"),void y("\u0421\u0440\u0435\u0434\u043d\u0438\u0439 \u043f\u0440\u0438\u0441\u0442\u0443\u043f");case"3":return I("danger"),void y("\u0421\u0438\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u0438\u0441\u0442\u0443\u043f");default:return I("secondary"),void y("\u0421\u043b\u0430\u0431\u044b\u0439 \u043f\u0440\u0438\u0441\u0442\u0443\u043f")}}),[p]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(te.a.Body,{children:Object(O.jsxs)(ne.a,{children:[Object(O.jsx)(ne.a.Group,{controlId:"formAttackSeries",children:Object(O.jsx)(ne.a.Check,{type:"checkbox",id:"checkbox-series",label:"\u0421\u0435\u0440\u0438\u0439\u043d\u044b\u0435 \u043f\u0440\u0438\u0441\u0442\u0443\u043f\u044b?",checked:d,onChange:function(){l(!d)}})}),d&&Object(O.jsx)(ne.a.Group,{controlId:"formAttackCount",children:Object(O.jsx)(ne.a.Control,{type:"number",placeholder:"\u041a\u043e\u043b-\u0432\u043e \u043f\u0440\u0438\u0441\u0442\u0443\u043f\u043e\u0432",value:s,onChange:function(e){i(e.currentTarget.value)}})}),Object(O.jsxs)(ne.a.Group,{controlId:"formAttackStrength",children:[Object(O.jsx)(ne.a.Label,{children:"\u0421\u0438\u043b\u0430 \u043f\u0440\u0438\u0441\u0442\u0443\u043f\u0430:"}),Object(O.jsx)(ne.a.Control,{type:"range",min:1,max:3,value:p,step:1,onChange:function(e){return h(e.currentTarget.value)}}),Object(O.jsx)(ne.a.Text,{className:"text-".concat(k),children:v})]})]})}),Object(O.jsxs)(te.a.Footer,{children:[Object(O.jsx)(x.a,{variant:"secondary",onClick:t,children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(O.jsx)(x.a,{variant:"primary",onClick:function(){n({type:"\u041f\u0440\u0438\u0441\u0442\u0443\u043f\u044b",count:s,series:d,strength:p,color:"badge-warning"})},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})},ce=n(18),se=n(13),ie=n(32),oe=function(e){var t=e.drugsList,n=void 0===t?[]:t,r=e.handleClose,c=e.handleSubmit,s=Object(a.useState)((function(){return n.map((function(e){return e.checked=!1,e}))})),i=Object(ee.a)(s,2),o=i[0],u=i[1],d=function(e){var t=e.currentTarget.dataset.id,n=Object(ce.a)(o),a=n.findIndex((function(e){return e._id.toString()===t.toString()}));return-1!==a&&(n[a].checked=!n[a].checked,u(n),!0)};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(te.a.Body,{children:[0===o.length&&Object(O.jsxs)("h3",{children:["\u041d\u0435\u0442 \u043d\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430, \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 ",Object(O.jsx)(ue,{to:"/settings",label:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})]}),Object(O.jsx)(ne.a,{children:o.map((function(e){return Object(O.jsx)(ne.a.Group,{controlId:"formDrug-".concat(e.title,"-").concat(e.dosage),children:Object(O.jsx)(ne.a.Check,{type:"checkbox","data-id":null===e||void 0===e?void 0:e._id,onChange:d,value:e.checked,label:"".concat(null===e||void 0===e?void 0:e.title," (").concat(null===e||void 0===e?void 0:e.dosage,")"),title:"".concat(null===e||void 0===e?void 0:e.title," (").concat(null===e||void 0===e?void 0:e.dosage,")")})},"".concat(e.title,"-").concat(e.dosage))}))})]}),Object(O.jsxs)(te.a.Footer,{children:[Object(O.jsx)(x.a,{variant:"secondary",onClick:r,children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(O.jsx)(x.a,{variant:"primary",onClick:function(){var e={type:"\u041b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430",drugs:o.filter((function(e){return e.checked})),color:"badge-danger"};c(e)},disabled:0===o.length,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})};function ue(e){var t=e.label,n=e.to,a=e.activeOnlyWhenExact,r=Object(se.f)({path:n,exact:a});return Object(O.jsxs)("span",{className:r?"active":"",children:[r&&"> ",Object(O.jsx)(ie.b,{to:n,children:t})]})}var de=function(e){var t=e.db,n=e.handleClose,r=e.showModal,c=e.modal,s=void 0===c?{}:c,i=e.drugsList,d=s.type,l=s.description,b=s.drugs,j=s.count,p=s.series,h=s.strength,m=Object(a.useState)(!1),f=Object(ee.a)(m,2),x=f[0],v=f[1],y=function(){var e=Object(u.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.time=(new Date).getTime(),n.date=Object(X.a)(new Date,"yyyy-MM-dd"),e.next=4,D(t,n,"items");case 4:Ae.dispatch(_(n)),Ae.dispatch(V());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){x!==r&&v(r)}),[r,x]),Object(O.jsxs)(te.a,{show:x,onHide:n,children:[Object(O.jsx)(te.a.Header,{closeButton:!0,children:Object(O.jsx)(te.a.Title,{children:d})}),l&&Object(O.jsx)(ae,{handleClose:n,handleSubmit:y}),j&&p&&h&&Object(O.jsx)(re,{handleClose:n,handleSubmit:y}),b&&Object(O.jsx)(oe,{drugsList:i,handleClose:n,handleSubmit:y})]})},le=n(94),be=function(e){return e.sort((function(e,t){return e.time>t.time?-1:1}))},je="SET_DRUG",pe="SET_DRUGS",he=function(e){return{type:je,payload:{drug:e}}},Oe=function(e){return{type:pe,payload:{drugs:e}}},me="items",fe=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).initDB=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return t=e.sent,a.setState({db:t}),e.next=6,a.getItems();case 6:case"end":return e.stop()}}),e)}))),a.getItems=Object(u.a)(o.a.mark((function e(){var t,n,r,c,s,i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.state.db,r=Object(X.a)(new Date(a.props.currentDate),"yyyy-MM-dd"),e.next=4,k(n,me,"date",r);case 4:return c=e.sent,e.t0=be,e.next=8,k(n,me,"date",Object(X.a)(Object(le.a)(new Date(a.props.currentDate),1),"yyyy-MM-dd"));case 8:return e.t1=e.sent,s=(0,e.t0)(e.t1),"\u0441\u043e\u043d"===(null===(t=s[0])||void 0===t?void 0:t.type.toLowerCase())&&c.push(s[0]),-1!==(i=c.findIndex((function(e){return!!e.subType&&"\u043d\u0430\u0447\u0430\u043b\u043e"===(null===e||void 0===e?void 0:e.subType.toLowerCase())})))&&a.setSleepId(c[i]._id),c.length&&a.props.setItems(c),e.next=16,k(n,"settings","type","drug");case 16:(u=e.sent).length&&a.props.setDrugs(u);case 18:case"end":return e.stop()}}),e)}))),a.addItem=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.state.db,r=n.transaction(me,"readwrite"),c=r.objectStore(me),e.prev=3,e.next=6,c.add(t);case 6:e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(3),e.t0;case 11:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t){return e.apply(this,arguments)}}(),a.handlerShowModal=function(){a.props.showModal()},a.setSleepId=function(e){a.setState({sleepId:e})},a.handleModalFilter=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=t.findIndex((function(t){var n=t.type;return e.toLowerCase()===n.toLowerCase()}));return t[n]},a.state={db:null,_currentDate:new Intl.DateTimeFormat("ru-RU",{day:"numeric",month:"long",year:"numeric"}).format(new Date(a.props.currentDate)),sleepId:-1},a.handlerShowModal=a.handlerShowModal.bind(Object(b.a)(a)),a.handleModalFilter=a.handleModalFilter.bind(Object(b.a)(a)),a.initDB=a.initDB.bind(Object(b.a)(a)),a.getItems=a.getItems.bind(Object(b.a)(a)),a.addItem=a.addItem.bind(Object(b.a)(a)),a.setSleepId=a.setSleepId.bind(Object(b.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.initDB()}},{key:"render",value:function(){var e=this.props,t=e.modalType,n=e.modals,a=e.buttons,r=e.modalShow,c=e.hideModal,s=e.items,i=e.drugs;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(h.a,{children:Object(O.jsx)("div",{className:"row d-flex justify-content-center mt-3 mb-auto",children:Object(O.jsxs)("div",{className:"col-md-6",children:[Object(O.jsx)("h5",{children:this.state._currentDate}),Object(O.jsx)(Y,{sleepId:this.state.sleepId,db:this.state.db,buttons:a,setSleepId:this.setSleepId}),Object(O.jsx)(H,{db:this.state.db,data:s,sleepId:this.state.sleepId,setSleepId:this.setSleepId}),Object(O.jsx)(de,{db:this.state.db,showModal:r,handleClose:c,modal:this.handleModalFilter(t,n),drugsList:i})]})})})})}}]),n}(a.Component);var xe=Object($.b)((function(e){return{buttons:e.buttons.buttons,modalShow:e.buttons.modalShow,modalType:e.buttons.modalType,modals:e.buttons.modals,items:e.data.items,currentDate:e.data.currentDate,drugs:e.settings.drugs}}),(function(e){return Object(s.a)({dispatch:e},Object(Z.bindActionCreators)({disableButton:z,enableButton:K,setItem:_,hideModal:V,showModal:Q,setItems:F,setDrugs:Oe},e))}))(fe),ve=n(93),ye=n(92);function ge(){return Object(O.jsxs)(ve.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(O.jsx)(ie.b,{className:"navbar-brand",to:"/",children:"\u0414\u043d\u0435\u0432\u043d\u0438\u043a"}),Object(O.jsx)(ve.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(O.jsx)(ve.a.Collapse,{id:"responsive-navbar-nav",children:Object(O.jsxs)(ye.a,{children:[Object(O.jsx)(ie.b,{className:"nav-link",to:"/settings",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),Object(O.jsx)(ie.b,{className:"nav-link",to:"/stats",disabled:!0,children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"})]})})]})}var we=function(e){var t=e.setDrug,n=Object(a.useState)(""),r=Object(ee.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(""),o=Object(ee.a)(i,2),u=o[0],d=o[1];return Object(O.jsxs)(ne.a,{inline:!0,children:[Object(O.jsx)(ne.a.Control,{className:"mb-2 mr-sm-2",id:"title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:c,onChange:function(e){s(e.currentTarget.value)}}),Object(O.jsx)(ne.a.Control,{className:"mb-2 mr-sm-2",type:"number",id:"dosage",placeholder:"\u0414\u043e\u0437\u0438\u0440\u043e\u0432\u043a\u0430",value:u,onChange:function(e){d(e.currentTarget.value)}}),Object(O.jsx)(x.a,{type:"submit",className:"mb-2",onClick:function(e){e.preventDefault(),t({type:"drug",title:c,dosage:u,time:(new Date).getTime(),archive:!1}),s(""),d("")},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})},ke=function(e){var t=e.data.map((function(e,t){return Object(O.jsx)("li",{children:e.title},t)}));return Object(O.jsx)("ul",{children:t})},Ie="settings",Se=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).initDB=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:if(t=e.sent,a.setState({db:t}),!(a.props.drugs.length<=0)){e.next=7;break}return e.next=7,a.getItems();case 7:case"end":return e.stop()}}),e)}))),a.getItems=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.db,e.next=3,k(t,Ie,"type","drug");case 3:(n=e.sent).length&&a.props.setDrugs(n);case 5:case"end":return e.stop()}}),e)}))),a.addItem=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.state.db,r=n.transaction(Ie,"readwrite"),c=r.objectStore(Ie),e.prev=3,e.next=6,c.add(t);case 6:e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(3),e.t0;case 11:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t){return e.apply(this,arguments)}}(),a.setDrug=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.addItem(t);case 2:return e.next=4,a.getItems();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={db:null,drug:{type:"drug",title:"",dosage:0}},a.initDB=a.initDB.bind(Object(b.a)(a)),a.getItems=a.getItems.bind(Object(b.a)(a)),a.setDrug=a.setDrug.bind(Object(b.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.initDB()}},{key:"render",value:function(){return Object(O.jsx)(h.a,{children:Object(O.jsx)("div",{className:"row d-flex justify-content-center mt-3 mb-auto",children:Object(O.jsxs)("div",{className:"col-md-6",children:[Object(O.jsx)("h5",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),Object(O.jsx)("h6",{children:"\u041b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430"}),Object(O.jsx)(we,{setDrug:this.setDrug}),Object(O.jsx)(ke,{data:this.props.drugs})]})})})}}]),n}(a.Component);var Ce=Object($.b)((function(e){return{drugs:e.settings.drugs}}),(function(e){return Object(s.a)({dispatch:e},Object(Z.bindActionCreators)({setDrugs:Oe,setDrug:he},e))}))(Se);function De(){return Object(O.jsxs)(ie.a,{children:[Object(O.jsx)(ge,{}),Object(O.jsxs)(se.c,{children:[Object(O.jsx)(se.a,{path:"/settings",children:Object(O.jsx)(Ce,{})}),Object(O.jsx)(se.a,{path:"/stats",children:Object(O.jsx)("h1",{children:"\u0420\u0430\u0437\u0434\u0435\u043b \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435"})}),Object(O.jsx)(se.a,{path:"/",children:Object(O.jsx)(xe,{})})]})]})}var Te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,95)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};n(84);function Me(e){return Ae.dispatch(Q(e.currentTarget.dataset.type))}var Ne={buttons:[{type:"\u0421\u043e\u043d",subType:"\u043d\u0430\u0447\u0430\u043b\u043e",icon:"fa-bed",disabled:!1,variant:"primary"},{type:"\u0415\u0434\u0430",icon:"fa-cutlery",disabled:!1,variant:"success",onClick:Me},{type:"\u041b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430",icon:"fa-medkit",disabled:!1,variant:"danger",onClick:Me},{type:"\u041f\u0440\u0438\u0441\u0442\u0443\u043f\u044b",icon:"fa-heartbeat",disabled:!1,variant:"warning",onClick:Me}],modalShow:!1,modalType:"",modals:[{type:"\u0435\u0434\u0430",description:!0,drugs:!1,count:!1,series:!1,strength:!1},{type:"\u041b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430",drugs:!0,description:!1,count:!1,series:!1,strength:!1},{type:"\u041f\u0440\u0438\u0441\u0442\u0443\u043f\u044b",count:!0,series:!0,strength:!0,description:!1,drugs:!1}]},Le={currentDate:(new Date).getTime(),items:[]},Be={drugs:[]},Ee=Object(Z.combineReducers)({buttons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:var n=Object(ce.a)(e.buttons),a=n.findIndex((function(e){return e.type===t.payload.type}));return n[a].disabled=!0,Object(s.a)(Object(s.a)({},e),{},{buttons:Object(ce.a)(n)});case W:var r=Object(ce.a)(e.buttons),c=r.findIndex((function(e){return e.type===t.payload.type}));return r[c].disabled=!1,Object(s.a)(Object(s.a)({},e),{},{buttons:Object(ce.a)(r)});case J:return Object(s.a)(Object(s.a)({},e),{},{modalShow:!0,modalType:t.payload.modalType});case q:return Object(s.a)(Object(s.a)({},e),{},{modalShow:!1,modalType:""});default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(s.a)(Object(s.a)({},e),{},{items:be([].concat(Object(ce.a)(e.items),[t.payload.item]))});case B:return Object(s.a)(Object(s.a)({},e),{},{items:be(t.payload.items)});case E:var n=t.payload.item,a=e.items.findIndex((function(e){return e.time===n.time}));if(-1===a)return Object(s.a)({},e);var r=Object(ce.a)(e.items);return r.splice(a,1,n),Object(s.a)(Object(s.a)({},e),{},{items:be(Object(ce.a)(r))});default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe:return Object(s.a)(Object(s.a)({},e),{},{drugs:t.payload.drugs});case je:return Object(s.a)(Object(s.a)({},e),{},{drugs:[].concat(Object(ce.a)(e.drugs),[t.payload.drug])});default:return e}}}),Fe=n(65),_e=n(66),Ae=Object(Z.createStore)(Ee,Object(_e.composeWithDevTools)(Object(Z.applyMiddleware)(Fe.a)));c.a.render(Object(O.jsx)($.a,{store:Ae,children:Object(O.jsx)(De,{})}),document.getElementById("root")),Te()}},[[85,1,2]]]);
//# sourceMappingURL=main.eef6ae9e.chunk.js.map