<template>
    <div class="q-py-md">
        <div class="row q-col-gutter-lg">
            <div v-for="(eventType, index) in eventTypeData" :key="index" class="col-12 col-md-4">
                <q-card class="q-pa-md ibf-card-2">
                    <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" :ratio="1" spinner-color="primary"
                        spinner-size="82px" width="100%" />
                    <q-card-section class="q-pa-none q-py-md">
                        <div class="text-h6">{{ eventType.title }}</div>
                        <div class="text-subtitle2">by {{ eventType.subtitle }}</div>
                    </q-card-section>
                    <q-card-section class="q-pa-none ">
                        {{ eventType.description }}
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const eventTypeData = ref([
    // {
    //     id: 1,
    //     title: "Authentic Leadership Authentic Leadership ",
    //     subtitle: "Authentic Leadership",
    //     isActive: true,
    //     router: "cart1",
    // },
    {
        id: 1,
        title: "Webinar Event",
        subtitle: "Doe",
        description: "At Techno university"
    },
    {
        id: 2,
        title: "Graduate Event",
        subtitle: "Doe",
        description: "At Techno university"
    },
    {
        id: 3,
        title: "Course Briefs Event",
        subtitle: "Starts 12th June 2021",
        description: "At Techno university"
    },
    // {
    //   id: 4,
    //   title: "Authentic Leadership",
    //   subtitle: "by John Doe",
    // },
]);
</script>