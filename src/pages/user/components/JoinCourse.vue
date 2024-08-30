<template>
  <section id="my-learning">
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
          <div class="q-py-md">
            <q-btn outline text-color="primary" icon="mdi-account-group" label="Join Course" no-caps
              @click="drawer = !drawer" />
          </div>
        </div>
      </q-card-section>

      <q-separator />

      <!-- Search access course -->
      <q-card-section>
        <q-form v-if="drawer" @submit="onSubmit" class="q-gutter-y-sm">
          <q-btn no-caps dense flat color="grey" label="Clear search" @click="clearSearch()" />
          <div class="row items-center q-gutter-sm">
            <q-input class="col" outlined v-model="findCode" placeholder="Find the access code in here...">
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
const accessCodes = ref(['ABC123', 'DEF456', 'GHI789']);
const filteredCodes = ref([]);
const onSubmit = () => {
  console.log("Submitted");
};

const search = () => {
  if (findCode.value.trim() === '') {
    filteredCodes.value = [];
  } else {
    filteredCodes.value = accessCodes.value.filter(code =>
      code.toLowerCase().includes(findCode.value.toLowerCase())
    );
  }
};

const clearSearch = () => {
  findCode.value = '';
  filteredCodes.value = [];
};

</script>
