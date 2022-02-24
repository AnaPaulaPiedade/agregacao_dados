const poloniex = require('../provider/poloniexConsumer');
const connect = require('../../repository');

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
      var obj = [];
      var adicionar ; 


        let timer = setInterval(async () => { 
            console.log('hello');
            let teste = await poloniex.poloniexConsumer();
            counter_1 ++;
            counter_5 ++;
            counter_10 ++;
            counter_11 ++;

            adicionar = cotacoes.push(teste.data);
            adicionar = obj.push({"BTC_BTS": {
                "id": 14,
                "last": "0.00000055",
                "lowestAsk": "0.00000056",
                "highestBid": "0.00000054",
                "percentChange": "0.00000000",
                "baseVolume": "0.01252357",
                "quoteVolume": "23206.50056866",
                "isFrozen": "0",
                "postOnly": "0",
                "marginTradingEnabled": "0",
                "high24hr": "0.00000056",
                "low24hr": "0.00000053"
            },
            "BTC_DASH": {
                "id": 24,
                "last": "0.00255461",
                "lowestAsk": "0.00255466",
                "highestBid": "0.00255419",
                "percentChange": "0.00019967",
                "baseVolume": "0.32138083",
                "quoteVolume": "127.53960109",
                "isFrozen": "0",
                "postOnly": "0",
                "marginTradingEnabled": "0",
                "high24hr": "0.00256323",
                "low24hr": "0.00246421"
            }
        });

            //console.log(obj);
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
                //console.log('auxiliar', aux_1 );
                //console.log('copia', copy );
            

            var pos = aux_1, n = 3;
            var ultima_cotacao = copy.splice(pos, n);
                for( var i = 0 in ultima_cotacao) {
                    console.log('ultima', ultima_cotacao[i]);
                    BTC_BTS.push(ultima_cotacao[i].BTC_BTS);
                    i++;
                }
                //console.log('ultima_cotacao ', ultima_cotacao  );

                var open = BTC_BTS[0].last;
                var close = BTC_BTS[BTC_BTS.length - 1].last;
                console.log('open', open);
                console.log('close', close);
                var takeHighValue  = [];
                var takeLowValue = [];

                for (var j = 0 in BTC_BTS){
                    //percorre vetor achar as info
                    takeHighValue.push(BTC_BTS[j].highestBid);
                    takeLowValue.push(BTC_BTS[j].lowestAsk);
                }

                //console.log('takeHighValue', takeHighValue);
                var highValue = takeHighValue.reduce(function(a, b) {
                    return Math.max(a, b);
                  }, -Infinity);

                console.log('highValue', highValue);

                var lowValue = takeLowValue.reduce(function(a, b) {
                    return Math.min(a, b);
                  }, +Infinity);

                console.log('lowValue', lowValue);

                var cone =  await connect.index();
                console.log('cone', cone);
                
                //salvo o ultimo pq vai ser o que foi rodado dentro de um minuto 
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














