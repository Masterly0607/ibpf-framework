<template>
  <section id="course-list">
    <q-card flat square bordered>
      <q-card-section class="q-pa-md">
        <div class="ibf-h10 text-grey-9 text-weight-medium">Popular Course</div>
      </q-card-section>

      <q-separator />

      <!-- <q-card-actions horizontal align="left"> -->
      <q-list>
        <q-item clickable v-ripple>
          <q-item-section>Individual</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section>Business</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section>People</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section>Future</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section>Leadership</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section>Critical Soft Skill</q-item-section>
        </q-item>
      </q-list>
      <!-- <q-btn flat>Individual</q-btn>
          <q-btn flat>Business</q-btn>
          <q-btn flat>People</q-btn>
          <q-btn flat>Future</q-btn>
          <q-btn flat>Leadership</q-btn>
          <q-btn flat>Critical Soft Skill</q-btn> -->
      <!-- </q-card-actions> -->

      <!-- <q-separator />
      <div class="q-pa-sm text-primary" bordered align="right">
        <q-btn flat no-caps label="Start Learning" @click="startLearning" />
      </div> -->
    </q-card>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const startLearning = () => {
  router.push({ name: "product-list-page" });
};
</script>
