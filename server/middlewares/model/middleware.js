
module.exports = function(CORE){

	var repo = CORE.repos.database; //the name of the folder
	
	var getDataFromRepository = function(){
		//you usually need to somehow modify the data, but now we'll just pass it along
		return repo.getDataFromTheDatabase();
	}

	return function (req, res, next) {

		req.model = {
			getData : getDataFromRepository
		}

		next();
	};
};
