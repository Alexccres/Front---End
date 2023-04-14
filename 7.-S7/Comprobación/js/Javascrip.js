/*
// declaracion de variables
//tipo identificador = valor
//var es variable global
var identificador1 = "valor"// string - texto
var identificador2 = 10 // int - numero entero sin decimales
var identificador3 = 10.5 // float - decimales o punto flotante
var identificador4 = true // boolean - true or false
var identificador5 = 'c' // character - un caracter

// let es variable local
let variablelocal1 = "valor";
let variablelocal2 = 10;
let variablelocal3 = 10.5;
let variablelocal4 = false;
let variablelocal5 = 'c';

//log en programacion es loguear/ informar mediante la consola o un archivo
console.log(identificador1)

//concatenación de string o cadenas de texto
// "10"+"5"="105"
*/


// ingreso de numeros o ingreso de datos
var numero1 = prompt("ingrese el primer número");// "10"
var numero2 = prompt("ingrese el segundo número");// "5"

//convertir o castear (cast), parse los numeros a tipo int
//parseInt ("string") //funcion que convierte un string o cadena de texto a int
numero1 = parseInt(numero1) // se parsea y se acumula en la misma variable existente
numero2 = parseInt(numero2) // se parsea y se acumula en la misma variable existente

//calcular cual es mayor o si tienen el mismo valor
//estructuras condicionales if, else if, switch case
//if(condition) else if(conditicion)
if(numero1 > numero2){// si la condicion se cumple
    alert( numero1 + "es mayor que" + numero2)
} else if(numero1 === numero2){// 2 iguales, somos iguales pero distintos, 3 iguales es estrictamente igual
    alert("los números son iguales")
}else{// no sucede lo anterior?, se ejecuta las reglas del else 
    alert (numero2 + "es mayor que" + numero1)
}
//alerta en el navegador
alert(numero1+numero2);