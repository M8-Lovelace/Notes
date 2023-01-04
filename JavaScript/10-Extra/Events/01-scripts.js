// Eventos que ocurren con el mouse
// https://www.w3schools.com/jsref/obj_mouseevent.asp
const nav = document.querySelector('.navegacion')

// Registrar un evento
nav.addEventListener('mouseout', () => {
  console.log('Mouse out')
  nav.style.backgroundColor = 'transparent'
})

nav.addEventListener('dblclick', () => {
  console.log('Mouse enter')
  nav.style.backgroundColor = 'white'
})

// Eventos que suceden con el teclado
// https://www.w3schools.com/jsref/obj_keyboardevent.asp
const busqueda = document.querySelector('.busqueda')

busqueda.addEventListener('keydown', (e) => {
  console.log(e)
})

busqueda.addEventListener('blur', () => {
  console.log('Blur event')
})

busqueda.addEventListener('focus', () => {
  console.log('Focus')
})

// Evento de scroll
busqueda.addEventListener('wheel', () => {
  console.log('Focus')
})

window.addEventListener('scroll', () => {
  // const scrollPX = window.scrollY
  // console.log(scrollPX)
  const premium = document.querySelector('.premium')
  const ubicacion = premium.getBoundingClientRect()
  if (ubicacion.top > 100 && ubicacion.top < 120) {
    console.log('Está en el inicio del elemento')
  }
})

// Evento submit en formularios
const formulario = document.querySelector('#formulario')

const validarForm = (e) => {
  e.preventDefault() // Con esto evitariamos el trabajo por defecto de los elementos
  console.log(e.target.action)
}

formulario.addEventListener('submit', validarForm)
