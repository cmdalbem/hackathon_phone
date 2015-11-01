// Repositório de quotes

var quotes = [
	{text: "Ring A Random", author: "or chose one →"},
	{audioPath: "therealvoyage.mp3", text: "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.", author: "Marcel Proust" },
	{audioPath: "dontputoff.mp3", text: "Don't put off for tomorrow what you can do today because if you enjoy it today, you can do it again tomorrow.", author: "James A. Michene" },
	{audioPath: "asforme.mp3", text: "As for me, I am tormented with an everlasting itch for things remote. I love to sail forbidden seas, and land on barbarous coasts.", author: "Herman Melville (Moby-Dick)" },
	{audioPath: "theonlyway.mp3", text: "The only way to get rid of a temptation is to yield to it. Resist it, and your soul grows sick with longing for the things it  has forbidden to itself.", author: "Oscar Wilde" },
	{audioPath: "startbydoing.mp3", text: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible. ", author: "Author Francis os Assisi" },
	{audioPath: "youknowyoure.mp3", text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", author: "Dr. Seuss" },
	{audioPath: "ifyoutellthetruth.mp3", text: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
	{audioPath: "ivelearnedthat.mp3", text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", author: "Maya Angelou" },
	{audioPath: "thepossessionofanything.mp3", text: "The possession of anything begins in the mind.", author: "Bruce Lee" },
]; 


module.exports = {
	getQuote : function(id) {
		if(id != undefined && id <= quotes.length) {
			return quotes[id];
		}
	},
	getRandomQuote : function() {
		var len = quotes.length-2;
		var rand = Math.floor((Math.random() * len) + 1);
		return quotes[rand];
	},
	setQuote : function(quote) {
		quotes.push(quote);
		return quotes.length; 
	},
	getAll : function()  {
		return JSON.stringify(quotes);
	}
};
