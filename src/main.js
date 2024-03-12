import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/style.css";
import "../src/assets/css/forms.css";
import "../src/assets/css/navigationstyle.css";
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import VueAwesomePaginate from "vue-awesome-paginate";
import { FontAwesomeIcon } from './plugins/font-awesome';
import navigation from "./components/framework/Header.vue";
import Footer from "./components/framework/Footer.vue";
import Services from "./components/framework/Services.vue";
import OurTeam from "./components/framework/OurTeam.vue";
import Network from "./components/framework/Network.vue";
import Development from "./components/framework/Development.vue";
import Newsline from "./components/framework/Newsline.vue";
import Events from "./components/framework/Events.vue";
import Gallery from "./components/framework/Gallery.vue";
import Test from "./components/framework/Test.vue";
import careers from "./components/framework/careers.vue";
import faq from "./components/framework/careers.vue";
import sitemap from "./components/framework/sitemap.vue";
import hardware from "./components/framework/hardware.vue";




createApp(App)
  .use(router)
  .use(store)
  .use(VueAwesomePaginate)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("navigation", navigation)
  .component("Footer",Footer)
  .component ("Services",Services)
  .component("OurTeam",OurTeam)
  .component("Network",Network)
  .component("Development",Development)
  .component("Newsline",Newsline)
  .component("Events",Events)
  .component("Gallery",Gallery)
  .component("Test",Test)
  .component("careers",careers)
  .component("faq",faq)
  .component("sitemap",sitemap)
  .component("hardware",hardware)
 
  .component("EasyDataTable", Vue3EasyDataTable)
  .mount("#app");
