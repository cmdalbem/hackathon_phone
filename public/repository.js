// Repositório de quotes

var quotes = [
	{imgPath: "", text: "Frase 1"},
	{imgPath: "", text: "Frase 2"},
	{imgPath: "", text: "Frase 3"},
	{imgPath: "", text: "Frase 4"},
	{imgPath: "", text: "Frase 5"},
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