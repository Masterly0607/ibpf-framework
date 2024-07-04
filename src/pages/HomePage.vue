<template>
  <q-page>
    <div class="row justify-between">
      <q-parallax
        src="https://cdn.quasar.dev/img/mountains.jpg"
        height="470"
        speed="0.5"
      >
        <div class="absolute-full">
          <div
            style="background: rgba(134, 24, 39, 0.5)"
            class="row justify-center items-start full-height"
          >
            <div class="col-12 col-md-8 q-pa-xl">
              <div class="ibf-h3 q-mb-md text-weight-medium text-white">
                Welcome to IBF
              </div>
            </div>
          </div>
        </div>
      </q-parallax>

      <!-- <img
        alt="IBF logo"
        src="https://cdn.quasar.dev/img/mountains.jpg"
        width="100%"
        :height="450"
        :speed="0.5"
      /> -->
    </div>
    <!-- IBF Container
     v-for="(product, index) in products" :key="index"-->
    <div class="ibf-container-1200 q-pa-md">
      <div class="ibf-h8 text-weight-bold">Course Type</div>
      <div>
        <q-card square flat bordered>
          <q-card-section>
            <div class="row q-col-gutter-md">
              <div class="col-6 col-md-3">
                <q-card class="ibf-card-1">
                  <img :src="url" width="100%" height="auto" />
                  <q-card-section class="q-py-lg q-pa-none" align="center">
                    <div class="text-h6 q-pa-sm">International</div>
                    <!-- <div class="ibf-h1 text-primary q-pa-sm">5</div> -->
                  </q-card-section>
                </q-card>
              </div>

              <div class="col-6 col-md-3">
                <q-card class="ibf-card-1">
                  <img :src="url" width="100%" height="auto" />
                  <q-card-section class="q-py-lg q-pa-none" align="center">
                    <div class="text-h6 q-pa-sm">Local</div>
                    <!-- <div class="ibf-h1 text-primary q-pa-sm">5</div> -->
                  </q-card-section>
                </q-card>
              </div>

              <div class="col-6 col-md-3">
                <q-card class="ibf-card-1">
                  <img :src="url" width="100%" height="auto" />
                  <q-card-section class="q-py-lg q-pa-none" align="center">
                    <div class="text-h6 q-pa-sm">Short Courses</div>
                  </q-card-section>
                </q-card>
              </div>

              <div class="col-6 col-md-3">
                <q-card class="ibf-card-1">
                  <img :src="url" width="100%" height="auto" />
                  <q-card-section class="q-py-lg q-pa-none" align="center">
                    <div class="text-h6 q-pa-sm">Short Courses</div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!--  -->
      <div class="ibf-h10 text-weight-medium">
        Your gateway to lifelong learning
      </div>
      <div class="q-py-md">
        <q-btn
          color="primary"
          label="Get Started"
          @click="router.push({ name: 'login-page' })"
        />
      </div>
    </div>

    <!-- <div class="ibf-container-1200">
      <div class="ibf-h8 text-weight-bold">Course Type</div>
      <div class="ibf-h10 text-weight-medium">
        Your gateway to lifelong learning
      </div>
      <div class="q-py-md">
        <q-btn
          color="primary"
          label="Get Started"
          @click="router.push({ name: 'login-page' })"
        />
      </div>
    </div> -->
  </q-page>
</template>

<script setup>
import { useProductStore } from "src/stores/product-store";

const productStore = useProductStore();

const url = "https://www.ibfkh.org/images/alter-ibf-image.jpg";
</script>
