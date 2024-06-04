import { defineStore } from "pinia";
import { productAPI } from "src/boot/axios";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [],
    cartItemsIds: [],
  }),

  getters: {
    getCartItemsIds: (state) => state.cartItems,
    getCartItems: (state) => state.cartItems,
    countCartItemsIds: (state) => state.cartItems.length || 0,
  },

  actions: {
    async serverFetchCartItems() {
      try {
        const res = await productAPI.get("/api/v1/user/product/list-item");
        console.log(res);
        if (!res.data.status) return;
        this.storeCartItems(res.data.data);
      } catch (error) {}
    },

    storeCartItems(payload) {
      if (payload) {
        this.cartItems = payload;
      }
    },
    async serverAddToCart(id) {
      try {
        const res = await productAPI.post(
          "/api/v1/user/product/add-to-cart/" + id
        );

        if (!res.data.status) return;

        this.addToCart(id);
      } catch (error) {
        console.log(error.message);
      }
    },
    addToCart(id) {
      if (id) {
        this.cartItemsIds.push(id);
      }
    },

    removeFromCart(id) {
      //  const index = this.cartItems.findIndex((el) => el.id == id);
      //  if (index < 0) return;
      this.cartItemsIds = this.cartItemsIds.filter((el) => el !== id);
    },
  },
});
