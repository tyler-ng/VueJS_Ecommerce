<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-5 ">
        <AccountCreation />
      </div>
    </div>
  </div>
</template>
<script>
import AccountCreation from "../../components/AccountCreation";
export default {
  name: "UserRegister",
  components: {
    AccountCreation
  }
};
</script>
<style></style>
