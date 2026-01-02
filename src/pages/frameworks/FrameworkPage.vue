<template>
  <q-page padding>
    <section id="assessment-block" class="ibf-container-1200">
      <div class="row q-col-gutter-xl">
        <div class="col-lg-4">
          <div class="row items-center justify-center q-gutter-sm">
            <q-btn label="Individual" @click="viewFramework('individual')" />
            <q-btn label="Business" @click="viewFramework('business')" />
            <q-btn label="People" @click="viewFramework('people')" />

            <q-btn label="Future" @click="viewFramework('future')" />
            <q-btn label="Leadership" @click="viewFramework('leadership')" />
            <q-btn
              label="Critical soft skill"
              @click="viewFramework('Critical Soft Skill')"
            />

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
          <q-item class="q-mb-md" v-if="tab !== 'result'">
            <q-item-section avatar>
              <q-circular-progress
                show-value
                font-size="2rem"
                :value="computedCountDone"
                size="150px"
                :thickness="0.25"
                :color="framework.color"
                track-color="grey-3"
              >
                {{ computedCountDone }}%
              </q-circular-progress>
            </q-item-section>
            <q-item-section>
              <q-item-label>
                <div class="ibf-h4 text-weight-medium q-my-sm">
                  {{ framework.title }}
                </div>
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item class="q-mb-md" v-else>
            <q-item-section avatar>
              <q-circular-progress
                show-value
                font-size="2rem"
                :value="userOverall"
                size="150px"
                :thickness="0.25"
                color="secondary"
                track-color="grey-3"
              >
                {{ userOverall }}%
              </q-circular-progress>
            </q-item-section>
            <q-item-section>
              <div class="ibf-h8 text-weight-medium q-my-sm">
                My Overall Talent Development Capability Model Score
              </div>
            </q-item-section>
          </q-item>

          <q-separator />

          <div style="max-width: 900px" class="q-mb-md">
            <q-tabs
              v-model="tab"
              dense
              align="justify"
              no-caps
              inline-label
              :indicator-color="tab !== 'result' ? framework.color : ''"
            >
              <q-tab name="capability" label="Capability" />
              <q-tab name="assessment" label="Assessment" />
              <q-tab name="result" label="Result" />
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
                    <div :class="`text-${framework.color}`">
                      {{ framework.title }}
                    </div>
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
                    :color="framework.color || 'secondary'"
                    icon="mdi-application"
                    label="Resource"
                  />
                </div>
              </q-tab-panel>

              <q-tab-panel class="subframework" name="assessment">
                <framework-title-slot>
                  <template v-slot:title>
                    <div :class="`text-${framework.color}`">
                      {{ framework.title }}
                    </div>
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
                    :color="framework.color || 'secondary'"
                    icon="mdi-application"
                    label="Resource"
                  />
                </div>
              </q-tab-panel>

              <q-tab-panel class="subframework" name="result">
                <framework-result-block></framework-result-block>
              </q-tab-panel>
            </q-tab-panels>
          </div>
        </div>
      </div>

      <div class="row q-col-gutter-xl" v-if="tab !== 'result'">
        <transition
          appear
          enter-active-class="animated fadeIn slower"
          leave-active-class="animated fadeOut slower delay-1s"
        >
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
        </transition>

        <div class="col-12 col-md-8" v-if="questions.length > 0">
          <question-list-block
            :questions="questions"
            :tab="tab"
            :color="framework.color"
            :framework="framework"
          ></question-list-block>
        </div>
      </div>
    </section>

    <preview-json :list="userData" title="User Data"></preview-json>
  </q-page>
</template>

<script setup>
import PreviewJson from "components/PreviewJSON.vue";
import FrameworkResultBlock from "./components/FrameworkResultBlock.vue";
import FrameworkTitleSlot from "pages/frameworks/slots/FrameworkTitleSlot.vue";
import QuestionListBlock from "pages/frameworks/components/QuestionListBlock.vue";
import FrameworkListBlock from "pages/frameworks/components/FrameworkListBlock.vue";

import { ref, onMounted, onBeforeMount, computed } from "vue";
import { useFrameworkStore } from "src/stores/framework-store.js";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const router = useRouter();

const frameworkStore = useFrameworkStore();
const { framework, questions, userData } = storeToRefs(frameworkStore);
const subframework = ref([]);
const tab = ref("capability");

const userOverall = computed(() => {
  let result = parseFloat(
    (
      (userData.value.totalScore / userData.value.totalStandardScore) *
      100
    ).toFixed(0)
  );

  return result || 0;
});

const viewFramework = (framework) => {
  frameworkStore.resetQuestions();
  frameworkStore.storeOneFramework(framework);

  router.push({
    name: "framework",
    params: { framework: framework, subframework: "" },
  });
};

const computedCountDone = computed(() => {
  let result = parseFloat(
    (
      (framework.value.totalScore / framework.value.standardTotalScore) *
      100
    ).toFixed(0)
  );

  return result || 0;
});

// const countQuestionsDone = (obj) => {
//   let count = 0;

//   // Function to recursively traverse the object
//   function traverse(current) {
//     // Check if the current element itself is a question
//     if (current.userRating > 0) {
//       count++;
//     }

//     // Iterate over each property in the object or each item in the array
//     for (const key in current) {
//       if (typeof current[key] === "object" && current[key] !== null) {
//         traverse(current[key]); // Recursive call to go deeper
//       }
//     }
//   }

//   traverse(obj); // Start the recursion with the initial object
//   return count;
// };

// const countQuestions = (obj) => {
//   let count = 0;

//   // Function to recursively traverse the object
//   function traverse(current) {
//     // Check if the current element itself is a question
//     if (current.questionTitle) {
//       count++;
//     }

//     // Iterate over each property in the object or each item in the array
//     for (const key in current) {
//       if (typeof current[key] === "object" && current[key] !== null) {
//         traverse(current[key]); // Recursive call to go deeper
//       }
//     }
//   }

//   traverse(obj); // Start the recursion with the initial object
//   return count;
// };

const handleSubframework = (data) => {
  frameworkStore.resetQuestions();
  subframework.value = data;
  frameworkStore.storeQuestions(subframework.value.questions);
};

onBeforeMount(() => {
  frameworkStore.loadProgress();
});

onMounted(() => {
  frameworkStore.storeOneFramework("business");
});
</script>
src/helpers/questions
