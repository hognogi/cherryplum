
var sanitizeHtml = require('sanitize-html');




module.exports = function(_config){

	function _cleanCommentSubmit(commentComponents){

		return {
			post_id  	: commentComponents.post_id,
			name	 	: sanitizeHtml(commentComponents.name),
			body	 	: sanitizeHtml(commentComponents.body),
			answer_to 	: commentComponents.answer_to,
			timestamp	: commentComponents.timestamp
		};
	};


	function _cleanMessageSubmit(messageCompoenents) {
		return {
			name	 	: sanitizeHtml(messageCompoenents.name),
			body	 	: sanitizeHtml(messageCompoenents.body),
			email	 	: sanitizeHtml(messageCompoenents.email),
			timestamp	: messageCompoenents.timestamp
		};
	};

	function _cleanString(string) {
		return sanitizeHtml( string );
	};



	return {
			cleanCommentSubmit 	: _cleanCommentSubmit,
			cleanString			: _cleanString,
			cleanMessageSubmit 	: _cleanMessageSubmit 
	};
};
