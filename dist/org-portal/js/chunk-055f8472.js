(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-055f8472"],{"0437":function(e,t,n){},1698:function(e,t,n){"use strict";n("0437")},"64e7":function(e,t,n){"use strict";var s=n("0360"),a=n("5c96");t["a"]={downLoadFile:function(e,t,n,i){let o=new XMLHttpRequest;o.open(n||"POST",e,!0),o.setRequestHeader("Content-type","application/json"),i&&o.setRequestHeader("X-XSRF-TOKEN",s["default"].get("O-XSRF-TOKEN")),o.setRequestHeader("o-token",s["default"].get("o-token")),o.setRequestHeader("Cache-Control","no-store, max-age=0, must-revalidate"),o.responseType="blob",o.onload=function(){if(200===this.status){let e=this.response,t=o.getResponseHeader("content-disposition").split(";")[1].split("filename=")[1],n=decodeURIComponent(t),s=URL.createObjectURL(e),a=document.createElement("a");a.href=s,a.download=n,a.click()}else a["MessageBox"].alert("Download failed.","Error",{type:"error",confirmButtonText:"Confirm"})},o.send(JSON.stringify(t))}}},ec4f:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"detail-list"},[t("portal-header",{attrs:{projectObj:e.titleConfig}},[t("span",{staticClass:"detail-color",attrs:{slot:"title-suffix"},slot:"title-suffix"},[e._v(e._s(e.params.statusName))]),"Completed"===e.params.statusName?t("div",{staticClass:"downloadBox",attrs:{slot:"header-right"},on:{click:e.handleDownloadClick},slot:"header-right"},[t("svg-icon",{staticClass:"svgIcon",attrs:{"icon-class":"download"}}),t("br"),t("span",{staticClass:"scgDes"},[e._v("Down Load")])],1):e._e()]),t("div",{staticClass:"basicInfo"},[t("basic-info-item",{attrs:{itemInfoList:e.basicInfo}})],1),t("div",{staticClass:"settlementEntries"},[t("div",{staticClass:"subtitle subtitle-table"},[e._v(e._s(e.$t("BUC.revenueSettlement.settlementEntries")))]),t("table-page",{staticClass:"margin-top-16",staticStyle:{"padding-bottom":"16px","margin-top":"20px","padding-left":"20px","padding-right":"20px"},attrs:{id:"table",size:"small","has-pagination":!1,isSearch:e.isSearch,"max-height":"280",initializingLoading:!1,sortArr:["settlementTypeName","tenantId","reasonTypeName","debitAccountTypeName","creditAccountTypeName","statusName"],columns:e.columns,getTableData:e.getTableData}})],1)],1)},a=[],i=n("c811"),o=n("4c09"),r=n("9807"),l=n("9cfe"),c=n("c652"),m=n("64e7"),p={name:"settlementDetail",components:{PortalHeader:i["a"],TablePage:o["a"],BasicInfoItem:r["a"]},data(){return{params:{},isSearch:!1,entriesList:[],settlementInfoAmountLabel:"",entriesAmountLabel:""}},computed:{titleConfig(){return{title:this.$t("BUC.revenueSettlement.detailTitle")}},basicInfo(){return[{title:this.$t("BUC.revenueSettlement.planId"),content:"-"},{title:this.$t("BUC.revenueSettlement.fundingSource"),content:"-"},{title:this.$t("BUC.revenueSettlement.eventType"),content:"-"},{title:this.$t("BUC.revenueSettlement.processType"),content:"-"},{title:this.$t("BUC.revenueSettlement.status"),content:"-"},{title:this.$t("BUC.revenueSettlement.settlementAccount"),content:"-"},{title:this.$t("BUC.revenueSettlement.organizationShortCode"),content:"-"},{title:this.$t("BUC.revenueSettlement.organizationName"),content:"-"},{title:this.settlementInfoAmountLabel,content:"-"},{title:this.$t("BUC.revenueSettlement.errorMessage"),content:"-",co:{xs:24,sm:24,md:24,lg:24,xl:18}}]},columns(){return[{label:this.$t("BUC.revenueSettlement.settlementType"),prop:"settlementTypeName",align:"left","sort-method":(e,t)=>e.settlementTypeName>t.settlementTypeName?1:-1},{label:this.$t("BUC.revenueSettlement.transactionId"),prop:"tenantId",align:"left","sort-method":(e,t)=>e.tenantId>t.tenantId?1:-1},{label:this.$t("BUC.revenueSettlement.reasonType"),prop:"reasonTypeName",align:"left","sort-method":(e,t)=>e.reasonTypeName>t.reasonTypeName?1:-1},{label:this.$t("BUC.revenueSettlement.debitAccount"),prop:"debitAccountTypeName",align:"left","sort-method":(e,t)=>e.debitAccountTypeName>t.debitAccountTypeName?1:-1},{label:this.$t("BUC.revenueSettlement.creditAccount"),prop:"creditAccountTypeName",align:"left","sort-method":(e,t)=>e.creditAccountTypeName>t.creditAccountTypeName?1:-1},{label:this.entriesAmountLabel,prop:"amount",align:"left"},{label:this.$t("BUC.revenueSettlement.status"),prop:"statusName",align:"left","sort-method":(e,t)=>e.statusName>t.statusName?1:-1},{label:this.$t("BUC.revenueSettlement.errorMessage"),prop:"errorMsg",align:"left"}]}},created(){this.params=JSON.parse(decodeURIComponent(this.$route.query.params)),this.getDetailInfo()},methods:{async getDetailInfo(){let e={planOrderId:this.params.planOrderId},t=await Object(l["d"])(e);t.header&&t.header.success&&(this.isSearch=!0,this.entriesList=t.entryList)},setBasicInfo(){this.basicInfo[0].content=this.params.planOrderId||"-",this.basicInfo[1].content=this.params.fundingSourceValue||"-",this.basicInfo[2].content=this.params.eventTypeName||"-",this.basicInfo[3].content=this.params.planTypeName||"-",this.basicInfo[4].content=this.params.statusName||"-",this.basicInfo[5].content=this.params.settlementAccountTypeName||"-",this.basicInfo[6].content=this.params.shortCode||"-",this.basicInfo[7].content=this.params.orgName||"-",this.basicInfo[8].content=this.params.expectedNetAmount||"-",this.basicInfo[9].content=this.params.errorMsg||"-"},getTableData(){let e=c["a"].format("100",this.params.currency),t=e.substring(0,1);return this.settlementInfoAmountLabel=`${this.$t("BUC.revenueSettlement.amount")}(${t})`,this.entriesAmountLabel=`${this.$t("BUC.revenueSettlement.tableAmount")}(${t})`,this.setBasicInfo(),new Promise(e=>{this.isSearch=!1;let t={header:{success:!0},list:this.entriesList};e(t)})},handleDownloadClick(){let e={planOrderId:this.params.planOrderId,exportType:"Excel"};const t="/orgportal/fintech/v1/settlement/revenue/org/downloadOrgRevenueReport";m["a"].downLoadFile(t,e,"POST",!0)}}},d=p,u=(n("1698"),n("2877")),h=Object(u["a"])(d,s,a,!1,null,"c5e24588",null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-055f8472.js.map