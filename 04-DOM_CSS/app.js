var bodys = document.body.style;
/*

setTimeout(function () {

    bodys.backgroundColor = "#000";
    bodys.color = "#FFF";
    var titulo = document.getElementById("haga1");
    titulo.style.border  = "2px solid #999";
    titulo.style.padding = "10px";

}, 2000);
*/

function setBackGround(color) {
    bodys.color = "#FFF"
    bodys.backgroundColor = color;
}

var piscaPisca = document.getElementById("haga2");

function pisca() {
    piscaPisca.style.backgroundColor = "red";
    setTimeout(pisca2, 1000);
}

function pisca2() {
    piscaPisca.style.backgroundColor = "blue";
    setTimeout(pisca, 1000);
}

pisca();