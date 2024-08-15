<template>
  <div class="row q-col-gutter-lg q-py-sm">
    <div class="col-12 col-md-7 ">
      <div>
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
            <div class="text-weight-medium ibf-h11"> {{ data.description }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-5">
      <q-card class="ibf-card-1 q-pb-md">
        <div class="q-pa-lg q-gutter-md">
          <div class="text-weight-bold ibf-h9" align="center">
            Get in Touch
          </div>
          <!-- from -->
          <q-form @submit="submit" class="q-gutter-md">
            <!-- <span class="ibf-h11 text-weight-medium">Name</span> -->
            <q-input filled v-model="name" label="Your name *" lazy-rules
              :rules="[val => val && val.length > 0 || 'Please type something']" />
            <q-input filled v-model="name" label="Your email *" lazy-rules
              :rules="[val => val && val.length > 0 || 'Please type something']" />
            <q-input filled v-model="name" label="Your email *" lazy-rules
              :rules="[val => val && val.length > 0 || 'Please type something']" />
            <!-- <span class="ibf-h11 text-weight-medium q-mt-lg">Message</span> -->
            <q-input filled v-model="message" label="Message" type="textarea" />
            <div align="right">
              <q-btn class="ibf-card-2" type="submit" label="Submit" color="primary" style="width: 100px" />
            </div>
          </q-form>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script setup>

import { ref } from "vue";

const name = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");

const submit = () => {
  console.log(name.value, email.value, phone.value, message.value);
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
