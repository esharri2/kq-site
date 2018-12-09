var keystone = require('keystone');
var moment = require('moment');
var async = require('async');

module.exports = function(req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;
    locals.section = 'projects';

    var Project = keystone.list('Project');

    view.on('init', function(next) {
        var q = Project.model.find();
        q.exec(function(err, results) {
            let data = results.map((result) => {
                const newObject = { ...result._doc
                };
                const formattedDate = moment(result.releaseDate).format('MMMM YYYY');
                newObject.formattedDate = formattedDate;
                return newObject;
            })

            let sortedData = data.sort((a, b) => {
                if (moment(a.releaseDate) > moment(b.releaseDate)) {
                    console.log("gt!");
                    return -1
                }
                if (a.releaseDate < b.releaseDate) {
                    console.log("lt!");
                    return 1
                }
                console.log("eq!")
                return 0;
            })

            locals.projects = sortedData;
            next(err);
        })
    })

    view.render('projects');
};