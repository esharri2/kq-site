var keystone = require('keystone');
var async = require('async');

module.exports = function (req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;
    locals.section = 'bio';
 
    var Bio = keystone.list('Bio');

    view.on('init', function (next) {
        var q = Bio.model.find();
        q.exec(function(err, results){
            locals.bio = results[0].content;
            next(err);
        })
      })

    view.render('bio');
  };