var express = require('express');

var router = express.Router();
var login = require('./../models/login');
var flowerData = require('./../models/flowerRecord');

router.post('/addClient', function (req, res, next) {
  // res.set({'Content-type':'application/json',
  // 'Access-Control-Allow-Origin':'http://localhost:4200'});
  console.log("asdasd "+req.body);
  login.findOne({'email' : req.body.email}).then( function(data){
    if(data == null)
    {
      login.create({'email': req.body.email,'password' : req.body.password}).then(function (logindata) {
        console.log("lasdasd "+ logindata._id);
        res.send(logindata._id);
      }).catch(next);
    }
    else{
      console.log("Easdasd");
    res.send(null);
    }
  })
});

router.post('/checkLogin', function (req, res, next) {
  console.log(req.body);
  login.findOne({'email':req.body.email, 'password' : req.body.password}).then(function (data){
    if(data == null)
    {
        console.log("asdsad");
        res.send(null);
    }
    else
    {
      console.log(data);
      res.send(data._id);
    }
  }).catch(next);
  
});

router.post('/insertData', function (req, res, next) {
  
  flowerData.create(req.body).then(function(data1){
    console.log(data1);
    res.send(data1);  
});
});


router.get('/searchFlowers', function (req, res) {
  flowerData.find({'id' : req.query.id}).then(function (data) {
    console.log(data);
    res.send(JSON.stringify(data));
  });
});

router.get('/faculty', function (req, res) {
  teacher.find({}).then(function (data) {
    res.send(JSON.stringify(data));
  });
});

router.get('/searchfaculty', function (req, res) {
  let Class=req.query.Class; 
  teacher.find({Class}).then(function (data) { 
    res.send(JSON.stringify(data));
  });
});

router.get('/getRatting', function (req, res) {
  let name = req.query.name;
  console.log(name);
  teacher.find({'name':name}).then(function (data) {
    console.log(data);
    res.send(JSON.stringify(data));
  });
});

router.post('/update', function (req, res, next) {
  
  console.log(req.body.review);
  let name = req.body.name;

    teacher.update({'name' : name}, {$set: {'rating': req.body.rating, 'reviews' : req.body.review}}).then(function (studentdata) {
      console.log(studentdata);
      res.send(studentdata);
    }).catch(next);
  });

  router.get('/searchTeachersName', function (req, res) {
    let name=req.query.name; 
    teacher.find({name}).then(function (data) { 
      res.send(JSON.stringify(data));
    });
  });

module.exports = router;
