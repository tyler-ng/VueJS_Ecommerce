<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <router-link to="/"><a class="navbar-brand">eCommerceVue</a></router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/"
              >Product List
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About us</a>
          </li>
          <li class="nav-item" v-if="isLogged">
            <a class="nav-link" href="/user/orderhistory">Order</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link :to="'/cart'">
              <a class="nav-link">
                <i class="fa fa-shopping-cart" aria-hidden="true">
                  <b-badge
                    pill
                    variant="danger"
                    v-if="Object.keys(cart).length !== 0"
                  >
                    {{
                      cart.cartItems.reduce((acc, cur) => acc + cur.quantity, 0)
                    }}
                  </b-badge>
                  <b-badge pill variant="danger" v-else>
                    0
                  </b-badge>
                </i>
              </a>
            </router-link>
          </li>
          <li class="nav-item" v-if="isLogged">
            <router-link :to="'/'">
              <a class="nav-link">
                {{ user.name }}
              </a>
            </router-link>
          </li>
          <li class="nav-item" v-if="isLogged">
            <router-link :to="'/'">
              <a class="nav-link" @click="logout">
                Logout
              </a>
            </router-link>
          </li>
          <li v-if="!isLogged" class="nav-item">
            <b-button variant="black" v-b-modal.modal-1>Sign in</b-button>
            <b-modal v-if="modalShow" id="modal-1" title="Sign In" hide-footer>
              <b-form @submit="onSubmit">
                <p class="h4 text-center mb-4">Enter email and password</p>
                <div v-if="errors.length">
                  <b>Please, correct the next error(s)</b>
                  <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                  </ul>
                </div>
                <label for="emailInput" class="grey-text">Your email</label>
                <b-form-input
                  type="email"
                  v-model="email"
                  id="email"
                  @change="validEmail"
                  class="form-control"
                  name="email"
                />
                <br />
                <label for="emailPassword" class="grey-text"
                  >Your password</label
                >
                <b-form-input
                  type="password"
                  v-model="password"
                  id="password"
                  class="form-control"
                  name="password"
                />
                <div class="text-center mt-4">
                  <b-button type="submit" variant="primary">Login</b-button>
                </div>
                <div class="text-center mt-3">
                  <a href="/guest/shipping">Continue checkout as guest</a>
                </div>
                <div class="text-center mt-2">
                  <a href="/user/register">Register an account?</a>
                </div>
              </b-form>
            </b-modal>
          </li>
        </ul>
      </b-collapse>
    </nav>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "navbar",
  computed: {
    ...mapGetters("user", ["user"]),
    ...mapGetters("cart", ["cart"])
  },
  data() {
    return {
      errors: [],
      email: "",
      password: "",
      modalShow: true,
      isLogged: false
    };
  },
  methods: {
    ...mapActions("user", ["login", "removeAccount"]),
    ...mapActions("cart", ["deleteCart"]),
    onSubmit: function(e) {
      e.preventDefault();
      this.login({
        email: this.email,
        password: this.password
      }).then(r => {
        if (r) {
          this.isLogged = true;
          this.$bvModal.hide("modal-1");
        } else {
          this.errors.push(
            "The email or password is incorrect or the user does not exist."
          );
        }
      });
    },
    loginValid: function() {
      this.errors = [];
      if (this.email && this.password) {
        return true;
      }

      if (!this.email) {
        this.errors.push("The name is mandatory.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("The email must be valid.");
      }

      if (!this.password) {
        this.errors.push("The password is mandatory.");
      }
      // debugger;
      if (this.errors.length === 0) {
        this.login(this.email, this.password);
      }
    },
    validEmail: function() {
      //eslint-disable-next-line
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const bool = re.test(this.email);
      if (!bool) {
        this.errors.push("Email is in wrong format");
      }
      // return re.test(email);
    },
    logout: function() {
      this.removeAccount({});
      this.deleteCart();
      this.isLogged = false;
    }
  }
};
</script>
<style>
.container {
  margin-bottom: 5rem;
}
</style>
