// // CALCULADORA CON + - * / (DE DOS NUMEROS)

// let num1 = Number(prompt ("ingrese un número: "))
// let num2 = Number(prompt ("ingrese otro número: "))
// let operacion = prompt("que operacion desea realizar, ingrese +  -  /  *" , "+ - / *")

// let resultadoSuma = num1 + num2
// let resultadoResta = num1 - num2
// let resultadoDivi = num1 / num2
// let resultadoMulti = num1 * num2

// if(isNaN(num1) || isNaN(num2)){
//     alert("datos ingresados incorrectos")
// }
// else if (operacion == "+") {
//     alert(`${num1} + ${num2} = ` + resultadoSuma);

// } else if (operacion == "-"){
//     alert(`${num1} - ${num2} = ` + resultadoResta);

// } else if (operacion == "/"){
//     alert(`${num1} / ${num2} = ` + resultadoDivi);

// }else if (operacion == "*"){
//     alert(`${num1} * ${num2} = ` + resultadoMulti);
// }else{
//     alert("operación ingresada incorrecta")
// }

// //CALCULO DEL TERCER ANGULO INTERNO DEL TRIANGULO

// let angulo1 = Number(prompt("ingrese primer ángulo interno del triángulo:"))
// let angulo2 = Number(prompt("ingrese segundo ángulo interno del triángulo:"))
// let comenzar = prompt("calcular ángulo interno restante oprima t, para finalizar otra tecla")

// while (comenzar == "t" || comenzar == "T") {
//     if(isNaN(angulo1) || isNaN(angulo2)) {
//         alert("datos ingresados incorrectos")
//         angulo1 = Number(prompt("ingrese primer ángulo interno del triángulo:"))
//         angulo2 = Number(prompt("ingrese segundo ángulo interno del triángulo:"))
//         comenzar = prompt("calcular angulo interno restante oprima t, para finalizar otra tecla")
//     }
//     else if ((angulo1 + angulo2) > 180) {
//         alert("la suma de los dos ángulos ingresados superan los 180°")
//         angulo1 = Number(prompt("ingrese primer ángulo interno del triángulo:"))
//         angulo2 = Number(prompt("ingrese segundo ángulo interno del triángulo:"))
//         comenzar = prompt("calcular ángulo interno restante oprima t, para finalizar otra tecla")
//     }else{
//     let resultado = 180 - (angulo1 + angulo2)
//     alert (`ángulo 1 ingresado = ${angulo1}° / ángulo 2 ingresado = ${angulo2}° / resultado de 3er ángulo = ${resultado}°`)
//     angulo1 = Number(prompt("ingrese primer ángulo interno del triángulo:"))
//     angulo2 = Number(prompt("ingrese segundo ángulo interno del triángulo:"))
//     comenzar = prompt("calcular ángulo interno restante oprima t, para finalizar otra tecla")
//     }
// }

// // PIEDRA PAPEL O TIJERA

// let nombre1 = prompt("Ingrese nombre de Jugador 1:")
// let nombre2 = prompt("Ingrese nombre de Jugador 2:")
// let jugador1 = prompt("Jugador 1 ingrese piedra/papel/tijera:")
// let jugador2 = prompt("Jugador 2 ingrese piedra/papel/tijera:")

// if (jugador1 == "" || jugador2 == "") {
//     alert("datos ingresados incorrectos")
// }
// else if((jugador1 == "piedra" && jugador2 == "piedra") || (jugador1 == "papel" && jugador2 == "papel") || (jugador1 == "tijera" && jugador2 == "tijera")){
//     alert(`empate entre ${nombre1} y ${nombre2}`)
// }
// else if ((jugador1 == "tijera" && jugador2 == "papel") || (jugador1 == "papel" && jugador2 == "piedra") || (jugador1 == "piedra" && jugador2 == "tijera")) {
//         alert(`El Ganador es: ${nombre1}`)
// }
// else{
//     alert(`El Ganador es: ${nombre2}`)
// }


// // IDENTIFICADOR DE NUMEROS PRIMOS

// let n1= Number(prompt("Insertar número:"))
// let primo=true;
// i=0;

// for(i=2;i<n1;i++){   
//     if(n1%i==0) {
//         primo=false;
//     }
// }
    
// if (isNaN(n1)) {
//     alert("Error no ha ingresado un Número")
// }
// else if (n1 === 0 || n1 === 1){
//     alert("El número "+n1+" no es primo")
// }
// else if(primo==true){
//     alert("El número "+n1+" es primo")
// }
// else {
//     alert("El número "+n1+" no es primo")
// }

//-------

// DESAFIO: SIMULADOR INTERACTIVO (seleccionar productos, medios de paso, descuentos, intereses)

let menuEleccion = prompt ("Seleccionar productos: \n1. Monitor - $30000 \n2. Teclado - $15000 \n3. Mouse - $3500 \n4. Mother - $40000 \n5. Finalizar operación y ver Total")

