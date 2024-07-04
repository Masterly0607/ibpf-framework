<template>
  <q-page>
    <div v-if="isLoading">
      <ProductDetailSkeleton />
    </div>
    <div v-else>
      <div>
        <div class="q-gutter-md">
          <div class="row justify-between">
            <q-parallax
              :src="product.thumbnail"
              :height="$q.screen.gt.sm ? 420 : 340"
              :speed="0.5"
            >
              <div
                class="absolute-full q-px-lg q-py-lg"
                style="background: rgba(134, 24, 39, 0.9)"
              >
                <div
                  class="row justify-center items-start full-height ibf-container-1200"
                >
                  <div class="col-12 col-md-8">
                    <div class="ibf-h3 q-mb-md text-weight-medium text-white">
                      {{ product.title }}
                    </div>

                    <div class="row q-col-gutter-md q-mt-md">
                      <div class="col-6 col-md-3">
                        <item-info
                          :title="product.product_type.title"
                          caption="Course Type"
                          icon="mdi-earth"
                        />

                        <item-info
                          :title="product.core_area.title"
                          caption="Core Area"
                          icon="mdi-checkbox-blank-badge-outline"
                        />
                      </div>

                      <div class="col-6 col-md-3">
                        <item-info
                          :title="product.duration_text"
                          caption="Duration"
                          icon="mdi-clock-start"
                        />

                        <item-info
                          :title="product.start_date"
                          caption="Start on"
                          icon="mdi-calendar"
                        />
                      </div>
                    </div>
                  </div>

                  <!-- course image & subtitle -->
                  <div class="col-12 col-md-4" v-if="$q.screen.gt.sm">
                    <q-card-section align="center">
                      <q-img
                        :src="product.thumbnail"
                        :ratio="1"
                        width="300px"
                        spinner-color="primary"
                        spinner-size="82px"
                      />
                    </q-card-section>
                  </div>
                </div>
              </div>
            </q-parallax>
          </div>
        </div>
      </div>

      <!-- IBF Container -->
      <div class="ibf-container-1400 q-pa-md">
        <div class="row q-col-gutter-lg">
          <!-- Price Option -->
          <div class="col-12 col-md-4 order-md-last">
            <PriceOption
              :payload="product.price_options"
              :price="product.price"
            />
          </div>
          <!-- About This Course -->
          <div class="col-12 col-md-8">
            <AboutProduct :payload="product.description" />
          </div>
        </div>

        <!-- Related Course -->
        <RelatedProduct :product-id="product.id" />

        <!-- Promotion Bonner -->
        <PromotionProduct />
      </div>

      <preview-json :list="product"></preview-json>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ProductDetailSkeleton from "./components/ProductDetailSkeleton.vue";
import AboutProduct from "../components/AboutProduct.vue";
import RelatedProduct from "../components/RelatedProduct.vue";
import PriceOption from "../components/PriceOption.vue";
import PromotionProduct from "../components/PromotionProduct.vue";
import { useProductStore } from "src/stores/product-store";
import { useRoute } from "vue-router";
import { useQuasar } from "quasar";
const productStore = useProductStore();
const product = ref(null);
const route = useRoute();
const isLoading = ref(true);
const $q = useQuasar();

const checkProductAvailable = async () => {
  if (!productStore.isOneProduct) {
    const product_id = route.params.id;
    product.value = await productStore.serverFetchOneProduct(product_id);
  } else {
    product.value = productStore.getOneProduct;
  }

  if (product.value !== null) {
    setTimeout(() => {
      isLoading.value = false;
    }, 2000);
  }
};

onMounted(() => {
  checkProductAvailable();
});
</script>

<style lang="scss" scoped>
.certification-page {
  background-image: url("https://cdn.quasar.dev/img/mountains.jpg");
  // background-image: url("https://s3.ap-southeast-1.amazonaws.com/svc-lms-bucket.ibfkh.org/61f17951-d509-4b60-967b-a84442f949b6/courses/8a0332d1-db4d-40c6-b691-7ed0ddd2767c/materials/1700040760478-THEPRINCIPLLESOFESG.png");
  background-size: cover;
  background-position: center;
}
</style>
