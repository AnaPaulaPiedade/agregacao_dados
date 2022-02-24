const app = require('./src/app');
const poloniex = require('./src/services/agregacao');

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor ativo na porta ${PORT}`)
    poloniex.saveData()
}); 

