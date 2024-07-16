<template>
  <q-page padding class="ibf-container-1400">
    <q-heading-1
      icon="mdi-book-open"
      title="My Learning"
      subtitle="All your courses"
    />
    <q-separator spaced />

    <q-tabs
      v-model="tab"
      class="text-grey"
      inline-label
      narrow-indicator
      active-color="primary"
      align="justify"
    >
      <q-tab name="in-progress" icon="mdi-progress-alert" label="In Progress" />
      <q-tab name="finished" icon="mdi-check-circle-outline" label="Finished" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated class="bg-transparent">
      <q-tab-panel name="in-progress">
        <div class="q-gutter-y-md">
          <div v-for="item in orderItems" :key="item.id">
            <order-item-card>
              <template #image_url>
                <q-img class="rounded-borders" :src="item.course.thumbnail" />
              </template>
              <template #title> {{ item.course.title }} </template>
              <template #progress>
                <q-linear-progress
                  :value="10"
                  rounded
                  color="grey-4"
                  track-color="orange"
                  class="q-mt-sm"
                />

                <div class="flex justify-between">
                  <span class="text-grey-6 text-weight-medium">Progress</span>
                  10%
                </div>
              </template>
              <template #payment_status>
                <div class="text-capitalize">
                  <q-icon size="sm" name="mdi-cash" class="q-mr-xs" />
                  {{ item.payment_status }}
                </div>
              </template>

              <template #continue_btn>
                <q-btn
                  flat
                  color="primary"
                  @click="continueLearning(item.course.record)"
                >
                  Continue
                </q-btn>
              </template>
            </order-item-card>
          </div>
        </div>
      </q-tab-panel>
      <q-tab-panel name="finished">
        <div class="ibf-h10 text-grey-6 text-center">
          -- No items to display --
        </div>
      </q-tab-panel>
    </q-tab-panels>

    <!--<section>
      <preview-json :list="orderItems"></preview-json>
    </section>-->
  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar";
import orderItemCard from "src/pages/user/learning/components/OrderItemCard.vue";
import { useLearningStore } from "src/stores/learning-store";
import { computed, onMounted, ref } from "vue";
const tab = ref("in-progress");
const $q = useQuasar();
const learningStore = useLearningStore();
const orderItems = computed(() => learningStore.getOrderItems || []);
const serverFetchOrderItems = () => {
  learningStore.serverFetchOrderItems();
};

const continueLearning = (payload) => {
  if (payload) {
    const { ulid, SK } = payload.linkage;
    const endpoint = "https://elearning.ibfnxt.com/course";
    const slug = "/test-course/";
    const link = endpoint + slug + ulid + "/" + SK;

    window.open(link, "_blank").focus();
  } else {
    $q.notify({
      message: "No material yet",
      type: "warning",
      position: "top-right",
    });
  }
};

onMounted(() => {
  serverFetchOrderItems();
});
</script>
