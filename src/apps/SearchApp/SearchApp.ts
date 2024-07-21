import { createApp } from "vue";
import SearchApp from "./SearchApp.vue";
export const init = () => {
  // You can remove this if you don't need vue or any javascript framework
  if (document.querySelector("#searchApp")) {
    createApp(SearchApp).mount("#searchApp");
  }
};
