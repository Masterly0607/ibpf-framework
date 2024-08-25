<template>
    <div class="row items-center">
        <q-icon color="grey-7" size="20px" :name="icon" />
        <div class="q-ml-sm text-grey-8 ibf-h12 text-weight-light">
            {{ title }}
        </div>
    </div>
</template>

<script setup>
const icon = defineModel('icon');
const title = defineModel('title')
</script>