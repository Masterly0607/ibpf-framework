<template>
  <q-dialog
    v-model="checkoutData.dialog"
    persistent
    backdrop-filter="blur(2px)"
  >
    <q-card flat class="bg-transparent">
      <q-card-section>
        <div
          v-if="checkoutData.checkout_status === CheckoutStatus.PENDING"
          class="flex flex-center"
        >
          <q-spinner-gears color="white" size="10rem" :thickness="2" />
        </div>
        <!-- error area -->
        <transition
          appear
          enter-active-class="animated wobble "
          v-if="checkoutData.checkout_status === CheckoutStatus.ERROR"
        >
          <div
            class="column justify-center items-center q-gutter-lg"
            style="overflow: hidden"
            v-if="checkoutData.checkout_status === CheckoutStatus.ERROR"
          >
            <q-icon size="150px" color="red-6" name="mdi-close-octagon" />

            <div class="ibf-h6 text-weight-medium text-white">
              Opp! Error checkout!
            </div>

            <q-btn
              unelevated
              color="primary"
              icon="mdi-cart-variant"
              :to="{ name: 'cart-page' }"
              label="Return"
            />
          </div>
        </transition>

        <!-- fail area -->

        <transition
          appear
          enter-active-class="animated wobble"
          v-else-if="checkoutData.checkout_status === CheckoutStatus.FAIL"
        >
          <div
            v-if="checkoutData.checkout_status === CheckoutStatus.FAIL"
            class="column justify-center items-center q-gutter-lg"
            style="overflow: hidden"
          >
            <q-icon size="150px" color="red-6" name="mdi-close-octagon" />

            <div class="ibf-h6 text-weight-medium text-white">
              Opp! Failed checkout!
            </div>

            <q-btn
              unelevated
              color="primary"
              icon="mdi-cart-variant"
              :to="{ name: 'cart-page' }"
              label="Return"
            />
          </div>
        </transition>

        <transition appear enter-active-class="animated ZoomIn" v-else>
          <div
            class="column justify-center items-center q-gutter-lg"
            style="overflow: hidden"
            v-if="checkoutData.checkout_status === CheckoutStatus.SUCCESS"
          >
            <q-icon size="150px" color="teal-6" name="mdi-check-bold" />

            <div class="ibf-h6 text-weight-medium text-white">
              Checkout Successful
            </div>

            <q-btn
              unelevated
              color="primary"
              icon="mdi-cart-variant"
              :to="{ name: 'cart-page' }"
              label="Return"
            />
          </div>
        </transition>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { CheckoutStatus } from "src/helpers/enums";
import { inject } from "vue";
const checkoutData = inject("checkout-dialog:data", {
  dialog: false,
  checkout_status: CheckoutStatus.PENDING,
});
</script>
