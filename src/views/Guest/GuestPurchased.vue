<template>
  <div>
    <h2>Your Purchased Products</h2>
    <div class="product_container">
      <div class="row" v-if="cart.cartItems.length > 0">
        <div
          class="col-md-4"
          v-for="cartItem in cart.cartItems"
          :key="cart.cartItems.indexOf(cartItem)"
        >
          <router-link :to="'/user/cart/' + 1">
            <b-card-group>
              <b-card
                :header="cartItem.quantity"
                :title="cartItem.product.name"
                :img-src="cartItem.product.image"
                header-text-variant="white"
                header-tag="header"
                header-bg-variant="dark"
                :footer="cartItem.product.price + '$'"
                footer-tag="footer"
                footer-bg-variant="success"
                footer-border-variant="dark"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2"
              >
                <b-card-text>
                  {{ cartItem.product.description }}
                </b-card-text>
              </b-card>
            </b-card-group>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "OrderHistory",
  computed: {
    ...mapGetters("cart", ["cart"])
  },
  methods: {
    //...mapActions("cart", [""])
  },
  components: {},
  data() {
    return {
      comments: [
        {
          message: "Great products.",
          user: "Kenneth Rizo",
          rating: "5",
          date: "2021-10-20"
        },
        {
          message: "I really enjoy it.",
          user: "Yevhen Zinovkin",
          rating: "4.2",
          date: "2021-10-20"
        },
        {
          message: "Good quality.",
          user: "Thanh Ty",
          rating: "3",
          date: "2021-10-20"
        },
        {
          message: "It was what i expected.",
          user: "Kenneth Rizo",
          rating: "1",
          date: "2021-10-20"
        }
      ]
    };
  }
};
</script>
<style>
.product_container {
  margin: 5rem 0;
}
a {
  text-decoration: none !important;
}
</style>
