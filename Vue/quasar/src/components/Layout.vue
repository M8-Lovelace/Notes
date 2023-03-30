<template>
  <div>
    <q-layout
      view="lHh lpr lFf"
      container
      style="min-height: 100vh"
      class="shadow-2 rounded-borders"
    >
      <Header></Header>
      <div class="q-pa-xl">
        <router-view></router-view>
      </div>
      <Footer></Footer>
    </q-layout>
  </div>
</template>
<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>
