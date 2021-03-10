<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <img :src="product.image" alt="produc image" />
      </div>
      <div class="col-md-6">
        <p>{{ product.description }}</p>
        <div class="form-container">
          <b-form inline>
            <b-form-select
              v-model="quantity"
              id="inline-form-custom-select-pref"
              class="mb-2 mr-sm-2 mb-sm-0"
              :options="options"
            ></b-form-select>
            <b-button
              @click.stop="addItemToCart({ quantity, product })"
              variant="outline-primary"
              >Add to Cart
            </b-button>
          </b-form>
        </div>
      </div>
    </div>
    <h4>Comments</h4>
    <div class="row">
      <div
        class="col-md-3"
        v-for="comment in productComments"
        :key="comment.id">
        <Comment :comment="comment" />
      </div>
    </div>
<div>
      <b-form @submit="onSubmit" class="text-left">
        <p class="h4 text-center mb-4">
          Enter your comment about the product
        </p>
        <div v-if="errors.length">
          <b>Please, correct the next error(s)</b>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </div>
        <label for="commentInput" class="grey-text">Your comment:</label>
        <b-form-input
          type="text"
          v-model="message"
          id="commentInput"
          class="form-control"
          name="commentInput"
          placeholder="What do you think about the product?"
        />
        <br />
        <label for="emailPassword" class="grey-text">Image:</label>
        <b-form-file
          v-model="file1"
          :state="Boolean(file1)"
          placeholder="Choose a file or drop it here...(optional)"
          drop-placeholder="Drop file here..."
        ></b-form-file>
        <div class="mt-3">Selected file: {{ file1 ? file1.name : "" }}</div>
        <div class="text-center mt-4">
          <b-button type="submit" variant="primary">Send</b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Comment from "../components/Comment.vue";
export default {
  name: "Details",
  data() {
    return {
      quantity: 1,
      options: [],
      id: this.$route.params.id,
      errors: [],
      file1: [],
      message: "",
      rating: "4.2",
      createdOn: "2021-10-01",
      success: false,
      productComments: []
    };
  },
  watch: {
    success: function() {
      this.loadComments();
    }
  },
  computed: {
    ...mapGetters("product", ["product", "products"]),
    ...mapGetters("user", ["user"])
  },
  components: {
    Comment
  },
  methods: {
    ...mapActions("product", ["getProductDetails"]),
    ...mapActions("cart", ["addToCart"]),
    ...mapActions("product", ["addCommentToProduct"]),
    ...mapActions("product", ["getProducts"]),
    addItemToCart(data) {
      this.addToCart(data);
      this.$router.push("/cart");
    },
    getQuantityArr() {
      const quantityList = [...Array(this.product.quantity).keys()].map(
        value => {
          return { value: value + 1, text: `${value + 1}` };
        }
      );
      this.options = quantityList;
    },
    onSubmit: function(e) {
      e.preventDefault();
      this.addCommentToProduct({
        id: this.id,
        message: this.message,
        rating: this.rating,
        createdOn: this.createdOn
      });
      this.success = true;
    },
    commentValid: function() {
      if (this.text && this.file1) {
        return true;
      }

      if (!this.text) {
        this.errors.push("You must fill the input of comment");
      }
      this.addCommentToProduct(this.com);
    },
    loadComments: function() {
      const product = this.products[Number(this.id)];
      this.productComments = product.comments;
    }
  },
  mounted() {
    this.getProductDetails(this.$route.params.id);
    this.getQuantityArr();
    this.getProducts();
    this.loadComments();
  }
};
</script>
<style>
.form-container {
  margin: 5rem 0;
}
</style>
