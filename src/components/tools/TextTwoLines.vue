<template>
  <div class="text-with-lines q-py-md q-px-lg">
    <div class="line"></div>
    <div class="text text-grey-6 q-px-md">{{ middleText }}</div>
    <div class="line"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "or",
  },
});
const middleText = ref(props.text);
</script>

<style scoped>
.text-with-lines {
  display: flex;
  align-items: center;
  text-align: center;
}

.line {
  flex: 1;
  height: 1px;
  background-color: #c0c0c0;
  /* Line color */
}

.text {
  white-space: nowrap;
}
</style>
