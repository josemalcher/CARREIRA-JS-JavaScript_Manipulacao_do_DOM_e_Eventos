// 01 - document.write JavaScript

//document.write('<h1>Impressão Via JS</h1>');
//document.write('<p>Impressão Via JS</p>');

// *********************************************

// 02 - getElementById JavaScript

//document.getElementById('parag').innerHTML = "SOU O TEXTO DO JS";

setTimeout(function () {
    //document.getElementById('parag').innerHTML = "SOU O TEXTO DO JS";
    //document.getElementById('parag').innerText  = "SOU O TEXTO DO JS";
    //document.getElementById('texto2').innerHTML  = "<strong>SOU O TEXTO DO JS</strong>";
}, 3000);

// 03 - getElementsByName JavaScript

setTimeout(function () {
    console.log(document.getElementsByName("div-name"));
    console.log(document.getElementsByName("div-name")[1].innerText = "Alterando o segundo");

    var nameTag = document.getElementsByName("div-name");
    nameTag[0].innerText = "Ajustando o primeiro name;";

}, 1000);