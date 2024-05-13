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
        path: "dashboard",
        name: "dashboard",
        component: () => import("pages/user/DashboardPage.vue"),
      },
      {
        path: "profile-page",
        name: "profile-page",
        component: () => import("pages/user/ProfilePage.vue"),
      },
      {
        path: "notifications",
        name: "notifications",
        component: () => import("pages/user/NotificationsPage.vue"),
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
    path: "/edit-profile",
    component: () => import("layouts/EditLayout.vue"),
    children: [
      {
        path: "",
        name: "edit-user-profile",
        component: () => import("pages/user/EditUserProfilePage.vue"),
      },
      {
        path: "edit-user-work",
        name: "edit-user-work",
        component: () => import("pages/user/EditUserWorkPage.vue"),
      },
    ],
  },

  // Authenitications route
  {
    path: "/auth",
    component: () => import("pages/authentication/LoginPage.vue"),
    children: [],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
