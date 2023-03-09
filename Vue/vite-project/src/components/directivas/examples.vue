<!----------------------------------------------------->
<!-- Agregar un elemento al array -->
<!-- <template>
  <div>
    <ul>
      <li v-for="(leng, n) in lenguajes" :keys="leng">{{ leng }}</li>
    </ul>
    <button @click="agregar()">Agregar</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup(){
    let lenguajes = ref(["JavaScript", "Python", "Java", "C++", "C#"]);

    function agregar(){
      lenguajes.value.push("PHP");
    }

    return {
      lenguajes,
      agregar
    }
  }
}
</script>
<style>
  
</style> -->

<!----------------------------------------------------->
<!-- Una compañía de seguros para autos ofrece dos tipos
de póliza: cobertura amplia (A) y daños a terceros (B). -->

<!-- Para el plan A, la cuota base es de $500.00, y para
el B, de $250.00. -->

<!-- Ambos planes se les carga 10% del costoProducto si la persona
que conduce bebe alcohol, 5% si utiliza lentes, 5% si padece 
alguna enfermedad, y si tiene más de 40 años, se le carga 20%, 
de lo contrario sólo 10%. -->

<!-- <template>
  <div class="w-50 m-auto p-5">
    <h1 class="ps-5">Seguros</h1>
    <h5>Seleccione una opción:</h5>
    <select v-model="selected">
      <option disabled value="">Seleccione un elemento</option>
      <option>Cobertura amplia (A)</option>
      <option>Daños a terceros (B)</option>
    </select>
    <br><br>
    <h5>Seleccione:</h5>
    <input class="m-1" type="checkbox" id="edad" value="edad" v-model="checked"/>
    <label for="edad">Mayor a 40 años</label><br>
    <input class="m-1" type="checkbox" id="alcohol" value="alcohol" v-model="checked" />
    <label for="alcohol">Bebe alcohol</label><br>
    <input class="m-1" type="checkbox" id="lentes" value="lentes" v-model="checked" />
    <label for="lentes">Usa lentes</label><br>
    <input class="m-1" type="checkbox" id="enfermedad" value="enfermedad" v-model="checked" />
    <label for="enfermedad">Padece alguna enfermedad</label>
    <br><br>
    <button @click="verificar()">Calcular</button><br><br>
    <h1>{{ rta }}</h1>
  </div>
</template>
<script>
// Importar librerias
import { ref } from "vue";
export default {
  setup(){
    let checked = ref([]);
    let rta = ref();
    let selected = ref("");

    function verificar(){
      let suma = 0;
      let porcentaje = 0;
      let total = 0;
      if (selected.value == "Cobertura amplia (A)") {
        suma = 500;
      } else if (selected.value == "Daños a terceros (B)") {
        suma = 250;
      }
      if (checked.value.includes("edad")) {
        porcentaje += 20;
      } else {
        porcentaje += 10;
      }
      if (checked.value.includes("alcohol")) {
        porcentaje += 10;
      }
      if (checked.value.includes("lentes")) {
        porcentaje += 5;
      }
      if (checked.value.includes("enfermedad")) {
        porcentaje += 5;
      }
      total = suma + (suma * porcentaje / 100);
      rta.value = `El total a pagar es de: $${total}`;
    }

    return {
      rta,
      verificar,
      checked,
      selected
    }
  }
}
</script>
<style>
  
</style> -->

<!----------------------------------------------------->
<!-- Escriba un programa que solicite la edad de una persona
y determine si es menor o mayor de edad, deberá mostrar un mensaje. -->
<!-- <template>
  <div class="m-5">
    <h1>{{ rta }}</h1>
    <input type="number" v-model="n" placeholder="Ingrese su edad"/> <br><br>
    <button @click="verificar()">Verificar</button>
  </div>
</template>
<script>
// Importar librerias
import { ref } from "vue";
export default {
  setup() {
    let n = ref();
    let rta = ref();

    function verificar() {
      if (n.value >= 18) {
        rta.value = "Es mayor de edad";
      } else if (n.value >= 0 && n.value < 18)  {
        rta.value = "Es menor de edad";
      } else {
        rta.value = "No es una edad válida";
      }
    }

    return {
      n,
      rta,
      verificar
    };
  },
};
</script>
<style scoped></style> -->

