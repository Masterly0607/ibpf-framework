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
                :color="isGrid ? 'primary' : 'grey-7'"
                icon="grid_view"
                aria-label="Grid"
                @click="onChangeView"
              />
              <q-btn
                flat
                dense
                :color="isGrid ? 'grey-7' : 'primary'"
                icon="view_list"
                aria-label="List"
                @click="onChangeView"
              />
            </div>
          </div>

          <q-separator spaced />
        </div>
      </div>

      <!-- skeleton list -->
      <section v-if="isLoading" class="row q-col-gutter-md q-py-md">
        <div v-for="i in 8" :key="i" class="col-12 col-sm-6 col-md-3">
          <product-card-skeleton />
        </div>
      </section>

      <!-- View product list -->
      <section v-else>
        <!-- grid view -->
        <ProductListGrid v-if="isGrid" :products="searchProductData" />
        <!-- list view -->
        <ProductListView v-else :products="searchProductData" />

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

      <section>
        <preview-json :list="searchProductData"></preview-json>
      </section>
    </div>
  </q-page>
</template>

<script setup>
import ProductListView from "./components/product-view/ProductListView.vue";
import ProductListGrid from "./components/product-view/ProductListGrid.vue";
import ProductCardSkeleton from "src/components/skeletons/ProductCardSkeleton.vue";
import FilterProduct from "./components/FilterProduct.vue";
import { ref, onMounted, computed } from "vue";
import { useProductStore } from "src/stores/product-store";
import { useRouter } from "vue-router";
const router = useRouter();
const productStore = useProductStore();
const isLoading = ref(true);
const submitResult = ref([]);
const keyword = ref("");
const searchProductData = computed(() => productStore.getProductList);
const searchMeta = ref({
  per_page: 8,
  current_page: 1,
  total_pages: null,
});

const isGrid = ref(true);

const onChangeView = () => {
  isGrid.value = !isGrid.value;
};

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

const viewProductDetail = (productCode) => {
  const item = productStore.findProduct(productCode);
  if (item) {
    productStore.storeOneProduct(item);
    router.push({ name: "product-detail-page", params: { productCode } });
  }
};

const searchProduct = async (filter) => {
  try {
    const response = await productStore.serverFetchProductList({
      keyword: keyword.value,
      product_type_id: filter ? filter.product_type_id : "",
      core_area_id: filter ? filter.corea_area_id : [],
      rowsPerPage: searchMeta.value.per_page,
      page: 1,
    });

    console.log(response.data);

    if (!response.data.status) {
      productStore.resetProductList();
    } else {
      productStore.storeProductList(response.data.data);
      searchMeta.value = response.data.meta;
    }
  } catch (error) {
    console.log("Error fetching items:", error.message);
  } finally {
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
  }
};

const searchLoadProduct = async (filter) => {
  try {
    const response = await productStore.serverFetchProductList({
      keyword: keyword.value,
      product_type_id: filter ? filter.product_type_id : "",
      core_area_id: filter ? filter.corea_area_id : [],
      rowsPerPage: searchMeta.value.per_page,
      page: searchMeta.value.current_page,
    });

    if (!response.data.status) {
      productStore.resetProductList();
    } else {
      productStore.mergeProductList(response.data.data);
      searchMeta.value = response.data.meta;
    }
  } catch (error) {
    console.log("Error fetching items:", error.message);
  } finally {
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
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

  console.log(payload);
};

// add to carts

//const cartStore = useCartStore();
//const cartItemsIds = computed(() => cartStore.getCartItemsIds || []);

onMounted(() => {
  searchProduct();
});
</script>
