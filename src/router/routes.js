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
        component: () => import("pages/user/UserProfilePage.vue"),
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

  {
    path: "/profile",
    component: () => import("layouts/EditProfileLayout.vue"),
    children: [
      {
        path: "edit-profile",
        name: "edit-profile",
        component: () => import("pages/user/EditProfilePage.vue"),
      },
    ],
  },
  {
    path: "/edit",
    component: () => import("layouts/EditChangeProfileLayout.vue"),
    children: [
      {
        path: "edit-user-profile",
        name: "edit-user-profile",
        component: () => import("pages/user/components/EditUserProfile.vue"),
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
