<template>
  <q-page padding>
    <div class="ibf-container-1200 q-gutter-lg">
      <!-- Title -->
      <div class="ibf-h6 text-weight-bold justify-center flex">About Us</div>

      <!-- Subtittle -->
      <div class="ibf-h11 tex-grey-8" align="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Curabitur tempus urna at turpis condimentum lobortis.
      </div>

      <!-- image -->
      <div>
        <img
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          width="100%"
          height="500px"
          :ratio="1"
        />
      </div>

      <!-- Contact us button -->
      <div class="cart-bacground row q-pa-md">
        <div class="col-10 q-pa-sm text-white text-weight-regular">
          For more information please contact us!
        </div>
        <q-btn flat color="white" label="Contact Us" @click="contactUs" />
      </div>

      <!-- About IBF -->
      <div class="q-pa-sm background">
        <AboutIBF />
      </div>

      <q-separator />

      <!-- History of IBF -->
      <div>
        <!-- Title -->
        <div class="text-weight-bold ibf-h6 justify-center flex">
          Our History of IBF
        </div>

        <AboutHistoryIBF />
      </div>

      <!-- Our Vission & Our Mission -->
      <div class="row background q-col-gutter-md">
        <div class="col-12 col-md-6 q-px-xl q-py-lg">
          <div class="q-py-sm q-px-xl text-weight-bold ibf-h8">Our Vision</div>
          <div class="q-py-sm">
            Build sustainable finance through <br />
            capacity building
          </div>
          <a href="#" class="text-weight-bold ibf-h10 text-primary">
            LEARN MORE
            <q-icon name="arrow_forward" />
          </a>
        </div>

        <div class="col-12 col-md-6 q-px-xl q-py-lg">
          <div class="q-py-sm q-px-xl text-weight-bold ibf-h8">Our Mission</div>
          <div class="q-py-sm">
            <li>Improve corporate governance</li>
            <li>Elevate local practices toward international best practices</li>
          </div>
          <a href="#" class="text-weight-bold ibf-h10 text-primary">
            LEARN MORE
            <q-icon name="arrow_forward" />
          </a>
        </div>
      </div>

      <!-- IBF management team -->
      <div>
        <AboutManagementTeam />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import AboutIBF from "./component/AboutIBF.vue";
import AboutHistoryIBF from "./component/AboutHistoryIBF.vue";
import AboutManagementTeam from "./component/AboutManagementTeam.vue";
</script>

<style lang="scss" scoped>
.cart-bacground {
  background-color: #8c1925;
}
.background {
  background-color: #ffffff;
}
</style>
