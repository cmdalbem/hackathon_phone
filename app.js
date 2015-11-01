var express = require('express'),
	app = express(),
	fs = require('fs'),
	q = require('q'),
	bodyparser = require('body-parser'),
	repo = require('./public/repository.js'), 
	phoneAudio = require('./audio/syscall.js'), 
	phone = require('./public/phone.js');

app.use(express.static('public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

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

app.get('/phone/ring/:id', function(req, res) {
	//phone.ring();
	// phoneAudio.playMp3('audio/bell.mp3');
	var id = req.params.id;
	console.log("call phone to play " +  id);
	phone.ring();

	res.status(200).end();
});

app.get('/phone/play/:id', function(req, res) {
	phone.playQuote(req.params.id);
	console.log("phone play id:"+req.params.id);
	res.status(200).end();
});

// app.post('/phone/send', function(req, res) {
// 	//var audioArray = new Buffer();
// 	var readerStream = new fs.createReadStream(req.body.speech, {encoding: 'base64'});
// 	var writeStream = new fs.createWriteStream("audio/speech.wav");

// 	phone.writeHeader(writeStream);
// 	writeStream.pipe(readerStream);

//     stream.on("end", function() {
//         console.log('stream ended');
//         	phoneAudio.playFile('audio/speech.wav');
        
//     });

	
// });


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
