import { defineStore } from "pinia";
import { authAPI, productAPI } from "src/boot/axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {},
    roles: null,
    token: null,
    permissions: null,
    roles: null,
    orderList: [],
  }),

  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token,
    isAuthenticated: (state) => !!state.token,
    getRoles: (state) => state.roles || [],
    getPermissions: (state) => state.permissions || [],
    getOrderList: (state) => state.orderList || [],
  },

  actions: {
    async login(payload) {
      try {
        const response = await authAPI.post("/api/v1/auth/customer/login", {
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

    logout() {
      this.resetUser();
    },

    storeUser(payload) {
      this.user = payload.customer;
      this.token = payload.token;
      this.roles = payload.roles;
      this.permissions = payload.permissions;
    },

    resetUser() {
      this.user = {};
      this.token = null;
      this.roles = null;
      this.permissions = null;
      this.orderList = [];
    },

    async serverFetchOrderedItems() {
      try {
        const res = await productAPI.get("/api/v1/user/order/list");
        console.log(res);
        if (!res.data.status) return;
        this.storeOrderList(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    },

    storeOrderList(payload) {
      if (payload) {
        this.orderList = payload;
      }
    },
  },

  persist: true,
});
