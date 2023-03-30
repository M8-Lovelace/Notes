<template>
  <Button @test-test="changeSpanData" label="Soy una prop" color="red" backgroundColor="white" padding="20px"
    font="small"></Button>
  <span>{{ contador.count }}</span>
  <!-- <kButton @test-test="changeSpanData" label="Soy una prop" color="blue" backgroundColor="white" padding="20px"
    font="small"></kButton> -->
  <k-button @test-test="changeSpanData" label="Soy una prop" color="blue" backgroundColor="white" padding="20px"
    font="small"></k-button>
  <span>{{ contador.doubleCount }}</span>
</template>

<script setup>
import Button from '../components/Button.vue';

// Importar kButton
// import KButton from '../components/k-button.vue';
import kButton from '../components/k-button.vue';

import { useCounterStore } from '@/stores/counter';

const contador = useCounterStore();

function changeSpanData(count) {
  console.log(count);
}
</script>
