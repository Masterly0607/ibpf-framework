<template>
  <q-header reveal bordered :class="[bgColor, textColor]">
    <q-toolbar>
      <q-toolbar-title class="q-py-xs">
        <img
          alt="Quasar logo"
          src="~assets/images/ibf-logo.svg"
          style="width: 300px; height: auto"
        />
      </q-toolbar-title>

      <!-- Desktop Menu -->
      <div v-if="Screen.gt.sm" class="row q-gutter-md">
        <div class="row q-gutter-x-md">
          <div v-for="menuItem in headerMenuItems" :key="menuItem.title">
            <q-btn
              flat
              square
              @click="goTo(menuItem.router)"
              :label="menuItem.title"
            />
          </div>
        </div>

        <q-separator vertical size="3px" />

        <div class="row q-gutter-x-md">
          <q-btn
            flat
            dense
            color="primary"
            icon="account_circle"
            aria-label="profile"
            :to="{ name: 'dashboard' }"
          />
          <q-btn
            flat
            dense
            color="primary"
            icon="shopping_cart"
            aria-label="profile"
            @click="addToCard"
          />
          <q-btn
            flat
            dense
            color="primary"
            icon="favorite_border"
            aria-label="profile"
            @click="addToWishlist"
            counter
          />
          <q-btn
            outline
            color="primary"
            icon="mdi-clipboard-account-outline"
            label="Sign up"
            :to="{ name: 'sign-up-page' }"
          />
          <q-btn
            unelevated
            color="primary"
            icon="mdi-login"
            label="Login"
            :to="{ name: 'login-page' }"
          />
        </div>
      </div>

      <!-- Dropdown Menu for Mobile -->
      <div v-else>
        <q-btn
          flat
          dense
          round
          class="q-mr-auto"
          color="primary"
          icon="account_circle"
          aria-label="profile"
          :to="{ name: 'dashboard' }"
        />
        <q-btn flat round icon="menu" class="q-ml-auto" ref="dropdownMenu">
          <q-menu square fit anchor="top right" self="top right">
            <q-list>
              <div v-for="menuItem in headerMenuItems" :key="menuItem.title">
                <q-item
                  v-if="menuItem.isActive"
                  clickable
                  v-close-popup
                  @click="goTo(menuItem.router)"
                >
                  <q-item-section side>
                    <q-icon :name="menuItem.icon" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>
                      {{ menuItem.title }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </div>

              <q-separator />
              <q-item>
                <div class="row q-gutter-y-sm">
                  <q-btn
                    flat
                    color="primary"
                    icon="shopping_cart"
                    aria-label="profile"
                    @click="addToCard"
                  />
                  <q-btn
                    flat
                    color="primary"
                    icon="favorite_border"
                    aria-label="profile"
                    @click="addToWishlist"
                  />
                </div>
              </q-item>

              <q-item>
                <div class="column q-gutter-y-sm">
                  <q-btn
                    outline
                    color="primary"
                    icon="mdi-clipboard-account-outline"
                    label="Sign up"
                    style="width: 100%"
                    :to="{ name: 'sign-up-page' }"
                  />

                  <q-btn
                    unelevated
                    style="width: 100%"
                    color="primary"
                    icon="mdi-login"
                    label="Login"
                    :to="{ name: 'login-page' }"
                  />
                </div>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { Screen } from "quasar";
import { ref } from "vue";

const count = ref(0);
const props = defineProps({
  bgColor: {
    type: String,
    default: "bg-white",
  },

  textColor: {
    type: String,
    default: "text-dark",
  },
});

const headerMenuItems = ref([
  {
    title: "Home",
    icon: "mdi-home-outline",
    isActive: true,
    router: "home",
  },

  {
    title: "Courses",
    icon: "mdi-school-outline",
    isActive: true,
    router: "courses",
  },

  {
    title: "Events",
    icon: "mdi-calendar",
    isActive: true,
    router: "events",
  },

  {
    title: "Assessment",
    icon: "mdi-gauge",
    isActive: true,
    router: "assessement",
  },

  {
    title: "Enrol",
    icon: "mdi-card-account-details-outline",
    isActive: true,
    router: "enrol",
  },

  {
    title: "About",
    icon: "mdi-information-outline",
    isActive: true,
    router: "about",
  },
]);

function goTo(routeName) {
  // This is a placeholder for route navigation
  console.log("Navigating to:", routeName);
  // this.$router.push({ name: routeName });
}
</script>
