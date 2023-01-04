// RETO PERSONAL
// Seleccionar todos los cards y añadirles los distintos métodos
let allCards = document.querySelectorAll('.card');
allCards = Array.from(allCards);
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

allCards.forEach((element, index) => {
  if (index > 3) {
    return  
  } else {
element.addEventListener('click', () => {
  console.log('Click en card')
})

element.children[1].addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('Click en Info')
})

element.children[1].children[1].addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('Click en titulo')
})  }
});
