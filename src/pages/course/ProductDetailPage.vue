<template>
  <q-page>
    <div>
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
        style="width: 100%; height: 55vh"
      >
        <div class="absolute-full flex flex-center">
          <div class="row justify-center items-center">
            <div class="col-12 col-md-8 q-px-xl q-gutter-xs">
              <!-- course title -->
              <div class="ibf-h3 text-white text-weight-medium">
                {{ product.title }}
              </div>
              <!-- course subtitle -->
              <q-item class="q-pa-none q-mt-xs">
                <q-item-section side>
                  <q-icon size="sm" color="teal" name="mdi-library" />
                </q-item-section>
                <q-item-section>
                  <q-item-label caption class="text-grey-2">
                    Course Type
                  </q-item-label>
                  <q-item-label lines="2">
                    {{ product.product_type.title }}
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-item class="q-pa-none q-mt-xs">
                <q-item-section side>
                  <q-icon size="sm" color="teal" name="mdi-library" />
                </q-item-section>
                <q-item-section>
                  <q-item-label caption class="text-grey-2">
                    Core Area
                  </q-item-label>
                  <q-item-label lines="2">
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
                  <q-item-label>Duration: 3 months</q-item-label>
                </q-item-section>
                <!-- start on -->
                <q-item-section side>
                  <q-icon size="sm" color="teal" name="mdi-library" />
                </q-item-section>
                <q-item-section class="q-px-md">
                  <q-item-label>Start On: 15-08-2024</q-item-label>
                </q-item-section>
              </q-item>
            </div>

            <!-- course image & subtitle -->
            <div class="col-12 col-md-4 q-px-xl">
              <q-card-actions align="center">
                <img
                  src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
                  style="width: 150px; height: 150px"
                />
                <div class="text-grey-3 q-py-md">
                  Created by IBF of Admin
                  <br />
                  Last updated 06/06/2024
                </div>
              </q-card-actions>
            </div>
          </div>
        </div>
      </q-img>
    </div>

    <!-- IBF Container -->
    <div class="ibf-container-1200 q-pa-md">
      <div class="row q-col-gutter-lg">
        <!-- About This Course -->
        <div class="col-12 col-md-8">
          <AboutProduct></AboutProduct>
        </div>
        <!-- Price Option -->
        <div class="col-12 col-md-4">
          <PriceOption></PriceOption>
        </div>
      </div>

      <!-- Promotion Bonner -->
      <PromotionProduct></PromotionProduct>

      <!-- Related Course -->
      <RelatedProduct></RelatedProduct>
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
