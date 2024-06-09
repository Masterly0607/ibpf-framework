<template>
  <div>
    <q-item>
      <q-item-section side>
        <q-icon :size="iconSize" color="primary" :name="icon" />
      </q-item-section>
      <q-item-section>
        <q-item-label class="ibf-h2 text-weight-bold">
          {{ title }}
        </q-item-label>
        <q-item-label caption class="ibf-h10 text-weight-light">
          {{ subtitle }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Title here",
  },
  subtitle: {
    type: String,
    default: "Subtitle here",
  },
  icon: {
    type: String,
    default: null,
  },
  iconSize: {
    type: String,
    default: "50px", // Default size for the icon
  },
});
</script>
