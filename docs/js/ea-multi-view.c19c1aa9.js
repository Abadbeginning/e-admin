(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ea-multi-view"],{"0686":function(e,r,t){"use strict";t.r(r);var l=t("4668"),a=t.n(l);for(var o in l)"default"!==o&&function(e){t.d(r,e,(function(){return l[e]}))}(o);r["default"]=a.a},"34c1":function(e,r,t){"use strict";var l=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ea-view",{attrs:{center:600,"params-key":"id"},scopedSlots:e._u([{key:"default",fn:function(r){var l=r.keys,a=r.active;return e._l(l,(function(r){return t("multi-view-page",e._b({directives:[{name:"show",rawName:"v-show",value:r===a,expression:"id === active"}],key:r,attrs:{id:r}},"multi-view-page",e.$attrs,!1))}))}}])})},a=[];t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return a}))},4668:function(e,r,t){var l,a,o;(function(n,i){a=[r,t("fad9")],l=i,o="function"===typeof l?l.apply(r,a):l,void 0===o||(e.exports=o)})("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(e,r){"use strict";var l=t("676a");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r=l(r);var a={name:"MultiView",components:{MultiViewPage:r.default}};e.default=a}))},"70a3":function(e,r,t){"use strict";var l=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("h1",[e._v("活动详情- "+e._s(e.id))]),t("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"活动名称",prop:"name"}},[t("el-input",{model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1),t("el-form-item",{attrs:{label:"活动区域",prop:"region"}},[t("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.ruleForm.region,callback:function(r){e.$set(e.ruleForm,"region",r)},expression:"ruleForm.region"}},[t("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),t("el-form-item",{attrs:{label:"活动时间",required:""}},[t("el-col",{attrs:{span:11}},[t("el-form-item",{attrs:{prop:"date1"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.date1,callback:function(r){e.$set(e.ruleForm,"date1",r)},expression:"ruleForm.date1"}})],1)],1),t("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),t("el-col",{attrs:{span:11}},[t("el-form-item",{attrs:{prop:"date2"}},[t("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:e.ruleForm.date2,callback:function(r){e.$set(e.ruleForm,"date2",r)},expression:"ruleForm.date2"}})],1)],1)],1),t("el-form-item",{attrs:{label:"即时配送",prop:"delivery"}},[t("el-switch",{model:{value:e.ruleForm.delivery,callback:function(r){e.$set(e.ruleForm,"delivery",r)},expression:"ruleForm.delivery"}})],1),t("el-form-item",{attrs:{label:"活动性质",prop:"type"}},[t("el-checkbox-group",{model:{value:e.ruleForm.type,callback:function(r){e.$set(e.ruleForm,"type",r)},expression:"ruleForm.type"}},[t("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),t("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),t("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),t("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),t("el-form-item",{attrs:{label:"特殊资源",prop:"resource"}},[t("el-radio-group",{model:{value:e.ruleForm.resource,callback:function(r){e.$set(e.ruleForm,"resource",r)},expression:"ruleForm.resource"}},[t("el-radio",{attrs:{label:"线上品牌商赞助"}}),t("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),t("el-form-item",{attrs:{label:"活动形式",prop:"desc"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.desc,callback:function(r){e.$set(e.ruleForm,"desc",r)},expression:"ruleForm.desc"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("立即创建")]),t("el-button",{on:{click:function(r){return e.resetForm("ruleForm")}}},[e._v("重置")]),t("el-button",{on:{click:function(r){return e.tabsClose()}}},[e._v("关闭这个标签页")])],1)],1)],1)},a=[];t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return a}))},acc6:function(e,r,t){"use strict";t.r(r);var l=t("34c1"),a=t("0686");for(var o in a)"default"!==o&&function(e){t.d(r,e,(function(){return a[e]}))}(o);var n=t("4e82"),i=Object(n["a"])(a["default"],l["a"],l["b"],!1,null,null,null);r["default"]=i.exports},b23d:function(e,r,t){var l,a,o;t("073b"),function(t,n){a=[r],l=n,o="function"===typeof l?l.apply(r,a):l,void 0===o||(e.exports=o)}("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"MultiViewPage",props:{id:[Number,String]},data:function(){return{ruleForm:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]}}},methods:{submitForm:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")}))},resetForm:function(e){this.$refs[e].resetFields()},tabsClose:function(){this.$ea.tabsClose()}}};e.default=r}))},cce3:function(e,r,t){"use strict";t.r(r);var l=t("b23d"),a=t.n(l);for(var o in l)"default"!==o&&function(e){t.d(r,e,(function(){return l[e]}))}(o);r["default"]=a.a},fad9:function(e,r,t){"use strict";t.r(r);var l=t("70a3"),a=t("cce3");for(var o in a)"default"!==o&&function(e){t.d(r,e,(function(){return a[e]}))}(o);var n=t("4e82"),i=Object(n["a"])(a["default"],l["a"],l["b"],!1,null,null,null);r["default"]=i.exports}}]);
//# sourceMappingURL=ea-multi-view.c19c1aa9.js.map