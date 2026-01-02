<template>
  <q-page padding>
    <div class="ibf-container-1200 q-gutter-md">
      <!-- background image -->
      <!-- <div>
          <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" spinner-color="primary" spinner-size="82px"
            weidth="100%" height="400px" />
        </div> -->

      <!-- Title -->
      <div class="text-weight-bold ibf-h4">Events & Updates</div>

      <div class="q-py-md">
        <!-- Event card: Masterly -->
        <EventCard />

        <!-- Event List -->
        <EventList />

        <!-- Event Type -->
        <EventType />
      </div>

      <!-- Our customer says -->

      <!-- <div class="ibf-h8 text-weight-bold text-primary" align="center">
        Our Customer Says
        <q-separator
          size="3px"
          spaced="3px"
          style="width: 220px"
          color="primary-10"
        />
      </div> -->

      <!-- <div class="q-py-md">
        <div class="row q-col-gutter-lg">
          <div class="col-12 col-md-6">
            <q-card class="ibf-card-1">
              <q-card-section>
                <div>
                  <q-img
                    src="https://cdn.quasar.dev/img/mountains.jpg"
                    :ratio="1"
                    spinner-color="primary"
                    spinner-size="82px"
                    width="100%"
                    height="250px"
                  />
                </div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </q-card-section>
            </q-card>
          </div>

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
                </div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div> -->
    </div>
  </q-page>
</template>

<script setup>
import EventList from "./component-event/EventList.vue";
import EventType from "./component-event/EventType.vue";
import EventCard from "./component-event/EventCard.vue";
</script>
