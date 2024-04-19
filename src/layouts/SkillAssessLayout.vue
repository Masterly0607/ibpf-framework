<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal bordered :class="['text-white', computedBgColor]">
      <q-toolbar>
        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar> -->
          Skill Assessment
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

const frameworkStore = useFrameworkStore();

const { framework } = storeToRefs(frameworkStore);

const computedBgColor = computed(
  () => `bg-${framework.value.color || "primary"}`
);
</script>
