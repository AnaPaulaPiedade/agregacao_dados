const mysql = require('mysql');
const {DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_DATABASE } = require('../.env');
const {DB_TEST_HOST, DB_TEST_PORT, DB_TEST_USER, DB_TEST_PASS, DB_TEST_DATABASE } = require('../.env_test');
const env = process.env.NODE_ENV



const pool = mysql.createPool({
    connectionLimit:30,
    host     : DB_HOST,
    port     : DB_PORT,
    user     : DB_USER,
    password : DB_PASS,
    database : DB_DATABASE
});

console.log('pool => criado');

pool.on('release', () => console.log('pool => conexão retornada')); 

process.on('SIGINT', () => 
    pool.end(err => {
        if(err) return console.log(err);
        console.log('pool => fechado');
        process.exit(0);
    })
); 

module.exports = pool;