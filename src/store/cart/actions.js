export const addToCart = ({ commit, getters }, payload) => {
  // let cartItems = getters.cart.cartItems;

  let cart = getters.cart;

  if (cart.cartItems.length === 0) {
    // add payload {product, quantity} object to cartItems array
    // debugger;
    cart.cartItems.push(payload);
  } else {
    // debugger;
    const availableItem = cart.cartItems.filter(
      item => item.product.id === payload.product.id
    );

    if (availableItem.length > 0) {
      cart.cartItems.map(item => {
        if (item.product.id === payload.product.id) {
          item.quantity += payload.quantity;
          return item;
        }
      });
    } else {
      cart.cartItems.push(payload);
    }
  }

  // update shopping cart
  commit("setCartItems", cart);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const updateCartQuantity = ({ commit, getters }, payload) => {
  // let cartItems = getters.cart.cartItems;
  let cart = getters.cart;

  const existItem = cart.cartItems.find(
    x => x.product.id === payload.product.id
  );

  if (existItem) {
    cart.cartItems.map(item =>
      item.product.id === existItem.product.id ? payload : item
    );

    // update shopping cart
    commit("setCartItems", cart);

    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const removeCartItem = ({ commit, getters }, id) => {
  let cart = getters.cart;
  cart.cartItems = cart.cartItems.filter(
    cartItem => cartItem.product.id !== id
  );

  // update shopping cart
  commit("setCartItems", cart);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const addShippingAddress = ({ commit, getters }, payload) => {
  const cart = getters.cart;
  cart.shippingAddress = payload;
  commit("setShippingAddress", payload);
  localStorage.setItem("cart", JSON.stringify(cart));
}

export const addUserToCart = ({ commit, getters }, payload) => {
  const cart = getters.cart;
  cart.user = payload;
  commit("setCartUser", payload);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const deleteCart = ({ commit }) => {
  const cart = {
    cartItems: [],
    shippingAddress: {},
    user: {}
  };
  commit("setCartItems", cart);

  localStorage.setItem("cart", JSON.stringify(cart));
};
