<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-5 ">
        <h4>Guest Shipping</h4>
        <b-form @submit="onSubmit">
          <b-form-group
            id="input-group-1"
            label="First Name:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.firstName"
              placeholder="Enter Name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Last Name:"
            label-for="input-last"
          >
            <b-form-input
              id="input-1"
              v-model="form.lastName"
              placeholder="Enter last name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Phone:"
            label-for="input-phone"
          >
            <b-form-input
              id="input-1"
              v-model="form.phoneNumber"
              placeholder="Enter phone number"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Address Line:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.addressLine"
              placeholder="Enter address line"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-1" label="City:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.city"
              placeholder="Enter city"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="Province:"
            label-for="input-3"
          >
            <b-form-select
              id="input-3"
              v-model="form.province"
              :options="province"
              required
            ></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-1" label="Country:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.country"
              placeholder="Enter country"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Postal Code:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.postalCode"
              placeholder="Enter postal code"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary"
            >Continue to Checkout</b-button
          >
        </b-form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Guest",
  data() {
    return {
      form: {
        firstName: null,
        lastname: null,
        phone: null,
        addressLine: null,
        city: null,
        province: null,
        postalCode: null
      },
      province: [{ text: "Select One", value: null }, "ON", "AB", "QB", "BC"]
    };
  },
  methods: {
    ...mapActions("cart", ["addShippingAddress"]),
    onSubmit(event) {
      event.preventDefault();
      this.addShippingAddress({
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        phoneNumber: this.form.phoneNumber,
        addressLine: this.form.addressLine,
        city: this.form.city,
        province: this.form.province,
        country: this.form.country,
        postalCode: this.form.postalCode
      });
      this.$router.push("/guest/purchased");
    },
    onReset() {
      // Reset our form values
      this.form.firstName = "";
      this.form.lastName = "";
      this.form.phoneNumber = null;
      this.form.addressLine = "";
      this.form.city = "";
      this.form.province = null;
      this.form.postalCode = null;
      this.form.country = null;
    }
  }
};
</script>
<style></style>
