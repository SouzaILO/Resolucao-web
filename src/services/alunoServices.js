import sqlConnection from "../db/db";

var alunos = [];
function FillAlunos() {
    try {
        sqlConnection(
            ' SELECT * FROM `alunos`',
            function(err, rows) {
                if (err) {
                    return(err)
                }
                alunos = rows;
                //console.log(alunos);
                 
            }
        );
        return(alunos);
        
    } catch (err) {
        console.log(err);
    }
}

let findalunos = () => {
    return new Promise((resolve, reject) => {
        try {
            sqlConnection(
                ' SELECT * FROM `alunos`',
                function(err, rows) {
                    if (err) {
                        reject(err)
                    }
                    let usuario = rows;
                    resolve(usuario);
                }
            );
            
        } catch (err) {
            reject(err);
        }
    });
};


module.exports = {
    FillAlunos: FillAlunos,
    findalunos: findalunos
};