var express = require('express');
var router = express.Router();
var gpio = require("gpio");

var gpio22 = gpio.export(22, {
	direction: 'out',
	interval: 500,

	ready: function() {
	}
});

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('trigger', { title: 'Trigger kerker'});
});

router.get('/open', function(req, res, next) {
	gpio22.set(function() {
		gpio22.set(0);
	});
	res.send('respond with a resource');
});

module.exports = router;
