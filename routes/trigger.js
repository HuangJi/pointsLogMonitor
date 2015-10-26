var express = require('express');
var router = express.Router();
// var gpio = require("pi-gpio");

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('trigger', { title: 'Trigger kerker'});
});

router.get('/open', function(req, res, next) {
	res.send('respond with a resource');
	// res.render('trigger', { title: 'Trigger kerker'});
});

module.exports = router;
