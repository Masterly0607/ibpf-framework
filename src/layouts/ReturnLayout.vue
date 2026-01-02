<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-white q-py-md">
      <q-toolbar class="ibf-container-1200-no-margin">
        <q-toolbar-title>
          <div>
            <q-btn
              outline
              square
              icon="mdi-chevron-left"
              color="grey-7"
              no-caps
              label="Back"
              @click="returnBtn"
            />
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useFrameworkStore } from "src/stores/framework-store";
import { useRouter } from "vue-router";

const frameworkStore = useFrameworkStore();
const router = useRouter();
const { framework } = storeToRefs(frameworkStore);

const returnBtn = () => {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push({ name: "home" });
  }
};

//const computedBgColor = computed(() => `bg-${framework.value.color || 'primary'}`);
</script>
