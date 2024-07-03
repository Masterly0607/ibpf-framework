import { useUserStore } from "src/stores/user-store";

export default function auth ({ next }) {
    const userStore = useUserStore();

    if (!userStore.isAuthenticated) {
        return next({ name: "login-page" });
    } else {
        return next();
    }
}