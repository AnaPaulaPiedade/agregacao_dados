const app = require('./src/app');
const agregacao = require('./src/services/agregacao');

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor ativo na porta ${PORT}`)
    agregacao.Data()
}); 

