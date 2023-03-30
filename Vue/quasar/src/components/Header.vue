<template>
  <q-header elevated>
    <q-toolbar>
      <div class="padre">
        <q-btn
          @click="toggleMenu()"
          flat
          round
          dense
          icon="menu"
          class="q-mr-sm"
        />
        <div v-show="showMenu" class="hijo">
          <Sidebar></Sidebar>
        </div>
      </div>
      <q-toolbar-title></q-toolbar-title>
      <q-btn flat round dense icon="whatshot" />
    </q-toolbar>
  </q-header>
</template>
<script setup>
import { ref } from "vue";
import Sidebar from "./Sidebar.vue";
const showMenu = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
</script>
<style scoped lang="sass">
.padre
  position: relative

.hijo
  position: absolute
  top: 42px
  left: -12px
  background-color: #1976D2
  width: 80px
  height: calc(100vh - 50px)
  z-index: 1
</style>
