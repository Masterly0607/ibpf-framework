<template>
  <div id="filter-function">
    <q-btn
      flat
      dense
      color="primary"
      icon="mdi-filter-outline"
      @click="drawerRight = !drawerRight"
    />

    <q-drawer
      side="right"
      :width="350"
      :breakpoint="500"
      overlay
      bordered
      v-model="drawerRight"
      class="bg-grey-2"
    >
      <q-scroll-area class="fit q-pa-md">
        <div class="flex justify-between q-mb-md">
          <q-btn
            flat
            round
            color="red"
            icon="close"
            @click="drawerRight = !drawerRight"
          />
          <q-btn
            no-caps
            dense
            flat
            color="grey"
            label="Clear Fillter"
            @click="clearFilter()"
          />
        </div>

        <div class="column q-gutter-y-md">
          <q-card flat square>
            <q-card-section>
              <q-item class="q-pa-none">
                <q-item-section>
                  <q-item-label class="ibf-h11 text-weight-medium"
                    >Course type :</q-item-label
                  >
                </q-item-section>
              </q-item>
              <q-separator spaced />
              <q-option-group
                name="course_type"
                v-model="selectedProductType"
                :options="productTypeOptions"
                color="primary"
              />
            </q-card-section>
          </q-card>
          <q-card flat square>
            <q-card-section>
              <q-item class="q-pa-none">
                <q-item-section>
                  <q-item-label class="ibf-h11 text-weight-medium"
                    >Core Area:</q-item-label
                  >
                </q-item-section>
                <q-item-section side>
                  <q-avatar
                    rounded
                    size="25px"
                    :color="selectedCoreAreas.length ? 'primary' : 'grey-5'"
                    text-color="white"
                  >
                    {{ selectedCoreAreas.length }}
                  </q-avatar>
                </q-item-section>
              </q-item>

              <q-separator spaced />

              <q-option-group
                name="core_area"
                type="checkbox"
                v-model="selectedCoreAreas"
                :options="coreAreaOptions"
                color="primary"
              />
            </q-card-section>
          </q-card>

          <q-btn
            unelevated
            square
            color="primary"
            icon="search"
            label="View result"
          />
        </div>
      </q-scroll-area>
    </q-drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";
const drawerRight = ref(false);
const selectedProductType = ref("");
const productTypeOptions = [
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

const selectedCoreAreas = ref([]);

const coreAreaOptions = [
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

const clearFilter = () => {
  selectedCoreAreas.value = [];
  selectedProductType.value = "";
};
</script>
