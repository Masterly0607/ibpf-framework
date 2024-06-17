<template>
  <section id="promotion-product">
    <!-- Course promotion -->
    <div class="row q-col-gutter-lg q-py-sm">
      <div class="col-12 col-md-8">
        <q-card class="q-mt-md q-pa-md">
          <div class="text-h5 q-py-sm">Course promotion</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.
          </p>

          <div class="q-mt-md">
            <div class="text-h5">This Course:</div>
            <ul>
              <li>View our website on computer now for get 10% discount</li>
              <li>Join our website now for an early bird special</li>
              <li>Full lifetime access</li>
              <li>
                Get start our course 1 month early at a 25% discount. Limited
                time offer.
              </li>
            </ul>
          </div>
        </q-card>
      </div>

      <div class="col-12 col-md-4">
        <q-card class="q-mt-md q-pa-md">
          <div class="text-h5">Trainer</div>

          <q-card-actions>
            <q-avatar
              size="55px"
              font-size="30px"
              color="primary"
              text-color="white"
              icon="account_circle"
            />
            <div class="q-px-md">Trainer name</div>
          </q-card-actions>

          <q-card-actions>
            <q-avatar
              size="55px"
              font-size="30px"
              color="primary"
              text-color="white"
              icon="account_circle"
            />
            <div class="q-px-md">Trainer name</div>
          </q-card-actions>

          <q-card-actions>
            <q-avatar
              size="55px"
              font-size="30px"
              color="primary"
              text-color="white"
              icon="account_circle"
            />
            <div class="q-px-md">Trainer name</div>
          </q-card-actions>
          <!-- <div class="row">
              <q-avatar
                size="55px"
                font-size="30px"
                color="teal"
                text-color="white"
                icon="directions"
              />
              <div>Teacher Name</div>
            </div> -->
        </q-card>
      </div>
    </div>
  </section>
</template>

<script setup>
// import { ref } from "vue";

const checkout = () => {
  console.log("Checkout");
};
</script>
