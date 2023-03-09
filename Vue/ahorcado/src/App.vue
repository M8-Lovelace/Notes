<template>
  <div class="main">
    <Header />
    <Palabras />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Palabras from './components/Palabras.vue';
export default {
  components: {
    Header,
    Palabras
  },
}
</script>

<style scoped>
.main{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
