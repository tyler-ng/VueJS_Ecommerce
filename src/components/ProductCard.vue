<template>
  <div>
    <div class="card-outter mb-4 shadow-sm">
      <router-link :to="'/products/' + product.id">
        <img :src="product.image" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p>${{ product.price }}</p>
          <div class="row"></div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductCard",
  props: ["product"]
};
</script>
<style>
.card .product-image {
  height: 300px;
}
</style>
