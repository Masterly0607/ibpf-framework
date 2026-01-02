<template>
  <div class="q-pa-md">
    <q-footer bordered class="bg-grey-3 text-primary">
      <q-tabs
        no-caps
        active-color="primary"
        indicator-color="transparent"
        class="text-grey-8"
        v-model="tab"
      >
        <q-tab name="images" label="Images" />
        <q-tab name="videos" label="Videos" />
        <q-tab name="articles" label="Articles" />
      </q-tabs>
    </q-footer>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tab = ref("images");
</script>
