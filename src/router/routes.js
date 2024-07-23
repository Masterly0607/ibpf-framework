import auth from "src/helpers/middlewares/auth";

const routes = [
  //---------- public routes ------------
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      //---------- menu list ------------
      {
        path: "",
        name: "home-page",
        component: () => import("src/pages/home/HomePage.vue"),
      },
      {
        path: "product-list",
        children: [
          {
            path: "",
            name: "product-list-page",
            component: () => import("pages/course/ProductListPage.vue"),
          },
          {
            path: "product-detail/:id?/:productCode",
            name: "product-detail-page",
            component: () =>
              import("src/pages/course/product-detail/ProductDetailPage.vue"),
          },
        ],
      },
      {
        path: "event",
        name: "event-page",
        component: () => import("pages/menu/EventPage.vue"),
      },
      {
        path: "contact",
        name: "contact-page",
        component: () => import("src/pages/menu/ContactUsPage.vue"),
      },
      {
        path: "about",
        name: "about-page",
        component: () => import("pages/menu/AboutPage.vue"),
      },
    ],
  },

  // ----------- protected routes ------------
  {
    path: "/app",
    children: [
      // ----------- assessment ------------
      {
        path: "assessment",
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
        path: "user-dashboard",
        component: () => import("layouts/MainLayout.vue"),
        children: [
          //---------- user dashboard ------------
          {
            path: "",
            name: "dashboard-page",
            component: () => import("pages/user/DashboardPage.vue"),
          },
          {
            path: "profile",
            name: "profile-page",
            component: () => import("pages/user/ProfilePage.vue"),
          },

          {
            path: "my-learning",
            name: "my-learning-page",
            component: () => import("pages/user/learning/MyLearningPage.vue"),
          },
        ],
      },

      // ----------- edit profile ------------
      {
        path: "edit-profile",
        component: () => import("layouts/ReturnLayout.vue"),
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
      // ----------- e-commerce ------------
      {
        path: "/purchase",

        children: [
          {
            path: "add-to-cart",
            component: () => import("layouts/MainLayout.vue"),
            children: [
              {
                path: "",
                name: "cart-page",
                component: () => import("pages/course/cart/CartPage.vue"),
              },
            ],
          },
          {
            path: "check-out",
            component: () => import("layouts/ReturnLayout.vue"),
            children: [
              {
                path: "",
                name: "check-out-page",
                component: () =>
                  import("pages/course/checkout/CheckOutPage.vue"),
              },
            ],
          },
        ],
      },
    ],

    meta: {
      middleware: [auth],
    },
  },

  // Authenitications route
  {
    path: "/auth",
    component: () => import("src/layouts/BlankLayout.vue"),
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
