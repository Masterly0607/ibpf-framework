<template>
  <span class="q-ml-xs ibf-h11 text-grey-7 text-strike text-weight-light">
    {{ `${currency} ${formatCurrency(price, isDecimals)}` }}
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
