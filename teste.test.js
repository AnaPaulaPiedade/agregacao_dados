const takeValues = require('./src/services/takeValues');


adicionar = obj.push({
	"BTC_BTS": {
		"id": 14,
		"last": "0.00000054",
		"lowestAsk": "0.00000055",
		"highestBid": "0.00000053",
		"percentChange": "0.01886792",
		"baseVolume": "0.00175370",
		"quoteVolume": "3247.59356421",
		"isFrozen": "0",
		"postOnly": "0",
		"marginTradingEnabled": "0",
		"high24hr": "0.00000054",
		"low24hr": "0.00000054"
	},
	"BTC_DASH": {
		"id": 24,
		"last": "0.00239334",
		"lowestAsk": "0.00239271",
		"highestBid": "0.00239006",
		"percentChange": "-0.01512694",
		"baseVolume": "0.43764806",
		"quoteVolume": "179.87547922",
		"isFrozen": "0",
		"postOnly": "0",
		"marginTradingEnabled": "0",
		"high24hr": "0.00247142",
		"low24hr": "0.00239006"
	},
	"BTC_DOGE": {
		"id": 27,
		"last": "0.00000343",
		"lowestAsk": "0.00000343",
		"highestBid": "0.00000342",
		"percentChange": "0.00000000",
		"baseVolume": "2.80965600",
		"quoteVolume": "815968.79034789",
		"isFrozen": "0",
		"postOnly": "0",
		"marginTradingEnabled": "1",
		"high24hr": "0.00000348",
		"low24hr": "0.00000342"
	},
	"BTC_LTC": {
		"id": 50,
		"last": "0.00285250",
		"lowestAsk": "0.00285372",
		"highestBid": "0.00285158",
		"percentChange": "0.01951463",
		"baseVolume": "30.81038298",
		"quoteVolume": "10860.11922220",
		"isFrozen": "0",
		"postOnly": "0",
		"marginTradingEnabled": "1",
		"high24hr": "0.00288007",
		"low24hr": "0.00279286"
	},
	"BTC_NXT": {
		"id": 69,
		"last": "0.00000024",
		"lowestAsk": "0.00000025",
		"highestBid": "0.00000023",
		"percentChange": "-0.04000000",
		"baseVolume": "0.07317449",
		"quoteVolume": "304893.71591157",
		"isFrozen": "0",
		"postOnly": "0",
		"marginTradingEnabled": "0",
		"high24hr": "0.00000024",
		"low24hr": "0.00000024"
	}})

var BTC_BTS     = [];
var BTC_DASH    = [];
var BTC_DOGE    = [];
var BTC_LTC     = [];
var BTC_NXT     = [];
var info        = [];
var periodicidade = '1m';
var i = 0;

for( i in obj) {
  BTC_BTS.push(obj[i].BTC_BTS);
  BTC_DASH.push(obj[i].BTC_DASH);
  BTC_DOGE.push(obj[i].BTC_DOGE);
  BTC_LTC.push(obj[i].BTC_LTC);
  BTC_NXT.push(obj[i].BTC_NXT);
  i++;
}



test("resultados devem possuir os mesmo atributos",
    () => {
        info.push(takeValues.storedata((BTC_BTS, BTC_DASH,BTC_DOGE,BTC_LTC,BTC_NXT, periodicidade)));

        for(i in info){
        console.log(info[i]);
        }
        //expect(geladeira).toEqual({preco: 1249.99, ano: '2017', modelo: 'Eletrolux'})
})