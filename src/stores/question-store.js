import { defineStore } from "pinia";

export const useQuestionStore = defineStore("questionStore", {
  state: () => ({
    questions: [],
  }),
  getters: {
    getQuestions: (state) => state.questions,
  },
  actions: {
    resetQuestions() {
      this.questions = [];
    },
    storeQuestions(payload) {
      if (payload) {
        this.questions = payload;
      }
    },
  },
});
