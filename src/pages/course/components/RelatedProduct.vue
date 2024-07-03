<template>
  <div id="related-product">
    <div class="q-py-sm ibf-h8 text-weight-medium">Related Course</div>

    <q-carousel
      v-model="slide"
      animated
      control-color="teal"
      navigation
      arrows
      infinite
      height="310px"
      width="80%"
      class="q-py-lg"
    >
      <q-carousel-slide :name="1">
        <div class="row fit justify-start items-center q-gutter-md no-wrap">
          <q-img
            class="rounded-borders col-4 full-height"
            src="https://cdn.quasar.dev/img/cat.jpg"
          />
          <q-img
            class="rounded-borders col-4 full-height"
            src="https://cdn.quasar.dev/img/cat.jpg"
          />
          <q-img
            class="rounded-borders col-3 full-height"
            src="https://cdn.quasar.dev/img/linux-avatar.png"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2">
        <div class="row fit justify-start items-center q-gutter-md no-wrap">
          <q-img
            class="rounded-borders col-4 full-height"
            src="https://cdn.quasar.dev/img/material.png"
          />
          <q-img
            class="rounded-borders col-4 full-height"
            src="https://cdn.quasar.dev/img/material.png"
          />
          <q-img
            class="rounded-borders col-4 full-height"
            src="https://cdn.quasar.dev/img/donuts.png"
          />
        </div>
      </q-carousel-slide>
    </q-carousel>
    <!-- <div class="q-gutter-md row items-start">
      <q-img
        v-for="mode in fitModes"
        :key="mode"
        src="https://picsum.photos/500/300"
        style="max-width: 280px; height: 150px"
        :fit="mode"
      >
        <div class="absolute-bottom text-subtitle1 text-center">
          {{ mode }}
        </div>
      </q-img>
    </div> -->
  </div>
</template>

<script setup>
import { ref } from "vue";

const slide = ref(1);
const fitModes = ["cover", "cover", "cover", "none"];
</script>
