(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{83:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},95:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t),n.d(t,"store",(function(){return lt}));var a=n(0),r=n(28),c=n.n(r),s=(n(83),n(38)),i=n(13),o=n(108),u=n(109),d=n(1);function l(){return Object(d.jsxs)(o.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(d.jsx)(s.b,{className:"navbar-brand",to:"/",children:"\u0414\u043d\u0435\u0432\u043d\u0438\u043a"}),Object(d.jsx)(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(d.jsx)(o.a.Collapse,{id:"responsive-navbar-nav",children:Object(d.jsxs)(u.a,{children:[Object(d.jsx)(s.b,{className:"nav-link",to:"/settings",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),Object(d.jsx)(s.b,{className:"nav-link",to:"/stats",disabled:!0,children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"})]})})]})}var b=n(7),p=n(6),h=n.n(p),j=n(11),f=n(33),O=n(34),m=n(18),v=n(37),y=n(36),x=n(103),g=n(100),w=(n(91),[1,2,3]),D=function(e){var t=e.count,n=w.map((function(e){return Object(d.jsx)("span",{className:"fa fa-star ".concat(e<=t&&"checked")},e)}));return Object(d.jsx)("span",{className:"rating",children:n})},k=n(99),C=n(71),S=n(78);function I(){return T.apply(this,arguments)}function T(){return(T=Object(j.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.db){e.next=6;break}return e.next=3,M();case 3:return t=e.sent,this.props.setDB(t),e.abrupt("return",t);case 6:return e.abrupt("return",this.props.db);case 7:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}function M(){return N.apply(this,arguments)}function N(){return(N=Object(j.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.a)("epileptic_diary",1,{upgrade:function(e){e.createObjectStore("items",{keyPath:"_id",autoIncrement:!0}).createIndex("date","date"),e.createObjectStore("settings",{keyPath:"_id",autoIncrement:!0}).createIndex("type","type")}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,t,n,a){return B.apply(this,arguments)}function B(){return(B=Object(j.a)(h.a.mark((function e(t,n,a,r){var c,s,i,o,u,d,l,b,p,j;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=t.transaction(n),s=[],i=c.store.index(a),o=!0,u=!1,e.prev=5,l=Object(C.a)(i.iterate(r));case 7:return e.next=9,l.next();case 9:return b=e.sent,o=b.done,e.next=13,b.value;case 13:if(p=e.sent,o){e.next=20;break}j=p,s.push(j.value);case 17:o=!0,e.next=7;break;case 20:e.next=26;break;case 22:e.prev=22,e.t0=e.catch(5),u=!0,d=e.t0;case 26:if(e.prev=26,e.prev=27,o||null==l.return){e.next=31;break}return e.next=31,l.return();case 31:if(e.prev=31,!u){e.next=34;break}throw d;case 34:return e.finish(31);case 35:return e.finish(26);case 36:return e.abrupt("return",s);case 37:case"end":return e.stop()}}),e,null,[[5,22,26,36],[27,,31,35]])})))).apply(this,arguments)}function E(e,t,n){return F.apply(this,arguments)}function F(){return(F=Object(j.a)(h.a.mark((function e(t,n,a){var r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.transaction("items"),c=r.objectStore(n),e.abrupt("return",c.get(a));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e,t,n){return _.apply(this,arguments)}function _(){return(_=Object(j.a)(h.a.mark((function e(t,n,a){var r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.transaction(a,"readwrite"),c=r.objectStore(a),e.prev=2,e.next=5,c.add(n);case 5:return e.abrupt("return",e.sent);case 8:throw e.prev=8,e.t0=e.catch(2),e.t0;case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}function H(e,t,n){return P.apply(this,arguments)}function P(){return(P=Object(j.a)(h.a.mark((function e(t,n,a){var r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.transaction(a,"readwrite"),c=r.objectStore(a),e.prev=2,e.next=5,c.put(n);case 5:e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(2),e.t0;case 10:case"end":return e.stop()}}),e,null,[[2,7]])})))).apply(this,arguments)}var A="SET_ITEM",U="SET_ITEMS",W="RESET_ITEM",G="SET_DATE",K="SET_DB",J=function(e){return{type:U,payload:{items:e}}},X=function(e){return{type:A,payload:{item:e}}},Y=function(e){return{type:W,payload:{item:e}}},q=function(e){return{type:G,payload:{date:e}}},z=function(e){return{type:K,payload:{db:e}}},Q=function(e){var t=new Date(e);return new Intl.DateTimeFormat("ru-RU",{hour:"numeric",minute:"numeric"}).format(t)},V=function(e,t){var n=36e5,a=t-e,r="",c=Math.trunc(a/n),s=Math.trunc((a-c*n)/6e4);return c>0&&(r+="".concat(c," \u0447\u0430\u0441\u043e\u0432 \u0438 ")),r+="".concat(s," \u043c\u0438\u043d\u0443\u0442")},Z=function(e){var t=e.db,n=e.type,a=e.drugs,r=void 0===a?[]:a,c=e.subType,s=e.description,i=e.time,o=e.color,u=e.quality,l=e.strength,b=e.count,p=e.series,f=e.timeEnd,O=e.sleepId,m=e.setSleepId,v=r.map((function(e,t){var n=e.title,a=e.dosage;return Object(d.jsxs)("li",{children:[n," - ",a]},t)})),y=Object(d.jsx)(k.a,{variant:"primary",onClick:Object(j.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t,"items",O);case 2:return(n=e.sent).subType="\u043a\u043e\u043d\u0435\u0446",n.timeEnd=(new Date).getTime(),e.next=7,H(t,n,"items");case 7:m(-1),lt.dispatch(Y(n));case 9:case"end":return e.stop()}}),e)}))),"data-type":"\u0421\u043e\u043d","data-sub-type":"\u043a\u043e\u043d\u0435\u0446","data-color":"badge-primary",children:"\u041f\u0440\u043e\u0431\u0443\u0436\u0434\u0435\u043d\u0438\u0435"});return Object(d.jsx)("div",{className:"vertical-timeline-item vertical-timeline-element",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"vertical-timeline-element-icon bounce-in",children:Object(d.jsx)("i",{className:"badge badge-dot badge-dot-xl ".concat(o),children:" "})}),Object(d.jsxs)("div",{className:"vertical-timeline-element-content bounce-in",children:[Object(d.jsxs)("h4",{className:"timeline-title",children:[n,b&&" - ".concat(b)]}),"\u0441\u043e\u043d"===n.toLowerCase()&&"\u043a\u043e\u043d\u0435\u0446"!==c.toLowerCase()&&y,"\u0441\u043e\u043d"===n.toLowerCase()&&"\u043a\u043e\u043d\u0435\u0446"===c.toLowerCase()&&f&&Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"\u041f\u0440\u043e\u0431\u0443\u0436\u0434\u0435\u043d\u0438\u0435:"})," ",Q(f)]}),"\u0441\u043e\u043d"===n.toLowerCase()&&"\u043a\u043e\u043d\u0435\u0446"===c.toLowerCase()&&f&&Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c:"})," ",V(i,f)]}),s&&Object(d.jsx)("p",{children:s}),u&&Object(d.jsxs)("span",{children:["\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043d\u0430: ",Object(d.jsx)(D,{count:u})]}),p&&Object(d.jsx)("div",{children:Object(d.jsx)("b",{children:"\u0421\u0435\u0440\u0438\u044f"})}),l&&Object(d.jsxs)("span",{children:["\u0421\u0438\u043b\u0430 \u043f\u0440\u0438\u0441\u0442\u0443\u043f\u043e\u0432: ",Object(d.jsx)(D,{count:l})]}),r&&v,Object(d.jsx)("span",{className:"vertical-timeline-element-date",children:Q(i)})]})]})})},$=function(e){var t=e.db,n=e.data,a=e.sleepId,r=e.setSleepId;return n.map((function(e,n){return Object(d.jsx)("div",{className:"vertical-timeline vertical-timeline--animate vertical-timeline--one-column",children:Object(d.jsx)(Z,Object(b.a)(Object(b.a)({db:t},e),{},{sleepId:a,setSleepId:r}))},n)}))},ee=(n(92),n(93),"DISABLE_BUTTON"),te="ENABLE_BUTTON",ne="SHOW_MODAL",ae="HIDE_MODAL",re=function(e){return{type:ee,payload:{type:e}}},ce=function(e){return{type:te,payload:{type:e}}},se=function(e){return{type:ne,payload:{modalType:e}}},ie=function(){return{type:ae}},oe=n(105),ue=function(e){var t=e.sleepId,n=e.db,a=e.buttons,r=e.setSleepId,c=e.notToday,s=a.map((function(e,a){var c=e.variant,s=e.onClick,i=e.icon,o=e.type,u=e.subType;return Object(d.jsx)(k.a,{variant:c,disabled:-1!==t&&"\u0441\u043e\u043d"===o.toLowerCase(),onClick:s||function(){var e=Object(j.a)(h.a.mark((function e(t){var a,c,s,i,o,u;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.currentTarget.dataset,c=a.type,s=a.subType,i=a.color,o=t.currentTarget.disabled.disabled,u={type:c,subType:s,time:(new Date).getTime(),color:"badge-".concat(i),date:Object(oe.a)(new Date,"yyyy-MM-dd")},e.t0=r,e.next=6,R(n,u,"items");case 6:e.t1=e.sent,(0,e.t0)(e.t1),o?lt.dispatch(ce(c)):(lt.dispatch(re(c)),lt.dispatch(X(u)));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),"data-type":o,"data-sub-type":u,"data-color":c,children:Object(d.jsx)("i",{className:"fa ".concat(i),"aria-hidden":"true"})},a)}));return Object(d.jsx)("div",{className:"buttons-panel",style:{display:c&&"none"},children:s})},de=n(21),le=n(35),be=n(14),pe=n(106),he=n(107),je=function(e){var t=e.handleClose,n=e.handleSubmit,r=Object(a.useState)(""),c=Object(be.a)(r,2),s=c[0],i=c[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(pe.a.Body,{children:Object(d.jsx)(he.a,{children:Object(d.jsxs)(he.a.Group,{controlId:"formDescription",children:[Object(d.jsx)(he.a.Label,{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(d.jsx)(he.a.Control,{as:"textarea",rows:3,value:s,onChange:function(e){i(e.currentTarget.value)}}),Object(d.jsx)(he.a.Text,{className:"text-muted",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]})})}),Object(d.jsxs)(pe.a.Footer,{children:[Object(d.jsx)(k.a,{variant:"secondary",onClick:t,children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(d.jsx)(k.a,{variant:"primary",onClick:function(){n({description:s,type:"\u0415\u0434\u0430",color:"badge-success"})},disabled:!s,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})},fe=function(e){var t=e.handleClose,n=e.handleSubmit,r=Object(a.useState)(1),c=Object(be.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(!1),u=Object(be.a)(o,2),l=u[0],b=u[1],p=Object(a.useState)(1),h=Object(be.a)(p,2),j=h[0],f=h[1],O=Object(a.useState)("\u0421\u043b\u0430\u0431\u044b\u0439 \u043f\u0440\u0438\u0441\u0442\u0443\u043f"),m=Object(be.a)(O,2),v=m[0],y=m[1],x=Object(a.useState)("secondary"),g=Object(be.a)(x,2),w=g[0],D=g[1];return Object(a.useEffect)((function(){switch(j){case"1":return D("secondary"),void y("\u0421\u043b\u0430\u0431\u044b\u0439 \u043f\u0440\u0438\u0441\u0442\u0443\u043f");case"2":return D("warning"),void y("\u0421\u0440\u0435\u0434\u043d\u0438\u0439 \u043f\u0440\u0438\u0441\u0442\u0443\u043f");case"3":return D("danger"),void y("\u0421\u0438\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u0438\u0441\u0442\u0443\u043f");default:return D("secondary"),void y("\u0421\u043b\u0430\u0431\u044b\u0439 \u043f\u0440\u0438\u0441\u0442\u0443\u043f")}}),[j]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(pe.a.Body,{children:Object(d.jsxs)(he.a,{inline:!0,style:{justifyContent:"space-between"},children:[Object(d.jsx)(he.a.Group,{controlId:"formAttackSeries",className:"mb-2 mr-sm-2",children:Object(d.jsx)(he.a.Check,{type:"checkbox",id:"checkbox-series",label:"\u0421\u0435\u0440\u0438\u0439\u043d\u044b\u0435 \u043f\u0440\u0438\u0441\u0442\u0443\u043f\u044b?",checked:l,onChange:function(){b(!l)}})}),Object(d.jsx)(he.a.Group,{controlId:"formAttackCount",className:"mb-2 mr-sm-2",children:Object(d.jsx)(he.a.Control,{type:"number",placeholder:"\u041a\u043e\u043b-\u0432\u043e \u043f\u0440\u0438\u0441\u0442\u0443\u043f\u043e\u0432",value:s,disabled:!l,onChange:function(e){i(e.currentTarget.value)}})}),Object(d.jsxs)(he.a.Group,{controlId:"formAttackStrength",className:"mb-2",style:{width:"100%"},children:[Object(d.jsx)(he.a.Label,{children:"\u0421\u0438\u043b\u0430 \u043f\u0440\u0438\u0441\u0442\u0443\u043f\u0430:"}),Object(d.jsx)(he.a.Control,{type:"range",min:1,max:3,value:j,step:1,onChange:function(e){return f(e.currentTarget.value)}}),Object(d.jsx)(he.a.Text,{className:"text-".concat(w),children:v})]})]})}),Object(d.jsxs)(pe.a.Footer,{children:[Object(d.jsx)(k.a,{variant:"secondary",onClick:t,children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(d.jsx)(k.a,{variant:"primary",onClick:function(){n({type:"\u041f\u0440\u0438\u0441\u0442\u0443\u043f\u044b",count:s,series:l,strength:j,color:"badge-warning"})},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})},Oe=n(19),me=function(e){var t=e.drugsList,n=void 0===t?[]:t,r=e.handleClose,c=e.handleSubmit,s=Object(a.useState)((function(){return n.map((function(e){return e.checked=!1,e}))})),i=Object(be.a)(s,2),o=i[0],u=i[1],l=function(e){var t=e.currentTarget.dataset.id,n=Object(Oe.a)(o),a=n.findIndex((function(e){return e._id.toString()===t.toString()}));return-1!==a&&(n[a].checked=!n[a].checked,u(n),!0)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(pe.a.Body,{children:[0===o.length&&Object(d.jsxs)("h3",{children:["\u041d\u0435\u0442 \u043d\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430, \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 ",Object(d.jsx)(ve,{to:"/settings",label:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})]}),Object(d.jsx)(he.a,{children:o.map((function(e){var t=Object(d.jsxs)("span",{children:[e.title," ",Object(d.jsx)(g.a,{variant:"info",children:e.dosage})]});return Object(d.jsx)(he.a.Group,{controlId:"formDrug-".concat(e.title,"-").concat(e.dosage),children:Object(d.jsx)(he.a.Check,{type:"checkbox","data-id":null===e||void 0===e?void 0:e._id,onChange:l,value:e.checked,label:t})},"".concat(e.title,"-").concat(e.dosage))}))})]}),Object(d.jsxs)(pe.a.Footer,{children:[Object(d.jsx)(k.a,{variant:"secondary",onClick:r,children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(d.jsx)(k.a,{variant:"primary",onClick:function(){var e={type:"\u041b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430",drugs:o.filter((function(e){return e.checked})),color:"badge-danger"};c(e)},disabled:0===o.length||0===o.filter((function(e){return e.checked})).length,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})};function ve(e){var t=e.label,n=e.to,a=e.activeOnlyWhenExact,r=Object(i.g)({path:n,exact:a});return Object(d.jsxs)("span",{className:r?"active":"",children:[r&&"> ",Object(d.jsx)(s.b,{to:n,children:t})]})}var ye=function(e){var t=e.db,n=e.handleClose,r=e.showModal,c=e.modal,s=void 0===c?{}:c,i=e.drugsList,o=s.type,u=s.description,l=s.drugs,b=s.count,p=s.series,f=s.strength,O=Object(a.useState)(!1),m=Object(be.a)(O,2),v=m[0],y=m[1],x=function(){var e=Object(j.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.time=(new Date).getTime(),n.date=Object(oe.a)(new Date,"yyyy-MM-dd"),e.next=4,R(t,n,"items");case 4:lt.dispatch(X(n)),lt.dispatch(ie());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){v!==r&&y(r)}),[r,v]),Object(d.jsxs)(pe.a,{show:v,onHide:n,children:[Object(d.jsx)(pe.a.Header,{closeButton:!0,children:Object(d.jsx)(pe.a.Title,{children:o})}),u&&Object(d.jsx)(je,{handleClose:n,handleSubmit:x}),b&&p&&f&&Object(d.jsx)(fe,{handleClose:n,handleSubmit:x}),l&&Object(d.jsx)(me,{drugsList:i,handleClose:n,handleSubmit:x})]})},xe=n(102),ge=function(e){return e.sort((function(e,t){return e.time>t.time?-1:1}))},we="SET_DRUG",De="SET_DRUGS",ke=function(e){return{type:we,payload:{drug:e}}},Ce=function(e){return{type:De,payload:{drugs:e}}},Se=n(74),Ie=function(e){return Object(oe.a)(new Date(e),"yyyy-MM-dd")},Te=function(e){var t=e.setDate,n=e.currentDate,r=Object(a.useState)((function(){return Ie(n)})),c=Object(be.a)(r,2),s=c[0],i=c[1];return Object(d.jsx)(Se.a,{className:"date-picker",children:Object(d.jsx)(he.a,{children:Object(d.jsx)(he.a.Control,{type:"date",className:"date-picker-input",value:s,onKeyDown:function(e){return e.preventDefault()},onChange:function(e){var n=e.currentTarget.value;n&&(i(Ie(n)),t(n))}})})})},Me=n(60),Ne=n(110),Le=n(101),Be=n(75);function Ee(e,t){return e.filter((function(e){return e.type.toLowerCase()===t.toLowerCase()}))}function Fe(e){return e.reduce((function(e,t){var n=e.findIndex((function(e){return e.date===t.date}));if(-1===n)return[].concat(Object(Oe.a)(e),[{date:t.date,count:+t.count,strength:+t.strength,n:1}]);var a=e[n],r=a.count,c=a.strength,s=a.n,i=r+ +t.count,o=c+ +t.strength,u=s+1;return e[n]=Object(b.a)(Object(b.a)({},e[n]),{},{count:i,strength:o,n:u}),e}),[])}function Re(e){var t=[["x"],["y0"],["y1"]];if(0!==e.length){for(var n=Object(Ne.a)(new Date(e[0].date),Object(Le.a)(new Date(e[0].date))),a=0;a<n;a++)t[0].push(Object(oe.a)(Object(Be.a)(Object(Le.a)(new Date(e[0].date)),a),"yyyy-MM-dd")),t[1].push(0),t[2].push(0);e.forEach((function(e,n,a){for(var r=e.date,c=e.count,s=e.strength,i=e.n,o=0!==n?Object(Ne.a)(new Date(r),new Date(a[n-1].date)):0,u=1;u<o;u++)t[0].push(Object(oe.a)(Object(Be.a)(new Date(a[n-1].date),u),"yyyy-MM-dd")),t[1].push(0),t[2].push(0);t[0].push(r),t[1].push(+c),t[2].push(+(s/i).toFixed(2))}))}return t}function _e(e){var t=e.colors,n=e.columns,a=e.names,r=e.types;return{colors:He(t,{}),columns:n,names:He(a,{}),types:He(r,{x:"x"})}}function He(e,t){return e.reduce((function(e,t,n){return Object(b.a)(Object(b.a)({},e),{},Object(Me.a)({},"y".concat(n),t))}),t)}var Pe="items",Ae=function(e){Object(v.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).initDB=Object(j.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.call(Object(m.a)(a));case 2:if(!a.props.db){e.next=7;break}return e.next=5,a.getItems();case 5:e.next=8;break;case 7:a.props.setItems([]);case 8:case"end":return e.stop()}}),e)}))),a.getItems=Object(j.a)(h.a.mark((function e(){var t,n,r,c,s,i,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props.db,r=Object(oe.a)(new Date(a.props.currentDate),"yyyy-MM-dd"),e.next=4,L(n,Pe,"date",r);case 4:return c=e.sent,e.t0=ge,e.next=8,L(n,Pe,"date",Object(oe.a)(Object(xe.a)(new Date(a.props.currentDate),1),"yyyy-MM-dd"));case 8:return e.t1=e.sent,s=(0,e.t0)(e.t1),"\u0441\u043e\u043d"===(null===(t=s[0])||void 0===t?void 0:t.type.toLowerCase())&&c.push(s[0]),-1!==(i=c.findIndex((function(e){return!!e.subType&&"\u043d\u0430\u0447\u0430\u043b\u043e"===(null===e||void 0===e?void 0:e.subType.toLowerCase())})))&&a.setSleepId(c[i]._id),c.length?a.props.setItems(c):a.props.setItems([]),e.next=16,L(n,"settings","type","drug");case 16:(o=e.sent).length&&a.props.setDrugs(o);case 18:case"end":return e.stop()}}),e)}))),a.addItem=function(){var e=Object(j.a)(h.a.mark((function e(t){var n,r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.state.db,r=n.transaction(Pe,"readwrite"),c=r.objectStore(Pe),e.prev=3,e.next=6,c.add(t);case 6:e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(3),e.t0;case 11:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t){return e.apply(this,arguments)}}(),a.setDateFromDatepicker=function(e){a.props.setDate(e)},a.handlerShowModal=function(){a.props.showModal()},a.setSleepId=function(e){a.setState({sleepId:e})},a.handleModalFilter=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=t.findIndex((function(t){var n=t.type;return e.toLowerCase()===n.toLowerCase()}));return t[n]},a.state={_currentDate:new Intl.DateTimeFormat("ru-RU",{day:"numeric",month:"long",year:"numeric"}).format(new Date(a.props.currentDate)),today:Object(oe.a)(new Date,"yyyy-MM-dd"),sleepId:-1},a.handlerShowModal=a.handlerShowModal.bind(Object(m.a)(a)),a.handleModalFilter=a.handleModalFilter.bind(Object(m.a)(a)),a.initDB=a.initDB.bind(Object(m.a)(a)),a.getItems=a.getItems.bind(Object(m.a)(a)),a.addItem=a.addItem.bind(Object(m.a)(a)),a.setSleepId=a.setSleepId.bind(Object(m.a)(a)),a.setDateFromDatepicker=a.setDateFromDatepicker.bind(Object(m.a)(a)),a}return Object(O.a)(n,[{key:"componentDidMount",value:function(){this.initDB()}},{key:"componentDidUpdate",value:function(e,t,n){e.currentDate!==this.props.currentDate&&(this.setState({_currentDate:new Intl.DateTimeFormat("ru-RU",{day:"numeric",month:"long",year:"numeric"}).format(new Date(this.props.currentDate))}),this.getItems())}},{key:"render",value:function(){var e=this.props,t=e.modalType,n=e.modals,a=e.buttons,r=e.modalShow,c=e.hideModal,s=e.items,i=e.drugs,o=Ee(s,"\u043f\u0440\u0438\u0441\u0442\u0443\u043f\u044b").reduce((function(e,t){return e+ +t.count}),0);return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(x.a,{children:Object(d.jsx)("div",{className:"row d-flex justify-content-center mt-3 mb-auto",children:Object(d.jsxs)("div",{className:"col-md-6",children:[Object(d.jsxs)("h5",{children:[this.state._currentDate,Object(d.jsx)(g.a,{variant:"warning",children:o})]}),Object(d.jsx)(Te,{setDate:this.setDateFromDatepicker,currentDate:this.props.currentDate}),Object(d.jsx)(ue,{sleepId:this.state.sleepId,db:this.props.db,buttons:a,setSleepId:this.setSleepId,notToday:Object(oe.a)(this.props.currentDate,"yyyy-MM-dd")!==this.state.today}),Object(d.jsx)($,{db:this.props.db,data:s,sleepId:this.state.sleepId,setSleepId:this.setSleepId}),Object(d.jsx)(ye,{db:this.props.db,showModal:r,handleClose:c,modal:this.handleModalFilter(t,n),drugsList:i})]})})})})}}]),n}(a.Component);var Ue=Object(le.b)((function(e){return{buttons:e.buttons.buttons,modalShow:e.buttons.modalShow,modalType:e.buttons.modalType,modals:e.buttons.modals,items:e.data.items,currentDate:e.data.currentDate,drugs:e.settings.drugs,db:e.data.db}}),(function(e){return Object(b.a)({dispatch:e},Object(de.bindActionCreators)({disableButton:re,enableButton:ce,setItem:X,hideModal:ie,showModal:se,setItems:J,setDrugs:Ce,setDate:q,setDB:z},e))}))(Ae),We=function(e){var t=e.setDrug,n=Object(a.useState)(""),r=Object(be.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(""),o=Object(be.a)(i,2),u=o[0],l=o[1];return Object(d.jsxs)(he.a,{inline:!0,children:[Object(d.jsx)(he.a.Control,{className:"mb-2 mr-sm-2",id:"title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:c,onChange:function(e){s(e.currentTarget.value)}}),Object(d.jsx)(he.a.Control,{className:"mb-2 mr-sm-2",type:"number",id:"dosage",placeholder:"\u0414\u043e\u0437\u0438\u0440\u043e\u0432\u043a\u0430",value:u,onChange:function(e){l(e.currentTarget.value)}}),Object(d.jsx)(k.a,{type:"submit",className:"mb-2",onClick:function(e){e.preventDefault(),t({type:"drug",title:c,dosage:u,time:(new Date).getTime(),archive:!1}),s(""),l("")},disabled:""===c||u<=0,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})},Ge=n(111),Ke=n(112),Je=function(e){var t=e.data.map((function(e){return Object(d.jsxs)(Ge.a.Item,{children:[e.title," ",Object(d.jsx)(g.a,{variant:"info",children:e.dosage})]},e._id)}));return Object(d.jsxs)(Ke.a,{children:[Object(d.jsx)(Ke.a.Header,{children:Object(d.jsx)("h6",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432"})}),Object(d.jsx)(Ge.a,{children:t})]})},Xe="settings",Ye=function(e){Object(v.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).initDB=Object(j.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:if(t=e.sent,a.setState({db:t}),!(a.props.drugs.length<=0)){e.next=7;break}return e.next=7,a.getItems();case 7:case"end":return e.stop()}}),e)}))),a.getItems=Object(j.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.db,e.next=3,L(t,Xe,"type","drug");case 3:(n=e.sent).length&&a.props.setDrugs(n);case 5:case"end":return e.stop()}}),e)}))),a.addItem=function(){var e=Object(j.a)(h.a.mark((function e(t){var n,r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.state.db,r=n.transaction(Xe,"readwrite"),c=r.objectStore(Xe),e.prev=3,e.next=6,c.add(t);case 6:e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(3),e.t0;case 11:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t){return e.apply(this,arguments)}}(),a.setDrug=function(){var e=Object(j.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.addItem(t);case 2:return e.next=4,a.getItems();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={db:null,drug:{type:"drug",title:"",dosage:0}},a.initDB=a.initDB.bind(Object(m.a)(a)),a.getItems=a.getItems.bind(Object(m.a)(a)),a.setDrug=a.setDrug.bind(Object(m.a)(a)),a}return Object(O.a)(n,[{key:"componentDidMount",value:function(){this.initDB()}},{key:"render",value:function(){return Object(d.jsx)(x.a,{children:Object(d.jsx)("div",{className:"row d-flex justify-content-center mt-3 mb-auto",children:Object(d.jsxs)("div",{className:"col-md-6",children:[Object(d.jsx)("h5",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),Object(d.jsx)("div",{className:"dropdown-divider"}),Object(d.jsx)("h6",{children:"\u041b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430"}),Object(d.jsx)(We,{setDrug:this.setDrug}),Object(d.jsx)(Je,{data:ge(this.props.drugs)}),Object(d.jsx)("div",{className:"dropdown-divider"})]})})})}}]),n}(a.Component);var qe=Object(le.b)((function(e){return{drugs:e.settings.drugs}}),(function(e){return Object(b.a)({dispatch:e},Object(de.bindActionCreators)({setDrugs:Ce,setDrug:ke},e))}))(Ye),ze=n(104),Qe=n(69),Ve={margin:20,padding:40,dpi:2,lineWidth:4,helperLineCount:5};Ve.width=window.screen.width>window.screen.height?window.screen.width/2-2*Ve.margin:window.screen.width-2*Ve.margin,Ve.height=window.screen.height/2,Ve.dpiWidth=Ve.width*Ve.dpi,Ve.dpiHeight=Ve.height*Ve.dpi,Ve.viewHeight=Ve.dpiHeight-2*Ve.padding;var Ze=Ve,$e=(n(95),function(e){Object(v.a)(n,e);var t=Object(y.a)(n);function n(e){var r;return Object(f.a)(this,n),(r=t.call(this,e)).state={width:Ze.width,height:Ze.height},r.canvas=Object(a.createRef)(),r}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var e=this.canvas.current;e.style.width=Ze.width+"px",e.style.height=Ze.height+"px",e.width=Ze.dpiWidth,e.height=Ze.dpiHeight,e.style.marginLeft=Ze.margin+"px",e.style.marginRight=Ze.margin+"px",this.updateCanvas()}},{key:"componentDidUpdate",value:function(e,t,n){this.updateCanvas()}},{key:"updateCanvas",value:function(){var e=this;if(this.props.data){var t=this.props.data,n=t.columns,a=t.colors,r=t.types,c=Ze.dpiWidth,s=Ze.dpiHeight,i=Ze.viewHeight,o=c,u=this.computeBoundaries(n,r),d=Object(be.a)(u,2),l=d[0],b=d[1],p=this.canvas.current.getContext("2d");p.font="30px monospace",p.fillStyle="#96a2aa",p.clearRect(0,0,c,s);var h=Math.floor(i/(b-l)),j=o/(n[0].length-1),f=n.filter((function(e){return"line"===r[e[0]]})),O=n.filter((function(e){return"block"===r[e[0]]})),m=n.filter((function(e){return"line"!==r[e[0]]&&"block"!==r[e[0]]}))[0];this.drawHelperYLines(p,l,b),this.drawHelperXText(p,m,j),f.map(this.toLineCoords(j,h)).forEach((function(t,n){var r=a[f[n][0]];e.line(p,t,{color:r})})),O.map(this.toBlockCoords(j,h)).forEach((function(t,n){var r=a[O[n][0]];e.block(p,t,{color:r})}))}}},{key:"toLineCoords",value:function(e,t){return function(n){return n.map((function(n,a){return[Math.floor((a-1)*e+e/3),Math.floor(Ze.dpiHeight-Ze.padding-n*t)]})).filter((function(e,t){return 0!==t}))}}},{key:"toBlockCoords",value:function(e,t){return function(n){return n.map((function(n,a){return[Math.floor((a-1)*e),Math.floor(Ze.dpiHeight-Ze.padding-n*t),e/1.5,n*t]})).filter((function(e,t){return 0!==t}))}}},{key:"computeBoundaries",value:function(e,t){var n=null,a=null;return e.forEach((function(e){if(!t["line"!==e[0]||"block"!==t[e[0]]]){"number"!==typeof n&&(n=e[1]),"number"!==typeof a&&(a=e[1]),n>e[1]&&(n=e[1]),a<e[1]&&(a=e[1]);for(var r=2;r<e.length;r++)n>e[r]&&(n=e[r]),a<e[r]&&(a=e[r])}})),[n,a]}},{key:"drawHelperXText",value:function(e,t,n){var a=Math.round(t.length/6);e.beginPath();for(var r=1;r<t.length;r+=a){var c=new Date(t[r]).getDate(),s=(r-1)*n;e.fillText(c.toString(),s,Ze.dpiHeight)}e.closePath()}},{key:"drawHelperYLines",value:function(e,t,n){var a=Ze.viewHeight/Ze.helperLineCount,r=(n-t)/Ze.helperLineCount;e.save(),e.beginPath(),e.strokeStyle="#bbb",e.font="20px monospace",e.fillStyle="#96a2aa";for(var c=1;c<=Ze.helperLineCount;c++){var s=a*c,i=Math.round(n-r*c);e.moveTo(0,s+Ze.padding),e.fillText(i.toString(),0,s+Ze.padding),e.setLineDash([15,5]),e.lineTo(Ze.dpiWidth,s+Ze.padding)}e.stroke(),e.closePath(),e.restore()}},{key:"line",value:function(e,t,n){var a=n.color;e.beginPath(),e.lineWidth=4,e.strokeStyle=a;var r,c=Object(Qe.a)(t);try{for(c.s();!(r=c.n()).done;){var s=Object(be.a)(r.value,2),i=s[0],o=s[1];e.lineTo(i,o)}}catch(u){c.e(u)}finally{c.f()}e.stroke(),e.closePath()}},{key:"block",value:function(e,t,n){var a=n.color;e.beginPath(),e.lineWidth=4,e.fillStyle=a;var r,c=Object(Qe.a)(t);try{for(c.s();!(r=c.n()).done;){var s=Object(be.a)(r.value,4),i=s[0],o=s[1],u=s[2],d=s[3];e.rect(i,o,u,d)}}catch(l){c.e(l)}finally{c.f()}e.stroke(),e.fill(),e.closePath()}},{key:"render",value:function(){return Object(d.jsx)("canvas",{ref:this.canvas,width:this.state.width,height:this.state.height})}}]),n}(a.Component)),et=function(e){Object(v.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).initDB=Object(j.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.call(Object(m.a)(a));case 2:if(!e.sent){e.next=6;break}return e.next=6,a.prepareData();case 6:case"end":return e.stop()}}),e)}))),a.prepareData=Object(j.a)(h.a.mark((function e(){var t,n,r,c,s,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.db,e.next=3,L(t,"items","date",IDBKeyRange.bound(a.state.startOfRange,a.state.endOfRange));case 3:n=e.sent,r=Ee(n,"\u043f\u0440\u0438\u0441\u0442\u0443\u043f\u044b"),c=Fe(r),s=Re(c),i={colors:["#ffc107","#F34C40"],columns:s,names:["Count","Strength"],types:["block","block"]},a.setState({data4Stats:_e(i)});case 9:case"end":return e.stop()}}),e)}))),a.state={month:Object(oe.a)(new Date,"yyyy-MM"),startOfRange:Object(oe.a)(Object(Le.a)(new Date),"yyyy-MM-dd"),endOfRange:Object(oe.a)(Object(ze.a)(new Date),"yyyy-MM-dd"),data4Stats:null},a.initDB=a.initDB.bind(Object(m.a)(a)),a.prepareData=a.prepareData.bind(Object(m.a)(a)),a}return Object(O.a)(n,[{key:"componentDidMount",value:function(){this.initDB()}},{key:"componentDidUpdate",value:function(e,t,n){t.startOfRange!==this.state.startOfRange&&t.endOfRange!==this.state.endOfRange&&this.prepareData()}},{key:"render",value:function(){var e=this;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(Se.a,{className:"date-picker",children:Object(d.jsx)(he.a,{children:Object(d.jsx)(he.a.Control,{type:"month",className:"month-picker-input",onKeyDown:function(e){return e.preventDefault()},value:this.state.month,onChange:function(t){var n=t.currentTarget.value;e.setState({month:n,startOfRange:Object(oe.a)(Object(Le.a)(new Date(n)),"yyyy-MM-dd"),endOfRange:Object(oe.a)(Object(ze.a)(new Date(n)),"yyyy-MM-dd")})}})})}),Object(d.jsx)($e,{data:this.state.data4Stats})]})}}]),n}(a.Component);var tt=Object(le.b)((function(e){return{db:e.data.db}}),(function(e){return Object(b.a)({dispatch:e},Object(de.bindActionCreators)({setDB:z},e))}))(et);function nt(){return Object(d.jsxs)(s.a,{basename:"/EpilepticDiary",children:[Object(d.jsx)(l,{}),Object(d.jsxs)(i.d,{children:[Object(d.jsx)(i.b,{path:"/settings",children:Object(d.jsx)(qe,{})}),Object(d.jsx)(i.b,{path:"/stats",children:Object(d.jsx)(tt,{})}),Object(d.jsx)(i.b,{path:"/",children:Object(d.jsx)(Ue,{})}),Object(d.jsx)(i.a,{to:"/"})]})]})}var at=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,113)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};n(96);function rt(e){return lt.dispatch(se(e.currentTarget.dataset.type))}var ct={buttons:[{type:"\u0421\u043e\u043d",subType:"\u043d\u0430\u0447\u0430\u043b\u043e",icon:"fa-bed",disabled:!1,variant:"primary"},{type:"\u0415\u0434\u0430",icon:"fa-cutlery",disabled:!1,variant:"success",onClick:rt},{type:"\u041b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430",icon:"fa-medkit",disabled:!1,variant:"danger",onClick:rt},{type:"\u041f\u0440\u0438\u0441\u0442\u0443\u043f\u044b",icon:"fa-heartbeat",disabled:!1,variant:"warning",onClick:rt}],modalShow:!1,modalType:"",modals:[{type:"\u0435\u0434\u0430",description:!0,drugs:!1,count:!1,series:!1,strength:!1},{type:"\u041b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u0430",drugs:!0,description:!1,count:!1,series:!1,strength:!1},{type:"\u041f\u0440\u0438\u0441\u0442\u0443\u043f\u044b",count:!0,series:!0,strength:!0,description:!1,drugs:!1}]},st={currentDate:(new Date).getTime(),db:null,items:[]},it={drugs:[]},ot=Object(de.combineReducers)({buttons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee:var n=Object(Oe.a)(e.buttons),a=n.findIndex((function(e){return e.type===t.payload.type}));return n[a].disabled=!0,Object(b.a)(Object(b.a)({},e),{},{buttons:Object(Oe.a)(n)});case te:var r=Object(Oe.a)(e.buttons),c=r.findIndex((function(e){return e.type===t.payload.type}));return r[c].disabled=!1,Object(b.a)(Object(b.a)({},e),{},{buttons:Object(Oe.a)(r)});case ne:return Object(b.a)(Object(b.a)({},e),{},{modalShow:!0,modalType:t.payload.modalType});case ae:return Object(b.a)(Object(b.a)({},e),{},{modalShow:!1,modalType:""});default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(b.a)(Object(b.a)({},e),{},{db:t.payload.db});case A:return Object(b.a)(Object(b.a)({},e),{},{items:ge([].concat(Object(Oe.a)(e.items),[t.payload.item]))});case U:return Object(b.a)(Object(b.a)({},e),{},{items:ge(t.payload.items)});case W:var n=t.payload.item,a=e.items.findIndex((function(e){return e.time===n.time}));if(-1===a)return Object(b.a)({},e);var r=Object(Oe.a)(e.items);return r.splice(a,1,n),Object(b.a)(Object(b.a)({},e),{},{items:ge(Object(Oe.a)(r))});case G:return Object(b.a)(Object(b.a)({},e),{},{currentDate:new Date(t.payload.date).getTime()});default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case De:return Object(b.a)(Object(b.a)({},e),{},{drugs:t.payload.drugs});case we:return Object(b.a)(Object(b.a)({},e),{},{drugs:[].concat(Object(Oe.a)(e.drugs),[t.payload.drug])});default:return e}}}),ut=n(76),dt=n(77),lt=Object(de.createStore)(ot,Object(dt.composeWithDevTools)(Object(de.applyMiddleware)(ut.a)));c.a.render(Object(d.jsx)(le.a,{store:lt,children:Object(d.jsx)(nt,{})}),document.getElementById("root")),at()}},[[97,1,2]]]);
//# sourceMappingURL=main.17c8346e.chunk.js.map