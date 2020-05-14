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
/*

setTimeout(function () {
    console.log(document.getElementsByName("div-name"));
    console.log(document.getElementsByName("div-name")[1].innerText = "Alterando o segundo");

    var nameTag = document.getElementsByName("div-name");
    nameTag[0].innerText = "Ajustando o primeiro name;";

}, 1000);
*/

// 04 - getElementsByTagName JavaScript

setTimeout(function () {

    var tagsName = document.getElementsByTagName('div');

    tagsName[0].innerHTML = '<h1>add H1</h1>';
    tagsName[1].innerHTML = '<h2>add H2</h2>';

    if (tagsName[2]) {
        tagsName[2].innerHTML = '<h3>add H3</h3>';
    } else {
        console.log("Não exite tag h3")
    }


}, 1000);

