import { defineStore } from "pinia";

export const usePurchaseStore = defineStore("purchase", {
  state: () => ({
    checkOutItems: [],
  }),

  getters: {
    getCheckOutItems: (state) => state.checkOutItems,
  },

  actions: {
    addToCheckOutList(payload) {
      if (payload) {
        this.checkOutItems = payload;
      }
    },
  },
});
