<template>
  <q-page padding max-width="100%">
    <div class="ibf-container-1200">
      <div>
        <div class="ibf-h8 text-bold">Fillter course</div>
      </div>
      <div class="q-gutter-sm">
        <q-form @submit="onSubmit">
          <div class="rounded-borders row" :class="$q.dark.isActive ? '' : ''">
            <div class="col-6 q-py-sm">
              <q-option-group
                name="preferred_genre"
                v-model="preferred"
                :options="options"
                color="primary"
                inline
              />
            </div>
            <div class="col-6 q-py-xs" align="right">
              <q-select
                outlined
                v-model="model"
                multiple
                :options="options1"
                label="Select options"
                color="primary"
                style="width: 250px"
              />
            </div>
          </div>

          <!-- <div>
            <q-btn label="Submit" type="submit" color="primary" />
          </div> -->
        </q-form>

        <q-card
          v-if="submitResult.length > 0"
          flat
          bordered
          class="q-mt-md"
          :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'"
        >
          <q-card-section
            >Submitted form contains the following formData (key =
            value):</q-card-section
          >
          <q-card-section class="row q-gutter-sm items-center">
            <div
              v-for="(item, index) in submitResult"
              :key="index"
              class="q-px-sm q-py-xs bg-grey-8 text-white rounded-borders text-center text-no-wrap"
            >
              {{ item.name }} = {{ item.value }}
            </div>
          </q-card-section>
          <q-space />
        </q-card>
      </div>

      <q-separator />

      <div class="q-py-md q-gutter-md">
        <div class="ibf-h8">View Courses</div>
      </div>

      <div class="row q-col-gutter-md q-py-md">
        <div class="col-12 col-sm-6 col-md-3">
          <q-card square flat bordered class="my-card">
            <img src="https://cdn.quasar.dev/img/mountains.jpg" />
            <q-card-section>
              <div class="text-subtitle2">COURSE</div>
              <div class="ibf-h9">
                {{ data[0].title }}
              </div>
            </q-card-section>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <q-card square flat bordered class="my-card">
            <img src="https://cdn.quasar.dev/img/mountains.jpg" />
            <q-card-section>
              <div class="ibf-h9">
                {{ data[0].title }}
              </div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <q-card square flat bordered class="my-card">
            <img src="https://cdn.quasar.dev/img/mountains.jpg" />
            <q-card-section>
              <div class="ibf-h9">
                {{ data[0].title }}
              </div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <q-card square flat bordered class="my-card">
            <img src="https://cdn.quasar.dev/img/mountains.jpg" />
            <q-card-section>
              <div class="ibf-h9">
                {{ data[0].title }}
              </div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const submitResult = ref([]);

const preferred = ref("IC");
const accepted = ref([]);
const model = ref(null);

const options = [
  {
    label: "International Certification",
    value: "IC",
  },
  {
    label: "Local Certification",
    value: "LC",
  },
  {
    label: "Training Courses",
    value: "TC",
  },
];
const onSubmit = (evt) => {
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

const options1 = [
  "Analytical and Critical Thinking Skills",
  "Audit",
  "Branch Management",
  "Budgeting and Forecasting",
  "Communication Excellence",
  "Corporate Finance",
  "Corporate Governance",
  "Credit",
  "Critical Thinking and Problem-Solving Skills",
  "Digital Banking",
  // "Effective Customer Service and Relationship Management",
  "Effective Customer Service",
  "Effective and Practical Fraud Management",
  "Ethics",
  "HR",
  "IBF Game",
  "IT",
  "Legal Remedies for Loan Recovery Management",
  "Managing Customer Experiences",
  "Project Management",
  "Risk",
  "Sustainable Finance",
  "Trade Finance",
];

//
const data = ref([
  {
    title: "Our Changing Planet",
  },
]);
</script>
