(this["webpackJsonpcfs-data"]=this["webpackJsonpcfs-data"]||[]).push([[0],{38:function(e,t,a){e.exports=a(49)},49:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),s=a.n(r),c=a(25),o=a(26),i=a(35),d=a(27),u=a(9),m=a(36),h=function(){return l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Text:"),l.a.createElement("th",null,"Type:")))},f=a(51),E=function(){return l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(f.a,{animation:"border",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading...")),"Loading ...")))},p=function(e){var t=e.dataRecords;return l.a.createElement("tbody",null,null==t?"No Records Found!":t.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.text),l.a.createElement("td",null,e.type))})))},b=a(54),g=a(56),v=a(52),S=a(55),y=a(34),C=a(53),D=a(29),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).state={loading:!1,filteredCfsData:[],allCfsData:[]},a.load20RandomFacts=a.load20RandomFacts.bind(Object(u.a)(a)),a.loadAllFacts=a.loadAllFacts.bind(Object(u.a)(a)),a.handleSearchSubmit=a.handleSearchSubmit.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"loadAllFacts",value:function(){var e=this;this.setState({loading:!0}),this.fetchData("https://cat-fact.herokuapp.com/facts?animal_type=cat").then((function(t){return e.setState({allCfsData:t.all,loading:!1})})).then(this.load20RandomFacts)}},{key:"load20RandomFacts",value:function(){this.setState({loading:!0});var e=Object(D.sampleSize)(this.state.allCfsData,20);this.setState({filteredCfsData:e,loading:!1})}},{key:"componentDidMount",value:function(){this.loadAllFacts()}},{key:"handleSearchSubmit",value:function(e){e.preventDefault(),this.setState({loading:!0});var t=e.target.elements.formSearchValue.value,a=this.state.allCfsData.filter((function(e){return e.text.toLowerCase().includes(t.toLowerCase())}));this.setState({filteredCfsData:a,loading:!1})}},{key:"fetchData",value:function(e){return fetch("https://cors-anywhere.herokuapp.com/"+e,{method:"GET",mode:"cors",headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){if(e.status>=400)throw new Error("Bad response from server");return e.json()})).catch((function(e){console.error("ERROR: Failed to get data from API : "+e.message)}))}},{key:"renderIcon",value:function(){return this.state.loading?l.a.createElement(f.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):"Random load 20 more facts"}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(b.a,{bg:"light",expand:"lg"},l.a.createElement(b.a.Brand,{href:"#home"},"CFS Data"),l.a.createElement(g.a,{className:"mr-auto"},l.a.createElement(g.a.Link,{href:"#home"},l.a.createElement(v.a,{size:"sm",variant:"outline-success",disabled:this.state.loading,onClick:this.load20RandomFacts},this.renderIcon())),l.a.createElement(S.a,{inline:!0,onSubmit:function(t){return e.handleSearchSubmit(t)}},l.a.createElement(S.a.Group,{controlId:"formSearchValue"},l.a.createElement(y.a,{size:"sm",type:"text",placeholder:"Search",className:"mr-sm-2"}),l.a.createElement(v.a,{size:"sm",variant:"outline-success",type:"submit"},"Search"))))),l.a.createElement(C.a,{striped:!0,hover:!0,size:"sm"},l.a.createElement(h,null),this.state.loading?l.a.createElement(E,null):l.a.createElement(p,{dataRecords:this.state.filteredCfsData})),l.a.createElement("mark",null,"Data loaded with ",this.state.filteredCfsData.length," of filtered and"," ",this.state.allCfsData.length," all records"))}}]),t}(l.a.Component);a(48);s.a.render(l.a.createElement(k,null),document.getElementById("app"))}},[[38,1,2]]]);
//# sourceMappingURL=main.2dd23aec.chunk.js.map