<template>
  <section id="capability-model">
    <q-card square class="ibf-card-3">
      <q-card-section class="q-py-xs">
        <q-heading-4>
          <template #icon>
            <q-icon color="primary" name="mdi-chart-line" />
          </template>
          <template #title> Capability Model </template>
        </q-heading-4>
      </q-card-section>

      <q-separator />
      <q-card-section>
        <div class="row q-col-gutter-lg q-pa-sm">
          <div class="col-12 col-md-6">
            <q-card bordered square flat>
              <q-card-section>
                <div class="ibf-h9 text-weight-medium text-grey-8 q-py-xs">
                  Self Assessment
                </div>
                <div class="ibf-h11 text-grey-7 q-py-sm">
                  Start by measuring your skills and <br />
                  knowledge.
                </div>
                <q-separator spaced="10px" />
                <div class="q-pa-none" align="right">
                  <q-btn
                    flat
                    icon="mdi-account-question"
                    color="primary"
                    label="Begin the Assessment"
                    no-caps
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-6">
            <q-card bordered square flat>
              <q-card-section>
                <div class="ibf-h9 text-weight-medium text-grey-8 q-py-xs">
                  TNA
                </div>
                <div class="ibf-h11 text-grey-7 q-py-sm">
                  Choose what and how you learn to <br />
                  help you develop in your career.
                </div>
                <q-separator spaced="10px" />
                <div class="q-pa-none" align="right">
                  <q-btn
                    flat
                    icon="mdi-account-file-text"
                    color="primary"
                    label="Begin the TNA"
                    no-caps
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </section>
</template>

<script setup></script>
