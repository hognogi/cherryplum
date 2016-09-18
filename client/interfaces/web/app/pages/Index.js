/*Bootstrap Classes*/
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;


var Index = React.createClass({

	getInitialState : function(){

		//pageData is a global variable defined in react_base.dot
		return {
			data: JSON.stringify( pageData, null, 4 )
		};
	},

	render: function() {


		return (
			<Grid>

				<div className="container">
				

					<h1>This is the Web homepage</h1>

					This is rendered using React


					<h3>Switch to the admin interface to see the view rendered with Plain DoT.js <a href="/?setinterface=admin">by clicking here</a></h3>
					<br /><br /><br /> <br /><br />

					<h5>Here is some data from the repo located at <br /> <br />server/repositories/database/repository.js:</h5>

					<pre>
						{this.state.data}
					</pre>
		
				</div>
			</Grid>
		);
	},

});
module.exports = Index;
