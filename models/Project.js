var keystone = require("keystone");
var Types = keystone.Field.Types;

var Project = new keystone.List("Project", {
  map: {
    name: "title"
  }
});

Project.add({
  title: {
    type: String,
    required: true,
    initial: true
  },
  type: {
    type: Types.Select,
    options: "short film, feature film, play, episodic, web series, other",
    index: true,
    initial: true
  },
  url: {
    type: Types.Url,
    note: "You must include https:// at the start of the url."
  },
  description: {
    type: Types.Html,
    wysiwyg: true
  },
  image: {
    type: Types.CloudinaryImage
  },
  releaseDate: {
    type: Types.Date,
    default: Date.now
  },
  released: {
    type: Types.Boolean,
    deafault: false
  }
});

//I think this defines what shows in the adminUI
Project.defaultColumns = "title, type";
Project.register();
