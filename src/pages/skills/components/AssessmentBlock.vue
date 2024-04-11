<template>
  <section id="assessment-block">
    <div class="row">
      <div class="col-12 col-md-6 q-pa-sm">
        <q-card square flat>
          <img src="https://cdn.quasar.dev/img/mountains.jpg" />
        </q-card>
      </div>

      <div class="col-12 col-md-6 q-pa-sm">
        <q-card flat>
          <q-card-section align="center">
            <q-circular-progress
              show-value
              font-size="3rem"
              :value="finishPercentage"
              size="15rem"
              :thickness="0.22"
              color="teal"
              track-color="grey-3"
              class="q-ma-md"
            >
              {{ finishPercentage }}%
            </q-circular-progress>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="row q-my-md">
      <div class="col-6">IBF</div>

      <div class="col-6">Questions</div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const finishPercentage = ref(10);
</script>
