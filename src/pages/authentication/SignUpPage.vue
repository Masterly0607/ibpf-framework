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
        <div class="col-12 col-md-8" v-if="Screen.gt.sm">
          <q-card flat square class="full-height">
            <q-img fit="fill" src="/images/learning_pharagrah.png" />
          </q-card>
        </div>
        <div class="col-12 col-md-4">
          <q-card class="full-height" square flat bordered>
            <q-card-section>
              <div class="ibf-h1 text-weight-bold text-dark">Sign Up</div>

              <div class="ibf-h11 text-grey-6">
                Already have an account?
                <router-link :to="{ name: 'login-page' }">
                  <span
                    class="text-secondary text-weight-medium text-underline"
                  >
                    Login
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
                  label="Email"
                />
                <q-input
                  square
                  outlined
                  v-model="user.familyName"
                  type="text"
                  label="Family name"
                />
                <q-input
                  square
                  outlined
                  v-model="user.givenName"
                  type="text"
                  label="Given name"
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

                <q-input
                  square
                  outlined
                  :type="isPwd ? 'password' : 'text'"
                  v-model="user.confirmPassword"
                  label="Confirm password"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
              </q-form>

              <div class="q-mt-lg">
                <q-btn
                  unelevated
                  size="md"
                  style="width: 100%"
                  label="Sign Up"
                  color="primary"
                  :to="{ name: 'home-page' }"
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
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { Screen } from "quasar";
import TextTwoLines from "components/tools/TextTwoLines.vue";
import { ref } from "vue";

const isPwd = ref(true);
const user = ref({
  email: "",
  password: "",
  familyName: "",
  givenName: "",
  confirmPassword: "",
  isRemembered: false,
});
</script>

<style lang="scss" scoped>
.background {
  background-image: url("/images/learning_pharagrah.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
