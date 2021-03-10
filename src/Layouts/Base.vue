<template>
  <div>
    <div id="navbar-wrapper">
      <NavBar />
    </div>
    <div class="container">
      <router-view />
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default {
  name: "Base",
  components: { NavBar, Footer }
};
</script>

<style>
#navbar-wrapper {
  background-color: #1a1a1a;
}
</style>
