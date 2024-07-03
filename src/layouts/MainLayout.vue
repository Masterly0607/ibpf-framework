<template>
  <q-layout view="hHh lpR fFf">
    <header-home></header-home>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import HeaderHome from "src/components/HeaderHome.vue";
</script>
