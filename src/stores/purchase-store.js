import { defineStore } from "pinia";
import { productAPI } from "src/boot/axios";

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

    async serverPlaceOrder(payload) {
      try {
        const res = await productAPI.post("/api/v1/user/product/create-order", {
          cart_item_ids: payload,
        });

        console.log(res);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
});
