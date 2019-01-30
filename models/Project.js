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
<<<<<<< HEAD
    options: "short film, feature film, play, episodic, web series, other",
=======
    options: "films, plays, episodic, web series, other",
>>>>>>> 391f2574f5b08082c1b1e94bea5c664f97deeee6
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
<<<<<<< HEAD
  },
  released: {
    type: Types.Boolean,
    deafault: false
=======
>>>>>>> 391f2574f5b08082c1b1e94bea5c664f97deeee6
  }
});

//I think this defines what shows in the adminUI
Project.defaultColumns = "title, type";
Project.register();
