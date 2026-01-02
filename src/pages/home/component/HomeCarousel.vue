<template>
  <section class="ibf-container-1200">
    <q-carousel
      v-model="slide"
      transition-prev="jump-right"
      transition-next="jump-left"
      swipeable
      animated
      control-color="primary"
      :height="autoHeightCarousel"
      padding
      class="bg-grey-2"
    >
      <q-carousel-slide
        v-for="(dataUrl, index) in imageUrl"
        :key="index"
        :name="index + 1"
        class="q-pa-none"
      >
        <q-img
          :src="dataUrl.img"
          height="100%"
          width="100%"
          fit="fill"
          spinner-color="primary"
          spinner-size="82px"
        />

        <div class="absolute-bottom custom-caption q-pa-md">
          <div class="row justify-between items-center">
            <div class="col">
              <div class="ibf-h11 text-weight-medium">{{ dataUrl.title }}</div>
              <div class="text-caption ellipsis">
                {{ dataUrl.caption }}
              </div>
            </div>

            <div class="col-auto">
              <q-btn
                flat
                rounded
                color="grey-10"
                icon-right="mdi-arrow-right-thin"
                @click="nextSlide"
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
        :val="index + 1"
        v-for="(dataUrl, index) in imageUrl"
        :key="index"
      />
    </div>
    <!-- <div class="row justify-center items-center q-py-sm">
      <q-radio
        size="35px"
        v-model="slide"
        :val="slideItem"
        v-for="slideItem in 10"
        :key="slideItem"
      />
    </div> -->
  </section>
</template>

<script setup>
import { useQuasar } from "quasar";
import { computed, ref } from "vue";

const slide = ref(1);
const $q = useQuasar();

const autoHeightCarousel = computed(() => {
  if ($q.screen.gt.sm) {
    return "430px";
  } else {
    return "215px";
  }
});

const imageUrl = ref([
  {
    img: "images/home_introduction.jpg",
    title: "The Institute of Banking and Finance",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    img: "images/ibf-book-list.png",
    title: "Our courses list",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    img: "images/international-partner.png",
    title: "International Partners",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    img: "images/home_webinar_event.jpg",
    title: "Webinar Event",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
]);

const nextSlide = () => {
  slide.value = slide.value < imageUrl.value.length ? slide.value + 1 : 1;
};
</script>

<style scope>
.custom-caption {
  background: rgba(201, 201, 201, 0.556);
}
</style>
