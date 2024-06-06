import { boot } from "quasar/wrappers";
import axios from "axios";
import { useUserStore } from "src/stores/user-store";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

const createAxiosInstance = (baseURL) => {
  const instance = axios.create({
    baseURL,
  });

  instance.interceptors.request.use(
    (config) => {
      const userStore = useUserStore();
      const token = userStore.getToken;

      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
        config.withCredentials = true;
        config.withXSRFToken = true;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};
const api = createAxiosInstance("https://api.example.com");
const authAPI = createAxiosInstance("https://locker.ibfnxt.com");
const productAPI = createAxiosInstance("https://product.ibfnxt.com");

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  app.config.globalProperties.$authAPI = authAPI;
  app.config.globalProperties.$productAPI = productAPI;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api, authAPI, productAPI };
