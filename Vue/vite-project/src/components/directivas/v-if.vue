<!----------------------------------------------------->
<!----------------------- v-if ------------------------>
<!-- <h1 :style="n==0?'background-color:gray':n>0?'background-color:blue':'background-color:red'">color</h1> -->

<!-- <template>
  <div>
    <input type="text" v-model="n" />
    <img
      v-if="n == 0"
      src="https://www.arsys.es/blog/file/uploads/2020/04/01-vuejs.jpg"
      alt=""
    />
    <img
      v-else-if="n > 0 && n < 10"
      src="https://i0.wp.com/blog.webtraining.zone/wp-content/uploads/2018/01/curso-profesional-vue.jpg?resize=825%2C510&ssl=1"
      alt=""
    />
    <img
      v-else
      src="https://lenguajejs.com/vuejs/introduccion/que-es-vue/vuejs.png"
      alt=""
    />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let n = ref(0);
    //n.value>0?"positivo":"negativo"
    return {
      n,
    };
  },
};
</script> -->