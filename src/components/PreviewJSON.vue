<template>
  <div class="json-container">
    <div class="ibf-h3 text-grey-9 text-weight-bold q-my-sm"># {{ title }}</div>

    <q-separator spaced />

    <JsonConvert :data="list" />
  </div>
</template>

<script setup>
import JsonConvert from "./JsonConvert.vue";

const props = defineProps({
  list: [Object, Array, String, Number, Boolean, null],
  title: {
    type: String,
    default: "Data Set",
  },
});
</script>

<style lang="scss" scoped>
.json-container {
  font-family: monospace;
  line-height: 1.5;
  overflow: auto;
  border: 0.5px solid gray;
  padding: 20px;
}
</style>
