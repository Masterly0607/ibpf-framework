<template>
  <q-page id="edit-user-profile">
    <q-page-container class="ibf-container-1100">
      <div class="q-pa-md" style="max-width: 100%">
        <q-card bordered>
          <q-card-section>
            <div square bordered class="col-12 col-sm-8 col-md-8">
              <div class="ibf-h7 text-weight-bold q-pa-md" align="center">
                Edit Work
              </div>

              <div class="q-pa-md">
                <q-form @submit="onSave" @reset="onReset" class="q-gutter-y-md">
                  <div class="row q-col-gutter-md">
                    <div class="col-6">
                      <div class="ibf-h10 text-weight-bold">
                        BFI Name
                        <q-select class="ibf-h10" outlined name="BFIs" label="Your bfis" v-model="user.bfis[0].name"
                          :options="options" />
                        <!-- <q-select outlined name="BFIs" label="Your bfis"
                          :v-model="user.bfis ? user.bfis[0].name : 'N/A'" :options="options"
                          /> -->
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="ibf-h10 text-weight-bold">
                        Role
                        <q-select class="text-weight-bold text-primary ibf-h10" disabled outlined name="role"
                          label="Your role" v-model="roles[0]">
                        </q-select>
                      </div>
                    </div>
                  </div>

                  <div class="row q-col-gutter-x-md">
                    <div class="col-6">
                      <div class="ibf-h10 text-weight-bold">
                        Position
                        <q-input class="ibf-h10" name="job" v-model="position" label="Your position" outlined
                          clearable />
                      </div>
                    </div>

                    <div class="col-6">
                      <div class="ibf-h10 text-weight-bold">
                        Email Address (Work)
                        <q-input class="ibf-h10" disable name="email" label="Your company name" v-model="user.email"
                          outlined clearable />
                      </div>
                    </div>
                  </div>

                  <!-- <div align="right">
                    <q-btn label="Cancel" type="reset" v-model="onReset" color="grey" flat class="q-ml-sm" />
                    <q-btn flat label="Save" v-model="onResult" type="submit" color="primary" />
                  </div> -->

                  <!-- button submit or reset -->
                  <div align="right">
                    <q-btn label="Cancel" type="reset" color="grey" flat />
                    <q-btn flat label="Save" v-model="onSave" type="submit" color="primary" />
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

const industry = ref("Digital");
const role = ref("Student");
const position = ref("Accountant");
const company = ref("ABA Bank");

const userStore = useUserStore();
const user = userStore.getUser;
const roles = userStore.getRoles;

const $q = useQuasar();
const submitResult = ref([]);
const onReset = () => {
  console.log("Reseted");
};

// const getBfiName = computed({
//   get() {
//     return user.bfis ? user.bfis[0].name : "N/A";
//   },
//   set(value) {
//     if (user.bfis) {
//       user.bfis[0].name = value;
//     }
//   }
// });

const options = [
  "ACLEDA", "ABA", "Vattanak", "Institut of Banking & Finance"
];

const onSave = () => {
  console.log('Form submitted successfully', user.value)
  if (user.value !== true) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'wearning',
      message: 'Failed to submit'
    })
  } else {
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: 'Submitted'
    })
  }
}

// onMounted(async () => {
//   await fetchDataFromApi();
// });

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
