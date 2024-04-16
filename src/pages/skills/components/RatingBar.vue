<template>
  <div class="rating-bar">
    <!-- Default line covering the entire rating width -->
    <div class="rating-line background-line"></div>
    <!-- Dynamic line that grows based on the rating -->
    <div
      :class="['rating-line', colorClass]"
      :style="{ width: lineProgress }"
    ></div>
    <div class="rating-points">
      <div
        v-for="n in maxRating"
        :key="n"
        class="rating-point"
        @click="setRating(n)"
      >
        <div
          :class="[
            'circle',
            { active: n <= currentRating },
            activeColorClass(n),
          ]"
          :style="{
            backgroundColor: n <= currentRating ? '#ccc' : undefined,
          }"
        >
          {{ n }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { ref, computed } from "vue";
import { getCssVar } from "quasar";

const props = defineProps({
  maxRating: {
    type: Number,
    default: 5,
  },
  ratingColor: {
    type: String,
    default: "primary", // Default color, can be set to any CSS color
  },

  question: {
    type: Object,
    default: new Object({}),
  },
});

const currentRating = defineModel({ default: 0 });
const currentRatingColor = ref(props.ratingColor);

const setRating = (rating) => {
  currentRating.value = rating;

  // if (rating > 0) {
  //   emits("ratingDone", props.question.id);
  // }
};

const activeColorClass = (n) => {
  return n <= currentRating.value ? `bg-${props.ratingColor}` : "";
};

const colorClass = computed(() => {
  return `bg-${props.ratingColor}`;
});

// Adjusting the lineProgress calculation to start growing the line from rating 2
const lineProgress = computed(() => {
  if (currentRating.value < 2) {
    return "0%"; // No line shown if the rating is less than 2
  } else {
    // Calculate the width starting from 2 to maxRating
    return `${((currentRating.value - 1) / (props.maxRating - 1)) * 100}%`;
  }
});
</script>

<style scoped>
.rating-bar {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 1.3rem 0;
}

.rating-line {
  position: absolute;
  height: 0.25rem;
  width: 100%;
  transition: width 0.3s ease;
  z-index: 0; /* Ensure the line is behind the circles */
}

.background-line {
  opacity: 0.3;
  background-color: #ccc; /* Default color for the full line */
}

.rating-points {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.rating-point {
  z-index: 2; /* Higher than the line */
  cursor: pointer;
}

.circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #f0f0f0; /* Default inactive color */
  color: black;
  transition: background-color 0.3s, color 0.3s;
}

.circle.active {
  box-shadow: 0 0 0 3px #dfdfdf;
  color: white; /* Adjust text color for better visibility on active */
}
</style>
