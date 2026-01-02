<template>
  <q-layout view="hHh lpR fFf">
    <!-- header -->
    <header-home></header-home>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- footer -->
    <footer-component></footer-component>
  </q-layout>
</template>

<script setup>
import HeaderHome from "src/components/HeaderHome.vue";
import FooterComponent from "src/components/FooterComponent.vue";
</script>
