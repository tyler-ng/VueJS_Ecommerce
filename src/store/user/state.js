export default () => {
  const userAccFromStorage = localStorage.getItem("userAccount")
    ? JSON.parse(localStorage.getItem("userAccount"))
    : {};

  return {
    user: userAccFromStorage
  };
};
