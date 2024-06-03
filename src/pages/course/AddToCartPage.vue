<template>
  <q-page class="q-pa-md">
    <div class="ibf-container-1200">
      <q-card square flat bordered>
        <q-card-section>
          <div class="text-h6 text-weight-bold text-primary">
            Check-out Items
          </div>
          <q-separator spaced />
        </q-card-section>

        <div v-for="i in 2" :key="i">
          <q-card-section horizontal>
            <q-card-section class="flex flex-center">
              <q-checkbox v-model="selectedItems" />
            </q-card-section>
            <q-card-section class="col-2 flex flex-center">
              <q-img
                class="rounded-borders"
                src="https://cdn.quasar.dev/img/parallax2.jpg"
              />
            </q-card-section>
            <q-card-section class="q-pt-xs">
              <div class="ibf-h6 q-mt-sm q-mb-xs">Title</div>
              <div class="text-caption text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </q-card-section>
            <q-card-section class="col-2 flex items-start justify-end">
              <q-input
                style="width: 90px"
                dense
                outlined
                v-model="text"
                type="number"
              >
                <template v-slot:prepend>
                  <q-icon
                    size="xs"
                    name="close"
                    @click="text = ''"
                    class="cursor-pointer"
                  />
                </template>
              </q-input>
            </q-card-section>
          </q-card-section>

          <q-separator spaced inset />
        </div>
        <q-card-actions align="right">
          <q-btn color="primary">Check-out</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const selectedItems = ref([]);
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
