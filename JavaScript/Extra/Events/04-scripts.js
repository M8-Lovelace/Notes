// Crear un card de forma dinámica
const card = document.createElement('div');
const img = document.createElement('img');
const info = document.createElement('div');
const title = document.createElement('p');
const subtitle = document.createElement('p');
const caption = document.createElement('p');

// Agregamos las clases a los respectivos elementos
card.classList.add("card");
info.classList.add("info");
title.classList.add("categoria", "concierto")
subtitle.classList.add("titulo")
caption.classList.add("precio")

// Añadimos el contenido a las etiquetas
title.textContent = "Fuck you";
subtitle.textContent = "Oh yeah";
caption.textContent = "Hello darkness";

// Añadimos la ruta de la imágen
img.src = "../img/hacer4.jpg"

// Agregamos los contenidos dependiendo de la necesidad
card.appendChild(img)
card.appendChild(info)
info.appendChild(title)
info.appendChild(subtitle)
info.appendChild(caption)

const main = document.querySelector("main .hacer .contenedor-cards");
main.appendChild(card);

// Agregar eventos en las mismas etiquetas
const mostrarTitle = (e) => {
  console.log(e.target.textContent)
}

title.onclick = mostrarTitle;

