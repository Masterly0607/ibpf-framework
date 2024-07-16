<template>
  <q-card square class="ibf-card-3">
    <q-card-section :horizontal="$q.screen.gt.sm">
      <q-card-section class="col-12 col-md-2 flex flex-center">
        <slot name="image_url">
          <q-img
            class="rounded-borders"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
        </slot>
      </q-card-section>
      <q-card-section class="col-auto col-md-7">
        <div class="full-height column">
          <div id="title">
            <div class="ibf-h10 q-mt-sm q-mb-xs">
              <slot name="title" v-if="$slots.title">
                Default course title
              </slot>
            </div>
            <div class="text-caption text-grey">
              <slot name="subtitle" v-if="$slots.subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </slot>
            </div>
          </div>

          <q-space />

          <div>
            <slot name="progress" v-if="$slots.progress"> -- -- </slot>
          </div>
        </div>
      </q-card-section>
    </q-card-section>

    <q-separator />

    <q-card-actions align="right" class="q-gutter-x-lg">
      <slot name="payment_status" v-if="$slots.payment_status">
        Payment status
      </slot>

      <slot name="continue_btn" v-if="$slots.continue_btn"></slot>
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { useQuasar } from "quasar";

const $q = useQuasar();
</script>
