import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/framework/Home.vue";
import pageNotFound from "./components/framework/pageNotFound.vue";
import navigation from "./components/framework/Header.vue";
import About from "./components/framework/About.vue";
import Footer from "./components/framework/Footer.vue";
import Services from "./components/framework/Services.vue";
import OurTeam from "./components/framework/OurTeam.vue";
import Network from "./components/framework/Network.vue";
import Development from "./components/framework/Development.vue";
import Actionplan from "./components/framework/Actionplan.vue";
import Preport from "./components/framework/Preport.vue";
import Inquiries from "./components/framework/Inquiries.vue";
import Teldirec from "./components/framework/Teldirec.vue";
import Officers from "./components/framework/Rti/Officers.vue";
import Annualrep from "./components/framework/Rti/Annualrep.vue";
import Events from "./components/framework/Events.vue";
import Gallery from "./components/framework/Gallery.vue";
import Test from "./components/framework/Test.vue";
import careers from "./components/framework/careers.vue";
import faq from "./components/framework/faq.vue";
import sitemap from "./components/framework/sitemap.vue";
import hardware from "./components/framework/hardware.vue";




let user = JSON.parse(localStorage.getItem('profile'));

const routes = [
  {
    // path: "*",
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: pageNotFound,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/",
    name: "home",
    component: Home,
  },

  {
    path: "/navigation",
    name: "navigation",
    component: navigation,
  }
  ,
  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/Footer",
    name: "Footer",
    component: Footer,
  },
  {
    path: "/Services",
    name: "Services",
    component:Services,
  },
  {
    path: "/OurTeam",
    name: "OurTeam",
    component:OurTeam,
  },
  {
    path: "/Network",
    name: "Network",
    component:Network,
  },
  {
    path: "/Development",
    name: "Development",
    component:Development,
  },
  {
    path: "/Actionplan",
    name: "Actionplan",
    component:Actionplan,
  },
  {
    path: "/Preport",
    name: "Preport",
    component:Preport,
  },
  {
    path: "/Inquiries",
    name: "Inquiries",
    component:Inquiries,
  },
  {
    path: "/Teldirec",
    name: "Teldirec",
    component:Teldirec,
  },
  {
    path: "/Officers",
    name: "Officers",
    component:Officers,
  },
  {
    path: "/Annualrep",
    name: "Annualrep",
    component:Annualrep,
  },
  {
    path: "/Events",
    name: "Events",
    component:Events,
  },
  {
    path: "/Gallery",
    name: "Gallery",
    component:Gallery,
  },
  {
    path: "/careers",
    name: "careers",
    component:careers,
  },
  {
    path: "/faq",
    name: "faq",
    component:faq,
  },
  {
    path: "/sitemap",
    name: "sitemap",
    component:sitemap,
  },
  {
    path: "/hardware",
    name: "hardware",
    component:hardware,
  },
  {
    path: "/Test",
    name: "Test",
    component:Test,
  },
  
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!user) {
      next({
        name: "login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;