(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\workbench\\repos\\github\\cherryplum\\client\\interfaces\\web\\app\\app.js":[function(require,module,exports){
var IndexPage = require('./pages/index.js');



// not using an ES6 transpiler
var Router = ReactRouter.Router;
var Route = ReactRouter.Route; 
var Link = ReactRouter.Link;
var browserHistory = ReactRouter.browserHistory;




  ReactDOM.render(
	React.createElement(Router, {history: browserHistory}, 
		React.createElement(Route, {path: "*", component: IndexPage})
	),
  document.getElementById('react-app')
);
},{"./pages/index.js":"C:\\workbench\\repos\\github\\cherryplum\\client\\interfaces\\web\\app\\pages\\index.js"}],"C:\\workbench\\repos\\github\\cherryplum\\client\\interfaces\\web\\app\\pages\\index.js":[function(require,module,exports){
/*Bootstrap Classes*/
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;


var Index = React.createClass({displayName: "Index",

	getInitialState : function(){

		//pageData is a global variable defined in react_base.dot
		return {
			data: JSON.stringify( pageData, null, 4 )
		};
	},

	render: function() {


		return (
			React.createElement(Grid, null, 

				React.createElement("div", {className: "container"}, 
				

					React.createElement("h1", null, "This is the Web homepage"), 

					"This is rendered using React", 


					React.createElement("h3", null, "Switch to the admin interface to see the view rendered with Plain DoT.js ", React.createElement("a", {href: "/?setinterface=admin"}, "by clicking here")), 
					React.createElement("br", null), React.createElement("br", null), React.createElement("br", null), " ", React.createElement("br", null), React.createElement("br", null), 

					React.createElement("h5", null, "Here is some data from the repo located at ", React.createElement("br", null), " ", React.createElement("br", null), "server/repositories/database/repository.js:"), 

					React.createElement("pre", null, 
						this.state.data
					)
		
				)
			)
		);
	},

});
module.exports = Index;
},{}]},{},["C:\\workbench\\repos\\github\\cherryplum\\client\\interfaces\\web\\app\\app.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOlxcd29ya2JlbmNoXFxyZXBvc1xcZ2l0aHViXFxjaGVycnlwbHVtXFxjbGllbnRcXGludGVyZmFjZXNcXHdlYlxcYXBwXFxhcHAuanMiLCJDOlxcd29ya2JlbmNoXFxyZXBvc1xcZ2l0aHViXFxjaGVycnlwbHVtXFxjbGllbnRcXGludGVyZmFjZXNcXHdlYlxcYXBwXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUM1QztBQUNBOztBQUVBLDhCQUE4QjtBQUM5QixJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO0FBQ2hDLElBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7QUFDOUIsSUFBSSxJQUFJLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztBQUM1QixJQUFJLGNBQWMsR0FBRyxXQUFXLENBQUMsY0FBYyxDQUFDO0FBQ2hEO0FBQ0E7QUFDQTs7RUFFRSxRQUFRLENBQUMsTUFBTTtDQUNoQixvQkFBQyxNQUFNLEVBQUEsQ0FBQSxDQUFDLE9BQUEsRUFBTyxDQUFFLGNBQWdCLENBQUEsRUFBQTtFQUNoQyxvQkFBQyxLQUFLLEVBQUEsQ0FBQSxDQUFDLElBQUEsRUFBSSxDQUFDLEdBQUEsRUFBRyxDQUFDLFNBQUEsRUFBUyxDQUFFLFNBQVcsQ0FBUSxDQUFBO0NBQ3RDLENBQUE7RUFDUixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQztDQUNyQyxDQUFDOztBQ2xCRixxQkFBcUI7QUFDckIsSUFBSSxJQUFJLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQztBQUMvQixJQUFJLEdBQUcsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDO0FBQzdCLElBQUksR0FBRyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUM7QUFDN0I7O0FBRUEsSUFBSSwyQkFBMkIscUJBQUE7O0FBRS9CLENBQUMsZUFBZSxHQUFHLFVBQVU7QUFDN0I7O0VBRUUsT0FBTztHQUNOLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO0dBQ3pDLENBQUM7QUFDSixFQUFFOztBQUVGLENBQUMsTUFBTSxFQUFFLFdBQVc7QUFDcEI7O0VBRUU7QUFDRixHQUFHLG9CQUFDLElBQUksRUFBQSxJQUFDLEVBQUE7O0FBRVQsSUFBSSxvQkFBQSxLQUFJLEVBQUEsQ0FBQSxDQUFDLFNBQUEsRUFBUyxDQUFDLFdBQVksQ0FBQSxFQUFBO0FBQy9COztLQUVLLG9CQUFBLElBQUcsRUFBQSxJQUFDLEVBQUEsMEJBQTZCLENBQUEsRUFBQTtBQUFBO0FBQUEsS0FBQSw4QkFBQSxFQUFBO0FBQUE7QUFBQTtBQUFBLEtBS2pDLG9CQUFBLElBQUcsRUFBQSxJQUFDLEVBQUEsMkVBQUEsRUFBeUUsb0JBQUEsR0FBRSxFQUFBLENBQUEsQ0FBQyxJQUFBLEVBQUksQ0FBQyxzQkFBdUIsQ0FBQSxFQUFBLGtCQUFvQixDQUFLLENBQUEsRUFBQTtBQUMxSSxLQUFLLG9CQUFBLElBQUcsRUFBQSxJQUFBLENBQUcsQ0FBQSxFQUFBLG9CQUFBLElBQUcsRUFBQSxJQUFBLENBQUcsQ0FBQSxFQUFBLG9CQUFBLElBQUcsRUFBQSxJQUFBLENBQUcsQ0FBQSxFQUFBLEdBQUEsRUFBQyxvQkFBQSxJQUFHLEVBQUEsSUFBQSxDQUFHLENBQUEsRUFBQSxvQkFBQSxJQUFHLEVBQUEsSUFBQSxDQUFHLENBQUEsRUFBQTs7QUFFcEMsS0FBSyxvQkFBQSxJQUFHLEVBQUEsSUFBQyxFQUFBLDZDQUFBLEVBQTJDLG9CQUFBLElBQUcsRUFBQSxJQUFBLENBQUcsQ0FBQSxFQUFBLEdBQUEsRUFBQyxvQkFBQSxJQUFHLEVBQUEsSUFBQSxDQUFHLENBQUEsRUFBQSw2Q0FBZ0QsQ0FBQSxFQUFBOztLQUU1RyxvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFBO01BQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFLO0FBQ3ZCLEtBQVcsQ0FBQTs7SUFFRCxDQUFBO0dBQ0EsQ0FBQTtJQUNOO0FBQ0osRUFBRTs7Q0FFRCxDQUFDLENBQUM7QUFDSCxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgSW5kZXhQYWdlID0gcmVxdWlyZSgnLi9wYWdlcy9pbmRleC5qcycpO1xyXG5cclxuXHJcblxyXG4vLyBub3QgdXNpbmcgYW4gRVM2IHRyYW5zcGlsZXJcclxudmFyIFJvdXRlciA9IFJlYWN0Um91dGVyLlJvdXRlcjtcclxudmFyIFJvdXRlID0gUmVhY3RSb3V0ZXIuUm91dGU7IFxyXG52YXIgTGluayA9IFJlYWN0Um91dGVyLkxpbms7XHJcbnZhciBicm93c2VySGlzdG9yeSA9IFJlYWN0Um91dGVyLmJyb3dzZXJIaXN0b3J5O1xyXG5cclxuXHJcblxyXG5cclxuICBSZWFjdERPTS5yZW5kZXIoXHJcblx0PFJvdXRlciBoaXN0b3J5PXticm93c2VySGlzdG9yeX0+XHJcblx0XHQ8Um91dGUgcGF0aD1cIipcIiBjb21wb25lbnQ9e0luZGV4UGFnZX0+PC9Sb3V0ZT5cclxuXHQ8L1JvdXRlcj4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0LWFwcCcpXHJcbik7XHJcbiIsIi8qQm9vdHN0cmFwIENsYXNzZXMqL1xyXG52YXIgR3JpZCA9IFJlYWN0Qm9vdHN0cmFwLkdyaWQ7XHJcbnZhciBSb3cgPSBSZWFjdEJvb3RzdHJhcC5Sb3c7XHJcbnZhciBDb2wgPSBSZWFjdEJvb3RzdHJhcC5Db2w7XHJcblxyXG5cclxudmFyIEluZGV4ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cclxuXHRnZXRJbml0aWFsU3RhdGUgOiBmdW5jdGlvbigpe1xyXG5cclxuXHRcdC8vcGFnZURhdGEgaXMgYSBnbG9iYWwgdmFyaWFibGUgZGVmaW5lZCBpbiByZWFjdF9iYXNlLmRvdFxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0ZGF0YTogSlNPTi5zdHJpbmdpZnkoIHBhZ2VEYXRhLCBudWxsLCA0IClcclxuXHRcdH07XHJcblx0fSxcclxuXHJcblx0cmVuZGVyOiBmdW5jdGlvbigpIHtcclxuXHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PEdyaWQ+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdFx0PGgxPlRoaXMgaXMgdGhlIFdlYiBob21lcGFnZTwvaDE+XHJcblxyXG5cdFx0XHRcdFx0VGhpcyBpcyByZW5kZXJlZCB1c2luZyBSZWFjdFxyXG5cclxuXHJcblx0XHRcdFx0XHQ8aDM+U3dpdGNoIHRvIHRoZSBhZG1pbiBpbnRlcmZhY2UgdG8gc2VlIHRoZSB2aWV3IHJlbmRlcmVkIHdpdGggUGxhaW4gRG9ULmpzIDxhIGhyZWY9XCIvP3NldGludGVyZmFjZT1hZG1pblwiPmJ5IGNsaWNraW5nIGhlcmU8L2E+PC9oMz5cclxuXHRcdFx0XHRcdDxiciAvPjxiciAvPjxiciAvPiA8YnIgLz48YnIgLz5cclxuXHJcblx0XHRcdFx0XHQ8aDU+SGVyZSBpcyBzb21lIGRhdGEgZnJvbSB0aGUgcmVwbyBsb2NhdGVkIGF0IDxiciAvPiA8YnIgLz5zZXJ2ZXIvcmVwb3NpdG9yaWVzL2RhdGFiYXNlL3JlcG9zaXRvcnkuanM6PC9oNT5cclxuXHJcblx0XHRcdFx0XHQ8cHJlPlxyXG5cdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5kYXRhfVxyXG5cdFx0XHRcdFx0PC9wcmU+XHJcblx0XHRcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0KTtcclxuXHR9LFxyXG5cclxufSk7XHJcbm1vZHVsZS5leHBvcnRzID0gSW5kZXg7XHJcbiJdfQ==
