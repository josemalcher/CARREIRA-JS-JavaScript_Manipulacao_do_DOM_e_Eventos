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


#### 05 - getElementsByClassName JavaScript


#### 06 - querySelector JavaScript


#### 07 - querySelectorAll JavaScript


#### 08 - parentNode JavaScript


#### 09 - children, firstElementChild, lastElementChild JavaScript


#### 10 - hasAttribute, getAttribute, setAttribute JavaScript


#### 11 - insertAdjacentHTML JavaScript


#### 12 - srollTo e scroll (topo e footer) com JavaScript



[Voltar ao Índice](#indice)

---


## <a name="parte3">3 - Formulários</a>



[Voltar ao Índice](#indice)

---


## <a name="parte4">4 - DOM CSS</a>



[Voltar ao Índice](#indice)

---


## <a name="parte5">5 - Events</a>



[Voltar ao Índice](#indice)

---

