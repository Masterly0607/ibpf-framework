import { defineStore } from "pinia";
import { productAPI } from "src/boot/axios";

export const useLearningStore = defineStore("learning", {
  state: () => ({
    orderItems: [],
  }),

  getters: {
    getOrderItems: (state) => state.orderItems,
  },

  actions: {
    async serverFetchOrderItems() {
      try {
        const res = await productAPI.get("/api/v1/user/order/list-order-items");

        if (!res.data.status) return;

        this.storeOrderItems(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    },

    storeOrderItems(payload) {
      if (payload) {
        this.orderItems = payload;
      }
    },
  },
});
