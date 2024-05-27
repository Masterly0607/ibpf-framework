import { defineStore } from "pinia";

export const useStartLearningStore = defineStore("startLearning", {
  state: () => ({
    startLearning: 0,
  }),

  getters: {
    doubleCount(state) {
      return state.startLearning * 2;
    },
  },

  actions: {
    increment() {
      this.startLearning++;
    },
  },
});
