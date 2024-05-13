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

    <div class="q-py-md" style="max-width: 100%">
      <q-list bordered>
        <q-item bordered clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section>Avatar-type icon</q-item-section>
          <q-item-section align="right">
            <div>
              <q-btn flat color="primary" label="View" @click="onClick" />
            </div>
          </q-item-section>
        </q-item>
        <q-separator />

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section>Letter avatar-type</q-item-section>
          <q-item-section align="right">
            <div>
              <q-btn flat color="primary" label="View" @click="onClick" />

            </div>
          </q-item-section>
        </q-item>
        <q-separator />

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section>Image avatar</q-item-section>
          <q-item-section align="right">
            <div>
              <q-btn flat color="primary" label="View" @click="onClick" />
            </div>
          </q-item-section>
        </q-item>
        <q-separator />

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar square>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section>Image square avatar</q-item-section>
          <q-item-section align="right">
            <div>
              <q-btn flat color="primary" label="View" @click="onClick" />
            </div>
          </q-item-section>
        </q-item>
        <q-separator />

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar rounded>
              <img src="https://cdn.quasar.dev/img/mountains.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>List item</q-item-section>
          <q-item-section align="right">
            <div>
              <q-btn flat color="primary" label="View" @click="onClick" />
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <div class="ibf-h8 text-bold">Earlier</div>

    <div class="q-py-md" style="max-width: 100%">
      <q-list bordered>
        <q-item bordered clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section>Avatar-type icon</q-item-section>
          <q-item-section align="right">
            <div>
              <q-btn flat color="primary" label="View" @click="onClick" />
            </div>
          </q-item-section>
        </q-item>
        <q-separator />

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section>Letter avatar-type</q-item-section>
          <q-item-section align="right">
            <div>
              <q-btn flat color="primary" label="View" @click="onClick" />
            </div>
          </q-item-section>
        </q-item>
        <q-separator />

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section>Image avatar</q-item-section>
          <q-item-section align="right">
            <div>
              <q-btn flat color="primary" label="View" @click="onClick" />
            </div>
          </q-item-section>
        </q-item>
        <q-separator />

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar square>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <div class="ibf-h11 text-bold">IBF Course</div>
            <div class="text-subtitle2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </q-item-section>
          <q-item-section align="right">
            <div>
              <q-btn flat color="primary" label="View" @click="onClick" />
            </div>
          </q-item-section>
        </q-item>
        <q-separator />

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar rounded>
              <img src="https://cdn.quasar.dev/img/mountains.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <div class="ibf-h10 text-bold">IBF Course</div>
            <div class="text-subtitle3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </q-item-section>
          <q-item-section align="right">
            <div>
              <q-btn flat color="primary" label="View" @click="onClick" />
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <!-- <div class="q-py-sm">
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
    </div> -->
  </section>
</template>

<script setup>
import { ref } from "vue";
</script>
