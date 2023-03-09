<!----------------------------------------------------->
<!---------------------- v-bind ----------------------->
<!-- <template>
  <div>
    <div v-bind:style="color"></div>
    <img v-bind:src="img" alt="" /><br /><br />
    <button @click="cambiar()" style="boder">Cambiar</button>
  </div>
</template>

<script>
// Importar librerias
import { ref } from "vue";
// Exportar el componente
export default {
  setup() {
    // Variables publicas
    let img = ref(
      "https:www.arsys.es/blog/file/uploads/2020/04/01-vuejs.jpg"
    );
    let color = ref("background-color: blue; height: 100px;");

    function cambiar() {
      img.value =
        "https:www.anerbarrena.com/wp-content/uploads/2017/08/programacion-javascript-js-e1503258707880.jpg";
      color.value = "background-color:red ; height: 100px;";
    }

     // Retornar las variables y funciones que se van a usar
     // en el template
    return {
      img,
      cambiar,
      color
    };
  },
};
</script>

<style></style> -->