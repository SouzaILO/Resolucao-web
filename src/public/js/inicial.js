


var veri = 1;
function menu(){
    var menu = document.getElementById('menu-retratil');
    if (veri == 1) {
     menu.style.left = "0px";
        veri = 0;
     }else{
        menu.style.left = "-100%";
        veri = 1;
    }
}

function unlog(){
    window.location.href = "home";

}

function gohome(){
    window.location.href = "inicial";

}