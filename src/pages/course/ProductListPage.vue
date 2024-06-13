<template>
  <q-page padding>
    <div class="ibf-container-1200">
      <div class="q-gutter-y-lg">
        <q-form @submit="onSubmit">
          <!-- Search product -->

          <div class="row items-center q-gutter-sm">
            <q-input
              class="col"
              filled
              square
              v-model="keyword"
              placeholder="Search for IBF products"
            >
              <template v-slot:append>
                <q-btn flat round @click="searchProduct">
                  <q-icon name="search" />
                </q-btn>
              </template>
            </q-input>

            <filter-product
              @product:filter="handleProductFilter"
            ></filter-product>
          </div>
        </q-form>

        <div>
          <div class="row justify-between items-center">
            <div class="ibf-h8 text-weight-bold">New & Feature courses</div>
            <div>
              <q-btn
                flat
                dense
                color="primary"
                icon="grid_view"
                aria-label="Submit"
                :to="{ name: 'product-list-page' }"
              />
              <q-btn
                flat
                dense
                color="black-6"
                icon="view_list"
                aria-label="Submit"
              />
            </div>
          </div>

          <q-separator spaced />
        </div>
      </div>

      <!-- skeleton list -->

      <section v-if="isLoading" class="row q-col-gutter-md q-py-md">
        <div v-for="i in 4" :key="i" class="col-12 col-sm-6 col-md-3">
          <product-card-skeleton />
        </div>
      </section>

      <!-- View product list -->
      <section v-else>
        <div class="row q-col-gutter-md q-py-md">
          <div
            v-for="(product, index) in searchProductData"
            :key="index"
            class="col-12 col-sm-6 col-md-3"
          >
            <q-card square flat bordered>
              <img :src="product.thumbnail" height="200px" />

              <q-card-section class="q-pa-sm">
                <div class="ibf-h11 ellipsis-2-lines text-weight-medium">
                  {{ product.title }}
                </div>
                <div
                  class="q-py-xs text-grey-7 ibf-h12 text-weight-light ellipsis-2-lines"
                >
                  {{ product.description }}
                </div>
              </q-card-section>

              <q-card-actions class="q-pb-none" align="between">
                <div v-if="product.isFree">
                  <q-badge color="grey" text-color="white" label="Free" />
                </div>
                <div v-else>
                  <div v-if="product.isDiscount">
                    <price-original
                      :currency="product.currency"
                      :price="product.afterDiscount"
                      :is-decimals="false"
                    />

                    <price-discount
                      :currency="product.currency"
                      :price="product.price"
                      :is-decimals="false"
                    >
                    </price-discount>
                  </div>
                  <div v-else>
                    <price-original
                      :currency="product.currency"
                      :price="product.price"
                      :is-decimals="false"
                    />
                  </div>
                </div>

                <div>
                  <q-btn
                    v-if="checkInCart(product.id)"
                    flat
                    round
                    icon="mdi-cart"
                    color="red-7"
                    :to="{ name: 'cart-page' }"
                  />
                  <q-btn
                    v-else
                    flat
                    round
                    icon="mdi-cart-outline"
                    @click="addToCarts(product.id)"
                    color="grey"
                  />

                  <q-btn flat round icon="mdi-heart-outline" color="grey" />
                </div>
              </q-card-actions>
            </q-card>
          </div>
        </div>
        <q-card flat square>
          <q-btn
            v-if="canLoadMore"
            outline
            no-caps
            unelevated
            color="primary"
            style="width: 100%; height: 100%"
            label="See more course"
            @click="loadMoreProducts"
          />
        </q-card>
      </section>
    </div>
  </q-page>
</template>

<script setup>
import ProductCardSkeleton from "src/components/skeletons/ProductCardSkeleton.vue";
import FilterProduct from "./components/FilterProduct.vue";
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { useCartStore } from "src/stores/cart-store";

const isLoading = ref(true);
const submitResult = ref([]);
const keyword = ref("");
const searchProductData = ref(null);
const searchMeta = ref({
  per_page: 5,
  current_page: 1,
  total_pages: null,
});

const onSubmit = (evt) => {
  const formData = new FormData(evt.target);
  const data = [];

  for (const [name, value] of formData.entries()) {
    data.push({
      name,
      value,
    });
  }

  submitResult.value = data;
};

const searchProduct = async (filter) => {
  try {
    const response = await axios.get(
      "https://product.ibfnxt.com/api/v1/user/product/search",
      {
        params: {
          keyword: keyword.value,
          product_type_id: filter ? filter.product_type_id : "",
          core_area_id: filter ? filter.corea_area_id : [],
          rowsPerPage: searchMeta.value.per_page,
          page: 1,
        },
      }
    );
    console.log(response.data);

    if (!response.data.status) {
      searchProductData.value = [];
    } else {
      searchProductData.value = response.data.data;
      searchMeta.value = response.data.meta;
    }

    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
  } catch (error) {
    console.log("Error fetching items:", error.message);
  }
};

const searchLoadProduct = async (filter) => {
  try {
    const response = await axios.get(
      "https://product.ibfnxt.com/api/v1/user/product/search",
      {
        params: {
          keyword: keyword.value,
          product_type_id: filter ? filter.product_type_id : "",
          core_area_id: filter ? filter.corea_area_id : [],
          rowsPerPage: searchMeta.value.per_page,
          page: searchMeta.value.current_page,
        },
      }
    );
    console.log(response.data);

    if (!response.data.status) {
      searchProductData.value = [];
    } else {
      searchProductData.value = [
        ...searchProductData.value,
        ...response.data.data,
      ];
      searchMeta.value = response.data.meta;
    }

    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
  } catch (error) {
    console.log("Error fetching items:", error.message);
  }
};

const canLoadMore = computed(
  () => searchMeta.value.current_page < searchMeta.value.total_pages
);

const loadMoreProducts = () => {
  if (canLoadMore.value) {
    searchMeta.value.current_page = searchMeta.value.current_page + 1;
    searchLoadProduct();
  } else {
    console.log("that is the end");
  }
};

const handleProductFilter = (payload) => {
  searchProduct(payload);
};

// add to carts

const cartStore = useCartStore();
const cartItemsIds = computed(() => cartStore.getCartItemsIds || []);

const addToCarts = async (id) => {
  await cartStore.serverAddToCart(id);
};

//const removeFromCarts = (id) => {
//  cartStore.removeFromCart(id);
//};
const checkInCart = (id) => {
  return cartItemsIds.value.includes(id);
};

onMounted(() => {
  searchProduct();
});
</script>
