<template>
  <div class="q-gutter-md">
    <div class="ibf-h11 text-weight-medium text-grey-7 q-mb-md">
      {{ questions.length }} knowledge and skill statements
    </div>

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

            <div v-if="props.tab === 'assessment'">
              <RatingBar
                :max-rating="question.defaultRange"
                :initial-rating="0"
                :rating-color="props.color"
              />
            </div>
          </q-item-section>
        </q-item>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import RatingBar from "pages/skills/components/RatingBar.vue";
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
</script>
