import { defineStore } from "pinia";
import { productAPI } from "src/boot/axios";
import { useUserStore } from "./user-store";
import { Notify } from "quasar";
import { shouldFetchData } from "src/helpers/apiCache";

export const useCartStore = defineStore("cart", {
  state: () => ({
    lastCartFetch: null,
    cart: {
      order_items: [],
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
      const userStore = useUserStore();
      const now = Date.now();
      const cacheDuration = 1000 * 60 * 10; // 15 minutes
      const apiStatus = shouldFetchData(
        this.cart.order_items,
        this.lastCartFetch,
        cacheDuration
      );

      if (!userStore.isAuthenticated) {
        Notify.create({
          message: "You must be logged in to perform this action",
          color: "negative",
          position: "top-right",
        });
        return;
      }

      if (apiStatus) {
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

    resetLastCartFetch() {
      this.lastCartFetch = null;
    },

    storeCart(payload) {
      if (payload) {
        this.cart.order_items = payload;

        // fill the cartItemsIds with the id to verify which is already in the cart
        this.cartItemsIds = payload ? payload.map((el) => el.course.id) : [];
      }
    },
    async serverAddToCart(id) {
      const userStore = useUserStore();

      if (!userStore.isAuthenticated) {
        Notify.create({
          message: "You must be logged in to perform this action",
          color: "negative",
          position: "top-right",
        });
        return;
      }
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
      const userStore = useUserStore();

      if (!userStore.isAuthenticated) {
        Notify.create({
          message: "You must be logged in to perform this action",
          color: "negative",
          position: "top-right",
        });
        return;
      }
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
  },

  persist: true,
});
