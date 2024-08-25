<template>
    <q-card square class="ibf-card-3" style="min-height: 100px">
        <q-card-section :horizontal="$q.screen.gt.sm">
            <q-card-section class="col-12 col-md-2 flex flex-start">
                <slot name="image_url">
                    <q-img class="rounded-borders" src="https://cdn.quasar.dev/img/parallax2.jpg" />
                </slot>
            </q-card-section>
            <q-card-section class="col-auto col-md-7 q-pt-sm">
                <div class="full-height column">
                    <div id="title">
                        <div class="ibf-h9 q-mt-sm q-mb-xs text-capitalize text-weight-medium">
                            <slot name="title" v-if="$slots.title">
                                Default course title
                            </slot>
                        </div>

                        <!-- labels -->

                        <div class="q-my-md">
                            <slot name="labels" v-if="$slots.labels">
                                No Labels
                            </slot>
                        </div>
                        <div class="text-caption text-grey">
                            <slot name="subtitle" v-if="$slots.subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </slot>
                        </div>
                    </div>

                    <!--<q-space />-->

                    <div class="q-pt-md">
                        <slot name="progress" v-if="$slots.progress"> -- -- </slot>
                    </div>
                </div>
            </q-card-section>
        </q-card-section>
        <q-card-section>
            <q-separator spaced />
            <q-card-actions align="right" class="q-pa-none q-gutter-x-lg ">
                <slot name="payment_status" v-if="$slots.payment_status">
                    Payment status
                </slot>
                <slot name="continue_btn" v-if="$slots.continue_btn"></slot>
                <slot name="action_btn" v-if="$slots.action_btn"></slot>
            </q-card-actions>
        </q-card-section>
    </q-card>
</template>

<script setup>
import { useQuasar } from "quasar";
const $q = useQuasar();
</script>
