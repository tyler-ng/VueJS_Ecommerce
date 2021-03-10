<template>
  <b-list-group-item id="item" class="text-left">
    <b-row justify="space-around">
      <b-col>
        <b-avatar variant="primary" class="mr-1">AB</b-avatar>
      </b-col>
      <small>
        <em>{{ comment.date }}</em>
      </small>
    </b-row>
    <p>{{ comment.message }}</p>
    <b-form-rating id="rating-sm" size="sm"></b-form-rating>
  </b-list-group-item>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: "Comment",
  props: ["comment"],
  computed: {
    ...mapGetters("products", ["products"])
  }
};
</script>
<style>
p {
  margin-top: 10px;
}

#item {
  margin: 10px;
}
em {
padding-right: 10px;
}
</style>
