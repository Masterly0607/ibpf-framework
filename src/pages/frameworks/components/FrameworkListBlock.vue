<template>
  <div class="q-gutter-md">
    <div class="ibf-h11 text-weight-medium text-grey-7 q-mb-md">
      {{ props.framework.children ? props.framework.children.length : null }}
      capabilities
    </div>
    <q-card
      class="subframework"
      @click="viewSubframework(subframework)"
      square
      flat
      bordered
      v-for="(subframework, index) in props.framework.children"
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
            :color="subframework.color"
            track-color="grey-3"
          >
            {{ subframework.countQDone }}%
          </q-circular-progress>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ subframework.title }}</q-item-label>
          <q-item-label caption lines="2">Secondary line text.</q-item-label>
        </q-item-section>
      </q-item>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["subframework"]);
const props = defineProps({
  framework: {
    type: Object,
    default: null,
  },
});

const frameworkList = ref(props.framework);
const viewSubframework = (data) => {
  emit("subframework", data);
};
</script>
