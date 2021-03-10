import { sampleProducts } from "../../data/products";

export const getProducts = ({ commit }) => {
  // get product list from API sources or using fake data
  let products = sampleProducts;

  commit("setProducts", products);
};

export const getProductDetails = ({ commit, getters }, id) => {
  // get a single product object with a specific id from the product list
  const productDetails = getters.products.find(item => item.id === Number(id));

  commit("setProduct", productDetails);
};

export const addCommentToProduct = ({ commit, getters }, newComment) => {
  const id = newComment.id;
  const products = getters.products;
  const commentWithoutId = {
    message: newComment.message,
    rating: newComment.rating,
    createdOn: newComment.createdOn
  };
  products[id].comments.push(commentWithoutId);

  commit("setProducts", products);
  localStorage.setItem("products", JSON.stringify(products));
};
