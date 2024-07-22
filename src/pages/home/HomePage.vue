<template>
  <q-page>
    <div>
      <!-- background image for home page -->
      <home-carousel />
      <!--<q-parallax
        src="~assets/images/ibf-certificate.png"
        :height="500"
        :speed="0.5"
      >
        <div class="absolute-full">
          <div
            style="background: rgba(134, 24, 40, 0.4)"
            class="row justify-center items-start full-height"
          >

            <div class="col-12 col-md-8 q-pa-xl">
              <div class="ibf-h3 q-mb-md text-weight-medium text-white">
                Welcome to IBF
              </div>
            </div>
          </div>
        </div>
      </q-parallax>-->
    </div>
    <!-- IBF Container -->
    <div class="ibf-container-1200 ">
      <div>
        <!-- Title & subtitle -->
        <div class="ibf-h6 text-weight-bold q-py-sm">Course Type</div>
        <span class="ibf-h10 text-weight-regular text-grey-7">
          IBF offers both local certifications and international standard <br />
          ones at a locally affordable scheme for professional bankers <br />
          in Cambodia.
        </span>

        <!-- Course Type -->
        <div class="q-py-md">
          <div class="row q-col-gutter-lg full-height">
            <div class="col-6 col-md-3">
              <q-card class="ibf-card-1">
                <img :src="url" width="100%" height="auto" />
                <q-card-section class="q-py-lg q-pa-none" align="center">
                  <div class="text-h6 q-pa-sm">International</div>
                </q-card-section>
              </q-card>
            </div>

            <div class="col-6 col-md-3">
              <q-card class="ibf-card-1">
                <img :src="url" width="100%" height="auto" />
                <q-card-section class="q-py-lg q-pa-none" align="center">
                  <div class="text-h6 q-pa-sm">Local</div>
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
        </div>
      </div>

      <!-- what is IBF -->
      <div>
        <IntroductionProduct />
      </div>

      <!-- Why choose IBF -->
      <div class="q-py-md" align="center">
        <q-btn color="primary" label="Get Started" @click="router.push({ name: 'login-page' })" />
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
import HomeCarousel from "./component/HomeCarousel.vue";
import { useRouter } from "vue-router";
import IntroductionProduct from "./component/IntroductionProduct.vue";
const router = useRouter();

const url = "https://www.ibfkh.org/images/alter-ibf-image.jpg";
</script>
