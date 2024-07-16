<template>
  <section id="events-card">
    <q-card square bordered flat>
      <!-- View product list -->

      <q-card-section class="q-py-xs">
        <q-heading-4>
          <template #icon>
            <q-icon color="primary" name="mdi-calendar" />
          </template>
          <template #title> Events </template>
        </q-heading-4>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <div class="column q-gutter-y-lg">
          <q-card
            square
            class="ibf-card-3"
            v-for="(itemEvent, index) in eventData"
            :key="index"
          >
            <!-- <img :src="data.thumbnail" height="200px" /> -->
            <q-card-section>
              <div class="row q-col-gutter-md">
                <div class="col-12 col-md-3">
                  <img
                    src="https://cdn.quasar.dev/img/mountains.jpg"
                    width="100%"
                    height="135px"
                  />
                </div>
                <div class="col-12 col-md-9">
                  <div class="ibf-h8 ellipsis-2-lines text-weight-medium">
                    {{ itemEvent.title }}
                  </div>
                  <div
                    class="text-grey-8 text-weight-light multi-line-ellipsis"
                  >
                    {{ itemEvent.subtitle }}
                  </div>

                  <div
                    class="text-grey-8 text-weight-light multi-line-ellipsis"
                  >
                    Join with us at paragon
                  </div>
                  <div class="ibf-h11 text-grey-6 q-pt-xl">
                    Date:
                    <span class="ibf-h11 text-negative text-bold"
                      >03-05-2024
                    </span>
                  </div>
                </div>
              </div>
            </q-card-section>

            <q-separator />
            <q-card-actions class="card-bg" align="right">
              <q-btn flat no-caps label="View Details" />
            </q-card-actions>
          </q-card>
        </div>
      </q-card-section>

      <!-- <q-card-section>
        <q-card flat square bordered>
          <q-card>
            <div class="row">
              <div square class="q-ma-md">
                <img
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                  width="150px"
                  height="120px"
                />
              </div>
              <div>
                <q-card-section>
                  <div class="text-h6">Our Changing Planet</div>
                  <div class="text-subtitle2">by John Doe</div>
                </q-card-section>
              </div>
            </div>
          </q-card>
          <q-separator />
          <div class="q-pa-sm card-bg" bordered align="right">
            <q-btn flat no-caps label="View Details" />
          </div>
        </q-card>
      </q-card-section> -->
    </q-card>
  </section>
</template>

<script setup>
import { ref } from "vue";

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
  // {
  //   id: 3,
  //   title: "Our Changing Planet",
  //   subtitle: "Starts 12th June 2021",
  // },
  // {
  //   id: 4,
  //   title: "Authentic Leadership",
  //   subtitle: "by John Doe",
  // },
]);
</script>
