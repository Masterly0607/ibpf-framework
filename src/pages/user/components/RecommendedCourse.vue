<template>
  <section id="recommended-course">
    <!-- <div class="q-pa-sm"> -->
    <div>
      <q-list bordered class="row">
        <q-item
          v-for="(skill, index) in skills"
          :key="index"
          clickable
          tag="a"
          :href="skill.href"
          class="col-6 col-md-4"
        >
          <q-item-section avatar>
            <q-chip class="job-seeker-skills__count">{{ index + 1 }}</q-chip>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ skill.name }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <!-- <q-btn flat dense>{{ skill.action }}</q-btn> -->
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <!-- </div> -->
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const showMore = ref(false);
const skills = ref([
  {
    name: "Graphic Design",
    href: "/learning/search?keywords=Graphic%20Design",
    action: "See more →",
  },
  {
    name: "Adobe Photoshop",
    href: "/learning/search?keywords=Adobe%20Photoshop",
    action: "Explore →",
  },
  {
    name: "Adobe Illustrator",
    href: "/learning/search?keywords=Adobe%20Illustrator",
    action: "Explore →",
  },
  {
    name: "Logo Design",
    href: "/learning/search?keywords=Logo%20Design",
    action: "Explore →",
  },
  {
    name: "Adobe InDesign",
    href: "/learning/search?keywords=Adobe%20InDesign",
    action: "Explore →",
  },
  {
    name: "Adobe Creative Suite",
    href: "/learning/search?keywords=Adobe%20Creative%20Suite",
    action: "Explore →",
  },
]);

const buttonLabel = computed(() =>
  showMore.value ? "Show less" : "Show more"
);

const toggleShowMore = () => {
  showMore.value = !showMore.value;
};
</script>

<style scoped>
.job-seeker-skills__footer-container-skills-item {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.job-seeker-skills__count {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #f0f0f0;
  color: #333;
  font-weight: bold;
}

.job-seeker-skills__skill-info {
  flex-grow: 1;
  padding-left: 16px;
}

.job-seeker-skills__explore {
  padding-right: 16px;
}
/*  */
.job-seeker-skills__footer {
  padding: 16px;
}
.job-seeker-skills__footer-container {
  max-width: 600px;
  margin: 0 auto;
}
.job-seeker-skills__footer-container-skills-item {
  display: flex;
  align-items: center;
}
</style>
