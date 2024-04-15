<template>
  <div v-if="children">
    <q-list>
      <q-card flat v-for="(child, index) in children" :key="index">
        <q-expansion-item
          :header-inset-level="0.5"
          :content-inset-level="0.5"
          :expand-icon="
            child.children.length > 0 ? 'mdi-arrow-up-thin' : 'none'
          "
          @click="storeQuestions(child.children, child.questions)"
        >
          <template v-slot:header>
            <q-item-section avatar top>
              <q-icon name="mdi-chart-box-outline" size="sm" color="grey-6" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="ibf-h11 text-weight-medium text-grey-10">
                {{ child.title }}
              </q-item-label>

              <q-item-label caption class="text-grey-6">
                {{ level }}
              </q-item-label>
            </q-item-section>
          </template>

          <template v-if="child.children">
            <frameworkBlock :children="child.children" :depth="level + 1" />
          </template>
        </q-expansion-item>
      </q-card>
    </q-list>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useQuestionStore } from "src/stores/question-store";
const props = defineProps(["children", "depth"]);
const questionStore = useQuestionStore();
const children = ref(props.children);
const level = ref(props.depth);

const isParent = (children) => children.length > 0;

const storeQuestions = (children, questions) => {
  if (isParent(children)) {
    questionStore.resetQuestions();
  } else {
    if (questions.length === 0) {
      questionStore.resetQuestions();
    } else {
      questionStore.storeQuestions(questions);
    }
  }
};
</script>
