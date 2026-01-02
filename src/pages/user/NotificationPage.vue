<template>
  <section id="user-notification">
    <div class="ibf-h8 text-weight-bold">Today</div>
    <!-- <div class="q-py-sm">
      <q-card flat square bordered>
        <q-card-section class="q-px-xs">
          <q-item>
            <q-item-section>
              <q-item-label class="ibf-h9 text-medium">
                Single line item
              </q-item-label>
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
    </div> -->

    <div class="q-py-sm">
      <q-list bordered>
        <q-card flat>
          <q-card-section class="q-px-xs q-py-sm">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="ibf-h10 text-medium">
                  Single line item
                </q-item-label>
                <q-item-label
                  class="ibf-h12 text-weight-light text-grey-8"
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

          <q-separator />

          <q-card-section class="q-px-xs q-py-sm">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="ibf-h10 text-medium">
                  Single line item
                </q-item-label>
                <q-item-label
                  class="ibf-h12 text-weight-light text-grey-8"
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

          <q-separator />

          <q-card-section class="q-px-xs q-py-sm">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="ibf-h10 text-medium">
                  Single line item
                </q-item-label>
                <q-item-label
                  class="ibf-h12 text-weight-light text-grey-8"
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

          <q-separator />
          <q-card-section class="q-px-xs q-py-sm">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="ibf-h10 text-medium">
                  Single line item
                </q-item-label>
                <q-item-label
                  class="ibf-h12 text-weight-light text-grey-8"
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
      </q-list>
    </div>

    <div class="ibf-h8 text-weight-bold">Earlier</div>
    <div class="q-py-sm">
      <q-list bordered>
        <q-card flat>
          <q-card-section class="q-px-xs q-py-sm">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="ibf-h10 text-medium">
                  Single line item
                </q-item-label>
                <q-item-label
                  class="ibf-h12 text-weight-light text-grey-8"
                  lines="2"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  bibendum placerat faucibus.
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-item-label caption>Yesterday</q-item-label>
              </q-item-section>
            </q-item>
          </q-card-section>

          <q-separator />

          <q-card-section class="q-px-xs q-py-sm">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="ibf-h10 text-medium">
                  Single line item
                </q-item-label>
                <q-item-label
                  class="ibf-h12 text-weight-light text-grey-8"
                  lines="2"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  bibendum placerat faucibus.
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-item-label caption>Yesterday</q-item-label>
              </q-item-section>
            </q-item>
          </q-card-section>

          <q-separator />

          <q-card-section class="q-px-xs q-py-sm">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="ibf-h10 text-medium">
                  Single line item
                </q-item-label>
                <q-item-label
                  class="ibf-h12 text-weight-light text-grey-8"
                  lines="2"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  bibendum placerat faucibus.
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-item-label caption>2 days ago</q-item-label>
              </q-item-section>
            </q-item>
          </q-card-section>

          <q-separator />
          <q-card-section class="q-px-xs q-py-sm">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="ibf-h10 text-medium">
                  Single line item
                </q-item-label>
                <q-item-label
                  class="ibf-h12 text-weight-light text-grey-8"
                  lines="2"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  bibendum placerat faucibus.
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-item-label caption>5 days ago</q-item-label>
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>
      </q-list>
    </div>
  </section>
</template>

<script setup></script>
