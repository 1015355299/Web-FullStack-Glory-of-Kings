(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["group-4"],{"0737":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("系统管理")]),r("el-breadcrumb-item",[e._v("管理员列表")])],1),r("el-table",{attrs:{data:e.items,size:"mini",stipe:"",border:""}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"230"}}),r("el-table-column",{attrs:{prop:"username",label:"用户名",width:"150",align:"center"}}),r("el-table-column",{attrs:{prop:"description",label:"用户描述","min-width":"150",align:"center"}}),r("el-table-column",{attrs:{type:"expand",label:"扮演角色",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.role&&t.row.role.length?e._l(t.row.role,(function(t){return r("el-tag",{key:t._id,attrs:{effect:"plain",type:e.tagType[t.power-1]}},[e._v(e._s(t.name))])})):void 0}}],null,!0)}),r("el-table-column",{attrs:{fixed:"right",label:"操作","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return e.$router.push("/admin_users/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},a=[],o=(r("96cf"),r("1da1")),i={data:function(){return{items:[],tagType:["","warning","info"]}},methods:{fetch:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/admin_users");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('是否确认要删除分类 "'.concat(e.username,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/admin_users/".concat(e._id));case 2:t.$message({type:"success",message:"删除成功!"}),t.fetch();case 4:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},s=i,c=(r("2df2"),r("2877")),l=Object(c["a"])(s,n,a,!1,null,"3f9bd893",null);t["default"]=l.exports},1148:function(e,t,r){"use strict";var n=r("a691"),a=r("1d80");e.exports="".repeat||function(e){var t=String(a(this)),r="",o=n(e);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(r+=t);return r}},"1da1":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("d3b7"),r("e6cf");function n(e,t,r,n,a,o,i){try{var s=e[o](i),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var i=e.apply(t,r);function s(e){n(i,a,o,s,c,"next",e)}function c(e){n(i,a,o,s,c,"throw",e)}s(void 0)}))}}},"2df2":function(e,t,r){"use strict";var n=r("feb3"),a=r.n(n);a.a},"408a":function(e,t,r){var n=r("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=n(e))throw TypeError("Incorrect invocation");return+e}},"6fc5":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"video"},[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("内容管理")]),r("el-breadcrumb-item",[e._v("视频列表")])],1),r("el-table",{attrs:{data:e.items,size:"mini"}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"230"}}),r("el-table-column",{attrs:{prop:"title",label:"标题"}}),r("el-table-column",{attrs:{prop:"img",label:"封面"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("img",{staticStyle:{height:"1.5rem"},attrs:{src:e.row.img,alt:""}})]}}])}),r("el-table-column",{attrs:{prop:"watch",label:"播放量"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return e.$router.push("/videos/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},a=[],o=(r("96cf"),r("1da1")),i={data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/videos");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('是否确认要删除视频 "'.concat(e.title,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/videos/".concat(e._id));case 2:t.$message({type:"success",message:"删除成功!"}),t.fetch();case 4:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},s=i,c=r("2877"),l=Object(c["a"])(s,n,a,!1,null,null,null);t["default"]=l.exports},"7b83":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"video"},[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("内容管理")]),r("el-breadcrumb-item",[e._v(e._s(e.id?"编辑":"新建")+"视频")])],1),r("el-form",{attrs:{"label-width":"150px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"所属分类"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.categories,callback:function(t){e.$set(e.model,"categories",t)},expression:"model.categories"}},e._l(e.categories,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"标题"}},[r("el-input",{model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),r("el-form-item",{attrs:{label:"播放量"}},[r("el-input",{model:{value:e.model.watch,callback:function(t){e.$set(e.model,"watch",t)},expression:"model.watch"}})],1),r("el-form-item",[e._v(" 选择scr或上传本地视频封面 ")]),r("el-form-item",{attrs:{label:"视频封面src"}},[r("el-input",{model:{value:e.model.img,callback:function(t){e.$set(e.model,"img",t)},expression:"model.img"}})],1),r("el-form-item",{staticStyle:{"margin-top":"0.6rem"},attrs:{label:"视频封面"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,"show-file-list":!1,"on-success":function(t){return e.$set(e.model,"img",t.url)},headers:e.getAuthHeaders()}},[e.model.img?r("img",{staticClass:"avatar",attrs:{src:e.model.img}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",[e._v(" 选择src或上传本地视频 ")]),r("el-form-item",{attrs:{label:"src"}},[r("el-input",{model:{value:e.model.src,callback:function(t){e.$set(e.model,"src",t)},expression:"model.src"}})],1),r("el-form-item",{staticStyle:{"margin-top":"0.6rem"},attrs:{label:"视频"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadVideoUrl,"show-file-list":!1,drag:"","on-success":e.success,headers:e.getAuthHeaders(),"on-progress":e.uploadVideoProcess}},[r("video",{directives:[{name:"show",rawName:"v-show",value:!e.isShow,expression:"!isShow"}],staticClass:"avatar",staticStyle:{width:"350px"},attrs:{type:"video/mp4",src:e.model.src,controls:"true",readyState:"3"}}),r("el-progress",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticStyle:{"margin-top":"20px"},attrs:{type:"circle",percentage:e.per}})],1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},a=[],o=(r("b680"),r("96cf"),r("1da1")),i={props:{id:{}},data:function(){return{model:{},categories:[],per:0,isShow:!1}},methods:{save:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("rest/videos/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("rest/videos",e.model);case 7:e.$router.push("/videos/list"),e.$message({type:"success",message:"保存成功"});case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/videos/".concat(e.id));case 2:r=t.sent,e.model=Object.assign({},e.model,r.data);case 4:case"end":return t.stop()}}),t)})))()},fetchCategories:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories");case 2:r=t.sent,e.categories=r.data;case 4:case"end":return t.stop()}}),t)})))()},uploadVideoProcess:function(e,t){this.per=1*t.percentage.toFixed(0)},success:function(e){this.$set(this.model,"src",e.url),this.isShow=!1}},watch:{per:function(e){this.model.src,this.isShow=!0}},created:function(){this.fetchCategories(),this.id&&this.fetch()}},s=i,c=r("2877"),l=Object(c["a"])(s,n,a,!1,null,null,null);t["default"]=l.exports},"8d9b":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("系统管理")]),r("el-breadcrumb-item",[e._v(e._s(e.id?"编辑":"新建")+"管理员")])],1),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"扮演角色"}},[r("el-select",{attrs:{multiple:"",clearable:""},model:{value:e.model.role,callback:function(t){e.$set(e.model,"role",t)},expression:"model.role"}},e._l(e.roleCate,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{attrs:{type:"password"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{model:{value:e.model.description,callback:function(t){e.$set(e.model,"description",t)},expression:"model.description"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},a=[],o=(r("96cf"),r("1da1")),i={props:{id:{}},data:function(){return{model:{role:[]},roleCate:[]}},methods:{save:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("rest/admin_users/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("rest/admin_users",e.model);case 7:e.$router.push("/admin_users/list"),e.$message({type:"success",message:"保存成功"});case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/admin_users/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()},fetchGetRoles:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/roles");case 2:r=t.sent,e.roleCate=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.fetchGetRoles(),this.id&&this.fetch()}},s=i,c=r("2877"),l=Object(c["a"])(s,n,a,!1,null,null,null);t["default"]=l.exports},"96cf":function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(e,t,r,n){var a=t&&t.prototype instanceof p?t:p,o=Object.create(a.prototype),i=new L(n||[]);return o._invoke=$(e,r,i),o}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=c;var u="suspendedStart",f="suspendedYield",m="executing",h="completed",d={};function p(){}function v(){}function g(){}var w={};w[o]=function(){return this};var b=Object.getPrototypeOf,y=b&&b(b(j([])));y&&y!==r&&n.call(y,o)&&(w=y);var x=g.prototype=p.prototype=Object.create(w);function _(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function k(e){function t(r,a,o,i){var s=l(e[r],e,a);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&n.call(u,"__await")?Promise.resolve(u.__await).then((function(e){t("next",e,o,i)}),(function(e){t("throw",e,o,i)})):Promise.resolve(u).then((function(e){c.value=e,o(c)}),(function(e){return t("throw",e,o,i)}))}i(s.arg)}var r;function a(e,n){function a(){return new Promise((function(r,a){t(e,n,r,a)}))}return r=r?r.then(a,a):a()}this._invoke=a}function $(e,t,r){var n=u;return function(a,o){if(n===m)throw new Error("Generator is already running");if(n===h){if("throw"===a)throw o;return S()}r.method=a,r.arg=o;while(1){var i=r.delegate;if(i){var s=O(i,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=m;var c=l(e,t,r);if("normal"===c.type){if(n=r.done?h:f,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}function O(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator["return"]&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=l(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,d;var o=a.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function R(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(R,this),this.reset(!0)}function j(e){if(e){var r=e[o];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){while(++a<e.length)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:S}}function S(){return{value:t,done:!0}}return v.prototype=x.constructor=g,g.constructor=v,g[s]=v.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},_(k.prototype),k.prototype[i]=function(){return this},e.AsyncIterator=k,e.async=function(t,r,n,a){var o=new k(c(t,r,n,a));return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},_(x),x[s]="Generator",x[o]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){while(t.length){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return s.type="throw",s.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},b680:function(e,t,r){"use strict";var n=r("23e7"),a=r("a691"),o=r("408a"),i=r("1148"),s=r("d039"),c=1..toFixed,l=Math.floor,u=function(e,t,r){return 0===t?r:t%2===1?u(e,t-1,r*e):u(e*e,t/2,r)},f=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},m=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){c.call({})}));n({target:"Number",proto:!0,forced:m},{toFixed:function(e){var t,r,n,s,c=o(this),m=a(e),h=[0,0,0,0,0,0],d="",p="0",v=function(e,t){var r=-1,n=t;while(++r<6)n+=e*h[r],h[r]=n%1e7,n=l(n/1e7)},g=function(e){var t=6,r=0;while(--t>=0)r+=h[t],h[t]=l(r/e),r=r%e*1e7},w=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==h[e]){var r=String(h[e]);t=""===t?r:t+i.call("0",7-r.length)+r}return t};if(m<0||m>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(d="-",c=-c),c>1e-21)if(t=f(c*u(2,69,1))-69,r=t<0?c*u(2,-t,1):c/u(2,t,1),r*=4503599627370496,t=52-t,t>0){v(0,r),n=m;while(n>=7)v(1e7,0),n-=7;v(u(10,n,1),0),n=t-1;while(n>=23)g(1<<23),n-=23;g(1<<n),v(1,1),g(2),p=w()}else v(0,r),v(1<<-t,0),p=w()+i.call("0",m);return m>0?(s=p.length,p=d+(s<=m?"0."+i.call("0",m-s)+p:p.slice(0,s-m)+"."+p.slice(s-m))):p=d+p,p}})},feb3:function(e,t,r){}}]);
//# sourceMappingURL=group-4.63e15540.js.map