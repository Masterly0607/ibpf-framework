<template>
  <section id="my-learning">
    <q-card square class="ibf-card-3">
      <q-card-section class="q-py-xs">
        <div class="flex justify-between">
          <q-heading-4>
            <template #icon>
              <q-icon color="primary" name="mdi-school-outline" />
            </template>
            <template #title> My Learning </template>
          </q-heading-4>

          <q-btn
            flat
            text-color="primary"
            no-caps
            dense
            square
            icon-right="mdi-arrow-right-thin"
            label="More"
            :to="{ name: 'my-learning-page' }"
          />
        </div>
      </q-card-section>

      <q-separator />

      <q-card-section class="q-pa-lg">
        <div class="row q-col-gutter-lg">
          <div class="col-12 col-md-4">
            <q-card class="ibf-card-1">
              <q-card-section class="q-py-lg" align="center">
                <div class="ibf-h10 text-weight-medium text-grey-8 q-py-sm">
                  Course in <br />
                  progress
                </div>
                <div class="ibf-h3 text-primary q-pa-sm">3</div>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-4">
            <q-card class="ibf-card-1">
              <q-card-section class="q-py-lg" align="center">
                <div class="ibf-h10 text-weight-medium text-grey-8 q-py-sm">
                  Completed <br />
                  courses
                </div>
                <div class="ibf-h3 text-primary q-pa-sm">5</div>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-4">
            <q-card class="ibf-card-1">
              <q-card-section class="q-py-lg" align="center">
                <div class="ibf-h10 text-weight-medium text-grey-8 q-py-sm">
                  CPD <br />
                  Courses
                </div>
                <div class="ibf-h3 text-primary q-pa-sm">0</div>
              </q-card-section>
            </q-card>
          </div>

          <!-- <div square bordered class="col-12 col-md-4">
            <q-card flat bordered>
              <q-card-section align="center">
                <div class="text-h6 q-pa-md">
                  CPD <br />
                  Courses
                </div>
                <div class="ibf-h1 text-primary q-pa-md">0</div>
              </q-card-section>
            </q-card>
          </div> -->
        </div>
      </q-card-section>
    </q-card>
  </section>
</template>
