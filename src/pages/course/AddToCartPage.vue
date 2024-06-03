<template>
  <q-page class="q-pa-md">
    <div class="ibf-container-1200">
      <q-card square>
        <q-card-section>
          <div class="text-h6">Product Name</div>
          <!-- <q-input v-model="quantity" type="number" label="Quantity" /> -->
        </q-card-section>

        <q-card-actions align="right">
          <q-btn color="primary" @click="addToCart">Add to Cart</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

// const quantity = ref(1);
// const cartStore = useCartStore();

// const addToCart = () => {
//   cartStore.addItem({
//     name: "Product Name",
//     quantity: quantity.value,
//   });
// };
</script>

<style scoped>
.q-pa-md {
  padding: 16px;
}
</style>
