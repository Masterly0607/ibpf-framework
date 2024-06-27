<template>
  <section id="about-this-course">
    <q-card class="ibf-card-2 q-pa-sm">
      <!-- Course Detail -->

      <q-card-section>
        <span v-html="payload"></span>
      </q-card-section>
    </q-card>
  </section>
</template>

<script setup>
const props = defineProps({
  payload: {
    type: [String, JSON, null],
    default: "",
  },
});
const checkout = () => {
  console.log("Checkout");
};
</script>
