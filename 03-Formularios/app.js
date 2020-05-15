function onSubmitFunc(event) {
    var nome = document.getElementsByName('name')[0].value;
    document.getElementById('result_name').innerText = "Olá " + nome;


    return false;
}