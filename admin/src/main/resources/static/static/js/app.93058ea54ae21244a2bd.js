webpackJsonp([1],{H4Aq:function(e,t){},NHnr:function(e,t,a){"use strict";function n(){O.state.app.menuRouteLoaded?console.log("动态菜单和路由已经存在."):m("/user/findPermissions",{}).then(function(e){if(200==e.status){O.commit("setPerms",e.data.split(";"));for(var t=0;t<H.options.routes.length;t++){var a=H.options.routes[t];a.meta&&(function(e){var t=O.state.user.perms;if(!t)return!1;for(var a=0,n=e.length;a<n;a++)for(var s=0,i=t.length;s<i;s++)if(e[a]===t[s])return!0;return!1}(a.meta.roles)||(a.hidden=!0))}O.commit("menuRouteLoaded",!0)}},function(e){})}Object.defineProperty(t,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{"background-color":"rgba(235, 235, 235, 0.08)"},attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]},o=a("VU/8")({name:"app"},i,!1,function(e){a("d4F1")},null,null).exports,l=a("/ocq"),r=a("mtWM"),c=a.n(r),u=a("sqb0"),d=a.n(u),m=function(e,t){return c()({method:"get",data:t,transformRequest:[function(e){var t="";for(var a in e)t+=encodeURIComponent(a)+"="+encodeURIComponent(e[a])+"&";return t}],headers:{"Content-Type":"application/x-www-form-urlencoded",token:d.a.get("token")},url:""+e})},p=function(e,t){return c()({method:"post",url:""+e,data:t,transformRequest:[function(e){var t="";for(var a in e)t+=encodeURIComponent(a)+"="+encodeURIComponent(e[a])+"&";return t}],headers:{"Content-Type":"application/x-www-form-urlencoded",token:d.a.get("token")}})},h={data:function(){return{rules:{account:[{required:!0,message:"请输入用户名",trigger:"blur"}],checkPass:[{required:!0,message:"请输入密码",trigger:"blur"}]},checked:!0,loginForm:{userName:"",password:""},loading:!1}},methods:{submitClick:function(){var e=this;this.loading=!0,p("/login",{userName:this.loginForm.userName,password:this.loginForm.password}).then(function(t){if(e.loading=!1,200==t.status){var a=t.data;"success"==a.status?(d.a.set("token",a.msg),e.$router.replace({path:"/home"})):e.$alert("登录失败1!","失败!")}else e.$alert("登录失败2!","失败!")},function(t){e.loading=!1,e.$alert("找不到服务器","失败!")})}}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"login-container",attrs:{rules:e.rules,"label-position":"left","label-width":"0px"}},[a("h3",{staticClass:"login_title"},[e._v("系统登录")]),e._v(" "),a("el-form-item",{attrs:{prop:"account"}},[a("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:e.loginForm.userName,callback:function(t){e.$set(e.loginForm,"userName",t)},expression:"loginForm.userName"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"checkPass"}},[a("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),e._v(" "),a("el-checkbox",{staticClass:"login_remember",attrs:{"label-position":"left"},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("记住密码")]),e._v(" "),a("el-form-item",{staticStyle:{width:"100%"}},[a("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},nativeOn:{click:function(t){t.preventDefault(),e.submitClick(t)}}},[e._v("登录")])],1)],1)},staticRenderFns:[]},v=a("VU/8")(h,f,!1,function(e){a("H4Aq")},null,null).exports,g={methods:{handleCommand:function(e){var t=this;"logout"==e&&this.$confirm("注销登录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){m("/logout"),t.currentUserName="游客",t.$router.replace({path:"/"})},function(){})}},mounted:function(){var e=this;m("/user/currentUserName").then(function(t){e.currentUserName=t.data},function(t){e.currentUserName="游客"})},data:function(){return{currentUserName:""}}},b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{staticClass:"home_container"},[a("el-header",[a("div",{staticClass:"home_title"},[e._v("后台管理平台")]),e._v(" "),a("div",{staticClass:"home_userinfoContainer"},[a("el-dropdown",{on:{command:e.handleCommand}},[a("span",{staticClass:"el-dropdown-link home_userinfo"},[e._v("\n  "+e._s(e.currentUserName)),a("i",{staticClass:"el-icon-arrow-down el-icon--right home_userinfo"})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"sysMsg"}},[e._v("系统消息")]),e._v(" "),a("el-dropdown-item",{attrs:{command:"MyHome"}},[e._v("个人主页")]),e._v(" "),a("el-dropdown-item",{attrs:{command:"logout",divided:""}},[e._v("退出登录")])],1)],1)],1)]),e._v(" "),a("el-container",[a("el-aside",{attrs:{width:"200px"}},[a("el-menu",{staticClass:"el-menu-vertical-demo",staticStyle:{"background-color":"#ECECEC"},attrs:{"default-active":"0",router:""}},[e._l(this.$router.options.routes,function(t,n){return t.hidden?e._e():[t.children.length>1?a("el-submenu",{key:n,attrs:{index:n+""}},[a("template",{slot:"title"},[a("i",{class:t.iconCls}),e._v(" "),a("span",[e._v(e._s(t.name))])]),e._v(" "),e._l(t.children,function(t){return t.hidden?e._e():a("el-menu-item",{key:t.path,attrs:{index:t.path}},[e._v("\n              "+e._s(t.name)+"\n            ")])})],2):[a("el-menu-item",{attrs:{index:t.children[0].path}},[a("i",{class:t.children[0].iconCls}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.children[0].name))])])]]})],2)],1),e._v(" "),a("el-container",[a("el-main",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",{domProps:{textContent:e._s(this.$router.currentRoute.name)}})],1),e._v(" "),a("keep-alive",[this.$route.meta.keepAlive?a("router-view"):e._e()],1),e._v(" "),this.$route.meta.keepAlive?e._e():a("router-view")],1)],1)],1)],1)},staticRenderFns:[]},y=a("VU/8")(g,b,!1,function(e){a("q7oC")},null,null).exports,_={data:function(){return{servers:[],loading:!1,currentPage:1,totalCount:-1,pageSize:10,keywords:""}},mounted:function(){var e=this;this.loading=!0,this.loadRecords(1,this.pageSize);e=this;window.bus.$on("tableReload",function(){e.loading=!0,e.loadRecords(e.currentPage,e.pageSize)})},methods:{searchClick:function(){this.loadRecords(1,this.pageSize)},currentChange:function(e){this.currentPage=e,this.loading=!0,this.loadRecords(e,this.pageSize)},loadRecords:function(e,t){var a=this;m("/server/all?page="+e+"&count="+t).then(function(e){a.loading=!1,200==e.status?(a.servers=e.data.servers,console.info("_this.servers=="+a.servers),a.totalCount=e.data.totalCount):a.$message({type:"error",message:"数据加载失败!"})},function(e){a.loading=!1,403==e.response.status?a.$message({type:"error",message:e.response.data}):a.$message({type:"error",message:"数据加载失败!"})}).catch(function(e){a.loading=!1,a.$message({type:"error",message:"数据加载失败!"})})}}},w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticStyle:{display:"flex","justify-content":"flex-start"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"通过服务器id搜索...","prefix-icon":"el-icon-search",size:"mini"},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}}),e._v(" "),a("el-button",{staticStyle:{"margin-left":"3px"},attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.searchClick}},[e._v("搜索\n    ")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%","overflow-x":"hidden","overflow-y":"hidden"},attrs:{data:e.servers,"tooltip-effect":"dark"}},[e.showEdit||e.showDelete?a("el-table-column",{attrs:{type:"selection",width:"35",align:"left"}}):e._e(),e._v(" "),a("el-table-column",{attrs:{label:"服务器名称",width:"200",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{color:"#409eff",cursor:"pointer"},on:{click:function(a){e.itemClick(t.row)}}},[e._v(e._s(t.row.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"服务器ip",width:"140",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.ip))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"onlinePlayerSum",label:"在线人数",width:"120",align:"left"}}),e._v(" "),a("el-table-column",{attrs:{prop:"cachePlayerSum",label:"缓存人数",width:"120",align:"left"}})],1),e._v(" "),a("div",{staticClass:"server_table_footer"})],1)},staticRenderFns:[]},k={data:function(){return{emailValidateForm:{email:""},loading:!1}},mounted:function(){var e=this;m("/currentUserEmail").then(function(t){200==t.status&&(e.emailValidateForm.email=t.data)})},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.$message({type:"error",message:"邮箱格式不对哦!"}),!1;t.loading=!0,httpPut("/updateUserEmail",{email:t.emailValidateForm.email}).then(function(e){t.loading=!1,200==e.status?t.$message({type:e.data.status,message:e.data.msg}):t.$message({type:"error",message:"开启失败!"})},function(e){t.loading=!1,t.$message({type:"error",message:"开启失败!"})})})}}},S={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"500px"}},[a("div",[a("div",{staticStyle:{"text-align":"left"}},[a("el-form",{ref:"emailValidateForm",staticStyle:{color:"#20a0ff","font-size":"14px"},attrs:{model:e.emailValidateForm,"label-position":"top"}},[a("el-form-item",{attrs:{prop:"email",label:"开启通知",rules:[{type:"email",message:"邮箱格式不对哦!"}]}},[a("el-input",{staticStyle:{width:"300px"},attrs:{type:"email","auto-complete":"off",placeholder:"请输入邮箱地址...",size:"mini"},model:{value:e.emailValidateForm.email,callback:function(t){e.$set(e.emailValidateForm,"email",t)},expression:"emailValidateForm.email"}}),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.submitForm("emailValidateForm")}}},[e._v("确定")])],1)],1)],1)])])},staticRenderFns:[]},C={mounted:function(){var e=this;m("/isAdmin").then(function(t){200==t.status&&(e.isAdmin=t.data)})},data:function(){return{activeName:"post",isAdmin:!1}},methods:{handleClick:function(e,t){}},components:{server_table:a("VU/8")(_,w,!1,function(e){a("Z5ej")},null,null).exports,email_cfg:a("VU/8")(k,S,!1,null,null,null).exports}},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{staticClass:"server_list"},[a("el-main",{staticClass:"main"},[a("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"全部服务器",name:"all"}},[a("server_table",{attrs:{showEdit:!1,showDelete:!1,activeName:e.activeName}})],1),e._v(" "),a("el-tab-pane",{attrs:{label:"邮箱配置",name:"blogcfg"}},[a("email_cfg")],1)],1)],1)],1)},staticRenderFns:[]},D=a("VU/8")(C,x,!1,function(e){a("hUOs")},null,null).exports,$={mounted:function(){this.loading=!0,this.loadChannels()},methods:{loadChannels:function(){var e=this;m("/channel/children").then(function(t){e.loading=!1,200==t.status?e.children=t.data:e.$message({type:"error",message:"数据加载失败!"})},function(t){if(e.loading=!1,403==t.response.status){var a=t.response.data;e.$message({type:"error",message:a})}})},changePass:function(e){this.visible=!("show"===e)},changePass2:function(e){this.visible2=!("show"===e)},submitEvent:function(){var e=this;this.chanelCode&&""!==this.chanelCode?this.newPassword&&this.newPassword2?this.newPassword==this.newPassword2?(p("/user/resetPwd",{targetUser:this.chanelCode,newPwd:this.newPassword}).then(function(t){if(e.loading=!1,200==t.status){var a=t.data;"success"==a.status?(e.loading=!1,e.$message({type:"success",message:"修改对方密码成功"})):e.$alert(a.msg,"失败!")}else e.$alert("登录失败2!","失败!")},function(t){e.loading=!1,e.$alert("找不到服务器","失败!")}),this.loading=!0):this.$message({type:"error",message:"前后两次密码不一致，请检查"}):this.$message({type:"error",message:"密码不能为空"}):this.$message({type:"error",message:"请选择要修改密码的代理"})}},data:function(){return{loading:!1,chanelCode:"",children:[],newPassword:"",newPassword2:"",visible:!0,visible2:!0}}},P={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{width:"600px"}},[a("el-select",{attrs:{clearable:""},model:{value:e.chanelCode,callback:function(t){e.chanelCode=t},expression:"chanelCode"}},e._l(e.children,function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})})),e._v(" "),a("el-form",[e.visible?a("el-form-item",{attrs:{label:"输入密码"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.newPassword,callback:function(t){e.newPassword=t},expression:"newPassword"}},[a("i",{staticClass:"el-icon-view",staticStyle:{cursor:"pointer"},attrs:{slot:"suffix",title:"显示密码"},on:{click:function(t){e.changePass("show")}},slot:"suffix"})])],1):a("el-form-item",{attrs:{label:"输入密码"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入密码"},model:{value:e.newPassword,callback:function(t){e.newPassword=t},expression:"newPassword"}},[a("i",{staticClass:"el-icon-circle-close-outline",staticStyle:{cursor:"pointer"},attrs:{slot:"suffix",title:"隐藏密码"},on:{click:function(t){e.changePass("hide")}},slot:"suffix"})])],1)],1),e._v(" "),a("el-form",[e.visible2?a("el-form-item",{attrs:{label:"确认密码"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.newPassword2,callback:function(t){e.newPassword2=t},expression:"newPassword2"}},[a("i",{staticClass:"el-icon-view",staticStyle:{cursor:"pointer"},attrs:{slot:"suffix",title:"显示密码"},on:{click:function(t){e.changePass2("show")}},slot:"suffix"})])],1):a("el-form-item",{attrs:{label:"确认密码"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"请输入密码"},model:{value:e.newPassword2,callback:function(t){e.newPassword2=t},expression:"newPassword2"}},[a("i",{staticClass:"el-icon-circle-close-outline",staticStyle:{cursor:"pointer"},attrs:{slot:"suffix",title:"隐藏密码"},on:{click:function(t){e.changePass2("hide")}},slot:"suffix"})])],1)],1),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitEvent()}}},[e._v("确定修改"),a("i",{staticClass:"el-icon-upload el-icon--right"})])],1)},staticRenderFns:[]},T=a("VU/8")($,P,!1,null,null,null).exports,F={mounted:function(){var e=this;this.loading=!0,m("/server/serverIds",{}).then(function(t){e.loading=!1,200==t.status&&(e.servers=t.data.ids)})},data:function(){return{checkAll:!1,checkedServers:[],servers:[],isIndeterminate:!0,btnDisabled:!1}},methods:{handleCheckAllChange:function(e){this.checkedServers=e?this.servers:[],this.isIndeterminate=!1},handleCheckedChange:function(e){var t=e.length;this.checkAll=t===this.servers.length,this.isIndeterminate=t>0&&t<this.servers.length},submitClick:function(){var e=this;this.btnDisabled=!0,p("/gameCmd/hotSwap",{selectedServers:this.checkedServers.join(";")}).then(function(t){if(e.loading=!1,e.btnDisabled=!1,200==t.status){var a=t.data;"success"==a.status?e.$alert(a.msg,"执行结果"):e.$alert(a.msg,"失败!")}else e.$alert("执行失败!","失败!")},function(t){e.loading=!1,e.$alert("找不到服务器","失败!")})}}},U={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),e._v(" "),a("div",{staticStyle:{margin:"15px 0"}}),e._v(" "),a("el-checkbox-group",{on:{change:e.handleCheckedChange},model:{value:e.checkedServers,callback:function(t){e.checkedServers=t},expression:"checkedServers"}},e._l(e.servers,function(t){return a("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small",disabled:e.btnDisabled},nativeOn:{click:function(t){t.preventDefault(),e.submitClick(t)}}},[e._v("执行")])],1)},staticRenderFns:[]},R=a("VU/8")(F,U,!1,null,null,null).exports,V={data:function(){return{tableData:[],currentPage:1,total:0,pageSize:10,selectDateFrom:"",selectDateTo:"",dialogFormVisible:!1,formLabelWidth:"120px",loading2:!1,pickerOptions0:{disabledDate:function(e){return!1}}}},mounted:function(){this.initTime()},methods:{loadData:function(){this.loading2=!0;this.currentPage,this.pageSize,this.selectDateFrom,this.selectDateTo;var e=this,t="/pay/order?page="+this.currentPage+"&pageSize="+this.pageSize+"&selectFrom="+this.selectDateFrom.getTime()+"&selectTo="+this.selectDateTo.getTime();m(t).then(function(t){e.loading=!1,200==t.status?(e.tableData=t.data.orders,e.loading2=!1,e.total=t.data.totalRecord):e.$message({type:"error",message:"数据加载失败!"})},function(t){e.loading=!1,403==t.response.status?e.$message({type:"error",message:t.response.data}):e.$message({type:"error",message:"数据加载失败!"})}).catch(function(t){e.loading=!1,e.$message({type:"error",message:"数据加载失败!"})})},onSubmit:function(){this.loadData()},handleSizeChange:function(e){this.pageSize=e},handleCurrentChange:function(e){this.currentPage=e,this.loadData()},initTime:function(){var e=new Date;e.setHours(0),e.setMinutes(0),e.setSeconds(0),this.selectDateFrom=e;var t=new Date;t.setHours(23),t.setMinutes(59),t.setSeconds(59),this.selectDateTo=t}}},z={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"users"}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",[a("el-date-picker",{attrs:{type:"datetime",placeholder:"开始日期","picker-options":e.pickerOptions0},model:{value:e.selectDateFrom,callback:function(t){e.selectDateFrom=t},expression:"selectDateFrom"}})],1),e._v(" "),a("el-form-item",[a("el-date-picker",{attrs:{type:"datetime",placeholder:"结束日期","picker-options":e.pickerOptions0},model:{value:e.selectDateTo,callback:function(t){e.selectDateTo=t},expression:"selectDateTo"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading2,expression:"loading2"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,"element-loading-text":"拼命加载中"}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"订单id",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"account",label:"充值账号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.account))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"time",label:"充值时间",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.time))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"money",label:"充值金额",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.money))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"channel",label:"归属代理",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.channel))]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,50],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]},N=a("VU/8")(V,z,!1,function(e){a("UDa0")},"data-v-b45cf36e",null).exports,I={data:function(){return{tableData:[],moneySum:0,selectDateFrom:"",selectDateTo:"",dialogFormVisible:!1,formLabelWidth:"120px",loading2:!1,pickerOptions0:{disabledDate:function(e){return!1}}}},mounted:function(){this.initTime()},methods:{loadData:function(){this.loading2=!0;this.currentPage,this.pageSize,this.selectDateFrom,this.selectDateTo;var e=this,t="/pay/statistics?selectFrom="+this.selectDateFrom.getTime()+"&selectTo="+this.selectDateTo.getTime();m(t).then(function(t){e.loading=!1,200==t.status?(e.tableData=t.data.orderGroups,e.moneySum=t.data.moneySum,e.loading2=!1):e.$message({type:"error",message:"数据加载失败!"})},function(t){e.loading=!1,403==t.response.status?e.$message({type:"error",message:t.response.data}):e.$message({type:"error",message:"数据加载失败!"})}).catch(function(t){e.loading=!1,e.$message({type:"error",message:"数据加载失败!"})})},onSubmit:function(){this.loadData()},initTime:function(){var e=new Date;e.setHours(0),e.setMinutes(0),e.setSeconds(0),this.selectDateFrom=e;var t=new Date;t.setHours(23),t.setMinutes(59),t.setSeconds(59),this.selectDateTo=t}}},A={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"users"}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",[a("el-date-picker",{attrs:{type:"datetime",placeholder:"开始日期","picker-options":e.pickerOptions0},model:{value:e.selectDateFrom,callback:function(t){e.selectDateFrom=t},expression:"selectDateFrom"}})],1),e._v(" "),a("el-form-item",[a("el-date-picker",{attrs:{type:"datetime",placeholder:"结束日期","picker-options":e.pickerOptions0},model:{value:e.selectDateTo,callback:function(t){e.selectDateTo=t},expression:"selectDateTo"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading2,expression:"loading2"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,"element-loading-text":"拼命加载中"}},[a("el-table-column",{attrs:{prop:"channelCode",label:"归属代理",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.channelCode))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"money",label:"累计金额",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.money))]}}])})],1),e._v(" "),a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"总金额:"}},[a("el-input",{staticStyle:{width:"128px"},model:{value:e.moneySum,callback:function(t){e.moneySum=t},expression:"moneySum"}})],1)],1)],1)},staticRenderFns:[]},q=a("VU/8")(I,A,!1,function(e){a("aXBB")},"data-v-5917f9c9",null).exports,E={methods:{searchServers:function(){var e=this;m("/server/serverIds").then(function(t){e.loading=!1,200==t.status?e.servers=t.data.ids:e.$message({type:"error",message:"数据加载失败!"})},function(t){e.loading=!1,403==t.response.status?e.$message({type:"error",message:t.response.data}):e.$message({type:"error",message:"数据加载失败!"})}).catch(function(t){e.loading=!1,e.$message({type:"error",message:"数据加载失败!"})})},queryPlayer:function(){var e=this,t="/gameCmd/simplyPlayer?serverId="+e.selectedServerId+"&sign="+e.querySign;m(t,{sign:e.querySign,serverId:e.selectedServerId}).then(function(t){e.loading=!1,200==t.status?e.tableData=t.data.vos:e.$message({type:"error",message:"数据加载失败!"})},function(t){e.loading=!1,403==t.response.status?e.$message({type:"error",message:t.response.data}):e.$message({type:"error",message:"数据加载失败!"})}).catch(function(t){e.loading=!1,e.$message({type:"error",message:"数据加载失败!"})})},selectServerId:function(e){this.selectedServerId=e},banPlayer:function(){var e=this;this.banDialogVisible=!0,p("/gameCmd/banPlayer",{serverId:this.selectedServerId,endTime:this.endTime.getTime(),uid:this.selectUid,banType:this.banType}).then(function(t){if(e.loading=!1,e.banDialogVisible=!1,200==t.status){"success"==t.data.status?e.queryPlayer():e.$alert("执行失败1!","失败!")}else e.$alert("执行失败2!","失败!")},function(t){e.loading=!1,e.$alert("找不到服务器","失败!")})},cancelBanPlayer:function(){var e=this;this.$confirm("是否确定解除封禁?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.doCancelBan()}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},doCancelBan:function(){var e=this;p("/gameCmd/banPlayer",{serverId:this.selectedServerId,endTime:0,uid:this.selectUid,banType:this.banType}).then(function(t){if(e.loading=!1,200==t.status){"success"==t.data.status?e.queryPlayer():e.$alert("执行失败1!","失败!")}else e.$alert("执行失败2!","失败!")},function(t){e.loading=!1,e.$alert("找不到服务器","失败!")})}},mounted:function(){this.searchServers()},data:function(){return{loading:!1,servers:[],selectedServerId:0,tableData:[],querySign:"",banDialogVisible:!1,endTime:"",banType:0,selectUid:0}}},B={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("el-select",{attrs:{placeholder:"请选择服务器",loading:e.loading},model:{value:e.selectedServerId,callback:function(t){e.selectedServerId=t},expression:"selectedServerId"}},e._l(e.servers,function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})}))],1),e._v(" "),a("div",{staticStyle:{margin:"10px 0 0 0"}},[a("el-input",{staticStyle:{width:"20%"},attrs:{type:"text",placeholder:"昵称或id"},model:{value:e.querySign,callback:function(t){e.querySign=t},expression:"querySign"}}),e._v(" "),a("el-button",{staticStyle:{width:"10%"},attrs:{type:"primary"},nativeOn:{click:function(t){t.preventDefault(),e.queryPlayer(t)}}},[e._v("查询")])],1),e._v(" "),a("div",{staticStyle:{margin:"20px 0 0 0"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"level",label:"等级",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"gold",label:"金币",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"money",label:"银币",width:"300"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.banLogin>0?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.banType=1,e.selectUid=t.row.uid,e.cancelBanPlayer()}}},[e._v("解除封号")]):e._e(),e._v(" "),t.row.banLogin<=0?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.banDialogVisible=!0,e.banType=1,e.selectUid=t.row.uid}}},[e._v("封号")]):e._e(),e._v(" "),t.row.banChat>0?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.banType=2,e.selectUid=t.row.uid,e.cancelBanPlayer()}}},[e._v("解除禁言")]):e._e(),e._v(" "),t.row.banChat<=0?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.banDialogVisible=!0,e.banType=2,e.selectUid=t.row.uid}}},[e._v("禁言")]):e._e()]}}])})],1)],1),e._v(" "),a("div",[a("el-dialog",{attrs:{title:"封禁确认",visible:e.banDialogVisible,width:"30%"},on:{"update:visible":function(t){e.banDialogVisible=t}}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,visible:!1}},[a("el-form-item",[a("el-date-picker",{attrs:{type:"datetime",placeholder:"结束日期"},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.banDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.banPlayer()}}},[e._v("确 定")])],1)],1)],1)])},staticRenderFns:[]},M=a("VU/8")(E,B,!1,null,null,null).exports,L=a("2bvH");s.default.use(L.a);var O=new L.a.Store({modules:{app:{state:{appName:"Kitty Platform",themeColor:"#14889A",oldThemeColor:"#14889A",collapse:!1,menuRouteLoaded:!1},getters:{collapse:function(e){return e.collapse}},mutations:{onCollapse:function(e){e.collapse=!e.collapse},setThemeColor:function(e,t){e.oldThemeColor=e.themeColor,e.themeColor=t},menuRouteLoaded:function(e,t){e.menuRouteLoaded=t}},actions:{}},user:{state:{perms:[]},getters:{},mutations:{setPerms:function(e,t){e.perms=t}},actions:{}},menu:{state:{navTree:[]},getters:{},mutations:{setNavTree:function(e,t){e.navTree=t}},actions:{}}}});s.default.use(l.a);var H=new l.a({routes:[{path:"/",name:"登录",hidden:!0,component:v},{path:"/home",name:"",component:y,hidden:!0},{path:"/home",component:y,name:"服务器管理",iconCls:"fa fa-file-text-o",meta:{keepAlive:!1,roles:["ADMIN"]},children:[{path:"/serverList",name:"服务器列表",component:D,meta:{keepAlive:!0}},{path:"/serverCommand",name:"代码热更",component:R,meta:{keepAlive:!1}}]},{path:"/home",component:y,name:"玩家管理",meta:{keepAlive:!1,roles:["ADMIN"]},children:[{path:"/playerList",iconCls:"fa fa-user-o",name:"玩家查询",component:M}]},{path:"/home",component:y,name:"渠道管理",children:[{path:"/channelPay",iconCls:"fa fa-user-o",name:"订单查询",component:N},{path:"/channelStatistics",iconCls:"fa fa-user-o",name:"渠道统计",component:q}]},{path:"/home",component:y,name:"用户管理",children:[{path:"/userSetting",iconCls:"fa fa-user-o",name:"修改密码",component:T}]}]});H.beforeEach(function(e,t,a){var s=d.a.get("token");"/"===e.path?a():s?(n(),a()):a({path:"/"})});var j=H,W=a("zL8q"),X=a.n(W);a("tvR6"),a("e0XP");s.default.filter("formatDate",function(e){var t=new Date(e),a=t.getFullYear(),n=t.getMonth()+1,s=t.getDate();return n<10&&(n="0"+n),s<10&&(s="0"+s),a+"-"+n+"-"+s}),s.default.filter("formatDateTime",function(e){var t=new Date(e),a=t.getFullYear(),n=t.getMonth()+1,s=t.getDate(),i=t.getHours(),o=t.getMinutes();return n<10&&(n="0"+n),s<10&&(s="0"+s),a+"-"+n+"-"+s+" "+i+":"+o}),s.default.use(X.a),s.default.config.productionTip=!1,window.bus=new s.default,new s.default({el:"#app",router:j,template:"<App/>",components:{App:o}})},UDa0:function(e,t){},Z5ej:function(e,t){},aXBB:function(e,t){},d4F1:function(e,t){},e0XP:function(e,t){},hUOs:function(e,t){},q7oC:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.93058ea54ae21244a2bd.js.map