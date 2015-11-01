// Repositório de quotes

var quotes = [
	{imgPath: "", audioPath: "therealvoyage.mp3", text: "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes. - Marcel Proust"},
	{imgPath: "", audioPath: "dontputoff.mp3", text: "Don't put off for tomorrow what you can do today because if you enjoy it today, you can do it again tomorrow. - James A. Michene"},
	{imgPath: "", audioPath: "asforme.mp3", text: "As for me, I am tormented with an everlasting itch for things remote. I love to sail forbidden seas, and land on barbarous coasts. ― Herman Melville (Moby-Dick)"},
	{imgPath: "", audioPath: "theonlyway.mp3", text: "The only way to get rid of a temptation is to yield to it. Resist it, and your soul grows sick with longing for the things it  has forbidden to itself. - Oscar Wilde"},
	{imgPath: "", audioPath: "startbydoing.mp3", text: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible. - Author Francis os Assisi"},
]; 


module.exports = {
	getQuote : function(id) {
		if(id != undefined && id <= quotes.length) {
			return quotes[id];
		}
	},
	getRandomQuote : function() {
		var len = quotes.length;
		return quotes[Math.floor((Math.random() * len-1))]
	},
	setQuote : function(quote) {
		quotes.push(quote);
		return quotes.length;
	},
	getAll : function()  {
		return quotes;
	}
};