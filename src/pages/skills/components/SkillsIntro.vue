<template>
  <section id="skill-intro" class="ibf-container-1100">
    <div class="text-center ibf-h5 q-mt-md text-weight-bold">
      Hi there, let’s get you started!
    </div>

    <div class="text-center ibf-h10 text-grey-6 q-my-lg">
      This task focuses predominantly on non-technical skills and this survey
      should take you no more than 1 hour to complete.
    </div>

    <div class="row q-col-gutter-lg">
      <div
        class="col-12 col-md-4 my-container"
        v-for="(step, index) in steps"
        :key="index"
      >
        <q-card class="my-card">
          <q-card-section align="center">
            <div class="q-mb-md">
              <q-avatar size="3.4rem" text-color="white" color="primary">
                {{ index + 1 }}
              </q-avatar>
            </div>
            <div class="ibf-h10 text-grey-6 ellipsis-2-lines">
              {{ step.text }}
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const steps = ref([
  {
    title: 1,
    text: "The survey includes total 30 questions",
  },

  {
    title: 2,
    text: "You will get your scorecard by email after completion.",
  },

  {
    title: 3,
    text: "There will be recommended courses for you.",
  },
]);
</script>

<style lang="scss" scoped>
.my-container {
  display: flex;
  flex-direction: column;

  .my-card {
    flex: 1;
    border-radius: 16px;
  }
}
</style>
