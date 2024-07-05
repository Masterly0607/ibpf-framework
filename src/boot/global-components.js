import { boot } from "quasar/wrappers";
import QHeading1 from "@/components/slots/QHeading1.vue";
import PriceOriginal from "@/components/tools/PriceOriginal.vue";
import PriceDiscount from "@/components/tools/PriceDiscount.vue";
import PreviewJSON from "@/components/PreviewJSON.vue";
import ItemInfo from "@/components/tools/ItemInfo.vue";

//import AnotherComponent from 'src/components/AnotherComponent.vue';
//import YetAnotherComponent from 'src/components/YetAnotherComponent.vue';

export default boot(({ app }) => {
  // Register components globally
  app.component("q-heading-1", QHeading1);
  app.component("price-original", PriceOriginal);
  app.component("price-discount", PriceDiscount);
  app.component("preview-json", PreviewJSON);
  app.component("item-info", ItemInfo);
});
