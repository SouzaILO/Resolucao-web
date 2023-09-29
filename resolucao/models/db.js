const Sequelize = require('sequelize');


const condb = new Sequelize("resolucao", "root" , "",{
    host: "localhost",
    dialect: "mysql"
});

condb.authenticate().then(function(){
    console.log("Conectado com o Banco de Dados com sucesso!");
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro);
});

module.exports = condb; 




