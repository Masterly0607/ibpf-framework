<template>
  <q-page padding>
    <div class="ibf-container-1400">
      <div class="q-gutter-sm">
        <q-form @submit="onSubmit">
          <!-- <div class="ibf-h8 text-bold">Fillter Course</div> -->
          <div :class="$q.dark.isActive ? '' : ''">
            <div class="row q-gutter-sm">
              <span class="ibf-h6 text-bold">Search Course</span>
              <q-input
                dense
                filled
                v-model="search"
                placeholder="Search"
                style="width: 76%; height: 0%"
              >
                <template v-slot:append>
                  <q-btn flat @click="onSearch">
                    <q-icon name="search" />
                  </q-btn>
                </template>
              </q-input>

              <q-btn
                dense
                flat
                color="primary"
                icon="grid_view"
                aria-label="Submit"
                @click="onClick"
              />
              <q-btn
                dense
                flat
                color="primary"
                icon="view_list"
                aria-label="Submit"
                @click="onClick"
              />
            </div>
          </div>

          <!-- Fillter Course -->
          <div class="rounded-borders col" :class="$q.dark.isActive ? '' : ''">
            <div class="row q-py-sm">
              <span class="col-6 text-bold ibf-h9">Fillter</span>
              <div class="col-6" align="right">
                <q-btn
                  no-caps
                  dense
                  flat
                  color="grey"
                  label="Clear Fillter"
                  @click="onClick"
                />
              </div>
            </div>

            <div class="col q-gutter-md">
              <q-card flat bordered class="q-pa-md row" style="max-width: 100%">
                <span class="q-py-sm ibf-h11 text-bold">Course Type : </span>
                <q-option-group
                  name="course_type"
                  v-model="preferred"
                  :options="options"
                  color="primary"
                  inline
                />
              </q-card>
              <q-card flat bordered class="row q-py-sm" style="max-width: 100%">
                <span class="ibf-h11 text-bold q-pa-md">Core area : </span>
                <q-select
                  class="q-ml-md"
                  name="core_area"
                  v-model="model"
                  multiple
                  :options="options1"
                  label="Select options"
                  color="negative"
                  style="width: 50%"
                  counter
                  hint="Core area counter"
                />
              </q-card>
            </div>
          </div>
        </q-form>

        <!-- Course List -->
        <div class="ibf-h8 text-bold q-py-md">New & Feature courses</div>
        <q-separator />

        <div class="row">
          <div
            v-for="index in inView.length"
            :key="index"
            :data-id="index - 1"
            class="example-item q-pa-sm"
            v-intersection="onIntersection"
          >
            <transition name="q-transition--scale">
              <q-card square bordered class="q-pa-md">
                <div class="text-h6">Card {{ index }}</div>
                <div class="text-subtitle2">{{ subtitle }}</div>
                <img
                  class="q-py-md"
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                  height="170px"
                />
                <div class="row">
                  <div class="col-5 ibf-h11">10 tasks</div>
                  <span class="col-7 ibf-h11" align="right">
                    Start on 25-May-24
                  </span>
                </div>

                <div class="row q-py-sm">
                  <div class="col-5 ibf-h11 q-py-sm">
                    Price:
                    <span class="ibf-h11 text-negative text-bold">US $120</span>
                  </div>

                  <div class="col-7" align="right">
                    <q-btn
                      flat
                      dense
                      icon="shopping_cart"
                      aria-label="profile"
                      @click="clickShoppingCart(index)"
                      :color="buttonShopping[index]"
                    />

                    <q-btn
                      flat
                      dense
                      icon="favorite"
                      @click="clickFavorite(index)"
                      :color="buttonFavoColors[index]"
                    />
                  </div>
                </div>
              </q-card>
            </transition>
          </div>
        </div>
        <q-card flat square>
          <q-btn
            outline
            no-caps
            unelevated
            color="primary"
            style="width: 100%; height: 100%"
            label="See more course"
            :to="{ name: '' }"
          />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const search = ref("");

const preferred = ref("IC");
const accepted = ref([]);
const model = ref(null);
const submitResult = ref([]);

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

const inView = ref(Array.from({ length: 8 }, () => false));

const onIntersection = (entry) => {
  const index = parseInt(entry.target.dataset.id, 10);
  setTimeout(() => {
    inView.value.splice(index, 1, entry.isIntersecting);
  }, 10);
};

const buttonFavoColors = ref(Array(10).fill("grey"));
const isFavoriteColored = ref(Array(10).fill("grey"));

const buttonShopping = ref(Array(10).fill("grey"));
const isShoppingColored = ref(Array(10).fill("grey"));

const clickFavorite = (index) => {
  isFavoriteColored.value[index] = !isFavoriteColored.value[index]
    ? "primary"
    : "grey";
  buttonFavoColors.value[index] = isFavoriteColored.value[index]
    ? "primary"
    : "grey";
};

const clickShoppingCart = (index) => {
  isShoppingColored.value[index] = !isShoppingColored.value[index]
    ? "primary"
    : "grey";
  buttonShopping.value[index] = isShoppingColored.value[index]
    ? "primary"
    : "grey";
};

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

const data = ref([
  {
    id: 1,
    title: "Authentic Leadership Authentic Leadership ",
    subtitle: "Authentic Leadership",
    isActive: true,
    router: "cart1",
  },
  {
    id: 2,
    title: "Audit and Assurance",
    subtitle: "Doe",
  },
  {
    id: 3,
    title: "Our Changing Planet",
    subtitle: "Starts 12th June 2021",
  },
  {
    id: 4,
    title: "Authentic Leadership",
    subtitle: "by John Doe",
  },
  {
    id: 5,
    title: "Our Changing Planet",
  },
  {
    id: 5,
    title: "Our Changing Planet",
  },
  {
    id: 5,
    title: "Our Changing Planet",
  },
]);
</script>

<style scoped>
.example-item {
  height: 330px;
  width: 300px;
}

.d-flex {
  display: flex;
}
.w-100 {
  width: 100%;
}
</style>
