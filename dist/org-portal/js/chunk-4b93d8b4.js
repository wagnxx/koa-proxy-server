(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b93d8b4"],{"0a77":function(t,a,e){"use strict";e("fcd9")},c603:function(t,a,e){"use strict";e.r(a);var l=function(){var t=this,a=t._self._c;return a("div",{staticClass:"complete-transaction"},[a("el-row",[a("el-col",{attrs:{span:18}},[a("div",{staticClass:"left-content"},[a("portal-header",{attrs:{projectObj:t.titleConfig}}),a("div",{staticClass:"basic-box",staticStyle:{padding:"20px"}},[a("basic-info-item",{attrs:{basicInfo:t.accountDatas}})],1),a("div",{staticStyle:{marginbottom:"20px"}},[a("div",{staticClass:"table-box"},[a("p",[t._v("Additional Transaction Notes")]),a("el-divider")],1),a("div",{staticStyle:{padding:"20px",background:"#fff"}},[a("portal-table",{staticClass:"portal-table",attrs:{id:"table",size:"small",columns:t.additionalColumns,getTableData:t.getTableData,isSearch:!1,width:"0"}})],1)]),a("div",{staticStyle:{marginbottom:"20px"}},[a("div",{staticClass:"table-box"},[a("p",[t._v("Account Entries")]),a("el-divider")],1),a("div",{staticStyle:{padding:"20px",background:"#fff"}},[a("portal-table",{staticClass:"portal-table",attrs:{id:"table",size:"small",columns:t.accountColumns,getTableData:t.getTableData,isSearch:!1,width:"0"}})],1)]),a("div",{staticStyle:{marginbottom:"20px"}},[a("div",{staticClass:"table-box"},[a("p",[t._v("Audit Log")]),a("el-divider")],1),a("div",{staticStyle:{padding:"20px",background:"#fff"}},[a("portal-table",{staticClass:"portal-table",attrs:{id:"table",size:"small",columns:t.auditColumns,getTableData:t.getTableData,isSearch:!1,width:"0"}})],1)]),a("div",{staticStyle:{marginbottom:"20px"}},[a("div",{staticClass:"table-box"},[a("p",[t._v("System Interact Log")]),a("el-divider")],1),a("div",{staticStyle:{padding:"20px",background:"#fff"}},[a("portal-table",{staticClass:"portal-table",attrs:{id:"table",size:"small",columns:t.systemColumns,getTableData:t.getTableData,isSearch:!1,width:"0"}})],1)]),a("div",{staticStyle:{marginbottom:"20px"}},[a("div",{staticClass:"table-box"},[a("p",[t._v("Linked Transaction Details")]),a("el-divider")],1),a("div",{staticStyle:{padding:"20px",background:"#fff"}},[a("portal-table",{staticClass:"portal-table",attrs:{id:"table",size:"small",columns:t.imtColumns,getTableData:t.getTableData,isSearch:!1,width:"0"}})],1)])],1)]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"right-content"},[a("div",{staticClass:"table-box-right"},[a("p",[t._v("Complete Transaction")]),a("el-divider")],1),a("div",{staticClass:"scenario-and-remark"},[a("p",{staticStyle:{color:"#5c5c5c"}},[t._v("Initiate Scenario")]),a("p",[t._v("Initiate transaction on behalf of customer")]),a("el-form",{attrs:{rules:t.formRules}},[a("el-row",[a("el-col",[a("el-form-item",{attrs:{label:"Remark",prop:"remark"}},[a("el-select",{model:{value:t.value,callback:function(a){t.value=a},expression:"value"}},[a("el-option",{attrs:{value:"123",label:"1234"}},[t._v("123354")])],1),a("el-input",{attrs:{type:"textarea",rows:4}})],1)],1)],1)],1),a("div",{staticClass:"button-item"},[a("el-button",{attrs:{id:"cancel",size:"small"},on:{click:t.handleCancel}},[t._v(t._s(t.$t("common.button.cancel"))+" ")]),a("el-button",{directives:[{name:"preventReClick",rawName:"v-preventReClick"}],attrs:{id:"confirm",size:"small",type:"primary"},on:{click:t.handelSubmit}},[t._v(" "+t._s(t.$t("common.button.confirm"))+" ")])],1)],1)])])],1)],1)},i=[],n=e("c811"),o=e("4c09"),s=e("93d8"),c={name:"imtTransaction",components:{PortalHeader:n["a"],PortalTable:o["a"],BasicInfoItem:s["a"]},data(){return{value:"",activeName:"second",formDataL:{},tempFormRules:"",accountDatas:{},titleConfig:{title:"9JG1000CUU Detail"},titleConfiglast:{title:"Linked Transaction Details"},formRules:{remark:[{required:!0,massage:"please select",trigger:"blur"}]},additionalColumns:[{label:"key",prop:"accountNo",align:"left","min-width":"198"},{label:"Value",prop:"accountName","min-width":"173"}],accountColumns:[{label:"Identity Type",prop:"accountNo",align:"left","min-width":"198"},{label:"Identity",prop:"accountName","min-width":"173"},{label:"Account",prop:"accountNo",align:"left","min-width":"198"},{label:"Reason Type",prop:"accountName","min-width":"173"},{label:"Details",prop:"accountName","min-width":"173"},{label:"Transaction Amount",prop:"accountName","min-width":"173"},{label:"Available Balance",prop:"accountName","min-width":"173"},{label:"Running Balance",prop:"accountName","min-width":"173"}],auditColumns:[{label:"Event",prop:"accountNo",align:"left","min-width":"198"},{label:"Initiator Type",prop:"accountName","min-width":"173"},{label:"Initiator",prop:"accountType","min-width":"193"},{label:"Time",prop:"currency","min-width":"150"},{label:"Remark",prop:"alias","min-width":"190"}],systemColumns:[{label:"Event",prop:"accountNo",align:"left","min-width":"198"},{label:"Time",prop:"accountName","min-width":"173"},{label:"Result",prop:"accountType","min-width":"193"},{label:"Remark",prop:"accountType","min-width":"193"}],imtColumns:[{label:"Receipt No.",prop:"accountNo",align:"left","min-width":"198"},{label:"Linked Type",prop:"accountName","min-width":"173"},{label:"Status",prop:"accountType","min-width":"193"},{label:"Initiator",prop:"currency","min-width":"150"},{label:"Last Update Time",prop:"alias","min-width":"190"}]}},watch:{},created(){},methods:{getTableData(){},handleClick(){},search(){},reset(){},handleCancel(){this.$confirm("Are you sure to reset all data you have entered/selected in this page",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"})},handelSubmit(){this.$modal.msgSuccess("Complete transaction submitted successfully.")}}},r=c,d=(e("0a77"),e("2877")),p=Object(d["a"])(r,l,i,!1,null,"7761edaa",null);a["default"]=p.exports},fcd9:function(t,a,e){}}]);
//# sourceMappingURL=chunk-4b93d8b4.js.map