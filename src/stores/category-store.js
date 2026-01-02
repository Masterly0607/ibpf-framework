import { defineStore } from "pinia";
import { productAPI } from "src/boot/axios";
import { shouldFetchData } from "src/helpers/apiCache";

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
      const cacheDuration = 1000 * 60 * 10; // 2o minutes
      const apiStatus = shouldFetchData(
        this.productTypes,
        this.lastProductTypeFetch,
        cacheDuration
      );

      if (apiStatus) {
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
      const cacheDuration = 1000 * 60 * 10; // 5 minutes
      const apiStatus = shouldFetchData(
        this.coreAreas,
        this.lastCoreAreaFetch,
        cacheDuration
      );

      if (apiStatus) {
        try {
          const res = await productAPI.get("/api/v1/user/list-core-area");

          if (!res.data.status) return;
          this.storeCoreAreas(res.data.data);
          this.lastCoreAreaFetch = now;
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
