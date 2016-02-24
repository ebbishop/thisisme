var router = require('express').Router();

var pathToIndex = __dirname + '/../public/index.html';

router.get('/', function(req, res ,next){
  console.log('in router');
  res.send()
})

module.exports = router;
