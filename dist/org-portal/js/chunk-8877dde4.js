(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8877dde4"],{"02e3":function(e,t,i){"use strict";i.d(t,"e",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"y",(function(){return s})),i.d(t,"z",(function(){return r})),i.d(t,"w",(function(){return c})),i.d(t,"f",(function(){return a})),i.d(t,"u",(function(){return l})),i.d(t,"v",(function(){return d})),i.d(t,"x",(function(){return u})),i.d(t,"g",(function(){return h})),i.d(t,"s",(function(){return g})),i.d(t,"n",(function(){return m})),i.d(t,"r",(function(){return p})),i.d(t,"j",(function(){return f})),i.d(t,"l",(function(){return C})),i.d(t,"q",(function(){return b})),i.d(t,"m",(function(){return y})),i.d(t,"p",(function(){return w})),i.d(t,"k",(function(){return v})),i.d(t,"i",(function(){return L})),i.d(t,"h",(function(){return F})),i.d(t,"t",(function(){return x})),i.d(t,"d",(function(){return k})),i.d(t,"o",(function(){return _})),i.d(t,"a",(function(){return I})),i.d(t,"b",(function(){return $}));let n={required:!0,message:"Please enter content",trigger:"blur"},o={required:!0,message:"Please check content",trigger:"blur"},r={required:!0,message:"Please select content",trigger:"change"},s={pattern:/^[0-9a-zA-Z]*$/,message:"Must be number and letters.",trigger:"blur"},a={pattern:/^[+-]?[0-9]*$/,message:"Must be integer number.",trigger:"blur"},l={pattern:/[0-9]{4}/,message:"The MSISDN must contain at least 4 dligits",trigger:"blur"},c={pattern:/^[^@~`！!#$%^*（）()\-+=|,/<>《》?？;':\"“\[\]{}\\&]*$/,message:"Cannot contain special characters (~`!#$%^*()-+=|,/<>?;':\"[]{}\\&)",trigger:"blur"},d={pattern:/^[^@~`！!#$^*（）()\-+=|,/<>《》?？;':\"“\[\]{}\\&]*$/,message:"Cannot contain special characters (~`!#$^*()-+=|,/<>?;':\"[]{}\\&)",trigger:"blur"},u={pattern:/^[\w- ]+$/,message:"Please do not enter any special characters.",trigger:"blur"};k({minLen:0,maxLen:11});const h=k({minLen:0,maxLen:18}),g=(k({minLen:3,maxLen:3}),k({minLen:6,maxLen:16})),m=(k({minLen:8,maxLen:10}),k({minLen:8,maxLen:11}),k({minLen:4,maxLen:12})),p=k({minLen:6,maxLen:12}),f=k({minLen:0,maxLen:19}),C=k({minLen:0,maxLen:24}),b=k({minLen:0,maxLen:64}),y=(k({minLen:0,maxLen:100}),k({minLen:0,maxLen:256})),w=k({minLen:0,maxLen:512}),v=(k({minLen:8,maxLen:50}),k({minLen:1,maxLen:18})),L=k({minLen:0,maxLen:32}),F=k({minLen:0,maxLen:30}),x=k({minLen:9,maxLen:18});k({minLen:2,maxLen:256});function k({minLen:e=0,maxLen:t=100}){let i="";return i=e>0?`Must be between ${e} and ${t} characters`:`Must be less than ${t} characters`,{min:e,max:t,message:i,trigger:"blur"}}const _=k({minLen:0,maxLen:4});function I(e){let t=[];for(let i in e)e[i]&&e[i].toString().startsWith("%")&&1===e[i].length||!e[i]?t.push(!1):t.push(!0);return!t.every(e=>!1===e)}function $(e){return{validator:(t,i,n)=>{i&&i.startsWith("%")&&1===i.length?n(new Error(""+e)):n()},trigger:"blur"}}},"89fc":function(e,t,i){},"8ac9":function(e,t,i){"use strict";var n=function(){var e=this,t=e._self._c;return t("el-dialog",e._g(e._b({class:["portal-dialog",e.customFooter?"custom-footer":"",e.subtitle?"has-subtitle":""],attrs:{visible:e.dialogVisible,title:e.title,width:e.width,"close-on-click-modal":e.closeOnClickModal,"show-close":e.showClose,"before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t},opened:e.openedDialog,closed:e.closedDialog}},"el-dialog",e.$attrs,!1),e.$listeners),[e.subtitle?t("span",{staticClass:"subtitle"},[e._v(e._s(e.subtitle))]):e._e(),e._t("title"),e._t("content"),e.customFooter?e._t("footer"):t("div",{attrs:{slot:"footer"},slot:"footer"},[e.showCancel?t("button",{class:["cancel-button",e.cancelBtnDisable?"disabled":""],on:{click:e.handleCancelClick}},[e._v(" "+e._s(e.cancelText)+" ")]):e._e(),e.showSubmit?t("el-button",{attrs:{type:"primary",disabled:e.confirmBtnDisable,loading:e.submitLoading,size:"small"},on:{click:e.handleConfirmClick}},[e._v(e._s(e.confirmText))]):e._e()],1)],2)},o=[],r={name:"PortalDialog",props:{visible:{type:Boolean,default:!1},title:{type:String,default:""},width:{type:String,default:"448px"},customFooter:{type:Boolean,default:!1},cancelText:{type:String,default:"Cancel"},confirmText:{type:String,default:"Confirm"},closeOnClickModal:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},cancelBtnDisable:{type:Boolean,default:!1},confirmBtnDisable:{type:Boolean,default:!1},showSubmit:{type:Boolean,default:!0},subtitle:{type:String,default:""},showCancel:{type:Boolean,default:!0},submitLoading:{type:Boolean,default:!1}},data(){return{dialogVisible:!1}},watch:{visible:{handler(e){this.dialogVisible=e},immediate:!0},dialogVisible:{handler(e){this.$emit("show-dialog",e),this.$emit("update:visible",e)}}},methods:{handleClose(){this.dialogVisible=!1,this.$emit("handle-close")},handleCancelClick(){this.$emit("cancel-btn-click")},handleConfirmClick(){this.$emit("confirm-btn-click")},openedDialog(){this.$emit("opened-dialog")},closedDialog(){this.$emit("closed-dialog")}}},s=r,a=(i("df6c"),i("2877")),l=Object(a["a"])(s,n,o,!1,null,"081459b7",null);t["a"]=l.exports},a135:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login-wrapper",attrs:{id:"app"}},[e._m(0),t("div",{staticClass:"wrapper-right"},[t("el-row",[t("el-col",{attrs:{span:12}},[t("div",{staticClass:"login-content"},[t("div",{staticClass:"login-title"},[t("p",{staticClass:"huaweiSans_medium"},[e._v(e._s(e.$i18n.t("auth.welcomeTitle")))]),t("p",{staticClass:"huaweiSans_bold"},[e._v(e._s(e.$i18n.t("auth.login")))])]),e.loginErrorMsg.length>0?t("div",{staticClass:"error-tip-content"},[e._v(" "+e._s(e.loginErrorMsg)+" ")]):e._e(),t("div",{staticClass:"login-form"},[t("el-form",{ref:"loginForm",style:{"padding-top":e.loginErrorMsg?"32px":"16px"},attrs:{id:"login-form",model:e.loginForm,rules:e.loginRule}},[t("el-form-item",{attrs:{prop:"shortCode",label:e.$i18n.t("auth.shortCode")}},[t("el-input",{attrs:{id:"shortCode",size:"small",type:"text",placeholder:"Please enter"},on:{focus:function(t){return e.initInputDom()}},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextFocus(t)}},model:{value:e.loginForm.shortCode,callback:function(t){e.$set(e.loginForm,"shortCode",t)},expression:"loginForm.shortCode"}})],1),t("el-form-item",{attrs:{prop:"operatorName",label:e.$i18n.t("auth.userName")}},[t("el-input",{attrs:{id:"userAccount",size:"small",placeholder:"Please enter"},on:{focus:function(t){return e.initInputDom()}},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextFocus(t)}},model:{value:e.loginForm.operatorName,callback:function(t){e.$set(e.loginForm,"operatorName","string"===typeof t?t.trim():t)},expression:"loginForm.operatorName"}})],1),t("el-form-item",{attrs:{prop:"password",label:e.$i18n.t("auth.password")}},[t("el-input",{attrs:{id:"password",size:"small",type:"password",placeholder:"Please enter"},on:{focus:function(t){return e.initInputDom()}},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextFocus(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),e.needGraphicVerifyCode?t("el-form-item",{staticClass:"verify-code-input",attrs:{prop:"graphicVerifyCode",label:e.$i18n.t("auth.verifyCode")}},[t("el-input",{attrs:{id:"verifyCode",size:"small",placeholder:"Please enter"},on:{focus:function(t){return e.initInputDom()}},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextFocus(t)}},model:{value:e.loginForm.graphicVerifyCode,callback:function(t){e.$set(e.loginForm,"graphicVerifyCode",t)},expression:"loginForm.graphicVerifyCode"}},[t("img",{ref:"loginVerifyCodeRef",staticClass:"verifycode-img",attrs:{slot:"append",src:e.initLoginVCUrl},on:{click:e.refreshLoginVerifyCodeImage},slot:"append"})])],1):e._e()],1),t("div",{staticClass:"agreement-btn"},[t("el-checkbox",{attrs:{disabled:e.checkboxDisabled},model:{value:e.agreementChecked,callback:function(t){e.agreementChecked=t},expression:"agreementChecked"}},[t("span",[e._v(e._s(e.$i18n.t("auth.agreeTo")))]),t("el-button",{attrs:{type:"text"},on:{click:function(t){e.dialogVisible=!0}}},[e._v(e._s(e.$i18n.t("auth.loginServer")))])],1)],1),t("el-button",{staticClass:"login-btn",attrs:{id:"loginBtn",disabled:!e.checkFormIptLth,type:"primary",loading:e.loginLoading},on:{click:function(t){return e.submitForm("loginForm")}}},[e._v(" "+e._s(e.$i18n.t("auth.login"))+" "),t("i",{staticClass:"el-icon-right el-icon--right"})]),t("el-button",{staticClass:"forget-text-btn",attrs:{type:"text"},on:{click:e.toForgetPwd}},[e._v(" "+e._s(e.$i18n.t("auth.forgetPassword"))+" ")])],1)])])],1)],1),t("portal-dialog",{attrs:{width:"584px",visible:e.dialogVisible,customFooter:!0,showClose:!0,title:e.agreementInfo.title},on:{"opened-dialog":e.opendDialog,"closed-dialog":e.closedDialog}},[t("div",{staticClass:"agreement-wrapper",attrs:{slot:"content"},slot:"content"},[t("div",[t("p",{staticClass:"agreement-content"},[e._v(e._s(e.agreementInfo.content))])])]),t("div",{staticClass:"agreement-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"small",type:"primary",disabled:e.closeBtnDisabled},on:{click:e.agreementBtn}},[e._v(" "+e._s(e.$i18n.t("auth.agreeAndRead"))),e.showCountDown?t("span",[e._v("("+e._s(e.timeToClose)+"S)")]):e._e()])],1)]),t("portal-dialog",{attrs:{customFooter:!0,visible:e.isChangePwdVisible,title:e.$t("auth.expireTitle")},on:{"closed-dialog":e.cancelChangePwdAndGo2Main}},[t("div",{staticClass:"is-change-pwd-content",attrs:{slot:"content"},slot:"content"},[t("span",{staticClass:"subtitle"},[e._v(e._s(e.$t("auth.expireSubTitle")))])]),t("div",{staticClass:"change-pwd-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"small",type:"text"},on:{click:e.toChangePassword}},[e._v(e._s(e.$t("auth.clickToChangePwd")))])],1)])],1)},o=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"wrapper-left"},[t("div",{staticClass:"login-animation"})])}],r=i("df7c8"),s=i("02e3"),a=i("8ac9"),l=i("a18c"),c=i("0360"),d={name:"Login",components:{PortalDialog:a["a"]},data(){return{loginLoading:!1,loginErrorMsg:"",loginForm:{operatorName:"",password:"",graphicVerifyCode:"",shortCode:""},initLoginVCUrl:"",loginRule:{operatorName:[],password:[],shortCode:[],graphicVerifyCode:[]},needGraphicVerifyCode:!1,inputDoms:[],graphicVerifyCodeKey:"",agreementChecked:!1,dialogVisible:!1,agreementInfo:{title:"",content:""},timeToClose:3,closeBtnDisabled:!0,showCountDown:!0,checkboxDisabled:!0,countDownEvent:null,isChangePwdVisible:!1,initiatorIdentityId:""}},computed:{checkFormIptLth(){let e=!1,t=this.loginForm["operatorName"].length>0&&this.loginForm["password"].length>0&&this.loginForm["shortCode"].length>0&&!0===this.agreementChecked;return this.needGraphicVerifyCode?t&&this.loginForm["graphicVerifyCode"].length>0&&(e=!0):t&&(e=!0),e}},created(){Object(l["b"])(),Object(r["l"])().then(e=>{e.needGraphicVerifyCode&&(this.needGraphicVerifyCode=e.needGraphicVerifyCode,this.loginRule.graphicVerifyCode=this.needGraphicVerifyCode?[s["o"]]:[])}),this.refreshLoginVerifyCodeImage(),Object(r["f"])().then(e=>{e&&e.header.success&&(this.agreementInfo.title=e.title,this.agreementInfo.content=e.content)})},mounted(){},methods:{cancelChangePwdAndGo2Main(){this.go2MainMenu()},toChangePassword(){this.$router.push({path:"/forceChangePwd",query:{operatorName:this.loginForm.operatorName,initiatorIdentityId:this.initiatorIdentityId,shortCode:this.loginForm.shortCode,expireFlag:"aboutToExpire"}})},toForgetPwd(){this.$router.push({path:"/forgetPwd"})},agreementBtn(){this.dialogVisible=!1,this.agreementChecked=!0,this.timeToClose=3},closedDialog(){this.dialogVisible=!1,clearInterval(this.countDownEvent)},opendDialog(){this.timeToClose=3,this.countDownEvent=setInterval(()=>{this.timeToClose--,0===this.timeToClose&&(this.closeBtnDisabled=!1,this.showCountDown=!1,this.checkboxDisabled=!1,clearInterval(this.countDownEvent))},1e3)},refreshLoginVerifyCodeImage(){Object(r["e"])().then(e=>{e&&(this.initLoginVCUrl=e.graphicVerifyCode,this.graphicVerifyCodeKey=e.graphicVerifyCodeKey)})},submitForm(e){this.$refs[e].validate(t=>{if(this.agreementChecked)return!!t&&void("loginForm"===e&&this.login())})},async login(){this.loginErrorMsg="",this.loginLoading=!0;let e={password:this.loginForm.password,graphicVerifyCode:this.loginForm.graphicVerifyCode,shortCode:this.loginForm.shortCode,graphicVerifyCodeKey:this.graphicVerifyCodeKey,operatorName:this.loginForm.operatorName};try{const t=await Object(r["a"])(e);if(!0===t.header.success){this.initiatorIdentityId=t.orgOperatorIdentityId,c["default"].set("initiatorIdentityId",t.orgOperatorIdentityId),c["default"].set("initiatorShortCode",t.shortCode),c["default"].set("operator_name",t.operatorName);let e={operatorName:this.loginForm.operatorName,shortCode:this.loginForm.shortCode,initiatorIdentityId:t.orgOperatorIdentityId};if("FLFM"===t.redirectFlag){const i=await Object(r["k"])();if(i.header&&i.header.success){let n={};const{orgOperatorQuestionAnswer:o,questionNumber:r}=i;n=r>0&&o.length>0?{...e,receiverIdentityId:t.receiverIdentityId}:{...e,receiverIdentityId:t.receiverIdentityId,redirectFlag:"changeWidthoutQA"},this.$router.push({path:"/firstLoginChangePwd",query:n})}}else"FLFMQA"===t.redirectFlag?this.$router.push({path:"/forceChangePwd",query:{...e,redirectFlag:"FLFMQAorPEFM"}}):"PETM"===t.redirectFlag?this.isChangePwdVisible=!0:"PEFM"===t.redirectFlag?(this.$message.warning("The password has expired. Please change it."),this.$router.push({path:"/forceChangePwd",query:{...e,redirectFlag:"FLFMQAorPEFM",expireFlag:"hasExpire"}})):this.go2MainMenu(t)}else{let e=t.header.responseDesc;this.processLoginError(e)}}finally{this.loginLoading=!1}},go2MainMenu(e){this.$store.dispatch("routerStore/setTopMenus").then(()=>{this.$store.dispatch("baseStore/setCurrentUser",e.operatorName);const t=this.$route.query,i=t&&t.redirectPath?t.redirectPath:"/home";this.$router.push({path:"/login"===i?"/home":i})})},processLoginError(e){let t="SM.LOGIN.LABEL.VCODE_INVALID";this.loginErrorMsg=e==t?"Incorrect verification code.":e,void 0===this.loginErrorMsg&&(this.loginErrorMsg="System Error"),this.needGraphicVerifyCode&&this.refreshLoginVerifyCodeImage()},initInputDom(){if(0!=this.inputDoms.length)return;let e=document.querySelectorAll("#login-form .el-input__inner");e.forEach((e,t)=>{e.setAttribute("data-index",t)}),this.inputDoms=e},nextFocus(e){let t=e.target.getAttribute("data-index"),i=parseInt(t)+1,n=this.inputDoms.length;i<n?this.inputDoms[i].focus():this.loginLoading||this.submitForm("loginForm")}}},u=d,h=(i("a506"),i("2877")),g=Object(h["a"])(u,n,o,!1,null,"6479ea6a",null);t["default"]=g.exports},a506:function(e,t,i){"use strict";i("89fc")},c5ea:function(e,t,i){},df6c:function(e,t,i){"use strict";i("c5ea")}}]);
//# sourceMappingURL=chunk-8877dde4.js.map