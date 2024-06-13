<template>
  <q-page class="q-pa-md">
    <div class="ibf-container-1200 prevent-select">
      <q-card square flat>
        <q-card-section>
          <q-heading-1
            title="Checkout"
            icon="mdi-account-credit-card-outline"
            subtitle="Check your purchase items carefully before checking out"
            iconSize="50px"
          />
        </q-card-section>
        <q-separator spaced />

        <check-out-skeleton v-if="isLoading"></check-out-skeleton>

        <q-card-section v-else>
          <empty-check-out v-if="isItemsEmpty" />
          <div class="row q-col-gutter-xl" v-else>
            <div class="col-12 col-md-6">
              <div class="column q-gutter-lg">
                <q-card flat bordered square>
                  <q-card-section>
                    <div class="ibf-h9 text-weight-medium">Payment Options</div>

                    <q-separator spaced />

                    <q-item
                      class="q-px-none"
                      v-for="(option, optionIndex) in paymentTypeOptions"
                      :key="optionIndex"
                    >
                      <q-item-section side>
                        <q-radio
                          color="red-7"
                          v-model="selectedPaymentTypeOption"
                          :val="option.value"
                        />
                      </q-item-section>

                      <q-item-section>
                        <q-item-label class="ibf-h10 text-black">
                          {{ option.label }}
                        </q-item-label>

                        <q-item-label caption>
                          {{ option.description }}
                        </q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-card-section>
                </q-card>

                <q-card
                  flat
                  bordered
                  square
                  v-if="selectedPaymentTypeOption === 2"
                >
                  <q-card-section>
                    <div class="ibf-h9 text-weight-medium">Payment Method</div>

                    <q-separator spaced />

                    <q-item
                      class="q-px-none"
                      v-for="(method, methodIndex) in paymentMethods"
                      :key="methodIndex"
                    >
                      <q-item-section avatar>
                        <q-radio
                          color="red-7"
                          v-model="selectedPaymentMethod"
                          :val="method.value"
                        />
                      </q-item-section>

                      <q-item-section side>
                        <q-icon
                          color="grey-7"
                          size="30px"
                          :name="method.icon"
                        />
                      </q-item-section>
                      <q-item-section class="ibf-h10 text-black">
                        {{ method.label }}
                      </q-item-section>
                    </q-item>
                  </q-card-section>
                </q-card>

                <q-card flat bordered v-else>
                  <q-card-section>
                    <div class="ibf-h9 text-weight-medium">
                      HR's information
                    </div>

                    <q-separator spaced />

                    <div class="column q-gutter-md">
                      <q-field filled square>
                        <template v-slot:control>
                          <div
                            class="self-center full-width no-outline"
                            tabindex="0"
                          >
                            {{ maskValue(HRInfo.name) }}
                          </div>
                        </template>
                      </q-field>

                      <q-field filled square>
                        <template v-slot:control>
                          <div
                            class="self-center full-width no-outline"
                            tabindex="0"
                          >
                            {{ maskValue(HRInfo.phone) }}
                          </div>
                        </template>
                      </q-field>
                      <q-field filled square>
                        <template v-slot:control>
                          <div
                            class="self-center full-width no-outline"
                            tabindex="0"
                          >
                            {{ maskValue(HRInfo.email) }}
                          </div>
                        </template>
                      </q-field>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="q-gutter-lg">
                <q-card>
                  <q-card-section>
                    <q-item class="q-pa-none">
                      <q-item-section>
                        <div class="ibf-h8 text-weight-bold">Order Summary</div>
                      </q-item-section>
                      <q-item-section side>
                        <div class="row">
                          <q-btn
                            round
                            flat
                            outline
                            color="grey-6"
                            icon="mdi-cart"
                            :to="{ name: 'cart-page' }"
                          />
                        </div>
                      </q-item-section>
                    </q-item>
                    <q-separator spaced />

                    <div
                      class="q-my-sm"
                      v-for="(item, itemIndex) in checkOutItems"
                      :key="item.id"
                    >
                      <q-item class="q-px-none">
                        <q-item-section top avatar>
                          <q-avatar
                            size="50px"
                            color="grey-2"
                            text-color="grey-6"
                            icon="mdi-file-document-outline"
                          />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label
                            class="ibf-h10 text-grey-9 text-weight-medium"
                          >
                            {{ item.product.title }}
                          </q-item-label>
                          <q-item-label
                            caption
                            lines="2"
                            v-if="selectedPaymentTypeOption === 2"
                          >
                            {{ item.product.description }}
                          </q-item-label>

                          <q-item-label caption v-else>
                            <div class="row q-gutter-md">
                              <div
                                v-for="(priceOption, priceOptinIndex) in item
                                  .product.price_options"
                                :key="priceOptinIndex"
                              >
                                {{ `${priceOption.title}:` }}
                                <price-original
                                  :price="priceOption.price"
                                  :currency="priceOption.currency"
                                  color="secondary"
                                  textSize="ibf-h12"
                                />
                              </div>
                            </div>
                          </q-item-label>
                        </q-item-section>

                        <q-item-section side top v-if="item.product.is_free">
                          <q-item-label class="text-teal"> Free </q-item-label>
                        </q-item-section>

                        <q-item-section side top v-else>
                          <div v-if="item.product.isDiscount">
                            <q-item-label caption>
                              <price-original
                                :currency="item.product.currency"
                                :price="item.product.after_discount"
                                :isDecimals="false"
                              ></price-original>
                            </q-item-label>

                            <q-item-label caption>
                              <price-discount
                                :currency="item.product.currency"
                                :price="item.product.price"
                                :isDecimals="false"
                              />
                            </q-item-label>
                          </div>

                          <div v-else>
                            <q-item-label caption>
                              <price-original
                                :currency="item.product.currency"
                                :price="item.product.price"
                                :isDecimals="false"
                              ></price-original>
                            </q-item-label>
                          </div>
                        </q-item-section>
                      </q-item>

                      <!--<hr style="border: 1px dashed black" />-->

                      <q-separator
                        v-show="itemIndex < checkOutItems.length - 1"
                        spaced
                        inset
                        color="grey-3"
                      />
                    </div>
                  </q-card-section>

                  <q-separator inset spaced />

                  <q-card-section>
                    <q-item class="q-pa-xs">
                      <q-item-section>
                        <q-item-label
                          class="ibf-h10 text-weight-regular text-grey-6"
                        >
                          Sub-total
                        </q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <q-item-label class="text-weight-medium">
                          <price-original
                            currency="USD"
                            :price="subTotalCost"
                            textSize="ibf-h10"
                            color="black"
                          />
                        </q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-item class="q-pa-xs" v-if="VAT > 0">
                      <q-item-section>
                        <q-item-label
                          class="ibf-h10 text-weight-regular text-grey-6"
                        >
                          Incl. VAT
                        </q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <q-item-label class="ibf-h10 text-weight-medium">
                          <price-original
                            currency="USD"
                            :price="VAT"
                            textSize="ibf-h10"
                            color="black"
                          />
                        </q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-separator color="grey-4" class="q-mt-sm" />
                    <q-separator color="grey-4" class="q-my-xs" />

                    <q-item class="q-pa-xs">
                      <q-item-section>
                        <q-item-label
                          class="ibf-h9 text-weight-regular text-grey-9"
                          >Grand total</q-item-label
                        >
                      </q-item-section>
                      <q-item-section side>
                        <q-item-label class="text-weight-medium">
                          <price-original
                            currency="USD"
                            :price="grandTotal"
                            textSize="ibf-h9"
                            color="text-grey-9"
                          />
                        </q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-card-section>

                  <q-card-section class="column q-gutter-y-md">
                    <q-item class="q-px-none">
                      <q-item-section side>
                        <q-checkbox
                          v-model="isAgreed"
                          color="secondary"
                          :true-value="true"
                          :false-value="false"
                        />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>
                          I agree to the IBF's policy and terms&conditions
                        </q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-btn
                      :disable="!isAgreed"
                      style="width: 100%; height: 70px"
                      square
                      unelevated
                      color="red-7"
                      @click="orderCheckout"
                      label="Checkout Now"
                    />
                  </q-card-section>

                  <div v-if="selectedPaymentTypeOption !== 2">
                    <q-separator spaced />

                    <q-card-section>
                      <q-item>
                        <q-item-section side top>
                          <q-icon name="check" color="teal" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-section class="ibf-h11 text-grey-9">
                            Please check out.
                          </q-item-section>
                          <q-item-label caption>
                            The total cost will be adjusted. We will contact
                            your HR to clarify the information and clear the
                            payment.
                          </q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item>
                        <q-item-section side top>
                          <q-icon name="info" color="amber" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label caption
                            >NDF: Non-development fund</q-item-label
                          >
                          <q-item-label caption
                            >DF: Development fund</q-item-label
                          >
                          <q-item-label caption>SH: Shareholder</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-card-section>
                  </div>

                  <q-card-section>
                    <preview-json :list="checkOutItems" title="Check out items">
                    </preview-json>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <check-out-transition></check-out-transition>
  </q-page>
