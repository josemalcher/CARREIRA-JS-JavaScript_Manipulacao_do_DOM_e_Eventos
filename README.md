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



[Voltar ao Índice](#indice)

---


## <a name="parte5">5 - Events</a>



[Voltar ao Índice](#indice)

---

