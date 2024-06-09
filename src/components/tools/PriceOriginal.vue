<template>
  <span class="text-red-5 text-weight-medium ibf-h9">
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

  isDecimals: {
    type: Boolean,
    default: true,
  },
});
</script>
