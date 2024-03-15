import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Basket from "../views/Basket.vue";
import CheckOut from "../views/CheckOut.vue";
import Product from "../views/Product.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/basket", name: "basket", component: Basket },
  { path: "/check-out", name: "check-out", component: CheckOut },
  { path: "/product/:path*", name: "product", component: Product },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;