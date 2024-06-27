<template>
  <section id="price-option">
    <q-card class="ibf-card-2">
      <q-card-section class="row items-center justify-between">
        <div class="ibf-h9 text-weight-medium text-grey-7">Original Price</div>
        <price-original textSize="ibf-h5" :price="price"></price-original>
      </q-card-section>

      <q-separator inset color="red" />
      <q-card-section>
        <!-- price option -->
        <div class="ibf-h9 text-weight-medium text-grey-7 q-my-sm">
          Price Options
        </div>

        <div v-for="(item, index) in payload" :key="index">
          <q-item class="q-px-none">
            <q-item-section side top>
              <q-icon size="md" color="primary" name="mdi-library" />
            </q-item-section>
            <q-item-section>
              <q-item-label>
                <price-original :price="item.price" />
              </q-item-label>

              <q-item-label caption lines="2">
                {{ item.title }} Member
              </q-item-label>
              <q-separator spaced v-if="index < payload.length - 1" />
            </q-item-section>
          </q-item>
        </div>
      </q-card-section>

      <q-space />

      <q-card-section>
        <div class="row">
          <div class="col">
            <q-btn
              no-caps
              square
              size="lg"
              icon="mdi-cart-variant"
              style="width: 98%"
              color="primary"
              label="Add to cart"
            />
          </div>

          <div class="col-2 flex flex-center">
            <q-btn flat round aria-label="Favorite" icon="favorite" />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </section>
</template>

<script setup>
const props = defineProps({
  payload: {
    type: [Array, null],
  },

  price: {
    type: Number,
    default: 0,
  },
});
</script>
