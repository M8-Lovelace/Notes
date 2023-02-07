// Seleccionar con querySelector
let query = document.querySelector('.card'); // Selecciona el primer elmento con clase .card
let query2 = document.querySelectorAll('.card'); // Selecciona todos los elementos con clase .card

// Con querySelector podemos tener selectores específicos como en CSS
const info = document.querySelector('.hero > .header > .logo');
const info2 = document.querySelector('#formulario');

// Agregar contenido o cambiar imágenes con JS
const encabezado = document.querySelector('.contenido-hero h1');
// console.log(encabezado.textContent); // Trae el contenido sin etiquetas pero con un espacio en las etiquetas
// console.log(encabezado.innerHTML); // Trae con todo y etiquetas
// console.log(encabezado.innerText); // => Trae solamente el contenido sin etiquetas
encabezado.textContent += "aaa";

// Cambiar el src de una imágen
const img = document.querySelector('.card img');
img.src = "../img/newyork1.jpg"

// Manipulación con el CSS
const div = document.querySelector('.contenido-hero h1');
div.classList.add('contenido-hero')
div.classList.remove('contenido-hero')
div.classList.toggle('contenido-hero')

// Manipulación de estilos directamente
div.style.textTransform = "uppercase"
div.style.color = "blue";

// Traversing the DOM a los hijos
const trave = document.querySelector(".contenido.contenedor > .hacer > .contenedor-cards")

console.log(trave.children[0].children[1].children[1].textContent = "Traversing the DOM")

// Traversing del hijo al padre
console.log(trave.parentElement);

const card = document.querySelector('.card:nth-child(4)')
console.log(card.nextElementSibling)
console.clear()
console.log(card.previousElementSibling)
console.clear()

// Eliminar elementos del DOM
const primerEnlace = document.querySelector('a');
console.log(primerEnlace)

// Eliminar el elemento por sí mismo
primerEnlace.remove();

// Eliminar hijos => Se debe pasar la referencia al elemento a eliminar
const navegacionPadre = document.querySelector('.navegacion');
console.log(navegacionPadre.children)
navegacionPadre.removeChild(navegacionPadre.children[1]);