<!-- <-------------- Radio operaciones ---------------->
<!-- <template>
  <div>
    <div>
      <input type="radio" id="suma" value="suma" v-model="picked" @change="changeSimbol()"/>
      <label for="suma">Sumar</label>
      <br />
      <input type="radio" id="resta" value="resta" v-model="picked" @change="changeSimbol()"/>
      <label for="resta">Restar</label>
      <br />
      <input
        type="radio"
        id="multiplicar"
        value="multiplicar"
        v-model="picked"
        @change="changeSimbol()"
      />
      <label for="multiplicar">Multiplicar</label>
      <br />
      <input type="radio" id="dividir" value="dividir" v-model="picked" @change="changeSimbol()"/>
      <label for="dividir">Dividir</label>
      <br />
      <br />
      <input
        type="number"
        v-model="n1"
        placeholder="Ingrese un número"
      /><br /><br />
      <span>{{ simbolo }}</span><br><br>
      <input
        type="number"
        v-model="n2"
        placeholder="Ingrese otro número"
      /><br /><br />
      <button @click="verificar()">Verificar</button><br><br>
      <span>El resultado es: {{ rta }}</span>
    </div>
  </div>
</template>

<script>
// Importar librerias
import { ref } from "vue";
export default {
  setup() {
    let picked = ref("");
    let n1 = ref();
    let n2 = ref();
    let rta = ref();
    let simbolo = ref();

    function changeSimbol() {
      if (picked.value == "suma") {
        simbolo.value = "+";
      } else if (picked.value == "resta") {
        simbolo.value = "-";
      } else if (picked.value == "multiplicar") {
        simbolo.value = "*";
      } else if (picked.value == "dividir") {
        simbolo.value = "/";
      }
    }

    function verificar() {
      if (picked.value == "suma") {
        rta.value = n1.value + n2.value;
      } else if (picked.value == "resta") {
        rta.value = n1.value - n2.value;
      } else if (picked.value == "multiplicar") {
        rta.value = n1.value * n2.value;
      } else if (picked.value == "dividir") {
        rta.value = n1.value / n2.value;
      } else {
        rta.value = "No se ha seleccionado una operación";
      }
      console.log(rta.value);
    }

    return {
      rta,
      n1,
      n2,
      picked,
      simbolo,
      verificar,
      changeSimbol
    };
  },
};
</script>
<style scoped></style> -->

<!-- <----------------- Par o inpar ------------------->
<!-- <template>
<div>
  <h1>{{ rta }}</h1>
  <input type="number" v-model="n" placeholder="Ingrese un número"><br><br>
  <button @click="verificar()">Verificar</button>
  <button @click="limpiarCampos()" id="limpiarCampos">Limpiar</button>
</div>
</template>

<script>
// Importar librerias
import { ref } from "vue";
// Exportar el componente
export default {
  setup() {
    // Variables publicas
    let n = ref("");
    let rta = ref("");

    // Funciones
    let verificar = () => {
      if (n.value == "") {
        rta.value = `Ingrese un número`;
      } else if(n.value == 0){
        rta.value = `El número ${n.value} es neutro`;
      } else if(n.value % 2 == 0) {
        rta.value = `El número ${n.value} es par`;
      } else if(n.value % 2 != 0){
        rta.value = `El número ${n.value} es inpar`;
      }
    };

    let limpiarCampos = () => {
      n.value = "";
      rta.value = "";
    }

    // Retornar las variables y funciones que se van a usar
    // en el template
    return { 
      n, rta, verificar, limpiarCampos
    };
  },
}

</script> -->

<!----------------------------------------------------->
<!---------------- Negativo o Positivo ---------------->

<!-- <template>
  <div>
    <h1 v-bind:style="color">{{ rta }}</h1>
    <input type="number" v-model="n" placeholder="Ingrese un número"><br><br>
    <button @click="verificar()">Verificar</button>
    <button @click="limpiarCampos()" id="limpiarCampos">Limpiar</button>
  </div>
</template>

<script>
// Importar librerias
import { ref } from "vue";
// Exportar el componente
export default {
  setup() {
    // Variables publicas
    let n = ref("");
    let rta = ref("");
    let color = ref("color: black");

    // Funciones
    let verificar = () => {
      if (n.value < 0) {
        rta.value = `El número ${n.value} es negativo`;
        color.value = "color: red";
      } else if(n.value > 0){
        rta.value = `El número ${n.value} es positivo`;
        color.value = "color: green";
      } else if (n.value == 0) {
        rta.value = `El número 0 es neutro`;
        color.value = "color: blue";
      }
    };

    let limpiarCampos = () => {
      n.value = "";
      rta.value = "";
      color.value = "color: black";
    }

    // Retornar las variables y funciones que se van a usar
    // en el template
    return { 
      n, rta, verificar, limpiarCampos, color
    };
  },
}

</script>

<style>
  button{
    margin: 5px;
  }
</style> -->
