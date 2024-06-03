const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      //---------- menu list ------------
      {
        path: "",
        name: "home-page",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "product-list",
        name: "product-list-page",
        component: () => import("pages/course/ProductListPage.vue"),
      },
      {
        path: "event",
        name: "event-page",
        component: () => import("pages/menu/EventPage.vue"),
      },
      {
        path: "enrol",
        name: "enrol-page",
        component: () => import("pages/menu/EnrolPage.vue"),
      },
      {
        path: "about",
        name: "about-page",
        component: () => import("pages/menu/AboutPage.vue"),
      },

      //---------- user dashboard ------------
      {
        path: "dashboard",
        name: "dashboard-page",
        component: () => import("pages/user/DashboardPage.vue"),
      },
      {
        path: "profile",
        name: "profile-page",
        component: () => import("pages/user/ProfilePage.vue"),
      },
      {
        path: "notifications",
        name: "notifications-page",
        component: () => import("pages/user/NotificationsPage.vue"),
      },

      {
        path: "view-product",
        name: "view-product-page",
        component: () => import("pages/course/ViewProductPage.vue"),
      },

      // ----------- add to cart ------------
      {
        path: "add-to-cart",
        name: "add-to-cart-page",
        component: () => import("pages/course/AddToCartPage.vue"),
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
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      {
        path: "",
        name: "login-page",
        component: () => import("pages/authentication/LoginPage.vue"),
      },
      {
        path: "sign-up",
        name: "sign-up-page",
        component: () => import("pages/authentication/SignUpPage.vue"),
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
