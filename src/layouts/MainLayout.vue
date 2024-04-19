<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated reveal bordered class="bg-white text-black">
      <q-toolbar class="q-ma-sm">

        <img src="https://elearning.ibfnxt.com/img/IBF%20Logo%20No%20Red%20bg.7c241798.svg" height="50px" width="500px">

        <q-space />

        <q-toolbar class="text-header">
          <q-toolbar-title class="text-h8">
            Home
          </q-toolbar-title>
          <q-toolbar-title class="text-h8">
            Courses
          </q-toolbar-title>
          <q-toolbar-title class="text-h8">
            Events
          </q-toolbar-title>
          <q-toolbar-title class="text-h8">
            Assessments
          </q-toolbar-title>
          <q-toolbar-title class="text-h8">
            Enrol
          </q-toolbar-title>
          <q-toolbar-title class="text-h8">
            About
          </q-toolbar-title>

          <q-toolbar-title class="">
            <q-btn flat dense round icon="account_circle" aria-label="Profile" />
          </q-toolbar-title>
        </q-toolbar>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
</script>

<style scoped>
.text-header {
  font-size: 16px;
  color: black;
  text-align: center;
}

.text-h1 {
  font-size: 96px;
}

.text-h2 {
  font-size: 60px;
}

.text-h3 {
  font-size: 48px;
}

.text-h4 {
  font-size: 34px;
}

.text-h5 {
  font-size: 24px;
}

.text-h6 {
  font-size: 20px;
}

.text-h7 {
  font-size: 18px;
}

.text-h8 {
  font-size: 16px;
}
</style>
