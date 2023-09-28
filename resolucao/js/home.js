// funcao para realizar o login
function login(){

    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if(usuario == "admin" && senha == "admin"){
        window.location.href = "../resolucao/paginas/inicial.html";
        console.log("Login realizado com sucesso!");
    }else{
        console.log("Usuário ou senha inválidos!");
    }
}