</template>

<script setup>
import { CheckoutStatus } from "src/helpers/enums";
import CheckOutTransition from "./components/CheckOutTransition.vue";
import EmptyCheckOut from "./components/EmptyCheckOut.vue";
import CheckOutSkeleton from "src/components/skeletons/CheckOutSkeleton.vue";
import { useCartStore } from "src/stores/cart-store";
import { usePurchaseStore } from "src/stores/purchase-store";
import { computed, onMounted, provide, reactive, ref } from "vue";
import { useRouter } from "vue-router";
const selectedPaymentTypeOption = ref(1);
const purchaseStore = usePurchaseStore();
const checkOutItems = ref(purchaseStore.getCheckOutItems);
const isLoading = ref(true);
const cartStore = useCartStore();
const checkOutProvide = ref({
  dialog: false,
  checkout_status: CheckoutStatus.PENDING,
});

provide("checkout-dialog:data", checkOutProvide);

const startCheckOut = () => {
  checkOutProvide.value = {
    dialog: true,
    checkout_status: CheckoutStatus.PENDING,
  };
};

const HRInfo = reactive({
  name: "Peter",
  phone: "012884325",
  email: "peter@test.comz",
});

const isAgreed = ref(false);

const VAT = ref(0);

const isItemsEmpty = computed(() => checkOutItems.value.length < 1);
const subTotalCost = computed(() => {
  if (checkOutItems.value.length < 1) return 0;
  return checkOutItems.value.reduce((acc, order) => {
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

const grandTotal = computed(() => {
  return subTotalCost.value + VAT.value || 0;
});

const maskValue = (value) => {
  if (!value) return "";
  const length = value.length;
  if (length < 5) return "*".repeat(length); // Hide all characters if length is less than 4
  const visibleChars = length <= 10 ? 2 : 3; // Show at least 2 characters if length <= 10, otherwise 3
  return `${value.substring(0, visibleChars)}${"*".repeat(
    length - visibleChars * 2
  )}${value.substring(length - visibleChars)}`;
};

const paymentTypeOptions = [
  {
    label: "Personal",
    value: 2,
    icon: "",
    description: "You pay by yourself.",
  },
  {
    label: "Bank Cover",
    value: 1,
    icon: "",
    description: "Your bank will cover the fee for you.",
  },

  {
    label: "Training Credit",
    value: 3,
    icon: "",
    description: "Training credit at ABC/CMA",
  },
];

const selectedPaymentMethod = ref(1);

const paymentMethods = ref([
  {
    label: "Scan QR Code",
    value: 1,
    icon: "mdi-qrcode",
  },
  {
    label: "Credit Card",
    value: 2,
    icon: "mdi-credit-card-outline",
  },
  {
    label: "Bank Transfer",
    value: 3,
    icon: "mdi-bank-outline",
  },
]);

const orderCheckout = async () => {
  try {
    startCheckOut();
    const itemsId = checkOutItems.value.map((el) => el.id);
    const placeOrderStatus = await purchaseStore.serverPlaceOrder(itemsId);
    const checkoutStatus = await purchaseStore.serverCheckOut({
      payment_type: selectedPaymentTypeOption.value,
    });

    if (placeOrderStatus === undefined || checkoutStatus === undefined)
      setTimeout(() => {
        checkOutProvide.value.checkout_status = CheckoutStatus.ERROR;
      }, 2000);

    if (!placeOrderStatus.status && !checkoutStatus.status) {
      setTimeout(() => {
        checkOutProvide.value.checkout_status = CheckoutStatus.FAIL;
      }, 2000);
    } else {
      setTimeout(() => {
        checkOutProvide.value.checkout_status = CheckoutStatus.SUCCESS;
      }, 1000);
    }

    cartStore.resetLastCartFetch();
  } catch (error) {
    console.log(error.message);
  }
};

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>

<style lang="scss" scoped>
.prevent-select {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}
</style>
