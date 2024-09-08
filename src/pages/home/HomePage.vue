<template>
  <q-page>
    <div>
      <!-- background image for home page -->
      <home-carousel />
      <!--<q-parallax
        src="/images/ibf-certificate.png"
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
    <div class="ibf-container-1200 q-pa-sm">
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
                  <div class="text-h6 q-pa-sm">webinar</div>
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
        <InformationIBF />
      </div>

      <!-- Why choose IBF -->
      <div class="row q-col-gutter-lg">
        <div v-for="(data, index) in dataInfo" :key="index" class="col-6">
          <div class="row q-gutter-x-sm items-center q-py-sm">
            <q-icon color="primary" size="50px" :name="data.icon" />
            <div class="text-grey-8 ibf-h9 text-weight-bold">
              {{ data.title }}
            </div>
          </div>
          <div class="ibf-h11 text-weight-regular text-grey-7">
            {{ data.content }}
          </div>
        </div>
      </div>

      <!-- Get started -->
      <div class="q-py-lg" align="center">
        <q-btn
          class="ibf-card-1"
          color="primary"
          label="Get Started"
          @click="router.push({ name: 'login-page' })"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import HomeCarousel from "./component/HomeCarousel.vue";
import { useRouter } from "vue-router";
import InformationIBF from "./component/InformationIBF.vue";
const router = useRouter();

const url = "https://www.ibfkh.org/images/alter-ibf-image.jpg";

const dataInfo = ref([
  {
    id: 1,
    icon: "mdi-certificate",
    title: "Graduate with a certificate",
    content:
      "Graduate with a verified certificate from Impact Hub Phnom Penh when you finish all the course content to share with your network",
  },
  {
    id: 2,
    icon: "mdi-account-group",
    title: "Online Community",
    content:
      "Meet other changemakers across the country in our online Facebook group. You can access more resources, ask questions, get support from our experts, build your network, and join virtual events and peer coaching circles.",
  },
  {
    id: 3,
    icon: "mdi-translate",
    title: "Learn in Your Language",
    content:
      "We teach in Khmer language, but blend English terms in where necessary (e.g. when a direct translation is difficult) to ensure you have the best learning experience and help you learn specific business terms. No more confusing translations!",
  },
  {
    id: 4,
    icon: "mdi-comment-question",
    title: "What is IBF?",
    content:
      "The Institute of Banking and Finance (IBF) is a professional institute that provides training and certification for banking professionals in Cambodia. The institute offers a wide range of courses, including international certifications, local certifications, webinars, and short courses. ",
  },
]);
</script>
