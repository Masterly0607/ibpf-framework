<!-- header home -->
<template>
  <div class="ibf-container-1200">
    <!-- <div class="q-gutter-y-md" style="max-width: 600px"> -->
    <div class="q-pa-md" style="max-width: 100%">
      <q-card flat>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="left"
          narrow-indicator
        >
          <q-tab name="myAccount" label="My Account" no-caps />
          <q-tab name="notification" label="Notification" no-caps />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <!-- my account tab -->
          <q-tab-panel name="myAccount">
            <div class="q-py-md">
              <q-card class="my-card">
                <q-card-section>
                  <div class="q-gutter-md">
                    <div class="ibf-h8 text-bold">Profile Picture</div>
                    <q-separator />
                    <div class="row q-gutter-sm">
                      <q-avatar
                        size="130px"
                        font-size="130px"
                        text-color="primary"
                        icon="account_circle"
                      />
                      <div class="q-py-lg">
                        <div class="ibf-h7 text-bold">Da Lyna</div>
                        <div class="text-subtitle2">Student in Finance</div>
                        <div class="text-subtitle2">
                          Email: ui.officer@ibfkh.org
                        </div>
                      </div>
                    </div>
                  </div>
                </q-card-section>
                <div class="card-bg q-pa-sm" align="right">
                  <q-btn
                    flat
                    no-caps
                    label="Edit Profile"
                    color="primary"
                    @click="editUserProfile"
                  />
                </div>
              </q-card>
            </div>

            <div class="q-py-md">
              <q-card class="my-card">
                <q-card-section>
                  <div class="q-gutter-md">
                    <div class="row">
                      <div class="ibf-h8 text-bold">Work</div>
                      <q-space />
                      <div class="edit-bg">
                        <q-btn
                          flat
                          no-caps
                          icon="edit"
                          label="Edit"
                          color="primary"
                          @click="editUserWork"
                        />
                      </div>
                    </div>

                    <q-separator />

                    <div class="q-gutter-y-md">
                      <div class="row q-col-gutter-md">
                        <div class="col-6">
                          <div class="text-bold">Industry</div>
                          <q-field
                            color="grey-3"
                            label-color="teal"
                            outlined
                            stack-label
                          >
                            <template v-slot:append>
                              <q-icon name="domain" color="primary" />
                            </template>
                            <template v-slot:control>
                              <div
                                class="self-center full-width no-outline"
                                tabindex="0"
                              >
                                <!-- {{ text }} -->
                                Your Industry
                              </div>
                            </template>
                          </q-field>
                        </div>

                        <div class="col-6">
                          <div class="text-bold">Role</div>
                          <q-field
                            color="grey-3"
                            label-color="primary"
                            outlined
                            stack-label
                          >
                            <template v-slot:append>
                              <q-icon name="group" color="primary" />
                            </template>
                            <template v-slot:control>
                              <div
                                class="self-center full-width no-outline"
                                tabindex="0"
                              >
                                <!-- {{ text }} -->
                                Your Role
                              </div>
                            </template>
                          </q-field>
                        </div>
                      </div>

                      <div class="row q-col-gutter-x-md">
                        <div class="col-6">
                          <div class="text-bold">Job Title</div>
                          <q-field
                            color="grey-3"
                            label-color="teal"
                            outlined
                            stack-label
                          >
                            <template v-slot:append>
                              <q-icon name="domain_add" color="primary" />
                            </template>
                            <template v-slot:control>
                              <div
                                class="self-center full-width no-outline"
                                tabindex="0"
                              >
                                <!-- {{ text }} -->
                                Job Title
                              </div>
                            </template>
                          </q-field>
                          <!-- <div class="ibf-h10 text-bold">
                            Job Title
                            <q-input
                              name="job"
                              v-model="job"
                              label="Your job title"
                              outlined
                              clearable
                            />
                          </div> -->
                        </div>

                        <div class="col-6">
                          <div class="text-bold">Company Name</div>
                          <q-field
                            color="grey-3"
                            label-color="teal"
                            outlined
                            stack-label
                          >
                            <template v-slot:append>
                              <q-icon name="compost" color="primary" />
                            </template>
                            <template v-slot:control>
                              <div
                                class="self-center full-width no-outline"
                                tabindex="0"
                              >
                                <!-- {{ text }} -->
                                Company Name
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
      </q-card>
    </div>

    <!-- </div> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import NotificationPage from "./NotificationPage.vue";
import { useRouter } from "vue-router";
// import { useUserProfileStore } from "src/stores/profile-store";
// import { storeToRefs } from "pinia";

const router = useRouter();
const tab = ref("myAccount");

const email = defineModel("email");

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
.edit-bg {
  background-color: #fcf2f2;
}
</style>
