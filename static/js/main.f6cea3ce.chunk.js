(this.webpackJsonpflowapp=this.webpackJsonpflowapp||[]).push([[0],{41:function(e,t,a){e.exports=a(58)},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),o=a.n(r),c=(a(46),a(6)),s=a(7),i=a(9),d=a(8),u=a(25),m=a(3),p=(a(47),a(19)),f=a(72),h=a(29),v=a.n(h),k=(a(48),function(e){return l.a.createElement("div",{className:"button-layout"},e.children)}),E=(a(49),a(50),a(34)),b=a.n(E),w=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=null;return this.props.nodes&&(e=this.props.nodes.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("span",null,e.title),l.a.createElement(b.a,{className:"float-right"}))}))),l.a.createElement("div",{className:"wflow-container box-layout"},l.a.createElement("div",null,l.a.createElement("div",{className:"title"},l.a.createElement("input",{readOnly:!0,value:this.props.name})),l.a.createElement("div",{className:"nodes-list"},l.a.createElement("ul",null,e))))}}]),a}(n.Component),g=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=null;return this.props.workflows&&(e=this.props.workflows.map((function(e){return l.a.createElement(w,{key:e.id,name:e.name,isCompleted:e.isCompleted,nodes:e.nodes})}))),l.a.createElement("div",null,l.a.createElement("div",{className:"workflows-container"},e))}}]),a}(n.Component),C=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).workflowsList=[{id:"1",name:"Workflow 1",isCompleted:!0,nodes:[{id:"1-node1",title:"Task 1",status:"completed",content:"This task is completed"},{id:"1-node2",title:"Task 2",status:"in-progress",content:"This task is inprogress"},{id:"1-node3",title:"Task 2",status:"pending",content:"This task is pending"}]},{id:"2",name:"Workflow 2",isCompleted:!1,nodes:[{id:"2-node1",title:"Task 1",status:"pending",content:"Tasks are pending"},{id:"1-node2",title:"Task 2",status:"in-progress",content:"This task is inprogress"}]},{id:"3",name:"Workflow 3",isCompleted:!1,nodes:[{id:"3-node1",title:"Task 1",status:"pending",content:"Tasks are pending"}]}],e.state={workflows:e.workflowsList},e}return Object(s.a)(a,[{key:"createWorkflowClickHandler",value:function(){console.log("Button Clicked!")}},{key:"searchInputChangeHandler",value:function(e){var t=e.target.value,a=Object(p.a)(this.workflowsList).filter((function(e){var a=!1;return e.name&&(a=-1!==e.name.toLowerCase().indexOf(t.toLowerCase())),a}));this.setState({workflows:a})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(k,null,l.a.createElement("div",{className:"block first"},l.a.createElement("input",{className:"subitem",type:"text",placeholder:"Search Workflows",onChange:this.searchInputChangeHandler.bind(this)}),l.a.createElement("select",{className:"subitem"},l.a.createElement("option",{selected:!0,value:"all"},"All"),l.a.createElement("option",{value:"completed"},"Completed"),l.a.createElement("option",{value:"pending"},"Pending"))),l.a.createElement("div",{className:"block second"},l.a.createElement(f.a,{variant:"contained",color:"primary",className:"md-button",startIcon:l.a.createElement(v.a,null),size:"small",onClick:this.createWorkflowClickHandler},l.a.createElement(u.b,{to:"/edit"},"Create Workflow")))),l.a.createElement(g,{workflows:this.state.workflows}))}}]),a}(n.Component),O=a(35),j=a.n(O),y=a(36),N=a.n(y),H=a(37),W=(a(57),function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"wflow-container box-layout"},l.a.createElement("div",null,l.a.createElement("div",{className:"title"},l.a.createElement("input",{value:this.props.title,onChange:function(t){return e.props.changed(t,"title")}})),l.a.createElement("div",{className:"text-area"},l.a.createElement("textarea",{value:this.props.content,onChange:function(t){return e.props.changed(t,"content")}})))))}}]),a}(n.Component)),T=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).changeHandler=function(t,a,n){var l=e.props.nodes.findIndex((function(e){return e.id===n})),r=Object(H.a)({},e.props.nodes[l]);"title"===a?r.title=t.target.value:"content"===a&&(r.content=t.target.value);var o=Object(p.a)(e.props.nodes);o[l]=r,e.props.changed(o)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"workflows-container"},this.props.nodes.map((function(t){return l.a.createElement(W,{key:t.id,title:t.title,content:t.content,changed:function(a,n){return e.changeHandler(a,n,t.id)}})})))}}]),a}(n.Component),x=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).nameChangeHandler=function(t){e.setState({name:t.target.value})},e.shuffleWorkflowsHandler=function(){for(var t=Object(p.a)(e.state.nodes),a=t.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),l=[t[n],t[a]];t[a]=l[0],t[n]=l[1]}e.setState({nodes:t})},e.deleteWorkflowClickHandler=function(){var t=Object(p.a)(e.state.nodes);t.pop(),e.setState({nodes:t})},e.addNodeClickHandler=function(){var t=Object(p.a)(e.state.nodes);t.push({id:Math.floor(1e3*Math.random()),title:"",content:"",status:null}),e.setState({nodes:t})},e.saveWorkflowClickHandler=function(){alert("name: "+e.state.name)},e.state={name:"",nodes:[]},e}return Object(s.a)(a,[{key:"updateNodesHandler",value:function(e){console.log("update nodes handler clicked!"),this.setState({nodes:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(k,null,l.a.createElement("div",{className:"block first"},l.a.createElement("input",{className:"subitem",type:"text",placeholder:"Workflow Name",value:this.state.name,onChange:this.nameChangeHandler})),l.a.createElement("div",{className:"block second"},l.a.createElement(f.a,{variant:"contained",color:"primary",className:"md-button",startIcon:l.a.createElement(j.a,null),size:"small",onClick:this.shuffleWorkflowsHandler},"Shuffle"),l.a.createElement(f.a,{variant:"contained",color:"primary",className:"md-button",startIcon:l.a.createElement(N.a,null),size:"small",onClick:this.deleteWorkflowClickHandler},"Delete"),l.a.createElement(f.a,{variant:"contained",color:"primary",className:"md-button",startIcon:l.a.createElement(v.a,null),size:"small",onClick:this.addNodeClickHandler},"Add Node"),l.a.createElement(f.a,{variant:"contained",color:"primary",className:"md-button",size:"small",onClick:this.saveWorkflowClickHandler},"Save"))),l.a.createElement(T,{nodes:this.state.nodes,changed:function(t){return e.updateNodesHandler(t)}}))}}]),a}(n.Component),S=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("h2",null,l.a.createElement(u.b,{to:"/"},"FLOWAPP"))),l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",exact:!0},l.a.createElement(C,null)),l.a.createElement(m.a,{path:"/edit"},l.a.createElement(x,null)))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.f6cea3ce.chunk.js.map