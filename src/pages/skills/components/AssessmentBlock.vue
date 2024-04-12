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
        <div class="column q-gutter-md">
          <q-card
            square
            flat
            bordered
            v-for="(framework, index) in frameworks"
            :key="index"
          >
            <TreeNode :node="framework.children"></TreeNode>
            <q-item clickable v-ripple>
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
              <q-item-section class="ibf-h11 text-weight-medium">
                {{ framework.title }}
              </q-item-section>
            </q-item>
          </q-card>
        </div>
      </div>

      <div class="col-6">
        <q-card square flat bordered>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </q-card-section>
        </q-card>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const finishPercentage = ref(10);

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
            title: "hi business",
            type: "Assessment",
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
          {
            id: "B1.1.1",
            parent_id: "B1.1",
            title: "hi business",
            type: "Assessment",
            children: [],
            questions: [],
          },
        ],
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

const TreeNode = {
  props: {
    node: Object,
  },
  setup(props) {
    const { node } = props;
    return { node };
  },
  template: `
      <div style="margin-left: 20px;">
        <div>{{ node.title }}</div>
        <TreeNode
          v-for="child in node.children"
          :key="child.id"
          :node="child"
        />
      </div>
    `,
};
</script>
