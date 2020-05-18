# JAVASCRIPT MANIPULAÇÃO DO DOM E EVENTOS

https://academy.especializati.com.br/curso/javascript-manipulacao-dom-eventos

APRENDA EXPLORAR AO MÁXIMOS OS RECURSOS NATIVOS DO JAVASCRIPT PARA MANIPULAR DE FORMA MUITO SIMPLES OS RECURSOS DO DOM DE UMA PÁGINA HTML, E AINDA TRABALHE COM OS EVENTOS JS.

## <a name="indice">Índice</a>

1. [Introdução ao DOM](#parte1)     
2. [DOM na Prática](#parte2)     
3. [Formulários](#parte3)     
4. [DOM CSS](#parte4)     
5. [Events](#parte5)     
---


## <a name="parte1">1 - Introdução ao DOM</a>

#### 01 - O que é DOM 


#### 02 - Preparando o Projeto e document JavaScript 

```js
console.log(document.title = "Novo título da página");
console.log(document);
```

[Voltar ao Índice](#indice)

---


## <a name="parte2">2 - DOM na Prática</a>

#### 01 - document.write JavaScript

```js
document.write('<h1>Impressão Via JS</h1>');
document.write('<p>Impressão Via JS</p>');
```

#### 02 - getElementById JavaScript

```js

setTimeout(function () {
    //document.getElementById('parag').innerHTML = "SOU O TEXTO DO JS";
    document.getElementById('parag').innerText  = "SOU O TEXTO DO JS";
    document.getElementById('texto2').innerHTML  = "<strong>SOU O TEXTO DO JS</strong>";
}, 3000);

```

#### 03 - getElementsByName JavaScript

- [https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName)

```js

setTimeout(function () {
    console.log(document.getElementsByName("div-name"));
    console.log(document.getElementsByName("div-name")[1].innerText = "Alterando o segundo");

    var nameTag = document.getElementsByName("div-name");
    nameTag[0].innerText = "Ajustando o primeiro name;";

}, 1000);
```

#### 04 - getElementsByTagName JavaScript

```js
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
```

#### 05 - getElementsByClassName JavaScript

```js
setTimeout(function () {

   //console.log(document.getElementsByClassName('haga5'))
    document.getElementsByClassName('haga5')[0].innerHTML = "<h5>ALTERADO PELO JS - ClassName</h5>";

}, 1000);
```

#### 06 - querySelector JavaScript

```js
setTimeout(function () {
    console.log(document.querySelector('div'));
    document.querySelector('div').innerHTML = '<strong>Primeira DIv qUERY sELECTOR</strong>';
}, 1000);
```

#### 07 - querySelectorAll JavaScript

```js
setTimeout(function () {
    console.log(document.querySelectorAll('div'));
    document.querySelectorAll('div')[1].innerHTML = "<strong>DIv 2 </strong>"
}, 1000);
```

#### 08 - parentNode JavaScript

```js
setTimeout(function () {
    console.log(document.querySelector('li').parentNode);
    document.querySelector('li').parentNode.setAttribute('style', 'background: red');
}, 1000);
```

#### 09 - children, firstElementChild, lastElementChild JavaScript

```js
setTimeout(function () {
    console.log(document.querySelector('ul').children); // HTMLCollection(5) [li, li, li, li, li]
    var ul = document.querySelector('ul');
    var li = ul.children;

    li[0].innerHTML = "Alterado pelo JS";

    console.log(ul.firstElementChild);
    console.log(ul.lastElementChild);

}, 1000);
```

#### 10 - hasAttribute, getAttribute, setAttribute JavaScript

```js
setTimeout(function () {

    console.log(document.getElementById('teste-id'));
    console.log(document.getElementById('teste-id').hasAttribute('id')); // true
    console.log(document.getElementById('teste-id').hasAttribute('class')); // false

    console.log(document.getElementById('teste-id').getAttribute('attr-value')); // false

    document.getElementById('teste-id').setAttribute('style', 'display:none');

}, 1000);
```

#### 11 - insertAdjacentHTML JavaScript

```js
setTimeout(function () {

    var ul = document.querySelector('ul');
    ul.insertAdjacentHTML('beforebegin', '<hr>');
    ul.insertAdjacentHTML('afterend', '<hr>');
    ul.insertAdjacentHTML('afterbegin', '<li>AFTER BEGIN</li>');
    ul.insertAdjacentHTML('beforeend', '<li>Before END</li>');

}, 1000);
```

#### 12 - srollTo e scroll (topo e footer) com JavaScript

```js

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
```

[Voltar ao Índice](#indice)

---


## <a name="parte3">3 - Formulários</a>

#### 01 - Criar Formulários HTML5



#### 02 - Capiturar Valores Formulários com JavaScript (text, email, password)

```html
<form action="#" method="post" class="form" onsubmit="return onSubmitFunc()">
        <div class="form-group">
            <label for="nome">Nome</label>
            <input type="text" class="form-control" id="nome" name="name" placeholder="Enter Nome">
            <small id="result_name" class="form-text text-muted"></small>
        </div>
```

```js
function onSubmitFunc(event) {
    var nome = document.getElementsByName('name')[0].value;
    document.getElementById('result_name').innerText = "Olá " + nome;


    return false;
}
```


#### 03 - Capiturar Valores Formulários com JavaScript (checkbox, select, radio, textarea)

```js
function onSubmitFunc(event) {
    var nome = document.getElementsByName('name')[0].value;
    document.getElementById('result_name').innerText = "Olá " + nome;


    var state = document.getElementById('inputState').value;
    if (state == '') {
        document.getElementById('result_state').innerHTML = "<strong style='color: red '>Selecione o Estado</strong>"
    }else{
        document.getElementById('result_state').innerText = state;
    }
    console.log(state);

    console.log(document.querySelector('input[name="sexo"]:checked').value);

    console.log(document.getElementById('exampleFormControlTextarea1').value);

    console.log(document.getElementById('exampleInputEmail1').value);
    console.log(document.getElementById('exampleCheck1').checked);

    return false;
}
```


[Voltar ao Índice](#indice)

---


## <a name="parte4">4 - DOM CSS</a>

#### 01 - JavaScript Alterar CSS Página 

```html
<!doctype html>
<html lang="pt_BR">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="style.css">
    <title>04-DOM_CSS</title>
</head>
<body>
<h1 id="haga1">Modelo CSS -> JS -> CSS</h1>
<h2 id="haga2">Modelo CSS -> JS -> CSS</h2>
<hr>
<p>Parágrafo</p>
<hr>
<script src="app.js"></script>
</body>
</html>
```

```js
var bodys = document.body.style;

setTimeout(function () {

    bodys.backgroundColor = "#000";
    bodys.color = "#FFF";
    var titulo = document.getElementById("haga1");
    titulo.style.border  = "2px solid #999";
    titulo.style.padding = "10px";

}, 2000);


```

#### 02 - Mudar Cor Página Dinâmicamente com JavaScript

```html
<button type="submit" onclick="setBackGround('black')">BLACK</button>
<button type="submit" onclick="setBackGround('red')">RED</button>
```

```js
var bodys = document.body.style;

function setBackGround(color) {
    bodys.color = "#FFF"
    bodys.backgroundColor = color;
}
```

#### 03 - Criando um pisca-pisca com JavaScript

```js

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
```

[Voltar ao Índice](#indice)

---


## <a name="parte5">5 - Events</a>

#### 01 - Propagação de Eventos com JavaScript

 ```js
document.addEventListener("click", eventClick);

function eventClick() {
    alert("clicou");
}
```

#### 02 - Cancelar a Propagação Padrão de Eventos com JavaScript

```html
<a href="https://josemalcher.net" onclick="changeCor(event, 'yellow')">Link com outra função, alterar COR</a>
```

```js
function changeCor(event, cor) {
    event = event || window.event; // IE

    if (event.preventDefault()) {
        event.preventDefault();
    }
    if (event.returnValue) {
        event.returnValue;
    }
    document.body.style.background = cor;
    return false;
}
```

#### 03 - Eventos de Mouse com JavaScript

```html
<ul>
    <li onclick="alert('on click')">ON CLICK</li>
    <li ondblclick="alert('Souble CLICK')">on dbl click</li>
    <li oncontextmenu="alert('OnContextMenu'); return false;">On Context menu </li>
    <li onmousedown="alert('On Mouse Down')">On MOuse Down</li>
    <li onmouseenter="console.log('on mouse Enter')" >On Mouse Enter - Console</li>
    <li onmouseleave="console.log('on mouse Leaver')">On mouse Leaver - console</li>
    <li onmousemove="console.log('Om Mouser Move');">
        Om MOuser Move <p>Paragrafo</p>
    </li>
    <li onmouseover="console.log('Om Mouser OVER');">
        Om MOuser OVER <p>Paragrafo</p>
    </li>
    <li onmouseout="console.log('Om Mouser OUT');">
        Om MOuser OUT <p>Paragrafo</p>
    </li>
    <li onmouseup="console.log('Om Mouser UP');">
        Om MOuser up <p>Paragrafo</p>
    </li>
</ul>
```

#### 04 - Usando o SweetAlert

- [https://sweetalert.js.org/](https://sweetalert.js.org/)

```html
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
```

```js
swal ( "Oops" ,  "Something went wrong!" ,  "error" )
```

#### 05 - Eventos de carga no JavaScript

```html
<body onload="loadPage()" onresize="resizePage(event)">
```

```js

function loadPage() {
    swal("Página carregou com sucesso", '', 'success');

}

function resizePage(event) {
    //console.log(event);
    //console.log(window.innerHeight);
    var largura = window.innerWidth;
    console.log(largura);
    if (largura <= 700) {
        document.body.style.background = "#000";
    }else{
        document.body.style.background = "#fff";
    }
}
```

#### 06 - Eventos de scroll com JavaScript

```html
<!doctype html>
<html lang="pt_BR">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="style.css">
    <title>05 - Events</title>
</head>
<body>

<header id="header" class="header">
    <h1>Topo</h1>
</header>

<section class="content">
    <h2>conteudo qualquer</h2>
    <p>Outro texto 1</p>
    <p>Outro texto 1</p>
    <p>Outro texto 1</p>
    <p>Outro texto 1</p>
    <p>Outro texto 1</p>
    <p>Outro texto 1</p>
    <p>Outro texto 1</p>
    <p>Outro texto 1</p>
    <p>Outro texto 1</p>
    <p>Outro texto 1</p>
</section>

<footer>
    <p>Footer</p>
</footer>
<script src="scroll.js"></script>
</body>
</html>
```

```js
function changeScroll(event) {
    var doc = document.documentElement;
    var top = window.pageYOffset || doc.scrollTo;
    var header = document.getElementById('header');

    if (top >= 200) {
        header.classList.add('top');
    } else {
        header.classList.remove('top');
    }
}

addEventListener('scroll', changeScroll);
```

#### 07 - Eventos de Teclado com o JavaScript

```html
<input type="text" placeholder="Nome" onkeypress="keyPress(event)">
<input type="text" placeholder="Nome" onkeydown="keyDown(event)">
<input type="text" placeholder="Nome" onkeyup="keyUp(event)">

<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script src="teclado.js"></script>
```

```js
function keyPress(event) {
    console.log(event);
}

function keyDown(event) {
    console.log(event);
}

function keyUp(event) {
    console.log(event);
}

document.onkeydown = applyKey;

function applyKey(event) {
    console.log(event);

    if (event.ctrlKey && event.keyCode == 85) {
        event = event || window.event // IE
        if (event.preventDefault) event.preventDefault();
        if (event.returnValue) event.returnValue();

        return false;

    }
    swal("Não permitido", "Vericar código Fonte", "error")
}
```

#### 08 - Eventos de Formulário com JavaScript




[Voltar ao Índice](#indice)

---

