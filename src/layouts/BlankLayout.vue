<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: 0;
}

.login-image {
  z-index: 1;
}

.bg-auth {
  background-color: #f0f4f3;
  /* background-image: url("src/assets/images/Cloudy.svg"); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
