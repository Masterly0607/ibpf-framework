<template>
  <transition name="q-transition--scale">
    <div id="related-product" class="q-mt-md" v-if="!isLoading">
      <div class="ibf-h7 text-weight-medium">You may also like</div>

      <q-separator spaced />

      <div class="q-mt-md">
        <q-carousel
          ref="carousel"
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          animated
          arrows
          swipeable
          navigation
          padding
          control-type="outline"
          infinite
          control-color="primary"
          height="auto"
          class="bg-grey-1"
        >
          <q-carousel-slide
            v-for="(chunk, index) in chunkedProducts"
            :name="index + 1"
            :key="index"
            class="no-wrap"
          >
            <div class="row fit justify-around q-gutter-md no-wrap q-mb-md">
              <q-card
                v-for="product in chunk"
                :key="product.id"
                style="width: 320px; height: 400px"
                square
                class="ibf-card-2"
              >
                <q-card-section class="q-pa-none">
                  <q-img
                    :ratio="1"
                    :src="product.thumbnail"
                    :alt="product.title"
                  />
                </q-card-section>
                <q-card-section>
                  <div class="ibf-h10 text-weight-medium ellipsis-2-lines">
                    {{ product.title }}
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </q-carousel-slide>

          <template v-slot:navigation-icon="{ active, btnProps, onClick }">
            <q-btn
              v-if="active"
              size="12px"
              :icon="btnProps.icon"
              color="primary"
              flat
              round
              dense
              @click="onClick"
            />
            <q-btn
              v-else
              size="12px"
              icon="radio_button_unchecked"
              color="grey"
              flat
              round
              dense
              @click="onClick"
            />
          </template>
        </q-carousel>
      </div>

      <!-- <preview-json :list="searchProductData"></preview-json> -->
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { productAPI } from "src/boot/axios";
import { useQuasar } from "quasar";
const $q = useQuasar();

const props = defineProps({
  productId: {
    type: [Number, String],
    default: null,
  },
});
const relatedProducts = ref([]);
const isLoading = ref(true);
const slide = ref(1);
const carousel = ref(null);

const fetchData = async () => {
  if (props.productId === null) return;

  try {
    const response = await productAPI.get(
      "/api/v1/user/product/show/" + props.productId
    );
    if (!response.data.status) return;
    relatedProducts.value = response.data.data.related_products;

    if (relatedProducts.value.length < 1) return;
    isLoading.value = false;
  } catch (err) {
    console.log(err.message());
  }
};

const chunkedProducts = computed(() => {
  const chunkSize = $q.screen.gt.md ? 4 : $q.screen.gt.sm ? 3 : 1; // Number of cards to show per slide
  const chunks = [];
  for (let i = 0; i < relatedProducts.value.length; i += chunkSize) {
    chunks.push(relatedProducts.value.slice(i, i + chunkSize));
  }
  return chunks;
});

onMounted(fetchData);
</script>
