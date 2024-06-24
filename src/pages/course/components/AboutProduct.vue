<template>
  <section id="about-this-course">
    <q-card class="q-pa-md">
      <!-- Course Detail -->
      <div class="ibf-h8 text-weight-medium q-py-sm">About this course</div>
      <p>
        Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Curabitur tempus urna at turpis condimentum lobortis. Ut commodo
        efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum
        eu nisl.
      </p>

      <div class="q-mt-md">
        <div class="ibf-h8 text-weight-medium">This course includes:</div>
        <ul class="text-subtitle2">
          <li>10.4 hours on-demand videos</li>
          <li>3 study materials</li>
          <li>Full lifetime access</li>
          <li>Certificate of completion</li>
          <li>View our website on computer now for get 10% discount</li>
          <li>Join our website now for an early bird special</li>
          <li>Full lifetime access</li>
          <li>
            Get start our course 1 month early at a 25% discount. Limited time
            offer.
          </li>
        </ul>
      </div>
    </q-card>
  </section>
</template>

<script setup>
import { ref } from "vue";

const dataType = ref([
  {
    id: 1,
    title: "Course Type",
    subtitle: "Branch Management",
  },
  {
    id: 2,
    title: "Core Area ",
    subtitle: "International Certification",
  },
]);
const checkout = () => {
  console.log("Checkout");
};
</script>
