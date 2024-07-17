<template>
  <div class="ibf-container-1200">
    <!-- Tab
     narrow-indicator-->
    <q-tabs v-model="tab" class="text-grey" active-color="primary" indicator-color="primary" align="left">
      <q-tab name="myAccount" label="My Account" no-caps />
      <q-tab name="notification" label="Notification" no-caps />
    </q-tabs>

    <q-separator />

    <div class="q-py-lg">
      <q-tab-panels v-model="tab" animated>
        <!-- my account tab -->
        <q-tab-panel name="myAccount" class="background q-pa-none ">
          <!-- <div class="q-py-md"> -->
          <q-card class="ibf-card-3">
            <q-card-section>
              <div class="q-gutter-md">
                <div class="ibf-h8 text-weight-bold">Profile Picture</div>

                <q-separator />

                <div class="q-py-lg">
                  <div class="row q-col-gutter-lg">
                    <!-- profile image -->
                    <div class="col-12 col-md-2">
                      <q-avatar size="180px" class="q-pa-sm">
                        <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" />
                      </q-avatar>
                    </div>

                    <!-- user info -->
                    <div class="col-12 col-md-10 q-px-xl">
                      <div class="ibf-h6 text-weight-bold q-py-xs">
                        {{ user.name }}
                      </div>
                      <div class="text-subtitle2 text-grey-8 q-py-xs">
                        Role :
                        <span class="text-primary text-weight-bold">
                          {{ roles[0] }}
                        </span>
                      </div>
                      <div class="text-subtitle2 text-grey-8">
                        Gender :
                        <span class="text-weight-bold">
                          {{ user.gender }}
                        </span>
                      </div>
                      <div class="text-subtitle2 text-grey-8">
                        Date of Birth :
                        <span class="text-weight-bold">
                          {{ user.dob }}
                        </span>
                      </div>
                      <div class="text-subtitle2 text-grey-8">
                        Email :
                        <span class="ibf-h11 text-weight-bold">{{
                          user.email
                          }}</span>
                        (Personal)
                      </div>
                      <div class="text-subtitle2 text-grey-8">
                        Email :
                        <span class="ibf-h11 text-weight-bold">{{
                          user.email
                          }}</span>
                        (Work)
                      </div>
                      <div class="text-subtitle2 text-grey-8">
                        Phone Number :
                        <span class="ibf-h11 text-weight-bold">
                          {{ user.phone_number }}
                        </span>
                      </div>
                      <div class="text-subtitle2 text-grey-8">
                        Address :
                        <span class="ibf-h11 text-weight-bold">
                          Phnom Penh
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </q-card-section>
            <div class="card-bg q-pa-sm" align="right">
              <q-btn flat no-caps label="Edit Profile" color="primary" @click="editUserProfile" />
            </div>
          </q-card>

          <!-- Edit Work -->
          <div class="q-py-lg">
            <q-card class="ibf-card-3">
              <q-card-section>
                <div class="q-gutter-md">
                  <div class="row">
                    <div class="ibf-h8 text-weight-bold">Work</div>
                    <q-space />
                    <div class="edit-bg">
                      <q-btn flat no-caps icon="edit" label="Edit" color="primary" @click="editUserWork" />
                    </div>
                  </div>

                  <q-separator />

                  <div class="q-gutter-y-md">
                    <div class="row q-col-gutter-md">
                      <div class="col-6">
                        <div class="text-grey-6 text-weight-bold">
                          BFI Name
                        </div>
                        <q-field color="grey-3" label-color="teal" outlined stack-label>
                          <template v-slot:append>
                            <q-icon name="domain" color="primary" />
                          </template>
                          <template v-slot:control>
                            <div class="self-center full-width no-outline text-weight-medium" tabindex="0">
                              {{ user.bfis ? user.bfis[0].name : "N/A" }}
                              <!-- {{
                                  user.bfis
                                    ? user.bfis.name
                                    : "N/A"
                                }} -->
                            </div>
                          </template>
                        </q-field>
                      </div>

                      <div class="col-6">
                        <div class="text-weight-bold text-grey-6">Role</div>
                        <q-field color="grey-3" label-color="primary" outlined stack-label>
                          <template v-slot:append>
                            <q-icon name="group" color="primary" />
                          </template>
                          <template v-slot:control>
                            <div class="self-center full-width no-outline text-weight-medium" tabindex="0">
                              {{ roles[0] }}
                            </div>
                          </template>
                        </q-field>
                      </div>
                    </div>

                    <div class="row q-col-gutter-x-md">
                      <div class="col-6">
                        <div class="text-weight-bold text-grey-6">
                          Position
                        </div>
                        <q-field color="grey-3" label-color="teal" outlined stack-label>
                          <template v-slot:append>
                            <q-icon name="domain_add" color="primary" />
                          </template>
                          <template v-slot:control>
                            <div class="self-center full-width no-outline text-weight-medium" tabindex="0">
                              {{ position }}
                            </div>
                          </template>
                        </q-field>
                      </div>

                      <div class="col-6">
                        <div class="text-weight-bold text-grey-6">
                          Email address (Work)
                        </div>
                        <q-field color="grey-3" label-color="teal" outlined stack-label>
                          <template v-slot:append>
                            <q-icon name="compost" color="primary" />
                          </template>
                          <template v-slot:control>
                            <div class="self-center full-width no-outline text-weight-medium" tabindex="0">
                              {{
                                user.email
                              }}
                            </div>
                          </template>
                        </q-field>
                      </div>
                    </div>

                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </q-tab-panel>

        <q-separator spaced inset vertical dark />
        <!-- notification tab -->
        <q-tab-panel name="notification">
          <div class="q-py-md">
            <NotificationPage></NotificationPage>
          </div>
        </q-tab-panel>
      </q-tab-panels>

      <!-- </div> -->
      <preview-json :list="user"></preview-json>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import NotificationPage from "./NotificationPage.vue";
import { useRouter } from "vue-router";
import { useUserStore } from "src/stores/user-store";
// import { useUserProfileStore } from "src/stores/profile-store";
// import { storeToRefs } from "pinia";

const router = useRouter();
const userStore = useUserStore();
const user = userStore.getUser;
const roles = userStore.getRoles;

const tab = ref("myAccount");

const editUserProfile = () => {
  router.push({ name: "edit-user-profile" });
};
const editUserWork = () => {
  router.push({ name: "edit-user-work" });
};
</script>

<style lang="scss">
.card-bg {
  background-color: #f1f1f1;
}

.background {
  background-color: #f2f2f2;
}
</style>
