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
    isOneProduct: (state) => (state.oneProduct.id ? true : false),
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

    findProduct({ id: productId, productCode: code }) {
      const result = this.productList.find((el) => el.id === productId);
      return result;
    },

    storeOneProduct(payload) {
      this.oneProduct = payload;
    },

    async serverFetchOneProduct(product_id) {
      try {
        const response = await productAPI.get(
          "/api/v1/user/product/show/" + product_id
        );

        if (!response.status) return;
        return response.data.data;
      } catch (error) {
        console.log(error.message());
      }
    },
  },
});
