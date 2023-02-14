// Verificar si una etiqueta ya tiene una clase
// footer.classList.contains('clase');

// Seleccionamos el botón que mostrará el footer
const btnFloat = document.querySelector('.btn-flotante');

// Seleccionamos el footer
const footer = document.querySelector('.footer');

// Función de mostrar u ocultar footer
const toggleFooter = () => {
  footer.classList.toggle("activo");
  btnFloat.classList.toggle("activo");

  if (btnFloat.classList.contains('activo')) {
    btnFloat.textContent = "Cerrar";
  }
}

// Le asignamos el evento click al botón
btnFloat.addEventListener('click', toggleFooter);
