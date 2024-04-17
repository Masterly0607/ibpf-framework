const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "user-profile",
        name: "user-profile",
        component: () => import("pages/user/UserProfile.vue"),
      },
    ],
  },

  {
    path: "/app",
    component: () => import("layouts/SkillAssessLayout.vue"),
    children: [
      {
        path: "skill-assess/:framework?/:subframework?",
        name: "framework",
        component: () => import("pages/frameworks/FrameworkPage.vue"),
      },
      {
        path: "skill-assessment",
        name: "skill-assessment",
        component: () => import("pages/skills/SkillAssessmentPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
