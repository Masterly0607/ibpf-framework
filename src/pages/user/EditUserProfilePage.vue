<template>
  <q-page padding class="ibf-container-1200" id="edit-user-profile">
    <div>
      <q-card square class="ibf-card-1">
        <q-card-section>
          <!-- edit profile information-->
          <div class="row justify-between">
            <span class="ibf-h9 text-weight-bold text-grey-8 q-pa-sm">
              Update Profile Information
            </span>
          </div>

          <q-separator spaced color="grey-3" />

          <div class="q-pa-lg">
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-y-md">
              <div class="q-gutter-sm">
                <div class="ibf-h11 text-grey-8 text-weight-medium">
                  Full Name
                </div>
                <q-input
                  outlined
                  class="ibf-h11 text-weight-regular"
                  v-model="user.name"
                  label="Enter your name"
                  label-color="grey-6"
                />
              </div>

              <div class="q-gutter-x-md">
                <q-radio
                  class="ibf-h10 text-grey-8"
                  v-model="user.gender"
                  val="male"
                  label="male"
                />
                <q-radio
                  class="ibf-h10 text-grey-8"
                  v-model="user.gender"
                  val="female"
                  label="female"
                />
              </div>

              <div class="q-gutter-sm">
                <div class="ibf-h11 text-grey-8 text-weight-medium">
                  Date of Birth
                </div>
                <q-input
                  outlined
                  class="ibf-h11 text-weight-regular"
                  v-model="user.dob"
                  label="Enter your name"
                  label-color="grey-6"
                />
              </div>

              <div class="q-gutter-sm">
                <div class="ibf-h11 text-grey-8 text-weight-medium">
                  Address
                </div>
                <q-input
                  outlined
                  class="ibf-h11 text-weight-regular"
                  v-model="address"
                  label="Enter your name"
                  label-color="grey-6"
                />
              </div>

              <div class="q-gutter-sm">
                <div class="ibf-h11 text-grey-8 text-weight-medium">
                  Phone Number
                </div>
                <q-input
                  outlined
                  class="ibf-h11 text-weight-regular"
                  v-model="user.phone_number"
                  label="Enter your name"
                  label-color="grey-6"
                />
              </div>

              <div class="q-gutter-sm">
                <div class="ibf-h11 text-grey-8 text-weight-medium">
                  Email (Personal)
                </div>
                <q-input
                  outlined
                  class="ibf-h11 text-weight-regular"
                  v-model="user.email"
                  label="Enter your name"
                  label-color="grey-7"
                  disable
                />
              </div>

              <!-- button submit or reset -->
              <div align="right">
                <q-btn label="Cancel" type="reset" color="grey" flat />
                <q-btn
                  flat
                  label="Save"
                  @click="onSubmit()"
                  type="submit"
                  color="primary"
                />
              </div>
            </q-form>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <preview-json :list="user"></preview-json>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useQuasar } from "quasar";
import { useUserStore } from "src/stores/user-store";

const fileName = ref("");
const imagePreview = ref(null);
const uploadUrl = "https://YOUR_S3_BUCKET_URL";
const userStore = useUserStore();
const user = userStore.getUser;
const roles = userStore.getRoles;

const editImage = ref(true);
const emit = defineEmits(["file-uploaded"]);
const $q = useQuasar();
const address = ref("Phnom Penh");

onMounted(user.gender, (newGender) => {
  if (newGender !== user.gender.value) {
    user.dispatch("updateUserEmail", newGender);
  }
});

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

const onSubmit = () => {
  if (user.value !== true) {
    $q.notify({
      color: "red-5",
      textColor: "white",
      icon: "wearning",
      message: "Failed to submit",
    });
  } else {
    $q.notify({
      color: "green-4",
      textColor: "white",
      icon: "cloud_done",
      message: "Submitted",
    });
    console.log("Form submitted with email:", user.value);
  }
};

const onReset = () => {
  // Reset the form fields
  // user.value.name = ''
  user.value = "";
  user.value.dob = "";
  user.value.phone_number = "";
};
</script>
