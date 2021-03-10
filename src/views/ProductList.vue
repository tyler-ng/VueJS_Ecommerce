<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import ProductCard from "../components/ProductCard";
export default {
  computed: {
    ...mapGetters("product", ["products"])
  },
  components: {
    ProductCard
  },
  methods: {
    ...mapActions("product", ["getProducts", "addShoppingCart"])
  },
  mounted() {
    this.getProducts();
  }
};
</script>
<style>
.container {
  padding: 5px;
}
</style>
