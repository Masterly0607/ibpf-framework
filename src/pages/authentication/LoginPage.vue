<template>
  <q-page
    padding
    :class="[
      'window-height flex-start justify-center',
      Screen.gt.sm ? '' : 'background',
    ]"
  >
    <div class="ibf-container-1200">
      <div class="row q-my-md">
        <q-btn
          flat
          square
          icon="mdi-arrow-left-thin"
          label="Back"
          :to="{ name: 'home-page' }"
        />
      </div>
      <div class="row q-col-gutter-x-md">
        <div class="col-12 col-md-4">
          <q-card square flat bordered>
            <q-card-section>
              <div class="ibf-h1 text-weight-bold text-dark">Login</div>

              <div class="ibf-h11 text-grey-6">
                Doesn't have an account yet?
                <router-link :to="{ name: 'sign-up-page' }">
                  <span
                    class="text-secondary text-weight-medium text-underline"
                  >
                    Sign Up
                  </span>
                </router-link>
              </div>
            </q-card-section>

            <q-card-section>
              <q-form class="q-gutter-md">
                <q-input
                  square
                  outlined
                  v-model="user.email"
                  type="text"
                  label="Username"
                />
                <q-input
                  square
                  outlined
                  v-model="user.password"
                  :type="isPwd ? 'password' : 'text'"
                  label="Password"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
                <q-checkbox
                  dense
                  v-model="user.isRemembered"
                  label="Remember me"
                  color="secondary"
                />
              </q-form>

              <div class="q-mt-lg">
                <q-btn
                  unelevated
                  size="md"
                  style="width: 100%"
                  label="Login"
                  color="primary"
                  @click="login"
                />
              </div>

              <text-two-lines text="or login with"></text-two-lines>

              <div class="row justify-center q-gutter-sm">
                <q-btn
                  outline
                  color="primary"
                  icon="mdi-alpha-g"
                  label="Google"
                />

                <q-btn
                  outline
                  color="secondary"
                  icon="mdi-alpha-f"
                  label="Facebook"
                />
              </div>
            </q-card-section>
          </q-card>

          <q-card square flat bordered class="q-my-sm">
            <q-card-section>
              <div class="text-weight-bold">DEMO ACCOUNT</div>

              <q-item>
                <q-item-section side>
                  <q-icon name="person" />
                </q-item-section>
                <q-item-section>
                  <q-item-label caption lines="2">username</q-item-label>
                  <q-item-label class="text-secondary text-weight-medium"
                    >demo@ibfkh.org</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section side>
                  <q-icon name="lock" />
                </q-item-section>
                <q-item-section>
                  <q-item-label caption lines="2">password</q-item-label>
                  <!--<q-item-label class="text-secondary text-weight-medium"
                    >demo123</q-item-label
                  >-->
                </q-item-section>
              </q-item>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-8" v-if="Screen.gt.sm">
          <q-card flat square class="full-height">
            <q-img fit="fill" src="~assets/images/learning_pharagrah.png" />
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { Screen } from "quasar";
import TextTwoLines from "components/tools/TextTwoLines.vue";
import { ref } from "vue";
import { useUserStore } from "src/stores/user-store";
import { useRouter } from "vue-router";
const router = useRouter();
const userStore = useUserStore();
const isPwd = ref(true);
const user = ref({
  email: "",
  password: "",
  isRemembered: false,
});

const login = async () => {
  const res = await userStore.login(user.value);

  if (res) {
    userStore.storeUser(res);
    router.push({ name: "home-page" });
  }
};
</script>

<style lang="scss" scoped>
.background {
  background-image: url("~assets/images/learning_pharagrah.png");
  background-size: fill;
  background-repeat: no-repeat;
}
</style>
