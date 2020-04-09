(this["webpackJsonpcovid-project"]=this["webpackJsonpcovid-project"]||[]).push([[0],{176:function(e,t,a){"use strict";a.r(t);var o=a(0),r=a.n(o),n=a(56),i=a.n(n),l=(a(64),a(65),a(16)),c=a(17),s=a(18),d=a(19),u=a(29),p=a.n(u),b=a(57),m=a(30),v=a.n(m);v.a.accessToken="pk.eyJ1IjoiaW5jcmVkaWJsZWphZ3VyIiwiYSI6ImNrN3VyeXVybzE1OWEzbG1ybHFkNWcxNzMifQ.AybXTKikwd-8lr8TdbVyJQ";var g=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(e){var o;return Object(l.a)(this,a),(o=t.call(this,e)).state={},o}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=new v.a.Map({container:"mymap",style:"mapbox://styles/incrediblejagur/ck7xs2kdu00ot1ilpid6krvs7",center:[24.991639,-28.8166236],zoom:4.9});e.scrollZoom.disable(),e.dragPan.disable();var t="/api/covid/geojson";e.on("load",(function(){window.setInterval((function(){e.getSource("points").setData(t)}),2e3),e.addSource("points",{type:"geojson",data:t}),e.addLayer({id:"points",type:"symbol",source:"points",layout:{"icon-image":["concat",["get","icon"],"-15"],"text-field":["get","cases"],"text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-offset":[0,.6],"text-anchor":"top"}})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"mymap",style:{position:"absolute",width:"100%",height:"100%"}}))}}]),a}(r.a.Component),h={returnData:function(e,t,a){return[{label:"Positive Cases Identified",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(232, 87, 77)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(232, 87, 77)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:e},{label:"Recoveries",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:t},{label:"Deaths",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(0, 0, 0)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(0, 0, 0)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:a}]}},f=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={latest:[],curveData:[]},e.componentDidMount=function(){p.a.get("/api/covid/latest").then((function(t){var a=t.data.data;a.pop(),e.setState({latest:a})})),p.a.get("/api/covid/all").then((function(t){for(var a=t.data.data,o=[],r=[],n=[],i=[],l=0;l<a.length;l++)o.push(a[l].date),r.push(a[l].cases),n.push(a[l].recoveries),i.push(a[l].deaths);var c={labels:o,datasets:h.returnData(r,n,i)};e.setState({curveData:c})}))},e.displayData=function(){for(var t=e.state.latest,a=[],o=0;o<t.length;o++)a.push(r.a.createElement("div",{className:"card",style:{width:"18rem"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},Object.keys(t[o])),r.a.createElement("p",{className:"card-text"},Object.values(t[o])))));return a},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.latest,a=e.curveData;return t.length>0?r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row centered"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card-group",style:{marginTop:50}},this.displayData()))),r.a.createElement("div",{className:"row",style:{marginTop:15}},r.a.createElement(b.a,{data:a,options:{scales:{yAxes:[{ticks:{beginAtZero:!0,max:100*Math.ceil(2.5*Number(Object.values(t[1]))/100)}}]}}}))),r.a.createElement("div",{className:"",style:{marginTop:15}},r.a.createElement(g,null))):r.a.createElement("div",null,r.a.createElement(g,null))}}]),a}(r.a.Component);var y=function(){return r.a.createElement("div",null,r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},59:function(e,t,a){e.exports=a(176)},64:function(e,t,a){},65:function(e,t,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.d9bb580e.chunk.js.map