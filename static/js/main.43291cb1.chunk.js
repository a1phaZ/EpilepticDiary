(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{70:function(e,t,n){},72:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t),n.d(t,"store",(function(){return we}));var a=n(0),r=n(15),c=n.n(r),i=(n(70),n(9)),s=n(7),o=n.n(s),d=n(10),u=n(56),l=n(57),b=n(24),j=n(65),p=n(64),h=n(94),m=n(95),O=n(90),f=n(89),x=(n(72),n(2)),v=[1,2,3,4,5],y=function(e){var t=e.count,n=v.map((function(e){return Object(x.jsx)("span",{className:"fa fa-star ".concat(e<=t&&"checked")},e)}));return Object(x.jsx)("span",{className:"rating",children:n})},g=n(59),w=n(58),k=n(63);function I(){return S.apply(this,arguments)}function S(){return(S=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)("items",1,{upgrade:function(e){e.createObjectStore("items",{keyPath:"_id",autoIncrement:!0}).createIndex("date","date")}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t,n,a){return T.apply(this,arguments)}function T(){return(T=Object(d.a)(o.a.mark((function e(t,n,a,r){var c,i,s,d,u,l,b,j,p,h;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=t.transaction(n),i=[],s=c.store.index(a),d=!0,u=!1,e.prev=5,b=Object(w.a)(s.iterate(r));case 7:return e.next=9,b.next();case 9:return j=e.sent,d=j.done,e.next=13,j.value;case 13:if(p=e.sent,d){e.next=20;break}h=p,i.push(h.value);case 17:d=!0,e.next=7;break;case 20:e.next=26;break;case 22:e.prev=22,e.t0=e.catch(5),u=!0,l=e.t0;case 26:if(e.prev=26,e.prev=27,d||null==b.return){e.next=31;break}return e.next=31,b.return();case 31:if(e.prev=31,!u){e.next=34;break}throw l;case 34:return e.finish(31);case 35:return e.finish(26);case 36:return e.abrupt("return",i);case 37:case"end":return e.stop()}}),e,null,[[5,22,26,36],[27,,31,35]])})))).apply(this,arguments)}function D(e,t,n){return M.apply(this,arguments)}function M(){return(M=Object(d.a)(o.a.mark((function e(t,n,a){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.transaction("items"),c=r.objectStore(n),e.abrupt("return",c.get(a));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,t){return _.apply(this,arguments)}function _(){return(_=Object(d.a)(o.a.mark((function e(t,n){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.transaction("items","readwrite"),r=a.objectStore("items"),e.prev=2,e.next=5,r.add(n);case 5:return e.abrupt("return",e.sent);case 8:throw e.prev=8,e.t0=e.catch(2),e.t0;case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}function B(e,t){return F.apply(this,arguments)}function F(){return(F=Object(d.a)(o.a.mark((function e(t,n){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.transaction("items","readwrite"),r=a.objectStore("items"),e.prev=2,e.next=5,r.put(n);case 5:e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(2),e.t0;case 10:case"end":return e.stop()}}),e,null,[[2,7]])})))).apply(this,arguments)}var N="SET_ITEM",E="SET_ITEMS",A="RESET_ITEM",R=function(e){return{type:E,payload:{items:e}}},G=function(e){return{type:N,payload:{item:e}}},H=function(e){return{type:A,payload:{item:e}}},P=function(e){var t=new Date(e);return new Intl.DateTimeFormat("ru-RU",{hour:"numeric",minute:"numeric"}).format(t)},U=function(e,t){var n=36e5,a=t-e,r="",c=Math.trunc(a/n),i=Math.trunc((a-c*n)/6e4);return c>0&&(r+="".concat(c," \u0447\u0430\u0441\u043e\u0432 \u0438 ")),r+="".concat(i," \u043c\u0438\u043d\u0443\u0442")},J=function(e){var t=e.db,n=e.type,a=e.drugs,r=void 0===a?[]:a,c=e.subType,i=e.description,s=e.time,u=e.color,l=e.quality,b=e.strength,j=e.count,p=e.series,h=e.timeEnd,m=e.sleepId,O=e.setSleepId,f=r.map((function(e,t){var n=e.title,a=e.dosage;return Object(x.jsxs)("li",{children:[n," - ",a]},t)})),v=Object(x.jsx)(g.a,{variant:"primary",onClick:Object(d.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t,"items",m);case 2:return(n=e.sent).subType="\u043a\u043e\u043d\u0435\u0446",n.timeEnd=(new Date).getTime(),e.next=7,B(t,n);case 7:O(-1),we.dispatch(H(n));case 9:case"end":return e.stop()}}),e)}))),"data-type":"\u0421\u043e\u043d","data-sub-type":"\u043a\u043e\u043d\u0435\u0446","data-color":"badge-primary",children:"\u041f\u0440\u043e\u0431\u0443\u0436\u0434\u0435\u043d\u0438\u0435"});return Object(x.jsx)("div",{className:"vertical-timeline-item vertical-timeline-element",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("span",{className:"vertical-timeline-element-icon bounce-in",children:Object(x.jsx)("i",{className:"badge badge-dot badge-dot-xl ".concat(u),children:" "})}),Object(x.jsxs)("div",{className:"vertical-timeline-element-content bounce-in",children:[Object(x.jsxs)("h4",{className:"timeline-title",children:[n,j&&" - ".concat(j)]}),"\u0441\u043e\u043d"===n.toLowerCase()&&"\u043a\u043e\u043d\u0435\u0446"!==c.toLowerCase()&&v,"\u0441\u043e\u043d"===n.toLowerCase()&&"\u043a\u043e\u043d\u0435\u0446"===c.toLowerCase()&&h&&Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"\u041f\u0440\u043e\u0431\u0443\u0436\u0434\u0435\u043d\u0438\u0435:"})," ",P(h)]}),"\u0441\u043e\u043d"===n.toLowerCase()&&"\u043a\u043e\u043d\u0435\u0446"===c.toLowerCase()&&h&&Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c:"})," ",U(s,h)]}),i&&Object(x.jsx)("p",{children:i}),l&&Object(x.jsxs)("span",{children:["\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043d\u0430: ",Object(x.jsx)(y,{count:l})]}),p&&Object(x.jsx)("div",{children:Object(x.jsx)("b",{children:"\u0421\u0435\u0440\u0438\u044f"})}),b&&Object(x.jsxs)("span",{children:["\u0421\u0438\u043b\u0430 \u043f\u0440\u0438\u0441\u0442\u0443\u043f\u043e\u0432: ",Object(x.jsx)(y,{count:b})]}),r&&f,Object(x.jsx)("span",{className:"vertical-timeline-element-date",children:P(s)})]})]})})},W=function(e){var t=e.db,n=e.data,a=e.sleepId,r=e.setSleepId;return n.map((function(e,n){return Object(x.jsx)("div",{className:"vertical-timeline vertical-timeline--animate vertical-timeline--one-column",children:Object(x.jsx)(J,Object(i.a)(Object(i.a)({db:t},e),{},{sleepId:a,setSleepId:r}))},n)}))},q=(n(74),n(75),"DISABLE_BUTTON"),K="ENABLE_BUTTON",z="SHOW_MODAL",Q="HIDE_MODAL",V=function(e){return{type:q,payload:{type:e}}},X=function(e){return{type:K,payload:{type:e}}},Y=function(e){return{type:z,payload:{modalType:e}}},Z=function(){return{type:Q}},$=n(91),ee=function(e){var t=e.sleepId,n=e.db,a=e.buttons,r=e.setSleepId,c=a.map((function(e,a){var c=e.variant,i=e.onClick,s=e.icon,u=e.type,l=e.subType;return Object(x.jsx)(g.a,{variant:c,disabled:-1!==t&&"\u0441\u043e\u043d"===u.toLowerCase(),onClick:i||function(){var e=Object(d.a)(o.a.mark((function e(t){var a,c,i,s,d,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.currentTarget.dataset,c=a.type,i=a.subType,s=a.color,d=t.currentTarget.disabled.disabled,u={type:c,subType:i,time:(new Date).getTime(),color:"badge-".concat(s),date:Object($.a)(new Date,"yyyy-MM-dd")},e.t0=r,e.next=6,L(n,u);case 6:e.t1=e.sent,(0,e.t0)(e.t1),d?we.dispatch(X(c)):(we.dispatch(V(c)),we.dispatch(G(u)));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),"data-type":u,"data-sub-type":l,"data-color":c,children:Object(x.jsx)("i",{className:"fa ".concat(s),"aria-hidden":"true"})},a)}));return Object(x.jsx)("div",{className:"buttons-panel",children:c})},te=n(19),ne=n(48),ae=n(21),re=n(92),ce=n(93),ie=function(e){var t=e.handleClose,n=e.handleSubmit,r=Object(a.useState)(""),c=Object(ae.a)(r,2),i=c[0],s=c[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(re.a.Body,{children:Object(x.jsx)(ce.a,{children:Object(x.jsxs)(ce.a.Group,{controlId:"formDescription",children:[Object(x.jsx)(ce.a.Label,{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(x.jsx)(ce.a.Control,{as:"textarea",rows:3,value:i,onChange:function(e){s(e.currentTarget.value)}}),Object(x.jsx)(ce.a.Text,{className:"text-muted",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]})})}),Object(x.jsxs)(re.a.Footer,{children:[Object(x.jsx)(g.a,{variant:"secondary",onClick:t,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(x.jsx)(g.a,{variant:"primary",onClick:function(){n({description:i,type:"\u0415\u0434\u0430",color:"badge-success"})},disabled:!i,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})},se=function(e){var t=e.handleClose,n=e.handleSubmit,r=Object(a.useState)(1),c=Object(ae.a)(r,2),i=c[0],s=c[1],o=Object(a.useState)(!1),d=Object(ae.a)(o,2),u=d[0],l=d[1],b=Object(a.useState)(1),j=Object(ae.a)(b,2),p=j[0],h=j[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(re.a.Body,{children:Object(x.jsxs)(ce.a,{children:[Object(x.jsx)(ce.a.Group,{controlId:"formAttackSeries",children:Object(x.jsx)(ce.a.Check,{type:"checkbox",id:"checkbox-series",label:"\u0421\u0435\u0440\u0438\u0439\u043d\u044b\u0435 \u043f\u0440\u0438\u0441\u0442\u0443\u043f\u044b?",checked:u,onChange:function(){l(!u)}})}),u&&Object(x.jsxs)(ce.a.Group,{controlId:"formAttackCount",children:[Object(x.jsx)(ce.a.Label,{children:"\u041a\u043e\u043b-\u0432\u043e \u043f\u0440\u0438\u0441\u0442\u0443\u043f\u043e\u0432"}),Object(x.jsx)(ce.a.Control,{type:"number",placeholder:"\u041a\u043e\u043b-\u0432\u043e \u043f\u0440\u0438\u0441\u0442\u0443\u043f\u043e\u0432",value:i,onChange:function(e){s(e.currentTarget.value)}})]}),Object(x.jsxs)(ce.a.Group,{controlId:"formAttackStrength",children:[Object(x.jsx)(ce.a.Label,{children:"Range"}),Object(x.jsx)(ce.a.Control,{type:"range",min:1,max:3,value:p,step:1,onChange:function(e){return h(e.currentTarget.value)}})]})]})}),Object(x.jsxs)(re.a.Footer,{children:[Object(x.jsx)(g.a,{variant:"secondary",onClick:t,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(x.jsx)(g.a,{variant:"primary",onClick:function(){n({type:"\u041f\u0440\u0438\u0441\u0442\u0443\u043f\u044b",count:i,series:u,strength:p,color:"badge-danger"})},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})},oe=n(18),de=[{_id:1,title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 1",dosage:"\u0434\u043e\u0437\u0438\u0440\u043e\u0432\u043a\u0430 1"},{_id:2,title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 2",dosage:"\u0434\u043e\u0437\u0438\u0440\u043e\u0432\u043a\u0430 2"},{_id:3,title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 3",dosage:"\u0434\u043e\u0437\u0438\u0440\u043e\u0432\u043a\u0430 3"},{_id:4,title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 4",dosage:"\u0434\u043e\u0437\u0438\u0440\u043e\u0432\u043a\u0430 4"},{_id:5,title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 5",dosage:"\u0434\u043e\u0437\u0438\u0440\u043e\u0432\u043a\u0430 5"}],ue=function(e){var t=e.drugsList,n=void 0===t?de:t,r=e.handleClose,c=e.handleSubmit,i=Object(a.useState)((function(){return n.map((function(e){return e.checked=!1,e}))})),s=Object(ae.a)(i,2),o=s[0],d=s[1],u=function(e){var t=e.currentTarget.dataset.id,n=Object(oe.a)(o),a=n.findIndex((function(e){return e._id.toString()===t.toString()}));return-1!==a&&(n[a].checked=!n[a].checked,d(n),!0)};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(re.a.Body,{children:Object(x.jsx)(ce.a,{children:o.map((function(e){return Object(x.jsx)(ce.a.Group,{controlId:"formDrug-".concat(e._id),children:Object(x.jsx)(ce.a.Check,{type:"checkbox","data-id":null===e||void 0===e?void 0:e._id,onChange:u,value:e.checked,label:"".concat(null===e||void 0===e?void 0:e.title," (").concat(null===e||void 0===e?void 0:e.dosage,")"),title:"".concat(null===e||void 0===e?void 0:e.title," (").concat(null===e||void 0===e?void 0:e.dosage,")")})},null===e||void 0===e?void 0:e._id)}))})}),Object(x.jsxs)(re.a.Footer,{children:[Object(x.jsx)(g.a,{variant:"secondary",onClick:r,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(x.jsx)(g.a,{variant:"primary",onClick:function(){var e={type:"\u041b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430",drugs:o.filter((function(e){return e.checked})),color:"badge-warning"};c(e)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})},le=function(e){var t=e.db,n=e.handleClose,r=e.showModal,c=e.modal,i=void 0===c?{}:c,s=i.type,u=i.description,l=i.drugs,b=i.count,j=i.series,p=i.strength,h=Object(a.useState)(!1),m=Object(ae.a)(h,2),O=m[0],f=m[1],v=function(){var e=Object(d.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.time=(new Date).getTime(),n.date=Object($.a)(new Date,"yyyy-MM-dd"),e.next=4,L(t,n);case 4:we.dispatch(G(n)),we.dispatch(Z());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){O!==r&&f(r)}),[r,O]),Object(x.jsxs)(re.a,{show:O,onHide:n,children:[Object(x.jsx)(re.a.Header,{closeButton:!0,children:Object(x.jsx)(re.a.Title,{children:s})}),u&&Object(x.jsx)(ie,{handleClose:n,handleSubmit:v}),b&&j&&p&&Object(x.jsx)(se,{handleClose:n,handleSubmit:v}),l&&Object(x.jsx)(ue,{handleClose:n,handleSubmit:v})]})},be="items",je=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).initDB=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:return t=e.sent,a.setState({db:t}),e.next=6,a.getItems();case 6:case"end":return e.stop()}}),e)}))),a.getItems=Object(d.a)(o.a.mark((function e(){var t,n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.db,n=Object($.a)(new Date(a.props.currentDate),"yyyy-MM-dd"),e.next=4,C(t,be,"date",n);case 4:r=e.sent,-1!==(c=r.findIndex((function(e){return!!e.subType&&"\u043d\u0430\u0447\u0430\u043b\u043e"===(null===e||void 0===e?void 0:e.subType.toLowerCase())})))&&a.setSleepId(r[c]._id),r.length&&a.props.setItems(r);case 8:case"end":return e.stop()}}),e)}))),a.addItem=function(){var e=Object(d.a)(o.a.mark((function e(t){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.state.db,r=n.transaction(be,"readwrite"),c=r.objectStore(be),e.prev=3,e.next=6,c.add(t);case 6:e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(3),e.t0;case 11:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t){return e.apply(this,arguments)}}(),a.handlerShowModal=function(){a.props.showModal()},a.setSleepId=function(e){a.setState({sleepId:e})},a.handleModalFilter=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=t.findIndex((function(t){var n=t.type;return e.toLowerCase()===n.toLowerCase()}));return t[n]},a.state={db:null,_currentDate:new Intl.DateTimeFormat("ru-RU",{day:"numeric",month:"long",year:"numeric"}).format(new Date(a.props.currentDate)),sleepId:-1},a.handlerShowModal=a.handlerShowModal.bind(Object(b.a)(a)),a.handleModalFilter=a.handleModalFilter.bind(Object(b.a)(a)),a.initDB=a.initDB.bind(Object(b.a)(a)),a.getItems=a.getItems.bind(Object(b.a)(a)),a.addItem=a.addItem.bind(Object(b.a)(a)),a.setSleepId=a.setSleepId.bind(Object(b.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.initDB()}},{key:"render",value:function(){var e=this.props,t=e.modalType,n=e.modals,a=e.buttons,r=e.modalShow,c=e.hideModal,i=e.items;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(h.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(x.jsx)(h.a.Brand,{href:"#home",children:"React-Bootstrap"}),Object(x.jsx)(h.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(x.jsxs)(h.a.Collapse,{id:"responsive-navbar-nav",children:[Object(x.jsxs)(m.a,{className:"mr-auto",children:[Object(x.jsx)(m.a.Link,{href:"#features",children:"Features"}),Object(x.jsx)(m.a.Link,{href:"#pricing",children:"Pricing"}),Object(x.jsxs)(O.a,{title:"Dropdown",id:"collasible-nav-dropdown",children:[Object(x.jsx)(O.a.Item,{href:"#action/3.1",children:"Action"}),Object(x.jsx)(O.a.Item,{href:"#action/3.2",children:"Another action"}),Object(x.jsx)(O.a.Item,{href:"#action/3.3",children:"Something"}),Object(x.jsx)(O.a.Divider,{}),Object(x.jsx)(O.a.Item,{href:"#action/3.4",children:"Separated link"})]})]}),Object(x.jsxs)(m.a,{children:[Object(x.jsx)(m.a.Link,{href:"#deets",children:"More deets"}),Object(x.jsx)(m.a.Link,{eventKey:2,href:"#memes",children:"Dank memes"})]})]})]}),Object(x.jsx)(f.a,{children:Object(x.jsx)("div",{className:"row d-flex justify-content-center mt-3 mb-auto",children:Object(x.jsxs)("div",{className:"col-md-6",children:[Object(x.jsx)("h5",{children:this.state._currentDate}),Object(x.jsx)(ee,{sleepId:this.state.sleepId,db:this.state.db,buttons:a,setSleepId:this.setSleepId}),Object(x.jsx)(W,{db:this.state.db,data:i,sleepId:this.state.sleepId,setSleepId:this.setSleepId}),Object(x.jsx)(le,{db:this.state.db,showModal:r,handleClose:c,modal:this.handleModalFilter(t,n)})]})})})]})}}]),n}(a.Component);var pe=Object(ne.b)((function(e){return{buttons:e.buttons.buttons,modalShow:e.buttons.modalShow,modalType:e.buttons.modalType,modals:e.buttons.modals,items:e.data.items,currentDate:e.data.currentDate}}),(function(e){return Object(i.a)({dispatch:e},Object(te.bindActionCreators)({disableButton:V,enableButton:X,setItem:G,hideModal:Z,showModal:Y,setItems:R},e))}))(je),he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,96)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};n(83);function me(e){return we.dispatch(Y(e.currentTarget.dataset.type))}var Oe={buttons:[{type:"\u0421\u043e\u043d",subType:"\u043d\u0430\u0447\u0430\u043b\u043e",icon:"fa-bed",disabled:!1,variant:"primary"},{type:"\u0415\u0434\u0430",icon:"fa-cutlery",disabled:!1,variant:"success",onClick:me},{type:"\u041b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430",icon:"fa-medkit",disabled:!1,variant:"warning",onClick:me},{type:"\u041f\u0440\u0438\u0441\u0442\u0443\u043f\u044b",icon:"fa-heartbeat",disabled:!1,variant:"danger",onClick:me}],modalShow:!1,modalType:"",modals:[{type:"\u0435\u0434\u0430",description:!0,drugs:!1,count:!1,series:!1,strength:!1},{type:"\u041b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430",drugs:!0,description:!1,count:!1,series:!1,strength:!1},{type:"\u041f\u0440\u0438\u0441\u0442\u0443\u043f\u044b",count:!0,series:!0,strength:!0,description:!1,drugs:!1}]},fe={currentDate:(new Date).getTime(),items:[]},xe=function(e){return e.sort((function(e,t){return e.time>t.time?-1:1}))},ve=Object(te.combineReducers)({buttons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:var n=Object(oe.a)(e.buttons),a=n.findIndex((function(e){return e.type===t.payload.type}));return n[a].disabled=!0,Object(i.a)(Object(i.a)({},e),{},{buttons:Object(oe.a)(n)});case K:var r=Object(oe.a)(e.buttons),c=r.findIndex((function(e){return e.type===t.payload.type}));return r[c].disabled=!1,Object(i.a)(Object(i.a)({},e),{},{buttons:Object(oe.a)(r)});case z:return Object(i.a)(Object(i.a)({},e),{},{modalShow:!0,modalType:t.payload.modalType});case Q:return Object(i.a)(Object(i.a)({},e),{},{modalShow:!1,modalType:""});default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(i.a)(Object(i.a)({},e),{},{items:xe([].concat(Object(oe.a)(e.items),[t.payload.item]))});case E:return Object(i.a)(Object(i.a)({},e),{},{items:xe(t.payload.items)});case A:var n=t.payload.item,a=e.items.findIndex((function(e){return e.time===n.time}));if(-1===a)return Object(i.a)({},e);var r=Object(oe.a)(e.items);return r.splice(a,1,n),Object(i.a)(Object(i.a)({},e),{},{items:xe(Object(oe.a)(r))});default:return e}}}),ye=n(61),ge=n(62),we=Object(te.createStore)(ve,Object(ge.composeWithDevTools)(Object(te.applyMiddleware)(ye.a)));c.a.render(Object(x.jsx)(ne.a,{store:we,children:Object(x.jsx)(pe,{})}),document.getElementById("root")),he()}},[[84,1,2]]]);
//# sourceMappingURL=main.43291cb1.chunk.js.map