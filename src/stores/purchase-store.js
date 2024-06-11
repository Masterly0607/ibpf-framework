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

        return res.data;
      } catch (error) {
        console.log(error.message);
      }
    },

    async serverCheckOut(payload) {
      try {
        const res = await productAPI.post("/api/v1/user/product/checkout", {
          payment_option_id: 1, // default NDF
          payment_type_id: payload.payment_type,
        });

        return res.data;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
});
