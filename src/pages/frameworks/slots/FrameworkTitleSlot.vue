<template>
  <q-item-section class="q-my-md">
    <q-item-label class="ibf-h5 text-weight-medium">
      <slot name="title"></slot>
    </q-item-label>
    <div class="ibf-h12 text-grey-6">
      <slot name="details"></slot>
    </div>
  </q-item-section>
</template>
