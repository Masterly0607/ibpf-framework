<template>
  <q-page padding class="ibf-container-1400">
    <div elevated style="width: 100%">
      <!-- tab -->
      <q-tabs v-model="tab" class="text-red" align="left">
        <q-tab label="Dashboard" name="TabOne" animated no-caps />
        <q-tab label="My Activity" name="TabTwo" no-caps />
      </q-tabs>
      <q-separator />

      <div>
        <q-tab-panels animated v-model="tab">
          <!-- tab one -->
          <q-tab-panel name="TabOne">
            <div class="row q-col-gutter-md">
              <!-- profile -->
              <div class="col-12 col-sm-6 col-md-3">
                <q-card square flat bordered>
                  <q-card class="bg-red q-px-sm">
                    <q-item>
                      <q-item-section avatar>
                        <q-avatar>
                          <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                        </q-avatar>
                      </q-item-section>
                    </q-item>
                  </q-card>
                  <q-card-section>
                    <div class="text-h6 q-ma-sm">Da Lyna</div>
                    <div class="text-subtitle2 q-ma-sm">Student in Finance</div>
                  </q-card-section>

                  <q-separator />
                  <div class="q-pa-sm card-bg" bordered align="right">
                    <q-btn
                      flat
                      no-caps
                      label="My Account"
                      @click="viewAccount"
                    />
                  </div>
                </q-card>
              </div>

              <!-- Capability Model -->
              <div class="col-12 col-sm-6 col-md-9">
                <capability-model></capability-model>
              </div>
            </div>

            <div class="row q-col-gutter-md q-py-md">
              <!-- View Course -->
              <div class="col-12 col-sm-6 col-md-3">
                <q-card square flat bordered>
                  <q-card class="my-card">
                    <q-card-section>
                      <div class="text-h6">View Courses</div>
                    </q-card-section>
                    <q-card-actions vertical flat align="left">
                      <q-btn flat>Individual</q-btn>
                      <q-btn flat>Business</q-btn>
                      <q-btn flat>People</q-btn>
                      <q-btn flat>Future</q-btn>
                      <q-btn flat>Leadership</q-btn>
                      <q-btn flat>Critical Soft Skill</q-btn>
                    </q-card-actions>

                    <q-separator />
                    <div class="q-pa-sm card-bg" bordered align="right">
                      <q-btn
                        flat
                        no-caps
                        label="Start Learning"
                        @click="onClick"
                      />
                    </div>
                  </q-card>
                </q-card>
              </div>

              <div class="col-12 col-sm-6 col-md-9">
                <div>
                  <!-- My Learning -->
                  <div>
                    <my-learning></my-learning>
                  </div>
                  <!-- Events -->
                  <div class="q-py-md">
                    <events-card></events-card>
                  </div>

                  <!-- Recommended -->
                  <div class="text-h5 q-py-md">Recommended for you</div>
                  <div>
                    <q-card
                      square
                      flat
                      bordered
                      class="shadow-2 rounded-borders"
                    >
                      <q-card-section>
                        <div class="text-h6 q-py-sm">
                          Introduction of Individual
                        </div>
                      </q-card-section>
                      <q-card bordered>
                        <q-card-section>
                          <div class="text-h6 q-py-sm">Individual Course</div>
                        </q-card-section>
                      </q-card>
                    </q-card>
                  </div>
                </div>
              </div>
            </div>
          </q-tab-panel>

          <!-- tab two -->
          <q-tab-panel name="TabTwo">
            <div class="row">Welcome to tab two</div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import CapabilityModel from "./components/CapabilityModel.vue";
import MyLearning from "./components/MyLearning.vue";
import EventsCard from "./components/EventsCard.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const tab = ref("TabOne");

const viewAccount = () => {
  router.push({ name: "edit-profile" });
};
</script>

<style lang="scss">
.card-bg {
  background-color: #f1f1f1;
}
</style>
