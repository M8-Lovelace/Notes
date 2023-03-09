<!----------------------------------------------------->
<!--------------------- v-model ----------------------->
<!-- Es un puente bidireccional, es reactivo por ambos 
lados -->
<!-- <template>
  <div>
    <input type="text" v-model="name"><br><br>
    <button @click="change()">Cambiar</button>
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
// Importar librerias
import { ref } from "vue";
// Exportar el componente
export default {
  // Funcion setup que retorna un objeto con las variables
  // y funciones
  setup() {
    // Variables publicas
    let name = ref("");

    // Funciones
    function change(){
      // El componente se actualiza automaticamente de la 
      // variable name
      name.value = "Hola mundo";
    }
    
    // Retornar las variables y funciones que se van a usar 
    // en el template
    return {
      name,
      change
    }
  }
};
</script> -->