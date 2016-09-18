
var Promise = require('bluebird');

module.exports = function(CORE){

	
	var getDataFromTheDatabaseOrSomething = function(){

		return Promise.resolve({
			an_int: 1,
			a_string: "some kind of string",
			an_array: [1,"test"],
			an_object: {
				with : "components",
				or : "something"
			}
		})
	}

	/**
	 * public export
	 */
	return {
		getDataFromTheDatabase : getDataFromTheDatabaseOrSomething
	};
};
