<template>
  <div class="column q-gutter-md q-mt-sm">
    <q-card bordered flat square v-for="cartItem in 4" :key="cartItem">
      <q-card-section class="q-pa-xs">
        <q-item class="q-px-sm">
          <q-item-section side top>
            <q-skeleton height="20px" width="20px" square />
          </q-item-section>
          <q-item-section>
            <div class="row q-gutter-x-sm">
              <div class="col-12 col-md-2">
                <q-skeleton height="130px" width="95%" square />
              </div>

              <div class="col-12 col-md">
                <q-item-label>
                  <q-skeleton type="text" class="text-subtitle1" />
                </q-item-label>

                <q-item-label>
                  <q-skeleton
                    type="text"
                    class="text-subtitle2"
                    animation="fade"
                  />
                  <q-skeleton
                    type="text"
                    width="50%"
                    class="text-subtitle2"
                    animation="fade"
                  />
                </q-item-label>

                <div class="q-mt-sm">
                  <q-skeleton height="15px" width="50px" square />
                </div>

                <div class="q-mt-sm">
                  <q-skeleton height="15px" width="50px" square />
                </div>
              </div>
            </div>
          </q-item-section>

          <q-item-section side top>
            <q-skeleton height="20px" width="40px" square />
          </q-item-section>
        </q-item>
      </q-card-section>
    </q-card>
  </div>
</template>
