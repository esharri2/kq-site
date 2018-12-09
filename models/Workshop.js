var keystone = require('keystone');
var Types = keystone.Field.Types;

var Workshop = new keystone.List('Workshop', {
    // nocreate: true,
    // nodelete: true,
    label: "Workshop",
    path: "workshop",
    sortable: false,
    map: {
        name: 'title'
    }
});

Workshop.track = {
    updatedAt: true,
    updatedBy: true
}

Workshop.add({
    title: {
        type: String,
        initial: true
    },
    content: {
        type: Types.Html,
        wysiwyg: true
    }
});

Workshop.register();