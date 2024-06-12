<template>
  <q-page padding class="ibf-container-1400">
    <!-- tab dashboard -->
    <q-tabs v-model="tab" class="text-primary" align="left">
      <q-tab label="Dashboard" name="TabOne" no-caps />
      <q-tab label="My Activity" name="TabTwo" no-caps />
      <q-tab label="Order history" name="TabThree" no-caps />
    </q-tabs>
    <q-separator />

    <div class="q-py-sm">
      <q-tab-panels animated v-model="tab">
        <!-- tab one -->
        <q-tab-panel name="TabOne">
          <div class="row q-col-gutter-lg">
            <!-- profile -->
            <div class="col-12 col-md-3">
              <q-card bordered square class="inset-shadow-down shadow-10">
                <div class="bg-primary q-pa-sm">
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                  </q-avatar>
                </div>

                <q-card-section>
                  <div class="ibf-h7 text-weight-medium q-py-md">Da Lyna</div>

                  <div class="text-weight-medium q-py-xs">
                    <span class="text-weight-medium text-grey-7">
                      Department :
                    </span>
                    Student in Finance
                  </div>
                  <div class="text-weight-medium">
                    <span class="text-weight-medium text-grey-7">Email : </span>
                    anyalina@ibfkh.com
                  </div>
                </q-card-section>

                <q-separator />
                <q-card-actions class="card-bg" align="between">
                  <q-btn
                    color="primary"
                    flat
                    no-caps
                    label="My Account"
                    @click="viewMyAccount"
                  />

                  <q-btn
                    outline
                    square
                    color="grey-7"
                    icon="mdi-logout"
                    label="Logout"
                    no-caps
                    @click="logout"
                  />
                </q-card-actions>
              </q-card>
            </div>

            <!-- Capability Model -->
            <div class="col-12 col-md-9">
              <capability-model></capability-model>
            </div>
          </div>

          <div class="row q-col-gutter-lg q-py-lg">
            <!-- View Course -->
            <div class="col-12 col-md-3">
              <CourseList></CourseList>
            </div>

            <div class="col-12 col-md-9">
              <!-- My Learning -->
              <div>
                <my-learning></my-learning>
              </div>
              <!-- Events -->
              <div class="q-py-lg">
                <events-card></events-card>
              </div>

              <!-- Recommended -->
              <div class="ibf-h7 text-weight-meduim">Recommended for you</div>
              <div class="q-py-sm">
                <RecommendedCourse></RecommendedCourse>
              </div>
              <!-- <div>
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
                  </div> -->
            </div>
          </div>
        </q-tab-panel>

        <!-- tab two -->
        <q-tab-panel name="TabTwo">
          <div class="row">Welcome to tab two</div>
        </q-tab-panel>

        <!-- tab three-->
        <q-tab-panel name="TabThree">
          <order-dashboard-page></order-dashboard-page>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import OrderDashboardPage from "./order/OrderDashboardPage.vue";
import CapabilityModel from "./components/CapabilityModel.vue";
import MyLearning from "./components/MyLearning.vue";
import EventsCard from "./components/EventsCard.vue";
import RecommendedCourse from "./components/RecommendedCourse.vue";
import { useRouter } from "vue-router";
import CourseList from "./components/CourseList.vue";
import { useUserStore } from "src/stores/user-store";

const userStore = useUserStore();

const router = useRouter();
const tab = ref("TabOne");

const viewMyAccount = () => {
  router.push({ name: "profile-page" });
};

const logout = () => {
  userStore.logout();
};
</script>

<style lang="scss">
.card-bg {
  background-color: #f1f1f1;
}
.bg-primary {
  background-color: #8c1925;
}
</style>
