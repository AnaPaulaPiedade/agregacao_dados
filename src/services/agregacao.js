const poloniex = require('../provider/poloniexConsumer');
const connect = require('../../repository');
const convert = require('./eToNumber');
const takeValues = require('./takeValues');

module.exports = {
  Data() {
      let counter_1 = 0, counter_5 = 0 , counter_10 = 0, counter_11 = 0;
      let aux_1 = 0, aux_5 = 0, aux_10 = 0;
      var cotacoes = [];
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
            
            if (counter_1  == 60){
                //Vetores para tratar algumas moedas do json
                var BTC_BTS     = [];
                var BTC_DASH    = [];
                var BTC_DOGE    = [];
                var BTC_LTC     = [];
                var BTC_NXT     = [];

                console.log('1 min');
                //Faz cópia do vetor principal 
                var copy = [];
                for( var i = 0 in obj) {
                    console.log('indice', i);
                    console.log('vetor', obj[i]);
                    copy[i] =  obj[i];
                    i++;
                }
                var pos = aux_1, n = 60;
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

                takeValues.storedata(BTC_BTS, BTC_DASH,BTC_DOGE,BTC_LTC,BTC_NXT, periodicidade);
          
                aux_1 = i;
                counter_1  = 0;
                BTC_BTS = [], BTC_DASH =[]; BTC_DOGE =[]; BTC_LTC =[]; BTC_NXT =[];
            }

            if (counter_5  == 300){

                var BTC_BTS_5     = [];
                var BTC_DASH_5    = [];
                var BTC_DOGE_5    = [];
                var BTC_LTC_5     = [];
                var BTC_NXT_5     = [];

                console.log('5 min');

                var copy_5 = [];
                for( var i = 0 in obj) {
                    console.log('indice', i);
                    console.log('vetor', obj[i]);
                    copy_5[i] =  obj[i];
                    i++;
                }
                var pos = aux_5, n = 300;
                var ultima_cotacao = copy_5.splice(pos, n);
                var periodicidade = '5 min';
                for( var i = 0 in ultima_cotacao) {
                    BTC_BTS_5.push(ultima_cotacao[i].BTC_BTS);
                    BTC_DASH_5.push(ultima_cotacao[i].BTC_DASH);
                    BTC_DOGE_5.push(ultima_cotacao[i].BTC_DOGE);
                    BTC_LTC_5.push(ultima_cotacao[i].BTC_LTC);
                    BTC_NXT_5.push(ultima_cotacao[i].BTC_NXT);
                    i++;
                }

                takeValues.storedata(BTC_BTS_5, BTC_DASH_5,BTC_DOGE_5,BTC_LTC_5,BTC_NXT_5, periodicidade);
          
                aux_5 = i;
                counter_5  = 0;
                BTC_BTS_5 = [], BTC_DASH_5 =[]; BTC_DOGE_5 =[]; BTC_LTC_5 =[]; BTC_NXT_5 =[];
            }

            if (counter_10  == 600){

                var BTC_BTS_10     = [];
                var BTC_DASH_10    = [];
                var BTC_DOGE_10    = [];
                var BTC_LTC_10     = [];
                var BTC_NXT_10     = [];
                console.log('10 min');
               
                var copy_10 = [];
                for( var i = 0 in obj) {
                    console.log('indice', i);
                    console.log('vetor', obj[i]);
                    copy_10[i] =  obj[i];
                    i++;
                }
                var pos = aux_10, n = 600; //alterar o n pela quantidade de segundos
                var ultima_cotacao = copy_10.splice(pos, n);
                var periodicidade = '10 min';
                for( var i = 0 in ultima_cotacao) {
                    BTC_BTS_10.push(ultima_cotacao[i].BTC_BTS);
                    BTC_DASH_10.push(ultima_cotacao[i].BTC_DASH);
                    BTC_DOGE_10.push(ultima_cotacao[i].BTC_DOGE);
                    BTC_LTC_10.push(ultima_cotacao[i].BTC_LTC);
                    BTC_NXT_10.push(ultima_cotacao[i].BTC_NXT);
                    i++;
                }

                takeValues.storedata(BTC_BTS_10, BTC_DASH_10,BTC_DOGE_10,BTC_LTC_10,BTC_NXT_10, periodicidade);
          
                aux_10 = i;
                counter_10  = 0;
                BTC_BTS_10 = [], BTC_DASH_10 =[]; BTC_DOGE_10 =[]; BTC_LTC_10 =[]; BTC_NXT_10 =[];
                //cotacoes = [];
            }
        }, 1000);

       
       
      }
     
      
};














