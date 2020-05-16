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

    swal("Cor Alterada");

    return false;
}

// 05

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
