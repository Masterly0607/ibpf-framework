<template>
  <q-page padding>
    <div class="ibf-container-1200 q-gutter-md">
      <!-- Title -->
      <div class="ibf-h3 text-weight-bold justify-center">
        Contact Us
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
        odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Curabitur tempus urna at turpis condimentum lobortis.
      </div>

      <!-- Contact Form -->
      <div class="q-py-xl">
        <GetInTouch />

        <!-- Our location -->
        <div class="row q-gutter-md">
          <q-icon name="location_on" color="primary" size="30px" />
          <div class="text-weight-bold ibf-h9"> Our Location </div>
        </div>
        <div class="q-py-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.9003229493956!2d104.9221945761892!3d11.559002988641446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109518850be6bbb%3A0x1ff2c72d9b18f0ee!2sInstitute%20of%20Banking%20and%20Finance!5e0!3m2!1sen!2skh!4v1697025350469!5m2!1sen!2skh"
            width="100%" height="450" allowfullscreen="allowfullscreen" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade" style="border: 0px;"></iframe>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import GetInTouch from "./component-contact/GetInTouch.vue";
</script>
