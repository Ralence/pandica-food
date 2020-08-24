import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { ADD_TO_CART } from "../actions/cart";

const initialState = { cart: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
