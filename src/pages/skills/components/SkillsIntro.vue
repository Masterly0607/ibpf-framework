<template>
    <section id="skill-intro">
        <div class="text-center ibf-h5 q-mb-md text-weight-bold">
            Hi there, let’s get you started!
        </div>

        <div class="text-center ibf-h10 text-grey-6">
            This task focuses predominantly on non-technical skills and this survey should take you no more than 1
            hour to complete.
        </div>

        <div class="row q-mt-md">
            <div class="col-12 col-md-4" v-for="(step, index) in steps" :key="index">
                <div class="q-pa-sm">
                    <q-card style="border-radius: 16px;">
                        <q-card-section align="center">
                            <div class="q-mb-md">
                                <q-avatar size="3.4rem" text-color="white" color="primary">
                                    {{ index + 1 }}
                                </q-avatar>
                            </div>
                            <div class="ibf-h10 text-grey-6 ellipsis-2-lines">
                                {{ step.text }}
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
            </div>
        </div>


    </section>
</template>

<script setup>
import { ref } from 'vue'
const steps = ref([
    {
        title: 1,
        text: 'The survey includes total 30 questions'
    },

    {
        title: 2,
        text: 'You will get your scorecard by email after completion.'
    },

    {
        title: 3,
        text: 'There will be recommended courses for you.'
    }
])

</script>