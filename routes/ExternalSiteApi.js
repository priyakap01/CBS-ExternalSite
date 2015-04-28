var express = require('express');
var router  = express.Router();
var mongoose = require('mongoose');

//Models
var ExternalSiteModel = require('../models/ExternalSiteSchema');

router.get('/getExternalProject',function (req, res) {
  ExternalSiteModel.find({}, function(err, docs){
    res.json(docs);
  });
}); 

router.get('/getExternalProjectByName/:id',function (req, res) {
  ExternalSiteModel.find({'Project_Name' : req.params.id}, function(err, docs){
    res.json(docs);
  });
}); 
router.post('/postExternalProject',function(req, res){
  ExternalSiteModel.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  });

router.get('/getExternalProjectByUserName/:id',function(req, res){
 //var userName = req.params.id;
var userName = req.params.id;
 var proName =  userName.slice(-7);
  ExternalSiteModel.findOne({'proname': proName}, function(err, docs){
        res.json(docs);
  }); 
 
});

router.delete('/deleteExternalProject/:id',function(req, res) {
  ExternalSiteModel.findByIdAndRemove(req.params.id).remove(function(err, docs) {
    res.json(docs);
  });
});

router.put('/updateExternalProject/:id',function(req, res, next) {
    ExternalSiteModel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
  
    res.json(post);
  });

});

module.exports = router;