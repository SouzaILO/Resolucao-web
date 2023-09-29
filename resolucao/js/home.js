// funcao para realizar o login
function login(){

    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if(usuario == "admin" && senha == "admin"){
        window.location.href = "inicial.html";
        console.log("Login realizado com sucesso!");
    }else{
        document.getElementById("erro-login").innerText = "Usuario ou senha invalidas!";
        console.log("Usuário ou senha inválidos!");
    }
}