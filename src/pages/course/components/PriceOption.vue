<template>
  <section id="price-option">
    <q-card>
      <q-card-section>
        <!-- price option -->
        <div class="ibf-h8 text-weight-medium">Price Option</div>
        <q-item
          class="q-pa-none"
          v-for="(coreType, index) in dataPrice"
          :key="index"
        >
          <q-item-section side>
            <q-icon size="sm" color="primary" name="mdi-library" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ coreType.title }}</q-item-label>
            <q-item-label lines="2">
              {{ coreType.subtitle }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <!-- original price -->
        <q-item class="q-pa-none">
          <q-item-section side>
            <q-icon size="sm" color="primary" name="mdi-library" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="ibf-h9 text-weight-medium"
              >USD 150</q-item-label
            >
          </q-item-section>
        </q-item>
      </q-card-section>

      <q-card-actions class="q-py-none">
        <q-btn style="width: 85%" color="primary" label="Add to cart" />
        <q-btn aria-label="Favorite" icon="favorite" />
      </q-card-actions>
      <br />
    </q-card>
  </section>
</template>

<script setup>
import { ref } from "vue";

const dataPrice = ref([
  {
    id: 1,
    title: "NDF",
  },
  {
    id: 2,
    title: "DF",
  },
  {
    id: 3,
    title: "SH",
  },
]);
</script>
