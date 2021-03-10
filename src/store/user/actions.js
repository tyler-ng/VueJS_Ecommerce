import router from "../../router";

export const login = ({ getters }, user) => {
  const currentAccount = getters.user;
  if (
    currentAccount.email === user.email &&
    currentAccount.password === user.password
  ) {
    router.push("/cart");
    return true;
  } else {
    return false;
  }
};

export const addUserAccount = ({ commit }, payload) => {
  commit("setUser", payload);
  localStorage.setItem("userAccount", JSON.stringify(payload));
};

export const removeAccount = ({ commit }, payload) => {
  commit("setUser", payload);
  localStorage.removeItem("userAccount");
}
