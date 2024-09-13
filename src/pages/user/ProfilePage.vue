<template>
  <q-page class="ibf-container-1200" padding>
    <!-- Tab -->
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
          <div class="q-gutter-lg">
            <!-- My Profile -->
            <q-card square class="ibf-card-3">
              <q-card-section>
                <div class="row justify-between">
                  <span class="ibf-h10 text-weight-bold text-grey-8 q-pa-sm">
                    My Profile
                  </span>
                  <!-- btn edit -->
                  <q-btn
                    flat
                    no-caps
                    icon="edit"
                    label="Edit"
                    color="primary"
                    @click="editUserWork"
                  />
                </div>

                <q-separator spaced color="grey-3" />

                <div class="row q-col-gutter-md q-pa-sm">
                  <!-- Profile image -->
                  <div class="col-12 col-md-auto flex justify-center">
                    <q-avatar color="red-10" text-color="white" size="150px">
                      <span class="text-h3"> {{ userInitials }}</span>
                    </q-avatar>
                  </div>

                  <div class="col-12 col-md-9">
                    <!-- Name and role -->
                    <div class="q-pa-sm">
                      <q-item class="q-pa-none">
                        <q-item-section
                          :align="$q.screen.gt.md ? 'left' : 'center'"
                        >
                          <q-item-label
                            class="ibf-h8 text-weight-bold text-primary"
                          >
                            {{ user.name }}
                          </q-item-label>
                          <q-item-label
                            class="ibf-h10 text-primary text-weight-medium q-py-xs"
                          >
                            {{ roles[0] }}
                          </q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-separator spaced color="primary" />

                      <!-- Personal Info -->
                      <personal-information />
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>

            <!--  Work -->
            <q-card square class="ibf-card-3">
              <q-card-section>
                <div class="q-gutter-md">
                  <div class="row justify-between">
                    <span class="ibf-h10 text-weight-bold text-grey-8 q-pa-sm">
                      Work Information
                    </span>
                    <q-btn
                      flat
                      no-caps
                      icon="edit"
                      label="Edit"
                      color="primary"
                      :to="{ name: 'edit-user-work' }"
                    />
                  </div>

                  <q-separator spaced color="grey-3" />

                  <div class="q-pa-sm">
                    <div class="row q-col-gutter-lg">
                      <div
                        v-for="field in fields"
                        :key="field"
                        class="col-12 col-md-6"
                      >
                        <div class="text-grey-6">{{ field.label }}</div>
                        <q-field
                          :color="field.fieldColor"
                          :label-color="field.labelColor"
                          outlined
                          stack-label
                        >
                          <template v-slot:append>
                            <q-icon :name="field.icon" color="primary" />
                          </template>
                          <template v-slot:control>
                            <div
                              class="no-outline text-weight-medium text-grey-8"
                              tabindex="0"
                            >
                              {{ field.value }}
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

        <!-- notification tab -->
        <q-tab-panel name="notification">
          <div class="q-py-md">
            <NotificationPage></NotificationPage>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>

    <preview-json :list="user"></preview-json>
  </q-page>
</template>

<script setup>
import { ref, computed } from "vue";
import NotificationPage from "./NotificationPage.vue";
import PersonalInformation from "./profile-components/PersonalInformation.vue";
import { useRouter } from "vue-router";
import { useUserStore } from "src/stores/user-store";
import { useQuasar } from "quasar";

const $q = useQuasar();

const router = useRouter();
const userStore = useUserStore();
const user = userStore.getUser;
const roles = userStore.getRoles;

const tab = ref("myAccount");
const position = "Manager";

const fields = computed(() => [
  {
    label: "BFI Name",
    value: user.bfis ? user.bfis[0].name : "N/A",
    icon: "domain",
    fieldColor: "grey-3",
    labelColor: "teal",
  },
  {
    label: "Role",
    value: roles[0],
    icon: "group",
    fieldColor: "grey-3",
    labelColor: "primary",
  },
  {
    label: "Position",
    value: position,
    icon: "domain_add",
    fieldColor: "grey-3",
    labelColor: "teal",
  },
  {
    label: "Email address (Work)",
    value: user.email,
    icon: "compost",
    fieldColor: "grey-3",
    labelColor: "teal",
  },
]);

const userInitials = computed(() => {
  if (!user.name) return "";

  return user.name
    .split(" ")
    .map((n) => n.charAt(0))
    .join("")
    .toUpperCase();
});

const editUserWork = () => {
  router.push({ name: "edit-profile-page" });
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
