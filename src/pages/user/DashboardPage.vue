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
      <q-tab-panels animated v-model="tab" class="bg-transparent">
        <!-- tab one -->
        <q-tab-panel name="TabOne">
          <div class="row q-col-gutter-lg">
            <!-- profile -->
            <div class="col-12 col-md-3">
              <q-card bordered square flat>
                <div class="bg-primary row q-pa-sm">
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                  </q-avatar>
                  <div class="q-pa-sm q-px-md ibf-h8 text-grey-4 text-weight-medium">
                    {{ user.name }}
                  </div>
                </div>

                <q-card-section class="q-pa-md">
                  <div class="text-weight-medium q-py-sm">
                    <a href="#" class="text-primary">Role: {{ roles[0] }}</a>
                  </div>

                  <div class="text-weight-medium">
                    <span class="text-weight-medium text-grey-7">Gender : </span>
                    {{ user.gender }}
                  </div>

                  <div class="text-weight-medium">
                    <span class="text-weight-medium text-grey-7">BFI : </span>
                    <!-- {{ userStore.user.bfi.name ?? "N/A" }} -->
                    {{ user.bfis ? user.bfis[0].name : "N/A" }}
                  </div>

                  <div class="text-weight-medium">
                    <span class="text-weight-medium text-grey-7">Email : </span>
                    {{ user.email }}
                  </div>

                  <div class="text-weight-medium">
                    <span class="text- -medium text-grey-7">Phone Number :
                    </span>
                    {{ user.phone_number }}
                  </div>
                </q-card-section>

                <q-separator />
                <q-card-actions align="between">
                  <q-btn color="primary" flat no-caps label="My Account" @click="viewMyAccount" />

                  <q-btn outline square color="grey-7" icon="mdi-logout" label="Logout" no-caps @click="logout" />
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

    <preview-json :list="user"></preview-json>
  </q-page>
</template>

<script setup>
import { ref, watch } from "vue";
import OrderDashboardPage from "./order/OrderDashboardPage.vue";
import CapabilityModel from "./components/CapabilityModel.vue";
import MyLearning from "./components/MyLearning.vue";
import EventsCard from "./components/EventsCard.vue";
import RecommendedCourse from "./components/RecommendedCourse.vue";
import CourseList from "./components/CourseList.vue";
import { useRouter } from "vue-router";
import { useUserStore } from "src/stores/user-store";
import { useCartStore } from "src/stores/cart-store";

const cartStore = useCartStore();
const userStore = useUserStore();
const user = userStore.getUser;
const roles = userStore.getRoles;
const router = useRouter();
const tab = ref("TabOne");

const viewMyAccount = () => {
  router.push({ name: "profile-page" });
};

const logout = () => {
  userStore.logout();
  cartStore.resetCart();
  cartStore.resetLastCartFetch();

  router.replace({ name: "home-page" });
};

</script>

<!-- <style lang="scss" scoped>
//.card-bg {
//  background-color: #f1f1f1;
//}</style> -->
