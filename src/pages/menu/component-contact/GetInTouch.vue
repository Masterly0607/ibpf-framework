<template>
  <div class="row q-col-gutter-lg ">
    <div class="col-12 col-md-7 ">
      <div class="ibf-h11 text-grey-8">
        Feel free to get in touch with us via email or phone
        <q-separator size="2px" spaced="10px" style="width: 350px" color="grey-6" />
      </div>
      <div v-for="(data, index) in optionData" :key="index">
        <div class="row q-py-md">
          <div class="col-12 col-md-1">
            <q-avatar size="33px" font-size="30px" text-color="primary">
              <q-icon :name="data.icon" />
            </q-avatar>
          </div>
          <div class="col-12 col-md-11 q-gutter-sm">
            <div class="text-weight-bold ibf-h10 text-grey-8"> {{ data.title }}</div>
            <div class="text-weight-medium ibf-h11 text-grey-8"> {{ data.description }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- form contact -->
    <div class="col-12 col-md-5">
      <q-card class="ibf-card-1">
        <q-card-section>
          <div class="text-h4 q-pa-md">
            <q-form @submit="submit" @reset="onReset">
              <div class="text-weight-bold ibf-h9 " align="center">
                Get in Touch
              </div>
              <div>
                <span class="ibf-h11 text-weight-medium text-grey-7">Full Name</span>
                <q-input v-model="name" label="Enter your name" hint="Surname or Username "
                  :rules="[val => !!val || 'Name is required']" outlined />

                <span class="ibf-h11 text-weight-medium text-grey-7">Email address</span>
                <q-input v-model="email" label="Enter your email" hint="Email address"
                  :rules="[val => !!val || 'Name is required']" outlined />
              </div>
              <div class="ibf-h11 text-weight-medium text-grey-7">
                Message
                <q-input outlined v-model="message" label="Message" type="textarea" />
              </div>
              <!-- button submit and cancel -->
              <div class="q-py-sm" align="right">
                <q-btn label="Cancel" type="reset" color="grey-8" flat class="q-ml-sm" />
                <q-btn outline label="Submit" type="submit" color="primary" />
              </div>
            </q-form>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>

import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");

const submit = () => {
  console.log(name.value, email.value, message.value);
};

const optionData = ref([
  {
    id: 1,
    title: "Working Hours",
    description: "Monday - Friday, from 8:00 AM - 5:00 PM",
    icon: "mdi-clock-time-three",
  },
  {
    id: 2,
    title: "Mail Address",
    description: "Email: admin@ibfkh.org / hr@ibfkh.org",
    icon: "email"
  },
  {
    id: 3,
    title: "Contact",
    description: "Phone: (+855) 23 224 313/ 61 626 902",
    icon: "phone"
  },
  // {
  //   id: 3,
  //   title: "Address",
  //   description: "",
  //   icon: "location_on"
  // }
])
</script>

<style scoped lang="scss">
.custom-label {
  font-size: 18px;
}
</style>
