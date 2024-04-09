<template>
    <q-page padding>
        <q-card flat square bordered>

            <q-card-section align="center">
                <q-btn-group flat square bordered>
                    <q-btn label="Introduction" icon="timeline" />
                    <q-btn label="Self-assessment" icon="visibility" />
                    <q-btn label="Result" icon="update" />
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