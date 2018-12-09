var keystone = require('keystone');
var Types = keystone.Field.Types;

var Writing = new keystone.List('Writing', {
    map: {
        name: 'title'
    },
});

Writing.add({
    title: {
        type: String,
        required: true,
        initial: true
    },
    type: {
        type: Types.Select,
        options: 'nonfiction, fiction, memoir, short story, other',
        default: 'other',
        index: true,
        initial: true
    },
    url: {
        type: Types.Url,
        note: 'You must include https:// at the start of the url.'
    },
    description: {
        type: Types.Html,
        wysiwyg: true,
        note: "Optional"
    },
    publication: {
        type: String
    },
    releaseDate: {
        type: Types.Date,
        default: Date.now
    }

});

//I think this defines what shows in the adminUI
Writing.defaultColumns = 'title, type';
Writing.register();