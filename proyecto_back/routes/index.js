var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Hola William' }); 
  res.send("Pruebas sin motor de vista")
});

module.exports = router;
