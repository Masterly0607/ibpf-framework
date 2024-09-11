<template>
  <q-page id="edit-user-profile">
    <q-page-container class="ibf-container-1100">
      <div>
        <q-card bordered>
          <q-card-section>
            <div square bordered class="col-12 col-sm-8 col-md-8">
              <div class="ibf-h7 text-weight-bold q-pa-md text-grey-8">
                Edit Work
              </div>

              <div class="q-pa-md">
                <q-form ref="dateFormRef" @submit="validate()" @reset="resetValidation()" class="q-gutter-y-md">
                  <div class="row q-col-gutter-md">
                    <div class="col-6">
                      <div class="ibf-h10 text-grey-7">
                        BFI Name
                        <q-select class="ibf-h10" outlined name="BFIs" label="Your bfis" transition-show="jump-up"
                          transition-hide="jump-up" v-model="user.bfis[0].name" @update:model-value="user.bfis[0].name"
                          :options="options" 
                          label-color="grey-6"
                          />
                        <!-- <q-select class="ibf-h10" outlined name="BFIs" label="Your bfis" v-model="user.bfis[0].name"
                          :options="options" /> -->
                        <!-- <q-select outlined name="BFIs" label="Your bfis"
                          :v-model="user.bfis ? user.bfis[0].name : 'N/A'" :options="options"
                          /> -->
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="ibf-h10 text-grey-7">
                        Role
                        <q-select class="text-weight-bold text-primary ibf-h10" disabled outlined name="role"
                          label="Your role" v-model="roles[0]"    label-color="grey-6">
                          
                        </q-select>
                      </div>
                    </div>
                  </div>

                  <div class="row q-col-gutter-x-md">
                    <div class="col-6">
                      <div class="ibf-h10 text-grey-7">
                        Position
                        <q-select class="ibf-h10" outlined name="Position" label="Your position"
                          transition-show="jump-up" transition-hide="jump-up" v-model="position"
                          @update:model-value="position" :options="options2"    label-color="grey-6"/>
                        <!-- <q-input class="ibf-h10" name="job" v-model="position" label="Your position" outlined
                          clearable /> -->
                      </div>
                    </div>

                    <div class="col-6">
                      <div class="ibf-h10 text-grey-7">
                        Email Address (Work)
                        <q-input class="ibf-h10" disable name="email" label="Your company name" v-model="user.email"
                          outlined clearable    label-color="grey-6"/>
                      </div>
                    </div>
                  </div>

                  <!-- button submit or reset -->
                  <div align="right">
                    <q-btn label="Cancel" type="reset" v-model="onReset" color="grey" flat />
                    <q-btn flat label="Save" @click="validate" type="submit" color="primary" />
                  </div>
                </q-form>

                <!-- <q-card
                v-if="submitResult.length > 0"
                flat
                bordered
                class="q-mt-md"
                :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'"
              >
                <q-card-section>
                  Submitted form contains the following formData (key = value):
                </q-card-section>
                <q-separator />
                <q-card-section class="row q-gutter-sm items-center">
                  <div
                    v-for="(item, index) in submitResult"
                    :key="index"
                    class="q-px-sm q-py-xs bg-grey-8 text-white rounded-borders text-center text-no-wrap"
                  >
                    {{ item.name }} = {{ item.value }}
                  </div>
                </q-card-section>
              </q-card> -->

              </div>
            </div>
          </q-card-section>
        </q-card>

        <preview-json :list="user"></preview-json>
      </div>
    </q-page-container>
  </q-page>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useUserStore } from "src/stores/user-store";
import { useQuasar } from "quasar";

const position = ref("Accountant");

const userStore = useUserStore();
// const user = userStore.getUser;
const user = computed(() => userStore.getUser);
const roles = userStore.getRoles;

const $q = useQuasar();
const submitResult = ref([]);
const dateFormRef = ref(null);
const emits = defineEmits(["form:success"]);

const onReset = () => {
  console.log("Reseted");
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

const options = [
  "ACLEDA", "ABA", "Vattanak", "Institut of Banking & Finance"
];

const onSave = () => {
  if (user.value !== true) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'wearning',
      message: 'Failed to submit'
    })
    console.log(user.value);
  } else {
    // console.log('Form submitted successfully', user.value.bfis[0].name, roles[0], position, user.value.email);
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: 'Submitted'
    })
  }
}

const saveUserWork = () => {
  if (user.value && user.value.bfis[0].name && roles[0] && position.value && user.value.email) {
    // Your save logic
  } else {
    console.error('User or customer data is missing');
  }
};
// const saveUserWork = () => {
//   if (
//     user.value === "" ||
//     user.value === null
//   ) {
//     // regenerateProductId();
//   }
//   userStore.storeUser(user.value);
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

const validate = () => {
  dateFormRef.value.validate().then((success) => {
    if (success) {
      onSave();
      emits("form:success");
      console.log("Successfully");
    } else {
      console.log("Check the information again");
    }
  });
};

const resetValidation = () => {
  dateFormRef.value.resetValidation();
};

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

const options2 = [
  "Software Engineer",
  "Accountant",
  "HR",
  "Marketing",
  "Sales",
];
</script>
