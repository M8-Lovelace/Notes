<template>
  <div>
    <div class="fondo">
      <Header />
      <Table />
      <Footer />
    </div>
  </div>
</template>

<script>
import Table from './components/Table.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

export default {
  components: {
    Table,
    Footer,
    Header
  }
}
</script>