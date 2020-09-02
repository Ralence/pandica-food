export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_TO_CART = "REMOVE_TO_CART";
export const SET_CART_FROM_LOCAL_STORAGE = "SET_CART_FROM_LOCAL_STORAGE";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (item) => {
  const savedCart = localStorage.getItem("cart");
  let parsed;

  if (savedCart) {
    parsed = JSON.parse(savedCart).filter((cartItem) => cartItem.id != item.id);
    localStorage.setItem("cart", JSON.stringify(parsed));
  }

  return {
    type: REMOVE_TO_CART,
    payload: item,
  };
};

export const setCartFromLocal = (cart) => ({
  type: SET_CART_FROM_LOCAL_STORAGE,
  payload: cart,
});
