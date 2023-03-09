<template>
  <div class="d-flex main position-relative">
    <div class="mt-5 m-auto pt-3" v-show="botones">
      <h2 class="text-center pb-5 mb-3 text-light"><b>ELIGE UNA CATEGORIA:</b></h2>
      <div class="d-flex justify-content-center row m-0 gap-3">
        <button type="button" class="col-8 col-sm-5 col-xl-4 col-xxl-5 mb-5 btn categoria text-light fw-bold p-4 fs-4"
          @click="palabraAleatoria(colores)">
          COLORES<br>
          <img src="../assets/color.jpeg" class="imagen">
        </button>
        <button type="button" class="col-8 col-sm-5 col-xl-4 col-xxl-5 mb-5 btn categoria text-light fw-bold p-4 fs-4"
          @click="palabraAleatoria(animales)">
          ANIMALES<br>
          <img src="../assets/animal.webp" class="imagen">
        </button>
        <button type="button" class="col-8 col-sm-5 col-xl-4 col-xxl-5 mb-5 btn categoria text-light fw-bold p-4 fs-4"
          @click="palabraAleatoria(nombres)">
          NOMBRES<br>
          <img src="../assets/nombre.webp" class="imagen">
        </button>
      </div>
    </div>
    <div v-show="juego" class="w-100">
      <div class="row p-0 m-0">
        <div class="col-9 col-sm-6 col-md-5 col-xl-4 col-xxl-3 mt-5 m-auto p-0">
          <div class="d-flex justify-content-center">
            <div class="p-2">
              <img :src="imagen" alt="ahorcado" width="380">
            </div>
          </div>
          <div class="w-50 d-flex justify-content-center palabra text-light">
            <div class="px-2 my-5 fs-5" v-for="(letra, i) in lineas" :key="i">
              <span class="letra fs-3"><u class="tamano">{{ letra }}</u></span>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-9 col-xl-5 col-xxl-5 tecladoContainer mt-5">
          <div v-for="(abc, i) in letras" :key="abc">
            <button :style="desabilitar" class="p-2 button" :disabled="boton" @click="letraSeleccionada(abc)">{{ abc
            }}</button>
          </div>
        </div>
      </div>
      <div v-show="mensaje" class="w-50 m-auto">
        <div v-show="resultado" class="alert mt-3 fs-1 text-center text-light" role="alert">
          Felicitaciones! Ganaste :)
        </div>
        <div v-show="resultado2" class="alert mt-3 fs-1 text-center text-light" role="alert">
          Lo siento, perdiste :(
        </div>
      </div>
      <div>
        <div class="d-flex justify-content-center mt-4 p-0">
          <button class="reiniciar w-25 fs-3" @click="reiniciar()">REINICIAR</button>
        </div>
      </div>
      <div class="position-absolute text-center">
        <span class="text-light texto-intentos fs-5">Intentos:<br></span>
        <span class="intentos fs-1 text-light">{{ intentos }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    let array = ref();
    let botones = ref(true);
    let boton = ref(false);
    let juego = ref(false);
    let palabra = ref();
    let lineas = ref();
    let letraDesabilitada = ref();
    let intentos = ref(6);
    let mensaje = ref(false);
    let resultado = ref(false);
    let resultado2 = ref(false);
    let desabilitar = ref()

    let imagen = ref('https://st2.depositphotos.com/1041372/8626/v/600/depositphotos_86262436-stock-illustration-simple-doodle-of-a-hangmans.jpg')

    const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const colores = ref([
      "rojo", "azul", "morado", "amarillo", "naranja",
      "verde", "negro", "blanco"
    ]);

    const animales = ref([
      "perro", "gato", "vaca", "oveja", "canguro", "jirafa",
      "tigre", "leon"
    ]);

    const nombres = ref([
      "alexa", "javier", "alvaro", "natalia", "dayana", "carlos",
      "diego", "andrea",
    ]);

    function palabraAleatoria(arrays) {
      botones.value = false
      juego.value = true
      let numero = Math.floor(Math.random() * arrays.length);
      palabra.value = arrays[numero].toUpperCase().split("");
      console.log(palabra.value);
      dibujarLineas(palabra.value.length);
    }

    function dibujarLineas(numero) {
      lineas.value = [];
      for (let i = 0; i < numero; i++) {
        lineas.value.push("___");
      }
    }

    function encontrarCoincidencias(letra) {
      let coincidencias = [];
      console.log(coincidencias);
      for (let i = 0; i < palabra.value.length; i++) {
        if (palabra.value[i] === letra) {
          coincidencias.push(palabra.value[i]);
        }
      }
      return coincidencias;
    }

    function letraSeleccionada(letra) {
      letraDesabilitada.value = letra;

      if (lineas.value.includes(letra)) {
        verificarIntentos()
      }

      if (!lineas.value.includes(letra)) {
        let coincidencias = encontrarCoincidencias(letra);
        for (let i = 0; i < palabra.value.length; i++) {
          if (palabra.value[i] === letra) {
            coincidencias.push(letra);
            lineas.value[i] = letra;
          }
        }

        if (coincidencias.length === 0) {
          verificarIntentos()
        }
      }

      if (!lineas.value.includes("___")) {
        mensaje.value = true;
        resultado.value = true;
        boton.value = true;
        desabilitar.value = 'background-color: white; border: 2px solid black ; color: white'
      }
    }

    function verificarIntentos() {
      intentos.value = intentos.value - 1

      if (intentos.value == 5) {
        imagen.value = 'src/assets/imagen1.png';
      } else if (intentos.value == 4) {
        imagen.value = 'src/assets/imagen2.png';
      } else if (intentos.value == 3) {
        imagen.value = 'src/assets/imagen3.png';
      } else if (intentos.value == 2) {
        imagen.value = 'src/assets/imagen4.png';
      } else if (intentos.value == 1) {
        imagen.value = 'src/assets/imagen5.png';
      } else if (intentos.value == 0) {
        imagen.value = 'src/assets/imagen6.png';
        boton.value = true;
        mensaje.value = true;
        resultado2.value = true;
        desabilitar.value = 'background-color: white; border: 2px solid black; color: white'
      }
    }

    function reiniciar() {
      imagen.value = 'https://st2.depositphotos.com/5485596/8571/v/950/depositphotos_85710850-stock-illustration-hangman-doodle.jpg'
      intentos.value = 0;
      boton.value = false;
      juego.value = false;
      botones.value = true;
      mensaje.value = false;
      resultado2.value = false;
      resultado.value = false;
      desabilitar.value = '';
      intentos.value = 6;
    }

    return {
      palabraAleatoria,
      array,
      botones,
      nombres,
      animales,
      colores,
      letras,
      juego,
      lineas,
      letraSeleccionada,
      letraDesabilitada,
      imagen,
      boton,
      reiniciar,
      mensaje,
      resultado,
      resultado2,
      desabilitar,
      intentos
    }
  }
}

