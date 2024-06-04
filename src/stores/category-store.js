import { defineStore } from "pinia";
import { productAPI } from "src/boot/axios";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    lastProductTypeFetch: null,
    lastCoreAreaFetch: null,
    coreAreas: [],
    productTypes: [],
  }),
  getters: {
    getCoreAreas: (state) => state.coreAreas,
    getProductTypes: (state) => state.productTypes,
  },
  actions: {
    async fetchProductTypes() {
      const now = Date.now();
      const cacheDuration = 1000 * 60 * 30; // 5 minutes

      if (
        !this.lastProductTypeFetch ||
        now - this.lastProductTypeFetch > cacheDuration
      ) {
        try {
          const res = await productAPI.get("/api/v1/user/list-product-type");
          console.log(res);

          if (!res.data.status) return;
          this.storeProductTypes(res.data.data);
          this.lastProductTypeFetch = now;
        } catch (error) {
          console.log(error.message);
        }
      }
    },

    storeProductTypes(payload) {
      if (payload) {
        this.productTypes = payload;
      }
    },
    async fetchCoreAreas() {
      const now = Date.now();
      const cacheDuration = 1000 * 60 * 30; // 5 minutes

      if (
        !this.lastCoreAreaFetch ||
        now - this.lastCoreAreaFetch > cacheDuration
      ) {
        try {
          const res = await productAPI.get("/api/v1/user/list-core-area");

          if (!res.data.status) return;
          this.storeCoreAreas(res.data.data);
          this.lastCoreAreaFetch = now;
          console.log(res);
        } catch (error) {
          console.log(error.message);
        }
      }
    },

    storeCoreAreas(payload) {
      if (payload) {
        this.coreAreas = payload;
      }
    },
  },

  persist: true,
});
