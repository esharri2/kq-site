var keystone = require('keystone');
var Types = keystone.Field.Types;

var Bio = new keystone.List('Bio', {
    label: "Bio",
    path: "bio",
    sortable: false
});

Bio.track = {
    updatedAt: true,
    updatedBy: true,
}

Bio.add({
    content: {
        type: Types.Html,
        wysiwyg: true
    },
});

Bio.register();