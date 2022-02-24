const axios = require("axios");

module.exports = {
  poloniexConsumer() {
    let cotacoes = axios.get(
      "https://poloniex.com/public?command=returnTicker"
    );
  return cotacoes;
  },
};
