<template>
  <q-page class="q-pa-md">
    <div class="ibf-container-1200">
      <q-card square flat>
        <q-card-section>
          <q-heading-1
            title="Check Out"
            icon="mdi-account-credit-card-outline"
            subtitle="Check your purchase items carefully before checking out"
            iconSize="50px"
          />
        </q-card-section>
        <q-separator spaced />
        <q-card-section>
          <div class="row q-col-gutter-xl">
            <div class="col-12 col-md-6">
              <div class="q-gutter-lg">
                <!--<q-card
                class="ibf-card-2"
                v-for="(item, itemIndex) in checkOutItems"
                :key="itemIndex"
              >
                <q-card-section>
                  <div class="ibf-h9 text-we">
                    {{ item.product.title }}
                  </div>
                </q-card-section>
              </q-card>-->

                <q-card>
                  <q-card-section>
                    <div class="ibf-h8 text-weight-bold">Order Summary</div>
                    <q-separator spaced />

                    <div
                      class="q-my-sm"
                      v-for="(item, itemIndex) in checkOutItems"
                      :key="item.id"
                    >
                      <q-item>
                        <q-item-section top avatar>
                          <q-avatar
                            color="grey-2"
                            text-color="grey-6"
                            icon="mdi-file-document-outline"
                          />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>
                            {{ item.product.title }}
                          </q-item-label>
                          <q-item-label
                            caption
                            lines="1"
                            v-if="selectedPaymentOption === 3"
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
                                {{
                                  `${priceOption.title}: ${priceOption.currency} ${priceOption.price}`
                                }}
                              </div>
                            </div>
                          </q-item-label>
                        </q-item-section>

                        <q-item-section side v-if="item.product.isDiscount">
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
                        </q-item-section>

                        <q-item-section side v-else>
                          <q-item-label caption>
                            <price-original
                              :currency="item.product.currency"
                              :price="item.product.price"
                              :isDecimals="false"
                            ></price-original>
                          </q-item-label>
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
                        <q-item-label class="ibf-h10 text-weight-medium">
                          USD 1,000
                        </q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-item class="q-pa-xs">
                      <q-item-section>
                        <q-item-label
                          class="ibf-h10 text-weight-regular text-grey-6"
                          >Incl. VAT</q-item-label
                        >
                      </q-item-section>
                      <q-item-section side>
                        <q-item-label class="ibf-h10 text-weight-medium">
                          USD 5
                        </q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-separator spaced />

                    <q-item class="q-pa-xs">
                      <q-item-section>
                        <q-item-label
                          class="ibf-h9 text-weight-regular text-grey-9"
                          >Grand total</q-item-label
                        >
                      </q-item-section>
                      <q-item-section side>
                        <q-item-label
                          class="ibf-h9 text-weight-medium text-grey-9"
                        >
                          USD 1,005
                        </q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-card-section>

                  <q-card-actions align="right">
                    <q-btn
                      no-caps
                      unelevated
                      outline
                      color="red-7"
                      label="Return to cart"
                    />
                    <q-btn unelevated color="red-7" label="Checkout Now" />
                  </q-card-actions>

                  <!--<q-card-section>
                  <preview-json :list="checkOutItems" title="Check out items">
                  </preview-json>
                </q-card-section>-->
                </q-card>

                <q-card class="my-card">
                  <q-card-section>
                    <div class="ibf-h8 text-weight-medium">Print this page</div>

                    <q-separator spaced />

                    <div>
                      Print this page to share with your company for approval
                      and purchase.
                    </div>
                  </q-card-section>

                  <q-card-actions align="right">
                    <q-btn
                      unelevated
                      outline
                      color="secondary"
                      icon="print"
                      label="Print"
                    />
                  </q-card-actions>
                </q-card>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="column q-gutter-lg">
                <q-card flat bordered square>
                  <q-card-section>
                    <div class="ibf-h9 text-weight-medium">Payment Options</div>

                    <q-separator spaced />
                    <!--<q-option-group
                      v-model="selectedPaymentOption"
                      type="radio"
                      color="red-7"
                      :options="paymentOptions"
                    />-->

                    <q-item
                      class="q-px-none"
                      v-for="(option, optionIndex) in paymentOptions"
                      :key="optionIndex"
                    >
                      <q-item-section side>
                        <q-radio
                          color="red-7"
                          v-model="selectedPaymentOption"
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

                <q-card flat bordered square v-if="selectedPaymentOption === 3">
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
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { usePurchaseStore } from "src/stores/purchase-store";
import { ref } from "vue";
const selectedPaymentOption = ref(1);
const purchaseStore = usePurchaseStore();
const checkOutItems = purchaseStore.getCheckOutItems;

const paymentOptions = [
  {
    label: "Personal",
    value: 3,
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
    value: 2,
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
</script>
