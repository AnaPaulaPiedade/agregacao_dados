const mysql = require('mysql');

const {DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_DATABASE } = require('../.env');
const {DB_TEST_HOST, DB_TEST_PORT, DB_TEST_USER, DB_TEST_PASS, DB_TEST_DATABASE } = require('../.env_test');


const env = process.env.NODE_ENV

module.exports = {

    newConnection(){
        const connection = env === 'test' ? 
        mysql.createConnection({
            host     : 'localhost',
            port     : 3306,
            user     : 'root',
            password : 'password',
            database : 'wiki_test'
        })
        :
        mysql.createConnection({
            host     : DB_HOST,
            port     : DB_PORT,
            user     : DB_USER,
            password : DB_PASS,
            database : DB_DATABASE
        })


        return connection;
    }

};