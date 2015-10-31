var express = require('express'),
	app = express(),
//	router = express.Router(),
	q = require('q'),
	repo = require('./public/repository.js'); 

app.use(express.static('public'));


// app.js
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


 
app.get('/', function(req, res) {
	// res.end("API listing:  /quotes => List all  :: /quote/:id  => get quote");
	res.render("index");
});

app.get('/quote/:id',function(req, res) {   
	var quote = repo.getQuote(req.params.id);
	res.status(200).send(quote);
});

app.get('/quotes',function(req, res) {
	var quotes = repo.getAll();
	res.status(200).send(quotes);
});





var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
