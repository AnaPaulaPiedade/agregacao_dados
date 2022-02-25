Documentação teste prático
-Ana Paula Piedade

#Execução: 
A aplicação foi desenvolvida em node.js, tanto a aplicação quanto o banco de dados estão configurados para ser executado em containers. 
Em um primeiro momento é necessário clonar o repositório. Está disponível em:

https://github.com/AnaPaulaPiedade/agregacao_dados

Após clonar o repositório, rode os comandos:
-Para criar o projeto:
docker-compose build

-Para iniciar o projeto:
docker-compose up
Após iniciar o banco de dados no docker, acesse-o e rode o comando abaixo para ver a hora atual:

SELECT NOW();

Provavelmente vai estar no padrão americano, então, estamos a 3h a menos no fuso horário. Rode o comando abaixo para configurar o horário:

SET @@global.time_zone = '-3:00';
QUIT 

Desconecte do banco e reconecte, após rode o comando abaixo para ver se foi alterado.

SELECT NOW();

Após a configuração da data, é necessário criar a tabela de candles para armazenar as informações. Rode o script abaixo no banco:

CREATE TABLE IF NOT EXISTS candles(
    id INT AUTO_INCREMENT PRIMARY KEY,
    moeda VARCHAR(255) NOT NULL,
    periodicidade VARCHAR(255) NOT NULL,
    datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    open VARCHAR(255) NOT NULL,
    low VARCHAR(255) NOT NULL,
    high VARCHAR(255) NOT NULL,
    close VARCHAR(255) NOT NULL,
    updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted INT DEFAULT 0
)ENGINE=InnoDB;

#Sobre o sistema:

Ao rodar o docker-compose up, o arquivo index.js é executado e é iniciada a aplicação em node.js. Ainda dentro deste arquivo, é feita a chamada da função Data() do arquivo agregacao.js onde é estruturado os intervalos de tempo requisitados. 
No arquivo agregacao.js é realizado o controle de tempo para salvar a candle de 1 em 1 minuto, 5 em 5 minutos e 10 em 10 minutos.
Foi utilizada a função setInterval() para gerar um loop de 1 em 1 segundo. Dentro desta função, é feito a chamada na api pública ​Poloniex Public API no comando ​ returnTicker para consumir as informações de cotação.
As informações precisavam ser recuperadas em tempo real, desta forma estão sendo armazenadas as informações de 1 em 1 segundo.
Para a manipulação de dados, foi implementado a lógica em if’s de acordo com a quantidade de segundos equivalentes ao intervalo de cada candle, por exemplo 1 minuto = 600000 milissegundos = 60 segundos.
Em cada if, é realizada a inicialização das variáveis e é feito uma cópia do array principal que está recebendo as informações em tempo real, pois o principal não poderia ser modificado porque outros intervalos vão utilizar estas informações. 
Com a cópia do array, é feita uma manipulação neste mesmo array para pegar apenas o último intervalo. Por exemplo, quando passar um minuto vai ser salvo no banco as informações e o vetor principal continua recebendo valores até completar 10 minutos, onde ele será esvaziado para não acumular muitos dados. Porém, no segundo minuto, não poderão ser gravados as duas posições do array, e sim, somente o último. Desta forma o array ultima_cotacao terá apenas o último minuto, o primeiro já foi gravado.
No vetor ultima_cotacao está o json recuperado da api naquele intervalo, e para obter as informações de cada moeda foi feito uma manipulação em um loop para pegar os objetos. Neste projeto, foi utilizado apenas 5 moedas (5 objetos) do json devido ao tamanho do arquivo.
Após, é realizada a chamada na função storeData() do arquivo takeValues.js onde é realizado a manipulação dos dados, como por exemplo: Encontrar valores máximos e mínimos, o último valor,  nas posições do array para serem gravados no banco.
Depois, é feita a chamada na função store() do arquivo repository.js, para gravar no banco as informações de cada moeda.
O tipo de conexão com o banco foi o connectinPool que permite conexões simultâneas, por ter que abrir várias conexões devido a divisão das informações em arrays e em intervalos de tempo conflitantes. 

#Melhorias:
A forma como foi feita a manipulação dos dados, não é muito ágil para grande quantidade de dados, então teria um esforço maior para criar os arrays para todos os objetos do json e contemplar todas as moedas.
Foram realizadas pesquisas sobre outras funções ou ferramentas em node.js para otimizar o tratamento de dados, mas não consegui adequar para este cenário. Precisaria aprofundar mais no estudo das bibliotecas. Então fiz com os arrays e com menos exemplos.
Acredito que em linguagens como phyton tenha uma maneira melhor também.

O maior tempo investido foi no entendimento da demanda, como funcionava as candles, o que era cada informação do json e modelar a questão do intervalo. E também o tempo investido na manipulação dos dados.

#Teste unitário: 
O teste unitário é uma skill que ainda não tenho domínio. Estudei e criei uma estrutura no código, porém não consegui aplicar o teste para o cenário deste sistema. A forma como pensei foi:

Criar um armazenamento com alguns arquivos json e depois fazer a chamada no teste da função storeData() do arquivo takeValues.js,  verificando as informações de quando foi aberta a candle, fechada, valor mais alto e mínimo. Como vou ter esse armazenamento do json em uma quantidade menor de dados, poderia conferir se o resultado retornado é o resultado esperado, pois já saberia esses valores.
De alguma forma semelhante ao exemplo abaixo:

test("resultados devem possuir os mesmo atributos",
    () => {
        let geladeira = produto.findGeladeiraById(12)
        expect(geladeira).toEqual({preco: 1249.99, ano: '2017', modelo: 'Eletrolux'})
})


Ferramentas de apoio no desenvolvimento:
Insomnia, Vscode, Workbench



