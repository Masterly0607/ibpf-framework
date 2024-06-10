import { defineStore } from "pinia";
import { productAPI } from "src/boot/axios";

export const useCartStore = defineStore("cart", {
  state: () => ({
    lastCartFetch: null,
    cart: {
      order_items: [],
      //  total_items: 0,
      //  total_price: 0,
    },
    cartItemsIds: [],
  }),

  getters: {
    getCartItemsIds: (state) => state.cartItemsIds,
    getCartItems: (state) => state.cart.order_items,
    //countCartItemsIds: (state) => state.cart.length || 0,
  },

  actions: {
    async serverFetchCartItems() {
      const now = Date.now();
      const cacheDuration = 1000 * 60 * 10; // 10 minutes

      try {
        const res = await productAPI.get("/api/v1/user/product/get/cart-items");
        console.log(res);
        if (!res.data.status) return;

        this.storeCart(res.data.data);
      } catch (error) {
        console.log(error.message);
      }

      //  if (!this.lastCartFetch || now - this.lastCartFetch > cacheDuration) {
      //    try {
      //      const res = await productAPI.get(
      //        "/api/v1/user/product/get/cart-items"
      //      );
      //      console.log(res);
      //      if (!res.data.status) return;

      //      this.lastCartFetch = now;
      //      if (res.data.data.length < 1) this.resetCart(); // auto empty cart if the data response is blank
      //      this.storeCart(res.data.data);
      //    } catch (error) {
      //      console.log(error.message);
      //    }
      //  }
    },

    resetCart() {
      this.cart.order_items = [];
      this.cartItemsIds = [];
    },

    storeCart(payload) {
      if (payload) {
        this.cart.order_items = payload.data;
        this.cartItemsIds = payload.data.map((el) => el.course_id);
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
        this.lastCartFetch = null;
      }
    },

    async serverRemoveItem(id) {
      try {
        const res = await productAPI.delete(
          "/api/v1/user/delete/item-in-cart/" + id
        );

        console.log(res);

        if (!res.data.status) return;

        this.removeFromCart(id);
      } catch (error) {
        console.log(error.message);
      }
    },

    removeFromCart(id) {
      const index = this.cart.order_items.findIndex((el) => el.id == id);
      if (index < 0) return;
      this.cart.order_items.splice(index, 1);
      this.cartItemsIds = this.cartItemsIds.filter((el) => el !== id);
      this.lastCartFetch = null;
    },
  },

  persist: true,
});
