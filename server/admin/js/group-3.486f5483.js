(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["group-3"],{"0e9b":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),r("el-breadcrumb-item",[t._v("运营管理")]),r("el-breadcrumb-item",[t._v(t._s(t.id?"编辑":"新建")+"广告位")])],1),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(e){return e.preventDefault(),t.save(e)}}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1),r("el-form-item",{attrs:{label:"广告"}},[r("el-button",{attrs:{size:"small"},on:{click:function(e){return t.model.items.push({})}}},[r("i",{staticClass:"el-icon-plus"}),t._v("添加广告")]),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},t._l(t.model.items,(function(e,n){return r("el-col",{key:n,attrs:{md:12}},[r("el-form-item",{attrs:{label:"跳转链接(URL)"}},[r("el-input",{model:{value:e.url,callback:function(r){t.$set(e,"url",r)},expression:"item.url"}})],1),r("el-form-item",{staticStyle:{"margin-top":"0.6rem"},attrs:{label:"图片"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,"show-file-list":!1,"on-success":function(r){return t.$set(e,"image",r.url)},headers:t.getAuthHeaders()}},[e.image?r("img",{staticClass:"avatar",attrs:{src:e.image}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",[r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(e){return t.model.items.splice(n,1)}}},[t._v("删除")])],1)],1)})),1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[t._v("保存")])],1)],1)],1)},a=[],i=(r("96cf"),r("1da1")),o={props:{id:{}},data:function(){return{model:{items:[]}}},methods:{save:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.id){e.next=5;break}return e.next=3,t.$http.put("rest/ads/".concat(t.id),t.model);case 3:e.next=7;break;case 5:return e.next=7,t.$http.post("rest/ads",t.model);case 7:t.$router.push("/ads/list"),t.$message({type:"success",message:"保存成功"});case 9:case"end":return e.stop()}}),e)})))()},fetch:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("rest/ads/".concat(t.id));case 2:r=e.sent,t.model=Object.assign({},t.model,r.data);case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.id&&this.fetch()}},c=o,s=r("2877"),u=Object(s["a"])(c,n,a,!1,null,null,null);e["default"]=u.exports},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("d3b7"),r("e6cf");function n(t,e,r,n,a,i,o){try{var c=t[i](o),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,i){var o=t.apply(e,r);function c(t){n(o,a,i,c,s,"next",t)}function s(t){n(o,a,i,c,s,"throw",t)}c(void 0)}))}}},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,r,n){var a=e&&e.prototype instanceof d?e:d,i=Object.create(a.prototype),o=new j(n||[]);return i._invoke=$(t,r,o),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=s;var l="suspendedStart",f="suspendedYield",m="executing",h="completed",p={};function d(){}function v(){}function g(){}var b={};b[i]=function(){return this};var y=Object.getPrototypeOf,w=y&&y(y(R([])));w&&w!==r&&n.call(w,i)&&(b=w);var x=g.prototype=d.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function k(t){function e(r,a,i,o){var c=u(t[r],t,a);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,i,o)}),(function(t){e("throw",t,i,o)})):Promise.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,o)}))}o(c.arg)}var r;function a(t,n){function a(){return new Promise((function(r,a){e(t,n,r,a)}))}return r=r?r.then(a,a):a()}this._invoke=a}function $(t,e,r){var n=l;return function(a,i){if(n===m)throw new Error("Generator is already running");if(n===h){if("throw"===a)throw i;return C()}r.method=a,r.arg=i;while(1){var o=r.delegate;if(o){var c=O(o,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=m;var s=u(t,e,r);if("normal"===s.type){if(n=r.done?h:f,s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=h,r.method="throw",r.arg=s.arg)}}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=u(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,p;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function R(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){while(++a<t.length)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:C}}function C(){return{value:e,done:!0}}return v.prototype=x.constructor=g,g.constructor=v,g[c]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},_(k.prototype),k.prototype[o]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,a){var i=new k(s(e,r,n,a));return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=R,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],c=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:R(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},c2fa:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),r("el-breadcrumb-item",[t._v("媒体管理")]),r("el-breadcrumb-item",[t._v(t._s(t.id?"编辑":"新建")+"文章")])],1),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(e){return e.preventDefault(),t.save(e)}}},[r("el-form-item",{attrs:{label:"所属分类"}},[r("el-select",{attrs:{multiple:""},model:{value:t.model.categories,callback:function(e){t.$set(t.model,"categories",e)},expression:"model.categories"}},t._l(t.categories,(function(t){return r("el-option",{key:t._id,attrs:{label:t.name,value:t._id}})})),1)],1),r("el-form-item",{attrs:{label:"标题"}},[r("el-input",{model:{value:t.model.title,callback:function(e){t.$set(t.model,"title",e)},expression:"model.title"}})],1),r("el-form-item",{attrs:{label:"详情"}},[r("vue-editor",{attrs:{useCustomImageHandler:""},on:{"image-added":t.handleImageAdded},model:{value:t.model.body,callback:function(e){t.$set(t.model,"body",e)},expression:"model.body"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[t._v("保存")])],1)],1)],1)},a=[],i=(r("96cf"),r("1da1")),o=r("63ee"),c={props:{id:{}},components:{VueEditor:o["VueEditor"]},data:function(){return{model:{},categories:[]}},methods:{handleImageAdded:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,r,n,a){var i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=new FormData,i.append("file",e),t.next=4,this.$http.post("upload",i);case 4:o=t.sent,r.insertEmbed(n,"image",o.data.url),a();case 7:case"end":return t.stop()}}),t,this)})));function e(e,r,n,a){return t.apply(this,arguments)}return e}(),save:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.id){e.next=5;break}return e.next=3,t.$http.put("rest/articles/".concat(t.id),t.model);case 3:e.next=7;break;case 5:return e.next=7,t.$http.post("rest/articles",t.model);case 7:t.$router.push("/articles/list"),t.$message({type:"success",message:"保存成功"});case 9:case"end":return e.stop()}}),e)})))()},fetch:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("rest/articles/".concat(t.id));case 2:r=e.sent,t.model=r.data;case 4:case"end":return e.stop()}}),e)})))()},fetchCategories:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("rest/categories");case 2:r=e.sent,t.categories=r.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetchCategories(),this.id&&this.fetch()}},s=c,u=r("2877"),l=Object(u["a"])(s,n,a,!1,null,null,null);e["default"]=l.exports},cccf:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),r("el-breadcrumb-item",[t._v("媒体管理")]),r("el-breadcrumb-item",[t._v("文章列表")])],1),r("el-table",{attrs:{data:t.items,size:"mini"}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"230"}}),r("el-table-column",{attrs:{prop:"title",label:"标题"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return t.$router.push("/articles/edit/"+e.row._id)}}},[t._v("编辑")]),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return t.remove(e.row)}}},[t._v("删除")])]}}])})],1)],1)},a=[],i=(r("96cf"),r("1da1")),o={data:function(){return{items:[]}},methods:{fetch:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("rest/articles");case 2:r=e.sent,t.items=r.data;case 4:case"end":return e.stop()}}),e)})))()},remove:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.$confirm('是否确认要删除文章 "'.concat(t.title,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$http.delete("rest/articles/".concat(t._id));case 2:e.$message({type:"success",message:"删除成功!"}),e.fetch();case 4:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},c=o,s=r("2877"),u=Object(s["a"])(c,n,a,!1,null,null,null);e["default"]=u.exports},ed9e:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),r("el-breadcrumb-item",[t._v("运营管理")]),r("el-breadcrumb-item",[t._v("广告位列表")])],1),r("el-table",{attrs:{data:t.items,size:"mini"}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"230"}}),r("el-table-column",{attrs:{prop:"name",label:"名称"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return t.$router.push("/ads/edit/"+e.row._id)}}},[t._v("编辑")]),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return t.remove(e.row)}}},[t._v("删除")])]}}])})],1)],1)},a=[],i=(r("b0c0"),r("96cf"),r("1da1")),o={data:function(){return{items:[]}},methods:{fetch:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("rest/ads");case 2:r=e.sent,t.items=r.data;case 4:case"end":return e.stop()}}),e)})))()},remove:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.$confirm('是否确认要删除分类 "'.concat(t.name,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$http.delete("rest/ads/".concat(t._id));case 2:e.$message({type:"success",message:"删除成功!"}),e.fetch();case 4:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},c=o,s=r("2877"),u=Object(s["a"])(c,n,a,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=group-3.486f5483.js.map