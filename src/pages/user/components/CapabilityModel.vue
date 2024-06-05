<template>
  <section id="capability-model">
    <q-card square>
      <div class="q-pa-md ibf-h8 text-weight-bold">Capability Model</div>
      <q-card-section>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6">
            <q-card square flat bordered>
              <q-card-section>
                <div class="ibf-h8 q-py-sm">Self Assessment</div>
                <div class="text-subtitle2 text-grey-8">
                  Start by measuring your skills and <br />
                  knowledge.
                </div>
              </q-card-section>
              <q-separator />
              <div class="q-pa-sm" bordered align="right">
                <q-btn
                  color="primary"
                  flat
                  no-caps
                  label="Begin the Assessment"
                />
              </div>
            </q-card>
          </div>

          <div class="col-12 col-md-6">
            <q-card square flat bordered>
              <q-card-section>
                <div class="ibf-h8 q-py-sm">TNA</div>
                <div class="text-subtitle2 text-grey-8">
                  Choose what and how you learn to <br />
                  help you develop in your career.
                </div>
              </q-card-section>
              <q-separator />
              <div class="q-pa-sm" bordered align="right">
                <q-btn color="primary" flat no-caps label="Begin the TNA" />
              </div>
            </q-card>
          </div>
        </div>
      </q-card-section>
      <div class="q-pa-sm card-bg" bordered align="right">
        <q-btn flat no-caps label="View Skill Assessment" />
      </div>
    </q-card>
  </section>
</template>

<script setup></script>
