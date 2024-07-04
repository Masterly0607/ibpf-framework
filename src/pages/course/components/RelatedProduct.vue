<template>
  <div id="related-product">
    <div class="q-py-sm ibf-h8 text-weight-medium">Related Course</div>

    <div>
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        animated
        control-color="teal"
        navigation
        arrows
        height="350px"
        class="bg-grey-5 shadow-2 rounded-borders q-pa-sm q-py-xl"
      >
        <q-carousel-slide
          :name="index + 1"
          v-for="(slide, index) in slides"
          :key="index"
          class="no-wrap"
        >
          <div class="row fit justify-start q-gutter-md q-col-gutter no-wrap">
            <q-img
              v-for="(image, imgIndex) in slide.images"
              :key="imgIndex"
              :src="image.src"
              spinner-color="white"
              style="height: 200px; max-width: 300px"
              img-class="my-custom-image"
              class="rounded-borders col-3 full-height"
            >
              <div class="absolute-bottom text-subtitle1 text-center">
                Caption
              </div>
            </q-img>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <!-- <preview-json :list="searchProductData"></preview-json> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { productAPI } from "src/boot/axios";

const data = ref(null);
const loading = ref(false);
const error = ref(null);
const slide = ref(1);

const fetchData = async () => {
  loading.value = true;
  error.value = null;
  try {
    const response = await productAPI.get("/api/v1/user/product/show/" + 30);
    data.value = response.data;
    console.log(data.value);
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchData);

const slides = [
  {
    images: [
      { src: "https://cdn.quasar.dev/img/parallax2.jpg" },
      { src: "https://cdn.quasar.dev/img/parallax2.jpg" },
      { src: "https://cdn.quasar.dev/img/parallax1.jpg" },
      { src: "https://cdn.quasar.dev/img/parallax1.jpg" },
    ],
  },
  {
    images: [
      { src: "https://cdn.quasar.dev/img/parallax2.jpg" },
      { src: "https://cdn.quasar.dev/img/parallax2.jpg" },
      { src: "https://cdn.quasar.dev/img/parallax1.jpg" },
      { src: "https://cdn.quasar.dev/img/parallax1.jpg" },
    ],
  },
];

// const searchProductData = computed(() => productStore.getProductList);
// const fitModes = ["cover", "cover", "cover", "none"];
</script>

<style lang="sass" scoped>
.my-custom-image
  filter: blur(1px) sepia()
</style>
