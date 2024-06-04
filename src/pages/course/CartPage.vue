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

        <div v-for="(cartItem, itemIndex) in cartItems.items" :key="itemIndex">
          <q-card-section class="q-pa-none">
            <q-item class="q-px-sm">
              <q-item-section side top>
                <q-checkbox v-model="selectedItems" :val="cartItem.course.id" />
              </q-item-section>
              <q-item-section thumbnail top>
                <img
                  class="rounded-borders"
                  src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label class="ibf-h11 text-weight-medium">
                  {{ cartItem.course.title }}
                </q-item-label>

                <q-item-label caption lines="2">
                  {{ cartItem.course.description }}
                </q-item-label>

                <div class="q-my-md row q-gutter-x-sm">
                  <q-badge
                    color="red"
                    text-color="white"
                    :label="cartItem.course.type_id"
                  />
                  <q-badge
                    color="red"
                    text-color="white"
                    :label="cartItem.course.coreArea_id"
                  />
                </div>

                <div class="text-red-5 text-weight-medium ibf-h10">
                  {{ `${cartItem.course.currency} ${cartItem.course.price}` }}
                </div>

                <div
                  v-if="cartItem.course.isDiscount"
                  class="text-red text-weight-medium ibf-h11"
                >
                  <span class="text-weight-light ibf-h12 text-grey-9">
                    After discount:
                  </span>
                  {{
                    `${cartItem.course.currency} ${cartItem.course.afterDiscount}`
                  }}
                </div>
              </q-item-section>
              <q-item-section side top>
                <q-input
                  style="width: 60px"
                  dense
                  outlined
                  v-model="text"
                  type="number"
                >
                  <template v-slot:before>
                    <q-icon
                      size="15px"
                      name="close"
                      @click="text = ''"
                      class="cursor-pointer"
                    />
                  </template>
                </q-input>
              </q-item-section>
            </q-item>
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
import { useCartStore } from "src/stores/cart-store";
import { onMounted, ref } from "vue";
const selectedItems = ref([]);
const cartStore = useCartStore();
const cartItems = ref([]);

const fetchCartItems = async () => {
  await cartStore.serverFetchCartItems();
  cartItems.value = cartStore.getCartItems;
};

onMounted(() => {
  fetchCartItems();
});
</script>

<style scoped>
.q-pa-md {
  padding: 16px;
}
</style>
