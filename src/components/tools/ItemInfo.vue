<template>
  <q-item class="q-px-none q-pb-md">
    <q-item-section side>
      <q-icon size="sm" color="white" :name="icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label caption class="text-grey-1 text-weight-light">
        {{ caption }}
      </q-item-label>
      <q-item-label class="text-weight-bold text-white" lines="2">
        {{ title }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
const props = defineProps({
  caption: {
    type: [String, Number, Boolean],
    default: "caption",
  },

  title: {
    type: [String, Number, Boolean],
    default: "title",
  },
  icon: {
    type: String,
    default: "mdi-star",
  },
});
</script>
