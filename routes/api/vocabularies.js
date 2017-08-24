var keystone = require('keystone');
var Vocabulary = keystone.list('Vocabulary');

exports.list = function (req, res) {

	Vocabulary.paginate({
		page: req.query.page || 1,
		perPage: 6,
		maxPages: 10
	})
		.sort('-createdAt')
		.populate('vocabularyType', 'name')
		.exec(function (err, results) {
			if (err) return res.apiError('database error', err);
			res.apiResponse(results);
		});


};
