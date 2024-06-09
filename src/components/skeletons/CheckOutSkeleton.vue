<template>
  <q-card-section>
    <div class="row q-col-gutter-xl">
      <div class="col-12 col-md-6">
        <div class="column q-gutter-y-md">
          <q-skeleton height="200px" width="100%" square />

          <q-skeleton height="200px" width="100%" square />
        </div>
      </div>

      <div class="col-12 col-md-6">
        <q-skeleton type="text" square />
        <q-skeleton type="text" width="60%" square />

        <q-separator spaced />

        <q-item v-for="item in 2" :key="item">
          <q-item-section top avatar>
            <q-skeleton type="circle" />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              <q-skeleton type="text" square />
            </q-item-label>
            <q-item-label>
              <q-skeleton type="text" width="60%" square />
            </q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-item-label>
              <q-skeleton type="QBadge" square />
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced />

        <div class="column q-gutter-y-md">
          <q-skeleton type="QBtn" width="100%" square />

          <q-skeleton type="QBtn" width="100%" square />
        </div>
      </div>
    </div>
  </q-card-section>
</template>
