var keystone = require('keystone');
var async = require('async');

module.exports = function (req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;
    locals.section = 'workshops';
 
    var Workshop = keystone.list('Workshop');

    view.on('init', function (next) {
        var q = Workshop.model.find();
        q.exec(function(err, results){
            locals.workshop = results[0].content;
            next(err);
        })
      })

    view.render('workshops');
  };