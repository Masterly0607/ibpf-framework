<template>
  <q-page>
    <div>
      <q-skeleton height="450px" square></q-skeleton>
    </div>

    <div class="ibf-container-1400 q-pa-md">
      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-4 order-md-last">
          <q-card flat class="ibf-card-2">
            <q-card-section>
              <q-skeleton square></q-skeleton>
            </q-card-section>
            <q-separator spaced inset />
            <q-card-section class="q-gutter-md">
              <q-skeleton square></q-skeleton>

              <q-skeleton square></q-skeleton>

              <q-skeleton square></q-skeleton>
            </q-card-section>

            <q-separator spaced inset />

            <q-card-section>
              <q-skeleton square></q-skeleton>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-8">
          <q-card flat class="ibf-card-2">
            <q-card-section class="q-gutter-md">
              <q-skeleton type="text" square width="50%" />
              <q-skeleton type="text" square />
              <q-skeleton type="text" square />
              <q-skeleton type="text" square />
              <q-skeleton type="text" square />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>
