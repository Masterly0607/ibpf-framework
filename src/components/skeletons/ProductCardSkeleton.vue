<template>
  <q-card square flat bordered>
    <q-skeleton height="200px" width="100%" square />

    <q-card-section class="q-pa-sm">
      <div>
        <q-skeleton type="text" />
      </div>
      <div class="q-py-xs">
        <q-skeleton type="text" />
      </div>
    </q-card-section>

    <q-card-actions class="" align="between">
      <div>
        <q-skeleton height="20px" width="50px" />
      </div>

      <div class="row q-gutter-x-sm">
        <q-skeleton height="20px" width="40px" />
        <q-skeleton height="20px" width="40px" />
      </div>
    </q-card-actions>
  </q-card>
</template>
