// Repositório de quotes

var quotes = [
	"Frase 1", "Frase 2", "Frase 3", "Frase 4", "Frase 5",
];


module.exports = {
	getQuote : function(id) {
		if(id != undefined && id <= quotes.length)
			return quotes[id];

	},
	setQuote : function(quote) {
		quotes.push(quote);
		return quotes.length;
	},
	getAll : function()  {
		return quotes;
	}
};