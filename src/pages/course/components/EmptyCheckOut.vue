<template>
  <div id="empty-content">
    <div class="ibf-h5 text-grey-5 text-weight-medium text-center">
      Your checkout list was reset!
    </div>

    <div class="q-my-md text-center">
      <q-btn
        unelevated
        color="primary"
        square
        :to="{ name: 'cart-page' }"
        icon="mdi-cart"
        label="Return to cart"
      />
    </div>
  </div>
</template>
