<template>
  <q-page id="edit-user-profile">
    <q-page-container class="ibf-container-1100">
      <q-card flat bordered>
        <div class="ibf-h8 text-bold q-pa-md">Edit Change</div>
        <q-card-section>
          <div class="row q-col-gutter-md">
            <div square bordered class="col-12 col-sm-8 col-md-4">
              <q-card class="my-card" align="center">
                <!-- <q-card class="q-pa-md" square>
                  <img
                    src="https://cdn.quasar.dev/img/mountains.jpg"
                    max-width="50px"
                    max-height="100px"
                  />
                </q-card> -->
                <q-avatar
                  size="200px"
                  font-size="180px"
                  text-color="primary"
                  icon="account_circle"
                />
                <div class="ibf-h7 text-bold">Da Lyna</div>
                <div class="ibf-h10 text-bold q-py-sm">
                  <q-btn
                    color="primary"
                    label="Change picture"
                    @click="changePicture"
                  />
                </div>
                <br />
              </q-card>
            </div>

            <div square bordered class="col-12 col-sm-8 col-md-8">
              <q-card>
                <q-card-section>
                  <div class="text-h6 q-pa-md" align="center">Edit Profile</div>
                  <div class="text-h4 q-pa-md">
                    <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                      class="q-gutter-md"
                    >
                      <div class="ibf-h8">
                        Full Name
                        <q-input
                          filled
                          v-model="name"
                          label="Enter your name"
                          hint="Name and surname"
                          lazy-rules
                          :rules="[
                            (val) =>
                              (val && val.length > 0) ||
                              'Please type something',
                          ]"
                        />
                      </div>

                      <div class="ibf-h8">
                        User Position
                        <q-input
                          filled
                          v-model="position"
                          label="Enter your position"
                          hint="Your position"
                          lazy-rules
                          :rules="[
                            (val) =>
                              (val && val.length > 0) ||
                              'Please type something',
                          ]"
                        />
                      </div>
                      <div class="ibf-h8">
                        Email
                        <q-input
                          disable
                          filled
                          v-model="email"
                          label="uiofficer.ibfkh.org"
                          hint="Your email"
                          lazy-rules
                          :rules="[
                            (val) =>
                              (val && val.length > 0) ||
                              'Please type something',
                          ]"
                        />
                      </div>

                      <!-- button submit or reset -->
                      <div align="center">
                        <q-btn
                          flat
                          label="Submit"
                          type="submit"
                          color="primary"
                        />
                        <q-btn
                          label="Reset"
                          type="reset"
                          color="grey"
                          flat
                          class="q-ml-sm"
                        />
                      </div>
                    </q-form>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-page-container>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const email = ref(null);
const name = ref(null);
const position = ref(null);

const onSubmit = () => {
  console.log("Submited");
};
const onReset = () => {
  console.log("Reseted");
};
</script>
