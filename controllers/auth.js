var sqlConnection = require('../db.js');

exports.login = (req, res, next) => {
    
    const { usuario, senha} = req.body;
    sqlConnection("SELECT ID FROM usuarios WHERE usuario = ?", [usuario,senha], async (error, results) => {
        console.log(error);
        console.log(results);
    }); 
    
}