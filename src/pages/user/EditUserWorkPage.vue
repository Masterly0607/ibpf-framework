<template>
  <q-page id="edit-user-profile">
    <q-page-container class="ibf-container-1100">
      <div class="q-pa-md" style="max-width: 100%">
        <q-card bordered>
          <q-card-section>
            <div square bordered class="col-12 col-sm-8 col-md-8">
              <!-- <q-card>
              <q-card-section> -->
              <div class="ibf-h7 text-weight-bold q-pa-md" align="center">
                Edit Work
              </div>
              <div class="q-pa-md">
                <q-form
                  @submit="onResult"
                  @reset="onReset"
                  class="q-gutter-y-md"
                >
                  <div class="row q-col-gutter-md">
                    <div class="col-6">
                      <div class="ibf-h10 text-weight-bold">
                        Industry
                        <q-select
                          outlined
                          name="industry"
                          label="Your industry"
                          v-model="industry"
                          :options="options"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="ibf-h10 text-weight-bold">
                        Role
                        <q-select
                          disabled
                          outlined
                          name="role"
                          label="Your role"
                          v-model="role"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row q-col-gutter-x-md">
                    <div class="col-6">
                      <div class="ibf-h10 text-weight-bold">
                        Job Title
                        <q-input
                          name="job"
                          v-model="job"
                          label="Your job title"
                          outlined
                          clearable
                        />
                      </div>
                    </div>

                    <div class="col-6">
                      <div class="ibf-h10 text-weight-bold">
                        Company Name
                        <q-input
                          name="company"
                          v-model="userStore.user.bfi.name"
                          label="Your company name"
                          outlined
                          clearable
                        />
                      </div>
                    </div>
                  </div>

                  <div align="right">
                    <q-btn
                      label="Cancel"
                      type="reset"
                      v-model="onReset"
                      color="grey"
                      flat
                      class="q-ml-sm"
                    />
                    <q-btn
                      flat
                      label="Save"
                      v-model="onResult"
                      type="submit"
                      color="primary"
                    />
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
      </div>
      <!-- <preview-json :list="userStore"></preview-json> -->
    </q-page-container>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
// import axios from "axios";
import { useUserStore } from "src/stores/user-store";

const industry = ref("Digital");
const role = ref("Student");
const job = ref("Accountant");
const company = ref("ABA Bank");

const userStore = useUserStore();

const submitResult = ref([]);
const onReset = () => {
  console.log("Reseted");
};
const onResult = (evt) => {
  const formData = new FormData(evt.target);
  const data = [];
  for (const [name, value] of formData.entries()) {
    data.push({
      name,
      value,
    });
  }
  submitResult.value = data;
};

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

const options = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];

const options2 = [
  "Software Engineer",
  "Accountant",
  "HR",
  "Marketing",
  "Sales",
];
</script>
