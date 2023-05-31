let num1;
let num2;
let operacion;

function num(numero){
    document.getElementById("resultado").value =
        document.getElementById("resultado").value + numero;
}

function convertir(idCampo){
    return parseInt(document.getElementById(idCampo).value);
}

function op(funcion){
    operacion= funcion
    num1=convertir('resultado')
    console.log(num1);
    document.getElementById("resultado").value=''
}


function igual(){  
    num2=convertir('resultado')
    console.log(num2);
    resolver(num1, num2)
}

function resolver(numero1, numero2){
    var result=operacion(numero1,numero2)
    document.getElementById("resultado").value=result
}

function resetear(){
    num1=0
    num2=0
    operacion=undefined
    document.getElementById("resultado").value=''
}