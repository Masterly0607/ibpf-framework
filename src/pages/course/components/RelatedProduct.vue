<template>
  <div id="related-product">
    <div class="q-py-sm ibf-h8 text-weight-medium">Related Course</div>

    <!-- <q-carousel
      v-model="slide"
      animated
      control-color="teal"
      navigation
      arrows
      infinite
      height="300px"
      width="80%"
      class="q-py-lg"
      v-for="(product, index) in data"
      :key="index"
    >
      <q-carousel-slide :name="1">
        <div class="row fit justify-start q-gutter-sm no-wrap">
          <q-img
            class="rounded-borders col-4 full-height"
            :src="product.thumbnail"
          />
        </div>
      </q-carousel-slide>
    </q-carousel> -->

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

// const searchProductData = computed(() => productStore.getProductList);
// const fitModes = ["cover", "cover", "cover", "none"];
</script>
