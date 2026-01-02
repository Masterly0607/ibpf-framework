import { Screen } from "quasar";

export default function screen({ next }) {
  if (Screen.lt.sm) {
    return next({ name: "error-screen" });
  } else {
    return next();
  }
}
