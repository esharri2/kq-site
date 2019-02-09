var keystone = require("keystone");
var moment = require("moment");
var async = require("async");

module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.section = "projects";

  var Project = keystone.list("Project");

  view.on("init", function(next) {
    var q = Project.model.find();
    q.exec(function(err, results) {
      let data = results.map(result => {
        const newObject = { ...result._doc };
        if (result.releaseDate) {
          const formattedDate = moment(result.releaseDate).format("MMMM YYYY");
          newObject.formattedDate = formattedDate;
        } else {
          newObject.formattedDate = null;
        }
        return newObject;
      });

      let sortedData = data.sort((a, b) => {
        if (moment(a.releaseDate) > moment(b.releaseDate)) {
          return -1;
        }
        if (a.releaseDate < b.releaseDate) {
          return 1;
        }
        return 0;
      });

      let unproduced = {
        films: [],
        plays: [],
        episodic: [],
        webseries: []
      };

      sortedData.forEach(item => {
        if (!item.released) {
          if (item.type === "short film" || item.type === "feature film") {
            unproduced.films.push(item);
          } else if (item.type === "play") {
            unproduced.plays.push(item);
          } else if (item.type === "episodic") {
            unproduced.episodic.push(item);
          } else if (item.type === "web series") {
            unproduced.webseries.push(item);
          }
        }
      });

      locals.projects = sortedData;
      locals.unproduced = unproduced;
      next(err);
    });
  });

  view.render("projects");
};
