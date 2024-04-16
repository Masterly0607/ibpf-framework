<template>
  <div class="q-gutter-md">
    <div class="ibf-h11 text-weight-medium text-grey-7 q-mb-md">
      {{ questions.length }} knowledge and skill statements
    </div>

    <transition-group
      appear
      enter-active-class="animated slideInUp slower"
      leave-active-class="animated zoomOut slower delay-1s"
    >
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
              <transition
                appear
                enter-active-class="animated fadeIn slower"
                leave-active-class="animated fadeOut slower"
              >
                <div v-if="props.tab === 'assessment'">
                  <RatingBar
                    :max-rating="question.defaultRange"
                    :initial-rating="0"
                    :rating-color="props.color"
                  />
                </div>
              </transition>
            </q-item-section>
          </q-item>
        </q-card-section>
      </q-card>
    </transition-group>
  </div>
</template>

<script setup>
import RatingBar from "pages/skills/components/RatingBar.vue";
import { computed } from "vue";
const props = defineProps({
  questions: {
    type: Array,
    default: null,
  },
  tab: {
    type: String,
    default: "capability",
  },

  color: {
    type: String,
    default: "red",
  },
});

const isLoading = computed(() => props.questions.length < 1);
</script>
