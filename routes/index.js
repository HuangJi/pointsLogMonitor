var express = require('express');
var router = express.Router();
var tsv = require('node-tsv-json');
var fs = require('fs');







/* GET home page. */
router.get('/', function(req, res, next) {
	tsv({
	    input: "../points_log.txt",
	    output: "output.json",
	    parseRows: true
	}, function(err, result) {
		var labelList = [];
		var dataList = [];
	    // console.log(result.length);
	    var list = [];
	    var str = '';
	    for (var i = 0; i < result.length; i++) {
	        list = result[i][0].split(' ');
	        str = list[0] + ' ' + list[1];
	        label = str.substring(0, str.length - 1);
	        labelList.push(label);
	        dataList.push(list[2]);
	    };
	    console.log('labelList:' + labelList.length);
		console.log('dataList:' + dataList.length);
		res.render('index', { title: 'Express', labelList:labelList, dataList:dataList });
	});
});

module.exports = router;
