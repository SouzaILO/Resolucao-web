import sqlConnection from "../db/db";
import bcrypt from "bcryptjs";

let handleLogin = (usuario, senha) => {
    return new Promise(async (resolve, reject) => {
        //check usuario is exist or not
        console.log(usuario + "service " + senha);
        let user = await findUserByEmail(usuario);
        if (user) {
            //compare password
            await bcrypt.compare(senha, user.senha).then((isMatch) => {
                if (isMatch) {
                    resolve(true);
                } else {
                    reject(`The password that you've entered is incorrect`);
                }
            });
        } else {
            reject(`This user email "${usuario}" doesn't exist`);
        }
    });
};


let findUserByEmail = (usuario) => {
    return new Promise((resolve, reject) => {
        try {
            sqlConnection(
                ' SELECT * FROM usuarios WHERE `usuario` = ?  ', usuario,
                function(err, rows) {
                    if (err) {
                        reject(err)
                    }
                    let usuario = rows[0];
                    resolve(usuario);
                }
            );
            
        } catch (err) {
            reject(err);
        }
    });
};

let findUserById = (id) => {
    return new Promise((resolve, reject) => {
        try {
            sqlConnection(
                ' SELECT * FROM `usuarios` WHERE `id` = ?  ', id,
                function(err, rows) {
                    if (err) {
                        reject(err)
                    }
                    let user = rows[0];
                    resolve(user);
                }
            );
            
        } catch (err) {
            reject(err);
        }
    });
};

let comparePassword = (senha, userObject) => {
    return new Promise(async (resolve, reject) => {
        try {
            
            await bcrypt.compare(senha, userObject.Senha).then((isMatch) => {
                
                if (isMatch) {
                    resolve(true);
                } else {
                    resolve(`The password that you've entered is incorrect`);
                }
            });
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    handleLogin: handleLogin,
    findUserByEmail: findUserByEmail,
    findUserById: findUserById,
    comparePassword: comparePassword
};