(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["group-5"],{"047c":function(e,t,r){"use strict";var n=r("dbfc"),a=r.n(n);a.a},1067:function(e,t,r){"use strict";var n=r("c998"),a=r.n(n);a.a},"1da1":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("d3b7"),r("e6cf");function n(e,t,r,n,a,o,i){try{var c=e[o](i),l=c.value}catch(s){return void r(s)}c.done?t(l):Promise.resolve(l).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var i=e.apply(t,r);function c(e){n(i,a,o,c,l,"next",e)}function l(e){n(i,a,o,c,l,"throw",e)}c(void 0)}))}}},3042:function(e,t,r){"use strict";var n=r("fb8f"),a=r.n(n);a.a},7877:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("系统管理")]),r("el-breadcrumb-item",[e._v(e._s(e.id?"编辑":"新建")+"菜单")])],1),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"子级菜单"}},[r("el-select",{attrs:{placeholder:"请选择下级菜单(直接下级)",clearable:"",multiple:""},model:{value:e.model.children,callback:function(t){e.$set(e.model,"children",t)},expression:"model.children"}},e._l(e.childrens,(function(e){return r("el-option",{key:e._id,attrs:{label:e.level+"级菜单："+e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"菜单分级"}},[r("el-select",{attrs:{placeholder:"1级最高",clearable:""},model:{value:e.model.level,callback:function(t){e.$set(e.model,"level",t)},expression:"model.level"}},e._l(e.levels,(function(e){return r("el-option",{key:e,attrs:{label:e+"级菜单",value:e}})})),1)],1),r("el-form-item",{attrs:{label:"菜单名称"}},[r("el-input",{attrs:{placeholder:"左侧菜单显示名"},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",{attrs:{label:"菜单路由"}},[r("el-input",{attrs:{placeholder:"如 /items/create"},model:{value:e.model.index,callback:function(t){e.$set(e.model,"index",t)},expression:"model.index"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},a=[],o=(r("96cf"),r("1da1")),i={props:{id:{}},data:function(){return{model:{children:[]},childrens:[],levels:[1,2,3]}},methods:{save:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("rest/menus/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("rest/menus",e.model);case 7:e.$router.push("/menus/list"),e.$message.success("保存成功");case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/menus/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()},fetchChildrens:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/menus");case 2:r=t.sent,e.childrens=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.fetchChildrens(),this.id&&this.fetch()}},c=i,l=r("2877"),s=Object(l["a"])(c,n,a,!1,null,null,null);t["default"]=s.exports},"96cf":function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r,n){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),i=new j(n||[]);return o._invoke=$(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=l;var u="suspendedStart",f="suspendedYield",d="executing",h="completed",p={};function m(){}function v(){}function w(){}var b={};b[o]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(E([])));y&&y!==r&&n.call(y,o)&&(b=y);var _=w.prototype=m.prototype=Object.create(b);function x(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function k(e){function t(r,a,o,i){var c=s(e[r],e,a);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"===typeof u&&n.call(u,"__await")?Promise.resolve(u.__await).then((function(e){t("next",e,o,i)}),(function(e){t("throw",e,o,i)})):Promise.resolve(u).then((function(e){l.value=e,o(l)}),(function(e){return t("throw",e,o,i)}))}i(c.arg)}var r;function a(e,n){function a(){return new Promise((function(r,a){t(e,n,r,a)}))}return r=r?r.then(a,a):a()}this._invoke=a}function $(e,t,r){var n=u;return function(a,o){if(n===d)throw new Error("Generator is already running");if(n===h){if("throw"===a)throw o;return T()}r.method=a,r.arg=o;while(1){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var l=s(e,t,r);if("normal"===l.type){if(n=r.done?h:f,l.arg===p)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=h,r.method="throw",r.arg=l.arg)}}}function L(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator["return"]&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=s(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,p;var o=a.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,p):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function R(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function E(e){if(e){var r=e[o];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){while(++a<e.length)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:T}}function T(){return{value:t,done:!0}}return v.prototype=_.constructor=w,w.constructor=v,w[c]=v.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},x(k.prototype),k.prototype[i]=function(){return this},e.AsyncIterator=k,e.async=function(t,r,n,a){var o=new k(l(t,r,n,a));return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},x(_),_[c]="Generator",_[o]=function(){return this},_.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){while(t.length){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=E,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(R),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return c.type="throw",c.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),R(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;R(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:E(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},"98bb":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("系统管理")]),r("el-breadcrumb-item",[e._v("角色列表")])],1),r("el-table",{attrs:{data:e.items,size:"mini",border:"","default-sort":{prop:"power",order:"ascending"},stripe:""}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"200"}}),r("el-table-column",{attrs:{prop:"name",label:"角色名",width:"120",align:"center"}}),r("el-table-column",{attrs:{align:"center",width:"120",label:"权限等级",prop:"power",sortable:"","sort-orders":["ascending","descending"]},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.power?r("el-tag",{attrs:{effect:"plain"}},[e._v(e._s(t.row.power)+"级")]):2==t.row.power?r("el-tag",{attrs:{effect:"plain",type:"warning"}},[e._v(e._s(t.row.power)+"级")]):r("el-tag",{attrs:{effect:"plain",type:"info"}},[e._v(e._s(t.row.power)+"级")])]}}])}),r("el-table-column",{attrs:{type:"expand",label:"管理菜单树",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-divider",{attrs:{"content-position":"left"}},[e._v("管理树")]),r("el-row",[r("el-col",{attrs:{span:6}},[r("el-tag",{attrs:{effect:"plain",type:e.tagType[t.row.power-1]}},[e._v(e._s(t.row.name))]),t.row.children&&t.row.children.length?r("i",{staticClass:"el-icon-caret-right"}):e._e()],1),t.row.children&&t.row.children.length?r("el-col",{attrs:{span:18}},e._l(t.row.children,(function(t){return r("el-row",{key:t.name},[r("el-col",{attrs:{span:6}},[r("el-tag",{attrs:{effect:"plain",type:e.tagType[t.power-1]}},[e._v(e._s(t.name))]),t.children&&t.children.length?r("i",{staticClass:"el-icon-caret-right"}):e._e()],1),t.children&&t.children.length?r("el-col",{attrs:{span:18}},e._l(t.children,(function(t){return r("el-row",{key:t.name},[r("el-col",[r("el-tag",{attrs:{effect:"plain",type:e.tagType[t.power-1]}},[e._v(" "+e._s(t.name)+" ")]),t.children&&t.children.length?r("i",{staticClass:"el-icon-caret-right"}):e._e()],1)],1)})),1):e._e()],1)})),1):e._e()],1)]}}])}),r("el-table-column",{attrs:{fixed:"right",label:"操作","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return e.$router.push("/roles/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},a=[],o=(r("96cf"),r("1da1")),i={data:function(){return{items:[],tagType:["","warning","info"]}},methods:{fetch:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/roles");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('是否确认要删除分类 "'.concat(e.username,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/roles/".concat(e._id));case 2:t.$message.success("删除成功!"),t.fetch();case 4:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},c=i,l=(r("1067"),r("2877")),s=Object(l["a"])(c,n,a,!1,null,"a3d43456",null);t["default"]=s.exports},b0c0:function(e,t,r){var n=r("83ab"),a=r("9bf2").f,o=Function.prototype,i=o.toString,c=/^\s*function ([^ (]*)/,l="name";!n||l in o||a(o,l,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(e){return""}}})},c998:function(e,t,r){},dbfc:function(e,t,r){},dd1d:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("系统管理")]),r("el-breadcrumb-item",[e._v(e._s(e.id?"编辑":"新建")+"角色")])],1),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"角色下级"}},[r("el-select",{attrs:{placeholder:"可选多个下级",multiple:""},model:{value:e.model.children,callback:function(t){e.$set(e.model,"children",t)},expression:"model.children"}},e._l(e.roleCate,(function(e){return r("el-option",{key:e._id,attrs:{label:e.power+"级角色："+e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"角色权限等级"}},[r("el-select",{attrs:{placeholder:"1级最高",clearable:""},model:{value:e.model.power,callback:function(t){e.$set(e.model,"power",t)},expression:"model.power"}},e._l(e.powerLevel,(function(e){return r("el-option",{key:e,attrs:{label:"等级:"+e,value:e}})})),1)],1),r("el-form-item",{attrs:{label:"管理权限"}},[r("el-select",{attrs:{placeholder:"可不选,直接引用下级权限",clearable:""},model:{value:e.model.manage,callback:function(t){e.$set(e.model,"manage",t)},expression:"model.manage"}},e._l(e.powers,(function(t){return r("el-option",{key:t._id,attrs:{label:t.name,value:t._id}},[r("el-popover",{attrs:{placement:"right",width:"400",trigger:"hover"}},[r("el-tree",{ref:"tree",refInFor:!0,attrs:{data:t.children,"default-expanded-keys":t.nodes,"default-checked-keys":t.nodes,"node-key":"name","show-checkbox":"",accordion:"","highlight-current":""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.node,a=t.data;return r("span",{staticClass:"custom-tree-node"},[r("span",[e._v(e._s(a.name))]),3==n.level?r("span",[e._v(" 读权限 "),r("el-switch",{attrs:{disabled:"","active-color":"#0af","inactive-color":"#bbb"},model:{value:a.read,callback:function(t){e.$set(a,"read",t)},expression:"data.read"}}),e._v(" 写权限 "),r("el-switch",{attrs:{disabled:"","active-color":"#0af","inactive-color":"#bbb"},model:{value:a.write,callback:function(t){e.$set(a,"write",t)},expression:"data.write"}})],1):e._e()])}}],null,!0)}),r("span",{staticStyle:{float:"left"},attrs:{slot:"reference"},slot:"reference"},[e._v(e._s(t.name))])],1)],1)})),1)],1),r("el-form-item",{attrs:{label:"角色名"}},[r("el-input",{attrs:{placeholder:"请输入角色名"},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},a=[],o=(r("96cf"),r("1da1")),i={props:{id:{}},data:function(){return{model:{},roleCate:[],powerLevel:[1,2,3],powers:[]}},methods:{save:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("rest/roles/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("rest/roles",e.model);case 7:e.$router.push("/roles/list"),e.$message.success("保存成功");case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/roles/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()},fetchGetRoles:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/roles");case 2:r=t.sent,e.roleCate=r.data;case 4:case"end":return t.stop()}}),t)})))()},fetchGetPowers:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/powers");case 2:r=t.sent,e.powers=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.fetchGetRoles(),this.fetchGetPowers(),this.id&&this.fetch()}},c=i,l=(r("047c"),r("2877")),s=Object(l["a"])(c,n,a,!1,null,"a506f8ee",null);t["default"]=s.exports},e63d:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("系统管理")]),r("el-breadcrumb-item",[e._v("菜单列表")])],1),r("el-table",{attrs:{data:e.menus,size:"mini","default-sort":{prop:"level",order:"ascending"},stripe:"",border:""}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"250"}}),r("el-table-column",{attrs:{prop:"name",label:"菜单名称",width:"180",align:"center"}}),r("el-table-column",{attrs:{type:"expand",label:"菜单树",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.children?[r("el-row",[r("el-col",{attrs:{span:8}},[r("el-col",[r("el-tag",{attrs:{effect:"dark",type:e.tagType[t.row.level-1]}},[e._v(e._s(t.row.name))]),t.row.children[0]?r("i",{staticClass:"el-icon-caret-right"}):e._e()],1)],1),r("el-col",{attrs:{span:16}},e._l(t.row.children,(function(t,n){return r("el-row",{key:t.name,class:0==n?"":"bt"},[r("el-col",{attrs:{span:8}},[r("el-tag",{attrs:{effect:"dark",type:e.tagType[t.level-1]}},[e._v(e._s(t.name))]),t.children[0]?r("i",{staticClass:"el-icon-caret-right"}):e._e()],1),t.children?r("el-col",{attrs:{span:16}},e._l(t.children,(function(t){return r("el-row",{key:t.name},[r("el-col",[r("el-tag",{attrs:{effect:"dark",type:e.tagType[t.level-1]}},[e._v(" "+e._s(t.name)+" ")]),t.children[0]?r("i",{staticClass:"el-icon-caret-right"}):e._e()],1)],1)})),1):e._e()],1)})),1)],1)]:void 0}}],null,!0)}),r("el-table-column",{attrs:{align:"center",width:"180",label:"菜单等级",prop:"level",sortable:"","sort-orders":["ascending","descending"]},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.level?r("el-tag",{attrs:{effect:"dark"}},[e._v(e._s(t.row.level)+"级")]):2==t.row.level?r("el-tag",{attrs:{effect:"dark",type:"warning"}},[e._v(e._s(t.row.level)+"级")]):r("el-tag",{attrs:{effect:"dark",type:"info"}},[e._v(e._s(t.row.level)+"级")])]}}])}),r("el-table-column",{attrs:{fixed:"right",label:"操作","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return e.$router.push("/menus/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},a=[],o=(r("b0c0"),r("96cf"),r("1da1")),i={data:function(){return{menus:[],tagType:["","warning","info"]}},methods:{fetch:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/menus");case 2:r=t.sent,e.menus=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('是否确认要删除菜单 "'.concat(e.name,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/menus/".concat(e._id));case 2:t.$message.success("删除成功!"),t.fetch();case 4:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},c=i,l=(r("3042"),r("2877")),s=Object(l["a"])(c,n,a,!1,null,"1b190c9f",null);t["default"]=s.exports},fb8f:function(e,t,r){}}]);