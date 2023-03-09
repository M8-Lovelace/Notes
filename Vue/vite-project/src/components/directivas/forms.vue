<!-------------------- DIRECTIVAS --------------------->

<!----------------------------------------------------->
<!---------------------- Radio ------------------------>
<!-- <template>
  <div>
    <input type="radio" id="uno" value="Uno" v-model="picked" />
    <label for="Uno">Uno</label>
    <br />
    <input type="radio" id="Dos" value="Dos" v-model="picked" />
    <label for="Dos">Dos</label>
    <br />
    <input type="radio" id="Dos" value="Tres" v-model="picked" />
    <label for="Tres">Tres</label>
    <br />
    <span :style="picked=='Uno'?'color:blue':picked=='Dos'?'color:green':picked=='Tres'?'color:purple':'color:gray'">Eligió: {{ picked }}</span>
  </div>
</template>

<script>
// Importar librerias
import { ref } from "vue";
export default {
  setup() {
    let picked = ref("");
    return {
      picked,
    };
  },
};
</script>

<style scoped></style> -->

<!----------------------------------------------------->
<!--------------------- checkbox ---------------------->
<!-- <template>
  <div id="example-3">
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <br />
    <span>Checked names: {{ checkedNames }}</span>
  </div>
</template>

<script>
// Importar librerias
import { ref } from "vue";
// Exportar el componente
export default {
  setup() {
    // Variables publicas
    let checkedNames = ref([]);

    // Retornar las variables y funciones que se van a usar
    return {
      checkedNames,
    };
  },
};
</script>

<style scoped></style> -->

<!---------------------- Select ----------------------->
<!-- <template>
  <div class="w-50 m-auto p-5">
    <select v-model="selected">
      <option disabled value="">Seleccione un elemento</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <br><br>
    <span>Seleccionado: {{ selected }}</span>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    let selected = ref("");
    return {
      selected
    };
  },
};
</script>

<style scoped></style> -->