<template>
  <q-page padding>
    <div class="ibf-container-1200 q-gutter-lg">
      <!-- Title -->
      <div class="ibf-h3 text-weight-bold justify-center" align="center">
        About Us
        <q-separator size="4px" spaced="3px" style="width: 150px" color="primary" />
      </div>

      <!-- Subtittle -->
      <div class="ibf-h5 text-weight-medium"> Institute of Banking and Finance </div>
      <div class="ibf-h11 text-grey-7">
        The Institute of Banking & Finance Cambodia (formely know as CIB) has been set up by The Association of Banks in
        Cambodia (ABC), with the assistance from the Mekong Private Sector Development Facility (MPDF), the Asian
        Development Bank, and the ASEAN Bankers’ Association in January 2004. The Institute provides skill trainings,
        accreditations, local certifications, and international-standard ones but locally affordable for ABC’s members
        who comprise of Cambodia’s commercial banks, specialized banks, and microfinance institutions. <br><br> To
        uplift
        Cambodian’s bankers to international standard, the Institute of Banking and Finance has partnered with
        globally-recognized institutions, including the International Compliance Association (ICA), UK, the Institute of
        Chartered Compliance Officers (ICCO), Singapore, the International Cyber Threat Task Force (ICTTF), Moody’s
        Analytics, USA, HRCI (USA), Chartered Banker Institute (CBI), UK, the London Institute of Banking and Finance
        (LIBF), UK, and the Fintech Academy Singapore (FTA).
      </div>

      <!-- image -->
      <div>
        <img src="~assets/images/our-team.png" width="100%" height="fill" :ratio="1" />
      </div>

      <!-- Contact us button -->
      <div class="cart-bacground row q-pa-sm">
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
          <a href="#" class="text-weight-medium ibf-h11 text-primary">
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
          <a href="#" class="text-weight-medium ibf-h11 text-primary">
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
import AboutIBF from "./component-about/AboutIBF.vue";
import AboutHistoryIBF from "./component-about/AboutHistoryIBF.vue";
import AboutManagementTeam from "./component-about/AboutManagementTeam.vue";
</script>

<style lang="scss" scoped>
.cart-bacground {
  background-color: #8c1925;
}

.background {
  background-color: #ffffff;
}
</style>
