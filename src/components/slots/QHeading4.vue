<template>
  <q-item class="q-px-xs">
    <q-item-section side v-if="$slots.icon">
      <slot name="icon"> </slot>
    </q-item-section>
    <q-item-section>
      <q-item-label>
        <div class="ibf-h8 text-grey-9 text-weight-medium">
          <slot name="title"> Default Heading 4 </slot>
        </div>
      </q-item-label>
      <q-item-label caption lines="2" v-if="$slots.subtitle">
        <slot name="subtitle"> </slot>
      </q-item-label>
    </q-item-section>
  </q-item>
</template>
