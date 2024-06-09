<template>
  <span :class="['text-weight-medium', color, textSize]">
    <span class="ibf-h12">{{ currency }}</span>
    {{ formatCurrency(price, isDecimals) }}
  </span>
</template>

<script setup>
import { formatCurrency } from "src/helpers/utils";
const props = defineProps({
  currency: {
    type: String,
    default: "USD",
  },
  price: {
    type: Number,
    default: 0,
  },

  textSize: {
    type: String,
    default: "ibf-h9",
  },

  color: {
    type: String,
    default: "text-red-5",
  },

  isDecimals: {
    type: Boolean,
    default: true,
  },
});
</script>
