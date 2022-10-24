let productos = [];
let carrito = [];


async function fetchProductos() {
  const response = await fetch("./data.json");
  return await response.json();
}

fetchProductos().then((product) => {
  productos = product;
  mostrarProductos();
});

//CONSTRUCTOR - AGREGADO DE ELEMENTO CANTIDAD - (PUSH AL CARRITO)

class ProductoEnCarrito {
  constructor(prod) {
    this.producto = prod;
    this.cantidad = 1;
  }
}

//FUNCIONES LOCAL STORAGE (JSON)
function addLocalStorage() {
  const carritoStr = JSON.stringify(carrito);
  localStorage.setItem("carrito", carritoStr);
}

function traerDeLocal() {
  const carroVuelta = localStorage.getItem("carrito");
  carroVuelta !== null && (carrito = JSON.parse(carroVuelta));
  mostrarCarrito();
}


//MOSTRAR PRODUCTOS 

const mostrarProductos = () => {
  const seccionProductos = document.getElementById("seccion-productos");
  productos.forEach((producto) => {
    const card = document.createElement("card");
    card.classList.add(
      "col-12",
      "col-md-4",
      "col-xl-3",
      "d-flex",
      "justify-content-center"
    );
    card.innerHTML += `<div class="card border border-dark m-2 align-items-center bg-light" style="width: 18rem;">
            <img src="${producto.img}" class="card-img-top p-3" alt="imagenes de la calle">
            <div class="card-body">
            <h5 class="card-title">${producto.nombre}: ${producto.detalle}</h5>
            <p class="card-text">$${producto.precio}</p>
            <a class="btn btn-info" id="button${producto.id}">Agregar al Carrito</a>
            </div>
        </div>`;

    seccionProductos.appendChild(card);


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

mostrarProductos(productos);
traerDeLocal();



// MOSTRAR CARRITO + (form)

function mostrarCarrito() {
  const section = document.getElementById("seccion-carrito");
  section.innerHTML = "";

  let total = 0;
  carrito.forEach((p) => {
    total += p.producto.precio * p.cantidad;
    section.innerHTML += `
          <div class="border p-4 mt-3 d-flex align-items-center">
            <p class="fs-5 me-3">${p.producto.nombre} (${p.producto.detalle}) x ${p.cantidad} =  $${p.producto.precio * p.cantidad}</p>
            <button class="carrito-add-one btn btn-success me-1" onclick="sumarUnoAProducto(${p.producto.id})">+</button>
            <button class="carrito-remove-one ms-1 btn btn-danger" onclick="restarUnoAProducto(${p.producto.id})">-</button>
          </div>
            `;
    addLocalStorage();
  });

  section.innerHTML += `<p class="mt-5 mb-5 fs-3 fw-bold">Total: $${total}</p>`;
  section.innerHTML += `<a class="btn btn-success" id="comprar">Comprar</a>`;
  section.innerHTML += `<a class="btn btn-danger ms-2" id="buttonVaciar">Vaciar Carrito</a>`;

  const buttonV = document.getElementById("buttonVaciar");
  buttonV.addEventListener("click", () => {
    vaciarCarrito();
    addLocalStorage();
  });

  const buttonF = document.getElementById("comprar");
  const formulario = document.getElementById("formulario");

  buttonF.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "Su Carrito esta Vacio",
        icon: "warning",
      });
      return;
    }

    formulario.classList.remove("d-none");
    window.scrollTo({ top: 200000 });
  });

  formulario.addEventListener("submit", ev => {
    ev.preventDefault();

    const data = new FormData(formulario);

    const nombre = data.get("nombre");
    const apellido = data.get("apellido");
    const direccion = data.get("direccion");

    if (carrito.length === 0) {
      Swal.fire({
        title: "Su Carrito esta Vacio",
        icon: "warning",
      });
      return;
    }
    Swal.fire({
        title: `Seguro/a ${nombre} ${apellido} que quiere Finalizar su Compra?`,
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
            `Muchas Gracias ${nombre} ${apellido} por realizar su Compra`,
            `El pedido llegará en el transcurso de los próximos 10 días a la siguiente dirección: ${direccion}`,
            'success'
            );
            formulario.classList.add("d-none");
            formulario.reset();
        }
    })
  });
}


// FUNCION vaciar-agregarP-quitarP-sustraerC-adherirC (carrito)

function vaciarCarrito() {
  carrito = [];
  mostrarCarrito();
}


function productoAdd(p) {
  p.cantidad++;
}

function sumarUnoAProducto(id) {
  const index = carrito.findIndex((p) => p.producto.id === id);
  const producto = carrito[index];

  productoAdd(producto);
  mostrarCarrito();
}

function subtract(p) {
  p.cantidad !== 0 && p.cantidad--;
}

function restarUnoAProducto(id) {
  const index = carrito.findIndex((p) => p.producto.id === id);
  const producto = carrito[index];

  subtract(producto);
  if (producto.cantidad == 0) {
    carrito = carrito.filter((p) => p.producto.id !== id);
  }

  mostrarCarrito();
}






