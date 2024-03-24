var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', user: req.user });
});

router.get('/error', (req, res) => {
  res.render('error', {message: 'error'})
})

module.exports = router;
