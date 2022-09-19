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

// let costoProducto = 0;
// let total = 0;
// let productos = "";
// let totalProductos = "";
// let resultadoDescuentoDiez = 0;
// let resultadoDescuentoVeinte = 0;
// let elegirPago = 0;
// let totalFinal = 0;
// let descuentoEfetivo = 0;
// let cuotas = 0;
// let cuotasTres = 0;
// let cuotasSeis = 0;
// let cuotasDoce = 0;
// let interesSeis = 0;
// let interesDoce = 0;
// let finalizar = 0;


// function descuentoDiez(valor) {
//     resultadoDescuentoDiez = valor - (valor * 10)/100
// }

// function descuentoVeinte(valor2) {
//     resultadoDescuentoVeinte = valor2 - (valor2 * 20)/100
// }

// function tresCuotas(valor3) {
//     cuotasTres = valor3 / 3;
// }

// function seisCuotas(valor4) {
//     cuotasSeis = (valor4 + ((valor4 * 7)/100)) / 6;
//     interesSeis = cuotasSeis * 6;
// }

// function doceCuotas(valor5) {
//     cuotasDoce = (valor5 + ((valor5 * 15)/100)) / 12;
//     interesDoce = cuotasDoce * 12;
// }

// function finalizarCompra(valor6) {
//     if (valor6 = 1) {
//         alert("muchas gracias por su compra :)")
//     } else if(valor6 = 2){
//         alert("muchas gracias")
//     }
//     else {
//         alert("dato ingresado incorrecto")
//     }
// }

// let menuEleccion = prompt ("Seleccionar productos: \n1. Monitor - $30000 \n2. Teclado - $15000 \n3. Mouse - $3500 \n4. Mother - $40000 \n5. Vaciar selección \n6. Finalizar operación y ver Total")

// function seleccionarProductos() {
// while (menuEleccion !== "6") {
//     switch (menuEleccion) {
//         case "1":
//             costoProducto = 30000;
//             productos = "Monitor - $30000\n"
//             break;
//         case "2":
//             costoProducto = 15000;
//             productos = "Teclado - $15000\n"
//             break;
//         case "3":
//             costoProducto = 3500;
//             productos = "Mouse - $3500\n"
//             break;
//         case "4":
//             costoProducto = 40000;
//             productos = "Mother - $40000\n"
//             break;
//         case "5":
//             costoProducto = 0;
//             productos = "";
//             total = 0;
//             totalProductos = "";
//             alert("has vaciado tu selección")
//             break;
//         default:
//             costoProducto = 0;
//             productos = "";
//             alert("opcion no existente")
//             break;
//     }
//     total += costoProducto;
//     totalProductos += productos;

//     menuEleccion = prompt ("Seleccionar productos: \n1. Monitor - $30000 \n2. Teclado - $15000 \n3. Mouse - $3500 \n4. Mother - $40000 \n5. Vaciar selección \n6. Finalizar operación y ver Total")
// }

// if (total >= 130000 && total < 200000) {
//     descuentoDiez(`${total}`);
//     alert(`Los productos seleccionados son:\n${totalProductos}\nA su total: $${total} se le aplica descuento del 10% por exceder los $130000 -- total final a pagar $${resultadoDescuentoDiez} IVA incluido`);
//     totalFinal += resultadoDescuentoDiez;
// } 

// else if (total >= 200000) {
//     descuentoVeinte(`${total}`);
//     alert(`Los productos seleccionados son:\n${totalProductos}\nA su total: $${total} se le aplica descuento del 20% por exceder los $200000 -- total final a pagar $${resultadoDescuentoVeinte} IVA incluido`);
//     totalFinal += resultadoDescuentoVeinte;
// }
//     else {
//     alert(`Los productos seleccionados son:\n${totalProductos}\nsu total es: $${total} IVA incluido`);
//     totalFinal += total;
// }
// }
// seleccionarProductos();

// function mediosDePago() {
//     elegirPago = prompt ("desea abonar con:\n1. Efectivo\n2. Tarjeta de Débito\n3. Tarjeta de Crédito")
    
//     switch (elegirPago) {
//         case "1":
//             descuentoEfetivo = totalFinal * 0.95;
//             alert(`su total a abonar con 5% de descuento por hacer compra en efectivo es: ${descuentoEfetivo}`)
//             finalizar = prompt("desea finalizar su compra:\n1. SI\n2. NO")
//             finalizarCompra(finalizar);
//             break;
//         case "2":
//             alert(`su total a abonar es: ${totalFinal}`)
//             finalizar = prompt("desea finalizar su compra:\n1. SI\n2. NO")
//             finalizarCompra(finalizar);
//             break;
//         case "3":
//             cuotas = prompt("en cuantas cuotas desea realizar su compra:\n3\n6\n12")
//             switch (cuotas) {
//                 case "3":
//                     tresCuotas(totalFinal)
//                     alert (`total: ${totalFinal} valor de cada cuota: ${cuotasTres}`)
//                     finalizar = prompt("desea finalizar su compra:\n1. SI\n2. NO")
//                     finalizarCompra(finalizar);
//                     break;
//                 case "6":
//                     seisCuotas(totalFinal)
//                     alert (`total con 7% de interés: ${interesSeis} valor de cada cuota: ${cuotasSeis}`)
//                     finalizar = prompt("desea finalizar su compra:\n1. SI\n2. NO")
//                     finalizarCompra(finalizar);
//                     break;
//                 case "12":
//                     doceCuotas(totalFinal)
//                     alert (`total con 15% de interés: ${interesDoce} valor de cada cuota: ${cuotasDoce}`)
//                     finalizar = prompt("desea finalizar su compra:\n1. SI\n2. NO")
//                     finalizarCompra(finalizar);
//                     break;
//                 default:
//                     alert("opcion no existente")
//                     break;
//             }
//             break;
//         default:
//             alert("opcion no existente")
//             break;
//     }
// }
// mediosDePago();


