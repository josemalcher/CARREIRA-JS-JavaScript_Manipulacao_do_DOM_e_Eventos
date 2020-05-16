//01 - Propagação de Eventos com JavaScript

//document.addEventListener("click", eventClick);
function eventClick() {
    alert("clicou");
}

// 02 - Cancelar a Propagação Padrão de Eventos com JavaScript
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

// 03 - Eventos de Mouse com JavaScript
