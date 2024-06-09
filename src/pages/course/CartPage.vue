<template>
  <q-page class="q-pa-md">
    <div class="ibf-container-1200">
      <q-card square flat>
        <q-card-section class="q-pa-none">
          <q-heading-1
            title="Cart"
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
                bordered
                flat
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
                      <div class="row q-gutter-x-sm">
                        <div class="col-12 col-md-2">
                          <img
                            style="height: 130px; width: 95%; object-fit: cover"
                            class="rounded-borders"
                            src="https://cdn.quasar.dev/img/parallax2.jpg"
                          />
                        </div>

                        <div class="col-12 col-md">
                          <q-item-label
                            class="ibf-h9 text-weight-medium ellipsis-2-lines"
                          >
                            {{ cartItem.product.title }}
                          </q-item-label>

                          <q-item-label caption lines="2">
                            {{ cartItem.product.description }}
                          </q-item-label>

                          <!--<div class="q-my-md row q-gutter-x-sm">
                            <q-badge
                              color="red"
                              text-color="white"
                              :label="cartItem.product.type_id"
                            />
                            <q-badge
                              color="red"
                              text-color="white"
                              :label="cartItem.product.coreArea_id"
                            />
                          </div>-->

                          <div
                            class="q-mt-md ibf-h9 text-teal"
                            v-if="cartItem.product.is_free"
                          >
                            Free
                          </div>

                          <div class="q-mt-md" v-else>
                            <price-original
                              :currency="cartItem.product.currency"
                              :price="cartItem.product.price"
                              :is-decimals="false"
                            />

                            <div
                              v-if="cartItem.product.isDiscount"
                              class="text-red text-weight-medium ibf-h11"
                            >
                              <span
                                class="text-weight-light ibf-h12 text-grey-9"
                              >
                                After discount:
                              </span>
                              {{
                                `${cartItem.product.currency} ${formatCurrency(
                                  cartItem.product.after_discount,
                                  false
                                )}`
                              }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-item-section>

                    <q-item-section side top>
                      <q-badge outline color="grey-6" text-color="black">
                        <q-icon name="close" size="14px" class="q-mr-xs" />

                        1
                      </q-badge>

                      <!--<q-input
                  style="width: 60px"
                  dense
                  outlined
                  type="number"
                >
                  <template v-slot:before>
                    <q-icon
                      size="15px"
                      name="close"
                      @click="text = ''"
                      class="cursor-pointer"
                    />
                  </template>
                </q-input>-->
                    </q-item-section>
                  </q-item>
                </q-card-section>
              </q-card>
            </section>
          </div>
        </q-card-section>

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
                    @click="pushToCheckOutItems()"
                    >Place order</q-btn
                  >
                </div>
              </div>
            </div>
          </q-card>
        </q-footer>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import EmptyCart from "./components/EmptyCart.vue";
import CartSkeleton from "src/components/skeletons/CartSkeleton.vue";
import { formatCurrency } from "src/helpers/utils";
import { useCartStore } from "src/stores/cart-store";
import { usePurchaseStore } from "src/stores/purchase-store";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const purchaseStore = usePurchaseStore();
const router = useRouter();
const selectedItems = ref([]);
const isSelectedAll = ref("false");
const cartStore = useCartStore();
const cartItems = ref([]);
const isLoading = ref(true);

//const totalPrice = computed(() => {
//  return selectedItems.value.reduce((acc, order) => acc + order.price, 0);
//});

const isCartEmpty = computed(() => cartItems.value.length < 1);

const pushToCheckOutItems = () => {
  if (selectedItems.value.length < 1) return;
  purchaseStore.addToCheckOutList(selectedItems.value);
  router.push({ name: "check-out-page" });
};

const totalPrice = computed(() => {
  return selectedItems.value.reduce((acc, order) => {
    return (
      acc +
      (order.product.is_free
        ? 0
        : order.product.isDiscount
        ? order.product.after_discount
        : order.product.price)
    );
  }, 0);
});

onMounted(() => {
  cartItems.value = cartStore.getCartItems;
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
