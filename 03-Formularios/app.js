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