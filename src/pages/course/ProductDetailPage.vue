<template>
  <q-page>
    <div class="certification-page" style="width: 100%; height: 500px">
      <!-- <AboutProduct></AboutProduct> -->
      <div class="row q-col-gutter-xs">
        <!-- Title Course -->
        <div class="col-12 col-md-8 q-pa-xl">
          <q-card class="q-pa-lg">
            <div class="text-h4">Certified Branch Manager</div>
            <div class="q-mt-sm text-grey">
              Created by IBF of Admin
              <br />
              Last updated 06/06/2024
              <br />
              Languages: English/Khmer
            </div>
            <div class="q-mt-md">
              <q-btn color="primary" label="Checkout" @click="checkout" />
            </div>
            <div class="q-mt-md text-center">
              <q-badge color="red">USD 150</q-badge>
              <q-badge outline color="grey" class="q-ml-sm">USD 300</q-badge>
              <q-badge color="green" class="q-ml-sm">50% off</q-badge>
            </div>
          </q-card>
        </div>

        <div class="col-12 col-md-4 q-pa-xl">
          <q-card class="q-pa-lg">
            <div class="text-h4">Certified Branch Manager</div>
            <div class="q-mt-sm text-grey">
              Created by IBF of Admin
              <br />
              Last updated 06/06/2024
              <br />
              Languages: English/Khmer
            </div>
            <div class="q-mt-md">
              <q-btn color="primary" label="Checkout" @click="checkout" />
            </div>
            <div class="q-mt-md text-center">
              <q-badge color="red">USD 150</q-badge>
              <q-badge outline color="grey" class="q-ml-sm">USD 300</q-badge>
              <q-badge color="green" class="q-ml-sm">50% off</q-badge>
            </div>
          </q-card>
        </div>

        <!-- <div class="q-pa-xl col-12 col-md-4">
          <q-card
            class="certification-page q-pa-lg"
            style="width: 100%; height: 400px"
          >
            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </q-card-section>

            <q-card-actions>
              <q-btn flat color="white" label="View" />
            </q-card-actions>
          </q-card>
        </div> -->
      </div>
    </div>

    <!-- IBF Container -->
    <div class="ibf-container-1200 q-py-xs">
      <!-- About This Course -->
      <AboutProduct></AboutProduct>

      <!-- Course Promotion -->
      <PromotionProduct></PromotionProduct>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import AboutProduct from "./components/AboutProduct.vue";
import PromotionProduct from "./components/PromotionProduct.vue";

const checkout = () => {
  console.log("Checkout");
};
</script>

<style lang="scss" scoped>
.certification-page {
  background-image: url("https://cdn.quasar.dev/img/mountains.jpg");
  background-size: cover;
  background-position: center;
}

.text-h4 {
  font-size: 24px;
}

.text-h5 {
  font-size: 20px;
}

.q-badge {
  font-size: 18px;
}
</style>
