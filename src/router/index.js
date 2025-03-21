import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";
import { nextMiddleware } from "src/helpers/middlewares/middlewareFactory";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  //add middlewareFactory here
  Router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {
      const guards = Array.isArray(to.meta.middleware)
        ? to.meta.middleware
        : [to.meta.middleware];

      const context = {
        from,
        next,
        to,
      };

      const nextGuard = nextMiddleware(context, guards, 1);

      return guards[0]({ ...context, next: nextGuard });
    }

    return next();
  });

  return Router;
});
