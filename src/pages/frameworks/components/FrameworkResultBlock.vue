<template>
  <section class="q-my-lg">
    <div class="row q-col-gutter-md">
      <div class="col-6 col-sm-4" v-for="(framework, index) in frameworks" :key="index">
        <q-card square bordered flat>
          <q-card-section align="center">
            <q-circular-progress show-value font-size="15px" :value="computedCountDone(framework)" size="70px"
              :thickness="0.27" :color="framework.color" track-color="grey-3">
              {{ computedCountDone(framework) }}%
            </q-circular-progress>
          </q-card-section>
          <q-card-section align="center">
            <div class="ibf-h9 text-grey-8 text-weight-medium">
              {{ framework.title }}
            </div>
          </q-card-section>

          <q-card-actions vertical align="center">
            <q-btn outline :color="framework.color" style="width: 100%" label="Explore" />
            <q-btn unelevated :color="framework.color" style="width: 100%" label="Update" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useFrameworkStore } from "src/stores/framework-store";
import { storeToRefs } from "pinia";
import { count } from "src/helpers/converters";
const frameworkStore = useFrameworkStore();
const { frameworks } = storeToRefs(frameworkStore);

const computedCountDone = (framework) => {
  let result = parseFloat(
    (
      (count.countQuestionsDone(framework) / count.countQuestions(framework)) *
      100
    ).toFixed(0)
  );

  return result || 0;
};
</script>
