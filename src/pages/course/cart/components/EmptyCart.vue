<template>
  <q-card square flat>
    <q-card-section>
      <div class="ibf-h5 text-grey-5 text-weight-medium text-center">
        Your cart is empty!
      </div>

      <div class="q-my-md column q-gutter-md">
        <q-input
          v-model="keyword"
          type="text"
          filled
          label="Search for a course"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from "vue";

const keyword = ref("");
</script>
