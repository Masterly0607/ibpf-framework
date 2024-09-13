<template>
  <q-page padding class="ibf-container-1200" id="edit-user-profile">
    <div>
      <q-card flat bordered square>
        <q-card-section>
          <!-- <div> -->
          <div class="row justify-between">
            <span class="ibf-h9 text-weight-bold text-primary q-pa-sm">
              Update Work Information
            </span>
          </div>

          <q-separator spaced color="grey-3" />

          <div class="q-pa-md">
            <q-form
              ref="dateFormRef"
              @submit="validate()"
              @reset="resetValidation()"
              class="q-gutter-y-md"
            >
              <div class="row q-col-gutter-md">
                <div
                  v-for="(field, index) in fields"
                  :key="index"
                  class="col-6 q-gutter-xs"
                >
                  <div class="ibf-h11 text-weight-medium text-grey-6">
                    {{ field.label }}
                  </div>
                  <q-select
                    v-if="field.type === 'select'"
                    :class="field.class"
                    outlined
                    :name="field.name"
                    :label="field.label"
                    :options="field.options"
                    v-model="field.value"
                    @update:model-value="updateField(field)"
                    label-color="grey-6"
                  />
                  <q-input
                    v-else-if="field.type === 'input'"
                    :class="field.class"
                    :name="field.name"
                    :label="field.label"
                    v-model="field.value"
                    outlined
                    clearable
                    :disabled="field.disabled"
                    label-color="grey-6"
                  />
                </div>
              </div>

              <!-- button submit or reset -->
              <div align="right">
                <q-btn
                  label="Cancel"
                  type="reset"
                  @click="onReset"
                  color="grey"
                  flat
                />
                <q-btn
                  flat
                  label="Save"
                  @click="validate"
                  type="submit"
                  color="primary"
                />
              </div>
            </q-form>
          </div>

          <!-- <div class="q-pa-md">
            <q-form
              ref="dateFormRef"
              @submit="validate()"
              @reset="resetValidation()"
              class="q-gutter-y-md"
            >
              <div class="row q-col-gutter-md">
                <div class="col-6 q-gutter-xs">
                  <div class="ibf-h11 text-weight-medium text-grey-6">
                    BFI Name
                  </div>
                  <q-select
                    class="ibf-h11"
                    outlined
                    name="BFIs"
                    label="Your bfis"
                    transition-show="jump-up"
                    transition-hide="jump-up"
                    v-model="user.bfis[0].name"
                    @update:model-value="user.bfis[0].name"
                    :options="options"
                    label-color="grey-6"
                  />
                </div>
                <div class="col-6">
                  <div class="ibf-h10 text-grey-7">Role</div>
                  <q-select
                    class="text-weight-bold text-primary ibf-h10"
                    disabled
                    outlined
                    name="role"
                    label="Your role"
                    v-model="roles[0]"
                    label-color="grey-6"
                  >
                  </q-select>
                </div>
              </div>

              <div class="row q-col-gutter-x-md">
                <div class="col-6">
                  <div class="ibf-h10 text-grey-7">
                    Position
                  </div>
                  <q-select
                    class="ibf-h10"
                    outlined
                    name="Position"
                    label="Your position"
                    transition-show="jump-up"
                    transition-hide="jump-up"
                    v-model="position"
                    @update:model-value="position"
                    :options="options2"
                    label-color="grey-6"
                  />
                </div>

                <div class="col-6">
                  <div class="ibf-h10 text-grey-7">Email Address (Work)</div>
                  <q-input
                    class="ibf-h10"
                    disable
                    name="email"
                    label="Your company name"
                    v-model="user.email"
                    outlined
                    clearable
                    label-color="grey-6"
                  />
                </div>
              </div>

              <div align="right">
                <q-btn
                  label="Cancel"
                  type="reset"
                  v-model="onReset"
                  color="grey"
                  flat
                />
                <q-btn
                  flat
                  label="Save"
                  @click="validate"
                  type="submit"
                  color="primary"
                />
              </div>
            </q-form>
          </div> -->

          <!-- </div> -->
        </q-card-section>
      </q-card>

      <preview-json :list="user"></preview-json>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useUserStore } from "src/stores/user-store";
