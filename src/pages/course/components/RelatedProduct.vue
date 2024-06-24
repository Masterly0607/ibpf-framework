<template>
  <div id="related-product">
    <div class="q-py-sm ibf-h8 text-weight-medium">Related Course</div>
    <div class="q-gutter-md row items-start">
      <q-img
        v-for="mode in fitModes"
        :key="mode"
        src="https://picsum.photos/500/300"
        style="max-width: 280px; height: 150px"
        :fit="mode"
      >
        <div class="absolute-bottom text-subtitle1 text-center">
          {{ mode }}
        </div>
      </q-img>
    </div>
  </div>
</template>

<script setup>
const fitModes = ["cover", "cover", "cover", "none"];
</script>
