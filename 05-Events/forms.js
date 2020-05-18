function register(event) {

    event = event || window.event // IE
    if (event.preventDefault) event.preventDefault();
    if (event.returnValue) event.returnValue();

    swal("Usuário cadastrado", "", "success")
    return false;


}