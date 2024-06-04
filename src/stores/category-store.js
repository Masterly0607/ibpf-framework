import { defineStore } from "pinia";
import { productAPI } from "src/boot/axios";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    lastFetch: null,
    coreAreas: [],
  }),
  getters: {
    getCoreAreas: (state) => state.coreAreas,
  },
  actions: {
    async fetchCoreAreas() {
      const now = Date.now();
      const cacheDuration = 1000 * 60 * 30; // 5 minutes

      if (!this.lastFetch || now - this.lastFetch > cacheDuration) {
        try {
          const res = await productAPI.get("/api/v1/user/list-core-area");

          if (!res.data.status) return;
          this.storeCoreAreas(res.data.data);
          this.lastFetch = now;
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
});
