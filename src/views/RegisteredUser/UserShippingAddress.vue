<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-5 ">
        <ShippingAddress />
      </div>
    </div>
  </div>
</template>
<script>
import ShippingAddress from "../../components/ShippingAddress";
export default {
  name: "UserShippingAddress",
  components: {
    ShippingAddress
  }
};
</script>
<style></style>
