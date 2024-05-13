<template>
  <div class="progress-bar-container">
    <div
      class="progress-bar"
      :style="progressBarDynamicStyle"
      :class="{ 'animated-progress': animated }"
    ></div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  color: {
    type: String,
    default: "#1976D2", // Default blue color
  },
  trackColor: {
    type: String,
    default: "#E0E0E0", // Light grey
  },
  gradient: {
    type: Boolean,
    default: false,
  },
  startColor: {
    type: String,
    default: "#1976D2", // Lighter blue
  },
  endColor: {
    type: String,
    default: "#42A5F5", // Darker blue
  },
  animated: {
    type: Boolean,
    default: true,
  },
});

const currentWidth = ref(0);

watch(
  () => props.modelValue,
  (newValue, oldValue) => {
    const duration = 500; // Animation duration in milliseconds
    const frameRate = 10; // Frame rate in milliseconds
    const totalFrames = duration / frameRate;
    const step = (newValue - oldValue) / totalFrames;

    let frame = 0;
    const interval = setInterval(() => {
      currentWidth.value += step;
      frame++;
      if (frame === totalFrames) {
        clearInterval(interval);
        currentWidth.value = newValue; // Ensure it ends exactly at newValue
      }
    }, frameRate);
  },
  { immediate: true }
);

const progressBarDynamicStyle = computed(() => {
  const baseStyle = {
    width: `${currentWidth.value}%`,
    backgroundColor: props.color,
  };

  if (props.gradient) {
    baseStyle.backgroundImage = `linear-gradient(to right, ${props.startColor}, ${props.endColor})`;
  }

  return baseStyle;
});
</script>

<style scoped>
.progress-bar-container {
  height: 10px;
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  transition: width 0.5s ease;
}
</style>
