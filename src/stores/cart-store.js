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
    getCartItemsIds: (state) => state.cartItemsIds || [],
    getCartItems: (state) => state.cart.order_items || [],
    //countCartItemsIds: (state) => state.cart.length || 0,
  },

  actions: {
    async serverFetchCartItems() {
      const now = Date.now();
      const cacheDuration = 1000 * 60 * 10; // 10 minutes

      if (!this.lastCartFetch || now - this.lastCartFetch > cacheDuration) {
        try {
          const res = await productAPI.get(
            "/api/v1/user/product/get/cart-items"
          );

          if (!res.data.status) return;
          this.storeCart(res.data.data);
          this.lastCartFetch = now;
        } catch (error) {
          console.log(error.message);
        }
      }
    },

    resetCart() {
      this.cart.order_items = [];
      this.cartItemsIds = [];
    },

    storeCart(payload) {
      if (payload) {
        this.cart.order_items = payload.data;

        // fill the cartItemsIds with the course_id to verify which is already in the cart
        this.cartItemsIds = payload.data
          ? payload.data.map((el) => el.course_id)
          : [];
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

        // reset the lastCartFetch to fetch the items for cart again
        this.lastCartFetch = null;
      }
    },

    async serverRemoveItem(payload) {
      console.log(payload);
      try {
        const res = await productAPI.delete(
          "/api/v1/user/delete/item-in-cart/" + payload.orderId
        );

        if (!res.data.status) return;

        this.removeFromCart(payload);
      } catch (error) {
        console.log(error.message);
      }
    },

    removeFromCart(payload) {
      const index = this.cart.order_items.findIndex(
        (el) => el.id == payload.orderId
      );
      if (index < 0) return;

      // remove the order by id from the order_items list
      this.cart.order_items.splice(index, 1);

      // remove the product id from the list
      this.cartItemsIds = this.cartItemsIds.filter(
        (el) => el !== payload.courseId
      );

      // reset the lastCartFetch to fetch the items for cart again
      this.lastCartFetch = null;
    },

    async serverCheckOut(payload) {
      try {
        const res = await productAPI.post("/api/v1/user/product/checkout");
      } catch (error) {
        console.log(error.message);
      }
    },
  },

  persist: true,
});
