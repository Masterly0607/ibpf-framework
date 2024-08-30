<template>
  <q-page padding>
    <div class="ibf-container-1200">
      <div class="q-gutter-md">
        <!-- background image -->
        <!-- <div>
          <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" spinner-color="primary" spinner-size="82px"
            weidth="100%" height="400px" />
        </div> -->

        <div class="q-py-md text-weight-bold ibf-h6 q-gutter-y-md">
          Events & Updates

          <!-- Event List -->
          <EventList />

          <q-separator size="2px" />

          <!-- Event Type -->
          <div class="ibf-h8 text-weight-bold">
            Event Type
            <EventType />
          </div>
        </div>

        <!-- Our customer says -->

        <div class="ibf-h8 text-weight-bold text-primary" align="center">
          Our Customer Says
          <q-separator
            size="3px"
            spaced="3px"
            style="width: 220px"
            color="primary-10"
          />
        </div>

        <div class="q-py-md">
          <div class="row q-col-gutter-lg">
            <div class="col-12 col-md-6">
              <q-card class="ibf-card-1">
                <!-- <img src="https://cdn.quasar.dev/img/mountains.jpg" width="100%"> -->
                <q-card-section>
                  <div>
                    <!-- <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" spinner-color="primary"
                      spinner-size="82px" width="100%" height="250px" /> -->
                  </div>
                  <div class="text-subtitle2">by John Doe</div>
                </q-card-section>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </q-card-section>
              </q-card>
            </div>
            <!--  -->
            <div class="col-12 col-md-6">
              <q-card class="ibf-card-1">
                <q-card-section>
                  <div>
                    <img :src="url" alt="" />
                    <q-avatar
                      size="100px"
                      font-size="52px"
                      color="teal"
                      text-color="white"
                    >
                      <q-img
                        src="https://cdn.quasar.dev/img/mountains.jpg"
                        :ratio="1"
                        spinner-color="primary"
                        spinner-size="82px"
                        width="100%"
                        height="250px"
                      />
                    </q-avatar>
                    <!-- <img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" width="100%" height="250px"> -->
                  </div>
                  <div class="text-subtitle2">by John Doe</div>
                </q-card-section>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import EventList from "./component-event/EventList.vue";
import EventType from "./component-event/EventType.vue";
</script>
