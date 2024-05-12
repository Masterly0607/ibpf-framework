<template>
  <section id="user-notification">
    <div class="ibf-h8 text-bold">Today</div>

    <div class="q-py-sm">
      <q-card flat bordered class="my-card">
        <q-card-section class="q-px-xs">
          <q-item>
            <q-item-section>
              <q-item-label class="ibf-h9 text-medium"
                >Single line item</q-item-label
              >
              <q-item-label
                class="ibf-h11 text-weight-light text-grey-8"
                lines="2"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                bibendum placerat faucibus.
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-item-label caption>5 min ago</q-item-label>
            </q-item-section>
          </q-item>
        </q-card-section>
      </q-card>
    </div>

    <div class="q-py-sm">
      <q-card flat bordered class="my-card">
        <div class="row q-gutter-lg">
          <q-card-section>
            <div class="ibf-h10 text-bold">IBF Course</div>
            <div class="text-subtitle2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              bibendum placerat faucibus.
            </div>
          </q-card-section>
          <q-card-section align="right">
            <q-btn label="View" @click="onClick" />
          </q-card-section>
        </div>
      </q-card>
    </div>
    <div class="q-py-sm">
      <q-card flat bordered class="my-card">
        <div class="row q-gutter-lg">
          <q-card-section>
            <div class="ibf-h10 text-bold">IBF Course</div>
            <div class="text-subtitle2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              bibendum placerat faucibus.
            </div>
          </q-card-section>
          <q-btn bordered flat align="right" label="View" @click="onClick" />
        </div>
      </q-card>
    </div>

    <div class="ibf-h8 text-bold">Earlier</div>

    <div class="q-py-sm">
      <q-card flat bordered class="my-card">
        <div class="row q-gutter-lg">
          <q-card-section>
            <div class="ibf-h10 text-bold">IBF Course</div>
            <div class="text-subtitle2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              bibendum placerat faucibus.
            </div>
          </q-card-section>
          <q-btn bordered flat align="right" label="View" @click="onClick" />
        </div>
      </q-card>
    </div>
    <div class="q-py-sm">
      <q-card flat bordered class="my-card">
        <div class="row q-gutter-lg">
          <q-card-section>
            <div class="ibf-h10 text-bold">IBF Course</div>
            <div class="text-subtitle2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              bibendum placerat faucibus.
            </div>
          </q-card-section>
          <q-btn bordered flat align="right" label="View" @click="onClick" />
        </div>
      </q-card>
    </div>
    <div class="q-py-sm">
      <q-card flat bordered class="my-card">
        <div class="row q-gutter-lg">
          <q-card-section>
            <div class="ibf-h10 text-bold">IBF Course</div>
            <div class="text-subtitle2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              bibendum placerat faucibus.
            </div>
          </q-card-section>
          <q-btn bordered flat align="right" label="View" @click="onClick" />
        </div>
      </q-card>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
</script>
