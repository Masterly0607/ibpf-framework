<template>
  <section id="events-card">
    <q-card square>
      <div class="ibf-h8 text-weight-bold q-pa-md">Events</div>
      <q-card-section>
        <q-card flat square bordered>
          <q-card>
            <div class="row">
              <div square class="q-pa-md">
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
      </q-card-section>

      <q-card-section>
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
      </q-card-section>
    </q-card>
  </section>
</template>

<script setup></script>
