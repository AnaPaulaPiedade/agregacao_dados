const pool = require('./src/config/connection');

module.exports = {

    async store(moeda, periodicidade, open, low, high, close){
        //newConnection = connection.newConnection();        
   
        const deleted = 0;

        let sql = `INSERT INTO candles (moeda, periodicidade, open, low, high, close)
        VALUES ("${moeda}","${periodicidade}","${open}","${low}","${high}","${close}")`;

        pool.getConnection(function(err, connection){
            if(err){
                return console.log(err);
            }
        
            connection.query(sql,function(err, data){
                connection.release();
                console.log(err, data);
            });
        });
    
    }
 
};