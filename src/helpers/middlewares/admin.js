import { useUserStore } from "src/stores/user-store";

export default function admin({ next }) {
  const userStore = useUserStore();
  const allowList = new Set(["admin", "education", "finance"]);

  if (!userStore.getRoles.some((item) => allowList.has(item))) {
    userStore.resetUser();
    userStore.resetToken();
    userStore.resetUserRolePermission();

    return next({ name: "login-page" });
  } else {
    return next();
  }
}