import { useQuasar } from "quasar";

const userStore = useUserStore();
const user = ref(userStore.getUser);
const roles = ref(userStore.getRoles);

const position = ref("Accountant");
// const user = userStore.getUser;
// const user = computed(() => userStore.getUser);
// const roles = userStore.getRoles;

const $q = useQuasar();
const dateFormRef = ref(null);
const emits = defineEmits(["form:success", "form:update"]);

const fields = ref([
  {
    label: "BFI Name",
    type: "select",
    value: user.value.bfis[0].name,
    options: ["ACLEDA", "ABA", "Vattanak", "Institut of Banking & Finance"],
    name: "BFIs",
    class: "ibf-h11",
  },
  {
    label: "Role",
    type: "select",
    value: roles.value[0],
    // options: ["Manager", "Employee", "Admin"],
    name: "role",
    class: "text-weight-bold text-primary ibf-h11",
    disable: true,
  },
  {
    label: "Position",
    type: "select",
    value: position.value,
    options: ["Software Engineer", "Accountant", "HR", "Marketing", "Sales"],
    name: "position",
    class: "ibf-h11",
  },
  {
    label: "Email Address (Work)",
    type: "input",
    value: user.value.email,
    name: "email",
    class: "ibf-h11",
    disabled: true,
  },
]);

const onReset = () => {
  console.log("Reseted");
};

// const validate = () => {
//   authFormRef.value.validate().then((success) => {
//     if (success) {
//       login();
//     } else {
//       $q.notify({
//         message: "Check the username and password again",
//         position: "top-right",
//         type: "negative",
//       });
//     }
//   });
// };

const validate = () => {
  dateFormRef.value.validate().then((success) => {
    if (success) {
      onSave();
      emits("form:success");
    } else {
      $q.notify({
        message: "Check the username and password again",
        position: "top-right",
        type: "negative",
      });
    }
  });
};
const updateField = (field) => {
  emits("form:update", field);
};

const onSave = () => {
  if (
    user.value.bfis[0].name &&
    roles.value[0] &&
    position.value &&
    user.value.email
  ) {
    $q.notify({
      message: "Check the username and password again",
      position: "top-right",
      type: "green-4",
    });
    // $q.notify({
    //   color: "green-4",
    //   textColor: "white",
    //   icon: "cloud_done",
    //   message: "Form submitted successfully!",
    // });

    // Emit the updated form data back to ProfilePage
    emits("form:update", {
      bfis: user.value.bfis[0].name,
      role: roles.value[0],
      position: position.value,
      email: user.value.email,
    });
  } else {
    $q.notify({
      color: "red-5",
      textColor: "white",
      icon: "warning",
      message: "Failed to submit, please check the fields.",
    });
  }
};

const resetValidation = () => {
  dateFormRef.value.resetValidation();
};

// const getBfiName = computed({
//   get() {
//     return user.value.bfis[0].name ? user.value.bfis[0].name : "N/A";
//   },
//   set(value) {
//     if (user.value.bfis[0].name) {
//       user.value.bfis[0].name = value;
//     }
//   }
// });

const options = ["ACLEDA", "ABA", "Vattanak", "Institut of Banking & Finance"];

// const saveUserWork = () => {
//   if (
//     user.value &&
//     user.value.bfis[0].name &&
//     roles[0] &&
//     position.value &&
//     user.value.email
//   ) {
//   } else {
//     console.error("User or customer data is missing");
//   }
// };

// const onSubmit = (evt) => {
//   const formData = new FormData(evt.target);
//   const data = [];

//   for (const [name, value] of formData.entries()) {
//     data.push({
//       name,
//       value,
//     });
//   }

//   submitResult.value = data;
// };

onMounted(() => {
  const user = userStore.getUser;
});

// const fetchDataFromApi = async () => {
//   try {
//     const response = await axios.get("https://api.example.com/data");
//     dataFromApi.value = response.data;
//   } catch (error) {
//     console.error("Error fetching data from API:", error);
//   }
// };
</script>
