<template>
  <section id="events-card">
    <q-card square flat bordered>

      <q-card-section>
        <div class="text-h6 q-mx-md">
          Events
        </div>
      </q-card-section>
      <q-card-section>
        <div class="q-px-md">
          <q-card square bordered>
            <q-card class="row">

              <div square class="q-ma-md">
                <img src="https://cdn.quasar.dev/img/mountains.jpg" width="150px" height="120px">
              </div>
              <div>
                <q-card-section>
                  <div class="text-h6">Our Changing Planet</div>
                  <div class="text-subtitle2">by John Doe</div>
                </q-card-section>
              </div>

            </q-card>
            <q-separator />
            <div class="q-pa-sm card-bg" bordered align="right">
              <q-btn flat label="View Details" @click="onClick" />
            </div>
          </q-card>
        </div>

      </q-card-section>

      <q-card-section>
        <div class="q-pa-md">
          <q-card square bordered>
            <q-card class="row">

              <div square class="q-ma-md">
                <img src="https://cdn.quasar.dev/img/mountains.jpg" width="150px" height="120px">
              </div>
              <div>
                <q-card-section>
                  <div class="text-h6">Our Changing Planet</div>
                  <div class="text-subtitle2">by John Doe</div>
                </q-card-section>
              </div>

            </q-card>
            <q-separator />
            <div class="q-pa-sm card-bg" bordered align="right">
              <q-btn flat label="View Details" @click="onClick" />
            </div>
          </q-card>
        </div>
      </q-card-section>

    </q-card>
  </section>
</template>

<script setup>
</script>
