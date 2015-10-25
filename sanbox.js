var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');


function getPointAndRecord() {
	request('https://www.codecademy.com/betaAce01707', function (error, response, html) {
	    if (!error && response.statusCode == 200) {
	        var $ = cheerio.load(html);
	        target = $('main').children().eq(3).children().first().children().first().children().eq(1).children().first().text();
	        console.log(target);
	        var now = new Date();
	        var buffer = new Buffer(now.getTime() + ' ' + target + '\n');
	        fs.open('fs_test.log', 'a', function(err, fd) {
			    if (err) {
			        throw 'error opening file: ' + err;
			    }
			    fs.write(fd, buffer, 0, buffer.length, null, function(err) {
			        if (err) throw 'error writing file: ' + err;
			        fs.close(fd, function() {
			            console.log('file written');
			        })
			    });
			});
	    }
	    else {
	        console.log(error);
	    }
	});
	setTimeout(getPointAndRecord, 2000);
};

setTimeout(getPointAndRecord, 2000);



