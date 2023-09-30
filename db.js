const mysql = require('mysql');
const dotenv = require('dotenv');
const Sequelize = require('sequelize');
dotenv.config ({ path: '.env'});  
/*
 * @sqlConnection
 * Creates the connection, makes the query and close it to avoid concurrency conflicts.
 */
var sqlConnection = function sqlConnection(sql, values, next) {

    const condb = new Sequelize({
        database: process.env.DATABASE ,
        username: process.env.DB_USER ,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        dialect: "mysql"
    });
    
    condb.authenticate().then(function(){
        console.log("Conectado com o Banco de Dados com sucesso aqui!");
    }).catch(function(erro){
        console.log("Falha ao se conectar 22: "+erro);
    });

    // It means that the values hasnt been passed
    if (arguments.length === 2) {
        next = values;
        values = null;
    }

    var connection = mysql.createConnection( { 
        database: process.env.DATABASE ,
        user: process.env.DB_USER ,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,});
    
    connection.connect(function(err) {

        if (err !== null) {
            console.log("[MYSQL] Error connecting to mysql:" + err+'\n');
        }
    });

    connection.query(sql, values, function(err) {

        connection.end(); // close the connection

        if (err) {
            throw err;
        }

        // Execute the callback
        next.apply(this, arguments);
    });
}

module.exports = sqlConnection;