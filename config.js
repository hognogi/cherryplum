module.exports = {
	port: process.env.CHERRYPLUM_NODEJS_PORT,
	ipaddress : process.env.CHERRYPLUM_NODEJS_IP,
	env : process.env.CHERRYPLUM_ENV || 'development',

	base_url : "/",

	default_interface : "web",

	directories : {
		routes : 			"./server/routes",
		interfaces: 		"./client/interfaces",
		helpers: 			"./server/helpers",
		factories: 			"./server/factories",
		middlewares: 		"./server/middlewares",
		repositories: 		"./server/repositories"
	},

	root_path_relative_to_core : "../",

	upload_folder_relative_to_root : "./client/res/uploads/",
	route_to_upload_folder			: "res/uploads/",

	media_validator: {
		max_size: 30000000, // 30 MiB
		allowed_mimetypes : ["image/jpeg","image/jpg", "image/pjpeg", "image/png", "image/bmp", "application/octet-stream", "video/avi", "image/gif"]

	},

	secrets : {
		jwt : process.env.CHERRYPLUM_BLOG_JWT_SECRET || "Custom string used for encoding the JWT tokens"
	},

	//
	apply_webpack_compilers : true,
	webpack_config_dev_js : require('./webpack.config.dev.js'),
	webpack_config_prod_js : require('./webpack.config.prod.js')
};
