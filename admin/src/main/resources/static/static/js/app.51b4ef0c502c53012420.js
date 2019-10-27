webpackJsonp([1],{H4Aq:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{"background-color":"rgba(235, 235, 235, 0.08)"},attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]},i=a("VU/8")({name:"app"},s,!1,function(e){a("d4F1")},null,null).exports,o=a("/ocq"),r=a("mtWM"),l=a.n(r),c=a("sqb0"),d=a.n(c),u=function(e,t){return l()({method:"get",data:t,transformRequest:[function(e){var t="";for(var a in e)t+=encodeURIComponent(a)+"="+encodeURIComponent(e[a])+"&";return t}],headers:{"Content-Type":"application/x-www-form-urlencoded",token:d.a.get("token")},url:""+e})},m=function(e,t){return l()({method:"put",url:""+e,data:t,transformRequest:[function(e){var t="";for(var a in e)t+=encodeURIComponent(a)+"="+encodeURIComponent(e[a])+"&";return t}],headers:{"Content-Type":"application/x-www-form-urlencoded"}})},p={data:function(){return{rules:{account:[{required:!0,message:"请输入用户名",trigger:"blur"}],checkPass:[{required:!0,message:"请输入密码",trigger:"blur"}]},checked:!0,loginForm:{userName:"",password:""},loading:!1}},methods:{submitClick:function(){var e=this;this.loading=!0,function(e,t){return l()({method:"post",url:""+e,data:t,transformRequest:[function(e){var t="";for(var a in e)t+=encodeURIComponent(a)+"="+encodeURIComponent(e[a])+"&";return t}],headers:{"Content-Type":"application/x-www-form-urlencoded"}})}("/login",{userName:this.loginForm.userName,password:this.loginForm.password}).then(function(t){if(e.loading=!1,200==t.status){var a=t.data;"success"==a.status?(d.a.set("token",a.msg),e.$router.replace({path:"/home"})):e.$alert("登录失败1!","失败!")}else e.$alert("登录失败2!","失败!")},function(t){e.loading=!1,e.$alert("找不到服务器","失败!")})}}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"login-container",attrs:{rules:e.rules,"label-position":"left","label-width":"0px"}},[a("h3",{staticClass:"login_title"},[e._v("系统登录")]),e._v(" "),a("el-form-item",{attrs:{prop:"account"}},[a("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:e.loginForm.userName,callback:function(t){e.$set(e.loginForm,"userName",t)},expression:"loginForm.userName"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"checkPass"}},[a("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),e._v(" "),a("el-checkbox",{staticClass:"login_remember",attrs:{"label-position":"left"},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("记住密码")]),e._v(" "),a("el-form-item",{staticStyle:{width:"100%"}},[a("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},nativeOn:{click:function(t){t.preventDefault(),e.submitClick(t)}}},[e._v("登录")])],1)],1)},staticRenderFns:[]},h=a("VU/8")(p,f,!1,function(e){a("H4Aq")},null,null).exports,g={methods:{handleCommand:function(e){var t=this;"logout"==e&&this.$confirm("注销登录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){u("/logout"),t.currentUserName="游客",t.$router.replace({path:"/"})},function(){})}},mounted:function(){var e=this;u("/currentUserName").then(function(t){e.currentUserName=t.data},function(t){e.currentUserName="游客"})},data:function(){return{currentUserName:""}}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{staticClass:"home_container"},[a("el-header",[a("div",{staticClass:"home_title"},[e._v("后台管理平台")]),e._v(" "),a("div",{staticClass:"home_userinfoContainer"},[a("el-dropdown",{on:{command:e.handleCommand}},[a("span",{staticClass:"el-dropdown-link home_userinfo"},[e._v("\n  "+e._s(e.currentUserName)),a("i",{staticClass:"el-icon-arrow-down el-icon--right home_userinfo"})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"sysMsg"}},[e._v("系统消息")]),e._v(" "),a("el-dropdown-item",{attrs:{command:"MyArticle"}},[e._v("我的文章")]),e._v(" "),a("el-dropdown-item",{attrs:{command:"MyHome"}},[e._v("个人主页")]),e._v(" "),a("el-dropdown-item",{attrs:{command:"logout",divided:""}},[e._v("退出登录")])],1)],1)],1)]),e._v(" "),a("el-container",[a("el-aside",{attrs:{width:"200px"}},[a("el-menu",{staticClass:"el-menu-vertical-demo",staticStyle:{"background-color":"#ECECEC"},attrs:{"default-active":"0",router:""}},[e._l(this.$router.options.routes,function(t,n){return t.hidden?e._e():[t.children.length>1?a("el-submenu",{key:n,attrs:{index:n+""}},[a("template",{slot:"title"},[a("i",{class:t.iconCls}),e._v(" "),a("span",[e._v(e._s(t.name))])]),e._v(" "),e._l(t.children,function(t){return t.hidden?e._e():a("el-menu-item",{key:t.path,attrs:{index:t.path}},[e._v("\n              "+e._s(t.name)+"\n            ")])})],2):[a("el-menu-item",{attrs:{index:t.children[0].path}},[a("i",{class:t.children[0].iconCls}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.children[0].name))])])]]})],2)],1),e._v(" "),a("el-container",[a("el-main",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",{domProps:{textContent:e._s(this.$router.currentRoute.name)}})],1),e._v(" "),a("keep-alive",[this.$route.meta.keepAlive?a("router-view"):e._e()],1),e._v(" "),this.$route.meta.keepAlive?e._e():a("router-view")],1)],1)],1)],1)},staticRenderFns:[]},_=a("VU/8")(g,v,!1,function(e){a("dXyb")},null,null).exports,y={data:function(){return{servers:[],selItems:[],loading:!1,currentPage:1,totalCount:-1,pageSize:6,keywords:"",dustbinData:[]}},mounted:function(){var e=this;this.loading=!0,this.loadRecords(1,this.pageSize);e=this;window.bus.$on("tableReload",function(){e.loading=!0,e.loadRecords(e.currentPage,e.pageSize)})},methods:{searchClick:function(){this.loadRecords(1,this.pageSize)},itemClick:function(e){},deleteMany:function(){this.selItems},currentChange:function(e){this.currentPage=e,this.loading=!0,this.loadRecords(e,this.pageSize)},loadRecords:function(e,t){var a=this;u("/server/all?page="+e+"&count="+t).then(function(e){a.loading=!1,200==e.status?(a.servers=e.data.servers,console.info("_this.servers=="+a.servers),a.totalCount=e.data.totalCount):a.$message({type:"error",message:"数据加载失败!"})},function(e){a.loading=!1,403==e.response.status?a.$message({type:"error",message:e.response.data}):a.$message({type:"error",message:"数据加载失败!"})}).catch(function(e){a.loading=!1,a.$message({type:"error",message:"数据加载失败!"})})},handleSelectionChange:function(e){this.selItems=e},handleEdit:function(e,t){this.$router.push({path:"/editRecord",query:{from:this.activeName,id:t.id}})},handleDelete:function(e,t){this.dustbinData.push(t.id),this.deleteRecord(t.state)},deleteRecord:function(e){var t=this;this.$confirm(2!=e?"永久删除该记录，是否继续?":"永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.loading=!0}).catch(function(){t.$message({type:"info",message:"已取消删除"}),t.dustbinData=[]})}},props:["state","showEdit","showDelete","activeName"]},b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticStyle:{display:"flex","justify-content":"flex-start"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"通过服务器id搜索...","prefix-icon":"el-icon-search",size:"mini"},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}}),e._v(" "),a("el-button",{staticStyle:{"margin-left":"3px"},attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.searchClick}},[e._v("搜索\n    ")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%","overflow-x":"hidden","overflow-y":"hidden"},attrs:{data:e.servers,"tooltip-effect":"dark","max-height":"390"},on:{"selection-change":e.handleSelectionChange}},[e.showEdit||e.showDelete?a("el-table-column",{attrs:{type:"selection",width:"35",align:"left"}}):e._e(),e._v(" "),a("el-table-column",{attrs:{label:"服务器名称",width:"200",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{color:"#409eff",cursor:"pointer"},on:{click:function(a){e.itemClick(t.row)}}},[e._v(e._s(t.row.title))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"服务器ip",width:"140",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.ip))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"onlinePlayerSum",label:"在线人数",width:"120",align:"left"}}),e._v(" "),a("el-table-column",{attrs:{prop:"cachePlayerSum",label:"缓存人数",width:"120",align:"left"}}),e._v(" "),e.showEdit||e.showDelete?a("el-table-column",{attrs:{label:"操作",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.showEdit?a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("编辑\n        ")]):e._e(),e._v(" "),e.showDelete?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除\n        ")]):e._e()]}}])}):e._e()],1),e._v(" "),a("div",{staticClass:"server_table_footer"})],1)},staticRenderFns:[]},w={data:function(){return{emailValidateForm:{email:""},loading:!1}},mounted:function(){var e=this;u("/currentUserEmail").then(function(t){200==t.status&&(e.emailValidateForm.email=t.data)})},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.$message({type:"error",message:"邮箱格式不对哦!"}),!1;t.loading=!0,httpPut("/updateUserEmail",{email:t.emailValidateForm.email}).then(function(e){t.loading=!1,200==e.status?t.$message({type:e.data.status,message:e.data.msg}):t.$message({type:"error",message:"开启失败!"})},function(e){t.loading=!1,t.$message({type:"error",message:"开启失败!"})})})}}},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"500px"}},[a("div",[a("div",{staticStyle:{"text-align":"left"}},[a("el-form",{ref:"emailValidateForm",staticStyle:{color:"#20a0ff","font-size":"14px"},attrs:{model:e.emailValidateForm,"label-position":"top"}},[a("el-form-item",{attrs:{prop:"email",label:"开启通知",rules:[{type:"email",message:"邮箱格式不对哦!"}]}},[a("el-input",{staticStyle:{width:"300px"},attrs:{type:"email","auto-complete":"off",placeholder:"请输入邮箱地址...",size:"mini"},model:{value:e.emailValidateForm.email,callback:function(t){e.$set(e.emailValidateForm,"email",t)},expression:"emailValidateForm.email"}}),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.submitForm("emailValidateForm")}}},[e._v("确定")])],1)],1)],1)])])},staticRenderFns:[]},k={mounted:function(){var e=this;u("/isAdmin").then(function(t){200==t.status&&(e.isAdmin=t.data)})},data:function(){return{activeName:"post",isAdmin:!1}},methods:{handleClick:function(e,t){}},components:{server_table:a("VU/8")(y,b,!1,function(e){a("j7QC")},null,null).exports,email_cfg:a("VU/8")(w,x,!1,null,null,null).exports}},S={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{staticClass:"server_list"},[a("el-main",{staticClass:"main"},[a("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"全部服务器",name:"all"}},[a("server_table",{attrs:{showEdit:!1,showDelete:!1,activeName:e.activeName}})],1),e._v(" "),a("el-tab-pane",{attrs:{label:"邮箱配置",name:"blogcfg"}},[a("email_cfg")],1)],1)],1)],1)},staticRenderFns:[]},C=a("VU/8")(k,S,!1,function(e){a("hUOs")},null,null).exports,D={mounted:function(){this.loading=!0,this.loadUserList(),this.cardloading=Array.apply(null,Array(20)).map(function(e,t){return!1}),this.eploading=Array.apply(null,Array(20)).map(function(e,t){return!1})},methods:{saveRoles:function(e,t){var a=this.roles;if(this.cpRoles.length==a.length){for(var n=0;n<this.cpRoles.length;n++)for(var s=0;s<a.length;s++)if(this.cpRoles[n].id==a[s]){a.splice(s,1);break}if(0==a.length)return}var i=this;i.cardloading.splice(t,1,!0),m("/admin/user/role",{rids:this.roles,id:e}).then(function(a){200==a.status&&"success"==a.data.status?(i.$message({type:a.data.status,message:a.data.msg}),i.loadOneUserById(e,t)):(i.cardloading.splice(t,1,!1),i.$message({type:"error",message:"更新失败!"}))},function(e){if(i.cardloading.splice(t,1,!1),403==e.response.status){var a=e.response.data;i.$message({type:"error",message:a})}})},showRole:function(e,t,a){this.cpRoles=e,this.roles=[],this.loadRoles(a);for(var n=0;n<e.length;n++)this.roles.push(e[n].id)},deleteUser:function(e){var t=this;this.$confirm("删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.loading=!0,function(e){return l()({method:"delete",url:""+e})}("/admin/user/"+e).then(function(e){if(200==e.status&&"success"==e.data.status)return t.$message({type:"success",message:"删除成功!"}),void t.loadUserList();t.loading=!1,t.$message({type:"error",message:"删除失败!"})},function(e){t.loading=!1,t.$message({type:"error",message:"删除失败!"})})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},enabledChange:function(e,t,a){var n=this;n.cardloading.splice(a,1,!0),m("/admin/user/enabled",{enabled:e,uid:t}).then(function(e){if(200!=e.status)return n.$message({type:"error",message:"更新失败!"}),void n.loadOneUserById(t,a);n.cardloading.splice(a,1,!1),n.$message({type:"success",message:"更新成功!"})},function(e){n.$message({type:"error",message:"更新失败!"}),n.loadOneUserById(t,a)})},loadRoles:function(e){var t=this;t.eploading.splice(e,1,!0),u("/admin/roles").then(function(a){t.eploading.splice(e,1,!1),200==a.status?t.allRoles=a.data:t.$message({type:"error",message:"数据加载失败!"})},function(a){if(t.eploading.splice(e,1,!1),403==a.response.status){var n=a.response.data;t.$message({type:"error",message:n})}})},loadOneUserById:function(e,t){var a=this;u("/admin/user/"+e).then(function(e){a.cardloading.splice(t,1,!1),200==e.status?a.users.splice(t,1,e.data):a.$message({type:"error",message:"数据加载失败!"})},function(e){if(a.cardloading.splice(t,1,!1),403==e.response.status){var n=e.response.data;a.$message({type:"error",message:n})}})},loadUserList:function(){var e=this;u("/admin/user?nickname="+this.keywords).then(function(t){e.loading=!1,200==t.status?e.users=t.data:e.$message({type:"error",message:"数据加载失败!"})},function(t){if(e.loading=!1,403==t.response.status){var a=t.response.data;e.$message({type:"error",message:a})}})},searchClick:function(){this.loading=!0,this.loadUserList()}},data:function(){return{loading:!1,eploading:[],cardloading:[],keywords:"",users:[],allRoles:[],roles:[],cpRoles:[]}}},$={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[a("div",{staticStyle:{"margin-top":"10px",display:"flex","justify-content":"center"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"搜索用户...","prefix-icon":"el-icon-search",size:"small"},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}}),e._v(" "),a("el-button",{staticStyle:{"margin-left":"3px"},attrs:{type:"primary",icon:"el-icon-search",size:"small"},on:{click:e.searchClick}},[e._v("搜索\n    ")])],1),e._v(" "),a("div",{staticStyle:{display:"flex","justify-content":"space-around","flex-wrap":"wrap"}},e._l(e.users,function(t,n){return a("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.cardloading[n],expression:"cardloading[index]"}],key:n,staticStyle:{width:"330px","margin-top":"10px"}},[a("div",{staticStyle:{"text-align":"left"},attrs:{slot:"header"},slot:"header"},[a("span",[e._v(e._s(t.nickname))]),e._v(" "),a("el-button",{staticStyle:{float:"right",padding:"3px 0",color:"#ff0509"},attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){e.deleteUser(t.id)}}},[e._v("删除\n        ")])],1),e._v(" "),a("div",[a("div",[a("img",{staticStyle:{width:"70px",height:"70px"},attrs:{src:t.userface,alt:t.nickname}})]),e._v(" "),a("div",{staticStyle:{"text-align":"left",color:"#20a0ff","font-size":"12px","margin-top":"13px"}},[a("span",[e._v("用户名:")]),a("span",[e._v(e._s(t.username))])]),e._v(" "),a("div",{staticStyle:{"text-align":"left",color:"#20a0ff","font-size":"12px","margin-top":"13px"}},[a("span",[e._v("电子邮箱:")]),a("span",[e._v(e._s(t.email))])]),e._v(" "),a("div",{staticStyle:{"text-align":"left",color:"#20a0ff","font-size":"12px","margin-top":"13px"}},[a("span",[e._v("注册时间:")]),a("span",[e._v(e._s(e._f("formatDateTime")(t.regTime)))])]),e._v(" "),a("div",{staticStyle:{"text-align":"left",color:"#20a0ff","font-size":"12px","margin-top":"13px",display:"flex","align-items":"center"}},[a("span",[e._v("用户状态:")]),e._v(" "),a("el-switch",{staticStyle:{"font-size":"12px"},attrs:{"active-text":"启用","active-color":"#13ce66","inactive-text":"禁用"},on:{change:function(a){e.enabledChange(t.enabled,t.id,n)}},model:{value:t.enabled,callback:function(a){e.$set(t,"enabled",a)},expression:"user.enabled"}})],1),e._v(" "),a("div",{staticStyle:{"text-align":"left",color:"#20a0ff","font-size":"12px","margin-top":"13px"}},[a("span",[e._v("用户角色:")]),e._v(" "),e._l(t.roles,function(t){return a("el-tag",{key:t.id,staticStyle:{"margin-right":"8px"},attrs:{size:"mini",type:"success"}},[e._v("\n            "+e._s(t.name)+"\n          ")])}),e._v(" "),a("el-popover",{directives:[{name:"loading",rawName:"v-loading",value:e.eploading[n],expression:"eploading[index]"}],key:n+""+t.id,attrs:{placement:"right",title:"角色列表",width:"200",trigger:"click"},on:{hide:function(a){e.saveRoles(t.id,n)}}},[a("el-select",{key:t.id,attrs:{multiple:"",placeholder:"请选择",size:"mini"},model:{value:e.roles,callback:function(t){e.roles=t},expression:"roles"}},e._l(e.allRoles,function(e,n){return a("el-option",{key:t.id+"-"+e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),a("el-button",{staticStyle:{"padding-top":"0px"},attrs:{slot:"reference",type:"text",icon:"el-icon-more"},on:{click:function(a){e.showRole(t.roles,t.id,n)}},slot:"reference"})],1)],2)])])}))])},staticRenderFns:[]},F=a("VU/8")(D,$,!1,null,null,null).exports,R={data:function(){return{server:{},servers:[],loading:!1,userInfo:"",memory:"",selected:0}},mounted:function(){var e=this;this.loading=!0,u("/server/serverIds",{}).then(function(t){e.loading=!1,200==t.status&&(e.servers=t.data.ids)})},methods:{searchClick:function(e){var t=this;u("/server/monitor",{}).then(function(e){if(t.loading=!1,200==e.status){var a=e.data;t.userInfo=a.userInfo,t.memory=a.memory}else t.$alert("失败2!","失败!")},function(e){t.loading=!1,t.$alert("找不到服务器","失败!")})}}},T={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("el-select",{attrs:{placeholder:"请选择服务器",loading:e.loading},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},e._l(e.servers,function(t){return a("el-option",{key:t,attrs:{label:t,value:t},nativeOn:{click:function(t){e.searchClick(e.id)}}})}))],1),e._v(" "),a("div",[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"在线人数:"}},[a("el-input",{model:{value:e.userInfo,callback:function(t){e.userInfo=t},expression:"userInfo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"内存信息:"}},[a("el-input",{model:{value:e.memory,callback:function(t){e.memory=t},expression:"memory"}})],1)],1)],1)])},staticRenderFns:[]},U=a("VU/8")(R,T,!1,null,null,null).exports,z={data:function(){return{tableData:[],currentPage:1,total:0,pageSize:10,selectDateFrom:"",selectDateTo:"",dialogFormVisible:!1,formLabelWidth:"120px",loading2:!1,pickerOptions0:{disabledDate:function(e){return!1}}}},mounted:function(){this.initTime()},methods:{loadData:function(){this.loading2=!0;this.currentPage,this.pageSize,this.selectDateFrom,this.selectDateTo;var e=this,t="/channel/order?page="+this.currentPage+"&pageSize="+this.pageSize+"&selectFrom="+this.selectDateFrom.getTime()+"&selectTo="+this.selectDateTo.getTime();u(t).then(function(t){e.loading=!1,200==t.status?(e.tableData=t.data.orders,e.loading2=!1,e.total=t.data.totalRecord):e.$message({type:"error",message:"数据加载失败!"})},function(t){e.loading=!1,403==t.response.status?e.$message({type:"error",message:t.response.data}):e.$message({type:"error",message:"数据加载失败!"})}).catch(function(t){e.loading=!1,e.$message({type:"error",message:"数据加载失败!"})})},onSubmit:function(){this.loadData()},handleSizeChange:function(e){this.pageSize=e},handleCurrentChange:function(e){this.currentPage=e,this.loadData()},initTime:function(){var e=new Date;e.setDate(e.getDate()),e.setHours(0),e.setMinutes(0),e.setSeconds(0),this.selectDateFrom=e,this.selectDateTo=new Date}}},N={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"users"}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",[a("el-date-picker",{attrs:{type:"datetime",placeholder:"开始日期","picker-options":e.pickerOptions0},model:{value:e.selectDateFrom,callback:function(t){e.selectDateFrom=t},expression:"selectDateFrom"}})],1),e._v(" "),a("el-form-item",[a("el-date-picker",{attrs:{type:"datetime",placeholder:"结束日期","picker-options":e.pickerOptions0},model:{value:e.selectDateTo,callback:function(t){e.selectDateTo=t},expression:"selectDateTo"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading2,expression:"loading2"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,"element-loading-text":"拼命加载中"}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"订单id",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"account",label:"充值账号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.account))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"time",label:"充值时间",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.time))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"money",label:"充值金额",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.money))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"channel",label:"归属代理",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.channel))]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,50],"page-size":e.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]},E=a("VU/8")(z,N,!1,function(e){a("TQld")},"data-v-60bff8e8",null).exports,I={data:function(){return{tableData:[],moneySum:0,selectDateFrom:"",selectDateTo:"",dialogFormVisible:!1,formLabelWidth:"120px",loading2:!1,pickerOptions0:{disabledDate:function(e){return!1}}}},mounted:function(){this.initTime()},methods:{loadData:function(){this.loading2=!0;this.currentPage,this.pageSize,this.selectDateFrom,this.selectDateTo;var e=this,t="/channel/statistics?selectFrom="+this.selectDateFrom.getTime()+"&selectTo="+this.selectDateTo.getTime();u(t).then(function(t){e.loading=!1,200==t.status?(e.tableData=t.data.orderGroups,e.moneySum=t.data.moneySum,e.loading2=!1):e.$message({type:"error",message:"数据加载失败!"})},function(t){e.loading=!1,403==t.response.status?e.$message({type:"error",message:t.response.data}):e.$message({type:"error",message:"数据加载失败!"})}).catch(function(t){e.loading=!1,e.$message({type:"error",message:"数据加载失败!"})})},onSubmit:function(){this.loadData()},initTime:function(){var e=new Date;e.setDate(e.getDate()),e.setHours(0),e.setMinutes(0),e.setSeconds(0),this.selectDateFrom=e,this.selectDateTo=new Date}}},V={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"users"}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",[a("el-date-picker",{attrs:{type:"datetime",placeholder:"开始日期","picker-options":e.pickerOptions0},model:{value:e.selectDateFrom,callback:function(t){e.selectDateFrom=t},expression:"selectDateFrom"}})],1),e._v(" "),a("el-form-item",[a("el-date-picker",{attrs:{type:"datetime",placeholder:"结束日期","picker-options":e.pickerOptions0},model:{value:e.selectDateTo,callback:function(t){e.selectDateTo=t},expression:"selectDateTo"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading2,expression:"loading2"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,"element-loading-text":"拼命加载中"}},[a("el-table-column",{attrs:{prop:"channelCode",label:"归属代理",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.channelCode))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"money",label:"累计金额",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.money))]}}])})],1),e._v(" "),a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"总金额:"}},[a("el-input",{staticStyle:{width:"128px"},model:{value:e.moneySum,callback:function(t){e.moneySum=t},expression:"moneySum"}})],1)],1)],1)},staticRenderFns:[]},P=a("VU/8")(I,V,!1,function(e){a("OMUI")},"data-v-76423070",null).exports;n.default.use(o.a);var O=new o.a({routes:[{path:"/",name:"登录",hidden:!0,component:h},{path:"/home",name:"",component:_,hidden:!0},{path:"/home",component:_,name:"服务器管理",iconCls:"fa fa-file-text-o",children:[{path:"/serverList",name:"服务器列表",component:C,meta:{keepAlive:!0}},{path:"/serverMonitor",name:"服务监控",component:U,meta:{keepAlive:!1}}]},{path:"/home",component:_,name:"渠道管理",children:[{path:"/channelPay",iconCls:"fa fa-user-o",name:"订单查询",component:E},{path:"/channelStatistics",iconCls:"fa fa-user-o",name:"渠道统计",component:P}]},{path:"/home",component:_,name:"用户管理",children:[{path:"/user",iconCls:"fa fa-user-o",name:"用户管理",component:F}]}]}),A=a("zL8q"),M=a.n(A);a("tvR6"),a("e0XP");n.default.filter("formatDate",function(e){var t=new Date(e),a=t.getFullYear(),n=t.getMonth()+1,s=t.getDate();return n<10&&(n="0"+n),s<10&&(s="0"+s),a+"-"+n+"-"+s}),n.default.filter("formatDateTime",function(e){var t=new Date(e),a=t.getFullYear(),n=t.getMonth()+1,s=t.getDate(),i=t.getHours(),o=t.getMinutes();return n<10&&(n="0"+n),s<10&&(s="0"+s),a+"-"+n+"-"+s+" "+i+":"+o}),n.default.use(M.a),n.default.config.productionTip=!1,window.bus=new n.default,new n.default({el:"#app",router:O,template:"<App/>",components:{App:i}})},OMUI:function(e,t){},TQld:function(e,t){},d4F1:function(e,t){},dXyb:function(e,t){},e0XP:function(e,t){},hUOs:function(e,t){},j7QC:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.51b4ef0c502c53012420.js.map