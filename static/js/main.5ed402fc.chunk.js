(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,a,t){e.exports={controls:"styles_controls__2I_UW",control:"styles_control__ft17w",rules:"styles_rules__3i_N4",rangeLabel:"styles_rangeLabel__R1K7c",separator:"styles_separator__1CHBC",logo:"styles_logo__jbCYq",hint:"styles_hint__1ravt",icon:"styles_icon__3dsNZ",selectBox:"styles_selectBox__32qze",name:"styles_name__6OAoL"}},10:function(e,a,t){e.exports={grid:"styles_grid__3qgCG","appear-grid":"styles_appear-grid__38TWS",line:"styles_line__3QYq8",boldLine:"styles_boldLine__1JnQG"}},19:function(e,a,t){e.exports={main:"styles_main__v2TEg",octicon:"styles_octicon__24El-"}},22:function(e,a,t){e.exports={cellsContainer:"styles_cellsContainer__YDb3_"}},33:function(e,a,t){e.exports={root:"styles_root__1It74"}},35:function(e,a,t){e.exports={main:"styles_main__W22xA",cellsContainer:"styles_cellsContainer__njXVz"}},36:function(e,a,t){e.exports={cell:"styles_cell__1oTgs"}},37:function(e,a,t){e.exports={container:"styles_container__11Dt2"}},39:function(e,a,t){e.exports=t(71)},68:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(29),o=t.n(l),c=t(11),i=t(30),s=t(31),u="app/controls/UPDATE_CONTROLS",d={started:!1,cellSize:+(localStorage.getItem("life:cellSize")||10),speed:+(localStorage.getItem("life:speed")||50),randomAreaSize:+(localStorage.getItem("life:randomAreaSize")||20),randomAreaPopulation:+(localStorage.getItem("life:randomAreaPopulation")||5),renderMode:localStorage.getItem("life:renderMode")||"canvas",showGrid:JSON.parse(localStorage.getItem("life:showGrid"))||!1,cleanLevel:+(localStorage.getItem("life:cleanLevel")||100),stayAliveFrom:+(localStorage.getItem("life:stayAliveFrom")||2),stayAliveTo:+(localStorage.getItem("life:stayAliveTo")||3),newLifeFrom:+(localStorage.getItem("life:newLifeFrom")||3),newLifeTo:+(localStorage.getItem("life:newLifeTo")||3)};var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case u:var t=a.controls;return Object(s.a)({},e,t);default:return e}},h=t(23),p=t(9),v="app/cells/SET_CELLS",f="app/cells/ADD_CELL",g="app/cells/REMOVE_CELL",b=[[1,2],[2,1],[2,0],[1,0],[0,0]];var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case v:return a.cells;case f:var t=a.x,n=a.y;return e.find(function(e){var a=Object(p.a)(e,2),r=a[0],l=a[1];return r===t&&l===n})?e:Object(h.a)(e).concat([[t,n]]);case g:var r=a.x,l=a.y;return(e=Object(h.a)(e)).filter(function(e){var a=Object(p.a)(e,2),t=a[0],n=a[1];return!(t===r&&n===l)});default:return e}},C=Object(c.c)({controls:m,cells:y}),E=function(){var e=[i.a],a=c.d.apply(void 0,[c.a.apply(void 0,e)].concat([]));return Object(c.e)(C,{},a)},w=t(2),O=t(3),_=t(5),j=t(4),N=t(6),S=t(7),L=t(33),A=t.n(L),x=t(1),T=t.n(x);function M(e,a){return"".concat(e,"_").concat(a)}for(var z=[],R=-1;R<=1;++R)for(var k=-1;k<=1;++k)0===R&&0===k||z.push([R,k]);var F=t(19),D=t.n(F),G=function(e){function a(){return Object(w.a)(this,a),Object(_.a)(this,Object(j.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(O.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:D.a.main},r.a.createElement("a",{href:"https://github.com/avin/react-game-life",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",{className:D.a.octicon,viewBox:"0 0 16 16",version:"1.1","aria-hidden":"true"},r.a.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))))}}]),a}(r.a.Component),I=function(e){var a=e.value,t=e.label;return r.a.createElement("span",{role:"img","aria-label":t,className:T.a.icon},a)},P=function(e){function a(){var e,t;Object(w.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(_.a)(this,(e=Object(j.a)(a)).call.apply(e,[this].concat(r)))).handleToggleStart=function(){var e=t.props,a=e.started;(0,e.updateControls)({started:!a})},t.handleChangeSpeed=function(e){(0,t.props.updateControls)({speed:500-Number(e.currentTarget.value)})},t.handleChangeRandomAreaSize=function(e){(0,t.props.updateControls)({randomAreaSize:Number(e.currentTarget.value)})},t.handleChangeRandomAreaPopulation=function(e){(0,t.props.updateControls)({randomAreaPopulation:Number(e.currentTarget.value)})},t.handleRandomize=function(){(0,t.props.randomizeCells)()},t.handleChangeCellSize=function(e){(0,t.props.updateControls)({cellSize:Number(e.currentTarget.value)})},t.handleClear=function(e){(0,t.props.clearCells)()},t.handleChangeRenderMode=function(e){(0,t.props.updateControls)({renderMode:e.currentTarget.value})},t.handleChangeShowGrid=function(e){(0,t.props.updateControls)({showGrid:e.currentTarget.checked})},t.handleChangeCleanLevel=function(e){(0,t.props.updateControls)({cleanLevel:Number(e.currentTarget.value)})},t.handleChangeStayAliveFrom=function(e){(0,t.props.updateControls)({stayAliveFrom:Number(e.currentTarget.value)||0})},t.handleChangeStayAliveTo=function(e){(0,t.props.updateControls)({stayAliveTo:Number(e.currentTarget.value)||0})},t.handleChangeNewLifeFrom=function(e){(0,t.props.updateControls)({newLifeFrom:Number(e.currentTarget.value)||0})},t.handleChangeNewLifeTo=function(e){(0,t.props.updateControls)({newLifeTo:Number(e.currentTarget.value)||0})},t.handleResetRules=function(){(0,t.props.updateControls)({stayAliveFrom:2,stayAliveTo:3,newLifeFrom:3,newLifeTo:3})},t}return Object(N.a)(a,e),Object(O.a)(a,[{key:"renderCanvasOptions",value:function(){var e=this.props.cleanLevel;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:T.a.control},r.a.createElement("label",{htmlFor:"cleanLevel",className:T.a.rangeLabel},"Clean level:"),r.a.createElement("input",{type:"range",name:"cleanLevel",min:"0",max:"100",onChange:this.handleChangeCleanLevel,value:e})))}},{key:"render",value:function(){var e=this.props,a=e.started,t=e.speed,n=e.randomAreaSize,l=e.randomAreaPopulation,o=e.cellSize,c=e.renderMode,i=e.showGrid,s=e.stayAliveFrom,u=e.stayAliveTo,d=e.newLifeFrom,m=e.newLifeTo;return r.a.createElement("div",{className:T.a.controls},r.a.createElement("div",{className:T.a.logo},"The Game of Life"),r.a.createElement("div",{className:T.a.separator}),r.a.createElement("div",{className:T.a.control},r.a.createElement("button",{onClick:this.handleToggleStart,style:{fontWeight:"bold"}},a?r.a.createElement("span",null,"\u2759\u2759 Pause"):r.a.createElement("span",null,"\u25ba Play"))),r.a.createElement("div",{className:T.a.control},r.a.createElement("label",{htmlFor:"speedControl",className:T.a.rangeLabel},"Speed:"),r.a.createElement("input",{type:"range",name:"speedControl",min:"1",max:"500",onChange:this.handleChangeSpeed,value:500-t})),r.a.createElement("div",{className:T.a.control},r.a.createElement("label",{htmlFor:"speedControl",className:T.a.rangeLabel},"Cell size:"),r.a.createElement("input",{type:"range",name:"cellSize",min:"2",max:"50",onChange:this.handleChangeCellSize,value:o})),r.a.createElement("div",{className:T.a.control},r.a.createElement("label",{htmlFor:"showGrid",className:T.a.rangeLabel},"Show grid:"),r.a.createElement("input",{type:"checkbox",name:"showGrid",onChange:this.handleChangeShowGrid,checked:i})),r.a.createElement("div",{className:T.a.separator}),r.a.createElement("div",{className:T.a.rules},r.a.createElement("div",null,r.a.createElement("span",{className:T.a.name},"Stay alive:"),r.a.createElement("b",null,">=\xa0"),r.a.createElement("input",{type:"input",name:"stayAliveFrom",value:s,onChange:this.handleChangeStayAliveFrom}),"\xa0",r.a.createElement("b",null,"<=\xa0"),r.a.createElement("input",{type:"input",name:"stayAliveTo",value:u,onChange:this.handleChangeStayAliveTo}))),r.a.createElement("div",{className:T.a.rules},r.a.createElement("div",null,r.a.createElement("span",{className:T.a.name},"New life:"),r.a.createElement("b",null,">=\xa0"),r.a.createElement("input",{type:"input",name:"newLifeFrom",value:d,onChange:this.handleChangeNewLifeFrom}),"\xa0",r.a.createElement("b",null,"<=\xa0"),r.a.createElement("input",{type:"input",name:"newLifeTo",value:m,onChange:this.handleChangeNewLifeTo}))),r.a.createElement("div",{className:T.a.control},r.a.createElement("button",{onClick:this.handleResetRules},"Reset rules")),r.a.createElement("div",{className:T.a.separator}),r.a.createElement("div",{className:T.a.control},r.a.createElement("label",{htmlFor:"randomAreaSize",className:T.a.rangeLabel},"Random area size:"),r.a.createElement("input",{type:"range",name:"randomAreaSize",min:"10",max:"100",onChange:this.handleChangeRandomAreaSize,value:n})),r.a.createElement("div",{className:T.a.control},r.a.createElement("label",{htmlFor:"randomAreaPopulation",className:T.a.rangeLabel},"Random area population:"),r.a.createElement("input",{type:"range",name:"randomAreaPopulation",min:"1",max:"9",onChange:this.handleChangeRandomAreaPopulation,value:l})),r.a.createElement("div",{className:T.a.control},r.a.createElement("button",{onClick:this.handleRandomize},"Randomize")),r.a.createElement("div",{className:T.a.separator}),r.a.createElement("div",{className:T.a.hint},r.a.createElement(I,{label:"Hint",value:"\ud83d\udca1"}),"You can draw cells by the left mouse button and clean by the right one."),r.a.createElement("div",{className:T.a.control},r.a.createElement("button",{onClick:this.handleClear},"Clear")),r.a.createElement("div",{className:T.a.separator}),r.a.createElement("div",{className:T.a.control},r.a.createElement("label",{htmlFor:"renderMode",className:T.a.rangeLabel},"Render mode:"),r.a.createElement("select",{name:"renderMode",className:T.a.selectBox,onChange:this.handleChangeRenderMode,value:c},r.a.createElement("option",{value:"html"},"HTML (Pure React)"),r.a.createElement("option",{value:"canvas"},"Canvas (Most performance)"))),"canvas"===c&&this.renderCanvasOptions(),r.a.createElement("div",{className:"filler"}),r.a.createElement(G,null))}}]),a}(r.a.Component);var W=Object(S.b)(function(e,a){return{started:e.controls.started,renderMode:e.controls.renderMode,speed:e.controls.speed,cellSize:e.controls.cellSize,showGrid:e.controls.showGrid,randomAreaSize:e.controls.randomAreaSize,cleanLevel:e.controls.cleanLevel,stayAliveFrom:e.controls.stayAliveFrom,stayAliveTo:e.controls.stayAliveTo,newLifeFrom:e.controls.newLifeFrom,newLifeTo:e.controls.newLifeTo}},{updateControls:function(e){return Object.keys(e).forEach(function(a){localStorage.setItem("life:".concat(a),e[a])}),{type:u,controls:e}},randomizeCells:function(){return function(e,a){for(var t=a().controls,n=t.randomAreaSize,r=t.randomAreaPopulation,l=[],o=0;o<n;++o)for(var c=0;c<n;++c)if(Math.random()<r/10){var i=Math.round(n/2),s=o-i,u=c-i;l.push([s,u])}e({type:v,cells:l})}},clearCells:function(){return{type:v,cells:[]}}})(P),Y=t(38),B=t(21),U=t(35),q=t.n(U),X=t(22),H=t.n(X),J=t(36),Q=t.n(J),V=function(e){function a(){return Object(w.a)(this,a),Object(_.a)(this,Object(j.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(O.a)(a,[{key:"render",value:function(){var e=this.props,a=e.cellSize,t=e.x,n=e.y;return r.a.createElement("div",{className:Q.a.cell,style:{width:a,height:a,left:t*a,top:-n*a}})}}]),a}(r.a.Component);var K=Object(S.b)(function(e,a){return{cellSize:e.controls.cellSize}},{})(V),Z=t(12),$=t(16),ee=t(10),ae=t.n(ee),te=function(e){function a(){return Object(w.a)(this,a),Object(_.a)(this,Object(j.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(O.a)(a,[{key:"renderLines",value:function(){for(var e=this.props,a=e.width,t=e.height,n=e.cellSize,l=[],o=0;o<a/2;o+=n)l.push(r.a.createElement("line",{key:"v_".concat(o),x1:o-.5,y1:-t/2,x2:o-.5,y2:t/2,className:Object($.a)(ae.a.line,Object(Z.a)({},ae.a.boldLine,!(o%(5*n))))})),o&&l.push(r.a.createElement("line",{key:"v_".concat(-o),x1:-o-.5,y1:-t/2,x2:-o-.5,y2:t/2,className:Object($.a)(ae.a.line,Object(Z.a)({},ae.a.boldLine,!(o%(5*n))))}));for(var c=0;c<t/2;c+=n)l.push(r.a.createElement("line",{key:"h_".concat(c),y1:c-.5,x1:-a/2,y2:c-.5,x2:a/2,className:Object($.a)(ae.a.line,Object(Z.a)({},ae.a.boldLine,!(c%(5*n))))})),c&&l.push(r.a.createElement("line",{key:"h_".concat(-c),y1:-c-.5,x1:-a/2,y2:-c-.5,x2:a/2,className:Object($.a)(ae.a.line,Object(Z.a)({},ae.a.boldLine,!(c%(5*n))))}));return l}},{key:"render",value:function(){var e=this.props,a=e.width,t=e.height;return e.showGrid?r.a.createElement("svg",{width:a,height:t,className:ae.a.grid},r.a.createElement("g",{transform:"matrix(1 0 0 -1 ".concat(a/2," ").concat(t/2,")")},this.renderLines())):null}}]),a}(r.a.Component);var ne=Object(S.b)(function(e,a){return{cellSize:e.controls.cellSize,showGrid:e.controls.showGrid}},{})(te),re=function(e){function a(){return Object(w.a)(this,a),Object(_.a)(this,Object(j.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(O.a)(a,[{key:"renderCells",value:function(){return this.props.cells.map(function(e){var a=Object(p.a)(e,2),t=a[0],n=a[1];return r.a.createElement(K,{key:M(t,n),x:t,y:n})})}},{key:"render",value:function(){var e=this.props,a=e.width,t=e.height;return r.a.createElement("div",{className:H.a.container},r.a.createElement("div",{className:H.a.cellsContainer},this.renderCells()),r.a.createElement(ne,{width:a,height:t}))}}]),a}(r.a.Component);var le=Object(S.b)(function(e,a){return{cells:e.cells}},{})(re),oe=t(37),ce=t.n(oe),ie=function(e){function a(){return Object(w.a)(this,a),Object(_.a)(this,Object(j.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(O.a)(a,[{key:"renderCells",value:function(){var e=this.props,a=e.cells,t=e.cellSize,n=e.width,r=e.height,l=e.cleanLevel,o=this.canvasRef.getContext("2d"),c=this.canvasTempRef.getContext("2d");o.shadowBlur=0,n&&r&&(c.clearRect(0,0,n,r),c.globalAlpha=(100-l)/100,c.drawImage(this.canvasRef,0,0),o.clearRect(0,0,n,r),o.drawImage(this.canvasTempRef,0,0));var i=Math.floor(n/2),s=Math.floor(r/2);o.shadowColor="#394b59",o.shadowBlur=5,o.fillStyle="#394b59",a.forEach(function(e){var a=Object(p.a)(e,2),n=a[0],r=a[1];o.fillRect(n*t+i,-r*t+s,t,t)})}},{key:"componentDidUpdate",value:function(e,a,t){this.renderCells()}},{key:"componentDidMount",value:function(){this.renderCells()}},{key:"render",value:function(){var e=this,a=this.props,t=a.width,n=a.height;return r.a.createElement("div",{className:ce.a.container},r.a.createElement("canvas",{width:t,height:n,ref:function(a){e.canvasRef=a}}),r.a.createElement("canvas",{width:t,height:n,ref:function(a){e.canvasTempRef=a},style:{display:"none"}}),r.a.createElement(ne,{width:t,height:n}))}}]),a}(r.a.Component);var se=Object(S.b)(function(e,a){return{cells:e.cells,cellSize:e.controls.cellSize,cleanLevel:e.controls.cleanLevel}},{})(ie),ue={NONE:0,DRAW:1,CLEAR:2},de=function(e){function a(){var e,t;Object(w.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(_.a)(this,(e=Object(j.a)(a)).call.apply(e,[this].concat(r)))).state={drawMode:ue.NONE},t.handleMouseOver=function(e){var a=e.clientX,n=e.clientY,r=t.state.drawMode,l=t.props,o=l.addCell,c=l.removeCell,i=l.cellSize,s=Math.floor((a-(t.containerRef.offsetLeft+t.containerRef.offsetWidth/2))/i),u=Math.ceil((t.containerRef.offsetTop+t.containerRef.offsetHeight/2-n)/i);r===ue.DRAW?o({x:s,y:u}):r===ue.CLEAR&&c({x:s,y:u})},t.handleMouseDown=function(e){var a=e.clientX,n=e.clientY;switch(e.button){case 0:t.setState({drawMode:ue.DRAW},function(){t.handleMouseOver({clientY:n,clientX:a})});break;case 2:t.setState({drawMode:ue.CLEAR},function(){t.handleMouseOver({clientY:n,clientX:a})})}},t.handleStopDrawing=function(e){t.setState({drawMode:ue.NONE})},t.handleContextMenu=function(e){e.preventDefault()},t}return Object(N.a)(a,e),Object(O.a)(a,[{key:"componentDidUpdate",value:function(e,a,t){e.speed!==this.props.speed&&this.repeater.updateDelay(this.props.speed),!e.started&&this.props.started?this.repeater.start():e.started&&!this.props.started&&this.repeater.stop()}},{key:"componentDidMount",value:function(){var e=this.props,a=e.evaluateCells,t=e.speed;this.repeater=Object(Y.a)({action:a,delay:t})}},{key:"componentWillUnmount",value:function(){this.repeater.stop()}},{key:"renderContent",value:function(){switch(this.props.renderMode){case"html":return r.a.createElement(B.a,null,function(e){var a=e.width,t=e.height;return r.a.createElement(le,{width:a,height:t})});case"canvas":return r.a.createElement(B.a,null,function(e){var a=e.width,t=e.height;return r.a.createElement(se,{width:a,height:t})})}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{ref:function(a){e.containerRef=a},className:q.a.main,onMouseMove:this.handleMouseOver,onMouseDown:this.handleMouseDown,onMouseUp:this.handleStopDrawing,onMouseLeave:this.handleStopDrawing,onContextMenu:this.handleContextMenu},this.renderContent())}}]),a}(r.a.Component);var me=Object(S.b)(function(e,a){return{speed:e.controls.speed,renderMode:e.controls.renderMode,started:e.controls.started,cellSize:e.controls.cellSize}},{evaluateCells:function(){return function(e,a){var t=a().cells,n=a().controls,r=n.stayAliveFrom,l=n.stayAliveTo,o=n.newLifeFrom,c=n.newLifeTo,i={};t.forEach(function(e){var a=Object(p.a)(e,2),t=a[0],n=a[1],r=M(t,n);i[r]={filled:1,x:t,y:n},z.forEach(function(e){var a=Object(p.a)(e,2),r=a[0],l=a[1],o=t+r,c=n+l,s=M(o,c);i[s]&&i[s].filled||(i[s]={filled:0,x:o,y:c})})});var s=[],u=function(e){var a=i[e],t=a.filled,n=a.x,u=a.y,d=0;z.forEach(function(e){var a=Object(p.a)(e,2),t=a[0],r=a[1],l=M(n+t,u+r);i[l]&&i[l].filled&&(d+=1)}),t&&d>=r&&d<=l?s.push([n,u]):!t&&d>=o&&d<=c&&s.push([n,u])};for(var d in i)u(d);e({type:v,cells:s})}},addCell:function(e){var a=e.x,t=e.y;return{type:f,x:a,y:t}},removeCell:function(e){var a=e.x,t=e.y;return{type:g,x:a,y:t}}})(de),he=function(e){function a(){return Object(w.a)(this,a),Object(_.a)(this,Object(j.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(O.a)(a,[{key:"render",value:function(){var e=this.props.store;return r.a.createElement(S.a,{store:e},r.a.createElement("div",{className:A.a.root},r.a.createElement(W,null),r.a.createElement(me,null)))}}]),a}(r.a.Component);t(68);var pe=E(),ve=document.querySelector("#root");o.a.render(r.a.createElement(he,{store:pe}),ve),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,2,1]]]);
//# sourceMappingURL=main.5ed402fc.chunk.js.map