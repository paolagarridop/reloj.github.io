// Comentarios
// ''
//alert('Hola mundo desde una alerta en JavaScript')

//Consola
//console.log('Hola desde la consola');

//Declaracion de una variable
//let nombre = "Pao";
// concatenar texto y variables
//console.log("Me llamo: ",nombre);
// Variables no pueden ser palabras reservadas
//Al nombrarlas usaremos un nombre que te de idea de lo que estas almacenando 
//Contantes
//const pi = 3.1416;

//Tipos de datos
//Numero
//let edad =10;
// Cadena de texto
//let saludo = "Hola";
//Booleanos. 2 valores
//let activo = true;

//Operadores aritmeticos
//Suma + 
//Resta -
// Multiplicacion *
//Divicion /
//Modulo o residuo %
//Incremento ++
//Decremento --

//Operadores relacionales
//Mayor y menor que <>
//Mayor o igual >=
//Menor o igual <=
//Igual que ==
//Diferente de !=

//Operadores logicos
// y &&
//or ||
//not !

//Reloj Digital
function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss;

    let reloj = document.querySelector('#reloj');
    reloj.innerHTML = time;
}

setInterval(currentTime, 1000);
