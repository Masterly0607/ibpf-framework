<template>
  <q-page padding>
    <div class="ibf-container-1200 ">

      <div class="q-gutter-md">
        <!-- background image -->
        <div>
          <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" spinner-color="primary" spinner-size="82px"
            weidth="100%" height="400px" />
        </div>

        <!-- Event List -->
        <EventList />

        <!-- Event Type -->
        <q-separator size="2px" />
        <div class="ibf-h6 text-weight-bold text-primary" align="center">Schedule all types of events</div>
        <EventType /> <!-- component -->

        <!-- Our customer says -->
        <q-separator size="2px" />
        <div class="ibf-h6 text-weight-bold text-primary" align="center">Our Customer Says</div>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6">
            <q-card class="ibf-card-1">
              <img src="https://cdn.quasar.dev/img/mountains.jpg" width="100%">
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
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
              <img src="https://cdn.quasar.dev/img/mountains.jpg" width="100%">
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
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
  </q-page>
</template>

<script setup>
import EventList from "./component-event/EventList.vue";
import EventType from "./component-event/EventType.vue";

</script>
