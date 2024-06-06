import { defineStore } from "pinia";
import { authAPI } from "src/boot/axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {},
    roles: null,
    token: null,
    permissions: null,
    roles: null,
  }),

  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token,
    isAuthenticated: (state) => !!state.token,
    getRoles: (state) => state.roles || [],
    getPermissions: (state) => state.permissions || [],
  },

  actions: {
    async login(payload) {
      try {
        const response = await authAPI.post("/api/v1/auth/login", {
          email: payload.email,
          password: payload.password,
        });

        if (!response.status === true) {
          this.resetUser();
        }

        return response.data.data;
      } catch (error) {
        console.log(error);
      }
    },

    storeUser(payload) {
      this.user = payload.user;
      this.token = payload.token;
      this.roles = payload.roles;
      this.permissions = payload.permissions;
    },

    resetUser() {
      this.user = {};
      this.token = null;
      this.roles = null;
      this.permissions = null;
    },
  },

  persist: true,
});
