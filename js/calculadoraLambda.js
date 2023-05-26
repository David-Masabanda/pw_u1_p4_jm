const sumar=(num1, num2)=>{
    return num1+num2;
}

const sumarNumeros=()=>{
    var numero1=  convertir('idNumero1')
    var numero2=  convertir('idNumero2')
    document.getElementById('labelResultado').innerHTML = 
        'Resultado: ' + sumar(numero1,numero2);
}


const restar=(num1, num2)=>{
    return num1-num2;
}

const restarNumeros=()=>{
    var numero1=  convertir('idNumero1')
    var numero2=  convertir('idNumero2')
    document.getElementById('labelResultado').innerHTML = 
        'Resultado: ' + restar(numero1,numero2);
}


const multiplicar=(num1, num2)=>{
    return num1*num2;
}

const multiplicarNumeros=()=>{
    var numero1=  convertir('idNumero1')
    var numero2=  convertir('idNumero2')
    document.getElementById('labelResultado').innerHTML = 
        'Resultado: ' + multiplicar(numero1,numero2);
}


const dividir=(num1, num2)=>{
    return num1/num2;
}

const dividirNumeros=()=>{
    var numero1=  convertir('idNumero1')
    var numero2=  convertir('idNumero2')
    document.getElementById('labelResultado').innerHTML = 
        'Resultado: ' + dividir(numero1,numero2);
}

const convetir=(idCampo)=>{
    console.log('Convertir'+idCampo)
    return parseInt(document.getElementById(idCampo).value);
}

const conceptosJS=()=>{
    //var (ya no es comunmente utilizada)
    //let
    //const

    var variable1='David';
    var variable2=23;

    let variable3='Valeria'
    let variable4=22

    const variable5='Sara'
    const variable6=2
    console.log('Nombre: '+variable3)


    //Declaracion de arreglos
    const diasSemana=['Lunes', 'Martes', 'Miercoles']
    console.log(diasSemana);
    console.log(diasSemana[2]);

    diasSemana.push('Jueves');
    diasSemana.push('Viernes');
    console.log(diasSemana);


    const diasFinSemana=['Sabado', 'Domingo'];
    console.log(diasSemana.concat(diasFinSemana));
    const diasCompleto=diasSemana.concat(diasFinSemana);
    console.log(diasCompleto);


    for(const dia of diasCompleto){
        console.log(dia);
    }

    //Declaracion de objetos
    const persona={
        nombre:"David",
        apellido:"Masabanda",
        edad:"23",
        ciudad:"Quito"
    }

    console.log(persona)

    const persona2={
        nombre:"Sara",
        apellido:"Ordoñez",
        edad:"23",
        ciudad:"Quito",
        vehiculo:{
            marca:"Toyota",
            modelo:"Prius",
            anio:"2020"
        }
    }

    console.log(persona2);

    const hola=['juan', 'victor'];
    hola[0]=['Febrero','Marzo'];

    console.log(hola);

    //Desestructuracion de arreglos
    const dias2=['Lunes', 'Martes', 'Miercoles', 'Jueves','Viernes']; 
    const[dia1,dia2,dia3,dia4]=dias2;
    console.log(dia2);
    console.log(dia4);


    const[d1,d2,d3,d4,d5]=['Lunes', 'Martes', 'Miercoles', 'Jueves','Viernes']; 
    console.log(d1);
    console.log(d5);


     //Desestructuracion de objetos
     const persona3= {
        nombre:"Josue",
        apellido:"Lopez",
        edad:"33",
        ciudad:"Quito"
    }

    const{nombre,ciudad}=persona3;
    console.log(nombre);
    console.log(ciudad);


    const persona4={
        nombre:"Valeria",
        apellido:"Ordoñez",
        edad:"20",
        ciudad:"Loja",
        vehiculo:{
            marca:"Toyota",
            modelo:"Prius",
            anio:"2000"
        }
    }

    console.log(persona4.vehiculo);
    console.log(persona4.nombre);
 

}