<template>
  <div class="row q-col-gutter-lg q-my-sm">
    <div
      class="col-12 col-sm-6 col-md-3"
      v-for="product in products"
      :key="product.id"
    >
      <q-intersection :key="product.id" once transition="scale">
        <q-card square class="ibf-card-2 full-height">
          <div class="full-height">
            <div
              id="clickable"
              style="cursor: pointer"
              @click="viewProductDetail(product)"
            >
              <q-img
                :src="product.thumbnail"
                spinner-color="primary"
                spinner-size="82px"
                :ratio="1"
              />

              <q-card-section class="q-pa-sm">
                <div
                  class="q-mt-sm ibf-h10 text-grey-7 text-weight-medium ibf-ellipsis"
                >
                  {{ product.title }}
                </div>
                <q-separator spaced />

                <div class="column">
                  <div class="q-mt-sm row q-gutter-x-sm items-center">
                    <q-icon color="grey-7" size="20px" name="mdi-earth" />
                    <div class="text-grey-8 ibf-h12 text-weight-light">
                      {{ product.product_type.title }}
                    </div>
                  </div>

                  <div class="q-my-md row q-gutter-x-sm items-center">
                    <q-icon
                      color="grey-7"
                      size="20px"
                      name="mdi-checkbox-blank-badge-outline"
                    />
                    <div class="text-grey-8 ibf-h12 text-weight-light">
                      {{ product.core_area.title }}
                    </div>
                  </div>

                  <div>
                    <q-badge
                      v-if="product.is_free"
                      color="secondary"
                      text-color="white"
                      label="Free"
                    />
                  </div>
                </div>
              </q-card-section>
            </div>

            <q-space />

            <q-card-section class="q-px-sm q-py-xs">
              <div class="row items-center justify-between">
                <div class="q-my-xs">
                  <div class="ibf-h12 text-weight-medium text-grey-6">
                    Start on:
                    <span class="text-weight-bold text-primary">
                      {{ product.start_date }}
                    </span>
                  </div>

                  <div class="ibf-h12 text-weight-medium text-grey-6">
                    Duration:
                    <span class="text-weight-bold text-primary">
                      {{ product.duration_text }}
                    </span>
                  </div>
                </div>
                <div>
                  <q-btn
                    v-if="checkInCart(product.id)"
                    flat
                    round
                    icon="mdi-cart"
                    color="red-7"
                    :to="{ name: 'cart-page' }"
                  />
                  <q-btn
                    v-else
                    flat
                    round
                    icon="mdi-cart-outline"
                    @click="addToCarts(product.id)"
                    color="grey"
                  />

                  <q-btn flat round icon="mdi-heart-outline" color="grey" />
                </div>
              </div>
            </q-card-section>
          </div>
        </q-card>
      </q-intersection>
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { useCartStore } from "src/stores/cart-store";
import { useProductStore } from "src/stores/product-store";
import { computed } from "vue";
import { useRouter } from "vue-router";
const productStore = useProductStore();
const $q = useQuasar();
const router = useRouter();
const props = defineProps({
  products: {
    type: [Array, null],
    required: true,
  },
});

const viewProductDetail = (product) => {
  const item = productStore.findProduct({
    id: product.id,
    code: product.product_code,
  });
  if (item) {
    productStore.storeOneProduct(item);
    router.push({
      name: "product-detail-page",
      params: { productCode: product.product_code, id: product.id },
    });
  } else {
    $q.notify({
      type: "negative",
      message: "Cannot find this item.",
    });
  }
};

const cartStore = useCartStore();
const cartItemsIds = computed(() => cartStore.getCartItemsIds || []);

const addToCarts = async (id) => {
  await cartStore.serverAddToCart(id);
};

const checkInCart = (id) => {
  return cartItemsIds.value.includes(id);
};
</script>
