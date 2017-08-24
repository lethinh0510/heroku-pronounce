/**
 * Created by lxthinh on 8/19/2017.
 */
var keystone = require('keystone');
var Types = keystone.Field.Types;

var Vocabulary = new keystone.List('Vocabulary', {
	autokey: {from: 'title', path: 'key', unique: true}
});


Vocabulary.add({
	title: {type: String, initial: true, required: true, index: true},
	mean: {type: String, required: true, initial: true},
	picture: {type: Types.CloudinaryImage, required: true, initial: true, autoCleanup: true},
	audio: {
		type: Types.Url, required: true, initial: true
	},
	pronunciation:{type:String},
	description: {type: Types.Html, wysiwyg: true, height: 300},
	vocabularyType: {type: Types.Relationship, ref: 'VocabularyType', many: false},
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now}
});
Vocabulary.defaultColumns = 'title, mean|20%, description|20%';
Vocabulary.track = true;
Vocabulary.register();
