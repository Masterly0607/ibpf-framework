<template>
  <section>
    <div class="justify-between">
      <q-heading-4>
        <template #icon>
          <q-icon color="primary" name="mdi-calendar-multiple" />
        </template>
        <template #title> Event Type </template>
      </q-heading-4>
    </div>

    <q-separator />

    <div class="row q-col-gutter-lg q-py-lg">
      <div
        v-for="(eventType, index) in eventTypeData"
        :key="index"
        class="col-12 col-md-4"
      >
        <q-card class="q-pa-md ibf-card-2">
          <q-img fit="cover" :src="eventType.url" width="100%" height="350px" />

          <q-card-section class="q-pa-none q-py-md">
            <div class="ibf-h8 text-weight-medium">{{ eventType.title }}</div>
            <div class="q-mt-sm row q-gutter-x-sm items-center">
              <q-icon color="primary" size="20px" name="mdi-calendar" />
              <div class="text-grey-8 ibf-h12 text-weight-medium">
                {{ eventType.subtitle }}
              </div>
            </div>
            <div class="q-mt-sm row q-gutter-x-sm items-center">
              <q-icon
                color="primary"
                size="20px"
                name="mdi-map-marker-outline"
              />
              <div class="text-grey-8 ibf-h12 text-weight-medium">
                {{ eventType.description }}
              </div>
            </div>
            <!-- <div class="text-subtitle2 text-primary ibf-h12">
                            <q-icon name="time" />
                            {{ eventType.subtitle }}
                        </div> -->
          </q-card-section>
          <q-card-actions class="q-pa-none justify-start">
            <div align="center">
              <a href="#" class="text-weight-medium ibf-h11 text-grey-7">
                Learn More
                <q-icon name="arrow_forward" />
              </a>
            </div>
          </q-card-actions>
          <!-- <q-btn flat color="primary" label="Learn More" @click="onClick" no-caps>
                        <q-icon name="mdi-arrow-right " align="right" />
                    </q-btn> -->
        </q-card>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const eventTypeData = ref([
  {
    id: 1,
    title: "Webinar Event",
    subtitle: "19-July-2024",
    description: "At Techno university",
    url: "images/event_webinar_2.png",
  },
  {
    id: 2,
    title: "Graduate Event",
    subtitle: "23th-July-2024",
    description: "At Techno university",
    url: "images/international-partner.png",
  },
  {
    id: 3,
    title: "Course Briefs Event",
    subtitle: "12th June 2021",
    description: "At Techno university",
    url: "images/learning_pharagrah.png",
  },
  // {
  //   id: 4,
  //   title: "Authentic Leadership",
  //   subtitle: "by John Doe",
  //   description: "At Techno university",
  //   url: "images/learning_pharagrah.png"
  // },
]);
</script>
