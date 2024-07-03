import { defineStore } from "pinia";
import { authAPI } from "src/boot/axios";

export const useUserProfileStore = defineStore("userProfile", {
  state: () => ({
    username: {},
    email: null,
    bfi: null,
    roles: null,
  }),

  getters: {
    getUsername: (state) => state.username,
    getEmail: (state) => state.email,
    getBfi: (state) => state.bfi,
    getRoles: (state) => state.roles || [],
  },

  actions: {
    async userProfile(payload) {
      try {
        const response = await authAPI.post("/api/v1/user/profile", {
          username: payload.username,
          email: payload.email,
          bfi: payload.bfi,
          roles: payload.roles,
        });

        return response;
      } catch (error) {
        console.log("Error fetching items:", error.message);
      }
    },
  },
});
