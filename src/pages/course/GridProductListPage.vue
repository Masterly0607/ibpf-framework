<template>
  <q-page padding>
    <div class="ibf-container-1200">
      <div class="q-gutter-y-lg">
        <q-form @submit="onSubmit">
          <!-- Search product -->
          <div class="row items-center q-gutter-sm">
            <q-input
              class="col"
              filled
              square
              v-model="keyword"
              placeholder="Search for IBF products"
            >
              <template v-slot:append>
                <q-btn flat round @click="searchProduct">
                  <q-icon name="search" />
                </q-btn>
              </template>
            </q-input>

            <filter-product
              @product:filter="handleProductFilter"
            ></filter-product>
          </div>
        </q-form>

        <div>
          <div class="row justify-between items-center">
            <div class="ibf-h8 text-weight-bold">New & Feature courses</div>
            <div>
              <q-btn
                flat
                dense
                color="primary"
                icon="grid_view"
                aria-label="Submit"
                :to="{ name: 'product-list-page' }"
              />
              <q-btn
                flat
                dense
                color="black-6"
                icon="view_list"
                aria-label="Submit"
                :to="{ name: 'grid-product-page' }"
              />
            </div>
          </div>
          <q-separator spaced />
        </div>
      </div>

      <!-- skeleton list -->
      <section v-if="isLoading" class="row q-col-gutter-md q-py-md">
        <div v-for="i in 4" :key="i" class="col-12 col-sm-6 col-md-3">
          <product-card-skeleton />
        </div>
      </section>

      <div class="column q-gutter-y-lg">
        <q-card class="" v-for="(itemEvent, index) in eventData" :key="index">
          <!-- <img :src="data.thumbnail" height="200px" /> -->
          <q-card-section>
            <div class="row q-col-gutter-md">
              <div class="col-12 col-sm-12 col-md-3">
                <img
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                  width="90%"
                  height="140px"
                />
              </div>
              <div class="col-12 col-md-9">
                <div class="ibf-h8 ellipsis-2-lines text-weight-medium">
                  {{ itemEvent.title }}
                </div>
                <div class="text-grey-8 text-weight-light multi-line-ellipsis">
                  {{ itemEvent.subtitle }}
                </div>

                <div class="text-grey-8 text-weight-light multi-line-ellipsis">
                  Join with us at paragon
                </div>
                <div class="ibf-h11 text-grey-6 q-pt-xl">
                  Date:
                  <span class="ibf-h11 text-negative text-bold"
                    >03-05-2024
                  </span>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
const eventData = ref([
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
  // {
  //   id: 3,
  //   title: "Our Changing Planet",
  //   subtitle: "Starts 12th June 2021",
  // },
  // {
  //   id: 4,
  //   title: "Authentic Leadership",
  //   subtitle: "by John Doe",
  // },
]);
</script>
