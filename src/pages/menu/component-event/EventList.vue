<template>
    <div>
        <div class="q-py-md text-weight-bold ibf-h6">Events & Updates</div>
        <!-- tab Event -->
        <q-tabs v-model="tab" class="text-primary" align="left">
            <q-tab label="All" name="TabOne" no-caps />
            <q-tab label="New Events" name="TabTwo" no-caps />
            <!-- <q-tab label="Upcomming" name="TabThree" no-caps /> -->
        </q-tabs>
        <q-separator />
        <q-tab-panels animated v-model="tab" class="card-background-1">
            <!-- tab one -->
            <q-tab-panel name="TabOne" class="q-pa-none q-py-lg">
                <div class=" q-gutter-y-lg">
                    <q-card class="ibf-card-3" v-for="(itemEvent, index) in eventData" :key="index">
                        <!-- <img :src="data.thumbnail" height="200px" /> -->
                        <q-card-section>
                            <div class="row q-col-gutter-md">
                                <div class="col-12 col-md-3">
                                    <img src="https://cdn.quasar.dev/img/parallax2.jpg" :ratio="1" width="100%"
                                        height="165px" />
                                </div>
                                <div class="col-12 col-md-9">
                                    <div class="ibf-h8 ellipsis-2-lines text-weight-medium">
                                        {{ itemEvent.title }}
                                    </div>
                                    <div class="text-grey-8 text-weight-light multi-line-ellipsis">
                                        {{ itemEvent.subtitle }}
                                    </div>

                                    <div class="text-grey-8 text-weight-light multi-line-ellipsis">
                                        Join with us at paragon
                                    </div>
                                    <div class="ibf-h11 text-grey-6 q-pt-xl">
                                        Date:
                                        <span class="ibf-h11 text-negative text-bold">03-05-2024
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </q-card-section>

                        <q-separator />
                        <q-card-actions align="right">
                            <q-btn flat no-caps label="View Details" />
                        </q-card-actions>
                    </q-card>
                </div>
            </q-tab-panel>

            <!-- tab two -->
            <q-tab-panel name="TabTwo" class="q-pa-none q-py-lg">
                <div class=" q-gutter-y-lg">
                    <q-card class="ibf-card-3" v-for="(itemEvent, index) in eventData" :key="index">
                        <q-card-section>
                            <div class="row q-col-gutter-md">
                                <div class="col-12 col-md-3">
                                    <img src="https://cdn.quasar.dev/img/parallax2.jpg" :ratio="1" width="100%"
                                        height="165px" />
                                </div>
                                <div class="col-12 col-md-9">
                                    <div class="ibf-h8 ellipsis-2-lines text-weight-medium">
                                        {{ itemEvent.title }}
                                    </div>
                                    <div class="text-grey-8 text-weight-light multi-line-ellipsis">
                                        {{ itemEvent.subtitle }}
                                    </div>

                                    <div class="text-grey-8 text-weight-light multi-line-ellipsis">
                                        Join with us at paragon
                                    </div>
                                    <div class="ibf-h11 text-grey-6 q-pt-xl">
                                        Date:
                                        <span class="ibf-h11 text-negative text-bold">03-05-2024
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </q-card-section>

                        <q-separator />
                        <q-card-actions align="right">
                            <q-btn flat no-caps label="View Details" />
                        </q-card-actions>
                    </q-card>
                </div>
            </q-tab-panel>

            <!-- tab three -->
            <!-- <q-tab-panel name="TabThree">
                <div class="row">Welcome to tab two</div>
            </q-tab-panel> -->

        </q-tab-panels>
    </div>
</template>

<script setup>
import { ref } from "vue";

const tab = ref("TabOne");
const eventData = ref([
    {
        id: 1,
        title: "Authentic Leadership Authentic Leadership ",
        subtitle: "Authentic Leadership",
        isActive: true,
        router: "cart1",
    },
    {
        id: 2,
        title: "Audit and Assurance",
        subtitle: "Doe",
    },
    {
        id: 3,
        title: "Our Changing Planet",
        subtitle: "Starts 12th June 2021",
    },
    // {
    //   id: 4,
    //   title: "Authentic Leadership",
    //   subtitle: "by John Doe",
    // },
]);
</script>

<style lang="scss" scoped>
.card-background-1 {
    background-color: #f2f2f2;
}
</style>