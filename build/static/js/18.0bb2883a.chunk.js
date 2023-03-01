(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[18],{1106:function(e,t,a){"use strict";a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return p})),a.d(t,"g",(function(){return d})),a.d(t,"e",(function(){return u})),a.d(t,"h",(function(){return m})),a.d(t,"j",(function(){return h})),a.d(t,"i",(function(){return k})),a.d(t,"a",(function(){return T})),a.d(t,"f",(function(){return g})),a.d(t,"b",(function(){return f}));var n=a(80),s=a.n(n),r=a(130),o=a(42),c=a.n(o),l=a(20),i=function(e){return function(){var t=Object(r.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("api/apps/todo",{params:e}).then((function(t){a({type:"GET_TODOS",todos:t.data,routeParams:e})})).catch((function(e){return console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(t){t({type:"COMPLETE_TASK",id:e.id,value:e.isCompleted})}},d=function(e){return function(t){Promise.all([t({type:"STAR_TASK",id:e.id,value:e.isStarred})])}},u=function(e){return function(t){Promise.all([t({type:"IMPORTANT_TASK",id:e.id,value:e.isImportant})])}},m=function(e){return function(t,a){var n=a().todoApp.todo.routeParam;c.a.post("/api/app/todo/trash-todo",e).then((function(a){return t({type:"TRASH_TASK",id:e})})).then(t(i(n)))}},h=function(e,t,a){return function(n){n({type:"UPDATE_TASK",id:e,title:t,desc:a})}},k=function(e,t){return function(a,n){a({type:"UPDATE_LABEL",label:t,id:e})}},T=function(e){return function(t,a){var n=a().todoApp.todo.routeParam;c.a.post("/api/apps/todo/new-task",{task:e}).then((function(a){t({type:"ADD_TASK",task:e}),t(i(n))}))}},g=function(e){return function(t){t({type:"SEARCH_TASK",val:e})}},f=function(e){return function(t){t({type:"CHANGE_FILTER",filter:e}),l.a.push("/todo/".concat(e)),t(i({filter:e}))}}},1295:function(e,t,a){"use strict";var n=a(13),s=a(14),r=a(16),o=a(15),c=a(0),l=a.n(c),i=a(183),p=a(871),d=a(830),u=a(861),m=a(862),h=a(910),k=a(805),T=a(874),g=a(1255),f=a(1256),E=a(41),b=a.n(E),N=a(193),v=a(26),O=a(1106),S=a(20),C=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={modal:!1},e.toggleModal=function(){e.setState((function(e){return{modal:!e.modal}}))},e.handleSubmit=function(t){t.preventDefault(),e.state.campaignName.length>0?(S.a.push("/apps/editcampaigns"),e.setState({isValid:!0})):0===e.state.campaignName.length&&e.setState({isValid:!1})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,console.log("getting props",this.props.routerProps.location),l.a.createElement("span",{className:"sidebar-close-icon",onClick:function(){return e.props.mainSidebar(!1)}},l.a.createElement(N.a,{size:15})),l.a.createElement("div",{className:"todo-app-menu"},l.a.createElement(b.a,{className:"sidebar-menu-list",options:{wheelPropagation:!1}},l.a.createElement("hr",null),l.a.createElement("div",{className:"mt-2 mb-1 pt-25"},l.a.createElement(i.a,{color:"primary",className:"px-1",onClick:this.toggleModal},l.a.createElement(p.a,{isOpen:this.state.modal,toggle:this.toggleModal,className:"modal-dialog-centered"},l.a.createElement(d.a,{onSubmit:this.handleSubmit},l.a.createElement(u.a,{toggle:this.toggleModal},"Build & launch a new campaign"),l.a.createElement(m.a,null,l.a.createElement(h.a,null,l.a.createElement(k.a,{type:"text",required:!0,placeholder:"Campaign Name",onChange:function(t){return e.setState({campaignName:t.target.value})},value:this.state.campaignName,id:"campaignName",name:"campaignName",valid:!0===this.state.isValid,invalid:!1===this.state.isValid,alt:"text"}))),l.a.createElement(T.a,null,l.a.createElement(i.a,{className:"btn-sm",color:"primary",onClick:this.handleSubmit},"Next"),l.a.createElement(i.a,{className:"btn-secondary btn-sm",onClick:this.toggleModal},"Cancel")))),"Create Campaign")),l.a.createElement(g.a,{className:"font-medium-1"},l.a.createElement(f.a,{className:"border-0",onClick:function(){e.props.changeFilter("starred")},active:"/todo/starred"===this.props.routerProps.location.pathname},l.a.createElement("span",{className:"align-middle ml-1"},"Campaigns")),l.a.createElement(f.a,{className:"border-0",onClick:function(){e.props.changeFilter("completed")},active:"/todo/completed"===this.props.routerProps.location.pathname},l.a.createElement("span",{className:"align-middle ml-1"},"Statistics")),l.a.createElement(f.a,{className:"border-0",onClick:function(){e.props.changeFilter("trashed")},active:"/todo/trashed"===this.props.routerProps.location.pathname},l.a.createElement("span",{className:"align-middle ml-1"},"Help Center"))),l.a.createElement("hr",null))))}}]),a}(l.a.Component);t.a=Object(v.b)(null,{changeFilter:O.b})(C)},1296:function(e,t,a){"use strict";var n=a(80),s=a.n(n),r=a(130),o=a(13),c=a(14),l=a(16),i=a(15),p=a(0),d=a.n(p),u=a(871),m=a(861),h=a(862),k=a(910),T=a(805),g=a(874),f=a(183),E=a(810),b=a(966),N=a.n(b),v=(a(965),a(360)),O=a(410),S=a(266),C=a(41),U=a.n(C),y=a(26),w=a(20),A=a(969),x=a(1106),P=(a(863),function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={todos:[],handleUpdateTask:null,currentLocation:e.props.routerProps.location.pathname,value:"",activeTab:"1",modal:!1,campaignName:""},e.handleSubmit=function(t){t.preventDefault(),e.state.campaignName.length>0?(w.a.push("/apps/editcampaigns"),e.setState({isValid:!0})):0===e.state.campaignName.length&&e.setState({isValid:!1})},e.handleOnChange=function(t){e.setState({value:t.target.value}),e.props.searchTask(t.target.value)},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e.toggleModal=function(){e.setState((function(e){return{modal:!e.modal}}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getTodos(this.props.routerProps.match.params);case 2:this.setState({todos:this.props.app.todo.todos,handleUpdateTask:this.props.handleUpdateTask});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.todos,n=(t.handleUpdateTask,t.value),s=(this.props.routerProps.match.params.filter,n.length?this.props.app.todo.filteredTodos:a);s.length>0&&s.map((function(t,a){return d.a.createElement(u.a,{isOpen:e.state.modal,toggle:e.toggleModal,centered:!0},d.a.createElement(m.a,{toggle:e.toggleModal},"Create Position"),d.a.createElement(h.a,null,d.a.createElement(k.a,null,d.a.createElement(T.a,{type:"text",alt:"text",placeholder:"create position..."}))),d.a.createElement(g.a,null,d.a.createElement(f.a,{color:"primary"},"Create")))}));return d.a.createElement("div",{className:"content-right"},d.a.createElement("div",{className:"todo-app-area"},d.a.createElement("div",{className:"todo-app-list-wrapper"},d.a.createElement("div",{className:"todo-app-list"},d.a.createElement("div",{className:"app-fixed-search"},d.a.createElement("div",{className:"sidebar-toggle d-inline-block d-lg-none",onClick:function(){return e.props.mainSidebar(!0)}},d.a.createElement(v.a,{size:24})),d.a.createElement(E.a,{className:"position-relative has-icon-left m-0 d-inline-block d-lg-block"},d.a.createElement(T.a,{type:"text",placeholder:"Search...",onChange:function(t){return e.handleOnChange(t)},value:n}),d.a.createElement("div",{className:"form-control-position"},d.a.createElement(O.a,{size:15})))),d.a.createElement(U.a,{className:"todo-task-list",options:{wheelPropagation:!1}},d.a.createElement("div",{className:"react-dataTable"},d.a.createElement(N.a,{className:"react-dataTable",noHeader:!0,pagination:!0,selectableRows:!0,columns:A.b,paginationPerPage:7,sortIcon:d.a.createElement(S.a,{size:10}),data:A.a})))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.app.todo.routeParam!==t.currentLocation?{todos:e.app.todo.todos}:null}}]),a}(d.a.Component));t.a=Object(y.b)((function(e){return{app:e.todoApp}}),{getTodos:x.d,completeTask:x.c,starTask:x.g,importantTask:x.e,trashTask:x.h,searchTask:x.f})(P)},1297:function(e,t,a){"use strict";var n=a(2),s=a(13),r=a(14),o=a(16),c=a(15),l=a(0),i=a.n(l),p=a(792),d=a(796),u=a(793),m=a(791),h=a(810),k=a(805),T=a(183),g=a(193),f=a(265),E=a(341),b=a(430),N=a(436),v=a(807),O=a(41),S=a.n(O),C=a(26),U=a(1106),y=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={taskToUpdate:null,taskTitle:"",taskDesc:"",taskStatus:!1,taskStarred:!1,taskImportant:!1,newTask:{title:"",desc:"",tags:[],isCompleted:!1,isImportant:!1,isStarred:!1}},e.handleNewTaskTags=function(t){var a=e.state.newTask.tags;a.includes(t)?a.splice(a.indexOf(t),1):a.push(t),e.setState(Object(n.a)(Object(n.a)({},e.state.newTask),{},{tags:t}))},e.renderTags=function(e){return e.map((function(e,t){return i.a.createElement("div",{className:"chip mb-0 mr-50",key:t},i.a.createElement("div",{className:"chip-body"},i.a.createElement("span",{className:"chip-text"},i.a.createElement("span",{className:"bullet bullet-".concat("backend"===e?"warning":"doc"===e?"success":"bug"===e?"danger":"primary"," bullet-xs")}),i.a.createElement("span",{className:"text-capitalize ml-25"},e))))}))},e}return Object(r.a)(a,[{key:"componentDidUpdate",value:function(e,t){(null!==this.props.taskToUpdate&&this.state.taskToUpdate!==this.props.taskToUpdate||null!==this.props.taskToUpdate&&this.state.taskStatus!==this.props.taskToUpdate.isCompleted||null!==this.props.taskToUpdate&&this.state.taskStarred!==this.props.taskToUpdate.isStarred||null!==this.props.taskToUpdate&&this.state.taskImportant!==this.props.taskToUpdate.isImportant)&&this.setState({taskToUpdate:this.props.taskToUpdate,taskTitle:this.props.taskToUpdate.title,taskDesc:this.props.taskToUpdate.desc,taskStatus:this.props.taskToUpdate.isCompleted,taskStarred:this.props.taskToUpdate.isStarred,taskImportant:this.props.taskToUpdate.isImportant})}},{key:"render",value:function(){var e=this,t=this.state,a=t.taskToUpdate,s=t.taskTitle,r=t.taskDesc,o=t.newTask,c=t.taskStatus;return i.a.createElement("div",{className:"task-sidebar ".concat(!0===this.props.addTaskState?"show":"")},i.a.createElement("div",{className:"task-header"},i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement("div",{className:"task-type-title text-bold-600"},i.a.createElement("h3",null,this.props.taskToUpdate&&this.props.taskToUpdate.id?"Update Task":"Add Task")),i.a.createElement("div",{className:"close-icon"},i.a.createElement(g.a,{className:"cursor-pointer",size:20,onClick:function(){return e.props.addTask("close")}})))),i.a.createElement(S.a,null,i.a.createElement("div",{className:"task-body"},i.a.createElement("div",{className:"d-flex justify-content-between mb-2"},i.a.createElement("div",{className:"mark-complete"},this.props.taskToUpdate&&this.props.taskToUpdate.id&&i.a.createElement(v.a,{color:"primary",className:"user-checkbox",icon:i.a.createElement(f.a,{className:"vx-icon",size:15}),label:"",checked:c,onChange:function(t){e.props.completeTask(e.props.taskToUpdate)}})),i.a.createElement("div",{className:"task-actions"},i.a.createElement(E.a,{size:20,className:"mr-50 ".concat(null!==this.props.taskToUpdate&&this.state.taskImportant||o.isImportant?"text-success":""),onClick:function(){null!==e.props.taskToUpdate?e.props.importantTask(e.props.taskToUpdate):e.setState({newTask:Object(n.a)(Object(n.a)({},e.state.newTask),{},{isImportant:!e.state.newTask.isImportant})})}}),i.a.createElement(b.a,{size:20,className:"mr-50 ".concat(null!==this.props.taskToUpdate&&this.state.taskStarred||o.isStarred?"text-warning":""),onClick:function(){null!==e.props.taskToUpdate?e.props.starTask(e.props.taskToUpdate):e.setState({newTask:Object(n.a)(Object(n.a)({},e.state.newTask),{},{isStarred:!e.state.newTask.isStarred})})}}),i.a.createElement(p.a,{className:"d-inline-block"},i.a.createElement(d.a,{tag:"span"},i.a.createElement(N.a,{className:"mr-50",size:20})),i.a.createElement(u.a,{tag:"ul",right:!0},i.a.createElement(m.a,{tag:"li"},i.a.createElement(v.a,{color:"primary",className:"user-checkbox",icon:i.a.createElement(f.a,{className:"vx-icon",size:12}),label:"Frontend",checked:!!(null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags.includes("frontend")||o.tags.includes("frontend")),size:"sm",onChange:function(t){t.stopPropagation(),null!==e.props.taskToUpdate?e.props.updateLabel(a.id,"frontend"):e.handleNewTaskTags("frontend")}})),i.a.createElement(m.a,{tag:"li"},i.a.createElement(v.a,{color:"primary",className:"user-checkbox",icon:i.a.createElement(f.a,{className:"vx-icon",size:12}),label:"Backend",checked:!!(null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags.includes("backend")||o.tags.includes("backend")),size:"sm",onClick:function(e){return e.stopPropagation()},onChange:function(t){t.stopPropagation(),null!==e.props.taskToUpdate?e.props.updateLabel(a.id,"backend"):e.handleNewTaskTags("backend")}})),i.a.createElement(m.a,{tag:"li"},i.a.createElement(v.a,{color:"primary",className:"user-checkbox",icon:i.a.createElement(f.a,{className:"vx-icon",size:12}),label:"Doc",checked:!!(null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags.includes("doc")||o.tags.includes("doc")),size:"sm",onClick:function(e){return e.stopPropagation()},onChange:function(t){t.stopPropagation(),null!==e.props.taskToUpdate?e.props.updateLabel(a.id,"doc"):e.handleNewTaskTags("doc")}})),i.a.createElement(m.a,{tag:"li"},i.a.createElement(v.a,{color:"primary",className:"user-checkbox",icon:i.a.createElement(f.a,{className:"vx-icon",size:12}),label:"Bug",checked:!!(null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags.includes("bug")||o.tags.includes("bug")),size:"sm",onClick:function(e){return e.stopPropagation()},onChange:function(t){t.stopPropagation(),null!==e.props.taskToUpdate?e.props.updateLabel(a.id,"bug"):e.handleNewTaskTags("bug")}})))))),i.a.createElement(h.a,null,i.a.createElement(k.a,{type:"text",placeholder:"Title",value:null!==this.props.taskToUpdate?s:o.title,onChange:function(t){null!==e.props.taskToUpdate?e.setState({taskTitle:t.target.value}):e.setState({newTask:Object(n.a)(Object(n.a)({},e.state.newTask),{},{title:t.target.value})})}})),i.a.createElement(h.a,null,i.a.createElement(k.a,{type:"textarea",placeholder:"Description",rows:"5",value:null!==this.props.taskToUpdate?r:o.desc,onChange:function(t){null!==e.props.taskToUpdate?e.setState({taskDesc:t.target.value}):e.setState({newTask:Object(n.a)(Object(n.a)({},e.state.newTask),{},{desc:t.target.value})})}})),i.a.createElement("div",{className:"chip-wrapper my-1 d-flex flex-wrap"},null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags&&this.props.taskToUpdate.tags.length>0?this.renderTags(this.props.taskToUpdate.tags):null),i.a.createElement("hr",{className:"my-2"}),i.a.createElement("div",{className:"d-flex justify-content-end"},i.a.createElement(T.a.Ripple,{className:"mr-50",color:"primary",onClick:function(){null!==e.props.taskToUpdate?e.props.updateTask(a.id,s,r):e.props.addNewTask(e.state.newTask),e.props.addTask("close"),e.setState({newTask:{title:"",desc:"",tags:[],isCompleted:!1,isImportant:!1,isStarred:!1}})},disabled:!(s.length>0||o.title.length>0)},a&&a.id&&null!==this.props.taskToUpdate?"Update":"Add"),i.a.createElement(T.a.Ripple,{color:"light",outline:!0,onClick:function(){e.props.addTask("close"),e.setState({newTask:{title:"",desc:"",tags:[],isCompleted:!1,isImportant:!1,isStarred:!1}})}},"Cancel")))))}}]),a}(i.a.Component);t.a=Object(C.b)((function(e){return{app:e.todoApp}}),{completeTask:U.c,importantTask:U.e,starTask:U.g,updateTask:U.j,updateLabel:U.i,addNewTask:U.a})(y)},1298:function(e,t,a){},807:function(e,t,a){"use strict";var n=a(13),s=a(14),r=a(16),o=a(15),c=a(0),l=a.n(c),i=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},l.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),l.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},l.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),l.a.createElement("span",null,this.props.label))}}]),a}(l.a.Component);t.a=i},863:function(e,t,a){},969:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return m}));var n=a(0),s=a.n(n),r=a(373),o=(a(317),a(232),a(445)),c=a(383),l=(a(183),a(792)),i=a(796),p=a(793),d=a(791),u=[{name:"CAMPAIGN NAME",sortable:!0,selector:function(e){return e.rolename}},{name:"STATUS",sortable:!0,selector:function(e){return e.Status}},{name:"POSITION",sortable:!0,center:!0,selector:function(e){return e.POSITION}},{name:"PHONE",sortable:!0,center:!0,selector:function(e){return e.PHONE}},{name:"ONBOARD",sortable:!0,center:!0,selector:function(e){return e.ONBOARD}},{name:"RATING",sortable:!0,center:!0,selector:function(e){return e.RATING}},{name:"NOTE",sortable:!0,center:!0,selector:function(e){return e.NOTE}},{name:"TAG",sortable:!0,center:!0,selector:function(e){return e.TAG}},{name:"ACTION",sortable:!0,selector:function(e){return e},cell:function(){return s.a.createElement("div",{className:"d-flex"},s.a.createElement(l.a,null,s.a.createElement(i.a,{className:"pe-",tag:"span"},s.a.createElement(r.a,{size:15})),s.a.createElement(p.a,{end:!0},s.a.createElement(d.a,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()}},s.a.createElement(c.a,{size:15}),"Edit"),s.a.createElement(d.a,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()}},s.a.createElement(o.a,{size:15}),s.a.createElement("span",{className:"align-middle ms-50"},"Delete")))))}}],m=[{id:1,rolename:"Sveltose",Status:"Active",POSITION:"owner",PHONE:"+1123456789",ONBOARD:"82%",RATING:"2",NOTE:"icon",TAG:"-"},{id:2,rolename:"Sveltose",Status:"Active",POSITION:"owner",PHONE:"+1123456789",ONBOARD:"82%",RATING:"2",NOTE:"icon",TAG:"-"},{id:3,rolename:"Sveltose",Status:"Active",POSITION:"owner",PHONE:"+1123456789",ONBOARD:"82%",RATING:"2",NOTE:"icon",TAG:"-"},{id:4,rolename:"Sveltose",Status:"Active",POSITION:"owner",PHONE:"+1123456789",ONBOARD:"82%",RATING:"2",NOTE:"icon",TAG:"-"}]}}]);
//# sourceMappingURL=18.0bb2883a.chunk.js.map