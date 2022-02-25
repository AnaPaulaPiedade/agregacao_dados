const poloniex = require('../provider/poloniexConsumer');
const connect = require('../../repository');
const convert = require('./eToNumber');

module.exports = {
  saveData() {
      let counter_1 = 0;
      let counter_5 = 0;
      let counter_10 = 0;
      let counter_11 = 0;
      let aux_1 = 0;
      let aux_5 = 0;
      let aux_10 = 0;
      var cotacoes = [];
      var BTC_BTS = [];
      var BTC_DASH = [];
      var BTC_DOGE = [];
      var BTC_LTC = [];
      var BTC_NXT = [];
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


      var obj = [];
      var adicionar ; 



        let timer = setInterval(async () => { 
            console.log('hello');
            let teste = await poloniex.poloniexConsumer();
            counter_1 ++;
            counter_5 ++;
            counter_10 ++;
            counter_11 ++;

            adicionar = obj.push(teste.data);
           
            console.log('tamanho vetor principal',obj.length);
            
            if (counter_1  == 3){
                console.log('grava de 1 min');
            //Faz cópia do vetor principal 
                var copy = [];
                for( var i = 0 in obj) {
                    console.log('indice', i);
                    console.log('vetor', obj[i]);
                    copy[i] =  obj[i];
                    i++;
                }
                var pos = aux_1, n = 3;
                var ultima_cotacao = copy.splice(pos, n);
                var periodicidade = '1 min';
                for( var i = 0 in ultima_cotacao) {
                    BTC_BTS.push(ultima_cotacao[i].BTC_BTS);
                    BTC_DASH.push(ultima_cotacao[i].BTC_DASH);
                    BTC_DOGE.push(ultima_cotacao[i].BTC_DOGE);
                    BTC_LTC.push(ultima_cotacao[i].BTC_LTC);
                    BTC_NXT.push(ultima_cotacao[i].BTC_NXT);
                    i++;
                }

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
                var store =  await connect.store(moeda_BTC_BTS, periodicidade, open_BTC_BTS, low_BTC_BTS, high_BTC_BTS, close_BTC_BTS);


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
                var store1 =  await connect.store(moeda_BTC_DASH, periodicidade, open_BTC_DASH, low_BTC_DASH, high_BTC_DASH, close_BTC_DASH);

                /*for (var j = 0 in BTC_DOGE){
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
                var store2 =  await connect.store(moeda_BTC_DOGE, periodicidade, open_BTC_DOGE, low_BTC_DOGE, high_BTC_DOGE, close_BTC_DOGE);
                */
                /*for (var j = 0 in BTC_LTC){
                    //percorre vetor pegar as info
                    takeHighValue_BTC_LTC.push(BTC_LTC[j].highestBid);
                    takeLowvalues_BTC_LTC.push(BTC_LTC[j].lowestAsk);
                }
                for (var j = 0 in BTC_NXT){
                    //percorre vetor pegar as info
                    takeHighValue_BTC_NXT.push(BTC_NXT[j].highestBid);
                    takeLowvalues_BTC_NXT.push(BTC_NXT[j].lowestAsk);
                }*/

                
        
                aux_1 = i;
                counter_1  = 0;
                BTC_BTS = [];
            }
            if (counter_5  == 5){
                console.log('grava de 5 min');
                counter_5  = 0;
            }
            if (counter_10  == 9){
                console.log('grava de 10 min');
                counter_10  = 0;
                cotacoes = [];
                //console.log(cotacoes.length);
            }
        }, 10000);

       
       
      }
     
      
};














