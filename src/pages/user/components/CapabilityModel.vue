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
        <div class="row q-col-gutter-lg">
          <div class="col-12 col-md-6">
            <q-card square class="ibf-card-2">
              <q-card-section>
                <div class="ibf-h8 text-weight-medium q-py-sm">
                  Self Assessment
                </div>
                <div class="ibf-h11 text-grey-8">
                  Start by measuring your skills and <br />
                  knowledge.
                </div>
              </q-card-section>
              <q-separator />
              <q-card-actions align="right">
                <q-btn color="primary" flat no-caps label="Begin the assessment" />
              </q-card-actions>
            </q-card>
          </div>

          <div class="col-12 col-md-6">
            <q-card square class="ibf-card-2">
              <q-card-section>
                <div class="ibf-h8 text-weight-medium q-py-sm">TNA</div>
                <div class="ibf-h11 text-grey-8">
                  Choose what and how you learn to <br />
                  help you develop in your career.
                </div>
              </q-card-section>
              <q-separator />
              <q-card-actions align="right">
                <q-btn color="primary" flat no-caps label="Begin the TNA" />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </section>
</template>

<script setup></script>
