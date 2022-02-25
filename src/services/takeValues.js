const connect = require('../../repository');
const convert = require('./eToNumber');
const agregacao = require('./agregacao');

var takeHighValue_BTC_BTS  = [];
var takeHighValue_BTC_DASH = [];
var takeHighValue_BTC_DOGE = [];
var takeHighValue_BTC_LTC = [];
var takeHighValue_BTC_NXT = [];
var takeLowvalues_BTC_BTS = [];
var takeLowvalues_BTC_DASH = [];
var takeLowvalues_BTC_DOGE = [];
var takeLowvalues_BTC_LTC = [];
var takeLowvalues_BTC_NXT = [];

module.exports = {

    storedata(BTC_BTS, BTC_DASH,BTC_DOGE,BTC_LTC,BTC_NXT, periodicidade){
    for (var j = 0 in BTC_BTS){
        //percorre vetor pegar as info
        takeHighValue_BTC_BTS.push(BTC_BTS[j].highestBid);
        takeLowvalues_BTC_BTS.push(BTC_BTS[j].lowestAsk);
    }
    var high_BTC_BTS = convert.eToNumber(takeHighValue_BTC_BTS.reduce(function(a, b) {
        return Math.max(a, b);
      }, -Infinity));
    var low_BTC_BTS = convert.eToNumber(takeLowvalues_BTC_BTS.reduce(function(a, b) {
        return Math.min(a, b);
      }, +Infinity));
    var moeda_BTC_BTS = 'BTC_BTS';
    var open_BTC_BTS = BTC_BTS[0].last;
    var close_BTC_BTS = BTC_BTS[BTC_BTS.length - 1].last;

    var store = connect.store(moeda_BTC_BTS, periodicidade, open_BTC_BTS, low_BTC_BTS, high_BTC_BTS, close_BTC_BTS);
    

    for (var l = 0 in BTC_DASH){
        //percorre vetor pegar as info
        takeHighValue_BTC_DASH.push(BTC_DASH[l].highestBid);
        takeLowvalues_BTC_DASH.push(BTC_DASH[l].lowestAsk);
    }
    
    var high_BTC_DASH = convert.eToNumber(takeHighValue_BTC_DASH.reduce(function(a, b) {
        return Math.max(a, b);
      }, -Infinity));
    var low_BTC_DASH = convert.eToNumber(takeLowvalues_BTC_DASH.reduce(function(a, b) {
        return Math.min(a, b);
      }, +Infinity));
    var moeda_BTC_DASH = 'BTC_DASH';
    var open_BTC_DASH = BTC_DASH[0].last;
    var close_BTC_DASH = BTC_DASH[BTC_DASH.length - 1].last;
    var store1 = connect.store(moeda_BTC_DASH, periodicidade, open_BTC_DASH, low_BTC_DASH, high_BTC_DASH, close_BTC_DASH);

    for (var j = 0 in BTC_DOGE){
        //percorre vetor pegar as info
        takeHighValue_BTC_DOGE.push(BTC_DOGE[j].highestBid);
        takeLowvalues_BTC_DOGE.push(BTC_DOGE[j].lowestAsk);
    }
    var high_BTC_DOGE = convert.eToNumber(takeHighValue_BTC_DOGE.reduce(function(a, b) {
        return Math.max(a, b);
      }, -Infinity));
    var low_BTC_DOGE = convert.eToNumber(takeLowvalues_BTC_DOGE.reduce(function(a, b) {
        return Math.min(a, b);
      }, +Infinity));
    var moeda_BTC_DOGE = 'BTC_DOGE';
    var open_BTC_DOGE = BTC_DOGE[0].last;
    var close_BTC_DOGE = BTC_DOGE[BTC_DOGE.length - 1].last;
    var store2 = connect.store(moeda_BTC_DOGE, periodicidade, open_BTC_DOGE, low_BTC_DOGE, high_BTC_DOGE, close_BTC_DOGE);

    for (var j = 0 in BTC_LTC){
        //percorre vetor pegar as info
        takeHighValue_BTC_LTC.push(BTC_LTC[j].highestBid);
        takeLowvalues_BTC_LTC.push(BTC_LTC[j].lowestAsk);
    }
    var high_BTC_LTC = convert.eToNumber(takeHighValue_BTC_LTC.reduce(function(a, b) {
        return Math.max(a, b);
      }, -Infinity));
    var low_BTC_LTC= convert.eToNumber(takeLowvalues_BTC_LTC.reduce(function(a, b) {
        return Math.min(a, b);
      }, +Infinity));
    var moeda_BTC_LTC = 'BTC_LTC';
    var open_BTC_LTC = BTC_LTC[0].last;
    var close_BTC_LTC = BTC_LTC[BTC_LTC.length - 1].last;
    var store3 = connect.store(moeda_BTC_LTC, periodicidade, open_BTC_LTC, low_BTC_LTC, high_BTC_LTC, close_BTC_LTC);

    for (var j = 0 in BTC_NXT){
        //percorre vetor pegar as info
        takeHighValue_BTC_NXT.push(BTC_NXT[j].highestBid);
        takeLowvalues_BTC_NXT.push(BTC_NXT[j].lowestAsk);
    }
    var high_BTC_NXT = convert.eToNumber(takeHighValue_BTC_NXT.reduce(function(a, b) {
        return Math.max(a, b);
      }, -Infinity));
    var low_BTC_NXT= convert.eToNumber(takeLowvalues_BTC_NXT.reduce(function(a, b) {
        return Math.min(a, b);
      }, +Infinity));
    var moeda_BTC_NXT = 'BTC_NXT';
    var open_BTC_NXT = BTC_NXT[0].last;
    var close_BTC_NXT = BTC_NXT[BTC_NXT.length - 1].last;
    var store3 = connect.store(moeda_BTC_NXT, periodicidade, open_BTC_NXT, low_BTC_NXT, high_BTC_NXT, close_BTC_NXT);

 
    return open_BTC_BTS, low_BTC_BTS, high_BTC_BTS, close_BTC_BTS, open_BTC_DASH, low_BTC_DASH, high_BTC_DASH, close_BTC_DASH,moeda_BTC_BTS,
    moeda_BTC_DOGE,open_BTC_DOGE, low_BTC_DOGE, high_BTC_DOGE, close_BTC_DOGE, moeda_BTC_LTC,open_BTC_LTC, low_BTC_LTC, high_BTC_LTC, close_BTC_LTC,
    moeda_BTC_NXT,open_BTC_NXT, low_BTC_NXT, high_BTC_NXT, close_BTC_NXT;
    
    }
};