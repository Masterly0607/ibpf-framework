<template>
  <section>
    <div class="q-py-md">
      <div
        :class="[
          'row',
          'q-mb-sm',
          $q.screen.gt.sm ? 'q-gutter-xs' : 'q-gutter-lg',
        ]"
      >
        <span class="col-2 text-grey-6 ibf-h11 q-px-sm">Gender</span>
        <span class="col text-grey-8 text-weight-medium ibf-h11">{{
          user.gender
        }}</span>
      </div>
      <div
        :class="[
          'row',
          'q-mb-sm',
          $q.screen.gt.sm ? 'q-gutter-xs' : 'q-gutter-lg',
        ]"
      >
        <span class="col-2 text-grey-6 ibf-h11 q-px-sm">DOB</span>
        <span class="col text-grey-8 text-weight-medium ibf-h11">{{
          user.dob
        }}</span>
      </div>
      <div
        :class="[
          'row',
          'q-mb-sm',
          $q.screen.gt.sm ? 'q-gutter-xs' : 'q-gutter-lg',
        ]"
      >
        <span class="col-2 text-grey-6 ibf-h11 q-px-sm">Email</span>
        <span class="col text-grey-8 text-weight-medium ibf-h11">{{
          user.email
        }}</span>
      </div>
      <div
        :class="[
          'row',
          'q-mb-sm',
          $q.screen.gt.sm ? 'q-gutter-xs' : 'q-gutter-lg',
        ]"
      >
        <span class="col-2 text-grey-6 ibf-h11 q-px-sm">Tel</span>
        <span class="col text-grey-8 text-weight-medium ibf-h11">{{
          user.phone_number
        }}</span>
      </div>

      <div :class="['row', $q.screen.gt.sm ? 'q-gutter-xs' : 'q-gutter-lg']">
        <span class="col-2 text-grey-6 ibf-h11 q-px-sm">Address</span>
        <span class="col text-grey-8 text-weight-medium ibf-h11">N/A</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useUserStore } from "src/stores/user-store";
import { useQuasar } from "quasar";
const $q = useQuasar();

const userStore = useUserStore();
const user = userStore.getUser;
</script>
