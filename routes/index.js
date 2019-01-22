var keystone = require("keystone");
var importRoutes = keystone.importer(__dirname);
var middleware = require("./middleware");

//Sets up navLinks object for default template
keystone.pre("routes", middleware.initLocals);

//Import route controllers
var routes = {
  views: importRoutes("./views")
};

//Setup route bindings
exports = module.exports = function(app) {
  app.get("/", routes.views.index);
  app.get("/bio", routes.views.bio);
  app.get("/workshops", routes.views.workshops);
  app.get("/projects", routes.views.projects);
  // app.get("/writing", routes.views.writing);
  app.get("/contact", routes.views.contact);
};
