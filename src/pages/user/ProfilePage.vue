<template>
  
  <q-page padding class="ibf-container-1200 q-pa-md" >
    <!-- Back btn -->
    <q-btn color="primary" icon="mdi-arrow-left" label="BACK" :to="{name:'dashboard-page'}" />
    <!-- Tab
     narrow-indicator-->
    <q-tabs
      v-model="tab"
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="left"
    >
      <q-tab name="myAccount" label="My Account" no-caps />
      <q-tab name="notification" label="Notification" no-caps />
    </q-tabs>

    <q-separator />

    <div class="q-py-lg">
      <q-tab-panels v-model="tab" animated>
        <!-- my account tab -->
        <q-tab-panel name="myAccount" class="background q-pa-none">
          <!-- <div class="q-py-md"> -->
          <q-card class="ibf-card-3">
            <q-card-section>
              <!-- Edit button -->
              <div
                class="ibf-h8 text-weight-bold text-grey-8 row justify-between"
              >
                <span class="text-h5 text-weight-bold text-grey-9">My Profile</span>
                <q-btn
                        flat
                        no-caps
                        icon="edit"
                        label="Edit"
                        color="primary"
                       :to="{name:'edit-user-profile'}"
                      />
              </div>

              <div class="row q-col-gutter-md q-my-sm">
                <!-- Profile image -->
                <div class="col-12 col-md-auto flex justify-center">
                  <q-avatar size="180px" >
                    <q-img
                      src="https://cdn.quasar.dev/img/boy-avatar.png"
                      :ratio="1"
                    />
                  </q-avatar>
                </div>

                <div class="col-12 col-md-9  ">
                  <!-- Name and role -->
                  <div >
                    <q-item class="q-pa-none ">
                      <q-item-section
                        :align="$q.screen.gt.md ? 'left' : 'center'"
                      >
                        <q-item-label class="ibf-h7 text-weight-bold text-grey-8">
                          {{ user.name }}
                        </q-item-label>
                        <q-item-label class="ibf-h10 text-grey-6 text-weight-medium">{{
                          roles[0]
                        }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </div>
                  <div class="q-mt-lg"></div>
                  <q-separator spaced />
                  <div class="q-mt-xl">
                    <!-- Detailed information -->
                    <div :class="['row','q-mb-sm', $q.screen.gt.sm ? 'q-gutter-xs' : 'q-gutter-lg']">
                      <span class="col-2 text-grey-6">Gender</span>
                      <span class="text-primary col"
                        >sokmasterly06@gmail.com</span
                      >
                    </div>
                    <div  :class="['row','q-mb-sm', $q.screen.gt.sm ? 'q-gutter-xs' : 'q-gutter-lg']">
                      <span class="col-2 text-grey-6">DOB</span>
                      <span class="text-primary col"
                        >sokmasterly06@gmail.com</span
                      >
                    </div>
                    <div  :class="['row','q-mb-sm', $q.screen.gt.sm ? 'q-gutter-xs' : 'q-gutter-lg']">
                      <span class="col-2 text-grey-6">Email</span>
                      <span class="text-primary col"
                        >{{ user.email }}(Personal)
                        </span>
                       
                    </div>
                    <div  :class="['row','q-mb-sm', $q.screen.gt.sm ? 'q-gutter-xs' : 'q-gutter-lg']">
                      <span class="col-2 text-grey-6">Email</span>
                      <span class="text-primary col"
                        >{{ user.email }}(Work)</span
                      >
                    </div>
                    <div  :class="['row','q-mb-sm', $q.screen.gt.sm ? 'q-gutter-xs' : 'q-gutter-lg']">
                      <span class="col-2 text-grey-6">Tel</span>
                      <span class="text-primary col"
                        >{{ user.phone_number }}</span
                      >
                    </div>
                    <div  :class="['row', $q.screen.gt.sm ? 'q-gutter-xs' : 'q-gutter-lg']">
                      <span class="col-2 text-grey-6">Address</span>
                      <span class="text-primary col"
                        >Phnom Penh</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </q-card-section>
            
          </q-card>

          <!-- Edit Work -->
          <div class="q-py-lg">
            <q-card class="ibf-card-3">
              <q-card-section>
                <div class="q-gutter-md">
                  <div class="row">
                    <div class="text-h5 text-weight-bold text-grey-9">Work</div>
                    <q-space />
                    <div class="edit-bg">
                      <q-btn
                        flat
                        no-caps
                        icon="edit"
                        label="Edit"
                        color="primary"
                     :to="{name:'edit-user-work'}"
                      />
                    </div>
                  </div>

                  <q-separator />

                  <div class="q-gutter-y-md">
                    <div class="row q-col-gutter-md">
                      <div class="col-6">
                        <div class="text-grey-6 ">BFI Name</div>
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
                              class="self-center full-width no-outline text-weight-medium"
                              tabindex="0"
                            >
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
                        <div class=" text-grey-6">Role</div>
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
                              class="self-center full-width no-outline text-weight-medium"
                              tabindex="0"
                            >
                              {{ roles[0] }}
                            </div>
                          </template>
                        </q-field>
                      </div>
                    </div>

                    <div class="row q-col-gutter-x-md">
                      <div class="col-6">
                        <div class="text-grey-6">Position</div>
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
                              class="self-center full-width no-outline text-weight-medium"
                              tabindex="0"
                            >
                              {{ position }}
                            </div>
                          </template>
                        </q-field>
                      </div>

                      <div class="col-6">
                        <div class=" text-grey-6">
                          Email address (Work)
                        </div>
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
                              class="self-center full-width no-outline text-weight-medium"
                              tabindex="0"
                            >
                              {{ user.email }}
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
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import NotificationPage from "./NotificationPage.vue";
import { useRouter } from "vue-router";
import { useUserStore } from "src/stores/user-store";
import { useQuasar } from "quasar";
// import { useUserProfileStore } from "src/stores/profile-store";
// import { storeToRefs } from "pinia";

const $q = useQuasar();

const router = useRouter();
const userStore = useUserStore();
const user = userStore.getUser;
const roles = userStore.getRoles;

const tab = ref("myAccount");


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
