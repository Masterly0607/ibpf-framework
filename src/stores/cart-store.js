import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [],
    cartItemsIds: [],
  }),

  getters: {
    getCartItemsIds: (state) => state.cartItems,
    countCartItemsIds: (state) => state.cartItems.length || 0,
  },

  actions: {
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
