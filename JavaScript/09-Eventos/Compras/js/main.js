// Variables globales
const carritoCompras = document.getElementById("carrito");
const contenedor = document.getElementById("contenedorTarjetas");
const total = document.getElementById("total");
const cursos = [
  {
    id: 1,
    imagen: "./img/curso1.jpg",
    nombre: "HTML5, CSS3, JavaScript",
    profesor: "Juan Pedro",
    estrellas: "./img/estrellas.png",
    precio: 200,
    rebaja: 15,
  },
  {
    id: 2,
    imagen: "./img/curso2.jpg",
    nombre: "Comida vegetariana",
    profesor: "Juan Pedro",
    estrellas: "./img/estrellas.png",
    precio: 200,
    rebaja: 15,
  },
  {
    id: 3,
    imagen: "./img/curso3.jpg",
    nombre: "Guitarra principiantes",
    profesor: "Juan Pedro",
    estrellas: "./img/estrellas.png",
    precio: 200,
    rebaja: 15,
  },
  {
    id: 4,
    imagen: "./img/curso4.jpg",
    nombre: "Cosecha verduras",
    profesor: "Juan Pedro",
    estrellas: "./img/estrellas.png",
    precio: 200,
    rebaja: 15,
  },
  {
    id: 5,
    imagen: "./img/curso5.jpg",
    nombre: "Galletas caseras",
    profesor: "Juan Pedro",
    estrellas: "./img/estrellas.png",
    precio: 200,
    rebaja: 15,
  },
  {
    id: 6,
    imagen: "./img/curso6.webp",
    nombre: "JavaScript moderno",
    profesor: "Juan Pedro",
    estrellas: "./img/estrellas.png",
    precio: 200,
    rebaja: 15,
  },
  {
    id: 7,
    imagen: "./img/curso7.jpg",
    nombre: "Programación básica",
    profesor: "Juan Pedro",
    estrellas: "./img/estrellas.png",
    precio: 200,
    rebaja: 15,
  },
  {
    id: 8,
    imagen: "./img/curso8.jpg",
    nombre: "Recetas comida natural",
    profesor: "Juan Pedro",
    estrellas: "./img/estrellas.png",
    precio: 200,
    rebaja: 15,
  },
  {
    id: 9,
    imagen: "./img/curso9.jpg",
    nombre: "Estudio Musical",
    profesor: "Juan Pedro",
    estrellas: "./img/estrellas.png",
    precio: 200,
    rebaja: 15,
  },
];
let carrito = [];

function agregarCarrito(i) {
  console.log(i);
  // Busca el producto en el array
  const producto = cursos.find((element) => element.id == i);
  // Busca si el producto ya esta en el carrito
  const existe = carrito.find((element) => element.id == i);
  // Si existe aumenta la cantidad
  if (existe) {
    existe.cantidad++;
  } else {
    // Si no existe lo agrega al carrito
    carrito.push({ ...producto, cantidad: 1 });
  }
  console.log(carrito);
  pintarCarrito();
}

function pintarCarrito() {
  carritoCompras.innerHTML = "";
  carrito.forEach((element, i) => {
    carritoCompras.innerHTML += `
    <tr>
      <td><img class="image py-1" src="${element.imagen}"></td>
      <td>${element.nombre}</td>
      <td>${element.rebaja}</td>
      <td>${element.cantidad}</td>
      <td></td>
      <td><button class="btn eliminar" onclick= eliminar(${element.id})>x</span></td>
    </tr>
    `;
  });
  totalFactura();
}

// Funcion que elimina un producto del array
function eliminar(codigo) {
  console.log(codigo);
  // Filtra el array y elimina el producto que tenga el codigo igual al que se le pasa por parametro
  carrito = carrito.filter((element) => element.id != codigo);
  totalFactura();
  // Agrega los datos a la tabla
  pintarCarrito();
}

// Funcion que suma el total del carrito
function totalFactura() {
  let totalFacturax = 0;
  carrito.forEach((element) => {
    totalFacturax += element.cantidad * element.rebaja;
    total.innerHTML = `$${totalFacturax}`;
  });
  if (totalFacturax == 0) {
    total.innerHTML = `$0`;
  }
}

function vaciarCarrito() {
  carrito = [];
  pintarCarrito();
}

// Pintar tarjetas de cursos
function pintarTarjetas() {
  cursos.forEach((element, i) => {
    contenedor.innerHTML += `
    <div class="card px-0 col-md-5 col-lg-3 col-sm-10 col-xl-3">
      <img class="card-img-top" src="${element.imagen}" alt="Card image cap">
      <div class="card-body">
        <h6 class="card-title"><b>${element.nombre}</b></h6>
        <p class="card-text">${element.profesor}</p>
        <img src="${element.estrellas}" class="pb-3"><br>
        <div class="row mb-3">
          <p class="m-0 col-8"><del>${element.precio}</del></p><br>
          <p class="m-0 col fs-4"><b>${element.rebaja}</b></p><br>
        </div>
        <a class="btn btn-primary w-100 bg-info border-0 agregar" onclick="agregarCarrito(${element.id})">AGREGAR AL CARRITO</a>
      </div>
    </div>
    `;
  });
}

// Función
window.addEventListener("load", pintarTarjetas);
