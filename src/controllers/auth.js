var sqlConnection = require('../db/db.js');

exports.login = (usuario, senha, done) => {
    console.log("usuario: "+usuario);
    console.log("senha: "+senha);
    console.log(done);
    //const { usuario, senha} = req.body;
    sqlConnection("SELECT * FROM usuarios WHERE usuario = ?", [usuario], async (error, results) => {
        if (error !== null) {
            console.log("[MYSQL] Error connecting to mysql:" + err+'\n');
            return done(err, false, {message : 'Erro ao se conectar ao banco de dados'});                
        }

        if (results.length == 0) {
            return done(null, false, {message : 'Usuário ou senha incorretos'});
        }
        var user = [];
        
    
        results.map(val => {
            user[0]=val.ID;
            user[1]=val.Usuario;
            user[2]=val.Senha;
            user[3]=val.Email;
        });

    
        console.log("meio" +user);
        if(senha == user[2]){
            return done(null, user[1]);
            //initializePassport(user,passport);
            /*res.render('inicial', 
                {
                    message: 'Bem vindo '+usuario
                });*/
        }else{
            return done(null, false, {message : 'Usuário ou senha incorretos'});
        }
    }); 
    
}