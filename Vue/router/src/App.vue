<template>
  <div class="container-fluid p-0 position-relative uno">
    <div>
      <Header></Header>
    </div>
    <div class="row w-100">
      <Sidebar></Sidebar>
      <div class="p-0">
        <RouterView class="vistas"></RouterView>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'

</script>


<style scoped>
.vistas{
  margin-left: 90px;
  margin-right: 60px;
  padding: 25px;
}
</style>