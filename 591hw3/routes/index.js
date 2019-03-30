

var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  const url = "http://api.openweathermap.org/data/2.5/weather?zip=02134,us&APPID=66a82f3570fd68f9dcf69a24811b7644";
  request.get(url,(err,response,body)=>{
    if(err){
      return console(err)
    }
    let temp=JSON.parse(body).main.temp;
    console.log(body);
    res.render('index', { a: temp });

  });

});

module.exports = router;
