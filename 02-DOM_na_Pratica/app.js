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
/*

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
*/

// 05 - getElementsByClassName JavaScript

/*
setTimeout(function () {

   //console.log(document.getElementsByClassName('haga5'))
    document.getElementsByClassName('haga5')[0].innerHTML = "<h5>ALTERADO PELO JS - ClassName</h5>";


}, 1000);
*/


// 06 - querySelector JavaScript
/*

setTimeout(function () {
    console.log(document.querySelector('div'));
    document.querySelector('div').innerHTML = '<strong>Primeira DIv qUERY sELECTOR</strong>';
}, 1000);
*/


//  07 - querySelectorAll JavaScript
/*

setTimeout(function () {
    console.log(document.querySelectorAll('div'));
    document.querySelectorAll('div')[1].innerHTML = "<strong>DIv 2 </strong>"
}, 1000);
*/


// 08 - parentNode JavaScript
/*
setTimeout(function () {
    console.log(document.querySelector('li').parentNode);
    document.querySelector('li').parentNode.setAttribute('style', 'background: red');
}, 1000);
*/


// 09 - children, firstElementChild, lastElementChild JavaScript
/*

setTimeout(function () {
    console.log(document.querySelector('ul').children); // HTMLCollection(5) [li, li, li, li, li]
    var ul = document.querySelector('ul');
    var li = ul.children;

    li[0].innerHTML = "Alterado pelo JS";

    console.log(ul.firstElementChild);
    console.log(ul.lastElementChild);

}, 1000);
*/

// 10 - hasAttribute, getAttribute, setAttribute JavaScript
/*

setTimeout(function () {

    console.log(document.getElementById('teste-id'));
    console.log(document.getElementById('teste-id').hasAttribute('id')); // true
    console.log(document.getElementById('teste-id').hasAttribute('class')); // false

    console.log(document.getElementById('teste-id').getAttribute('attr-value')); // false

    document.getElementById('teste-id').setAttribute('style', 'display:none');


}, 1000);
*/


// 11 - insertAdjacentHTML JavaScript
/*
setTimeout(function () {

    var ul = document.querySelector('ul');
    ul.insertAdjacentHTML('beforebegin', '<hr>');
    ul.insertAdjacentHTML('afterend', '<hr>');
    ul.insertAdjacentHTML('afterbegin', '<li>AFTER BEGIN</li>');
    ul.insertAdjacentHTML('beforeend', '<li>Before END</li>');


}, 1000);
*/


// 12 - srollTo e scroll (topo e footer) com JavaScript

function footer() {
    var altura = document.body.scrollHeight
    //window.scrollTo(0, altura);
    window.scroll({
        top: altura,
        left: 0,
        behavior: 'smooth'
    });

}
function topo() {
    //window.scrollTo(0, 0);
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

