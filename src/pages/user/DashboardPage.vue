<template>
  <q-page padding class="ibf-container-1400">
    <!-- tab dashboard -->
    <q-tabs
      v-model="tab"
      active-color="primary"
      indicator-color="primarry"
      class="text-grey-8"
      align="left"
    >
      <q-tab label="Dashboard" name="TabOne" no-caps />
      <!-- <q-tab label="My Activity" name="TabTwo" no-caps /> -->
      <q-tab label="Order History" name="TabThree" no-caps />
    </q-tabs>
    <q-separator />

    <div class="q-py-sm">
      <q-tab-panels animated v-model="tab" class="bg-transparent">
        <!-- tab one -->
        <q-tab-panel name="TabOne">
          <div class="row q-col-gutter-lg">
            <!-- profile -->
            <div class="col-12 col-md-3">
              <q-card bordered square class="ibf-card-2">
                <q-item class="bg-primary">
                  <q-item-section side>
                    <q-avatar color="red-10" text-color="white" size="40px">
                      <span class="ibf-h10 text-weight-medium text-grey-3">
                        {{ userInitials }}
                      </span>
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label
                      class="ibf-h10 text-grey-3 text-weight-medium"
                    >
                      {{ user.name }}
                    </q-item-label>
                  </q-item-section>

                  <q-separator inset vertical color="grey-3" />

                  <q-btn
                    dense
                    size="12px"
                    color="grey-4"
                    flat
                    no-caps
                    icon-right="mdi-square-edit-outline"
                    label="Detail"
                    @click="viewMyAccount"
                  />
                </q-item>

                <q-card-section>
                  <!-- roles -->
                  <q-item class="q-pa-none" dense>
                    <q-item-section side>
                      <q-icon
                        size="18px"
                        color="grey-8"
                        name="mdi-shield-account-outline"
                      />
                    </q-item-section>
                    <q-item-section>
                      <span class="ibf-h11 text-primary text-weight-medium">
                        {{ roles[0] }}
                      </span>
                    </q-item-section>
                  </q-item>
                  <!-- gender -->
                  <q-item class="q-pa-none" dense>
                    <q-item-section side>
                      <q-icon
                        size="19px"
                        color="grey-8"
                        name="mdi-account-supervisor-circle-outline"
                      />
                    </q-item-section>
                    <q-item-section>
                      <span class="ibf-h11 text-grey-8 text-weight-medium"
                        >{{ user.gender }}
                      </span>
                    </q-item-section>
                  </q-item>
                  <!-- BFI -->
                  <q-item class="q-pa-none" dense>
                    <q-item-section side>
                      <q-icon
                        size="19px"
                        color="grey-8"
                        name="mdi-bank-circle-outline"
                      />
                    </q-item-section>
                    <q-item-section>
                      <span class="ibf-h11 text-grey-8 text-weight-medium">{{
                        user.bfis ? user.bfis[0].name : "N/A"
                      }}</span>
                    </q-item-section>
                  </q-item>
                  <!-- email -->
                  <q-item class="q-pa-none" dense>
                    <q-item-section side>
                      <q-icon size="19px" color="grey-8" name="mdi-at" />
                    </q-item-section>
                    <q-item-section>
                      <span class="ibf-h11 text-grey-8 text-weight-medium">{{
                        user.email
                      }}</span>
                    </q-item-section>
                  </q-item>
                  <!-- phone -->
                  <q-item class="q-pa-none" dense>
                    <q-item-section side>
                      <q-icon
                        size="19px"
                        color="grey-8"
                        name="mdi-phone-in-talk-outline"
                      />
                    </q-item-section>
                    <q-item-section>
                      <span class="ibf-h11 text-grey-8 text-weight-medium"
                        >{{ user.phone_number }}
                      </span>
                    </q-item-section>
                  </q-item>

                  <q-separator spaced />
                  <div class="q-pa-none" align="right">
                    <q-btn
                      outline
                      square
                      color="grey-7"
                      icon="mdi-logout"
                      label="Logout"
                      no-caps
                      @click="logout"
                    />
                  </div>
                </q-card-section>
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

            <div class="col-12 col-md-9 q-gutter-y-lg">
              <!-- My Learning -->
              <my-learning></my-learning>

              <!-- Join Course -->
              <join-course></join-course>

              <!-- Events -->
              <div>
                <events-card></events-card>
              </div>

              <!-- Recommended -->

              <div class="q-gutter-md">
                <div class="ibf-h9 text-weight-medium text-grey-8">
                  Recommended for you
                </div>
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
import { ref, watch, computed } from "vue";
import OrderDashboardPage from "./order/OrderDashboardPage.vue";
import CapabilityModel from "./components/CapabilityModel.vue";
import MyLearning from "./components/MyLearning.vue";
import JoinCourse from "./components/JoinCourse.vue";
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

const userInitials = computed(() => {
  if (!user.name) return "";

  return user.name
    .split(" ")
    .map((n) => n.charAt(0))
    .join("")
    .toUpperCase();
});
</script>

<!-- <style lang="scss" scoped>
//.card-bg {
//  background-color: #f1f1f1;
//}</style> -->
