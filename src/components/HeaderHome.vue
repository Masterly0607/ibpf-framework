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
          <div v-for="(menuItem, index) in headerMenuItems" :key="index">
            <q-btn
              flat
              square
              @click="goTo(menuItem.router)"
              :label="menuItem.title"
            />
          </div>
        </div>

        <q-separator vertical size="3px" />

        <div id="user-area">
          <div v-if="isAuth" id="auth-area" class="row q-gutter-x-md">
            <q-btn
              flat
              dense
              round
              color="black-10"
              icon="account_circle"
              aria-label="profile"
              :to="{ name: 'dashboard-page' }"
            />

            <!-- shopping cart btn -->

            <div>
              <q-btn
                v-if="countCartItems < 1"
                flat
                round
                dense
                color="black-10"
                icon="mdi-cart-outline"
                :to="{ name: 'cart-page' }"
              />

              <q-btn
                v-else
                flat
                round
                dense
                color="black-10"
                icon="shopping_cart"
                aria-label="profile"
                :to="{ name: 'cart-page' }"
              >
                <q-badge
                  v-if="countCartItems > 0"
                  rounded
                  color="negative"
                  floating
                  transparent
                >
                  {{ countCartItems }}
                </q-badge>
              </q-btn>
            </div>

            <q-btn
              flat
              dense
              round
              color="black-10"
              icon="favorite_border"
              counter
              hint="4"
            />
          </div>

          <div v-else id="un-auth-area" class="row q-gutter-x-sm">
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
          :to="{ name: 'dashboard-page' }"
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

              <q-separator spaced />
              <div class="row justify-center q-gutter-md">
                <div>
                  <q-btn
                    v-if="countCartItems < 1"
                    flat
                    round
                    dense
                    color="black-10"
                    icon="mdi-cart-outline"
                    :to="{ name: 'cart-page' }"
                  />

                  <q-btn
                    v-else
                    flat
                    round
                    dense
                    color="black-10"
                    icon="shopping_cart"
                    aria-label="profile"
                    :to="{ name: 'cart-page' }"
                  >
                    <q-badge rounded color="negative" floating transparent>
                      {{ countCartItems }}
                    </q-badge>
                  </q-btn>
                </div>
                <q-btn
                  flat
                  round
                  color="primary"
                  icon="favorite_border"
                  aria-label="profile"
                />
              </div>

              <div class="column q-gutter-y-sm q-pa-xs">
                <q-btn
                  outline
                  square
                  color="primary"
                  icon="mdi-clipboard-account-outline"
                  label="Sign up"
                  style="width: 100%"
                  :to="{ name: 'sign-up-page' }"
                />

                <q-btn
                  square
                  unelevated
                  style="width: 100%"
                  color="primary"
                  icon="mdi-login"
                  label="Login"
                  :to="{ name: 'login-page' }"
                />
              </div>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script setup>
//import { storeToRefs } from "pinia";
import { Screen } from "quasar";
import { useCartStore } from "src/stores/cart-store";
import { useUserStore } from "src/stores/user-store";
import { computed, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const cartStore = useCartStore();
const userStore = useUserStore();
const isAuth = computed(() => userStore.isAuthenticated);
//const { cartItemsIds } = storeToRefs(cartStore);

const fetchCartItems = async () => {
  if (!isAuth.value) return;
  await cartStore.serverFetchCartItems();
};

watchEffect(() => {
  fetchCartItems();
});

const countCartItems = computed(() => cartStore.getCartItemsIds.length || 0);
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
    router: "home-page",
  },

  {
    title: "Courses",
    icon: "mdi-school-outline",
    isActive: true,
    router: "product-list-page",
  },

  {
    title: "Events",
    icon: "mdi-calendar",
    isActive: true,
    router: "event-page",
  },

  {
    title: "Assessment",
    icon: "mdi-gauge",
    isActive: true,
    router: "",
  },

  {
    title: "Enrol",
    icon: "mdi-card-account-details-outline",
    isActive: true,
    router: "enrol-page",
  },

  {
    title: "About",
    icon: "mdi-information-outline",
    isActive: true,
    router: "about-page",
  },
]);

function goTo(routeName) {
  if (routeName) {
    router.push({ name: routeName });
  }
}
</script>
