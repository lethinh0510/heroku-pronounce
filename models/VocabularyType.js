/**
 * Created by lxthinh on 8/19/2017.
 */
var keystone = require('keystone');

var VocabularyType = new keystone.List('VocabularyType', {
	autokey: {from: 'name', path: 'key', unique: true},
	label: 'VocabularyTypes'
});


VocabularyType.add({
	name: {type: String, initial: true, required: true, index: true},
	description: {type: String}
});
VocabularyType.relationship({ref: 'Vocabulary', refPath: 'vocabularyType'});
VocabularyType.defaultColumns = 'title, description';
VocabularyType.track = true;
VocabularyType.register();
