<template>
  <div class="row q-col-gutter-lg">
    <div
      class="col-12 col-md-4"
      v-for="(itemEvent, index) in eventData"
      :key="index"
    >
      <q-card class="column ibf-card-10" square style="height: 500px">
        
        <q-img fit="cover" :src="itemEvent.URL" width="100%" height="230px" />
        <!-- <img :src="itemEvent.URL" ratio="1" /> -->
        <q-card-section>
          <div class="text-grey-6 text-weight-medium ibf-h10">
            {{ itemEvent.date }}
          </div>
          <div class="q-gutter-md q-mt-xs">
            <q-chip
              class="bg-primary text-white text-capitalize"
              label="Fuchsia"
              clickable
            />
            <q-chip
              class="bg-primary text-white text-capitalize"
              label="Fuchsia"
              clickable
            />
            <q-chip
              class="bg-primary text-white text-capitalize"
              label="Fuchsia"
              clickable
            />
          </div>
          <div
            class="q-mt-lg text-weight-medium text-grey-8 ibf-h10 ellipsis-3-lines"
          >
            {{ itemEvent.title }}
          </div>
        </q-card-section>

        <!-- q-space is placed between two buttons -->
        <q-space />

        <q-card-actions align="right">
          <q-btn
            flat
            icon-right="mdi-chevron-right"
            label="Learn More"
            color="grey-5"
            class="text-capitalize"
            size="md"
          />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const tab = ref("TabOne");
const eventData = ref([
  {
    id: 1,
    title:
      "Institute of Banking and Finance partnered with top universities to address skill gaps in the Cambodian financial sector ",
    date: "05-May-2024",
    location: "at IBF",
    // isActive: true,
    // router: "cart1",
    URL: "https://www.ibfkh.org/images/alter-ibf-image.jpg",
  },
  {
    id: 2,
    title: "Graduation Event",
    date: "13-June-2024",
    location: "At ",
    URL: "https://cdn.quasar.dev/img/mountains.jpg",
  },
  {
    id: 3,
    title: "Our Changing Planet",
    date: "12th June 2021",
    location: "at IBF",
    URL: "https://cdn.quasar.dev/img/parallax2.jpg",
  },
  // {
  //   id: 4,
  //   title: "Authentic Leadership",
  //   date: "by John Doe",
  // },
]);

const eventDetail = () => {
  router.push({ name: "event-detail-page" });
};
</script>

<style lang="scss" scoped>
.card-background-1 {
  background-color: #f2f2f2;
}
</style>
