<template>
    <q-page padding>
        <q-card flat square>
            <q-card-section align="center">
                <q-btn-group flat square>
                    <q-btn label="Introduction" />
                    <q-btn label="Self-assessment" />
                    <q-btn label="Result" />
                </q-btn-group>
            </q-card-section>
        </q-card>
        <skills-intro></skills-intro>
        <!-- assessment -->
        <assessment-block></assessment-block>
    </q-page>

</template>

<script setup>
import SkillsIntro from '@/pages/skills/components/SkillsIntro.vue';
import AssessmentBlock from '@/pages/skills/components/AssessmentBlock.vue';

</script>