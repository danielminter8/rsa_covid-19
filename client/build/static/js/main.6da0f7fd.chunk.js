(this["webpackJsonpcovid-project"]=this["webpackJsonpcovid-project"]||[]).push([[0],{179:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(58),s=a.n(o),c=(a(66),a(30)),l=a.n(c),i=a(59),d=a(1),m=a(2),u=a(3),p=a(4),v=(a(68),a(31)),b=a.n(v),h=["#FF6633","#FFB399","#FF33FF","#EDED00","#00B3E6","#E6B333","#3366E6","#999966","#99FF99"],f=["WC","GT","KZN","LIM","MP","NC","NW","FS","EC"],g=function(e){for(var t=0;t<f.length;t++){var a="https://mapit.code4sa.org/area/MDB:".concat(f[t],".geojson");e.addSource(f[t],{type:"geojson",data:a}),e.addLayer({id:f[t],type:"fill",source:f[t],paint:{"fill-color":h[t],"fill-opacity":.8}})}};b.a.accessToken="pk.eyJ1IjoiaW5jcmVkaWJsZWphZ3VyIiwiYSI6ImNrOTJwM2FsNzAyM2szbW9hdWR2OXBqZjUifQ.6H9790vEmqomFGSu0Q8M0g";var y=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=new b.a.Map({container:"mymap",style:"mapbox://styles/incrediblejagur/ck7xs2kdu00ot1ilpid6krvs7",center:[24.991639,-28.8166236],zoom:4});e.scrollZoom.disable(),e.dragPan.disable();e.on("load",(function(){g(e),e.addSource("points",{type:"geojson",data:"/api/geojson"}),e.addLayer({id:"points",type:"symbol",source:"points",layout:{"text-field":["get","cases"],"text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-offset":[0,0],"text-anchor":"top"},paint:{"text-color":"#ffffff"}})}))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{id:"mymap",style:{marginBottom:20,position:"relative",width:"100%",height:"350px",borderRadius:5}}))}}]),a}(n.a.Component),E=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.data;return n.a.createElement("div",{className:"card-group",style:{marginTop:50}},n.a.createElement("div",{className:"card",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Tests Conducted"),n.a.createElement("p",{className:"card-text"},e[0],"\xa0"))),n.a.createElement("div",{className:"card",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Positive Cases Identified"),n.a.createElement("p",{className:"card-text"},e[1],"\xa0"))),n.a.createElement("div",{className:"card",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Recoveries"),n.a.createElement("p",{className:"card-text"},e[2],"\xa0"))),n.a.createElement("div",{className:"card",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Deaths"),n.a.createElement("p",{className:"card-text"},e[3],"\xa0"))))}}]),a}(n.a.Component),N=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.data;return n.a.createElement("div",null,n.a.createElement("div",{className:""},n.a.createElement("div",{className:"card-group",style:{marginTop:0}},n.a.createElement("div",{className:"card",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Latest Increase"),n.a.createElement("p",{className:"card-text"},e.latestIncrease,"\xa0"))),n.a.createElement("div",{className:"card",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Average Cases"),n.a.createElement("p",{className:"card-text"},e.latestAverage," per day\xa0"))))),n.a.createElement("div",{className:""},n.a.createElement("div",{className:"card-group",style:{marginTop:0}},n.a.createElement("div",{className:"card",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"For more info"),n.a.createElement("p",{className:"card-text"},n.a.createElement("a",{href:"https://sacoronavirus.co.za/"},"sacoronavirus.co.za")))),n.a.createElement("div",{className:"card",style:{width:"18rem"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Last Updated"),n.a.createElement("p",{className:"card-text"},e.lastChecked.date,"\xa0 ",e.lastChecked.time))))))}}]),a}(n.a.Component),j=a(32),C=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.data;return n.a.createElement("article",{className:"canvas-container"},n.a.createElement(j.b,{data:e.dataset,options:{maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0,max:1e3*Math.round(2.5*e.cases[e.cases.length-1]/1e3)}}]}}}))}}]),a}(n.a.Component),O=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.data;return n.a.createElement(j.a,{data:e,width:100,height:50,options:{}})}}]),a}(n.a.Component),k=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{style:{textAlign:"center",backgroundColor:"#343a40",padding:5}},n.a.createElement("code",{style:{fontSize:11,color:"white"}},"Made by Daniel || ",n.a.createElement("a",{style:{color:"rgba(232, 87, 77)"},href:"https://github.com/incrediblejagur/rsa_covid-19/issues"},"Report Bug")))}}]),a}(n.a.Component),S=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(d.a)(this,a);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).buildKey=function(){for(var e=[n.a.createElement("div",{className:"mapkeys"},"Provinces")],t=0;t<f.length;t++){var a=f[t];"GT"===a&&(a="GP"),"LIM"===a&&(a="LP");var r=n.a.createElement("div",{className:"mapkeys"},n.a.createElement("span",{className:"key",style:{backgroundColor:h[t]}}),a);e.push(r)}return e},e}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{id:"",className:"legend"},this.buildKey())}}]),a}(n.a.Component),B=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row centered"},n.a.createElement("div",{className:"mycards col-sm"},n.a.createElement(E,{data:this.props.latest}))),n.a.createElement("div",{className:"row centered",style:{marginTop:15}},n.a.createElement("div",{className:"col-sm"},n.a.createElement(C,{data:this.props.allStats}))),n.a.createElement("div",{className:"row centered",style:{marginTop:15}},n.a.createElement("div",{className:"col-sm"},n.a.createElement(O,{data:this.props.provinceStats})),n.a.createElement("div",{className:"mycards extrainfo col-sm centered",style:{marginTop:30}},n.a.createElement(N,{data:this.props.extraStats})))),n.a.createElement("div",{className:"",style:{marginTop:15}},n.a.createElement(y,null),n.a.createElement(S,null)),n.a.createElement(k,null))}}]),a}(n.a.Component),x=a(14),w=a.n(x),H={covidLineGraph:function(e,t,a){return[{label:"Positive Cases Identified",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(232, 87, 77)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(232, 87, 77)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:e},{label:"Recoveries",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:t},{label:"Deaths",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(0, 0, 0)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(0, 0, 0)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:a}]},covidBarGraph:function(e){return[{label:"Provinces",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(0, 0, 0)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(0, 0, 0)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:e}]}},R={},D={latestStats:function(){return w.a.get("/api/latest-stats").then((function(e){var t=e.data.data,a=[];for(var r in t)a.push(Object.values(t[r])[0]);return R=t[4],a}))},extraStats:function(){return w.a.get("/api/extra-stats").then((function(e){var t=e.data.data;return{latestIncrease:t.latest_increase,latestAverage:t.average_cases.latest_average,lastChecked:R}}))},allStats:function(){return w.a.get("/api/all-stats").then((function(e){for(var t=e.data.data,a=[],r=[],n=[],o=[],s=0;s<t.length;s++)a.push(t[s].date),r.push(t[s].cases),n.push(t[s].recoveries),o.push(t[s].deaths);return{dataset:{labels:a,datasets:H.covidLineGraph(r,n,o)},cases:r}}))},provinceStats:function(){return w.a.get("/api/province-stats").then((function(e){var t=e.data.data,a=t[t.length-1],r=[],n=[];for(var o in a)2!==o.length&&3!==o.length||(r.push(o),n.push(a[o]));return{labels:r,datasets:H.covidBarGraph(n)}}))}},T=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(d.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={loading:!0},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,D.latestStats();case 3:return e.t1=e.sent,e.next=6,D.extraStats();case 6:return e.t2=e.sent,e.next=9,D.allStats();case 9:return e.t3=e.sent,e.next=12,D.provinceStats();case 12:e.t4=e.sent,e.t5={latestStats:e.t1,extraStats:e.t2,allStats:e.t3,provinceStats:e.t4,loading:!1},e.t0.setState.call(e.t0,e.t5);case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?n.a.createElement("div",{className:"jumbotron jumbotron-fluid"},n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"display-4"},"Crunching Data ",n.a.createElement("p",{className:"spinner-border text-primary",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading..."))),n.a.createElement("p",null,"If loading persists, ",n.a.createElement("a",{href:"/"},"Click Me")))):n.a.createElement("div",{className:"render"},n.a.createElement(B,{latest:this.state.latestStats,extraStats:this.state.extraStats,allStats:this.state.allStats,provinceStats:this.state.provinceStats}))}}]),a}(n.a.Component);s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(T,null)),document.getElementById("root"))},61:function(e,t,a){e.exports=a(179)},66:function(e,t,a){},68:function(e,t,a){}},[[61,1,2]]]);
//# sourceMappingURL=main.6da0f7fd.chunk.js.map