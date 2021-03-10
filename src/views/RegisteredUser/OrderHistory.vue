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
          <router-link :to="'/user/orderhistory/' + cartItem.product.id">
            <b-card
              :title="cartItem.product.name"
              :img-src="cartItem.product.image"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                {{ cartItem.product.description.substring(0, 200) }}
              </b-card-text>
            </b-card>
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