let costoProducto = 0;
let total = 0;
let productos = "";
let totalProductos = "";
let resultadoDescuentoDiez = 0;
let resultadoDescuentoVeinte = 0;
let elegirPago = 0;
let totalFinal = 0;
let descuentoEfetivo = 0;
let cuotas = 0;
let cuotasTres = 0;
let cuotasSeis = 0;
let cuotasDoce = 0;
let interesSeis = 0;
let interesDoce = 0;
let finalizar = 0;


function descuentoDiez(valor) {
    resultadoDescuentoDiez = valor - (valor * 10)/100
}

function descuentoVeinte(valor2) {
    resultadoDescuentoVeinte = valor2 - (valor2 * 20)/100
}

function tresCuotas(valor3) {
    cuotasTres = valor3 / 3;
}

function seisCuotas(valor4) {
    cuotasSeis = (valor4 + ((valor4 * 7)/100)) / 6;
    interesSeis = cuotasSeis * 6;
}

function doceCuotas(valor5) {
    cuotasDoce = (valor5 + ((valor5 * 15)/100)) / 12;
    interesDoce = cuotasDoce * 12;
}

function finalizarCompra(valor6) {
    if (valor6 = 1) {
        alert("muchas gracias por su compra :)")
    } else if(valor6 = 2){
        alert("muchas gracias")
    }
    else {
        alert("dato ingresado incorrecto")
    }
}

function seleccionarProductos() {
while (menuEleccion !== "5") {
    switch (menuEleccion) {
        case "1":
            costoProducto = 30000;
            productos = "Monitor - $30000\n"
            break;
        case "2":
            costoProducto = 15000;
            productos = "Teclado - $15000\n"
            break;
        case "3":
            costoProducto = 3500;
            productos = "Mouse - $3500\n"
            break;
        case "4":
            costoProducto = 40000;
            productos = "Mother - $40000\n"
            break;
        default:
            costoProducto = 0;
            productos = "";
            alert("opcion no existente")
            break;
    }
    total += costoProducto;
    totalProductos += productos;

    menuEleccion = prompt ("Seleccionar productos: \n1. Monitor - $30000 \n2. Teclado - $15000 \n3. Mouse - $3500 \n4. Mother - $40000 \n5. Finalizar operación y ver Total")
}

if (total >= 130000 && total < 200000) {
    descuentoDiez(`${total}`);
    alert(`Los productos seleccionados son:\n${totalProductos}\nA su total: $${total} se le aplica descuento del 10% por exceder los $130000 -- total final a pagar $${resultadoDescuentoDiez} IVA incluido`);
    totalFinal += resultadoDescuentoDiez;
} 

else if (total >= 200000) {
    descuentoVeinte(`${total}`);
    alert(`Los productos seleccionados son:\n${totalProductos}\nA su total: $${total} se le aplica descuento del 20% por exceder los $200000 -- total final a pagar $${resultadoDescuentoVeinte} IVA incluido`);
    totalFinal += resultadoDescuentoVeinte;
}
    else {
    alert(`Los productos seleccionados son:\n${totalProductos}\nsu total es: $${total} IVA incluido`);
    totalFinal += total;
}
}
seleccionarProductos();


function mediosDePago() {
    elegirPago = prompt ("desea abonar con:\n1. Efectivo\n2. Tarjeta de Débito\n3. Tarjeta de Crédito")
    
    switch (elegirPago) {
        case "1":
            descuentoEfetivo = totalFinal * 0.95;
            alert(`su total a abonar con 5% de descuento por hacer compra en efectivo es: ${descuentoEfetivo}`)
            finalizar = prompt("desea finalizar su compra:\n1. SI\n2. NO")
            finalizarCompra(finalizar);
            break;
        case "2":
            alert(`su total a abonar es: ${totalFinal}`)
            finalizar = prompt("desea finalizar su compra:\n1. SI\n2. NO")
            finalizarCompra(finalizar);
            break;
        case "3":
            cuotas = prompt("en cuantas cuotas desea realizar su compra:\n3\n6\n12")
            switch (cuotas) {
                case "3":
                    tresCuotas(totalFinal)
                    alert (`total: ${totalFinal} valor de cada cuota: ${cuotasTres}`)
                    finalizar = prompt("desea finalizar su compra:\n1. SI\n2. NO")
                    finalizarCompra(finalizar);
                    break;
                case "6":
                    seisCuotas(totalFinal)
                    alert (`total con 7% de interés: ${interesSeis} valor de cada cuota: ${cuotasSeis}`)
                    finalizar = prompt("desea finalizar su compra:\n1. SI\n2. NO")
                    finalizarCompra(finalizar);
                    break;
                case "12":
                    doceCuotas(totalFinal)
                    alert (`total con 15% de interés: ${interesDoce} valor de cada cuota: ${cuotasDoce}`)
                    finalizar = prompt("desea finalizar su compra:\n1. SI\n2. NO")
                    finalizarCompra(finalizar);
                    break;
                default:
                    alert("opcion no existente")
                    break;
            }
            break;
        default:
            alert("opcion no existente")
            break;
    }
}
mediosDePago();
