import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { ADD_TO_CART, REMOVE_TO_CART } from "../actions/cart";

const initialState = { cart: [] };

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...payload };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    case REMOVE_TO_CART:
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== payload.id),
      };
    default:
      return state;
  }
};

export default reducer;
