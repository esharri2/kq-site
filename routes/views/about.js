var keystone = require('keystone');
var async = require('async');

module.exports = function (req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;
    locals.section = 'about';
 
    var About = keystone.list('About');

    view.on('init', function (next) {
        var q = About.model.find();
        q.exec(function(err, results){
            locals.about = results[0].content;
            next(err);
        })
      })

    view.render('about');
  };