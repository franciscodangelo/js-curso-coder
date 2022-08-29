// CALCULADORA CON + - * / (DE DOS NUMEROS)

let num1 = Number(prompt ("ingrese un número: "))
let num2 = Number(prompt ("ingrese otro número: "))
let operacion = prompt("que operacion desea realizar, ingrese +  -  /  *" , "+ - / *")

let resultadoSuma = num1 + num2
let resultadoResta = num1 - num2
let resultadoDivi = num1 / num2
let resultadoMulti = num1 * num2

if(isNaN(num1) || isNaN(num2)){
    alert("datos ingresados incorrectos")
}
else if (operacion == "+") {
    alert(`${num1} + ${num2} = ` + resultadoSuma);

} else if (operacion == "-"){
    alert(`${num1} - ${num2} = ` + resultadoResta);

} else if (operacion == "/"){
    alert(`${num1} / ${num2} = ` + resultadoDivi);

}else if (operacion == "*"){
    alert(`${num1} * ${num2} = ` + resultadoMulti);
}else{
    alert("operación ingresada incorrecta")
}

//CALCULO DEL TERCER ANGULO INTERNO DEL TRIANGULO

let angulo1 = Number(prompt("ingrese primer ángulo interno del triángulo:"))
let angulo2 = Number(prompt("ingrese segundo ángulo interno del triángulo:"))
let comenzar = prompt("calcular ángulo interno restante oprima t, para finalizar otra tecla")

while (comenzar == "t" || comenzar == "T") {
    if(isNaN(angulo1) || isNaN(angulo2)) {
        alert("datos ingresados incorrectos")
        angulo1 = Number(prompt("ingrese primer ángulo interno del triángulo:"))
        angulo2 = Number(prompt("ingrese segundo ángulo interno del triángulo:"))
        comenzar = prompt("calcular angulo interno restante oprima t, para finalizar otra tecla")
    }
    else if ((angulo1 + angulo2) > 180) {
        alert("la suma de los dos ángulos ingresados superan los 180°")
        angulo1 = Number(prompt("ingrese primer ángulo interno del triángulo:"))
        angulo2 = Number(prompt("ingrese segundo ángulo interno del triángulo:"))
        comenzar = prompt("calcular ángulo interno restante oprima t, para finalizar otra tecla")
    }else{
    let resultado = 180 - (angulo1 + angulo2)
    alert (`ángulo 1 ingresado = ${angulo1}° / ángulo 2 ingresado = ${angulo2}° / resultado de 3er ángulo = ${resultado}°`)
    angulo1 = Number(prompt("ingrese primer ángulo interno del triángulo:"))
    angulo2 = Number(prompt("ingrese segundo ángulo interno del triángulo:"))
    comenzar = prompt("calcular ángulo interno restante oprima t, para finalizar otra tecla")
    }
}

// PIEDRA PAPEL O TIJERA

let nombre1 = prompt("Ingrese nombre de Jugador 1:")
let nombre2 = prompt("Ingrese nombre de Jugador 2:")
let jugador1 = prompt("Jugador 1 ingrese piedra/papel/tijera:")
let jugador2 = prompt("Jugador 2 ingrese piedra/papel/tijera:")

if (jugador1 == "" || jugador2 == "") {
    alert("datos ingresados incorrectos")
}
else if((jugador1 == "piedra" && jugador2 == "piedra") || (jugador1 == "papel" && jugador2 == "papel") || (jugador1 == "tijera" && jugador2 == "tijera")){
    alert(`empate entre ${nombre1} y ${nombre2}`)
}
else if ((jugador1 == "tijera" && jugador2 == "papel") || (jugador1 == "papel" && jugador2 == "piedra") || (jugador1 == "piedra" && jugador2 == "tijera")) {
        alert(`El Ganador es: ${nombre1}`)
}
else{
    alert(`El Ganador es: ${nombre2}`)
}


// IDENTIFICADOR DE NUMEROS PRIMOS

let n1= Number(prompt("Insertar número:"))
let primo=true;
i=0;

for(i=2;i<n1;i++){   
    if(n1%i==0) {
        primo=false;
    }
}
    
if (isNaN(n1)) {
    alert("Error no ha ingresado un Número")
}
else if (n1 === 0 || n1 === 1){
    alert("El número "+n1+" no es primo")
}
else if(primo==true){
    alert("El número "+n1+" es primo")
}
else {
    alert("El número "+n1+" no es primo")
}