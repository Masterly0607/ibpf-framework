<template>
  <section id="about-this-course">
    <!-- Course Detail -->
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-md-8">
        <q-card class="q-mt-md q-pa-md">
          <div class="text-h5 q-py-sm">About this course</div>
          <p>
            Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </p>
          <div class="q-mt-md">
            <div class="text-h5">This course includes:</div>
            <ul>
              <li>10.4 hours on-demand videos</li>
              <li>3 study materials</li>
              <li>Full lifetime access</li>
              <li>Certificate of completion</li>
            </ul>
          </div>
        </q-card>
      </div>

      <div class="col-12 col-md-4">
        <q-card class="q-mt-md q-pa-md">
          <div v-for="(coreType, index) in dataType" :key="index">
            <div class="ibf-h10">
              <q-icon name="mdi-library" />
              {{ coreType.title }}
            </div>
            <div class="q-px-lg">{{ coreType.subtitle }}</div>

            <!-- <div class="ibf-h10">
              <q-icon name="mdi-library" />
              Core Area
            </div>
            <div class="q-px-lg">International Certification</div>

            <div class="ibf-h10">
              <q-icon name="mdi-library" />
              Duration: 3 months
            </div>
            <div class="ibf-h10">
              <q-icon name="mdi-library" />
              Start On: 15-08-2024
            </div> -->
            <!-- <div>Duration: 3 months</div> -->
            <!-- <div>Start On: 15-08-2024</div> -->
            <!-- <div class="q-mt-md">
                <q-btn color="primary" label="Add to cart" />
              </div> -->
          </div>

          <div class="ibf-h10">
            <q-icon name="mdi-library" />
            Duration: 3 months
          </div>
          <div class="ibf-h10">
            <q-icon name="mdi-library" />
            Start On: 15-08-2024
          </div>
          <br />
          <q-card-actions>
            <!-- <div class="q-mt-md">
                <q-btn color="primary" label="Add to cart" />
              </div> -->
            <q-btn style="width: 85%" color="primary" label="Add to cart" />
            <q-btn align="left" aria-label="Favorite" icon="favorite" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
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
