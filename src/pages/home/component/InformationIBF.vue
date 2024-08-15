<template>
  <div class="q-py-md">
    <!-- IBF Title -->
    <div class="ibf-h3 text-weight-medium" align="center">
      Institute of Banking & Finance (IBF)
      <q-separator size="5px" spaced="10px" style="width: 400px" color="primary" />
    </div>
    <!-- Subtitle -->
    <div class="ibf-h10 text-weight-regular text-grey-6 q-py-lg" align="center">
      Discover endless possibilities at IBF's core areas – where knowledge is
      your greatest asset.
    </div>

    <div class="row q-col-gutter-md q-pt-md">
      <!-- image -->
      <div class="col-12 col-md-4">
        <q-img :ratio="1" fit="fill" src="~assets/images/webinar.png" width="100%" height="365px" />
      </div>

      <div class="col-12 col-md-8">
        <div class="ibf-h10 text-grey-8">
          Post-pandemic is observed to be the challenging time for the banking
          industry, coupled by the rapid changes and increasing demand of
          stakeholder landscape and the advancement of technologies. To stay
          relevant and resilient, banks and financial institutions (BFls) need
          not only to keep up with the latest trends, developments, and best
          practices, but also steer their current resources to adapt and
          innovate; that is, they need to be able to effectively localize these
          trends into their operations and future growth.
          <br /><br />
          The webinar discusses the global and regional trends that affect the
          banking industry, and how the BFls can prepare themselves for the
          future, by showcasing success stories from exemplary leaders who have
          gone through journeys of changes and innovations.
        </div>

        <div class="q-py-lg">
          <p class="ibf-h10 text-grey-8">
            <span v-if="!isExpanded">
              The webinar discusses the global and regional trends that affect the banking industry, and how the BFls
              can prepare themselves for the future, by showcasing success stories from exemplary ...
              <br>
              <span @click="toggleExpand" class="text-weight-medium ibf-h11 text-primary">
                See more
                <q-icon name="arrow_forward" />
              </span>
            </span>
            <span v-else>
              The webinar discusses the global and regional trends that affect the banking industry, and how the BFIs
              can prepare themselves for the future, by showcasing success stories from exemplary leaders who have gone
              through journeys of changes and innovations.
              <br>
              <span @click="toggleExpand" class="text-weight-medium ibf-h11 text-primary" style="cursor: pointer;">
                See less
                <q-icon name="arrow_back" />
              </span>
            </span>
          </p>
        </div>
      </div>

    </div>

    <!-- <q-separator spaced /> -->
    <q-separator size="2px" spaced="25px" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isExpanded = ref(false);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<style lang="scss" scoped>
// .background {
//   background-image: url("~assets/images/webinar.png");
//   background-size: fill;
//   background-repeat: no-repeat;
// }
.text-primary {
  cursor: pointer;
  text-decoration: underline;
}
</style>
