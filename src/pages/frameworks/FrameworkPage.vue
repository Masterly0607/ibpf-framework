<template>
  <q-page padding>
    <section id="assessment-block" class="ibf-container-1200">
      <div class="row q-col-gutter-xl">
        <div class="col-lg-4">
          <div class="flex flex-center">
            <q-btn-group>
              <q-btn label="Business" @click="viewFramework('business')" />
              <q-btn label="Individual" @click="viewFramework('individual')" />
              <q-btn label="People" @click="viewFramework('people')" />
            </q-btn-group>
            <!-- <q-btn
              color="primary"
              icon="check"
              label="Individual"
              @click="viewFramework('individual')"
            /> -->
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
          <div class="ibf-h2 text-weight-medium q-my-md">
            {{ framework.title }}
          </div>

          <div style="max-width: 900px">
            <q-tabs v-model="tab" dense align="justify" no-caps inline-label>
              <q-tab name="capability" icon="mail" label="Capability" />
              <q-tab name="assessment" icon="alarm" label="Assessment" />
              <q-tab name="result" icon="movie" label="Result" />
            </q-tabs>

            <q-tab-panels
              v-model="tab"
              animated
              transition-prev="scale"
              transition-next="scale"
            >
              <q-tab-panel class="subframework" name="capability">
                <q-item-section class="q-my-md">
                  <q-item-label class="ibf-h5 text-weight-medium">
                    {{ framework.title }}
                  </q-item-label>
                  <q-item-label class="ibf-h11 text-grey-6">
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
                  </q-item-label>
                </q-item-section>

                <div class="q-py-md text-right">
                  <q-btn
                    square
                    color="secondary"
                    icon="mdi-application"
                    label="Resource"
                  />
                </div>

                <!-- <div class="q-py-md q-gutter-md">
                  <q-card
                    @click="viewSubframework(subframework)"
                    square
                    flat
                    bordered
                    v-for="(subframework, index) in framework.children"
                    :key="index"
                  >
                    <q-item>
                      <q-item-section top avatar>
                        <q-circular-progress
                          show-value
                          font-size="12px"
                          :value="subframework.countQDone"
                          size="50px"
                          :thickness="0.15"
                          :color="framework.color"
                          track-color="grey-3"
                        >
                          {{ subframework.countQDone }}%
                        </q-circular-progress>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>{{ subframework.title }}</q-item-label>
                        <q-item-label caption lines="2"
                          >Secondary line text.</q-item-label
                        >
                      </q-item-section>
                    </q-item>
                  </q-card>
                </div> -->
              </q-tab-panel>

              <q-tab-panel class="subframework" name="assessment">
                <q-item-section class="q-my-md">
                  <q-item-label class="ibf-h5 text-weight-medium">
                    {{ framework.title }}
                  </q-item-label>
                  <q-item-label class="ibf-h11 text-grey-6">
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
                  </q-item-label>
                </q-item-section>

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

      <div class="row q-col-gutter-xl">
        <div class="col-12 col-md-4">
          <div class="q-gutter-md">
            <q-card
              class="subframework"
              @click="viewSubframework(subframework)"
              square
              flat
              bordered
              v-for="(subframework, index) in framework.children"
              :key="index"
            >
              <q-item>
                <q-item-section top avatar>
                  <q-circular-progress
                    show-value
                    font-size="12px"
                    :value="subframework.countQDone"
                    size="50px"
                    :thickness="0.15"
                    :color="framework.color"
                    track-color="grey-3"
                  >
                    {{ subframework.countQDone }}%
                  </q-circular-progress>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ subframework.title }}</q-item-label>
                  <q-item-label caption lines="2"
                    >Secondary line text.</q-item-label
                  >
                </q-item-section>
              </q-item>
            </q-card>
          </div>
        </div>

        <div class="col-12 col-md-8">
          <div class="q-gutter-md">
            <q-card
              flat
              square
              bordered
              v-for="(question, questionIndex) in questions"
              :key="questionIndex"
            >
              <q-card-section>
                <q-item>
                  <q-item-section>
                    <q-item-label>
                      <p class="ibf-h10">
                        <span> {{ questionIndex + 1 }}. </span>
                        {{ question.title }}
                      </p>
                    </q-item-label>

                    <div v-if="tab === 'assessment'">
                      <RatingBar
                        :max-rating="5"
                        :initial-rating="1"
                        rating-color="red"
                      />
                    </div>
                  </q-item-section>
                </q-item>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import FrameworkBlock from "pages/skills/components/FrameworkBlock.vue";
import RatingBar from "pages/skills/components/RatingBar.vue";
import { ref, onMounted } from "vue";
import { useFrameworkStore } from "src/stores/framework-store.js";
import { Loading } from "quasar";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useQuestionStore } from "src/stores/question-store";
const questionStore = useQuestionStore();
const { questions } = storeToRefs(questionStore);
const frameworkStore = useFrameworkStore();
const { framework } = storeToRefs(frameworkStore);
const subframework = ref([]);
const route = useRoute();
const router = useRouter();
const tab = ref("capability");

const viewSubframework = (data) => {
  console.log(data);
  subframework.value = data;
  questionStore.storeQuestions(subframework.value.questions);
};

const viewFramework = (framework) => {
  frameworkStore.storeOneFramework(framework);
  // router.push({ name: "framework", params: { framework: framework } });
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
