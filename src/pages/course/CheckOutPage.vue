<template>
  <q-page class="q-pa-md">
    <div class="ibf-container-1200">
      <q-card square flat>
        <q-card-section>
          <div class="row q-col-gutter-lg">
            <div class="col-12 col-md-6">
              Receipt

              <div class="column q-gutter-sm">
                <q-card
                  class="ibf-card-2"
                  v-for="(item, itemIndex) in checkOutItems"
                  :key="itemIndex"
                >
                  <q-card-section>
                    <div class="ibf-h9 text-we">
                      {{ item.course.title }}
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>

            <div class="col-12 col-md-6">
              Payment Options

              <q-select
                v-model="selectedPaymentOption"
                :options="paymentOptions"
                label="Standard"
                filled
              />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { usePurchaseStore } from "src/stores/purchase-store";
import { ref } from "vue";
const selectedPaymentOption = ref(null);
const purchaseStore = usePurchaseStore();
//const { checkOutItems } = storeToRefs(purchaseStore);

const checkOutItems = purchaseStore.getCheckOutItems;

const paymentOptions = [
  {
    label: "Bank Cover",
    value: 1,
  },

  {
    label: "Training Credit",
    value: 2,
  },
  {
    label: "Personal",
    value: 3,
  },
];
</script>
