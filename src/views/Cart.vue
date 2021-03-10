<template>
  <b-container class="section">
    <b-row>
      <b-col cols="12" md="8">
        <h1 id="cart-title">Shopping Cart</h1>
        <p v-if="Object.keys(cart.cartItems).length === 0">
          Cart empty.
          <b-link href="/"><strong>Continue shopping</strong></b-link>
        </p>
        <b-list-group
          flush
          v-for="cartItem in cart.cartItems"
          :key="cart.cartItems.indexOf(cartItem)"
        >
          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            <b-col cols="3" md="2">
              <router-link :to="'/products/' + cartItem.product.id">
                <b-img :src="cartItem.product.image" alt="" fluid rounded />
              </router-link>
            </b-col>
            <b-col cols="3" md="3">
              <b-link href="#">{{ cartItem.product.name }}</b-link>
            </b-col>
            <b-col cols="2" md="2">${{ cartItem.product.price }}</b-col>
            <b-col cols="2" md="2">
              <b-form>
                <b-form-select
                  v-model="cartItem.quantity"
                  id="inline-form-custom-select-pref"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  :options="options"
                  :value="cartItem.quantity"
                  v-on:change="
                    updateCartItem(cartItem.quantity, cartItem.product)
                  "
                ></b-form-select>
              </b-form>
            </b-col>
            <b-col cols="2" md="2">
              <b-button @click.stop="removeCartItem(cartItem.product.id)">
                <BIconTrash />
              </b-button>
            </b-col>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col cols="4" md="4" sm="12">
        <div>
          <b-list-group>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              <h3 v-if="Object.keys(cart).length !== 0">
                SUBTOTAL ({{
                  cart.cartItems.reduce((acc, cur) => acc + cur.quantity, 0)
                }}) ITEMS
              </h3>
              <h3 v-else>SUBTOTAL (0) ITEMS</h3>
            </b-list-group-item>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              <h4 v-if="Object.keys(cart).length !== 0">
                ${{
                  cart.cartItems.reduce(
                    (acc, cur) => acc + cur.quantity * cur.product.price,
                    0
                  )
                }}
              </h4>
              <h4 v-else>$0</h4>
            </b-list-group-item>
            <b-list-group-item
              v-if="!cart.user.name"
              class="d-flex justify-content-between align-items-center"
            >
              <b-button variant="primary" @click="$bvModal.show('modal-1')"
                >Proceed to Checkout</b-button
              >
            </b-list-group-item>
            <b-list-group-item
              v-else
              class="d-flex justify-content-between align-items-center"
            >
              <b-button variant="primary" @click="checkout"
                >Proceed to Checkout</b-button
              >
            </b-list-group-item>
          </b-list-group>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { BIconTrash } from "bootstrap-vue";
export default {
  name: "Cart",
  data() {
    return {
      options: []
    };
  },
  components: {
    BIconTrash
  },
  computed: {
    ...mapGetters("cart", ["cart"])
  },
  methods: {
    ...mapActions("cart", [
      "addToCart",
      "updateCartQuantity",
      "removeCartItem"
    ]),
    getQuantityArr() {
      const quantityList = [...Array(20).keys()].map(value => {
        return { value: value + 1, text: `${value + 1}` };
      });
      this.options = quantityList;
    },
    updateCartItem(quantity, product) {
      this.updateCartQuantity({ quantity, product });
    },
    checkout() {
      this.$router.push("/user/shipping");
    }
  },
  mounted() {
    this.getQuantityArr();
  }
};
</script>
<style>
.section {
  margin: 5rem auto;
}
#cart-title {
  text-align: left;
  margin-bottom: 2rem;
}
</style>
