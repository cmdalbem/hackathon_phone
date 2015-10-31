var express = require('express'),
	app = express(),
	router = express.Router(),
	q = require('q');


app.use('/', router);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});


router.route('/home')
	.get(function(req, res) {
		res.end("Welcome Home.");
	})
	.post( function(req, res) {
		res.status(500).end("Don't mess with your home dude.");
	});


