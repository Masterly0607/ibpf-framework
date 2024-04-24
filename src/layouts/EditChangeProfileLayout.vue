<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal bordered>
      <q-toolbar>
        <q-toolbar-title>
          <div>
            <q-btn flat label="Back" @click="backToProfile" />
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
import { computed } from "vue";
import { useRouter } from "vue-router";

const frameworkStore = useFrameworkStore();
const router = useRouter();
const { framework } = storeToRefs(frameworkStore);

const computedBgColor = computed(
  () => `bg-${framework.value.color || "primary"}`
);

const backToProfile = () => {
  router.push({ name: "edit-profile" });
};
</script>
