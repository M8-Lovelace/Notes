<template>
  <button @click="notificarPapa" :style="generateButtonStyle()">
    {{ props.label }}
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { useCounterStore } from "@/stores/counter";

const contador = useCounterStore();

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "blue",
  },
  backgroundColor: {
    type: String,
    default: "blue",
  },
  padding: {
    type: String,
    default: "medium",
  },
  font: {
    type: String,
    default: "medium",
  },
});

const emit = defineEmits({
  testTest: null,
});

function notificarPapa() {
  contador.increment();
  emit("testTest", contador.count);
}

function generateButtonStyle() {
  return {
    // 'font-size': '20px',
    fontSize: props.font === "small" ? "10px" : "20px",
    backgroundColor: props.backgroundColor,
    color: props.color,
    padding: props.padding,
    borderRadius: "5px",
    border: "1px solid blue",
    cursor: "pointer",
  };
}

console.log(props);
</script>
