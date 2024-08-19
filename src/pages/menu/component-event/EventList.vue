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
            <q-card-section>
              <div class="row q-col-gutter-md">
                <div class="col-12 col-md-3">
                  <q-img fit="cover" :src="itemEvent.URL" width="100%" height="180px" />
                </div>
                <div class="col-12 col-md-9 ">
                  <div class="ibf-h8 text-weight-medium ibf-ellipsis ">
                    {{ itemEvent.title }}
                  </div>

                  <div class="q-mt-sm row q-gutter-x-sm items-center q-py-sm">
                    <q-icon color="primary" size="20px" name="mdi-calendar" />
                    <div class="text-grey-8 ibf-h11 text-weight-medium">
                      {{ itemEvent.date }}
                    </div>
                  </div>
                  <div class="q-mt-sm row q-gutter-x-sm items-center ">
                    <q-icon color="primary" size="20px" name="mdi-map-marker-outline" />
                    <div class="text-grey-8 ibf-h11 text-weight-medium">
                      Join with us {{ itemEvent.location }}
                    </div>
                  </div>

                  <div class="ibf-h11 text-grey-6 q-mt-xl">
                    Published Date:
                    <span class="ibf-h11 text-negative text-bold">24-Feb-2023
                    </span>
                  </div>
                </div>
              </div>
            </q-card-section>

            <q-separator />
            <q-card-actions align="right">
              <q-btn flat no-caps label="View Details" @click="eventDetail" />
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
                  <img src="https://cdn.quasar.dev/img/parallax2.jpg" :ratio="1" width="100%" height="165px" />
                </div>
                <div class="col-12 col-md-9">
                  <div class="ibf-h8 ellipsis-2-lines text-weight-medium">
                    {{ itemEvent.title }}
                  </div>
                  <div class="text-grey-8 text-weight-light multi-line-ellipsis">
                    {{ itemEvent.date }}
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
              <q-btn flat no-caps label="Learn More" />
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
import { useRouter } from "vue-router";

const router = useRouter();
const tab = ref("TabOne");
const eventData = ref([
  {
    id: 1,
    title: "Institute of Banking and Finance partnered with top universities to address skill gaps in the Cambodian financial sector ",
    date: "05-May-2024",
    location: "at IBF",
    // isActive: true,
    // router: "cart1",
    URL: "https://www.ibfkh.org/images/alter-ibf-image.jpg"
  },
  {
    id: 2,
    title: "Graduation Event",
    date: "13-June-2024",
    location: "At ",
    URL: "src/assets/images/event_graduate.png"
    // URL: "src/assets/images/webinar.png"
  },
  {
    id: 3,
    title: "Our Changing Planet",
    date: "12th June 2021",
    location: "at IBF",
    URL: "https://cdn.quasar.dev/img/parallax2.jpg"
  },
  // {
  //   id: 4,
  //   title: "Authentic Leadership",
  //   date: "by John Doe",
  // },
]);

const eventDetail = () => {
  router.push({ name: "event-detail-page" });
}
</script>

<style lang="scss" scoped>
.card-background-1 {
  background-color: #f2f2f2;
}
</style>
