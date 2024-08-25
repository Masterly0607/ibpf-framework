<template>
    <q-page padding class="ibf-container-1400">
        <q-heading-1 icon="mdi-book-open" title="My Learning" subtitle="All your courses" />
        <q-separator spaced />

        <q-tabs v-model="tab" class="text-grey" inline-label narrow-indicator active-color="primary" align="justify">
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
                                <q-linear-progress :value="10" rounded color="grey-4" track-color="orange"
                                    class="q-mt-sm" />

                                <div class="flex justify-between">
                                    <span class="text-grey-6 text-weight-medium">Progress</span>
                                    10%
                                </div>
                            </template>

                            <template #labels>

                                <div class="row q-gutter-x-md q-mt-md">
                                    <icon-label icon="mdi-earth" title="Type" />

                                    <icon-label icon="mdi-checkbox-blank-badge-outline" title="Core Area" />
                                </div>

                            </template>

                            <template #continue_btn v-if="item.payment_status === 'paid'">
                                <q-btn flat color="secondary" label="Continue" no-caps icon="mdi-arrow-right-thin"
                                    @click="
                                        item.payment_status !== 'paid'
                                            ? null
                                            : continueLearning(
                                                item.course_version,
                                                item.course.record
                                            )
                                        ">
                                </q-btn>
                            </template>

                            <template #payment_status v-else>
                                <div class="text-capitalize text-orange-8 text-weight-medium">
                                    <q-icon size="sm" color="green" name="mdi-cash" class="q-mr-xs" />
                                    {{ item.payment_status }}
                                </div>
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

        <section>
            <preview-json :list="orderItems"></preview-json>
        </section>
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

const continueLearning = (course_version, payload) => {
    const version = course_version;
    const all_versions = payload.linkage;
    const target_version = version
        ? all_versions.find((el) => el.version === version)
        : all_versions[all_versions.length - 1]; // if course_version is null or empty take the original one.

    if (target_version) {
        const { ulid, SK } = target_version;
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
