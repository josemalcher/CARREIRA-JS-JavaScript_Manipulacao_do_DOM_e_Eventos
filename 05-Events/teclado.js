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