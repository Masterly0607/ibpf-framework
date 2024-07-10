import { defineStore } from "pinia";
import { Notify } from "quasar";
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

        if (!response.data.status) {
          this.resetUser();
          Notify.create({
            message: `${response.data.message}`,
            color: "negative",
            position: "top-right",
          });
        }

        return response.data.data;
      } catch (error) {
        Notify.create({
          message: `${error.message}`,
          color: "negative",
          position: "top-right",
        });
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
