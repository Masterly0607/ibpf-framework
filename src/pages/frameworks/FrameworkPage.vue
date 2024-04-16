<template>
  <q-page padding>
    <section id="assessment-block" class="ibf-container-1200">
      <div class="row q-col-gutter-xl">
        <div class="col-lg-4">
          <div class="flex flex-center">
            <q-btn-group>
              <q-btn label="Individual" @click="viewFramework('individual')" />
              <q-btn label="Business" @click="viewFramework('business')" />
              <q-btn label="People" @click="viewFramework('people')" />
            </q-btn-group>

            <q-btn-group>
              <q-btn label="Future" @click="viewFramework('future')" />
              <q-btn label="Leadership" @click="viewFramework('leadership')" />
              <q-btn
                label="Critical soft skill"
                @click="viewFramework('critical')"
              />
            </q-btn-group>

            <!-- <q-img
              src="https://cdn.quasar.dev/img/mountains.jpg"
              width="350px"
              height="350px"
              spinner-color="primary"
              spinner-size="82px"
            /> -->
          </div>
        </div>
        <div class="col-lg-8">
          <div class="ibf-h2 text-weight-medium q-my-sm">
            {{ framework.title }}
          </div>

          <q-separator />

          <div style="max-width: 900px" class="q-mb-md">
            <q-tabs v-model="tab" dense align="justify" no-caps inline-label>
              <q-tab name="capability" icon="mail" label="Capability" />
              <q-tab name="assessment" icon="alarm" label="Assessment" />
              <q-tab name="result" icon="movie" label="Result" />
            </q-tabs>

            <q-tab-panels
              v-model="tab"
              animated
              transition-prev="slideInUp"
              transition-next="slideInUp"
            >
              <q-tab-panel class="subframework" name="capability">
                <framework-title-slot>
                  <template v-slot:title>
                    {{ framework.title }}
                  </template>

                  <template v-slot:details>
                    Do consequat labore adipisicing aute minim excepteur. Ut
                    culpa ullamco dolore id aliqua sit labore non enim
                    adipisicing. Amet excepteur anim enim aliquip aliquip
                    laborum velit deserunt commodo consectetur eiusmod nulla
                    mollit non. Mollit magna enim labore irure aliqua esse
                    laborum enim cillum ut. Culpa labore irure est cupidatat
                    laboris irure aliqua commodo anim Lorem non aliquip. Et sit
                    quis sit velit culpa amet eu id laboris sit sint officia
                    reprehenderit. Cillum minim Lorem qui consequat sit aliquip
                    id.
                  </template>
                </framework-title-slot>

                <div class="q-py-md text-right">
                  <q-btn
                    square
                    color="secondary"
                    icon="mdi-application"
                    label="Resource"
                  />
                </div>
              </q-tab-panel>

              <q-tab-panel class="subframework" name="assessment">
                <framework-title-slot>
                  <template v-slot:title>
                    {{ framework.title }}
                  </template>

                  <template v-slot:details>
                    Do consequat labore adipisicing aute minim excepteur. Ut
                    culpa ullamco dolore id aliqua sit labore non enim
                    adipisicing. Amet excepteur anim enim aliquip aliquip
                    laborum velit deserunt commodo consectetur eiusmod nulla
                    mollit non. Mollit magna enim labore irure aliqua esse
                    laborum enim cillum ut. Culpa labore irure est cupidatat
                    laboris irure aliqua commodo anim Lorem non aliquip. Et sit
                    quis sit velit culpa amet eu id laboris sit sint officia
                    reprehenderit. Cillum minim Lorem qui consequat sit aliquip
                    id.
                  </template>
                </framework-title-slot>

                <div class="q-py-md text-right">
                  <q-btn
                    square
                    color="secondary"
                    icon="mdi-application"
                    label="Resource"
                  />
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </div>
        </div>
      </div>

      <div class="row q-col-gutter-xl" v-if="tab !== 'result'">
        <div
          :class="[
            questions.length > 0
              ? 'col-12 col-md-4'
              : 'col-12 col-md-8 offset-lg-4',
          ]"
        >
          <Framework-list-block
            :framework="framework"
            @subframework="handleSubframework"
          ></Framework-list-block>
        </div>

        <div class="col-12 col-md-8" v-if="questions.length > 0">
          <question-list-block
            :questions="questions"
            :tab="tab"
            :color="framework.color"
          ></question-list-block>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import FrameworkTitleSlot from "pages/frameworks/slots/FrameworkTitleSlot.vue";
import QuestionListBlock from "pages/frameworks/components/QuestionListBlock.vue";
import FrameworkListBlock from "pages/frameworks/components/FrameworkListBlock.vue";

import { ref, onMounted } from "vue";
import { useFrameworkStore } from "src/stores/framework-store.js";
import { storeToRefs } from "pinia";

const frameworkStore = useFrameworkStore();
const { framework, questions } = storeToRefs(frameworkStore);
const subframework = ref([]);
const tab = ref("capability");

const viewFramework = (framework) => {
  frameworkStore.resetQuestions();
  frameworkStore.storeOneFramework(framework);
};

const handleSubframework = (data) => {
  subframework.value = data;
  frameworkStore.storeQuestions(subframework.value.questions);
};

onMounted(() => {
  // const targetFramework = route.params.framework ?? null;
  frameworkStore.storeOneFramework("business");
  // framework.value = frameworkStore.getOneFramework;
});
</script>

<style lang="scss" scoped>
.subframework {
  cursor: pointer;
}
</style>
