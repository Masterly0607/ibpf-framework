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
          @click="
            child.children.length > 0 ? null : clickFramework(child.questions)
          "
        >
          <template v-slot:header>
            <q-item-section avatar>
              <q-icon name="mdi-chart-box-outline" size="2em" color="grey-6" />
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
            <frameworkBlock
              :children="child.children"
              :depth="level + 1"
              @click="
                child.children.length > 0
                  ? null
                  : clickFramework(child.questions)
              "
            />
          </template>
        </q-expansion-item>
      </q-card>
    </q-list>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const props = defineProps(["children", "depth"]);
const emit = defineEmits(["sendQuestions"]);
const children = ref(props.children);
const level = ref(props.depth);

const clickFramework = (questions) => {
  // console.log(questions);
  emit("sendQuestions", questions);
};
</script>
