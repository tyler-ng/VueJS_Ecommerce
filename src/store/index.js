import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
import product from "./product";
import cart from "./cart";

Vue.use(Vuex);

export default () => {
  const Store = new Vuex.Store({
    modules: {
      user,
      product,
      cart
    },
    // for dev mode only
    strict: process.env.DEV
  });

  return Store;
};
