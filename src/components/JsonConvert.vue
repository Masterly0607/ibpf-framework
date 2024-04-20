<template>
  <div class="q-ma-md">
    <div
      v-if="isObject(data) || isArray(data)"
      @click="toggle"
      class="json-toggle"
    >
      <!-- Display icons for expand/collapse -->
      <q-icon
        size="sm"
        color="primary"
        :name="isCollapsed ? 'mdi-chevron-right' : 'mdi-chevron-down'"
      />
      <!-- Show wrapping symbols and ellipsis if collapsed -->
      <span v-if="isCollapsed">{{
        isArray(data) ? `[...] ${data.length} items` : "{...}"
      }}</span>
      <span v-else>{{ isArray(data) ? "[" : "{" }}</span>
    </div>
    <!-- Display content if not collapsed -->

    <div v-if="!isCollapsed">
      <transition-group
        appear
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOutDown"
      >
        <div
          v-for="(value, key, index) in data"
          :key="key || `${value}#${index}`"
          class="json-node"
        >
          <!-- Display key for object properties, omit for array elements -->
          <strong v-if="isObject(data) && key">{{ key }}:</strong>
          <!-- Recursive component call for objects or arrays, direct display for others -->
          <JsonConvert :data="value" v-if="isObject(value) || isArray(value)" />
          <span v-else>{{ value }}</span>
        </div>
      </transition-group>
      <!-- Closing symbols for objects or arrays -->
      <span>{{ isArray(data) ? "]" : "}" }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { QIcon } from "quasar";

const props = defineProps({
  data: [Object, Array, String, Number, Boolean, null],
});

// Initially collapsed state is false if the root, true for nested
const isCollapsed = ref(true);

const toggle = () => {
  isCollapsed.value = !isCollapsed.value;
};

const isObject = (val) =>
  val !== null && typeof val === "object" && !Array.isArray(val);
const isArray = (val) => Array.isArray(val);
</script>

<style scoped>
.json-toggle {
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
}
.json-toggle q-icon {
  margin-left: 5px;
}
.json-node {
  margin-left: 20px;
}
</style>
