<template>
  <div class="q-gutter-md">
    <div class="ibf-h11 text-weight-medium text-grey-7 q-mb-md">
      {{ props.framework.children ? props.framework.children.length : 0 }}
      capabilities
    </div>
    <transition-group
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <q-card
        :class="['subframework', currentIndex === index ? 'active' : '']"
        @click="viewSubframework(index, subframework)"
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
              font-size="1rem"
              :value="countQDone(subframework)"
              size="70px"
              :thickness="0.2"
              :color="props.framework.color"
              track-color="grey-3"
            >
              {{ countQDone(subframework) }}%
            </q-circular-progress>
          </q-item-section>
          <q-item-section>
            <q-item-label>
              {{ subframework.title }}
            </q-item-label>
            <q-item-label caption lines="2">
              Secondary line text.
            </q-item-label>
          </q-item-section>

          <q-item-section side v-if="currentIndex === index">
            <q-icon
              :color="framework.color || 'secondary'"
              name="mdi-arrow-right-bold"
            />
          </q-item-section>
        </q-item>
      </q-card>
    </transition-group>
  </div>
</template>

<script setup>
import { useFrameworkStore } from "src/stores/framework-store";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
const emit = defineEmits(["subframework"]);
const props = defineProps({
  framework: {
    type: Object,
    default: null,
  },
});

const router = useRouter();

const currentIndex = ref(-1);

watch(
  () => props.framework.title,
  (newX) => {
    // console.log(newX);
    currentIndex.value = -1;
  }
);

const viewSubframework = (index, data) => {
  currentIndex.value = index;
  router.push({
    name: "framework",
    params: { framework: props.framework.title, subframework: data.title },
  });
  emit("subframework", data);
};

const countQDone = (subframework) => {
  const done = subframework.questions.filter((q) => q.userRating > 0).length;
  return parseFloat(((done / subframework.questions.length) * 100).toFixed(0));
};
</script>

<style lang="scss" scoped>
.subframework {
  cursor: pointer;

  &.active {
    outline: 1px solid lightslategrey;
  }
}
</style>
