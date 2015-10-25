var express = require('express');
var router = express.Router();
var tsv = require('node-tsv-json');
var fs = require('fs');



/* GET home page. */
router.get('/', function(req, res, next) {
	tsv({
	    input: "points_log",
	    output: "output.json",
	    parseRows: true
	}, function(err, result) {
		var labelList = [];
		var dataList = [];
	    var list = [];
	    var str = '';
	    for (var i = 0; i < result.length; i++) {
	        list = result[i][0].split(' ');
	        var now = new Date(parseInt(list[0]));
	        labelList.push(now.toLocaleString());
	        dataList.push(list[1]);
	    };
	    console.log('labelList:' + labelList.length);
		console.log('dataList:' + dataList.length);
		res.render('index', { title: 'Harrison\'s points monitor', labelList:labelList, dataList:dataList });
	});
});

module.exports = router;
