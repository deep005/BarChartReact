(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(24)},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n,r=a(0),i=a.n(r),c=a(11),l=a.n(c),o=(a(21),a(13)),s=a(3),u=a(4),h=a(6),m=a(5),d=a(7),p=a(8),v=[{year:"2010",value:5e3},{year:"2011",value:3e3},{year:"2012",value:8900},{year:"2013",value:7200},{year:"2014",value:1500},{year:"2015",value:8700},{year:"2016",value:4e3},{year:"2017",value:2e3},{year:"2018",value:8500},{year:"2019",value:1400}],f=["#0ee5F5","#004FA2"],b=a(14),y=a(12),O=(a(22),function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.renderAxis()}},{key:"componentDidUpdate",value:function(){this.renderAxis()}},{key:"renderAxis",value:function(){var e="axis".concat(this.props.orient),t=b[e]().scale(this.props.scale).tickSize(-this.props.tickSize).tickPadding([12]).ticks([4]);Object(y.a)(this.axisElement).call(t)}},{key:"render",value:function(){var e=this;return i.a.createElement("g",{className:"Axis Axis-".concat(this.props.orient),ref:function(t){e.axisElement=t},transform:this.props.translate})}}]),t}(r.Component)),E=function(e){var t=e.scales,a=e.margins,n=e.svgDimensions,r=n.height,c=n.width,l={orient:"Bottom",scale:t.xScale,translate:"translate(0, ".concat(r-a.bottom,")"),tickSize:r-a.top-a.bottom},o={orient:"Left",scale:t.yScale,translate:"translate(".concat(a.left,", 0)"),tickSize:c-a.left-a.right};return i.a.createElement("g",null,i.a.createElement(O,l),i.a.createElement(O,o))},g=a(2),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).colorScale=Object(p.b)().domain([0,a.props.maxValue]).range(f).interpolate(g.c),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.scales,n=t.margins,r=t.data,c=t.svgDimensions,l=a.xScale,o=a.yScale,s=c.height,u=r.map(function(t){return i.a.createElement("rect",{key:t.year,x:l(t.year),y:o(t.value),height:s-n.bottom-a.yScale(t.value),width:l.bandwidth(),fill:e.colorScale(t.value),onMouseOver:function(){return e.props.onMouseOverCallback(t)},onMouseOut:function(){return e.props.onMouseOutCallback(null)}})});return i.a.createElement("g",null,u)}}]),t}(r.Component),j=function(e){var t=e.hoveredBar,a=e.scales,n=a.xScale,r=a.yScale,c={left:"".concat(n(t.year)-30,"px"),top:"".concat(r(t.value),"px")};return i.a.createElement("div",{className:"Tooltip",style:c},i.a.createElement("table",null,i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"2"},"Year: ",t.year))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{colSpan:"1"},"Deaths"),i.a.createElement("td",{colSpan:"1"},t.value)))))},k=a(9),x=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(h.a)(this,Object(m.a)(t).call(this))).xScale=Object(p.a)(),e.yScale=Object(p.b)(),e.state={hoveredBar:null},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t={top:50,right:60,bottom:100,left:100},a={width:Math.min(this.props.parentWidth+20,700),height:500},n=Math.max.apply(Math,Object(o.a)(v.map(function(e){return e.value}))),r=this.xScale.padding(.5).domain(v.map(function(e){return e.year})).range([t.left,a.width-t.right]),c=this.yScale.domain([0,n]).range([a.height-t.bottom,t.top]);return i.a.createElement("div",{className:"Chart"},i.a.createElement("svg",{width:a.width,height:a.height},i.a.createElement(E,{scales:{xScale:r,yScale:c},margins:t,svgDimensions:a}),i.a.createElement(S,{scales:{xScale:r,yScale:c},margins:t,data:v,maxValue:n,svgDimensions:a,onMouseOverCallback:function(t){return e.setState({hoveredBar:t})},onMouseOutCallback:function(t){return e.setState({hoveredBar:null})}})),this.state.hoveredBar?i.a.createElement(j,{hoveredBar:this.state.hoveredBar,scales:{xScale:r,yScale:c}}):null)}}]),t}(r.Component),C=(n=x,function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={containerWidth:null},a.fitParentContainer=a.fitParentContainer.bind(Object(k.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fitParentContainer(),window.addEventListener("resize",this.fitParentContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.fitParentContainer)}},{key:"fitParentContainer",value:function(){var e=this.state.containerWidth,t=this.chartContainer.getBoundingClientRect().width;e!==t&&this.setState({containerWidth:t})}},{key:"renderChart",value:function(){var e=this.state.containerWidth;return i.a.createElement(n,Object.assign({},this.props,{parentWidth:e}))}},{key:"render",value:function(){var e=this,t=null!==this.state.containerWidth;return i.a.createElement("div",{ref:function(t){e.chartContainer=t},className:"Responsive-wrapper"},t&&this.renderChart())}}]),t}(r.Component));a(23);l.a.render(i.a.createElement(function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App--header"},i.a.createElement("h2",{className:"App--header__title"},"Death Toll due to Oceanic Calamities in The Last Decade.")),i.a.createElement("div",{className:"App--chart__container"},i.a.createElement(C,null)))},null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.63b91878.chunk.js.map