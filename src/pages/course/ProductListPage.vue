<template>
  <q-page padding>
    <div class="ibf-container-1200">
      <div class="q-gutter-md">
        <q-form @submit="onSubmit">
          <!-- Search product -->
          <div>
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

              <filter-product></filter-product>
            </div>
          </div>

          <!-- Fillter product -->
          <!--<div class="rounded-borders" :class="$q.dark.isActive ? '' : ''">
            <div class="q-py-lg"><q-separator /></div>
            <div class="row">
              <span class="col-6 text-bold ibf-h9">Fillter</span>

              <div class="col-6" align="right">
                <q-btn no-caps dense flat color="grey" label="Clear Fillter" />
              </div>
            </div>

            <div class="col-6 q-gutter-md">
              <q-card flat bordered class="q-pa-md row" style="max-width: 100%">
                <span class="q-py-sm ibf-h11 text-bold">Course Type : </span>
                <q-option-group
                  name="course_type"
                  v-model="preferred"
                  :options="options"
                  color="primary"
                  inline
                />
              </q-card>
              <q-card flat bordered class="row q-py-sm">
                <q-item class="q-py-none q-px-sm full-width">
                  <q-item-section top avatar>
                    <span class="ibf-h11 text-bold q-pa-md">Core area : </span>
                  </q-item-section>
                  <q-item-section>
                    <q-select
                      borderless
                      square
                      class="q-ml-md"
                      name="core_area"
                      v-model="model"
                      multiple
                      use-chips
                      option-label="title"
                      option-value="id"
                      :options="options1"
                      label="Select options"
                      color="teal-6"
                      dense
                    >
                      <template v-slot:selected-item="scope">
                        <q-chip
                          removable
                          dense
                          size="12px"
                          @remove="scope.removeAtIndex(scope.index)"
                          :tabindex="scope.tabindex"
                          color="grey-4"
                          text-color="black"
                          class="q-ma-xs"
                        >
                          {{ scope.opt }}
                        </q-chip>
                      </template>
                    </q-select>
                  </q-item-section>
                </q-item>
              </q-card>
            </div>
          </div>-->
        </q-form>

        <div class="ibf-h8 text-bold">New & Feature courses</div>
        <q-separator />
      </div>

      <!-- View product list -->
      <div class="row q-col-gutter-md q-py-md">
        <div
          v-for="(data, image, index) in searchProductData"
          :key="index"
          class="col-12 col-sm-6 col-md-3"
        >
          <q-card square flat bordered>
            <img :src="data.thumbnail" height="200px" />

            <q-card-section class="q-pa-sm">
              <div class="ibf-h10 ellipsis-2-lines text-weight-medium">
                {{ data.title }}
              </div>
              <div
                class="q-py-xs text-grey-7 text-weight-light ellipsis-2-lines"
              >
                {{ data.description }}
              </div>
            </q-card-section>

            <q-card-actions class="q-pb-none" align="between">
              <div v-if="data.isFree">
                <q-badge color="grey" text-color="white" label="Free" />
              </div>
              <div v-else>
                <div
                  v-if="data.isDiscount"
                  class="ibf-h11 text-negative text-weight-bold"
                >
                  {{ `${data.currency} ${data.afterDiscount}` }}

                  <span
                    class="ibf-h12 text-grey-7 text-strike text-weight-light"
                  >
                    {{ `${data.currency} ${data.price}` }}
                  </span>
                </div>
                <div v-else class="ibf-h11 text-negative text-bold">
                  {{ `${data.currency} ${data.price}` }}
                </div>
              </div>

              <div>
                <q-btn
                  v-if="checkInCart(data.id)"
                  flat
                  round
                  icon="mdi-cart"
                  @click="removeFromCarts(data.id)"
                  color="primary"
                />
                <q-btn
                  v-else
                  flat
                  round
                  icon="mdi-cart-outline"
                  @click="addToCarts(data.id)"
                  color="grey"
                />

                <q-btn flat round icon="mdi-heart-outline" color="grey" />
              </div>
            </q-card-actions>

            <!-- <div class="col-4 text-grey-6 ibf-h11">10 tasks</div>
              <span class="col-8 text-grey-6 ibf-h11" align="right">
                Start on 25-May-24
              </span> -->
          </q-card>
        </div>
      </div>
      <q-card flat square>
        <q-btn
          outline
          no-caps
          unelevated
          color="primary"
          style="width: 100%; height: 100%"
          label="See more course"
          :to="{ name: '' }"
        />
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import FilterProduct from "./components/FilterProduct.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
import { useCartStore } from "src/stores/cart-store";
import { storeToRefs } from "pinia";
import { useCategoryStore } from "src/stores/category-store";

const categoryStore = useCategoryStore();
const submitResult = ref([]);
const keyword = ref("");
const searchProductData = ref(null);

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

const fetchCategory = async () => {
  await categoryStore.fetchCoreAreas();
};

const searchProduct = async () => {
  try {
    const response = await axios.get(
      "https://product.ibfnxt.com/api/v1/user/product/search",
      {
        params: {
          keyword: keyword.value,
        },
      }
    );
    console.log(response);
    searchProductData.value = response.data.data;
  } catch (error) {
    console.log("Error fetching items:", error.message);
  }
};

// add to carts

const cartStore = useCartStore();

const { cartItemsIds } = storeToRefs(cartStore);

const addToCarts = (id) => {
  cartStore.addToCart(id);
};

const removeFromCarts = (id) => {
  cartStore.removeFromCart(id);
};
const checkInCart = (id) => {
  return cartItemsIds.value.includes(id);
};

onMounted(() => {
  searchProduct();
  fetchCategory();
});
</script>

<style scoped>
.d-flex {
  display: flex;
}
.w-100 {
  width: 100%;
}

.single-line-ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.multi-line-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Change this number to the desired number of lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
