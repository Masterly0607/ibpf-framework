<template>
  <div class="q-gutter-y-lg q-py-md">
    <div v-for="(product, index) in products" :key="index">
      <q-card square class="ibf-card-3">
        <q-card-section horizontal>
          <div class="q-pa-sm" id="clickable">
            <q-img
              :src="product.thumbnail"
              spinner-color="primary"
              spinner-size="82px"
              width="200px"
              height="200px"
            />
          </div>

          <q-card-section
            style="cursor: pointer; width: 100%"
            @click="viewProductDetail(product)"
          >
            <div
              class="ibf-h8 text-grey-8 ellipsis-2-lines text-weight-bold q-mb-sm"
            >
              {{ product.title }}
            </div>

            <!-- Type -->
            <div class="column full-height">
              <div class="q-mt-sm row q-gutter-x-sm items-center">
                <q-icon color="grey-7" size="sm" name="mdi-earth" />
                <div class="text-grey-8">
                  {{ product.product_type.title }}
                </div>
              </div>

              <div class="q-my-md row q-gutter-x-sm items-center">
                <q-icon
                  color="grey-7"
                  size="sm"
                  name="mdi-checkbox-blank-badge-outline"
                />
                <div class="text-grey-8">
                  {{ product.core_area.title }}
                </div>
              </div>

              <div class="q-my-xs row q-gutter-xl">
                <div class="text-weight-medium text-grey-6">
                  Start on:
                  <span class="text-weight-bold text-primary">
                    {{ product.start_date }}
                  </span>
                </div>

                <div class="text-weight-medium text-grey-6">
                  Duration:
                  <span class="text-weight-bold text-primary">
                    {{ product.duration_text }}
                  </span>
                </div>
              </div>
            </div>

            <!-- start date -->
          </q-card-section>

          <q-space />

          <q-card-section class="col-2 flex items-end justify-end">
            <div class="row items-center justify-between no-wrap">
              <div>
                <q-badge
                  v-if="product.is_free"
                  color="grey"
                  text-color="white"
                  label="Free"
                />

                <q-space v-else />
              </div>
              <div class="q-gutter-sm">
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
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "src/stores/cart-store";
import { computed } from "vue";
import { useProductStore } from "src/stores/product-store";
import { useRouter } from "vue-router";
const productStore = useProductStore();
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
