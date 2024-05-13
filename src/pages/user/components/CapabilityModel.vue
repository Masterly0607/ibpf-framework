<template>
  <section id="capability-model">
    <q-card flat bordered>
      <div class="q-pa-md ibf-h8 text-bold">Capability Model</div>
      <q-card-section>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm-8 col-md-6">
            <q-card square>
              <q-card-section>
                <div class="text-h6">Self Assessment</div>
                <div class="text-subtitle1">
                  Start by measuring your skills and <br />
                  knowledge.
                </div>
              </q-card-section>
              <q-separator />
              <div class="q-pa-sm" bordered align="right">
                <q-btn
                  color="red"
                  flat
                  no-caps
                  label="Begin the Assessment"
                  @click="onClick"
                />
              </div>
            </q-card>
          </div>

          <div class="col-12 col-sm-8 col-md-6">
            <q-card square>
              <q-card-section>
                <div class="text-h6">TNA</div>
                <div class="text-subtitle1">
                  Choose what and how you learn to <br />
                  help you develop in your career.
                </div>
              </q-card-section>
              <q-separator />
              <div class="q-pa-sm" bordered align="right">
                <q-btn
                  color="red"
                  flat
                  no-caps
                  label="Begin the TNA"
                  @click="onClick"
                />
              </div>
            </q-card>
          </div>
        </div>
      </q-card-section>
      <div class="q-pa-sm card-bg" bordered align="right">
        <q-btn flat no-caps label="View Skill Assessment" @click="onClick" />
      </div>
    </q-card>
  </section>
</template>

<script setup></script>

<style scoped></style>
