<template>
  <div>
    <h4>Register an account</h4>
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Your Password:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.password"
          placeholder="Enter password"
          @change="passValidHandler"
          required
        ></b-form-input>
      </b-form-group>
      <p class="error-msg">{{ form.passwordError }}</p>
      <b-form-group
        id="input-group-2"
        label="Your confirm password:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.confirmPassword"
          placeholder="Enter confirm password"
          @change="matchPassword"
          required
        ></b-form-input>
      </b-form-group>
      <p class="error-msg">{{ form.confirmPasswordError }}</p>
      <b-button type="submit" variant="primary">Create</b-button>
    </b-form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "AccountCreation",
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: null,
        confirmPassword: null,
        passwordError: "",
        confirmPasswordError: "",
        success: false,
        successMessage: ""
      }
    };
  },
  watch: {
    form: {
      handler: function(val) {
        if (val.success) {
          this.form.successMessage = "Your account was created";
        }
      },
      deep: true
    }
  },
  methods: {
    ...mapActions("cart", ["addUserToCart"]),
    ...mapActions("user", ["addUserAccount"]),
    onSubmit(event) {
      event.preventDefault();
      if (
        this.form.passwordError.length === 0 &&
        this.form.confirmPasswordError.length === 0
      ) {
        this.addUserAccount({
          email: this.form.email,
          name: this.form.name,
          password: this.form.password
        });
        this.addUserToCart({ name: this.form.name, email: this.form.email });
        this.form.success = true;

        this.$router.push("/cart");
      }
    },
    passValidHandler: function() {
      if (this.form.password.length < 6) {
        this.form.passwordError =
          "password error must has at least 6 characters";
      } else {
        this.form.passwordError = "";
      }
    },
    matchPassword: function() {
      if (this.form.password !== this.form.confirmPassword) {
        this.form.confirmPasswordError =
          "Confirm password does not match password";
      } else {
        this.form.confirmPasswordError = "";
      }
    },
    resetRegister: function() {
      this.form.email = "";
      this.form.name = "";
      this.form.password = "";
      this.form.confirmPassword = "";
    }
  }
};
</script>
<style>
.error-msg,
.success-msg {
  color: tomato;
}
</style>
