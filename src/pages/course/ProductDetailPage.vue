<template>
  <q-page>
    <div>
      <div class="q-gutter-md">
        <div class="row justify-between">
          <q-parallax :src="product.thumbnail" :speed="0.5">
            <div class="absolute-full">
              <div
                style="padding: 40px; background: rgba(134, 134, 134, 0.6)"
                class="row justify-center items-start full-height"
              >
                <div class="col-12 col-md-8 q-gutter-xs">
                  <!-- course title -->
                  <div class="ibf-h3 q-mb-md text-weight-medium text-white">
                    {{ product.title }}
                  </div>
                  <!-- course subtitle -->
                  <q-item class="q-pa-none q-mt-xs">
                    <q-item-section side>
                      <q-icon size="sm" color="teal" name="mdi-library" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label caption class="text-grey-1">
                        Course Type
                      </q-item-label>
                      <q-item-label
                        class="text-weight-bold text-white"
                        lines="2"
                      >
                        {{ product.product_type.title }}
                      </q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item class="q-pa-none q-mt-xs">
                    <q-item-section side>
                      <q-icon size="sm" color="teal" name="mdi-library" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label caption class="text-grey-1">
                        Core Area
                      </q-item-label>
                      <q-item-label
                        class="text-weight-bold text-white"
                        lines="2"
                      >
                        {{ product.core_area.title }}
                      </q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item class="q-pa-none q-mt-xs">
                    <!-- duration -->
                    <q-item-section side>
                      <q-icon size="sm" color="teal" name="mdi-library" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-weight-bold text-white"
                        >Duration: 3 months</q-item-label
                      >
                    </q-item-section>
                    <!-- start on -->
                    <q-item-section side>
                      <q-icon size="sm" color="teal" name="mdi-library" />
                    </q-item-section>
                    <q-item-section class="q-px-md text-weight-bold text-white">
                      <q-item-label>Start On: 15-08-2024</q-item-label>
                    </q-item-section>
                  </q-item>
                </div>

                <!-- course image & subtitle -->
                <div class="col-12 col-md-4">
                  <q-card-section align="center">
                    <q-img
                      :src="product.thumbnail"
                      :ratio="1"
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
    <div class="ibf-container-1200 q-pa-md">
      <div class="row q-col-gutter-lg">
        <!-- About This Course -->
        <div class="col-12 col-md-8">
          <AboutProduct :payload="product.description" />
        </div>
        <!-- Price Option -->
        <div class="col-12 col-md-4">
          <PriceOption
            :payload="product.price_options"
            :price="product.price"
          />
        </div>
      </div>

      <!-- Promotion Bonner -->
      <PromotionProduct />

      <!-- Related Course -->
      <RelatedProduct />
    </div>

    <preview-json :list="product"></preview-json>
  </q-page>
</template>

<script setup>
import { computed, ref } from "vue";
import AboutProduct from "./components/AboutProduct.vue";
import RelatedProduct from "./components/RelatedProduct.vue";
import PriceOption from "./components/PriceOption.vue";
import PromotionProduct from "./components/PromotionProduct.vue";
import { useProductStore } from "src/stores/product-store";
const productStore = useProductStore();
const product = computed(() => productStore.getOneProduct);
</script>

<style lang="scss" scoped>
.certification-page {
  background-image: url("https://cdn.quasar.dev/img/mountains.jpg");
  // background-image: url("https://s3.ap-southeast-1.amazonaws.com/svc-lms-bucket.ibfkh.org/61f17951-d509-4b60-967b-a84442f949b6/courses/8a0332d1-db4d-40c6-b691-7ed0ddd2767c/materials/1700040760478-THEPRINCIPLLESOFESG.png");
  background-size: cover;
  background-position: center;
}
</style>
