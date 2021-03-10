<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <h4>Purchased product</h4>
        <b-card class="mb-3">
          <img :src="product.image" alt="product image" />
          <b-card-text>
            {{ product.description }}
          </b-card-text>
        </b-card>
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
import Comment from "../../components/Comment.vue";
export default {
  name: "PurchasedProduct",
  data() {
    return {
      id: this.$route.params.id,
      product: {},
      errors: [],
      file1: [],
      message: "",
      rating: "4.2",
      createdOn: "2021-10-01",
      success: false,
      productComments: [],
      isDone: false
    };
  },
  watch: {
    isDone: function() {
      this.loadProductDetails();
    },
    success: function() {
      this.loadComments();
    }
  },
  computed: {
    ...mapGetters("product", ["products"]),
    ...mapGetters("user", ["user"])
  },
  components: {
    Comment
  },
  methods: {
    ...mapActions("product", ["addCommentToProduct"]),
    ...mapActions("product", ["getProducts"]),
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
    loadProductDetails: function() {
      this.product = this.products[Number(this.id) - 1];
    },
    loadComments: function() {
      const product = this.products[Number(this.id)];
      this.productComments = product.comments;
    }
  },
  mounted() {
    this.isDone = true;
    this.getProducts();
    this.loadComments();
  }
};
</script>
<style>
.img-thumbnail {
  border: none !important;
}
</style>
