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
					React.createElement("br", null), React.createElement("br", null), React.createElement("br", null), 
					React.createElement("h4", null, "You can find more details on the ", React.createElement("a", {href: "https://github.com/hognogi/cherryplum"}, "github repository"), " or simply ", React.createElement("a", {href: "http://www.hognogi.com/"}, "contact me"), " with any questions "), 
					React.createElement("br", null), React.createElement("br", null), React.createElement("br", null), 


					React.createElement("h3", null, "To edit the React part of the website be sure to run the gulp task inside the root folder"), 

					React.createElement("pre", null, 
						"cherryplum_folder>gulp"
					), 

					"you can find the react app folder at:",  
					React.createElement("pre", null, 
						"/client/interfaces/web/app"
					), 

					

					React.createElement("br", null), React.createElement("br", null), 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOlxcd29ya2JlbmNoXFxyZXBvc1xcZ2l0aHViXFxjaGVycnlwbHVtXFxjbGllbnRcXGludGVyZmFjZXNcXHdlYlxcYXBwXFxhcHAuanMiLCJDOlxcd29ya2JlbmNoXFxyZXBvc1xcZ2l0aHViXFxjaGVycnlwbHVtXFxjbGllbnRcXGludGVyZmFjZXNcXHdlYlxcYXBwXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUM1QztBQUNBOztBQUVBLDhCQUE4QjtBQUM5QixJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO0FBQ2hDLElBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7QUFDOUIsSUFBSSxJQUFJLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztBQUM1QixJQUFJLGNBQWMsR0FBRyxXQUFXLENBQUMsY0FBYyxDQUFDO0FBQ2hEO0FBQ0E7QUFDQTs7RUFFRSxRQUFRLENBQUMsTUFBTTtDQUNoQixvQkFBQyxNQUFNLEVBQUEsQ0FBQSxDQUFDLE9BQUEsRUFBTyxDQUFFLGNBQWdCLENBQUEsRUFBQTtFQUNoQyxvQkFBQyxLQUFLLEVBQUEsQ0FBQSxDQUFDLElBQUEsRUFBSSxDQUFDLEdBQUEsRUFBRyxDQUFDLFNBQUEsRUFBUyxDQUFFLFNBQVcsQ0FBUSxDQUFBO0NBQ3RDLENBQUE7RUFDUixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQztDQUNyQyxDQUFDOztBQ2xCRixxQkFBcUI7QUFDckIsSUFBSSxJQUFJLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQztBQUMvQixJQUFJLEdBQUcsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDO0FBQzdCLElBQUksR0FBRyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUM7QUFDN0I7O0FBRUEsSUFBSSwyQkFBMkIscUJBQUE7O0FBRS9CLENBQUMsZUFBZSxHQUFHLFVBQVU7QUFDN0I7O0VBRUUsT0FBTztHQUNOLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO0dBQ3pDLENBQUM7QUFDSixFQUFFOztBQUVGLENBQUMsTUFBTSxFQUFFLFdBQVc7QUFDcEI7O0VBRUU7QUFDRixHQUFHLG9CQUFDLElBQUksRUFBQSxJQUFDLEVBQUE7O0FBRVQsSUFBSSxvQkFBQSxLQUFJLEVBQUEsQ0FBQSxDQUFDLFNBQUEsRUFBUyxDQUFDLFdBQVksQ0FBQSxFQUFBO0FBQy9COztLQUVLLG9CQUFBLElBQUcsRUFBQSxJQUFDLEVBQUEsMEJBQTZCLENBQUEsRUFBQTtBQUFBLENBQUE7QUFBQSxLQUFBLDhCQUFBLEVBQUE7QUFBQTtBQUFBO0FBQUEsS0FLakMsb0JBQUEsSUFBRyxFQUFBLElBQUMsRUFBQSwyRUFBQSxFQUF5RSxvQkFBQSxHQUFFLEVBQUEsQ0FBQSxDQUFDLElBQUEsRUFBSSxDQUFDLHNCQUF1QixDQUFBLEVBQUEsa0JBQW9CLENBQUssQ0FBQSxFQUFBO0tBQ3JJLG9CQUFBLElBQUcsRUFBQSxJQUFBLENBQUcsQ0FBQSxFQUFBLG9CQUFBLElBQUcsRUFBQSxJQUFBLENBQUcsQ0FBQSxFQUFBLG9CQUFBLElBQUcsRUFBQSxJQUFBLENBQUcsQ0FBQSxFQUFBO0tBQ2xCLG9CQUFBLElBQUcsRUFBQSxJQUFDLEVBQUEsbUNBQUEsRUFBaUMsb0JBQUEsR0FBRSxFQUFBLENBQUEsQ0FBQyxJQUFBLEVBQUksQ0FBQyx1Q0FBd0MsQ0FBQSxFQUFBLG1CQUFxQixDQUFBLEVBQUEsYUFBQSxFQUFXLG9CQUFBLEdBQUUsRUFBQSxDQUFBLENBQUMsSUFBQSxFQUFJLENBQUMseUJBQTBCLENBQUEsRUFBQSxZQUFjLENBQUEsRUFBQSxzQkFBeUIsQ0FBQSxFQUFBO0FBQ25NLEtBQUssb0JBQUEsSUFBRyxFQUFBLElBQUEsQ0FBRyxDQUFBLEVBQUEsb0JBQUEsSUFBRyxFQUFBLElBQUEsQ0FBRyxDQUFBLEVBQUEsb0JBQUEsSUFBRyxFQUFBLElBQUEsQ0FBRyxDQUFBLEVBQUE7QUFDdkI7O0FBRUEsS0FBSyxvQkFBQSxJQUFHLEVBQUEsSUFBQyxFQUFBLDJGQUE4RixDQUFBLEVBQUE7O0tBRWxHLG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUE7QUFBQSxNQUFBLHdCQUFBO0FBQUEsS0FFQyxDQUFBLEVBQUE7QUFBQTtBQUFBLEtBQUEsdUNBQUEsRUFBQSxDQUFBO0FBQUEsS0FHTixvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFBO0FBQUEsTUFBQSw0QkFBQTtBQUFBLEFBRVYsS0FBVyxDQUFBLEVBQUE7QUFDWDtBQUNBOztLQUVLLG9CQUFBLElBQUcsRUFBQSxJQUFBLENBQUcsQ0FBQSxFQUFBLG9CQUFBLElBQUcsRUFBQSxJQUFBLENBQUcsQ0FBQSxFQUFBO0FBQ2pCLEtBQUssb0JBQUEsSUFBRyxFQUFBLElBQUMsRUFBQSw2Q0FBQSxFQUEyQyxvQkFBQSxJQUFHLEVBQUEsSUFBQSxDQUFHLENBQUEsRUFBQSxHQUFBLEVBQUMsb0JBQUEsSUFBRyxFQUFBLElBQUEsQ0FBRyxDQUFBLEVBQUEsNkNBQWdELENBQUEsRUFBQTs7S0FFNUcsb0JBQUEsS0FBSSxFQUFBLElBQUMsRUFBQTtNQUNILElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSztBQUN2QixLQUFXLENBQUE7O0lBRUQsQ0FBQTtHQUNBLENBQUE7SUFDTjtBQUNKLEVBQUU7O0NBRUQsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIEluZGV4UGFnZSA9IHJlcXVpcmUoJy4vcGFnZXMvaW5kZXguanMnKTtcclxuXHJcblxyXG5cclxuLy8gbm90IHVzaW5nIGFuIEVTNiB0cmFuc3BpbGVyXHJcbnZhciBSb3V0ZXIgPSBSZWFjdFJvdXRlci5Sb3V0ZXI7XHJcbnZhciBSb3V0ZSA9IFJlYWN0Um91dGVyLlJvdXRlOyBcclxudmFyIExpbmsgPSBSZWFjdFJvdXRlci5MaW5rO1xyXG52YXIgYnJvd3Nlckhpc3RvcnkgPSBSZWFjdFJvdXRlci5icm93c2VySGlzdG9yeTtcclxuXHJcblxyXG5cclxuXHJcbiAgUmVhY3RET00ucmVuZGVyKFxyXG5cdDxSb3V0ZXIgaGlzdG9yeT17YnJvd3Nlckhpc3Rvcnl9PlxyXG5cdFx0PFJvdXRlIHBhdGg9XCIqXCIgY29tcG9uZW50PXtJbmRleFBhZ2V9PjwvUm91dGU+XHJcblx0PC9Sb3V0ZXI+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdC1hcHAnKVxyXG4pO1xyXG4iLCIvKkJvb3RzdHJhcCBDbGFzc2VzKi9cclxudmFyIEdyaWQgPSBSZWFjdEJvb3RzdHJhcC5HcmlkO1xyXG52YXIgUm93ID0gUmVhY3RCb290c3RyYXAuUm93O1xyXG52YXIgQ29sID0gUmVhY3RCb290c3RyYXAuQ29sO1xyXG5cclxuXHJcbnZhciBJbmRleCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuXHJcblx0Z2V0SW5pdGlhbFN0YXRlIDogZnVuY3Rpb24oKXtcclxuXHJcblx0XHQvL3BhZ2VEYXRhIGlzIGEgZ2xvYmFsIHZhcmlhYmxlIGRlZmluZWQgaW4gcmVhY3RfYmFzZS5kb3RcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGRhdGE6IEpTT04uc3RyaW5naWZ5KCBwYWdlRGF0YSwgbnVsbCwgNCApXHJcblx0XHR9O1xyXG5cdH0sXHJcblxyXG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcblxyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxHcmlkPlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFxyXG5cclxuXHRcdFx0XHRcdDxoMT5UaGlzIGlzIHRoZSBXZWIgaG9tZXBhZ2U8L2gxPlxyXG4gXHJcblx0XHRcdFx0XHRUaGlzIGlzIHJlbmRlcmVkIHVzaW5nIFJlYWN0XHJcblxyXG5cclxuXHRcdFx0XHRcdDxoMz5Td2l0Y2ggdG8gdGhlIGFkbWluIGludGVyZmFjZSB0byBzZWUgdGhlIHZpZXcgcmVuZGVyZWQgd2l0aCBQbGFpbiBEb1QuanMgPGEgaHJlZj1cIi8/c2V0aW50ZXJmYWNlPWFkbWluXCI+YnkgY2xpY2tpbmcgaGVyZTwvYT48L2gzPlxyXG5cdFx0XHRcdFx0PGJyIC8+PGJyIC8+PGJyIC8+IFxyXG5cdFx0XHRcdFx0PGg0PllvdSBjYW4gZmluZCBtb3JlIGRldGFpbHMgb24gdGhlIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vaG9nbm9naS9jaGVycnlwbHVtXCI+Z2l0aHViIHJlcG9zaXRvcnk8L2E+IG9yIHNpbXBseSA8YSBocmVmPVwiaHR0cDovL3d3dy5ob2dub2dpLmNvbS9cIj5jb250YWN0IG1lPC9hPiB3aXRoIGFueSBxdWVzdGlvbnMgPC9oND5cclxuXHRcdFx0XHRcdDxiciAvPjxiciAvPjxiciAvPiBcclxuXHJcblxyXG5cdFx0XHRcdFx0PGgzPlRvIGVkaXQgdGhlIFJlYWN0IHBhcnQgb2YgdGhlIHdlYnNpdGUgYmUgc3VyZSB0byBydW4gdGhlIGd1bHAgdGFzayBpbnNpZGUgdGhlIHJvb3QgZm9sZGVyPC9oMz5cclxuXHJcblx0XHRcdFx0XHQ8cHJlPlxyXG5cdFx0XHRcdFx0XHRjaGVycnlwbHVtX2ZvbGRlciZndDtndWxwXHJcblx0XHRcdFx0XHQ8L3ByZT5cclxuXHJcblx0XHRcdFx0XHR5b3UgY2FuIGZpbmQgdGhlIHJlYWN0IGFwcCBmb2xkZXIgYXQ6IFxyXG5cdFx0XHRcdFx0PHByZT5cclxuXHRcdFx0XHRcdFx0L2NsaWVudC9pbnRlcmZhY2VzL3dlYi9hcHBcclxuXHRcdFx0XHRcdDwvcHJlPlxyXG5cclxuXHRcdFx0XHRcdFxyXG5cclxuXHRcdFx0XHRcdDxiciAvPjxiciAvPlxyXG5cdFx0XHRcdFx0PGg1PkhlcmUgaXMgc29tZSBkYXRhIGZyb20gdGhlIHJlcG8gbG9jYXRlZCBhdCA8YnIgLz4gPGJyIC8+c2VydmVyL3JlcG9zaXRvcmllcy9kYXRhYmFzZS9yZXBvc2l0b3J5LmpzOjwvaDU+XHJcblxyXG5cdFx0XHRcdFx0PHByZT5cclxuXHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUuZGF0YX1cclxuXHRcdFx0XHRcdDwvcHJlPlxyXG5cdFx0XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdCk7XHJcblx0fSxcclxuXHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IEluZGV4O1xyXG4iXX0=
