(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d0e5c9e","chunk-43eec914"],{"0e19":function(e,t,i){},"1caf":function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var a=i("7dfc");async function o(e,t,i){const{fileType:o,blobType:l="application/ms-excel"}=i,n=await e(t);if("application/json"===n.type){const e=new FileReader;e.readAsText(n);const t=this;e.onload=function(){const i=JSON.parse(e.result);t.$modal.msgError(i.header.responseDesc)}}else{const e=new Date,t=Object(a["a"])(e,"YYYYMMDDHHmmss");let i="FINANCIAL_RECONCILIATION_"+t+"."+o.toLowerCase();n.headers&&(i=n.headers["content-disposition"].split(";")[1].split("filename=")[1]);const s=new Blob([n],{type:l}),r=document.createElement("a");r.download=i,r.style.display="none",r.href=URL.createObjectURL(s),document.body.appendChild(r),r.click(),URL.revokeObjectURL(r.href),document.body.removeChild(r)}}},"27cd":function(e,t,i){},"6a90":function(e,t,i){"use strict";i("e55d")},7402:function(e,t,i){"use strict";i("27cd")},9488:function(e,t,i){"use strict";i("0e19")},c544:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"role-config business-portal-page"},[t("portal-header",{attrs:{projectObj:e.titleConfig,showBottomLine:!1}}),t("portal-form",{ref:"searchList",attrs:{"form-data":e.searchList,"form-config-list":e.formConfigList,searchBtnLoading:e.searchLoading,formRules:e.queryFormRules,bigAutoColumn:3},on:{"common-enter-event":e.search,"reset-btn-click":e.reset,"search-btn-click":e.search}},[t("template",{slot:"time"},[t("el-form-item",{staticClass:"form-item"},[t("span",{attrs:{slot:"label"},slot:"label"},[e._v("Time "),t("span",{staticClass:"label-tips"},[e._v(e._s(e.$t("IDC.auditlog.tips")))])]),t("el-date-picker",e._b({},"el-date-picker",e.timeDateConfig,!1)),t("i",{staticClass:"el-icon-date data_icon"})],1)],1)],2),t("div",{staticClass:"table-list-container"},[t("div",{staticStyle:{"padding-bottom":"16px"}},[t("el-dropdown",{on:{command:e.exportData}},[t("el-button",{directives:[{name:"preventReClick",rawName:"v-preventReClick"}],attrs:{type:"primary",size:"small",plain:""}},[e._v(" "+e._s(e.$t("common.button.export"))+" "),t("i",{staticClass:"el-icon-arrow-down el-icon--right",staticStyle:{"font-size":"12px"}})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",{attrs:{command:"XLS"}},[e._v("Excel")]),t("el-dropdown-item",{attrs:{command:"XLSX"}},[e._v("Excel 2007")]),t("el-dropdown-item",{attrs:{command:"CSV"}},[e._v("CSV")]),t("el-dropdown-item",{attrs:{command:"PDF"}},[e._v("PDF")]),t("el-dropdown-item",{attrs:{command:"TXT"}},[e._v("TXT")])],1)],1),t("el-button",{nativeOn:{click:function(t){return e.handleDetailPopup.apply(null,arguments)}}},[e._v("detail")])],1),t("table-page",{staticClass:"table-page",attrs:{size:"small","has-pagination":!0,columns:e.columns,pagination:e.paginationConfig,getTableData:e.getTableData,"is-search":e.refreshTableFlag,sortArr:["time"]},scopedSlots:e._u([{key:"operation",fn:function(i){return[t("el-button",{staticClass:"btn",attrs:{type:"text"},on:{click:function(t){return e.detail(i.data.row)}}},[e._v(" "+e._s(e.$t("common.label.detail"))+" ")])]}}])})],1),t("view-detail-popup",{ref:"popup-service",attrs:{popupVisible:e.popupVisible},on:{"update:popupVisible":function(t){e.popupVisible=t},"update:popup-visible":function(t){e.popupVisible=t}}})],1)},o=[],l=i("c811"),n=i("4c09"),s=i("3186"),r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"initiatePopup"},[t("el-dialog",{attrs:{title:e.$t("IDC.auditlog.viewDetails"),visible:e.popupVisible,width:"560px","close-on-click-modal":!1,"before-close":e.cancel},on:{"update:visible":function(t){e.popupVisible=t}}},[t("el-descriptions",{staticClass:"margin-top",attrs:{column:1,border:!1,colon:!1,size:"medium","label-style":e.labelStyle,"content-style":e.contentStyle}},[e._l(e.viewDetailList,(function(i,a){return t("el-descriptions-item",{key:a,attrs:{label:i.label}},[e._v(" "+e._s(i.content)+" ")])}))],2)],1)],1)},c=[],d={name:"addPrompt",components:{},props:{popupVisible:{type:Boolean,default:!1},addForm:{type:Object,default:()=>{}}},data(){return{viewDetailList:[{label:"Initiator:",key:"initiator"},{label:"Time:",key:"time"},{label:"Event:",key:"event"},{label:"Start Time:",key:"startTime"},{label:"End Time:",key:"endTime"},{label:"Search Criteria:",key:"searchCriteria"},{label:"Has Been Downloaded:",key:"downloaded"},{label:"Is Sensitive:",key:"isSensitive"},{label:"Info Type:",key:"infoType"},{label:"Remark:",key:"remark"},{label:"Client IP:",key:"clientIp"},{label:"Event Result:",key:"eventResult"}],labelStyle:{"font-size":"14px",color:"var(--line_color--dark)","padding-bottom":"5px",width:"149px"},contentStyle:{"font-size":"14px",color:"var(--text_color--emphasis)","padding-bottom":"20px"},row:{initiator:"Top10021002020",time:"31/08/2022 16:00:30",event:"View Till Details",startTime:"31/08/2022 16:00:30",endTime:"31/08/2022 16:00:30",searchCriteria:"Till ID:20400000000020030",downloaded:"No",isSensitive:"Yes",infoType:"Till Details",remark:"remark",clientIp:"10.234.55.13",eventResult:"Success"}}},computed:{},methods:{init(){this.viewDetailList=this.viewDetailList.map(e=>({label:e.label,content:this.row[e.key]||"-"}))},cancel(){this.$emit("update:popupVisible",!1)}},created(){},mounted(){},activated(){this.init()}},p=d,u=(i("6a90"),i("2877")),m=Object(u["a"])(p,r,c,!1,null,"ef410658",null),h=m.exports,g=i("5a0c"),b=i.n(g),f=i("1caf"),y=i("fb94"),v={components:{PortalHeader:l["a"],TablePage:n["a"],PortalForm:s["a"],ViewDetailPopup:h},name:"AuditLog",data(){return{timeDateConfig:{align:"right",type:"datetimerange",format:"dd/MM/yyyy HH:mm:ss","range-separator":"~","value-format":"yyyy-MM-dd HH:mm:ss","default-time":["00:00:00","23:59:59"],"start-placeholder":"Please select","end-placeholder":"Please select"},titleConfig:{title:this.$t("IDC.auditlog.AuditLogTitle"),desc:this.$t("IDC.auditlog.desc")},searchLoading:!1,refreshTableFlag:!1,popupVisible:!1,paginationConfig:{total:0,pageIndex:1,pageSize:10},searchList:{category:"",time:"",event:""},categoryList:[{value:"20",label:"Mutually Exclusive"},{value:"21",label:"query"}],eventList:[{value:"1",label:"Mutually Exclusive"},{value:"2",label:"query"},{value:"3",label:"group"}],columns:[],columnsA:[{label:this.$t("IDC.auditlog.initiatorType"),prop:"initiatorType",width:120,align:"left"},{label:this.$t("IDC.auditlog.initiator"),prop:"initiator",width:100,align:"left"},{label:this.$t("IDC.auditlog.time"),prop:"time",width:100,align:"left",__slotName:"time"},{label:this.$t("IDC.auditlog.event"),prop:"event",align:"left"},{label:this.$t("IDC.auditlog.identity"),prop:"identity",align:"left"},{label:this.$t("IDC.auditlog.transactionType"),prop:"transactionType",width:140,align:"left"},{label:this.$t("IDC.auditlog.reasonType"),prop:"reasonType",width:120,align:"left"},{label:this.$t("IDC.auditlog.tradeOrderId"),prop:"tradeOrderId",width:130,align:"left"},{label:this.$t("IDC.auditlog.operation"),prop:"operation",width:100,align:"left",__slotName:"operation"}],columnsB:[{label:this.$t("IDC.auditlog.initiatorType"),prop:"initiatorType",align:"left"},{label:this.$t("IDC.auditlog.initiator"),prop:"initiator",align:"left"},{label:this.$t("IDC.auditlog.time"),prop:"time",align:"left",__slotName:"time"},{label:this.$t("IDC.auditlog.event"),prop:"event",align:"left"},{label:this.$t("IDC.auditlog.identity"),prop:"identity",align:"left"},{label:this.$t("IDC.auditlog.transactionType"),prop:"transactionType",align:"left"}],columnsC:[{label:this.$t("IDC.auditlog.time"),prop:"time",align:"left",__slotName:"time"},{label:this.$t("IDC.auditlog.event"),prop:"event",align:"left"},{label:this.$t("IDC.auditlog.identity"),prop:"identity",align:"left"},{label:this.$t("IDC.auditlog.transactionType"),prop:"transactionType",align:"left"},{label:this.$t("IDC.auditlog.reasonType"),prop:"reasonType",align:"left"},{label:this.$t("IDC.auditlog.tradeOrderId"),prop:"tradeOrderId",align:"left"},{label:this.$t("IDC.auditlog.operation"),prop:"operation",align:"left",__slotName:"operation"}],drawer:!1,direction:"rtl",drawerForm:{organization:"0040 - AgencyHeadOffice10040",commissionPeriod:"0040 - AgencyHeadOffice10040",accountType:"Org Commission Received Account_VDF_Demo",accountNumber:"0040 - AgencyHeadOffice10040",currency:"0040 - AgencyHeadOffice10040",subtotal:"10.00",status:"Created",settlementMode:"Manually by Inputting Amount",settlementTime:"01/06/2022 00:00:00",operator:"MM SP",lastUpdateTime:"01/06/2022 00:00:00",remark:"-"},queryFormRules:{time:[{required:!0,message:"Please select time",trigger:"change"}]}}},computed:{formConfigList(){return[{label:this.$t("IDC.auditlog.category"),key:"category",comp:"el-select",options:this.categoryList,bind:{placeholder:this.$t("common.placeholder.select")}},{label:this.$t("IDC.auditlog.groupEvent"),key:"groupEvent",comp:"el-select",options:this.eventList,bind:{placeholder:this.$t("common.placeholder.select")},event:{change:e=>{switch(e){case"1":this.columns=this.columnsA;break;case"2":this.columns=this.columnsB;break;case"3":this.columns=this.columnsC;break}}},hidden:!1},{label:this.$t("IDC.auditlog.event"),key:"event",comp:"el-select",options:this.eventList,bind:{placeholder:this.$t("common.placeholder.select")},hidden:!1},{prop:"time",slotName:"time"}]}},methods:{reset(){this.refreshTableFlag=!0,this.searchList={},this.paginationConfig={total:0,pageIndex:1,pageSize:10}},search(){this.$refs["searchList"].validate(e=>{e&&(this.refreshTableFlag=!0,this.paginationConfig={total:0,pageIndex:1,pageSize:10})})},exportData(e){let t=Object.assign(this.searchList,{startTime:b()(this.searchList.time[0]).format("YYYY-MM-DD HH:mm:ss")||"2022-07-01 00:00:00",endTime:b()(this.searchList.time[1]).format("YYYY-MM-DD HH:mm:ss")||"2022-08-03 23:59:59",pageNo:this.paginationConfig.pageIndex,pageSize:this.paginationConfig.pageSize,type:"FINANCIAL_RECONCILIATION",fileType:e});Object(f["a"])(y["a"],t,{fileType:e})},detail(){this.drawer=!0},handleDetailPopup(){this.popupVisible=!0},handleClose(e){e()},getTableData(){let e={};return new Promise(t=>{e["list"]=[{initiatorType:"SP Operator",initiator:"MM SP0000",time:"03/09/2022 10:25:48",event:"Change Group Member",identity:"Forex200"}],e["totalRecords"]=1,this.refreshTableFlag=!1,this.searchLoading=!1,e["header"]["success"]=!0,t(e)})}},created(){this.columns=this.columnsA}},C=v,D=(i("7402"),Object(u["a"])(C,a,o,!1,null,"5148cbd2",null));t["default"]=D.exports},c811:function(e,t,i){"use strict";var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page-header",class:{"no-bottom-border":!e.showBottomLine,"no-desc-height":!e.projectObj.desc}},[t("div",{staticClass:"header-left"},[e.projectObj.title?t("div",{staticClass:"page-title"},[e._v(" "+e._s(e.projectObj.title)+" "),e._t("title-suffix")],2):e._e(),e.projectObj.desc?t("div",{staticClass:"page-desc"},[e._v(" "+e._s(e.projectObj.desc)+" ")]):e._e()]),t("div",{staticClass:"header-right"},[e._t("header-right")],2)])},o=[],l={name:"PortalHeader",components:{},props:{projectObj:{type:Object,default(){return{}}},showBottomLine:{type:Boolean,default:!0}}},n=l,s=(i("9488"),i("2877")),r=Object(s["a"])(n,a,o,!1,null,"73566ca8",null);t["a"]=r.exports},e55d:function(e,t,i){},fb94:function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"g",(function(){return l})),i.d(t,"h",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"d",(function(){return r})),i.d(t,"f",(function(){return c})),i.d(t,"e",(function(){return d})),i.d(t,"a",(function(){return p}));var a=i("0bbd");function o(){return Object(a["a"])({url:"/fintech/v1/auditLog/getCategoryList",method:"get"})}function l(e){return Object(a["a"])({url:"/fintech/v1/auditLog/queryEventGroup",method:"post",data:e})}function n(e){return Object(a["a"])({url:"/fintech/v1/auditLog/queryEventType",method:"post",data:e})}function s(){return Object(a["a"])({url:"/fintech/v1/auditLog/getLimitDay",method:"get"})}function r(e){return Object(a["a"])({url:"/fintech/v1/auditLog/listAuditLog",method:"post",data:e})}function c(e){return Object(a["a"])({url:"/fintech/v1/auditLog/queryAuditLogDetail",method:"post",data:e})}function d(e){return Object(a["a"])({url:"/fintech/v1/auditLog/listTakeCallReferenceAuditLog  ",method:"post",data:e})}function p(e){return Object(a["a"])({url:"/fintech/v1/auditLog/downloadAuditLog",method:"post",needHeader:!0,data:e,responseType:"blob"})}}}]);
//# sourceMappingURL=chunk-7d0e5c9e.js.map