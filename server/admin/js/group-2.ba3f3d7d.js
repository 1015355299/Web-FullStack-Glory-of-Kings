(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["group-2"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("d3b7"),r("e6cf");function n(t,e,r,n,a,o,i){try{var s=t[o](i),l=s.value}catch(c){return void r(c)}s.done?e(l):Promise.resolve(l).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function s(t){n(i,a,o,s,l,"next",t)}function l(t){n(i,a,o,s,l,"throw",t)}s(void 0)}))}}},"8cfb":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("h1",[t._v("英雄列表")]),r("el-table",{attrs:{data:t.items,size:"mini"}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"230"}}),r("el-table-column",{attrs:{prop:"name",label:"英雄名称"}}),r("el-table-column",{attrs:{prop:"title",label:"称号"}}),r("el-table-column",{attrs:{prop:"avatar",label:"头像"},scopedSlots:t._u([{key:"default",fn:function(t){return[r("img",{staticStyle:{height:"1.5rem"},attrs:{src:t.row.avatar,alt:""}})]}}])}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return t.$router.push("/heroes/edit/"+e.row._id)}}},[t._v("编辑")]),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return t.remove(e.row)}}},[t._v("删除")])]}}])})],1)],1)},a=[],o=(r("b0c0"),r("96cf"),r("1da1")),i={data:function(){return{items:[]}},methods:{fetch:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("rest/heroes");case 2:r=e.sent,t.items=r.data;case 4:case"end":return e.stop()}}),e)})))()},remove:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.$confirm('是否确认要删除分类 "'.concat(t.name,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$http.delete("rest/heroes/".concat(t._id));case 2:e.$message({type:"success",message:"删除成功!"}),e.fetch();case 4:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},s=i,l=r("2877"),c=Object(l["a"])(s,n,a,!1,null,null,null);e["default"]=c.exports},"950f":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("h1",[t._v(t._s(t.id?"编辑":"新建")+"物品")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(e){return e.preventDefault(),t.save(e)}}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-col",{attrs:{span:10}},[r("el-input",{model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1)],1),r("el-form-item",{attrs:{label:"图标"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,"show-file-list":!1,"on-success":t.afterUpload,headers:t.getAuthHeaders()}},[t.model.icon?r("img",{staticClass:"avatar",attrs:{src:t.model.icon}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[t._v("保存")])],1)],1)],1)},a=[],o=(r("96cf"),r("1da1")),i={props:{id:{}},data:function(){return{model:{}}},methods:{afterUpload:function(t){this.$set(this.model,"icon",t.url)},save:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.id){e.next=5;break}return e.next=3,t.$http.put("rest/items/".concat(t.id),t.model);case 3:e.next=7;break;case 5:return e.next=7,t.$http.post("rest/items",t.model);case 7:t.$router.push("/items/list"),t.$message({type:"success",message:"保存成功"});case 9:case"end":return e.stop()}}),e)})))()},fetch:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("rest/items/".concat(t.id));case 2:r=e.sent,t.model=r.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.id&&this.fetch()}},s=i,l=r("2877"),c=Object(l["a"])(s,n,a,!1,null,null,null);e["default"]=c.exports},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r,n){var a=e&&e.prototype instanceof d?e:d,o=Object.create(a.prototype),i=new R(n||[]);return o._invoke=$(t,r,i),o}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=l;var u="suspendedStart",m="suspendedYield",f="executing",p="completed",h={};function d(){}function v(){}function b(){}var g={};g[o]=function(){return this};var y=Object.getPrototypeOf,w=y&&y(y(E([])));w&&w!==r&&n.call(w,o)&&(g=w);var x=b.prototype=d.prototype=Object.create(g);function k(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function _(t){function e(r,a,o,i){var s=c(t[r],t,a);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"===typeof u&&n.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,o,i)}),(function(t){e("throw",t,o,i)})):Promise.resolve(u).then((function(t){l.value=t,o(l)}),(function(t){return e("throw",t,o,i)}))}i(s.arg)}var r;function a(t,n){function a(){return new Promise((function(r,a){e(t,n,r,a)}))}return r=r?r.then(a,a):a()}this._invoke=a}function $(t,e,r){var n=u;return function(a,o){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return C()}r.method=a,r.arg=o;while(1){var i=r.delegate;if(i){var s=O(i,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var l=c(t,e,r);if("normal"===l.type){if(n=r.done?p:m,l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=p,r.method="throw",r.arg=l.arg)}}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var a=c(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,h;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,h):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function E(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){while(++a<t.length)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:C}}function C(){return{value:e,done:!0}}return v.prototype=x.constructor=b,b.constructor=v,b[s]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(_.prototype),_.prototype[i]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,a){var o=new _(l(e,r,n,a));return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},k(x),x[s]="Generator",x[o]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return s.type="throw",s.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:E(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},b0c0:function(t,e,r){var n=r("83ab"),a=r("9bf2").f,o=Function.prototype,i=o.toString,s=/^\s*function ([^ (]*)/,l="name";!n||l in o||a(o,l,{configurable:!0,get:function(){try{return i.call(this).match(s)[1]}catch(t){return""}}})},c80a:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("h1",[t._v(t._s(t.id?"编辑":"新建")+"英雄")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(e){return e.preventDefault(),t.save(e)}}},[r("el-tabs",{attrs:{value:"basic",type:"border-card"}},[r("el-tab-pane",{attrs:{label:"基础信息",name:"basic"}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1),r("el-form-item",{attrs:{label:"称号"}},[r("el-input",{model:{value:t.model.title,callback:function(e){t.$set(t.model,"title",e)},expression:"model.title"}})],1),r("el-form-item",{attrs:{label:"头像"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,"show-file-list":!1,"on-success":function(e){return t.$set(t.model,"avatar",e.url)},headers:t.getAuthHeaders()}},[t.model.avatar?r("img",{staticClass:"avatar",attrs:{src:t.model.avatar}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"Banner"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,"show-file-list":!1,"on-success":function(e){return t.$set(t.model,"banner",e.url)},headers:t.getAuthHeaders()}},[t.model.banner?r("img",{staticClass:"banner",attrs:{src:t.model.banner}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"类型"}},[r("el-select",{attrs:{filterable:"",multiple:""},model:{value:t.model.categories,callback:function(e){t.$set(t.model,"categories",e)},expression:"model.categories"}},t._l(t.categories,(function(t){return r("el-option",{key:t._id,attrs:{label:t.name,value:t._id}})})),1)],1),r("el-form-item",{attrs:{label:"难度"}},[r("el-rate",{staticStyle:{"line-height":"2.6rem"},attrs:{max:9,"show-scope":""},model:{value:t.model.scores.difficult,callback:function(e){t.$set(t.model.scores,"difficult",e)},expression:"model.scores.difficult"}})],1),r("el-form-item",{attrs:{label:"技能"}},[r("el-rate",{staticStyle:{"line-height":"2.6rem"},attrs:{max:9,"show-scope":""},model:{value:t.model.scores.skills,callback:function(e){t.$set(t.model.scores,"skills",e)},expression:"model.scores.skills"}})],1),r("el-form-item",{attrs:{label:"攻击"}},[r("el-rate",{staticStyle:{"line-height":"2.6rem"},attrs:{max:9,"show-scope":""},model:{value:t.model.scores.attack,callback:function(e){t.$set(t.model.scores,"attack",e)},expression:"model.scores.attack"}})],1),r("el-form-item",{attrs:{label:"生存"}},[r("el-rate",{staticStyle:{"line-height":"2.6rem"},attrs:{max:9,"show-scope":""},model:{value:t.model.scores.survive,callback:function(e){t.$set(t.model.scores,"survive",e)},expression:"model.scores.survive"}})],1),r("el-form-item",{attrs:{label:"顺风出装"}},[r("el-select",{attrs:{multiple:""},model:{value:t.model.items1,callback:function(e){t.$set(t.model,"items1",e)},expression:"model.items1"}},t._l(t.items,(function(t){return r("el-option",{key:t._id,attrs:{label:t.name,value:t._id}})})),1)],1),r("el-form-item",{attrs:{label:"逆风出装"}},[r("el-select",{attrs:{multiple:""},model:{value:t.model.items2,callback:function(e){t.$set(t.model,"items2",e)},expression:"model.items2"}},t._l(t.items,(function(t){return r("el-option",{key:t._id,attrs:{label:t.name,value:t._id}})})),1)],1),r("el-form-item",{attrs:{label:"使用技巧"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.model.usageTips,callback:function(e){t.$set(t.model,"usageTips",e)},expression:"model.usageTips"}})],1),r("el-form-item",{attrs:{label:"对抗技巧"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.model.battleTips,callback:function(e){t.$set(t.model,"battleTips",e)},expression:"model.battleTips"}})],1),r("el-form-item",{attrs:{label:"团战思路"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.model.teamTips,callback:function(e){t.$set(t.model,"teamTips",e)},expression:"model.teamTips"}})],1)],1),r("el-tab-pane",{attrs:{label:"技能",name:"skills"}},[r("el-button",{attrs:{size:"small"},on:{click:function(e){return t.model.skills.push({})}}},[r("i",{staticClass:"el-icon-plus"}),t._v("添加技能")]),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},t._l(t.model.skills,(function(e,n){return r("el-col",{key:n,attrs:{md:12}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.name,callback:function(r){t.$set(e,"name",r)},expression:"item.name"}})],1),r("el-form-item",{attrs:{label:"图标"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,"show-file-list":!1,"on-success":function(r){return t.$set(e,"icon",r.url)},headers:t.getAuthHeaders()}},[e.icon?r("img",{staticClass:"avatar",attrs:{src:e.icon}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"冷却值"}},[r("el-input",{model:{value:e.delay,callback:function(r){t.$set(e,"delay",r)},expression:"item.delay"}})],1),r("el-form-item",{attrs:{label:"消耗"}},[r("el-input",{model:{value:e.cost,callback:function(r){t.$set(e,"cost",r)},expression:"item.cost"}})],1),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.description,callback:function(r){t.$set(e,"description",r)},expression:"item.description"}})],1),r("el-form-item",{attrs:{label:"小提示"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.tips,callback:function(r){t.$set(e,"tips",r)},expression:"item.tips"}})],1),r("el-form-item",[r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(e){return t.model.skills.splice(n,1)}}},[t._v("删除")])],1)],1)})),1)],1),r("el-tab-pane",{attrs:{label:"最佳搭档",name:"partners"}},[r("el-button",{attrs:{size:"small"},on:{click:function(e){return t.model.partners.push({})}}},[r("i",{staticClass:"el-icon-plus"}),t._v("添加英雄")]),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},t._l(t.model.partners,(function(e,n){return r("el-col",{key:n,attrs:{md:12}},[r("el-form-item",{attrs:{label:"英雄"}},[r("el-select",{attrs:{filterable:""},model:{value:e.hero,callback:function(r){t.$set(e,"hero",r)},expression:"item.hero"}},t._l(t.heroes,(function(t){return r("el-option",{key:t._id,attrs:{value:t._id,label:t.name}})})),1)],1),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.description,callback:function(r){t.$set(e,"description",r)},expression:"item.description"}})],1),r("el-form-item",[r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(e){return t.model.partners.splice(n,1)}}},[t._v("删除")])],1)],1)})),1)],1)],1),r("el-form-item",{staticStyle:{"margin-top":"1rem"}},[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[t._v("保存")])],1)],1)],1)},a=[],o=(r("96cf"),r("1da1")),i={props:{id:{}},data:function(){return{categories:[],items:[],heroes:[],model:{name:"",avatar:"",skills:[],partners:[],scores:{difficult:0}}}},methods:{save:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.id){e.next=5;break}return e.next=3,t.$http.put("rest/heroes/".concat(t.id),t.model);case 3:e.next=7;break;case 5:return e.next=7,t.$http.post("rest/heroes",t.model);case 7:t.$router.push("/heroes/list"),t.$message({type:"success",message:"保存成功"});case 9:case"end":return e.stop()}}),e)})))()},fetch:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("rest/heroes/".concat(t.id));case 2:r=e.sent,t.model=Object.assign({},t.model,r.data);case 4:case"end":return e.stop()}}),e)})))()},fetchCategories:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("rest/categories");case 2:r=e.sent,t.categories=r.data;case 4:case"end":return e.stop()}}),e)})))()},fetchItems:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("rest/items");case 2:r=e.sent,t.items=r.data;case 4:case"end":return e.stop()}}),e)})))()},fetchHeroes:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("rest/heroes");case 2:r=e.sent,t.heroes=r.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetchCategories(),this.fetchHeroes(),this.fetchItems(),this.id&&this.fetch()}},s=i,l=r("2877"),c=Object(l["a"])(s,n,a,!1,null,null,null);e["default"]=c.exports},f6e6:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("h1",[t._v("物品列表")]),r("el-table",{attrs:{data:t.items,size:"mini"}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"230"}}),r("el-table-column",{attrs:{prop:"name",label:"物品名称"}}),r("el-table-column",{attrs:{prop:"icon",label:"图标"},scopedSlots:t._u([{key:"default",fn:function(t){return[r("img",{staticStyle:{height:"1.5rem"},attrs:{src:t.row.icon,alt:""}})]}}])}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return t.$router.push("/items/edit/"+e.row._id)}}},[t._v("编辑")]),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return t.remove(e.row)}}},[t._v("删除")])]}}])})],1)],1)},a=[],o=(r("b0c0"),r("96cf"),r("1da1")),i={data:function(){return{items:[]}},methods:{fetch:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("rest/items");case 2:r=e.sent,t.items=r.data;case 4:case"end":return e.stop()}}),e)})))()},remove:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.$confirm('是否确认要删除分类 "'.concat(t.name,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$http.delete("rest/items/".concat(t._id));case 2:e.$message({type:"success",message:"删除成功!"}),e.fetch();case 4:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},s=i,l=r("2877"),c=Object(l["a"])(s,n,a,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=group-2.ba3f3d7d.js.map