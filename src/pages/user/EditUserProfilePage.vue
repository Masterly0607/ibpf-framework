<template>
  <q-page id="edit-user-profile">
    <q-page-container class="ibf-container-1100">
      <div>
        <q-card flat bordered>
          <div class="ibf-h8 text-weight-bold q-pa-md" align="left">
            Change Profile
          </div>
          <q-card-section>
            <div class="row q-col-gutter-md">
              <!-- profile image -->
              <div square bordered class="col-12 col-sm-8 col-md-4">
                <div class="q-gutter-sm">
                  <div class="col-12 col-md-4">
                    <q-card v-if="editImage">
                      <q-card-section>
                        <q-uploader
                          square
                          flat
                          style="max-width: 500px"
                          ref="uploader"
                          :url="uploadUrl"
                          :headers="headers"
                          :hide-upload-btn="true"
                          :hide-image="true"
                          :auto-upload="false"
                          @added="handleFileAdded"
                        >
                        </q-uploader>
                        <!-- <q-field
                          ref="fieldRef"
                          flat
                          label="Profile Image"
                          stack-label
                          :rules="[isRequired]"
                        >
                          <template v-slot:control>
                            <div
                              id="image-tool"
                              class="q-py-sm"
                              style="width: 100%"
                            >
                              <image-upload-preview
                                @file:stored="handleFileStored"
                              />
                            </div>
                          </template>
                        </q-field> -->
                      </q-card-section>

                      <q-card-actions align="right">
                        <q-btn
                          outline
                          size="sm"
                          color="grey-6"
                          square
                          label="Cancel"
                          @click="editImage = !editImage"
                        />
                      </q-card-actions>
                    </q-card>
                    <q-card v-else>
                      <q-card-section class="q-pa-none">
                        <q-img
                          :src="url"
                          fit="cover"
                          spinner-color="primary"
                          spinner-size="82px"
                        />
                      </q-card-section>

                      <q-card-actions align="right">
                        <q-btn
                          outline
                          size="sm"
                          color="secondary"
                          square
                          label="Change image"
                          @click="editImage = !editImage"
                        />
                      </q-card-actions>
                    </q-card>
                  </div>

                  <!-- <q-img :src="url" style="height: 140px; max-width: 150px">
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
                  /> -->
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

              <div class="ibf-h7 text-weight-bold">Da Lyna</div>
                <div class="ibf-h10 text-weight-bold q-py-sm" id="q-app">
                  <q-btn
                    push
                    color="primary"
                    label="Change image"
                    @click="refresh"
                  />
                </div> -->

                <br />
              </div>

              <!-- edit profile -->
              <div square bordered class="col-12 col-sm-8 col-md-8">
                <q-card>
                  <q-card-section>
                    <!-- <div class="ibf-h7 text-weight-bold q-pa-sm" align="center">
                      Edit Profile
                    </div> -->
                    <div class="text-h4 q-pa-sm">
                      <q-form
                        @submit="onSubmit"
                        @reset="onReset"
                        class="q-gutter-md"
                      >
                        <div class="ibf-h10 text-weight-bold text-grey-7">
                          Full Name
                          <q-input
                            filled
                            class="ibf-h10"
                            v-model="userStore.user.name"
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

                        <div class="ibf-h10 text-weight-bold text-grey-7">
                          Address
                          <q-input
                            filled
                            class="ibf-h10"
                            v-model="address"
                            label="Enter your name"
                            hint="Your address"
                            lazy-rules
                            :rules="[
                              (val) =>
                                (val && val.length > 0) ||
                                'Please type something',
                            ]"
                          />
                        </div>

                        <div class="ibf-h10 text-weight-bold text-grey-7">
                          Phone Number
                          <q-input
                            filled
                            class="ibf-h10"
                            v-model="phoneNumber"
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

                        <div class="ibf-h10 text-weight-bold text-grey-7">
                          User Position
                          <q-input
                            filled
                            class="ibf-h10"
                            v-model="userStore.roles[0]"
                            label="Enter your position"
                            hint="Your position"
                            lazy-rules
                            disable
                            :rules="[
                              (val) =>
                                (val && val.length > 0) ||
                                'Please type something',
                            ]"
                          />
                        </div>

                        <div class="ibf-h10 text-weight-bold text-grey-7">
                          Email
                          <q-input
                            filled
                            v-model="userStore.user.email"
                            label="Your email"
                            class="ibf-h10"
                            hint="Your email has been stored in the system"
                            lazy-rules
                            disable
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
                          <q-btn
                            label="Cancel"
                            type="reset"
                            color="grey"
                            flat
                          />
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
      </div>

      <!--  -->
      <preview-json :list="user"></preview-json>
    </q-page-container>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
// import ImageUploadPreview from "./ImageUploadPreview.vue";
import { useUserStore } from "src/stores/user-store";

const dialog = ref(false);
const fileName = ref("");
const imagePreview = ref(null);
const uploadUrl = "https://YOUR_S3_BUCKET_URL"; // Set your S3 upload URL
const userStore = useUserStore();
const editImage = ref(true);
const emit = defineEmits(["file-uploaded"]);

const address = ref("Phnom Penh");
const phoneNumber = ref("0123456789");
const handleFileAdded = (files) => {
  if (files.length > 0) {
    const file = files[0];
    fileName.value = file.name;

    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

// const refresh = () => {
//   console.log("Refreshed");
// };

const url = ref("https://picsum.photos/500/300");

const refresh = () => {
  url.value = "https://picsum.photos/500/300?t=" + Math.random();
};

const name = ref(["Da Lyna"]);
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
