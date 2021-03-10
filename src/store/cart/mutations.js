export const setCartItems = (state, value) => {
  state.cart = value;
};

export const setShippingAddress = (state, value) => {
  state.cart.shippingAddress = value;
};

export const setCartUser = (state, value) => {
  state.cart.user = value;
};
