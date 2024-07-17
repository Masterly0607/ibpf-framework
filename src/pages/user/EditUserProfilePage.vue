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
                        <q-uploader square flat style="max-width: 500px" ref="uploader" :url="uploadUrl"
                          :headers="headers" :hide-upload-btn="true" :hide-image="true" :auto-upload="false"
                          @added="handleFileAdded">
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
                        <q-btn outline size="sm" color="grey-6" square label="Cancel" @click="editImage = !editImage" />
                      </q-card-actions>
                    </q-card>
                    <q-card v-else>
                      <q-card-section class="q-pa-none">
                        <q-img :src="url" fit="cover" spinner-color="primary" spinner-size="82px" />
                      </q-card-section>

                      <q-card-actions align="right">
                        <q-btn outline size="sm" color="secondary" square label="Change image"
                          @click="editImage = !editImage" />
                      </q-card-actions>
                    </q-card>
                  </div>
                </div>
              </div>

              <!-- edit profile information-->
              <div square bordered class="col-12 col-sm-8 col-md-8">
                <q-card>
                  <q-card-section>
                    <div class="text-h4 q-pa-sm">
                      <q-form @submit="onSave" @reset="onReset" class="q-gutter-md">
                        <div class="ibf-h10 text-weight-bold text-grey-7">
                          Full Name
                          <q-input filled class="ibf-h10" v-model="user.name" label="Enter your name"
                            hint="Name and surname" lazy-rules :rules="[
                              (val) =>
                                (val && val.length > 0) ||
                                'Please type something',
                            ]" />
                        </div>

                        <div class="q-gutter-xs background q-pa-sm">
                          <q-radio class=" ibf-h10 text-grey-8" v-model="user.gender" val="male" label="male" />
                          <q-radio class=" ibf-h10 text-grey-8" v-model="user.gender" val="female" label="female" />
                        </div>

                        <div class="ibf-h10 text-weight-bold text-grey-7">
                          Date of Birth
                          <q-input filled class="ibf-h10" v-model="user.dob" label="Enter your name"
                            hint="Your date of birth" lazy-rules :rules="[
                              (val) =>
                                (val && val.length > 0) ||
                                'Please type something',
                            ]" />
                        </div>
                        <div class="ibf-h10 text-weight-bold text-grey-7">
                          Address
                          <q-input filled class="ibf-h10" v-model="address" label="Enter your name" hint="Your address"
                            lazy-rules :rules="[
                              (val) =>
                                (val && val.length > 0) ||
                                'Please type something',
                            ]" />
                        </div>
                        <div class="ibf-h10 text-weight-bold text-grey-7">
                          Phone Number
                          <q-input filled class="ibf-h10" v-model="user.phone_number" label="Enter your name"
                            hint="Your phone number" lazy-rules :rules="[
                              (val) =>
                                (val && val.length > 0) ||
                                'Please type something',
                            ]" />
                        </div>

                        <div class="ibf-h10 text-weight-bold text-grey-7">
                          Email (Personal)
                          <q-input filled v-model="user.email" label="Your email" class="ibf-h10"
                            hint="Your email has been stored in the system" lazy-rules disable :rules="[
                              (val) =>
                                (val && val.length > 0) ||
                                'Please type something',
                            ]" />
                          <!-- <EditProfilePage v-model:email="email" /> -->
                        </div>

                        <!-- button submit or reset -->
                        <div align="right">
                          <q-btn label="Cancel" type="reset" color="grey" flat />
                          <q-btn flat label="Save" type="submit" color="primary" />
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

      <preview-json :list="user"></preview-json>

    </q-page-container>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useQuasar } from "quasar";
import { useUserStore } from "src/stores/user-store";


const fileName = ref("");
const imagePreview = ref(null);
const uploadUrl = "https://YOUR_S3_BUCKET_URL"; // Set your S3 upload URL
const userStore = useUserStore();
const user = userStore.getUser;
const roles = userStore.getRoles;

const editImage = ref(true);
const emit = defineEmits(["file-uploaded"]);
const $q = useQuasar();
const address = ref("Phnom Penh");
const gender = ref(user.gender)

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

const url = ref("https://picsum.photos/500/300");
// const refresh = () => {
//   url.value = "https://picsum.photos/500/300?t=" + Math.random();
// };

// const onSubmit = () => {
//   if (user.value !== true) {
//     $q.notify({
//       color: 'teal-5',
//       textColor: 'white',
//       icon: 'success',
//       message: 'Submitted'
//     })
//   } else {
//     $q.notify({
//       color: 'green-4',
//       textColor: 'white',
//       icon: 'cloud_done',
//       message: 'Submitted'
//     })
//   }
// }

const onSave = () => {
  // Dispatch the action to update the email in the store
  user.dispatch('updateUserEmail', user.gender.value)
  user.log('Form submitted with email:', user.gender.value)
}
onMounted(user.gender, (newGender) => {
  if (newGender !== user.gender.value) {
    user.dispatch('updateUserEmail', newGender)
  }
})
const onReset = () => {
  user.value = ''
}

onMounted(user, (newUser) => {
  if (newUser.value !== user.value) {
    onReset()
  }
}, { deep: true })

// const onSubmit = () => {
//   console.log("Submited");
// };
// const onReset = () => {
//   console.log("Canceled");
// };

</script>
