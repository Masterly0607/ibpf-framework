<template>
  <div class="ibf-container-1400">
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
          <q-tab name="myAccount" label="My Account" />
          <q-tab name="notification" label="Notification" />
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
                          Email: anyalina@gmail.com
                        </div>
                      </div>
                    </div>
                  </div>
                </q-card-section>
                <div class="card-bg q-pa-sm" align="right">
                  <q-btn
                    flat
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
                          icon="edit"
                          label="Edit"
                          color="primary"
                          @click="onClick"
                        />
                      </div>
                    </div>

                    <q-separator />

                    <div class="q-py-md">
                      <q-form width="100%" @submit="onSubmit" @reset="onReset">
                        <div class="row q-gutter-md">
                          <q-input
                            filled
                            v-model="name"
                            label="Industry *"
                            hint="Your industry"
                            lazy-rules
                            :rules="[
                              (val) =>
                                (val && val.length > 0) ||
                                'Please type something',
                            ]"
                          />
                          <q-input
                            filled
                            v-model="name"
                            label="Role *"
                            hint="Your role"
                            lazy-rules
                            :rules="[
                              (val) =>
                                (val && val.length > 0) ||
                                'Please type something',
                            ]"
                          />
                        </div>

                        <div class="row q-gutter-md">
                          <q-input
                            filled
                            v-model="name"
                            label="Job Title *"
                            hint="Your job"
                            lazy-rules
                            :rules="[
                              (val) =>
                                (val && val.length > 0) ||
                                'Please type something',
                            ]"
                          />
                          <q-input
                            filled
                            v-model="name"
                            label="Company Name *"
                            hint="Your company name"
                            lazy-rules
                            :rules="[
                              (val) =>
                                (val && val.length > 0) ||
                                'Please type something',
                            ]"
                          />
                        </div>
                      </q-form>
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
              <user-notification></user-notification>
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
import UserNotification from "./components/UserNotification.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const tab = ref("myAccount");

const editUserProfile = () => {
  router.push({ name: "edit-user-profile" });
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
