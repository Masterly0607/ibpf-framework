<template>
  <section id="price-option">
    <q-card class="ibf-card-2">
      <q-card-section class="row items-center justify-between">
        <div class="ibf-h9 text-weight-medium text-grey-7">Original Price</div>
        <price-original textSize="ibf-h5" :price="price"></price-original>
      </q-card-section>

      <q-separator inset color="red" size="2px" />
      <q-card-section>
        <!-- price option -->
        <div class="ibf-h9 text-weight-medium text-grey-7 q-my-sm">
          Price Options
        </div>

        <div v-for="(item, index) in priceOptionItems" :key="index">
          <q-item class="q-px-none">
            <q-item-section side top>
              <q-icon size="md" color="primary" name="mdi-wallet-bifold" />
            </q-item-section>
            <q-item-section>
              <q-item-label>
                <price-original :price="item.price" />
              </q-item-label>

              <q-item-label caption lines="2">
                {{ item.title }} Member
              </q-item-label>
              <q-separator spaced v-if="index < priceOptionItems.length - 1" />
            </q-item-section>
          </q-item>
        </div>
      </q-card-section>

      <q-space />

      <q-card-section>
        <div class="row">
          <div class="col">
            <q-btn
              v-if="isInCart"
              no-caps
              square
              size="lg"
              icon="mdi-cart-check"
              style="width: 98%"
              color="primary"
              label="Checkout"
              :to="{ name: 'cart-page' }"
            />
            <q-btn
              v-else
              no-caps
              square
              size="lg"
              icon="mdi-cart-variant"
              style="width: 98%"
              color="primary"
              label="Add to cart"
              @click="addToCarts(productId)"
            />
          </div>

          <div class="col-2 flex flex-center">
            <q-btn
              flat
              aria-label="Favorite"
              size="lg"
              icon="mdi-heart-outline"
            />
          </div>
        </div>
      </q-card-section>

      <q-separator spaced size="4px" color="grey-2" />

      <q-card-section align="center" class="q-gutter-y-sm">
        <div class="text-grey-8 ibf-9">Contact Us For More Information</div>

        <div class="text-grey-8 ibf-9">(Monday - Friday, 8 AM - 5 PM)</div>
        <div class="text-grey-8 ibf-9">(+855) 23 224 313/ 61 626 902</div>
      </q-card-section>
    </q-card>
  </section>
</template>

<script setup>
import { useCartStore } from "src/stores/cart-store";

const props = defineProps({
  priceOptionItems: {
    type: [Array, null],
  },

  price: {
    type: Number,
    default: 0,
  },
  isInCart: {
    type: Boolean,
    default: false,
  },
  productId: {
    type: [Number, String, null],
    default: null,
  },
});
const cartStore = useCartStore();

const addToCarts = async (id) => {
  await cartStore.serverAddToCart(id);
};
</script>
