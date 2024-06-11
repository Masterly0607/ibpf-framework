<template>
  <q-dialog v-model="isCheckoutDialog" persistent>
    <q-card flat class="bg-transparent">
      <q-card-section class="flex flex-center">
        <q-spinner-gears color="white" size="10rem" :thickness="2" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { inject } from "vue";
const isCheckoutDialog = inject("checkout-dialog:start");
</script>
