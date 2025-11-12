import { createRouter, createWebHistory } from "vue-router";
import ProductList from "@/pages/ProductList.vue";
import ProductDetails from "@/pages/ProductDetails.vue";
import Checkout from "@/pages/Checkout.vue";
import ProductNotFound from "@/pages/ProductNotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/products" },
    { path: "/products", component: ProductList },
    { path: "/products/:id", component: ProductDetails, props: true },
    { path: "/checkout", component: Checkout },
    { path: "/product-not-found", component: ProductNotFound }
  ]
});

export default router;
