import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../Layouts/Base.vue"),
    children: [
      // { path: "", component: () => import("../views/List.vue") },
      { path: "", component: () => import("../views/ProductList.vue") },
      {
        path: "/products/:id",
        component: () => import("../views/Details.vue")
      },
      {
        path: "/cart",
        component: () => import("../views/Cart.vue")
      },
      {
        path: "/user/register",
        component: () => import("../views/RegisteredUser/UserRegister.vue")
      },
      {
        path: "/user/shipping",
        component: () =>
          import("../views/RegisteredUser/UserShippingAddress.vue")
      },
      {
        path: "/user/orderhistory",
        component: () => import("../views/RegisteredUser/OrderHistory.vue")
      },
      {
        path: "/user/orderhistory/:id",
        component: () => import("../views/RegisteredUser/PurchasedProduct.vue")
      },
      {
        path: "/guest/shipping",
        component: () => import("../views/Guest/GuestShippingAddress.vue")
      },
      {
        path: "/guest/purchased",
        component: () => import("../views/Guest/GuestPurchased.vue")
      },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