// INCOORPORANDO ARRAYS Y PRIMER PRE-ENTREGA DE PROYECTO FINAL

// class producto {
//     constructor(id, componente, nombre, precio){
//         this.id = id;
//         this.componente = componente;
//         this.nombre = nombre;
//         this.precio = precio;
//     }
// }

// const p1 = new producto (1, "motherboard", "asus B450", 20000);
// const p2 = new producto (2, "procesador", "ryzen 5600x", 50000);
// const p3 = new producto (3, "memoria ram", "g-skill trident z 16gb", 25000);
// const p4 = new producto (4, "disco rigido", "NVMe samsung 970 evo 1tb", 45000);
// const p5 = new producto (5, "placa video", "asus RTX 3080ti", 330000);

// const productos = [];

// productos.push (p1);
// productos.push (p2);
// productos.push (p3);
// productos.push (p4);
// productos.push (p5);

// const carrito = [];


// function addToCart (){

// let productoId = Number(prompt (`Seleccione el Numero del producto:
// 1. Motherboard - asus - B450 - $20000
// 2. Procesador - ryzen 5600x - $50000
// 3. Memoria ram - g-skill trident z 16gb - $25000
// 4. Disco rigido - NVMe samsung 970 evo 1tb - $45000
// 5. Placa de video - asus RTX 3080ti - $330000
// 6. Ir al CARRITO`))


// while (productoId != 6) {
    
//     let cantidad = Number(prompt("seleccione cantidad de dicho producto"))
    
//     let check = carrito.some(product => product.id===productoId)
//     if (check) {
//         let producto = productos.find(product => product.id===productoId)
//         producto.cantidad += cantidad
//         producto.total = producto.precio * producto.cantidad

//     }else{

//     let producto = productos.find(product => product.id===productoId)
//     producto.cantidad = cantidad
//     producto.total = producto.precio * cantidad
//     carrito.push(producto)
// }

// productoId = Number(prompt (`seleccione producto:
// 1. Motherboard - asus - B450 - $20000
// 2. Procesador - ryzen 5600x - $50000
// 3. Memoria ram - g-skill trident z 16gb - $25000
// 4. Disco rigido - NVMe samsung 970 evo 1tb - $45000
// 5. Placa de video - asus RTX 3080ti - $330000
// 6. Ir al CARRO de compras`))
// }

// let eleccion = Number(prompt(`seleccione: 
// 1. Si desea ir al CARRO de compras y conocer TOTAL
// 2. Si desea agregar mas producto a su CARRO
// 3. Si quiere VACIAR el carrito y volver a elegir productos
// 4. Si desea SALIR de la página`))


// if (eleccion == 1) {
//     console.log(carrito);
//     calcularTotal(carrito);
//     console.log(`su total va a ser: $${calcularTotal(carrito)}`)
//     finalizarCompra ();
// } else if (eleccion == 2){
//     addToCart();
// } else if (eleccion == 3){
//     carrito.splice(0, carrito.length)
//     console.log(carrito);
//     addToCart();
// } else if (eleccion == 4){
//     alert ("gracias por visitarnos")
// }
// }

// addToCart();

// function calcularTotal(carrito){
//     let total = 0;
//     carrito.forEach(producto=> {
//         total += producto.total
//     })
//     return total
// }

// function finalizarCompra (){
//     let compra = prompt(`Para finalizar la compra oprima 1 para seguir comprando oprima 2`)
//     if (compra == 1) {
//         alert("MUCHAS GRACIAS POR SU COMPRA")
//     } else {
//         addToCart();
//     }
// }

//incoorporando DOM

class producto {
    constructor(id, componente, img, nombre, precio){
        this.id = id;
        this.componente = componente;
        this.img = img;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const p1 = new producto (1, "Motherboard","img/mother.png", "asus B450", 20000);
const p2 = new producto (2, "Procesador","img/procesador.png", "ryzen 5600x", 50000);
const p3 = new producto (3, "Memoria ram","img/ram.png", "g-skill trident z 16gb", 25000);
const p4 = new producto (4, "Disco rigido","img/discosolido.png", "NVMe samsung 970 evo 1tb", 45000);
const p5 = new producto (5, "Placa video","img/placadevideo.png", "asus RTX 3080ti", 330000);

const productos = [];

productos.push (p1, p2, p3, p4, p5);


const mostrarProductos = (productos) => {
    const seccionProductos = document.getElementById("seccion-productos");
    productos.forEach (producto => {
        const card = document.createElement ('card')
        card.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="${producto.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${producto.componente}: ${producto.nombre}</h5>
        <p class="card-text">$${producto.precio}</p>
        <a href="#" class="btn btn-primary" id="button${producto.id}">Sumar al Carrito</a>
        </div>
    </div>`
    
    seccionProductos.appendChild(card);

    const button = document.getElementById(`button${producto.id}`)
    button.addEventListener('click', () => {
        alert (`agregaste ${producto.nombre}`)
    })
    });
}

mostrarProductos(productos);
