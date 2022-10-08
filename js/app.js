//ARRAY DE OBJETOS ("BASE DE DATOS") CARGA DE DATA.JSON

async function fetchProductos() {
    const response = await fetch('./data.json')
    return await response.json()
}

let productos = [];

fetchProductos().then(product => {
    productos = product
    mostrarProductos()
})


//CONSTRUCTOR - AGREGADO DE ELEMENTO CANTIDAD - CUANDO PUSHEAMOS AL CARRITO 

class ProductoEnCarrito {
    constructor(prod) {
        this.producto = prod;
        this.cantidad = 1;
}
}


//ARRAY DE CARRITO VACIO


let carrito = [];


//MOSTRAR PRODUCTOS EN HTML 

const mostrarProductos = () => {
const seccionProductos = document.getElementById("seccion-productos");
    productos.forEach((producto) => {
        const card = document.createElement("card");
        card.classList.add('col-12', 'col-md-4', 'col-xl-3', 'd-flex', 'justify-content-center')
        card.innerHTML += `<div class="card border border-dark m-2 align-items-center bg-light" style="width: 18rem;">
            <img src="${producto.img}" class="card-img-top p-3" alt="imagenes de la calle">
            <div class="card-body">
            <h5 class="card-title">${producto.nombre}: ${producto.detalle}</h5>
            <p class="card-text">$${producto.precio}</p>
            <a class="btn btn-info" id="button${producto.id}">Agregar al Carrito</a>
            </div>
        </div>`;

        seccionProductos.appendChild(card);

//EVENTO CLICK PARA CARGAR AL CARRITO CON CONDICION (SI EXISTE EN CARRITO SOLO CARGA + UNIDAD DE PRODUCTO SINO PUSHEA PRODUCTO A CARRITO)

const button = document.getElementById(`button${producto.id}`);

        button.addEventListener("click", () => {
        const index = carrito.findIndex((p) => p.producto.id === producto.id);
        if (index !== -1) {
            const p = carrito[index];
            productoAdd(p);
            addLocalStorage();
            mostrarCarrito();
            return;
}

const newProduct = new ProductoEnCarrito(producto);
carrito.push(newProduct);

addLocalStorage();
mostrarCarrito();

});
});
};


//FUNCIONES

//funcion para mostrar el carrito con totales parciales por producto - total general - boton para vaciar producto

function mostrarCarrito() {
const section = document.getElementById("seccion-carrito");
section.innerHTML = "";


let total = 0;
carrito.forEach((p) => {
      total += p.producto.precio * p.cantidad;
        section.innerHTML += `
            <div>
              <p>${p.cantidad} x ${p.producto.nombre}: $${p.producto.precio * p.cantidad}</p>

            <button class="carrito-add-one btn btn-success" onclick="sumarUnoAProducto(${p.producto.id})">+</button>
            <button class="carrito-remove-one ms-1 btn btn-danger" onclick="restarUnoAProducto(${p.producto.id})">-</button>

            </div>
            `;
            addLocalStorage();

});

section.innerHTML += `<p>Total: ${total}</p>`;
section.innerHTML += `<a class="btn btn-success" id="finalizarCompra">Finalizar Compra</a>`
section.innerHTML += `<a class="btn btn-danger ms-2" id="buttonVaciar">Vaciar Carrito</a>`


const buttonV = document.querySelector('#buttonVaciar')
buttonV.addEventListener("click", () => {
    vaciarCarrito();
    addLocalStorage();
});

const buttonF = document.querySelector('#finalizarCompra')

buttonF.addEventListener("click", () => {
    if (carrito == 0){
        Swal.fire({
            title: 'Su Carrito esta Vacio',
            icon: 'warning',
        })
    }else{
    Swal.fire({
        title: 'Esta seguro/a que quiere finalizar su compra?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'si estoy seguro!'
    }).then((result) => {
        if (result.isConfirmed) {
            vaciarCarrito();
            addLocalStorage();
            Swal.fire(
            'Compra Finalizada',
            'Muchas Gracias por confiar en Nosotros',
            'success'
        )
        }
    })
}
});

}

//FUNCION VACIAR EL CARRITO DE COMPRA

function vaciarCarrito() {
    carrito = [];
    mostrarCarrito();
}


//FUNCION PARA AGREGAR UNA UNIDAD DE PRODUCTO

function productoAdd(p) {
    p.cantidad ++;
}


//FUNCION PARA QUITAR UNA UNIDAD DE PRODUCTO

function subtract(p) {
    p.cantidad !==0 && p.cantidad--;
}


//FUNCION PARA AGREGAR UNIDAD CON CHEQUEO DE ID DE PRODUCTO

function sumarUnoAProducto(id) {
    const index = carrito.findIndex((p) => p.producto.id === id);
    const producto = carrito[index];

    productoAdd(producto);
    mostrarCarrito();
}


//FUNCION PARA QUITAR UNIDAD CON CHEQUEO DE ID DE PRODUCTO

function restarUnoAProducto(id) {
    const index = carrito.findIndex((p) => p.producto.id === id);
    const producto = carrito[index];

    subtract(producto);
        if (producto.cantidad == 0) {
            carrito = carrito.filter((p) => p.producto.id !== id);
}

mostrarCarrito();
}


//FUNCIONES LOCAL STORAGE (JSON)
function addLocalStorage(){
    const carritoStr = JSON.stringify(carrito)
    localStorage.setItem("carrito", carritoStr)
}

function traerDeLocal(){
    const carroVuelta = localStorage.getItem("carrito")
    carroVuelta !== null && (carrito = JSON.parse(carroVuelta));
    mostrarCarrito();
}


mostrarProductos(productos);
traerDeLocal();



