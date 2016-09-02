
module.exports = function(CORE, interface_name){

	var web_intf = CORE.factories.interface();


	var doT = require("dot");
	web_intf.dots = doT.process({path: "./client/interfaces/web/views"});

	web_intf.view('homepage', function(data){

		return web_intf.dots.react_base({
			pageData : {
				posts		: data.posts, 
				media		: data.media, 
				settings 	: {
					homepage_tagline : data.settings.homepage_tagline,
					homepage_subtext : data.settings.homepage_subtext
				},
				tags		: data.tags,
				auth		: data.auth
			},

			metaData : {
				main_title 			: data.settings.main_title,
				main_title_suffix	: data.settings.homepage_meta_title_suffix,
				description			: data.settings.homepage_meta_description,
				keywords			: data.settings.homepage_meta_keywords,
				page_url			: "http://www.hognogi.com",
				image_url			: data.settings.homepage_image_url
			}
		});
	});


	web_intf.view('contact', function(data){

		return web_intf.dots.react_base({
			pageData : {},
			metaData : {
				main_title : data.settings.main_title
			}	
		});

	});


	web_intf.view('login', function(data){


		return web_intf.dots.react_base({
			pageData: {
				validation_message : data.validation_message
			},

			metaData : {
				main_title : data.settings.main_title
			}
		});
	});



	web_intf.view('post', function(data){

		return web_intf.dots.react_base({
			pageData : data
		});
	});

	web_intf.view('404', function(data){
		return web_intf.dots.react_base({
			pageData : {
				err_object: {
					err_message : "Error 404: Page not found :("
				},

				metaData : {
					main_title : "404 Page not found"
				}
			}
		});
	});

	web_intf.view('403', function(data){
		return web_intf.dots.react_base({
			pageData : {
				err_object: {
					err_message : "Error 403: Access is forbidden ;) "
				}
			},

			metaData : {
				main_title : "403 Access forbidden"
			}
		});
	});


	web_intf.view('500', function(data){
		return web_intf.dots.react_base({
			pageData : {
				err_object: {
					err_message : "Error 500: Internal server error x_x. Please help me by sending me the error report:",
					err_report : JSON.stringify(data.err_object, null, 4)
				}
			},

			metaData : {
				main_title : "500 Internal Server Error"
			}
		});
	});

	return web_intf;
};
