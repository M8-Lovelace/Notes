// Function declaration
// Se le aplica hoisting y puede ser llamada antes de ser declarada
function sumar() {
  console.log(2 + 2);
}

// Function Expression
// No puede ser llamada antes de ser declarada
const sumar2 = function () {
  console.log(3 + 3);
};

// Argumentos y parámetros
const sum = (a = 30, b = 30) => {
  // Parámetros por defecto
  // Parámetros
  console.log(a + b);
};

// sum(10, 20); // Argumentos

// Funciones de objeto
const reproductor = {
  cancion: "",
  reproducir: function (id) {
    console.log("Reproduciendo canción con el id " + id);
  },
  pausar: (id) => {
    console.log("Pausando canción " + id);
  },
  /**
   * @param {string} cancion
   */
  set nuevaCancion(cancion) {
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`);
  },
  get obtenerCancion() {
    console.log(`${this.cancion}`);
  },
};

reproductor.nuevaCancion = "Alas de fuego";
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.pausar(30);

reproductor.borrar = () => {
  console.log("Borrando canción");
};

reproductor.borrar();
