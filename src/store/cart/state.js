export default () => {
  const cartFromStorage = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : {};

  return {
    cart: {
      cartItems: cartFromStorage.cartItems || [],
      shippingAddress: cartFromStorage.shippingAddress || {},
      user: cartFromStorage.user || {}
    }
  };
};
