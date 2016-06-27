var express = require('express');
var app=express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Pet = require('../models/pet');

// 27017 is default mongo port
mongoose.connect('localhost:/27017/test');
app.use( bodyParser.json() );
//spin up server
var server=app.listen(3000, function(){
  var port = server.address().port;
  console.log("listening on port 3000, darling");
});

//base url & index path
app.get('/', function (req,res){
  res.sendFile(path.resolve('views/index.html'));
});
app.use(express.static('public'));
