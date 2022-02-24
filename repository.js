const connection = require('./src/config/connection');

module.exports = {
    
    
    async index(req, res){

        newConnection = connection.newConnection();
        let sql = "select * from users;"
        await newConnection.connect(function(err) {
            if (err){
                newConnection.end()
                return console.log(err);
            } 
            console.log("Connected!");
            newConnection.query(sql, function (err, result) {
                if (err){
                    newConnection.end()
                    return console.log(err);
                   
                } 
                newConnection.end()
                return console.log(result);
            });
        }); 

    },

    

};