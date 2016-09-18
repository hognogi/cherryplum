
module.exports = [

	/**
	*	Admin and web GET homepage
	*/
	{
		method: 'GET',
		path: '/',
		handler :  function (req, res) {

			req.model.getData()
			.then(function(data){

				if (req.interface.is('admin')) {
					
					//this interface is defined at client/admin/interface.js. The view function MUST return the view rendered  as a string.
					res.send(  req.interface.render('admin_panel', data));
				} else {
					
					//this interface is defined at client/web/interface.js. The view function MUST return the view rendered  as a string.
					res.send(  req.interface.render('homepage', data));
				}
			}, function(err){
				res.send("There was a problem when retrieving the data from the database.");
			});


			/**
			 * protip: if you name your views identical for a certain path, you won't need to check req.interface.is('something')
			 * 
			 * also, most of the routes will probably only be available for a single interface, and thus making the "if" redundant.
			 * 
			 * To restrict the route to a certain interface, use the access object:
			 * 
			 * 	access: {
			 *		sockets: ["ADMIN", "REGISTERED","PUBLIC"],   //here we restrict the route depending on the keys held by the current user
			 *		interfaces: ["web","admin"] //here we restrict the route depending on the current interface
			 *	}
			 * 
			 * also, if you restrict access for a route, you should also handle acess restriction:
			 * 
			 * 	access_violation : function(req, res){
			 *		res.send( "Access violation" );
			 *	}
			 * 
			 * 
			 *  */
		}
	}
];
