<template>
  <section class="ibf-container-1200">
    <q-carousel
      v-model="slide"
      transition-prev="jump-right"
      transition-next="jump-left"
      swipeable
      animated
      control-color="primary"
      padding
      height="500"
      class="bg-grey-2"
    >
      <q-carousel-slide
        v-for="item in 10"
        :key="item"
        :name="item"
        class="q-pa-none"
      >
        <q-img
          src="https://cdn.quasar.dev/img/mountains.jpg"
          height="100%"
          width="100%"
          fit="fill"
          spinner-color="primary"
          spinner-size="82px"
        />
        <div class="absolute-bottom custom-caption q-pa-md">
          <div class="flex justify-between items-center">
            <div>
              <div class="ibf-h9 text-weight-medium">Title</div>
              <div class="text-caption">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
            </div>

            <div>
              <q-btn
                flat
                rounded
                color="grey-10"
                icon-right="mdi-arrow-right-thin"
                no-caps
                label="More info"
              />
            </div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <div class="row justify-center items-center q-py-sm">
      <q-radio
        size="35px"
        v-model="slide"
        :val="slideItem"
        v-for="slideItem in 10"
        :key="slideItem"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const slide = ref(1);
</script>

<style scope>
.custom-caption {
  background: rgba(201, 201, 201, 0.556);
}
</style>
