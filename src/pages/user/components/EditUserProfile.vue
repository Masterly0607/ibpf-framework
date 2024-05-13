<template>
  <q-page id="edit-user-profile">
    <q-page-container class="ibf-container-1100">
      <q-card flat bordered>
        <div class="ibf-h8 text-bold q-pa-md">Edit Change</div>
        <q-card-section>
          <div class="row q-col-gutter-md">
            <div square bordered class="col-12 col-sm-8 col-md-4">
              <q-card class="my-card" align="center">
                <!--  -->

                <div class="q-gutter-sm">
                  <q-img :src="url" style="height: 140px; max-width: 150px">
                    <template v-slot:loading>
                      <div class="text-yellow">
                        <q-spinner-ios />
                        <div class="q-mt-md">Loading...</div>
                      </div>
                    </template>
                  </q-img>
                  <q-btn
                    push
                    color="teal"
                    label="Change image"
                    @click="refresh"
                    class="q-mb-md"
                  />
                </div>

                <!-- <q-avatar
                  size="200px"
                  font-size="180px"
                  text-color="primary"
                  icon="account_circle"
                  :src="url"
                /> -->

                <!-- <q-avatar size="150px" font-size="100px">
                  <q-img :src="url" style="max-width: 300px" />
                </q-avatar>

              <div class="ibf-h7 text-bold">Da Lyna</div>
                <div class="ibf-h10 text-bold q-py-sm" id="q-app">
                  <q-btn
                    push
                    color="primary"
                    label="Change image"
                    @click="refresh"
                  />
                </div> -->

                <br />
              </q-card>
            </div>

            <div square bordered class="col-12 col-sm-8 col-md-8">
              <q-card>
                <q-card-section>
                  <div class="ibf-h7 text-bold q-pa-sm" align="center">
                    Edit Profile
                  </div>
                  <div class="text-h4 q-pa-sm">
                    <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                      class="q-gutter-md"
                    >
                      <div class="ibf-h10 text-bold">
                        Full Name
                        <q-input
                          filled
                          class="ibf-h10"
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

                      <div class="ibf-h10 text-bold">
                        User Position
                        <q-input
                          filled
                          class="ibf-h10"
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
                      <div class="ibf-h10 text-bold">
                        Email
                        <q-input
                          filled
                          v-model="email"
                          label="Your email"
                          class="ibf-h10"
                          hint="Your email has been stored in the system"
                          lazy-rules
                          :rules="[
                            (val) =>
                              (val && val.length > 0) ||
                              'Please type something',
                          ]"
                        />
                        <!-- <EditProfilePage v-model:email="email" /> -->
                      </div>

                      <!-- button submit or reset -->
                      <div align="right">
                        <q-btn label="Cancel" type="reset" color="grey" flat />
                        <q-btn
                          flat
                          label="Save"
                          type="submit"
                          color="primary"
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
import EditProfilePage from "../EditProfilePage.vue";

// const app = createApp({});

// app.use(QuasarPlugin, { config: {} });
// app.mount("#q-app");

// const url = ref("https://cdn.quasar.dev/img/mountains.jpg");

// const refresh = () => {
//   console.log("Refreshed");
// };

const url = ref("https://picsum.photos/500/300");

const refresh = () => {
  url.value = "https://picsum.photos/500/300?t=" + Math.random();
};

const name = ref(["Da Lyna"]);
// const email = ref(["uiofficer.ibfkh.org"]);
const email = ref("uiofficer.ibfkh.org");
const position = ref(["Software Engineer"]);

const onSubmit = () => {
  console.log("Submited");
};
const onReset = () => {
  console.log("Canceled");
};

// const onRejected = (rejectedEntries) => {
//   $url.notify({
//     type: "negative",
//     message: `${rejectedEntries.length} file(s) did not pass validation constraints`,
//   });
// };
</script>
