<template>
  <section class="q-my-lg">
    <div class="row q-col-gutter-md">
      <div
        class="col-12 col-sm-6"
        v-for="(framework, index) in userData.data"
        :key="index"
      >
        <q-card square bordered flat>
          <q-card-section>
            <div class="row justify-between items-start">
              <div>
                <div class="ibf-h9 text-grey-9 text-weight-bold text-uppercase">
                  {{ framework.title }}
                </div>

                <q-chip
                  dense
                  square
                  text-color="secondary"
                  color="grey-3"
                  size="0.8rem"
                >
                  Average ~ {{ framework.averageScore || "n.a" }}
                </q-chip>
              </div>

              <q-circular-progress
                show-value
                font-size="1.2rem"
                :value="computedCountDone(framework)"
                size="90px"
                :thickness="0.2"
                :color="framework.color"
                track-color="grey-3"
              >
                {{ computedCountDone(framework) }}%
              </q-circular-progress>
            </div>
          </q-card-section>

          <q-card-section class="text-grey-6">
            <span class="ibf-h10 text-weight-medium text-grey-8">{{
              framework.countDone
            }}</span>
            of
            <span class="ibf-h10 text-weight-medium text-grey-8"
              >{{ framework.countQuestions }}
            </span>
            skill statements
          </q-card-section>

          <q-card-actions vertical class="justify-around q-px-md">
            <q-btn
              outline
              :color="framework.color"
              style="width: 100%"
              label="Update"
            />
            <q-btn
              unelevated
              :color="framework.color"
              style="width: 100%"
              label="Explore"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useFrameworkStore } from "src/stores/framework-store";
import { storeToRefs } from "pinia";
const frameworkStore = useFrameworkStore();
const { userData } = storeToRefs(frameworkStore);

const computedCountDone = (framework) => {
  let result = parseFloat(
    ((framework.totalScore / framework.standardTotalScore) * 100).toFixed(0)
  );

  return result || 0;
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  // max-width: 350px;
}
</style>
