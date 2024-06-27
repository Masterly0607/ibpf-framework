import { defineStore } from "pinia";
import { productAPI } from "src/boot/axios";

export const useProductStore = defineStore("product", {
  state: () => ({
    productList: [],
    oneProduct: {},
  }),

  getters: {
    getProductList: (state) => state.productList,
    getOneProduct: (state) => state.oneProduct,
  },

  actions: {
    async serverFetchProductList(payload) {
      try {
        const response = await productAPI.get(
          "https://product.ibfnxt.com/api/v1/user/product/search",
          {
            params: {
              keyword: payload.keyword,
              product_type_id: payload.product_type_id,
              core_area_id: payload.core_area_id,
              rowsPerPage: payload.rowsPerPage,
              page: payload.page,
            },
          }
        );
        return response;
      } catch (error) {
        console.log("Error fetching items:", error.message);
      }
    },

    storeProductList(payload) {
      if (payload) {
        this.productList = payload;
      }
    },

    mergeProductList(payload) {
      if (payload) {
        this.productList = this.productList.concat(payload);
      }
    },

    resetProductList() {
      this.productList = [];
    },

    findProduct(productCode) {
      const result = this.productList.find(
        (el) => el.product_code === productCode
      );
      return result;
    },

    storeOneProduct(payload) {
      this.oneProduct = payload;
    },
  },
});
