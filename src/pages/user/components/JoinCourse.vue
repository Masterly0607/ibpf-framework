<template>
  <section>
    <q-card square class="ibf-card-2">
      <q-card-section class="q-py-xs">
        <div class="flex justify-between">
          <q-heading-4>
            <template #icon>
              <q-icon color="primary" name="mdi-book-open-page-variant" />
            </template>
            <template #title> Courses </template>
          </q-heading-4>

          <!-- button join course -->
          <div class="q-py-sm">
            <q-btn
              outline
              text-color="primary"
              icon="mdi-account-group"
              :label="drawer ? 'Close' : 'Join Code'"
              no-caps
              @click="toggleDrawer"
            />
          </div>
        </div>
      </q-card-section>

      <q-separator />

      <!-- Search access course -->
      <q-card-section>
        <q-form v-if="drawer" @submit="onSubmit" class="q-gutter-y-xs">
          <div align="right">
            <q-btn
              no-caps
              dense
              flat
              color="grey"
              label="Clear search"
              @click="clearSearch"
            />
          </div>
          <div class="row items-center q-gutter-sm">
            <q-input
              class="col"
              outlined
              v-model="findCode"
              placeholder="Find the access code in here..."
            >
              <template v-slot:append>
                <q-btn flat round @click="search">
                  <q-icon name="search" />
                </q-btn>
              </template>
            </q-input>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </section>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(false);
const findCode = ref("");
const accessCodes = ref(["ABC123", "DEF456", "GHI789"]);
const filteredCodes = ref([]);

const onSubmit = () => {
  console.log("Submitted");
};

const search = () => {
  if (findCode.value.trim() === "") {
    filteredCodes.value = [];
  } else {
    filteredCodes.value = accessCodes.value.filter((code) =>
      code.toLowerCase().includes(findCode.value.toLowerCase())
    );
  }
};

const clearSearch = () => {
  findCode.value = "";
  filteredCodes.value = [];
};
const toggleDrawer = () => {
  drawer.value = !drawer.value;
  clearSearch(); // Clear search when drawer is closed
};
</script>