</script>

<style scoped>
.main {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.tamano {
  font-size: 50px;
}

.categoria {
  background-color: #1774ff;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transform-origin: bottom;
}

.categoria:hover {
  animation-name: bounce;
  animation-timing-function: ease;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-50px);
  }

  100% {
    transform: translateY(0);
  }
}

.imagen {
  padding-top: 15px;
  background-color: #1774ff;
  width: 100%;
  height: 200px;
}

.alert {
  background-color: #1774ff;
}

.tecladoContainer {
  display: grid;
  margin: 0 auto;
  grid-template-columns:
    repeat(5, minmax(100px, 1fr));
  align-items: stretch;
}

.button {
  border: 5px solid #1774ff;
  width: 80%;
  font-size: 30px;
  font-weight: bold;
  background-color: rgb(0, 0, 0);
  color: white;
  border-radius: 5px;
}

.button:hover {
  background-color: #1774ff;
  color: black;
}

.palabra {
  max-width: 75%;
  min-width: 100%;
}

.reiniciar {
  color: white;
  border-radius: 5px;
}

.position-absolute {
  bottom: 2%;
  right: 5%;
  padding: 15px;
  background-color: #1774ff;
  border-radius: 5px;
}

.texto-intentos{
  background-color: #1774ff;
  font-size: 25px;
  padding: 5px;
}

.intentos{
  background-color: #1774ff;
}

.reiniciar:hover {
  color: #1774ff;
  font-weight: bold;
}

@media screen and (max-width: 1200px) {
  .tamano {
    font-size: 30px;
  }

  .alert {
    margin-top: 45px !important;
  }

  .tecladoContainer {
    row-gap: 10px;
    padding: 10px;
  }

  .reiniciar {
    margin: 20px;
  }
}
</style>