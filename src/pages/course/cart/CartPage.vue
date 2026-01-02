<template>
  <q-page class="q-pa-md">
    <div class="ibf-container-1200">
      <div class="q-pa-none">
        <q-heading-1
          title="Cart"
          subtitle="All items to checkout"
          icon="mdi-cart-variant"
          showLine="true"
        ></q-heading-1>

        <q-separator spaced />
        <!-- Skeleton -->
        <cart-skeleton v-if="isLoading" />

        <div v-else>
          <empty-cart v-if="isCartEmpty" />

          <section v-else id="cart-item" class="column q-gutter-md q-mt-sm">
            <q-card
              class="ibf-card-3"
              square
              v-for="(cartItem, itemIndex) in cartItems"
              :key="itemIndex"
            >
              <q-card-section class="q-pa-xs">
                <q-item class="q-px-sm">
                  <q-item-section side top>
                    <q-checkbox
                      color="red"
                      v-model="selectedItems"
                      :val="cartItem"
                    />
                  </q-item-section>
                  <q-item-section>
                    <div class="row q-gutter-sm">
                      <div class="col-12 col-md-2 text-center">
                        <img
                          style="height: 150px; width: 150px; object-fit: cover"
                          class="rounded-borders"
                          :src="cartItem.course.thumbnail"
                        />
                      </div>

                      <div class="col-12 col-md">
                        <q-item-label
                          class="ibf-h9 text-weight-medium ellipsis-2-lines"
                        >
                          {{ cartItem.course.title }}
                        </q-item-label>

                        <div class="row q-gutter-x-md q-mt-md">
                          <icon-label
                            icon="mdi-earth"
                            :title="cartItem.course.product_type.title"
                          />

                          <icon-label
                            icon="mdi-checkbox-blank-badge-outline"
                            :title="cartItem.course.core_area.title"
                          />

                          <div>
                            <q-badge
                              v-if="cartItem.course.is_free"
                              color="secondary"
                              text-color="white"
                              label="Free"
                            />
                          </div>
                        </div>

                        <div
                          class="q-mt-lg ibf-h9 text-teal"
                          v-if="cartItem.course.is_free"
                        >
                          Free
                        </div>

                        <div class="q-mt-lg" v-else>
                          <price-original
                            :currency="cartItem.course.currency"
                            :price="cartItem.course.price"
                            :is-decimals="false"
                          />

                          <div
                            v-if="cartItem.course.isDiscount"
                            class="text-red text-weight-medium ibf-h11"
                          >
                            <span class="text-weight-light ibf-h12 text-grey-9">
                              After discount:
                            </span>
                            {{
                              `${cartItem.course.currency} ${formatCurrency(
                                cartItem.course.after_discount,
                                false
                              )}`
                            }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </q-item-section>
                  <q-item-section side top>
                    <div class="q-px-sm">
                      <q-icon name="close" size="14px" class="q-mr-xs" />
                      1
                    </div>

                    <q-space />

                    <q-btn
                      flat
                      size="12px"
                      round
                      color="red-5"
                      icon="delete"
                      @click="
                        removeItem({
                          courseId: cartItem.course_id,
                          orderId: cartItem.id,
                        })
                      "
                    />
                  </q-item-section>
                </q-item>
              </q-card-section>
            </q-card>
          </section>

          <section class="q-my-sm">
            <preview-json :list="cartItems" />
          </section>
        </div>
      </div>

      <q-footer class="q-pa-md bg-white" bordered>
        <q-card flat class="footer-container q-mx-auto">
          <div class="row justify-between items-center">
            <div class="col-auto">
              <q-checkbox
                :disable="isCartEmpty"
                color="red"
                v-model="isSelectedAll"
                true-value="true"
                false-value="false"
                @update:model-value="
                  () =>
                    isSelectedAll == 'true'
                      ? (selectedItems = cartItems)
                      : (selectedItems = [])
                "
              />

              <span class="text-grey ibf-h11">All</span>
            </div>
            <div class="col-auto">
              <div class="row q-gutter-x-md">
                <div class="text-red-5 text-weight-medium ibf-h6">
                  <span class="ibf-h10">USD</span>
                  {{ formatCurrency(totalPrice) }}
                </div>
                <q-btn
                  :disable="isCartEmpty"
                  unelevated
                  rounded
                  color="red"
                  @click="placeOrders()"
                  >Place order</q-btn
                >
              </div>
            </div>
          </div>
        </q-card>
      </q-footer>
    </div>
  </q-page>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import EmptyCart from "./components/EmptyCart.vue";
import CartSkeleton from "src/components/skeletons/CartSkeleton.vue";
import { formatCurrency } from "@/helpers/utils";
import { useCartStore } from "@/stores/cart-store";
import { usePurchaseStore } from "@/stores/purchase-store";

import { useRouter } from "vue-router";
const purchaseStore = usePurchaseStore();
const router = useRouter();
const selectedItems = ref([]);
const isSelectedAll = ref("false");
const cartStore = useCartStore();
const cartItems = computed(() => cartStore.getCartItems || []);
const isLoading = ref(true);

//const totalPrice = computed(() => {
//  return selectedItems.value.reduce((acc, order) => acc + order.price, 0);
//});

const isCartEmpty = computed(() => cartItems.value.length < 1);

const placeOrders = () => {
  if (selectedItems.value.length < 1) return;
  purchaseStore.addToCheckOutList(selectedItems.value);
  router.push({ name: "check-out-page" });
};

const removeItem = async (payload) => {
  await cartStore.serverRemoveItem(payload);
};

const totalPrice = computed(() => {
  return selectedItems.value.reduce((acc, order) => {
    return (
      acc +
      (order.course.is_free
        ? 0
        : order.course.isDiscount
        ? order.course.after_discount
        : order.course.price)
    );
  }, 0);
});

const fetchCartItems = async () => {
  await cartStore.serverFetchCartItems();
};

onMounted(() => {
  fetchCartItems();
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>

<style scoped>
.footer-container {
  max-width: 1200px;
  width: 100%;
}
</style>
