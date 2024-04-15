<template>
  <section id="assessment-block" class="ibf-container-1100">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6">
        <q-card square flat>
          <img src="https://cdn.quasar.dev/img/mountains.jpg" />
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card flat>
          <q-card-section align="center">
            <q-circular-progress
              show-value
              font-size="3rem"
              :value="finishPercentage"
              size="15rem"
              :thickness="0.22"
              color="teal"
              track-color="grey-3"
            >
              {{ finishPercentage }}%
            </q-circular-progress>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="row q-col-gutter-md q-my-md">
      <div class="col-6">
        <q-list class="q-gutter-md">
          <q-card v-for="(framework, index) in frameworks" :key="index">
            <q-expansion-item>
              <template v-slot:header>
                <q-item-section avatar>
                  <q-circular-progress
                    show-value
                    font-size="12px"
                    :value="framework.countQDone"
                    size="50px"
                    :thickness="0.15"
                    :color="framework.color"
                    track-color="grey-3"
                  >
                    {{ framework.countQDone }}%
                  </q-circular-progress>
                </q-item-section>
                <q-item-section class="ibf-h10 text-weight-bold">
                  {{ framework.title }}
                </q-item-section>
              </template>

              <template v-if="framework.children">
                <frameworkBlock
                  :children="framework.children"
                  :depth="0"
                ></frameworkBlock>
              </template>
            </q-expansion-item>
          </q-card>
        </q-list>
      </div>

      <div class="col-6">
        <q-card square flat bordered>
          <q-item>
            <q-item-section side>
              <q-icon name="info" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="ibf-h10 text-weight-medium text-grey-8">
                Questions
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-card-section>
            <q-item
              v-for="(question, questionIndex) in questions"
              :key="questionIndex"
            >
              <q-item-section side top>
                {{ questionIndex + 1 }}
              </q-item-section>
              <q-item-section>
                <q-item-label class="ibf-h10 text-weight-normal">
                  {{ question.title }}
                </q-item-label>
                <div>
                  <RatingBar
                    :max-rating="5"
                    :initial-rating="1"
                    rating-color="#ccc"
                  />
                </div>
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import RatingBar from "pages/skills/components/RatingBar.vue";
import frameworkBlock from "pages/skills/components/FrameworkBlock.vue";
import { storeToRefs } from "pinia";
import { useQuestionStore } from "src/stores/question-store";
const questionStore = useQuestionStore();
const finishPercentage = ref(10);
const { questions } = storeToRefs(questionStore);
const frameworks = ref([
  {
    id: "business",
    parent_id: null,
    title: "Business",
    type: "Assessment",
    countQDone: 1,
    color: "pink",
    questions: [],
    children: [
      {
        id: "B1.1",
        parent_id: "B1",
        title: "B1.1",
        type: "Assessment",
        countQDone: 1,
        questions: [],
        children: [
          {
            id: "B1.1.1",
            parent_id: "B1.1",
            title: "B1.1.1",
            type: "Assessment",
            countQDone: 1,
            questions: [],
            children: [
              {
                id: "B1.1.1.1",
                parent_id: "B1.1.1",
                title: "B1.1.1.1",
                type: "Assessment",
                countQDone: 1,
                children: [],
                countQDone: 2,
                questions: [
                  {
                    id: "q1",
                    title: "what is your name?",
                    defaultRange: 5,
                    userRating: 0,
                  },
                  {
                    id: "q2",
                    title: "what is your name?",
                    defaultRange: 3,
                    userRating: 0,
                  },
                ],
              },
            ],
          },
          {
            id: "B1.1.2",
            parent_id: "B1.1",
            title: "B1.1.2",
            type: "Assessment",
            countQDone: 1,
            children: [],
            questions: [],
          },
        ],
      },

      {
        d: "B1.2",
        parent_id: "B1",
        title: "B1.2",
        type: "Assessment",
        countQDone: 1,
        questions: [],
        children: [],
      },
    ],
  },

  {
    id: "individual",
    parent_id: null,
    title: "Individual",
    type: "Assessment",
    countQDone: 50,
    color: "teal",
    questions: [],
    children: [],
  },

  {
    id: "people",
    parent_id: null,
    title: "People",
    type: "Assessment",
    countQDone: 22,
    color: "orange",
    questions: [],
    children: [],
  },

  {
    id: "future",
    parent_id: null,
    title: "Future",
    type: "Assessment",
    countQDone: 30,
    color: "blue",
    questions: [],
    children: [],
  },

  {
    id: "leadership",
    parent_id: null,
    title: "Leadership",
    type: "Assessment",
    countQDone: 25,
    color: "green-5",
    questions: [],
    children: [],
  },

  {
    id: "critical",
    parent_id: null,
    title: "Critical Soft Skill",
    type: "Assessment",
    countQDone: 20,
    color: "brown",
    questions: [],
    children: [],
  },
]);
</script>
